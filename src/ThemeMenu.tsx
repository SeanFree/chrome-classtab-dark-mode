import { ChangeEventHandler, useState, type FC } from 'react'
import githubMark from '/github-mark-white.svg?url'

const themeOptions = [
  'ctd-base',
  'ctd-crimson',
  'ctd-coffee',
  'ctd-cydonia',
  'ctd-darcula',
  'ctd-midnight',
]

const fontClasses = [
  'ctd-font-cutive',
  'ctd-font-jetbrains',
  'ctd-font-nova',
  'ctd-font-roboto',
  'ctd-font-ubuntu',
  'ctd-font-system',
]

const ThemeMenu: FC = () => {
  const [fontFamily, setFontFamily] = useState('default')

  const handleChangeTheme: ChangeEventHandler<HTMLSelectElement> = (e) => {
    document.documentElement.setAttribute('data-theme', e.currentTarget.value)
  }
  const handleChangeFontFamily: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const newFontFamily = e.currentTarget.value

    if (document.documentElement.classList.contains(fontFamily)) {
      document.documentElement.classList.replace(fontFamily, newFontFamily)
    } else {
      document.documentElement.classList.add(newFontFamily)
    }

    setFontFamily(newFontFamily)
  }

  return (
    <div
      className='ctd-fixed ctd-right-52 ctd-top-4 ctd-min-w-[320px] ctd-rounded-md ctd-bg-slate-700 ctd-font-roboto ctd-font-light ctd-shadow-md ctd-text-slate-50'
      data-theme='ctd-base'
      role='menu'
    >
      <header className='ctd-border-0 ctd-border-b ctd-border-solid ctd-border-b-slate-500 ctd-px-4 ctd-flex ctd-items-center ctd-justify-between'>
        <h1 className='ctd-text-lg'>Classtab Dark Mode</h1>

        <a
          className='ctd-h-8 ctd-w-8 ctd-block ctd-rounded-full'
          href='github.com'
          rel='noopener noreferrer'
          target='_blank'
          title='View source code on GitHub'
        >
          <img
            className='ctd-img ctd-h-[100%] ctd-w-[100%] ctd-block'
            src={githubMark}
          />
        </a>
      </header>

      <section className='ctd-p-4 ctd-flex ctd-flex-col ctd-gap-4'>
        <div className='ctd-flex ctd-flex-col ctd-gap-1'>
          <label
            htmlFor='ctd-select-theme'
            className='ctd-text-sm ctd-flex ctd-items-center ctd-gap-1'
          >
            <i className='material-icons ctd-text-lg' role='presentation'>
              palette
            </i>
            Theme
          </label>

          <select
            id='ctd-select-theme'
            className='ctd-rounded ctd-border ctd-border-solid ctd-border-slate-500 ctd-bg-transparent ctd-p-2 ctd-font-system ctd-text-base ctd-text-gray-50'
            onChange={handleChangeTheme}
            defaultValue='none'
          >
            <option
              className='ctd-border-0 ctd-bg-slate-800 ctd-text-gray-50'
              value='none'
            >
              none
            </option>
            {themeOptions.map((value, i) => (
              <option
                className='ctd-border-0 ctd-bg-slate-800 ctd-text-gray-50'
                key={i}
                value={value}
              >
                {value.replace('ctd-', '')}
              </option>
            ))}
          </select>
        </div>

        <div className='ctd-flex ctd-flex-col ctd-gap-1'>
          <label
            htmlFor='ctd-select-theme'
            className='ctd-text-sm ctd-flex ctd-items-center ctd-gap-1'
          >
            <i className='material-icons ctd-text-lg' role='presentation'>
              format_size
            </i>
            Font Family
          </label>

          <select
            id='ctd-select-theme'
            className='ctd-rounded ctd-border ctd-border-solid ctd-border-slate-500 ctd-bg-transparent ctd-p-2 ctd-font-system ctd-text-base ctd-text-gray-50'
            onChange={handleChangeFontFamily}
            defaultValue='default'
          >
            <option
              className='ctd-border-0 ctd-bg-slate-800 ctd-text-gray-50 ctd-font-[unset]'
              value='default'
            >
              default
            </option>
            {fontClasses.map((fontClass, i) => (
              <option
                className={`ctd-border-0 ctd-bg-slate-800 ctd-text-gray-50 ${fontClass}`}
                key={i}
                value={fontClass}
              >
                {fontClass.replace('ctd-font-', '')}
              </option>
            ))}
          </select>
        </div>
      </section>
    </div>
  )
}

export default ThemeMenu
