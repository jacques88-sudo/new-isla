import { useEffect, useState } from 'react'

/** Drop the real logo at public/images/logo.png and it is picked up everywhere. */
export const brandLogoUrl = `${import.meta.env.BASE_URL}images/logo.png`

type LogoStatus = 'loading' | 'ready' | 'missing'

/**
 * Reports whether the real logo file exists, so the header and the postcard
 * stamp can fall back to the placeholder mark until it is added.
 */
export function useBrandLogo(): LogoStatus {
  const [status, setStatus] = useState<LogoStatus>('loading')

  useEffect(() => {
    const image = new Image()
    image.onload = () => setStatus('ready')
    image.onerror = () => setStatus('missing')
    image.src = brandLogoUrl
    return () => {
      image.onload = null
      image.onerror = null
    }
  }, [])

  return status
}
