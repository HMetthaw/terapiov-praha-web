import { createFileRoute } from "@tanstack/react-router";
import { createContext, useContext, useState } from "react";
import {
  Activity,
  Bandage,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock,
  Dumbbell,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  Star,
  type LucideIcon,
} from "lucide-react";
import { siteConfig as defaultSiteConfig, type SiteConfig } from "@/site.config";

const SiteConfigContext = createContext<SiteConfig>(defaultSiteConfig);
const useSiteConfig = () => useContext(SiteConfigContext);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: defaultSiteConfig.seo.title },
      { name: "description", content: defaultSiteConfig.seo.description },
      { property: "og:title", content: defaultSiteConfig.seo.ogTitle },
      { property: "og:description", content: defaultSiteConfig.seo.ogDescription },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
  }),
  component: Home,
});

const serviceIcons = [Activity, Bandage, Dumbbell, HeartPulse];

function Home() {
  return <SitePage config={defaultSiteConfig} />;
}

export function SitePage({ config = defaultSiteConfig }: { config?: SiteConfig }) {
  return (
    <SiteConfigContext.Provider value={config}>
      <div className="min-h-screen bg-background text-foreground">
        <Nav />
        <main>
          <Hero />
          <TrustStrip />
          <Services />
          <About />
          <Process />
          <Pricing />
          <Testimonials />
          <Faq />
          <Contact />
        </main>
        <Footer />
        <MobileCallBar />
      </div>
    </SiteConfigContext.Provider>
  );
}

function Nav() {
  const siteConfig = useSiteConfig();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-sage-deep text-primary-foreground">
            <Activity className="h-4 w-4" />
          </span>
          <span className="font-serif text-xl">{siteConfig.name}</span>
        </a>
        <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
          <a href="#sluzby" className="hover:text-foreground">Služby</a>
          <a href="#o-nas" className="hover:text-foreground">O nás</a>
          <a href="#jak-to-probiha" className="hover:text-foreground">První návštěva</a>
          <a href="#cenik" className="hover:text-foreground">Ceník</a>
          <a href="#kontakt" className="hover:text-foreground">Kontakt</a>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={`tel:${siteConfig.phoneTel}`} className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-sage-deep">
            <Phone className="h-4 w-4" /> {siteConfig.phone}
          </a>
          <a href="#kontakt" className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">
            Objednat termín
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const siteConfig = useSiteConfig();

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-10 md:grid-cols-12 md:gap-12 md:pb-24 md:pt-20">
        <div className="md:col-span-7 md:pr-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" />
            {siteConfig.hero.eyebrow}
          </span>
          <h1 className="mt-5 font-serif text-[2.4rem] leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
            {siteConfig.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {siteConfig.hero.intro}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${siteConfig.phoneTel}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90">
              <Phone className="h-4 w-4" /> {siteConfig.hero.primaryCta} {siteConfig.phone}
            </a>
            <a href="#kontakt" className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 bg-card px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-accent">
              <CalendarCheck className="h-4 w-4" /> {siteConfig.hero.secondaryCta}
            </a>
          </div>
          <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-6 text-sm sm:grid-cols-3">
            <InfoItem icon={MapPin} label="Adresa" value={siteConfig.address} />
            <InfoItem icon={Clock} label="Otevřeno dnes" value={siteConfig.openingHours.today} />
            <InfoItem icon={Phone} label="Recepce" value={siteConfig.phone} wide />
          </dl>
        </div>
        <div className="md:col-span-5">
          <div className="relative rounded-[1.75rem] border border-sage-deep/15 bg-[linear-gradient(145deg,oklch(0.88_0.035_150),oklch(0.96_0.014_95))] p-2 shadow-[0_35px_80px_-45px_oklch(0.22_0.02_160/0.65)]">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-sage-deep/15 blur-3xl" />
            <img src={siteConfig.images.hero} alt={siteConfig.hero.imageAlt} width={1600} height={1200} className="aspect-[4/3] w-full rounded-[1.25rem] object-cover object-center contrast-[1.05] saturate-[1.05]" />
            <div className="pointer-events-none absolute inset-2 rounded-[1.25rem] ring-1 ring-ink/10" />
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card p-4 shadow-lg sm:block">
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 fill-clay text-clay" />
                <span className="font-medium">4,9 / 5</span>
                <span className="text-muted-foreground">· reference pacientů</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon: Icon, label, value, wide = false }: { icon: LucideIcon; label: string; value: string; wide?: boolean }) {
  return (
    <div className={`flex items-start gap-2 ${wide ? "col-span-2 sm:col-span-1" : ""}`}>
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-sage-deep" />
      <div>
        <dt className="text-muted-foreground">{label}</dt>
        <dd className="font-medium">{value}</dd>
      </div>
    </div>
  );
}

