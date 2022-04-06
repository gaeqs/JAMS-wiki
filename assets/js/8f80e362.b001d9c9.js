"use strict";(self.webpackChunkjamswiki=self.webpackChunkjamswiki||[]).push([[225],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4466:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={sidebar_position:6},l="Simulator's structure",u={unversionedId:"tutorial-basics/simulator-structure",id:"tutorial-basics/simulator-structure",title:"Simulator's structure",description:"The simulator's interface is very similar to the editor's interface.",source:"@site/docs/tutorial-basics/simulator-structure.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/simulator-structure",permalink:"/docs/tutorial-basics/simulator-structure",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/simulator-structure.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Configurations",permalink:"/docs/tutorial-basics/configurations"},next:{title:"Nodes",permalink:"/docs/nodes/"}},c={},p=[{value:"Nodes",id:"nodes",level:2},{value:"Toolbar",id:"toolbar",level:2}],m={toc:p};function d(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"simulators-structure"},"Simulator's structure"),(0,i.kt)("p",null,"The simulator's interface is very similar to the editor's interface."),(0,i.kt)("p",null,"You can creat a simulation clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," \ud83d\udd28 button on the editor's ",(0,i.kt)("strong",{parentName:"p"},"toolbar"),"."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"A configuration is required")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You require one configuration selected to create a simulation."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Simulator",src:r(799).Z,width:"1200",height:"800"})),(0,i.kt)("h2",{id:"nodes"},"Nodes"),(0,i.kt)("p",null,"Just like in the editor, all simulator's tools are encapsulated in ",(0,i.kt)("strong",{parentName:"p"},"nodes"),". These nodes can be unfolded, moved or\nconfigured as you wish."),(0,i.kt)("h2",{id:"toolbar"},"Toolbar"),(0,i.kt)("p",null,"The simulator's ",(0,i.kt)("strong",{parentName:"p"},"toolbar")," contains the buttons required to manage the simulator's execution."),(0,i.kt)("p",null,"There are four buttons in the toolbar:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Execute all instructions"),": runs the simulator. This button is transformed into the ",(0,i.kt)("inlineCode",{parentName:"li"},"stop")," button when the simulator\nis running."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Execute one step"),": executes one simulator's cycle."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Undo one step"),": undoes one simulator's cycle. This button will be disabled when the events are disabled in the\nconfiguration. This option also requires that the ",(0,i.kt)("em",{parentName:"li"},"allow undoing steps")," is enabled in the configuration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Reset"),": resets the simulation.")),(0,i.kt)("p",null,"We can also find a slider in the toolbar. This slider allows to control the delay per cycle of the simulator."))}d.isMDXComponent=!0},799:function(e,t,r){t.Z=r.p+"assets/images/simulator-7baac60afcee3feeb287444cde3fef14.png"}}]);