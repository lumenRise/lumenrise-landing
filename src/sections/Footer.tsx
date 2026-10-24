import { Logo } from '../components/Logo.tsx'
import { FOOTER_COLUMNS } from '../data/navigation.ts'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="flex flex-col gap-3">
          <a href="/" className="-m-1 self-start rounded-md p-1" aria-label="LumenRise home">
            <Logo size="sm" />
          </a>
          <p className="max-w-[28ch] text-[0.875rem] text-muted-foreground">Launch &amp; Reputation Infrastructure on Stellar.</p>
        </div>
        {FOOTER_COLUMNS.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="footer-title">{column.title}</h2>
            <ul className="footer-links">
              {column.links.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="rounded-sm transition-colors duration-150 hover:text-foreground">{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="container pb-10 text-[0.75rem] text-muted-foreground">© {new Date().getFullYear()} LumenRise</div>
    </footer>
  )
}
