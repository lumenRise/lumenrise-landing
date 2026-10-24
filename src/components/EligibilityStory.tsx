import { useMemo, useRef } from 'react'
import { useInView } from '../hooks/useInView.ts'
import { useReducedMotion } from '../hooks/useReducedMotion.ts'
import { useStoryClock } from '../hooks/useStoryClock.ts'
import { flag } from '../lib/flag.ts'
import { phaseDurations } from '../lib/phase-durations.ts'
import { storyBeats } from '../lib/story-beats.ts'
import { storyFrame } from '../lib/story-frame.ts'
import { EligibleList } from './EligibleList.tsx'
import { FilteredList } from './FilteredList.tsx'
import { GateCard } from './GateCard.tsx'
import { GateQueue } from './GateQueue.tsx'
import { Scene } from './Scene.tsx'
import { StorySteps } from './StorySteps.tsx'

/**
 * A looping walkthrough of eligibility: rules switch on, sample wallets pass
 * through the policy one at a time, and the eligible ones get their tiers.
 */
export function EligibilityStory() {
  const ref = useRef<HTMLDivElement>(null)
  const beats = useMemo(storyBeats, [])
  const durations = useMemo(() => beats.map((beat) => beat.ms), [beats])
  const phases = useMemo(() => phaseDurations(beats), [beats])
  const still = useReducedMotion()
  const inView = useInView(ref)
  const { index, loop } = useStoryClock(durations, inView && !still)
  // With reduced motion the story rests on its finished state instead of playing.
  const frame = storyFrame(beats, still ? beats.length - 2 : index)

  return (
    <div ref={ref}>
      <Scene tone="sun" className="elig-scene">
        <div className="gate" data-resetting={flag(frame.resetting)} aria-hidden="true">
          <GateQueue frame={frame} />
          <GateCard frame={frame} />
          <div className="gate-results">
            <EligibleList frame={frame} />
            <FilteredList frame={frame} />
          </div>
          {frame.travel && <span key={index} className="gate-pulse" data-leg={frame.travel} />}
        </div>
        <p className="sr-only">
          An eligibility policy with three rules, account history, Soroban activity, and Sybil resistance, checks five
          wallets. Three pass and receive allocation tiers by the signals they hold; one is filtered for Sybil
          risk and one because its account is too new.
        </p>
      </Scene>
      <StorySteps phase={frame.phase} loop={loop} durations={phases} still={still} />
    </div>
  )
}
