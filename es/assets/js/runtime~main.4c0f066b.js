!function(){"use strict";var e,t,n,r,f,o={},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={id:e,loaded:!1,exports:{}};return o[e].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=o,i.c=a,e=[],i.O=function(t,n,r,f){if(!n){var o=1/0;for(b=0;b<e.length;b++){n=e[b][0],r=e[b][1],f=e[b][2];for(var a=!0,u=0;u<n.length;u++)(!1&f||o>=f)&&Object.keys(i.O).every((function(e){return i.O[e](n[u])}))?n.splice(u--,1):(a=!1,f<o&&(o=f));if(a){e.splice(b--,1);var c=r();void 0!==c&&(t=c)}}return t}f=f||0;for(var b=e.length;b>0&&e[b-1][2]>f;b--)e[b]=e[b-1];e[b]=[n,r,f]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var f=Object.create(null);i.r(f);var o={};t=t||[null,n({}),n([]),n(n)];for(var a=2&r&&e;"object"==typeof a&&!~t.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(t){o[t]=function(){return e[t]}}));return o.default=function(){return e},i.d(f,o),f},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))},i.u=function(e){return"assets/js/"+({21:"1974396f",50:"0679c798",53:"935f2afb",195:"c4f5d8e4",205:"95c68178",261:"fbe37b8d",269:"8853b62a",297:"6a3f3f83",384:"2eab26a5",418:"30ceec5b",514:"1be78505",542:"a3b49b7f",608:"9e4087bc",648:"cd50ab1a",685:"359fb69f",745:"fdfb05f5",748:"a840e825",776:"7f14dab7",799:"feb016a2",822:"b36bfa5e",855:"d515303d",918:"17896441",958:"5958834b",965:"2bba4f98"}[e]||e)+"."+{21:"0c66d2e4",50:"87478fdc",53:"38e58125",75:"15488918",195:"d931dd25",205:"45bd860a",261:"e073732a",269:"1fcdc39f",297:"fe6da911",384:"dd640dfb",418:"d31606da",514:"391ed7d7",542:"ed116b38",608:"4135fdeb",648:"265b4637",685:"95b68ac9",745:"2fd456fe",748:"1f8d6b29",776:"47b57f7f",799:"99620387",822:"dfe52dbc",855:"7eddb537",918:"faf304cc",958:"b7ee06e0",965:"f5405550"}[e]+".js"},i.miniCssF=function(e){},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},f="jamswiki:",i.l=function(e,t,n,o){if(r[e])r[e].push(t);else{var a,u;if(void 0!==n)for(var c=document.getElementsByTagName("script"),b=0;b<c.length;b++){var d=c[b];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==f+n){a=d;break}}a||(u=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",f+n),a.src=e),r[e]=[t];var l=function(t,n){a.onerror=a.onload=null,clearTimeout(s);var f=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),f&&f.forEach((function(e){return e(n)})),t)return t(n)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),u&&document.head.appendChild(a)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/es/",i.gca=function(e){return e={17896441:"918","1974396f":"21","0679c798":"50","935f2afb":"53",c4f5d8e4:"195","95c68178":"205",fbe37b8d:"261","8853b62a":"269","6a3f3f83":"297","2eab26a5":"384","30ceec5b":"418","1be78505":"514",a3b49b7f:"542","9e4087bc":"608",cd50ab1a:"648","359fb69f":"685",fdfb05f5:"745",a840e825:"748","7f14dab7":"776",feb016a2:"799",b36bfa5e:"822",d515303d:"855","5958834b":"958","2bba4f98":"965"}[e]||e,i.p+i.u(e)},function(){var e={303:0,532:0};i.f.j=function(t,n){var r=i.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var f=new Promise((function(n,f){r=e[t]=[n,f]}));n.push(r[2]=f);var o=i.p+i.u(t),a=new Error;i.l(o,(function(n){if(i.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var f=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+f+": "+o+")",a.name="ChunkLoadError",a.type=f,a.request=o,r[1](a)}}),"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,f,o=n[0],a=n[1],u=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(u)var b=u(i)}for(t&&t(n);c<o.length;c++)f=o[c],i.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return i.O(b)},n=self.webpackChunkjamswiki=self.webpackChunkjamswiki||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}()}();