"use strict";(self.webpackChunkjamswiki=self.webpackChunkjamswiki||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,g=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Introduction",u={unversionedId:"intro",id:"intro",title:"Introduction",description:"JAMS is a modern IDE specialized in assembly languages and, specifically, in the MIPS assembly language. You can extend",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",next:{title:"Getting Started",permalink:"/docs/tutorial-basics/"}},c={},p=[{value:"Goals",id:"goals",level:2},{value:"Non-goals",id:"non-goals",level:2},{value:"Design",id:"design",level:2}],f={toc:p};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"JAMS is a modern IDE specialized in assembly languages and, specifically, in the MIPS assembly language. You can extend\nthe functionalities of JAMS using plugins."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Jams",src:n(4023).Z,width:"1200",height:"800"})),(0,o.kt)("h2",{id:"goals"},"Goals"),(0,o.kt)("p",null,"JAMS has the following goals:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a modern IDE for assembly languages, focusing in the MIPS assembly language."),(0,o.kt)("li",{parentName:"ul"},"Create a simulator able to run most of the valid MIPS code."),(0,o.kt)("li",{parentName:"ul"},"Create a complex personalization system, allowing the user to change the appearance of the application."),(0,o.kt)("li",{parentName:"ul"},"Allow users to expand the capabilities of the IDE using plugins."),(0,o.kt)("li",{parentName:"ul"},"Keep the user interface simple and suitable for teaching.")),(0,o.kt)("h2",{id:"non-goals"},"Non-goals"),(0,o.kt)("p",null,"JAMS is not intended to reach the following goals:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It's not a goal to create a complex IDE with support for a wide variety of programming languages."),(0,o.kt)("li",{parentName:"ul"},"It's not a goal to create a developing environment that can run code from real MIPS ecosystems.")),(0,o.kt)("h2",{id:"design"},"Design"),(0,o.kt)("p",null,"JAMS is a ",(0,o.kt)("strong",{parentName:"p"},"project"),"-based IDE. A project is conformed of a folder and the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Project type"),': specifies the project type. Currently, it can only have the value "MIPS" without plugins.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Project properties"),": values used by the project type. These values configure general aspects of a project."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Configurations"),": a configuration specifies the properties of an ",(0,o.kt)("strong",{parentName:"li"},"execution"),". In other words, it configures the\nsimulator. A project may contain several configurations.")))}d.isMDXComponent=!0},4023:function(e,t,n){t.Z=n.p+"assets/images/JAMS-1-7a931b2079ed8dcefbd24c4789095255.png"}}]);