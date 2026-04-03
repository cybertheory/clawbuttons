import type { HarnessConfig, HarnessId } from './types';

export const HARNESSES: Record<HarnessId, HarnessConfig> = {
  openclaw: {
    id: 'openclaw',
    name: 'OpenClaw',
    tagName: 'openclaw-button',
    brandColor: '#E74C3C',
    brandColorHover: '#CF4436',
    brandColorActive: '#B83C30',
    cliPrefix: 'openclaw -p',
    urlBase: 'https://openclaw.ai/run',
    description: 'The dominant open-source AI agent platform with 200k+ stars, multi-channel support, and ClawMart skill marketplace.',
  },
  hermes: {
    id: 'hermes',
    name: 'Hermes',
    tagName: 'hermes-button',
    /** Aligned with hermesbuttons / Hermes Agent (Nous) marketing — electric blue */
    brandColor: '#2B8CFF',
    brandColorHover: '#1E7AEB',
    brandColorActive: '#186BD4',
    cliPrefix: 'hermes -p',
    urlBase: 'https://hermes.ai/run',
    description: 'Persistent personal agent optimized for long-term memory, self-created reusable skills, and research-heavy workflows.',
  },
  ironclaw: {
    id: 'ironclaw',
    name: 'IronClaw',
    tagName: 'ironclaw-button',
    brandColor: '#5D6D7E',
    brandColorHover: '#516070',
    brandColorActive: '#475564',
    cliPrefix: 'ironclaw agent',
    urlBase: 'https://ironclaw.dev/run',
    description: 'Rust-based privacy-first AI assistant with WASM sandboxes, encrypted credentials, and MCP protocol support.',
  },
  nanoclaw: {
    id: 'nanoclaw',
    name: 'NanoClaw',
    tagName: 'nanoclaw-button',
    brandColor: '#1ABC9C',
    brandColorHover: '#17A78A',
    brandColorActive: '#14947A',
    cliPrefix: 'claw',
    urlBase: 'https://nanoclaw.dev/run',
    description: 'Minimalist container-based agent (~500 lines of TypeScript) with OS-enforced isolation and Docker sandboxing.',
  },
  zeroclaw: {
    id: 'zeroclaw',
    name: 'ZeroClaw',
    tagName: 'zeroclaw-button',
    brandColor: '#E67E22',
    brandColorHover: '#CF711E',
    brandColorActive: '#BA651B',
    cliPrefix: 'zeroclaw agent',
    urlBase: 'https://zeroclaw.io/run',
    description: 'Rust-based with WASM sandbox, 14x faster than OpenClaw, 38MB memory footprint, and encrypted credential storage.',
  },
  openharness: {
    id: 'openharness',
    name: 'OpenHarness',
    tagName: 'openharness-button',
    brandColor: '#27AE60',
    brandColorHover: '#229A54',
    brandColorActive: '#1E8A4B',
    cliPrefix: 'oh',
    urlBase: 'https://openharness.dev/run',
    description: 'Lightweight Python agent harness (44x lighter than Claude Code) with 43 tools, streaming tool-calls, and subagent spawning.',
  },
  claudeclaw: {
    id: 'claudeclaw',
    name: 'ClaudeClaw',
    tagName: 'claudeclaw-button',
    brandColor: '#D4795C',
    brandColorHover: '#C06A4E',
    brandColorActive: '#B35E43',
    cliPrefix: 'claudeclaw',
    urlBase: 'https://claudeclaw.dev/run',
    description: 'Lightweight open-source wrapper around Claude Code with daemon mode, Telegram/Discord support, and web dashboard.',
  },
};

export const HARNESS_IDS = Object.keys(HARNESSES) as HarnessId[];

export function getHarness(id: HarnessId): HarnessConfig {
  return HARNESSES[id];
}
