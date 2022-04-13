"use strict";(self.webpackChunkjamswiki=self.webpackChunkjamswiki||[]).push([[917],{3905:function(e,n,a){a.d(n,{Zo:function(){return c},kt:function(){return m}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),u=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,E=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return a?t.createElement(E,i(i({ref:n},c),{},{components:a})):t.createElement(E,i({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1724:function(e,n,a){a.r(n),a.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var t=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={sidebar_position:8},l="Idiomas",u={unversionedId:"architecture/languages",id:"architecture/languages",title:"Idiomas",description:"Igual que cualquier aplicaci\xf3n moderna, JAMS presenta un sistema de localizaci\xf3n basado en paquetes de idiomas.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/architecture/languages.md",sourceDirName:"architecture",slug:"/architecture/languages",permalink:"/es/docs/architecture/languages",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture/languages.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docsSidebar",previous:{title:"Memoria",permalink:"/es/docs/architecture/memory"},next:{title:"Temas",permalink:"/es/docs/architecture/themes"}},c={},d=[{value:"Estructura de un paquete",id:"estructura-de-un-paquete",level:2},{value:"Extensiones",id:"extensiones",level:2},{value:"Acceder a mensajes",id:"acceder-a-mensajes",level:2},{value:"Acceder de manera directa.",id:"acceder-de-manera-directa",level:3},{value:"Usar un componente preparado",id:"usar-un-componente-preparado",level:3}],p={toc:d};function m(e){var n=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"idiomas"},"Idiomas"),(0,o.kt)("p",null,"Igual que cualquier aplicaci\xf3n moderna, JAMS presenta un sistema de localizaci\xf3n basado en paquetes de idiomas."),(0,o.kt)("p",null,"Cualquier usuario o componente puede crear un paquete que a\xf1ada o modifique un idioma."),(0,o.kt)("h2",{id:"estructura-de-un-paquete"},"Estructura de un paquete"),(0,o.kt)("p",null,"Un paquete de idiomas es una carpeta o un archivo comprimido que contienen un archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"language.json")," y varios archivos\n",(0,o.kt)("a",{parentName:"p",href:"https://yaml.org/"},"YAML"),". Esta carpeta o archivo estar\xe1 situado dentro de un componente o dentro de la carpeta\n",(0,o.kt)("inlineCode",{parentName:"p"},"~/JAMS/languages"),"."),(0,o.kt)("p",null,"Un ejemplo de un archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"language.json")," es el siguiente:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="language.json"',title:'"language.json"'},'{\n  "name": "English",\n  "priority": 0,\n  "files": [\n    "actions.yml",\n    "configuration.yml",\n    "directives.yml",\n    "editor.yml",\n    "general.yml",\n    "instructions.yml",\n    "interface.yml",\n    "mips_elements.yml",\n    "mips_simulation_configuration.yml",\n    "simulation.yml"\n  ]\n}\n')),(0,o.kt)("p",null,"Dentro del archivo se encuentran los siguientes par\xe1metros:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name"),": el nombre del idioma. Este nombre es el que ser\xe1 mostrado al usuario y act\xfaa como identificador del idioma."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"files"),": los archivos YAML que componen el paquete."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"priority"),": la prioridad del paquete si existen varios paquetes para el mismo idioma. Cuanto m\xe1s alto sea el n\xfamero,\nm\xe1s prioridad tiene el paquete. Esta propiedad es ",(0,o.kt)("strong",{parentName:"li"},"opcional")," y por defecto toma el valor 0.")),(0,o.kt)("p",null,"Los archivos YAML pueden estar en carpetas dentro del paquete, y deben estar definidos en el archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"language.json"),"\ncon una direcci\xf3n relativa a la ra\xedz del paquete."),(0,o.kt)("p",null,"Un ejemplo de un archivo YAML es el siguiente:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="interface.yml"',title:'"interface.yml"'},"START_TITLE: JAMS {VERSION}\nSTART_PROJECTS: Projects\nSTART_NEW_PROJECT: New project\nSTART_ABOUT: About\nBOTTOM_BAR_MEMORY: '{USED} of {TOTAL}MiB'\nBOTTOM_BAR_MEMORY_TOOLTIP: Click to execute the garbage collector.\n\nPROJECT_CREATOR_MIPS_ASSEMBLER: 'Assembler:'\nPROJECT_CREATOR_MIPS_INSTRUCTION_SET: 'Instruction set:'\nPROJECT_CREATOR_MIPS_DIRECTIVE_SET: 'Directive set:'\nPROJECT_CREATOR_MIPS_REGISTERS: 'Registers:'\nPROJECT_CREATOR_MIPS_EMPTY: Empty MIPS project\n\nMAIN_MENU_FILE: File\nMAIN_MENU_EDIT: Edit\nMAIN_MENU_SIMULATION: Simulation\nMAIN_MENU_TOOLS: Tools\nMAIN_MENU_HELP: Help\nMAIN_MENU_FILE_EXIT: Exit\nMAIN_MENU_FILE_SETTINGS: Settings\nMAIN_MENU_FILE_OPEN_PROJECT: Open project\nMAIN_MENU_FILE_CREATE_PROJECT: Create project\nMAIN_MENU_FILE_CREATE_PROJECT_TITLE: Create project\nMAIN_MENU_FILE_CREATE_PROJECT_NAME: 'Name:'\nMAIN_MENU_FILE_CREATE_PROJECT_PATH: 'Path:'\nMAIN_MENU_HELP_ABOUT: About\n\nPROJECT_TAB_STRUCTURE: Project structure\nPROJECT_TAB_SIMULATION: Simulation\n\nBAR_VIEW_MODE_PANE: Show in pane\nBAR_VIEW_MODE_WINDOW: Show in window\nBAR_VIEW_MODE_PERSISTENT_WINDOW: Show in persistent window\n")),(0,o.kt)("p",null,"Aunque no se use en ning\xfan paquete por defecto, los paquetes de idiomas permiten crear secciones como en cualquier\narchivo YAML."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"ACTION:\n  MY_ACTION: My action\n")),(0,o.kt)("p",null,"En este caso, se usar\xe1 el identificador ",(0,o.kt)("inlineCode",{parentName:"p"},"ACTION.MY_ACTION")," para referenciar el mensaje."),(0,o.kt)("h2",{id:"extensiones"},"Extensiones"),(0,o.kt)("p",null,"Puede existir el caso donde varios paquetes hagan referencia al mismo idioma. Este problema de colisi\xf3n se soluciona\ngracias a las extensiones."),(0,o.kt)("p",null,"Un paquete act\xfaa siempre como una extensi\xf3n de un idioma. Esta extensi\xf3n tiene una ",(0,o.kt)("strong",{parentName:"p"},"prioridad")," que se define en el\narchivo ",(0,o.kt)("inlineCode",{parentName:"p"},"language.json")," del paquete. Si dos extensiones tienen la misma prioridad, el orden se resuelve por orden de\ncreaci\xf3n de la extensi\xf3n, siendo el \xfaltimo en ser creado el que tenga m\xe1s prioridad."),(0,o.kt)("p",null,"El mensaje ligado a un identificador ser\xe1 el de la extensi\xf3n con m\xe1s prioridad que contenga un mensaje ligado al\nidentificador."),(0,o.kt)("p",null,"Gracias a este peque\xf1o sistema de extensiones, los usuarios podr\xe1n crear modificaciones y los componentes podr\xe1n a\xf1adir\nnuevos mensajes."),(0,o.kt)("h2",{id:"acceder-a-mensajes"},"Acceder a mensajes"),(0,o.kt)("p",null,"Existen dos maneras de acceder a los mensajes mediante un identificador: ",(0,o.kt)("strong",{parentName:"p"},"de manera directa")," o ",(0,o.kt)("strong",{parentName:"p"},"usando un componente\npreparado"),"."),(0,o.kt)("h3",{id:"acceder-de-manera-directa"},"Acceder de manera directa."),(0,o.kt)("p",null,"Un componente puede acceder al idioma selecciones usando el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"Manager.ofS(Language.class).getSelected()"),". La\nmanera m\xe1s correcta para pedir un mensaje es usando el m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"getOrDefault(String)"),". Este m\xe9todo devolver\xe1 el mensaje\nasociado al identificador dado. Si el idioma no contiene ning\xfan mensaje con ese identificador, lo buscar\xe1 en el idioma\npor defecto. Si ninguno de los dos idiomas contiene el mensaje, devuelve una cadena de texto vac\xeda."),(0,o.kt)("p",null,"Cabe destacar que esta acci\xf3n suele deber rehacerse cuando el idioma cambia, por lo que se debe registrar una escucha en\nel gestor de idiomas, escuchando el evento ",(0,o.kt)("inlineCode",{parentName:"p"},"LanguageRefreshEvent"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    @Listener\n    public void onRefresh(LanguageRefreshEvent event) {\n        refreshMessage(event.getSelectedLanguage());\n    }\n")),(0,o.kt)("h3",{id:"usar-un-componente-preparado"},"Usar un componente preparado"),(0,o.kt)("p",null,"Existe una gran variedad de nodos para ",(0,o.kt)("em",{parentName:"p"},"JavaFX")," preparados para usar mensajes traducibles. Estos nodos se pueden\nencontrar en el paquete ",(0,o.kt)("inlineCode",{parentName:"p"},"net.jamsimulator.jams.language.wrapper"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"new LanguageLabel(Messages.ACTION_FOLDER_EXPLORER_ELEMENT_NEW_FOLDER)\n")))}m.isMDXComponent=!0}}]);