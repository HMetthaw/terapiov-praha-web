import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  CalendarCheck,
  MapPin,
  Clock,
  Star,
  Activity,
  Bandage,
  Dumbbell,
  HeartPulse,
  CheckCircle2,
  Mail,
  ChevronDown,
} from "lucide-react";
import heroImg from "@/assets/hero-physio.jpg";
import therapistImg from "@/assets/therapist.jpg";
import clinicImg from "@/assets/clinic-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fyzioterapie Vltava — Rehabilitace Praha 5 | Objednání 777 123 456" },
      {
        name: "description",
        content:
          "Soukromá fyzioterapie a rehabilitace v Praze 5. Individuální terapie 50 minut, bolesti zad, sportovní zranění, pooperační rehabilitace. Objednejte se online nebo telefonicky.",
      },
      { property: "og:title", content: "Fyzioterapie Vltava — Soukromá rehabilitace Praha" },
      {
        property: "og:description",
        content:
          "Individuální fyzioterapie v klidném prostředí. 50 minut čistého času terapeuta jen pro vás.",
      },
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

const PHONE = "+420 777 123 456";
const PHONE_TEL = "+420777123456";

function Home() {
  return (
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
  );
}

/* -------------------- NAV -------------------- */

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-sage-deep text-primary-foreground">
            <Activity className="h-4 w-4" />
          </span>
          <span className="font-serif text-xl">Fyzio Vltava</span>
        </a>
        <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
          <a href="#sluzby" className="hover:text-foreground">Služby</a>
          <a href="#o-nas" className="hover:text-foreground">O nás</a>
          <a href="#jak-to-probiha" className="hover:text-foreground">První návštěva</a>
          <a href="#cenik" className="hover:text-foreground">Ceník</a>
          <a href="#kontakt" className="hover:text-foreground">Kontakt</a>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-sage-deep"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Objednat termín
          </a>
        </div>
      </div>
    </header>
  );
}

/* -------------------- HERO -------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-10 md:grid-cols-12 md:gap-12 md:pb-24 md:pt-20">
        <div className="md:col-span-7 md:pr-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-deep" />
            Soukromá fyzioterapie · Praha 5
          </span>
          <h1 className="mt-5 font-serif text-[2.4rem] leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
            Fyzioterapie a rehabilitace,<br />
            <span className="italic text-sage-deep">která má čas</span> na vaše tělo.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Individuální terapie 50 minut. Žádné spěchání mezi pacienty. Pomáháme s bolestí zad,
            po úrazu i po operaci a se sportovními problémy — vždy podle vašeho tempa.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              <Phone className="h-4 w-4" /> Zavolat {PHONE}
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 bg-card px-6 py-3.5 text-sm font-medium text-foreground transition hover:bg-accent"
            >
              <CalendarCheck className="h-4 w-4" /> Objednat se online
            </a>
          </div>

          <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-6 text-sm sm:grid-cols-3">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage-deep" />
              <div>
                <dt className="text-muted-foreground">Adresa</dt>
                <dd className="font-medium">Nábřežní 12, Praha 5</dd>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sage-deep" />
              <div>
                <dt className="text-muted-foreground">Otevřeno dnes</dt>
                <dd className="font-medium">8:00 – 19:00</dd>
              </div>
            </div>
            <div className="flex items-start gap-2 col-span-2 sm:col-span-1">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sage-deep" />
              <div>
                <dt className="text-muted-foreground">Recepce</dt>
                <dd className="font-medium">{PHONE}</dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="md:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-sage/40 blur-2xl" />
            <img
              src={heroImg}
              alt="Fyzioterapeutka při individuální terapii ramene v ordinaci"
              width={1600}
              height={1200}
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-[0_30px_60px_-30px_oklch(0.22_0.02_160/0.35)]"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card p-4 shadow-lg sm:block">
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 fill-clay text-clay" />
                <span className="font-medium">4,9 / 5</span>
                <span className="text-muted-foreground">· 180+ recenzí</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- TRUST STRIP -------------------- */

