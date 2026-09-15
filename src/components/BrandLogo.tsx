import IslaMark from './IslaMark'
import { brandLogoUrl, useBrandLogo } from '../hooks/useBrandLogo'

type BrandLogoProps = {
  size?: number
  className?: string
}

function BrandLogo({ size = 44, className }: BrandLogoProps) {
  const status = useBrandLogo()

  if (status === 'ready') {
    return (
      <img
        src={brandLogoUrl}
        className={className ? `brand-logo ${className}` : 'brand-logo'}
        style={{ width: size, height: size }}
        alt="Isla Adventures"
      />
    )
  }

  return <IslaMark size={size} className={className} />
}

export default BrandLogo
