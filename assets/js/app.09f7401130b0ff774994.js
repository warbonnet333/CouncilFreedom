!function(e){function t(t){for(var r,i,c=t[0],u=t[1],l=t[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);d.length;)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var s=u;a.push([108,1]),n()}({104:function(e,t,n){var r=n(64),o=n(105);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},105:function(e,t,n){},106:function(e,t,n){var r=n(64),o=n(107);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);n(65),n(75),n(76),n(77),n(79),n(59),n(90),n(91),n(92),n(93),n(95),n(97),n(99),n(102);var r=n(16),o=n.n(r);function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(){window.scrollTo({top:0,behavior:"smooth"})}function u(e){var t=e.target.closest(".page_nav-item_text");if(!t)return!1;var n=t.dataset.targetBlock;a(document.querySelectorAll(".js-target-block"))[n].scrollIntoView({behavior:"smooth"})}function l(e){var t=e.currentTarget.dataset.link;if(!t)return!1;window.open(t,"_blank")}document.addEventListener("DOMContentLoaded",(function(){var e,t;e=document.querySelector(".header"),t=window.pageYOffset,window.onscroll=function(){var n=window.pageYOffset;t<=n&&n>50?e.classList.add("header-hidden"):e.classList.remove("header-hidden"),t=n},function(){var e=document.querySelectorAll(".js-nav-target"),t=document.querySelector(".js-nav-container");if(!e.length)return;var n="";a(e).map((function(e,t){n+=function(e,t){return'<div class="page_nav-item '.concat(0===t?"active":"",'">\n      <div class="page_nav-item_text" data-target-block="').concat(t,'">').concat(e,"</div>\n    </div>")}(e.innerText,t)})),t.insertAdjacentHTML("afterbegin",n)}(),o()(document).on("click",".js-scroll-top",c),o()(document).on("click",".js-nav-container",u),o()(document).on("click",".js-next-screen",(function(){var e;(e=document.querySelector(".js-nav-container"))&&e.scrollIntoView({behavior:"smooth"})})),o()(document).on("click",".js-help-btn",l)}));n(104),n(106)}});