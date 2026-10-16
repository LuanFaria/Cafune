import type { CSSProperties } from 'react'
import { Reveal } from './Reveal'
import { IMG } from '../data'

const POLAROIDS = [
  {
    src: IMG.fulana,
    alt: 'Fulana, cadela preta, deitada com adesivos de borboleta e estrelas na testa',
    name: 'Fulana',
    note: 'Chegou de adesivo e saiu de celebridade.',
    rotate: '-3deg',
    offset: 'md:mt-2',
    pos: '55% 30%',
  },
  {
    src: IMG.macarena,
    alt: 'Macarena, cadela caramelo de orelhas em pé, com laço rosa',
    name: 'Macarena',
    note: 'Orelha em pé, laço no pescoço, pose de capa.',
    rotate: '2.5deg',
    offset: 'md:mt-16',
    pos: '50% 25%',
  },
  {
    src: IMG.banhoDeSol,
    alt: 'Dois cães descansando em camas elevadas no banho de sol',
    name: 'Banho de sol',
    note: 'Hora de esticar as patas e fingir que não está dormindo.',
    rotate: '-1.5deg',
    offset: 'md:mt-6',
    pos: '62% 40%',
  },
  {
    src: IMG.tutoraSpitz,
    alt: 'Tutora segurando um spitz alemão cor creme no parque',
    name: 'Dia de parque',
    note: 'Passeio bom é o que termina com colo.',
    rotate: '3deg',
    offset: 'md:mt-20',
    pos: '58% 40%',
  },
]

export function Gallery() {
  return (
    <section id="turma" className="relative overflow-hidden bg-mint px-4 py-24 md:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1320px]">
        <Reveal className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-ember">A turma</p>
            <h2 className="font-serif-display text-[clamp(40px,5.4vw,80px)] leading-[0.98] tracking-tight">
              Quem passa por aqui <em className="text-ember">volta abanando</em>
            </h2>
          </div>
          <p className="max-w-[36ch] leading-relaxed text-forest/75">
            Alguns rostos da casa. Cada pet tem nome, história e uma mania que a gente aprende de cor.
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {POLAROIDS.map((p, i) => (
            <li key={p.name} className={p.offset}>
              <Reveal delay={i * 110}>
                <figure
                  className="rotate-[var(--r)] bg-white p-3 pb-5 shadow-[0_24px_40px_-24px_rgba(26,61,26,0.5)] transition-all duration-500 ease-out hover:rotate-0 hover:scale-[1.03]"
                  style={{ '--r': p.rotate } as CSSProperties}
                >
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                    style={{ objectPosition: p.pos }}
                  />
                  <figcaption className="mt-4 px-1">
                    <p className="font-serif-display text-2xl leading-none">{p.name}</p>
                    <p className="mt-1.5 text-sm leading-snug text-forest/65">{p.note}</p>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
