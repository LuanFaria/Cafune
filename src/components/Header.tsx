import { useState } from 'react'
import { CalendarCheck, Menu, MessageCircle, X } from 'lucide-react'
import { Logo } from './Logo'
import { PetAvatar } from './PetAvatar'
import { IMG, NAV, waLink } from '../data'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-30 shrink-0 animate-fade-in delay-100">
      <div className="flex items-center justify-between px-4 py-4 md:px-8 lg:px-12">
        <a href="#top" aria-label="Cafuné — início" className="rounded-lg">
          <Logo className="text-[22px] md:text-[26px]" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-forest ${
                i === 0 ? 'text-gray-900' : 'text-gray-600'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 md:gap-3">
          <a
            href={waLink('Olá! Quero saber mais sobre a creche.')}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar no WhatsApp"
            className="hidden size-10 place-items-center rounded-full border border-forest/25 text-forest transition hover:bg-forest hover:text-mint sm:grid"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href="#contato"
            aria-label="Agendar uma visita"
            className="grid size-10 place-items-center rounded-full bg-ember text-white transition hover:bg-ember-hover"
          >
            <CalendarCheck size={18} />
          </a>
          <PetAvatar
            src={IMG.macarena}
            pos="50% 28%"
            className="size-10 border-2 border-white shadow-sm"
          />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="grid size-10 place-items-center rounded-full border border-forest/25 text-forest md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Menu mobile"
          className="absolute inset-x-3 top-full z-40 rounded-3xl bg-white p-3 shadow-xl ring-1 ring-forest/10 md:hidden"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 font-serif-display text-2xl text-forest active:bg-mint"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
