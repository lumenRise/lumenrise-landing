import { plural } from '../lib/plural.ts'
import type { Mechanism } from '../types/mechanism.ts'
import type { Tiers } from '../types/tiers.ts'
import { FlowProgressCard } from './FlowProgressCard.tsx'
import { FlowTermsCard } from './FlowTermsCard.tsx'
import { Float } from './Float.tsx'
import { Meter } from './Meter.tsx'

type PresaleFlowProps = { mechanism: Mechanism; tiers: Tiers; open: boolean }

export function PresaleFlow({ mechanism, tiers, open }: PresaleFlowProps) {
  return (
    <>
      <FlowTermsCard
        symbol="LPAS"
        name="Lumen Pass"
        terms={[
          ['Hard cap', '1,000,000 XLM'],
          ['Price', '0.0120 XLM'],
          ['Vesting', '6 months, linear'],
          ['Allocation cap', open ? 'Open to everyone' : 'By evidence tier'],
        ]}
      />
      <FlowProgressCard
        title="Raise"
        status="Active"
        figure="650,000 XLM"
        of="of 1M"
        progress={0.65}
        foot="65% filled · 1,204 contributors · 3 days left"
      />
      <Float order={2} className="flow-card">
        <div className="float-head">
          <span className="font-medium">Allocation caps</span>
          <span className="text-[0.75rem] text-muted-foreground">{open ? 'Equal caps' : 'By signals held'}</span>
        </div>
        <div className="tiers">
          {[4, 3, 2, 1, 0].map((tier) => (
            <div key={tier} className="tier">
              <span>Tier {tier + 1}</span>
              <Meter progress={open ? 0.3 : mechanism.tiers[tier + 1]} />
              <span className="tabular-nums text-muted-foreground">{plural(tiers[tier], 'wallet')}</span>
            </div>
          ))}
        </div>
        <p className="flow-foot">Wallets from the policy below</p>
      </Float>
    </>
  )
}
