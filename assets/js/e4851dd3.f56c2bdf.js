(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[528],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),a=n(944),o=n(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,c=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,p=e.values,f=e.groupId,d=e.className,m=(0,a.Z)(),v=m.tabGroupChoices,b=m.setTabGroupChoices,g=(0,r.useState)(u),k=g[0],y=g[1],h=r.Children.toArray(e.children),x=[];if(null!=f){var S=v[f];null!=S&&S!==k&&p.some((function(e){return e.value===S}))&&y(S)}var C=function(e){var t=e.currentTarget,n=x.indexOf(t),r=p[n].value;y(r),null!=f&&(b(f,r),setTimeout((function(){var e,n,r,a,o,i,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case c:var r=x.indexOf(e.target)+1;n=x[r]||x[0];break;case l:var a=x.indexOf(e.target)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(h.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){"use strict";var r=n(7294),a=n(9443);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6191:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=n(1395),s=n(8215),l={},c={unversionedId:"guides.scope",id:"guides.scope",isDocsHomePage:!1,title:"\u547d\u540d\u7a7a\u95f4",description:"\u7406\u8bba\u4e0a\u8bb2\u5168\u5c40\u5f15\u5165 sacss/index.css \u8fd9\u4e2a\u6587\u4ef6\uff0c\u5176\u4e2d\u6240\u6709\u7684\u7c7b\u540d\u5747\u4f1a\u53d8\u4e3a\u5168\u5c40\u7684 CSS \u5173\u952e\u5b57\uff0c\u5bb9\u6613\u5f15\u8d77 CSS \u547d\u540d\u6c61\u67d3\u3002",source:"@site/docs/guides.scope.mdx",sourceDirName:".",slug:"/guides.scope",permalink:"/docs/guides.scope",editUrl:"https://github.com/ziven27/sacss/edit/master/website/docs/guides.scope.mdx",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"\u5b9a\u5236 Token",permalink:"/docs/guides.custom"},next:{title:"\u8f85\u52a9\u65b9\u6cd5",permalink:"/docs/guides.helpers"}},u=[{value:"\u4e0d\u63a8\u8350",id:"\u4e0d\u63a8\u8350",children:[]}],p={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7406\u8bba"),"\u4e0a\u8bb2\u5168\u5c40\u5f15\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"sacss/index.css")," \u8fd9\u4e2a\u6587\u4ef6\uff0c\u5176\u4e2d\u6240\u6709\u7684\u7c7b\u540d\u5747\u4f1a\u53d8\u4e3a\u5168\u5c40\u7684 CSS \u5173\u952e\u5b57\uff0c\u5bb9\u6613\u5f15\u8d77 CSS ",(0,o.kt)("strong",{parentName:"p"},"\u547d\u540d\u6c61\u67d3"),"\u3002"),(0,o.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u63d0\u4f9b\u4e86 LESS \u548c SASS ",(0,o.kt)("inlineCode",{parentName:"p"},"WidthPrefix")," Mixin \u6765\u4e3a\u6574\u4e2a\u6838\u5fc3\u4ee3\u7801\u6dfb\u52a0\u7edf\u4e00\u524d\u7f00\u4f5c\u4e3a",(0,o.kt)("strong",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4"),"\uff0c\u4ee5\u51cf\u5c11",(0,o.kt)("strong",{parentName:"p"},"\u6c61\u67d3"),"\u7684\u8303\u56f4\u3002"),(0,o.kt)(i.Z,{defaultValue:"less",values:[{label:"LESS",value:"less"},{label:"SASS",value:"sass"},{label:"Output CSS",value:"out"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"less",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-less"},"@import 'sacss/less/WidthPrefix';\n\n@prefix: '_';  // \u8fd9\u4e2a\u66ff\u6362\u6210\u4f60\u60f3\u6dfb\u52a0\u7684\u524d\u7f00\n\n#WidthPrefix(@prefix);\n"))),(0,o.kt)(s.Z,{value:"sass",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"@import 'sacss/sass/WidthPrefix';\n\n$prefix: '_'; // \u8fd9\u4e2a\u66ff\u6362\u6210\u4f60\u60f3\u6dfb\u52a0\u7684\u524d\u7f00\n\n@include WidthPrefix($prefix);\n"))),(0,o.kt)(s.Z,{value:"out",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-css"},"/* \u4f1a\u4e3a sacss/index.css \u6bcf\u4e00\u6761CSS \u6dfb\u52a0 '_' \u524d\u7f00 */\n._db{display:block}\n._df{display:flex}\n._fw400{font-weight:400}\n/* \u8fd9\u91cc\u5ffd\u7565\u4e86\u5269\u4f59\u7684\u5176\u4f59\u4ee3\u7801... */\n")))),(0,o.kt)("p",null,"\u8fd9\u6837\u6211\u4eec\u6240\u6709\u7684\u6838\u5fc3 class \u524d\u90fd\u4f1a\u5e26\u4e0a ",(0,o.kt)("inlineCode",{parentName:"p"},"_")," \u524d\u7f00\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"CSS \u4e0d\u5177\u6709 Mixin \u529f\u80fd\uff0c\u8bf7\u4e0b\u8f7d CSS \u6587\u4ef6\u624b\u52a8\u6dfb\u52a0\u3002")),(0,o.kt)("h2",{id:"\u4e0d\u63a8\u8350"},"\u4e0d\u63a8\u8350"),(0,o.kt)("p",null,"\u867d\u7136\u6211\u4eec\u63d0\u4f9b\u4e86\u4e3a\u6838\u5fc3\u4ee3\u7801\u6dfb\u52a0",(0,o.kt)("strong",{parentName:"p"},"\u524d\u7f00"),"\u7684\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\u5728\u5b9e\u9645\u7684\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u5176\u5b9e\u5e76\u4e0d\u63a8\u8350\u8fd9\u4e48\u505a\u3002"),(0,o.kt)("p",null,"\u6216\u8005\u662f\u6211\u4eec\u63a8\u8350\u524d\u7f00\u5e94\u8be5\u5c3d\u91cf\u7684\u77ed\u5c0f\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"_")," \u662f\u6211\u4eec\u552f\u4e00",(0,o.kt)("strong",{parentName:"p"},"\u63a8\u8350"),"\u4f7f\u7528\u7684\u524d\u7f00\u4e86\u3002"),(0,o.kt)("p",null,"\u56e0\u4e3a SACSS \u7684\u6838\u5fc3\u4ee3\u7801\u4f7f\u7528\u9891\u6b21\u975e\u5e38\u5730\u9ad8\uff0c\u5982\u679c\u6bcf\u4e2a Class \u524d\u5199\u524d\u7f00\uff0c\u4f1a\u589e\u52a0\u4ee3\u7801\u91cf\u4ee5\u53ca\u663e\u5f97\u5f02\u5e38\u7684\u5570\u55e6\u3002"),(0,o.kt)("p",null,"\u518d\u8005",(0,o.kt)("strong",{parentName:"p"},"\u547d\u540d\u6c61\u67d3"),"\u8fd9\u4e2a\u95ee\u9898\uff0c\u5728\u6211\u4eec\u5b9e\u9645\u591a\u4e2a\u9879\u76ee\uff0c\u4ee5\u53ca\u591a\u5e74\u7684\u4f7f\u7528\u7ecf\u9a8c\u5f53\u4e2d\uff0c\u53d1\u751f\u7684\u6982\u7387\u662f\u975e\u5e38\u5c0f\uff0c\u5373\u4f7f\u53d1\u751f\u4e5f\u5f88\u5bb9\u6613\u907f\u5f00\u3002"))}f.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);