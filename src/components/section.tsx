import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-20 border-t border-border py-10 md:py-14 print:break-inside-auto print:py-2',
        className,
      )}
    >
      <h2 className="mb-5 flex items-center gap-4 text-xs font-semibold tracking-[0.11em] uppercase text-muted-foreground print:mb-1.5">
        {title}
        <span aria-hidden className="h-px flex-1 bg-border" />
      </h2>
      {children}
    </section>
  );
}
