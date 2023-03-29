"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),s=n(2466),l=n(6550),i=n(1980),p=n(7392),c=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,p]=m({queryString:n,groupId:a}),[u,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=i??u;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),f(e)}),[p,f,o]),tabValues:o}}var k=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=p[n].value;a!==l&&(u(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},s,{className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},3416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),s=n(5162);const l={sidebar_label:"Consensus full node"},i="Setting up a Celestia consensus full node",p={unversionedId:"nodes/consensus-full-node",id:"nodes/consensus-full-node",title:"Setting up a Celestia consensus full node",description:"Consensus Full Nodes allow you to sync blockchain history in the Celestia",source:"@site/docs/nodes/consensus-full-node.md",sourceDirName:"nodes",slug:"/nodes/consensus-full-node",permalink:"/pr-preview/pr-580/fr/nodes/consensus-full-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/consensus-full-node.md",tags:[],version:"current",frontMatter:{sidebar_label:"Consensus full node"},sidebar:"nodes",previous:{title:"Validator node",permalink:"/pr-preview/pr-580/fr/nodes/validator-node"},next:{title:"Relayer",permalink:"/pr-preview/pr-580/fr/nodes/relayer"}},c={},u=[{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Setting up a consensus full node",id:"setting-up-a-consensus-full-node",level:2},{value:"Setup the dependencies",id:"setup-the-dependencies",level:3},{value:"Install celestia-app",id:"install-celestia-app",level:3},{value:"Setup the P2P networks",id:"setup-the-p2p-networks",level:3},{value:"Configure pruning",id:"configure-pruning",level:3},{value:"Reset network",id:"reset-network",level:3},{value:"Syncing",id:"syncing",level:3},{value:"State sync",id:"state-sync",level:4},{value:"Quick sync",id:"quick-sync",level:4},{value:"Start the celestia-app",id:"start-the-celestia-app",level:3},{value:"Optional: configure for RPC endpoint",id:"optional-configure-for-rpc-endpoint",level:3},{value:"Transaction indexer configuration options",id:"transaction-indexer-configuration-options",level:2}],d={toc:u},h="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(h,(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-a-celestia-consensus-full-node"},"Setting up a Celestia consensus full node"),(0,r.kt)("p",null,"Consensus Full Nodes allow you to sync blockchain history in the Celestia\nConsensus Layer."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Consensus Full Node",src:n(5024).Z,width:"3000",height:"3761"})),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,r.kt)("p",null,"The following hardware minimum requirements are recommended for running the\nConsensus Full Node:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Memory: 8 GB RAM"),(0,r.kt)("li",{parentName:"ul"},"CPU: Quad-Core"),(0,r.kt)("li",{parentName:"ul"},"Disk: 250 GB SSD Storage"),(0,r.kt)("li",{parentName:"ul"},"Bandwidth: 1 Gbps for Download/100 Mbps for Upload")),(0,r.kt)("h2",{id:"setting-up-a-consensus-full-node"},"Setting up a consensus full node"),(0,r.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64\ninstance machine."),(0,r.kt)("h3",{id:"setup-the-dependencies"},"Setup the dependencies"),(0,r.kt)("p",null,"Follow the instructions on installing the dependencies ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-580/fr/nodes/environment"},"here"),"."),(0,r.kt)("h3",{id:"install-celestia-app"},"Install celestia-app"),(0,r.kt)("p",null,"Follow the tutorial on installing celestia-app ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-580/fr/nodes/celestia-app"},"here"),"."),(0,r.kt)("h3",{id:"setup-the-p2p-networks"},"Setup the P2P networks"),(0,r.kt)("p",null,"Now we will setup the P2P Networks by cloning the networks repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd $HOME\nrm -rf networks\ngit clone https://github.com/celestiaorg/networks.git\n")),(0,r.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,r.kt)("p",null,'To initialize the network pick a "node-name" that describes your\nnode. The --chain-id parameter we are using here is ',(0,r.kt)("inlineCode",{parentName:"p"},"mocha"),". Keep in\nmind that this might change if a new testnet is deployed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'celestia-appd init "node-name" --chain-id mocha\n')),(0,r.kt)("p",null,"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," file. For mocha we are using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cp $HOME/networks/mocha/genesis.json $HOME/.celestia-app/config\n")),(0,r.kt)("p",null,"Set seeds and peers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'PERSISTENT_PEERS=$(curl -sL https://raw.githubusercontent.com/celestiaorg/networks/master/mocha/peers.txt | tr -d \'\\n\')\necho $PERSISTENT_PEERS\nsed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \\"$PERSISTENT_PEERS\\"/" $HOME/.celestia-app/config/config.toml\n')),(0,r.kt)("p",null,"Note: You can find more peers ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/networks/blob/master/mocha/peers.txt"},"here"),".")),(0,r.kt)(s.Z,{value:"blockspacerace",label:"Blockspace Race",mdxType:"TabItem"},(0,r.kt)("p",null,'To initialize the network pick a "node-name" that describes your\nnode. The --chain-id parameter we are using here is ',(0,r.kt)("inlineCode",{parentName:"p"},"blockspacerace"),". Keep in\nmind that this might change if a new testnet is deployed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'celestia-appd init "node-name" --chain-id blockspacerace\n')),(0,r.kt)("p",null,"Copy the ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," file. For blockspacerace we are using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cp $HOME/networks/blockspacerace/genesis.json $HOME/.celestia-app/config\n")),(0,r.kt)("p",null,"Set seeds and peers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'PERSISTENT_PEERS=$(curl -sL https://raw.githubusercontent.com/celestiaorg/networks/master/blockspacerace/peers.txt | tr -d \'\\n\')\necho $PERSISTENT_PEERS\nsed -i.bak -e "s/^persistent_peers *=.*/persistent_peers = \\"$PERSISTENT_PEERS\\"/" $HOME/.celestia-app/config/config.toml\n')),(0,r.kt)("p",null,"Note: You can find more peers ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/networks/blob/master/blockspacerace/peers.txt"},"here"),"."))),(0,r.kt)("h3",{id:"configure-pruning"},"Configure pruning"),(0,r.kt)("p",null,"For lower disk space usage we recommend setting up pruning using the\nconfigurations below. You can change this to your own pruning configurations\nif you want:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'PRUNING="custom"\nPRUNING_KEEP_RECENT="100"\nPRUNING_INTERVAL="10"\n\nsed -i -e "s/^pruning *=.*/pruning = \\"$PRUNING\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\\n\\"$PRUNING_KEEP_RECENT\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\\n\\"$PRUNING_INTERVAL\\"/" $HOME/.celestia-app/config/app.toml\n')),(0,r.kt)("h3",{id:"reset-network"},"Reset network"),(0,r.kt)("p",null,"This will delete all data folders so we can start fresh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tendermint unsafe-reset-all --home $HOME/.celestia-app\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,r.kt)("h3",{id:"syncing"},"Syncing"),(0,r.kt)("p",null,"By default, a consensus node will sync using block sync; that is request, validate\nand execute every block up to the head of the blockchain. This is the most secure\nmechanism yet the slowest (taking up to days depending on the height of the blockchain)."),(0,r.kt)("p",null,"There are two alternatives for quicker syncing."),(0,r.kt)("h4",{id:"state-sync"},"State sync"),(0,r.kt)("p",null,"State sync uses light client verification to verify state snapshots from peers\nand then apply them. State sync relies on weak subjectivity; a trusted header\n(specifically the hash and height) must be provided. This can be found by querying\na trusted RPC endpoint (/block). RPC endpoints are also required for retrieving\nlight blocks. These can be found in the docs here under the respective networks or\nfrom the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/chain-registry"},"chain-registry"),"."),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.celestia-app/config/config.toml"),", set"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'rpc_servers = ""\ntrust_height = 0\ntrust_hash = ""\n')),(0,r.kt)("p",null,"to their respective fields. At least two different rpc endpoints should be provided.\nThe more, the greater the chance of detecting any fraudulent behavior."),(0,r.kt)("p",null,"Once setup, you should be ready to start the node as normal. In the logs, you should\nsee: ",(0,r.kt)("inlineCode",{parentName:"p"},"Discovering snapshots"),". This may take a few minutes before snapshots are found\ndepending on the network topology."),(0,r.kt)("h4",{id:"quick-sync"},"Quick sync"),(0,r.kt)("p",null,"Quick sync effectively downloads the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," directory from a third-party provider\nmeaning the node has all the application and blockchain state as the node it was\ncopied from."),(0,r.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,r.kt)("p",null,"Run the following command to quick-sync from a snapshot for ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'cd $HOME\nrm -rf ~/.celestia-app/data\nmkdir -p ~/.celestia-app/data\nSNAP_NAME=$(curl -s https://snaps.qubelabs.io/celestia/ | \\\n    egrep -o ">mocha.*tar" | tr -d ">")\nwget -O - https://snaps.qubelabs.io/celestia/${SNAP_NAME} | tar xf - \\\n    -C ~/.celestia-app/data/\n'))),(0,r.kt)(s.Z,{value:"blockspacerace",label:"Blockspace Race",mdxType:"TabItem"},(0,r.kt)("p",null,"Run the following command to quick-sync from a snapshot for ",(0,r.kt)("inlineCode",{parentName:"p"},"blockspacerace"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'cd $HOME\nrm -rf ~/.celestia-app/data\nmkdir -p ~/.celestia-app/data\nSNAP_NAME=$(curl -s https://snaps.qubelabs.io/celestia/ | \\\n    egrep -o ">blockspacerace.*tar" | tr -d ">")\nwget -O - https://snaps.qubelabs.io/celestia/${SNAP_NAME} | tar xf - \\\n    -C ~/.celestia-app/data/\n')))),(0,r.kt)("h3",{id:"start-the-celestia-app"},"Start the celestia-app"),(0,r.kt)("p",null,"In order to start your consensus full node, run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd start\n")),(0,r.kt)("p",null,"Follow the tutorial on setting up Celestia-App as a background process\nwith SystemD ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-580/fr/nodes/systemd"},"here"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,r.kt)("h3",{id:"optional-configure-for-rpc-endpoint"},"Optional: configure for RPC endpoint"),(0,r.kt)("p",null,"You can configure your Consensus Full Node to be a public RPC endpoint\nand listen to any connections from Data Availability Nodes in order to\nserve requests for the Data Availability API ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-580/fr/developers/node-tutorial"},"here"),"."),(0,r.kt)("p",null,"Run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'EXTERNAL_ADDRESS=$(wget -qO- eth0.me)\nsed -i.bak -e "s/^external-address = \\"\\"/external-address = \\"$EXTERNAL_ADDRESS:26656\\"/" $HOME/.celestia-app/config/config.toml\nsed -i \'s#"tcp://127.0.0.1:26657"#"tcp://127.0.0.1:26657"#g\' ~/.celestia-app/config/config.toml\n')),(0,r.kt)("p",null,"Restart ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-appd")," in the previous step to load those configs."),(0,r.kt)("h2",{id:"transaction-indexer-configuration-options"},"Transaction indexer configuration options"),(0,r.kt)("p",null,"This section will show you how to set your ",(0,r.kt)("inlineCode",{parentName:"p"},"config.toml")," file in ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-app"),"\nto chose which transactions to index. In some\ncases, a node operator will be able to decide which transactions to index\nbased on configuration set in the application."),(0,r.kt)("p",null,"The options are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"null")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"kv")," (default) - the simplest possible indexer backed by key-value storage\n(defaults to levelDB; see DBBackend)",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"when ",(0,r.kt)("inlineCode",{parentName:"li"},"kv")," is chosen ",(0,r.kt)("inlineCode",{parentName:"li"},"tx.height")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"tx.hash")," will always be indexed"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"psql")," - the indexer services backed by PostgreSQL",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"when ",(0,r.kt)("inlineCode",{parentName:"li"},"kv")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"psql")," is chosen, ",(0,r.kt)("inlineCode",{parentName:"li"},"tx.height")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"tx.hash")," will always be indexed")))))}m.isMDXComponent=!0},5024:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/consensus-full-node-ac064680461158f12d081ec59f14c546.png"}}]);