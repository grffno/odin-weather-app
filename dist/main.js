(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(81),r=t.n(o),i=t(645),a=t.n(i),c=t(667),s=t.n(c),d=new URL(t(20),t.b),l=a()(r()),u=s()(d);l.push([n.id,`/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n/* */\n@font-face {\n    font-family: 'Open Sans', sans-serif;\n    src: url(${u}) format('truetype');\n}\n\n:root {\n    font-family: 'Open Sans', sans-serif;\n    font-size: 62.5%;\n    --backgroundcolor: rgb(242, 242, 242);\n}\n\nhtml,\nbody {\n    font-size: 1.6rem;\n    height: 100%;\n}\n\n.content {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n\n.units-btn {\n    position: absolute;\n    top: 1.0rem;\n    right: 1.0rem;\n}\n\n.inner-content {\n    width: 70vw;\n    height: auto;\n    margin-top: 10vh;\n}\n\n.user-input {\n    display: flex;\n}\n\n.user-input input {\n    width: 100%;\n    height: 3.6rem;\n    font-size: 2.4rem;\n}\n\n.user-input button {\n    font-size: 2.4rem;\n}\n\n.weather {\n    margin-top: 3.6rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.location {\n    font-size: 2.4rem;\n}\n\n.main-display {\n    display: flex;\n    align-items: center;\n    margin: 1.6rem 0;\n}\n\n.temperature {\n    font-size: 4.8rem;\n}`,""]);const p=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},20:(n,e,t)=>{n.exports=t.p+"071a1becc7f00e33cc5b.ttf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!n;)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=(()=>{const n=document.createElement("button");return n.classList.add("units-btn"),n.textContent="°C",n.addEventListener("click",(function(e){e.preventDefault(),"°C"===n.textContent?n.textContent="°F":n.textContent="°C"})),{getBtn:()=>n,getUnits:()=>n.textContent}})();!function(){const n=document.querySelector(".content"),e=document.createElement("div");e.classList.add("inner-content");const t=document.createElement("form");t.classList.add("user-input");const o=document.createElement("label");o.for="location",o.textContent="City or Zipcode";const r=document.createElement("input");r.type="text",r.id=o.for,r.name=o.for,r.placeholder="City or Zipcode",r.required=!0;const i=document.createElement("button");i.textContent="Go";const a=document.createElement("div"),c=h.getBtn();t.appendChild(r),t.appendChild(i),e.appendChild(t),e.appendChild(a),n.appendChild(c),n.appendChild(e),function(n,e,t){e.addEventListener("click",(async function(e){e.preventDefault(),function(n){n.innerHTML=""}(t);const o=await async function(n){const e=`https://api.weatherapi.com/v1/current.json?key=d614b942c9e94ad39b0185909231807&q=${n}`,t=await fetch(e),o=await t.json();return console.log(o),o}(n.value),r=await function(n){return{location:n.location.name,temp_f:`${n.current.temp_f}°F`,temp_c:`${n.current.temp_c}°C`,condition:n.current.condition.text,condition_img:`http:${n.current.condition.icon}`}}(o);!function(n,e){e.classList.add("weather");const t=document.createElement("div");t.classList.add("location"),t.textContent=n.location;const o=document.createElement("div");o.classList.add("temperature"),"°F"===h.getUnits()?o.textContent=n.temp_f:o.textContent=n.temp_c;const r=document.createElement("img");r.classList.add("icon"),r.src=n.condition_img;const i=document.createElement("div");i.classList.add("main-display"),i.appendChild(o),i.appendChild(r);const a=document.createElement("div");a.classList.add("condition"),a.textContent=n.condition,e.appendChild(t),e.appendChild(i),e.appendChild(a)}(r,t)}))}(r,i,a)}()})()})();