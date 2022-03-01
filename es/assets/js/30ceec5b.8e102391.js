"use strict";(self.webpackChunkjamswiki=self.webpackChunkjamswiki||[]).push([[418],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4971:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return l},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:2},s="Creando un proyecto",p={unversionedId:"tutorial-basics/creating-a-project",id:"tutorial-basics/creating-a-project",title:"Creando un proyecto",description:"La primera vez que ejecutes JAMS se mostrar\xe1 la siguiente ventana:",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorial-basics/creating-a-project.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/creating-a-project",permalink:"/es/docs/tutorial-basics/creating-a-project",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/creating-a-project.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Instalaci\xf3n",permalink:"/es/docs/tutorial-basics/installation"}},u={},l=[],m={toc:l};function d(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creando-un-proyecto"},"Creando un proyecto"),(0,o.kt)("p",null,"La primera vez que ejecutes JAMS se mostrar\xe1 la siguiente ventana:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Main Window",src:r(2890).Z,width:"1000",height:"600"})),(0,o.kt)("p",null,"Aqu\xed podemos encontrarnos cuatro apartados:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Proyectos"),": en esta ventana podemos encontrar los proyectos m\xe1s recientes. Tambi\xe9n podremos abrir un proyecto ya\nexistente."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Nuevo proyecto"),": permite crear nuevos proyectos."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Configuraci\xf3n"),": permite configurar JAMS antes de abrir un proyecto."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Acerca de"),": muestra informaci\xf3n b\xe1sica sobre JAMS.")),(0,o.kt)("p",null,'Si seleccionamos la pesta\xf1a "',(0,o.kt)("strong",{parentName:"p"},"nuevo proyecto"),'" aparecer\xe1 la siguiente ventana:'),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Main Window New Project",src:r(9934).Z,width:"1000",height:"600"})),(0,o.kt)("p",null,"Aqu\xed podremos crear nuestro primero proyecto."),(0,o.kt)("p",null,'Lo primero que debemos hacer es seleccionar el tipo de proyecto que queremos. Por defecto, JAMS incluye \xfanicamente el\ntipo de proyecto "MIPS". Los plugins pueden incorporar nuevos tipos de proyectos.'),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Par\xe1metros inv\xe1lidos")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"JAMS no permitir\xe1 crear un proyecto si alguno de los par\xe1metros de configuraci\xf3n no es v\xe1lido. Los par\xe1metros no v\xe1lidos\nson mostrados en rojo."))),(0,o.kt)("p",null,'Al pulsar "crear", JAMS crear\xe1 el proyecto y nos trasladar\xe1 al entorno de desarrollo.'),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Empty project",src:r(9234).Z,width:"1200",height:"800"})))}d.isMDXComponent=!0},9234:function(e,t,r){t.Z=r.p+"assets/images/emptyProject-es-513f96a3bb0a880c426f991a446eadee.png"},2890:function(e,t,r){t.Z=r.p+"assets/images/mainWindow-es-8abfa81f0a3519b62dfb8be987379a16.png"},9934:function(e,t,r){t.Z=r.p+"assets/images/mainWindowNewProject-es-ed965cc3a938e3a7ac3cb5b14539877d.png"}}]);