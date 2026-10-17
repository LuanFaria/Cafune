const ITEMS = [
  'Creche diária',
  'Recreação em turma',
  'Banho e secagem',
  'Passeio individual',
  'Água fresca o dia todo',
  'Sexta com cafuné',
]

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center gap-8 pr-8 md:gap-12 md:pr-12">
      {ITEMS.map((text) => (
        <li key={text} className="flex items-center gap-8 whitespace-nowrap md:gap-12">
          <span className="font-serif-display text-3xl leading-none md:text-5xl">{text}</span>
          <svg viewBox="0 0 48 48" className="size-6 shrink-0 md:size-8" aria-hidden="true">
            <g fill="#1a3d1a">
              <ellipse cx="24" cy="31" rx="9" ry="7" />
              <ellipse cx="13.5" cy="23.5" rx="3.2" ry="4.4" transform="rotate(-20 13.5 23.5)" />
              <ellipse cx="19.5" cy="15.5" rx="3.2" ry="4.6" transform="rotate(-8 19.5 15.5)" />
              <ellipse cx="28.5" cy="15.5" rx="3.2" ry="4.6" transform="rotate(8 28.5 15.5)" />
              <ellipse cx="34.5" cy="23.5" rx="3.2" ry="4.4" transform="rotate(20 34.5 23.5)" />
            </g>
          </svg>
        </li>
      ))}
    </ul>
  )
}

export function Marquee() {
  return (
    <div className="relative z-20 overflow-x-clip bg-mint py-5 md:py-7">
      <div className="-ml-[2%] w-[104%] -rotate-[1.4deg] bg-ember py-4 text-forest md:py-5">
        <div className="marquee-track flex w-max">
          <Row />
          <Row hidden />
        </div>
      </div>
    </div>
  )
}
