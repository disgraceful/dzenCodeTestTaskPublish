import{r as V,g as T,R as ee,W as fe,S as Q,X as le,Y as se,Z as he,$ as te,H as oe,T as me,f as ge,B as ve,N as ye}from"./D4Wsq6jV.js";import{u as pe}from"./Dhqm1lbJ.js";const $e=window.setInterval;var we=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Se(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ae={exports:{}};(function(e,t){(function(o,r){e.exports=r()})(we,function(){var o=1e3,r=6e4,u=36e5,c="millisecond",d="second",g="minute",v="hour",p="day",D="week",w="month",N="quarter",m="year",M="date",C="Invalid Date",F=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,q=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,R={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(f){var s=["th","st","nd","rd"],n=f%100;return"["+f+(s[(n-20)%10]||s[n]||s[0])+"]"}},O=function(f,s,n){var a=String(f);return!a||a.length>=s?f:""+Array(s+1-a.length).join(n)+f},j={s:O,z:function(f){var s=-f.utcOffset(),n=Math.abs(s),a=Math.floor(n/60),i=n%60;return(s<=0?"+":"-")+O(a,2,"0")+":"+O(i,2,"0")},m:function f(s,n){if(s.date()<n.date())return-f(n,s);var a=12*(n.year()-s.year())+(n.month()-s.month()),i=s.clone().add(a,w),l=n-i<0,h=s.clone().add(a+(l?-1:1),w);return+(-(a+(n-i)/(l?i-h:h-i))||0)},a:function(f){return f<0?Math.ceil(f)||0:Math.floor(f)},p:function(f){return{M:w,y:m,w:D,d:p,D:M,h:v,m:g,s:d,ms:c,Q:N}[f]||String(f||"").toLowerCase().replace(/s$/,"")},u:function(f){return f===void 0}},z="en",A={};A[z]=R;var X="$isDayjsObject",G=function(f){return f instanceof J||!(!f||!f[X])},B=function f(s,n,a){var i;if(!s)return z;if(typeof s=="string"){var l=s.toLowerCase();A[l]&&(i=l),n&&(A[l]=n,i=l);var h=s.split("-");if(!i&&h.length>1)return f(h[0])}else{var $=s.name;A[$]=s,i=$}return!a&&i&&(z=i),i||!a&&z},b=function(f,s){if(G(f))return f.clone();var n=typeof s=="object"?s:{};return n.date=f,n.args=arguments,new J(n)},y=j;y.l=B,y.i=G,y.w=function(f,s){return b(f,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var J=function(){function f(n){this.$L=B(n.locale,null,!0),this.parse(n),this.$x=this.$x||n.x||{},this[X]=!0}var s=f.prototype;return s.parse=function(n){this.$d=function(a){var i=a.date,l=a.utc;if(i===null)return new Date(NaN);if(y.u(i))return new Date;if(i instanceof Date)return new Date(i);if(typeof i=="string"&&!/Z$/i.test(i)){var h=i.match(F);if(h){var $=h[2]-1||0,S=(h[7]||"0").substring(0,3);return l?new Date(Date.UTC(h[1],$,h[3]||1,h[4]||0,h[5]||0,h[6]||0,S)):new Date(h[1],$,h[3]||1,h[4]||0,h[5]||0,h[6]||0,S)}}return new Date(i)}(n),this.init()},s.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},s.$utils=function(){return y},s.isValid=function(){return this.$d.toString()!==C},s.isSame=function(n,a){var i=b(n);return this.startOf(a)<=i&&i<=this.endOf(a)},s.isAfter=function(n,a){return b(n)<this.startOf(a)},s.isBefore=function(n,a){return this.endOf(a)<b(n)},s.$g=function(n,a,i){return y.u(n)?this[a]:this.set(i,n)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(n,a){var i=this,l=!!y.u(a)||a,h=y.p(n),$=function(L,I){var k=y.w(i.$u?Date.UTC(i.$y,I,L):new Date(i.$y,I,L),i);return l?k:k.endOf(p)},S=function(L,I){return y.w(i.toDate()[L].apply(i.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(I)),i)},_=this.$W,x=this.$M,W=this.$D,P="set"+(this.$u?"UTC":"");switch(h){case m:return l?$(1,0):$(31,11);case w:return l?$(1,x):$(0,x+1);case D:var Y=this.$locale().weekStart||0,E=(_<Y?_+7:_)-Y;return $(l?W-E:W+(6-E),x);case p:case M:return S(P+"Hours",0);case v:return S(P+"Minutes",1);case g:return S(P+"Seconds",2);case d:return S(P+"Milliseconds",3);default:return this.clone()}},s.endOf=function(n){return this.startOf(n,!1)},s.$set=function(n,a){var i,l=y.p(n),h="set"+(this.$u?"UTC":""),$=(i={},i[p]=h+"Date",i[M]=h+"Date",i[w]=h+"Month",i[m]=h+"FullYear",i[v]=h+"Hours",i[g]=h+"Minutes",i[d]=h+"Seconds",i[c]=h+"Milliseconds",i)[l],S=l===p?this.$D+(a-this.$W):a;if(l===w||l===m){var _=this.clone().set(M,1);_.$d[$](S),_.init(),this.$d=_.set(M,Math.min(this.$D,_.daysInMonth())).$d}else $&&this.$d[$](S);return this.init(),this},s.set=function(n,a){return this.clone().$set(n,a)},s.get=function(n){return this[y.p(n)]()},s.add=function(n,a){var i,l=this;n=Number(n);var h=y.p(a),$=function(x){var W=b(l);return y.w(W.date(W.date()+Math.round(x*n)),l)};if(h===w)return this.set(w,this.$M+n);if(h===m)return this.set(m,this.$y+n);if(h===p)return $(1);if(h===D)return $(7);var S=(i={},i[g]=r,i[v]=u,i[d]=o,i)[h]||1,_=this.$d.getTime()+n*S;return y.w(_,this)},s.subtract=function(n,a){return this.add(-1*n,a)},s.format=function(n){var a=this,i=this.$locale();if(!this.isValid())return i.invalidDate||C;var l=n||"YYYY-MM-DDTHH:mm:ssZ",h=y.z(this),$=this.$H,S=this.$m,_=this.$M,x=i.weekdays,W=i.months,P=i.meridiem,Y=function(I,k,U,Z){return I&&(I[k]||I(a,l))||U[k].slice(0,Z)},E=function(I){return y.s($%12||12,I,"0")},L=P||function(I,k,U){var Z=I<12?"AM":"PM";return U?Z.toLowerCase():Z};return l.replace(q,function(I,k){return k||function(U){switch(U){case"YY":return String(a.$y).slice(-2);case"YYYY":return y.s(a.$y,4,"0");case"M":return _+1;case"MM":return y.s(_+1,2,"0");case"MMM":return Y(i.monthsShort,_,W,3);case"MMMM":return Y(W,_);case"D":return a.$D;case"DD":return y.s(a.$D,2,"0");case"d":return String(a.$W);case"dd":return Y(i.weekdaysMin,a.$W,x,2);case"ddd":return Y(i.weekdaysShort,a.$W,x,3);case"dddd":return x[a.$W];case"H":return String($);case"HH":return y.s($,2,"0");case"h":return E(1);case"hh":return E(2);case"a":return L($,S,!0);case"A":return L($,S,!1);case"m":return String(S);case"mm":return y.s(S,2,"0");case"s":return String(a.$s);case"ss":return y.s(a.$s,2,"0");case"SSS":return y.s(a.$ms,3,"0");case"Z":return h}return null}(I)||h.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(n,a,i){var l,h=this,$=y.p(a),S=b(n),_=(S.utcOffset()-this.utcOffset())*r,x=this-S,W=function(){return y.m(h,S)};switch($){case m:l=W()/12;break;case w:l=W();break;case N:l=W()/3;break;case D:l=(x-_)/6048e5;break;case p:l=(x-_)/864e5;break;case v:l=x/u;break;case g:l=x/r;break;case d:l=x/o;break;default:l=x}return i?l:y.a(l)},s.daysInMonth=function(){return this.endOf(w).$D},s.$locale=function(){return A[this.$L]},s.locale=function(n,a){if(!n)return this.$L;var i=this.clone(),l=B(n,a,!0);return l&&(i.$L=l),i},s.clone=function(){return y.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},f}(),K=J.prototype;return b.prototype=K,[["$ms",c],["$s",d],["$m",g],["$H",v],["$W",p],["$M",w],["$y",m],["$D",M]].forEach(function(f){K[f[1]]=function(s){return this.$g(s,f[0],f[1])}}),b.extend=function(f,s){return f.$i||(f(s,J,b),f.$i=!0),b},b.locale=B,b.isDayjs=G,b.unix=function(f){return b(1e3*f)},b.en=A[z],b.Ls=A,b.p={},b})})(ae);var Me=ae.exports;const be=Se(Me);function Ze(){const e=V(),t=V(new Date),o=T(()=>c(t.value,"dddd")),r=T(()=>c(t.value,"D MMM, YYYY")),u=T(()=>c(t.value,"HH: mm"));function c(p,D){return be(p).format(D)}function d(){t.value=new Date}function g(){e.value=$e(d,1e3)}function v(){clearInterval(e.value)}return{startTimer:g,clearTimer:v,currentDayName:o,currentDate:r,currentTime:u,formatDate:c}}async function _e(e,t){return await De(t).catch(r=>(console.error("Failed to get image meta for "+t,r+""),{width:0,height:0,ratio:0}))}async function De(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,o)=>{const r=new Image;r.onload=()=>{const u={width:r.width,height:r.height,ratio:r.width/r.height};t(u)},r.onerror=u=>o(u),r.src=e})}function re(e){return t=>t?e[t]||t:e.missingValue}function Oe({formatter:e,keyMap:t,joinWith:o="/",valueMap:r}={}){e||(e=(c,d)=>`${c}=${d}`),t&&typeof t!="function"&&(t=re(t));const u=r||{};return Object.keys(u).forEach(c=>{typeof u[c]!="function"&&(u[c]=re(u[c]))}),(c={})=>Object.entries(c).filter(([g,v])=>typeof v<"u").map(([g,v])=>{const p=u[g];return typeof p=="function"&&(v=p(c[g])),g=typeof t=="function"?t(g):g,e(g,v)}).join(o)}function H(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function xe(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const o of e.split(" ")){const r=Number.parseInt(o.replace("x",""));r&&t.add(r)}return Array.from(t)}function Ie(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function ze(e){const t={};if(typeof e=="string")for(const o of e.split(/[\s,]+/).filter(r=>r)){const r=o.split(":");r.length!==2?t["1px"]=r[0].trim():t[r[0].trim()]=r[1].trim()}else Object.assign(t,e);return t}function We(e){const t={options:e},o=(u,c={})=>ue(t,u,c),r=(u,c={},d={})=>o(u,{...d,modifiers:se(c,d.modifiers||{})}).url;for(const u in e.presets)r[u]=(c,d,g)=>r(c,d,{...e.presets[u],...g});return r.options=e,r.getImage=o,r.getMeta=(u,c)=>je(t,u,c),r.getSizes=(u,c)=>Ne(t,u,c),t.$img=r,r}async function je(e,t,o){const r=ue(e,t,{...o});return typeof r.getMeta=="function"?await r.getMeta():await _e(e,r.url)}function ue(e,t,o){var p,D;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:r,defaults:u}=Te(e,o.provider||e.options.provider),c=He(e,o.preset);if(t=ee(t)?t:fe(t),!r.supportsAlias)for(const w in e.options.alias)t.startsWith(w)&&(t=Q(e.options.alias[w],t.substr(w.length)));if(r.validateDomains&&ee(t)){const w=le(t).host;if(!e.options.domains.find(N=>N===w))return{url:t}}const d=se(o,c,u);d.modifiers={...d.modifiers};const g=d.modifiers.format;(p=d.modifiers)!=null&&p.width&&(d.modifiers.width=H(d.modifiers.width)),(D=d.modifiers)!=null&&D.height&&(d.modifiers.height=H(d.modifiers.height));const v=r.getImage(t,d,e);return v.format=v.format||g||"",v}function Te(e,t){const o=e.options.providers[t];if(!o)throw new Error("Unknown provider: "+t);return o}function He(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function Ne(e,t,o){var M,C,F,q,R;const r=H((M=o.modifiers)==null?void 0:M.width),u=H((C=o.modifiers)==null?void 0:C.height),c=ze(o.sizes),d=(F=o.densities)!=null&&F.trim()?xe(o.densities.trim()):e.options.densities;Ie(d);const g=r&&u?u/r:0,v=[],p=[];if(Object.keys(c).length>=1){for(const O in c){const j=ne(O,String(c[O]),u,g,e);if(j!==void 0){v.push({size:j.size,screenMaxWidth:j.screenMaxWidth,media:`(max-width: ${j.screenMaxWidth}px)`});for(const z of d)p.push({width:j._cWidth*z,src:ie(e,t,o,j,z)})}}ke(v)}else for(const O of d){const j=Object.keys(c)[0];let z=ne(j,String(c[j]),u,g,e);z===void 0&&(z={size:"",screenMaxWidth:0,_cWidth:(q=o.modifiers)==null?void 0:q.width,_cHeight:(R=o.modifiers)==null?void 0:R.height}),p.push({width:O,src:ie(e,t,o,z,O)})}Ae(p);const D=p[p.length-1],w=v.length?v.map(O=>`${O.media?O.media+" ":""}${O.size}`).join(", "):void 0,N=w?"w":"x",m=p.map(O=>`${O.src} ${O.width}${N}`).join(", ");return{sizes:w,srcset:m,src:D==null?void 0:D.src}}function ne(e,t,o,r,u){const c=u.options.screens&&u.options.screens[e]||Number.parseInt(e),d=t.endsWith("vw");if(!d&&/^\d+$/.test(t)&&(t=t+"px"),!d&&!t.endsWith("px"))return;let g=Number.parseInt(t);if(!c||!g)return;d&&(g=Math.round(g/100*c));const v=r?Math.round(g*r):o;return{size:t,screenMaxWidth:c,_cWidth:g,_cHeight:v}}function ie(e,t,o,r,u){return e.$img(t,{...o.modifiers,width:r._cWidth?r._cWidth*u:void 0,height:r._cHeight?r._cHeight*u:void 0},o)}function ke(e){var o;e.sort((r,u)=>r.screenMaxWidth-u.screenMaxWidth);let t=null;for(let r=e.length-1;r>=0;r--){const u=e[r];u.media===t&&e.splice(r,1),t=u.media}for(let r=0;r<e.length;r++)e[r].media=((o=e[r+1])==null?void 0:o.media)||""}function Ae(e){e.sort((o,r)=>o.width-r.width);let t=null;for(let o=e.length-1;o>=0;o--){const r=e[o];r.width===t&&e.splice(o,1),t=r.width}}const Ye=Oe({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>te(e)+"_"+te(t)}),Le=(e,{modifiers:t={},baseURL:o}={},r)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const u=Ye(t)||"_";return o||(o=Q(r.options.nuxt.baseURL,"/_ipx")),{url:Q(o,u,he(e))}},Pe=!0,Ce=!0,Ee=Object.freeze(Object.defineProperty({__proto__:null,getImage:Le,supportsAlias:Ce,validateDomains:Pe},Symbol.toStringTag,{value:"Module"})),ce={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipxStatic",domains:[],alias:{},densities:[1,2],format:["webp"]};ce.providers={ipxStatic:{provider:Ee,defaults:{}}};const de=()=>{const e=me(),t=oe();return t.$img||t._img||(t._img=We({...ce,nuxt:{baseURL:e.app.baseURL}}))};function Ue(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const Fe={src:{type:String,default:void 0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},densities:{type:String,default:void 0},preload:{type:[Boolean,Object],default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],default:void 0}},qe=e=>{const t=T(()=>({provider:e.provider,preset:e.preset})),o=T(()=>({width:H(e.width),height:H(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),r=de(),u=T(()=>({...e.modifiers,width:H(e.width),height:H(e.height),format:e.format,quality:e.quality||r.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:o,modifiers:u}},Re={...Fe,placeholder:{type:[Boolean,String,Number,Array],default:void 0},placeholderClass:{type:String,default:void 0}},Ve=ge({name:"NuxtImg",props:Re,emits:["load","error"],setup:(e,t)=>{const o=de(),r=qe(e),u=V(!1),c=V(),d=T(()=>o.getSizes(e.src,{...r.options.value,sizes:e.sizes,densities:e.densities,modifiers:{...r.modifiers.value,width:H(e.width),height:H(e.height)}})),g=T(()=>{const m={...r.attrs.value,"data-nuxt-img":""};return(!e.placeholder||u.value)&&(m.sizes=d.value.sizes,m.srcset=d.value.srcset),m}),v=T(()=>{let m=e.placeholder;if(m===""&&(m=!0),!m||u.value)return!1;if(typeof m=="string")return m;const M=Array.isArray(m)?m:typeof m=="number"?[m,m]:[10,10];return o(e.src,{...r.modifiers.value,width:M[0],height:M[1],quality:M[2]||50,blur:M[3]||3},r.options.value)}),p=T(()=>e.sizes?d.value.src:o(e.src,r.modifiers.value,r.options.value)),D=T(()=>v.value?v.value:p.value);if(e.preload){const m=Object.values(d.value).every(M=>M);pe({link:[{rel:"preload",as:"image",nonce:e.nonce,...m?{href:d.value.src,imagesizes:d.value.sizes,imagesrcset:d.value.srcset}:{href:D.value},...typeof e.preload!="boolean"&&e.preload.fetchPriority?{fetchpriority:e.preload.fetchPriority}:{}}]})}const N=oe().isHydrating;return ve(()=>{if(v.value){const m=new Image;m.src=p.value,e.sizes&&(m.sizes=d.value.sizes||"",m.srcset=d.value.srcset),m.onload=M=>{u.value=!0,t.emit("load",M)},Ue("nuxt-image");return}c.value&&(c.value.complete&&N&&(c.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),c.value.onload=m=>{t.emit("load",m)},c.value.onerror=m=>{t.emit("error",m)})}),()=>ye("img",{ref:c,...g.value,...t.attrs,class:e.placeholder&&!u.value?[e.placeholderClass]:void 0,src:D.value})}});export{Ve as _,Ze as u};