function TrustStrip() {
  const items = [
    { k: "50 min", v: "délka jedné terapie" },
    { k: "Praha 5", v: "2 minuty od metra Anděl" },
    { k: "12 let", v: "praxe v rehabilitaci" },
    { k: "4,9 ★", v: "průměrné hodnocení" },
  ];
  return (
    <section className="border-y border-border bg-cream/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-6 px-5 py-8 md:grid-cols-4">
        {items.map((it) => (
          <div key={it.k} className="px-2 text-center md:text-left">
            <div className="font-serif text-2xl text-foreground">{it.k}</div>
            <div className="mt-1 text-sm text-muted-foreground">{it.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- SERVICES -------------------- */

function Services() {
  const services = [
    {
      icon: Activity,
      title: "Bolesti zad a krční páteře",
      desc:
        "Pomáháme s chronickými i akutními bolestmi zad, krční páteře, ztuhlostí mezi lopatkami nebo bolestmi hlavy z přetížení.",
      points: ["Manuální terapie", "Cvičení podle DNS", "Úprava sedu u počítače"],
    },
    {
      icon: Bandage,
      title: "Rehabilitace po úrazu a operaci",
      desc:
        "Návrat do plné kondice po operacích kolene, ramene, kotníku nebo páteře. Postupný, citlivý a dobře měřený proces.",
      points: ["Pooperační péče", "Práce s jizvou", "Obnova rozsahu pohybu"],
    },
    {
      icon: Dumbbell,
      title: "Sportovní fyzioterapie",
      desc:
        "Pro běžce, cyklisty, lyžaře i pondělní fotbalisty. Řešíme přetížení, sportovní zranění a návrat k tréninku.",
      points: ["Analýza pohybu", "Plán návratu k zátěži", "Prevence opakovaných zranění"],
    },
    {
      icon: HeartPulse,
      title: "Prevence a poradenství v pohybu",
      desc:
        "Pokud vás zatím nic nebolí, ale chcete si tělo udržet — projdeme spolu vaše pohybové návyky a sestavíme krátký domácí plán.",
      points: ["Pohybový screening", "Domácí cvičení", "Konzultace ergonomie"],
    },
  ];

  return (
    <section id="sluzby" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.18em] text-sage-deep">Naše služby</p>
        <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
          S čím za námi lidé nejčastěji chodí
        </h2>
        <p className="mt-4 text-muted-foreground">
          Každá terapie začíná pozorným vyšetřením a rozhovorem. Až potom společně rozhodneme,
          jak dál.
        </p>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.title}
            className="group rounded-2xl border border-border bg-card p-7 transition hover:border-sage-deep/40 hover:shadow-[0_20px_40px_-30px_oklch(0.22_0.02_160/0.4)]"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-sage-deep">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-serif text-2xl text-foreground">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-foreground/85">
                  <CheckCircle2 className="h-4 w-4 text-sage-deep" /> {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */

function About() {
  return (
    <section id="o-nas" className="bg-cream/60 border-y border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <img
            src={therapistImg}
            alt="Mgr. Klára Novotná, vedoucí fyzioterapeutka"
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
          />
        </div>
        <div className="md:col-span-7 md:pl-4">
          <p className="text-sm uppercase tracking-[0.18em] text-sage-deep">O nás</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Mgr. Klára Novotná
          </h2>
          <p className="mt-2 text-muted-foreground">Vedoucí fyzioterapeutka, 12 let praxe</p>

          <div className="mt-6 space-y-4 text-foreground/85 leading-relaxed">
            <p>
              Vystudovala jsem fyzioterapii na 2. lékařské fakultě Univerzity Karlovy a od té doby
              se věnuji individuální péči o dospělé pacienty. Mám ráda, když má terapie smysl —
              tedy když rozumíme tomu, proč nás něco bolí, a co s tím sami můžeme dělat doma.
            </p>
            <p>
              Pracuji s konceptem DNS, viscerální technikami a manuální terapií. Spolupracuji
              s ortopedy v Praze a okolí a věnuji se i sportovcům z místních klubů.
            </p>
            <p>
              V ordinaci nikdy nemám dva pacienty zároveň. Vyhrazený čas patří jenom vám —
              od přivítání po doporučení domácího cvičení.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-2 text-xs text-muted-foreground">
            {["DNS — Dynamická Neuromuskulární Stabilizace", "Mulligan koncept", "Viscerální terapie", "Kineziotaping"].map(
              (t) => (
                <span key={t} className="rounded-full border border-border bg-card px-3 py-1">
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROCESS -------------------- */

function Process() {
  const steps = [
    {
      n: "01",
      t: "Objednání",
      d: "Zavoláte nebo vyplníte formulář. Domluvíme termín, který vám vyhovuje — obvykle do týdne.",
    },
    {
      n: "02",
      t: "Vstupní vyšetření",
      d: "Projdeme zdravotní historii, vyšetříme pohyb a najdeme pravděpodobnou příčinu obtíží. 50 minut.",
    },
    {
      n: "03",
      t: "Plán terapie",
      d: "Společně si řekneme, co od terapie čekat, kolik sezení dává smysl a jak často chodit.",
    },
    {
      n: "04",
      t: "Domácí cvičení",
      d: "Krátký, jasný plán cvičení na doma. Bez složitých sestav — jen to, co opravdu pomůže.",
    },
  ];
  return (
    <section id="jak-to-probiha" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.18em] text-sage-deep">První návštěva</p>
        <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
          Jak terapie probíhá
        </h2>
        <p className="mt-4 text-muted-foreground">
          Klidné tempo a žádná překvapení. Od první návštěvy víte, co se bude dít.
        </p>
      </div>

      <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n} className="relative rounded-2xl border border-border bg-card p-6">
            <div className="font-serif text-3xl text-sage-deep">{s.n}</div>
            <h3 className="mt-3 font-serif text-xl text-foreground">{s.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* -------------------- PRICING -------------------- */

function Pricing() {
  const plans = [
    {
      name: "Vstupní konzultace",
      price: "1 290 Kč",
      desc: "Důkladné vyšetření, rozhovor a první terapie. Vhodné pro nové pacienty.",
      meta: "60 minut",
    },
    {
      name: "Navazující terapie",
      price: "990 Kč",
      desc: "Pokračující práce na vašem plánu. Manuální terapie, cvičení, kontrola pokroku.",
      meta: "50 minut",
      featured: true,
    },
    {
      name: "Sportovní konzultace",
      price: "1 490 Kč",
      desc: "Analýza pohybu, plán návratu k zátěži a doporučení pro tréninkový režim.",
      meta: "75 minut",
    },
  ];

  return (
    <section id="cenik" className="bg-cream/60 border-y border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.18em] text-sage-deep">Ceník</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Jednoduché ceny bez překvapení
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pracujeme bez smlouvy se zdravotními pojišťovnami. Platba v hotovosti nebo kartou.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border p-7 ${
                p.featured
                  ? "border-sage-deep bg-card shadow-[0_25px_50px_-30px_oklch(0.22_0.02_160/0.45)]"
                  : "border-border bg-card"
              }`}
            >
              {p.featured && (
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-sage-deep/10 px-2.5 py-1 text-xs text-sage-deep">
                  Nejčastější volba
                </span>
              )}
              <h3 className="font-serif text-2xl text-foreground">{p.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {p.meta}
              </p>
              <div className="mt-5 font-serif text-4xl text-foreground">{p.price}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <a
                href="#kontakt"
                className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "border border-foreground/15 bg-card text-foreground hover:bg-accent"
                }`}
              >
                Objednat termín
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Storno zdarma nejpozději 24 hodin před termínem. Děkujeme za pochopení.
        </p>
      </div>
    </section>
  );
}

/* -------------------- TESTIMONIALS -------------------- */

function Testimonials() {
  const reviews = [
    {
      q: "Po půl roce bolestí beder mi Klára poprvé vysvětlila, proč mě záda bolí. Plán na doma byl jednoduchý a po pěti sezeních se cítím normálně.",
      n: "Petra K.",
      role: "učitelka",
    },
    {
      q: "Vrátil jsem se k běhání po operaci kolene. Líbí se mi, že terapie není o ležení na lehátku, ale o opravdové práci.",
      n: "Tomáš M.",
      role: "amatérský běžec",
    },
    {
      q: "Vstřícný přístup, čisté prostředí a hlavně čas. Konečně nikdo nekoukal na hodinky.",
      n: "Markéta D.",
      role: "maminka dvou dětí",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.18em] text-sage-deep">Reference</p>
        <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
          Co říkají naši pacienti
        </h2>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {reviews.map((r) => (
          <figure key={r.n} className="rounded-2xl border border-border bg-card p-7">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-clay text-clay" />
              ))}
            </div>
            <blockquote className="mt-4 font-serif text-lg leading-relaxed text-foreground">
              „{r.q}"
            </blockquote>
            <figcaption className="mt-5 text-sm">
              <div className="font-medium text-foreground">{r.n}</div>
              <div className="text-muted-foreground">{r.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* -------------------- FAQ -------------------- */

function Faq() {
  const faqs = [
    {
      q: "Mohu uplatnit zdravotní pojišťovnu?",
      a: "Nemáme smlouvy se zdravotními pojišťovnami, terapie si pacient hradí sám. Vystavíme vám doklad pro případné proplacení v rámci benefitního programu vašeho zaměstnavatele nebo komerčního pojištění.",
    },
    {
      q: "Co si mám vzít na první návštěvu?",
      a: "Pohodlné oblečení, ve kterém se dobře hýbete (legíny, kraťasy, tričko). Pokud máte zprávy od ortopeda, neurologa nebo snímky z vyšetření, vezměte je s sebou.",
    },
    {
      q: "Jak dlouho návštěva trvá?",
      a: "Vstupní konzultace 60 minut, navazující terapie 50 minut. Vyhrazený čas je jen pro vás, neobjednáváme dva pacienty na stejnou hodinu.",
    },
    {
      q: "Jaká jsou pravidla pro zrušení termínu?",
      a: "Termín lze bezplatně zrušit nebo přesunout nejpozději 24 hodin předem. Při pozdějším zrušení účtujeme plnou cenu rezervovaného času.",
    },
    {
      q: "Může mě po terapii ještě něco bolet?",
      a: "Někdy se může objevit mírná svalová únava nebo citlivost další 1–2 dny, podobně jako po cvičení. Pokud by vás něco výrazně omezovalo, ozvěte se nám — projdeme to spolu.",
    },
  ];

  return (
    <section className="bg-cream/60 border-y border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <p className="text-sm uppercase tracking-[0.18em] text-sage-deep">Časté dotazy</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Na co se nás ptáte nejčastěji
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nenašli jste odpověď? Zavolejte nám na {PHONE}, rádi vám poradíme.
          </p>
        </div>
        <div className="md:col-span-8">
          <div className="divide-y divide-border rounded-2xl border border-border bg-card">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-medium text-foreground">{q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{a}</div>
      )}
    </div>
  );
}

/* -------------------- CONTACT -------------------- */

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="kontakt" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-sm uppercase tracking-[0.18em] text-sage-deep">Kontakt</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Objednejte se na termín
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nejrychleji nás zastihnete telefonicky. Pokud raději napíšete, ozveme se zpátky
            obvykle do jednoho pracovního dne.
          </p>

          <ul className="mt-8 space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-sage-deep">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <div className="text-muted-foreground">Telefon</div>
                <a href={`tel:${PHONE_TEL}`} className="font-medium text-foreground hover:text-sage-deep">
                  {PHONE}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-sage-deep">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <div className="text-muted-foreground">E-mail</div>
                <a
                  href="mailto:ordinace@fyziovltava.cz"
                  className="font-medium text-foreground hover:text-sage-deep"
                >
                  ordinace@fyziovltava.cz
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-sage-deep">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <div className="text-muted-foreground">Adresa</div>
                <div className="font-medium text-foreground">Nábřežní 12, 150 00 Praha 5</div>
                <div className="text-muted-foreground">2 minuty od metra Anděl</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-sage-deep">
                <Clock className="h-4 w-4" />
              </span>
              <div>
                <div className="text-muted-foreground">Otevírací doba</div>
                <div className="font-medium text-foreground">Po – Pá &nbsp; 8:00 – 19:00</div>
                <div className="text-muted-foreground">So &nbsp; 9:00 – 13:00 (po domluvě)</div>
              </div>
            </li>
          </ul>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <img
              src={clinicImg}
              alt="Interiér ordinace fyzioterapie Vltava"
              width={1400}
              height={1000}
              loading="lazy"
              className="aspect-[7/5] w-full object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border border-border bg-card p-7 md:p-9"
          >
            <h3 className="font-serif text-2xl text-foreground">Napište nám</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Stačí pár řádků o tom, co vás trápí. Ozveme se s návrhem termínu.
            </p>

            {sent ? (
              <div className="mt-8 rounded-xl bg-accent p-6 text-foreground">
                <div className="font-serif text-xl">Děkujeme za zprávu.</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ozveme se vám obvykle do jednoho pracovního dne.
                </p>
              </div>
            ) : (
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Jméno a příjmení" name="name" required />
                <Field label="Telefon" name="phone" type="tel" required />
                <Field label="E-mail" name="email" type="email" className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label className="text-sm text-muted-foreground">Co vás trápí?</label>
                  <textarea
                    rows={5}
                    required
                    className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-sage-deep"
                    placeholder="Krátký popis obtíží, jak dlouho trvají, případně preferovaný čas…"
                  />
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Odeslat poptávku
                </button>
                <p className="sm:col-span-2 text-xs text-muted-foreground">
                  Odesláním souhlasíte se zpracováním osobních údajů za účelem vyřízení poptávky.
                </p>
              </div>
            )}
          </form>

          <div
            aria-label="Mapa ordinace"
            className="mt-5 grid h-64 place-items-center overflow-hidden rounded-2xl border border-border bg-[linear-gradient(135deg,oklch(0.94_0.02_150),oklch(0.9_0.03_120))] text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sage-deep" /> Mapa: Nábřežní 12, Praha 5
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-sage-deep"
      />
    </div>
  );
}

/* -------------------- FOOTER -------------------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-cream/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-sage-deep text-primary-foreground">
              <Activity className="h-4 w-4" />
            </span>
            <span className="font-serif text-xl">Fyzio Vltava</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Soukromá fyzioterapie a rehabilitace s časem na vás.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-medium text-foreground">Kontakt</div>
          <ul className="mt-3 space-y-1 text-muted-foreground">
            <li>Nábřežní 12, Praha 5</li>
            <li>
              <a href={`tel:${PHONE_TEL}`} className="hover:text-foreground">
                {PHONE}
              </a>
            </li>
            <li>ordinace@fyziovltava.cz</li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-medium text-foreground">Otevírací doba</div>
          <ul className="mt-3 space-y-1 text-muted-foreground">
            <li>Po – Pá &nbsp; 8:00 – 19:00</li>
            <li>So &nbsp; 9:00 – 13:00</li>
            <li>Ne &nbsp; zavřeno</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Fyzioterapie Vltava s.r.o. &nbsp;·&nbsp; IČO 12345678</p>
          <p>Zásady ochrany osobních údajů</p>
        </div>
      </div>
      {/* spacer so mobile call bar doesn't overlap footer text */}
      <div className="h-20 md:hidden" />
    </footer>
  );
}

/* -------------------- MOBILE CTA -------------------- */

function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
      <a
        href={`tel:${PHONE_TEL}`}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
      >
        <Phone className="h-4 w-4" /> Zavolat
      </a>
      <a
        href="#kontakt"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/15 bg-card px-4 py-3 text-sm font-medium text-foreground"
      >
        <CalendarCheck className="h-4 w-4" /> Objednat
      </a>
    </div>
  );
}
