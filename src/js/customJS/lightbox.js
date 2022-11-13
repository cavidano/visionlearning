
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

    const handleLightboxClose = (e) => {

      if (e.target !== e.currentTarget) return;

      this.#lightbox.setAttribute('aria-hidden', true);

      document.querySelector('body').classList.remove('modal-open');
      window.addEventListener('keyup', handleLightboxUpdate);

    };

    const updateLighbox = (current) => {

        lightboxIMG.src = lightboxes[current].imgSRC;
        lightboxIMG.alt = lightboxes[current].imgALT;
        lightboxCaption.innerHTML = lightboxes[current].imgALT;
    
    } 

    this.#lightbox.classList.add('lightbox');

    this.#lightbox.innerHTML = this.#lightboxHTML;

    this.#lightbox.setAttribute('aria-hidden', true);

    document.body.appendChild(this.#lightbox);

    const lightboxClose = document.querySelector('[data-lightbox-close]');
    const lightboxIMG = document.querySelector('.lightbox__image');
    const lightboxCaption = document.querySelector('.lightbox__caption');

    let lightboxes = [];

    let currentLB;

    this.#lightboxImages.forEach((image, index) => {

      lightboxes.push({
        imgSRC : image.src,
        imgALT : image.alt,
      });

      image.addEventListener('click', ()  => {

        currentLB = index;

        document.querySelector('body').classList.add('modal-open');

        this.#lightbox.setAttribute('aria-hidden', false);

        lightboxIMG.classList.add('box-shadow-3');

        updateLighbox(index);

        window.addEventListener('keyup', handleLightboxUpdate); 
    
      });

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

    });

    lightboxClose.addEventListener('click', handleLightboxClose); 
    this.#lightbox.addEventListener('click', handleLightboxClose);
    
    console.log(`Here are our lightboxes ${lightboxes[0].imgSRC}`);

  }

}