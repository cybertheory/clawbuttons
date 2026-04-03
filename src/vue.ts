import { registerAllButtons } from './claw-button';
import { HARNESS_IDS } from './harness-config';
import { HARNESSES } from './harness-config';
import { register as registerHermes } from 'hermesbuttons';

export type { ClawButtonOptions, Theme, Size, HarnessId } from './types';

export { HermesButtonsPlugin } from 'hermesbuttons/vue';

const TAG_NAMES = HARNESS_IDS.map((id) => HARNESSES[id].tagName);
const HERMES_TAGS = ['hermes-button', 'hermes-skill-button', 'hermes-popup-dialog'];

/**
 * Vue plugin — registers all harness custom elements (including hermesbuttons)
 * and configures the Vue compiler to treat them as custom elements.
 *
 * Usage:
 *   import { ClawButtonsPlugin } from 'clawbuttons/vue'
 *   app.use(ClawButtonsPlugin)
 */
export const ClawButtonsPlugin = {
  install(app: any) {
    registerAllButtons();
    registerHermes();

    if (app.config?.compilerOptions) {
      const original = app.config.compilerOptions.isCustomElement;
      app.config.compilerOptions.isCustomElement = (tag: string) => {
        if (TAG_NAMES.includes(tag) || tag === 'claw-popup-dialog') {
          return true;
        }
        if (HERMES_TAGS.includes(tag)) {
          return true;
        }
        return original?.(tag) ?? false;
      };
    }
  },
};

export default ClawButtonsPlugin;
