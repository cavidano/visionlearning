//////////////////////////////////////////////
// Reading Toggles
//////////////////////////////////////////////

export default class ReadingToggles {

	#ngssToggleSwitch = document.getElementById('ngss-toggle-switch');
	#ngssTextList = document.querySelectorAll('.ngss');
	#ngssDescContainer = document.querySelector('.ngss-desc-container');

	#termsToggleSwitch = document.getElementById('terms-toggle-switch');
	#termsList = document.querySelectorAll('.term');
	#termDefContainer = document.querySelector('.term-def-container');

	removeOldDetails = () => {
		let oldDetailList = document.querySelectorAll('.reading-toggle-detail');
		if (oldDetailList.length > 0) {
			oldDetailList.forEach((item) => {
				item.remove();
			});
		}
	};

	handleNGSSClick = (ngss) => {
		const ngssCat = ngss.getAttribute('data-ngss-cat');
		const ngssCom = ngss.getAttribute('data-ngss-comment');
		const ngssDesc = ngss.getAttribute('data-ngss-desc');

		this.removeOldDetails();

		const ngssDescHTML = `
            <article
                class="reading-toggle-detail"
                aria-polite="live"
                data-ngss-cat="${ngssCat}">

                <div class="reading-toggle-detail__head">
                    ${ngssCat}
                </div>

                <div class="reading-toggle-detail__body">
                    <p>
                        ${ngssCom ? ngssCom : ngssDesc}
                    </p>
                </div>
            
            </article>      
        `;

		this.#ngssDescContainer.insertAdjacentHTML('beforeend', ngssDescHTML);

		let ngssDescContainerText = this.#ngssDescContainer.querySelector(
			'.reading-toggle-detail'
		);
		setTimeout(() => {
			ngssDescContainerText.classList.add('shown');
		}, 20);
	};

	handleTermClick = (term) => {
		const termTitle = term.innerHTML.toString();
		const termDef = term.getAttribute('data-term-def');
		const termUrl = term.getAttribute('data-term-url');

		this.removeOldDetails();

		const termDefHTML = `
            <article
                class="reading-toggle-detail glossary-term"
                aria-polite="live"
                data-term-definition>

                <div class="reading-toggle-detail__head">
                    <strong>Glossary Term</strong>
                </div>
            
                <div class="reading-toggle-detail__body">

                    <h2 class="h6">
                        ${termTitle}
                    </h2>
                
                    <p>
                        ${termDef ? termDef : 'That is not good.'}
                    </p>
                
                    <p>
                        <a href="${termUrl ? termUrl : '#1'}">
                            View in Glossary
                        </a>
                    </p>

                </div>
            
            </article>                        
        `;

		this.#termDefContainer.insertAdjacentHTML('beforeend', termDefHTML);

		let termDefContainerText = this.#termDefContainer.querySelector(
			'.reading-toggle-detail'
		);
		setTimeout(() => {
			termDefContainerText.classList.add('shown');
		}, 20);
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
