(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2772],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=o,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},364:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=t(2122),o=t(9756),r=(t(7294),t(3905)),i=["components"],s={sidebar_position:5},c="Develop dApp",l={unversionedId:"learn/frontend-dapp/dapp-development",id:"learn/frontend-dapp/dapp-development",isDocsHomePage:!1,title:"Develop dApp",description:"To showcase the previously explained utilities, we'll create the balance checker dApp from the template.",source:"@site/docs/learn/frontend-dapp/dapp-development.md",sourceDirName:"learn/frontend-dapp",slug:"/learn/frontend-dapp/dapp-development",permalink:"/0.14/learn/frontend-dapp/dapp-development",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/learn/frontend-dapp/dapp-development.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Bootstrap dApp",permalink:"/0.14/learn/frontend-dapp/bootstrap-dapp"},next:{title:"Videos and Workshops",permalink:"/0.14/learn/videos-workshops"}},p=[{value:"Customize template",id:"customize-template",children:[]},{value:"Add balance route",id:"add-balance-route",children:[{value:"Balance path",id:"balance-path",children:[]},{value:"React component",id:"react-component",children:[]},{value:"Add to ProtectedSwitch",id:"add-to-protectedswitch",children:[]}]},{value:"Add FormCheckBalance component",id:"add-formcheckbalance-component",children:[{value:"Add Search component",id:"add-search-component",children:[]},{value:"Add contract address validation schema",id:"add-contract-address-validation-schema",children:[]},{value:"FormCheckBalance implementation",id:"formcheckbalance-implementation",children:[]}]},{value:"Add TokenList component",id:"add-tokenlist-component",children:[]},{value:"Finished!",id:"finished",children:[]}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"develop-dapp"},"Develop dApp"),(0,r.kt)("p",null,"To showcase the previously explained utilities, we'll create the balance checker dApp from the template."),(0,r.kt)("h2",{id:"customize-template"},"Customize template"),(0,r.kt)("p",null,"To make the app your own, feel free to modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," field in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," and/or update the ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md")," file."),(0,r.kt)("p",null,"Also modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/Login/index.tsx")," file to look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Login as LoginDesign } from "@cosmicdapp/design";\nimport React from "react";\nimport { config } from "../../../config";\nimport { pathBalance } from "../../paths";\nimport cosmWasmLogo from "./assets/cosmWasmLogo.svg";\n\nexport function Login(): JSX.Element {\n  return (\n    <LoginDesign\n      pathAfterLogin={pathBalance}\n      appName="Balance checker"\n      appLogo={cosmWasmLogo}\n      config={config}\n    />\n  );\n}\n\n')),(0,r.kt)("h2",{id:"add-balance-route"},"Add balance route"),(0,r.kt)("h3",{id:"balance-path"},"Balance path"),(0,r.kt)("p",null,"Add the following to the ",(0,r.kt)("inlineCode",{parentName:"p"},"paths.ts")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'export const pathBalance = "/balance";\n')),(0,r.kt)("h3",{id:"react-component"},"React component"),(0,r.kt)("p",null,"Inside ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/"),", add a ",(0,r.kt)("inlineCode",{parentName:"p"},"Balance")," directory with the following files:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"index.tsx"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { PageLayout, YourAccount } from "@cosmicdapp/design";\nimport { useError } from "@cosmicdapp/logic";\nimport { Typography } from "antd";\nimport React, { useState } from "react";\nimport { FormCheckBalance } from "./components/FormCheckBalance";\nimport { TokenList } from "./components/TokenList";\nimport { ErrorText, MainStack } from "./style";\n\nconst { Title } = Typography;\n\nexport function Balance(): JSX.Element {\n  const { error } = useError();\n  const [contractAddress, setContractAddress] = useState();\n\n  return (\n    <PageLayout>\n      <MainStack>\n        <Title>Balance</Title>\n        <YourAccount hideTitle hideBalance />\n        <FormCheckBalance setContractAddress={setContractAddress} />\n        {error && <ErrorText>{error}</ErrorText>}\n        <TokenList contractAddress={contractAddress} />\n      </MainStack>\n    </PageLayout>\n  );\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"style.ts"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Stack } from "@cosmicdapp/design";\nimport { Typography } from "antd";\nimport styled from "styled-components";\n\nconst { Text } = Typography;\n\nexport const MainStack = styled(Stack)`\n  & > * {\n    --gap: var(--s4);\n  }\n\n  h1 {\n    margin: 0;\n  }\n\n  .ant-form {\n    margin-top: var(--gap);\n  }\n`;\n\nexport const ErrorText = styled(Text)`\n  color: var(--color-red);\n`;\n')),(0,r.kt)("p",null,"As you can see, this two files make use of ",(0,r.kt)("inlineCode",{parentName:"p"},"@cosmicdapp/logic"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"useError")," hook, and of ",(0,r.kt)("inlineCode",{parentName:"p"},"@cosmicdapp/design"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PageLayout"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"YourAccount")," components, so they should be familiar to you."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"index.tsx")," component's layout makes use of ",(0,r.kt)("inlineCode",{parentName:"p"},"MainStack")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ErrorText"),", which are Styled Components defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"style.ts"),", and also of ",(0,r.kt)("inlineCode",{parentName:"p"},"FormCheckBalance")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenList")," components, which are yet to be defined."),(0,r.kt)("p",null,"The logic will work like this: the ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenList")," component will display the native tokens of the user, unless a contract address is entered in ",(0,r.kt)("inlineCode",{parentName:"p"},"FormCheckBalance"),", which will make ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenList")," show the balance for that CW20 contract, or show an error if that address does not have an associated contract."),(0,r.kt)("h3",{id:"add-to-protectedswitch"},"Add to ProtectedSwitch"),(0,r.kt)("p",null,"Your ",(0,r.kt)("inlineCode",{parentName:"p"},"ProtectedSwitch")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"App/index.tsx")," should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<ProtectedSwitch authPath={pathLogin}>\n  <Route exact path={pathBalance} component={Balance} />\n</ProtectedSwitch>\n")),(0,r.kt)("p",null,"Note that we remove ",(0,r.kt)("inlineCode",{parentName:"p"},"OperationResult"),", both the route and the component, since we won't be making transactions in this dApp."),(0,r.kt)("h2",{id:"add-formcheckbalance-component"},"Add FormCheckBalance component"),(0,r.kt)("h3",{id:"add-search-component"},"Add Search component"),(0,r.kt)("p",null,"For entering the address we'll use a custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Search")," component, it may seem hacky but does a good job integrating ",(0,r.kt)("inlineCode",{parentName:"p"},"formik")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"antd"),", and is in fact inspired by ",(0,r.kt)("inlineCode",{parentName:"p"},"formik-antd")," (but it's missing there as of now)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"App/forms/Search.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'// Search form not present in form-antd: https://github.com/jannikbuschke/formik-antd/blob/master/src/input/index.tsx\nimport { Input as BaseInput } from "antd";\nimport { InputProps as BaseInputProps, SearchProps as BaseSearchProps } from "antd/lib/input";\nimport { FieldProps } from "formik";\nimport { Field } from "formik-antd";\nimport * as React from "react";\nimport Search from "antd/lib/input/Search";\n\ninterface FormikFieldProps {\n  name: string;\n  // eslint-disable-next-line @typescript-eslint/no-explicit-any\n  validate?: (value: any) => undefined | string | Promise<any>;\n  fast?: boolean;\n}\n\ntype InputProps = FormikFieldProps & BaseInputProps;\n\ninterface InputType\n  extends React.ForwardRefExoticComponent<\n    FormikFieldProps & BaseInputProps & React.RefAttributes<BaseInput>\n  > {\n  // eslint-disable-next-line @typescript-eslint/ban-ts-comment\n  // @ts-expect-error\n  Search: React.ForwardRefExoticComponent<FormikFieldProps & BaseSearchProps & React.RefAttributes<Search>>;\n}\n\n// eslint-disable-next-line react/display-name\nconst Input = React.forwardRef((\n  { name, validate, fast, onChange: $onChange, onBlur: $onBlur, ...restProps }: InputProps,\n  // eslint-disable-next-line @typescript-eslint/ban-ts-comment\n  // @ts-expect-error\n  ref: React.Ref<Search>,\n) => (\n  <Field name={name} validate={validate} fast={fast}>\n    {({ field: { value, onChange, onBlur } }: FieldProps) => (\n      <BaseInput\n        ref={ref}\n        name={name}\n        value={value}\n        onChange={(event) => {\n          onChange(event);\n          $onChange && $onChange(event);\n        }}\n        onBlur={(event) => {\n          onBlur(event);\n          $onBlur && $onBlur(event);\n        }}\n        {...restProps}\n      />\n    )}\n  </Field>\n));\n\nconst TypedInput = (Input as unknown) as InputType;\ntype SearchProps = FormikFieldProps & BaseSearchProps;\n\n// eslint-disable-next-line react/display-name\nTypedInput.Search = React.forwardRef(\n  (\n    { name, validate, fast, onChange: $onChange, onBlur: $onBlur, ...restProps }: SearchProps,\n    ref: React.Ref<BaseInput>,\n  ) => (\n    <Field name={name} validate={validate} fast={fast}>\n      {({ field: { value, onChange, onBlur } }: FieldProps) => (\n        <BaseInput.Search\n          ref={ref}\n          name={name}\n          value={value}\n          onChange={(event) => {\n            onChange(event);\n            $onChange && $onChange(event);\n          }}\n          onBlur={(event) => {\n            onBlur(event);\n            $onBlur && $onBlur(event);\n          }}\n          {...restProps}\n        />\n      )}\n    </Field>\n  ),\n);\n\nexport default TypedInput.Search;\n')),(0,r.kt)("h3",{id:"add-contract-address-validation-schema"},"Add contract address validation schema"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"formik")," package we'll be using for building ",(0,r.kt)("inlineCode",{parentName:"p"},"FormCheckBalance")," has great integration with ",(0,r.kt)("inlineCode",{parentName:"p"},"yup"),", which allows us to use it to build validation schemas like the one we need for the contract address:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"App/forms/validationSchemas.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'import * as Yup from "yup";\nimport { config } from "../../config";\n\nconst regexStartsWithPrefix = new RegExp(`^${config.addressPrefix}`);\n\nconst addressShape = {\n  address: Yup.string()\n    .matches(regexStartsWithPrefix, `"${config.addressPrefix}" prefix required`)\n    .length(39 + config.addressPrefix.length, "Address invalid"),\n};\n\nexport const searchValidationSchema = Yup.object().shape(addressShape);\n')),(0,r.kt)("h3",{id:"formcheckbalance-implementation"},"FormCheckBalance implementation"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"routes/Balance/components/FormCheckBalance.tsx")," file would be this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Formik } from "formik";\nimport { Form, FormItem } from "formik-antd";\nimport React from "react";\nimport Search from "../../../forms/Search";\nimport { searchValidationSchema } from "../../../forms/validationSchemas";\n\ninterface FormCheckBalanceProps {\n  readonly setContractAddress: (value: React.SetStateAction<string>) => void;\n}\n\nexport function FormCheckBalance({ setContractAddress }: FormCheckBalanceProps): JSX.Element {\n  return (\n    <Formik\n      initialValues={{ address: "" }}\n      validationSchema={searchValidationSchema}\n      onSubmit={(values) => {\n        setContractAddress(values.address);\n      }}\n    >\n      {(formikProps) => (\n        <Form>\n          <FormItem name="address">\n            <Search\n              name="address"\n              placeholder="Enter contract address"\n              enterButton\n              onSearch={formikProps.submitForm}\n            />\n          </FormItem>\n        </Form>\n      )}\n    </Formik>\n  );\n}\n')),(0,r.kt)("p",null,"It uses the address validation schema defined before, and has a ",(0,r.kt)("inlineCode",{parentName:"p"},"setContractAddress")," param to update the state of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Balance")," route."),(0,r.kt)("h2",{id:"add-tokenlist-component"},"Add TokenList component"),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"FormCheckBalance")," working, we just need to implement ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenList"),"."),(0,r.kt)("p",null,"This component will:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check if there is a contract address:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If not, get the native balance from the ",(0,r.kt)("inlineCode",{parentName:"li"},"useAccount")," hook."),(0,r.kt)("li",{parentName:"ul"},"If yes, load the balance and the number of decimals for the CW20 contract token."),(0,r.kt)("li",{parentName:"ul"},"If address has no contract, show error.")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Display the balance:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the local ",(0,r.kt)("inlineCode",{parentName:"li"},"getCoinToDisplay()")," utility to get a user friendly format for balance, be it native or CW20."),(0,r.kt)("li",{parentName:"ul"},"Use the ",(0,r.kt)("inlineCode",{parentName:"li"},"showTokens")," flag for conditional rendering to avoid display issues when waiting for async data to load.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"TokenList")," implementation for achieving this would be:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"routes/Balance/components/TokenList/index.tsx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { CW20, nativeCoinToDisplay, useAccount, useError, useSdk } from "@cosmicdapp/logic";\nimport { Coin, coins } from "@cosmjs/launchpad";\nimport { Decimal } from "@cosmjs/math";\nimport { Divider, Typography } from "antd";\nimport React, { useEffect, useState } from "react";\nimport { config } from "../../../../../config";\nimport { TokenItem, TokenStack } from "./style";\n\nconst { Text } = Typography;\n\ninterface TokenListProps {\n  readonly contractAddress: string;\n}\n\nexport function TokenList({ contractAddress }: TokenListProps): JSX.Element {\n  const { setError, clearError } = useError();\n  const { getClient } = useSdk();\n  const { account } = useAccount();\n\n  const [balance, setBalance] = useState<readonly Coin[]>([]);\n  const [decimals, setDecimals] = useState<number>();\n\n  useEffect(() => {\n    if (!contractAddress) {\n      setBalance(account.balance);\n      setDecimals(undefined);\n      clearError();\n      return;\n    }\n\n    const client = getClient();\n\n    (async function updateBalance() {\n      try {\n        const contract = await client.getContract(contractAddress);\n        const cw20Contract = CW20(client).use(contract.address);\n        const [{ symbol: denom, decimals }, balance] = await Promise.all([\n          cw20Contract.tokenInfo(),\n          cw20Contract.balance(),\n        ]);\n        const amount = parseInt(balance, 10);\n\n        setBalance(coins(amount, denom));\n        setDecimals(decimals);\n        clearError();\n      } catch {\n        setError("No contract found in that address");\n        setBalance([]);\n        setDecimals(undefined);\n      }\n    })();\n  }, [account.balance, getClient, contractAddress, clearError, setError]);\n\n  function getCoinToDisplay(coin: Coin): Coin {\n    if (contractAddress && decimals) {\n      const amountFromDecimal = Decimal.fromAtomics(coin.amount, decimals).toString();\n      return { denom: coin.denom, amount: amountFromDecimal };\n    }\n\n    return nativeCoinToDisplay(coin, config.coinMap);\n  }\n\n  const isCw20Token = contractAddress && decimals !== undefined;\n  const isNativeToken = !contractAddress && decimals === undefined;\n  const showTokens = isCw20Token || isNativeToken;\n\n  return (\n    showTokens && (\n      <TokenStack>\n        {balance.map((token, index) => {\n          const { denom, amount } = getCoinToDisplay(token);\n\n          return (\n            <React.Fragment key={token.denom}>\n              {index > 0 && <Divider />}\n              <TokenItem>\n                <Text>{denom}</Text>\n                <Text>{amount !== "0" ? amount : "No tokens"}</Text>\n              </TokenItem>\n            </React.Fragment>\n          );\n        })}\n      </TokenStack>\n    )\n  );\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"routes/Balance/components/TokenList/style.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Stack } from "@cosmicdapp/design";\nimport styled from "styled-components";\n\nexport const TokenStack = styled(Stack)`\n  & > * {\n    --gap: 0;\n  }\n`;\n\nexport const TokenItem = styled.div`\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n\n  span {\n    font-family: var(--ff-iceland);\n    font-size: var(--s2);\n  }\n\n  span + span {\n    font-weight: bolder;\n    font-family: var(--ff-montserrat);\n    font-size: var(--s1);\n  }\n`;\n')),(0,r.kt)("h2",{id:"finished"},"Finished!"),(0,r.kt)("p",null,"Now you can check your native balances and your balance for any CW20 contract, and most importantly, you now know how to build a CosmJS based dApp!"))}m.isMDXComponent=!0}}]);