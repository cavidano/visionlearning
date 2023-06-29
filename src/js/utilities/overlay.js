/*

In this file:

// A. Overlay Open and Close

*/

import { focusTrap } from './focus';

//////////////////////////////////////////////
// A. Overlay Open and Close
//////////////////////////////////////////////

let scrollPosition = 0;
let rootElement = document.querySelector('html');
let lastFocusedElement;

export const handleOverlayOpen = (element = null) => {

    lastFocusedElement = document.activeElement;

    scrollPosition = window.scrollY;

    rootElement.style.setProperty('--scroll-position', `-${scrollPosition}px`);

    rootElement.classList.add('has-overlay');

    if(element && element.getAttribute('aria-hidden') === 'true') {
        element.setAttribute('aria-hidden', false);
    }

    focusTrap(element);
}

export const handleOverlayClose = (element = null) => {

    rootElement.removeAttribute('style');

    rootElement.classList.remove('has-overlay');

    if(!rootElement.classList.length){ 
        rootElement.removeAttribute('class');
    }

    if(element && element.getAttribute('aria-hidden') === 'false') {
        element.setAttribute('aria-hidden', true);
    }

    console.log('handleOverlayClose', scrollPosition);

    window.scrollTo({ top: scrollPosition, behavior: 'instant' });
    
    lastFocusedElement.focus();
}