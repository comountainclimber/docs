"use strict";(self.webpackChunk_electron_react_boilerplate_site=self.webpackChunk_electron_react_boilerplate_site||[]).push([[695],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},487:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"building",title:"Building",sidebar_label:"Building"},u=void 0,c={unversionedId:"building",id:"building",title:"Building",description:"Webpack is one of the most crucial parts of ERB's infrastructure as with many other React projects. It provides us with many optimizations such as dead code stripping, tree shaking, and code splitting to name a few. Webpack allows you to scale your application and add many components and layers of abstraction without sacrificing the performance of your app.",source:"@site/docs/building.md",sourceDirName:".",slug:"/building",permalink:"/docs/building",editUrl:"https://github.com/electron-react-boilerplate/site/edit/main/docs/building.md",tags:[],version:"current",frontMatter:{id:"building",title:"Building",sidebar_label:"Building"},sidebar:"docs",previous:{title:"Editor Configuration",permalink:"/docs/editor-configuration"},next:{title:"Packaging",permalink:"/docs/packaging"}},p={},s=[{value:"Build an App",id:"build-an-app",level:2},{value:"Inspecting Build Size",id:"inspecting-build-size",level:2}],d={toc:s};function f(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Webpack is one of the most crucial parts of ERB's infrastructure as with many other React projects. It provides us with many optimizations such as dead code stripping, tree shaking, and code splitting to name a few. Webpack allows you to scale your application and add many components and layers of abstraction without sacrificing the performance of your app."),(0,a.kt)("h2",{id:"build-an-app"},"Build an App"),(0,a.kt)("p",null,"Building a production version of your app will optimize the JS, CSS, and SASS of your application."),(0,a.kt)("p",null,"To create a production build, run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run build"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,a.kt)("h2",{id:"inspecting-build-size"},"Inspecting Build Size"),(0,a.kt)("p",null,"If you want to reduce the build size of your app, you can open a treemap of your build:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"treemap bundle example",src:n(934).Z,width:"1920",height:"1080"})),(0,a.kt)("p",null,"To create a production build:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ANALYZE=true npm run build\n")))}f.isMDXComponent=!0},934:function(e,t,n){t.Z=n.p+"assets/images/bundle-analyzer-example-c7dc150704216896633adf4305892183.png"}}]);