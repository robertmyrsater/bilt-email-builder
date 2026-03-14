import { useState, useCallback, useRef, useEffect, Fragment } from 'react'
import {
  DndContext,
  DragOverlay,
  useSensor,
  useSensors,
  PointerSensor,
  useDroppable,
  useDraggable,
  closestCenter,
} from '@dnd-kit/core'
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {
  Monitor,
  Tablet,
  Smartphone,
  Sun,
  Moon,
  Copy,
  Download,
  Check,
  Type,
  Heading,
  AlignLeft,
  MousePointerClick,
  Minus,
  Image as ImageIcon,
  Video,
  PanelBottom,
  GripVertical,
  Trash2,
  Plus,
  ChevronUp,
  ChevronDown,
  Undo2,
  Redo2,
  Send,
} from 'lucide-react'
import { COMPONENT_TYPES, defaultContent } from './components'
import { renderEmailHTML, downloadEmailHTML, downloadCustomerIoHTML } from './emailRenderer'
import './App.css'

/* ——— Wabi Logo ——— */

function WabiLogo({ height = 20, className, style }) {
  const h = height
  const w = (86 / 20) * h
  return (
    <svg width={w} height={h} viewBox="0 0 86 20" fill="none" className={className} style={style}>
      <g clipPath="url(#wabi-clip)">
        <path d="M38.7452 19.7062H35.3506L30.9655 5.5292H34.5023L37.1895 15.7361L40.019 5.5292H43.4136L46.384 15.7361L49.0712 5.5292H52.4658L48.0806 19.7062H44.6861L41.7156 9.49926L38.7452 19.7062ZM57.5555 19.99C54.726 19.99 52.463 18.2882 52.463 15.7375C52.463 13.1869 54.3019 11.8819 56.9891 11.485L59.8186 11.0599C60.6669 10.9187 61.5166 10.6348 61.5166 9.64191C61.5166 8.36657 60.2441 7.79882 59.1112 7.79882C57.4132 7.79882 56.2817 8.64904 56.1408 10.3509H52.7462C52.7462 7.23247 55.4334 5.24674 59.1112 5.24674C62.789 5.24674 65.0521 7.23106 65.0521 10.6334V19.7062H61.7984V18.0043C60.8078 19.4223 59.2521 19.9886 57.5555 19.9886V19.99ZM58.2629 17.438C59.9609 17.438 61.6575 16.3039 61.6575 14.3195V13.0442L58.9703 13.4693C57.2723 13.725 55.9999 14.1783 55.9999 15.5963C55.9999 16.8716 57.1314 17.4394 58.2629 17.4394V17.438ZM74.3988 19.99C72.023 19.99 70.4941 18.8559 70.0136 18.0057V19.7076H66.7599V0.425042H70.1545V7.22965C70.5786 6.37942 72.0216 5.24532 74.3973 5.24532C78.3584 5.24532 80.9033 8.36375 80.9033 12.6177C80.9033 17.1541 78.357 19.99 74.3973 19.99H74.3988ZM73.8323 17.1541C76.2363 17.1541 77.5101 15.4522 77.5101 12.6177C77.5101 10.3495 76.2377 8.10953 73.8323 8.10953C71.286 8.10953 70.1545 10.3495 70.1545 12.6177C70.1545 14.8859 71.286 17.1541 73.8323 17.1541ZM84.0188 3.96999C82.8873 3.96999 82.039 3.11977 82.039 1.98567C82.039 0.851565 82.8873 0.00134277 84.0188 0.00134277C85.1503 0.00134277 85.9986 0.851565 85.9986 1.98567C85.9986 3.11977 85.1503 3.96999 84.0188 3.96999ZM85.7168 19.7062H82.3222V5.5292H85.7168V19.7062Z" fill="currentColor"/>
        <path d="M7.88825 9.20836C7.88825 7.0249 6.12263 5.25525 3.94413 5.25525C1.76563 5.25525 0 7.0249 0 9.20836C0 11.3918 1.76563 13.1615 3.94413 13.1615C6.12263 13.1615 7.88825 11.3918 7.88825 9.20836Z" fill="currentColor"/>
        <path d="M15.7624 9.21691C15.7624 7.03344 13.9968 5.26379 11.8183 5.26379C9.63977 5.26379 7.87415 7.03344 7.87415 9.21691C7.87415 11.4004 9.63977 13.17 11.8183 13.17C13.9968 13.17 15.7624 11.4004 15.7624 9.21691Z" fill="currentColor"/>
        <path d="M23.6451 9.20836C23.6451 7.0249 21.8795 5.25525 19.701 5.25525C17.5225 5.25525 15.7568 7.0249 15.7568 9.20836C15.7568 11.3918 17.5225 13.1615 19.701 13.1615C21.8795 13.1615 23.6451 11.3918 23.6451 9.20836Z" fill="currentColor"/>
        <path d="M19.6995 16.0469C19.6995 13.8634 17.9338 12.0938 15.7553 12.0938C13.5768 12.0938 11.8112 13.8634 11.8112 16.0469C11.8112 18.2303 13.5768 20 15.7553 20C17.9338 20 19.6995 18.2303 19.6995 16.0469Z" fill="currentColor"/>
        <path d="M11.8254 16.0342C11.8254 13.8507 10.0598 12.0811 7.88126 12.0811C5.70276 12.0811 3.93713 13.8507 3.93713 16.0342C3.93713 18.2176 5.70276 19.9873 7.88126 19.9873C10.0598 19.9873 11.8254 18.2176 11.8254 16.0342Z" fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="wabi-clip">
          <rect width="86" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

/* ——— Constants ——— */

const DEVICE_WIDTHS = { desktop: 600, tablet: 480, mobile: 375 }

const COMPONENT_META = {
  [COMPONENT_TYPES.HEADER]: { icon: Type, label: 'Header', description: 'Wabi wordmark' },
  [COMPONENT_TYPES.HEADING]: { icon: Heading, label: 'Heading', description: 'H1, H2, or H3 title' },
  [COMPONENT_TYPES.PARAGRAPH]: { icon: AlignLeft, label: 'Paragraph', description: 'Body text block' },
  [COMPONENT_TYPES.CTA]: { icon: MousePointerClick, label: 'CTA', description: 'Action buttons' },
  [COMPONENT_TYPES.DIVIDER]: { icon: Minus, label: 'Divider', description: 'Horizontal rule' },
  [COMPONENT_TYPES.IMAGE]: { icon: ImageIcon, label: 'Image', description: 'Upload or paste URL' },
  [COMPONENT_TYPES.VIDEO]: { icon: Video, label: 'Video', description: 'Thumbnail with play button' },
  [COMPONENT_TYPES.FOOTER]: { icon: PanelBottom, label: 'Footer', description: 'Unsubscribe + legal' },
}

const PALETTE_ORDER = [
  COMPONENT_TYPES.HEADER,
  COMPONENT_TYPES.HEADING,
  COMPONENT_TYPES.PARAGRAPH,
  COMPONENT_TYPES.CTA,
  COMPONENT_TYPES.DIVIDER,
  COMPONENT_TYPES.IMAGE,
  COMPONENT_TYPES.VIDEO,
  COMPONENT_TYPES.FOOTER,
]

let idCounter = 0
function generateId() {
  return `block-${Date.now()}-${++idCounter}`
}

function createBlock(type, overrides = {}) {
  return {
    id: generateId(),
    type,
    content: { ...defaultContent[type], ...overrides },
  }
}

/* ——— EditableText ——— */

function EditableText({ value, onChange, className, style }) {
  const handleBlur = useCallback(
    (e) => {
      const newVal = e.target.innerText
      if (newVal !== value) onChange(newVal)
    },
    [value, onChange]
  )

  return (
    <div
      contentEditable
      suppressContentEditableWarning
      onBlur={handleBlur}
      className={className}
      style={style}
    >
      {value}
    </div>
  )
}

/* ——— PaletteItem ——— */

function PaletteItem({ type }) {
  const meta = COMPONENT_META[type]
  const Icon = meta.icon
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `palette-${type}`,
    data: { source: 'palette', type },
  })

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={`palette-card${isDragging ? ' is-dragging' : ''}`}
    >
      <div className="palette-card-icon">
        <Icon size={16} />
      </div>
      <div>
        <div className="palette-card-label">{meta.label}</div>
        <div className="palette-card-desc">{meta.description}</div>
      </div>
    </div>
  )
}

