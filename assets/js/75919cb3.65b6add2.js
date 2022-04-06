"use strict";(self.webpackChunkjamswiki=self.webpackChunkjamswiki||[]).push([[950],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,g=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(g,s(s({ref:t},p),{},{components:n})):a.createElement(g,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2211:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],l={sidebar_position:3},o="Events",c={unversionedId:"architecture/events",id:"architecture/events",title:"Events",description:"JAMS includes an event system that informs about events between components. This system is deeply inspired by event",source:"@site/docs/architecture/events.md",sourceDirName:"architecture",slug:"/architecture/events",permalink:"/docs/architecture/events",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture/events.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Managers",permalink:"/docs/architecture/managers"}},p={},d=[{value:"Event broadcasts",id:"event-broadcasts",level:2},{value:"Defining listeners",id:"defining-listeners",level:2},{value:"Registering listeners",id:"registering-listeners",level:2},{value:"Cancellable events",id:"cancellable-events",level:2},{value:"Advanced parameters",id:"advanced-parameters",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"events"},"Events"),(0,i.kt)("p",null,"JAMS includes an event system that informs about events between components. This system is deeply inspired by event\nsystems used by the Minecraft community on projects such as  ",(0,i.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/"},"Spigot")," or\n",(0,i.kt)("a",{parentName:"p",href:"https://www.spongepowered.org/"},"Sponge"),", and it can be considered a decentralized evolution of this technology."),(0,i.kt)("h2",{id:"event-broadcasts"},"Event broadcasts"),(0,i.kt)("p",null,"Event broadcasts links event generators to listeners. An event broadcast is represented by the\n",(0,i.kt)("inlineCode",{parentName:"p"},"EventBroadcast")," interface. This interface is implemented by any component that wants to be used as a listener register.\nManagers, plugins and JAMS itself implement an event broadcast."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SimpleEventBroadcast")," class contains an implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"EventBroadcast")," that can be used as a superclass."),(0,i.kt)("h2",{id:"defining-listeners"},"Defining listeners"),(0,i.kt)("p",null,"A listener is a non-static method annotated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Listener")," annotation. These methods can only have a parameter of\na type that extends ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," and they must return ",(0,i.kt)("inlineCode",{parentName:"p"},"void"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Listener\nprivate void onLanguageRegister(ManagerElementRegisterEvent.After<Language> event) {\n    System.out.println("New language available! " + event.getElement().getName());\n}\n')),(0,i.kt)("p",null,"This method, after it is registered in a ",(0,i.kt)("a",{parentName:"p",href:"managers"},"manager"),", will be invoked when a new language is added to the\nmanager."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Generic")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Unlike other similar event systems, JAMS's event system allows the use of generics. An example is the previous code\nsnippet, where the method asks for a ",(0,i.kt)("inlineCode",{parentName:"p"},"ManagerElementRegisterEvent.After<Language>"),"."),(0,i.kt)("p",{parentName:"div"},"If the broadcast the listener is registered on emits a ",(0,i.kt)("inlineCode",{parentName:"p"},"ManagerElementRegisterEvent.After<Theme>"),", the listener\n",(0,i.kt)("strong",{parentName:"p"},"won't")," be invoked."))),(0,i.kt)("p",null,"::tip Hierarchies"),(0,i.kt)("p",null,"An event can extend another event. This allows the developer to create an event hierarchy. A listener that asks for an\nevent will be invoked when that event or one of its children is emitted."),(0,i.kt)("p",null,"If a listener asks for an ",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),", its method will be invoked when any event is emitted."),(0,i.kt)("p",null,":::"),(0,i.kt)("h2",{id:"registering-listeners"},"Registering listeners"),(0,i.kt)("p",null,"Once a listener is defined, it can be registered in one or several event broadcasts."),(0,i.kt)("p",null,"Listeners cannot be static, so they need an object linked to them when they are registered. This object will invoke the\nmethod when an event is emitted. This behavior grants a huge flexibility to the system, allowing an element to register\nlisteners depending on its state."),(0,i.kt)("p",null,"The best way to register a listener is using the method ",(0,i.kt)("inlineCode",{parentName:"p"},"registerListeners(Object, boolean)"),". This method searches\ninside the object for all methods with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Listener")," annotation. This search includes ",(0,i.kt)("strong",{parentName:"p"},"all")," methods defined by the\nobject, including private methods and method defined by superclasses."),(0,i.kt)("p",null,"If the boolean ",(0,i.kt)("inlineCode",{parentName:"p"},"useWeakReferences")," is true, listeners will be registered using a ",(0,i.kt)("strong",{parentName:"p"},"weak reference"),". If this boolean is\nfalse, the object used to register the listener will be kept in memory when all its references are invalid, so all\nlisteners must be unregistered manually before that happens. The weak reference removes this step, deleting the register\nautomatically once all references are invalid."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'private void register() {\n    Manager<Language> manager = Manager.of(Language.class);\n    manager.registerListeners(this, true);\n}\n\n@Listener\nprivate void onLanguageRegister(ManagerElementRegisterEvent.After<Language> event) {\n    System.out.println("New language available! " + event.getElement().getName());\n}\n')),(0,i.kt)("p",null,"It is also possible to register only one method from the object. This method requires basic knowledge of\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"reflection")," API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'private void register() throws NoSuchMethodException {\n    Manager<Language> manager = Manager.of(Language.class);\n    manager.registerListener(\n            this,\n            this.getClass().getDeclaredMethod("onLanguageRegister", ManagerElementRegisterEvent.class),\n            true\n    );\n}\n\n@Listener()\nprivate void onLanguageRegister(ManagerElementRegisterEvent.After<Language> event) {\n    System.out.println("New language available! " + event.getElement().getName());\n}\n')),(0,i.kt)("p",null,"To unregister listeners, use the methods ",(0,i.kt)("inlineCode",{parentName:"p"},"unregisterListeners")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"unregisterListener"),"."),(0,i.kt)("h2",{id:"cancellable-events"},"Cancellable events"),(0,i.kt)("p",null,"Some events implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"Cancellable")," interface. This interface allows the event to be cancelled. When an event is\ncancelled, all left listeners won't be called if their ",(0,i.kt)("inlineCode",{parentName:"p"},"ignoreCancelled")," flag is not ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("h2",{id:"advanced-parameters"},"Advanced parameters"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@Listener")," annotation can define more advanced behaviours on the listener."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Listener(priority = 20, ignoreCancelled = true)\nprivate void onLanguageRegister(ManagerElementRegisterEvent.After<Language> event) {\n    System.out.println("New language available! " + event.getElement().getName());\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"priority")," parameter defines the priority of the listener. The listener with the biggest value will be the first to\nbe called."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ignoreCancelled")," boolean grants the listener the ability to be called even if the event was cancelled."))}u.isMDXComponent=!0}}]);