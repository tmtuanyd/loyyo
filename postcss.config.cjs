module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '30em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '920px',
        'mantine-breakpoint-lg': '1180px',
        'mantine-breakpoint-xl': '90em',
      },
    },
  },
};
