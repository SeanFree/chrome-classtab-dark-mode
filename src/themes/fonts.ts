import plugin from 'tailwindcss/plugin'

export default plugin(({ addBase }) => {
  addBase([
    {
      '@font-face': {
        'font-family': 'NovaMono',
        'font-style': 'normal',
        'font-weight': 'normal',
        src: 'url("/fonts/NovaMono-Regular.ttf")',
      },
    },
    {
      '@font-face': {
        'font-family': 'CutiveMono',
        'font-style': 'normal',
        'font-weight': 'normal',
        src: 'url("/fonts/CutiveMono-Regular.ttf")',
      },
    },
    {
      '@font-face': {
        'font-family': 'RobotoMono',
        'font-style': 'normal',
        'font-weight': 'normal',
        src: 'url("/fonts/RobotoMono-Regular.ttf")',
      },
    },
    {
      '@font-face': {
        'font-family': 'UbuntuMono',
        'font-style': 'normal',
        'font-weight': 'normal',
        src: 'url("/fonts/UbuntuMono-Regular.ttf")',
      },
    },
    {
      '@font-face': {
        'font-family': 'JetBrainsMono',
        'font-style': 'normal',
        'font-weight': 'normal',
        src: 'url("/fonts/JetBrainsMono-Medium.ttf")',
      },
    },
  ])
})
