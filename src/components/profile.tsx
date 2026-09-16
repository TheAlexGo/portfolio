import { RichText } from '@/components/rich-text';
import { resume } from '@/data/resume';

export function Profile() {
  return (
    <div className="max-w-[68ch] space-y-3">
      {resume.summary.map(paragraph => (
        <RichText
          key={paragraph.slice(0, 60)}
          as="p"
          text={paragraph}
          className="text-sm leading-relaxed text-foreground/85"
        />
      ))}
    </div>
  );
}
