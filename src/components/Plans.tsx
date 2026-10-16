import { ArrowRight, Check } from 'lucide-react'
import { Reveal } from './Reveal'
import { waLink } from '../data'

type Plan = {
  name: string
  tagline: string
  price: string
  unit: string
  items: string[]
  featured?: boolean
}

const PLANS: Plan[] = [
  {
    name: 'Avulso',
    tagline: 'Pra quando der vontade (ou aperto).',
    price: 'R$ 85',
    unit: 'por diária',
    items: ['Recreação e sesta incluídas', 'Sem fidelidade', 'Agende com 1 dia de antecedência'],
  },
  {
    name: 'Turminha',
    tagline: 'Três dias por semana, sempre os mesmos amigos.',
    price: 'R$ 69',
    unit: 'por diária',
    items: ['Dias fixos na semana', '1 banho por mês incluso', 'Prioridade em feriados'],
    featured: true,
  },
  {
    name: 'Rotina completa',
    tagline: 'De segunda a sexta. Pet de casa, na nossa casa.',
    price: 'R$ 59',
    unit: 'por diária',
    items: ['Banho quinzenal incluso', 'Relatório diário no WhatsApp', 'Passeio individual com desconto'],
  },
]

function Notch({ side }: { side: 'left' | 'right' }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute top-1/2 size-8 -translate-y-1/2 rounded-full bg-cream ${
        side === 'left' ? '-left-4' : '-right-4'
      }`}
    />
  )
}

export function Plans() {
  return (
    <section id="planos" className="grain relative overflow-hidden bg-cream px-4 pb-24 pt-8 md:px-8 lg:px-12 lg:pb-36">
      <div className="mx-auto max-w-[1320px]">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-ember">Pacotes</p>
          <h2 className="font-serif-display text-[clamp(40px,5.2vw,78px)] leading-[0.98] tracking-tight">
            Escolha o <em className="text-ember">ritmo</em> da semana
          </h2>
          <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-forest/75">
            Quanto mais o seu pet vem, mais a diária fica leve. Todos os pacotes começam com um dia de adaptação.
          </p>
        </Reveal>

        <ul className="grid gap-10 md:grid-cols-3 md:items-stretch">
          {PLANS.map((plan, i) => (
            <li key={plan.name} className={plan.featured ? 'md:-translate-y-5' : ''}>
              <Reveal delay={i * 100} className="h-full">
                <article
                  className={`relative flex h-full flex-col rounded-[1.75rem] shadow-[0_26px_44px_-28px_rgba(26,61,26,0.55)] ${
                    plan.featured ? 'bg-forest text-mint' : 'bg-white text-forest'
                  }`}
                >
                  <div className="p-8 pb-10">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-serif-display text-4xl leading-none">{plan.name}</h3>
                      {plan.featured && (
                        <span className="rotate-3 rounded-full bg-ember px-3 py-1 text-xs font-semibold text-white">
                          mais pedido
                        </span>
                      )}
                    </div>
                    <p className={`mt-3 max-w-[30ch] ${plan.featured ? 'text-mint/70' : 'text-forest/65'}`}>
                      {plan.tagline}
                    </p>
                  </div>

                  {/* picote do ingresso */}
                  <div className="relative">
                    <div
                      className={`mx-8 border-t-2 border-dashed ${plan.featured ? 'border-mint/30' : 'border-forest/20'}`}
                    />
                    <Notch side="left" />
                    <Notch side="right" />
                  </div>

                  <div className="flex flex-1 flex-col p-8 pt-10">
                    <p className="flex items-baseline gap-2">
                      <span className="font-serif-display text-6xl leading-none">{plan.price}</span>
                      <span className={`text-sm ${plan.featured ? 'text-mint/65' : 'text-forest/60'}`}>
                        {plan.unit}
                      </span>
                    </p>
                    <ul className="mt-7 grid gap-3 text-[15px]">
                      {plan.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check className="mt-0.5 size-4 shrink-0 text-ember" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-10">
                      <a
                        href={waLink(`Olá! Tenho interesse no pacote "${plan.name}" da Cafuné.`)}
                        target="_blank"
                        rel="noreferrer"
                        className={`group flex items-center justify-between rounded-full px-6 py-4 font-semibold transition-colors ${
                          plan.featured
                            ? 'bg-ember text-white hover:bg-ember-hover'
                            : 'bg-forest text-mint hover:bg-forest-hover'
                        }`}
                      >
                        Quero esse
                        <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
