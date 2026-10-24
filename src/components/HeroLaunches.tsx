import { SAMPLE_LAUNCHES } from '../data/launches.ts'
import { ChipCta } from './ChipCta.tsx'
import { LaunchCard } from './LaunchCard.tsx'

/** Live launches, rising out of the bottom of the hero card. */
export function HeroLaunches() {
  return (
    <div id="launches" className="hero-launches" role="region" aria-label="Live launches">
      <div className="hero-launch-grid">
        {SAMPLE_LAUNCHES.filter((launch) => launch.status === 'live').map((launch, index) => (
          <LaunchCard key={launch.symbol} launch={launch} index={index} />
        ))}
      </div>
      <div className="hero-launches-foot">
        <ChipCta label="Explore All Launches" href="https://platform.lumenrise.app/launches" />
      </div>
    </div>
  )
}
