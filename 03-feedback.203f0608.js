!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return s.Date.now()};function g(e,t,n){var r,i,u,a,f,l,c=0,s=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(o);function S(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function O(e){return c=e,f=setTimeout(N,t),s?S(e):a}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function N(){var e=p();if(j(e))return h(e);f=setTimeout(N,function(e){var n=t-(e-l);return d?m(n,u-(e-c)):n}(e))}function h(e){return f=void 0,g&&r?S(e):(r=i=void 0,a)}function T(){var e=p(),n=j(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return O(l);if(d)return f=setTimeout(N,t),S(l)}return void 0===f&&(f=setTimeout(N,t)),a}return t=y(t)||0,b(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(y(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?a:h(p())},T}function b(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=b(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var l=u.test(e);return l||a.test(e)?f(e.slice(2),l?2:8):i.test(e)?NaN:+e}var S=document.querySelector(".feedback-form"),O=document.querySelector("input"),j=document.querySelector("textarea"),N="feedback-form-state";S.addEventListener("input",(function(){console.log("input"),h=localStorage.getItem(N),T=JSON.parse(h),console.log(T),localStorage.setItem(N,JSON.stringify({email:O.value,message:j.value}))})),S.addEventListener("submit",(function(e){e.preventDefault(),console.log("submit"),h=localStorage.getItem(N),T=JSON.parse(h),localStorage.clear(),O.value="",j.value=""}));var h=localStorage.getItem(N),T=JSON.parse(h);h=localStorage.getItem(N),T=JSON.parse(h),console.log(T),T&&(O.value=T.email||"",j.value=T.message||"")}();
//# sourceMappingURL=03-feedback.203f0608.js.map