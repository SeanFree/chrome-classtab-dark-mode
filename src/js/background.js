const extKey = 'ctActiveTheme'
const defaultTheme = 'dark-base'

let activeTheme

chrome.runtime.onInstalled.addListener(function () {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
					new chrome.declarativeContent.PageStateMatcher({
						pageUrl: { hostEquals: 'www.classtab.org' },
					})
				],
				actions: [new chrome.declarativeContent.ShowPageAction()]
			}
		])
	})
})
