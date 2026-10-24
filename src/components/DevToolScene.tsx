import { usePolicy } from '../hooks/usePolicy.ts'
import { devCodeLines } from '../lib/dev-code-lines.ts'
import { devResult } from '../lib/dev-result.ts'
import { flag } from '../lib/flag.ts'
import { shortAddress } from '../lib/short-address.ts'
import type { DevTool } from '../types/dev-tool.ts'
import { CodeLines } from './code/CodeLines.tsx'
import { Float } from './Float.tsx'
import { CheckIcon } from './icons/CheckIcon.tsx'
import { CrossIcon } from './icons/CrossIcon.tsx'
import { Scene } from './Scene.tsx'

/** A tool's code for the wallet in focus, and what it returns. */
export function DevToolScene({ tool }: { tool: DevTool }) {
  const { wallets, active, evaluations, required } = usePolicy()
  const address = shortAddress(wallets[active].address)
  const outcome = devResult(tool.id, evaluations[active], address, required.size)
  return (
    <Scene tone={tool.tone} className="feature-scene dev-scene">
      <Float order={0} className="code-card">
        <div className="term-bar">
          <span className="font-mono-code">{tool.file}</span>
        </div>
        <pre className="code">
          <CodeLines lines={devCodeLines(tool.id, required, address)} />
        </pre>
      </Float>
      <Float order={1} className="notice notice-result" aria-live="polite">
        <span className="notice-icon" data-on={flag(outcome.eligible)}>
          {outcome.eligible ? <CheckIcon /> : <CrossIcon />}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate font-mono-code text-[0.75rem] font-medium">{outcome.title}</span>
          <span className="block truncate text-[0.6875rem] text-muted-foreground">{outcome.sub}</span>
        </span>
      </Float>
    </Scene>
  )
}
