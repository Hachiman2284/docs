"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3967],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,b=u["".concat(s,".").concat(d)]||u[d]||h[d]||o;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},578:(e,t,r)=>{r.d(t,{Z:()=>n});const n=Object.freeze({golangNodeBSR:"1.20.2",golangNodeOther:"1.19.1",golangApp:"1.19.1",golangCore:"1.19.1",golang:"1.19.1",arabicaChainId:"arabica-6",rollkitVersion:"v0.7.3",localCelestiaDevnetVersion:"v0.8.2",golangQGB:"1.20.2",orchrelayVersion:"v0.2.0-app-v0.13.2-beta"})},583:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),o=r(578);const l={sidebar_label:"Install the QGB binary",description:"This guide shows you how to install the QGB binary."},i="Install the QGB binary",s={unversionedId:"nodes/qgb-binary",id:"nodes/qgb-binary",title:"Install the QGB binary",description:"This guide shows you how to install the QGB binary.",source:"@site/docs/nodes/qgb-binary.mdx",sourceDirName:"nodes",slug:"/nodes/qgb-binary",permalink:"/pr-preview/pr-747/nodes/qgb-binary",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/qgb-binary.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Install the QGB binary",description:"This guide shows you how to install the QGB binary."},sidebar:"nodes",previous:{title:"Quantum Gravity Bridge",permalink:"/pr-preview/pr-747/nodes/qgb-intro"},next:{title:"QGB Orchestrator",permalink:"/pr-preview/pr-747/nodes/qgb-orchestrator"}},p={},c=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"How to run",id:"how-to-run",level:2}],u=(h="InlineText",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var h;const d={toc:c},b="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(b,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-the-qgb-binary"},"Install the QGB binary"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"../qgb-orchestrator"},"orchestrator")," is the software that signs the\nQGB attestations, and the ",(0,a.kt)("a",{parentName:"p",href:"../qgb-relayer"},"relayer")," is the one that\nrelays them to the target EVM chain."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://go.dev/doc/install"},"Install Go")," ",(0,a.kt)(u,{constant:o.Z.golangQGB,mdxType:"InlineText"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone the ",(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/celestiaorg/orchestrator-relayer")," repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"git clone https://github.com/celestiaorg/orchestrator-relayer.git ",(0,a.kt)("br",null),"cd orchestrator-relayer ",(0,a.kt)("br",null),"git checkout ",o.Z.orchrelayVersion," ",(0,a.kt)("br",null))))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the QGB CLI"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"make install\n")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Print help\nqgb --help\n")),(0,a.kt)("h2",{id:"how-to-run"},"How to run"),(0,a.kt)("p",null,"If you are a Celestia-app validator, all you need to do is run the\norchestrator. Check ",(0,a.kt)("a",{parentName:"p",href:"../qgb-orchestrator"},"here")," for more details."),(0,a.kt)("p",null,"If you want to post commitments on an EVM chain, you will need to deploy\na new QGB contract and run a relayer. Check ",(0,a.kt)("a",{parentName:"p",href:"../qgb-relayer"},"here")," for\nrelayer docs and ",(0,a.kt)("a",{parentName:"p",href:"../qgb-deploy"},"here")," for how to deploy a new QGB\ncontract."),(0,a.kt)("p",null,"Note: the QGB P2P network is a separate network than the consensus or\nthe data availability one. Thus, you will need its specific\nbootstrappers to be able to connect to it."))}y.isMDXComponent=!0}}]);