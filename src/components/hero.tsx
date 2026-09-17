import type { ComponentType } from 'react';
import type { ContactIcon } from '@/types/resume';
import { Globe, Mail, MapPin, Phone, Send } from 'lucide-react';
import { resume } from '@/data/resume';

const CONTACT_ICONS: Record<ContactIcon, ComponentType<{ className?: string }>> = {
  'mail': Mail,
  'phone': Phone,
  'telegram': Send,
  'globe': Globe,
  'map-pin': MapPin,
};

export function Hero() {
  const { meta, contacts, heroStats } = resume;

  return (
    <section
      aria-label="Визитка"
      className="
        pt-12 pb-6
        md:pt-16
        print:pt-0 print:pb-2.5
      "
    >
      <div className="
        grid gap-10
        md:grid-cols-[minmax(0,1fr)_220px] md:items-center
        print:grid-cols-[minmax(0,1fr)_21mm] print:gap-4
      "
      >
        <div>
          <h1 className="
            text-4xl font-semibold tracking-tight text-balance
            md:text-5xl
            print:text-3xl
          "
          >
            {meta.name}
          </h1>
          <p className="
            mt-3 text-base text-muted-foreground
            md:text-lg
            print:text-sm
          "
          >
            {meta.headline}
            {' '}
            ·
            {' '}
            {meta.tagline}
          </p>
          <ul className="
            mt-6 grid grid-cols-1 gap-x-5 gap-y-2 text-sm text-muted-foreground
            sm:grid-cols-2
            print:mt-2 print:text-xs
          "
          >
            {contacts.map((contact) => {
              const Icon = CONTACT_ICONS[contact.icon];
              const content = (
                <>
                  <Icon className="size-3.5 shrink-0" />
                  {contact.label}
                </>
              );
              return (
                <li key={contact.label}>
                  {contact.href
                    ? (
                        <a
                          href={contact.href}
                          className="
                            inline-flex items-center gap-1.5 transition-colors
                            hover:text-foreground
                          "
                        >
                          {content}
                        </a>
                      )
                    : (
                        <span className="inline-flex items-center gap-1.5">{content}</span>
                      )}
                </li>
              );
            })}
          </ul>
        </div>
        <img
          src={meta.photo}
          alt={meta.name}
          className="
            hidden aspect-3/4 w-full rounded-2xl border border-border
            object-cover
            md:block
            print:block print:h-[20mm] print:w-[15mm] print:rounded-md
          "
        />
      </div>

      <dl className="
        mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border
        border-border bg-border
        sm:grid-cols-3
        print:mt-2.5 print:grid-cols-3 print:gap-3 print:overflow-visible
        print:rounded-none print:border-0 print:bg-transparent
      "
      >
        {heroStats.map(stat => (
          <div
            key={stat.label}
            className="
              bg-background p-4
              print:flex print:items-baseline print:gap-1.5 print:bg-transparent
              print:p-0
            "
          >
            <dd className="
              text-2xl font-semibold tracking-tight
              print:text-base
            "
            >
              {stat.value}
            </dd>
            <dt className="
              mt-1 text-xs text-muted-foreground
              print:mt-0 print:leading-tight
            "
            >
              {stat.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
