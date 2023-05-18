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
// B. Filtered Elements
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

//////////////////////////////////////////////
// D. Match Media
//////////////////////////////////////////////

export const matchMedia = ((size) => {

  return window.matchMedia(`(min-width: ${size}px)`);

});

//////////////////////////////////////////////
// D. Highlight Matched Text
//////////////////////////////////////////////

const clearHighlights = (target, className) => {

  const highlightedElements = target.querySelectorAll(`span.${className}`);

  highlightedElements.forEach((element) => {
    const parent = element.parentNode;
    while (element.firstChild) {
      parent.insertBefore(element.firstChild, element);
    }
    parent.removeChild(element);
  });

};

export const highlightMatchedWord = (target, word) => {

// Clear existing highlights
  clearHighlights(target, 'coolest');

    // Regular expression to match all occurrences of the word, 
    // including partial matches and regardless of case
    const regex = new RegExp(word, "gi");

    // Get all the text nodes on the page
    const nodes = document.createTreeWalker(target, NodeFilter.SHOW_TEXT);

    const highlightTextNode = (textNode, matches) => {
        const text = textNode.nodeValue;
        const fragment = document.createDocumentFragment();
        let lastIndex = 0;

        matches.forEach((match) => {
          const matchedText = match[0];
          const matchedIndex = match.index;

          // Append the text before the match
          fragment.appendChild(document.createTextNode(text.slice(lastIndex, matchedIndex)));

          // Append the highlighted match with its original case
          const span = document.createElement("span");
          span.classList.add('coolest');
          span.style.backgroundColor = "yellow";
          span.appendChild(document.createTextNode(matchedText));
          fragment.appendChild(span);

          lastIndex = matchedIndex + matchedText.length;
        });

        // Append the remaining text after the last match
        fragment.appendChild(document.createTextNode(text.slice(lastIndex)));

        // Replace the original text node with the new nodes
        const parent = textNode.parentNode;
        parent.replaceChild(fragment, textNode);
    };

    const textNodes = [];

    // Loop through each text node and store them in an array
    while (nodes.nextNode()) {
        const node = nodes.currentNode;
        const text = node.nodeValue;
        regex.lastIndex = 0;

        if (text && regex.test(text)) {
        textNodes.push(node);
        }
    }

    // Loop through each stored text node and highlight the matches
    textNodes.forEach((node) => {
        regex.lastIndex = 0;
        const matches = Array.from(node.nodeValue.matchAll(regex));
        highlightTextNode(node, matches);
    });
};