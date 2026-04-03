import type { HarnessId } from './types';
import { HARNESSES, HARNESS_IDS } from './harness-config';

export interface ButtonMetadata {
  platform: HarnessId;
  command: string;
  fullCommand?: string;
}

export function discoverButtons(): ButtonMetadata[] {
  if (typeof document === 'undefined') return [];

  const results: ButtonMetadata[] = [];

  HARNESS_IDS.forEach((harnessId) => {
    const harness = HARNESSES[harnessId];
    document.querySelectorAll(harness.tagName).forEach((el) => {
      const command = el.getAttribute('command') || '';
      const promptFlag = el.getAttribute('prompt-flag');
      const usePrompt = promptFlag !== 'false';
      const fullCommand = usePrompt ? `${harness.cliPrefix} "${command}"` : command;

      results.push({
        platform: harnessId,
        command,
        fullCommand,
      });
    });
  });

  return results;
}

export function generateStructuredData(): object {
  const buttons = discoverButtons();
  if (buttons.length === 0) return {};

  const actions = buttons.map((btn) => {
    const harness = HARNESSES[btn.platform];

    const entry: Record<string, unknown> = {
      '@type': 'EntryPoint',
      actionPlatform: harness.urlBase,
      urlTemplate: `${harness.urlBase}?command=${encodeURIComponent(btn.fullCommand || btn.command)}`,
    };

    return {
      '@type': 'Action',
      name: `Run on ${harness.name}: ${btn.command}`,
      description: btn.command,
      target: entry,
      object: {
        '@type': 'SoftwareSourceCode',
        runtimePlatform: harness.name,
        text: btn.fullCommand || btn.command,
      },
    };
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    potentialAction: actions,
  };
}

export function injectStructuredData(): void {
  if (typeof document === 'undefined') return;

  const existing = document.querySelector('script[data-clawbuttons-jsonld]');
  if (existing) existing.remove();

  const data = generateStructuredData();
  if (!data || !('potentialAction' in data)) return;

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-clawbuttons-jsonld', '');
  script.textContent = JSON.stringify(data, null, 2);
  document.head.appendChild(script);
}
