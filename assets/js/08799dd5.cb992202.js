"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[490],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),g=r,m=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return a?n.createElement(m,s(s({ref:t},u),{},{components:a})):n.createElement(m,s({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4659:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],i={id:"how-to-get-metrics",title:"How to get metrics"},l=void 0,c={unversionedId:"guides/how-to-get-metrics",id:"guides/how-to-get-metrics",isDocsHomePage:!1,title:"How to get metrics",description:"Use a package",source:"@site/docs/guides/how-to-get-metrics.md",sourceDirName:"guides",slug:"/guides/how-to-get-metrics",permalink:"/docs/guides/how-to-get-metrics",editUrl:"https://github.com/gapitio/gapit-htmlgraphics-panel/edit/main/website/docs/guides/how-to-get-metrics.md",tags:[],version:"current",frontMatter:{id:"how-to-get-metrics",title:"How to get metrics"},sidebar:"docsSidebar",previous:{title:"How to add the HTMLGraphics panel",permalink:"/docs/guides/how-to-add-the-panel"},next:{title:"How to import/export",permalink:"/docs/guides/how-to-import-export"}},u=[{value:"Use a package",id:"use-a-package",children:[]},{value:"Use the data object",id:"use-the-data-object",children:[]}],p={toc:u};function d(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"use-a-package"},"Use a package"),(0,o.kt)("p",null,"Use a package maintained by others."),(0,o.kt)("p",null,"The easiest way is to use the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@gapit/grafana-metric"},"grafana-metric")," with a ",(0,o.kt)("a",{parentName:"p",href:"/docs/projects#bundlers"},"bundler"),"."),(0,o.kt)("h2",{id:"use-the-data-object"},"Use the data object"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/references#data-global"},"data")," might be a little confusing at first, but it's easier once you log the data object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log(data);\n")),(0,o.kt)("p",null,"Some data sources only have values"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Data object (grafana)",src:a(2810).Z})),(0,o.kt)("p",null,"An example on how you could get the value from the data object above"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const valueField = data.series[0].fields[1];\nconst length = valueField.values.length;\nconst value = valueField.values.get(length - 1);\nconsole.log(value);\n")),(0,o.kt)("p",null,"Some data sources have calcs (which is easier to work with)"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Not all data sources have calcs. Using the values is usually a safer choice."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Data object (influx)",src:a(4909).Z})),(0,o.kt)("p",null,"An example on how you could get the value from the data object above"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const value = data.series[0].fields[1].state.calcs.last;\nconsole.log(value);\n")),(0,o.kt)("p",null,"This also works"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const valueField = data.series[0].fields[1];\nconst length = valueField.values.length;\nconst value = valueField.values.get(length - 1);\nconsole.log(value);\n")),(0,o.kt)("p",null,"With some checks to make sure the data exists and as a function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function getMetric(seriesName) {\n  if (data.series < 0) return null;\n\n  const series = data.series.find((series) => series.name === seriesName);\n  const fields = series.fields;\n\n  if (fields <= 1) return null;\n\n  const valueField = fields[1];\n  const length = valueField.values.length;\n\n  if (length <= 0) return null;\n\n  const value = valueField.values.get(length - 1);\n  return value;\n}\n\nconsole.log(getMetric('seriesName'));\n")))}d.isMDXComponent=!0},2810:function(e,t,a){t.Z=a.p+"assets/images/data-object-grafana-238b4f81b0cee954304b218edc836286.png"},4909:function(e,t,a){t.Z=a.p+"assets/images/data-object-influx-2178b2df163362907d7763c0d0c47b55.png"}}]);