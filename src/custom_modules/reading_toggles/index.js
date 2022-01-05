import "./_style.scss";

//////////////////////////////////////////////
// Reading Toggles
//////////////////////////////////////////////

export default class ReadingToggles {

    constructor() {
        
        //////////////////////////////////////////////
        // Glossary Terms
        //////////////////////////////////////////////

        // const toggleGlossaryTerms = document.getElementById('toggle-highlight-glossary-terms');

        // if(toggleGlossaryTerms){

        //     let hoverFocusDelay;

        //     const hoverFocusIn = (event) => {

        //         hoverFocusDelay = setTimeout(() => { 

        //             termList.forEach((term) => {
        //                 term.classList.remove("tooltip-show");
        //             });

        //             event.target.classList.add("tooltip-show");
                    
        //         }, 400);
        //     };

        //     const hoverFocusOut = (event) => {
        //         clearTimeout(hoverFocusDelay);
        //         event.target.classList.remove("tooltip-show");
        //     }
        // }

        // toggleGlossaryTerms.addEventListener('change', e => {

        //     if(e.target.checked){
        //         //do something
        //     }
        
        // });
        
        const buttonToggleTerms = document.querySelector('[data-toggle="glossary"]');

        const termList = document.querySelectorAll('.term');

        if(buttonToggleTerms) {

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

            buttonToggleTerms.addEventListener('click', (event) => {

                event.preventDefault();

                buttonToggleTerms.classList.toggle('active');

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

                // term.setAttribute("data-modal-open", "modal-term");

                const tooltipHTML = (`
                    <span class="term__tooltip">
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

        //////////////////////////////////////////////
        // NGSS
        //////////////////////////////////////////////

        const buttonToggleNGSS = document.querySelector('[data-toggle="ngss"]');

        const ngssTextList = document.querySelectorAll('.ngss');

        if(buttonToggleNGSS) {

            buttonToggleNGSS.addEventListener('click', (event) => {
                event.preventDefault();

                buttonToggleNGSS.classList.toggle('active');

                ngssTextList.forEach((mark, index) => {

                    mark.classList.toggle('highlighted');

                    mark.setAttribute('tabindex', index + 1);
                });

            });

        }

        function initNGSS(){
            const whoa = document.querySelector('.ngss.highlighted');

            whoa.addEventListener('click', (event) => {
                event.preventDefault();

                alert('cool!')

            });

        }

    }
}