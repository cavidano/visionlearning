
export default class ReadingToggles {

	// Private properties

	#ngssToggleSwitch = document.getElementById('ngss-toggle-switch');
	#ngssTextList = document.querySelectorAll('.ngss');
	#termsToggleSwitch = document.getElementById('terms-toggle-switch');
	#termsList = document.querySelectorAll('.term');

	#annotationContainer = document.querySelector('.reading-toggle-annotation');
	#helpTextContainers = document.querySelectorAll('.reading-toggle__help');

	#closeButton = `
    <button class="button button--icon-only" data-close-btn>
      <span class="icon icon-close" aria-hidden="true"></span>
    </button>
  `;

	// Private methods

	hideHelpTexts = () => {
		this.#helpTextContainers.forEach((helpText) => {
			helpText.classList.add('display-none');
		});
	};

	// Method to show all help texts
	showHelpTexts = () => {
		this.#helpTextContainers.forEach((helpText) => {
			helpText.classList.remove('display-none');
		});
	};

	removeOldDetails = () => {
		let oldDetailList = document.querySelectorAll('.reading-toggle-detail');

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
		const ngssCat =
			ngss.getAttribute('data-ngss-cat-full') || 'Title not found';
		const ngssDesc =
			ngss.getAttribute('data-ngss-desc') || 'Description not found';

		const ngssDescHTML = `
      <div class="reading-toggle-detail">
        <article class="reading-toggle__detail" aria-polite="live" data-ngss-cat-abbr="${ngssCatAbbr}">
          <div class="reading-toggle__detail__head">
            ${ngssCat}
            ${this.#closeButton}
          </div>
          <div class="reading-toggle__detail__body">
            <p>${ngssDesc}</p>
          </div>
        </article>
      </div>
    `;

		this.handleHighlightedClick(ngssDescHTML);

	};

	handleTermClick = (event) => {
		const term = event.target;
		const termTitle = term.innerHTML;
		const termDef = term.getAttribute('data-term-def') || 'Title not found';
		const termUrl = term.getAttribute('data-term-url') || '#1';

		const termDefHTML = `
      <div class="reading-toggle-detail">
        <article class="reading-toggle__detail glossary-term" aria-polite="live" data-term-definition>
          <div class="reading-toggle__detail__head">
            <h2 class="h6">${termTitle}</h2>
            ${this.#closeButton}
          </div>
          <div class="reading-toggle__detail__body">
            <p>${termDef}</p>
            <p><a href="${termUrl}">View in Glossary</a></p>
          </div>
        </article>
      </div>
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
	};

	init = () => {
		if (this.#termsToggleSwitch) {
			this.#termsToggleSwitch.addEventListener('change', (e) => {
				const highlightTerms = e.target.checked;
				if (highlightTerms === true) {
					if (this.#ngssToggleSwitch.checked === true) {
						this.turnOffNGSS();
					}
					this.turnOnTerms();
				} else {
					this.turnOffTerms();
				}
			});
		}

		if (this.#ngssToggleSwitch) {
			this.#ngssToggleSwitch.addEventListener('change', (e) => {
				const highlightNGSS = e.target.checked;
				if (highlightNGSS === true) {
					if (this.#termsToggleSwitch.checked === true) {
						this.turnOffTerms();
					}
					this.turnOnNGSS();
				} else {
					this.turnOffNGSS();
				}
			});
		}
	};
}