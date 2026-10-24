import { WALLET_COUNT } from '../data/sample.ts'
import { SIGNALS } from '../data/signals.ts'
import { usePolicy } from '../hooks/usePolicy.ts'
import { cssVars } from '../lib/css-vars.ts'
import { evidenceStrength } from '../lib/evidence-strength.ts'
import { evidenceText } from '../lib/evidence-text.ts'
import { flag } from '../lib/flag.ts'
import { shortAddress } from '../lib/short-address.ts'
import { wrapIndex } from '../lib/wrap-index.ts'
import { Float } from './Float.tsx'
import { ChevronIcon } from './icons/ChevronIcon.tsx'

/** The wallet in focus, one bar per reputation dimension. */
export function WalletProfile() {
  const { wallets, active, setActive } = usePolicy()
  const wallet = wallets[active]
  return (
    <Float order={0} className="w-profile">
      <div className="float-head">
        <span className="font-medium">Wallet profile</span>
        <span className="wallet-switch">
          <button
            type="button"
            className="icon-btn"
            aria-label="Previous wallet"
            onClick={() => setActive((index) => wrapIndex(index - 1, WALLET_COUNT))}
          >
            <ChevronIcon direction="left" />
          </button>
          <span className="tabular-nums" aria-live="polite">
            {shortAddress(wallet.address)}
          </span>
          <button
            type="button"
            className="icon-btn"
            aria-label="Next wallet"
            onClick={() => setActive((index) => wrapIndex(index + 1, WALLET_COUNT))}
          >
            <ChevronIcon direction="right" />
          </button>
        </span>
      </div>
      <ul className="dims">
        {SIGNALS.map((signal, k) => {
          const value = wallet.evidence[signal.id]
          const held = wallet.signals[signal.id]
          return (
            <li key={signal.id} className="dim" data-signal={signal.id} data-held={flag(held)}>
              <span className="dim-label">{signal.label}</span>
              <span className="dim-value tabular-nums">{evidenceText(signal.id, value)}</span>
              <span className="dim-track" aria-hidden="true">
                <span style={cssVars({ '--v': held ? Math.max(0.06, evidenceStrength(signal.id, value)) : 0, '--k': k })} />
              </span>
            </li>
          )
        })}
      </ul>
    </Float>
  )
}
