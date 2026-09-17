import { ThemeToggle } from '@/components/theme-toggle';
import { resume } from '@/data/resume';

const NAV = [
  { href: '#profile', label: 'Профиль' },
  { href: '#experience', label: 'Опыт' },
  { href: '#skills', label: 'Навыки' },
  { href: '#education', label: 'Образование' },
];

export function SiteHeader() {
  return (
    <header className="
      sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm
      print:hidden
    "
    >
      <div className="
        mx-auto flex h-14 max-w-3xl items-center justify-between px-6
      "
      >
        <a href="#top" className="text-sm font-semibold tracking-tight">
          {resume.meta.name}
        </a>
        <nav
          className="
            hidden items-center gap-1
            sm:flex
          "
          aria-label="Разделы"
        >
          {NAV.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="
                rounded-md px-2.5 py-1.5 text-sm text-muted-foreground
                transition-colors
                hover:bg-muted hover:text-foreground
              "
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
