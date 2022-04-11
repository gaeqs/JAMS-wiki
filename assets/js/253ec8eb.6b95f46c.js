"use strict";(self.webpackChunkjamswiki=self.webpackChunkjamswiki||[]).push([[167],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,v=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(v,s(s({ref:t},p),{},{components:n})):r.createElement(v,s({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4282:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),s=["components"],o={sidebar_position:6},c="Directives",l={unversionedId:"architecture/directives",id:"architecture/directives",title:"Directives",description:"Directivas are instructions the assembler executes when a project is assembled. Directives allow the developer to",source:"@site/docs/architecture/directives.md",sourceDirName:"architecture",slug:"/architecture/directives",permalink:"/docs/architecture/directives",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture/directives.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Instructions",permalink:"/docs/architecture/instructions"}},p={},d=[{value:"Directive implementation",id:"directive-implementation",level:2},{value:"Directive sets",id:"directive-sets",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"directives"},"Directives"),(0,a.kt)("p",null,"Directivas are instructions the assembler executes when a project is assembled. Directives allow the developer to\nreserve memory (with data or without data), to define the assembly flow, to define macros and equivalents and other\nbasic operations."),(0,a.kt)("p",null,"The JAMS preprocessor can be considered a primitive and basic version of\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://gcc.gnu.org/onlinedocs/cpp/"},"C preprocessor"),"."),(0,a.kt)("h2",{id:"directive-implementation"},"Directive implementation"),(0,a.kt)("p",null,"Unlike instructions, directives are defined by only one class extending ",(0,a.kt)("inlineCode",{parentName:"p"},"Directive"),"."),(0,a.kt)("p",null,"A directive implementation can override the following methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onDiscovery"),": this method is invoked when the directive is found in the discovery step of an assembler."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onExpansion"),": this method is invoked when the directive is found in the expansion step of an assembler."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onAddressAssignation"),": this method is invoked in the address assignation step. If the directive allocates memory or\nexecutes any memory operation, this method should return the start address of the directive."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"onMemoryAssignation"),": this method is invoked in the memory assignation step.")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"States")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Directive implementations ",(0,a.kt)("strong",{parentName:"p"},"mustn't store state information"),". All the directive must be solved locally in the\noverridden methods."))),(0,a.kt)("p",null,"As an example, an implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},".space")," directive may be the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class DirectiveSpace extends Directive {\n\n    public static final String NAME = "space";\n    private static final DirectiveParameterType[] PARAMETERS = {DirectiveParameterType.POSITIVE_INT};\n\n    public DirectiveSpace() {\n        super(NAME, PARAMETERS, false, false, true);\n    }\n\n    @Override\n    public OptionalInt onAddressAssignation(MIPS32AssemblerLine line, String[] parameters, String rawParameters) {\n        if (parameters.length != 1)\n            throw new AssemblerException(line.getIndex(), "." + NAME + " must have one parameter.");\n\n        if (!NumericUtils.isInteger(parameters[0]))\n            throw new AssemblerException(parameters[0] + " is not a number.");\n        int i = NumericUtils.decodeInteger(parameters[0]);\n        if (i < 0) throw new AssemblerException(i + " cannot be negative.");\n\n        MIPS32AssemblerData data = line.getAssembler().getAssemblerData();\n        data.align(0);\n        int start = data.getCurrent();\n        data.addCurrent(i);\n        return OptionalInt.of(start);\n    }\n\n}\n')),(0,a.kt)("h2",{id:"directive-sets"},"Directive sets"),(0,a.kt)("p",null,"Directives are grouped by ",(0,a.kt)("strong",{parentName:"p"},"directive sets"),". Just like instruction sets, a project will have a directive set assigned.\nDirective sets are managed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"DirectiveSetManager"),"."))}u.isMDXComponent=!0}}]);