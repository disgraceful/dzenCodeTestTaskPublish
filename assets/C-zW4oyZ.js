import{n as x,u as V,q as v,r as m,o as a,c,a as e,A as y,x as s,t as o,E as I,G as T,s as C,H as B,F as Y,B as $,b as w,I as M,C as P,p as N,e as O,_ as U}from"./BAkWZmdO.js";import{u as E}from"./B3-d5LVW.js";import{a as F,u as R}from"./B_7ofn56.js";const j={class:"flex items-center py-2 px-6 border-solid border-2 gap-8 w-max"},q=["src"],z={class:"w-52"},A={class:"text-lg underline"},G={class:"text-gray-500"},H={class:"w-24 text-center"},L={class:"flex gap-3 w-40"},J=e("div",{class:"flex flex-col text-gray-500"},[e("p",null,"from"),e("p",null,"to")],-1),K={class:"flex flex-col text-gray-700"},Q={class:"w-24"},W={class:"w-24"},X={class:"text-sm text-gray-500"},Z={class:"text-xl w-52"},ee={key:0,class:"underline"},se={key:1},te={class:"text-xl w-52 shrink-0"},oe={key:0,class:"underline"},le={key:1},ae={class:"text-xl w-52"},ce={key:0,class:"underline"},de={key:1},ne={class:"w-40"},ie={class:"text-sm text-gray-500"},re=e("div",{class:"ml-6"},[e("span",{class:"material-symbols-outlined text-gray-500"}," delete ")],-1),pe=x({__name:"ProductRowItem",props:{product:{}},setup(d){const n=d,{getters:u}=V(),i=v(()=>u.getOrderById(n.product.order)),{formatDate:l}=E(),{getStatusColor:h,getStatusColorText:_,formatStatus:g,formatIsNew:f,formatPrice:p}=R(),r=m(h(n.product.status)),k=m(_(n.product.status)),{images:D}=F();return(t,Se)=>(a(),c("div",j,[e("div",{class:y(["w-4 h-4 rounded-full",[s(r)]])},null,2),e("img",{class:"w-24 h-12 object-contain",src:s(D)[t.product.photo]},null,8,q),e("div",z,[e("p",A,o(t.product.title),1),e("p",G,o(t.product.serialNumber),1)]),e("div",H,[e("p",{class:y([s(k)])},o(s(g)(t.product.status)),3)]),e("div",L,[J,e("div",K,[e("p",null,o(s(l)(t.product.guarantee.start,"DD / MMM / YYYY")),1),e("p",null,o(s(l)(t.product.guarantee.end,"DD / MMM / YYYY")),1)])]),e("div",Q,[e("p",null,o(s(f)(t.product.isNew)),1)]),e("div",W,[e("p",X,o(s(p)(t.product.price[0])),1),e("p",null,o(s(p)(t.product.price[1])),1)]),e("div",Z,[t.product.group?(a(),c("p",ee,o(t.product.group),1)):(a(),c("p",se,"-"))]),e("div",te,[t.product.user?(a(),c("p",oe,o(t.product.user),1)):(a(),c("p",le,"-"))]),e("div",ae,[s(i).title?(a(),c("p",ce,o(s(i).title),1)):(a(),c("p",de,"-"))]),e("div",ne,[e("p",ie,o(s(l)(t.product.date,"DD / MM")),1),e("p",null,o(s(l)(t.product.date,"DD / MMM / YYYY")),1)]),re]))}}),ue=["value"],S=x({__name:"Select",props:I({options:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(d){const n=T(d,"modelValue");return(u,i)=>C((a(),c("select",{"onUpdate:modelValue":i[0]||(i[0]=l=>n.value=l),class:"py-1 px-3 rounded-md"},[(a(!0),c(Y,null,$(u.options,l=>(a(),c("option",{value:l},o(l),9,ue))),256))],512)),[[B,n.value]])}}),b=d=>(N("data-v-a7c3671e"),d=d(),O(),d),_e={class:"w-full"},me={class:"flex gap-10 items-center"},fe={class:"text-3xl font-bold"},he={class:"flex gap-4 items-center"},ge=b(()=>e("label",{for:"productType",class:"text-gray-500"},"Type: ",-1)),ve={class:"flex gap-4 items-center"},xe=b(()=>e("label",{for:"specificationType",class:"text-gray-500"},"Specification: ",-1)),ye={class:"prodcut-container w-full flex gap-5"},we={class:"prodcut-wrapper w-full flex flex-col grow gap-2"},Me=x({__name:"index",setup(d){const{getters:n}=V(),u=v(()=>n.getProducts),i=m(["Monitors","Motherboards"]),l=m(i.value[0]),h=m(["Specification 1","Specification 2","Specification 3"]),_=m(h.value[0]),g=v(()=>u.value.filter(f=>f.type===l.value&&f.specification===_.value));return(f,p)=>(a(),c("div",_e,[e("div",me,[e("h1",fe,"Products / "+o(s(u).length),1),e("div",he,[ge,w(S,{id:"productType",class:"w-56",modelValue:s(l),"onUpdate:modelValue":p[0]||(p[0]=r=>M(l)?l.value=r:null),options:s(i)},null,8,["modelValue","options"])]),e("div",ve,[xe,w(S,{id:"specificationType",class:"w-56",modelValue:s(_),"onUpdate:modelValue":p[1]||(p[1]=r=>M(_)?_.value=r:null),options:s(h)},null,8,["modelValue","options"])])]),e("div",ye,[e("div",we,[(a(!0),c(Y,null,$(s(g),r=>(a(),P(pe,{key:r.id,product:r},null,8,["product"]))),128))])])]))}}),be=U(Me,[["__scopeId","data-v-a7c3671e"]]);export{be as default};