(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[231],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),d=a,h=l["".concat(c,".").concat(d)]||l[d]||m[d]||o;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},174:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return l}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:6},c="Next Steps",p={unversionedId:"getting-started/next-steps",id:"getting-started/next-steps",isDocsHomePage:!1,title:"Next Steps",description:"This is a very simple example for the escrow contract we developed, but it should show you what is",source:"@site/docs/getting-started/next-steps.md",sourceDirName:"getting-started",slug:"/getting-started/next-steps",permalink:"/0.14/getting-started/next-steps",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/getting-started/next-steps.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Uploading and Interacting",permalink:"/0.14/getting-started/interact-with-contract"},next:{title:"What are Multi-Chain Contracts?",permalink:"/0.14/architecture/multichain"}},u=[],m={toc:u};function l(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"This is a very simple example for the escrow contract we developed, but it should show you what is\npossible, limited only by the wasm code you upload and the json messages you send. The next step is\n",(0,o.kt)("a",{parentName:"p",href:"/0.14/learn/hijack-escrow/intro"},"Hijack Escrow tutorial")," where you will edit a smart contract to\nput a backdoor that enables a thief to steal funds. If you want a guided tutorial to build a\ncontract from start to finish, check out the ",(0,o.kt)("a",{parentName:"p",href:"/0.14/learn/name-service/intro"},"name service\ntutorial"),"."),(0,o.kt)("p",null,"We curated some video and workshop resources you can take a look at: ",(0,o.kt)("a",{parentName:"p",href:"/0.14/learn/videos-workshops"},"Videos and Workshops")),(0,o.kt)("p",null,"If you feel you understand enough (and have prior experience with rust), feel free to grab\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-template"},(0,o.kt)("inlineCode",{parentName:"a"},"cosmwasm-template"))," and use that as a configured\nproject to start modifying. Do not clone the repo, but rather follow the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm-template/blob/master/README.md"},"README")," on how to use\n",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-generate")," to generate your skeleton."),(0,o.kt)("p",null,"In either case, there is some documentation in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/go-cosmwasm/blob/master/spec/Index.md"},(0,o.kt)("inlineCode",{parentName:"a"},"go-cosmwasm"))," and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/blob/master/README.md"},(0,o.kt)("inlineCode",{parentName:"a"},"cosmwasm"))," that may be helpful. Any\nissues (either bugs or just confusion), please submit them on\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmwasm/issues"},(0,o.kt)("inlineCode",{parentName:"a"},"cosmwasm/issues"))," if they deal with the smart\ncontract, and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/wasmd/issues"},(0,o.kt)("inlineCode",{parentName:"a"},"wasmd/issues"))," if they have to do with the\nSDK integration."),(0,o.kt)("p",null,"Happy Hacking!"))}l.isMDXComponent=!0}}]);