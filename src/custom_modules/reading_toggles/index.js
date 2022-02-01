import './_style.scss';

//////////////////////////////////////////////
// Reading Toggles
//////////////////////////////////////////////

export default class ReadingToggles {

    constructor() {
        
        const ngssToggleSwitch = document.getElementById('ngss-toggle-switch');
        const ngssTextList = document.querySelectorAll('.ngss');

        const ngssDescBlock = document.querySelector('.ngss-desc-block');


        const termsToggleSwitch = document.getElementById('terms-toggle-switch');
        const termsList = document.querySelectorAll('.term');

        const termDefBlock = document.querySelector('.toggle-detail-container');

        const turnOnNGSS = () => {

            ngssTextList.forEach((mark, index) => {

                mark.classList.add('highlighted');

                mark.setAttribute('tabindex', index + 1);

                mark.addEventListener('click', () => {

                    const ngssCat = mark.getAttribute('data-ngss-cat');
                    const ngssText = mark.getAttribute('data-ngss');

                    let oldNGSSDesc = ngssDescBlock.querySelectorAll('.ngss-desc-block__text');

                    oldNGSSDesc.forEach((desc) => {
                        desc.remove();
                    });

                    const ngssDescHTML = (`
                        <article class="ngss-desc-block__text box-shadow-1" data-ngss-cat="${ngssCat}" aria-polite="live">
                            <p class="font-size-md text-transform-uppercase margin-bottom-1">
                                <strong>
                                    <em>${ngssCat}</em>
                                </strong>
                            </p>
                            <p>
                                ${ngssText ? ngssText : 'That is not good.'}
                            </p>
                        </article>
                    `);

                    ngssDescBlock.insertAdjacentHTML('beforeend', ngssDescHTML);

                    let ngssDescBlockText = ngssDescBlock.querySelector('.ngss-desc-block__text');

                    setTimeout(() => {ngssDescBlockText.classList.add('shown')}, 20);

                });

            });
        }

        const turnOffNGSS = () => {

            ngssToggleSwitch.checked = false;

            ngssTextList.forEach((mark) => {

                mark.classList.remove('highlighted');

                mark.setAttribute('tabindex', -1);

                let oldNGSSDesc = ngssDescBlock.querySelectorAll('.ngss-desc-block__text');

                oldNGSSDesc.forEach((desc) => {
                    desc.remove();
                });

            });
        }

        const turnOffTerms = () => {

            termsToggleSwitch.checked = false;

            termsList.forEach((term) => {

                term.classList.remove('highlighted');

                term.setAttribute('tabindex', -1);

                let oldTermDef = termDefBlock.querySelectorAll('.toggle-detail-container__text');

                oldTermDef.forEach((desc) => {
                    desc.remove();
                });

            });
        }

        const turnOnTerms = () => {

            termsList.forEach((term, index) => {

                term.classList.add('highlighted');

                term.setAttribute('tabindex', index + 1);

                term.addEventListener('click', () => {

                    const termTitle = term.innerHTML.toString();

                    const termDef = term.getAttribute('data-term-def');

                    let oldTermDef = termDefBlock.querySelectorAll('.toggle-detail-container__text');

                    oldTermDef.forEach((desc) => {
                        desc.remove();
                    });

                    const ngssDescHTML = (`
                        <article
                            class="card theme-glossary border border-radius toggle-detail-container__text"
                            aria-polite="live"
                            style="--card-padding-x: var(--spacer-1);--card-padding-y: var(--spacer-2);">

                            <div class="card__head border-bottom">
                                <strong>Glossary Term</strong>
                            </div>
                        
                            <div class="card__body theme-white">
                                <h2 class="h6">
                                    ${termTitle}
                                </h2>
                                <p>
                                    ${termDef ? termDef : 'That is not good.'}
                                </p>
                            </div>
                        
                        </article>                        
                    `);

                    termDefBlock.insertAdjacentHTML('beforeend', ngssDescHTML);

                    let termDefBlockText = termDefBlock.querySelector('.ngss-desc-block__text');

                    setTimeout(() => {termDefBlockText.classList.add('shown')}, 20);

                });

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

                    // Turn Terms Toggle Off

                    if(termsToggleSwitch) {
                        termsToggleSwitch.checked = false;
                    }

                    turnOnNGSS();
                    turnOffTerms();

                } else {
                    turnOffNGSS();
                }

            });
        
        }       

    }
}