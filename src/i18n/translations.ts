export type Translations = {
  header: {
    name: string;
    title: string;
    descriptionTitle: string;
    description: string;
  };
  mindset: {
    title: string;
    paragraphs: string[];
  };
  workExperience: {
    title: string;
    present: string;
  };
  skills: {
    title: string;
  };
  portfolio: {
    title: string;
    viewCode: string;
    features: string;
    technologies: string;
  };
  footer: {
    contactInfo: string;
    location: string;
    copyright: string;
  };
};

export const translations: Record<'en' | 'es', Translations> = {
  en: {
    header: {
      name: "Hi! I'm Randy Germosén",
      title: "Full Stack and Software Engineer",
      descriptionTitle: "Business-Driven Web, Mobile & Software Developer",
      description: "Skilled in designing and implementing robust applications across multiple platforms. Combines problem-solving expertise with a deep understanding of both frontend and backend systems."
    },
    mindset: {
      title: "Mindset",
      paragraphs: [
        "As a full-stack developer, I approach problems with a systematic and analytical mindset...",
        "When leadership is required, I naturally step up to coordinate efforts...",
        "My adaptability allows me to switch contexts between frontend and backend seamlessly..."
      ]
    },
    workExperience: {
      title: "Work Experience",
      present: "Present"
    },
    skills: {
      title: "Skills"
    },
    portfolio: {
      title: "Portfolio",
      viewCode: "View Code",
      features: "Features",
      technologies: "Technologies"
    },
    footer: {
      contactInfo: "Contact Info",
      location: "Dominican Republic, Santiago",
      copyright: "Randy Germosén. All Rights Reserved."
    }
  },
  es: {
    header: {
      name: "¡Hola! Soy Randy Germosén",
      title: "Ingeniero de Software Full Stack",
      descriptionTitle: "Desarrollador Web, Móvil y de Software Orientado a Negocios",
      description: "Experto en diseñar e implementar aplicaciones robustas en múltiples plataformas. Combino habilidades para resolver problemas con un profundo conocimiento de sistemas frontend y backend."
    },
    mindset: {
      title: "Mentalidad",
      paragraphs: [
        "Como desarrollador full stack, abordo los problemas con una mentalidad sistemática y analítica...",
        "Cuando se requiere liderazgo, naturalmente tomo la iniciativa para coordinar esfuerzos...",
        "Mi adaptabilidad me permite cambiar de contexto entre frontend y backend sin problemas..."
      ]
    },
    workExperience: {
      title: "Experiencia Laboral",
      present: "Presente"
    },
    skills: {
      title: "Habilidades"
    },
    portfolio: {
      title: "Portafolio",
      viewCode: "Ver Código",
      features: "Funcionalidades",
      technologies: "Tecnologías"
    },
    footer: {
      contactInfo: "Información de Contacto",
      location: "República Dominicana, Santiago",
      copyright: "Randy Germosén. Todos los derechos reservados."
    }
  }
};