import './_style.scss';

import { getFilteredElements } from '../../utilities/focus';

//////////////////////////////////////////////
// Lightbox
//////////////////////////////////////////////

export default class Lightbox {

  #lightbox = document.createElement('div');
  #lightboxImages = document.querySelectorAll('img[data-lightbox]');

  #lightboxHTML = (`
    <div class="lightbox__container">
      <button class="lightbox__close button button--icon-only" data-lightbox-close>
          <span class="icon icon-close" aria-label="Close" aria-hidden="true">
      </button>
      <img class="lightbox__image" src="https://source.unsplash.com/1600x900" />
      <p class="lightbox__caption">A caption for the image.</p>
    </div>
  `);

  init() {

    const handleLightboxClose = (e) => {

      if (e.target !== e.currentTarget) return;

      this.#lightbox.setAttribute('aria-hidden', true);

      document.querySelector('body').classList.remove('modal-open');

    };

    this.#lightbox.classList.add('lightbox');

    this.#lightbox.innerHTML = this.#lightboxHTML;

    this.#lightbox.setAttribute('aria-hidden', true);

    document.body.appendChild(this.#lightbox);

    const lightboxClose = document.querySelector('[data-lightbox-close]');
    const lightboxIMG = document.querySelector('.lightbox__image');
    const lightboxCaption = document.querySelector('.lightbox__caption');

    this.#lightboxImages.forEach((image) => {

      image.addEventListener('click', ()  => {

        document.querySelector('body').classList.add('modal-open');

        this.#lightbox.setAttribute('aria-hidden', false);

        lightboxIMG.classList.add('box-shadow-3');

        lightboxIMG.src = image.src;
        lightboxIMG.alt = image.alt;
        lightboxCaption.innerHTML = image.alt;

      }); 
    
    });

    lightboxClose.addEventListener('click', handleLightboxClose); 
    this.#lightbox.addEventListener('click', handleLightboxClose);

  }

}