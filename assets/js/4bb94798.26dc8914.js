"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[7592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={id:"troubleshooting",title:"Troubleshooting common problems",sidebar_label:"Troubleshooting"},i=void 0,l={unversionedId:"troubleshooting",id:"version-2.0.x/troubleshooting",title:"Troubleshooting common problems",description:"TypeError: Cannot convert undefined value to object on someVariable._closure",source:"@site/versioned_docs/version-2.0.x/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/react-native-reanimated/docs/2.0.x/troubleshooting",draft:!1,tags:[],version:"2.0.x",frontMatter:{id:"troubleshooting",title:"Troubleshooting common problems",sidebar_label:"Troubleshooting"},sidebar:"version-2.0.x/docs",previous:{title:"Web Support",permalink:"/react-native-reanimated/docs/2.0.x/web-support"},next:{title:"cancelAnimation",permalink:"/react-native-reanimated/docs/2.0.x/api/cancelAnimation"}},c={},s=[{value:"<code>TypeError: Cannot convert undefined value to object</code> on <code>someVariable._closure</code>",id:"typeerror-cannot-convert-undefined-value-to-object-on-somevariable_closure",level:3},{value:"<code>undefined is not an object (evaluating &#39;_toConsumableArray(Array(length)).map&#39;)</code>",id:"undefined-is-not-an-object-evaluating-_toconsumablearrayarraylengthmap",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"typeerror-cannot-convert-undefined-value-to-object-on-somevariable_closure"},(0,o.kt)("inlineCode",{parentName:"h3"},"TypeError: Cannot convert undefined value to object")," on ",(0,o.kt)("inlineCode",{parentName:"h3"},"someVariable._closure")),(0,o.kt)("p",null,"This error frequently happens when metro cache is not updated. Clear it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"watchman watch-del-all\nyarn start --reset-cache\n")),(0,o.kt)("p",null,"Also, make sure that you installed the babel plugin."),(0,o.kt)("h3",{id:"undefined-is-not-an-object-evaluating-_toconsumablearrayarraylengthmap"},(0,o.kt)("inlineCode",{parentName:"h3"},"undefined is not an object (evaluating '_toConsumableArray(Array(length)).map')")),(0,o.kt)("p",null,"This error shows when you use spread (",(0,o.kt)("inlineCode",{parentName:"p"},"...array"),") inside worklets. See ",(0,o.kt)("a",{parentName:"p",href:"/react-native-reanimated/docs/2.0.x/#known-problems-and-limitations"},"Known problems and limitations")," section for more information about spread support.\nDepending on how spread is used you may try one of the following alternatives:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"copying array: ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice"},(0,o.kt)("inlineCode",{parentName:"a"},"array.slice()"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[...Array(length)].map")," idiom: ",(0,o.kt)("inlineCode",{parentName:"li"},"Array(length).fill().map()")),(0,o.kt)("li",{parentName:"ul"},"merging objects: ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign"},(0,o.kt)("inlineCode",{parentName:"a"},"Object.assign()"))),(0,o.kt)("li",{parentName:"ul"},"spreading args in function: ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply"},(0,o.kt)("inlineCode",{parentName:"a"},"func.apply()")))))}u.isMDXComponent=!0}}]);