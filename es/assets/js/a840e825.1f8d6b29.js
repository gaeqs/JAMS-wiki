"use strict";(self.webpackChunkjamswiki=self.webpackChunkjamswiki||[]).push([[748],{3905:function(e,a,r){r.d(a,{Zo:function(){return m},kt:function(){return p}});var n=r(7294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function l(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=n.createContext({}),c=function(e){var a=n.useContext(s),r=a;return e&&(r="function"==typeof e?e(a):i(i({},a),e)),r},m=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(r),p=t,v=d["".concat(s,".").concat(p)]||d[p]||u[p]||o;return r?n.createElement(v,i(i({ref:a},m),{},{components:r})):n.createElement(v,i({ref:a},m))}));function p(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1231:function(e,a,r){r.r(a),r.d(a,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return m},toc:function(){return u},default:function(){return p}});var n=r(7462),t=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:4},s="Memoria",c={unversionedId:"nodes/memory",id:"nodes/memory",title:"Memoria",description:'La herramienta "memoria" permite visualizar la informaci\xf3n que contiene la memoria y las cach\xe9s de un simulador',source:"@site/i18n/es/docusaurus-plugin-content-docs/current/nodes/memory.md",sourceDirName:"nodes",slug:"/nodes/memory",permalink:"/es/docs/nodes/memory",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nodes/memory.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Informe",permalink:"/es/docs/nodes/log"},next:{title:"Cach\xe9s",permalink:"/es/docs/nodes/caches"}},m={},u=[{value:"Funcionalidades",id:"funcionalidades",level:2},{value:"Selecci\xf3n de memoria",id:"selecci\xf3n-de-memoria",level:3},{value:"Tipo de visualizaci\xf3n",id:"tipo-de-visualizaci\xf3n",level:3},{value:"Movimiento",id:"movimiento",level:3},{value:"Editar valores",id:"editar-valores",level:3}],d={toc:u};function p(e){var a=e.components,l=(0,t.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"memoria"},"Memoria"),(0,o.kt)("p",null,'La herramienta "memoria" permite visualizar la informaci\xf3n que contiene la memoria y las cach\xe9s de un simulador\nactualmente.'),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Memory",src:r(2935).Z,width:"1200",height:"800"})),(0,o.kt)("h2",{id:"funcionalidades"},"Funcionalidades"),(0,o.kt)("h3",{id:"selecci\xf3n-de-memoria"},"Selecci\xf3n de memoria"),(0,o.kt)("p",null,"El primer desplegable de la herramienta permite elegir qu\xe9 memoria se desea visualizar. La lista de memorias est\xe1\nordenada por nivel, siendo la primera memoria la cach\xe9 de nivel 1. Si la simulaci\xf3n no contiene ninguna cach\xe9, este\ndesplegable solo mostrar\xe1 la memoria principal."),(0,o.kt)("h3",{id:"tipo-de-visualizaci\xf3n"},"Tipo de visualizaci\xf3n"),(0,o.kt)("p",null,"El segundo desplegable contiene diferentes opciones en las que los datos de la memoria se puede ver."),(0,o.kt)("p",null,"Las opciones disponibles son las siguientes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Binario"),": muestra cada valor en binario."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Caracteres"),": muestra cada valor como un conjunto de cuatro caracteres ASCII."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Decimal"),": muestra cada valor en decimal. Esta es la opci\xf3n por defecto."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Coma flotante (doble precisi\xf3n)"),": muestra cada valor en coma flotante de doble precisi\xf3n. La parte m\xe1s\nrepresentativa es el valor de la siguiente direcci\xf3n de memoria."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Texto ingl\xe9s"),": muestra cada valor como un texto en ingl\xe9s."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Coma flotante"),": muestra cada valor en coma flotante."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hexadecimal"),": muestra cada valor en hexadecimal."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Long"),": muestra cada valor como un n\xfamero de 64 bits. La parte m\xe1s representativa es el valor de la siguiente\ndirecci\xf3n de memoria."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Octal"),": muestra cada valor en octal."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RGB"),": muestra cada valor como un color RGB. El cuarto m\xe1s representativo del valor queda en desuso."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"RGBA"),": muestra cada valor como un color RGBA."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Romano"),": muestra cada valor como un n\xfamero romano.")),(0,o.kt)("h3",{id:"movimiento"},"Movimiento"),(0,o.kt)("p",null,"Puedes moverte a trav\xe9s de la herramienta de diferentes maneras:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Seleccionando una secci\xf3n en el tercer desplegable."),(0,o.kt)("li",{parentName:"ul"},"Insertando una direcci\xf3n concreta."),(0,o.kt)("li",{parentName:"ul"},"Usando las flechas de movimiento.")),(0,o.kt)("h3",{id:"editar-valores"},"Editar valores"),(0,o.kt)("p",null,"Puedes editar cualquier valor de las memorias haciendo doble clic en su celda. El valor que puedes asignar puede estar\nrepresentado en binario, octal, decimal o hexadecimal."))}p.isMDXComponent=!0},2935:function(e,a,r){a.Z=r.p+"assets/images/memory-es-a7b47ff6fca330e4f0d86e6d17886f22.png"}}]);