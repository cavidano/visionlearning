!function(){"use strict";let e,t=0,s=document.querySelector("html");const i=function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;s.removeAttribute("style"),s.classList.remove("has-overlay"),s.classList.length||s.removeAttribute("class"),i&&"false"===i.getAttribute("aria-hidden")&&i.setAttribute("aria-hidden",!0),window.scrollTo({top:t,behavior:"instant"}),e.focus()},o=function(){return[...(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll(["a[href]","area","button","details","frame","iframe","input","object","summary","textarea","select",'[tabindex]:not([tabindex="-1"])'])].filter((e=>!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")))},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,s=o(e),a=s[0],n=s[s.length-1];t.setAttribute("tabindex","-1"),t.focus(),e.addEventListener("keydown",(t=>{switch(t.code){case"Tab":document.activeElement===n&&(t.shiftKey||(t.preventDefault(),a.focus())),document.activeElement===a&&t.shiftKey&&(t.preventDefault(),n.focus());break;case"Escape":i(e)}}))},n=(e,t,s,i)=>{(e instanceof Element||e instanceof Document)&&"string"==typeof t&&t&&"string"==typeof s&&s&&"function"==typeof i&&e.addEventListener(t,(e=>{(e.target.matches(s)||e.target.closest(s))&&i(e)}))};class l{#e=(()=>document.querySelectorAll(".accordion"))();#t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];o(e).forEach((e=>{e.setAttribute("tabindex",t?0:-1)}))}#s(e,t,s,i){e.preventDefault(),e.stopPropagation(),i.forEach((e=>{e.classList.remove("show"),e!==s&&(e.classList.remove("shown"),e.previousElementSibling.setAttribute("aria-expanded",!1),e.setAttribute("aria-hidden",!0),this.#t(e,!1))})),s.classList.toggle("shown");const o="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!o),s.setAttribute("aria-hidden",o),this.#t(s,!o);const a=new Event("accTrigger",{bubbles:!0});document.dispatchEvent(a)}#i(e,t,s){const i=i=>{e.preventDefault();let o=s+i;-1===i&&o<0?t[t.length-1].focus():1===i&&o>=t.length?t[0].focus():t[o].focus()};switch(e.code){case"ArrowUp":i(-1);break;case"ArrowDown":i(1)}}init(){this.#e.forEach((e=>{const t=e.querySelectorAll(':scope > [data-accordion="button"]'),s=e.querySelectorAll(':scope > [data-accordion="panel"]');t.forEach(((i,o)=>{const a=i.nextElementSibling,l="true"===i.getAttribute("aria-expanded");i.setAttribute("tabindex",0),a.classList.toggle("show",l),this.#t(a,l),n(e,"click",'[data-accordion="button"]',(e=>{e.target===i&&this.#s(e,i,a,s)})),n(e,"keydown",'[data-accordion="button"]',(e=>{e.target===i&&this.#i(e,t,o)})),n(e,"keyup",'[data-accordion="button"]',(e=>{"Enter"===e.code&&this.#s(e,i,a,s)}))}))}))}}class r{#o=(()=>document.querySelectorAll(".alert--dismissable"))();#a='\n    <button class="button button--icon-only">\n        <span class="icon icon-close" aria-label="Close" aria-hidden="true">\n    </button>\n  ';#n=e=>t=>{t.preventDefault(),e.classList.add("dismissed");document.querySelector(".dismissed").addEventListener("animationend",(()=>{e.remove()}))};init(){this.#o.forEach((e=>{e.insertAdjacentHTML("afterbegin",this.#a);e.querySelector("button").addEventListener("click",this.#n(e))}))}}class d{#l=(()=>document.querySelectorAll("[data-target-toggle]"))();#r(e,t){e.setAttribute("aria-expanded",!1),t.classList.remove("shown")}#d(e,t,s){e.setAttribute("aria-expanded",!0),t.classList.add("shown"),s&&s.focus()}#c(e,t,s){return i=>{switch(i.code){case"Tab":document.activeElement===s&&i.shiftKey&&(i.preventDefault(),e.focus());break;case"Escape":this.#r(e,t)}}}#h(e,t){const s=e.target.getAttribute("data-target-toggle").replace(/#/,""),i=document.getElementById(s),a=o(i)[0],n=t.getAttribute("aria-expanded");"true"===n?this.#r(t,i):"false"===n&&this.#d(t,i,i.hasAttribute("data-focus-first")?a:null),i.addEventListener("keydown",this.#c(t,i,a))}init(){this.#l.forEach((e=>{e.setAttribute("aria-expanded",!1),e.addEventListener("click",(t=>{if(this.#h(t,e),e.hasAttribute("data-target-close")){const e=t.target.getAttribute("data-target-close").replace(/#/,""),s=document.getElementById(e),i=document.querySelector(`[data-target-toggle="#${e}"]`);this.#r(i,s)}}))}))}}class c{#u=(()=>document.querySelectorAll(".form-entry"))();#g=["is-invalid"];#m=!1;#p(){return""===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)}#b(e){e.closest(".form-entry").classList.add(...this.#g)}#v(e){e.closest(".form-entry").classList.remove(...this.#g)}#f(e){return this.#p(e.value)?(this.#b(e),!0):(this.#v(e),!1)}#y(e){return t=>{t.target.closest(e).classList.add("active")}}#L(e){return t=>{t.target.closest(e).classList.remove("active")}}#E(e,t){this.#m&&t&&this.#f(e),""!==e.value?e.closest(".form-entry").classList.add("has-value"):e.closest(".form-entry").classList.remove("has-value")}#S(e){const t=e.querySelectorAll(["email","input","select","tel","textarea"]);let s=e.hasAttribute("data-required");t.forEach((e=>this.#x(e,s)))}#x(e,t){const s=e.closest(".form-entry").querySelector(".form-entry__field__input");let i=".form-entry";if("INPUT"===e.tagName){const t=e.getAttribute("type");"radio"!==t&&"checkbox"!==t||e.disabled&&e.closest("label").classList.add("disabled")}e.addEventListener("focusin",this.#y(i)),e.addEventListener("focusout",this.#L(i)),t&&(e.setAttribute("required","true"),e.setAttribute("aria-required",!0)),e.addEventListener("change",(()=>this.#E(e,t))),s&&s.addEventListener("click",this.handleClickOnInputText)}handleClickOnInputText(e){let t=e.target.tagName,s=e.target.closest(".form-entry__field__input").querySelector("input");"SPAN"===t&&s.focus()}init(){this.#u.forEach((e=>this.#S(e)))}}class h{#T=(()=>document.querySelectorAll("form[novalidate]"))();#g=["is-invalid"];#m=!1;#p(){return""===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)}#b(e){e.closest(".form-entry").classList.add(...this.#g)}#v(e){e.closest(".form-entry").classList.remove(...this.#g)}#f(e){return this.#p(e.value)?(this.#b(e),!0):(this.#v(e),!1)}#A(e,t){return null===e&&(e="This field is Required"),`\n            <small class="form-entry__feedback">\n                <span class="icon icon-warn" aria-hidden="true"></span>\n                <span class="message">\n                    <strong>${e}</strong> ${void 0!==t?t:""}\n                </span>\n            </small>\n        `}#w(e,t){e.forEach((e=>{let s=e.closest(".form-entry"),i=s.querySelector(".form-entry__field__label");s.classList.add("is-invalid");const o=s.querySelector(".form-entry__feedback"),a=s.querySelector(".form-entry__help");let n;a&&(n=a.innerHTML.toString());let l=s.getAttribute("data-error-message"),r=[l,n];t.push(r),null===o&&i.insertAdjacentHTML("afterend",this.#A(l,n))}))}#k(e){let t=e.querySelector('[class*="alert"], [class*="invalid"]');if(t){t.hasAttribute("data-alert")&&(t.style.display="block");let e=t.offsetTop-16;window.scrollTo({top:e,behavior:"smooth"})}}#_(e){e.addEventListener("submit",(t=>{t.preventDefault(),this.#m=!0;let s=[],i=e.querySelectorAll("input, select, textarea");i.forEach((e=>{e.addEventListener("input",(()=>this.#f(e)))})),i.forEach((e=>{this.#f(e)}));let o=e.querySelectorAll(":invalid");this.#w(o,s),s.length>0&&t.preventDefault(),this.#k(e)}))}init(){this.#T.forEach((e=>this.#_(e)))}}class u{#C=(()=>document.querySelectorAll(".file-upload"))();#q(e){return function(t){const[s]=t.target.files,{name:i,size:o}=s,a=`\n                <span class="file-upload__data">\n                    <span class="file-name">${i}</span>\n                    <span class="file-size">${(o/1e3).toFixed(2)} kb</span>\n                </span>\n            `,n=e.querySelector(".file-upload__data");n&&n.remove(),e.insertAdjacentHTML("beforeend",a)}}dragOver(e){e.target.closest(".form-entry").classList.add("active")}dragOff(e){e.target.closest(".form-entry").classList.remove("active")}dropped(e){e.target.closest(".form-entry").classList.remove("active")}#D(e){e.querySelector('input[type="file"]').addEventListener("change",this.#q(e)),e.addEventListener("dragenter",this.dragOver.bind(this)),e.addEventListener("dragleave",this.dragOff.bind(this)),e.addEventListener("dragend",this.dragOff.bind(this)),e.addEventListener("drop",this.dropped.bind(this))}init(){this.#C.forEach((e=>this.#D(e)))}}class g{#M=(()=>document.querySelectorAll("[data-lightbox]"))();#B='\n    <div class="lightbox__buttons button-group">\n      <button class="button button--icon-only" data-lightbox-previous>\n        <span class="icon icon-arrow-left" aria-label="Previous" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-next>\n        <span class="icon icon-arrow-right" aria-label="Next" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-close>\n        <span class="icon icon-close" aria-label="Close" aria-hidden="true"></span>\n      </button>\n    </div>\n    <figure class="lightbox__container" aria-live="polite" aria-atomic="true">\n      <div class="lightbox__media"></div>           \n      <figcaption class="lightbox__caption"></figcaption>\n    </figure>\n  ';#H='\n    <video controls>\n      <source type="video/mp4">\n    </video>\n  ';#I='\n    <iframe\n        frameborder="0"\n        allow="autoplay; fullscreen;"\n        allowfullscreen\n    ></iframe>\n  ';#O='\n    <div class="lightbox__media__loader">\n      <span class="icon icon-loading icon--rotate" aria-hidden="true"></span>\n    </div>\n    <div class="lightbox__media__error" style="display: none;">\n      <span class="icon icon-warn" aria-hidden="true"></span>\n      <p>Failed to load content. Please try again later.</p>\n    </div>\n  ';#$='<img src="https://source.unsplash.com/1600x900" />';#P=[];#N=i=>o=>{document.querySelector(".lightbox")||(o.preventDefault(),this.lightbox=this.#F(),this.currentLB=i,function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e=document.activeElement,t=window.scrollY,s.style.setProperty("--scroll-position",`-${t}px`),s.classList.add("has-overlay"),i&&"true"===i.getAttribute("aria-hidden")&&i.setAttribute("aria-hidden",!1),a(i)}(this.lightbox),this.#V(i))};#K=e=>{e.stopPropagation(),e.target!==e.currentTarget&&"click"===e.type||(i(this.lightbox),this.lightbox.parentElement.removeChild(this.lightbox),window.removeEventListener("keyup",this.#R))};#U=(()=>{var e=this;return function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e.lightbox.querySelector(".lightbox__caption").style.display=t?"block":"none"}})();#G=e=>{if(e.preventDefault(),e.target.hasAttribute("data-lightbox-previous"))this.#W(-1);else{if(!e.target.hasAttribute("data-lightbox-next"))return;this.#W(1)}};#R=e=>{if(e.preventDefault(),!(this.#P.length<=1)||"ArrowLeft"!==e.code&&"ArrowRight"!==e.code)switch(e.code){case"ArrowLeft":this.#W(-1),this.lightbox.querySelector("[data-lightbox-previous]").focus();break;case"ArrowRight":this.#W(1),this.lightbox.querySelector("[data-lightbox-next]").focus();break;case"Escape":this.#K(e);break;default:return}};#W(e){this.currentLB+=e,this.currentLB<0?this.currentLB=this.#P.length-1:this.currentLB>=this.#P.length&&(this.currentLB=0),this.#V(this.currentLB)}#V(e){const t=this.lightbox.querySelector(".lightbox__media"),s=this.lightbox.querySelector(".lightbox__caption");let i;t.innerHTML="";const{lbType:o,lbSrc:a,lbAlt:n,lbCaption:l}=this.#P[e],r=null!==l;switch(this.#U(r),o){case"image":i=this.#z(t,a,n);break;case"video":i=this.#j(t,a)}r&&(s.innerHTML=l)}#z(e,t,s){e.hasAttribute("style")&&e.removeAttribute("style"),e.innerHTML=this.#$;const i=this.#X();e.appendChild(i);const o=e.querySelector("img");return o.alt=s,o.src=t,this.#Y(o,i),o}#j(e,t){const s=/youtube/i.test(t),i=/vimeo/i.test(t);let o;if(s||i)e.innerHTML=this.#I,o=e.querySelector("iframe"),o.src=t;else{e.innerHTML=this.#H;const s=this.#X();e.appendChild(s),o=e.querySelector("source");const i=e.querySelector("video");i.addEventListener("loadedmetadata",(()=>{let t=i.videoWidth,s=i.videoHeight;e.style.maxWidth=`${t}px`,e.style.aspectRatio=`${t} / ${s}`})),this.#Y(o,s),o.src=t}return o}#F(){const e=document.createElement("div");e.classList.add("lightbox"),e.setAttribute("aria-hidden",!0),e.innerHTML=this.#B,document.body.appendChild(e);const t=e.querySelector("[data-lightbox-previous]"),s=e.querySelector("[data-lightbox-next]"),i=e.querySelector("[data-lightbox-close]");return this.#P.length<=1&&(t.setAttribute("disabled",!0),s.setAttribute("disabled",!0),t.style.display="none",s.style.display="none"),e.addEventListener("click",this.#K),i.addEventListener("click",this.#K),t.addEventListener("click",this.#G),s.addEventListener("click",this.#G),window.addEventListener("keyup",this.#R),e}#J(e){let t=null,s="";null!==e.querySelector("img")&&(t=e.querySelector("img").src||null,s=e.querySelector("img").alt||"");return{lbType:e.getAttribute("data-lightbox")||"image",lbSrc:e.getAttribute("data-lightbox-src")||t,lbCaption:e.getAttribute("data-lightbox-caption")||null,lbAlt:e.getAttribute("data-lightbox-alt")||s}}#Q(){this.#M.forEach((e=>{this.#P.push(this.#J(e))}))}#X=()=>{const e=document.createElement("div");return e.className="lightbox__media__loader",e.innerHTML=this.#O,e};#Y=(e,t)=>{const s="SOURCE"===e.nodeName?"loadeddata":"load";e.closest("SOURCE"===e.nodeName?"video":"img").addEventListener(s,(()=>{t&&t.parentNode&&t.parentNode.removeChild(t),null!==this.#P[this.currentLB].lbCaption&&this.#U(!0)})),e.onerror=()=>{const s=t.querySelector(".lightbox__media__loader"),i=t.querySelector(".lightbox__media__error");e.style.display="none",this.#U(!1),s.style.display="none",i.style.display="block"}};#Z(){const e=new IntersectionObserver(((e,t)=>{e.forEach((e=>{if(e.isIntersecting){const s=e.target,i=s.dataset.lightboxSrc||s.src;if(!i)return;t.unobserve(s);const o=new Image;o.onload=()=>{document.body.appendChild(o)},o.onerror=()=>{},o.src=i,o.style.display="none",this.#P[Number(s.dataset.index)].hiddenImage=o}}))}),{root:null,rootMargin:"0px",threshold:.1});Array.from(this.#M).filter((e=>"image"===e.getAttribute("data-lightbox"))).forEach(((t,s)=>{const i=t.querySelector("img");i&&(i.dataset.index=s,e.observe(i))}))}#ee(){this.#M.forEach(((e,t)=>{e.addEventListener("click",this.#N(t))}))}init(){this.#Q(),this.#ee(),this.#Z()}}class m{#te=(()=>document.querySelectorAll('[data-toggle="dropdown"]'))();#se(e,t){t.classList.toggle("shown"),e.setAttribute("aria-expanded","true"===e.getAttribute("aria-expanded")?"false":"true")}#ie(e,t){t.classList.remove("shown"),e.setAttribute("aria-expanded","false")}init(){window.addEventListener("click",(e=>{this.#te.forEach((t=>{let s=t.closest("li"),i=t.nextElementSibling;s.contains(e.target)||this.#ie(t,i)}))})),this.#te.forEach((e=>{let t=e.nextElementSibling;t&&(e.setAttribute("aria-expanded","false"),e.setAttribute("aria-haspopup","true"),e.addEventListener("click",(s=>{s.preventDefault(),this.#se(e,t)})))}))}}class p{#oe=(()=>document.querySelectorAll('[class*="table--stack"]'))();#ae=(()=>document.querySelectorAll(".table-scroll"))();#ne(e){const t=e.querySelectorAll("thead th"),s=e.querySelectorAll("tbody tr");let i=[];t.forEach((e=>{if(""!==e.textContent){const t=e.textContent.trim();i.push(t)}})),s.forEach((e=>{e.querySelectorAll("td").forEach(((e,t)=>{e.innerHTML=this.#le(e.innerHTML),e.setAttribute("data-header",i[t])}))}))}#le(e){return`\n\t\t\t<div class="td-content">\n\t\t\t\t${e}\n\t\t\t</div>\n\t\t`}#re(){this.#ae.forEach((e=>{let t=e.querySelector(".table-scroll__container"),s=e.offsetWidth;(t.scrollWidth||t.offsetWidth)>s?e.setAttribute("data-scroll",!0):e.setAttribute("data-scroll",!1),t.addEventListener("scroll",(()=>{t.scrollLeft>1?t.setAttribute("data-scrolling",!0):t.setAttribute("data-scrolling",!1)}),{passive:!0})}))}init(){this.#oe.forEach((e=>{this.#ne(e)})),this.#re(),window.addEventListener("resize",this.#re.bind(this))}}class b{#de=(()=>document.querySelectorAll(".tabs"))();#ce(e,t){e.forEach((e=>{e.setAttribute("aria-selected","false"),e.setAttribute("tabindex","-1"),e.classList.remove("is-active")})),t.forEach((e=>{e.classList.remove("shown"),e.setAttribute("aria-hidden","true")}))}#he(e,t,s){this.#ce(t,s),e.setAttribute("aria-selected","true"),e.setAttribute("tabindex","0"),e.classList.add("is-active");const i=e.getAttribute("aria-controls"),o=document.getElementById(i);o.classList.add("shown"),o.setAttribute("aria-hidden","false")}#ue(e,t,s){if("true"===e.getAttribute("aria-selected")){e.setAttribute("aria-selected","false"),e.setAttribute("tabindex","-1"),e.classList.remove("is-active");const t=e.getAttribute("aria-controls"),s=document.getElementById(t);s.classList.remove("shown"),s.setAttribute("aria-hidden","true")}else this.#he(e,t,s)}#ge(e){const t=getComputedStyle(document.documentElement).getPropertyValue(`--bp-${e}`).trim();return parseInt(t,10)}#me(e){const t=e.className.match(/tabs--toggle-mobile--(\w+)/);if(!t)return!1;const s=t[1],i=this.#ge(s);return window.innerWidth<i}#pe(e){return/tabs--toggle-mobile--(\w+)/.test(e.className)}init(){this.#de.forEach((e=>{const t=e.querySelectorAll('[role="tab"]'),s=e.querySelectorAll('[role="tabpanel"]');this.#pe(e)&&this.#me(e)?this.#ce(t,s):this.#he(t[0],t,s),n(e,"click",'[role="tab"]',(i=>{const o=i.target.closest('[role="tab"]');this.#pe(e)&&this.#me(e)?this.#ue(o,t,s):this.#he(o,t,s)})),n(e,"keydown",'[role="tab"]',(i=>{if(!["Enter","Space","ArrowLeft","ArrowRight","Home","End"].includes(i.code))return;const o=i.target.closest('[role="tab"]'),a=Array.from(t).indexOf(o);switch(i.code){case"Enter":case"Space":i.preventDefault(),this.#pe(e)&&this.#me(e)?this.#ue(o,t,s):this.#he(o,t,s);break;case"ArrowLeft":case"ArrowRight":case"Home":case"End":((e,t,s,i)=>{e.preventDefault();let o=t;switch(e.code){case"ArrowLeft":o=t-1<0?s.length-1:t-1;break;case"ArrowRight":o=t+1>=s.length?0:t+1;break;case"Home":o=0;break;case"End":o=s.length-1;break;default:return}i(o)})(i,a,t,(e=>{t[e].focus()}))}})),window.addEventListener("resize",(()=>{this.#pe(e)&&(this.#me(e)?this.#ce(t,s):this.#he(t[0],t,s))}))}))}}class v{#be=(()=>document.querySelector("#audio"))();#ve=(()=>document.querySelector("#play-pause-button"))();#fe=(()=>document.querySelector(".audio-player__progress"))();#ye=(()=>document.querySelector(".audio-player__progress__fill"))();#Le=this.#ye?.querySelector(".audio-player__thumb");#Ee=(()=>document.querySelector(".audio-player__volume"))();#Se=(()=>document.querySelector("#mute-button"))();#xe=(()=>document.querySelector(".audio-player__volume-container"))();#Te=(()=>document.querySelector(".audio-player__volume__fill"))();#Ae=this.#Te?.querySelector(".audio-player__thumb");#we=(()=>document.querySelector(".audio-player__timestamp"))();#ke=!1;#_e=null;#Ce=null;#qe(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e.classList.contains(t)?(e.classList.remove(t),e.classList.add(s)):(e.classList.remove(s),e.classList.add(t))}#De(){this.#ke?this.#be.pause():this.#be.play(),this.#ke=!this.#ke,this.#qe(this.#ve.querySelector("span.icon"),"icon-play","icon-pause")}#Me(){0===this.#be.volume?this.#be.volume=this.#Ce||1:(this.#Ce=this.#be.volume,this.#be.volume=0),this.#Be()}#He=()=>{const e=this.#be.currentTime/this.#be.duration*100;this.#ye.style.width=`${e}%`;const t=Math.floor(this.#be.currentTime/60),s=(Math.floor(this.#be.currentTime-60*t),this.#be.duration-this.#be.currentTime),i=Math.floor(s/60),o=Math.floor(s-60*i);this.#we.innerText=`${i.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`;this.#ye.querySelector(".audio-player__thumb").style.left=`${e}%`};#Ie=e=>{const t=(e.clientX-this.#fe.getBoundingClientRect().left)/this.#fe.offsetWidth*100;this.#be.currentTime=t/100*this.#be.duration};#Oe=e=>{const t=(e.clientX-this.#Ee.getBoundingClientRect().left)/this.#Ee.offsetWidth*100/100;this.#be.volume=Math.min(1,t),this.#Be()};#Be(){const e=100*this.#be.volume;this.#Te.style.width=`${e}%`;this.#Te.querySelector(".audio-player__thumb").style.left=`${e}%`;const t=this.#be.volume<.1,s=this.#Se.querySelector("span.icon");t?(s.classList.remove("icon-volume"),s.classList.add("icon-volume-mute")):(s.classList.remove("icon-volume-mute"),s.classList.add("icon-volume"))}#c(e){if(37===e.keyCode||39===e.keyCode)if(e.currentTarget===this.#fe)this.#be.currentTime+=37===e.keyCode?-5:5,this.#He();else if(e.currentTarget===this.#Ee){let t=this.#be.volume+(37===e.keyCode?-.05:.05);t=Math.max(0,Math.min(1,t)),this.#be.volume=t,this.#Be()}}#$e=(e,t)=>{e.preventDefault(),document.addEventListener("mousemove",this.#Pe),document.addEventListener("mouseup",this.#Ne),this.#_e=t};#Pe=e=>{let t,s;"progress"===this.#_e?(t=this.#fe,s=this.#Ie):(t=this.#Ee,s=this.#Oe);const i=t.getBoundingClientRect(),o=e.clientX-i.left,a=i.right-i.left;if(o>=0&&o<=a){const e=o/a*100;s(new MouseEvent("click",{clientX:o+i.left}));t.querySelector(".audio-player__thumb").style.left=`${e}%`;t.querySelector('[class*="__fill"]').style.width=`${e}%`}};#Ne=()=>{document.removeEventListener("mousemove",this.#Pe),document.removeEventListener("mouseup",this.#Ne)};init(){this.#be&&(this.#Se?.addEventListener("click",(()=>this.#Me())),this.#ve.addEventListener("click",(()=>this.#De())),this.#be.addEventListener("timeupdate",(()=>this.#He())),this.#fe.addEventListener("click",(e=>this.#Ie(e))),this.#Ee?.addEventListener("click",(e=>this.#Oe(e))),this.#fe.addEventListener("keydown",(e=>this.#c(e))),this.#Ee?.addEventListener("keydown",(e=>this.#c(e))),(isNaN(this.#be.volume)||0===this.#be.volume)&&(this.#be.volume=1),this.#Be(),this.#Le?.addEventListener("mousedown",(e=>this.#$e(e,"progress"))),this.#Ae?.addEventListener("mousedown",(e=>this.#$e(e,"volume"))),this.#be.addEventListener("loadedmetadata",(()=>{this.#He()})))}}class f{#Fe=(()=>document.querySelectorAll(".comprehension-checkpoint"))();#Ve=(()=>document.querySelectorAll(".comprehension-checkpoint input"))();#Ke=(()=>document.querySelectorAll(".quiz__response"))();#Re=e=>{const t=e.currentTarget;this.#Ve.forEach((e=>{e!==t&&(e.checked=!1)})),this.#Ke.forEach((e=>{e.classList.remove("shown")}));const s=t.closest("label").nextElementSibling;e.currentTarget.checked&&s.classList.add("shown")};init(){this.#Fe&&this.#Fe.forEach((e=>{e.querySelectorAll("input").forEach((e=>{e.addEventListener("change",(e=>{this.#Re(e)}))}))}))}}class y{#Ue=(()=>document.querySelectorAll(".grid--discipline .backdrop"))();init(){let e,t=(s=1200,window.matchMedia(`(min-width: ${s}px)`)).matches;var s;this.#Ue.forEach((s=>{const i=t=>{t.preventDefault(),e=setTimeout((()=>{s.classList.remove("unfocused"),s.classList.add("focused")}),500)},o=t=>{t.preventDefault(),clearTimeout(e),s.classList.contains("focused")&&(s.classList.remove("focused"),s.classList.add("unfocused"),s.addEventListener("animationend",(()=>{s.classList.remove("unfocused")})))};t?(s.addEventListener("mouseenter",i),s.addEventListener("mouseleave",o)):(s.removeEventListener("mouseenter",i),s.removeEventListener("mouseleave",o))}))}}class L{#Ge=(()=>document.querySelectorAll(".modal"))();#We=(()=>document.querySelectorAll("[data-modal-open]"))();#ze=0;init(){const e=e=>{if(!e)return;this.#ze=window.scrollY,document.querySelector("html").style.setProperty("--scroll-position",`-${this.#ze}px`),document.querySelector("html").classList.add("has-overlay"),e.setAttribute("aria-hidden",!1);const t=document.activeElement,s=e.querySelector(".modal__content"),i=e.querySelector(".modal__content__head");let o;const a=()=>{o=`${s.offsetWidth}px`,i.style.width=o};window.addEventListener("resize",a),a();const n=i.offsetHeight;let l;const r=()=>{const t=e.scrollTop,o=(e=>{let t=0;for(;e;)t+=e.offsetTop,e=e.offsetParent;return t})(s);l=o-t,l<=0?(i.classList.add("sticky","theme-","box-shadow-1"),i.nextElementSibling.style.paddingTop=`${n}px`):(i.classList.remove("sticky","theme-","box-shadow-1"),i.nextElementSibling.style.paddingTop="initial")};if(e.addEventListener("scroll",r),r(),!s)return;s.setAttribute("tabindex",0),s.focus(),s.setAttribute("tabindex",-1),e.classList.contains("modal--scroll-all")&&(e.scrollTop=0);const d=e.querySelectorAll("[data-modal-close]"),c=e=>{s.contains(e.target)||h()},h=()=>{e.setAttribute("aria-hidden",!0),t.focus(),document.querySelector("html").classList.remove("has-overlay"),window.scrollTo({top:this.#ze,behavior:"instant"}),window.removeEventListener("click",c)},u=function(){return[...(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll(["a[href]","button","input","textarea","select","details",'[tabindex]:not([tabindex="-1"])'])].filter((e=>!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")))}(e),g=u[0],m=u[u.length-1];e.addEventListener("keydown",(e=>{switch(e.code){case"Tab":document.activeElement===m&&(e.shiftKey||(e.preventDefault(),g.focus())),document.activeElement===g&&e.shiftKey&&(e.preventDefault(),m.focus()),document.activeElement===s&&e.shiftKey&&(e.preventDefault(),g.focus());break;case"Escape":h()}})),d.forEach((e=>{e.addEventListener("click",h),e.setAttribute("aria-label","Close Modal Window")})),"true"===e.dataset.modalCloseOutside&&window.addEventListener("click",c)};this.#Ge.forEach((e=>{const t=e.querySelector(".modal__content");t.setAttribute("role","dialog"),t.setAttribute("aria-modal",!0),e.setAttribute("aria-hidden",!0)})),this.#We.forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault();const s=t.target.getAttribute("data-modal-open").replace(/#/,""),i=document.getElementById(s);e(i),t.stopPropagation()}))}))}}class E{#je=(()=>document.getElementById("ngss-toggle-switch"))();#Xe=(()=>document.querySelectorAll(".ngss"))();#Ye=(()=>document.getElementById("terms-toggle-switch"))();#Je=(()=>document.querySelectorAll(".term"))();#Qe=(()=>document.querySelector(".glossary-container"))();#Ze=(()=>document.querySelector(".ngss-container"))();#et=(()=>document.querySelectorAll(".reading-toggle__help"))();#tt='\n        <button class="button button--icon-only" data-close-btn>\n            <span class="icon icon-close" aria-hidden="true"></span>\n        </button>\n    ';hideHelpTexts=()=>{this.#et.forEach((e=>{e.classList.add("display-none")}))};showHelpTexts=()=>{this.#et.forEach((e=>{e.classList.remove("display-none")}))};removeOldDetails=e=>{if(!e)return;const t=e.querySelectorAll(".reading-annotation");0!==t.length&&t.forEach((e=>e.remove()))};handleClose=e=>()=>{let t=e.querySelector("[data-close-btn]");t&&t.removeEventListener("click",this.handleClose(e)),this.removeOldDetails(e),this.showHelpTexts()};handleHighlightedClick=(e,t)=>{this.removeOldDetails(t),t.insertAdjacentHTML("beforeend",e),this.hideHelpTexts();let s=t.querySelector("[data-close-btn]");s&&s.addEventListener("click",this.handleClose(t))};handleNGSSClick=e=>{const t=e.target,s=t.getAttribute("data-ngss-cat-abbr")||"NGSS",i=t.getAttribute("data-ngss-cat-full")||"Title not found",o=t.getAttribute("data-ngss-desc")||"Description not found",a=t.getAttribute("data-ngss-standard")||"Standard not found",n=`\n            <article class="reading-annotation ngss-annotation" aria-live="polite" data-ngss-cat-abbr="${s}">\n                <div class="reading-annotation__head">\n                    ${i}\n                    ${this.#tt}\n                </div>\n                <div class="reading-annotation__body">\n                    <p>\n                        ${o}\n                        ${"Standard not found"!==a?`<span class="standard">${a}</span>`:""}\n                    </p>\n                </div>\n            </article>\n        `;this.handleHighlightedClick(n,this.#Ze)};handleTermClick=e=>{const t=e.target,s=t.innerHTML,i=t.getAttribute("data-term-def")||"Definition not found",o=t.getAttribute("data-term-url")||"#1",a=`\n            <article class="reading-annotation glossary-term" aria-live="polite" data-term-definition>\n                <div class="reading-annotation__head">\n                    <h2 class="h6">${s}</h2>\n                    ${this.#tt}\n                </div>\n                <div class="reading-annotation__body">\n                    <p>${i}</p>\n                    <p>\n                        <a class="link-new-window" href="${o}" target="_blank">\n                            View in Glossary\n                        </a>\n                    </p>\n                </div>\n            </article>\n        `;this.handleHighlightedClick(a,this.#Qe)};turnOnNGSS=()=>{this.#Xe.forEach((e=>{e.classList.add("highlighted"),e.setAttribute("tabindex","0"),e.addEventListener("click",this.handleNGSSClick)}))};turnOffNGSS=()=>{this.#je.checked=!1,this.#Xe.forEach((e=>{e.classList.remove("highlighted"),e.setAttribute("tabindex","-1"),e.removeEventListener("click",this.handleNGSSClick)})),this.removeOldDetails(this.#Ze),this.showHelpTexts()};turnOnTerms=()=>{this.#Je.forEach((e=>{e.classList.add("highlighted"),e.setAttribute("tabindex","0"),e.addEventListener("click",this.handleTermClick)}))};turnOffTerms=()=>{this.#Ye.checked=!1,this.#Je.forEach((e=>{e.classList.remove("highlighted"),e.setAttribute("tabindex","-1"),e.removeEventListener("click",this.handleTermClick)})),this.removeOldDetails(this.#Qe),this.showHelpTexts()};init=()=>{this.#Ye&&this.#Ye.addEventListener("change",(e=>{let{target:{checked:t}}=e;t?(this.#je.checked&&this.turnOffNGSS(),this.turnOnTerms()):this.turnOffTerms()})),this.#je&&this.#je.addEventListener("change",(e=>{let{target:{checked:t}}=e;t?(this.#Ye.checked&&this.turnOffTerms(),this.turnOnNGSS()):this.turnOffNGSS()})),(this.#Ye||this.#je)&&window.addEventListener("pageshow",(()=>{this.#Ye.checked=!1,this.#je.checked=!1,this.turnOffNGSS(),this.turnOffTerms(),this.showHelpTexts()}))}}class S{#st=(()=>document.querySelector(".back-to-top"))();#it=(()=>document.querySelector(".back-to-top .button"))();#ot=(()=>document.getElementById("global-footer"))();#at;#nt(){window.scrollTo({top:0,behavior:"smooth"})}#lt(e){const[t]=e;t.isIntersecting?this.#st.classList.remove("fixed"):this.#st.classList.add("fixed")}init(){this.#st&&this.#ot&&(this.#it.addEventListener("click",this.#nt),this.#at=new IntersectionObserver(this.#lt.bind(this)),this.#at.observe(this.#ot))}}document.addEventListener("DOMContentLoaded",(()=>{(new r).init();(new d).init();(new c).init();(new h).init();(new u).init();(new g).init();(new m).init();(new p).init();(new b).init();(new l).init();(new v).init();(new f).init();(new y).init();(new L).init();(new E).init();(new S).init()}))}();