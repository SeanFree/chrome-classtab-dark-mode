import plugin from 'tailwindcss/plugin'

export default plugin(({ addBase, theme }) => {
  addBase({
    '*[data-theme="ctd-midnight"]': {
      '--ctd-background-color': theme('colors.midnight.950'),
      '--ctd-divider-color': theme('colors.midnight.700'),
      '--ctd-focus-outline-color': theme('colors.purple.300'),
      '--ctd-link-color': theme('colors.purple.400'),
      '--ctd-link-visited-color': theme('colors.purple.600'),
      '--ctd-logo-filter': 'invert(1) hue-rotate(32deg) saturate(0.35)',
      '--ctd-text-color': theme('colors.midnight.100'),
      '--ctd-text-highlight-color': theme('colors.amber.400'),
      '--ctd-text-selection-color': theme('colors.midnight.600'),
    },
  })
})
