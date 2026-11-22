import { caseStudiesEn, caseStudiesFr } from './case-studies';

export const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      projects: "Work",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, i'm bristin",
      description: "a multidisciplinary graphic designer & brand strategist bridging the gap between creative vision and market performance"
    },
    contactButton: {
      text: "Let's Talk"
    },
    about: {
      title: "About me",
      description: "With 4+ years of experience in fast-paced agencies across Dubai, Europe, and Africa, I specialize in bridging the gap between creative vision and market performance. I obsess over typography, layout, and the 'why' behind every pixel to deliver speed without sacrificing soul."
    },
    services: {
      title: "Services",
      items: [
        {
          name: 'Brand Identity',
          desc: 'Logo design, comprehensive brand guidelines, and complete visual systems that communicate a clear and memorable presence.'
        },
        {
          name: 'Social Media Campaigns',
          desc: 'Strategic and engaging digital campaigns designed to enhance brand presence and build community connection.'
        },
        {
          name: 'Print & Packaging',
          desc: 'Functional yet aesthetically pleasing packaging and high-stakes print materials tailored for competitive markets and major events.'
        },
        {
          name: 'Motion & Video',
          desc: 'Dynamic animations and motion graphics leveraging Premiere Pro and After Effects for visual storytelling.'
        },
        {
          name: 'UI/UX & Digital',
          desc: 'Crafting clean, modern digital experiences and conversion-focused designs using Figma and Framer.'
        }
      ]
    },
    projects: {
      title: "Work",
      liveProject: "Live Project",
      caseStudy: "Case study",
      categories: {
        campaign: "Campaign",
        socialMedia: "Social Media",
        branding: "Branding",
        packaging: "Packaging"
      }
    },
    contact: {
      headline: "Let's work together",
      subtext: "Available for brand identity, campaigns, and digital design projects.",
      emailLabel: "bristinbiju123@gmail.com",
      cta: "Email Me"
    },
    home: {
      hero: {
        eyebrow: "Bristin Biju · Brand & graphic designer",
        titleBefore: "Brand identities and campaigns for ",
        titleAccent: "growing businesses",
        titleAfter: " across Dubai, Europe and Africa.",
        lead: "Multidisciplinary graphic designer and brand strategist, bridging creative vision and market performance.",
        primary: "See selected work",
        secondary: "Let's talk"
      },
      proof: {
        label: "Brands I've designed for",
        facts: [
          { value: "4+", label: "years in fast-paced agencies" },
          { value: "Dubai · Europe · Africa", label: "markets I design for" }
        ]
      },
      selected: {
        eyebrow: "Selected work",
        title: "Identity systems, campaigns and packaging",
        viewCase: "View case study"
      },
      index: {
        title: "All projects",
        all: "All",
        filterLabel: "Filter projects",
        empty: "No projects in this category yet."
      },
      services: {
        eyebrow: "Services",
        title: "What I can do for your brand",
        items: [
          { name: "Brand identity", desc: "Logo, guidelines and a complete visual system that gives your brand a clear, memorable presence.", slug: "gba" },
          { name: "Campaigns & social", desc: "Strategic campaigns and social content that grow your presence and build a community around the brand.", slug: "you-can" },
          { name: "Packaging & print", desc: "Packaging and print that work on the shelf and at major events, made for competitive markets.", slug: "forti" }
        ],
        seeProject: "See",
        also: "Also available: motion & video (Premiere Pro, After Effects) and UI/UX design (Figma, Framer)."
      },
      process: {
        eyebrow: "Process",
        title: "How a project runs",
        steps: [
          { name: "Discover", text: "Understand your business, audience and market before designing anything." },
          { name: "Strategy", text: "Agree the positioning, message and creative direction." },
          { name: "Design", text: "Build the identity or campaign and refine it with you in focused rounds." },
          { name: "Deliver", text: "Hand over production-ready files and guidelines your team can use." }
        ]
      },
      about: {
        eyebrow: "About",
        title: "Hi, I'm Bristin.",
        photoAlt: "Portrait of Bristin Biju",
        skillsLabel: "Skills",
        skills: ["AI-Assisted Web Development", "Vibe Coding", "Prompt Engineering", "AI-Powered Creative Workflows"],
        toolsLabel: "Tools",
        tools: ["Adobe Creative Suite", "Premiere Pro", "After Effects", "Figma", "Framer", "ChatGPT", "Claude", "Antigravity", "VS Code", "GitHub", "Vercel"]
      },
      testimonials: {
        title: "What clients say",
        items: [] as { quote: string; name: string; role: string }[]
      },
      contact: {
        eyebrow: "Contact",
        orWrite: "Or send a message",
        name: "Your name",
        email: "Your email",
        message: "About your project",
        send: "Send message",
        formNote: "This opens your email app with the message ready to send.",
        bookingLink: "",
        bookingLabel: "Book a call",
        socialLabel: "Elsewhere"
      }
    },
    caseStudy: {
      backToWork: "All work",
      client: "Client",
      role: "Role",
      year: "Year",
      deliverables: "Deliverables",
      tools: "Tools",
      challenge: "The challenge",
      goal: "The goal",
      process: "Process",
      solution: "The solution",
      outcome: "The outcome",
      gallery: "Gallery",
      viewExternal: "View on Behance",
      previous: "Previous project",
      next: "Next project",
      ctaHeadline: "Have a project in mind?",
      ctaText: "Tell me about your brand, campaign or launch.",
      ctaButton: "Start a project",
      openImage: "Open image",
      notFoundTitle: "Project not found",
      notFoundText: "This project doesn't exist or has moved.",
      skipToContent: "Skip to content"
    },
    caseStudies: caseStudiesEn,
    footer: {
      copyright: "Bristin Biju. All rights reserved."
    }
  },
  fr: {
    nav: {
      about: "À propos",
      services: "Services",
      projects: "Projets",
      contact: "Contact"
    },
    hero: {
      greeting: "Bonjour\nje suis Bristin",
      description: "un graphiste multidisciplinaire & stratège de marque faisant le pont entre la vision créative et la performance sur le marché"
    },
    contactButton: {
      text: "Discutons"
    },
    about: {
      title: "À propos",
      description: "Avec plus de 4 ans d'expérience dans des agences dynamiques à travers Dubaï, l'Europe et l'Afrique, je me spécialise dans la création de ponts entre la vision créative et la performance sur le marché. Je suis passionné par la typographie, la mise en page et le 'pourquoi' derrière chaque pixel afin de livrer rapidement sans sacrifier l'âme du projet."
    },
    services: {
      title: "Services",
      items: [
        {
          name: 'Identité de Marque',
          desc: 'Création de logos, chartes graphiques complètes et systèmes visuels qui communiquent une présence claire et mémorable.'
        },
        {
          name: 'Campagnes Réseaux Sociaux',
          desc: 'Campagnes numériques stratégiques et engageantes conçues pour améliorer la présence de la marque et fédérer la communauté.'
        },
        {
          name: 'Print & Packaging',
          desc: 'Emballages à la fois fonctionnels et esthétiques, et supports imprimés à fort enjeu adaptés aux marchés concurrentiels et aux grands événements.'
        },
        {
          name: 'Motion Design & Vidéo',
          desc: 'Animations dynamiques et motion design utilisant Premiere Pro et After Effects pour raconter des histoires visuelles.'
        },
        {
          name: 'UI/UX & Digital',
          desc: "Conception d'expériences numériques épurées et modernes, axées sur la conversion, en utilisant Figma et Framer."
        }
      ]
    },
    projects: {
      title: "Projets",
      liveProject: "Voir le projet",
      caseStudy: "Étude de cas",
      categories: {
        campaign: "Campagne",
        socialMedia: "Réseaux Sociaux",
        branding: "Identité de Marque",
        packaging: "Packaging"
      }
    },
    contact: {
      headline: "Travaillons ensemble",
      subtext: "Disponible pour des projets d'identité de marque, de campagnes et de design digital.",
      emailLabel: "bristinbiju123@gmail.com",
      cta: "M'écrire"
    },
    home: {
      hero: {
        eyebrow: "Bristin Biju · Designer graphique & de marque",
        titleBefore: "Identités de marque et campagnes pour des ",
        titleAccent: "entreprises en croissance",
        titleAfter: " à Dubaï, en Europe et en Afrique.",
        lead: "Graphiste multidisciplinaire et stratège de marque, entre vision créative et performance sur le marché.",
        primary: "Voir les projets",
        secondary: "Discutons"
      },
      proof: {
        label: "Marques pour lesquelles j'ai créé",
        facts: [
          { value: "4+", label: "ans en agences dynamiques" },
          { value: "Dubaï · Europe · Afrique", label: "marchés couverts" }
        ]
      },
      selected: {
        eyebrow: "Projets choisis",
        title: "Identités, campagnes et packaging",
        viewCase: "Voir l'étude de cas"
      },
      index: {
        title: "Tous les projets",
        all: "Tous",
        filterLabel: "Filtrer les projets",
        empty: "Aucun projet dans cette catégorie pour l'instant."
      },
      services: {
        eyebrow: "Services",
        title: "Ce que je peux faire pour votre marque",
        items: [
          { name: "Identité de marque", desc: "Logo, charte graphique et système visuel complet pour une présence claire et mémorable.", slug: "gba" },
          { name: "Campagnes & réseaux sociaux", desc: "Des campagnes stratégiques et des contenus sociaux qui développent votre présence et fédèrent une communauté.", slug: "you-can" },
          { name: "Packaging & print", desc: "Des emballages et supports imprimés efficaces en rayon comme lors de grands événements, pensés pour des marchés concurrentiels.", slug: "forti" }
        ],
        seeProject: "Voir",
        also: "Également : motion design & vidéo (Premiere Pro, After Effects) et design UI/UX (Figma, Framer)."
      },
      process: {
        eyebrow: "Processus",
        title: "Le déroulé d'un projet",
        steps: [
          { name: "Découvrir", text: "Comprendre votre activité, votre public et votre marché avant de dessiner quoi que ce soit." },
          { name: "Stratégie", text: "Définir ensemble le positionnement, le message et la direction créative." },
          { name: "Design", text: "Créer l'identité ou la campagne et l'affiner avec vous en quelques étapes ciblées." },
          { name: "Livraison", text: "Remettre des fichiers prêts à produire et une charte utilisable par votre équipe." }
        ]
      },
      about: {
        eyebrow: "À propos",
        title: "Bonjour, je suis Bristin.",
        photoAlt: "Portrait de Bristin Biju",
        skillsLabel: "Compétences",
        skills: ["Développement web assisté par l'IA", "Vibe coding", "Prompt engineering", "Workflows créatifs propulsés par l'IA"],
        toolsLabel: "Outils",
        tools: ["Adobe Creative Suite", "Premiere Pro", "After Effects", "Figma", "Framer", "ChatGPT", "Claude", "Antigravity", "VS Code", "GitHub", "Vercel"]
      },
      testimonials: {
        title: "Ce qu'en disent les clients",
        items: [] as { quote: string; name: string; role: string }[]
      },
      contact: {
        eyebrow: "Contact",
        orWrite: "Ou envoyez un message",
        name: "Votre nom",
        email: "Votre e-mail",
        message: "Votre projet",
        send: "Envoyer",
        formNote: "Cela ouvre votre messagerie avec le message prêt à envoyer.",
        bookingLink: "",
        bookingLabel: "Réserver un appel",
        socialLabel: "Ailleurs"
      }
    },
    caseStudy: {
      backToWork: "Tous les projets",
      client: "Client",
      role: "Rôle",
      year: "Année",
      deliverables: "Livrables",
      tools: "Outils",
      challenge: "Le défi",
      goal: "L'objectif",
      process: "Processus",
      solution: "La solution",
      outcome: "Le résultat",
      gallery: "Galerie",
      viewExternal: "Voir sur Behance",
      previous: "Projet précédent",
      next: "Projet suivant",
      ctaHeadline: "Un projet en tête ?",
      ctaText: "Parlez-moi de votre marque, campagne ou lancement.",
      ctaButton: "Démarrer un projet",
      openImage: "Ouvrir l'image",
      notFoundTitle: "Projet introuvable",
      notFoundText: "Ce projet n'existe pas ou a été déplacé.",
      skipToContent: "Aller au contenu"
    },
    caseStudies: caseStudiesFr,
    footer: {
      copyright: "Bristin Biju. Tous droits réservés."
    }
  }
};
