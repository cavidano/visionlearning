!function(){"use strict";let t,e=0,s=document.querySelector("html");const i=function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;s.removeAttribute("style"),s.classList.remove("has-overlay"),s.classList.length||s.removeAttribute("class"),i&&"false"===i.getAttribute("aria-hidden")&&i.setAttribute("aria-hidden",!0),window.scrollTo({top:e,behavior:"instant"}),t.focus()},o=function(){return[...(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll(["a[href]","area","button","details","frame","iframe","input","object","summary","textarea","select",'[tabindex]:not([tabindex="-1"])'])].filter((t=>!t.hasAttribute("disabled")&&!t.getAttribute("aria-hidden")))},n=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,s=o(t),n=s[0],a=s[s.length-1];e.setAttribute("tabindex","-1"),e.focus(),t.addEventListener("keydown",(e=>{switch(e.code){case"Tab":document.activeElement===a&&(e.shiftKey||(e.preventDefault(),n.focus())),document.activeElement===n&&e.shiftKey&&(e.preventDefault(),a.focus());break;case"Escape":i(t)}}))};(new class{#t=document.querySelectorAll(".alert--dismissable");#e='\n    <button class="button button--icon-only">\n        <span class="icon icon-close" aria-label="Close" aria-hidden="true">\n    </button>\n  ';#s=t=>e=>{e.preventDefault(),t.classList.add("dismissed");document.querySelector(".dismissed").addEventListener("animationend",(()=>{t.remove()}))};init(){this.#t.forEach((t=>{t.insertAdjacentHTML("afterbegin",this.#e);t.querySelector("button").addEventListener("click",this.#s(t))}))}}).init();(new class{#i=document.querySelectorAll(".button--icon-only");#o=t=>e=>setTimeout((()=>{t.forEach((t=>{t.classList.remove("tooltip-show")})),e.target.classList.add("tooltip-show")}),300);#n=()=>(t,e)=>{clearTimeout(e),t.target.classList.remove("tooltip-show")};#a(t,e){const s=e.offsetWidth/2,i=t.offsetLeft,o=window.innerWidth-(t.offsetLeft+t.offsetWidth);s>i&&e.classList.add("left"),s>o&&e.classList.add("right")}#r=(t,e)=>{const s=`\n            <span class="button__tooltip">\n                ${e}\n            </span>\n        `;if(e){t.insertAdjacentHTML("beforeend",s);const e=t.querySelector(".button__tooltip");let i;this.#a(t,e),window.addEventListener("resize",(()=>this.#a(t,e))),t.addEventListener("mouseenter",(t=>{i=this.#o(this.#i)(t)})),t.addEventListener("focusin",(t=>{i=this.#o(this.#i)(t)})),t.addEventListener("mouseleave",(t=>{this.#n()(t,i)})),t.addEventListener("focusout",(t=>{this.#n()(t,i)}))}};init(){this.#i.forEach((t=>{const e=t.getAttribute("aria-label");this.#r(t,e)}))}}).init();(new class{#l=document.querySelectorAll("[data-target-toggle]");#d(t,e){t.setAttribute("aria-expanded",!1),e.classList.remove("shown")}#c(t,e,s){t.setAttribute("aria-expanded",!0),e.classList.add("shown"),s&&s.focus()}#h(t,e,s){return i=>{switch(i.code){case"Tab":document.activeElement===s&&i.shiftKey&&(i.preventDefault(),t.focus());break;case"Escape":this.#d(t,e)}}}#u(t,e){const s=t.target.getAttribute("data-target-toggle").replace(/#/,""),i=document.getElementById(s),n=o(i)[0],a=e.getAttribute("aria-expanded");"true"===a?this.#d(e,i):"false"===a&&this.#c(e,i,i.hasAttribute("data-focus-first")?n:null),i.addEventListener("keydown",this.#h(e,i,n))}init(){this.#l.forEach((t=>{t.setAttribute("aria-expanded",!1),t.addEventListener("click",(e=>{if(this.#u(e,t),t.hasAttribute("data-target-close")){const t=e.target.getAttribute("data-target-close").replace(/#/,""),s=document.getElementById(t),i=document.querySelector(`[data-target-toggle="#${t}"]`);this.#d(i,s)}}))}))}}).init();const a=new class{#g=document.querySelectorAll(".form-entry");#m=["is-invalid"];#p=!1;#b(){return""===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)}#v(t){t.closest(".form-entry").classList.add(...this.#m)}#f(t){t.closest(".form-entry").classList.remove(...this.#m)}#L(t){return this.#b(t.value)?(this.#v(t),!0):(this.#f(t),!1)}#y(t){return e=>{e.target.closest(t).classList.add("active")}}#E(t){return e=>{e.target.closest(t).classList.remove("active")}}#S(t,e){this.#p&&e&&this.#L(t),""!==t.value?t.closest(".form-entry").classList.add("has-value"):t.closest(".form-entry").classList.remove("has-value")}#x(t){const e=t.querySelectorAll(["email","input","select","tel","textarea"]);let s=t.hasAttribute("data-required");e.forEach((t=>this.#w(t,s)))}#w(t,e){const s=t.closest(".form-entry").querySelector(".form-entry__field__input");let i=".form-entry";if("INPUT"===t.tagName){const e=t.getAttribute("type");"radio"!==e&&"checkbox"!==e||t.disabled&&t.closest("label").classList.add("disabled")}t.addEventListener("focusin",this.#y(i)),t.addEventListener("focusout",this.#E(i)),e&&(t.setAttribute("required","true"),t.setAttribute("aria-required",!0)),t.addEventListener("change",(()=>this.#S(t,e))),s&&s.addEventListener("click",this.handleClickOnInputText)}handleClickOnInputText(t){let e=t.target.tagName,s=t.target.closest(".form-entry__field__input").querySelector("input");"SPAN"===e&&s.focus()}init(){this.#g.forEach((t=>this.#x(t)))}};a.init();const r=new class{#A=document.querySelectorAll("form[novalidate]");#m=["is-invalid"];#p=!1;#b(){return""===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)}#v(t){t.closest(".form-entry").classList.add(...this.#m)}#f(t){t.closest(".form-entry").classList.remove(...this.#m)}#L(t){return this.#b(t.value)?(this.#v(t),!0):(this.#f(t),!1)}#T(t,e){return null===t&&(t="This field is Required"),`\n            <small class="form-entry__feedback">\n                <span class="icon icon-warn" aria-hidden="true"></span>\n                <span class="message">\n                    <strong>${t}</strong> ${void 0!==e?e:""}\n                </span>\n            </small>\n        `}#k(t,e){t.forEach((t=>{let s=t.closest(".form-entry"),i=s.querySelector(".form-entry__field__label");s.classList.add("is-invalid");const o=s.querySelector(".form-entry__feedback"),n=s.querySelector(".form-entry__help");let a;n&&(a=n.innerHTML.toString());let r=s.getAttribute("data-error-message"),l=[r,a];e.push(l),null===o&&i.insertAdjacentHTML("afterend",this.#T(r,a))}))}#_(t){let e=t.querySelector('[class*="alert"], [class*="invalid"]');if(e){e.hasAttribute("data-alert")&&(e.style.display="block");let t=e.offsetTop-16;window.scrollTo({top:t,behavior:"smooth"})}}#q(t){t.addEventListener("submit",(e=>{e.preventDefault(),this.#p=!0;let s=[],i=t.querySelectorAll("input, select, textarea");i.forEach((t=>{t.addEventListener("input",(()=>this.#L(t)))})),i.forEach((t=>{this.#L(t)}));let o=t.querySelectorAll(":invalid");this.#k(o,s),s.length>0&&e.preventDefault(),this.#_(t)}))}init(){this.#A.forEach((t=>this.#q(t)))}};r.init();(new class{#C=document.querySelectorAll(".file-upload");#D(t){return function(e){const[s]=e.target.files,{name:i,size:o}=s,n=`\n                <span class="file-upload__data">\n                    <span class="file-name">${i}</span>\n                    <span class="file-size">${(o/1e3).toFixed(2)} kb</span>\n                </span>\n            `,a=t.querySelector(".file-upload__data");a&&a.remove(),t.insertAdjacentHTML("beforeend",n)}}dragOver(t){t.target.closest(".form-entry").classList.add("active")}dragOff(t){t.target.closest(".form-entry").classList.remove("active")}dropped(t){t.target.closest(".form-entry").classList.remove("active")}#I(t){t.querySelector('input[type="file"]').addEventListener("change",this.#D(t)),t.addEventListener("dragenter",this.dragOver.bind(this)),t.addEventListener("dragleave",this.dragOff.bind(this)),t.addEventListener("dragend",this.dragOff.bind(this)),t.addEventListener("drop",this.dropped.bind(this))}init(){this.#C.forEach((t=>this.#I(t)))}}).init();const l=new class{#B=document.querySelectorAll("[data-lightbox]");#O='\n    <div class="lightbox__buttons button-group">\n      <button class="button button--icon-only" data-lightbox-previous>\n        <span class="icon icon-arrow-left" aria-label="Previous" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-next>\n        <span class="icon icon-arrow-right" aria-label="Next" aria-hidden="true"></span>\n      </button>\n      <button class="button button--icon-only" data-lightbox-close>\n        <span class="icon icon-close" aria-label="Close" aria-hidden="true"></span>\n      </button>\n    </div>\n    <figure class="lightbox__container" aria-live="polite" aria-atomic="true">\n      <div class="lightbox__media"></div>           \n      <figcaption class="lightbox__caption"></figcaption>\n    </figure>\n  ';#M='\n    <video controls>\n      <source type="video/mp4">\n    </video>\n  ';#H='\n    <iframe\n        frameborder="0"\n        allow="autoplay; fullscreen;"\n        allowfullscreen\n    ></iframe>\n  ';#F='\n    <div class="lightbox__media__loader">\n      <span class="icon icon-loading icon--rotate" aria-hidden="true"></span>\n    </div>\n    <div class="lightbox__media__error" style="display: none;">\n      <span class="icon icon-warn" aria-hidden="true"></span>\n      <p>Failed to load content. Please try again later.</p>\n    </div>\n  ';#N='<img src="https://source.unsplash.com/1600x900" />';#P=[];#$=i=>o=>{document.querySelector(".lightbox")||(o.preventDefault(),this.lightbox=this.#V(),this.currentLB=i,function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t=document.activeElement,e=window.scrollY,s.style.setProperty("--scroll-position",`-${e}px`),s.classList.add("has-overlay"),i&&"true"===i.getAttribute("aria-hidden")&&i.setAttribute("aria-hidden",!1),n(i)}(this.lightbox),this.#U(i))};#K=t=>{t.stopPropagation(),t.target!==t.currentTarget&&"click"===t.type||(i(this.lightbox),this.lightbox.parentElement.removeChild(this.lightbox),window.removeEventListener("keyup",this.#R))};#W=(()=>{var t=this;return function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t.lightbox.querySelector(".lightbox__caption").style.display=e?"block":"none"}})();#G=t=>{if(t.preventDefault(),t.target.hasAttribute("data-lightbox-previous"))this.#z(-1);else{if(!t.target.hasAttribute("data-lightbox-next"))return;this.#z(1)}};#R=t=>{if(t.preventDefault(),!(this.#P.length<=1)||"ArrowLeft"!==t.code&&"ArrowRight"!==t.code)switch(t.code){case"ArrowLeft":this.#z(-1),this.lightbox.querySelector("[data-lightbox-previous]").focus();break;case"ArrowRight":this.#z(1),this.lightbox.querySelector("[data-lightbox-next]").focus();break;case"Escape":this.#K(t);break;default:return}};#z(t){this.currentLB+=t,this.currentLB<0?this.currentLB=this.#P.length-1:this.currentLB>=this.#P.length&&(this.currentLB=0),this.#U(this.currentLB)}#U(t){const e=this.lightbox.querySelector(".lightbox__media"),s=this.lightbox.querySelector(".lightbox__caption");let i;e.innerHTML="";const{lbType:o,lbSrc:n,lbAlt:a,lbCaption:r}=this.#P[t],l=null!==r;switch(this.#W(l),o){case"image":i=this.#j(e,n,a);break;case"video":i=this.#X(e,n)}l&&(s.innerHTML=r)}#j(t,e,s){t.hasAttribute("style")&&t.removeAttribute("style"),t.innerHTML=this.#N;const i=this.#Y();t.appendChild(i);const o=t.querySelector("img");return o.alt=s,o.src=e,this.#J(o,i),o}#X(t,e){const s=/youtube/i.test(e),i=/vimeo/i.test(e);let o;if(s||i)t.innerHTML=this.#H,o=t.querySelector("iframe"),o.src=e;else{t.innerHTML=this.#M;const s=this.#Y();t.appendChild(s),o=t.querySelector("source");const i=t.querySelector("video");i.addEventListener("loadedmetadata",(()=>{let e=i.videoWidth,s=i.videoHeight;t.style.maxWidth=`${e}px`,t.style.aspectRatio=`${e} / ${s}`})),this.#J(o,s),o.src=e}return o}#V(){const t=document.createElement("div");t.classList.add("lightbox"),t.setAttribute("aria-hidden",!0),t.innerHTML=this.#O,document.body.appendChild(t);const e=t.querySelector("[data-lightbox-previous]"),s=t.querySelector("[data-lightbox-next]"),i=t.querySelector("[data-lightbox-close]");return this.#P.length<=1&&(e.setAttribute("disabled",!0),s.setAttribute("disabled",!0),e.style.display="none",s.style.display="none"),t.addEventListener("click",this.#K),i.addEventListener("click",this.#K),e.addEventListener("click",this.#G),s.addEventListener("click",this.#G),window.addEventListener("keyup",this.#R),t}#Q(t){let e=null,s="";null!==t.querySelector("img")&&(e=t.querySelector("img").src||null,s=t.querySelector("img").alt||"");return{lbType:t.getAttribute("data-lightbox")||"image",lbSrc:t.getAttribute("data-lightbox-src")||e,lbCaption:t.getAttribute("data-lightbox-caption")||null,lbAlt:t.getAttribute("data-lightbox-alt")||s}}#Z(){this.#B.forEach((t=>{this.#P.push(this.#Q(t))}))}#Y=()=>{const t=document.createElement("div");return t.className="lightbox__media__loader",t.innerHTML=this.#F,t};#J=(t,e)=>{const s="SOURCE"===t.nodeName?"loadeddata":"load";t.closest("SOURCE"===t.nodeName?"video":"img").addEventListener(s,(()=>{e&&e.parentNode&&e.parentNode.removeChild(e),null!==this.#P[this.currentLB].lbCaption&&this.#W(!0)})),t.onerror=()=>{const s=e.querySelector(".lightbox__media__loader"),i=e.querySelector(".lightbox__media__error");t.style.display="none",this.#W(!1),s.style.display="none",i.style.display="block"}};#tt(){const t=new IntersectionObserver(((t,e)=>{t.forEach((t=>{if(t.isIntersecting){const s=t.target,i=s.dataset.lightboxSrc||s.src;if(!i)return;e.unobserve(s);const o=new Image;o.onload=()=>{document.body.appendChild(o)},o.onerror=()=>{},o.src=i,o.style.display="none",this.#P[Number(s.dataset.index)].hiddenImage=o}}))}),{root:null,rootMargin:"0px",threshold:.1});Array.from(this.#B).filter((t=>"image"===t.getAttribute("data-lightbox"))).forEach(((e,s)=>{const i=e.querySelector("img");i&&(i.dataset.index=s,t.observe(i))}))}#et(){this.#B.forEach(((t,e)=>{t.addEventListener("click",this.#$(e))}))}init(){this.#Z(),this.#et(),this.#tt()}};l.init();(new class{#st=document.querySelectorAll('[data-toggle="dropdown"]');#it(t,e){e.classList.toggle("shown"),t.setAttribute("aria-expanded","true"===t.getAttribute("aria-expanded")?"false":"true")}#ot(t,e){e.classList.remove("shown"),t.setAttribute("aria-expanded","false")}init(){window.addEventListener("click",(t=>{this.#st.forEach((e=>{let s=e.closest("li"),i=e.nextElementSibling;s.contains(t.target)||this.#ot(e,i)}))})),this.#st.forEach((t=>{let e=t.nextElementSibling;e&&(t.setAttribute("aria-expanded","false"),t.setAttribute("aria-haspopup","true"),t.addEventListener("click",(s=>{s.preventDefault(),this.#it(t,e)})))}))}}).init();(new class{#nt=document.querySelectorAll('[class*="table--stack"]');#at=document.querySelectorAll(".table-scroll");#rt(t){const e=t.querySelectorAll("thead th"),s=t.querySelectorAll("tbody tr");let i=[];e.forEach((t=>{if(""!==t.textContent){const e=t.textContent.trim();i.push(e)}})),s.forEach((t=>{t.querySelectorAll("td").forEach(((t,e)=>{t.innerHTML=this.#lt(t.innerHTML),t.setAttribute("data-header",i[e])}))}))}#lt(t){return`\n\t\t\t<div class="td-content">\n\t\t\t\t${t}\n\t\t\t</div>\n\t\t`}#dt(){this.#at.forEach((t=>{let e=t.querySelector(".table-scroll__container"),s=t.offsetWidth;(e.scrollWidth||e.offsetWidth)>s?t.setAttribute("data-scroll",!0):t.setAttribute("data-scroll",!1),e.addEventListener("scroll",(()=>{e.scrollLeft>1?e.setAttribute("data-scrolling",!0):e.setAttribute("data-scrolling",!1)}),{passive:!0})}))}init(){this.#nt.forEach((t=>{this.#rt(t)})),this.#dt(),window.addEventListener("resize",this.#dt.bind(this))}}).init();(new class{#ct=document.querySelectorAll(".tabs");#ht(t,e,s,i){t.preventDefault();let o=e+i;-1===i&&o<0?s[s.length-1].focus():1===i&&o>=s.length?s[0].focus():s[o].focus()}#ut(t,e){t.forEach((t=>{t.setAttribute("aria-selected","false")})),e.forEach((t=>{t.classList.remove("shown"),t.setAttribute("hidden","")}))}activateTab(t,e,s){this.#ut(e,s),t.setAttribute("aria-selected","true");let i=t.getAttribute("aria-controls"),o=document.getElementById(i);o.classList.add("shown"),o.removeAttribute("hidden")}init(){this.#ct.forEach((t=>{const e=t.querySelectorAll('[role="tab"]'),s=t.querySelectorAll('[role="tabpanel"]');e.forEach(((t,i)=>{t.addEventListener("click",(t=>{let i=t.target;this.activateTab(i,e,s)})),t.addEventListener("keydown",(t=>{switch(t.code){case"Home":t.preventDefault(),e[0].focus();break;case"End":t.preventDefault(),e[e.length-1].focus();break;case"ArrowLeft":this.#ht(t,i,e,-1);break;case"ArrowRight":this.#ht(t,i,e,1)}}))}))}))}}).init();const d=new class{#gt=document.querySelectorAll(".accordion");setFocusableElements(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const s=o(t);for(const t of s)!0===e?t.setAttribute("tabindex",0):!1===e&&t.setAttribute("tabindex",-1)}initAccordion(t,e,s,i){t.preventDefault(),t.stopPropagation();for(const t of i)t.classList.remove("show"),t!==s&&(t.classList.remove("shown"),t.previousElementSibling.setAttribute("aria-expanded",!1),t.setAttribute("aria-hidden",!0),this.setFocusableElements(t,!1));s.classList.toggle("shown");let o=e.getAttribute("aria-expanded");"true"===o?(e.setAttribute("aria-expanded",!1),s.setAttribute("aria-hidden",!0),this.setFocusableElements(s,!1)):"false"===o&&(e.setAttribute("aria-expanded",!0),s.setAttribute("aria-hidden",!1),this.setFocusableElements(s,!0));let n=new Event("accTrigger",{bubbles:!0});document.dispatchEvent(n)}init(){this.#gt.forEach((t=>{const e=t.querySelectorAll(':scope > [data-accordion="button"]'),s=t.querySelectorAll(':scope > [data-accordion="panel"]');e.forEach(((t,i)=>{const o=t.nextElementSibling;let n=t.getAttribute("aria-expanded");t.setAttribute("tabindex",0),"true"===n?(o.classList.add("show"),this.setFocusableElements(o,!0)):(t.setAttribute("aria-expanded",!1),o.setAttribute("aria-hidden",!0),this.setFocusableElements(o,!1)),t.addEventListener("click",(e=>{this.initAccordion(e,t,o,s)})),t.addEventListener("keydown",(t=>{const s=s=>{t.preventDefault();let o=i+s;-1===s&&o<0?e[e.length-1].focus():1===s&&o>=e.length?e[0].focus():e[o].focus()};switch(t.code){case"ArrowUp":s(-1);break;case"ArrowDown":s(1)}})),t.addEventListener("keyup",(e=>{"Enter"===e.code&&"BUTTON"!==e.target.tagName&&this.initAccordion(e,t,o,s)}))}))}))}};d.init();const c=new class{#mt=document.querySelector("#audio");#pt=document.querySelector("#play-pause-button");#bt=document.querySelector(".audio-player__progress");#vt=document.querySelector(".audio-player__progress__fill");#ft=this.#vt?.querySelector(".audio-player__thumb");#Lt=document.querySelector(".audio-player__volume");#yt=document.querySelector("#mute-button");#Et=document.querySelector(".audio-player__volume-container");#St=document.querySelector(".audio-player__volume__fill");#xt=this.#St?.querySelector(".audio-player__thumb");#wt=document.querySelector(".audio-player__timestamp");#At=!1;#Tt=null;#kt=null;#_t(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;t.classList.contains(e)?(t.classList.remove(e),t.classList.add(s)):(t.classList.remove(s),t.classList.add(e))}#qt(){this.#At?this.#mt.pause():this.#mt.play(),this.#At=!this.#At,this.#_t(this.#pt.querySelector("span.icon"),"icon-play","icon-pause")}#Ct(){0===this.#mt.volume?this.#mt.volume=this.#kt||1:(this.#kt=this.#mt.volume,this.#mt.volume=0),this.#Dt()}#It=()=>{const t=this.#mt.currentTime/this.#mt.duration*100;this.#vt.style.width=`${t}%`;const e=Math.floor(this.#mt.currentTime/60),s=(Math.floor(this.#mt.currentTime-60*e),this.#mt.duration-this.#mt.currentTime),i=Math.floor(s/60),o=Math.floor(s-60*i);this.#wt.innerText=`${i.toString().padStart(2,"0")}:${o.toString().padStart(2,"0")}`;this.#vt.querySelector(".audio-player__thumb").style.left=`${t}%`};#Bt=t=>{const e=(t.clientX-this.#bt.getBoundingClientRect().left)/this.#bt.offsetWidth*100;this.#mt.currentTime=e/100*this.#mt.duration};#Ot=t=>{const e=(t.clientX-this.#Lt.getBoundingClientRect().left)/this.#Lt.offsetWidth*100/100;this.#mt.volume=Math.min(1,e),this.#Dt()};#Dt(){const t=100*this.#mt.volume;this.#St.style.width=`${t}%`;this.#St.querySelector(".audio-player__thumb").style.left=`${t}%`;const e=this.#mt.volume<.1,s=this.#yt.querySelector("span.icon");e?(s.classList.remove("icon-volume"),s.classList.add("icon-volume-mute")):(s.classList.remove("icon-volume-mute"),s.classList.add("icon-volume"))}#h(t){if(37===t.keyCode||39===t.keyCode)if(t.currentTarget===this.#bt)this.#mt.currentTime+=37===t.keyCode?-5:5,this.#It();else if(t.currentTarget===this.#Lt){let e=this.#mt.volume+(37===t.keyCode?-.05:.05);e=Math.max(0,Math.min(1,e)),this.#mt.volume=e,this.#Dt()}}#Mt=(t,e)=>{t.preventDefault(),document.addEventListener("mousemove",this.#Ht),document.addEventListener("mouseup",this.#Ft),this.#Tt=e};#Ht=t=>{let e,s;"progress"===this.#Tt?(e=this.#bt,s=this.#Bt):(e=this.#Lt,s=this.#Ot);const i=e.getBoundingClientRect(),o=t.clientX-i.left,n=i.right-i.left;if(o>=0&&o<=n){const t=o/n*100;s(new MouseEvent("click",{clientX:o+i.left}));e.querySelector(".audio-player__thumb").style.left=`${t}%`;e.querySelector('[class*="__fill"]').style.width=`${t}%`}};#Ft=()=>{document.removeEventListener("mousemove",this.#Ht),document.removeEventListener("mouseup",this.#Ft)};init(){this.#mt&&(this.#yt?.addEventListener("click",(()=>this.#Ct())),this.#pt.addEventListener("click",(()=>this.#qt())),this.#mt.addEventListener("timeupdate",(()=>this.#It())),this.#bt.addEventListener("click",(t=>this.#Bt(t))),this.#Lt?.addEventListener("click",(t=>this.#Ot(t))),this.#bt.addEventListener("keydown",(t=>this.#h(t))),this.#Lt?.addEventListener("keydown",(t=>this.#h(t))),(isNaN(this.#mt.volume)||0===this.#mt.volume)&&(this.#mt.volume=1),this.#Dt(),this.#ft?.addEventListener("mousedown",(t=>this.#Mt(t,"progress"))),this.#xt?.addEventListener("mousedown",(t=>this.#Mt(t,"volume"))),this.#mt.addEventListener("loadedmetadata",(()=>{this.#It()})))}};c.init();(new class{#Nt=document.querySelectorAll(".anchor-nav > ul > li > a");#Pt=document.querySelectorAll("section");#$t;#Vt;#Ut(t){t.forEach((t=>{if(t.isIntersecting){const e=t.target.id;this.#Nt.forEach((t=>{t.getAttribute("href").split("#")[1]===e?t.setAttribute("aria-selected","true"):t.setAttribute("aria-selected","false")}))}}))}init(){if(this.#Nt.length>0&&this.#Pt.length>0){this.#Vt=this.#Pt[0].offsetTop,this.#Nt.forEach((t=>{const e=t.getAttribute("href").split("#")[1];t.addEventListener("click",(t=>{t.preventDefault();document.querySelector(`#${e}`).scrollIntoView({behavior:"instant"})}))}));const t={root:null,rootMargin:"0px",threshold:.5};this.#$t=new IntersectionObserver(this.#Ut.bind(this),t),this.#Pt.forEach((t=>{this.#$t.observe(t)})),window.addEventListener("scroll",(()=>{window.scrollY<this.#Vt&&this.#Nt.forEach((t=>{t.getAttribute("href").split("#")[1]===this.#Pt[0].id?t.setAttribute("aria-selected","true"):t.setAttribute("aria-selected","false")}))}))}}}).init();(new class{#Kt=document.querySelectorAll(".comprehension-checkpoint");#Rt=document.querySelectorAll(".comprehension-checkpoint input");#Wt=document.querySelectorAll(".quiz__response");#Gt=t=>{const e=t.currentTarget;this.#Rt.forEach((t=>{t!==e&&(t.checked=!1)})),this.#Wt.forEach((t=>{t.classList.remove("shown")}));const s=e.closest("label").nextElementSibling;t.currentTarget.checked&&s.classList.add("shown")};init(){this.#Kt&&this.#Kt.forEach((t=>{t.querySelectorAll("input").forEach((t=>{t.addEventListener("change",(t=>{this.#Gt(t)}))}))}))}}).init();(new class{#zt=document.querySelectorAll(".grid--discipline .backdrop");init(){let t,e=(s=1200,window.matchMedia(`(min-width: ${s}px)`)).matches;var s;this.#zt.forEach((s=>{const i=e=>{e.preventDefault(),t=setTimeout((()=>{s.classList.remove("unfocused"),s.classList.add("focused")}),500)},o=e=>{e.preventDefault(),clearTimeout(t),s.classList.contains("focused")&&(s.classList.remove("focused"),s.classList.add("unfocused"),s.addEventListener("animationend",(()=>{s.classList.remove("unfocused")})))};e?(s.addEventListener("mouseenter",i),s.addEventListener("mouseleave",o)):(s.removeEventListener("mouseenter",i),s.removeEventListener("mouseleave",o))}))}}).init();const h=new class{#jt=document.querySelectorAll(".modal");#Xt=document.querySelectorAll("[data-modal-open]");#Yt=0;init(){const t=t=>{if(!t)return;this.#Yt=window.scrollY,document.querySelector("html").style.setProperty("--scroll-position",`-${this.#Yt}px`),document.querySelector("html").classList.add("has-overlay"),t.setAttribute("aria-hidden",!1);const e=document.activeElement,s=t.querySelector(".modal__content"),i=t.querySelector(".modal__content__head");let o;const n=()=>{o=`${s.offsetWidth}px`,i.style.width=o};window.addEventListener("resize",n),n();const a=i.offsetHeight;let r;const l=()=>{const e=t.scrollTop,o=(t=>{let e=0;for(;t;)e+=t.offsetTop,t=t.offsetParent;return e})(s);r=o-e,r<=0?(i.classList.add("sticky","theme-","box-shadow-1"),i.nextElementSibling.style.paddingTop=`${a}px`):(i.classList.remove("sticky","theme-","box-shadow-1"),i.nextElementSibling.style.paddingTop="initial")};if(t.addEventListener("scroll",l),l(),!s)return;s.setAttribute("tabindex",0),s.focus(),s.setAttribute("tabindex",-1),t.classList.contains("modal--scroll-all")&&(t.scrollTop=0);const d=t.querySelectorAll("[data-modal-close]"),c=t=>{s.contains(t.target)||h()},h=()=>{t.setAttribute("aria-hidden",!0),e.focus(),document.querySelector("html").classList.remove("has-overlay"),window.scrollTo({top:this.#Yt,behavior:"instant"}),window.removeEventListener("click",c)},u=function(){return[...(arguments.length>0&&void 0!==arguments[0]?arguments[0]:document).querySelectorAll(["a[href]","button","input","textarea","select","details",'[tabindex]:not([tabindex="-1"])'])].filter((t=>!t.hasAttribute("disabled")&&!t.getAttribute("aria-hidden")))}(t),g=u[0],m=u[u.length-1];t.addEventListener("keydown",(t=>{switch(t.code){case"Tab":document.activeElement===m&&(t.shiftKey||(t.preventDefault(),g.focus())),document.activeElement===g&&t.shiftKey&&(t.preventDefault(),m.focus()),document.activeElement===s&&t.shiftKey&&(t.preventDefault(),g.focus());break;case"Escape":h()}})),d.forEach((t=>{t.addEventListener("click",h),t.setAttribute("aria-label","Close Modal Window")})),"true"===t.dataset.modalCloseOutside&&window.addEventListener("click",c)};this.#jt.forEach((t=>{const e=t.querySelector(".modal__content");e.setAttribute("role","dialog"),e.setAttribute("aria-modal",!0),t.setAttribute("aria-hidden",!0)})),this.#Xt.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const s=e.target.getAttribute("data-modal-open").replace(/#/,""),i=document.getElementById(s);t(i),e.stopPropagation()}))}))}};h.init();(new class{#Jt=document.getElementById("ngss-toggle-switch");#Qt=document.querySelectorAll(".ngss");#Zt=document.getElementById("terms-toggle-switch");#te=document.querySelectorAll(".term");#ee=document.querySelector(".reading-annotation-container");#se=document.querySelectorAll(".reading-toggle__help");#ie='\n\t\t<button class="button button--icon-only" data-close-btn>\n\t\t\t<span class="icon icon-close" aria-hidden="true"></span>\n\t\t</button>\n  ';hideHelpTexts=()=>{this.#se.forEach((t=>{t.classList.add("display-none--lg")}))};showHelpTexts=()=>{this.#se.forEach((t=>{t.classList.remove("display-none--lg")}))};removeOldDetails=()=>{let t=document.querySelectorAll(".reading-annotation");t.length&&t.forEach((t=>{t.remove()}))};handleClose=()=>{let t=document.querySelector("[data-close-btn]");t&&t.removeEventListener("click",this.handleClose),this.removeOldDetails(),this.showHelpTexts()};handleHighlightedClick=t=>{this.removeOldDetails(),this.#ee.insertAdjacentHTML("beforeend",t),this.hideHelpTexts();let e=document.querySelector("[data-close-btn]");e&&e.addEventListener("click",this.handleClose)};handleNGSSClick=t=>{const e=t.target,s=e.getAttribute("data-ngss-cat-abbr")||"NGSS",i=e.getAttribute("data-ngss-cat-full")||"Title not found",o=e.getAttribute("data-ngss-desc")||"Description not found",n=e.getAttribute("data-ngss-standard")||"Standard not found",a=`\n\t\t\t<article class="reading-annotation ngss-annotation" aria-live="polite" data-ngss-cat-abbr="${s}">\n\t\t\t\t<div class="reading-annotation__head">\n\t\t\t\t\t${i}\n\t\t\t\t\t${this.#ie}\n\t\t\t\t</div>\n\t\t\t\t<div class="reading-annotation__body">\n\t\t\t\t\t<p>\n\t\t\t\t\t\t${o}\n\t\t\t\t\t\t${"Standard not found"!==n?`<span class="standard">${n}</span>`:""}\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</article>\n\t\t`;this.handleHighlightedClick(a)};handleTermClick=t=>{const e=t.target,s=e.innerHTML,i=e.getAttribute("data-term-def")||"Title not found",o=e.getAttribute("data-term-url")||"#1",n=`\n\t\t\t<article class="reading-annotation glossary-term" data-term-definition aria-polite="live">\n\t\t\t\t<div class="reading-annotation__head">\n\t\t\t\t\t<h2 class="h6">${s}</h2>\n\t\t\t\t\t${this.#ie}\n\t\t\t\t</div>\n\t\t\t\t<div class="reading-annotation__body">\n\t\t\t\t\t<p>${i}</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<a class="link-new-window" href="${o}" target="_blank">\n\t\t\t\t\t\t\tView in Glossary\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</article>\n\t\t`;this.handleHighlightedClick(n)};turnOnNGSS=()=>{this.#Qt.forEach((t=>{t.classList.add("highlighted"),t.setAttribute("tabindex","0"),t.addEventListener("click",this.handleNGSSClick)}))};turnOffNGSS=()=>{this.#Jt.checked=!1,this.#Qt.forEach((t=>{t.classList.remove("highlighted"),t.setAttribute("tabindex","-1"),t.removeEventListener("click",this.handleNGSSClick)}));const t=document.querySelector(".ngss-annotation");t&&(t.parentNode.removeChild(t),this.showHelpTexts())};turnOnTerms=()=>{this.#te.forEach((t=>{t.classList.add("highlighted"),t.setAttribute("tabindex","0"),t.addEventListener("click",this.handleTermClick)}))};turnOffTerms=()=>{this.#Zt.checked=!1,this.#te.forEach((t=>{t.classList.remove("highlighted"),t.setAttribute("tabindex","-1"),t.removeEventListener("click",this.handleTermClick)}));const t=document.querySelector(".glossary-term");t&&(t.parentNode.removeChild(t),this.showHelpTexts())};init=()=>{this.#Zt&&this.#Zt.addEventListener("change",(t=>{let{target:{checked:e}}=t;e?(this.#Jt.checked&&this.turnOffNGSS(),this.turnOnTerms()):this.turnOffTerms()})),this.#Jt&&this.#Jt.addEventListener("change",(t=>{let{target:{checked:e}}=t;e?(this.#Zt.checked&&this.turnOffTerms(),this.turnOnNGSS()):this.turnOffNGSS()})),(this.#Zt||this.#Jt)&&window.addEventListener("pageshow",(()=>{this.#Zt.checked=!1,this.#Jt.checked=!1,this.turnOffNGSS(),this.turnOffTerms(),this.showHelpTexts()}))}}).init();(new class{#oe=document.querySelector(".back-to-top");#ne=document.querySelector(".back-to-top .button");#ae=document.getElementById("global-footer");#re;#le(){window.scrollTo({top:0,behavior:"smooth"})}#de(t){const[e]=t;e.isIntersecting?this.#oe.classList.remove("fixed"):this.#oe.classList.add("fixed")}init(){this.#oe&&this.#ae&&(this.#ne.addEventListener("click",this.#le),this.#re=new IntersectionObserver(this.#de.bind(this)),this.#re.observe(this.#ae))}}).init()}();