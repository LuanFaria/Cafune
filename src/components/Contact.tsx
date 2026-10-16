import { useState } from 'react'
import type { FormEvent } from 'react'
import { Clock, MapPin, Phone, Send } from 'lucide-react'
import { Reveal } from './Reveal'
import { BRAND, waLink } from '../data'

const SIZES = ['Pequeno', 'Médio', 'Grande']
const SERVICES = ['Creche diária', 'Recreação', 'Banho', 'Passeio individual']

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? 'border-forest bg-forest text-mint'
          : 'border-forest/25 bg-white text-forest hover:border-forest/60'
      }`}
    >
      {children}
    </button>
  )
}

export function Contact() {
  const [name, setName] = useState('')
  const [pet, setPet] = useState('')
  const [size, setSize] = useState('')
  const [services, setServices] = useState<string[]>([])
  const [note, setNote] = useState('')

  const toggleService = (s: string) =>
    setServices((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]))

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const parts = [
      `Olá! Meu nome é ${name || '(nome)'} e o meu pet se chama ${pet || '(nome do pet)'}${size ? `, porte ${size.toLowerCase()}` : ''}.`,
      services.length ? `Tenho interesse em: ${services.join(', ')}.` : '',
      note ? note : '',
      'Gostaria de agendar uma visita.',
    ].filter(Boolean)
    window.open(waLink(parts.join(' ')), '_blank', 'noopener,noreferrer')
  }

  const field =
    'w-full rounded-2xl border border-forest/20 bg-white px-4 py-3.5 text-forest placeholder:text-forest/40 focus:border-forest focus:outline-none'

  return (
    <section id="contato" className="relative bg-mint px-4 pb-24 pt-4 md:px-8 lg:px-12 lg:pb-36">
      <div className="mx-auto grid max-w-[1320px] gap-14 rounded-[2.25rem] bg-forest p-6 text-mint md:p-12 lg:grid-cols-[5fr_6fr] lg:gap-20 lg:p-16">
        <Reveal>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-ember">Visita</p>
          <h2 className="font-serif-display text-[clamp(40px,5vw,76px)] leading-[0.98] tracking-tight">
            Venha <em className="text-ember">cheirar</em> o espaço
          </h2>
          <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-mint/75">
            Conte um pouco sobre o seu pet e a gente combina uma visita, sem compromisso. A conversa continua no
            WhatsApp.
          </p>

          <ul className="mt-10 grid gap-5 text-[15px]">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-ember" />
              <span>{BRAND.address}</span>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-ember" />
              <span>{BRAND.phoneDisplay}</span>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-0.5 size-5 shrink-0 text-ember" />
              <span className="grid gap-1">
                {BRAND.hours.map((h) => (
                  <span key={h.days}>
                    {h.days} · <span className="text-mint/65">{h.time}</span>
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="grid gap-5 rounded-[1.75rem] bg-mint p-6 text-forest md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                Seu nome
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como podemos te chamar?"
                  className={field}
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Nome do pet
                <input
                  required
                  value={pet}
                  onChange={(e) => setPet(e.target.value)}
                  placeholder="Quem vem brincar?"
                  className={field}
                />
              </label>
            </div>

            <fieldset className="grid gap-3">
              <legend className="mb-1 text-sm font-semibold">Porte</legend>
              <div className="flex flex-wrap gap-2">
                {SIZES.map((s) => (
                  <Chip key={s} active={size === s} onClick={() => setSize(size === s ? '' : s)}>
                    {s}
                  </Chip>
                ))}
              </div>
            </fieldset>

            <fieldset className="grid gap-3">
              <legend className="mb-1 text-sm font-semibold">O que você procura?</legend>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <Chip key={s} active={services.includes(s)} onClick={() => toggleService(s)}>
                    {s}
                  </Chip>
                ))}
              </div>
            </fieldset>

            <label className="grid gap-2 text-sm font-semibold">
              Alguma observação?
              <textarea
                rows={3}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Idade, manias, alergias, medo de trovão…"
                className={`${field} resize-none`}
              />
            </label>

            <button
              type="submit"
              className="group mt-1 inline-flex items-center justify-center gap-3 rounded-full bg-ember px-7 py-4 font-semibold text-white transition-colors hover:bg-ember-hover"
            >
              Continuar no WhatsApp
              <Send className="size-5 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
