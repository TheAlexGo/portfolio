import { Education } from '@/components/education';
import { Experience } from '@/components/experience';
import { Hero } from '@/components/hero';
import { Languages } from '@/components/languages';
import { Profile } from '@/components/profile';
import { Section } from '@/components/section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Skills } from '@/components/skills';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main
        id="top"
        className="
          mx-auto max-w-3xl px-6
          print:px-0
        "
      >
        <Hero />
        <Section id="profile" title="Профиль">
          <Profile />
        </Section>
        <Section id="experience" title="Опыт работы">
          <Experience />
        </Section>
        <Section id="skills" title="Навыки">
          <Skills />
        </Section>
        <Section id="education" title="Образование">
          <Education />
        </Section>
        <Section id="languages" title="Языки">
          <Languages />
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
