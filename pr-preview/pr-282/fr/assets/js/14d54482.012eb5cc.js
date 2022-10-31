"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[7111],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2488:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_label:"Arabica Devnet"},s="Arabica Devnet",c={unversionedId:"nodes/arabica-devnet",id:"nodes/arabica-devnet",title:"Arabica Devnet",description:"arabica-devnet",source:"@site/docs/nodes/arabica-devnet.md",sourceDirName:"nodes",slug:"/nodes/arabica-devnet",permalink:"/pr-preview/pr-282/fr/nodes/arabica-devnet",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/arabica-devnet.md",tags:[],version:"current",frontMatter:{sidebar_label:"Arabica Devnet"},sidebar:"nodes",previous:{title:"Participate in the Celestia Testnets",permalink:"/pr-preview/pr-282/fr/nodes/participate"},next:{title:"Mamaki Testnet",permalink:"/pr-preview/pr-282/fr/nodes/mamaki-testnet"}},p={},u=[{value:"Integrations",id:"integrations",level:2},{value:"RPC endpoints",id:"rpc-endpoints",level:2},{value:"Arabica Devnet faucet",id:"arabica-devnet-faucet",level:2},{value:"Explorers",id:"explorers",level:2}],d={toc:u};function f(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"arabica-devnet"},"Arabica Devnet"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"arabica-devnet",src:n(5922).Z,width:"4500",height:"2251"})),(0,o.kt)("p",null,"Arabica Devnet is a new testnet from Celestia Labs that is focused\nexclusively on providing developers with enhanced performance and\nthe latest upgrades for testing their rollups and applications."),(0,o.kt)("p",null,"Arabica does not focus on validator or consensus-level testing, rather,\nthat is what Mamaki Testnet is used for. If you are a validator, we\nrecommend just testing your validator operations on Mamaki ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-282/fr/nodes/mamaki-testnet"},"here"),"."),(0,o.kt)("p",null,"With Arabica having the latest updates from all Celestia's products deployed\non it, it can be subject to many changes. Therefore, as a fair warning,\nArabica can break unexpectedly but given it will be continously updated,\nit is a useful way to keep testing the latest changes in the software."),(0,o.kt)("p",null,"Developers can still deploy on Mamaki Testnet their sovereign rollups if they\nchose to do so, it just will always lag behind Arabica Devnet until Mamaki\nundergoes Hardfork Upgrades in coordination with Validators."),(0,o.kt)("h2",{id:"integrations"},"Integrations"),(0,o.kt)("p",null,"This guide contains the relevant sections for how to connect to Arabica,\ndepending on the type of node you are running."),(0,o.kt)("p",null,"Your best approach to participating is to first determine which node\nyou would like to run. Each node guides will link to the relevant network\nin order to show you how to connect to them."),(0,o.kt)("p",null,"You have a list of options on the type of nodes you can run in order to\nparticipate in Arabica:"),(0,o.kt)("p",null,"Data Availability:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-282/fr/nodes/bridge-node"},"Bridge Node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-282/fr/nodes/full-storage-node"},"Full Storage Node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-282/fr/nodes/light-node"},"Light Node"))),(0,o.kt)("p",null,"Select the type of node you would like to run and follow the instructions\non each respective page. Whenever you are asked to select the type of network\nyou want to connect to in those guides, select ",(0,o.kt)("inlineCode",{parentName:"p"},"Arabica")," in order to refer\nto the correct instructions on this page on how to connect to Arabica."),(0,o.kt)("h2",{id:"rpc-endpoints"},"RPC endpoints"),(0,o.kt)("p",null,"There is a list of RPC endpoints you can use to connect to Arabica Devnet:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://limani.celestia-devops.dev"},"https://limani.celestia-devops.dev"))),(0,o.kt)("h2",{id:"arabica-devnet-faucet"},"Arabica Devnet faucet"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"USING THIS FAUCET DOES NOT ENTITLE YOU TO ANY AIRDROP OR OTHER\nDISTRIBUTION OF MAINNET CELESTIA TOKENS. MAINNET CELESTIA TOKENS\nDO NOT CURRENTLY EXIST AND THERE ARE NO PUBLIC SALES OR OTHER PUBLIC\nDISTRIBUTIONS OF ANY MAINNET CELESTIA TOKENS.")),(0,o.kt)("p",null,"You can request from Arabica Devnet Faucet on the #arabica-faucet channel on\nCelestia's Discord server with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$request <CELESTIA-ADDRESS>\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"<CELESTIA-ADDRESS>")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia1******")," generated address."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Faucet has a limit of 10 tokens per week per address/Discord ID")),(0,o.kt)("h2",{id:"explorers"},"Explorers"),(0,o.kt)("p",null,"There is an explorer you can use for Arabica:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://explorer.celestia.observer/arabica"},"https://explorer.celestia.observer/arabica"))))}f.isMDXComponent=!0},5922:function(e,t,n){t.Z=n.p+"assets/images/arabica-devnet-d7ec894d41dfc56748cc565a7e1a5b91.png"}}]);