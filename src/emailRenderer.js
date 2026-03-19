const FONT_STACK = "'GT America', 'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"

function biltLogoSvg(color) {
  return `<svg width="144" height="24" viewBox="0 0 144 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M120 24V0H144V24H120ZM136.688 14.6563V9.34375H142V14.6563H136.688ZM127.969 7.34375V2H142V7.34375H127.969ZM125.969 2V7.34375H122V2H125.969ZM134.688 9.34375V14.6563H122V9.34375H134.688ZM130.719 16.6563V22H142V16.6563H130.719ZM128.719 16.6563V22H122V16.6563H128.719Z" fill="${color}"/><path d="M79.125 0V2.53125H89.9531V24H93.2344V2.53125H104.062V0H79.125Z" fill="${color}"/><path d="M54.6094 0V24H75.5156V21.4688H57.8906V0H54.6094Z" fill="${color}"/><path d="M40.1719 0H36.8906V24H40.1719V0Z" fill="${color}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.9972 12.0192L16.1598 11.5232L18.9596 10.8937C20.1578 10.6523 21.2145 10.0353 21.9285 9.06245C22.5862 8.12775 22.9244 7.0023 22.9056 5.85777C22.9056 5.09474 22.7741 4.33172 22.511 3.62593C22.2292 2.92013 21.797 2.29064 21.2521 1.79468C20.5756 1.20334 19.8052 0.764604 18.9596 0.497547C17.8322 0.135112 16.7404 0 15.5572 0L0 0.00158322V18L4.68592 24H15.5572C16.8224 24 18.0953 23.846 19.2979 23.4835C20.1998 23.1974 21.0266 22.7205 21.7406 22.091C22.3419 21.5378 22.7929 20.8702 23.0935 20.1072C23.3942 19.2869 23.5257 18.4476 23.5257 17.5701C23.5821 16.2539 23.2063 14.9759 22.4547 13.9076C21.5715 12.8585 20.3572 12.293 18.9972 12.0192ZM18.4147 20.2598C17.3436 21.0991 16.0006 21.375 14.6435 21.375H2.9287V13.0312H14.6435C16.391 13.0312 17.6631 13.3926 18.4523 14.1747C18.8469 14.5753 19.1475 15.0331 19.3542 15.5672C19.5609 16.0822 19.6549 16.6354 19.6361 17.2077C19.6549 17.78 19.5609 18.3522 19.3542 18.8673C19.1475 19.4014 18.8281 19.8783 18.4147 20.2598ZM2.9287 2.625H14.3858C15.1382 2.625 15.8592 2.72938 16.5732 2.95829C17.1182 3.12997 17.6067 3.43517 18.0201 3.83576C18.3771 4.17912 18.6402 4.61785 18.7905 5.09474C18.922 5.5144 18.9972 5.93407 18.9972 6.37281C18.9972 6.84969 18.9408 7.32658 18.8281 7.78439C18.7153 8.29943 18.4711 8.79539 18.1141 9.19598C17.7195 9.61564 17.2121 9.959 16.6672 10.1498C15.9344 10.4168 15.1804 10.5 14.3858 10.5H2.9287V2.625Z" fill="${color}"/></svg>`
}

const THEMES = {
  light: {
    bg: '#ffffff',
    card: '#ffffff',
    textPrimary: '#0A0A0A',
    textSecondary: '#525252',
    border: '#D4D4D4',
    btnPrimaryBg: '#171717',
    btnPrimaryText: '#FAFAFA',
    btnSecondaryBg: '#F5F5F5',
    btnSecondaryText: '#0A0A0A',
  },
  dark: {
    bg: '#111111',
    card: '#1a1a1a',
    textPrimary: '#FAFAFA',
    textSecondary: '#A3A3A3',
    border: 'rgba(255,255,255,0.08)',
    btnPrimaryBg: '#FAFAFA',
    btnPrimaryText: '#171717',
    btnSecondaryBg: '#262626',
    btnSecondaryText: '#FAFAFA',
  },
}

