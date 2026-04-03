import type { Theme, Size, Variant, Shape } from './types';

interface ClawButtonAttributes {
  command?: string;
  theme?: Theme;
  size?: Size;
  variant?: Variant;
  shape?: Shape;
  popup?: string | boolean;
  'prompt-flag'?: string | boolean;
  'popup-title'?: string;
  'popup-description'?: string;
  class?: string;
  style?: string | Record<string, string>;
}

interface ClawButtonEvents {
  'cb-copy'?: (e: CustomEvent<{ command: string; harness: string }>) => void;
  'cb-open'?: (e: CustomEvent<{ command: string; harness: string }>) => void;
  'cb-close'?: (e: CustomEvent<{ harness: string }>) => void;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'openclaw-button': ClawButtonAttributes &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'hermes-button': ClawButtonAttributes &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'ironclaw-button': ClawButtonAttributes &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'nanoclaw-button': ClawButtonAttributes &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'zeroclaw-button': ClawButtonAttributes &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'openharness-button': ClawButtonAttributes &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'claudeclaw-button': ClawButtonAttributes &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'claw-popup-dialog': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }

  interface HTMLElementTagNameMap {
    'openclaw-button': HTMLElement;
    'hermes-button': HTMLElement;
    'ironclaw-button': HTMLElement;
    'nanoclaw-button': HTMLElement;
    'zeroclaw-button': HTMLElement;
    'openharness-button': HTMLElement;
    'claudeclaw-button': HTMLElement;
    'claw-popup-dialog': HTMLElement;
  }
}

declare module 'vue' {
  interface GlobalComponents {
    'openclaw-button': ClawButtonAttributes;
    'hermes-button': ClawButtonAttributes;
    'ironclaw-button': ClawButtonAttributes;
    'nanoclaw-button': ClawButtonAttributes;
    'zeroclaw-button': ClawButtonAttributes;
    'openharness-button': ClawButtonAttributes;
    'claudeclaw-button': ClawButtonAttributes;
  }
}

declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      'openclaw-button': ClawButtonAttributes;
      'hermes-button': ClawButtonAttributes;
      'ironclaw-button': ClawButtonAttributes;
      'nanoclaw-button': ClawButtonAttributes;
      'zeroclaw-button': ClawButtonAttributes;
      'openharness-button': ClawButtonAttributes;
      'claudeclaw-button': ClawButtonAttributes;
    }
  }
}

declare module 'svelte/elements' {
  interface SvelteHTMLElements {
    'openclaw-button': ClawButtonAttributes & { [key: `on:${string}`]: (e: CustomEvent) => void };
    'hermes-button': ClawButtonAttributes & { [key: `on:${string}`]: (e: CustomEvent) => void };
    'ironclaw-button': ClawButtonAttributes & { [key: `on:${string}`]: (e: CustomEvent) => void };
    'nanoclaw-button': ClawButtonAttributes & { [key: `on:${string}`]: (e: CustomEvent) => void };
    'zeroclaw-button': ClawButtonAttributes & { [key: `on:${string}`]: (e: CustomEvent) => void };
    'openharness-button': ClawButtonAttributes & { [key: `on:${string}`]: (e: CustomEvent) => void };
    'claudeclaw-button': ClawButtonAttributes & { [key: `on:${string}`]: (e: CustomEvent) => void };
  }
}

export {};
