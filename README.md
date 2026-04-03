# clawbuttons

Drop-in buttons for the entire **OpenClaw-style harness ecosystem** — **OpenClaw**, **Hermes**, **IronClaw**, **NanoClaw**, **ZeroClaw**, **OpenHarness**, and **ClaudeClaw**. Built as framework-agnostic Web Components with zero dependencies.

<p align="center">
  <img src="https://img.shields.io/npm/v/clawbuttons?color=%23E74C3C&label=npm" alt="npm version">
  <img src="https://img.shields.io/bundlephobia/minzip/clawbuttons?color=%23E74C3C" alt="bundle size">
  <img src="https://img.shields.io/npm/l/clawbuttons?color=%23E74C3C" alt="license">
</p>

---

## Supported Harnesses

| Harness | Tag Name | CLI Prefix | Brand Color | Description |
|---------|----------|------------|-------------|-------------|
| **OpenClaw** | `<openclaw-button>` | `openclaw -p` | `#E74C3C` | The dominant open-source AI agent platform (200k+ stars) |
| **Hermes** | `<hermes-button>` | `hermes -p` | `#9B59B6` | Persistent personal agent with long-term memory |
| **IronClaw** | `<ironclaw-button>` | `ironclaw agent` | `#5D6D7E` | Rust-based privacy-first AI assistant with WASM sandboxes |
| **NanoClaw** | `<nanoclaw-button>` | `claw` | `#1ABC9C` | Minimalist container-based agent (~500 lines of TS) |
| **ZeroClaw** | `<zeroclaw-button>` | `zeroclaw agent` | `#E67E22` | Rust-based with WASM sandbox, 14x faster than OpenClaw |
| **OpenHarness** | `<openharness-button>` | `oh` | `#27AE60` | Lightweight Python harness (44x lighter than Claude Code) |
| **ClaudeClaw** | `<claudeclaw-button>` | `claudeclaw` | `#D4795C` | Lightweight Claude Code wrapper with daemon mode |

---

## Install

```bash
npm install clawbuttons
```

**Or use the CDN** (no build step):

```html
<script src="https://unpkg.com/clawbuttons"></script>
```

---

## Quick Start

```html
<openclaw-button command="Deploy the full-stack app" theme="branded"></openclaw-button>
<hermes-button command="/research deep-dive" variant="outline"></hermes-button>
<ironclaw-button command="Audit security vulnerabilities" theme="dark"></ironclaw-button>
<nanoclaw-button command="Run isolated tests" skill-url="https://example.com/skill.zip"></nanoclaw-button>
```

---

## Framework Integration

### Vanilla HTML / CDN

```html
<script src="https://unpkg.com/clawbuttons"></script>

<openclaw-button command="/deploy --prod" theme="branded"></openclaw-button>
<hermes-button command="/research" theme="dark"></hermes-button>

<script>
  document.querySelector('openclaw-button')
    .addEventListener('cb-copy', (e) => console.log('Copied:', e.detail.command));
</script>
```

### React / Next.js

Use the dedicated React wrappers (handles SSR, hydration, and prop forwarding):

```tsx
import {
  OpenClawButton,
  HermesButton,
  IronClawButton,
  NanoClawButton,
  ZeroClawButton,
  OpenHarnessButton,
  ClaudeClawButton,
} from 'clawbuttons/react';

function App() {
  return (
    <>
      <OpenClawButton
        command="Deploy the full-stack app"
        theme="branded"
        onCopy={(cmd) => console.log('Copied:', cmd)}
      />
      <HermesButton
        command="/research"
        skillUrl="https://example.com/skill.zip"
        variant="outline"
      />
      <IronClawButton
        command="Security audit"
        theme="dark"
      />
    </>
  );
}
```

The React wrappers:
- Include `'use client'` for Next.js App Router
- Handle SSR/hydration with `suppressHydrationWarning`
- Lazy-load the Web Components to avoid SSR crashes
- Forward both property callbacks (`onCopy`) and CustomEvent listeners (`onCbCopy`)

### Vue / Nuxt

**Option A: Vue Plugin (recommended)**

```ts
// main.ts
import { createApp } from 'vue';
import { ClawButtonsPlugin } from 'clawbuttons/vue';
import App from './App.vue';

const app = createApp(App);
app.use(ClawButtonsPlugin);
app.mount('#app');
```

```vue
<template>
  <openclaw-button
    command="/deploy"
    theme="branded"
    @cb-copy="onCopy"
  />
  <hermes-button
    command="/research"
    variant="outline"
  />
</template>

<script setup>
function onCopy(e) {
  console.log('Copied:', e.detail.command);
}
</script>
```

**Option B: Manual setup**

```ts
// vite.config.ts
import vue from '@vitejs/plugin-vue';

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) =>
            tag.endsWith('-button') && ['openclaw', 'hermes', 'ironclaw', 'nanoclaw', 'zeroclaw', 'openharness', 'claudeclaw'].some(h => tag.startsWith(h)),
        },
      },
    }),
  ],
};
```

