(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2932:function(e,t,n){Promise.resolve().then(n.t.bind(n,2778,23)),Promise.resolve().then(n.bind(n,2513))},8298:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return m}});var r=n(2265);let a=["light","dark"],l="(prefers-color-scheme: dark)",s="undefined"==typeof window,o=(0,r.createContext)(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(o))&&void 0!==e?e:i},m=e=>(0,r.useContext)(o)?r.createElement(r.Fragment,null,e.children):r.createElement(u,e),d=["light","dark"],u=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:s=!0,storageKey:i="theme",themes:c=d,defaultTheme:m=n?"system":"light",attribute:u="data-theme",value:$,children:g,nonce:b})=>{let[S,w]=(0,r.useState)(()=>f(i,m)),[k,p]=(0,r.useState)(()=>f(i)),C=$?Object.values($):c,E=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=y());let l=$?$[r]:r,o=t?v():null,i=document.documentElement;if("class"===u?(i.classList.remove(...C),l&&i.classList.add(l)):l?i.setAttribute(u,l):i.removeAttribute(u),s){let e=a.includes(m)?m:null,t=a.includes(r)?r:e;i.style.colorScheme=t}null==o||o()},[]),T=(0,r.useCallback)(e=>{w(e);try{localStorage.setItem(i,e)}catch(e){}},[e]),x=(0,r.useCallback)(t=>{p(y(t)),"system"===S&&n&&!e&&E("system")},[S,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(l);return e.addListener(x),x(e),()=>e.removeListener(x)},[x]),(0,r.useEffect)(()=>{let e=e=>{e.key===i&&T(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),(0,r.useEffect)(()=>{E(null!=e?e:S)},[e,S]);let L=(0,r.useMemo)(()=>({theme:S,setTheme:T,forcedTheme:e,resolvedTheme:"system"===S?k:S,themes:n?[...c,"system"]:c,systemTheme:n?k:void 0}),[S,T,e,k,n,c]);return r.createElement(o.Provider,{value:L},r.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:s,storageKey:i,themes:c,defaultTheme:m,attribute:u,value:$,children:g,attrs:C,nonce:b}),g)},h=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:s,enableColorScheme:o,defaultTheme:i,value:c,attrs:m,nonce:d})=>{let u="system"===i,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${m.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=o?a.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,r=!0)=>{let l=c?c[e]:e,s=t?e+"|| ''":`'${l}'`,i="";return o&&r&&!t&&a.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?i+=t||l?`c.add(${s})`:"null":l&&(i+=`d[s](n,${s})`),i},y=e?`!function(){${h}${v(e)}}()`:s?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${l}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}${u?"":"else{"+v(i,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}else{${v(i,!1,!1)};}${f}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:y}})},()=>!0),f=(e,t)=>{let n;if(!s){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")},2513:function(e,t,n){"use strict";n.d(t,{default:function(){return l}});var r=n(7437),a=n(8298);function l(e){let{children:t}=e;return(0,r.jsx)(a.f,{attribute:"class",defaultTheme:"dark",children:t})}},2778:function(){}},function(e){e.O(0,[586,971,117,744],function(){return e(e.s=2932)}),_N_E=e.O()}]);