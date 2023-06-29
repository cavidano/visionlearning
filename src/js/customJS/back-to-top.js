export default class BackToTop {
	// Private properties

	#backToTopButton = document.querySelector('.back-to-top');
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
			this.#backToTopButton.classList.remove('fixed');
		} else {
			this.#backToTopButton.classList.add('fixed');
		}
	}

	init() {
		if (this.#backToTopButton && this.#footer) {
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
