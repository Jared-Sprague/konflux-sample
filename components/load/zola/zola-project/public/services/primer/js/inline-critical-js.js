var l=Object.defineProperty;var g=o=>l(o,"__esModule",{value:!0});var a=(o,t)=>()=>(o&&(t=o(o=0)),t);var u=(o,t)=>{g(o);for(var n in t)l(o,n,{get:t[n],enumerable:!0})};var e=a(()=>{});var i=a(()=>{e()});var p={};u(p,{loginIfSessionExists:()=>P});function P(){let o=!/\/logout.*/.test(location.pathname),t=window.portal.host===location.origin,n=document.cookie.indexOf("rh_sso_session")>=0,w=!(document.cookie.indexOf("rh_jwt")>=0);if(o&&t&&n&&w){let c=encodeURIComponent(window.location.href);window.location.assign(`/login?redirectTo=${c}`)}}var m=a(()=>{e();i()});e();e();i();var f="cp_primer_global_ready",E=!1;function d(){return new Promise(o=>{E?o(window.portal.primer):window.addEventListener(f,()=>{o(window.portal.primer)})})}e();var s=undefined;i();window.portal.primer.onReady=d;s&&Promise.resolve().then(()=>(m(),p)).then(({loginIfSessionExists:o})=>{o()});document.documentElement.setAttribute("lang",document.documentElement.getAttribute("lang")||window.portal.lang||"en");
//# sourceMappingURL=inline-critical-js.js.map