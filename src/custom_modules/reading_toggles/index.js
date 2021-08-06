import "./_style.scss";

//////////////////////////////////////////////
// Glossary
//////////////////////////////////////////////

export default class ReadingToggles {

    constructor() {

        const glossaryTermsButton = document.querySelector('[data-toggle="glossary"]');

        const termList = document.querySelectorAll('.term');

        if(glossaryTermsButton) {

            let hoverFocusDelay;

            const hoverFocusIn = (event) => {

                hoverFocusDelay = setTimeout(() => { 

                    termList.forEach((term) => {
                        term.classList.remove("tooltip-show");
                    });

                    event.target.classList.add("tooltip-show");
                    
                }, 400);
            };

            const hoverFocusOut = (event) => {
                clearTimeout(hoverFocusDelay);
                event.target.classList.remove("tooltip-show");
            }

            glossaryTermsButton.addEventListener('click', (event) => {

                event.preventDefault();

                glossaryTermsButton.classList.toggle('active');

                termList.forEach((term, index) => {

                    term.classList.toggle('highlighted');

                    term.setAttribute('tabindex', index + 1);

                    if(term.classList.contains('highlighted')){
                        initTooltip(term);
                    } else {
                        term.setAttribute('tabindex', 0);

                        removeTooltip(term);
                    }
                });

            });

            function initTooltip(term) {

                const termDefinition = term.getAttribute("data-definition");

                const tooltipHTML = (`
                    <span class="term__tooltip">
                        <span class="tooltip-header display-none">Glossary Term</span>
                        ${termDefinition}
                    </span>`
                );

                if(termDefinition) {
                    term.insertAdjacentHTML('beforeend', tooltipHTML);
                }

                term.addEventListener("mouseenter", hoverFocusIn);
                term.addEventListener("focusin", hoverFocusIn);

                term.addEventListener("mouseleave", hoverFocusOut);
                term.addEventListener("focusout", hoverFocusOut);

            }

            function removeTooltip(term) {

                console.log("not highlighted");
                
                const termTooltip = term.querySelector('.term__tooltip');

                termTooltip.remove();

                term.removeEventListener("mouseenter", hoverFocusIn);
                term.removeEventListener("focusin", hoverFocusIn);

                term.removeEventListener("mouseleave", hoverFocusOut);
                term.removeEventListener("focusout", hoverFocusOut);
                
            }

        }

    }
}