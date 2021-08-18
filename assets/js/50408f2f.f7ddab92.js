(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9451],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=s,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,r=new Array(o);r[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:s,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4009:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var a=n(2122),s=n(9756),o=(n(7294),n(3905)),r=["components"],c={sidebar_position:2},i="CW1 Subkeys",l={unversionedId:"cw1/cw1-subkeys",id:"cw1/cw1-subkeys",isDocsHomePage:!1,title:"CW1 Subkeys",description:"cw1 Subkeys",source:"@site/cw-plus/cw1/cw1-subkeys.md",sourceDirName:"cw1",slug:"/cw1/cw1-subkeys",permalink:"/cw-plus/0.6.2/cw1/cw1-subkeys",editUrl:"https://github.com/CosmWasm/docs/edit/main/cw-plus/cw1/cw1-subkeys.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"cwPlus",previous:{title:"Spec",permalink:"/cw-plus/0.6.2/cw1/intro"},next:{title:"CW1 Whitelist",permalink:"/cw-plus/0.6.2/cw1/cw1-whitelist"}},d=[{value:"Contract demo",id:"contract-demo",children:[{value:"Allowance",id:"allowance",children:[]},{value:"Permissions",id:"permissions",children:[]}]},{value:"Contribution",id:"contribution",children:[]}],u={toc:d};function p(e){var t=e.components,n=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cw1-subkeys"},"CW1 Subkeys"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/tree/master/contracts/cw1-subkeys"},"cw1 Subkeys"),"\nis inspired\nby ",(0,o.kt)("a",{parentName:"p",href:"https://forum.cosmos.network/t/proposal-adding-subkey-feature-to-cosmos-sdk-and-apply-it-to-the-hub/2358"},"Cosmos SDK feature proposal"),"\n."),(0,o.kt)("p",null,"This is a basic proxy contract. Initiated contract with some tokens inside, allowed accounts can\nexecute ",(0,o.kt)("inlineCode",{parentName:"p"},"CosmosMsg::Bank(BankMsg::Send{})")," within the allowance(",(0,o.kt)("inlineCode",{parentName:"p"},"spender, denom"),") limits per account basis. Allowance\nlogic is similar to ",(0,o.kt)("a",{parentName:"p",href:"/cw-plus/0.6.2/cw20/spec"},"cw20"),". After authorization their allowance will be reduced, and the send\nmessage will be relayed. If they don't have sufficient authorization, or if they try to proxy any other message type,\nthen the attempt will be rejected. Admin can add an allowance for an account during init msg broadcast or after init."),(0,o.kt)("p",null,"The contract consists permissioning logic that allows and disallows specified keys to execute specific messages. For now\nthese messages are staking messages (covers ",(0,o.kt)("em",{parentName:"p"},"Delegate, Undelegate, Redelegate, Withdraw")," for now), but it is just few\nlines of code to add new message types. Allowance and permission checks works separately, meaning a subkey can have\nallowance to spend tokens, but no permissioned message execution and vice versa."),(0,o.kt)("h2",{id:"contract-demo"},"Contract demo"),(0,o.kt)("p",null,"First, initialize node repl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx @cosmjs/cli@^0.23 --init https://raw.githubusercontent.com/CosmWasm/cw-plus/v0.3.2/contracts/cw1-subkeys/helpers.ts\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Helper code is compatible with cw1-subkeys smart contract version ",(0,o.kt)("strong",{parentName:"p"},"v0.3.2")))),(0,o.kt)("p",null,"Load wallet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const client = await useOptions(hackatomOptions).setup(PASSWORD);\nconst factory = cw1(client);\n")),(0,o.kt)("p",null,"Upload the code and the contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// upload using code below\n// if the code is already uploaded use code id to initiate\nconst codeId = await factory.upload()\n// contract is already uploaded on heldernet: codeId -> 430\nconst {address} = await client.getAccount()\nconst contract = await factory.instantiate(430, {admins: [address], mutable: true}, \"My Gift to a Friend\")\n\n// print out contract.contractAddress for later\ncontract.contractAddress\n// address -> 'cosmos1q7kc6y94zuvr7wsekg45e6pr8nhef6ku9ugw8r'\n")),(0,o.kt)("p",null,"We created a contract from a code with only ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," as admin. Update admins for demonstration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// Use a key you control to test out execute with subkey\nconst friendAddr = "cosmos1ve2n9dd4uy48hzjgx8wamkc7dp7sfdv82u585d"\n\n// generate second address if you don\'t have one:\n// const friendClient = await useOptions(hackatomOptions).setup(PASSWORD, KEY_FILE);\n// const friendAddr = await friendClient.getAccount().then(x => x.address);\n\ncontract.updateAdmins([address, friendAddr]);\n')),(0,o.kt)("p",null,"After the last line, two admins have control over the sub key master contract. You can see the new admin added by\nrunning ",(0,o.kt)("inlineCode",{parentName:"p"},"contract.admins()"),"\nLet's delete friends address from admins, you would not want him to run away with the funds. Remove his address from\nadmins and freeze the contract. Freezing means admins cannot be modified afterwards."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"contract.updateAdmins([address])\ncontract.freeze()\n")),(0,o.kt)("h3",{id:"allowance"},"Allowance"),(0,o.kt)("p",null,"Let's give some allowance to your friends account, so he can buy a lambo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// lets pour some money to the account\nclient.sendTokens(contractAddress, [{denom: "ucosm", amount: "1000000"}])\n// verify tokens are transferred\nclient.getAccount(contractAddress)\n\ncontract.increaseAllowance(friendAddr, {denom: "ucosm", amount: "90000"})\ncontract.allowance(friendAddr)\n')),(0,o.kt)("p",null,"Now test if he can execute the message. Open another terminal screen:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'const friendClient = await useOptions(hackatomOptions).setup(PASSWORD, KEY_FILE);\nconst factory = cw1(friendClient)\nconst contract = factory.use(\'cosmos1q7kc6y94zuvr7wsekg45e6pr8nhef6ku9ugw8r\')\n\ncontract.execute([{\n  bank: {\n    send: {\n      from_address: contractAddress,\n      to_address: address,\n      amount: [{denom: "ucosm", amount: "20000"}]\n    }\n  }\n}])\n')),(0,o.kt)("p",null,"Allowed account can spend the tokens. Lets prank your friend with decreasing his allowance on admin terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'contract.decreaseAllowance(randomAddress, {denom: "ucosm", amount: "69999"}, {at_height: {height: 40000}})\n')),(0,o.kt)("p",null,"After these operations he will only have ",(0,o.kt)("em",{parentName:"p"},"1 ucosm")," to spend. The prank's best part is ",(0,o.kt)("inlineCode",{parentName:"p"},"at_height")," field. After height\n40000 his allowance will become inactive meaning he can't spend the tokens anymore."),(0,o.kt)("h3",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"Initially keys do not have any permission to send permissioned messages and needs to be set key basis:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'let permissions: Permissions = {delegate: true, undelegate: false, redelegate: true, withdraw: true}\n\ncontract.setStakingPermissions(randomAddress, permissions)\n\nlet dmsg: DelegateMsg = {\n  staking: {\n    delegate: {\n      validator: "cosmosvaloper1ez03me7uljk7qerswdp935vlaa4dlu487syyhn",\n      amount: {denom: "ureef", amount: "999"}\n    }\n  }\n}\ncontract.execute([dmsg])\n// will be approved\n\nlet unmsg: UndelegateMsg = {\n  staking: {\n    undelegate: {\n      validator: "cosmosvaloper1ez03me7uljk7qerswdp935vlaa4dlu487syyhn",\n      amount: {denom: "ureef", amount: "999"}\n    }\n  }\n}\ncontract.execute([unmsg])\n// will be rejected\n\n')),(0,o.kt)("h2",{id:"contribution"},"Contribution"),(0,o.kt)("p",null,"This contracts logic can be improved by adding different message types, various permissions for message types, daily\nspendable amount etc. Check\n",(0,o.kt)("a",{parentName:"p",href:"https://forum.cosmos.network/t/proposal-adding-subkey-feature-to-cosmos-sdk-and-apply-it-to-the-hub/2358"},"the cosmos sdk proposal"),"\nfor more ideas."))}p.isMDXComponent=!0}}]);