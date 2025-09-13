// Dimension constants
export const DIMENSIONS = {
  // Layout dimensions
  MAX_CONTENT_WIDTH: 1440,

  // Container paddings
  CONTAINER_PADDING: {
    MOBILE: 20,
    TABLET: 32,
    DESKTOP: 50,
  },

  // Section spacing
  SECTION_SPACING: {
    SMALL: 50,
    MEDIUM: 66,
    LARGE: 100,
  },

  // Typography sizes (mobile/desktop pairs)
  TYPOGRAPHY: {
    HERO_TITLE: {
      MOBILE: 40,
      DESKTOP: 64,
    },
    SECTION_TITLE: {
      MOBILE: 32,
      DESKTOP: 44,
    },
    BODY_TEXT: {
      MOBILE: 16,
      DESKTOP: 20,
    },
  },

  // Component specific dimensions
  COMPONENTS: {
    HEADER_HEIGHT: 66,
    BUTTON_HEIGHT: {
      SMALL: 32,
      MEDIUM: 40,
      LARGE: 48,
    },
    CARD_BORDER_RADIUS: 32,
    INFINITY_CARD_HEIGHT: 360,
  },

  // Faculty grid dimensions
  FACULTY: {
    CARD_ASPECT_RATIO: '305/301',
    CARD_CONTENT_HEIGHT: 222,
    ICON_SIZE: 32,
  },

  // Competency diagram
  COMPETENCY_DIAGRAM: {
    CONTAINER: 707,
    INNER: 596,
    MASK: 615,
    COLOR_OVERLAY: 540,
  },
} as const

// Helper functions
export function getResponsivePadding(breakpoint: 'mobile' | 'tablet' | 'desktop'): number {
  return DIMENSIONS.CONTAINER_PADDING[
    breakpoint.toUpperCase() as keyof typeof DIMENSIONS.CONTAINER_PADDING
  ]
}

export function getTypographySize(
  element: keyof typeof DIMENSIONS.TYPOGRAPHY,
  breakpoint: 'MOBILE' | 'DESKTOP'
): number {
  return DIMENSIONS.TYPOGRAPHY[element][breakpoint]
}
