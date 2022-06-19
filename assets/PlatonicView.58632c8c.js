var bp=Object.defineProperty;var _p=(n,e,t)=>e in n?bp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var yt=(n,e,t)=>(_p(n,typeof e!="symbol"?e+"":e,t),t);import{c as nn,f as oh,i as yp,C as ah,F as ri,r as oe,a as nl,w as Mt,o as Wt,b as Gt,d as wp,e as ue,g as An,u as fn,h as pt,j as Be,p as $t,k as ka,l as sh,m as ni,t as nt,n as T,T as Sp,q as pn,s as lh,v as ch,x as qt,y as ji,z as Oa,V as wo,A as Mp,B as Cc,D as Lo,E as Yr,G as Nn,H as Tn,I as Cp,J as rn,K as ya,L as Ca,M as Tp,N as Ep,O as Ap,P as Pp,Q as Rp,R as Lp,S as st,U as en,W as mn,X as Bl,Y as kl,Z as Ol,_ as ut,$ as gn,a0 as Ei,a1 as zr,a2 as Dp,a3 as Ip,a4 as zp,a5 as Fp,a6 as Bp}from"./index.ebd1aed8.js";function Ta(n,e){let{target:t}=n;for(;t;){if(t.dataset&&t.dataset[e]!==void 0)return!0;t=t.parentElement}return!1}var Tc={black:"#000",silver:"#C0C0C0",gray:"#808080",white:"#FFF",maroon:"#800000",red:"#F00",purple:"#800080",fuchsia:"#F0F",green:"#008000",lime:"#0F0",olive:"#808000",yellow:"#FF0",navy:"#000080",blue:"#00F",teal:"#008080",aqua:"#0FF",transparent:"#0000"};function dh(n,e,t){e/=100,t/=100;const i=e*Math.min(t,1-t)+t;return[n,i?(2-2*t/i)*100:0,i*100]}function wa(n,e,t){e/=100,t/=100;const i=t-t*e/2,r=Math.min(i,1-i);return[n,r?(t-i)/r*100:0,i*100]}function _i(n,e,t){e/=100,t/=100;let i=(r,o=(r+n/60)%6)=>t-t*e*Math.max(Math.min(o,4-o,1),0);return[i(5)*255,i(3)*255,i(1)*255]}function il(n,e,t){n/=255,e/=255,t/=255;let i=Math.max(n,e,t),r=i-Math.min(n,e,t),o=r&&(i==n?(e-t)/r:i==e?2+(t-n)/r:4+(n-e)/r);return[60*(o<0?o+6:o),i&&r/i*100,i*100]}function rl(n,e,t){n/=255,e/=255,t/=255;let i=Math.max(n,e,t),r=i-Math.min(n,e,t),o=1-Math.abs(i+i-r-1),s=r&&(i==n?(e-t)/r:i==e?2+(t-n)/r:4+(n-e)/r);return[60*(s<0?s+6:s),o?r/o*100:0,(i+i-r)*50]}function ol(n,e,t){e/=100,t/=100;let i=e*Math.min(t,1-t),r=(o,s=(o+n/30)%12)=>t-i*Math.max(Math.min(s-3,9-s,1),-1);return[r(0)*255,r(8)*255,r(4)*255]}const Un="^\\s*",Hn="\\s*$",Ai="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))%\\s*",tn="\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*",qi="([0-9A-Fa-f])",Xi="([0-9A-Fa-f]{2})",kp=new RegExp(`${Un}hsl\\s*\\(${tn},${Ai},${Ai}\\)${Hn}`),Op=new RegExp(`${Un}hsv\\s*\\(${tn},${Ai},${Ai}\\)${Hn}`),Np=new RegExp(`${Un}hsla\\s*\\(${tn},${Ai},${Ai},${tn}\\)${Hn}`),$p=new RegExp(`${Un}hsva\\s*\\(${tn},${Ai},${Ai},${tn}\\)${Hn}`),Up=new RegExp(`${Un}rgb\\s*\\(${tn},${tn},${tn}\\)${Hn}`),Hp=new RegExp(`${Un}rgba\\s*\\(${tn},${tn},${tn},${tn}\\)${Hn}`),Nl=new RegExp(`${Un}#${qi}${qi}${qi}${Hn}`),$l=new RegExp(`${Un}#${Xi}${Xi}${Xi}${Hn}`),Ul=new RegExp(`${Un}#${qi}${qi}${qi}${qi}${Hn}`),Hl=new RegExp(`${Un}#${Xi}${Xi}${Xi}${Xi}${Hn}`);function jt(n){return parseInt(n,16)}function Fr(n){try{let e;if(e=Np.exec(n))return[$n(e[1]),Ct(e[5]),Ct(e[9]),ei(e[13])];if(e=kp.exec(n))return[$n(e[1]),Ct(e[5]),Ct(e[9]),1];throw new Error(`[seemly/hsla]: Invalid color value ${n}.`)}catch(e){throw e}}function Ji(n){try{let e;if(e=$p.exec(n))return[$n(e[1]),Ct(e[5]),Ct(e[9]),ei(e[13])];if(e=Op.exec(n))return[$n(e[1]),Ct(e[5]),Ct(e[9]),1];throw new Error(`[seemly/hsva]: Invalid color value ${n}.`)}catch(e){throw e}}function It(n){try{let e;if(e=$l.exec(n))return[jt(e[1]),jt(e[2]),jt(e[3]),1];if(e=Up.exec(n))return[bt(e[1]),bt(e[5]),bt(e[9]),1];if(e=Hp.exec(n))return[bt(e[1]),bt(e[5]),bt(e[9]),ei(e[13])];if(e=Nl.exec(n))return[jt(e[1]+e[1]),jt(e[2]+e[2]),jt(e[3]+e[3]),1];if(e=Hl.exec(n))return[jt(e[1]),jt(e[2]),jt(e[3]),ei(jt(e[4])/255)];if(e=Ul.exec(n))return[jt(e[1]+e[1]),jt(e[2]+e[2]),jt(e[3]+e[3]),ei(jt(e[4]+e[4])/255)];if(n in Tc)return It(Tc[n]);throw new Error(`[seemly/rgba]: Invalid color value ${n}.`)}catch(e){throw e}}function Vp(n){return n>1?1:n<0?0:n}function Wp(n,e,t){return`rgb(${bt(n)}, ${bt(e)}, ${bt(t)})`}function al(n,e,t,i){return`rgba(${bt(n)}, ${bt(e)}, ${bt(t)}, ${Vp(i)})`}function rs(n,e,t,i,r){return bt((n*e*(1-i)+t*i)/r)}function Vl(n,e){Array.isArray(n)||(n=It(n)),Array.isArray(e)||(e=It(e));const t=n[3],i=e[3],r=ei(t+i-t*i);return al(rs(n[0],t,e[0],i,r),rs(n[1],t,e[1],i,r),rs(n[2],t,e[2],i,r),r)}function Ke(n,e){const[t,i,r,o=1]=Array.isArray(n)?n:It(n);return e.alpha?al(t,i,r,e.alpha):al(t,i,r,o)}function Ho(n,e){const[t,i,r,o=1]=Array.isArray(n)?n:It(n),{lightness:s=1,alpha:a=1}=e;return Bn([t*s,i*s,r*s,o*a])}function ei(n){const e=Math.round(Number(n)*100)/100;return e>1?1:e<0?0:e}function $n(n){const e=Math.round(Number(n));return e>=360||e<0?0:e}function bt(n){const e=Math.round(Number(n));return e>255?255:e<0?0:e}function Ct(n){const e=Math.round(Number(n));return e>100?100:e<0?0:e}function sl(n){const[e,t,i]=Array.isArray(n)?n:It(n);return Wp(e,t,i)}function Bn(n){const[e,t,i]=n;return 3 in n?`rgba(${bt(e)}, ${bt(t)}, ${bt(i)}, ${ei(n[3])})`:`rgba(${bt(e)}, ${bt(t)}, ${bt(i)}, 1)`}function ll(n){return`hsv(${$n(n[0])}, ${Ct(n[1])}%, ${Ct(n[2])}%)`}function Qi(n){const[e,t,i]=n;return 3 in n?`hsva(${$n(e)}, ${Ct(t)}%, ${Ct(i)}%, ${ei(n[3])})`:`hsva(${$n(e)}, ${Ct(t)}%, ${Ct(i)}%, 1)`}function cl(n){return`hsl(${$n(n[0])}, ${Ct(n[1])}%, ${Ct(n[2])}%)`}function wi(n){const[e,t,i]=n;return 3 in n?`hsla(${$n(e)}, ${Ct(t)}%, ${Ct(i)}%, ${ei(n[3])})`:`hsla(${$n(e)}, ${Ct(t)}%, ${Ct(i)}%, 1)`}function Si(n){if(typeof n=="string"){let i;if(i=$l.exec(n))return`${i[0]}FF`;if(i=Hl.exec(n))return i[0];if(i=Nl.exec(n))return`#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}FF`;if(i=Ul.exec(n))return`#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}${i[4]}${i[4]}`;throw new Error(`[seemly/toHexString]: Invalid hex value ${n}.`)}const e=`#${n.slice(0,3).map(i=>bt(i).toString(16).toUpperCase().padStart(2,"0")).join("")}`,t=n.length===3?"FF":bt(n[3]*255).toString(16).padStart(2,"0").toUpperCase();return e+t}function xo(n){if(typeof n=="string"){let e;if(e=$l.exec(n))return e[0];if(e=Hl.exec(n))return e[0].slice(0,7);if(e=Nl.exec(n)||Ul.exec(n))return`#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`;throw new Error(`[seemly/toHexString]: Invalid hex value ${n}.`)}return`#${n.slice(0,3).map(e=>bt(e).toString(16).toUpperCase().padStart(2,"0")).join("")}`}function Gp(n=8){return Math.random().toString(16).slice(2,2+n)}function jp(n,e=[],t){const i={};return e.forEach(r=>{i[r]=n[r]}),Object.assign(i,t)}function qe(n,...e){if(Array.isArray(n))n.forEach(t=>qe(t,...e));else return n(...e)}const Dr=(n,...e)=>typeof n=="function"?n(...e):typeof n=="string"?nn(n):typeof n=="number"?nn(String(n)):null;function dl(n,e){console.error(`[naive/${n}]: ${e}`)}function uh(n,e){throw new Error(`[naive/${n}]: ${e}`)}function qp(n){switch(typeof n){case"string":return n||void 0;case"number":return String(n);default:return}}function Ec(n,e="default",t=void 0){const i=n[e];if(!i)return dl("getFirstSlotVNode",`slot[${e}] is empty`),null;const r=oh(i(t));return r.length===1?r[0]:(dl("getFirstSlotVNode",`slot[${e}] should have exactly one child`),null)}function Do(n){return n.some(e=>yp(e)?!(e.type===ah||e.type===ri&&!Do(e.children)):!0)?n:null}function Br(n,e){return n&&Do(n())||e()}function Xp(n,e,t){return n&&Do(n(e))||t(e)}function Dt(n,e){const t=n&&Do(n());return e(t||null)}function bo(n){return!(n&&Do(n()))}const Yp=/^(\d|\.)+$/,Ac=/(\d|\.)+/;function kr(n,{c:e=1,offset:t=0,attachPx:i=!0}={}){if(typeof n=="number"){const r=(n+t)*e;return r===0?"0":`${r}px`}else if(typeof n=="string")if(Yp.test(n)){const r=(Number(n)+t)*e;return i?r===0?"0":`${r}px`:`${r}`}else{const r=Ac.exec(n);return r?n.replace(Ac,String((Number(r[0])+t)*e)):n}return n}function Ea(n){return n.replace(/#|\(|\)|,|\s/g,"_")}function Kp(n){let e=0;for(let t=0;t<n.length;++t)n[t]==="&"&&++e;return e}const hh=/\s*,(?![^(]*\))\s*/g,Zp=/\s+/g;function Jp(n,e){const t=[];return e.split(hh).forEach(i=>{let r=Kp(i);if(r){if(r===1){n.forEach(s=>{t.push(i.replace("&",s))});return}}else{n.forEach(s=>{t.push((s&&s+" ")+i)});return}let o=[i];for(;r--;){const s=[];o.forEach(a=>{n.forEach(l=>{s.push(a.replace("&",l))})}),o=s}o.forEach(s=>t.push(s))}),t}function Qp(n,e){const t=[];return e.split(hh).forEach(i=>{n.forEach(r=>{t.push((r&&r+" ")+i)})}),t}function em(n){let e=[""];return n.forEach(t=>{t=t&&t.trim(),t&&(t.includes("&")?e=Jp(e,t):e=Qp(e,t))}),e.join(", ").replace(Zp," ")}function Pc(n){if(!n)return;const e=n.parentElement;e&&e.removeChild(n)}function Na(n){return document.querySelector(`style[cssr-id="${n}"]`)}function tm(n){const e=document.createElement("style");return e.setAttribute("cssr-id",n),e}function Vo(n){return n?/^\s*@(s|m)/.test(n):!1}const nm=/[A-Z]/g;function fh(n){return n.replace(nm,e=>"-"+e.toLowerCase())}function im(n,e="  "){return typeof n=="object"&&n!==null?` {
`+Object.entries(n).map(t=>e+`  ${fh(t[0])}: ${t[1]};`).join(`
`)+`
`+e+"}":`: ${n};`}function rm(n,e,t){return typeof n=="function"?n({context:e.context,props:t}):n}function Rc(n,e,t,i){if(!e)return"";const r=rm(e,t,i);if(!r)return"";if(typeof r=="string")return`${n} {
${r}
}`;const o=Object.keys(r);if(o.length===0)return t.config.keepEmptyBlock?n+` {
}`:"";const s=n?[n+" {"]:[];return o.forEach(a=>{const l=r[a];if(a==="raw"){s.push(`
`+l+`
`);return}a=fh(a),l!=null&&s.push(`  ${a}${im(l)}`)}),n&&s.push("}"),s.join(`
`)}function ul(n,e,t){!n||n.forEach(i=>{if(Array.isArray(i))ul(i,e,t);else if(typeof i=="function"){const r=i(e);Array.isArray(r)?ul(r,e,t):r&&t(r)}else i&&t(i)})}function ph(n,e,t,i,r,o){const s=n.$;let a="";if(!s||typeof s=="string")Vo(s)?a=s:e.push(s);else if(typeof s=="function"){const d=s({context:i.context,props:r});Vo(d)?a=d:e.push(d)}else if(s.before&&s.before(i.context),!s.$||typeof s.$=="string")Vo(s.$)?a=s.$:e.push(s.$);else if(s.$){const d=s.$({context:i.context,props:r});Vo(d)?a=d:e.push(d)}const l=em(e),c=Rc(l,n.props,i,r);a?(t.push(`${a} {`),o&&c&&o.insertRule(`${a} {
${c}
}
`)):(o&&c&&o.insertRule(c),!o&&c.length&&t.push(c)),n.children&&ul(n.children,{context:i.context,props:r},d=>{if(typeof d=="string"){const u=Rc(l,{raw:d},i,r);o?o.insertRule(u):t.push(u)}else ph(d,e,t,i,r,o)}),e.pop(),a&&t.push("}"),s&&s.after&&s.after(i.context)}function mh(n,e,t,i=!1){const r=[];return ph(n,[],r,e,t,i?n.instance.__styleSheet:void 0),i?"":r.join(`

`)}function hl(n){for(var e=0,t,i=0,r=n.length;r>=4;++i,r-=4)t=n.charCodeAt(i)&255|(n.charCodeAt(++i)&255)<<8|(n.charCodeAt(++i)&255)<<16|(n.charCodeAt(++i)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,e=(t&65535)*1540483477+((t>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(n.charCodeAt(i+2)&255)<<16;case 2:e^=(n.charCodeAt(i+1)&255)<<8;case 1:e^=n.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}typeof window!="undefined"&&(window.__cssrContext={});function om(n,e,t){const{els:i}=e;if(t===void 0)i.forEach(Pc),e.els=[];else{const r=Na(t);r&&i.includes(r)&&(Pc(r),e.els=i.filter(o=>o!==r))}}function Lc(n,e){n.push(e)}function am(n,e,t,i,r,o,s,a,l){if(o&&!l){if(t===void 0){console.error("[css-render/mount]: `id` is required in `silent` mode.");return}const h=window.__cssrContext;h[t]||(h[t]=!0,mh(e,n,i,o));return}let c;if(t===void 0&&(c=e.render(i),t=hl(c)),l){l.adapter(t,c!=null?c:e.render(i));return}const d=Na(t);if(d!==null&&!s)return d;const u=d!=null?d:tm(t);if(c===void 0&&(c=e.render(i)),u.textContent=c,d!==null)return d;if(a){const h=document.head.querySelector(`meta[name="${a}"]`);if(h)return document.head.insertBefore(u,h),Lc(e.els,u),u}return r?document.head.insertBefore(u,document.head.querySelector("style, link")):document.head.appendChild(u),Lc(e.els,u),u}function sm(n){return mh(this,this.instance,n)}function lm(n={}){const{id:e,ssr:t,props:i,head:r=!1,silent:o=!1,force:s=!1,anchorMetaName:a}=n;return am(this.instance,this,e,i,r,o,s,a,t)}function cm(n={}){const{id:e}=n;om(this.instance,this,e)}const Wo=function(n,e,t,i){return{instance:n,$:e,props:t,children:i,els:[],render:sm,mount:lm,unmount:cm}},dm=function(n,e,t,i){return Array.isArray(e)?Wo(n,{$:null},null,e):Array.isArray(t)?Wo(n,e,null,t):Array.isArray(i)?Wo(n,e,t,i):Wo(n,e,t,null)};function gh(n={}){let e=null;const t={c:(...i)=>dm(t,...i),use:(i,...r)=>i.install(t,...r),find:Na,context:{},config:n,get __styleSheet(){if(!e){const i=document.createElement("style");return document.head.appendChild(i),e=document.styleSheets[document.styleSheets.length-1],e}return e}};return t}function um(n,e){if(n===void 0)return!1;if(e){const{context:{ids:t}}=e;return t.has(n)}return Na(n)!==null}function hm(n){let e=".",t="__",i="--",r;if(n){let m=n.blockPrefix;m&&(e=m),m=n.elementPrefix,m&&(t=m),m=n.modifierPrefix,m&&(i=m)}const o={install(m){r=m.c;const p=m.context;p.bem={},p.bem.b=null,p.bem.els=null}};function s(m){let p,f;return{before(v){p=v.bem.b,f=v.bem.els,v.bem.els=null},after(v){v.bem.b=p,v.bem.els=f},$({context:v,props:y}){return m=typeof m=="string"?m:m({context:v,props:y}),v.bem.b=m,`${(y==null?void 0:y.bPrefix)||e}${v.bem.b}`}}}function a(m){let p;return{before(f){p=f.bem.els},after(f){f.bem.els=p},$({context:f,props:v}){return m=typeof m=="string"?m:m({context:f,props:v}),f.bem.els=m.split(",").map(y=>y.trim()),f.bem.els.map(y=>`${(v==null?void 0:v.bPrefix)||e}${f.bem.b}${t}${y}`).join(", ")}}}function l(m){return{$({context:p,props:f}){m=typeof m=="string"?m:m({context:p,props:f});const v=m.split(",").map(_=>_.trim());function y(_){return v.map(M=>`&${(f==null?void 0:f.bPrefix)||e}${p.bem.b}${_!==void 0?`${t}${_}`:""}${i}${M}`).join(", ")}const E=p.bem.els;return E!==null?y(E[0]):y()}}}function c(m){return{$({context:p,props:f}){m=typeof m=="string"?m:m({context:p,props:f});const v=p.bem.els;return`&:not(${(f==null?void 0:f.bPrefix)||e}${p.bem.b}${v!==null&&v.length>0?`${t}${v[0]}`:""}${i}${m})`}}}return Object.assign(o,{cB:(...m)=>r(s(m[0]),m[1],m[2]),cE:(...m)=>r(a(m[0]),m[1],m[2]),cM:(...m)=>r(l(m[0]),m[1],m[2]),cNotM:(...m)=>r(c(m[0]),m[1],m[2])}),o}function Re(n,e){return n+(e==="default"?"":e.replace(/^[a-z]/,t=>t.toUpperCase()))}Re("abc","def");const fm="n",Aa=`.${fm}-`,pm="__",mm="--",vh=gh(),xh=hm({blockPrefix:Aa,elementPrefix:pm,modifierPrefix:mm});vh.use(xh);const{c:te,find:CA}=vh,{cB:J,cE:K,cM:Se,cNotM:St}=xh;function gm(n){return te(({props:{bPrefix:e}})=>`${e||Aa}modal, ${e||Aa}drawer`,[n])}function vm(n){return te(({props:{bPrefix:e}})=>`${e||Aa}popover`,[n])}const xm=(...n)=>te(">",[J(...n)]);let os;function bm(){return os===void 0&&(os=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),os}const Wl=typeof document!="undefined"&&typeof window!="undefined";function _m(n){const e=oe(!!n.value);if(e.value)return nl(e);const t=Mt(n,i=>{i&&(e.value=!0,t())});return nl(e)}let Or,_o;const ym=()=>{var n,e;Or=wp?(e=(n=document)===null||n===void 0?void 0:n.fonts)===null||e===void 0?void 0:e.ready:void 0,_o=!1,Or!==void 0?Or.then(()=>{_o=!0}):_o=!0};ym();function wm(n){if(_o)return;let e=!1;Wt(()=>{_o||Or==null||Or.then(()=>{e||n()})}),Gt(()=>{e=!0})}const Sm={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function Mm(n,e,t){if(n==="mousemoveoutside"){const i=r=>{e.contains(r.target)||t(r)};return{mousemove:i,touchstart:i}}else if(n==="clickoutside"){let i=!1;const r=s=>{i=!e.contains(s.target)},o=s=>{!i||e.contains(s.target)||t(s)};return{mousedown:r,mouseup:o,touchstart:r,touchend:o}}return console.error(`[evtd/create-trap-handler]: name \`${n}\` is invalid. This could be a bug of evtd.`),{}}function bh(n,e,t){const i=Sm[n];let r=i.get(e);r===void 0&&i.set(e,r=new WeakMap);let o=r.get(t);return o===void 0&&r.set(t,o=Mm(n,e,t)),o}function Cm(n,e,t,i){if(n==="mousemoveoutside"||n==="clickoutside"){const r=bh(n,e,t);return Object.keys(r).forEach(o=>{ct(o,document,r[o],i)}),!0}return!1}function Tm(n,e,t,i){if(n==="mousemoveoutside"||n==="clickoutside"){const r=bh(n,e,t);return Object.keys(r).forEach(o=>{at(o,document,r[o],i)}),!0}return!1}function Em(){if(typeof window=="undefined")return{on:()=>{},off:()=>{}};const n=new WeakMap,e=new WeakMap;function t(){n.set(this,!0)}function i(){n.set(this,!0),e.set(this,!0)}function r(w,x,S){const P=w[x];return w[x]=function(){return S.apply(w,arguments),P.apply(w,arguments)},w}function o(w,x){w[x]=Event.prototype[x]}const s=new WeakMap,a=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function l(){var w;return(w=s.get(this))!==null&&w!==void 0?w:null}function c(w,x){a!==void 0&&Object.defineProperty(w,"currentTarget",{configurable:!0,enumerable:!0,get:x!=null?x:a.get})}const d={bubble:{},capture:{}},u={};function h(){const w=function(x){const{type:S,eventPhase:P,target:D,bubbles:$}=x;if(P===2)return;const Z=P===1?"capture":"bubble";let L=D;const N=[];for(;L===null&&(L=window),N.push(L),L!==window;)L=L.parentNode||null;const O=d.capture[S],U=d.bubble[S];if(r(x,"stopPropagation",t),r(x,"stopImmediatePropagation",i),c(x,l),Z==="capture"){if(O===void 0)return;for(let Y=N.length-1;Y>=0&&!n.has(x);--Y){const I=N[Y],k=O.get(I);if(k!==void 0){s.set(x,I);for(const se of k){if(e.has(x))break;se(x)}}if(Y===0&&!$&&U!==void 0){const se=U.get(I);if(se!==void 0)for(const ae of se){if(e.has(x))break;ae(x)}}}}else if(Z==="bubble"){if(U===void 0)return;for(let Y=0;Y<N.length&&!n.has(x);++Y){const I=N[Y],k=U.get(I);if(k!==void 0){s.set(x,I);for(const se of k){if(e.has(x))break;se(x)}}}}o(x,"stopPropagation"),o(x,"stopImmediatePropagation"),c(x)};return w.displayName="evtdUnifiedHandler",w}function g(){const w=function(x){const{type:S,eventPhase:P}=x;if(P!==2)return;const D=u[S];D!==void 0&&D.forEach($=>$(x))};return w.displayName="evtdUnifiedWindowEventHandler",w}const m=h(),p=g();function f(w,x){const S=d[w];return S[x]===void 0&&(S[x]=new Map,window.addEventListener(x,m,w==="capture")),S[x]}function v(w){return u[w]===void 0&&(u[w]=new Set,window.addEventListener(w,p)),u[w]}function y(w,x){let S=w.get(x);return S===void 0&&w.set(x,S=new Set),S}function E(w,x,S,P){const D=d[x][S];if(D!==void 0){const $=D.get(w);if($!==void 0&&$.has(P))return!0}return!1}function _(w,x){const S=u[w];return!!(S!==void 0&&S.has(x))}function M(w,x,S,P){let D;if(typeof P=="object"&&P.once===!0?D=O=>{A(w,x,D,P),S(O)}:D=S,Cm(w,x,D,P))return;const Z=P===!0||typeof P=="object"&&P.capture===!0?"capture":"bubble",L=f(Z,w),N=y(L,x);if(N.has(D)||N.add(D),x===window){const O=v(w);O.has(D)||O.add(D)}}function A(w,x,S,P){if(Tm(w,x,S,P))return;const $=P===!0||typeof P=="object"&&P.capture===!0,Z=$?"capture":"bubble",L=f(Z,w),N=y(L,x);if(x===window&&!E(x,$?"bubble":"capture",w,S)&&_(w,S)){const U=u[w];U.delete(S),U.size===0&&(window.removeEventListener(w,p),u[w]=void 0)}N.has(S)&&N.delete(S),N.size===0&&L.delete(x),L.size===0&&(window.removeEventListener(w,m,Z==="capture"),d[Z][w]=void 0)}return{on:M,off:A}}const{on:ct,off:at}=Em();function Pi(n,e){return Mt(n,t=>{t!==void 0&&(e.value=t)}),ue(()=>n.value===void 0?e.value:n.value)}function ar(){const n=oe(!1);return Wt(()=>{n.value=!0}),nl(n)}function _h(n,e){return ue(()=>{for(const t of e)if(n[t]!==void 0)return n[t];return n[e[e.length-1]]})}const Am=(typeof window=="undefined"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function Pm(){return Am}const Gl=An("n-internal-select-menu"),yh=An("n-internal-select-menu-body"),jl=An("n-modal-body"),ql=An("n-drawer-body"),Xl=An("n-drawer"),Yl=An("n-popover-body"),wh="__disabled__";function Ut(n){const e=pt(jl,null),t=pt(ql,null),i=pt(Yl,null),r=pt(yh,null),o=oe();if(typeof document!="undefined"){o.value=document.fullscreenElement;const s=()=>{o.value=document.fullscreenElement};Wt(()=>{ct("fullscreenchange",document,s)}),Gt(()=>{at("fullscreenchange",document,s)})}return fn(()=>{var s;const{to:a}=n;return a!==void 0?a===!1?wh:a===!0?o.value||"body":a:e!=null&&e.value?(s=e.value.$el)!==null&&s!==void 0?s:e.value:t!=null&&t.value?t.value:i!=null&&i.value?i.value:r!=null&&r.value?r.value:a!=null?a:o.value||"body"})}Ut.tdkey=wh;Ut.propTo={type:[String,Object,Boolean],default:void 0};function fl(n,e,t="default"){const i=e[t];if(i===void 0)throw new Error(`[vueuc/${n}]: slot[${t}] is empty.`);return i()}function pl(n,e=!0,t=[]){return n.forEach(i=>{if(i!==null){if(typeof i!="object"){(typeof i=="string"||typeof i=="number")&&t.push(nn(String(i)));return}if(Array.isArray(i)){pl(i,e,t);return}if(i.type===ri){if(i.children===null)return;Array.isArray(i.children)&&pl(i.children,e,t)}else i.type!==ah&&t.push(i)}}),t}function Dc(n,e,t="default"){const i=e[t];if(i===void 0)throw new Error(`[vueuc/${n}]: slot[${t}] is empty.`);const r=pl(i());if(r.length===1)return r[0];throw new Error(`[vueuc/${n}]: slot[${t}] should have exactly one child.`)}let ui=null;function Sh(){if(ui===null&&(ui=document.getElementById("v-binder-view-measurer"),ui===null)){ui=document.createElement("div"),ui.id="v-binder-view-measurer";const{style:n}=ui;n.position="fixed",n.left="0",n.right="0",n.top="0",n.bottom="0",n.pointerEvents="none",n.visibility="hidden",document.body.appendChild(ui)}return ui.getBoundingClientRect()}function Rm(n,e){const t=Sh();return{top:e,left:n,height:0,width:0,right:t.width-n,bottom:t.height-e}}function as(n){const e=n.getBoundingClientRect(),t=Sh();return{left:e.left-t.left,top:e.top-t.top,bottom:t.height+t.top-e.bottom,right:t.width+t.left-e.right,width:e.width,height:e.height}}function Lm(n){return n.nodeType===9?null:n.parentNode}function Mh(n){if(n===null)return null;const e=Lm(n);if(e===null)return null;if(e.nodeType===9)return document;if(e.nodeType===1){const{overflow:t,overflowX:i,overflowY:r}=getComputedStyle(e);if(/(auto|scroll|overlay)/.test(t+r+i))return e}return Mh(e)}const Dm=Be({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(n){var e;$t("VBinder",(e=ka())===null||e===void 0?void 0:e.proxy);const t=pt("VBinder",null),i=oe(null),r=v=>{i.value=v,t&&n.syncTargetWithParent&&t.setTargetRef(v)};let o=[];const s=()=>{let v=i.value;for(;v=Mh(v),v!==null;)o.push(v);for(const y of o)ct("scroll",y,u,!0)},a=()=>{for(const v of o)at("scroll",v,u,!0);o=[]},l=new Set,c=v=>{l.size===0&&s(),l.has(v)||l.add(v)},d=v=>{l.has(v)&&l.delete(v),l.size===0&&a()},u=()=>{sh(h)},h=()=>{l.forEach(v=>v())},g=new Set,m=v=>{g.size===0&&ct("resize",window,f),g.has(v)||g.add(v)},p=v=>{g.has(v)&&g.delete(v),g.size===0&&at("resize",window,f)},f=()=>{g.forEach(v=>v())};return Gt(()=>{at("resize",window,f),a()}),{targetRef:i,setTargetRef:r,addScrollListener:c,removeScrollListener:d,addResizeListener:m,removeResizeListener:p}},render(){return fl("binder",this.$slots)}});var $a=Dm,Ua=Be({name:"Target",setup(){const{setTargetRef:n,syncTarget:e}=pt("VBinder");return{syncTarget:e,setTargetDirective:{mounted:n,updated:n}}},render(){const{syncTarget:n,setTargetDirective:e}=this;return n?ni(Dc("follower",this.$slots),[[e]]):Dc("follower",this.$slots)}});const hr="@@mmoContext",Im={mounted(n,{value:e}){n[hr]={handler:void 0},typeof e=="function"&&(n[hr].handler=e,ct("mousemoveoutside",n,e))},updated(n,{value:e}){const t=n[hr];typeof e=="function"?t.handler?t.handler!==e&&(at("mousemoveoutside",n,t.handler),t.handler=e,ct("mousemoveoutside",n,e)):(n[hr].handler=e,ct("mousemoveoutside",n,e)):t.handler&&(at("mousemoveoutside",n,t.handler),t.handler=void 0)},unmounted(n){const{handler:e}=n[hr];e&&at("mousemoveoutside",n,e),n[hr].handler=void 0}};var zm=Im;const fr="@@coContext",Fm={mounted(n,{value:e,modifiers:t}){n[fr]={handler:void 0},typeof e=="function"&&(n[fr].handler=e,ct("clickoutside",n,e,{capture:t.capture}))},updated(n,{value:e,modifiers:t}){const i=n[fr];typeof e=="function"?i.handler?i.handler!==e&&(at("clickoutside",n,i.handler,{capture:t.capture}),i.handler=e,ct("clickoutside",n,e,{capture:t.capture})):(n[fr].handler=e,ct("clickoutside",n,e,{capture:t.capture})):i.handler&&(at("clickoutside",n,i.handler,{capture:t.capture}),i.handler=void 0)},unmounted(n,{modifiers:e}){const{handler:t}=n[fr];t&&at("clickoutside",n,t,{capture:e.capture}),n[fr].handler=void 0}};var Hr=Fm;function Bm(n,e){console.error(`[vdirs/${n}]: ${e}`)}class km{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(e,t){const{elementZIndex:i}=this;if(t!==void 0){e.style.zIndex=`${t}`,i.delete(e);return}const{nextZIndex:r}=this;i.has(e)&&i.get(e)+1===this.nextZIndex||(e.style.zIndex=`${r}`,i.set(e,r),this.nextZIndex=r+1,this.squashState())}unregister(e,t){const{elementZIndex:i}=this;i.has(e)?i.delete(e):t===void 0&&Bm("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:e}=this;e||(this.nextZIndex=2e3),this.nextZIndex-e>2500&&this.rearrange()}rearrange(){const e=Array.from(this.elementZIndex.entries());e.sort((t,i)=>t[1]-i[1]),this.nextZIndex=2e3,e.forEach(t=>{const i=t[0],r=this.nextZIndex++;`${r}`!==i.style.zIndex&&(i.style.zIndex=`${r}`)})}}var ss=new km;const pr="@@ziContext",Om={mounted(n,e){const{value:t={}}=e,{zIndex:i,enabled:r}=t;n[pr]={enabled:!!r,initialized:!1},r&&(ss.ensureZIndex(n,i),n[pr].initialized=!0)},updated(n,e){const{value:t={}}=e,{zIndex:i,enabled:r}=t,o=n[pr].enabled;r&&!o&&(ss.ensureZIndex(n,i),n[pr].initialized=!0),n[pr].enabled=!!r},unmounted(n,e){if(!n[pr].initialized)return;const{value:t={}}=e,{zIndex:i}=t;ss.unregister(n,i)}};var Kl=Om;const Ch=Symbol("@css-render/vue3-ssr");function Nm(n,e){return`<style cssr-id="${n}">
${e}
</style>`}function $m(n,e){const t=pt(Ch,null);if(t===null){console.error("[css-render/vue3-ssr]: no ssr context found.");return}const{styles:i,ids:r}=t;r.has(n)||i!==null&&(r.add(n),i.push(Nm(n,e)))}const Um=typeof document!="undefined";function sr(){if(Um)return;const n=pt(Ch,null);if(n!==null)return{adapter:$m,context:n}}const{c:yi}=gh(),Zl="vueuc-style";function Ic(n){return n&-n}class Hm{constructor(e,t){this.l=e,this.min=t;const i=new Array(e+1);for(let r=0;r<e+1;++r)i[r]=0;this.ft=i}add(e,t){if(t===0)return;const{l:i,ft:r}=this;for(e+=1;e<=i;)r[e]+=t,e+=Ic(e)}get(e){return this.sum(e+1)-this.sum(e)}sum(e){if(e===0)return 0;const{ft:t,min:i,l:r}=this;if(e===void 0&&(e=r),e>r)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let o=e*i;for(;e>0;)o+=t[e],e-=Ic(e);return o}getBound(e){let t=0,i=this.l;for(;i>t;){const r=Math.floor((t+i)/2),o=this.sum(r);if(o>e){i=r;continue}else if(o<e){if(t===r)return this.sum(t+1)<=e?t+1:r;t=r}else return r}return t}}function zc(n){return typeof n=="string"?document.querySelector(n):n()}var Th=Be({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup(n){return{showTeleport:_m(nt(n,"show")),mergedTo:ue(()=>{const{to:e}=n;return e!=null?e:"body"})}},render(){return this.showTeleport?this.disabled?fl("lazy-teleport",this.$slots):T(Sp,{disabled:this.disabled,to:this.mergedTo},fl("lazy-teleport",this.$slots)):null}});const Go={top:"bottom",bottom:"top",left:"right",right:"left"},Fc={start:"end",center:"center",end:"start"},ls={top:"height",bottom:"height",left:"width",right:"width"},Vm={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},Wm={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},Gm={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},Bc={top:!0,bottom:!1,left:!0,right:!1},kc={top:"end",bottom:"start",left:"end",right:"start"};function jm(n,e,t,i,r,o){if(!r||o)return{placement:n,top:0,left:0};const[s,a]=n.split("-");let l=a!=null?a:"center",c={top:0,left:0};const d=(g,m,p)=>{let f=0,v=0;const y=t[g]-e[m]-e[g];return y>0&&i&&(p?v=Bc[m]?y:-y:f=Bc[m]?y:-y),{left:f,top:v}},u=s==="left"||s==="right";if(l!=="center"){const g=Gm[n],m=Go[g],p=ls[g];if(t[p]>e[p]){if(e[g]+e[p]<t[p]){const f=(t[p]-e[p])/2;e[g]<f||e[m]<f?e[g]<e[m]?(l=Fc[a],c=d(p,m,u)):c=d(p,g,u):l="center"}}else t[p]<e[p]&&e[m]<0&&e[g]>e[m]&&(l=Fc[a])}else{const g=s==="bottom"||s==="top"?"left":"top",m=Go[g],p=ls[g],f=(t[p]-e[p])/2;(e[g]<f||e[m]<f)&&(e[g]>e[m]?(l=kc[g],c=d(p,g,u)):(l=kc[m],c=d(p,m,u)))}let h=s;return e[s]<t[ls[s]]&&e[s]<e[Go[s]]&&(h=Go[s]),{placement:l!=="center"?`${h}-${l}`:h,left:c.left,top:c.top}}function qm(n,e){return e?Wm[n]:Vm[n]}function Xm(n,e,t,i,r,o){if(o)switch(n){case"bottom-start":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left)}px`,transform:""};case"top-end":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left)}px`,transform:""};case"left-end":return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(t.top-e.top)}px`,left:`${Math.round(t.left-e.left+t.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(t.top-e.top+t.height/2)}px`,left:`${Math.round(t.left-e.left+t.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(t.top-e.top+t.height/2)}px`,left:`${Math.round(t.left-e.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(t.top-e.top+t.height)}px`,left:`${Math.round(t.left-e.left+t.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(n){case"bottom-start":return{top:`${Math.round(t.top-e.top+t.height+i)}px`,left:`${Math.round(t.left-e.left+r)}px`,transform:""};case"bottom-end":return{top:`${Math.round(t.top-e.top+t.height+i)}px`,left:`${Math.round(t.left-e.left+t.width+r)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(t.top-e.top+i)}px`,left:`${Math.round(t.left-e.left+r)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(t.top-e.top+i)}px`,left:`${Math.round(t.left-e.left+t.width+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(t.top-e.top+i)}px`,left:`${Math.round(t.left-e.left+t.width+r)}px`,transform:""};case"right-end":return{top:`${Math.round(t.top-e.top+t.height+i)}px`,left:`${Math.round(t.left-e.left+t.width+r)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(t.top-e.top+i)}px`,left:`${Math.round(t.left-e.left+r)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(t.top-e.top+t.height+i)}px`,left:`${Math.round(t.left-e.left+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(t.top-e.top+i)}px`,left:`${Math.round(t.left-e.left+t.width/2+r)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(t.top-e.top+t.height/2+i)}px`,left:`${Math.round(t.left-e.left+t.width+r)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(t.top-e.top+t.height/2+i)}px`,left:`${Math.round(t.left-e.left+r)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(t.top-e.top+t.height+i)}px`,left:`${Math.round(t.left-e.left+t.width/2+r)}px`,transform:"translateX(-50%)"}}}const Ym=yi([yi(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),yi(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[yi("> *",{pointerEvents:"all"})])]);var Ha=Be({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(n){const e=pt("VBinder"),t=fn(()=>n.enabled!==void 0?n.enabled:n.show),i=oe(null),r=oe(null),o=()=>{const{syncTrigger:h}=n;h.includes("scroll")&&e.addScrollListener(l),h.includes("resize")&&e.addResizeListener(l)},s=()=>{e.removeScrollListener(l),e.removeResizeListener(l)};Wt(()=>{t.value&&(l(),o())});const a=sr();Ym.mount({id:"vueuc/binder",head:!0,anchorMetaName:Zl,ssr:a}),Gt(()=>{s()}),wm(()=>{t.value&&l()});const l=()=>{if(!t.value)return;const h=i.value;if(h===null)return;const g=e.targetRef,{x:m,y:p,overlap:f}=n,v=m!==void 0&&p!==void 0?Rm(m,p):as(g);h.style.setProperty("--v-target-width",`${Math.round(v.width)}px`),h.style.setProperty("--v-target-height",`${Math.round(v.height)}px`);const{width:y,minWidth:E,placement:_,internalShift:M,flip:A}=n;h.setAttribute("v-placement",_),f?h.setAttribute("v-overlap",""):h.removeAttribute("v-overlap");const{style:w}=h;y==="target"?w.width=`${v.width}px`:y!==void 0?w.width=y:w.width="",E==="target"?w.minWidth=`${v.width}px`:E!==void 0?w.minWidth=E:w.minWidth="";const x=as(h),S=as(r.value),{left:P,top:D,placement:$}=jm(_,v,x,M,A,f),Z=qm($,f),{left:L,top:N,transform:O}=Xm($,S,v,D,P,f);h.setAttribute("v-placement",$),h.style.setProperty("--v-offset-left",`${Math.round(P)}px`),h.style.setProperty("--v-offset-top",`${Math.round(D)}px`),h.style.transform=`translateX(${L}) translateY(${N}) ${O}`,h.style.transformOrigin=Z};Mt(t,h=>{h?(o(),c()):s()});const c=()=>{pn().then(l).catch(h=>console.error(h))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(h=>{Mt(nt(n,h),l)}),["teleportDisabled"].forEach(h=>{Mt(nt(n,h),c)}),Mt(nt(n,"syncTrigger"),h=>{h.includes("resize")?e.addResizeListener(l):e.removeResizeListener(l),h.includes("scroll")?e.addScrollListener(l):e.removeScrollListener(l)});const d=ar(),u=fn(()=>{const{to:h}=n;if(h!==void 0)return h;d.value});return{VBinder:e,mergedEnabled:t,offsetContainerRef:r,followerRef:i,mergedTo:u,syncPosition:l}},render(){return T(Th,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var n,e;const t=T("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[T("div",{class:"v-binder-follower-content",ref:"followerRef"},(e=(n=this.$slots).default)===null||e===void 0?void 0:e.call(n))]);return this.zindexable?ni(t,[[Kl,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):t}})}});const Km=yi(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[yi("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[yi("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]);var Zm=Be({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(n){const e=sr();Km.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Zl,ssr:e}),Wt(()=>{const{defaultScrollIndex:x,defaultScrollKey:S}=n;x!=null?m({index:x}):S!=null&&m({key:S})});let t=!1,i=!1;lh(()=>{if(t=!1,!i){i=!0;return}m({top:u.value,left:d})}),ch(()=>{t=!0,i||(i=!0)});const r=ue(()=>{const x=new Map,{keyField:S}=n;return n.items.forEach((P,D)=>{x.set(P[S],D)}),x}),o=oe(null),s=oe(void 0),a=new Map,l=ue(()=>{const{items:x,itemSize:S,keyField:P}=n,D=new Hm(x.length,S);return x.forEach(($,Z)=>{const L=$[P],N=a.get(L);N!==void 0&&D.add(Z,N)}),D}),c=oe(0);let d=0;const u=oe(0),h=fn(()=>Math.max(l.value.getBound(u.value-qt(n.paddingTop))-1,0)),g=ue(()=>{const{value:x}=s;if(x===void 0)return[];const{items:S,itemSize:P}=n,D=h.value,$=Math.min(D+Math.ceil(x/P+1),S.length-1),Z=[];for(let L=D;L<=$;++L)Z.push(S[L]);return Z}),m=x=>{const{left:S,top:P,index:D,key:$,position:Z,behavior:L,debounce:N=!0}=x;if(S!==void 0||P!==void 0)f(S,P,L);else if(D!==void 0)p(D,L,N);else if($!==void 0){const O=r.value.get($);O!==void 0&&p(O,L,N)}else Z==="bottom"?f(0,Number.MAX_SAFE_INTEGER,L):Z==="top"&&f(0,0,L)};function p(x,S,P){const{value:D}=l,$=D.sum(x)+qt(n.paddingTop);if(!P)o.value.scrollTo({left:0,top:$,behavior:S});else{const{scrollTop:Z,offsetHeight:L}=o.value;if($>Z){const N=D.get(x);$+N<=Z+L||o.value.scrollTo({left:0,top:$+N-L,behavior:S})}else o.value.scrollTo({left:0,top:$,behavior:S})}_=x}function f(x,S,P){o.value.scrollTo({left:x,top:S,behavior:P})}function v(x,S){var P,D,$,Z;if(t||n.ignoreItemResize||w(S.target))return;const{value:L}=l,N=r.value.get(x),O=L.get(N),U=($=(D=(P=S.borderBoxSize)===null||P===void 0?void 0:P[0])===null||D===void 0?void 0:D.blockSize)!==null&&$!==void 0?$:S.contentRect.height;if(U===O)return;U-n.itemSize===0?a.delete(x):a.set(x,U-n.itemSize);const I=U-O;I!==0&&(M!==void 0&&N<=M&&((Z=o.value)===null||Z===void 0||Z.scrollBy(0,I)),L.add(N,I),c.value++)}function y(x){sh(A);const{onScroll:S}=n;S!==void 0&&S(x)}function E(x){if(t||w(x.target)||x.contentRect.height===s.value)return;s.value=x.contentRect.height;const{onResize:S}=n;S!==void 0&&S(x)}let _,M;function A(){const{value:x}=o;x!=null&&(M=_!=null?_:h.value,_=void 0,u.value=o.value.scrollTop,d=o.value.scrollLeft)}function w(x){let S=x;for(;S!==null;){if(S.style.display==="none")return!0;S=S.parentElement}return!1}return{listHeight:s,listStyle:{overflow:"auto"},keyToIndex:r,itemsStyle:ue(()=>{const{itemResizable:x}=n,S=ji(l.value.sum());return c.value,[n.itemsStyle,{boxSizing:"content-box",height:x?"":S,minHeight:x?S:"",paddingTop:ji(n.paddingTop),paddingBottom:ji(n.paddingBottom)}]}),visibleItemsStyle:ue(()=>(c.value,{transform:`translateY(${ji(l.value.sum(h.value))})`})),viewportItems:g,listElRef:o,itemsElRef:oe(null),scrollTo:m,handleListResize:E,handleListScroll:y,handleItemResize:v}},render(){const{itemResizable:n,keyField:e,keyToIndex:t,visibleItemsTag:i}=this;return T(wo,{onResize:this.handleListResize},{default:()=>{var r,o;return T("div",Oa(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.onWheel,ref:"listElRef"}),[this.items.length!==0?T("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[T(i,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(s=>{const a=s[e],l=t.get(a),c=this.$slots.default({item:s,index:l})[0];return n?T(wo,{key:a,onResize:d=>this.handleItemResize(a,d)},{default:()=>c}):(c.key=a,c)})})]):(o=(r=this.$slots).empty)===null||o===void 0?void 0:o.call(r)])}})}});const Fi="v-hidden",Jm=yi("[v-hidden]",{display:"none!important"});var Oc=Be({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(n,{slots:e}){const t=oe(null),i=oe(null);function r(){const{value:s}=t,{getCounter:a,getTail:l}=n;let c;if(a!==void 0?c=a():c=i.value,!s||!c)return;c.hasAttribute(Fi)&&c.removeAttribute(Fi);const{children:d}=s,u=s.offsetWidth,h=[],g=e.tail?l==null?void 0:l():null;let m=g?g.offsetWidth:0,p=!1;const f=s.children.length-(e.tail?1:0);for(let y=0;y<f-1;++y){if(y<0)continue;const E=d[y];if(p){E.hasAttribute(Fi)||E.setAttribute(Fi,"");continue}else E.hasAttribute(Fi)&&E.removeAttribute(Fi);const _=E.offsetWidth;if(m+=_,h[y]=_,m>u){const{updateCounter:M}=n;for(let A=y;A>=0;--A){const w=f-1-A;M!==void 0?M(w):c.textContent=`${w}`;const x=c.offsetWidth;if(m-=h[A],m+x<=u||A===0){p=!0,y=A-1,g&&(y===-1?(g.style.maxWidth=`${u-x}px`,g.style.boxSizing="border-box"):g.style.maxWidth="");break}}}}const{onUpdateOverflow:v}=n;p?v!==void 0&&v(!0):(v!==void 0&&v(!1),c.setAttribute(Fi,""))}const o=sr();return Jm.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Zl,ssr:o}),Wt(r),{selfRef:t,counterRef:i,sync:r}},render(){const{$slots:n}=this;return pn(this.sync),T("div",{class:"v-overflow",ref:"selfRef"},[Mp(n,"default"),n.counter?n.counter():T("span",{style:{display:"inline-block"},ref:"counterRef"}),n.tail?n.tail():null])}});function Eh(n){return n instanceof HTMLElement}function Ah(n){for(let e=0;e<n.childNodes.length;e++){const t=n.childNodes[e];if(Eh(t)&&(Rh(t)||Ah(t)))return!0}return!1}function Ph(n){for(let e=n.childNodes.length-1;e>=0;e--){const t=n.childNodes[e];if(Eh(t)&&(Rh(t)||Ph(t)))return!0}return!1}function Rh(n){if(!Qm(n))return!1;try{n.focus({preventScroll:!0})}catch{}return document.activeElement===n}function Qm(n){if(n.tabIndex>0||n.tabIndex===0&&n.getAttribute("tabIndex")!==null)return!0;if(n.getAttribute("disabled"))return!1;switch(n.nodeName){case"A":return!!n.href&&n.rel!=="ignore";case"INPUT":return n.type!=="hidden"&&n.type!=="file";case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}let ao=[];const Lh=Be({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(n){const e=Gp(),t=oe(null),i=oe(null);let r=!1,o=!1;const s=document.activeElement;function a(){return ao[ao.length-1]===e}function l(f){var v;f.code==="Escape"&&a()&&((v=n.onEsc)===null||v===void 0||v.call(n))}Wt(()=>{Mt(()=>n.active,f=>{f?(u(),ct("keydown",document,l)):(at("keydown",document,l),r&&h())},{immediate:!0})}),Gt(()=>{at("keydown",document,l),r&&h()});function c(f){if(!o&&a()){const v=d();if(v===null||v.contains(f.target))return;g("first")}}function d(){const f=t.value;if(f===null)return null;let v=f;for(;v=v.nextSibling,!(v===null||v instanceof Element&&v.tagName==="DIV"););return v}function u(){var f;if(!n.disabled){if(ao.push(e),n.autoFocus){const{initialFocusTo:v}=n;v===void 0?g("first"):(f=zc(v))===null||f===void 0||f.focus({preventScroll:!0})}r=!0,document.addEventListener("focus",c,!0)}}function h(){var f;if(n.disabled||(document.removeEventListener("focus",c,!0),ao=ao.filter(y=>y!==e),a()))return;const{finalFocusTo:v}=n;v!==void 0?(f=zc(v))===null||f===void 0||f.focus({preventScroll:!0}):n.returnFocusOnDeactivated&&s instanceof HTMLElement&&(o=!0,s.focus({preventScroll:!0}),o=!1)}function g(f){if(!!a()&&n.active){const v=t.value,y=i.value;if(v!==null&&y!==null){const E=d();if(E==null||E===y){o=!0,v.focus({preventScroll:!0}),o=!1;return}o=!0;const _=f==="first"?Ah(E):Ph(E);o=!1,_||(o=!0,v.focus({preventScroll:!0}),o=!1)}}}function m(f){if(o)return;const v=d();v!==null&&(f.relatedTarget!==null&&v.contains(f.relatedTarget)?g("last"):g("first"))}function p(f){o||(f.relatedTarget!==null&&f.relatedTarget===t.value?g("last"):g("first"))}return{focusableStartRef:t,focusableEndRef:i,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:m,handleEndFocus:p}},render(){const{default:n}=this.$slots;if(n===void 0)return null;if(this.disabled)return n();const{active:e,focusableStyle:t}=this;return T(ri,null,[T("div",{"aria-hidden":"true",tabindex:e?"0":"-1",ref:"focusableStartRef",style:t,onFocus:this.handleStartFocus}),n(),T("div",{"aria-hidden":"true",style:t,ref:"focusableEndRef",tabindex:e?"0":"-1",onFocus:this.handleEndFocus})])}});function Dh(n,e){e&&(Wt(()=>{const{value:t}=n;t&&Cc.registerHandler(t,e)}),Gt(()=>{const{value:t}=n;t&&Cc.unregisterHandler(t)}))}let mr=0,Nc="",$c="",Uc="",Hc="";const Vc=oe("0px");function eg(n){if(typeof document=="undefined")return;const e=document.documentElement;let t,i=!1;const r=()=>{e.style.marginRight=Nc,e.style.overflow=$c,e.style.overflowX=Uc,e.style.overflowY=Hc,Vc.value="0px"};Wt(()=>{t=Mt(n,o=>{if(o){if(!mr){const s=window.innerWidth-e.offsetWidth;s>0&&(Nc=e.style.marginRight,e.style.marginRight=`${s}px`,Vc.value=`${s}px`),$c=e.style.overflow,Uc=e.style.overflowX,Hc=e.style.overflowY,e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden"}i=!0,mr++}else mr--,mr||r(),i=!1},{immediate:!0})}),Gt(()=>{t==null||t(),i&&(mr--,mr||r(),i=!1)})}const Jl=oe(!1),Wc=()=>{Jl.value=!0},Gc=()=>{Jl.value=!1};let so=0;const tg=()=>(Wl&&(Lo(()=>{so||(window.addEventListener("compositionstart",Wc),window.addEventListener("compositionend",Gc)),so++}),Gt(()=>{so<=1?(window.removeEventListener("compositionstart",Wc),window.removeEventListener("compositionend",Gc),so=0):so--})),Jl),jc=An("n-form-item");function Kr(n,{defaultSize:e="medium",mergedSize:t,mergedDisabled:i}={}){const r=pt(jc,null);$t(jc,null);const o=ue(t?()=>t(r):()=>{const{size:l}=n;if(l)return l;if(r){const{mergedSize:c}=r;if(c.value!==void 0)return c.value}return e}),s=ue(i?()=>i(r):()=>{const{disabled:l}=n;return l!==void 0?l:r?r.disabled.value:!1}),a=ue(()=>{const{status:l}=n;return l||(r==null?void 0:r.mergedValidationStatus.value)});return Gt(()=>{r&&r.restoreValidation()}),{mergedSizeRef:o,mergedDisabledRef:s,mergedStatusRef:a,nTriggerFormBlur(){r&&r.handleContentBlur()},nTriggerFormChange(){r&&r.handleContentChange()},nTriggerFormFocus(){r&&r.handleContentFocus()},nTriggerFormInput(){r&&r.handleContentInput()}}}var ng=typeof global=="object"&&global&&global.Object===Object&&global,Ih=ng,ig=typeof self=="object"&&self&&self.Object===Object&&self,rg=Ih||ig||Function("return this")(),Vn=rg,og=Vn.Symbol,Ri=og,zh=Object.prototype,ag=zh.hasOwnProperty,sg=zh.toString,lo=Ri?Ri.toStringTag:void 0;function lg(n){var e=ag.call(n,lo),t=n[lo];try{n[lo]=void 0;var i=!0}catch{}var r=sg.call(n);return i&&(e?n[lo]=t:delete n[lo]),r}var cg=Object.prototype,dg=cg.toString;function ug(n){return dg.call(n)}var hg="[object Null]",fg="[object Undefined]",qc=Ri?Ri.toStringTag:void 0;function lr(n){return n==null?n===void 0?fg:hg:qc&&qc in Object(n)?lg(n):ug(n)}function Li(n){return n!=null&&typeof n=="object"}var pg="[object Symbol]";function Ql(n){return typeof n=="symbol"||Li(n)&&lr(n)==pg}function Fh(n,e){for(var t=-1,i=n==null?0:n.length,r=Array(i);++t<i;)r[t]=e(n[t],t,n);return r}var mg=Array.isArray,vn=mg,gg=1/0,Xc=Ri?Ri.prototype:void 0,Yc=Xc?Xc.toString:void 0;function Bh(n){if(typeof n=="string")return n;if(vn(n))return Fh(n,Bh)+"";if(Ql(n))return Yc?Yc.call(n):"";var e=n+"";return e=="0"&&1/n==-gg?"-0":e}function Di(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}function ec(n){return n}var vg="[object AsyncFunction]",xg="[object Function]",bg="[object GeneratorFunction]",_g="[object Proxy]";function tc(n){if(!Di(n))return!1;var e=lr(n);return e==xg||e==bg||e==vg||e==_g}var yg=Vn["__core-js_shared__"],cs=yg,Kc=function(){var n=/[^.]+$/.exec(cs&&cs.keys&&cs.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function wg(n){return!!Kc&&Kc in n}var Sg=Function.prototype,Mg=Sg.toString;function cr(n){if(n!=null){try{return Mg.call(n)}catch{}try{return n+""}catch{}}return""}var Cg=/[\\^$.*+?()[\]{}|]/g,Tg=/^\[object .+?Constructor\]$/,Eg=Function.prototype,Ag=Object.prototype,Pg=Eg.toString,Rg=Ag.hasOwnProperty,Lg=RegExp("^"+Pg.call(Rg).replace(Cg,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Dg(n){if(!Di(n)||wg(n))return!1;var e=tc(n)?Lg:Tg;return e.test(cr(n))}function Ig(n,e){return n==null?void 0:n[e]}function dr(n,e){var t=Ig(n,e);return Dg(t)?t:void 0}var zg=dr(Vn,"WeakMap"),ml=zg,Zc=Object.create,Fg=function(){function n(){}return function(e){if(!Di(e))return{};if(Zc)return Zc(e);n.prototype=e;var t=new n;return n.prototype=void 0,t}}(),Bg=Fg;function kg(n,e,t){switch(t.length){case 0:return n.call(e);case 1:return n.call(e,t[0]);case 2:return n.call(e,t[0],t[1]);case 3:return n.call(e,t[0],t[1],t[2])}return n.apply(e,t)}function Og(n,e){var t=-1,i=n.length;for(e||(e=Array(i));++t<i;)e[t]=n[t];return e}var Ng=800,$g=16,Ug=Date.now;function Hg(n){var e=0,t=0;return function(){var i=Ug(),r=$g-(i-t);if(t=i,r>0){if(++e>=Ng)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}function Vg(n){return function(){return n}}var Wg=function(){try{var n=dr(Object,"defineProperty");return n({},"",{}),n}catch{}}(),Pa=Wg,Gg=Pa?function(n,e){return Pa(n,"toString",{configurable:!0,enumerable:!1,value:Vg(e),writable:!0})}:ec,jg=Gg,qg=Hg(jg),Xg=qg,Yg=9007199254740991,Kg=/^(?:0|[1-9]\d*)$/;function nc(n,e){var t=typeof n;return e=e==null?Yg:e,!!e&&(t=="number"||t!="symbol"&&Kg.test(n))&&n>-1&&n%1==0&&n<e}function ic(n,e,t){e=="__proto__"&&Pa?Pa(n,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):n[e]=t}function Io(n,e){return n===e||n!==n&&e!==e}var Zg=Object.prototype,Jg=Zg.hasOwnProperty;function Qg(n,e,t){var i=n[e];(!(Jg.call(n,e)&&Io(i,t))||t===void 0&&!(e in n))&&ic(n,e,t)}function ev(n,e,t,i){var r=!t;t||(t={});for(var o=-1,s=e.length;++o<s;){var a=e[o],l=i?i(t[a],n[a],a,t,n):void 0;l===void 0&&(l=n[a]),r?ic(t,a,l):Qg(t,a,l)}return t}var Jc=Math.max;function tv(n,e,t){return e=Jc(e===void 0?n.length-1:e,0),function(){for(var i=arguments,r=-1,o=Jc(i.length-e,0),s=Array(o);++r<o;)s[r]=i[e+r];r=-1;for(var a=Array(e+1);++r<e;)a[r]=i[r];return a[e]=t(s),kg(n,this,a)}}function nv(n,e){return Xg(tv(n,e,ec),n+"")}var iv=9007199254740991;function rc(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=iv}function Zr(n){return n!=null&&rc(n.length)&&!tc(n)}function rv(n,e,t){if(!Di(t))return!1;var i=typeof e;return(i=="number"?Zr(t)&&nc(e,t.length):i=="string"&&e in t)?Io(t[e],n):!1}function ov(n){return nv(function(e,t){var i=-1,r=t.length,o=r>1?t[r-1]:void 0,s=r>2?t[2]:void 0;for(o=n.length>3&&typeof o=="function"?(r--,o):void 0,s&&rv(t[0],t[1],s)&&(o=r<3?void 0:o,r=1),e=Object(e);++i<r;){var a=t[i];a&&n(e,a,i,o)}return e})}var av=Object.prototype;function oc(n){var e=n&&n.constructor,t=typeof e=="function"&&e.prototype||av;return n===t}function sv(n,e){for(var t=-1,i=Array(n);++t<n;)i[t]=e(t);return i}var lv="[object Arguments]";function Qc(n){return Li(n)&&lr(n)==lv}var kh=Object.prototype,cv=kh.hasOwnProperty,dv=kh.propertyIsEnumerable,uv=Qc(function(){return arguments}())?Qc:function(n){return Li(n)&&cv.call(n,"callee")&&!dv.call(n,"callee")},Ra=uv;function hv(){return!1}var Oh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ed=Oh&&typeof module=="object"&&module&&!module.nodeType&&module,fv=ed&&ed.exports===Oh,td=fv?Vn.Buffer:void 0,pv=td?td.isBuffer:void 0,mv=pv||hv,La=mv,gv="[object Arguments]",vv="[object Array]",xv="[object Boolean]",bv="[object Date]",_v="[object Error]",yv="[object Function]",wv="[object Map]",Sv="[object Number]",Mv="[object Object]",Cv="[object RegExp]",Tv="[object Set]",Ev="[object String]",Av="[object WeakMap]",Pv="[object ArrayBuffer]",Rv="[object DataView]",Lv="[object Float32Array]",Dv="[object Float64Array]",Iv="[object Int8Array]",zv="[object Int16Array]",Fv="[object Int32Array]",Bv="[object Uint8Array]",kv="[object Uint8ClampedArray]",Ov="[object Uint16Array]",Nv="[object Uint32Array]",ft={};ft[Lv]=ft[Dv]=ft[Iv]=ft[zv]=ft[Fv]=ft[Bv]=ft[kv]=ft[Ov]=ft[Nv]=!0;ft[gv]=ft[vv]=ft[Pv]=ft[xv]=ft[Rv]=ft[bv]=ft[_v]=ft[yv]=ft[wv]=ft[Sv]=ft[Mv]=ft[Cv]=ft[Tv]=ft[Ev]=ft[Av]=!1;function $v(n){return Li(n)&&rc(n.length)&&!!ft[lr(n)]}function Uv(n){return function(e){return n(e)}}var Nh=typeof exports=="object"&&exports&&!exports.nodeType&&exports,yo=Nh&&typeof module=="object"&&module&&!module.nodeType&&module,Hv=yo&&yo.exports===Nh,ds=Hv&&Ih.process,Vv=function(){try{var n=yo&&yo.require&&yo.require("util").types;return n||ds&&ds.binding&&ds.binding("util")}catch{}}(),nd=Vv,id=nd&&nd.isTypedArray,Wv=id?Uv(id):$v,ac=Wv,Gv=Object.prototype,jv=Gv.hasOwnProperty;function $h(n,e){var t=vn(n),i=!t&&Ra(n),r=!t&&!i&&La(n),o=!t&&!i&&!r&&ac(n),s=t||i||r||o,a=s?sv(n.length,String):[],l=a.length;for(var c in n)(e||jv.call(n,c))&&!(s&&(c=="length"||r&&(c=="offset"||c=="parent")||o&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||nc(c,l)))&&a.push(c);return a}function Uh(n,e){return function(t){return n(e(t))}}var qv=Uh(Object.keys,Object),Xv=qv,Yv=Object.prototype,Kv=Yv.hasOwnProperty;function Zv(n){if(!oc(n))return Xv(n);var e=[];for(var t in Object(n))Kv.call(n,t)&&t!="constructor"&&e.push(t);return e}function sc(n){return Zr(n)?$h(n):Zv(n)}function Jv(n){var e=[];if(n!=null)for(var t in Object(n))e.push(t);return e}var Qv=Object.prototype,e0=Qv.hasOwnProperty;function t0(n){if(!Di(n))return Jv(n);var e=oc(n),t=[];for(var i in n)i=="constructor"&&(e||!e0.call(n,i))||t.push(i);return t}function Hh(n){return Zr(n)?$h(n,!0):t0(n)}var n0=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i0=/^\w*$/;function lc(n,e){if(vn(n))return!1;var t=typeof n;return t=="number"||t=="symbol"||t=="boolean"||n==null||Ql(n)?!0:i0.test(n)||!n0.test(n)||e!=null&&n in Object(e)}var r0=dr(Object,"create"),So=r0;function o0(){this.__data__=So?So(null):{},this.size=0}function a0(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}var s0="__lodash_hash_undefined__",l0=Object.prototype,c0=l0.hasOwnProperty;function d0(n){var e=this.__data__;if(So){var t=e[n];return t===s0?void 0:t}return c0.call(e,n)?e[n]:void 0}var u0=Object.prototype,h0=u0.hasOwnProperty;function f0(n){var e=this.__data__;return So?e[n]!==void 0:h0.call(e,n)}var p0="__lodash_hash_undefined__";function m0(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=So&&e===void 0?p0:e,this}function nr(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}nr.prototype.clear=o0;nr.prototype.delete=a0;nr.prototype.get=d0;nr.prototype.has=f0;nr.prototype.set=m0;function g0(){this.__data__=[],this.size=0}function Va(n,e){for(var t=n.length;t--;)if(Io(n[t][0],e))return t;return-1}var v0=Array.prototype,x0=v0.splice;function b0(n){var e=this.__data__,t=Va(e,n);if(t<0)return!1;var i=e.length-1;return t==i?e.pop():x0.call(e,t,1),--this.size,!0}function _0(n){var e=this.__data__,t=Va(e,n);return t<0?void 0:e[t][1]}function y0(n){return Va(this.__data__,n)>-1}function w0(n,e){var t=this.__data__,i=Va(t,n);return i<0?(++this.size,t.push([n,e])):t[i][1]=e,this}function oi(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}oi.prototype.clear=g0;oi.prototype.delete=b0;oi.prototype.get=_0;oi.prototype.has=y0;oi.prototype.set=w0;var S0=dr(Vn,"Map"),Mo=S0;function M0(){this.size=0,this.__data__={hash:new nr,map:new(Mo||oi),string:new nr}}function C0(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}function Wa(n,e){var t=n.__data__;return C0(e)?t[typeof e=="string"?"string":"hash"]:t.map}function T0(n){var e=Wa(this,n).delete(n);return this.size-=e?1:0,e}function E0(n){return Wa(this,n).get(n)}function A0(n){return Wa(this,n).has(n)}function P0(n,e){var t=Wa(this,n),i=t.size;return t.set(n,e),this.size+=t.size==i?0:1,this}function ai(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var i=n[e];this.set(i[0],i[1])}}ai.prototype.clear=M0;ai.prototype.delete=T0;ai.prototype.get=E0;ai.prototype.has=A0;ai.prototype.set=P0;var R0="Expected a function";function cc(n,e){if(typeof n!="function"||e!=null&&typeof e!="function")throw new TypeError(R0);var t=function(){var i=arguments,r=e?e.apply(this,i):i[0],o=t.cache;if(o.has(r))return o.get(r);var s=n.apply(this,i);return t.cache=o.set(r,s)||o,s};return t.cache=new(cc.Cache||ai),t}cc.Cache=ai;var L0=500;function D0(n){var e=cc(n,function(i){return t.size===L0&&t.clear(),i}),t=e.cache;return e}var I0=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,z0=/\\(\\)?/g,F0=D0(function(n){var e=[];return n.charCodeAt(0)===46&&e.push(""),n.replace(I0,function(t,i,r,o){e.push(r?o.replace(z0,"$1"):i||t)}),e}),B0=F0;function Vh(n){return n==null?"":Bh(n)}function Wh(n,e){return vn(n)?n:lc(n,e)?[n]:B0(Vh(n))}var k0=1/0;function Ga(n){if(typeof n=="string"||Ql(n))return n;var e=n+"";return e=="0"&&1/n==-k0?"-0":e}function Gh(n,e){e=Wh(e,n);for(var t=0,i=e.length;n!=null&&t<i;)n=n[Ga(e[t++])];return t&&t==i?n:void 0}function O0(n,e,t){var i=n==null?void 0:Gh(n,e);return i===void 0?t:i}function N0(n,e){for(var t=-1,i=e.length,r=n.length;++t<i;)n[r+t]=e[t];return n}var $0=Uh(Object.getPrototypeOf,Object),jh=$0,U0="[object Object]",H0=Function.prototype,V0=Object.prototype,qh=H0.toString,W0=V0.hasOwnProperty,G0=qh.call(Object);function j0(n){if(!Li(n)||lr(n)!=U0)return!1;var e=jh(n);if(e===null)return!0;var t=W0.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&qh.call(t)==G0}function q0(n,e,t){var i=-1,r=n.length;e<0&&(e=-e>r?0:r+e),t=t>r?r:t,t<0&&(t+=r),r=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(r);++i<r;)o[i]=n[i+e];return o}function X0(n,e,t){var i=n.length;return t=t===void 0?i:t,!e&&t>=i?n:q0(n,e,t)}var Y0="\\ud800-\\udfff",K0="\\u0300-\\u036f",Z0="\\ufe20-\\ufe2f",J0="\\u20d0-\\u20ff",Q0=K0+Z0+J0,ex="\\ufe0e\\ufe0f",tx="\\u200d",nx=RegExp("["+tx+Y0+Q0+ex+"]");function Xh(n){return nx.test(n)}function ix(n){return n.split("")}var Yh="\\ud800-\\udfff",rx="\\u0300-\\u036f",ox="\\ufe20-\\ufe2f",ax="\\u20d0-\\u20ff",sx=rx+ox+ax,lx="\\ufe0e\\ufe0f",cx="["+Yh+"]",gl="["+sx+"]",vl="\\ud83c[\\udffb-\\udfff]",dx="(?:"+gl+"|"+vl+")",Kh="[^"+Yh+"]",Zh="(?:\\ud83c[\\udde6-\\uddff]){2}",Jh="[\\ud800-\\udbff][\\udc00-\\udfff]",ux="\\u200d",Qh=dx+"?",ef="["+lx+"]?",hx="(?:"+ux+"(?:"+[Kh,Zh,Jh].join("|")+")"+ef+Qh+")*",fx=ef+Qh+hx,px="(?:"+[Kh+gl+"?",gl,Zh,Jh,cx].join("|")+")",mx=RegExp(vl+"(?="+vl+")|"+px+fx,"g");function gx(n){return n.match(mx)||[]}function vx(n){return Xh(n)?gx(n):ix(n)}function xx(n){return function(e){e=Vh(e);var t=Xh(e)?vx(e):void 0,i=t?t[0]:e.charAt(0),r=t?X0(t,1).join(""):e.slice(1);return i[n]()+r}}var bx=xx("toUpperCase"),_x=bx;function yx(){this.__data__=new oi,this.size=0}function wx(n){var e=this.__data__,t=e.delete(n);return this.size=e.size,t}function Sx(n){return this.__data__.get(n)}function Mx(n){return this.__data__.has(n)}var Cx=200;function Tx(n,e){var t=this.__data__;if(t instanceof oi){var i=t.__data__;if(!Mo||i.length<Cx-1)return i.push([n,e]),this.size=++t.size,this;t=this.__data__=new ai(i)}return t.set(n,e),this.size=t.size,this}function kn(n){var e=this.__data__=new oi(n);this.size=e.size}kn.prototype.clear=yx;kn.prototype.delete=wx;kn.prototype.get=Sx;kn.prototype.has=Mx;kn.prototype.set=Tx;var tf=typeof exports=="object"&&exports&&!exports.nodeType&&exports,rd=tf&&typeof module=="object"&&module&&!module.nodeType&&module,Ex=rd&&rd.exports===tf,od=Ex?Vn.Buffer:void 0,ad=od?od.allocUnsafe:void 0;function Ax(n,e){if(e)return n.slice();var t=n.length,i=ad?ad(t):new n.constructor(t);return n.copy(i),i}function Px(n,e){for(var t=-1,i=n==null?0:n.length,r=0,o=[];++t<i;){var s=n[t];e(s,t,n)&&(o[r++]=s)}return o}function Rx(){return[]}var Lx=Object.prototype,Dx=Lx.propertyIsEnumerable,sd=Object.getOwnPropertySymbols,Ix=sd?function(n){return n==null?[]:(n=Object(n),Px(sd(n),function(e){return Dx.call(n,e)}))}:Rx,zx=Ix;function Fx(n,e,t){var i=e(n);return vn(n)?i:N0(i,t(n))}function ld(n){return Fx(n,sc,zx)}var Bx=dr(Vn,"DataView"),xl=Bx,kx=dr(Vn,"Promise"),bl=kx,Ox=dr(Vn,"Set"),_l=Ox,cd="[object Map]",Nx="[object Object]",dd="[object Promise]",ud="[object Set]",hd="[object WeakMap]",fd="[object DataView]",$x=cr(xl),Ux=cr(Mo),Hx=cr(bl),Vx=cr(_l),Wx=cr(ml),Hi=lr;(xl&&Hi(new xl(new ArrayBuffer(1)))!=fd||Mo&&Hi(new Mo)!=cd||bl&&Hi(bl.resolve())!=dd||_l&&Hi(new _l)!=ud||ml&&Hi(new ml)!=hd)&&(Hi=function(n){var e=lr(n),t=e==Nx?n.constructor:void 0,i=t?cr(t):"";if(i)switch(i){case $x:return fd;case Ux:return cd;case Hx:return dd;case Vx:return ud;case Wx:return hd}return e});var pd=Hi,Gx=Vn.Uint8Array,Da=Gx;function jx(n){var e=new n.constructor(n.byteLength);return new Da(e).set(new Da(n)),e}function qx(n,e){var t=e?jx(n.buffer):n.buffer;return new n.constructor(t,n.byteOffset,n.length)}function Xx(n){return typeof n.constructor=="function"&&!oc(n)?Bg(jh(n)):{}}var Yx="__lodash_hash_undefined__";function Kx(n){return this.__data__.set(n,Yx),this}function Zx(n){return this.__data__.has(n)}function Ia(n){var e=-1,t=n==null?0:n.length;for(this.__data__=new ai;++e<t;)this.add(n[e])}Ia.prototype.add=Ia.prototype.push=Kx;Ia.prototype.has=Zx;function Jx(n,e){for(var t=-1,i=n==null?0:n.length;++t<i;)if(e(n[t],t,n))return!0;return!1}function Qx(n,e){return n.has(e)}var eb=1,tb=2;function nf(n,e,t,i,r,o){var s=t&eb,a=n.length,l=e.length;if(a!=l&&!(s&&l>a))return!1;var c=o.get(n),d=o.get(e);if(c&&d)return c==e&&d==n;var u=-1,h=!0,g=t&tb?new Ia:void 0;for(o.set(n,e),o.set(e,n);++u<a;){var m=n[u],p=e[u];if(i)var f=s?i(p,m,u,e,n,o):i(m,p,u,n,e,o);if(f!==void 0){if(f)continue;h=!1;break}if(g){if(!Jx(e,function(v,y){if(!Qx(g,y)&&(m===v||r(m,v,t,i,o)))return g.push(y)})){h=!1;break}}else if(!(m===p||r(m,p,t,i,o))){h=!1;break}}return o.delete(n),o.delete(e),h}function nb(n){var e=-1,t=Array(n.size);return n.forEach(function(i,r){t[++e]=[r,i]}),t}function ib(n){var e=-1,t=Array(n.size);return n.forEach(function(i){t[++e]=i}),t}var rb=1,ob=2,ab="[object Boolean]",sb="[object Date]",lb="[object Error]",cb="[object Map]",db="[object Number]",ub="[object RegExp]",hb="[object Set]",fb="[object String]",pb="[object Symbol]",mb="[object ArrayBuffer]",gb="[object DataView]",md=Ri?Ri.prototype:void 0,us=md?md.valueOf:void 0;function vb(n,e,t,i,r,o,s){switch(t){case gb:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case mb:return!(n.byteLength!=e.byteLength||!o(new Da(n),new Da(e)));case ab:case sb:case db:return Io(+n,+e);case lb:return n.name==e.name&&n.message==e.message;case ub:case fb:return n==e+"";case cb:var a=nb;case hb:var l=i&rb;if(a||(a=ib),n.size!=e.size&&!l)return!1;var c=s.get(n);if(c)return c==e;i|=ob,s.set(n,e);var d=nf(a(n),a(e),i,r,o,s);return s.delete(n),d;case pb:if(us)return us.call(n)==us.call(e)}return!1}var xb=1,bb=Object.prototype,_b=bb.hasOwnProperty;function yb(n,e,t,i,r,o){var s=t&xb,a=ld(n),l=a.length,c=ld(e),d=c.length;if(l!=d&&!s)return!1;for(var u=l;u--;){var h=a[u];if(!(s?h in e:_b.call(e,h)))return!1}var g=o.get(n),m=o.get(e);if(g&&m)return g==e&&m==n;var p=!0;o.set(n,e),o.set(e,n);for(var f=s;++u<l;){h=a[u];var v=n[h],y=e[h];if(i)var E=s?i(y,v,h,e,n,o):i(v,y,h,n,e,o);if(!(E===void 0?v===y||r(v,y,t,i,o):E)){p=!1;break}f||(f=h=="constructor")}if(p&&!f){var _=n.constructor,M=e.constructor;_!=M&&"constructor"in n&&"constructor"in e&&!(typeof _=="function"&&_ instanceof _&&typeof M=="function"&&M instanceof M)&&(p=!1)}return o.delete(n),o.delete(e),p}var wb=1,gd="[object Arguments]",vd="[object Array]",jo="[object Object]",Sb=Object.prototype,xd=Sb.hasOwnProperty;function Mb(n,e,t,i,r,o){var s=vn(n),a=vn(e),l=s?vd:pd(n),c=a?vd:pd(e);l=l==gd?jo:l,c=c==gd?jo:c;var d=l==jo,u=c==jo,h=l==c;if(h&&La(n)){if(!La(e))return!1;s=!0,d=!1}if(h&&!d)return o||(o=new kn),s||ac(n)?nf(n,e,t,i,r,o):vb(n,e,l,t,i,r,o);if(!(t&wb)){var g=d&&xd.call(n,"__wrapped__"),m=u&&xd.call(e,"__wrapped__");if(g||m){var p=g?n.value():n,f=m?e.value():e;return o||(o=new kn),r(p,f,t,i,o)}}return h?(o||(o=new kn),yb(n,e,t,i,r,o)):!1}function dc(n,e,t,i,r){return n===e?!0:n==null||e==null||!Li(n)&&!Li(e)?n!==n&&e!==e:Mb(n,e,t,i,dc,r)}var Cb=1,Tb=2;function Eb(n,e,t,i){var r=t.length,o=r,s=!i;if(n==null)return!o;for(n=Object(n);r--;){var a=t[r];if(s&&a[2]?a[1]!==n[a[0]]:!(a[0]in n))return!1}for(;++r<o;){a=t[r];var l=a[0],c=n[l],d=a[1];if(s&&a[2]){if(c===void 0&&!(l in n))return!1}else{var u=new kn;if(i)var h=i(c,d,l,n,e,u);if(!(h===void 0?dc(d,c,Cb|Tb,i,u):h))return!1}}return!0}function rf(n){return n===n&&!Di(n)}function Ab(n){for(var e=sc(n),t=e.length;t--;){var i=e[t],r=n[i];e[t]=[i,r,rf(r)]}return e}function of(n,e){return function(t){return t==null?!1:t[n]===e&&(e!==void 0||n in Object(t))}}function Pb(n){var e=Ab(n);return e.length==1&&e[0][2]?of(e[0][0],e[0][1]):function(t){return t===n||Eb(t,n,e)}}function Rb(n,e){return n!=null&&e in Object(n)}function Lb(n,e,t){e=Wh(e,n);for(var i=-1,r=e.length,o=!1;++i<r;){var s=Ga(e[i]);if(!(o=n!=null&&t(n,s)))break;n=n[s]}return o||++i!=r?o:(r=n==null?0:n.length,!!r&&rc(r)&&nc(s,r)&&(vn(n)||Ra(n)))}function Db(n,e){return n!=null&&Lb(n,e,Rb)}var Ib=1,zb=2;function Fb(n,e){return lc(n)&&rf(e)?of(Ga(n),e):function(t){var i=O0(t,n);return i===void 0&&i===e?Db(t,n):dc(e,i,Ib|zb)}}function Bb(n){return function(e){return e==null?void 0:e[n]}}function kb(n){return function(e){return Gh(e,n)}}function Ob(n){return lc(n)?Bb(Ga(n)):kb(n)}function Nb(n){return typeof n=="function"?n:n==null?ec:typeof n=="object"?vn(n)?Fb(n[0],n[1]):Pb(n):Ob(n)}function $b(n){return function(e,t,i){for(var r=-1,o=Object(e),s=i(e),a=s.length;a--;){var l=s[n?a:++r];if(t(o[l],l,o)===!1)break}return e}}var Ub=$b(),af=Ub;function Hb(n,e){return n&&af(n,e,sc)}function Vb(n,e){return function(t,i){if(t==null)return t;if(!Zr(t))return n(t,i);for(var r=t.length,o=e?r:-1,s=Object(t);(e?o--:++o<r)&&i(s[o],o,s)!==!1;);return t}}var Wb=Vb(Hb),Gb=Wb;function yl(n,e,t){(t!==void 0&&!Io(n[e],t)||t===void 0&&!(e in n))&&ic(n,e,t)}function jb(n){return Li(n)&&Zr(n)}function wl(n,e){if(!(e==="constructor"&&typeof n[e]=="function")&&e!="__proto__")return n[e]}function qb(n){return ev(n,Hh(n))}function Xb(n,e,t,i,r,o,s){var a=wl(n,t),l=wl(e,t),c=s.get(l);if(c){yl(n,t,c);return}var d=o?o(a,l,t+"",n,e,s):void 0,u=d===void 0;if(u){var h=vn(l),g=!h&&La(l),m=!h&&!g&&ac(l);d=l,h||g||m?vn(a)?d=a:jb(a)?d=Og(a):g?(u=!1,d=Ax(l,!0)):m?(u=!1,d=qx(l,!0)):d=[]:j0(l)||Ra(l)?(d=a,Ra(a)?d=qb(a):(!Di(a)||tc(a))&&(d=Xx(l))):u=!1}u&&(s.set(l,d),r(d,l,i,o,s),s.delete(l)),yl(n,t,d)}function sf(n,e,t,i,r){n!==e&&af(e,function(o,s){if(r||(r=new kn),Di(o))Xb(n,e,s,t,sf,i,r);else{var a=i?i(wl(n,s),o,s+"",n,e,r):void 0;a===void 0&&(a=o),yl(n,s,a)}},Hh)}function Yb(n,e){var t=-1,i=Zr(n)?Array(n.length):[];return Gb(n,function(r,o,s){i[++t]=e(r,o,s)}),i}function Kb(n,e){var t=vn(n)?Fh:Yb;return t(n,Nb(e))}var Zb=ov(function(n,e,t){sf(n,e,t)}),qo=Zb,Wn={fontFamily:'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadius:"3px",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px"};const{fontSize:Jb,fontFamily:Qb,lineHeight:e_}=Wn;var lf=te("body",`
 margin: 0;
 font-size: ${Jb};
 font-family: ${Qb};
 line-height: ${e_};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`,[te("input",`
 font-family: inherit;
 font-size: inherit;
 `)]);const Co="naive-ui-style";function lt(n,e,t,i,r,o){const s=sr(),a=pt(Yr,null);if(t){const c=()=>{const d=o==null?void 0:o.value;t.mount({id:d===void 0?e:d+e,head:!0,props:{bPrefix:d?`.${d}-`:void 0},anchorMetaName:Co,ssr:s}),a!=null&&a.preflightStyleDisabled||lf.mount({id:"n-global",head:!0,anchorMetaName:Co,ssr:s})};s?c():Lo(c)}return ue(()=>{var c;const{theme:{common:d,self:u,peers:h={}}={},themeOverrides:g={},builtinThemeOverrides:m={}}=r,{common:p,peers:f}=g,{common:v=void 0,[n]:{common:y=void 0,self:E=void 0,peers:_={}}={}}=(a==null?void 0:a.mergedThemeRef.value)||{},{common:M=void 0,[n]:A={}}=(a==null?void 0:a.mergedThemeOverridesRef.value)||{},{common:w,peers:x={}}=A,S=qo({},d||y||v||i.common,M,w,p),P=qo((c=u||E||i.self)===null||c===void 0?void 0:c(S),m,A,g);return{common:S,self:P,peers:qo({},i.peers,_,h),peerOverrides:qo({},x,f)}})}lt.props={theme:Object,themeOverrides:Object,builtinThemeOverrides:Object};const t_={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:n=>`Please load all ${n}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},Transfer:{sourceTitle:"Source",targetTitle:"Target"},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (\u2190)",tipNext:"Next picture (\u2192)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}};var n_=t_;function hs(n){return function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.width?String(e.width):n.defaultWidth,i=n.formats[t]||n.formats[n.defaultWidth];return i}}function co(n){return function(e,t){var i=t||{},r=i.context?String(i.context):"standalone",o;if(r==="formatting"&&n.formattingValues){var s=n.defaultFormattingWidth||n.defaultWidth,a=i.width?String(i.width):s;o=n.formattingValues[a]||n.formattingValues[s]}else{var l=n.defaultWidth,c=i.width?String(i.width):n.defaultWidth;o=n.values[c]||n.values[l]}var d=n.argumentCallback?n.argumentCallback(e):e;return o[d]}}function i_(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=e.match(n.matchPattern);if(!i)return null;var r=i[0],o=e.match(n.parsePattern);if(!o)return null;var s=n.valueCallback?n.valueCallback(o[0]):o[0];s=t.valueCallback?t.valueCallback(s):s;var a=e.slice(r.length);return{value:s,rest:a}}}function uo(n){return function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.width,r=i&&n.matchPatterns[i]||n.matchPatterns[n.defaultMatchWidth],o=e.match(r);if(!o)return null;var s=o[0],a=i&&n.parsePatterns[i]||n.parsePatterns[n.defaultParseWidth],l=Array.isArray(a)?o_(a,function(u){return u.test(s)}):r_(a,function(u){return u.test(s)}),c;c=n.valueCallback?n.valueCallback(l):l,c=t.valueCallback?t.valueCallback(c):c;var d=e.slice(s.length);return{value:c,rest:d}}}function r_(n,e){for(var t in n)if(n.hasOwnProperty(t)&&e(n[t]))return t}function o_(n,e){for(var t=0;t<n.length;t++)if(e(n[t]))return t}var a_={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},s_=function(n,e,t){var i,r=a_[n];return typeof r=="string"?i=r:e===1?i=r.one:i=r.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+i:i+" ago":i},l_=s_,c_={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},d_={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},u_={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},h_={date:hs({formats:c_,defaultWidth:"full"}),time:hs({formats:d_,defaultWidth:"full"}),dateTime:hs({formats:u_,defaultWidth:"full"})},f_=h_,p_={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},m_=function(n,e,t,i){return p_[n]},g_=m_,v_={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},x_={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},b_={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},__={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},y_={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},w_={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},S_=function(n,e){var t=Number(n),i=t%100;if(i>20||i<10)switch(i%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},M_={ordinalNumber:S_,era:co({values:v_,defaultWidth:"wide"}),quarter:co({values:x_,defaultWidth:"wide",argumentCallback:function(n){return n-1}}),month:co({values:b_,defaultWidth:"wide"}),day:co({values:__,defaultWidth:"wide"}),dayPeriod:co({values:y_,defaultWidth:"wide",formattingValues:w_,defaultFormattingWidth:"wide"})},C_=M_,T_=/^(\d+)(th|st|nd|rd)?/i,E_=/\d+/i,A_={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},P_={any:[/^b/i,/^(a|c)/i]},R_={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},L_={any:[/1/i,/2/i,/3/i,/4/i]},D_={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},I_={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},z_={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},F_={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},B_={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},k_={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},O_={ordinalNumber:i_({matchPattern:T_,parsePattern:E_,valueCallback:function(n){return parseInt(n,10)}}),era:uo({matchPatterns:A_,defaultMatchWidth:"wide",parsePatterns:P_,defaultParseWidth:"any"}),quarter:uo({matchPatterns:R_,defaultMatchWidth:"wide",parsePatterns:L_,defaultParseWidth:"any",valueCallback:function(n){return n+1}}),month:uo({matchPatterns:D_,defaultMatchWidth:"wide",parsePatterns:I_,defaultParseWidth:"any"}),day:uo({matchPatterns:z_,defaultMatchWidth:"wide",parsePatterns:F_,defaultParseWidth:"any"}),dayPeriod:uo({matchPatterns:B_,defaultMatchWidth:"any",parsePatterns:k_,defaultParseWidth:"any"})},N_=O_,$_={code:"en-US",formatDistance:l_,formatLong:f_,formatRelative:g_,localize:C_,match:N_,options:{weekStartsOn:0,firstWeekContainsDate:1}},U_=$_;const H_={name:"en-US",locale:U_};var V_=H_;function ja(n){const{mergedLocaleRef:e,mergedDateLocaleRef:t}=pt(Yr,null)||{},i=ue(()=>{var o,s;return(s=(o=e==null?void 0:e.value)===null||o===void 0?void 0:o[n])!==null&&s!==void 0?s:n_[n]});return{dateLocaleRef:ue(()=>{var o;return(o=t==null?void 0:t.value)!==null&&o!==void 0?o:V_}),localeRef:i}}function Jr(n,e,t){if(!e)return;const i=sr(),r=pt(Yr,null),o=()=>{const s=t==null?void 0:t.value;e.mount({id:s===void 0?n:s+n,head:!0,anchorMetaName:Co,props:{bPrefix:s?`.${s}-`:void 0},ssr:i}),r!=null&&r.preflightStyleDisabled||lf.mount({id:"n-global",head:!0,anchorMetaName:Co,ssr:i})};i?o():Lo(o)}function Kt(n,e,t,i){var r;t||uh("useThemeClass","cssVarsRef is not passed");const o=(r=pt(Yr,null))===null||r===void 0?void 0:r.mergedThemeHashRef,s=oe(""),a=sr();let l;const c=`__${n}`,d=()=>{let u=c;const h=e?e.value:void 0,g=o==null?void 0:o.value;g&&(u+="-"+g),h&&(u+="-"+h);const{themeOverrides:m,builtinThemeOverrides:p}=i;m&&(u+="-"+hl(JSON.stringify(m))),p&&(u+="-"+hl(JSON.stringify(p))),s.value=u,l=()=>{const f=t.value;let v="";for(const y in f)v+=`${y}: ${f[y]};`;te(`.${u}`,v).mount({id:u,ssr:a}),l=void 0}};return Nn(()=>{d()}),{themeClass:s,onRender:()=>{l==null||l()}}}function cf(n,e){return Be({name:_x(n),setup(){var t;const i=(t=pt(Yr,null))===null||t===void 0?void 0:t.mergedIconsRef;return()=>{var r;const o=(r=i==null?void 0:i.value)===null||r===void 0?void 0:r[n];return o?o():e}}})}var W_=Be({name:"Checkmark",render(){return T("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},T("g",{fill:"none"},T("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),G_=cf("close",T("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},T("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},T("g",{fill:"currentColor","fill-rule":"nonzero"},T("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),j_=Be({name:"Eye",render(){return T("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},T("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),T("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),q_=Be({name:"EyeOff",render(){return T("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},T("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),T("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),T("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),T("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),T("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),X_=Be({name:"Empty",render(){return T("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},T("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),T("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Y_=Be({name:"ChevronDown",render(){return T("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},T("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),K_=cf("clear",T("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},T("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},T("g",{fill:"currentColor","fill-rule":"nonzero"},T("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),qa=Be({name:"BaseIconSwitchTransition",setup(n,{slots:e}){const t=ar();return()=>T(Tn,{name:"icon-switch-transition",appear:t.value},e)}}),Z_=Be({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(n,{slots:e}){function t(a){n.width?a.style.maxWidth=`${a.offsetWidth}px`:a.style.maxHeight=`${a.offsetHeight}px`,a.offsetWidth}function i(a){n.width?a.style.maxWidth="0":a.style.maxHeight="0",a.offsetWidth;const{onLeave:l}=n;l&&l()}function r(a){n.width?a.style.maxWidth="":a.style.maxHeight="";const{onAfterLeave:l}=n;l&&l()}function o(a){if(a.style.transition="none",n.width){const l=a.offsetWidth;a.style.maxWidth="0",a.offsetWidth,a.style.transition="",a.style.maxWidth=`${l}px`}else if(n.reverse)a.style.maxHeight=`${a.offsetHeight}px`,a.offsetHeight,a.style.transition="",a.style.maxHeight="0";else{const l=a.offsetHeight;a.style.maxHeight="0",a.offsetWidth,a.style.transition="",a.style.maxHeight=`${l}px`}a.offsetWidth}function s(a){var l;n.width?a.style.maxWidth="":n.reverse||(a.style.maxHeight=""),(l=n.onAfterEnter)===null||l===void 0||l.call(n)}return()=>{const a=n.group?Cp:Tn;return T(a,{name:n.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:n.mode,appear:n.appear,onEnter:o,onAfterEnter:s,onBeforeLeave:t,onLeave:i,onAfterLeave:r},e)}}}),J_=J("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[te("svg",`
 height: 1em;
 width: 1em;
 `)]),ir=Be({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(n){Jr("-base-icon",J_,nt(n,"clsPrefix"))},render(){return T("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),Q_=J("base-close",`
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
`,[Se("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),te("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),St("disabled",[te("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),te("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),te("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),te("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),te("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),Se("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),Se("round",[te("&::before",`
 border-radius: 50%;
 `)])]),df=Be({name:"BaseClose",props:{clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(n){return Jr("-base-close",Q_,nt(n,"clsPrefix")),()=>{const{clsPrefix:e,disabled:t,absolute:i,round:r}=n;return T("button",{tabindex:t||!n.focusable?-1:0,"aria-disabled":t,"aria-label":"close",disabled:t,class:[`${e}-base-close`,i&&`${e}-base-close--absolute`,t&&`${e}-base-close--disabled`,r&&`${e}-base-close--round`],onMousedown:o=>{n.focusable||o.preventDefault()},onClick:n.onClick},T(ir,{clsPrefix:e},{default:()=>T(G_,null)}))}}}),ey=Be({props:{onFocus:Function,onBlur:Function},setup(n){return()=>T("div",{style:"width: 0; height: 0",tabindex:0,onFocus:n.onFocus,onBlur:n.onBlur})}});const{cubicBezierEaseInOut:ty}=Wn;function Vr({originalTransform:n="",left:e=0,top:t=0,transition:i=`all .3s ${ty} !important`}={}){return[te("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:n+" scale(0.75)",left:e,top:t,opacity:0}),te("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${n}`,left:e,top:t,opacity:1}),te("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:e,top:t,transition:i})]}var ny=te([te("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),te("@keyframes loading-layer-rotate",`
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
 `),te("@keyframes loading-left-spin",`
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
 `),te("@keyframes loading-right-spin",`
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
 `),J("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[K("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[Vr()]),K("container",`
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
 `,[Vr({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),Xa=Be({name:"BaseLoading",props:{clsPrefix:{type:String,required:!0},scale:{type:Number,default:1},radius:{type:Number,default:100},strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0},show:{type:Boolean,default:!0}},setup(n){Jr("-base-loading",ny,nt(n,"clsPrefix"))},render(){const{clsPrefix:n,radius:e,strokeWidth:t,stroke:i,scale:r}=this,o=e/r;return T("div",{class:`${n}-base-loading`,role:"img","aria-label":"loading"},T(qa,null,{default:()=>this.show?T("div",{key:"icon",class:`${n}-base-loading__transition-wrapper`},T("div",{class:`${n}-base-loading__container`},T("div",{class:`${n}-base-loading__container-layer`},T("div",{class:`${n}-base-loading__container-layer-left`},T("svg",{class:`${n}-base-loading__svg`,viewBox:`0 0 ${2*o} ${2*o}`,xmlns:"http://www.w3.org/2000/svg",style:{color:i}},T("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:o,cy:o,r:e-t/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e}))),T("div",{class:`${n}-base-loading__container-layer-patch`},T("svg",{class:`${n}-base-loading__svg`,viewBox:`0 0 ${2*o} ${2*o}`,xmlns:"http://www.w3.org/2000/svg",style:{color:i}},T("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:o,cy:o,r:e-t/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e}))),T("div",{class:`${n}-base-loading__container-layer-right`},T("svg",{class:`${n}-base-loading__svg`,viewBox:`0 0 ${2*o} ${2*o}`,xmlns:"http://www.w3.org/2000/svg",style:{color:i}},T("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:o,cy:o,r:e-t/2,"stroke-dasharray":4.91*e,"stroke-dashoffset":2.46*e})))))):T("div",{key:"placeholder",class:`${n}-base-loading__placeholder`},this.$slots)}))}});function bd(n){return Array.isArray(n)?n:[n]}const Sl={STOP:"STOP"};function uf(n,e){const t=e(n);n.children!==void 0&&t!==Sl.STOP&&n.children.forEach(i=>uf(i,e))}function iy(n,e={}){const{preserveGroup:t=!1}=e,i=[],r=t?s=>{s.isLeaf||(i.push(s.key),o(s.children))}:s=>{s.isLeaf||(s.isGroup||i.push(s.key),o(s.children))};function o(s){s.forEach(r)}return o(n),i}function ry(n,e){const{isLeaf:t}=n;return t!==void 0?t:!e(n)}function oy(n){return n.children}function ay(n){return n.key}function sy(){return!1}function ly(n,e){const{isLeaf:t}=n;return!(t===!1&&!Array.isArray(e(n)))}function cy(n){return n.disabled===!0}function dy(n,e){return n.isLeaf===!1&&!Array.isArray(e(n))}function fs(n){var e;return n==null?[]:Array.isArray(n)?n:(e=n.checkedKeys)!==null&&e!==void 0?e:[]}function ps(n){var e;return n==null||Array.isArray(n)?[]:(e=n.indeterminateKeys)!==null&&e!==void 0?e:[]}function uy(n,e){const t=new Set(n);return e.forEach(i=>{t.has(i)||t.add(i)}),Array.from(t)}function hy(n,e){const t=new Set(n);return e.forEach(i=>{t.has(i)&&t.delete(i)}),Array.from(t)}function fy(n){return(n==null?void 0:n.type)==="group"}function py(n){const e=new Map;return n.forEach((t,i)=>{e.set(t.key,i)}),t=>{var i;return(i=e.get(t))!==null&&i!==void 0?i:null}}class my extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function gy(n,e,t,i){return za(e.concat(n),t,i,!1)}function vy(n,e){const t=new Set;return n.forEach(i=>{const r=e.treeNodeMap.get(i);if(r!==void 0){let o=r.parent;for(;o!==null&&!(o.disabled||t.has(o.key));)t.add(o.key),o=o.parent}}),t}function xy(n,e,t,i){const r=za(e,t,i,!1),o=za(n,t,i,!0),s=vy(n,t),a=[];return r.forEach(l=>{(o.has(l)||s.has(l))&&a.push(l)}),a.forEach(l=>r.delete(l)),r}function ms(n,e){const{checkedKeys:t,keysToCheck:i,keysToUncheck:r,indeterminateKeys:o,cascade:s,leafOnly:a,checkStrategy:l,allowNotLoaded:c}=n;if(!s)return i!==void 0?{checkedKeys:uy(t,i),indeterminateKeys:Array.from(o)}:r!==void 0?{checkedKeys:hy(t,r),indeterminateKeys:Array.from(o)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(o)};const{levelTreeNodeMap:d}=e;let u;r!==void 0?u=xy(r,t,e,c):i!==void 0?u=gy(i,t,e,c):u=za(t,e,c,!1);const h=l==="parent",g=l==="child"||a,m=u,p=new Set,f=Math.max.apply(null,Array.from(d.keys()));for(let v=f;v>=0;v-=1){const y=v===0,E=d.get(v);for(const _ of E){if(_.isLeaf)continue;const{key:M,shallowLoaded:A}=_;if(g&&A&&_.children.forEach(P=>{!P.disabled&&!P.isLeaf&&P.shallowLoaded&&m.has(P.key)&&m.delete(P.key)}),_.disabled||!A)continue;let w=!0,x=!1,S=!0;for(const P of _.children){const D=P.key;if(!P.disabled){if(S&&(S=!1),m.has(D))x=!0;else if(p.has(D)){x=!0,w=!1;break}else if(w=!1,x)break}}w&&!S?(h&&_.children.forEach(P=>{!P.disabled&&m.has(P.key)&&m.delete(P.key)}),m.add(M)):x&&p.add(M),y&&g&&m.has(M)&&m.delete(M)}}return{checkedKeys:Array.from(m),indeterminateKeys:Array.from(p)}}function za(n,e,t,i){const{treeNodeMap:r,getChildren:o}=e,s=new Set,a=new Set(n);return n.forEach(l=>{const c=r.get(l);c!==void 0&&uf(c,d=>{if(d.disabled)return Sl.STOP;const{key:u}=d;if(!s.has(u)&&(s.add(u),a.add(u),dy(d.rawNode,o))){if(i)return Sl.STOP;if(!t)throw new my}})}),a}function by(n,{includeGroup:e=!1,includeSelf:t=!0},i){var r;const o=i.treeNodeMap;let s=n==null?null:(r=o.get(n))!==null&&r!==void 0?r:null;const a={keyPath:[],treeNodePath:[],treeNode:s};if(s!=null&&s.ignored)return a.treeNode=null,a;for(;s;)!s.ignored&&(e||!s.isGroup)&&a.treeNodePath.push(s),s=s.parent;return a.treeNodePath.reverse(),t||a.treeNodePath.pop(),a.keyPath=a.treeNodePath.map(l=>l.key),a}function _y(n){if(n.length===0)return null;const e=n[0];return e.isGroup||e.ignored||e.disabled?e.getNext():e}function yy(n,e){const t=n.siblings,i=t.length,{index:r}=n;return e?t[(r+1)%i]:r===t.length-1?null:t[r+1]}function _d(n,e,{loop:t=!1,includeDisabled:i=!1}={}){const r=e==="prev"?wy:yy,o={reverse:e==="prev"};let s=!1,a=null;function l(c){if(c!==null){if(c===n){if(!s)s=!0;else if(!n.disabled&&!n.isGroup){a=n;return}}else if((!c.disabled||i)&&!c.ignored&&!c.isGroup){a=c;return}if(c.isGroup){const d=uc(c,o);d!==null?a=d:l(r(c,t))}else{const d=r(c,!1);if(d!==null)l(d);else{const u=Sy(c);u!=null&&u.isGroup?l(r(u,t)):t&&l(r(c,!0))}}}}return l(n),a}function wy(n,e){const t=n.siblings,i=t.length,{index:r}=n;return e?t[(r-1+i)%i]:r===0?null:t[r-1]}function Sy(n){return n.parent}function uc(n,e={}){const{reverse:t=!1}=e,{children:i}=n;if(i){const{length:r}=i,o=t?r-1:0,s=t?-1:r,a=t?-1:1;for(let l=o;l!==s;l+=a){const c=i[l];if(!c.disabled&&!c.ignored)if(c.isGroup){const d=uc(c,e);if(d!==null)return d}else return c}}return null}const My={getChild(){return this.ignored?null:uc(this)},getParent(){const{parent:n}=this;return n!=null&&n.isGroup?n.getParent():n},getNext(n={}){return _d(this,"next",n)},getPrev(n={}){return _d(this,"prev",n)}};function Cy(n,e){const t=e?new Set(e):void 0,i=[];function r(o){o.forEach(s=>{i.push(s),!(s.isLeaf||!s.children||s.ignored)&&(s.isGroup||t===void 0||t.has(s.key))&&r(s.children)})}return r(n),i}function Ty(n,e){const t=n.key;for(;e;){if(e.key===t)return!0;e=e.parent}return!1}function hf(n,e,t,i,r,o=null,s=0){const a=[];return n.forEach((l,c)=>{var d;const u=Object.create(i);if(u.rawNode=l,u.siblings=a,u.level=s,u.index=c,u.isFirstChild=c===0,u.isLastChild=c+1===n.length,u.parent=o,!u.ignored){const h=r(l);Array.isArray(h)&&(u.children=hf(h,e,t,i,r,u,s+1))}a.push(u),e.set(u.key,u),t.has(s)||t.set(s,[]),(d=t.get(s))===null||d===void 0||d.push(u)}),a}function Ey(n,e={}){var t;const i=new Map,r=new Map,{getDisabled:o=cy,getIgnored:s=sy,getIsGroup:a=fy,getKey:l=ay}=e,c=(t=e.getChildren)!==null&&t!==void 0?t:oy,d=e.ignoreEmptyChildren?_=>{const M=c(_);return Array.isArray(M)?M.length?M:null:M}:c,u=Object.assign({get key(){return l(this.rawNode)},get disabled(){return o(this.rawNode)},get isGroup(){return a(this.rawNode)},get isLeaf(){return ry(this.rawNode,d)},get shallowLoaded(){return ly(this.rawNode,d)},get ignored(){return s(this.rawNode)},contains(_){return Ty(this,_)}},My),h=hf(n,i,r,u,d);function g(_){if(_==null)return null;const M=i.get(_);return M&&!M.isGroup&&!M.ignored?M:null}function m(_){if(_==null)return null;const M=i.get(_);return M&&!M.ignored?M:null}function p(_,M){const A=m(_);return A?A.getPrev(M):null}function f(_,M){const A=m(_);return A?A.getNext(M):null}function v(_){const M=m(_);return M?M.getParent():null}function y(_){const M=m(_);return M?M.getChild():null}const E={treeNodes:h,treeNodeMap:i,levelTreeNodeMap:r,maxLevel:Math.max(...r.keys()),getChildren:d,getFlattenedNodes(_){return Cy(h,_)},getNode:g,getPrev:p,getNext:f,getParent:v,getChild:y,getFirstAvailableNode(){return _y(h)},getPath(_,M={}){return by(_,M,E)},getCheckedKeys(_,M={}){const{cascade:A=!0,leafOnly:w=!1,checkStrategy:x="all",allowNotLoaded:S=!1}=M;return ms({checkedKeys:fs(_),indeterminateKeys:ps(_),cascade:A,leafOnly:w,checkStrategy:x,allowNotLoaded:S},E)},check(_,M,A={}){const{cascade:w=!0,leafOnly:x=!1,checkStrategy:S="all",allowNotLoaded:P=!1}=A;return ms({checkedKeys:fs(M),indeterminateKeys:ps(M),keysToCheck:_==null?[]:bd(_),cascade:w,leafOnly:x,checkStrategy:S,allowNotLoaded:P},E)},uncheck(_,M,A={}){const{cascade:w=!0,leafOnly:x=!1,checkStrategy:S="all",allowNotLoaded:P=!1}=A;return ms({checkedKeys:fs(M),indeterminateKeys:ps(M),keysToUncheck:_==null?[]:bd(_),cascade:w,leafOnly:x,checkStrategy:S,allowNotLoaded:P},E)},getNonLeafKeys(_={}){return iy(h,_)}};return E}const Ne={neutralBase:"#FFF",neutralInvertBase:"#000",neutralTextBase:"#000",neutralPopover:"#fff",neutralCard:"#fff",neutralModal:"#fff",neutralBody:"#fff",alpha1:"0.82",alpha2:"0.72",alpha3:"0.38",alpha4:"0.24",alpha5:"0.18",alphaClose:"0.6",alphaDisabled:"0.5",alphaDisabledInput:"0.02",alphaPending:"0.05",alphaTablePending:"0.02",alphaPressed:"0.07",alphaAvatar:"0.2",alphaRail:"0.14",alphaProgressRail:".08",alphaBorder:"0.12",alphaDivider:"0.06",alphaInput:"0",alphaAction:"0.02",alphaTab:"0.04",alphaScrollbar:"0.25",alphaScrollbarHover:"0.4",alphaCode:"0.05",alphaTag:"0.02",primaryHover:"#36ad6a",primaryDefault:"#18a058",primaryActive:"#0c7a43",primarySuppl:"#36ad6a",infoHover:"#4098fc",infoDefault:"#2080f0",infoActive:"#1060c9",infoSuppl:"#4098fc",errorHover:"#de576d",errorDefault:"#d03050",errorActive:"#ab1f3f",errorSuppl:"#de576d",warningHover:"#fcb040",warningDefault:"#f0a020",warningActive:"#c97c10",warningSuppl:"#fcb040",successHover:"#36ad6a",successDefault:"#18a058",successActive:"#0c7a43",successSuppl:"#36ad6a"},Ay=It(Ne.neutralBase),ff=It(Ne.neutralInvertBase),Py="rgba("+ff.slice(0,3).join(", ")+", ";function yd(n){return Py+String(n)+")"}function Bt(n){const e=Array.from(ff);return e[3]=Number(n),Vl(Ay,e)}const Ry=Object.assign(Object.assign({name:"common"},Wn),{baseColor:Ne.neutralBase,primaryColor:Ne.primaryDefault,primaryColorHover:Ne.primaryHover,primaryColorPressed:Ne.primaryActive,primaryColorSuppl:Ne.primarySuppl,infoColor:Ne.infoDefault,infoColorHover:Ne.infoHover,infoColorPressed:Ne.infoActive,infoColorSuppl:Ne.infoSuppl,successColor:Ne.successDefault,successColorHover:Ne.successHover,successColorPressed:Ne.successActive,successColorSuppl:Ne.successSuppl,warningColor:Ne.warningDefault,warningColorHover:Ne.warningHover,warningColorPressed:Ne.warningActive,warningColorSuppl:Ne.warningSuppl,errorColor:Ne.errorDefault,errorColorHover:Ne.errorHover,errorColorPressed:Ne.errorActive,errorColorSuppl:Ne.errorSuppl,textColorBase:Ne.neutralTextBase,textColor1:"rgb(31, 34, 37)",textColor2:"rgb(51, 54, 57)",textColor3:"rgb(118, 124, 130)",textColorDisabled:Bt(Ne.alpha4),placeholderColor:Bt(Ne.alpha4),placeholderColorDisabled:Bt(Ne.alpha5),iconColor:Bt(Ne.alpha4),iconColorHover:Ho(Bt(Ne.alpha4),{lightness:.75}),iconColorPressed:Ho(Bt(Ne.alpha4),{lightness:.9}),iconColorDisabled:Bt(Ne.alpha5),opacity1:Ne.alpha1,opacity2:Ne.alpha2,opacity3:Ne.alpha3,opacity4:Ne.alpha4,opacity5:Ne.alpha5,dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:Bt(Number(Ne.alphaClose)),closeIconColorHover:Bt(Number(Ne.alphaClose)),closeIconColorPressed:Bt(Number(Ne.alphaClose)),closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:Bt(Ne.alpha4),clearColorHover:Ho(Bt(Ne.alpha4),{lightness:.75}),clearColorPressed:Ho(Bt(Ne.alpha4),{lightness:.9}),scrollbarColor:yd(Ne.alphaScrollbar),scrollbarColorHover:yd(Ne.alphaScrollbarHover),scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:Bt(Ne.alphaProgressRail),railColor:"rgb(219, 219, 223)",popoverColor:Ne.neutralPopover,tableColor:Ne.neutralCard,cardColor:Ne.neutralCard,modalColor:Ne.neutralModal,bodyColor:Ne.neutralBody,tagColor:"#eee",avatarColor:Bt(Ne.alphaAvatar),invertedColor:"rgb(0, 20, 40)",inputColor:Bt(Ne.alphaInput),codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:Ne.alphaDisabled,inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"});var on=Ry,Ly={iconSizeSmall:"34px",iconSizeMedium:"40px",iconSizeLarge:"46px",iconSizeHuge:"52px"};const Dy=n=>{const{textColorDisabled:e,iconColor:t,textColor2:i,fontSizeSmall:r,fontSizeMedium:o,fontSizeLarge:s,fontSizeHuge:a}=n;return Object.assign(Object.assign({},Ly),{fontSizeSmall:r,fontSizeMedium:o,fontSizeLarge:s,fontSizeHuge:a,textColor:e,iconColor:t,extraTextColor:i})},Iy={name:"Empty",common:on,self:Dy};var pf=Iy,zy=J("empty",`
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
 `,[te("+",[K("description",`
 margin-top: 8px;
 `)])]),K("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),K("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]);const Fy=Object.assign(Object.assign({},lt.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function});var By=Be({name:"Empty",props:Fy,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=rn(n),i=lt("Empty","-empty",zy,pf,n,e),{localeRef:r}=ja("Empty"),o=pt(Yr,null),s=ue(()=>{var d,u,h;return(d=n.description)!==null&&d!==void 0?d:(h=(u=o==null?void 0:o.mergedComponentPropsRef.value)===null||u===void 0?void 0:u.Empty)===null||h===void 0?void 0:h.description}),a=ue(()=>{var d,u;return((u=(d=o==null?void 0:o.mergedComponentPropsRef.value)===null||d===void 0?void 0:d.Empty)===null||u===void 0?void 0:u.renderIcon)||(()=>T(X_,null))}),l=ue(()=>{const{size:d}=n,{common:{cubicBezierEaseInOut:u},self:{[Re("iconSize",d)]:h,[Re("fontSize",d)]:g,textColor:m,iconColor:p,extraTextColor:f}}=i.value;return{"--n-icon-size":h,"--n-font-size":g,"--n-bezier":u,"--n-text-color":m,"--n-icon-color":p,"--n-extra-text-color":f}}),c=t?Kt("empty",ue(()=>{let d="";const{size:u}=n;return d+=u[0],d}),l,n):void 0;return{mergedClsPrefix:e,mergedRenderIcon:a,localizedDescription:ue(()=>s.value||r.value.description),cssVars:t?void 0:l,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){const{$slots:n,mergedClsPrefix:e,onRender:t}=this;return t==null||t(),T("div",{class:[`${e}-empty`,this.themeClass],style:this.cssVars},this.showIcon?T("div",{class:`${e}-empty__icon`},n.icon?n.icon():T(ir,{clsPrefix:e},{default:this.mergedRenderIcon})):null,this.showDescription?T("div",{class:`${e}-empty__description`},n.default?n.default():this.localizedDescription):null,n.extra?T("div",{class:`${e}-empty__extra`},n.extra()):null)}});const ky=n=>{const{scrollbarColor:e,scrollbarColorHover:t}=n;return{color:e,colorHover:t}},Oy={name:"Scrollbar",common:on,self:ky};var hc=Oy;const wd=Be({render(){var n,e;return(e=(n=this.$slots).default)===null||e===void 0?void 0:e.call(n)}}),{cubicBezierEaseInOut:Sd}=Wn;function mf({name:n="fade-in",enterDuration:e="0.2s",leaveDuration:t="0.2s",enterCubicBezier:i=Sd,leaveCubicBezier:r=Sd}={}){return[te(`&.${n}-transition-enter-active`,{transition:`all ${e} ${i}!important`}),te(`&.${n}-transition-leave-active`,{transition:`all ${t} ${r}!important`}),te(`&.${n}-transition-enter-from, &.${n}-transition-leave-to`,{opacity:0}),te(`&.${n}-transition-leave-from, &.${n}-transition-enter-to`,{opacity:1})]}var Ny=J("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[te(">",[J("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[te("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),te(">",[J("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])]),J("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 `,[Se("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[te(">",[K("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),Se("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[te(">",[K("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),Se("disabled",[te(">",[K("scrollbar",{pointerEvents:"none"})])]),te(">",[K("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[mf(),te("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]);const $y=Object.assign(Object.assign({},lt.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function}),gf=Be({name:"Scrollbar",props:$y,inheritAttrs:!1,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=rn(n),i=oe(null),r=oe(null),o=oe(null),s=oe(null),a=oe(null),l=oe(null),c=oe(null),d=oe(null),u=oe(null),h=oe(null),g=oe(null),m=oe(0),p=oe(0),f=oe(!1),v=oe(!1);let y=!1,E=!1,_,M,A=0,w=0,x=0,S=0;const P=Pm(),D=ue(()=>{const{value:V}=d,{value:z}=l,{value:H}=h;return V===null||z===null||H===null?0:Math.min(V,H*V/z+n.size*1.5)}),$=ue(()=>`${D.value}px`),Z=ue(()=>{const{value:V}=u,{value:z}=c,{value:H}=g;return V===null||z===null||H===null?0:H*V/z+n.size*1.5}),L=ue(()=>`${Z.value}px`),N=ue(()=>{const{value:V}=d,{value:z}=m,{value:H}=l,{value:ce}=h;if(V===null||H===null||ce===null)return 0;{const ne=H-V;return ne?z/ne*(ce-D.value):0}}),O=ue(()=>`${N.value}px`),U=ue(()=>{const{value:V}=u,{value:z}=p,{value:H}=c,{value:ce}=g;if(V===null||H===null||ce===null)return 0;{const ne=H-V;return ne?z/ne*(ce-Z.value):0}}),Y=ue(()=>`${U.value}px`),I=ue(()=>{const{value:V}=d,{value:z}=l;return V!==null&&z!==null&&z>V}),k=ue(()=>{const{value:V}=u,{value:z}=c;return V!==null&&z!==null&&z>V}),se=ue(()=>{const{trigger:V}=n;return V==="none"||f.value}),ae=ue(()=>{const{trigger:V}=n;return V==="none"||v.value}),pe=ue(()=>{const{container:V}=n;return V?V():r.value}),Ee=ue(()=>{const{content:V}=n;return V?V():o.value});let Pe=!1,W=!1;lh(()=>{if(Pe=!1,!W){W=!0;return}n.container||me({top:m.value,left:p.value})}),ch(()=>{Pe=!0,W||(W=!0)});const $e=()=>{Pe||b()},Le=V=>{if(Pe)return;const{onResize:z}=n;z&&z(V),b()},me=(V,z)=>{if(!n.scrollable)return;if(typeof V=="number"){ke(z!=null?z:0,V,0,!1,"auto");return}const{left:H,top:ce,index:ne,elSize:ge,position:Ce,behavior:be,el:We,debounce:ht=!0}=V;(H!==void 0||ce!==void 0)&&ke(H!=null?H:0,ce!=null?ce:0,0,!1,be),We!==void 0?ke(0,We.offsetTop,We.offsetHeight,ht,be):ne!==void 0&&ge!==void 0?ke(0,ne*ge,ge,ht,be):Ce==="bottom"?ke(0,Number.MAX_SAFE_INTEGER,0,!1,be):Ce==="top"&&ke(0,0,0,!1,be)},_e=(V,z)=>{if(!n.scrollable)return;const{value:H}=pe;!H||(typeof V=="object"?H.scrollBy(V):H.scrollBy(V,z||0))};function ke(V,z,H,ce,ne){const{value:ge}=pe;if(!!ge){if(ce){const{scrollTop:Ce,offsetHeight:be}=ge;if(z>Ce){z+H<=Ce+be||ge.scrollTo({left:V,top:z+H-be,behavior:ne});return}}ge.scrollTo({left:V,top:z,behavior:ne})}}function Oe(){fe(),ze(),b()}function Fe(){Ye()}function Ye(){Ze(),rt()}function Ze(){M!==void 0&&window.clearTimeout(M),M=window.setTimeout(()=>{v.value=!1},n.duration)}function rt(){_!==void 0&&window.clearTimeout(_),_=window.setTimeout(()=>{f.value=!1},n.duration)}function fe(){_!==void 0&&window.clearTimeout(_),f.value=!0}function ze(){M!==void 0&&window.clearTimeout(M),v.value=!0}function Ie(V){const{onScroll:z}=n;z&&z(V),Te()}function Te(){const{value:V}=pe;V&&(m.value=V.scrollTop,p.value=V.scrollLeft)}function re(){const{value:V}=Ee;V&&(l.value=V.offsetHeight,c.value=V.offsetWidth);const{value:z}=pe;z&&(d.value=z.offsetHeight,u.value=z.offsetWidth);const{value:H}=a,{value:ce}=s;H&&(g.value=H.offsetWidth),ce&&(h.value=ce.offsetHeight)}function C(){const{value:V}=pe;V&&(m.value=V.scrollTop,p.value=V.scrollLeft,d.value=V.offsetHeight,u.value=V.offsetWidth,l.value=V.scrollHeight,c.value=V.scrollWidth);const{value:z}=a,{value:H}=s;z&&(g.value=z.offsetWidth),H&&(h.value=H.offsetHeight)}function b(){!n.scrollable||(n.useUnifiedContainer?C():(re(),Te()))}function F(V){var z;return!(!((z=i.value)===null||z===void 0)&&z.contains(V.target))}function q(V){V.preventDefault(),V.stopPropagation(),E=!0,ct("mousemove",window,le,!0),ct("mouseup",window,he,!0),w=p.value,x=V.clientX}function le(V){if(!E)return;_!==void 0&&window.clearTimeout(_),M!==void 0&&window.clearTimeout(M);const{value:z}=u,{value:H}=c,{value:ce}=Z;if(z===null||H===null)return;const ge=(V.clientX-x)*(H-z)/(z-ce),Ce=H-z;let be=w+ge;be=Math.min(Ce,be),be=Math.max(be,0);const{value:We}=pe;if(We){We.scrollLeft=be;const{internalOnUpdateScrollLeft:ht}=n;ht&&ht(be)}}function he(V){V.preventDefault(),V.stopPropagation(),at("mousemove",window,le,!0),at("mouseup",window,he,!0),E=!1,b(),F(V)&&Ye()}function De(V){V.preventDefault(),V.stopPropagation(),y=!0,ct("mousemove",window,Q,!0),ct("mouseup",window,Me,!0),A=m.value,S=V.clientY}function Q(V){if(!y)return;_!==void 0&&window.clearTimeout(_),M!==void 0&&window.clearTimeout(M);const{value:z}=d,{value:H}=l,{value:ce}=D;if(z===null||H===null)return;const ge=(V.clientY-S)*(H-z)/(z-ce),Ce=H-z;let be=A+ge;be=Math.min(Ce,be),be=Math.max(be,0);const{value:We}=pe;We&&(We.scrollTop=be)}function Me(V){V.preventDefault(),V.stopPropagation(),at("mousemove",window,Q,!0),at("mouseup",window,Me,!0),y=!1,b(),F(V)&&Ye()}Nn(()=>{const{value:V}=k,{value:z}=I,{value:H}=e,{value:ce}=a,{value:ne}=s;ce&&(V?ce.classList.remove(`${H}-scrollbar-rail--disabled`):ce.classList.add(`${H}-scrollbar-rail--disabled`)),ne&&(z?ne.classList.remove(`${H}-scrollbar-rail--disabled`):ne.classList.add(`${H}-scrollbar-rail--disabled`))}),Wt(()=>{n.container||b()}),Gt(()=>{_!==void 0&&window.clearTimeout(_),M!==void 0&&window.clearTimeout(M),at("mousemove",window,Q,!0),at("mouseup",window,Me,!0)});const ye=lt("Scrollbar","-scrollbar",Ny,hc,n,e),we=ue(()=>{const{common:{cubicBezierEaseInOut:V,scrollbarBorderRadius:z,scrollbarHeight:H,scrollbarWidth:ce},self:{color:ne,colorHover:ge}}=ye.value;return{"--n-scrollbar-bezier":V,"--n-scrollbar-color":ne,"--n-scrollbar-color-hover":ge,"--n-scrollbar-border-radius":z,"--n-scrollbar-width":ce,"--n-scrollbar-height":H}}),B=t?Kt("scrollbar",void 0,we,n):void 0;return Object.assign(Object.assign({},{scrollTo:me,scrollBy:_e,sync:b,syncUnifiedContainer:C,handleMouseEnterWrapper:Oe,handleMouseLeaveWrapper:Fe}),{mergedClsPrefix:e,containerScrollTop:m,wrapperRef:i,containerRef:r,contentRef:o,yRailRef:s,xRailRef:a,needYBar:I,needXBar:k,yBarSizePx:$,xBarSizePx:L,yBarTopPx:O,xBarLeftPx:Y,isShowXBar:se,isShowYBar:ae,isIos:P,handleScroll:Ie,handleContentResize:$e,handleContainerResize:Le,handleYScrollMouseDown:De,handleXScrollMouseDown:q,cssVars:t?void 0:we,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender})},render(){var n;const{$slots:e,mergedClsPrefix:t,triggerDisplayManually:i}=this;if(!this.scrollable)return(n=e.default)===null||n===void 0?void 0:n.call(e);const r=()=>{var o,s;(o=this.onRender)===null||o===void 0||o.call(this);const a=this.trigger==="none";return T("div",Oa(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${t}-scrollbar`,this.themeClass],style:this.cssVars,onMouseenter:i?void 0:this.handleMouseEnterWrapper,onMouseleave:i?void 0:this.handleMouseLeaveWrapper}),[this.container?(s=e.default)===null||s===void 0?void 0:s.call(e):T("div",{role:"none",ref:"containerRef",class:[`${t}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},T(wo,{onResize:this.handleContentResize},{default:()=>T("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${t}-scrollbar-content`,this.contentClass]},e)})),T("div",{ref:"yRailRef",class:`${t}-scrollbar-rail ${t}-scrollbar-rail--vertical`,style:this.verticalRailStyle,"aria-hidden":!0},T(a?wd:Tn,a?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?T("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),T("div",{ref:"xRailRef",class:`${t}-scrollbar-rail ${t}-scrollbar-rail--horizontal`,style:this.horizontalRailStyle,"aria-hidden":!0},T(a?wd:Tn,a?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?T("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,left:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])};return this.container?r():T(wo,{onResize:this.handleContainerResize},{default:r})}});var Ya=gf;const Uy=gf;var Hy={height:"calc(var(--n-option-height) * 7.6)",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"};const Vy=n=>{const{borderRadius:e,popoverColor:t,textColor3:i,dividerColor:r,textColor2:o,primaryColorPressed:s,textColorDisabled:a,primaryColor:l,opacityDisabled:c,hoverColor:d,fontSizeSmall:u,fontSizeMedium:h,fontSizeLarge:g,fontSizeHuge:m,heightSmall:p,heightMedium:f,heightLarge:v,heightHuge:y}=n;return Object.assign(Object.assign({},Hy),{optionFontSizeSmall:u,optionFontSizeMedium:h,optionFontSizeLarge:g,optionFontSizeHuge:m,optionHeightSmall:p,optionHeightMedium:f,optionHeightLarge:v,optionHeightHuge:y,borderRadius:e,color:t,groupHeaderTextColor:i,actionDividerColor:r,optionTextColor:o,optionTextColorPressed:s,optionTextColorDisabled:a,optionTextColorActive:l,optionOpacityDisabled:c,optionCheckColor:l,optionColorPending:d,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:d,actionTextColor:o,loadingColor:l})},Wy={name:"InternalSelectMenu",common:on,peers:{Scrollbar:hc,Empty:pf},self:Vy};var vf=Wy;const Gy=T(W_);function jy(n,e){return T(Tn,{name:"fade-in-scale-up-transition"},{default:()=>n?T(ir,{clsPrefix:e,class:`${e}-base-select-option__check`},{default:()=>Gy}):null})}var Md=Be({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(n){const{valueRef:e,pendingTmNodeRef:t,multipleRef:i,valueSetRef:r,renderLabelRef:o,renderOptionRef:s,labelFieldRef:a,valueFieldRef:l,showCheckmarkRef:c,handleOptionClick:d,handleOptionMouseEnter:u}=pt(Gl),h=fn(()=>{const{value:f}=t;return f?n.tmNode.key===f.key:!1});function g(f){const{tmNode:v}=n;v.disabled||d(f,v)}function m(f){const{tmNode:v}=n;v.disabled||u(f,v)}function p(f){const{tmNode:v}=n,{value:y}=h;v.disabled||y||u(f,v)}return{multiple:i,isGrouped:fn(()=>{const{tmNode:f}=n,{parent:v}=f;return v&&v.rawNode.type==="group"}),showCheckmark:c,isPending:h,isSelected:fn(()=>{const{value:f}=e,{value:v}=i;if(f===null)return!1;const y=n.tmNode.rawNode[l.value];if(v){const{value:E}=r;return E.has(y)}else return f===y}),labelField:a,renderLabel:o,renderOption:s,handleMouseMove:p,handleMouseEnter:m,handleClick:g}},render(){const{clsPrefix:n,tmNode:{rawNode:e},isSelected:t,isPending:i,isGrouped:r,showCheckmark:o,renderOption:s,renderLabel:a,handleClick:l,handleMouseEnter:c,handleMouseMove:d}=this,u=jy(t,n),h=a?[a(e,t),o&&u]:[Dr(e[this.labelField],e,t),o&&u],g=T("div",{class:[`${n}-base-select-option`,e.class,{[`${n}-base-select-option--disabled`]:e.disabled,[`${n}-base-select-option--selected`]:t,[`${n}-base-select-option--grouped`]:r,[`${n}-base-select-option--pending`]:i,[`${n}-base-select-option--show-checkmark`]:o}],style:e.style,onClick:l,onMouseenter:c,onMousemove:d},T("div",{class:`${n}-base-select-option__content`},h));return e.render?e.render({node:g,option:e,selected:t}):s?s({node:g,option:e,selected:t}):g}}),Cd=Be({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:n,renderOptionRef:e,labelFieldRef:t}=pt(Gl);return{labelField:t,renderLabel:n,renderOption:e}},render(){const{clsPrefix:n,renderLabel:e,renderOption:t,tmNode:{rawNode:i}}=this,r=e?e(i,!1):Dr(i[this.labelField],i,!1),o=T("div",{class:`${n}-base-select-group-header`},r);return i.render?i.render({node:o,option:i}):t?t({node:o,option:i,selected:!1}):o}});const{cubicBezierEaseIn:Td,cubicBezierEaseOut:Ed}=Wn;function To({transformOrigin:n="inherit",duration:e=".2s",enterScale:t=".9",originalTransform:i="",originalTransition:r=""}={}){return[te("&.fade-in-scale-up-transition-leave-active",{transformOrigin:n,transition:`opacity ${e} ${Td}, transform ${e} ${Td} ${r&&","+r}`}),te("&.fade-in-scale-up-transition-enter-active",{transformOrigin:n,transition:`opacity ${e} ${Ed}, transform ${e} ${Ed} ${r&&","+r}`}),te("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to",{opacity:0,transform:`${i} scale(${t})`}),te("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to",{opacity:1,transform:`${i} scale(1)`})]}var qy=J("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[J("scrollbar",`
 max-height: var(--n-height);
 `),J("virtual-list",`
 max-height: var(--n-height);
 `),J("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[K("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),J("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),J("base-select-menu-option-wrapper",`
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
 `),J("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),J("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[Se("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),te("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),te("&:active",`
 color: var(--n-option-text-color-pressed);
 `),Se("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),Se("pending",[te("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),Se("selected",`
 color: var(--n-option-text-color-active);
 `,[te("&::before",`
 background-color: var(--n-option-color-active);
 `),Se("pending",[te("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),Se("disabled",`
 cursor: not-allowed;
 `,[St("selected",`
 color: var(--n-option-text-color-disabled);
 `),Se("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),K("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[To({enterScale:"0.5"})])])]),Xy=Be({name:"InternalSelectMenu",props:Object.assign(Object.assign({},lt.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},width:[Number,String],autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(n){const e=lt("InternalSelectMenu","-internal-select-menu",qy,vf,n,nt(n,"clsPrefix")),t=oe(null),i=oe(null),r=oe(null),o=ue(()=>n.treeMate.getFlattenedNodes()),s=ue(()=>py(o.value)),a=oe(null);function l(){const{treeMate:I}=n;let k=null;const{value:se}=n;se===null?k=I.getFirstAvailableNode():(n.multiple?k=I.getNode((se||[])[(se||[]).length-1]):k=I.getNode(se),(!k||k.disabled)&&(k=I.getFirstAvailableNode())),D(k||null)}function c(){const{value:I}=a;I&&!n.treeMate.getNode(I.key)&&(a.value=null)}let d;Mt(()=>n.show,I=>{I?d=Mt(()=>n.treeMate,()=>{n.resetMenuOnOptionsChange?(n.autoPending?l():c(),pn($)):c()},{immediate:!0}):d==null||d()},{immediate:!0}),Gt(()=>{d==null||d()});const u=ue(()=>qt(e.value.self[Re("optionHeight",n.size)])),h=ue(()=>ya(e.value.self[Re("padding",n.size)])),g=ue(()=>n.multiple&&Array.isArray(n.value)?new Set(n.value):new Set),m=ue(()=>{const I=o.value;return I&&I.length===0});function p(I){const{onToggle:k}=n;k&&k(I)}function f(I){const{onScroll:k}=n;k&&k(I)}function v(I){var k;(k=r.value)===null||k===void 0||k.sync(),f(I)}function y(){var I;(I=r.value)===null||I===void 0||I.sync()}function E(){const{value:I}=a;return I||null}function _(I,k){k.disabled||D(k,!1)}function M(I,k){k.disabled||p(k)}function A(I){var k;Ta(I,"action")||(k=n.onKeyup)===null||k===void 0||k.call(n,I)}function w(I){var k;Ta(I,"action")||(k=n.onKeydown)===null||k===void 0||k.call(n,I)}function x(I){var k;(k=n.onMousedown)===null||k===void 0||k.call(n,I),!n.focusable&&I.preventDefault()}function S(){const{value:I}=a;I&&D(I.getNext({loop:!0}),!0)}function P(){const{value:I}=a;I&&D(I.getPrev({loop:!0}),!0)}function D(I,k=!1){a.value=I,k&&$()}function $(){var I,k;const se=a.value;if(!se)return;const ae=s.value(se.key);ae!==null&&(n.virtualScroll?(I=i.value)===null||I===void 0||I.scrollTo({index:ae}):(k=r.value)===null||k===void 0||k.scrollTo({index:ae,elSize:u.value}))}function Z(I){var k,se;!((k=t.value)===null||k===void 0)&&k.contains(I.target)&&((se=n.onFocus)===null||se===void 0||se.call(n,I))}function L(I){var k,se;!((k=t.value)===null||k===void 0)&&k.contains(I.relatedTarget)||(se=n.onBlur)===null||se===void 0||se.call(n,I)}$t(Gl,{handleOptionMouseEnter:_,handleOptionClick:M,valueSetRef:g,showCheckmarkRef:nt(n,"showCheckmark"),multipleRef:nt(n,"multiple"),valueRef:nt(n,"value"),renderLabelRef:nt(n,"renderLabel"),renderOptionRef:nt(n,"renderOption"),pendingTmNodeRef:a,labelFieldRef:nt(n,"labelField"),valueFieldRef:nt(n,"valueField")}),$t(yh,t),Wt(()=>{const{value:I}=r;I&&I.sync()});const N=ue(()=>{const{size:I}=n,{common:{cubicBezierEaseInOut:k},self:{height:se,borderRadius:ae,color:pe,groupHeaderTextColor:Ee,actionDividerColor:Pe,optionTextColorPressed:W,optionTextColor:$e,optionTextColorDisabled:Le,optionTextColorActive:me,optionOpacityDisabled:_e,optionCheckColor:ke,actionTextColor:Oe,optionColorPending:Fe,optionColorActive:Ye,loadingColor:Ze,loadingSize:rt,optionColorActivePending:fe,[Re("optionFontSize",I)]:ze,[Re("optionHeight",I)]:Ie,[Re("optionPadding",I)]:Te}}=e.value;return{"--n-height":se,"--n-action-divider-color":Pe,"--n-action-text-color":Oe,"--n-bezier":k,"--n-border-radius":ae,"--n-color":pe,"--n-option-font-size":ze,"--n-group-header-text-color":Ee,"--n-option-check-color":ke,"--n-option-color-pending":Fe,"--n-option-color-active":Ye,"--n-option-color-active-pending":fe,"--n-option-height":Ie,"--n-option-opacity-disabled":_e,"--n-option-text-color":$e,"--n-option-text-color-active":me,"--n-option-text-color-disabled":Le,"--n-option-text-color-pressed":W,"--n-option-padding":Te,"--n-option-padding-left":ya(Te,"left"),"--n-option-padding-right":ya(Te,"right"),"--n-loading-color":Ze,"--n-loading-size":rt}}),{inlineThemeDisabled:O}=n,U=O?Kt("internal-select-menu",ue(()=>n.size[0]),N,n):void 0,Y={selfRef:t,next:S,prev:P,getPendingTmNode:E};return Dh(t,n.onResize),Object.assign({mergedTheme:e,virtualListRef:i,scrollbarRef:r,itemSize:u,padding:h,flattenedNodes:o,empty:m,virtualListContainer(){const{value:I}=i;return I==null?void 0:I.listElRef},virtualListContent(){const{value:I}=i;return I==null?void 0:I.itemsElRef},doScroll:f,handleFocusin:Z,handleFocusout:L,handleKeyUp:A,handleKeyDown:w,handleMouseDown:x,handleVirtualListResize:y,handleVirtualListScroll:v,cssVars:O?void 0:N,themeClass:U==null?void 0:U.themeClass,onRender:U==null?void 0:U.onRender},Y)},render(){const{$slots:n,virtualScroll:e,clsPrefix:t,mergedTheme:i,themeClass:r,onRender:o}=this;return o==null||o(),T("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,r,this.multiple&&`${t}-base-select-menu--multiple`],style:[{width:kr(this.width)},this.cssVars],onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?T("div",{class:`${t}-base-select-menu__loading`},T(Xa,{clsPrefix:t,strokeWidth:20})):this.empty?T("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},Br(n.empty,()=>[T(By,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty})])):T(Ya,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:e?this.virtualListContainer:void 0,content:e?this.virtualListContent:void 0,onScroll:e?void 0:this.doScroll},{default:()=>e?T(Zm,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:s})=>s.isGroup?T(Cd,{key:s.key,clsPrefix:t,tmNode:s}):s.ignored?null:T(Md,{clsPrefix:t,key:s.key,tmNode:s})}):T("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(s=>s.isGroup?T(Cd,{key:s.key,clsPrefix:t,tmNode:s}):T(Md,{clsPrefix:t,key:s.key,tmNode:s})))}),Dt(n.action,s=>s&&[T("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},s),T(ey,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Yy=J("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Ky=Be({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(n){Jr("-base-wave",Yy,nt(n,"clsPrefix"));const e=oe(null),t=oe(!1);let i=null;return Gt(()=>{i!==null&&window.clearTimeout(i)}),{active:t,selfRef:e,play(){i!==null&&(window.clearTimeout(i),t.value=!1,i=null),pn(()=>{var r;(r=e.value)===null||r===void 0||r.offsetHeight,t.value=!0,i=window.setTimeout(()=>{t.value=!1,i=null},1e3)})}}},render(){const{clsPrefix:n}=this;return T("div",{ref:"selfRef","aria-hidden":!0,class:[`${n}-base-wave`,this.active&&`${n}-base-wave--active`]})}}),Zy={space:"6px",spaceArrow:"10px",arrowOffset:"10px",arrowOffsetVertical:"10px",arrowHeight:"6px",padding:"8px 14px"};const Jy=n=>{const{boxShadow2:e,popoverColor:t,textColor2:i,borderRadius:r,fontSize:o,dividerColor:s}=n;return Object.assign(Object.assign({},Zy),{fontSize:o,borderRadius:r,color:t,dividerColor:s,textColor:i,boxShadow:e})},Qy={name:"Popover",common:on,self:Jy};var xf=Qy;const gs={top:"bottom",bottom:"top",left:"right",right:"left"},Tt="var(--n-arrow-height) * 1.414";var ew=te([J("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 `,[te(">",[J("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),St("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[St("scrollable",[St("show-header","padding: var(--n-padding);")])]),K("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),Se("scrollable, show-header",[K("content",`
 padding: var(--n-padding);
 `)])]),J("popover-shared",`
 transform-origin: inherit;
 `,[J("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[J("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Tt});
 height: calc(${Tt});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),te("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),te("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),te("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),te("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),cn("top-start",`
 top: calc(${Tt} / -2 + 1px);
 left: calc(${jn("top-start")} - var(--v-offset-left));
 `),cn("top",`
 top: calc(${Tt} / -2 + 1px);
 transform: translateX(calc(${Tt} / -2)) rotate(45deg);
 left: 50%;
 `),cn("top-end",`
 top: calc(${Tt} / -2 + 1px);
 right: calc(${jn("top-end")} + var(--v-offset-left));
 `),cn("bottom-start",`
 bottom: calc(${Tt} / -2 + 1px);
 left: calc(${jn("bottom-start")} - var(--v-offset-left));
 `),cn("bottom",`
 bottom: calc(${Tt} / -2 + 1px);
 transform: translateX(calc(${Tt} / -2)) rotate(45deg);
 left: 50%;
 `),cn("bottom-end",`
 bottom: calc(${Tt} / -2 + 1px);
 right: calc(${jn("bottom-end")} + var(--v-offset-left));
 `),cn("left-start",`
 left: calc(${Tt} / -2 + 1px);
 top: calc(${jn("left-start")} - var(--v-offset-top));
 `),cn("left",`
 left: calc(${Tt} / -2 + 1px);
 transform: translateY(calc(${Tt} / -2)) rotate(45deg);
 top: 50%;
 `),cn("left-end",`
 left: calc(${Tt} / -2 + 1px);
 bottom: calc(${jn("left-end")} + var(--v-offset-top));
 `),cn("right-start",`
 right: calc(${Tt} / -2 + 1px);
 top: calc(${jn("right-start")} - var(--v-offset-top));
 `),cn("right",`
 right: calc(${Tt} / -2 + 1px);
 transform: translateY(calc(${Tt} / -2)) rotate(45deg);
 top: 50%;
 `),cn("right-end",`
 right: calc(${Tt} / -2 + 1px);
 bottom: calc(${jn("right-end")} + var(--v-offset-top));
 `),...Kb({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(n,e)=>{const t=["right","left"].includes(e),i=t?"width":"height";return n.map(r=>{const o=r.split("-")[1]==="end",a=`calc((${`var(--v-target-${i}, 0px)`} - ${Tt}) / 2)`,l=jn(r);return te(`[v-placement="${r}"] >`,[J("popover-shared",[Se("center-arrow",[J("popover-arrow",`${e}: calc(max(${a}, ${l}) ${o?"+":"-"} var(--v-offset-${t?"left":"top"}));`)])])])})})]);function jn(n){return["top","bottom"].includes(n.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function cn(n,e){const t=n.split("-")[0],i=["top","bottom"].includes(t)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return te(`[v-placement="${n}"] >`,[J("popover-shared",`
 margin-${gs[t]}: var(--n-space);
 `,[Se("show-arrow",`
 margin-${gs[t]}: var(--n-space-arrow);
 `),Se("overlap",`
 margin: 0;
 `),xm("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: calc(100% - 1px);
 ${gs[t]}: auto;
 ${i}
 `,[J("popover-arrow",e)])])])}const bf=Object.assign(Object.assign({},lt.props),{to:Ut.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,minWidth:Number,maxWidth:Number}),tw=({arrowStyle:n,clsPrefix:e})=>T("div",{key:"__popover-arrow__",class:`${e}-popover-arrow-wrapper`},T("div",{class:`${e}-popover-arrow`,style:n}));var nw=Be({name:"PopoverBody",inheritAttrs:!1,props:bf,setup(n,{slots:e,attrs:t}){const{namespaceRef:i,mergedClsPrefixRef:r,inlineThemeDisabled:o}=rn(n),s=lt("Popover","-popover",ew,xf,n,r),a=oe(null),l=pt("NPopover"),c=oe(null),d=oe(n.show),u=oe(!1);Nn(()=>{const{show:w}=n;w&&!bm()&&(u.value=!0)});const h=ue(()=>{const{trigger:w,onClickoutside:x}=n,S=[],{positionManuallyRef:{value:P}}=l;return P||(w==="click"&&!x&&S.push([Hr,_,void 0,{capture:!0}]),w==="hover"&&S.push([zm,E])),x&&S.push([Hr,_,void 0,{capture:!0}]),(n.displayDirective==="show"||n.animated&&u.value)&&S.push([Ca,n.show]),S}),g=ue(()=>[{width:n.width==="trigger"?"":kr(n.width)},n.maxWidth?{maxWidth:kr(n.maxWidth)}:{},n.minWidth?{minWidth:kr(n.minWidth)}:{},o?void 0:m.value]),m=ue(()=>{const{common:{cubicBezierEaseInOut:w,cubicBezierEaseIn:x,cubicBezierEaseOut:S},self:{space:P,spaceArrow:D,padding:$,fontSize:Z,textColor:L,dividerColor:N,color:O,boxShadow:U,borderRadius:Y,arrowHeight:I,arrowOffset:k,arrowOffsetVertical:se}}=s.value;return{"--n-box-shadow":U,"--n-bezier":w,"--n-bezier-ease-in":x,"--n-bezier-ease-out":S,"--n-font-size":Z,"--n-text-color":L,"--n-color":O,"--n-divider-color":N,"--n-border-radius":Y,"--n-arrow-height":I,"--n-arrow-offset":k,"--n-arrow-offset-vertical":se,"--n-padding":$,"--n-space":P,"--n-space-arrow":D}}),p=o?Kt("popover",void 0,m,n):void 0;l.setBodyInstance({syncPosition:f}),Gt(()=>{l.setBodyInstance(null)}),Mt(nt(n,"show"),w=>{n.animated||(w?d.value=!0:d.value=!1)});function f(){var w;(w=a.value)===null||w===void 0||w.syncPosition()}function v(w){n.trigger==="hover"&&n.keepAliveOnHover&&n.show&&l.handleMouseEnter(w)}function y(w){n.trigger==="hover"&&n.keepAliveOnHover&&l.handleMouseLeave(w)}function E(w){n.trigger==="hover"&&!M().contains(w.target)&&l.handleMouseMoveOutside(w)}function _(w){(n.trigger==="click"&&!M().contains(w.target)||n.onClickoutside)&&l.handleClickOutside(w)}function M(){return l.getTriggerElement()}$t(Yl,c),$t(ql,null),$t(jl,null);function A(){if(p==null||p.onRender(),!(n.displayDirective==="show"||n.show||n.animated&&u.value))return null;let x;const S=l.internalRenderBodyRef.value,{value:P}=r;if(S)x=S([`${P}-popover-shared`,p==null?void 0:p.themeClass.value,n.overlap&&`${P}-popover-shared--overlap`,n.showArrow&&`${P}-popover-shared--show-arrow`,n.arrowPointToCenter&&`${P}-popover-shared--center-arrow`],c,g.value,v,y);else{const{value:D}=l.extraClassRef,{internalTrapFocus:$}=n,Z=()=>{const L=Dt(e.header,O=>{var U;const Y=O?T(ri,null,T("div",{class:`${P}-popover__header`,style:n.headerStyle},O),T("div",{class:`${P}-popover__content`,style:n.contentStyle},e)):n.scrollable?(U=e.default)===null||U===void 0?void 0:U.call(e):T("div",{class:`${P}-popover__content`,style:n.contentStyle},e);return n.scrollable?T(Uy,{contentClass:O?void 0:`${P}-popover__content`,contentStyle:O?void 0:n.contentStyle},{default:()=>Y}):Y}),N=n.showArrow?tw({arrowStyle:n.arrowStyle,clsPrefix:P}):null;return[L,N]};x=T("div",Oa({class:[`${P}-popover`,`${P}-popover-shared`,p==null?void 0:p.themeClass.value,D.map(L=>`${P}-${L}`),{[`${P}-popover--scrollable`]:n.scrollable,[`${P}-popover--show-header`]:!bo(e.header),[`${P}-popover--raw`]:n.raw,[`${P}-popover-shared--overlap`]:n.overlap,[`${P}-popover-shared--show-arrow`]:n.showArrow,[`${P}-popover-shared--center-arrow`]:n.arrowPointToCenter}],ref:c,style:g.value,onKeydown:l.handleKeydown,onMouseenter:v,onMouseleave:y},t),$?T(Lh,{active:n.show,autoFocus:!0},{default:Z}):Z())}return ni(x,h.value)}return{displayed:u,namespace:i,isMounted:l.isMountedRef,zIndex:l.zIndexRef,followerRef:a,adjustedTo:Ut(n),followerEnabled:d,renderContentNode:A}},render(){return T(Ha,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===Ut.tdkey},{default:()=>this.animated?T(Tn,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}});const iw=Object.keys(bf),rw={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function ow(n,e,t){rw[e].forEach(i=>{n.props?n.props=Object.assign({},n.props):n.props={};const r=n.props[i],o=t[i];r?n.props[i]=(...s)=>{r(...s),o(...s)}:n.props[i]=o})}const aw=nn("").type,sw={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:Ut.propTo,scrollable:Boolean,contentStyle:[Object,String],headerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},lw=Object.assign(Object.assign(Object.assign({},lt.props),sw),{internalRenderBody:Function});var cw=Be({name:"Popover",inheritAttrs:!1,props:lw,__popover__:!0,setup(n){const e=ar(),t=oe(null),i=ue(()=>n.show),r=oe(n.defaultShow),o=Pi(i,r),s=fn(()=>n.disabled?!1:o.value),a=()=>{if(n.disabled)return!0;const{getDisabled:L}=n;return!!(L!=null&&L())},l=()=>a()?!1:o.value,c=_h(n,["arrow","showArrow"]),d=ue(()=>n.overlap?!1:c.value);let u=null;const h=oe(null),g=oe(null),m=fn(()=>n.x!==void 0&&n.y!==void 0);function p(L){const{"onUpdate:show":N,onUpdateShow:O,onShow:U,onHide:Y}=n;r.value=L,N&&qe(N,L),O&&qe(O,L),L&&U&&qe(U,!0),L&&Y&&qe(Y,!1)}function f(){u&&u.syncPosition()}function v(){const{value:L}=h;L&&(window.clearTimeout(L),h.value=null)}function y(){const{value:L}=g;L&&(window.clearTimeout(L),g.value=null)}function E(){const L=a();if(n.trigger==="focus"&&!L){if(l())return;p(!0)}}function _(){const L=a();if(n.trigger==="focus"&&!L){if(!l())return;p(!1)}}function M(){const L=a();if(n.trigger==="hover"&&!L){if(y(),h.value!==null||l())return;const N=()=>{p(!0),h.value=null},{delay:O}=n;O===0?N():h.value=window.setTimeout(N,O)}}function A(){const L=a();if(n.trigger==="hover"&&!L){if(v(),g.value!==null||!l())return;const N=()=>{p(!1),g.value=null},{duration:O}=n;O===0?N():g.value=window.setTimeout(N,O)}}function w(){A()}function x(L){var N;!l()||(n.trigger==="click"&&(v(),y(),p(!1)),(N=n.onClickoutside)===null||N===void 0||N.call(n,L))}function S(){if(n.trigger==="click"&&!a()){v(),y();const L=!l();p(L)}}function P(L){!n.internalTrapFocus||L.key==="Escape"&&(v(),y(),p(!1))}function D(L){r.value=L}function $(){var L;return(L=t.value)===null||L===void 0?void 0:L.targetRef}function Z(L){u=L}return $t("NPopover",{getTriggerElement:$,handleKeydown:P,handleMouseEnter:M,handleMouseLeave:A,handleClickOutside:x,handleMouseMoveOutside:w,setBodyInstance:Z,positionManuallyRef:m,isMountedRef:e,zIndexRef:nt(n,"zIndex"),extraClassRef:nt(n,"internalExtraClass"),internalRenderBodyRef:nt(n,"internalRenderBody")}),{binderInstRef:t,positionManually:m,mergedShowConsideringDisabledProp:s,uncontrolledShow:r,mergedShowArrow:d,getMergedShow:l,setShow:D,handleClick:S,handleMouseEnter:M,handleMouseLeave:A,handleFocus:E,handleBlur:_,syncPosition:f}},render(){var n;const{positionManually:e,$slots:t}=this;let i,r=!1;if(!e&&(t.activator?i=Ec(t,"activator"):i=Ec(t,"trigger"),i)){i=Tp(i),i=i.type===aw?T("span",[i]):i;const o={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((n=i.type)===null||n===void 0)&&n.__popover__)r=!0,i.props||(i.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),i.props.internalSyncTargetWithParent=!0,i.props.internalInheritedEventHandlers?i.props.internalInheritedEventHandlers=[o,...i.props.internalInheritedEventHandlers]:i.props.internalInheritedEventHandlers=[o];else{const{internalInheritedEventHandlers:s}=this,a=[o,...s],l={onBlur:c=>{a.forEach(d=>{d.onBlur(c)})},onFocus:c=>{a.forEach(d=>{d.onFocus(c)})},onClick:c=>{a.forEach(d=>{d.onClick(c)})},onMouseenter:c=>{a.forEach(d=>{d.onMouseenter(c)})},onMouseleave:c=>{a.forEach(d=>{d.onMouseleave(c)})}};ow(i,s?"nested":e?"manual":this.trigger,l)}}return T($a,{ref:"binderInstRef",syncTarget:!r,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const o=this.getMergedShow();return[this.internalTrapFocus&&o?ni(T("div",{style:{position:"fixed",inset:0}}),[[Kl,{enabled:o,zIndex:this.zIndex}]]):null,e?null:T(Ua,null,{default:()=>i}),T(nw,jp(this.$props,iw,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:o})),{default:()=>{var s,a;return(a=(s=this.$slots).default)===null||a===void 0?void 0:a.call(s)},header:()=>{var s,a;return(a=(s=this.$slots).header)===null||a===void 0?void 0:a.call(s)}})]}})}});function Ka(n,e,t){if(!e)return;const i=sr(),r=ue(()=>{const{value:s}=e;if(!s)return;const a=s[n];if(!!a)return a}),o=()=>{Nn(()=>{const{value:s}=t,a=`${s}${n}Rtl`;if(um(a,i))return;const{value:l}=r;!l||l.style.mount({id:a,head:!0,anchorMetaName:Co,props:{bPrefix:s?`.${s}-`:void 0},ssr:i})})};return i?o():Lo(o),r}var dw={closeIconSizeTiny:"12px",closeIconSizeSmall:"12px",closeIconSizeMedium:"14px",closeIconSizeLarge:"14px",closeSizeTiny:"16px",closeSizeSmall:"16px",closeSizeMedium:"18px",closeSizeLarge:"18px",padding:"0 7px",closeMargin:"0 0 0 4px",closeMarginRtl:"0 4px 0 0"};const uw=n=>{const{textColor2:e,primaryColorHover:t,primaryColorPressed:i,primaryColor:r,infoColor:o,successColor:s,warningColor:a,errorColor:l,baseColor:c,borderColor:d,opacityDisabled:u,tagColor:h,closeIconColor:g,closeIconColorHover:m,closeIconColorPressed:p,borderRadiusSmall:f,fontSizeMini:v,fontSizeTiny:y,fontSizeSmall:E,fontSizeMedium:_,heightMini:M,heightTiny:A,heightSmall:w,heightMedium:x,closeColorHover:S,closeColorPressed:P,buttonColor2Hover:D,buttonColor2Pressed:$,fontWeightStrong:Z}=n;return Object.assign(Object.assign({},dw),{closeBorderRadius:f,heightTiny:M,heightSmall:A,heightMedium:w,heightLarge:x,borderRadius:f,opacityDisabled:u,fontSizeTiny:v,fontSizeSmall:y,fontSizeMedium:E,fontSizeLarge:_,fontWeightStrong:Z,textColorCheckable:e,textColorHoverCheckable:e,textColorPressedCheckable:e,textColorChecked:c,colorCheckable:"#0000",colorHoverCheckable:D,colorPressedCheckable:$,colorChecked:r,colorCheckedHover:t,colorCheckedPressed:i,border:`1px solid ${d}`,textColor:e,color:h,colorBordered:"rgb(250, 250, 252)",closeIconColor:g,closeIconColorHover:m,closeIconColorPressed:p,closeColorHover:S,closeColorPressed:P,borderPrimary:`1px solid ${Ke(r,{alpha:.3})}`,textColorPrimary:r,colorPrimary:Ke(r,{alpha:.12}),colorBorderedPrimary:Ke(r,{alpha:.1}),closeIconColorPrimary:r,closeIconColorHoverPrimary:r,closeIconColorPressedPrimary:r,closeColorHoverPrimary:Ke(r,{alpha:.12}),closeColorPressedPrimary:Ke(r,{alpha:.18}),borderInfo:`1px solid ${Ke(o,{alpha:.3})}`,textColorInfo:o,colorInfo:Ke(o,{alpha:.12}),colorBorderedInfo:Ke(o,{alpha:.1}),closeIconColorInfo:o,closeIconColorHoverInfo:o,closeIconColorPressedInfo:o,closeColorHoverInfo:Ke(o,{alpha:.12}),closeColorPressedInfo:Ke(o,{alpha:.18}),borderSuccess:`1px solid ${Ke(s,{alpha:.3})}`,textColorSuccess:s,colorSuccess:Ke(s,{alpha:.12}),colorBorderedSuccess:Ke(s,{alpha:.1}),closeIconColorSuccess:s,closeIconColorHoverSuccess:s,closeIconColorPressedSuccess:s,closeColorHoverSuccess:Ke(s,{alpha:.12}),closeColorPressedSuccess:Ke(s,{alpha:.18}),borderWarning:`1px solid ${Ke(a,{alpha:.35})}`,textColorWarning:a,colorWarning:Ke(a,{alpha:.15}),colorBorderedWarning:Ke(a,{alpha:.12}),closeIconColorWarning:a,closeIconColorHoverWarning:a,closeIconColorPressedWarning:a,closeColorHoverWarning:Ke(a,{alpha:.12}),closeColorPressedWarning:Ke(a,{alpha:.18}),borderError:`1px solid ${Ke(l,{alpha:.23})}`,textColorError:l,colorError:Ke(l,{alpha:.1}),colorBorderedError:Ke(l,{alpha:.08}),closeIconColorError:l,closeIconColorHoverError:l,closeIconColorPressedError:l,closeColorHoverError:Ke(l,{alpha:.12}),closeColorPressedError:Ke(l,{alpha:.18})})},hw={name:"Tag",common:on,self:uw};var fw=hw,pw={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},mw=J("tag",`
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
`,[Se("strong",`
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
 `),Se("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[K("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),K("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),Se("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),Se("icon, avatar",[Se("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),Se("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),Se("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[St("disabled",[te("&:hover","background-color: var(--n-color-hover-checkable);",[St("checked","color: var(--n-text-color-hover-checkable);")]),te("&:active","background-color: var(--n-color-pressed-checkable);",[St("checked","color: var(--n-text-color-pressed-checkable);")])]),Se("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[St("disabled",[te("&:hover","background-color: var(--n-color-checked-hover);"),te("&:active","background-color: var(--n-color-checked-pressed);")])])])]);const gw=Object.assign(Object.assign(Object.assign({},lt.props),pw),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalStopClickPropagation:Boolean,onCheckedChange:{type:Function,validator:()=>!0,default:void 0}}),vw=An("n-tag");var vs=Be({name:"Tag",props:gw,setup(n){const e=oe(null),{mergedBorderedRef:t,mergedClsPrefixRef:i,inlineThemeDisabled:r,mergedRtlRef:o}=rn(n),s=lt("Tag","-tag",mw,fw,n,i);$t(vw,{roundRef:nt(n,"round")});function a(g){if(!n.disabled&&n.checkable){const{checked:m,onCheckedChange:p,onUpdateChecked:f,"onUpdate:checked":v}=n;f&&f(!m),v&&v(!m),p&&p(!m)}}function l(g){if(n.internalStopClickPropagation&&g.stopPropagation(),!n.disabled){const{onClose:m}=n;m&&qe(m,g)}}const c={setTextContent(g){const{value:m}=e;m&&(m.textContent=g)}},d=Ka("Tag",o,i),u=ue(()=>{const{type:g,size:m,color:{color:p,textColor:f}={}}=n,{common:{cubicBezierEaseInOut:v},self:{padding:y,closeMargin:E,closeMarginRtl:_,borderRadius:M,opacityDisabled:A,textColorCheckable:w,textColorHoverCheckable:x,textColorPressedCheckable:S,textColorChecked:P,colorCheckable:D,colorHoverCheckable:$,colorPressedCheckable:Z,colorChecked:L,colorCheckedHover:N,colorCheckedPressed:O,closeBorderRadius:U,fontWeightStrong:Y,[Re("colorBordered",g)]:I,[Re("closeSize",m)]:k,[Re("closeIconSize",m)]:se,[Re("fontSize",m)]:ae,[Re("height",m)]:pe,[Re("color",g)]:Ee,[Re("textColor",g)]:Pe,[Re("border",g)]:W,[Re("closeIconColor",g)]:$e,[Re("closeIconColorHover",g)]:Le,[Re("closeIconColorPressed",g)]:me,[Re("closeColorHover",g)]:_e,[Re("closeColorPressed",g)]:ke}}=s.value;return{"--n-font-weight-strong":Y,"--n-avatar-size-override":`calc(${pe} - 8px)`,"--n-bezier":v,"--n-border-radius":M,"--n-border":W,"--n-close-icon-size":se,"--n-close-color-pressed":ke,"--n-close-color-hover":_e,"--n-close-border-radius":U,"--n-close-icon-color":$e,"--n-close-icon-color-hover":Le,"--n-close-icon-color-pressed":me,"--n-close-icon-color-disabled":$e,"--n-close-margin":E,"--n-close-margin-rtl":_,"--n-close-size":k,"--n-color":p||(t.value?I:Ee),"--n-color-checkable":D,"--n-color-checked":L,"--n-color-checked-hover":N,"--n-color-checked-pressed":O,"--n-color-hover-checkable":$,"--n-color-pressed-checkable":Z,"--n-font-size":ae,"--n-height":pe,"--n-opacity-disabled":A,"--n-padding":y,"--n-text-color":f||Pe,"--n-text-color-checkable":w,"--n-text-color-checked":P,"--n-text-color-hover-checkable":x,"--n-text-color-pressed-checkable":S}}),h=r?Kt("tag",ue(()=>{let g="";const{type:m,size:p,color:{color:f,textColor:v}={}}=n;return g+=m[0],g+=p[0],f&&(g+=`a${Ea(f)}`),v&&(g+=`b${Ea(v)}`),t.value&&(g+="c"),g}),u,n):void 0;return Object.assign(Object.assign({},c),{rtlEnabled:d,mergedClsPrefix:i,contentRef:e,mergedBordered:t,handleClick:a,handleCloseClick:l,cssVars:r?void 0:u,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender})},render(){var n,e;const{mergedClsPrefix:t,rtlEnabled:i,closable:r,color:{borderColor:o}={},round:s,onRender:a,$slots:l}=this;a==null||a();const c=Dt(l.avatar,u=>u&&T("div",{class:`${t}-tag__avatar`},u)),d=Dt(l.icon,u=>u&&T("div",{class:`${t}-tag__icon`},u));return T("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:i,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:s,[`${t}-tag--avatar`]:c,[`${t}-tag--icon`]:d,[`${t}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},d||c,T("span",{class:`${t}-tag__content`,ref:"contentRef"},(e=(n=this.$slots).default)===null||e===void 0?void 0:e.call(n)),!this.checkable&&r?T(df,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:s,absolute:!0}):null,!this.checkable&&this.mergedBordered?T("div",{class:`${t}-tag__border`,style:{borderColor:o}}):null)}}),xw=J("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[te(">",[K("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[te("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),te("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),K("placeholder",`
 display: flex;
 `),K("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Vr({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Ml=Be({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(n){return Jr("-base-clear",xw,nt(n,"clsPrefix")),{handleMouseDown(e){e.preventDefault()}}},render(){const{clsPrefix:n}=this;return T("div",{class:`${n}-base-clear`},T(qa,null,{default:()=>{var e,t;return this.show?T("div",{key:"dismiss",class:`${n}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},Br(this.$slots.icon,()=>[T(ir,{clsPrefix:n},{default:()=>T(K_,null)})])):T("div",{key:"icon",class:`${n}-base-clear__placeholder`},(t=(e=this.$slots).placeholder)===null||t===void 0?void 0:t.call(e))}}))}}),_f=Be({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(n,{slots:e}){return()=>{const{clsPrefix:t}=n;return T(Xa,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:n.loading},{default:()=>n.showArrow?T(Ml,{clsPrefix:t,show:n.showClear,onClear:n.onClear},{placeholder:()=>T(ir,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>Br(e.default,()=>[T(Y_,null)])})}):null})}}}),bw={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"};const _w=n=>{const{borderRadius:e,textColor2:t,textColorDisabled:i,inputColor:r,inputColorDisabled:o,primaryColor:s,primaryColorHover:a,warningColor:l,warningColorHover:c,errorColor:d,errorColorHover:u,borderColor:h,iconColor:g,iconColorDisabled:m,clearColor:p,clearColorHover:f,clearColorPressed:v,placeholderColor:y,placeholderColorDisabled:E,fontSizeTiny:_,fontSizeSmall:M,fontSizeMedium:A,fontSizeLarge:w,heightTiny:x,heightSmall:S,heightMedium:P,heightLarge:D}=n;return Object.assign(Object.assign({},bw),{fontSizeTiny:_,fontSizeSmall:M,fontSizeMedium:A,fontSizeLarge:w,heightTiny:x,heightSmall:S,heightMedium:P,heightLarge:D,borderRadius:e,textColor:t,textColorDisabled:i,placeholderColor:y,placeholderColorDisabled:E,color:r,colorDisabled:o,colorActive:r,border:`1px solid ${h}`,borderHover:`1px solid ${a}`,borderActive:`1px solid ${s}`,borderFocus:`1px solid ${a}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${Ke(s,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${Ke(s,{alpha:.2})}`,caretColor:s,arrowColor:g,arrowColorDisabled:m,loadingColor:s,borderWarning:`1px solid ${l}`,borderHoverWarning:`1px solid ${c}`,borderActiveWarning:`1px solid ${l}`,borderFocusWarning:`1px solid ${c}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${Ke(l,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${Ke(l,{alpha:.2})}`,colorActiveWarning:r,caretColorWarning:l,borderError:`1px solid ${d}`,borderHoverError:`1px solid ${u}`,borderActiveError:`1px solid ${d}`,borderFocusError:`1px solid ${u}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${Ke(d,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${Ke(d,{alpha:.2})}`,colorActiveError:r,caretColorError:d,clearColor:p,clearColorHover:f,clearColorPressed:v})},yw={name:"InternalSelection",common:on,peers:{Popover:xf},self:_w};var yf=yw,ww=te([J("base-selection",`
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
 `,[J("base-loading",`
 color: var(--n-loading-color);
 `),J("base-selection-tags","min-height: var(--n-height);"),K("border, state-border",`
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
 `),J("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[K("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),J("base-selection-overlay",`
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
 `)]),J("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `),J("base-selection-tags",`
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
 `),J("base-selection-label",`
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
 `,[J("base-selection-input",`
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
 `)]),St("disabled",[te("&:hover",[K("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),Se("focus",[K("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),Se("active",[K("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),J("base-selection-label","background-color: var(--n-color-active);"),J("base-selection-tags","background-color: var(--n-color-active);")])]),Se("disabled","cursor: not-allowed;",[K("arrow",`
 color: var(--n-arrow-color-disabled);
 `),J("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[J("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),K("render-label",`
 color: var(--n-text-color-disabled);
 `)]),J("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),J("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),J("base-selection-input-tag",`
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
 `)]),["warning","error"].map(n=>Se(`${n}-status`,[K("state-border",`border: var(--n-border-${n});`),St("disabled",[te("&:hover",[K("state-border",`
 box-shadow: var(--n-box-shadow-hover-${n});
 border: var(--n-border-hover-${n});
 `)]),Se("active",[K("state-border",`
 box-shadow: var(--n-box-shadow-active-${n});
 border: var(--n-border-active-${n});
 `),J("base-selection-label",`background-color: var(--n-color-active-${n});`),J("base-selection-tags",`background-color: var(--n-color-active-${n});`)]),Se("focus",[K("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)])])]))]),J("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),J("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[te("&:last-child","padding-right: 0;"),J("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[K("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Sw=Be({name:"InternalSelection",props:Object.assign(Object.assign({},lt.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeyup:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,onResize:Function}),setup(n){const e=oe(null),t=oe(null),i=oe(null),r=oe(null),o=oe(null),s=oe(null),a=oe(null),l=oe(null),c=oe(null),d=oe(null),u=oe(!1),h=oe(!1),g=oe(!1),m=lt("InternalSelection","-internal-selection",ww,yf,n,nt(n,"clsPrefix")),p=ue(()=>n.clearable&&!n.disabled&&(g.value||n.active)),f=ue(()=>n.selectedOption?n.renderTag?n.renderTag({option:n.selectedOption,handleClose:()=>{}}):n.renderLabel?n.renderLabel(n.selectedOption,!0):Dr(n.selectedOption[n.labelField],n.selectedOption,!0):n.placeholder),v=ue(()=>{const re=n.selectedOption;if(!!re)return re[n.labelField]}),y=ue(()=>n.multiple?!!(Array.isArray(n.selectedOptions)&&n.selectedOptions.length):n.selectedOption!==null);function E(){var re;const{value:C}=e;if(C){const{value:b}=t;b&&(b.style.width=`${C.offsetWidth}px`,n.maxTagCount!=="responsive"&&((re=c.value)===null||re===void 0||re.sync()))}}function _(){const{value:re}=d;re&&(re.style.display="none")}function M(){const{value:re}=d;re&&(re.style.display="inline-block")}Mt(nt(n,"active"),re=>{re||_()}),Mt(nt(n,"pattern"),()=>{n.multiple&&pn(E)});function A(re){const{onFocus:C}=n;C&&C(re)}function w(re){const{onBlur:C}=n;C&&C(re)}function x(re){const{onDeleteOption:C}=n;C&&C(re)}function S(re){const{onClear:C}=n;C&&C(re)}function P(re){const{onPatternInput:C}=n;C&&C(re)}function D(re){var C;(!re.relatedTarget||!(!((C=i.value)===null||C===void 0)&&C.contains(re.relatedTarget)))&&A(re)}function $(re){var C;!((C=i.value)===null||C===void 0)&&C.contains(re.relatedTarget)||w(re)}function Z(re){S(re)}function L(){g.value=!0}function N(){g.value=!1}function O(re){!n.active||!n.filterable||re.target!==t.value&&re.preventDefault()}function U(re){x(re)}function Y(re){if(re.key==="Backspace"&&!I.value&&!n.pattern.length){const{selectedOptions:C}=n;C!=null&&C.length&&U(C[C.length-1])}}const I=oe(!1);let k=null;function se(re){const{value:C}=e;if(C){const b=re.target.value;C.textContent=b,E()}I.value?k=re:P(re)}function ae(){I.value=!0}function pe(){I.value=!1,P(k),k=null}function Ee(re){var C;h.value=!0,(C=n.onPatternFocus)===null||C===void 0||C.call(n,re)}function Pe(re){var C;h.value=!1,(C=n.onPatternBlur)===null||C===void 0||C.call(n,re)}function W(){var re,C;if(n.filterable)h.value=!1,(re=s.value)===null||re===void 0||re.blur(),(C=t.value)===null||C===void 0||C.blur();else if(n.multiple){const{value:b}=r;b==null||b.blur()}else{const{value:b}=o;b==null||b.blur()}}function $e(){var re,C,b;n.filterable?(h.value=!1,(re=s.value)===null||re===void 0||re.focus()):n.multiple?(C=r.value)===null||C===void 0||C.focus():(b=o.value)===null||b===void 0||b.focus()}function Le(){const{value:re}=t;re&&(M(),re.focus())}function me(){const{value:re}=t;re&&re.blur()}function _e(re){const{value:C}=a;C&&C.setTextContent(`+${re}`)}function ke(){const{value:re}=l;return re}function Oe(){return t.value}let Fe=null;function Ye(){Fe!==null&&window.clearTimeout(Fe)}function Ze(){n.disabled||n.active||(Ye(),Fe=window.setTimeout(()=>{u.value=!0},100))}function rt(){Ye()}function fe(re){re||(Ye(),u.value=!1)}Wt(()=>{Nn(()=>{const re=s.value;!re||(re.tabIndex=n.disabled||h.value?-1:0)})}),Dh(i,n.onResize);const{inlineThemeDisabled:ze}=n,Ie=ue(()=>{const{size:re}=n,{common:{cubicBezierEaseInOut:C},self:{borderRadius:b,color:F,placeholderColor:q,textColor:le,paddingSingle:he,paddingMultiple:De,caretColor:Q,colorDisabled:Me,textColorDisabled:ye,placeholderColorDisabled:we,colorActive:B,boxShadowFocus:xe,boxShadowActive:V,boxShadowHover:z,border:H,borderFocus:ce,borderHover:ne,borderActive:ge,arrowColor:Ce,arrowColorDisabled:be,loadingColor:We,colorActiveWarning:ht,boxShadowFocusWarning:Pn,boxShadowActiveWarning:si,boxShadowHoverWarning:Zt,borderWarning:G,borderFocusWarning:ve,borderHoverWarning:Ue,borderActiveWarning:mt,colorActiveError:gt,boxShadowFocusError:_t,boxShadowActiveError:R,boxShadowHoverError:X,borderError:ie,borderFocusError:ee,borderHoverError:de,borderActiveError:He,clearColor:Ge,clearColorHover:Xe,clearColorPressed:je,clearSize:it,arrowSize:Je,[Re("height",re)]:et,[Re("fontSize",re)]:dt}}=m.value;return{"--n-bezier":C,"--n-border":H,"--n-border-active":ge,"--n-border-focus":ce,"--n-border-hover":ne,"--n-border-radius":b,"--n-box-shadow-active":V,"--n-box-shadow-focus":xe,"--n-box-shadow-hover":z,"--n-caret-color":Q,"--n-color":F,"--n-color-active":B,"--n-color-disabled":Me,"--n-font-size":dt,"--n-height":et,"--n-padding-single":he,"--n-padding-multiple":De,"--n-placeholder-color":q,"--n-placeholder-color-disabled":we,"--n-text-color":le,"--n-text-color-disabled":ye,"--n-arrow-color":Ce,"--n-arrow-color-disabled":be,"--n-loading-color":We,"--n-color-active-warning":ht,"--n-box-shadow-focus-warning":Pn,"--n-box-shadow-active-warning":si,"--n-box-shadow-hover-warning":Zt,"--n-border-warning":G,"--n-border-focus-warning":ve,"--n-border-hover-warning":Ue,"--n-border-active-warning":mt,"--n-color-active-error":gt,"--n-box-shadow-focus-error":_t,"--n-box-shadow-active-error":R,"--n-box-shadow-hover-error":X,"--n-border-error":ie,"--n-border-focus-error":ee,"--n-border-hover-error":de,"--n-border-active-error":He,"--n-clear-size":it,"--n-clear-color":Ge,"--n-clear-color-hover":Xe,"--n-clear-color-pressed":je,"--n-arrow-size":Je}}),Te=ze?Kt("internal-selection",ue(()=>n.size[0]),Ie,n):void 0;return{mergedTheme:m,mergedClearable:p,patternInputFocused:h,filterablePlaceholder:f,label:v,selected:y,showTagsPanel:u,isCompositing:I,counterRef:a,counterWrapperRef:l,patternInputMirrorRef:e,patternInputRef:t,selfRef:i,multipleElRef:r,singleElRef:o,patternInputWrapperRef:s,overflowRef:c,inputTagElRef:d,handleMouseDown:O,handleFocusin:D,handleClear:Z,handleMouseEnter:L,handleMouseLeave:N,handleDeleteOption:U,handlePatternKeyDown:Y,handlePatternInputInput:se,handlePatternInputBlur:Pe,handlePatternInputFocus:Ee,handleMouseEnterCounter:Ze,handleMouseLeaveCounter:rt,handleFocusout:$,handleCompositionEnd:pe,handleCompositionStart:ae,onPopoverUpdateShow:fe,focus:$e,focusInput:Le,blur:W,blurInput:me,updateCounter:_e,getCounter:ke,getTail:Oe,renderLabel:n.renderLabel,cssVars:ze?void 0:Ie,themeClass:Te==null?void 0:Te.themeClass,onRender:Te==null?void 0:Te.onRender}},render(){const{status:n,multiple:e,size:t,disabled:i,filterable:r,maxTagCount:o,bordered:s,clsPrefix:a,onRender:l,renderTag:c,renderLabel:d}=this;l==null||l();const u=o==="responsive",h=typeof o=="number",g=u||h,m=T(_f,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var f,v;return(v=(f=this.$slots).arrow)===null||v===void 0?void 0:v.call(f)}});let p;if(e){const{labelField:f}=this,v=$=>T("div",{class:`${a}-base-selection-tag-wrapper`,key:$.value},c?c({option:$,handleClose:()=>this.handleDeleteOption($)}):T(vs,{size:t,closable:!$.disabled,disabled:i,onClose:()=>this.handleDeleteOption($),internalCloseFocusable:!1,internalStopClickPropagation:!0},{default:()=>d?d($,!0):Dr($[f],$,!0)})),y=(h?this.selectedOptions.slice(0,o):this.selectedOptions).map(v),E=r?T("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},T("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),T("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,_=u?()=>T("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},T(vs,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let M;if(h){const $=this.selectedOptions.length-o;$>0&&(M=T("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},T(vs,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${$}`})))}const A=u?r?T(Oc,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>y,counter:_,tail:()=>E}):T(Oc,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:()=>y,counter:_}):h?y.concat(M):y,w=g?()=>T("div",{class:`${a}-base-selection-popover`},u?y:this.selectedOptions.map(v)):void 0,x=g?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,P=(this.selected?!1:this.active?!this.pattern&&!this.isCompositing:!0)?T("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},this.placeholder):null,D=r?T("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},A,u?null:E,m):T("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:i?void 0:0},A,m);p=T(ri,null,g?T(cw,Object.assign({},x,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>D,default:w}):D,P)}else if(r){const f=this.pattern||this.isCompositing,v=this.active?!f:!this.selected,y=this.active?!1:this.selected;p=T("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`},T("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),y?T("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},T("div",{class:`${a}-base-selection-overlay__wrapper`},c?c({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):Dr(this.label,this.selectedOption,!0))):null,v?T("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},T("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,m)}else p=T("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?T("div",{class:`${a}-base-selection-input`,title:qp(this.label),key:"input"},T("div",{class:`${a}-base-selection-input__content`},c?c({option:this.selectedOption,handleClose:()=>{}}):d?d(this.selectedOption,!0):Dr(this.label,this.selectedOption,!0))):T("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},this.placeholder),m);return T("div",{ref:"selfRef",class:[`${a}-base-selection`,this.themeClass,n&&`${a}-base-selection--${n}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeyup:this.onKeyup,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},p,s?T("div",{class:`${a}-base-selection__border`}):null,s?T("div",{class:`${a}-base-selection__state-border`}):null)}});const{cubicBezierEaseInOut:hi}=Wn;function Mw({duration:n=".2s",delay:e=".1s"}={}){return[te("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),te("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),te("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${n} ${hi},
 max-width ${n} ${hi} ${e},
 margin-left ${n} ${hi} ${e},
 margin-right ${n} ${hi} ${e};
 `),te("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${n} ${hi} ${e},
 max-width ${n} ${hi},
 margin-left ${n} ${hi},
 margin-right ${n} ${hi};
 `)]}function Fa(n){return n.type==="group"}function wf(n){return n.type==="ignored"}function xs(n,e){try{return!!(1+e.toString().toLowerCase().indexOf(n.trim().toLowerCase()))}catch{return!1}}function Cw(n,e){return{getIsGroup:Fa,getIgnored:wf,getKey(i){return Fa(i)?i.name||i.key||"key-required":i[n]},getChildren(i){return i[e]}}}function Tw(n,e,t,i){if(!e)return n;function r(o){if(!Array.isArray(o))return[];const s=[];for(const a of o)if(Fa(a)){const l=r(a[i]);l.length&&s.push(Object.assign({},a,{[i]:l}))}else{if(wf(a))continue;e(t,a)&&s.push(a)}return s}return r(n)}function Ew(n,e,t){const i=new Map;return n.forEach(r=>{Fa(r)?r[t].forEach(o=>{i.set(o[e],o)}):i.set(r[e],r)}),i}var Aw={paddingTiny:"0 8px",paddingSmall:"0 10px",paddingMedium:"0 12px",paddingLarge:"0 14px",clearSize:"16px"};const Pw=n=>{const{textColor2:e,textColor3:t,textColorDisabled:i,primaryColor:r,primaryColorHover:o,inputColor:s,inputColorDisabled:a,borderColor:l,warningColor:c,warningColorHover:d,errorColor:u,errorColorHover:h,borderRadius:g,lineHeight:m,fontSizeTiny:p,fontSizeSmall:f,fontSizeMedium:v,fontSizeLarge:y,heightTiny:E,heightSmall:_,heightMedium:M,heightLarge:A,actionColor:w,clearColor:x,clearColorHover:S,clearColorPressed:P,placeholderColor:D,placeholderColorDisabled:$,iconColor:Z,iconColorDisabled:L,iconColorHover:N,iconColorPressed:O}=n;return Object.assign(Object.assign({},Aw),{countTextColor:t,heightTiny:E,heightSmall:_,heightMedium:M,heightLarge:A,fontSizeTiny:p,fontSizeSmall:f,fontSizeMedium:v,fontSizeLarge:y,lineHeight:m,lineHeightTextarea:m,borderRadius:g,iconSize:"16px",groupLabelColor:w,groupLabelTextColor:e,textColor:e,textColorDisabled:i,textDecorationColor:e,caretColor:r,placeholderColor:D,placeholderColorDisabled:$,color:s,colorDisabled:a,colorFocus:s,groupLabelBorder:`1px solid ${l}`,border:`1px solid ${l}`,borderHover:`1px solid ${o}`,borderDisabled:`1px solid ${l}`,borderFocus:`1px solid ${o}`,boxShadowFocus:`0 0 0 2px ${Ke(r,{alpha:.2})}`,loadingColor:r,loadingColorWarning:c,borderWarning:`1px solid ${c}`,borderHoverWarning:`1px solid ${d}`,colorFocusWarning:s,borderFocusWarning:`1px solid ${d}`,boxShadowFocusWarning:`0 0 0 2px ${Ke(c,{alpha:.2})}`,caretColorWarning:c,loadingColorError:u,borderError:`1px solid ${u}`,borderHoverError:`1px solid ${h}`,colorFocusError:s,borderFocusError:`1px solid ${h}`,boxShadowFocusError:`0 0 0 2px ${Ke(u,{alpha:.2})}`,caretColorError:u,clearColor:x,clearColorHover:S,clearColorPressed:P,iconColor:Z,iconColorDisabled:L,iconColorHover:N,iconColorPressed:O,suffixTextColor:e})},Rw={name:"Input",common:on,self:Pw};var Sf=Rw;const Mf=An("n-input");function Lw(n){let e=0;for(const t of n)e++;return e}function Xo(n){return["",void 0,null].includes(n)}var Ad=Be({name:"InputWordCount",setup(n,{slots:e}){const{mergedValueRef:t,maxlengthRef:i,mergedClsPrefixRef:r}=pt(Mf),o=ue(()=>{const{value:s}=t;return s===null||Array.isArray(s)?0:Lw(s)});return()=>{const{value:s}=i,{value:a}=t;return T("span",{class:`${r.value}-input-word-count`},Xp(e.default,{value:a===null||Array.isArray(a)?"":a},()=>[s===void 0?o.value:`${o.value} / ${s}`]))}}}),Dw=J("input",`
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
 `,[te("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),te("&::placeholder","color: #0000;"),te("&:-webkit-autofill ~",[K("placeholder","display: none;")])]),Se("round",[St("textarea","border-radius: calc(var(--n-height) / 2);")]),K("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[te("span",`
 width: 100%;
 display: inline-block;
 `)]),Se("textarea",[K("placeholder","overflow: visible;")]),St("autosize","width: 100%;"),Se("autosize",[K("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),J("input-wrapper",`
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
 `,[te("+",[K("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),St("textarea",[K("placeholder","white-space: nowrap;")]),K("eye",`
 transition: color .3s var(--n-bezier);
 `),Se("textarea","width: 100%;",[J("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),Se("resizable",[J("input-wrapper",`
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
 `)]),Se("pair",[K("input-el, placeholder","text-align: center;"),K("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `,[J("icon",`
 color: var(--n-icon-color);
 `),J("base-icon",`
 color: var(--n-icon-color);
 `)])]),Se("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[K("border","border: var(--n-border-disabled);"),K("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),K("placeholder","color: var(--n-placeholder-color-disabled);"),K("separator","color: var(--n-text-color-disabled);",[J("icon",`
 color: var(--n-icon-color-disabled);
 `),J("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),K("suffix, prefix","color: var(--n-text-color-disabled);",[J("icon",`
 color: var(--n-icon-color-disabled);
 `),J("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),St("disabled",[K("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[te("&:hover",`
 color: var(--n-icon-color-hover);
 `),te("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),te("&:hover",[K("state-border","border: var(--n-border-hover);")]),Se("focus","background-color: var(--n-color-focus);",[K("state-border",`
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
 `,[J("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),J("base-clear",`
 font-size: var(--n-icon-size);
 `,[K("placeholder",[J("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),te(">",[J("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),J("base-icon",`
 font-size: var(--n-icon-size);
 `)]),J("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(n=>Se(`${n}-status`,[St("disabled",[J("base-loading",`
 color: var(--n-loading-color-${n})
 `),K("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${n});
 `),K("state-border",`
 border: var(--n-border-${n});
 `),te("&:hover",[K("state-border",`
 border: var(--n-border-hover-${n});
 `)]),te("&:focus",`
 background-color: var(--n-color-focus-${n});
 `,[K("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)]),Se("focus",`
 background-color: var(--n-color-focus-${n});
 `,[K("state-border",`
 box-shadow: var(--n-box-shadow-focus-${n});
 border: var(--n-border-focus-${n});
 `)])])]))]);const Iw=Object.assign(Object.assign({},lt.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean});var zw=Be({name:"Input",props:Iw,setup(n){const{mergedClsPrefixRef:e,mergedBorderedRef:t,inlineThemeDisabled:i,mergedRtlRef:r}=rn(n),o=lt("Input","-input",Dw,Sf,n,e),s=oe(null),a=oe(null),l=oe(null),c=oe(null),d=oe(null),u=oe(null),h=oe(null),{localeRef:g}=ja("Input"),m=oe(n.defaultValue),p=nt(n,"value"),f=Pi(p,m),v=Kr(n),{mergedSizeRef:y,mergedDisabledRef:E,mergedStatusRef:_}=v,M=oe(!1),A=oe(!1),w=oe(!1),x=oe(!1);let S=null;const P=ue(()=>{const{placeholder:G,pair:ve}=n;return ve?Array.isArray(G)?G:G===void 0?["",""]:[G,G]:G===void 0?[g.value.placeholder]:[G]}),D=ue(()=>{const{value:G}=w,{value:ve}=f,{value:Ue}=P;return!G&&(Xo(ve)||Array.isArray(ve)&&Xo(ve[0]))&&Ue[0]}),$=ue(()=>{const{value:G}=w,{value:ve}=f,{value:Ue}=P;return!G&&Ue[1]&&(Xo(ve)||Array.isArray(ve)&&Xo(ve[1]))}),Z=fn(()=>n.internalForceFocus||M.value),L=fn(()=>{if(E.value||n.readonly||!n.clearable||!Z.value&&!A.value)return!1;const{value:G}=f,{value:ve}=Z;return n.pair?!!(Array.isArray(G)&&(G[0]||G[1]))&&(A.value||ve):!!G&&(A.value||ve)}),N=ue(()=>{const{showPasswordOn:G}=n;if(G)return G;if(n.showPasswordToggle)return"click"}),O=oe(!1),U=ue(()=>{const{textDecoration:G}=n;return G?Array.isArray(G)?G.map(ve=>({textDecoration:ve})):[{textDecoration:G}]:["",""]}),Y=oe(void 0),I=()=>{var G,ve;if(n.type==="textarea"){const{autosize:Ue}=n;if(Ue&&(Y.value=(ve=(G=h.value)===null||G===void 0?void 0:G.$el)===null||ve===void 0?void 0:ve.offsetWidth),!a.value||typeof Ue=="boolean")return;const{paddingTop:mt,paddingBottom:gt,lineHeight:_t}=window.getComputedStyle(a.value),R=Number(mt.slice(0,-2)),X=Number(gt.slice(0,-2)),ie=Number(_t.slice(0,-2)),{value:ee}=l;if(!ee)return;if(Ue.minRows){const de=Math.max(Ue.minRows,1),He=`${R+X+ie*de}px`;ee.style.minHeight=He}if(Ue.maxRows){const de=`${R+X+ie*Ue.maxRows}px`;ee.style.maxHeight=de}}},k=ue(()=>{const{maxlength:G}=n;return G===void 0?void 0:Number(G)});Wt(()=>{const{value:G}=f;Array.isArray(G)||ce(G)});const se=ka().proxy;function ae(G){const{onUpdateValue:ve,"onUpdate:value":Ue,onInput:mt}=n,{nTriggerFormInput:gt}=v;ve&&qe(ve,G),Ue&&qe(Ue,G),mt&&qe(mt,G),m.value=G,gt()}function pe(G){const{onChange:ve}=n,{nTriggerFormChange:Ue}=v;ve&&qe(ve,G),m.value=G,Ue()}function Ee(G){const{onBlur:ve}=n,{nTriggerFormBlur:Ue}=v;ve&&qe(ve,G),Ue()}function Pe(G){const{onFocus:ve}=n,{nTriggerFormFocus:Ue}=v;ve&&qe(ve,G),Ue()}function W(G){const{onClear:ve}=n;ve&&qe(ve,G)}function $e(G){const{onInputBlur:ve}=n;ve&&qe(ve,G)}function Le(G){const{onInputFocus:ve}=n;ve&&qe(ve,G)}function me(){const{onDeactivate:G}=n;G&&qe(G)}function _e(){const{onActivate:G}=n;G&&qe(G)}function ke(G){const{onClick:ve}=n;ve&&qe(ve,G)}function Oe(G){const{onWrapperFocus:ve}=n;ve&&qe(ve,G)}function Fe(G){const{onWrapperBlur:ve}=n;ve&&qe(ve,G)}function Ye(){w.value=!0}function Ze(G){w.value=!1,G.target===u.value?rt(G,1):rt(G,0)}function rt(G,ve=0,Ue="input"){const mt=G.target.value;if(ce(mt),n.type==="textarea"){const{value:_t}=h;_t&&_t.syncUnifiedContainer()}if(S=mt,w.value)return;const gt=mt;if(!n.pair)Ue==="input"?ae(gt):pe(gt);else{let{value:_t}=f;Array.isArray(_t)?_t=[..._t]:_t=["",""],_t[ve]=gt,Ue==="input"?ae(_t):pe(_t)}se.$forceUpdate()}function fe(G){$e(G),G.relatedTarget===s.value&&me(),G.relatedTarget!==null&&(G.relatedTarget===d.value||G.relatedTarget===u.value||G.relatedTarget===a.value)||(x.value=!1),re(G,"blur")}function ze(G){Le(G),M.value=!0,x.value=!0,_e(),re(G,"focus")}function Ie(G){n.passivelyActivated&&(Fe(G),re(G,"blur"))}function Te(G){n.passivelyActivated&&(M.value=!0,Oe(G),re(G,"focus"))}function re(G,ve){G.relatedTarget!==null&&(G.relatedTarget===d.value||G.relatedTarget===u.value||G.relatedTarget===a.value||G.relatedTarget===s.value)||(ve==="focus"?(Pe(G),M.value=!0):ve==="blur"&&(Ee(G),M.value=!1))}function C(G,ve){rt(G,ve,"change")}function b(G){ke(G)}function F(G){W(G),n.pair?(ae(["",""]),pe(["",""])):(ae(""),pe(""))}function q(G){const{onMousedown:ve}=n;ve&&ve(G);const{tagName:Ue}=G.target;if(Ue!=="INPUT"&&Ue!=="TEXTAREA"){if(n.resizable){const{value:mt}=s;if(mt){const{left:gt,top:_t,width:R,height:X}=mt.getBoundingClientRect(),ie=14;if(gt+R-ie<G.clientX&&G.clientY<gt+R&&_t+X-ie<G.clientY&&G.clientY<_t+X)return}}G.preventDefault(),M.value||B()}}function le(){var G;A.value=!0,n.type==="textarea"&&((G=h.value)===null||G===void 0||G.handleMouseEnterWrapper())}function he(){var G;A.value=!1,n.type==="textarea"&&((G=h.value)===null||G===void 0||G.handleMouseLeaveWrapper())}function De(){E.value||N.value==="click"&&(O.value=!O.value)}function Q(G){if(E.value)return;G.preventDefault();const ve=mt=>{mt.preventDefault(),at("mouseup",document,ve)};if(ct("mouseup",document,ve),N.value!=="mousedown")return;O.value=!0;const Ue=()=>{O.value=!1,at("mouseup",document,Ue)};ct("mouseup",document,Ue)}function Me(G){var ve;switch((ve=n.onKeydown)===null||ve===void 0||ve.call(n,G),G.key){case"Escape":we();break;case"Enter":ye(G);break}}function ye(G){var ve,Ue;if(n.passivelyActivated){const{value:mt}=x;if(mt){n.internalDeactivateOnEnter&&we();return}G.preventDefault(),n.type==="textarea"?(ve=a.value)===null||ve===void 0||ve.focus():(Ue=d.value)===null||Ue===void 0||Ue.focus()}}function we(){n.passivelyActivated&&(x.value=!1,pn(()=>{var G;(G=s.value)===null||G===void 0||G.focus()}))}function B(){var G,ve,Ue;E.value||(n.passivelyActivated?(G=s.value)===null||G===void 0||G.focus():((ve=a.value)===null||ve===void 0||ve.focus(),(Ue=d.value)===null||Ue===void 0||Ue.focus()))}function xe(){var G;!((G=s.value)===null||G===void 0)&&G.contains(document.activeElement)&&document.activeElement.blur()}function V(){var G,ve;(G=a.value)===null||G===void 0||G.select(),(ve=d.value)===null||ve===void 0||ve.select()}function z(){E.value||(a.value?a.value.focus():d.value&&d.value.focus())}function H(){const{value:G}=s;(G==null?void 0:G.contains(document.activeElement))&&G!==document.activeElement&&we()}function ce(G){const{type:ve,pair:Ue,autosize:mt}=n;if(!Ue&&mt)if(ve==="textarea"){const{value:gt}=l;gt&&(gt.textContent=(G!=null?G:"")+`\r
`)}else{const{value:gt}=c;gt&&(G?gt.textContent=G:gt.innerHTML="&nbsp;")}}function ne(){I()}const ge=oe({top:"0"});function Ce(G){var ve;const{scrollTop:Ue}=G.target;ge.value.top=`${-Ue}px`,(ve=h.value)===null||ve===void 0||ve.syncUnifiedContainer()}let be=null;Nn(()=>{const{autosize:G,type:ve}=n;G&&ve==="textarea"?be=Mt(f,Ue=>{!Array.isArray(Ue)&&Ue!==S&&ce(Ue)}):be==null||be()});let We=null;Nn(()=>{n.type==="textarea"?We=Mt(f,G=>{var ve;!Array.isArray(G)&&G!==S&&((ve=h.value)===null||ve===void 0||ve.syncUnifiedContainer())}):We==null||We()}),$t(Mf,{mergedValueRef:f,maxlengthRef:k,mergedClsPrefixRef:e});const ht={wrapperElRef:s,inputElRef:d,textareaElRef:a,isCompositing:w,focus:B,blur:xe,select:V,deactivate:H,activate:z},Pn=Ka("Input",r,e),si=ue(()=>{const{value:G}=y,{common:{cubicBezierEaseInOut:ve},self:{color:Ue,borderRadius:mt,textColor:gt,caretColor:_t,caretColorError:R,caretColorWarning:X,textDecorationColor:ie,border:ee,borderDisabled:de,borderHover:He,borderFocus:Ge,placeholderColor:Xe,placeholderColorDisabled:je,lineHeightTextarea:it,colorDisabled:Je,colorFocus:et,textColorDisabled:dt,boxShadowFocus:Gn,iconSize:li,colorFocusWarning:ci,boxShadowFocusWarning:an,borderWarning:ot,borderFocusWarning:di,borderHoverWarning:xt,colorFocusError:sn,boxShadowFocusError:Rn,borderError:Ii,borderFocusError:ro,borderHoverError:Rt,clearSize:zi,clearColor:oo,clearColorHover:ln,clearColorPressed:rp,iconColor:op,iconColorDisabled:ap,suffixTextColor:sp,countTextColor:lp,iconColorHover:cp,iconColorPressed:dp,loadingColor:up,loadingColorError:hp,loadingColorWarning:fp,[Re("padding",G)]:pp,[Re("fontSize",G)]:mp,[Re("height",G)]:gp}}=o.value,{left:vp,right:xp}=ya(pp);return{"--n-bezier":ve,"--n-count-text-color":lp,"--n-color":Ue,"--n-font-size":mp,"--n-border-radius":mt,"--n-height":gp,"--n-padding-left":vp,"--n-padding-right":xp,"--n-text-color":gt,"--n-caret-color":_t,"--n-text-decoration-color":ie,"--n-border":ee,"--n-border-disabled":de,"--n-border-hover":He,"--n-border-focus":Ge,"--n-placeholder-color":Xe,"--n-placeholder-color-disabled":je,"--n-icon-size":li,"--n-line-height-textarea":it,"--n-color-disabled":Je,"--n-color-focus":et,"--n-text-color-disabled":dt,"--n-box-shadow-focus":Gn,"--n-loading-color":up,"--n-caret-color-warning":X,"--n-color-focus-warning":ci,"--n-box-shadow-focus-warning":an,"--n-border-warning":ot,"--n-border-focus-warning":di,"--n-border-hover-warning":xt,"--n-loading-color-warning":fp,"--n-caret-color-error":R,"--n-color-focus-error":sn,"--n-box-shadow-focus-error":Rn,"--n-border-error":Ii,"--n-border-focus-error":ro,"--n-border-hover-error":Rt,"--n-loading-color-error":hp,"--n-clear-color":oo,"--n-clear-size":zi,"--n-clear-color-hover":ln,"--n-clear-color-pressed":rp,"--n-icon-color":op,"--n-icon-color-hover":cp,"--n-icon-color-pressed":dp,"--n-icon-color-disabled":ap,"--n-suffix-text-color":sp}}),Zt=i?Kt("input",ue(()=>{const{value:G}=y;return G[0]}),si,n):void 0;return Object.assign(Object.assign({},ht),{wrapperElRef:s,inputElRef:d,inputMirrorElRef:c,inputEl2Ref:u,textareaElRef:a,textareaMirrorElRef:l,textareaScrollbarInstRef:h,rtlEnabled:Pn,uncontrolledValue:m,mergedValue:f,passwordVisible:O,mergedPlaceholder:P,showPlaceholder1:D,showPlaceholder2:$,mergedFocus:Z,isComposing:w,activated:x,showClearButton:L,mergedSize:y,mergedDisabled:E,textDecorationStyle:U,mergedClsPrefix:e,mergedBordered:t,mergedShowPasswordOn:N,placeholderStyle:ge,mergedStatus:_,textAreaScrollContainerWidth:Y,handleTextAreaScroll:Ce,handleCompositionStart:Ye,handleCompositionEnd:Ze,handleInput:rt,handleInputBlur:fe,handleInputFocus:ze,handleWrapperBlur:Ie,handleWrapperFocus:Te,handleMouseEnter:le,handleMouseLeave:he,handleMouseDown:q,handleChange:C,handleClick:b,handleClear:F,handlePasswordToggleClick:De,handlePasswordToggleMousedown:Q,handleWrapperKeyDown:Me,handleTextAreaMirrorResize:ne,getTextareaScrollContainer:()=>a.value,mergedTheme:o,cssVars:i?void 0:si,themeClass:Zt==null?void 0:Zt.themeClass,onRender:Zt==null?void 0:Zt.onRender})},render(){var n,e;const{mergedClsPrefix:t,mergedStatus:i,themeClass:r,onRender:o}=this,s=this.$slots;return o==null||o(),T("div",{ref:"wrapperElRef",class:[`${t}-input`,r,i&&`${t}-input--${i}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:this.type==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&this.type!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeyDown},T("div",{class:`${t}-input-wrapper`},Dt(s.prefix,a=>a&&T("div",{class:`${t}-input__prefix`},a)),this.type==="textarea"?T(Ya,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0},{default:()=>{var a,l;const{textAreaScrollContainerWidth:c}=this,d={width:this.autosize&&c&&`${c}px`};return T(ri,null,T("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${t}-input__textarea-el`,(a=this.inputProps)===null||a===void 0?void 0:a.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(l=this.inputProps)===null||l===void 0?void 0:l.style,d],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?T("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,d],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?T(wo,{onResize:this.handleTextAreaMirrorResize},{default:()=>T("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):T("div",{class:`${t}-input__input`},T("input",Object.assign({type:this.type==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":this.type},this.inputProps,{ref:"inputElRef",class:[`${t}-input__input-el`,(n=this.inputProps)===null||n===void 0?void 0:n.class],style:[this.textDecorationStyle[0],(e=this.inputProps)===null||e===void 0?void 0:e.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:a=>this.handleInput(a,0),onChange:a=>this.handleChange(a,0)})),this.showPlaceholder1?T("div",{class:`${t}-input__placeholder`},T("span",null,this.mergedPlaceholder[0])):null,this.autosize?T("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"},"\xA0"):null),!this.pair&&Dt(s.suffix,a=>a||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?T("div",{class:`${t}-input__suffix`},[Dt(s["clear-icon-placeholder"],l=>(this.clearable||l)&&T(Ml,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>l,icon:()=>{var c,d;return(d=(c=this.$slots)["clear-icon"])===null||d===void 0?void 0:d.call(c)}})),this.internalLoadingBeforeSuffix?null:a,this.loading!==void 0?T(_f,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?a:null,this.showCount&&this.type!=="textarea"?T(Ad,null,{default:l=>{var c;return(c=s.count)===null||c===void 0?void 0:c.call(s,l)}}):null,this.mergedShowPasswordOn&&this.type==="password"?T("div",{class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?Br(s["password-visible-icon"],()=>[T(ir,{clsPrefix:t},{default:()=>T(j_,null)})]):Br(s["password-invisible-icon"],()=>[T(ir,{clsPrefix:t},{default:()=>T(q_,null)})])):null]):null)),this.pair?T("span",{class:`${t}-input__separator`},Br(s.separator,()=>[this.separator])):null,this.pair?T("div",{class:`${t}-input-wrapper`},T("div",{class:`${t}-input__input`},T("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:this.maxlength,minlength:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:this.handleInputFocus,onInput:a=>this.handleInput(a,1),onChange:a=>this.handleChange(a,1)}),this.showPlaceholder2?T("div",{class:`${t}-input__placeholder`},T("span",null,this.mergedPlaceholder[1])):null),Dt(s.suffix,a=>(this.clearable||a)&&T("div",{class:`${t}-input__suffix`},[this.clearable&&T(Ml,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var l;return(l=s["clear-icon"])===null||l===void 0?void 0:l.call(s)},placeholder:()=>{var l;return(l=s["clear-icon-placeholder"])===null||l===void 0?void 0:l.call(s)}}),a]))):null,this.mergedBordered?T("div",{class:`${t}-input__border`}):null,this.mergedBordered?T("div",{class:`${t}-input__state-border`}):null,this.showCount&&this.type==="textarea"?T(Ad,null,{default:a=>{var l;return(l=s.count)===null||l===void 0?void 0:l.call(s,a)}}):null)}}),Fw=J("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[te(">",[J("input",[te("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),te("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),J("button",[te("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[K("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),te("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[K("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),te("*",[te("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[te(">",[J("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),J("base-selection",[J("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),J("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),K("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),te("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[te(">",[J("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),J("base-selection",[J("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),J("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),K("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]);const Bw={};var kw=Be({name:"InputGroup",props:Bw,setup(n){const{mergedClsPrefixRef:e}=rn(n);return Jr("-input-group",Fw,e),{mergedClsPrefix:e}},render(){const{mergedClsPrefix:n}=this;return T("div",{class:`${n}-input-group`},this.$slots)}});function Bi(n){return Vl(n,[255,255,255,.16])}function Yo(n){return Vl(n,[0,0,0,.12])}var Ow={paddingTiny:"0 6px",paddingSmall:"0 10px",paddingMedium:"0 14px",paddingLarge:"0 18px",paddingRoundTiny:"0 10px",paddingRoundSmall:"0 14px",paddingRoundMedium:"0 18px",paddingRoundLarge:"0 22px",iconMarginTiny:"6px",iconMarginSmall:"6px",iconMarginMedium:"6px",iconMarginLarge:"6px",iconSizeTiny:"14px",iconSizeSmall:"18px",iconSizeMedium:"18px",iconSizeLarge:"20px",rippleDuration:".6s"};const Nw=n=>{const{heightTiny:e,heightSmall:t,heightMedium:i,heightLarge:r,borderRadius:o,fontSizeTiny:s,fontSizeSmall:a,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:d,textColor2:u,textColor3:h,primaryColorHover:g,primaryColorPressed:m,borderColor:p,primaryColor:f,baseColor:v,infoColor:y,infoColorHover:E,infoColorPressed:_,successColor:M,successColorHover:A,successColorPressed:w,warningColor:x,warningColorHover:S,warningColorPressed:P,errorColor:D,errorColorHover:$,errorColorPressed:Z,fontWeight:L,buttonColor2:N,buttonColor2Hover:O,buttonColor2Pressed:U,fontWeightStrong:Y}=n;return Object.assign(Object.assign({},Ow),{heightTiny:e,heightSmall:t,heightMedium:i,heightLarge:r,borderRadiusTiny:o,borderRadiusSmall:o,borderRadiusMedium:o,borderRadiusLarge:o,fontSizeTiny:s,fontSizeSmall:a,fontSizeMedium:l,fontSizeLarge:c,opacityDisabled:d,colorOpacitySecondary:"0.16",colorOpacitySecondaryHover:"0.22",colorOpacitySecondaryPressed:"0.28",colorSecondary:N,colorSecondaryHover:O,colorSecondaryPressed:U,colorTertiary:N,colorTertiaryHover:O,colorTertiaryPressed:U,colorQuaternary:"#0000",colorQuaternaryHover:O,colorQuaternaryPressed:U,color:"#0000",colorHover:"#0000",colorPressed:"#0000",colorFocus:"#0000",colorDisabled:"#0000",textColor:u,textColorTertiary:h,textColorHover:g,textColorPressed:m,textColorFocus:g,textColorDisabled:u,textColorText:u,textColorTextHover:g,textColorTextPressed:m,textColorTextFocus:g,textColorTextDisabled:u,textColorGhost:u,textColorGhostHover:g,textColorGhostPressed:m,textColorGhostFocus:g,textColorGhostDisabled:u,border:`1px solid ${p}`,borderHover:`1px solid ${g}`,borderPressed:`1px solid ${m}`,borderFocus:`1px solid ${g}`,borderDisabled:`1px solid ${p}`,rippleColor:f,colorPrimary:f,colorHoverPrimary:g,colorPressedPrimary:m,colorFocusPrimary:g,colorDisabledPrimary:f,textColorPrimary:v,textColorHoverPrimary:v,textColorPressedPrimary:v,textColorFocusPrimary:v,textColorDisabledPrimary:v,textColorTextPrimary:f,textColorTextHoverPrimary:g,textColorTextPressedPrimary:m,textColorTextFocusPrimary:g,textColorTextDisabledPrimary:u,textColorGhostPrimary:f,textColorGhostHoverPrimary:g,textColorGhostPressedPrimary:m,textColorGhostFocusPrimary:g,textColorGhostDisabledPrimary:f,borderPrimary:`1px solid ${f}`,borderHoverPrimary:`1px solid ${g}`,borderPressedPrimary:`1px solid ${m}`,borderFocusPrimary:`1px solid ${g}`,borderDisabledPrimary:`1px solid ${f}`,rippleColorPrimary:f,colorInfo:y,colorHoverInfo:E,colorPressedInfo:_,colorFocusInfo:E,colorDisabledInfo:y,textColorInfo:v,textColorHoverInfo:v,textColorPressedInfo:v,textColorFocusInfo:v,textColorDisabledInfo:v,textColorTextInfo:y,textColorTextHoverInfo:E,textColorTextPressedInfo:_,textColorTextFocusInfo:E,textColorTextDisabledInfo:u,textColorGhostInfo:y,textColorGhostHoverInfo:E,textColorGhostPressedInfo:_,textColorGhostFocusInfo:E,textColorGhostDisabledInfo:y,borderInfo:`1px solid ${y}`,borderHoverInfo:`1px solid ${E}`,borderPressedInfo:`1px solid ${_}`,borderFocusInfo:`1px solid ${E}`,borderDisabledInfo:`1px solid ${y}`,rippleColorInfo:y,colorSuccess:M,colorHoverSuccess:A,colorPressedSuccess:w,colorFocusSuccess:A,colorDisabledSuccess:M,textColorSuccess:v,textColorHoverSuccess:v,textColorPressedSuccess:v,textColorFocusSuccess:v,textColorDisabledSuccess:v,textColorTextSuccess:M,textColorTextHoverSuccess:A,textColorTextPressedSuccess:w,textColorTextFocusSuccess:A,textColorTextDisabledSuccess:u,textColorGhostSuccess:M,textColorGhostHoverSuccess:A,textColorGhostPressedSuccess:w,textColorGhostFocusSuccess:A,textColorGhostDisabledSuccess:M,borderSuccess:`1px solid ${M}`,borderHoverSuccess:`1px solid ${A}`,borderPressedSuccess:`1px solid ${w}`,borderFocusSuccess:`1px solid ${A}`,borderDisabledSuccess:`1px solid ${M}`,rippleColorSuccess:M,colorWarning:x,colorHoverWarning:S,colorPressedWarning:P,colorFocusWarning:S,colorDisabledWarning:x,textColorWarning:v,textColorHoverWarning:v,textColorPressedWarning:v,textColorFocusWarning:v,textColorDisabledWarning:v,textColorTextWarning:x,textColorTextHoverWarning:S,textColorTextPressedWarning:P,textColorTextFocusWarning:S,textColorTextDisabledWarning:u,textColorGhostWarning:x,textColorGhostHoverWarning:S,textColorGhostPressedWarning:P,textColorGhostFocusWarning:S,textColorGhostDisabledWarning:x,borderWarning:`1px solid ${x}`,borderHoverWarning:`1px solid ${S}`,borderPressedWarning:`1px solid ${P}`,borderFocusWarning:`1px solid ${S}`,borderDisabledWarning:`1px solid ${x}`,rippleColorWarning:x,colorError:D,colorHoverError:$,colorPressedError:Z,colorFocusError:$,colorDisabledError:D,textColorError:v,textColorHoverError:v,textColorPressedError:v,textColorFocusError:v,textColorDisabledError:v,textColorTextError:D,textColorTextHoverError:$,textColorTextPressedError:Z,textColorTextFocusError:$,textColorTextDisabledError:u,textColorGhostError:D,textColorGhostHoverError:$,textColorGhostPressedError:Z,textColorGhostFocusError:$,textColorGhostDisabledError:D,borderError:`1px solid ${D}`,borderHoverError:`1px solid ${$}`,borderPressedError:`1px solid ${Z}`,borderFocusError:`1px solid ${$}`,borderDisabledError:`1px solid ${D}`,rippleColorError:D,waveOpacity:"0.6",fontWeight:L,fontWeightStrong:Y})},$w={name:"Button",common:on,self:Nw};var Cf=$w;const Uw=An("n-button-group");var Hw=te([J("button",`
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
 `,[Se("color",[K("border",{borderColor:"var(--n-border-color)"}),Se("disabled",[K("border",{borderColor:"var(--n-border-color-disabled)"})]),St("disabled",[te("&:focus",[K("state-border",{borderColor:"var(--n-border-color-focus)"})]),te("&:hover",[K("state-border",{borderColor:"var(--n-border-color-hover)"})]),te("&:active",[K("state-border",{borderColor:"var(--n-border-color-pressed)"})]),Se("pressed",[K("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),Se("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[K("border",{border:"var(--n-border-disabled)"})]),St("disabled",[te("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[K("state-border",{border:"var(--n-border-focus)"})]),te("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[K("state-border",{border:"var(--n-border-hover)"})]),te("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[K("state-border",{border:"var(--n-border-pressed)"})]),Se("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[K("state-border",{border:"var(--n-border-pressed)"})])]),Se("loading","cursor: wait;"),J("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[Se("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),Wl&&"MozBoxSizing"in document.createElement("div").style?te("&::moz-focus-inner",{border:0}):null,K("border, state-border",`
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
 `,[J("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 `,[Vr({top:"50%",originalTransform:"translateY(-50%)"})]),Mw()]),K("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `,[te("~",[K("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),Se("block",`
 display: flex;
 width: 100%;
 `),Se("dashed",[K("border, state-border",{borderStyle:"dashed !important"})]),Se("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),te("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),te("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]);const Vw=Object.assign(Object.assign({},lt.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:Boolean}),Ww=Be({name:"Button",props:Vw,setup(n){const e=oe(null),t=oe(null),i=oe(!1),r=fn(()=>!n.quaternary&&!n.tertiary&&!n.secondary&&!n.text&&(!n.color||n.ghost||n.dashed)&&n.bordered),o=pt(Uw,{}),{mergedSizeRef:s}=Kr({},{defaultSize:"medium",mergedSize:_=>{const{size:M}=n;if(M)return M;const{size:A}=o;if(A)return A;const{mergedSize:w}=_||{};return w?w.value:"medium"}}),a=ue(()=>n.focusable&&!n.disabled),l=_=>{var M;n.disabled||n.nativeFocusBehavior||a.value&&(_.preventDefault(),(M=e.value)===null||M===void 0||M.focus({preventScroll:!0}))},c=_=>{var M;if(!n.disabled&&!n.loading){const{onClick:A}=n;A&&qe(A,_),n.text||(M=t.value)===null||M===void 0||M.play()}},d=_=>{switch(_.key){case"Enter":if(!n.keyboard)return;i.value=!1}},u=_=>{switch(_.key){case"Enter":if(!n.keyboard||n.loading){_.preventDefault();return}i.value=!0}},h=()=>{i.value=!1},{inlineThemeDisabled:g,mergedClsPrefixRef:m,mergedRtlRef:p}=rn(n),f=lt("Button","-button",Hw,Cf,n,m),v=Ka("Button",p,m),y=ue(()=>{const _=f.value,{common:{cubicBezierEaseInOut:M,cubicBezierEaseOut:A},self:w}=_,{rippleDuration:x,opacityDisabled:S,fontWeight:P,fontWeightStrong:D}=w,$=s.value,{dashed:Z,type:L,ghost:N,text:O,color:U,round:Y,circle:I,textColor:k,secondary:se,tertiary:ae,quaternary:pe,strong:Ee}=n,Pe={"font-weight":Ee?D:P};let W={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const $e=L==="tertiary",Le=L==="default",me=$e?"default":L;if(O){const Te=k||U,re=Te||w[Re("textColorText",me)];W={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":re,"--n-text-color-hover":Te?Bi(Te):w[Re("textColorTextHover",me)],"--n-text-color-pressed":Te?Yo(Te):w[Re("textColorTextPressed",me)],"--n-text-color-focus":Te?Bi(Te):w[Re("textColorTextHover",me)],"--n-text-color-disabled":Te||w[Re("textColorTextDisabled",me)]}}else if(N||Z){const Te=k||U;W={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":U||w[Re("rippleColor",me)],"--n-text-color":Te||w[Re("textColorGhost",me)],"--n-text-color-hover":Te?Bi(Te):w[Re("textColorGhostHover",me)],"--n-text-color-pressed":Te?Yo(Te):w[Re("textColorGhostPressed",me)],"--n-text-color-focus":Te?Bi(Te):w[Re("textColorGhostHover",me)],"--n-text-color-disabled":Te||w[Re("textColorGhostDisabled",me)]}}else if(se){const Te=Le?w.textColor:$e?w.textColorTertiary:w[Re("color",me)],re=U||Te,C=L!=="default"&&L!=="tertiary";W={"--n-color":C?Ke(re,{alpha:Number(w.colorOpacitySecondary)}):w.colorSecondary,"--n-color-hover":C?Ke(re,{alpha:Number(w.colorOpacitySecondaryHover)}):w.colorSecondaryHover,"--n-color-pressed":C?Ke(re,{alpha:Number(w.colorOpacitySecondaryPressed)}):w.colorSecondaryPressed,"--n-color-focus":C?Ke(re,{alpha:Number(w.colorOpacitySecondaryHover)}):w.colorSecondaryHover,"--n-color-disabled":w.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":re,"--n-text-color-hover":re,"--n-text-color-pressed":re,"--n-text-color-focus":re,"--n-text-color-disabled":re}}else if(ae||pe){const Te=Le?w.textColor:$e?w.textColorTertiary:w[Re("color",me)],re=U||Te;ae?(W["--n-color"]=w.colorTertiary,W["--n-color-hover"]=w.colorTertiaryHover,W["--n-color-pressed"]=w.colorTertiaryPressed,W["--n-color-focus"]=w.colorSecondaryHover,W["--n-color-disabled"]=w.colorTertiary):(W["--n-color"]=w.colorQuaternary,W["--n-color-hover"]=w.colorQuaternaryHover,W["--n-color-pressed"]=w.colorQuaternaryPressed,W["--n-color-focus"]=w.colorQuaternaryHover,W["--n-color-disabled"]=w.colorQuaternary),W["--n-ripple-color"]="#0000",W["--n-text-color"]=re,W["--n-text-color-hover"]=re,W["--n-text-color-pressed"]=re,W["--n-text-color-focus"]=re,W["--n-text-color-disabled"]=re}else W={"--n-color":U||w[Re("color",me)],"--n-color-hover":U?Bi(U):w[Re("colorHover",me)],"--n-color-pressed":U?Yo(U):w[Re("colorPressed",me)],"--n-color-focus":U?Bi(U):w[Re("colorFocus",me)],"--n-color-disabled":U||w[Re("colorDisabled",me)],"--n-ripple-color":U||w[Re("rippleColor",me)],"--n-text-color":k||(U?w.textColorPrimary:$e?w.textColorTertiary:w[Re("textColor",me)]),"--n-text-color-hover":k||(U?w.textColorHoverPrimary:w[Re("textColorHover",me)]),"--n-text-color-pressed":k||(U?w.textColorPressedPrimary:w[Re("textColorPressed",me)]),"--n-text-color-focus":k||(U?w.textColorFocusPrimary:w[Re("textColorFocus",me)]),"--n-text-color-disabled":k||(U?w.textColorDisabledPrimary:w[Re("textColorDisabled",me)])};let _e={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};O?_e={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:_e={"--n-border":w[Re("border",me)],"--n-border-hover":w[Re("borderHover",me)],"--n-border-pressed":w[Re("borderPressed",me)],"--n-border-focus":w[Re("borderFocus",me)],"--n-border-disabled":w[Re("borderDisabled",me)]};const{[Re("height",$)]:ke,[Re("fontSize",$)]:Oe,[Re("padding",$)]:Fe,[Re("paddingRound",$)]:Ye,[Re("iconSize",$)]:Ze,[Re("borderRadius",$)]:rt,[Re("iconMargin",$)]:fe,waveOpacity:ze}=w,Ie={"--n-width":I&&!O?ke:"initial","--n-height":O?"initial":ke,"--n-font-size":Oe,"--n-padding":I||O?"initial":Y?Ye:Fe,"--n-icon-size":Ze,"--n-icon-margin":fe,"--n-border-radius":O?"initial":I||Y?ke:rt};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":M,"--n-bezier-ease-out":A,"--n-ripple-duration":x,"--n-opacity-disabled":S,"--n-wave-opacity":ze},Pe),W),_e),Ie)}),E=g?Kt("button",ue(()=>{let _="";const{dashed:M,type:A,ghost:w,text:x,color:S,round:P,circle:D,textColor:$,secondary:Z,tertiary:L,quaternary:N,strong:O}=n;M&&(_+="a"),w&&(_+="b"),x&&(_+="c"),P&&(_+="d"),D&&(_+="e"),Z&&(_+="f"),L&&(_+="g"),N&&(_+="h"),O&&(_+="i"),S&&(_+="j"+Ea(S)),$&&(_+="k"+Ea($));const{value:U}=s;return _+="l"+U[0],_+="m"+A[0],_}),y,n):void 0;return{selfElRef:e,waveElRef:t,mergedClsPrefix:m,mergedFocusable:a,mergedSize:s,showBorder:r,enterPressed:i,rtlEnabled:v,handleMousedown:l,handleKeydown:u,handleBlur:h,handleKeyup:d,handleClick:c,customColorCssVars:ue(()=>{const{color:_}=n;if(!_)return null;const M=Bi(_);return{"--n-border-color":_,"--n-border-color-hover":M,"--n-border-color-pressed":Yo(_),"--n-border-color-focus":M,"--n-border-color-disabled":_}}),cssVars:g?void 0:y,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender}},render(){const{mergedClsPrefix:n,tag:e,onRender:t}=this;t==null||t();const i=Dt(this.$slots.default,r=>r&&T("span",{class:`${n}-button__content`},r));return T(e,{ref:"selfElRef",class:[this.themeClass,`${n}-button`,`${n}-button--${this.type}-type`,`${n}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${n}-button--rtl`,this.disabled&&`${n}-button--disabled`,this.block&&`${n}-button--block`,this.enterPressed&&`${n}-button--pressed`,!this.text&&this.dashed&&`${n}-button--dashed`,this.color&&`${n}-button--color`,this.secondary&&`${n}-button--secondary`,this.loading&&`${n}-button--loading`,this.ghost&&`${n}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&i,T(Z_,{width:!0},{default:()=>Dt(this.$slots.icon,r=>(this.loading||r)&&T("span",{class:`${n}-button__icon`,style:{margin:bo(this.$slots.default)?"0":""}},T(qa,null,{default:()=>this.loading?T(Xa,{clsPrefix:n,key:"loading",class:`${n}-icon-slot`,strokeWidth:20}):T("div",{key:"icon",class:`${n}-icon-slot`,role:"none"},r)})))}),this.iconPlacement==="left"&&i,this.text?null:T(Ky,{ref:"waveElRef",clsPrefix:n}),this.showBorder?T("div",{"aria-hidden":!0,class:`${n}-button__border`,style:this.customColorCssVars}):null,this.showBorder?T("div",{"aria-hidden":!0,class:`${n}-button__state-border`,style:this.customColorCssVars}):null)}});var Mi=Ww;const Gw=n=>{const{fontSize:e,boxShadow2:t,popoverColor:i,textColor2:r,borderRadius:o,borderColor:s,heightSmall:a,heightMedium:l,heightLarge:c,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:h,dividerColor:g}=n;return{panelFontSize:e,boxShadow:t,color:i,textColor:r,borderRadius:o,border:`1px solid ${s}`,heightSmall:a,heightMedium:l,heightLarge:c,fontSizeSmall:d,fontSizeMedium:u,fontSizeLarge:h,dividerColor:g}},jw={name:"ColorPicker",common:on,peers:{Input:Sf,Button:Cf},self:Gw};var qw=jw;function Xw(n,e){switch(n[0]){case"hex":return e?"#000000FF":"#000000";case"rgb":return e?"rgba(0, 0, 0, 1)":"rgb(0, 0, 0)";case"hsl":return e?"hsla(0, 0%, 0%, 1)":"hsl(0, 0%, 0%)";case"hsv":return e?"hsva(0, 0%, 0%, 1)":"hsv(0, 0%, 0%)"}return"#000000"}function Eo(n){return n===null?null:/^ *#/.test(n)?"hex":n.includes("rgb")?"rgb":n.includes("hsl")?"hsl":n.includes("hsv")?"hsv":null}function Yw(n){return n=Math.round(n),n>=360?359:n<0?0:n}function Kw(n){return n=Math.round(n*100)/100,n>1?1:n<0?0:n}const Zw={rgb:{hex(n){return Si(It(n))},hsl(n){const[e,t,i,r]=It(n);return wi([...rl(e,t,i),r])},hsv(n){const[e,t,i,r]=It(n);return Qi([...il(e,t,i),r])}},hex:{rgb(n){return Bn(It(n))},hsl(n){const[e,t,i,r]=It(n);return wi([...rl(e,t,i),r])},hsv(n){const[e,t,i,r]=It(n);return Qi([...il(e,t,i),r])}},hsl:{hex(n){const[e,t,i,r]=Fr(n);return Si([...ol(e,t,i),r])},rgb(n){const[e,t,i,r]=Fr(n);return Bn([...ol(e,t,i),r])},hsv(n){const[e,t,i,r]=Fr(n);return Qi([...dh(e,t,i),r])}},hsv:{hex(n){const[e,t,i,r]=Ji(n);return Si([..._i(e,t,i),r])},rgb(n){const[e,t,i,r]=Ji(n);return Bn([..._i(e,t,i),r])},hsl(n){const[e,t,i,r]=Ji(n);return wi([...wa(e,t,i),r])}}};function Tf(n,e,t){return t=t||Eo(n),t?t===e?n:Zw[t][e](n):null}const gr="12px",Jw=12,ki="6px",Qw=6,eS="linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)";var tS=Be({name:"HueSlider",props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(n){const e=oe(null);function t(o){!e.value||(ct("mousemove",document,i),ct("mouseup",document,r),i(o))}function i(o){const{value:s}=e;if(!s)return;const{width:a,left:l}=s.getBoundingClientRect(),c=Yw((o.clientX-l-Qw)/(a-Jw)*360);n.onUpdateHue(c)}function r(){var o;at("mousemove",document,i),at("mouseup",document,r),(o=n.onComplete)===null||o===void 0||o.call(n)}return{railRef:e,handleMouseDown:t}},render(){const{clsPrefix:n}=this;return T("div",{class:`${n}-color-picker-slider`,style:{height:gr,borderRadius:ki}},T("div",{ref:"railRef",style:{boxShadow:"inset 0 0 2px 0 rgba(0, 0, 0, .24)",boxSizing:"border-box",backgroundImage:eS,height:gr,borderRadius:ki,position:"relative"},onMousedown:this.handleMouseDown},T("div",{style:{position:"absolute",left:ki,right:ki,top:0,bottom:0}},T("div",{class:`${n}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${ki})`,borderRadius:ki,width:gr,height:gr}},T("div",{class:`${n}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:ki,width:gr,height:gr}})))))}});const ho="12px",nS=12,Oi="6px";var iS=Be({name:"AlphaSlider",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(n){const e=oe(null);function t(o){!e.value||!n.rgba||(ct("mousemove",document,i),ct("mouseup",document,r),i(o))}function i(o){const{value:s}=e;if(!s)return;const{width:a,left:l}=s.getBoundingClientRect(),c=(o.clientX-l)/(a-nS);n.onUpdateAlpha(Kw(c))}function r(){var o;at("mousemove",document,i),at("mouseup",document,r),(o=n.onComplete)===null||o===void 0||o.call(n)}return{railRef:e,railBackgroundImage:ue(()=>{const{rgba:o}=n;return o?`linear-gradient(to right, rgba(${o[0]}, ${o[1]}, ${o[2]}, 0) 0%, rgba(${o[0]}, ${o[1]}, ${o[2]}, 1) 100%)`:""}),handleMouseDown:t}},render(){const{clsPrefix:n}=this;return T("div",{class:`${n}-color-picker-slider`,ref:"railRef",style:{height:ho,borderRadius:Oi},onMousedown:this.handleMouseDown},T("div",{style:{borderRadius:Oi,position:"absolute",left:0,right:0,top:0,bottom:0,overflow:"hidden"}},T("div",{class:`${n}-color-picker-checkboard`}),T("div",{class:`${n}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&T("div",{style:{position:"absolute",left:Oi,right:Oi,top:0,bottom:0}},T("div",{class:`${n}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${Oi})`,borderRadius:Oi,width:ho,height:ho}},T("div",{class:`${n}-color-picker-handle__fill`,style:{backgroundColor:Bn(this.rgba),borderRadius:Oi,width:ho,height:ho}}))))}});const Ko="12px",Zo="6px";var rS=Be({name:"Pallete",props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(n){const e=oe(null);function t(o){!e.value||(ct("mousemove",document,i),ct("mouseup",document,r),i(o))}function i(o){const{value:s}=e;if(!s)return;const{width:a,height:l,left:c,bottom:d}=s.getBoundingClientRect(),u=(d-o.clientY)/l,h=(o.clientX-c)/a,g=100*(h>1?1:h<0?0:h),m=100*(u>1?1:u<0?0:u);n.onUpdateSV(g,m)}function r(){var o;at("mousemove",document,i),at("mouseup",document,r),(o=n.onComplete)===null||o===void 0||o.call(n)}return{palleteRef:e,handleColor:ue(()=>{const{rgba:o}=n;return o?`rgb(${o[0]}, ${o[1]}, ${o[2]})`:""}),handleMouseDown:t}},render(){const{clsPrefix:n}=this;return T("div",{class:`${n}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:"palleteRef"},T("div",{class:`${n}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),T("div",{class:`${n}-color-picker-pallete__layer ${n}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:"linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))"}}),this.rgba&&T("div",{class:`${n}-color-picker-handle`,style:{width:Ko,height:Ko,borderRadius:Zo,left:`calc(${this.displayedSv[0]}% - ${Zo})`,bottom:`calc(${this.displayedSv[1]}% - ${Zo})`}},T("div",{class:`${n}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Zo,width:Ko,height:Ko}})))}});const fc=An("n-color-picker");function oS(n){return/^\d{1,3}\.?\d*$/.test(n.trim())?Math.max(0,Math.min(parseInt(n),255)):!1}function aS(n){return/^\d{1,3}\.?\d*$/.test(n.trim())?Math.max(0,Math.min(parseInt(n),360)):!1}function sS(n){return/^\d{1,3}\.?\d*$/.test(n.trim())?Math.max(0,Math.min(parseInt(n),100)):!1}function lS(n){const e=n.trim();return/^#[0-9a-fA-F]+$/.test(e)?[4,5,7,9].includes(e.length):!1}function cS(n){return/^\d{1,3}\.?\d*%$/.test(n.trim())?Math.max(0,Math.min(parseInt(n),100)):!1}const dS={paddingSmall:"0 4px"};var Pd=Be({name:"ColorInputUnit",props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(n){const e=oe(""),{themeRef:t}=pt(fc,null);Nn(()=>{e.value=i()});function i(){const{value:s}=n;if(s===null)return"";const{label:a}=n;return a==="HEX"?s:a==="A"?`${Math.floor(s*100)}%`:String(Math.floor(s))}function r(s){e.value=s}function o(s){let a,l;switch(n.label){case"HEX":l=lS(s),l&&n.onUpdateValue(s),e.value=i();break;case"H":a=aS(s),a===!1?e.value=i():n.onUpdateValue(a);break;case"S":case"L":case"V":a=sS(s),a===!1?e.value=i():n.onUpdateValue(a);break;case"A":a=cS(s),a===!1?e.value=i():n.onUpdateValue(a);break;case"R":case"G":case"B":a=oS(s),a===!1?e.value=i():n.onUpdateValue(a);break}}return{mergedTheme:t,inputValue:e,handleInputChange:o,handleInputUpdateValue:r}},render(){const{mergedTheme:n}=this;return T(zw,{size:"small",placeholder:this.label,theme:n.peers.Input,themeOverrides:n.peerOverrides.Input,builtinThemeOverrides:dS,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label==="A"?"flex-grow: 1.25;":""})}}),uS=Be({name:"ColorInput",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(n){return{handleUnitUpdateValue(e,t){const{showAlpha:i}=n;if(n.mode==="hex"){n.onUpdateValue((i?Si:xo)(t));return}let r;switch(n.valueArr===null?r=[0,0,0,0]:r=Array.from(n.valueArr),n.mode){case"hsv":r[e]=t,n.onUpdateValue((i?Qi:ll)(r));break;case"rgb":r[e]=t,n.onUpdateValue((i?Bn:sl)(r));break;case"hsl":r[e]=t,n.onUpdateValue((i?wi:cl)(r));break}}}},render(){const{clsPrefix:n,modes:e}=this;return T("div",{class:`${n}-color-picker-input`},T("div",{class:`${n}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:e.length===1?"":"pointer"}},this.mode.toUpperCase()+(this.showAlpha?"A":"")),T(kw,null,{default:()=>{const{mode:t,valueArr:i,showAlpha:r}=this;if(t==="hex"){let o=null;try{o=i===null?null:(r?Si:xo)(i)}catch{}return T(Pd,{label:"HEX",showAlpha:r,value:o,onUpdateValue:s=>{this.handleUnitUpdateValue(0,s)}})}return(t+(r?"a":"")).split("").map((o,s)=>T(Pd,{label:o.toUpperCase(),value:i===null?null:i[s],onUpdateValue:a=>{this.handleUnitUpdateValue(s,a)}}))}}))}}),hS=Be({name:"ColorPickerTrigger",props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(n){const{colorPickerSlots:e,renderLabelRef:t}=pt(fc,null);return()=>{const{hsla:i,value:r,clsPrefix:o,onClick:s,disabled:a}=n,l=e.label||t.value;return T("div",{class:[`${o}-color-picker-trigger`,a&&`${o}-color-picker-trigger--disabled`],onClick:a?void 0:s},T("div",{class:`${o}-color-picker-trigger__fill`},T("div",{class:`${o}-color-picker-checkboard`}),T("div",{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:i?wi(i):""}}),r&&i?T("div",{class:`${o}-color-picker-trigger__value`,style:{color:i[2]>50||i[3]<.5?"black":"white"}},l?l(r):r):null))}}});function fS(n,e){if(e==="hsv"){const[t,i,r,o]=Ji(n);return Bn([..._i(t,i,r),o])}return n}function pS(n){const e=document.createElement("canvas").getContext("2d");return e.fillStyle=n,e.fillStyle}var mS=Be({name:"ColorPickerSwatches",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(n){const e=ue(()=>n.swatches.map(o=>{const s=Eo(o);return{value:o,mode:s,legalValue:fS(o,s)}}));function t(o){const{mode:s}=n;let{value:a,mode:l}=o;return l||(l="hex",/^[a-zA-Z]+$/.test(a)?a=pS(a):(dl("color-picker",`color ${a} in swatches is invalid.`),a="#000000")),l===s?a:Tf(a,s,l)}function i(o){n.onUpdateColor(t(o))}function r(o,s){o.key==="Enter"&&i(s)}return{parsedSwatchesRef:e,handleSwatchSelect:i,handleSwatchKeyDown:r}},render(){const{clsPrefix:n}=this;return T("div",{class:`${n}-color-picker-swatches`},this.parsedSwatchesRef.map(e=>T("div",{class:`${n}-color-picker-swatch`,tabindex:0,onClick:()=>this.handleSwatchSelect(e),onKeydown:t=>this.handleSwatchKeyDown(t,e)},T("div",{class:`${n}-color-picker-swatch__fill`,style:{background:e.legalValue}}))))}}),gS=Be({name:"ColorPreview",props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:n=>{const e=Eo(n);return Boolean(!n||e&&e!=="hsv")}},onUpdateColor:{type:Function,required:!0}},setup(n){function e(t){var i;const r=t.target.value;(i=n.onUpdateColor)===null||i===void 0||i.call(n,Tf(r.toUpperCase(),n.mode,"hex")),t.stopPropagation()}return{handleChange:e}},render(){const{clsPrefix:n}=this;return T("div",{class:`${n}-color-picker-preview__preview`},T("span",{class:`${n}-color-picker-preview__fill`,style:{background:this.color||"#000000"}}),T("input",{class:`${n}-color-picker-preview__input`,type:"color",value:this.color,onChange:this.handleChange}))}}),vS=te([J("color-picker",`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 `),J("color-picker-panel",`
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
 `,[To(),J("input",`
 text-align: center;
 `)]),J("color-picker-checkboard",`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[te("&::after",`
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
 `)]),J("color-picker-slider",`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[K("image",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),te("&::after",`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),J("color-picker-handle",`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[K("fill",`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),J("color-picker-pallete",`
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
 `,[Se("shadowed",`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),J("color-picker-preview",`
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
 `)]),J("color-picker-input",`
 display: flex;
 align-items: center;
 `,[J("input",`
 flex-grow: 1;
 flex-basis: 0;
 `),K("mode",`
 width: 72px;
 text-align: center;
 `)]),J("color-picker-control",`
 padding: 12px;
 `),J("color-picker-action",`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[J("button","margin-left: 8px;")]),J("color-picker-trigger",`
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
 `),Se("disabled","cursor: not-allowed"),J("color-picker-checkboard",`
 border-radius: var(--n-border-radius);
 `,[te("&::after",`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),J("color-picker-swatches",`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[J("color-picker-swatch",`
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
 `),te("&:focus",`
 outline: none;
 `,[K("fill",[te("&::after",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]);const xS=Object.assign(Object.assign({},lt.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>["rgb","hex","hsl"]},placement:{type:String,default:"bottom-start"},to:Ut.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]});var Ef=Be({name:"ColorPicker",props:xS,setup(n,{slots:e}){const t=oe(null);let i=null;const r=Kr(n),{mergedSizeRef:o,mergedDisabledRef:s}=r,{localeRef:a}=ja("global"),{mergedClsPrefixRef:l,namespaceRef:c,inlineThemeDisabled:d}=rn(n),u=lt("ColorPicker","-color-picker",vS,qw,n,l);$t(fc,{themeRef:u,renderLabelRef:nt(n,"renderLabel"),colorPickerSlots:e});const h=oe(n.defaultShow),g=Pi(nt(n,"show"),h);function m(fe){const{onUpdateShow:ze,"onUpdate:show":Ie}=n;ze&&qe(ze,fe),Ie&&qe(Ie,fe),h.value=fe}const{defaultValue:p}=n,f=oe(p===void 0?Xw(n.modes,n.showAlpha):p),v=Pi(nt(n,"value"),f),y=oe([v.value]),E=oe(0),_=ue(()=>Eo(v.value)),{modes:M}=n,A=oe(Eo(v.value)||M[0]||"rgb");function w(){const{modes:fe}=n,{value:ze}=A,Ie=fe.findIndex(Te=>Te===ze);~Ie?A.value=fe[(Ie+1)%fe.length]:A.value="rgb"}let x,S,P,D,$,Z,L,N;const O=ue(()=>{const{value:fe}=v;if(!fe)return null;switch(_.value){case"hsv":return Ji(fe);case"hsl":return[x,S,P,N]=Fr(fe),[...dh(x,S,P),N];case"rgb":case"hex":return[$,Z,L,N]=It(fe),[...il($,Z,L),N]}}),U=ue(()=>{const{value:fe}=v;if(!fe)return null;switch(_.value){case"rgb":case"hex":return It(fe);case"hsv":return[x,S,D,N]=Ji(fe),[..._i(x,S,D),N];case"hsl":return[x,S,P,N]=Fr(fe),[...ol(x,S,P),N]}}),Y=ue(()=>{const{value:fe}=v;if(!fe)return null;switch(_.value){case"hsl":return Fr(fe);case"hsv":return[x,S,D,N]=Ji(fe),[...wa(x,S,D),N];case"rgb":case"hex":return[$,Z,L,N]=It(fe),[...rl($,Z,L),N]}}),I=ue(()=>{switch(A.value){case"rgb":case"hex":return U.value;case"hsv":return O.value;case"hsl":return Y.value}}),k=oe(0),se=oe(1),ae=oe([0,0]);function pe(fe,ze){const{value:Ie}=O,Te=k.value,re=Ie?Ie[3]:1;ae.value=[fe,ze];const{showAlpha:C}=n;switch(A.value){case"hsv":W((C?Qi:ll)([Te,fe,ze,re]),"cursor");break;case"hsl":W((C?wi:cl)([...wa(Te,fe,ze),re]),"cursor");break;case"rgb":W((C?Bn:sl)([..._i(Te,fe,ze),re]),"cursor");break;case"hex":W((C?Si:xo)([..._i(Te,fe,ze),re]),"cursor");break}}function Ee(fe){k.value=fe;const{value:ze}=O;if(!ze)return;const[,Ie,Te,re]=ze,{showAlpha:C}=n;switch(A.value){case"hsv":W((C?Qi:ll)([fe,Ie,Te,re]),"cursor");break;case"rgb":W((C?Bn:sl)([..._i(fe,Ie,Te),re]),"cursor");break;case"hex":W((C?Si:xo)([..._i(fe,Ie,Te),re]),"cursor");break;case"hsl":W((C?wi:cl)([...wa(fe,Ie,Te),re]),"cursor");break}}function Pe(fe){switch(A.value){case"hsv":[x,S,D]=O.value,W(Qi([x,S,D,fe]),"cursor");break;case"rgb":[$,Z,L]=U.value,W(Bn([$,Z,L,fe]),"cursor");break;case"hex":[$,Z,L]=U.value,W(Si([$,Z,L,fe]),"cursor");break;case"hsl":[x,S,P]=Y.value,W(wi([x,S,P,fe]),"cursor");break}se.value=fe}function W(fe,ze){ze==="cursor"?i=fe:i=null;const{nTriggerFormChange:Ie,nTriggerFormInput:Te}=r,{onUpdateValue:re,"onUpdate:value":C}=n;re&&qe(re,fe),C&&qe(C,fe),Ie(),Te(),f.value=fe}function $e(fe){W(fe,"input"),pn(Le)}function Le(fe=!0){const{value:ze}=v;if(ze){const{nTriggerFormChange:Ie,nTriggerFormInput:Te}=r,{onComplete:re}=n;re&&re(ze);const{value:C}=y,{value:b}=E;fe&&(C.splice(b+1,C.length,ze),E.value=b+1),Ie(),Te()}}function me(){const{value:fe}=E;fe-1<0||(W(y.value[fe-1],"input"),Le(!1),E.value=fe-1)}function _e(){const{value:fe}=E;fe<0||fe+1>=y.value.length||(W(y.value[fe+1],"input"),Le(!1),E.value=fe+1)}function ke(){const{value:fe}=v,{onConfirm:ze}=n;ze&&ze(fe),m(!1)}const Oe=ue(()=>E.value>=1),Fe=ue(()=>{const{value:fe}=y;return fe.length>1&&E.value<fe.length-1});Mt(g,fe=>{fe||(y.value=[v.value],E.value=0)}),Nn(()=>{if(!(i&&i===v.value)){const{value:fe}=O;fe&&(k.value=fe[0],se.value=fe[3],ae.value=[fe[1],fe[2]])}i=null});const Ye=ue(()=>{const{value:fe}=o,{common:{cubicBezierEaseInOut:ze},self:{textColor:Ie,color:Te,panelFontSize:re,boxShadow:C,border:b,borderRadius:F,dividerColor:q,[Re("height",fe)]:le,[Re("fontSize",fe)]:he}}=u.value;return{"--n-bezier":ze,"--n-text-color":Ie,"--n-color":Te,"--n-panel-font-size":re,"--n-font-size":he,"--n-box-shadow":C,"--n-border":b,"--n-border-radius":F,"--n-height":le,"--n-divider-color":q}}),Ze=d?Kt("color-picker",ue(()=>o.value[0]),Ye,n):void 0;function rt(){var fe;const{value:ze}=U,{value:Ie}=k,{internalActions:Te,modes:re,actions:C}=n,{value:b}=u,{value:F}=l;return T("div",{class:[`${F}-color-picker-panel`,Ze==null?void 0:Ze.themeClass.value],onDragstart:q=>{q.preventDefault()},style:d?void 0:Ye.value},T("div",{class:`${F}-color-picker-control`},T(rS,{clsPrefix:F,rgba:ze,displayedHue:Ie,displayedSv:ae.value,onUpdateSV:pe,onComplete:Le}),T("div",{class:`${F}-color-picker-preview`},T("div",{class:`${F}-color-picker-preview__sliders`},T(tS,{clsPrefix:F,hue:Ie,onUpdateHue:Ee,onComplete:Le}),n.showAlpha?T(iS,{clsPrefix:F,rgba:ze,alpha:se.value,onUpdateAlpha:Pe,onComplete:Le}):null),n.showPreview?T(gS,{clsPrefix:F,mode:A.value,color:U.value&&xo(U.value),onUpdateColor:q=>W(q,"input")}):null),T(uS,{clsPrefix:F,showAlpha:n.showAlpha,mode:A.value,modes:re,onUpdateMode:w,value:v.value,valueArr:I.value,onUpdateValue:$e}),((fe=n.swatches)===null||fe===void 0?void 0:fe.length)&&T(mS,{clsPrefix:F,mode:A.value,swatches:n.swatches,onUpdateColor:q=>W(q,"input")})),C!=null&&C.length?T("div",{class:`${F}-color-picker-action`},C.includes("confirm")&&T(Mi,{size:"small",onClick:ke,theme:b.peers.Button,themeOverrides:b.peerOverrides.Button},{default:()=>a.value.confirm})):null,e.action?T("div",{class:`${F}-color-picker-action`},{default:e.action}):Te?T("div",{class:`${F}-color-picker-action`},Te.includes("undo")&&T(Mi,{size:"small",onClick:me,disabled:!Oe.value,theme:b.peers.Button,themeOverrides:b.peerOverrides.Button},{default:()=>a.value.undo}),Te.includes("redo")&&T(Mi,{size:"small",onClick:_e,disabled:!Fe.value,theme:b.peers.Button,themeOverrides:b.peerOverrides.Button},{default:()=>a.value.redo})):null)}return{mergedClsPrefix:l,namespace:c,selfRef:t,hsla:Y,rgba:U,mergedShow:g,mergedDisabled:s,isMounted:ar(),adjustedTo:Ut(n),mergedValue:v,handleTriggerClick(){m(!0)},handleClickOutside(fe){var ze;!((ze=t.value)===null||ze===void 0)&&ze.contains(fe.target)||m(!1)},renderPanel:rt,cssVars:d?void 0:Ye,themeClass:Ze==null?void 0:Ze.themeClass,onRender:Ze==null?void 0:Ze.onRender}},render(){const{$slots:n,mergedClsPrefix:e,onRender:t}=this;return t==null||t(),T("div",{class:[this.themeClass,`${e}-color-picker`],ref:"selfRef",style:this.cssVars},T($a,null,{default:()=>[T(Ua,null,{default:()=>T(hS,{clsPrefix:e,value:this.mergedValue,hsla:this.hsla,disabled:this.mergedDisabled,onClick:this.handleTriggerClick},{label:n.label})}),T(Ha,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===Ut.tdkey,to:this.adjustedTo},{default:()=>T(Tn,{name:"fade-in-scale-up-transition",appear:this.isMounted},{default:()=>this.mergedShow?ni(this.renderPanel(),[[Hr,this.handleClickOutside,void 0,{capture:!0}]]):null})})]}))}});function bS(n){const{boxShadow2:e}=n;return{menuBoxShadow:e}}const _S={name:"Select",common:on,peers:{InternalSelection:yf,InternalSelectMenu:vf},self:bS};var yS=_S,wS=te([J("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),J("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[To({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]);const SS=Object.assign(Object.assign({},lt.props),{to:Ut.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,internalShowCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array});var MS=Be({name:"Select",props:SS,setup(n){const{mergedClsPrefixRef:e,mergedBorderedRef:t,namespaceRef:i,inlineThemeDisabled:r}=rn(n),o=lt("Select","-select",wS,yS,n,e),s=oe(n.defaultValue),a=nt(n,"value"),l=Pi(a,s),c=oe(!1),d=oe(""),u=ue(()=>{const{valueField:z,childrenField:H}=n,ce=Cw(z,H);return Ey($.value,ce)}),h=ue(()=>Ew(P.value,n.valueField,n.childrenField)),g=oe(!1),m=Pi(nt(n,"show"),g),p=oe(null),f=oe(null),v=oe(null),{localeRef:y}=ja("Select"),E=ue(()=>{var z;return(z=n.placeholder)!==null&&z!==void 0?z:y.value.placeholder}),_=_h(n,["items","options"]),M=[],A=oe([]),w=oe([]),x=oe(new Map),S=ue(()=>{const{fallbackOption:z}=n;if(z===void 0){const{labelField:H,valueField:ce}=n;return ne=>({[H]:String(ne),[ce]:ne})}return z===!1?!1:H=>Object.assign(z(H),{value:H})}),P=ue(()=>w.value.concat(A.value).concat(_.value)),D=ue(()=>{const{labelField:z,valueField:H}=n;return(ce,ne)=>{if(!ne)return!1;const ge=ne[z];if(typeof ge=="string")return xs(ce,ge);const Ce=ne[H];return typeof Ce=="string"?xs(ce,Ce):typeof Ce=="number"?xs(ce,String(Ce)):!1}}),$=ue(()=>{if(n.remote)return _.value;{const{value:z}=P,{value:H}=d;return!H.length||!n.filterable?z:Tw(z,D.value,H,n.childrenField)}});function Z(z){const H=n.remote,{value:ce}=x,{value:ne}=h,{value:ge}=S,Ce=[];return z.forEach(be=>{if(ne.has(be))Ce.push(ne.get(be));else if(H&&ce.has(be))Ce.push(ce.get(be));else if(ge){const We=ge(be);We&&Ce.push(We)}}),Ce}const L=ue(()=>{if(n.multiple){const{value:z}=l;return Array.isArray(z)?Z(z):[]}return null}),N=ue(()=>{const{value:z}=l;return!n.multiple&&!Array.isArray(z)?z===null?null:Z([z])[0]||null:null}),O=Kr(n),{mergedSizeRef:U,mergedDisabledRef:Y,mergedStatusRef:I}=O;function k(z,H){const{onChange:ce,"onUpdate:value":ne,onUpdateValue:ge}=n,{nTriggerFormChange:Ce,nTriggerFormInput:be}=O;ce&&qe(ce,z,H),ge&&qe(ge,z,H),ne&&qe(ne,z,H),s.value=z,Ce(),be()}function se(z){const{onBlur:H}=n,{nTriggerFormBlur:ce}=O;H&&qe(H,z),ce()}function ae(){const{onClear:z}=n;z&&qe(z)}function pe(z){const{onFocus:H}=n,{nTriggerFormFocus:ce}=O;H&&qe(H,z),ce()}function Ee(z){const{onSearch:H}=n;H&&qe(H,z)}function Pe(z){const{onScroll:H}=n;H&&qe(H,z)}function W(){var z;const{remote:H,multiple:ce}=n;if(H){const{value:ne}=x;if(ce){const{valueField:ge}=n;(z=L.value)===null||z===void 0||z.forEach(Ce=>{ne.set(Ce[ge],Ce)})}else{const ge=N.value;ge&&ne.set(ge[n.valueField],ge)}}}function $e(z){const{onUpdateShow:H,"onUpdate:show":ce}=n;H&&qe(H,z),ce&&qe(ce,z),g.value=z}function Le(){Y.value||($e(!0),g.value=!0,n.filterable&&ye())}function me(){$e(!1)}function _e(){d.value="",w.value=M}const ke=oe(!1);function Oe(){n.filterable&&(ke.value=!0)}function Fe(){n.filterable&&(ke.value=!1,m.value||_e())}function Ye(){Y.value||(m.value?n.filterable||me():Le())}function Ze(z){var H,ce;!((ce=(H=v.value)===null||H===void 0?void 0:H.selfRef)===null||ce===void 0)&&ce.contains(z.relatedTarget)||(c.value=!1,se(z),me())}function rt(z){pe(z),c.value=!0}function fe(z){c.value=!0}function ze(z){var H;!((H=p.value)===null||H===void 0)&&H.$el.contains(z.relatedTarget)||(c.value=!1,se(z),me())}function Ie(){var z;(z=p.value)===null||z===void 0||z.focus(),me()}function Te(z){var H;m.value&&(!((H=p.value)===null||H===void 0)&&H.$el.contains(z.target)||me())}function re(z){if(!Array.isArray(z))return[];if(S.value)return Array.from(z);{const{remote:H}=n,{value:ce}=h;if(H){const{value:ne}=x;return z.filter(ge=>ce.has(ge)||ne.has(ge))}else return z.filter(ne=>ce.has(ne))}}function C(z){b(z.rawNode)}function b(z){if(Y.value)return;const{tag:H,remote:ce,clearFilterAfterSelect:ne,valueField:ge}=n;if(H&&!ce){const{value:Ce}=w,be=Ce[0]||null;be&&(A.value.push(be),w.value=M)}if(ce&&x.value.set(z[ge],z),n.multiple){const Ce=re(l.value),be=Ce.findIndex(We=>We===z[ge]);if(~be){if(Ce.splice(be,1),H&&!ce){const We=F(z[ge]);~We&&(A.value.splice(We,1),ne&&(d.value=""))}}else Ce.push(z[ge]),ne&&(d.value="");k(Ce,Z(Ce))}else{if(H&&!ce){const Ce=F(z[ge]);~Ce?A.value=[A.value[Ce]]:A.value=M}Me(),me(),k(z[ge],z)}}function F(z){return A.value.findIndex(ce=>ce[n.valueField]===z)}function q(z){m.value||Le();const{value:H}=z.target;d.value=H;const{tag:ce,remote:ne}=n;if(Ee(H),ce&&!ne){if(!H){w.value=M;return}const{onCreate:ge}=n,Ce=ge?ge(H):{[n.labelField]:H,[n.valueField]:H},{valueField:be}=n;_.value.some(We=>We[be]===Ce[be])||A.value.some(We=>We[be]===Ce[be])?w.value=M:w.value=[Ce]}}function le(z){z.stopPropagation();const{multiple:H}=n;!H&&n.filterable&&me(),ae(),H?k([],[]):k(null,null)}function he(z){!Ta(z,"action")&&!Ta(z,"empty")&&z.preventDefault()}function De(z){Pe(z)}function Q(z){var H,ce,ne,ge,Ce;switch(z.key){case" ":if(n.filterable)break;z.preventDefault();case"Enter":if(!(!((H=p.value)===null||H===void 0)&&H.isCompositing)){if(m.value){const be=(ce=v.value)===null||ce===void 0?void 0:ce.getPendingTmNode();be?C(be):n.filterable||(me(),Me())}else if(Le(),n.tag&&ke.value){const be=w.value[0];if(be){const We=be[n.valueField],{value:ht}=l;n.multiple&&Array.isArray(ht)&&ht.some(Pn=>Pn===We)||b(be)}}}z.preventDefault();break;case"ArrowUp":if(z.preventDefault(),n.loading)return;m.value&&((ne=v.value)===null||ne===void 0||ne.prev());break;case"ArrowDown":if(z.preventDefault(),n.loading)return;m.value?(ge=v.value)===null||ge===void 0||ge.next():Le();break;case"Escape":me(),(Ce=p.value)===null||Ce===void 0||Ce.focus();break}}function Me(){var z;(z=p.value)===null||z===void 0||z.focus()}function ye(){var z;(z=p.value)===null||z===void 0||z.focusInput()}function we(){var z;!m.value||(z=f.value)===null||z===void 0||z.syncPosition()}W(),Mt(nt(n,"options"),W);const B={focus:()=>{var z;(z=p.value)===null||z===void 0||z.focus()},blur:()=>{var z;(z=p.value)===null||z===void 0||z.blur()}},xe=ue(()=>{const{self:{menuBoxShadow:z}}=o.value;return{"--n-menu-box-shadow":z}}),V=r?Kt("select",void 0,xe,n):void 0;return Object.assign(Object.assign({},B),{mergedStatus:I,mergedClsPrefix:e,mergedBordered:t,namespace:i,treeMate:u,isMounted:ar(),triggerRef:p,menuRef:v,pattern:d,uncontrolledShow:g,mergedShow:m,adjustedTo:Ut(n),uncontrolledValue:s,mergedValue:l,followerRef:f,localizedPlaceholder:E,selectedOption:N,selectedOptions:L,mergedSize:U,mergedDisabled:Y,focused:c,activeWithoutMenuOpen:ke,inlineThemeDisabled:r,onTriggerInputFocus:Oe,onTriggerInputBlur:Fe,handleTriggerOrMenuResize:we,handleMenuFocus:fe,handleMenuBlur:ze,handleMenuTabOut:Ie,handleTriggerClick:Ye,handleToggle:C,handleDeleteOption:b,handlePatternInput:q,handleClear:le,handleTriggerBlur:Ze,handleTriggerFocus:rt,handleKeydown:Q,handleMenuAfterLeave:_e,handleMenuClickOutside:Te,handleMenuScroll:De,handleMenuKeydown:Q,handleMenuMousedown:he,mergedTheme:o,cssVars:r?void 0:xe,themeClass:V==null?void 0:V.themeClass,onRender:V==null?void 0:V.onRender})},render(){return T("div",{class:`${this.mergedClsPrefix}-select`},T($a,null,{default:()=>[T(Ua,null,{default:()=>T(Sw,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize},{arrow:()=>{var n,e;return[(e=(n=this.$slots).arrow)===null||e===void 0?void 0:e.call(n)]}})}),T(Ha,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===Ut.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>T(Tn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var n,e,t;return this.mergedShow||this.displayDirective==="show"?((n=this.onRender)===null||n===void 0||n.call(this),ni(T(Xy,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(e=this.menuProps)===null||e===void 0?void 0:e.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(t=this.menuProps)===null||t===void 0?void 0:t.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.internalShowCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var i,r;return[(r=(i=this.$slots).empty)===null||r===void 0?void 0:r.call(i)]},action:()=>{var i,r;return[(r=(i=this.$slots).action)===null||r===void 0?void 0:r.call(i)]}}),this.displayDirective==="show"?[[Ca,this.mergedShow],[Hr,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Hr,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});const CS=n=>{const{modalColor:e,textColor1:t,textColor2:i,boxShadow3:r,lineHeight:o,fontWeightStrong:s,dividerColor:a,closeColorHover:l,closeColorPressed:c,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:h,borderRadius:g}=n;return{bodyPadding:"16px 24px",headerPadding:"16px 24px",footerPadding:"16px 24px",color:e,textColor:i,titleTextColor:t,titleFontSize:"18px",titleFontWeight:s,boxShadow:r,lineHeight:o,headerBorderBottom:`1px solid ${a}`,footerBorderTop:`1px solid ${a}`,closeIconColor:d,closeIconColorHover:u,closeIconColorPressed:h,closeSize:"22px",closeIconSize:"18px",closeColorHover:l,closeColorPressed:c,closeBorderRadius:g}},TS={name:"Drawer",common:on,peers:{Scrollbar:hc},self:CS};var ES=TS,AS=Be({name:"NDrawerContent",inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:Boolean,required:!0},onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(n){const e=oe(!!n.show),t=oe(null),i=pt(Xl);Nn(()=>{n.show&&(e.value=!0)});const r=ue(()=>{const{show:s}=n,a=[[Ca,s]];return n.showMask||a.push([Hr,n.onClickoutside,void 0,{capture:!0}]),a});function o(){var s;e.value=!1,(s=n.onAfterLeave)===null||s===void 0||s.call(n)}return eg(ue(()=>n.blockScroll&&e.value)),$t(ql,t),$t(Yl,null),$t(jl,null),{bodyRef:t,mergedClsPrefix:i.mergedClsPrefixRef,isMounted:i.isMountedRef,mergedTheme:i.mergedThemeRef,displayed:e,transitionName:ue(()=>({right:"slide-in-from-right-transition",left:"slide-in-from-left-transition",top:"slide-in-from-top-transition",bottom:"slide-in-from-bottom-transition"})[n.placement]),handleAfterLeave:o,bodyDirectives:r}},render(){const{$slots:n,mergedClsPrefix:e}=this;return this.displayDirective==="show"||this.displayed||this.show?ni(T("div",{role:"none"},T(Lh,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>T(Tn,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>ni(T("div",Oa(this.$attrs,{role:"dialog",ref:"bodyRef","aria-modal":"true",class:[`${e}-drawer`,`${e}-drawer--${this.placement}-placement`,this.nativeScrollbar&&`${e}-drawer--native-scrollbar`]}),[this.nativeScrollbar?T("div",{class:`${e}-drawer-content-wrapper`,style:this.contentStyle,role:"none"},n):T(Ya,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:`${e}-drawer-content-wrapper`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),n)]),this.bodyDirectives)})})),[[Ca,this.displayDirective==="if"||this.displayed||this.show]]):null}});const{cubicBezierEaseIn:PS,cubicBezierEaseOut:RS}=Wn;function LS({duration:n="0.3s",leaveDuration:e="0.2s",name:t="slide-in-from-right"}={}){return[te(`&.${t}-transition-leave-active`,{transition:`transform ${e} ${PS}`}),te(`&.${t}-transition-enter-active`,{transition:`transform ${n} ${RS}`}),te(`&.${t}-transition-enter-to`,{transform:"translateX(0)"}),te(`&.${t}-transition-enter-from`,{transform:"translateX(100%)"}),te(`&.${t}-transition-leave-from`,{transform:"translateX(0)"}),te(`&.${t}-transition-leave-to`,{transform:"translateX(100%)"})]}const{cubicBezierEaseIn:DS,cubicBezierEaseOut:IS}=Wn;function zS({duration:n="0.3s",leaveDuration:e="0.2s",name:t="slide-in-from-left"}={}){return[te(`&.${t}-transition-leave-active`,{transition:`transform ${e} ${DS}`}),te(`&.${t}-transition-enter-active`,{transition:`transform ${n} ${IS}`}),te(`&.${t}-transition-enter-to`,{transform:"translateX(0)"}),te(`&.${t}-transition-enter-from`,{transform:"translateX(-100%)"}),te(`&.${t}-transition-leave-from`,{transform:"translateX(0)"}),te(`&.${t}-transition-leave-to`,{transform:"translateX(-100%)"})]}const{cubicBezierEaseIn:FS,cubicBezierEaseOut:BS}=Wn;function kS({duration:n="0.3s",leaveDuration:e="0.2s",name:t="slide-in-from-top"}={}){return[te(`&.${t}-transition-leave-active`,{transition:`transform ${e} ${FS}`}),te(`&.${t}-transition-enter-active`,{transition:`transform ${n} ${BS}`}),te(`&.${t}-transition-enter-to`,{transform:"translateY(0)"}),te(`&.${t}-transition-enter-from`,{transform:"translateY(-100%)"}),te(`&.${t}-transition-leave-from`,{transform:"translateY(0)"}),te(`&.${t}-transition-leave-to`,{transform:"translateY(-100%)"})]}const{cubicBezierEaseIn:OS,cubicBezierEaseOut:NS}=Wn;function $S({duration:n="0.3s",leaveDuration:e="0.2s",name:t="slide-in-from-bottom"}={}){return[te(`&.${t}-transition-leave-active`,{transition:`transform ${e} ${OS}`}),te(`&.${t}-transition-enter-active`,{transition:`transform ${n} ${NS}`}),te(`&.${t}-transition-enter-to`,{transform:"translateY(0)"}),te(`&.${t}-transition-enter-from`,{transform:"translateY(100%)"}),te(`&.${t}-transition-leave-from`,{transform:"translateY(0)"}),te(`&.${t}-transition-leave-to`,{transform:"translateY(100%)"})]}var US=te([J("drawer",`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[LS(),zS(),kS(),$S(),Se("native-scrollbar",[J("drawer-content-wrapper",`
 overflow: auto;
 height: 100%;
 `)]),J("drawer-content-wrapper",`
 box-sizing: border-box;
 `),J("drawer-content",`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[Se("native-scrollbar",[J("drawer-body-content-wrapper",`
 height: 100%;
 overflow: auto;
 `)]),J("drawer-body",`
 flex: 1 0 0;
 overflow: hidden;
 `),J("drawer-body-content-wrapper",`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),J("drawer-header",`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[K("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),J("drawer-footer",`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),Se("right-placement",`
 top: 0;
 bottom: 0;
 right: 0;
 `),Se("left-placement",`
 top: 0;
 bottom: 0;
 left: 0;
 `),Se("top-placement",`
 top: 0;
 left: 0;
 right: 0;
 `),Se("bottom-placement",`
 left: 0;
 bottom: 0;
 right: 0;
 `)]),te("body",[te(">",[J("drawer-container",{position:"fixed"})])]),J("drawer-container",`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[te("> *",{pointerEvents:"all"})]),J("drawer-mask",`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[Se("invisible",`
 background-color: rgba(0, 0, 0, 0)
 `),mf({enterDuration:"0.2s",leaveDuration:"0.2s",enterCubicBezier:"var(--n-bezier-in)",leaveCubicBezier:"var(--n-bezier-out)"})])]);const HS=Object.assign(Object.assign({},lt.props),{show:Boolean,width:{type:[Number,String],default:251},height:{type:[Number,String],default:251},placement:{type:String,default:"right"},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:"if"},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function});var VS=Be({name:"Drawer",inheritAttrs:!1,props:HS,setup(n){const{mergedClsPrefixRef:e,namespaceRef:t,inlineThemeDisabled:i}=rn(n),r=ar(),o=lt("Drawer","-drawer",US,ES,n,e),s=ue(()=>{const{placement:p}=n;if(p==="top"||p==="bottom")return"";const{width:f}=n;return kr(f)}),a=ue(()=>{const{placement:p}=n;if(p==="left"||p==="right")return"";const{height:f}=n;return kr(f)}),l=ue(()=>[{width:s.value,height:a.value},n.drawerStyle||""]);function c(p){const{onMaskClick:f,maskClosable:v}=n;v&&h(!1),f&&f(p)}const d=tg();function u(){var p;(p=n.onEsc)===null||p===void 0||p.call(n),n.closeOnEsc&&!d.value&&h(!1)}function h(p){const{onHide:f,onUpdateShow:v,"onUpdate:show":y}=n;v&&qe(v,p),y&&qe(y,p),f&&!p&&qe(f,p)}$t(Xl,{isMountedRef:r,mergedThemeRef:o,mergedClsPrefixRef:e,doUpdateShow:h});const g=ue(()=>{const{common:{cubicBezierEaseInOut:p,cubicBezierEaseIn:f,cubicBezierEaseOut:v},self:{color:y,textColor:E,boxShadow:_,lineHeight:M,headerPadding:A,footerPadding:w,bodyPadding:x,titleFontSize:S,titleTextColor:P,titleFontWeight:D,headerBorderBottom:$,footerBorderTop:Z,closeIconColor:L,closeIconColorHover:N,closeIconColorPressed:O,closeColorHover:U,closeColorPressed:Y,closeIconSize:I,closeSize:k,closeBorderRadius:se}}=o.value;return{"--n-line-height":M,"--n-color":y,"--n-text-color":E,"--n-box-shadow":_,"--n-bezier":p,"--n-bezier-out":v,"--n-bezier-in":f,"--n-header-padding":A,"--n-body-padding":x,"--n-footer-padding":w,"--n-title-text-color":P,"--n-title-font-size":S,"--n-title-font-weight":D,"--n-header-border-bottom":$,"--n-footer-border-top":Z,"--n-close-icon-color":L,"--n-close-icon-color-hover":N,"--n-close-icon-color-pressed":O,"--n-close-size":k,"--n-close-color-hover":U,"--n-close-color-pressed":Y,"--n-close-icon-size":I,"--n-close-border-radius":se}}),m=i?Kt("drawer",void 0,g,n):void 0;return{mergedClsPrefix:e,namespace:t,mergedBodyStyle:l,handleMaskClick:c,handleEsc:u,mergedTheme:o,cssVars:i?void 0:g,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender,isMounted:r}},render(){const{mergedClsPrefix:n}=this;return T(Th,{to:this.to,show:this.show},{default:()=>{var e;return(e=this.onRender)===null||e===void 0||e.call(this),ni(T("div",{class:[`${n}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:"none"},this.showMask?T(Tn,{name:"fade-in-transition",appear:this.isMounted},{default:()=>this.show?T("div",{"aria-hidden":!0,class:[`${n}-drawer-mask`,this.showMask==="transparent"&&`${n}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,T(AS,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleMaskClick}),this.$slots)),[[Kl,{zIndex:this.zIndex,enabled:this.show}]])}})}});const WS={title:{type:String},headerStyle:[Object,String],footerStyle:[Object,String],bodyStyle:[Object,String],bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean};var GS=Be({name:"DrawerContent",props:WS,setup(){const n=pt(Xl,null);n||uh("drawer-content","`n-drawer-content` must be placed inside `n-drawer`.");const{doUpdateShow:e}=n;function t(){e(!1)}return{handleCloseClick:t,mergedTheme:n.mergedThemeRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){const{title:n,mergedClsPrefix:e,nativeScrollbar:t,mergedTheme:i,bodyStyle:r,bodyContentStyle:o,headerStyle:s,footerStyle:a,scrollbarProps:l,closable:c,$slots:d}=this;return T("div",{role:"none",class:[`${e}-drawer-content`,t&&`${e}-drawer-content--native-scrollbar`]},d.header||n||c?T("div",{class:`${e}-drawer-header`,style:s,role:"none"},T("div",{class:`${e}-drawer-header__main`,role:"heading","aria-level":"1"},d.header!==void 0?d.header():n),c&&T(df,{onClick:this.handleCloseClick,clsPrefix:e,class:`${e}-drawer-header__close`,absolute:!0})):null,t?T("div",{class:`${e}-drawer-body`,style:r,role:"none"},T("div",{class:`${e}-drawer-body-content-wrapper`,style:o,role:"none"},d)):T(Ya,Object.assign({themeOverrides:i.peerOverrides.Scrollbar,theme:i.peers.Scrollbar},l,{class:`${e}-drawer-body`,contentClass:`${e}-drawer-body-content-wrapper`,contentStyle:o}),d),d.footer?T("div",{class:`${e}-drawer-footer`,style:a,role:"none"},d.footer()):null)}}),jS={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"};const qS=()=>jS,XS={name:"Space",self:qS};var YS=XS;let bs;const KS=()=>{if(!Wl)return!0;if(bs===void 0){const n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.rowGap="1px",n.appendChild(document.createElement("div")),n.appendChild(document.createElement("div")),document.body.appendChild(n);const e=n.scrollHeight===1;return document.body.removeChild(n),bs=e}return bs},ZS=Object.assign(Object.assign({},lt.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},itemStyle:[String,Object],wrap:{type:Boolean,default:!0}});var Ao=Be({name:"Space",props:ZS,setup(n){const{mergedClsPrefixRef:e,mergedRtlRef:t}=rn(n),i=lt("Space","-space",void 0,YS,n,e),r=Ka("Space",t,e);return{useGap:KS(),rtlEnabled:r,mergedClsPrefix:e,margin:ue(()=>{const{size:o}=n;if(Array.isArray(o))return{horizontal:o[0],vertical:o[1]};if(typeof o=="number")return{horizontal:o,vertical:o};const{self:{[Re("gap",o)]:s}}=i.value,{row:a,col:l}=Ep(s);return{horizontal:qt(l),vertical:qt(a)}})}},render(){const{vertical:n,align:e,inline:t,justify:i,itemStyle:r,margin:o,wrap:s,mergedClsPrefix:a,rtlEnabled:l,useGap:c}=this,d=oh(Ap(this));if(!d.length)return null;const u=`${o.horizontal}px`,h=`${o.horizontal/2}px`,g=`${o.vertical}px`,m=`${o.vertical/2}px`,p=d.length-1,f=i.startsWith("space-");return T("div",{role:"none",class:[`${a}-space`,l&&`${a}-space--rtl`],style:{display:t?"inline-flex":"flex",flexDirection:n?"column":"row",justifyContent:["start","end"].includes(i)?"flex-"+i:i,flexWrap:!s||n?"nowrap":"wrap",marginTop:c||n?"":`-${m}`,marginBottom:c||n?"":`-${m}`,alignItems:e,gap:c?`${o.vertical}px ${o.horizontal}px`:""}},d.map((v,y)=>T("div",{role:"none",style:[r,{maxWidth:"100%"},c?"":n?{marginBottom:y!==p?g:""}:l?{marginLeft:f?i==="space-between"&&y===p?"":h:y!==p?u:"",marginRight:f?i==="space-between"&&y===0?"":h:"",paddingTop:m,paddingBottom:m}:{marginRight:f?i==="space-between"&&y===p?"":h:y!==p?u:"",marginLeft:f?i==="space-between"&&y===0?"":h:"",paddingTop:m,paddingBottom:m}]},v)))}}),JS={railHeight:"4px",railWidthVertical:"4px",handleSize:"18px",dotHeight:"8px",dotWidth:"8px",dotBorderRadius:"4px"};const QS=n=>{const e="rgba(0, 0, 0, .85)",t="0 2px 8px 0 rgba(0, 0, 0, 0.12)",{railColor:i,primaryColor:r,baseColor:o,cardColor:s,modalColor:a,popoverColor:l,borderRadius:c,fontSize:d,opacityDisabled:u}=n;return Object.assign(Object.assign({},JS),{fontSize:d,railColor:i,railColorHover:i,fillColor:r,fillColorHover:r,opacityDisabled:u,handleColor:"#FFF",dotColor:s,dotColorModal:a,dotColorPopover:l,handleBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowHover:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowActive:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",handleBoxShadowFocus:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",indicatorColor:e,indicatorBoxShadow:t,indicatorTextColor:o,indicatorBorderRadius:c,dotBorder:`2px solid ${i}`,dotBorderActive:`2px solid ${r}`,dotBoxShadow:""})},e1={name:"Slider",common:on,self:QS};var t1=e1,n1={buttonHeightSmall:"14px",buttonHeightMedium:"18px",buttonHeightLarge:"22px",buttonWidthSmall:"14px",buttonWidthMedium:"18px",buttonWidthLarge:"22px",buttonWidthPressedSmall:"20px",buttonWidthPressedMedium:"24px",buttonWidthPressedLarge:"28px",railHeightSmall:"18px",railHeightMedium:"22px",railHeightLarge:"26px",railWidthSmall:"32px",railWidthMedium:"40px",railWidthLarge:"48px"};const i1=n=>{const{primaryColor:e,opacityDisabled:t,borderRadius:i,textColor3:r}=n,o="rgba(0, 0, 0, .14)";return Object.assign(Object.assign({},n1),{iconColor:r,textColor:"white",loadingColor:e,opacityDisabled:t,railColor:o,railColorActive:e,buttonBoxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",buttonColor:"#FFF",railBorderRadiusSmall:i,railBorderRadiusMedium:i,railBorderRadiusLarge:i,buttonBorderRadiusSmall:i,buttonBorderRadiusMedium:i,buttonBorderRadiusLarge:i,boxShadowFocus:`0 0 0 2px ${Ke(e,{alpha:.2})}`})},r1={name:"Switch",common:on,self:i1};var o1=r1;function Rd(n){return window.TouchEvent&&n instanceof window.TouchEvent}function Ld(){const n=oe(new Map),e=t=>i=>{n.value.set(t,i)};return Pp(()=>n.value.clear()),[n,e]}var a1=te([J("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 `,[Se("reverse",[J("slider-handles",[J("slider-handle",`
 transform: translate(50%, -50%);
 `)]),J("slider-dots",[J("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),Se("vertical",[J("slider-handles",[J("slider-handle",`
 transform: translate(-50%, -50%);
 `)]),J("slider-marks",[J("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),J("slider-dots",[J("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),Se("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[J("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[J("slider-handle",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),J("slider-rail",`
 height: 100%;
 `,[K("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),Se("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),J("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 `,[J("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),J("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[J("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),Se("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[J("slider-handle",`
 cursor: not-allowed;
 `)]),Se("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),te("&:hover",[J("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[K("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),J("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),Se("active",[J("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[K("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),J("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),J("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[J("slider-mark",{position:"absolute",transform:"translateX(-50%)"})]),J("slider-rail",`
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
 `)]),J("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[J("slider-handle",`
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
 `,[te("&:hover",{boxShadow:"var(--n-handle-box-shadow-hover)"}),te("&:hover:focus",{boxShadow:"var(--n-handle-box-shadow-active)"}),te("&:focus",{boxShadow:"var(--n-handle-box-shadow-focus)"})])]),J("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[Se("transition-disabled",[J("slider-dot",{transition:"none"})]),J("slider-dot",`
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
 `,[Se("active",{border:"var(--n-dot-border-active)"})])])]),J("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[To()]),J("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Se("top",`
 margin-bottom: 12px;
 `),Se("right",`
 margin-left: 12px;
 `),Se("bottom",`
 margin-top: 12px;
 `),Se("left",`
 margin-right: 12px;
 `),To()]),gm(J("slider",[J("slider-dot",{backgroundColor:"var(--n-dot-color-modal)"})])),vm(J("slider",[J("slider-dot",{backgroundColor:"var(--n-dot-color-popover)"})]))]);const s1=0,l1=Object.assign(Object.assign({},lt.props),{to:Ut.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]});var Nr=Be({name:"Slider",props:l1,setup(n){const{mergedClsPrefixRef:e,namespaceRef:t,inlineThemeDisabled:i}=rn(n),r=lt("Slider","-slider",a1,t1,n,e),o=oe(null),[s,a]=Ld(),[l,c]=Ld(),d=oe(new Set),u=Kr(n),{mergedDisabledRef:h}=u,g=ue(()=>{const{step:b}=n;if(b<=0||b==="mark")return 0;const F=b.toString();let q=0;return F.includes(".")&&(q=F.length-F.indexOf(".")-1),q}),m=oe(n.defaultValue),p=nt(n,"value"),f=Pi(p,m),v=ue(()=>{const{value:b}=f;return(n.range?b:[b]).map(ae)}),y=ue(()=>v.value.length>2),E=ue(()=>n.placement===void 0?n.vertical?"right":"top":n.placement),_=ue(()=>{const{marks:b}=n;return b?Object.keys(b).map(parseFloat):null}),M=oe(-1),A=oe(-1),w=oe(-1),x=oe(!1),S=oe(!1),P=ue(()=>{const{vertical:b,reverse:F}=n;return b?F?"top":"bottom":F?"right":"left"}),D=ue(()=>{if(y.value)return;const b=v.value,F=pe(n.range?Math.min(...b):n.min),q=pe(n.range?Math.max(...b):b[0]),{value:le}=P;return n.vertical?{[le]:`${F}%`,height:`${q-F}%`}:{[le]:`${F}%`,width:`${q-F}%`}}),$=ue(()=>{const b=[],{marks:F}=n;if(F){const q=v.value.slice();q.sort((Me,ye)=>Me-ye);const{value:le}=P,{value:he}=y,{range:De}=n,Q=he?()=>!1:Me=>De?Me>=q[0]&&Me<=q[q.length-1]:Me<=q[0];for(const Me of Object.keys(F)){const ye=Number(Me);b.push({active:Q(ye),label:F[Me],style:{[le]:`${pe(ye)}%`}})}}return b});function Z(b,F){const q=pe(b),{value:le}=P;return{[le]:`${q}%`,zIndex:F===M.value?1:0}}function L(b){return n.showTooltip||w.value===b||M.value===b&&x.value}function N(b){return!(M.value===b&&A.value===b)}function O(b){var F;~b&&(M.value=b,(F=s.value.get(b))===null||F===void 0||F.focus())}function U(){l.value.forEach((b,F)=>{L(F)&&b.syncPosition()})}function Y(b){const{"onUpdate:value":F,onUpdateValue:q}=n,{nTriggerFormInput:le,nTriggerFormChange:he}=u;q&&qe(q,b),F&&qe(F,b),m.value=b,le(),he()}function I(b){const{range:F}=n;if(F){if(Array.isArray(b)){const{value:q}=v;b.join()!==q.join()&&Y(b)}}else Array.isArray(b)||v.value[0]!==b&&Y(b)}function k(b,F){if(n.range){const q=v.value.slice();q.splice(F,1,b),I(q)}else I(b)}function se(b,F,q){const le=q!==void 0;q||(q=b-F>0?1:-1);const he=_.value||[],{step:De}=n;if(De==="mark"){const ye=W(b,he.concat(F),le?q:void 0);return ye?ye.value:F}if(De<=0)return F;const{value:Q}=g;let Me;if(le){const ye=Number((F/De).toFixed(Q)),we=Math.floor(ye),B=ye>we?we:we-1,xe=ye<we?we:we+1;Me=W(F,[Number((B*De).toFixed(Q)),Number((xe*De).toFixed(Q)),...he],q)}else{const ye=Pe(b);Me=W(b,[...he,ye])}return Me?ae(Me.value):F}function ae(b){return Math.min(n.max,Math.max(n.min,b))}function pe(b){const{max:F,min:q}=n;return(b-q)/(F-q)*100}function Ee(b){const{max:F,min:q}=n;return q+(F-q)*b}function Pe(b){const{step:F,min:q}=n;if(F<=0||F==="mark")return b;const le=Math.round((b-q)/F)*F+q;return Number(le.toFixed(g.value))}function W(b,F=_.value,q){if(!F||!F.length)return null;let le=null,he=-1;for(;++he<F.length;){const De=F[he]-b,Q=Math.abs(De);(q===void 0||De*q>0)&&(le===null||Q<le.distance)&&(le={index:he,distance:Q,value:F[he]})}return le}function $e(b){const F=o.value;if(!F)return;const q=Rd(b)?b.touches[0]:b,le=F.getBoundingClientRect();let he;return n.vertical?he=(le.bottom-q.clientY)/le.height:he=(q.clientX-le.left)/le.width,n.reverse&&(he=1-he),Ee(he)}function Le(b){if(h.value)return;const{vertical:F,reverse:q}=n;switch(b.key){case"ArrowUp":b.preventDefault(),me(F&&q?-1:1);break;case"ArrowRight":b.preventDefault(),me(!F&&q?-1:1);break;case"ArrowDown":b.preventDefault(),me(F&&q?1:-1);break;case"ArrowLeft":b.preventDefault(),me(!F&&q?1:-1);break}}function me(b){const F=M.value;if(F===-1)return;const{step:q}=n,le=v.value[F],he=q<=0||q==="mark"?le:le+q*b;k(se(he,le,b>0?1:-1),F)}function _e(b){var F,q;if(h.value||!Rd(b)&&b.button!==s1)return;const le=$e(b);if(le===void 0)return;const he=v.value.slice(),De=n.range?(q=(F=W(le,he))===null||F===void 0?void 0:F.index)!==null&&q!==void 0?q:-1:0;De!==-1&&(b.preventDefault(),O(De),ke(),k(se(le,v.value[De]),De))}function ke(){x.value||(x.value=!0,ct("touchend",document,Ye),ct("mouseup",document,Ye),ct("touchmove",document,Fe),ct("mousemove",document,Fe))}function Oe(){x.value&&(x.value=!1,at("touchend",document,Ye),at("mouseup",document,Ye),at("touchmove",document,Fe),at("mousemove",document,Fe))}function Fe(b){const{value:F}=M;if(!x.value||F===-1){Oe();return}const q=$e(b);k(se(q,v.value[F]),F)}function Ye(){Oe()}function Ze(b){M.value=b,h.value||(w.value=b)}function rt(b){M.value===b&&(M.value=-1,Oe()),w.value===b&&(w.value=-1)}function fe(b){w.value=b}function ze(b){w.value===b&&(w.value=-1)}Mt(M,(b,F)=>void pn(()=>A.value=F)),Mt(f,()=>{if(n.marks){if(S.value)return;S.value=!0,pn(()=>{S.value=!1})}pn(U)}),Gt(()=>{Oe()});const Ie=ue(()=>{const{self:{railColor:b,railColorHover:F,fillColor:q,fillColorHover:le,handleColor:he,opacityDisabled:De,dotColor:Q,dotColorModal:Me,handleBoxShadow:ye,handleBoxShadowHover:we,handleBoxShadowActive:B,handleBoxShadowFocus:xe,dotBorder:V,dotBoxShadow:z,railHeight:H,railWidthVertical:ce,handleSize:ne,dotHeight:ge,dotWidth:Ce,dotBorderRadius:be,fontSize:We,dotBorderActive:ht,dotColorPopover:Pn},common:{cubicBezierEaseInOut:si}}=r.value;return{"--n-bezier":si,"--n-dot-border":V,"--n-dot-border-active":ht,"--n-dot-border-radius":be,"--n-dot-box-shadow":z,"--n-dot-color":Q,"--n-dot-color-modal":Me,"--n-dot-color-popover":Pn,"--n-dot-height":ge,"--n-dot-width":Ce,"--n-fill-color":q,"--n-fill-color-hover":le,"--n-font-size":We,"--n-handle-box-shadow":ye,"--n-handle-box-shadow-active":B,"--n-handle-box-shadow-focus":xe,"--n-handle-box-shadow-hover":we,"--n-handle-color":he,"--n-handle-size":ne,"--n-opacity-disabled":De,"--n-rail-color":b,"--n-rail-color-hover":F,"--n-rail-height":H,"--n-rail-width-vertical":ce}}),Te=i?Kt("slider",void 0,Ie,n):void 0,re=ue(()=>{const{self:{fontSize:b,indicatorColor:F,indicatorBoxShadow:q,indicatorTextColor:le,indicatorBorderRadius:he}}=r.value;return{"--n-font-size":b,"--n-indicator-border-radius":he,"--n-indicator-box-shadow":q,"--n-indicator-color":F,"--n-indicator-text-color":le}}),C=i?Kt("slider-indicator",void 0,re,n):void 0;return{mergedClsPrefix:e,namespace:t,uncontrolledValue:m,mergedValue:f,mergedDisabled:h,mergedPlacement:E,isMounted:ar(),adjustedTo:Ut(n),dotTransitionDisabled:S,markInfos:$,isShowTooltip:L,isSkipCSSDetection:N,handleRailRef:o,setHandleRefs:a,setFollowerRefs:c,fillStyle:D,getHandleStyle:Z,activeIndex:M,arrifiedValues:v,followerEnabledIndexSet:d,handleRailMouseDown:_e,handleHandleFocus:Ze,handleHandleBlur:rt,handleHandleMouseEnter:fe,handleHandleMouseLeave:ze,handleRailKeyDown:Le,indicatorCssVars:i?void 0:re,indicatorThemeClass:C==null?void 0:C.themeClass,indicatorOnRender:C==null?void 0:C.onRender,cssVars:i?void 0:Ie,themeClass:Te==null?void 0:Te.themeClass,onRender:Te==null?void 0:Te.onRender}},render(){var n;const{mergedClsPrefix:e,themeClass:t,formatTooltip:i}=this;return(n=this.onRender)===null||n===void 0||n.call(this),T("div",{class:[`${e}-slider`,t,{[`${e}-slider--disabled`]:this.mergedDisabled,[`${e}-slider--active`]:this.activeIndex!==-1,[`${e}-slider--with-mark`]:this.marks,[`${e}-slider--vertical`]:this.vertical,[`${e}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},T("div",{class:`${e}-slider-rail`},T("div",{class:`${e}-slider-rail__fill`,style:this.fillStyle}),this.marks?T("div",{class:[`${e}-slider-dots`,this.dotTransitionDisabled&&`${e}-slider-dots--transition-disabled`]},this.markInfos.map(r=>T("div",{key:r.label,class:[`${e}-slider-dot`,{[`${e}-slider-dot--active`]:r.active}],style:r.style}))):null,T("div",{ref:"handleRailRef",class:`${e}-slider-handles`},this.arrifiedValues.map((r,o)=>{const s=this.isShowTooltip(o);return T($a,null,{default:()=>[T(Ua,null,{default:()=>T("div",{ref:this.setHandleRefs(o),class:`${e}-slider-handle`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(r,o),onFocus:()=>this.handleHandleFocus(o),onBlur:()=>this.handleHandleBlur(o),onMouseenter:()=>this.handleHandleMouseEnter(o),onMouseleave:()=>this.handleHandleMouseLeave(o)})}),this.tooltip&&T(Ha,{ref:this.setFollowerRefs(o),show:s,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(o),teleportDisabled:this.adjustedTo===Ut.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>T(Tn,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.isSkipCSSDetection(o),onEnter:()=>this.followerEnabledIndexSet.add(o),onAfterLeave:()=>this.followerEnabledIndexSet.delete(o)},{default:()=>{var a;return s?((a=this.indicatorOnRender)===null||a===void 0||a.call(this),T("div",{class:[`${e}-slider-handle-indicator`,this.indicatorThemeClass,`${e}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof i=="function"?i(r):r)):null}})})]})})),this.marks?T("div",{class:`${e}-slider-marks`},this.markInfos.map(r=>T("div",{key:r.label,class:`${e}-slider-mark`,style:r.style},r.label))):null))}}),c1=J("switch",`
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
 `),J("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[Vr({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),K("checked, unchecked",`
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
 `),te("&:focus",[K("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),Se("round",[K("rail","border-radius: calc(var(--n-rail-height) / 2);",[K("button","border-radius: calc(var(--n-button-height) / 2);")])]),St("disabled",[St("icon",[Se("rubber-band",[Se("pressed",[K("rail",[K("button","max-width: var(--n-button-width-pressed);")])]),K("rail",[te("&:active",[K("button","max-width: var(--n-button-width-pressed);")])]),Se("active",[Se("pressed",[K("rail",[K("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),K("rail",[te("&:active",[K("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),Se("active",[K("rail",[K("button","left: calc(100% - (var(--n-rail-height) + var(--n-button-width)) / 2)")])]),K("rail",`
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
 `,[Vr()]),K("button",`
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
 `)]),Se("active",[K("rail","background-color: var(--n-rail-color-active);")]),Se("loading",[K("rail",`
 cursor: wait;
 `)]),Se("disabled",[K("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]);const d1=Object.assign(Object.assign({},lt.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});var u1=Be({name:"Switch",props:d1,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:t}=rn(n),i=lt("Switch","-switch",c1,o1,n,e),r=Kr(n),{mergedSizeRef:o,mergedDisabledRef:s}=r,a=oe(n.defaultValue),l=nt(n,"value"),c=Pi(l,a),d=ue(()=>c.value===n.checkedValue),u=oe(!1),h=oe(!1),g=ue(()=>{const{railStyle:x}=n;if(!!x)return x({focused:h.value,checked:d.value})});function m(x){const{"onUpdate:value":S,onChange:P,onUpdateValue:D}=n,{nTriggerFormInput:$,nTriggerFormChange:Z}=r;S&&qe(S,x),D&&qe(D,x),P&&qe(P,x),a.value=x,$(),Z()}function p(){const{nTriggerFormFocus:x}=r;x()}function f(){const{nTriggerFormBlur:x}=r;x()}function v(){n.loading||s.value||(c.value!==n.checkedValue?m(n.checkedValue):m(n.uncheckedValue))}function y(){h.value=!0,p()}function E(){h.value=!1,f(),u.value=!1}function _(x){n.loading||s.value||x.key===" "&&(c.value!==n.checkedValue?m(n.checkedValue):m(n.uncheckedValue),u.value=!1)}function M(x){n.loading||s.value||x.key===" "&&(x.preventDefault(),u.value=!0)}const A=ue(()=>{const{value:x}=o,{self:{opacityDisabled:S,railColor:P,railColorActive:D,buttonBoxShadow:$,buttonColor:Z,boxShadowFocus:L,loadingColor:N,textColor:O,iconColor:U,[Re("buttonHeight",x)]:Y,[Re("buttonWidth",x)]:I,[Re("buttonWidthPressed",x)]:k,[Re("railHeight",x)]:se,[Re("railWidth",x)]:ae,[Re("railBorderRadius",x)]:pe,[Re("buttonBorderRadius",x)]:Ee},common:{cubicBezierEaseInOut:Pe}}=i.value,W=ji((qt(se)-qt(Y))/2),$e=ji(Math.max(qt(se),qt(Y))),Le=qt(se)>qt(Y)?ae:ji(qt(ae)+qt(Y)-qt(se));return{"--n-bezier":Pe,"--n-button-border-radius":Ee,"--n-button-box-shadow":$,"--n-button-color":Z,"--n-button-width":I,"--n-button-width-pressed":k,"--n-button-height":Y,"--n-height":$e,"--n-offset":W,"--n-opacity-disabled":S,"--n-rail-border-radius":pe,"--n-rail-color":P,"--n-rail-color-active":D,"--n-rail-height":se,"--n-rail-width":ae,"--n-width":Le,"--n-box-shadow-focus":L,"--n-loading-color":N,"--n-text-color":O,"--n-icon-color":U}}),w=t?Kt("switch",ue(()=>o.value[0]),A,n):void 0;return{handleClick:v,handleBlur:E,handleFocus:y,handleKeyup:_,handleKeydown:M,mergedRailStyle:g,pressed:u,mergedClsPrefix:e,mergedValue:c,checked:d,mergedDisabled:s,cssVars:t?void 0:A,themeClass:w==null?void 0:w.themeClass,onRender:w==null?void 0:w.onRender}},render(){const{mergedClsPrefix:n,mergedDisabled:e,checked:t,mergedRailStyle:i,onRender:r,$slots:o}=this;r==null||r();const{checked:s,unchecked:a,icon:l,"checked-icon":c,"unchecked-icon":d}=o,u=!(bo(l)&&bo(c)&&bo(d));return T("div",{role:"switch","aria-checked":t,class:[`${n}-switch`,this.themeClass,u&&`${n}-switch--icon`,t&&`${n}-switch--active`,e&&`${n}-switch--disabled`,this.round&&`${n}-switch--round`,this.loading&&`${n}-switch--loading`,this.pressed&&`${n}-switch--pressed`,this.rubberBand&&`${n}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},T("div",{class:`${n}-switch__rail`,"aria-hidden":"true",style:i},Dt(s,h=>Dt(a,g=>h||g?T("div",{"aria-hidden":!0,class:`${n}-switch__children-placeholder`},T("div",{class:`${n}-switch__rail-placeholder`},T("div",{class:`${n}-switch__button-placeholder`}),h),T("div",{class:`${n}-switch__rail-placeholder`},T("div",{class:`${n}-switch__button-placeholder`}),g)):null)),T("div",{class:`${n}-switch__button`},Dt(l,h=>Dt(c,g=>Dt(d,m=>T(qa,null,{default:()=>this.loading?T(Xa,{key:"loading",clsPrefix:n,strokeWidth:20}):this.checked&&(g||h)?T("div",{class:`${n}-switch__button-icon`,key:g?"checked-icon":"icon"},g||h):!this.checked&&(m||h)?T("div",{class:`${n}-switch__button-icon`,key:m?"unchecked-icon":"icon"},m||h):null})))),Dt(s,h=>h&&T("div",{key:"checked",class:`${n}-switch__checked`},h)),Dt(a,h=>h&&T("div",{key:"unchecked",class:`${n}-switch__unchecked`},h)))))}});function Af(n){return Rp()?(Lp(n),!0):!1}var Dd;const zo=typeof window!="undefined",h1=n=>typeof n=="string",_s=()=>{};zo&&((Dd=window==null?void 0:window.navigator)==null?void 0:Dd.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function f1(n,e){var t;if(typeof n=="number")return n+e;const i=((t=n.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:t[0])||"",r=n.slice(i.length),o=parseFloat(i)+e;return Number.isNaN(o)?n:o+r}function p1(n,e=!0){ka()?Lo(n):e?n():pn(n)}function m1(n,e=!0){ka()?Wt(n):e?n():pn(n)}function g1(n){var e;const t=st(n);return(e=t==null?void 0:t.$el)!=null?e:t}const Za=zo?window:void 0;zo&&window.document;zo&&window.navigator;zo&&window.location;function v1(...n){let e,t,i,r;if(h1(n[0])?([t,i,r]=n,e=Za):[e,t,i,r]=n,!e)return _s;let o=_s;const s=Mt(()=>g1(e),l=>{o(),l&&(l.addEventListener(t,i,r),o=()=>{l.removeEventListener(t,i,r),o=_s})},{immediate:!0,flush:"post"}),a=()=>{s(),o()};return Af(a),a}function ys(n,e={}){const{window:t=Za}=e,i=Boolean(t&&"matchMedia"in t);let r;const o=oe(!1),s=()=>{!i||(r||(r=t.matchMedia(n)),o.value=r.matches)};return p1(()=>{s(),r&&("addEventListener"in r?r.addEventListener("change",s):r.addListener(s),Af(()=>{"removeEventListener"in r?r.removeEventListener("change",s):r.removeListener(s)}))}),o}const x1={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var b1=Object.defineProperty,Id=Object.getOwnPropertySymbols,_1=Object.prototype.hasOwnProperty,y1=Object.prototype.propertyIsEnumerable,zd=(n,e,t)=>e in n?b1(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,w1=(n,e)=>{for(var t in e||(e={}))_1.call(e,t)&&zd(n,t,e[t]);if(Id)for(var t of Id(e))y1.call(e,t)&&zd(n,t,e[t]);return n};function S1(n,e={}){function t(a,l){let c=n[a];return l!=null&&(c=f1(c,l)),typeof c=="number"&&(c=`${c}px`),c}const{window:i=Za}=e;function r(a){return i?i.matchMedia(a).matches:!1}const o=a=>ys(`(min-width: ${t(a)})`,e),s=Object.keys(n).reduce((a,l)=>(Object.defineProperty(a,l,{get:()=>o(l),enumerable:!0,configurable:!0}),a),{});return w1({greater:o,smaller(a){return ys(`(max-width: ${t(a,-.1)})`,e)},between(a,l){return ys(`(min-width: ${t(a)}) and (max-width: ${t(l,-.1)})`,e)},isGreater(a){return r(`(min-width: ${t(a)})`)},isSmaller(a){return r(`(max-width: ${t(a,-.1)})`)},isInBetween(a,l){return r(`(min-width: ${t(a)}) and (max-width: ${t(l,-.1)})`)}},s)}const Cl=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Tl="__vueuse_ssr_handlers__";Cl[Tl]=Cl[Tl]||{};Cl[Tl];var Fd;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(Fd||(Fd={}));function M1({window:n=Za,initialWidth:e=1/0,initialHeight:t=1/0}={}){const i=oe(e),r=oe(t),o=()=>{n&&(i.value=n.innerWidth,r.value=n.innerHeight)};return o(),m1(o),v1("resize",o,{passive:!0}),{width:i,height:r}}var Ja=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t};const C1=n=>(kl("data-v-75836ab8"),n=n(),Ol(),n),T1=C1(()=>Ei("h3",null,"Camera controls",-1)),E1=nn("Reset Camera"),A1=Be({name:"CameraControls",props:{camera:null},setup(n){const e=n,t=oe(e);function i(r){r.position.setX(0),r.position.setY(0),r.position.setZ(30),r.lookAt(0,0,0)}return(r,o)=>(en(),mn("div",null,[T1,(en(!0),mn(ri,null,Bl(t.value.camera,(s,a)=>(en(),mn("div",{key:s.uuid},[ut(st(Ao),{class:"options",vertical:""},{default:gn(()=>[Ei("span",null,"Position X: "+zr(s.position.x),1),ut(st(Nr),{value:s.position.x,"onUpdate:value":[l=>s.position.x=l,l=>s.lookAt(0,0,0)],tooltip:!1,"default-value":e.camera[a].position.x,step:.1,min:-50,max:50},null,8,["value","onUpdate:value","default-value","step"]),nn(" Position Y: "+zr(s.position.y)+" ",1),ut(st(Nr),{value:s.position.y,"onUpdate:value":[l=>s.position.y=l,l=>s.lookAt(0,0,0)],tooltip:!1,"default-value":e.camera[a].position.y,step:.1,min:-50,max:50},null,8,["value","onUpdate:value","default-value","step"]),nn(" Position Z: "+zr(s.position.z)+" ",1),ut(st(Nr),{value:s.position.z,"onUpdate:value":[l=>s.position.z=l,l=>s.lookAt(0,0,0)],tooltip:!1,"default-value":e.camera[a].position.z,step:.1,min:-50,max:50},null,8,["value","onUpdate:value","default-value","step"])]),_:2},1024),ut(st(Mi),{class:"button",secondary:"",color:"#D60505",onClick:l=>i(s)},{default:gn(()=>[E1]),_:2},1032,["onClick"])]))),128))]))}});var P1=Ja(A1,[["__scopeId","data-v-75836ab8"]]);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pc="141",R1=0,Bd=1,L1=2,Pf=1,D1=2,go=3,Po=0,Cn=1,Wr=2,I1=1,Ci=0,$r=1,kd=2,Od=3,Nd=4,z1=5,Lr=100,F1=101,B1=102,$d=103,Ud=104,k1=200,O1=201,N1=202,$1=203,Rf=204,Lf=205,U1=206,H1=207,V1=208,W1=209,G1=210,j1=0,q1=1,X1=2,El=3,Y1=4,K1=5,Z1=6,J1=7,Qa=0,Q1=1,eM=2,ti=0,tM=1,nM=2,iM=3,rM=4,oM=5,Df=300,Gr=301,jr=302,Al=303,Pl=304,es=306,Rl=1e3,Sn=1001,Ll=1002,Xt=1003,Hd=1004,Vd=1005,un=1006,aM=1007,ts=1008,rr=1009,sM=1010,lM=1011,If=1012,cM=1013,Yi=1014,Ki=1015,Ro=1016,dM=1017,uM=1018,Ur=1020,hM=1021,fM=1022,Mn=1023,pM=1024,mM=1025,er=1026,qr=1027,gM=1028,vM=1029,xM=1030,bM=1031,_M=1033,ws=33776,Ss=33777,Ms=33778,Cs=33779,Wd=35840,Gd=35841,jd=35842,qd=35843,yM=36196,Xd=37492,Yd=37496,Kd=37808,Zd=37809,Jd=37810,Qd=37811,eu=37812,tu=37813,nu=37814,iu=37815,ru=37816,ou=37817,au=37818,su=37819,lu=37820,cu=37821,du=36492,or=3e3,vt=3001,wM=3200,SM=3201,Qr=0,MM=1,Jn="srgb",Zi="srgb-linear",Ts=7680,CM=519,uu=35044,hu="300 es",Dl=1035;class eo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Lt=[];for(let n=0;n<256;n++)Lt[n]=(n<16?"0":"")+n.toString(16);const Es=Math.PI/180,fu=180/Math.PI;function Fo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function Yt(n,e,t){return Math.max(e,Math.min(t,n))}function TM(n,e){return(n%e+e)%e}function As(n,e,t){return(1-t)*n+t*e}function pu(n){return(n&n-1)===0&&n!==0}function Il(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}class tt{constructor(e=0,t=0){this.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fn{constructor(){this.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,o,s,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=o,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],d=i[4],u=i[7],h=i[2],g=i[5],m=i[8],p=r[0],f=r[3],v=r[6],y=r[1],E=r[4],_=r[7],M=r[2],A=r[5],w=r[8];return o[0]=s*p+a*y+l*M,o[3]=s*f+a*E+l*A,o[6]=s*v+a*_+l*w,o[1]=c*p+d*y+u*M,o[4]=c*f+d*E+u*A,o[7]=c*v+d*_+u*w,o[2]=h*p+g*y+m*M,o[5]=h*f+g*E+m*A,o[8]=h*v+g*_+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*a*c-i*o*d+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*s-a*c,h=a*l-d*o,g=c*o-s*l,m=t*u+i*h+r*g;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/m;return e[0]=u*p,e[1]=(r*c-d*i)*p,e[2]=(a*i-r*s)*p,e[3]=h*p,e[4]=(d*t-r*l)*p,e[5]=(r*o-a*t)*p,e[6]=g*p,e[7]=(i*l-c*t)*p,e[8]=(s*t-i*o)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),r=this.elements,o=r[0],s=r[3],a=r[6],l=r[1],c=r[4],d=r[7];return r[0]=t*o+i*l,r[3]=t*s+i*c,r[6]=t*a+i*d,r[1]=-i*o+t*l,r[4]=-i*s+t*c,r[7]=-i*a+t*d,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function zf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>65535)return!0;return!1}function Ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ps={[Jn]:{[Zi]:tr},[Zi]:{[Jn]:Sa}},bn={legacyMode:!0,get workingColorSpace(){return Zi},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Ps[e]&&Ps[e][t]!==void 0){const i=Ps[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},Ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Et={r:0,g:0,b:0},_n={h:0,s:0,l:0},Jo={h:0,s:0,l:0};function Rs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Qo(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Zi){return this.r=e,this.g=t,this.b=i,bn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Zi){if(e=TM(e,1),t=Yt(t,0,1),i=Yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,s=2*i-o;this.r=Rs(s,o,e+1/3),this.g=Rs(s,o,e),this.b=Rs(s,o,e-1/3)}return bn.toWorkingColorSpace(this,r),this}setStyle(e,t=Jn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(o[1],10))/255,this.g=Math.min(255,parseInt(o[2],10))/255,this.b=Math.min(255,parseInt(o[3],10))/255,bn.toWorkingColorSpace(this,t),i(o[4]),this;if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(o[1],10))/100,this.g=Math.min(100,parseInt(o[2],10))/100,this.b=Math.min(100,parseInt(o[3],10))/100,bn.toWorkingColorSpace(this,t),i(o[4]),this;break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(o[1])/360,c=parseInt(o[2],10)/100,d=parseInt(o[3],10)/100;return i(o[4]),this.setHSL(l,c,d,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.r=parseInt(o.charAt(0)+o.charAt(0),16)/255,this.g=parseInt(o.charAt(1)+o.charAt(1),16)/255,this.b=parseInt(o.charAt(2)+o.charAt(2),16)/255,bn.toWorkingColorSpace(this,t),this;if(s===6)return this.r=parseInt(o.charAt(0)+o.charAt(1),16)/255,this.g=parseInt(o.charAt(2)+o.charAt(3),16)/255,this.b=parseInt(o.charAt(4)+o.charAt(5),16)/255,bn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Jn){const i=Ff[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return bn.fromWorkingColorSpace(Qo(this,Et),e),Yt(Et.r*255,0,255)<<16^Yt(Et.g*255,0,255)<<8^Yt(Et.b*255,0,255)<<0}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zi){bn.fromWorkingColorSpace(Qo(this,Et),t);const i=Et.r,r=Et.g,o=Et.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const d=(a+s)/2;if(a===s)l=0,c=0;else{const u=s-a;switch(c=d<=.5?u/(s+a):u/(2-s-a),s){case i:l=(r-o)/u+(r<o?6:0);break;case r:l=(o-i)/u+2;break;case o:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Zi){return bn.fromWorkingColorSpace(Qo(this,Et),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Jn){return bn.fromWorkingColorSpace(Qo(this,Et),e),e!==Jn?`color(${e} ${Et.r} ${Et.g} ${Et.b})`:`rgb(${Et.r*255|0},${Et.g*255|0},${Et.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(_n),_n.h+=e,_n.s+=t,_n.l+=i,this.setHSL(_n.h,_n.s,_n.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_n),e.getHSL(Jo);const i=As(_n.h,Jo.h,t),r=As(_n.s,Jo.s,t),o=As(_n.l,Jo.l,t);return this.setHSL(i,r,o),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ve.NAMES=Ff;let vr;class Bf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vr===void 0&&(vr=Ba("canvas")),vr.width=e.width,vr.height=e.height;const i=vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Ba("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=tr(o[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(tr(t[i]/255)*255):t[i]=tr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class kf{constructor(e=null){this.isSource=!0,this.uuid=Fo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Ls(r[s].image)):o.push(Ls(r[s]))}else o=Ls(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function Ls(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Bf.getDataURL(n):n.data?{data:Array.prototype.slice.call(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let EM=0;class En extends eo{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,i=Sn,r=Sn,o=un,s=ts,a=Mn,l=rr,c=1,d=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Fo(),this.name="",this.source=new kf(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Df)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rl:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case Ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rl:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case Ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Df;class zt{constructor(e=0,t=0,i=0,r=1){this.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],g=l[5],m=l[9],p=l[2],f=l[6],v=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-p)<.01&&Math.abs(m-f)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+p)<.1&&Math.abs(m+f)<.1&&Math.abs(c+g+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,_=(g+1)/2,M=(v+1)/2,A=(d+h)/4,w=(u+p)/4,x=(m+f)/4;return E>_&&E>M?E<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(E),r=A/i,o=w/i):_>M?_<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(_),i=A/r,o=x/r):M<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(M),i=w/o,r=x/o),this.set(i,r,o,t),this}let y=Math.sqrt((f-m)*(f-m)+(u-p)*(u-p)+(h-d)*(h-d));return Math.abs(y)<.001&&(y=1),this.x=(f-m)/y,this.y=(u-p)/y,this.z=(h-d)/y,this.w=Math.acos((c+g+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ti extends eo{constructor(e,t,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new En(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:un,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Of extends En{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class AM extends En{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerp(e,t,i,r){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,r)}static slerpFlat(e,t,i,r,o,s,a){let l=i[r+0],c=i[r+1],d=i[r+2],u=i[r+3];const h=o[s+0],g=o[s+1],m=o[s+2],p=o[s+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=g,e[t+2]=m,e[t+3]=p;return}if(u!==p||l!==h||c!==g||d!==m){let f=1-a;const v=l*h+c*g+d*m+u*p,y=v>=0?1:-1,E=1-v*v;if(E>Number.EPSILON){const M=Math.sqrt(E),A=Math.atan2(M,v*y);f=Math.sin(f*A)/M,a=Math.sin(a*A)/M}const _=a*y;if(l=l*f+h*_,c=c*f+g*_,d=d*f+m*_,u=u*f+p*_,f===1-a){const M=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=M,c*=M,d*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],u=o[s],h=o[s+1],g=o[s+2],m=o[s+3];return e[t]=a*m+d*u+l*g-c*h,e[t+1]=l*m+d*h+c*u-a*g,e[t+2]=c*m+d*g+a*h-l*u,e[t+3]=d*m-a*u-l*h-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),u=a(o/2),h=l(i/2),g=l(r/2),m=l(o/2);switch(s){case"XYZ":this._x=h*d*u+c*g*m,this._y=c*g*u-h*d*m,this._z=c*d*m+h*g*u,this._w=c*d*u-h*g*m;break;case"YXZ":this._x=h*d*u+c*g*m,this._y=c*g*u-h*d*m,this._z=c*d*m-h*g*u,this._w=c*d*u+h*g*m;break;case"ZXY":this._x=h*d*u-c*g*m,this._y=c*g*u+h*d*m,this._z=c*d*m+h*g*u,this._w=c*d*u-h*g*m;break;case"ZYX":this._x=h*d*u-c*g*m,this._y=c*g*u+h*d*m,this._z=c*d*m-h*g*u,this._w=c*d*u+h*g*m;break;case"YZX":this._x=h*d*u+c*g*m,this._y=c*g*u+h*d*m,this._z=c*d*m-h*g*u,this._w=c*d*u-h*g*m;break;case"XZY":this._x=h*d*u-c*g*m,this._y=c*g*u-h*d*m,this._z=c*d*m+h*g*u,this._w=c*d*u+h*g*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],s=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=i+a+u;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(d-l)*g,this._y=(o-c)*g,this._z=(s-r)*g}else if(i>a&&i>u){const g=2*Math.sqrt(1+i-a-u);this._w=(d-l)/g,this._x=.25*g,this._y=(r+s)/g,this._z=(o+c)/g}else if(a>u){const g=2*Math.sqrt(1+a-i-u);this._w=(o-c)/g,this._x=(r+s)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+u-i-a);this._w=(s-r)/g,this._x=(o+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,s=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+s*a+r*c-o*l,this._y=r*d+s*l+o*a-i*c,this._z=o*d+s*c+i*l-r*a,this._w=s*d-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-t;return this._w=g*s+t*this._w,this._x=g*i+t*this._x,this._y=g*r+t*this._y,this._z=g*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=s*u+this._w*h,this._x=i*u+this._x*h,this._y=r*u+this._y*h,this._z=o*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(o),i*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){this.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(mu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=l*t+s*r-a*i,d=l*i+a*t-o*r,u=l*r+o*i-s*t,h=-o*t-s*i-a*r;return this.x=c*l+h*-o+d*-a-u*-s,this.y=d*l+h*-s+u*-o-c*-a,this.z=u*l+h*-a+c*-s-d*-o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,s=t.x,a=t.y,l=t.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ds.copy(this).projectOnVector(e),this.sub(Ds)}reflect(e){return this.sub(Ds.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ds=new j,mu=new Bo;class ko{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const d=e[l],u=e[l+1],h=e[l+2];d<t&&(t=d),u<i&&(i=u),h<r&&(r=h),d>o&&(o=d),u>s&&(s=u),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(o,s,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,o=-1/0,s=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const d=e.getX(l),u=e.getY(l),h=e.getZ(l);d<t&&(t=d),u<i&&(i=u),h<r&&(r=h),d>o&&(o=d),u>s&&(s=u),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(o,s,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const o=i.attributes.position;for(let s=0,a=o.count;s<a;s++)Ni.fromBufferAttribute(o,s).applyMatrix4(e.matrixWorld),this.expandByPoint(Ni)}else i.boundingBox===null&&i.computeBoundingBox(),Is.copy(i.boundingBox),Is.applyMatrix4(e.matrixWorld),this.union(Is);const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),ea.subVectors(this.max,fo),xr.subVectors(e.a,fo),br.subVectors(e.b,fo),_r.subVectors(e.c,fo),fi.subVectors(br,xr),pi.subVectors(_r,br),$i.subVectors(xr,_r);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-$i.z,$i.y,fi.z,0,-fi.x,pi.z,0,-pi.x,$i.z,0,-$i.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-$i.y,$i.x,0];return!zs(t,xr,br,_r,ea)||(t=[1,0,0,0,1,0,0,0,1],!zs(t,xr,br,_r,ea))?!1:(ta.crossVectors(fi,pi),t=[ta.x,ta.y,ta.z],zs(t,xr,br,_r,ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Ni.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new j,new j,new j,new j,new j,new j,new j,new j],Ni=new j,Is=new ko,xr=new j,br=new j,_r=new j,fi=new j,pi=new j,$i=new j,fo=new j,ea=new j,ta=new j,Ui=new j;function zs(n,e,t,i,r){for(let o=0,s=n.length-3;o<=s;o+=3){Ui.fromArray(n,o);const a=r.x*Math.abs(Ui.x)+r.y*Math.abs(Ui.y)+r.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),d=i.dot(Ui);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const PM=new ko,gu=new j,na=new j,Fs=new j;class ns{constructor(e=new j,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):PM.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Fs.subVectors(e,this.center);const t=Fs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.add(Fs.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?na.set(0,0,1).multiplyScalar(e.radius):na.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(gu.copy(e.center).add(na)),this.expandByPoint(gu.copy(e.center).sub(na)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new j,Bs=new j,ia=new j,mi=new j,ks=new j,ra=new j,Os=new j;class Nf{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.direction).multiplyScalar(t).add(this.origin),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Bs.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Bs);const o=e.distanceTo(t)*.5,s=-this.direction.dot(ia),a=mi.dot(this.direction),l=-mi.dot(ia),c=mi.lengthSq(),d=Math.abs(1-s*s);let u,h,g,m;if(d>0)if(u=s*l-a,h=s*a-l,m=o*d,u>=0)if(h>=-m)if(h<=m){const p=1/d;u*=p,h*=p,g=u*(u+s*h+2*a)+h*(s*u+h+2*l)+c}else h=o,u=Math.max(0,-(s*h+a)),g=-u*u+h*(h+2*l)+c;else h=-o,u=Math.max(0,-(s*h+a)),g=-u*u+h*(h+2*l)+c;else h<=-m?(u=Math.max(0,-(-s*o+a)),h=u>0?-o:Math.min(Math.max(-o,-l),o),g=-u*u+h*(h+2*l)+c):h<=m?(u=0,h=Math.min(Math.max(-o,-l),o),g=h*(h+2*l)+c):(u=Math.max(0,-(s*o+a)),h=u>0?o:Math.min(Math.max(-o,-l),o),g=-u*u+h*(h+2*l)+c);else h=s>0?-o:o,u=Math.max(0,-(s*h+a)),g=-u*u+h*(h+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),r&&r.copy(ia).multiplyScalar(h).add(Bs),g}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const i=Xn.dot(this.direction),r=Xn.dot(Xn)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,s,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(o=(e.min.y-h.y)*d,s=(e.max.y-h.y)*d):(o=(e.max.y-h.y)*d,s=(e.min.y-h.y)*d),i>s||o>r||((o>i||i!==i)&&(i=o),(s<r||r!==r)&&(r=s),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,i,r,o){ks.subVectors(t,e),ra.subVectors(i,e),Os.crossVectors(ks,ra);let s=this.direction.dot(Os),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(ra.crossVectors(mi,ra));if(l<0)return null;const c=a*this.direction.dot(ks.cross(mi));if(c<0||l+c>s)return null;const d=-a*mi.dot(Os);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(){this.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,r,o,s,a,l,c,d,u,h,g,m,p,f){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=o,v[5]=s,v[9]=a,v[13]=l,v[2]=c,v[6]=d,v[10]=u,v[14]=h,v[3]=g,v[7]=m,v[11]=p,v[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/yr.setFromMatrixColumn(e,0).length(),o=1/yr.setFromMatrixColumn(e,1).length(),s=1/yr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(o),u=Math.sin(o);if(e.order==="XYZ"){const h=s*d,g=s*u,m=a*d,p=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=g+m*c,t[5]=h-p*c,t[9]=-a*l,t[2]=p-h*c,t[6]=m+g*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*d,g=l*u,m=c*d,p=c*u;t[0]=h+p*a,t[4]=m*a-g,t[8]=s*c,t[1]=s*u,t[5]=s*d,t[9]=-a,t[2]=g*a-m,t[6]=p+h*a,t[10]=s*l}else if(e.order==="ZXY"){const h=l*d,g=l*u,m=c*d,p=c*u;t[0]=h-p*a,t[4]=-s*u,t[8]=m+g*a,t[1]=g+m*a,t[5]=s*d,t[9]=p-h*a,t[2]=-s*c,t[6]=a,t[10]=s*l}else if(e.order==="ZYX"){const h=s*d,g=s*u,m=a*d,p=a*u;t[0]=l*d,t[4]=m*c-g,t[8]=h*c+p,t[1]=l*u,t[5]=p*c+h,t[9]=g*c-m,t[2]=-c,t[6]=a*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,g=s*c,m=a*l,p=a*c;t[0]=l*d,t[4]=p-h*u,t[8]=m*u+g,t[1]=u,t[5]=s*d,t[9]=-a*d,t[2]=-c*d,t[6]=g*u+m,t[10]=h-p*u}else if(e.order==="XZY"){const h=s*l,g=s*c,m=a*l,p=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+p,t[5]=s*d,t[9]=g*u-m,t[2]=m*u-g,t[6]=a*d,t[10]=p*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RM,e,LM)}lookAt(e,t,i){const r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),gi.crossVectors(i,Jt),gi.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),gi.crossVectors(i,Jt)),gi.normalize(),oa.crossVectors(Jt,gi),r[0]=gi.x,r[4]=oa.x,r[8]=Jt.x,r[1]=gi.y,r[5]=oa.y,r[9]=Jt.y,r[2]=gi.z,r[6]=oa.z,r[10]=Jt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],d=i[1],u=i[5],h=i[9],g=i[13],m=i[2],p=i[6],f=i[10],v=i[14],y=i[3],E=i[7],_=i[11],M=i[15],A=r[0],w=r[4],x=r[8],S=r[12],P=r[1],D=r[5],$=r[9],Z=r[13],L=r[2],N=r[6],O=r[10],U=r[14],Y=r[3],I=r[7],k=r[11],se=r[15];return o[0]=s*A+a*P+l*L+c*Y,o[4]=s*w+a*D+l*N+c*I,o[8]=s*x+a*$+l*O+c*k,o[12]=s*S+a*Z+l*U+c*se,o[1]=d*A+u*P+h*L+g*Y,o[5]=d*w+u*D+h*N+g*I,o[9]=d*x+u*$+h*O+g*k,o[13]=d*S+u*Z+h*U+g*se,o[2]=m*A+p*P+f*L+v*Y,o[6]=m*w+p*D+f*N+v*I,o[10]=m*x+p*$+f*O+v*k,o[14]=m*S+p*Z+f*U+v*se,o[3]=y*A+E*P+_*L+M*Y,o[7]=y*w+E*D+_*N+M*I,o[11]=y*x+E*$+_*O+M*k,o[15]=y*S+E*Z+_*U+M*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],g=e[14],m=e[3],p=e[7],f=e[11],v=e[15];return m*(+o*l*u-r*c*u-o*a*h+i*c*h+r*a*g-i*l*g)+p*(+t*l*g-t*c*h+o*s*h-r*s*g+r*c*d-o*l*d)+f*(+t*c*u-t*a*g-o*s*u+i*s*g+o*a*d-i*c*d)+v*(-r*a*d-t*l*u+t*a*h+r*s*u-i*s*h+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],g=e[11],m=e[12],p=e[13],f=e[14],v=e[15],y=u*f*c-p*h*c+p*l*g-a*f*g-u*l*v+a*h*v,E=m*h*c-d*f*c-m*l*g+s*f*g+d*l*v-s*h*v,_=d*p*c-m*u*c+m*a*g-s*p*g-d*a*v+s*u*v,M=m*u*l-d*p*l-m*a*h+s*p*h+d*a*f-s*u*f,A=t*y+i*E+r*_+o*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=y*w,e[1]=(p*h*o-u*f*o-p*r*g+i*f*g+u*r*v-i*h*v)*w,e[2]=(a*f*o-p*l*o+p*r*c-i*f*c-a*r*v+i*l*v)*w,e[3]=(u*l*o-a*h*o-u*r*c+i*h*c+a*r*g-i*l*g)*w,e[4]=E*w,e[5]=(d*f*o-m*h*o+m*r*g-t*f*g-d*r*v+t*h*v)*w,e[6]=(m*l*o-s*f*o-m*r*c+t*f*c+s*r*v-t*l*v)*w,e[7]=(s*h*o-d*l*o+d*r*c-t*h*c-s*r*g+t*l*g)*w,e[8]=_*w,e[9]=(m*u*o-d*p*o-m*i*g+t*p*g+d*i*v-t*u*v)*w,e[10]=(s*p*o-m*a*o+m*i*c-t*p*c-s*i*v+t*a*v)*w,e[11]=(d*a*o-s*u*o-d*i*c+t*u*c+s*i*g-t*a*g)*w,e[12]=M*w,e[13]=(d*p*r-m*u*r+m*i*h-t*p*h-d*i*f+t*u*f)*w,e[14]=(m*a*r-s*p*r-m*i*l+t*p*l+s*i*f-t*a*f)*w,e[15]=(s*u*r-d*a*r+d*i*l-t*u*l-s*i*h+t*a*h)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,d=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*s,0,c*l-r*a,d*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,s=t._y,a=t._z,l=t._w,c=o+o,d=s+s,u=a+a,h=o*c,g=o*d,m=o*u,p=s*d,f=s*u,v=a*u,y=l*c,E=l*d,_=l*u,M=i.x,A=i.y,w=i.z;return r[0]=(1-(p+v))*M,r[1]=(g+_)*M,r[2]=(m-E)*M,r[3]=0,r[4]=(g-_)*A,r[5]=(1-(h+v))*A,r[6]=(f+y)*A,r[7]=0,r[8]=(m+E)*w,r[9]=(f-y)*w,r[10]=(1-(h+p))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=yr.set(r[0],r[1],r[2]).length();const s=yr.set(r[4],r[5],r[6]).length(),a=yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],yn.copy(this);const c=1/o,d=1/s,u=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=d,yn.elements[5]*=d,yn.elements[6]*=d,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,t.setFromRotationMatrix(yn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,t,i,r,o,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*o/(t-e),c=2*o/(i-r),d=(t+e)/(t-e),u=(i+r)/(i-r),h=-(s+o)/(s-o),g=-2*s*o/(s-o);return a[0]=l,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,o,s){const a=this.elements,l=1/(t-e),c=1/(i-r),d=1/(s-o),u=(t+e)*l,h=(i+r)*c,g=(s+o)*d;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const yr=new j,yn=new At,RM=new j(0,0,0),LM=new j(1,1,1),gi=new j,oa=new j,Jt=new j,vu=new At,xu=new Bo;class Oo{constructor(e=0,t=0,i=0,r=Oo.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],d=r[9],u=r[2],h=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Yt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xu.setFromEuler(this),this.setFromQuaternion(xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Oo.DefaultOrder="XYZ";Oo.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class $f{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DM=0;const bu=new j,wr=new Bo,Yn=new At,aa=new j,po=new j,IM=new j,zM=new Bo,_u=new j(1,0,0),yu=new j(0,1,0),wu=new j(0,0,1),FM={type:"added"},Su={type:"removed"};class Nt extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DefaultUp.clone();const e=new j,t=new Oo,i=new Bo,r=new j(1,1,1);function o(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Fn}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Nt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new $f,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(_u,e)}rotateY(e){return this.rotateOnAxis(yu,e)}rotateZ(e){return this.rotateOnAxis(wu,e)}translateOnAxis(e,t){return bu.copy(e).applyQuaternion(this.quaternion),this.position.add(bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_u,e)}translateY(e){return this.translateOnAxis(yu,e)}translateZ(e){return this.translateOnAxis(wu,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?aa.copy(e):aa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(po,aa,this.up):Yn.lookAt(aa,po,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(Yn),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(FM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Su)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Su)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,e,IM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(po,zM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];o(e.shapes,u)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(t){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),u=s(e.shapes),h=s(e.skeletons),g=s(e.animations),m=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),m.length>0&&(i.nodes=m)}return i.object=r,i;function s(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DefaultUp=new j(0,1,0);Nt.DefaultMatrixAutoUpdate=!0;const wn=new j,Kn=new j,Ns=new j,Zn=new j,Sr=new j,Mr=new j,Mu=new j,$s=new j,Us=new j,Hs=new j;class zn{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),wn.subVectors(e,t),r.cross(wn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){wn.subVectors(r,t),Kn.subVectors(i,t),Ns.subVectors(e,t);const s=wn.dot(wn),a=wn.dot(Kn),l=wn.dot(Ns),c=Kn.dot(Kn),d=Kn.dot(Ns),u=s*c-a*a;if(u===0)return o.set(-2,-1,-1);const h=1/u,g=(c*l-a*d)*h,m=(s*d-a*l)*h;return o.set(1-g-m,m,g)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Zn),Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,t,i,r,o,s,a,l){return this.getBarycoord(e,t,i,r,Zn),l.set(0,0),l.addScaledVector(o,Zn.x),l.addScaledVector(s,Zn.y),l.addScaledVector(a,Zn.z),l}static isFrontFacing(e,t,i,r){return wn.subVectors(i,t),Kn.subVectors(e,t),wn.cross(Kn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),wn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,o){return zn.getUV(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let s,a;Sr.subVectors(r,i),Mr.subVectors(o,i),$s.subVectors(e,i);const l=Sr.dot($s),c=Mr.dot($s);if(l<=0&&c<=0)return t.copy(i);Us.subVectors(e,r);const d=Sr.dot(Us),u=Mr.dot(Us);if(d>=0&&u<=d)return t.copy(r);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(i).addScaledVector(Sr,s);Hs.subVectors(e,o);const g=Sr.dot(Hs),m=Mr.dot(Hs);if(m>=0&&g<=m)return t.copy(o);const p=g*c-l*m;if(p<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(Mr,a);const f=d*m-g*u;if(f<=0&&u-d>=0&&g-m>=0)return Mu.subVectors(o,r),a=(u-d)/(u-d+(g-m)),t.copy(r).addScaledVector(Mu,a);const v=1/(f+p+h);return s=p*v,a=h*v,t.copy(i).addScaledVector(Sr,s).addScaledVector(Mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let BM=0;class Ft extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=$r,this.side=Po,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Rf,this.blendDst=Lf,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=El,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=CM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===I1;continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$r&&(i.blending=this.blending),this.side!==Po&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(t){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}get vertexTangents(){return console.warn("THREE."+this.type+": .vertexTangents has been removed."),!1}set vertexTangents(e){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}Ft.fromType=function(){return null};class mc extends Ft{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new j,sa=new tt;class On{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=uu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",r),s=new Ve),t[i++]=s.r,t[i++]=s.g,t[i++]=s.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",r),s=new tt),t[i++]=s.x,t[i++]=s.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",r),s=new j),t[i++]=s.x,t[i++]=s.y,t[i++]=s.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let r=0,o=e.length;r<o;r++){let s=e[r];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",r),s=new zt),t[i++]=s.x,t[i++]=s.y,t[i++]=s.z,t[i++]=s.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Uf extends On{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Hf extends On{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ot extends On{constructor(e,t,i){super(new Float32Array(e),t,i)}}let kM=0;const dn=new At,Vs=new Nt,Cr=new j,Qt=new ko,mo=new ko,Pt=new j;class xn extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zf(e)?Hf:Uf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Fn().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return Vs.lookAt(e),Vs.updateMatrix(),this.applyMatrix4(Vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];Qt.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const a=t[o];mo.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(Qt.min,mo.min),Qt.expandByPoint(Pt),Pt.addVectors(Qt.max,mo.max),Qt.expandByPoint(Pt)):(Qt.expandByPoint(mo.min),Qt.expandByPoint(mo.max))}Qt.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Pt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Pt));if(t)for(let o=0,s=t.length;o<s;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Pt.fromBufferAttribute(a,c),l&&(Cr.fromBufferAttribute(e,c),Pt.add(Cr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,o=t.normal.array,s=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let P=0;P<a;P++)c[P]=new j,d[P]=new j;const u=new j,h=new j,g=new j,m=new tt,p=new tt,f=new tt,v=new j,y=new j;function E(P,D,$){u.fromArray(r,P*3),h.fromArray(r,D*3),g.fromArray(r,$*3),m.fromArray(s,P*2),p.fromArray(s,D*2),f.fromArray(s,$*2),h.sub(u),g.sub(u),p.sub(m),f.sub(m);const Z=1/(p.x*f.y-f.x*p.y);!isFinite(Z)||(v.copy(h).multiplyScalar(f.y).addScaledVector(g,-p.y).multiplyScalar(Z),y.copy(g).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(Z),c[P].add(v),c[D].add(v),c[$].add(v),d[P].add(y),d[D].add(y),d[$].add(y))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let P=0,D=_.length;P<D;++P){const $=_[P],Z=$.start,L=$.count;for(let N=Z,O=Z+L;N<O;N+=3)E(i[N+0],i[N+1],i[N+2])}const M=new j,A=new j,w=new j,x=new j;function S(P){w.fromArray(o,P*3),x.copy(w);const D=c[P];M.copy(D),M.sub(w.multiplyScalar(w.dot(D))).normalize(),A.crossVectors(x,D);const Z=A.dot(d[P])<0?-1:1;l[P*4]=M.x,l[P*4+1]=M.y,l[P*4+2]=M.z,l[P*4+3]=Z}for(let P=0,D=_.length;P<D;++P){const $=_[P],Z=$.start,L=$.count;for(let N=Z,O=Z+L;N<O;N+=3)S(i[N+0]),S(i[N+1]),S(i[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new j,o=new j,s=new j,a=new j,l=new j,c=new j,d=new j,u=new j;if(e)for(let h=0,g=e.count;h<g;h+=3){const m=e.getX(h+0),p=e.getX(h+1),f=e.getX(h+2);r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),s.fromBufferAttribute(t,f),d.subVectors(s,o),u.subVectors(r,o),d.cross(u),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,f),a.add(d),l.add(d),c.add(d),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,g=t.count;h<g;h+=3)r.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),d.subVectors(s,o),u.subVectors(r,o),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const r in i){if(e.attributes[r]===void 0)continue;const s=i[r].array,a=e.attributes[r],l=a.array,c=a.itemSize*t,d=Math.min(l.length,s.length-c);for(let u=0,h=c;u<d;u++,h++)s[h]=l[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d);let g=0,m=0;for(let p=0,f=l.length;p<f;p++){a.isInterleavedBufferAttribute?g=l[p]*a.data.stride+a.offset:g=l[p]*d;for(let v=0;v<d;v++)h[m++]=c[g++]}return new On(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let d=0,u=c.length;d<u;d++){const h=c[d],g=e(h,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const g=c[u];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const o=e.morphAttributes;for(const c in o){const d=[],u=o[c];for(let h=0,g=u.length;h<g;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cu=new At,Tr=new Nf,Ws=new ns,vi=new j,xi=new j,bi=new j,Gs=new j,js=new j,qs=new j,la=new j,ca=new j,da=new j,ua=new tt,ha=new tt,fa=new tt,Xs=new j,pa=new j;class Qn extends Nt{constructor(e=new xn,t=new mc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(o),e.ray.intersectsSphere(Ws)===!1)||(Cu.copy(o).invert(),Tr.copy(e.ray).applyMatrix4(Cu),i.boundingBox!==null&&Tr.intersectsBox(i.boundingBox)===!1))return;let s;const a=i.index,l=i.attributes.position,c=i.morphAttributes.position,d=i.morphTargetsRelative,u=i.attributes.uv,h=i.attributes.uv2,g=i.groups,m=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,f=g.length;p<f;p++){const v=g[p],y=r[v.materialIndex],E=Math.max(v.start,m.start),_=Math.min(a.count,Math.min(v.start+v.count,m.start+m.count));for(let M=E,A=_;M<A;M+=3){const w=a.getX(M),x=a.getX(M+1),S=a.getX(M+2);s=ma(this,y,e,Tr,l,c,d,u,h,w,x,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const p=Math.max(0,m.start),f=Math.min(a.count,m.start+m.count);for(let v=p,y=f;v<y;v+=3){const E=a.getX(v),_=a.getX(v+1),M=a.getX(v+2);s=ma(this,r,e,Tr,l,c,d,u,h,E,_,M),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,f=g.length;p<f;p++){const v=g[p],y=r[v.materialIndex],E=Math.max(v.start,m.start),_=Math.min(l.count,Math.min(v.start+v.count,m.start+m.count));for(let M=E,A=_;M<A;M+=3){const w=M,x=M+1,S=M+2;s=ma(this,y,e,Tr,l,c,d,u,h,w,x,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const p=Math.max(0,m.start),f=Math.min(l.count,m.start+m.count);for(let v=p,y=f;v<y;v+=3){const E=v,_=v+1,M=v+2;s=ma(this,r,e,Tr,l,c,d,u,h,E,_,M),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}}function OM(n,e,t,i,r,o,s,a){let l;if(e.side===Cn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side!==Wr,a),l===null)return null;pa.copy(a),pa.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(pa);return c<t.near||c>t.far?null:{distance:c,point:pa.clone(),object:n}}function ma(n,e,t,i,r,o,s,a,l,c,d,u){vi.fromBufferAttribute(r,c),xi.fromBufferAttribute(r,d),bi.fromBufferAttribute(r,u);const h=n.morphTargetInfluences;if(o&&h){la.set(0,0,0),ca.set(0,0,0),da.set(0,0,0);for(let m=0,p=o.length;m<p;m++){const f=h[m],v=o[m];f!==0&&(Gs.fromBufferAttribute(v,c),js.fromBufferAttribute(v,d),qs.fromBufferAttribute(v,u),s?(la.addScaledVector(Gs,f),ca.addScaledVector(js,f),da.addScaledVector(qs,f)):(la.addScaledVector(Gs.sub(vi),f),ca.addScaledVector(js.sub(xi),f),da.addScaledVector(qs.sub(bi),f)))}vi.add(la),xi.add(ca),bi.add(da)}n.isSkinnedMesh&&(n.boneTransform(c,vi),n.boneTransform(d,xi),n.boneTransform(u,bi));const g=OM(n,e,t,i,vi,xi,bi,Xs);if(g){a&&(ua.fromBufferAttribute(a,c),ha.fromBufferAttribute(a,d),fa.fromBufferAttribute(a,u),g.uv=zn.getUV(Xs,vi,xi,bi,ua,ha,fa,new tt)),l&&(ua.fromBufferAttribute(l,c),ha.fromBufferAttribute(l,d),fa.fromBufferAttribute(l,u),g.uv2=zn.getUV(Xs,vi,xi,bi,ua,ha,fa,new tt));const m={a:c,b:d,c:u,normal:new j,materialIndex:0};zn.getNormal(vi,xi,bi,m.normal),g.face=m}return g}class to extends xn{constructor(e=1,t=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],d=[],u=[];let h=0,g=0;m("z","y","x",-1,-1,i,t,e,s,o,0),m("z","y","x",1,-1,i,t,-e,s,o,1),m("x","z","y",1,1,e,i,t,r,s,2),m("x","z","y",1,-1,e,i,-t,r,s,3),m("x","y","z",1,-1,e,t,i,r,o,4),m("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(u,2));function m(p,f,v,y,E,_,M,A,w,x,S){const P=_/w,D=M/x,$=_/2,Z=M/2,L=A/2,N=w+1,O=x+1;let U=0,Y=0;const I=new j;for(let k=0;k<O;k++){const se=k*D-Z;for(let ae=0;ae<N;ae++){const pe=ae*P-$;I[p]=pe*y,I[f]=se*E,I[v]=L,c.push(I.x,I.y,I.z),I[p]=0,I[f]=0,I[v]=A>0?1:-1,d.push(I.x,I.y,I.z),u.push(ae/w),u.push(1-k/x),U+=1}}for(let k=0;k<x;k++)for(let se=0;se<w;se++){const ae=h+se+N*k,pe=h+se+N*(k+1),Ee=h+(se+1)+N*(k+1),Pe=h+(se+1)+N*k;l.push(ae,pe,Pe),l.push(pe,Ee,Pe),Y+=6}a.addGroup(g,Y,S),g+=Y,h+=U}}static fromJSON(e){return new to(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function kt(n){const e={};for(let t=0;t<n.length;t++){const i=Xr(n[t]);for(const r in i)e[r]=i[r]}return e}const NM={clone:Xr,merge:kt};var $M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Ft{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=$M,this.fragmentShader=UM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xr(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Vf extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hn extends Vf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fu*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Es*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Er=90,Ar=1;class HM extends Nt{constructor(e,t,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const r=new hn(Er,Ar,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new j(1,0,0)),this.add(r);const o=new hn(Er,Ar,e,t);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new j(-1,0,0)),this.add(o);const s=new hn(Er,Ar,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new j(0,1,0)),this.add(s);const a=new hn(Er,Ar,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new j(0,-1,0)),this.add(a);const l=new hn(Er,Ar,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new j(0,0,1)),this.add(l);const c=new hn(Er,Ar,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new j(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,o,s,a,l,c]=this.children,d=e.getRenderTarget(),u=e.toneMapping,h=e.xr.enabled;e.toneMapping=ti,e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,o),e.setRenderTarget(i,2),e.render(t,s),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(d),e.toneMapping=u,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Wf extends En{constructor(e,t,i,r,o,s,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Gr,super(e,t,i,r,o,s,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class VM extends Ti{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Wf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new to(5,5,5),o=new ii({name:"CubemapFromEquirect",uniforms:Xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Ci});o.uniforms.tEquirect.value=t;const s=new Qn(r,o),a=t.minFilter;return t.minFilter===ts&&(t.minFilter=un),new HM(1,10,this).update(e,s),t.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(o)}}const Ys=new j,WM=new j,GM=new Fn;class Vi{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ys.subVectors(i,t).cross(WM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Ys),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(i).multiplyScalar(o).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||GM.getNormalMatrix(e),r=this.coplanarPoint(Ys).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new ns,ga=new j;class gc{constructor(e=new Vi,t=new Vi,i=new Vi,r=new Vi,o=new Vi,s=new Vi){this.planes=[e,t,i,r,o,s]}set(e,t,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],o=i[1],s=i[2],a=i[3],l=i[4],c=i[5],d=i[6],u=i[7],h=i[8],g=i[9],m=i[10],p=i[11],f=i[12],v=i[13],y=i[14],E=i[15];return t[0].setComponents(a-r,u-l,p-h,E-f).normalize(),t[1].setComponents(a+r,u+l,p+h,E+f).normalize(),t[2].setComponents(a+o,u+c,p+g,E+v).normalize(),t[3].setComponents(a-o,u-c,p-g,E-v).normalize(),t[4].setComponents(a-s,u-d,p-m,E-y).normalize(),t[5].setComponents(a+s,u+d,p+m,E+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ga.x=r.normal.x>0?e.max.x:e.min.x,ga.y=r.normal.y>0?e.max.y:e.min.y,ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gf(){let n=null,e=!1,t=null,i=null;function r(o,s){t(o,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function jM(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,d){const u=c.array,h=c.usage,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,u,h),c.onUploadCallback();let m;if(u instanceof Float32Array)m=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)m=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=5123;else if(u instanceof Int16Array)m=5122;else if(u instanceof Uint32Array)m=5125;else if(u instanceof Int32Array)m=5124;else if(u instanceof Int8Array)m=5120;else if(u instanceof Uint8Array)m=5121;else if(u instanceof Uint8ClampedArray)m=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function o(c,d,u){const h=d.array,g=d.updateRange;n.bindBuffer(u,c),g.count===-1?n.bufferSubData(u,0,h):(t?n.bufferSubData(u,g.offset*h.BYTES_PER_ELEMENT,h,g.offset,g.count):n.bufferSubData(u,g.offset*h.BYTES_PER_ELEMENT,h.subarray(g.offset,g.offset+g.count)),g.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(n.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,r(c,d)):u.version<c.version&&(o(u.buffer,c,d),u.version=c.version)}return{get:s,remove:a,update:l}}class vc extends xn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,s=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,u=e/a,h=t/l,g=[],m=[],p=[],f=[];for(let v=0;v<d;v++){const y=v*h-s;for(let E=0;E<c;E++){const _=E*u-o;m.push(_,-y,0),p.push(0,0,1),f.push(E/a),f.push(1-v/l)}}for(let v=0;v<l;v++)for(let y=0;y<a;y++){const E=y+c*v,_=y+c*(v+1),M=y+1+c*(v+1),A=y+1+c*v;g.push(E,_,A),g.push(_,M,A)}this.setIndex(g),this.setAttribute("position",new Ot(m,3)),this.setAttribute("normal",new Ot(p,3)),this.setAttribute("uv",new Ot(f,2))}static fromJSON(e){return new vc(e.width,e.height,e.widthSegments,e.heightSegments)}}var qM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,XM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,KM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QM="vec3 transformed = vec3( position );",eC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tC=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,nC=`#ifdef USE_IRIDESCENCE
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
#endif`,iC=`#ifdef USE_BUMPMAP
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
#endif`,rC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,hC=`#define PI 3.141592653589793
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
}`,fC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pC=`vec3 transformedNormal = objectNormal;
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
#endif`,mC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,vC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bC="gl_FragColor = linearToOutputTexel( gl_FragColor );",_C=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yC=`#ifdef USE_ENVMAP
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
#endif`,wC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SC=`#ifdef USE_ENVMAP
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
#endif`,MC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CC=`#ifdef USE_ENVMAP
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
#endif`,TC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RC=`#ifdef USE_GRADIENTMAP
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
}`,LC=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,DC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IC=`vec3 diffuse = vec3( 1.0 );
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
#endif`,zC=`uniform bool receiveShadow;
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
#endif`,FC=`#if defined( USE_ENVMAP )
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
#endif`,BC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kC=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,OC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NC=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,$C=`PhysicalMaterial material;
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
#endif`,UC=`struct PhysicalMaterial {
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
}`,HC=`
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
#endif`,VC=`#if defined( RE_IndirectDiffuse )
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
#endif`,WC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,GC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,XC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,YC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,JC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n2=`#ifdef USE_MORPHNORMALS
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
#endif`,i2=`#ifdef USE_MORPHTARGETS
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
#endif`,r2=`#ifdef USE_MORPHTARGETS
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
#endif`,o2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,a2=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,s2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d2=`#ifdef USE_NORMALMAP
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
#endif`,u2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,h2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,f2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,p2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,v2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,y2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S2=`#ifdef USE_SHADOWMAP
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
#endif`,M2=`#ifdef USE_SHADOWMAP
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
#endif`,C2=`#ifdef USE_SHADOWMAP
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
#endif`,T2=`float getShadowMask() {
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
}`,E2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A2=`#ifdef USE_SKINNING
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
#endif`,P2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R2=`#ifdef USE_SKINNING
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
#endif`,L2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F2=`#ifdef USE_TRANSMISSION
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
#endif`,B2=`#ifdef USE_TRANSMISSION
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
#endif`,k2=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,O2=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,N2=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,$2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,U2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,H2=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,V2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const W2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G2=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,j2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q2=`#include <envmap_common_pars_fragment>
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
}`,X2=`#include <common>
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
}`,Y2=`#if DEPTH_PACKING == 3200
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
}`,K2=`#define DISTANCE
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
}`,Z2=`#define DISTANCE
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
}`,J2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eT=`uniform float scale;
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
}`,tT=`uniform vec3 diffuse;
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
}`,nT=`#include <common>
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
}`,iT=`uniform vec3 diffuse;
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
}`,rT=`#define LAMBERT
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
}`,oT=`uniform vec3 diffuse;
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
}`,aT=`#define MATCAP
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
}`,sT=`#define MATCAP
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
}`,lT=`#define NORMAL
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
}`,cT=`#define NORMAL
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
}`,dT=`#define PHONG
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
}`,uT=`#define PHONG
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
}`,hT=`#define STANDARD
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
}`,fT=`#define STANDARD
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
}`,pT=`#define TOON
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
}`,mT=`#define TOON
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
}`,gT=`uniform float size;
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
}`,vT=`uniform vec3 diffuse;
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
}`,xT=`#include <common>
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
}`,bT=`uniform vec3 color;
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
}`,_T=`uniform float rotation;
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
}`,yT=`uniform vec3 diffuse;
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
}`,Qe={alphamap_fragment:qM,alphamap_pars_fragment:XM,alphatest_fragment:YM,alphatest_pars_fragment:KM,aomap_fragment:ZM,aomap_pars_fragment:JM,begin_vertex:QM,beginnormal_vertex:eC,bsdfs:tC,iridescence_fragment:nC,bumpmap_pars_fragment:iC,clipping_planes_fragment:rC,clipping_planes_pars_fragment:oC,clipping_planes_pars_vertex:aC,clipping_planes_vertex:sC,color_fragment:lC,color_pars_fragment:cC,color_pars_vertex:dC,color_vertex:uC,common:hC,cube_uv_reflection_fragment:fC,defaultnormal_vertex:pC,displacementmap_pars_vertex:mC,displacementmap_vertex:gC,emissivemap_fragment:vC,emissivemap_pars_fragment:xC,encodings_fragment:bC,encodings_pars_fragment:_C,envmap_fragment:yC,envmap_common_pars_fragment:wC,envmap_pars_fragment:SC,envmap_pars_vertex:MC,envmap_physical_pars_fragment:FC,envmap_vertex:CC,fog_vertex:TC,fog_pars_vertex:EC,fog_fragment:AC,fog_pars_fragment:PC,gradientmap_pars_fragment:RC,lightmap_fragment:LC,lightmap_pars_fragment:DC,lights_lambert_vertex:IC,lights_pars_begin:zC,lights_toon_fragment:BC,lights_toon_pars_fragment:kC,lights_phong_fragment:OC,lights_phong_pars_fragment:NC,lights_physical_fragment:$C,lights_physical_pars_fragment:UC,lights_fragment_begin:HC,lights_fragment_maps:VC,lights_fragment_end:WC,logdepthbuf_fragment:GC,logdepthbuf_pars_fragment:jC,logdepthbuf_pars_vertex:qC,logdepthbuf_vertex:XC,map_fragment:YC,map_pars_fragment:KC,map_particle_fragment:ZC,map_particle_pars_fragment:JC,metalnessmap_fragment:QC,metalnessmap_pars_fragment:e2,morphcolor_vertex:t2,morphnormal_vertex:n2,morphtarget_pars_vertex:i2,morphtarget_vertex:r2,normal_fragment_begin:o2,normal_fragment_maps:a2,normal_pars_fragment:s2,normal_pars_vertex:l2,normal_vertex:c2,normalmap_pars_fragment:d2,clearcoat_normal_fragment_begin:u2,clearcoat_normal_fragment_maps:h2,clearcoat_pars_fragment:f2,iridescence_pars_fragment:p2,output_fragment:m2,packing:g2,premultiplied_alpha_fragment:v2,project_vertex:x2,dithering_fragment:b2,dithering_pars_fragment:_2,roughnessmap_fragment:y2,roughnessmap_pars_fragment:w2,shadowmap_pars_fragment:S2,shadowmap_pars_vertex:M2,shadowmap_vertex:C2,shadowmask_pars_fragment:T2,skinbase_vertex:E2,skinning_pars_vertex:A2,skinning_vertex:P2,skinnormal_vertex:R2,specularmap_fragment:L2,specularmap_pars_fragment:D2,tonemapping_fragment:I2,tonemapping_pars_fragment:z2,transmission_fragment:F2,transmission_pars_fragment:B2,uv_pars_fragment:k2,uv_pars_vertex:O2,uv_vertex:N2,uv2_pars_fragment:$2,uv2_pars_vertex:U2,uv2_vertex:H2,worldpos_vertex:V2,background_vert:W2,background_frag:G2,cube_vert:j2,cube_frag:q2,depth_vert:X2,depth_frag:Y2,distanceRGBA_vert:K2,distanceRGBA_frag:Z2,equirect_vert:J2,equirect_frag:Q2,linedashed_vert:eT,linedashed_frag:tT,meshbasic_vert:nT,meshbasic_frag:iT,meshlambert_vert:rT,meshlambert_frag:oT,meshmatcap_vert:aT,meshmatcap_frag:sT,meshnormal_vert:lT,meshnormal_frag:cT,meshphong_vert:dT,meshphong_frag:uT,meshphysical_vert:hT,meshphysical_frag:fT,meshtoon_vert:pT,meshtoon_frag:mT,points_vert:gT,points_frag:vT,shadow_vert:xT,shadow_frag:bT,sprite_vert:_T,sprite_frag:yT},Ae={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Fn},uv2Transform:{value:new Fn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Fn}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Fn}}},In={basic:{uniforms:kt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:kt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:kt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:kt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:kt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ve(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:kt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:kt([Ae.points,Ae.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:kt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:kt([Ae.common,Ae.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:kt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:kt([Ae.sprite,Ae.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Fn},t2D:{value:null}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},cube:{uniforms:kt([Ae.envmap,{opacity:{value:1}}]),vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:kt([Ae.common,Ae.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:kt([Ae.lights,Ae.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};In.physical={uniforms:kt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new tt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};function wT(n,e,t,i,r,o){const s=new Ve(0);let a=r===!0?0:1,l,c,d=null,u=0,h=null;function g(p,f){let v=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=e.get(y));const E=n.xr,_=E.getSession&&E.getSession();_&&_.environmentBlendMode==="additive"&&(y=null),y===null?m(s,a):y&&y.isColor&&(m(y,1),v=!0),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===es)?(c===void 0&&(c=new Qn(new to(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Xr(In.cube.uniforms),vertexShader:In.cube.vertexShader,fragmentShader:In.cube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(d!==y||u!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,h=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Qn(new vc(2,2),new ii({name:"BackgroundMaterial",uniforms:Xr(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Po,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,h=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function m(p,f){t.buffers.color.setClear(p.r,p.g,p.b,f,o)}return{getClearColor:function(){return s},setClearColor:function(p,f=1){s.set(p),a=f,m(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,m(s,a)},render:g}}function ST(n,e,t,i){const r=n.getParameter(34921),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||o!==null,a={},l=f(null);let c=l,d=!1;function u(L,N,O,U,Y){let I=!1;if(s){const k=p(U,O,N);c!==k&&(c=k,g(c.object)),I=v(L,U,O,Y),I&&y(L,U,O,Y)}else{const k=N.wireframe===!0;(c.geometry!==U.id||c.program!==O.id||c.wireframe!==k)&&(c.geometry=U.id,c.program=O.id,c.wireframe=k,I=!0)}Y!==null&&t.update(Y,34963),(I||d)&&(d=!1,x(L,N,O,U),Y!==null&&n.bindBuffer(34963,t.get(Y).buffer))}function h(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function g(L){return i.isWebGL2?n.bindVertexArray(L):o.bindVertexArrayOES(L)}function m(L){return i.isWebGL2?n.deleteVertexArray(L):o.deleteVertexArrayOES(L)}function p(L,N,O){const U=O.wireframe===!0;let Y=a[L.id];Y===void 0&&(Y={},a[L.id]=Y);let I=Y[N.id];I===void 0&&(I={},Y[N.id]=I);let k=I[U];return k===void 0&&(k=f(h()),I[U]=k),k}function f(L){const N=[],O=[],U=[];for(let Y=0;Y<r;Y++)N[Y]=0,O[Y]=0,U[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:U,object:L,attributes:{},index:null}}function v(L,N,O,U){const Y=c.attributes,I=N.attributes;let k=0;const se=O.getAttributes();for(const ae in se)if(se[ae].location>=0){const Ee=Y[ae];let Pe=I[ae];if(Pe===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&(Pe=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&(Pe=L.instanceColor)),Ee===void 0||Ee.attribute!==Pe||Pe&&Ee.data!==Pe.data)return!0;k++}return c.attributesNum!==k||c.index!==U}function y(L,N,O,U){const Y={},I=N.attributes;let k=0;const se=O.getAttributes();for(const ae in se)if(se[ae].location>=0){let Ee=I[ae];Ee===void 0&&(ae==="instanceMatrix"&&L.instanceMatrix&&(Ee=L.instanceMatrix),ae==="instanceColor"&&L.instanceColor&&(Ee=L.instanceColor));const Pe={};Pe.attribute=Ee,Ee&&Ee.data&&(Pe.data=Ee.data),Y[ae]=Pe,k++}c.attributes=Y,c.attributesNum=k,c.index=U}function E(){const L=c.newAttributes;for(let N=0,O=L.length;N<O;N++)L[N]=0}function _(L){M(L,0)}function M(L,N){const O=c.newAttributes,U=c.enabledAttributes,Y=c.attributeDivisors;O[L]=1,U[L]===0&&(n.enableVertexAttribArray(L),U[L]=1),Y[L]!==N&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),Y[L]=N)}function A(){const L=c.newAttributes,N=c.enabledAttributes;for(let O=0,U=N.length;O<U;O++)N[O]!==L[O]&&(n.disableVertexAttribArray(O),N[O]=0)}function w(L,N,O,U,Y,I){i.isWebGL2===!0&&(O===5124||O===5125)?n.vertexAttribIPointer(L,N,O,Y,I):n.vertexAttribPointer(L,N,O,U,Y,I)}function x(L,N,O,U){if(i.isWebGL2===!1&&(L.isInstancedMesh||U.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const Y=U.attributes,I=O.getAttributes(),k=N.defaultAttributeValues;for(const se in I){const ae=I[se];if(ae.location>=0){let pe=Y[se];if(pe===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor)),pe!==void 0){const Ee=pe.normalized,Pe=pe.itemSize,W=t.get(pe);if(W===void 0)continue;const $e=W.buffer,Le=W.type,me=W.bytesPerElement;if(pe.isInterleavedBufferAttribute){const _e=pe.data,ke=_e.stride,Oe=pe.offset;if(_e.isInstancedInterleavedBuffer){for(let Fe=0;Fe<ae.locationSize;Fe++)M(ae.location+Fe,_e.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Fe=0;Fe<ae.locationSize;Fe++)_(ae.location+Fe);n.bindBuffer(34962,$e);for(let Fe=0;Fe<ae.locationSize;Fe++)w(ae.location+Fe,Pe/ae.locationSize,Le,Ee,ke*me,(Oe+Pe/ae.locationSize*Fe)*me)}else{if(pe.isInstancedBufferAttribute){for(let _e=0;_e<ae.locationSize;_e++)M(ae.location+_e,pe.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let _e=0;_e<ae.locationSize;_e++)_(ae.location+_e);n.bindBuffer(34962,$e);for(let _e=0;_e<ae.locationSize;_e++)w(ae.location+_e,Pe/ae.locationSize,Le,Ee,Pe*me,Pe/ae.locationSize*_e*me)}}else if(k!==void 0){const Ee=k[se];if(Ee!==void 0)switch(Ee.length){case 2:n.vertexAttrib2fv(ae.location,Ee);break;case 3:n.vertexAttrib3fv(ae.location,Ee);break;case 4:n.vertexAttrib4fv(ae.location,Ee);break;default:n.vertexAttrib1fv(ae.location,Ee)}}}}A()}function S(){$();for(const L in a){const N=a[L];for(const O in N){const U=N[O];for(const Y in U)m(U[Y].object),delete U[Y];delete N[O]}delete a[L]}}function P(L){if(a[L.id]===void 0)return;const N=a[L.id];for(const O in N){const U=N[O];for(const Y in U)m(U[Y].object),delete U[Y];delete N[O]}delete a[L.id]}function D(L){for(const N in a){const O=a[N];if(O[L.id]===void 0)continue;const U=O[L.id];for(const Y in U)m(U[Y].object),delete U[Y];delete O[L.id]}}function $(){Z(),d=!0,c!==l&&(c=l,g(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:$,resetDefaultState:Z,dispose:S,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:E,enableAttribute:_,disableUnusedAttributes:A}}function MT(n,e,t,i){const r=i.isWebGL2;let o;function s(c){o=c}function a(c,d){n.drawArrays(o,c,d),t.update(d,o,1)}function l(c,d,u){if(u===0)return;let h,g;if(r)h=n,g="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[g](o,c,d,u),t.update(d,o,u)}this.setMode=s,this.render=a,this.renderInstances=l}function CT(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){if(w==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext!="undefined"&&n instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&n instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=o(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,u=n.getParameter(34930),h=n.getParameter(35660),g=n.getParameter(3379),m=n.getParameter(34076),p=n.getParameter(34921),f=n.getParameter(36347),v=n.getParameter(36348),y=n.getParameter(36349),E=h>0,_=s||e.has("OES_texture_float"),M=E&&_,A=s?n.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:h,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:f,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:E,floatFragmentTextures:_,floatVertexTextures:M,maxSamples:A}}function TT(n){const e=this;let t=null,i=0,r=!1,o=!1;const s=new Vi,a=new Fn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h,g){const m=u.length!==0||h||i!==0||r;return r=h,t=d(u,g,0),i=u.length,m},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1,c()},this.setState=function(u,h,g){const m=u.clippingPlanes,p=u.clipIntersection,f=u.clipShadows,v=n.get(u);if(!r||m===null||m.length===0||o&&!f)o?d(null):c();else{const y=o?0:i,E=y*4;let _=v.clippingState||null;l.value=_,_=d(m,h,E,g);for(let M=0;M!==E;++M)_[M]=t[M];v.clippingState=_,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,g,m){const p=u!==null?u.length:0;let f=null;if(p!==0){if(f=l.value,m!==!0||f===null){const v=g+p*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<v)&&(f=new Float32Array(v));for(let E=0,_=g;E!==p;++E,_+=4)s.copy(u[E]).applyMatrix4(y,a),s.normal.toArray(f,_),f[_+3]=s.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function ET(n){let e=new WeakMap;function t(s,a){return a===Al?s.mapping=Gr:a===Pl&&(s.mapping=jr),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Al||a===Pl)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new VM(l.height/2);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class jf extends Vf{constructor(e=-1,t=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ir=4,Tu=[.125,.215,.35,.446,.526,.582],Gi=20,Ks=new jf,Eu=new Ve;let Zs=null;const Wi=(1+Math.sqrt(5))/2,Rr=1/Wi,Au=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Wi,Rr),new j(0,Wi,-Rr),new j(Rr,0,Wi),new j(-Rr,0,Wi),new j(Wi,Rr,0),new j(-Wi,Rr,0)];class Pu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Zs=this._renderer.getRenderTarget(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zs),e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zs=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Ro,format:Mn,encoding:or,depthBuffer:!1},r=Ru(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ru(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AT(o)),this._blurMaterial=PT(o,e,t)}return r}_compileMaterial(e){const t=new Qn(this._lodPlanes[0],e);this._renderer.compile(t,Ks)}_sceneToCubeUV(e,t,i,r){const a=new hn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(Eu),d.toneMapping=ti,d.autoClear=!1;const g=new mc({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),m=new Qn(new to,g);let p=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,p=!0):(g.color.copy(Eu),p=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):y===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const E=this._cubeSize;va(r,y*E,v>2?E:0,E,E),d.setRenderTarget(r),p&&d.render(m,a),d.render(e,a)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=u,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Gr||e.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Qn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;va(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Ks)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Au[(r-1)%Au.length];this._blur(e,r-1,r,o,s)}t.autoClear=i}_blur(e,t,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Qn(this._lodPlanes[r],c),h=c.uniforms,g=this._sizeLods[i]-1,m=isFinite(o)?Math.PI/(2*g):2*Math.PI/(2*Gi-1),p=o/m,f=isFinite(o)?1+Math.floor(d*p):Gi;f>Gi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Gi}`);const v=[];let y=0;for(let w=0;w<Gi;++w){const x=w/p,S=Math.exp(-x*x/2);v.push(S),w===0?y+=S:w<f&&(y+=2*S)}for(let w=0;w<v.length;w++)v[w]=v[w]/y;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=v,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=m,h.mipInt.value=E-i;const _=this._sizeLods[r],M=3*_*(r>E-Ir?r-E+Ir:0),A=4*(this._cubeSize-_);va(t,M,A,3*_,2*_),l.setRenderTarget(t),l.render(u,Ks)}}function AT(n){const e=[],t=[],i=[];let r=n;const o=n-Ir+1+Tu.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let l=1/a;s>n-Ir?l=Tu[s-n+Ir-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],g=6,m=6,p=3,f=2,v=1,y=new Float32Array(p*m*g),E=new Float32Array(f*m*g),_=new Float32Array(v*m*g);for(let A=0;A<g;A++){const w=A%3*2/3-1,x=A>2?0:-1,S=[w,x,0,w+2/3,x,0,w+2/3,x+1,0,w,x,0,w+2/3,x+1,0,w,x+1,0];y.set(S,p*m*A),E.set(h,f*m*A);const P=[A,A,A,A,A,A];_.set(P,v*m*A)}const M=new xn;M.setAttribute("position",new On(y,p)),M.setAttribute("uv",new On(E,f)),M.setAttribute("faceIndex",new On(_,v)),e.push(M),r>Ir&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ru(n,e,t){const i=new Ti(n,e,t);return i.texture.mapping=es,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function va(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function PT(n,e,t){const i=new Float32Array(Gi),r=new j(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Lu(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Du(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function xc(){return`

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
	`}function RT(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Al||l===Pl,d=l===Gr||l===jr;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Pu(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||d&&u&&r(u)){t===null&&(t=new Pu(n));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",o),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function LT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function DT(n,e,t,i){const r={},o=new WeakMap;function s(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",s),delete r[h.id];const g=o.get(h);g&&(e.remove(g),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const m in h)e.update(h[m],34962);const g=u.morphAttributes;for(const m in g){const p=g[m];for(let f=0,v=p.length;f<v;f++)e.update(p[f],34962)}}function c(u){const h=[],g=u.index,m=u.attributes.position;let p=0;if(g!==null){const y=g.array;p=g.version;for(let E=0,_=y.length;E<_;E+=3){const M=y[E+0],A=y[E+1],w=y[E+2];h.push(M,A,A,w,w,M)}}else{const y=m.array;p=m.version;for(let E=0,_=y.length/3-1;E<_;E+=3){const M=E+0,A=E+1,w=E+2;h.push(M,A,A,w,w,M)}}const f=new(zf(h)?Hf:Uf)(h,1);f.version=p;const v=o.get(u);v&&e.remove(v),o.set(u,f)}function d(u){const h=o.get(u);if(h){const g=u.index;g!==null&&h.version<g.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function IT(n,e,t,i){const r=i.isWebGL2;let o;function s(h){o=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function d(h,g){n.drawElements(o,g,a,h*l),t.update(g,o,1)}function u(h,g,m){if(m===0)return;let p,f;if(r)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](o,g,a,h*l,m),t.update(g,o,m)}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=u}function zT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case 4:t.triangles+=a*(o/3);break;case 1:t.lines+=a*(o/2);break;case 3:t.lines+=a*(o-1);break;case 2:t.lines+=a*o;break;case 0:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function FT(n,e){return n[0]-e[0]}function BT(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Js(n,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),n.divideScalar(t)}function kT(n,e,t){const i={},r=new Float32Array(8),o=new WeakMap,s=new zt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,u,h){const g=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,p=m!==void 0?m.length:0;let f=o.get(d);if(f===void 0||f.count!==p){let N=function(){Z.dispose(),o.delete(d),d.removeEventListener("dispose",N)};f!==void 0&&f.texture.dispose();const E=d.morphAttributes.position!==void 0,_=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],x=d.morphAttributes.color||[];let S=0;E===!0&&(S=1),_===!0&&(S=2),M===!0&&(S=3);let P=d.attributes.position.count*S,D=1;P>e.maxTextureSize&&(D=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const $=new Float32Array(P*D*4*p),Z=new Of($,P,D,p);Z.type=Ki,Z.needsUpdate=!0;const L=S*4;for(let O=0;O<p;O++){const U=A[O],Y=w[O],I=x[O],k=P*D*4*O;for(let se=0;se<U.count;se++){const ae=se*L;E===!0&&(s.fromBufferAttribute(U,se),U.normalized===!0&&Js(s,U),$[k+ae+0]=s.x,$[k+ae+1]=s.y,$[k+ae+2]=s.z,$[k+ae+3]=0),_===!0&&(s.fromBufferAttribute(Y,se),Y.normalized===!0&&Js(s,Y),$[k+ae+4]=s.x,$[k+ae+5]=s.y,$[k+ae+6]=s.z,$[k+ae+7]=0),M===!0&&(s.fromBufferAttribute(I,se),I.normalized===!0&&Js(s,I),$[k+ae+8]=s.x,$[k+ae+9]=s.y,$[k+ae+10]=s.z,$[k+ae+11]=I.itemSize===4?s.w:1)}}f={count:p,texture:Z,size:new tt(P,D)},o.set(d,f),d.addEventListener("dispose",N)}let v=0;for(let E=0;E<g.length;E++)v+=g[E];const y=d.morphTargetsRelative?1:1-v;h.getUniforms().setValue(n,"morphTargetBaseInfluence",y),h.getUniforms().setValue(n,"morphTargetInfluences",g),h.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}else{const m=g===void 0?0:g.length;let p=i[d.id];if(p===void 0||p.length!==m){p=[];for(let _=0;_<m;_++)p[_]=[_,0];i[d.id]=p}for(let _=0;_<m;_++){const M=p[_];M[0]=_,M[1]=g[_]}p.sort(BT);for(let _=0;_<8;_++)_<m&&p[_][1]?(a[_][0]=p[_][0],a[_][1]=p[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(FT);const f=d.morphAttributes.position,v=d.morphAttributes.normal;let y=0;for(let _=0;_<8;_++){const M=a[_],A=M[0],w=M[1];A!==Number.MAX_SAFE_INTEGER&&w?(f&&d.getAttribute("morphTarget"+_)!==f[A]&&d.setAttribute("morphTarget"+_,f[A]),v&&d.getAttribute("morphNormal"+_)!==v[A]&&d.setAttribute("morphNormal"+_,v[A]),r[_]=w,y+=w):(f&&d.hasAttribute("morphTarget"+_)===!0&&d.deleteAttribute("morphTarget"+_),v&&d.hasAttribute("morphNormal"+_)===!0&&d.deleteAttribute("morphNormal"+_),r[_]=0)}const E=d.morphTargetsRelative?1:1-y;h.getUniforms().setValue(n,"morphTargetBaseInfluence",E),h.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function OT(n,e,t,i){let r=new WeakMap;function o(l){const c=i.render.frame,d=l.geometry,u=e.get(l,d);return r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}const qf=new En,Xf=new Of,Yf=new AM,Kf=new Wf,Iu=[],zu=[],Fu=new Float32Array(16),Bu=new Float32Array(9),ku=new Float32Array(4);function no(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=Iu[r];if(o===void 0&&(o=new Float32Array(r),Iu[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=t,n[s].toArray(o,a)}return o}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function is(n,e){let t=zu[e];t===void 0&&(t=new Int32Array(e),zu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function NT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $T(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function UT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function HT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function VT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;ku.set(i),n.uniformMatrix2fv(this.addr,!1,ku),Vt(t,i)}}function WT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Bu.set(i),n.uniformMatrix3fv(this.addr,!1,Bu),Vt(t,i)}}function GT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Fu.set(i),n.uniformMatrix4fv(this.addr,!1,Fu),Vt(t,i)}}function jT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qT(n,e){const t=this.cache;Ht(t,e)||(n.uniform2iv(this.addr,e),Vt(t,e))}function XT(n,e){const t=this.cache;Ht(t,e)||(n.uniform3iv(this.addr,e),Vt(t,e))}function YT(n,e){const t=this.cache;Ht(t,e)||(n.uniform4iv(this.addr,e),Vt(t,e))}function KT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ZT(n,e){const t=this.cache;Ht(t,e)||(n.uniform2uiv(this.addr,e),Vt(t,e))}function JT(n,e){const t=this.cache;Ht(t,e)||(n.uniform3uiv(this.addr,e),Vt(t,e))}function QT(n,e){const t=this.cache;Ht(t,e)||(n.uniform4uiv(this.addr,e),Vt(t,e))}function e3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||qf,r)}function t3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Yf,r)}function n3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Kf,r)}function i3(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Xf,r)}function r3(n){switch(n){case 5126:return NT;case 35664:return $T;case 35665:return UT;case 35666:return HT;case 35674:return VT;case 35675:return WT;case 35676:return GT;case 5124:case 35670:return jT;case 35667:case 35671:return qT;case 35668:case 35672:return XT;case 35669:case 35673:return YT;case 5125:return KT;case 36294:return ZT;case 36295:return JT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return e3;case 35679:case 36299:case 36307:return t3;case 35680:case 36300:case 36308:case 36293:return n3;case 36289:case 36303:case 36311:case 36292:return i3}}function o3(n,e){n.uniform1fv(this.addr,e)}function a3(n,e){const t=no(e,this.size,2);n.uniform2fv(this.addr,t)}function s3(n,e){const t=no(e,this.size,3);n.uniform3fv(this.addr,t)}function l3(n,e){const t=no(e,this.size,4);n.uniform4fv(this.addr,t)}function c3(n,e){const t=no(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function d3(n,e){const t=no(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function u3(n,e){const t=no(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function h3(n,e){n.uniform1iv(this.addr,e)}function f3(n,e){n.uniform2iv(this.addr,e)}function p3(n,e){n.uniform3iv(this.addr,e)}function m3(n,e){n.uniform4iv(this.addr,e)}function g3(n,e){n.uniform1uiv(this.addr,e)}function v3(n,e){n.uniform2uiv(this.addr,e)}function x3(n,e){n.uniform3uiv(this.addr,e)}function b3(n,e){n.uniform4uiv(this.addr,e)}function _3(n,e,t){const i=e.length,r=is(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTexture2D(e[o]||qf,r[o])}function y3(n,e,t){const i=e.length,r=is(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Yf,r[o])}function w3(n,e,t){const i=e.length,r=is(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Kf,r[o])}function S3(n,e,t){const i=e.length,r=is(t,i);n.uniform1iv(this.addr,r);for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Xf,r[o])}function M3(n){switch(n){case 5126:return o3;case 35664:return a3;case 35665:return s3;case 35666:return l3;case 35674:return c3;case 35675:return d3;case 35676:return u3;case 5124:case 35670:return h3;case 35667:case 35671:return f3;case 35668:case 35672:return p3;case 35669:case 35673:return m3;case 5125:return g3;case 36294:return v3;case 36295:return x3;case 36296:return b3;case 35678:case 36198:case 36298:case 36306:case 35682:return _3;case 35679:case 36299:case 36307:return y3;case 35680:case 36300:case 36308:case 36293:return w3;case 36289:case 36303:case 36311:case 36292:return S3}}class C3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=r3(t.type)}}class T3{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=M3(t.type)}}class E3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,t[a.id],i)}}}const Qs=/(\w+)(\])?(\[|\.)?/g;function Ou(n,e){n.seq.push(e),n.map[e.id]=e}function A3(n,e,t){const i=n.name,r=i.length;for(Qs.lastIndex=0;;){const o=Qs.exec(i),s=Qs.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Ou(t,c===void 0?new C3(a,n,e):new T3(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new E3(a),Ou(t,u)),t=u}}}class Ma{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),s=e.getUniformLocation(t,o.name);A3(o,s,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function Nu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let P3=0;function R3(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}function L3(n){switch(n){case or:return["Linear","( value )"];case vt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function $u(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+R3(n.getShaderSource(e),s)}else return r}function D3(n,e){const t=L3(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function I3(n,e){let t;switch(e){case tM:t="Linear";break;case nM:t="Reinhard";break;case iM:t="OptimizedCineon";break;case rM:t="ACESFilmic";break;case oM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function z3(n){return[n.extensionDerivatives||!!n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vo).join(`
`)}function F3(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function B3(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),s=o.name;let a=1;o.type===35674&&(a=2),o.type===35675&&(a=3),o.type===35676&&(a=4),t[s]={type:o.type,location:n.getAttribLocation(e,s),locationSize:a}}return t}function vo(n){return n!==""}function Uu(n,e){return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k3=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(n){return n.replace(k3,O3)}function O3(n,e){const t=Qe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return zl(t)}const N3=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,$3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(n){return n.replace($3,Zf).replace(N3,U3)}function U3(n,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Zf(n,e,t,i)}function Zf(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Wu(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function H3(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===D1?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===go&&(e="SHADOWMAP_TYPE_VSM"),e}function V3(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Gr:case jr:e="ENVMAP_TYPE_CUBE";break;case es:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W3(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function G3(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Qa:e="ENVMAP_BLENDING_MULTIPLY";break;case Q1:e="ENVMAP_BLENDING_MIX";break;case eM:e="ENVMAP_BLENDING_ADD";break}return e}function j3(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function q3(n,e,t,i){const r=n.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=H3(t),c=V3(t),d=W3(t),u=G3(t),h=j3(t),g=t.isWebGL2?"":z3(t),m=F3(o),p=r.createProgram();let f,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[m].filter(vo).join(`
`),f.length>0&&(f+=`
`),v=[g,m].filter(vo).join(`
`),v.length>0&&(v+=`
`)):(f=[Wu(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),v=[g,Wu(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?Qe.tonemapping_pars_fragment:"",t.toneMapping!==ti?I3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.encodings_pars_fragment,D3("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vo).join(`
`)),s=zl(s),s=Uu(s,t),s=Hu(s,t),a=zl(a),a=Uu(a,t),a=Hu(a,t),s=Vu(s),a=Vu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["#define varying in",t.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const E=y+f+s,_=y+v+a,M=Nu(r,35633,E),A=Nu(r,35632,_);if(r.attachShader(p,M),r.attachShader(p,A),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const S=r.getProgramInfoLog(p).trim(),P=r.getShaderInfoLog(M).trim(),D=r.getShaderInfoLog(A).trim();let $=!0,Z=!0;if(r.getProgramParameter(p,35714)===!1){$=!1;const L=$u(r,M,"vertex"),N=$u(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+S+`
`+L+`
`+N)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(P===""||D==="")&&(Z=!1);Z&&(this.diagnostics={runnable:$,programLog:S,vertexShader:{log:P,prefix:f},fragmentShader:{log:D,prefix:v}})}r.deleteShader(M),r.deleteShader(A);let w;this.getUniforms=function(){return w===void 0&&(w=new Ma(r,p)),w};let x;return this.getAttributes=function(){return x===void 0&&(x=B3(r,p)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=P3++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=A,this}let X3=0;class Y3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new K3(e);t.set(e,i)}return t.get(e)}}class K3{constructor(e){this.id=X3++,this.code=e,this.usedTimes=0}}function Z3(n,e,t,i,r,o,s){const a=new $f,l=new Y3,c=[],d=r.isWebGL2,u=r.logarithmicDepthBuffer,h=r.vertexTextures;let g=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,S,P,D,$){const Z=D.fog,L=$.geometry,N=x.isMeshStandardMaterial?D.environment:null,O=(x.isMeshStandardMaterial?t:e).get(x.envMap||N),U=!!O&&O.mapping===es?O.image.height:null,Y=m[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const I=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,k=I!==void 0?I.length:0;let se=0;L.morphAttributes.position!==void 0&&(se=1),L.morphAttributes.normal!==void 0&&(se=2),L.morphAttributes.color!==void 0&&(se=3);let ae,pe,Ee,Pe;if(Y){const ke=In[Y];ae=ke.vertexShader,pe=ke.fragmentShader}else ae=x.vertexShader,pe=x.fragmentShader,l.update(x),Ee=l.getVertexShaderID(x),Pe=l.getFragmentShaderID(x);const W=n.getRenderTarget(),$e=x.alphaTest>0,Le=x.clearcoat>0,me=x.iridescence>0;return{isWebGL2:d,shaderID:Y,shaderName:x.type,vertexShader:ae,fragmentShader:pe,defines:x.defines,customVertexShaderID:Ee,customFragmentShaderID:Pe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,instancing:$.isInstancedMesh===!0,instancingColor:$.isInstancedMesh===!0&&$.instanceColor!==null,supportsVertexTextures:h,outputEncoding:W===null?n.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:or,map:!!x.map,matcap:!!x.matcap,envMap:!!O,envMapMode:O&&O.mapping,envMapCubeUVHeight:U,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===MM,tangentSpaceNormalMap:x.normalMapType===Qr,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===vt,clearcoat:Le,clearcoatMap:Le&&!!x.clearcoatMap,clearcoatRoughnessMap:Le&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:Le&&!!x.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!x.iridescenceMap,iridescenceThicknessMap:me&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===$r,alphaMap:!!x.alphaMap,alphaTest:$e,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!L.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||x.transmission>0||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||x.sheen>0||!!x.sheenColorMap||!!x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!Z,useFog:x.fog===!0,fogExp2:Z&&Z.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:x.toneMapped?n.toneMapping:ti,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Wr,flipSided:x.side===Cn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)S.push(P),S.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(v(S,x),y(S,x),S.push(n.outputEncoding)),S.push(x.customProgramCacheKey),S.join()}function v(x,S){x.push(S.precision),x.push(S.outputEncoding),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.combine),x.push(S.vertexUvs),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.map&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.lightMap&&a.enable(7),S.aoMap&&a.enable(8),S.emissiveMap&&a.enable(9),S.bumpMap&&a.enable(10),S.normalMap&&a.enable(11),S.objectSpaceNormalMap&&a.enable(12),S.tangentSpaceNormalMap&&a.enable(13),S.clearcoat&&a.enable(14),S.clearcoatMap&&a.enable(15),S.clearcoatRoughnessMap&&a.enable(16),S.clearcoatNormalMap&&a.enable(17),S.iridescence&&a.enable(18),S.iridescenceMap&&a.enable(19),S.iridescenceThicknessMap&&a.enable(20),S.displacementMap&&a.enable(21),S.specularMap&&a.enable(22),S.roughnessMap&&a.enable(23),S.metalnessMap&&a.enable(24),S.gradientMap&&a.enable(25),S.alphaMap&&a.enable(26),S.alphaTest&&a.enable(27),S.vertexColors&&a.enable(28),S.vertexAlphas&&a.enable(29),S.vertexUvs&&a.enable(30),S.vertexTangents&&a.enable(31),S.uvsVertexOnly&&a.enable(32),S.fog&&a.enable(33),x.push(a.mask),a.disableAll(),S.useFog&&a.enable(0),S.flatShading&&a.enable(1),S.logarithmicDepthBuffer&&a.enable(2),S.skinning&&a.enable(3),S.morphTargets&&a.enable(4),S.morphNormals&&a.enable(5),S.morphColors&&a.enable(6),S.premultipliedAlpha&&a.enable(7),S.shadowMapEnabled&&a.enable(8),S.physicallyCorrectLights&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.specularIntensityMap&&a.enable(14),S.specularColorMap&&a.enable(15),S.transmission&&a.enable(16),S.transmissionMap&&a.enable(17),S.thicknessMap&&a.enable(18),S.sheen&&a.enable(19),S.sheenColorMap&&a.enable(20),S.sheenRoughnessMap&&a.enable(21),S.decodeVideoTexture&&a.enable(22),S.opaque&&a.enable(23),x.push(a.mask)}function E(x){const S=m[x.type];let P;if(S){const D=In[S];P=NM.clone(D.uniforms)}else P=x.uniforms;return P}function _(x,S){let P;for(let D=0,$=c.length;D<$;D++){const Z=c[D];if(Z.cacheKey===S){P=Z,++P.usedTimes;break}}return P===void 0&&(P=new q3(n,S,x,o),c.push(P)),P}function M(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),x.destroy()}}function A(x){l.remove(x)}function w(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:E,acquireProgram:_,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:w}}function J3(){let n=new WeakMap;function e(o){let s=n.get(o);return s===void 0&&(s={},n.set(o,s)),s}function t(o){n.delete(o)}function i(o,s,a){n.get(o)[s]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Q3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ju(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function s(u,h,g,m,p,f){let v=n[e];return v===void 0?(v={id:u.id,object:u,geometry:h,material:g,groupOrder:m,renderOrder:u.renderOrder,z:p,group:f},n[e]=v):(v.id=u.id,v.object=u,v.geometry=h,v.material=g,v.groupOrder=m,v.renderOrder=u.renderOrder,v.z=p,v.group=f),e++,v}function a(u,h,g,m,p,f){const v=s(u,h,g,m,p,f);g.transmission>0?i.push(v):g.transparent===!0?r.push(v):t.push(v)}function l(u,h,g,m,p,f){const v=s(u,h,g,m,p,f);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):t.unshift(v)}function c(u,h){t.length>1&&t.sort(u||Q3),i.length>1&&i.sort(h||Gu),r.length>1&&r.sort(h||Gu)}function d(){for(let u=e,h=n.length;u<h;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:d,sort:c}}function eE(){let n=new WeakMap;function e(i,r){let o;return n.has(i)===!1?(o=new ju,n.set(i,[o])):r>=n.get(i).length?(o=new ju,n.get(i).push(o)):o=n.get(i)[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function tE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Ve};break;case"SpotLight":t={position:new j,direction:new j,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function nE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let iE=0;function rE(n,e){return(e.castShadow?1:0)-(n.castShadow?1:0)}function oE(n,e){const t=new tE,i=nE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let d=0;d<9;d++)r.probe.push(new j);const o=new j,s=new At,a=new At;function l(d,u){let h=0,g=0,m=0;for(let S=0;S<9;S++)r.probe[S].set(0,0,0);let p=0,f=0,v=0,y=0,E=0,_=0,M=0,A=0;d.sort(rE);const w=u!==!0?Math.PI:1;for(let S=0,P=d.length;S<P;S++){const D=d[S],$=D.color,Z=D.intensity,L=D.distance,N=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=$.r*Z*w,g+=$.g*Z*w,m+=$.b*Z*w;else if(D.isLightProbe)for(let O=0;O<9;O++)r.probe[O].addScaledVector(D.sh.coefficients[O],Z);else if(D.isDirectionalLight){const O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){const U=D.shadow,Y=i.get(D);Y.shadowBias=U.bias,Y.shadowNormalBias=U.normalBias,Y.shadowRadius=U.radius,Y.shadowMapSize=U.mapSize,r.directionalShadow[p]=Y,r.directionalShadowMap[p]=N,r.directionalShadowMatrix[p]=D.shadow.matrix,_++}r.directional[p]=O,p++}else if(D.isSpotLight){const O=t.get(D);if(O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy($).multiplyScalar(Z*w),O.distance=L,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,D.castShadow){const U=D.shadow,Y=i.get(D);Y.shadowBias=U.bias,Y.shadowNormalBias=U.normalBias,Y.shadowRadius=U.radius,Y.shadowMapSize=U.mapSize,r.spotShadow[v]=Y,r.spotShadowMap[v]=N,r.spotShadowMatrix[v]=D.shadow.matrix,A++}r.spot[v]=O,v++}else if(D.isRectAreaLight){const O=t.get(D);O.color.copy($).multiplyScalar(Z),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),r.rectArea[y]=O,y++}else if(D.isPointLight){const O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity*w),O.distance=D.distance,O.decay=D.decay,D.castShadow){const U=D.shadow,Y=i.get(D);Y.shadowBias=U.bias,Y.shadowNormalBias=U.normalBias,Y.shadowRadius=U.radius,Y.shadowMapSize=U.mapSize,Y.shadowCameraNear=U.camera.near,Y.shadowCameraFar=U.camera.far,r.pointShadow[f]=Y,r.pointShadowMap[f]=N,r.pointShadowMatrix[f]=D.shadow.matrix,M++}r.point[f]=O,f++}else if(D.isHemisphereLight){const O=t.get(D);O.skyColor.copy(D.color).multiplyScalar(Z*w),O.groundColor.copy(D.groundColor).multiplyScalar(Z*w),r.hemi[E]=O,E++}}y>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_FLOAT_1,r.rectAreaLTC2=Ae.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ae.LTC_HALF_1,r.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=g,r.ambient[2]=m;const x=r.hash;(x.directionalLength!==p||x.pointLength!==f||x.spotLength!==v||x.rectAreaLength!==y||x.hemiLength!==E||x.numDirectionalShadows!==_||x.numPointShadows!==M||x.numSpotShadows!==A)&&(r.directional.length=p,r.spot.length=v,r.rectArea.length=y,r.point.length=f,r.hemi.length=E,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=M,r.spotShadowMatrix.length=A,x.directionalLength=p,x.pointLength=f,x.spotLength=v,x.rectAreaLength=y,x.hemiLength=E,x.numDirectionalShadows=_,x.numPointShadows=M,x.numSpotShadows=A,r.version=iE++)}function c(d,u){let h=0,g=0,m=0,p=0,f=0;const v=u.matrixWorldInverse;for(let y=0,E=d.length;y<E;y++){const _=d[y];if(_.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),o.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(v),h++}else if(_.isSpotLight){const M=r.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(_.matrixWorld),o.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(o),M.direction.transformDirection(v),m++}else if(_.isRectAreaLight){const M=r.rectArea[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),a.identity(),s.copy(_.matrixWorld),s.premultiply(v),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(_.isPointLight){const M=r.point[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(v),g++}else if(_.isHemisphereLight){const M=r.hemi[f];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(v),f++}}}return{setup:l,setupView:c,state:r}}function qu(n,e){const t=new oE(n,e),i=[],r=[];function o(){i.length=0,r.length=0}function s(u){i.push(u)}function a(u){r.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function aE(n,e){let t=new WeakMap;function i(o,s=0){let a;return t.has(o)===!1?(a=new qu(n,e),t.set(o,[a])):s>=t.get(o).length?(a=new qu(n,e),t.get(o).push(a)):a=t.get(o)[s],a}function r(){t=new WeakMap}return{get:i,dispose:r}}class Jf extends Ft{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qf extends Ft{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new j,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lE=`uniform sampler2D shadow_pass;
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
}`;function cE(n,e,t){let i=new gc;const r=new tt,o=new tt,s=new zt,a=new Jf({depthPacking:SM}),l=new Qf,c={},d=t.maxTextureSize,u={0:Cn,1:Po,2:Wr},h=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:sE,fragmentShader:lE}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const m=new xn;m.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Qn(m,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pf,this.render=function(_,M,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||_.length===0)return;const w=n.getRenderTarget(),x=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Ci),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let D=0,$=_.length;D<$;D++){const Z=_[D],L=Z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const N=L.getFrameExtents();if(r.multiply(N),o.copy(L.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/N.x),r.x=o.x*N.x,L.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/N.y),r.y=o.y*N.y,L.mapSize.y=o.y)),L.map===null&&!L.isPointLightShadow&&this.type===go&&(L.map=new Ti(r.x,r.y),L.map.texture.name=Z.name+".shadowMap",L.mapPass=new Ti(r.x,r.y),L.camera.updateProjectionMatrix()),L.map===null){const U={minFilter:Xt,magFilter:Xt,format:Mn};L.map=new Ti(r.x,r.y,U),L.map.texture.name=Z.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();const O=L.getViewportCount();for(let U=0;U<O;U++){const Y=L.getViewport(U);s.set(o.x*Y.x,o.y*Y.y,o.x*Y.z,o.y*Y.w),P.viewport(s),L.updateMatrices(Z,U),i=L.getFrustum(),E(M,A,L.camera,Z,this.type)}!L.isPointLightShadow&&this.type===go&&v(L,A),L.needsUpdate=!1}f.needsUpdate=!1,n.setRenderTarget(w,x,S)};function v(_,M){const A=e.update(p);h.defines.VSM_SAMPLES!==_.blurSamples&&(h.defines.VSM_SAMPLES=_.blurSamples,g.defines.VSM_SAMPLES=_.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),h.uniforms.shadow_pass.value=_.map.texture,h.uniforms.resolution.value=_.mapSize,h.uniforms.radius.value=_.radius,n.setRenderTarget(_.mapPass),n.clear(),n.renderBufferDirect(M,null,A,h,p,null),g.uniforms.shadow_pass.value=_.mapPass.texture,g.uniforms.resolution.value=_.mapSize,g.uniforms.radius.value=_.radius,n.setRenderTarget(_.map),n.clear(),n.renderBufferDirect(M,null,A,g,p,null)}function y(_,M,A,w,x,S){let P=null;const D=A.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(D!==void 0?P=D:P=A.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const $=P.uuid,Z=M.uuid;let L=c[$];L===void 0&&(L={},c[$]=L);let N=L[Z];N===void 0&&(N=P.clone(),L[Z]=N),P=N}return P.visible=M.visible,P.wireframe=M.wireframe,S===go?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:u[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,A.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(A.matrixWorld),P.nearDistance=w,P.farDistance=x),P}function E(_,M,A,w,x){if(_.visible===!1)return;if(_.layers.test(M.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&x===go)&&(!_.frustumCulled||i.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,_.matrixWorld);const D=e.update(_),$=_.material;if(Array.isArray($)){const Z=D.groups;for(let L=0,N=Z.length;L<N;L++){const O=Z[L],U=$[O.materialIndex];if(U&&U.visible){const Y=y(_,U,w,A.near,A.far,x);n.renderBufferDirect(A,null,D,Y,_,O)}}}else if($.visible){const Z=y(_,$,w,A.near,A.far,x);n.renderBufferDirect(A,null,D,Z,_,null)}}const P=_.children;for(let D=0,$=P.length;D<$;D++)E(P[D],M,A,w,x)}}function dE(n,e,t){const i=t.isWebGL2;function r(){let B=!1;const xe=new zt;let V=null;const z=new zt(0,0,0,0);return{setMask:function(H){V!==H&&!B&&(n.colorMask(H,H,H,H),V=H)},setLocked:function(H){B=H},setClear:function(H,ce,ne,ge,Ce){Ce===!0&&(H*=ge,ce*=ge,ne*=ge),xe.set(H,ce,ne,ge),z.equals(xe)===!1&&(n.clearColor(H,ce,ne,ge),z.copy(xe))},reset:function(){B=!1,V=null,z.set(-1,0,0,0)}}}function o(){let B=!1,xe=null,V=null,z=null;return{setTest:function(H){H?Pe(2929):W(2929)},setMask:function(H){xe!==H&&!B&&(n.depthMask(H),xe=H)},setFunc:function(H){if(V!==H){if(H)switch(H){case j1:n.depthFunc(512);break;case q1:n.depthFunc(519);break;case X1:n.depthFunc(513);break;case El:n.depthFunc(515);break;case Y1:n.depthFunc(514);break;case K1:n.depthFunc(518);break;case Z1:n.depthFunc(516);break;case J1:n.depthFunc(517);break;default:n.depthFunc(515)}else n.depthFunc(515);V=H}},setLocked:function(H){B=H},setClear:function(H){z!==H&&(n.clearDepth(H),z=H)},reset:function(){B=!1,xe=null,V=null,z=null}}}function s(){let B=!1,xe=null,V=null,z=null,H=null,ce=null,ne=null,ge=null,Ce=null;return{setTest:function(be){B||(be?Pe(2960):W(2960))},setMask:function(be){xe!==be&&!B&&(n.stencilMask(be),xe=be)},setFunc:function(be,We,ht){(V!==be||z!==We||H!==ht)&&(n.stencilFunc(be,We,ht),V=be,z=We,H=ht)},setOp:function(be,We,ht){(ce!==be||ne!==We||ge!==ht)&&(n.stencilOp(be,We,ht),ce=be,ne=We,ge=ht)},setLocked:function(be){B=be},setClear:function(be){Ce!==be&&(n.clearStencil(be),Ce=be)},reset:function(){B=!1,xe=null,V=null,z=null,H=null,ce=null,ne=null,ge=null,Ce=null}}}const a=new r,l=new o,c=new s;let d={},u={},h=new WeakMap,g=[],m=null,p=!1,f=null,v=null,y=null,E=null,_=null,M=null,A=null,w=!1,x=null,S=null,P=null,D=null,$=null;const Z=n.getParameter(35661);let L=!1,N=0;const O=n.getParameter(7938);O.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(O)[1]),L=N>=1):O.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),L=N>=2);let U=null,Y={};const I=n.getParameter(3088),k=n.getParameter(2978),se=new zt().fromArray(I),ae=new zt().fromArray(k);function pe(B,xe,V){const z=new Uint8Array(4),H=n.createTexture();n.bindTexture(B,H),n.texParameteri(B,10241,9728),n.texParameteri(B,10240,9728);for(let ce=0;ce<V;ce++)n.texImage2D(xe+ce,0,6408,1,1,0,6408,5121,z);return H}const Ee={};Ee[3553]=pe(3553,3553,1),Ee[34067]=pe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Pe(2929),l.setFunc(El),Ye(!1),Ze(Bd),Pe(2884),Oe(Ci);function Pe(B){d[B]!==!0&&(n.enable(B),d[B]=!0)}function W(B){d[B]!==!1&&(n.disable(B),d[B]=!1)}function $e(B,xe){return u[B]!==xe?(n.bindFramebuffer(B,xe),u[B]=xe,i&&(B===36009&&(u[36160]=xe),B===36160&&(u[36009]=xe)),!0):!1}function Le(B,xe){let V=g,z=!1;if(B)if(V=h.get(xe),V===void 0&&(V=[],h.set(xe,V)),B.isWebGLMultipleRenderTargets){const H=B.texture;if(V.length!==H.length||V[0]!==36064){for(let ce=0,ne=H.length;ce<ne;ce++)V[ce]=36064+ce;V.length=H.length,z=!0}}else V[0]!==36064&&(V[0]=36064,z=!0);else V[0]!==1029&&(V[0]=1029,z=!0);z&&(t.isWebGL2?n.drawBuffers(V):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(V))}function me(B){return m!==B?(n.useProgram(B),m=B,!0):!1}const _e={[Lr]:32774,[F1]:32778,[B1]:32779};if(i)_e[$d]=32775,_e[Ud]=32776;else{const B=e.get("EXT_blend_minmax");B!==null&&(_e[$d]=B.MIN_EXT,_e[Ud]=B.MAX_EXT)}const ke={[k1]:0,[O1]:1,[N1]:768,[Rf]:770,[G1]:776,[V1]:774,[U1]:772,[$1]:769,[Lf]:771,[W1]:775,[H1]:773};function Oe(B,xe,V,z,H,ce,ne,ge){if(B===Ci){p===!0&&(W(3042),p=!1);return}if(p===!1&&(Pe(3042),p=!0),B!==z1){if(B!==f||ge!==w){if((v!==Lr||_!==Lr)&&(n.blendEquation(32774),v=Lr,_=Lr),ge)switch(B){case $r:n.blendFuncSeparate(1,771,1,771);break;case kd:n.blendFunc(1,1);break;case Od:n.blendFuncSeparate(0,769,0,1);break;case Nd:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case $r:n.blendFuncSeparate(770,771,1,771);break;case kd:n.blendFunc(770,1);break;case Od:n.blendFuncSeparate(0,769,0,1);break;case Nd:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,E=null,M=null,A=null,f=B,w=ge}return}H=H||xe,ce=ce||V,ne=ne||z,(xe!==v||H!==_)&&(n.blendEquationSeparate(_e[xe],_e[H]),v=xe,_=H),(V!==y||z!==E||ce!==M||ne!==A)&&(n.blendFuncSeparate(ke[V],ke[z],ke[ce],ke[ne]),y=V,E=z,M=ce,A=ne),f=B,w=null}function Fe(B,xe){B.side===Wr?W(2884):Pe(2884);let V=B.side===Cn;xe&&(V=!V),Ye(V),B.blending===$r&&B.transparent===!1?Oe(Ci):Oe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),a.setMask(B.colorWrite);const z=B.stencilWrite;c.setTest(z),z&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),fe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Pe(32926):W(32926)}function Ye(B){x!==B&&(B?n.frontFace(2304):n.frontFace(2305),x=B)}function Ze(B){B!==R1?(Pe(2884),B!==S&&(B===Bd?n.cullFace(1029):B===L1?n.cullFace(1028):n.cullFace(1032))):W(2884),S=B}function rt(B){B!==P&&(L&&n.lineWidth(B),P=B)}function fe(B,xe,V){B?(Pe(32823),(D!==xe||$!==V)&&(n.polygonOffset(xe,V),D=xe,$=V)):W(32823)}function ze(B){B?Pe(3089):W(3089)}function Ie(B){B===void 0&&(B=33984+Z-1),U!==B&&(n.activeTexture(B),U=B)}function Te(B,xe){U===null&&Ie();let V=Y[U];V===void 0&&(V={type:void 0,texture:void 0},Y[U]=V),(V.type!==B||V.texture!==xe)&&(n.bindTexture(B,xe||Ee[B]),V.type=B,V.texture=xe)}function re(){const B=Y[U];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function C(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function b(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function F(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Me(B){se.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),se.copy(B))}function ye(B){ae.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),ae.copy(B))}function we(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},U=null,Y={},u={},h=new WeakMap,g=[],m=null,p=!1,f=null,v=null,y=null,E=null,_=null,M=null,A=null,w=!1,x=null,S=null,P=null,D=null,$=null,se.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Pe,disable:W,bindFramebuffer:$e,drawBuffers:Le,useProgram:me,setBlending:Oe,setMaterial:Fe,setFlipSided:Ye,setCullFace:Ze,setLineWidth:rt,setPolygonOffset:fe,setScissorTest:ze,activeTexture:Ie,bindTexture:Te,unbindTexture:re,compressedTexImage2D:C,texImage2D:De,texImage3D:Q,texStorage2D:le,texStorage3D:he,texSubImage2D:b,texSubImage3D:F,compressedTexSubImage2D:q,scissor:Me,viewport:ye,reset:we}}function uE(n,e,t,i,r,o,s){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,d=r.maxTextureSize,u=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let p;const f=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,b){return v?new OffscreenCanvas(C,b):Ba("canvas")}function E(C,b,F,q){let le=1;if((C.width>q||C.height>q)&&(le=q/Math.max(C.width,C.height)),le<1||b===!0)if(typeof HTMLImageElement!="undefined"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&C instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&C instanceof ImageBitmap){const he=b?Il:Math.floor,De=he(le*C.width),Q=he(le*C.height);p===void 0&&(p=y(De,Q));const Me=F?y(De,Q):p;return Me.width=De,Me.height=Q,Me.getContext("2d").drawImage(C,0,0,De,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+De+"x"+Q+")."),Me}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function _(C){return pu(C.width)&&pu(C.height)}function M(C){return a?!1:C.wrapS!==Sn||C.wrapT!==Sn||C.minFilter!==Xt&&C.minFilter!==un}function A(C,b){return C.generateMipmaps&&b&&C.minFilter!==Xt&&C.minFilter!==un}function w(C){n.generateMipmap(C)}function x(C,b,F,q,le=!1){if(a===!1)return b;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let he=b;return b===6403&&(F===5126&&(he=33326),F===5131&&(he=33325),F===5121&&(he=33321)),b===33319&&(F===5126&&(he=33328),F===5131&&(he=33327),F===5121&&(he=33323)),b===6408&&(F===5126&&(he=34836),F===5131&&(he=34842),F===5121&&(he=q===vt&&le===!1?35907:32856),F===32819&&(he=32854),F===32820&&(he=32855)),(he===33325||he===33326||he===33327||he===33328||he===34842||he===34836)&&e.get("EXT_color_buffer_float"),he}function S(C,b,F){return A(C,F)===!0||C.isFramebufferTexture&&C.minFilter!==Xt&&C.minFilter!==un?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function P(C){return C===Xt||C===Hd||C===Vd?9728:9729}function D(C){const b=C.target;b.removeEventListener("dispose",D),Z(b),b.isVideoTexture&&m.delete(b)}function $(C){const b=C.target;b.removeEventListener("dispose",$),N(b)}function Z(C){const b=i.get(C);if(b.__webglInit===void 0)return;const F=C.source,q=f.get(F);if(q){const le=q[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&L(C),Object.keys(q).length===0&&f.delete(F)}i.remove(C)}function L(C){const b=i.get(C);n.deleteTexture(b.__webglTexture);const F=C.source,q=f.get(F);delete q[b.__cacheKey],s.memory.textures--}function N(C){const b=C.texture,F=i.get(C),q=i.get(b);if(q.__webglTexture!==void 0&&(n.deleteTexture(q.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let le=0;le<6;le++)n.deleteFramebuffer(F.__webglFramebuffer[le]),F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[le]);else{if(n.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let le=0;le<F.__webglColorRenderbuffer.length;le++)F.__webglColorRenderbuffer[le]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[le]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let le=0,he=b.length;le<he;le++){const De=i.get(b[le]);De.__webglTexture&&(n.deleteTexture(De.__webglTexture),s.memory.textures--),i.remove(b[le])}i.remove(b),i.remove(C)}let O=0;function U(){O=0}function Y(){const C=O;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),O+=1,C}function I(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.encoding),b.join()}function k(C,b){const F=i.get(C);if(C.isVideoTexture&&Te(C),C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){const q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(F,C,b);return}}t.activeTexture(33984+b),t.bindTexture(3553,F.__webglTexture)}function se(C,b){const F=i.get(C);if(C.version>0&&F.__version!==C.version){Le(F,C,b);return}t.activeTexture(33984+b),t.bindTexture(35866,F.__webglTexture)}function ae(C,b){const F=i.get(C);if(C.version>0&&F.__version!==C.version){Le(F,C,b);return}t.activeTexture(33984+b),t.bindTexture(32879,F.__webglTexture)}function pe(C,b){const F=i.get(C);if(C.version>0&&F.__version!==C.version){me(F,C,b);return}t.activeTexture(33984+b),t.bindTexture(34067,F.__webglTexture)}const Ee={[Rl]:10497,[Sn]:33071,[Ll]:33648},Pe={[Xt]:9728,[Hd]:9984,[Vd]:9986,[un]:9729,[aM]:9985,[ts]:9987};function W(C,b,F){if(F?(n.texParameteri(C,10242,Ee[b.wrapS]),n.texParameteri(C,10243,Ee[b.wrapT]),(C===32879||C===35866)&&n.texParameteri(C,32882,Ee[b.wrapR]),n.texParameteri(C,10240,Pe[b.magFilter]),n.texParameteri(C,10241,Pe[b.minFilter])):(n.texParameteri(C,10242,33071),n.texParameteri(C,10243,33071),(C===32879||C===35866)&&n.texParameteri(C,32882,33071),(b.wrapS!==Sn||b.wrapT!==Sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,10240,P(b.magFilter)),n.texParameteri(C,10241,P(b.minFilter)),b.minFilter!==Xt&&b.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(b.type===Ki&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Ro&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function $e(C,b){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",D));const q=b.source;let le=f.get(q);le===void 0&&(le={},f.set(q,le));const he=I(b);if(he!==C.__cacheKey){le[he]===void 0&&(le[he]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,F=!0),le[he].usedTimes++;const De=le[C.__cacheKey];De!==void 0&&(le[C.__cacheKey].usedTimes--,De.usedTimes===0&&L(b)),C.__cacheKey=he,C.__webglTexture=le[he].texture}return F}function Le(C,b,F){let q=3553;b.isDataArrayTexture&&(q=35866),b.isData3DTexture&&(q=32879);const le=$e(C,b),he=b.source;if(t.activeTexture(33984+F),t.bindTexture(q,C.__webglTexture),he.version!==he.__currentVersion||le===!0){n.pixelStorei(37440,b.flipY),n.pixelStorei(37441,b.premultiplyAlpha),n.pixelStorei(3317,b.unpackAlignment),n.pixelStorei(37443,0);const De=M(b)&&_(b.image)===!1;let Q=E(b.image,De,!1,d);Q=re(b,Q);const Me=_(Q)||a,ye=o.convert(b.format,b.encoding);let we=o.convert(b.type),B=x(b.internalFormat,ye,we,b.encoding,b.isVideoTexture);W(q,b,Me);let xe;const V=b.mipmaps,z=a&&b.isVideoTexture!==!0,H=he.__currentVersion===void 0||le===!0,ce=S(b,Q,Me);if(b.isDepthTexture)B=6402,a?b.type===Ki?B=36012:b.type===Yi?B=33190:b.type===Ur?B=35056:B=33189:b.type===Ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===er&&B===6402&&b.type!==If&&b.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Yi,we=o.convert(b.type)),b.format===qr&&B===6402&&(B=34041,b.type!==Ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ur,we=o.convert(b.type))),H&&(z?t.texStorage2D(3553,1,B,Q.width,Q.height):t.texImage2D(3553,0,B,Q.width,Q.height,0,ye,we,null));else if(b.isDataTexture)if(V.length>0&&Me){z&&H&&t.texStorage2D(3553,ce,B,V[0].width,V[0].height);for(let ne=0,ge=V.length;ne<ge;ne++)xe=V[ne],z?t.texSubImage2D(3553,ne,0,0,xe.width,xe.height,ye,we,xe.data):t.texImage2D(3553,ne,B,xe.width,xe.height,0,ye,we,xe.data);b.generateMipmaps=!1}else z?(H&&t.texStorage2D(3553,ce,B,Q.width,Q.height),t.texSubImage2D(3553,0,0,0,Q.width,Q.height,ye,we,Q.data)):t.texImage2D(3553,0,B,Q.width,Q.height,0,ye,we,Q.data);else if(b.isCompressedTexture){z&&H&&t.texStorage2D(3553,ce,B,V[0].width,V[0].height);for(let ne=0,ge=V.length;ne<ge;ne++)xe=V[ne],b.format!==Mn?ye!==null?z?t.compressedTexSubImage2D(3553,ne,0,0,xe.width,xe.height,ye,xe.data):t.compressedTexImage2D(3553,ne,B,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?t.texSubImage2D(3553,ne,0,0,xe.width,xe.height,ye,we,xe.data):t.texImage2D(3553,ne,B,xe.width,xe.height,0,ye,we,xe.data)}else if(b.isDataArrayTexture)z?(H&&t.texStorage3D(35866,ce,B,Q.width,Q.height,Q.depth),t.texSubImage3D(35866,0,0,0,0,Q.width,Q.height,Q.depth,ye,we,Q.data)):t.texImage3D(35866,0,B,Q.width,Q.height,Q.depth,0,ye,we,Q.data);else if(b.isData3DTexture)z?(H&&t.texStorage3D(32879,ce,B,Q.width,Q.height,Q.depth),t.texSubImage3D(32879,0,0,0,0,Q.width,Q.height,Q.depth,ye,we,Q.data)):t.texImage3D(32879,0,B,Q.width,Q.height,Q.depth,0,ye,we,Q.data);else if(b.isFramebufferTexture){if(H)if(z)t.texStorage2D(3553,ce,B,Q.width,Q.height);else{let ne=Q.width,ge=Q.height;for(let Ce=0;Ce<ce;Ce++)t.texImage2D(3553,Ce,B,ne,ge,0,ye,we,null),ne>>=1,ge>>=1}}else if(V.length>0&&Me){z&&H&&t.texStorage2D(3553,ce,B,V[0].width,V[0].height);for(let ne=0,ge=V.length;ne<ge;ne++)xe=V[ne],z?t.texSubImage2D(3553,ne,0,0,ye,we,xe):t.texImage2D(3553,ne,B,ye,we,xe);b.generateMipmaps=!1}else z?(H&&t.texStorage2D(3553,ce,B,Q.width,Q.height),t.texSubImage2D(3553,0,0,0,ye,we,Q)):t.texImage2D(3553,0,B,ye,we,Q);A(b,Me)&&w(q),he.__currentVersion=he.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function me(C,b,F){if(b.image.length!==6)return;const q=$e(C,b),le=b.source;if(t.activeTexture(33984+F),t.bindTexture(34067,C.__webglTexture),le.version!==le.__currentVersion||q===!0){n.pixelStorei(37440,b.flipY),n.pixelStorei(37441,b.premultiplyAlpha),n.pixelStorei(3317,b.unpackAlignment),n.pixelStorei(37443,0);const he=b.isCompressedTexture||b.image[0].isCompressedTexture,De=b.image[0]&&b.image[0].isDataTexture,Q=[];for(let ne=0;ne<6;ne++)!he&&!De?Q[ne]=E(b.image[ne],!1,!0,c):Q[ne]=De?b.image[ne].image:b.image[ne],Q[ne]=re(b,Q[ne]);const Me=Q[0],ye=_(Me)||a,we=o.convert(b.format,b.encoding),B=o.convert(b.type),xe=x(b.internalFormat,we,B,b.encoding),V=a&&b.isVideoTexture!==!0,z=le.__currentVersion===void 0||q===!0;let H=S(b,Me,ye);W(34067,b,ye);let ce;if(he){V&&z&&t.texStorage2D(34067,H,xe,Me.width,Me.height);for(let ne=0;ne<6;ne++){ce=Q[ne].mipmaps;for(let ge=0;ge<ce.length;ge++){const Ce=ce[ge];b.format!==Mn?we!==null?V?t.compressedTexSubImage2D(34069+ne,ge,0,0,Ce.width,Ce.height,we,Ce.data):t.compressedTexImage2D(34069+ne,ge,xe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?t.texSubImage2D(34069+ne,ge,0,0,Ce.width,Ce.height,we,B,Ce.data):t.texImage2D(34069+ne,ge,xe,Ce.width,Ce.height,0,we,B,Ce.data)}}}else{ce=b.mipmaps,V&&z&&(ce.length>0&&H++,t.texStorage2D(34067,H,xe,Q[0].width,Q[0].height));for(let ne=0;ne<6;ne++)if(De){V?t.texSubImage2D(34069+ne,0,0,0,Q[ne].width,Q[ne].height,we,B,Q[ne].data):t.texImage2D(34069+ne,0,xe,Q[ne].width,Q[ne].height,0,we,B,Q[ne].data);for(let ge=0;ge<ce.length;ge++){const be=ce[ge].image[ne].image;V?t.texSubImage2D(34069+ne,ge+1,0,0,be.width,be.height,we,B,be.data):t.texImage2D(34069+ne,ge+1,xe,be.width,be.height,0,we,B,be.data)}}else{V?t.texSubImage2D(34069+ne,0,0,0,we,B,Q[ne]):t.texImage2D(34069+ne,0,xe,we,B,Q[ne]);for(let ge=0;ge<ce.length;ge++){const Ce=ce[ge];V?t.texSubImage2D(34069+ne,ge+1,0,0,we,B,Ce.image[ne]):t.texImage2D(34069+ne,ge+1,xe,we,B,Ce.image[ne])}}}A(b,ye)&&w(34067),le.__currentVersion=le.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function _e(C,b,F,q,le){const he=o.convert(F.format,F.encoding),De=o.convert(F.type),Q=x(F.internalFormat,he,De,F.encoding);i.get(b).__hasExternalTextures||(le===32879||le===35866?t.texImage3D(le,0,Q,b.width,b.height,b.depth,0,he,De,null):t.texImage2D(le,0,Q,b.width,b.height,0,he,De,null)),t.bindFramebuffer(36160,C),Ie(b)?h.framebufferTexture2DMultisampleEXT(36160,q,le,i.get(F).__webglTexture,0,ze(b)):n.framebufferTexture2D(36160,q,le,i.get(F).__webglTexture,0),t.bindFramebuffer(36160,null)}function ke(C,b,F){if(n.bindRenderbuffer(36161,C),b.depthBuffer&&!b.stencilBuffer){let q=33189;if(F||Ie(b)){const le=b.depthTexture;le&&le.isDepthTexture&&(le.type===Ki?q=36012:le.type===Yi&&(q=33190));const he=ze(b);Ie(b)?h.renderbufferStorageMultisampleEXT(36161,he,q,b.width,b.height):n.renderbufferStorageMultisample(36161,he,q,b.width,b.height)}else n.renderbufferStorage(36161,q,b.width,b.height);n.framebufferRenderbuffer(36160,36096,36161,C)}else if(b.depthBuffer&&b.stencilBuffer){const q=ze(b);F&&Ie(b)===!1?n.renderbufferStorageMultisample(36161,q,35056,b.width,b.height):Ie(b)?h.renderbufferStorageMultisampleEXT(36161,q,35056,b.width,b.height):n.renderbufferStorage(36161,34041,b.width,b.height),n.framebufferRenderbuffer(36160,33306,36161,C)}else{const q=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let le=0;le<q.length;le++){const he=q[le],De=o.convert(he.format,he.encoding),Q=o.convert(he.type),Me=x(he.internalFormat,De,Q,he.encoding),ye=ze(b);F&&Ie(b)===!1?n.renderbufferStorageMultisample(36161,ye,Me,b.width,b.height):Ie(b)?h.renderbufferStorageMultisampleEXT(36161,ye,Me,b.width,b.height):n.renderbufferStorage(36161,Me,b.width,b.height)}}n.bindRenderbuffer(36161,null)}function Oe(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k(b.depthTexture,0);const q=i.get(b.depthTexture).__webglTexture,le=ze(b);if(b.depthTexture.format===er)Ie(b)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,q,0,le):n.framebufferTexture2D(36160,36096,3553,q,0);else if(b.depthTexture.format===qr)Ie(b)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,q,0,le):n.framebufferTexture2D(36160,33306,3553,q,0);else throw new Error("Unknown depthTexture format")}function Fe(C){const b=i.get(C),F=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Oe(b.__webglFramebuffer,C)}else if(F){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(36160,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]=n.createRenderbuffer(),ke(b.__webglDepthbuffer[q],C,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),ke(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function Ye(C,b,F){const q=i.get(C);b!==void 0&&_e(q.__webglFramebuffer,C,C.texture,36064,3553),F!==void 0&&Fe(C)}function Ze(C){const b=C.texture,F=i.get(C),q=i.get(b);C.addEventListener("dispose",$),C.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=b.version,s.memory.textures++);const le=C.isWebGLCubeRenderTarget===!0,he=C.isWebGLMultipleRenderTargets===!0,De=_(C)||a;if(le){F.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)F.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(F.__webglFramebuffer=n.createFramebuffer(),he)if(r.drawBuffers){const Q=C.texture;for(let Me=0,ye=Q.length;Me<ye;Me++){const we=i.get(Q[Me]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Ie(C)===!1){const Q=he?b:[b];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer);for(let Me=0;Me<Q.length;Me++){const ye=Q[Me];F.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(36161,F.__webglColorRenderbuffer[Me]);const we=o.convert(ye.format,ye.encoding),B=o.convert(ye.type),xe=x(ye.internalFormat,we,B,ye.encoding),V=ze(C);n.renderbufferStorageMultisample(36161,V,xe,C.width,C.height),n.framebufferRenderbuffer(36160,36064+Me,36161,F.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(36161,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),ke(F.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(le){t.bindTexture(34067,q.__webglTexture),W(34067,b,De);for(let Q=0;Q<6;Q++)_e(F.__webglFramebuffer[Q],C,b,36064,34069+Q);A(b,De)&&w(34067),t.unbindTexture()}else if(he){const Q=C.texture;for(let Me=0,ye=Q.length;Me<ye;Me++){const we=Q[Me],B=i.get(we);t.bindTexture(3553,B.__webglTexture),W(3553,we,De),_e(F.__webglFramebuffer,C,we,36064+Me,3553),A(we,De)&&w(3553)}t.unbindTexture()}else{let Q=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?Q=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Q,q.__webglTexture),W(Q,b,De),_e(F.__webglFramebuffer,C,b,36064,Q),A(b,De)&&w(Q),t.unbindTexture()}C.depthBuffer&&Fe(C)}function rt(C){const b=_(C)||a,F=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let q=0,le=F.length;q<le;q++){const he=F[q];if(A(he,b)){const De=C.isWebGLCubeRenderTarget?34067:3553,Q=i.get(he).__webglTexture;t.bindTexture(De,Q),w(De),t.unbindTexture()}}}function fe(C){if(a&&C.samples>0&&Ie(C)===!1){const b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],F=C.width,q=C.height;let le=16384;const he=[],De=C.stencilBuffer?33306:36096,Q=i.get(C),Me=C.isWebGLMultipleRenderTargets===!0;if(Me)for(let ye=0;ye<b.length;ye++)t.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ye,36161,null),t.bindFramebuffer(36160,Q.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ye,3553,null,0);t.bindFramebuffer(36008,Q.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,Q.__webglFramebuffer);for(let ye=0;ye<b.length;ye++){he.push(36064+ye),C.depthBuffer&&he.push(De);const we=Q.__ignoreDepthValues!==void 0?Q.__ignoreDepthValues:!1;if(we===!1&&(C.depthBuffer&&(le|=256),C.stencilBuffer&&(le|=1024)),Me&&n.framebufferRenderbuffer(36008,36064,36161,Q.__webglColorRenderbuffer[ye]),we===!0&&(n.invalidateFramebuffer(36008,[De]),n.invalidateFramebuffer(36009,[De])),Me){const B=i.get(b[ye]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,B,0)}n.blitFramebuffer(0,0,F,q,0,0,F,q,le,9728),g&&n.invalidateFramebuffer(36008,he)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Me)for(let ye=0;ye<b.length;ye++){t.bindFramebuffer(36160,Q.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ye,36161,Q.__webglColorRenderbuffer[ye]);const we=i.get(b[ye]).__webglTexture;t.bindFramebuffer(36160,Q.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ye,3553,we,0)}t.bindFramebuffer(36009,Q.__webglMultisampledFramebuffer)}}function ze(C){return Math.min(u,C.samples)}function Ie(C){const b=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Te(C){const b=s.render.frame;m.get(C)!==b&&(m.set(C,b),C.update())}function re(C,b){const F=C.encoding,q=C.format,le=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Dl||F!==or&&(F===vt?a===!1?e.has("EXT_sRGB")===!0&&q===Mn?(C.format=Dl,C.minFilter=un,C.generateMipmaps=!1):b=Bf.sRGBToLinear(b):(q!==Mn||le!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",F)),b}this.allocateTextureUnit=Y,this.resetTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=se,this.setTexture3D=ae,this.setTextureCube=pe,this.rebindTextures=Ye,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=fe,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ie}function hE(n,e,t){const i=t.isWebGL2;function r(o,s=null){let a;if(o===rr)return 5121;if(o===dM)return 32819;if(o===uM)return 32820;if(o===sM)return 5120;if(o===lM)return 5122;if(o===If)return 5123;if(o===cM)return 5124;if(o===Yi)return 5125;if(o===Ki)return 5126;if(o===Ro)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===hM)return 6406;if(o===Mn)return 6408;if(o===pM)return 6409;if(o===mM)return 6410;if(o===er)return 6402;if(o===qr)return 34041;if(o===gM)return 6403;if(o===fM)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(o===Dl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===vM)return 36244;if(o===xM)return 33319;if(o===bM)return 33320;if(o===_M)return 36249;if(o===ws||o===Ss||o===Ms||o===Cs)if(s===vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===ws)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Ss)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Ms)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===ws)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Ss)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Ms)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Cs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===Wd||o===Gd||o===jd||o===qd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===Wd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===Gd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===jd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===qd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===yM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Xd||o===Yd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(o===Xd)return s===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===Yd)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Kd||o===Zd||o===Jd||o===Qd||o===eu||o===tu||o===nu||o===iu||o===ru||o===ou||o===au||o===su||o===lu||o===cu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(o===Kd)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===Zd)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Jd)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===Qd)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===eu)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===tu)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===nu)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===iu)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===ru)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===ou)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===au)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===su)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===lu)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===cu)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===du)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(o===du)return s===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return o===Ur?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}class fE extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xa extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pE={type:"move"};class el{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(a!==null&&(r=t.getPose(e.targetRaySpace,i),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pE))),c&&e.hand){s=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,i);if(c.joints[p.jointName]===void 0){const y=new xa;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[p.jointName]=y,c.add(y)}const v=c.joints[p.jointName];f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=f.radius),v.visible=f!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),g=.02,m=.005;c.inputState.pinching&&h>g+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=g-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}}class mE extends En{constructor(e,t,i,r,o,s,a,l,c,d){if(d=d!==void 0?d:er,d!==er&&d!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===er&&(i=Yi),i===void 0&&d===qr&&(i=Ur),super(null,r,o,s,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1}}class gE extends eo{constructor(e,t){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=null,c=null,d=null,u=null,h=null,g=null;const m=t.getContextAttributes();let p=null,f=null;const v=[],y=new Map,E=new hn;E.layers.enable(1),E.viewport=new zt;const _=new hn;_.layers.enable(2),_.viewport=new zt;const M=[E,_],A=new fE;A.layers.enable(1),A.layers.enable(2);let w=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let k=v[I];return k===void 0&&(k=new el,v[I]=k),k.getTargetRaySpace()},this.getControllerGrip=function(I){let k=v[I];return k===void 0&&(k=new el,v[I]=k),k.getGripSpace()},this.getHand=function(I){let k=v[I];return k===void 0&&(k=new el,v[I]=k),k.getHandSpace()};function S(I){const k=y.get(I.inputSource);k!==void 0&&k.dispatchEvent({type:I.type,data:I.inputSource})}function P(){r.removeEventListener("select",S),r.removeEventListener("selectstart",S),r.removeEventListener("selectend",S),r.removeEventListener("squeeze",S),r.removeEventListener("squeezestart",S),r.removeEventListener("squeezeend",S),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",D),y.forEach(function(I,k){I!==void 0&&I.disconnect(k)}),y.clear(),w=null,x=null,e.setRenderTarget(p),h=null,u=null,d=null,r=null,f=null,Y.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){o=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(I){l=I},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",S),r.addEventListener("selectstart",S),r.addEventListener("selectend",S),r.addEventListener("squeeze",S),r.addEventListener("squeezestart",S),r.addEventListener("squeezeend",S),r.addEventListener("end",P),r.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,t,k),r.updateRenderState({baseLayer:h}),f=new Ti(h.framebufferWidth,h.framebufferHeight,{format:Mn,type:rr,encoding:e.outputEncoding})}else{let k=null,se=null,ae=null;m.depth&&(ae=m.stencil?35056:33190,k=m.stencil?qr:er,se=m.stencil?Ur:Yi);const pe={colorFormat:e.outputEncoding===vt?35907:32856,depthFormat:ae,scaleFactor:o};d=new XRWebGLBinding(r,t),u=d.createProjectionLayer(pe),r.updateRenderState({layers:[u]}),f=new Ti(u.textureWidth,u.textureHeight,{format:Mn,type:rr,depthTexture:new mE(u.textureWidth,u.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});const Ee=e.properties.get(f);Ee.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),l=null,s=await r.requestReferenceSpace(a),Y.setContext(r),Y.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function D(I){const k=r.inputSources;for(let se=0;se<k.length;se++){const ae=k[se].handedness==="right"?1:0;y.set(k[se],v[ae])}for(let se=0;se<I.removed.length;se++){const ae=I.removed[se],pe=y.get(ae);pe&&(pe.dispatchEvent({type:"disconnected",data:ae}),y.delete(ae))}for(let se=0;se<I.added.length;se++){const ae=I.added[se],pe=y.get(ae);pe&&pe.dispatchEvent({type:"connected",data:ae})}}const $=new j,Z=new j;function L(I,k,se){$.setFromMatrixPosition(k.matrixWorld),Z.setFromMatrixPosition(se.matrixWorld);const ae=$.distanceTo(Z),pe=k.projectionMatrix.elements,Ee=se.projectionMatrix.elements,Pe=pe[14]/(pe[10]-1),W=pe[14]/(pe[10]+1),$e=(pe[9]+1)/pe[5],Le=(pe[9]-1)/pe[5],me=(pe[8]-1)/pe[0],_e=(Ee[8]+1)/Ee[0],ke=Pe*me,Oe=Pe*_e,Fe=ae/(-me+_e),Ye=Fe*-me;k.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ye),I.translateZ(Fe),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const Ze=Pe+Fe,rt=W+Fe,fe=ke-Ye,ze=Oe+(ae-Ye),Ie=$e*W/rt*Ze,Te=Le*W/rt*Ze;I.projectionMatrix.makePerspective(fe,ze,Ie,Te,Ze,rt)}function N(I,k){k===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(k.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;A.near=_.near=E.near=I.near,A.far=_.far=E.far=I.far,(w!==A.near||x!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),w=A.near,x=A.far);const k=I.parent,se=A.cameras;N(A,k);for(let pe=0;pe<se.length;pe++)N(se[pe],k);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),I.position.copy(A.position),I.quaternion.copy(A.quaternion),I.scale.copy(A.scale),I.matrix.copy(A.matrix),I.matrixWorld.copy(A.matrixWorld);const ae=I.children;for(let pe=0,Ee=ae.length;pe<Ee;pe++)ae[pe].updateMatrixWorld(!0);se.length===2?L(A,E,_):A.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(I){u!==null&&(u.fixedFoveation=I),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=I)};let O=null;function U(I,k){if(c=k.getViewerPose(l||s),g=k,c!==null){const ae=c.views;h!==null&&(e.setRenderTargetFramebuffer(f,h.framebuffer),e.setRenderTarget(f));let pe=!1;ae.length!==A.cameras.length&&(A.cameras.length=0,pe=!0);for(let Ee=0;Ee<ae.length;Ee++){const Pe=ae[Ee];let W=null;if(h!==null)W=h.getViewport(Pe);else{const Le=d.getViewSubImage(u,Pe);W=Le.viewport,Ee===0&&(e.setRenderTargetTextures(f,Le.colorTexture,u.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(f))}let $e=M[Ee];$e===void 0&&($e=new hn,$e.layers.enable(Ee),$e.viewport=new zt,M[Ee]=$e),$e.matrix.fromArray(Pe.transform.matrix),$e.projectionMatrix.fromArray(Pe.projectionMatrix),$e.viewport.set(W.x,W.y,W.width,W.height),Ee===0&&A.matrix.copy($e.matrix),pe===!0&&A.cameras.push($e)}}const se=r.inputSources;for(let ae=0;ae<v.length;ae++){const pe=se[ae],Ee=y.get(pe);Ee!==void 0&&Ee.update(pe,k,l||s)}O&&O(I,k),g=null}const Y=new Gf;Y.setAnimationLoop(U),this.setAnimationLoop=function(I){O=I},this.dispose=function(){}}}function vE(n,e){function t(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,v,y,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),d(p,f)):f.isMeshPhongMaterial?(r(p,f),c(p,f)):f.isMeshStandardMaterial?(r(p,f),u(p,f),f.isMeshPhysicalMaterial&&h(p,f,E)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),m(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&s(p,f)):f.isPointsMaterial?a(p,f,v,y):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Cn&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Cn&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const v=e.get(f).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const _=n.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*_}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let y;f.map?y=f.map:f.specularMap?y=f.specularMap:f.displacementMap?y=f.displacementMap:f.normalMap?y=f.normalMap:f.bumpMap?y=f.bumpMap:f.roughnessMap?y=f.roughnessMap:f.metalnessMap?y=f.metalnessMap:f.alphaMap?y=f.alphaMap:f.emissiveMap?y=f.emissiveMap:f.clearcoatMap?y=f.clearcoatMap:f.clearcoatNormalMap?y=f.clearcoatNormalMap:f.clearcoatRoughnessMap?y=f.clearcoatRoughnessMap:f.iridescenceMap?y=f.iridescenceMap:f.iridescenceThicknessMap?y=f.iridescenceThicknessMap:f.specularIntensityMap?y=f.specularIntensityMap:f.specularColorMap?y=f.specularColorMap:f.transmissionMap?y=f.transmissionMap:f.thicknessMap?y=f.thicknessMap:f.sheenColorMap?y=f.sheenColorMap:f.sheenRoughnessMap&&(y=f.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let E;f.aoMap?E=f.aoMap:f.lightMap&&(E=f.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uv2Transform.value.copy(E.matrix))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function s(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,v,y){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=y*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let E;f.map?E=f.map:f.alphaMap&&(E=f.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix))}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function u(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function h(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Cn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function m(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function xE(){const n=Ba("canvas");return n.style.display="block",n}function ep(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:xE(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,o=n.antialias!==void 0?n.antialias:!1,s=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let d;t!==null?d=t.getContextAttributes().alpha:d=n.alpha!==void 0?n.alpha:!1;let u=null,h=null;const g=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=or,this.physicallyCorrectLights=!1,this.toneMapping=ti,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let f=!1,v=0,y=0,E=null,_=-1,M=null;const A=new zt,w=new zt;let x=null,S=e.width,P=e.height,D=1,$=null,Z=null;const L=new zt(0,0,S,P),N=new zt(0,0,S,P);let O=!1;const U=new gc;let Y=!1,I=!1,k=null;const se=new At,ae=new tt,pe=new j,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return E===null?D:1}let W=t;function $e(R,X){for(let ie=0;ie<R.length;ie++){const ee=R[ie],de=e.getContext(ee,X);if(de!==null)return de}return null}try{const R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pc}`),e.addEventListener("webglcontextlost",B,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",V,!1),W===null){const X=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&X.shift(),W=$e(X,R),W===null)throw $e(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Le,me,_e,ke,Oe,Fe,Ye,Ze,rt,fe,ze,Ie,Te,re,C,b,F,q,le,he,De,Q,Me;function ye(){Le=new LT(W),me=new CT(W,Le,n),Le.init(me),Q=new hE(W,Le,me),_e=new dE(W,Le,me),ke=new zT,Oe=new J3,Fe=new uE(W,Le,_e,Oe,me,Q,ke),Ye=new ET(p),Ze=new RT(p),rt=new jM(W,me),Me=new ST(W,Le,rt,me),fe=new DT(W,rt,ke,Me),ze=new OT(W,fe,rt,ke),le=new kT(W,me,Fe),b=new TT(Oe),Ie=new Z3(p,Ye,Ze,Le,me,Me,b),Te=new vE(p,Oe),re=new eE,C=new aE(Le,me),q=new wT(p,Ye,_e,ze,d,s),F=new cE(p,ze,me),he=new MT(W,Le,ke,me),De=new IT(W,Le,ke,me),ke.programs=Ie.programs,p.capabilities=me,p.extensions=Le,p.properties=Oe,p.renderLists=re,p.shadowMap=F,p.state=_e,p.info=ke}ye();const we=new gE(p,W);this.xr=we,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=Le.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Le.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(R){R!==void 0&&(D=R,this.setSize(S,P,!1))},this.getSize=function(R){return R.set(S,P)},this.setSize=function(R,X,ie){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=R,P=X,e.width=Math.floor(R*D),e.height=Math.floor(X*D),ie!==!1&&(e.style.width=R+"px",e.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(S*D,P*D).floor()},this.setDrawingBufferSize=function(R,X,ie){S=R,P=X,D=ie,e.width=Math.floor(R*ie),e.height=Math.floor(X*ie),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(L)},this.setViewport=function(R,X,ie,ee){R.isVector4?L.set(R.x,R.y,R.z,R.w):L.set(R,X,ie,ee),_e.viewport(A.copy(L).multiplyScalar(D).floor())},this.getScissor=function(R){return R.copy(N)},this.setScissor=function(R,X,ie,ee){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,X,ie,ee),_e.scissor(w.copy(N).multiplyScalar(D).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(R){_e.setScissorTest(O=R)},this.setOpaqueSort=function(R){$=R},this.setTransparentSort=function(R){Z=R},this.getClearColor=function(R){return R.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(R=!0,X=!0,ie=!0){let ee=0;R&&(ee|=16384),X&&(ee|=256),ie&&(ee|=1024),W.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",B,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",V,!1),re.dispose(),C.dispose(),Oe.dispose(),Ye.dispose(),Ze.dispose(),ze.dispose(),Me.dispose(),Ie.dispose(),we.dispose(),we.removeEventListener("sessionstart",Ce),we.removeEventListener("sessionend",be),k&&(k.dispose(),k=null),We.stop()};function B(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const R=ke.autoReset,X=F.enabled,ie=F.autoUpdate,ee=F.needsUpdate,de=F.type;ye(),ke.autoReset=R,F.enabled=X,F.autoUpdate=ie,F.needsUpdate=ee,F.type=de}function V(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function z(R){const X=R.target;X.removeEventListener("dispose",z),H(X)}function H(R){ce(R),Oe.remove(R)}function ce(R){const X=Oe.get(R).programs;X!==void 0&&(X.forEach(function(ie){Ie.releaseProgram(ie)}),R.isShaderMaterial&&Ie.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,ie,ee,de,He){X===null&&(X=Ee);const Ge=de.isMesh&&de.matrixWorld.determinant()<0,Xe=mt(R,X,ie,ee,de);_e.setMaterial(ee,Ge);let je=ie.index;const it=ie.attributes.position;if(je===null){if(it===void 0||it.count===0)return}else if(je.count===0)return;let Je=1;ee.wireframe===!0&&(je=fe.getWireframeAttribute(ie),Je=2),Me.setup(de,ee,Xe,ie,je);let et,dt=he;je!==null&&(et=rt.get(je),dt=De,dt.setIndex(et));const Gn=je!==null?je.count:it.count,li=ie.drawRange.start*Je,ci=ie.drawRange.count*Je,an=He!==null?He.start*Je:0,ot=He!==null?He.count*Je:1/0,di=Math.max(li,an),xt=Math.min(Gn,li+ci,an+ot)-1,sn=Math.max(0,xt-di+1);if(sn!==0){if(de.isMesh)ee.wireframe===!0?(_e.setLineWidth(ee.wireframeLinewidth*Pe()),dt.setMode(1)):dt.setMode(4);else if(de.isLine){let Rn=ee.linewidth;Rn===void 0&&(Rn=1),_e.setLineWidth(Rn*Pe()),de.isLineSegments?dt.setMode(1):de.isLineLoop?dt.setMode(2):dt.setMode(3)}else de.isPoints?dt.setMode(0):de.isSprite&&dt.setMode(4);if(de.isInstancedMesh)dt.renderInstances(di,sn,de.count);else if(ie.isInstancedBufferGeometry){const Rn=Math.min(ie.instanceCount,ie._maxInstanceCount);dt.renderInstances(di,sn,Rn)}else dt.render(di,sn)}},this.compile=function(R,X){h=C.get(R),h.init(),m.push(h),R.traverseVisible(function(ie){ie.isLight&&ie.layers.test(X.layers)&&(h.pushLight(ie),ie.castShadow&&h.pushShadow(ie))}),h.setupLights(p.physicallyCorrectLights),R.traverse(function(ie){const ee=ie.material;if(ee)if(Array.isArray(ee))for(let de=0;de<ee.length;de++){const He=ee[de];ve(He,R,ie)}else ve(ee,R,ie)}),m.pop(),h=null};let ne=null;function ge(R){ne&&ne(R)}function Ce(){We.stop()}function be(){We.start()}const We=new Gf;We.setAnimationLoop(ge),typeof self!="undefined"&&We.setContext(self),this.setAnimationLoop=function(R){ne=R,we.setAnimationLoop(R),R===null?We.stop():We.start()},we.addEventListener("sessionstart",Ce),we.addEventListener("sessionend",be),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;R.autoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(X),X=we.getCamera()),R.isScene===!0&&R.onBeforeRender(p,R,X,E),h=C.get(R,m.length),h.init(),m.push(h),se.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),U.setFromProjectionMatrix(se),I=this.localClippingEnabled,Y=b.init(this.clippingPlanes,I,X),u=re.get(R,g.length),u.init(),g.push(u),ht(R,X,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort($,Z),Y===!0&&b.beginShadows();const ie=h.state.shadowsArray;if(F.render(ie,R,X),Y===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(u,R),h.setupLights(p.physicallyCorrectLights),X.isArrayCamera){const ee=X.cameras;for(let de=0,He=ee.length;de<He;de++){const Ge=ee[de];Pn(u,R,Ge,Ge.viewport)}}else Pn(u,R,X);E!==null&&(Fe.updateMultisampleRenderTarget(E),Fe.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(p,R,X),Me.resetDefaultState(),_=-1,M=null,m.pop(),m.length>0?h=m[m.length-1]:h=null,g.pop(),g.length>0?u=g[g.length-1]:u=null};function ht(R,X,ie,ee){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||U.intersectsSprite(R)){ee&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(se);const Ge=ze.update(R),Xe=R.material;Xe.visible&&u.push(R,Ge,Xe,ie,pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==ke.render.frame&&(R.skeleton.update(),R.skeleton.frame=ke.render.frame),!R.frustumCulled||U.intersectsObject(R))){ee&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(se);const Ge=ze.update(R),Xe=R.material;if(Array.isArray(Xe)){const je=Ge.groups;for(let it=0,Je=je.length;it<Je;it++){const et=je[it],dt=Xe[et.materialIndex];dt&&dt.visible&&u.push(R,Ge,dt,ie,pe.z,et)}}else Xe.visible&&u.push(R,Ge,Xe,ie,pe.z,null)}}const He=R.children;for(let Ge=0,Xe=He.length;Ge<Xe;Ge++)ht(He[Ge],X,ie,ee)}function Pn(R,X,ie,ee){const de=R.opaque,He=R.transmissive,Ge=R.transparent;h.setupLightsView(ie),He.length>0&&si(de,X,ie),ee&&_e.viewport(A.copy(ee)),de.length>0&&Zt(de,X,ie),He.length>0&&Zt(He,X,ie),Ge.length>0&&Zt(Ge,X,ie),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function si(R,X,ie){const ee=me.isWebGL2;k===null&&(k=new Ti(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?Ro:rr,minFilter:ts,samples:ee&&o===!0?4:0})),p.getDrawingBufferSize(ae),ee?k.setSize(ae.x,ae.y):k.setSize(Il(ae.x),Il(ae.y));const de=p.getRenderTarget();p.setRenderTarget(k),p.clear();const He=p.toneMapping;p.toneMapping=ti,Zt(R,X,ie),p.toneMapping=He,Fe.updateMultisampleRenderTarget(k),Fe.updateRenderTargetMipmap(k),p.setRenderTarget(de)}function Zt(R,X,ie){const ee=X.isScene===!0?X.overrideMaterial:null;for(let de=0,He=R.length;de<He;de++){const Ge=R[de],Xe=Ge.object,je=Ge.geometry,it=ee===null?Ge.material:ee,Je=Ge.group;Xe.layers.test(ie.layers)&&G(Xe,X,ie,je,it,Je)}}function G(R,X,ie,ee,de,He){R.onBeforeRender(p,X,ie,ee,de,He),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),de.onBeforeRender(p,X,ie,ee,R,He),de.transparent===!0&&de.side===Wr?(de.side=Cn,de.needsUpdate=!0,p.renderBufferDirect(ie,X,ee,de,R,He),de.side=Po,de.needsUpdate=!0,p.renderBufferDirect(ie,X,ee,de,R,He),de.side=Wr):p.renderBufferDirect(ie,X,ee,de,R,He),R.onAfterRender(p,X,ie,ee,de,He)}function ve(R,X,ie){X.isScene!==!0&&(X=Ee);const ee=Oe.get(R),de=h.state.lights,He=h.state.shadowsArray,Ge=de.state.version,Xe=Ie.getParameters(R,de.state,He,X,ie),je=Ie.getProgramCacheKey(Xe);let it=ee.programs;ee.environment=R.isMeshStandardMaterial?X.environment:null,ee.fog=X.fog,ee.envMap=(R.isMeshStandardMaterial?Ze:Ye).get(R.envMap||ee.environment),it===void 0&&(R.addEventListener("dispose",z),it=new Map,ee.programs=it);let Je=it.get(je);if(Je!==void 0){if(ee.currentProgram===Je&&ee.lightsStateVersion===Ge)return Ue(R,Xe),Je}else Xe.uniforms=Ie.getUniforms(R),R.onBuild(ie,Xe,p),R.onBeforeCompile(Xe,p),Je=Ie.acquireProgram(Xe,je),it.set(je,Je),ee.uniforms=Xe.uniforms;const et=ee.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=b.uniform),Ue(R,Xe),ee.needsLights=_t(R),ee.lightsStateVersion=Ge,ee.needsLights&&(et.ambientLightColor.value=de.state.ambient,et.lightProbe.value=de.state.probe,et.directionalLights.value=de.state.directional,et.directionalLightShadows.value=de.state.directionalShadow,et.spotLights.value=de.state.spot,et.spotLightShadows.value=de.state.spotShadow,et.rectAreaLights.value=de.state.rectArea,et.ltc_1.value=de.state.rectAreaLTC1,et.ltc_2.value=de.state.rectAreaLTC2,et.pointLights.value=de.state.point,et.pointLightShadows.value=de.state.pointShadow,et.hemisphereLights.value=de.state.hemi,et.directionalShadowMap.value=de.state.directionalShadowMap,et.directionalShadowMatrix.value=de.state.directionalShadowMatrix,et.spotShadowMap.value=de.state.spotShadowMap,et.spotShadowMatrix.value=de.state.spotShadowMatrix,et.pointShadowMap.value=de.state.pointShadowMap,et.pointShadowMatrix.value=de.state.pointShadowMatrix);const dt=Je.getUniforms(),Gn=Ma.seqWithValue(dt.seq,et);return ee.currentProgram=Je,ee.uniformsList=Gn,Je}function Ue(R,X){const ie=Oe.get(R);ie.outputEncoding=X.outputEncoding,ie.instancing=X.instancing,ie.skinning=X.skinning,ie.morphTargets=X.morphTargets,ie.morphNormals=X.morphNormals,ie.morphColors=X.morphColors,ie.morphTargetsCount=X.morphTargetsCount,ie.numClippingPlanes=X.numClippingPlanes,ie.numIntersection=X.numClipIntersection,ie.vertexAlphas=X.vertexAlphas,ie.vertexTangents=X.vertexTangents,ie.toneMapping=X.toneMapping}function mt(R,X,ie,ee,de){X.isScene!==!0&&(X=Ee),Fe.resetTextureUnits();const He=X.fog,Ge=ee.isMeshStandardMaterial?X.environment:null,Xe=E===null?p.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:or,je=(ee.isMeshStandardMaterial?Ze:Ye).get(ee.envMap||Ge),it=ee.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Je=!!ee.normalMap&&!!ie.attributes.tangent,et=!!ie.morphAttributes.position,dt=!!ie.morphAttributes.normal,Gn=!!ie.morphAttributes.color,li=ee.toneMapped?p.toneMapping:ti,ci=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,an=ci!==void 0?ci.length:0,ot=Oe.get(ee),di=h.state.lights;if(Y===!0&&(I===!0||R!==M)){const ln=R===M&&ee.id===_;b.setState(ee,R,ln)}let xt=!1;ee.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==di.state.version||ot.outputEncoding!==Xe||de.isInstancedMesh&&ot.instancing===!1||!de.isInstancedMesh&&ot.instancing===!0||de.isSkinnedMesh&&ot.skinning===!1||!de.isSkinnedMesh&&ot.skinning===!0||ot.envMap!==je||ee.fog===!0&&ot.fog!==He||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==b.numPlanes||ot.numIntersection!==b.numIntersection)||ot.vertexAlphas!==it||ot.vertexTangents!==Je||ot.morphTargets!==et||ot.morphNormals!==dt||ot.morphColors!==Gn||ot.toneMapping!==li||me.isWebGL2===!0&&ot.morphTargetsCount!==an)&&(xt=!0):(xt=!0,ot.__version=ee.version);let sn=ot.currentProgram;xt===!0&&(sn=ve(ee,X,de));let Rn=!1,Ii=!1,ro=!1;const Rt=sn.getUniforms(),zi=ot.uniforms;if(_e.useProgram(sn.program)&&(Rn=!0,Ii=!0,ro=!0),ee.id!==_&&(_=ee.id,Ii=!0),Rn||M!==R){if(Rt.setValue(W,"projectionMatrix",R.projectionMatrix),me.logarithmicDepthBuffer&&Rt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),M!==R&&(M=R,Ii=!0,ro=!0),ee.isShaderMaterial||ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshStandardMaterial||ee.envMap){const ln=Rt.map.cameraPosition;ln!==void 0&&ln.setValue(W,pe.setFromMatrixPosition(R.matrixWorld))}(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Rt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial||ee.isShadowMaterial||de.isSkinnedMesh)&&Rt.setValue(W,"viewMatrix",R.matrixWorldInverse)}if(de.isSkinnedMesh){Rt.setOptional(W,de,"bindMatrix"),Rt.setOptional(W,de,"bindMatrixInverse");const ln=de.skeleton;ln&&(me.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),Rt.setValue(W,"boneTexture",ln.boneTexture,Fe),Rt.setValue(W,"boneTextureSize",ln.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const oo=ie.morphAttributes;return(oo.position!==void 0||oo.normal!==void 0||oo.color!==void 0&&me.isWebGL2===!0)&&le.update(de,ie,ee,sn),(Ii||ot.receiveShadow!==de.receiveShadow)&&(ot.receiveShadow=de.receiveShadow,Rt.setValue(W,"receiveShadow",de.receiveShadow)),Ii&&(Rt.setValue(W,"toneMappingExposure",p.toneMappingExposure),ot.needsLights&&gt(zi,ro),He&&ee.fog===!0&&Te.refreshFogUniforms(zi,He),Te.refreshMaterialUniforms(zi,ee,D,P,k),Ma.upload(W,ot.uniformsList,zi,Fe)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ma.upload(W,ot.uniformsList,zi,Fe),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Rt.setValue(W,"center",de.center),Rt.setValue(W,"modelViewMatrix",de.modelViewMatrix),Rt.setValue(W,"normalMatrix",de.normalMatrix),Rt.setValue(W,"modelMatrix",de.matrixWorld),sn}function gt(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function _t(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,X,ie){Oe.get(R.texture).__webglTexture=X,Oe.get(R.depthTexture).__webglTexture=ie;const ee=Oe.get(R);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=ie===void 0,ee.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,X){const ie=Oe.get(R);ie.__webglFramebuffer=X,ie.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,ie=0){E=R,v=X,y=ie;let ee=!0;if(R){const je=Oe.get(R);je.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(36160,null),ee=!1):je.__webglFramebuffer===void 0?Fe.setupRenderTarget(R):je.__hasExternalTextures&&Fe.rebindTextures(R,Oe.get(R.texture).__webglTexture,Oe.get(R.depthTexture).__webglTexture)}let de=null,He=!1,Ge=!1;if(R){const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture)&&(Ge=!0);const it=Oe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(de=it[X],He=!0):me.isWebGL2&&R.samples>0&&Fe.useMultisampledRTT(R)===!1?de=Oe.get(R).__webglMultisampledFramebuffer:de=it,A.copy(R.viewport),w.copy(R.scissor),x=R.scissorTest}else A.copy(L).multiplyScalar(D).floor(),w.copy(N).multiplyScalar(D).floor(),x=O;if(_e.bindFramebuffer(36160,de)&&me.drawBuffers&&ee&&_e.drawBuffers(R,de),_e.viewport(A),_e.scissor(w),_e.setScissorTest(x),He){const je=Oe.get(R.texture);W.framebufferTexture2D(36160,36064,34069+X,je.__webglTexture,ie)}else if(Ge){const je=Oe.get(R.texture),it=X||0;W.framebufferTextureLayer(36160,36064,je.__webglTexture,ie||0,it)}_=-1},this.readRenderTargetPixels=function(R,X,ie,ee,de,He,Ge){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Xe=Xe[Ge]),Xe){_e.bindFramebuffer(36160,Xe);try{const je=R.texture,it=je.format,Je=je.type;if(it!==Mn&&Q.convert(it)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const et=Je===Ro&&(Le.has("EXT_color_buffer_half_float")||me.isWebGL2&&Le.has("EXT_color_buffer_float"));if(Je!==rr&&Q.convert(Je)!==W.getParameter(35738)&&!(Je===Ki&&(me.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ee&&ie>=0&&ie<=R.height-de&&W.readPixels(X,ie,ee,de,Q.convert(it),Q.convert(Je),He)}finally{const je=E!==null?Oe.get(E).__webglFramebuffer:null;_e.bindFramebuffer(36160,je)}}},this.copyFramebufferToTexture=function(R,X,ie=0){const ee=Math.pow(2,-ie),de=Math.floor(X.image.width*ee),He=Math.floor(X.image.height*ee);Fe.setTexture2D(X,0),W.copyTexSubImage2D(3553,ie,0,0,R.x,R.y,de,He),_e.unbindTexture()},this.copyTextureToTexture=function(R,X,ie,ee=0){const de=X.image.width,He=X.image.height,Ge=Q.convert(ie.format),Xe=Q.convert(ie.type);Fe.setTexture2D(ie,0),W.pixelStorei(37440,ie.flipY),W.pixelStorei(37441,ie.premultiplyAlpha),W.pixelStorei(3317,ie.unpackAlignment),X.isDataTexture?W.texSubImage2D(3553,ee,R.x,R.y,de,He,Ge,Xe,X.image.data):X.isCompressedTexture?W.compressedTexSubImage2D(3553,ee,R.x,R.y,X.mipmaps[0].width,X.mipmaps[0].height,Ge,X.mipmaps[0].data):W.texSubImage2D(3553,ee,R.x,R.y,Ge,Xe,X.image),ee===0&&ie.generateMipmaps&&W.generateMipmap(3553),_e.unbindTexture()},this.copyTextureToTexture3D=function(R,X,ie,ee,de=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const He=R.max.x-R.min.x+1,Ge=R.max.y-R.min.y+1,Xe=R.max.z-R.min.z+1,je=Q.convert(ee.format),it=Q.convert(ee.type);let Je;if(ee.isData3DTexture)Fe.setTexture3D(ee,0),Je=32879;else if(ee.isDataArrayTexture)Fe.setTexture2DArray(ee,0),Je=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,ee.flipY),W.pixelStorei(37441,ee.premultiplyAlpha),W.pixelStorei(3317,ee.unpackAlignment);const et=W.getParameter(3314),dt=W.getParameter(32878),Gn=W.getParameter(3316),li=W.getParameter(3315),ci=W.getParameter(32877),an=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;W.pixelStorei(3314,an.width),W.pixelStorei(32878,an.height),W.pixelStorei(3316,R.min.x),W.pixelStorei(3315,R.min.y),W.pixelStorei(32877,R.min.z),ie.isDataTexture||ie.isData3DTexture?W.texSubImage3D(Je,de,X.x,X.y,X.z,He,Ge,Xe,je,it,an.data):ie.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Je,de,X.x,X.y,X.z,He,Ge,Xe,je,an.data)):W.texSubImage3D(Je,de,X.x,X.y,X.z,He,Ge,Xe,je,it,an),W.pixelStorei(3314,et),W.pixelStorei(32878,dt),W.pixelStorei(3316,Gn),W.pixelStorei(3315,li),W.pixelStorei(32877,ci),de===0&&ee.generateMipmaps&&W.generateMipmap(Je),_e.unbindTexture()},this.initTexture=function(R){Fe.setTexture2D(R,0),_e.unbindTexture()},this.resetState=function(){v=0,y=0,E=null,_e.reset(),Me.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class bE extends ep{}bE.prototype.isWebGL1Renderer=!0;class _E extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class yE extends Ft{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class No extends Ft{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xu=new j,Yu=new j,Ku=new At,tl=new Nf,ba=new ns;class Fl extends Nt{constructor(e=new xn,t=new No){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)Xu.fromBufferAttribute(t,r-1),Yu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Xu.distanceTo(Yu);e.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(r),ba.radius+=o,e.ray.intersectsSphere(ba)===!1)return;Ku.copy(r).invert(),tl.copy(e.ray).applyMatrix4(Ku);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new j,d=new j,u=new j,h=new j,g=this.isLineSegments?2:1,m=i.index,f=i.attributes.position;if(m!==null){const v=Math.max(0,s.start),y=Math.min(m.count,s.start+s.count);for(let E=v,_=y-1;E<_;E+=g){const M=m.getX(E),A=m.getX(E+1);if(c.fromBufferAttribute(f,M),d.fromBufferAttribute(f,A),tl.distanceSqToSegment(c,d,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(h);x<e.near||x>e.far||t.push({distance:x,point:u.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,s.start),y=Math.min(f.count,s.start+s.count);for(let E=v,_=y-1;E<_;E+=g){if(c.fromBufferAttribute(f,E),d.fromBufferAttribute(f,E+1),tl.distanceSqToSegment(c,d,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}const Zu=new j,Ju=new j;class wE extends Fl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)Zu.fromBufferAttribute(t,r),Ju.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Zu.distanceTo(Ju);e.setAttribute("lineDistance",new Ot(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class SE extends Ft{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}new j;class io extends xn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const o=[],s=[];a(r),c(i),d(),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(o.slice(),3)),this.setAttribute("uv",new Ot(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const E=new j,_=new j,M=new j;for(let A=0;A<t.length;A+=3)g(t[A+0],E),g(t[A+1],_),g(t[A+2],M),l(E,_,M,y)}function l(y,E,_,M){const A=M+1,w=[];for(let x=0;x<=A;x++){w[x]=[];const S=y.clone().lerp(_,x/A),P=E.clone().lerp(_,x/A),D=A-x;for(let $=0;$<=D;$++)$===0&&x===A?w[x][$]=S:w[x][$]=S.clone().lerp(P,$/D)}for(let x=0;x<A;x++)for(let S=0;S<2*(A-x)-1;S++){const P=Math.floor(S/2);S%2===0?(h(w[x][P+1]),h(w[x+1][P]),h(w[x][P])):(h(w[x][P+1]),h(w[x+1][P+1]),h(w[x+1][P]))}}function c(y){const E=new j;for(let _=0;_<o.length;_+=3)E.x=o[_+0],E.y=o[_+1],E.z=o[_+2],E.normalize().multiplyScalar(y),o[_+0]=E.x,o[_+1]=E.y,o[_+2]=E.z}function d(){const y=new j;for(let E=0;E<o.length;E+=3){y.x=o[E+0],y.y=o[E+1],y.z=o[E+2];const _=f(y)/2/Math.PI+.5,M=v(y)/Math.PI+.5;s.push(_,1-M)}m(),u()}function u(){for(let y=0;y<s.length;y+=6){const E=s[y+0],_=s[y+2],M=s[y+4],A=Math.max(E,_,M),w=Math.min(E,_,M);A>.9&&w<.1&&(E<.2&&(s[y+0]+=1),_<.2&&(s[y+2]+=1),M<.2&&(s[y+4]+=1))}}function h(y){o.push(y.x,y.y,y.z)}function g(y,E){const _=y*3;E.x=e[_+0],E.y=e[_+1],E.z=e[_+2]}function m(){const y=new j,E=new j,_=new j,M=new j,A=new tt,w=new tt,x=new tt;for(let S=0,P=0;S<o.length;S+=9,P+=6){y.set(o[S+0],o[S+1],o[S+2]),E.set(o[S+3],o[S+4],o[S+5]),_.set(o[S+6],o[S+7],o[S+8]),A.set(s[P+0],s[P+1]),w.set(s[P+2],s[P+3]),x.set(s[P+4],s[P+5]),M.copy(y).add(E).add(_).divideScalar(3);const D=f(M);p(A,P+0,y,D),p(w,P+2,E,D),p(x,P+4,_,D)}}function p(y,E,_,M){M<0&&y.x===1&&(s[E]=y.x-1),_.x===0&&_.z===0&&(s[E]=M/2/Math.PI+.5)}function f(y){return Math.atan2(y.z,-y.x)}function v(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}static fromJSON(e){return new io(e.vertices,e.indices,e.radius,e.details)}}class bc extends io{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,s,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bc(e.radius,e.detail)}}new j;new j;new j;new zn;class _c extends io{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _c(e.radius,e.detail)}}class yc extends io{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yc(e.radius,e.detail)}}class wc extends io{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wc(e.radius,e.detail)}}class ME extends Ft{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class CE extends ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ur extends Ft{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class TE extends ur{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class EE extends Ft{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ve(16777215),this.specular=new Ve(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class AE extends Ft{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ve(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class PE extends Ft{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class RE extends Ft{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Qa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class LE extends Ft{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ve(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qr,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class DE extends No{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const IE={ShadowMaterial:ME,SpriteMaterial:yE,RawShaderMaterial:CE,ShaderMaterial:ii,PointsMaterial:SE,MeshPhysicalMaterial:TE,MeshStandardMaterial:ur,MeshPhongMaterial:EE,MeshToonMaterial:AE,MeshNormalMaterial:PE,MeshLambertMaterial:RE,MeshDepthMaterial:Jf,MeshDistanceMaterial:Qf,MeshBasicMaterial:mc,MeshMatcapMaterial:LE,LineDashedMaterial:DE,LineBasicMaterial:No,Material:Ft};Ft.fromType=function(n){return new IE[n]};class zE extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Qu=new At,eh=new j,th=new j;class FE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gc,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(eh),th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(th),t.updateMatrixWorld(),Qu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class BE extends FE{constructor(){super(new jf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kE extends zE{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DefaultUp),this.updateMatrix(),this.target=new Nt,this.shadow=new BE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class OE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=nh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function nh(){return(typeof performance=="undefined"?Date:performance).now()}const tp="\\[\\]\\.:\\/",Sc="[^"+tp+"]",NE="[^"+tp.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",Sc);/(WCOD+)?/.source.replace("WCOD",NE);/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sc);/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sc);class $E extends wE{constructor(e=10,t=10,i=4473924,r=8947848){i=new Ve(i),r=new Ve(r);const o=t/2,s=e/t,a=e/2,l=[],c=[];for(let h=0,g=0,m=-a;h<=t;h++,m+=s){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const p=h===o?i:r;p.toArray(c,g),g+=3,p.toArray(c,g),g+=3,p.toArray(c,g),g+=3,p.toArray(c,g),g+=3}const d=new xn;d.setAttribute("position",new Ot(l,3)),d.setAttribute("color",new Ot(c,3));const u=new No({vertexColors:!0,toneMapped:!1});super(d,u),this.type="GridHelper"}}const ih=new j,_a=new j,rh=new j;class UE extends Nt{constructor(e,t,i){super(),this.light=e,this.light.updateMatrixWorld(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,t===void 0&&(t=1);let r=new xn;r.setAttribute("position",new Ot([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const o=new No({fog:!1,toneMapped:!1});this.lightPlane=new Fl(r,o),this.add(this.lightPlane),r=new xn,r.setAttribute("position",new Ot([0,0,0,0,0,1],3)),this.targetLine=new Fl(r,o),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){ih.setFromMatrixPosition(this.light.matrixWorld),_a.setFromMatrixPosition(this.light.target.matrixWorld),rh.subVectors(_a,ih),this.lightPlane.lookAt(_a),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(_a),this.targetLine.scale.z=rh.length()}}const Ln=new Uint32Array(512),Dn=new Uint32Array(512);for(let n=0;n<256;++n){const e=n-127;e<-27?(Ln[n]=0,Ln[n|256]=32768,Dn[n]=24,Dn[n|256]=24):e<-14?(Ln[n]=1024>>-e-14,Ln[n|256]=1024>>-e-14|32768,Dn[n]=-e-1,Dn[n|256]=-e-1):e<=15?(Ln[n]=e+15<<10,Ln[n|256]=e+15<<10|32768,Dn[n]=13,Dn[n|256]=13):e<128?(Ln[n]=31744,Ln[n|256]=64512,Dn[n]=24,Dn[n|256]=24):(Ln[n]=31744,Ln[n|256]=64512,Dn[n]=13,Dn[n|256]=13)}const np=new Uint32Array(2048),$o=new Uint32Array(64),HE=new Uint32Array(64);for(let n=1;n<1024;++n){let e=n<<13,t=0;for(;(e&8388608)===0;)e<<=1,t-=8388608;e&=-8388609,t+=947912704,np[n]=e|t}for(let n=1024;n<2048;++n)np[n]=939524096+(n-1024<<13);for(let n=1;n<31;++n)$o[n]=n<<23;$o[31]=1199570944;$o[32]=2147483648;for(let n=33;n<63;++n)$o[n]=2147483648+(n-32<<23);$o[63]=3347054592;for(let n=1;n<64;++n)n!==32&&(HE[n]=1024);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pc);class VE extends hn{constructor(){super(...arguments);yt(this,"enableAnimation",!1);yt(this,"radiansPerSecond",Math.PI/4);yt(this,"angle",0);yt(this,"radius",20)}tick(t){!this.enableAnimation||(this.position.x=Math.sin(this.angle)*this.radius,this.position.z=Math.cos(this.angle)*this.radius,this.rotation.y+=this.radiansPerSecond*t,this.angle+=t*this.radiansPerSecond)}}class WE extends kE{constructor(){super(...arguments);yt(this,"radius",1)}tick(t){console.log("tick directional light",t)}}class Uo extends Qn{constructor(){super(...arguments);yt(this,"radiansPerSecond",Math.PI/8);yt(this,"enableAnimation",!0)}tick(t){!this.enableAnimation||(this.rotation.z+=this.radiansPerSecond*t,this.rotation.x+=this.radiansPerSecond*t,this.rotation.y+=this.radiansPerSecond*t)}}function GE(n,e={aspect:1,fov:35,near:.1,far:100},t={x:0,y:0,z:10}){const{clientWidth:i,clientHeight:r}=n,{x:o,y:s,z:a}=t,{far:l,fov:c,near:d}=e;let{aspect:u}=e;u=i/r;const h=new VE(c,u,l,d);return h.position.set(o,s,a),h}function jE(n="white",e=8,t={x:0,y:-10,z:10}){const{x:i,y:r,z:o}=t,s=new WE(n,e);return s.position.set(i,r,o),s}function qE(n,e=1){return new UE(n,e)}function XE(n="aqua"){const e=new _E;return e.background=new Ve(n),e}class YE{constructor(e,t,i){yt(this,"camera");yt(this,"clock");yt(this,"scene");yt(this,"renderer");yt(this,"updatables");this.camera=e,this.clock=new OE,this.scene=t,this.renderer=i,this.updatables=[]}start(){this.renderer.setAnimationLoop(()=>{this.tick(),this.renderer.render(this.scene,this.camera)})}stop(){this.renderer.setAnimationLoop(null)}tick(){const e=this.clock.getDelta();this.updatables.forEach(t=>{t.tick(e)})}}function KE(n){const e=new ep({antialias:!0});return e.setSize(n.clientWidth,n.clientHeight),e.setPixelRatio(window.devicePixelRatio),e.physicallyCorrectLights=!0,e}class ZE{constructor(e,t,i){yt(this,"setSize",(e,t,i)=>{const{clientWidth:r,clientHeight:o}=e;t.aspect=r/o,t.updateProjectionMatrix(),i.setSize(r,o),i.setPixelRatio(window.devicePixelRatio)});this.setSize(e,t,i),window.addEventListener("resize",()=>{this.setSize(e,t,i),this.onResize()})}onResize(){}}function JE(n=40,e=2){return new $E(n,e)}class QE{constructor(e){yt(this,"camera");yt(this,"scene");yt(this,"renderer");yt(this,"container");yt(this,"loop");yt(this,"resizer");if(e===null)throw new Error("ProvidedContainerIsNull");this.container=e,this.camera=GE(e,void 0,{x:0,y:0,z:30}),this.scene=XE("turquoise");const t=jE(void 0,8,{x:0,y:5,z:0});this.scene.add(t),this.renderer=KE(e),this.loop=new YE(this.camera,this.scene,this.renderer),this.container.append(this.renderer.domElement),this.resizer=new ZE(e,this.camera,this.renderer),this.loop.updatables.push(this.camera);const i=qE(t,1);this.scene.add(JE(40,40)),this.scene.add(i),this.renderer.render(this.scene,this.camera)}addShapes(e){e.forEach(t=>{this.scene.add(t),this.loop.updatables.push(t)})}deleteShapes(e){return console.log("Trying to clear scene..."),e.forEach(t=>{t.removeFromParent()}),!0}render(){this.renderer.render(this.scene,this.camera)}destroy(){this.renderer.dispose()}start(){this.loop.start()}stop(){this.loop.stop()}}function eA(n=2,e={x:0,y:-.5,z:0}){const{x:t,y:i,z:r}=e,o=new to(n,n,n),s=new ur,a=new Uo(o,s);return a.name="cube",a.rotation.set(-.5,-.1,.8),a.position.set(t,i,r),a}function tA(n={radius:1,detail:0},e={x:0,y:0,z:0}){const{radius:t,detail:i}=n,{x:r,y:o,z:s}=e,a=new bc(t,i),l=new ur({color:new Ve(3089428)}),c=new Uo(a,l);return c.name="dodecahedron",c.position.set(r,o,s),c}function nA(n={radius:1,detail:0},e={x:0,y:0,z:0}){const{radius:t,detail:i}=n,{x:r,y:o,z:s}=e,a=new _c(t,i),l=new ur,c=new Uo(a,l);return c.name="icosahedron",c.position.set(r,o,s),c}function iA(n={radius:1,detail:0},e={x:0,y:0,z:0}){const{radius:t,detail:i}=n,{x:r,y:o,z:s}=e,a=new yc(t,i),l=new ur,c=new Uo(a,l);return c.name="octahedron",c.position.set(r,o,s),c}function rA(n={radius:1,detail:0},e={x:0,y:0,z:0}){const{radius:t,detail:i}=n,{x:r,y:o,z:s}=e,a=new wc(t,i),l=new ur,c=new Uo(a,l);return c.name="tetrahedron",c.position.set(r,o,s),c}function oA(){const n=[];return n.push(eA(void 0,{x:1,y:-1,z:-1.3})),n.push(rA(void 0,{x:-3,y:-2,z:-4})),n.push(nA(void 0,{x:-2.2,y:2,z:0})),n.push(tA(void 0,{x:-3,y:0,z:-2})),n.push(iA(void 0,{x:3,y:2,z:-3})),n}const Mc=Dp("world",()=>{let n;const e=oe(!1),t=oe([]),i=oe([]),r=oe([]);function o(){return r.value}function s(){return n}function a(u){n=u,i.value.push(n.camera),r.value.push(n.scene)}function l(){n==null||n.start(),e.value=!0}function c(){n==null||n.stop(),e.value=!1}function d(){const u=oA();u.forEach(h=>{t.value.push(h)}),n==null||n.addShapes(u)}return{addDefaultShapes:d,camera:i,getScene:o,getWorld:s,isRendering:e,scene:r,setWorld:a,shapes:t,startWorld:l,stopWorld:c}}),aA=Be({name:"PlatonicScene",props:{height:null,width:null},setup(n){const e=n;let t,i;const r=Mc();return Wt(()=>{if(i=document.getElementById("canvas"),!i)throw new Error("ContainerIsNull");t=new QE(i),r.setWorld(t),r.startWorld(),r.addDefaultShapes()}),Gt(()=>{t.destroy()}),(o,s)=>(en(),mn("div",{id:"canvas",style:Ip({width:e.width+"px",height:e.height+"px"})},null,4))}});const ip=n=>(kl("data-v-3ddaf822"),n=n(),Ol(),n),sA=ip(()=>Ei("h3",null,"Shape Controls",-1)),lA=ip(()=>Ei("span",{style:{"margin-left":"16px"}}," Shape Animation ",-1)),cA=nn(" Delete Shape "),dA=Be({name:"ShapeControls",props:{shapes:null},setup(n){const e=n,t=oe(e),i=oe({uuid:""});function r(s){t.value.shapes[s].removeFromParent(),t.value.shapes.splice(s,1),i.value.uuid="Deleted!"}function o(s,a){const l=new Ve(a);s.material.color.setHex(l.getHex())}return(s,a)=>(en(),mn("div",null,[sA,ut(st(Ao),{vertical:""},{default:gn(()=>[ut(st(MS),{value:i.value.uuid,"onUpdate:value":a[0]||(a[0]=l=>i.value.uuid=l),options:t.value.shapes,"label-field":"name","value-field":"uuid",size:"large"},null,8,["value","options"])]),_:1}),(en(!0),mn(ri,null,Bl(t.value.shapes,(l,c)=>(en(),mn("div",{key:l.uuid},[l.uuid===i.value.uuid?(en(),zp(st(Ao),{key:0,class:"options",vertical:""},{default:gn(()=>[Ei("span",null,"Shape Position X: "+zr(l.position.x),1),ut(st(Nr),{value:l.position.x,"onUpdate:value":d=>l.position.x=d,"default-value":e.shapes[c].position.x,step:.1,min:-20,max:20},null,8,["value","onUpdate:value","default-value","step"]),nn(" Position Y: "+zr(l.position.y)+" ",1),ut(st(Nr),{value:l.position.y,"onUpdate:value":d=>l.position.y=d,"default-value":e.shapes[c].position.y,step:.1,min:-20,max:20},null,8,["value","onUpdate:value","default-value","step"]),nn(" Position Z: "+zr(l.position.z)+" ",1),ut(st(Nr),{value:l.position.z,"onUpdate:value":d=>l.position.z=d,"default-value":e.shapes[c].position.z,step:.1,min:-20,max:20},null,8,["value","onUpdate:value","default-value","step"]),Ei("div",null,[ut(st(u1),{value:l.enableAnimation,"onUpdate:value":d=>l.enableAnimation=d},null,8,["value","onUpdate:value"]),lA]),ut(st(Ef),{value:"#"+l.material.color.getHexString().toUpperCase(),modes:["hex"],"show-alpha":!1,"onUpdate:value":d=>{o(l,d)}},null,8,["value","onUpdate:value"]),ut(st(Mi),{class:"button",secondary:"",color:"#D60505",onClick:d=>r(c)},{default:gn(()=>[cA]),_:2},1032,["onClick"])]),_:2},1024)):Fp("",!0)]))),128))]))}});var uA=Ja(dA,[["__scopeId","data-v-3ddaf822"]]);const hA=n=>(kl("data-v-64088806"),n=n(),Ol(),n),fA=hA(()=>Ei("h3",null,"Render Controls",-1)),pA=nn("Start Rendering"),mA=nn("Stop Rendering"),gA=Be({name:"RenderControls",setup(n){const e=Mc();function t(){e.startWorld()}function i(){e.stopWorld()}return(r,o)=>(en(),mn("div",null,[fA,ut(st(Ao),{vertical:"",justify:"center"},{default:gn(()=>[ut(st(Mi),{class:"button",disabled:st(e).isRendering,type:"primary",onClick:o[0]||(o[0]=s=>t())},{default:gn(()=>[pA]),_:1},8,["disabled"]),ut(st(Mi),{class:"button",disabled:!st(e).isRendering,type:"tertiary",onClick:o[1]||(o[1]=s=>i())},{default:gn(()=>[mA]),_:1},8,["disabled"])]),_:1})]))}});var vA=Ja(gA,[["__scopeId","data-v-64088806"]]);const xA=Ei("h3",null,"Scene background",-1),bA=Be({name:"SceneControls",props:{scene:null},setup(n){const t=oe(n);function i(o,s){const a=new Ve(o.toUpperCase());s.background=a}function r(o){if(o.background instanceof Ve)return"#"+o.background.clone().getHexString().toUpperCase()}return(o,s)=>(en(),mn("div",null,[xA,(en(!0),mn(ri,null,Bl(t.value.scene,a=>(en(),mn("div",{key:a.uuid},[ut(st(Ao),{vertical:""},{default:gn(()=>[ut(st(Ef),{value:r(a),"default-value":r(a),modes:["hex"],"show-alpha":!1,"onUpdate:value":l=>{i(l,a)}},null,8,["value","default-value","onUpdate:value"])]),_:2},1024)]))),128))]))}});const _A={class:"flex"},yA=nn("Menu"),wA=Be({name:"PlatonicView",setup(n){const e=oe("bottom"),t=oe(!1),i=oe("340px"),r=oe("320px"),o=Mc(),{width:s,height:a}=M1(),l=S1(x1);return Bp(()=>{l.isGreater("sm")?e.value="left":e.value="bottom"}),(c,d)=>(en(),mn("div",_A,[ut(st(Mi),{color:"#3030af",class:"button",onClick:d[0]||(d[0]=u=>t.value=!t.value)},{default:gn(()=>[yA]),_:1}),ut(aA,{height:st(a),width:st(s)},null,8,["height","width"]),ut(st(VS),{show:t.value,"onUpdate:show":d[1]||(d[1]=u=>t.value=u),style:{"background-color":"rgba(255, 255, 255, 0.5)"},class:"drawer",height:i.value,width:r.value,placement:e.value,"show-mask":!1,"close-on-esc":!0},{default:gn(()=>[ut(st(GS),{title:"Menu",class:"menu-content",closable:!0},{default:gn(()=>[ut(P1,{camera:st(o).camera},null,8,["camera"]),ut(bA,{scene:st(o).scene},null,8,["scene"]),ut(vA),ut(uA,{shapes:st(o).shapes},null,8,["shapes"])]),_:1})]),_:1},8,["show","height","width","placement"])]))}});var TA=Ja(wA,[["__scopeId","data-v-2d2a35e8"]]);export{TA as default};
