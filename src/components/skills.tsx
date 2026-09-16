import { resume } from '@/data/resume';

export function Skills() {
  return (
    <dl className="divide-y divide-border">
      {resume.skills.map(group => (
        <div
          key={group.group}
          className="grid gap-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6 print:py-2"
        >
          <dt className="text-xs font-semibold tracking-[0.11em] uppercase text-muted-foreground sm:pt-0.5">
            {group.group}
          </dt>
          <dd className="flex flex-wrap gap-1.5">
            {group.items.map(skill => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md border border-border bg-muted/40 px-2 py-0.5 text-xs text-foreground/90 print:border-border/60 print:bg-transparent"
              >
                {skill}
              </span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
