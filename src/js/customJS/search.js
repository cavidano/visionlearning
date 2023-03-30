export default class Search {

    #searchInput = document.querySelector('#search-input');
    #clearButton = document.querySelector('#search-clear');

	#handleSearchInput = (e) => {
		const searchValue = e.target.value;
		this.#clearButton.style.display = searchValue ? 'flex' : 'none';
	}

	#handleSearchChange = () => {
        const isHidden = this.#clearButton.getAttribute('aria-hidden') === 'true';
        this.#clearButton.setAttribute('aria-hidden', !isHidden);
	}

	#handleClearButtonClick = (e) => {
        e.preventDefault();
		this.#searchInput.value = '';
        this.#searchInput.focus();

		this.#clearButton.style.display = 'none';
	}

    init() {

        this.#handleSearchChange();

        this.#searchInput.addEventListener('input', this.#handleSearchInput);
        this.#searchInput.addEventListener('change', this.#handleSearchChange);

        this.#clearButton.addEventListener('click', this.#handleClearButtonClick);

    }
}