var qf=Object.defineProperty;var Xf=(n,e,t)=>e in n?qf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var yt=(n,e,t)=>(Xf(n,typeof e!="symbol"?e+"":e,t),t);import{c as hn,f as Rd,i as Yf,C as Ld,F as Tn,r as se,a as Xs,w as Pt,o as en,b as tn,d as Kf,e as he,g as $n,u as un,h as vt,j as Be,p as Sn,k as Dd,l as Id,m as Vr,t as nt,n as E,T as Zf,q as Fn,s as zd,v as Fd,x as Wt,y as Wi,z as Tl,V as xo,A as Jf,B as sc,D as Wr,E as El,G as ti,H as ni,I as Qf,J as mn,K as va,L as kd,M as ep,N as tp,O as np,P as ip,Q as Kt,R as Mn,S as Al,U as Ia,W as za,X as ft,Y as Zt,Z as dn,_ as yi,$ as lt,a0 as rp,a1 as Bd,a2 as op,a3 as ap,a4 as Za}from"./index.e74ea23a.js";function wa(n,e){let{target:t}=n;for(;t;){if(t.dataset&&t.dataset[e]!==void 0)return!0;t=t.parentElement}return!1}var lc={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"};function Od(n,e,t){e/=100,t/=100;const i=e*Math.min(t,1-t)+t;return[n,i?(2-2*t/i)*100:0,i*100]}function xa(n,e,t){e/=100,t/=100;const i=t-t*e/2,r=Math.min(i,1-i);return[n,r?(t-i)/r*100:0,i*100]}function bi(n,e,t){e/=100,t/=100;let i=(r,o=(r+n/60)%6)=>t-t*e*Math.max(Math.min(o,4-o,1),0);return[i(5)*255,i(3)*255,i(1)*255]}function Ys(n,e,t){n/=255,e/=255,t/=255;let i=Math.max(n,e,t),r=i-Math.min(n,e,t),o=r&&(i==n?(e-t)/r:i==e?2+(t-n)/r:4+(n-e)/r);return[60*(o<0?o+6:o),i&&r/i*100,i*100]}function Ks(n,e,t){n/=255,e/=255,t/=255;let i=Math.max(n,e,t),r=i-Math.min(n,e,t),o=1-Math.abs(i+i-r-1),s=r&&(i==n?(e-t)/r:i==e?2+(t-n)/r:4+(n-e)/r);return[60*(s<0?s+6:s),o?r/o*100:0,(i+i-r)*50]}function Zs(n,e,t){e/=100,t/=100;let i=e*Math.min(t,1-t),r=(o,s=(o+n/30)%12)=>t-i*Math.max(Math.min(s-3,9-s,1),-1);return[r(0)*255,r(8)*255,r(4)*255]}const Un="^\\s*",Hn="\\s*$",Ti="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*",Jt="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",Gi="([0-9A-Fa-f])",ji="([0-9A-Fa-f]{2})",sp=new RegExp(`${Un}hsl\\s*\\(${Jt},${Ti},${Ti}\\)${Hn}`),lp=new RegExp(`${Un}hsv\\s*\\(${Jt},${Ti},${Ti}\\)${Hn}`),cp=new RegExp(`${Un}hsla\\s*\\(${Jt},${Ti},${Ti},${Jt}\\)${Hn}`),up=new RegExp(`${Un}hsva\\s*\\(${Jt},${Ti},${Ti},${Jt}\\)${Hn}`),dp=new RegExp(`${Un}rgb\\s*\\(${Jt},${Jt},${Jt}\\)${Hn}`),hp=new RegExp(`${Un}rgba\\s*\\(${Jt},${Jt},${Jt},${Jt}\\)${Hn}`),Pl=new RegExp(`${Un}#${Gi}${Gi}${Gi}${Hn}`),Rl=new RegExp(`${Un}#${ji}${ji}${ji}${Hn}`),Ll=new RegExp(`${Un}#${Gi}${Gi}${Gi}${Gi}${Hn}`),Dl=new RegExp(`${Un}#${ji}${ji}${ji}${ji}${Hn}`);function Vt(n){return parseInt(n,16)}function Lr(n){try{let e;if(e=cp.exec(n))return[Nn(e[1]),Mt(e[5]),Mt(e[9]),Qn(e[13])];if(e=sp.exec(n))return[Nn(e[1]),Mt(e[5]),Mt(e[9]),1];throw new Error(`[seemly/hsla]: Invalid color value ${n}.`)}catch(e){throw e}}function Ki(n){try{let e;if(e=up.exec(n))return[Nn(e[1]),Mt(e[5]),Mt(e[9]),Qn(e[13])];if(e=lp.exec(n))return[Nn(e[1]),Mt(e[5]),Mt(e[9]),1];throw new Error(`[seemly/hsva]: Invalid color value ${n}.`)}catch(e){throw e}}function It(n){try{let e;if(e=Rl.exec(n))return[Vt(e[1]),Vt(e[2]),Vt(e[3]),1];if(e=dp.exec(n))return[bt(e[1]),bt(e[5]),bt(e[9]),1];if(e=hp.exec(n))return[bt(e[1]),bt(e[5]),bt(e[9]),Qn(e[13])];if(e=Pl.exec(n))return[Vt(e[1]+e[1]),Vt(e[2]+e[2]),Vt(e[3]+e[3]),1];if(e=Dl.exec(n))return[Vt(e[1]),Vt(e[2]),Vt(e[3]),Qn(Vt(e[4])/255)];if(e=Ll.exec(n))return[Vt(e[1]+e[1]),Vt(e[2]+e[2]),Vt(e[3]+e[3]),Qn(Vt(e[4]+e[4])/255)];if(n in lc)return It(lc[n]);throw new Error(`[seemly/rgba]: Invalid color value ${n}.`)}catch(e){throw e}}function fp(n){return n>1?1:n<0?0:n}function pp(n,e,t){return`rgb(${bt(n)}, ${bt(e)}, ${bt(t)})`}function Js(n,e,t,i){return`rgba(${bt(n)}, ${bt(e)}, ${bt(t)}, ${fp(i)})`}function Ja(n,e,t,i,r){return bt((n*e*(1-i)+t*i)/r)}function Il(n,e){Array.isArray(n)||(n=It(n)),Array.isArray(e)||(e=It(e));const t=n[3],i=e[3],r=Qn(t+i-t*i);return Js(Ja(n[0],t,e[0],i,r),Ja(n[1],t,e[1],i,r),Ja(n[2],t,e[2],i,r),r)}function Ke(n,e){const[t,i,r,o=1]=Array.isArray(n)?n:It(n);return e.alpha?Js(t,i,r,e.alpha):Js(t,i,r,o)}function Oo(n,e){const[t,i,r,o=1]=Array.isArray(n)?n:It(n),{lightness:s=1,alpha:a=1}=e;return kn([t*s,i*s,r*s,o*a])}function Qn(n){const e=Math.round(Number(n)*100)/100;return e>1?1:e<0?0:e}function Nn(n){const e=Math.round(Number(n));return e>=360||e<0?0:e}function bt(n){const e=Math.round(Number(n));return e>255?255:e<0?0:e}function Mt(n){const e=Math.round(Number(n));return e>100?100:e<0?0:e}function Qs(n){const[e,t,i]=Array.isArray(n)?n:It(n);return pp(e,t,i)}function kn(n){const[e,t,i]=n;return 3 in n?`rgba(${bt(e)}, ${bt(t)}, ${bt(i)}, ${Qn(n[3])})`:`rgba(${bt(e)}, ${bt(t)}, ${bt(i)}, 1)`}function el(n){return`hsv(${Nn(n[0])}, ${Mt(n[1])}%, ${Mt(n[2])}%)`}function Zi(n){const[e,t,i]=n;return 3 in n?`hsva(${Nn(e)}, ${Mt(t)}%, ${Mt(i)}%, ${Qn(n[3])})`:`hsva(${Nn(e)}, ${Mt(t)}%, ${Mt(i)}%, 1)`}function tl(n){return`hsl(${Nn(n[0])}, ${Mt(n[1])}%, ${Mt(n[2])}%)`}function wi(n){const[e,t,i]=n;return 3 in n?`hsla(${Nn(e)}, ${Mt(t)}%, ${Mt(i)}%, ${Qn(n[3])})`:`hsla(${Nn(e)}, ${Mt(t)}%, ${Mt(i)}%, 1)`}function Si(n){if(typeof n=="string"){let i;if(i=Rl.exec(n))return`${i[0]}FF`;if(i=Dl.exec(n))return i[0];if(i=Pl.exec(n))return`#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}FF`;if(i=Ll.exec(n))return`#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}${i[4]}${i[4]}`;throw new Error(`[seemly/toHexString]: Invalid hex value ${n}.`)}const e=`#${n.slice(0,3).map(i=>bt(i).toString(16).toUpperCase().padStart(2,"0")).join("")}`,t=n.length===3?"FF":bt(n[3]*255).toString(16).padStart(2,"0").toUpperCase();return e+t}function po(n){if(typeof n=="string"){let e;if(e=Rl.exec(n))return e[0];if(e=Dl.exec(n))return e[0].slice(0,7);if(e=Pl.exec(n)||Ll.exec(n))return`#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`;throw new Error(`[seemly/toHexString]: Invalid hex value ${n}.`)}return`#${n.slice(0,3).map(e=>bt(e).toString(16).toUpperCase().padStart(2,"0")).join("")}`}function mp(n=8){return Math.random().toString(16).slice(2,2+n)}function gp(n,e=[],t){const i={};return e.forEach(r=>{i[r]=n[r]}),Object.assign(i,t)}function Ye(n,...e){if(Array.isArray(n))n.forEach(t=>Ye(t,...e));else return n(...e)}const Pr=(n,...e)=>typeof n=="function"?n(...e):typeof n=="string"?hn(n):typeof n=="number"?hn(String(n)):null;function nl(n,e){console.error(`[naive/${n}]: ${e}`)}function vp(n,e){throw new Error(`[naive/${n}]: ${e}`)}function xp(n){switch(typeof n){case"string":return n||void 0;case"number":return String(n);default:return}}function cc(n,e="default",t=void 0){const i=n[e];if(!i)return nl("getFirstSlotVNode",`slot[${e}] is empty`),null;const r=Rd(i(t));return r.length===1?r[0]:(nl("getFirstSlotVNode",`slot[${e}] should have exactly one child`),null)}function Ao(n){return n.some(e=>Yf(e)?!(e.type===Ld||e.type===Tn&&!Ao(e.children)):!0)?n:null}function Dr(n,e){return n&&Ao(n())||e()}function bp(n,e,t){return n&&Ao(n(e))||t(e)}function Dt(n,e){const t=n&&Ao(n());return e(t||null)}function mo(n){return!(n&&Ao(n()))}const _p=/^(\d|\.)+$/,uc=/(\d|\.)+/;function ba(n,{c:e=1,offset:t=0,attachPx:i=!0}={}){if(typeof n=="number"){const r=(n+t)*e;return r===0?"0":`${r}px`}else if(typeof n=="string")if(_p.test(n)){const r=(Number(n)+t)*e;return i?r===0?"0":`${r}px`:`${r}`}else{const r=uc.exec(n);return r?n.replace(uc,String((Number(r[0])+t)*e)):n}return n}function Sa(n){return n.replace(/#|\(|\)|,|\s/g,"_")}function yp(n){let e=0;for(let t=0;t<n.length;++t)n[t]==="&"&&++e;return e}const Nd=/\s*,(?![^(]*\))\s*/g,wp=/\s+/g;function Sp(n,e){const t=[];return e.split(Nd).forEach(i=>{let r=yp(i);if(r){if(r===1){n.forEach(s=>{t.push(i.replace("&",s))});return}}else{n.forEach(s=>{t.push((s&&s+" ")+i)});return}let o=[i];for(;r--;){const s=[];o.forEach(a=>{n.forEach(l=>{s.push(a.replace("&",l))})}),o=s}o.forEach(s=>t.push(s))}),t}function Mp(n,e){const t=[];return e.split(Nd).forEach(i=>{n.forEach(r=>{t.push((r&&r+" ")+i)})}),t}function Cp(n){let e=[""];return n.forEach(t=>{t=t&&t.trim(),t&&(t.includes("&")?e=Sp(e,t):e=Mp(e,t))}),e.join(", ").replace(wp," ")}function dc(n){if(!n)return;const e=n.parentElement;e&&e.removeChild(n)}function Fa(n){return document.querySelector(`style[cssr-id="${n}"]`)}function Tp(n){const e=document.createElement("style");return e.setAttribute("cssr-id",n),e}function No(n){return n?/^\s*@(s|m)/.test(n):!1}const Ep=/[A-Z]/g;function $d(n){return n.replace(Ep,e=>"-"+e.toLowerCase())}function Ap(n,e="  "){return typeof n=="object"&&n!==null?` {
`+Object.entries(n).map(t=>e+`  ${$d(t[0])}: ${t[1]};`).join(`
`)+`
`+e+"}":`: ${n};`}function Pp(n,e,t){return typeof n=="function"?n({context:e.context,props:t}):n}function hc(n,e,t,i){if(!e)return"";const r=Pp(e,t,i);if(!r)return"";if(typeof r=="string")return`${n} {
${r}
}`;const o=Object.keys(r);if(o.length===0)return t.config.keepEmptyBlock?n+` {
}`:"";const s=n?[n+" {"]:[];return o.forEach(a=>{const l=r[a];if(a==="raw"){s.push(`
`+l+`
`);return}a=$d(a),l!=null&&s.push(`  ${a}${Ap(l)}`)}),n&&s.push("}"),s.join(`
`)}function il(n,e,t){!n||n.forEach(i=>{if(Array.isArray(i))il(i,e,t);else if(typeof i=="function"){const r=i(e);Array.isArray(r)?il(r,e,t):r&&t(r)}else i&&t(i)})}function Ud(n,e,t,i,r,o){const s=n.$;let a="";if(!s||typeof s=="string")No(s)?a=s:e.push(s);else if(typeof s=="function"){const u=s({context:i.context,props:r});No(u)?a=u:e.push(u)}else if(s.before&&s.before(i.context),!s.$||typeof s.$=="string")No(s.$)?a=s.$:e.push(s.$);else if(s.$){const u=s.$({context:i.context,props:r});No(u)?a=u:e.push(u)}const l=Cp(e),c=hc(l,n.props,i,r);a?(t.push(`${a} {`),o&&c&&o.insertRule(`${a} {
${c}
}
`)):(o&&c&&o.insertRule(c),!o&&c.length&&t.push(c)),n.children&&il(n.children,{context:i.context,props:r},u=>{if(typeof u=="string"){const d=hc(l,{raw:u},i,r);o?o.insertRule(d):t.push(d)}else Ud(u,e,t,i,r,o)}),e.pop(),a&&t.push("}"),s&&s.after&&s.after(i.context)}function Hd(n,e,t,i=!1){const r=[];return Ud(n,[],r,e,t,i?n.instance.__styleSheet:void 0),i?"":r.join(`

`)}function rl(n){for(var e=0,t,i=0,r=n.length;r>=4;++i,r-=4)t=n.charCodeAt(i)&255|(n.charCodeAt(++i)&255)<<8|(n.charCodeAt(++i)&255)<<16|(n.charCodeAt(++i)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(n.charCodeAt(i+2)&255)<<16;case 2:e^=(n.charCodeAt(i+1)&255)<<8;case 1:e^=n.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}typeof window!="undefined"&&(window.__cssrContext={});function Rp(n,e,t){const{els:i}=e;if(t===void 0)i.forEach(dc),e.els=[];else{const r=Fa(t);r&&i.includes(r)&&(dc(r),e.els=i.filter(o=>o!==r))}}function fc(n,e){n.push(e)}function Lp(n,e,t,i,r,o,s,a,l){if(o&&!l){if(t===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const h=window.__cssrContext;h[t]||(h[t]=!0,Hd(e,n,i,o));return}let c;if(t===void 0&&(c=e.render(i),t=rl(c)),l){l.adapter(t,c!=null?c:e.render(i));return}const u=Fa(t);if(u!==null&&!s)return u;const d=u!=null?u:Tp(t);if(c===void 0&&(c=e.render(i)),d.textContent=c,u!==null)return u;if(a){const h=document.head.querySelector(`meta[name="${a}"]`);if(h)return document.head.insertBefore(d,h),fc(e.els,d),d}return r?document.head.insertBefore(d,document.head.querySelector("style, link")):document.head.appendChild(d),fc(e.els,d),d}function Dp(n){return Hd(this,this.instance,n)}function Ip(n={}){const{id:e,ssr:t,props:i,head:r=!1,silent:o=!1,force:s=!1,anchorMetaName:a}=n;return Lp(this.instance,this,e,i,r,o,s,a,t)}function zp(n={}){const{id:e}=n;Rp(this.instance,this,e)}const $o=function(n,e,t,i){return{instance:n,$:e,props:t,children:i,els:[],render:Dp,mount:Ip,unmount:zp}},Fp=function(n,e,t,i){return Array.isArray(e)?$o(n,{$:null},null,e):Array.isArray(t)?$o(n,e,null,t):Array.isArray(i)?$o(n,e,t,i):$o(n,e,t,null)};function Vd(n={}){let e=null;const t={c:(...i)=>Fp(t,...i),use:(i,...r)=>i.install(t,...r),find:Fa,context:{},config:n,get __styleSheet(){if(!e){const i=document.createElement("style");return document.head.appendChild(i),e=document.styleSheets[document.styleSheets.length-1],e}return e}};return t}function kp(n,e){if(n===void 0)return!1;if(e){const{context:{ids:t}}=e;return t.has(n)}return Fa(n)!==null}function Bp(n){let e=".",t="__",i="--",r;if(n){let g=n.blockPrefix;g&&(e=g),g=n.elementPrefix,g&&(t=g),g=n.modifierPrefix,g&&(i=g)}const o={install(g){r=g.c;const p=g.context;p.bem={},p.bem.b=null,p.bem.els=null}};function s(g){let p,f;return{before(v){p=v.bem.b,f=v.bem.els,v.bem.els=null},after(v){v.bem.b=p,v.bem.els=f},$({context:v,props:y}){return g=typeof g=="string"?g:g({context:v,props:y}),v.bem.b=g,`${(y==null?void 0:y.bPrefix)||e}${v.bem.b}`}}}function a(g){let p;return{before(f){p=f.bem.els},after(f){f.bem.els=p},$({context:f,props:v}){return g=typeof g=="string"?g:g({context:f,props:v}),f.bem.els=g.split(",").map(y=>y.trim()),f.bem.els.map(y=>`${(v==null?void 0:v.bPrefix)||e}${f.bem.b}${t}${y}`).join(", ")}}}function l(g){return{$({context:p,props:f}){g=typeof g=="string"?g:g({context:p,props:f});const v=g.split(",").map(_=>_.trim());function y(_){return v.map(M=>`&${(f==null?void 0:f.bPrefix)||e}${p.bem.b}${_!==void 0?`${t}${_}`:""}${i}${M}`).join(", ")}const T=p.bem.els;return T!==null?y(T[0]):y()}}}function c(g){return{$({context:p,props:f}){g=typeof g=="string"?g:g({context:p,props:f});const v=p.bem.els;return`&:not(${(f==null?void 0:f.bPrefix)||e}${p.bem.b}${v!==null&&v.length>0?`${t}${v[0]}`:""}${i}${g})`}}}return Object.assign(o,{cB:(...g)=>r(s(g[0]),g[1],g[2]),cE:(...g)=>r(a(g[0]),g[1],g[2]),cM:(...g)=>r(l(g[0]),g[1],g[2]),cNotM:(...g)=>r(c(g[0]),g[1],g[2])}),o}function Re(n,e){return n+(e==="default"?"":e.replace(/^[a-z]/,t=>t.toUpperCase()))}Re("abc","def");const Op="n",Ma=`.${Op}-`,Np="__",$p="--",Wd=Vd(),Gd=Bp({blockPrefix:Ma,elementPrefix:Np,modifierPrefix:$p});Wd.use(Gd);const{c:ue,find:ME}=Wd,{cB:ee,cE:K,cM:Ae,cNotM:St}=Gd;function Up(n){return ue(({props:{bPrefix:e}})=>`${e||Ma}modal, ${e||Ma}drawer`,[n])}function Hp(n){return ue(({props:{bPrefix:e}})=>`${e||Ma}popover`,[n])}const Vp=(...n)=>ue(">",[ee(...n)]);let Qa;function Wp(){return Qa===void 0&&(Qa=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),Qa}const jd=typeof document!="undefined"&&typeof window!="undefined";function Gp(n){const e=se(!!n.value);if(e.value)return Xs(e);const t=Pt(n,i=>{i&&(e.value=!0,t())});return Xs(e)}let Ir,go;const jp=()=>{var n,e;Ir=Kf?(e=(n=document)===null||n===void 0?void 0:n.fonts)===null||e===void 0?void 0:e.ready:void 0,go=!1,Ir!==void 0?Ir.then(()=>{go=!0}):go=!0};jp();function qp(n){if(go)return;let e=!1;en(()=>{go||Ir==null||Ir.then(()=>{e||n()})}),tn(()=>{e=!0})}const Xp={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function Yp(n,e,t){if(n==="mousemoveoutside"){const i=r=>{e.contains(r.target)||t(r)};return{mousemove:i,touchstart:i}}else if(n==="clickoutside"){let i=!1;const r=s=>{i=!e.contains(s.target)},o=s=>{!i||e.contains(s.target)||t(s)};return{mousedown:r,mouseup:o,touchstart:r,touchend:o}}return console.error(`[evtd/create-trap-handler]: name \`${n}\` is invalid. This could be a bug of evtd.`),{}}function qd(n,e,t){const i=Xp[n];let r=i.get(e);r===void 0&&i.set(e,r=new WeakMap);let o=r.get(t);return o===void 0&&r.set(t,o=Yp(n,e,t)),o}function Kp(n,e,t,i){if(n==="mousemoveoutside"||n==="clickoutside"){const r=qd(n,e,t);return Object.keys(r).forEach(o=>{ct(o,document,r[o],i)}),!0}return!1}function Zp(n,e,t,i){if(n==="mousemoveoutside"||n==="clickoutside"){const r=qd(n,e,t);return Object.keys(r).forEach(o=>{at(o,document,r[o],i)}),!0}return!1}function Jp(){if(typeof window=="undefined")return{on:()=>{},off:()=>{}};const n=new WeakMap,e=new WeakMap;function t(){n.set(this,!0)}function i(){n.set(this,!0),e.set(this,!0)}function r(w,x,S){const R=w[x];return w[x]=function(){return S.apply(w,arguments),R.apply(w,arguments)},w}function o(w,x){w[x]=Event.prototype[x]}const s=new WeakMap,a=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function l(){var w;return(w=s.get(this))!==null&&w!==void 0?w:null}function c(w,x){a!==void 0&&Object.defineProperty(w,"currentTarget",{configurable:!0,enumerable:!0,get:x!=null?x:a.get})}const u={bubble:{},capture:{}},d={};function h(){const w=function(x){const{type:S,eventPhase:R,target:D,bubbles:$}=x;if(R===2)return;const Z=R===1?"capture":"bubble";let L=D;const N=[];for(;L===null&&(L=window),N.push(L),L!==window;)L=L.parentNode||null;const O=u.capture[S],H=u.bubble[S];if(r(x,"stopPropagation",t),r(x,"stopImmediatePropagation",i),c(x,l),Z==="capture"){if(O===void 0)return;for(let Y=N.length-1;Y>=0&&!n.has(x);--Y){const I=N[Y],B=O.get(I);if(B!==void 0){s.set(x,I);for(const oe of B){if(e.has(x))break;oe(x)}}if(Y===0&&!$&&H!==void 0){const oe=H.get(I);if(oe!==void 0)for(const re of oe){if(e.has(x))break;re(x)}}}}else if(Z==="bubble"){if(H===void 0)return;for(let Y=0;Y<N.length&&!n.has(x);++Y){const I=N[Y],B=H.get(I);if(B!==void 0){s.set(x,I);for(const oe of B){if(e.has(x))break;oe(x)}}}}o(x,"stopPropagation"),o(x,"stopImmediatePropagation"),c(x)};return w.displayName="evtdUnifiedHandler",w}function m(){const w=function(x){const{type:S,eventPhase:R}=x;if(R!==2)return;const D=d[S];D!==void 0&&D.forEach($=>$(x))};return w.displayName="evtdUnifiedWindowEventHandler",w}const g=h(),p=m();function f(w,x){const S=u[w];return S[x]===void 0&&(S[x]=new Map,window.addEventListener(x,g,w==="capture")),S[x]}function v(w){return d[w]===void 0&&(d[w]=new Set,window.addEventListener(w,p)),d[w]}function y(w,x){let S=w.get(x);return S===void 0&&w.set(x,S=new Set),S}function T(w,x,S,R){const D=u[x][S];if(D!==void 0){const $=D.get(w);if($!==void 0&&$.has(R))return!0}return!1}function _(w,x){const S=d[w];return!!(S!==void 0&&S.has(x))}function M(w,x,S,R){let D;if(typeof R=="object"&&R.once===!0?D=O=>{A(w,x,D,R),S(O)}:D=S,Kp(w,x,D,R))return;const Z=R===!0||typeof R=="object"&&R.capture===!0?"capture":"bubble",L=f(Z,w),N=y(L,x);if(N.has(D)||N.add(D),x===window){const O=v(w);O.has(D)||O.add(D)}}function A(w,x,S,R){if(Zp(w,x,S,R))return;const $=R===!0||typeof R=="object"&&R.capture===!0,Z=$?"capture":"bubble",L=f(Z,w),N=y(L,x);if(x===window&&!T(x,$?"bubble":"capture",w,S)&&_(w,S)){const H=d[w];H.delete(S),H.size===0&&(window.removeEventListener(w,p),d[w]=void 0)}N.has(S)&&N.delete(S),N.size===0&&L.delete(x),L.size===0&&(window.removeEventListener(w,g,Z==="capture"),u[Z][w]=void 0)}return{on:M,off:A}}const{on:ct,off:at}=Jp();function Ei(n,e){return Pt(n,t=>{t!==void 0&&(e.value=t)}),he(()=>n.value===void 0?e.value:n.value)}function Gr(){const n=se(!1);return en(()=>{n.value=!0}),Xs(n)}function Xd(n,e){return he(()=>{for(const t of e)if(n[t]!==void 0)return n[t];return n[e[e.length-1]]})}const Qp=(typeof window=="undefined"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function em(){return Qp}const zl=$n("n-internal-select-menu"),Yd=$n("n-internal-select-menu-body"),Kd=$n("n-modal-body"),Zd=$n("n-drawer-body"),Jd=$n("n-popover-body"),Qd="__disabled__";function $t(n){const e=vt(Kd,null),t=vt(Zd,null),i=vt(Jd,null),r=vt(Yd,null),o=se();if(typeof document!="undefined"){o.value=document.fullscreenElement;const s=()=>{o.value=document.fullscreenElement};en(()=>{ct("fullscreenchange",document,s)}),tn(()=>{at("fullscreenchange",document,s)})}return un(()=>{var s;const{to:a}=n;return a!==void 0?a===!1?Qd:a===!0?o.value||"body":a:e!=null&&e.value?(s=e.value.$el)!==null&&s!==void 0?s:e.value:t!=null&&t.value?t.value:i!=null&&i.value?i.value:r!=null&&r.value?r.value:a!=null?a:o.value||"body"})}$t.tdkey=Qd;$t.propTo={type:[String,Object,Boolean],default:void 0};function ol(n,e,t="default"){const i=e[t];if(i===void 0)throw new Error(`[vueuc/${n}]: slot[${t}] is empty.`);return i()}function al(n,e=!0,t=[]){return n.forEach(i=>{if(i!==null){if(typeof i!="object"){(typeof i=="string"||typeof i=="number")&&t.push(hn(String(i)));return}if(Array.isArray(i)){al(i,e,t);return}if(i.type===Tn){if(i.children===null)return;Array.isArray(i.children)&&al(i.children,e,t)}else i.type!==Ld&&t.push(i)}}),t}function pc(n,e,t="default"){const i=e[t];if(i===void 0)throw new Error(`[vueuc/${n}]: slot[${t}] is empty.`);const r=al(i());if(r.length===1)return r[0];throw new Error(`[vueuc/${n}]: slot[${t}] should have exactly one child.`)}let ui=null;function eh(){if(ui===null&&(ui=document.getElementById("v-binder-view-measurer"),ui===null)){ui=document.createElement("div"),ui.id="v-binder-view-measurer";const{style:n}=ui;n.position="fixed",n.left="0",n.right="0",n.top="0",n.bottom="0",n.pointerEvents="none",n.visibility="hidden",document.body.appendChild(ui)}return ui.getBoundingClientRect()}function tm(n,e){const t=eh();return{top:e,left:n,height:0,width:0,right:t.width-n,bottom:t.height-e}}function es(n){const e=n.getBoundingClientRect(),t=eh();return{left:e.left-t.left,top:e.top-t.top,bottom:t.height+t.top-e.bottom,right:t.width+t.left-e.right,width:e.width,height:e.height}}function nm(n){return n.nodeType===9?null:n.parentNode}function th(n){if(n===null)return null;const e=nm(n);if(e===null)return null;if(e.nodeType===9)return document;if(e.nodeType===1){const{overflow:t,overflowX:i,overflowY:r}=getComputedStyle(e);if(/(auto|scroll|overlay)/.test(t+r+i))return e}return th(e)}const im=Be({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(n){var e;Sn("VBinder",(e=Dd())===null||e===void 0?void 0:e.proxy);const t=vt("VBinder",null),i=se(null),r=v=>{i.value=v,t&&n.syncTargetWithParent&&t.setTargetRef(v)};let o=[];const s=()=>{let v=i.value;for(;v=th(v),v!==null;)o.push(v);for(const y of o)ct("scroll",y,d,!0)},a=()=>{for(const v of o)at("scroll",v,d,!0);o=[]},l=new Set,c=v=>{l.size===0&&s(),l.has(v)||l.add(v)},u=v=>{l.has(v)&&l.delete(v),l.size===0&&a()},d=()=>{Id(h)},h=()=>{l.forEach(v=>v())},m=new Set,g=v=>{m.size===0&&ct("resize",window,f),m.has(v)||m.add(v)},p=v=>{m.has(v)&&m.delete(v),m.size===0&&at("resize",window,f)},f=()=>{m.forEach(v=>v())};return tn(()=>{at("resize",window,f),a()}),{targetRef:i,setTargetRef:r,addScrollListener:c,removeScrollListener:u,addResizeListener:g,removeResizeListener:p}},render(){return ol("binder",this.$slots)}});var ka=im,Ba=Be({name:"Target",setup(){const{setTargetRef:n,syncTarget:e}=vt("VBinder");return{syncTarget:e,setTargetDirective:{mounted:n,updated:n}}},render(){const{syncTarget:n,setTargetDirective:e}=this;return n?Vr(pc("follower",this.$slots),[[e]]):pc("follower",this.$slots)}});const ur="@@mmoContext",rm={mounted(n,{value:e}){n[ur]={handler:void 0},typeof e=="function"&&(n[ur].handler=e,ct("mousemoveoutside",n,e))},updated(n,{value:e}){const t=n[ur];typeof e=="function"?t.handler?t.handler!==e&&(at("mousemoveoutside",n,t.handler),t.handler=e,ct("mousemoveoutside",n,e)):(n[ur].handler=e,ct("mousemoveoutside",n,e)):t.handler&&(at("mousemoveoutside",n,t.handler),t.handler=void 0)},unmounted(n){const{handler:e}=n[ur];e&&at("mousemoveoutside",n,e),n[ur].handler=void 0}};var om=rm;const dr="@@coContext",am={mounted(n,{value:e,modifiers:t}){n[dr]={handler:void 0},typeof e=="function"&&(n[dr].handler=e,ct("clickoutside",n,e,{capture:t.capture}))},updated(n,{value:e,modifiers:t}){const i=n[dr];typeof e=="function"?i.handler?i.handler!==e&&(at("clickoutside",n,i.handler,{capture:t.capture}),i.handler=e,ct("clickoutside",n,e,{capture:t.capture})):(n[dr].handler=e,ct("clickoutside",n,e,{capture:t.capture})):i.handler&&(at("clickoutside",n,i.handler,{capture:t.capture}),i.handler=void 0)},unmounted(n,{modifiers:e}){const{handler:t}=n[dr];t&&at("clickoutside",n,t,{capture:e.capture}),n[dr].handler=void 0}};var bo=am;function sm(n,e){console.error(`[vdirs/${n}]: ${e}`)}class lm{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(e,t){const{elementZIndex:i}=this;if(t!==void 0){e.style.zIndex=`${t}`,i.delete(e);return}const{nextZIndex:r}=this;i.has(e)&&i.get(e)+1===this.nextZIndex||(e.style.zIndex=`${r}`,i.set(e,r),this.nextZIndex=r+1,this.squashState())}unregister(e,t){const{elementZIndex:i}=this;i.has(e)?i.delete(e):t===void 0&&sm("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:e}=this;e||(this.nextZIndex=2e3),this.nextZIndex-e>2500&&this.rearrange()}rearrange(){const e=Array.from(this.elementZIndex.entries());e.sort((t,i)=>t[1]-i[1]),this.nextZIndex=2e3,e.forEach(t=>{const i=t[0],r=this.nextZIndex++;`${r}`!==i.style.zIndex&&(i.style.zIndex=`${r}`)})}}var ts=new lm;const hr="@@ziContext",cm={mounted(n,e){const{value:t={}}=e,{zIndex:i,enabled:r}=t;n[hr]={enabled:!!r,initialized:!1},r&&(ts.ensureZIndex(n,i),n[hr].initialized=!0)},updated(n,e){const{value:t={}}=e,{zIndex:i,enabled:r}=t,o=n[hr].enabled;r&&!o&&(ts.ensureZIndex(n,i),n[hr].initialized=!0),n[hr].enabled=!!r},unmounted(n,e){if(!n[hr].initialized)return;const{value:t={}}=e,{zIndex:i}=t;ts.unregister(n,i)}};var nh=cm;const ih=Symbol("@css-render/vue3-ssr");function um(n,e){return`<style cssr-id="${n}">
${e}
</style>`}function dm(n,e){const t=vt(ih,null);if(t===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:i,ids:r}=t;r.has(n)||i!==null&&(r.add(n),i.push(um(n,e)))}const hm=typeof document!="undefined";function or(){if(hm)return;const n=vt(ih,null);if(n!==null)return{adapter:dm,context:n}}const{c:_i}=Vd(),Fl="vueuc-style";function mc(n){return n&-n}class fm{constructor(e,t){this.l=e,this.min=t;const i=new Array(e+1);for(let r=0;r<e+1;++r)i[r]=0;this.ft=i}add(e,t){if(t===0)return;const{l:i,ft:r}=this;for(e+=1;e<=i;)r[e]+=t,e+=mc(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===0)return 0;const{ft:t,min:i,l:r}=this;if(e===void 0&&(e=r),e>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let o=e*i;for(;e>0;)o+=t[e],e-=mc(e);return o}getBound(e){let t=0,i=this.l;for(;i>t;){const r=Math.floor((t+i)/2),o=this.sum(r);if(o>e){i=r;continue}else if(o<e){if(t===r)return this.sum(t+1)<=e?t+1:r;t=r}else return r}return t}}function gc(n){return typeof n=="string"?document.querySelector(n):n()}var pm=Be({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(n){return{showTeleport:Gp(nt(n,"show")),mergedTo:he(()=>{const{to:e}=n;return e!=null?e:"body"})}},render(){return this.showTeleport?this.disabled?ol("lazy-teleport",this.$slots):E(Zf,{disabled:this.disabled,to:this.mergedTo},ol("lazy-teleport",this.$slots)):null}});const Uo={top:"bottom",bottom:"top",left:"right",right:"left"},vc={start:"end",center:"center",end:"start"},ns={top:"height",bottom:"height",left:"width",right:"width"},mm={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},gm={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},vm={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},xc={top:!0,bottom:!1,left:!0,right:!1},bc={top:"end",bottom:"start",left:"end",right:"start"};function xm(n,e,t,i,r,o){if(!r||o)return{placement:n,top:0,left:0};const[s,a]=n.split("-");let l=a!=null?a:"center",c={top:0,left:0};const u=(m,g,p)=>{let f=0,v=0;const y=t[m]-e[g]-e[m];return y>0&&i&&(p?v=xc[g]?y:-y:f=xc[g]?y:-y),{left:f,top:v}},d=s==="left"||s==="right";if(l!=="center"){const m=vm[n],g=Uo[m],p=ns[m];if(t[p]>e[p]){if(e[m]+e[p]<t[p]){const f=(t[p]-e[p])/2;e[m]<f||e[g]<f?e[m]<e[g]?(l=vc[a],c=u(p,g,d)):c=u(p,m,d):l="center"}}else t[p]<e[p]&&e[g]<0&&e[m]>e[g]&&(l=vc[a])}else{const m=s==="bottom"||s==="top"?"left":"top",g=Uo[m],p=ns[m],f=(t[p]-e[p])/2;(e[m]<f||e[g]<f)&&(e[m]>e[g]?(l=bc[m],c=u(p,m,d)):(l=bc[g],c=u(p,g,d)))}let h=s;return e[s]<t[ns[s]]&&e[s]<e[Uo[s]]&&(h=Uo[s]),{placement:l!=="center"?`${h}-${l}`:h,left:c.left,top:c.top}}function bm(n,e){return e?gm[n]:mm[n]}function _m(n,e,t,i,r,o){if(o)switch(n){case"bottom-start":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-e.top+t.height/2)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-e.top+t.height/2)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(n){case"bottom-start":return{top:`${Math.round(t.top-e.top+t.height+i)}px`,left:`${Math.round(t.left-e.left+r)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-e.top+t.height+i)}px`,left:`${Math.round(t.left-e.left+t.width+r)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-e.top+i)}px`,left:`${Math.round(t.left-e.left+r)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-e.top+i)}px`,left:`${Math.round(t.left-e.left+t.width+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-e.top+i)}px`,left:`${Math.round(t.left-e.left+t.width+r)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-e.top+t.height+i)}px`,left:`${Math.round(t.left-e.left+t.width+r)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-e.top+i)}px`,left:`${Math.round(t.left-e.left+r)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-e.top+t.height+i)}px`,left:`${Math.round(t.left-e.left+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-e.top+i)}px`,left:`${Math.round(t.left-e.left+t.width/2+r)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-e.top+t.height/2+i)}px`,left:`${Math.round(t.left-e.left+t.width+r)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-e.top+t.height/2+i)}px`,left:`${Math.round(t.left-e.left+r)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-e.top+t.height+i)}px`,left:`${Math.round(t.left-e.left+t.width/2+r)}px`,transform:"translateX(-50%)"}}}const ym=_i([_i(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),_i(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[_i("> *",{pointerEvents:"all"})])]);var Oa=Be({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(n){const e=vt("VBinder"),t=un(()=>n.enabled!==void 0?n.enabled:n.show),i=se(null),r=se(null),o=()=>{const{syncTrigger:h}=n;h.includes("scroll")&&e.addScrollListener(l),h.includes("resize")&&e.addResizeListener(l)},s=()=>{e.removeScrollListener(l),e.removeResizeListener(l)};en(()=>{t.value&&(l(),o())});const a=or();ym.mount({id:"vueuc/binder",head:!0,anchorMetaName:Fl,ssr:a}),tn(()=>{s()}),qp(()=>{t.value&&l()});const l=()=>{if(!t.value)return;const h=i.value;if(h===null)return;const m=e.targetRef,{x:g,y:p,overlap:f}=n,v=g!==void 0&&p!==void 0?tm(g,p):es(m);h.style.setProperty("--v-target-width",`${Math.round(v.width)}px`),h.style.setProperty("--v-target-height",`${Math.round(v.height)}px`);const{width:y,minWidth:T,placement:_,internalShift:M,flip:A}=n;h.setAttribute("v-placement",_),f?h.setAttribute("v-overlap",""):h.removeAttribute("v-overlap");const{style:w}=h;y==="target"?w.width=`${v.width}px`:y!==void 0?w.width=y:w.width="",T==="target"?w.minWidth=`${v.width}px`:T!==void 0?w.minWidth=T:w.minWidth="";const x=es(h),S=es(r.value),{left:R,top:D,placement:$}=xm(_,v,x,M,A,f),Z=bm($,f),{left:L,top:N,transform:O}=_m($,S,v,D,R,f);h.setAttribute("v-placement",$),h.style.setProperty("--v-offset-left",`${Math.round(R)}px`),h.style.setProperty("--v-offset-top",`${Math.round(D)}px`),h.style.transform=`translateX(${L}) translateY(${N}) ${O}`,h.style.transformOrigin=Z};Pt(t,h=>{h?(o(),c()):s()});const c=()=>{Fn().then(l).catch(h=>console.error(h))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(h=>{Pt(nt(n,h),l)}),["teleportDisabled"].forEach(h=>{Pt(nt(n,h),c)}),Pt(nt(n,"syncTrigger"),h=>{h.includes("resize")?e.addResizeListener(l):e.removeResizeListener(l),h.includes("scroll")?e.addScrollListener(l):e.removeScrollListener(l)});const u=Gr(),d=un(()=>{const{to:h}=n;if(h!==void 0)return h;u.value});return{VBinder:e,mergedEnabled:t,offsetContainerRef:r,followerRef:i,mergedTo:d,syncPosition:l}},render(){return E(pm,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var n,e;const t=E("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[E("div",{class:"v-binder-follower-content",ref:"followerRef"},(e=(n=this.$slots).default)===null||e===void 0?void 0:e.call(n))]);return this.zindexable?Vr(t,[[nh,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});const wm=_i(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[_i("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[_i("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]);var Sm=Be({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(n){const e=or();wm.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Fl,ssr:e}),en(()=>{const{defaultScrollIndex:x,defaultScrollKey:S}=n;x!=null?g({index:x}):S!=null&&g({key:S})});let t=!1,i=!1;zd(()=>{if(t=!1,!i){i=!0;return}g({top:d.value,left:u})}),Fd(()=>{t=!0,i||(i=!0)});const r=he(()=>{const x=new Map,{keyField:S}=n;return n.items.forEach((R,D)=>{x.set(R[S],D)}),x}),o=se(null),s=se(void 0),a=new Map,l=he(()=>{const{items:x,itemSize:S,keyField:R}=n,D=new fm(x.length,S);return x.forEach(($,Z)=>{const L=$[R],N=a.get(L);N!==void 0&&D.add(Z,N)}),D}),c=se(0);let u=0;const d=se(0),h=un(()=>Math.max(l.value.getBound(d.value-Wt(n.paddingTop))-1,0)),m=he(()=>{const{value:x}=s;if(x===void 0)return[];const{items:S,itemSize:R}=n,D=h.value,$=Math.min(D+Math.ceil(x/R+1),S.length-1),Z=[];for(let L=D;L<=$;++L)Z.push(S[L]);return Z}),g=x=>{const{left:S,top:R,index:D,key:$,position:Z,behavior:L,debounce:N=!0}=x;if(S!==void 0||R!==void 0)f(S,R,L);else if(D!==void 0)p(D,L,N);else if($!==void 0){const O=r.value.get($);O!==void 0&&p(O,L,N)}else Z==="bottom"?f(0,Number.MAX_SAFE_INTEGER,L):Z==="top"&&f(0,0,L)};function p(x,S,R){const{value:D}=l,$=D.sum(x)+Wt(n.paddingTop);if(!R)o.value.scrollTo({left:0,top:$,behavior:S});else{const{scrollTop:Z,offsetHeight:L}=o.value;if($>Z){const N=D.get(x);$+N<=Z+L||o.value.scrollTo({left:0,top:$+N-L,behavior:S})}else o.value.scrollTo({left:0,top:$,behavior:S})}_=x}function f(x,S,R){o.value.scrollTo({left:x,top:S,behavior:R})}function v(x,S){var R,D,$,Z;if(t||n.ignoreItemResize||w(S.target))return;const{value:L}=l,N=r.value.get(x),O=L.get(N),H=($=(D=(R=S.borderBoxSize)===null||R===void 0?void 0:R[0])===null||D===void 0?void 0:D.blockSize)!==null&&$!==void 0?$:S.contentRect.height;if(H===O)return;H-n.itemSize===0?a.delete(x):a.set(x,H-n.itemSize);const I=H-O;I!==0&&(M!==void 0&&N<=M&&((Z=o.value)===null||Z===void 0||Z.scrollBy(0,I)),L.add(N,I),c.value++)}function y(x){Id(A);const{onScroll:S}=n;S!==void 0&&S(x)}function T(x){if(t||w(x.target)||x.contentRect.height===s.value)return;s.value=x.contentRect.height;const{onResize:S}=n;S!==void 0&&S(x)}let _,M;function A(){const{value:x}=o;x!=null&&(M=_!=null?_:h.value,_=void 0,d.value=o.value.scrollTop,u=o.value.scrollLeft)}function w(x){let S=x;for(;S!==null;){if(S.style.display==="none")return!0;S=S.parentElement}return!1}return{listHeight:s,listStyle:{overflow:"auto"},keyToIndex:r,itemsStyle:he(()=>{const{itemResizable:x}=n,S=Wi(l.value.sum());return c.value,[n.itemsStyle,{boxSizing:"content-box",height:x?"":S,minHeight:x?S:"",paddingTop:Wi(n.paddingTop),paddingBottom:Wi(n.paddingBottom)}]}),visibleItemsStyle:he(()=>(c.value,{transform:`translateY(${Wi(l.value.sum(h.value))})`})),viewportItems:m,listElRef:o,itemsElRef:se(null),scrollTo:g,handleListResize:T,handleListScroll:y,handleItemResize:v}},render(){const{itemResizable:n,keyField:e,keyToIndex:t,visibleItemsTag:i}=this;return E(xo,{onResize:this.handleListResize},{default:()=>{var r,o;return E("div",Tl(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.onWheel,ref:"listElRef"}),[this.items.length!==0?E("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[E(i,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(s=>{const a=s[e],l=t.get(a),c=this.$slots.default({item:s,index:l})[0];return n?E(xo,{key:a,onResize:u=>this.handleItemResize(a,u)},{default:()=>c}):(c.key=a,c)})})]):(o=(r=this.$slots).empty)===null||o===void 0?void 0:o.call(r)])}})}});const Ii="v-hidden",Mm=_i("[v-hidden]",{display:"none!important"});var _c=Be({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(n,{slots:e}){const t=se(null),i=se(null);function r(){const{value:s}=t,{getCounter:a,getTail:l}=n;let c;if(a!==void 0?c=a():c=i.value,!s||!c)return;c.hasAttribute(Ii)&&c.removeAttribute(Ii);const{children:u}=s,d=s.offsetWidth,h=[],m=e.tail?l==null?void 0:l():null;let g=m?m.offsetWidth:0,p=!1;const f=s.children.length-(e.tail?1:0);for(let y=0;y<f-1;++y){if(y<0)continue;const T=u[y];if(p){T.hasAttribute(Ii)||T.setAttribute(Ii,"");continue}else T.hasAttribute(Ii)&&T.removeAttribute(Ii);const _=T.offsetWidth;if(g+=_,h[y]=_,g>d){const{updateCounter:M}=n;for(let A=y;A>=0;--A){const w=f-1-A;M!==void 0?M(w):c.textContent=`${w}`;const x=c.offsetWidth;if(g-=h[A],g+x<=d||A===0){p=!0,y=A-1,m&&(y===-1?(m.style.maxWidth=`${d-x}px`,m.style.boxSizing="border-box"):m.style.maxWidth="");break}}}}const{onUpdateOverflow:v}=n;p?v!==void 0&&v(!0):(v!==void 0&&v(!1),c.setAttribute(Ii,""))}const o=or();return Mm.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Fl,ssr:o}),en(r),{selfRef:t,counterRef:i,sync:r}},render(){const{$slots:n}=this;return Fn(this.sync),E("div",{class:"v-overflow",ref:"selfRef"},[Jf(n,"default"),n.counter?n.counter():E("span",{style:{display:"inline-block"},ref:"counterRef"}),n.tail?n.tail():null])}});function rh(n){return n instanceof HTMLElement}function oh(n){for(let e=0;e<n.childNodes.length;e++){const t=n.childNodes[e];if(rh(t)&&(sh(t)||oh(t)))return!0}return!1}function ah(n){for(let e=n.childNodes.length-1;e>=0;e--){const t=n.childNodes[e];if(rh(t)&&(sh(t)||ah(t)))return!0}return!1}function sh(n){if(!Cm(n))return!1;try{n.focus({preventScroll:!0})}catch{}return document.activeElement===n}function Cm(n){if(n.tabIndex>0||n.tabIndex===0&&n.getAttribute("tabIndex")!==null)return!0;if(n.getAttribute("disabled"))return!1;switch(n.nodeName){case"A":return!!n.href&&n.rel!=="ignore";case"INPUT":return n.type!=="hidden"&&n.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let io=[];const Tm=Be({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(n){const e=mp(),t=se(null),i=se(null);let r=!1,o=!1;const s=document.activeElement;function a(){return io[io.length-1]===e}function l(f){var v;f.code==="Escape"&&a()&&((v=n.onEsc)===null||v===void 0||v.call(n))}en(()=>{Pt(()=>n.active,f=>{f?(d(),ct("keydown",document,l)):(at("keydown",document,l),r&&h())},{immediate:!0})}),tn(()=>{at("keydown",document,l),r&&h()});function c(f){if(!o&&a()){const v=u();if(v===null||v.contains(f.target))return;m("first")}}function u(){const f=t.value;if(f===null)return null;let v=f;for(;v=v.nextSibling,!(v===null||v instanceof Element&&v.tagName==="DIV"););return v}function d(){var f;if(!n.disabled){if(io.push(e),n.autoFocus){const{initialFocusTo:v}=n;v===void 0?m("first"):(f=gc(v))===null||f===void 0||f.focus({preventScroll:!0})}r=!0,document.addEventListener("focus",c,!0)}}function h(){var f;if(n.disabled||(document.removeEventListener("focus",c,!0),io=io.filter(y=>y!==e),a()))return;const{finalFocusTo:v}=n;v!==void 0?(f=gc(v))===null||f===void 0||f.focus({preventScroll:!0}):n.returnFocusOnDeactivated&&s instanceof HTMLElement&&(o=!0,s.focus({preventScroll:!0}),o=!1)}function m(f){if(!!a()&&n.active){const v=t.value,y=i.value;if(v!==null&&y!==null){const T=u();if(T==null||T===y){o=!0,v.focus({preventScroll:!0}),o=!1;return}o=!0;const _=f==="first"?oh(T):ah(T);o=!1,_||(o=!0,v.focus({preventScroll:!0}),o=!1)}}}function g(f){if(o)return;const v=u();v!==null&&(f.relatedTarget!==null&&v.contains(f.relatedTarget)?m("last"):m("first"))}function p(f){o||(f.relatedTarget!==null&&f.relatedTarget===t.value?m("last"):m("first"))}return{focusableStartRef:t,focusableEndRef:i,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:g,handleEndFocus:p}},render(){const{default:n}=this.$slots;if(n===void 0)return null;if(this.disabled)return n();const{active:e,focusableStyle:t}=this;return E(Tn,null,[E("div",{"aria-hidden":"true",tabindex:e?"0":"-1",ref:"focusableStartRef",style:t,onFocus:this.handleStartFocus}),n(),E("div",{"aria-hidden":"true",style:t,ref:"focusableEndRef",tabindex:e?"0":"-1",onFocus:this.handleEndFocus})])}});function lh(n,e){e&&(en(()=>{const{value:t}=n;t&&sc.registerHandler(t,e)}),tn(()=>{const{value:t}=n;t&&sc.unregisterHandler(t)}))}const yc=$n("n-form-item");function jr(n,{defaultSize:e="medium",mergedSize:t,mergedDisabled:i}={}){const r=vt(yc,null);Sn(yc,null);const o=he(t?()=>t(r):()=>{const{size:l}=n;if(l)return l;if(r){const{mergedSize:c}=r;if(c.value!==void 0)return c.value}return e}),s=he(i?()=>i(r):()=>{const{disabled:l}=n;return l!==void 0?l:r?r.disabled.value:!1}),a=he(()=>{const{status:l}=n;return l||(r==null?void 0:r.mergedValidationStatus.value)});return tn(()=>{r&&r.restoreValidation()}),{mergedSizeRef:o,mergedDisabledRef:s,mergedStatusRef:a,nTriggerFormBlur(){r&&r.handleContentBlur()},nTriggerFormChange(){r&&r.handleContentChange()},nTriggerFormFocus(){r&&r.handleContentFocus()},nTriggerFormInput(){r&&r.handleContentInput()}}}var Em=typeof global=="object"&&global&&global.Object===Object&&global,ch=Em,Am=typeof self=="object"&&self&&self.Object===Object&&self,Pm=ch||Am||Function("return this")(),Vn=Pm,Rm=Vn.Symbol,Ai=Rm,uh=Object.prototype,Lm=uh.hasOwnProperty,Dm=uh.toString,ro=Ai?Ai.toStringTag:void 0;function Im(n){var e=Lm.call(n,ro),t=n[ro];try{n[ro]=void 0;var i=!0}catch{}var r=Dm.call(n);return i&&(e?n[ro]=t:delete n[ro]),r}var zm=Object.prototype,Fm=zm.toString;function km(n){return Fm.call(n)}var Bm="[object Null]",Om="[object Undefined]",wc=Ai?Ai.toStringTag:void 0;function ar(n){return n==null?n===void 0?Om:Bm:wc&&wc in Object(n)?Im(n):km(n)}function Pi(n){return n!=null&&typeof n=="object"}var Nm="[object Symbol]";function kl(n){return typeof n=="symbol"||Pi(n)&&ar(n)==Nm}function dh(n,e){for(var t=-1,i=n==null?0:n.length,r=Array(i);++t<i;)r[t]=e(n[t],t,n);return r}var $m=Array.isArray,fn=$m,Um=1/0,Sc=Ai?Ai.prototype:void 0,Mc=Sc?Sc.toString:void 0;function hh(n){if(typeof n=="string")return n;if(fn(n))return dh(n,hh)+"";if(kl(n))return Mc?Mc.call(n):"";var e=n+"";return e=="0"&&1/n==-Um?"-0":e}function Ri(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}function Bl(n){return n}var Hm="[object AsyncFunction]",Vm="[object Function]",Wm="[object GeneratorFunction]",Gm="[object Proxy]";function Ol(n){if(!Ri(n))return!1;var e=ar(n);return e==Vm||e==Wm||e==Hm||e==Gm}var jm=Vn["__core-js_shared__"],is=jm,Cc=function(){var n=/[^.]+$/.exec(is&&is.keys&&is.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function qm(n){return!!Cc&&Cc in n}var Xm=Function.prototype,Ym=Xm.toString;function sr(n){if(n!=null){try{return Ym.call(n)}catch{}try{return n+""}catch{}}return""}var Km=/[\\^$.*+?()[\]{}|]/g,Zm=/^\[object .+?Constructor\]$/,Jm=Function.prototype,Qm=Object.prototype,eg=Jm.toString,tg=Qm.hasOwnProperty,ng=RegExp("^"+eg.call(tg).replace(Km,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ig(n){if(!Ri(n)||qm(n))return!1;var e=Ol(n)?ng:Zm;return e.test(sr(n))}function rg(n,e){return n==null?void 0:n[e]}function lr(n,e){var t=rg(n,e);return ig(t)?t:void 0}var og=lr(Vn,"WeakMap"),sl=og,Tc=Object.create,ag=function(){function n(){}return function(e){if(!Ri(e))return{};if(Tc)return Tc(e);n.prototype=e;var t=new n;return n.prototype=void 0,t}}(),sg=ag;function lg(n,e,t){switch(t.length){case 0:return n.call(e);case 1:return n.call(e,t[0]);case 2:return n.call(e,t[0],t[1]);case 3:return n.call(e,t[0],t[1],t[2])}return n.apply(e,t)}function cg(n,e){var t=-1,i=n.length;for(e||(e=Array(i));++t<i;)e[t]=n[t];return e}var ug=800,dg=16,hg=Date.now;function fg(n){var e=0,t=0;return function(){var i=hg(),r=dg-(i-t);if(t=i,r>0){if(++e>=ug)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}function pg(n){return function(){return n}}var mg=function(){try{var n=lr(Object,"defineProperty");return n({},"",{}),n}catch{}}(),Ca=mg,gg=Ca?function(n,e){return Ca(n,"toString",{configurable:!0,enumerable:!1,value:pg(e),writable:!0})}:Bl,vg=gg,xg=fg(vg),bg=xg,_g=9007199254740991,yg=/^(?:0|[1-9]\d*)$/;function Nl(n,e){var t=typeof n;return e=e==null?_g:e,!!e&&(t=="number"||t!="symbol"&&yg.test(n))&&n>-1&&n%1==0&&n<e}function $l(n,e,t){e=="__proto__"&&Ca?Ca(n,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):n[e]=t}function Po(n,e){return n===e||n!==n&&e!==e}var wg=Object.prototype,Sg=wg.hasOwnProperty;function Mg(n,e,t){var i=n[e];(!(Sg.call(n,e)&&Po(i,t))||t===void 0&&!(e in n))&&$l(n,e,t)}function Cg(n,e,t,i){var r=!t;t||(t={});for(var o=-1,s=e.length;++o<s;){var a=e[o],l=i?i(t[a],n[a],a,t,n):void 0;l===void 0&&(l=n[a]),r?$l(t,a,l):Mg(t,a,l)}return t}var Ec=Math.max;function Tg(n,e,t){return e=Ec(e===void 0?n.length-1:e,0),function(){for(var i=arguments,r=-1,o=Ec(i.length-e,0),s=Array(o);++r<o;)s[r]=i[e+r];r=-1;for(var a=Array(e+1);++r<e;)a[r]=i[r];return a[e]=t(s),lg(n,this,a)}}function Eg(n,e){return bg(Tg(n,e,Bl),n+"")}var Ag=9007199254740991;function Ul(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Ag}function qr(n){return n!=null&&Ul(n.length)&&!Ol(n)}function Pg(n,e,t){if(!Ri(t))return!1;var i=typeof e;return(i=="number"?qr(t)&&Nl(e,t.length):i=="string"&&e in t)?Po(t[e],n):!1}function Rg(n){return Eg(function(e,t){var i=-1,r=t.length,o=r>1?t[r-1]:void 0,s=r>2?t[2]:void 0;for(o=n.length>3&&typeof o=="function"?(r--,o):void 0,s&&Pg(t[0],t[1],s)&&(o=r<3?void 0:o,r=1),e=Object(e);++i<r;){var a=t[i];a&&n(e,a,i,o)}return e})}var Lg=Object.prototype;function Hl(n){var e=n&&n.constructor,t=typeof e=="function"&&e.prototype||Lg;return n===t}function Dg(n,e){for(var t=-1,i=Array(n);++t<n;)i[t]=e(t);return i}var Ig="[object Arguments]";function Ac(n){return Pi(n)&&ar(n)==Ig}var fh=Object.prototype,zg=fh.hasOwnProperty,Fg=fh.propertyIsEnumerable,kg=Ac(function(){return arguments}())?Ac:function(n){return Pi(n)&&zg.call(n,"callee")&&!Fg.call(n,"callee")},Ta=kg;function Bg(){return!1}var ph=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Pc=ph&&typeof module=="object"&&module&&!module.nodeType&&module,Og=Pc&&Pc.exports===ph,Rc=Og?Vn.Buffer:void 0,Ng=Rc?Rc.isBuffer:void 0,$g=Ng||Bg,Ea=$g,Ug="[object Arguments]",Hg="[object Array]",Vg="[object Boolean]",Wg="[object Date]",Gg="[object Error]",jg="[object Function]",qg="[object Map]",Xg="[object Number]",Yg="[object Object]",Kg="[object RegExp]",Zg="[object Set]",Jg="[object String]",Qg="[object WeakMap]",ev="[object ArrayBuffer]",tv="[object DataView]",nv="[object Float32Array]",iv="[object Float64Array]",rv="[object Int8Array]",ov="[object Int16Array]",av="[object Int32Array]",sv="[object Uint8Array]",lv="[object Uint8ClampedArray]",cv="[object Uint16Array]",uv="[object Uint32Array]",ht={};ht[nv]=ht[iv]=ht[rv]=ht[ov]=ht[av]=ht[sv]=ht[lv]=ht[cv]=ht[uv]=!0;ht[Ug]=ht[Hg]=ht[ev]=ht[Vg]=ht[tv]=ht[Wg]=ht[Gg]=ht[jg]=ht[qg]=ht[Xg]=ht[Yg]=ht[Kg]=ht[Zg]=ht[Jg]=ht[Qg]=!1;function dv(n){return Pi(n)&&Ul(n.length)&&!!ht[ar(n)]}function hv(n){return function(e){return n(e)}}var mh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,vo=mh&&typeof module=="object"&&module&&!module.nodeType&&module,fv=vo&&vo.exports===mh,rs=fv&&ch.process,pv=function(){try{var n=vo&&vo.require&&vo.require("util").types;return n||rs&&rs.binding&&rs.binding("util")}catch{}}(),Lc=pv,Dc=Lc&&Lc.isTypedArray,mv=Dc?hv(Dc):dv,Vl=mv,gv=Object.prototype,vv=gv.hasOwnProperty;function gh(n,e){var t=fn(n),i=!t&&Ta(n),r=!t&&!i&&Ea(n),o=!t&&!i&&!r&&Vl(n),s=t||i||r||o,a=s?Dg(n.length,String):[],l=a.length;for(var c in n)(e||vv.call(n,c))&&!(s&&(c=="length"||r&&(c=="offset"||c=="parent")||o&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Nl(c,l)))&&a.push(c);return a}function vh(n,e){return function(t){return n(e(t))}}var xv=vh(Object.keys,Object),bv=xv,_v=Object.prototype,yv=_v.hasOwnProperty;function wv(n){if(!Hl(n))return bv(n);var e=[];for(var t in Object(n))yv.call(n,t)&&t!="constructor"&&e.push(t);return e}function Wl(n){return qr(n)?gh(n):wv(n)}function Sv(n){var e=[];if(n!=null)for(var t in Object(n))e.push(t);return e}var Mv=Object.prototype,Cv=Mv.hasOwnProperty;function Tv(n){if(!Ri(n))return Sv(n);var e=Hl(n),t=[];for(var i in n)i=="constructor"&&(e||!Cv.call(n,i))||t.push(i);return t}function xh(n){return qr(n)?gh(n,!0):Tv(n)}var Ev=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Av=/^\w*$/;function Gl(n,e){if(fn(n))return!1;var t=typeof n;return t=="number"||t=="symbol"||t=="boolean"||n==null||kl(n)?!0:Av.test(n)||!Ev.test(n)||e!=null&&n in Object(e)}var Pv=lr(Object,"create"),_o=Pv;function Rv(){this.__data__=_o?_o(null):{},this.size=0}function Lv(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}var Dv="__lodash_hash_undefined__",Iv=Object.prototype,zv=Iv.hasOwnProperty;function Fv(n){var e=this.__data__;if(_o){var t=e[n];return t===Dv?void 0:t}return zv.call(e,n)?e[n]:void 0}var kv=Object.prototype,Bv=kv.hasOwnProperty;function Ov(n){var e=this.__data__;return _o?e[n]!==void 0:Bv.call(e,n)}var Nv="__lodash_hash_undefined__";function $v(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=_o&&e===void 0?Nv:e,this}function tr(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}tr.prototype.clear=Rv;tr.prototype.delete=Lv;tr.prototype.get=Fv;tr.prototype.has=Ov;tr.prototype.set=$v;function Uv(){this.__data__=[],this.size=0}function Na(n,e){for(var t=n.length;t--;)if(Po(n[t][0],e))return t;return-1}var Hv=Array.prototype,Vv=Hv.splice;function Wv(n){var e=this.__data__,t=Na(e,n);if(t<0)return!1;var i=e.length-1;return t==i?e.pop():Vv.call(e,t,1),--this.size,!0}function Gv(n){var e=this.__data__,t=Na(e,n);return t<0?void 0:e[t][1]}function jv(n){return Na(this.__data__,n)>-1}function qv(n,e){var t=this.__data__,i=Na(t,n);return i<0?(++this.size,t.push([n,e])):t[i][1]=e,this}function ri(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}ri.prototype.clear=Uv;ri.prototype.delete=Wv;ri.prototype.get=Gv;ri.prototype.has=jv;ri.prototype.set=qv;var Xv=lr(Vn,"Map"),yo=Xv;function Yv(){this.size=0,this.__data__={hash:new tr,map:new(yo||ri),string:new tr}}function Kv(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}function $a(n,e){var t=n.__data__;return Kv(e)?t[typeof e=="string"?"string":"hash"]:t.map}function Zv(n){var e=$a(this,n).delete(n);return this.size-=e?1:0,e}function Jv(n){return $a(this,n).get(n)}function Qv(n){return $a(this,n).has(n)}function e0(n,e){var t=$a(this,n),i=t.size;return t.set(n,e),this.size+=t.size==i?0:1,this}function oi(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}oi.prototype.clear=Yv;oi.prototype.delete=Zv;oi.prototype.get=Jv;oi.prototype.has=Qv;oi.prototype.set=e0;var t0="Expected a function";function jl(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(t0);var t=function(){var i=arguments,r=e?e.apply(this,i):i[0],o=t.cache;if(o.has(r))return o.get(r);var s=n.apply(this,i);return t.cache=o.set(r,s)||o,s};return t.cache=new(jl.Cache||oi),t}jl.Cache=oi;var n0=500;function i0(n){var e=jl(n,function(i){return t.size===n0&&t.clear(),i}),t=e.cache;return e}var r0=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o0=/\\(\\)?/g,a0=i0(function(n){var e=[];return n.charCodeAt(0)===46&&e.push(""),n.replace(r0,function(t,i,r,o){e.push(r?o.replace(o0,"$1"):i||t)}),e}),s0=a0;function bh(n){return n==null?"":hh(n)}function _h(n,e){return fn(n)?n:Gl(n,e)?[n]:s0(bh(n))}var l0=1/0;function Ua(n){if(typeof n=="string"||kl(n))return n;var e=n+"";return e=="0"&&1/n==-l0?"-0":e}function yh(n,e){e=_h(e,n);for(var t=0,i=e.length;n!=null&&t<i;)n=n[Ua(e[t++])];return t&&t==i?n:void 0}function c0(n,e,t){var i=n==null?void 0:yh(n,e);return i===void 0?t:i}function u0(n,e){for(var t=-1,i=e.length,r=n.length;++t<i;)n[r+t]=e[t];return n}var d0=vh(Object.getPrototypeOf,Object),wh=d0,h0="[object Object]",f0=Function.prototype,p0=Object.prototype,Sh=f0.toString,m0=p0.hasOwnProperty,g0=Sh.call(Object);function v0(n){if(!Pi(n)||ar(n)!=h0)return!1;var e=wh(n);if(e===null)return!0;var t=m0.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Sh.call(t)==g0}function x0(n,e,t){var i=-1,r=n.length;e<0&&(e=-e>r?0:r+e),t=t>r?r:t,t<0&&(t+=r),r=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(r);++i<r;)o[i]=n[i+e];return o}function b0(n,e,t){var i=n.length;return t=t===void 0?i:t,!e&&t>=i?n:x0(n,e,t)}var _0="\\ud800-\\udfff",y0="\\u0300-\\u036f",w0="\\ufe20-\\ufe2f",S0="\\u20d0-\\u20ff",M0=y0+w0+S0,C0="\\ufe0e\\ufe0f",T0="\\u200d",E0=RegExp("["+T0+_0+M0+C0+"]");function Mh(n){return E0.test(n)}function A0(n){return n.split("")}var Ch="\\ud800-\\udfff",P0="\\u0300-\\u036f",R0="\\ufe20-\\ufe2f",L0="\\u20d0-\\u20ff",D0=P0+R0+L0,I0="\\ufe0e\\ufe0f",z0="["+Ch+"]",ll="["+D0+"]",cl="\\ud83c[\\udffb-\\udfff]",F0="(?:"+ll+"|"+cl+")",Th="[^"+Ch+"]",Eh="(?:\\ud83c[\\udde6-\\uddff]){2}",Ah="[\\ud800-\\udbff][\\udc00-\\udfff]",k0="\\u200d",Ph=F0+"?",Rh="["+I0+"]?",B0="(?:"+k0+"(?:"+[Th,Eh,Ah].join("|")+")"+Rh+Ph+")*",O0=Rh+Ph+B0,N0="(?:"+[Th+ll+"?",ll,Eh,Ah,z0].join("|")+")",$0=RegExp(cl+"(?="+cl+")|"+N0+O0,"g");function U0(n){return n.match($0)||[]}function H0(n){return Mh(n)?U0(n):A0(n)}function V0(n){return function(e){e=bh(e);var t=Mh(e)?H0(e):void 0,i=t?t[0]:e.charAt(0),r=t?b0(t,1).join(""):e.slice(1);return i[n]()+r}}var W0=V0("toUpperCase"),G0=W0;function j0(){this.__data__=new ri,this.size=0}function q0(n){var e=this.__data__,t=e.delete(n);return this.size=e.size,t}function X0(n){return this.__data__.get(n)}function Y0(n){return this.__data__.has(n)}var K0=200;function Z0(n,e){var t=this.__data__;if(t instanceof ri){var i=t.__data__;if(!yo||i.length<K0-1)return i.push([n,e]),this.size=++t.size,this;t=this.__data__=new oi(i)}return t.set(n,e),this.size=t.size,this}function Bn(n){var e=this.__data__=new ri(n);this.size=e.size}Bn.prototype.clear=j0;Bn.prototype.delete=q0;Bn.prototype.get=X0;Bn.prototype.has=Y0;Bn.prototype.set=Z0;var Lh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ic=Lh&&typeof module=="object"&&module&&!module.nodeType&&module,J0=Ic&&Ic.exports===Lh,zc=J0?Vn.Buffer:void 0,Fc=zc?zc.allocUnsafe:void 0;function Q0(n,e){if(e)return n.slice();var t=n.length,i=Fc?Fc(t):new n.constructor(t);return n.copy(i),i}function ex(n,e){for(var t=-1,i=n==null?0:n.length,r=0,o=[];++t<i;){var s=n[t];e(s,t,n)&&(o[r++]=s)}return o}function tx(){return[]}var nx=Object.prototype,ix=nx.propertyIsEnumerable,kc=Object.getOwnPropertySymbols,rx=kc?function(n){return n==null?[]:(n=Object(n),ex(kc(n),function(e){return ix.call(n,e)}))}:tx,ox=rx;function ax(n,e,t){var i=e(n);return fn(n)?i:u0(i,t(n))}function Bc(n){return ax(n,Wl,ox)}var sx=lr(Vn,"DataView"),ul=sx,lx=lr(Vn,"Promise"),dl=lx,cx=lr(Vn,"Set"),hl=cx,Oc="[object Map]",ux="[object Object]",Nc="[object Promise]",$c="[object Set]",Uc="[object WeakMap]",Hc="[object DataView]",dx=sr(ul),hx=sr(yo),fx=sr(dl),px=sr(hl),mx=sr(sl),$i=ar;(ul&&$i(new ul(new ArrayBuffer(1)))!=Hc||yo&&$i(new yo)!=Oc||dl&&$i(dl.resolve())!=Nc||hl&&$i(new hl)!=$c||sl&&$i(new sl)!=Uc)&&($i=function(n){var e=ar(n),t=e==ux?n.constructor:void 0,i=t?sr(t):"";if(i)switch(i){case dx:return Hc;case hx:return Oc;case fx:return Nc;case px:return $c;case mx:return Uc}return e});var Vc=$i,gx=Vn.Uint8Array,Aa=gx;function vx(n){var e=new n.constructor(n.byteLength);return new Aa(e).set(new Aa(n)),e}function xx(n,e){var t=e?vx(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.length)}function bx(n){return typeof n.constructor=="function"&&!Hl(n)?sg(wh(n)):{}}var _x="__lodash_hash_undefined__";function yx(n){return this.__data__.set(n,_x),this}function wx(n){return this.__data__.has(n)}function Pa(n){var e=-1,t=n==null?0:n.length;for(this.__data__=new oi;++e<t;)this.add(n[e])}Pa.prototype.add=Pa.prototype.push=yx;Pa.prototype.has=wx;function Sx(n,e){for(var t=-1,i=n==null?0:n.length;++t<i;)if(e(n[t],t,n))return!0;return!1}function Mx(n,e){return n.has(e)}var Cx=1,Tx=2;function Dh(n,e,t,i,r,o){var s=t&Cx,a=n.length,l=e.length;if(a!=l&&!(s&&l>a))return!1;var c=o.get(n),u=o.get(e);if(c&&u)return c==e&&u==n;var d=-1,h=!0,m=t&Tx?new Pa:void 0;for(o.set(n,e),o.set(e,n);++d<a;){var g=n[d],p=e[d];if(i)var f=s?i(p,g,d,e,n,o):i(g,p,d,n,e,o);if(f!==void 0){if(f)continue;h=!1;break}if(m){if(!Sx(e,function(v,y){if(!Mx(m,y)&&(g===v||r(g,v,t,i,o)))return m.push(y)})){h=!1;break}}else if(!(g===p||r(g,p,t,i,o))){h=!1;break}}return o.delete(n),o.delete(e),h}function Ex(n){var e=-1,t=Array(n.size);return n.forEach(function(i,r){t[++e]=[r,i]}),t}function Ax(n){var e=-1,t=Array(n.size);return n.forEach(function(i){t[++e]=i}),t}var Px=1,Rx=2,Lx="[object Boolean]",Dx="[object Date]",Ix="[object Error]",zx="[object Map]",Fx="[object Number]",kx="[object RegExp]",Bx="[object Set]",Ox="[object String]",Nx="[object Symbol]",$x="[object ArrayBuffer]",Ux="[object DataView]",Wc=Ai?Ai.prototype:void 0,os=Wc?Wc.valueOf:void 0;function Hx(n,e,t,i,r,o,s){switch(t){case Ux:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case $x:return!(n.byteLength!=e.byteLength||!o(new Aa(n),new Aa(e)));case Lx:case Dx:case Fx:return Po(+n,+e);case Ix:return n.name==e.name&&n.message==e.message;case kx:case Ox:return n==e+"";case zx:var a=Ex;case Bx:var l=i&Px;if(a||(a=Ax),n.size!=e.size&&!l)return!1;var c=s.get(n);if(c)return c==e;i|=Rx,s.set(n,e);var u=Dh(a(n),a(e),i,r,o,s);return s.delete(n),u;case Nx:if(os)return os.call(n)==os.call(e)}return!1}var Vx=1,Wx=Object.prototype,Gx=Wx.hasOwnProperty;function jx(n,e,t,i,r,o){var s=t&Vx,a=Bc(n),l=a.length,c=Bc(e),u=c.length;if(l!=u&&!s)return!1;for(var d=l;d--;){var h=a[d];if(!(s?h in e:Gx.call(e,h)))return!1}var m=o.get(n),g=o.get(e);if(m&&g)return m==e&&g==n;var p=!0;o.set(n,e),o.set(e,n);for(var f=s;++d<l;){h=a[d];var v=n[h],y=e[h];if(i)var T=s?i(y,v,h,e,n,o):i(v,y,h,n,e,o);if(!(T===void 0?v===y||r(v,y,t,i,o):T)){p=!1;break}f||(f=h=="constructor")}if(p&&!f){var _=n.constructor,M=e.constructor;_!=M&&"constructor"in n&&"constructor"in e&&!(typeof _=="function"&&_ instanceof _&&typeof M=="function"&&M instanceof M)&&(p=!1)}return o.delete(n),o.delete(e),p}var qx=1,Gc="[object Arguments]",jc="[object Array]",Ho="[object Object]",Xx=Object.prototype,qc=Xx.hasOwnProperty;function Yx(n,e,t,i,r,o){var s=fn(n),a=fn(e),l=s?jc:Vc(n),c=a?jc:Vc(e);l=l==Gc?Ho:l,c=c==Gc?Ho:c;var u=l==Ho,d=c==Ho,h=l==c;if(h&&Ea(n)){if(!Ea(e))return!1;s=!0,u=!1}if(h&&!u)return o||(o=new Bn),s||Vl(n)?Dh(n,e,t,i,r,o):Hx(n,e,l,t,i,r,o);if(!(t&qx)){var m=u&&qc.call(n,"__wrapped__"),g=d&&qc.call(e,"__wrapped__");if(m||g){var p=m?n.value():n,f=g?e.value():e;return o||(o=new Bn),r(p,f,t,i,o)}}return h?(o||(o=new Bn),jx(n,e,t,i,r,o)):!1}function ql(n,e,t,i,r){return n===e?!0:n==null||e==null||!Pi(n)&&!Pi(e)?n!==n&&e!==e:Yx(n,e,t,i,ql,r)}var Kx=1,Zx=2;function Jx(n,e,t,i){var r=t.length,o=r,s=!i;if(n==null)return!o;for(n=Object(n);r--;){var a=t[r];if(s&&a[2]?a[1]!==n[a[0]]:!(a[0]in n))return!1}for(;++r<o;){a=t[r];var l=a[0],c=n[l],u=a[1];if(s&&a[2]){if(c===void 0&&!(l in n))return!1}else{var d=new Bn;if(i)var h=i(c,u,l,n,e,d);if(!(h===void 0?ql(u,c,Kx|Zx,i,d):h))return!1}}return!0}function Ih(n){return n===n&&!Ri(n)}function Qx(n){for(var e=Wl(n),t=e.length;t--;){var i=e[t],r=n[i];e[t]=[i,r,Ih(r)]}return e}function zh(n,e){return function(t){return t==null?!1:t[n]===e&&(e!==void 0||n in Object(t))}}function eb(n){var e=Qx(n);return e.length==1&&e[0][2]?zh(e[0][0],e[0][1]):function(t){return t===n||Jx(t,n,e)}}function tb(n,e){return n!=null&&e in Object(n)}function nb(n,e,t){e=_h(e,n);for(var i=-1,r=e.length,o=!1;++i<r;){var s=Ua(e[i]);if(!(o=n!=null&&t(n,s)))break;n=n[s]}return o||++i!=r?o:(r=n==null?0:n.length,!!r&&Ul(r)&&Nl(s,r)&&(fn(n)||Ta(n)))}function ib(n,e){return n!=null&&nb(n,e,tb)}var rb=1,ob=2;function ab(n,e){return Gl(n)&&Ih(e)?zh(Ua(n),e):function(t){var i=c0(t,n);return i===void 0&&i===e?ib(t,n):ql(e,i,rb|ob)}}function sb(n){return function(e){return e==null?void 0:e[n]}}function lb(n){return function(e){return yh(e,n)}}function cb(n){return Gl(n)?sb(Ua(n)):lb(n)}function ub(n){return typeof n=="function"?n:n==null?Bl:typeof n=="object"?fn(n)?ab(n[0],n[1]):eb(n):cb(n)}function db(n){return function(e,t,i){for(var r=-1,o=Object(e),s=i(e),a=s.length;a--;){var l=s[n?a:++r];if(t(o[l],l,o)===!1)break}return e}}var hb=db(),Fh=hb;function fb(n,e){return n&&Fh(n,e,Wl)}function pb(n,e){return function(t,i){if(t==null)return t;if(!qr(t))return n(t,i);for(var r=t.length,o=e?r:-1,s=Object(t);(e?o--:++o<r)&&i(s[o],o,s)!==!1;);return t}}var mb=pb(fb),gb=mb;function fl(n,e,t){(t!==void 0&&!Po(n[e],t)||t===void 0&&!(e in n))&&$l(n,e,t)}function vb(n){return Pi(n)&&qr(n)}function pl(n,e){if(!(e==="constructor"&&typeof n[e]=="function")&&e!="__proto__")return n[e]}function xb(n){return Cg(n,xh(n))}function bb(n,e,t,i,r,o,s){var a=pl(n,t),l=pl(e,t),c=s.get(l);if(c){fl(n,t,c);return}var u=o?o(a,l,t+"",n,e,s):void 0,d=u===void 0;if(d){var h=fn(l),m=!h&&Ea(l),g=!h&&!m&&Vl(l);u=l,h||m||g?fn(a)?u=a:vb(a)?u=cg(a):m?(d=!1,u=Q0(l,!0)):g?(d=!1,u=xx(l,!0)):u=[]:v0(l)||Ta(l)?(u=a,Ta(a)?u=xb(a):(!Ri(a)||Ol(a))&&(u=bx(l))):d=!1}d&&(s.set(l,u),r(u,l,i,o,s),s.delete(l)),fl(n,t,u)}function kh(n,e,t,i,r){n!==e&&Fh(e,function(o,s){if(r||(r=new Bn),Ri(o))bb(n,e,s,t,kh,i,r);else{var a=i?i(pl(n,s),o,s+"",n,e,r):void 0;a===void 0&&(a=o),fl(n,s,a)}},xh)}function _b(n,e){var t=-1,i=qr(n)?Array(n.length):[];return gb(n,function(r,o,s){i[++t]=e(r,o,s)}),i}function yb(n,e){var t=fn(n)?dh:_b;return t(n,ub(e))}var wb=Rg(function(n,e,t){kh(n,e,t)}),Vo=wb,Xr={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"};const{fontSize:Sb,fontFamily:Mb,lineHeight:Cb}=Xr;var Bh=ue("body",`
 margin: 0;
 font-size: ${Sb};
 font-family: ${Mb};
 line-height: ${Cb};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[ue("input",`
 font-family: inherit;
 font-size: inherit;
 `)]);const wo="naive-ui-style";function st(n,e,t,i,r,o){const s=or(),a=vt(Wr,null);if(t){const c=()=>{const u=o==null?void 0:o.value;t.mount({id:u===void 0?e:u+e,head:!0,props:{bPrefix:u?`.${u}-`:void 0},anchorMetaName:wo,ssr:s}),a!=null&&a.preflightStyleDisabled||Bh.mount({id:"n-global",head:!0,anchorMetaName:wo,ssr:s})};s?c():El(c)}return he(()=>{var c;const{theme:{common:u,self:d,peers:h={}}={},themeOverrides:m={},builtinThemeOverrides:g={}}=r,{common:p,peers:f}=m,{common:v=void 0,[n]:{common:y=void 0,self:T=void 0,peers:_={}}={}}=(a==null?void 0:a.mergedThemeRef.value)||{},{common:M=void 0,[n]:A={}}=(a==null?void 0:a.mergedThemeOverridesRef.value)||{},{common:w,peers:x={}}=A,S=Vo({},u||y||v||i.common,M,w,p),R=Vo((c=d||T||i.self)===null||c===void 0?void 0:c(S),g,A,m);return{common:S,self:R,peers:Vo({},i.peers,_,h),peerOverrides:Vo({},x,f)}})}st.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const Tb={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:n=>`Please load all ${n}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},Transfer:{sourceTitle:"Source",targetTitle:"Target"},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (\u2190)",tipNext:"Next picture (\u2192)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}};var Eb=Tb;function as(n){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.width?String(e.width):n.defaultWidth,i=n.formats[t]||n.formats[n.defaultWidth];return i}}function oo(n){return function(e,t){var i=t||{},r=i.context?String(i.context):"standalone",o;if(r==="formatting"&&n.formattingValues){var s=n.defaultFormattingWidth||n.defaultWidth,a=i.width?String(i.width):s;o=n.formattingValues[a]||n.formattingValues[s]}else{var l=n.defaultWidth,c=i.width?String(i.width):n.defaultWidth;o=n.values[c]||n.values[l]}var u=n.argumentCallback?n.argumentCallback(e):e;return o[u]}}function Ab(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.match(n.matchPattern);if(!i)return null;var r=i[0],o=e.match(n.parsePattern);if(!o)return null;var s=n.valueCallback?n.valueCallback(o[0]):o[0];s=t.valueCallback?t.valueCallback(s):s;var a=e.slice(r.length);return{value:s,rest:a}}}function ao(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.width,r=i&&n.matchPatterns[i]||n.matchPatterns[n.defaultMatchWidth],o=e.match(r);if(!o)return null;var s=o[0],a=i&&n.parsePatterns[i]||n.parsePatterns[n.defaultParseWidth],l=Array.isArray(a)?Rb(a,function(d){return d.test(s)}):Pb(a,function(d){return d.test(s)}),c;c=n.valueCallback?n.valueCallback(l):l,c=t.valueCallback?t.valueCallback(c):c;var u=e.slice(s.length);return{value:c,rest:u}}}function Pb(n,e){for(var t in n)if(n.hasOwnProperty(t)&&e(n[t]))return t}function Rb(n,e){for(var t=0;t<n.length;t++)if(e(n[t]))return t}var Lb={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},Db=function(n,e,t){var i,r=Lb[n];return typeof r=="string"?i=r:e===1?i=r.one:i=r.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i},Ib=Db,zb={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Fb={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},kb={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Bb={date:as({formats:zb,defaultWidth:"full"}),time:as({formats:Fb,defaultWidth:"full"}),dateTime:as({formats:kb,defaultWidth:"full"})},Ob=Bb,Nb={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},$b=function(n,e,t,i){return Nb[n]},Ub=$b,Hb={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Vb={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Wb={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Gb={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},jb={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},qb={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Xb=function(n,e){var t=Number(n),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},Yb={ordinalNumber:Xb,era:oo({values:Hb,defaultWidth:"wide"}),quarter:oo({values:Vb,defaultWidth:"wide",argumentCallback:function(n){return n-1}}),month:oo({values:Wb,defaultWidth:"wide"}),day:oo({values:Gb,defaultWidth:"wide"}),dayPeriod:oo({values:jb,defaultWidth:"wide",formattingValues:qb,defaultFormattingWidth:"wide"})},Kb=Yb,Zb=/^(\d+)(th|st|nd|rd)?/i,Jb=/\d+/i,Qb={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},e_={any:[/^b/i,/^(a|c)/i]},t_={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},n_={any:[/1/i,/2/i,/3/i,/4/i]},i_={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},r_={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},o_={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},a_={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},s_={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},l_={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},c_={ordinalNumber:Ab({matchPattern:Zb,parsePattern:Jb,valueCallback:function(n){return parseInt(n,10)}}),era:ao({matchPatterns:Qb,defaultMatchWidth:"wide",parsePatterns:e_,defaultParseWidth:"any"}),quarter:ao({matchPatterns:t_,defaultMatchWidth:"wide",parsePatterns:n_,defaultParseWidth:"any",valueCallback:function(n){return n+1}}),month:ao({matchPatterns:i_,defaultMatchWidth:"wide",parsePatterns:r_,defaultParseWidth:"any"}),day:ao({matchPatterns:o_,defaultMatchWidth:"wide",parsePatterns:a_,defaultParseWidth:"any"}),dayPeriod:ao({matchPatterns:s_,defaultMatchWidth:"any",parsePatterns:l_,defaultParseWidth:"any"})},u_=c_,d_={code:"en-US",formatDistance:Ib,formatLong:Ob,formatRelative:Ub,localize:Kb,match:u_,options:{weekStartsOn:0,firstWeekContainsDate:1}},h_=d_;const f_={name:"en-US",locale:h_};var p_=f_;function Ha(n){const{mergedLocaleRef:e,mergedDateLocaleRef:t}=vt(Wr,null)||{},i=he(()=>{var o,s;return(s=(o=e==null?void 0:e.value)===null||o===void 0?void 0:o[n])!==null&&s!==void 0?s:Eb[n]});return{dateLocaleRef:he(()=>{var o;return(o=t==null?void 0:t.value)!==null&&o!==void 0?o:p_}),localeRef:i}}function Yr(n,e,t){if(!e)return;const i=or(),r=vt(Wr,null),o=()=>{const s=t==null?void 0:t.value;e.mount({id:s===void 0?n:s+n,head:!0,anchorMetaName:wo,props:{bPrefix:s?`.${s}-`:void 0},ssr:i}),r!=null&&r.preflightStyleDisabled||Bh.mount({id:"n-global",head:!0,anchorMetaName:wo,ssr:i})};i?o():El(o)}function Qt(n,e,t,i){var r;t||vp("useThemeClass","cssVarsRef is not passed");const o=(r=vt(Wr,null))===null||r===void 0?void 0:r.mergedThemeHashRef,s=se(""),a=or();let l;const c=`__${n}`,u=()=>{let d=c;const h=e?e.value:void 0,m=o==null?void 0:o.value;m&&(d+="-"+m),h&&(d+="-"+h);const{themeOverrides:g,builtinThemeOverrides:p}=i;g&&(d+="-"+rl(JSON.stringify(g))),p&&(d+="-"+rl(JSON.stringify(p))),s.value=d,l=()=>{const f=t.value;let v="";for(const y in f)v+=`${y}: ${f[y]};`;ue(`.${d}`,v).mount({id:d,ssr:a}),l=void 0}};return ti(()=>{u()}),{themeClass:s,onRender:()=>{l==null||l()}}}function Oh(n,e){return Be({name:G0(n),setup(){var t;const i=(t=vt(Wr,null))===null||t===void 0?void 0:t.mergedIconsRef;return()=>{var r;const o=(r=i==null?void 0:i.value)===null||r===void 0?void 0:r[n];return o?o():e}}})}var m_=Be({name:"Checkmark",render(){return E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},E("g",{fill:"none"},E("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),g_=Oh("close",E("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},E("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},E("g",{fill:"currentColor","fill-rule":"nonzero"},E("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),v_=Be({name:"Eye",render(){return E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},E("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),E("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),x_=Be({name:"EyeOff",render(){return E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},E("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),E("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),E("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),E("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),E("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),b_=Be({name:"Empty",render(){return E("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),E("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),__=Be({name:"ChevronDown",render(){return E("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},E("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),y_=Oh("clear",E("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},E("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},E("g",{fill:"currentColor","fill-rule":"nonzero"},E("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),Va=Be({name:"BaseIconSwitchTransition",setup(n,{slots:e}){const t=Gr();return()=>E(ni,{name:"icon-switch-transition",appear:t.value},e)}}),w_=Be({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(n,{slots:e}){function t(a){n.width?a.style.maxWidth=`${a.offsetWidth}px`:a.style.maxHeight=`${a.offsetHeight}px`,a.offsetWidth}function i(a){n.width?a.style.maxWidth="0":a.style.maxHeight="0",a.offsetWidth;const{onLeave:l}=n;l&&l()}function r(a){n.width?a.style.maxWidth="":a.style.maxHeight="";const{onAfterLeave:l}=n;l&&l()}function o(a){if(a.style.transition="none",n.width){const l=a.offsetWidth;a.style.maxWidth="0",a.offsetWidth,a.style.transition="",a.style.maxWidth=`${l}px`}else if(n.reverse)a.style.maxHeight=`${a.offsetHeight}px`,a.offsetHeight,a.style.transition="",a.style.maxHeight="0";else{const l=a.offsetHeight;a.style.maxHeight="0",a.offsetWidth,a.style.transition="",a.style.maxHeight=`${l}px`}a.offsetWidth}function s(a){var l;n.width?a.style.maxWidth="":n.reverse||(a.style.maxHeight=""),(l=n.onAfterEnter)===null||l===void 0||l.call(n)}return()=>{const a=n.group?Qf:ni;return E(a,{name:n.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:n.mode,appear:n.appear,onEnter:o,onAfterEnter:s,onBeforeLeave:t,onLeave:i,onAfterLeave:r},e)}}}),S_=ee("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[ue("svg",`
 height: 1em;
 width: 1em;
 `)]),nr=Be({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(n){Yr("-base-icon",S_,nt(n,"clsPrefix"))},render(){return E("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),M_=ee("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[Ae("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),ue("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),St("disabled",[ue("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),ue("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),ue("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),ue("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),ue("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),Ae("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),Ae("round",[ue("&::before",`
 border-radius: 50%;
 `)])]),C_=Be({name:"BaseClose",props:{clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(n){return Yr("-base-close",M_,nt(n,"clsPrefix")),()=>{const{clsPrefix:e,disabled:t,absolute:i,round:r}=n;return E("button",{tabindex:t||!n.focusable?-1:0,"aria-disabled":t,"aria-label":"close",disabled:t,class:[`${e}-base-close`,i&&`${e}-base-close--absolute`,t&&`${e}-base-close--disabled`,r&&`${e}-base-close--round`],onMousedown:o=>{n.focusable||o.preventDefault()},onClick:n.onClick},E(nr,{clsPrefix:e},{default:()=>E(g_,null)}))}}}),T_=Be({props:{onFocus:Function,onBlur:Function},setup(n){return()=>E("div",{style:"width: 0; height: 0",tabindex:0,onFocus:n.onFocus,onBlur:n.onBlur})}});const{cubicBezierEaseInOut:E_}=Xr;function Br({originalTransform:n="",left:e=0,top:t=0,transition:i=`all .3s ${E_} !important`}={}){return[ue("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:n+" scale(0.75)",left:e,top:t,opacity:0}),ue("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${n}`,left:e,top:t,opacity:1}),ue("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:e,top:t,transition:i})]}var A_=ue([ue("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),ue("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),ue("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),ue("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),ee("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[K("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[Br()]),K("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[K("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),K("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[K("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[K("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),K("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[K("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),K("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[K("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),K("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Br({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),Wa=Be({name:"BaseLoading",props:{clsPrefix:{type:String,required:!0},scale:{type:Number,default:1},radius:{type:Number,default:100},strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},show:{type:Boolean,default:!0}},setup(n){Yr("-base-loading",A_,nt(n,"clsPrefix"))},render(){const{clsPrefix:n,radius:e,strokeWidth:t,stroke:i,scale:r}=this,o=e/r;return E("div",{class:`${n}-base-loading`,role:"img","aria-label":"loading"},E(Va,null,{default:()=>this.show?E("div",{key:"icon",class:`${n}-base-loading__transition-wrapper`},E("div",{class:`${n}-base-loading__container`},E("div",{class:`${n}-base-loading__container-layer`},E("div",{class:`${n}-base-loading__container-layer-left`},E("svg",{class:`${n}-base-loading__svg`,viewBox:`0 0 ${2*o} ${2*o}`,xmlns:"http://www.w3.org/2000/svg",style:{color:i}},E("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:o,cy:o,r:e-t/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e}))),E("div",{class:`${n}-base-loading__container-layer-patch`},E("svg",{class:`${n}-base-loading__svg`,viewBox:`0 0 ${2*o} ${2*o}`,xmlns:"http://www.w3.org/2000/svg",style:{color:i}},E("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:o,cy:o,r:e-t/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e}))),E("div",{class:`${n}-base-loading__container-layer-right`},E("svg",{class:`${n}-base-loading__svg`,viewBox:`0 0 ${2*o} ${2*o}`,xmlns:"http://www.w3.org/2000/svg",style:{color:i}},E("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:o,cy:o,r:e-t/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e})))))):E("div",{key:"placeholder",class:`${n}-base-loading__placeholder`},this.$slots)}))}});function Xc(n){return Array.isArray(n)?n:[n]}const ml={STOP:"STOP"};function Nh(n,e){const t=e(n);n.children!==void 0&&t!==ml.STOP&&n.children.forEach(i=>Nh(i,e))}function P_(n,e={}){const{preserveGroup:t=!1}=e,i=[],r=t?s=>{s.isLeaf||(i.push(s.key),o(s.children))}:s=>{s.isLeaf||(s.isGroup||i.push(s.key),o(s.children))};function o(s){s.forEach(r)}return o(n),i}function R_(n,e){const{isLeaf:t}=n;return t!==void 0?t:!e(n)}function L_(n){return n.children}function D_(n){return n.key}function I_(){return!1}function z_(n,e){const{isLeaf:t}=n;return!(t===!1&&!Array.isArray(e(n)))}function F_(n){return n.disabled===!0}function k_(n,e){return n.isLeaf===!1&&!Array.isArray(e(n))}function ss(n){var e;return n==null?[]:Array.isArray(n)?n:(e=n.checkedKeys)!==null&&e!==void 0?e:[]}function ls(n){var e;return n==null||Array.isArray(n)?[]:(e=n.indeterminateKeys)!==null&&e!==void 0?e:[]}function B_(n,e){const t=new Set(n);return e.forEach(i=>{t.has(i)||t.add(i)}),Array.from(t)}function O_(n,e){const t=new Set(n);return e.forEach(i=>{t.has(i)&&t.delete(i)}),Array.from(t)}function N_(n){return(n==null?void 0:n.type)==="group"}function $_(n){const e=new Map;return n.forEach((t,i)=>{e.set(t.key,i)}),t=>{var i;return(i=e.get(t))!==null&&i!==void 0?i:null}}class U_ extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function H_(n,e,t,i){return Ra(e.concat(n),t,i,!1)}function V_(n,e){const t=new Set;return n.forEach(i=>{const r=e.treeNodeMap.get(i);if(r!==void 0){let o=r.parent;for(;o!==null&&!(o.disabled||t.has(o.key));)t.add(o.key),o=o.parent}}),t}function W_(n,e,t,i){const r=Ra(e,t,i,!1),o=Ra(n,t,i,!0),s=V_(n,t),a=[];return r.forEach(l=>{(o.has(l)||s.has(l))&&a.push(l)}),a.forEach(l=>r.delete(l)),r}function cs(n,e){const{checkedKeys:t,keysToCheck:i,keysToUncheck:r,indeterminateKeys:o,cascade:s,leafOnly:a,checkStrategy:l,allowNotLoaded:c}=n;if(!s)return i!==void 0?{checkedKeys:B_(t,i),indeterminateKeys:Array.from(o)}:r!==void 0?{checkedKeys:O_(t,r),indeterminateKeys:Array.from(o)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(o)};const{levelTreeNodeMap:u}=e;let d;r!==void 0?d=W_(r,t,e,c):i!==void 0?d=H_(i,t,e,c):d=Ra(t,e,c,!1);const h=l==="parent",m=l==="child"||a,g=d,p=new Set,f=Math.max.apply(null,Array.from(u.keys()));for(let v=f;v>=0;v-=1){const y=v===0,T=u.get(v);for(const _ of T){if(_.isLeaf)continue;const{key:M,shallowLoaded:A}=_;if(m&&A&&_.children.forEach(R=>{!R.disabled&&!R.isLeaf&&R.shallowLoaded&&g.has(R.key)&&g.delete(R.key)}),_.disabled||!A)continue;let w=!0,x=!1,S=!0;for(const R of _.children){const D=R.key;if(!R.disabled){if(S&&(S=!1),g.has(D))x=!0;else if(p.has(D)){x=!0,w=!1;break}else if(w=!1,x)break}}w&&!S?(h&&_.children.forEach(R=>{!R.disabled&&g.has(R.key)&&g.delete(R.key)}),g.add(M)):x&&p.add(M),y&&m&&g.has(M)&&g.delete(M)}}return{checkedKeys:Array.from(g),indeterminateKeys:Array.from(p)}}function Ra(n,e,t,i){const{treeNodeMap:r,getChildren:o}=e,s=new Set,a=new Set(n);return n.forEach(l=>{const c=r.get(l);c!==void 0&&Nh(c,u=>{if(u.disabled)return ml.STOP;const{key:d}=u;if(!s.has(d)&&(s.add(d),a.add(d),k_(u.rawNode,o))){if(i)return ml.STOP;if(!t)throw new U_}})}),a}function G_(n,{includeGroup:e=!1,includeSelf:t=!0},i){var r;const o=i.treeNodeMap;let s=n==null?null:(r=o.get(n))!==null&&r!==void 0?r:null;const a={keyPath:[],treeNodePath:[],treeNode:s};if(s!=null&&s.ignored)return a.treeNode=null,a;for(;s;)!s.ignored&&(e||!s.isGroup)&&a.treeNodePath.push(s),s=s.parent;return a.treeNodePath.reverse(),t||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(l=>l.key),a}function j_(n){if(n.length===0)return null;const e=n[0];return e.isGroup||e.ignored||e.disabled?e.getNext():e}function q_(n,e){const t=n.siblings,i=t.length,{index:r}=n;return e?t[(r+1)%i]:r===t.length-1?null:t[r+1]}function Yc(n,e,{loop:t=!1,includeDisabled:i=!1}={}){const r=e==="prev"?X_:q_,o={reverse:e==="prev"};let s=!1,a=null;function l(c){if(c!==null){if(c===n){if(!s)s=!0;else if(!n.disabled&&!n.isGroup){a=n;return}}else if((!c.disabled||i)&&!c.ignored&&!c.isGroup){a=c;return}if(c.isGroup){const u=Xl(c,o);u!==null?a=u:l(r(c,t))}else{const u=r(c,!1);if(u!==null)l(u);else{const d=Y_(c);d!=null&&d.isGroup?l(r(d,t)):t&&l(r(c,!0))}}}}return l(n),a}function X_(n,e){const t=n.siblings,i=t.length,{index:r}=n;return e?t[(r-1+i)%i]:r===0?null:t[r-1]}function Y_(n){return n.parent}function Xl(n,e={}){const{reverse:t=!1}=e,{children:i}=n;if(i){const{length:r}=i,o=t?r-1:0,s=t?-1:r,a=t?-1:1;for(let l=o;l!==s;l+=a){const c=i[l];if(!c.disabled&&!c.ignored)if(c.isGroup){const u=Xl(c,e);if(u!==null)return u}else return c}}return null}const K_={getChild(){return this.ignored?null:Xl(this)},getParent(){const{parent:n}=this;return n!=null&&n.isGroup?n.getParent():n},getNext(n={}){return Yc(this,"next",n)},getPrev(n={}){return Yc(this,"prev",n)}};function Z_(n,e){const t=e?new Set(e):void 0,i=[];function r(o){o.forEach(s=>{i.push(s),!(s.isLeaf||!s.children||s.ignored)&&(s.isGroup||t===void 0||t.has(s.key))&&r(s.children)})}return r(n),i}function J_(n,e){const t=n.key;for(;e;){if(e.key===t)return!0;e=e.parent}return!1}function $h(n,e,t,i,r,o=null,s=0){const a=[];return n.forEach((l,c)=>{var u;const d=Object.create(i);if(d.rawNode=l,d.siblings=a,d.level=s,d.index=c,d.isFirstChild=c===0,d.isLastChild=c+1===n.length,d.parent=o,!d.ignored){const h=r(l);Array.isArray(h)&&(d.children=$h(h,e,t,i,r,d,s+1))}a.push(d),e.set(d.key,d),t.has(s)||t.set(s,[]),(u=t.get(s))===null||u===void 0||u.push(d)}),a}function Q_(n,e={}){var t;const i=new Map,r=new Map,{getDisabled:o=F_,getIgnored:s=I_,getIsGroup:a=N_,getKey:l=D_}=e,c=(t=e.getChildren)!==null&&t!==void 0?t:L_,u=e.ignoreEmptyChildren?_=>{const M=c(_);return Array.isArray(M)?M.length?M:null:M}:c,d=Object.assign({get key(){return l(this.rawNode)},get disabled(){return o(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return R_(this.rawNode,u)},get shallowLoaded(){return z_(this.rawNode,u)},get ignored(){return s(this.rawNode)},contains(_){return J_(this,_)}},K_),h=$h(n,i,r,d,u);function m(_){if(_==null)return null;const M=i.get(_);return M&&!M.isGroup&&!M.ignored?M:null}function g(_){if(_==null)return null;const M=i.get(_);return M&&!M.ignored?M:null}function p(_,M){const A=g(_);return A?A.getPrev(M):null}function f(_,M){const A=g(_);return A?A.getNext(M):null}function v(_){const M=g(_);return M?M.getParent():null}function y(_){const M=g(_);return M?M.getChild():null}const T={treeNodes:h,treeNodeMap:i,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:u,getFlattenedNodes(_){return Z_(h,_)},getNode:m,getPrev:p,getNext:f,getParent:v,getChild:y,getFirstAvailableNode(){return j_(h)},getPath(_,M={}){return G_(_,M,T)},getCheckedKeys(_,M={}){const{cascade:A=!0,leafOnly:w=!1,checkStrategy:x="all",allowNotLoaded:S=!1}=M;return cs({checkedKeys:ss(_),indeterminateKeys:ls(_),cascade:A,leafOnly:w,checkStrategy:x,allowNotLoaded:S},T)},check(_,M,A={}){const{cascade:w=!0,leafOnly:x=!1,checkStrategy:S="all",allowNotLoaded:R=!1}=A;return cs({checkedKeys:ss(M),indeterminateKeys:ls(M),keysToCheck:_==null?[]:Xc(_),cascade:w,leafOnly:x,checkStrategy:S,allowNotLoaded:R},T)},uncheck(_,M,A={}){const{cascade:w=!0,leafOnly:x=!1,checkStrategy:S="all",allowNotLoaded:R=!1}=A;return cs({checkedKeys:ss(M),indeterminateKeys:ls(M),keysToUncheck:_==null?[]:Xc(_),cascade:w,leafOnly:x,checkStrategy:S,allowNotLoaded:R},T)},getNonLeafKeys(_={}){return P_(h,_)}};return T}const Ne={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},ey=It(Ne.neutralBase),Uh=It(Ne.neutralInvertBase),ty="rgba("+Uh.slice(0,3).join(", ")+", ";function Kc(n){return ty+String(n)+")"}function kt(n){const e=Array.from(Uh);return e[3]=Number(n),Il(ey,e)}const ny=Object.assign(Object.assign({name:"common"},Xr),{baseColor:Ne.neutralBase,primaryColor:Ne.primaryDefault,primaryColorHover:Ne.primaryHover,primaryColorPressed:Ne.primaryActive,primaryColorSuppl:Ne.primarySuppl,infoColor:Ne.infoDefault,infoColorHover:Ne.infoHover,infoColorPressed:Ne.infoActive,infoColorSuppl:Ne.infoSuppl,successColor:Ne.successDefault,successColorHover:Ne.successHover,successColorPressed:Ne.successActive,successColorSuppl:Ne.successSuppl,warningColor:Ne.warningDefault,warningColorHover:Ne.warningHover,warningColorPressed:Ne.warningActive,warningColorSuppl:Ne.warningSuppl,errorColor:Ne.errorDefault,errorColorHover:Ne.errorHover,errorColorPressed:Ne.errorActive,errorColorSuppl:Ne.errorSuppl,textColorBase:Ne.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:kt(Ne.alpha4),placeholderColor:kt(Ne.alpha4),placeholderColorDisabled:kt(Ne.alpha5),iconColor:kt(Ne.alpha4),iconColorHover:Oo(kt(Ne.alpha4),{lightness:.75}),iconColorPressed:Oo(kt(Ne.alpha4),{lightness:.9}),iconColorDisabled:kt(Ne.alpha5),opacity1:Ne.alpha1,opacity2:Ne.alpha2,opacity3:Ne.alpha3,opacity4:Ne.alpha4,opacity5:Ne.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:kt(Number(Ne.alphaClose)),closeIconColorHover:kt(Number(Ne.alphaClose)),closeIconColorPressed:kt(Number(Ne.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:kt(Ne.alpha4),clearColorHover:Oo(kt(Ne.alpha4),{lightness:.75}),clearColorPressed:Oo(kt(Ne.alpha4),{lightness:.9}),scrollbarColor:Kc(Ne.alphaScrollbar),scrollbarColorHover:Kc(Ne.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:kt(Ne.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:Ne.neutralPopover,tableColor:Ne.neutralCard,cardColor:Ne.neutralCard,modalColor:Ne.neutralModal,bodyColor:Ne.neutralBody,tagColor:"#eee",avatarColor:kt(Ne.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:kt(Ne.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:Ne.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"});var gn=ny,iy={iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"};const ry=n=>{const{textColorDisabled:e,iconColor:t,textColor2:i,fontSizeSmall:r,fontSizeMedium:o,fontSizeLarge:s,fontSizeHuge:a}=n;return Object.assign(Object.assign({},iy),{fontSizeSmall:r,fontSizeMedium:o,fontSizeLarge:s,fontSizeHuge:a,textColor:e,iconColor:t,extraTextColor:i})},oy={name:"Empty",common:gn,self:ry};var Hh=oy,ay=ee("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[K("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[ue("+",[K("description",`
 margin-top: 8px;
 `)])]),K("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),K("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]);const sy=Object.assign(Object.assign({},st.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function});var ly=Be({name:"Empty",props:sy,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=mn(n),i=st("Empty","-empty",ay,Hh,n,e),{localeRef:r}=Ha("Empty"),o=vt(Wr,null),s=he(()=>{var u,d,h;return(u=n.description)!==null&&u!==void 0?u:(h=(d=o==null?void 0:o.mergedComponentPropsRef.value)===null||d===void 0?void 0:d.Empty)===null||h===void 0?void 0:h.description}),a=he(()=>{var u,d;return((d=(u=o==null?void 0:o.mergedComponentPropsRef.value)===null||u===void 0?void 0:u.Empty)===null||d===void 0?void 0:d.renderIcon)||(()=>E(b_,null))}),l=he(()=>{const{size:u}=n,{common:{cubicBezierEaseInOut:d},self:{[Re("iconSize",u)]:h,[Re("fontSize",u)]:m,textColor:g,iconColor:p,extraTextColor:f}}=i.value;return{"--n-icon-size":h,"--n-font-size":m,"--n-bezier":d,"--n-text-color":g,"--n-icon-color":p,"--n-extra-text-color":f}}),c=t?Qt("empty",he(()=>{let u="";const{size:d}=n;return u+=d[0],u}),l,n):void 0;return{mergedClsPrefix:e,mergedRenderIcon:a,localizedDescription:he(()=>s.value||r.value.description),cssVars:t?void 0:l,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{$slots:n,mergedClsPrefix:e,onRender:t}=this;return t==null||t(),E("div",{class:[`${e}-empty`,this.themeClass],style:this.cssVars},this.showIcon?E("div",{class:`${e}-empty__icon`},n.icon?n.icon():E(nr,{clsPrefix:e},{default:this.mergedRenderIcon})):null,this.showDescription?E("div",{class:`${e}-empty__description`},n.default?n.default():this.localizedDescription):null,n.extra?E("div",{class:`${e}-empty__extra`},n.extra()):null)}});const cy=n=>{const{scrollbarColor:e,scrollbarColorHover:t}=n;return{color:e,colorHover:t}},uy={name:"Scrollbar",common:gn,self:cy};var Vh=uy;const Zc=Be({render(){var n,e;return(e=(n=this.$slots).default)===null||e===void 0?void 0:e.call(n)}}),{cubicBezierEaseInOut:Jc}=Xr;function dy({name:n="fade-in",enterDuration:e="0.2s",leaveDuration:t="0.2s",enterCubicBezier:i=Jc,leaveCubicBezier:r=Jc}={}){return[ue(`&.${n}-transition-enter-active`,{transition:`all ${e} ${i}!important`}),ue(`&.${n}-transition-leave-active`,{transition:`all ${t} ${r}!important`}),ue(`&.${n}-transition-enter-from, &.${n}-transition-leave-to`,{opacity:0}),ue(`&.${n}-transition-leave-from, &.${n}-transition-enter-to`,{opacity:1})]}var hy=ee("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[ue(">",[ee("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[ue("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),ue(">",[ee("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])]),ee("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 `,[Ae("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[ue(">",[K("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),Ae("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[ue(">",[K("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),Ae("disabled",[ue(">",[K("scrollbar",{pointerEvents:"none"})])]),ue(">",[K("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[dy(),ue("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]);const fy=Object.assign(Object.assign({},st.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function}),Wh=Be({name:"Scrollbar",props:fy,inheritAttrs:!1,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=mn(n),i=se(null),r=se(null),o=se(null),s=se(null),a=se(null),l=se(null),c=se(null),u=se(null),d=se(null),h=se(null),m=se(null),g=se(0),p=se(0),f=se(!1),v=se(!1);let y=!1,T=!1,_,M,A=0,w=0,x=0,S=0;const R=em(),D=he(()=>{const{value:V}=u,{value:z}=l,{value:U}=h;return V===null||z===null||U===null?0:Math.min(V,U*V/z+n.size*1.5)}),$=he(()=>`${D.value}px`),Z=he(()=>{const{value:V}=d,{value:z}=c,{value:U}=m;return V===null||z===null||U===null?0:U*V/z+n.size*1.5}),L=he(()=>`${Z.value}px`),N=he(()=>{const{value:V}=u,{value:z}=g,{value:U}=l,{value:le}=h;if(V===null||U===null||le===null)return 0;{const te=U-V;return te?z/te*(le-D.value):0}}),O=he(()=>`${N.value}px`),H=he(()=>{const{value:V}=d,{value:z}=p,{value:U}=c,{value:le}=m;if(V===null||U===null||le===null)return 0;{const te=U-V;return te?z/te*(le-Z.value):0}}),Y=he(()=>`${H.value}px`),I=he(()=>{const{value:V}=u,{value:z}=l;return V!==null&&z!==null&&z>V}),B=he(()=>{const{value:V}=d,{value:z}=c;return V!==null&&z!==null&&z>V}),oe=he(()=>{const{trigger:V}=n;return V==="none"||f.value}),re=he(()=>{const{trigger:V}=n;return V==="none"||v.value}),pe=he(()=>{const{container:V}=n;return V?V():r.value}),Te=he(()=>{const{content:V}=n;return V?V():o.value});let Pe=!1,W=!1;zd(()=>{if(Pe=!1,!W){W=!0;return}n.container||me({top:g.value,left:p.value})}),Fd(()=>{Pe=!0,W||(W=!0)});const $e=()=>{Pe||b()},Le=V=>{if(Pe)return;const{onResize:z}=n;z&&z(V),b()},me=(V,z)=>{if(!n.scrollable)return;if(typeof V=="number"){ke(z!=null?z:0,V,0,!1,"auto");return}const{left:U,top:le,index:te,elSize:ge,position:Me,behavior:be,el:Ve,debounce:dt=!0}=V;(U!==void 0||le!==void 0)&&ke(U!=null?U:0,le!=null?le:0,0,!1,be),Ve!==void 0?ke(0,Ve.offsetTop,Ve.offsetHeight,dt,be):te!==void 0&&ge!==void 0?ke(0,te*ge,ge,dt,be):Me==="bottom"?ke(0,Number.MAX_SAFE_INTEGER,0,!1,be):Me==="top"&&ke(0,0,0,!1,be)},_e=(V,z)=>{if(!n.scrollable)return;const{value:U}=pe;!U||(typeof V=="object"?U.scrollBy(V):U.scrollBy(V,z||0))};function ke(V,z,U,le,te){const{value:ge}=pe;if(!!ge){if(le){const{scrollTop:Me,offsetHeight:be}=ge;if(z>Me){z+U<=Me+be||ge.scrollTo({left:V,top:z+U-be,behavior:te});return}}ge.scrollTo({left:V,top:z,behavior:te})}}function Oe(){fe(),ze(),b()}function Fe(){Xe()}function Xe(){Ze(),rt()}function Ze(){M!==void 0&&window.clearTimeout(M),M=window.setTimeout(()=>{v.value=!1},n.duration)}function rt(){_!==void 0&&window.clearTimeout(_),_=window.setTimeout(()=>{f.value=!1},n.duration)}function fe(){_!==void 0&&window.clearTimeout(_),f.value=!0}function ze(){M!==void 0&&window.clearTimeout(M),v.value=!0}function Ie(V){const{onScroll:z}=n;z&&z(V),Ce()}function Ce(){const{value:V}=pe;V&&(g.value=V.scrollTop,p.value=V.scrollLeft)}function ie(){const{value:V}=Te;V&&(l.value=V.offsetHeight,c.value=V.offsetWidth);const{value:z}=pe;z&&(u.value=z.offsetHeight,d.value=z.offsetWidth);const{value:U}=a,{value:le}=s;U&&(m.value=U.offsetWidth),le&&(h.value=le.offsetHeight)}function C(){const{value:V}=pe;V&&(g.value=V.scrollTop,p.value=V.scrollLeft,u.value=V.offsetHeight,d.value=V.offsetWidth,l.value=V.scrollHeight,c.value=V.scrollWidth);const{value:z}=a,{value:U}=s;z&&(m.value=z.offsetWidth),U&&(h.value=U.offsetHeight)}function b(){!n.scrollable||(n.useUnifiedContainer?C():(ie(),Ce()))}function F(V){var z;return!(!((z=i.value)===null||z===void 0)&&z.contains(V.target))}function q(V){V.preventDefault(),V.stopPropagation(),T=!0,ct("mousemove",window,ae,!0),ct("mouseup",window,de,!0),w=p.value,x=V.clientX}function ae(V){if(!T)return;_!==void 0&&window.clearTimeout(_),M!==void 0&&window.clearTimeout(M);const{value:z}=d,{value:U}=c,{value:le}=Z;if(z===null||U===null)return;const ge=(V.clientX-x)*(U-z)/(z-le),Me=U-z;let be=w+ge;be=Math.min(Me,be),be=Math.max(be,0);const{value:Ve}=pe;if(Ve){Ve.scrollLeft=be;const{internalOnUpdateScrollLeft:dt}=n;dt&&dt(be)}}function de(V){V.preventDefault(),V.stopPropagation(),at("mousemove",window,ae,!0),at("mouseup",window,de,!0),T=!1,b(),F(V)&&Xe()}function De(V){V.preventDefault(),V.stopPropagation(),y=!0,ct("mousemove",window,J,!0),ct("mouseup",window,Se,!0),A=g.value,S=V.clientY}function J(V){if(!y)return;_!==void 0&&window.clearTimeout(_),M!==void 0&&window.clearTimeout(M);const{value:z}=u,{value:U}=l,{value:le}=D;if(z===null||U===null)return;const ge=(V.clientY-S)*(U-z)/(z-le),Me=U-z;let be=A+ge;be=Math.min(Me,be),be=Math.max(be,0);const{value:Ve}=pe;Ve&&(Ve.scrollTop=be)}function Se(V){V.preventDefault(),V.stopPropagation(),at("mousemove",window,J,!0),at("mouseup",window,Se,!0),y=!1,b(),F(V)&&Xe()}ti(()=>{const{value:V}=B,{value:z}=I,{value:U}=e,{value:le}=a,{value:te}=s;le&&(V?le.classList.remove(`${U}-scrollbar-rail--disabled`):le.classList.add(`${U}-scrollbar-rail--disabled`)),te&&(z?te.classList.remove(`${U}-scrollbar-rail--disabled`):te.classList.add(`${U}-scrollbar-rail--disabled`))}),en(()=>{n.container||b()}),tn(()=>{_!==void 0&&window.clearTimeout(_),M!==void 0&&window.clearTimeout(M),at("mousemove",window,J,!0),at("mouseup",window,Se,!0)});const ye=st("Scrollbar","-scrollbar",hy,Vh,n,e),we=he(()=>{const{common:{cubicBezierEaseInOut:V,scrollbarBorderRadius:z,scrollbarHeight:U,scrollbarWidth:le},self:{color:te,colorHover:ge}}=ye.value;return{"--n-scrollbar-bezier":V,"--n-scrollbar-color":te,"--n-scrollbar-color-hover":ge,"--n-scrollbar-border-radius":z,"--n-scrollbar-width":le,"--n-scrollbar-height":U}}),k=t?Qt("scrollbar",void 0,we,n):void 0;return Object.assign(Object.assign({},{scrollTo:me,scrollBy:_e,sync:b,syncUnifiedContainer:C,handleMouseEnterWrapper:Oe,handleMouseLeaveWrapper:Fe}),{mergedClsPrefix:e,containerScrollTop:g,wrapperRef:i,containerRef:r,contentRef:o,yRailRef:s,xRailRef:a,needYBar:I,needXBar:B,yBarSizePx:$,xBarSizePx:L,yBarTopPx:O,xBarLeftPx:Y,isShowXBar:oe,isShowYBar:re,isIos:R,handleScroll:Ie,handleContentResize:$e,handleContainerResize:Le,handleYScrollMouseDown:De,handleXScrollMouseDown:q,cssVars:t?void 0:we,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender})},render(){var n;const{$slots:e,mergedClsPrefix:t,triggerDisplayManually:i}=this;if(!this.scrollable)return(n=e.default)===null||n===void 0?void 0:n.call(e);const r=()=>{var o,s;(o=this.onRender)===null||o===void 0||o.call(this);const a=this.trigger==="none";return E("div",Tl(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${t}-scrollbar`,this.themeClass],style:this.cssVars,onMouseenter:i?void 0:this.handleMouseEnterWrapper,onMouseleave:i?void 0:this.handleMouseLeaveWrapper}),[this.container?(s=e.default)===null||s===void 0?void 0:s.call(e):E("div",{role:"none",ref:"containerRef",class:[`${t}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},E(xo,{onResize:this.handleContentResize},{default:()=>E("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${t}-scrollbar-content`,this.contentClass]},e)})),E("div",{ref:"yRailRef",class:`${t}-scrollbar-rail ${t}-scrollbar-rail--vertical`,style:this.verticalRailStyle,"aria-hidden":!0},E(a?Zc:ni,a?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?E("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),E("div",{ref:"xRailRef",class:`${t}-scrollbar-rail ${t}-scrollbar-rail--horizontal`,style:this.horizontalRailStyle,"aria-hidden":!0},E(a?Zc:ni,a?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?E("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,left:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])};return this.container?r():E(xo,{onResize:this.handleContainerResize},{default:r})}});var Gh=Wh;const py=Wh;var my={height:"calc(var(--n-option-height) * 7.6)",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"};const gy=n=>{const{borderRadius:e,popoverColor:t,textColor3:i,dividerColor:r,textColor2:o,primaryColorPressed:s,textColorDisabled:a,primaryColor:l,opacityDisabled:c,hoverColor:u,fontSizeSmall:d,fontSizeMedium:h,fontSizeLarge:m,fontSizeHuge:g,heightSmall:p,heightMedium:f,heightLarge:v,heightHuge:y}=n;return Object.assign(Object.assign({},my),{optionFontSizeSmall:d,optionFontSizeMedium:h,optionFontSizeLarge:m,optionFontSizeHuge:g,optionHeightSmall:p,optionHeightMedium:f,optionHeightLarge:v,optionHeightHuge:y,borderRadius:e,color:t,groupHeaderTextColor:i,actionDividerColor:r,optionTextColor:o,optionTextColorPressed:s,optionTextColorDisabled:a,optionTextColorActive:l,optionOpacityDisabled:c,optionCheckColor:l,optionColorPending:u,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:u,actionTextColor:o,loadingColor:l})},vy={name:"InternalSelectMenu",common:gn,peers:{Scrollbar:Vh,Empty:Hh},self:gy};var jh=vy;const xy=E(m_);function by(n,e){return E(ni,{name:"fade-in-scale-up-transition"},{default:()=>n?E(nr,{clsPrefix:e,class:`${e}-base-select-option__check`},{default:()=>xy}):null})}var Qc=Be({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(n){const{valueRef:e,pendingTmNodeRef:t,multipleRef:i,valueSetRef:r,renderLabelRef:o,renderOptionRef:s,labelFieldRef:a,valueFieldRef:l,showCheckmarkRef:c,handleOptionClick:u,handleOptionMouseEnter:d}=vt(zl),h=un(()=>{const{value:f}=t;return f?n.tmNode.key===f.key:!1});function m(f){const{tmNode:v}=n;v.disabled||u(f,v)}function g(f){const{tmNode:v}=n;v.disabled||d(f,v)}function p(f){const{tmNode:v}=n,{value:y}=h;v.disabled||y||d(f,v)}return{multiple:i,isGrouped:un(()=>{const{tmNode:f}=n,{parent:v}=f;return v&&v.rawNode.type==="group"}),showCheckmark:c,isPending:h,isSelected:un(()=>{const{value:f}=e,{value:v}=i;if(f===null)return!1;const y=n.tmNode.rawNode[l.value];if(v){const{value:T}=r;return T.has(y)}else return f===y}),labelField:a,renderLabel:o,renderOption:s,handleMouseMove:p,handleMouseEnter:g,handleClick:m}},render(){const{clsPrefix:n,tmNode:{rawNode:e},isSelected:t,isPending:i,isGrouped:r,showCheckmark:o,renderOption:s,renderLabel:a,handleClick:l,handleMouseEnter:c,handleMouseMove:u}=this,d=by(t,n),h=a?[a(e,t),o&&d]:[Pr(e[this.labelField],e,t),o&&d],m=E("div",{class:[`${n}-base-select-option`,e.class,{[`${n}-base-select-option--disabled`]:e.disabled,[`${n}-base-select-option--selected`]:t,[`${n}-base-select-option--grouped`]:r,[`${n}-base-select-option--pending`]:i,[`${n}-base-select-option--show-checkmark`]:o}],style:e.style,onClick:l,onMouseenter:c,onMousemove:u},E("div",{class:`${n}-base-select-option__content`},h));return e.render?e.render({node:m,option:e,selected:t}):s?s({node:m,option:e,selected:t}):m}}),eu=Be({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:n,renderOptionRef:e,labelFieldRef:t}=vt(zl);return{labelField:t,renderLabel:n,renderOption:e}},render(){const{clsPrefix:n,renderLabel:e,renderOption:t,tmNode:{rawNode:i}}=this,r=e?e(i,!1):Pr(i[this.labelField],i,!1),o=E("div",{class:`${n}-base-select-group-header`},r);return i.render?i.render({node:o,option:i}):t?t({node:o,option:i,selected:!1}):o}});const{cubicBezierEaseIn:tu,cubicBezierEaseOut:nu}=Xr;function So({transformOrigin:n="inherit",duration:e=".2s",enterScale:t=".9",originalTransform:i="",originalTransition:r=""}={}){return[ue("&.fade-in-scale-up-transition-leave-active",{transformOrigin:n,transition:`opacity ${e} ${tu}, transform ${e} ${tu} ${r&&","+r}`}),ue("&.fade-in-scale-up-transition-enter-active",{transformOrigin:n,transition:`opacity ${e} ${nu}, transform ${e} ${nu} ${r&&","+r}`}),ue("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${i} scale(${t})`}),ue("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${i} scale(1)`})]}var _y=ee("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[ee("scrollbar",`
 max-height: var(--n-height);
 `),ee("virtual-list",`
 max-height: var(--n-height);
 `),ee("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[K("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),ee("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),ee("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),K("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),K("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),K("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier);
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),ee("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),ee("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[Ae("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ue("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ue("&:active",`
 color: var(--n-option-text-color-pressed);
 `),Ae("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),Ae("pending",[ue("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),Ae("selected",`
 color: var(--n-option-text-color-active);
 `,[ue("&::before",`
 background-color: var(--n-option-color-active);
 `),Ae("pending",[ue("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),Ae("disabled",`
 cursor: not-allowed;
 `,[St("selected",`
 color: var(--n-option-text-color-disabled);
 `),Ae("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),K("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[So({enterScale:"0.5"})])])]),yy=Be({name:"InternalSelectMenu",props:Object.assign(Object.assign({},st.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},width:[Number,String],autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(n){const e=st("InternalSelectMenu","-internal-select-menu",_y,jh,n,nt(n,"clsPrefix")),t=se(null),i=se(null),r=se(null),o=he(()=>n.treeMate.getFlattenedNodes()),s=he(()=>$_(o.value)),a=se(null);function l(){const{treeMate:I}=n;let B=null;const{value:oe}=n;oe===null?B=I.getFirstAvailableNode():(n.multiple?B=I.getNode((oe||[])[(oe||[]).length-1]):B=I.getNode(oe),(!B||B.disabled)&&(B=I.getFirstAvailableNode())),D(B||null)}function c(){const{value:I}=a;I&&!n.treeMate.getNode(I.key)&&(a.value=null)}let u;Pt(()=>n.show,I=>{I?u=Pt(()=>n.treeMate,()=>{n.resetMenuOnOptionsChange?(n.autoPending?l():c(),Fn($)):c()},{immediate:!0}):u==null||u()},{immediate:!0}),tn(()=>{u==null||u()});const d=he(()=>Wt(e.value.self[Re("optionHeight",n.size)])),h=he(()=>va(e.value.self[Re("padding",n.size)])),m=he(()=>n.multiple&&Array.isArray(n.value)?new Set(n.value):new Set),g=he(()=>{const I=o.value;return I&&I.length===0});function p(I){const{onToggle:B}=n;B&&B(I)}function f(I){const{onScroll:B}=n;B&&B(I)}function v(I){var B;(B=r.value)===null||B===void 0||B.sync(),f(I)}function y(){var I;(I=r.value)===null||I===void 0||I.sync()}function T(){const{value:I}=a;return I||null}function _(I,B){B.disabled||D(B,!1)}function M(I,B){B.disabled||p(B)}function A(I){var B;wa(I,"action")||(B=n.onKeyup)===null||B===void 0||B.call(n,I)}function w(I){var B;wa(I,"action")||(B=n.onKeydown)===null||B===void 0||B.call(n,I)}function x(I){var B;(B=n.onMousedown)===null||B===void 0||B.call(n,I),!n.focusable&&I.preventDefault()}function S(){const{value:I}=a;I&&D(I.getNext({loop:!0}),!0)}function R(){const{value:I}=a;I&&D(I.getPrev({loop:!0}),!0)}function D(I,B=!1){a.value=I,B&&$()}function $(){var I,B;const oe=a.value;if(!oe)return;const re=s.value(oe.key);re!==null&&(n.virtualScroll?(I=i.value)===null||I===void 0||I.scrollTo({index:re}):(B=r.value)===null||B===void 0||B.scrollTo({index:re,elSize:d.value}))}function Z(I){var B,oe;!((B=t.value)===null||B===void 0)&&B.contains(I.target)&&((oe=n.onFocus)===null||oe===void 0||oe.call(n,I))}function L(I){var B,oe;!((B=t.value)===null||B===void 0)&&B.contains(I.relatedTarget)||(oe=n.onBlur)===null||oe===void 0||oe.call(n,I)}Sn(zl,{handleOptionMouseEnter:_,handleOptionClick:M,valueSetRef:m,showCheckmarkRef:nt(n,"showCheckmark"),multipleRef:nt(n,"multiple"),valueRef:nt(n,"value"),renderLabelRef:nt(n,"renderLabel"),renderOptionRef:nt(n,"renderOption"),pendingTmNodeRef:a,labelFieldRef:nt(n,"labelField"),valueFieldRef:nt(n,"valueField")}),Sn(Yd,t),en(()=>{const{value:I}=r;I&&I.sync()});const N=he(()=>{const{size:I}=n,{common:{cubicBezierEaseInOut:B},self:{height:oe,borderRadius:re,color:pe,groupHeaderTextColor:Te,actionDividerColor:Pe,optionTextColorPressed:W,optionTextColor:$e,optionTextColorDisabled:Le,optionTextColorActive:me,optionOpacityDisabled:_e,optionCheckColor:ke,actionTextColor:Oe,optionColorPending:Fe,optionColorActive:Xe,loadingColor:Ze,loadingSize:rt,optionColorActivePending:fe,[Re("optionFontSize",I)]:ze,[Re("optionHeight",I)]:Ie,[Re("optionPadding",I)]:Ce}}=e.value;return{"--n-height":oe,"--n-action-divider-color":Pe,"--n-action-text-color":Oe,"--n-bezier":B,"--n-border-radius":re,"--n-color":pe,"--n-option-font-size":ze,"--n-group-header-text-color":Te,"--n-option-check-color":ke,"--n-option-color-pending":Fe,"--n-option-color-active":Xe,"--n-option-color-active-pending":fe,"--n-option-height":Ie,"--n-option-opacity-disabled":_e,"--n-option-text-color":$e,"--n-option-text-color-active":me,"--n-option-text-color-disabled":Le,"--n-option-text-color-pressed":W,"--n-option-padding":Ce,"--n-option-padding-left":va(Ce,"left"),"--n-option-padding-right":va(Ce,"right"),"--n-loading-color":Ze,"--n-loading-size":rt}}),{inlineThemeDisabled:O}=n,H=O?Qt("internal-select-menu",he(()=>n.size[0]),N,n):void 0,Y={selfRef:t,next:S,prev:R,getPendingTmNode:T};return lh(t,n.onResize),Object.assign({mergedTheme:e,virtualListRef:i,scrollbarRef:r,itemSize:d,padding:h,flattenedNodes:o,empty:g,virtualListContainer(){const{value:I}=i;return I==null?void 0:I.listElRef},virtualListContent(){const{value:I}=i;return I==null?void 0:I.itemsElRef},doScroll:f,handleFocusin:Z,handleFocusout:L,handleKeyUp:A,handleKeyDown:w,handleMouseDown:x,handleVirtualListResize:y,handleVirtualListScroll:v,cssVars:O?void 0:N,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender},Y)},render(){const{$slots:n,virtualScroll:e,clsPrefix:t,mergedTheme:i,themeClass:r,onRender:o}=this;return o==null||o(),E("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,r,this.multiple&&`${t}-base-select-menu--multiple`],style:[{width:ba(this.width)},this.cssVars],onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?E("div",{class:`${t}-base-select-menu__loading`},E(Wa,{clsPrefix:t,strokeWidth:20})):this.empty?E("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},Dr(n.empty,()=>[E(ly,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty})])):E(Gh,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:e?this.virtualListContainer:void 0,content:e?this.virtualListContent:void 0,onScroll:e?void 0:this.doScroll},{default:()=>e?E(Sm,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:s})=>s.isGroup?E(eu,{key:s.key,clsPrefix:t,tmNode:s}):s.ignored?null:E(Qc,{clsPrefix:t,key:s.key,tmNode:s})}):E("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(s=>s.isGroup?E(eu,{key:s.key,clsPrefix:t,tmNode:s}):E(Qc,{clsPrefix:t,key:s.key,tmNode:s})))}),Dt(n.action,s=>s&&[E("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},s),E(T_,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),wy=ee("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Sy=Be({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(n){Yr("-base-wave",wy,nt(n,"clsPrefix"));const e=se(null),t=se(!1);let i=null;return tn(()=>{i!==null&&window.clearTimeout(i)}),{active:t,selfRef:e,play(){i!==null&&(window.clearTimeout(i),t.value=!1,i=null),Fn(()=>{var r;(r=e.value)===null||r===void 0||r.offsetHeight,t.value=!0,i=window.setTimeout(()=>{t.value=!1,i=null},1e3)})}}},render(){const{clsPrefix:n}=this;return E("div",{ref:"selfRef","aria-hidden":!0,class:[`${n}-base-wave`,this.active&&`${n}-base-wave--active`]})}}),My={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"};const Cy=n=>{const{boxShadow2:e,popoverColor:t,textColor2:i,borderRadius:r,fontSize:o,dividerColor:s}=n;return Object.assign(Object.assign({},My),{fontSize:o,borderRadius:r,color:t,dividerColor:s,textColor:i,boxShadow:e})},Ty={name:"Popover",common:gn,self:Cy};var qh=Ty;const us={top:"bottom",bottom:"top",left:"right",right:"left"},Ct="var(--n-arrow-height) * 1.414";var Ey=ue([ee("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 `,[ue(">",[ee("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),St("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[St("scrollable",[St("show-header","padding: var(--n-padding);")])]),K("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),Ae("scrollable, show-header",[K("content",`
 padding: var(--n-padding);
 `)])]),ee("popover-shared",`
 transform-origin: inherit;
 `,[ee("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[ee("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Ct});
 height: calc(${Ct});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),ue("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),ue("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),ue("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),ue("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),an("top-start",`
 top: calc(${Ct} / -2 + 1px);
 left: calc(${Gn("top-start")} - var(--v-offset-left));
 `),an("top",`
 top: calc(${Ct} / -2 + 1px);
 transform: translateX(calc(${Ct} / -2)) rotate(45deg);
 left: 50%;
 `),an("top-end",`
 top: calc(${Ct} / -2 + 1px);
 right: calc(${Gn("top-end")} + var(--v-offset-left));
 `),an("bottom-start",`
 bottom: calc(${Ct} / -2 + 1px);
 left: calc(${Gn("bottom-start")} - var(--v-offset-left));
 `),an("bottom",`
 bottom: calc(${Ct} / -2 + 1px);
 transform: translateX(calc(${Ct} / -2)) rotate(45deg);
 left: 50%;
 `),an("bottom-end",`
 bottom: calc(${Ct} / -2 + 1px);
 right: calc(${Gn("bottom-end")} + var(--v-offset-left));
 `),an("left-start",`
 left: calc(${Ct} / -2 + 1px);
 top: calc(${Gn("left-start")} - var(--v-offset-top));
 `),an("left",`
 left: calc(${Ct} / -2 + 1px);
 transform: translateY(calc(${Ct} / -2)) rotate(45deg);
 top: 50%;
 `),an("left-end",`
 left: calc(${Ct} / -2 + 1px);
 bottom: calc(${Gn("left-end")} + var(--v-offset-top));
 `),an("right-start",`
 right: calc(${Ct} / -2 + 1px);
 top: calc(${Gn("right-start")} - var(--v-offset-top));
 `),an("right",`
 right: calc(${Ct} / -2 + 1px);
 transform: translateY(calc(${Ct} / -2)) rotate(45deg);
 top: 50%;
 `),an("right-end",`
 right: calc(${Ct} / -2 + 1px);
 bottom: calc(${Gn("right-end")} + var(--v-offset-top));
 `),...yb({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(n,e)=>{const t=["right","left"].includes(e),i=t?"width":"height";return n.map(r=>{const o=r.split("-")[1]==="end",a=`calc((${`var(--v-target-${i}, 0px)`} - ${Ct}) / 2)`,l=Gn(r);return ue(`[v-placement="${r}"] >`,[ee("popover-shared",[Ae("center-arrow",[ee("popover-arrow",`${e}: calc(max(${a}, ${l}) ${o?"+":"-"} var(--v-offset-${t?"left":"top"}));`)])])])})})]);function Gn(n){return["top","bottom"].includes(n.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function an(n,e){const t=n.split("-")[0],i=["top","bottom"].includes(t)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return ue(`[v-placement="${n}"] >`,[ee("popover-shared",`
 margin-${us[t]}: var(--n-space);
 `,[Ae("show-arrow",`
 margin-${us[t]}: var(--n-space-arrow);
 `),Ae("overlap",`
 margin: 0;
 `),Vp("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: calc(100% - 1px);
 ${us[t]}: auto;
 ${i}
 `,[ee("popover-arrow",e)])])])}const Xh=Object.assign(Object.assign({},st.props),{to:$t.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,minWidth:Number,maxWidth:Number}),Ay=({arrowStyle:n,clsPrefix:e})=>E("div",{key:"__popover-arrow__",class:`${e}-popover-arrow-wrapper`},E("div",{class:`${e}-popover-arrow`,style:n}));var Py=Be({name:"PopoverBody",inheritAttrs:!1,props:Xh,setup(n,{slots:e,attrs:t}){const{namespaceRef:i,mergedClsPrefixRef:r,inlineThemeDisabled:o}=mn(n),s=st("Popover","-popover",Ey,qh,n,r),a=se(null),l=vt("NPopover"),c=se(null),u=se(n.show),d=se(!1);ti(()=>{const{show:w}=n;w&&!Wp()&&(d.value=!0)});const h=he(()=>{const{trigger:w,onClickoutside:x}=n,S=[],{positionManuallyRef:{value:R}}=l;return R||(w==="click"&&!x&&S.push([bo,_,void 0,{capture:!0}]),w==="hover"&&S.push([om,T])),x&&S.push([bo,_,void 0,{capture:!0}]),(n.displayDirective==="show"||n.animated&&d.value)&&S.push([kd,n.show]),S}),m=he(()=>[{width:n.width==="trigger"?"":ba(n.width)},n.maxWidth?{maxWidth:ba(n.maxWidth)}:{},n.minWidth?{minWidth:ba(n.minWidth)}:{},o?void 0:g.value]),g=he(()=>{const{common:{cubicBezierEaseInOut:w,cubicBezierEaseIn:x,cubicBezierEaseOut:S},self:{space:R,spaceArrow:D,padding:$,fontSize:Z,textColor:L,dividerColor:N,color:O,boxShadow:H,borderRadius:Y,arrowHeight:I,arrowOffset:B,arrowOffsetVertical:oe}}=s.value;return{"--n-box-shadow":H,"--n-bezier":w,"--n-bezier-ease-in":x,"--n-bezier-ease-out":S,"--n-font-size":Z,"--n-text-color":L,"--n-color":O,"--n-divider-color":N,"--n-border-radius":Y,"--n-arrow-height":I,"--n-arrow-offset":B,"--n-arrow-offset-vertical":oe,"--n-padding":$,"--n-space":R,"--n-space-arrow":D}}),p=o?Qt("popover",void 0,g,n):void 0;l.setBodyInstance({syncPosition:f}),tn(()=>{l.setBodyInstance(null)}),Pt(nt(n,"show"),w=>{n.animated||(w?u.value=!0:u.value=!1)});function f(){var w;(w=a.value)===null||w===void 0||w.syncPosition()}function v(w){n.trigger==="hover"&&n.keepAliveOnHover&&n.show&&l.handleMouseEnter(w)}function y(w){n.trigger==="hover"&&n.keepAliveOnHover&&l.handleMouseLeave(w)}function T(w){n.trigger==="hover"&&!M().contains(w.target)&&l.handleMouseMoveOutside(w)}function _(w){(n.trigger==="click"&&!M().contains(w.target)||n.onClickoutside)&&l.handleClickOutside(w)}function M(){return l.getTriggerElement()}Sn(Jd,c),Sn(Zd,null),Sn(Kd,null);function A(){if(p==null||p.onRender(),!(n.displayDirective==="show"||n.show||n.animated&&d.value))return null;let x;const S=l.internalRenderBodyRef.value,{value:R}=r;if(S)x=S([`${R}-popover-shared`,p==null?void 0:p.themeClass.value,n.overlap&&`${R}-popover-shared--overlap`,n.showArrow&&`${R}-popover-shared--show-arrow`,n.arrowPointToCenter&&`${R}-popover-shared--center-arrow`],c,m.value,v,y);else{const{value:D}=l.extraClassRef,{internalTrapFocus:$}=n,Z=()=>{const L=Dt(e.header,O=>{var H;const Y=O?E(Tn,null,E("div",{class:`${R}-popover__header`,style:n.headerStyle},O),E("div",{class:`${R}-popover__content`,style:n.contentStyle},e)):n.scrollable?(H=e.default)===null||H===void 0?void 0:H.call(e):E("div",{class:`${R}-popover__content`,style:n.contentStyle},e);return n.scrollable?E(py,{contentClass:O?void 0:`${R}-popover__content`,contentStyle:O?void 0:n.contentStyle},{default:()=>Y}):Y}),N=n.showArrow?Ay({arrowStyle:n.arrowStyle,clsPrefix:R}):null;return[L,N]};x=E("div",Tl({class:[`${R}-popover`,`${R}-popover-shared`,p==null?void 0:p.themeClass.value,D.map(L=>`${R}-${L}`),{[`${R}-popover--scrollable`]:n.scrollable,[`${R}-popover--show-header`]:!mo(e.header),[`${R}-popover--raw`]:n.raw,[`${R}-popover-shared--overlap`]:n.overlap,[`${R}-popover-shared--show-arrow`]:n.showArrow,[`${R}-popover-shared--center-arrow`]:n.arrowPointToCenter}],ref:c,style:m.value,onKeydown:l.handleKeydown,onMouseenter:v,onMouseleave:y},t),$?E(Tm,{active:n.show,autoFocus:!0},{default:Z}):Z())}return Vr(x,h.value)}return{displayed:d,namespace:i,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:a,adjustedTo:$t(n),followerEnabled:u,renderContentNode:A}},render(){return E(Oa,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===$t.tdkey},{default:()=>this.animated?E(ni,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}});const Ry=Object.keys(Xh),Ly={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function Dy(n,e,t){Ly[e].forEach(i=>{n.props?n.props=Object.assign({},n.props):n.props={};const r=n.props[i],o=t[i];r?n.props[i]=(...s)=>{r(...s),o(...s)}:n.props[i]=o})}const Iy=hn("").type,zy={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:$t.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},Fy=Object.assign(Object.assign(Object.assign({},st.props),zy),{internalRenderBody:Function});var ky=Be({name:"Popover",inheritAttrs:!1,props:Fy,__popover__:!0,setup(n){const e=Gr(),t=se(null),i=he(()=>n.show),r=se(n.defaultShow),o=Ei(i,r),s=un(()=>n.disabled?!1:o.value),a=()=>{if(n.disabled)return!0;const{getDisabled:L}=n;return!!(L!=null&&L())},l=()=>a()?!1:o.value,c=Xd(n,["arrow","showArrow"]),u=he(()=>n.overlap?!1:c.value);let d=null;const h=se(null),m=se(null),g=un(()=>n.x!==void 0&&n.y!==void 0);function p(L){const{"onUpdate:show":N,onUpdateShow:O,onShow:H,onHide:Y}=n;r.value=L,N&&Ye(N,L),O&&Ye(O,L),L&&H&&Ye(H,!0),L&&Y&&Ye(Y,!1)}function f(){d&&d.syncPosition()}function v(){const{value:L}=h;L&&(window.clearTimeout(L),h.value=null)}function y(){const{value:L}=m;L&&(window.clearTimeout(L),m.value=null)}function T(){const L=a();if(n.trigger==="focus"&&!L){if(l())return;p(!0)}}function _(){const L=a();if(n.trigger==="focus"&&!L){if(!l())return;p(!1)}}function M(){const L=a();if(n.trigger==="hover"&&!L){if(y(),h.value!==null||l())return;const N=()=>{p(!0),h.value=null},{delay:O}=n;O===0?N():h.value=window.setTimeout(N,O)}}function A(){const L=a();if(n.trigger==="hover"&&!L){if(v(),m.value!==null||!l())return;const N=()=>{p(!1),m.value=null},{duration:O}=n;O===0?N():m.value=window.setTimeout(N,O)}}function w(){A()}function x(L){var N;!l()||(n.trigger==="click"&&(v(),y(),p(!1)),(N=n.onClickoutside)===null||N===void 0||N.call(n,L))}function S(){if(n.trigger==="click"&&!a()){v(),y();const L=!l();p(L)}}function R(L){!n.internalTrapFocus||L.key==="Escape"&&(v(),y(),p(!1))}function D(L){r.value=L}function $(){var L;return(L=t.value)===null||L===void 0?void 0:L.targetRef}function Z(L){d=L}return Sn("NPopover",{getTriggerElement:$,handleKeydown:R,handleMouseEnter:M,handleMouseLeave:A,handleClickOutside:x,handleMouseMoveOutside:w,setBodyInstance:Z,positionManuallyRef:g,isMountedRef:e,zIndexRef:nt(n,"zIndex"),extraClassRef:nt(n,"internalExtraClass"),internalRenderBodyRef:nt(n,"internalRenderBody")}),{binderInstRef:t,positionManually:g,mergedShowConsideringDisabledProp:s,uncontrolledShow:r,mergedShowArrow:u,getMergedShow:l,setShow:D,handleClick:S,handleMouseEnter:M,handleMouseLeave:A,handleFocus:T,handleBlur:_,syncPosition:f}},render(){var n;const{positionManually:e,$slots:t}=this;let i,r=!1;if(!e&&(t.activator?i=cc(t,"activator"):i=cc(t,"trigger"),i)){i=ep(i),i=i.type===Iy?E("span",[i]):i;const o={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((n=i.type)===null||n===void 0)&&n.__popover__)r=!0,i.props||(i.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),i.props.internalSyncTargetWithParent=!0,i.props.internalInheritedEventHandlers?i.props.internalInheritedEventHandlers=[o,...i.props.internalInheritedEventHandlers]:i.props.internalInheritedEventHandlers=[o];else{const{internalInheritedEventHandlers:s}=this,a=[o,...s],l={onBlur:c=>{a.forEach(u=>{u.onBlur(c)})},onFocus:c=>{a.forEach(u=>{u.onFocus(c)})},onClick:c=>{a.forEach(u=>{u.onClick(c)})},onMouseenter:c=>{a.forEach(u=>{u.onMouseenter(c)})},onMouseleave:c=>{a.forEach(u=>{u.onMouseleave(c)})}};Dy(i,s?"nested":e?"manual":this.trigger,l)}}return E(ka,{ref:"binderInstRef",syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const o=this.getMergedShow();return[this.internalTrapFocus&&o?Vr(E("div",{style:{position:"fixed",inset:0}}),[[nh,{enabled:o,zIndex:this.zIndex}]]):null,e?null:E(Ba,null,{default:()=>i}),E(Py,gp(this.$props,Ry,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:o})),{default:()=>{var s,a;return(a=(s=this.$slots).default)===null||a===void 0?void 0:a.call(s)},header:()=>{var s,a;return(a=(s=this.$slots).header)===null||a===void 0?void 0:a.call(s)}})]}})}});function Ga(n,e,t){if(!e)return;const i=or(),r=he(()=>{const{value:s}=e;if(!s)return;const a=s[n];if(!!a)return a}),o=()=>{ti(()=>{const{value:s}=t,a=`${s}${n}Rtl`;if(kp(a,i))return;const{value:l}=r;!l||l.style.mount({id:a,head:!0,anchorMetaName:wo,props:{bPrefix:s?`.${s}-`:void 0},ssr:i})})};return i?o():El(o),r}var By={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"};const Oy=n=>{const{textColor2:e,primaryColorHover:t,primaryColorPressed:i,primaryColor:r,infoColor:o,successColor:s,warningColor:a,errorColor:l,baseColor:c,borderColor:u,opacityDisabled:d,tagColor:h,closeIconColor:m,closeIconColorHover:g,closeIconColorPressed:p,borderRadiusSmall:f,fontSizeMini:v,fontSizeTiny:y,fontSizeSmall:T,fontSizeMedium:_,heightMini:M,heightTiny:A,heightSmall:w,heightMedium:x,closeColorHover:S,closeColorPressed:R,buttonColor2Hover:D,buttonColor2Pressed:$,fontWeightStrong:Z}=n;return Object.assign(Object.assign({},By),{closeBorderRadius:f,heightTiny:M,heightSmall:A,heightMedium:w,heightLarge:x,borderRadius:f,opacityDisabled:d,fontSizeTiny:v,fontSizeSmall:y,fontSizeMedium:T,fontSizeLarge:_,fontWeightStrong:Z,textColorCheckable:e,textColorHoverCheckable:e,textColorPressedCheckable:e,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:D,colorPressedCheckable:$,colorChecked:r,colorCheckedHover:t,colorCheckedPressed:i,border:`1px solid ${u}`,textColor:e,color:h,colorBordered:"rgb(250, 250, 252)",closeIconColor:m,closeIconColorHover:g,closeIconColorPressed:p,closeColorHover:S,closeColorPressed:R,borderPrimary:`1px solid ${Ke(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:Ke(r,{alpha:.12}),colorBorderedPrimary:Ke(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:Ke(r,{alpha:.12}),closeColorPressedPrimary:Ke(r,{alpha:.18}),borderInfo:`1px solid ${Ke(o,{alpha:.3})}`,textColorInfo:o,colorInfo:Ke(o,{alpha:.12}),colorBorderedInfo:Ke(o,{alpha:.1}),closeIconColorInfo:o,closeIconColorHoverInfo:o,closeIconColorPressedInfo:o,closeColorHoverInfo:Ke(o,{alpha:.12}),closeColorPressedInfo:Ke(o,{alpha:.18}),borderSuccess:`1px solid ${Ke(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:Ke(s,{alpha:.12}),colorBorderedSuccess:Ke(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:Ke(s,{alpha:.12}),closeColorPressedSuccess:Ke(s,{alpha:.18}),borderWarning:`1px solid ${Ke(a,{alpha:.35})}`,textColorWarning:a,colorWarning:Ke(a,{alpha:.15}),colorBorderedWarning:Ke(a,{alpha:.12}),closeIconColorWarning:a,closeIconColorHoverWarning:a,closeIconColorPressedWarning:a,closeColorHoverWarning:Ke(a,{alpha:.12}),closeColorPressedWarning:Ke(a,{alpha:.18}),borderError:`1px solid ${Ke(l,{alpha:.23})}`,textColorError:l,colorError:Ke(l,{alpha:.1}),colorBorderedError:Ke(l,{alpha:.08}),closeIconColorError:l,closeIconColorHoverError:l,closeIconColorPressedError:l,closeColorHoverError:Ke(l,{alpha:.12}),closeColorPressedError:Ke(l,{alpha:.18})})},Ny={name:"Tag",common:gn,self:Oy};var $y=Ny,Uy={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Hy=ee("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[Ae("strong",`
 font-weight: var(--n-font-weight-strong);
 `),K("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),K("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),K("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),K("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 cursor: pointer;
 `),Ae("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[K("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),K("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),Ae("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),Ae("icon, avatar",[Ae("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),Ae("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),Ae("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[St("disabled",[ue("&:hover","background-color: var(--n-color-hover-checkable);",[St("checked","color: var(--n-text-color-hover-checkable);")]),ue("&:active","background-color: var(--n-color-pressed-checkable);",[St("checked","color: var(--n-text-color-pressed-checkable);")])]),Ae("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[St("disabled",[ue("&:hover","background-color: var(--n-color-checked-hover);"),ue("&:active","background-color: var(--n-color-checked-pressed);")])])])]);const Vy=Object.assign(Object.assign(Object.assign({},st.props),Uy),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalStopClickPropagation:Boolean,onCheckedChange:{type:Function,validator:()=>!0,default:void 0}}),Wy=$n("n-tag");var ds=Be({name:"Tag",props:Vy,setup(n){const e=se(null),{mergedBorderedRef:t,mergedClsPrefixRef:i,inlineThemeDisabled:r,mergedRtlRef:o}=mn(n),s=st("Tag","-tag",Hy,$y,n,i);Sn(Wy,{roundRef:nt(n,"round")});function a(m){if(!n.disabled&&n.checkable){const{checked:g,onCheckedChange:p,onUpdateChecked:f,"onUpdate:checked":v}=n;f&&f(!g),v&&v(!g),p&&p(!g)}}function l(m){if(n.internalStopClickPropagation&&m.stopPropagation(),!n.disabled){const{onClose:g}=n;g&&Ye(g,m)}}const c={setTextContent(m){const{value:g}=e;g&&(g.textContent=m)}},u=Ga("Tag",o,i),d=he(()=>{const{type:m,size:g,color:{color:p,textColor:f}={}}=n,{common:{cubicBezierEaseInOut:v},self:{padding:y,closeMargin:T,closeMarginRtl:_,borderRadius:M,opacityDisabled:A,textColorCheckable:w,textColorHoverCheckable:x,textColorPressedCheckable:S,textColorChecked:R,colorCheckable:D,colorHoverCheckable:$,colorPressedCheckable:Z,colorChecked:L,colorCheckedHover:N,colorCheckedPressed:O,closeBorderRadius:H,fontWeightStrong:Y,[Re("colorBordered",m)]:I,[Re("closeSize",g)]:B,[Re("closeIconSize",g)]:oe,[Re("fontSize",g)]:re,[Re("height",g)]:pe,[Re("color",m)]:Te,[Re("textColor",m)]:Pe,[Re("border",m)]:W,[Re("closeIconColor",m)]:$e,[Re("closeIconColorHover",m)]:Le,[Re("closeIconColorPressed",m)]:me,[Re("closeColorHover",m)]:_e,[Re("closeColorPressed",m)]:ke}}=s.value;return{"--n-font-weight-strong":Y,"--n-avatar-size-override":`calc(${pe} - 8px)`,"--n-bezier":v,"--n-border-radius":M,"--n-border":W,"--n-close-icon-size":oe,"--n-close-color-pressed":ke,"--n-close-color-hover":_e,"--n-close-border-radius":H,"--n-close-icon-color":$e,"--n-close-icon-color-hover":Le,"--n-close-icon-color-pressed":me,"--n-close-icon-color-disabled":$e,"--n-close-margin":T,"--n-close-margin-rtl":_,"--n-close-size":B,"--n-color":p||(t.value?I:Te),"--n-color-checkable":D,"--n-color-checked":L,"--n-color-checked-hover":N,"--n-color-checked-pressed":O,"--n-color-hover-checkable":$,"--n-color-pressed-checkable":Z,"--n-font-size":re,"--n-height":pe,"--n-opacity-disabled":A,"--n-padding":y,"--n-text-color":f||Pe,"--n-text-color-checkable":w,"--n-text-color-checked":R,"--n-text-color-hover-checkable":x,"--n-text-color-pressed-checkable":S}}),h=r?Qt("tag",he(()=>{let m="";const{type:g,size:p,color:{color:f,textColor:v}={}}=n;return m+=g[0],m+=p[0],f&&(m+=`a${Sa(f)}`),v&&(m+=`b${Sa(v)}`),t.value&&(m+="c"),m}),d,n):void 0;return Object.assign(Object.assign({},c),{rtlEnabled:u,mergedClsPrefix:i,contentRef:e,mergedBordered:t,handleClick:a,handleCloseClick:l,cssVars:r?void 0:d,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender})},render(){var n,e;const{mergedClsPrefix:t,rtlEnabled:i,closable:r,color:{borderColor:o}={},round:s,onRender:a,$slots:l}=this;a==null||a();const c=Dt(l.avatar,d=>d&&E("div",{class:`${t}-tag__avatar`},d)),u=Dt(l.icon,d=>d&&E("div",{class:`${t}-tag__icon`},d));return E("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:i,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:s,[`${t}-tag--avatar`]:c,[`${t}-tag--icon`]:u,[`${t}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},u||c,E("span",{class:`${t}-tag__content`,ref:"contentRef"},(e=(n=this.$slots).default)===null||e===void 0?void 0:e.call(n)),!this.checkable&&r?E(C_,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:s,absolute:!0}):null,!this.checkable&&this.mergedBordered?E("div",{class:`${t}-tag__border`,style:{borderColor:o}}):null)}}),Gy=ee("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[ue(">",[K("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[ue("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),ue("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),K("placeholder",`
 display: flex;
 `),K("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Br({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),gl=Be({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(n){return Yr("-base-clear",Gy,nt(n,"clsPrefix")),{handleMouseDown(e){e.preventDefault()}}},render(){const{clsPrefix:n}=this;return E("div",{class:`${n}-base-clear`},E(Va,null,{default:()=>{var e,t;return this.show?E("div",{key:"dismiss",class:`${n}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},Dr(this.$slots.icon,()=>[E(nr,{clsPrefix:n},{default:()=>E(y_,null)})])):E("div",{key:"icon",class:`${n}-base-clear__placeholder`},(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e))}}))}}),Yh=Be({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(n,{slots:e}){return()=>{const{clsPrefix:t}=n;return E(Wa,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:n.loading},{default:()=>n.showArrow?E(gl,{clsPrefix:t,show:n.showClear,onClear:n.onClear},{placeholder:()=>E(nr,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>Dr(e.default,()=>[E(__,null)])})}):null})}}}),jy={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"};const qy=n=>{const{borderRadius:e,textColor2:t,textColorDisabled:i,inputColor:r,inputColorDisabled:o,primaryColor:s,primaryColorHover:a,warningColor:l,warningColorHover:c,errorColor:u,errorColorHover:d,borderColor:h,iconColor:m,iconColorDisabled:g,clearColor:p,clearColorHover:f,clearColorPressed:v,placeholderColor:y,placeholderColorDisabled:T,fontSizeTiny:_,fontSizeSmall:M,fontSizeMedium:A,fontSizeLarge:w,heightTiny:x,heightSmall:S,heightMedium:R,heightLarge:D}=n;return Object.assign(Object.assign({},jy),{fontSizeTiny:_,fontSizeSmall:M,fontSizeMedium:A,fontSizeLarge:w,heightTiny:x,heightSmall:S,heightMedium:R,heightLarge:D,borderRadius:e,textColor:t,textColorDisabled:i,placeholderColor:y,placeholderColorDisabled:T,color:r,colorDisabled:o,colorActive:r,border:`1px solid ${h}`,borderHover:`1px solid ${a}`,borderActive:`1px solid ${s}`,borderFocus:`1px solid ${a}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${Ke(s,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${Ke(s,{alpha:.2})}`,caretColor:s,arrowColor:m,arrowColorDisabled:g,loadingColor:s,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,borderActiveWarning:`1px solid ${l}`,borderFocusWarning:`1px solid ${c}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${Ke(l,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${Ke(l,{alpha:.2})}`,colorActiveWarning:r,caretColorWarning:l,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${d}`,borderActiveError:`1px solid ${u}`,borderFocusError:`1px solid ${d}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${Ke(u,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${Ke(u,{alpha:.2})}`,colorActiveError:r,caretColorError:u,clearColor:p,clearColorHover:f,clearColorPressed:v})},Xy={name:"InternalSelection",common:gn,peers:{Popover:qh},self:qy};var Kh=Xy,Yy=ue([ee("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[ee("base-loading",`
 color: var(--n-loading-color);
 `),ee("base-selection-tags","min-height: var(--n-height);"),K("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),K("state-border",`
 z-index: 1;
 border-color: #0000;
 `),ee("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[K("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),ee("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[K("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),ee("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `),ee("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),ee("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[ee("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[K("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),K("render-label",`
 color: var(--n-text-color);
 `)]),St("disabled",[ue("&:hover",[K("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),Ae("focus",[K("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),Ae("active",[K("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),ee("base-selection-label","background-color: var(--n-color-active);"),ee("base-selection-tags","background-color: var(--n-color-active);")])]),Ae("disabled","cursor: not-allowed;",[K("arrow",`
 color: var(--n-arrow-color-disabled);
 `),ee("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[ee("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),K("render-label",`
 color: var(--n-text-color-disabled);
 `)]),ee("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),ee("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),ee("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[K("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),K("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(n=>Ae(`${n}-status`,[K("state-border",`border: var(--n-border-${n});`),St("disabled",[ue("&:hover",[K("state-border",`
 box-shadow: var(--n-box-shadow-hover-${n});
 border: var(--n-border-hover-${n});
 `)]),Ae("active",[K("state-border",`
 box-shadow: var(--n-box-shadow-active-${n});
 border: var(--n-border-active-${n});
 `),ee("base-selection-label",`background-color: var(--n-color-active-${n});`),ee("base-selection-tags",`background-color: var(--n-color-active-${n});`)]),Ae("focus",[K("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)])])]))]),ee("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),ee("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ue("&:last-child","padding-right: 0;"),ee("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[K("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Ky=Be({name:"InternalSelection",props:Object.assign(Object.assign({},st.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeyup:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,onResize:Function}),setup(n){const e=se(null),t=se(null),i=se(null),r=se(null),o=se(null),s=se(null),a=se(null),l=se(null),c=se(null),u=se(null),d=se(!1),h=se(!1),m=se(!1),g=st("InternalSelection","-internal-selection",Yy,Kh,n,nt(n,"clsPrefix")),p=he(()=>n.clearable&&!n.disabled&&(m.value||n.active)),f=he(()=>n.selectedOption?n.renderTag?n.renderTag({option:n.selectedOption,handleClose:()=>{}}):n.renderLabel?n.renderLabel(n.selectedOption,!0):Pr(n.selectedOption[n.labelField],n.selectedOption,!0):n.placeholder),v=he(()=>{const ie=n.selectedOption;if(!!ie)return ie[n.labelField]}),y=he(()=>n.multiple?!!(Array.isArray(n.selectedOptions)&&n.selectedOptions.length):n.selectedOption!==null);function T(){var ie;const{value:C}=e;if(C){const{value:b}=t;b&&(b.style.width=`${C.offsetWidth}px`,n.maxTagCount!=="responsive"&&((ie=c.value)===null||ie===void 0||ie.sync()))}}function _(){const{value:ie}=u;ie&&(ie.style.display="none")}function M(){const{value:ie}=u;ie&&(ie.style.display="inline-block")}Pt(nt(n,"active"),ie=>{ie||_()}),Pt(nt(n,"pattern"),()=>{n.multiple&&Fn(T)});function A(ie){const{onFocus:C}=n;C&&C(ie)}function w(ie){const{onBlur:C}=n;C&&C(ie)}function x(ie){const{onDeleteOption:C}=n;C&&C(ie)}function S(ie){const{onClear:C}=n;C&&C(ie)}function R(ie){const{onPatternInput:C}=n;C&&C(ie)}function D(ie){var C;(!ie.relatedTarget||!(!((C=i.value)===null||C===void 0)&&C.contains(ie.relatedTarget)))&&A(ie)}function $(ie){var C;!((C=i.value)===null||C===void 0)&&C.contains(ie.relatedTarget)||w(ie)}function Z(ie){S(ie)}function L(){m.value=!0}function N(){m.value=!1}function O(ie){!n.active||!n.filterable||ie.target!==t.value&&ie.preventDefault()}function H(ie){x(ie)}function Y(ie){if(ie.key==="Backspace"&&!I.value&&!n.pattern.length){const{selectedOptions:C}=n;C!=null&&C.length&&H(C[C.length-1])}}const I=se(!1);let B=null;function oe(ie){const{value:C}=e;if(C){const b=ie.target.value;C.textContent=b,T()}I.value?B=ie:R(ie)}function re(){I.value=!0}function pe(){I.value=!1,R(B),B=null}function Te(ie){var C;h.value=!0,(C=n.onPatternFocus)===null||C===void 0||C.call(n,ie)}function Pe(ie){var C;h.value=!1,(C=n.onPatternBlur)===null||C===void 0||C.call(n,ie)}function W(){var ie,C;if(n.filterable)h.value=!1,(ie=s.value)===null||ie===void 0||ie.blur(),(C=t.value)===null||C===void 0||C.blur();else if(n.multiple){const{value:b}=r;b==null||b.blur()}else{const{value:b}=o;b==null||b.blur()}}function $e(){var ie,C,b;n.filterable?(h.value=!1,(ie=s.value)===null||ie===void 0||ie.focus()):n.multiple?(C=r.value)===null||C===void 0||C.focus():(b=o.value)===null||b===void 0||b.focus()}function Le(){const{value:ie}=t;ie&&(M(),ie.focus())}function me(){const{value:ie}=t;ie&&ie.blur()}function _e(ie){const{value:C}=a;C&&C.setTextContent(`+${ie}`)}function ke(){const{value:ie}=l;return ie}function Oe(){return t.value}let Fe=null;function Xe(){Fe!==null&&window.clearTimeout(Fe)}function Ze(){n.disabled||n.active||(Xe(),Fe=window.setTimeout(()=>{d.value=!0},100))}function rt(){Xe()}function fe(ie){ie||(Xe(),d.value=!1)}en(()=>{ti(()=>{const ie=s.value;!ie||(ie.tabIndex=n.disabled||h.value?-1:0)})}),lh(i,n.onResize);const{inlineThemeDisabled:ze}=n,Ie=he(()=>{const{size:ie}=n,{common:{cubicBezierEaseInOut:C},self:{borderRadius:b,color:F,placeholderColor:q,textColor:ae,paddingSingle:de,paddingMultiple:De,caretColor:J,colorDisabled:Se,textColorDisabled:ye,placeholderColorDisabled:we,colorActive:k,boxShadowFocus:xe,boxShadowActive:V,boxShadowHover:z,border:U,borderFocus:le,borderHover:te,borderActive:ge,arrowColor:Me,arrowColorDisabled:be,loadingColor:Ve,colorActiveWarning:dt,boxShadowFocusWarning:An,boxShadowActiveWarning:ai,boxShadowHoverWarning:qt,borderWarning:G,borderFocusWarning:ve,borderHoverWarning:Ue,borderActiveWarning:pt,colorActiveError:mt,boxShadowFocusError:_t,boxShadowActiveError:P,boxShadowHoverError:X,borderError:ne,borderFocusError:Q,borderHoverError:ce,borderActiveError:He,clearColor:Ge,clearColorHover:qe,clearColorPressed:je,clearSize:it,arrowSize:Je,[Re("height",ie)]:et,[Re("fontSize",ie)]:ut}}=g.value;return{"--n-bezier":C,"--n-border":U,"--n-border-active":ge,"--n-border-focus":le,"--n-border-hover":te,"--n-border-radius":b,"--n-box-shadow-active":V,"--n-box-shadow-focus":xe,"--n-box-shadow-hover":z,"--n-caret-color":J,"--n-color":F,"--n-color-active":k,"--n-color-disabled":Se,"--n-font-size":ut,"--n-height":et,"--n-padding-single":de,"--n-padding-multiple":De,"--n-placeholder-color":q,"--n-placeholder-color-disabled":we,"--n-text-color":ae,"--n-text-color-disabled":ye,"--n-arrow-color":Me,"--n-arrow-color-disabled":be,"--n-loading-color":Ve,"--n-color-active-warning":dt,"--n-box-shadow-focus-warning":An,"--n-box-shadow-active-warning":ai,"--n-box-shadow-hover-warning":qt,"--n-border-warning":G,"--n-border-focus-warning":ve,"--n-border-hover-warning":Ue,"--n-border-active-warning":pt,"--n-color-active-error":mt,"--n-box-shadow-focus-error":_t,"--n-box-shadow-active-error":P,"--n-box-shadow-hover-error":X,"--n-border-error":ne,"--n-border-focus-error":Q,"--n-border-hover-error":ce,"--n-border-active-error":He,"--n-clear-size":it,"--n-clear-color":Ge,"--n-clear-color-hover":qe,"--n-clear-color-pressed":je,"--n-arrow-size":Je}}),Ce=ze?Qt("internal-selection",he(()=>n.size[0]),Ie,n):void 0;return{mergedTheme:g,mergedClearable:p,patternInputFocused:h,filterablePlaceholder:f,label:v,selected:y,showTagsPanel:d,isCompositing:I,counterRef:a,counterWrapperRef:l,patternInputMirrorRef:e,patternInputRef:t,selfRef:i,multipleElRef:r,singleElRef:o,patternInputWrapperRef:s,overflowRef:c,inputTagElRef:u,handleMouseDown:O,handleFocusin:D,handleClear:Z,handleMouseEnter:L,handleMouseLeave:N,handleDeleteOption:H,handlePatternKeyDown:Y,handlePatternInputInput:oe,handlePatternInputBlur:Pe,handlePatternInputFocus:Te,handleMouseEnterCounter:Ze,handleMouseLeaveCounter:rt,handleFocusout:$,handleCompositionEnd:pe,handleCompositionStart:re,onPopoverUpdateShow:fe,focus:$e,focusInput:Le,blur:W,blurInput:me,updateCounter:_e,getCounter:ke,getTail:Oe,renderLabel:n.renderLabel,cssVars:ze?void 0:Ie,themeClass:Ce==null?void 0:Ce.themeClass,onRender:Ce==null?void 0:Ce.onRender}},render(){const{status:n,multiple:e,size:t,disabled:i,filterable:r,maxTagCount:o,bordered:s,clsPrefix:a,onRender:l,renderTag:c,renderLabel:u}=this;l==null||l();const d=o==="responsive",h=typeof o=="number",m=d||h,g=E(Yh,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var f,v;return(v=(f=this.$slots).arrow)===null||v===void 0?void 0:v.call(f)}});let p;if(e){const{labelField:f}=this,v=$=>E("div",{class:`${a}-base-selection-tag-wrapper`,key:$.value},c?c({option:$,handleClose:()=>this.handleDeleteOption($)}):E(ds,{size:t,closable:!$.disabled,disabled:i,onClose:()=>this.handleDeleteOption($),internalCloseFocusable:!1,internalStopClickPropagation:!0},{default:()=>u?u($,!0):Pr($[f],$,!0)})),y=(h?this.selectedOptions.slice(0,o):this.selectedOptions).map(v),T=r?E("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},E("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),E("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,_=d?()=>E("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},E(ds,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let M;if(h){const $=this.selectedOptions.length-o;$>0&&(M=E("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},E(ds,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${$}`})))}const A=d?r?E(_c,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>y,counter:_,tail:()=>T}):E(_c,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>y,counter:_}):h?y.concat(M):y,w=m?()=>E("div",{class:`${a}-base-selection-popover`},d?y:this.selectedOptions.map(v)):void 0,x=m?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,R=(this.selected?!1:this.active?!this.pattern&&!this.isCompositing:!0)?E("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},this.placeholder):null,D=r?E("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},A,d?null:T,g):E("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:i?void 0:0},A,g);p=E(Tn,null,m?E(ky,Object.assign({},x,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>D,default:w}):D,R)}else if(r){const f=this.pattern||this.isCompositing,v=this.active?!f:!this.selected,y=this.active?!1:this.selected;p=E("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`},E("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),y?E("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},E("div",{class:`${a}-base-selection-overlay__wrapper`},c?c({option:this.selectedOption,handleClose:()=>{}}):u?u(this.selectedOption,!0):Pr(this.label,this.selectedOption,!0))):null,v?E("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},E("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,g)}else p=E("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?E("div",{class:`${a}-base-selection-input`,title:xp(this.label),key:"input"},E("div",{class:`${a}-base-selection-input__content`},c?c({option:this.selectedOption,handleClose:()=>{}}):u?u(this.selectedOption,!0):Pr(this.label,this.selectedOption,!0))):E("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},this.placeholder),g);return E("div",{ref:"selfRef",class:[`${a}-base-selection`,this.themeClass,n&&`${a}-base-selection--${n}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeyup:this.onKeyup,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},p,s?E("div",{class:`${a}-base-selection__border`}):null,s?E("div",{class:`${a}-base-selection__state-border`}):null)}});const{cubicBezierEaseInOut:di}=Xr;function Zy({duration:n=".2s",delay:e=".1s"}={}){return[ue("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),ue("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),ue("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${n} ${di},
 max-width ${n} ${di} ${e},
 margin-left ${n} ${di} ${e},
 margin-right ${n} ${di} ${e};
 `),ue("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${n} ${di} ${e},
 max-width ${n} ${di},
 margin-left ${n} ${di},
 margin-right ${n} ${di};
 `)]}function La(n){return n.type==="group"}function Zh(n){return n.type==="ignored"}function hs(n,e){try{return!!(1+e.toString().toLowerCase().indexOf(n.trim().toLowerCase()))}catch{return!1}}function Jy(n,e){return{getIsGroup:La,getIgnored:Zh,getKey(i){return La(i)?i.name||i.key||"key-required":i[n]},getChildren(i){return i[e]}}}function Qy(n,e,t,i){if(!e)return n;function r(o){if(!Array.isArray(o))return[];const s=[];for(const a of o)if(La(a)){const l=r(a[i]);l.length&&s.push(Object.assign({},a,{[i]:l}))}else{if(Zh(a))continue;e(t,a)&&s.push(a)}return s}return r(n)}function ew(n,e,t){const i=new Map;return n.forEach(r=>{La(r)?r[t].forEach(o=>{i.set(o[e],o)}):i.set(r[e],r)}),i}var tw={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"};const nw=n=>{const{textColor2:e,textColor3:t,textColorDisabled:i,primaryColor:r,primaryColorHover:o,inputColor:s,inputColorDisabled:a,borderColor:l,warningColor:c,warningColorHover:u,errorColor:d,errorColorHover:h,borderRadius:m,lineHeight:g,fontSizeTiny:p,fontSizeSmall:f,fontSizeMedium:v,fontSizeLarge:y,heightTiny:T,heightSmall:_,heightMedium:M,heightLarge:A,actionColor:w,clearColor:x,clearColorHover:S,clearColorPressed:R,placeholderColor:D,placeholderColorDisabled:$,iconColor:Z,iconColorDisabled:L,iconColorHover:N,iconColorPressed:O}=n;return Object.assign(Object.assign({},tw),{countTextColor:t,heightTiny:T,heightSmall:_,heightMedium:M,heightLarge:A,fontSizeTiny:p,fontSizeSmall:f,fontSizeMedium:v,fontSizeLarge:y,lineHeight:g,lineHeightTextarea:g,borderRadius:m,iconSize:"16px",groupLabelColor:w,groupLabelTextColor:e,textColor:e,textColorDisabled:i,textDecorationColor:e,caretColor:r,placeholderColor:D,placeholderColorDisabled:$,color:s,colorDisabled:a,colorFocus:s,groupLabelBorder:`1px solid ${l}`,border:`1px solid ${l}`,borderHover:`1px solid ${o}`,borderDisabled:`1px solid ${l}`,borderFocus:`1px solid ${o}`,boxShadowFocus:`0 0 0 2px ${Ke(r,{alpha:.2})}`,loadingColor:r,loadingColorWarning:c,borderWarning:`1px solid ${c}`,borderHoverWarning:`1px solid ${u}`,colorFocusWarning:s,borderFocusWarning:`1px solid ${u}`,boxShadowFocusWarning:`0 0 0 2px ${Ke(c,{alpha:.2})}`,caretColorWarning:c,loadingColorError:d,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${h}`,colorFocusError:s,borderFocusError:`1px solid ${h}`,boxShadowFocusError:`0 0 0 2px ${Ke(d,{alpha:.2})}`,caretColorError:d,clearColor:x,clearColorHover:S,clearColorPressed:R,iconColor:Z,iconColorDisabled:L,iconColorHover:N,iconColorPressed:O,suffixTextColor:e})},iw={name:"Input",common:gn,self:nw};var Jh=iw;const Qh=$n("n-input");function rw(n){let e=0;for(const t of n)e++;return e}function Wo(n){return["",void 0,null].includes(n)}var iu=Be({name:"InputWordCount",setup(n,{slots:e}){const{mergedValueRef:t,maxlengthRef:i,mergedClsPrefixRef:r}=vt(Qh),o=he(()=>{const{value:s}=t;return s===null||Array.isArray(s)?0:rw(s)});return()=>{const{value:s}=i,{value:a}=t;return E("span",{class:`${r.value}-input-word-count`},bp(e.default,{value:a===null||Array.isArray(a)?"":a},()=>[s===void 0?o.value:`${o.value} / ${s}`]))}}}),ow=ee("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[K("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),K("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),K("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[ue("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),ue("&::placeholder","color: #0000;"),ue("&:-webkit-autofill ~",[K("placeholder","display: none;")])]),Ae("round",[St("textarea","border-radius: calc(var(--n-height) / 2);")]),K("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[ue("span",`
 width: 100%;
 display: inline-block;
 `)]),Ae("textarea",[K("placeholder","overflow: visible;")]),St("autosize","width: 100%;"),Ae("autosize",[K("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),ee("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),K("input-mirror",`
 padding: 0;
 height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: nowrap;
 pointer-events: none;
 `),K("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[ue("+",[K("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),St("textarea",[K("placeholder","white-space: nowrap;")]),K("eye",`
 transition: color .3s var(--n-bezier);
 `),Ae("textarea","width: 100%;",[ee("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),Ae("resizable",[ee("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),K("textarea",`
 position: static;
 `),K("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 left: var(--n-padding-left);
 right: var(--n-padding-right);
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),K("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),Ae("pair",[K("input-el, placeholder","text-align: center;"),K("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `,[ee("icon",`
 color: var(--n-icon-color);
 `),ee("base-icon",`
 color: var(--n-icon-color);
 `)])]),Ae("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[K("border","border: var(--n-border-disabled);"),K("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),K("placeholder","color: var(--n-placeholder-color-disabled);"),K("separator","color: var(--n-text-color-disabled);",[ee("icon",`
 color: var(--n-icon-color-disabled);
 `),ee("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),K("suffix, prefix","color: var(--n-text-color-disabled);",[ee("icon",`
 color: var(--n-icon-color-disabled);
 `),ee("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),St("disabled",[K("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[ue("&:hover",`
 color: var(--n-icon-color-hover);
 `),ue("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),ue("&:hover",[K("state-border","border: var(--n-border-hover);")]),Ae("focus","background-color: var(--n-color-focus);",[K("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),K("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),K("state-border",`
 border-color: #0000;
 z-index: 1;
 `),K("prefix","margin-right: 4px;"),K("suffix",`
 margin-left: 4px;
 `),K("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[ee("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),ee("base-clear",`
 font-size: var(--n-icon-size);
 `,[K("placeholder",[ee("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),ue(">",[ee("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),ee("base-icon",`
 font-size: var(--n-icon-size);
 `)]),ee("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(n=>Ae(`${n}-status`,[St("disabled",[ee("base-loading",`
 color: var(--n-loading-color-${n})
 `),K("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${n});
 `),K("state-border",`
 border: var(--n-border-${n});
 `),ue("&:hover",[K("state-border",`
 border: var(--n-border-hover-${n});
 `)]),ue("&:focus",`
 background-color: var(--n-color-focus-${n});
 `,[K("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)]),Ae("focus",`
 background-color: var(--n-color-focus-${n});
 `,[K("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)])])]))]);const aw=Object.assign(Object.assign({},st.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean});var sw=Be({name:"Input",props:aw,setup(n){const{mergedClsPrefixRef:e,mergedBorderedRef:t,inlineThemeDisabled:i,mergedRtlRef:r}=mn(n),o=st("Input","-input",ow,Jh,n,e),s=se(null),a=se(null),l=se(null),c=se(null),u=se(null),d=se(null),h=se(null),{localeRef:m}=Ha("Input"),g=se(n.defaultValue),p=nt(n,"value"),f=Ei(p,g),v=jr(n),{mergedSizeRef:y,mergedDisabledRef:T,mergedStatusRef:_}=v,M=se(!1),A=se(!1),w=se(!1),x=se(!1);let S=null;const R=he(()=>{const{placeholder:G,pair:ve}=n;return ve?Array.isArray(G)?G:G===void 0?["",""]:[G,G]:G===void 0?[m.value.placeholder]:[G]}),D=he(()=>{const{value:G}=w,{value:ve}=f,{value:Ue}=R;return!G&&(Wo(ve)||Array.isArray(ve)&&Wo(ve[0]))&&Ue[0]}),$=he(()=>{const{value:G}=w,{value:ve}=f,{value:Ue}=R;return!G&&Ue[1]&&(Wo(ve)||Array.isArray(ve)&&Wo(ve[1]))}),Z=un(()=>n.internalForceFocus||M.value),L=un(()=>{if(T.value||n.readonly||!n.clearable||!Z.value&&!A.value)return!1;const{value:G}=f,{value:ve}=Z;return n.pair?!!(Array.isArray(G)&&(G[0]||G[1]))&&(A.value||ve):!!G&&(A.value||ve)}),N=he(()=>{const{showPasswordOn:G}=n;if(G)return G;if(n.showPasswordToggle)return"click"}),O=se(!1),H=he(()=>{const{textDecoration:G}=n;return G?Array.isArray(G)?G.map(ve=>({textDecoration:ve})):[{textDecoration:G}]:["",""]}),Y=se(void 0),I=()=>{var G,ve;if(n.type==="textarea"){const{autosize:Ue}=n;if(Ue&&(Y.value=(ve=(G=h.value)===null||G===void 0?void 0:G.$el)===null||ve===void 0?void 0:ve.offsetWidth),!a.value||typeof Ue=="boolean")return;const{paddingTop:pt,paddingBottom:mt,lineHeight:_t}=window.getComputedStyle(a.value),P=Number(pt.slice(0,-2)),X=Number(mt.slice(0,-2)),ne=Number(_t.slice(0,-2)),{value:Q}=l;if(!Q)return;if(Ue.minRows){const ce=Math.max(Ue.minRows,1),He=`${P+X+ne*ce}px`;Q.style.minHeight=He}if(Ue.maxRows){const ce=`${P+X+ne*Ue.maxRows}px`;Q.style.maxHeight=ce}}},B=he(()=>{const{maxlength:G}=n;return G===void 0?void 0:Number(G)});en(()=>{const{value:G}=f;Array.isArray(G)||le(G)});const oe=Dd().proxy;function re(G){const{onUpdateValue:ve,"onUpdate:value":Ue,onInput:pt}=n,{nTriggerFormInput:mt}=v;ve&&Ye(ve,G),Ue&&Ye(Ue,G),pt&&Ye(pt,G),g.value=G,mt()}function pe(G){const{onChange:ve}=n,{nTriggerFormChange:Ue}=v;ve&&Ye(ve,G),g.value=G,Ue()}function Te(G){const{onBlur:ve}=n,{nTriggerFormBlur:Ue}=v;ve&&Ye(ve,G),Ue()}function Pe(G){const{onFocus:ve}=n,{nTriggerFormFocus:Ue}=v;ve&&Ye(ve,G),Ue()}function W(G){const{onClear:ve}=n;ve&&Ye(ve,G)}function $e(G){const{onInputBlur:ve}=n;ve&&Ye(ve,G)}function Le(G){const{onInputFocus:ve}=n;ve&&Ye(ve,G)}function me(){const{onDeactivate:G}=n;G&&Ye(G)}function _e(){const{onActivate:G}=n;G&&Ye(G)}function ke(G){const{onClick:ve}=n;ve&&Ye(ve,G)}function Oe(G){const{onWrapperFocus:ve}=n;ve&&Ye(ve,G)}function Fe(G){const{onWrapperBlur:ve}=n;ve&&Ye(ve,G)}function Xe(){w.value=!0}function Ze(G){w.value=!1,G.target===d.value?rt(G,1):rt(G,0)}function rt(G,ve=0,Ue="input"){const pt=G.target.value;if(le(pt),n.type==="textarea"){const{value:_t}=h;_t&&_t.syncUnifiedContainer()}if(S=pt,w.value)return;const mt=pt;if(!n.pair)Ue==="input"?re(mt):pe(mt);else{let{value:_t}=f;Array.isArray(_t)?_t=[..._t]:_t=["",""],_t[ve]=mt,Ue==="input"?re(_t):pe(_t)}oe.$forceUpdate()}function fe(G){$e(G),G.relatedTarget===s.value&&me(),G.relatedTarget!==null&&(G.relatedTarget===u.value||G.relatedTarget===d.value||G.relatedTarget===a.value)||(x.value=!1),ie(G,"blur")}function ze(G){Le(G),M.value=!0,x.value=!0,_e(),ie(G,"focus")}function Ie(G){n.passivelyActivated&&(Fe(G),ie(G,"blur"))}function Ce(G){n.passivelyActivated&&(M.value=!0,Oe(G),ie(G,"focus"))}function ie(G,ve){G.relatedTarget!==null&&(G.relatedTarget===u.value||G.relatedTarget===d.value||G.relatedTarget===a.value||G.relatedTarget===s.value)||(ve==="focus"?(Pe(G),M.value=!0):ve==="blur"&&(Te(G),M.value=!1))}function C(G,ve){rt(G,ve,"change")}function b(G){ke(G)}function F(G){W(G),n.pair?(re(["",""]),pe(["",""])):(re(""),pe(""))}function q(G){const{onMousedown:ve}=n;ve&&ve(G);const{tagName:Ue}=G.target;if(Ue!=="INPUT"&&Ue!=="TEXTAREA"){if(n.resizable){const{value:pt}=s;if(pt){const{left:mt,top:_t,width:P,height:X}=pt.getBoundingClientRect(),ne=14;if(mt+P-ne<G.clientX&&G.clientY<mt+P&&_t+X-ne<G.clientY&&G.clientY<_t+X)return}}G.preventDefault(),M.value||k()}}function ae(){var G;A.value=!0,n.type==="textarea"&&((G=h.value)===null||G===void 0||G.handleMouseEnterWrapper())}function de(){var G;A.value=!1,n.type==="textarea"&&((G=h.value)===null||G===void 0||G.handleMouseLeaveWrapper())}function De(){T.value||N.value==="click"&&(O.value=!O.value)}function J(G){if(T.value)return;G.preventDefault();const ve=pt=>{pt.preventDefault(),at("mouseup",document,ve)};if(ct("mouseup",document,ve),N.value!=="mousedown")return;O.value=!0;const Ue=()=>{O.value=!1,at("mouseup",document,Ue)};ct("mouseup",document,Ue)}function Se(G){var ve;switch((ve=n.onKeydown)===null||ve===void 0||ve.call(n,G),G.key){case"Escape":we();break;case"Enter":ye(G);break}}function ye(G){var ve,Ue;if(n.passivelyActivated){const{value:pt}=x;if(pt){n.internalDeactivateOnEnter&&we();return}G.preventDefault(),n.type==="textarea"?(ve=a.value)===null||ve===void 0||ve.focus():(Ue=u.value)===null||Ue===void 0||Ue.focus()}}function we(){n.passivelyActivated&&(x.value=!1,Fn(()=>{var G;(G=s.value)===null||G===void 0||G.focus()}))}function k(){var G,ve,Ue;T.value||(n.passivelyActivated?(G=s.value)===null||G===void 0||G.focus():((ve=a.value)===null||ve===void 0||ve.focus(),(Ue=u.value)===null||Ue===void 0||Ue.focus()))}function xe(){var G;!((G=s.value)===null||G===void 0)&&G.contains(document.activeElement)&&document.activeElement.blur()}function V(){var G,ve;(G=a.value)===null||G===void 0||G.select(),(ve=u.value)===null||ve===void 0||ve.select()}function z(){T.value||(a.value?a.value.focus():u.value&&u.value.focus())}function U(){const{value:G}=s;(G==null?void 0:G.contains(document.activeElement))&&G!==document.activeElement&&we()}function le(G){const{type:ve,pair:Ue,autosize:pt}=n;if(!Ue&&pt)if(ve==="textarea"){const{value:mt}=l;mt&&(mt.textContent=(G!=null?G:"")+`\r
`)}else{const{value:mt}=c;mt&&(G?mt.textContent=G:mt.innerHTML="&nbsp;")}}function te(){I()}const ge=se({top:"0"});function Me(G){var ve;const{scrollTop:Ue}=G.target;ge.value.top=`${-Ue}px`,(ve=h.value)===null||ve===void 0||ve.syncUnifiedContainer()}let be=null;ti(()=>{const{autosize:G,type:ve}=n;G&&ve==="textarea"?be=Pt(f,Ue=>{!Array.isArray(Ue)&&Ue!==S&&le(Ue)}):be==null||be()});let Ve=null;ti(()=>{n.type==="textarea"?Ve=Pt(f,G=>{var ve;!Array.isArray(G)&&G!==S&&((ve=h.value)===null||ve===void 0||ve.syncUnifiedContainer())}):Ve==null||Ve()}),Sn(Qh,{mergedValueRef:f,maxlengthRef:B,mergedClsPrefixRef:e});const dt={wrapperElRef:s,inputElRef:u,textareaElRef:a,isCompositing:w,focus:k,blur:xe,select:V,deactivate:U,activate:z},An=Ga("Input",r,e),ai=he(()=>{const{value:G}=y,{common:{cubicBezierEaseInOut:ve},self:{color:Ue,borderRadius:pt,textColor:mt,caretColor:_t,caretColorError:P,caretColorWarning:X,textDecorationColor:ne,border:Q,borderDisabled:ce,borderHover:He,borderFocus:Ge,placeholderColor:qe,placeholderColorDisabled:je,lineHeightTextarea:it,colorDisabled:Je,colorFocus:et,textColorDisabled:ut,boxShadowFocus:Wn,iconSize:si,colorFocusWarning:li,boxShadowFocusWarning:nn,borderWarning:ot,borderFocusWarning:ci,borderHoverWarning:xt,colorFocusError:rn,boxShadowFocusError:Pn,borderError:Li,borderFocusError:to,borderHoverError:Rt,clearSize:Di,clearColor:no,clearColorHover:on,clearColorPressed:Df,iconColor:If,iconColorDisabled:zf,suffixTextColor:Ff,countTextColor:kf,iconColorHover:Bf,iconColorPressed:Of,loadingColor:Nf,loadingColorError:$f,loadingColorWarning:Uf,[Re("padding",G)]:Hf,[Re("fontSize",G)]:Vf,[Re("height",G)]:Wf}}=o.value,{left:Gf,right:jf}=va(Hf);return{"--n-bezier":ve,"--n-count-text-color":kf,"--n-color":Ue,"--n-font-size":Vf,"--n-border-radius":pt,"--n-height":Wf,"--n-padding-left":Gf,"--n-padding-right":jf,"--n-text-color":mt,"--n-caret-color":_t,"--n-text-decoration-color":ne,"--n-border":Q,"--n-border-disabled":ce,"--n-border-hover":He,"--n-border-focus":Ge,"--n-placeholder-color":qe,"--n-placeholder-color-disabled":je,"--n-icon-size":si,"--n-line-height-textarea":it,"--n-color-disabled":Je,"--n-color-focus":et,"--n-text-color-disabled":ut,"--n-box-shadow-focus":Wn,"--n-loading-color":Nf,"--n-caret-color-warning":X,"--n-color-focus-warning":li,"--n-box-shadow-focus-warning":nn,"--n-border-warning":ot,"--n-border-focus-warning":ci,"--n-border-hover-warning":xt,"--n-loading-color-warning":Uf,"--n-caret-color-error":P,"--n-color-focus-error":rn,"--n-box-shadow-focus-error":Pn,"--n-border-error":Li,"--n-border-focus-error":to,"--n-border-hover-error":Rt,"--n-loading-color-error":$f,"--n-clear-color":no,"--n-clear-size":Di,"--n-clear-color-hover":on,"--n-clear-color-pressed":Df,"--n-icon-color":If,"--n-icon-color-hover":Bf,"--n-icon-color-pressed":Of,"--n-icon-color-disabled":zf,"--n-suffix-text-color":Ff}}),qt=i?Qt("input",he(()=>{const{value:G}=y;return G[0]}),ai,n):void 0;return Object.assign(Object.assign({},dt),{wrapperElRef:s,inputElRef:u,inputMirrorElRef:c,inputEl2Ref:d,textareaElRef:a,textareaMirrorElRef:l,textareaScrollbarInstRef:h,rtlEnabled:An,uncontrolledValue:g,mergedValue:f,passwordVisible:O,mergedPlaceholder:R,showPlaceholder1:D,showPlaceholder2:$,mergedFocus:Z,isComposing:w,activated:x,showClearButton:L,mergedSize:y,mergedDisabled:T,textDecorationStyle:H,mergedClsPrefix:e,mergedBordered:t,mergedShowPasswordOn:N,placeholderStyle:ge,mergedStatus:_,textAreaScrollContainerWidth:Y,handleTextAreaScroll:Me,handleCompositionStart:Xe,handleCompositionEnd:Ze,handleInput:rt,handleInputBlur:fe,handleInputFocus:ze,handleWrapperBlur:Ie,handleWrapperFocus:Ce,handleMouseEnter:ae,handleMouseLeave:de,handleMouseDown:q,handleChange:C,handleClick:b,handleClear:F,handlePasswordToggleClick:De,handlePasswordToggleMousedown:J,handleWrapperKeyDown:Se,handleTextAreaMirrorResize:te,getTextareaScrollContainer:()=>a.value,mergedTheme:o,cssVars:i?void 0:ai,themeClass:qt==null?void 0:qt.themeClass,onRender:qt==null?void 0:qt.onRender})},render(){var n,e;const{mergedClsPrefix:t,mergedStatus:i,themeClass:r,onRender:o}=this,s=this.$slots;return o==null||o(),E("div",{ref:"wrapperElRef",class:[`${t}-input`,r,i&&`${t}-input--${i}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:this.type==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&this.type!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeyDown},E("div",{class:`${t}-input-wrapper`},Dt(s.prefix,a=>a&&E("div",{class:`${t}-input__prefix`},a)),this.type==="textarea"?E(Gh,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0},{default:()=>{var a,l;const{textAreaScrollContainerWidth:c}=this,u={width:this.autosize&&c&&`${c}px`};return E(Tn,null,E("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${t}-input__textarea-el`,(a=this.inputProps)===null||a===void 0?void 0:a.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(l=this.inputProps)===null||l===void 0?void 0:l.style,u],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?E("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,u],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?E(xo,{onResize:this.handleTextAreaMirrorResize},{default:()=>E("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):E("div",{class:`${t}-input__input`},E("input",Object.assign({type:this.type==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":this.type},this.inputProps,{ref:"inputElRef",class:[`${t}-input__input-el`,(n=this.inputProps)===null||n===void 0?void 0:n.class],style:[this.textDecorationStyle[0],(e=this.inputProps)===null||e===void 0?void 0:e.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:a=>this.handleInput(a,0),onChange:a=>this.handleChange(a,0)})),this.showPlaceholder1?E("div",{class:`${t}-input__placeholder`},E("span",null,this.mergedPlaceholder[0])):null,this.autosize?E("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&Dt(s.suffix,a=>a||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?E("div",{class:`${t}-input__suffix`},[Dt(s["clear-icon-placeholder"],l=>(this.clearable||l)&&E(gl,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>l,icon:()=>{var c,u;return(u=(c=this.$slots)["clear-icon"])===null||u===void 0?void 0:u.call(c)}})),this.internalLoadingBeforeSuffix?null:a,this.loading!==void 0?E(Yh,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?a:null,this.showCount&&this.type!=="textarea"?E(iu,null,{default:l=>{var c;return(c=s.count)===null||c===void 0?void 0:c.call(s,l)}}):null,this.mergedShowPasswordOn&&this.type==="password"?E("div",{class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?Dr(s["password-visible-icon"],()=>[E(nr,{clsPrefix:t},{default:()=>E(v_,null)})]):Dr(s["password-invisible-icon"],()=>[E(nr,{clsPrefix:t},{default:()=>E(x_,null)})])):null]):null)),this.pair?E("span",{class:`${t}-input__separator`},Dr(s.separator,()=>[this.separator])):null,this.pair?E("div",{class:`${t}-input-wrapper`},E("div",{class:`${t}-input__input`},E("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:a=>this.handleInput(a,1),onChange:a=>this.handleChange(a,1)}),this.showPlaceholder2?E("div",{class:`${t}-input__placeholder`},E("span",null,this.mergedPlaceholder[1])):null),Dt(s.suffix,a=>(this.clearable||a)&&E("div",{class:`${t}-input__suffix`},[this.clearable&&E(gl,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var l;return(l=s["clear-icon"])===null||l===void 0?void 0:l.call(s)},placeholder:()=>{var l;return(l=s["clear-icon-placeholder"])===null||l===void 0?void 0:l.call(s)}}),a]))):null,this.mergedBordered?E("div",{class:`${t}-input__border`}):null,this.mergedBordered?E("div",{class:`${t}-input__state-border`}):null,this.showCount&&this.type==="textarea"?E(iu,null,{default:a=>{var l;return(l=s.count)===null||l===void 0?void 0:l.call(s,a)}}):null)}}),lw=ee("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[ue(">",[ee("input",[ue("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),ue("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),ee("button",[ue("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[K("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),ue("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[K("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),ue("*",[ue("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[ue(">",[ee("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),ee("base-selection",[ee("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),ee("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),K("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),ue("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[ue(">",[ee("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),ee("base-selection",[ee("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),ee("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),K("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]);const cw={};var uw=Be({name:"InputGroup",props:cw,setup(n){const{mergedClsPrefixRef:e}=mn(n);return Yr("-input-group",lw,e),{mergedClsPrefix:e}},render(){const{mergedClsPrefix:n}=this;return E("div",{class:`${n}-input-group`},this.$slots)}});function zi(n){return Il(n,[255,255,255,.16])}function Go(n){return Il(n,[0,0,0,.12])}var dw={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"};const hw=n=>{const{heightTiny:e,heightSmall:t,heightMedium:i,heightLarge:r,borderRadius:o,fontSizeTiny:s,fontSizeSmall:a,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:u,textColor2:d,textColor3:h,primaryColorHover:m,primaryColorPressed:g,borderColor:p,primaryColor:f,baseColor:v,infoColor:y,infoColorHover:T,infoColorPressed:_,successColor:M,successColorHover:A,successColorPressed:w,warningColor:x,warningColorHover:S,warningColorPressed:R,errorColor:D,errorColorHover:$,errorColorPressed:Z,fontWeight:L,buttonColor2:N,buttonColor2Hover:O,buttonColor2Pressed:H,fontWeightStrong:Y}=n;return Object.assign(Object.assign({},dw),{heightTiny:e,heightSmall:t,heightMedium:i,heightLarge:r,borderRadiusTiny:o,borderRadiusSmall:o,borderRadiusMedium:o,borderRadiusLarge:o,fontSizeTiny:s,fontSizeSmall:a,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:u,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:N,colorSecondaryHover:O,colorSecondaryPressed:H,colorTertiary:N,colorTertiaryHover:O,colorTertiaryPressed:H,colorQuaternary:"#0000",colorQuaternaryHover:O,colorQuaternaryPressed:H,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:d,textColorTertiary:h,textColorHover:m,textColorPressed:g,textColorFocus:m,textColorDisabled:d,textColorText:d,textColorTextHover:m,textColorTextPressed:g,textColorTextFocus:m,textColorTextDisabled:d,textColorGhost:d,textColorGhostHover:m,textColorGhostPressed:g,textColorGhostFocus:m,textColorGhostDisabled:d,border:`1px solid ${p}`,borderHover:`1px solid ${m}`,borderPressed:`1px solid ${g}`,borderFocus:`1px solid ${m}`,borderDisabled:`1px solid ${p}`,rippleColor:f,colorPrimary:f,colorHoverPrimary:m,colorPressedPrimary:g,colorFocusPrimary:m,colorDisabledPrimary:f,textColorPrimary:v,textColorHoverPrimary:v,textColorPressedPrimary:v,textColorFocusPrimary:v,textColorDisabledPrimary:v,textColorTextPrimary:f,textColorTextHoverPrimary:m,textColorTextPressedPrimary:g,textColorTextFocusPrimary:m,textColorTextDisabledPrimary:d,textColorGhostPrimary:f,textColorGhostHoverPrimary:m,textColorGhostPressedPrimary:g,textColorGhostFocusPrimary:m,textColorGhostDisabledPrimary:f,borderPrimary:`1px solid ${f}`,borderHoverPrimary:`1px solid ${m}`,borderPressedPrimary:`1px solid ${g}`,borderFocusPrimary:`1px solid ${m}`,borderDisabledPrimary:`1px solid ${f}`,rippleColorPrimary:f,colorInfo:y,colorHoverInfo:T,colorPressedInfo:_,colorFocusInfo:T,colorDisabledInfo:y,textColorInfo:v,textColorHoverInfo:v,textColorPressedInfo:v,textColorFocusInfo:v,textColorDisabledInfo:v,textColorTextInfo:y,textColorTextHoverInfo:T,textColorTextPressedInfo:_,textColorTextFocusInfo:T,textColorTextDisabledInfo:d,textColorGhostInfo:y,textColorGhostHoverInfo:T,textColorGhostPressedInfo:_,textColorGhostFocusInfo:T,textColorGhostDisabledInfo:y,borderInfo:`1px solid ${y}`,borderHoverInfo:`1px solid ${T}`,borderPressedInfo:`1px solid ${_}`,borderFocusInfo:`1px solid ${T}`,borderDisabledInfo:`1px solid ${y}`,rippleColorInfo:y,colorSuccess:M,colorHoverSuccess:A,colorPressedSuccess:w,colorFocusSuccess:A,colorDisabledSuccess:M,textColorSuccess:v,textColorHoverSuccess:v,textColorPressedSuccess:v,textColorFocusSuccess:v,textColorDisabledSuccess:v,textColorTextSuccess:M,textColorTextHoverSuccess:A,textColorTextPressedSuccess:w,textColorTextFocusSuccess:A,textColorTextDisabledSuccess:d,textColorGhostSuccess:M,textColorGhostHoverSuccess:A,textColorGhostPressedSuccess:w,textColorGhostFocusSuccess:A,textColorGhostDisabledSuccess:M,borderSuccess:`1px solid ${M}`,borderHoverSuccess:`1px solid ${A}`,borderPressedSuccess:`1px solid ${w}`,borderFocusSuccess:`1px solid ${A}`,borderDisabledSuccess:`1px solid ${M}`,rippleColorSuccess:M,colorWarning:x,colorHoverWarning:S,colorPressedWarning:R,colorFocusWarning:S,colorDisabledWarning:x,textColorWarning:v,textColorHoverWarning:v,textColorPressedWarning:v,textColorFocusWarning:v,textColorDisabledWarning:v,textColorTextWarning:x,textColorTextHoverWarning:S,textColorTextPressedWarning:R,textColorTextFocusWarning:S,textColorTextDisabledWarning:d,textColorGhostWarning:x,textColorGhostHoverWarning:S,textColorGhostPressedWarning:R,textColorGhostFocusWarning:S,textColorGhostDisabledWarning:x,borderWarning:`1px solid ${x}`,borderHoverWarning:`1px solid ${S}`,borderPressedWarning:`1px solid ${R}`,borderFocusWarning:`1px solid ${S}`,borderDisabledWarning:`1px solid ${x}`,rippleColorWarning:x,colorError:D,colorHoverError:$,colorPressedError:Z,colorFocusError:$,colorDisabledError:D,textColorError:v,textColorHoverError:v,textColorPressedError:v,textColorFocusError:v,textColorDisabledError:v,textColorTextError:D,textColorTextHoverError:$,textColorTextPressedError:Z,textColorTextFocusError:$,textColorTextDisabledError:d,textColorGhostError:D,textColorGhostHoverError:$,textColorGhostPressedError:Z,textColorGhostFocusError:$,textColorGhostDisabledError:D,borderError:`1px solid ${D}`,borderHoverError:`1px solid ${$}`,borderPressedError:`1px solid ${Z}`,borderFocusError:`1px solid ${$}`,borderDisabledError:`1px solid ${D}`,rippleColorError:D,waveOpacity:"0.6",fontWeight:L,fontWeightStrong:Y})},fw={name:"Button",common:gn,self:hw};var ef=fw;const pw=$n("n-button-group");var mw=ue([ee("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Ae("color",[K("border",{borderColor:"var(--n-border-color)"}),Ae("disabled",[K("border",{borderColor:"var(--n-border-color-disabled)"})]),St("disabled",[ue("&:focus",[K("state-border",{borderColor:"var(--n-border-color-focus)"})]),ue("&:hover",[K("state-border",{borderColor:"var(--n-border-color-hover)"})]),ue("&:active",[K("state-border",{borderColor:"var(--n-border-color-pressed)"})]),Ae("pressed",[K("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),Ae("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[K("border",{border:"var(--n-border-disabled)"})]),St("disabled",[ue("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[K("state-border",{border:"var(--n-border-focus)"})]),ue("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[K("state-border",{border:"var(--n-border-hover)"})]),ue("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[K("state-border",{border:"var(--n-border-pressed)"})]),Ae("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[K("state-border",{border:"var(--n-border-pressed)"})])]),Ae("loading","cursor: wait;"),ee("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[Ae("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),jd&&"MozBoxSizing"in document.createElement("div").style?ue("&::moz-focus-inner",{border:0}):null,K("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),K("border",{border:"var(--n-border)"}),K("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),K("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[ee("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 `,[Br({top:"50%",originalTransform:"translateY(-50%)"})]),Zy()]),K("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `,[ue("~",[K("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),Ae("block",`
 display: flex;
 width: 100%;
 `),Ae("dashed",[K("border, state-border",{borderStyle:"dashed !important"})]),Ae("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),ue("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),ue("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]);const gw=Object.assign(Object.assign({},st.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:Boolean}),vw=Be({name:"Button",props:gw,setup(n){const e=se(null),t=se(null),i=se(!1),r=un(()=>!n.quaternary&&!n.tertiary&&!n.secondary&&!n.text&&(!n.color||n.ghost||n.dashed)&&n.bordered),o=vt(pw,{}),{mergedSizeRef:s}=jr({},{defaultSize:"medium",mergedSize:_=>{const{size:M}=n;if(M)return M;const{size:A}=o;if(A)return A;const{mergedSize:w}=_||{};return w?w.value:"medium"}}),a=he(()=>n.focusable&&!n.disabled),l=_=>{var M;n.disabled||n.nativeFocusBehavior||a.value&&(_.preventDefault(),(M=e.value)===null||M===void 0||M.focus({preventScroll:!0}))},c=_=>{var M;if(!n.disabled&&!n.loading){const{onClick:A}=n;A&&Ye(A,_),n.text||(M=t.value)===null||M===void 0||M.play()}},u=_=>{switch(_.key){case"Enter":if(!n.keyboard)return;i.value=!1}},d=_=>{switch(_.key){case"Enter":if(!n.keyboard||n.loading){_.preventDefault();return}i.value=!0}},h=()=>{i.value=!1},{inlineThemeDisabled:m,mergedClsPrefixRef:g,mergedRtlRef:p}=mn(n),f=st("Button","-button",mw,ef,n,g),v=Ga("Button",p,g),y=he(()=>{const _=f.value,{common:{cubicBezierEaseInOut:M,cubicBezierEaseOut:A},self:w}=_,{rippleDuration:x,opacityDisabled:S,fontWeight:R,fontWeightStrong:D}=w,$=s.value,{dashed:Z,type:L,ghost:N,text:O,color:H,round:Y,circle:I,textColor:B,secondary:oe,tertiary:re,quaternary:pe,strong:Te}=n,Pe={"font-weight":Te?D:R};let W={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const $e=L==="tertiary",Le=L==="default",me=$e?"default":L;if(O){const Ce=B||H,ie=Ce||w[Re("textColorText",me)];W={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":ie,"--n-text-color-hover":Ce?zi(Ce):w[Re("textColorTextHover",me)],"--n-text-color-pressed":Ce?Go(Ce):w[Re("textColorTextPressed",me)],"--n-text-color-focus":Ce?zi(Ce):w[Re("textColorTextHover",me)],"--n-text-color-disabled":Ce||w[Re("textColorTextDisabled",me)]}}else if(N||Z){const Ce=B||H;W={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":H||w[Re("rippleColor",me)],"--n-text-color":Ce||w[Re("textColorGhost",me)],"--n-text-color-hover":Ce?zi(Ce):w[Re("textColorGhostHover",me)],"--n-text-color-pressed":Ce?Go(Ce):w[Re("textColorGhostPressed",me)],"--n-text-color-focus":Ce?zi(Ce):w[Re("textColorGhostHover",me)],"--n-text-color-disabled":Ce||w[Re("textColorGhostDisabled",me)]}}else if(oe){const Ce=Le?w.textColor:$e?w.textColorTertiary:w[Re("color",me)],ie=H||Ce,C=L!=="default"&&L!=="tertiary";W={"--n-color":C?Ke(ie,{alpha:Number(w.colorOpacitySecondary)}):w.colorSecondary,"--n-color-hover":C?Ke(ie,{alpha:Number(w.colorOpacitySecondaryHover)}):w.colorSecondaryHover,"--n-color-pressed":C?Ke(ie,{alpha:Number(w.colorOpacitySecondaryPressed)}):w.colorSecondaryPressed,"--n-color-focus":C?Ke(ie,{alpha:Number(w.colorOpacitySecondaryHover)}):w.colorSecondaryHover,"--n-color-disabled":w.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":ie,"--n-text-color-hover":ie,"--n-text-color-pressed":ie,"--n-text-color-focus":ie,"--n-text-color-disabled":ie}}else if(re||pe){const Ce=Le?w.textColor:$e?w.textColorTertiary:w[Re("color",me)],ie=H||Ce;re?(W["--n-color"]=w.colorTertiary,W["--n-color-hover"]=w.colorTertiaryHover,W["--n-color-pressed"]=w.colorTertiaryPressed,W["--n-color-focus"]=w.colorSecondaryHover,W["--n-color-disabled"]=w.colorTertiary):(W["--n-color"]=w.colorQuaternary,W["--n-color-hover"]=w.colorQuaternaryHover,W["--n-color-pressed"]=w.colorQuaternaryPressed,W["--n-color-focus"]=w.colorQuaternaryHover,W["--n-color-disabled"]=w.colorQuaternary),W["--n-ripple-color"]="#0000",W["--n-text-color"]=ie,W["--n-text-color-hover"]=ie,W["--n-text-color-pressed"]=ie,W["--n-text-color-focus"]=ie,W["--n-text-color-disabled"]=ie}else W={"--n-color":H||w[Re("color",me)],"--n-color-hover":H?zi(H):w[Re("colorHover",me)],"--n-color-pressed":H?Go(H):w[Re("colorPressed",me)],"--n-color-focus":H?zi(H):w[Re("colorFocus",me)],"--n-color-disabled":H||w[Re("colorDisabled",me)],"--n-ripple-color":H||w[Re("rippleColor",me)],"--n-text-color":B||(H?w.textColorPrimary:$e?w.textColorTertiary:w[Re("textColor",me)]),"--n-text-color-hover":B||(H?w.textColorHoverPrimary:w[Re("textColorHover",me)]),"--n-text-color-pressed":B||(H?w.textColorPressedPrimary:w[Re("textColorPressed",me)]),"--n-text-color-focus":B||(H?w.textColorFocusPrimary:w[Re("textColorFocus",me)]),"--n-text-color-disabled":B||(H?w.textColorDisabledPrimary:w[Re("textColorDisabled",me)])};let _e={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};O?_e={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:_e={"--n-border":w[Re("border",me)],"--n-border-hover":w[Re("borderHover",me)],"--n-border-pressed":w[Re("borderPressed",me)],"--n-border-focus":w[Re("borderFocus",me)],"--n-border-disabled":w[Re("borderDisabled",me)]};const{[Re("height",$)]:ke,[Re("fontSize",$)]:Oe,[Re("padding",$)]:Fe,[Re("paddingRound",$)]:Xe,[Re("iconSize",$)]:Ze,[Re("borderRadius",$)]:rt,[Re("iconMargin",$)]:fe,waveOpacity:ze}=w,Ie={"--n-width":I&&!O?ke:"initial","--n-height":O?"initial":ke,"--n-font-size":Oe,"--n-padding":I||O?"initial":Y?Xe:Fe,"--n-icon-size":Ze,"--n-icon-margin":fe,"--n-border-radius":O?"initial":I||Y?ke:rt};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":M,"--n-bezier-ease-out":A,"--n-ripple-duration":x,"--n-opacity-disabled":S,"--n-wave-opacity":ze},Pe),W),_e),Ie)}),T=m?Qt("button",he(()=>{let _="";const{dashed:M,type:A,ghost:w,text:x,color:S,round:R,circle:D,textColor:$,secondary:Z,tertiary:L,quaternary:N,strong:O}=n;M&&(_+="a"),w&&(_+="b"),x&&(_+="c"),R&&(_+="d"),D&&(_+="e"),Z&&(_+="f"),L&&(_+="g"),N&&(_+="h"),O&&(_+="i"),S&&(_+="j"+Sa(S)),$&&(_+="k"+Sa($));const{value:H}=s;return _+="l"+H[0],_+="m"+A[0],_}),y,n):void 0;return{selfElRef:e,waveElRef:t,mergedClsPrefix:g,mergedFocusable:a,mergedSize:s,showBorder:r,enterPressed:i,rtlEnabled:v,handleMousedown:l,handleKeydown:d,handleBlur:h,handleKeyup:u,handleClick:c,customColorCssVars:he(()=>{const{color:_}=n;if(!_)return null;const M=zi(_);return{"--n-border-color":_,"--n-border-color-hover":M,"--n-border-color-pressed":Go(_),"--n-border-color-focus":M,"--n-border-color-disabled":_}}),cssVars:m?void 0:y,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{mergedClsPrefix:n,tag:e,onRender:t}=this;t==null||t();const i=Dt(this.$slots.default,r=>r&&E("span",{class:`${n}-button__content`},r));return E(e,{ref:"selfElRef",class:[this.themeClass,`${n}-button`,`${n}-button--${this.type}-type`,`${n}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${n}-button--rtl`,this.disabled&&`${n}-button--disabled`,this.block&&`${n}-button--block`,this.enterPressed&&`${n}-button--pressed`,!this.text&&this.dashed&&`${n}-button--dashed`,this.color&&`${n}-button--color`,this.secondary&&`${n}-button--secondary`,this.loading&&`${n}-button--loading`,this.ghost&&`${n}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&i,E(w_,{width:!0},{default:()=>Dt(this.$slots.icon,r=>(this.loading||r)&&E("span",{class:`${n}-button__icon`,style:{margin:mo(this.$slots.default)?"0":""}},E(Va,null,{default:()=>this.loading?E(Wa,{clsPrefix:n,key:"loading",class:`${n}-icon-slot`,strokeWidth:20}):E("div",{key:"icon",class:`${n}-icon-slot`,role:"none"},r)})))}),this.iconPlacement==="left"&&i,this.text?null:E(Sy,{ref:"waveElRef",clsPrefix:n}),this.showBorder?E("div",{"aria-hidden":!0,class:`${n}-button__border`,style:this.customColorCssVars}):null,this.showBorder?E("div",{"aria-hidden":!0,class:`${n}-button__state-border`,style:this.customColorCssVars}):null)}});var Ji=vw;const xw=n=>{const{fontSize:e,boxShadow2:t,popoverColor:i,textColor2:r,borderRadius:o,borderColor:s,heightSmall:a,heightMedium:l,heightLarge:c,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:h,dividerColor:m}=n;return{panelFontSize:e,boxShadow:t,color:i,textColor:r,borderRadius:o,border:`1px solid ${s}`,heightSmall:a,heightMedium:l,heightLarge:c,fontSizeSmall:u,fontSizeMedium:d,fontSizeLarge:h,dividerColor:m}},bw={name:"ColorPicker",common:gn,peers:{Input:Jh,Button:ef},self:xw};var _w=bw;function yw(n,e){switch(n[0]){case"hex":return e?"#000000FF":"#000000";case"rgb":return e?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return e?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return e?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function Mo(n){return n===null?null:/^ *#/.test(n)?"hex":n.includes("rgb")?"rgb":n.includes("hsl")?"hsl":n.includes("hsv")?"hsv":null}function ww(n){return n=Math.round(n),n>=360?359:n<0?0:n}function Sw(n){return n=Math.round(n*100)/100,n>1?1:n<0?0:n}const Mw={rgb:{hex(n){return Si(It(n))},hsl(n){const[e,t,i,r]=It(n);return wi([...Ks(e,t,i),r])},hsv(n){const[e,t,i,r]=It(n);return Zi([...Ys(e,t,i),r])}},hex:{rgb(n){return kn(It(n))},hsl(n){const[e,t,i,r]=It(n);return wi([...Ks(e,t,i),r])},hsv(n){const[e,t,i,r]=It(n);return Zi([...Ys(e,t,i),r])}},hsl:{hex(n){const[e,t,i,r]=Lr(n);return Si([...Zs(e,t,i),r])},rgb(n){const[e,t,i,r]=Lr(n);return kn([...Zs(e,t,i),r])},hsv(n){const[e,t,i,r]=Lr(n);return Zi([...Od(e,t,i),r])}},hsv:{hex(n){const[e,t,i,r]=Ki(n);return Si([...bi(e,t,i),r])},rgb(n){const[e,t,i,r]=Ki(n);return kn([...bi(e,t,i),r])},hsl(n){const[e,t,i,r]=Ki(n);return wi([...xa(e,t,i),r])}}};function tf(n,e,t){return t=t||Mo(n),t?t===e?n:Mw[t][e](n):null}const fr="12px",Cw=12,Fi="6px",Tw=6,Ew="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)";var Aw=Be({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(n){const e=se(null);function t(o){!e.value||(ct("mousemove",document,i),ct("mouseup",document,r),i(o))}function i(o){const{value:s}=e;if(!s)return;const{width:a,left:l}=s.getBoundingClientRect(),c=ww((o.clientX-l-Tw)/(a-Cw)*360);n.onUpdateHue(c)}function r(){var o;at("mousemove",document,i),at("mouseup",document,r),(o=n.onComplete)===null||o===void 0||o.call(n)}return{railRef:e,handleMouseDown:t}},render(){const{clsPrefix:n}=this;return E("div",{class:`${n}-color-picker-slider`,style:{height:fr,borderRadius:Fi}},E("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:Ew,height:fr,borderRadius:Fi,position:"relative"},onMousedown:this.handleMouseDown},E("div",{style:{position:"absolute",left:Fi,right:Fi,top:0,bottom:0}},E("div",{class:`${n}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${Fi})`,borderRadius:Fi,width:fr,height:fr}},E("div",{class:`${n}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:Fi,width:fr,height:fr}})))))}});const so="12px",Pw=12,ki="6px";var Rw=Be({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(n){const e=se(null);function t(o){!e.value||!n.rgba||(ct("mousemove",document,i),ct("mouseup",document,r),i(o))}function i(o){const{value:s}=e;if(!s)return;const{width:a,left:l}=s.getBoundingClientRect(),c=(o.clientX-l)/(a-Pw);n.onUpdateAlpha(Sw(c))}function r(){var o;at("mousemove",document,i),at("mouseup",document,r),(o=n.onComplete)===null||o===void 0||o.call(n)}return{railRef:e,railBackgroundImage:he(()=>{const{rgba:o}=n;return o?`linear-gradient(to right, rgba(${o[0]}, ${o[1]}, ${o[2]}, 0) 0%, rgba(${o[0]}, ${o[1]}, ${o[2]}, 1) 100%)`:""}),handleMouseDown:t}},render(){const{clsPrefix:n}=this;return E("div",{class:`${n}-color-picker-slider`,ref:"railRef",style:{height:so,borderRadius:ki},onMousedown:this.handleMouseDown},E("div",{style:{borderRadius:ki,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},E("div",{class:`${n}-color-picker-checkboard`}),E("div",{class:`${n}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&E("div",{style:{position:"absolute",left:ki,right:ki,top:0,bottom:0}},E("div",{class:`${n}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${ki})`,borderRadius:ki,width:so,height:so}},E("div",{class:`${n}-color-picker-handle__fill`,style:{backgroundColor:kn(this.rgba),borderRadius:ki,width:so,height:so}}))))}});const jo="12px",qo="6px";var Lw=Be({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(n){const e=se(null);function t(o){!e.value||(ct("mousemove",document,i),ct("mouseup",document,r),i(o))}function i(o){const{value:s}=e;if(!s)return;const{width:a,height:l,left:c,bottom:u}=s.getBoundingClientRect(),d=(u-o.clientY)/l,h=(o.clientX-c)/a,m=100*(h>1?1:h<0?0:h),g=100*(d>1?1:d<0?0:d);n.onUpdateSV(m,g)}function r(){var o;at("mousemove",document,i),at("mouseup",document,r),(o=n.onComplete)===null||o===void 0||o.call(n)}return{palleteRef:e,handleColor:he(()=>{const{rgba:o}=n;return o?`rgb(${o[0]}, ${o[1]}, ${o[2]})`:""}),handleMouseDown:t}},render(){const{clsPrefix:n}=this;return E("div",{class:`${n}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},E("div",{class:`${n}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),E("div",{class:`${n}-color-picker-pallete__layer ${n}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&E("div",{class:`${n}-color-picker-handle`,style:{width:jo,height:jo,borderRadius:qo,left:`calc(${this.displayedSv[0]}% - ${qo})`,bottom:`calc(${this.displayedSv[1]}% - ${qo})`}},E("div",{class:`${n}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:qo,width:jo,height:jo}})))}});const Yl=$n("n-color-picker");function Dw(n){return/^\d{1,3}\.?\d*$/.test(n.trim())?Math.max(0,Math.min(parseInt(n),255)):!1}function Iw(n){return/^\d{1,3}\.?\d*$/.test(n.trim())?Math.max(0,Math.min(parseInt(n),360)):!1}function zw(n){return/^\d{1,3}\.?\d*$/.test(n.trim())?Math.max(0,Math.min(parseInt(n),100)):!1}function Fw(n){const e=n.trim();return/^#[0-9a-fA-F]+$/.test(e)?[4,5,7,9].includes(e.length):!1}function kw(n){return/^\d{1,3}\.?\d*%$/.test(n.trim())?Math.max(0,Math.min(parseInt(n),100)):!1}const Bw={paddingSmall:"0 4px"};var ru=Be({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(n){const e=se(""),{themeRef:t}=vt(Yl,null);ti(()=>{e.value=i()});function i(){const{value:s}=n;if(s===null)return"";const{label:a}=n;return a==="HEX"?s:a==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function r(s){e.value=s}function o(s){let a,l;switch(n.label){case"HEX":l=Fw(s),l&&n.onUpdateValue(s),e.value=i();break;case"H":a=Iw(s),a===!1?e.value=i():n.onUpdateValue(a);break;case"S":case"L":case"V":a=zw(s),a===!1?e.value=i():n.onUpdateValue(a);break;case"A":a=kw(s),a===!1?e.value=i():n.onUpdateValue(a);break;case"R":case"G":case"B":a=Dw(s),a===!1?e.value=i():n.onUpdateValue(a);break}}return{mergedTheme:t,inputValue:e,handleInputChange:o,handleInputUpdateValue:r}},render(){const{mergedTheme:n}=this;return E(sw,{size:"small",placeholder:this.label,theme:n.peers.Input,themeOverrides:n.peerOverrides.Input,builtinThemeOverrides:Bw,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),Ow=Be({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(n){return{handleUnitUpdateValue(e,t){const{showAlpha:i}=n;if(n.mode==="hex"){n.onUpdateValue((i?Si:po)(t));return}let r;switch(n.valueArr===null?r=[0,0,0,0]:r=Array.from(n.valueArr),n.mode){case"hsv":r[e]=t,n.onUpdateValue((i?Zi:el)(r));break;case"rgb":r[e]=t,n.onUpdateValue((i?kn:Qs)(r));break;case"hsl":r[e]=t,n.onUpdateValue((i?wi:tl)(r));break}}}},render(){const{clsPrefix:n,modes:e}=this;return E("div",{class:`${n}-color-picker-input`},E("div",{class:`${n}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:e.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),E(uw,null,{default:()=>{const{mode:t,valueArr:i,showAlpha:r}=this;if(t==="hex"){let o=null;try{o=i===null?null:(r?Si:po)(i)}catch{}return E(ru,{label:"HEX",showAlpha:r,value:o,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(t+(r?"a":"")).split("").map((o,s)=>E(ru,{label:o.toUpperCase(),value:i===null?null:i[s],onUpdateValue:a=>{this.handleUnitUpdateValue(s,a)}}))}}))}}),Nw=Be({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(n){const{colorPickerSlots:e,renderLabelRef:t}=vt(Yl,null);return()=>{const{hsla:i,value:r,clsPrefix:o,onClick:s,disabled:a}=n,l=e.label||t.value;return E("div",{class:[`${o}-color-picker-trigger`,a&&`${o}-color-picker-trigger--disabled`],onClick:a?void 0:s},E("div",{class:`${o}-color-picker-trigger__fill`},E("div",{class:`${o}-color-picker-checkboard`}),E("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:i?wi(i):""}}),r&&i?E("div",{class:`${o}-color-picker-trigger__value`,style:{color:i[2]>50||i[3]<.5?"black":"white"}},l?l(r):r):null))}}});function $w(n,e){if(e==="hsv"){const[t,i,r,o]=Ki(n);return kn([...bi(t,i,r),o])}return n}function Uw(n){const e=document.createElement("canvas").getContext("2d");return e.fillStyle=n,e.fillStyle}var Hw=Be({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(n){const e=he(()=>n.swatches.map(o=>{const s=Mo(o);return{value:o,mode:s,legalValue:$w(o,s)}}));function t(o){const{mode:s}=n;let{value:a,mode:l}=o;return l||(l="hex",/^[a-zA-Z]+$/.test(a)?a=Uw(a):(nl("color-picker",`color ${a} in swatches is invalid.`),a="#000000")),l===s?a:tf(a,s,l)}function i(o){n.onUpdateColor(t(o))}function r(o,s){o.key==="Enter"&&i(s)}return{parsedSwatchesRef:e,handleSwatchSelect:i,handleSwatchKeyDown:r}},render(){const{clsPrefix:n}=this;return E("div",{class:`${n}-color-picker-swatches`},this.parsedSwatchesRef.map(e=>E("div",{class:`${n}-color-picker-swatch`,tabindex:0,onClick:()=>this.handleSwatchSelect(e),onKeydown:t=>this.handleSwatchKeyDown(t,e)},E("div",{class:`${n}-color-picker-swatch__fill`,style:{background:e.legalValue}}))))}}),Vw=Be({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:n=>{const e=Mo(n);return Boolean(!n||e&&e!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(n){function e(t){var i;const r=t.target.value;(i=n.onUpdateColor)===null||i===void 0||i.call(n,tf(r.toUpperCase(),n.mode,"hex")),t.stopPropagation()}return{handleChange:e}},render(){const{clsPrefix:n}=this;return E("div",{class:`${n}-color-picker-preview__preview`},E("span",{class:`${n}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),E("input",{class:`${n}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),Ww=ue([ee("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),ee("color-picker-panel",`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[So(),ee("input",`
 text-align: center;
 `)]),ee("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[ue("&::after",`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),ee("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[K("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),ue("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),ee("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[K("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),ee("color-picker-pallete",`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[K("layer",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[Ae("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),ee("color-picker-preview",`
 display: flex;
 `,[K("sliders",`
 flex: 1 0 auto;
 `),K("preview",`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),K("fill",`
 display: block;
 width: 30px;
 height: 30px;
 `),K("input",`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),ee("color-picker-input",`
 display: flex;
 align-items: center;
 `,[ee("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),K("mode",`
 width: 72px;
 text-align: center;
 `)]),ee("color-picker-control",`
 padding: 12px;
 `),ee("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[ee("button","margin-left: 8px;")]),ee("color-picker-trigger",`
 border: var(--n-border);
 height: 100%;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 cursor: pointer;
 `,[K("value",`
 white-space: nowrap;
 position: relative;
 `),K("fill",`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),Ae("disabled","cursor: not-allowed"),ee("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[ue("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),ee("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[ee("color-picker-swatch",`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[K("fill",`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),ue("&:focus",`
 outline: none;
 `,[K("fill",[ue("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);const Gw=Object.assign(Object.assign({},st.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:$t.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]});var jw=Be({name:"ColorPicker",props:Gw,setup(n,{slots:e}){const t=se(null);let i=null;const r=jr(n),{mergedSizeRef:o,mergedDisabledRef:s}=r,{localeRef:a}=Ha("global"),{mergedClsPrefixRef:l,namespaceRef:c,inlineThemeDisabled:u}=mn(n),d=st("ColorPicker","-color-picker",Ww,_w,n,l);Sn(Yl,{themeRef:d,renderLabelRef:nt(n,"renderLabel"),colorPickerSlots:e});const h=se(n.defaultShow),m=Ei(nt(n,"show"),h);function g(fe){const{onUpdateShow:ze,"onUpdate:show":Ie}=n;ze&&Ye(ze,fe),Ie&&Ye(Ie,fe),h.value=fe}const{defaultValue:p}=n,f=se(p===void 0?yw(n.modes,n.showAlpha):p),v=Ei(nt(n,"value"),f),y=se([v.value]),T=se(0),_=he(()=>Mo(v.value)),{modes:M}=n,A=se(Mo(v.value)||M[0]||"rgb");function w(){const{modes:fe}=n,{value:ze}=A,Ie=fe.findIndex(Ce=>Ce===ze);~Ie?A.value=fe[(Ie+1)%fe.length]:A.value="rgb"}let x,S,R,D,$,Z,L,N;const O=he(()=>{const{value:fe}=v;if(!fe)return null;switch(_.value){case"hsv":return Ki(fe);case"hsl":return[x,S,R,N]=Lr(fe),[...Od(x,S,R),N];case"rgb":case"hex":return[$,Z,L,N]=It(fe),[...Ys($,Z,L),N]}}),H=he(()=>{const{value:fe}=v;if(!fe)return null;switch(_.value){case"rgb":case"hex":return It(fe);case"hsv":return[x,S,D,N]=Ki(fe),[...bi(x,S,D),N];case"hsl":return[x,S,R,N]=Lr(fe),[...Zs(x,S,R),N]}}),Y=he(()=>{const{value:fe}=v;if(!fe)return null;switch(_.value){case"hsl":return Lr(fe);case"hsv":return[x,S,D,N]=Ki(fe),[...xa(x,S,D),N];case"rgb":case"hex":return[$,Z,L,N]=It(fe),[...Ks($,Z,L),N]}}),I=he(()=>{switch(A.value){case"rgb":case"hex":return H.value;case"hsv":return O.value;case"hsl":return Y.value}}),B=se(0),oe=se(1),re=se([0,0]);function pe(fe,ze){const{value:Ie}=O,Ce=B.value,ie=Ie?Ie[3]:1;re.value=[fe,ze];const{showAlpha:C}=n;switch(A.value){case"hsv":W((C?Zi:el)([Ce,fe,ze,ie]),"cursor");break;case"hsl":W((C?wi:tl)([...xa(Ce,fe,ze),ie]),"cursor");break;case"rgb":W((C?kn:Qs)([...bi(Ce,fe,ze),ie]),"cursor");break;case"hex":W((C?Si:po)([...bi(Ce,fe,ze),ie]),"cursor");break}}function Te(fe){B.value=fe;const{value:ze}=O;if(!ze)return;const[,Ie,Ce,ie]=ze,{showAlpha:C}=n;switch(A.value){case"hsv":W((C?Zi:el)([fe,Ie,Ce,ie]),"cursor");break;case"rgb":W((C?kn:Qs)([...bi(fe,Ie,Ce),ie]),"cursor");break;case"hex":W((C?Si:po)([...bi(fe,Ie,Ce),ie]),"cursor");break;case"hsl":W((C?wi:tl)([...xa(fe,Ie,Ce),ie]),"cursor");break}}function Pe(fe){switch(A.value){case"hsv":[x,S,D]=O.value,W(Zi([x,S,D,fe]),"cursor");break;case"rgb":[$,Z,L]=H.value,W(kn([$,Z,L,fe]),"cursor");break;case"hex":[$,Z,L]=H.value,W(Si([$,Z,L,fe]),"cursor");break;case"hsl":[x,S,R]=Y.value,W(wi([x,S,R,fe]),"cursor");break}oe.value=fe}function W(fe,ze){ze==="cursor"?i=fe:i=null;const{nTriggerFormChange:Ie,nTriggerFormInput:Ce}=r,{onUpdateValue:ie,"onUpdate:value":C}=n;ie&&Ye(ie,fe),C&&Ye(C,fe),Ie(),Ce(),f.value=fe}function $e(fe){W(fe,"input"),Fn(Le)}function Le(fe=!0){const{value:ze}=v;if(ze){const{nTriggerFormChange:Ie,nTriggerFormInput:Ce}=r,{onComplete:ie}=n;ie&&ie(ze);const{value:C}=y,{value:b}=T;fe&&(C.splice(b+1,C.length,ze),T.value=b+1),Ie(),Ce()}}function me(){const{value:fe}=T;fe-1<0||(W(y.value[fe-1],"input"),Le(!1),T.value=fe-1)}function _e(){const{value:fe}=T;fe<0||fe+1>=y.value.length||(W(y.value[fe+1],"input"),Le(!1),T.value=fe+1)}function ke(){const{value:fe}=v,{onConfirm:ze}=n;ze&&ze(fe),g(!1)}const Oe=he(()=>T.value>=1),Fe=he(()=>{const{value:fe}=y;return fe.length>1&&T.value<fe.length-1});Pt(m,fe=>{fe||(y.value=[v.value],T.value=0)}),ti(()=>{if(!(i&&i===v.value)){const{value:fe}=O;fe&&(B.value=fe[0],oe.value=fe[3],re.value=[fe[1],fe[2]])}i=null});const Xe=he(()=>{const{value:fe}=o,{common:{cubicBezierEaseInOut:ze},self:{textColor:Ie,color:Ce,panelFontSize:ie,boxShadow:C,border:b,borderRadius:F,dividerColor:q,[Re("height",fe)]:ae,[Re("fontSize",fe)]:de}}=d.value;return{"--n-bezier":ze,"--n-text-color":Ie,"--n-color":Ce,"--n-panel-font-size":ie,"--n-font-size":de,"--n-box-shadow":C,"--n-border":b,"--n-border-radius":F,"--n-height":ae,"--n-divider-color":q}}),Ze=u?Qt("color-picker",he(()=>o.value[0]),Xe,n):void 0;function rt(){var fe;const{value:ze}=H,{value:Ie}=B,{internalActions:Ce,modes:ie,actions:C}=n,{value:b}=d,{value:F}=l;return E("div",{class:[`${F}-color-picker-panel`,Ze==null?void 0:Ze.themeClass.value],onDragstart:q=>{q.preventDefault()},style:u?void 0:Xe.value},E("div",{class:`${F}-color-picker-control`},E(Lw,{clsPrefix:F,rgba:ze,displayedHue:Ie,displayedSv:re.value,onUpdateSV:pe,onComplete:Le}),E("div",{class:`${F}-color-picker-preview`},E("div",{class:`${F}-color-picker-preview__sliders`},E(Aw,{clsPrefix:F,hue:Ie,onUpdateHue:Te,onComplete:Le}),n.showAlpha?E(Rw,{clsPrefix:F,rgba:ze,alpha:oe.value,onUpdateAlpha:Pe,onComplete:Le}):null),n.showPreview?E(Vw,{clsPrefix:F,mode:A.value,color:H.value&&po(H.value),onUpdateColor:q=>W(q,"input")}):null),E(Ow,{clsPrefix:F,showAlpha:n.showAlpha,mode:A.value,modes:ie,onUpdateMode:w,value:v.value,valueArr:I.value,onUpdateValue:$e}),((fe=n.swatches)===null||fe===void 0?void 0:fe.length)&&E(Hw,{clsPrefix:F,mode:A.value,swatches:n.swatches,onUpdateColor:q=>W(q,"input")})),C!=null&&C.length?E("div",{class:`${F}-color-picker-action`},C.includes("confirm")&&E(Ji,{size:"small",onClick:ke,theme:b.peers.Button,themeOverrides:b.peerOverrides.Button},{default:()=>a.value.confirm})):null,e.action?E("div",{class:`${F}-color-picker-action`},{default:e.action}):Ce?E("div",{class:`${F}-color-picker-action`},Ce.includes("undo")&&E(Ji,{size:"small",onClick:me,disabled:!Oe.value,theme:b.peers.Button,themeOverrides:b.peerOverrides.Button},{default:()=>a.value.undo}),Ce.includes("redo")&&E(Ji,{size:"small",onClick:_e,disabled:!Fe.value,theme:b.peers.Button,themeOverrides:b.peerOverrides.Button},{default:()=>a.value.redo})):null)}return{mergedClsPrefix:l,namespace:c,selfRef:t,hsla:Y,rgba:H,mergedShow:m,mergedDisabled:s,isMounted:Gr(),adjustedTo:$t(n),mergedValue:v,handleTriggerClick(){g(!0)},handleClickOutside(fe){var ze;!((ze=t.value)===null||ze===void 0)&&ze.contains(fe.target)||g(!1)},renderPanel:rt,cssVars:u?void 0:Xe,themeClass:Ze==null?void 0:Ze.themeClass,onRender:Ze==null?void 0:Ze.onRender}},render(){const{$slots:n,mergedClsPrefix:e,onRender:t}=this;return t==null||t(),E("div",{class:[this.themeClass,`${e}-color-picker`],ref:"selfRef",style:this.cssVars},E(ka,null,{default:()=>[E(Ba,null,{default:()=>E(Nw,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:n.label})}),E(Oa,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===$t.tdkey,to:this.adjustedTo},{default:()=>E(ni,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?Vr(this.renderPanel(),[[bo,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}});function qw(n){const{boxShadow2:e}=n;return{menuBoxShadow:e}}const Xw={name:"Select",common:gn,peers:{InternalSelection:Kh,InternalSelectMenu:jh},self:qw};var Yw=Xw,Kw=ue([ee("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),ee("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[So({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]);const Zw=Object.assign(Object.assign({},st.props),{to:$t.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,internalShowCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array});var Jw=Be({name:"Select",props:Zw,setup(n){const{mergedClsPrefixRef:e,mergedBorderedRef:t,namespaceRef:i,inlineThemeDisabled:r}=mn(n),o=st("Select","-select",Kw,Yw,n,e),s=se(n.defaultValue),a=nt(n,"value"),l=Ei(a,s),c=se(!1),u=se(""),d=he(()=>{const{valueField:z,childrenField:U}=n,le=Jy(z,U);return Q_($.value,le)}),h=he(()=>ew(R.value,n.valueField,n.childrenField)),m=se(!1),g=Ei(nt(n,"show"),m),p=se(null),f=se(null),v=se(null),{localeRef:y}=Ha("Select"),T=he(()=>{var z;return(z=n.placeholder)!==null&&z!==void 0?z:y.value.placeholder}),_=Xd(n,["items","options"]),M=[],A=se([]),w=se([]),x=se(new Map),S=he(()=>{const{fallbackOption:z}=n;if(z===void 0){const{labelField:U,valueField:le}=n;return te=>({[U]:String(te),[le]:te})}return z===!1?!1:U=>Object.assign(z(U),{value:U})}),R=he(()=>w.value.concat(A.value).concat(_.value)),D=he(()=>{const{labelField:z,valueField:U}=n;return(le,te)=>{if(!te)return!1;const ge=te[z];if(typeof ge=="string")return hs(le,ge);const Me=te[U];return typeof Me=="string"?hs(le,Me):typeof Me=="number"?hs(le,String(Me)):!1}}),$=he(()=>{if(n.remote)return _.value;{const{value:z}=R,{value:U}=u;return!U.length||!n.filterable?z:Qy(z,D.value,U,n.childrenField)}});function Z(z){const U=n.remote,{value:le}=x,{value:te}=h,{value:ge}=S,Me=[];return z.forEach(be=>{if(te.has(be))Me.push(te.get(be));else if(U&&le.has(be))Me.push(le.get(be));else if(ge){const Ve=ge(be);Ve&&Me.push(Ve)}}),Me}const L=he(()=>{if(n.multiple){const{value:z}=l;return Array.isArray(z)?Z(z):[]}return null}),N=he(()=>{const{value:z}=l;return!n.multiple&&!Array.isArray(z)?z===null?null:Z([z])[0]||null:null}),O=jr(n),{mergedSizeRef:H,mergedDisabledRef:Y,mergedStatusRef:I}=O;function B(z,U){const{onChange:le,"onUpdate:value":te,onUpdateValue:ge}=n,{nTriggerFormChange:Me,nTriggerFormInput:be}=O;le&&Ye(le,z,U),ge&&Ye(ge,z,U),te&&Ye(te,z,U),s.value=z,Me(),be()}function oe(z){const{onBlur:U}=n,{nTriggerFormBlur:le}=O;U&&Ye(U,z),le()}function re(){const{onClear:z}=n;z&&Ye(z)}function pe(z){const{onFocus:U}=n,{nTriggerFormFocus:le}=O;U&&Ye(U,z),le()}function Te(z){const{onSearch:U}=n;U&&Ye(U,z)}function Pe(z){const{onScroll:U}=n;U&&Ye(U,z)}function W(){var z;const{remote:U,multiple:le}=n;if(U){const{value:te}=x;if(le){const{valueField:ge}=n;(z=L.value)===null||z===void 0||z.forEach(Me=>{te.set(Me[ge],Me)})}else{const ge=N.value;ge&&te.set(ge[n.valueField],ge)}}}function $e(z){const{onUpdateShow:U,"onUpdate:show":le}=n;U&&Ye(U,z),le&&Ye(le,z),m.value=z}function Le(){Y.value||($e(!0),m.value=!0,n.filterable&&ye())}function me(){$e(!1)}function _e(){u.value="",w.value=M}const ke=se(!1);function Oe(){n.filterable&&(ke.value=!0)}function Fe(){n.filterable&&(ke.value=!1,g.value||_e())}function Xe(){Y.value||(g.value?n.filterable||me():Le())}function Ze(z){var U,le;!((le=(U=v.value)===null||U===void 0?void 0:U.selfRef)===null||le===void 0)&&le.contains(z.relatedTarget)||(c.value=!1,oe(z),me())}function rt(z){pe(z),c.value=!0}function fe(z){c.value=!0}function ze(z){var U;!((U=p.value)===null||U===void 0)&&U.$el.contains(z.relatedTarget)||(c.value=!1,oe(z),me())}function Ie(){var z;(z=p.value)===null||z===void 0||z.focus(),me()}function Ce(z){var U;g.value&&(!((U=p.value)===null||U===void 0)&&U.$el.contains(z.target)||me())}function ie(z){if(!Array.isArray(z))return[];if(S.value)return Array.from(z);{const{remote:U}=n,{value:le}=h;if(U){const{value:te}=x;return z.filter(ge=>le.has(ge)||te.has(ge))}else return z.filter(te=>le.has(te))}}function C(z){b(z.rawNode)}function b(z){if(Y.value)return;const{tag:U,remote:le,clearFilterAfterSelect:te,valueField:ge}=n;if(U&&!le){const{value:Me}=w,be=Me[0]||null;be&&(A.value.push(be),w.value=M)}if(le&&x.value.set(z[ge],z),n.multiple){const Me=ie(l.value),be=Me.findIndex(Ve=>Ve===z[ge]);if(~be){if(Me.splice(be,1),U&&!le){const Ve=F(z[ge]);~Ve&&(A.value.splice(Ve,1),te&&(u.value=""))}}else Me.push(z[ge]),te&&(u.value="");B(Me,Z(Me))}else{if(U&&!le){const Me=F(z[ge]);~Me?A.value=[A.value[Me]]:A.value=M}Se(),me(),B(z[ge],z)}}function F(z){return A.value.findIndex(le=>le[n.valueField]===z)}function q(z){g.value||Le();const{value:U}=z.target;u.value=U;const{tag:le,remote:te}=n;if(Te(U),le&&!te){if(!U){w.value=M;return}const{onCreate:ge}=n,Me=ge?ge(U):{[n.labelField]:U,[n.valueField]:U},{valueField:be}=n;_.value.some(Ve=>Ve[be]===Me[be])||A.value.some(Ve=>Ve[be]===Me[be])?w.value=M:w.value=[Me]}}function ae(z){z.stopPropagation();const{multiple:U}=n;!U&&n.filterable&&me(),re(),U?B([],[]):B(null,null)}function de(z){!wa(z,"action")&&!wa(z,"empty")&&z.preventDefault()}function De(z){Pe(z)}function J(z){var U,le,te,ge,Me;switch(z.key){case" ":if(n.filterable)break;z.preventDefault();case"Enter":if(!(!((U=p.value)===null||U===void 0)&&U.isCompositing)){if(g.value){const be=(le=v.value)===null||le===void 0?void 0:le.getPendingTmNode();be?C(be):n.filterable||(me(),Se())}else if(Le(),n.tag&&ke.value){const be=w.value[0];if(be){const Ve=be[n.valueField],{value:dt}=l;n.multiple&&Array.isArray(dt)&&dt.some(An=>An===Ve)||b(be)}}}z.preventDefault();break;case"ArrowUp":if(z.preventDefault(),n.loading)return;g.value&&((te=v.value)===null||te===void 0||te.prev());break;case"ArrowDown":if(z.preventDefault(),n.loading)return;g.value?(ge=v.value)===null||ge===void 0||ge.next():Le();break;case"Escape":me(),(Me=p.value)===null||Me===void 0||Me.focus();break}}function Se(){var z;(z=p.value)===null||z===void 0||z.focus()}function ye(){var z;(z=p.value)===null||z===void 0||z.focusInput()}function we(){var z;!g.value||(z=f.value)===null||z===void 0||z.syncPosition()}W(),Pt(nt(n,"options"),W);const k={focus:()=>{var z;(z=p.value)===null||z===void 0||z.focus()},blur:()=>{var z;(z=p.value)===null||z===void 0||z.blur()}},xe=he(()=>{const{self:{menuBoxShadow:z}}=o.value;return{"--n-menu-box-shadow":z}}),V=r?Qt("select",void 0,xe,n):void 0;return Object.assign(Object.assign({},k),{mergedStatus:I,mergedClsPrefix:e,mergedBordered:t,namespace:i,treeMate:d,isMounted:Gr(),triggerRef:p,menuRef:v,pattern:u,uncontrolledShow:m,mergedShow:g,adjustedTo:$t(n),uncontrolledValue:s,mergedValue:l,followerRef:f,localizedPlaceholder:T,selectedOption:N,selectedOptions:L,mergedSize:H,mergedDisabled:Y,focused:c,activeWithoutMenuOpen:ke,inlineThemeDisabled:r,onTriggerInputFocus:Oe,onTriggerInputBlur:Fe,handleTriggerOrMenuResize:we,handleMenuFocus:fe,handleMenuBlur:ze,handleMenuTabOut:Ie,handleTriggerClick:Xe,handleToggle:C,handleDeleteOption:b,handlePatternInput:q,handleClear:ae,handleTriggerBlur:Ze,handleTriggerFocus:rt,handleKeydown:J,handleMenuAfterLeave:_e,handleMenuClickOutside:Ce,handleMenuScroll:De,handleMenuKeydown:J,handleMenuMousedown:de,mergedTheme:o,cssVars:r?void 0:xe,themeClass:V==null?void 0:V.themeClass,onRender:V==null?void 0:V.onRender})},render(){return E("div",{class:`${this.mergedClsPrefix}-select`},E(ka,null,{default:()=>[E(Ba,null,{default:()=>E(Ky,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize},{arrow:()=>{var n,e;return[(e=(n=this.$slots).arrow)===null||e===void 0?void 0:e.call(n)]}})}),E(Oa,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===$t.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>E(ni,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var n,e,t;return this.mergedShow||this.displayDirective==="show"?((n=this.onRender)===null||n===void 0||n.call(this),Vr(E(yy,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(e=this.menuProps)===null||e===void 0?void 0:e.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(t=this.menuProps)===null||t===void 0?void 0:t.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.internalShowCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var i,r;return[(r=(i=this.$slots).empty)===null||r===void 0?void 0:r.call(i)]},action:()=>{var i,r;return[(r=(i=this.$slots).action)===null||r===void 0?void 0:r.call(i)]}}),this.displayDirective==="show"?[[kd,this.mergedShow],[bo,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[bo,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}}),Qw={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"};const eS=()=>Qw,tS={name:"Space",self:eS};var nS=tS;let fs;const iS=()=>{if(!jd)return!0;if(fs===void 0){const n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.rowGap="1px",n.appendChild(document.createElement("div")),n.appendChild(document.createElement("div")),document.body.appendChild(n);const e=n.scrollHeight===1;return document.body.removeChild(n),fs=e}return fs},rS=Object.assign(Object.assign({},st.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},itemStyle:[String,Object],wrap:{type:Boolean,default:!0}});var Co=Be({name:"Space",props:rS,setup(n){const{mergedClsPrefixRef:e,mergedRtlRef:t}=mn(n),i=st("Space","-space",void 0,nS,n,e),r=Ga("Space",t,e);return{useGap:iS(),rtlEnabled:r,mergedClsPrefix:e,margin:he(()=>{const{size:o}=n;if(Array.isArray(o))return{horizontal:o[0],vertical:o[1]};if(typeof o=="number")return{horizontal:o,vertical:o};const{self:{[Re("gap",o)]:s}}=i.value,{row:a,col:l}=tp(s);return{horizontal:Wt(l),vertical:Wt(a)}})}},render(){const{vertical:n,align:e,inline:t,justify:i,itemStyle:r,margin:o,wrap:s,mergedClsPrefix:a,rtlEnabled:l,useGap:c}=this,u=Rd(np(this));if(!u.length)return null;const d=`${o.horizontal}px`,h=`${o.horizontal/2}px`,m=`${o.vertical}px`,g=`${o.vertical/2}px`,p=u.length-1,f=i.startsWith("space-");return E("div",{role:"none",class:[`${a}-space`,l&&`${a}-space--rtl`],style:{display:t?"inline-flex":"flex",flexDirection:n?"column":"row",justifyContent:["start","end"].includes(i)?"flex-"+i:i,flexWrap:!s||n?"nowrap":"wrap",marginTop:c||n?"":`-${g}`,marginBottom:c||n?"":`-${g}`,alignItems:e,gap:c?`${o.vertical}px ${o.horizontal}px`:""}},u.map((v,y)=>E("div",{role:"none",style:[r,{maxWidth:"100%"},c?"":n?{marginBottom:y!==p?m:""}:l?{marginLeft:f?i==="space-between"&&y===p?"":h:y!==p?d:"",marginRight:f?i==="space-between"&&y===0?"":h:"",paddingTop:g,paddingBottom:g}:{marginRight:f?i==="space-between"&&y===p?"":h:y!==p?d:"",marginLeft:f?i==="space-between"&&y===0?"":h:"",paddingTop:g,paddingBottom:g}]},v)))}}),oS={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"};const aS=n=>{const e="rgba(0, 0, 0, .85)",t="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:i,primaryColor:r,baseColor:o,cardColor:s,modalColor:a,popoverColor:l,borderRadius:c,fontSize:u,opacityDisabled:d}=n;return Object.assign(Object.assign({},oS),{fontSize:u,railColor:i,railColorHover:i,fillColor:r,fillColorHover:r,opacityDisabled:d,handleColor:"#FFF",dotColor:s,dotColorModal:a,dotColorPopover:l,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:e,indicatorBoxShadow:t,indicatorTextColor:o,indicatorBorderRadius:c,dotBorder:`2px solid ${i}`,dotBorderActive:`2px solid ${r}`,dotBoxShadow:""})},sS={name:"Slider",common:gn,self:aS};var lS=sS,cS={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"};const uS=n=>{const{primaryColor:e,opacityDisabled:t,borderRadius:i,textColor3:r}=n,o="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},cS),{iconColor:r,textColor:"white",loadingColor:e,opacityDisabled:t,railColor:o,railColorActive:e,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:i,railBorderRadiusMedium:i,railBorderRadiusLarge:i,buttonBorderRadiusSmall:i,buttonBorderRadiusMedium:i,buttonBorderRadiusLarge:i,boxShadowFocus:`0 0 0 2px ${Ke(e,{alpha:.2})}`})},dS={name:"Switch",common:gn,self:uS};var hS=dS;function ou(n){return window.TouchEvent&&n instanceof window.TouchEvent}function au(){const n=se(new Map),e=t=>i=>{n.value.set(t,i)};return ip(()=>n.value.clear()),[n,e]}var fS=ue([ee("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 `,[Ae("reverse",[ee("slider-handles",[ee("slider-handle",`
 transform: translate(50%, -50%);
 `)]),ee("slider-dots",[ee("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),Ae("vertical",[ee("slider-handles",[ee("slider-handle",`
 transform: translate(-50%, -50%);
 `)]),ee("slider-marks",[ee("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),ee("slider-dots",[ee("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),Ae("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[ee("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[ee("slider-handle",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),ee("slider-rail",`
 height: 100%;
 `,[K("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),Ae("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),ee("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 `,[ee("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),ee("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[ee("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),Ae("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[ee("slider-handle",`
 cursor: not-allowed;
 `)]),Ae("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),ue("&:hover",[ee("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[K("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),ee("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),Ae("active",[ee("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[K("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),ee("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),ee("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[ee("slider-mark",{position:"absolute",transform:"translateX(-50%)"})]),ee("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[K("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),ee("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[ee("slider-handle",`
 outline: none;
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 overflow: hidden;
 cursor: pointer;
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[ue("&:hover",{boxShadow:"var(--n-handle-box-shadow-hover)"}),ue("&:hover:focus",{boxShadow:"var(--n-handle-box-shadow-active)"}),ue("&:focus",{boxShadow:"var(--n-handle-box-shadow-focus)"})])]),ee("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[Ae("transition-disabled",[ee("slider-dot",{transition:"none"})]),ee("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[Ae("active",{border:"var(--n-dot-border-active)"})])])]),ee("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[So()]),ee("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Ae("top",`
 margin-bottom: 12px;
 `),Ae("right",`
 margin-left: 12px;
 `),Ae("bottom",`
 margin-top: 12px;
 `),Ae("left",`
 margin-right: 12px;
 `),So()]),Up(ee("slider",[ee("slider-dot",{backgroundColor:"var(--n-dot-color-modal)"})])),Hp(ee("slider",[ee("slider-dot",{backgroundColor:"var(--n-dot-color-popover)"})]))]);const pS=0,mS=Object.assign(Object.assign({},st.props),{to:$t.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]});var zr=Be({name:"Slider",props:mS,setup(n){const{mergedClsPrefixRef:e,namespaceRef:t,inlineThemeDisabled:i}=mn(n),r=st("Slider","-slider",fS,lS,n,e),o=se(null),[s,a]=au(),[l,c]=au(),u=se(new Set),d=jr(n),{mergedDisabledRef:h}=d,m=he(()=>{const{step:b}=n;if(b<=0||b==="mark")return 0;const F=b.toString();let q=0;return F.includes(".")&&(q=F.length-F.indexOf(".")-1),q}),g=se(n.defaultValue),p=nt(n,"value"),f=Ei(p,g),v=he(()=>{const{value:b}=f;return(n.range?b:[b]).map(re)}),y=he(()=>v.value.length>2),T=he(()=>n.placement===void 0?n.vertical?"right":"top":n.placement),_=he(()=>{const{marks:b}=n;return b?Object.keys(b).map(parseFloat):null}),M=se(-1),A=se(-1),w=se(-1),x=se(!1),S=se(!1),R=he(()=>{const{vertical:b,reverse:F}=n;return b?F?"top":"bottom":F?"right":"left"}),D=he(()=>{if(y.value)return;const b=v.value,F=pe(n.range?Math.min(...b):n.min),q=pe(n.range?Math.max(...b):b[0]),{value:ae}=R;return n.vertical?{[ae]:`${F}%`,height:`${q-F}%`}:{[ae]:`${F}%`,width:`${q-F}%`}}),$=he(()=>{const b=[],{marks:F}=n;if(F){const q=v.value.slice();q.sort((Se,ye)=>Se-ye);const{value:ae}=R,{value:de}=y,{range:De}=n,J=de?()=>!1:Se=>De?Se>=q[0]&&Se<=q[q.length-1]:Se<=q[0];for(const Se of Object.keys(F)){const ye=Number(Se);b.push({active:J(ye),label:F[Se],style:{[ae]:`${pe(ye)}%`}})}}return b});function Z(b,F){const q=pe(b),{value:ae}=R;return{[ae]:`${q}%`,zIndex:F===M.value?1:0}}function L(b){return n.showTooltip||w.value===b||M.value===b&&x.value}function N(b){return!(M.value===b&&A.value===b)}function O(b){var F;~b&&(M.value=b,(F=s.value.get(b))===null||F===void 0||F.focus())}function H(){l.value.forEach((b,F)=>{L(F)&&b.syncPosition()})}function Y(b){const{"onUpdate:value":F,onUpdateValue:q}=n,{nTriggerFormInput:ae,nTriggerFormChange:de}=d;q&&Ye(q,b),F&&Ye(F,b),g.value=b,ae(),de()}function I(b){const{range:F}=n;if(F){if(Array.isArray(b)){const{value:q}=v;b.join()!==q.join()&&Y(b)}}else Array.isArray(b)||v.value[0]!==b&&Y(b)}function B(b,F){if(n.range){const q=v.value.slice();q.splice(F,1,b),I(q)}else I(b)}function oe(b,F,q){const ae=q!==void 0;q||(q=b-F>0?1:-1);const de=_.value||[],{step:De}=n;if(De==="mark"){const ye=W(b,de.concat(F),ae?q:void 0);return ye?ye.value:F}if(De<=0)return F;const{value:J}=m;let Se;if(ae){const ye=Number((F/De).toFixed(J)),we=Math.floor(ye),k=ye>we?we:we-1,xe=ye<we?we:we+1;Se=W(F,[Number((k*De).toFixed(J)),Number((xe*De).toFixed(J)),...de],q)}else{const ye=Pe(b);Se=W(b,[...de,ye])}return Se?re(Se.value):F}function re(b){return Math.min(n.max,Math.max(n.min,b))}function pe(b){const{max:F,min:q}=n;return(b-q)/(F-q)*100}function Te(b){const{max:F,min:q}=n;return q+(F-q)*b}function Pe(b){const{step:F,min:q}=n;if(F<=0||F==="mark")return b;const ae=Math.round((b-q)/F)*F+q;return Number(ae.toFixed(m.value))}function W(b,F=_.value,q){if(!F||!F.length)return null;let ae=null,de=-1;for(;++de<F.length;){const De=F[de]-b,J=Math.abs(De);(q===void 0||De*q>0)&&(ae===null||J<ae.distance)&&(ae={index:de,distance:J,value:F[de]})}return ae}function $e(b){const F=o.value;if(!F)return;const q=ou(b)?b.touches[0]:b,ae=F.getBoundingClientRect();let de;return n.vertical?de=(ae.bottom-q.clientY)/ae.height:de=(q.clientX-ae.left)/ae.width,n.reverse&&(de=1-de),Te(de)}function Le(b){if(h.value)return;const{vertical:F,reverse:q}=n;switch(b.key){case"ArrowUp":b.preventDefault(),me(F&&q?-1:1);break;case"ArrowRight":b.preventDefault(),me(!F&&q?-1:1);break;case"ArrowDown":b.preventDefault(),me(F&&q?1:-1);break;case"ArrowLeft":b.preventDefault(),me(!F&&q?1:-1);break}}function me(b){const F=M.value;if(F===-1)return;const{step:q}=n,ae=v.value[F],de=q<=0||q==="mark"?ae:ae+q*b;B(oe(de,ae,b>0?1:-1),F)}function _e(b){var F,q;if(h.value||!ou(b)&&b.button!==pS)return;const ae=$e(b);if(ae===void 0)return;const de=v.value.slice(),De=n.range?(q=(F=W(ae,de))===null||F===void 0?void 0:F.index)!==null&&q!==void 0?q:-1:0;De!==-1&&(b.preventDefault(),O(De),ke(),B(oe(ae,v.value[De]),De))}function ke(){x.value||(x.value=!0,ct("touchend",document,Xe),ct("mouseup",document,Xe),ct("touchmove",document,Fe),ct("mousemove",document,Fe))}function Oe(){x.value&&(x.value=!1,at("touchend",document,Xe),at("mouseup",document,Xe),at("touchmove",document,Fe),at("mousemove",document,Fe))}function Fe(b){const{value:F}=M;if(!x.value||F===-1){Oe();return}const q=$e(b);B(oe(q,v.value[F]),F)}function Xe(){Oe()}function Ze(b){M.value=b,h.value||(w.value=b)}function rt(b){M.value===b&&(M.value=-1,Oe()),w.value===b&&(w.value=-1)}function fe(b){w.value=b}function ze(b){w.value===b&&(w.value=-1)}Pt(M,(b,F)=>void Fn(()=>A.value=F)),Pt(f,()=>{if(n.marks){if(S.value)return;S.value=!0,Fn(()=>{S.value=!1})}Fn(H)}),tn(()=>{Oe()});const Ie=he(()=>{const{self:{railColor:b,railColorHover:F,fillColor:q,fillColorHover:ae,handleColor:de,opacityDisabled:De,dotColor:J,dotColorModal:Se,handleBoxShadow:ye,handleBoxShadowHover:we,handleBoxShadowActive:k,handleBoxShadowFocus:xe,dotBorder:V,dotBoxShadow:z,railHeight:U,railWidthVertical:le,handleSize:te,dotHeight:ge,dotWidth:Me,dotBorderRadius:be,fontSize:Ve,dotBorderActive:dt,dotColorPopover:An},common:{cubicBezierEaseInOut:ai}}=r.value;return{"--n-bezier":ai,"--n-dot-border":V,"--n-dot-border-active":dt,"--n-dot-border-radius":be,"--n-dot-box-shadow":z,"--n-dot-color":J,"--n-dot-color-modal":Se,"--n-dot-color-popover":An,"--n-dot-height":ge,"--n-dot-width":Me,"--n-fill-color":q,"--n-fill-color-hover":ae,"--n-font-size":Ve,"--n-handle-box-shadow":ye,"--n-handle-box-shadow-active":k,"--n-handle-box-shadow-focus":xe,"--n-handle-box-shadow-hover":we,"--n-handle-color":de,"--n-handle-size":te,"--n-opacity-disabled":De,"--n-rail-color":b,"--n-rail-color-hover":F,"--n-rail-height":U,"--n-rail-width-vertical":le}}),Ce=i?Qt("slider",void 0,Ie,n):void 0,ie=he(()=>{const{self:{fontSize:b,indicatorColor:F,indicatorBoxShadow:q,indicatorTextColor:ae,indicatorBorderRadius:de}}=r.value;return{"--n-font-size":b,"--n-indicator-border-radius":de,"--n-indicator-box-shadow":q,"--n-indicator-color":F,"--n-indicator-text-color":ae}}),C=i?Qt("slider-indicator",void 0,ie,n):void 0;return{mergedClsPrefix:e,namespace:t,uncontrolledValue:g,mergedValue:f,mergedDisabled:h,mergedPlacement:T,isMounted:Gr(),adjustedTo:$t(n),dotTransitionDisabled:S,markInfos:$,isShowTooltip:L,isSkipCSSDetection:N,handleRailRef:o,setHandleRefs:a,setFollowerRefs:c,fillStyle:D,getHandleStyle:Z,activeIndex:M,arrifiedValues:v,followerEnabledIndexSet:u,handleRailMouseDown:_e,handleHandleFocus:Ze,handleHandleBlur:rt,handleHandleMouseEnter:fe,handleHandleMouseLeave:ze,handleRailKeyDown:Le,indicatorCssVars:i?void 0:ie,indicatorThemeClass:C==null?void 0:C.themeClass,indicatorOnRender:C==null?void 0:C.onRender,cssVars:i?void 0:Ie,themeClass:Ce==null?void 0:Ce.themeClass,onRender:Ce==null?void 0:Ce.onRender}},render(){var n;const{mergedClsPrefix:e,themeClass:t,formatTooltip:i}=this;return(n=this.onRender)===null||n===void 0||n.call(this),E("div",{class:[`${e}-slider`,t,{[`${e}-slider--disabled`]:this.mergedDisabled,[`${e}-slider--active`]:this.activeIndex!==-1,[`${e}-slider--with-mark`]:this.marks,[`${e}-slider--vertical`]:this.vertical,[`${e}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},E("div",{class:`${e}-slider-rail`},E("div",{class:`${e}-slider-rail__fill`,style:this.fillStyle}),this.marks?E("div",{class:[`${e}-slider-dots`,this.dotTransitionDisabled&&`${e}-slider-dots--transition-disabled`]},this.markInfos.map(r=>E("div",{key:r.label,class:[`${e}-slider-dot`,{[`${e}-slider-dot--active`]:r.active}],style:r.style}))):null,E("div",{ref:"handleRailRef",class:`${e}-slider-handles`},this.arrifiedValues.map((r,o)=>{const s=this.isShowTooltip(o);return E(ka,null,{default:()=>[E(Ba,null,{default:()=>E("div",{ref:this.setHandleRefs(o),class:`${e}-slider-handle`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(r,o),onFocus:()=>this.handleHandleFocus(o),onBlur:()=>this.handleHandleBlur(o),onMouseenter:()=>this.handleHandleMouseEnter(o),onMouseleave:()=>this.handleHandleMouseLeave(o)})}),this.tooltip&&E(Oa,{ref:this.setFollowerRefs(o),show:s,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(o),teleportDisabled:this.adjustedTo===$t.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>E(ni,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.isSkipCSSDetection(o),onEnter:()=>this.followerEnabledIndexSet.add(o),onAfterLeave:()=>this.followerEnabledIndexSet.delete(o)},{default:()=>{var a;return s?((a=this.indicatorOnRender)===null||a===void 0||a.call(this),E("div",{class:[`${e}-slider-handle-indicator`,this.indicatorThemeClass,`${e}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof i=="function"?i(r):r)):null}})})]})})),this.marks?E("div",{class:`${e}-slider-marks`},this.markInfos.map(r=>E("div",{key:r.label,class:`${e}-slider-mark`,style:r.style},r.label))):null))}}),gS=ee("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[K("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),K("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),K("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),ee("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Br({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),K("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),K("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),K("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),ue("&:focus",[K("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),Ae("round",[K("rail","border-radius: calc(var(--n-rail-height) / 2);",[K("button","border-radius: calc(var(--n-button-height) / 2);")])]),St("disabled",[St("icon",[Ae("rubber-band",[Ae("pressed",[K("rail",[K("button","max-width: var(--n-button-width-pressed);")])]),K("rail",[ue("&:active",[K("button","max-width: var(--n-button-width-pressed);")])]),Ae("active",[Ae("pressed",[K("rail",[K("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),K("rail",[ue("&:active",[K("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),Ae("active",[K("rail",[K("button","left: calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)")])]),K("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[K("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[Br()]),K("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-width);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),Ae("active",[K("rail","background-color: var(--n-rail-color-active);")]),Ae("loading",[K("rail",`
 cursor: wait;
 `)]),Ae("disabled",[K("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]);const vS=Object.assign(Object.assign({},st.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});var xS=Be({name:"Switch",props:vS,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=mn(n),i=st("Switch","-switch",gS,hS,n,e),r=jr(n),{mergedSizeRef:o,mergedDisabledRef:s}=r,a=se(n.defaultValue),l=nt(n,"value"),c=Ei(l,a),u=he(()=>c.value===n.checkedValue),d=se(!1),h=se(!1),m=he(()=>{const{railStyle:x}=n;if(!!x)return x({focused:h.value,checked:u.value})});function g(x){const{"onUpdate:value":S,onChange:R,onUpdateValue:D}=n,{nTriggerFormInput:$,nTriggerFormChange:Z}=r;S&&Ye(S,x),D&&Ye(D,x),R&&Ye(R,x),a.value=x,$(),Z()}function p(){const{nTriggerFormFocus:x}=r;x()}function f(){const{nTriggerFormBlur:x}=r;x()}function v(){n.loading||s.value||(c.value!==n.checkedValue?g(n.checkedValue):g(n.uncheckedValue))}function y(){h.value=!0,p()}function T(){h.value=!1,f(),d.value=!1}function _(x){n.loading||s.value||x.key===" "&&(c.value!==n.checkedValue?g(n.checkedValue):g(n.uncheckedValue),d.value=!1)}function M(x){n.loading||s.value||x.key===" "&&(x.preventDefault(),d.value=!0)}const A=he(()=>{const{value:x}=o,{self:{opacityDisabled:S,railColor:R,railColorActive:D,buttonBoxShadow:$,buttonColor:Z,boxShadowFocus:L,loadingColor:N,textColor:O,iconColor:H,[Re("buttonHeight",x)]:Y,[Re("buttonWidth",x)]:I,[Re("buttonWidthPressed",x)]:B,[Re("railHeight",x)]:oe,[Re("railWidth",x)]:re,[Re("railBorderRadius",x)]:pe,[Re("buttonBorderRadius",x)]:Te},common:{cubicBezierEaseInOut:Pe}}=i.value,W=Wi((Wt(oe)-Wt(Y))/2),$e=Wi(Math.max(Wt(oe),Wt(Y))),Le=Wt(oe)>Wt(Y)?re:Wi(Wt(re)+Wt(Y)-Wt(oe));return{"--n-bezier":Pe,"--n-button-border-radius":Te,"--n-button-box-shadow":$,"--n-button-color":Z,"--n-button-width":I,"--n-button-width-pressed":B,"--n-button-height":Y,"--n-height":$e,"--n-offset":W,"--n-opacity-disabled":S,"--n-rail-border-radius":pe,"--n-rail-color":R,"--n-rail-color-active":D,"--n-rail-height":oe,"--n-rail-width":re,"--n-width":Le,"--n-box-shadow-focus":L,"--n-loading-color":N,"--n-text-color":O,"--n-icon-color":H}}),w=t?Qt("switch",he(()=>o.value[0]),A,n):void 0;return{handleClick:v,handleBlur:T,handleFocus:y,handleKeyup:_,handleKeydown:M,mergedRailStyle:m,pressed:d,mergedClsPrefix:e,mergedValue:c,checked:u,mergedDisabled:s,cssVars:t?void 0:A,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{mergedClsPrefix:n,mergedDisabled:e,checked:t,mergedRailStyle:i,onRender:r,$slots:o}=this;r==null||r();const{checked:s,unchecked:a,icon:l,"checked-icon":c,"unchecked-icon":u}=o,d=!(mo(l)&&mo(c)&&mo(u));return E("div",{role:"switch","aria-checked":t,class:[`${n}-switch`,this.themeClass,d&&`${n}-switch--icon`,t&&`${n}-switch--active`,e&&`${n}-switch--disabled`,this.round&&`${n}-switch--round`,this.loading&&`${n}-switch--loading`,this.pressed&&`${n}-switch--pressed`,this.rubberBand&&`${n}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},E("div",{class:`${n}-switch__rail`,"aria-hidden":"true",style:i},Dt(s,h=>Dt(a,m=>h||m?E("div",{"aria-hidden":!0,class:`${n}-switch__children-placeholder`},E("div",{class:`${n}-switch__rail-placeholder`},E("div",{class:`${n}-switch__button-placeholder`}),h),E("div",{class:`${n}-switch__rail-placeholder`},E("div",{class:`${n}-switch__button-placeholder`}),m)):null)),E("div",{class:`${n}-switch__button`},Dt(l,h=>Dt(c,m=>Dt(u,g=>E(Va,null,{default:()=>this.loading?E(Wa,{key:"loading",clsPrefix:n,strokeWidth:20}):this.checked&&(m||h)?E("div",{class:`${n}-switch__button-icon`,key:m?"checked-icon":"icon"},m||h):!this.checked&&(g||h)?E("div",{class:`${n}-switch__button-icon`,key:g?"unchecked-icon":"icon"},g||h):null})))),Dt(s,h=>h&&E("div",{key:"checked",class:`${n}-switch__checked`},h)),Dt(a,h=>h&&E("div",{key:"unchecked",class:`${n}-switch__unchecked`},h)))))}});var Ro=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t};const bS=n=>(Ia("data-v-22def58b"),n=n(),za(),n),_S={class:"camera-controls"},yS=bS(()=>dn("h2",null,"Camera controls",-1)),wS=hn("Reset Camera"),SS=Be({name:"CameraControls",props:{camera:null},setup(n){const e=n,t=se(e);function i(r){r.position.setX(0),r.position.setY(0),r.position.setZ(30),r.lookAt(0,0,0)}return(r,o)=>(Kt(),Mn("div",_S,[yS,(Kt(!0),Mn(Tn,null,Al(t.value.camera,(s,a)=>(Kt(),Mn("div",{key:s.uuid},[ft(lt(Co),{class:"options",vertical:""},{default:Zt(()=>[dn("span",null,"Camera Position X: "+yi(s.position.x),1),ft(lt(zr),{value:s.position.x,"onUpdate:value":[l=>s.position.x=l,l=>s.lookAt(0,0,0)],"default-value":e.camera[a].position.x,step:.1,min:-50,max:50},null,8,["value","onUpdate:value","default-value","step"]),hn(" Camera Position Y: "+yi(s.position.y)+" ",1),ft(lt(zr),{value:s.position.y,"onUpdate:value":[l=>s.position.y=l,l=>s.lookAt(0,0,0)],"default-value":e.camera[a].position.y,step:.1,min:-50,max:50},null,8,["value","onUpdate:value","default-value","step"]),hn(" Camera Position Z: "+yi(s.position.z)+" ",1),ft(lt(zr),{value:s.position.z,"onUpdate:value":[l=>s.position.z=l,l=>s.lookAt(0,0,0)],"default-value":e.camera[a].position.z,step:.1,min:-50,max:50},null,8,["value","onUpdate:value","default-value","step"])]),_:2},1024),ft(lt(Ji),{onClick:l=>i(s)},{default:Zt(()=>[wS]),_:2},1032,["onClick"])]))),128))]))}});var MS=Ro(SS,[["__scopeId","data-v-22def58b"]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kl="141",CS=0,su=1,TS=2,nf=1,ES=2,ho=3,To=0,Cn=1,Or=2,AS=1,Mi=0,Fr=1,lu=2,cu=3,uu=4,PS=5,Ar=100,RS=101,LS=102,du=103,hu=104,DS=200,IS=201,zS=202,FS=203,rf=204,of=205,kS=206,BS=207,OS=208,NS=209,$S=210,US=0,HS=1,VS=2,vl=3,WS=4,GS=5,jS=6,qS=7,ja=0,XS=1,YS=2,ei=0,KS=1,ZS=2,JS=3,QS=4,e1=5,af=300,Nr=301,$r=302,xl=303,bl=304,qa=306,_l=1e3,yn=1001,yl=1002,Gt=1003,fu=1004,pu=1005,ln=1006,t1=1007,Xa=1008,ir=1009,n1=1010,i1=1011,sf=1012,r1=1013,qi=1014,Xi=1015,Eo=1016,o1=1017,a1=1018,kr=1020,s1=1021,l1=1022,wn=1023,c1=1024,u1=1025,Qi=1026,Ur=1027,d1=1028,h1=1029,f1=1030,p1=1031,m1=1033,ps=33776,ms=33777,gs=33778,vs=33779,mu=35840,gu=35841,vu=35842,xu=35843,g1=36196,bu=37492,_u=37496,yu=37808,wu=37809,Su=37810,Mu=37811,Cu=37812,Tu=37813,Eu=37814,Au=37815,Pu=37816,Ru=37817,Lu=37818,Du=37819,Iu=37820,zu=37821,Fu=36492,rr=3e3,gt=3001,v1=3200,x1=3201,Kr=0,b1=1,Zn="srgb",Yi="srgb-linear",xs=7680,_1=519,ku=35044,Bu="300 es",wl=1035;class Zr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Lt=[];for(let n=0;n<256;n++)Lt[n]=(n<16?"0":"")+n.toString(16);const bs=Math.PI/180,Ou=180/Math.PI;function Lo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function jt(n,e,t){return Math.max(e,Math.min(t,n))}function y1(n,e){return(n%e+e)%e}function _s(n,e,t){return(1-t)*n+t*e}function Nu(n){return(n&n-1)===0&&n!==0}function Sl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class tt{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zn{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=o,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],m=i[5],g=i[8],p=r[0],f=r[3],v=r[6],y=r[1],T=r[4],_=r[7],M=r[2],A=r[5],w=r[8];return o[0]=s*p+a*y+l*M,o[3]=s*f+a*T+l*A,o[6]=s*v+a*_+l*w,o[1]=c*p+u*y+d*M,o[4]=c*f+u*T+d*A,o[7]=c*v+u*_+d*w,o[2]=h*p+m*y+g*M,o[5]=h*f+m*T+g*A,o[8]=h*v+m*_+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*a*c-i*o*u+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*s-a*c,h=a*l-u*o,m=c*o-s*l,g=t*d+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=d*p,e[1]=(r*c-u*i)*p,e[2]=(a*i-r*s)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*o-a*t)*p,e[6]=m*p,e[7]=(i*l-c*t)*p,e[8]=(s*t-i*o)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,o=r[0],s=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*o+i*l,r[3]=t*s+i*c,r[6]=t*a+i*u,r[1]=-i*o+t*l,r[4]=-i*s+t*c,r[7]=-i*a+t*u,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function lf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function Da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _a(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ys={[Zn]:{[Yi]:er},[Yi]:{[Zn]:_a}},vn={legacyMode:!0,get workingColorSpace(){return Yi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(ys[e]&&ys[e][t]!==void 0){const i=ys[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tt={r:0,g:0,b:0},xn={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function ws(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Yo(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class We{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Yi){return this.r=e,this.g=t,this.b=i,vn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Yi){if(e=y1(e,1),t=jt(t,0,1),i=jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=ws(s,o,e+1/3),this.g=ws(s,o,e),this.b=ws(s,o,e-1/3)}return vn.toWorkingColorSpace(this,r),this}setStyle(e,t=Zn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,vn.toWorkingColorSpace(this,t),i(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,vn.toWorkingColorSpace(this,t),i(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(o[1])/360,c=parseInt(o[2],10)/100,u=parseInt(o[3],10)/100;return i(o[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,vn.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,vn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Zn){const i=cf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return vn.fromWorkingColorSpace(Yo(this,Tt),e),jt(Tt.r*255,0,255)<<16^jt(Tt.g*255,0,255)<<8^jt(Tt.b*255,0,255)<<0}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yi){vn.fromWorkingColorSpace(Yo(this,Tt),t);const i=Tt.r,r=Tt.g,o=Tt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const d=s-a;switch(c=u<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Yi){return vn.fromWorkingColorSpace(Yo(this,Tt),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Zn){return vn.fromWorkingColorSpace(Yo(this,Tt),e),e!==Zn?`color(${e} ${Tt.r} ${Tt.g} ${Tt.b})`:`rgb(${Tt.r*255|0},${Tt.g*255|0},${Tt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(xn),xn.h+=e,xn.s+=t,xn.l+=i,this.setHSL(xn.h,xn.s,xn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(Xo);const i=_s(xn.h,Xo.h,t),r=_s(xn.s,Xo.s,t),o=_s(xn.l,Xo.l,t);return this.setHSL(i,r,o),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}We.NAMES=cf;let pr;class uf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pr===void 0&&(pr=Da("canvas")),pr.width=e.width,pr.height=e.height;const i=pr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=pr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Da("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=er(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(er(t[i]/255)*255):t[i]=er(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class df{constructor(e=null){this.isSource=!0,this.uuid=Lo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Ss(r[s].image)):o.push(Ss(r[s]))}else o=Ss(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function Ss(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?uf.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let w1=0;class En extends Zr{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,i=yn,r=yn,o=ln,s=Xa,a=wn,l=ir,c=1,u=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=Lo(),this.name="",this.source=new df(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _l:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case yl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _l:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case yl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=af;class zt{constructor(e=0,t=0,i=0,r=1){this.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],g=l[9],p=l[2],f=l[6],v=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+p)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,_=(m+1)/2,M=(v+1)/2,A=(u+h)/4,w=(d+p)/4,x=(g+f)/4;return T>_&&T>M?T<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(T),r=A/i,o=w/i):_>M?_<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(_),i=A/r,o=x/r):M<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(M),i=w/o,r=x/o),this.set(i,r,o,t),this}let y=Math.sqrt((f-g)*(f-g)+(d-p)*(d-p)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(d-p)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ci extends Zr{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new En(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ln,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new df(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hf extends En{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class S1 extends En{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,o,s,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=o[s+0],m=o[s+1],g=o[s+2],p=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(d!==p||l!==h||c!==m||u!==g){let f=1-a;const v=l*h+c*m+u*g+d*p,y=v>=0?1:-1,T=1-v*v;if(T>Number.EPSILON){const M=Math.sqrt(T),A=Math.atan2(M,v*y);f=Math.sin(f*A)/M,a=Math.sin(a*A)/M}const _=a*y;if(l=l*f+h*_,c=c*f+m*_,u=u*f+g*_,d=d*f+p*_,f===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=o[s],h=o[s+1],m=o[s+2],g=o[s+3];return e[t]=a*g+u*d+l*m-c*h,e[t+1]=l*g+u*h+c*d-a*m,e[t+2]=c*g+u*m+a*h-l*d,e[t+3]=u*g-a*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(o/2),h=l(i/2),m=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d+h*m*g;break;case"YZX":this._x=h*u*d+c*m*g,this._y=c*m*d+h*u*g,this._z=c*u*g-h*m*d,this._w=c*u*d-h*m*g;break;case"XZY":this._x=h*u*d-c*m*g,this._y=c*m*d-h*u*g,this._z=c*u*g+h*m*d,this._w=c*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(o-c)*m,this._z=(s-r)*m}else if(i>a&&i>d){const m=2*Math.sqrt(1+i-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+c)/m}else if(a>d){const m=2*Math.sqrt(1+a-i-d);this._w=(o-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-a);this._w=(s-r)/m,this._x=(o+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-i*c,this._z=o*u+s*c+i*l-r*a,this._w=s*u-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(o),i*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){this.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion($u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($u.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=l*t+s*r-a*i,u=l*i+a*t-o*r,d=l*r+o*i-s*t,h=-o*t-s*i-a*r;return this.x=c*l+h*-o+u*-a-d*-s,this.y=u*l+h*-s+d*-o-c*-a,this.z=d*l+h*-a+c*-s-u*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ms.copy(this).projectOnVector(e),this.sub(Ms)}reflect(e){return this.sub(Ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ms=new j,$u=new Do;class Io{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],h=e[l+2];u<t&&(t=u),d<i&&(i=d),h<r&&(r=h),u>o&&(o=u),d>s&&(s=d),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(o,s,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),h=e.getZ(l);u<t&&(t=u),d<i&&(i=d),h<r&&(r=h),u>o&&(o=u),d>s&&(s=d),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(o,s,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const o=i.attributes.position;for(let s=0,a=o.count;s<a;s++)Bi.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(Bi)}else i.boundingBox===null&&i.computeBoundingBox(),Cs.copy(i.boundingBox),Cs.applyMatrix4(e.matrixWorld),this.union(Cs);const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lo),Ko.subVectors(this.max,lo),mr.subVectors(e.a,lo),gr.subVectors(e.b,lo),vr.subVectors(e.c,lo),hi.subVectors(gr,mr),fi.subVectors(vr,gr),Oi.subVectors(mr,vr);let t=[0,-hi.z,hi.y,0,-fi.z,fi.y,0,-Oi.z,Oi.y,hi.z,0,-hi.x,fi.z,0,-fi.x,Oi.z,0,-Oi.x,-hi.y,hi.x,0,-fi.y,fi.x,0,-Oi.y,Oi.x,0];return!Ts(t,mr,gr,vr,Ko)||(t=[1,0,0,0,1,0,0,0,1],!Ts(t,mr,gr,vr,Ko))?!1:(Zo.crossVectors(hi,fi),t=[Zo.x,Zo.y,Zo.z],Ts(t,mr,gr,vr,Ko))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Bi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new j,new j,new j,new j,new j,new j,new j,new j],Bi=new j,Cs=new Io,mr=new j,gr=new j,vr=new j,hi=new j,fi=new j,Oi=new j,lo=new j,Ko=new j,Zo=new j,Ni=new j;function Ts(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){Ni.fromArray(n,o);const a=r.x*Math.abs(Ni.x)+r.y*Math.abs(Ni.y)+r.z*Math.abs(Ni.z),l=e.dot(Ni),c=t.dot(Ni),u=i.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const M1=new Io,Uu=new j,Jo=new j,Es=new j;class Ya{constructor(e=new j,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):M1.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Es.subVectors(e,this.center);const t=Es.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Es.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Jo.set(0,0,1).multiplyScalar(e.radius):Jo.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Uu.copy(e.center).add(Jo)),this.expandByPoint(Uu.copy(e.center).sub(Jo)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new j,As=new j,Qo=new j,pi=new j,Ps=new j,ea=new j,Rs=new j;class ff{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.direction).multiplyScalar(t).add(this.origin),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){As.copy(e).add(t).multiplyScalar(.5),Qo.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(As);const o=e.distanceTo(t)*.5,s=-this.direction.dot(Qo),a=pi.dot(this.direction),l=-pi.dot(Qo),c=pi.lengthSq(),u=Math.abs(1-s*s);let d,h,m,g;if(u>0)if(d=s*l-a,h=s*a-l,g=o*u,d>=0)if(h>=-g)if(h<=g){const p=1/u;d*=p,h*=p,m=d*(d+s*h+2*a)+h*(s*d+h+2*l)+c}else h=o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+c;else h=-o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-o,-l),o),m=h*(h+2*l)+c):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),m=-d*d+h*(h+2*l)+c);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(d).add(this.origin),r&&r.copy(Qo).multiplyScalar(h).add(As),m}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(o=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(o=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),i>s||o>r||((o>i||i!==i)&&(i=o),(s<r||r!==r)&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,r,o){Ps.subVectors(t,e),ea.subVectors(i,e),Rs.crossVectors(Ps,ea);let s=this.direction.dot(Rs),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;pi.subVectors(this.origin,e);const l=a*this.direction.dot(ea.crossVectors(pi,ea));if(l<0)return null;const c=a*this.direction.dot(Ps.cross(pi));if(c<0||l+c>s)return null;const u=-a*pi.dot(Rs);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,o,s,a,l,c,u,d,h,m,g,p,f){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=o,v[5]=s,v[9]=a,v[13]=l,v[2]=c,v[6]=u,v[10]=d,v[14]=h,v[3]=m,v[7]=g,v[11]=p,v[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/xr.setFromMatrixColumn(e,0).length(),o=1/xr.setFromMatrixColumn(e,1).length(),s=1/xr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*u,m=s*d,g=a*u,p=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=h-p*c,t[9]=-a*l,t[2]=p-h*c,t[6]=g+m*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,g=c*u,p=c*d;t[0]=h+p*a,t[4]=g*a-m,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-a,t[2]=m*a-g,t[6]=p+h*a,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,g=c*u,p=c*d;t[0]=h-p*a,t[4]=-s*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=s*u,t[9]=p-h*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,m=s*d,g=a*u,p=a*d;t[0]=l*u,t[4]=g*c-m,t[8]=h*c+p,t[1]=l*d,t[5]=p*c+h,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*c,g=a*l,p=a*c;t[0]=l*u,t[4]=p-h*d,t[8]=g*d+m,t[1]=d,t[5]=s*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+g,t[10]=h-p*d}else if(e.order==="XZY"){const h=s*l,m=s*c,g=a*l,p=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+p,t[5]=s*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=p*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C1,e,T1)}lookAt(e,t,i){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),mi.crossVectors(i,Xt),mi.lengthSq()===0&&(Math.abs(i.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),mi.crossVectors(i,Xt)),mi.normalize(),ta.crossVectors(Xt,mi),r[0]=mi.x,r[4]=ta.x,r[8]=Xt.x,r[1]=mi.y,r[5]=ta.y,r[9]=Xt.y,r[2]=mi.z,r[6]=ta.z,r[10]=Xt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],m=i[13],g=i[2],p=i[6],f=i[10],v=i[14],y=i[3],T=i[7],_=i[11],M=i[15],A=r[0],w=r[4],x=r[8],S=r[12],R=r[1],D=r[5],$=r[9],Z=r[13],L=r[2],N=r[6],O=r[10],H=r[14],Y=r[3],I=r[7],B=r[11],oe=r[15];return o[0]=s*A+a*R+l*L+c*Y,o[4]=s*w+a*D+l*N+c*I,o[8]=s*x+a*$+l*O+c*B,o[12]=s*S+a*Z+l*H+c*oe,o[1]=u*A+d*R+h*L+m*Y,o[5]=u*w+d*D+h*N+m*I,o[9]=u*x+d*$+h*O+m*B,o[13]=u*S+d*Z+h*H+m*oe,o[2]=g*A+p*R+f*L+v*Y,o[6]=g*w+p*D+f*N+v*I,o[10]=g*x+p*$+f*O+v*B,o[14]=g*S+p*Z+f*H+v*oe,o[3]=y*A+T*R+_*L+M*Y,o[7]=y*w+T*D+_*N+M*I,o[11]=y*x+T*$+_*O+M*B,o[15]=y*S+T*Z+_*H+M*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],p=e[7],f=e[11],v=e[15];return g*(+o*l*d-r*c*d-o*a*h+i*c*h+r*a*m-i*l*m)+p*(+t*l*m-t*c*h+o*s*h-r*s*m+r*c*u-o*l*u)+f*(+t*c*d-t*a*m-o*s*d+i*s*m+o*a*u-i*c*u)+v*(-r*a*u-t*l*d+t*a*h+r*s*d-i*s*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],p=e[13],f=e[14],v=e[15],y=d*f*c-p*h*c+p*l*m-a*f*m-d*l*v+a*h*v,T=g*h*c-u*f*c-g*l*m+s*f*m+u*l*v-s*h*v,_=u*p*c-g*d*c+g*a*m-s*p*m-u*a*v+s*d*v,M=g*d*l-u*p*l-g*a*h+s*p*h+u*a*f-s*d*f,A=t*y+i*T+r*_+o*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=y*w,e[1]=(p*h*o-d*f*o-p*r*m+i*f*m+d*r*v-i*h*v)*w,e[2]=(a*f*o-p*l*o+p*r*c-i*f*c-a*r*v+i*l*v)*w,e[3]=(d*l*o-a*h*o-d*r*c+i*h*c+a*r*m-i*l*m)*w,e[4]=T*w,e[5]=(u*f*o-g*h*o+g*r*m-t*f*m-u*r*v+t*h*v)*w,e[6]=(g*l*o-s*f*o-g*r*c+t*f*c+s*r*v-t*l*v)*w,e[7]=(s*h*o-u*l*o+u*r*c-t*h*c-s*r*m+t*l*m)*w,e[8]=_*w,e[9]=(g*d*o-u*p*o-g*i*m+t*p*m+u*i*v-t*d*v)*w,e[10]=(s*p*o-g*a*o+g*i*c-t*p*c-s*i*v+t*a*v)*w,e[11]=(u*a*o-s*d*o-u*i*c+t*d*c+s*i*m-t*a*m)*w,e[12]=M*w,e[13]=(u*p*r-g*d*r+g*i*h-t*p*h-u*i*f+t*d*f)*w,e[14]=(g*a*r-s*p*r-g*i*l+t*p*l+s*i*f-t*a*f)*w,e[15]=(s*d*r-u*a*r+u*i*l-t*d*l-s*i*h+t*a*h)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,u=s+s,d=a+a,h=o*c,m=o*u,g=o*d,p=s*u,f=s*d,v=a*d,y=l*c,T=l*u,_=l*d,M=i.x,A=i.y,w=i.z;return r[0]=(1-(p+v))*M,r[1]=(m+_)*M,r[2]=(g-T)*M,r[3]=0,r[4]=(m-_)*A,r[5]=(1-(h+v))*A,r[6]=(f+y)*A,r[7]=0,r[8]=(g+T)*w,r[9]=(f-y)*w,r[10]=(1-(h+p))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=xr.set(r[0],r[1],r[2]).length();const s=xr.set(r[4],r[5],r[6]).length(),a=xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const c=1/o,u=1/s,d=1/a;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=d,bn.elements[9]*=d,bn.elements[10]*=d,t.setFromRotationMatrix(bn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,t,i,r,o,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*o/(t-e),c=2*o/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),h=-(s+o)/(s-o),m=-2*s*o/(s-o);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,o,s){const a=this.elements,l=1/(t-e),c=1/(i-r),u=1/(s-o),d=(t+e)*l,h=(i+r)*c,m=(s+o)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const xr=new j,bn=new Et,C1=new j(0,0,0),T1=new j(1,1,1),mi=new j,ta=new j,Xt=new j,Hu=new Et,Vu=new Do;class zo{constructor(e=0,t=0,i=0,r=zo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-jt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vu.setFromEuler(this),this.setFromQuaternion(Vu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}zo.DefaultOrder="XYZ";zo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class pf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let E1=0;const Wu=new j,br=new Do,Xn=new Et,na=new j,co=new j,A1=new j,P1=new Do,Gu=new j(1,0,0),ju=new j(0,1,0),qu=new j(0,0,1),R1={type:"added"},Xu={type:"removed"};class Nt extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E1++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DefaultUp.clone();const e=new j,t=new zo,i=new Do,r=new j(1,1,1);function o(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new zn}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Nt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new pf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(Gu,e)}rotateY(e){return this.rotateOnAxis(ju,e)}rotateZ(e){return this.rotateOnAxis(qu,e)}translateOnAxis(e,t){return Wu.copy(e).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gu,e)}translateY(e){return this.translateOnAxis(ju,e)}translateZ(e){return this.translateOnAxis(qu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?na.copy(e):na.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(co,na,this.up):Xn.lookAt(na,co,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),br.setFromRotationMatrix(Xn),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(R1)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Xu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,A1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,P1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),m=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DefaultUp=new j(0,1,0);Nt.DefaultMatrixAutoUpdate=!0;const _n=new j,Yn=new j,Ls=new j,Kn=new j,_r=new j,yr=new j,Yu=new j,Ds=new j,Is=new j,zs=new j;class In{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_n.subVectors(e,t),r.cross(_n);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){_n.subVectors(r,t),Yn.subVectors(i,t),Ls.subVectors(e,t);const s=_n.dot(_n),a=_n.dot(Yn),l=_n.dot(Ls),c=Yn.dot(Yn),u=Yn.dot(Ls),d=s*c-a*a;if(d===0)return o.set(-2,-1,-1);const h=1/d,m=(c*l-a*u)*h,g=(s*u-a*l)*h;return o.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Kn),Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(e,t,i,r,o,s,a,l){return this.getBarycoord(e,t,i,r,Kn),l.set(0,0),l.addScaledVector(o,Kn.x),l.addScaledVector(s,Kn.y),l.addScaledVector(a,Kn.z),l}static isFrontFacing(e,t,i,r){return _n.subVectors(i,t),Yn.subVectors(e,t),_n.cross(Yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),_n.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,o){return In.getUV(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let s,a;_r.subVectors(r,i),yr.subVectors(o,i),Ds.subVectors(e,i);const l=_r.dot(Ds),c=yr.dot(Ds);if(l<=0&&c<=0)return t.copy(i);Is.subVectors(e,r);const u=_r.dot(Is),d=yr.dot(Is);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(i).addScaledVector(_r,s);zs.subVectors(e,o);const m=_r.dot(zs),g=yr.dot(zs);if(g>=0&&m<=g)return t.copy(o);const p=m*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(yr,a);const f=u*g-m*d;if(f<=0&&d-u>=0&&m-g>=0)return Yu.subVectors(o,r),a=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(Yu,a);const v=1/(f+p+h);return s=p*v,a=h*v,t.copy(i).addScaledVector(_r,s).addScaledVector(yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let L1=0;class Ft extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L1++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=Fr,this.side=To,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=rf,this.blendDst=of,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===AS;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(i.blending=this.blending),this.side!==To&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}Ft.fromType=function(){return null};class Zl extends Ft{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new j,ia=new tt;class On{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=ku,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),s=new We),t[i++]=s.r,t[i++]=s.g,t[i++]=s.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),s=new tt),t[i++]=s.x,t[i++]=s.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),s=new j),t[i++]=s.x,t[i++]=s.y,t[i++]=s.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),s=new zt),t[i++]=s.x,t[i++]=s.y,t[i++]=s.z,t[i++]=s.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ia.fromBufferAttribute(this,t),ia.applyMatrix3(e),this.setXY(t,ia.x,ia.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ku&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class mf extends On{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gf extends On{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ot extends On{constructor(e,t,i){super(new Float32Array(e),t,i)}}let D1=0;const sn=new Et,Fs=new Nt,wr=new j,Yt=new Io,uo=new Io,At=new j;class pn extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D1++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lf(e)?gf:mf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new zn().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return Fs.lookAt(e),Fs.updateMatrix(),this.applyMatrix4(Fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];Yt.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];uo.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Yt.min,uo.min),Yt.expandByPoint(At),At.addVectors(Yt.max,uo.max),Yt.expandByPoint(At)):(Yt.expandByPoint(uo.min),Yt.expandByPoint(uo.max))}Yt.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)At.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(At));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)At.fromBufferAttribute(a,c),l&&(wr.fromBufferAttribute(e,c),At.add(wr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,o=t.normal.array,s=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new j,u[R]=new j;const d=new j,h=new j,m=new j,g=new tt,p=new tt,f=new tt,v=new j,y=new j;function T(R,D,$){d.fromArray(r,R*3),h.fromArray(r,D*3),m.fromArray(r,$*3),g.fromArray(s,R*2),p.fromArray(s,D*2),f.fromArray(s,$*2),h.sub(d),m.sub(d),p.sub(g),f.sub(g);const Z=1/(p.x*f.y-f.x*p.y);!isFinite(Z)||(v.copy(h).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(Z),y.copy(m).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(Z),c[R].add(v),c[D].add(v),c[$].add(v),u[R].add(y),u[D].add(y),u[$].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let R=0,D=_.length;R<D;++R){const $=_[R],Z=$.start,L=$.count;for(let N=Z,O=Z+L;N<O;N+=3)T(i[N+0],i[N+1],i[N+2])}const M=new j,A=new j,w=new j,x=new j;function S(R){w.fromArray(o,R*3),x.copy(w);const D=c[R];M.copy(D),M.sub(w.multiplyScalar(w.dot(D))).normalize(),A.crossVectors(x,D);const Z=A.dot(u[R])<0?-1:1;l[R*4]=M.x,l[R*4+1]=M.y,l[R*4+2]=M.z,l[R*4+3]=Z}for(let R=0,D=_.length;R<D;++R){const $=_[R],Z=$.start,L=$.count;for(let N=Z,O=Z+L;N<O;N+=3)S(i[N+0]),S(i[N+1]),S(i[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new j,o=new j,s=new j,a=new j,l=new j,c=new j,u=new j,d=new j;if(e)for(let h=0,m=e.count;h<m;h+=3){const g=e.getX(h+0),p=e.getX(h+1),f=e.getX(h+2);r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),s.fromBufferAttribute(t,f),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,f),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,o),d.subVectors(r,o),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const s=i[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,u=Math.min(l.length,s.length-c);for(let d=0,h=c;d<u;d++,h++)s[h]=l[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let m=0,g=0;for(let p=0,f=l.length;p<f;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*u;for(let v=0;v<u;v++)h[g++]=c[m++]}return new On(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const o=e.morphAttributes;for(const c in o){const u=[],d=o[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ku=new Et,Sr=new ff,ks=new Ya,gi=new j,vi=new j,xi=new j,Bs=new j,Os=new j,Ns=new j,ra=new j,oa=new j,aa=new j,sa=new tt,la=new tt,ca=new tt,$s=new j,ua=new j;class Jn extends Nt{constructor(e=new pn,t=new Zl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(o),e.ray.intersectsSphere(ks)===!1)||(Ku.copy(o).invert(),Sr.copy(e.ray).applyMatrix4(Ku),i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1))return;let s;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,u=i.morphTargetsRelative,d=i.attributes.uv,h=i.attributes.uv2,m=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,f=m.length;p<f;p++){const v=m[p],y=r[v.materialIndex],T=Math.max(v.start,g.start),_=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let M=T,A=_;M<A;M+=3){const w=a.getX(M),x=a.getX(M+1),S=a.getX(M+2);s=da(this,y,e,Sr,l,c,u,d,h,w,x,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const p=Math.max(0,g.start),f=Math.min(a.count,g.start+g.count);for(let v=p,y=f;v<y;v+=3){const T=a.getX(v),_=a.getX(v+1),M=a.getX(v+2);s=da(this,r,e,Sr,l,c,u,d,h,T,_,M),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,f=m.length;p<f;p++){const v=m[p],y=r[v.materialIndex],T=Math.max(v.start,g.start),_=Math.min(l.count,Math.min(v.start+v.count,g.start+g.count));for(let M=T,A=_;M<A;M+=3){const w=M,x=M+1,S=M+2;s=da(this,y,e,Sr,l,c,u,d,h,w,x,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const p=Math.max(0,g.start),f=Math.min(l.count,g.start+g.count);for(let v=p,y=f;v<y;v+=3){const T=v,_=v+1,M=v+2;s=da(this,r,e,Sr,l,c,u,d,h,T,_,M),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}}function I1(n,e,t,i,r,o,s,a){let l;if(e.side===Cn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side!==Or,a),l===null)return null;ua.copy(a),ua.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ua);return c<t.near||c>t.far?null:{distance:c,point:ua.clone(),object:n}}function da(n,e,t,i,r,o,s,a,l,c,u,d){gi.fromBufferAttribute(r,c),vi.fromBufferAttribute(r,u),xi.fromBufferAttribute(r,d);const h=n.morphTargetInfluences;if(o&&h){ra.set(0,0,0),oa.set(0,0,0),aa.set(0,0,0);for(let g=0,p=o.length;g<p;g++){const f=h[g],v=o[g];f!==0&&(Bs.fromBufferAttribute(v,c),Os.fromBufferAttribute(v,u),Ns.fromBufferAttribute(v,d),s?(ra.addScaledVector(Bs,f),oa.addScaledVector(Os,f),aa.addScaledVector(Ns,f)):(ra.addScaledVector(Bs.sub(gi),f),oa.addScaledVector(Os.sub(vi),f),aa.addScaledVector(Ns.sub(xi),f)))}gi.add(ra),vi.add(oa),xi.add(aa)}n.isSkinnedMesh&&(n.boneTransform(c,gi),n.boneTransform(u,vi),n.boneTransform(d,xi));const m=I1(n,e,t,i,gi,vi,xi,$s);if(m){a&&(sa.fromBufferAttribute(a,c),la.fromBufferAttribute(a,u),ca.fromBufferAttribute(a,d),m.uv=In.getUV($s,gi,vi,xi,sa,la,ca,new tt)),l&&(sa.fromBufferAttribute(l,c),la.fromBufferAttribute(l,u),ca.fromBufferAttribute(l,d),m.uv2=In.getUV($s,gi,vi,xi,sa,la,ca,new tt));const g={a:c,b:u,c:d,normal:new j,materialIndex:0};In.getNormal(gi,vi,xi,g.normal),m.face=g}return m}class Jr extends pn{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],d=[];let h=0,m=0;g("z","y","x",-1,-1,i,t,e,s,o,0),g("z","y","x",1,-1,i,t,-e,s,o,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,o,4),g("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(d,2));function g(p,f,v,y,T,_,M,A,w,x,S){const R=_/w,D=M/x,$=_/2,Z=M/2,L=A/2,N=w+1,O=x+1;let H=0,Y=0;const I=new j;for(let B=0;B<O;B++){const oe=B*D-Z;for(let re=0;re<N;re++){const pe=re*R-$;I[p]=pe*y,I[f]=oe*T,I[v]=L,c.push(I.x,I.y,I.z),I[p]=0,I[f]=0,I[v]=A>0?1:-1,u.push(I.x,I.y,I.z),d.push(re/w),d.push(1-B/x),H+=1}}for(let B=0;B<x;B++)for(let oe=0;oe<w;oe++){const re=h+oe+N*B,pe=h+oe+N*(B+1),Te=h+(oe+1)+N*(B+1),Pe=h+(oe+1)+N*B;l.push(re,pe,Pe),l.push(pe,Te,Pe),Y+=6}a.addGroup(m,Y,S),m+=Y,h+=H}}static fromJSON(e){return new Jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=Hr(n[t]);for(const r in i)e[r]=i[r]}return e}const z1={clone:Hr,merge:Bt};var F1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,k1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Ft{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=F1,this.fragmentShader=k1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class vf extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class cn extends vf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ou*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ou*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(bs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mr=90,Cr=1;class B1 extends Nt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new cn(Mr,Cr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new j(1,0,0)),this.add(r);const o=new cn(Mr,Cr,e,t);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new j(-1,0,0)),this.add(o);const s=new cn(Mr,Cr,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new j(0,1,0)),this.add(s);const a=new cn(Mr,Cr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new j(0,-1,0)),this.add(a);const l=new cn(Mr,Cr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new j(0,0,1)),this.add(l);const c=new cn(Mr,Cr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new j(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,s,a,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=ei,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,o),e.setRenderTarget(i,2),e.render(t,s),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class xf extends En{constructor(e,t,i,r,o,s,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Nr,super(e,t,i,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class O1 extends Ci{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jr(5,5,5),o=new ii({name:"CubemapFromEquirect",uniforms:Hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Mi});o.uniforms.tEquirect.value=t;const s=new Jn(r,o),a=t.minFilter;return t.minFilter===Xa&&(t.minFilter=ln),new B1(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}}const Us=new j,N1=new j,$1=new zn;class Ui{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Us.subVectors(i,t).cross(N1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Us),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(i).multiplyScalar(o).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||$1.getNormalMatrix(e),r=this.coplanarPoint(Us).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new Ya,ha=new j;class Jl{constructor(e=new Ui,t=new Ui,i=new Ui,r=new Ui,o=new Ui,s=new Ui){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],o=i[1],s=i[2],a=i[3],l=i[4],c=i[5],u=i[6],d=i[7],h=i[8],m=i[9],g=i[10],p=i[11],f=i[12],v=i[13],y=i[14],T=i[15];return t[0].setComponents(a-r,d-l,p-h,T-f).normalize(),t[1].setComponents(a+r,d+l,p+h,T+f).normalize(),t[2].setComponents(a+o,d+c,p+m,T+v).normalize(),t[3].setComponents(a-o,d-c,p-m,T-v).normalize(),t[4].setComponents(a-s,d-u,p-g,T-y).normalize(),t[5].setComponents(a+s,d+u,p+g,T+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSprite(e){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ha.x=r.normal.x>0?e.max.x:e.min.x,ha.y=r.normal.y>0?e.max.y:e.min.y,ha.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bf(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function U1(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,d,h),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function o(c,u,d){const h=u.array,m=u.updateRange;n.bindBuffer(d,c),m.count===-1?n.bufferSubData(d,0,h):(t?n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(o(d.buffer,c,u),d.version=c.version)}return{get:s,remove:a,update:l}}class Ql extends pn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=t/l,m=[],g=[],p=[],f=[];for(let v=0;v<u;v++){const y=v*h-s;for(let T=0;T<c;T++){const _=T*d-o;g.push(_,-y,0),p.push(0,0,1),f.push(T/a),f.push(1-v/l)}}for(let v=0;v<l;v++)for(let y=0;y<a;y++){const T=y+c*v,_=y+c*(v+1),M=y+1+c*(v+1),A=y+1+c*v;m.push(T,_,A),m.push(_,M,A)}this.setIndex(m),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(p,3)),this.setAttribute("uv",new Ot(f,2))}static fromJSON(e){return new Ql(e.width,e.height,e.widthSegments,e.heightSegments)}}var H1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,V1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W1=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,G1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,j1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,q1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X1="vec3 transformed = vec3( position );",Y1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,K1=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Z1=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,J1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,lM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cM=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pM="gl_FragColor = linearToOutputTexel( gl_FragColor );",mM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,TM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,EM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AM=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,PM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,RM=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,LM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,IM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,FM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,kM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BM=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,$M=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,VM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,WM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,JM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,QM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,eC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,tC=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,oC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,aC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,sC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,lC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,cC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,hC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xC=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,bC=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_C=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,yC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,MC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,TC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,RC=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,LC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,DC=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,IC=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,zC=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,FC=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,kC=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,BC=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,OC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$C=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,UC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HC=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,VC=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,WC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,GC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,YC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZC=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,JC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QC=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e2=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,n2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,h2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f2=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,m2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Qe={alphamap_fragment:H1,alphamap_pars_fragment:V1,alphatest_fragment:W1,alphatest_pars_fragment:G1,aomap_fragment:j1,aomap_pars_fragment:q1,begin_vertex:X1,beginnormal_vertex:Y1,bsdfs:K1,iridescence_fragment:Z1,bumpmap_pars_fragment:J1,clipping_planes_fragment:Q1,clipping_planes_pars_fragment:eM,clipping_planes_pars_vertex:tM,clipping_planes_vertex:nM,color_fragment:iM,color_pars_fragment:rM,color_pars_vertex:oM,color_vertex:aM,common:sM,cube_uv_reflection_fragment:lM,defaultnormal_vertex:cM,displacementmap_pars_vertex:uM,displacementmap_vertex:dM,emissivemap_fragment:hM,emissivemap_pars_fragment:fM,encodings_fragment:pM,encodings_pars_fragment:mM,envmap_fragment:gM,envmap_common_pars_fragment:vM,envmap_pars_fragment:xM,envmap_pars_vertex:bM,envmap_physical_pars_fragment:RM,envmap_vertex:_M,fog_vertex:yM,fog_pars_vertex:wM,fog_fragment:SM,fog_pars_fragment:MM,gradientmap_pars_fragment:CM,lightmap_fragment:TM,lightmap_pars_fragment:EM,lights_lambert_vertex:AM,lights_pars_begin:PM,lights_toon_fragment:LM,lights_toon_pars_fragment:DM,lights_phong_fragment:IM,lights_phong_pars_fragment:zM,lights_physical_fragment:FM,lights_physical_pars_fragment:kM,lights_fragment_begin:BM,lights_fragment_maps:OM,lights_fragment_end:NM,logdepthbuf_fragment:$M,logdepthbuf_pars_fragment:UM,logdepthbuf_pars_vertex:HM,logdepthbuf_vertex:VM,map_fragment:WM,map_pars_fragment:GM,map_particle_fragment:jM,map_particle_pars_fragment:qM,metalnessmap_fragment:XM,metalnessmap_pars_fragment:YM,morphcolor_vertex:KM,morphnormal_vertex:ZM,morphtarget_pars_vertex:JM,morphtarget_vertex:QM,normal_fragment_begin:eC,normal_fragment_maps:tC,normal_pars_fragment:nC,normal_pars_vertex:iC,normal_vertex:rC,normalmap_pars_fragment:oC,clearcoat_normal_fragment_begin:aC,clearcoat_normal_fragment_maps:sC,clearcoat_pars_fragment:lC,iridescence_pars_fragment:cC,output_fragment:uC,packing:dC,premultiplied_alpha_fragment:hC,project_vertex:fC,dithering_fragment:pC,dithering_pars_fragment:mC,roughnessmap_fragment:gC,roughnessmap_pars_fragment:vC,shadowmap_pars_fragment:xC,shadowmap_pars_vertex:bC,shadowmap_vertex:_C,shadowmask_pars_fragment:yC,skinbase_vertex:wC,skinning_pars_vertex:SC,skinning_vertex:MC,skinnormal_vertex:CC,specularmap_fragment:TC,specularmap_pars_fragment:EC,tonemapping_fragment:AC,tonemapping_pars_fragment:PC,transmission_fragment:RC,transmission_pars_fragment:LC,uv_pars_fragment:DC,uv_pars_vertex:IC,uv_vertex:zC,uv2_pars_fragment:FC,uv2_pars_vertex:kC,uv2_vertex:BC,worldpos_vertex:OC,background_vert:NC,background_frag:$C,cube_vert:UC,cube_frag:HC,depth_vert:VC,depth_frag:WC,distanceRGBA_vert:GC,distanceRGBA_frag:jC,equirect_vert:qC,equirect_frag:XC,linedashed_vert:YC,linedashed_frag:KC,meshbasic_vert:ZC,meshbasic_frag:JC,meshlambert_vert:QC,meshlambert_frag:e2,meshmatcap_vert:t2,meshmatcap_frag:n2,meshnormal_vert:i2,meshnormal_frag:r2,meshphong_vert:o2,meshphong_frag:a2,meshphysical_vert:s2,meshphysical_frag:l2,meshtoon_vert:c2,meshtoon_frag:u2,points_vert:d2,points_frag:h2,shadow_vert:f2,shadow_frag:p2,sprite_vert:m2,sprite_frag:g2},Ee={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new zn},uv2Transform:{value:new zn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zn}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zn}}},Dn={basic:{uniforms:Bt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Bt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.fog,Ee.lights,{emissive:{value:new We(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Bt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Bt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Bt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new We(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Bt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Bt([Ee.points,Ee.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Bt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Bt([Ee.common,Ee.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Bt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Bt([Ee.sprite,Ee.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new zn},t2D:{value:null}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},cube:{uniforms:Bt([Ee.envmap,{opacity:{value:1}}]),vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Bt([Ee.common,Ee.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Bt([Ee.lights,Ee.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Dn.physical={uniforms:Bt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new tt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};function v2(n,e,t,i,r,o){const s=new We(0);let a=r===!0?0:1,l,c,u=null,d=0,h=null;function m(p,f){let v=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=e.get(y));const T=n.xr,_=T.getSession&&T.getSession();_&&_.environmentBlendMode==="additive"&&(y=null),y===null?g(s,a):y&&y.isColor&&(g(y,1),v=!0),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===qa)?(c===void 0&&(c=new Jn(new Jr(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Hr(Dn.cube.uniforms),vertexShader:Dn.cube.vertexShader,fragmentShader:Dn.cube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(u!==y||d!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Jn(new Ql(2,2),new ii({name:"BackgroundMaterial",uniforms:Hr(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:To,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,f){t.buffers.color.setClear(p.r,p.g,p.b,f,o)}return{getClearColor:function(){return s},setClearColor:function(p,f=1){s.set(p),a=f,g(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(s,a)},render:m}}function x2(n,e,t,i){const r=n.getParameter(34921),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=f(null);let c=l,u=!1;function d(L,N,O,H,Y){let I=!1;if(s){const B=p(H,O,N);c!==B&&(c=B,m(c.object)),I=v(L,H,O,Y),I&&y(L,H,O,Y)}else{const B=N.wireframe===!0;(c.geometry!==H.id||c.program!==O.id||c.wireframe!==B)&&(c.geometry=H.id,c.program=O.id,c.wireframe=B,I=!0)}Y!==null&&t.update(Y,34963),(I||u)&&(u=!1,x(L,N,O,H),Y!==null&&n.bindBuffer(34963,t.get(Y).buffer))}function h(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):o.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):o.deleteVertexArrayOES(L)}function p(L,N,O){const H=O.wireframe===!0;let Y=a[L.id];Y===void 0&&(Y={},a[L.id]=Y);let I=Y[N.id];I===void 0&&(I={},Y[N.id]=I);let B=I[H];return B===void 0&&(B=f(h()),I[H]=B),B}function f(L){const N=[],O=[],H=[];for(let Y=0;Y<r;Y++)N[Y]=0,O[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:H,object:L,attributes:{},index:null}}function v(L,N,O,H){const Y=c.attributes,I=N.attributes;let B=0;const oe=O.getAttributes();for(const re in oe)if(oe[re].location>=0){const Te=Y[re];let Pe=I[re];if(Pe===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(Pe=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(Pe=L.instanceColor)),Te===void 0||Te.attribute!==Pe||Pe&&Te.data!==Pe.data)return!0;B++}return c.attributesNum!==B||c.index!==H}function y(L,N,O,H){const Y={},I=N.attributes;let B=0;const oe=O.getAttributes();for(const re in oe)if(oe[re].location>=0){let Te=I[re];Te===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(Te=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(Te=L.instanceColor));const Pe={};Pe.attribute=Te,Te&&Te.data&&(Pe.data=Te.data),Y[re]=Pe,B++}c.attributes=Y,c.attributesNum=B,c.index=H}function T(){const L=c.newAttributes;for(let N=0,O=L.length;N<O;N++)L[N]=0}function _(L){M(L,0)}function M(L,N){const O=c.newAttributes,H=c.enabledAttributes,Y=c.attributeDivisors;O[L]=1,H[L]===0&&(n.enableVertexAttribArray(L),H[L]=1),Y[L]!==N&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),Y[L]=N)}function A(){const L=c.newAttributes,N=c.enabledAttributes;for(let O=0,H=N.length;O<H;O++)N[O]!==L[O]&&(n.disableVertexAttribArray(O),N[O]=0)}function w(L,N,O,H,Y,I){i.isWebGL2===!0&&(O===5124||O===5125)?n.vertexAttribIPointer(L,N,O,Y,I):n.vertexAttribPointer(L,N,O,H,Y,I)}function x(L,N,O,H){if(i.isWebGL2===!1&&(L.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const Y=H.attributes,I=O.getAttributes(),B=N.defaultAttributeValues;for(const oe in I){const re=I[oe];if(re.location>=0){let pe=Y[oe];if(pe===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor)),pe!==void 0){const Te=pe.normalized,Pe=pe.itemSize,W=t.get(pe);if(W===void 0)continue;const $e=W.buffer,Le=W.type,me=W.bytesPerElement;if(pe.isInterleavedBufferAttribute){const _e=pe.data,ke=_e.stride,Oe=pe.offset;if(_e.isInstancedInterleavedBuffer){for(let Fe=0;Fe<re.locationSize;Fe++)M(re.location+Fe,_e.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Fe=0;Fe<re.locationSize;Fe++)_(re.location+Fe);n.bindBuffer(34962,$e);for(let Fe=0;Fe<re.locationSize;Fe++)w(re.location+Fe,Pe/re.locationSize,Le,Te,ke*me,(Oe+Pe/re.locationSize*Fe)*me)}else{if(pe.isInstancedBufferAttribute){for(let _e=0;_e<re.locationSize;_e++)M(re.location+_e,pe.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let _e=0;_e<re.locationSize;_e++)_(re.location+_e);n.bindBuffer(34962,$e);for(let _e=0;_e<re.locationSize;_e++)w(re.location+_e,Pe/re.locationSize,Le,Te,Pe*me,Pe/re.locationSize*_e*me)}}else if(B!==void 0){const Te=B[oe];if(Te!==void 0)switch(Te.length){case 2:n.vertexAttrib2fv(re.location,Te);break;case 3:n.vertexAttrib3fv(re.location,Te);break;case 4:n.vertexAttrib4fv(re.location,Te);break;default:n.vertexAttrib1fv(re.location,Te)}}}}A()}function S(){$();for(const L in a){const N=a[L];for(const O in N){const H=N[O];for(const Y in H)g(H[Y].object),delete H[Y];delete N[O]}delete a[L]}}function R(L){if(a[L.id]===void 0)return;const N=a[L.id];for(const O in N){const H=N[O];for(const Y in H)g(H[Y].object),delete H[Y];delete N[O]}delete a[L.id]}function D(L){for(const N in a){const O=a[N];if(O[L.id]===void 0)continue;const H=O[L.id];for(const Y in H)g(H[Y].object),delete H[Y];delete O[L.id]}}function $(){Z(),u=!0,c!==l&&(c=l,m(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:$,resetDefaultState:Z,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:T,enableAttribute:_,disableUnusedAttributes:A}}function b2(n,e,t,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,u){n.drawArrays(o,c,u),t.update(u,o,1)}function l(c,u,d){if(d===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](o,c,u,d),t.update(u,o,d)}this.setMode=s,this.render=a,this.renderInstances=l}function _2(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){if(w==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),g=n.getParameter(34076),p=n.getParameter(34921),f=n.getParameter(36347),v=n.getParameter(36348),y=n.getParameter(36349),T=h>0,_=s||e.has("OES_texture_float"),M=T&&_,A=s?n.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:T,floatFragmentTextures:_,floatVertexTextures:M,maxSamples:A}}function y2(n){const e=this;let t=null,i=0,r=!1,o=!1;const s=new Ui,a=new zn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h,m){const g=d.length!==0||h||i!==0||r;return r=h,t=u(d,m,0),i=d.length,g},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1,c()},this.setState=function(d,h,m){const g=d.clippingPlanes,p=d.clipIntersection,f=d.clipShadows,v=n.get(d);if(!r||g===null||g.length===0||o&&!f)o?u(null):c();else{const y=o?0:i,T=y*4;let _=v.clippingState||null;l.value=_,_=u(g,h,T,m);for(let M=0;M!==T;++M)_[M]=t[M];v.clippingState=_,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,g){const p=d!==null?d.length:0;let f=null;if(p!==0){if(f=l.value,g!==!0||f===null){const v=m+p*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<v)&&(f=new Float32Array(v));for(let T=0,_=m;T!==p;++T,_+=4)s.copy(d[T]).applyMatrix4(y,a),s.normal.toArray(f,_),f[_+3]=s.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function w2(n){let e=new WeakMap;function t(s,a){return a===xl?s.mapping=Nr:a===bl&&(s.mapping=$r),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===xl||a===bl)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new O1(l.height/2);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class _f extends vf{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Rr=4,Zu=[.125,.215,.35,.446,.526,.582],Vi=20,Hs=new _f,Ju=new We;let Vs=null;const Hi=(1+Math.sqrt(5))/2,Er=1/Hi,Qu=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Hi,Er),new j(0,Hi,-Er),new j(Er,0,Hi),new j(-Er,0,Hi),new j(Hi,Er,0),new j(-Hi,Er,0)];class ed{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Vs=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vs),e.scissorTest=!1,fa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Nr||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vs=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Eo,format:wn,encoding:rr,depthBuffer:!1},r=td(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=td(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S2(o)),this._blurMaterial=M2(o,e,t)}return r}_compileMaterial(e){const t=new Jn(this._lodPlanes[0],e);this._renderer.compile(t,Hs)}_sceneToCubeUV(e,t,i,r){const a=new cn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Ju),u.toneMapping=ei,u.autoClear=!1;const m=new Zl({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),g=new Jn(new Jr,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(Ju),p=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):y===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const T=this._cubeSize;fa(r,y*T,v>2?T:0,T,T),u.setRenderTarget(r),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Nr||e.mapping===$r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nd());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Jn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;fa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Hs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Qu[(r-1)%Qu.length];this._blur(e,r-1,r,o,s)}t.autoClear=i}_blur(e,t,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Jn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Vi-1),p=o/g,f=isFinite(o)?1+Math.floor(u*p):Vi;f>Vi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Vi}`);const v=[];let y=0;for(let w=0;w<Vi;++w){const x=w/p,S=Math.exp(-x*x/2);v.push(S),w===0?y+=S:w<f&&(y+=2*S)}for(let w=0;w<v.length;w++)v[w]=v[w]/y;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=v,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:T}=this;h.dTheta.value=g,h.mipInt.value=T-i;const _=this._sizeLods[r],M=3*_*(r>T-Rr?r-T+Rr:0),A=4*(this._cubeSize-_);fa(t,M,A,3*_,2*_),l.setRenderTarget(t),l.render(d,Hs)}}function S2(n){const e=[],t=[],i=[];let r=n;const o=n-Rr+1+Zu.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let l=1/a;s>n-Rr?l=Zu[s-n+Rr-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,p=3,f=2,v=1,y=new Float32Array(p*g*m),T=new Float32Array(f*g*m),_=new Float32Array(v*g*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,x=A>2?0:-1,S=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];y.set(S,p*g*A),T.set(h,f*g*A);const R=[A,A,A,A,A,A];_.set(R,v*g*A)}const M=new pn;M.setAttribute("position",new On(y,p)),M.setAttribute("uv",new On(T,f)),M.setAttribute("faceIndex",new On(_,v)),e.push(M),r>Rr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function td(n,e,t){const i=new Ci(n,e,t);return i.texture.mapping=qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function M2(n,e,t){const i=new Float32Array(Vi),r=new j(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function nd(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function id(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function C2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===xl||l===bl,u=l===Nr||l===$r;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new ed(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new ed(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function T2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function E2(n,e,t,i){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete r[h.id];const m=o.get(h);m&&(e.remove(m),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],34962);const m=d.morphAttributes;for(const g in m){const p=m[g];for(let f=0,v=p.length;f<v;f++)e.update(p[f],34962)}}function c(d){const h=[],m=d.index,g=d.attributes.position;let p=0;if(m!==null){const y=m.array;p=m.version;for(let T=0,_=y.length;T<_;T+=3){const M=y[T+0],A=y[T+1],w=y[T+2];h.push(M,A,A,w,w,M)}}else{const y=g.array;p=g.version;for(let T=0,_=y.length/3-1;T<_;T+=3){const M=T+0,A=T+1,w=T+2;h.push(M,A,A,w,w,M)}}const f=new(lf(h)?gf:mf)(h,1);f.version=p;const v=o.get(d);v&&e.remove(v),o.set(d,f)}function u(d){const h=o.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function A2(n,e,t,i){const r=i.isWebGL2;let o;function s(h){o=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(o,m,a,h*l),t.update(m,o,1)}function d(h,m,g){if(g===0)return;let p,f;if(r)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](o,m,a,h*l,g),t.update(m,o,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=d}function P2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(o/3);break;case 1:t.lines+=a*(o/2);break;case 3:t.lines+=a*(o-1);break;case 2:t.lines+=a*o;break;case 0:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function R2(n,e){return n[0]-e[0]}function L2(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Ws(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function D2(n,e,t){const i={},r=new Float32Array(8),o=new WeakMap,s=new zt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,d,h){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let f=o.get(u);if(f===void 0||f.count!==p){let N=function(){Z.dispose(),o.delete(u),u.removeEventListener("dispose",N)};f!==void 0&&f.texture.dispose();const T=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],x=u.morphAttributes.color||[];let S=0;T===!0&&(S=1),_===!0&&(S=2),M===!0&&(S=3);let R=u.attributes.position.count*S,D=1;R>e.maxTextureSize&&(D=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const $=new Float32Array(R*D*4*p),Z=new hf($,R,D,p);Z.type=Xi,Z.needsUpdate=!0;const L=S*4;for(let O=0;O<p;O++){const H=A[O],Y=w[O],I=x[O],B=R*D*4*O;for(let oe=0;oe<H.count;oe++){const re=oe*L;T===!0&&(s.fromBufferAttribute(H,oe),H.normalized===!0&&Ws(s,H),$[B+re+0]=s.x,$[B+re+1]=s.y,$[B+re+2]=s.z,$[B+re+3]=0),_===!0&&(s.fromBufferAttribute(Y,oe),Y.normalized===!0&&Ws(s,Y),$[B+re+4]=s.x,$[B+re+5]=s.y,$[B+re+6]=s.z,$[B+re+7]=0),M===!0&&(s.fromBufferAttribute(I,oe),I.normalized===!0&&Ws(s,I),$[B+re+8]=s.x,$[B+re+9]=s.y,$[B+re+10]=s.z,$[B+re+11]=I.itemSize===4?s.w:1)}}f={count:p,texture:Z,size:new tt(R,D)},o.set(u,f),u.addEventListener("dispose",N)}let v=0;for(let T=0;T<m.length;T++)v+=m[T];const y=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",m),h.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}else{const g=m===void 0?0:m.length;let p=i[u.id];if(p===void 0||p.length!==g){p=[];for(let _=0;_<g;_++)p[_]=[_,0];i[u.id]=p}for(let _=0;_<g;_++){const M=p[_];M[0]=_,M[1]=m[_]}p.sort(L2);for(let _=0;_<8;_++)_<g&&p[_][1]?(a[_][0]=p[_][0],a[_][1]=p[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(R2);const f=u.morphAttributes.position,v=u.morphAttributes.normal;let y=0;for(let _=0;_<8;_++){const M=a[_],A=M[0],w=M[1];A!==Number.MAX_SAFE_INTEGER&&w?(f&&u.getAttribute("morphTarget"+_)!==f[A]&&u.setAttribute("morphTarget"+_,f[A]),v&&u.getAttribute("morphNormal"+_)!==v[A]&&u.setAttribute("morphNormal"+_,v[A]),r[_]=w,y+=w):(f&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),v&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const T=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(n,"morphTargetBaseInfluence",T),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function I2(n,e,t,i){let r=new WeakMap;function o(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}const yf=new En,wf=new hf,Sf=new S1,Mf=new xf,rd=[],od=[],ad=new Float32Array(16),sd=new Float32Array(9),ld=new Float32Array(4);function Qr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=rd[r];if(o===void 0&&(o=new Float32Array(r),rd[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ht(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ka(n,e){let t=od[e];t===void 0&&(t=new Int32Array(e),od[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function z2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function F2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),Ht(t,e)}}function k2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),Ht(t,e)}}function B2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),Ht(t,e)}}function O2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Ut(t,i))return;ld.set(i),n.uniformMatrix2fv(this.addr,!1,ld),Ht(t,i)}}function N2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Ut(t,i))return;sd.set(i),n.uniformMatrix3fv(this.addr,!1,sd),Ht(t,i)}}function $2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Ut(t,i))return;ad.set(i),n.uniformMatrix4fv(this.addr,!1,ad),Ht(t,i)}}function U2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function H2(n,e){const t=this.cache;Ut(t,e)||(n.uniform2iv(this.addr,e),Ht(t,e))}function V2(n,e){const t=this.cache;Ut(t,e)||(n.uniform3iv(this.addr,e),Ht(t,e))}function W2(n,e){const t=this.cache;Ut(t,e)||(n.uniform4iv(this.addr,e),Ht(t,e))}function G2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function j2(n,e){const t=this.cache;Ut(t,e)||(n.uniform2uiv(this.addr,e),Ht(t,e))}function q2(n,e){const t=this.cache;Ut(t,e)||(n.uniform3uiv(this.addr,e),Ht(t,e))}function X2(n,e){const t=this.cache;Ut(t,e)||(n.uniform4uiv(this.addr,e),Ht(t,e))}function Y2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||yf,r)}function K2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Sf,r)}function Z2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Mf,r)}function J2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||wf,r)}function Q2(n){switch(n){case 5126:return z2;case 35664:return F2;case 35665:return k2;case 35666:return B2;case 35674:return O2;case 35675:return N2;case 35676:return $2;case 5124:case 35670:return U2;case 35667:case 35671:return H2;case 35668:case 35672:return V2;case 35669:case 35673:return W2;case 5125:return G2;case 36294:return j2;case 36295:return q2;case 36296:return X2;case 35678:case 36198:case 36298:case 36306:case 35682:return Y2;case 35679:case 36299:case 36307:return K2;case 35680:case 36300:case 36308:case 36293:return Z2;case 36289:case 36303:case 36311:case 36292:return J2}}function eT(n,e){n.uniform1fv(this.addr,e)}function tT(n,e){const t=Qr(e,this.size,2);n.uniform2fv(this.addr,t)}function nT(n,e){const t=Qr(e,this.size,3);n.uniform3fv(this.addr,t)}function iT(n,e){const t=Qr(e,this.size,4);n.uniform4fv(this.addr,t)}function rT(n,e){const t=Qr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function oT(n,e){const t=Qr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function aT(n,e){const t=Qr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sT(n,e){n.uniform1iv(this.addr,e)}function lT(n,e){n.uniform2iv(this.addr,e)}function cT(n,e){n.uniform3iv(this.addr,e)}function uT(n,e){n.uniform4iv(this.addr,e)}function dT(n,e){n.uniform1uiv(this.addr,e)}function hT(n,e){n.uniform2uiv(this.addr,e)}function fT(n,e){n.uniform3uiv(this.addr,e)}function pT(n,e){n.uniform4uiv(this.addr,e)}function mT(n,e,t){const i=e.length,r=Ka(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTexture2D(e[o]||yf,r[o])}function gT(n,e,t){const i=e.length,r=Ka(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Sf,r[o])}function vT(n,e,t){const i=e.length,r=Ka(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Mf,r[o])}function xT(n,e,t){const i=e.length,r=Ka(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||wf,r[o])}function bT(n){switch(n){case 5126:return eT;case 35664:return tT;case 35665:return nT;case 35666:return iT;case 35674:return rT;case 35675:return oT;case 35676:return aT;case 5124:case 35670:return sT;case 35667:case 35671:return lT;case 35668:case 35672:return cT;case 35669:case 35673:return uT;case 5125:return dT;case 36294:return hT;case 36295:return fT;case 36296:return pT;case 35678:case 36198:case 36298:case 36306:case 35682:return mT;case 35679:case 36299:case 36307:return gT;case 35680:case 36300:case 36308:case 36293:return vT;case 36289:case 36303:case 36311:case 36292:return xT}}class _T{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Q2(t.type)}}class yT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=bT(t.type)}}class wT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],i)}}}const Gs=/(\w+)(\])?(\[|\.)?/g;function cd(n,e){n.seq.push(e),n.map[e.id]=e}function ST(n,e,t){const i=n.name,r=i.length;for(Gs.lastIndex=0;;){const o=Gs.exec(i),s=Gs.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){cd(t,c===void 0?new _T(a,n,e):new yT(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new wT(a),cd(t,d)),t=d}}}class ya{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);ST(o,s,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function ud(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let MT=0;function CT(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}function TT(n){switch(n){case rr:return["Linear","( value )"];case gt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function dd(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+CT(n.getShaderSource(e),s)}else return r}function ET(n,e){const t=TT(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function AT(n,e){let t;switch(e){case KS:t="Linear";break;case ZS:t="Reinhard";break;case JS:t="OptimizedCineon";break;case QS:t="ACESFilmic";break;case e1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function PT(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(fo).join(`
`)}function RT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function LT(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),s=o.name;let a=1;o.type===35674&&(a=2),o.type===35675&&(a=3),o.type===35676&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function fo(n){return n!==""}function hd(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ml(n){return n.replace(DT,IT)}function IT(n,e){const t=Qe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ml(t)}const zT=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,FT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(n){return n.replace(FT,Cf).replace(zT,kT)}function kT(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Cf(n,e,t,i)}function Cf(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function md(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function BT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ES?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ho&&(e="SHADOWMAP_TYPE_VSM"),e}function OT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Nr:case $r:e="ENVMAP_TYPE_CUBE";break;case qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $r:e="ENVMAP_MODE_REFRACTION";break}return e}function $T(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ja:e="ENVMAP_BLENDING_MULTIPLY";break;case XS:e="ENVMAP_BLENDING_MIX";break;case YS:e="ENVMAP_BLENDING_ADD";break}return e}function UT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function HT(n,e,t,i){const r=n.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=BT(t),c=OT(t),u=NT(t),d=$T(t),h=UT(t),m=t.isWebGL2?"":PT(t),g=RT(o),p=r.createProgram();let f,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(fo).join(`
`),f.length>0&&(f+=`
`),v=[m,g].filter(fo).join(`
`),v.length>0&&(v+=`
`)):(f=[md(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),v=[m,md(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?Qe.tonemapping_pars_fragment:"",t.toneMapping!==ei?AT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.encodings_pars_fragment,ET("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),s=Ml(s),s=hd(s,t),s=fd(s,t),a=Ml(a),a=hd(a,t),a=fd(a,t),s=pd(s),a=pd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["#define varying in",t.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const T=y+f+s,_=y+v+a,M=ud(r,35633,T),A=ud(r,35632,_);if(r.attachShader(p,M),r.attachShader(p,A),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const S=r.getProgramInfoLog(p).trim(),R=r.getShaderInfoLog(M).trim(),D=r.getShaderInfoLog(A).trim();let $=!0,Z=!0;if(r.getProgramParameter(p,35714)===!1){$=!1;const L=dd(r,M,"vertex"),N=dd(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+S+`
`+L+`
`+N)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(R===""||D==="")&&(Z=!1);Z&&(this.diagnostics={runnable:$,programLog:S,vertexShader:{log:R,prefix:f},fragmentShader:{log:D,prefix:v}})}r.deleteShader(M),r.deleteShader(A);let w;this.getUniforms=function(){return w===void 0&&(w=new ya(r,p)),w};let x;return this.getAttributes=function(){return x===void 0&&(x=LT(r,p)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=MT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=A,this}let VT=0;class WT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new GT(e);t.set(e,i)}return t.get(e)}}class GT{constructor(e){this.id=VT++,this.code=e,this.usedTimes=0}}function jT(n,e,t,i,r,o,s){const a=new pf,l=new WT,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,S,R,D,$){const Z=D.fog,L=$.geometry,N=x.isMeshStandardMaterial?D.environment:null,O=(x.isMeshStandardMaterial?t:e).get(x.envMap||N),H=!!O&&O.mapping===qa?O.image.height:null,Y=g[x.type];x.precision!==null&&(m=r.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const I=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,B=I!==void 0?I.length:0;let oe=0;L.morphAttributes.position!==void 0&&(oe=1),L.morphAttributes.normal!==void 0&&(oe=2),L.morphAttributes.color!==void 0&&(oe=3);let re,pe,Te,Pe;if(Y){const ke=Dn[Y];re=ke.vertexShader,pe=ke.fragmentShader}else re=x.vertexShader,pe=x.fragmentShader,l.update(x),Te=l.getVertexShaderID(x),Pe=l.getFragmentShaderID(x);const W=n.getRenderTarget(),$e=x.alphaTest>0,Le=x.clearcoat>0,me=x.iridescence>0;return{isWebGL2:u,shaderID:Y,shaderName:x.type,vertexShader:re,fragmentShader:pe,defines:x.defines,customVertexShaderID:Te,customFragmentShaderID:Pe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:h,outputEncoding:W===null?n.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:rr,map:!!x.map,matcap:!!x.matcap,envMap:!!O,envMapMode:O&&O.mapping,envMapCubeUVHeight:H,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===b1,tangentSpaceNormalMap:x.normalMapType===Kr,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===gt,clearcoat:Le,clearcoatMap:Le&&!!x.clearcoatMap,clearcoatRoughnessMap:Le&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:Le&&!!x.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!x.iridescenceMap,iridescenceThicknessMap:me&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Fr,alphaMap:!!x.alphaMap,alphaTest:$e,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!L.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!Z,useFog:x.fog===!0,fogExp2:Z&&Z.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:d,skinning:$.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:oe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:x.toneMapped?n.toneMapping:ei,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Or,flipSided:x.side===Cn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)S.push(R),S.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(v(S,x),y(S,x),S.push(n.outputEncoding)),S.push(x.customProgramCacheKey),S.join()}function v(x,S){x.push(S.precision),x.push(S.outputEncoding),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.combine),x.push(S.vertexUvs),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.map&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.lightMap&&a.enable(7),S.aoMap&&a.enable(8),S.emissiveMap&&a.enable(9),S.bumpMap&&a.enable(10),S.normalMap&&a.enable(11),S.objectSpaceNormalMap&&a.enable(12),S.tangentSpaceNormalMap&&a.enable(13),S.clearcoat&&a.enable(14),S.clearcoatMap&&a.enable(15),S.clearcoatRoughnessMap&&a.enable(16),S.clearcoatNormalMap&&a.enable(17),S.iridescence&&a.enable(18),S.iridescenceMap&&a.enable(19),S.iridescenceThicknessMap&&a.enable(20),S.displacementMap&&a.enable(21),S.specularMap&&a.enable(22),S.roughnessMap&&a.enable(23),S.metalnessMap&&a.enable(24),S.gradientMap&&a.enable(25),S.alphaMap&&a.enable(26),S.alphaTest&&a.enable(27),S.vertexColors&&a.enable(28),S.vertexAlphas&&a.enable(29),S.vertexUvs&&a.enable(30),S.vertexTangents&&a.enable(31),S.uvsVertexOnly&&a.enable(32),S.fog&&a.enable(33),x.push(a.mask),a.disableAll(),S.useFog&&a.enable(0),S.flatShading&&a.enable(1),S.logarithmicDepthBuffer&&a.enable(2),S.skinning&&a.enable(3),S.morphTargets&&a.enable(4),S.morphNormals&&a.enable(5),S.morphColors&&a.enable(6),S.premultipliedAlpha&&a.enable(7),S.shadowMapEnabled&&a.enable(8),S.physicallyCorrectLights&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.specularIntensityMap&&a.enable(14),S.specularColorMap&&a.enable(15),S.transmission&&a.enable(16),S.transmissionMap&&a.enable(17),S.thicknessMap&&a.enable(18),S.sheen&&a.enable(19),S.sheenColorMap&&a.enable(20),S.sheenRoughnessMap&&a.enable(21),S.decodeVideoTexture&&a.enable(22),S.opaque&&a.enable(23),x.push(a.mask)}function T(x){const S=g[x.type];let R;if(S){const D=Dn[S];R=z1.clone(D.uniforms)}else R=x.uniforms;return R}function _(x,S){let R;for(let D=0,$=c.length;D<$;D++){const Z=c[D];if(Z.cacheKey===S){R=Z,++R.usedTimes;break}}return R===void 0&&(R=new HT(n,S,x,o),c.push(R)),R}function M(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function w(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:T,acquireProgram:_,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:w}}function qT(){let n=new WeakMap;function e(o){let s=n.get(o);return s===void 0&&(s={},n.set(o,s)),s}function t(o){n.delete(o)}function i(o,s,a){n.get(o)[s]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function XT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function gd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function vd(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(d,h,m,g,p,f){let v=n[e];return v===void 0?(v={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:p,group:f},n[e]=v):(v.id=d.id,v.object=d,v.geometry=h,v.material=m,v.groupOrder=g,v.renderOrder=d.renderOrder,v.z=p,v.group=f),e++,v}function a(d,h,m,g,p,f){const v=s(d,h,m,g,p,f);m.transmission>0?i.push(v):m.transparent===!0?r.push(v):t.push(v)}function l(d,h,m,g,p,f){const v=s(d,h,m,g,p,f);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function c(d,h){t.length>1&&t.sort(d||XT),i.length>1&&i.sort(h||gd),r.length>1&&r.sort(h||gd)}function u(){for(let d=e,h=n.length;d<h;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function YT(){let n=new WeakMap;function e(i,r){let o;return n.has(i)===!1?(o=new vd,n.set(i,[o])):r>=n.get(i).length?(o=new vd,n.get(i).push(o)):o=n.get(i)[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function KT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new We};break;case"SpotLight":t={position:new j,direction:new j,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function ZT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let JT=0;function QT(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function e3(n,e){const t=new KT,i=ZT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)r.probe.push(new j);const o=new j,s=new Et,a=new Et;function l(u,d){let h=0,m=0,g=0;for(let S=0;S<9;S++)r.probe[S].set(0,0,0);let p=0,f=0,v=0,y=0,T=0,_=0,M=0,A=0;u.sort(QT);const w=d!==!0?Math.PI:1;for(let S=0,R=u.length;S<R;S++){const D=u[S],$=D.color,Z=D.intensity,L=D.distance,N=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=$.r*Z*w,m+=$.g*Z*w,g+=$.b*Z*w;else if(D.isLightProbe)for(let O=0;O<9;O++)r.probe[O].addScaledVector(D.sh.coefficients[O],Z);else if(D.isDirectionalLight){const O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){const H=D.shadow,Y=i.get(D);Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,r.directionalShadow[p]=Y,r.directionalShadowMap[p]=N,r.directionalShadowMatrix[p]=D.shadow.matrix,_++}r.directional[p]=O,p++}else if(D.isSpotLight){const O=t.get(D);if(O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy($).multiplyScalar(Z*w),O.distance=L,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,D.castShadow){const H=D.shadow,Y=i.get(D);Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,r.spotShadow[v]=Y,r.spotShadowMap[v]=N,r.spotShadowMatrix[v]=D.shadow.matrix,A++}r.spot[v]=O,v++}else if(D.isRectAreaLight){const O=t.get(D);O.color.copy($).multiplyScalar(Z),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),r.rectArea[y]=O,y++}else if(D.isPointLight){const O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity*w),O.distance=D.distance,O.decay=D.decay,D.castShadow){const H=D.shadow,Y=i.get(D);Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,Y.shadowCameraNear=H.camera.near,Y.shadowCameraFar=H.camera.far,r.pointShadow[f]=Y,r.pointShadowMap[f]=N,r.pointShadowMatrix[f]=D.shadow.matrix,M++}r.point[f]=O,f++}else if(D.isHemisphereLight){const O=t.get(D);O.skyColor.copy(D.color).multiplyScalar(Z*w),O.groundColor.copy(D.groundColor).multiplyScalar(Z*w),r.hemi[T]=O,T++}}y>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_FLOAT_1,r.rectAreaLTC2=Ee.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_HALF_1,r.rectAreaLTC2=Ee.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;const x=r.hash;(x.directionalLength!==p||x.pointLength!==f||x.spotLength!==v||x.rectAreaLength!==y||x.hemiLength!==T||x.numDirectionalShadows!==_||x.numPointShadows!==M||x.numSpotShadows!==A)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=y,r.point.length=f,r.hemi.length=T,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=M,r.spotShadowMatrix.length=A,x.directionalLength=p,x.pointLength=f,x.spotLength=v,x.rectAreaLength=y,x.hemiLength=T,x.numDirectionalShadows=_,x.numPointShadows=M,x.numSpotShadows=A,r.version=JT++)}function c(u,d){let h=0,m=0,g=0,p=0,f=0;const v=d.matrixWorldInverse;for(let y=0,T=u.length;y<T;y++){const _=u[y];if(_.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),o.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(v),h++}else if(_.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(_.matrixWorld),o.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(v),g++}else if(_.isRectAreaLight){const M=r.rectArea[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),a.identity(),s.copy(_.matrixWorld),s.premultiply(v),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(_.isPointLight){const M=r.point[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),m++}else if(_.isHemisphereLight){const M=r.hemi[f];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(v),f++}}}return{setup:l,setupView:c,state:r}}function xd(n,e){const t=new e3(n,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function t3(n,e){let t=new WeakMap;function i(o,s=0){let a;return t.has(o)===!1?(a=new xd(n,e),t.set(o,[a])):s>=t.get(o).length?(a=new xd(n,e),t.get(o).push(a)):a=t.get(o)[s],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class Tf extends Ft{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=v1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ef extends Ft{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new j,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const n3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function r3(n,e,t){let i=new Jl;const r=new tt,o=new tt,s=new zt,a=new Tf({depthPacking:x1}),l=new Ef,c={},u=t.maxTextureSize,d={0:Cn,1:To,2:Or},h=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:n3,fragmentShader:i3}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const g=new pn;g.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Jn(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nf,this.render=function(_,M,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||_.length===0)return;const w=n.getRenderTarget(),x=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),R=n.state;R.setBlending(Mi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let D=0,$=_.length;D<$;D++){const Z=_[D],L=Z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const N=L.getFrameExtents();if(r.multiply(N),o.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/N.x),r.x=o.x*N.x,L.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/N.y),r.y=o.y*N.y,L.mapSize.y=o.y)),L.map===null&&!L.isPointLightShadow&&this.type===ho&&(L.map=new Ci(r.x,r.y),L.map.texture.name=Z.name+".shadowMap",L.mapPass=new Ci(r.x,r.y),L.camera.updateProjectionMatrix()),L.map===null){const H={minFilter:Gt,magFilter:Gt,format:wn};L.map=new Ci(r.x,r.y,H),L.map.texture.name=Z.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();const O=L.getViewportCount();for(let H=0;H<O;H++){const Y=L.getViewport(H);s.set(o.x*Y.x,o.y*Y.y,o.x*Y.z,o.y*Y.w),R.viewport(s),L.updateMatrices(Z,H),i=L.getFrustum(),T(M,A,L.camera,Z,this.type)}!L.isPointLightShadow&&this.type===ho&&v(L,A),L.needsUpdate=!1}f.needsUpdate=!1,n.setRenderTarget(w,x,S)};function v(_,M){const A=e.update(p);h.defines.VSM_SAMPLES!==_.blurSamples&&(h.defines.VSM_SAMPLES=_.blurSamples,m.defines.VSM_SAMPLES=_.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),h.uniforms.shadow_pass.value=_.map.texture,h.uniforms.resolution.value=_.mapSize,h.uniforms.radius.value=_.radius,n.setRenderTarget(_.mapPass),n.clear(),n.renderBufferDirect(M,null,A,h,p,null),m.uniforms.shadow_pass.value=_.mapPass.texture,m.uniforms.resolution.value=_.mapSize,m.uniforms.radius.value=_.radius,n.setRenderTarget(_.map),n.clear(),n.renderBufferDirect(M,null,A,m,p,null)}function y(_,M,A,w,x,S){let R=null;const D=A.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(D!==void 0?R=D:R=A.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const $=R.uuid,Z=M.uuid;let L=c[$];L===void 0&&(L={},c[$]=L);let N=L[Z];N===void 0&&(N=R.clone(),L[Z]=N),R=N}return R.visible=M.visible,R.wireframe=M.wireframe,S===ho?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:d[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaTest,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,A.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(A.matrixWorld),R.nearDistance=w,R.farDistance=x),R}function T(_,M,A,w,x){if(_.visible===!1)return;if(_.layers.test(M.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&x===ho)&&(!_.frustumCulled||i.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,_.matrixWorld);const D=e.update(_),$=_.material;if(Array.isArray($)){const Z=D.groups;for(let L=0,N=Z.length;L<N;L++){const O=Z[L],H=$[O.materialIndex];if(H&&H.visible){const Y=y(_,H,w,A.near,A.far,x);n.renderBufferDirect(A,null,D,Y,_,O)}}}else if($.visible){const Z=y(_,$,w,A.near,A.far,x);n.renderBufferDirect(A,null,D,Z,_,null)}}const R=_.children;for(let D=0,$=R.length;D<$;D++)T(R[D],M,A,w,x)}}function o3(n,e,t){const i=t.isWebGL2;function r(){let k=!1;const xe=new zt;let V=null;const z=new zt(0,0,0,0);return{setMask:function(U){V!==U&&!k&&(n.colorMask(U,U,U,U),V=U)},setLocked:function(U){k=U},setClear:function(U,le,te,ge,Me){Me===!0&&(U*=ge,le*=ge,te*=ge),xe.set(U,le,te,ge),z.equals(xe)===!1&&(n.clearColor(U,le,te,ge),z.copy(xe))},reset:function(){k=!1,V=null,z.set(-1,0,0,0)}}}function o(){let k=!1,xe=null,V=null,z=null;return{setTest:function(U){U?Pe(2929):W(2929)},setMask:function(U){xe!==U&&!k&&(n.depthMask(U),xe=U)},setFunc:function(U){if(V!==U){if(U)switch(U){case US:n.depthFunc(512);break;case HS:n.depthFunc(519);break;case VS:n.depthFunc(513);break;case vl:n.depthFunc(515);break;case WS:n.depthFunc(514);break;case GS:n.depthFunc(518);break;case jS:n.depthFunc(516);break;case qS:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);V=U}},setLocked:function(U){k=U},setClear:function(U){z!==U&&(n.clearDepth(U),z=U)},reset:function(){k=!1,xe=null,V=null,z=null}}}function s(){let k=!1,xe=null,V=null,z=null,U=null,le=null,te=null,ge=null,Me=null;return{setTest:function(be){k||(be?Pe(2960):W(2960))},setMask:function(be){xe!==be&&!k&&(n.stencilMask(be),xe=be)},setFunc:function(be,Ve,dt){(V!==be||z!==Ve||U!==dt)&&(n.stencilFunc(be,Ve,dt),V=be,z=Ve,U=dt)},setOp:function(be,Ve,dt){(le!==be||te!==Ve||ge!==dt)&&(n.stencilOp(be,Ve,dt),le=be,te=Ve,ge=dt)},setLocked:function(be){k=be},setClear:function(be){Me!==be&&(n.clearStencil(be),Me=be)},reset:function(){k=!1,xe=null,V=null,z=null,U=null,le=null,te=null,ge=null,Me=null}}}const a=new r,l=new o,c=new s;let u={},d={},h=new WeakMap,m=[],g=null,p=!1,f=null,v=null,y=null,T=null,_=null,M=null,A=null,w=!1,x=null,S=null,R=null,D=null,$=null;const Z=n.getParameter(35661);let L=!1,N=0;const O=n.getParameter(7938);O.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(O)[1]),L=N>=1):O.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),L=N>=2);let H=null,Y={};const I=n.getParameter(3088),B=n.getParameter(2978),oe=new zt().fromArray(I),re=new zt().fromArray(B);function pe(k,xe,V){const z=new Uint8Array(4),U=n.createTexture();n.bindTexture(k,U),n.texParameteri(k,10241,9728),n.texParameteri(k,10240,9728);for(let le=0;le<V;le++)n.texImage2D(xe+le,0,6408,1,1,0,6408,5121,z);return U}const Te={};Te[3553]=pe(3553,3553,1),Te[34067]=pe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(2929),l.setFunc(vl),Xe(!1),Ze(su),Pe(2884),Oe(Mi);function Pe(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function W(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function $e(k,xe){return d[k]!==xe?(n.bindFramebuffer(k,xe),d[k]=xe,i&&(k===36009&&(d[36160]=xe),k===36160&&(d[36009]=xe)),!0):!1}function Le(k,xe){let V=m,z=!1;if(k)if(V=h.get(xe),V===void 0&&(V=[],h.set(xe,V)),k.isWebGLMultipleRenderTargets){const U=k.texture;if(V.length!==U.length||V[0]!==36064){for(let le=0,te=U.length;le<te;le++)V[le]=36064+le;V.length=U.length,z=!0}}else V[0]!==36064&&(V[0]=36064,z=!0);else V[0]!==1029&&(V[0]=1029,z=!0);z&&(t.isWebGL2?n.drawBuffers(V):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}function me(k){return g!==k?(n.useProgram(k),g=k,!0):!1}const _e={[Ar]:32774,[RS]:32778,[LS]:32779};if(i)_e[du]=32775,_e[hu]=32776;else{const k=e.get("EXT_blend_minmax");k!==null&&(_e[du]=k.MIN_EXT,_e[hu]=k.MAX_EXT)}const ke={[DS]:0,[IS]:1,[zS]:768,[rf]:770,[$S]:776,[OS]:774,[kS]:772,[FS]:769,[of]:771,[NS]:775,[BS]:773};function Oe(k,xe,V,z,U,le,te,ge){if(k===Mi){p===!0&&(W(3042),p=!1);return}if(p===!1&&(Pe(3042),p=!0),k!==PS){if(k!==f||ge!==w){if((v!==Ar||_!==Ar)&&(n.blendEquation(32774),v=Ar,_=Ar),ge)switch(k){case Fr:n.blendFuncSeparate(1,771,1,771);break;case lu:n.blendFunc(1,1);break;case cu:n.blendFuncSeparate(0,769,0,1);break;case uu:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Fr:n.blendFuncSeparate(770,771,1,771);break;case lu:n.blendFunc(770,1);break;case cu:n.blendFuncSeparate(0,769,0,1);break;case uu:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}y=null,T=null,M=null,A=null,f=k,w=ge}return}U=U||xe,le=le||V,te=te||z,(xe!==v||U!==_)&&(n.blendEquationSeparate(_e[xe],_e[U]),v=xe,_=U),(V!==y||z!==T||le!==M||te!==A)&&(n.blendFuncSeparate(ke[V],ke[z],ke[le],ke[te]),y=V,T=z,M=le,A=te),f=k,w=null}function Fe(k,xe){k.side===Or?W(2884):Pe(2884);let V=k.side===Cn;xe&&(V=!V),Xe(V),k.blending===Fr&&k.transparent===!1?Oe(Mi):Oe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),l.setFunc(k.depthFunc),l.setTest(k.depthTest),l.setMask(k.depthWrite),a.setMask(k.colorWrite);const z=k.stencilWrite;c.setTest(z),z&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),fe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Pe(32926):W(32926)}function Xe(k){x!==k&&(k?n.frontFace(2304):n.frontFace(2305),x=k)}function Ze(k){k!==CS?(Pe(2884),k!==S&&(k===su?n.cullFace(1029):k===TS?n.cullFace(1028):n.cullFace(1032))):W(2884),S=k}function rt(k){k!==R&&(L&&n.lineWidth(k),R=k)}function fe(k,xe,V){k?(Pe(32823),(D!==xe||$!==V)&&(n.polygonOffset(xe,V),D=xe,$=V)):W(32823)}function ze(k){k?Pe(3089):W(3089)}function Ie(k){k===void 0&&(k=33984+Z-1),H!==k&&(n.activeTexture(k),H=k)}function Ce(k,xe){H===null&&Ie();let V=Y[H];V===void 0&&(V={type:void 0,texture:void 0},Y[H]=V),(V.type!==k||V.texture!==xe)&&(n.bindTexture(k,xe||Te[k]),V.type=k,V.texture=xe)}function ie(){const k=Y[H];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function C(){try{n.compressedTexImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function b(){try{n.texSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function F(){try{n.texSubImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{n.texStorage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function de(){try{n.texStorage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{n.texImage2D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{n.texImage3D.apply(n,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(k){oe.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),oe.copy(k))}function ye(k){re.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),re.copy(k))}function we(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},H=null,Y={},d={},h=new WeakMap,m=[],g=null,p=!1,f=null,v=null,y=null,T=null,_=null,M=null,A=null,w=!1,x=null,S=null,R=null,D=null,$=null,oe.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:W,bindFramebuffer:$e,drawBuffers:Le,useProgram:me,setBlending:Oe,setMaterial:Fe,setFlipSided:Xe,setCullFace:Ze,setLineWidth:rt,setPolygonOffset:fe,setScissorTest:ze,activeTexture:Ie,bindTexture:Ce,unbindTexture:ie,compressedTexImage2D:C,texImage2D:De,texImage3D:J,texStorage2D:ae,texStorage3D:de,texSubImage2D:b,texSubImage3D:F,compressedTexSubImage2D:q,scissor:Se,viewport:ye,reset:we}}function a3(n,e,t,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,b){return v?new OffscreenCanvas(C,b):Da("canvas")}function T(C,b,F,q){let ae=1;if((C.width>q||C.height>q)&&(ae=q/Math.max(C.width,C.height)),ae<1||b===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){const de=b?Sl:Math.floor,De=de(ae*C.width),J=de(ae*C.height);p===void 0&&(p=y(De,J));const Se=F?y(De,J):p;return Se.width=De,Se.height=J,Se.getContext("2d").drawImage(C,0,0,De,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+De+"x"+J+")."),Se}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function _(C){return Nu(C.width)&&Nu(C.height)}function M(C){return a?!1:C.wrapS!==yn||C.wrapT!==yn||C.minFilter!==Gt&&C.minFilter!==ln}function A(C,b){return C.generateMipmaps&&b&&C.minFilter!==Gt&&C.minFilter!==ln}function w(C){n.generateMipmap(C)}function x(C,b,F,q,ae=!1){if(a===!1)return b;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let de=b;return b===6403&&(F===5126&&(de=33326),F===5131&&(de=33325),F===5121&&(de=33321)),b===33319&&(F===5126&&(de=33328),F===5131&&(de=33327),F===5121&&(de=33323)),b===6408&&(F===5126&&(de=34836),F===5131&&(de=34842),F===5121&&(de=q===gt&&ae===!1?35907:32856),F===32819&&(de=32854),F===32820&&(de=32855)),(de===33325||de===33326||de===33327||de===33328||de===34842||de===34836)&&e.get("EXT_color_buffer_float"),de}function S(C,b,F){return A(C,F)===!0||C.isFramebufferTexture&&C.minFilter!==Gt&&C.minFilter!==ln?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function R(C){return C===Gt||C===fu||C===pu?9728:9729}function D(C){const b=C.target;b.removeEventListener("dispose",D),Z(b),b.isVideoTexture&&g.delete(b)}function $(C){const b=C.target;b.removeEventListener("dispose",$),N(b)}function Z(C){const b=i.get(C);if(b.__webglInit===void 0)return;const F=C.source,q=f.get(F);if(q){const ae=q[b.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&L(C),Object.keys(q).length===0&&f.delete(F)}i.remove(C)}function L(C){const b=i.get(C);n.deleteTexture(b.__webglTexture);const F=C.source,q=f.get(F);delete q[b.__cacheKey],s.memory.textures--}function N(C){const b=C.texture,F=i.get(C),q=i.get(b);if(q.__webglTexture!==void 0&&(n.deleteTexture(q.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)n.deleteFramebuffer(F.__webglFramebuffer[ae]),F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[ae]);else{if(n.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ae=0;ae<F.__webglColorRenderbuffer.length;ae++)F.__webglColorRenderbuffer[ae]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[ae]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ae=0,de=b.length;ae<de;ae++){const De=i.get(b[ae]);De.__webglTexture&&(n.deleteTexture(De.__webglTexture),s.memory.textures--),i.remove(b[ae])}i.remove(b),i.remove(C)}let O=0;function H(){O=0}function Y(){const C=O;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),O+=1,C}function I(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.encoding),b.join()}function B(C,b){const F=i.get(C);if(C.isVideoTexture&&Ce(C),C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){const q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(F,C,b);return}}t.activeTexture(33984+b),t.bindTexture(3553,F.__webglTexture)}function oe(C,b){const F=i.get(C);if(C.version>0&&F.__version!==C.version){Le(F,C,b);return}t.activeTexture(33984+b),t.bindTexture(35866,F.__webglTexture)}function re(C,b){const F=i.get(C);if(C.version>0&&F.__version!==C.version){Le(F,C,b);return}t.activeTexture(33984+b),t.bindTexture(32879,F.__webglTexture)}function pe(C,b){const F=i.get(C);if(C.version>0&&F.__version!==C.version){me(F,C,b);return}t.activeTexture(33984+b),t.bindTexture(34067,F.__webglTexture)}const Te={[_l]:10497,[yn]:33071,[yl]:33648},Pe={[Gt]:9728,[fu]:9984,[pu]:9986,[ln]:9729,[t1]:9985,[Xa]:9987};function W(C,b,F){if(F?(n.texParameteri(C,10242,Te[b.wrapS]),n.texParameteri(C,10243,Te[b.wrapT]),(C===32879||C===35866)&&n.texParameteri(C,32882,Te[b.wrapR]),n.texParameteri(C,10240,Pe[b.magFilter]),n.texParameteri(C,10241,Pe[b.minFilter])):(n.texParameteri(C,10242,33071),n.texParameteri(C,10243,33071),(C===32879||C===35866)&&n.texParameteri(C,32882,33071),(b.wrapS!==yn||b.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,10240,R(b.magFilter)),n.texParameteri(C,10241,R(b.minFilter)),b.minFilter!==Gt&&b.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(b.type===Xi&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Eo&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function $e(C,b){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",D));const q=b.source;let ae=f.get(q);ae===void 0&&(ae={},f.set(q,ae));const de=I(b);if(de!==C.__cacheKey){ae[de]===void 0&&(ae[de]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,F=!0),ae[de].usedTimes++;const De=ae[C.__cacheKey];De!==void 0&&(ae[C.__cacheKey].usedTimes--,De.usedTimes===0&&L(b)),C.__cacheKey=de,C.__webglTexture=ae[de].texture}return F}function Le(C,b,F){let q=3553;b.isDataArrayTexture&&(q=35866),b.isData3DTexture&&(q=32879);const ae=$e(C,b),de=b.source;if(t.activeTexture(33984+F),t.bindTexture(q,C.__webglTexture),de.version!==de.__currentVersion||ae===!0){n.pixelStorei(37440,b.flipY),n.pixelStorei(37441,b.premultiplyAlpha),n.pixelStorei(3317,b.unpackAlignment),n.pixelStorei(37443,0);const De=M(b)&&_(b.image)===!1;let J=T(b.image,De,!1,u);J=ie(b,J);const Se=_(J)||a,ye=o.convert(b.format,b.encoding);let we=o.convert(b.type),k=x(b.internalFormat,ye,we,b.encoding,b.isVideoTexture);W(q,b,Se);let xe;const V=b.mipmaps,z=a&&b.isVideoTexture!==!0,U=de.__currentVersion===void 0||ae===!0,le=S(b,J,Se);if(b.isDepthTexture)k=6402,a?b.type===Xi?k=36012:b.type===qi?k=33190:b.type===kr?k=35056:k=33189:b.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Qi&&k===6402&&b.type!==sf&&b.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=qi,we=o.convert(b.type)),b.format===Ur&&k===6402&&(k=34041,b.type!==kr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=kr,we=o.convert(b.type))),U&&(z?t.texStorage2D(3553,1,k,J.width,J.height):t.texImage2D(3553,0,k,J.width,J.height,0,ye,we,null));else if(b.isDataTexture)if(V.length>0&&Se){z&&U&&t.texStorage2D(3553,le,k,V[0].width,V[0].height);for(let te=0,ge=V.length;te<ge;te++)xe=V[te],z?t.texSubImage2D(3553,te,0,0,xe.width,xe.height,ye,we,xe.data):t.texImage2D(3553,te,k,xe.width,xe.height,0,ye,we,xe.data);b.generateMipmaps=!1}else z?(U&&t.texStorage2D(3553,le,k,J.width,J.height),t.texSubImage2D(3553,0,0,0,J.width,J.height,ye,we,J.data)):t.texImage2D(3553,0,k,J.width,J.height,0,ye,we,J.data);else if(b.isCompressedTexture){z&&U&&t.texStorage2D(3553,le,k,V[0].width,V[0].height);for(let te=0,ge=V.length;te<ge;te++)xe=V[te],b.format!==wn?ye!==null?z?t.compressedTexSubImage2D(3553,te,0,0,xe.width,xe.height,ye,xe.data):t.compressedTexImage2D(3553,te,k,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?t.texSubImage2D(3553,te,0,0,xe.width,xe.height,ye,we,xe.data):t.texImage2D(3553,te,k,xe.width,xe.height,0,ye,we,xe.data)}else if(b.isDataArrayTexture)z?(U&&t.texStorage3D(35866,le,k,J.width,J.height,J.depth),t.texSubImage3D(35866,0,0,0,0,J.width,J.height,J.depth,ye,we,J.data)):t.texImage3D(35866,0,k,J.width,J.height,J.depth,0,ye,we,J.data);else if(b.isData3DTexture)z?(U&&t.texStorage3D(32879,le,k,J.width,J.height,J.depth),t.texSubImage3D(32879,0,0,0,0,J.width,J.height,J.depth,ye,we,J.data)):t.texImage3D(32879,0,k,J.width,J.height,J.depth,0,ye,we,J.data);else if(b.isFramebufferTexture){if(U)if(z)t.texStorage2D(3553,le,k,J.width,J.height);else{let te=J.width,ge=J.height;for(let Me=0;Me<le;Me++)t.texImage2D(3553,Me,k,te,ge,0,ye,we,null),te>>=1,ge>>=1}}else if(V.length>0&&Se){z&&U&&t.texStorage2D(3553,le,k,V[0].width,V[0].height);for(let te=0,ge=V.length;te<ge;te++)xe=V[te],z?t.texSubImage2D(3553,te,0,0,ye,we,xe):t.texImage2D(3553,te,k,ye,we,xe);b.generateMipmaps=!1}else z?(U&&t.texStorage2D(3553,le,k,J.width,J.height),t.texSubImage2D(3553,0,0,0,ye,we,J)):t.texImage2D(3553,0,k,ye,we,J);A(b,Se)&&w(q),de.__currentVersion=de.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function me(C,b,F){if(b.image.length!==6)return;const q=$e(C,b),ae=b.source;if(t.activeTexture(33984+F),t.bindTexture(34067,C.__webglTexture),ae.version!==ae.__currentVersion||q===!0){n.pixelStorei(37440,b.flipY),n.pixelStorei(37441,b.premultiplyAlpha),n.pixelStorei(3317,b.unpackAlignment),n.pixelStorei(37443,0);const de=b.isCompressedTexture||b.image[0].isCompressedTexture,De=b.image[0]&&b.image[0].isDataTexture,J=[];for(let te=0;te<6;te++)!de&&!De?J[te]=T(b.image[te],!1,!0,c):J[te]=De?b.image[te].image:b.image[te],J[te]=ie(b,J[te]);const Se=J[0],ye=_(Se)||a,we=o.convert(b.format,b.encoding),k=o.convert(b.type),xe=x(b.internalFormat,we,k,b.encoding),V=a&&b.isVideoTexture!==!0,z=ae.__currentVersion===void 0||q===!0;let U=S(b,Se,ye);W(34067,b,ye);let le;if(de){V&&z&&t.texStorage2D(34067,U,xe,Se.width,Se.height);for(let te=0;te<6;te++){le=J[te].mipmaps;for(let ge=0;ge<le.length;ge++){const Me=le[ge];b.format!==wn?we!==null?V?t.compressedTexSubImage2D(34069+te,ge,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(34069+te,ge,xe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?t.texSubImage2D(34069+te,ge,0,0,Me.width,Me.height,we,k,Me.data):t.texImage2D(34069+te,ge,xe,Me.width,Me.height,0,we,k,Me.data)}}}else{le=b.mipmaps,V&&z&&(le.length>0&&U++,t.texStorage2D(34067,U,xe,J[0].width,J[0].height));for(let te=0;te<6;te++)if(De){V?t.texSubImage2D(34069+te,0,0,0,J[te].width,J[te].height,we,k,J[te].data):t.texImage2D(34069+te,0,xe,J[te].width,J[te].height,0,we,k,J[te].data);for(let ge=0;ge<le.length;ge++){const be=le[ge].image[te].image;V?t.texSubImage2D(34069+te,ge+1,0,0,be.width,be.height,we,k,be.data):t.texImage2D(34069+te,ge+1,xe,be.width,be.height,0,we,k,be.data)}}else{V?t.texSubImage2D(34069+te,0,0,0,we,k,J[te]):t.texImage2D(34069+te,0,xe,we,k,J[te]);for(let ge=0;ge<le.length;ge++){const Me=le[ge];V?t.texSubImage2D(34069+te,ge+1,0,0,we,k,Me.image[te]):t.texImage2D(34069+te,ge+1,xe,we,k,Me.image[te])}}}A(b,ye)&&w(34067),ae.__currentVersion=ae.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function _e(C,b,F,q,ae){const de=o.convert(F.format,F.encoding),De=o.convert(F.type),J=x(F.internalFormat,de,De,F.encoding);i.get(b).__hasExternalTextures||(ae===32879||ae===35866?t.texImage3D(ae,0,J,b.width,b.height,b.depth,0,de,De,null):t.texImage2D(ae,0,J,b.width,b.height,0,de,De,null)),t.bindFramebuffer(36160,C),Ie(b)?h.framebufferTexture2DMultisampleEXT(36160,q,ae,i.get(F).__webglTexture,0,ze(b)):n.framebufferTexture2D(36160,q,ae,i.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(C,b,F){if(n.bindRenderbuffer(36161,C),b.depthBuffer&&!b.stencilBuffer){let q=33189;if(F||Ie(b)){const ae=b.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Xi?q=36012:ae.type===qi&&(q=33190));const de=ze(b);Ie(b)?h.renderbufferStorageMultisampleEXT(36161,de,q,b.width,b.height):n.renderbufferStorageMultisample(36161,de,q,b.width,b.height)}else n.renderbufferStorage(36161,q,b.width,b.height);n.framebufferRenderbuffer(36160,36096,36161,C)}else if(b.depthBuffer&&b.stencilBuffer){const q=ze(b);F&&Ie(b)===!1?n.renderbufferStorageMultisample(36161,q,35056,b.width,b.height):Ie(b)?h.renderbufferStorageMultisampleEXT(36161,q,35056,b.width,b.height):n.renderbufferStorage(36161,34041,b.width,b.height),n.framebufferRenderbuffer(36160,33306,36161,C)}else{const q=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ae=0;ae<q.length;ae++){const de=q[ae],De=o.convert(de.format,de.encoding),J=o.convert(de.type),Se=x(de.internalFormat,De,J,de.encoding),ye=ze(b);F&&Ie(b)===!1?n.renderbufferStorageMultisample(36161,ye,Se,b.width,b.height):Ie(b)?h.renderbufferStorageMultisampleEXT(36161,ye,Se,b.width,b.height):n.renderbufferStorage(36161,Se,b.width,b.height)}}n.bindRenderbuffer(36161,null)}function Oe(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),B(b.depthTexture,0);const q=i.get(b.depthTexture).__webglTexture,ae=ze(b);if(b.depthTexture.format===Qi)Ie(b)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,q,0,ae):n.framebufferTexture2D(36160,36096,3553,q,0);else if(b.depthTexture.format===Ur)Ie(b)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,q,0,ae):n.framebufferTexture2D(36160,33306,3553,q,0);else throw new Error("Unknown depthTexture format")}function Fe(C){const b=i.get(C),F=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Oe(b.__webglFramebuffer,C)}else if(F){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(36160,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]=n.createRenderbuffer(),ke(b.__webglDepthbuffer[q],C,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),ke(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function Xe(C,b,F){const q=i.get(C);b!==void 0&&_e(q.__webglFramebuffer,C,C.texture,36064,3553),F!==void 0&&Fe(C)}function Ze(C){const b=C.texture,F=i.get(C),q=i.get(b);C.addEventListener("dispose",$),C.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=b.version,s.memory.textures++);const ae=C.isWebGLCubeRenderTarget===!0,de=C.isWebGLMultipleRenderTargets===!0,De=_(C)||a;if(ae){F.__webglFramebuffer=[];for(let J=0;J<6;J++)F.__webglFramebuffer[J]=n.createFramebuffer()}else{if(F.__webglFramebuffer=n.createFramebuffer(),de)if(r.drawBuffers){const J=C.texture;for(let Se=0,ye=J.length;Se<ye;Se++){const we=i.get(J[Se]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Ie(C)===!1){const J=de?b:[b];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let Se=0;Se<J.length;Se++){const ye=J[Se];F.__webglColorRenderbuffer[Se]=n.createRenderbuffer(),n.bindRenderbuffer(36161,F.__webglColorRenderbuffer[Se]);const we=o.convert(ye.format,ye.encoding),k=o.convert(ye.type),xe=x(ye.internalFormat,we,k,ye.encoding),V=ze(C);n.renderbufferStorageMultisample(36161,V,xe,C.width,C.height),n.framebufferRenderbuffer(36160,36064+Se,36161,F.__webglColorRenderbuffer[Se])}n.bindRenderbuffer(36161,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ke(F.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(ae){t.bindTexture(34067,q.__webglTexture),W(34067,b,De);for(let J=0;J<6;J++)_e(F.__webglFramebuffer[J],C,b,36064,34069+J);A(b,De)&&w(34067),t.unbindTexture()}else if(de){const J=C.texture;for(let Se=0,ye=J.length;Se<ye;Se++){const we=J[Se],k=i.get(we);t.bindTexture(3553,k.__webglTexture),W(3553,we,De),_e(F.__webglFramebuffer,C,we,36064+Se,3553),A(we,De)&&w(3553)}t.unbindTexture()}else{let J=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?J=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(J,q.__webglTexture),W(J,b,De),_e(F.__webglFramebuffer,C,b,36064,J),A(b,De)&&w(J),t.unbindTexture()}C.depthBuffer&&Fe(C)}function rt(C){const b=_(C)||a,F=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let q=0,ae=F.length;q<ae;q++){const de=F[q];if(A(de,b)){const De=C.isWebGLCubeRenderTarget?34067:3553,J=i.get(de).__webglTexture;t.bindTexture(De,J),w(De),t.unbindTexture()}}}function fe(C){if(a&&C.samples>0&&Ie(C)===!1){const b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],F=C.width,q=C.height;let ae=16384;const de=[],De=C.stencilBuffer?33306:36096,J=i.get(C),Se=C.isWebGLMultipleRenderTargets===!0;if(Se)for(let ye=0;ye<b.length;ye++)t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ye,36161,null),t.bindFramebuffer(36160,J.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ye,3553,null,0);t.bindFramebuffer(36008,J.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,J.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){de.push(36064+ye),C.depthBuffer&&de.push(De);const we=J.__ignoreDepthValues!==void 0?J.__ignoreDepthValues:!1;if(we===!1&&(C.depthBuffer&&(ae|=256),C.stencilBuffer&&(ae|=1024)),Se&&n.framebufferRenderbuffer(36008,36064,36161,J.__webglColorRenderbuffer[ye]),we===!0&&(n.invalidateFramebuffer(36008,[De]),n.invalidateFramebuffer(36009,[De])),Se){const k=i.get(b[ye]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,k,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,ae,9728),m&&n.invalidateFramebuffer(36008,de)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Se)for(let ye=0;ye<b.length;ye++){t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ye,36161,J.__webglColorRenderbuffer[ye]);const we=i.get(b[ye]).__webglTexture;t.bindFramebuffer(36160,J.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ye,3553,we,0)}t.bindFramebuffer(36009,J.__webglMultisampledFramebuffer)}}function ze(C){return Math.min(d,C.samples)}function Ie(C){const b=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ce(C){const b=s.render.frame;g.get(C)!==b&&(g.set(C,b),C.update())}function ie(C,b){const F=C.encoding,q=C.format,ae=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===wl||F!==rr&&(F===gt?a===!1?e.has("EXT_sRGB")===!0&&q===wn?(C.format=wl,C.minFilter=ln,C.generateMipmaps=!1):b=uf.sRGBToLinear(b):(q!==wn||ae!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),b}this.allocateTextureUnit=Y,this.resetTextureUnits=H,this.setTexture2D=B,this.setTexture2DArray=oe,this.setTexture3D=re,this.setTextureCube=pe,this.rebindTextures=Xe,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ie}function s3(n,e,t){const i=t.isWebGL2;function r(o,s=null){let a;if(o===ir)return 5121;if(o===o1)return 32819;if(o===a1)return 32820;if(o===n1)return 5120;if(o===i1)return 5122;if(o===sf)return 5123;if(o===r1)return 5124;if(o===qi)return 5125;if(o===Xi)return 5126;if(o===Eo)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===s1)return 6406;if(o===wn)return 6408;if(o===c1)return 6409;if(o===u1)return 6410;if(o===Qi)return 6402;if(o===Ur)return 34041;if(o===d1)return 6403;if(o===l1)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(o===wl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===h1)return 36244;if(o===f1)return 33319;if(o===p1)return 33320;if(o===m1)return 36249;if(o===ps||o===ms||o===gs||o===vs)if(s===gt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===ps)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===ms)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===ps)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===ms)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===gs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===vs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===mu||o===gu||o===vu||o===xu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===mu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===gu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===vu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===xu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===g1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===bu||o===_u)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===bu)return s===gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===_u)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===yu||o===wu||o===Su||o===Mu||o===Cu||o===Tu||o===Eu||o===Au||o===Pu||o===Ru||o===Lu||o===Du||o===Iu||o===zu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===yu)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===wu)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Su)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Mu)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Cu)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Tu)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Eu)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Au)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Pu)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Ru)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Lu)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Du)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Iu)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===zu)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Fu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===Fu)return s===gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return o===kr?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}class l3 extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class pa extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const c3={type:"move"};class js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c3))),c&&e.hand){s=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const y=new pa;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[p.jointName]=y,c.add(y)}const v=c.joints[p.jointName];f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=f.radius),v.visible=f!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}}class u3 extends En{constructor(e,t,i,r,o,s,a,l,c,u){if(u=u!==void 0?u:Qi,u!==Qi&&u!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Qi&&(i=qi),i===void 0&&u===Ur&&(i=kr),super(null,r,o,s,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1}}class d3 extends Zr{constructor(e,t){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=null,c=null,u=null,d=null,h=null,m=null;const g=t.getContextAttributes();let p=null,f=null;const v=[],y=new Map,T=new cn;T.layers.enable(1),T.viewport=new zt;const _=new cn;_.layers.enable(2),_.viewport=new zt;const M=[T,_],A=new l3;A.layers.enable(1),A.layers.enable(2);let w=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let B=v[I];return B===void 0&&(B=new js,v[I]=B),B.getTargetRaySpace()},this.getControllerGrip=function(I){let B=v[I];return B===void 0&&(B=new js,v[I]=B),B.getGripSpace()},this.getHand=function(I){let B=v[I];return B===void 0&&(B=new js,v[I]=B),B.getHandSpace()};function S(I){const B=y.get(I.inputSource);B!==void 0&&B.dispatchEvent({type:I.type,data:I.inputSource})}function R(){r.removeEventListener("select",S),r.removeEventListener("selectstart",S),r.removeEventListener("selectend",S),r.removeEventListener("squeeze",S),r.removeEventListener("squeezestart",S),r.removeEventListener("squeezeend",S),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",D),y.forEach(function(I,B){I!==void 0&&I.disconnect(B)}),y.clear(),w=null,x=null,e.setRenderTarget(p),h=null,d=null,u=null,r=null,f=null,Y.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){o=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",S),r.addEventListener("selectstart",S),r.addEventListener("selectend",S),r.addEventListener("squeeze",S),r.addEventListener("squeezestart",S),r.addEventListener("squeezeend",S),r.addEventListener("end",R),r.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,t,B),r.updateRenderState({baseLayer:h}),f=new Ci(h.framebufferWidth,h.framebufferHeight,{format:wn,type:ir,encoding:e.outputEncoding})}else{let B=null,oe=null,re=null;g.depth&&(re=g.stencil?35056:33190,B=g.stencil?Ur:Qi,oe=g.stencil?kr:qi);const pe={colorFormat:e.outputEncoding===gt?35907:32856,depthFormat:re,scaleFactor:o};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(pe),r.updateRenderState({layers:[d]}),f=new Ci(d.textureWidth,d.textureHeight,{format:wn,type:ir,depthTexture:new u3(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const Te=e.properties.get(f);Te.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,s=await r.requestReferenceSpace(a),Y.setContext(r),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function D(I){const B=r.inputSources;for(let oe=0;oe<B.length;oe++){const re=B[oe].handedness==="right"?1:0;y.set(B[oe],v[re])}for(let oe=0;oe<I.removed.length;oe++){const re=I.removed[oe],pe=y.get(re);pe&&(pe.dispatchEvent({type:"disconnected",data:re}),y.delete(re))}for(let oe=0;oe<I.added.length;oe++){const re=I.added[oe],pe=y.get(re);pe&&pe.dispatchEvent({type:"connected",data:re})}}const $=new j,Z=new j;function L(I,B,oe){$.setFromMatrixPosition(B.matrixWorld),Z.setFromMatrixPosition(oe.matrixWorld);const re=$.distanceTo(Z),pe=B.projectionMatrix.elements,Te=oe.projectionMatrix.elements,Pe=pe[14]/(pe[10]-1),W=pe[14]/(pe[10]+1),$e=(pe[9]+1)/pe[5],Le=(pe[9]-1)/pe[5],me=(pe[8]-1)/pe[0],_e=(Te[8]+1)/Te[0],ke=Pe*me,Oe=Pe*_e,Fe=re/(-me+_e),Xe=Fe*-me;B.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Xe),I.translateZ(Fe),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const Ze=Pe+Fe,rt=W+Fe,fe=ke-Xe,ze=Oe+(re-Xe),Ie=$e*W/rt*Ze,Ce=Le*W/rt*Ze;I.projectionMatrix.makePerspective(fe,ze,Ie,Ce,Ze,rt)}function N(I,B){B===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(B.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;A.near=_.near=T.near=I.near,A.far=_.far=T.far=I.far,(w!==A.near||x!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),w=A.near,x=A.far);const B=I.parent,oe=A.cameras;N(A,B);for(let pe=0;pe<oe.length;pe++)N(oe[pe],B);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),I.position.copy(A.position),I.quaternion.copy(A.quaternion),I.scale.copy(A.scale),I.matrix.copy(A.matrix),I.matrixWorld.copy(A.matrixWorld);const re=I.children;for(let pe=0,Te=re.length;pe<Te;pe++)re[pe].updateMatrixWorld(!0);oe.length===2?L(A,T,_):A.projectionMatrix.copy(T.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(I){d!==null&&(d.fixedFoveation=I),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=I)};let O=null;function H(I,B){if(c=B.getViewerPose(l||s),m=B,c!==null){const re=c.views;h!==null&&(e.setRenderTargetFramebuffer(f,h.framebuffer),e.setRenderTarget(f));let pe=!1;re.length!==A.cameras.length&&(A.cameras.length=0,pe=!0);for(let Te=0;Te<re.length;Te++){const Pe=re[Te];let W=null;if(h!==null)W=h.getViewport(Pe);else{const Le=u.getViewSubImage(d,Pe);W=Le.viewport,Te===0&&(e.setRenderTargetTextures(f,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(f))}let $e=M[Te];$e===void 0&&($e=new cn,$e.layers.enable(Te),$e.viewport=new zt,M[Te]=$e),$e.matrix.fromArray(Pe.transform.matrix),$e.projectionMatrix.fromArray(Pe.projectionMatrix),$e.viewport.set(W.x,W.y,W.width,W.height),Te===0&&A.matrix.copy($e.matrix),pe===!0&&A.cameras.push($e)}}const oe=r.inputSources;for(let re=0;re<v.length;re++){const pe=oe[re],Te=y.get(pe);Te!==void 0&&Te.update(pe,B,l||s)}O&&O(I,B),m=null}const Y=new bf;Y.setAnimationLoop(H),this.setAnimationLoop=function(I){O=I},this.dispose=function(){}}}function h3(n,e){function t(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,v,y,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),c(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&h(p,f,T)):f.isMeshMatcapMaterial?(r(p,f),m(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),g(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&s(p,f)):f.isPointsMaterial?a(p,f,v,y):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Cn&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Cn&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const _=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*_}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let y;f.map?y=f.map:f.specularMap?y=f.specularMap:f.displacementMap?y=f.displacementMap:f.normalMap?y=f.normalMap:f.bumpMap?y=f.bumpMap:f.roughnessMap?y=f.roughnessMap:f.metalnessMap?y=f.metalnessMap:f.alphaMap?y=f.alphaMap:f.emissiveMap?y=f.emissiveMap:f.clearcoatMap?y=f.clearcoatMap:f.clearcoatNormalMap?y=f.clearcoatNormalMap:f.clearcoatRoughnessMap?y=f.clearcoatRoughnessMap:f.iridescenceMap?y=f.iridescenceMap:f.iridescenceThicknessMap?y=f.iridescenceThicknessMap:f.specularIntensityMap?y=f.specularIntensityMap:f.specularColorMap?y=f.specularColorMap:f.transmissionMap?y=f.transmissionMap:f.thicknessMap?y=f.thicknessMap:f.sheenColorMap?y=f.sheenColorMap:f.sheenRoughnessMap&&(y=f.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let T;f.aoMap?T=f.aoMap:f.lightMap&&(T=f.lightMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uv2Transform.value.copy(T.matrix))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function s(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,v,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=y*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let T;f.map?T=f.map:f.alphaMap&&(T=f.alphaMap),T!==void 0&&(T.matrixAutoUpdate===!0&&T.updateMatrix(),p.uvTransform.value.copy(T.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function h(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Cn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function f3(){const n=Da("canvas");return n.style.display="block",n}function Af(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:f3(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,o=n.antialias!==void 0?n.antialias:!1,s=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let d=null,h=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=rr,this.physicallyCorrectLights=!1,this.toneMapping=ei,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let f=!1,v=0,y=0,T=null,_=-1,M=null;const A=new zt,w=new zt;let x=null,S=e.width,R=e.height,D=1,$=null,Z=null;const L=new zt(0,0,S,R),N=new zt(0,0,S,R);let O=!1;const H=new Jl;let Y=!1,I=!1,B=null;const oe=new Et,re=new tt,pe=new j,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return T===null?D:1}let W=t;function $e(P,X){for(let ne=0;ne<P.length;ne++){const Q=P[ne],ce=e.getContext(Q,X);if(ce!==null)return ce}return null}try{const P={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kl}`),e.addEventListener("webglcontextlost",k,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",V,!1),W===null){const X=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&X.shift(),W=$e(X,P),W===null)throw $e(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Le,me,_e,ke,Oe,Fe,Xe,Ze,rt,fe,ze,Ie,Ce,ie,C,b,F,q,ae,de,De,J,Se;function ye(){Le=new T2(W),me=new _2(W,Le,n),Le.init(me),J=new s3(W,Le,me),_e=new o3(W,Le,me),ke=new P2,Oe=new qT,Fe=new a3(W,Le,_e,Oe,me,J,ke),Xe=new w2(p),Ze=new C2(p),rt=new U1(W,me),Se=new x2(W,Le,rt,me),fe=new E2(W,rt,ke,Se),ze=new I2(W,fe,rt,ke),ae=new D2(W,me,Fe),b=new y2(Oe),Ie=new jT(p,Xe,Ze,Le,me,Se,b),Ce=new h3(p,Oe),ie=new YT,C=new t3(Le,me),q=new v2(p,Xe,_e,ze,u,s),F=new r3(p,ze,me),de=new b2(W,Le,ke,me),De=new A2(W,Le,ke,me),ke.programs=Ie.programs,p.capabilities=me,p.extensions=Le,p.properties=Oe,p.renderLists=ie,p.shadowMap=F,p.state=_e,p.info=ke}ye();const we=new d3(p,W);this.xr=we,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const P=Le.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Le.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(P){P!==void 0&&(D=P,this.setSize(S,R,!1))},this.getSize=function(P){return P.set(S,R)},this.setSize=function(P,X,ne){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=P,R=X,e.width=Math.floor(P*D),e.height=Math.floor(X*D),ne!==!1&&(e.style.width=P+"px",e.style.height=X+"px"),this.setViewport(0,0,P,X)},this.getDrawingBufferSize=function(P){return P.set(S*D,R*D).floor()},this.setDrawingBufferSize=function(P,X,ne){S=P,R=X,D=ne,e.width=Math.floor(P*ne),e.height=Math.floor(X*ne),this.setViewport(0,0,P,X)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(L)},this.setViewport=function(P,X,ne,Q){P.isVector4?L.set(P.x,P.y,P.z,P.w):L.set(P,X,ne,Q),_e.viewport(A.copy(L).multiplyScalar(D).floor())},this.getScissor=function(P){return P.copy(N)},this.setScissor=function(P,X,ne,Q){P.isVector4?N.set(P.x,P.y,P.z,P.w):N.set(P,X,ne,Q),_e.scissor(w.copy(N).multiplyScalar(D).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(P){_e.setScissorTest(O=P)},this.setOpaqueSort=function(P){$=P},this.setTransparentSort=function(P){Z=P},this.getClearColor=function(P){return P.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(P=!0,X=!0,ne=!0){let Q=0;P&&(Q|=16384),X&&(Q|=256),ne&&(Q|=1024),W.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",k,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",V,!1),ie.dispose(),C.dispose(),Oe.dispose(),Xe.dispose(),Ze.dispose(),ze.dispose(),Se.dispose(),Ie.dispose(),we.dispose(),we.removeEventListener("sessionstart",Me),we.removeEventListener("sessionend",be),B&&(B.dispose(),B=null),Ve.stop()};function k(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const P=ke.autoReset,X=F.enabled,ne=F.autoUpdate,Q=F.needsUpdate,ce=F.type;ye(),ke.autoReset=P,F.enabled=X,F.autoUpdate=ne,F.needsUpdate=Q,F.type=ce}function V(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function z(P){const X=P.target;X.removeEventListener("dispose",z),U(X)}function U(P){le(P),Oe.remove(P)}function le(P){const X=Oe.get(P).programs;X!==void 0&&(X.forEach(function(ne){Ie.releaseProgram(ne)}),P.isShaderMaterial&&Ie.releaseShaderCache(P))}this.renderBufferDirect=function(P,X,ne,Q,ce,He){X===null&&(X=Te);const Ge=ce.isMesh&&ce.matrixWorld.determinant()<0,qe=pt(P,X,ne,Q,ce);_e.setMaterial(Q,Ge);let je=ne.index;const it=ne.attributes.position;if(je===null){if(it===void 0||it.count===0)return}else if(je.count===0)return;let Je=1;Q.wireframe===!0&&(je=fe.getWireframeAttribute(ne),Je=2),Se.setup(ce,Q,qe,ne,je);let et,ut=de;je!==null&&(et=rt.get(je),ut=De,ut.setIndex(et));const Wn=je!==null?je.count:it.count,si=ne.drawRange.start*Je,li=ne.drawRange.count*Je,nn=He!==null?He.start*Je:0,ot=He!==null?He.count*Je:1/0,ci=Math.max(si,nn),xt=Math.min(Wn,si+li,nn+ot)-1,rn=Math.max(0,xt-ci+1);if(rn!==0){if(ce.isMesh)Q.wireframe===!0?(_e.setLineWidth(Q.wireframeLinewidth*Pe()),ut.setMode(1)):ut.setMode(4);else if(ce.isLine){let Pn=Q.linewidth;Pn===void 0&&(Pn=1),_e.setLineWidth(Pn*Pe()),ce.isLineSegments?ut.setMode(1):ce.isLineLoop?ut.setMode(2):ut.setMode(3)}else ce.isPoints?ut.setMode(0):ce.isSprite&&ut.setMode(4);if(ce.isInstancedMesh)ut.renderInstances(ci,rn,ce.count);else if(ne.isInstancedBufferGeometry){const Pn=Math.min(ne.instanceCount,ne._maxInstanceCount);ut.renderInstances(ci,rn,Pn)}else ut.render(ci,rn)}},this.compile=function(P,X){h=C.get(P),h.init(),g.push(h),P.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(h.pushLight(ne),ne.castShadow&&h.pushShadow(ne))}),h.setupLights(p.physicallyCorrectLights),P.traverse(function(ne){const Q=ne.material;if(Q)if(Array.isArray(Q))for(let ce=0;ce<Q.length;ce++){const He=Q[ce];ve(He,P,ne)}else ve(Q,P,ne)}),g.pop(),h=null};let te=null;function ge(P){te&&te(P)}function Me(){Ve.stop()}function be(){Ve.start()}const Ve=new bf;Ve.setAnimationLoop(ge),typeof self!="undefined"&&Ve.setContext(self),this.setAnimationLoop=function(P){te=P,we.setAnimationLoop(P),P===null?Ve.stop():Ve.start()},we.addEventListener("sessionstart",Me),we.addEventListener("sessionend",be),this.render=function(P,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;P.autoUpdate===!0&&P.updateMatrixWorld(),X.parent===null&&X.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(X),X=we.getCamera()),P.isScene===!0&&P.onBeforeRender(p,P,X,T),h=C.get(P,g.length),h.init(),g.push(h),oe.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),H.setFromProjectionMatrix(oe),I=this.localClippingEnabled,Y=b.init(this.clippingPlanes,I,X),d=ie.get(P,m.length),d.init(),m.push(d),dt(P,X,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort($,Z),Y===!0&&b.beginShadows();const ne=h.state.shadowsArray;if(F.render(ne,P,X),Y===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(d,P),h.setupLights(p.physicallyCorrectLights),X.isArrayCamera){const Q=X.cameras;for(let ce=0,He=Q.length;ce<He;ce++){const Ge=Q[ce];An(d,P,Ge,Ge.viewport)}}else An(d,P,X);T!==null&&(Fe.updateMultisampleRenderTarget(T),Fe.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(p,P,X),Se.resetDefaultState(),_=-1,M=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function dt(P,X,ne,Q){if(P.visible===!1)return;if(P.layers.test(X.layers)){if(P.isGroup)ne=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(X);else if(P.isLight)h.pushLight(P),P.castShadow&&h.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||H.intersectsSprite(P)){Q&&pe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(oe);const Ge=ze.update(P),qe=P.material;qe.visible&&d.push(P,Ge,qe,ne,pe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==ke.render.frame&&(P.skeleton.update(),P.skeleton.frame=ke.render.frame),!P.frustumCulled||H.intersectsObject(P))){Q&&pe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(oe);const Ge=ze.update(P),qe=P.material;if(Array.isArray(qe)){const je=Ge.groups;for(let it=0,Je=je.length;it<Je;it++){const et=je[it],ut=qe[et.materialIndex];ut&&ut.visible&&d.push(P,Ge,ut,ne,pe.z,et)}}else qe.visible&&d.push(P,Ge,qe,ne,pe.z,null)}}const He=P.children;for(let Ge=0,qe=He.length;Ge<qe;Ge++)dt(He[Ge],X,ne,Q)}function An(P,X,ne,Q){const ce=P.opaque,He=P.transmissive,Ge=P.transparent;h.setupLightsView(ne),He.length>0&&ai(ce,X,ne),Q&&_e.viewport(A.copy(Q)),ce.length>0&&qt(ce,X,ne),He.length>0&&qt(He,X,ne),Ge.length>0&&qt(Ge,X,ne),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function ai(P,X,ne){const Q=me.isWebGL2;B===null&&(B=new Ci(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?Eo:ir,minFilter:Xa,samples:Q&&o===!0?4:0})),p.getDrawingBufferSize(re),Q?B.setSize(re.x,re.y):B.setSize(Sl(re.x),Sl(re.y));const ce=p.getRenderTarget();p.setRenderTarget(B),p.clear();const He=p.toneMapping;p.toneMapping=ei,qt(P,X,ne),p.toneMapping=He,Fe.updateMultisampleRenderTarget(B),Fe.updateRenderTargetMipmap(B),p.setRenderTarget(ce)}function qt(P,X,ne){const Q=X.isScene===!0?X.overrideMaterial:null;for(let ce=0,He=P.length;ce<He;ce++){const Ge=P[ce],qe=Ge.object,je=Ge.geometry,it=Q===null?Ge.material:Q,Je=Ge.group;qe.layers.test(ne.layers)&&G(qe,X,ne,je,it,Je)}}function G(P,X,ne,Q,ce,He){P.onBeforeRender(p,X,ne,Q,ce,He),P.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ce.onBeforeRender(p,X,ne,Q,P,He),ce.transparent===!0&&ce.side===Or?(ce.side=Cn,ce.needsUpdate=!0,p.renderBufferDirect(ne,X,Q,ce,P,He),ce.side=To,ce.needsUpdate=!0,p.renderBufferDirect(ne,X,Q,ce,P,He),ce.side=Or):p.renderBufferDirect(ne,X,Q,ce,P,He),P.onAfterRender(p,X,ne,Q,ce,He)}function ve(P,X,ne){X.isScene!==!0&&(X=Te);const Q=Oe.get(P),ce=h.state.lights,He=h.state.shadowsArray,Ge=ce.state.version,qe=Ie.getParameters(P,ce.state,He,X,ne),je=Ie.getProgramCacheKey(qe);let it=Q.programs;Q.environment=P.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(P.isMeshStandardMaterial?Ze:Xe).get(P.envMap||Q.environment),it===void 0&&(P.addEventListener("dispose",z),it=new Map,Q.programs=it);let Je=it.get(je);if(Je!==void 0){if(Q.currentProgram===Je&&Q.lightsStateVersion===Ge)return Ue(P,qe),Je}else qe.uniforms=Ie.getUniforms(P),P.onBuild(ne,qe,p),P.onBeforeCompile(qe,p),Je=Ie.acquireProgram(qe,je),it.set(je,Je),Q.uniforms=qe.uniforms;const et=Q.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(et.clippingPlanes=b.uniform),Ue(P,qe),Q.needsLights=_t(P),Q.lightsStateVersion=Ge,Q.needsLights&&(et.ambientLightColor.value=ce.state.ambient,et.lightProbe.value=ce.state.probe,et.directionalLights.value=ce.state.directional,et.directionalLightShadows.value=ce.state.directionalShadow,et.spotLights.value=ce.state.spot,et.spotLightShadows.value=ce.state.spotShadow,et.rectAreaLights.value=ce.state.rectArea,et.ltc_1.value=ce.state.rectAreaLTC1,et.ltc_2.value=ce.state.rectAreaLTC2,et.pointLights.value=ce.state.point,et.pointLightShadows.value=ce.state.pointShadow,et.hemisphereLights.value=ce.state.hemi,et.directionalShadowMap.value=ce.state.directionalShadowMap,et.directionalShadowMatrix.value=ce.state.directionalShadowMatrix,et.spotShadowMap.value=ce.state.spotShadowMap,et.spotShadowMatrix.value=ce.state.spotShadowMatrix,et.pointShadowMap.value=ce.state.pointShadowMap,et.pointShadowMatrix.value=ce.state.pointShadowMatrix);const ut=Je.getUniforms(),Wn=ya.seqWithValue(ut.seq,et);return Q.currentProgram=Je,Q.uniformsList=Wn,Je}function Ue(P,X){const ne=Oe.get(P);ne.outputEncoding=X.outputEncoding,ne.instancing=X.instancing,ne.skinning=X.skinning,ne.morphTargets=X.morphTargets,ne.morphNormals=X.morphNormals,ne.morphColors=X.morphColors,ne.morphTargetsCount=X.morphTargetsCount,ne.numClippingPlanes=X.numClippingPlanes,ne.numIntersection=X.numClipIntersection,ne.vertexAlphas=X.vertexAlphas,ne.vertexTangents=X.vertexTangents,ne.toneMapping=X.toneMapping}function pt(P,X,ne,Q,ce){X.isScene!==!0&&(X=Te),Fe.resetTextureUnits();const He=X.fog,Ge=Q.isMeshStandardMaterial?X.environment:null,qe=T===null?p.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:rr,je=(Q.isMeshStandardMaterial?Ze:Xe).get(Q.envMap||Ge),it=Q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Je=!!Q.normalMap&&!!ne.attributes.tangent,et=!!ne.morphAttributes.position,ut=!!ne.morphAttributes.normal,Wn=!!ne.morphAttributes.color,si=Q.toneMapped?p.toneMapping:ei,li=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,nn=li!==void 0?li.length:0,ot=Oe.get(Q),ci=h.state.lights;if(Y===!0&&(I===!0||P!==M)){const on=P===M&&Q.id===_;b.setState(Q,P,on)}let xt=!1;Q.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==ci.state.version||ot.outputEncoding!==qe||ce.isInstancedMesh&&ot.instancing===!1||!ce.isInstancedMesh&&ot.instancing===!0||ce.isSkinnedMesh&&ot.skinning===!1||!ce.isSkinnedMesh&&ot.skinning===!0||ot.envMap!==je||Q.fog===!0&&ot.fog!==He||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==b.numPlanes||ot.numIntersection!==b.numIntersection)||ot.vertexAlphas!==it||ot.vertexTangents!==Je||ot.morphTargets!==et||ot.morphNormals!==ut||ot.morphColors!==Wn||ot.toneMapping!==si||me.isWebGL2===!0&&ot.morphTargetsCount!==nn)&&(xt=!0):(xt=!0,ot.__version=Q.version);let rn=ot.currentProgram;xt===!0&&(rn=ve(Q,X,ce));let Pn=!1,Li=!1,to=!1;const Rt=rn.getUniforms(),Di=ot.uniforms;if(_e.useProgram(rn.program)&&(Pn=!0,Li=!0,to=!0),Q.id!==_&&(_=Q.id,Li=!0),Pn||M!==P){if(Rt.setValue(W,"projectionMatrix",P.projectionMatrix),me.logarithmicDepthBuffer&&Rt.setValue(W,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),M!==P&&(M=P,Li=!0,to=!0),Q.isShaderMaterial||Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshStandardMaterial||Q.envMap){const on=Rt.map.cameraPosition;on!==void 0&&on.setValue(W,pe.setFromMatrixPosition(P.matrixWorld))}(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Rt.setValue(W,"isOrthographic",P.isOrthographicCamera===!0),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial||Q.isShadowMaterial||ce.isSkinnedMesh)&&Rt.setValue(W,"viewMatrix",P.matrixWorldInverse)}if(ce.isSkinnedMesh){Rt.setOptional(W,ce,"bindMatrix"),Rt.setOptional(W,ce,"bindMatrixInverse");const on=ce.skeleton;on&&(me.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Rt.setValue(W,"boneTexture",on.boneTexture,Fe),Rt.setValue(W,"boneTextureSize",on.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const no=ne.morphAttributes;return(no.position!==void 0||no.normal!==void 0||no.color!==void 0&&me.isWebGL2===!0)&&ae.update(ce,ne,Q,rn),(Li||ot.receiveShadow!==ce.receiveShadow)&&(ot.receiveShadow=ce.receiveShadow,Rt.setValue(W,"receiveShadow",ce.receiveShadow)),Li&&(Rt.setValue(W,"toneMappingExposure",p.toneMappingExposure),ot.needsLights&&mt(Di,to),He&&Q.fog===!0&&Ce.refreshFogUniforms(Di,He),Ce.refreshMaterialUniforms(Di,Q,D,R,B),ya.upload(W,ot.uniformsList,Di,Fe)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ya.upload(W,ot.uniformsList,Di,Fe),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Rt.setValue(W,"center",ce.center),Rt.setValue(W,"modelViewMatrix",ce.modelViewMatrix),Rt.setValue(W,"normalMatrix",ce.normalMatrix),Rt.setValue(W,"modelMatrix",ce.matrixWorld),rn}function mt(P,X){P.ambientLightColor.needsUpdate=X,P.lightProbe.needsUpdate=X,P.directionalLights.needsUpdate=X,P.directionalLightShadows.needsUpdate=X,P.pointLights.needsUpdate=X,P.pointLightShadows.needsUpdate=X,P.spotLights.needsUpdate=X,P.spotLightShadows.needsUpdate=X,P.rectAreaLights.needsUpdate=X,P.hemisphereLights.needsUpdate=X}function _t(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,X,ne){Oe.get(P.texture).__webglTexture=X,Oe.get(P.depthTexture).__webglTexture=ne;const Q=Oe.get(P);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=ne===void 0,Q.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,X){const ne=Oe.get(P);ne.__webglFramebuffer=X,ne.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(P,X=0,ne=0){T=P,v=X,y=ne;let Q=!0;if(P){const je=Oe.get(P);je.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(36160,null),Q=!1):je.__webglFramebuffer===void 0?Fe.setupRenderTarget(P):je.__hasExternalTextures&&Fe.rebindTextures(P,Oe.get(P.texture).__webglTexture,Oe.get(P.depthTexture).__webglTexture)}let ce=null,He=!1,Ge=!1;if(P){const je=P.texture;(je.isData3DTexture||je.isDataArrayTexture)&&(Ge=!0);const it=Oe.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(ce=it[X],He=!0):me.isWebGL2&&P.samples>0&&Fe.useMultisampledRTT(P)===!1?ce=Oe.get(P).__webglMultisampledFramebuffer:ce=it,A.copy(P.viewport),w.copy(P.scissor),x=P.scissorTest}else A.copy(L).multiplyScalar(D).floor(),w.copy(N).multiplyScalar(D).floor(),x=O;if(_e.bindFramebuffer(36160,ce)&&me.drawBuffers&&Q&&_e.drawBuffers(P,ce),_e.viewport(A),_e.scissor(w),_e.setScissorTest(x),He){const je=Oe.get(P.texture);W.framebufferTexture2D(36160,36064,34069+X,je.__webglTexture,ne)}else if(Ge){const je=Oe.get(P.texture),it=X||0;W.framebufferTextureLayer(36160,36064,je.__webglTexture,ne||0,it)}_=-1},this.readRenderTargetPixels=function(P,X,ne,Q,ce,He,Ge){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Oe.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ge!==void 0&&(qe=qe[Ge]),qe){_e.bindFramebuffer(36160,qe);try{const je=P.texture,it=je.format,Je=je.type;if(it!==wn&&J.convert(it)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const et=Je===Eo&&(Le.has("EXT_color_buffer_half_float")||me.isWebGL2&&Le.has("EXT_color_buffer_float"));if(Je!==ir&&J.convert(Je)!==W.getParameter(35738)&&!(Je===Xi&&(me.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=P.width-Q&&ne>=0&&ne<=P.height-ce&&W.readPixels(X,ne,Q,ce,J.convert(it),J.convert(Je),He)}finally{const je=T!==null?Oe.get(T).__webglFramebuffer:null;_e.bindFramebuffer(36160,je)}}},this.copyFramebufferToTexture=function(P,X,ne=0){const Q=Math.pow(2,-ne),ce=Math.floor(X.image.width*Q),He=Math.floor(X.image.height*Q);Fe.setTexture2D(X,0),W.copyTexSubImage2D(3553,ne,0,0,P.x,P.y,ce,He),_e.unbindTexture()},this.copyTextureToTexture=function(P,X,ne,Q=0){const ce=X.image.width,He=X.image.height,Ge=J.convert(ne.format),qe=J.convert(ne.type);Fe.setTexture2D(ne,0),W.pixelStorei(37440,ne.flipY),W.pixelStorei(37441,ne.premultiplyAlpha),W.pixelStorei(3317,ne.unpackAlignment),X.isDataTexture?W.texSubImage2D(3553,Q,P.x,P.y,ce,He,Ge,qe,X.image.data):X.isCompressedTexture?W.compressedTexSubImage2D(3553,Q,P.x,P.y,X.mipmaps[0].width,X.mipmaps[0].height,Ge,X.mipmaps[0].data):W.texSubImage2D(3553,Q,P.x,P.y,Ge,qe,X.image),Q===0&&ne.generateMipmaps&&W.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(P,X,ne,Q,ce=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const He=P.max.x-P.min.x+1,Ge=P.max.y-P.min.y+1,qe=P.max.z-P.min.z+1,je=J.convert(Q.format),it=J.convert(Q.type);let Je;if(Q.isData3DTexture)Fe.setTexture3D(Q,0),Je=32879;else if(Q.isDataArrayTexture)Fe.setTexture2DArray(Q,0),Je=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,Q.flipY),W.pixelStorei(37441,Q.premultiplyAlpha),W.pixelStorei(3317,Q.unpackAlignment);const et=W.getParameter(3314),ut=W.getParameter(32878),Wn=W.getParameter(3316),si=W.getParameter(3315),li=W.getParameter(32877),nn=ne.isCompressedTexture?ne.mipmaps[0]:ne.image;W.pixelStorei(3314,nn.width),W.pixelStorei(32878,nn.height),W.pixelStorei(3316,P.min.x),W.pixelStorei(3315,P.min.y),W.pixelStorei(32877,P.min.z),ne.isDataTexture||ne.isData3DTexture?W.texSubImage3D(Je,ce,X.x,X.y,X.z,He,Ge,qe,je,it,nn.data):ne.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Je,ce,X.x,X.y,X.z,He,Ge,qe,je,nn.data)):W.texSubImage3D(Je,ce,X.x,X.y,X.z,He,Ge,qe,je,it,nn),W.pixelStorei(3314,et),W.pixelStorei(32878,ut),W.pixelStorei(3316,Wn),W.pixelStorei(3315,si),W.pixelStorei(32877,li),ce===0&&Q.generateMipmaps&&W.generateMipmap(Je),_e.unbindTexture()},this.initTexture=function(P){Fe.setTexture2D(P,0),_e.unbindTexture()},this.resetState=function(){v=0,y=0,T=null,_e.reset(),Se.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class p3 extends Af{}p3.prototype.isWebGL1Renderer=!0;class m3 extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class g3 extends Ft{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class Fo extends Ft{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new We(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bd=new j,_d=new j,yd=new Et,qs=new ff,ma=new Ya;class Cl extends Nt{constructor(e=new pn,t=new Fo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)bd.fromBufferAttribute(t,r-1),_d.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=bd.distanceTo(_d);e.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(r),ma.radius+=o,e.ray.intersectsSphere(ma)===!1)return;yd.copy(r).invert(),qs.copy(e.ray).applyMatrix4(yd);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new j,u=new j,d=new j,h=new j,m=this.isLineSegments?2:1,g=i.index,f=i.attributes.position;if(g!==null){const v=Math.max(0,s.start),y=Math.min(g.count,s.start+s.count);for(let T=v,_=y-1;T<_;T+=m){const M=g.getX(T),A=g.getX(T+1);if(c.fromBufferAttribute(f,M),u.fromBufferAttribute(f,A),qs.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(h);x<e.near||x>e.far||t.push({distance:x,point:d.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,s.start),y=Math.min(f.count,s.start+s.count);for(let T=v,_=y-1;T<_;T+=m){if(c.fromBufferAttribute(f,T),u.fromBufferAttribute(f,T+1),qs.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||t.push({distance:A,point:d.clone().applyMatrix4(this.matrixWorld),index:T,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}const wd=new j,Sd=new j;class v3 extends Cl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)wd.fromBufferAttribute(t,r),Sd.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+wd.distanceTo(Sd);e.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class x3 extends Ft{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new We(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}new j;class eo extends pn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const o=[],s=[];a(r),c(i),u(),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(o.slice(),3)),this.setAttribute("uv",new Ot(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const T=new j,_=new j,M=new j;for(let A=0;A<t.length;A+=3)m(t[A+0],T),m(t[A+1],_),m(t[A+2],M),l(T,_,M,y)}function l(y,T,_,M){const A=M+1,w=[];for(let x=0;x<=A;x++){w[x]=[];const S=y.clone().lerp(_,x/A),R=T.clone().lerp(_,x/A),D=A-x;for(let $=0;$<=D;$++)$===0&&x===A?w[x][$]=S:w[x][$]=S.clone().lerp(R,$/D)}for(let x=0;x<A;x++)for(let S=0;S<2*(A-x)-1;S++){const R=Math.floor(S/2);S%2===0?(h(w[x][R+1]),h(w[x+1][R]),h(w[x][R])):(h(w[x][R+1]),h(w[x+1][R+1]),h(w[x+1][R]))}}function c(y){const T=new j;for(let _=0;_<o.length;_+=3)T.x=o[_+0],T.y=o[_+1],T.z=o[_+2],T.normalize().multiplyScalar(y),o[_+0]=T.x,o[_+1]=T.y,o[_+2]=T.z}function u(){const y=new j;for(let T=0;T<o.length;T+=3){y.x=o[T+0],y.y=o[T+1],y.z=o[T+2];const _=f(y)/2/Math.PI+.5,M=v(y)/Math.PI+.5;s.push(_,1-M)}g(),d()}function d(){for(let y=0;y<s.length;y+=6){const T=s[y+0],_=s[y+2],M=s[y+4],A=Math.max(T,_,M),w=Math.min(T,_,M);A>.9&&w<.1&&(T<.2&&(s[y+0]+=1),_<.2&&(s[y+2]+=1),M<.2&&(s[y+4]+=1))}}function h(y){o.push(y.x,y.y,y.z)}function m(y,T){const _=y*3;T.x=e[_+0],T.y=e[_+1],T.z=e[_+2]}function g(){const y=new j,T=new j,_=new j,M=new j,A=new tt,w=new tt,x=new tt;for(let S=0,R=0;S<o.length;S+=9,R+=6){y.set(o[S+0],o[S+1],o[S+2]),T.set(o[S+3],o[S+4],o[S+5]),_.set(o[S+6],o[S+7],o[S+8]),A.set(s[R+0],s[R+1]),w.set(s[R+2],s[R+3]),x.set(s[R+4],s[R+5]),M.copy(y).add(T).add(_).divideScalar(3);const D=f(M);p(A,R+0,y,D),p(w,R+2,T,D),p(x,R+4,_,D)}}function p(y,T,_,M){M<0&&y.x===1&&(s[T]=y.x-1),_.x===0&&_.z===0&&(s[T]=M/2/Math.PI+.5)}function f(y){return Math.atan2(y.z,-y.x)}function v(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}static fromJSON(e){return new eo(e.vertices,e.indices,e.radius,e.details)}}class tc extends eo{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tc(e.radius,e.detail)}}new j;new j;new j;new In;class nc extends eo{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new nc(e.radius,e.detail)}}class ic extends eo{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ic(e.radius,e.detail)}}class rc extends eo{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rc(e.radius,e.detail)}}class b3 extends Ft{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new We(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class _3 extends ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class cr extends Ft{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new We(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class y3 extends cr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new We(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new We(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new We(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class w3 extends Ft{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new We(16777215),this.specular=new We(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class S3 extends Ft{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new We(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class M3 extends Ft{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class C3 extends Ft{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new We(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class T3 extends Ft{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new We(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kr,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class E3 extends Fo{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const A3={ShadowMaterial:b3,SpriteMaterial:g3,RawShaderMaterial:_3,ShaderMaterial:ii,PointsMaterial:x3,MeshPhysicalMaterial:y3,MeshStandardMaterial:cr,MeshPhongMaterial:w3,MeshToonMaterial:S3,MeshNormalMaterial:M3,MeshLambertMaterial:C3,MeshDepthMaterial:Tf,MeshDistanceMaterial:Ef,MeshBasicMaterial:Zl,MeshMatcapMaterial:T3,LineDashedMaterial:E3,LineBasicMaterial:Fo,Material:Ft};Ft.fromType=function(n){return new A3[n]};class P3 extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new We(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Md=new Et,Cd=new j,Td=new j;class R3{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jl,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cd),Td.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Td),t.updateMatrixWorld(),Md.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class L3 extends R3{constructor(){super(new _f(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class D3 extends P3{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DefaultUp),this.updateMatrix(),this.target=new Nt,this.shadow=new L3}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class I3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ed(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ed();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ed(){return(typeof performance=="undefined"?Date:performance).now()}const Pf="\\[\\]\\.:\\/",oc="[^"+Pf+"]",z3="[^"+Pf.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",oc);/(WCOD+)?/.source.replace("WCOD",z3);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oc);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oc);class F3 extends v3{constructor(e=10,t=10,i=4473924,r=8947848){i=new We(i),r=new We(r);const o=t/2,s=e/t,a=e/2,l=[],c=[];for(let h=0,m=0,g=-a;h<=t;h++,g+=s){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const p=h===o?i:r;p.toArray(c,m),m+=3,p.toArray(c,m),m+=3,p.toArray(c,m),m+=3,p.toArray(c,m),m+=3}const u=new pn;u.setAttribute("position",new Ot(l,3)),u.setAttribute("color",new Ot(c,3));const d=new Fo({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}}const Ad=new j,ga=new j,Pd=new j;class k3 extends Nt{constructor(e,t,i){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,t===void 0&&(t=1);let r=new pn;r.setAttribute("position",new Ot([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const o=new Fo({fog:!1,toneMapped:!1});this.lightPlane=new Cl(r,o),this.add(this.lightPlane),r=new pn,r.setAttribute("position",new Ot([0,0,0,0,0,1],3)),this.targetLine=new Cl(r,o),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){Ad.setFromMatrixPosition(this.light.matrixWorld),ga.setFromMatrixPosition(this.light.target.matrixWorld),Pd.subVectors(ga,Ad),this.lightPlane.lookAt(ga),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ga),this.targetLine.scale.z=Pd.length()}}const Rn=new Uint32Array(512),Ln=new Uint32Array(512);for(let n=0;n<256;++n){const e=n-127;e<-27?(Rn[n]=0,Rn[n|256]=32768,Ln[n]=24,Ln[n|256]=24):e<-14?(Rn[n]=1024>>-e-14,Rn[n|256]=1024>>-e-14|32768,Ln[n]=-e-1,Ln[n|256]=-e-1):e<=15?(Rn[n]=e+15<<10,Rn[n|256]=e+15<<10|32768,Ln[n]=13,Ln[n|256]=13):e<128?(Rn[n]=31744,Rn[n|256]=64512,Ln[n]=24,Ln[n|256]=24):(Rn[n]=31744,Rn[n|256]=64512,Ln[n]=13,Ln[n|256]=13)}const Rf=new Uint32Array(2048),ko=new Uint32Array(64),B3=new Uint32Array(64);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Rf[n]=e|t}for(let n=1024;n<2048;++n)Rf[n]=939524096+(n-1024<<13);for(let n=1;n<31;++n)ko[n]=n<<23;ko[31]=1199570944;ko[32]=2147483648;for(let n=33;n<63;++n)ko[n]=2147483648+(n-32<<23);ko[63]=3347054592;for(let n=1;n<64;++n)n!==32&&(B3[n]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kl);class O3 extends cn{constructor(){super(...arguments);yt(this,"enableAnimation",!1);yt(this,"radiansPerSecond",Math.PI/4);yt(this,"angle",0);yt(this,"radius",20)}tick(t){!this.enableAnimation||(this.position.x=Math.sin(this.angle)*this.radius,this.position.z=Math.cos(this.angle)*this.radius,this.rotation.y+=this.radiansPerSecond*t,this.angle+=t*this.radiansPerSecond)}}class N3 extends D3{constructor(){super(...arguments);yt(this,"radius",1)}tick(t){console.log("tick directional light",t)}}class Bo extends Jn{constructor(){super(...arguments);yt(this,"radiansPerSecond",Math.PI/8);yt(this,"enableAnimation",!0)}tick(t){!this.enableAnimation||(this.rotation.z+=this.radiansPerSecond*t,this.rotation.x+=this.radiansPerSecond*t,this.rotation.y+=this.radiansPerSecond*t)}}function $3(n,e={aspect:1,fov:35,near:.1,far:100},t={x:0,y:0,z:10}){const{clientWidth:i,clientHeight:r}=n,{x:o,y:s,z:a}=t,{far:l,fov:c,near:u}=e;let{aspect:d}=e;d=i/r;const h=new O3(c,d,l,u);return h.position.set(o,s,a),h}function U3(n="white",e=8,t={x:0,y:-10,z:10}){const{x:i,y:r,z:o}=t,s=new N3(n,e);return s.position.set(i,r,o),s}function H3(n,e=1){return new k3(n,e)}function V3(n="aqua"){const e=new m3;return e.background=new We(n),e}class W3{constructor(e,t,i){yt(this,"camera");yt(this,"clock");yt(this,"scene");yt(this,"renderer");yt(this,"updatables");this.camera=e,this.clock=new I3,this.scene=t,this.renderer=i,this.updatables=[]}start(){this.renderer.setAnimationLoop(()=>{this.tick(),this.renderer.render(this.scene,this.camera)})}stop(){this.renderer.setAnimationLoop(null)}tick(){const e=this.clock.getDelta();this.updatables.forEach(t=>{t.tick(e)})}}function G3(n){const e=new Af({antialias:!0});return e.setSize(n.clientWidth,n.clientHeight),e.setPixelRatio(window.devicePixelRatio),e.physicallyCorrectLights=!0,e}class j3{constructor(e,t,i){yt(this,"setSize",(e,t,i)=>{const{clientWidth:r,clientHeight:o}=e;t.aspect=r/o,t.updateProjectionMatrix(),i.setSize(r,o),i.setPixelRatio(window.devicePixelRatio)});this.setSize(e,t,i),window.addEventListener("resize",()=>{this.setSize(e,t,i),this.onResize()})}onResize(){}}function q3(n=40,e=2){return new F3(n,e)}class X3{constructor(e){yt(this,"camera");yt(this,"scene");yt(this,"renderer");yt(this,"container");yt(this,"loop");yt(this,"resizer");if(e===null)throw new Error("ProvidedContainerIsNull");this.container=e,this.camera=$3(e,void 0,{x:0,y:0,z:30}),this.scene=V3("turquoise");const t=U3(void 0,8,{x:0,y:5,z:0});this.scene.add(t),this.renderer=G3(e),this.loop=new W3(this.camera,this.scene,this.renderer),this.container.append(this.renderer.domElement),this.resizer=new j3(e,this.camera,this.renderer),this.loop.updatables.push(this.camera);const i=H3(t,1);this.scene.add(q3()),this.scene.add(i),this.renderer.render(this.scene,this.camera)}addShapes(e){e.forEach(t=>{this.scene.add(t),this.loop.updatables.push(t)})}deleteShapes(e){return console.log("Trying to clear scene..."),e.forEach(t=>{t.removeFromParent()}),!0}render(){this.renderer.render(this.scene,this.camera)}destroy(){this.renderer.dispose()}start(){this.loop.start()}stop(){this.loop.stop()}}function Y3(n=2,e={x:0,y:-.5,z:0}){const{x:t,y:i,z:r}=e,o=new Jr(n,n,n),s=new cr,a=new Bo(o,s);return a.name="cube",a.rotation.set(-.5,-.1,.8),a.position.set(t,i,r),a}function K3(n={radius:1,detail:0},e={x:0,y:0,z:0}){const{radius:t,detail:i}=n,{x:r,y:o,z:s}=e,a=new tc(t,i),l=new cr({color:new We(3089428)}),c=new Bo(a,l);return c.name="dodecahedron",c.position.set(r,o,s),c}function Z3(n={radius:1,detail:0},e={x:0,y:0,z:0}){const{radius:t,detail:i}=n,{x:r,y:o,z:s}=e,a=new nc(t,i),l=new cr,c=new Bo(a,l);return c.name="icosahedron",c.position.set(r,o,s),c}function J3(n={radius:1,detail:0},e={x:0,y:0,z:0}){const{radius:t,detail:i}=n,{x:r,y:o,z:s}=e,a=new ic(t,i),l=new cr,c=new Bo(a,l);return c.name="octahedron",c.position.set(r,o,s),c}function Q3(n={radius:1,detail:0},e={x:0,y:0,z:0}){const{radius:t,detail:i}=n,{x:r,y:o,z:s}=e,a=new rc(t,i),l=new cr,c=new Bo(a,l);return c.name="tetrahedron",c.position.set(r,o,s),c}function eE(){const n=[];return n.push(Y3(void 0,{x:1,y:-1,z:-1.3})),n.push(Q3(void 0,{x:-3,y:-2,z:-4})),n.push(Z3(void 0,{x:-2.2,y:2,z:0})),n.push(K3(void 0,{x:-3,y:0,z:-2})),n.push(J3(void 0,{x:3,y:2,z:-3})),n}const ac=rp("world",()=>{let n;const e=se(!1),t=se([]),i=se([]),r=se([]);function o(){return r.value}function s(){return n}function a(d){n=d,i.value.push(n.camera),r.value.push(n.scene)}function l(){n==null||n.start(),e.value=!0}function c(){n==null||n.stop(),e.value=!1}function u(){const d=eE();d.forEach(h=>{t.value.push(h)}),n==null||n.addShapes(d)}return{addDefaultShapes:u,camera:i,getScene:o,getWorld:s,isRendering:e,scene:r,setWorld:a,shapes:t,startWorld:l,stopWorld:c}});const tE={id:"canvas"},nE=Be({name:"PlatonicScene",setup(n){const e=ac();let t,i;return en(()=>{if(i=document.getElementById("canvas"),!i)throw new Error("ContainerIsNull");t=new X3(i),e.setWorld(t),e.startWorld(),e.addDefaultShapes()}),tn(()=>{t.destroy()}),(r,o)=>(Kt(),Mn("div",tE))}});const Lf=n=>(Ia("data-v-4890c097"),n=n(),za(),n),iE=Lf(()=>dn("h2",null,"Shape Controls",-1)),rE={class:"shape-controls"},oE=Lf(()=>dn("span",{style:{"margin-left":"16px"}}," Shape Animation ",-1)),aE=hn(" Delete Shape "),sE=Be({name:"ShapeControls",props:{shapes:null},setup(n){const e=n,t=se(e),i=se({uuid:""});function r(s){t.value.shapes[s].removeFromParent(),t.value.shapes.splice(s,1),i.value.uuid="Deleted!"}function o(s,a){const l=new We(a);s.material.color.setHex(l.getHex())}return(s,a)=>(Kt(),Mn(Tn,null,[iE,dn("div",rE,[ft(lt(Co),{vertical:""},{default:Zt(()=>[ft(lt(Jw),{value:i.value.uuid,"onUpdate:value":a[0]||(a[0]=l=>i.value.uuid=l),options:t.value.shapes,"label-field":"name","value-field":"uuid",size:"large"},null,8,["value","options"])]),_:1}),(Kt(!0),Mn(Tn,null,Al(t.value.shapes,(l,c)=>(Kt(),Mn("div",{key:l.uuid},[l.uuid===i.value.uuid?(Kt(),Bd(lt(Co),{key:0,class:"options",vertical:""},{default:Zt(()=>[dn("span",null,"Shape Position X: "+yi(l.position.x),1),ft(lt(zr),{value:l.position.x,"onUpdate:value":u=>l.position.x=u,"default-value":e.shapes[c].position.x,step:.1,min:-20,max:20},null,8,["value","onUpdate:value","default-value","step"]),hn(" Position Y: "+yi(l.position.y)+" ",1),ft(lt(zr),{value:l.position.y,"onUpdate:value":u=>l.position.y=u,"default-value":e.shapes[c].position.y,step:.1,min:-20,max:20},null,8,["value","onUpdate:value","default-value","step"]),hn(" Position Z: "+yi(l.position.z)+" ",1),ft(lt(zr),{value:l.position.z,"onUpdate:value":u=>l.position.z=u,"default-value":e.shapes[c].position.z,step:.1,min:-20,max:20},null,8,["value","onUpdate:value","default-value","step"]),dn("div",null,[ft(lt(xS),{value:l.enableAnimation,"onUpdate:value":u=>l.enableAnimation=u},null,8,["value","onUpdate:value"]),oE]),ft(lt(jw),{value:"#"+l.material.color.getHexString().toUpperCase(),modes:["hex"],"show-alpha":!1,"onUpdate:value":u=>{o(l,u)}},null,8,["value","onUpdate:value"]),ft(lt(Ji),{color:"red",class:"button",onClick:u=>r(c)},{default:Zt(()=>[aE]),_:2},1032,["onClick"])]),_:2},1024)):op("",!0)]))),128))])],64))}});var lE=Ro(sE,[["__scopeId","data-v-4890c097"]]);const cE=n=>(Ia("data-v-cfea434c"),n=n(),za(),n),uE=cE(()=>dn("h2",null,"Render Controls",-1)),dE={class:"render-controls"},hE=hn("Start Rendering"),fE=hn("Stop Rendering"),pE=Be({name:"RenderControls",setup(n){const e=ac();function t(){e.startWorld()}function i(){e.stopWorld()}return(r,o)=>(Kt(),Mn(Tn,null,[uE,dn("div",dE,[ft(lt(Co),{vertical:"",justify:"center"},{default:Zt(()=>[ft(lt(Ji),{disabled:lt(e).isRendering,type:"primary",onClick:o[0]||(o[0]=s=>t())},{default:Zt(()=>[hE]),_:1},8,["disabled"]),ft(lt(Ji),{disabled:!lt(e).isRendering,type:"tertiary",onClick:o[1]||(o[1]=s=>i())},{default:Zt(()=>[fE]),_:1},8,["disabled"])]),_:1})])],64))}});var mE=Ro(pE,[["__scopeId","data-v-cfea434c"]]);const gE=n=>(Ia("data-v-77b2480d"),n=n(),za(),n),vE={class:"scene-controls"},xE=gE(()=>dn("h2",null,"Scene Controls",-1)),bE=Be({name:"SceneControls",props:{scene:null},setup(n){const t=se(n);return(i,r)=>(Kt(),Mn("div",vE,[xE,(Kt(!0),Mn(Tn,null,Al(t.value.scene,(o,s)=>(Kt(),Mn("div",{key:o.uuid},[ft(lt(Co),{vertical:""},{default:Zt(()=>[dn("span",null," Index: "+yi(s),1),dn("span",null," Background: "+yi(o.background),1)]),_:2},1024)]))),128))]))}});var _E=Ro(bE,[["__scopeId","data-v-77b2480d"]]);const yE=Be({name:"PlatonicView",setup(n){const e=ac();return(t,i)=>(Kt(),Bd(lt(ap),{class:"grid",cols:24},{default:Zt(()=>[ft(lt(Za),{span:4,class:"output"},{default:Zt(()=>[ft(MS,{camera:lt(e).camera},null,8,["camera"]),ft(_E,{scene:lt(e).scene},null,8,["scene"])]),_:1}),ft(lt(Za),{class:"tv",span:16},{default:Zt(()=>[ft(nE)]),_:1}),ft(lt(Za),{span:4},{default:Zt(()=>[ft(mE),ft(lE,{shapes:lt(e).shapes},null,8,["shapes"])]),_:1})]),_:1}))}});var CE=Ro(yE,[["__scopeId","data-v-73082cfc"]]);export{CE as default};
