"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[568],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>h});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=o.createContext({}),p=function(e){var r=o.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return o.createElement(d.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=n,h=u["".concat(d,".").concat(f)]||u[f]||c[f]||a;return t?o.createElement(h,i(i({ref:r},s),{},{components:t})):o.createElement(h,i({ref:r},s))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9076:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=t(7462),n=(t(7294),t(3905));const a={sidebar_label:"Upgrade your validator node for the hardfork",description:"Instructions for preparing your validator nodes for the hardfork."},i="Upgrade your validator node for the hardfork",l={unversionedId:"nodes/itn-hardfork-upgrade",id:"nodes/itn-hardfork-upgrade",title:"Upgrade your validator node for the hardfork",description:"Instructions for preparing your validator nodes for the hardfork.",source:"@site/docs/nodes/itn-hardfork-upgrade.md",sourceDirName:"nodes",slug:"/nodes/itn-hardfork-upgrade",permalink:"/pr-preview/pr-747/nodes/itn-hardfork-upgrade",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-hardfork-upgrade.md",tags:[],version:"current",frontMatter:{sidebar_label:"Upgrade your validator node for the hardfork",description:"Instructions for preparing your validator nodes for the hardfork."}},d={},p=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging criteria",id:"judging-criteria",level:2},{value:"How to submit",id:"how-to-submit",level:2},{value:"Example",id:"example",level:2}],s={toc:p},u="wrapper";function c(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,o.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"upgrade-your-validator-node-for-the-hardfork"},"Upgrade your validator node for the hardfork"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"In this phase, the Celestia Network will undergo a Hardfork Upgrade\nas an exercise for all Validators."),(0,n.kt)("p",null,"You can read more about the our hardfork process ",(0,n.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/hardfork-process#blockspace-race-hardfork"},"here"),"."),(0,n.kt)("h2",{id:"directions"},"Directions"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Upgrade your ",(0,n.kt)("inlineCode",{parentName:"li"},"celestia-app")," binary to version v0.13.0\nahead of the hardfork block number ",(0,n.kt)("inlineCode",{parentName:"li"},"446500"),". Also, upgrade\nyour bridge node version of ",(0,n.kt)("inlineCode",{parentName:"li"},"celestia-node")," to v0.9.3."),(0,n.kt)("li",{parentName:"ol"},"You will need restart your validator and bridge nodes with the\nnew binaries."),(0,n.kt)("li",{parentName:"ol"},"Maintain high validator uptime after the hardfork activates.")),(0,n.kt)("h2",{id:"judging-criteria"},"Judging criteria"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Full points if you have upgraded to v0.13.0 prior to the\nhardfork block number."),(0,n.kt)("li",{parentName:"ol"},"No points if you did not upgrade in time.")),(0,n.kt)("h2",{id:"how-to-submit"},"How to submit"),(0,n.kt)("p",null,"Please submit your ",(0,n.kt)("inlineCode",{parentName:"p"},"celestiavaloper")," operator address."),(0,n.kt)("p",null,"Submission link can be found ",(0,n.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"This is only a submission example! Do NOT use it on your task submission.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p")))}c.isMDXComponent=!0}}]);