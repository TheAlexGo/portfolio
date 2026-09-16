import { RichText } from '@/components/rich-text';
import { resume } from '@/data/resume';

export function Experience() {
  return (
    <ol className="space-y-10 print:space-y-2">
      {resume.experience.map(job => (
        <li
          key={job.company}
          className="grid gap-3 md:grid-cols-[8.5rem_minmax(0,1fr)] md:gap-8 print:grid-cols-[6.5rem_minmax(0,1fr)] print:gap-3"
        >
          <div className="text-xs leading-relaxed text-muted-foreground md:pt-1 md:text-right">
            <div className="font-medium text-foreground md:text-[13px]">
              {job.period.start}
              {' '}
              —
              {job.period.end}
            </div>
            <div>{job.period.duration}</div>
          </div>
          <div className="border-l border-border pl-5 md:pl-8 print:pl-4">
            <h3 className="text-base font-semibold tracking-tight">
              {job.url
                ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline underline-offset-4"
                    >
                      {job.company}
                    </a>
                  )
                : (
                    job.company
                  )}
            </h3>
            <p className="mt-0.5 text-sm text-muted-foreground">{job.position}</p>
            {job.meta && <p className="mt-1.5 text-xs text-muted-foreground/80 print:mt-1">{job.meta}</p>}
            <ul className="mt-4 space-y-2.5 print:mt-0.5 print:space-y-0">
              {job.highlights.map(highlight => (
                <li
                  key={highlight.slice(0, 60)}
                  className="relative pl-4 text-sm leading-relaxed text-foreground/90 before:absolute before:top-0 before:left-0 before:content-['•'] before:text-muted-foreground/60 print:break-inside-avoid print:leading-snug"
                >
                  <RichText text={highlight} />
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
