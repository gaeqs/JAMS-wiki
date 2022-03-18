"use strict";(self.webpackChunkjamswiki=self.webpackChunkjamswiki||[]).push([[622],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=u(r),p=o,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5360:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(7294),o=r(9960),i=r(5450),c=r(6010),a="cardContainer_woeA",s="cardContainerLink_iOSj",u="cardTitle_pNjP",l="cardDescription_qC_k",d=r(3919),m=r(5999);function p(e){var t=e.href,r=e.children,i=(0,c.Z)("card margin-bottom--lg padding--lg",a,t&&s);return t?n.createElement(o.Z,{href:t,className:i},r):n.createElement("div",{className:i},r)}function f(e){var t=e.href,r=e.icon,o=e.title,i=e.description;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",u),title:o},r," ",o),n.createElement("div",{className:(0,c.Z)("text--truncate",l),title:i},i))}function y(e){var t=e.item,r=(0,i.Wl)(t);return n.createElement(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})})}function v(e){var t,r=e.item,o=(0,d.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(f,{href:r.href,icon:o,title:r.label,description:null==c?void 0:c.description})}function b(e){var t=e.item;switch(t.type){case"link":return n.createElement(v,{item:t});case"category":return n.createElement(y,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.items;return n.createElement("div",{className:"row"},t.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6"},n.createElement(b,{item:e}))})))}},5671:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return d},assets:function(){return m},toc:function(){return p},default:function(){return y}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),c=r(5360),a=r(5450),s=["components"],u={},l="Nodes",d={unversionedId:"nodes/index",id:"nodes/index",title:"Nodes",description:"",source:"@site/docs/nodes/index.mdx",sourceDirName:"nodes",slug:"/nodes/",permalink:"/docs/nodes/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nodes/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Simulator's structure",permalink:"/docs/tutorial-basics/simulator-structure"},next:{title:"Explorer",permalink:"/docs/nodes/explorer"}},m={},p=[],f={toc:p};function y(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nodes"},"Nodes"),(0,i.kt)(c.Z,{items:(0,a.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);