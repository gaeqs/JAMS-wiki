"use strict";(self.webpackChunkjamswiki=self.webpackChunkjamswiki||[]).push([[50],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),p=i,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5360:function(e,t,r){r.d(t,{Z:function(){return g}});var n=r(7294),i=r(9960),a=r(5450),o=r(6010),c="cardContainer_woeA",u="cardContainerLink_iOSj",s="cardTitle_pNjP",l="cardDescription_qC_k",m=r(3919),d=r(5999);function p(e){var t=e.href,r=e.children,a=(0,o.Z)("card margin-bottom--lg padding--lg",c,t&&u);return t?n.createElement(i.Z,{href:t,className:a},r):n.createElement("div",{className:a},r)}function f(e){var t=e.href,r=e.icon,i=e.title,a=e.description;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s),title:i},r," ",i),n.createElement("div",{className:(0,o.Z)("text--truncate",l),title:a},a))}function y(e){var t=e.item,r=(0,a.Wl)(t);return n.createElement(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})})}function b(e){var t,r=e.item,i=(0,m.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,a.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(f,{href:r.href,icon:i,title:r.label,description:null==o?void 0:o.description})}function v(e){var t=e.item;switch(t.type){case"link":return n.createElement(b,{item:t});case"category":return n.createElement(y,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.items;return n.createElement("div",{className:"row"},t.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6"},n.createElement(v,{item:e}))})))}},4643:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},assets:function(){return d},toc:function(){return p},default:function(){return y}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=r(5360),c=r(5450),u=["components"],s={},l="Empezando",m={unversionedId:"tutorial-basics/index",id:"tutorial-basics/index",title:"Empezando",description:"",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tutorial-basics/index.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/",permalink:"/es/docs/tutorial-basics/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Introducci\xf3n",permalink:"/es/docs/intro"},next:{title:"Instalaci\xf3n",permalink:"/es/docs/tutorial-basics/installation"}},d={},p=[],f={toc:p};function y(e){var t=e.components,r=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"empezando"},"Empezando"),(0,a.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);