"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2816],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Taro testnet",description:"The first testnet built with OP Stack and Celestia."},i="Taro testnet",l={unversionedId:"developers/taro-testnet",id:"developers/taro-testnet",title:"Taro testnet",description:"The first testnet built with OP Stack and Celestia.",source:"@site/docs/developers/taro-testnet.md",sourceDirName:"developers",slug:"/developers/taro-testnet",permalink:"/fr/developers/taro-testnet",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/taro-testnet.md",tags:[],version:"current",frontMatter:{sidebar_label:"Taro testnet",description:"The first testnet built with OP Stack and Celestia."},sidebar:"developers",previous:{title:"Introduction to OP Stack integration",permalink:"/fr/developers/intro-to-op-stack"},next:{title:"Deploy a smart contract on Taro testnet",permalink:"/fr/developers/deploy-on-taro"}},s={},p=[{value:"Built with the OP Stack and Celestia",id:"built-with-the-op-stack-and-celestia",level:2},{value:"Building on Taro",id:"building-on-taro",level:2},{value:"RPC URLs",id:"rpc-urls",level:3},{value:"HTTPS",id:"https",level:4},{value:"WSS",id:"wss",level:4},{value:"Faucet",id:"faucet",level:3},{value:"Explorer",id:"explorer",level:3},{value:"Next steps",id:"next-steps",level:2}],c={toc:p},d="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"taro-testnet"},"Taro testnet"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Taro testnet",src:n(8366).Z,width:"3000",height:"1584"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tarotestnet.com"},"Taro Testnet")," is a fresh offering from Celestia Labs,\nbuilt with OP Stack and Celestia, and is dedicated to providing developers with\nan EVM-compatible execution layer to deploy their EVM applications on."),(0,r.kt)("h2",{id:"built-with-the-op-stack-and-celestia"},"Built with the OP Stack and Celestia"),(0,r.kt)("p",null,"The Taro Testnet is a testnet rollup a modified version of\n",(0,r.kt)("inlineCode",{parentName:"p"},"optimism-bedrock")," that uses Celestia as a data availability (DA)\nlayer. This integration can be found in this\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/optimism"},"repository"),". The testnet\nis hosted by ",(0,r.kt)("a",{parentName:"p",href:"https://caldera.xyz"},"Caldera"),", who makes it easy to launch\nrollup swith no code required."),(0,r.kt)("p",null,"In this setup, data handling is accomplished in two ways. Firstly, data is\nwritten to the DA layer, in this case, Celestia. Then, the data commitment\nis written to the ",(0,r.kt)("inlineCode",{parentName:"p"},"op-batcher"),". When reading, the ",(0,r.kt)("inlineCode",{parentName:"p"},"op-node")," retrieves the\ndata back from the DA layer by first reading the data commitment from the\n",(0,r.kt)("inlineCode",{parentName:"p"},"op-batcher"),", then reading the data from the DA layer using the data\ncommitment. Hence, while previously ",(0,r.kt)("inlineCode",{parentName:"p"},"op-node")," was reading from ",(0,r.kt)("inlineCode",{parentName:"p"},"calldata")," on\nEthereum, it now reads data from Celestia."),(0,r.kt)("p",null,"The tools involved in the data handling process include ",(0,r.kt)("inlineCode",{parentName:"p"},"op-batcher"),",\nwhich batches up rollup blocks and posts them to Ethereum, ",(0,r.kt)("inlineCode",{parentName:"p"},"op-geth"),"\nthat handles execution, and ",(0,r.kt)("inlineCode",{parentName:"p"},"op-proposer")," responsible for state commitment\nsubmission."),(0,r.kt)("p",null,"By using Celestia as a DA layer, existing L2s can switch from posting their\ndata as ",(0,r.kt)("inlineCode",{parentName:"p"},"calldata")," on Ethereum to posting to Celestia. The commitment to the\nblock is posted on Celestia, which is purpose-built for data availability.\nThis is more scalable than the traditional method of posting this data as\n",(0,r.kt)("inlineCode",{parentName:"p"},"calldata")," on monolithic chains."),(0,r.kt)("h2",{id:"building-on-taro"},"Building on Taro"),(0,r.kt)("p",null,"Taro Testnet provides a robust environment for developers to test their\nEthereum Virtual Machine (EVM) applications. It offers an EVM-compatible\nexecution layer, making it an ideal platform for developers looking to\nbuild and test applications in a setting that closely mirrors an OP Stack\nrollup on Celestia."),(0,r.kt)("p",null,"Learn more at ",(0,r.kt)("a",{parentName:"p",href:"https://tarotestnet.com"},"tarotestnet.com"),"."),(0,r.kt)("h3",{id:"rpc-urls"},"RPC URLs"),(0,r.kt)("p",null,"Remote Procedure Call (RPC) URLs are endpoints that allow developers to\ninteract with the blockchain. They are essential for sending transactions,\nquerying blockchain data, and performing other interactions with the\nblockchain."),(0,r.kt)("p",null,"For the Taro Testnet, you can connect to the following RPC URLs:"),(0,r.kt)("h4",{id:"https"},"HTTPS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://taro-testnet.calderachain.xyz/http"))),(0,r.kt)("h4",{id:"wss"},"WSS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wss://taro-testnet.calderachain.xyz/ws"))),(0,r.kt)("p",null,"This URL serves as the entry point to the Taro Testnet. You can use it\nin your applications to connect to the testnet and interact with the smart\ncontracts you deploy there."),(0,r.kt)("p",null,"Remember, Taro Testnet is a testing environment!"),(0,r.kt)("h3",{id:"faucet"},"Faucet"),(0,r.kt)("p",null,"To visit the Taro testnet faucet, go to\n",(0,r.kt)("a",{parentName:"p",href:"https://tarotestnet.com"},(0,r.kt)("inlineCode",{parentName:"a"},"https://tarotestnet.com")),"."),(0,r.kt)("h3",{id:"explorer"},"Explorer"),(0,r.kt)("p",null,"To visit the explorer, go to\n",(0,r.kt)("a",{parentName:"p",href:"http://explorer.tarotestnet.com/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://explorer.tarotestnet.com/")),"."),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Now that you have a better understanding of the Taro Testnet and its\nintegration of OP Stack and Celestia, you can start exploring its\ncapabilities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../deploy-on-taro"},"Deploy a smart contract on Taro testnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../gm-portal-taro"},"Deploy a GM Portal dapp on Taro testnet"))))}h.isMDXComponent=!0},8366:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Celestia_Taro_Testnet-0cd5b1c1609083aa21a1f6ed5d263719.png"}}]);