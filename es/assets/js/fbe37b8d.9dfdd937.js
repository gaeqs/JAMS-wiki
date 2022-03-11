"use strict";(self.webpackChunkjamswiki=self.webpackChunkjamswiki||[]).push([[261],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1329:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return d},toc:function(){return u},default:function(){return m}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],s={sidebar_position:3},c="Estructura del editor",l={unversionedId:"tutorial-basics/editor-structure",id:"tutorial-basics/editor-structure",title:"Estructura del editor",description:"La interfaz del editor de JAMS es muy similar a las interfaces de los IDEs m\xe1s modernos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorial-basics/editor-structure.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/editor-structure",permalink:"/es/docs/tutorial-basics/editor-structure",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/editor-structure.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Creando un proyecto",permalink:"/es/docs/tutorial-basics/creating-a-project"},next:{title:"Creando una aplicaci\xf3n",permalink:"/es/docs/tutorial-basics/creating-an-application"}},d={},u=[{value:"Nodos",id:"nodos",level:2},{value:"Men\xfa superior",id:"men\xfa-superior",level:2},{value:"Proyectos abiertos",id:"proyectos-abiertos",level:2},{value:"Secciones del proyecto",id:"secciones-del-proyecto",level:2},{value:"Barra inferior",id:"barra-inferior",level:2}],p={toc:u};function m(e){var t=e.components,s=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"estructura-del-editor"},"Estructura del editor"),(0,o.kt)("p",null,"La interfaz del editor de JAMS es muy similar a las interfaces de los IDEs m\xe1s modernos."),(0,o.kt)("h2",{id:"nodos"},"Nodos"),(0,o.kt)("p",null,"Todas las herramientas est\xe1n encapsuladas en ",(0,o.kt)("strong",{parentName:"p"},"nodos"),". Cada nodo se puede desplegar en los laterales del editor. M\xe1s\nconcretamente, se pueden desplegar dos nodos a cada lado del editor."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Editor",src:a(9234).Z,width:"1200",height:"800"})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Desplegar en una ventana")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Los nodos tambi\xe9n se pueden configurar para que se desplieguen en una ventana aparte. Esto permite poder desplegar un\nn\xfamero indefinido de nodos al mismo tiempo."),(0,o.kt)("p",{parentName:"div"},"Usa el bot\xf3n secundario del rat\xf3n en un nodo para elegir su modo de despliegue."))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Editor",src:a(6475).Z,width:"1196",height:"798"})),(0,o.kt)("h2",{id:"men\xfa-superior"},"Men\xfa superior"),(0,o.kt)("p",null,"El men\xfa superior del editor de JAMS funciona de manera id\xe9ntica a cualquier otro programa. Actualmente, encontramos\ncinco secciones en el men\xfa:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Archivo"),": nos permite crear o abrir nuevos proyectos, adem\xe1s de acceder a la configuraci\xf3n."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Editar"),": nos permite acceder a los comandos del editor de texto."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Simulaci\xf3n"),": nos permite acceder a los comandos de simulaci\xf3n."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Herramientas"),": nos permite habilitar o deshabilitar los nodos del editor o simulador."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ayuda"),": nos permite acceder a informaci\xf3n sobre JAMS.")),(0,o.kt)("h2",{id:"proyectos-abiertos"},"Proyectos abiertos"),(0,o.kt)("p",null,"Justo debajo del men\xfa superior nos encontramos la lista de proyectos abiertos. Cada proyecto est\xe1 representado por una\npesta\xf1a, lo que facilita cambiar f\xe1cilmente entre proyectos abiertos. Si cerramos la pesta\xf1a, cerramos el proyecto."),(0,o.kt)("p",null,"Si cerramos todos los proyectos, JAMS cerrar\xe1 el editor y nos trasladar\xe1 a la ventana de inicio."),(0,o.kt)("h2",{id:"secciones-del-proyecto"},"Secciones del proyecto"),(0,o.kt)("p",null,"Cada proyecto presenta una lista de pesta\xf1as con todas las secciones que tiene abiertas."),(0,o.kt)("p",null,"Normalmente, la primera pesta\xf1a representa el editor del proyecto, mientras que las siguientes representaran las\nsimulaciones que se vayan creando."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Editor and its simulations",src:a(1131).Z,width:"1200",height:"800"})),(0,o.kt)("p",null,"Cada secci\xf3n tiene su propia ",(0,o.kt)("strong",{parentName:"p"},"barra de herramientas"),". Esta barra est\xe1 situada a la izquierda de la lista de secciones.\nEsta barra permite ejecutar acciones relacionadas con la secci\xf3n actual."),(0,o.kt)("h2",{id:"barra-inferior"},"Barra inferior"),(0,o.kt)("p",null,"La secci\xf3n inferior del editor es com\xfan a todas las secciones. En esta, se informa del \xfaltimo mensaje escrito en el\ninforme. A la izquierda tambi\xe9n se muestra la memoria que est\xe1 usando actualmente JAMS."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Recolector de basura")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"JAMS est\xe1 creado en Java, por lo que usa un recolector de basura. Podemos forzar el paso del recolector de basura\npulsando el panel que informa sobre el uso de memoria."))))}m.isMDXComponent=!0},1131:function(e,t,a){t.Z=a.p+"assets/images/assembledProject-es-c63cf6b59e18d1d692d3eb1d282daa59.png"},6475:function(e,t,a){t.Z=a.p+"assets/images/detachedNodes-es-0bd8d1292dd902b819f0dfbbeadb3af5.png"},9234:function(e,t,a){t.Z=a.p+"assets/images/emptyProject-es-d4af416c1b45273e55605e3ac2d36e63.png"}}]);