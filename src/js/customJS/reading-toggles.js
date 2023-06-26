import { handleOverlayOpen, handleOverlayClose } from '../utilities/overlay';

export default class ReadingToggles {
	// Private properties

	#ngssToggleSwitch = document.getElementById('ngss-toggle-switch');
	#ngssTextList = document.querySelectorAll('.ngss');
	#ngssDescContainer = document.querySelector('.ngss-desc-container');

	#termsToggleSwitch = document.getElementById('terms-toggle-switch');
	#termsList = document.querySelectorAll('.term');

	#closeButton = `
    <button class="button button--icon-only" data-close-btn>
      <span class="icon icon-close" aria-hidden="true"></span>
    </button>
  `;

	#ngssDescHTML = `
    <div class="reading-toggle-overlay">
      <article class="reading-toggle__detail" aria-polite="live" data-ngss-cat="{{ngssCat}}">
        <div class="reading-toggle__detail__head">
          {{ngssCat}}
          ${this.#closeButton}
        </div>
        <div class="reading-toggle__detail__body">
          <p>
            {{ngssCom ? ngssCom : ngssDesc}}
          </p>
        </div>
      </article>
    </div>
  `;

	removeOldDetails = () => {
		let oldDetailList = document.querySelectorAll('.reading-toggle__detail');
		if (oldDetailList.length > 0) {
			oldDetailList.forEach((item) => {
				item.remove();
			});
		}
	};

	handleClose = () => {
		this.removeOldDetails();
		let overlay = document.querySelector('.reading-toggle-overlay');
		overlay.remove();
	};

	handleOverlayClick = (htmlTemplate) => {
		this.removeOldDetails();
		document.body.insertAdjacentHTML('beforeend', htmlTemplate);
		setTimeout(() => {
			let closeButton = document.querySelector('[data-close-btn]');
			if (closeButton) {
				closeButton.addEventListener('click', this.handleClose);
			}
		}, 0);
	};

	handleNGSSClick = (ngss) => {
		const ngssCat = ngss.getAttribute('data-ngss-cat');
		const ngssCom = ngss.getAttribute('data-ngss-comment');
		const ngssDesc = ngss.getAttribute('data-ngss-desc');
		const ngssComment = ngssCom ? ngssCom : ngssDesc;

		const ngssDescHTML = `
    <div class="reading-toggle-overlay">
      <article class="reading-toggle__detail" aria-polite="live" data-ngss-cat="${ngssCat}">
        <div class="reading-toggle__detail__head">
          ${ngssCat}
          ${this.#closeButton}
        </div>
        <div class="reading-toggle__detail__body">
          <p>
            ${ngssComment}
          </p>
        </div>
      </article>
    </div>
    `;

		this.handleOverlayClick(ngssDescHTML);
	};

	handleTermClick = (term) => {
		const termTitle = term.innerHTML.toString();
		const termDef = term.getAttribute('data-term-def')
			? term.getAttribute('data-term-def')
			: 'That is not good.';
		const termUrl = term.getAttribute('data-term-url')
			? term.getAttribute('data-term-url')
			: '#1';

		const termDefHTML = `
    <div class="reading-toggle-overlay">
      <article class="reading-toggle__detail glossary-term" aria-polite="live" data-term-definition>
        <div class="reading-toggle__detail__head">
          <h2 class="h6">
            ${termTitle}
          </h2>
          ${this.#closeButton}
        </div>
        <div class="reading-toggle__detail__body">
          <p>
            ${termDef}
          </p>
          <p>
            <a href="${termUrl}">
              View in Glossary
            </a>
          </p>
        </div>
      </article>
    </div>
    `;

		this.handleOverlayClick(termDefHTML);
	};

	turnOnNGSS = () => {
		this.#ngssTextList.forEach((ngss, index) => {
			ngss.classList.add('highlighted');
			ngss.setAttribute('tabindex', index + 1);

			ngss.addEventListener('click', () => this.handleNGSSClick(ngss), true);
		});
	};

	turnOffNGSS = () => {
		this.#ngssToggleSwitch.checked = false;
		this.#ngssTextList.forEach((ngss) => {
			ngss.classList.remove('highlighted');
			ngss.setAttribute('tabindex', -1);
			ngss.removeEventListener('click', () => this.handleNGSSClick(ngss), true);
		});

		this.removeOldDetails();
	};

	turnOnTerms = () => {
		this.#termsList.forEach((term, index) => {
			term.classList.add('highlighted');
			term.setAttribute('tabindex', index + 1);
			term.addEventListener('click', () => this.handleTermClick(term));
		});
	};

	turnOffTerms = () => {
		this.#termsToggleSwitch.checked = false;
		this.#termsList.forEach((term) => {
			term.classList.remove('highlighted');
			term.setAttribute('tabindex', -1);
			term.removeEventListener('click', () => this.handleTermClick(term));
		});
		this.removeOldDetails();
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