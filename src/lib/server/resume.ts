import "server-only";
import {
  GetResumeCertificationsQuery,
  GetResumesQuery,
} from "@website/constants";
import type { Certificate, ResumeSchema } from "@website/types";
import { logExternalFailure } from "@website/lib/server/log";
import { requestGraphQL } from "@website/lib/server/graphql";
import {
  normalizeCertificate,
  parseResume,
} from "@website/lib/server/resume-schema";

/**
 * Résumé data is refreshed at most once per hour. Bumping this value trades
 * freshness for fewer calls to the GraphQL backend.
 */
export const RESUME_REVALIDATE_SECONDS = 3600;

export const DEFAULT_RESUME_LANGUAGE = "English";

/**
 * The backend also contains résumés for other people. Record selection must
 * match this verified owner as well as the requested language so an unrelated
 * person's data can never render on the site.
 */
export const RESUME_OWNER_NAME = "Rohit Khanduri";

type ResumesPayload = { resumes?: unknown };
type CertificationsPayload = { resumeCertifications?: unknown };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizeText(value: string): string {
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

/**
 * The backend does not expose per-locale query arguments, so we always fetch
 * every résumé, validate each record, and select the requested one locally.
 */
export async function getResumes(): Promise<ResumeSchema[]> {
  try {
    const payload = await requestGraphQL<ResumesPayload>(GetResumesQuery, {
      revalidateSeconds: RESUME_REVALIDATE_SECONDS,
    });

    if (!Array.isArray(payload.resumes)) {
      throw new Error("Expected `resumes` to be an array");
    }

    return payload.resumes
      .map(parseResume)
      .filter((resume): resume is ResumeSchema => resume !== undefined);
  } catch (error) {
    logExternalFailure("resume", error);
    return [];
  }
}

export async function getResumeByLanguage(
  language: string = DEFAULT_RESUME_LANGUAGE,
  ownerName: string | undefined = RESUME_OWNER_NAME,
): Promise<ResumeSchema | undefined> {
  const resumes = await getResumes();
  const requestedLanguage = normalizeText(language);
  const requestedOwner = ownerName ? normalizeText(ownerName) : undefined;

  return resumes.find((resume) => {
    const resumeLanguage = resume.language?.label;
    if (!resumeLanguage) return false;
    if (normalizeText(resumeLanguage) !== requestedLanguage) return false;
    if (!requestedOwner) return true;

    return normalizeText(resume.basicInformation.name) === requestedOwner;
  });
}

export const getEnglishResume = () =>
  getResumeByLanguage(DEFAULT_RESUME_LANGUAGE);

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
      .map(normalizeCertificate)
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
