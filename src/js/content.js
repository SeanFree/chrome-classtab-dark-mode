/// <reference types="@types/chrome" />

const extKey = 'ctActiveTheme'
const defaultTheme = 'dark-base'

window.addEventListener('load', start)

function start() {
  chrome.storage.sync.get(extKey, function (storage) {
    let activeTheme = storage[extKey]

    if (!activeTheme) {
      activeTheme = defaultTheme
      chrome.storage.sync.set({ [extKey]: activeTheme })
    }

    setupCSS(activeTheme)

    chrome.runtime.onMessage.addListener(function (message) {
      if (message.type === 'themeChange') {
        swapCSS(message.value)
      }
    })
  })
}

function setupCSS(activeTheme) {
  const srcHref = chrome.runtime.getURL(`css/app.css`)
  const link = document.createElement('link')
  link.setAttribute('rel', 'stylesheet')
  link.setAttribute('type', 'text/css')
  link.setAttribute('href', srcHref)

  document.head.appendChild(link)

  swapCSS(activeTheme)
}

function swapCSS(theme) {
  if (theme === 'disabled') {
    document.documentElement.removeAttribute('data-theme')
  } else {
    document.documentElement.setAttribute('data-theme', theme)
  }
}
