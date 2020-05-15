!function(){"use strict";var e,n={},t={};n.setDefaultOptions=function(){t.renderOnLoad=!1,t.useMathJax=!0,t.protectMath=!0,t.style="viewer",t.onRenderPage=void 0,t.commonmarkURL="https://cdnjs.cloudflare.com/ajax/libs/commonmark/0.28.1/commonmark.min.js",t.MathJaxURL="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML"};n.setOption=function(e,n){t[e]=n};var o=function(e,n){var t=window.document.createElement("script");t.src=e,t.onload=n,window.document.head.appendChild(t)};n.tokenType={MARK:0,MASK:1},n.tokenLiteral={MASK:"::MASK::"};var i={plain:["body {","  color: #333;","}","main {","  max-width: 40em;","  margin-left: auto;","  margin-right: auto;","}","h1, h2, h3, h4, h5, h6, h7 {","  margin-top: 1.2em;","  margin-bottom: 0.5em;","}","a:link, a:visited {","  color: #03c;","  text-decoration: none;","}","a:hover, a:active {","  color: #03f;","  text-decoration: underline;","}","img {","  max-width: 100%;","}","blockquote {","  border-left: medium solid #ccc;","  margin-left: 0;","  margin-right: 0;","  padding: 0.5em;","  background: #eee;","}","blockquote *:first-child {","  margin-top: 0;","}","blockquote *:last-child {","  margin-bottom: 0;","}"].join("\n"),viewer:["@media screen and (min-width: 40em) {","  body {","    background: #444;","  }","  main {","    background: #fff;","    padding: 5em 6em;","    margin: 1em auto;","    box-shadow: 0.4em 0.4em 0.4em #222;","  }","}"].join("\n"),none:""};i.viewer=i.plain+i.viewer,n.tokenize=function(e){for(var t,o,i=["\\\\begin{.*}[\\s\\S]*?\\\\end{.*}","\\\\\\[[\\s\\S]*?\\\\\\]","\\\\\\([\\s\\S]*?\\\\\\)","\\\\\\$","\\$\\$(?:[^\\\\]|\\\\.)*?\\$\\$","\\$(?:[^$\\\\]|\\\\.)+?\\$",n.tokenLiteral.MASK].join("|"),d=new RegExp(i,"g"),a=[],r=0;null!==(t=d.exec(e));)t.index>r&&(o=e.substring(r,t.index),a.push([n.tokenType.MARK,o])),a.push([n.tokenType.MASK,t[0]]),r=d.lastIndex;return o=e.substring(r),e.length>r&&a.push([n.tokenType.MARK,o]),a},n.mask=function(e){var t,o,i,d=[],a=[];for(i=0;i<e.length;i++)t=e[i][0],o=e[i][1],t===n.tokenType.MARK?d.push(o):(d.push(n.tokenLiteral.MASK),a.push(o));return{text:d.join(""),tokenValues:a}},n.unmask=function(e,t){var o=new RegExp(n.tokenLiteral.MASK,"g"),i=0;return e.replace(o,function(){return t[i++]})},n.renderCommonMark=function(n){var t=(new e.Parser).parse(n);return(new e.HtmlRenderer).render(t)},n.protectMathAndRenderCommonMark=function(e){var t=n.tokenize(e),o=n.mask(t),i=n.renderCommonMark(o.text);return n.unmask(i,o.tokenValues)},n.render=function(e){return t.protectMath?n.protectMathAndRenderCommonMark(e):n.renderCommonMark(e)},n.renderPage=function(){var e,o,d=window.document.getElementsByTagName("textarea"),a=window.document.createElement("main");d.length>0?(e=d[0].value.trim(),d[0].remove()):(e=window.document.body.innerHTML.trim(),window.document.body.innerHTML=""),void 0!==window.document.title&&""!==window.document.title||(o=e.split("\n",1)[0].replace(/^\s*#*\s*|\s*#*\s*$/g,""),window.document.title=o),window.document.body.appendChild(a);var r=window.document.createElement("style"),m=i[t.style];r.appendChild(window.document.createTextNode(m)),window.document.head.appendChild(r);var u=window.document.createElement("meta");u.name="viewport",u.content="width=device-width; initial-scale=1.0",window.document.head.appendChild(u),a.innerHTML=n.render(e),t.useMathJax&&window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,a]),void 0!==t.onRenderPage&&t.onRenderPage()},n.renderElement=function(e,o){var d,a,r=window.document.getElementById(e),m=window.document.getElementById(o);"undefined"!==r?d="TEXTAREA"==r.tagName?r.value.trim():r.innerText.trim():(d=window.document.body.innerHTML.trim(),window.document.body.innerHTML=""),void 0!==window.document.title&&""!==window.document.title||(a=d.split("\n",1)[0].replace(/^\s*#*\s*|\s*#*\s*$/g,""),window.document.title=a);var u=window.document.createElement("style"),c=i[t.style];u.appendChild(window.document.createTextNode(c)),window.document.head.appendChild(u);var w=window.document.createElement("meta");w.name="viewport",w.content="width=device-width, initial-scale=1.0",window.document.head.appendChild(w),m.innerHTML=n.render(d),t.useMathJax&&window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,m]),void 0!==t.onRenderPage&&t.onRenderPage()},n.main=function(){n.setDefaultOptions(),"undefined"!=typeof window?(!function(){var e;for(e in t)"undefined"!=typeof window&&void 0!==window.texme&&void 0!==window.texme[e]&&(t[e]=window.texme[e])}(),o(t.commonmarkURL,function(){e=window.commonmark}),t.useMathJax&&(window.MathJax={tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],processEscapes:!0},TeX:{equationNumbers:{autoNumber:"AMS"},extensions:["color.js","autoload-all.js"]},skipStartupTypeset:!0},o(t.MathJaxURL)),t.renderOnLoad&&(window.onload=n.renderPage),window.texme=n):(e=require("commonmark"),module.exports=n)},n.main()}();
