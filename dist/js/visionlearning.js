!function(){"use strict";class t{#t=document.querySelectorAll(".alert--dismissable");#e='\n    <button class="button button--icon-only">\n        <span class="icon icon-close" aria-label="Close" aria-hidden="true">\n    </button>\n  ';#i=t=>e=>{e.preventDefault(),t.classList.add("dismissed");document.querySelector(".dismissed").addEventListener("animationend",(()=>{t.remove()}))};init(){this.#t.forEach((t=>{t.insertAdjacentHTML("afterbegin",this.#e);t.querySelector("button").addEventListener("click",this.#i(t))}))}}class e{#s=document.querySelectorAll(".button--icon-only");#o=t=>e=>setTimeout((()=>{t.forEach((t=>{t.classList.remove("tooltip-show")})),e.target.classList.add("tooltip-show")}),300);#n=()=>(t,e)=>{clearTimeout(e),t.target.classList.remove("tooltip-show")};#a(t,e){const i=e.offsetWidth/2,s=t.offsetLeft,o=window.innerWidth-(t.offsetLeft+t.offsetWidth);i>s&&e.classList.add("left"),i>o&&e.classList.add("right")}#r=(t,e)=>{const i=`\n            <span class="button__tooltip">\n                ${e}\n            </span>\n        `;if(e){t.insertAdjacentHTML("beforeend",i);const e=t.querySelector(".button__tooltip");let s;this.#a(t,e),window.addEventListener("resize",(()=>this.#a(t,e))),t.addEventListener("mouseenter",(t=>{s=this.#o(this.#s)(t)})),t.addEventListener("focusin",(t=>{s=this.#o(this.#s)(t)})),t.addEventListener("mouseleave",(t=>{this.#n()(t,s)})),t.addEventListener("focusout",(t=>{this.#n()(t,s)}))}};init(){this.#s.forEach((t=>{const e=t.getAttribute("aria-label");this.#r(t,e)}))}}let i,s=0,o=document.querySelector("html");const n=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;o.removeAttribute("style"),o.classList.remove("has-overlay"),o.classList.length||o.removeAttribute("class"),t&&"false"===t.getAttribute("aria-hidden")&&t.setAttribute("aria-hidden",!0),window.scrollTo({top:s,behavior:"instant"}),i.focus()},a=function(){return[...(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll(["a[href]","area","button","details","frame","iframe","input","object","summary","textarea","select",'[tabindex]:not([tabindex="-1"])'])].filter((t=>!t.hasAttribute("disabled")&&!t.getAttribute("aria-hidden")))},r=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,i=a(t),s=i[0],o=i[i.length-1];e.setAttribute("tabindex","-1"),e.focus(),t.addEventListener("keydown",(e=>{switch(e.code){case"Tab":document.activeElement===o&&(e.shiftKey||(e.preventDefault(),s.focus())),document.activeElement===s&&e.shiftKey&&(e.preventDefault(),o.focus());break;case"Escape":n(t)}}))};class l{#l=document.querySelectorAll("[data-target-toggle]");#d(t,e){t.setAttribute("aria-expanded",!1),e.classList.remove("shown")}#c(t,e,i){t.setAttribute("aria-expanded",!0),e.classList.add("shown"),i&&i.focus()}#h(t,e,i){return s=>{switch(s.code){case"Tab":document.activeElement===i&&s.shiftKey&&(s.preventDefault(),t.focus());break;case"Escape":this.#d(t,e)}}}#u(t,e){const i=t.target.getAttribute("data-target-toggle").replace(/#/,""),s=document.getElementById(i),o=a(s)[0],n=e.getAttribute("aria-expanded");"true"===n?this.#d(e,s):"false"===n&&this.#c(e,s,s.hasAttribute("data-focus-first")?o:null),s.addEventListener("keydown",this.#h(e,s,o))}init(){this.#l.forEach((t=>{t.setAttribute("aria-expanded",!1),t.addEventListener("click",(e=>{if(this.#u(e,t),t.hasAttribute("data-target-close")){const t=e.target.getAttribute("data-target-close").replace(/#/,""),i=document.getElementById(t),s=document.querySelector(`[data-target-toggle="#${t}"]`);this.#d(s,i)}}))}))}}class d{#g=document.querySelectorAll(".form-entry");#m=["is-invalid"];#p=!1;#b(){return""===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)}#v(t){t.closest(".form-entry").classList.add(...this.#m)}#f(t){t.closest(".form-entry").classList.remove(...this.#m)}#L(t){return this.#b(t.value)?(this.#v(t),!0):(this.#f(t),!1)}#y(t){return e=>{e.target.closest(t).classList.add("active")}}#E(t){return e=>{e.target.closest(t).classList.remove("active")}}#S(t,e){this.#p&&e&&this.#L(t),""!==t.value?t.closest(".form-entry").classList.add("has-value"):t.closest(".form-entry").classList.remove("has-value")}#x(t){const e=t.querySelectorAll(["email","input","select","tel","textarea"]);let i=t.hasAttribute("data-required");e.forEach((t=>this.#A(t,i)))}#A(t,e){const i=t.closest(".form-entry").querySelector(".form-entry__field__input");let s=".form-entry";if("INPUT"===t.tagName){const e=t.getAttribute("type");"radio"!==e&&"checkbox"!==e||t.disabled&&t.closest("label").classList.add("disabled")}t.addEventListener("focusin",this.#y(s)),t.addEventListener("focusout",this.#E(s)),e&&(t.setAttribute("required","true"),t.setAttribute("aria-required",!0)),t.addEventListener("change",(()=>this.#S(t,e))),i&&i.addEventListener("click",this.handleClickOnInputText)}handleClickOnInputText(t){let e=t.target.tagName,i=t.target.closest(".form-entry__field__input").querySelector("input");"SPAN"===e&&i.focus()}init(){this.#g.forEach((t=>this.#x(t)))}}class c{#w=document.querySelectorAll("form[novalidate]");#m=["is-invalid"];#p=!1;#b(){return""===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)}#v(t){t.closest(".form-entry").classList.add(...this.#m)}#f(t){t.closest(".form-entry").classList.remove(...this.#m)}#L(t){return this.#b(t.value)?(this.#v(t),!0):(this.#f(t),!1)}#T(t,e){return null===t&&(t="This field is Required"),`\n            <small class="form-entry__feedback">\n                <span class="icon icon-warn" aria-hidden="true"></span>\n                <span class="message">\n                    <strong>${t}</strong> ${void 0!==e?e:""}\n                </span>\n            </small>\n        `}#k(t,e){t.forEach((t=>{let i=t.closest(".form-entry"),s=i.querySelector(".form-entry__field__label");i.classList.add("is-invalid");const o=i.querySelector(".form-entry__feedback"),n=i.querySelector(".form-entry__help");let a;n&&(a=n.innerHTML.toString());let r=i.getAttribute("data-error-message"),l=[r,a];e.push(l),null===o&&s.insertAdjacentHTML("afterend",this.#T(r,a))}))}#_(t){let e=t.querySelector('[class*="alert"], [class*="invalid"]');if(e){e.hasAttribute("data-alert")&&(e.style.display="block");let t=e.offsetTop-16;window.scrollTo({top:t,behavior:"smooth"})}}#q(t){t.addEventListener("submit",(e=>{e.preventDefault(),this.#p=!0;let i=[],s=t.querySelectorAll("input, select, textarea");s.forEach((t=>{t.addEventListener("input",(()=>this.#L(t)))})),s.forEach((t=>{this.#L(t)}));let o=t.querySelectorAll(":invalid");this.#k(o,i),i.length>0&&e.preventDefault(),this.#_(t)}))}init(){this.#w.forEach((t=>this.#q(t)))}}class h{#C=document.querySelectorAll(".file-upload");#D(t){return function(e){const[i]=e.target.files,{name:s,size:o}=i,n=`\n                <span class="file-upload__data">\n                    <span class="file-name">${s}</span>\n                    <span class="file-size">${(o/1e3).toFixed(2)} kb</span>\n                </span>\n            `,a=t.querySelector(".file-upload__data");a&&a.remove(),t.insertAdjacentHTML("beforeend",n)}}dragOver(t){t.target.closest(".form-entry").classList.add("active")}dragOff(t){t.target.closest(".form-entry").classList.remove("active")}dropped(t){t.target.closest(".form-entry").classList.remove("active")}#I(t){t.querySelector('input[type="file"]').addEventListener("change",this.#D(t)),t.addEventListener("dragenter",this.dragOver.bind(this)),t.addEventListener("dragleave",this.dragOff.bind(this)),t.addEventListener("dragend",this.dragOff.bind(this)),t.addEventListener("drop",this.dropped.bind(this))}init(){this.#C.forEach((t=>this.#I(t)))}}class u{#B=document.querySelectorAll("[data-lightbox]");#M='\n    <div class="lightbox__buttons button-group">\n      <button class="button button--icon-only" data-lightbox-previous>\n        <span class="icon icon-arrow-left" aria-label="Previous" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-next>\n        <span class="icon icon-arrow-right" aria-label="Next" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-close>\n        <span class="icon icon-close" aria-label="Close" aria-hidden="true"></span>\n      </button>\n    </div>\n    <figure class="lightbox__container" aria-live="polite" aria-atomic="true">\n      <div class="lightbox__media"></div>           \n      <figcaption class="lightbox__caption"></figcaption>\n    </figure>\n  ';#O='\n    <video controls>\n      <source type="video/mp4">\n    </video>\n  ';#H='\n    <iframe\n        frameborder="0"\n        allow="autoplay; fullscreen;"\n        allowfullscreen\n    ></iframe>\n  ';#F='\n    <div class="lightbox__media__loader">\n      <span class="icon icon-loading icon--rotate" aria-hidden="true"></span>\n    </div>\n    <div class="lightbox__media__error" style="display: none;">\n      <span class="icon icon-warn" aria-hidden="true"></span>\n      <p>Failed to load content. Please try again later.</p>\n    </div>\n  ';#P='<img src="https://source.unsplash.com/1600x900" />';#$=[];#N=t=>e=>{document.querySelector(".lightbox")||(e.preventDefault(),this.lightbox=this.#V(),this.currentLB=t,function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;i=document.activeElement,s=window.scrollY,o.style.setProperty("--scroll-position",`-${s}px`),o.classList.add("has-overlay"),t&&"true"===t.getAttribute("aria-hidden")&&t.setAttribute("aria-hidden",!1),r(t)}(this.lightbox),this.#U(t))};#K=t=>{t.stopPropagation(),t.target!==t.currentTarget&&"click"===t.type||(n(this.lightbox),this.lightbox.parentElement.removeChild(this.lightbox),window.removeEventListener("keyup",this.#R))};#W=(()=>{var t=this;return function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t.lightbox.querySelector(".lightbox__caption").style.display=e?"block":"none"}})();#G=t=>{if(t.preventDefault(),t.target.hasAttribute("data-lightbox-previous"))this.#z(-1);else{if(!t.target.hasAttribute("data-lightbox-next"))return;this.#z(1)}};#R=t=>{if(t.preventDefault(),!(this.#$.length<=1)||"ArrowLeft"!==t.code&&"ArrowRight"!==t.code)switch(t.code){case"ArrowLeft":this.#z(-1),this.lightbox.querySelector("[data-lightbox-previous]").focus();break;case"ArrowRight":this.#z(1),this.lightbox.querySelector("[data-lightbox-next]").focus();break;case"Escape":this.#K(t);break;default:return}};#z(t){this.currentLB+=t,this.currentLB<0?this.currentLB=this.#$.length-1:this.currentLB>=this.#$.length&&(this.currentLB=0),this.#U(this.currentLB)}#U(t){const e=this.lightbox.querySelector(".lightbox__media"),i=this.lightbox.querySelector(".lightbox__caption");let s;e.innerHTML="";const{lbType:o,lbSrc:n,lbAlt:a,lbCaption:r}=this.#$[t],l=null!==r;switch(this.#W(l),o){case"image":s=this.#j(e,n,a);break;case"video":s=this.#X(e,n)}l&&(i.innerHTML=r)}#j(t,e,i){t.hasAttribute("style")&&t.removeAttribute("style"),t.innerHTML=this.#P;const s=this.#Y();t.appendChild(s);const o=t.querySelector("img");return o.alt=i,o.src=e,this.#J(o,s),o}#X(t,e){const i=/youtube/i.test(e),s=/vimeo/i.test(e);let o;if(i||s)t.innerHTML=this.#H,o=t.querySelector("iframe"),o.src=e;else{t.innerHTML=this.#O;const i=this.#Y();t.appendChild(i),o=t.querySelector("source");const s=t.querySelector("video");s.addEventListener("loadedmetadata",(()=>{let e=s.videoWidth,i=s.videoHeight;t.style.maxWidth=`${e}px`,t.style.aspectRatio=`${e} / ${i}`})),this.#J(o,i),o.src=e}return o}#V(){const t=document.createElement("div");t.classList.add("lightbox"),t.setAttribute("aria-hidden",!0),t.innerHTML=this.#M,document.body.appendChild(t);const e=t.querySelector("[data-lightbox-previous]"),i=t.querySelector("[data-lightbox-next]"),s=t.querySelector("[data-lightbox-close]");return this.#$.length<=1&&(e.setAttribute("disabled",!0),i.setAttribute("disabled",!0),e.style.display="none",i.style.display="none"),t.addEventListener("click",this.#K),s.addEventListener("click",this.#K),e.addEventListener("click",this.#G),i.addEventListener("click",this.#G),window.addEventListener("keyup",this.#R),t}#Q(t){let e=null,i="";null!==t.querySelector("img")&&(e=t.querySelector("img").src||null,i=t.querySelector("img").alt||"");return{lbType:t.getAttribute("data-lightbox")||"image",lbSrc:t.getAttribute("data-lightbox-src")||e,lbCaption:t.getAttribute("data-lightbox-caption")||null,lbAlt:t.getAttribute("data-lightbox-alt")||i}}#Z(){this.#B.forEach((t=>{this.#$.push(this.#Q(t))}))}#Y=()=>{const t=document.createElement("div");return t.className="lightbox__media__loader",t.innerHTML=this.#F,t};#J=(t,e)=>{const i="SOURCE"===t.nodeName?"loadeddata":"load";t.closest("SOURCE"===t.nodeName?"video":"img").addEventListener(i,(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),null!==this.#$[this.currentLB].lbCaption&&this.#W(!0)})),t.onerror=()=>{const i=e.querySelector(".lightbox__media__loader"),s=e.querySelector(".lightbox__media__error");t.style.display="none",this.#W(!1),i.style.display="none",s.style.display="block"}};#tt(){const t=new IntersectionObserver(((t,e)=>{t.forEach((t=>{if(t.isIntersecting){const i=t.target,s=i.dataset.lightboxSrc||i.src;if(!s)return;e.unobserve(i);const o=new Image;o.onload=()=>{document.body.appendChild(o)},o.onerror=()=>{},o.src=s,o.style.display="none",this.#$[Number(i.dataset.index)].hiddenImage=o}}))}),{root:null,rootMargin:"0px",threshold:.1});Array.from(this.#B).filter((t=>"image"===t.getAttribute("data-lightbox"))).forEach(((e,i)=>{const s=e.querySelector("img");s&&(s.dataset.index=i,t.observe(s))}))}#et(){this.#B.forEach(((t,e)=>{t.addEventListener("click",this.#N(e))}))}init(){this.#Z(),this.#et(),this.#tt()}}class g{#it=document.querySelectorAll('[data-toggle="dropdown"]');#st(t,e){e.classList.toggle("shown"),t.setAttribute("aria-expanded","true"===t.getAttribute("aria-expanded")?"false":"true")}#ot(t,e){e.classList.remove("shown"),t.setAttribute("aria-expanded","false")}init(){window.addEventListener("click",(t=>{this.#it.forEach((e=>{let i=e.closest("li"),s=e.nextElementSibling;i.contains(t.target)||this.#ot(e,s)}))})),this.#it.forEach((t=>{let e=t.nextElementSibling;e&&(t.setAttribute("aria-expanded","false"),t.setAttribute("aria-haspopup","true"),t.addEventListener("click",(i=>{i.preventDefault(),this.#st(t,e)})))}))}}class m{#nt=document.querySelectorAll('[class*="table--stack"]');#at=document.querySelectorAll(".table-scroll");#rt(t){const e=t.querySelectorAll("thead th"),i=t.querySelectorAll("tbody tr");let s=[];e.forEach((t=>{if(""!==t.textContent){const e=t.textContent.trim();s.push(e)}})),i.forEach((t=>{t.querySelectorAll("td").forEach(((t,e)=>{t.innerHTML=this.#lt(t.innerHTML),t.setAttribute("data-header",s[e])}))}))}#lt(t){return`\n\t\t\t<div class="td-content">\n\t\t\t\t${t}\n\t\t\t</div>\n\t\t`}#dt(){this.#at.forEach((t=>{let e=t.querySelector(".table-scroll__container"),i=t.offsetWidth;(e.scrollWidth||e.offsetWidth)>i?t.setAttribute("data-scroll",!0):t.setAttribute("data-scroll",!1),e.addEventListener("scroll",(()=>{e.scrollLeft>1?e.setAttribute("data-scrolling",!0):e.setAttribute("data-scrolling",!1)}),{passive:!0})}))}init(){this.#nt.forEach((t=>{this.#rt(t)})),this.#dt(),window.addEventListener("resize",this.#dt.bind(this))}}class p{#ct=document.querySelectorAll(".tabs");#ht(t,e,i,s){t.preventDefault();let o=e+s;-1===s&&o<0?i[i.length-1].focus():1===s&&o>=i.length?i[0].focus():i[o].focus()}#ut(t,e){t.forEach((t=>{t.setAttribute("aria-selected","false")})),e.forEach((t=>{t.classList.remove("shown"),t.setAttribute("hidden","")}))}activateTab(t,e,i){this.#ut(e,i),t.setAttribute("aria-selected","true");let s=t.getAttribute("aria-controls"),o=document.getElementById(s);o.classList.add("shown"),o.removeAttribute("hidden")}init(){this.#ct.forEach((t=>{const e=t.querySelectorAll('[role="tab"]'),i=t.querySelectorAll('[role="tabpanel"]');e.forEach(((t,s)=>{t.addEventListener("click",(t=>{let s=t.target;this.activateTab(s,e,i)})),t.addEventListener("keydown",(t=>{switch(t.code){case"Home":t.preventDefault(),e[0].focus();break;case"End":t.preventDefault(),e[e.length-1].focus();break;case"ArrowLeft":this.#ht(t,s,e,-1);break;case"ArrowRight":this.#ht(t,s,e,1)}}))}))}))}}class b{#gt=document.querySelector("#audio");#mt=document.querySelector("#play-pause-button");#pt=document.querySelector(".audio-player__progress");#bt=document.querySelector(".audio-player__progress__fill");#vt=this.#bt?.querySelector(".audio-player__thumb");#ft=document.querySelector(".audio-player__volume");#Lt=document.querySelector("#mute-button");#yt=document.querySelector(".audio-player__volume-container");#Et=document.querySelector(".audio-player__volume__fill");#St=this.#Et?.querySelector(".audio-player__thumb");#xt=document.querySelector(".audio-player__timestamp");#At=!1;#wt=null;#Tt=null;#kt(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t.classList.contains(e)?(t.classList.remove(e),t.classList.add(i)):(t.classList.remove(i),t.classList.add(e))}#_t(){this.#At?this.#gt.pause():this.#gt.play(),this.#At=!this.#At,this.#kt(this.#mt.querySelector("span.icon"),"icon-play","icon-pause")}#qt(){0===this.#gt.volume?this.#gt.volume=this.#Tt||1:(this.#Tt=this.#gt.volume,this.#gt.volume=0),this.#Ct()}#Dt=()=>{const t=this.#gt.currentTime/this.#gt.duration*100;this.#bt.style.width=`${t}%`;const e=Math.floor(this.#gt.currentTime/60),i=(Math.floor(this.#gt.currentTime-60*e),this.#gt.duration-this.#gt.currentTime),s=Math.floor(i/60),o=Math.floor(i-60*s);this.#xt.innerText=`${s.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`;this.#bt.querySelector(".audio-player__thumb").style.left=`${t}%`};#It=t=>{const e=(t.clientX-this.#pt.getBoundingClientRect().left)/this.#pt.offsetWidth*100;this.#gt.currentTime=e/100*this.#gt.duration};#Bt=t=>{const e=(t.clientX-this.#ft.getBoundingClientRect().left)/this.#ft.offsetWidth*100/100;this.#gt.volume=Math.min(1,e),this.#Ct()};#Ct(){const t=100*this.#gt.volume;this.#Et.style.width=`${t}%`;this.#Et.querySelector(".audio-player__thumb").style.left=`${t}%`;const e=this.#gt.volume<.1,i=this.#Lt.querySelector("span.icon");e?(i.classList.remove("icon-volume"),i.classList.add("icon-volume-mute")):(i.classList.remove("icon-volume-mute"),i.classList.add("icon-volume"))}#h(t){if(37===t.keyCode||39===t.keyCode)if(t.currentTarget===this.#pt)this.#gt.currentTime+=37===t.keyCode?-5:5,this.#Dt();else if(t.currentTarget===this.#ft){let e=this.#gt.volume+(37===t.keyCode?-.05:.05);e=Math.max(0,Math.min(1,e)),this.#gt.volume=e,this.#Ct()}}#Mt=(t,e)=>{t.preventDefault(),document.addEventListener("mousemove",this.#Ot),document.addEventListener("mouseup",this.#Ht),this.#wt=e};#Ot=t=>{let e,i;"progress"===this.#wt?(e=this.#pt,i=this.#It):(e=this.#ft,i=this.#Bt);const s=e.getBoundingClientRect(),o=t.clientX-s.left,n=s.right-s.left;if(o>=0&&o<=n){const t=o/n*100;i(new MouseEvent("click",{clientX:o+s.left}));e.querySelector(".audio-player__thumb").style.left=`${t}%`;e.querySelector('[class*="__fill"]').style.width=`${t}%`}};#Ht=()=>{document.removeEventListener("mousemove",this.#Ot),document.removeEventListener("mouseup",this.#Ht)};init(){this.#gt&&(this.#Lt?.addEventListener("click",(()=>this.#qt())),this.#mt.addEventListener("click",(()=>this.#_t())),this.#gt.addEventListener("timeupdate",(()=>this.#Dt())),this.#pt.addEventListener("click",(t=>this.#It(t))),this.#ft?.addEventListener("click",(t=>this.#Bt(t))),this.#pt.addEventListener("keydown",(t=>this.#h(t))),this.#ft?.addEventListener("keydown",(t=>this.#h(t))),(isNaN(this.#gt.volume)||0===this.#gt.volume)&&(this.#gt.volume=1),this.#Ct(),this.#vt?.addEventListener("mousedown",(t=>this.#Mt(t,"progress"))),this.#St?.addEventListener("mousedown",(t=>this.#Mt(t,"volume"))),this.#gt.addEventListener("loadedmetadata",(()=>{this.#Dt()})))}}class v{#Ft=document.querySelectorAll(".accordion");setFocusableElements(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const i=a(t);for(const t of i)!0===e?t.setAttribute("tabindex",0):!1===e&&t.setAttribute("tabindex",-1)}initAccordion(t,e,i,s){t.preventDefault(),t.stopPropagation();for(const t of s)t.classList.remove("show"),t!==i&&(t.classList.remove("shown"),t.previousElementSibling.setAttribute("aria-expanded",!1),t.setAttribute("aria-hidden",!0),this.setFocusableElements(t,!1));i.classList.toggle("shown");let o=e.getAttribute("aria-expanded");"true"===o?(e.setAttribute("aria-expanded",!1),i.setAttribute("aria-hidden",!0),this.setFocusableElements(i,!1)):"false"===o&&(e.setAttribute("aria-expanded",!0),i.setAttribute("aria-hidden",!1),this.setFocusableElements(i,!0));let n=new Event("accTrigger",{bubbles:!0});document.dispatchEvent(n)}init(){this.#Ft.forEach((t=>{const e=t.querySelectorAll(':scope > [data-accordion="button"]'),i=t.querySelectorAll(':scope > [data-accordion="panel"]');e.forEach(((t,s)=>{const o=t.nextElementSibling;let n=t.getAttribute("aria-expanded");t.setAttribute("tabindex",0),"true"===n?(o.classList.add("show"),this.setFocusableElements(o,!0)):(t.setAttribute("aria-expanded",!1),o.setAttribute("aria-hidden",!0),this.setFocusableElements(o,!1)),t.addEventListener("click",(e=>{this.initAccordion(e,t,o,i)})),t.addEventListener("keydown",(t=>{const i=i=>{t.preventDefault();let o=s+i;-1===i&&o<0?e[e.length-1].focus():1===i&&o>=e.length?e[0].focus():e[o].focus()};switch(t.code){case"ArrowUp":i(-1);break;case"ArrowDown":i(1)}})),t.addEventListener("keyup",(e=>{"Enter"===e.code&&"BUTTON"!==e.target.tagName&&this.initAccordion(e,t,o,i)}))}))}))}}class f{#Pt=document.querySelectorAll(".anchor-nav > ul > li > a");#$t=document.querySelectorAll("section");#Nt;#Vt;#Ut(t){t.forEach((t=>{if(t.isIntersecting){const e=t.target.id;this.#Pt.forEach((t=>{t.getAttribute("href").split("#")[1]===e?t.setAttribute("aria-selected","true"):t.setAttribute("aria-selected","false")}))}}))}init(){if(this.#Pt.length>0&&this.#$t.length>0){this.#Vt=this.#$t[0].offsetTop,this.#Pt.forEach((t=>{const e=t.getAttribute("href").split("#")[1];t.addEventListener("click",(t=>{t.preventDefault();document.querySelector(`#${e}`).scrollIntoView({behavior:"instant"})}))}));const t={root:null,rootMargin:"0px",threshold:.5};this.#Nt=new IntersectionObserver(this.#Ut.bind(this),t),this.#$t.forEach((t=>{this.#Nt.observe(t)})),window.addEventListener("scroll",(()=>{window.scrollY<this.#Vt&&this.#Pt.forEach((t=>{t.getAttribute("href").split("#")[1]===this.#$t[0].id?t.setAttribute("aria-selected","true"):t.setAttribute("aria-selected","false")}))}))}}}class L{#Kt=document.querySelectorAll(".comprehension-checkpoint");#Rt=document.querySelectorAll(".comprehension-checkpoint input");#Wt=document.querySelectorAll(".quiz__response");#Gt=t=>{const e=t.currentTarget;this.#Rt.forEach((t=>{t!==e&&(t.checked=!1)})),this.#Wt.forEach((t=>{t.classList.remove("shown")}));const i=e.closest("label").nextElementSibling;t.currentTarget.checked&&i.classList.add("shown")};init(){this.#Kt&&this.#Kt.forEach((t=>{t.querySelectorAll("input").forEach((t=>{t.addEventListener("change",(t=>{this.#Gt(t)}))}))}))}}class y{#zt=document.querySelectorAll(".grid--discipline .backdrop");init(){let t,e=(i=1200,window.matchMedia(`(min-width: ${i}px)`)).matches;var i;this.#zt.forEach((i=>{const s=e=>{e.preventDefault(),t=setTimeout((()=>{i.classList.remove("unfocused"),i.classList.add("focused")}),500)},o=e=>{e.preventDefault(),clearTimeout(t),i.classList.contains("focused")&&(i.classList.remove("focused"),i.classList.add("unfocused"),i.addEventListener("animationend",(()=>{i.classList.remove("unfocused")})))};e?(i.addEventListener("mouseenter",s),i.addEventListener("mouseleave",o)):(i.removeEventListener("mouseenter",s),i.removeEventListener("mouseleave",o))}))}}class E{#jt=document.querySelectorAll(".modal");#Xt=document.querySelectorAll("[data-modal-open]");#Yt=0;init(){const t=t=>{if(!t)return;this.#Yt=window.scrollY,document.querySelector("html").style.setProperty("--scroll-position",`-${this.#Yt}px`),document.querySelector("html").classList.add("has-overlay"),t.setAttribute("aria-hidden",!1);const e=document.activeElement,i=t.querySelector(".modal__content"),s=t.querySelector(".modal__content__head");let o;const n=()=>{o=`${i.offsetWidth}px`,s.style.width=o};window.addEventListener("resize",n),n();const a=s.offsetHeight;let r;const l=()=>{const e=t.scrollTop,o=(t=>{let e=0;for(;t;)e+=t.offsetTop,t=t.offsetParent;return e})(i);r=o-e,r<=0?(s.classList.add("sticky","theme-","box-shadow-1"),s.nextElementSibling.style.paddingTop=`${a}px`):(s.classList.remove("sticky","theme-","box-shadow-1"),s.nextElementSibling.style.paddingTop="initial")};if(t.addEventListener("scroll",l),l(),!i)return;i.setAttribute("tabindex",0),i.focus(),i.setAttribute("tabindex",-1),t.classList.contains("modal--scroll-all")&&(t.scrollTop=0);const d=t.querySelectorAll("[data-modal-close]"),c=t=>{i.contains(t.target)||h()},h=()=>{t.setAttribute("aria-hidden",!0),e.focus(),document.querySelector("html").classList.remove("has-overlay"),window.scrollTo({top:this.#Yt,behavior:"instant"}),window.removeEventListener("click",c)},u=function(){return[...(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll(["a[href]","button","input","textarea","select","details",'[tabindex]:not([tabindex="-1"])'])].filter((t=>!t.hasAttribute("disabled")&&!t.getAttribute("aria-hidden")))}(t),g=u[0],m=u[u.length-1];t.addEventListener("keydown",(t=>{switch(t.code){case"Tab":document.activeElement===m&&(t.shiftKey||(t.preventDefault(),g.focus())),document.activeElement===g&&t.shiftKey&&(t.preventDefault(),m.focus()),document.activeElement===i&&t.shiftKey&&(t.preventDefault(),g.focus());break;case"Escape":h()}})),d.forEach((t=>{t.addEventListener("click",h),t.setAttribute("aria-label","Close Modal Window")})),"true"===t.dataset.modalCloseOutside&&window.addEventListener("click",c)};this.#jt.forEach((t=>{const e=t.querySelector(".modal__content");e.setAttribute("role","dialog"),e.setAttribute("aria-modal",!0),t.setAttribute("aria-hidden",!0)})),this.#Xt.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const i=e.target.getAttribute("data-modal-open").replace(/#/,""),s=document.getElementById(i);t(s),e.stopPropagation()}))}))}}class S{#Jt=document.getElementById("ngss-toggle-switch");#Qt=document.querySelectorAll(".ngss");#Zt=document.getElementById("terms-toggle-switch");#te=document.querySelectorAll(".term");#ee=document.querySelector(".reading-annotation-container");#ie=document.querySelectorAll(".reading-toggle__help");#se='\n\t\t<button class="button button--icon-only" data-close-btn>\n\t\t<span class="icon icon-close" aria-hidden="true"></span>\n\t\t</button>\n  ';hideHelpTexts=()=>{this.#ie.forEach((t=>{t.classList.add("display-none--lg")}))};showHelpTexts=()=>{this.#ie.forEach((t=>{t.classList.remove("display-none--lg")}))};removeOldDetails=()=>{let t=document.querySelectorAll(".reading-annotation");t.length&&t.forEach((t=>{t.remove()}))};handleClose=()=>{let t=document.querySelector("[data-close-btn]");t&&t.removeEventListener("click",this.handleClose),this.removeOldDetails(),this.showHelpTexts()};handleHighlightedClick=t=>{this.removeOldDetails(),this.#ee.insertAdjacentHTML("beforeend",t),this.hideHelpTexts();let e=document.querySelector("[data-close-btn]");e&&e.addEventListener("click",this.handleClose)};handleNGSSClick=t=>{const e=t.target,i=e.getAttribute("data-ngss-cat-abbr")||"NGSS",s=e.getAttribute("data-ngss-cat-full")||"Title not found",o=e.getAttribute("data-ngss-desc")||"Description not found",n=e.getAttribute("data-ngss-standard")||"Standard not found",a=`\n\t\t\t<article class="reading-annotation ngss-annotation" aria-live="polite" data-ngss-cat-abbr="${i}">\n\t\t\t\t<div class="reading-annotation__head">\n\t\t\t\t\t${s}\n\t\t\t\t\t${this.#se}\n\t\t\t\t</div>\n\t\t\t\t<div class="reading-annotation__body">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t${o}\n\t\t\t\t\t\t${"Standard not found"!==n?`<span class="standard">${n}</span>`:""}\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</article>\n\t\t`;this.handleHighlightedClick(a)};handleTermClick=t=>{const e=t.target,i=e.innerHTML,s=e.getAttribute("data-term-def")||"Title not found",o=e.getAttribute("data-term-url")||"#1",n=`\n\t\t\t<article class="reading-annotation glossary-term" data-term-definition aria-polite="live">\n\t\t\t\t<div class="reading-annotation__head">\n\t\t\t\t\t<h2 class="h6">${i}</h2>\n\t\t\t\t\t${this.#se}\n\t\t\t\t</div>\n\t\t\t\t<div class="reading-annotation__body">\n\t\t\t\t\t<p>${s}</p>\n\t\t\t\t\t<p><a href="${o}">View in Glossary</a></p>\n\t\t\t\t</div>\n\t\t\t</article>\n\t\t`;this.handleHighlightedClick(n)};turnOnNGSS=()=>{this.#Qt.forEach((t=>{t.classList.add("highlighted"),t.setAttribute("tabindex","0"),t.addEventListener("click",this.handleNGSSClick)}))};turnOffNGSS=()=>{this.#Jt.checked=!1,this.#Qt.forEach((t=>{t.classList.remove("highlighted"),t.setAttribute("tabindex","-1"),t.removeEventListener("click",this.handleNGSSClick)}));const t=document.querySelector(".ngss-annotation");t&&t.parentNode.removeChild(t)};turnOnTerms=()=>{this.#te.forEach((t=>{t.classList.add("highlighted"),t.setAttribute("tabindex","0"),t.addEventListener("click",this.handleTermClick)}))};turnOffTerms=()=>{this.#Zt.checked=!1,this.#te.forEach((t=>{t.classList.remove("highlighted"),t.setAttribute("tabindex","-1"),t.removeEventListener("click",this.handleTermClick)}));const t=document.querySelector(".glossary-term");t&&t.parentNode.removeChild(t)};init=()=>{this.#Zt&&this.#Zt.addEventListener("change",(t=>{let{target:{checked:e}}=t;e?(this.#Jt.checked&&this.turnOffNGSS(),this.turnOnTerms()):this.turnOffTerms()})),this.#Jt&&this.#Jt.addEventListener("change",(t=>{let{target:{checked:e}}=t;e?(this.#Zt.checked&&this.turnOffTerms(),this.turnOnNGSS()):this.turnOffNGSS()})),(this.#Zt||this.#Jt)&&window.addEventListener("pageshow",(()=>{this.#Zt.checked=!1,this.#Jt.checked=!1}))}}class x{#oe=document.querySelector(".back-to-top");#ne=document.querySelector(".back-to-top .button");#ae=document.getElementById("global-footer");#re;#le(){window.scrollTo({top:0,behavior:"smooth"})}#de(t){const[e]=t;e.isIntersecting?this.#oe.classList.remove("fixed"):this.#oe.classList.add("fixed")}init(){this.#oe&&this.#ae&&(this.#ne.addEventListener("click",this.#le),this.#re=new IntersectionObserver(this.#de.bind(this)),this.#re.observe(this.#ae))}}document.addEventListener("DOMContentLoaded",(()=>{(new t).init();(new e).init();(new l).init();(new d).init();(new c).init();(new h).init();(new u).init();(new g).init();(new m).init();(new p).init();(new v).init();(new b).init();(new f).init();(new L).init();(new y).init();(new E).init();(new S).init();(new x).init()}))}();