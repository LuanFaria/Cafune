import { ArrowRight } from 'lucide-react'
import { Logo } from './Logo'
import { NAV } from '../data'
import { useScrolledPast } from '../hooks'

/** Barra flutuante que aparece depois que a hero sai da tela. */
export function StickyBar() {
  const visible = useScrolledPast(0.85)

  return (
    <div
      className={`fixed inset-x-0 top-3 z-50 mx-auto flex w-fit max-w-[calc(100vw-1.5rem)] items-center gap-5 rounded-full bg-white/90 py-2 pl-5 pr-2 shadow-[0_12px_30px_-12px_rgba(26,61,26,0.45)] ring-1 ring-forest/10 backdrop-blur transition-all duration-500 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-20 opacity-0'
      }`}
      aria-hidden={!visible}
    >
      <a href="#top" tabIndex={visible ? 0 : -1} aria-label="Voltar ao topo">
        <Logo className="text-xl" />
      </a>
      <nav className="hidden items-center gap-5 lg:flex" aria-label="Navegação rápida">
        {NAV.slice(1).map((item) => (
          <a
            key={item.href}
            href={item.href}
            tabIndex={visible ? 0 : -1}
            className="text-sm font-medium text-forest/70 transition-colors hover:text-forest"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a
        href="#contato"
        tabIndex={visible ? 0 : -1}
        className="group inline-flex items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ember-hover"
      >
        Agendar visita
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  )
}