### Svelte / SvelteKit

```svelte
<script>
  import 'clawbuttons';

  function handleCopy(e) {
    console.log('Copied:', e.detail.command);
  }
</script>

<openclaw-button
  command="/deploy"
  theme="branded"
  on:cb-copy={handleCopy}
/>
<hermes-button command="/research" variant="ghost" />
```

### Angular

```typescript
// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import 'clawbuttons';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

```html
<openclaw-button
  command="/deploy"
  theme="branded"
  (cb-copy)="onCopy($event)"
></openclaw-button>

<ironclaw-button
  command="Security audit"
  theme="dark"
></ironclaw-button>
```

### Solid

```tsx
import 'clawbuttons';

function App() {
  return (
    <>
      <openclaw-button
        command="/deploy"
        theme="branded"
        on:cb-copy={(e) => console.log(e.detail.command)}
      />
      <hermes-button command="/research" variant="outline" />
    </>
  );
}
```

### Astro

```astro
---
---
<script>
  import 'clawbuttons';
</script>

<openclaw-button command="/deploy" theme="branded" />
<hermes-button command="/research" theme="dark" />
```

### Programmatic JavaScript API

```js
import { createButton } from 'clawbuttons';

const btn = createButton('openclaw', {
  command: '/deploy --prod',
  theme: 'branded',
  onCopy: (cmd) => console.log('Copied:', cmd),
});

document.getElementById('container').appendChild(btn);
```

---

## Themes

| Theme | Description |
|-------|-------------|
| `branded` | Uses each harness's brand color **(default)** |
| `branded-alt` | Purple secondary (`#6B5CE7`) — great for mixing harnesses |
| `dark` | Dark surface, light text, harness-colored accents |
| `light` | White surface, dark text, harness-colored accents |
| `system` | Auto-switches between `light`/`dark` based on `prefers-color-scheme` |

## Sizes

| Size | Height |
|------|--------|
| `sm` | 2rem (32px at default font size) |
| `md` | 2.5rem (40px) **(default)** |
| `lg` | 3rem (48px) |

---

## Events

All buttons dispatch native `CustomEvent`s with `bubbles: true` and `composed: true` (crosses Shadow DOM).

| Event | Detail | Fired when |
|-------|--------|------------|
| `cb-copy` | `{ command: string, harness: string }` | Command copied to clipboard |
| `cb-open` | `{ command: string, harness: string }` | Button clicked / popup opens |
| `cb-close` | `{ harness: string }` | Popup closed |

```js
el.addEventListener('cb-copy', (e) => {
  console.log(`Copied ${e.detail.harness} command:`, e.detail.command);
});
```

---

## API Reference

### Common Attributes (all `<*-button>` elements)

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `command` | `string` | — | The skill/command to run |
| `skill-url` | `string` | — | URL to downloadable skill package |
| `theme` | `'branded' \| 'branded-alt' \| 'dark' \| 'light' \| 'system'` | `'branded'` | Theme variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `variant` | `'filled' \| 'outline' \| 'ghost'` | `'filled'` | Visual variant |
| `shape` | `'rounded' \| 'pill' \| 'square'` | `'rounded'` | Border radius shape |
| `popup` | `'true' \| 'false'` | `'true'` | Show popup dialog on click |
| `prompt-flag` | `'true' \| 'false'` | `'true'` | Prepend CLI prefix to command |
| `popup-title` | `string` | `'Run on {Harness}'` | Custom popup title |
| `popup-description` | `string` | — | Custom popup description |

### JavaScript Exports

```ts
import {
  createButton,           // Factory: createButton('openclaw', options)
  registerHarnessButton,  // Register one harness
  registerAllButtons,     // Register all harnesses
  register,               // Alias for registerAllButtons
  showPopup,              // Show popup programmatically
  HARNESSES,              // All harness configs
  HARNESS_IDS,            // ['openclaw', 'hermes', ...] 
  getHarness,             // Get config by ID
  getIcon,                // Get SVG icon by harness ID
  resolveTheme,           // Resolve theme tokens
} from 'clawbuttons';

// React wrappers (SSR-safe, includes 'use client')
import {
  OpenClawButton,
  HermesButton,
  IronClawButton,
  NanoClawButton,
  ZeroClawButton,
  OpenHarnessButton,
  ClaudeClawButton,
} from 'clawbuttons/react';

// Vue plugin
import { ClawButtonsPlugin } from 'clawbuttons/vue';
```

### Explicit Registration

Registration happens automatically on import. For frameworks that need timing control:

```ts
import { register } from 'clawbuttons';
register();
```

Or register individual harnesses with custom tag names:

```ts
import { registerHarnessButton } from 'clawbuttons';

registerHarnessButton('openclaw');
registerHarnessButton('hermes', 'my-hermes-btn');
```

---

## Browser Support

Works in all browsers that support [Custom Elements v1](https://caniuse.com/custom-elementsv1):

- Chrome 67+
- Firefox 63+
- Safari 10.1+
- Edge 79+

## License

MIT
