/**
 * =============================================================================
 * CLIENT CONFIG — Dra. Grecia Rodríguez
 * =============================================================================
 * Edit THIS FILE ONLY when customizing content for this practice.
 * Empty strings / empty arrays hide the related UI automatically.
 *
 * IMAGE ASSETS — drop files under /assets/images/ (see TODO comments below).
 * =============================================================================
 */

const config = {
  // ---------------------------------------------------------------------------
  // SITE DEFAULTS
  // ---------------------------------------------------------------------------
  defaultLanguage: "es",

  // ---------------------------------------------------------------------------
  // SEO / METADATA
  // ---------------------------------------------------------------------------
  metadata: {
    es: "Dra. Grecia Rodríguez, especialista en rehabilitación oral e implantología en Tegucigalpa. Agenda tu valoración y descubre cómo devolver frescura y vitalidad a tu sonrisa.",
    en: "Dr. Grecia Rodríguez, specialist in oral rehabilitation and implantology in Tegucigalpa. Book your consultation and discover how to restore freshness and vitality to your smile.",
  },

  // ---------------------------------------------------------------------------
  // PRACTICE INFO
  // ---------------------------------------------------------------------------
  practice: {
    name: "Dra. Grecia Rodríguez",

    tagline: {
      en: "Rejuvenate your smile with oral rehabilitation and implantology treatments.",
      es: "Rejuvenece tu sonrisa con tratamientos de rehabilitación oral e implantología",
    },

    phone: "+504 9730-4279",
    phoneTel: "50497304279",

    address: {
      street: "Distrito Artemisa, Local 1126",
      city: "Tegucigalpa",
      state: "Honduras",
      zip: "",
      // Directions button opens Apple Maps pin
      mapsUrl: "https://maps.apple.com/p/8LuRTPJ9jbRzKG",
      mapsQuery: "Distrito Artemisa, Local 1126, Tegucigalpa, Honduras",
    },

    hours: {
      mon: "9:00 AM – 5:00 PM",
      tue: "9:00 AM – 5:00 PM",
      wed: "9:00 AM – 5:00 PM",
      thu: "9:00 AM – 5:00 PM",
      fri: "9:00 AM – 5:00 PM",
      sat: "9:00 AM – 2:00 PM",
      sun: "", // Dom Cerrado — empty hides the day
    },

    email: "rehabilitacionoralhn@gmail.com",

    // OPTIONAL — leave blank to hide trust-bar stats (entire bar hidden when all empty)
    yearsInPractice: "",
    patientRating: "",
  },

  // ---------------------------------------------------------------------------
  // BRANDING
  // ---------------------------------------------------------------------------
  branding: {
    primaryColor: "#B27E74",
    accentColor: "#5C3A3A",
    primaryDark: "",
    softBg: "",
    // TODO: Add practice logo — drop logo.png or logo.svg in assets/images/ and set path here
    logoUrl: "",
    heroImageUrl: "assets/images/hero.jpeg",
  },

  // ---------------------------------------------------------------------------
  // UI COPY (labels, nav, section headers, buttons) — per language
  // ---------------------------------------------------------------------------
  ui: {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        dentists: "Our Team",
        gallery: "Gallery",
        testimonials: "Reviews",
        financing: "Financing",
        location: "Location",
        book: "Book Appointment",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      hero: {
        badge: "New Patients Welcome",
        cta: "Book Appointment",
      },
      trust: {
        years: "Years in practice",
        rating: "Patient rating",
        licensed: "Licensed & certified",
      },
      sections: {
        services: "Our Services",
        servicesLead: "Oral rehabilitation, implants, and aesthetic treatments to renew your smile.",
        dentists: "Meet the Doctor",
        dentistsLead: "Specialized care in oral rehabilitation and implantology.",
        gallery: "Smile Gallery",
        galleryLead: "Real results from patients like you.",
        testimonials: "What Patients Say",
        testimonialsLead: "Trusted by families in our community.",
        financing: "Financing",
        financingLead: "We work with BAC and Ficohsa to make care more accessible.",
        location: "Visit Us",
        locationLead: "Distrito Artemisa, Tegucigalpa — we look forward to seeing you.",
      },
      services: {
        expand: "Learn more",
        collapse: "Show less",
      },
      location: {
        hours: "Hours",
        call: "Call Us",
        directions: "Get Directions",
        mapInteract: "Tap to interact with the map",
        closed: "Closed",
        days: {
          mon: "Monday",
          tue: "Tuesday",
          wed: "Wednesday",
          thu: "Thursday",
          fri: "Friday",
          sat: "Saturday",
          sun: "Sunday",
        },
      },
      stickyBar: {
        cta: "Book Appointment",
      },
      footer: {
        contact: "Contact",
        hours: "Hours",
        follow: "Follow Us",
        rights: "All rights reserved.",
        developedBy: "Developed by",
      },
      langToggle: {
        label: "Language",
        en: "EN",
        es: "ES",
      },
      gallery: {
        viewImage: "View image",
        close: "Close preview",
        previous: "Previous image",
        next: "Next image",
        preview: "Image preview",
      },
    },
    es: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        dentists: "Nuestro Equipo",
        gallery: "Galería",
        testimonials: "Opiniones",
        financing: "Financiamiento",
        location: "Ubicación",
        book: "Agendar Cita",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
      },
      hero: {
        badge: "Nuevos Pacientes Bienvenidos",
        cta: "Agendar Cita",
      },
      trust: {
        years: "Años de experiencia",
        rating: "Calificación de pacientes",
        licensed: "Licenciados y certificados",
      },
      sections: {
        services: "Nuestros Servicios",
        servicesLead: "Rehabilitación oral, implantes y tratamientos estéticos para renovar tu sonrisa.",
        dentists: "Conoce a la Doctora",
        dentistsLead: "Atención especializada en rehabilitación oral e implantología.",
        gallery: "Galería de Sonrisas",
        galleryLead: "Resultados reales de pacientes como tú.",
        testimonials: "Lo Que Dicen Nuestros Pacientes",
        testimonialsLead: "La confianza de familias de nuestra comunidad.",
        financing: "Financiamiento",
        financingLead: "Trabajamos con BAC y Ficohsa para hacer tu tratamiento más accesible.",
        location: "Visítanos",
        locationLead: "Distrito Artemisa, Tegucigalpa — te esperamos con gusto.",
      },
      services: {
        expand: "Ver más",
        collapse: "Ver menos",
      },
      location: {
        hours: "Horario",
        call: "Llámanos",
        directions: "Cómo Llegar",
        mapInteract: "Toca para interactuar con el mapa",
        closed: "Cerrado",
        days: {
          mon: "Lunes",
          tue: "Martes",
          wed: "Miércoles",
          thu: "Jueves",
          fri: "Viernes",
          sat: "Sábado",
          sun: "Domingo",
        },
      },
      stickyBar: {
        cta: "Agendar Cita",
      },
      footer: {
        contact: "Contacto",
        hours: "Horario",
        follow: "Síguenos",
        rights: "Todos los derechos reservados.",
        developedBy: "Desarrollado por",
      },
      langToggle: {
        label: "Idioma",
        en: "EN",
        es: "ES",
      },
      gallery: {
        viewImage: "Ver imagen",
        close: "Cerrar vista previa",
        previous: "Imagen anterior",
        next: "Imagen siguiente",
        preview: "Vista previa de imagen",
      },
    },
  },

  // ---------------------------------------------------------------------------
  // DENTISTS
  // ---------------------------------------------------------------------------
  dentists: [
    {
      name: "Dra. Grecia Rodríguez",
      title: {
        en: "Oral Rehabilitation & Implantology Specialist",
        es: "Especialista en Rehabilitación Oral e Implantología",
      },
      bio: {
        en: "Dr. Grecia Rodríguez specializes in oral rehabilitation and implantology, helping patients restore function, confidence, and a youthful smile with personalized treatment plans.",
        es: "La Dra. Grecia Rodríguez se especializa en rehabilitación oral e implantología, ayudando a sus pacientes a recuperar función, confianza y una sonrisa rejuvenecida con planes de tratamiento personalizados.",
      },
      photoUrl: "assets/images/dentist.jpeg",
    },
  ],

  // ---------------------------------------------------------------------------
  // SERVICES
  // ---------------------------------------------------------------------------
  services: [
    {
      name: { en: "Dental Implants", es: "Implantes Dentales" },
      description: {
        en: "Permanent titanium roots that replace missing teeth and restore chewing function, facial support, and a natural-looking smile.",
        es: "Raíces de titanio permanentes que reemplazan dientes perdidos y recuperan la función masticatoria, el soporte facial y una sonrisa de aspecto natural.",
      },
      icon: "implants",
    },
    {
      name: { en: "Implant-Supported Rehabilitation", es: "Rehabilitación sobre Implantes" },
      description: {
        en: "Custom crowns, bridges, or full-arch prosthetics anchored to implants for stable, long-lasting oral rehabilitation.",
        es: "Coronas, puentes o prótesis de arco completo personalizadas sobre implantes para una rehabilitación oral estable y duradera.",
      },
      icon: "implants",
    },
    {
      name: { en: "Dental Crowns", es: "Coronas Dentales" },
      description: {
        en: "Protect and restore damaged or weakened teeth with custom crowns that match your natural color, shape, and bite.",
        es: "Protege y restaura dientes dañados o debilitados con coronas personalizadas que combinan con tu color, forma y mordida natural.",
      },
      icon: "general",
    },
    {
      name: { en: "Fixed Bridges", es: "Puentes Fijos" },
      description: {
        en: "Replace one or more missing teeth with a fixed bridge that restores your smile and prevents neighboring teeth from shifting.",
        es: "Reemplaza uno o más dientes perdidos con un puente fijo que restaura tu sonrisa y evita que los dientes vecinos se desplacen.",
      },
      icon: "general",
    },
    {
      name: { en: "Dental Veneers", es: "Carillas Dentales" },
      description: {
        en: "Ultra-thin porcelain or composite shells that correct chips, gaps, discoloration, and minor misalignment for a flawless smile.",
        es: "Laminas ultrafinas de porcelana o composite que corrigen fracturas, espacios, decoloración y leves desalineaciones para una sonrisa impecable.",
      },
      icon: "cosmetic",
    },
    {
      name: { en: "Removable Prosthetics", es: "Prótesis Removibles" },
      description: {
        en: "Comfortable partial or complete dentures designed for a secure fit, natural appearance, and restored daily function.",
        es: "Prótesis parciales o totales removibles, cómodas y diseñadas para un ajuste seguro, aspecto natural y función diaria recuperada.",
      },
      icon: "general",
    },
    {
      name: { en: "Full Mouth Rehabilitation", es: "Rehabilitaciones Completas" },
      description: {
        en: "Comprehensive treatment plans that rebuild worn, missing, or damaged teeth to restore health, function, and facial harmony.",
        es: "Planes de tratamiento integrales que reconstruyen dientes desgastados, ausentes o dañados para recuperar salud, función y armonía facial.",
      },
      icon: "implants",
    },
    {
      name: { en: "Teeth Whitening", es: "Blanqueamiento Dental" },
      description: {
        en: "Professional whitening to brighten stained or dull teeth safely, with results that look natural — not overdone.",
        es: "Blanqueamiento profesional para aclarar dientes manchados o opacos de forma segura, con resultados naturales — nada exagerado.",
      },
      icon: "whitening",
    },
    {
      name: { en: "Aesthetic Restorations", es: "Restauraciones Estéticas" },
      description: {
        en: "Tooth-colored fillings and restorations that repair decay or damage while blending seamlessly with your natural smile.",
        es: "Resinas y restauraciones del color del diente que reparan caries o daños integrándose de forma natural con tu sonrisa.",
      },
      icon: "cosmetic",
    },
    {
      name: { en: "Smile Design", es: "Diseño de Sonrisa" },
      description: {
        en: "A personalized plan — often with digital preview — to shape the size, color, and proportion of your ideal smile.",
        es: "Un plan personalizado — a menudo con vista previa digital — para definir el tamaño, color y proporción de tu sonrisa ideal.",
      },
      icon: "cosmetic",
    },
    {
      name: { en: "Inlays & Onlays", es: "Incrustaciones" },
      description: {
        en: "Precision-crafted restorations for moderate tooth damage — stronger than a filling and more conservative than a full crown.",
        es: "Restauraciones de precisión para daño dental moderado — más resistentes que una resina y más conservadoras que una corona completa.",
      },
      icon: "general",
    },
    {
      name: { en: "Post–Root Canal Reconstruction", es: "Reconstrucción Dental Post-Endodoncia" },
      description: {
        en: "Rebuild and protect teeth after root canal therapy with durable restorations that restore strength and appearance.",
        es: "Reconstruye y protege dientes después de un tratamiento de conducto con restauraciones duraderas que devuelven fuerza y estética.",
      },
      icon: "general",
    },
    {
      name: { en: "Occlusal Adjustment", es: "Ajuste Oclusal" },
      description: {
        en: "Fine-tune your bite to relieve uneven pressure, jaw discomfort, and wear caused by misaligned contact between teeth.",
        es: "Ajusta finamente tu mordida para aliviar presión desigual, molestias mandibulares y desgaste por contactos dentales incorrectos.",
      },
      icon: "general",
    },
    {
      name: { en: "Aesthetic Recontouring", es: "Recontorneado Estético" },
      description: {
        en: "Subtle reshaping of tooth edges and surfaces to soften irregular contours and improve the balance of your smile.",
        es: "Remodelado sutil de bordes y superficies dentales para suavizar contornos irregulares y mejorar el equilibrio de tu sonrisa.",
      },
      icon: "cosmetic",
    },
    {
      name: { en: "Aesthetic Cleaning & Polishing", es: "Limpieza y Pulido Estético" },
      description: {
        en: "Professional cleaning and polishing to remove plaque and surface stains, leaving teeth smooth, bright, and refreshed.",
        es: "Limpieza y pulido profesional para eliminar placa y manchas superficiales, dejando los dientes lisos, luminosos y renovados.",
      },
      icon: "cleaning",
    },
  ],

  // ---------------------------------------------------------------------------
  // TESTIMONIALS — empty array hides the section
  // ---------------------------------------------------------------------------
  testimonials: [],

  // ---------------------------------------------------------------------------
  // FINANCING IMAGES
  // ---------------------------------------------------------------------------
  financingImages: [
    {
      src: "assets/images/financing/Bac.png",
      alt: {
        en: "BAC Credomatic financing",
        es: "Financiamiento BAC Credomatic",
      },
    },
    {
      src: "assets/images/financing/Ficohsa.png",
      alt: {
        en: "Ficohsa financing",
        es: "Financiamiento Ficohsa",
      },
    },
  ],

  // ---------------------------------------------------------------------------
  // SMILE GALLERY
  // ---------------------------------------------------------------------------
  gallery: [
    "assets/images/gallery/IMG_0381.jpeg",
    "assets/images/gallery/IMG_0393.jpeg",
    "assets/images/gallery/IMG_0394.jpeg",
    "assets/images/gallery/IMG_0395.jpeg",
    "assets/images/gallery/IMG_0396.jpeg",
    "assets/images/gallery/IMG_0397.jpeg",
    "assets/images/gallery/IMG_0399.jpeg",
  ],

  // ---------------------------------------------------------------------------
  // SOCIAL LINKS — leave blank to hide that icon
  // ---------------------------------------------------------------------------
  socials: {
    instagram: "https://www.instagram.com/dragreciarodriguez",
    facebook: "https://www.facebook.com/p/Dra-Grecia-Rodríguez-100091168839414",
  },
};

// Expose globally for app.js (no bundler / no modules required)
window.SITE_CONFIG = config;
