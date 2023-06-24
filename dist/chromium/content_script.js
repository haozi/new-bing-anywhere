"use strict";(()=>{var w="2.0.3";var b="New Bing Anywhere (Bing Chat GPT-4)";var B=()=>location.hostname.includes("google");var k=()=>{try{return chrome.i18n.getUILanguage().toLowerCase()==="zh-cn"}catch{return!1}},S=()=>{try{let e=chrome.i18n.getUILanguage().toLowerCase();return e==="zh-cn"||e==="zh-tw"||e==="zh-hk"||e==="zh"}catch{return!1}};var y="configV1",p=async()=>({showGoogleButtonOnBing:!0,showBingButtonOnGoogle:!0,showGuideToGithub:!0,showChat:!0,showRelease:!0,triggerMode:"Always",conversationStyle:"Balanced",...(await chrome.storage.sync.get(y))[y]}),I=async e=>{let r=await p();await chrome.storage.sync.set({[y]:{...r,...e}})},N=e=>String(e).replace(/&/g,"&amp;").replace(/'/g,"&#39;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\//g,"&#x2f;");var u=async(e,r=[])=>await new Promise((n,t)=>{chrome.runtime.sendMessage({method:e,args:[...r]},s=>{!s||s.code!==200?t(s?.msg):n(s.data)})}),W=(()=>{let e="v1";return{get:async r=>{r=`${e}:${r}`;let{data:n,maxAge:t,lastModified:s}=(await chrome.storage.local.get(r))?.[r]??{};return Date.now()-s>t*1e3?(chrome.storage.local.remove(r),null):n},set:async(r,n,t=1/0)=>{r=`${e}:${r}`,await chrome.storage.local.set({[r]:{data:n,lastModified:Date.now(),maxAge:t}})}}})();var x=navigator.userAgent,E=navigator.userAgentData,H=x.includes("Macintosh"),K=x.includes("Firefox"),A=x.includes("Edg/"),V=E?.brands.findIndex(e=>e.brand==="Brave")>-1,F=S(),Y=k(),P=!!globalThis.__NBA_isCanary,Z=P?`0.${w}`:w;var h=async e=>{try{return await u("openUrlInSameTab",[{url:e}])}catch{location.href=e}},T={attributes:!0,childList:!0,subtree:!0},v=(e,r=document)=>r.querySelector(e),g=async(e,r=30,n=document)=>await new Promise(t=>{let s=v(e,n);if(s){t(s);return}let l=new MutationObserver((o,i)=>{let a=v(e,n);a&&(i.disconnect(),t(a))});l.observe(document,T),setTimeout(()=>{let o=v(e,n);l.disconnect(),t(o)},r*1e3)});var _=async e=>{if(!A){let n=window.document,t=n.createElement("script");t.src=chrome.runtime.getURL("inject.js"),t.onload=t.remove,n.documentElement.appendChild(t)}if(e(()=>{(async()=>{let{showGuideToGithub:n}=await p();if(!n)return;let t=e("#est_switch");e.trim(t.text())==="\u56FD\u5185\u7248\u56FD\u9645\u7248"&&setTimeout(()=>{let s=e('<a href="https://github.com/haozi/New-Bing-Anywhere/issues/8" title="\u67E5\u770B\u5982\u4F55\u6B63\u786E\u914D\u7F6E\u7F51\u7EDC\u4EE3\u7406" target="_blank" rel="noopener noreferrer nofollow">\u4F9D\u7136\u51FA\u73B0\u56FD\u5185\u7248/\u56FD\u9645\u7248\uFF1F</a>').css({color:"#E89ABE",textShadow:"0.5px 0.1px 1px #58070D",fontSize:"12px",fontWeight:"lighter"}).click(()=>{I({showGuideToGithub:!1})});e("#est_switch").append(s).css("width","auto")},2e3)})()}),!location.href.startsWith("https://www.bing.com/search?"))return;let r=await p();g("#sb_form").then(()=>{if(u("getNotification").then(o=>{if(!o)return;let i=e(document.body),a=e("<div/>").css({width:"100%",height:40,border:"1px solid #590727",background:"#58070d",position:"fixed",top:0,fontSize:"12px",lineHeight:"40px",textAlign:"center",zIndex:99999,whiteSpace:"nowrap",textOverflow:"ellipsis",display:"block !important"}),c=()=>{a.remove(),i.css("padding-top",null)},m=e(`<a style="color:#fff; background:url(${chrome.runtime.getURL("images/bing_32x32.png")}) no-repeat left 0; background-size: 12px; padding-left: 20px" href="${o.html_url}" target="_blank" rel="noopener noreferrer nofollow">${o.title}</a>`).on("click",c),d=e('<a href="#" style="background:#58070d; color:#fff; cursor:pointer;padding: 0 68px 0 18px;position: absolute;right:0" title="no reminder">\u2715</a>').on("click",f=>{f.preventDefault(),confirm("Are you sure never see this notice again?")&&u("hideNotification"),c()});a.append(m).append(d),i.append(a).css("padding-top",40)}),e(document.body).on("click","a.b_logoArea",o=>{e(o.currentTarget).attr("href","/").attr("target","_self")}),!r.showGoogleButtonOnBing)return;let n=e("#sb_form_q"),t=n.val(),s=e(`
      <a href="https://www.google.com/search?q=${encodeURIComponent(N(t))}" target="google" tabindex="10" rel="noopener noreferrer nofollow" title="search with Google">
        <img src="${chrome.runtime.getURL("images/google.png")}" alt="google" style="width: 100%;display: block;">
      </a>`).css({position:"absolute",left:0,top:0,width:"70px",height:"23px",display:"inline-block","z-index":999,transition:"all .3s",transform:"translate3d(835px, 13px, 0px)","will-change":"transform",cursor:"pointer"});e("#sb_form").css("position","relative").prepend(s),s.on("click",async o=>{let i=e(o.currentTarget);o.preventDefault();let a="";a||(a=n.val().trim());let c=`https://www.google.com/search?q=${encodeURIComponent(a)}`;i.attr("href",c),await h(c)}),location.search.includes("showconv=1")&&(s.css("display","none"),setTimeout(()=>{s.css("display","inline-block")},1200));let l=()=>{let o=e("#b-scopeListItem-conv"),i=o.hasClass("b_active");if(i){let a=0;o.offset().left?a=o.offset().left+o.width()+30:a=350,s.css({transform:`translate3d(${a}px, 15px, 0)`})}else s.css({transform:"translate3d(835px, 15px, 0)"});!i&&e(".b_searchboxForm").hasClass("as_rsform")&&s.css({transform:"translate3d(1155px, 15px, 0)"})};l(),new MutationObserver((o,i)=>{for(let a of o){let c=a.target;c&&(c.id==="b-scopeListItem-conv"&&l(),c.classList.contains("b_searchboxForm")&&l())}}).observe(document.getElementById("b_header"),T)})};var R=B(),L=async(e,r)=>{let n="";R&&(n=new URLSearchParams(location.search).get("q")??"");let t=new URLSearchParams(location.hash.slice(1)).get("new-bing-anywhere")??"",s={prompt:n.trim(),extra:t},l=chrome.runtime.getURL(`/app/index.html#/chat/iframe?${new URLSearchParams(s).toString()}`);try{let o=e(`<iframe src="${l}" scrolling="no" />`);o.css({width:"100%",border:"none",overflow:"hidden",boxSizing:"border-box",willChange:"height",transition:"height .1s cubic-bezier(0, 0, 0, 1.27) 0s",borderRadius:"8px"}),window.addEventListener("message",m=>{let{type:d,data:f}=m.data;if(d!=="nba-resize")return;let{height:U}=f;o.css({height:U})});let i;i=e(await g("#rhs",1)),i.length||(i=e('<div id="rhs" />').css({marginLeft:"var(--rhs-margin)",flex:"0 auto",width:"var(--rhs-width)",position:"relative",paddingBottom:"15px",transition:"opacity 0.3s"}));let a=e(await g(".liYKde.g.VjDLd",.1));a.length?a.prepend(o):i.prepend(o);let c=await g("#center_col");i.insertAfter(c),e(c).after(i)}catch{}};var $=async e=>{(await p()).showBingButtonOnGoogle&&(location.href.startsWith("https://www.google.com/search?")||location.href.startsWith("https://www.google.com.hk/search?"))&&g('[action="/search"]').then(n=>{if(!n)return;let t=e(n),s=t.find('[name="q"]'),l=t.find('button[type="submit"]'),o=e(`
      <a href="https://www.bing.com/search?q=Bing+AI&showconv=1" rel="noopener noreferrer nofollow" target="bing" title="search with New Bing">
        <img src="${chrome.runtime.getURL("images/bing-chat.svg")}" style="display: block; width: 24px;" alt="bing" />
      </a>`).css({width:"40px",display:"flex",position:"relative","z-index":999,cursor:"pointer","justify-content":"center",margin:"0 10px 0 -10px"});l.after(o),o.on("click",async i=>{let a=e(i.currentTarget);i.preventDefault();let c=`https://www.bing.com/search?q=${encodeURIComponent(s.val())}&showconv=1`;a.attr("href",c),await h(c)})})};(async e=>{let r=e(document.documentElement);if(r.find(`meta[name="${b}"]`).length)return;let n=e(`<meta name="${b}" />`);r.prepend(n),u("getEnv").then(t=>{n.attr("content",t.version)}),p().then(t=>{t.showChat&&L(e,t)}),location.hostname==="www.bing.com"&&_(e),location.hostname.startsWith("www.google.")&&$(e)})(window.Zepto);})();
