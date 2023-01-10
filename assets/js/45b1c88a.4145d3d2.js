"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[7393],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9571:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d}});var o=n(3117),r=(n(7294),n(3905));const a={sidebar_label:"Bridge Node"},i="Setting up a Celestia Bridge Node",l={unversionedId:"nodes/bridge-node",id:"nodes/bridge-node",title:"Setting up a Celestia Bridge Node",description:"This tutorial will go over the steps to setting up your Celestia Bridge node.",source:"@site/docs/nodes/bridge-node.md",sourceDirName:"nodes",slug:"/nodes/bridge-node",permalink:"/nodes/bridge-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/bridge-node.md",tags:[],version:"current",frontMatter:{sidebar_label:"Bridge Node"},sidebar:"nodes",previous:{title:"Light Node",permalink:"/nodes/light-node"},next:{title:"Full Storage Node",permalink:"/nodes/full-storage-node"}},s={},d=[{value:"Overview of bridge nodes",id:"overview-of-bridge-nodes",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Setting up your bridge node",id:"setting-up-your-bridge-node",level:2},{value:"Setup the dependencies",id:"setup-the-dependencies",level:3},{value:"Deploy the Celestia bridge node",id:"deploy-the-celestia-bridge-node",level:2},{value:"Install Celestia node",id:"install-celestia-node",level:3},{value:"Initialize the bridge node",id:"initialize-the-bridge-node",level:3},{value:"Run the bridge node",id:"run-the-bridge-node",level:3},{value:"Optional: run the bridge node with a custom key",id:"optional-run-the-bridge-node-with-a-custom-key",level:4},{value:"Optional: start the bridge node with SystemD",id:"optional-start-the-bridge-node-with-systemd",level:3}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-a-celestia-bridge-node"},"Setting up a Celestia Bridge Node"),(0,r.kt)("p",null,"This tutorial will go over the steps to setting up your Celestia Bridge node."),(0,r.kt)("p",null,"Bridge nodes connect the data availability layer and the consensus layer\nwhile also having the option of becoming a validator."),(0,r.kt)("p",null,"Validators do not have to run bridge nodes, but are encouraged to in order\nto relay blocks to the data availability network."),(0,r.kt)("h2",{id:"overview-of-bridge-nodes"},"Overview of bridge nodes"),(0,r.kt)("p",null,"A Celestia bridge node has the following properties:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Import and process \u201craw\u201d headers & blocks from a trusted Core process\n(meaning a trusted RPC connection to a celestia-core node) in the\nConsensus network. Bridge Nodes can run this Core process internally\n(embedded) or simply connect to a remote endpoint. Bridge Nodes also\nhave the option of being an active validator in the Consensus network."),(0,r.kt)("li",{parentName:"ol"},"Validate and erasure code the \u201craw\u201d blocks"),(0,r.kt)("li",{parentName:"ol"},"Supply block shares with data availability headers to Light Nodes in the DA network.\n",(0,r.kt)("img",{alt:"bridge-node-diagram",src:n(8842).Z,width:"2802",height:"700"}))),(0,r.kt)("p",null,"From an implementation perspective, Bridge Nodes run two separate processes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Celestia App with Celestia Core\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app"},"see repo"),")"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Celestia App")," is the state machine where the application and the\nproof-of-stake logic is run. Celestia App is built on\n",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/"},"Cosmos SDK")," and also encompasses\n",(0,r.kt)("strong",{parentName:"li"},"Celestia Core"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Celestia Core")," is the state interaction, consensus and block production\nlayer. Celestia Core is built on ",(0,r.kt)("a",{parentName:"li",href:"https://docs.tendermint.com/"},"Tendermint Core"),",\nmodified to store data roots of erasure coded blocks among other changes\n(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/celestiaorg/celestia-core/tree/master/docs/celestia-architecture"},"see ADRs"),")."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Celestia Node (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node"},"see repo"),")"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Celestia Node")," augments the above with a separate libp2p network that\nserves data availability sampling requests. The team sometimes refer to\nthis as the \u201chalo\u201d network.")))),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,r.kt)("p",null,"The following hardware minimum requirements are recommended for running the\nbridge node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Memory: 8 GB RAM"),(0,r.kt)("li",{parentName:"ul"},"CPU: Quad-Core"),(0,r.kt)("li",{parentName:"ul"},"Disk: 250 GB SSD Storage"),(0,r.kt)("li",{parentName:"ul"},"Bandwidth: 1 Gbps for Download/100 Mbps for Upload")),(0,r.kt)("h2",{id:"setting-up-your-bridge-node"},"Setting up your bridge node"),(0,r.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64 instance machine."),(0,r.kt)("h3",{id:"setup-the-dependencies"},"Setup the dependencies"),(0,r.kt)("p",null,"Follow the tutorial here installing the dependencies ",(0,r.kt)("a",{parentName:"p",href:"/nodes/environment"},"here"),"."),(0,r.kt)("h2",{id:"deploy-the-celestia-bridge-node"},"Deploy the Celestia bridge node"),(0,r.kt)("h3",{id:"install-celestia-node"},"Install Celestia node"),(0,r.kt)("p",null,"Install the Celestia Node binary, which will be used to run the Bridge Node."),(0,r.kt)("p",null,"Follow the tutorial for installing Celestia Node ",(0,r.kt)("a",{parentName:"p",href:"/nodes/celestia-node"},"here"),"."),(0,r.kt)("h3",{id:"initialize-the-bridge-node"},"Initialize the bridge node"),(0,r.kt)("p",null,"Run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge init --core.ip <ip-address> --core.rpc.port <port>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.rpc.port")," defaults to 26657, so if you do not specify\nit in the command line, it will default to that port. You can use the flag\nto specify another port if you prefer.")),(0,r.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,r.kt)("a",{parentName:"p",href:"/nodes/mamaki-testnet#rpc-endpoints"},"here")),(0,r.kt)("h3",{id:"run-the-bridge-node"},"Run the bridge node"),(0,r.kt)("p",null,"Start the Bridge Node with a connection to a validator node's gRPC endpoint\n(which is usually exposed on port 9090):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.ip <ip-address> --core.grpc.port <port>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.grpc.port")," defaults to 9090, so if you do not specify\nit in the command line, it will default to that port. You can use the flag\nto specify another port if you prefer.")),(0,r.kt)("p",null,"If you need a list of RPC endpoints to connect to, you can check from the list ",(0,r.kt)("a",{parentName:"p",href:"/nodes/mamaki-testnet#rpc-endpoints"},"here")),(0,r.kt)("p",null,"You can create your key for your node by following the ",(0,r.kt)("inlineCode",{parentName:"p"},"cel-key")," instructions ",(0,r.kt)("a",{parentName:"p",href:"/developers/celestia-node-key"},"here")),(0,r.kt)("p",null,"Once you start the Bridge Node, a wallet key will be generated for you.\nYou will need to fund that address with Testnet tokens to pay for\nPayForData transactions.\nYou can find the address by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key list --node.type bridge --keyring-backend test\n")),(0,r.kt)("p",null,"You have two networks to get testnet tokens from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nodes/arabica-devnet#arabica-devnet-faucet"},"Arabica")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/nodes/mamaki-testnet#mamaki-testnet-faucet"},"Mamaki"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: If you are running a bridge node for your validator\nit is highly recommended to request Mamaki testnet tokens\nas this is the testnet used to test out validator operations.")),(0,r.kt)("h4",{id:"optional-run-the-bridge-node-with-a-custom-key"},"Optional: run the bridge node with a custom key"),(0,r.kt)("p",null,"In order to run a bridge node using a custom key:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The custom key must exist inside the celestia bridge node directory at the\ncorrect path (default: ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.celestia-bridge/keys/keyring-test"),")"),(0,r.kt)("li",{parentName:"ol"},"The name of the custom key must be passed upon ",(0,r.kt)("inlineCode",{parentName:"li"},"start"),", like so:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge start --core.ip <ip> --core.grpc.port 9090 --keyring.accname <name_of_custom_key>\n")),(0,r.kt)("h3",{id:"optional-start-the-bridge-node-with-systemd"},"Optional: start the bridge node with SystemD"),(0,r.kt)("p",null,"Follow the tutorial on setting up the bridge node as a background process with\nSystemD ",(0,r.kt)("a",{parentName:"p",href:"/nodes/systemd#celestia-bridge-node"},"here"),"."),(0,r.kt)("p",null,"You have successfully set up a bridge node that is syncing with the network."))}u.isMDXComponent=!0},8842:function(e,t,n){t.Z=n.p+"assets/images/BridgeNodes-c9d5799bf588d3becaefb313bd03b0c2.png"}}]);