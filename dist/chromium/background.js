"use strict";(()=>{var c="https://www.bing.com/";var I="https://chat.aiplus.lol/login",_=["zh-CN","ru","ru-ru"],C="114",T="114.0.1823.82",k=["csp_report","font","image","main_frame","media","object","other","ping","script","stylesheet","sub_frame","webbundle","websocket","webtransport","xmlhttprequest"];var R="2.3.0";var y={type:"git",url:"https://github.com/ha0z1/New-Bing-Anywhere"};var Q=()=>{try{let e=chrome.i18n.getUILanguage().toLowerCase();return e==="zh-cn"||e==="zh-tw"||e==="zh-hk"||e==="zh"}catch{return!1}};var O="configV1",N=async()=>({showGoogleButtonOnBing:!0,showBingButtonOnGoogle:!0,showGuideToGithub:!0,showChat:!1,showRelease:!0,triggerMode:"Always",conversationStyle:"Balanced","X-Forwarded-For":void 0,...(await chrome.storage.sync.get(O))[O]});var M=e=>{chrome.runtime.onMessage.addListener((o,t,n)=>((async()=>{try{let{method:r,args:s}=o,i=await e[r](...s);n({code:200,msg:"ok",data:i})}catch(r){let s=r??{};n({code:500,msg:s.stack??s.message??r})}})(),!0))};var A=navigator.userAgent,Z=navigator.userAgentData,ee=A.includes("Macintosh");var oe=A.includes("Edg/"),fe=Z?.brands.findIndex(e=>e.brand==="Brave")>-1,S=Q();var w=!!globalThis.__NBA_isCanary,d=w?`0.${R}`:R,$=()=>{let e=A;return oe||(ee?e=`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${C}.0.0.0 Safari/537.36 Edg/${T}`:e=`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${C}.0.0.0 Safari/537.36 Edg/${T}`),e},q=async e=>{let o=y.url;try{let t=await N(),r=`${o}/issues/new?title=&body=`,s="Please write your comment ABOVE this line, provide as much detailed information and screenshots as possible.Please confirm that you have read the #8 https://github.com/ha0z1/New-Bing-Anywhere/issues/8.The UA may not necessarily reflect your actual browser and platform, so please make sure to indicate them clearly.";S&&(s="\u8BF7\u5728\u6B64\u884C\u4E0A\u65B9\u53D1\u8868\u60A8\u7684\u8BA8\u8BBA\u3002\u8BF7\u786E\u8BA4\u5DF2\u7ECF\u9605\u8BFB\u4E86FAQ(https://github.com/ha0z1/New-Bing-Anywhere/issues/8)\uFF0C\u8BE6\u5C3D\u7684\u63CF\u8FF0\u548C\u622A\u56FE\u6709\u52A9\u4E8E\u6211\u4EEC\u5B9A\u4F4D\u95EE\u9898\uFF0C\u63CF\u8FF0\u4E0D\u6E05\u7684\u95EE\u9898\u4F1A\u88AB\u5173\u95ED\uFF0CUA \u4E0D\u4E00\u5B9A\u771F\u5B9E\u53CD\u6620\u60A8\u7684\u6D4F\u89C8\u5668\u548C\u5E73\u53F0\uFF0C\u8BF7\u5907\u6CE8\u6E05\u695A");let i=` 



<!--  ${s} -->
<pre>
`+Object.entries({Version:`${d}${w?" (Canary)":""} `,UA:navigator.userAgent,Lang:chrome.i18n.getUILanguage(),AcceptLangs:(await chrome.i18n.getAcceptLanguages()).join(", "),config:JSON.stringify(t),...e}).map(([h,u])=>u?`${h}: ${u}`:"").join(`
`)+"</pre>";return r+=encodeURIComponent(i.slice(0,2e3)),r}catch{return o}},l=(e="",o)=>{try{return new URL(e,o)}catch{return{searchParams:{get:()=>null}}}},f=e=>{try{return new URLSearchParams(e)}catch{return{get:()=>null}}},g=async e=>{let o=await chrome.tabs.query({currentWindow:!0}),t=l(e),n=o.find(r=>r.url?.startsWith(t.origin));return n==null?n=await chrome.tabs.create({url:e}):await Promise.all([chrome.tabs.move(n.id,{index:o.length-1}),n.url!==e&&chrome.tabs.update(n.id,{url:e}),chrome.tabs.update(n.id,{active:!0,url:n.url!==e?e:void 0})].filter(Boolean)),n};var b={openChat:{title:"\u{1F4AC} New Bing",contexts:["action"],onclick:e=>{g("https://www.bing.com/search?q=Bing+AI&showconv=1")}},openImageCreate:{title:"\u{1F5BC}\uFE0F New Bing Image Creator",contexts:["action"],onclick:e=>{g("https://www.bing.com/create")}},likeIt:{title:"\u2764\uFE0F Like it",contexts:["action"],onclick:()=>{g("https://chrome.google.com/webstore/detail/new-bing-anywhere-bing-ch/hceobhjokpdbogjkplmfjeomkeckkngi/reviews?hl=en")}},reportIssues:{title:"\u{1F41B} Report issues",contexts:["action"],onclick:async e=>{let o=await q();g(o)}}};var z=()=>{chrome.contextMenus.removeAll(()=>{for(let[e,o]of Object.entries(b))chrome.contextMenus.create({id:e,title:o.title,contexts:o.contexts})}),chrome.contextMenus.onClicked.addListener((e,o)=>{let{menuItemId:t}=e,n=b[t];n?.onclick&&n.onclick(e,o)})};var x,te=new Uint8Array(16);function B(){if(!x&&(x=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!x))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return x(te)}var a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).slice(1));function j(e,o=0){return(a[e[o+0]]+a[e[o+1]]+a[e[o+2]]+a[e[o+3]]+"-"+a[e[o+4]]+a[e[o+5]]+"-"+a[e[o+6]]+a[e[o+7]]+"-"+a[e[o+8]]+a[e[o+9]]+"-"+a[e[o+10]]+a[e[o+11]]+a[e[o+12]]+a[e[o+13]]+a[e[o+14]]+a[e[o+15]]).toLowerCase()}var ne=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),U={randomUUID:ne};function re(e,o,t){if(U.randomUUID&&!o&&!e)return U.randomUUID();e=e||{};let n=e.random||(e.rng||B)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,o){t=t||0;for(let r=0;r<16;++r)o[t+r]=n[r];return o}return j(n)}var P=re;var G=async e=>{let o=`https://sydney.bing.com/sydney/GetConversation?conversationId=${encodeURIComponent(e.session.conversationId)}&source=${encodeURIComponent(e.source)}&participantId=${encodeURIComponent(e.participantId)}&conversationSignature=${encodeURIComponent(e.session.conversationSignature)}&traceId=${P()}`;try{return await fetch(o).then(n=>n.json())}catch{return null}},E={};var W=async e=>await new Promise((o,t)=>{let n=E[e];if(n==null)throw new Error(`WebSocket ${e} not found`);n.send(JSON.stringify({type:6})+""),o(null)});var F=async e=>{E[e]?.close(),E[e]=null};var m="notification",v="notification:hide",ae=async()=>{let e;try{e=await fetch("https://api.github.com/repos/ha0z1/New-Bing-Anywhere/issues/24").then(async o=>await o.json())}catch{}return e},Y=async()=>{let{[m]:e}=await chrome.storage.local.get(m);if(!e||e.lastModify&&Date.now()-e.lastModify>36e5){await chrome.storage.local.remove(m);let n=await ae();n&&await chrome.storage.local.set({[m]:{data:n,lastModify:Date.now()}})}let{[v]:o,[m]:t}=await chrome.storage.local.get([v,m]);return!t?.data||!(t.data.title&&t.data.state==="open")||o===1&&t.data.title===e.data?.title?null:(await chrome.storage.local.remove(v),t.data)},H=async()=>{chrome.storage.local.set({[v]:1})};var se=async()=>({version:d}),ie=async({url:e}={})=>{let o=await chrome.tabs.query({currentWindow:!0}),t=l(e),n=o.find(J=>J.url?.startsWith(t.origin));n==null?n=await chrome.tabs.create({url:e}):n.id!=null&&await Promise.all([chrome.tabs.move(n.id,{index:o.length-1}),chrome.tabs.update(n.id,{active:!0})]);let r=e,s="",i="",h=t.hostname==="www.google.com",u=t.hostname==="www.bing.com";h?(s=t.searchParams.get("q")??"",i=l(n.url).searchParams.get("q")??"",l(n.url).searchParams.get("q")):u&&(s=t.searchParams.get("q")??"",i=l(n.url).searchParams.get("q")??""),s=s.trim(),i=i.trim(),!(s&&s===i)&&(h?r=`${t.origin}${t.pathname}?q=${encodeURIComponent(s)}`:u&&(r=`${t.origin}${t.pathname}?q=${encodeURIComponent(s)}`),await chrome.tabs.update(n.id,{url:r}))},K={getEnv:se,openUrlInSameTab:ie,getNotification:Y,hideNotification:H,"bing.getFromConversation":G,"bing.bingChatPing":W,"bing.bingChatCloseWebSocket":F};var p=async(e,o={})=>await chrome.cookies.set({domain:o.domain,storeId:o.storeId,path:o.path,httpOnly:o.httpOnly,secure:o.secure,sameSite:o.sameSite,expirationDate:o.expirationDate,...e});var V=()=>{z(),M(K),chrome.runtime.onInstalled.addListener(async e=>{let o=await N(),t=y.url;if(w){g(`${t}/tree/canary`);return}e.reason==="install"?g(t):e.reason==="update"&&o.showRelease&&g(`${t}/releases/tag/v${d}`)}),chrome.webRequest.onBeforeRequest.addListener(()=>{chrome.cookies.get({name:"_EDGE_S",url:c},e=>{let o=e?.value;if(!o)return;let t=f(o),n=t.get("mkt")?.toLowerCase()??"";_.map(r=>r.toLowerCase()).includes(n)&&(n==="zh-cn"?(t.set("mkt","zh-HK"),t.set("ui","zh-hans")):t.delete("mkt"),p({url:c,name:e.name,value:t.toString()},e))}),chrome.cookies.get({name:"_RwBf",url:c},e=>{let o=e?.value;if(!o){p({url:c,name:"_RwBf",value:"wls=2",domain:".bing.com",httpOnly:!0});return}let t=f(o),n=t.get("wls");n!=="2"&&n!==""&&t.set("wls","2"),p({url:c,name:"_RwBf",domain:".bing.com",httpOnly:!0,value:t.toString()},e)}),chrome.cookies.get({name:"ANON",url:c},e=>{let o=e?.value;if(!o)return;let t=f(o);t.delete("A"),p({url:c,name:"ANON",domain:".bing.com",httpOnly:!0,value:t.toString()},e)})},{urls:[c+"*"],types:["main_frame"]})};var ce={"User-Agent":$()},ge="modifyHeaders",le="redirect",me="set",D=[{priority:2001,action:{type:ge,requestHeaders:Object.entries(ce).map(([e,o])=>({operation:me,header:e,value:o}))},condition:{requestDomains:["bing.com","www.bing.com","cn.bing.com"],resourceTypes:k}},S&&{action:{type:le,redirect:{url:`${I}?invite_code=b90e84b5`}},condition:{requestDomains:["chat.aiplus.lol"],urlFilter:I,isUrlFilterCaseSensitive:!1,resourceTypes:k}}].filter(Boolean).map((e,o)=>({id:o+1+2e3,...e})),X=()=>{D.length&&chrome.declarativeNetRequest.getDynamicRules(e=>{chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds:[...new Set([...D.map(o=>o.id),...e.map(o=>o.id)])],addRules:D})})};V();chrome.runtime.onInstalled.addListener(e=>{X()});chrome.runtime.setUninstallURL("https://github.com/ha0z1/New-Bing-Anywhere/blob/main/uninstall.md");})();
