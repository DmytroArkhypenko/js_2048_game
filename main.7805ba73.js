parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function r(r,n){return a(r)||o(r,n)||t(r,n)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(r,e){if(r){if("string"==typeof r)return n(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(r,e):void 0}}function n(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function o(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var t=[],n=!0,o=!1,a=void 0;try{for(var i,f=r[Symbol.iterator]();!(n=(i=f.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==f.return||f.return()}finally{if(o)throw a}}return t}}function a(r){if(Array.isArray(r))return r}var i=document.querySelector(".container"),f=i.querySelector(".game-field"),c=i.querySelector(".message-container"),u=c.querySelector(".message-start"),s=c.querySelector(".message-lose"),l=c.querySelector(".message-win"),v=i.querySelector(".controls"),d=v.querySelector(".start"),y=document.createElement("button");y.classList.add("restart","button"),y.textContent="Restart";var m=i.querySelector(".game-score"),w=0,h=[],S=4;function b(r){h=new Array(r);for(var e=0;e<r;e++){h[e]=new Array(r);for(var t=0;t<4;t++)h[e][t]=0}}function g(){for(var r=0;r<S;r++)for(var e=0;e<S;e++){var t=f.rows[r].cells[e];t.classList=["field-cell"],h[r][e]>0?(t.classList.add("field-cell--".concat(h[r][e])),t.textContent="".concat(h[r][e])):t.textContent="",2048===h[r][e]&&(l.classList.remove("hidden"),window.romoveEventListener("keydown",C))}}function p(){for(var e=[],t=0;t<S;t++)for(var n=0;n<S;n++)0===h[t][n]&&e.push([t,n]);var o=r(e[Math.floor(Math.random()*e.length)],2),a=o[0],i=o[1];h[a][i]=Math.random()<=.1?4:2}function C(r){r.preventDefault();var e=function(){for(var r=0;r<S;r++)for(var e=1;e<S;e++)if(h[e][r]>0&&(h[e-1][r]===h[e][r]||0===h[e-1][r]))return!0;return!1},t=function(){for(var r=0;r<S;r++)for(var e=S-1;e>=1;e--)if(h[e-1][r]>0&&(h[e][r]===h[e-1][r]||0===h[e][r]))return!0;return!1},n=function(){for(var r=0;r<S;r++)for(var e=S-1;e>=1;e--)if(h[r][e-1]>0&&(h[r][e]===h[r][e-1]||0===h[r][e]))return!0;return!1},o=function(){for(var r=0;r<S;r++)for(var e=1;e<S;e++)if(h[r][e]>0&&(h[r][e]===h[r][e-1]||0===h[r][e-1]))return!0;return!1};t()||o()||n()||e()||(s.classList.remove("hidden"),window.romoveEventListener("keydown",C)),38===r.keyCode?e()&&(L(),k(),p(),g()):40===r.keyCode?t()&&(q(),x(),p(),g()):37===r.keyCode?o()&&(A(),E(),p(),g()):39===r.keyCode&&n()&&(j(),M(),p(),g())}function L(){for(var r=0;r<S;r++){for(var e=!1,t=1;t<S;t++)0===h[t-1][r]&&h[t][r]>0&&(h[t-1][r]=h[t][r],h[t][r]=0,e=!0);if(e)return L()}}function k(){for(var r=0;r<S;r++)for(var e=1;e<S;e++)h[e-1][r]===h[e][r]&&h[e][r]>0&&(h[e-1][r]*=2,h[e][r]=0,w+=h[e-1][r],m.textContent=w,L())}function q(){for(var r=0;r<S;r++){for(var e=!1,t=S-1;t>=1;t--)0===h[t][r]&&h[t-1][r]>0&&(h[t][r]=h[t-1][r],h[t-1][r]=0,e=!0);if(e)return q()}}function x(){for(var r=0;r<S;r++)for(var e=S-1;e>=1;e--)h[e-1][r]===h[e][r]&&h[e][r]>0&&(h[e-1][r]*=2,h[e][r]=0,w+=h[e-1][r],m.textContent=w,q())}function A(){for(var r=0;r<S;r++){for(var e=!1,t=1;t<S;t++)0===h[r][t-1]&&h[r][t]>0&&(h[r][t-1]=h[r][t],h[r][t]=0,e=!0);if(e)return A()}}function E(){for(var r=0;r<S;r++)for(var e=1;e<S;e++)h[r][e-1]===h[r][e]&&h[r][e]>0&&(h[r][e-1]*=2,h[r][e]=0,w+=h[r][e-1],m.textContent=w,A())}function j(){for(var r=0;r<S;r++){for(var e=!1,t=S-1;t>=1;t--)0===h[r][t]&&h[r][t-1]>0&&(h[r][t]=h[r][t-1],h[r][t-1]=0,e=!0);if(e)return j()}}function M(){for(var r=0;r<S;r++)for(var e=S-1;e>=1;e--)h[r][e-1]===h[r][e]&&h[r][e]>0&&(h[r][e-1]*=2,h[r][e]=0,w+=h[r][e-1],m.textContent=w,j(r,e))}b(S),d.addEventListener("click",function(r){d.remove(),v.append(y),u.classList.add("hidden"),p(),p(),g(),window.addEventListener("keydown",C)}),y.addEventListener("click",function(r){s.classList.add("hidden"),w=0,m.textContent=w,b(S),p(),p(),g(),window.addEventListener("keydown",C)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.7805ba73.js.map