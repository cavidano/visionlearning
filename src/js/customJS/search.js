import { highlightMatchedWord } from '../utilities';

export default class Search {
	#searchInput = document.querySelector('#search-input');
	#clearButton = document.querySelector('#search-clear');
	
    #searchResults = document.querySelector('#search-results');

	#handleSearchInput = (e) => {
		const searchValue = e.target.value;
		this.#clearButton.style.display = searchValue ? 'flex' : 'none';
	};

	#handleSearchChange = () => {
		const isHidden = this.#clearButton.getAttribute('aria-hidden') === 'true';
		this.#clearButton.setAttribute('aria-hidden', !isHidden);
	};

	#handleClearButtonClick = (e) => {
		e.preventDefault();
		this.#searchInput.value = '';
		this.#searchInput.focus();

		this.#clearButton.style.display = 'none';
	};

    #handleFormSubmit = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            highlightMatchedWord(this.#searchResults, this.#searchInput.value);
        };
    }

	init() {
		if (this.#searchInput) {

			if (this.#searchInput.value) {
				this.#clearButton.style.display = 'flex';
				this.#clearButton.setAttribute('aria-hidden', false);
			}

			this.#searchInput.addEventListener('input', this.#handleSearchInput);
			this.#searchInput.addEventListener('change', this.#handleSearchChange);

			this.#clearButton.addEventListener('click', this.#handleClearButtonClick);
            this.#searchInput.addEventListener('keydown', this.#handleFormSubmit);
		}
	}
}