/* ——— Block Preview Components ——— */

function HeaderPreview() {
  return (
    <div className="email-header">
      <WabiLogo height={16} style={{ color: '#737373' }} />
    </div>
  )
}

function HeadingPreview({ block, onUpdate, isSelected }) {
  const { h1, h2, style, subhead } = block.content

  return (
    <div className="email-heading">
      {isSelected && (
        <div className="block-toolbar">
          {['h1', 'h2', 'h3'].map((s) => (
            <button
              key={s}
              className={style === s ? 'active' : ''}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onUpdate({ style: s })}
            >
              {s.toUpperCase()}
            </button>
          ))}
          <div className="separator" />
          <button
            className={subhead ? 'active' : ''}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onUpdate({ subhead: !subhead })}
          >
            Subhead
          </button>
        </div>
      )}
      {subhead ? (
        <>
          <EditableText
            value={h1}
            onChange={(val) => onUpdate({ h1: val })}
            className="email-heading-subhead"
          />
          {h2 !== undefined && (
            <EditableText
              value={h2 || 'Heading text'}
              onChange={(val) => onUpdate({ h2: val })}
              className="email-heading-h1"
            />
          )}
        </>
      ) : (
        <>
          <EditableText
            value={h1}
            onChange={(val) => onUpdate({ h1: val })}
            className={`email-heading-${style}`}
          />
          {h2 && (
            <EditableText
              value={h2}
              onChange={(val) => onUpdate({ h2: val })}
              className="email-heading-h2"
            />
          )}
        </>
      )}
    </div>
  )
}

function ParagraphPreview({ block, onUpdate }) {
  return (
    <EditableText
      value={block.content.text}
      onChange={(val) => onUpdate({ text: val })}
      className="email-paragraph"
    />
  )
}

