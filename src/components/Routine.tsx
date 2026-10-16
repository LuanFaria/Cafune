import { Reveal } from './Reveal'
import { IMG } from '../data'

const DAY: { time: string; title: string; text: string }[] = [
  {
    time: '07:30',
    title: 'Chegada e cafuné',
    text: 'Recepção sem pressa. O seu pet chega, cheira tudo e se despede de você com calma.',
  },
  {
    time: '09:00',
    title: 'Recreação em turma',
    text: 'Circuito, bolinha e socialização, sempre com cuidador por perto.',
  },
  {
    time: '11:00',
    title: 'Água, petisco e banho de sol',
    text: 'Pausa à sombra, camas elevadas e petisco pra quem merece (todo mundo).',
  },
  {
    time: '12:30',
    title: 'Almoço',
    text: 'Ração que você trouxe, no horário combinado e cada um no seu pote.',
  },
  {
    time: '13:30',
    title: 'Sesta',
    text: 'Luz baixa, silêncio e cama macia. Dormir também é parte da brincadeira.',
  },
  {
    time: '15:30',
    title: 'Brincadeira livre',
    text: 'A segunda rodada de energia: pique, cabo de guerra e água fresca.',
  },
  {
    time: '17:30',
    title: 'Escovação e relatório',
    text: 'Pelo em ordem e um recado no WhatsApp contando como foi o dia.',
  },
  {
    time: '18:30',
    title: 'Hora de ir pra casa',
    text: 'Retirada até as 19h. Pet cansado, tutor tranquilo.',
  },
]

export function Routine() {
  return (
    <section id="rotina" className="relative bg-forest px-4 py-24 text-mint md:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1320px]">
        <Reveal className="mb-14 max-w-3xl lg:mb-20">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-ember">A rotina</p>
          <h2 className="font-serif-display text-[clamp(42px,6vw,92px)] leading-[0.95] tracking-tight">
            Um dia na <em className="text-ember">Cafuné</em>
          </h2>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-24">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <figure>
                <div className="aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-mint/10">
                  <img
                    src={IMG.tutoraSpitz}
                    alt="Tutora segurando um spitz alemão cor creme no colo, num parque ensolarado"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: '58% 40%' }}
                  />
                </div>
                <figcaption className="mt-5 max-w-[34ch] font-serif-display text-2xl italic leading-snug text-mint/90">
                  O passeio de fim de tarde é sagrado.
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <ol className="relative border-l border-mint/25 pl-8 md:pl-12">
            {DAY.map((item, i) => (
              <li key={item.time} className="relative pb-12 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[41px] top-3 size-[18px] rounded-full border-[5px] border-forest bg-ember ring-1 ring-mint/30 md:-left-[57px]"
                />
                <Reveal delay={(i % 3) * 70}>
                  <p className="font-serif-display text-5xl leading-none text-ember md:text-6xl">{item.time}</p>
                  <h3 className="mt-3 text-xl font-semibold md:text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-[46ch] leading-relaxed text-mint/70">{item.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
