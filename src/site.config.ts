import heroImg from "@/assets/hero-physio.jpg";
import therapistImg from "@/assets/therapist.jpg";
import clinicImg from "@/assets/clinic-interior.jpg";

export const siteConfig = {
  name: "Fyzio Vltava",
  legalName: "Fyzioterapie Vltava s.r.o.",
  tagline: "Soukromá fyzioterapie a rehabilitace s časem na vás.",
  city: "Praha 5",
  address: "Nábřežní 12, 150 00 Praha 5",
  locationNote: "2 minuty od metra Anděl",
  phone: "+420 777 123 456",
  phoneTel: "+420777123456",
  email: "ordinace@fyziovltava.cz",
  ico: "12345678",
  openingHours: {
    today: "8:00 - 19:00",
    weekdays: "Po - Pá 8:00 - 19:00",
    saturday: "So 9:00 - 13:00 po domluvě",
  },
  seo: {
    title: "Fyzio Vltava | Fyzioterapie a rehabilitace Praha 5",
    description:
      "Soukromá fyzioterapie a rehabilitace v Praze 5. Individuální terapie, bolesti zad, sportovní zranění, pooperační rehabilitace a objednání telefonicky.",
    ogTitle: "Fyzio Vltava | Soukromá rehabilitace Praha 5",
    ogDescription:
      "Individuální fyzioterapie v klidném prostředí. Jasný plán terapie, srozumitelné ceny a rychlé objednání.",
  },
  images: {
    hero: heroImg,
    therapist: therapistImg,
    clinic: clinicImg,
  },
  hero: {
    eyebrow: "Soukromá fyzioterapie · Praha 5",
    title: "Fyzioterapie a rehabilitace, která má čas na vaše tělo.",
    intro:
      "Individuální terapie 50 minut. Žádné spěchání mezi pacienty. Pomáháme s bolestí zad, návratem po úrazu i sportovními problémy podle vašeho tempa.",
    primaryCta: "Zavolat",
    secondaryCta: "Objednat termín",
    imageAlt: "Fyzioterapeutka při individuální terapii ramene v ordinaci",
  },
  trustStrip: [
    { value: "50 min", label: "délka jedné terapie" },
    { value: "Praha 5", label: "2 minuty od metra Anděl" },
    { value: "12 let", label: "praxe v rehabilitaci" },
    { value: "4,9 / 5", label: "průměrné hodnocení" },
  ],
  services: [
    {
      title: "Bolesti zad a krční páteře",
      description:
        "Pomáháme s chronickými i akutními bolestmi zad, krční páteře, ztuhlostí mezi lopatkami nebo bolestmi hlavy z přetížení.",
      points: ["Manuální terapie", "Cvičení podle stavu", "Úprava sedu a pohybu v práci"],
    },
    {
      title: "Rehabilitace po úrazu a operaci",
      description:
        "Postupný návrat do běžného režimu po operacích kolene, ramene, kotníku nebo páteře.",
      points: ["Pooperační péče", "Obnova rozsahu pohybu", "Bezpečný návrat k zátěži"],
    },
    {
      title: "Sportovní fyzioterapie",
      description:
        "Řešíme přetížení, sportovní zranění a návrat k tréninku pro rekreační i výkonnostní sportovce.",
      points: ["Analýza pohybu", "Plán návratu k zátěži", "Prevence opakovaných potíží"],
    },
    {
      title: "Prevence a pohybová konzultace",
      description:
        "Projdeme vaše pohybové návyky a sestavíme krátký plán, který dává smysl i doma.",
      points: ["Pohybový screening", "Domácí cvičení", "Konzultace ergonomie"],
    },
  ],
  therapist: {
    name: "Mgr. Klára Novotná",
    role: "Vedoucí fyzioterapeutka, 12 let praxe",
    imageAlt: "Mgr. Klára Novotná, vedoucí fyzioterapeutka",
    bio: [
      "Věnuji se individuální péči o dospělé pacienty. Mám ráda, když terapie dává smysl: rozumíme tomu, proč se problém vrací, a víme, co s tím dělat doma.",
      "Pracuji s manuální terapií, aktivním cvičením a jednoduchými doporučeními, která zapadnou do běžného dne.",
      "V ordinaci nikdy nemám dva pacienty zároveň. Vyhrazený čas patří jen vám.",
    ],
    badges: ["Manuální terapie", "Pohybová diagnostika", "Sportovní fyzio", "Domácí plán"],
  },
  process: [
    {
      title: "Objednání",
      description: "Zavoláte nebo vyplníte formulář. Domluvíme termín, který vám vyhovuje.",
    },
    {
      title: "Vstupní vyšetření",
      description: "Projdeme potíže, zdravotní historii a základní pohybové vyšetření.",
    },
    {
      title: "Plán terapie",
      description: "Řekneme si, co od terapie čekat, jak často chodit a co dělat doma.",
    },
    {
      title: "Domácí cvičení",
      description: "Dostanete krátký a srozumitelný plán bez zbytečně složitých sestav.",
    },
  ],
  pricing: [
    {
      name: "Vstupní konzultace",
      price: "1 290 Kč",
      duration: "60 minut",
      description: "Důkladné vyšetření, rozhovor a první terapie. Vhodné pro nové pacienty.",
    },
    {
      name: "Navazující terapie",
      price: "990 Kč",
      duration: "50 minut",
      description: "Pokračující práce na vašem plánu, kontrola pokroku a úprava cvičení.",
      featured: true,
    },
    {
      name: "Sportovní konzultace",
      price: "1 490 Kč",
      duration: "75 minut",
      description: "Analýza pohybu, plán návratu k zátěži a doporučení pro tréninkový režim.",
    },
  ],
  testimonials: [
    {
      quote:
        "Po delší bolesti zad jsem konečně dostala vysvětlení, co se děje, a jednoduchý plán na doma.",
      name: "Petra K.",
      role: "pacientka",
    },
    {
      quote:
        "Pomohlo mi, že terapie nebyla jen pasivní. Věděl jsem, co přesně dělat mezi návštěvami.",
      name: "Tomáš M.",
      role: "rekreační běžec",
    },
    {
      quote:
        "Klidný přístup, čisté prostředí a hlavně čas. Nikdo nikam nespěchal.",
      name: "Markéta D.",
      role: "pacientka",
    },
  ],
  faq: [
    {
      question: "Mohu uplatnit zdravotní pojišťovnu?",
      answer:
        "Nemáme smlouvy se zdravotními pojišťovnami. Vystavíme doklad pro případné proplacení z benefitů nebo komerčního pojištění.",
    },
    {
      question: "Co si mám vzít na první návštěvu?",
      answer:
        "Pohodlné oblečení, ve kterém se dobře hýbete. Pokud máte zprávy od lékaře, vezměte je s sebou.",
    },
    {
      question: "Jak dlouho návštěva trvá?",
      answer:
        "Vstupní konzultace trvá 60 minut, navazující terapie 50 minut. Vyhrazený čas je jen pro vás.",
    },
    {
      question: "Jaká jsou pravidla pro zrušení termínu?",
      answer:
        "Termín lze bezplatně zrušit nebo přesunout nejpozději 24 hodin předem.",
    },
  ],
} as const;

type DeepWiden<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? DeepWiden<U>[]
        : T extends object
          ? { [K in keyof T]: DeepWiden<T[K]> }
          : T;

export type SiteConfig = Omit<DeepWiden<typeof siteConfig>, "pricing"> & {
  pricing: Array<{
    name: string;
    price: string;
    duration: string;
    description: string;
    featured?: boolean;
  }>;
};
