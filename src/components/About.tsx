import { ArrowRight } from 'lucide-react'
import { Reveal } from './Reveal'
import { IMG } from '../data'

const PRINCIPLES = [
  {
    n: 'i.',
    title: 'Turmas pequenas',
    text: 'Poucos pets por cuidador. Dá pra reparar em quem come devagar, em quem precisa de colo e em quem só quer ficar quieto.',
  },
  {
    n: 'ii.',
    title: 'Adaptação gradual',
    text: 'A primeira visita é curta e as apresentações são feitas aos poucos. Ninguém é jogado no meio da turma.',
  },
  {
    n: 'iii.',
    title: 'Saúde em dia',
    text: 'Pedimos carteira de vacinação atualizada e antiparasitário. É o que mantém todo mundo seguro e feliz.',
  },
]

export function About() {
  return (
    <section id="cuidado" className="grain relative overflow-hidden bg-cream px-4 py-24 md:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-[1320px] items-center gap-16 lg:grid-cols-[5fr_6fr] lg:gap-24">
        <Reveal className="relative mx-auto w-full max-w-[460px] lg:mx-0">
          <div className="relative -rotate-2">
            <img
              src={IMG.tutoraGato}
              alt="Tutora de suéter bege segurando no colo um gato de pelo tigrado, no parque"
              loading="lazy"
              className="aspect-[3/4] w-full rounded-[1.75rem] object-cover shadow-[0_30px_60px_-25px_rgba(26,61,26,0.45)]"
              style={{ objectPosition: '50% 25%' }}
            />
            {/* fita adesiva */}
            <span
              aria-hidden="true"
              className="absolute -top-4 left-1/2 h-8 w-28 -translate-x-1/2 rotate-3 bg-ember/70 mix-blend-multiply"
            />
          </div>
          <span className="absolute -bottom-6 -right-2 grid size-32 rotate-12 place-items-center rounded-full bg-berry p-4 text-center font-serif-display text-xl leading-[1.05] text-white shadow-lg md:-right-8 md:size-36">
            tudo no ritmo do pet
          </span>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-ember">Como a gente cuida</p>
            <h2 className="font-serif-display text-[clamp(38px,4.6vw,70px)] leading-[1] tracking-tight">
              Cuidado sem pressa, com gente que{' '}
              <em className="text-ember">gosta de bicho</em>
            </h2>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-forest/80">
              A Cafuné nasceu de uma ideia simples: deixar o pet em um lugar deve ser tão tranquilo quanto deixar com
              alguém da família. Cachorro, gato, filhote ou veterano — cada um tem o seu jeito, e a gente começa
              aprendendo isso.
            </p>
          </Reveal>

          <dl className="mt-12 border-t border-forest/20">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="grid grid-cols-[3.5rem_1fr] gap-x-4 border-b border-forest/20 py-6 md:grid-cols-[5rem_1fr]">
                  <dt className="font-serif-display text-4xl italic leading-none text-ember md:text-5xl">{p.n}</dt>
                  <dd>
                    <p className="text-xl font-semibold">{p.title}</p>
                    <p className="mt-1.5 max-w-[48ch] leading-relaxed text-forest/75">{p.text}</p>
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={120}>
            <a
              href="#contato"
              className="group mt-10 inline-flex items-center gap-3 font-semibold text-forest underline decoration-ember decoration-2 underline-offset-[6px] hover:text-forest-hover"
            >
              Marque uma visita e conheça o espaço
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
