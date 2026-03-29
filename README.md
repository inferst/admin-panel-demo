# Admin Panel Demo

https://inferst.github.io/admin-panel-demo

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React Query
- Zustand
- React Hook Form
- Zod

## Local Development

Используется `pnpm`.

```bash
pnpm install
pnpm dev
```

## Production Build

```bash
pnpm build
pnpm preview
```

## Checks

```bash
pnpm lint
pnpm build
```

## Auth Storage Note

Токены сохраняются на клиенте. Это не безопасно.
Предпочтительно хранить токены в HttpOnly cookie и выставлять с сервера
