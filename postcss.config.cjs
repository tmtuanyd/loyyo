module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '30em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '57.5em',
        'mantine-breakpoint-lg': '73.75em',
        'mantine-breakpoint-xl': '90em',
      },
    },
  },
};
