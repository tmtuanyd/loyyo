import { useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';

const emToPixels = (em: string): number => {
  const rootFontSize = 16;
  const emValue = parseFloat(em);
  return emValue * rootFontSize;
};

export const useBreakpoint = () => {
  const theme = useMantineTheme();

  const getCurrentBreakpoint = (): string => {
    if (typeof window === 'undefined') {
      return 'ssr';
    }

    const width = window.innerWidth;
    const breakpoints = theme.breakpoints;

    const sm = emToPixels(breakpoints.sm);
    const md = emToPixels(breakpoints.md);
    const lg = emToPixels(breakpoints.lg);
    const xl = emToPixels(breakpoints.xl);

    if (width < sm) return 'xs';
    if (width < md) return 'sm';
    if (width < lg) return 'md';
    if (width < xl) return 'lg';
    return 'xl';
  };

  const [currentBreakpoint, setCurrentBreakpoint] = useState(getCurrentBreakpoint());

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      setCurrentBreakpoint(getCurrentBreakpoint());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [theme]);

  return { currentBreakpoint };
};
