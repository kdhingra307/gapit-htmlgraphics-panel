"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[930],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return g}});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),g=l,f=m["".concat(o,".").concat(g)]||m[g]||u[g]||r;return t?n.createElement(f,i(i({ref:a},c),{},{components:t})):n.createElement(f,i({ref:a},c))}));function g(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8215:function(e,a,t){var n=t(7294);a.Z=function(e){var a=e.children,t=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:l},a)}},5064:function(e,a,t){t.d(a,{Z:function(){return p}});var n=t(7294),l=t(9443);var r=function(){var e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=t(6010),s="tabItem_1uMI",o="tabItemActive_2DSg";var p=function(e){var a,t=e.lazy,l=e.block,p=e.defaultValue,c=e.values,u=e.groupId,m=e.className,g=n.Children.toArray(e.children),f=null!=c?c:g.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=p?p:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value,d=r(),v=d.tabGroupChoices,b=d.setTabGroupChoices,k=(0,n.useState)(h),y=k[0],T=k[1],w=[];if(null!=u){var x=v[u];null!=x&&x!==y&&f.some((function(e){return e.value===x}))&&T(x)}var N=function(e){var a=e.currentTarget,t=w.indexOf(a),n=f[t].value;T(n),null!=u&&(b(u,n),setTimeout((function(){var e,t,n,l,r,i,s,p;(e=a.getBoundingClientRect(),t=e.top,n=e.left,l=e.bottom,r=e.right,i=window,s=i.innerHeight,p=i.innerWidth,t>=0&&r<=p&&l<=s&&n>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(o),setTimeout((function(){return a.classList.remove(o)}),2e3))}),150))},I=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.target)+1;t=w[n]||w[0];break;case"ArrowLeft":var l=w.indexOf(e.target)-1;t=w[l]||w[w.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},m)},f.map((function(e){var a=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":y===a}),key:a,ref:function(e){return w.push(e)},onKeyDown:I,onFocus:N,onClick:N},null!=t?t:a)}))),t?(0,n.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==y})}))))}},9443:function(e,a,t){var n=(0,t(7294).createContext)(void 0);a.Z=n},694:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return m},default:function(){return f}});var n=t(7462),l=t(3366),r=(t(7294),t(3905)),i=t(5064),s=t(8215),o=["components"],p={id:"installation",title:"Installation"},c=void 0,u={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"You can install the plugin using grafana-cli, or by downloading the plugin manually.",source:"@site/docs/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/gapitio/gapit-htmlgraphics-panel/edit/main/website/docs/installation.mdx",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"docsSidebar",next:{title:"Quick start",permalink:"/docs/quick-start"}},m=[{value:"Install using grafana-cli",id:"install-using-grafana-cli",children:[]},{value:"Install manually",id:"install-manually",children:[]},{value:"Docker compose",id:"docker-compose",children:[]}],g={toc:m};function f(e){var a=e.components,t=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can install the plugin using ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/administration/cli/"},"grafana-cli"),", or by downloading the plugin manually."),(0,r.kt)("h2",{id:"install-using-grafana-cli"},"Install using grafana-cli"),(0,r.kt)("p",null,"To install the latest version of the plugin, run the following command on the Grafana server:"),(0,r.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)(i.Z,{groupId:"version",defaultValue:"latest",values:[{label:"Latest",value:"latest"},{label:"Specific version",value:"specific"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"latest",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grafana-cli plugins install gapit-htmlgraphics-panel\n"))),(0,r.kt)(s.Z,{value:"specific",mdxType:"TabItem"},(0,r.kt)("p",null,"The specific version link can be obtained by copying the asset link from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gapitio/gapit-htmlgraphics-panel/releases"},"Releases")," on the GitHub project page"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grafana-cli --pluginUrl https://github.com/gapitio/gapit-htmlgraphics-panel/releases/download/v1.4.0/gapit-htmlgraphics-panel-1.4.0.zip plugins install gapit-htmlgraphics-panel\n"))))),(0,r.kt)(s.Z,{value:"macos",mdxType:"TabItem"},(0,r.kt)(i.Z,{groupId:"version",defaultValue:"latest",values:[{label:"Latest",value:"latest"},{label:"Specific version",value:"specific"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"latest",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grafana-cli plugins install gapit-htmlgraphics-panel\n"))),(0,r.kt)(s.Z,{value:"specific",mdxType:"TabItem"},(0,r.kt)("p",null,"The specific version link can be obtained by copying the asset link from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gapitio/gapit-htmlgraphics-panel/releases"},"Releases")," on the GitHub project page"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grafana-cli --pluginUrl https://github.com/gapitio/gapit-htmlgraphics-panel/releases/download/v1.4.0/gapit-htmlgraphics-panel-1.4.0.zip plugins install gapit-htmlgraphics-panel\n"))))),(0,r.kt)(s.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)(i.Z,{groupId:"version",defaultValue:"latest",values:[{label:"Latest",value:"latest"},{label:"Specific version",value:"specific"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"latest",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grafana-cli.exe plugins install gapit-htmlgraphics-panel\n"))),(0,r.kt)(s.Z,{value:"specific",mdxType:"TabItem"},(0,r.kt)("p",null,"The specific version link can be obtained by copying the asset link from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gapitio/gapit-htmlgraphics-panel/releases"},"Releases")," on the GitHub project page"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"grafana-cli.exe --pluginUrl https://github.com/gapitio/gapit-htmlgraphics-panel/releases/download/v1.4.0/gapit-htmlgraphics-panel-1.4.0.zip plugins install gapit-htmlgraphics-panel\n")))))),(0,r.kt)("h2",{id:"install-manually"},"Install manually"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gapitio/gapit-htmlgraphics-panel/releases"},"Releases")," on the GitHub project page"),(0,r.kt)("li",{parentName:"ol"},"Find the release you want to install"),(0,r.kt)("li",{parentName:"ol"},"Download the release by clicking the release asset called ",(0,r.kt)("inlineCode",{parentName:"li"},"gapit-htmlgraphics-panel-<version>.zip"),". You may need to uncollapse the ",(0,r.kt)("strong",{parentName:"li"},"Assets")," section to see it."),(0,r.kt)("li",{parentName:"ol"},"Unarchive the plugin into the Grafana plugins directory")),(0,r.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"macos"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"unzip gapit-htmlgraphics-panel-<version>.zip\nmv gapit-htmlgraphics-panel /var/lib/grafana/plugins\n"))),(0,r.kt)(s.Z,{value:"macos",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"unzip gapit-htmlgraphics-panel-<version>.zip\nmv gapit-htmlgraphics-panel /usr/local/var/lib/grafana/plugins\n"))),(0,r.kt)(s.Z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Expand-Archive -Path gapit-htmlgraphics-panel-<version>.zip -DestinationPath C:\\grafana\\data\\plugins\n")))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Restart the Grafana server to load the plugin")),(0,r.kt)("h2",{id:"docker-compose"},"Docker compose"),(0,r.kt)(i.Z,{groupId:"version",defaultValue:"latest",values:[{label:"Latest",value:"latest"},{label:"Specific version",value:"specific"}],mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"latest",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3'\nservices:\n  grafana:\n    image: grafana/grafana:8.1.4\n    container_name: grafana\n    restart: always\n    networks:\n      - grafana\n    ports:\n      - 3000:3000\n    environment:\n      - GF_INSTALL_PLUGINS=gapit-htmlgraphics-panel\n\nnetworks:\n  grafana:\n    external:\n      name: grafana\n"))),(0,r.kt)(s.Z,{value:"specific",mdxType:"TabItem"},(0,r.kt)("p",null,"The specific version link can be obtained by copying the asset link from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gapitio/gapit-htmlgraphics-panel/releases"},"Releases")," on the GitHub project page"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3'\nservices:\n  grafana:\n    image: grafana/grafana:8.1.4\n    container_name: grafana\n    restart: always\n    networks:\n      - grafana\n    ports:\n      - 3000:3000\n    environment:\n      - GF_INSTALL_PLUGINS=https://github.com/gapitio/gapit-htmlgraphics-panel/releases/download/v1.4.0/gapit-htmlgraphics-panel-1.4.0.zip;gapit-htmlgraphics-panel # v1.4.0\n\nnetworks:\n  grafana:\n    external:\n      name: grafana\n")))))}f.isMDXComponent=!0},6010:function(e,a,t){function n(e){var a,t,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(l&&(l+=" "),l+=t);else for(a in e)e[a]&&(l&&(l+=" "),l+=a);return l}function l(){for(var e,a,t=0,l="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(l&&(l+=" "),l+=a);return l}t.d(a,{Z:function(){return l}})}}]);