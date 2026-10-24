import { LAUNCH_OPERATIONS } from '../data/launch-steps.ts'
import { WALLET_COUNT } from '../data/sample.ts'
import type { CodeLine } from '../types/code.ts'
import type { Mechanism } from '../types/mechanism.ts'
import type { SignalId } from '../types/signal.ts'
import { codeLine } from './code-line.ts'

/** The CLI session that checks a policy and creates the launch. */
export function terminalLines(required: ReadonlySet<SignalId>, mechanism: Mechanism, eligible: number): CodeLine[] {
  const prompt = { kind: 'prompt', text: '$' } as const
  const check = required.size === 0 ? 'Open to all wallets' : `${eligible} of ${WALLET_COUNT} wallets eligible`
  return [
    codeLine(prompt, ' npx lumenrise init'),
    codeLine('  ', { kind: 'out', text: 'Created launch.json' }),
    codeLine(prompt, ' npx lumenrise policy check'),
    codeLine('  ', { kind: 'out', text: check }),
    codeLine(prompt, ' npx lumenrise launch --network testnet'),
    ...[...LAUNCH_OPERATIONS, mechanism.createStep].map((step) =>
      codeLine('  ', { kind: 'ok', text: 'done' }, '  ', { kind: 'out', text: step }),
    ),
  ]
}
