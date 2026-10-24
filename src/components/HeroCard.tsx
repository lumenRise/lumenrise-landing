import { useRef } from 'react'
import { HERO_LINKS } from '../data/navigation.ts'
import { useEngravedField } from '../hooks/useEngravedField.ts'
import { usePointerLean } from '../hooks/usePointerLean.ts'
import { heroFieldFade } from '../lib/hero-field-fade.ts'
import { ArrowIcon } from './icons/ArrowIcon.tsx'
import { PrimaryCta } from './PrimaryCta.tsx'

export function HeroCard() {
  const ref = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEngravedField(ref, canvasRef, heroFieldFade)
  usePointerLean(ref)
  return (
    <div ref={ref} className="hero-card">
      <canvas ref={canvasRef} aria-hidden="true" />
      <div className="hero-copy">
        <h1 id="hero-title" className="hero-title">
          <span className="block text-balance">Launch tokens on Stellar.</span>
          <span className="block text-balance hero-title-muted">Let reputation decide who&nbsp;takes&nbsp;part.</span>
        </h1>
        <p className="hero-lede">
          Bonding curves, auctions, and presales with programmable eligibility, built from on-chain activity, ecosystem
          participation, and developer contributions.
        </p>
        <div className="hero-actions">
          <PrimaryCta label="Start a launch" />
          <a href="https://docs.lumenrise.app" className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-panel-fg">
            Documentation <ArrowIcon />
          </a>
        </div>
      </div>
      <nav className="hero-links" aria-label="Product">
        <ul>
          {HERO_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
