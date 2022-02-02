import './_style.scss';

//////////////////////////////////////////////
// Reading Toggles
//////////////////////////////////////////////

export default class ReadingToggles {

    constructor() {

        // NGSS
        
        const ngssToggleSwitch = document.getElementById('ngss-toggle-switch');
        const ngssTextList = document.querySelectorAll('.ngss');

        const ngssDescContainer = document.querySelector('.ngss-desc-container');

        // Terms

        const termsToggleSwitch = document.getElementById('terms-toggle-switch');
        const termsList = document.querySelectorAll('.term');

        const termDefContainer = document.querySelector('.term-def-container');

        const removeOldDetails = () => {

            console.log("Carl, you can do this!!")

            let oldDetailList = document.querySelectorAll('.reading-toggle-detail');

            if(oldDetailList.length > 0) {

                oldDetailList.forEach((item) => {
                    item.remove();
                });
            }

        }

        const turnOnNGSS = () => {

            ngssTextList.forEach((mark, index) => {

                mark.classList.add('highlighted');

                mark.setAttribute('tabindex', index + 1);

                mark.addEventListener('click', () => {

                    const ngssCat = mark.getAttribute('data-ngss-cat');
                    const ngssDesc = mark.getAttribute('data-ngss-desc');

                    removeOldDetails();

                    const ngssDescHTML = (`

                        <article
                            class="reading-toggle-detail"
                            aria-polite="live"
                            data-ngss-cat="${ngssCat}">

                            <div class="reading-toggle-detail__head">
                                ${ngssCat}
                            </div>

                            <div class="reading-toggle-detail__body">
                                <p>
                                    ${ngssDesc ? ngssDesc : 'That is not good.'}
                                </p>
                            </div>
                        
                        </article>      
                    `);

                    ngssDescContainer.insertAdjacentHTML('beforeend', ngssDescHTML);

                    let ngssDescContainerText = ngssDescContainer.querySelector('.reading-toggle-detail');

                    setTimeout(() => {ngssDescContainerText.classList.add('shown')}, 20);

                });

            });
        }

        const turnOffNGSS = () => {

            ngssToggleSwitch.checked = false;

            ngssTextList.forEach((mark) => {

                mark.classList.remove('highlighted');

                mark.setAttribute('tabindex', -1);

            });
        }

        const turnOnTerms = () => {

            termsList.forEach((term, index) => {

                term.classList.add('highlighted');

                term.setAttribute('tabindex', index + 1);

                term.addEventListener('click', () => {

                    const termTitle = term.innerHTML.toString();

                    const termDef = term.getAttribute('data-term-def');

                    removeOldDetails();

                    const ngssDescHTML = (`
                        <article
                            class="reading-toggle-detail"
                            aria-polite="live"
                            data-term-definition>

                            <div class="reading-toggle-detail__head">
                                <strong>Glossary Term</strong>
                            </div>
                        
                            <div class="reading-toggle-detail__body">
                                <h2 class="h6">
                                    ${termTitle}
                                </h2>
                                <p>
                                    ${termDef ? termDef : 'That is not good.'}
                                </p>
                            </div>
                        
                        </article>                        
                    `);

                    termDefContainer.insertAdjacentHTML('beforeend', ngssDescHTML);

                    let termDefContainerText = termDefContainer.querySelector('.reading-toggle-detail');

                    setTimeout(() => {termDefContainerText.classList.add('shown')}, 20);

                });

            });
        }

        const turnOffTerms = () => {

            termsToggleSwitch.checked = false;

            termsList.forEach((term) => {

                term.classList.remove('highlighted');

                term.setAttribute('tabindex', -1);

            });
        }

        //////////////////////////////////////////////
        // Terms
        //////////////////////////////////////////////

        if(termsToggleSwitch){

            termsToggleSwitch.addEventListener('change', (e) => {

                const highlightTerms = e.target.checked;

                if(highlightTerms === true){

                    if(ngssToggleSwitch.checked === true) {
                        turnOffNGSS();
                    }

                    turnOnTerms();

                } else {
                    turnOffTerms();
                }

            });
        }
        
        //////////////////////////////////////////////
        // NGSS
        //////////////////////////////////////////////

        if(ngssToggleSwitch) {

            ngssToggleSwitch.addEventListener('change', (e) => {

                const highlightNGSS = e.target.checked;

                if(highlightNGSS === true) {

                    if(termsToggleSwitch) {
                        turnOffTerms();
                    }

                    turnOnNGSS();

                } else {
                    turnOffNGSS();
                }

            });
        
        }       

    }
}