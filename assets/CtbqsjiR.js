import{P,n as B,r as R,Q as k,M as T,R as U,S as E,U as S,h as O,V,W as _,X as q,Y as I,Z as D,q as b,$ as w,a0 as F,K as H,a1 as M,a2 as $,a3 as z}from"./BLKzFLAi.js";async function L(t,r=P()){const{path:s,matched:p}=r.resolve(t);if(!p.length||(r._routePreloaded||(r._routePreloaded=new Set),r._routePreloaded.has(s)))return;const e=r._preloadPromises=r._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>L(t,r));r._routePreloaded.add(s);const a=p.map(i=>{var n;return(n=i.components)==null?void 0:n.default}).filter(i=>typeof i=="function");for(const i of a){const n=Promise.resolve(i()).catch(()=>{}).finally(()=>e.splice(e.indexOf(n)));e.push(n)}await Promise.all(e)}const Q=(...t)=>t.find(r=>r!==void 0);function W(t){const r=t.componentName||"NuxtLink";function s(e,a){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return A(e,t.trailingSlash);const i="path"in e&&e.path!==void 0?e.path:a(e).path;return{...e,name:void 0,path:A(i,t.trailingSlash)}}function p(e){const a=P(),i=M(),n=b(()=>!!e.target&&e.target!=="_self"),c=b(()=>{const f=e.to||e.href||"";return typeof f=="string"&&w(f,{acceptRelative:!0})}),y=q("RouterLink"),h=y&&typeof y!="string"?y.useLink:void 0,d=b(()=>{if(e.external)return!0;const f=e.to||e.href||"";return typeof f=="object"?!1:f===""||c.value}),u=b(()=>{const f=e.to||e.href||"";return d.value?f:s(f,a.resolve)}),v=d.value||h==null?void 0:h({...e,to:u}),g=b(()=>{var f;if(!u.value||c.value)return u.value;if(d.value){const o=typeof u.value=="object"&&"path"in u.value?S(u.value):u.value,m=typeof o=="object"?a.resolve(o).href:o;return s(m,a.resolve)}return typeof u.value=="object"?((f=a.resolve(u.value))==null?void 0:f.href)??null:s(F(i.app.baseURL,u.value),a.resolve)});return{to:u,hasTarget:n,isAbsoluteUrl:c,isExternal:d,href:g,isActive:(v==null?void 0:v.isActive)??b(()=>u.value===a.currentRoute.value.path),isExactActive:(v==null?void 0:v.isExactActive)??b(()=>u.value===a.currentRoute.value.path),route:(v==null?void 0:v.route)??b(()=>a.resolve(u.value)),async navigate(){await H(g.value,{replace:e.replace,external:d.value||n.value})}}}return B({name:r,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:p,setup(e,{slots:a}){const i=P(),{to:n,href:c,navigate:y,isExternal:h,hasTarget:d,isAbsoluteUrl:u}=p(e),v=R(!1),g=R(null),f=o=>{var m;g.value=e.custom?(m=o==null?void 0:o.$el)==null?void 0:m.nextElementSibling:o==null?void 0:o.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!X()){const m=k();let x,l=null;T(()=>{const N=K();U(()=>{x=E(()=>{var C;(C=g==null?void 0:g.value)!=null&&C.tagName&&(l=N.observe(g.value,async()=>{l==null||l(),l=null;const j=typeof n.value=="string"?n.value:h.value?S(n.value):i.resolve(n.value).fullPath;await Promise.all([m.hooks.callHook("link:prefetch",j).catch(()=>{}),!h.value&&!d.value&&L(n.value,i).catch(()=>{})]),v.value=!0}))})})}),O(()=>{x&&V(x),l==null||l(),l=null})}return()=>{var x;if(!h.value&&!d.value){const l={ref:f,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(v.value&&(l.class=e.prefetchedClass||t.prefetchedClass),l.rel=e.rel||void 0),_(q("RouterLink"),l,a.default)}const o=e.target||null,m=Q(e.noRel?"":e.rel,t.externalRelAttribute,u.value||d.value?"noopener noreferrer":"")||null;return e.custom?a.default?a.default({href:c.value,navigate:y,get route(){if(!c.value)return;const l=new URL(c.value,window.location.href);return{path:l.pathname,fullPath:l.pathname,get query(){return I(l.search)},hash:l.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:c.value}},rel:m,target:o,isExternal:h.value||d.value,isActive:!1,isExactActive:!1}):null:_("a",{ref:g,href:c.value||null,rel:m,target:o},(x=a.default)==null?void 0:x.call(a))}}})}const Z=W(D);function A(t,r){const s=r==="append"?$:z;return w(t)&&!t.startsWith("http")?t:s(t,!0)}function K(){const t=k();if(t._observer)return t._observer;let r=null;const s=new Map,p=(a,i)=>(r||(r=new IntersectionObserver(n=>{for(const c of n){const y=s.get(c.target);(c.isIntersecting||c.intersectionRatio>0)&&y&&y()}})),s.set(a,i),r.observe(a),()=>{s.delete(a),r.unobserve(a),s.size===0&&(r.disconnect(),r=null)});return t._observer={observe:p}}function X(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{Z as _};
