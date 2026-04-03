import type { ClawButtonOptions, Theme, Size, Variant, Shape, HarnessId, HarnessConfig } from './types';
import { recordAgentPreference } from './agent-preferences';
import { getIcon } from './icons';
import { resolveTheme, themeToCSS, SIZE_MAP, SHAPE_MAP, getBrandColor, getBrandColorHover, getBrandColorActive } from './themes';
import { showPopup } from './popup-dialog';
import { HARNESSES, HARNESS_IDS } from './harness-config';

function buildButtonStyles(brandColor: string, brandColorHover: string, brandColorActive: string): string {
  return `
  :host {
    display: inline-block;
    vertical-align: middle;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .cb-btn {
    display: inline-flex;
    align-items: center;
    gap: var(--cb-gap);
    height: var(--cb-height);
    min-height: 44px;
    padding: var(--cb-padding);
    border: 1.5px solid var(--cb-border);
    background: var(--cb-bg);
    color: var(--cb-text);
    font-family: inherit;
    font-size: var(--cb-font-size);
    font-weight: 600;
    line-height: 1;
    border-radius: var(--cb-radius);
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    touch-action: manipulation;
    transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease, transform 0.1s ease, color 0.15s ease;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
  }

  @media (pointer: fine) {
    .cb-btn { min-height: unset; }
  }

  :host([data-variant="filled"][data-theme="branded"]) .cb-btn,
  :host([data-variant="filled"][data-theme="branded-alt"]) .cb-btn {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  }
  :host([data-variant="filled"][data-theme="branded"]) .cb-btn:hover {
    background: ${brandColorHover};
    box-shadow: 0 2px 8px ${brandColor}59;
  }
  :host([data-variant="filled"][data-theme="branded"]) .cb-btn:active {
    background: ${brandColorActive};
    transform: scale(0.98);
  }
  :host([data-variant="filled"][data-theme="branded-alt"]) .cb-btn:hover {
    background: #5A4BD6;
    box-shadow: 0 2px 8px rgba(107, 92, 231, 0.35);
  }
  :host([data-variant="filled"][data-theme="branded-alt"]) .cb-btn:active {
    background: #4F41C8;
    transform: scale(0.98);
  }

  :host([data-variant="filled"][data-theme="dark"]) .cb-btn {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
  :host([data-variant="filled"][data-theme="dark"]) .cb-btn:hover {
    background: #292524;
    border-color: #57534E;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
  :host([data-variant="filled"][data-theme="dark"]) .cb-btn:active {
    background: #1C1917;
    transform: scale(0.98);
  }

  :host([data-variant="filled"][data-theme="light"]) .cb-btn {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
  }
  :host([data-variant="filled"][data-theme="light"]) .cb-btn:hover {
    border-color: #D6D3D1;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
  :host([data-variant="filled"][data-theme="light"]) .cb-btn:active {
    background: #FAFAF9;
    transform: scale(0.98);
  }

  :host([data-variant="outline"][data-theme="branded"]) .cb-btn {
    background: transparent;
    border-color: ${brandColor};
    color: ${brandColor};
  }
  :host([data-variant="outline"][data-theme="branded"]) .cb-btn:hover {
    background: ${brandColor}14;
    box-shadow: 0 2px 8px ${brandColor}26;
  }
  :host([data-variant="outline"][data-theme="branded"]) .cb-btn:active {
    background: ${brandColor}24;
    transform: scale(0.98);
  }

  :host([data-variant="outline"][data-theme="branded-alt"]) .cb-btn {
    background: transparent;
    border-color: #6B5CE7;
    color: #6B5CE7;
  }
  :host([data-variant="outline"][data-theme="branded-alt"]) .cb-btn:hover {
    background: rgba(107, 92, 231, 0.08);
    box-shadow: 0 2px 8px rgba(107, 92, 231, 0.15);
  }
  :host([data-variant="outline"][data-theme="branded-alt"]) .cb-btn:active {
    background: rgba(107, 92, 231, 0.14);
    transform: scale(0.98);
  }

  :host([data-variant="outline"][data-theme="dark"]) .cb-btn {
    background: transparent;
    border-color: #57534E;
    color: #F5F0EB;
  }
  :host([data-variant="outline"][data-theme="dark"]) .cb-btn:hover {
    border-color: ${brandColor};
    background: ${brandColor}14;
  }
  :host([data-variant="outline"][data-theme="dark"]) .cb-btn:active {
    background: ${brandColor}24;
    transform: scale(0.98);
  }

  :host([data-variant="outline"][data-theme="light"]) .cb-btn {
    background: transparent;
    border-color: #D6D3D1;
    color: #1C1917;
  }
  :host([data-variant="outline"][data-theme="light"]) .cb-btn:hover {
    border-color: ${brandColor};
    background: ${brandColor}0D;
  }
  :host([data-variant="outline"][data-theme="light"]) .cb-btn:active {
    background: ${brandColor}1A;
    transform: scale(0.98);
  }

  :host([data-variant="ghost"]) .cb-btn {
    background: transparent;
    border-color: transparent;
  }

  :host([data-variant="ghost"][data-theme="branded"]) .cb-btn {
    color: ${brandColor};
  }
  :host([data-variant="ghost"][data-theme="branded"]) .cb-btn:hover {
    background: ${brandColor}1A;
  }
  :host([data-variant="ghost"][data-theme="branded"]) .cb-btn:active {
    background: ${brandColor}29;
    transform: scale(0.98);
  }

  :host([data-variant="ghost"][data-theme="branded-alt"]) .cb-btn {
    color: #6B5CE7;
  }
  :host([data-variant="ghost"][data-theme="branded-alt"]) .cb-btn:hover {
    background: rgba(107, 92, 231, 0.1);
  }
  :host([data-variant="ghost"][data-theme="branded-alt"]) .cb-btn:active {
    background: rgba(107, 92, 231, 0.16);
    transform: scale(0.98);
  }

  :host([data-variant="ghost"][data-theme="dark"]) .cb-btn {
    color: #F5F0EB;
  }
  :host([data-variant="ghost"][data-theme="dark"]) .cb-btn:hover {
    background: rgba(255, 255, 255, 0.06);
  }
  :host([data-variant="ghost"][data-theme="dark"]) .cb-btn:active {
    background: rgba(255, 255, 255, 0.1);
    transform: scale(0.98);
  }

  :host([data-variant="ghost"][data-theme="light"]) .cb-btn {
    color: #1C1917;
  }
  :host([data-variant="ghost"][data-theme="light"]) .cb-btn:hover {
    background: rgba(0, 0, 0, 0.04);
  }
  :host([data-variant="ghost"][data-theme="light"]) .cb-btn:active {
    background: rgba(0, 0, 0, 0.08);
    transform: scale(0.98);
  }

  .cb-btn:focus-visible {
    outline: 2px solid var(--cb-focus-color, ${brandColor});
    outline-offset: 2px;
  }

  .cb-btn-icon {
    width: var(--cb-icon-size);
    height: var(--cb-icon-size);
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cb-btn-icon svg { width: 100%; height: 100%; }

  :host([data-variant="filled"][data-theme="branded"]) .cb-btn-icon,
  :host([data-variant="filled"][data-theme="branded-alt"]) .cb-btn-icon {
    color: #FFFFFF;
    --cb-icon-accent: rgba(255,255,255,0.2);
  }
  :host([data-variant="filled"][data-theme="dark"]) .cb-btn-icon {
    color: var(--cb-accent-color, ${brandColor});
    --cb-icon-accent: #1C1917;
  }
  :host([data-variant="filled"][data-theme="light"]) .cb-btn-icon {
    color: var(--cb-accent-color, ${brandColor});
    --cb-icon-accent: #FFFFFF;
  }

  :host([data-variant="outline"]) .cb-btn-icon,
  :host([data-variant="ghost"]) .cb-btn-icon {
    color: var(--cb-accent-color, ${brandColor});
  }

  .cb-btn-label {
    letter-spacing: -0.01em;
  }
`;
}

