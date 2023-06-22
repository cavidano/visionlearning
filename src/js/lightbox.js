import { handleOverlayOpen, handleOverlayClose } from './utilities/overlay';

export default class Lightbox {

	// Private properties

	#lightboxTargetList = document.querySelectorAll('[data-lightbox]');

	#lightboxHTML = `
    <div class="lightbox__buttons button-group">
      <button class="button button--icon-only" data-lightbox-previous>
        <span class="icon icon-arrow-left" aria-label="Previous" aria-hidden="true"></span>
      </button>
      <button class="button button--icon-only" data-lightbox-next>
        <span class="icon icon-arrow-right" aria-label="Next" aria-hidden="true"></span>
      </button>
      <button class="button button--icon-only" data-lightbox-close>
        <span class="icon icon-close" aria-label="Close" aria-hidden="true"></span>
      </button>
    </div>
    <figure class="lightbox__container" aria-live="polite" aria-atomic="true">
      <div class="lightbox__media"></div>           
      <figcaption class="lightbox__caption"></figcaption>
    </figure>
  `;

	#lightboxVideoHTML = `
    <video controls>
      <source type="video/mp4">
    </video>
  `;

	#lightboxVideoIframeHTML = `
    <iframe
        frameborder="0"
        allow="autoplay; fullscreen;"
        allowfullscreen
    ></iframe>
  `;

	#lighboxLoaderHTML = `
    <div class="lightbox__media__loader">
      <span class="icon icon-loading icon--rotate" aria-hidden="true"></span>
    </div>
    <div class="lightbox__media__error" style="display: none;">
      <span class="icon icon-warn" aria-hidden="true"></span>
      <p>Failed to load content. Please try again later.</p>
    </div>
  `;

	#lightboxElementHTML = `<img src="https://source.unsplash.com/1600x900" />`;

	#lightboxes = [];

	// Private methods

	#handleLightboxOpen = (index) => (e) => {
		// Check if lightbox exists
		const lightbox = document.querySelector('.lightbox');
		if (lightbox) return;

		e.preventDefault();

		this.lightbox = this.#createLightbox();

		this.currentLB = index;

		handleOverlayOpen(this.lightbox);

		this.#updateLightbox(index);
	};

	#handleLightboxClose = (e) => {
		e.stopPropagation();

		if (e.target !== e.currentTarget && e.type === 'click') return;

		handleOverlayClose(this.lightbox);

		this.lightbox.parentElement.removeChild(this.lightbox);

		window.removeEventListener('keyup', this.#handleLightboxUpdateKey);
	};

	#handleCaptionDisplay = (show = false) => {
		const captionElement = this.lightbox.querySelector('.lightbox__caption');
		captionElement.style.display = show ? 'block' : 'none';
	};

	#handleLightboxUpdateClick = (e) => {
		e.preventDefault();

		if (e.target.hasAttribute('data-lightbox-previous')) {
			this.#updateDirection(-1);
		} else if (e.target.hasAttribute('data-lightbox-next')) {
			this.#updateDirection(1);
		} else {
			return;
		}
	};

	#handleLightboxUpdateKey = (e) => {
		e.preventDefault();

		if (
			this.#lightboxes.length <= 1 &&
			(e.code === 'ArrowLeft' || e.code === 'ArrowRight')
		) {
			return;
		}

		switch (e.code) {
			case 'ArrowLeft':
				this.#updateDirection(-1);
				this.lightbox.querySelector('[data-lightbox-previous]').focus();
				break;
			case 'ArrowRight':
				this.#updateDirection(1);
				this.lightbox.querySelector('[data-lightbox-next]').focus();
				break;
			case 'Escape':
				this.#handleLightboxClose(e);
				break;
			default:
				return;
		}
	};

	#updateDirection(dir) {
		this.currentLB += dir;

		if (this.currentLB < 0) {
			this.currentLB = this.#lightboxes.length - 1;
		} else if (this.currentLB >= this.#lightboxes.length) {
			this.currentLB = 0;
		}

		this.#updateLightbox(this.currentLB);
	}

	#updateLightbox(index) {
		const lightboxElement = this.lightbox.querySelector('.lightbox__media');
		const lightboxCaption = this.lightbox.querySelector('.lightbox__caption');

		// Clear the previous lightbox content before inserting a new one
		lightboxElement.innerHTML = '';

		let lightboxElementTarget;

		// Extract lightbox object data into variables
		const { lbType, lbSrc, lbAlt, lbCaption } = this.#lightboxes[index];

		// Update caption display based on attribute presence
		const shouldDisplayCaption = lbCaption !== null;
		this.#handleCaptionDisplay(shouldDisplayCaption);

		switch (lbType) {
			case 'image':
				// Call image update function
				lightboxElementTarget = this.#updateLightboxImage(
					lightboxElement,
					lbSrc,
					lbAlt
				);
				break;

			case 'video':
				// Call video update function
				lightboxElementTarget = this.#updateLightboxVideo(
					lightboxElement,
					lbSrc
				);
				break;

			default:
				break;
		}

		if (shouldDisplayCaption) {
			lightboxCaption.innerHTML = lbCaption;
		}
	}

	#updateLightboxImage(lightboxElement, lbSrc, lbAlt) {
		if (lightboxElement.hasAttribute('style')) {
			lightboxElement.removeAttribute('style');
		}

		lightboxElement.innerHTML = this.#lightboxElementHTML;

		const loader = this.#createLoader();
		lightboxElement.appendChild(loader);

		const lightboxElementTarget = lightboxElement.querySelector('img');

		lightboxElementTarget.alt = lbAlt;
		lightboxElementTarget.src = lbSrc;

		this.#handleMediaLoading(lightboxElementTarget, loader);

		return lightboxElementTarget;
	}

	#updateLightboxVideo(lightboxElement, lbSrc) {
    // Check if the string contains 'youtube' (case-insensitive)
    const hasYouTube = /youtube/i.test(lbSrc);

    // Check if the string contains 'vimeo' (case-insensitive)
    const hasVimeo = /vimeo/i.test(lbSrc);

    let lightboxElementTarget;

    if (hasYouTube || hasVimeo) {

      // If the video is from YouTube or Vimeo, use an iframe
      lightboxElement.innerHTML = this.#lightboxVideoIframeHTML;
      lightboxElementTarget = lightboxElement.querySelector('iframe');
      lightboxElementTarget.src = lbSrc;
    
    } else {

      // If the video is not from YouTube or Vimeo, use a video element
      lightboxElement.innerHTML = this.#lightboxVideoHTML;

      const loader = this.#createLoader();
      lightboxElement.appendChild(loader);
      
      lightboxElementTarget = lightboxElement.querySelector('source');
      
      const video = lightboxElement.querySelector('video');

      video.addEventListener('loadedmetadata', () => {
        // The intrinsic width and height of the video
        let intrinsicWidth = video.videoWidth;
        let intrinsicHeight = video.videoHeight;

        // The aspect ratio of the video
        lightboxElement.style.maxWidth = `${intrinsicWidth}px`;
        lightboxElement.style.aspectRatio = `${intrinsicWidth} / ${intrinsicHeight}`;
      });

      this.#handleMediaLoading(lightboxElementTarget, loader);

      lightboxElementTarget.src = lbSrc;
    }

    return lightboxElementTarget;
  }

	#createLightbox() {
		const lightbox = document.createElement('div');

		lightbox.classList.add('lightbox');
		lightbox.setAttribute('aria-hidden', true);
		lightbox.innerHTML = this.#lightboxHTML;

		document.body.appendChild(lightbox);

		const lightboxPrevious = lightbox.querySelector('[data-lightbox-previous]');
		const lightboxNext = lightbox.querySelector('[data-lightbox-next]');
		const lightboxClose = lightbox.querySelector('[data-lightbox-close]');

		if (this.#lightboxes.length <= 1) {
			lightboxPrevious.setAttribute('disabled', true);
			lightboxNext.setAttribute('disabled', true);
			lightboxPrevious.style.display = 'none';
			lightboxNext.style.display = 'none';
		}

		lightbox.addEventListener('click', this.#handleLightboxClose);
		lightboxClose.addEventListener('click', this.#handleLightboxClose);

		lightboxPrevious.addEventListener('click', this.#handleLightboxUpdateClick);
		lightboxNext.addEventListener('click', this.#handleLightboxUpdateClick);

		window.addEventListener('keyup', this.#handleLightboxUpdateKey);

		return lightbox;
	}

	#setLightboxProperties(lightboxButton) {
		let defaultSrc = null;
		let defaultAlt = '';

		const hasImage = lightboxButton.querySelector('img') !== null;

		if (hasImage) {
			defaultSrc = lightboxButton.querySelector('img').src || null;
			defaultAlt = lightboxButton.querySelector('img').alt || '';
		}

		const lbType = lightboxButton.getAttribute('data-lightbox') || 'image';
		const lbSrc =
			lightboxButton.getAttribute('data-lightbox-src') || defaultSrc;
		const lbCaption =
			lightboxButton.getAttribute('data-lightbox-caption') || null;
		const lbAlt =
			lightboxButton.getAttribute('data-lightbox-alt') || defaultAlt;

		return {
			lbType: lbType,
			lbSrc: lbSrc,
			lbCaption: lbCaption,
			lbAlt: lbAlt,
		};
	}

	#configureLightboxElements() {

    this.#lightboxTargetList.forEach((lightboxTarget) => {
      
      let lightboxButton;

      if (lightboxTarget.nodeName === 'IMG') {

        lightboxButton = document.createElement('button');

        lightboxButton.classList.add('lightbox-button');
        lightboxButton.classList.add('lightbox-button--icon');
        
        this.#wrapWithButton(lightboxTarget, lightboxButton);

        lightboxButton.setAttribute('data-lightbox', lightboxTarget.getAttribute('data-lightbox'));

        lightboxButton.setAttribute('data-lightbox-src', lightboxTarget.getAttribute('data-lightbox-src') || null);

        let caption = lightboxTarget.getAttribute('data-lightbox-caption');

        if (caption !== null) {
          lightboxButton.setAttribute('data-lightbox-caption', caption);
        }

        lightboxButton.setAttribute('data-lightbox-src', lightboxTarget.getAttribute('data-lightbox-src') || null);

        lightboxTarget.removeAttribute('data-lightbox');
        lightboxTarget.removeAttribute('data-lightbox-src');
        lightboxTarget.removeAttribute('data-lightbox-caption');

      } else {
        lightboxButton = lightboxTarget;
      };

      this.#lightboxes.push(this.#setLightboxProperties(lightboxButton));
    });
  }

  #wrapWithButton(el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  }

	#createLoader = () => {
		const loader = document.createElement('div');

		loader.className = 'lightbox__media__loader';
		loader.innerHTML = this.#lighboxLoaderHTML;
		return loader;
	};

	#handleMediaLoading = (media, loader) => {
		const mediaLoadEvent = media.nodeName === 'SOURCE' ? 'loadeddata' : 'load';

		media
			.closest(media.nodeName === 'SOURCE' ? 'video' : 'img')
			.addEventListener(mediaLoadEvent, () => {
				if (loader && loader.parentNode) {
					loader.parentNode.removeChild(loader);
				}

				// Ensure the caption is visible when the media is loaded correctly, only if lbCaption is present
				if (this.#lightboxes[this.currentLB].lbCaption !== null) {
					this.#handleCaptionDisplay(true);
				}
			});

		media.onerror = () => {
			const loaderIcon = loader.querySelector('.lightbox__media__loader');
			const errorMessage = loader.querySelector('.lightbox__media__error');

			// Hide the media on error
			media.style.display = 'none';
			this.#handleCaptionDisplay(false);

			loaderIcon.style.display = 'none';
			errorMessage.style.display = 'block';
		};
	};

	#initLazyLoading() {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.1,
		};

		const observer = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const lazyImage = entry.target;

					// Check if lazy image has a valid source
					const src = lazyImage.dataset.lightboxSrc || lazyImage.src;
					if (!src) return;

					observer.unobserve(lazyImage);

					// Create and load hidden large image
					const hiddenLargeImage = new Image();

					hiddenLargeImage.onload = () => {
						document.body.appendChild(hiddenLargeImage);
					};

					hiddenLargeImage.onerror = () => {
						console.error(`Failed to load image: ${src}`);
					};

					hiddenLargeImage.src = src;
					hiddenLargeImage.style.display = 'none';

					this.#lightboxes[Number(lazyImage.dataset.index)].hiddenImage =
						hiddenLargeImage;
				}
			});
		}, options);

		// Filter out video elements before observing
		const imageLightboxList = Array.from(this.#lightboxTargetList).filter(
			(lb) => lb.getAttribute('data-lightbox') === 'image'
		);

		imageLightboxList.forEach((imageLightbox, index) => {
			const lazyImage = imageLightbox.querySelector('img');

			if (!lazyImage) return;

			lazyImage.dataset.index = index;

			observer.observe(lazyImage);
		});
	}

	#initEventListeners() {
		this.#lightboxTargetList.forEach((lbButton, index) => {
			lbButton.addEventListener('click', this.#handleLightboxOpen(index));
		});
	}

	// Public methods

	init() {
		this.#configureLightboxElements();
		this.#initEventListeners();
		this.#initLazyLoading();
	}

}