import { COMPONENT_TYPES, defaultContent } from './components'

const block = (id, type, overrides = {}) => ({
  id,
  type,
  content: { ...defaultContent[type], ...overrides },
})

export const TEMPLATES = [
  {
    id: 'blank',
    name: 'Blank',
    description: 'Start from scratch',
    blocks: [
      block('t1-1', COMPONENT_TYPES.HEADER),
      block('t1-2', COMPONENT_TYPES.FOOTER),
    ],
  },
  {
    id: 'announcement',
    name: 'Announcement',
    description: 'Product launches and feature drops',
    blocks: [
      block('t2-1', COMPONENT_TYPES.HEADER),
      block('t2-2', COMPONENT_TYPES.IMAGE, { size: 'large' }),
      block('t2-3', COMPONENT_TYPES.HEADING),
      block('t2-4', COMPONENT_TYPES.PARAGRAPH),
      block('t2-5', COMPONENT_TYPES.CTA, { layout: 'double' }),
      block('t2-6', COMPONENT_TYPES.FOOTER),
    ],
  },
  {
    id: 'digest',
    name: 'Digest',
    description: 'Weekly roundups and newsletters',
    blocks: [
      block('t3-1', COMPONENT_TYPES.HEADER),
      block('t3-2', COMPONENT_TYPES.HEADING),
      block('t3-3', COMPONENT_TYPES.DIVIDER),
      block('t3-4', COMPONENT_TYPES.HEADING, { h1: 'Section One' }),
      block('t3-5', COMPONENT_TYPES.PARAGRAPH),
      block('t3-6', COMPONENT_TYPES.DIVIDER),
      block('t3-7', COMPONENT_TYPES.HEADING, { h1: 'Section Two' }),
      block('t3-8', COMPONENT_TYPES.PARAGRAPH),
      block('t3-9', COMPONENT_TYPES.DIVIDER),
      block('t3-10', COMPONENT_TYPES.HEADING, { h1: 'Section Three' }),
      block('t3-11', COMPONENT_TYPES.PARAGRAPH),
      block('t3-12', COMPONENT_TYPES.CTA, { layout: 'single' }),
      block('t3-14', COMPONENT_TYPES.FOOTER),
    ],
  },
  {
    id: 'onboarding',
    name: 'Onboarding',
    description: 'Welcome flows and user activation',
    blocks: [
      block('t4-1', COMPONENT_TYPES.HEADER),
      block('t4-2', COMPONENT_TYPES.HEADING, { h1: 'Welcome to Bilt' }),
      block('t4-3', COMPONENT_TYPES.PARAGRAPH),
      block('t4-4', COMPONENT_TYPES.DIVIDER),
      block('t4-5', COMPONENT_TYPES.HEADING, { h1: 'What you can do', h2: '' }),
      block('t4-6', COMPONENT_TYPES.PARAGRAPH),
      block('t4-7', COMPONENT_TYPES.HEADING, { h1: 'Getting started', h2: '' }),
      block('t4-8', COMPONENT_TYPES.PARAGRAPH),
      block('t4-9', COMPONENT_TYPES.CTA, { layout: 'double' }),
      block('t4-10', COMPONENT_TYPES.FOOTER),
    ],
  },
]
