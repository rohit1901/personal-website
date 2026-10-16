import Image from "next/image";
import type { ResumeSchema } from "@website/types";
import { getResumeImageUrl } from "@website/lib";
import {
  formatDateRange,
  formatMonthYear,
  toHighlights,
  toKeywords,
} from "@website/lib/resume-view";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
      {children}
    </h2>
  );
}

export function ResumeView({ resume }: { resume: ResumeSchema }) {
  const basics = resume.basicInformation;
  const skills = (resume.skills ?? []).filter((skill) => skill?.name);
  const work = (resume.work ?? []).filter((job) => job?.name);
  const education = (resume.education ?? []).filter(
    (item) => item?.institution,
  );
  const awards = (resume.awards ?? []).filter((award) => award?.title);
  const certificates = (resume.certificates ?? []).filter((c) => c?.title);
  const image = basics?.image;

  return (
    <div className="space-y-14">
      <header>
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          {image?.src && (
            <Image
              src={getResumeImageUrl(image.src)}
              alt={image.alt || basics?.name || "Profile photo"}
              width={image.width || 112}
              height={image.height || 112}
              className="h-28 w-28 shrink-0 rounded-2xl object-cover"
            />
          )}
          <div>
            {basics?.name && (
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {basics.name}
              </h1>
            )}
            {basics?.label && (
              <p className="mt-2 text-lg text-muted-foreground">
                {basics.label}
              </p>
            )}
          </div>
        </div>
        {basics?.summary && <p className="ds-prose mt-6">{basics.summary}</p>}

        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
          {basics?.email && (
            <div className="flex gap-2">
              <dt className="sr-only">Email</dt>
              <dd>
                <a
                  href={`mailto:${basics.email}`}
                  className="text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {basics.email}
                </a>
              </dd>
            </div>
          )}
          {basics?.location?.city && (
            <div className="flex gap-2">
              <dt className="sr-only">Location</dt>
              <dd>
                {[basics.location.city, basics.location.region]
                  .filter(Boolean)
                  .join(", ")}
              </dd>
            </div>
          )}
        </dl>
      </header>

      {work.length > 0 && (
        <section>
          <SectionTitle>Experience</SectionTitle>
          <ol className="mt-6 space-y-8">
            {work.map((job, index) => (
              <li key={job.id ?? `${job.name}-${index}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold text-foreground">
                    {job.position ? `${job.position} · ` : ""}
                    {job.name}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {formatDateRange(job.startDate, job.endDate)}
                  </span>
                </div>
                {job.summary && (
                  <p className="ds-prose mt-2 text-sm">{job.summary}</p>
                )}
                {toHighlights(job.highlights).length > 0 && (
                  <ul className="mt-3 max-w-prose list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {toHighlights(job.highlights).map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </section>
      )}

      {skills.length > 0 && (
        <section>
          <SectionTitle>Skills</SectionTitle>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <div key={skill.id ?? `${skill.name}-${index}`}>
                <h3 className="text-sm font-medium text-foreground">
                  {skill.name}
                </h3>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {toKeywords(skill.keywords).map((keyword) => (
                    <li
                      key={keyword}
                      className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {keyword.trim()}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {education.length > 0 && (
        <section>
          <SectionTitle>Education</SectionTitle>
          <ul className="mt-6 space-y-4">
            {education.map((item, index) => (
              <li
                key={item.id ?? `${item.institution}-${index}`}
                className="flex flex-wrap items-baseline justify-between gap-2"
              >
                <div>
                  <h3 className="text-sm font-medium text-foreground">
                    {item.studyType
                      ? `${item.studyType}, ${item.area}`
                      : item.area}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.institution}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {formatDateRange(item.startDate, item.endDate)}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {certificates.length > 0 && (
        <section>
          <SectionTitle>Certifications</SectionTitle>
          <ul className="mt-6 space-y-3">
            {certificates.map((certificate) => (
              <li key={certificate.id} className="text-sm">
                {certificate.link ? (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    {certificate.title}
                  </a>
                ) : (
                  <span className="font-medium text-foreground">
                    {certificate.title}
                  </span>
                )}
                {certificate.description && (
                  <p className="text-muted-foreground">
                    {certificate.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {awards.length > 0 && (
        <section>
          <SectionTitle>Awards</SectionTitle>
          <ul className="mt-6 space-y-3">
            {awards.map((award, index) => (
              <li
                key={award.id ?? `${award.title}-${index}`}
                className="text-sm"
              >
                <span className="font-medium text-foreground">
                  {award.title}
                </span>
                {award.awarder && (
                  <span className="text-muted-foreground">
                    {" "}
                    · {award.awarder}
                  </span>
                )}
                {award.date && (
                  <span className="text-muted-foreground">
                    {" "}
                    ({formatMonthYear(award.date)})
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
