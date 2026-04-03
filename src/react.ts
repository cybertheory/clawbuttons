'use client';

import {
  useRef,
  useEffect,
  createElement,
  type FC,
} from 'react';
import type { ClawButtonOptions, HarnessId } from './types';

export type { ClawButtonOptions, HarnessId };

export interface ClawButtonProps extends ClawButtonOptions {
  harnessId: HarnessId;
  className?: string;
  style?: React.CSSProperties;
  onCbCopy?: (e: CustomEvent<{ command: string; harness: string }>) => void;
  onCbOpen?: (e: CustomEvent<{ command: string; fullCommand: string; harness: string }>) => void;
  onCbClose?: (e: CustomEvent<{ harness: string }>) => void;
}

function createHarnessButton(harnessId: HarnessId, displayName: string): FC<Omit<ClawButtonProps, 'harnessId'>> {
  const Component: FC<Omit<ClawButtonProps, 'harnessId'>> = ({
    command,
    skillUrl,
    theme = 'branded',
    size = 'md',
    variant = 'filled',
    shape = 'rounded',
    popup = true,
    promptFlag = true,
    onCopy,
    onDownload,
    popupTitle,
    popupDescription,
    className,
    style,
    onCbCopy,
    onCbOpen,
    onCbClose,
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const elRef = useRef<HTMLElement | null>(null);

    const cbCopyRef = useRef(onCbCopy);
    cbCopyRef.current = onCbCopy;
    const cbOpenRef = useRef(onCbOpen);
    cbOpenRef.current = onCbOpen;
    const cbCloseRef = useRef(onCbClose);
    cbCloseRef.current = onCbClose;

    useEffect(() => {
      if (!containerRef.current) return;

      import('./claw-button').then(({ getButtonClass }) => {
        if (!containerRef.current || elRef.current) return;

        getButtonClass(harnessId);

        const tagName = `${harnessId === 'openharness' ? 'openharness' : harnessId}-button`;
        const el = document.createElement(tagName);
        elRef.current = el;

        el.addEventListener('cb-copy', ((e: Event) => cbCopyRef.current?.(e as CustomEvent)) as EventListener);
        el.addEventListener('cb-open', ((e: Event) => cbOpenRef.current?.(e as CustomEvent)) as EventListener);
        el.addEventListener('cb-close', ((e: Event) => cbCloseRef.current?.(e as CustomEvent)) as EventListener);

        containerRef.current.appendChild(el);
      });

      return () => {
        const el = elRef.current;
        const container = containerRef.current;
        if (el && container?.contains(el)) {
          container.removeChild(el);
        }
        elRef.current = null;
      };
    }, []);

    useEffect(() => {
      const el = elRef.current;
      if (!el || !('options' in el)) return;

      (el as any).options = {
        command,
        skillUrl,
        theme,
        size,
        variant,
        shape,
        popup,
        promptFlag,
        onCopy,
        onDownload,
        popupTitle,
        popupDescription,
      };
    }, [command, skillUrl, theme, size, variant, shape, popup, promptFlag, onCopy, onDownload, popupTitle, popupDescription]);

    return createElement('div', {
      ref: containerRef,
      className,
      style: { display: 'inline-block', ...style },
      suppressHydrationWarning: true,
    });
  };

  Component.displayName = displayName;
  return Component;
}

export const OpenClawButton = createHarnessButton('openclaw', 'OpenClawButton');
export const HermesButton = createHarnessButton('hermes', 'HermesButton');
export const IronClawButton = createHarnessButton('ironclaw', 'IronClawButton');
export const NanoClawButton = createHarnessButton('nanoclaw', 'NanoClawButton');
export const ZeroClawButton = createHarnessButton('zeroclaw', 'ZeroClawButton');
export const OpenHarnessButton = createHarnessButton('openharness', 'OpenHarnessButton');
export const ClaudeClawButton = createHarnessButton('claudeclaw', 'ClaudeClawButton');

export {
  HermesButton as HermesAgentButton,
  HermesSkillButton as HermesAgentSkillButton,
} from 'hermesbuttons/react';

export type {
  HermesButtonProps as HermesAgentButtonProps,
  HermesSkillButtonProps as HermesAgentSkillButtonProps,
} from 'hermesbuttons/react';
