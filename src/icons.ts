import type { HarnessId } from './types';

export const OPENCLAW_ICON = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="cb-icon">
  <path d="M7 3C7 3 4 6 4 10c0 2 1 3.5 2.5 4.5L5 19c0 1 .5 2 2 2h1l1.5-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M17 3c0 0 3 3 3 7 0 2-1 3.5-2.5 4.5L19 19c0 1-.5 2-2 2h-1l-1.5-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M12 2v4M9.5 7.5L12 6l2.5 1.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.2"/>
  <circle cx="12" cy="12" r="2" fill="currentColor"/>
</svg>`;

export const HERMES_ICON = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="cb-icon">
  <path d="M12 2L4 6v6c0 5.25 3.4 10.2 8 12 4.6-1.8 8-6.75 8-12V6l-8-4z" fill="currentColor" opacity="0.15"/>
  <path d="M12 2L4 6v6c0 5.25 3.4 10.2 8 12 4.6-1.8 8-6.75 8-12V6l-8-4z" stroke="currentColor" stroke-width="1.6" fill="none"/>
  <path d="M8 11h8M12 8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
  <circle cx="12" cy="7" r="1.2" fill="currentColor"/>
</svg>`;

export const IRONCLAW_ICON = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="cb-icon">
  <rect x="4" y="4" width="16" height="16" rx="3" fill="currentColor" opacity="0.15"/>
  <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" stroke-width="1.6" fill="none"/>
  <path d="M8 9v6M12 8v8M16 10v4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M4 13h16" stroke="currentColor" stroke-width="1.2" opacity="0.4"/>
</svg>`;

export const NANOCLAW_ICON = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="cb-icon">
  <circle cx="12" cy="12" r="9" fill="currentColor" opacity="0.12"/>
  <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6" fill="none"/>
  <circle cx="12" cy="12" r="3.5" fill="currentColor" opacity="0.3"/>
  <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
  <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
</svg>`;

export const ZEROCLAW_ICON = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="cb-icon">
  <path d="M13 2L4.5 13.5h5L8 22l10.5-12h-5.5L15 2h-2z" fill="currentColor" opacity="0.2"/>
  <path d="M13 2L4.5 13.5h5L8 22l10.5-12h-5.5L15 2h-2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  <path d="M11.5 9l-1 4h3l-1 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const OPENHARNESS_ICON = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="cb-icon">
  <path d="M12 3L3 8v8l9 5 9-5V8l-9-5z" fill="currentColor" opacity="0.12"/>
  <path d="M12 3L3 8v8l9 5 9-5V8l-9-5z" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linejoin="round"/>
  <path d="M12 13V8M9 10.5l3 2.5 3-2.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="12" cy="16" r="1.3" fill="currentColor"/>
</svg>`;

export const CLAUDECLAW_ICON = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="cb-icon">
  <rect x="3.5" y="1.5" width="5" height="5" rx="1.5" fill="currentColor"/>
  <rect x="15.5" y="1.5" width="5" height="5" rx="1.5" fill="currentColor"/>
  <rect x="2.5" y="5.5" width="19" height="13" rx="3" fill="currentColor"/>
  <ellipse cx="9" cy="11.5" rx="2" ry="2.5" fill="white" opacity="0.95"/>
  <ellipse cx="15" cy="11.5" rx="2" ry="2.5" fill="white" opacity="0.95"/>
  <ellipse cx="9.6" cy="12" rx="1" ry="1.2" fill="#1C1917"/>
  <ellipse cx="15.6" cy="12" rx="1" ry="1.2" fill="#1C1917"/>
  <rect x="6.5" y="18.5" width="4" height="3.5" rx="1.5" fill="currentColor"/>
  <rect x="13.5" y="18.5" width="4" height="3.5" rx="1.5" fill="currentColor"/>
</svg>`;

const ICON_MAP: Record<HarnessId, string> = {
  openclaw: OPENCLAW_ICON,
  hermes: HERMES_ICON,
  ironclaw: IRONCLAW_ICON,
  nanoclaw: NANOCLAW_ICON,
  zeroclaw: ZEROCLAW_ICON,
  openharness: OPENHARNESS_ICON,
  claudeclaw: CLAUDECLAW_ICON,
};

export function getIcon(harnessId: HarnessId): string {
  return ICON_MAP[harnessId];
}

export const COPY_ICON = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="cb-icon-sm">
  <rect x="5" y="5" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
  <path d="M3 10V3.5A1.5 1.5 0 014.5 2H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

export const CHECK_ICON = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="cb-icon-sm">
  <path d="M3 8.5l3.5 3.5L13 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export const CLOSE_ICON = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="cb-icon-sm">
  <path d="M4 4l8 8m0-8l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;

export const TERMINAL_ICON = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="cb-icon-sm">
  <rect x="1" y="2" width="14" height="12" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/>
  <path d="M4 6l3 2.5L4 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 11h3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`;
