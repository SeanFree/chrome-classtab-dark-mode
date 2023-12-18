import plugin from 'tailwindcss/plugin'

export default plugin(({ addBase, theme }) => {
  addBase({
    '*[data-theme="ctd-crimson"]': {
      '--ctd-background-color': theme('colors.tamarind.950'),
      '--ctd-divider-color': theme('colors.tamarind.400'),
      '--ctd-focus-outline-color': theme('colors.amber.200'),
      '--ctd-link-color': theme('colors.amber.300'),
      '--ctd-link-visited-color': theme('colors.amber.500'),
      '--ctd-logo-filter': 'invert(1) hue-rotate(120deg) sepia(0.5)',
      '--ctd-text-color': theme('colors.tamarind.100'),
      '--ctd-text-highlight-color': theme('colors.blue.400'),
      '--ctd-text-selection-color': theme('colors.tamarind.500'),
    },
  })
})
