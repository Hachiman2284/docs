"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9615],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=a(4334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(3117),r=a(7294),o=a(4334),l=a(2389),i=a(7392),u=a(7094),c=a(2466),s="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:a,block:l,defaultValue:p,values:m,groupId:h,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,i.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,u.U)(),[N,T]=(0,r.useState)(v),_=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=h){const e=y[h];null!=e&&e!==N&&k.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,a=_.indexOf(t),n=k[a].value;n!==N&&(E(t),T(n),null!=h&&w(h,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;a=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;a=_[t]??_[_.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},g)},k.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>_.push(e),onKeyDown:C,onClick:O},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,r.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},1846:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=a(3117),r=(a(7294),a(3905)),o=a(5488),l=a(5162);const i={sidebar_label:"Docker Images"},u="\ud83d\udc33 Docker Setup",c={unversionedId:"nodes/docker-images",id:"nodes/docker-images",title:"\ud83d\udc33 Docker Setup",description:"This page has instructions to run celestia-node using Docker. If you are",source:"@site/docs/nodes/docker-images.mdx",sourceDirName:"nodes",slug:"/nodes/docker-images",permalink:"/pr-preview/pr-437/fr/nodes/docker-images",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/docker-images.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Docker Images"},sidebar:"nodes",previous:{title:"Installing Celestia Node",permalink:"/pr-preview/pr-437/fr/nodes/celestia-node"},next:{title:"Installing Celestia App",permalink:"/pr-preview/pr-437/fr/nodes/celestia-app"}},s={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Light Node Setup",id:"light-node-setup",level:2},{value:"Arabica Devnet Setup",id:"arabica-devnet-setup",level:2},{value:"Mocha Testnet Setup",id:"mocha-testnet-setup",level:2},{value:"Bridge Node Setup",id:"bridge-node-setup",level:2},{value:"Arabica Bridge Node Setup",id:"arabica-bridge-node-setup",level:2},{value:"Mocha Bridge Node Setup",id:"mocha-bridge-node-setup",level:2},{value:"Full Node Setup",id:"full-node-setup",level:2},{value:"Arabica Full Node Setup",id:"arabica-full-node-setup",level:2},{value:"Mocha Full Node Setup",id:"mocha-full-node-setup",level:2}],p={toc:d};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-docker-setup"},"\ud83d\udc33 Docker Setup"),(0,r.kt)("p",null,"This page has instructions to run ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node")," using Docker. If you are\nlooking for instructions to run ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node")," using a binary, please\nrefer to the ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-437/fr/nodes/celestia-node"},"Celestia Node")," page."),(0,r.kt)("p",null,"Using Docker is the easiest way to run ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node")," for most\nusers. Docker is a containerization platform that allows you to run ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node"),"\nin an isolated environment."),(0,r.kt)("p",null,"This means that you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node")," on your machine without having\nto worry about installing and configuring all of the dependencies required\nto run the node."),(0,r.kt)("p",null,"The easiest way to install Docker is to use the Docker Desktop installer or\nUbuntu. You can find the instructions for your operating system\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install"},"here"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker"},"Docker")," and basic understanding of Docker")),(0,r.kt)(o.Z,{groupID:"node",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,r.kt)("h2",{id:"light-node-setup"},"Light Node Setup"),(0,r.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,r.kt)("h2",{id:"arabica-devnet-setup"},"Arabica Devnet Setup"),(0,r.kt)("p",null,"Run the image from the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -e NODE_TYPE=light -e P2P_NETWORK=arabica ghcr.io/celestiaorg/celestia-node:0.6.2 celestia light start --core.ip https://limani.celestia-devops.dev --core.grpc.port 9090 --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network arabica\n")),(0,r.kt)("p",null,"Congratulations! You now have a Celestia Light Node running on the Arabica devnet."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"arabica_light_docker",src:a(8316).Z,width:"1984",height:"1218"})),(0,r.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,r.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")),(0,r.kt)(l.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,r.kt)("h2",{id:"mocha-testnet-setup"},"Mocha Testnet Setup"),(0,r.kt)("p",null,"Run the image from the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -e NODE_TYPE=light -e P2P_NETWORK=mocha ghcr.io/celestiaorg/celestia-node:0.6.2 celestia light start --core.ip https://rpc-mocha.pops.one --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network mocha\n")),(0,r.kt)("p",null,"Congratulations! You now have a Celestia Light Node running on the Mocha testnet."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"mocha_light_docker",src:a(3609).Z,width:"1984",height:"1218"})),(0,r.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,r.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")))),(0,r.kt)(l.Z,{value:"bridge",label:"Bridge",mdxType:"TabItem"},(0,r.kt)("h2",{id:"bridge-node-setup"},"Bridge Node Setup"),(0,r.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,r.kt)("h2",{id:"arabica-bridge-node-setup"},"Arabica Bridge Node Setup"),(0,r.kt)("p",null,"Run the image from the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -e NODE_TYPE=bridge -e P2P_NETWORK=arabica ghcr.io/celestiaorg/celestia-node:0.6.2 celestia bridge start --core.ip https://limani.celestia-devops.dev --core.grpc.port 9090 --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network arabica\n")),(0,r.kt)("p",null,"Congratulations! You now have a Celestia Bridge Node running on the Arabica network."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"arabica_bridge_docker",src:a(3415).Z,width:"1984",height:"1218"})),(0,r.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,r.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")),(0,r.kt)(l.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,r.kt)("h2",{id:"mocha-bridge-node-setup"},"Mocha Bridge Node Setup"),(0,r.kt)("p",null,"Run the image from the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -e NODE_TYPE=bridge -e P2P_NETWORK=mocha ghcr.io/celestiaorg/celestia-node:0.6.2 celestia bridge start --core.ip https://rpc-mocha.pops.one --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network mocha\n")),(0,r.kt)("p",null,"Congratulations! You now have a Celestia Bridge Node running on the Mocha network."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"mocha_bridge_docker",src:a(3234).Z,width:"1984",height:"1218"})),(0,r.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,r.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")))),(0,r.kt)(l.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,r.kt)("h2",{id:"full-node-setup"},"Full Node Setup"),(0,r.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,r.kt)("h2",{id:"arabica-full-node-setup"},"Arabica Full Node Setup"),(0,r.kt)("p",null,"Run the image from the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -e NODE_TYPE=full -e P2P_NETWORK=arabica ghcr.io/celestiaorg/celestia-node:0.6.2 celestia full start --core.ip https://limani.celestia-devops.dev --core.grpc.port 9090 --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network arabica\n")),(0,r.kt)("p",null,"Congratulations! You now have a Celestia Full Storage Node running on the Arabica network."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"arabica_full_docker",src:a(1169).Z,width:"1984",height:"1218"})),(0,r.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,r.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")),(0,r.kt)(l.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,r.kt)("h2",{id:"mocha-full-node-setup"},"Mocha Full Node Setup"),(0,r.kt)("p",null,"Run the image from the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -e NODE_TYPE=full -e P2P_NETWORK=mocha ghcr.io/celestiaorg/celestia-node:0.6.2 celestia full start --core.ip https://rpc-mocha.pops.one --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network mocha\n")),(0,r.kt)("p",null,"Congratulations! You now have a Celestia Full Storage Node running on the Mocha network."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"mocha_full_docker",src:a(8965).Z,width:"1984",height:"1218"})),(0,r.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,r.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page."))))))}m.isMDXComponent=!0},3415:function(e,t,a){t.Z=a.p+"assets/images/arabica_bridge_docker-47ba2389bb4b625617e77167ff8b7bd0.gif"},1169:function(e,t,a){t.Z=a.p+"assets/images/arabica_full_docker-c748dec2dba3b7d115df73be54ab1a90.gif"},8316:function(e,t,a){t.Z=a.p+"assets/images/arabica_light_docker-7071bf5fb7ab8041c11c7160f651edfe.gif"},3234:function(e,t,a){t.Z=a.p+"assets/images/mocha_bridge_docker-7ec6c8a2acbfdbbf614a00271d3d54b6.gif"},8965:function(e,t,a){t.Z=a.p+"assets/images/mocha_full_docker-9d3884fe7f3e102362715e0100eb079e.gif"},3609:function(e,t,a){t.Z=a.p+"assets/images/mocha_light_docker-47b10985b0784499df40395e28023537.gif"}}]);