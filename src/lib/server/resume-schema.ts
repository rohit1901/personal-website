import "server-only";
import {
  validate as validateJsonResume,
  type ValidationError,
} from "@jsonresume/schema";
import type {
  Award,
  Certificate,
  Education,
  Language,
  ResumeImage,
  ResumeLocation,
  ResumeSchema,
  Skill,
  Work,
} from "@website/types";
import { toHighlights, toKeywords } from "@website/lib/resume-view";
import { toSafeExternalUrl } from "@website/lib/url";

type UnknownRecord = Record<string, unknown>;

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function asString(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function asId(value: unknown): string | undefined {
  if (typeof value === "string") return asString(value);
  if (typeof value === "number" && Number.isFinite(value)) return String(value);
  return undefined;
}

function asPositiveNumber(value: unknown): number | undefined {
  if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) {
    return undefined;
  }
  return Math.round(value);
}

function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

function normalizeLanguage(value: unknown): Language | undefined {
  if (!isRecord(value)) return undefined;

  const label = asString(value.label);
  if (!label) return undefined;

  return {
    id: asId(value.id),
    label,
    value: asString(value.value),
  };
}

function isSafeImageSrc(src: string): boolean {
  if (src.startsWith("//")) return false;
  if (/^[a-z][a-z0-9+.-]*:/i.test(src)) {
    return toSafeExternalUrl(src) !== undefined;
  }
  return !src.split("/").includes("..");
}

function normalizeImage(
  value: unknown,
  fallbackAlt: string,
): ResumeImage | undefined {
  if (!isRecord(value)) return undefined;

  const src = asString(value.src);
  if (!src || !isSafeImageSrc(src)) return undefined;

  return {
    src,
    alt: asString(value.alt) ?? fallbackAlt,
    width: asPositiveNumber(value.width) ?? 112,
    height: asPositiveNumber(value.height) ?? 112,
  };
}

function normalizeLocation(value: unknown): ResumeLocation | undefined {
  if (!isRecord(value)) return undefined;

  const city = asString(value.city);
  const region = asString(value.region);
  if (!city && !region) return undefined;

  return { city, region };
}

function normalizeEmail(value: unknown): string | undefined {
  const email = asString(value);
  if (!email) return undefined;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : undefined;
}

/**
 * JSON Resume dates are optional and accept YYYY, YYYY-MM, or YYYY-MM-DD.
 * Invalid values are dropped instead of failing the whole record.
 */
function normalizeIsoDate(value: unknown): string | undefined {
  const text = asString(value);
  if (!text) return undefined;

  const candidate = /^\d{4}-\d{2}-\d{2}/.test(text) ? text.slice(0, 10) : text;
  const match = /^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?$/.exec(candidate);
  if (!match) return undefined;

  const month = match[2] ? Number(match[2]) : undefined;
  const day = match[3] ? Number(match[3]) : undefined;
  if (month !== undefined && (month < 1 || month > 12)) return undefined;
  if (day !== undefined && (day < 1 || day > 31)) return undefined;

  return candidate;
}

function normalizeWork(value: unknown): Work | undefined {
  if (!isRecord(value)) return undefined;

  const name = asString(value.name);
  if (!name) return undefined;

  return {
    id: asId(value.id),
    name,
    position: asString(value.position),
    startDate: normalizeIsoDate(value.startDate),
    endDate: normalizeIsoDate(value.endDate),
    summary: asString(value.summary),
    highlights: toHighlights(value.highlights),
  };
}

function normalizeEducation(value: unknown): Education | undefined {
  if (!isRecord(value)) return undefined;

  const institution = asString(value.institution);
  if (!institution) return undefined;

  return {
    id: asId(value.id),
    institution,
    area: asString(value.area),
    studyType: asString(value.studyType),
    startDate: normalizeIsoDate(value.startDate),
    endDate: normalizeIsoDate(value.endDate),
  };
}

function normalizeAward(value: unknown): Award | undefined {
  if (!isRecord(value)) return undefined;

  const title = asString(value.title);
  if (!title) return undefined;

  return {
    id: asId(value.id),
    title,
    awarder: asString(value.awarder),
    date: normalizeIsoDate(value.date),
  };
}

function normalizeSkill(value: unknown): Skill | undefined {
  if (!isRecord(value)) return undefined;

  const name = asString(value.name);
  if (!name) return undefined;

  const keywords = [
    ...new Set(
      toKeywords(value.keywords)
        .map((keyword) => keyword.trim())
        .filter(Boolean),
    ),
  ];

  return { id: asId(value.id), name, keywords };
}

/**
 * Validates a canonical JSON Resume document. The schema intentionally allows
 * unknown properties and declares no required fields, so the minimum fields
 * the site relies on are enforced separately in `normalizeResume`.
 */
export function validateResumeDocument(value: unknown): ValidationError[] {
  const errors: ValidationError[] = [];

  validateJsonResume(value, (validationErrors, valid) => {
    if (!valid) {
      errors.push(
        ...(validationErrors ?? [
          { property: "instance", message: "invalid résumé document" },
        ]),
      );
    }
  });

  return errors;
}

/**
 * Logs validator property paths and counts, never instance values.
 */