function renderHeader(fs) {
  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td style="padding:24px 24px 0;text-align:center;">
      <a href="https://bilt.com" target="_blank" style="text-decoration:none;">${biltLogoSvg('#737373')}</a>
    </td>
  </tr>
</table>`
}

async function fetchAsBase64(path) {
  try {
    const res = await fetch(path)
    const blob = await res.blob()
    return await new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.readAsDataURL(blob)
    })
  } catch {
    return ''
  }
}

export async function fetchIconsAsBase64() {
  const files = ['brand-twitter.png', 'brand-instagram.png', 'brand-tiktok.png']
  const result = {}
  await Promise.all(files.map(async (file) => {
    result[file] = await fetchAsBase64(`/${file}`)
  }))
  return result
}

export async function fetchGTAmericaFontFace() {
  const [normal, italic] = await Promise.all([
    fetchAsBase64('/fonts/GT-America-VF.woff2'),
    fetchAsBase64('/fonts/GT-America-Italic-VF.woff2'),
  ])
  if (!normal) return ''
  const italicFace = italic ? `\n    @font-face { font-family: 'GT America'; src: url('${italic}') format('woff2'); font-weight: 100 900; font-style: italic; }` : ''
  return `@font-face { font-family: 'GT America'; src: url('${normal}') format('woff2'); font-weight: 100 900; font-style: normal; }${italicFace}`
}

function renderHeading(content, t, fs) {
  const parts = []
  const h1Text = content.h1 || ''
  const h2Text = content.h2 ?? ''
  const style = content.style || 'h1'
  const subhead = content.subhead || false

  if (subhead && h1Text) {
    parts.push(`<p style="margin:0;font-family:${fs};font-size:18px;font-weight:500;line-height:22px;color:#737373;">${escapeHtml(h1Text)}</p>`)
  }

  if (!subhead && h1Text) {
    let fontSize, fontWeight, lineHeight
    if (style === 'h1') { fontSize = '28px'; fontWeight = '500'; lineHeight = '34px' }
    else if (style === 'h2') { fontSize = '24px'; fontWeight = '500'; lineHeight = '28px' }
    else { fontSize = '20px'; fontWeight = '500'; lineHeight = '24px' }

    parts.push(`<p class="bilt-text-primary" style="margin:0;font-family:${fs};font-size:${fontSize};font-weight:${fontWeight};line-height:${lineHeight};color:${t.textPrimary};">${escapeHtml(h1Text)}</p>`)
  }

  if (h2Text) {
    parts.push(`<p class="bilt-text-primary" style="margin:0;font-family:${fs};font-size:24px;font-weight:500;line-height:28px;color:${t.textPrimary};">${escapeHtml(h2Text)}</p>`)
  }

  if (parts.length === 0) return ''

  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td style="padding:20px 24px 0 24px;font-family:${fs};">
      ${parts.join('\n      ')}
    </td>
  </tr>
</table>`
}

