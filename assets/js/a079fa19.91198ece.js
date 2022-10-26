"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[1831],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=i,y=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return n?a.createElement(y,r(r({ref:t},m),{},{components:n})):a.createElement(y,r({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5560:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const i="container_Zd1s",o="gifs_ufg8",r="rightArrow_ZdOg",s="downArrow_jGSi";var c=n(6010);const l=e=>{let{before:t,after:n}=e;const[l,m]=(0,a.useState)(null);return(0,a.useEffect)((()=>{function e(){const{innerWidth:e}=window;m(e)}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),a.createElement("div",{className:(0,c.Z)(i)},a.createElement("img",{src:t,className:(0,c.Z)(o)}),l&&l>=650&&a.createElement("div",{className:(0,c.Z)(r)},"\u2192"),l&&l<650&&a.createElement("div",{className:(0,c.Z)(s)},"\u2193"),a.createElement("img",{src:n,className:(0,c.Z)(o)}))}},3731:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7294);const i="container_ttGD",o="roundedStep_Tvyp",r="description_cmPV",s="stepTitle_FQH1",c="code_Wm5Z",l="codeInactive_UsiA";var m=n(6010);const p=e=>{let{children:t,title:n}=e;const[p,d]=(0,a.useState)(!1),u=(0,a.useRef)(),y=()=>{const e=window.innerHeight,t=window.pageYOffset,n=u.current.offsetTop-e/3,a=u.current.offsetTop+u.current.scrollHeight+60-e/3;d(t>n&&t<a)};return(0,a.useEffect)((()=>(y(),window.addEventListener("scroll",y,{passive:!0}),()=>{window.removeEventListener("scroll",y)})),[]),a.createElement("div",{className:(0,m.Z)(i),ref:u},a.createElement("div",{className:(0,m.Z)(r)},a.createElement("div",{className:(0,m.Z)(o),style:p?{borderColor:"#001a72"}:{}},a.createElement("div",{className:(0,m.Z)(s)},n),t[0])),a.createElement("div",{className:(0,m.Z)(p?c:[c,l])},t[1]))}},2038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>S,contentTitle:()=>A,default:()=>N,frontMatter:()=>R,metadata:()=>P,toc:()=>Z});var a=n(7462),i=(n(7294),n(3905)),o=n(3731),r=n(5560);const s={toc:[]};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}): React.ReactElement {\n  return (\n    <View\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title=\"Remove\" color=\"red\" onPress={onRemove} />\n    </View>\n  );\n}\n\nexport default function AnimatedListExample(): React.ReactElement {\n  const [inputValue, setInputValue] = useState('');\n  const [participantList, setParticipantList] = useState<EventParticipant[]>(\n    []\n  );\n\n  const addParticipant = () => {\n    setParticipantList(\n      [{ name: inputValue, id: Date.now().toString() }].concat(participantList)\n    );\n    setInputValue('');\n  };\n\n  const removeParticipant = (id: string) => {\n    setParticipantList(\n      participantList.filter((participant) => participant.id !== id)\n    );\n  };\n\n  return (\n    <View\n      style={[styles.listView]}>\n      <ScrollView style={[{ width: '100%' }]}>\n        {participantList.map((participant) => (\n          <Participant\n            key={participant.id}\n            name={participant.name}\n            onRemove={() => removeParticipant(participant.id)}\n          />\n        ))}\n      </ScrollView>\n\n      <View\n        style={[ styles.bottomRow]}>\n        <View\n          style={[styles.textInput]}>\n          <Text>Add participant: </Text>\n          <TextInput\n            placeholder=\"Name\"\n            value={inputValue}\n            onChangeText={setInputValue}\n          />\n        </View>\n\n        <Button\n          title=\"Add\"\n          disabled={inputValue === ''}\n          onPress={addParticipant}\n        />\n      </View>\n    </View>\n  );\n}\n")))}c.isMDXComponent=!0;const l={toc:[]};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{4-8}","{4-8}":!0},"...\n<ScrollView style={[{ width: '100%' }]}>\n  {participantList.map((participant) => (\n    <Participant\n      key={participant.id}\n      name={participant.name}\n      onRemove={() => removeParticipant(participant.id)}\n    />\n  ))}\n</ScrollView>\n...\n")))}m.isMDXComponent=!0;const p={toc:[]};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{10,14}","{10,14}":!0},'...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}): React.ReactElement {\n  return (\n    <View\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </View>\n  );\n}\n...\n')))}d.isMDXComponent=!0;const u={toc:[]};function y(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,11,15}","{1,11,15}":!0},'import Animated from \'react-native-reanimated\';\n...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}): React.ReactElement {\n  return (\n    <Animated.View\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </Animated.View>\n  );\n}\n...\n')))}y.isMDXComponent=!0;const f={toc:[]};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{1,12}","{1,12}":!0},'import Animated, {LightSpeedInLeft} from \'react-native-reanimated\';\n...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}): React.ReactElement {\n  return (\n    <Animated.View\n      entering={LightSpeedInLeft}\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </Animated.View>\n  );\n}\n...\n')))}g.isMDXComponent=!0;const w={toc:[]};function v(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{3,16}","{3,16}":!0},'import Animated, {\n  LightSpeedInLeft, \n  Layout\n} from \'react-native-reanimated\';\n...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}): React.ReactElement {\n  return (\n    <Animated.View\n      entering={LightSpeedInLeft}\n      layout={Layout.springify()}\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </Animated.View>\n  );\n}\n...\n')))}v.isMDXComponent=!0;const h={toc:[]};function k(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{3,17}","{3,17}":!0},'import Animated, {\n  LightSpeedInLeft, \n  LightSpeedOutRight\n  Layout\n} from \'react-native-reanimated\';\n...\nfunction Participant({\n  name,\n  onRemove,\n}: {\n  name: string;\n  onRemove: () => void;\n}): React.ReactElement {\n  return (\n    <Animated.View\n      entering={LightSpeedInLeft}\n      exiting={LightSpeedOutRight}\n      layout={Layout.springify()}\n      style={[styles.participantView]}>\n      <Text>{name}</Text>\n      <Button title="Remove" color="red" onPress={onRemove} />\n    </Animated.View>\n  );\n}\n...\n')))}k.isMDXComponent=!0;var x=n(579),b=n(4643),T=n(878),L=n(9438);const R={id:"layoutAnimations",title:"How to easily animate your screens and components",sidebar_label:"Layout Animations",hide_table_of_contents:!0},A=void 0,P={unversionedId:"tutorials/LayoutAnimations/layoutAnimations",id:"version-2.5.x/tutorials/LayoutAnimations/layoutAnimations",title:"How to easily animate your screens and components",description:"This tutorial will help you make your screens and components more smooth by adding animations.",source:"@site/versioned_docs/version-2.5.x/tutorials/LayoutAnimations/animated_list.mdx",sourceDirName:"tutorials/LayoutAnimations",slug:"/tutorials/LayoutAnimations/layoutAnimations",permalink:"/react-native-reanimated/docs/tutorials/LayoutAnimations/layoutAnimations",draft:!1,tags:[],version:"2.5.x",frontMatter:{id:"layoutAnimations",title:"How to easily animate your screens and components",sidebar_label:"Layout Animations",hide_table_of_contents:!0},sidebar:"version-2.5.x/docs",previous:{title:"Testing with Jest",permalink:"/react-native-reanimated/docs/guide/testing"},next:{title:"Community",permalink:"/react-native-reanimated/docs/community"}},S={},Z=[{value:"And that&#39;s all! You can see that adding layout animations to our list was super easy and the user experience is way better. Full code of the animated list you can find here.",id:"and-thats-all-you-can-see-that-adding-layout-animations-to-our-list-was-super-easy-and-the-user-experience-is-way-better-full-code-of-the-animated-list-you-can-find-here",level:4}],V={toc:Z};function N(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},V,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorial will help you make your screens and components more smooth by adding animations.\nWe will use a new feature from the Reanimated library - Layout Animations which lets us animate:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"components appearance"),(0,i.kt)("li",{parentName:"ul"},"components disappearance"),(0,i.kt)("li",{parentName:"ul"},"layout changes")),(0,i.kt)("p",null,"using predefined animations. There are plenty of predefined animations you can use, however,\nif you need to create more customized animation, you can easily implemented your own."),(0,i.kt)("p",null,"To give you a better understanding of how to use those animations,\nwe are gonna prettify already existing screen - participant list, by adding layout animations to its components.\nHere you can see, change that we will get after going through this tutorial."),(0,i.kt)(r.Z,{before:x.Z,after:L.Z,mdxType:"BeforeAndAfter"}),(0,i.kt)(o.Z,{title:"Screen Introduction",mdxType:"TutorialStep"},(0,i.kt)("div",null,"Here we have already an existing Participant list component ( full code which you can easily copy and try for yourself you can find\xa0",(0,i.kt)("a",{href:"https://gist.github.com/jmysliv/87b15453aab173a63a4d22fcc5b1d603"},"here"),"\xa0). Let's focus on parts that we will animate, in this case - Participant component."),(0,i.kt)(c,{mdxType:"FullCode"})),(0,i.kt)(o.Z,{title:"Participant component",mdxType:"TutorialStep"},(0,i.kt)("div",null,"Participant component is responsible for displaying a list item, which we will be animating."),(0,i.kt)(m,{mdxType:"ParticipantComponent"})),(0,i.kt)(o.Z,{title:"Participant component internals",mdxType:"TutorialStep"},(0,i.kt)("div",null,"As you can see Participant component is wrapped in one View component, and that's the place where will be adding our animations. We can animate only components that are provided by reanimated ( e.g. Animated.View ), or components we changed using createAnimatedComponent."),(0,i.kt)(d,{mdxType:"ParticipantInternals"})),(0,i.kt)(o.Z,{title:"Step 1",mdxType:"TutorialStep"},(0,i.kt)("div",null,"Let's import Animated from reanimated and replace View with Animated.View, so we can add animations to our component."),(0,i.kt)(y,{mdxType:"Step1"})),(0,i.kt)(o.Z,{title:"Step 2",mdxType:"TutorialStep"},(0,i.kt)("div",null,"Now let's add an entering animation. We can choose entering animation from plenty of available\xa0",(0,i.kt)("a",{href:"https://docs.swmansion.com/react-native-reanimated/docs/api/LayoutAnimations/entryAnimations"},"predefined animation."),"\xa0We will go with LightSpeedInLeft effect."),(0,i.kt)(g,{mdxType:"Step2"})),(0,i.kt)(o.Z,{title:"Current result",mdxType:"TutorialStep"},(0,i.kt)("div",null,"Here you can see, the effect we have achieved by adding entering animation."),(0,i.kt)("img",{src:b.Z,style:{height:"500px",width:"auto",borderRadius:"5%"}})),(0,i.kt)(o.Z,{title:"Step 3",mdxType:"TutorialStep"},(0,i.kt)("div",null,"Now let's add layout transition."),(0,i.kt)(v,{mdxType:"Step3"})),(0,i.kt)(o.Z,{title:"Current result",mdxType:"TutorialStep"},(0,i.kt)("div",null,"Here you can see, the effect we have achieved by adding layout transition."),(0,i.kt)("img",{src:T.Z,style:{height:"500px",width:"auto",borderRadius:"5%"}})),(0,i.kt)(o.Z,{title:"Step 4",mdxType:"TutorialStep"},(0,i.kt)("div",null,"Now let's add an exiting animation. We can choose exiting animation from plenty of available\xa0",(0,i.kt)("a",{href:"https://docs.swmansion.com/react-native-reanimated/docs/api/LayoutAnimations/exitingAnimations"},"predefined animation."),"\xa0We will go with LightSpeedOutRight effect."),(0,i.kt)(k,{mdxType:"Step4"})),(0,i.kt)("h4",{id:"and-thats-all-you-can-see-that-adding-layout-animations-to-our-list-was-super-easy-and-the-user-experience-is-way-better-full-code-of-the-animated-list-you-can-find-here"},"And that's all! You can see that adding layout animations to our list was super easy and the user experience is way better. Full code of the animated list you can find ",(0,i.kt)("a",{parentName:"h4",href:"https://gist.github.com/jmysliv/0056d6cd3021883ea0f2c7f4af0526b2"},"here"),"."),(0,i.kt)("center",null,(0,i.kt)("img",{src:L.Z,height:"500px",style:{borderRadius:"5%"}})))}N.isMDXComponent=!0},9438:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/after-e3e04aaf52902a396d6f5887bdc1bdb5.gif"},579:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/before-ccd07f388857274c1860e64e5155bc9c.gif"},4643:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/entering-2ec23ca10dce1dad1319cc6c5e195267.gif"},878:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/layout-341920cb35d6f1c27bad9e20059bdaf6.gif"}}]);