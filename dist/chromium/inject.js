"use strict";(()=>{var o="114",r="114.0.1823.82";var s="2.4.2";var a=navigator.userAgent,d=navigator.userAgentData,h=a.includes("Macintosh");var y=a.includes("Edg/"),C=d?.brands.findIndex(e=>e.brand==="Brave")>-1;var w=!!globalThis.__NBA_isCanary,T=w?`0.${s}`:s,i=()=>{let e=a;return y||(h?e=`Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${o}.0.0.0 Safari/537.36 Edg/${r}`:e=`Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${o}.0.0.0 Safari/537.36 Edg/${r}`),e};try{let e=i();Object.defineProperty(navigator,"userAgent",{get:()=>e});let c=navigator.userAgentData,m=c?.brands;if(Array.isArray(m)&&Object.defineProperty(navigator,"userAgentData",{get:()=>({...JSON.parse(JSON.stringify(c)),brands:[{brand:"Not.A/Brand",version:"8"},{brand:"Chromium",version:o},{brand:"Microsoft Edge",version:o}]})}),location.pathname==="/search"){let n=0,u=200,g=()=>{if(n>u)return;++n;let t=window._w?._sydConvConfig;if(t){let l=",iycapbing,iyxapbing";(t.sydOptionSets??"").includes(l)?requestIdleCallback(g):(t.sydOptionSets+=l,t.enableVisualSearch=!0)}else requestIdleCallback(g)};g()}}catch{}})();
