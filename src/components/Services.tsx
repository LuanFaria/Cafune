import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { Reveal } from './Reveal'
import { IMG } from '../data'

type Service = {
  n: string
  title: string
  blurb: string
  details: string[]
  price: string
  unit: string
  img: string
  alt: string
  pos: string
}

const SERVICES: Service[] = [
  {
    n: '01',
    title: 'Creche diária',
    blurb:
      'O dia todo em turma, com hora de brincar, hora de beber água e hora de dormir. Seu pet volta cansado e você volta pra casa tranquilo.',
    details: ['Turmas por porte e temperamento', 'Sesta em camas elevadas', 'Relatório do dia no WhatsApp'],
    price: 'a partir de R$ 85',
    unit: '/ dia',
    img: IMG.banhoDeSol,
    alt: 'Dois cães descansando em camas elevadas, um deles deitado no chão ao lado',
    pos: '55% 40%',
  },
  {
    n: '02',
    title: 'Recreação',
    blurb:
      'Meio período para gastar energia: circuito, bolinha, cabo de guerra e muita conversa de cachorro. Ótimo pra quem precisa socializar.',
    details: ['Brincadeiras dirigidas', 'Cuidador sempre junto', 'Água fresca e petisco'],
    price: 'a partir de R$ 55',
    unit: '/ período',
    img: IMG.fulana,
    alt: 'Cadela preta deitada no chão com adesivos de borboleta e estrelas na testa',
    pos: '55% 30%',
  },
  {
    n: '03',
    title: 'Banho',
    blurb:
      'Banho e secagem com produtos adequados ao pelo e à pele do seu pet. Sai cheiroso e, se ele deixar, de laçarote.',
    details: ['Shampoo conforme o pelo', 'Secagem cuidadosa', 'Escovação e limpeza de orelhas'],
    price: 'a partir de R$ 60',
    unit: '/ banho',
    img: IMG.macarena,
    alt: 'Cadela caramelo de orelhas em pé usando um laço rosa com brilhante',
    pos: '50% 25%',
  },
  {
    n: '04',
    title: 'Passeio individual',
    blurb:
      'Só o seu pet e um cuidador, no ritmo dele. Rota, duração e paradas combinadas com você — e foto no final.',
    details: ['30 ou 60 minutos', 'Um pet por passeio', 'Água e cuidado com o calor do chão'],
    price: 'a partir de R$ 40',
    unit: '/ 30 min',
    img: IMG.tutoraSpitz,
    alt: 'Tutora segurando um spitz alemão cor creme no colo, num parque ensolarado',
    pos: '58% 40%',
  },
]

export function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="servicos" className="relative bg-mint px-4 pb-24 pt-16 md:px-8 lg:px-12 lg:pb-36 lg:pt-24">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
        {/* Coluna esquerda — título + foto que acompanha o serviço em foco */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <Reveal>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-ember">O que a gente faz</p>
            <h2 className="font-serif-display text-[clamp(40px,5vw,78px)] leading-[0.98] tracking-tight">
              Quatro jeitos de <em className="text-ember">cuidar</em> do seu pet
            </h2>
          </Reveal>

          <div className="relative mt-10 hidden aspect-[4/4.6] overflow-hidden rounded-[2rem] bg-forest/10 lg:block">
            {SERVICES.map((s, i) => (
              <img
                key={s.title}
                src={s.img}
                alt={i === active ? s.alt : ''}
                aria-hidden={i !== active}
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                  i === active ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                }`}
                style={{ objectPosition: s.pos }}
              />
            ))}
            <span className="absolute left-5 top-5 rounded-full bg-mint px-4 py-1.5 font-serif-display text-lg text-forest">
              {SERVICES[active].title}
            </span>
          </div>
        </div>

        {/* Coluna direita — lista editorial */}
        <ol className="self-start border-t border-forest/20">
          {SERVICES.map((s, i) => {
            const isOpen = i === active
            return (
              <li key={s.title} className="border-b border-forest/20">
                <Reveal delay={i * 80}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-baseline gap-4 py-7 text-left md:gap-6"
                  >
                    <span className="w-8 shrink-0 text-sm font-semibold text-ember">{s.n}</span>
                    <span
                      className={`font-serif-display flex-1 text-[clamp(30px,3.6vw,54px)] leading-none tracking-tight transition-colors duration-500 ${
                        isOpen ? 'text-forest' : 'text-forest/45'
                      }`}
                    >
                      {s.title}
                    </span>
                    <ArrowUpRight
                      className={`size-7 shrink-0 self-center transition-all duration-500 ${
                        isOpen ? 'rotate-0 text-ember' : '-rotate-45 text-forest/40'
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-6 pb-9 pl-12 md:pl-14">
                        <img
                          src={s.img}
                          alt={s.alt}
                          loading="lazy"
                          className="aspect-[16/10] w-full rounded-2xl object-cover lg:hidden"
                          style={{ objectPosition: s.pos }}
                        />
                        <p className="max-w-[52ch] text-[17px] leading-relaxed text-forest/80">{s.blurb}</p>
                        <ul className="grid gap-2.5 text-sm text-forest/85 sm:grid-cols-2">
                          {s.details.map((d) => (
                            <li key={d} className="flex items-start gap-2.5">
                              <Check className="mt-0.5 size-4 shrink-0 text-ember" />
                              {d}
                            </li>
                          ))}
                        </ul>
                        <p className="flex items-baseline gap-2">
                          <span className="font-serif-display text-3xl">{s.price}</span>
                          <span className="text-sm text-forest/60">{s.unit}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
