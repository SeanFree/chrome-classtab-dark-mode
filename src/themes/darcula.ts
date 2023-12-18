import plugin from 'tailwindcss/plugin'

export default plugin(({ addBase, theme }) => {
  addBase({
    '*[data-theme="ctd-darcula"]': {
      '--ctd-background-color': theme('colors.charade.950'),
      '--ctd-divider-color': theme('colors.charade.400'),
      '--ctd-focus-outline-color': theme('colors.blue.300'),
      '--ctd-link-color': theme('colors.blue.200'),
      '--ctd-link-visited-color': theme('colors.purple.400'),
      '--ctd-logo-filter': 'invert(1) hue-rotate(35deg)',
      '--ctd-text-color': theme('colors.charade.100'),
      '--ctd-text-highlight-color': theme('colors.amber.400'),
      '--ctd-text-selection-color': theme('colors.charade.500'),
    },
  })
})
