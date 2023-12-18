import plugin from 'tailwindcss/plugin'

export default plugin(({ addBase, theme }) => {
  addBase({
    '*[data-theme="ctd-base"]': {
      '--ctd-background-color': theme('colors.neutral.800'),
      '--ctd-divider-color': theme('colors.neutral.400'),
      '--ctd-focus-outline-color': theme('colors.cyan.300'),
      '--ctd-link-color': theme('colors.cyan.400'),
      '--ctd-link-visited-color': theme('colors.fuchsia.300'),
      '--ctd-logo-filter': 'invert(1)',
      '--ctd-text-color': theme('colors.neutral.100'),
      '--ctd-text-highlight-color': theme('colors.red.400'),
      '--ctd-text-selection-color': theme('colors.cyan.600'),
    },
  })
})
