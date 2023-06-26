!function(){"use strict";class e{#e=document.querySelectorAll(".alert--dismissable");#t='\n    <button class="button button--icon-only">\n        <span class="icon icon-close" aria-label="Close" aria-hidden="true">\n    </button>\n  ';#i=e=>t=>{t.preventDefault(),e.classList.add("dismissed");document.querySelector(".dismissed").addEventListener("animationend",(()=>{e.remove()}))};init(){this.#e.forEach((e=>{e.insertAdjacentHTML("afterbegin",this.#t);e.querySelector("button").addEventListener("click",this.#i(e))}))}}class t{#s=document.querySelectorAll(".button--icon-only");#o=e=>t=>setTimeout((()=>{e.forEach((e=>{e.classList.remove("tooltip-show")})),t.target.classList.add("tooltip-show")}),300);#a=()=>(e,t)=>{clearTimeout(t),e.target.classList.remove("tooltip-show")};#n(e,t){const i=t.offsetWidth/2,s=e.offsetLeft,o=window.innerWidth-(e.offsetLeft+e.offsetWidth);i>s&&t.classList.add("left"),i>o&&t.classList.add("right")}#l=(e,t)=>{const i=`\n            <span class="button__tooltip">\n                ${t}\n            </span>\n        `;if(t){e.insertAdjacentHTML("beforeend",i);const t=e.querySelector(".button__tooltip");let s;this.#n(e,t),window.addEventListener("resize",(()=>this.#n(e,t))),e.addEventListener("mouseenter",(e=>{s=this.#o(this.#s)(e)})),e.addEventListener("focusin",(e=>{s=this.#o(this.#s)(e)})),e.addEventListener("mouseleave",(e=>{this.#a()(e,s)})),e.addEventListener("focusout",(e=>{this.#a()(e,s)}))}};init(){this.#s.forEach((e=>{const t=e.getAttribute("aria-label");this.#l(e,t)}))}}let i,s=0,o=document.querySelector("html");const a=e=>{i=document.activeElement,s=window.pageYOffset,o.style.setProperty("--scroll-position",`-${s}px`),o.classList.add("has-overlay"),e&&"true"===e.getAttribute("aria-hidden")&&e.setAttribute("aria-hidden",!1),r(e)},n=e=>{o.removeAttribute("style"),o.classList.remove("has-overlay"),o.classList.length||o.removeAttribute("class"),e&&"false"===e.getAttribute("aria-hidden")&&e.setAttribute("aria-hidden",!0),window.scrollTo({top:s,behavior:"instant"}),i.focus()},l=function(){return[...(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll(["a[href]","area","button","details","frame","iframe","input","object","summary","textarea","select",'[tabindex]:not([tabindex="-1"])'])].filter((e=>!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")))},r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=l(e),s=i[0],o=i[i.length-1];t.setAttribute("tabindex","-1"),t.focus(),e.addEventListener("keydown",(t=>{switch(t.code){case"Tab":document.activeElement===o&&(t.shiftKey||(t.preventDefault(),s.focus())),document.activeElement===s&&t.shiftKey&&(t.preventDefault(),o.focus());break;case"Escape":n(e)}}))};class d{#r=document.querySelectorAll("[data-target-toggle]");#d(e,t){e.setAttribute("aria-expanded",!1),t.classList.remove("shown")}#c(e,t,i){e.setAttribute("aria-expanded",!0),t.classList.add("shown"),i&&i.focus()}#u(e,t,i){return s=>{switch(s.code){case"Tab":document.activeElement===i&&s.shiftKey&&(s.preventDefault(),e.focus());break;case"Escape":this.#d(e,t)}}}#h(e,t){const i=e.target.getAttribute("data-target-toggle").replace(/#/,""),s=document.getElementById(i),o=l(s)[0],a=t.getAttribute("aria-expanded");"true"===a?this.#d(t,s):"false"===a&&this.#c(t,s,s.hasAttribute("data-focus-first")?o:null),s.addEventListener("keydown",this.#u(t,s,o))}init(){this.#r.forEach((e=>{e.setAttribute("aria-expanded",!1),e.addEventListener("click",(t=>{if(this.#h(t,e),e.hasAttribute("data-target-close")){const e=t.target.getAttribute("data-target-close").replace(/#/,""),i=document.getElementById(e),s=document.querySelector(`[data-target-toggle="#${e}"]`);this.#d(s,i)}}))}))}}class c{#m=document.querySelectorAll(".form-entry");#g=["is-invalid"];#p=!1;#b(){return""===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)}#v(e){e.closest(".form-entry").classList.add(...this.#g)}#f(e){e.closest(".form-entry").classList.remove(...this.#g)}#L(e){return this.#b(e.value)?(this.#v(e),!0):(this.#f(e),!1)}#y(e){return t=>{t.target.closest(e).classList.add("active")}}#E(e){return t=>{t.target.closest(e).classList.remove("active")}}#S(e,t){this.#p&&t&&this.#L(e),""!==e.value?e.closest(".form-entry").classList.add("has-value"):e.closest(".form-entry").classList.remove("has-value")}#x(e){const t=e.querySelectorAll(["email","input","select","tel","textarea"]);let i=e.hasAttribute("data-required");t.forEach((e=>this.#A(e,i)))}#A(e,t){const i=e.closest(".form-entry").querySelector(".form-entry__field__input");let s=".form-entry";if("INPUT"===e.tagName){const t=e.getAttribute("type");"radio"!==t&&"checkbox"!==t||e.disabled&&e.closest("label").classList.add("disabled")}e.addEventListener("focusin",this.#y(s)),e.addEventListener("focusout",this.#E(s)),t&&(e.setAttribute("required","true"),e.setAttribute("aria-required",!0)),e.addEventListener("change",(()=>this.#S(e,t))),i&&i.addEventListener("click",this.handleClickOnInputText)}handleClickOnInputText(e){let t=e.target.tagName,i=e.target.closest(".form-entry__field__input").querySelector("input");"SPAN"===t&&i.focus()}init(){this.#m.forEach((e=>this.#x(e)))}}class u{#w=document.querySelectorAll("form[novalidate]");#g=["is-invalid"];#p=!1;#b(){return""===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)}#v(e){e.closest(".form-entry").classList.add(...this.#g)}#f(e){e.closest(".form-entry").classList.remove(...this.#g)}#L(e){return this.#b(e.value)?(this.#v(e),!0):(this.#f(e),!1)}#T(e,t){return null===e&&(e="This field is Required"),`\n            <small class="form-entry__feedback">\n                <span class="icon icon-warn" aria-hidden="true"></span>\n                <span class="message">\n                    <strong>${e}</strong> ${void 0!==t?t:""}\n                </span>\n            </small>\n        `}#_(e,t){e.forEach((e=>{let i=e.closest(".form-entry"),s=i.querySelector(".form-entry__field__label");i.classList.add("is-invalid");const o=i.querySelector(".form-entry__feedback"),a=i.querySelector(".form-entry__help");let n;a&&(n=a.innerHTML.toString());let l=i.getAttribute("data-error-message"),r=[l,n];t.push(r),null===o&&s.insertAdjacentHTML("afterend",this.#T(l,n))}))}#k(e){let t=e.querySelector('[class*="alert"], [class*="invalid"]');if(t){t.hasAttribute("data-alert")&&(t.style.display="block");let e=t.offsetTop-16;window.scrollTo({top:e,behavior:"smooth"})}}#q(e){e.addEventListener("submit",(t=>{t.preventDefault(),this.#p=!0;let i=[],s=e.querySelectorAll("input, select, textarea");s.forEach((e=>{e.addEventListener("input",(()=>this.#L(e)))})),s.forEach((e=>{this.#L(e)}));let o=e.querySelectorAll(":invalid");this.#_(o,i),i.length>0&&t.preventDefault(),this.#k(e)}))}init(){this.#w.forEach((e=>this.#q(e)))}}class h{#C=document.querySelectorAll(".file-upload");#D(e){return function(t){const[i]=t.target.files,{name:s,size:o}=i,a=`\n                <span class="file-upload__data">\n                    <span class="file-name">${s}</span>\n                    <span class="file-size">${(o/1e3).toFixed(2)} kb</span>\n                </span>\n            `,n=e.querySelector(".file-upload__data");n&&n.remove(),e.insertAdjacentHTML("beforeend",a)}}dragOver(e){e.target.closest(".form-entry").classList.add("active")}dragOff(e){e.target.closest(".form-entry").classList.remove("active")}dropped(e){e.target.closest(".form-entry").classList.remove("active")}#M(e){e.querySelector('input[type="file"]').addEventListener("change",this.#D(e)),e.addEventListener("dragenter",this.dragOver.bind(this)),e.addEventListener("dragleave",this.dragOff.bind(this)),e.addEventListener("dragend",this.dragOff.bind(this)),e.addEventListener("drop",this.dropped.bind(this))}init(){this.#C.forEach((e=>this.#M(e)))}}class m{#B=document.querySelectorAll("[data-lightbox]");#O='\n    <div class="lightbox__buttons button-group">\n      <button class="button button--icon-only" data-lightbox-previous>\n        <span class="icon icon-arrow-left" aria-label="Previous" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-next>\n        <span class="icon icon-arrow-right" aria-label="Next" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-close>\n        <span class="icon icon-close" aria-label="Close" aria-hidden="true"></span>\n      </button>\n    </div>\n    <figure class="lightbox__container" aria-live="polite" aria-atomic="true">\n      <div class="lightbox__media"></div>           \n      <figcaption class="lightbox__caption"></figcaption>\n    </figure>\n  ';#I='\n    <video controls>\n      <source type="video/mp4">\n    </video>\n  ';#H='\n    <iframe\n        frameborder="0"\n        allow="autoplay; fullscreen;"\n        allowfullscreen\n    ></iframe>\n  ';#F='\n    <div class="lightbox__media__loader">\n      <span class="icon icon-loading icon--rotate" aria-hidden="true"></span>\n    </div>\n    <div class="lightbox__media__error" style="display: none;">\n      <span class="icon icon-warn" aria-hidden="true"></span>\n      <p>Failed to load content. Please try again later.</p>\n    </div>\n  ';#$='<img src="https://source.unsplash.com/1600x900" />';#P=[];#N=e=>t=>{document.querySelector(".lightbox")||(t.preventDefault(),this.lightbox=this.#V(),this.currentLB=e,a(this.lightbox),this.#U(e))};#K=e=>{e.stopPropagation(),e.target!==e.currentTarget&&"click"===e.type||(n(this.lightbox),this.lightbox.parentElement.removeChild(this.lightbox),window.removeEventListener("keyup",this.#R))};#W=(()=>{var e=this;return function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e.lightbox.querySelector(".lightbox__caption").style.display=t?"block":"none"}})();#G=e=>{if(e.preventDefault(),e.target.hasAttribute("data-lightbox-previous"))this.#z(-1);else{if(!e.target.hasAttribute("data-lightbox-next"))return;this.#z(1)}};#R=e=>{if(e.preventDefault(),!(this.#P.length<=1)||"ArrowLeft"!==e.code&&"ArrowRight"!==e.code)switch(e.code){case"ArrowLeft":this.#z(-1),this.lightbox.querySelector("[data-lightbox-previous]").focus();break;case"ArrowRight":this.#z(1),this.lightbox.querySelector("[data-lightbox-next]").focus();break;case"Escape":this.#K(e);break;default:return}};#z(e){this.currentLB+=e,this.currentLB<0?this.currentLB=this.#P.length-1:this.currentLB>=this.#P.length&&(this.currentLB=0),this.#U(this.currentLB)}#U(e){const t=this.lightbox.querySelector(".lightbox__media"),i=this.lightbox.querySelector(".lightbox__caption");let s;t.innerHTML="";const{lbType:o,lbSrc:a,lbAlt:n,lbCaption:l}=this.#P[e],r=null!==l;switch(this.#W(r),o){case"image":s=this.#j(t,a,n);break;case"video":s=this.#X(t,a)}r&&(i.innerHTML=l)}#j(e,t,i){e.hasAttribute("style")&&e.removeAttribute("style"),e.innerHTML=this.#$;const s=this.#Y();e.appendChild(s);const o=e.querySelector("img");return o.alt=i,o.src=t,this.#J(o,s),o}#X(e,t){const i=/youtube/i.test(t),s=/vimeo/i.test(t);let o;if(i||s)e.innerHTML=this.#H,o=e.querySelector("iframe"),o.src=t;else{e.innerHTML=this.#I;const i=this.#Y();e.appendChild(i),o=e.querySelector("source");const s=e.querySelector("video");s.addEventListener("loadedmetadata",(()=>{let t=s.videoWidth,i=s.videoHeight;e.style.maxWidth=`${t}px`,e.style.aspectRatio=`${t} / ${i}`})),this.#J(o,i),o.src=t}return o}#V(){const e=document.createElement("div");e.classList.add("lightbox"),e.setAttribute("aria-hidden",!0),e.innerHTML=this.#O,document.body.appendChild(e);const t=e.querySelector("[data-lightbox-previous]"),i=e.querySelector("[data-lightbox-next]"),s=e.querySelector("[data-lightbox-close]");return this.#P.length<=1&&(t.setAttribute("disabled",!0),i.setAttribute("disabled",!0),t.style.display="none",i.style.display="none"),e.addEventListener("click",this.#K),s.addEventListener("click",this.#K),t.addEventListener("click",this.#G),i.addEventListener("click",this.#G),window.addEventListener("keyup",this.#R),e}#Q(e){let t=null,i="";null!==e.querySelector("img")&&(t=e.querySelector("img").src||null,i=e.querySelector("img").alt||"");return{lbType:e.getAttribute("data-lightbox")||"image",lbSrc:e.getAttribute("data-lightbox-src")||t,lbCaption:e.getAttribute("data-lightbox-caption")||null,lbAlt:e.getAttribute("data-lightbox-alt")||i}}#Z(){this.#B.forEach((e=>{this.#P.push(this.#Q(e))}))}#Y=()=>{const e=document.createElement("div");return e.className="lightbox__media__loader",e.innerHTML=this.#F,e};#J=(e,t)=>{const i="SOURCE"===e.nodeName?"loadeddata":"load";e.closest("SOURCE"===e.nodeName?"video":"img").addEventListener(i,(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),null!==this.#P[this.currentLB].lbCaption&&this.#W(!0)})),e.onerror=()=>{const i=t.querySelector(".lightbox__media__loader"),s=t.querySelector(".lightbox__media__error");e.style.display="none",this.#W(!1),i.style.display="none",s.style.display="block"}};#ee(){const e=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(e.isIntersecting){const i=e.target,s=i.dataset.lightboxSrc||i.src;if(!s)return;t.unobserve(i);const o=new Image;o.onload=()=>{document.body.appendChild(o)},o.onerror=()=>{},o.src=s,o.style.display="none",this.#P[Number(i.dataset.index)].hiddenImage=o}}))}),{root:null,rootMargin:"0px",threshold:.1});Array.from(this.#B).filter((e=>"image"===e.getAttribute("data-lightbox"))).forEach(((t,i)=>{const s=t.querySelector("img");s&&(s.dataset.index=i,e.observe(s))}))}#te(){this.#B.forEach(((e,t)=>{e.addEventListener("click",this.#N(t))}))}init(){this.#Z(),this.#te(),this.#ee()}}class g{#ie=document.querySelectorAll('[data-toggle="dropdown"]');#se(e,t){t.classList.toggle("shown"),e.setAttribute("aria-expanded","true"===e.getAttribute("aria-expanded")?"false":"true")}#oe(e,t){t.classList.remove("shown"),e.setAttribute("aria-expanded","false")}init(){window.addEventListener("click",(e=>{this.#ie.forEach((t=>{let i=t.closest("li"),s=t.nextElementSibling;i.contains(e.target)||this.#oe(t,s)}))})),this.#ie.forEach((e=>{let t=e.nextElementSibling;t&&(e.setAttribute("aria-expanded","false"),e.setAttribute("aria-haspopup","true"),e.addEventListener("click",(i=>{i.preventDefault(),this.#se(e,t)})))}))}}class p{#ae=document.querySelectorAll('[class*="table--stack"]');#ne=document.querySelectorAll(".table-scroll");#le(e){const t=e.querySelectorAll("thead th"),i=e.querySelectorAll("tbody tr");let s=[];t.forEach((e=>{if(""!==e.textContent){const t=e.textContent.trim();s.push(t)}})),i.forEach((e=>{e.querySelectorAll("td").forEach(((e,t)=>{e.innerHTML=this.#re(e.innerHTML),e.setAttribute("data-header",s[t])}))}))}#re(e){return`\n\t\t\t<div class="td-content">\n\t\t\t\t${e}\n\t\t\t</div>\n\t\t`}#de(){this.#ne.forEach((e=>{let t=e.querySelector(".table-scroll__container"),i=e.offsetWidth;t.scrollWidth>i?e.setAttribute("data-scroll",!0):e.setAttribute("data-scroll",!1),t.addEventListener("scroll",(()=>{t.scrollLeft>1?t.setAttribute("data-scrolling",!0):t.setAttribute("data-scrolling",!1)}),{passive:!0})}))}init(){this.#ae.forEach((e=>{this.#le(e)})),this.#de(),window.addEventListener("resize",this.#de.bind(this))}}class b{#ce=document.querySelectorAll(".tabs");#ue(e,t,i,s){e.preventDefault();let o=t+s;-1===s&&o<0?i[i.length-1].focus():1===s&&o>=i.length?i[0].focus():i[o].focus()}#he(e,t){e.forEach((e=>{e.setAttribute("aria-selected","false")})),t.forEach((e=>{e.classList.remove("shown"),e.setAttribute("hidden","")}))}activateTab(e,t,i){this.#he(t,i),e.setAttribute("aria-selected","true");let s=e.getAttribute("aria-controls"),o=document.getElementById(s);o.classList.add("shown"),o.removeAttribute("hidden")}init(){this.#ce.forEach((e=>{const t=e.querySelectorAll('[role="tab"]'),i=e.querySelectorAll('[role="tabpanel"]');t.forEach(((e,s)=>{e.addEventListener("click",(e=>{let s=e.target;this.activateTab(s,t,i)})),e.addEventListener("keydown",(e=>{switch(e.code){case"Home":e.preventDefault(),t[0].focus();break;case"End":e.preventDefault(),t[t.length-1].focus();break;case"ArrowLeft":this.#ue(e,s,t,-1);break;case"ArrowRight":this.#ue(e,s,t,1)}}))}))}))}}class v{#me=document.querySelector("#audio");#ge=document.querySelector("#play-pause-button");#pe=document.querySelector(".audio-player__progress");#be=document.querySelector(".audio-player__progress__fill");#ve=this.#be?.querySelector(".audio-player__thumb");#fe=document.querySelector(".audio-player__volume");#Le=document.querySelector("#mute-button");#ye=document.querySelector(".audio-player__volume-container");#Ee=document.querySelector(".audio-player__volume__fill");#Se=this.#Ee?.querySelector(".audio-player__thumb");#xe=document.querySelector("#timestamp");#Ae=!1;#we=null;#Te=null;#_e(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.classList.contains(t)?(e.classList.remove(t),e.classList.add(i)):(e.classList.remove(i),e.classList.add(t))}#ke(){this.#Ae?this.#me.pause():this.#me.play(),this.#Ae=!this.#Ae,this.#_e(this.#ge.querySelector("span.icon"),"icon-play","icon-pause")}#qe(){0===this.#me.volume?this.#me.volume=this.#Te||1:(this.#Te=this.#me.volume,this.#me.volume=0),this.#Ce()}#De=()=>{const e=this.#me.currentTime/this.#me.duration*100;this.#be.style.width=`${e}%`;const t=Math.floor(this.#me.currentTime/60),i=Math.floor(this.#me.currentTime-60*t),s=Math.floor(this.#me.duration/60),o=Math.floor(this.#me.duration-60*s);this.#xe.innerText=`${t.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")} / ${s.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`;this.#be.querySelector(".audio-player__thumb").style.left=`${e}%`};#Me=e=>{const t=(e.clientX-this.#pe.getBoundingClientRect().left)/this.#pe.offsetWidth*100;this.#me.currentTime=t/100*this.#me.duration};#Be=()=>{const e=Math.floor(this.#me.duration/60),t=Math.floor(this.#me.duration-60*e);this.#xe.innerText=`00:00 / ${e.toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`};#Oe=e=>{const t=(e.clientX-this.#fe.getBoundingClientRect().left)/this.#fe.offsetWidth*100/100;this.#me.volume=Math.min(1,t),this.#Ce()};#Ce(){const e=100*this.#me.volume;this.#Ee.style.width=`${e}%`;this.#Ee.querySelector(".audio-player__thumb").style.left=`${e}%`;const t=this.#me.volume<.1,i=this.#Le.querySelector("span.icon");t?(i.classList.remove("icon-volume"),i.classList.add("icon-volume-mute")):(i.classList.remove("icon-volume-mute"),i.classList.add("icon-volume"))}#u(e){if(37===e.keyCode||39===e.keyCode)if(e.currentTarget===this.#pe)this.#me.currentTime+=37===e.keyCode?-5:5,this.#De();else if(e.currentTarget===this.#fe){let t=this.#me.volume+(37===e.keyCode?-.05:.05);t=Math.max(0,Math.min(1,t)),this.#me.volume=t,this.#Ce()}}#Ie=(e,t)=>{e.preventDefault(),document.addEventListener("mousemove",this.#He),document.addEventListener("mouseup",this.#Fe),this.#we=t};#He=e=>{let t,i;"progress"===this.#we?(t=this.#pe,i=this.#Me):(t=this.#fe,i=this.#Oe);const s=t.getBoundingClientRect(),o=e.clientX-s.left,a=s.right-s.left;if(o>=0&&o<=a){const e=o/a*100;i(new MouseEvent("click",{clientX:o+s.left}));t.querySelector(".audio-player__thumb").style.left=`${e}%`;t.querySelector('[class*="__fill"]').style.width=`${e}%`}};#Fe=()=>{document.removeEventListener("mousemove",this.#He),document.removeEventListener("mouseup",this.#Fe)};init(){this.#me&&(this.#Le?.addEventListener("click",(()=>this.#qe())),this.#ge.addEventListener("click",(()=>this.#ke())),this.#me.addEventListener("timeupdate",(()=>this.#De())),this.#pe.addEventListener("click",(e=>this.#Me(e))),this.#fe?.addEventListener("click",(e=>this.#Oe(e))),this.#pe.addEventListener("keydown",(e=>this.#u(e))),this.#fe?.addEventListener("keydown",(e=>this.#u(e))),(isNaN(this.#me.volume)||0===this.#me.volume)&&(this.#me.volume=1),this.#Ce(),this.#ve?.addEventListener("mousedown",(e=>this.#Ie(e,"progress"))),this.#Se?.addEventListener("mousedown",(e=>this.#Ie(e,"volume"))),this.#me.addEventListener("loadedmetadata",(()=>{this.#De(),this.#Be()})))}}class f{#$e=document.querySelectorAll(".accordion");setFocusableElements(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const i=l(e);for(const e of i)!0===t?e.setAttribute("tabindex",0):!1===t&&e.setAttribute("tabindex",-1)}initAccordion(e,t,i,s){e.preventDefault(),e.stopPropagation();for(const e of s)e.classList.remove("show"),e!==i&&(e.classList.remove("shown"),e.previousElementSibling.setAttribute("aria-expanded",!1),e.setAttribute("aria-hidden",!0),this.setFocusableElements(e,!1));i.classList.toggle("shown");let o=t.getAttribute("aria-expanded");"true"===o?(t.setAttribute("aria-expanded",!1),i.setAttribute("aria-hidden",!0),this.setFocusableElements(i,!1)):"false"===o&&(t.setAttribute("aria-expanded",!0),i.setAttribute("aria-hidden",!1),this.setFocusableElements(i,!0));let a=new Event("accTrigger",{bubbles:!0});document.dispatchEvent(a)}init(){this.#$e.forEach((e=>{const t=e.querySelectorAll(':scope > [data-accordion="button"]'),i=e.querySelectorAll(':scope > [data-accordion="panel"]');t.forEach(((e,s)=>{const o=e.nextElementSibling;let a=e.getAttribute("aria-expanded");e.setAttribute("tabindex",0),"true"===a?(o.classList.add("show"),this.setFocusableElements(o,!0)):(e.setAttribute("aria-expanded",!1),o.setAttribute("aria-hidden",!0),this.setFocusableElements(o,!1)),e.addEventListener("click",(t=>{this.initAccordion(t,e,o,i)})),e.addEventListener("keydown",(e=>{const i=i=>{e.preventDefault();let o=s+i;-1===i&&o<0?t[t.length-1].focus():1===i&&o>=t.length?t[0].focus():t[o].focus()};switch(e.code){case"ArrowUp":i(-1);break;case"ArrowDown":i(1)}})),e.addEventListener("keyup",(t=>{"Enter"===t.code&&"BUTTON"!==t.target.tagName&&this.initAccordion(t,e,o,i)}))}))}))}}class L{#Pe=document.querySelectorAll(".comprehension-checkpoint");#Ne=document.querySelectorAll(".comprehension-checkpoint input");#Ve=document.querySelectorAll(".quiz__response");#Ue=e=>{const t=e.currentTarget;this.#Ne.forEach((e=>{e!==t&&(e.checked=!1)})),this.#Ve.forEach((e=>{e.classList.remove("shown")}));const i=t.closest("label").nextElementSibling;e.currentTarget.checked&&i.classList.add("shown")};init(){this.#Pe&&this.#Pe.forEach((e=>{e.querySelectorAll("input").forEach((e=>{e.addEventListener("change",(e=>{this.#Ue(e)}))}))}))}}class y{#Ke=document.querySelectorAll(".grid--discipline .backdrop");init(){let e,t=(i=1200,window.matchMedia(`(min-width: ${i}px)`)).matches;var i;this.#Ke.forEach((i=>{const s=t=>{t.preventDefault(),e=setTimeout((()=>{i.classList.remove("unfocused"),i.classList.add("focused")}),500)},o=t=>{t.preventDefault(),clearTimeout(e),i.classList.contains("focused")&&(i.classList.remove("focused"),i.classList.add("unfocused"),i.addEventListener("animationend",(()=>{i.classList.remove("unfocused")})))};t?(i.addEventListener("mouseenter",s),i.addEventListener("mouseleave",o)):(i.removeEventListener("mouseenter",s),i.removeEventListener("mouseleave",o))}))}}class E{#Re=document.querySelectorAll(".modal");#We=document.querySelectorAll("[data-modal-open]");#Ge=0;init(){const e=e=>{if(!e)return;this.#Ge=window.pageYOffset,document.querySelector("html").style.setProperty("--scroll-position",`-${this.#Ge}px`),document.querySelector("html").classList.add("has-overlay"),e.setAttribute("aria-hidden",!1);const t=document.activeElement,i=e.querySelector(".modal__content"),s=e.querySelector(".modal__content__head");let o;const a=()=>{o=`${i.offsetWidth}px`,s.style.width=o};window.addEventListener("resize",a),a();const n=s.offsetHeight;let l;const r=()=>{const t=e.scrollTop,o=(e=>{let t=0;for(;e;)t+=e.offsetTop,e=e.offsetParent;return t})(i);l=o-t,l<=0?(s.classList.add("sticky","theme-primary","box-shadow-1"),s.nextElementSibling.style.paddingTop=`${n}px`):(s.classList.remove("sticky","theme-primary","box-shadow-1"),s.nextElementSibling.style.paddingTop="initial")};if(e.addEventListener("scroll",r),r(),!i)return;i.setAttribute("tabindex",0),i.focus(),i.setAttribute("tabindex",-1),e.classList.contains("modal--scroll-all")&&(e.scrollTop=0);const d=e.querySelectorAll("[data-modal-close]"),c=e=>{i.contains(e.target)||u()},u=()=>{e.setAttribute("aria-hidden",!0),t.focus(),document.querySelector("html").classList.remove("has-overlay"),window.scrollTo({top:this.#Ge,behavior:"instant"}),window.removeEventListener("click",c)},h=function(){return[...(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll(["a[href]","button","input","textarea","select","details",'[tabindex]:not([tabindex="-1"])'])].filter((e=>!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")))}(e),m=h[0],g=h[h.length-1];e.addEventListener("keydown",(e=>{switch(e.code){case"Tab":document.activeElement===g&&(e.shiftKey||(e.preventDefault(),m.focus())),document.activeElement===m&&e.shiftKey&&(e.preventDefault(),g.focus()),document.activeElement===i&&e.shiftKey&&(e.preventDefault(),m.focus());break;case"Escape":u()}})),d.forEach((e=>{e.addEventListener("click",u),e.setAttribute("aria-label","Close Modal Window")})),"true"===e.dataset.modalCloseOutside&&window.addEventListener("click",c)};this.#Re.forEach((e=>{const t=e.querySelector(".modal__content");t.setAttribute("role","dialog"),t.setAttribute("aria-modal",!0),e.setAttribute("aria-hidden",!0)})),this.#We.forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault();const i=t.target.getAttribute("data-modal-open").replace(/#/,""),s=document.getElementById(i);e(s),t.stopPropagation()}))}))}}class S{#ze=document.getElementById("ngss-toggle-switch");#je=document.querySelectorAll(".ngss");#Xe=document.getElementById("terms-toggle-switch");#Ye=document.querySelectorAll(".term");#Je='\n    <button class="button button--icon-only" data-close-btn>\n      <span class="icon icon-close" aria-hidden="true"></span>\n    </button>\n  ';removeOldDetails=()=>{let e=document.querySelector(".reading-toggle-overlay");e&&e.remove()};handleClose=()=>{let e=document.querySelector("[data-close-btn]");n(),e&&e.removeEventListener("click",this.handleClose),this.removeOldDetails()};handleOverlayClick=e=>{this.removeOldDetails(),document.body.insertAdjacentHTML("beforeend",e),a(document.querySelector(".reading-toggle-overlay"));let t=document.querySelector("[data-close-btn]");t&&t.addEventListener("click",this.handleClose)};handleNGSSClick=e=>{const t=e.getAttribute("data-ngss-cat"),i=e.getAttribute("data-ngss-desc"),s=`\n      <div class="reading-toggle-overlay">\n        <article class="reading-toggle__detail" aria-polite="live" data-ngss-cat="${t}">\n          <div class="reading-toggle__detail__head">\n            ${t}\n            ${this.#Je}\n          </div>\n          <div class="reading-toggle__detail__body">\n            <p>\n              ${i}\n            </p>\n          </div>\n        </article>\n      </div>\n    `;this.handleOverlayClick(s)};handleTermClick=e=>{const t=e.innerHTML.toString(),i=e.getAttribute("data-term-def")?e.getAttribute("data-term-def"):"Title not found",s=e.getAttribute("data-term-url")?e.getAttribute("data-term-url"):"#1",o=`\n      <div class="reading-toggle-overlay">\n        <article class="reading-toggle__detail glossary-term" aria-polite="live" data-term-definition>\n          <div class="reading-toggle__detail__head">\n            <h2 class="h6">\n              ${t}\n            </h2>\n            ${this.#Je}\n          </div>\n          <div class="reading-toggle__detail__body">\n            <p>\n              ${i}\n            </p>\n            <p>\n              <a href="${s}">\n                View in Glossary\n              </a>\n            </p>\n          </div>\n        </article>\n      </div>\n    `;this.handleOverlayClick(o)};turnOnNGSS=()=>{this.#je.forEach(((e,t)=>{e.classList.add("highlighted"),e.setAttribute("tabindex",t+1),e.addEventListener("click",(()=>this.handleNGSSClick(e)),!0)}))};turnOffNGSS=()=>{this.#ze.checked=!1,this.#je.forEach((e=>{e.classList.remove("highlighted"),e.setAttribute("tabindex",-1),e.removeEventListener("click",(()=>this.handleNGSSClick(e)),!0)})),this.removeOldDetails()};turnOnTerms=()=>{this.#Ye.forEach(((e,t)=>{e.classList.add("highlighted"),e.setAttribute("tabindex",t+1),e.addEventListener("click",(()=>this.handleTermClick(e)))}))};turnOffTerms=()=>{this.#Xe.checked=!1,this.#Ye.forEach((e=>{e.classList.remove("highlighted"),e.setAttribute("tabindex",-1),e.removeEventListener("click",(()=>this.handleTermClick(e)))})),this.removeOldDetails()};init=()=>{this.#Xe&&this.#Xe.addEventListener("change",(e=>{!0===e.target.checked?(!0===this.#ze.checked&&this.turnOffNGSS(),this.turnOnTerms()):this.turnOffTerms()})),this.#ze&&this.#ze.addEventListener("change",(e=>{!0===e.target.checked?(!0===this.#Xe.checked&&this.turnOffTerms(),this.turnOnNGSS()):this.turnOffNGSS()}))}}document.addEventListener("DOMContentLoaded",(()=>{(new e).init();(new t).init();(new d).init();(new c).init();(new u).init();(new h).init();(new m).init();(new g).init();(new p).init();(new b).init();(new f).init();(new v).init();(new L).init();(new y).init();(new E).init();(new S).init()}))}();