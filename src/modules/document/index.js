import "./_style.scss";

//////////////////////////////////////////////
// Document
//////////////////////////////////////////////

export default class Document {

    constructor() {
        
        ///////////////////////
        // Copyright Year
        ///////////////////////

        const copyrightYear = document.querySelector(".copyright-year");

        if (copyrightYear) {
            const currentYear = new Date().getFullYear();
            copyrightYear.innerHTML = currentYear;
        }

        ///////////////////////
        // Language & RTL 
        ///////////////////////

        window.addEventListener('load', () => {

            const googleSelect = document.querySelector(".goog-te-combo");

            if (typeof(googleSelect) != 'undefined' && googleSelect != null) {
              
                const translateLinkList = document.querySelectorAll("[data-lang]");

                translateLinkList.forEach((translateLink) => {
                    
                    translateLink.addEventListener("click", (event) => {

                        event.preventDefault();

                        let myLang = translateLink.getAttribute("data-lang");

                        setLanguage(myLang);

                    });
                });

                const setLanguage = (myLang) => {
                    googleSelect.value = myLang;
                    googleSelect.querySelector('option[value="' + myLang + '"]').selected = true;

                    fireEvent(googleSelect,'change');
                }

                const fireEvent = (element, event) => {

                    var evt;
                    
                    if (document.createEventObject){
                        evt = document.createEventObject();
                        return element.fireEvent('on' + event, evt)
                    } else {
                        evt = document.createEvent("HTMLEvents"); 
                        // event type, bubbling, cancelable
                        evt.initEvent(event, false, true);
                        return !element.dispatchEvent(evt);
                    }
                }  

            }

            const rtlTarget = document.querySelector("html");

            const rtlObserver = new MutationObserver((mutations) => {

                mutations.forEach(() => {

                    let single_class = "translated-rtl";

                    if (rtlTarget.classList.contains(single_class)) {
                        rtlTarget.setAttribute("dir", "rtl");
                    } else {
                        rtlTarget.setAttribute("dir", "ltr");
                    }

                });
            });

            const rtlConfig = {
                attributes: true,
                attributeFilter: ["class"]
            }

            rtlObserver.observe(rtlTarget, rtlConfig);

        });

        ///////////////////////
        // Custom Properties Polyfill
        ///////////////////////


        const isIE11 = /Trident\/|MSIE/.test(window.navigator.userAgent);

        const loadCustomPropertiesPolyfill = () => {

            const targetNode = document.querySelector('[name="viewport"]');
            const cpIEPolyfill = document.createElement('script');

            cpIEPolyfill.src = 'https://cdn.jsdelivr.net/npm/ie11-custom-properties@3.1.0/ie11CustomProperties.min.js';

            targetNode.parentNode.insertBefore(cpIEPolyfill, targetNode.nextSibling);

        }

        if (isIE11) {
            loadCustomPropertiesPolyfill();            
        }

        ///////////////////////
        // Custom Properties Polyfill
        ///////////////////////

        const libraryData = "./lib/json/vl-library.json";

        const moduleGridView = document.getElementById("module-grid-view");
        const moduleListView = document.getElementById("module-list-view");

        const truncateString = (yourString, maxLength) => {
            const index = yourString.indexOf(" ", maxLength);
            return index === -1 ? yourString : yourString.substring(0, index) + '...'
        }

        const loadLibraryData = async () => {
            try {
                const response = await fetch(libraryData);
                const moduleData = await response.json();

                console.log("libraryData ===== >", moduleData);

                displayModules(moduleData);

            } catch (err) {
                console.warn(err);
            }
        };

        const displayModules = (modules) => {

            const moduleDisplayHTML = modules.map((moduleArray) => {

                let discipline = moduleArray.discipline;
                let introduction = moduleArray.introduction;

                let categories = moduleArray.categories;

                const moduleGridHTML = categories.map((category) => {

                    return `
                            <div class="margin-y-5">

                                <h2 class="h4 margin-bottom-4">${category.name}</h2>

                                <div class="grid grid--columns-4">

                                ${category.modules.map((module) => {

                                    let summary = truncateString(module.summary, 120);

                                    return `

                                    <div class="card border">

                                        <div class="card__body">
                                            <h5 class=" font-weight-normal">
                                            <a class="link" href="{{ site.url }}/library/module.html">
                                                ${module.title}
                                            </a>
                                            </h5>
                                            <p>
                                                ${summary}
                                            </p>
                                        </div>

                                        <hr class="margin-x-3">

                                        <div class="card__body font-size-md">
                                            <strong>Did you know?</strong>
                                            <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa obcaecati autem, ex facilis labore reiciendis.
                                            </p>

                                            <strong>NGSS</strong>
                                            <p>
                                                HS-C6.2, HS-LS1.C2
                                            </p>
                                        </div>

                                        <div class="card__foot border-top font-size-md">
                                            <ul class="nav nav--horizontal justify-content-between">
                                                <li>
                                                    <a class="button button--icon-only border-radius-circle font-size-lg" href="#1">
                                                        <span class="vl_icon_bookmark-add button__icon"></span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="button button--outline rounded-pill" href="{{ site.url }}/library/module.html">Go To Module</a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>`;

                                }).join("")}
                            
                                </div>

                            </div>`;

                }).join('');

                const moduleListHTML = categories.map((category) => {

                    return `
                            <div class="margin-y-5">

                                <h2 class="h4 margin-bottom-4">${category.name}</h2>

                                <ul class="list-divider">

                                    ${category.modules.map((module) => {

                                        let summary = truncateString(module.summary, 120);

                                        return `
                                        <li>
                                            <span class="list-divider__cell">
                                                <a class="link" href="{{ site.url }}/library/module.html">
                                                    ${module.title}
                                                </a>
                                            </span>
                                            <span class="list-divider__cell">
                                                <div class="button-group justify-content-end">
                                                    <a class="button button--icon-only border-radius-circle font-size-lg" href="#1">
                                                        <span class="vl_icon_bookmark-add button__icon"></span>
                                                    </a>
                                                    <a class="button button--outline rounded-pill" href="#1">Go To Module</a>
                                                </div>
                                            </span>
                                        </li>`;

                                    }).join("")}
                                    
                                </ul>

                            </div>`;

                }).join('');

                moduleGridView.innerHTML = moduleGridHTML;
                moduleListView.innerHTML = moduleListHTML;
            });

            moduleDisplayHTML()


        };

        loadLibraryData();
    }
}