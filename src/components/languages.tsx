import { resume } from '@/data/resume';

export function Languages() {
  return (
    <ul className="
      flex flex-wrap gap-x-8 gap-y-2 text-sm
      print:break-inside-avoid
    "
    >
      {resume.languages.map(language => (
        <li key={language.name}>
          <span className="font-medium">{language.name}</span>
          <span className="text-muted-foreground">
            {' '}
            —
            {language.level}
          </span>
        </li>
      ))}
    </ul>
  );
}
