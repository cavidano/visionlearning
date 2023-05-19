!function(){"use strict";let t,e=0,s=document.querySelector("html");const i=(i,n)=>{s.removeAttribute("style"),s.classList.remove("has-overlay"),s.classList.length||s.removeAttribute("class"),i.setAttribute("aria-hidden",!0),window.scrollTo({top:e,behavior:"instant"}),t.focus()},n=function(){return[...(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll(["a[href]","button","input","textarea","select","details",'[tabindex]:not([tabindex="-1"])'])].filter((t=>!t.hasAttribute("disabled")&&!t.getAttribute("aria-hidden")))},o=t=>{let e=n(t),s=e[0],o=e[e.length-1];t.addEventListener("keydown",(e=>{switch(e.code){case"Tab":document.activeElement===o&&(e.shiftKey||(e.preventDefault(),s.focus())),document.activeElement===s&&e.shiftKey&&(e.preventDefault(),o.focus());break;case"Escape":i(t)}}))};const a=function(){return[...(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll(["a[href]","button","input","textarea","select","details",'[tabindex]:not([tabindex="-1"])'])].filter((t=>!t.hasAttribute("disabled")&&!t.getAttribute("aria-hidden")))},r=(t,e)=>{((t,e)=>{t.querySelectorAll(`span.${e}`).forEach((t=>{const e=t.parentNode;for(;t.firstChild;)e.insertBefore(t.firstChild,t);e.removeChild(t)}))})(t,"coolest");const s=new RegExp(e,"gi"),i=document.createTreeWalker(t,NodeFilter.SHOW_TEXT),n=[];for(;i.nextNode();){const t=i.currentNode,e=t.nodeValue;s.lastIndex=0,e&&s.test(e)&&n.push(t)}n.forEach((t=>{s.lastIndex=0;const e=Array.from(t.nodeValue.matchAll(s));((t,e)=>{const s=t.nodeValue,i=document.createDocumentFragment();let n=0;e.forEach((t=>{const e=t[0],o=t.index;i.appendChild(document.createTextNode(s.slice(n,o)));const a=document.createElement("span");a.classList.add("coolest"),a.style.backgroundColor="yellow",a.appendChild(document.createTextNode(e)),i.appendChild(a),n=o+e.length})),i.appendChild(document.createTextNode(s.slice(n))),t.parentNode.replaceChild(i,t)})(t,e)}))};(new class{#t=document.querySelectorAll(".alert--dismissable");#e='\n        <button class="button button--icon-only">\n            <span class="icon icon-close" aria-label="Close" aria-hidden="true">\n        </button>\n    ';closeAlert(t,e){t.preventDefault(),e.classList.add("dismissed");document.querySelector(".dismissed").addEventListener("animationend",(()=>{e.remove()}))}init(){this.#t.forEach((t=>{t.insertAdjacentHTML("afterbegin",this.#e);t.querySelector("button").addEventListener("click",(e=>{this.closeAlert(e,t)}))}))}}).init();(new class{#s=document.querySelectorAll(".button--icon-only");hoverFocusIn(t,e){return setTimeout((()=>{e.forEach((t=>{t.classList.remove("tooltip-show")})),t.target.classList.add("tooltip-show")}),300)}hoverFocusOut(t,e){clearTimeout(e),t.target.classList.remove("tooltip-show")}tooltipPosition(t,e){const s=e.offsetWidth/2,i=t.offsetLeft,n=window.innerWidth-(t.offsetLeft+t.offsetWidth);s>i&&e.classList.add("left"),s>n&&e.classList.add("right")}handleTooltip(t,e){const s=`\n            <span class="button__tooltip">\n                ${e}\n            </span>\n        `;if(e){t.insertAdjacentHTML("beforeend",s);const e=t.querySelector(".button__tooltip");let i;this.tooltipPosition(t,e),window.addEventListener("resize",(()=>this.tooltipPosition(t,e))),t.addEventListener("mouseenter",(t=>{i=this.hoverFocusIn(t,this.#s)})),t.addEventListener("focusin",(t=>{i=this.hoverFocusIn(t,this.#s)})),t.addEventListener("mouseleave",(t=>{this.hoverFocusOut(t,i)})),t.addEventListener("focusout",(t=>{this.hoverFocusOut(t,i)}))}}init(){this.#s.forEach((t=>{const e=t.getAttribute("aria-label");this.handleTooltip(t,e)}))}}).init();(new class{#i=document.querySelectorAll("[data-target-toggle]");handleClose(t,e){t.setAttribute("aria-expanded",!1),e.classList.remove("shown")}handleOpen(t,e,s){t.setAttribute("aria-expanded",!0),e.classList.add("shown"),s&&s.focus()}toggleCollapse(t,e){const s=t.target.getAttribute("data-target-toggle").replace(/#/,""),i=document.getElementById(s),o=n(i)[0],a=e.getAttribute("aria-expanded");return"true"===a?this.handleClose(e,i):"false"===a&&this.handleOpen(e,i,i.hasAttribute("data-focus-first")?o:null),{collapseTarget:i,firstFocusableElement:o}}handleKeyDown(t,e,s,i){switch(t.code){case"Tab":document.activeElement===i&&t.shiftKey&&(t.preventDefault(),e.focus());break;case"Escape":this.handleClose(e,s)}}init(){this.#i.forEach((t=>{t.setAttribute("aria-expanded",!1),t.addEventListener("click",(e=>{const{collapseTarget:s,firstFocusableElement:i}=this.toggleCollapse(e,t);if(s.addEventListener("keydown",(e=>{this.handleKeyDown(e,t,s,i)})),t.hasAttribute("data-target-close")){const t=e.target.getAttribute("data-target-close").replace(/#/,""),s=document.getElementById(t),i=document.querySelector(`[data-target-toggle="#${t}"]`);this.handleClose(i,s)}}))}))}}).init();const l=new class{#n=document.querySelectorAll("form[novalidate]");#o=document.querySelectorAll(".form-entry");#a=document.querySelectorAll(".file-upload");#r=!1;#l=["is-invalid"];isEmpty(){return""===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)}checkIfEmpty(t){return this.isEmpty(t.value)?(this.setInvalid(t),!0):(this.setValid(t),!1)}setInvalid(t){t.closest(".form-entry").classList.add(...this.#l)}setValid(t){t.closest(".form-entry").classList.remove(...this.#l)}createErrorMessage(t,e){return null===t&&(t="This field is Required"),`\n            <small class="form-entry__feedback">\n                <span class="icon icon-warn" aria-hidden="true"></span>\n                <span class="message">\n                    <strong>${t}</strong> ${void 0!==e?e:""}\n                </span>\n            </small>\n        `}handleFormSubmission(t){t.addEventListener("submit",(e=>{e.preventDefault(),this.#r=!0;let s=[],i=t.querySelectorAll(":invalid");this.processFormErrors(i,s),s.length>0&&e.preventDefault(),this.scrollToFirstError(t)}))}processFormErrors(t,e){t.forEach((t=>{let s=t.closest(".form-entry"),i=s.querySelector(".form-entry__field__label");s.classList.add("is-invalid");const n=s.querySelector(".form-entry__feedback"),o=s.querySelector(".form-entry__help");let a;o&&(a=o.innerHTML.toString());let r=s.getAttribute("data-error-message"),l=[r,a];e.push(l),null===n&&i.insertAdjacentHTML("afterend",this.createErrorMessage(r,a))}))}scrollToFirstError(t){let e=t.querySelector('[class*="alert"], [class*="invalid"]');if(e){e.hasAttribute("data-alert")&&(e.style.display="block");let t=e.offsetTop-16;window.scrollTo({top:t,behavior:"smooth"})}}handleFormInputs(t){const e=t.querySelectorAll(["email","input","select","tel","textarea"]);let s=t.hasAttribute("data-required");e.forEach((t=>this.processFormEntryInput(t,s)))}processFormEntryInput(t,e){const s=t.closest(".form-entry").querySelector(".form-entry__field__input");let i=".form-entry";if("INPUT"===t.tagName){const e=t.getAttribute("type");"radio"!==e&&"checkbox"!==e||t.disabled&&t.closest("label").classList.add("disabled")}t.addEventListener("focusin",this.focusIn(i)),t.addEventListener("focusout",this.focusOut(i)),e&&(t.setAttribute("required","true"),t.setAttribute("aria-required",!0)),t.addEventListener("change",(()=>this.handleInputChange(t,e))),s&&s.addEventListener("click",this.handleClickOnInputText)}focusIn(t){return function(){this.closest(t).classList.add("active")}}focusOut(t){return function(){this.closest(t).classList.remove("active")}}handleInputChange(t,e){this.#r&&e&&this.checkIfEmpty(t),""!==t.value?t.closest(".form-entry").classList.add("has-value"):t.closest(".form-entry").classList.remove("has-value")}handleClickOnInputText(t){let e=t.target.tagName,s=t.target.closest(".form-entry__field__input").querySelector("input");"SPAN"===e&&s.focus()}handleFileUpload(t){t.querySelector('input[type="file"]').addEventListener("change",this.handleFileChange(t)),t.addEventListener("dragenter",this.dragOver),t.addEventListener("dragleave",this.dragOff),t.addEventListener("dragend",this.dragOff),t.addEventListener("drop",this.dropped)}handleFileChange(t){return function(e){const[s]=e.target.files,{name:i,size:n}=s,o=`\n                <span class="file-upload__data">\n                    <span class="file-name">${i}</span>\n                    <span class="file-size">${(n/1e3).toFixed(2)} kb</span>\n                </span>\n            `,a=t.querySelector(".file-upload__data");a&&a.remove(),t.insertAdjacentHTML("beforeend",o)}}dragOver(){this.closest(".form-entry").classList.add("active")}dragOff(){this.closest(".form-entry").classList.remove("active")}dropped(){this.closest(".form-entry").classList.remove("active")}init(){this.#n.forEach((t=>this.handleFormSubmission(t))),this.#o.forEach((t=>this.handleFormInputs(t))),this.#a.forEach((t=>this.handleFileUpload(t)))}};l.init();(new class{#c=document.querySelectorAll('[data-toggle="dropdown"]');#d(t,e){e.classList.toggle("shown");let s=t.getAttribute("aria-expanded");"true"===s?t.setAttribute("aria-expanded","false"):"false"===s&&t.setAttribute("aria-expanded","true")}#h(t,e){e.classList.remove("shown"),t.setAttribute("aria-expanded","false")}init(){this.#c&&(window.addEventListener("click",(t=>{this.#c.forEach((e=>{let s=e.closest("li"),i=e.nextElementSibling;s.contains(t.target)||this.#h(e,i)}))})),this.#c.forEach((t=>{let e=t.nextElementSibling;e&&(t.setAttribute("aria-expanded","false"),t.setAttribute("aria-haspopup","true"),t.addEventListener("click",(s=>{s.preventDefault(),this.#d(t,e)})))})))}}).init();(new class{#u=document.querySelectorAll('[class*="table--stack"]');#g=document.querySelectorAll(".table-scroll");populateHeaders(t){const e=t.querySelectorAll("thead th"),s=t.querySelectorAll("tbody tr");let i=[];e.forEach((t=>{if(""!==t.textContent){const e=t.textContent.trim();i.push(e)}})),s.forEach((t=>{t.querySelectorAll("td").forEach(((t,e)=>{let s=`\n                    <div class="td-content">\n                        ${t.innerHTML}\n                    </div>\n                `;t.innerHTML=s,t.setAttribute("data-header",i[e])}))}))}initTableScroll(){this.#g.forEach((t=>{let e=t.querySelector(".table-scroll__container"),s=t.offsetWidth;e.scrollWidth>s?t.setAttribute("data-scroll",!0):t.setAttribute("data-scroll",!1),e.addEventListener("scroll",(()=>{e.scrollLeft>1?e.setAttribute("data-scrolling",!0):e.setAttribute("data-scrolling",!1)}),{passive:!0})}))}init(){this.#u.forEach((t=>{this.populateHeaders(t)})),this.initTableScroll(),window.addEventListener("resize",(()=>this.initTableScroll()))}}).init();(new class{#m=document.querySelectorAll(".tabs");activateTab(t,e,s){this.deactivateTabs(e,s),t.setAttribute("aria-selected","true");let i=t.getAttribute("aria-controls"),n=document.getElementById(i);n.classList.add("shown"),n.removeAttribute("hidden")}deactivateTabs(t,e){t.forEach((t=>{t.setAttribute("aria-selected","false")})),e.forEach((t=>{t.classList.remove("shown"),t.setAttribute("hidden","")}))}directionalFocus(t,e,s,i){t.preventDefault();let n=e+i;-1===i&&n<0?s[s.length-1].focus():1===i&&n>=s.length?s[0].focus():s[n].focus()}init(){this.#m.forEach((t=>{const e=t.querySelectorAll('[role="tab"]'),s=t.querySelectorAll('[role="tabpanel"]');e.forEach(((t,i)=>{t.addEventListener("click",(t=>{let i=t.target;this.activateTab(i,e,s)})),t.addEventListener("keydown",(t=>{switch(t.code){case"Home":t.preventDefault(),e[0].focus();break;case"End":t.preventDefault(),e[e.length-1].focus();break;case"ArrowLeft":this.directionalFocus(t,i,e,-1);break;case"ArrowRight":this.directionalFocus(t,i,e,1)}}))}))}))}}).init();(new class{#b=document.querySelectorAll(".grid--discipline .backdrop");init(){let t,e=(s=1200,window.matchMedia(`(min-width: ${s}px)`)).matches;var s;this.#b.forEach((s=>{const i=e=>{e.preventDefault(),t=setTimeout((()=>{s.classList.remove("unfocused"),s.classList.add("focused")}),500)},n=e=>{e.preventDefault(),clearTimeout(t),s.classList.contains("focused")&&(s.classList.remove("focused"),s.classList.add("unfocused"),s.addEventListener("animationend",(()=>{s.classList.remove("unfocused")})))};e?(s.addEventListener("mouseenter",i),s.addEventListener("mouseleave",n)):(s.removeEventListener("mouseenter",i),s.removeEventListener("mouseleave",n))}))}}).init();const c=new class{#p=document.querySelectorAll(".modal");#f=document.querySelectorAll("[data-modal-open]");#v=0;init(){const t=t=>{if(!t)return;this.#v=window.pageYOffset,document.querySelector("html").style.setProperty("--scroll-position",`-${this.#v}px`),document.querySelector("html").classList.add("has-overlay"),t.setAttribute("aria-hidden",!1);const e=document.activeElement,s=t.querySelector(".modal__content"),i=t.querySelector(".modal__content__head");let n;const o=()=>{n=`${s.offsetWidth}px`,i.style.width=n};window.addEventListener("resize",o),o();const r=i.offsetHeight;let l;const c=()=>{const e=t.scrollTop,n=(t=>{let e=0;for(;t;)e+=t.offsetTop,t=t.offsetParent;return e})(s);l=n-e,l<=0?(i.classList.add("sticky","theme-primary","box-shadow-1"),i.nextElementSibling.style.paddingTop=`${r}px`):(i.classList.remove("sticky","theme-primary","box-shadow-1"),i.nextElementSibling.style.paddingTop="initial")};if(t.addEventListener("scroll",c),c(),!s)return;s.setAttribute("tabindex",0),s.focus(),s.setAttribute("tabindex",-1),t.classList.contains("modal--scroll-all")&&(t.scrollTop=0);const d=t.querySelectorAll("[data-modal-close]"),h=t=>{s.contains(t.target)||u()},u=()=>{t.setAttribute("aria-hidden",!0),e.focus(),document.querySelector("html").classList.remove("has-overlay"),window.scrollTo({top:this.#v,behavior:"instant"}),window.removeEventListener("click",h)},g=a(t),m=g[0],b=g[g.length-1];t.addEventListener("keydown",(t=>{switch(t.code){case"Tab":document.activeElement===b&&(t.shiftKey||(t.preventDefault(),m.focus())),document.activeElement===m&&t.shiftKey&&(t.preventDefault(),b.focus()),document.activeElement===s&&t.shiftKey&&(t.preventDefault(),m.focus());break;case"Escape":u()}})),d.forEach((t=>{t.addEventListener("click",u),t.setAttribute("aria-label","Close Modal Window")})),"true"===t.dataset.modalCloseOutside&&window.addEventListener("click",h)};this.#p.forEach((t=>{const e=t.querySelector(".modal__content");e.setAttribute("role","dialog"),e.setAttribute("aria-modal",!0),t.setAttribute("aria-hidden",!0)})),this.#f.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const s=e.target.getAttribute("data-modal-open").replace(/#/,""),i=document.getElementById(s);t(i),e.stopPropagation()}))}))}};c.init();const d=new class{#L=document.querySelectorAll(".accordion");init(){this.#L.forEach((t=>{const e=t.querySelectorAll(':scope > [data-accordion="button"]'),s=t.querySelectorAll(':scope > [data-accordion="panel"]'),i=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const s=a(t);for(const t of s)!0===e?t.setAttribute("tabindex",0):!1===e&&t.setAttribute("tabindex",-1)};e.forEach(((t,n)=>{const o=t.nextElementSibling;let a=t.getAttribute("aria-expanded");t.setAttribute("tabindex",0),"true"===a?(o.classList.add("show"),i(o,!0)):(t.setAttribute("aria-expanded",!1),o.setAttribute("aria-hidden",!0),i(o,!1));const r=e=>{e.preventDefault(),e.stopPropagation();for(const t of s)t.classList.remove("show"),t!==o&&(t.classList.remove("shown"),t.style.maxHeight=null,t.previousElementSibling.setAttribute("aria-expanded",!1),t.setAttribute("aria-hidden",!0),i(t,!1));o.classList.toggle("shown"),a=t.getAttribute("aria-expanded"),"true"===a?(t.setAttribute("aria-expanded",!1),o.setAttribute("aria-hidden",!0),i(o,!1)):"false"===a&&(t.setAttribute("aria-expanded",!0),o.setAttribute("aria-hidden",!1),i(o,!0));let n=new Event("accTrigger",{bubbles:!0});document.dispatchEvent(n)};t.addEventListener("click",(t=>{r(t)})),t.addEventListener("keydown",(t=>{const s=s=>{t.preventDefault();let i=n+s;-1===s&&i<0?e[e.length-1].focus():1===s&&i>=e.length?e[0].focus():e[i].focus()};switch(t.code){case"ArrowUp":s(-1);break;case"ArrowDown":s(1)}})),t.addEventListener("keyup",(t=>{"Enter"===t.code&&"BUTTON"!==t.target.tagName&&r(t)}))}))}))}};d.init();(new class{#y=document.querySelectorAll(".comprehension-checkpoint");#E=document.querySelectorAll(".comprehension-checkpoint input");#A=document.querySelectorAll(".quiz__response");#x=t=>{const e=t.currentTarget;this.#E.forEach((t=>{t!==e&&(t.checked=!1)})),this.#A.forEach((t=>{t.classList.remove("shown")}));const s=e.closest("label").nextElementSibling;t.currentTarget.checked&&s.classList.add("shown")};init(){this.#y&&this.#y.forEach((t=>{t.querySelectorAll("input").forEach((t=>{t.addEventListener("change",(t=>{this.#x(t)}))}))}))}}).init(),new class{constructor(){const t=document.getElementById("ngss-toggle-switch"),e=document.querySelectorAll(".ngss"),s=document.querySelector(".ngss-desc-container"),i=document.getElementById("terms-toggle-switch"),n=document.querySelectorAll(".term"),o=document.querySelector(".term-def-container");let a,r;const l=()=>{let t=document.querySelectorAll(".reading-toggle-detail");t.length>0&&t.forEach((t=>{t.remove()}))},c=()=>{t.checked=!1,e.forEach((t=>{t.classList.remove("highlighted"),t.setAttribute("tabindex",-1),t.removeEventListener("click",a,!0)})),l()},d=()=>{i.checked=!1,n.forEach((t=>{t.classList.remove("highlighted"),t.setAttribute("tabindex",-1),t.removeEventListener("click",r)})),l()};i&&i.addEventListener("change",(e=>{!0===e.target.checked?(!0===t.checked&&c(),n.forEach(((t,e)=>{t.classList.add("highlighted"),t.setAttribute("tabindex",e+1),r=()=>{const e=t.innerHTML.toString(),s=t.getAttribute("data-term-def"),i=t.getAttribute("data-term-url");l();const n=`\n                        <article\n                            class="reading-toggle-detail glossary-term"\n                            aria-polite="live"\n                            data-term-definition>\n\n                            <div class="reading-toggle-detail__head">\n                                <strong>Glossary Term</strong>\n                            </div>\n                        \n                            <div class="reading-toggle-detail__body">\n\n                                <h2 class="h6">\n                                    ${e}\n                                </h2>\n                            \n                                <p>\n                                    ${s||"That is not good."}\n                                </p>\n                            \n                                <p>\n                                    <a href="${i||"#1"}">\n                                        View in Glossary\n                                    </a>\n                                </p>\n\n                            </div>\n                        \n                        </article>                        \n                    `;o.insertAdjacentHTML("beforeend",n);let a=o.querySelector(".reading-toggle-detail");setTimeout((()=>{a.classList.add("shown")}),20)},t.addEventListener("click",r)}))):d()})),t&&t.addEventListener("change",(t=>{!0===t.target.checked?(!0===i.checked&&d(),e.forEach(((t,e)=>{t.classList.add("highlighted"),t.setAttribute("tabindex",e+1),a=()=>{const e=t.getAttribute("data-ngss-cat"),i=t.getAttribute("data-ngss-comment"),n=t.getAttribute("data-ngss-desc");l();const o=`\n\n                        <article\n                            class="reading-toggle-detail"\n                            aria-polite="live"\n                            data-ngss-cat="${e}">\n\n                            <div class="reading-toggle-detail__head">\n                                ${e}\n                            </div>\n\n                            <div class="reading-toggle-detail__body">\n                                <p>\n                                    ${i||n}\n                                </p>\n                            </div>\n                        \n                        </article>      \n                    `;s.insertAdjacentHTML("beforeend",o);let a=s.querySelector(".reading-toggle-detail");setTimeout((()=>{a.classList.add("shown")}),20)},t.addEventListener("click",a,!0)}))):c()}))}};(new class{#w=document.querySelectorAll("img[data-lightbox]");#S='\n    <div class="button-group lightbox__buttons">\n      <button class="button button--icon-only" data-lightbox-previous>\n          <span class="icon icon-arrow-left" aria-label="Previous" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-next>\n          <span class="icon icon-arrow-right" aria-label="Next" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-close>\n          <span class="icon icon-close" aria-label="Close" aria-hidden="true"></span>\n      </button>\n    </div>\n    <figure class="lightbox__container">\n        <div class="lightbox__image"></div>           \n      <figcaption class="lightbox__caption">A caption for the image.</figcaption>\n    </figure>\n  ';#k='<video controls><source src="" type="video/mp4"></video>';#q='<img src="https://source.unsplash.com/1600x900" />';#T=[];init(){this.configureLightboxElements(),this.initEventListeners()}configureLightboxElements(){this.#w.forEach(((t,e)=>{const s=document.createElement("button");s.setAttribute("class","lightbox-element"),this.wrap(t,s),this.#T.push(this.setImgProperties(t))}))}initEventListeners(){this.#w.forEach(((t,e)=>{t.closest("button").addEventListener("click",this.handleClick(t,e))}))}wrap=(t,e)=>{t.parentNode.insertBefore(e,t),e.appendChild(t)};setImgProperties=t=>({imgType:t.getAttribute("data-lightbox")||"image",imgSrc:t.getAttribute("data-lightbox-src")||t.src||null,imgCaption:t.getAttribute("data-lightbox-caption")||t.alt||null,imgAlt:t.getAttribute("data-lightbox-alt")||t.alt||"",imgWidth:t.getAttribute("data-lightbox-width")||null});handleClick=(i,n)=>i=>{var a;i.preventDefault(),this.lightbox=this.createLightbox(),this.currentLB=n,a=this.lightbox,t=document.activeElement,e=window.pageYOffset,s.style.setProperty("--scroll-position",`-${e}px`),s.classList.add("has-overlay"),a.setAttribute("aria-hidden",!1),o(a),this.updateLightbox(n),window.addEventListener("keyup",this.handleLightboxUpdate)};handleLightboxClose=t=>{t.target===t.currentTarget&&(i(this.lightbox),document.body.removeChild(this.lightbox),this.removeLightboxUpdateHandler())};handleLightboxUpdate=t=>{let e;switch(t.preventDefault(),t.code){case"ArrowLeft":e=-1,document.querySelector("[data-lightbox-previous]").focus();break;case"ArrowRight":e=1,document.querySelector("[data-lightbox-next]").focus();break;default:return}this.updateDirection(e)};removeLightboxUpdateHandler(){window.removeEventListener("keyup",this.handleLightboxUpdate)}handleNextPrevious=t=>{let e;t.target.hasAttribute("data-lightbox-previous")?e=-1:t.target.hasAttribute("data-lightbox-next")&&(e=1),this.updateDirection(e),t.preventDefault()};updateLightbox=t=>{const e=this.lightbox.querySelector(".lightbox__image"),s=this.lightbox.querySelector(".lightbox__caption");let i;"video"===this.#T[t].imgType?(e.innerHTML=this.#k,i=e.querySelector("source")):(e.innerHTML=this.#q,i=e.querySelector("img"),i.alt=this.#T[t].imgAlt),i.src=this.#T[t].imgSrc,s.innerHTML=this.#T[t].imgCaption,this.#T[t].imgWidth&&i.setAttribute("width",this.#T[t].imgWidth)};updateDirection=t=>{this.currentLB+=t,this.currentLB<0?this.currentLB=this.#T.length-1:this.currentLB>=this.#T.length&&(this.currentLB=0),this.updateLightbox(this.currentLB)};createLightbox=()=>{const t=document.createElement("div");t.classList.add("lightbox"),t.setAttribute("aria-hidden",!0),t.innerHTML=this.#S,document.body.appendChild(t);const e=t.querySelector("[data-lightbox-previous]"),s=t.querySelector("[data-lightbox-next]"),i=t.querySelector("[data-lightbox-close]");return t.querySelector(".lightbox__image").classList.add("box-shadow-3"),i.addEventListener("click",this.handleLightboxClose),t.addEventListener("click",this.handleLightboxClose),e.addEventListener("click",this.handleNextPrevious),s.addEventListener("click",this.handleNextPrevious),t}}).init();(new class{#_=document.querySelectorAll("section");#C=document.querySelectorAll("a.nav-link");addClickListeners(){this.#C.forEach((t=>{const e=t.getAttribute("href").split("#")[1];t.addEventListener("click",(t=>{t.preventDefault();document.querySelector(`#${e}`).scrollIntoView({behavior:"instant"})}))}))}addScrollListeners(){window.addEventListener("scroll",(()=>{const t=this.#_.length-[...this.#_].reverse().findIndex((t=>window.scrollY>=t.offsetTop-100))-1;this.#C.forEach((t=>{t.setAttribute("aria-selected","false")})),t>=0&&this.#C[t].setAttribute("aria-selected","true")}))}init(){this.#C.length>0&&this.#_.length>0&&(this.addClickListeners(),this.addScrollListeners())}}).init();(new class{#I=document.querySelector("#search-input");#D=document.querySelector("#search-clear");#B=document.querySelector("#search-results");#F=t=>{const e=t.target.value;this.#D.style.display=e?"flex":"none"};#H=()=>{const t="true"===this.#D.getAttribute("aria-hidden");this.#D.setAttribute("aria-hidden",!t)};#M=t=>{t.preventDefault(),this.#I.value="",this.#I.focus(),this.#D.style.display="none"};#O=t=>{"Enter"===t.key&&(t.preventDefault(),r(this.#B,this.#I.value))};init(){this.#I&&(this.#I.value&&(this.#D.style.display="flex",this.#D.setAttribute("aria-hidden",!1)),this.#I.addEventListener("input",this.#F),this.#I.addEventListener("change",this.#H),this.#D.addEventListener("click",this.#M),this.#I.addEventListener("keydown",this.#O))}}).init()}();