import { Container, createTheme } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '57.5em',
    lg: '73.75em',
    xl: '90em',
  },
  colors: {
    red: [
      '#fff5f5',
      '#ffe3e3',
      '#ffc9c9',
      '#ffa8a8',
      '#ff8787',
      '#ff6b6b',
      '#DE2E17',
      '#f03e3e',
      '#e03131',
      '#c92a2a',
    ],
  },
});
