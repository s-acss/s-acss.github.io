(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[206],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6693:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return p}});var r=n(2122),a=n(9756),s=(n(7294),n(3905)),o={},i={unversionedId:"use.core",id:"use.core",isDocsHomePage:!1,title:"Core CSS",description:"npm package",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/use.core.mdx",sourceDirName:".",slug:"/use.core",permalink:"/en/docs/use.core",editUrl:"https://github.com/ziven27/sacss/edit/master/website/docs/use.core.mdx",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"Example",permalink:"/en/docs/intro.example"},next:{title:"CSS PreProcessor",permalink:"/en/docs/use.preprocessor"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Use",id:"use",children:[]},{value:"CDN",id:"cdn",children:[]}],c={toc:l};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.org/package/sacss"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/sacss.svg",alt:"npm package"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://www.jsdelivr.com/package/npm/sacss"},(0,s.kt)("img",{parentName:"a",src:"https://data.jsdelivr.com/v1/package/npm/sacss/badge",alt:"jsdelivr"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/s-acss/sacss"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/s-acss/sacss.svg?style=social",alt:"github"}))),(0,s.kt)("p",null,"The core of SACSS is the ",(0,s.kt)("a",{parentName:"p",href:"./guides.name"},"naming convention"),", and ",(0,s.kt)("strong",{parentName:"p"},"core code")," is a CSS file."),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i sacss\n")),(0,s.kt)("h2",{id:"use"},"Use"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" href="./node_modules/sacss/index.css" />\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"global")," Just introduce the ",(0,s.kt)("inlineCode",{parentName:"p"},"sacss/index.css")," file, which contains most of the parts needed to build the UI ",(0,s.kt)("strong",{parentName:"p"},"structure"),", such as"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"display")," layout"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"float")," layout"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"flex")," layout"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"position")," layout"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"font-weight")," 100 to 900")),(0,s.kt)("p",null,"... See ",(0,s.kt)("a",{parentName:"p",href:"https://cdn.jsdelivr.net/npm/sacss/index.css"},"source")," for more."),(0,s.kt)("p",null,"The overall core code is only ",(0,s.kt)("inlineCode",{parentName:"p"},"2kb")," uncompressed, and the compressed version is only ",(0,s.kt)("inlineCode",{parentName:"p"},"93b"),", ",(0,s.kt)("strong",{parentName:"p"},"global")," introduction will not cause any stress, and SACSS also recommends only global references."),(0,s.kt)("p",null,"For building another part of the UI ",(0,s.kt)("strong",{parentName:"p"},"style"),", you can ",(0,s.kt)("a",{parentName:"p",href:"./guides.custom"},"click here")," to learn about it."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Note: The introduction of files in node_modules requires build tool support.")),(0,s.kt)("h2",{id:"cdn"},"CDN"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sacss/index.min.css" />\n')),(0,s.kt)("p",null,"If you don't have a build tool like webpack, you can use the jsdelivr CDN directly, or just ",(0,s.kt)("a",{parentName:"p",href:"https://cdn.jsdelivr.net/npm/sacss/index.min.css"},"download")," this file locally to use."))}p.isMDXComponent=!0}}]);