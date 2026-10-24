import { usePolicy } from '../hooks/usePolicy.ts'
import type { Mechanism } from '../types/mechanism.ts'
import { AuctionFlow } from './AuctionFlow.tsx'
import { CurveFlow } from './CurveFlow.tsx'
import { PresaleFlow } from './PresaleFlow.tsx'

/** The three moments of a launch under the chosen mechanism, one floating card each. */
export function LaunchFlow({ mechanism }: { mechanism: Mechanism }) {
  const { required, tiers } = usePolicy()
  const open = required.size === 0
  return (
    <div className="flow">
      {mechanism.id === 'curve' && <CurveFlow open={open} />}
      {mechanism.id === 'auction' && <AuctionFlow open={open} />}
      {mechanism.id === 'presale' && <PresaleFlow mechanism={mechanism} tiers={tiers} open={open} />}
    </div>
  )
}
