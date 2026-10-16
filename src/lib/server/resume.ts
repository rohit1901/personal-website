import "server-only";
import {
  GetResumeCertificationsQuery,
  GetResumesQuery,
} from "@website/constants";
import type { Certificate, ResumeSchema } from "@website/types";
import { logExternalFailure } from "@website/lib/server/log";
import { requestGraphQL } from "@website/lib/server/graphql";

/**
 * Résumé data is refreshed at most once per hour. Bumping this value trades
 * freshness for fewer calls to the GraphQL backend.
 */
export const RESUME_REVALIDATE_SECONDS = 3600;

export const DEFAULT_RESUME_LANGUAGE = "English";

type ResumesPayload = { resumes?: unknown };
type CertificationsPayload = { resumeCertifications?: unknown };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

/**
 * The backend does not expose per-locale query arguments, so we always fetch
 * every résumé and select the requested language locally.
 */
function isUsableResume(value: unknown): value is ResumeSchema {
  return (
    isRecord(value) &&
    typeof value.id === "string" &&
    isRecord(value.basicInformation)
  );
}

export async function getResumes(): Promise<ResumeSchema[]> {
  try {
    const payload = await requestGraphQL<ResumesPayload>(GetResumesQuery, {
      revalidateSeconds: RESUME_REVALIDATE_SECONDS,
    });

    if (!Array.isArray(payload.resumes)) {
      throw new Error("Expected `resumes` to be an array");
    }

    return payload.resumes.filter(isUsableResume);
  } catch (error) {
    logExternalFailure("resume", error);
    return [];
  }
}

export async function getResumeByLanguage(
  language: string = DEFAULT_RESUME_LANGUAGE,
): Promise<ResumeSchema | undefined> {
  const resumes = await getResumes();
  return resumes.find((resume) => resume.language?.label === language);
}

export const getEnglishResume = () =>
  getResumeByLanguage(DEFAULT_RESUME_LANGUAGE);

function toCertificate(entry: unknown): Certificate | undefined {
  if (!isRecord(entry) || !isRecord(entry.certification)) {
    return undefined;
  }
  const certification = entry.certification;
  const image = certification.image;

  if (
    typeof certification.title !== "string" ||
    !isRecord(image) ||
    typeof image.src !== "string"
  ) {
    return undefined;
  }

  return {
    id:
      typeof certification.id === "string"
        ? certification.id
        : certification.title,
    title: certification.title,
    description:
      typeof certification.description === "string"
        ? certification.description
        : "",
    link: typeof certification.link === "string" ? certification.link : "",
    image: image as Certificate["image"],
  };
}

/**
 * Certifications live behind a separate relation (`resumeCertifications`).
 * A failure here degrades to an empty list rather than breaking the résumé.
 */
export async function getResumeCertifications(
  resumeId?: string,
): Promise<Certificate[]> {
  try {
    const payload = await requestGraphQL<CertificationsPayload>(
      GetResumeCertificationsQuery,
      { revalidateSeconds: RESUME_REVALIDATE_SECONDS },
    );

    if (!Array.isArray(payload.resumeCertifications)) {
      throw new Error("Expected `resumeCertifications` to be an array");
    }

    return payload.resumeCertifications
      .filter(
        (entry) =>
          resumeId === undefined ||
          (isRecord(entry) &&
            isRecord(entry.resume) &&
            entry.resume.id === resumeId),
      )
      .map(toCertificate)
      .filter(
        (certificate): certificate is Certificate => certificate !== undefined,
      );
  } catch (error) {
    logExternalFailure("resume-certifications", error);
    return [];
  }
}

/**
 * Returns the résumé for a language with its certifications attached, or
 * `undefined` when the backend has no usable content.
 */
export async function getResumeWithCertifications(
  language: string = DEFAULT_RESUME_LANGUAGE,
): Promise<ResumeSchema | undefined> {
  const resume = await getResumeByLanguage(language);
  if (!resume) {
    return undefined;
  }

  const certificates = await getResumeCertifications(resume.id);
  return { ...resume, certificates };
}
