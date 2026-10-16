# Cafuné — creche & recreação pet

Vite + React + TypeScript + Tailwind CSS v4 + Lucide React.

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # tsc + vite build
```

## O que trocar antes de publicar

Tudo que é dado de negócio está em `src/data.ts` (WhatsApp, telefone, endereço, horários) e nos
arrays no topo de cada seção:

- **Preços** — `Services.tsx` (a partir de R$ 85 / 55 / 60 / 40) e `Plans.tsx` (R$ 85 / 69 / 59), além do cartão da hero.
- **Números da hero** — "320+ pets na turma" e "4,9 nota dos tutores" (`Hero.tsx`) são exemplos.
- **Políticas** — vacinas exigidas, adaptação e horários (`Faq.tsx`, `Routine.tsx`, `data.ts`).
- **Nomes** — Fulana e Macarena vêm do nome dos arquivos de foto (`Gallery.tsx`).

## Fotos

`public/images/` — as 5 fotos enviadas, usadas na hero, serviços, rotina, "como cuidamos" e galeria.
