import plugin from 'tailwindcss/plugin'

export default plugin(({ addBase, theme }) => {
  addBase({
    '*[data-theme="ctd-coffee"]': {
      '--ctd-background-color': theme('colors.coffee.950'),
      '--ctd-divider-color': theme('colors.coffee.700'),
      '--ctd-focus-outline-color': theme('colors.olive.300'),
      '--ctd-link-color': theme('colors.olive.300'),
      '--ctd-link-visited-color': theme('colors.olive.500'),
      '--ctd-logo-filter': 'invert(1) sepia(1)',
      '--ctd-text-color': theme('colors.coffee.100'),
      '--ctd-text-highlight-color': theme('colors.yellow.300'),
      '--ctd-text-selection-color': theme('colors.coffee.600'),
    },
  })
})
