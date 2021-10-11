(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2266],{3905:function(e,t,s){"use strict";s.d(t,{Zo:function(){return l},kt:function(){return d}});var n=s(7294);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){o(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,n,o=function(e,t){if(null==e)return{};var s,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)s=r[n],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var s=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(s),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||r;return s?n.createElement(f,a(a({ref:t},l),{},{components:s})):n.createElement(f,a({ref:t},l))}));function d(e,t){var s=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=s.length,a=new Array(r);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<r;u++)a[u]=s[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,s)}p.displayName="MDXCreateElement"},6419:function(e,t,s){"use strict";s.r(t),s.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var n=s(2122),o=s(9756),r=(s(7294),s(3905)),a=["components"],i={sidebar_position:2},c="Les bases de Cosmos SDK et CosmWasm",u={unversionedId:"basics/cosmos-sdk-cw",id:"basics/cosmos-sdk-cw",isDocsHomePage:!1,title:"Les bases de Cosmos SDK et CosmWasm",description:"Le Cosmos SDK",source:"@site/i18n/fr/docusaurus-plugin-content-docs-dev-academy/current/basics/03-cosmos-sdk-cw.md",sourceDirName:"basics",slug:"/basics/cosmos-sdk-cw",permalink:"/fr/dev-academy/basics/cosmos-sdk-cw",editUrl:"https://crowdin.com/project/cosmwasm-docs/fr",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"devAcademy",previous:{title:"Infrastructure de la cha\xeene de blocs",permalink:"/fr/dev-academy/basics/infra"},next:{title:"Configuration de l'environnement",permalink:"/fr/dev-academy/basics/environment"}},l=[{value:"Le Cosmos SDK",id:"cosmos-sdk",children:[]},{value:"Diff\xe9rences ?",id:"differences",children:[]}],m={toc:l};function p(e){var t=e.components,s=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"les-bases-de-cosmos-sdk-et-cosmwasm"},"Les bases de Cosmos SDK et CosmWasm"),(0,r.kt)("h2",{id:"cosmos-sdk"},"Le Cosmos SDK"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Extrait de ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.43/intro/overview.html"},"docs Cosmos SDK"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Qu'est-ce que le SDK ? Le Cosmos-SDK est un framework open-source permettant de construire des blockchains publiques de type PoS (Proof-of-Stake) multi-actifs, comme le Cosmos Hub, ainsi que des blockchains de type PoA (Proof-Of-Authority) autoris\xe9es. Les blockchains construites avec le kit SDK Cosmos sont g\xe9n\xe9ralement appel\xe9es blockchains sp\xe9cifiques \xe0 une application (application-specific). L'objectif du SDK Cosmos est de permettre aux d\xe9veloppeurs de cr\xe9er facilement des blockchains personnalis\xe9es \xe0 partir de z\xe9ro, qui peuvent nativement interagir avec d'autres blockchains. Nous envisageons le SDK comme un framework de type npm pour construire des applications blockchain s\xe9curis\xe9es au-dessus de Tendermint (ouvre une nouvelle fen\xeatre). Les blockchains bas\xe9es sur un SDK sont construites \xe0 partir de modules composables, dont la plupart sont open source et facilement accessibles \xe0 tout d\xe9veloppeur. Tout le monde peut cr\xe9er un module pour le Cosmos-SDK, et l'int\xe9gration de modules d\xe9j\xe0 construits est aussi simple que leur importation dans votre application blockchain. De plus, le SDK Cosmos est un syst\xe8me bas\xe9 sur les capacit\xe9s, ce qui permet aux d\xe9veloppeurs de mieux raisonner sur la s\xe9curit\xe9 des interactions entre les modules. :::")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"En bref, Cosmos SDK est un framework blockchain facile \xe0 utiliser qui permet aux entreprises de d\xe9velopper rapidement sans se plonger dans les d\xe9tails de la blockchain."),(0,r.kt)("p",{parentName:"div"},"Veuillez lire la documentation de pr\xe9sentation du SDK Cosmos :"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/v0.43/intro"},"Cosmos SDK Intro")," donne une excellente introduction au framework."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/v0.43/basics"},"Cosmos SDK Basics")," couvre les concepts de base de cosmos sdk qui sont n\xe9cessaires pour d\xe9velopper sur cosmwasm sans grande connaissance de cosmos-sdk.")),(0,r.kt)("h2",{parentName:"div",id:"cosmwasm"},"CosmWasm"))),(0,r.kt)("p",null,"En bref, CosmWasm est un module de contrat intelligent (smart contract) qui peut \xeatre utilis\xe9 avec Cosmos SDK. Pour l'instant, il prend en charge les contrats intelligents \xe9crits en Rust."),(0,r.kt)("h2",{id:"differences"},"Diff\xe9rences ?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cosmos SDK est l'application native sous-jacente, les modules sont d\xe9velopp\xe9s en utilisant go."),(0,r.kt)("li",{parentName:"ul"},"CosmWasm est un moteur fonctionnant sur Cosmos SDK. Les contrats intelligents sont en Rust pour le moment."),(0,r.kt)("li",{parentName:"ul"},"Les modules natifs de Cosmos SDK sont l\xe9g\xe8rement plus rapides que les contrats intelligents."),(0,r.kt)("li",{parentName:"ul"},"Les contrats intelligents peuvent \xeatre \xe9chang\xe9s lorsque la cha\xeene est en cours d'ex\xe9cution, en revanche, pour apporter des modifications aux modules natifs, la cha\xeene doit \xeatre red\xe9marr\xe9e. Ce processus est effectu\xe9 par des validateurs qui se coordonnent sur une proc\xe9dure de red\xe9marrage.")))}p.isMDXComponent=!0}}]);