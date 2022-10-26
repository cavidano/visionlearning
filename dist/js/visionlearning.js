!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function n(e,t){var n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t);return function(e,t){return t.get?t.get.call(e):t.value}(e,n)}var r=new WeakMap,a=new WeakMap,i=function(){function i(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),t(this,r,{writable:!0,value:document.querySelectorAll(".alert--dismissable")}),t(this,a,{writable:!0,value:'\n        <button class="button button--icon-only">\n            <span class="icon icon-close" aria-label="Close" aria-hidden="true">\n        </button>\n    '})}var o,c;return o=i,(c=[{key:"init",value:function(){var e=this;n(this,r).forEach((function(t){t.insertAdjacentHTML("afterbegin",n(e,a)),t.querySelector("button").addEventListener("click",(function(e){e.preventDefault(),t.classList.add("dismissed"),document.querySelector(".dismissed").addEventListener("animationend",(function(){t.remove()}))}))}))}}])&&e(o.prototype,c),Object.defineProperty(o,"prototype",{writable:!1}),i}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){var n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t);return function(e,t){return t.get?t.get.call(e):t.value}(e,n)}var l=new WeakMap,s=function(){function e(){var t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,n=l,r={writable:!0,value:document.querySelectorAll(".button--icon-only")},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,n),n.set(t,r)}var t,n;return t=e,(n=[{key:"init",value:function(){var e,t=this,n=function(n){e=setTimeout((function(){c(t,l).forEach((function(e){e.classList.remove("tooltip-show")})),n.target.classList.add("tooltip-show")}),300)},r=function(t){clearTimeout(e),t.target.classList.remove("tooltip-show")};c(this,l).forEach((function(e){var t=e.getAttribute("aria-label"),a='\n                <span class="button__tooltip">\n                    '.concat(t,"\n                </span>\n            ");if(t){e.insertAdjacentHTML("beforeend",a);var i=e.querySelector(".button__tooltip"),o=function(){var t=i.offsetWidth/2,n=e.offsetLeft,r=window.innerWidth-(e.offsetLeft+e.offsetWidth);t>n&&i.classList.add("left"),t>r&&i.classList.add("right")};o(),window.addEventListener("resize",o),e.addEventListener("mouseenter",n),e.addEventListener("focusin",n),e.addEventListener("mouseleave",r),e.addEventListener("focusout",r)}}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=new WeakMap,h=function(){function e(){var t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,n=v,r={writable:!0,value:document.querySelectorAll("[data-target-toggle]")},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,n),n.set(t,r)}var t,n;return t=e,n=[{key:"init",value:function(){var e,t,n;(e=this,t=v,n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t),function(e,t){return t.get?t.get.call(e):t.value}(e,n)).forEach((function(e){e.setAttribute("aria-expanded",!1),e.addEventListener("click",(function(t){var n,r=t.target.getAttribute("data-target-toggle").replace(/#/,""),a=document.getElementById(r),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=["a[href]","button","input","textarea","select","details",'[tabindex]:not([tabindex="-1"])'];return u(e.querySelectorAll(t)).filter((function(e){return!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")}))}(a),o=i[0],c=e.getAttribute("aria-expanded"),l=function(e,t){e.setAttribute("aria-expanded",!1),t.classList.remove("shown")};if("true"===c?l(e,a):"false"===c&&(n=a,e.setAttribute("aria-expanded",!0),n.classList.add("shown"),a.hasAttribute("data-focus-first")&&o.focus()),a.addEventListener("keydown",(function(t){switch(t.code){case"Tab":document.activeElement===o&&t.shiftKey&&(t.preventDefault(),e.focus());break;case"Escape":l(e,a)}})),e.hasAttribute("data-target-close")){var s=t.target.getAttribute("data-target-close").replace(/#/,""),d=document.getElementById(s),f=document.querySelector('[data-target-toggle="#'.concat(s,'"]'));console.log("Close target ID: ".concat(f)),l(f,d)}}))}))}}],n&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function m(e,t){var n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t);return function(e,t){return t.get?t.get.call(e):t.value}(e,n)}var g=new WeakMap,w=new WeakMap,E=new WeakMap,A=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,g,{writable:!0,value:document.querySelectorAll("form[novalidate]")}),y(this,w,{writable:!0,value:document.querySelectorAll(".form-entry")}),y(this,E,{writable:!0,value:document.querySelectorAll(".file-upload")})}var t,n;return t=e,n=[{key:"init",value:function(){var e=!1,t=["is-invalid"];m(this,g).forEach((function(t){t.addEventListener("submit",(function(n){n.preventDefault(),e=!0;var r=[];t.querySelectorAll(":invalid").forEach((function(e){var t=e.closest(".form-entry"),n=t.querySelector(".form-entry__field__label");t.classList.add("is-invalid");var a,i=t.querySelector(".form-entry__feedback"),o=t.querySelector(".form-entry__help");o&&(a=o.innerHTML.toString());var c,l,s=t.getAttribute("data-error-message"),u=[s,a];r.push(u),null===i&&n.insertAdjacentHTML("afterend",(l=a,null===(c=s)&&(c="This field is Required"),'\n                <div class="form-entry__feedback">\n                    <small>\n                        <span class="icon icon-warn" aria-hidden="true"></span>\n                        <span class="message">\n                            <strong>'.concat(c,"</strong> ").concat(void 0!==l?l:"","\n                        </span>\n                    </small>\n                </div>\n            ")))})),r.length>0&&n.preventDefault();var a=t.querySelector('[class*="alert"], [class*="invalid"]');if(a){a.hasAttribute("data-alert")&&(a.style.display="block");var i=a.offsetTop-16;window.scrollTo({top:i,behavior:"smooth"})}}))})),m(this,w).forEach((function(n){var r,a=n.querySelectorAll(["input","select","textarea"]);r=!!n.hasAttribute("data-required"),a.forEach((function(a){var i=n.querySelector(".form-entry__field__input"),o=a.tagName,c=".form-entry";if("INPUT"===o){var l=a.getAttribute("type");"radio"!==l&&"checkbox"!==l||(c="label",a.disabled&&a.closest("label").classList.add("disabled"))}a.addEventListener("focusin",(function(){this.closest(c).classList.add("active")})),a.addEventListener("focusout",(function(){this.closest(c).classList.remove("active")})),!0===r&&(a.setAttribute("required","true"),a.setAttribute("aria-required",!0)),a.addEventListener("change",(function(){var n;console.log("My value is",a.value),!0===e&&!0===r&&(function(){return""===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:null)}((n=a).value)?function(e){var n;(n=e.closest(".form-entry").classList).add.apply(n,t)}(n):function(e){var n;(n=e.closest(".form-entry").classList).remove.apply(n,t)}(n)),""!==a.value?a.closest(".form-entry").classList.add("has-value"):a.closest(".form-entry").classList.remove("has-value")})),i&&i.addEventListener("click",(function(e){var t=e.target.tagName,n=e.target.closest(".form-entry__field__input").querySelector("input");"SPAN"===t&&(console.log(e.target.nextSibling),n.focus())}))}))})),m(this,E).forEach((function(e){e.querySelector('input[type="file"]').addEventListener("change",(function(t){var n,r,a=(n=t.target.files,r=1,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return i}}(n,r)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],i=a.name,o=(a.size/1e3).toFixed(2),c='\n                    <span class="file-upload__data">\n                        <span class="file-name">'.concat(i,'</span>\n                        <span class="file-size">').concat(o," kb</span>\n                    </span>\n                "),l=e.querySelector(".file-upload__data");l&&l.remove(),e.insertAdjacentHTML("beforeend",c)}));var t=function(){e.closest(".form-entry").classList.remove("active")};e.addEventListener("dragenter",(function(){e.closest(".form-entry").classList.add("active")})),e.addEventListener("dragleave",t),e.addEventListener("dragend",t),e.addEventListener("drop",(function(){e.closest(".form-entry").classList.remove("active")}))}))}}],n&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=new WeakMap,S=function(){function e(){var t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,n=k,r={writable:!0,value:document.querySelectorAll('[data-toggle="dropdown"]')},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,n),n.set(t,r)}var t,n;return t=e,(n=[{key:"init",value:function(){var e,t,n;(e=this,t=k,n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t),function(e,t){return t.get?t.get.call(e):t.value}(e,n)).forEach((function(e){var t=e.closest("li"),n=e.nextElementSibling;e.setAttribute("aria-expanded",!1),e.setAttribute("aria-haspopup",!0),e.addEventListener("click",(function(t){t.preventDefault(),n.classList.toggle("shown");var r=e.getAttribute("aria-expanded");"true"===r?e.setAttribute("aria-expanded",!1):"false"===r&&e.setAttribute("aria-expanded",!0)})),window.addEventListener("click",(function(r){t.contains(r.target)||(n.classList.remove("shown"),e.setAttribute("aria-expanded",!1))}))}))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function _(e,t){var n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t);return function(e,t){return t.get?t.get.call(e):t.value}(e,n)}var x=new WeakMap,j=new WeakMap,M=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),q(this,x,{writable:!0,value:document.querySelectorAll('[class*="table--stack"]')}),q(this,j,{writable:!0,value:document.querySelectorAll(".table-scroll")})}var t,n;return t=e,(n=[{key:"init",value:function(){var e=this;_(this,x).forEach((function(e){var t=e.querySelectorAll("thead th"),n=e.querySelectorAll("tbody tr"),r=[];t.forEach((function(e){if(""!==e.textContent){var t=e.textContent.trim();r.push(t)}})),n.forEach((function(e){e.querySelectorAll("td").forEach((function(e,t){var n=e.innerHTML,a='\n                        <div class="td-content">\n                            '.concat(n,"\n                        </div>\n                    ");e.innerHTML=a,e.setAttribute("data-before",r[t])}))}))}));var t=function(){_(e,j).forEach((function(e){var t=e.querySelector(".table-scroll__container"),n=e.offsetWidth;t.scrollWidth>n?e.setAttribute("data-scroll",!0):e.setAttribute("data-scroll",!1),t.addEventListener("scroll",(function(){t.scrollLeft>1?t.setAttribute("data-scrolling",!0):t.setAttribute("data-scrolling",!1)}),{passive:!0})}))};t(),window.addEventListener("resize",t)}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=new WeakMap,P=function(){function e(){var t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,n=O,r={writable:!0,value:document.querySelectorAll(".tabs")},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,n),n.set(t,r)}var t,n;return t=e,(n=[{key:"init",value:function(){var e,t,n;(e=this,t=O,n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t),function(e,t){return t.get?t.get.call(e):t.value}(e,n)).forEach((function(e){var t=e.querySelectorAll('[role="tab"]'),n=e.querySelectorAll('[role="tabpanel"]');t.forEach((function(e,r){e.addEventListener("click",(function(e){!function(e){t.forEach((function(e){e.setAttribute("aria-selected","false")})),n.forEach((function(e){e.classList.remove("shown"),e.setAttribute("hidden","")})),e.setAttribute("aria-selected","true");var r=e.getAttribute("aria-controls"),a=document.getElementById(r);a.classList.add("shown"),a.removeAttribute("hidden")}(e.target)})),e.addEventListener("keydown",(function(e){var n=function(n){e.preventDefault();var a=r+n;-1===n&&a<0?t[t.length-1].focus():1===n&&a>=t.length?t[0].focus():t[a].focus()};switch(e.code){case"Home":!function(e){e.preventDefault(),t[0].focus()}(e);break;case"End":!function(e){e.preventDefault(),t[t.length-1].focus()}(e);break;case"ArrowLeft":n(-1);break;case"ArrowRight":n(1)}}))}))}))}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=new WeakMap,I=function(){function e(){var t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,n=z,r={writable:!0,value:document.querySelectorAll(".grid--discipline .backdrop")},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,n),n.set(t,r)}var t,n;return t=e,(n=[{key:"init",value:function(){var e,t,n,r,a,i=window.matchMedia("(min-width: 1200px)");function o(){i.matches?(console.log("Media Query Matched!"),e=!0):(console.log("Media Query not Matched!"),e=!1)}i.addEventListener("change",o),o(),(n=this,r=z,a=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(n,r),function(e,t){return t.get?t.get.call(e):t.value}(n,a)).forEach((function(n){var r=function(e){e.preventDefault(),t=setTimeout((function(){n.classList.remove("unfocused"),n.classList.add("focused")}),500)},a=function(e){e.preventDefault(),clearTimeout(t),n.classList.contains("focused")&&(n.classList.remove("focused"),n.classList.add("unfocused"),n.addEventListener("animationend",(function(){n.classList.remove("unfocused")})))};e?(n.addEventListener("mouseenter",r),n.addEventListener("mouseleave",a)):(n.removeEventListener("mouseenter",r),n.removeEventListener("mouseleave",a))}))}}])&&W(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e){return function(e){if(Array.isArray(e))return H(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=["a[href]","button","input","textarea","select","details",'[tabindex]:not([tabindex="-1"])'];return D(e.querySelectorAll(t)).filter((function(e){return!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")}))};function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function R(e,t){var n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t);return function(e,t){return t.get?t.get.call(e):t.value}(e,n)}var K=new WeakMap,$=new WeakMap,G=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),N(this,K,{writable:!0,value:document.querySelectorAll(".modal")}),N(this,$,{writable:!0,value:document.querySelectorAll("[data-modal-open]")})}var t,n;return t=e,(n=[{key:"init",value:function(){R(this,K).forEach((function(e){var t=e.querySelector(".modal__content");t.setAttribute("role","dialog"),t.setAttribute("aria-modal",!0),e.setAttribute("aria-hidden",!0)})),R(this,$).forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.getAttribute("data-modal-open").replace(/#/,"");!function(e){document.querySelector("body").classList.add("modal-open"),e.setAttribute("aria-hidden",!1);var t,n=document.activeElement,r=e.querySelector(".modal__content"),a=e.querySelector(".modal__content__head"),i=function(){t="".concat(r.offsetWidth,"px"),a.style.width=t};window.addEventListener("resize",i),i();var o=a.offsetHeight,c=function(){var t=e.scrollTop;(function(e){for(var t=0;e;)t+=e.offsetTop,e=e.offsetParent;return t})(r)-t<=0?(a.classList.add("sticky","theme-primary","box-shadow-1"),a.nextElementSibling.style.paddingTop="".concat(o,"px")):(a.classList.remove("sticky","theme-primary","box-shadow-1"),a.nextElementSibling.style.paddingTop="initial")};e.addEventListener("scroll",c),c(),r.setAttribute("tabindex",0),r.focus(),r.setAttribute("tabindex",-1),e.classList.contains("modal--scroll-all")&&(e.scrollTop=0);var l=e.querySelectorAll("[data-modal-close]"),s=function(e){r.contains(e.target)||u()},u=function(){e.setAttribute("aria-hidden",!0),n.focus(),document.querySelector("body").classList.remove("modal-open"),window.removeEventListener("click",s)},d=B(e),f=d[0],v=d[d.length-1];e.addEventListener("keydown",(function(e){switch(e.code){case"Tab":document.activeElement===v&&(e.shiftKey||(e.preventDefault(),f.focus())),document.activeElement===f&&e.shiftKey&&(e.preventDefault(),v.focus()),document.activeElement===r&&e.shiftKey&&(e.preventDefault(),f.focus());break;case"Escape":u()}})),l.forEach((function(e){e.addEventListener("click",u),e.setAttribute("aria-label","Close Modal Window")})),"true"===e.dataset.modalCloseOutside&&window.addEventListener("click",s)}(document.getElementById(t)),e.stopPropagation()}))}))}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Q(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(c)throw i}}}}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var J=new WeakMap,X=function(){function e(){var t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,n=J,r={writable:!0,value:document.querySelectorAll(".accordion")},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,n),n.set(t,r)}var t,n;return t=e,n=[{key:"init",value:function(){var e,t,n;(e=this,t=J,n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t),function(e,t){return t.get?t.get.call(e):t.value}(e,n)).forEach((function(e){var t=e.querySelectorAll(':scope > [data-accordion="button"]'),n=e.querySelectorAll(':scope > [data-accordion="panel"]'),r=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=B(t),a=Q(r);try{for(a.s();!(e=a.n()).done;){var i=e.value;!0===n?i.setAttribute("tabindex",0):!1===n&&i.setAttribute("tabindex",-1)}}catch(e){a.e(e)}finally{a.f()}};t.forEach((function(e,a){var i=e.nextElementSibling,o=e.getAttribute("aria-expanded");e.setAttribute("tabindex",0),"true"===o?(i.classList.add("show"),r(i,!0)):(e.setAttribute("aria-expanded",!1),i.setAttribute("aria-hidden",!0),r(i,!1));var c=function(t){t.preventDefault(),t.stopPropagation();var a,c=Q(n);try{for(c.s();!(a=c.n()).done;){var l=a.value;l.classList.remove("show"),l!==i&&(l.classList.remove("shown"),l.style.maxHeight=null,l.previousElementSibling.setAttribute("aria-expanded",!1),l.setAttribute("aria-hidden",!0),r(l,!1))}}catch(e){c.e(e)}finally{c.f()}i.classList.toggle("shown"),"true"===(o=e.getAttribute("aria-expanded"))?(e.setAttribute("aria-expanded",!1),i.setAttribute("aria-hidden",!0),r(i,!1)):"false"===o&&(e.setAttribute("aria-expanded",!0),i.setAttribute("aria-hidden",!1),r(i,!0));var s=new Event("accTrigger",{bubbles:!0});document.dispatchEvent(s)};e.addEventListener("click",(function(e){c(e)})),e.addEventListener("keydown",(function(e){var n=function(n){e.preventDefault();var r=a+n;-1===n&&r<0?t[t.length-1].focus():1===n&&r>=t.length?t[0].focus():t[r].focus()};switch(e.code){case"ArrowUp":n(-1);break;case"ArrowDown":n(1)}})),e.addEventListener("keyup",(function(e){"Enter"===e.code&&"BUTTON"!==e.target.tagName&&c(e)}))}))}))}}],n&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ee(e,t,n){return t&&Z(e.prototype,t),n&&Z(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function ne(e,t){var n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t);return function(e,t){return t.get?t.get.call(e):t.value}(e,n)}var re=new WeakMap,ae=function(){function e(){Y(this,e),te(this,re,{writable:!0,value:document.querySelectorAll(".quiz")})}return ee(e,[{key:"init",value:function(){ne(this,re)&&ne(this,re).forEach((function(e){e.querySelector('button[type="submit"]').addEventListener("click",(function(t){t.preventDefault();var n=e.querySelector(".quiz__questions").querySelectorAll("li.form-entry"),r=e.querySelectorAll(".quiz__response"),a=e.querySelector(".quiz__score");if(r.forEach((function(e){e.classList.remove("display-block")})),n.forEach((function(e){var t=e.querySelector(".form-entry__option").querySelector("input:checked");t&&t.closest("label").nextElementSibling.classList.add("display-block")})),a){a.style.display="block";var i=a.offsetTop-16;window.scrollTo({top:i,behavior:"smooth"})}}))}))}}]),e}(),ie=new WeakMap,oe=new WeakMap,ce=new WeakMap,le=new WeakMap,se=function(){function e(){var t=this;Y(this,e),te(this,ie,{writable:!0,value:document.querySelectorAll(".comprehension-checkpoint")}),te(this,oe,{writable:!0,value:document.querySelectorAll(".comprehension-checkpoint input")}),te(this,ce,{writable:!0,value:document.querySelectorAll(".quiz__response")}),te(this,le,{writable:!0,value:function(e){var n=e.currentTarget;ne(t,oe).forEach((function(e){e!==n&&(e.checked=!1)})),ne(t,ce).forEach((function(e){e.classList.remove("display-block")}));var r=n.closest("label").nextElementSibling;e.currentTarget.checked&&r.classList.add("display-block")}})}return ee(e,[{key:"init",value:function(){var e=this;ne(this,ie)&&ne(this,ie).forEach((function(t){t.querySelectorAll("input").forEach((function(t){t.addEventListener("change",(function(t){ne(e,le).call(e,t)}))}))}))}}]),e}();function ue(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function de(e,t,n){return t&&ue(e.prototype,t),n&&ue(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var fe=de((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t,n,r=document.getElementById("ngss-toggle-switch"),a=document.querySelectorAll(".ngss"),i=document.querySelector(".ngss-desc-container"),o=document.getElementById("terms-toggle-switch"),c=document.querySelectorAll(".term"),l=document.querySelector(".term-def-container"),s=function(){var e=document.querySelectorAll(".reading-toggle-detail");e.length>0&&e.forEach((function(e){e.remove()}))},u=function(){r.checked=!1,a.forEach((function(e){e.classList.remove("highlighted"),e.setAttribute("tabindex",-1),e.removeEventListener("click",t,!0)})),s()},d=function(){o.checked=!1,c.forEach((function(e){e.classList.remove("highlighted"),e.setAttribute("tabindex",-1),e.removeEventListener("click",n)})),s()};o&&o.addEventListener("change",(function(e){!0===e.target.checked?(!0===r.checked&&u(),c.forEach((function(e,t){e.classList.add("highlighted"),e.setAttribute("tabindex",t+1),n=function(){var t=e.innerHTML.toString(),n=e.getAttribute("data-term-def"),r=e.getAttribute("data-term-url");s();var a='\n                        <article\n                            class="reading-toggle-detail glossary-term"\n                            aria-polite="live"\n                            data-term-definition>\n\n                            <div class="reading-toggle-detail__head">\n                                <strong>Glossary Term</strong>\n                            </div>\n                        \n                            <div class="reading-toggle-detail__body">\n\n                                <h2 class="h6">\n                                    '.concat(t,"\n                                </h2>\n                            \n                                <p>\n                                    ").concat(n||"That is not good.",'\n                                </p>\n                            \n                                <p>\n                                    <a href="').concat(r||"#1",'">\n                                        View in Glossary\n                                    </a>\n                                </p>\n\n                            </div>\n                        \n                        </article>                        \n                    ');l.insertAdjacentHTML("beforeend",a),console.log("Carl, you can do this!!",t,l);var i=l.querySelector(".reading-toggle-detail");setTimeout((function(){i.classList.add("shown")}),20)},e.addEventListener("click",n)}))):d()})),r&&r.addEventListener("change",(function(e){!0===e.target.checked?(!0===o.checked&&d(),a.forEach((function(e,n){e.classList.add("highlighted"),e.setAttribute("tabindex",n+1),t=function(){var t=e.getAttribute("data-ngss-cat"),n=e.getAttribute("data-ngss-comment"),r=e.getAttribute("data-ngss-desc");s();var a='\n\n                        <article\n                            class="reading-toggle-detail"\n                            aria-polite="live"\n                            data-ngss-cat="'.concat(t,'">\n\n                            <div class="reading-toggle-detail__head">\n                                ').concat(t,'\n                            </div>\n\n                            <div class="reading-toggle-detail__body">\n                                <p>\n                                    ').concat(n||r,"\n                                </p>\n                            </div>\n                        \n                        </article>      \n                    ");i.insertAdjacentHTML("beforeend",a);var o=i.querySelector(".reading-toggle-detail");setTimeout((function(){o.classList.add("shown")}),20)},e.addEventListener("click",t,!0)}))):u()}))}));function ve(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function he(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function pe(e,t){var n=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}(e,t);return function(e,t){return t.get?t.get.call(e):t.value}(e,n)}var be=new WeakMap,ye=new WeakMap,me=new WeakMap,ge=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),he(this,be,{writable:!0,value:document.createElement("div")}),he(this,ye,{writable:!0,value:document.querySelectorAll("img[data-lightbox]")}),he(this,me,{writable:!0,value:'\n    <div class="lightbox__container">\n      <button class="lightbox__close button button--icon-only" data-lightbox-close>\n          <span class="icon icon-close" aria-label="Close" aria-hidden="true">\n      </button>\n      <img class="lightbox__image" src="https://source.unsplash.com/1600x900" />\n      <p class="lightbox__caption">A caption for the image.</p>\n    </div>\n  '})}var t,n;return t=e,(n=[{key:"init",value:function(){var e=this,t=function(t){t.target===t.currentTarget&&(pe(e,be).setAttribute("aria-hidden",!0),document.querySelector("body").classList.remove("modal-open"),window.addEventListener("keyup",handleLightboxUpdate))},n=function(e){i.src=c[e].imgSRC,i.alt=c[e].imgALT,o.innerHTML=c[e].imgALT};pe(this,be).classList.add("lightbox"),pe(this,be).innerHTML=pe(this,me),pe(this,be).setAttribute("aria-hidden",!0),document.body.appendChild(pe(this,be));var r,a=document.querySelector("[data-lightbox-close]"),i=document.querySelector(".lightbox__image"),o=document.querySelector(".lightbox__caption"),c=[];pe(this,ye).forEach((function(t,a){c.push({imgSRC:t.src,imgALT:t.alt}),t.addEventListener("click",(function(){r=a,document.querySelector("body").classList.add("modal-open"),pe(e,be).setAttribute("aria-hidden",!1),i.classList.add("box-shadow-3"),n(a),window.addEventListener("keyup",o)}));var o=function(e){console.log("currentLB === ".concat(r));var t=function(t){e.preventDefault(),r=parseInt(r)+t,-1===t&&r<0?(r=c.length-1,console.log("left arrow <<<< ".concat(r))):1===t&&r>=c.length?(r=0,console.log("left arrow >>>>  ".concat(r))):console.log("My target is ????? ".concat(r)),n(r)};switch(e.code){case"ArrowLeft":t(-1);break;case"ArrowRight":t(1)}}})),a.addEventListener("click",t),pe(this,be).addEventListener("click",t),console.log("Here are our lightboxes ".concat(c[0].imgSRC))}}])&&ve(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();(new i).init(),(new s).init(),(new h).init(),(new A).init(),(new S).init(),(new M).init(),(new P).init(),(new I).init(),(new G).init(),(new X).init(),(new ae).init(),(new se).init(),new fe,(new ge).init()}();