(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[399],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=s(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(t,e,n){"use strict";var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},1395:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var a=n(7294),r=n(944),l=n(6010),i="tabItem_1uMI",o="tabItemActive_2DSg";var p=37,s=39;var m=function(t){var e=t.lazy,n=t.block,m=t.defaultValue,u=t.values,d=t.groupId,c=t.className,k=(0,r.Z)(),N=k.tabGroupChoices,g=k.setTabGroupChoices,f=(0,a.useState)(m),h=f[0],C=f[1],y=a.Children.toArray(t.children),S=[];if(null!=d){var b=N[d];null!=b&&b!==h&&u.some((function(t){return t.value===b}))&&C(b)}var v=function(t){var e=t.currentTarget,n=S.indexOf(e),a=u[n].value;C(a),null!=d&&(g(d,a),setTimeout((function(){var t,n,a,r,l,i,p,s;(t=e.getBoundingClientRect(),n=t.top,a=t.left,r=t.bottom,l=t.right,i=window,p=i.innerHeight,s=i.innerWidth,n>=0&&l<=s&&r<=p&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(o),setTimeout((function(){return e.classList.remove(o)}),2e3))}),150))},w=function(t){var e,n;switch(t.keyCode){case s:var a=S.indexOf(t.target)+1;n=S[a]||S[0];break;case p:var r=S.indexOf(t.target)-1;n=S[r]||S[S.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},c)},u.map((function(t){var e=t.value,n=t.label;return a.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":h===e}),key:e,ref:function(t){return S.push(t)},onKeyDown:w,onFocus:v,onClick:v},n)}))),e?(0,a.cloneElement)(y.filter((function(t){return t.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==h})}))))}},9443:function(t,e,n){"use strict";var a=(0,n(7294).createContext)(void 0);e.Z=a},944:function(t,e,n){"use strict";var a=n(7294),r=n(9443);e.Z=function(){var t=(0,a.useContext)(r.Z);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},335:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return d}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=n(1395),o=n(8215),p={},s={unversionedId:"intro.about",id:"intro.about",isDocsHomePage:!1,title:"\u5173\u4e8e",description:"SACSS \u76ee\u6807\u5728\u4e8e\u5e2e\u52a9\u4f60\u66f4\u5feb\u66f4\u7b80\u5355\u7684\u521b\u5efa\u5c5e\u4e8e\u81ea\u5df1\u9879\u76ee\u7684 Utility First CSS \u7c7b\u5e93\u3002",source:"@site/docs/intro.about.mdx",sourceDirName:".",slug:"/intro.about",permalink:"/docs/intro.about",editUrl:"https://github.com/ziven27/sacss/edit/master/website/docs/intro.about.mdx",version:"current",frontMatter:{},sidebar:"sideBar",next:{title:"\u4f8b\u5b50",permalink:"/docs/intro.example"}},m=[{value:"Why Utility First CSS?",id:"why-utility-first-css",children:[]},{value:"Why Not Tailwind CSS?",id:"why-not-tailwind-css",children:[]},{value:"\u547d\u540d\u5bf9\u6bd4",id:"\u547d\u540d\u5bf9\u6bd4",children:[]},{value:"\u7075\u611f",id:"\u7075\u611f",children:[]}],u={toc:m};function d(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"SACSS \u76ee\u6807\u5728\u4e8e\u5e2e\u52a9\u4f60\u66f4",(0,l.kt)("strong",{parentName:"p"},"\u5feb"),"\u66f4",(0,l.kt)("strong",{parentName:"p"},"\u7b80\u5355"),"\u7684\u521b\u5efa\u5c5e\u4e8e\u81ea\u5df1\u9879\u76ee\u7684 ",(0,l.kt)("strong",{parentName:"p"},"Utility First CSS")," \u7c7b\u5e93\u3002"),(0,l.kt)("h2",{id:"why-utility-first-css"},"Why Utility First CSS?"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"\u547d\u540d")," \u662f CSS \u4e2d\u6700\u96be\u7684\u95ee\u9898\u6ca1\u6709\u4e4b\u4e00")),(0,l.kt)("p",null,"\u57fa\u4e8e\u5185\u5bb9\u7684",(0,l.kt)("strong",{parentName:"p"},"\u8bed\u4e49\u5316"),"\u547d\u540d\u80fd\u591f\u8ba9\u4f60\u521b\u5efa\u827a\u672f\u54c1\u3002"),(0,l.kt)("p",null,"\u7136\u800c\u5728\u4e00\u4e2a\u591a\u4eba\u534f\u4f5c\u7684\u9879\u76ee\uff0c\u81ea\u8ba4\u4e3a",(0,l.kt)("strong",{parentName:"p"},"\u8bed\u4e49\u5316"),"\u7684\u547d\u540d\u5f80\u5f80\u4f1a\u6210\u4e3a\u88ab\u4eba\u7684\u5669\u68a6\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"BEM")," \u867d\u80fd\u89c4\u8303\u56e2\u961f\u4e2d\u5927\u5bb6\u7684\u547d\u540d\u65b9\u5f0f\uff0c\u7136\u800c\u6bcf\u4e2a\u4eba\u8fd8\u662f\u9700\u8981\u57fa\u4e8e\u81ea\u5df1\u7684\u7406\u89e3\u53bb\u547d\u540d\u3002"),(0,l.kt)("p",null,"\u5728\u6d41\u884c\u7684 CSS \u89e3\u51b3\u65b9\u6848\u4e2d\uff0c",(0,l.kt)("strong",{parentName:"p"},"Utility First CSS")," \u80fd\u591f\u6bd4\u8f83\u6709\u6548\u5730\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3a\u5b83\u5df2\u7ecf\u9884\u5236\u597d\u9700\u8981\u6784\u5efa\u7684 UI \u7684\u4e00\u7cfb\u5217 CSS \u7c7b\u540d\uff0c\u65e2\u7136\u6ca1\u6709\u547d\u540d\u90a3\u4e48\u81ea\u7136\u4e5f\u5c31\u89e3\u51b3\u4e86\u547d\u540d\u8fd9\u4e2a\u6838\u5fc3\u75db\u70b9\u3002"),(0,l.kt)(i.Z,{defaultValue:"utility",values:[{label:"Utility First CSS",value:"utility"},{label:"\u8bed\u4e49\u5316",value:"semantic"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"utility",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<style>\n/* \u4ee5\u4e0b CSS \u4ee3\u7801\u521d\u59cb\u9636\u6bb5\u5df2\u7ecf\u521b\u5efa\uff0c\u5f00\u53d1\u9636\u6bb5\u53ea\u9700\u8981\u4f7f\u7528 */\n.fs16{ font-size: 16px; }\n.lh24{ line-height: 24px; }\n.fw400{ font-weight: 400; }\n.fw900{ font-weight: 900; }\n</style>\n\n<h1 class="fs16 lh24 fw900">Hello world</h1>\n<p class="fs16 lh24 fw400">Utility First CSS</p>\n'))),(0,l.kt)(o.Z,{value:"semantic",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<style>\n.h1{\n  font-size:16px;\n  line-height:24px;\n  font-weight:900;\n}\n.paragraph{\n  font-size:16px;\n  line-height:24px;\n  font-weight:400;\n}\n</style>\n<h1 class="h1">Hello world</h1>\n<p class="paragraph">Semantic CSS</p>\n')))),(0,l.kt)("p",null,"\u7406\u60f3\u72b6\u6001\u4e0b\uff08\u5b9e\u73b0\u65b9\u6848\u76f8\u540c\uff09\uff0c\u6211\u4eec\u4e0d\u9700\u8981",(0,l.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u4efb\u4f55 CSS Class\u3002\u53ea\u9700\u8981\u901a\u8fc7",(0,l.kt)("strong",{parentName:"p"},"\u7ec4\u5408"),"\uff08\u62fc\u51d1\u591a\u4e2a Class \uff09\u7684\u5f62\u5f0f\u65e2\u53ef\u4ee5\u5b8c\u6210 UI\u3002"),(0,l.kt)("p",null,"\u5f53\u7136 ",(0,l.kt)("strong",{parentName:"p"},"Utility First CSS")," \u5728\u89e3\u51b3\u547d\u540d\u8fd9\u4e00\u6838\u5fc3\u75db\u70b9\u7684\u540c\u65f6\u3002"),(0,l.kt)("p",null,"\u8fd8\u80fd\u591f\u660e\u663e\u7684\u63d0\u5347 CSS \u7f16\u5199",(0,l.kt)("strong",{parentName:"p"},"\u6548\u7387"),"\uff0c\u4ee5\u53ca\u6700\u5927\u9650\u5ea6\u7684\u63a7\u5236 CSS \u4ee3\u7801",(0,l.kt)("strong",{parentName:"p"},"\u81a8\u80c0\u7387"),"\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u529f\u80fd\u8d8a\u5355\u4e00\u7684 Class \u590d\u7528\u7387\u8d8a\u9ad8")),(0,l.kt)("h2",{id:"why-not-tailwind-css"},"Why Not Tailwind CSS?"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Tailwind CSS \u975e\u5e38\u4f18\u79c0\uff0c\u4f46\u4e0d\u4e00\u5b9a\u9002\u5408\u3002")),(0,l.kt)("p",null,"\u57fa\u4e8e ",(0,l.kt)("strong",{parentName:"p"},"Utility First CSS")," \u7684 CSS \u65b9\u6848\u6709\u5f88\u591a\uff0c\u6700\u6709\u540d\u7684\u662f ",(0,l.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS")," \u5b83\u4e5f\u662f\u76ee\u524d\u6240\u6709 CSS \u89e3\u51b3\u65b9\u6848\u4e2d ",(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/github/stars/tailwindlabs/tailwindcss.svg?style=social",alt:"github"})," \u6570\u6700\u9ad8\u7684\u7c7b\u5e93\u3002"),(0,l.kt)("p",null,"Tailwind CSS \u7c7b\u5e93\u63d0\u4f9b\u4e86",(0,l.kt)("strong",{parentName:"p"},"\u4e30\u5bcc"),"\u4e14",(0,l.kt)("strong",{parentName:"p"},"\u5168\u9762"),"\u7684 CSS \u7c7b\u540d\uff0c\u65b9\u4fbf\u6211\u4eec\u4e13\u6ce8\u5728 HTML \u4e2d\u5c31\u53ef\u4ee5\u5feb\u901f\u7684\u5b9e\u73b0 UI\u3002"),(0,l.kt)("p",null,"\u53ef\u6b63\u56e0\u4e3a",(0,l.kt)("strong",{parentName:"p"},"\u5927\u800c\u5168"),"\uff0c\u4ee5\u81f3\u4e8e",(0,l.kt)("strong",{parentName:"p"},"\u4e0a\u624b"),"\u548c",(0,l.kt)("strong",{parentName:"p"},"\u8bb0\u5fc6"),"\u6210\u672c\u90fd\u76f8\u5bf9\u8f83\u9ad8\uff0c\u603b\u6709\u4e00\u79cd",(0,l.kt)("strong",{parentName:"p"},"\u6740\u9e21\u7528\u725b\u5200"),"\u7684\u611f\u89c9\u3002"),(0,l.kt)("p",null,"\u800c SACSS \u5219\u662f\u4fa7\u91cd\u5728\u544a\u8bc9\u4f60\u521b\u5efa ",(0,l.kt)("strong",{parentName:"p"},"Utility First CSS")," \u7684\u65b9\u6cd5\uff08",(0,l.kt)("a",{parentName:"p",href:"./guides.name"},"\u547d\u540d\u89c4\u5219"),"\uff09\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u60f3\u8981\u5b9e\u73b0\u6587\u672c",(0,l.kt)("strong",{parentName:"p"},"\u6c34\u5e73\u5c45\u4e2d\u5bf9\u9f50")," ",(0,l.kt)("inlineCode",{parentName:"p"},"text-align:center;")," \u8fd9\u4e2a\u6548\u679c\u3002"),(0,l.kt)("p",null,"\u5728\u4f7f\u7528 Tailwind CSS \u65f6\u6211\u4eec\u9700\u8981\u5728\u6574\u4e2a\u4e0a\u767e\u7684 Class Name \u7c7b\u5e93\u4e2d\uff0c\u641c\u5bfb\u4e0e ",(0,l.kt)("strong",{parentName:"p"},"\u6c34\u5e73\u5c45\u4e2d\u5bf9\u9f50")," \u5bf9\u5e94\u7684 Class Name \u662f\u4ec0\u4e48\uff08",(0,l.kt)("inlineCode",{parentName:"p"},".text-center"),"\uff09\u3002"),(0,l.kt)("p",null,"\u800c\u5728\u4f7f\u7528 SACSS \u65f6\uff0c\u4f60\u7684\u601d\u8003\u8def\u5f84\u662f\uff1a\u4f60\u5148\u77e5\u9053 ",(0,l.kt)("strong",{parentName:"p"},"\u6c34\u5e73\u5c45\u4e2d\u5bf9\u9f50")," \u7684\u4ee3\u7801\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"text-align:center;")," \u7136\u540e\u57fa\u4e8e\u53ea\u53d6",(0,l.kt)("strong",{parentName:"p"},"\u9996\u5b57\u6bcd"),"\u7684\u547d\u540d\u89c4\u5219\u516c\u5f0f\uff0c\u4f60\u5c31\u80fd\u5f97\u5230\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},".tac"),"\u3002"),(0,l.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\u4f60\u770b\u5230 Style \u5c5e\u6027\uff0c\u4f60\u5c31\u77e5\u9053\u4e0e\u4e4b\u5bf9\u5e94\u7684 Class Name \u662f\u4ec0\u4e48\uff0c\u5b8c\u5168\u4e0d\u7528\u8bb0\u5fc6\uff0c\u5e76\u4e14\u8fd9\u4e2a\u6a21\u5f0f\u4f1a\u5927\u5927\u7684\u589e\u52a0",(0,l.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u4f53\u9a8c"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Tailwind CSS --\x3e\n<style>\n.text-center{ text-align: center; }\n</style>\n<h1 class="text-center">hello world</h1>\n\n\x3c!-- SACSS --\x3e\n<style>\n.tac{ text-align: center; }\n</style>\n<h1 class="tac">hello world</h1>\n')),(0,l.kt)("p",null,"\u6211\u4eec\u8fd8\u4e3a\u8fd9\u5957\u547d\u540d\u89c4\u5219\u521b\u5efa\u4e86 ",(0,l.kt)("a",{parentName:"p",href:"./use.figma"},"Figma \u63d2\u4ef6"),"\uff0c\u4f7f\u7528\u8fd9\u4e2a\u63d2\u4ef6\u4f60\u751a\u81f3\u4f60\u53ea\u9700\u8981\u4ece\u8bbe\u8ba1\u5de5\u5177\u4e2d",(0,l.kt)("strong",{parentName:"p"},"\u62f7\u8d1d"),"\u548c",(0,l.kt)("strong",{parentName:"p"},"\u7c98\u8d34"),"\u9879\u76ee\u4ee3\u7801\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6388\u4eba\u4ee5\u9c7c\u4e0d\u5982\u6388\u4eba\u4ee5\u6e14")),(0,l.kt)("h2",{id:"\u547d\u540d\u5bf9\u6bd4"},"\u547d\u540d\u5bf9\u6bd4"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Declarations"),(0,l.kt)("th",{parentName:"tr",align:null},"SACSS"),(0,l.kt)("th",{parentName:"tr",align:null},"ACSS"),(0,l.kt)("th",{parentName:"tr",align:null},"Tailwind CSS"),(0,l.kt)("th",{parentName:"tr",align:null},"Basscss"),(0,l.kt)("th",{parentName:"tr",align:null},"Tachyons"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"margin: 12px;")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".m12")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".M(12px)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".m-4")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".m2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".ma3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"text-align: center")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".tac")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".Ta(c)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".text-center")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".center")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".tc"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"margin: -12px")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".m-12")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".M(-12px)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".-m-4")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".mxn2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".na3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"font-size: 25px")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".fs25")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".Fz(25px)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".text-2xl")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".h2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".f3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"width: 50%")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".w50%")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".W(50%)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".w-1/2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".col-6")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".w-50"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"line-height: 1.5")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".lh1.5")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".Lh(1.5)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".leading-normal")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".line-height-4")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},".lh-copy"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://acss.io/"},"\u4e86\u89e3\u66f4\u591a")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://tailwindcss.com/"},"\u4e86\u89e3\u66f4\u591a")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://basscss.com/"},"\u4e86\u89e3\u66f4\u591a")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"http://tachyons.io/"},"\u4e86\u89e3\u66f4\u591a"))))),(0,l.kt)("p",null,"\u53ef\u4ee5\u5f88\u660e\u663e\u7684\u770b\u5230\uff0c\u540c\u5176\u5b83\u7c7b\u578b\u9879\u76ee\u76f8\u6bd4\uff0cSACSS \u7684\u547d\u540d\u66f4\u52a0\u7684",(0,l.kt)("strong",{parentName:"p"},"\u89c4\u8303"),"\u548c",(0,l.kt)("strong",{parentName:"p"},"\u7b80\u5355"),"\u3002"),(0,l.kt)("h2",{id:"\u7075\u611f"},"\u7075\u611f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tailwindcss.com/"},"Tailwind CSS"),"\uff1a\u6700\u6d41\u884c\u7684 ",(0,l.kt)("strong",{parentName:"li"},"Utility First CSS")," \u7c7b\u5e93\uff1b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://acss.io/"},"Atomic CSS"),": \u6838\u5fc3\u7406\u5ff5\uff08\u96c5\u864e\uff09\uff1b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://fower.vercel.app/"},"Fower"),"\uff1a An utility-first CSS in JS library for rapid UI development (\u6587\u6863\u7075\u611f);"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.emmet.io/"},"Emmet"),": \u547d\u540d\u89c4\u5219\u7075\u611f\u6765\u81ea Emmet\uff0c\u5f88\u591a IDE \u5185\u7f6e\u8fd9\u4e2a\u89c4\u5219;")))}d.isMDXComponent=!0},6010:function(t,e,n){"use strict";function a(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(r&&(r+=" "),r+=e);return r}n.d(e,{Z:function(){return r}})}}]);