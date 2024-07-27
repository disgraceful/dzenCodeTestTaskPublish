import{r as P,q as Z}from"./BLKzFLAi.js";const X=window.setInterval;var tt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function et(v){return v&&v.__esModule&&Object.prototype.hasOwnProperty.call(v,"default")?v.default:v}var B={exports:{}};(function(v,j){(function(x,b){v.exports=b()})(tt,function(){var x=1e3,b=6e4,W=36e5,y="millisecond",p="second",D="minute",g="hour",M="day",Y="week",m="month",z="quarter",w="year",k="date",E="Invalid Date",G=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Q=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,K={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(s){var n=["th","st","nd","rd"],t=s%100;return"["+s+(n[(t-20)%10]||n[t]||n[0])+"]"}},U=function(s,n,t){var r=String(s);return!r||r.length>=n?s:""+Array(n+1-r.length).join(t)+s},R={s:U,z:function(s){var n=-s.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+U(r,2,"0")+":"+U(e,2,"0")},m:function s(n,t){if(n.date()<t.date())return-s(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,m),i=t-e<0,a=n.clone().add(r+(i?-1:1),m);return+(-(r+(t-e)/(i?e-a:a-e))||0)},a:function(s){return s<0?Math.ceil(s)||0:Math.floor(s)},p:function(s){return{M:m,y:w,w:Y,d:M,D:k,h:g,m:D,s:p,ms:y,Q:z}[s]||String(s||"").toLowerCase().replace(/s$/,"")},u:function(s){return s===void 0}},C="en",O={};O[C]=K;var V="$isDayjsObject",J=function(s){return s instanceof N||!(!s||!s[V])},A=function s(n,t,r){var e;if(!n)return C;if(typeof n=="string"){var i=n.toLowerCase();O[i]&&(e=i),t&&(O[i]=t,e=i);var a=n.split("-");if(!e&&a.length>1)return s(a[0])}else{var o=n.name;O[o]=n,e=o}return!r&&e&&(C=e),e||!r&&C},f=function(s,n){if(J(s))return s.clone();var t=typeof n=="object"?n:{};return t.date=s,t.args=arguments,new N(t)},u=R;u.l=A,u.i=J,u.w=function(s,n){return f(s,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var N=function(){function s(t){this.$L=A(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[V]=!0}var n=s.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,i=r.utc;if(e===null)return new Date(NaN);if(u.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var a=e.match(G);if(a){var o=a[2]-1||0,c=(a[7]||"0").substring(0,3);return i?new Date(Date.UTC(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,c)):new Date(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,c)}}return new Date(e)}(t),this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return u},n.isValid=function(){return this.$d.toString()!==E},n.isSame=function(t,r){var e=f(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return f(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<f(t)},n.$g=function(t,r,e){return u.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,i=!!u.u(r)||r,a=u.p(t),o=function(T,l){var S=u.w(e.$u?Date.UTC(e.$y,l,T):new Date(e.$y,l,T),e);return i?S:S.endOf(M)},c=function(T,l){return u.w(e.toDate()[T].apply(e.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(l)),e)},d=this.$W,h=this.$M,$=this.$D,H="set"+(this.$u?"UTC":"");switch(a){case w:return i?o(1,0):o(31,11);case m:return i?o(1,h):o(0,h+1);case Y:var _=this.$locale().weekStart||0,I=(d<_?d+7:d)-_;return o(i?$-I:$+(6-I),h);case M:case k:return c(H+"Hours",0);case g:return c(H+"Minutes",1);case D:return c(H+"Seconds",2);case p:return c(H+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,i=u.p(t),a="set"+(this.$u?"UTC":""),o=(e={},e[M]=a+"Date",e[k]=a+"Date",e[m]=a+"Month",e[w]=a+"FullYear",e[g]=a+"Hours",e[D]=a+"Minutes",e[p]=a+"Seconds",e[y]=a+"Milliseconds",e)[i],c=i===M?this.$D+(r-this.$W):r;if(i===m||i===w){var d=this.clone().set(k,1);d.$d[o](c),d.init(),this.$d=d.set(k,Math.min(this.$D,d.daysInMonth())).$d}else o&&this.$d[o](c);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[u.p(t)]()},n.add=function(t,r){var e,i=this;t=Number(t);var a=u.p(r),o=function(h){var $=f(i);return u.w($.date($.date()+Math.round(h*t)),i)};if(a===m)return this.set(m,this.$M+t);if(a===w)return this.set(w,this.$y+t);if(a===M)return o(1);if(a===Y)return o(7);var c=(e={},e[D]=b,e[g]=W,e[p]=x,e)[a]||1,d=this.$d.getTime()+t*c;return u.w(d,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||E;var i=t||"YYYY-MM-DDTHH:mm:ssZ",a=u.z(this),o=this.$H,c=this.$m,d=this.$M,h=e.weekdays,$=e.months,H=e.meridiem,_=function(l,S,L,F){return l&&(l[S]||l(r,i))||L[S].slice(0,F)},I=function(l){return u.s(o%12||12,l,"0")},T=H||function(l,S,L){var F=l<12?"AM":"PM";return L?F.toLowerCase():F};return i.replace(Q,function(l,S){return S||function(L){switch(L){case"YY":return String(r.$y).slice(-2);case"YYYY":return u.s(r.$y,4,"0");case"M":return d+1;case"MM":return u.s(d+1,2,"0");case"MMM":return _(e.monthsShort,d,$,3);case"MMMM":return _($,d);case"D":return r.$D;case"DD":return u.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return _(e.weekdaysMin,r.$W,h,2);case"ddd":return _(e.weekdaysShort,r.$W,h,3);case"dddd":return h[r.$W];case"H":return String(o);case"HH":return u.s(o,2,"0");case"h":return I(1);case"hh":return I(2);case"a":return T(o,c,!0);case"A":return T(o,c,!1);case"m":return String(c);case"mm":return u.s(c,2,"0");case"s":return String(r.$s);case"ss":return u.s(r.$s,2,"0");case"SSS":return u.s(r.$ms,3,"0");case"Z":return a}return null}(l)||a.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var i,a=this,o=u.p(r),c=f(t),d=(c.utcOffset()-this.utcOffset())*b,h=this-c,$=function(){return u.m(a,c)};switch(o){case w:i=$()/12;break;case m:i=$();break;case z:i=$()/3;break;case Y:i=(h-d)/6048e5;break;case M:i=(h-d)/864e5;break;case g:i=h/W;break;case D:i=h/b;break;case p:i=h/x;break;default:i=h}return e?i:u.a(i)},n.daysInMonth=function(){return this.endOf(m).$D},n.$locale=function(){return O[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),i=A(t,r,!0);return i&&(e.$L=i),e},n.clone=function(){return u.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},s}(),q=N.prototype;return f.prototype=q,[["$ms",y],["$s",p],["$m",D],["$H",g],["$W",M],["$M",m],["$y",w],["$D",k]].forEach(function(s){q[s[1]]=function(n){return this.$g(n,s[0],s[1])}}),f.extend=function(s,n){return s.$i||(s(n,N,f),s.$i=!0),f},f.locale=A,f.isDayjs=J,f.unix=function(s){return f(1e3*s)},f.en=O[C],f.Ls=O,f.p={},f})})(B);var nt=B.exports;const rt=et(nt);function it(){const v=P(),j=P(new Date),x=Z(()=>y(j.value,"dddd")),b=Z(()=>y(j.value,"D MMM, YYYY")),W=Z(()=>y(j.value,"HH: mm"));function y(M,Y){return rt(M).format(Y)}function p(){j.value=new Date}function D(){v.value=X(p,1e3)}function g(){clearInterval(v.value)}return{startTimer:D,clearTimer:g,currentDayName:x,currentDate:b,currentTime:W,formatDate:y}}export{it as u};