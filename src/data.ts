/** Fotos enviadas — ficam em /public/images */
export const IMG = {
  tutoraGato: '/images/victoria.jpg',
  tutoraSpitz: '/images/victoria_segurando_cachorro.jpg',
  banhoDeSol: '/images/banho_de_sol.jpeg',
  fulana: '/images/fulana.jpeg',
  macarena: '/images/macarena.jpeg',
} as const

/** Dados de contato — troque pelos reais */
export const BRAND = {
  name: 'Cafuné',
  whatsapp: '5500000000000',
  phoneDisplay: '(00) 00000-0000',
  address: 'Rua Exemplo, 000 — Bairro, Cidade/UF',
  hours: [
    { days: 'Segunda a sexta', time: '7h30 às 19h' },
    { days: 'Sábado', time: '8h às 14h' },
  ],
}

export const NAV = [
  { label: 'Início', href: '#top' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Rotina', href: '#rotina' },
  { label: 'Planos', href: '#planos' },
  { label: 'Contato', href: '#contato' },
]

export function waLink(text: string) {
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`
}
