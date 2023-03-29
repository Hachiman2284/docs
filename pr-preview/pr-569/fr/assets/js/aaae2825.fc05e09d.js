"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9833],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>v});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var a=o.createContext({}),p=function(e){var r=o.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return o.createElement(a.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),f=n,v=u["".concat(a,".").concat(f)]||u[f]||d[f]||s;return t?o.createElement(v,i(i({ref:r},l),{},{components:t})):o.createElement(v,i({ref:r},l))}));function v(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,i=new Array(s);i[0]=f;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var p=2;p<s;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5714:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var o=t(7462),n=(t(7294),t(3905));const s={sidebar_label:"Devops resources"},i="DevOps resources",c={unversionedId:"nodes/devops-resources",id:"nodes/devops-resources",title:"DevOps resources",description:"This section will provide an overview of different available resources",source:"@site/docs/nodes/devops-resources.md",sourceDirName:"nodes",slug:"/nodes/devops-resources",permalink:"/pr-preview/pr-569/fr/nodes/devops-resources",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/devops-resources.md",tags:[],version:"current",frontMatter:{sidebar_label:"Devops resources"},sidebar:"nodes",previous:{title:"Hardfork Process",permalink:"/pr-preview/pr-569/fr/nodes/hardfork-process"}},a={},p=[{value:"Docker compose",id:"docker-compose",level:2}],l={toc:p},u="wrapper";function d(e){let{components:r,...t}=e;return(0,n.kt)(u,(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"devops-resources"},"DevOps resources"),(0,n.kt)("p",null,"This section will provide an overview of different available resources\nfor Developers and Node Operators looking to test out Celestia architecture."),(0,n.kt)("h2",{id:"docker-compose"},"Docker compose"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"One resource for playing with Docker Compose for Celestia infrastructure\nis the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/celestiaorg/ephemeral-cluster"},"ephemeral-cluster"),"\nrepository. This repository provides infrastructure for doing integration\ntestings for development by running a Docker Compose instance of Celestia\ndevnet. It is not recommended to be used as-is for running nodes individually.")))}d.isMDXComponent=!0}}]);