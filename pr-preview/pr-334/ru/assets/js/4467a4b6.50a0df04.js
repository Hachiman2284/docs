"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8804],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5724:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));const o={sidebar_label:"Introduction"},i="Introduction",c={unversionedId:"concepts/how-celestia-works/introduction",id:"concepts/how-celestia-works/introduction",title:"Introduction",description:"Celestia is a modular blockchain network whose goal is to build a scalable",source:"@site/docs/concepts/how-celestia-works/introduction.md",sourceDirName:"concepts/how-celestia-works",slug:"/concepts/how-celestia-works/introduction",permalink:"/pr-preview/pr-334/ru/concepts/how-celestia-works/introduction",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/concepts/how-celestia-works/introduction.md",tags:[],version:"current",frontMatter:{sidebar_label:"Introduction"},sidebar:"concepts",previous:{title:"How Celestia Works",permalink:"/pr-preview/pr-334/ru/category/how-celestia-works"},next:{title:"Monolithic vs. Modular Blockchains",permalink:"/pr-preview/pr-334/ru/concepts/how-celestia-works/monolithic-vs-modular"}},l={},s=[],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Celestia is a modular blockchain network whose goal is to build a scalable\n",(0,a.kt)("a",{parentName:"p",href:"https://blog.celestia.org/celestia-a-scalable-general-purpose-data-availability-layer-for-decentralized-apps-and-trust-minimized-sidechains/"},"data availability layer"),",\nenabling the next generation of scalable blockchain architectures -\n",(0,a.kt)("a",{parentName:"p",href:"https://celestia.org/learn/"},"modular blockchains"),". Celestia scales by\n",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1905.09274"},"decoupling execution from consensus")," and\nintroducing a new primitive,\n",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1809.09044"},"data availability sampling"),"."),(0,a.kt)("p",null,"The former entails that Celestia is only responsible for ordering\ntransactions and guaranteeing their data availability; this is\nsimilar to ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Atomic_broadcast#Equivalent_to_Consensus"},"reducing consensus to atomic broadcast"),"."),(0,a.kt)("p",null,"The latter provides an efficient solution to the\n",(0,a.kt)("a",{parentName:"p",href:"https://coinmarketcap.com/alexandria/article/what-is-data-availability"},"data availability problem"),"\nby only requiring resource-limited light nodes to sample a\nsmall number of random chunks from each block to verify data availability."),(0,a.kt)("p",null,"Interestingly, more light nodes that participate in sampling\nincreases the amount of data that the network can safely handle,\nenabling the block size to increase without equally increasing the\ncost to verify the chain."))}p.isMDXComponent=!0}}]);