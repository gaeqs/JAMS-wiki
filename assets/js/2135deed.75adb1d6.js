"use strict";(self.webpackChunkjamswiki=self.webpackChunkjamswiki||[]).push([[99],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7878:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:5},c="Configurations",l={unversionedId:"tutorial-basics/configurations",id:"tutorial-basics/configurations",title:"Configurations",description:"Configurations define how a project has to be simulated. A project can have several configurations. The user must",source:"@site/docs/tutorial-basics/configurations.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/configurations",permalink:"/docs/tutorial-basics/configurations",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/configurations.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Creating an application",permalink:"/docs/tutorial-basics/creating-an-application"},next:{title:"Simulator's structure",permalink:"/docs/tutorial-basics/simulator-structure"}},u={},p=[{value:"Syscalls",id:"syscalls",level:2},{value:"Bundles",id:"bundles",level:3},{value:"Caches",id:"caches",level:2}],d={toc:p};function m(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configurations"},"Configurations"),(0,r.kt)("p",null,"Configurations define how a project has to be simulated. A project can have several configurations. The user must\nspecify a configuration before they can create a simulation."),(0,r.kt)("p",null,"The current configuration can be changed on the ",(0,r.kt)("strong",{parentName:"p"},"toolbar")," of the project structure. Configurations can be edited\nclicking on the ",(0,r.kt)("inlineCode",{parentName:"p"},"configuration button")," \u2699."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Configurations&#39; menu",src:n(6970).Z,width:"900",height:"600"})),(0,r.kt)("p",null,"In this window we can create, delete, copy and edit configurations. All configurations will be saved automatically when\nthis window is closed."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Information about parameters")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The parameters contain descriptions about their effects in the simulation. Hover the mouse over a parameter\nto see its description."))),(0,r.kt)("h2",{id:"syscalls"},"Syscalls"),(0,r.kt)("p",null,"Configurations save the syscalls the simulation may use."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Configuration&#39;s syscalls",src:n(6170).Z,width:"900",height:"600"})),(0,r.kt)("p",null,"In this menu we can create, delete and edit syscalls."),(0,r.kt)("h3",{id:"bundles"},"Bundles"),(0,r.kt)("p",null,"If you need a common set of syscalls, you can load it using the button ",(0,r.kt)("inlineCode",{parentName:"p"},"load bundle")," and its combobox. By default, the\nloaded bundle is the one of the ",(0,r.kt)("strong",{parentName:"p"},"MARS")," simulator."),(0,r.kt)("h2",{id:"caches"},"Caches"),(0,r.kt)("p",null,"Just like syscalls, configurations define the caches the simulator will use."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"lazy",alt:"Configuration&#39;s caches",src:n(79).Z,width:"900",height:"600"})),(0,r.kt)("p",null,"In contrast to other simulators, JAMS's caches are completely integrated in the simulator, working as a wrapper of\nanother memory. This allows us to define ",(0,r.kt)("strong",{parentName:"p"},"several cache levels"),", acting one over another."),(0,r.kt)("p",null,"In the example of the image, the cache 0 acts as a wrapper of the cache 1, while the cache 1 acts as a wrapper of the\nmemory."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Cache types")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"JAMS lets define three cache types: direct mapping, associative mapping and set-associative mapping."),(0,r.kt)("p",{parentName:"div"},"All three types support both the ",(0,r.kt)("em",{parentName:"p"},"write-back")," mode and the ",(0,r.kt)("em",{parentName:"p"},"write-through")," mode."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Instruction access")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Caches are not affected by instruction fetches."))))}m.isMDXComponent=!0},79:function(e,t,n){t.Z=n.p+"assets/images/caches-630c1d7072b90d83884e20283bed8b83.png"},6970:function(e,t,n){t.Z=n.p+"assets/images/configurations-ce9e80f0a321d90beb27a87c235ce388.png"},6170:function(e,t,n){t.Z=n.p+"assets/images/syscalls-e2d3b569652edfa0be54c98ae847a685.png"}}]);