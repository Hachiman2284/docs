"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Deploy the QGB contract",description:"Learn how to deploy the QGB smart contract."},l="Deploy the QGB contract",i={unversionedId:"nodes/qgb-deploy",id:"nodes/qgb-deploy",title:"Deploy the QGB contract",description:"Learn how to deploy the QGB smart contract.",source:"@site/docs/nodes/qgb-deploy.md",sourceDirName:"nodes",slug:"/nodes/qgb-deploy",permalink:"/pr-preview/pr-828/nodes/qgb-deploy",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/qgb-deploy.md",tags:[],version:"current",frontMatter:{sidebar_label:"Deploy the QGB contract",description:"Learn how to deploy the QGB smart contract."},sidebar:"nodes",previous:{title:"QGB Relayer",permalink:"/pr-preview/pr-828/nodes/qgb-relayer"},next:{title:"Consensus full node",permalink:"/pr-preview/pr-828/nodes/consensus-full-node"}},s={},p=[{value:"How to run",id:"how-to-run",level:2},{value:"Install the QGB binary",id:"install-the-qgb-binary",level:3},{value:"Add keys",id:"add-keys",level:3},{value:"Deploy the contract",id:"deploy-the-contract",level:3}],c={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-the-qgb-contract"},"Deploy the QGB contract"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy")," is a helper command that allows deploying the QGB smart contract to a new EVM chain:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ssh"},'qgb deploy --help\n\nDeploys the QGB contract and initializes it using the provided Celestia chain\n\nUsage:\n  qgb deploy <flags> [flags]\n  qgb deploy [command]\n\nAvailable Commands:\n  keys        QGB keys manager\n\nFlags:\n  -c, --celes-grpc string       Specify the grpc address (default "localhost:9090")\n  -d, --evm-address string      Specify the EVM account address to use for signing (Note: the private key should be in the keystore)\n  -z, --evm-chain-id uint       Specify the evm chain id (default 5)\n  -l, --evm-gas-limit uint      Specify the evm gas limit (default 25000000)\n      --evm-passphrase string   the evm account passphrase (if not specified as a flag, it will be asked interactively)\n  -e, --evm-rpc string          Specify the ethereum rpc address (default "http://localhost:8545")\n  -h, --help                    help for deploy\n      --home string             The qgb deployer home directory\n  -n, --starting-nonce string   Specify the nonce to start the QGB contract from. "earliest": for genesis, "latest": for latest valset nonce, "nonce": for the latest valset before the provided nonce, provided nonce included. (default "latest")\n\nUse "qgb deploy [command] --help" for more information about a command.\n')),(0,a.kt)("h2",{id:"how-to-run"},"How to run"),(0,a.kt)("h3",{id:"install-the-qgb-binary"},"Install the QGB binary"),(0,a.kt)("p",null,"Make sure to have the QGB binary installed. Check ",(0,a.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/qgb-binary"},"here")," for more details."),(0,a.kt)("h3",{id:"add-keys"},"Add keys"),(0,a.kt)("p",null,"In order to deploy a QGB smart contract, you will need a funded EVM address and its private key. The ",(0,a.kt)("inlineCode",{parentName:"p"},"keys")," command will help you set up this key:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb deploy keys  --help\n")),(0,a.kt)("p",null,"To import your EVM private key, there is the ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," subcommand to assist you with that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb deploy keys evm import --help\n")),(0,a.kt)("p",null,"This subcommand allows you to either import a raw ECDSA private key provided as plaintext, or import it from a file. The files are JSON keystore files encrypted using a passphrase like in ",(0,a.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/docs/developers/dapp-developer/native-accounts"},"here"),"."),(0,a.kt)("p",null,"After adding the key, you can check that it's added via running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb deploy keys evm list\n")),(0,a.kt)("p",null,"For more information about the ",(0,a.kt)("inlineCode",{parentName:"p"},"keys")," command, check the ",(0,a.kt)("inlineCode",{parentName:"p"},"keys")," documentation in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/orchestrator-relayer/blob/main/docs/keys.md"},"here"),"."),(0,a.kt)("h3",{id:"deploy-the-contract"},"Deploy the contract"),(0,a.kt)("p",null,"Now, we can deploy the QGB contract to a new EVM chain:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb deploy \\\n  -z 4 \\\n  -d 0x27a1F8CE94187E4b043f4D57548EF2348Ed556c7 \\\n  -c localhost:9090 \\\n  -n latest \\\n  -e http://localhost:8545\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," can be replaced by the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"latest"),": to deploy the QGB contract starting from the latest validator set."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"earliest"),": to deploy the QGB contract starting from genesis."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nonce"),": you can provide a custom nonce on where you want the QGB to start. If the provided nonce is not a ",(0,a.kt)("inlineCode",{parentName:"li"},"Valset")," attestation, then the one before it will be used to deploy the QGB smart contract.")),(0,a.kt)("p",null,"And, now you will see the QGB smart contract address in the logs along with the transaction hash."))}h.isMDXComponent=!0}}]);