export default class BackToTop {

	// Private properties

	#backToTop = document.querySelector('.back-to-top');
	#backToTopButton = document.querySelector('.back-to-top .button');
	#footer = document.getElementById('global-footer');
	#footerObserver;

	// Private methods

	#handleBackToTopClick() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}

	#handleIntersection(entries) {
		const [firstEntry] = entries;
		if (firstEntry.isIntersecting) {
			this.#backToTop.classList.remove('fixed');
		} else {
			this.#backToTop.classList.add('fixed');
		}
	}

	// Public methods

	init() {
		if (this.#backToTop && this.#footer) {

			this.#backToTopButton.addEventListener(
				'click',
				this.#handleBackToTopClick
			);

			this.#footerObserver = new IntersectionObserver(
				this.#handleIntersection.bind(this)
			);

			this.#footerObserver.observe(this.#footer);
		}
	}
}
