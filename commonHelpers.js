import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m,i as f}from"./assets/vendor-9dd4053f.js";const h=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]");e.disabled=!0;const S=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),g=document.querySelector("[data-seconds]");let c,o;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){o!==0&&(o=t[0],o<new Date?(f.error({title:"Error",position:"topRight",message:"Please choose a date in the future"}),e.disabled=!0,window.alert("Please choose a date in the future")):e.disabled=!1)}};m(h,D);function q(){const t=o-Date.now();if(console.log(t),t<=0){clearInterval(c);return}const{days:n,hours:r,minutes:s,seconds:a}=M(t);S.textContent=n.toString().padStart(2,"0"),y.textContent=r.toString().padStart(2,"0"),p.textContent=s.toString().padStart(2,"0"),g.textContent=a.toString().padStart(2,"0")}e.addEventListener("click",()=>{e.disabled=!0,c=setInterval(q,1e3)});function M(t){const i=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:u,minutes:d,seconds:l}}
//# sourceMappingURL=commonHelpers.js.map
