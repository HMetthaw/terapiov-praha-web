import { siteConfig, type SiteConfig } from "@/site.config";
import heroPatientDarkImg from "@/assets/hero-physio-patient-dark.jpg";

export const previewConfigs: Record<string, SiteConfig> = {
  "rehabilitace-broumovska": {
    ...siteConfig,
    name: "Rehabilitace Broumovská",
    legalName: "REHABILITACE BROUMOVSKÁ s. r. o.",
    tagline: "Rehabilitace a fyzioterapie v Liberci s přehlednou cestou k objednání.",
    city: "Liberec 6",
    address: "Broumovská 989, 460 01 Liberec 6",
    locationNote: "Autobus č. 25, zastávka Plátenická",
    phone: "+420 723 345 895",
    phoneTel: "+420723345895",
    email: "recepcerhc@seznam.cz",
    ico: "doplnit",
    openingHours: {
      today: "7:00 - 17:00",
      weekdays: "Po - Čt 7:00 - 17:00, Pá 7:00 - 12:00",
      saturday: "Víkend dle domluvy",
    },
    seo: {
      title: "Rehabilitace Broumovská | Fyzioterapie Liberec",
      description:
        "Rehabilitace a fyzioterapie v Liberci. Péče o pohybový aparát, bolesti zad, bolesti kloubů, poúrazové stavy a soukromá péče.",
      ogTitle: "Rehabilitace Broumovská | Rehabilitace a fyzioterapie Liberec",
      ogDescription:
        "Přehledný návrh webu pro rehabilitační ordinaci v Liberci se snadným kontaktem, službami a ceníkem.",
    },
    images: {
      ...siteConfig.images,
      hero: heroPatientDarkImg,
    },
    hero: {
      eyebrow: "Rehabilitace a fyzioterapie · Liberec 6",
      title: "Rehabilitace pohybového aparátu s jasnou cestou k objednání.",
      intro:
        "Přehledná péče pro bolesti zad, kloubů, svalů i poúrazové stavy. Pacient hned vidí, kam zavolat, jaké služby nabízíte a jak se k ordinaci dostane.",
      primaryCta: "Zavolat recepci",
      secondaryCta: "Zobrazit kontakt",
      imageAlt: "Fyzioterapeutická péče v rehabilitační ordinaci",
    },
    trustStrip: [
      { value: "Liberec 6", label: "Broumovská 989" },
      { value: "4,8 / 5", label: "hodnocení na Google" },
      { value: "59+", label: "veřejných recenzí" },
      { value: "Po - Pá", label: "ordinace v pracovních dnech" },
    ],
    services: [
      {
        title: "Bolesti zad a páteře",
        description:
          "Samostatná sekce pro pacienty, kteří hledají pomoc s bolestí zad, páteře nebo dlouhodobým přetížením.",
        points: ["Srozumitelný popis potíží", "Rychlý kontakt na recepci", "Napojení na ceník a objednání"],
      },
      {
        title: "Bolesti kloubů a svalů",
        description:
          "Přehledné rozdělení služeb podle problému pacienta pomáhá návštěvníkovi rychle poznat, že je na správném místě.",
        points: ["Klouby a svaly", "Přetížení a pohybové obtíže", "Jasný další krok"],
      },
      {
        title: "Rehabilitace po úrazu",
        description:
          "Sekce pro pacienty po úrazech a zákrocích, kde je důležité působit důvěryhodně, klidně a konkrétně.",
        points: ["Poúrazové stavy", "Léčba jizev", "Návrat k běžnému pohybu"],
      },
      {
        title: "Přístrojové vybavení",
        description:
          "Modernější prezentace přístrojové péče jako elektroléčba, laser, magnetoterapie, SIS nebo Elgym.",
        points: ["Elektroléčba", "HIT laser a SIS", "Magnetoterapie a Elgym"],
      },
    ],
    therapist: {
      name: "Ordinace rehabilitace a fyzioterapie",
      role: "MUDr. Emil Charvát · Rehabilitace Broumovská",
      imageAlt: "Tým rehabilitační ordinace",
      bio: [
        "Návrh staví do popředí to, co pacient potřebuje vědět hned: jaké potíže ordinace řeší, kde ji najde a jak se objednat.",
        "Současný obsah webu je možné zachovat, ale rozdělit ho do přehlednějších bloků pro mobilní návštěvníky z Googlu.",
        "Cílem není slibovat výsledky léčby, ale zjednodušit orientaci, posílit důvěru a snížit počet pacientů, kteří odejdou bez kontaktu.",
      ],
      badges: ["Fyzioterapie", "Rehabilitace", "Soukromá péče", "Přístrojová péče"],
    },
    process: [
      {
        title: "Kontakt",
        description: "Telefon a e-mail jsou vidět hned nahoře i dole na stránce, hlavně na mobilu.",
      },
      {
        title: "Výběr služby",
        description: "Pacient si rychle najde oblast potíží: záda, klouby, svaly, poúrazové stavy nebo přístrojovou péči.",
      },
      {
        title: "Praktické informace",
        description: "Adresa, otevírací doba, dostupnost autobusem a ceník jsou na jednom přehledném místě.",
      },
      {
        title: "Objednání",
        description: "Každá důležitá část stránky vede zpět na jasný další krok: zavolat recepci nebo napsat e-mail.",
      },
    ],
    pricing: [
      {
        name: "Soukromá péče",
        price: "370 Kč",
        duration: "30 minut",
        description: "Cvičení, konzultace nebo masáže podle aktuálně uvedeného ceníku soukromé péče.",
        featured: true,
      },
      {
        name: "HIT laser",
        price: "od 70 Kč",
        duration: "5 minut",
        description: "Manuální aplikace nebo aplikace ze scanneru podle zvoleného typu výkonu.",
      },
      {
        name: "Přístrojové procedury",
        price: "od 65 Kč",
        duration: "15 minut / procedura",
        description: "Elektroléčba, Elgym a další procedury uvedené v ceníku ordinace.",
      },
    ],
    testimonials: [
      {
        quote:
          "Návrh využívá existující dobré hodnocení ordinace a ukazuje ho dřív, než pacient začne hledat kontakt.",
        name: "Návrh webu",
        role: "ukázková poznámka pro preview",
      },
      {
        quote:
          "Na mobilu je nejdůležitější rychle pochopit služby, adresu a možnost zavolat. Tomu je layout přizpůsobený.",
        name: "Mobilní návštěvník",
        role: "typický scénář z Googlu",
      },
      {
        quote:
          "Texty jsou věcné a konzervativní, bez přehnaných zdravotních slibů nebo garancí výsledku.",
        name: "Bezpečný tón",
        role: "zdravotnický segment",
      },
    ],
    faq: [
      {
        question: "Je toto hotový web ordinace?",
        answer:
          "Ne. Jde o rychlý vizuální návrh úvodní stránky, který ukazuje možný směr přehlednější prezentace služeb a kontaktu.",
      },
      {
        question: "Co by se ještě doplnilo před spuštěním?",
        answer:
          "Aktuální fotografie, přesné IČO, kompletní souhlas s texty, případné formuláře a technické nastavení měření.",
      },
      {
        question: "Proč je důraz na telefon?",
        answer:
          "U lokální rehabilitační ordinace často přichází návštěvník z mobilu a potřebuje rychle zavolat nebo zjistit adresu.",
      },
      {
        question: "Lze zachovat současný obsah?",
        answer:
          "Ano. Současné stránky služeb, přístrojového vybavení a ceníku lze převést do přehlednější struktury.",
      },
    ],
  },
};

export const previewList = Object.keys(previewConfigs);
