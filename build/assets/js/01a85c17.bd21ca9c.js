"use strict";(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[8209],{6535:(e,t,a)=>{a.d(t,{A:()=>_});var s=a(8587),r=a(6540),i=a(4164),n=a(781),l=a(4581),c=a(8774),o=a(1312),u=a(6347),d=a(9169);function m(e){var t=(0,u.zy)().pathname;return(0,r.useMemo)((function(){return e.filter((function(e){return function(e,t){return!(e.unlisted&&!(0,d.ys)(e.permalink,t))}(e,t)}))}),[e,t])}const b={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var g=a(4848);function h(e){var t=e.sidebar,a=m(t.items);return(0,g.jsx)("aside",{className:"col col--3",children:(0,g.jsxs)("nav",{className:(0,i.A)(b.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,g.jsx)("div",{className:(0,i.A)(b.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,g.jsx)("ul",{className:(0,i.A)(b.sidebarItemList,"clean-list"),children:a.map((function(e){return(0,g.jsx)("li",{className:b.sidebarItem,children:(0,g.jsx)(c.A,{isNavLink:!0,to:e.permalink,className:b.sidebarItemLink,activeClassName:b.sidebarItemLinkActive,children:e.title})},e.permalink)}))})]})})}var v=a(5600);function j(e){var t=m(e.sidebar.items);return(0,g.jsx)("ul",{className:"menu__list",children:t.map((function(e){return(0,g.jsx)("li",{className:"menu__list-item",children:(0,g.jsx)(c.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function p(e){return(0,g.jsx)(v.GX,{component:j,props:e})}function f(e){var t=e.sidebar,a=(0,l.l)();return null!=t&&t.items.length?"mobile"===a?(0,g.jsx)(p,{sidebar:t}):(0,g.jsx)(h,{sidebar:t}):null}var x=["sidebar","toc","children"];function _(e){var t=e.sidebar,a=e.toc,r=e.children,l=(0,s.A)(e,x),c=t&&t.items.length>0;return(0,g.jsx)(n.A,Object.assign({},l,{children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)(f,{sidebar:t}),(0,g.jsx)("main",{className:(0,i.A)("col",{"col--7":c,"col--9 col--offset-1":!c}),children:r}),a&&(0,g.jsx)("div",{className:"col col--2",children:a})]})})}))}},9158:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});a(6540);var s=a(4164),r=a(1312),i=function(){return(0,r.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};var n=a(1213),l=a(7559),c=a(6535),o=a(6133),u=a(1107);const d={tag:"tag_Nnez"};var m=a(4848);function b(e){var t=e.letterEntry;return(0,m.jsxs)("article",{children:[(0,m.jsx)(u.A,{as:"h2",id:t.letter,children:t.letter}),(0,m.jsx)("ul",{className:"padding--none",children:t.tags.map((function(e){return(0,m.jsx)("li",{className:d.tag,children:(0,m.jsx)(o.A,Object.assign({},e))},e.permalink)}))}),(0,m.jsx)("hr",{})]})}function g(e){var t=function(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],s=t[0];return a.localeCompare(s)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}(e.tags);return(0,m.jsx)("section",{className:"margin-vert--lg",children:t.map((function(e){return(0,m.jsx)(b,{letterEntry:e},e.letter)}))})}var h=a(1463);function v(e){var t=e.tags,a=e.sidebar,r=i();return(0,m.jsxs)(n.e3,{className:(0,s.A)(l.G.wrapper.blogPages,l.G.page.blogTagsListPage),children:[(0,m.jsx)(n.be,{title:r}),(0,m.jsx)(h.A,{tag:"blog_tags_list"}),(0,m.jsxs)(c.A,{sidebar:a,children:[(0,m.jsx)(u.A,{as:"h1",children:r}),(0,m.jsx)(g,{tags:t})]})]})}},6133:(e,t,a)=>{a.d(t,{A:()=>l});a(6540);var s=a(4164),r=a(8774);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=a(4848);function l(e){var t=e.permalink,a=e.label,l=e.count,c=e.description;return(0,n.jsxs)(r.A,{href:t,title:c,className:(0,s.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[a,l&&(0,n.jsx)("span",{children:l})]})}}}]);