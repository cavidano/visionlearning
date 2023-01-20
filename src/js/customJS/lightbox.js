import { getFilteredElements } from '../utilities';

//////////////////////////////////////////////
// Lightbox
//////////////////////////////////////////////

export default class Lightbox {

	#lightbox = document.createElement('div');
	#lightboxImages = document.querySelectorAll('img[data-lightbox]');

	#lightboxHTML = (`
    <div class="button-group lightbox__buttons">
      <button class="button button--icon-only">
          <span class="icon icon-arrow-left" aria-label="Close" aria-hidden="true">
      </button>
      <button class="button button--icon-only">
          <span class="icon icon-arrow-right" aria-label="Close" aria-hidden="true">
      </button>
      <button class="button button--icon-only" data-lightbox-close>
          <span class="icon icon-close" aria-label="Close" aria-hidden="true">
      </button>
    </div>

    <figure class="lightbox__container">
      <img class="lightbox__image" src="https://source.unsplash.com/1600x900" />
      <figcaption class="lightbox__caption">A caption for the image.</figcaption>
    </figure>
  `);

	init() {

    if(this.#lightboxImages.length) {

      console.log(`Has lightbox`);
    
      const handleLightboxUpdate = (e) => {

        console.log(`currentLB === ${currentLB}`);

        const directionalFocus = (dir) => {

          e.preventDefault();

          currentLB = parseInt(currentLB) + dir;

          if (dir === -1 && currentLB < 0) {
            currentLB = lightboxes.length - 1;
            console.log(`left arrow <<<< ${currentLB}`);
          } else if (dir === 1 && currentLB >= lightboxes.length) {
            currentLB = 0;
            console.log(`left arrow >>>>  ${currentLB}`);
          } else {
            console.log(`My target is ????? ${currentLB}`);
          }

          updateLighbox(currentLB);
        };

        switch (e.code) {
          case 'ArrowLeft':
            directionalFocus(-1);
            break;
          case 'ArrowRight':
            directionalFocus(1);
            break;
          default:
          // do nothing
        }
      };

      const handleLightboxClose = (e) => {

        if (e.target !== e.currentTarget) return;

        this.#lightbox.setAttribute('aria-hidden', true);

        document.querySelector('body').classList.remove('modal-open');
        window.addEventListener('keyup', handleLightboxUpdate);
      };

      const updateLighbox = (current) => {

        lightboxIMG.src = lightboxes[current].imgSrc;
        lightboxIMG.alt = lightboxes[current].imgAlt;
        lightboxCaption.innerHTML = lightboxes[current].imgCaption;

        if (lightboxes[current].imgWidth !== null) {
          lightboxIMG.setAttribute('width', lightboxes[current].imgWidth);
        }

      };

      this.#lightbox.classList.add('lightbox');

      this.#lightbox.innerHTML = this.#lightboxHTML;

      this.#lightbox.setAttribute('aria-hidden', true);

      document.body.appendChild(this.#lightbox);

      const lightboxClose = document.querySelector('[data-lightbox-close]');
      const lightboxIMG = document.querySelector('.lightbox__image');
      const lightboxCaption = document.querySelector('.lightbox__caption');

      const wrap = (el, wrapper) => {
        if (el && el.parentNode) {
          el.parentNode.insertBefore(wrapper, el);
          wrapper.appendChild(el);
        }
      };

      let lightboxes = [];

      let currentLB;
        
      this.#lightboxImages.forEach((image, index) => {

        const wrapper = document.createElement('button');
        wrapper.setAttribute('class', 'lightbox-element');

        wrap(image, wrapper);


        const setImgSrc = () => {
					const lbSrc = image.getAttribute('data-lightbox-source');

					if (lbSrc) {
						return lbSrc;
					} else if (image.src) {
						return image.src;
					} else {
						return 'https://via.placeholder.com/350x150';
					}
				};

        const setImgCaption = () => {
					const lbCaption = image.getAttribute('data-lightbox-caption');

					if (lbCaption) {
						return lbCaption;
					} else if (image.alt) {
						return image.alt;
					} else {
						return null;
					}
				};

        const setImgAlt = () => {
					const lbAlt = image.getAttribute('data-lightbox-alt');

					if (lbAlt) {
						return lbAlt;
					} else if (image.alt) {
						return image.alt;
					} else {
						return '';
					}
				};

        lightboxes.push({
          imgSrc: setImgSrc(),
          imgCaption: setImgCaption(),
          imgAlt: setImgAlt()
        });

        const imageBtn = image.closest('button');

        imageBtn.addEventListener('click', () => {

          currentLB = index;

          document.querySelector('body').classList.add('modal-open');

          this.#lightbox.setAttribute('aria-hidden', false);

          lightboxIMG.classList.add('box-shadow-3');

          updateLighbox(index);

          window.addEventListener('keyup', handleLightboxUpdate);
        });

      });

      lightboxClose.addEventListener('click', handleLightboxClose);
      this.#lightbox.addEventListener('click', handleLightboxClose);

    } // end
	}
}
