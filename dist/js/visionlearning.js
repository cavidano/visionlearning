!function(){var t={232:function(){"undefined"!=typeof Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}))}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}!function(){"use strict";function t(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){s=!0,i=t},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw i}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){s=!0,a=t},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw a}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n(232),new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),window.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("[role='tab'], [data-toggle='accordion'], a[href], button:not([data-type='subtract']):not([data-type='add'])").forEach((function(t){var e=!1;t.addEventListener("mousedown",(function(){e=!0})),t.addEventListener("mouseup",(function(){e=!1})),t.addEventListener("focus",(function(t){e&&t.target.blur()}))}))}))},new function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),document.querySelectorAll(".accordion").forEach((function(e){var n=e.querySelectorAll('[data-toggle="accordion"]'),r=e.querySelectorAll('[data-accordion="panel"]'),o=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=["a[href]","button","input","textarea","select","details",'[tabindex]:not([tabindex="- 1"]'],a=n.querySelectorAll(o),i=t(a);try{for(i.s();!(e=i.n()).done;){var c=e.value;!0===r?c.setAttribute("tabindex",0):!1===r&&c.setAttribute("tabindex",-1)}}catch(t){i.e(t)}finally{i.f()}};n.forEach((function(e,a){var i=e.nextElementSibling,c=e.getAttribute("aria-expanded");e.setAttribute("tabindex",0),"true"===c?(i.style.maxHeight=i.scrollHeight+"px",i.classList.add("show"),o(i,!0)):(e.setAttribute("aria-expanded",!1),i.style.maxHeight=null,i.setAttribute("aria-hidden",!0),o(i,!1));var s=function(n){n.preventDefault(),n.stopPropagation();var a,s=t(r);try{for(s.s();!(a=s.n()).done;){var l=a.value;l.classList.remove("show"),l!==i&&(l.classList.remove("shown"),l.style.maxHeight=null,l.previousElementSibling.setAttribute("aria-expanded",!1),l.setAttribute("aria-hidden",!0),o(l,!1))}}catch(t){s.e(t)}finally{s.f()}i.classList.toggle("shown"),"true"===(c=e.getAttribute("aria-expanded"))?(e.setAttribute("aria-expanded",!1),i.setAttribute("aria-hidden",!0),o(i,!1)):"false"===c&&(e.setAttribute("aria-expanded",!0),i.setAttribute("aria-hidden",!1),o(i,!0)),i.style.maxHeight?i.style.maxHeight=null:(i.style.maxHeight=i.scrollHeight+"px",i.setAttribute("aria-hidden",!1));var u=new Event("accTrigger",{bubbles:!0});document.dispatchEvent(u)};e.addEventListener("click",(function(t){s(t)})),e.addEventListener("keydown",(function(t){var e=function(e){t.preventDefault();var r=a+e;-1===e&&r<0?n[n.length-1].focus():1===e&&r>=n.length?n[0].focus():n[r].focus()};switch(t.keyCode){case 38:e(-1);break;case 40:e(1)}})),e.addEventListener("keyup",(function(t){13===t.keyCode&&"BUTTON"!==t.target.tagName&&s(t)}))}))}))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),document.querySelectorAll(".alert--dismissable").forEach((function(t){t.insertAdjacentHTML("afterbegin",'\n        <button class="button button--icon-only">\n            <span class="icon_close" aria-label="Close" aria-hidden="true">\n        </button>'),t.querySelector("button").addEventListener("click",(function(e){e.preventDefault(),t.classList.add("dismissed"),document.querySelector(".dismissed").addEventListener("animationend",(function(){t.remove()}))}))}))},new function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),!navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/MSIE/)||document.querySelectorAll(".backdrop--fixed").forEach((function(t){var e=t.scrollHeight;t.querySelector(".backdrop__cover").scrollHeight<e&&(t.style.height=e+"px")}))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e,n=document.querySelectorAll(".button--icon-only"),r=function(t){e=setTimeout((function(){n.forEach((function(t){t.classList.remove("tooltip-show")})),t.target.classList.add("tooltip-show")}),300)},o=function(t){clearTimeout(e),t.target.classList.remove("tooltip-show")};n.forEach((function(t){var e=t.getAttribute("aria-label"),n='\n            <span class="button__tooltip">\n                '.concat(e,"\n            </span>");if(e){t.insertAdjacentHTML("beforeend",n);var a=t.querySelector(".button__tooltip"),i=function(){var e=a.offsetWidth/2,n=t.offsetLeft,r=window.innerWidth-(t.offsetLeft+t.offsetWidth);e>n&&a.classList.add("left"),e>r&&a.classList.add("right")};i(),window.addEventListener("resize",i),t.addEventListener("mouseenter",r),t.addEventListener("focusin",r),t.addEventListener("mouseleave",o),t.addEventListener("focusout",o)}}))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),document.querySelectorAll("[data-toggle='collapse']").forEach((function(t){t.setAttribute("aria-expanded",!1),t.addEventListener("click",(function(e){var n=e.target,r=n.getAttribute("data-target").replace(/#/,""),o=document.getElementById(r),a=n.getAttribute("aria-expanded");"true"===a?t.setAttribute("aria-expanded",!1):"false"===a&&t.setAttribute("aria-expanded",!0),o.classList.toggle("shown")}))}))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e,n,r=document.querySelector(".copyright-year");if(r){var o=(new Date).getFullYear();r.innerHTML=o}window.addEventListener("load",(function(){var t=document.querySelector(".goog-te-combo");if(void 0!==t&&null!=t){document.querySelectorAll("[data-lang]").forEach((function(t){t.addEventListener("click",(function(n){n.preventDefault();var r=t.getAttribute("data-lang");e(r)}))}));var e=function(e){t.value=e,t.querySelector('option[value="'+e+'"]').selected=!0,n(t,"change")},n=function(t,e){var n;return document.createEventObject?(n=document.createEventObject(),t.fireEvent("on"+e,n)):((n=document.createEvent("HTMLEvents")).initEvent(e,!1,!0),!t.dispatchEvent(n))}}var r=document.querySelector("html");new MutationObserver((function(t){t.forEach((function(){r.classList.contains("translated-rtl")?r.setAttribute("dir","rtl"):r.setAttribute("dir","ltr")}))})).observe(r,{attributes:!0,attributeFilter:["class"]})})),/Trident\/|MSIE/.test(window.navigator.userAgent)&&(e=document.querySelector('[name="viewport"]'),(n=document.createElement("script")).src="https://cdn.jsdelivr.net/npm/ie11-custom-properties@3.1.0/ie11CustomProperties.min.js",e.parentNode.insertBefore(n,e.nextSibling))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=document.querySelector(".full-height");if(e){var n=document.getElementById("global-header").offsetHeight,r=(document.getElementById("global-footer").offsetHeight,function(){var t=window.innerHeight;e.style.height=t-n+"px"});r(),window.addEventListener("resize",r)}},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=document.querySelectorAll("form[novalidate]"),n=document.querySelectorAll(".form-entry"),o=!1;e.forEach((function(t){t.addEventListener("submit",(function(e){o=!0;var n=[];t.querySelectorAll(":invalid").forEach((function(t){var e=t.closest(".form-entry"),r=e.querySelector(".form-entry__field__label");e.classList.add("is-invalid");var o=e.querySelector(".form-entry__feedback"),i=e.getAttribute("data-error-description"),c=e.getAttribute("data-error-instructions"),s=[i,c];n.push(s),null===o&&r.insertAdjacentHTML("afterend",a(i,c))})),n.length>0&&e.preventDefault();var r=t.querySelector("[class*='alert'], [class*='invalid']");if(r){r.hasAttribute("data-alert")&&(r.style.display="block");var i=r.offsetTop-16;window.scrollTo({top:i,behavior:"smooth"})}}))})),n.forEach((function(t){var e,n=t.querySelectorAll("input, select, textarea");e=!!t.hasAttribute("data-required"),n.forEach((function(n){var r=t.querySelector(".form-entry__field__input"),a=n.tagName,c=".form-entry";if("INPUT"===a){var s=n.getAttribute("type");"radio"!=s&&"checkbox"!=s||(c="label",n.disabled&&n.closest("label").classList.add("disabled"))}n.addEventListener("focusin",(function(){this.closest(c).classList.add("active")})),n.addEventListener("focusout",(function(){this.closest(c).classList.remove("active")})),!0===e&&(n.setAttribute("required","true"),n.setAttribute("aria-required",!0)),n.addEventListener("change",(function(){!0===o&&!0===e&&i(n),""!=n.value?n.closest(".form-entry").classList.add("has-value"):n.closest(".form-entry").classList.remove("has-value")})),r&&r.addEventListener("click",(function(t){var e=t.target.tagName,n=t.target.closest(".form-entry__field__input").querySelector("input");"SPAN"===e&&(console.log(t.target.nextSibling),n.focus())}))}))}));var a=function(t,e){return null===t&&(t="This field is Required"),null===e&&(e="Complete this field"),'<div class="form-entry__feedback">\n                        <small>\n                            <span class="icon_warn" aria-hidden="true"></span>\n                            <strong>'.concat(t,"</strong>\n                            <span>").concat(e,"</span>\n                        </small>\n                    </div>")},i=function(t){return c(t.value)?(l(t),!0):(u(t),!1)},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return""===t},s=["is-invalid"],l=function(t){var e;(e=t.closest(".form-entry").classList).add.apply(e,s)},u=function(t){var e;(e=t.closest(".form-entry").classList).remove.apply(e,s)};document.querySelectorAll(".file-upload").forEach((function(t){t.querySelector('input[type="file"]').addEventListener("change",(function(e){var n,o,a=(n=e.target.files,o=1,function(t){if(Array.isArray(t))return t}(n)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(n,o)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],i=a.name,c=(a.size/1e3).toFixed(2),s='\n                <span class="file-upload__data">\n                    <span class="file-name">'.concat(i,'</span>\n                    <span class="file-size">').concat(c," kb</span>\n                </span>\n                "),l=t.querySelector(".file-upload__data");l&&l.remove(),t.insertAdjacentHTML("beforeend",s)}));var e=function(){t.closest(".form-entry").classList.remove("active")};t.addEventListener("dragenter",(function(){t.closest(".form-entry").classList.add("active")})),t.addEventListener("dragleave",e),t.addEventListener("dragend",e),t.addEventListener("drop",(function(){t.closest(".form-entry").classList.remove("active")}))}))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=document.querySelectorAll(".modal"),n=document.querySelectorAll("[data-modal-open]"),r=document.querySelector("body");e.forEach((function(t){var e=t.querySelector(".modal__content");e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),t.setAttribute("aria-hidden",!0)})),n.forEach((function(t){t.addEventListener("click",(function(t){var e=t.target.getAttribute("data-modal-open").replace(/#/,"");!function(t){r.classList.add("modal-open"),t.setAttribute("aria-hidden",!1);var e=document.activeElement;t.addEventListener("keydown",(function(t){9===t.keyCode&&document.activeElement===l&&(t.preventDefault(),s.focus()),27===t.keyCode&&u()}));var n,a=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){s=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw i}}}}(t.querySelectorAll("[data-modal-close]"));try{for(a.s();!(n=a.n()).done;){var i=n.value;i.addEventListener("click",u),i.setAttribute("aria-label","Close Modal Window")}}catch(t){a.e(t)}finally{a.f()}var c=t.querySelectorAll("input:not([disabled]), button:not([disabled]), a:not([disabled]"),s=c[0],l=c[c.length-1];function u(){r.classList.remove("modal-open"),t.setAttribute("aria-hidden",!0),e.focus()}s.focus()}(document.getElementById(e))}))}))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),document.querySelectorAll("[data-toggle='dropdown']").forEach((function(t){var e=t.closest("li"),n=t.nextElementSibling;t.setAttribute("aria-expanded",!1),t.addEventListener("click",(function(e){e.preventDefault(),n.classList.toggle("shown");var r=t.getAttribute("aria-expanded");"true"===r?t.setAttribute("aria-expanded",!1):"false"===r&&t.setAttribute("aria-expanded",!0)})),window.addEventListener("click",(function(r){e.contains(r.target)||(n.classList.remove("shown"),t.setAttribute("aria-expanded",!1))}))}))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),document.querySelectorAll(".tabs").forEach((function(t){var e=t.querySelectorAll("[role='tab']"),n=t.querySelectorAll("[role='tabpanel']");e.forEach((function(t,r){t.addEventListener("click",(function(t){!function(t){(function(){var t,r=a(e);try{for(r.s();!(t=r.n()).done;)t.value.setAttribute("aria-selected","false")}catch(t){r.e(t)}finally{r.f()}var o,i=a(n);try{for(i.s();!(o=i.n()).done;){var c=o.value;c.classList.remove("shown"),c.setAttribute("hidden","")}}catch(t){i.e(t)}finally{i.f()}})(),t.setAttribute("aria-selected","true");var r=t.getAttribute("aria-controls"),o=document.getElementById(r);o.classList.add("shown"),o.removeAttribute("hidden")}(t.target)})),t.addEventListener("keydown",(function(t){var n=function(n){t.preventDefault();var o=r+n;-1===n&&o<0?e[e.length-1].focus():1===n&&o>=e.length?e[0].focus():e[o].focus()};switch(t.keyCode){case 37:n(-1);break;case 39:n(1)}}))}))}))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),document.querySelectorAll("[class*='table--stack']").forEach((function(t){var e=t.querySelectorAll("thead th"),n=t.querySelectorAll("tbody tr"),r=[];e.forEach((function(t){if(""!==t.textContent){var e=t.textContent.trim();r.push(e)}})),n.forEach((function(t){t.querySelectorAll("td").forEach((function(t,e){var n=t.innerHTML,o='<div class="td-content">\n                        '.concat(n,"\n                        </div>");t.innerHTML=o,t.setAttribute("data-before",r[e])}))}))}));var e=document.querySelectorAll(".table-scroll"),n=function(){e.forEach((function(t){var e=t.querySelector(".table-scroll__container"),n=t.offsetWidth;e.scrollWidth>n?t.setAttribute("data-scroll",!0):t.setAttribute("data-scroll",!1),e.addEventListener("scroll",(function(){e.scrollLeft>1?e.setAttribute("data-scrolling",!0):e.setAttribute("data-scrolling",!1)}),{passive:!0})}))};n(),window.addEventListener("resize",n)},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=document.querySelector("[data-toggle='ts-menu']"),n=document.querySelector(".tearsheet");e&&(e.setAttribute("aria-expanded",!1),e.addEventListener("click",(function(t){t.preventDefault(),n.classList.toggle("menu-shown")})))},new function t(){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),document.querySelectorAll(".grid--discipline .backdrop").forEach((function(t){t.addEventListener("mouseenter",(function(n){n.preventDefault(),e=setTimeout((function(){t.classList.remove("unfocused"),t.classList.add("focused")}),500)})),t.addEventListener("mouseleave",(function(n){n.preventDefault(),clearTimeout(e),t.classList.contains("focused")&&(t.classList.remove("focused"),t.classList.add("unfocused"),t.addEventListener("animationend",(function(){t.classList.remove("unfocused")})))}))}))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=document.querySelector(".quiz");if(e){var n=e.querySelector('button[type="submit"]');console.log(n),n.addEventListener("click",(function(t){t.preventDefault();var n=e.querySelector(".quiz__questions").querySelectorAll("li.form-entry"),r=e.querySelectorAll(".quiz__response"),o=e.querySelector(".quiz__score");if(r.forEach((function(t){t.classList.remove("display-block")})),n.forEach((function(t){var e=t.querySelector(".form-entry__option").querySelector("input:checked");e&&e.closest("label").nextElementSibling.classList.add("display-block")})),o){o.style.display="block";var a=o.offsetTop-16;window.scrollTo({top:a,behavior:"smooth"})}}))}},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=document.querySelector('[data-toggle="glossary"]'),n=document.querySelectorAll(".term");if(e){var r,o=function(t){r=setTimeout((function(){n.forEach((function(t){t.classList.remove("tooltip-show")})),t.target.classList.add("tooltip-show")}),400)},a=function(t){clearTimeout(r),t.target.classList.remove("tooltip-show")};e.addEventListener("click",(function(t){t.preventDefault(),e.classList.toggle("active"),n.forEach((function(t,e){t.classList.toggle("highlighted"),t.setAttribute("tabindex",e+1),t.classList.contains("highlighted")?function(t){var e=t.getAttribute("data-definition"),n='\n                    <span class="term__tooltip">\n                        <span class="tooltip-header display-none">Glossary Term</span>\n                        '.concat(e,"\n                    </span>");e&&t.insertAdjacentHTML("beforeend",n),t.addEventListener("mouseenter",o),t.addEventListener("focusin",o),t.addEventListener("mouseleave",a),t.addEventListener("focusout",a)}(t):(t.setAttribute("tabindex",0),function(t){console.log("not highlighted"),t.querySelector(".term__tooltip").remove(),t.removeEventListener("mouseenter",o),t.removeEventListener("focusin",o),t.removeEventListener("mouseleave",a),t.removeEventListener("focusout",a)}(t))}))}))}var i=document.querySelector('[data-toggle="ngss"]');i.addEventListener("click",(function(t){t.preventDefault(),i.classList.toggle("active")}))},console.log("Production Mode")}()}();