function renderParagraph(content, t, fs) {
  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td class="bilt-text-secondary" style="padding:0 24px;font-family:${fs};font-size:18px;font-weight:400;line-height:22px;color:${t.textSecondary};">
      ${escapeHtml(content.text || '')}
    </td>
  </tr>
</table>`
}

function normalizeUrl(url) {
  if (!url) return ''
  const trimmed = url.trim()
  if (!trimmed) return ''
  if (/^https?:\/\//i.test(trimmed) || trimmed.startsWith('mailto:') || trimmed.startsWith('tel:')) return trimmed
  return 'https://' + trimmed
}

function renderCta(content, t, fs) {
  const btnShadow = '0 0 0 0 rgba(0,0,0,0.02),0 2px 4px 0 rgba(0,0,0,0.16)'
  const primaryHref = content.primaryLink ? escapeAttr(normalizeUrl(content.primaryLink)) : '#'
  const primaryBtn = `<a href="${primaryHref}" target="_blank" class="bilt-btn-primary" style="display:inline-block;padding:16px 24px;background:${t.btnPrimaryBg};color:${t.btnPrimaryText};font-family:${fs};font-size:14px;font-weight:500;line-height:20px;text-decoration:none;border-radius:999px;box-shadow:${btnShadow};">${escapeHtml(content.primaryLabel || 'Button')}</a>`

  const secondaryHref = content.secondaryLink ? escapeAttr(normalizeUrl(content.secondaryLink)) : '#'
  const secondaryBtn = content.layout === 'double'
    ? `<!--[if mso]>&nbsp;&nbsp;<![endif]--><a href="${secondaryHref}" target="_blank" class="bilt-btn-secondary" style="display:inline-block;padding:16px 24px;background:${t.btnSecondaryBg};color:${t.btnSecondaryText};font-family:${fs};font-size:14px;font-weight:500;line-height:20px;text-decoration:none;border-radius:999px;box-shadow:${btnShadow};margin-left:12px;">${escapeHtml(content.secondaryLabel || 'Button')}</a>`
    : ''

  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td style="padding:16px 24px;font-family:${fs};">
      ${primaryBtn}${secondaryBtn}
    </td>
  </tr>
</table>`
}

function renderDivider(t) {
  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td style="padding:0 24px;">
      <div class="bilt-border" style="border-top:1px solid ${t.border};"></div>
    </td>
  </tr>
</table>`
}

const IMAGE_HEIGHTS = { small: 200, medium: 300, large: 400 }

function renderImage(content) {
  if (!content.src) return ''

  const height = IMAGE_HEIGHTS[content.size] || IMAGE_HEIGHTS.medium
  const isBase64 = content.src.startsWith('data:')
  const imgTag = `${isBase64 ? '<!-- ⚠️ Replace this base64 image with a hosted URL for email delivery -->\n      ' : ''}<img src="${escapeAttr(content.src)}" alt="${escapeAttr(content.alt || '')}" width="576" style="display:block;width:100%;max-width:576px;height:${height}px;object-fit:cover;border-radius:32px;border:1px solid rgba(128,128,128,0.15);" />`
  const inner = content.link
    ? `<a href="${escapeAttr(normalizeUrl(content.link))}" target="_blank" style="display:block;">${imgTag}</a>`
    : imgTag

  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td style="padding:0 12px;">
      ${inner}
    </td>
  </tr>
</table>`
}

