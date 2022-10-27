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

    return [...element.querySelectorAll(els)].filter(
      (el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden')
    );
}

//////////////////////////////////////////////
// B. Get Filtered Elements
//////////////////////////////////////////////

export const getFilteredElements = (
		elementParent = document,
		classFilter = ''
	) => {
    
	const nodeIterator = document.createNodeIterator(
		elementParent,
		NodeFilter.SHOW_ELEMENT,
		(node) => node.classList.contains(classFilter)
			? NodeFilter.FILTER_ACCEPT
			: NodeFilter.FILTER_REJECT
	);

	const elementList = [];

	let currentNode;

	while (currentNode = nodeIterator.nextNode()) {
		elementList.push(currentNode);
	}

	return elementList.filter(node => node.classList);
}

//////////////////////////////////////////////
// C. Offset Top
//////////////////////////////////////////////

export const getOffsetTop = (element) => {

  let offsetTop = 0;

  while (element) {
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }

  return offsetTop;
};