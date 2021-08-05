import "./_style.scss";

//////////////////////////////////////////////
// Glossary
//////////////////////////////////////////////

export default class Glossary {

    constructor() {

        const glossaryTermsButton = document.querySelector('[data-toggle="glossary"]');

        const termList = document.querySelectorAll('.term');

        if(glossaryTermsButton) {

            glossaryTermsButton.addEventListener('click', (event) => {

                event.preventDefault();

                glossaryTermsButton.classList.toggle('active');

                termList.forEach((term, index) => {

                    term.classList.toggle('highlighted');

                    term.setAttribute('tabindex', index + 1);

                    initTooltip(term);

                });

            });

            function initTooltip(term) {

                let hoverFocusDelay;

                const hoverFocusIn = (event) => {

                    hoverFocusDelay = setTimeout(() => { 

                        termList.forEach((term) => {
                            term.classList.remove("tooltip-show");
                        });

                        event.target.classList.add("tooltip-show");
                    }, 300);
                };

                const hoverFocusOut = (event) => {
                    clearTimeout(hoverFocusDelay);
                    event.target.classList.remove("tooltip-show");
                }

                const tooltipText = term.getAttribute("data-def");

                const tooltipHTML = `
                <span class="term__tooltip">
                    <span class="tooltip-header">Glossary Term</span>
                    ${tooltipText}
                </span>`;

                if(tooltipText) {

                    term.insertAdjacentHTML('beforeend', tooltipHTML);
                    
                    const buttonTooltip = term.querySelector(".term__tooltip");

                    const tooltipPosition = () => {

                        const buttonTooltipWidth = buttonTooltip.offsetWidth / 2;
                        const buttonPositionLeft = term.offsetLeft ;
                        const buttonPositionRight = window.innerWidth - (term.offsetLeft + term.offsetWidth);

                        if (buttonTooltipWidth > buttonPositionLeft) {
                            buttonTooltip.classList.add("left");
                        }

                        if (buttonTooltipWidth > buttonPositionRight) {
                            buttonTooltip.classList.add("right");
                        }

                    };

                    if (term.classList.contains('highlighted')){

                        tooltipPosition();

                        window.addEventListener("resize", tooltipPosition);

                        term.addEventListener("mouseenter", hoverFocusIn);
                        term.addEventListener("focusin", hoverFocusIn);

                        term.addEventListener("mouseleave", hoverFocusOut);
                        term.addEventListener("focusout", hoverFocusOut);
                    } else {
                        term.removeEventListener("mouseenter");
                        term.removeEventListener("focusin");
                    }

                }
            }


        }

    }
}