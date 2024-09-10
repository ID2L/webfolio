var G=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var i=(e,t,s)=>(G(e,t,"read from private field"),s?s.call(e):t.get(e)),b=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},c=(e,t,s,r)=>(G(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s);var E=(e,t,s)=>(G(e,t,"access private method"),s);import{b as it,u as ft}from"./index.f8cb58b3.js";var nt=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},k=typeof window=="undefined"||"Deno"in globalThis;function W(){}function Kt(e,t){return typeof e=="function"?e(t):e}function dt(e){return typeof e=="number"&&e>=0&&e!==1/0}function yt(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Mt(e,t){return typeof e=="function"?e(t):e}function It(e,t){const{type:s="all",exact:r,fetchStatus:n,predicate:h,queryKey:u,stale:f}=e;if(u){if(r){if(t.queryHash!==pt(u,t.options))return!1}else if(!V(t.queryKey,u))return!1}if(s!=="all"){const m=t.isActive();if(s==="active"&&!m||s==="inactive"&&m)return!1}return!(typeof f=="boolean"&&t.isStale()!==f||n&&n!==t.state.fetchStatus||h&&!h(t))}function xt(e,t){const{exact:s,status:r,predicate:n,mutationKey:h}=e;if(h){if(!t.options.mutationKey)return!1;if(s){if($(t.options.mutationKey)!==$(h))return!1}else if(!V(t.options.mutationKey,h))return!1}return!(r&&t.state.status!==r||n&&!n(t))}function pt(e,t){return((t==null?void 0:t.queryKeyHashFn)||$)(e)}function $(e){return JSON.stringify(e,(t,s)=>_(s)?Object.keys(s).sort().reduce((r,n)=>(r[n]=s[n],r),{}):s)}function V(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(s=>!V(e[s],t[s])):!1}function at(e,t){if(e===t)return e;const s=X(e)&&X(t);if(s||_(e)&&_(t)){const r=s?e:Object.keys(e),n=r.length,h=s?t:Object.keys(t),u=h.length,f=s?[]:{};let m=0;for(let F=0;F<u;F++){const y=s?F:h[F];(!s&&r.includes(y)||s)&&e[y]===void 0&&t[y]===void 0?(f[y]=void 0,m++):(f[y]=at(e[y],t[y]),f[y]===e[y]&&e[y]!==void 0&&m++)}return n===u&&m===n?e:f}return t}function kt(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(e[s]!==t[s])return!1;return!0}function X(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function _(e){if(!Z(e))return!1;const t=e.constructor;if(t===void 0)return!0;const s=t.prototype;return!(!Z(s)||!s.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Z(e){return Object.prototype.toString.call(e)==="[object Object]"}function bt(e){return new Promise(t=>{setTimeout(t,e)})}function vt(e,t,s){return typeof s.structuralSharing=="function"?s.structuralSharing(e,t):s.structuralSharing!==!1?at(e,t):t}function Nt(e,t,s=0){const r=[...e,t];return s&&r.length>s?r.slice(1):r}function Qt(e,t,s=0){const r=[t,...e];return s&&r.length>s?r.slice(0,-1):r}var mt=Symbol(),St=(e,t)=>!e.queryFn&&(t==null?void 0:t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===mt?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn,q,U,A,tt,Ft=(tt=class extends nt{constructor(){super();b(this,q,void 0);b(this,U,void 0);b(this,A,void 0);c(this,A,t=>{if(!k&&window.addEventListener){const s=()=>t();return window.addEventListener("visibilitychange",s,!1),()=>{window.removeEventListener("visibilitychange",s)}}})}onSubscribe(){i(this,U)||this.setEventListener(i(this,A))}onUnsubscribe(){var t;this.hasListeners()||((t=i(this,U))==null||t.call(this),c(this,U,void 0))}setEventListener(t){var s;c(this,A,t),(s=i(this,U))==null||s.call(this),c(this,U,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){i(this,q)!==t&&(c(this,q,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(s=>{s(t)})}isFocused(){var t;return typeof i(this,q)=="boolean"?i(this,q):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},q=new WeakMap,U=new WeakMap,A=new WeakMap,tt),Ot=new Ft,T,g,L,et,wt=(et=class extends nt{constructor(){super();b(this,T,!0);b(this,g,void 0);b(this,L,void 0);c(this,L,t=>{if(!k&&window.addEventListener){const s=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",s,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",s),window.removeEventListener("offline",r)}}})}onSubscribe(){i(this,g)||this.setEventListener(i(this,L))}onUnsubscribe(){var t;this.hasListeners()||((t=i(this,g))==null||t.call(this),c(this,g,void 0))}setEventListener(t){var s;c(this,L,t),(s=i(this,g))==null||s.call(this),c(this,g,t(this.setOnline.bind(this)))}setOnline(t){i(this,T)!==t&&(c(this,T,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return i(this,T)}},T=new WeakMap,g=new WeakMap,L=new WeakMap,et),ut=new wt;function jt(e){return Math.min(1e3*2**e,3e4)}function ot(e){return(e!=null?e:"online")==="online"?ut.isOnline():!0}var ct=class{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function H(e){return e instanceof ct}function Et(e){let t=!1,s=0,r=!1,n,h,u;const f=new Promise((l,d)=>{h=l,u=d}),m=l=>{var d;r||(w(new ct(l)),(d=e.abort)==null||d.call(e))},F=()=>{t=!0},y=()=>{t=!1},o=()=>Ot.isFocused()&&(e.networkMode==="always"||ut.isOnline())&&e.canRun(),a=()=>ot(e.networkMode)&&e.canRun(),v=l=>{var d;r||(r=!0,(d=e.onSuccess)==null||d.call(e,l),n==null||n(),h(l))},w=l=>{var d;r||(r=!0,(d=e.onError)==null||d.call(e,l),n==null||n(),u(l))},R=()=>new Promise(l=>{var d;n=j=>{(r||o())&&l(j)},(d=e.onPause)==null||d.call(e)}).then(()=>{var l;n=void 0,r||(l=e.onContinue)==null||l.call(e)}),N=()=>{if(r)return;let l;const d=s===0?e.initialPromise:void 0;try{l=d!=null?d:e.fn()}catch(j){l=Promise.reject(j)}Promise.resolve(l).then(v).catch(j=>{var Y,z,J;if(r)return;const I=(Y=e.retry)!=null?Y:k?0:3,Q=(z=e.retryDelay)!=null?z:jt,ht=typeof Q=="function"?Q(s,j):Q,lt=I===!0||typeof I=="number"&&s<I||typeof I=="function"&&I(s,j);if(t||!lt){w(j);return}s++,(J=e.onFail)==null||J.call(e,s,j),bt(ht).then(()=>o()?void 0:R()).then(()=>{t?w(j):N()})})};return{promise:f,cancel:m,continue:()=>(n==null||n(),f),cancelRetry:F,continueRetry:y,canStart:a,start:()=>(a()?N():R().then(N),f)}}function Ct(){let e=[],t=0,s=a=>{a()},r=a=>{a()},n=a=>setTimeout(a,0);const h=a=>{n=a},u=a=>{let v;t++;try{v=a()}finally{t--,t||F()}return v},f=a=>{t?e.push(a):n(()=>{s(a)})},m=a=>(...v)=>{f(()=>{a(...v)})},F=()=>{const a=e;e=[],a.length&&n(()=>{r(()=>{a.forEach(v=>{s(v)})})})};return{batch:u,batchCalls:m,schedule:f,setNotifyFunction:a=>{s=a},setBatchNotifyFunction:a=>{r=a},setScheduler:h}}var Rt=Ct(),D,st,Ut=(st=class{constructor(){b(this,D,void 0)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),dt(this.gcTime)&&c(this,D,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e!=null?e:k?1/0:5*60*1e3)}clearGcTimeout(){i(this,D)&&(clearTimeout(i(this,D)),c(this,D,void 0))}},D=new WeakMap,st),K,M,S,p,x,P,O,C,rt,Gt=(rt=class extends Ut{constructor(t){super();b(this,O);b(this,K,void 0);b(this,M,void 0);b(this,S,void 0);b(this,p,void 0);b(this,x,void 0);b(this,P,void 0);c(this,P,!1),c(this,x,t.defaultOptions),this.setOptions(t.options),this.observers=[],c(this,S,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,c(this,K,t.state||qt(this.options)),this.state=i(this,K),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=i(this,p))==null?void 0:t.promise}setOptions(t){this.options={...i(this,x),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&i(this,S).remove(this)}setData(t,s){const r=vt(this.state.data,t,this.options);return E(this,O,C).call(this,{data:r,type:"success",dataUpdatedAt:s==null?void 0:s.updatedAt,manual:s==null?void 0:s.manual}),r}setState(t,s){E(this,O,C).call(this,{type:"setState",state:t,setStateOptions:s})}cancel(t){var r,n;const s=(r=i(this,p))==null?void 0:r.promise;return(n=i(this,p))==null||n.cancel(t),s?s.then(W).catch(W):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(i(this,K))}isActive(){return this.observers.some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(t=0){return this.state.isInvalidated||this.state.data===void 0||!yt(this.state.dataUpdatedAt,t)}onFocus(){var s;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(s=i(this,p))==null||s.continue()}onOnline(){var s;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(s=i(this,p))==null||s.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),i(this,S).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(s=>s!==t),this.observers.length||(i(this,p)&&(i(this,P)?i(this,p).cancel({revert:!0}):i(this,p).cancelRetry()),this.scheduleGc()),i(this,S).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||E(this,O,C).call(this,{type:"invalidate"})}fetch(t,s){var m,F,y;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(s==null?void 0:s.cancelRefetch))this.cancel({silent:!0});else if(i(this,p))return i(this,p).continueRetry(),i(this,p).promise}if(t&&this.setOptions(t),!this.options.queryFn){const o=this.observers.find(a=>a.options.queryFn);o&&this.setOptions(o.options)}const r=new AbortController,n=o=>{Object.defineProperty(o,"signal",{enumerable:!0,get:()=>(c(this,P,!0),r.signal)})},h=()=>{const o=St(this.options,s),a={queryKey:this.queryKey,meta:this.meta};return n(a),c(this,P,!1),this.options.persister?this.options.persister(o,a,this):o(a)},u={fetchOptions:s,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:h};n(u),(m=this.options.behavior)==null||m.onFetch(u,this),c(this,M,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((F=u.fetchOptions)==null?void 0:F.meta))&&E(this,O,C).call(this,{type:"fetch",meta:(y=u.fetchOptions)==null?void 0:y.meta});const f=o=>{var a,v,w,R;H(o)&&o.silent||E(this,O,C).call(this,{type:"error",error:o}),H(o)||((v=(a=i(this,S).config).onError)==null||v.call(a,o,this),(R=(w=i(this,S).config).onSettled)==null||R.call(w,this.state.data,o,this)),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return c(this,p,Et({initialPromise:s==null?void 0:s.initialPromise,fn:u.fetchFn,abort:r.abort.bind(r),onSuccess:o=>{var a,v,w,R;if(o===void 0){f(new Error(`${this.queryHash} data is undefined`));return}this.setData(o),(v=(a=i(this,S).config).onSuccess)==null||v.call(a,o,this),(R=(w=i(this,S).config).onSettled)==null||R.call(w,o,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:f,onFail:(o,a)=>{E(this,O,C).call(this,{type:"failed",failureCount:o,error:a})},onPause:()=>{E(this,O,C).call(this,{type:"pause"})},onContinue:()=>{E(this,O,C).call(this,{type:"continue"})},retry:u.options.retry,retryDelay:u.options.retryDelay,networkMode:u.options.networkMode,canRun:()=>!0})),i(this,p).start()}},K=new WeakMap,M=new WeakMap,S=new WeakMap,p=new WeakMap,x=new WeakMap,P=new WeakMap,O=new WeakSet,C=function(t){const s=r=>{var n,h;switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...gt(r.data,this.options),fetchMeta:(n=t.meta)!=null?n:null};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(h=t.dataUpdatedAt)!=null?h:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const u=t.error;return H(u)&&u.revert&&i(this,M)?{...i(this,M),fetchStatus:"idle"}:{...r,error:u,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:u,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=s(this.state),Rt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),i(this,S).notify({query:this,type:"updated",action:t})})},rt);function gt(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:ot(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function qt(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,s=t!==void 0,r=s?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:s?r!=null?r:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:s?"success":"pending",fetchStatus:"idle"}}var Dt="VUE_QUERY_CLIENT";function Ht(e){const t=e?`:${e}`:"";return`${Dt}${t}`}function $t(e,t){Object.keys(e).forEach(s=>{e[s]=t[s]})}function B(e,t){if(t){const s=t(e);if(s===void 0&&it(e)||s!==void 0)return s}if(Array.isArray(e))return e.map(s=>B(s,t));if(typeof e=="object"&&At(e)){const s=Object.entries(e).map(([r,n])=>[r,B(n,t)]);return Object.fromEntries(s)}return e}function Pt(e){return B(e,t=>{if(it(t))return Pt(ft(t))})}function At(e){if(Object.prototype.toString.call(e)!=="[object Object]")return!1;const t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function _t(e,t){return typeof e=="function"?e(...t):!!e}export{Gt as Q,Ut as R,nt as S,xt as a,W as b,Et as c,Qt as d,St as e,Nt as f,Ot as g,pt as h,Kt as i,$ as j,Pt as k,Ht as l,It as m,Rt as n,ut as o,V as p,k as q,Mt as r,mt as s,kt as t,dt as u,yt as v,gt as w,vt as x,$t as y,_t as z};
