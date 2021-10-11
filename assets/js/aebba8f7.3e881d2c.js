"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[308],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=i,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||a;return n?o.createElement(m,r(r({ref:t},c),{},{components:n})):o.createElement(m,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4430:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],l={id:"options",title:"Options"},s=void 0,p={unversionedId:"options",id:"options",isDocsHomePage:!1,title:"Options",description:"HTML graphics",source:"@site/docs/options.md",sourceDirName:".",slug:"/options",permalink:"/docs/options",editUrl:"https://github.com/gapitio/gapit-htmlgraphics-panel/edit/main/website/docs/options.md",tags:[],version:"current",frontMatter:{id:"options",title:"Options"},sidebar:"docsSidebar",previous:{title:"Quick start",permalink:"/docs/quick-start"},next:{title:"References",permalink:"/docs/references"}},c=[{value:"HTML graphics",id:"html-graphics",children:[{value:"Fit content to panel",id:"fit-content-to-panel",children:[]},{value:"Center align content",id:"center-align-content",children:[]},{value:"Overflow",id:"overflow",children:[]},{value:"Root CSS",id:"root-css",children:[]},{value:"CSS",id:"css",children:[]},{value:"HTML/SVG document",id:"htmlsvg-document",children:[]},{value:"Run onRender when mounted",id:"run-onrender-when-mounted",children:[]},{value:"onRender",id:"onrender",children:[]},{value:"Dynamic data",id:"dynamic-data",children:[]},{value:"Trigger panelupdate when mounted",id:"trigger-panelupdate-when-mounted",children:[]},{value:"onInit",id:"oninit",children:[]}]},{value:"Polyfill",id:"polyfill",children:[{value:"SVG base fix",id:"svg-base-fix",children:[]}]},{value:"Custom properties",id:"custom-properties",children:[{value:"Edit as JSON",id:"edit-as-json",children:[]}]},{value:"Import/export",id:"importexport",children:[]}],d={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"html-graphics"},"HTML graphics"),(0,a.kt)("h3",{id:"fit-content-to-panel"},"Fit content to panel"),(0,a.kt)("p",null,"This is mostly for SVG, as it will scale the content based on the size of the panel.\nAdds 100% height and width attribute to the document."),(0,a.kt)("h3",{id:"center-align-content"},"Center align content"),(0,a.kt)("p",null,'Vertically and horizontally aligns the panel content to the center.\nAdds "display: flex; justify-content: center; align-items: center" to the shadow root container.'),(0,a.kt)("h3",{id:"overflow"},"Overflow"),(0,a.kt)("p",null,'Chooses what happens if content overflows outside the panel.\n"Fit content to panel" is recommended to turn on with some of these options, as some of these won\'t work without it.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/gapitio/gapit-htmlgraphics-panel/master/src/img/screenshot-overflow.png",alt:"Overflow options"})),(0,a.kt)("h3",{id:"root-css"},"Root CSS"),(0,a.kt)("p",null,"CSS that's loaded outside the shadowroot. Useful for font faces and imports."),(0,a.kt)("p",null,"Below code imports the ",(0,a.kt)("a",{parentName:"p",href:"https://fonts.google.com/specimen/Stick+No+Bills"},"Stick No Bills")," font"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Root CSS")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"@import url('https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@200&display=swap');\n")),(0,a.kt)("p",null,"The font can be used inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"CSS")," code."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CSS")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"* {\n  font-family: 'Stick No Bills', sans-serif;\n}\n")),(0,a.kt)("h3",{id:"css"},"CSS"),(0,a.kt)("p",null,"The style which can be used to style the HTML/SVG document.\nGets added next to the html document."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"#shadow-root\n<style>\n  /* The CSS */\n</style>\n<div>HTML/SVG document</div>\n")),(0,a.kt)("h3",{id:"htmlsvg-document"},"HTML/SVG document"),(0,a.kt)("p",null,"The html/svg code which is displayed on the panel."),(0,a.kt)("h3",{id:"run-onrender-when-mounted"},"Run onRender when mounted"),(0,a.kt)("p",null,"Run onRender when the panel is first loaded (in most cases, this should be true)"),(0,a.kt)("h3",{id:"onrender"},"onRender"),(0,a.kt)("p",null,"Executes the code every render (when new data is available)."),(0,a.kt)("h3",{id:"dynamic-data"},"Dynamic data"),(0,a.kt)("p",null,"Update the data object when new data is available. The code will not execute again, it will only update the data object. This is only for onInit, onRender will update like normal."),(0,a.kt)("h3",{id:"trigger-panelupdate-when-mounted"},"Trigger panelupdate when mounted"),(0,a.kt)("p",null,"Trigger the panelupdate event (htmlNode.onpanelupdate) when the panel is first loaded (in most cases, this should be true)"),(0,a.kt)("h3",{id:"oninit"},"onInit"),(0,a.kt)("p",null,"Executes when the panel loads"),(0,a.kt)("h2",{id:"polyfill"},"Polyfill"),(0,a.kt)("h3",{id:"svg-base-fix"},"SVG base fix"),(0,a.kt)("p",null,"Fixes an issue in Firefox where xlink:href needs the url to be able to find the link.\n",(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/18265336"},"https://stackoverflow.com/a/18265336"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/SVG/linking.html"},"https://www.w3.org/TR/SVG/linking.html")),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Exiting and entering edit mode may cause it break, but pressing f5 fixes it."))),(0,a.kt)("h2",{id:"custom-properties"},"Custom properties"),(0,a.kt)("p",null,"Custom properties can be used to easily change values when multiple people are working on it. E.g."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change the range of a color."),(0,a.kt)("li",{parentName:"ul"},"Toggle between showcase and production mode, to show how it would look if there were values there."),(0,a.kt)("li",{parentName:"ul"},"Toggle between themes."),(0,a.kt)("li",{parentName:"ul"},"Increase the max value of a bar.")),(0,a.kt)("p",null,"Having a json file sort of as a configuration file makes it much easier to copy a panel and change some values in the json file instead of going through the javascript code for it."),(0,a.kt)("p",null,"Think of this scenario: You have three dashboards with similar graphics. The only difference is a value range. You can create one code for all three panels, and have a configuration file (Custom properties) with the ranges. Also makes it much easier to change later on (bugs, changes and additions) when the code is similar on all the panels."),(0,a.kt)("h3",{id:"edit-as-json"},"Edit as JSON"),(0,a.kt)("p",null,"Shows the JSON code in a code editor"),(0,a.kt)("h2",{id:"importexport"},"Import/export"),(0,a.kt)("p",null,"Import a file with the file picker ",(0,a.kt)("em",{parentName:"p"},"(a file can be dragged to it)")," or paste the json code into the code editor."),(0,a.kt)("p",null,"All the options and code can be easily copied ",(0,a.kt)("em",{parentName:"p"},"(exported)")," or imported with this."),(0,a.kt)("p",null,"The bundlers generate a panel-options.json file which makes it pretty easy to copy the generated code into the panel."))}h.isMDXComponent=!0}}]);