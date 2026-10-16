type Props = {
  src: string
  /** background-position — usado para centralizar o focinho no recorte redondo */
  pos?: string
  size?: string
  className?: string
}

/** Recorte circular de uma foto (zoom no rosto do pet). */
export function PetAvatar({ src, pos = '50% 35%', size = '320%', className = '' }: Props) {
  return (
    <span
      aria-hidden="true"
      className={`block shrink-0 rounded-full bg-white bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${src})`, backgroundSize: size, backgroundPosition: pos }}
    />
  )
}
