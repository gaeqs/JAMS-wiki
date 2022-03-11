"use strict";(self.webpackChunkjamswiki=self.webpackChunkjamswiki||[]).push([[799],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),p=n,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return r?a.createElement(f,o(o({ref:t},c),{},{components:r})):a.createElement(f,o({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7904:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return d},default:function(){return p}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),o=["components"],s={sidebar_position:6},l="Estructura del simulador",u={unversionedId:"tutorial-basics/simulator-structure",id:"tutorial-basics/simulator-structure",title:"Estructura del simulador",description:"La interfaz del simulador es muy similar a la interfaz del editor.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorial-basics/simulator-structure.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/simulator-structure",permalink:"/es/docs/tutorial-basics/simulator-structure",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/simulator-structure.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Configuraciones",permalink:"/es/docs/tutorial-basics/configurations"},next:{title:"Nodos",permalink:"/es/docs/nodes/"}},c={},d=[{value:"Nodos",id:"nodos",level:2},{value:"Barra de herramientas",id:"barra-de-herramientas",level:2}],m={toc:d};function p(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"estructura-del-simulador"},"Estructura del simulador"),(0,i.kt)("p",null,"La interfaz del simulador es muy similar a la interfaz del editor."),(0,i.kt)("p",null,"Para crear una simulaci\xf3n, pulsa el bot\xf3n ",(0,i.kt)("inlineCode",{parentName:"p"},"ensamblar")," \ud83d\udd28 en la ",(0,i.kt)("strong",{parentName:"p"},"barra de herramientas")," del editor."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Configuraciones")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Necesitas seleccionar una configuraci\xf3n antes de crear una simulaci\xf3n."))),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Simulator",src:r(3553).Z,width:"1200",height:"800"})),(0,i.kt)("h2",{id:"nodos"},"Nodos"),(0,i.kt)("p",null,"Igual que en el editor, la interfaz del simulador est\xe1 basada en nodos. Estos nodos se pueden desplegar, mover y\nconfigurar como desees."),(0,i.kt)("h2",{id:"barra-de-herramientas"},"Barra de herramientas"),(0,i.kt)("p",null,"La ",(0,i.kt)("strong",{parentName:"p"},"barra de herramientas")," del simulador contiene los botones que permite controlar la ejecuci\xf3n del c\xf3digo."),(0,i.kt)("p",null,"Actualmente, existen cuatro botones en la barra de herramientas:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ejecutar todas las instrucciones"),": ejecuta todo el c\xf3digo posible. Este bot\xf3n se convierte en el bot\xf3n 'parar' cuando\nel c\xf3digo se est\xe1 ejecutando."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ejecutar un paso"),": ejecuta \xfanicamente un ciclo del simulador."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Deshacer un paso"),": deshace un ciclo del simulador. Este bot\xf3n estar\xe1 deshabilitado si los eventos est\xe1n desactivados\nen la configuraci\xf3n. Tambi\xe9n requiere que la opci\xf3n ",(0,i.kt)("em",{parentName:"li"},"permitir deshacer pasos")," est\xe9 habilitada en la configuraci\xf3n."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Reiniciar"),": reinicia el simulador.")),(0,i.kt)("p",null,"En la barra de herramientas tambi\xe9n encontramos una barra deslizadora. Esta barra deslizadora permite regular el\n",(0,i.kt)("strong",{parentName:"p"},"retraso por ciclo")," del simulador."))}p.isMDXComponent=!0},3553:function(e,t,r){t.Z=r.p+"assets/images/simulator-es-a676d2b0c916302bbfc65f000992ec70.png"}}]);