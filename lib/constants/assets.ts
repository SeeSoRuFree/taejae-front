// Asset paths constants
export const ASSETS = {
  // Academic assets
  ACADEMICS: {
    FACULTY: {
      DAVID_HAZARD: '/assets/academics/faculty/david-hazard.png',
      STEVE_JUSTICE: '/assets/academics/faculty/steve-justice.png',
      JIYOUNG_KWAHK: '/assets/academics/faculty/jiyoung-kwahk.png',
      HEE_EUN_HELEN_LEE: '/assets/academics/faculty/hee-eun-helen-lee.png',
      FACULTY_8: '/assets/academics/faculty/faculty-8.png',
      FACULTY_9: '/assets/academics/faculty/faculty-9.png',
      FACULTY_10: '/assets/academics/faculty/faculty-10.png',
      FACULTY_11: '/assets/academics/faculty/faculty-11.png',
      FACULTY_12: '/assets/academics/faculty/faculty-12.png',
      MAIN_HERO: '/assets/academics/faculty/main-hero.png',
    },
  },

  // Background decorations
  BACKGROUNDS: {
    GRADIENT_GLASS_18: '/assets/gradient-glass-18.png',
    INFINITY_VISION_BG: '/assets/infinity-vision-bg.png',
  },

  // Icons
  ICONS: {
    SOCIAL: {
      RESEARCH: '/assets/icons/social/research-icon.svg',
      LINKEDIN: '/assets/icons/social/linkedin-icon.svg',
      PORTFOLIO: '/assets/icons/social/portfolio-icon.svg',
    },
  },

  // UI Elements
  UI: {
    ELLIPSE_SHAPE: '/assets/ellipse-shape.svg',
    MASK_SHAPE: '/assets/mask-shape.png',
    UPDATE_COLOR: '/assets/update-color.png',
    DIVIDER_WHAT_LEARN: '/assets/divider-what-learn.svg',
  },
} as const

// Asset validation helper
export function getAssetPath(path: string): string {
  if (process.env.NODE_ENV === 'development') {
    // In development, you could add validation
    console.debug(`Loading asset: ${path}`)
  }
  return path
}
