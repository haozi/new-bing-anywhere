"use strict";(()=>{var i="https://www.bing.com/",B="https://cn.bing.com/",x="https://chat.aiplus.lol/login",P=["zh-CN","ru","ru-ru"],v="114",C="114.0.1823.82",T=["csp_report","font","image","main_frame","media","object","other","ping","script","stylesheet","sub_frame","webbundle","websocket","webtransport","xmlhttprequest"];var k="2.4.5";var h={type:"git",url:"https://github.com/ha0z1/New-Bing-Anywhere"};var K=()=>{try{return chrome.i18n.getUILanguage().toLowerCase()==="zh-cn"}catch{return!1}},H=()=>{try{let e=chrome.i18n.getUILanguage().toLowerCase();return e==="zh-cn"||e==="zh-tw"||e==="zh-hk"||e==="zh"}catch{return!1}};var _="configV1",I=async()=>({showGoogleButtonOnBing:!0,showBingButtonOnGoogle:!0,showGuideToGithub:!0,showChat:!1,showRelease:!1,triggerMode:"Always",conversationStyle:"Balanced","X-Forwarded-For":void 0,...(await chrome.storage.sync.get(_))[_]});var L=e=>{chrome.runtime.onMessage.addListener((o,t,n)=>((async()=>{try{let{method:s,args:r}=o,a=await e[s](...r);n({code:200,msg:"ok",data:a})}catch(s){let r=s??{};n({code:500,msg:r.stack??r.message??s})}})(),!0))};var N=navigator.userAgent,V=navigator.userAgentData,X=N.includes("Macintosh");var J=N.includes("Edg/"),ue=V?.brands.findIndex(e=>e.brand==="Brave")>-1,A=H(),U=K(),w=!!globalThis.__NBA_isCanary,u=w?`0.${k}`:k,D=()=>{let e=N;return J||(X?e=`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${v}.0.0.0 Safari/537.36 Edg/${C}`:e=`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${v}.0.0.0 Safari/537.36 Edg/${C}`),e},O=async e=>{let o=h.url;try{let t=await I(),s=`${o}/issues/new?title=&body=`,r="Please write your comment ABOVE this line, provide as much detailed information and screenshots as possible.Please confirm that you have read the #8 https://github.com/ha0z1/New-Bing-Anywhere/issues/8.The UA may not necessarily reflect your actual browser and platform, so please make sure to indicate them clearly.";A&&(r="\u8BF7\u5728\u6B64\u884C\u4E0A\u65B9\u53D1\u8868\u60A8\u7684\u8BA8\u8BBA\u3002\u8BF7\u786E\u8BA4\u5DF2\u7ECF\u9605\u8BFB\u4E86FAQ(https://github.com/ha0z1/New-Bing-Anywhere/issues/8)\uFF0C\u8BE6\u5C3D\u7684\u63CF\u8FF0\u548C\u622A\u56FE\u6709\u52A9\u4E8E\u6211\u4EEC\u5B9A\u4F4D\u95EE\u9898\uFF0C\u63CF\u8FF0\u4E0D\u6E05\u7684\u95EE\u9898\u4F1A\u88AB\u5173\u95ED\uFF0CUA \u4E0D\u4E00\u5B9A\u771F\u5B9E\u53CD\u6620\u60A8\u7684\u6D4F\u89C8\u5668\u548C\u5E73\u53F0\uFF0C\u8BF7\u5907\u6CE8\u6E05\u695A");let a=` 



<!--  ${r} -->
<pre>
`+Object.entries({Version:`${u}${w?" (Canary)":""} `,UA:navigator.userAgent,Lang:chrome.i18n.getUILanguage(),AcceptLangs:(await chrome.i18n.getAcceptLanguages()).join(", "),config:JSON.stringify(t),...e}).map(([d,m])=>m?`${d}: ${m}`:"").join(`
`)+"</pre>";return s+=encodeURIComponent(a.slice(0,2e3)),s}catch{return o}},g=(e="",o)=>{try{return new URL(e,o)}catch{return{searchParams:{get:()=>null}}}},y=e=>{try{return new URLSearchParams(e)}catch{return{get:()=>null}}},c=async e=>{let o=await chrome.tabs.query({currentWindow:!0}),t=g(e),n=o.find(s=>s.url?.startsWith(t.origin));return n==null?n=await chrome.tabs.create({url:e}):await Promise.all([chrome.tabs.move(n.id,{index:o.length-1}),n.url!==e&&chrome.tabs.update(n.id,{url:e}),chrome.tabs.update(n.id,{active:!0,url:n.url!==e?e:void 0})].filter(Boolean)),n};var f={openChat:{title:"\u{1F4AC} New Bing",contexts:["action"],onclick:e=>{c("https://www.bing.com/search?q=Bing+AI&showconv=1")}},openImageCreate:{title:"\u{1F5BC}\uFE0F New Bing Image Creator",contexts:["action"],onclick:e=>{c("https://www.bing.com/create")}},likeIt:{title:"\u2764\uFE0F Like it",contexts:["action"],onclick:()=>{c("https://chrome.google.com/webstore/detail/new-bing-anywhere-bing-ch/hceobhjokpdbogjkplmfjeomkeckkngi/reviews?hl=en")}},reportIssues:{title:"\u{1F41B} Report issues",contexts:["action"],onclick:async e=>{let o=await O();c(o)}}};var M=()=>{chrome.contextMenus.removeAll(()=>{for(let[e,o]of Object.entries(f))chrome.contextMenus.create({id:e,title:o.title,contexts:o.contexts})}),chrome.contextMenus.onClicked.addListener((e,o)=>{let{menuItemId:t}=e,n=f[t];n?.onclick&&n.onclick(e,o)})};var R={};var q=async e=>await new Promise((o,t)=>{let n=R[e];if(n==null)throw new Error(`WebSocket ${e} not found`);n.send(JSON.stringify({type:6})+""),o(null)});var z=async e=>{R[e]?.close(),R[e]=null};var l="notification",b="notification:hide",Q=async()=>{let e;try{e=await fetch("https://api.github.com/repos/ha0z1/New-Bing-Anywhere/issues/24").then(async o=>await o.json())}catch{}return e},$=async()=>{let{[l]:e}=await chrome.storage.local.get(l);if(!e||e.lastModify&&Date.now()-e.lastModify>36e5){await chrome.storage.local.remove(l);let n=await Q();n&&await chrome.storage.local.set({[l]:{data:n,lastModify:Date.now()}})}let{[b]:o,[l]:t}=await chrome.storage.local.get([b,l]);return!t?.data||!(t.data.title&&t.data.state==="open")||o===1&&t.data.title===e.data?.title?null:(await chrome.storage.local.remove(b),t.data)},j=async()=>{chrome.storage.local.set({[b]:1})};var Z=async()=>({version:u}),ee=async({url:e}={})=>{let o=await chrome.tabs.query({currentWindow:!0}),t=g(e),n=o.find(Y=>Y.url?.startsWith(t.origin));n==null?n=await chrome.tabs.create({url:e}):n.id!=null&&await Promise.all([chrome.tabs.move(n.id,{index:o.length-1}),chrome.tabs.update(n.id,{active:!0})]);let s=e,r="",a="",d=t.hostname==="www.google.com",m=t.hostname==="www.bing.com";d?(r=t.searchParams.get("q")??"",a=g(n.url).searchParams.get("q")??"",g(n.url).searchParams.get("q")):m&&(r=t.searchParams.get("q")??"",a=g(n.url).searchParams.get("q")??""),r=r.trim(),a=a.trim(),!(r&&r===a)&&(d?s=`${t.origin}${t.pathname}?q=${encodeURIComponent(r)}`:m&&(s=`${t.origin}${t.pathname}?q=${encodeURIComponent(r)}`),await chrome.tabs.update(n.id,{url:s}))},G={getEnv:Z,openUrlInSameTab:ee,getNotification:$,hideNotification:j,"bing.bingChatPing":q,"bing.bingChatCloseWebSocket":z};var p=async(e,o={})=>await chrome.cookies.set({domain:o.domain,storeId:o.storeId,path:o.path,httpOnly:o.httpOnly,secure:o.secure,sameSite:o.sameSite,expirationDate:o.expirationDate,...e});var W=()=>{M(),L(G),chrome.runtime.onInstalled.addListener(async e=>{let o=await I(),t=h.url;if(w){c(`${t}/tree/canary`);return}e.reason==="install"?c(t):e.reason==="update"&&o.showRelease&&c(`${t}/releases/tag/v${u}`)}),chrome.webRequest.onBeforeRequest.addListener(()=>{chrome.cookies.get({name:"_EDGE_S",url:i},e=>{let o=e?.value;if(!o)return;let t=y(o),n=t.get("mkt")?.toLowerCase()??"";P.map(s=>s.toLowerCase()).includes(n)&&(n==="zh-cn"?(t.set("mkt","zh-HK"),t.set("ui","zh-hans")):t.delete("mkt"),p({url:i,name:e.name,value:t.toString()},e))}),chrome.cookies.get({name:"_RwBf",url:i},e=>{let o=e?.value;if(!o){p({url:i,name:"_RwBf",value:"wls=2",domain:".bing.com",httpOnly:!0});return}let t=y(o),n=t.get("wls");n!=="2"&&n!==""&&t.set("wls","2"),p({url:i,name:"_RwBf",domain:".bing.com",httpOnly:!0,value:t.toString()},e)}),chrome.cookies.get({name:"ANON",url:i},e=>{let o=e?.value;if(!o)return;let t=y(o);t.delete("A"),p({url:i,name:"ANON",domain:".bing.com",httpOnly:!0,value:t.toString()},e)})},{urls:[i+"*"],types:["main_frame"]})};var oe={"User-Agent":D()},te="modifyHeaders",ne="redirect",re="set",S=[{priority:2001,action:{type:te,requestHeaders:Object.entries(oe).map(([e,o])=>({operation:re,header:e,value:o}))},condition:{requestDomains:["bing.com","www.bing.com","cn.bing.com"],resourceTypes:T}},A&&[{action:{type:ne,redirect:{url:`${x}?invite_code=b90e84b5`}},condition:{requestDomains:["chat.aiplus.lol"],urlFilter:x,isUrlFilterCaseSensitive:!1,resourceTypes:T}}]].flat().filter(Boolean).map((e,o)=>({id:o+1+2e3,...e})),F=()=>{S.length&&chrome.declarativeNetRequest.getDynamicRules(e=>{chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds:[...new Set([...S.map(o=>o.id),...e.map(o=>o.id)])],addRules:S})})};W();chrome.runtime.onInstalled.addListener(e=>{F()});var se=U?B:"https://github.com/ha0z1/New-Bing-Anywhere/blob/main/uninstall.md";chrome.runtime.setUninstallURL(se);})();
