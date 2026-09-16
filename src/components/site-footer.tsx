import { resume } from '@/data/resume';

const YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="print:hidden">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 pt-8 text-xs text-muted-foreground">
        <span>
          ©
          {YEAR}
          {' '}
          {resume.meta.name}
        </span>
        <span>React · TypeScript · Tailwind · shadcn</span>
      </div>
    </footer>
  );
}
