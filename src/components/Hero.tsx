import type { CSSProperties, ReactNode } from 'react'
import { ArrowRight, ArrowUpRight, Play, Plus, Star } from 'lucide-react'
import { Header } from './Header'
import { PetAvatar } from './PetAvatar'
import { IMG } from '../data'

const LINES = [
  ['Seu', 'pet', 'feliz'],
  ['o', 'dia', 'inteiro'],
]

/* ------------------------------------------------------------------ */
/* Peças compartilhadas                                                */
/* ------------------------------------------------------------------ */

function Headline({ className, style }: { className: string; style?: CSSProperties }) {
  let n = 0
  return (
    <h1
      className={`font-serif-display tracking-tight leading-[0.95] text-forest ${className}`}
      style={style}
    >
      {LINES.map((line, li) => (
        <span key={li} className="block">
          {line.map((word) => {
            const delay = 200 + n++ * 80 // 200 → 600ms
            return (
              <span
                key={`${li}-${word}`}
                className="animate-word-pop mr-[0.22em] inline-block last:mr-0"
                style={{ animationDelay: `${delay}ms` }}
              >
                {word}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}

function PetsStat() {
  return (
    <div className="flex items-center gap-3 text-white">
      <div className="flex -space-x-2.5">
        <PetAvatar src={IMG.macarena} pos="50% 28%" className="size-10 border-2 border-white" />
        <PetAvatar src={IMG.fulana} pos="54% 41%" className="size-10 border-2 border-white" />
        <span className="grid size-10 place-items-center rounded-full border-2 border-white bg-forest-hover">
          <Plus size={18} />
        </span>
      </div>
      <div className="leading-tight">
        <div className="font-serif-display text-[clamp(24px,2.4vw,38px)]">320+</div>
        <div className="text-[clamp(11px,0.9vw,13px)] opacity-90">pets na turma</div>
      </div>
    </div>
  )
}

function RatingStat() {
  return (
    <div className="flex items-center gap-3 text-white">
      <div className="leading-tight">
        <div className="flex items-center gap-1.5 font-serif-display text-[clamp(24px,2.4vw,38px)]">
          4,9
          <Star className="size-[0.8em] fill-ember text-ember" />
        </div>
        <div className="text-[clamp(11px,0.9vw,13px)] opacity-90">nota dos tutores</div>
      </div>
    </div>
  )
}

function CtaPill({ className = '' }: { className?: string }) {
  return (
    <a
      href="#contato"
      className={`group inline-flex items-center gap-2 rounded-full bg-ember font-semibold text-white transition-colors hover:bg-ember-hover ${className}`}
    >
      Agendar visita
      <ArrowRight className="size-[1.1em] transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}

type PanelProps = {
  src: string
  alt: string
  flex: string
  delay: string
  pos?: string
  maxHeight?: string
  aspect?: string
  radius?: string
  children?: ReactNode
}

function Panel({ src, alt, flex, delay, pos = '50% 20%', maxHeight, aspect = '', radius = '', children }: PanelProps) {
  return (
    <div className={`relative min-w-0 animate-photo-reveal ${flex} ${delay}`}>
      <img
        src={src}
        alt={alt}
        className={`block h-auto w-full object-cover ${aspect} ${radius}`}
        style={{ maxHeight, objectPosition: pos }}
        loading="eager"
        decoding="async"
      />
      {children && (
        <>
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-forest/75 to-transparent ${radius}`}
          />
          {children}
        </>
      )}
    </div>
  )
}

const overlayBottom: CSSProperties = { bottom: 'clamp(20px, 4vh, 50px)' }

type Variant = 'desktop' | 'tablet' | 'mobile'

function BottomPhotos({ variant }: { variant: Variant }) {
  const isDesktop = variant === 'desktop'
  const isTablet = variant === 'tablet'
  const isMobile = variant === 'mobile'

  const sideMax = isDesktop ? 'min(48vh, 38vw)' : isTablet ? '60vh' : undefined
  const centerMax = isDesktop ? 'min(57vh, 46vw)' : isTablet ? '75vh' : undefined
  const sideAspect = isTablet ? 'aspect-[3/5]' : isMobile ? 'aspect-[3/4]' : ''
  const centerAspect = isTablet ? 'aspect-[3/5.6]' : isMobile ? 'aspect-[3/5]' : ''
  const sideRadius = isMobile ? 'rounded-t-2xl' : 'rounded-t-[1.75rem]'
  const centerRadius = isMobile ? 'rounded-t-[3rem]' : 'rounded-t-[clamp(60px,12vw,220px)]'

  const showOverlays = isDesktop

  return (
    <div className={isMobile ? 'flex items-end px-0' : 'absolute inset-x-0 bottom-0 z-10 flex items-end'}>
      <Panel
        src={IMG.fulana}
        alt="Cadela preta deitada, com adesivos de borboleta e estrelas na testa"
        flex="flex-1"
        delay="delay-800"
        pos="55% 30%"
        maxHeight={sideMax}
        aspect={sideAspect}
        radius={sideRadius}
      >
        {showOverlays && (
          <div className="absolute left-[clamp(14px,1.6vw,28px)] animate-scale-in delay-1000" style={overlayBottom}>
            <PetsStat />
          </div>
        )}
      </Panel>

      <Panel
        src={IMG.tutoraGato}
        alt="Tutora de suéter bege segurando no colo um gato de pelo tigrado, no parque"
        flex="flex-[1.265]"
        delay="delay-600"
        pos="50% 18%"
        maxHeight={centerMax}
        aspect={centerAspect}
        radius={centerRadius}
      >
        {(isDesktop || isTablet) && (
          <div
            className="absolute inset-x-0 flex animate-scale-in flex-col items-center gap-[clamp(10px,1.2vh,16px)] px-4 text-center delay-1100"
            style={overlayBottom}
          >
            <p className="font-serif-display text-[clamp(22px,2.5vw,40px)] leading-[1.02] text-white">
              Um dia inteiro
              <br />
              de cuidado e cafuné
            </p>
            <CtaPill className="px-[clamp(16px,1.6vw,26px)] py-[clamp(9px,0.9vw,14px)] text-[clamp(12px,1vw,15px)]" />
          </div>
        )}
      </Panel>

      <Panel
        src={IMG.macarena}
        alt="Cadela caramelo de orelhas em pé, com laço rosa no pescoço"
        flex="flex-1"
        delay="delay-900"
        pos="50% 25%"
        maxHeight={sideMax}
        aspect={sideAspect}
        radius={sideRadius}
      >
        {showOverlays && (
          <div
            className="absolute right-[clamp(14px,1.6vw,28px)] animate-scale-in text-right delay-1200"
            style={overlayBottom}
          >
            <RatingStat />
          </div>
        )}
      </Panel>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Cartões laterais                                                    */
/* ------------------------------------------------------------------ */

function ServiceCard({ className, style }: { className: string; style?: CSSProperties }) {
  return (
    <a href="#servicos" className={`group z-[6] block ${className}`} style={style}>
      <div className="relative aspect-[260/257] overflow-hidden rounded-2xl bg-white">
        <img
          src={IMG.banhoDeSol}
          alt="Dois cães descansando em camas elevadas, no banho de sol da creche"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: '55% 40%' }}
        />
        <span className="absolute bottom-2 right-2 grid size-[clamp(30px,2.6vw,40px)] place-items-center rounded-full bg-forest text-white transition-colors group-hover:bg-forest-hover">
          <ArrowUpRight className="size-[55%]" />
        </span>
      </div>
      <p className="mt-2.5 text-[clamp(12px,1vw,15px)] text-gray-700">Creche diária</p>
      <p className="text-[clamp(13px,1.1vw,17px)] font-semibold text-forest">a partir de R$ 85</p>
    </a>
  )
}

function RoutineCard({ className, style }: { className: string; style?: CSSProperties }) {
  return (
    <a href="#rotina" className={`group z-[6] block ${className}`} style={style}>
      <div className="relative aspect-[177/287] overflow-hidden rounded-2xl bg-white">
        <img
          src={IMG.tutoraSpitz}
          alt="Tutora segurando um spitz alemão cor creme no colo, num parque ensolarado"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: '58% 40%' }}
        />
        <span className="absolute inset-x-0 bottom-3 mx-auto grid size-[clamp(36px,3vw,46px)] place-items-center rounded-full bg-forest text-white transition-colors group-hover:bg-forest-hover">
          <Play className="size-[40%] fill-white" />
        </span>
      </div>
      <p className="mt-2.5 text-center text-[clamp(10px,0.85vw,13px)] leading-snug text-gray-700">
        Veja como é um dia na Cafuné
      </p>
    </a>
  )
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export function Hero() {
  return (
    <div
      id="top"
      className="flex min-h-[100svh] flex-col bg-mint lg:h-screen lg:min-h-0 lg:overflow-hidden"
    >
      <Header />

      <section className="relative flex flex-1 flex-col overflow-hidden">
        {/* ---------- Desktop (lg+) ---------- */}
        <div className="relative hidden flex-1 lg:block">
          <div
            className="absolute inset-x-0 top-0 z-[5] px-12 text-center"
            style={{ paddingTop: 'clamp(1.5rem, 9.6vh, 5.4rem)' }}
          >
            <Headline className="text-[clamp(48px,min(7.5vw,12vh),110px)]" />
          </div>

          <ServiceCard
            className="absolute animate-slide-in-left delay-600"
            style={{ top: 50, left: 48, width: 'clamp(160px, 14vw, 260px)' }}
          />
          <RoutineCard
            className="absolute animate-slide-in-right delay-700"
            style={{ top: 50, right: 48, width: 'clamp(120px, 10vw, 177px)' }}
          />

          <BottomPhotos variant="desktop" />
        </div>

        {/* ---------- Tablet (md → lg) ---------- */}
        <div className="relative hidden flex-1 md:block lg:hidden">
          <div className="absolute inset-x-0 top-0 z-[5] px-12 pt-[5.4rem] text-center">
            <Headline className="text-6xl" />
          </div>

          <ServiceCard
            className="absolute animate-slide-in-left delay-600"
            style={{ top: 80, left: 16, width: 160 }}
          />
          <RoutineCard
            className="absolute animate-slide-in-right delay-700"
            style={{ top: 80, right: 16, width: 120 }}
          />

          <BottomPhotos variant="tablet" />
        </div>

        {/* ---------- Mobile (< md) ---------- */}
        <div className="flex flex-1 flex-col md:hidden">
          <div className="px-4 pt-3 text-center">
            <Headline className="text-[36px]" />
            <p className="mx-auto mt-3 max-w-[32ch] text-sm leading-relaxed text-gray-600 animate-fade-up delay-500">
              Creche diária, recreação, banho e passeios individuais — com cafuné de verdade.
            </p>
            <div className="mt-4 animate-fade-up delay-600">
              <CtaPill className="px-6 py-3 text-sm" />
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 px-4">
            <ServiceCard className="relative flex-[1.15] animate-slide-in-left delay-700" />
            <RoutineCard className="relative flex-1 animate-slide-in-right delay-800" />
          </div>

          <div className="mx-4 mt-5 flex items-center justify-between rounded-2xl bg-forest px-4 py-3 animate-scale-in delay-900">
            <PetsStat />
            <span className="h-9 w-px bg-white/25" aria-hidden="true" />
            <RatingStat />
          </div>

          <div className="mt-auto pt-6">
            <BottomPhotos variant="mobile" />
          </div>
        </div>
      </section>
    </div>
  )
}
