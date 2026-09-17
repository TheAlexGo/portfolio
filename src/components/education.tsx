import { resume } from '@/data/resume';

export function Education() {
  return (
    <ol className="
      space-y-5
      print:space-y-2
    "
    >
      {resume.education.map(item => (
        <li
          key={item.title}
          className="
            grid gap-1
            sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-6
            print:break-inside-avoid
          "
        >
          <div>
            <h3 className="text-sm font-semibold">{item.title}</h3>
            {item.subtitle && (
              <p className="mt-0.5 text-sm text-muted-foreground">
                {item.subtitle}
              </p>
            )}
          </div>
          <div className="
            text-xs text-muted-foreground tabular-nums
            sm:pt-0.5
          "
          >
            {item.year}
          </div>
        </li>
      ))}
    </ol>
  );
}
