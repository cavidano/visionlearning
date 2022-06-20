/*

In this file:

// A. Focusable Elements

*/

//////////////////////////////////////////////
// A. Focusable Elements
//////////////////////////////////////////////

export const getFocusableElements = (element = document) => {
    
    const els = [
      'a[href]',
      'button',
      'input',
      'textarea',
      'select',
      'details',
      '[tabindex]:not([tabindex="-1"])'
    ];

    return [...element.querySelectorAll(
      els
      // 'a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])' 
    )].filter(el => !el.hasAttribute('disabled') && !el.getAttribute("aria-hidden"));
};

//////////////////////////////////////////////
// A. Focusable Elements
//////////////////////////////////////////////

export const getOffsetTop = (element) => {

  let offsetTop = 0;

  while (element) {
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }

  return offsetTop;
};