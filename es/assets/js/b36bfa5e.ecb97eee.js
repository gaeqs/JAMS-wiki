"use strict";(self.webpackChunkjamswiki=self.webpackChunkjamswiki||[]).push([[4822],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3488:function(e,t,n){n.d(t,{y:function(){return c},Z:function(){return d}});var a=n(7462),r=n(7294),o={downloads:"downloads_mN2v",downloadImageDiv:"downloadImageDiv_Rh0S",downloadImage:"downloadImage_l5VF"},i=n(5999),s=[{title:"Windows",image:"/img/windows.png",download:"https://github.com/gaeqs/JAMS/releases/download/0.4-BETA-PRE-1/JAMS-0.4.exe"},{title:"MacOS",image:"/img/mac.png",download:"https://github.com/gaeqs/JAMS/releases/download/0.4-BETA-PRE-1/JAMS-macos.zip"},{title:"Ubuntu",image:"/img/ubuntu.png",download:"https://github.com/gaeqs/JAMS/releases/download/0.4-BETA-PRE-1/jams_0.4.BETA.SNAPSHOT-1_amd64.deb"},{title:"Other",image:"/img/java.png",download:"https://github.com/gaeqs/JAMS/releases/download/0.4-BETA-PRE-1/JAMS-0.4.BETA.SNAPSHOT.jar"}];function l(e){var t=e.title,n=e.image,a=e.download;return r.createElement("div",{className:["col",o.downloadImageDiv].join(" ")},r.createElement("a",{href:a},r.createElement("img",{className:o.downloadImage,src:n,alt:t})))}function c(){return r.createElement("div",{className:"row"},s.map((function(e,t){return r.createElement(l,(0,a.Z)({key:t,idx:t},e))})))}function d(){return r.createElement("section",{className:o.downloads},r.createElement("div",{className:"container"},r.createElement("h1",{id:"downloads"},r.createElement(i.Z,{id:"index.downloads.title"},"Downloads:")),r.createElement(c,null)))}},4499:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},assets:function(){return u},toc:function(){return m},default:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(3488),s=["components"],l={sidebar_position:1},c="Instalaci\xf3n",d={unversionedId:"tutorial-basics/installation",id:"tutorial-basics/installation",title:"Instalaci\xf3n",description:"JAMS est\xe1 disponible en todos los sistemas operativos que soportan Java y JavaFX. Un instalador est\xe1 disponible",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorial-basics/installation.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/installation",permalink:"/es/docs/tutorial-basics/installation",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/installation.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Empezando",permalink:"/es/docs/tutorial-basics/"},next:{title:"Creando un proyecto",permalink:"/es/docs/tutorial-basics/creating-a-project"}},u={},m=[],p={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"instalaci\xf3n"},"Instalaci\xf3n"),(0,o.kt)("p",null,"JAMS est\xe1 disponible en todos los sistemas operativos que soportan Java y JavaFX. Un instalador est\xe1 disponible\npara Windows, Mac y Ubuntu/Debian."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\xa1Cuidado!")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Si prefieres utilizar el jar con todas las dependencias, debes instalar Java 17."))),(0,o.kt)(i.y,{mdxType:"HomepageDownloadsSimple"}))}f.isMDXComponent=!0}}]);