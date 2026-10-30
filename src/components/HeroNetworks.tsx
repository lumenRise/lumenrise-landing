import { BaseLogo } from './icons/BaseLogo.tsx'
import { StellarLogo } from './icons/StellarLogo.tsx'

/** The networks LumenRise launches on. */
export function HeroNetworks() {
  return (
    <div className="hero-networks">
      <span className="hero-networks-label">Live on</span>
      <ul className="hero-networks-list" aria-label="Supported networks">
        <li className="hero-network">
          <StellarLogo />
          Stellar
        </li>
        <li className="hero-network">
          <BaseLogo />
          Base
        </li>
      </ul>
    </div>
  )
}
