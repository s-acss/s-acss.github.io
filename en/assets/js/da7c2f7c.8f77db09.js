(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[437],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=p(n),c=r,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?a.createElement(h,l(l({ref:e},m),{},{components:n})):a.createElement(h,l({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(t,e,n){"use strict";var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},1395:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var a=n(7294),r=n(944),i=n(6010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,p=39;var m=function(t){var e=t.lazy,n=t.block,m=t.defaultValue,u=t.values,d=t.groupId,c=t.className,h=(0,r.Z)(),k=h.tabGroupChoices,g=h.setTabGroupChoices,f=(0,a.useState)(m),N=f[0],y=f[1],b=a.Children.toArray(t.children),C=[];if(null!=d){var v=k[d];null!=v&&v!==N&&u.some((function(t){return t.value===v}))&&y(v)}var S=function(t){var e=t.currentTarget,n=C.indexOf(e),a=u[n].value;y(a),null!=d&&(g(d,a),setTimeout((function(){var t,n,a,r,i,l,s,p;(t=e.getBoundingClientRect(),n=t.top,a=t.left,r=t.bottom,i=t.right,l=window,s=l.innerHeight,p=l.innerWidth,n>=0&&i<=p&&r<=s&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(o),setTimeout((function(){return e.classList.remove(o)}),2e3))}),150))},w=function(t){var e,n;switch(t.keyCode){case p:var a=C.indexOf(t.target)+1;n=C[a]||C[0];break;case s:var r=C.indexOf(t.target)-1;n=C[r]||C[C.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},c)},u.map((function(t){var e=t.value,n=t.label;return a.createElement("li",{role:"tab",tabIndex:N===e?0:-1,"aria-selected":N===e,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":N===e}),key:e,ref:function(t){return C.push(t)},onKeyDown:w,onFocus:S,onClick:S},n)}))),e?(0,a.cloneElement)(b.filter((function(t){return t.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==N})}))))}},9443:function(t,e,n){"use strict";var a=(0,n(7294).createContext)(void 0);e.Z=a},944:function(t,e,n){"use strict";var a=n(7294),r=n(9443);e.Z=function(){var t=(0,a.useContext)(r.Z);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},7972:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),l=n(1395),o=n(8215),s={},p={unversionedId:"intro.about",id:"intro.about",isDocsHomePage:!1,title:"About",description:"The goal of SACSS is to help you create your own Utility First CSS class library for your project faster* and easier*.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/intro.about.mdx",sourceDirName:".",slug:"/intro.about",permalink:"/en/docs/intro.about",editUrl:"https://github.com/ziven27/sacss/edit/master/website/docs/intro.about.mdx",version:"current",frontMatter:{},sidebar:"sideBar",next:{title:"Example",permalink:"/en/docs/intro.example"}},m=[{value:"Why Utility First CSS?",id:"why-utility-first-css",children:[]},{value:"Why Not Tailwind CSS?",id:"why-not-tailwind-css",children:[]},{value:"Naming Comparison",id:"naming-comparison",children:[]},{value:"Inspiration",id:"inspiration",children:[]}],u={toc:m};function d(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The goal of SACSS is to help you create your own ",(0,i.kt)("strong",{parentName:"p"},"Utility First CSS")," class library for your project faster",(0,i.kt)("strong",{parentName:"p"}," and easier"),"."),(0,i.kt)("h2",{id:"why-utility-first-css"},"Why Utility First CSS?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Naming")," is one of the hardest problems in CSS, bar none")),(0,i.kt)("p",null,"Content-based ",(0,i.kt)("strong",{parentName:"p"},"semantic")," naming allows you to create artwork."),(0,i.kt)("p",null,"However, in a multi-person collaborative project, naming that you think is ",(0,i.kt)("strong",{parentName:"p"},"semantic")," can often be a nightmare to be around."),(0,i.kt)("p",null,"While ",(0,i.kt)("strong",{parentName:"p"},"BEM")," can standardize the way everyone on the team names things, however everyone still needs to name things based on their own understanding."),(0,i.kt)("p",null,"Among the popular CSS solutions, ",(0,i.kt)("strong",{parentName:"p"},"Utility First CSS")," solves this problem relatively effectively."),(0,i.kt)("p",null,"Because it already has a series of CSS class names for the UI to be built, the core pain point of naming is naturally solved since there is no naming."),(0,i.kt)(l.Z,{defaultValue:"utility",values:[{label:"Utility First CSS",value:"utility"},{label:"Semantic",value:"semantic"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"utility",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<style>\n/* The following CSS code has already been created in the initial phase, and only needs to be used in the development phase */\n.fs16{ font-size: 16px; }\n.lh24{ line-height: 24px; }\n.fw400{ font-weight: 400; }\n.fw900{ font-weight: 900; }\n</style>\n\n<h1 class="fs16 lh24 fw900">Hello world</h1>\n<p class="fs16 lh24 fw400">Utility First CSS</p>\n'))),(0,i.kt)(o.Z,{value:"semantic",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<style>\n.h1{\n  font-size:16px;\n  line-height:24px;\n  font-weight:900;\n}\n.paragraph{\n  font-size:16px;\n  line-height:24px;\n  font-weight:400;\n}\n</style>\n<h1 class="h1">Hello world</h1>\n<p class="paragraph">Semantic CSS</p>\n')))),(0,i.kt)("p",null,"Ideally, we don't need to ",(0,i.kt)("strong",{parentName:"p"},"create")," any CSS Classes, we just need to ",(0,i.kt)("strong",{parentName:"p"},"combine")," (piece together multiple Classes) to complete the UI."),(0,i.kt)("p",null,"Of course, ",(0,i.kt)("strong",{parentName:"p"},"Utility First CSS")," solves the core pain point of naming."),(0,i.kt)("p",null,"It also significantly improves CSS writing ",(0,i.kt)("strong",{parentName:"p"},"efficiency")," and minimizes CSS code ",(0,i.kt)("strong",{parentName:"p"},"bulk"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The more functional a Class is, the higher the reuse rate")),(0,i.kt)("h2",{id:"why-not-tailwind-css"},"Why Not Tailwind CSS?"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Tailwind CSS is very good, but not always suitable.")),(0,i.kt)("p",null,"There are many CSS solutions based on ",(0,i.kt)("strong",{parentName:"p"},"Utility First CSS"),", the most famous one is ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS")," which is also the ! ",(0,i.kt)("a",{parentName:"p",href:"https://img.shields.io/github/stars/tailwindlabs/tailwindcss.svg?style=social"},"github")," has the highest number of libraries."),(0,i.kt)("p",null,"Tailwind CSS class library provides ",(0,i.kt)("strong",{parentName:"p"},"rich")," and ",(0,i.kt)("strong",{parentName:"p"},"comprehensive")," CSS class names, so that we can quickly implement UI by focusing on HTML."),(0,i.kt)("p",null,"However, because it is ",(0,i.kt)("strong",{parentName:"p"},"big and comprehensive"),", it is relatively expensive to ",(0,i.kt)("strong",{parentName:"p"},"get started")," and ",(0,i.kt)("strong",{parentName:"p"},"remember"),", and there is always a feeling of ",(0,i.kt)("strong",{parentName:"p"},"killing a chicken with a cow"),"."),(0,i.kt)("p",null,"SACSS is focused on showing you how to create ",(0,i.kt)("strong",{parentName:"p"},"Utility First CSS")," (",(0,i.kt)("a",{parentName:"p",href:"./guides.name"},"naming convention"),")."),(0,i.kt)("p",null,"For example, if you want to achieve the text ",(0,i.kt)("strong",{parentName:"p"},"horizontally centered")," ",(0,i.kt)("inlineCode",{parentName:"p"},"text-align:center;")," effect."),(0,i.kt)("p",null,"When using Tailwind CSS, we need to search through the entire library of hundreds of Class Name classes to find the Class Name (",(0,i.kt)("inlineCode",{parentName:"p"},".text-center"),") that corresponds to ",(0,i.kt)("strong",{parentName:"p"},"horizontally centered"),"."),(0,i.kt)("p",null,"When using SACSS, your path is this: you first know that the code for ",(0,i.kt)("strong",{parentName:"p"},"horizontally centered")," is ",(0,i.kt)("inlineCode",{parentName:"p"},".text-align:center;")," and then you get ",(0,i.kt)("inlineCode",{parentName:"p"},".tac")," based on the formula for naming rules that only take ",(0,i.kt)("strong",{parentName:"p"},"initial letters"),"."),(0,i.kt)("p",null,"That means you see the Style property and you know what the corresponding Class Name is, no need to remember it at all, and this pattern will greatly increase the ",(0,i.kt)("strong",{parentName:"p"},"development experience"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Tailwind CSS --\x3e\n<style>\n.text-center{ text-align: center; }\n</style>\n<h1 class="text-center">hello world</h1>\n\n\x3c!-- SACSS --\x3e\n<style>\n.tac{ text-align: center; }\n</style>\n<h1 class="tac">hello world</h1>\n')),(0,i.kt)("p",null,"We have also created ","[Figma plugin]"," for this set of naming rules (./use.figma), with this plugin you even you just need to ",(0,i.kt)("strong",{parentName:"p"},"copy")," and ",(0,i.kt)("strong",{parentName:"p"},"paste")," the project code from the design tool."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"It is better to give a man a fish than to teach him how to fish.")),(0,i.kt)("h2",{id:"naming-comparison"},"Naming Comparison"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Declarations"),(0,i.kt)("th",{parentName:"tr",align:null},"SACSS"),(0,i.kt)("th",{parentName:"tr",align:null},"ACSS"),(0,i.kt)("th",{parentName:"tr",align:null},"Tailwind CSS"),(0,i.kt)("th",{parentName:"tr",align:null},"Basscss"),(0,i.kt)("th",{parentName:"tr",align:null},"Tachyons"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"margin: 12px;")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".m12")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".M(12px)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".m-4")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".m2")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".ma3"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"text-align: center")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".tac")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".Ta(c)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".text-center")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".center")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".tc"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"margin: -12px")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".m-12")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".M(-12px)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".-m-4")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".mxn2")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".na3"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"font-size: 25px")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".fs25")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".Fz(25px)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".text-2xl")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".h2")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".f3"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"width: 50%")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".w50%")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".W(50%)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".w-1/2")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".col-6")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".w-50"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"line-height: 1.5")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".lh1.5")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".Lh(1.5)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".leading-normal")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".line-height-4")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},".lh-copy"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://acss.io/"},"More")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://tailwindcss.com/"},"More")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://basscss.com/"},"More")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://tachyons.io/"},"More"))))),(0,i.kt)("p",null,"It is clear that the naming of SACSS is more ",(0,i.kt)("strong",{parentName:"p"},"standard")," and ",(0,i.kt)("strong",{parentName:"p"},"simple")," than other types of projects."),(0,i.kt)("h2",{id:"inspiration"},"Inspiration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tailwindcss.com/"},"Tailwind CSS"),": the most popular ",(0,i.kt)("strong",{parentName:"li"},"Utility First CSS")," class library."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://acss.io/"},"Atomic CSS"),": core ideas (Yahoo!)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://fower.vercel.app/"},"Fower"),": An utility-first CSS in JS library for rapid UI development (Documentation Inspiration);"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.emmet.io/"},"Emmet"),": Naming rules inspired by Emmet, many IDEs have this rule built in;")))}d.isMDXComponent=!0},6010:function(t,e,n){"use strict";function a(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(r&&(r+=" "),r+=e);return r}n.d(e,{Z:function(){return r}})}}]);