export function createClawButtonClass(harness: HarnessConfig) {
  const BUTTON_STYLES = buildButtonStyles(harness.brandColor, harness.brandColorHover, harness.brandColorActive);
  const ICON = getIcon(harness.id);

  class ClawButton extends HTMLElement {
    static observedAttributes = ['command', 'theme', 'size', 'variant', 'shape', 'popup', 'prompt-flag', 'popup-title', 'popup-description'];

    /** @internal */ _options: ClawButtonOptions = {
      command: '',
      theme: 'branded',
      size: 'md',
      variant: 'filled',
      popup: true,
      promptFlag: true,
    };

    /** @internal */ _mqCleanup: (() => void) | null = null;
    /** @internal */ _rendered = false;

    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
      this.syncFromAttributes();
      this.render();
      this.updateLightDOM();
    }

    disconnectedCallback() {
      this._mqCleanup?.();
      this._mqCleanup = null;
    }

    attributeChangedCallback() {
      if (!this._rendered) return;
      this.syncFromAttributes();
      this.render();
      this.updateLightDOM();
    }

    set options(opts: Partial<ClawButtonOptions>) {
      this._options = { ...this._options, ...opts };
      this.render();
      this.updateLightDOM();
    }

    get options() {
      return this._options;
    }

    get harnessId(): HarnessId {
      return harness.id;
    }

    /** @internal */ syncFromAttributes() {
      const command = this.getAttribute('command');
      const theme = this.getAttribute('theme') as Theme | null;
      const size = this.getAttribute('size') as Size | null;
      const variant = this.getAttribute('variant') as Variant | null;
      const shape = this.getAttribute('shape') as Shape | null;
      const popup = this.getAttribute('popup');
      const promptFlag = this.getAttribute('prompt-flag');
      const popupTitle = this.getAttribute('popup-title');
      const popupDescription = this.getAttribute('popup-description');

      if (command !== null) this._options.command = command;
      if (theme) this._options.theme = theme;
      if (size) this._options.size = size;
      if (variant) this._options.variant = variant;
      if (shape) this._options.shape = shape;
      if (popup !== null) this._options.popup = popup !== 'false';
      if (promptFlag !== null) this._options.promptFlag = promptFlag !== 'false';
      if (popupTitle !== null) this._options.popupTitle = popupTitle;
      if (popupDescription !== null) this._options.popupDescription = popupDescription;
    }

    /** @internal */ updateLightDOM() {
      const { command } = this._options;
      const fullCommand = this.getFullCommand();

      this.setAttribute('role', 'button');
      this.setAttribute('tabindex', '0');
      this.setAttribute('aria-label', `Run on ${harness.name}: ${command}`);
      if (this._options.popup !== false) {
        this.setAttribute('aria-haspopup', 'dialog');
      } else {
        this.removeAttribute('aria-haspopup');
      }

      let link = this.querySelector('a[data-cb-crawl]') as HTMLAnchorElement | null;
      if (!link) {
        link = document.createElement('a');
        link.setAttribute('data-cb-crawl', '');
        link.setAttribute('aria-hidden', 'true');
        link.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;';
        this.appendChild(link);
      }
      link.textContent = `Run on ${harness.name}: ${command}`;
      link.setAttribute('data-platform', harness.id);
      link.setAttribute('data-command', command);
      link.setAttribute('data-full-command', fullCommand);
      link.href = `${harness.urlBase}?command=${encodeURIComponent(fullCommand)}`;
    }

    /** @internal */ getResolvedTheme(): Theme {
      return this._options.theme || 'branded';
    }

    /** @internal */ getFullCommand(): string {
      const { command, promptFlag } = this._options;
      if (promptFlag === false) return command;
      return `${harness.cliPrefix} "${command}"`;
    }

    /** @internal */ render() {
      if (!this.shadowRoot) return;

      const theme = this.getResolvedTheme();
      const resolvedTheme = theme === 'system' ? (
        typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      ) : theme;
      const variant = this._options.variant || 'filled';

      const tokens = resolveTheme(theme, harness.id);
      const size = this._options.size || 'md';
      const shape = this._options.shape || 'rounded';
      const sizeTokens = SIZE_MAP[size];
      const radius = SHAPE_MAP[shape][size];

      this.setAttribute('data-theme', resolvedTheme);
      this.setAttribute('data-variant', variant);

      const bgOverride = variant !== 'filled' ? 'transparent' : tokens.bg;
      const borderOverride = variant === 'ghost' ? 'transparent' :
        variant === 'outline' ? tokens.primary : tokens.border;
      const textOverride = variant !== 'filled' ? tokens.primary : tokens.text;

      this.shadowRoot.innerHTML = `
        <style>${BUTTON_STYLES}</style>
        <button
          class="cb-btn"
          type="button"
          style="
            ${themeToCSS(tokens)}
            --cb-bg: ${bgOverride};
            --cb-border: ${borderOverride};
            --cb-text: ${textOverride};
            --cb-accent-color: ${tokens.primary};
            --cb-focus-color: ${tokens.primary};
            --cb-height: ${sizeTokens.height};
            --cb-font-size: ${sizeTokens.fontSize};
            --cb-icon-size: ${sizeTokens.iconSize};
            --cb-padding: ${sizeTokens.padding};
            --cb-gap: ${sizeTokens.gap};
            --cb-radius: ${radius};
          "
          aria-label="Run on ${harness.name}: ${this._options.command.replace(/"/g, '&quot;')}"
        >
          <span class="cb-btn-icon" aria-hidden="true">${ICON}</span>
          <span class="cb-btn-label">Run on ${harness.name}</span>
        </button>
      `;

      const btn = this.shadowRoot.querySelector('.cb-btn')!;
      btn.addEventListener('click', () => this.handleClick());
      btn.addEventListener('keydown', (e) => {
        if ((e as KeyboardEvent).key === 'Enter' || (e as KeyboardEvent).key === ' ') {
          e.preventDefault();
          this.handleClick();
        }
      });
      this._rendered = true;
      this.setupSystemThemeWatch();
    }

    /** @internal */ handleClick() {
      const { popup, command, popupTitle, popupDescription } = this._options;
      const fullCommand = this.getFullCommand();

      this.dispatchEvent(new CustomEvent('cb-open', {
        bubbles: true,
        composed: true,
        detail: { command, fullCommand, harness: harness.id },
      }));

      if (popup === false) {
        navigator.clipboard.writeText(fullCommand).then(() => {
          this._options.onCopy?.(fullCommand);
          recordAgentPreference(harness.id);
          this.dispatchEvent(new CustomEvent('cb-copy', {
            bubbles: true,
            composed: true,
            detail: { command: fullCommand, harness: harness.id },
          }));
        });
        return;
      }

      showPopup({
        harnessId: harness.id,
        theme: this.getResolvedTheme(),
        title: popupTitle || `Run on ${harness.name}`,
        description: popupDescription || `Execute this command in your terminal to get started with ${harness.name}.`,
        command,
        fullCommand,
        onCopy: (cmd) => {
          this._options.onCopy?.(cmd);
          recordAgentPreference(harness.id);
          this.dispatchEvent(new CustomEvent('cb-copy', {
            bubbles: true,
            composed: true,
            detail: { command: cmd, harness: harness.id },
          }));
        },
        onClose: () => {
          this.dispatchEvent(new CustomEvent('cb-close', {
            bubbles: true,
            composed: true,
            detail: { harness: harness.id },
          }));
        },
      });
    }

    /** @internal */ setupSystemThemeWatch() {
      this._mqCleanup?.();
      this._mqCleanup = null;

      if (this.getResolvedTheme() !== 'system' || typeof window === 'undefined') return;

      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = () => this.render();
      mq.addEventListener('change', handler);
      this._mqCleanup = () => mq.removeEventListener('change', handler);
    }
  }

  return ClawButton;
}

type ButtonClassMap = Record<HarnessId, ReturnType<typeof createClawButtonClass>>;
const buttonClasses: Partial<ButtonClassMap> = {};

export function getButtonClass(harnessId: HarnessId): ReturnType<typeof createClawButtonClass> {
  if (!buttonClasses[harnessId]) {
    buttonClasses[harnessId] = createClawButtonClass(HARNESSES[harnessId]);
  }
  return buttonClasses[harnessId]!;
}

export function registerHarnessButton(harnessId: HarnessId, customTagName?: string) {
  if (typeof customElements === 'undefined') return;
  const tagName = customTagName || HARNESSES[harnessId].tagName;
  if (!customElements.get(tagName)) {
    customElements.define(tagName, getButtonClass(harnessId));
  }
}

export function registerAllButtons() {
  HARNESS_IDS.forEach((id) => registerHarnessButton(id));
}

export function createButton(harnessId: HarnessId, options: ClawButtonOptions): HTMLElement {
  const tagName = HARNESSES[harnessId].tagName;
  const el = document.createElement(tagName) as any;
  el.options = options;
  return el;
}

registerAllButtons();
