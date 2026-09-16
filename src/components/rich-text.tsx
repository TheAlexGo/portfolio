import type { ElementType } from 'react';
import ReactMarkdown from 'react-markdown';

interface RichTextProps {
  text: string;
  as?: 'span' | 'p' | 'div' | 'li';
  className?: string;
}

export function RichText({ text, as: Tag = 'span', className }: RichTextProps) {
  const Component = Tag as ElementType;
  return (
    <Component className={className}>
      <ReactMarkdown
        components={{
          p: ({ children }) => <>{children}</>,
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          em: ({ children }) => <em>{children}</em>,
          code: ({ children }) => (
            <code className="rounded-md bg-muted px-1 py-px font-mono text-[0.85em] text-foreground">
              {children}
            </code>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {children}
            </a>
          ),
        }}
      >
        {text}
      </ReactMarkdown>
    </Component>
  );
}
