export const COMPONENT_TYPES = {
  HEADER: 'header',
  HEADING: 'heading',
  PARAGRAPH: 'paragraph',
  CTA: 'cta',
  DIVIDER: 'divider',
  IMAGE: 'image',
  VIDEO: 'video',
  FOOTER: 'footer',
}

export const defaultContent = {
  [COMPONENT_TYPES.HEADER]: {},
  [COMPONENT_TYPES.HEADING]: {
    h1: 'Heading 1',
    h2: '',
    style: 'h1',
    subhead: false,
  },
  [COMPONENT_TYPES.PARAGRAPH]: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  [COMPONENT_TYPES.CTA]: {
    layout: 'single',
    primaryLabel: 'Button',
    primaryLink: '',
    secondaryLabel: 'Button',
    secondaryLink: '',
  },
  [COMPONENT_TYPES.DIVIDER]: {},
  [COMPONENT_TYPES.IMAGE]: {
    size: 'medium',
    src: '',
    alt: '',
    link: '',
  },
  [COMPONENT_TYPES.VIDEO]: {
    thumbnailSrc: '',
    videoUrl: '',
    alt: '',
    size: 'medium',
  },
  [COMPONENT_TYPES.FOOTER]: {
    unsubscribeText: 'You are receiving this email because you opted-in to receive updates from Bilt.',
  },
}
