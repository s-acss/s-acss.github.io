(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[758],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,y=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(2263),a=n(3919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,s=void 0!==i&&i,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+p:p}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},1656:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),o=n(4996),i="box_2JOE",s=n(4404);var l=function(e){var t=e.className;return r.createElement("div",{className:(0,a.Z)(t,i,"oh pr")},r.createElement("div",{className:"bc_000 pt16 pb16 pl16 pr16 df aic jcc"},r.createElement("div",{className:"bc_fff pt16 pb16 pl16 pr16 dif br8"},r.createElement("img",{className:"mr8 w48 h48",src:(0,o.Z)("/img/logo.svg")}),r.createElement("dl",{className:"f1 fs14 c_000"},r.createElement("dt",{className:"fw700 fs16"},"SACSS"),r.createElement("dd",null,"Static Atomic CSS")))),r.createElement(s.Z,{code:'<div class="bc_fff pt16 pb16 pl16 pr16 dif br8">\n  <img class="mr8 w48 h48" src="./logo.svg"/>\n  <dl class="f1 fs14 c_000">\n    <dt class="fw700 fs16">SACSS</dt>\n    <dd>Static Atomic CSS</dd>\n  </dl>\n</div>',lang:"html"}))}},4404:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(2122),a=n(7294),o=n(6010),i="number_278t",s="box_i1CC",l=n(4544),c=n(7552);var p=function(e){var t=e.code,n=e.isNumber,p=void 0===n||n,u=e.lang,f=void 0===u?"jsx":u;return a.createElement(l.ZP,(0,r.Z)({},l.lG,{theme:c.Z,code:t,language:f}),(function(e){var t=e.className,n=e.style,r=e.tokens,l=e.getLineProps,c=e.getTokenProps;return a.createElement("pre",{className:(0,o.Z)(t,s,p?"":"_no_number"),style:n},r.map((function(e,t){return a.createElement("div",l({line:e,key:t}),p?a.createElement("span",{className:i},t+1):null,e.map((function(e,t){return a.createElement("span",c({token:e,key:t}))})))})))}))}},3688:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return f}});var r=n(2122),a=n(9756),o=n(7294),i=n(3905),s=n(1656),l=n(4996);function c(){return o.createElement("figure",{className:"pt24 pb24 pr24 pl24 bc_000"},o.createElement("div",{className:"bc_fff tac pt24 pb24 pl24 pr24 br8 mw480 mla mra"},o.createElement("img",{className:"w128 h128 br100% db mla mra mb16",src:(0,l.Z)("/img/avatar.jpg"),alt:"avatar",width:"128",height:"128"}),o.createElement("div",{className:"mb16 tac pt8 pb8"},o.createElement("div",null,o.createElement("p",{className:"fs18 fw700 lh28 c_m"},' "Tailwind CSS is the only framework that I\'ve seen scale on large teams. It\u2019s easy to customize, adapts to any design, and the build size is tiny."'))),o.createElement("figcaption",{className:"fs16 lh24 fw500"},o.createElement("div",{className:"c_info"},"Sarah Dayan"),o.createElement("div",{className:"c_s"},"Staff Engineer, Algolia"))))}var p={},u={unversionedId:"intro.example",id:"intro.example",isDocsHomePage:!1,title:"\u4f8b\u5b50",description:"\u590d\u6742\u4f8b\u5b50",source:"@site/docs/intro.example.mdx",sourceDirName:".",slug:"/intro.example",permalink:"/docs/intro.example",editUrl:"https://github.com/ziven27/sacss/edit/master/website/docs/intro.example.mdx",version:"current",frontMatter:{},sidebar:"sideBar",previous:{title:"\u5173\u4e8e",permalink:"/docs/intro.about"},next:{title:"\u6838\u5fc3 CSS",permalink:"/docs/use.core"}},f=[{value:"\u590d\u6742\u4f8b\u5b50",id:"\u590d\u6742\u4f8b\u5b50",children:[]}],m={toc:f};function y(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{mdxType:"Demo"}),(0,i.kt)("h2",{id:"\u590d\u6742\u4f8b\u5b50"},"\u590d\u6742\u4f8b\u5b50"),(0,i.kt)(c,{mdxType:"AvatarTitleDesc"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<figure className="bc_fff tac pt24 pb24 pl24 pr24 br8 mw480 mla mra">\n  <img className="w128 h128 br100% db mla mra mb16" src="/img/avatar.jpg" alt="avatar" width="128" height="128"/>\n  <div className="mb16 tac pt8 pb8">\n    <blockquote>\n      <p className="fs18 fw700 lh28 c_m"> "Tailwind CSS is the only framework that I\'ve seen scale on large teams.\n      It\u2019s easy to customize, adapts to any design, and the build size is tiny."\n      </p>\n    </blockquote>\n  </div>\n  <figcaption className="fs16 lh24 fw500">\n    <div className="c_info">Sarah Dayan</div>\n    <div className="c_s">Staff Engineer, Algolia</div>\n  </figcaption>\n</figure>\n')),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"Tailwind CSS")," \u5b98\u65b9\u7684\u56fe\u7247\u793a\u4f8b\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(7023).Z})))}y.isMDXComponent=!0},6010:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},4544:function(e,t,n){"use strict";n.d(t,{ZP:function(){return y},lG:function(){return i}});var r=n(7410),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(7294),i={Prism:r.Z,theme:a};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},f=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=l({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=l({},n,{backgroundColor:null}),a};function m(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var y=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?f(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=l({},m(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==a&&(o.style=void 0!==o.style?l({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),s(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var i=r?{display:"inline-block"}:{},s=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(s))}})),s(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,i=l({},m(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?l({},i.style,a):a),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),s(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,i=0,s=[],l=[s];i>-1;){for(;(o=r[i]++)<a[i];){var f=void 0,m=t[i],y=n[i][o];if("string"==typeof y?(m=i>0?m:["plain"],f=y):(m=u(m,y.type),y.alias&&(m=u(m,y.alias)),f=y.content),"string"==typeof f){var d=f.split(c),g=d.length;s.push({types:m,content:d[0]});for(var v=1;v<g;v++)p(s),l.push(s=[]),s.push({types:m,content:d[v]})}else i++,t.push(m),n.push(f),r.push(0),a.push(f.length)}i--,t.pop(),n.pop(),r.pop(),a.pop()}return p(s),l}(void 0!==i?this.tokenize(t,r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component)},7552:function(e,t){"use strict";t.Z={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]}},7023:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tailwindcss-91597d289ec42608cb44b35584b98e48.jpg"}}]);