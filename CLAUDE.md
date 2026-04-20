# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

UIGen is an AI-powered React component generator with live preview. Users describe UI components in a chat interface; Claude generates the code using structured tool calls; the result is previewed in a sandboxed iframe. Projects and messages are persisted to SQLite via Prisma.

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Lint
npm run lint

# Tests (all)
npm run test

# Tests (single file)
npx vitest run src/components/chat/__tests__/ChatInterface.test.tsx

# Prisma
npx prisma migrate dev        # apply migrations
npx prisma studio             # open DB browser
npx prisma generate           # regenerate client after schema changes
```

Environment variables required: `ANTHROPIC_API_KEY`, `JWT_SECRET` (see `.env`).  
The app runs without an API key — `lib/provider.ts` falls back to a `MockLanguageModel` that returns static JSX.

## Architecture

### Routing & Pages
- `/` — home page; redirects authenticated users to their most recent project
- `/[projectId]` — project workspace (Server Component); loads project server-side
- `/api/chat` — streaming AI endpoint (POST); accepts `messages`, `files`, `projectId`; persists to DB on stream completion

### Data Layer
- **Prisma + SQLite**: two models — `User` (email/password) and `Project` (stores messages and virtual FS as JSON strings in `messages` and `data` fields)
- **Server Actions** (`src/actions/`): `signUp`, `signIn`, `signOut`, `getUser`, `createProject`, `getProject`, `getProjects` — all use `"use server"` and access Prisma directly
- No client-side data-fetching library; data flows from server actions and Vercel AI SDK's `useChat`

### Authentication
- JWT stored in httpOnly cookies (7-day expiry), signed with `JWT_SECRET` via `jose`
- Passwords hashed with `bcrypt` (10 rounds)
- Session verification in `src/middleware.ts`; helper `getSession`/`verifySession` in `lib/auth.ts`

### AI Integration
- Model: `claude-haiku-4-5` via `@ai-sdk/anthropic` + Vercel AI SDK `streamText`
- Prompt caching enabled (ephemeral cache control on system message)
- AI edits files via two tools:
  - `str_replace_editor` — create file, str_replace, insert operations
  - `file_manager` — rename and delete operations
- Tool implementations live in `lib/tools/`; system prompt in `lib/prompts/generation.tsx`

### Virtual File System
- `lib/file-system.ts` exports `VirtualFileSystem` — an in-memory Map-based store, not disk I/O
- Serializes to/from plain objects for DB persistence
- Exposed to the UI via `FileSystemContext` (`lib/contexts/file-system-context.tsx`)
- AI tool calls in `/api/chat` mutate a deserialized instance, then the serialized result is saved back to the project's `data` field

### Component Preview
- `components/preview/PreviewFrame.tsx` renders an `<iframe srcdoc=...>` 
- `lib/transform/jsx-transformer.ts` uses `@babel/standalone` to transpile JSX to JS, then builds an import map pointing to `esm.sh` for React and other npm packages
- Entry point detection order: `App.jsx` → `index.jsx` → first `.jsx`/`.tsx` file

### State Management
- Pure React Context + hooks — no Redux or Zustand
- `ChatContext` (`lib/contexts/chat-context.tsx`): wraps Vercel AI SDK `useChat`, handles tool-call responses to update the virtual FS
- `FileSystemContext` (`lib/contexts/file-system-context.tsx`): exposes file CRUD to UI components

### UI
- shadcn/ui (new-york style) built on Radix UI primitives; components in `src/components/ui/`
- Layout uses `react-resizable-panels` for the three-panel workspace (chat | editor | preview)
- Icons via `lucide-react`; Tailwind CSS v4

## Key Files

| File | Purpose |
|------|---------|
| `src/app/api/chat/route.ts` | AI streaming endpoint + tool execution |
| `src/lib/file-system.ts` | VirtualFileSystem class |
| `src/lib/transform/jsx-transformer.ts` | Babel + import-map pipeline for preview |
| `src/lib/contexts/chat-context.tsx` | Chat state + tool-call → FS mutation bridge |
| `src/lib/prompts/generation.tsx` | System prompt for component generation |
| `src/lib/provider.ts` | Model factory with MockLanguageModel fallback |
| `src/lib/auth.ts` | JWT session helpers |
| `prisma/schema.prisma` | DB schema |
