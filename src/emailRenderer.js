const FONT_STACK = "'Selecta', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"

function wabiLogoSvg(color) {
  return `<svg width="86" height="20" viewBox="0 0 86 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#wc)"><path d="M38.7452 19.7062H35.3506L30.9655 5.5292H34.5023L37.1895 15.7361L40.019 5.5292H43.4136L46.384 15.7361L49.0712 5.5292H52.4658L48.0806 19.7062H44.6861L41.7156 9.49926L38.7452 19.7062ZM57.5555 19.99C54.726 19.99 52.463 18.2882 52.463 15.7375C52.463 13.1869 54.3019 11.8819 56.9891 11.485L59.8186 11.0599C60.6669 10.9187 61.5166 10.6348 61.5166 9.64191C61.5166 8.36657 60.2441 7.79882 59.1112 7.79882C57.4132 7.79882 56.2817 8.64904 56.1408 10.3509H52.7462C52.7462 7.23247 55.4334 5.24674 59.1112 5.24674C62.789 5.24674 65.0521 7.23106 65.0521 10.6334V19.7062H61.7984V18.0043C60.8078 19.4223 59.2521 19.9886 57.5555 19.9886V19.99ZM58.2629 17.438C59.9609 17.438 61.6575 16.3039 61.6575 14.3195V13.0442L58.9703 13.4693C57.2723 13.725 55.9999 14.1783 55.9999 15.5963C55.9999 16.8716 57.1314 17.4394 58.2629 17.4394V17.438ZM74.3988 19.99C72.023 19.99 70.4941 18.8559 70.0136 18.0057V19.7076H66.7599V0.425042H70.1545V7.22965C70.5786 6.37942 72.0216 5.24532 74.3973 5.24532C78.3584 5.24532 80.9033 8.36375 80.9033 12.6177C80.9033 17.1541 78.357 19.99 74.3973 19.99H74.3988ZM73.8323 17.1541C76.2363 17.1541 77.5101 15.4522 77.5101 12.6177C77.5101 10.3495 76.2377 8.10953 73.8323 8.10953C71.286 8.10953 70.1545 10.3495 70.1545 12.6177C70.1545 14.8859 71.286 17.1541 73.8323 17.1541ZM84.0188 3.96999C82.8873 3.96999 82.039 3.11977 82.039 1.98567C82.039 0.851565 82.8873 0.00134277 84.0188 0.00134277C85.1503 0.00134277 85.9986 0.851565 85.9986 1.98567C85.9986 3.11977 85.1503 3.96999 84.0188 3.96999ZM85.7168 19.7062H82.3222V5.5292H85.7168V19.7062Z" fill="${color}"/><path d="M7.88825 9.20836C7.88825 7.0249 6.12263 5.25525 3.94413 5.25525C1.76563 5.25525 0 7.0249 0 9.20836C0 11.3918 1.76563 13.1615 3.94413 13.1615C6.12263 13.1615 7.88825 11.3918 7.88825 9.20836Z" fill="${color}"/><path d="M15.7624 9.21691C15.7624 7.03344 13.9968 5.26379 11.8183 5.26379C9.63977 5.26379 7.87415 7.03344 7.87415 9.21691C7.87415 11.4004 9.63977 13.17 11.8183 13.17C13.9968 13.17 15.7624 11.4004 15.7624 9.21691Z" fill="${color}"/><path d="M23.6451 9.20836C23.6451 7.0249 21.8795 5.25525 19.701 5.25525C17.5225 5.25525 15.7568 7.0249 15.7568 9.20836C15.7568 11.3918 17.5225 13.1615 19.701 13.1615C21.8795 13.1615 23.6451 11.3918 23.6451 9.20836Z" fill="${color}"/><path d="M19.6995 16.0469C19.6995 13.8634 17.9338 12.0938 15.7553 12.0938C13.5768 12.0938 11.8112 13.8634 11.8112 16.0469C11.8112 18.2303 13.5768 20 15.7553 20C17.9338 20 19.6995 18.2303 19.6995 16.0469Z" fill="${color}"/><path d="M11.8254 16.0342C11.8254 13.8507 10.0598 12.0811 7.88126 12.0811C5.70276 12.0811 3.93713 13.8507 3.93713 16.0342C3.93713 18.2176 5.70276 19.9873 7.88126 19.9873C10.0598 19.9873 11.8254 18.2176 11.8254 16.0342Z" fill="${color}"/></g><defs><clipPath id="wc"><rect width="86" height="20" fill="white"/></clipPath></defs></svg>`
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

function wabiLogoImg(baseUrl) {
  return `<img src="${baseUrl}/wabi-logo.svg" alt="wabi" width="86" height="20" style="display:inline-block;vertical-align:middle;" />`
}

function renderHeader(fs, baseUrl) {
  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td style="padding:24px 24px 0;text-align:center;">
      <a href="https://wabi.ai" target="_blank" style="text-decoration:none;">${wabiLogoImg(baseUrl)}</a>
    </td>
  </tr>
</table>`
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

    parts.push(`<p class="wabi-text-primary" style="margin:0;font-family:${fs};font-size:${fontSize};font-weight:${fontWeight};line-height:${lineHeight};color:${t.textPrimary};">${escapeHtml(h1Text)}</p>`)
  }

  if (h2Text) {
    parts.push(`<p class="wabi-text-primary" style="margin:0;font-family:${fs};font-size:24px;font-weight:500;line-height:28px;color:${t.textPrimary};">${escapeHtml(h2Text)}</p>`)
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
    <td class="wabi-text-secondary" style="padding:0 24px;font-family:${fs};font-size:18px;font-weight:400;line-height:22px;color:${t.textSecondary};">
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
  const primaryBtn = `<a href="${primaryHref}" target="_blank" class="wabi-btn-primary" style="display:inline-block;padding:16px 24px;background:${t.btnPrimaryBg};color:${t.btnPrimaryText};font-family:${fs};font-size:14px;font-weight:500;line-height:20px;text-decoration:none;border-radius:999px;box-shadow:${btnShadow};">${escapeHtml(content.primaryLabel || 'Button')}</a>`

  const secondaryHref = content.secondaryLink ? escapeAttr(normalizeUrl(content.secondaryLink)) : '#'
  const secondaryBtn = content.layout === 'double'
    ? `<!--[if mso]>&nbsp;&nbsp;<![endif]--><a href="${secondaryHref}" target="_blank" class="wabi-btn-secondary" style="display:inline-block;padding:16px 24px;background:${t.btnSecondaryBg};color:${t.btnSecondaryText};font-family:${fs};font-size:14px;font-weight:500;line-height:20px;text-decoration:none;border-radius:999px;box-shadow:${btnShadow};margin-left:12px;">${escapeHtml(content.secondaryLabel || 'Button')}</a>`
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
      <div class="wabi-border" style="border-top:1px solid ${t.border};"></div>
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

function renderFooter(content, t, fs, baseUrl) {
  const unsubText = content.unsubscribeText || ''
  const socialIcons = [
    { name: 'X', href: 'https://x.com/wabi', file: 'brand-twitter.svg' },
    { name: 'Discord', href: 'https://discord.gg/wabi', file: 'brand-discord.svg' },
    { name: 'Instagram', href: 'https://www.instagram.com/joinwabi', file: 'brand-instagram.svg' },
    { name: 'TikTok', href: 'https://www.tiktok.com/@gotwabi', file: 'brand-tiktok.svg' },
  ]
  const iconCircles = socialIcons.map(icon =>
    `<a href="${icon.href}" target="_blank" class="wabi-social-icon" style="display:inline-block;text-decoration:none;width:32px;height:32px;border-radius:999px;background:#F5F5F5;text-align:center;line-height:32px;margin:0 4px;box-shadow:0 0 0 0 rgba(0,0,0,0.02),0 2px 4px 0 rgba(0,0,0,0.16);vertical-align:middle;font-size:0;" title="${icon.name}"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" style="width:32px;height:32px" arcsize="50%" fillcolor="#eeeeee" stroke="f"><v:textbox inset="0,0,0,0" style="mso-fit-shape-to-text:true"><center><![endif]--><img src="${baseUrl}/${icon.file}" alt="${icon.name}" width="14" height="14" style="vertical-align:middle;" /><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></a>`
  ).join('')

  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation">
  <tr>
    <td style="padding:0 20px;font-family:${fs};">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" class="wabi-border" style="border-top:1px solid ${t.border};">
        <tr>
          <td style="padding:32px 0 64px;text-align:center;">
            <p style="margin:0 0 24px 0;font-size:14px;font-weight:400;line-height:16px;color:#737373;">${escapeHtml(unsubText)}</p>
            <p style="margin:0 0 24px 0;font-size:14px;font-weight:400;line-height:16px;color:#737373;">&copy; 2025 Wabi Inc. All rights reserved.</p>
            <p style="margin:0 0 24px 0;font-size:14px;font-weight:400;line-height:16px;color:#737373;"><a href="https://apps.apple.com/us/app/wabi/id6747768928" target="_blank" style="color:#737373;text-decoration:underline;">Download on the App Store</a> &middot; <a href="https://wabi.ai" target="_blank" style="color:#737373;text-decoration:underline;">wabi.ai</a> &middot; <a href="#" target="_blank" style="color:#737373;text-decoration:underline;">Unsubscribe</a></p>
            <p style="margin:0 0 24px 0;padding-top:8px;">${iconCircles}</p>
            <p style="margin:0;padding-top:16px;"><a href="https://wabi.ai" target="_blank" style="text-decoration:none;">${wabiLogoImg(baseUrl)}</a></p>
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

function renderBlock(block, t, fs, baseUrl) {
  switch (block.type) {
    case 'header': return renderHeader(fs, baseUrl)
    case 'heading': return renderHeading(block.content, t, fs)
    case 'paragraph': return renderParagraph(block.content, t, fs)
    case 'cta': return renderCta(block.content, t, fs)
    case 'divider': return renderDivider(t)
    case 'image': return renderImage(block.content)
    case 'video': return renderVideo(block.content)
    case 'footer': return renderFooter(block.content, t, fs, baseUrl)
    default: return ''
  }
}

export function renderEmailHTML(blocks, options = {}) {
  const { subject, preheader, fontUrl, fontFamily, baseUrl = '' } = options
  const light = THEMES.light
  const dark = THEMES.dark
  const t = light
  const fs = fontFamily ? `'${fontFamily}', ${FONT_STACK}` : FONT_STACK
  const renderedBlocks = blocks.map(block => renderBlock(block, t, fs, baseUrl)).filter(Boolean)
  const spacer = `<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation"><tr><td style="height:32px;font-size:0;line-height:0;">&nbsp;</td></tr></table>`
  const bodyContent = renderedBlocks.join(`\n${spacer}\n`)

  const preheaderHtml = preheader ? `<div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">${escapeHtml(preheader)}${'&#847; &zwnj; &nbsp; '.repeat(30)}</div>` : ''

  const fontLink = fontUrl ? `<link href="${escapeAttr(fontUrl)}" rel="stylesheet" />` : ''

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="color-scheme" content="light dark" />
  <meta name="supported-color-schemes" content="light dark" />
  <title>${escapeHtml(subject || 'Wabi Email')}</title>
  ${fontLink}
  <style>
    :root { color-scheme: light dark; }
    @media (prefers-color-scheme: dark) {
      body, .wabi-bg { background: ${dark.bg} !important; }
      .wabi-text-primary { color: ${dark.textPrimary} !important; }
      .wabi-text-secondary { color: ${dark.textSecondary} !important; }
      .wabi-border { border-color: ${dark.border} !important; }
      .wabi-btn-primary { background: ${dark.btnPrimaryBg} !important; color: ${dark.btnPrimaryText} !important; }
      .wabi-btn-secondary { background: ${dark.btnSecondaryBg} !important; color: ${dark.btnSecondaryText} !important; }
      .wabi-social-icon { background: #262626 !important; }
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
<body class="wabi-bg" style="margin:0;padding:0;background:${t.bg};color:${t.textPrimary};-webkit-text-size-adjust:none;text-size-adjust:none;">
  ${preheaderHtml}
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" class="wabi-bg" style="background:${t.bg};">
    <tr>
      <td align="center" style="padding:0;">
        <!--[if mso]><table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600"><tr><td><![endif]-->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" class="wabi-bg" style="max-width:600px;background:${t.bg};">
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

export function downloadEmailHTML(blocks, options = {}, filename = 'wabi-email.html') {
  const html = renderEmailHTML(blocks, options)
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

export function renderCustomerIoHTML(blocks, options = {}) {
  const html = renderEmailHTML(blocks, options)
  return html.replace(/href="#"([^>]*>Unsubscribe)/g, 'href="{{ unsubscribe_url }}"$1')
}

export function downloadCustomerIoHTML(blocks, options = {}, filename = 'wabi-email-customerio.html') {
  const html = renderCustomerIoHTML(blocks, options)
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
