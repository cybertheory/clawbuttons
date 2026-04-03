export type HarnessId = 'openclaw' | 'hermes' | 'ironclaw' | 'nanoclaw' | 'zeroclaw' | 'openharness' | 'claudeclaw';
export type Theme = 'branded' | 'branded-alt' | 'dark' | 'light' | 'system';
export type Size = 'sm' | 'md' | 'lg';
export type Variant = 'filled' | 'outline' | 'ghost';
export type Shape = 'rounded' | 'pill' | 'square';

export interface HarnessConfig {
  id: HarnessId;
  name: string;
  tagName: string;
  brandColor: string;
  brandColorHover: string;
  brandColorActive: string;
  cliPrefix: string;
  urlBase: string;
  description: string;
}

export interface ClawButtonOptions {
  /** The command or skill to run (e.g. "/my-skill --flag") */
  command: string;
  /** URL to a downloadable skill package (.zip, SKILL.md, or plugin.json) */
  skillUrl?: string;
  /** Theme variant. Default: 'branded' */
  theme?: Theme;
  /** Button size. Default: 'md' */
  size?: Size;
  /** Visual variant. Default: 'filled' */
  variant?: Variant;
  /** Border radius shape. Default: 'rounded' */
  shape?: Shape;
  /** Whether to show a popup dialog on click. Default: true */
  popup?: boolean;
  /** Whether to prepend the CLI prefix to the command. Default: true */
  promptFlag?: boolean;
  /** Callback fired after the command is copied to clipboard */
  onCopy?: (command: string) => void;
  /** Callback fired when the skill package is downloaded */
  onDownload?: (url: string) => void;
  /** Custom popup title */
  popupTitle?: string;
  /** Custom popup description */
  popupDescription?: string;
}

export interface PopupOptions {
  harnessId: HarnessId;
  theme: Theme;
  title: string;
  description?: string;
  command: string;
  fullCommand?: string;
  skillUrl?: string;
  onCopy?: (command: string) => void;
  onClose?: () => void;
}

export interface ThemeTokens {
  bg: string;
  text: string;
  border: string;
  surface: string;
  surfaceText: string;
  muted: string;
  primary: string;
  primaryText: string;
  codeBg: string;
  codeText: string;
}
