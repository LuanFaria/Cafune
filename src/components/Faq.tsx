import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from './Reveal'

const QUESTIONS = [
  {
    q: 'Quais vacinas o meu pet precisa ter?',
    a: 'Pedimos a carteira de vacinação em dia: múltipla (V8 ou V10), antirrábica e, para cães, a vacina contra gripe canina. Também precisamos do antipulgas e do vermífugo atualizados.',
  },
  {
    q: 'Como funciona a adaptação?',
    a: 'Na primeira visita o pet fica poucas horas, conhece os cuidadores e a turma aos poucos. Só depois vamos aumentando o tempo. Se ele precisar de mais dias para se sentir em casa, tudo bem.',
  },
  {
    q: 'Meu pet precisa se dar bem com outros cães?',
    a: 'Não precisa chegar sabendo. Observamos o comportamento na adaptação e montamos a turma por porte e temperamento. Pets que preferem ficar mais reservados têm espaço e atenção só para eles.',
  },
  {
    q: 'Preciso levar comida e camas?',
    a: 'Leve a ração do dia em um pote identificado, se ele come no horário do almoço. Camas, água e brinquedos são da casa — mas um paninho com o cheiro de casa é sempre bem-vindo.',
  },
  {
    q: 'Vocês avisam como foi o dia?',
    a: 'Sim. No fim da tarde enviamos um recado no WhatsApp com como o pet comeu, brincou e dormiu, e geralmente uma foto ou duas.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="duvidas" className="bg-mint px-4 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[5fr_7fr] lg:gap-24">
        <Reveal>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-ember">Dúvidas</p>
          <h2 className="font-serif-display text-[clamp(38px,4.6vw,68px)] leading-[1] tracking-tight">
            O que todo tutor <em className="text-ember">pergunta</em> antes da primeira vez
          </h2>
        </Reveal>

        <ul className="border-t border-forest/20">
          {QUESTIONS.map((item, i) => {
            const isOpen = open === i
            return (
              <li key={item.q} className="border-b border-forest/20">
                <Reveal delay={i * 60}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg font-semibold md:text-xl">{item.q}</span>
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isOpen ? 'rotate-45 border-ember bg-ember text-white' : 'border-forest/30 text-forest'
                      }`}
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[60ch] pb-7 leading-relaxed text-forest/75">{item.a}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
