"use strict";(self.webpackChunkjamswiki=self.webpackChunkjamswiki||[]).push([[668],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6430:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],a={sidebar_position:7},l="Console",u={unversionedId:"nodes/console",id:"nodes/console",title:"Console",description:"The console prints the application's messages and allows the user to send messages the simulation can interprete.",source:"@site/docs/nodes/console.md",sourceDirName:"nodes",slug:"/nodes/console",permalink:"/docs/nodes/console",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nodes/console.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"Lab",permalink:"/docs/nodes/lab"},next:{title:"Flow",permalink:"/docs/nodes/flow"}},c={},p=[{value:"Functionalities",id:"functionalities",level:2},{value:"Visualizer",id:"visualizer",level:3},{value:"Input",id:"input",level:3},{value:"Toolbar",id:"toolbar",level:3}],d={toc:p};function m(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"console"},"Console"),(0,i.kt)("p",null,"The console prints the application's messages and allows the user to send messages the simulation can interprete."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Console",src:n(5455).Z,width:"1200",height:"800"})),(0,i.kt)("h2",{id:"functionalities"},"Functionalities"),(0,i.kt)("p",null,"The console is the intermediate between the user and the application."),(0,i.kt)("h3",{id:"visualizer"},"Visualizer"),(0,i.kt)("p",null,"The visualizer shows all messages the application prints using syscalls.\nIt also shows the result of the execution when the simulation finishes.\xa1"),(0,i.kt)("h3",{id:"input"},"Input"),(0,i.kt)("p",null,"The console allows the user to send messages to the application using the text field at the bottom of the tool.\nMessages will be stored in a ",(0,i.kt)("strong",{parentName:"p"},"message queue")," until the simulation requires them."),(0,i.kt)("p",null,"The user can delete messages from the queue clicking on them."),(0,i.kt)("h3",{id:"toolbar"},"Toolbar"),(0,i.kt)("p",null,"The console has three buttons used to perform several actions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"C"),": clears the console."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ci"),": clears the message queue."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u25bc"),": when enabled, the console will scroll at the end of the visualizer when a new message is printed.")))}m.isMDXComponent=!0},5455:function(e,t,n){t.Z=n.p+"assets/images/console-064800326e506e2e19e957074bb63f1c.png"}}]);