function TrustStrip() {
  const siteConfig = useSiteConfig();

  return (
    <section className="border-y border-border bg-cream/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-5 py-8 md:grid-cols-4">
        {siteConfig.trustStrip.map((item) => (
          <div key={item.value} className="px-2 text-center md:text-left">
            <div className="font-serif text-2xl text-foreground">{item.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const siteConfig = useSiteConfig();

  return (
    <section id="sluzby" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionIntro eyebrow="Naše služby" title="S čím za námi lidé nejčastěji chodí" text="Každá terapie začíná pozorným vyšetřením a rozhovorem. Až potom společně rozhodneme, jak dál." />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {siteConfig.services.map((service, index) => {
          const Icon = serviceIcons[index] || Activity;
          return (
            <article key={service.title} className="rounded-2xl border border-border bg-card p-7 transition hover:border-sage-deep/40 hover:shadow-[0_20px_40px_-30px_oklch(0.22_0.02_160/0.4)]">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-sage-deep">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-foreground/85">
                    <CheckCircle2 className="h-4 w-4 text-sage-deep" /> {point}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function About() {
  const siteConfig = useSiteConfig();

  return (
    <section id="o-nas" className="border-y border-border bg-cream/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <div className="relative rounded-[1.75rem] border border-sage-deep/15 bg-[linear-gradient(145deg,oklch(0.87_0.03_150),oklch(0.96_0.012_95))] p-2 shadow-[0_30px_70px_-45px_oklch(0.22_0.02_160/0.55)]">
            <img src={siteConfig.images.therapist} alt={siteConfig.therapist.imageAlt} width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full rounded-[1.25rem] object-cover contrast-[1.05] saturate-[1.05]" />
            <div className="pointer-events-none absolute inset-2 rounded-[1.25rem] ring-1 ring-ink/10" />
          </div>
        </div>
        <div className="md:col-span-7 md:pl-4">
          <p className="text-sm uppercase tracking-[0.18em] text-sage-deep">O nás</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">{siteConfig.therapist.name}</h2>
          <p className="mt-2 text-muted-foreground">{siteConfig.therapist.role}</p>
          <div className="mt-6 space-y-4 text-foreground/85 leading-relaxed">
            {siteConfig.therapist.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-7 flex flex-wrap gap-2 text-xs text-muted-foreground">
            {siteConfig.therapist.badges.map((badge) => (
              <span key={badge} className="rounded-full border border-border bg-card px-3 py-1">{badge}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const siteConfig = useSiteConfig();

  return (
    <section id="jak-to-probiha" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionIntro eyebrow="První návštěva" title="Jak terapie probíhá" text="Klidné tempo a žádná překvapení. Od první návštěvy víte, co se bude dít." />
      <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {siteConfig.process.map((step, index) => (
          <li key={step.title} className="relative rounded-2xl border border-border bg-card p-6">
            <div className="font-serif text-3xl text-sage-deep">{String(index + 1).padStart(2, "0")}</div>
            <h3 className="mt-3 font-serif text-xl text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Pricing() {
  const siteConfig = useSiteConfig();

  return (
    <section id="cenik" className="border-y border-border bg-cream/60">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionIntro eyebrow="Ceník" title="Jednoduché ceny bez překvapení" text="Pracujeme bez smlouvy se zdravotními pojišťovnami. Platba je možná hotově nebo kartou." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {siteConfig.pricing.map((item) => (
            <div key={item.name} className={`flex flex-col rounded-2xl border p-7 ${item.featured ? "border-sage-deep bg-card shadow-[0_25px_50px_-30px_oklch(0.22_0.02_160/0.45)]" : "border-border bg-card"}`}>
              {item.featured && <span className="mb-4 inline-flex w-fit items-center rounded-full bg-sage-deep/10 px-2.5 py-1 text-xs text-sage-deep">Nejčastější volba</span>}
              <h3 className="font-serif text-2xl text-foreground">{item.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{item.duration}</p>
              <div className="mt-5 font-serif text-4xl text-foreground">{item.price}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <a href="#kontakt" className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${item.featured ? "bg-primary text-primary-foreground hover:opacity-90" : "border border-foreground/15 bg-card text-foreground hover:bg-accent"}`}>
                Objednat termín
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const siteConfig = useSiteConfig();

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionIntro eyebrow="Reference" title="Co říkají naši pacienti" />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {siteConfig.testimonials.map((review) => (
          <figure key={review.name} className="rounded-2xl border border-border bg-card p-7">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-clay text-clay" />)}
            </div>
            <blockquote className="mt-4 font-serif text-lg leading-relaxed text-foreground">„{review.quote}“</blockquote>
            <figcaption className="mt-5 text-sm">
              <div className="font-medium text-foreground">{review.name}</div>
              <div className="text-muted-foreground">{review.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  const siteConfig = useSiteConfig();

  return (
    <section className="border-y border-border bg-cream/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <SectionIntro eyebrow="Časté dotazy" title="Na co se nás ptáte nejčastěji" text={`Nenašli jste odpověď? Zavolejte nám na ${siteConfig.phone}.`} />
        </div>
        <div className="md:col-span-8">
          <div className="divide-y divide-border rounded-2xl border border-border bg-card">
            {siteConfig.faq.map((item, index) => <FaqItem key={item.question} item={item} defaultOpen={index === 0} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ item, defaultOpen = false }: { item: { question: string; answer: string }; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-medium text-foreground">{item.question}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{item.answer}</div>}
    </div>
  );
}

function Contact() {
  const siteConfig = useSiteConfig();
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionIntro eyebrow="Kontakt" title="Objednejte se na termín" text="Nejrychleji nás zastihnete telefonicky. Pokud raději napíšete, ozveme se zpět obvykle do jednoho pracovního dne." />
          <ul className="mt-8 space-y-5 text-sm">
            <ContactItem icon={Phone} label="Telefon" value={siteConfig.phone} href={`tel:${siteConfig.phoneTel}`} />
            <ContactItem icon={Mail} label="E-mail" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
            <ContactItem icon={MapPin} label="Adresa" value={siteConfig.address} note={siteConfig.locationNote} />
            <ContactItem icon={Clock} label="Otevírací doba" value={siteConfig.openingHours.weekdays} note={siteConfig.openingHours.saturday} />
          </ul>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <img src={siteConfig.images.clinic} alt={`Interiér ordinace ${siteConfig.name}`} width={1400} height={1000} loading="lazy" className="aspect-[7/5] w-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-7">
          <form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="rounded-2xl border border-border bg-card p-7 md:p-9">
            <h3 className="font-serif text-2xl text-foreground">Napište nám</h3>
            <p className="mt-1 text-sm text-muted-foreground">Stačí pár řádků o tom, co vás trápí. Ozveme se s návrhem termínu.</p>
            {sent ? (
              <div className="mt-8 rounded-xl bg-accent p-6 text-foreground">
                <div className="font-serif text-xl">Děkujeme za zprávu.</div>
                <p className="mt-1 text-sm text-muted-foreground">Ozveme se obvykle do jednoho pracovního dne.</p>
              </div>
            ) : (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Jméno a příjmení" name="name" required />
                <Field label="Telefon" name="phone" type="tel" required />
                <Field label="E-mail" name="email" type="email" className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm text-muted-foreground">Co vás trápí?</label>
                  <textarea id="message" rows={5} required className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-sage-deep" placeholder="Krátký popis obtíží, jak dlouho trvají, případně preferovaný čas..." />
                </div>
                <button type="submit" className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90">Odeslat poptávku</button>
                <p className="sm:col-span-2 text-xs text-muted-foreground">Odesláním souhlasíte se zpracováním osobních údajů za účelem vyřízení poptávky.</p>
              </div>
            )}
          </form>
          <div aria-label="Mapa ordinace" className="mt-5 grid h-64 place-items-center overflow-hidden rounded-2xl border border-border bg-[linear-gradient(135deg,oklch(0.94_0.02_150),oklch(0.9_0.03_120))] text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sage-deep" /> Mapa: {siteConfig.address}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, note, href }: { icon: LucideIcon; label: string; value: string; note?: string; href?: string }) {
  const content = href ? <a href={href} className="font-medium text-foreground hover:text-sage-deep">{value}</a> : <div className="font-medium text-foreground">{value}</div>;
  return (
    <li className="flex items-start gap-3">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-sage-deep"><Icon className="h-4 w-4" /></span>
      <div>
        <div className="text-muted-foreground">{label}</div>
        {content}
        {note && <div className="text-muted-foreground">{note}</div>}
      </div>
    </li>
  );
}

function Field({ label, name, type = "text", required = false, className = "" }: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} required={required} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-sage-deep" />
    </div>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm uppercase tracking-[0.18em] text-sage-deep">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-muted-foreground">{text}</p>}
    </div>
  );
}

function Footer() {
  const siteConfig = useSiteConfig();

  return (
    <footer className="border-t border-border bg-cream/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-sage-deep text-primary-foreground"><Activity className="h-4 w-4" /></span>
            <span className="font-serif text-xl">{siteConfig.name}</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{siteConfig.tagline}</p>
        </div>
        <div className="text-sm">
          <div className="font-medium text-foreground">Kontakt</div>
          <ul className="mt-3 space-y-1 text-muted-foreground">
            <li>{siteConfig.address}</li>
            <li><a href={`tel:${siteConfig.phoneTel}`} className="hover:text-foreground">{siteConfig.phone}</a></li>
            <li>{siteConfig.email}</li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-medium text-foreground">Otevírací doba</div>
          <ul className="mt-3 space-y-1 text-muted-foreground">
            <li>{siteConfig.openingHours.weekdays}</li>
            <li>{siteConfig.openingHours.saturday}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.legalName} · IČO {siteConfig.ico}</p>
          <p>Zásady ochrany osobních údajů</p>
        </div>
      </div>
      <div className="h-20 md:hidden" />
    </footer>
  );
}

function MobileCallBar() {
  const siteConfig = useSiteConfig();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <a href={`tel:${siteConfig.phoneTel}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground">
        <Phone className="h-4 w-4" /> Zavolat
      </a>
      <a href="#kontakt" className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 bg-card px-4 py-3 text-sm font-medium text-foreground">
        <CalendarCheck className="h-4 w-4" /> Objednat
      </a>
    </div>
  );
}
