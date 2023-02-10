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
        <div class="lightbox__image"></div>           
      <figcaption class="lightbox__caption">A caption for the image.</figcaption>
    </figure>
  `);

  #lightboxVideoHTML = (`<video controls><source src="" type="video/mp4"></video>`);
  #lightboxElementHTML = (`<img src="https://source.unsplash.com/1600x900" />`);

	init() {

    if(this.#lightboxImages.length) {
    
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

        let lightboxElementTarget = null;

        if (lightboxes[current].imgType === 'video') {
          lightboxElement.innerHTML = this.#lightboxVideoHTML;
          lightboxElementTarget = lightboxElement.querySelector('source');
        } else {
          lightboxElement.innerHTML = this.#lightboxElementHTML;

          lightboxElementTarget = lightboxElement.querySelector('img');
          
          lightboxElementTarget.alt = lightboxes[current].imgAlt;
        }

        lightboxElementTarget.src = lightboxes[current].imgSrc;
        lightboxCaption.innerHTML = lightboxes[current].imgCaption;

        if (lightboxes[current].imgWidth !== null) {
          lightboxElementTarget.setAttribute('width', lightboxes[current].imgWidth);
        }

      };

      this.#lightbox.classList.add('lightbox');
      this.#lightbox.setAttribute('aria-hidden', true);

      this.#lightbox.innerHTML = this.#lightboxHTML;

      document.body.appendChild(this.#lightbox);

      const lightboxClose = document.querySelector('[data-lightbox-close]');
      const lightboxElement = document.querySelector('.lightbox__image');
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

        const setType = () => {
					const lbType = image.getAttribute('data-lightbox');

					if (lbType === 'video') {
						return 'video';
					} else {
						return 'image';
					}
				};

        const setImgSrc = () => {
					const lbSrc = image.getAttribute('data-lightbox-src');

					if (lbSrc) {
						return lbSrc;
					} else if (image.src) {
						return image.src;
					} else {
						return null;
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

        const setlbWidth = () => {
					const lbWidth = image.getAttribute('data-lightbox-width');

					if (lbWidth) {
						return lbWidth;
					} else {
						return null;
					}
				};

        lightboxes.push({
          imgType: setType(),
          imgSrc: setImgSrc(),
          imgCaption: setImgCaption(),
          imgAlt: setImgAlt(),
          imgWidth: setlbWidth()
        });

        const imageBtn = image.closest('button');

        imageBtn.addEventListener('click', () => {

          currentLB = index;

          document.querySelector('body').classList.add('modal-open');

          this.#lightbox.setAttribute('aria-hidden', false);

          lightboxElement.classList.add('box-shadow-3');

          updateLighbox(index);

          window.addEventListener('keyup', handleLightboxUpdate);
        });

      });

      lightboxClose.addEventListener('click', handleLightboxClose);
      this.#lightbox.addEventListener('click', handleLightboxClose);

    } // end
	}
}
