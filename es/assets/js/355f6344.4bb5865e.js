"use strict";(self.webpackChunkjamswiki=self.webpackChunkjamswiki||[]).push([[493],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return p}});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=a.createContext({}),u=function(e){var n=a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=u(e.components);return a.createElement(i.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),p=t,m=d["".concat(i,".").concat(p)]||d[p]||g[p]||o;return r?a.createElement(m,s(s({ref:n},c),{},{components:r})):a.createElement(m,s({ref:n},c))}));function p(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6335:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return g}});var a=r(7462),t=r(3366),o=(r(7294),r(3905)),s=["components"],l={sidebar_position:2},i="Gestores",u={unversionedId:"architecture/managers",id:"architecture/managers",title:"Gestores",description:"La arquitectura de JAMS est\xe1 basada en gestores. Un gestor se puede definir como un conjunto de elementos que las",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/architecture/managers.md",sourceDirName:"architecture",slug:"/architecture/managers",permalink:"/es/docs/architecture/managers",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture/managers.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introducci\xf3n",permalink:"/es/docs/architecture/introduction"}},c={},g=[{value:"Tipos de gestores",id:"tipos-de-gestores",level:2},{value:"Gestores normales",id:"gestores-normales",level:3},{value:"Gestores con valor por defecto.",id:"gestores-con-valor-por-defecto",level:3},{value:"Gestores con valor seleccionado.",id:"gestores-con-valor-seleccionado",level:3},{value:"Proveedores",id:"proveedores",level:2},{value:"Registro",id:"registro",level:2},{value:"Gestores primarios y gestores secundarios",id:"gestores-primarios-y-gestores-secundarios",level:3},{value:"Acceder a los gestores",id:"acceder-a-los-gestores",level:2},{value:"Usar los gestores",id:"usar-los-gestores",level:2},{value:"Crear nuevos gestores",id:"crear-nuevos-gestores",level:2},{value:"Escuchar cambios en los gestores",id:"escuchar-cambios-en-los-gestores",level:2}],d={toc:g};function p(e){var n=e.components,r=(0,t.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gestores"},"Gestores"),(0,o.kt)("p",null,"La arquitectura de JAMS est\xe1 basada en ",(0,o.kt)("strong",{parentName:"p"},"gestores"),". Un gestor se puede definir como un conjunto de elementos que las\nherramientas pueden usar."),(0,o.kt)("h2",{id:"tipos-de-gestores"},"Tipos de gestores"),(0,o.kt)("p",null,"JAMS proporciona tres tipos b\xe1sicos de gestores."),(0,o.kt)("h3",{id:"gestores-normales"},"Gestores normales"),(0,o.kt)("p",null,"Implementados por la clase ",(0,o.kt)("inlineCode",{parentName:"p"},"Manager"),". Contienen una lista de elementos sin ninguna jerarqu\xeda."),(0,o.kt)("h3",{id:"gestores-con-valor-por-defecto"},"Gestores con valor por defecto."),(0,o.kt)("p",null,"Act\xfaa como un gestor normal, con la diferencia que uno de sus valores es el valor por defecto. Estos gestores heredan de\nla clase ",(0,o.kt)("inlineCode",{parentName:"p"},"DefaultValuableManager"),"."),(0,o.kt)("h3",{id:"gestores-con-valor-seleccionado"},"Gestores con valor seleccionado."),(0,o.kt)("p",null,"Act\xfaan como un gestor con valor por defecto, pero con uno de los elementos seleccionado. Cuando el elemento seleccionado\nse elimina, el elemento por defecto queda seleccionado. Estos gestores heredan de la clase ",(0,o.kt)("inlineCode",{parentName:"p"},"SelectableManager"),"."),(0,o.kt)("h2",{id:"proveedores"},"Proveedores"),(0,o.kt)("p",null,"Cada elemento guardado en un gestor est\xe1 asociado al proveedor que lo proporciona. Un proveedor puede ser un plugin o el\npropio JAMS. Cuando un proveedor se desvincula de la aplicaci\xf3n, todos los elementos proporcionados por el proveedor son\neliminados de los gestores."),(0,o.kt)("h2",{id:"registro"},"Registro"),(0,o.kt)("p",null,"El registro es un elemento est\xe1tico dentro de la aplicaci\xf3n. Se puede considerar un gestor de gestores. En el registro\nse pueden recuperar, a\xf1adir, eliminar o modificar gestores. Igual que los gestores normales, cuando un proveedor se\ndesvincula de la aplicaci\xf3n, todos los gestores proporcionados por el proveedor son eliminados del registro."),(0,o.kt)("h3",{id:"gestores-primarios-y-gestores-secundarios"},"Gestores primarios y gestores secundarios"),(0,o.kt)("p",null,"JAMS permite separar los gestores en dos tipos: gestores primarios y gestores secundarios."),(0,o.kt)("p",null,"Los gestores primarios son f\xe1cilmente accesibles cuando se busca un gestor por tipo usando m\xe9todos como\n",(0,o.kt)("inlineCode",{parentName:"p"},"Manager.of(Type.class)"),". Solo puede existir un gestor primario por tipo."),(0,o.kt)("p",null,"Para buscar gestores secundarios, se debe proveer el nombre del gestor expl\xedcitamente:\n",(0,o.kt)("inlineCode",{parentName:"p"},'Jams.REGISTRY.of("other-manager", Type.class)'),"."),(0,o.kt)("h2",{id:"acceder-a-los-gestores"},"Acceder a los gestores"),(0,o.kt)("p",null,"Existen dos maneras de acceder a un gestor: usando el registro o usando los atajos de la clase ",(0,o.kt)("inlineCode",{parentName:"p"},"Manager"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Returns the primary manager that manages languages.\nManager<Language> simpleLanguageManager = Manager.of(Language.class);\nsimpleLanguageManager = Jams.REGISTRY.of(Language.class);\n\n// Returns the primary selectable manager that manages languages.\nSelectableManager<Language> selectableLanguageManager = Manager.ofS(Language.class);\nselectableLanguageManager = (SelectableManager<Language>) Jams.REGISTRY.of(Language.class);\n\n// Returns the manager that is an instance of LanguageManager.\nLanguageManager languageManager = Manager.get(LanguageManager.class);\nlanguageManager = Jams.REGISTRY.get(LanguageManager.class);\n\n// Returns the manager with the given name.\nManager<Language> manager = Jams.REGISTRY.of("other-language-manager", Language.class);\n')),(0,o.kt)("h2",{id:"usar-los-gestores"},"Usar los gestores"),(0,o.kt)("p",null,"Los gestores implementan la interfaz ",(0,o.kt)("inlineCode",{parentName:"p"},"Set"),", por lo que son f\xe1cilmente manipulables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'SelectableManager<Language> manager = Manager.ofS(Language.class);\n\n// Accessing elements\nLanguage selectedLanguage = manager.getSelected();\nOptional<Language> english = manager.get("English");\n\n// Iterate through the manager\nmanager.forEach(language -> System.out.println(language.getName()));\n\n// Adding and removing elements\nif (english.isPresent()) {\n    manager.remove(english.get());\n    manager.add(english.get());\n}\n')),(0,o.kt)("h2",{id:"crear-nuevos-gestores"},"Crear nuevos gestores"),(0,o.kt)("p",null,"Se puede crear gestores de cualquier tipo de dato que extienda la interfaz ",(0,o.kt)("inlineCode",{parentName:"p"},"ManagerResource"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// The element to store inside the manager\npublic record MyElement(ResourceProvider provider, String name, double value) implements ManagerResource {\n    @Override\n    public ResourceProvider getResourceProvider() {return provider;}\n\n    @Override\n    public String getName() {return name;}\n}\n\n// The manager implementation\npublic class MyManager extends Manager<MyElement> {\n    \n    public MyManager(ResourceProvider provider) {\n        super(provider, "my-manager", MyElement.class, false);\n    }\n\n    @Override\n    protected void loadDefaultElements() {\n        add(new MyElement(provider, "test-1", 1.0));\n        add(new MyElement(provider, "test-2", 2.0));\n        add(new MyElement(provider, "test-3", 3.0));\n    }\n}\n\n// Register the manager whenever you want\nPlugin myPlugin = ...;\nJams.REGISTRY.registerPrimary(new MyManager(myPlugin));\n')),(0,o.kt)("h2",{id:"escuchar-cambios-en-los-gestores"},"Escuchar cambios en los gestores"),(0,o.kt)("p",null,"Los gestores usan el sistema de eventos integrado en JAMS, por lo que escuchar cambios en los gestores es muy sencillo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public void registerListeners() {\n    Manager.get(MyManager.class).registerListeners(this, true);\n}\n\n@Listener\nprivate void onElementRegister(ManagerElementRegisterEvent<MyElement> event) {\n    System.out.println("New element in my manager: " + event.getElement().getName());\n}\n')),(0,o.kt)("p",null,"Los eventos b\xe1sicos disponibles en los gestores son:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ManagerElementRegisterEvent<Type>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ManagerElementUnregisterEvent<Type>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ManagerDefaultElementChangeEvent<Type>")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ManagerSelectedElementChangeEvent<Type>"))))}p.isMDXComponent=!0}}]);