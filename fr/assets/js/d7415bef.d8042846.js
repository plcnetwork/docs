(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9944],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||c;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3139:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var r=n(2122),o=n(9756),c=(n(7294),n(3905)),a=["components"],i={title:"Spec",sidebar_position:1},s="CW1 Spec: Proxy Contracts",p={unversionedId:"cw1/intro",id:"cw1/intro",isDocsHomePage:!1,title:"Spec",description:"cw1 is a specification for proxy contracts based",source:"@site/cw-plus/cw1/intro.md",sourceDirName:"cw1",slug:"/cw1/intro",permalink:"/fr/cw-plus/0.6.2/cw1/intro",editUrl:"https://github.com/CosmWasm/docs/edit/main/cw-plus/cw1/intro.md",version:"current",sidebarPosition:1,frontMatter:{title:"Spec",sidebar_position:1},sidebar:"cwPlus",previous:{title:"Advanced Tips",permalink:"/fr/cw-plus/0.6.2/tips"},next:{title:"CW1 Subkeys",permalink:"/fr/cw-plus/0.6.2/cw1/cw1-subkeys"}},l=[],u={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"cw1-spec-proxy-contracts"},"CW1 Spec: Proxy Contracts"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/tree/master/packages/cw1"},"cw1")," is a specification for proxy contracts based\non CosmWasm. It is a very simple, but flexible interface designed for the case where one contract is meant to hold\nassets (or rights) on behalf of other contracts."),(0,c.kt)("p",null,"The simplest example is a contract that will accept messages from the creator and resend them from it's address. Simply\nby making this transferable, you can then begin to transfer non-transferable assets\n(eg. staked tokens, voting power, etc)."),(0,c.kt)("p",null,'You can imagine more complex examples, such as a "1 of N" multisig, or conditional approval, where "sub-accounts" have\nthe right to spend a limited amount of funds from this account, with a "admin account"\nretaining full control.'),(0,c.kt)("p",null,"The common denominator is that they allow you to immediately execute arbitrary ",(0,c.kt)("inlineCode",{parentName:"p"},"CosmosMsg")," in the same transaction."))}f.isMDXComponent=!0}}]);