"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},b=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,p=d["".concat(s,".").concat(b)]||d[b]||k[b]||r;return n?l.createElement(p,i(i({ref:t},c),{},{components:n})):l.createElement(p,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(7294),a=n(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var l=n(7462),a=n(7294),r=n(6010),i=n(2466),o=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:a}}=e;return{value:t,label:n,attributes:l,default:a}}))}function k(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const l=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,r=k(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[s,u]=p({queryString:n,groupId:l}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,c.Nk)(n);return[l,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:l}),g=(()=>{const e=s??d;return b({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var g=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),k=e=>{const t=e.currentTarget,n=c.indexOf(t),l=u[n].value;l!==o&&(d(t),s(l))},b=e=>{let t=null;switch(e.key){case"Enter":k(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:k},i,{className:(0,r.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function f(e){let{lazy:t,children:n,selectedValue:l}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function y(e){const t=m(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},a.createElement(v,(0,l.Z)({},e,t)),a.createElement(f,(0,l.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return a.createElement(y,(0,l.Z)({key:String(t)},e))}},464:(e,t,n)=>{n.d(t,{Z:()=>l});const l=Object.freeze({"app-latest-tag":"v1.0.0-rc0","app-latest-sha":"456e6fd01bb2681da6ca5c89493dd9ed73e3021f","core-latest-tag":"v1.21.1-tm-v0.34.27","core-latest-sha":"904ca9e002d1cd7220b4288113197e2e9bdf7ad5","node-latest-tag":"v0.11.0-rc2","node-latest-sha":"504ff93444eb46d9c3adeedb2f58d289ec1ef746"})},8842:(e,t,n)=>{n.d(t,{Z:()=>l});const l=Object.freeze({"app-latest-tag":"v0.13.3","app-latest-sha":"ab64b67797653e99691e846a4303bd71f44d1a8e","core-latest-tag":"v1.21.2-tm-v0.34.27","core-latest-sha":"d280f37a8376ed54ae03b10896fa25a4cbbc6d5b","node-latest-tag":"v0.10.4","node-latest-sha":"03ff94a7d779caf1225f3dccb53a68e8f1646dc6"})},578:(e,t,n)=>{n.d(t,{Z:()=>l});const l=Object.freeze({golangNodeBSR:"1.20.2",golangNodeMocha:"1.19.1",golangNodeArabica:"1.20.2",golangApp:"1.19.1",golangCore:"1.19.1",golang:"1.19.1",arabicaChainId:"arabica-8",bsrChainId:"blockspacerace-0",rollkitVersion:"v0.7.3",localCelestiaDevnetVersion:"v0.8.2",golangQGB:"1.20.2",orchrelayVersion:"v0.2.0-app-v0.13.2-beta"})},8549:(e,t,n)=>{n.d(t,{Z:()=>l});const l=Object.freeze({"app-latest-tag":"v0.11.1","app-latest-sha":"a1eb594d43137ded5f9c1062168d26139a251e16","core-latest-tag":"v1.14.0-tm-v0.34.23","core-latest-sha":"ab4ef71b202dd9d27c879a820fa06e127d4234fa","node-latest-tag":"v0.6.4","node-latest-sha":"747c9e593542dfb32a933c731a9cd74b1fab897f"})},7245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>k,default:()=>v,frontMatter:()=>d,metadata:()=>b,toc:()=>m});var l=n(7462),a=(n(7294),n(3905)),r=n(578),i=n(8549),o=n(464),s=n(8842),u=n(4866),c=n(5162);const d={sidebar_label:"Installing Celestia Node",description:"Learn to build and install Celestia Node."},k="Celestia Node",b={unversionedId:"nodes/celestia-node",id:"nodes/celestia-node",title:"Celestia Node",description:"Learn to build and install Celestia Node.",source:"@site/docs/nodes/celestia-node.mdx",sourceDirName:"nodes",slug:"/nodes/celestia-node",permalink:"/pr-preview/pr-823/nodes/celestia-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/celestia-node.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Installing Celestia Node",description:"Learn to build and install Celestia Node."},sidebar:"nodes",previous:{title:"Setting up environment",permalink:"/pr-preview/pr-823/nodes/environment"},next:{title:"Installing Celestia App",permalink:"/pr-preview/pr-823/nodes/celestia-app"}},p={},m=[{value:"Install celestia-node",id:"install-celestia-node",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"Upgrading your binary",id:"upgrading-your-binary",level:2}],g={toc:m},h="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,l.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"celestia-node"},"Celestia Node"),(0,a.kt)("p",null,"This tutorial goes over building and installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node"),". This\ntutorial assumes you completed the steps in setting up your development\nenvironment ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-823/nodes/environment"},"here"),"."),(0,a.kt)("h2",{id:"install-celestia-node"},"Install celestia-node"),(0,a.kt)(u.Z,{groupId:"network",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"blockspacerace",label:"Blockspace Race",mdxType:"TabItem"},(0,a.kt)(u.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for the Blockspace Race testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",s.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",s.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",s.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: amd64/linux",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeBSR,(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for the Blockspace Race testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",s.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",s.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",s.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: arm64/linux",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeBSR,(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for the Blockspace Race testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",s.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make go-install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",s.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",s.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: arm64/darwin",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeBSR,(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for the Blockspace Race testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",s.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make go-install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",s.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",s.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: amd64/darwin",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeBSR,(0,a.kt)("br",null)))))),(0,a.kt)(c.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,a.kt)(u.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",i.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",i.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",i.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: amd64/linux",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeMocha,(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",i.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",i.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",i.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: arm64/linux",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeMocha,(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",i.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make go-install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",i.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",i.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: arm64/darwin",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeMocha,(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",i.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make go-install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",i.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",i.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: amd64/darwin",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeMocha,(0,a.kt)("br",null)))))),(0,a.kt)(c.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,a.kt)(u.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",o.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",o.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",o.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: amd64/linux",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeArabica,(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",o.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",o.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",o.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: arm64/linux",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeArabica,(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",o.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make go-install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",o.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",o.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: arm64/darwin",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeArabica,(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME",(0,a.kt)("br",null),"rm -rf celestia-node",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git",(0,a.kt)("br",null),"cd celestia-node/",(0,a.kt)("br",null),"git checkout tags/",o.Z["node-latest-tag"],(0,a.kt)("br",null),"make build",(0,a.kt)("br",null),"make go-install",(0,a.kt)("br",null),"make cel-key",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version",(0,a.kt)("br",null),"Semantic version: ",o.Z["node-latest-tag"],(0,a.kt)("br",null),"Commit: ",o.Z["node-latest-sha"],(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022",(0,a.kt)("br",null),"System version: amd64/darwin",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNodeArabica,(0,a.kt)("br",null))))))),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"First, we recommend reading the ",(0,a.kt)("a",{parentName:"p",href:"../overview/"},"overview"),"\nof our node types, if you haven't yet."),(0,a.kt)("p",null,"Now that you've installed Celestia Node, it's time to ",(0,a.kt)("a",{parentName:"p",href:"../decide-node/"},"pick your node type")," and run your node!"),(0,a.kt)("p",null,"If you're planning to run a light node,\nwe recommend the ",(0,a.kt)("a",{parentName:"p",href:"../../developers/node-tutorial"},"node RPC CLI tutorial"),"."),(0,a.kt)("h2",{id:"upgrading-your-binary"},"Upgrading your binary"),(0,a.kt)("p",null,"To upgrade your binary, you can install the latest version from the\ninstructions above and restart your node. If you run into any issues,\nplease refer to the ",(0,a.kt)("a",{parentName:"p",href:"../celestia-node-troubleshooting"},"troubleshooting")," section."))}v.isMDXComponent=!0}}]);