"use strict";(self.webpackChunk_electron_react_boilerplate_site=self.webpackChunk_electron_react_boilerplate_site||[]).push([[103],{8665:function(e,t,a){a.d(t,{Z:function(){return h}});var l=a(3366),n=a(7294),r=a(6010),i=a(2600),o=a(9960),s="sidebar_a9qW",m="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",d="sidebarItem_CF0Q",u="sidebarItemLink_miNk",g="sidebarItemLinkActive_RRTD",p=a(5999);function v(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.Z)(s,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:c},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:d},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var b=["sidebar","toc","children"];function h(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,l.Z)(e,b),m=t&&t.items.length>0;return n.createElement(i.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},m&&n.createElement("aside",{className:"col col--3"},n.createElement(v,{sidebar:t})),n.createElement("main",{className:(0,r.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},8561:function(e,t,a){a.d(t,{Z:function(){return k}});var l=a(7294),n=a(6010),r=a(5999),i=a(9960),o=a(4996),s=a(5979),m=a(8780),c=a(7459),d=a(6753),u="blogPostTitle_rzP5",g="blogPostData_Zg1s",p="blogPostDetailsFull_h6_j",v=a(8727),b="image_o0gy";function h(e){return e.href?l.createElement(i.Z,e):l.createElement(l.Fragment,null,e.children)}function E(e){var t=e.author,a=t.name,n=t.title,r=t.url,i=t.imageURL,o=t.email,s=r||o&&"mailto:"+o||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement("span",{className:"avatar__photo-link avatar__photo"},l.createElement(h,{href:s},l.createElement("img",{className:b,src:i,alt:a}))),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(h,{href:s,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))}var f="authorCol_FlmR",_="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function Z(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var r=t.every((function(e){return!e.name}));return l.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",r?_:"row")},t.map((function(e,t){var i;return l.createElement("div",{className:(0,n.Z)(!r&&"col col--6",r?N:f),key:t},l.createElement(E,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function k(e){var t,a,b=(a=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,r.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=(0,o.C)().withBaseUrl,E=e.children,f=e.frontMatter,_=e.assets,N=e.metadata,k=e.truncated,P=e.isBlogPostPage,L=void 0!==P&&P,C=N.date,y=N.formattedDate,I=N.permalink,T=N.tags,w=N.readingTime,x=N.title,A=N.editUrl,H=N.authors,M=null!=(t=_.image)?t:f.image,R=!L&&k,B=T.length>0,U=L?"h1":"h2";return l.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(U,{className:u,itemProp:"headline"},L?x:l.createElement(i.Z,{itemProp:"url",to:I},x)),l.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},l.createElement("time",{dateTime:C,itemProp:"datePublished"},y),void 0!==w&&l.createElement(l.Fragment,null," \xb7 ",b(w))),l.createElement(Z,{authors:H,assets:_})),M&&l.createElement("meta",{itemProp:"image",content:h(M,{absolute:!0})}),l.createElement("div",{id:L?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(c.Z,null,E)),(B||k)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",L&&p)},B&&l.createElement("div",{className:(0,n.Z)("col",{"col--9":R})},l.createElement(v.Z,{tags:T})),L&&A&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:A})),R&&l.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":B})},l.createElement(i.Z,{to:N.permalink,"aria-label":(0,r.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:x})},l.createElement("b",null,l.createElement(r.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9360:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var l=a(7294),n=a(8665),r=a(8561),i=a(7462),o=a(5999),s=a(1750);function m(e){var t=e.nextItem,a=e.prevItem;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(s.Z,(0,i.Z)({},a,{subLabel:l.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")}))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(s.Z,(0,i.Z)({},t,{subLabel:l.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")}))))}var c=a(5979),d=a(1575),u=a(6010);function g(e){var t,a=e.content,n=a.assets,r=a.metadata,i=r.title,o=r.description,s=r.date,m=r.tags,d=r.authors,u=r.frontMatter,g=u.keywords,p=null!=(t=n.image)?t:u.image;return l.createElement(c.d,{title:i,description:o,keywords:g,image:p},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:s}),d.some((function(e){return e.url}))&&l.createElement("meta",{property:"article:author",content:d.map((function(e){return e.url})).filter(Boolean).join(",")}),m.length>0&&l.createElement("meta",{property:"article:tag",content:m.map((function(e){return e.label})).join(",")}))}function p(e){var t=e.content,a=e.sidebar,i=t.assets,o=t.metadata,s=o.nextItem,c=o.prevItem,u=o.frontMatter,g=u.hide_table_of_contents,p=u.toc_min_heading_level,v=u.toc_max_heading_level;return l.createElement(n.Z,{sidebar:a,toc:!g&&t.toc&&t.toc.length>0?l.createElement(d.Z,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:v}):void 0},l.createElement(r.Z,{frontMatter:u,assets:i,metadata:o,isBlogPostPage:!0},l.createElement(t,null)),(s||c)&&l.createElement(m,{nextItem:s,prevItem:c}))}function v(e){return l.createElement(c.FG,{className:(0,u.Z)(c.kM.wrapper.blogPages,c.kM.page.blogPostPage)},l.createElement(g,e),l.createElement(p,e))}},1575:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(7462),n=a(3366),r=a(7294),i=a(6010),o=a(5002),s="tableOfContents_cNA8",m=["className"];function c(e){var t=e.className,a=(0,n.Z)(e,m);return r.createElement("div",{className:(0,i.Z)(s,"thin-scrollbar",t)},r.createElement(o.Z,(0,l.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(7462),n=a(3366),r=a(7294),i=a(5979),o=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,l=e.linkClassName,n=e.isChild;return t.length?r.createElement("ul",{className:n?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:l}))}))):null}function m(e){var t=e.toc,a=e.className,m=void 0===a?"table-of-contents table-of-contents__left-border":a,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,g=void 0===u?void 0:u,p=e.minHeadingLevel,v=e.maxHeadingLevel,b=(0,n.Z)(e,o),h=(0,i.LU)(),E=null!=p?p:h.tableOfContents.minHeadingLevel,f=null!=v?v:h.tableOfContents.maxHeadingLevel,_=(0,i.b9)({toc:t,minHeadingLevel:E,maxHeadingLevel:f}),N=(0,r.useMemo)((function(){if(d&&g)return{linkClassName:d,linkActiveClassName:g,minHeadingLevel:E,maxHeadingLevel:f}}),[d,g,E,f]);return(0,i.Si)(N),r.createElement(s,(0,l.Z)({toc:_,className:m,linkClassName:d},b))}}}]);