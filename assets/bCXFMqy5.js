import{_ as $}from"./DsEhXTHK.js";import{L as w,n as x,o as r,c as i,a as e,b as o,w as n,d as c,p as f,e as m,_ as p,r as N,M as I,N as T,s as S,O as M,x as l,I as D,t as d,D as V}from"./BAkWZmdO.js";import{_ as U}from"./DQjusnFw.js";import{u as k}from"./B3-d5LVW.js";const B=w("/profile.jpg"),C=s=>(f("data-v-2bddd641"),s=s(),m(),s),L={class:"sidebar flex flex-col text-center items-center shadow-2xl"},O={class:"relative"},R=C(()=>e("img",{class:"sidebar__image my-12 rounded-full object-cover",src:B},null,-1)),j={class:"flex flex-col my-6"},E=x({__name:"NavigationMenu",setup(s){return(a,_)=>{const t=$;return r(),i("div",L,[e("div",O,[R,o(U,{class:"right-0 bottom-10 bg-white p-4",icon:"settings",iconClass:"text-gray-600",absolute:"",shadow:""})]),e("div",j,[o(t,{class:"py-4 text-2xl",to:"/orders"},{default:n(()=>[c(" Orders ")]),_:1}),o(t,{class:"py-4 text-2xl"},{default:n(()=>[c(" Groups ")]),_:1}),o(t,{class:"py-4 text-2xl",to:"/products"},{default:n(()=>[c(" Products ")]),_:1}),o(t,{class:"py-4 text-2xl"},{default:n(()=>[c(" Users ")]),_:1}),o(t,{class:"py-4 text-2xl"},{default:n(()=>[c(" Settings ")]),_:1})])])}}}),A=p(E,[["__scopeId","data-v-2bddd641"]]),h=s=>(f("data-v-6737e3ef"),s=s(),m(),s),G={class:"flex navbar items-center shadow-lg"},P=h(()=>e("div",{class:"logo flex flex-inital"},[e("span",{class:"text-xl font-bold text-green-700"},"INVENTORY")],-1)),Y={class:"navbar__searchbar flex-auto"},q={class:"date flex-initial"},z={class:"text-lg"},F={class:"items-center flex text-sm"},H={class:"mr-3"},J=h(()=>e("span",{class:"material-symbols-outlined mr-3 text-green-400"}," schedule ",-1)),K=x({__name:"TopMenu",setup(s){const a=N("Search"),{currentDayName:_,currentDate:t,currentTime:v,startTimer:g,clearTimer:b}=k();return I(()=>g()),T(()=>b()),(se,u)=>(r(),i("div",G,[P,e("div",Y,[S(e("input",{id:"search","onUpdate:modelValue":u[0]||(u[0]=y=>D(a)?a.value=y:null),class:"input shadow-inner bg-gray-100 rounded-md px-3 py-1 w-1/3",type:"text"},null,512),[[M,l(a)]])]),e("div",q,[e("p",z,d(l(_)),1),e("p",F,[e("span",H,d(l(t)),1),J,e("span",null,d(l(v)),1)])])]))}}),Q=p(K,[["__scopeId","data-v-6737e3ef"]]),W={class:"flex flex-col h-full"},X={class:"h-full flex"},Z={class:"main-container h-full flex flex-auto"},ee={__name:"default",setup(s){return(a,_)=>{const t=A;return r(),i("div",W,[o(Q),e("div",X,[o(t),e("div",Z,[V(a.$slots,"default",{},void 0,!0)])])])}}},ce=p(ee,[["__scopeId","data-v-d1b4603d"]]);export{ce as default};