function CtaPreview({ block, onUpdate, isSelected }) {
  const { layout, primaryLabel, secondaryLabel, primaryLink, secondaryLink } = block.content

  return (
    <div className="email-cta">
      {isSelected && (
        <div className="block-toolbar">
          {['single', 'double'].map((l) => (
            <button
              key={l}
              className={layout === l ? 'active' : ''}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onUpdate({ layout: l })}
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </button>
          ))}
        </div>
      )}
      <EditableText
        value={primaryLabel}
        onChange={(val) => onUpdate({ primaryLabel: val })}
        className="email-cta-btn primary"
      />
      {layout === 'double' && (
        <EditableText
          value={secondaryLabel}
          onChange={(val) => onUpdate({ secondaryLabel: val })}
          className="email-cta-btn secondary"
        />
      )}
      {isSelected && (
        <div className="cta-link-inputs">
          <div className="cta-link-row">
            <span className="cta-link-label">Primary</span>
            <input
              value={primaryLink || ''}
              onChange={(e) => onUpdate({ primaryLink: e.target.value })}
              placeholder="https://…"
              className="cta-link-input"
            />
          </div>
          {layout === 'double' && (
            <div className="cta-link-row">
              <span className="cta-link-label">Secondary</span>
              <input
                value={secondaryLink || ''}
                onChange={(e) => onUpdate({ secondaryLink: e.target.value })}
                placeholder="https://…"
                className="cta-link-input"
              />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function DividerPreview() {
  return <hr className="email-divider" />
}

const IMAGE_HEIGHTS = { small: 200, medium: 300, large: 400 }

function ImagePreview({ block, onUpdate, isSelected }) {
  const [showUrlInput, setShowUrlInput] = useState(false)
  const [showLinkInput, setShowLinkInput] = useState(false)
  const [urlValue, setUrlValue] = useState('')
  const [linkValue, setLinkValue] = useState(block.content.link || '')
  const fileInputRef = useRef(null)
  const { src, size, link } = block.content

  const handleSubmitUrl = () => {
    if (urlValue.trim()) {
      onUpdate({ src: urlValue.trim() })
      setShowUrlInput(false)
      setUrlValue('')
    }
  }

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      onUpdate({ src: reader.result })
    }
    reader.readAsDataURL(file)
  }

  const handleSubmitLink = () => {
    onUpdate({ link: linkValue.trim() })
    setShowLinkInput(false)
  }

  if (!src && !showUrlInput) {
    return (
      <div className="image-placeholder">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
        />
        <ImageIcon size={24} />
        <span>Upload or paste URL</span>
        <div className="image-placeholder-actions">
          <button onClick={() => fileInputRef.current?.click()}>Upload</button>
          <button onClick={() => setShowUrlInput(true)}>Paste URL</button>
        </div>
      </div>
    )
  }

  if (showUrlInput) {
    return (
      <div className="image-url-form">
        <input
          value={urlValue}
          onChange={(e) => setUrlValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmitUrl()}
          placeholder="Paste image URL…"
          autoFocus
        />
        <button onClick={handleSubmitUrl}>Add</button>
      </div>
    )
  }

  const height = IMAGE_HEIGHTS[size] || IMAGE_HEIGHTS.medium

  return (
    <div className="email-image">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
      />
      {isSelected && (
        <div className="block-toolbar">
          {['small', 'medium', 'large'].map((s) => (
            <button
              key={s}
              className={size === s ? 'active' : ''}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => onUpdate({ size: s })}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
          <div className="separator" />
          <button
            className={link ? 'active' : ''}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              setLinkValue(link || '')
              setShowLinkInput(!showLinkInput)
            }}
          >
            Link
          </button>
          <div className="separator" />
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => fileInputRef.current?.click()}
          >
            Replace
          </button>
          <button
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => onUpdate({ src: '', link: '' })}
          >
            Remove
          </button>
        </div>
      )}
      {isSelected && showLinkInput && (
        <div className="image-link-form">
          <input
            value={linkValue}
            onChange={(e) => setLinkValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmitLink()}
            placeholder="https://…"
            autoFocus
          />
          <button onClick={handleSubmitLink}>{link ? 'Update' : 'Add'}</button>
          {link && (
            <button onClick={() => { onUpdate({ link: '' }); setShowLinkInput(false); setLinkValue('') }}>
              Remove
            </button>
          )}
        </div>
      )}
      <img src={src} alt={block.content.alt || ''} style={{ height }} />
      {link && <div className="image-link-badge">Linked</div>}
      {src.startsWith('data:') && <div className="image-hosted-note">Use a hosted image URL for email delivery</div>}
    </div>
  )
}

function VideoPreview({ block, onUpdate, isSelected }) {
  const [showUrlInput, setShowUrlInput] = useState(false)
  const [urlValue, setUrlValue] = useState('')
  const fileInputRef = useRef(null)
  const { thumbnailSrc, videoUrl, size } = block.content

  const handleSubmitUrl = () => {
    if (urlValue.trim()) {
      onUpdate({ thumbnailSrc: urlValue.trim() })
      setShowUrlInput(false)
      setUrlValue('')
    }
  }

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => onUpdate({ thumbnailSrc: reader.result })
    reader.readAsDataURL(file)
  }

  if (!thumbnailSrc && !showUrlInput) {
    return (
      <div className="image-placeholder">
        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} style={{ display: 'none' }} />
        <Video size={24} />
        <span>Upload video thumbnail</span>
        <div className="image-placeholder-actions">
          <button onClick={() => fileInputRef.current?.click()}>Upload</button>
          <button onClick={() => setShowUrlInput(true)}>Paste URL</button>
        </div>
      </div>
    )
  }

  if (showUrlInput) {
    return (
      <div className="image-url-form">
        <input value={urlValue} onChange={(e) => setUrlValue(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSubmitUrl()} placeholder="Paste thumbnail URL…" autoFocus />
        <button onClick={handleSubmitUrl}>Add</button>
      </div>
    )
  }

  const height = IMAGE_HEIGHTS[size] || IMAGE_HEIGHTS.medium

  return (
    <div className="email-image">
      <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} style={{ display: 'none' }} />
      {isSelected && (
        <div className="block-toolbar">
          {['small', 'medium', 'large'].map((s) => (
            <button key={s} className={size === s ? 'active' : ''} onMouseDown={(e) => e.preventDefault()} onClick={() => onUpdate({ size: s })}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
          <div className="separator" />
          <button onMouseDown={(e) => e.preventDefault()} onClick={() => fileInputRef.current?.click()}>Replace</button>
          <button onMouseDown={(e) => e.preventDefault()} onClick={() => onUpdate({ thumbnailSrc: '', videoUrl: '' })}>Remove</button>
        </div>
      )}
      <div style={{ position: 'relative' }}>
        <img src={thumbnailSrc} alt={block.content.alt || ''} style={{ height }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><polygon points="9,6 19,12 9,18" /></svg>
          </div>
        </div>
      </div>
      {isSelected && (
        <div className="cta-link-inputs" style={{ marginTop: 8 }}>
          <div className="cta-link-row">
            <span className="cta-link-label">Video URL</span>
            <input value={videoUrl || ''} onChange={(e) => onUpdate({ videoUrl: e.target.value })} placeholder="https://youtube.com/…" className="cta-link-input" />
          </div>
        </div>
      )}
      {thumbnailSrc.startsWith('data:') && <div className="image-hosted-note">Use a hosted image URL for email delivery</div>}
    </div>
  )
}

function FooterPreview({ block, onUpdate }) {
  return (
    <div className="email-footer">
      <div className="email-footer-inner">
        <EditableText
          value={block.content.unsubscribeText}
          onChange={(val) => onUpdate({ unsubscribeText: val })}
          className="email-footer-unsub-text"
        />
        <p className="email-footer-copyright">© 2025 Wabi Inc. All rights reserved.</p>
        <div className="email-footer-links">
          <a href="https://apps.apple.com/us/app/wabi/id6747768928" className="email-footer-link" target="_blank" rel="noopener noreferrer">Download on the App Store</a>
          <span className="email-footer-link-sep">·</span>
          <a href="https://wabi.ai" className="email-footer-link" target="_blank" rel="noopener noreferrer">wabi.ai</a>
          <span className="email-footer-link-sep">·</span>
          <span className="email-footer-link">Unsubscribe</span>
        </div>
        <div className="email-footer-social">
          <a href="https://x.com/wabi" className="email-footer-social-icon" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 14 14" fill="none"><path d="M10.6904 1.1106H12.6582L8.35904 6.0243L13.4167 12.7107H9.4566L6.35489 8.65545L2.80584 12.7107H0.836793L5.43521 7.45498L0.583374 1.1106H4.64402L7.44769 4.81729L10.6904 1.1106ZM9.99972 11.5329H11.0901L4.05152 2.22659H2.88139L9.99972 11.5329Z" fill="currentColor"/></svg>
          </a>
          <a href="https://discord.gg/wabi" className="email-footer-social-icon" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 14 14" fill="none"><path d="M11.8516 2.42413C10.9593 2.01469 10.0024 1.71304 9.00194 1.54028C8.98372 1.53694 8.96552 1.54527 8.95613 1.56194C8.83307 1.78082 8.69676 2.06636 8.6013 2.29079C7.52524 2.12969 6.45469 2.12969 5.40069 2.29079C5.30521 2.06137 5.16395 1.78082 5.04033 1.56194C5.03095 1.54583 5.01275 1.5375 4.99453 1.54028C3.99461 1.71249 3.03774 2.01414 2.14488 2.42413C2.13715 2.42746 2.13052 2.43302 2.12613 2.44023C0.311145 5.15178-0.186054 7.79667 0.0578551 10.4088C0.0589587 10.4216 0.0661324 10.4338 0.0760655 10.4416C1.27354 11.3209 2.4335 11.8548 3.57191 12.2087C3.59013 12.2142 3.60944 12.2076 3.62103 12.1926C3.89032 11.8248 4.13037 11.4371 4.33619 11.0293C4.34834 11.0054 4.33675 10.9771 4.31192 10.9676C3.93116 10.8232 3.5686 10.6471 3.21984 10.4471C3.19226 10.431 3.19005 10.3915 3.21543 10.3727C3.28882 10.3177 3.36223 10.2604 3.43231 10.2027C3.44499 10.1921 3.46265 10.1899 3.47756 10.1966C5.76875 11.2426 8.24923 11.2426 10.5134 10.1966C10.5283 10.1893 10.546 10.1916 10.5592 10.2021C10.6293 10.2599 10.7027 10.3177 10.7766 10.3727C10.802 10.3915 10.8003 10.431 10.7728 10.4471C10.424 10.651 10.0614 10.8232 9.68013 10.9671C9.65531 10.9765 9.64426 11.0054 9.65641 11.0293C9.86665 11.4365 10.1067 11.8243 10.371 12.192C10.3821 12.2076 10.4019 12.2142 10.4201 12.2087C11.5641 11.8548 12.724 11.3209 13.9215 10.4416C13.932 10.4338 13.9386 10.4221 13.9397 10.4093C14.2316 7.38945 13.4508 4.76625 11.8698 2.44079C11.8659 2.43302 11.8593 2.42746 11.8516 2.42413ZM4.67835 8.81828C3.98854 8.81828 3.42016 8.18499 3.42016 7.40724C3.42016 6.62949 3.97752 5.9962 4.67835 5.9962C5.38468 5.9962 5.94755 6.63505 5.93651 7.40724C5.93651 8.18499 5.37915 8.81828 4.67835 8.81828ZM9.33027 8.81828C8.64048 8.81828 8.0721 8.18499 8.0721 7.40724C8.0721 6.62949 8.62944 5.9962 9.33027 5.9962C10.0366 5.9962 10.5995 6.63505 10.5885 7.40724C10.5885 8.18499 10.0366 8.81828 9.33027 8.81828Z" fill="currentColor"/></svg>
          </a>
          <a href="https://www.instagram.com/joinwabi" className="email-footer-social-icon" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 14 14" fill="none"><path d="M7 1.26055C8.87031 1.26055 9.0918 1.26875 9.82734 1.30156C10.5109 1.33164 10.8801 1.44648 11.1262 1.54219C11.4516 1.66797 11.6867 1.82109 11.9301 2.06445C12.1762 2.31055 12.3266 2.54297 12.4523 2.86836C12.548 3.11445 12.6629 3.48633 12.693 4.16719C12.7258 4.90547 12.734 5.12695 12.734 6.99453C12.734 8.86484 12.7258 9.08633 12.693 9.82188C12.6629 10.5055 12.548 10.8746 12.4523 11.1207C12.3266 11.4461 12.1734 11.6813 11.9301 11.9246C11.684 12.1707 11.4516 12.3211 11.1262 12.4469C10.8801 12.5426 10.5082 12.6574 9.82734 12.6875C9.08906 12.7203 8.86758 12.7285 7 12.7285C5.12969 12.7285 4.9082 12.7203 4.17266 12.6875C3.48906 12.6574 3.11992 12.5426 2.87383 12.4469C2.54844 12.3211 2.31328 12.168 2.06992 11.9246C1.82383 11.6785 1.67344 11.4461 1.54766 11.1207C1.45195 10.8746 1.33711 10.5027 1.30703 9.82188C1.27422 9.0836 1.26602 8.86211 1.26602 6.99453C1.26602 5.12422 1.27422 4.90273 1.30703 4.16719C1.33711 3.48359 1.45195 3.11445 1.54766 2.86836C1.67344 2.54297 1.82656 2.30781 2.06992 2.06445C2.31602 1.81836 2.54844 1.66797 2.87383 1.54219C3.11992 1.44648 3.4918 1.33164 4.17266 1.30156C4.9082 1.26875 5.12969 1.26055 7 1.26055ZM7 0C5.09961 0 4.86172 0.00820312 4.11523 0.0410156C3.37148 0.0738281 2.86016 0.194141 2.41719 0.366406C1.95508 0.546875 1.56406 0.784766 1.17578 1.17578C0.784766 1.56406 0.546875 1.95508 0.366406 2.41445C0.194141 2.86016 0.0738281 3.36875 0.0410156 4.1125C0.00820313 4.86172 0 5.09961 0 7C0 8.90039 0.00820313 9.13828 0.0410156 9.88477C0.0738281 10.6285 0.194141 11.1398 0.366406 11.5828C0.546875 12.0449 0.784766 12.4359 1.17578 12.8242C1.56406 13.2125 1.95508 13.4531 2.41445 13.6309C2.86016 13.8031 3.36875 13.9234 4.1125 13.9563C4.85898 13.9891 5.09688 13.9973 6.99727 13.9973C8.89766 13.9973 9.13555 13.9891 9.88203 13.9563C10.6258 13.9234 11.1371 13.8031 11.5801 13.6309C12.0395 13.4531 12.4305 13.2125 12.8188 12.8242C13.207 12.4359 13.4477 12.0449 13.6254 11.5855C13.7977 11.1398 13.918 10.6313 13.9508 9.8875C13.9836 9.14102 13.9918 8.90313 13.9918 7.00274C13.9918 5.10234 13.9836 4.86445 13.9508 4.11797C13.918 3.37422 13.7977 2.86289 13.6254 2.41992C13.4531 1.95508 13.2152 1.56406 12.8242 1.17578C12.4359 0.7875 12.0449 0.546875 11.5855 0.369141C11.1398 0.196875 10.6313 0.0765625 9.8875 0.04375C9.13828 0.00820313 8.90039 0 7 0Z" fill="currentColor"/><path d="M7 3.4043C5.01484 3.4043 3.4043 5.01484 3.4043 7C3.4043 8.98516 5.01484 10.5957 7 10.5957C8.98516 10.5957 10.5957 8.98516 10.5957 7C10.5957 5.01484 8.98516 3.4043 7 3.4043ZM7 9.33242C5.71211 9.33242 4.66758 8.28789 4.66758 7C4.66758 5.71211 5.71211 4.66758 7 4.66758C8.28789 4.66758 9.33242 5.71211 9.33242 7C9.33242 8.28789 8.28789 9.33242 7 9.33242Z" fill="currentColor"/><path d="M11.5773 3.26206C11.5773 3.72691 11.2 4.10152 10.7379 4.10152C10.273 4.10152 9.89844 3.72417 9.89844 3.26206C9.89844 2.79722 10.2758 2.42261 10.7379 2.42261C11.2 2.42261 11.5773 2.79995 11.5773 3.26206Z" fill="currentColor"/></svg>
          </a>
          <a href="https://www.tiktok.com/@gotwabi" className="email-footer-social-icon" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 14 14" fill="none"><path d="M10.0772 5.19572C11.0368 5.88572 12.2054 6.29272 13.4687 6.29272V4.08872C13.2274 4.08872 12.9874 4.06472 12.7527 4.01872V5.77272C11.4894 5.77272 10.3221 5.36572 9.36143 4.67572V9.21472C9.36143 11.4867 7.50743 13.3334 5.22743 13.3334C4.33143 13.3334 3.50343 13.0507 2.82343 12.5694C3.60143 13.3747 4.68543 13.8534 5.88143 13.8534C8.16143 13.8534 10.0167 12.0067 10.0167 9.73472V5.19572H10.0772ZM10.9467 3.17472C10.4654 2.65072 10.1414 1.98072 10.0514 1.24072V0.933724H9.42943C9.58943 1.84572 10.1507 2.62372 10.9467 3.17472ZM4.27543 10.8534C3.99143 10.4827 3.83743 10.0294 3.83743 9.56072C3.83743 8.37672 4.79543 7.42272 5.98543 7.42272C6.20543 7.42272 6.42143 7.45672 6.62943 7.52072V5.27072C6.39343 5.23872 6.15343 5.21872 5.91343 5.21872C5.88143 5.21872 5.85143 5.22072 5.82143 5.22072V6.99872C5.61143 6.93472 5.39743 6.90072 5.17543 6.90072C3.98543 6.90072 3.02743 7.85672 3.02743 9.04072C3.02743 9.86472 3.53943 10.5694 4.27543 10.8534Z" fill="currentColor"/><path d="M9.36209 4.67405C10.3228 5.36405 11.4901 5.77105 12.7534 5.77105V4.01705C12.1168 3.87905 11.5488 3.57305 11.0921 3.15305C10.2961 2.60205 9.73476 1.82405 9.57476 0.912048H7.94876V9.71305C7.94276 10.8904 6.98876 11.8384 5.80876 11.8384C5.07676 11.8384 4.43276 11.4864 4.02676 10.9437C3.29076 10.6597 2.77876 9.95505 2.77876 9.13105C2.77876 7.94705 3.73676 6.99105 4.92676 6.99105C5.15276 6.99105 5.37076 7.02505 5.57676 7.08905V5.31105C3.34276 5.35705 1.54276 7.18305 1.54276 9.42505C1.54276 10.5437 1.99276 11.5597 2.71876 12.3037C3.39876 12.7851 4.22676 13.0677 5.12276 13.0677C7.40276 13.0677 9.25676 11.2211 9.25676 8.94905V4.67405H9.36209Z" fill="currentColor"/></svg>
          </a>
        </div>
        <div className="email-footer-wordmark"><WabiLogo height={16} style={{ color: '#737373' }} /></div>
      </div>
    </div>
  )
}

function BlockPreview({ block, onUpdate, isSelected }) {
  switch (block.type) {
    case COMPONENT_TYPES.HEADER:
      return <HeaderPreview />
    case COMPONENT_TYPES.HEADING:
      return <HeadingPreview block={block} onUpdate={onUpdate} isSelected={isSelected} />
    case COMPONENT_TYPES.PARAGRAPH:
      return <ParagraphPreview block={block} onUpdate={onUpdate} />
    case COMPONENT_TYPES.CTA:
      return <CtaPreview block={block} onUpdate={onUpdate} isSelected={isSelected} />
    case COMPONENT_TYPES.DIVIDER:
      return <DividerPreview />
    case COMPONENT_TYPES.IMAGE:
      return <ImagePreview block={block} onUpdate={onUpdate} isSelected={isSelected} />
    case COMPONENT_TYPES.VIDEO:
      return <VideoPreview block={block} onUpdate={onUpdate} isSelected={isSelected} />
    case COMPONENT_TYPES.FOOTER:
      return <FooterPreview block={block} onUpdate={onUpdate} />
    default:
      return null
  }
}

/* ——— SortableBlock ——— */

function SortableBlock({ block, isSelected, onSelect, onRemove, onUpdate }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: block.id,
    data: { source: 'canvas', type: block.type },
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`canvas-block${isSelected ? ' is-selected' : ''}${isDragging ? ' is-dragging' : ''}`}
      onClick={(e) => {
        e.stopPropagation()
        onSelect()
      }}
    >
      <div className="block-controls">
        <button className="drag-handle" {...attributes} {...listeners}>
          <GripVertical size={12} />
        </button>
        <button onClick={(e) => { e.stopPropagation(); onRemove(block.id) }}>
          <Trash2 size={12} />
        </button>
      </div>
      <BlockPreview
        block={block}
        onUpdate={(updates) => onUpdate(block.id, updates)}
        isSelected={isSelected}
      />
    </div>
  )
}

/* ——— Canvas Drop Zones ——— */

function CanvasDropZone({ id }) {
  const { setNodeRef } = useDroppable({ id })
  return <div ref={setNodeRef} className="canvas-end-zone" />
}

function DropIndicator() {
  return <div className="drop-indicator" />
}

/* ——— Local Storage ——— */

const STORAGE_KEY = 'wabi-email-builder'

function createDefaultBlocks() {
  return [
    createBlock(COMPONENT_TYPES.HEADER),
    createBlock(COMPONENT_TYPES.IMAGE),
    createBlock(COMPONENT_TYPES.HEADING, { h1: 'Heading 1', style: 'h1' }),
    createBlock(COMPONENT_TYPES.PARAGRAPH),
    createBlock(COMPONENT_TYPES.HEADING, { h1: 'Heading 2', style: 'h2' }),
    createBlock(COMPONENT_TYPES.PARAGRAPH),
    createBlock(COMPONENT_TYPES.CTA, { layout: 'double' }),
    createBlock(COMPONENT_TYPES.FOOTER),
  ]
}

function createDesign(name = 'Untitled') {
  return { id: `design-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, name, blocks: createDefaultBlocks(), theme: 'dark', subject: '', preheader: '', fontUrl: '', fontFamily: '' }
}

function loadStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const data = JSON.parse(raw)
      // Migrate from old single-design format
      if (data.blocks && !data.designs) {
        const design = { ...createDesign('Untitled'), blocks: data.blocks, theme: data.theme || 'dark' }
        return { designs: [design], activeId: design.id }
      }
      if (data.designs?.length) return data
    }
  } catch {}
  return null
}

function persistStore(designs, activeId) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ designs, activeId }))
  } catch {}
}

/* ——— Main App ——— */

function getInitialState() {
  const stored = loadStore()
  if (stored?.designs?.length) return stored
  const design = createDesign('Untitled')
  return { designs: [design], activeId: design.id }
}

export default function App() {
  const initial = useRef(getInitialState())
  const [designs, setDesigns] = useState(initial.current.designs)
  const [activeDesignId, setActiveDesignId] = useState(initial.current.activeId)
  const [device, setDevice] = useState('desktop')
  const [selectedId, setSelectedId] = useState(null)
  const [activeId, setActiveId] = useState(null)
  const [overId, setOverId] = useState(null)
  const [dragSource, setDragSource] = useState(null)
  const [copied, setCopied] = useState(false)
  const [showDesignMenu, setShowDesignMenu] = useState(false)
  const [showDownloadMenu, setShowDownloadMenu] = useState(false)
  const [showSendModal, setShowSendModal] = useState(false)
  const [sendEmail, setSendEmail] = useState('')
  const [sendStatus, setSendStatus] = useState(null)
  const [sendError, setSendError] = useState('')

  const activeDesign = designs.find((d) => d.id === activeDesignId) || designs[0]
  const blocks = activeDesign?.blocks || []
  const theme = activeDesign?.theme || 'dark'
  const subject = activeDesign?.subject || ''
  const preheader = activeDesign?.preheader || ''
  const fontUrl = activeDesign?.fontUrl || ''
  const fontFamily = activeDesign?.fontFamily || ''

  const setBlocks = useCallback((updater) => {
    setDesigns((prev) => prev.map((d) =>
      d.id === activeDesignId
        ? { ...d, blocks: typeof updater === 'function' ? updater(d.blocks) : updater }
        : d
    ))
  }, [activeDesignId])

  const setTheme = useCallback((t) => {
    setDesigns((prev) => prev.map((d) =>
      d.id === activeDesignId ? { ...d, theme: t } : d
    ))
  }, [activeDesignId])

  const setDesignField = useCallback((field, value) => {
    setDesigns((prev) => prev.map((d) =>
      d.id === activeDesignId ? { ...d, [field]: value } : d
    ))
  }, [activeDesignId])

  /* ——— Undo/Redo ——— */

  const [history, setHistory] = useState([blocks])
  const [historyIndex, setHistoryIndex] = useState(0)
  const historyRef = useRef({ isUndoRedo: false })
  const debounceTimer = useRef(null)

  useEffect(() => {
    if (historyRef.current.isUndoRedo) {
      historyRef.current.isUndoRedo = false
      return
    }
    clearTimeout(debounceTimer.current)
    debounceTimer.current = setTimeout(() => {
      setHistory((prev) => {
        const truncated = prev.slice(0, historyIndex + 1)
        if (JSON.stringify(truncated[truncated.length - 1]) === JSON.stringify(blocks)) return prev
        const next = [...truncated, blocks].slice(-50)
        setHistoryIndex(next.length - 1)
        return next
      })
    }, 300)
  }, [blocks])

  const canUndo = historyIndex > 0
  const canRedo = historyIndex < history.length - 1

  const handleUndo = useCallback(() => {
    if (!canUndo) return
    historyRef.current.isUndoRedo = true
    const newIndex = historyIndex - 1
    setHistoryIndex(newIndex)
    setBlocks(history[newIndex])
  }, [historyIndex, history, canUndo, setBlocks])

  const handleRedo = useCallback(() => {
    if (!canRedo) return
    historyRef.current.isUndoRedo = true
    const newIndex = historyIndex + 1
    setHistoryIndex(newIndex)
    setBlocks(history[newIndex])
  }, [historyIndex, history, canRedo, setBlocks])

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault()
        handleUndo()
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'z' && e.shiftKey) {
        e.preventDefault()
        handleRedo()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [handleUndo, handleRedo])

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  )

  useEffect(() => {
    persistStore(designs, activeDesignId)
  }, [designs, activeDesignId])

  const handleNewDesign = useCallback(() => {
    const design = createDesign(`Untitled ${designs.length + 1}`)
    setDesigns((prev) => [...prev, design])
    setActiveDesignId(design.id)
    setSelectedId(null)
    setShowDesignMenu(false)
  }, [designs.length])

  const handleSwitchDesign = useCallback((id) => {
    setActiveDesignId(id)
    setSelectedId(null)
    setShowDesignMenu(false)
    const design = designs.find((d) => d.id === id)
    if (design) {
      setHistory([design.blocks])
      setHistoryIndex(0)
    }
  }, [designs])

  const handleDeleteDesign = useCallback((id) => {
    setDesigns((prev) => {
      const next = prev.filter((d) => d.id !== id)
      if (id === activeDesignId) {
        if (next.length) {
          setActiveDesignId(next[0].id)
        } else {
          const fresh = createDesign('Untitled')
          setActiveDesignId(fresh.id)
          return [fresh]
        }
      }
      return next
    })
    setShowDesignMenu(false)
  }, [activeDesignId])

  const handleRenameDesign = useCallback((id, name) => {
    setDesigns((prev) => prev.map((d) => d.id === id ? { ...d, name } : d))
  }, [])

  /* ——— Block CRUD ——— */

  const handleRemoveBlock = useCallback(
    (blockId) => {
      setBlocks((prev) => prev.filter((b) => b.id !== blockId))
      if (selectedId === blockId) setSelectedId(null)
    },
    [selectedId]
  )

  const handleUpdateBlock = useCallback((blockId, contentUpdates) => {
    setBlocks((prev) =>
      prev.map((b) =>
        b.id === blockId
          ? { ...b, content: { ...b.content, ...contentUpdates } }
          : b
      )
    )
    // Auto-name design from first heading's h1
    if (contentUpdates.h1 !== undefined && contentUpdates.h1.trim()) {
      const firstHeading = blocks.find((b) => b.type === 'heading')
      if (firstHeading && firstHeading.id === blockId) {
        handleRenameDesign(activeDesignId, contentUpdates.h1.trim())
      }
    }
  }, [blocks, activeDesignId, handleRenameDesign])

  /* ——— Drag and Drop ——— */

  const handleDragStart = useCallback(({ active }) => {
    setActiveId(active.id)
    setDragSource(active.data.current?.source || 'canvas')
  }, [])

  const handleDragOver = useCallback(({ over }) => {
    setOverId(over?.id ?? null)
  }, [])

  const handleDragEnd = useCallback(
    ({ active, over }) => {
      const source = active.data.current?.source

      if (source === 'palette' && over) {
        const type = active.data.current.type
        const newBlock = createBlock(type)

        if (over.id === 'canvas-end') {
          setBlocks((prev) => [...prev, newBlock])
        } else {
          const overIndex = blocks.findIndex((b) => b.id === over.id)
          if (overIndex >= 0) {
            setBlocks((prev) => {
              const copy = [...prev]
              copy.splice(overIndex, 0, newBlock)
              return copy
            })
          } else {
            setBlocks((prev) => [...prev, newBlock])
          }
        }
        setSelectedId(newBlock.id)
      } else if (source === 'canvas' && over) {
        const oldIndex = blocks.findIndex((b) => b.id === active.id)
        const newIndex = blocks.findIndex((b) => b.id === over.id)
        if (oldIndex !== -1 && newIndex !== -1 && oldIndex !== newIndex) {
          setBlocks((prev) => arrayMove(prev, oldIndex, newIndex))
        }
      }

      setActiveId(null)
      setOverId(null)
      setDragSource(null)
    },
    [blocks]
  )

  const handleDragCancel = useCallback(() => {
    setActiveId(null)
    setOverId(null)
    setDragSource(null)
  }, [])

  /* ——— Export ——— */

  const prodUrl = 'https://wabi-email-builder.vercel.app'
  const baseUrl = window.location.hostname === 'localhost' ? prodUrl : window.location.origin
  const exportOptions = { subject, preheader, fontUrl, fontFamily, baseUrl }

  const handleExport = useCallback(async () => {
    const html = renderEmailHTML(blocks, exportOptions)
    try {
      await navigator.clipboard.writeText(html)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = html
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [blocks, subject, preheader, fontUrl, fontFamily])

  const handleDownload = useCallback(() => {
    downloadEmailHTML(blocks, exportOptions)
    setShowDownloadMenu(false)
  }, [blocks, subject, preheader, fontUrl, fontFamily])

  const handleDownloadCustomerIo = useCallback(() => {
    downloadCustomerIoHTML(blocks, exportOptions)
    setShowDownloadMenu(false)
  }, [blocks, subject, preheader, fontUrl, fontFamily])

  const handleSendTest = useCallback(async () => {
    if (!sendEmail.trim()) return
    setSendStatus('sending')
    setSendError('')
    const html = renderEmailHTML(blocks, exportOptions)
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: sendEmail.trim(),
          subject: subject || `Test: ${activeDesign?.name || 'Wabi Email'}`,
          html,
        }),
      })
      const text = await res.text()
      let data
      try { data = JSON.parse(text) } catch { throw new Error(res.status === 404 ? 'API route not found. Deploy to Vercel first and add RESEND_API_KEY env var.' : `Server error (${res.status})`) }
      if (!res.ok) throw new Error(data.error || 'Failed to send')
      setSendStatus('sent')
      setTimeout(() => { setSendStatus(null); setShowSendModal(false) }, 2000)
    } catch (err) {
      setSendStatus('error')
      setSendError(err.message)
    }
  }, [sendEmail, blocks, subject, preheader, fontUrl, fontFamily, activeDesign])

  /* ——— Drag Overlay Content ——— */

  const activeBlock = blocks.find((b) => b.id === activeId)
  const activePaletteType = dragSource === 'palette' ? activeId?.replace('palette-', '') : null

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className="flex flex-col h-full w-full">
        {/* ——— Topbar ——— */}
        <div
          className="flex items-center justify-between px-4 shrink-0"
          style={{ height: 52, borderBottom: '1px solid var(--border)', background: 'var(--surface)' }}
        >
          {/* Left */}
          <div className="flex items-center gap-3">
            <WabiLogo height={14} style={{ color: 'var(--accent)' }} />
            <div style={{ width: 1, height: 20, background: 'var(--border-strong)' }} />
            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
              Email Builder
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">
            {/* Device Switcher */}
            <div
              className="flex items-center gap-0.5 p-0.5 rounded-[8px]"
              style={{ background: 'var(--surface-2)' }}
            >
              {[
                { key: 'desktop', icon: Monitor, label: 'Desktop' },
                { key: 'tablet', icon: Tablet, label: 'Tablet' },
                { key: 'mobile', icon: Smartphone, label: 'Mobile' },
              ].map(({ key, icon: DeviceIcon, label }) => (
                <button
                  key={key}
                  onClick={() => setDevice(key)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${device !== key ? 'topbar-btn-ghost' : 'topbar-btn'}`}
                  style={{
                    background: device === key ? 'var(--accent)' : 'transparent',
                    color: device === key ? '#000' : 'var(--text-secondary)',
                    border: 'none',
                  }}
                >
                  <DeviceIcon size={14} />
                  {label}
                </button>
              ))}
            </div>

            {/* Undo/Redo */}
            <div className="flex items-center gap-0.5 p-0.5 rounded-[8px]" style={{ background: 'var(--surface-2)' }}>
              <button
                onClick={handleUndo}
                disabled={!canUndo}
                className="topbar-btn-ghost flex items-center justify-center w-7 h-7 rounded-md transition-all cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed"
                style={{ background: 'transparent', color: 'var(--text-secondary)', border: 'none' }}
                title="Undo (Cmd+Z)"
              >
                <Undo2 size={14} />
              </button>
              <button
                onClick={handleRedo}
                disabled={!canRedo}
                className="topbar-btn-ghost flex items-center justify-center w-7 h-7 rounded-md transition-all cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed"
                style={{ background: 'transparent', color: 'var(--text-secondary)', border: 'none' }}
                title="Redo (Cmd+Shift+Z)"
              >
                <Redo2 size={14} />
              </button>
            </div>

            {/* Theme Toggle */}
            <div
              className="flex items-center gap-0.5 p-0.5 rounded-[8px]"
              style={{ background: 'var(--surface-2)' }}
            >
              <button
                onClick={() => setTheme('light')}
                className={`flex items-center justify-center w-7 h-7 rounded-md transition-all cursor-pointer ${theme !== 'light' ? 'topbar-btn-ghost' : 'topbar-btn'}`}
                style={{
                  background: theme === 'light' ? 'var(--accent)' : 'transparent',
                  color: theme === 'light' ? '#000' : 'var(--text-secondary)',
                  border: 'none',
                }}
              >
                <Sun size={14} />
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`flex items-center justify-center w-7 h-7 rounded-md transition-all cursor-pointer ${theme !== 'dark' ? 'topbar-btn-ghost' : 'topbar-btn'}`}
                style={{
                  background: theme === 'dark' ? 'var(--accent)' : 'transparent',
                  color: theme === 'dark' ? '#000' : 'var(--text-secondary)',
                  border: 'none',
                }}
              >
                <Moon size={14} />
              </button>
            </div>

            {/* Send Test */}
            <button
              onClick={() => setShowSendModal(true)}
              disabled={blocks.length === 0}
              className="topbar-btn-outline flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: 'var(--surface-2)', color: 'var(--text-primary)', border: '1px solid var(--border-strong)' }}
            >
              <Send size={14} />
              Send Test
            </button>

            {/* Download with dropdown */}
            <div style={{ position: 'relative' }}>
              <div className="flex">
                <button
                  onClick={handleDownload}
                  disabled={blocks.length === 0}
                  className="topbar-btn-outline flex items-center gap-1.5 pl-3 pr-2 py-1.5 text-xs font-medium transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: 'var(--surface-2)', color: 'var(--text-primary)', border: '1px solid var(--border-strong)', borderRadius: '6px 0 0 6px', borderRight: 'none' }}
                >
                  <Download size={14} />
                  Download
                </button>
                <button
                  onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                  disabled={blocks.length === 0}
                  className="topbar-btn-outline flex items-center px-1.5 py-1.5 text-xs transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: 'var(--surface-2)', color: 'var(--text-primary)', border: '1px solid var(--border-strong)', borderRadius: '0 6px 6px 0' }}
                >
                  <ChevronDown size={10} />
                </button>
              </div>
              {showDownloadMenu && (
                <>
                  <div style={{ position: 'fixed', inset: 0, zIndex: 49 }} onClick={() => setShowDownloadMenu(false)} />
                  <div className="download-menu">
                    <button onClick={handleExport}>
                      {copied ? 'Copied!' : 'Export HTML'}
                    </button>
                    <button onClick={handleDownload}>Download HTML</button>
                    <button onClick={handleDownloadCustomerIo}>Export for Customer.io</button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* ——— Body ——— */}
        <div className="flex flex-1 overflow-hidden">
          {/* ——— Left Sidebar ——— */}
          <div
            className="shrink-0 flex flex-col overflow-y-auto"
            style={{
              width: 220,
              borderRight: '1px solid var(--border)',
              background: 'var(--surface)',
              padding: '16px 12px',
            }}
          >
            <p
              className="text-[10px] font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--text-tertiary)' }}
            >
              Components
            </p>
            <div className="flex flex-col gap-1.5">
              {PALETTE_ORDER.map((type) => (
                <PaletteItem key={type} type={type} />
              ))}
            </div>
            {/* ——— Font Settings ——— */}
            <p className="text-[10px] font-semibold uppercase tracking-widest mb-2 mt-4" style={{ color: 'var(--text-tertiary)' }}>Font</p>
            <div className="flex flex-col gap-1.5 mb-4">
              <input
                value={fontFamily}
                onChange={(e) => setDesignField('fontFamily', e.target.value)}
                placeholder="Font family name"
                className="sidebar-input"
              />
              <input
                value={fontUrl}
                onChange={(e) => setDesignField('fontUrl', e.target.value)}
                placeholder="Google Fonts URL"
                className="sidebar-input"
              />
            </div>
            {/* ——— Design Switcher ——— */}
            <div className="design-switcher">
              <button
                className="design-switcher-btn"
                onClick={() => setShowDesignMenu(!showDesignMenu)}
              >
                <div className="design-switcher-info">
                  <span className="design-switcher-name">{activeDesign?.name || 'Untitled'}</span>
                  <span className="design-switcher-count">{blocks.length} blocks</span>
                </div>
                <ChevronUp size={12} style={{ opacity: 0.5 }} />
              </button>
              {showDesignMenu && (
                <>
                  <div className="design-menu-backdrop" onClick={() => setShowDesignMenu(false)} />
                  <div className="design-menu">
                    {designs.map((d) => (
                      <div
                        key={d.id}
                        className={`design-menu-item${d.id === activeDesignId ? ' active' : ''}`}
                        onClick={() => handleSwitchDesign(d.id)}
                      >
                        <div className="design-menu-item-info">
                          <span className="design-menu-item-name">{d.name}</span>
                          <span className="design-menu-item-count">{d.blocks.length} blocks</span>
                        </div>
                        {designs.length > 1 && (
                          <button
                            className="design-menu-item-delete"
                            onClick={(e) => { e.stopPropagation(); handleDeleteDesign(d.id) }}
                          >
                            <Trash2 size={11} />
                          </button>
                        )}
                      </div>
                    ))}
                    <button className="design-menu-new" onClick={handleNewDesign}>
                      <Plus size={12} />
                      New design
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ——— Canvas Column ——— */}
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* Subject & Preheader */}
            <div className="subject-preheader-bar">
              <input
                value={subject}
                onChange={(e) => setDesignField('subject', e.target.value)}
                placeholder="Subject line…"
                className="subject-input"
              />
              <input
                value={preheader}
                onChange={(e) => setDesignField('preheader', e.target.value)}
                placeholder="Preheader text…"
                className="preheader-input"
              />
            </div>
          {/* ——— Canvas ——— */}
          <div
            className="canvas-area"
            onClick={() => setSelectedId(null)}
          >
            <div
              className="email-frame"
              data-theme={theme}
              style={{ width: DEVICE_WIDTHS[device] }}
            >
              {blocks.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-state-icon"><WabiLogo height={24} style={{ color: 'var(--text-tertiary)' }} /></div>
                  <h3>Start building</h3>
                  <p>Drag a component from the left panel</p>
                </div>
              ) : (
                <SortableContext
                  items={blocks.map((b) => b.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {blocks.map((block) => (
                    <Fragment key={block.id}>
                      {dragSource === 'palette' && overId === block.id && (
                        <DropIndicator />
                      )}
                      <SortableBlock
                        block={block}
                        isSelected={selectedId === block.id}
                        onSelect={() => setSelectedId(block.id)}
                        onRemove={handleRemoveBlock}
                        onUpdate={handleUpdateBlock}
                      />
                    </Fragment>
                  ))}
                  {dragSource === 'palette' && overId === 'canvas-end' && (
                    <DropIndicator />
                  )}
                </SortableContext>
              )}
              <CanvasDropZone id="canvas-end" />
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* ——— Send Test Modal ——— */}
      {showSendModal && (
        <div className="gallery-overlay" onClick={() => { setShowSendModal(false); setSendStatus(null); setSendError('') }}>
          <div className="send-test-modal" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontSize: 15, fontWeight: 500, margin: '0 0 16px', color: 'var(--text-primary)' }}>Send Test Email</h3>
            <input
              value={sendEmail}
              onChange={(e) => setSendEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendTest()}
              placeholder="recipient@email.com"
              className="send-test-input"
              autoFocus
            />
            {sendStatus === 'error' && <p style={{ color: '#ef4444', fontSize: 12, margin: '8px 0 0' }}>{sendError}</p>}
            <button
              onClick={handleSendTest}
              disabled={sendStatus === 'sending' || !sendEmail.trim()}
              className="send-test-btn"
            >
              {sendStatus === 'sending' ? 'Sending…' : sendStatus === 'sent' ? 'Sent!' : 'Send'}
            </button>
          </div>
        </div>
      )}

      {/* ——— Drag Overlay ——— */}
      <DragOverlay dropAnimation={null}>
        {activeId && dragSource === 'palette' && activePaletteType && (
          <div className="drag-overlay">
            <div className="palette-card" style={{ width: 196 }}>
              <div className="palette-card-icon">
                {(() => {
                  const Icon = COMPONENT_META[activePaletteType]?.icon
                  return Icon ? <Icon size={16} /> : null
                })()}
              </div>
              <div>
                <div className="palette-card-label">
                  {COMPONENT_META[activePaletteType]?.label}
                </div>
                <div className="palette-card-desc">
                  {COMPONENT_META[activePaletteType]?.description}
                </div>
              </div>
            </div>
          </div>
        )}
        {activeId && dragSource === 'canvas' && activeBlock && (
          <div className="drag-overlay-block email-frame" data-theme={theme} style={{ width: DEVICE_WIDTHS[device], minHeight: 'auto', gap: 0 }}>
            <BlockPreview block={activeBlock} onUpdate={() => {}} isSelected={false} />
          </div>
        )}
      </DragOverlay>

      {/* ——— Template Gallery ——— */}
    </DndContext>
  )
}
