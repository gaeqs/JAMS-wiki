"use strict";(self.webpackChunkjamswiki=self.webpackChunkjamswiki||[]).push([[871],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7718:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return s},toc:function(){return f},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:8},c="Flow",u={unversionedId:"nodes/flow",id:"nodes/flow",title:"Flow",description:"The flow tool shows the flow of the simulation's execution.",source:"@site/docs/nodes/flow.md",sourceDirName:"nodes",slug:"/nodes/flow",permalink:"/docs/nodes/flow",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nodes/flow.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docsSidebar",previous:{title:"Caches",permalink:"/docs/nodes/caches"},next:{title:"Information",permalink:"/docs/nodes/information"}},s={},f=[{value:"Functionalities",id:"functionalities",level:2},{value:"Cycle number",id:"cycle-number",level:3},{value:"Movement",id:"movement",level:3}],p={toc:f};function m(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"flow"},"Flow"),(0,i.kt)("p",null,"The flow tool shows the flow of the simulation's execution."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Flow",src:n(5674).Z,width:"1200",height:"817"})),(0,i.kt)("h2",{id:"functionalities"},"Functionalities"),(0,i.kt)("p",null,"The tool has a visual functionality: it does not allow editing any aspect of the simulation."),(0,i.kt)("p",null,"You can use the slider to change the column size."),(0,i.kt)("h3",{id:"cycle-number"},"Cycle number"),(0,i.kt)("p",null,"The visualizer represents a maximum number of instructions. This number is by default 100, and it can be changed in the\nconfiguration."),(0,i.kt)("p",null,"The cycle number at the upper-right of the tool represents the ",(0,i.kt)("strong",{parentName:"p"},"first cycle")," represented by the tool."),(0,i.kt)("p",null,"Each column contains a number that represents their cycle regarding the first cycle."),(0,i.kt)("h3",{id:"movement"},"Movement"),(0,i.kt)("p",null,"You can move through the visualizer dragging the mouse."))}m.isMDXComponent=!0},5674:function(e,t,n){t.Z=n.p+"assets/images/flow-be303e7e1081fe6c15a8240bf5aeb570.png"}}]);