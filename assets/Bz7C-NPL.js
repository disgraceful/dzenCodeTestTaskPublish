import{u as N,a as R}from"./B_7ofn56.js";import{n as w,u as j,q as b,o as t,c as o,s as O,v as S,a as e,t as i,x as s,F as y,y as $,z as E,A as x,p as L,e as G,_ as T,r as g,b as f,B as z,C as P,D as M,w as D,T as H,d as Y}from"./BAkWZmdO.js";import{u as J}from"./B3-d5LVW.js";import{_ as B}from"./DQjusnFw.js";const I=p=>(L("data-v-a6bda73f"),p=p(),G(),p),K={class:"flex basis-1/6"},Q=I(()=>e("div",{class:"fab mr-4"},[e("span",{class:"material-symbols-outlined"}," list ")],-1)),U={class:"flex-initial"},W={class:"text-xl"},X=I(()=>e("p",{class:"text-sm text-gray-500"},"Products",-1)),Z={class:"basis-1/6 flex-auto"},ee={class:"text-xs text-gray-500"},se={key:1},te={class:"basis-1/6"},oe={key:0,class:"text-xs text-gray-500"},re={key:1},le={key:1},ne=I(()=>e("span",{class:"material-symbols-outlined text-gray-500"}," delete ",-1)),ae=[ne],ie={class:"flex absolute top-0 right-0 bottom-0 w-1/12 bg-gray-200 items-center justify-center"},de=I(()=>e("span",{class:"material-symbols-outlined"}," arrow_forward_ios ",-1)),ce=[de],ue=w({__name:"OrderRowItem",props:{order:{},minimized:{type:Boolean},selected:{type:Boolean}},setup(p){const{order:r}=p,{getters:_}=j(),l=b(()=>_.getOrderProducts(r.id)),{formatDate:a}=J(),{getProductPrice:c,formatPrice:h}=N(),m=b(()=>c(l.value,!0)),n=b(()=>c(l.value,!1));return(d,k)=>(t(),o("div",{class:x(["flex items-center relative py-2 px-6 border-solid border-2 cursor-pointer",d.minimized?"gap-8":"gap-14"])},[O(e("p",{class:"text-xl basis-5/12 underline underline-offset-4"},i(d.order.title),513),[[S,!d.minimized]]),e("div",K,[Q,e("div",U,[e("p",W,i(s(l).length),1),X])]),e("div",Z,[d.order.date?(t(),o(y,{key:0},[e("p",ee,i(s(a)(d.order.date,"DD / MM")),1),e("p",null,i(s(a)(d.order.date,"DD / MMM / YYYY")),1)],64)):(t(),o("p",se,"-"))]),O(e("div",te,[s(l).length?(t(),o(y,{key:0},[s(n).value!==0?(t(),o("p",oe,i(s(h)(s(n))),1)):$("",!0),s(m).value!==0?(t(),o("p",re,i(s(h)(s(m))),1)):$("",!0)],64)):(t(),o("p",le,"-"))],512),[[S,!d.minimized]]),O(e("div",{onClick:k[0]||(k[0]=E(V=>d.$emit("delete"),["stop"]))},ae,512),[[S,!d.minimized]]),O(e("div",ie,ce,512),[[S,d.selected]])],2))}}),pe=T(ue,[["__scopeId","data-v-a6bda73f"]]),_e={class:"flex items-center py-2 px-6 border-solid border-y-2 grow-1 gap-8"},me=["src"],he={class:"grow"},fe={class:"text-xl"},ve={class:"text-gray-500"},ge={class:"w-1/6"},be=e("div",{class:"w-1/12 text-right"},[e("span",{class:"material-symbols-outlined text-gray-500"}," delete ")],-1),ye=w({__name:"OrderProductsRowItem",props:{product:{}},setup(p){const r=p,{getStatusColor:_,getStatusColorText:l,formatStatus:a}=N(),c=g(_(r.product.status)),h=g(l(r.product.status)),{images:m}=R();return(n,d)=>(t(),o("div",_e,[e("div",{class:x(["w-4 h-4 rounded-full",[s(c)]])},null,2),e("img",{class:"w-24 h-12 object-contain",src:s(m)[n.product.photo]},null,8,me),e("div",he,[e("p",fe,i(n.product.title),1),e("p",ve,i(n.product.serialNumber),1)]),e("div",ge,[e("p",{class:x([s(h)])},i(s(a)(n.product.status)),3)]),be]))}}),$e={class:"relative border-solid border-2 overflow-visible"},xe={class:"px-6"},we={class:"text-2xl"},ke={class:"flex items-center gap-3 mt-5 mb-3 cursor-pointer"},Ce=e("span",{class:"text-green-500"},"Add product",-1),Oe=w({__name:"OrderSelectView",props:{order:{}},emits:["close"],setup(p,{emit:r}){const _=p,l=r,{getters:a}=j(),c=b(()=>a.getOrderProducts(_.order.id));return(h,m)=>(t(),o("div",$e,[e("div",xe,[f(B,{class:"p-3 -right-5 -top-5 bg-white",icon:"close",absolute:"",shadow:"",onClick:m[0]||(m[0]=n=>l("close"))}),e("h3",we,i(h.order.title),1),e("div",ke,[f(B,{class:"p-1 bg-green-500 inline-flex",icon:"add"}),Ce])]),(t(!0),o(y,null,z(s(c),n=>(t(),P(ye,{key:n.id,product:n},null,8,["product"]))),128))]))}}),Se={key:0,class:"modal relative"},De={class:"text-2xl px-6 my-5"},Pe={key:1,class:"modal-overlay"},Be=w({__name:"Modal",props:{title:{},open:{type:Boolean}},emits:["close"],setup(p,{emit:r}){const _=r;return(l,a)=>(t(),o(y,null,[l.open?(t(),o("div",Se,[f(B,{class:"p-2 -right-3 -top-3 bg-white",icon:"close",absolute:"",onClick:a[0]||(a[0]=c=>_("close"))}),e("h2",De,i(l.title),1),M(l.$slots,"body",{},void 0,!0),M(l.$slots,"footer",{},void 0,!0)])):$("",!0),l.open?(t(),o("div",Pe)):$("",!0)],64))}}),Ie=T(Be,[["__scopeId","data-v-430369ef"]]),ze={key:0,class:"material-symbols-outlined pr-4"},Me={class:"uppercase"},A=w({__name:"Button",props:{icon:{default:""},inline:{type:Boolean,default:!1}},setup(p){return(r,_)=>(t(),o("div",{class:x(["flex py-2 px-6 justifty-center items-center rounded-full cursor-pointer button",{"shadow-xl":!r.inline}])},[r.icon?(t(),o("span",ze,i(r.icon),1)):$("",!0),e("span",Me,[M(r.$slots,"default")])],2))}}),Ne={class:"w-full"},je={class:"flex items-center gap-4"},Te={class:"text-3xl font-bold"},Ve={class:"list-container flex gap-5"},Ye={class:"flex items-center py-2 px-6 border-solid border-t-2 grow-1 gap-8"},Ae=["src"],Re={class:"grow"},Fe={class:"text-lg underline"},qe={class:"text-gray-500"},Ee={class:"flex p-8 justify-end bg-green-500 gap-6"},Le=w({__name:"index",setup(p){const{getters:r}=j(),_=b(()=>r.getOrders),{getStatusColor:l}=N(),a=g(!1),c=g(null),h=C=>{c.value=C,a.value=!0},m=()=>{a.value=!1,c.value=null},n=g(!1),d=g(null),k=b(()=>r.getOrderProducts(d.value.id));function V(C){n.value=!0,d.value=C}const{images:F}=R();return(C,v)=>(t(),o("div",Ne,[e("div",je,[f(B,{class:"p-2 bg-green-600 border-4 border-green-900",icon:"add",shadow:""}),e("h1",Te,"Orders / "+i(s(_).length),1)]),e("div",Ve,[e("div",{class:x(["flex flex-col grow gap-2",{"w-2/5":s(a)}])},[(t(!0),o(y,null,z(s(_),u=>(t(),P(pe,{key:u.id,order:u,minimized:s(a),selected:s(c)===u,onClick:q=>h(u),onDelete:q=>V(u)},null,8,["order","minimized","selected","onClick","onDelete"]))),128))],2),s(a)&&s(c)?(t(),P(Oe,{key:0,class:"w-3/5 pt-5",onClose:v[0]||(v[0]=u=>m()),order:s(c)},null,8,["order"])):$("",!0),(t(),P(H,{to:"body"},[f(Ie,{open:s(n),title:"Are you sure you want to delete this order?",onClose:v[2]||(v[2]=u=>n.value=!1)},{body:D(()=>[(t(!0),o(y,null,z(s(k),u=>(t(),o("div",Ye,[e("div",{class:x(["w-4 h-4 rounded-full",[s(l)(u.status)]])},null,2),e("img",{class:"w-24 h-12 object-contain",src:s(F)[u.photo]},null,8,Ae),e("div",Re,[e("p",Fe,i(u.title),1),e("p",qe,i(u.serialNumber),1)])]))),256))]),footer:D(()=>[e("div",Ee,[f(A,{class:"text-white",inline:"",onClick:v[1]||(v[1]=u=>n.value=!1)},{default:D(()=>[Y(" Cancel ")]),_:1}),f(A,{class:"bg-white text-red-600",icon:"delete"},{default:D(()=>[Y(" Delete ")]),_:1})])]),_:1},8,["open"])]))])]))}}),Qe=T(Le,[["__scopeId","data-v-5e7526f3"]]);export{Qe as default};