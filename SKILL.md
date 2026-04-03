# clawbuttons — Integration Skill

Add "Run on OpenClaw", "Run on Hermes", "Run on IronClaw", and more buttons to any web project.

## When to Use

Use this skill when you need to:
- Add AI agent harness buttons to a website, README, or documentation page
- Support multiple OpenClaw-style harnesses (OpenClaw, Hermes, IronClaw, NanoClaw, ZeroClaw, OpenHarness, ClaudeClaw)
- Create deploy-style buttons that trigger CLI commands for any supported harness
- Let users choose their preferred agent platform

## How to Add Buttons

### Step 1: Install

```bash
npm install clawbuttons
```

Or add via CDN script tag:

```html
<script src="https://unpkg.com/clawbuttons"></script>
```

### Step 2: Use the Web Components

```html
<!-- OpenClaw button -->
<openclaw-button
  command="/your-skill-name --flags"
  theme="branded"
  size="md"
></openclaw-button>

<!-- Hermes button with skill URL -->
<hermes-button
  command="/your-skill-name"
  skill-url="https://your-domain.com/skill-package.zip"
  theme="branded"
></hermes-button>

<!-- Any harness works the same way -->
<ironclaw-button command="audit security" theme="dark"></ironclaw-button>
<nanoclaw-button command="run tests" theme="branded"></nanoclaw-button>
<zeroclaw-button command="benchmark" theme="branded"></zeroclaw-button>
<openharness-button command="start agent" theme="branded"></openharness-button>
<claudeclaw-button command="start daemon" theme="branded"></claudeclaw-button>
```

### Step 3: Customize

**Themes:** `branded` (default, uses harness brand color), `branded-alt` (purple), `dark`, `light`, `system` (auto-detects OS preference)

**Sizes:** `sm` (32px), `md` (40px, default), `lg` (48px)

**Popup:** Set `popup="false"` to skip the dialog and copy directly to clipboard.

## Framework Integration

The buttons are Web Components and work in any framework:

- **React:** `import { OpenClawButton, HermesButton, ... } from 'clawbuttons/react'`
- **Vue/Svelte/Angular:** Just `import 'clawbuttons'` and use the HTML tags
- **Vanilla HTML:** Load via `<script>` tag, no build step needed

## Button Behavior

1. User clicks button
2. Popup shows the full CLI command (e.g. `openclaw -p "command"`)
3. User clicks "Copy" to copy to clipboard
4. User pastes into terminal or agent session

If a `skill-url` is provided, the popup guides the user through skill installation first.

## Available Exports

```ts
// Web Components (auto-registered)
import 'clawbuttons';

// Programmatic API
import { createButton, showPopup, HARNESSES } from 'clawbuttons';

// React wrappers
import { OpenClawButton, HermesButton, IronClawButton } from 'clawbuttons/react';

// Icons and theme utilities
import { getIcon, resolveTheme, getBrandColor } from 'clawbuttons';
```
