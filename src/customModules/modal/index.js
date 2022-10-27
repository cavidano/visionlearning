import './_style.scss';

import { getFocusableElements, getOffsetTop } from '../../js/utilities'

//////////////////////////////////////////////
// Modal
//////////////////////////////////////////////

export default class Modal {

  #modalList = document.querySelectorAll('.modal');
  #modalButtonList = document.querySelectorAll('[data-modal-open]');

  init() {
  
    const initModal = (modalTarget) => {

      document.querySelector('body').classList.add('modal-open');

      modalTarget.setAttribute('aria-hidden', false);

      const lastFocusedElement = document.activeElement;

      const modalContent = modalTarget.querySelector('.modal__content');
      const modalHeader = modalTarget.querySelector('.modal__content__head');

      ////////////////////////
      // Set Dynamic Width 
      ////////////////////////

      let headerWidth;

      const handleHeaderResize = () => {

        headerWidth = `${modalContent.offsetWidth}px`;
        
        modalHeader.style.width = headerWidth;
      
      }

      window.addEventListener('resize', handleHeaderResize);

      handleHeaderResize();
      
      ////////////////////////
      // Set Dynamic Width 
      ////////////////////////

      const modalHeaderHeight =  modalHeader.offsetHeight;
      let elDistance;

      const handleFixedHeader = () => {

          const modalScrollY = modalTarget.scrollTop;
          const elOffset = getOffsetTop(modalContent);

          elDistance = elOffset - modalScrollY;
          
          if (elDistance <= 0) {
              modalHeader.classList.add('sticky', 'theme-primary', 'box-shadow-1');
              modalHeader.nextElementSibling.style.paddingTop = `${modalHeaderHeight}px`;
          } else {
              modalHeader.classList.remove('sticky', 'theme-primary', 'box-shadow-1');
              modalHeader.nextElementSibling.style.paddingTop = 'initial';
          }        
      }

      modalTarget.addEventListener('scroll', handleFixedHeader);
      handleFixedHeader();

      ////////////////////////

      modalContent.setAttribute('tabindex', 0);
      modalContent.focus();
      modalContent.setAttribute('tabindex', -1);

      if (modalTarget.classList.contains('modal--scroll-all')) {
        modalTarget.scrollTop = 0;
      }

      const modalCloseList = modalTarget.querySelectorAll('[data-modal-close]');

      const handleCloseOutside = event => {
        
        let modalContentClick = modalContent.contains(event.target);

        if (!modalContentClick) {
          handleClose();
        }
      }

      const handleClose = () => {
        modalTarget.setAttribute('aria-hidden', true);

        lastFocusedElement.focus();

        document.querySelector('body').classList.remove('modal-open');

        window.removeEventListener('click', handleCloseOutside);
      }

      const focusableElements = getFocusableElements(modalTarget);

      const firstElementOfModal = focusableElements[0];
      const lastElementOfModal = focusableElements[focusableElements.length - 1];

      modalTarget.addEventListener('keydown', (event) => {

        switch (event.code) {
          case 'Tab':
            if (document.activeElement === lastElementOfModal) {
              if (!event.shiftKey) {
                event.preventDefault();
                firstElementOfModal.focus();
              }
            }

            if (document.activeElement === firstElementOfModal) {
              if (event.shiftKey) {
                event.preventDefault();
                lastElementOfModal.focus();
              }
            }

            if (document.activeElement === modalContent) {
              if (event.shiftKey) {
                event.preventDefault();
                firstElementOfModal.focus();
              }
            }

            break;

          case 'Escape':
            handleClose();
            break;
          
          default:
          // do nothing
        }
        
      });

      modalCloseList.forEach(modalClose => {
        modalClose.addEventListener('click', handleClose);
        modalClose.setAttribute('aria-label', 'Close Modal Window');
      });

      if (modalTarget.dataset.modalCloseOutside === 'true') {
        window.addEventListener('click', handleCloseOutside);
      }

    }

    this.#modalList.forEach(modal => {
      const modalContainer = modal.querySelector('.modal__content');

      modalContainer.setAttribute('role', 'dialog');
      modalContainer.setAttribute('aria-modal', true);

      modal.setAttribute('aria-hidden', true);
    });

    this.#modalButtonList.forEach(modalButton => {

      modalButton.addEventListener('click', event => {
        const modalTargetID = event.target.getAttribute('data-modal-open').replace(/#/, '');
        const modalTarget = document.getElementById(modalTargetID)

        initModal(modalTarget);

        event.stopPropagation();
      });

    });
  
  }

}