"use strict";(self.webpackChunk_electron_react_boilerplate_site=self.webpackChunk_electron_react_boilerplate_site||[]).push([[586],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5870:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"tool-tips",title:"Tooling Tips",sidebar_label:"Tooling Tips"},p=void 0,c={unversionedId:"tool-tips",id:"tool-tips",title:"Tooling Tips",description:"This page is intended for sharing less known tips about tools used in this boilerplate. Tools are computer programs that are used to maintain and support electron-react-boilerplate. For example, git, yarn, npm etc.",source:"@site/docs/tool-tips.md",sourceDirName:".",slug:"/tool-tips",permalink:"/docs/tool-tips",editUrl:"https://github.com/electron-react-boilerplate/site/edit/main/docs/tool-tips.md",tags:[],version:"current",frontMatter:{id:"tool-tips",title:"Tooling Tips",sidebar_label:"Tooling Tips"},sidebar:"docs",previous:{title:"Internals",permalink:"/docs/internals"},next:{title:"DevTools",permalink:"/docs/dev-tools"}},s={},u=[{value:"Keeping commit history clean",id:"keeping-commit-history-clean",level:2},{value:"Further Readings:",id:"further-readings",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page is intended for sharing less known tips about tools used in this boilerplate. Tools are computer programs that are used to maintain and support electron-react-boilerplate. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"git"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," etc."),(0,i.kt)("h2",{id:"keeping-commit-history-clean"},"Keeping commit history clean"),(0,i.kt)("p",null,"When you clone this project and down the line keep your copy updated with the upstream, you end up with lot many commits that are made by contributors to this boilerplate. Meanwhile you too keep committing in your copy in order to develop your project. You may feel that your ",(0,i.kt)("inlineCode",{parentName:"p"},"git log")," is polluted with commits made to this boilerplate, when you prefer ",(0,i.kt)("inlineCode",{parentName:"p"},"git log")," to show only those commits that are directly related to your project."),(0,i.kt)("p",null,"One workaround is to use ",(0,i.kt)("inlineCode",{parentName:"p"},"--depth 1")," switch in your ",(0,i.kt)("inlineCode",{parentName:"p"},"git clone")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"git fetch")," command."),(0,i.kt)("p",null,"For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# When cloning this boilerplate for the first time\ngit clone --depth=1 https://github.com/electron-react-boilerplate/electron-react-boilerplate.git your-project-name\n# To fetch updated copy of boilerplate\ngit fetch --depth 1 git@github.com:electron-react-boilerplate/electron-react-boilerplate.git\n")),(0,i.kt)("h3",{id:"further-readings"},"Further Readings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/docs/git-clone"},(0,i.kt)("inlineCode",{parentName:"a"},"git clone")," documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/docs/git-fetch"},(0,i.kt)("inlineCode",{parentName:"a"},"git fetch")," documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/782"},"Question: Best way to clean repository after initializing new project? #782"))))}d.isMDXComponent=!0}}]);