export function reportResumeValidationFailure(
  service: string,
  errors: ValidationError[],
): void {
  const fields = [
    ...new Set(errors.map((error) => error.property).filter(Boolean)),
  ].slice(0, 20);

  console.error(`[${service}] resume validation failed`, {
    service,
    reason: "invalid",
    invalidFields: errors.length,
    fields,
  });
}

function toJsonResumeCertificate(certificate: Certificate): UnknownRecord {
  return {
    name: certificate.title,
    ...(certificate.link ? { url: certificate.link } : {}),
    ...(certificate.description ? { summary: certificate.description } : {}),
  };
}

/**
 * Maps the Keystone-shaped backend record to the view model. Only values the
 * site renders are kept; everything is type-checked here before validation.
 */
export function normalizeResume(value: unknown): ResumeSchema | undefined {
  if (!isRecord(value)) return undefined;

  const id = asId(value.id);
  const basics = value.basicInformation;
  if (!id || !isRecord(basics)) return undefined;

  const name = asString(basics.name);
  if (!name) return undefined;

  const language =
    normalizeLanguage(value.language) ?? normalizeLanguage(basics.language);
  if (!language) return undefined;

  // The JSON Resume projection always contains arrays, so a malformed backend
  // section would otherwise be silently flattened to `[]` and pass validation.
  // Reject the record instead of hiding a schema contract violation.
  for (const section of ["work", "education", "awards", "skills"] as const) {
    const candidate = value[section];
    if (
      candidate !== undefined &&
      candidate !== null &&
      !Array.isArray(candidate)
    ) {
      return undefined;
    }
  }

  const resume: ResumeSchema = {
    id,
    basicInformation: {
      id: asId(basics.id),
      name,
      label: asString(basics.label),
      image: normalizeImage(basics.image, name),
      email: normalizeEmail(basics.email),
      summary: asString(basics.summary),
      location: normalizeLocation(basics.location),
      language,
    },
    work: asArray(value.work).map(normalizeWork).filter(isDefined),
    education: asArray(value.education)
      .map(normalizeEducation)
      .filter(isDefined),
    awards: asArray(value.awards).map(normalizeAward).filter(isDefined),
    skills: asArray(value.skills).map(normalizeSkill).filter(isDefined),
    certificates: [],
    language,
  };

  return resume;
}

export function toJsonResume(resume: ResumeSchema): UnknownRecord {
  const { basicInformation: basics } = resume;
  const image = basics.image;

  const canonicalBasics: UnknownRecord = {
    name: basics.name,
    custom: {
      website: {
        id: resume.id,
        ...(resume.language ? { language: resume.language.label } : {}),
        ...(image ? { image } : {}),
      },
    },
    ...(basics.label ? { label: basics.label } : {}),
    ...(image ? { image: image.src } : {}),
    ...(basics.email ? { email: basics.email } : {}),
    ...(basics.summary ? { summary: basics.summary } : {}),
    ...(basics.location ? { location: basics.location } : {}),
  };

  return {
    basics: canonicalBasics,
    work: resume.work.map((job) => ({
      name: job.name,
      ...(job.position ? { position: job.position } : {}),
      ...(job.startDate ? { startDate: job.startDate } : {}),
      ...(job.endDate ? { endDate: job.endDate } : {}),
      ...(job.summary ? { summary: job.summary } : {}),
      ...(job.highlights.length > 0 ? { highlights: job.highlights } : {}),
    })),
    education: resume.education.map((entry) => ({
      institution: entry.institution,
      ...(entry.area ? { area: entry.area } : {}),
      ...(entry.studyType ? { studyType: entry.studyType } : {}),
      ...(entry.startDate ? { startDate: entry.startDate } : {}),
      ...(entry.endDate ? { endDate: entry.endDate } : {}),
    })),
    awards: resume.awards.map((award) => ({
      title: award.title,
      ...(award.awarder ? { awarder: award.awarder } : {}),
      ...(award.date ? { date: award.date } : {}),
    })),
    skills: resume.skills.map((skill) => ({
      name: skill.name,
      ...(skill.keywords.length > 0 ? { keywords: skill.keywords } : {}),
    })),
    certificates: resume.certificates.map(toJsonResumeCertificate),
  };
}

/**
 * Returns a resume only when its normalized canonical projection passes the
 * JSON Resume schema. Invalid records are logged by field path and discarded.
 */
export function parseResume(value: unknown): ResumeSchema | undefined {
  const resume = normalizeResume(value);
  if (!resume) return undefined;

  const errors = validateResumeDocument(toJsonResume(resume));
  if (errors.length > 0) {
    reportResumeValidationFailure("resume", errors);
    return undefined;
  }

  return resume;
}

export function normalizeCertificate(entry: unknown): Certificate | undefined {
  if (!isRecord(entry) || !isRecord(entry.certification)) {
    return undefined;
  }

  const certification = entry.certification;
  const title = asString(certification.title);
  if (!title) return undefined;

  const certificate: Certificate = {
    id: asId(certification.id) ?? title,
    title,
    description: asString(certification.description) ?? "",
    link: toSafeExternalUrl(certification.link) ?? "",
  };

  const errors = validateResumeDocument({
    certificates: [toJsonResumeCertificate(certificate)],
  });
  if (errors.length > 0) {
    reportResumeValidationFailure("resume-certifications", errors);
    return undefined;
  }

  return certificate;
}
