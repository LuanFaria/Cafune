import { Logo } from './Logo'
import { BRAND, NAV } from '../data'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest px-4 pt-16 text-mint md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1320px] gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo tone="light" className="text-3xl" />
          <p className="mt-5 max-w-[30ch] leading-relaxed text-mint/65">
            Creche diária, recreação, banho e passeios individuais. Cuidado sem pressa, com cafuné de verdade.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ember">Navegue</p>
          <ul className="grid gap-2.5">
            {[...NAV.slice(1), { label: 'Dúvidas', href: '#duvidas' }].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-mint/80 transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-ember">Onde e quando</p>
          <address className="grid gap-2.5 not-italic text-mint/80">
            <span>{BRAND.address}</span>
            <span>{BRAND.phoneDisplay}</span>
            {BRAND.hours.map((h) => (
              <span key={h.days}>
                {h.days} · {h.time}
              </span>
            ))}
          </address>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1320px] flex-col gap-2 border-t border-mint/15 py-6 text-sm text-mint/50 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Cafuné. Todos os direitos reservados.</p>
        <p>Feito com carinho e pelo de cachorro no teclado.</p>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[0.16em] select-none text-center font-serif-display text-[26vw] leading-[0.8] tracking-tight text-mint/[0.07]"
      >
        cafuné
      </p>
    </footer>
  )
}
