"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[9713],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2793:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=t(3117),r=(t(7294),t(3905));const o={id:"custom_events",title:"Custom Events",sidebar_label:"Custom Events"},l=void 0,s={unversionedId:"fundamentals/custom_events",id:"version-2.5.x/fundamentals/custom_events",title:"Custom Events",description:"Apart from gestures and scroll events, Reanimated 2.x exposes a low-level API to create custom animated event handlers for custom animated components. With this API you can create handler hooks similar to the useAnimatedGestureHandler and useAnimatedScrollHandler.",source:"@site/versioned_docs/version-2.5.x/fundamentals/custom_events.md",sourceDirName:"fundamentals",slug:"/fundamentals/custom_events",permalink:"/react-native-reanimated/docs/fundamentals/custom_events",draft:!1,tags:[],version:"2.5.x",frontMatter:{id:"custom_events",title:"Custom Events",sidebar_label:"Custom Events"},sidebar:"version-2.5.x/docs",previous:{title:"Events",permalink:"/react-native-reanimated/docs/fundamentals/events"},next:{title:"Layout Animations",permalink:"/react-native-reanimated/docs/fundamentals/layout_animations"}},i={},c=[{value:"Handling events from custom animated component",id:"handling-events-from-custom-animated-component",level:2}],u={toc:c};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Apart from gestures and scroll events, Reanimated 2.x exposes a low-level API to create custom animated event handlers for custom animated components. With this API you can create handler hooks similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"useAnimatedGestureHandler")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useAnimatedScrollHandler"),"."),(0,r.kt)("h2",{id:"handling-events-from-custom-animated-component"},"Handling events from custom animated component"),(0,r.kt)("p",null,"Let's say that you want to animate pagination dots based on a custom component which exposes its scroll value - in this example we will use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/callstack/react-native-pager-view"},"pager")," component."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);\n\nconst PagerExample = () => {\n  const scrollPosition = useSharedValue(0);\n  return (\n    <AnimatedPagerView initialPage={0} onPageScroll={scrollHandler}>\n      <View collapsable={false}>\n        <Text>{`Page ${1}`}</Text>\n      </View>\n      <View collapsable={false}>\n        <Text>{`Page ${2}`}</Text>\n      </View>\n    </AnimatedPagerView>\n  );\n};\n")),(0,r.kt)("p",null,"Here, we create and animated pager with a scroll shared value, which will keep the pager's current scroll value."),(0,r.kt)("p",null,"Next, we create a custom handler hook to listen for native events from the pager component and process them inside a worklet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const scrollHandler = useAnimatedPagerScrollHandler({\n  onPageScroll: (e) => {\n    'worklet';\n    scrollPosition.value = e.offset + e.position;\n  },\n});\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useAnimatedPagerScrollHandler")," is our custom hook - in the ",(0,r.kt)("em",{parentName:"p"},"onPageScroll")," worklet we have access to the pager's current page position and offset. Combined together they give us the scroll position, which we can use to animate components or compute by how much the pager's content is offset."),(0,r.kt)("p",null,"To implement our custom hook we will use two low-level methods - ",(0,r.kt)("inlineCode",{parentName:"p"},"useHandler")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useEvent")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function useAnimatedPagerScrollHandler(handlers, dependencies) {\n  const { context, doDependenciesDiffer } = useHandler(handlers, dependencies);\n\n  return useEvent(\n    (event) => {\n      'worklet';\n      const { onPageScroll } = handlers;\n\n      if (onPageScroll && event.eventName.endsWith('onPageScroll')) {\n        onPageScroll(event, context);\n      }\n    },\n    ['onPageScroll'],\n    doDependenciesDiffer\n  );\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useHandler")," is responsible for providing a context object for our handler and information whether it should be rebuilt."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useEvent")," is returning a worklet event handler, which passed to an animated component, will provide native events that can be handled on the UI thread"),(0,r.kt)("p",null,"For a full example, checkout our Example App (look for ",(0,r.kt)("em",{parentName:"p"},"Custom Handler Example - Pager"),")"))}m.isMDXComponent=!0}}]);