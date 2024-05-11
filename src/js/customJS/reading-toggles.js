
export default class ReadingToggles {

	// Private properties

	#ngssToggleSwitch = document.getElementById('ngss-toggle-switch');
	#ngssTextList = document.querySelectorAll('.ngss');
	#termsToggleSwitch = document.getElementById('terms-toggle-switch');
	#termsList = document.querySelectorAll('.term');

	#annotationContainer = document.querySelector('.reading-annotation-container');
	#helpTextContainers = document.querySelectorAll('.reading-toggle__help');

	#closeButton = `
		<button class="button button--icon-only" data-close-btn>
			<span class="icon icon-close" aria-hidden="true"></span>
		</button>
  `;

	// Private methods

	hideHelpTexts = () => {
		this.#helpTextContainers.forEach((helpText) => {
			helpText.classList.add('display-none--lg');
		});
	};

	// Method to show all help texts
	showHelpTexts = () => {
		this.#helpTextContainers.forEach((helpText) => {
			helpText.classList.remove('display-none--lg');
		});
	};

	removeOldDetails = () => {
		let oldDetailList = document.querySelectorAll('.reading-annotation');

		if (oldDetailList.length) {
			oldDetailList.forEach((item) => {
				item.remove();
			});
		}
	};

	handleClose = () => {
		let closeButton = document.querySelector('[data-close-btn]');
		if (closeButton) {
			closeButton.removeEventListener('click', this.handleClose);
		}
		this.removeOldDetails();
		this.showHelpTexts();
	};

	handleHighlightedClick = (htmlTemplate) => {

		this.removeOldDetails();

		this.#annotationContainer.insertAdjacentHTML('beforeend', htmlTemplate);

		this.hideHelpTexts();

		let closeButtonEl = document.querySelector('[data-close-btn]');
		if (closeButtonEl) {
			console.log('hello', closeButtonEl);
			closeButtonEl.addEventListener('click', this.handleClose);
		}
	};

	handleNGSSClick = (event) => {
		const ngss = event.target;
		const ngssCatAbbr = ngss.getAttribute('data-ngss-cat-abbr') || 'NGSS';
		const ngssCat = ngss.getAttribute('data-ngss-cat-full') || 'Title not found';
		const ngssDesc = ngss.getAttribute('data-ngss-desc') || 'Description not found';
		const ngssStandard = ngss.getAttribute('data-ngss-standard') || 'Standard not found';

		const ngssDescHTML = `
			<article class="reading-annotation ngss-annotation" aria-live="polite" data-ngss-cat-abbr="${ngssCatAbbr}">
				<div class="reading-annotation__head">
					${ngssCat}
					${this.#closeButton}
				</div>
				<div class="reading-annotation__body">
					<p>
						${ngssDesc}
						${ngssStandard !== 'Standard not found' ? `<span class="standard">${ngssStandard}</span>` : ''}
					</p>
				</div>
			</article>
		`;

		this.handleHighlightedClick(ngssDescHTML);

	};

	handleTermClick = (event) => {
		const term = event.target;
		const termTitle = term.innerHTML;
		const termDef = term.getAttribute('data-term-def') || 'Title not found';
		const termUrl = term.getAttribute('data-term-url') || '#1';

		const termDefHTML = `
			<article class="reading-annotation glossary-term" data-term-definition aria-polite="live">
				<div class="reading-annotation__head">
					<h2 class="h6">${termTitle}</h2>
					${this.#closeButton}
				</div>
				<div class="reading-annotation__body">
					<p>${termDef}</p>
					<p>
						<a class="link-new-window" href="${termUrl}" target="_blank">
							View in Glossary
						</a>
					</p>
				</div>
			</article>
		`;
		this.handleHighlightedClick(termDefHTML);
	};

	turnOnNGSS = () => {
		this.#ngssTextList.forEach((ngss) => {
			ngss.classList.add('highlighted');
			ngss.setAttribute('tabindex', '0');
			ngss.addEventListener('click', this.handleNGSSClick);
		});
	};

	turnOffNGSS = () => {
		this.#ngssToggleSwitch.checked = false;
		this.#ngssTextList.forEach((ngss) => {
			ngss.classList.remove('highlighted');
			ngss.setAttribute('tabindex', '-1');
			ngss.removeEventListener('click', this.handleNGSSClick);
		});
		const ngssDescHTML = document.querySelector('.ngss-annotation');
		if (ngssDescHTML) {
			ngssDescHTML.parentNode.removeChild(ngssDescHTML);
			this.showHelpTexts();
		}
	};

	turnOnTerms = () => {
		this.#termsList.forEach((term) => {
			term.classList.add('highlighted');
			term.setAttribute('tabindex', '0');
			term.addEventListener('click', this.handleTermClick);
		});
	};

	turnOffTerms = () => {
		this.#termsToggleSwitch.checked = false;
		this.#termsList.forEach((term) => {
			term.classList.remove('highlighted');
			term.setAttribute('tabindex', '-1');
			term.removeEventListener('click', this.handleTermClick);
		});
		const termDefHTML = document.querySelector('.glossary-term');
		if (termDefHTML) {
			termDefHTML.parentNode.removeChild(termDefHTML);
			this.showHelpTexts();
		}
	};

	init = () => {
		if (this.#termsToggleSwitch) {
			this.#termsToggleSwitch.addEventListener('change', ({ target: { checked: highlightTerms } }) => {
				if (highlightTerms) {
					if (this.#ngssToggleSwitch.checked) {
						this.turnOffNGSS();
					}
					this.turnOnTerms();
				} else {
					this.turnOffTerms();
				}
			});
		}

		if (this.#ngssToggleSwitch) {
			this.#ngssToggleSwitch.addEventListener('change', ({ target: { checked: highlightNGSS } }) => {
				if (highlightNGSS) {
					if (this.#termsToggleSwitch.checked) {
						this.turnOffTerms();
					}
					this.turnOnNGSS();
				} else {
					this.turnOffNGSS();
				}
			});
		}

		if (this.#termsToggleSwitch || this.#ngssToggleSwitch) {
			window.addEventListener('pageshow', () => {
				this.#termsToggleSwitch.checked = false;
				this.#ngssToggleSwitch.checked = false;
				this.turnOffNGSS();
				this.turnOffTerms();
				this.showHelpTexts();
			});
		}
	}
}