function renderVideo(content) {
  if (!content.thumbnailSrc) return ''

  const height = IMAGE_HEIGHTS[content.size] || IMAGE_HEIGHTS.medium
  const videoHref = content.videoUrl ? escapeAttr(normalizeUrl(content.videoUrl)) : '#'
  const isBase64 = content.thumbnailSrc.startsWith('data:')

  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td style="padding:0 12px;">
      <a href="${videoHref}" target="_blank" style="display:block;position:relative;text-decoration:none;">
        ${isBase64 ? '<!-- ⚠️ Replace this base64 image with a hosted URL for email delivery -->\n        ' : ''}<img src="${escapeAttr(content.thumbnailSrc)}" alt="${escapeAttr(content.alt || '')}" width="576" style="display:block;width:100%;max-width:576px;height:${height}px;object-fit:cover;border-radius:32px;border:1px solid rgba(128,128,128,0.15);" />
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:56px;height:56px;border-radius:50%;background:rgba(0,0,0,0.6);text-align:center;line-height:56px;font-size:24px;color:white;">&#9654;</div>
      </a>
    </td>
  </tr>
</table>`
}

function renderFooter(content, t, fs, iconData = {}) {
  const unsubText = content.unsubscribeText || ''
  const socialIcons = [
    { name: 'X', href: 'https://x.com/BiltRewards', file: 'brand-twitter.png' },
    { name: 'Instagram', href: 'https://www.instagram.com/bilt/', file: 'brand-instagram.png' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@biltrewards', file: 'brand-tiktok.png' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/biltrewards/posts/?feedView=all', file: null },
  ]
  const linkedInInlineSvg = `<svg width="14" height="14" viewBox="4.95 4.98 13.88 13.85" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;"><path d="M8.0587 18.8272H5.1813V9.57404H8.0587V18.8272Z" fill="#737373"/><path d="M6.62 8.31328C5.6962 8.31328 4.95035 7.56743 4.95035 6.64742C4.95035 5.7274 5.6962 4.98155 6.62 4.98155C7.54001 4.98155 8.28586 5.7274 8.28586 6.64742C8.28586 7.56364 7.54001 8.31328 6.62 8.31328Z" fill="#737373"/><path d="M18.8262 18.8272H15.9526V14.3293C15.9526 13.2579 15.9337 11.876 14.4571 11.876C12.9616 11.876 12.7345 13.0459 12.7345 14.2536V18.8272H9.86465V9.57404H12.6209V10.8386H12.6588C13.0412 10.1117 13.9801 9.34309 15.3772 9.34309C18.2886 9.34309 18.8262 11.2588 18.8262 13.7501V18.8272Z" fill="#737373"/></svg>`
  const iconCircles = socialIcons.map(icon => {
    const iconContent = icon.file === null
      ? linkedInInlineSvg
      : `<img src="${iconData[icon.file] || ''}" alt="${icon.name}" width="14" height="14" style="vertical-align:middle;" />`
    return `<a href="${icon.href}" target="_blank" class="bilt-social-icon" style="display:inline-block;text-decoration:none;width:32px;height:32px;border-radius:999px;background:#F5F5F5;text-align:center;line-height:32px;margin:0 4px;box-shadow:0 0 0 0 rgba(0,0,0,0.02),0 2px 4px 0 rgba(0,0,0,0.16);vertical-align:middle;font-size:0;" title="${icon.name}"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="width:32px;height:32px" arcsize="50%" fillcolor="#eeeeee" stroke="f"><v:textbox inset="0,0,0,0" style="mso-fit-shape-to-text:true"><center><![endif]-->${iconContent}<!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a>`
  }).join('')

  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td style="padding:0 20px;font-family:${fs};">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" class="bilt-border" style="border-top:1px solid ${t.border};">
        <tr>
          <td style="padding:32px 0 64px;text-align:center;">
            <p style="margin:0 0 24px 0;font-size:14px;font-weight:400;line-height:16px;color:#737373;">${escapeHtml(unsubText)}</p>
            <p style="margin:0 0 24px 0;font-size:14px;font-weight:400;line-height:16px;color:#737373;">&copy; 2025 Bilt Inc. All rights reserved.</p>
            <p style="margin:0 0 24px 0;font-size:14px;font-weight:400;line-height:16px;color:#737373;"><a href="https://www.bilt.com/app" target="_blank" style="color:#737373;text-decoration:underline;">Get the Bilt app</a> &middot; <a href="https://bilt.com" target="_blank" style="color:#737373;text-decoration:underline;">bilt.com</a> &middot; <a href="#" target="_blank" style="color:#737373;text-decoration:underline;">Unsubscribe</a></p>
            <p style="margin:0 0 24px 0;padding-top:8px;">${iconCircles}</p>
            <p style="margin:0;padding-top:16px;"><a href="https://bilt.com" target="_blank" style="text-decoration:none;">${biltLogoSvg('#737373')}</a></p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function escapeAttr(str) {
  return escapeHtml(str).replace(/'/g, '&#39;')
}

function renderBlock(block, t, fs, iconData) {
  switch (block.type) {
    case 'header': return renderHeader(fs)
    case 'heading': return renderHeading(block.content, t, fs)
    case 'paragraph': return renderParagraph(block.content, t, fs)
    case 'cta': return renderCta(block.content, t, fs)
    case 'divider': return renderDivider(t)
    case 'image': return renderImage(block.content)
    case 'video': return renderVideo(block.content)
    case 'footer': return renderFooter(block.content, t, fs, iconData)
    default: return ''
  }
}

export function renderEmailHTML(blocks, options = {}) {
  const { subject, preheader, fontUrl, fontFamily, iconData = {}, fontFaceCSS = '' } = options
  const light = THEMES.light
  const dark = THEMES.dark
  const t = light
  const fs = fontFamily ? `'${fontFamily}', ${FONT_STACK}` : FONT_STACK
  const renderedBlocks = blocks.map(block => renderBlock(block, t, fs, iconData)).filter(Boolean)
  const spacer = `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation"><tr><td style="height:32px;font-size:0;line-height:0;">&nbsp;</td></tr></table>`
  const bodyContent = renderedBlocks.join(`\n${spacer}\n`)

  const preheaderHtml = preheader ? `<div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">${escapeHtml(preheader)}${'&#847; &zwnj; &nbsp; '.repeat(30)}</div>` : ''

  const fontLink = fontUrl ? `<link href="${escapeAttr(fontUrl)}" rel="stylesheet" />` : ''
  const fontFaceStyle = fontFaceCSS ? `<style>${fontFaceCSS}</style>` : ''

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
  <title>${escapeHtml(subject || 'Bilt Email')}</title>
  ${fontLink}
  ${fontFaceStyle}
  <style>
    :root { color-scheme: light dark; }
    @media (prefers-color-scheme: dark) {
      body, .bilt-bg { background: ${dark.bg} !important; }
      .bilt-text-primary { color: ${dark.textPrimary} !important; }
      .bilt-text-secondary { color: ${dark.textSecondary} !important; }
      .bilt-border { border-color: ${dark.border} !important; }
      .bilt-btn-primary { background: ${dark.btnPrimaryBg} !important; color: ${dark.btnPrimaryText} !important; }
      .bilt-btn-secondary { background: ${dark.btnSecondaryBg} !important; color: ${dark.btnSecondaryText} !important; }
      .bilt-social-icon { background: #262626 !important; }
    }
  </style>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body class="bilt-bg" style="margin:0;padding:0;background:${t.bg};color:${t.textPrimary};-webkit-text-size-adjust:none;text-size-adjust:none;">
  ${preheaderHtml}
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" class="bilt-bg" style="background:${t.bg};">
    <tr>
      <td align="center" style="padding:0;">
        <!--[if mso]><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600"><tr><td><![endif]-->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" class="bilt-bg" style="max-width:600px;background:${t.bg};">
          <tr>
            <td>
${bodyContent}
            </td>
          </tr>
        </table>
        <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  </table>
</body>
</html>`
}

function triggerDownload(html, filename) {
  const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export async function downloadEmailHTML(blocks, options = {}, filename = 'bilt-email.html') {
  const [iconData, fontFaceCSS] = await Promise.all([fetchIconsAsBase64(), fetchGTAmericaFontFace()])
  const html = renderEmailHTML(blocks, { ...options, iconData, fontFaceCSS })
  triggerDownload(html, filename)
}

export async function renderBrazeHTML(blocks, options = {}) {
  const [iconData, fontFaceCSS] = await Promise.all([fetchIconsAsBase64(), fetchGTAmericaFontFace()])
  const html = renderEmailHTML(blocks, { ...options, iconData, fontFaceCSS })
  return html.replace(/href="#"([^>]*>Unsubscribe)/g, 'href="{{${unsubscribe_url}}}"$1')
}

export async function downloadBrazeHTML(blocks, options = {}, filename = 'bilt-email-braze.html') {
  const html = await renderBrazeHTML(blocks, options)
  triggerDownload(html, filename)
}
