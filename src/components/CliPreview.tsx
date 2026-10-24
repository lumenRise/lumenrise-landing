import { usePolicy } from '../hooks/usePolicy.ts'
import { configLines } from '../lib/config-lines.ts'
import { terminalLines } from '../lib/terminal-lines.ts'
import { CodeLines } from './code/CodeLines.tsx'
import { Float } from './Float.tsx'

/** A CLI session and the launch.json it reads, both following the live policy. */
export function CliPreview() {
  const { mechanism, required, eligible } = usePolicy()
  return (
    <>
      <Float order={0} className="terminal">
        <div className="term-bar">
          <span>Terminal</span>
        </div>
        <pre className="term">
          <CodeLines lines={terminalLines(required, mechanism, eligible)} />
        </pre>
      </Float>
      <Float order={1} className="config-card">
        <div className="term-bar">
          <span className="font-mono-code">launch.json</span>
        </div>
        <pre className="config">
          <CodeLines lines={configLines(required, mechanism)} />
        </pre>
      </Float>
    </>
  )
}
