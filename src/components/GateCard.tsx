import { STORY_RULES, STORY_WALLETS } from '../data/eligibility-story.ts'
import { ruleCheckState } from '../lib/rule-check-state.ts'
import type { StoryFrame } from '../types/story.ts'
import { Float } from './Float.tsx'
import { GateRule } from './GateRule.tsx'
import { GateVerdict } from './GateVerdict.tsx'
import { Pill } from './Pill.tsx'
import { StoryWalletChip } from './StoryWalletChip.tsx'

/** The policy every wallet passes through, checking one rule at a time. */
export function GateCard({ frame }: { frame: StoryFrame }) {
  const wallet = frame.current === null ? null : STORY_WALLETS[frame.current]
  return (
    <Float order={1} className="gate-card">
      <div className="float-head">
        <span className="min-w-0">
          <span className="block text-[1.0625rem] font-medium tracking-[-0.01em]">Eligibility policy</span>
        </span>
        <Pill on={frame.rules > 0}>{frame.rules === 0 ? 'No rules yet' : `${frame.rules} of ${STORY_RULES.length} rules on`}</Pill>
      </div>
      <div className="gate-wallet">
        <span className="text-[0.75rem] text-muted-foreground">Checking</span>
        {wallet ? (
          <span key={wallet.address} className="gate-wallet-in">
            <StoryWalletChip wallet={wallet} />
          </span>
        ) : (
          <span className="gate-wallet-empty">No wallet in the gate</span>
        )}
      </div>
      <ul className="gate-rules">
        {STORY_RULES.map((rule, position) => (
          <GateRule
            key={rule}
            rule={rule}
            state={ruleCheckState(frame, rule, position)}
            evidence={wallet?.checks[rule].evidence}
          />
        ))}
      </ul>
      <GateVerdict frame={frame} />
    </Float>
  )
}
