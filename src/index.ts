export type { Theme, Size, Variant, Shape, HarnessId, HarnessConfig, ClawButtonOptions, PopupOptions, ThemeTokens } from './types';

export { createClawButtonClass, getButtonClass, registerHarnessButton, registerAllButtons, createButton } from './claw-button';
export { ClawPopupDialog, showPopup } from './popup-dialog';

export {
  OPENCLAW_ICON, HERMES_ICON, IRONCLAW_ICON, NANOCLAW_ICON,
  ZEROCLAW_ICON, OPENHARNESS_ICON, CLAUDECLAW_ICON, getIcon,
} from './icons';
export { getThemes, resolveTheme, DEFAULT_BRAND_COLOR, getBrandColor } from './themes';
export { HARNESSES, HARNESS_IDS, getHarness } from './harness-config';

export type { ButtonMetadata } from './structured-data';
export { discoverButtons, generateStructuredData, injectStructuredData } from './structured-data';

export {
  HermesButton as HermesAgentButton,
  createHermesButton,
  registerHermesButton,
  HermesSkillButton as HermesAgentSkillButton,
  createHermesSkillButton,
  registerHermesSkillButton,
  HermesPopupDialog,
  showPopup as showHermesPopup,
  HERMES_ICON as HERMES_AGENT_ICON,
  HERMES_SKILL_ICON as HERMES_AGENT_SKILL_ICON,
  themes as hermesThemes,
  resolveTheme as resolveHermesTheme,
  BRAND_COLOR as HERMES_BRAND_COLOR,
  ALT_BRAND_COLOR as HERMES_ALT_BRAND_COLOR,
  register as registerHermes,
} from 'hermesbuttons';

export type {
  HermesButtonOptions,
  HermesSkillButtonOptions,
  PopupOptions as HermesPopupOptions,
  ThemeTokens as HermesThemeTokens,
} from 'hermesbuttons';

import { registerAllButtons } from './claw-button';

/**
 * Manually register all custom elements (all harnesses + hermesbuttons).
 * Called automatically on import, but exposed for frameworks
 * that need explicit registration timing (Angular, micro-frontends).
 */
export function register() {
  registerAllButtons();
}

import './beacon';

export type {} from './jsx.d';
