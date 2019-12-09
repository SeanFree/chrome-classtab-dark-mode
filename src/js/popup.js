const extKey = 'ctActiveTheme'
const optionsMap = {
	'Disabled': 'disabled',
	'Dark Base': 'dark-base',
	'Darcula': 'darcula',
	'Crimson': 'crimson',
	'Midnight': 'midnight'
}
const optionListSelector = '.ct-options'
const optionList = document.querySelector(optionListSelector)

chrome.storage.sync.get(extKey, function (storage) {
	setup(storage[extKey])
})

function themeChange (event) {
	chrome.storage.sync.set({ [extKey]: event.target.value }, function () {
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			chrome.tabs.sendMessage(tabs[0].id, {
				type: 'themeChange',
				value: event.target.value
			})
		})
	})
}

function setup (activeTheme) {
	for (let key in optionsMap) {
		renderOption(key, optionsMap[key])
	}

	function renderOption (key, value) {
		const id = `ctOption-${value}`
		const optionItem = document.createElement('li')
		optionItem.classList.add('ct-options__item')

		const optionLabel = document.createElement('label')
		optionLabel.classList.add('ct-options__label')
		optionLabel.setAttribute('for', id)
		optionLabel.innerText = key
		
		const optionRadio = document.createElement('input')
		optionRadio.classList.add('ct-options__radio')
		optionRadio.setAttribute('id', id)
		optionRadio.setAttribute('name', 'ct-active-theme')
		optionRadio.setAttribute('type', 'radio')
		optionRadio.setAttribute('value', value)
		value === activeTheme && optionRadio.setAttribute('checked', true)

		optionRadio.addEventListener('change', themeChange)

		optionItem.appendChild(optionRadio)
		optionItem.appendChild(optionLabel)

		optionList.appendChild(optionItem)
	}
}
