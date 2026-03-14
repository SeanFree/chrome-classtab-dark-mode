/// <reference types="@types/chrome" />

const extKey = 'ctActiveTheme'
const defaultTheme = 'dark-base'
const linkId = 'ct-styles'

let linkEl

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
  const baseCSS = chrome.runtime.getURL(`css/index.css`)
  const baseLink = document.createElement('link')
  baseLink.setAttribute('rel', 'stylesheet')
  baseLink.setAttribute('type', 'text/css')
  baseLink.setAttribute('href', baseCSS)

  document.head.appendChild(baseLink)

  linkEl = document.createElement('link')
  linkEl.setAttribute('id', linkId)
  linkEl.setAttribute('rel', 'stylesheet')
  linkEl.setAttribute('type', 'text/css')

  document.head.appendChild(linkEl)

  swapCSS(activeTheme)
}

function swapCSS(theme) {
  linkEl.setAttribute('href', chrome.runtime.getURL(`css/${theme}.css`))
}
