import{n as b,r as f,I as D,J as Q,c as i,u as Z,o as d,b as V,a as c,t as m,K as q,y,F,_ as U,A as E,C as K,w as p,x as S,d as h}from"./w0-68fB2.js";import{_}from"./BdptY0TA.js";const C=Symbol.for("nuxt:client-only"),dA=b({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(r,{slots:A,attrs:n}){const t=f(!1);return D(()=>{t.value=!0}),Q(C,!0),s=>{var u;if(t.value)return(u=A.default)==null?void 0:u.call(A);const o=A.fallback||A.placeholder;if(o)return o();const a=s.fallback||s.placeholder||"",l=s.fallbackTag||s.placeholderTag||"span";return i(l,n,a)}}}),x={0:"bg-gray-500",1:"bg-yellow-300"},B={0:"text-gray-500",1:"text-yellow-300"},N={0:"Available",1:"In repairs"},L={0:"New",1:"Used"};function P(){const{dispatch:r}=Z();function A(e,g=!1){return{value:e.reduce((T,W)=>{const k=W.price.find(j=>!!j.isDefault===g);return k?T+k.value:T+0},0),symbol:g?"UAH":"USD",isDefault:g?1:0}}function n(e){return x[e]??x[0]}function t(e){return B[e]??B[0]}function s(e){return N[e]??N[0]}function o(e){return L[e]??L[0]}function a(e){return e.value===0?"":`${e.value} ${e.symbol==="USD"?"$":e.symbol}`}const l=f(!1),u=f(null);function O(e){l.value=!0,u.value=e}function v(){l.value=!1,u.value=null}function z(){u.value&&(r("deleteProduct",u.value.id),v())}return{getProductPrice:A,getStatusColor:n,getStatusColorText:t,formatStatus:s,formatIsNew:o,formatPrice:a,showModal:l,productToDelete:u,showDelete:O,closeModal:v,deleteProduct:z}}const J="data:image/jpeg;base64,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",w=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),H=/(^|[/\\])([^/\\]+?)(?=(\.[^.]+)?$)/;function R(r){var A;return(A=r.match(H))==null?void 0:A[2]}function M(){const r=Object.assign({"/public/product.jpeg":w});function A(){return Object.fromEntries(Object.entries(r).map(([t,s])=>[R(t),s.default]))}return{images:f(A())}}const I={key:0,class:"modal relative"},Y={class:"text-2xl px-6 my-5"},G={key:1,class:"modal-overlay"},$=b({__name:"Modal",props:{title:{},open:{type:Boolean}},emits:["close"],setup(r,{emit:A}){const n=A;return(t,s)=>(d(),i(F,null,[t.open?(d(),i("div",I,[V(_,{class:"p-2 -right-3 -top-3 bg-white",icon:"close",absolute:"",onClick:s[0]||(s[0]=o=>n("close"))}),c("h2",Y,m(t.title),1),q(t.$slots,"body",{},void 0,!0),q(t.$slots,"footer",{},void 0,!0)])):y("",!0),t.open?(d(),i("div",G)):y("",!0)],64))}}),AA=U($,[["__scopeId","data-v-430369ef"]]),eA={key:0,class:"material-symbols-outlined pr-4"},tA={class:"uppercase"},X=b({__name:"Button",props:{icon:{default:""},inline:{type:Boolean,default:!1}},setup(r){return(A,n)=>(d(),i("div",{class:E(["flex py-2 px-6 justifty-center items-center rounded-full cursor-pointer button",{"shadow-xl":!A.inline}])},[A.icon?(d(),i("span",eA,m(A.icon),1)):y("",!0),c("span",tA,[q(A.$slots,"default")])],2))}}),sA={key:0,class:"flex items-center py-2 px-6 border-solid border-t-2 grow-1 gap-8"},oA=["src"],nA={class:"grow"},aA={class:"text-lg underline"},rA={class:"text-gray-500"},lA={class:"flex p-8 justify-end bg-green-500 gap-6"},pA=b({__name:"DeleteProductModal",props:{open:{type:Boolean},product:{}},emits:["close","delete"],setup(r,{emit:A}){const n=A,{getStatusColor:t}=P(),{images:s}=M();return(o,a)=>(d(),K(AA,{open:o.open,title:"Are you sure you want to delete this product?",onClose:a[2]||(a[2]=l=>n("close"))},{body:p(()=>[o.product?(d(),i("div",sA,[c("div",{class:E(["w-4 h-4 rounded-full",[S(t)(o.product.status)]])},null,2),c("img",{class:"w-24 h-12 object-contain",src:S(s)[o.product.photo]},null,8,oA),c("div",nA,[c("p",aA,m(o.product.title),1),c("p",rA,m(o.product.serialNumber),1)])])):y("",!0)]),footer:p(()=>[c("div",lA,[V(X,{class:"text-white",inline:"",onClick:a[0]||(a[0]=l=>n("close"))},{default:p(()=>[h(" Cancel ")]),_:1}),V(X,{class:"bg-white text-red-600",icon:"delete",onClick:a[1]||(a[1]=l=>n("delete"))},{default:p(()=>[h(" Delete ")]),_:1})])]),_:1},8,["open"]))}});export{AA as M,dA as _,M as a,pA as b,X as c,P as u};