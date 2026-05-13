# GO-GENIE

Website giới thiệu GO-GENIE - nền tảng logistics bền vững với tính năng theo dõi carbon footprint.

## Tech Stack

- Vue 3 + TypeScript
- Vite
- Tailwind CSS v4
- Vue Router 4
- Vue I18n v11
- @vueuse/head (SEO meta tags)

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── TheNavbar.vue
│   │   └── TheFooter.vue
│   ├── sections/
│   │   ├── HeroSection.vue
│   │   ├── VisionSection.vue
│   │   ├── CarbonTrackingSection.vue
│   │   ├── SustainabilitySection.vue
│   │   ├── ReportingSection.vue
│   │   └── CtaSection.vue
│   └── ui/
│       └── LanguageSwitcher.vue
├── views/
│   ├── HomeView.vue
│   ├── AboutView.vue
│   ├── ServicesView.vue
│   ├── ContactView.vue
│   └── NotFoundView.vue
├── router/
│   └── index.ts
├── locales/
│   ├── vi.ts
│   ├── en.ts
│   └── index.ts
├── App.vue
└── main.ts
```

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Internationalization

Supported languages: Vietnamese (vi), English (en).

To add a new language, create a file in `src/locales/` and register it in `src/locales/index.ts`.

## Deployment

The project builds to the `dist/` folder. Deploy to any static hosting (GitHub Pages, Vercel, Netlify, etc.).

For GitHub Pages, set `base` in `vite.config.ts`:

```ts
export default defineConfig({
  base: '/your-repo-name/',
});
```

## License

MIT
