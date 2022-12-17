const extKey = 'ctActiveTheme'
const defaultTheme = 'dark-base'
const linkId = 'ct-styles'

let linkEl

window.addEventListener('load', start)

function start () {
	chrome.storage.sync.get(extKey, function (storage) {
		let activeTheme = storage[extKey]

		if (!activeTheme) {
			activeTheme = defaultTheme
			chrome.storage.sync.set({ [extKey]: activeTheme })
		}

		setupLinkEl(activeTheme)

		chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
			if (message.type === 'themeChange') {
				swapCSS(message.value)
			}
		})
	})
}

function setupLinkEl (activeTheme) {
	linkEl = document.createElement('link')
	linkEl.setAttribute('id', linkId)
	linkEl.setAttribute('rel', 'stylesheet')
	linkEl.setAttribute('type', 'text/css')

	document.head.appendChild(linkEl)

	swapCSS(activeTheme)
}

function swapCSS (theme) {
	linkEl.setAttribute('href', chrome.runtime.getURL(`src/css/${theme}.css`))
}
