(self.webpackChunkmy_docusaurus_site=self.webpackChunkmy_docusaurus_site||[]).push([[3533],{7293:(e,n,t)=>{"use strict";t.d(n,{A:()=>T});var s=t(6540),a=t(4848);function r(e){var n,t=function(e){var n=s.Children.toArray(e),t=n.find((function(e){return s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type})),r=n.filter((function(e){return e!==t}));return{mdxAdmonitionTitle:null==t?void 0:t.props.children,rest:r.length>0?(0,a.jsx)(a.Fragment,{children:r}):null}}(e.children),r=t.mdxAdmonitionTitle,i=t.rest,o=null!=(n=e.title)?n:r;return Object.assign({},e,o&&{title:o},{children:i})}var i=t(4164),o=t(1312),c=t(7559);const l={admonition:"admonition_xJq3",admonitionHeading:"admonitionHeading_Gvgb",admonitionIcon:"admonitionIcon_Rf37",admonitionContent:"admonitionContent_BuS1"};function d(e){var n=e.type,t=e.className,s=e.children;return(0,a.jsx)("div",{className:(0,i.A)(c.G.common.admonition,c.G.common.admonitionType(n),l.admonition,t),children:s})}function u(e){var n=e.icon,t=e.title;return(0,a.jsxs)("div",{className:l.admonitionHeading,children:[(0,a.jsx)("span",{className:l.admonitionIcon,children:n}),t]})}function m(e){var n=e.children;return n?(0,a.jsx)("div",{className:l.admonitionContent,children:n}):null}function h(e){var n=e.type,t=e.icon,s=e.title,r=e.children,i=e.className;return(0,a.jsxs)(d,{type:n,className:i,children:[s||t?(0,a.jsx)(u,{title:s,icon:t}):null,(0,a.jsx)(m,{children:r})]})}function f(e){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})}))}var p={icon:(0,a.jsx)(f,{}),title:(0,a.jsx)(o.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function b(e){return(0,a.jsx)(h,Object.assign({},p,e,{className:(0,i.A)("alert alert--secondary",e.className),children:e.children}))}function j(e){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})}))}var g={icon:(0,a.jsx)(j,{}),title:(0,a.jsx)(o.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function v(e){return(0,a.jsx)(h,Object.assign({},g,e,{className:(0,i.A)("alert alert--success",e.className),children:e.children}))}function x(e){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 14 16"},e,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})}))}var y={icon:(0,a.jsx)(x,{}),title:(0,a.jsx)(o.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function N(e){return(0,a.jsx)(h,Object.assign({},y,e,{className:(0,i.A)("alert alert--info",e.className),children:e.children}))}function A(e){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 16 16"},e,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})}))}var B={icon:(0,a.jsx)(A,{}),title:(0,a.jsx)(o.A,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function k(e){return(0,a.jsx)("svg",Object.assign({viewBox:"0 0 12 16"},e,{children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})}))}var w={icon:(0,a.jsx)(k,{}),title:(0,a.jsx)(o.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};var C={icon:(0,a.jsx)(A,{}),title:(0,a.jsx)(o.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var O={note:b,tip:v,info:N,warning:function(e){return(0,a.jsx)(h,Object.assign({},B,e,{className:(0,i.A)("alert alert--warning",e.className),children:e.children}))},danger:function(e){return(0,a.jsx)(h,Object.assign({},w,e,{className:(0,i.A)("alert alert--danger",e.className),children:e.children}))}},E={secondary:function(e){return(0,a.jsx)(b,Object.assign({title:"secondary"},e))},important:function(e){return(0,a.jsx)(N,Object.assign({title:"important"},e))},success:function(e){return(0,a.jsx)(v,Object.assign({title:"success"},e))},caution:function(e){return(0,a.jsx)(h,Object.assign({},C,e,{className:(0,i.A)("alert alert--warning",e.className),children:e.children}))}};const L=Object.assign({},O,E);function T(e){var n,t=r(e),s=(n=t.type,L[n]||(console.warn('No admonition component found for admonition type "'+n+'". Using Info as fallback.'),L.info));return(0,a.jsx)(s,Object.assign({},t))}},4336:(e,n,t)=>{"use strict";t.d(n,{A:()=>g});t(6540);var s=t(4164),a=t(1312),r=t(7559),i=t(8774),o=t(8587);const c={iconEdit:"iconEdit_Z9Sw"};var l=t(4848),d=["className"];function u(e){var n=e.className,t=(0,o.A)(e,d);return(0,l.jsx)("svg",Object.assign({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(c.iconEdit,n),"aria-hidden":"true"},t,{children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}))}function m(e){var n=e.editUrl;return(0,l.jsxs)(i.A,{to:n,className:r.G.common.editThisPage,children:[(0,l.jsx)(u,{}),(0,l.jsx)(a.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var h=t(6266);function f(e){var n=e.lastUpdatedAt,t=new Date(n),s=(0,h.i)({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(t);return(0,l.jsx)(a.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:t.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function p(e){var n=e.lastUpdatedBy;return(0,l.jsx)(a.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:n})},children:" by {user}"})}function b(e){var n=e.lastUpdatedAt,t=e.lastUpdatedBy;return(0,l.jsxs)("span",{className:r.G.common.lastUpdated,children:[(0,l.jsx)(a.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:n?(0,l.jsx)(f,{lastUpdatedAt:n}):"",byUser:t?(0,l.jsx)(p,{lastUpdatedBy:t}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const j={lastUpdated:"lastUpdated_JAkA"};function g(e){var n=e.className,t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy;return(0,l.jsxs)("div",{className:(0,s.A)("row",n),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(m,{editUrl:t})}),(0,l.jsx)("div",{className:(0,s.A)("col",j.lastUpdated),children:(a||r)&&(0,l.jsx)(b,{lastUpdatedAt:a,lastUpdatedBy:r})})]})}},6777:(e,n,t)=>{"use strict";t.d(n,{A:()=>he});var s=t(6540),a=t(8453),r=t(5260),i=t(8587),o=t(2303),c=t(4164),l=t(5293),d=t(6342);function u(){var e=(0,d.p)().prism,n=(0,l.G)().colorMode,t=e.theme,s=e.darkTheme||t;return"dark"===n?s:t}var m=t(7559),h=t(8634),f=t(8426),p=t.n(f),b=(0,h.A)(/title=(["'])(.*?)\1/,{quote:1,title:2}),j=(0,h.A)(/\{([\d,-]+)\}/,{range:1}),g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},v=Object.assign({},g,{lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}}),x=Object.keys(g);function y(e,n){var t=e.map((function(e){var t=v[e],s=t.start,a=t.end;return"(?:"+s+"\\s*("+n.flatMap((function(e){var n,t;return[e.line,null==(n=e.block)?void 0:n.start,null==(t=e.block)?void 0:t.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")}function N(e,n){var t=e.replace(/\n$/,""),s=n.language,a=n.magicComments,r=n.metastring;if(r&&j.test(r)){var i=r.match(j).groups.range;if(0===a.length)throw new Error("A highlight range has been given in code block's metastring (``` "+r+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var o=a[0].className,c=p()(i).filter((function(e){return e>0})).map((function(e){return[e-1,[o]]}));return{lineClassNames:Object.fromEntries(c),code:t}}if(void 0===s)return{lineClassNames:{},code:t};for(var l=function(e,n){switch(e){case"js":case"javascript":case"ts":case"typescript":return y(["js","jsBlock"],n);case"jsx":case"tsx":return y(["js","jsBlock","jsx"],n);case"html":return y(["js","jsBlock","html"],n);case"python":case"py":case"bash":return y(["bash"],n);case"markdown":case"md":return y(["html","jsx","bash"],n);case"tex":case"latex":case"matlab":return y(["tex"],n);case"lua":case"haskell":case"sql":return y(["lua"],n);case"wasm":return y(["wasm"],n);case"vb":case"vba":case"visual-basic":return y(["vb","rem"],n);case"vbnet":return y(["vbnet","rem"],n);case"batch":return y(["rem"],n);case"basic":return y(["rem","f90"],n);case"fsharp":return y(["js","ml"],n);case"ocaml":case"sml":return y(["ml"],n);case"fortran":return y(["f90"],n);case"cobol":return y(["cobol"],n);default:return y(x,n)}}(s,a),d=t.split("\n"),u=Object.fromEntries(a.map((function(e){return[e.className,{start:0,range:""}]}))),m=Object.fromEntries(a.filter((function(e){return e.line})).map((function(e){var n=e.className;return[e.line,n]}))),h=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.start,n]}))),f=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var n=e.className;return[e.block.end,n]}))),b=0;b<d.length;){var g=d[b].match(l);if(g){var v=g.slice(1).find((function(e){return void 0!==e}));m[v]?u[m[v]].range+=b+",":h[v]?u[h[v]].start=b:f[v]&&(u[f[v]].range+=u[f[v]].start+"-"+(b-1)+","),d.splice(b,1)}else b+=1}t=d.join("\n");var N={};return Object.entries(u).forEach((function(e){var n=e[0],t=e[1].range;p()(t).forEach((function(e){null!=N[e]||(N[e]=[]),N[e].push(n)}))})),{lineClassNames:N,code:t}}const A={codeBlockContainer:"codeBlockContainer_Ckt0"};var B=t(4848),k=["as"];function w(e){var n=e.as,t=(0,i.A)(e,k),s=function(e){var n={color:"--prism-color",backgroundColor:"--prism-background-color"},t={};return Object.entries(e.plain).forEach((function(e){var s=e[0],a=e[1],r=n[s];r&&"string"==typeof a&&(t[r]=a)})),t}(u());return(0,B.jsx)(n,Object.assign({},t,{style:s,className:(0,c.A)(t.className,A.codeBlockContainer,m.G.common.codeBlock)}))}const C={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function O(e){var n=e.children,t=e.className;return(0,B.jsx)(w,{as:"pre",tabIndex:0,className:(0,c.A)(C.codeBlockStandalone,"thin-scrollbar",t),children:(0,B.jsx)("code",{className:C.codeBlockLines,children:n})})}var E=t(3807),L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function T(e,n){var t=(0,s.useState)(),a=t[0],r=t[1],i=(0,s.useCallback)((function(){var n;r(null==(n=e.current)?void 0:n.closest("[role=tabpanel][hidden]"))}),[e,r]);(0,s.useEffect)((function(){i()}),[i]),function(e,n,t){void 0===t&&(t=L);var a=(0,E._q)(n),r=(0,E.Be)(t);(0,s.useEffect)((function(){var n=new MutationObserver(a);return e&&n.observe(e,r),function(){return n.disconnect()}}),[e,a,r])}(a,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(n(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var _=t(1765);const S={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function U(e){var n=e.line,t=e.classNames,s=e.showLineNumbers,a=e.getLineProps,r=e.getTokenProps;1===n.length&&"\n"===n[0].content&&(n[0].content="");var i=a({line:n,className:(0,c.A)(t,s&&S.codeLine)}),o=n.map((function(e,n){return(0,B.jsx)("span",Object.assign({},r({token:e})),n)}));return(0,B.jsxs)("span",Object.assign({},i,{children:[s?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("span",{className:S.codeLineNumber}),(0,B.jsx)("span",{className:S.codeLineContent,children:o})]}):o,(0,B.jsx)("br",{})]}))}var M=t(1312);function z(e){return(0,B.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,B.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}function I(e){return(0,B.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,B.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}const H={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function R(e){var n=e.code,t=e.className,a=(0,s.useState)(!1),r=a[0],i=a[1],o=(0,s.useRef)(void 0),l=(0,s.useCallback)((function(){!function(e,{target:n=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const t=document.createElement("textarea"),s=document.activeElement;t.value=e,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const a=document.getSelection(),r=a.rangeCount>0&&a.getRangeAt(0);n.append(t),t.select(),t.selectionStart=0,t.selectionEnd=e.length;let i=!1;try{i=document.execCommand("copy")}catch{}t.remove(),r&&(a.removeAllRanges(),a.addRange(r)),s&&s.focus()}(n),i(!0),o.current=window.setTimeout((function(){i(!1)}),1e3)}),[n]);return(0,s.useEffect)((function(){return function(){return window.clearTimeout(o.current)}}),[]),(0,B.jsx)("button",{type:"button","aria-label":r?(0,M.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,M.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,M.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,c.A)("clean-btn",t,H.copyButton,r&&H.copyButtonCopied),onClick:l,children:(0,B.jsxs)("span",{className:H.copyButtonIcons,"aria-hidden":"true",children:[(0,B.jsx)(z,{className:H.copyButtonIcon}),(0,B.jsx)(I,{className:H.copyButtonSuccessIcon})]})})}function V(e){return(0,B.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,B.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}const W={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function D(e){var n=e.className,t=e.onClick,s=e.isEnabled,a=(0,M.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,B.jsx)("button",{type:"button",onClick:t,className:(0,c.A)("clean-btn",n,s&&W.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,B.jsx)(V,{className:W.wordWrapButtonIcon,"aria-hidden":"true"})})}function P(e){var n,t,a,r,i,o,l,m,h,f,p,j=e.children,g=e.className,v=void 0===g?"":g,x=e.metastring,y=e.title,A=e.showLineNumbers,k=e.language,O=(0,d.p)().prism,E=O.defaultLanguage,L=O.magicComments,S=function(e){return null==e?void 0:e.toLowerCase()}(null!=(n=null!=k?k:null==(t=v.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:t.replace(/language-/,""))?n:E),M=u(),z=(a=(0,s.useState)(!1),r=a[0],i=a[1],o=(0,s.useState)(!1),l=o[0],m=o[1],h=(0,s.useRef)(null),f=(0,s.useCallback)((function(){var e=h.current.querySelector("code");r?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),i((function(e){return!e}))}),[h,r]),p=(0,s.useCallback)((function(){var e=h.current,n=e.scrollWidth>e.clientWidth||h.current.querySelector("code").hasAttribute("style");m(n)}),[h]),T(h,p),(0,s.useEffect)((function(){p()}),[r,p]),(0,s.useEffect)((function(){return window.addEventListener("resize",p,{passive:!0}),function(){window.removeEventListener("resize",p)}}),[p]),{codeBlockRef:h,isEnabled:r,isCodeScrollable:l,toggle:f}),I=function(e){var n,t;return null!=(n=null==e||null==(t=e.match(b))?void 0:t.groups.title)?n:""}(x)||y,H=N(j,{metastring:x,language:S,magicComments:L}),V=H.lineClassNames,W=H.code,P=null!=A?A:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(x);return(0,B.jsxs)(w,{as:"div",className:(0,c.A)(v,S&&!v.includes("language-"+S)&&"language-"+S),children:[I&&(0,B.jsx)("div",{className:C.codeBlockTitle,children:I}),(0,B.jsxs)("div",{className:C.codeBlockContent,children:[(0,B.jsx)(_.f4,{theme:M,code:W,language:null!=S?S:"text",children:function(e){var n=e.className,t=e.style,s=e.tokens,a=e.getLineProps,r=e.getTokenProps;return(0,B.jsx)("pre",{tabIndex:0,ref:z.codeBlockRef,className:(0,c.A)(n,C.codeBlock,"thin-scrollbar"),style:t,children:(0,B.jsx)("code",{className:(0,c.A)(C.codeBlockLines,P&&C.codeBlockLinesWithNumbering),children:s.map((function(e,n){return(0,B.jsx)(U,{line:e,getLineProps:a,getTokenProps:r,classNames:V[n],showLineNumbers:P},n)}))})})}}),(0,B.jsxs)("div",{className:C.buttonGroup,children:[(z.isEnabled||z.isCodeScrollable)&&(0,B.jsx)(D,{className:C.codeButton,onClick:function(){return z.toggle()},isEnabled:z.isEnabled}),(0,B.jsx)(R,{className:C.codeButton,code:W})]})]})]})}var q=["children"];function G(e){var n=e.children,t=(0,i.A)(e,q),a=(0,o.A)(),r=function(e){return s.Children.toArray(e).some((function(e){return(0,s.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(n),c="string"==typeof r?P:O;return(0,B.jsx)(c,Object.assign({},t,{children:r}),String(a))}function F(e){return(0,B.jsx)("code",Object.assign({},e))}var $=t(8774);var Z=t(3427),J=t(1422);const Y={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};var K=["summary","children"];function Q(e){return!!e&&("SUMMARY"===e.tagName||Q(e.parentElement))}function X(e,n){return!!e&&(e===n||X(e.parentElement,n))}function ee(e){var n=e.summary,t=e.children,a=(0,i.A)(e,K);(0,Z.A)().collectAnchor(a.id);var r=(0,o.A)(),l=(0,s.useRef)(null),d=(0,J.u)({initialState:!a.open}),u=d.collapsed,m=d.setCollapsed,h=(0,s.useState)(a.open),f=h[0],p=h[1],b=s.isValidElement(n)?n:(0,B.jsx)("summary",{children:null!=n?n:"Details"});return(0,B.jsxs)("details",Object.assign({},a,{ref:l,open:f,"data-collapsed":u,className:(0,c.A)(Y.details,r&&Y.isBrowser,a.className),onMouseDown:function(e){Q(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;Q(n)&&X(n,l.current)&&(e.preventDefault(),u?(m(!1),p(!0)):m(!0))},children:[b,(0,B.jsx)(J.N,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){m(e),p(!e)},children:(0,B.jsx)("div",{className:Y.collapsibleContent,children:t})})]}))}const ne={details:"details_b_Ee"};var te="alert alert--info";function se(e){var n=Object.assign({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return(0,B.jsx)(ee,Object.assign({},n,{className:(0,c.A)(te,ne.details,n.className)}))}function ae(e){var n=s.Children.toArray(e.children),t=n.find((function(e){return s.isValidElement(e)&&"summary"===e.type})),a=(0,B.jsx)(B.Fragment,{children:n.filter((function(e){return e!==t}))});return(0,B.jsx)(se,Object.assign({},e,{summary:t,children:a}))}var re=t(1107);function ie(e){return(0,B.jsx)(re.A,Object.assign({},e))}const oe={containsTaskList:"containsTaskList_mC6p"};function ce(e){if(void 0!==e)return(0,c.A)(e,(null==e?void 0:e.includes("contains-task-list"))&&oe.containsTaskList)}const le={img:"img_ev3q"};var de=t(7293),ue=t(418);const me={Head:r.A,details:ae,Details:ae,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")}))}(e)?(0,B.jsx)(F,Object.assign({},e)):(0,B.jsx)(G,Object.assign({},e))},a:function(e){return(0,B.jsx)($.A,Object.assign({},e))},pre:function(e){return(0,B.jsx)(B.Fragment,{children:e.children})},ul:function(e){return(0,B.jsx)("ul",Object.assign({},e,{className:ce(e.className)}))},li:function(e){return(0,Z.A)().collectAnchor(e.id),(0,B.jsx)("li",Object.assign({},e))},img:function(e){return(0,B.jsx)("img",Object.assign({decoding:"async",loading:"lazy"},e,{className:(n=e.className,(0,c.A)(n,le.img))}));var n},h1:function(e){return(0,B.jsx)(ie,Object.assign({as:"h1"},e))},h2:function(e){return(0,B.jsx)(ie,Object.assign({as:"h2"},e))},h3:function(e){return(0,B.jsx)(ie,Object.assign({as:"h3"},e))},h4:function(e){return(0,B.jsx)(ie,Object.assign({as:"h4"},e))},h5:function(e){return(0,B.jsx)(ie,Object.assign({as:"h5"},e))},h6:function(e){return(0,B.jsx)(ie,Object.assign({as:"h6"},e))},admonition:de.A,mermaid:ue.A};function he(e){var n=e.children;return(0,B.jsx)(a.x,{components:me,children:n})}},6266:(e,n,t)=>{"use strict";t.d(n,{i:()=>a});var s=t(4586);function a(e){void 0===e&&(e={});var n=(0,s.A)().i18n.currentLocale,t=function(){var e=(0,s.A)().i18n,n=e.currentLocale;return e.localeConfigs[n].calendar}();return new Intl.DateTimeFormat(n,Object.assign({calendar:t},e))}},8426:(e,n)=>{function t(e){let n,t=[];for(let s of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(s))t.push(parseInt(s,10));else if(n=s.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,s,a,r]=n;if(s&&r){s=parseInt(s),r=parseInt(r);const e=s<r?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(r+=e);for(let n=s;n!==r;n+=e)t.push(n)}}return t}n.default=t,e.exports=t},8453:(e,n,t)=>{"use strict";t.d(n,{R:()=>i,x:()=>o});var s=t(6540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);