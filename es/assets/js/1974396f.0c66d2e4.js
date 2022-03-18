"use strict";(self.webpackChunkjamswiki=self.webpackChunkjamswiki||[]).push([[21],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return f}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return r?t.createElement(m,i(i({ref:n},s),{},{components:r})):t.createElement(m,i({ref:n},s))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8528:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return s},toc:function(){return d},default:function(){return f}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:8},c="Flujo",u={unversionedId:"nodes/flow",id:"nodes/flow",title:"Flujo",description:'La herramienta "flujo" permite ver el flujo de ejecuci\xf3n del simulador.',source:"@site/i18n/es/docusaurus-plugin-content-docs/current/nodes/flow.md",sourceDirName:"nodes",slug:"/nodes/flow",permalink:"/es/docs/nodes/flow",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nodes/flow.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docsSidebar",previous:{title:"Cach\xe9s",permalink:"/es/docs/nodes/caches"},next:{title:"Informaci\xf3n",permalink:"/es/docs/nodes/information"}},s={},d=[{value:"Funcionalidades",id:"funcionalidades",level:2},{value:"N\xfamero de ciclo",id:"n\xfamero-de-ciclo",level:3},{value:"Movimiento",id:"movimiento",level:3}],p={toc:d};function f(e){var n=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flujo"},"Flujo"),(0,a.kt)("p",null,'La herramienta "flujo" permite ver el flujo de ejecuci\xf3n del simulador.'),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"Flow",src:r(6331).Z,width:"1200",height:"817"})),(0,a.kt)("h2",{id:"funcionalidades"},"Funcionalidades"),(0,a.kt)("p",null,"La herramienta tiene una funcionalidad puramente visual: no permite editar ning\xfan aspecto del simulador."),(0,a.kt)("p",null,"Podemos usar la barra deslizadora para cambiar el tama\xf1o de las columnas."),(0,a.kt)("h3",{id:"n\xfamero-de-ciclo"},"N\xfamero de ciclo"),(0,a.kt)("p",null,"El visualizador representa m\xe1ximo n\xfamero de instrucciones. Este n\xfamero es por defecto 100, y se puede cambiar en la\nconfiguraci\xf3n."),(0,a.kt)("p",null,"El n\xfamero de ciclo representado en la parte superior izquierda representa al ",(0,a.kt)("strong",{parentName:"p"},"primer ciclo")," representado por el\nvisualizador de flujo."),(0,a.kt)("p",null,"Cada columna contiene un n\xfamero que representa su ciclo con respecto al ciclo inicial."),(0,a.kt)("h3",{id:"movimiento"},"Movimiento"),(0,a.kt)("p",null,"Podemos desplazarnos por el visualizador arrastrando el rat\xf3n."))}f.isMDXComponent=!0},6331:function(e,n,r){n.Z=r.p+"assets/images/flow-es-e515ffc7cd737426538cff18c0b15da3.png"}}]);