!function(){"use strict";const e=function(){return[...(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll(["a[href]","button","input","textarea","select","details",'[tabindex]:not([tabindex="-1"])'])].filter((e=>!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")))},t=(e,t)=>{((e,t)=>{e.querySelectorAll(`span.${t}`).forEach((e=>{const t=e.parentNode;for(;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e)}))})(e,"coolest");const n=new RegExp(t,"gi"),s=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),i=[];for(;s.nextNode();){const e=s.currentNode,t=e.nodeValue;n.lastIndex=0,t&&n.test(t)&&i.push(e)}i.forEach((e=>{n.lastIndex=0;const t=Array.from(e.nodeValue.matchAll(n));((e,t)=>{const n=e.nodeValue,s=document.createDocumentFragment();let i=0;t.forEach((e=>{const t=e[0],a=e.index;s.appendChild(document.createTextNode(n.slice(i,a)));const o=document.createElement("span");o.classList.add("coolest"),o.style.backgroundColor="yellow",o.appendChild(document.createTextNode(t)),s.appendChild(o),i=a+t.length})),s.appendChild(document.createTextNode(n.slice(i))),e.parentNode.replaceChild(s,e)})(e,t)}))};(new class{#e=document.querySelectorAll(".alert--dismissable");#t='\n        <button class="button button--icon-only">\n            <span class="icon icon-close" aria-label="Close" aria-hidden="true">\n        </button>\n    ';init(){this.#e.forEach((e=>{e.insertAdjacentHTML("afterbegin",this.#t);e.querySelector("button").addEventListener("click",(t=>{t.preventDefault(),e.classList.add("dismissed");document.querySelector(".dismissed").addEventListener("animationend",(()=>{e.remove()}))}))}))}}).init();(new class{#n=document.querySelectorAll(".button--icon-only");init(){let e;const t=t=>{e=setTimeout((()=>{this.#n.forEach((e=>{e.classList.remove("tooltip-show")})),t.target.classList.add("tooltip-show")}),300)},n=t=>{clearTimeout(e),t.target.classList.remove("tooltip-show")};this.#n.forEach((e=>{const s=e.getAttribute("aria-label"),i=`\n                <span class="button__tooltip">\n                    ${s}\n                </span>\n            `;if(s){e.insertAdjacentHTML("beforeend",i);const s=e.querySelector(".button__tooltip"),a=()=>{const t=s.offsetWidth/2,n=e.offsetLeft,i=window.innerWidth-(e.offsetLeft+e.offsetWidth);t>n&&s.classList.add("left"),t>i&&s.classList.add("right")};a(),window.addEventListener("resize",a),e.addEventListener("mouseenter",t),e.addEventListener("focusin",t),e.addEventListener("mouseleave",n),e.addEventListener("focusout",n)}}))}}).init();(new class{#s=document.querySelectorAll("[data-target-toggle]");init(){this.#s.forEach((t=>{t.setAttribute("aria-expanded",!1),t.addEventListener("click",(n=>{const s=n.target.getAttribute("data-target-toggle").replace(/#/,""),i=document.getElementById(s),a=e(i)[0];let o=t.getAttribute("aria-expanded");const r=(e,t)=>{e.setAttribute("aria-expanded",!1),t.classList.remove("shown")};var l;"true"===o?r(t,i):"false"===o&&(l=i,t.setAttribute("aria-expanded",!0),l.classList.add("shown"),i.hasAttribute("data-focus-first")&&a.focus()),i.addEventListener("keydown",(e=>{switch(e.code){case"Tab":document.activeElement===a&&e.shiftKey&&(e.preventDefault(),t.focus());break;case"Escape":r(t,i)}}));if(t.hasAttribute("data-target-close")){const e=n.target.getAttribute("data-target-close").replace(/#/,""),t=document.getElementById(e),s=document.querySelector(`[data-target-toggle="#${e}"]`);r(s,t)}}))}))}}).init();const n=new class{#i=document.querySelectorAll("form[novalidate]");#a=document.querySelectorAll(".form-entry");#o=document.querySelectorAll(".file-upload");init(){let e=!1;const t=function(){return""===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)},n=["is-invalid"],s=e=>{e.closest(".form-entry").classList.add(...n)},i=e=>{e.closest(".form-entry").classList.remove(...n)};this.#i.forEach((t=>{t.addEventListener("submit",(n=>{n.preventDefault(),e=!0;let s=[];t.querySelectorAll(":invalid").forEach((e=>{let t=e.closest(".form-entry"),n=t.querySelector(".form-entry__field__label");t.classList.add("is-invalid");const i=t.querySelector(".form-entry__feedback"),a=t.querySelector(".form-entry__help");let o;a&&(o=a.innerHTML.toString());let r=t.getAttribute("data-error-message"),l=[r,o];var c,d;s.push(l),null===i&&n.insertAdjacentHTML("afterend",(null===(c=r)&&(c="This field is Required"),`\n                <small class="form-entry__feedback">\n                    <span class="icon icon-warn" aria-hidden="true"></span>\n                    <span class="message">\n                        <strong>${c}</strong> ${void 0!==(d=o)?d:""}\n                    </span>\n                </small>\n            `))})),s.length>0&&n.preventDefault();let i=t.querySelector('[class*="alert"], [class*="invalid"]');if(i){i.hasAttribute("data-alert")&&(i.style.display="block");let e=i.offsetTop-16;window.scrollTo({top:e,behavior:"smooth"})}}))})),this.#a.forEach((n=>{const a=n.querySelectorAll(["input","select","textarea"]);let o;o=!!n.hasAttribute("data-required"),a.forEach((a=>{const r=n.querySelector(".form-entry__field__input"),l=a.tagName;let c=".form-entry";if("INPUT"===l){const e=a.getAttribute("type");"radio"!==e&&"checkbox"!==e||a.disabled&&a.closest("label").classList.add("disabled")}a.addEventListener("focusin",(function(){this.closest(c).classList.add("active")})),a.addEventListener("focusout",(function(){this.closest(c).classList.remove("active")})),!0===o&&(a.setAttribute("required","true"),a.setAttribute("aria-required",!0)),a.addEventListener("change",(()=>{var n;!0===e&&!0===o&&(t((n=a).value)?s(n):i(n))})),r&&r.addEventListener("click",(e=>{let t=e.target.tagName,n=e.target.closest(".form-entry__field__input").querySelector("input");"SPAN"===t&&n.focus()}))}))})),this.#o.forEach((e=>{e.querySelector('input[type="file"]').addEventListener("change",(t=>{const[n]=t.target.files,{name:s,size:i}=n,a=`\n                    <span class="file-upload__data">\n                        <span class="file-name">${s}</span>\n                        <span class="file-size">${(i/1e3).toFixed(2)} kb</span>\n                    </span>\n                `,o=e.querySelector(".file-upload__data");o&&o.remove(),e.insertAdjacentHTML("beforeend",a)}));const t=()=>{e.closest(".form-entry").classList.remove("active")};e.addEventListener("dragenter",(()=>{e.closest(".form-entry").classList.add("active")})),e.addEventListener("dragleave",t),e.addEventListener("dragend",t),e.addEventListener("drop",(()=>{e.closest(".form-entry").classList.remove("active")}))}))}};n.init();(new class{#r=document.querySelectorAll('[data-toggle="dropdown"]');init(){this.#r.forEach((e=>{let t=e.closest("li"),n=e.nextElementSibling;e.setAttribute("aria-expanded",!1),e.setAttribute("aria-haspopup",!0),e.addEventListener("click",(t=>{t.preventDefault(),n.classList.toggle("shown");let s=e.getAttribute("aria-expanded");"true"===s?e.setAttribute("aria-expanded",!1):"false"===s&&e.setAttribute("aria-expanded",!0)})),window.addEventListener("click",(s=>{t.contains(s.target)||(n.classList.remove("shown"),e.setAttribute("aria-expanded",!1))}))}))}}).init();(new class{#l=document.querySelectorAll('[class*="table--stack"]');#c=document.querySelectorAll(".table-scroll");init(){this.#l.forEach((e=>{const t=e.querySelectorAll("thead th"),n=e.querySelectorAll("tbody tr");let s=[];t.forEach((e=>{if(""!==e.textContent){let t=e.textContent.trim();s.push(t)}})),n.forEach((e=>{e.querySelectorAll("td").forEach(((e,t)=>{let n=`\n                        <div class="td-content">\n                            ${e.innerHTML}\n                        </div>\n                    `;e.innerHTML=n,e.setAttribute("data-before",s[t])}))}))}));const e=()=>{this.#c.forEach((e=>{let t=e.querySelector(".table-scroll__container"),n=e.offsetWidth;t.scrollWidth>n?e.setAttribute("data-scroll",!0):e.setAttribute("data-scroll",!1),t.addEventListener("scroll",(()=>{t.scrollLeft>1?t.setAttribute("data-scrolling",!0):t.setAttribute("data-scrolling",!1)}),{passive:!0})}))};e(),window.addEventListener("resize",e)}}).init();(new class{#d=document.querySelectorAll(".tabs");init(){this.#d.forEach((e=>{const t=e.querySelectorAll('[role="tab"]'),n=e.querySelectorAll('[role="tabpanel"]');t.forEach(((e,s)=>{const i=()=>{t.forEach((e=>{e.setAttribute("aria-selected","false")})),n.forEach((e=>{e.classList.remove("shown"),e.setAttribute("hidden","")}))};e.addEventListener("click",(e=>{(e=>{i(),e.setAttribute("aria-selected","true");let t=e.getAttribute("aria-controls"),n=document.getElementById(t);n.classList.add("shown"),n.removeAttribute("hidden")})(e.target)})),e.addEventListener("keydown",(e=>{const n=n=>{e.preventDefault();let i=s+n;-1===n&&i<0?t[t.length-1].focus():1===n&&i>=t.length?t[0].focus():t[i].focus()};switch(e.code){case"Home":(e=>{e.preventDefault(),t[0].focus()})(e);break;case"End":(e=>{e.preventDefault(),t[t.length-1].focus()})(e);break;case"ArrowLeft":n(-1);break;case"ArrowRight":n(1)}}))}))}))}}).init();(new class{#u=document.querySelectorAll(".grid--discipline .backdrop");init(){let e,t=(n=1200,window.matchMedia(`(min-width: ${n}px)`)).matches;var n;this.#u.forEach((n=>{const s=t=>{t.preventDefault(),e=setTimeout((()=>{n.classList.remove("unfocused"),n.classList.add("focused")}),500)},i=t=>{t.preventDefault(),clearTimeout(e),n.classList.contains("focused")&&(n.classList.remove("focused"),n.classList.add("unfocused"),n.addEventListener("animationend",(()=>{n.classList.remove("unfocused")})))};t?(n.addEventListener("mouseenter",s),n.addEventListener("mouseleave",i)):(n.removeEventListener("mouseenter",s),n.removeEventListener("mouseleave",i))}))}}).init();(new class{#h=document.querySelectorAll(".modal");#g=document.querySelectorAll("[data-modal-open]");#m=0;init(){const t=t=>{if(!t)return;this.#m=window.pageYOffset,document.querySelector("html").style.setProperty("--scroll-position",`-${this.#m}px`),document.querySelector("html").classList.add("has-overlay"),t.setAttribute("aria-hidden",!1);const n=document.activeElement,s=t.querySelector(".modal__content"),i=t.querySelector(".modal__content__head");let a;const o=()=>{a=`${s.offsetWidth}px`,i.style.width=a};window.addEventListener("resize",o),o();const r=i.offsetHeight;let l;const c=()=>{const e=t.scrollTop,n=(e=>{let t=0;for(;e;)t+=e.offsetTop,e=e.offsetParent;return t})(s);l=n-e,l<=0?(i.classList.add("sticky","theme-primary","box-shadow-1"),i.nextElementSibling.style.paddingTop=`${r}px`):(i.classList.remove("sticky","theme-primary","box-shadow-1"),i.nextElementSibling.style.paddingTop="initial")};if(t.addEventListener("scroll",c),c(),!s)return;s.setAttribute("tabindex",0),s.focus(),s.setAttribute("tabindex",-1),t.classList.contains("modal--scroll-all")&&(t.scrollTop=0);const d=t.querySelectorAll("[data-modal-close]"),u=e=>{s.contains(e.target)||h()},h=()=>{t.setAttribute("aria-hidden",!0),n.focus(),document.querySelector("html").classList.remove("has-overlay"),window.scrollTo({top:this.#m,behavior:"instant"}),window.removeEventListener("click",u)},g=e(t),m=g[0],b=g[g.length-1];t.addEventListener("keydown",(e=>{switch(e.code){case"Tab":document.activeElement===b&&(e.shiftKey||(e.preventDefault(),m.focus())),document.activeElement===m&&e.shiftKey&&(e.preventDefault(),b.focus()),document.activeElement===s&&e.shiftKey&&(e.preventDefault(),m.focus());break;case"Escape":h()}})),d.forEach((e=>{e.addEventListener("click",h),e.setAttribute("aria-label","Close Modal Window")})),"true"===t.dataset.modalCloseOutside&&window.addEventListener("click",u)};this.#h.forEach((e=>{const t=e.querySelector(".modal__content");t.setAttribute("role","dialog"),t.setAttribute("aria-modal",!0),e.setAttribute("aria-hidden",!0)})),this.#g.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const n=e.target.getAttribute("data-modal-open").replace(/#/,""),s=document.getElementById(n);t(s),e.stopPropagation()}))}))}}).init();const s=new class{#b=document.querySelectorAll(".accordion");init(){this.#b.forEach((t=>{const n=t.querySelectorAll(':scope > [data-accordion="button"]'),s=t.querySelectorAll(':scope > [data-accordion="panel"]'),i=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const s=e(t);for(const e of s)!0===n?e.setAttribute("tabindex",0):!1===n&&e.setAttribute("tabindex",-1)};n.forEach(((e,t)=>{const a=e.nextElementSibling;let o=e.getAttribute("aria-expanded");e.setAttribute("tabindex",0),"true"===o?(a.classList.add("show"),i(a,!0)):(e.setAttribute("aria-expanded",!1),a.setAttribute("aria-hidden",!0),i(a,!1));const r=t=>{t.preventDefault(),t.stopPropagation();for(const e of s)e.classList.remove("show"),e!==a&&(e.classList.remove("shown"),e.style.maxHeight=null,e.previousElementSibling.setAttribute("aria-expanded",!1),e.setAttribute("aria-hidden",!0),i(e,!1));a.classList.toggle("shown"),o=e.getAttribute("aria-expanded"),"true"===o?(e.setAttribute("aria-expanded",!1),a.setAttribute("aria-hidden",!0),i(a,!1)):"false"===o&&(e.setAttribute("aria-expanded",!0),a.setAttribute("aria-hidden",!1),i(a,!0));let n=new Event("accTrigger",{bubbles:!0});document.dispatchEvent(n)};e.addEventListener("click",(e=>{r(e)})),e.addEventListener("keydown",(e=>{const s=s=>{e.preventDefault();let i=t+s;-1===s&&i<0?n[n.length-1].focus():1===s&&i>=n.length?n[0].focus():n[i].focus()};switch(e.code){case"ArrowUp":s(-1);break;case"ArrowDown":s(1)}})),e.addEventListener("keyup",(e=>{"Enter"===e.code&&"BUTTON"!==e.target.tagName&&r(e)}))}))}))}};s.init();(new class{#p=document.querySelectorAll(".comprehension-checkpoint");#f=document.querySelectorAll(".comprehension-checkpoint input");#v=document.querySelectorAll(".quiz__response");#L=e=>{const t=e.currentTarget;this.#f.forEach((e=>{e!==t&&(e.checked=!1)})),this.#v.forEach((e=>{e.classList.remove("shown")}));const n=t.closest("label").nextElementSibling;e.currentTarget.checked&&n.classList.add("shown")};init(){this.#p&&this.#p.forEach((e=>{e.querySelectorAll("input").forEach((e=>{e.addEventListener("change",(e=>{this.#L(e)}))}))}))}}).init(),new class{constructor(){const e=document.getElementById("ngss-toggle-switch"),t=document.querySelectorAll(".ngss"),n=document.querySelector(".ngss-desc-container"),s=document.getElementById("terms-toggle-switch"),i=document.querySelectorAll(".term"),a=document.querySelector(".term-def-container");let o,r;const l=()=>{let e=document.querySelectorAll(".reading-toggle-detail");e.length>0&&e.forEach((e=>{e.remove()}))},c=()=>{e.checked=!1,t.forEach((e=>{e.classList.remove("highlighted"),e.setAttribute("tabindex",-1),e.removeEventListener("click",o,!0)})),l()},d=()=>{s.checked=!1,i.forEach((e=>{e.classList.remove("highlighted"),e.setAttribute("tabindex",-1),e.removeEventListener("click",r)})),l()};s&&s.addEventListener("change",(t=>{!0===t.target.checked?(!0===e.checked&&c(),i.forEach(((e,t)=>{e.classList.add("highlighted"),e.setAttribute("tabindex",t+1),r=()=>{const t=e.innerHTML.toString(),n=e.getAttribute("data-term-def"),s=e.getAttribute("data-term-url");l();const i=`\n                        <article\n                            class="reading-toggle-detail glossary-term"\n                            aria-polite="live"\n                            data-term-definition>\n\n                            <div class="reading-toggle-detail__head">\n                                <strong>Glossary Term</strong>\n                            </div>\n                        \n                            <div class="reading-toggle-detail__body">\n\n                                <h2 class="h6">\n                                    ${t}\n                                </h2>\n                            \n                                <p>\n                                    ${n||"That is not good."}\n                                </p>\n                            \n                                <p>\n                                    <a href="${s||"#1"}">\n                                        View in Glossary\n                                    </a>\n                                </p>\n\n                            </div>\n                        \n                        </article>                        \n                    `;a.insertAdjacentHTML("beforeend",i);let o=a.querySelector(".reading-toggle-detail");setTimeout((()=>{o.classList.add("shown")}),20)},e.addEventListener("click",r)}))):d()})),e&&e.addEventListener("change",(e=>{!0===e.target.checked?(!0===s.checked&&d(),t.forEach(((e,t)=>{e.classList.add("highlighted"),e.setAttribute("tabindex",t+1),o=()=>{const t=e.getAttribute("data-ngss-cat"),s=e.getAttribute("data-ngss-comment"),i=e.getAttribute("data-ngss-desc");l();const a=`\n\n                        <article\n                            class="reading-toggle-detail"\n                            aria-polite="live"\n                            data-ngss-cat="${t}">\n\n                            <div class="reading-toggle-detail__head">\n                                ${t}\n                            </div>\n\n                            <div class="reading-toggle-detail__body">\n                                <p>\n                                    ${s||i}\n                                </p>\n                            </div>\n                        \n                        </article>      \n                    `;n.insertAdjacentHTML("beforeend",a);let o=n.querySelector(".reading-toggle-detail");setTimeout((()=>{o.classList.add("shown")}),20)},e.addEventListener("click",o,!0)}))):c()}))}};(new class{#y=document.createElement("div");#A=document.querySelectorAll("img[data-lightbox]");#m=0;#E='\n    <div class="button-group lightbox__buttons">\n      <button class="button button--icon-only" data-lightbox-previous>\n          <span class="icon icon-arrow-left" aria-label="Previous" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-next>\n          <span class="icon icon-arrow-right" aria-label="Next" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-close>\n          <span class="icon icon-close" aria-label="Close" aria-hidden="true"></span>\n      </button>\n    </div>\n    <figure class="lightbox__container">\n        <div class="lightbox__image"></div>           \n      <figcaption class="lightbox__caption">A caption for the image.</figcaption>\n    </figure>\n  ';#w='<video controls><source src="" type="video/mp4"></video>';#x='<img src="https://source.unsplash.com/1600x900" />';init(){if(this.#A.length){const e=e=>{const t=t=>{e.preventDefault(),c=parseInt(c)+t,-1===t&&c<0?c=d.length-1:1===t&&c>=d.length&&(c=0),n(c)};switch(e.target.hasAttribute("data-lightbox-previous")?t(-1):e.target.hasAttribute("data-lightbox-next")&&t(1),e.code){case"ArrowLeft":t(-1);break;case"ArrowRight":t(1)}},t=t=>{t.target===t.currentTarget&&(this.#y.setAttribute("aria-hidden",!0),document.querySelector("html").classList.remove("has-overlay"),window.scrollTo({top:this.#m,behavior:"instant"}),window.removeEventListener("keyup",e))},n=e=>{let t=null;"video"===d[e].imgType?(o.innerHTML=this.#w,t=o.querySelector("source")):(o.innerHTML=this.#x,t=o.querySelector("img"),t.alt=d[e].imgAlt),t.src=d[e].imgSrc,r.innerHTML=d[e].imgCaption,null!==d[e].imgWidth&&t.setAttribute("width",d[e].imgWidth)};this.#y.classList.add("lightbox"),this.#y.setAttribute("aria-hidden",!0),this.#y.innerHTML=this.#E,document.body.appendChild(this.#y);const s=document.querySelector("[data-lightbox-previous]"),i=document.querySelector("[data-lightbox-next]"),a=document.querySelector("[data-lightbox-close]"),o=document.querySelector(".lightbox__image"),r=document.querySelector(".lightbox__caption"),l=(e,t)=>{e&&e.parentNode&&(e.parentNode.insertBefore(t,e),t.appendChild(e))};let c,d=[];this.#A.forEach(((t,s)=>{const i=document.createElement("button");i.setAttribute("class","lightbox-element"),l(t,i);d.push({imgType:"video"===t.getAttribute("data-lightbox")?"video":"image",imgSrc:t.getAttribute("data-lightbox-src")||t.src||null,imgCaption:t.getAttribute("data-lightbox-caption")||t.alt||null,imgAlt:t.getAttribute("data-lightbox-alt")||t.alt||"",imgWidth:t.getAttribute("data-lightbox-width")||null});t.closest("button").addEventListener("click",(t=>{t.preventDefault(),c=s,this.#m=window.pageYOffset,document.querySelector("html").style.setProperty("--scroll-position",`-${this.#m}px`),document.querySelector("html").classList.add("has-overlay"),this.#y.setAttribute("aria-hidden",!1),o.classList.add("box-shadow-3"),n(s),window.addEventListener("keyup",e)}))})),a.addEventListener("click",t),s.addEventListener("click",e),i.addEventListener("click",e),this.#y.addEventListener("click",t)}}}).init();(new class{#S=document.querySelectorAll("section");#k=document.querySelectorAll("a.nav-link");addClickListeners(){this.#k.forEach((e=>{const t=e.getAttribute("href").split("#")[1];e.addEventListener("click",(e=>{e.preventDefault();document.querySelector(`#${t}`).scrollIntoView({behavior:"instant"})}))}))}addScrollListeners(){window.addEventListener("scroll",(()=>{const e=this.#S.length-[...this.#S].reverse().findIndex((e=>window.scrollY>=e.offsetTop-100))-1;this.#k.forEach((e=>{e.setAttribute("aria-selected","false")})),e>=0&&this.#k[e].setAttribute("aria-selected","true")}))}init(){this.#k.length>0&&this.#S.length>0&&(this.addClickListeners(),this.addScrollListeners())}}).init();(new class{#q=document.querySelector("#search-input");#_=document.querySelector("#search-clear");#T=document.querySelector("#search-results");#C=e=>{const t=e.target.value;this.#_.style.display=t?"flex":"none"};#I=()=>{const e="true"===this.#_.getAttribute("aria-hidden");this.#_.setAttribute("aria-hidden",!e)};#B=e=>{e.preventDefault(),this.#q.value="",this.#q.focus(),this.#_.style.display="none"};#H=e=>{"Enter"===e.key&&(e.preventDefault(),t(this.#T,this.#q.value))};init(){this.#q&&(this.#q.value&&(this.#_.style.display="flex",this.#_.setAttribute("aria-hidden",!1)),this.#q.addEventListener("input",this.#C),this.#q.addEventListener("change",this.#I),this.#_.addEventListener("click",this.#B),this.#q.addEventListener("keydown",this.#H))}}).init()}();