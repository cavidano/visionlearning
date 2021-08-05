import "./_style.scss";

//////////////////////////////////////////////
// Glossary
//////////////////////////////////////////////

export default class Glossary {

    constructor() {

        const glossaryTermsButton = document.querySelector('[data-toggle="glossary"]');

        const termList = document.querySelectorAll('.term');

        if(glossaryTermsButton) {

            glossaryTermsButton.addEventListener('click', () => {

                termList.forEach((term) => {

                    term.classList.toggle('highlighted');

                });

            });

        }

    }
}