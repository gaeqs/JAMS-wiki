"use strict";(self.webpackChunkjamswiki=self.webpackChunkjamswiki||[]).push([[621],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var s=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=s.createContext({}),u=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return s.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?s.createElement(h,a(a({ref:t},l),{},{components:n})):s.createElement(h,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<r;u++)a[u]=n[u];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7986:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var s=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],o={sidebar_position:5},c="Instructions",u={unversionedId:"architecture/instructions",id:"architecture/instructions",title:"Instructions",description:"Instructions are the most important part of an assembly language. JAMS manages instructions in a modular way.",source:"@site/docs/architecture/instructions.md",sourceDirName:"architecture",slug:"/architecture/instructions",permalink:"/docs/architecture/instructions",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture/instructions.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"MIPS32 Assembler",permalink:"/docs/architecture/mipsAssembler"},next:{title:"Directives",permalink:"/docs/architecture/directives"}},l={},d=[{value:"Structure",id:"structure",level:2},{value:"Basic instructions",id:"basic-instructions",level:3},{value:"Pseudo-instructions",id:"pseudo-instructions",level:3},{value:"Assembled instructions",id:"assembled-instructions",level:2},{value:"Instruction executions",id:"instruction-executions",level:2},{value:"Instruction sets",id:"instruction-sets",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"instructions"},"Instructions"),(0,r.kt)("p",null,"Instructions are the most important part of an assembly language. JAMS manages instructions in a modular way."),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("p",null,"All instructions implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"Instruction")," interface. This interface defines basic instructions' concepts, such as the\nname, the mnemonic, the documentation or the parameters."),(0,r.kt)("p",null,"This interface also defines the ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," methods, used to check whether a mnemonic and a set of parameters represent an\ninstruction. The assembler uses these methods to know which instruction defines a line."),(0,r.kt)("p",null,"Finally, the interface also defines the ",(0,r.kt)("inlineCode",{parentName:"p"},"assemble")," method. It translates the instruction in a set of assembled\ninstructions. This method must be implemented by the classes that implement this interface."),(0,r.kt)("p",null,"This interface is implemented by two basic abstract classes: ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicInstruction")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PseudoInstruction"),"."),(0,r.kt)("h3",{id:"basic-instructions"},"Basic instructions"),(0,r.kt)("p",null,"Basic instructions represent regular assembler's instructions. These instructions have a direct translation to machine\ncode. The ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicInstruction")," class defines more concrete elements, such as the operation code, the arithmetic-logic unit\nthe instruction must be executed and a new ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," method that can be invoked to know whether an instruction code is\nrepresented by the invoked basic instruction."),(0,r.kt)("p",null,"This class also defines the ",(0,r.kt)("inlineCode",{parentName:"p"},"assembleBasic")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"assembleFromCode")," abstract methods. These methods are used to create an\nassembled instruction from an instruction code or a ser of parameters."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"assembled")," method explained before is implemented by this class."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Required global constants")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All basic instructions must have two defined global constants:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MNEMONIC"),": a ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," that defines the instruction's mnemonic."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PARAMETER_TYPES"),": A ",(0,r.kt)("inlineCode",{parentName:"li"},"InstructionParameterTypes")," element that defines the instruction's parameter types.")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class InstructionAbsDouble extends BasicRFPUInstruction<InstructionAbsDouble.Assembled> {\n\n    public static final String MNEMONIC = "abs.d";\n    public static final InstructionParameterTypes PARAMETER_TYPES = new InstructionParameterTypes(\n            ParameterType.EVEN_FLOAT_REGISTER,\n            ParameterType.EVEN_FLOAT_REGISTER\n    );   \n    ...\n}\n')))),(0,r.kt)("h3",{id:"pseudo-instructions"},"Pseudo-instructions"),(0,r.kt)("p",null,"Pseudo-instructions are instructions the assembler will translate into a set of basic instructions."),(0,r.kt)("p",null,"These instructions are represented by the ",(0,r.kt)("inlineCode",{parentName:"p"},"PseudoInstruction")," class. This abstract class defines\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"getInstructionAmount")," method, that returns, given a set of parameters, the number of basic instructions a\npseudo-instruction will be translated into."),(0,r.kt)("p",null,"This class also implements several static methods that help on the implementation of pseudo-instructions."),(0,r.kt)("p",null,"For example, the implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"addi")," pseudo-instruction is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class PseudoInstructionAddi extends PseudoInstruction {\n\n    public static final String MNEMONIC = "addi";\n\n    public static final InstructionParameterTypes PARAMETER_TYPES = new InstructionParameterTypes(\n            ParameterType.REGISTER,\n            ParameterType.REGISTER,\n            ParameterType.SIGNED_16_BIT\n    );\n\n    public PseudoInstructionAddi() {\n        super(MNEMONIC, PARAMETER_TYPES);\n    }\n\n    @Override\n    public int getInstructionAmount(String[] parameters) {\n        return 2;\n    }\n\n    @Override\n    public AssembledInstruction[] assemble(\n            InstructionSet set,\n            int address,\n            ParameterParseResult[] parameters\n    ) {\n        var instructions = instructions(set,\n                InstructionAddiu.class, InstructionAdd.class);\n\n        var addiu = parameters(AT, ZERO, parameters[2]);\n        var add = parameters(parameters[0], AT, parameters[1]);\n\n        return assemble(instructions, addiu, add);\n    }\n}\n')),(0,r.kt)("h2",{id:"assembled-instructions"},"Assembled instructions"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AssembledInstruction")," class represents an assembled instruction. This class stores the integer that represents the\ninstruction code of an instruction, the instruction that created the assembled instruction (it can be a basic\ninstruction or a pseudo-instruction) and the basic instruction that represents this assembled instruction."),(0,r.kt)("p",null,"These classes are only used to store information about an instruction. Child classes can define helper methods the child\nclass can use to fetch parameters."),(0,r.kt)("h2",{id:"instruction-executions"},"Instruction executions"),(0,r.kt)("p",null,"Instructions are also defined by a ",(0,r.kt)("inlineCode",{parentName:"p"},"InstructionExecution")," class. This class implements an instruction's execution in an\narchitecture. It also implements several helper methods execution implementations can use."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"InstructionExecution")," class cannot be extended directly. An implementation must extend ",(0,r.kt)("inlineCode",{parentName:"p"},"SingleCycleExecution")," for\nsingle-cycle executions and ",(0,r.kt)("inlineCode",{parentName:"p"},"MultiCycleExecution")," for multi-cycle or pipelined executions."),(0,r.kt)("p",null,"These executions must be registered in the instruction using the ",(0,r.kt)("inlineCode",{parentName:"p"},"addExecutionBuilder")," method."),(0,r.kt)("h2",{id:"instruction-sets"},"Instruction sets"),(0,r.kt)("p",null,"Instructions are grouped by ",(0,r.kt)("strong",{parentName:"p"},"instruction sets"),". A project will use an instruction set to assemble its code, to help\nthe user on the editor and to interprete machine code in the simulator. Instruction sets are managed by\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"InstructionSetmanager"),"."))}m.isMDXComponent=!0}}]);