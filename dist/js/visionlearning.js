!function(){var t={232:function(){"undefined"!=typeof Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}))}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}!function(){"use strict";function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n(232);var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,n=["a[href]","button","input","textarea","select","details",'[tabindex]:not([tabindex="-1"])'];return t(e.querySelectorAll(n)).filter((function(t){return!t.hasAttribute("disabled")&&!t.getAttribute("aria-hidden")}))};function a(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){s=!0,i=t},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw i}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=["a[href]","button",'[role="tab"]','[data-toggle="accordion"]'];window.addEventListener("load",(function(){document.querySelectorAll(e).forEach((function(t){var e=!1;t.addEventListener("mousedown",(function(){e=!0})),t.addEventListener("mouseup",(function(){e=!1})),t.addEventListener("focus",(function(t){e&&t.target.blur()}))}))}),{once:!0})},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),document.querySelectorAll(".accordion").forEach((function(t){var e=t.querySelectorAll('[data-toggle="accordion"]'),n=t.querySelectorAll('[data-accordion="panel"]'),o=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=r(e),i=a(o);try{for(i.s();!(t=i.n()).done;){var c=t.value;!0===n?c.setAttribute("tabindex",0):!1===n&&c.setAttribute("tabindex",-1)}}catch(t){i.e(t)}finally{i.f()}};e.forEach((function(t,r){var i=t.nextElementSibling,c=t.getAttribute("aria-expanded");t.setAttribute("tabindex",0),"true"===c?(i.style.maxHeight=i.scrollHeight+"px",i.classList.add("show"),o(i,!0)):(t.setAttribute("aria-expanded",!1),i.style.maxHeight=null,i.setAttribute("aria-hidden",!0),o(i,!1));var s=function(e){e.preventDefault(),e.stopPropagation();var r,s=a(n);try{for(s.s();!(r=s.n()).done;){var l=r.value;l.classList.remove("show"),l!==i&&(l.classList.remove("shown"),l.style.maxHeight=null,l.previousElementSibling.setAttribute("aria-expanded",!1),l.setAttribute("aria-hidden",!0),o(l,!1))}}catch(t){s.e(t)}finally{s.f()}i.classList.toggle("shown"),"true"===(c=t.getAttribute("aria-expanded"))?(t.setAttribute("aria-expanded",!1),i.setAttribute("aria-hidden",!0),o(i,!1)):"false"===c&&(t.setAttribute("aria-expanded",!0),i.setAttribute("aria-hidden",!1),o(i,!0)),i.style.maxHeight?i.style.maxHeight=null:(i.style.maxHeight=i.scrollHeight+"px",i.setAttribute("aria-hidden",!1));var u=new Event("accTrigger",{bubbles:!0});document.dispatchEvent(u)};t.addEventListener("click",(function(t){s(t)})),t.addEventListener("keydown",(function(t){var n=function(n){t.preventDefault();var a=r+n;-1===n&&a<0?e[e.length-1].focus():1===n&&a>=e.length?e[0].focus():e[a].focus()};switch(t.keyCode){case 38:n(-1);break;case 40:n(1)}})),t.addEventListener("keyup",(function(t){13===t.keyCode&&"BUTTON"!==t.target.tagName&&s(t)}))}))}))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),document.querySelectorAll(".alert--dismissable").forEach((function(t){t.insertAdjacentHTML("afterbegin",'\n        <button class="button button--icon-only">\n            <span class="icon icon-close" aria-label="Close" aria-hidden="true">\n        </button>'),t.querySelector("button").addEventListener("click",(function(e){e.preventDefault(),t.classList.add("dismissed"),document.querySelector(".dismissed").addEventListener("animationend",(function(){t.remove()}))}))}))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e,n=document.querySelectorAll(".button--icon-only"),r=function(t){e=setTimeout((function(){n.forEach((function(t){t.classList.remove("tooltip-show")})),t.target.classList.add("tooltip-show")}),300)},a=function(t){clearTimeout(e),t.target.classList.remove("tooltip-show")};n.forEach((function(t){var e=t.getAttribute("aria-label"),n='\n            <span class="button__tooltip">\n                '.concat(e,"\n            </span>");if(e){t.insertAdjacentHTML("beforeend",n);var o=t.querySelector(".button__tooltip"),i=function(){var e=o.offsetWidth/2,n=t.offsetLeft,r=window.innerWidth-(t.offsetLeft+t.offsetWidth);e>n&&o.classList.add("left"),e>r&&o.classList.add("right")};i(),window.addEventListener("resize",i),t.addEventListener("mouseenter",r),t.addEventListener("focusin",r),t.addEventListener("mouseleave",a),t.addEventListener("focusout",a)}}))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),document.querySelectorAll("[data-target-toggle]").forEach((function(t){t.setAttribute("aria-expanded",!1),t.addEventListener("click",(function(e){var n,a=e.target.getAttribute("data-target-toggle").replace(/#/,""),o=document.getElementById(a),i=r(o)[0],c=t.getAttribute("aria-expanded"),s=function(t,e){t.setAttribute("aria-expanded",!1),e.classList.remove("shown")};if("true"===c?s(t,o):"false"===c&&(n=o,t.setAttribute("aria-expanded",!0),n.classList.add("shown"),i.focus()),o.addEventListener("keydown",(function(e){switch(e.keyCode){case 9:document.activeElement===i&&e.shiftKey&&(e.preventDefault(),t.focus());break;case 27:s(t,o)}})),t.hasAttribute("data-target-close")){var l=e.target.getAttribute("data-target-close").replace(/#/,""),u=document.getElementById(l),d=document.querySelector('[data-target-toggle="#'.concat(l,'"]'));console.log("Close target ID: ".concat(d)),s(d,u)}}))}))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=document.querySelector(".copyright-year");if(e){var n=(new Date).getFullYear();e.innerHTML=n}window.addEventListener("load",(function(){var t=document.querySelector(".goog-te-combo");if(null!=t){var e=document.getElementById("custom-language-select"),n=document.getElementById("custom-language-update");e.classList.add("notranslate"),new MutationObserver((function(){0===e.childElementCount?t.querySelectorAll("option").forEach((function(t){var n=t.getAttribute("value"),r=t.innerHTML,a=document.createElement("option");a.setAttribute("value",n),a.innerHTML=r,e.appendChild(a)})):e.value=t.value})).observe(t,{childList:!0}),n.addEventListener("click",(function(n){var r;n.preventDefault(),""!==e.value&&(r=e.value,t.value=r,t.querySelector('option[value="'.concat(r,'"]')).selected=!0,function(t,e){var n;document.createEventObject?(n=document.createEventObject(),t.languageChangeEvent("on"+e,n)):((n=document.createEvent("HTMLEvents")).initEvent(e,!1,!0),t.dispatchEvent(n))}(t,"change"))}))}var r=document.querySelector("html");new MutationObserver((function(t){t.forEach((function(t){"attributes"===t.type&&(r.classList.contains("translated-rtl")?r.setAttribute("dir","rtl"):r.setAttribute("dir","ltr"))}))})).observe(r,{attributes:!0,attributeFilter:["class"]})}))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=document.querySelectorAll("form[novalidate]"),n=document.querySelectorAll(".form-entry"),r=!1;e.forEach((function(t){t.addEventListener("submit",(function(e){r=!0;var n=[];t.querySelectorAll(":invalid").forEach((function(t){var e=t.closest(".form-entry"),r=e.querySelector(".form-entry__field__label");e.classList.add("is-invalid");var o=e.querySelector(".form-entry__feedback"),i=e.getAttribute("data-error-description"),c=e.getAttribute("data-error-instructions"),s=[i,c];n.push(s),null===o&&r.insertAdjacentHTML("afterend",a(i,c))})),n.length>0&&e.preventDefault();var o=t.querySelector("[class*='alert'], [class*='invalid']");if(o){o.hasAttribute("data-alert")&&(o.style.display="block");var i=o.offsetTop-16;window.scrollTo({top:i,behavior:"smooth"})}}))})),n.forEach((function(t){var e,n=t.querySelectorAll("input, select, textarea");e=!!t.hasAttribute("data-required"),n.forEach((function(n){var a=t.querySelector(".form-entry__field__input"),i=n.tagName,c=".form-entry";if("INPUT"===i){var s=n.getAttribute("type");"radio"!=s&&"checkbox"!=s||(c="label",n.disabled&&n.closest("label").classList.add("disabled"))}n.addEventListener("focusin",(function(){this.closest(c).classList.add("active")})),n.addEventListener("focusout",(function(){this.closest(c).classList.remove("active")})),!0===e&&(n.setAttribute("required","true"),n.setAttribute("aria-required",!0)),n.addEventListener("change",(function(){!0===r&&!0===e&&o(n),""!=n.value?n.closest(".form-entry").classList.add("has-value"):n.closest(".form-entry").classList.remove("has-value")})),a&&a.addEventListener("click",(function(t){var e=t.target.tagName,n=t.target.closest(".form-entry__field__input").querySelector("input");"SPAN"===e&&(console.log(t.target.nextSibling),n.focus())}))}))}));var a=function(t,e){return null===t&&(t="This field is Required"),null===e&&(e="Complete this field"),'<div class="form-entry__feedback">\n                        <small>\n                            <span class="icon icon-warn" aria-hidden="true"></span>\n                            <strong>'.concat(t,"</strong>\n                            <span>").concat(e,"</span>\n                        </small>\n                    </div>")},o=function(t){return c(t.value)?(l(t),!0):(u(t),!1)},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return""===t},s=["is-invalid"],l=function(t){var e;(e=t.closest(".form-entry").classList).add.apply(e,s)},u=function(t){var e;(e=t.closest(".form-entry").classList).remove.apply(e,s)};document.querySelectorAll(".file-upload").forEach((function(t){t.querySelector('input[type="file"]').addEventListener("change",(function(e){var n,r,a=(n=e.target.files,r=1,function(t){if(Array.isArray(t))return t}(n)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(t){c=!0,a=t}finally{try{i||null==n.return||n.return()}finally{if(c)throw a}}return o}}(n,r)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],o=a.name,c=(a.size/1e3).toFixed(2),s='\n                <span class="file-upload__data">\n                    <span class="file-name">'.concat(o,'</span>\n                    <span class="file-size">').concat(c," kb</span>\n                </span>\n                "),l=t.querySelector(".file-upload__data");l&&l.remove(),t.insertAdjacentHTML("beforeend",s)}));var e=function(){t.closest(".form-entry").classList.remove("active")};t.addEventListener("dragenter",(function(){t.closest(".form-entry").classList.add("active")})),t.addEventListener("dragleave",e),t.addEventListener("dragend",e),t.addEventListener("drop",(function(){t.closest(".form-entry").classList.remove("active")}))}))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=document.querySelectorAll(".modal"),n=document.querySelectorAll("[data-modal-open]");e.forEach((function(t){var e=t.querySelector(".modal__content");e.setAttribute("role","dialog"),e.setAttribute("aria-modal",!0),t.setAttribute("aria-hidden",!0)})),n.forEach((function(t){t.addEventListener("click",(function(t){var e=t.target.getAttribute("data-modal-open").replace(/#/,"");!function(t){document.querySelector("body").classList.add("modal-open"),t.setAttribute("aria-hidden",!1);var e=document.activeElement,n=t.querySelector(".modal__content");n.setAttribute("tabindex",0),n.focus(),n.setAttribute("tabindex",-1),t.classList.contains("modal--scroll-all")&&(t.scrollTop=0);var a=t.querySelectorAll("[data-modal-close]"),o=function(t){n.contains(t.target)||i()},i=function(){t.setAttribute("aria-hidden",!0),e.focus(),document.querySelector("body").classList.remove("modal-open"),window.removeEventListener("click",o)},c=r(t),s=c[0],l=c[c.length-1];t.addEventListener("keydown",(function(t){switch(t.keyCode){case 9:document.activeElement===l&&(t.shiftKey||(t.preventDefault(),s.focus())),document.activeElement===s&&t.shiftKey&&(t.preventDefault(),l.focus()),document.activeElement===n&&t.shiftKey&&(t.preventDefault(),s.focus());break;case 27:i()}})),a.forEach((function(t){t.addEventListener("click",i),t.setAttribute("aria-label","Close Modal Window")})),t.hasAttribute("data-modal-close-outside")&&window.addEventListener("click",o)}(document.getElementById(e)),t.stopPropagation()}))}))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),document.querySelectorAll("[data-toggle='dropdown']").forEach((function(t){var e=t.closest("li"),n=t.nextElementSibling;t.setAttribute("aria-expanded",!1),t.setAttribute("aria-haspopup",!0),t.addEventListener("click",(function(e){e.preventDefault(),n.classList.toggle("shown");var r=t.getAttribute("aria-expanded");"true"===r?t.setAttribute("aria-expanded",!1):"false"===r&&t.setAttribute("aria-expanded",!0)})),window.addEventListener("click",(function(r){e.contains(r.target)||(n.classList.remove("shown"),t.setAttribute("aria-expanded",!1))}))}))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),document.querySelectorAll(".tabs").forEach((function(t){var e=t.querySelectorAll('[role="tab"]'),n=t.querySelectorAll('[role="tabpanel"]');e.forEach((function(t,r){t.addEventListener("click",(function(t){!function(t){e.forEach((function(t){t.setAttribute("aria-selected","false")})),n.forEach((function(t){t.classList.remove("shown"),t.setAttribute("hidden","")})),t.setAttribute("aria-selected","true");var r=t.getAttribute("aria-controls"),a=document.getElementById(r);a.classList.add("shown"),a.removeAttribute("hidden")}(t.target)})),t.addEventListener("keydown",(function(t){var n=function(n){t.preventDefault();var a=r+n;-1===n&&a<0?e[e.length-1].focus():1===n&&a>=e.length?e[0].focus():e[a].focus()};switch(t.keyCode){case 36:!function(t){t.preventDefault(),e[0].focus()}(t);break;case 35:!function(t){t.preventDefault(),e[e.length-1].focus()}(t);break;case 37:n(-1);break;case 39:n(1)}}))}))}))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),document.querySelectorAll("[class*='table--stack']").forEach((function(t){var e=t.querySelectorAll("thead th"),n=t.querySelectorAll("tbody tr"),r=[];e.forEach((function(t){if(""!==t.textContent){var e=t.textContent.trim();r.push(e)}})),n.forEach((function(t){t.querySelectorAll("td").forEach((function(t,e){var n=t.innerHTML,a='\n                            <div class="td-content">\n                            '.concat(n,"\n                            </div>\n                        ");t.innerHTML=a,t.setAttribute("data-before",r[e])}))}))}));var e=document.querySelectorAll(".table-scroll"),n=function(){e.forEach((function(t){var e=t.querySelector(".table-scroll__container"),n=t.offsetWidth;e.scrollWidth>n?t.setAttribute("data-scroll",!0):t.setAttribute("data-scroll",!1),e.addEventListener("scroll",(function(){e.scrollLeft>1?e.setAttribute("data-scrolling",!0):e.setAttribute("data-scrolling",!1)}),{passive:!0})}))};n(),window.addEventListener("resize",n)},new function t(){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),document.querySelectorAll(".grid--discipline .backdrop").forEach((function(t){t.addEventListener("mouseenter",(function(n){n.preventDefault(),e=setTimeout((function(){t.classList.remove("unfocused"),t.classList.add("focused")}),500)})),t.addEventListener("mouseleave",(function(n){n.preventDefault(),clearTimeout(e),t.classList.contains("focused")&&(t.classList.remove("focused"),t.classList.add("unfocused"),t.addEventListener("animationend",(function(){t.classList.remove("unfocused")})))}))}))},new function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=document.querySelector('[data-toggle="glossary"]'),n=document.querySelectorAll(".term");if(e){var r,a=function(t){r=setTimeout((function(){n.forEach((function(t){t.classList.remove("tooltip-show")})),t.target.classList.add("tooltip-show")}),400)},o=function(t){clearTimeout(r),t.target.classList.remove("tooltip-show")};function t(t){var e=t.getAttribute("data-definition"),n='\n                    <span class="term__tooltip">\n                        '.concat(e,"\n                    </span>");e&&t.insertAdjacentHTML("beforeend",n),t.addEventListener("mouseenter",a),t.addEventListener("focusin",a),t.addEventListener("mouseleave",o),t.addEventListener("focusout",o)}function i(t){console.log("not highlighted"),t.querySelector(".term__tooltip").remove(),t.removeEventListener("mouseenter",a),t.removeEventListener("focusin",a),t.removeEventListener("mouseleave",o),t.removeEventListener("focusout",o)}e.addEventListener("click",(function(r){r.preventDefault(),e.classList.toggle("active"),n.forEach((function(e,n){e.classList.toggle("highlighted"),e.setAttribute("tabindex",n+1),e.classList.contains("highlighted")?t(e):(e.setAttribute("tabindex",0),i(e))}))}))}var i=document.querySelector('[data-toggle="ngss"]');i&&i.addEventListener("click",(function(t){t.preventDefault(),i.classList.toggle("active")}))},console.log("Production Mode")}()}();