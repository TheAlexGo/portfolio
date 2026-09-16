import type { ResumeData } from '@/types/resume';
import resumeJson from './resume.json';

// JSON-импорт расширяет строковые литералы до string, поэтому каст;
// отсутствие ключей всё равно падает на этапе компиляции
export const resume = resumeJson as ResumeData;
