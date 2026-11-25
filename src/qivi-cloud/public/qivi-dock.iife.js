(function(){"use strict";function c_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Wc={exports:{}},Ps={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function u_(){if(Bd)return Ps;Bd=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:u}}return Ps.Fragment=t,Ps.jsx=i,Ps.jsxs=i,Ps}var Fd;function f_(){return Fd||(Fd=1,Wc.exports=u_()),Wc.exports}var Ce=f_(),qc={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id;function h_(){if(Id)return pe;Id=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,D={};function M(L,K,_t){this.props=L,this.context=K,this.refs=D,this.updater=_t||y}M.prototype.isReactComponent={},M.prototype.setState=function(L,K){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,K,"setState")},M.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=M.prototype;function G(L,K,_t){this.props=L,this.context=K,this.refs=D,this.updater=_t||y}var O=G.prototype=new _;O.constructor=G,E(O,M.prototype),O.isPureReactComponent=!0;var U=Array.isArray,b={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function F(L,K,_t,yt,Dt,Nt){return _t=Nt.ref,{$$typeof:s,type:L,key:K,ref:_t!==void 0?_t:null,props:Nt}}function X(L,K){return F(L.type,K,void 0,void 0,void 0,L.props)}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function w(L){var K={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(_t){return K[_t]})}var I=/\/+/g;function Z(L,K){return typeof L=="object"&&L!==null&&L.key!=null?w(""+L.key):K.toString(36)}function et(){}function ft(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(et,et):(L.status="pending",L.then(function(K){L.status==="pending"&&(L.status="fulfilled",L.value=K)},function(K){L.status==="pending"&&(L.status="rejected",L.reason=K)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ct(L,K,_t,yt,Dt){var Nt=typeof L;(Nt==="undefined"||Nt==="boolean")&&(L=null);var J=!1;if(L===null)J=!0;else switch(Nt){case"bigint":case"string":case"number":J=!0;break;case"object":switch(L.$$typeof){case s:case t:J=!0;break;case g:return J=L._init,ct(J(L._payload),K,_t,yt,Dt)}}if(J)return Dt=Dt(L),J=yt===""?"."+Z(L,0):yt,U(Dt)?(_t="",J!=null&&(_t=J.replace(I,"$&/")+"/"),ct(Dt,K,_t,"",function(Zt){return Zt})):Dt!=null&&(C(Dt)&&(Dt=X(Dt,_t+(Dt.key==null||L&&L.key===Dt.key?"":(""+Dt.key).replace(I,"$&/")+"/")+J)),K.push(Dt)),1;J=0;var mt=yt===""?".":yt+":";if(U(L))for(var At=0;At<L.length;At++)yt=L[At],Nt=mt+Z(yt,At),J+=ct(yt,K,_t,Nt,Dt);else if(At=v(L),typeof At=="function")for(L=At.call(L),At=0;!(yt=L.next()).done;)yt=yt.value,Nt=mt+Z(yt,At++),J+=ct(yt,K,_t,Nt,Dt);else if(Nt==="object"){if(typeof L.then=="function")return ct(ft(L),K,_t,yt,Dt);throw K=String(L),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return J}function P(L,K,_t){if(L==null)return L;var yt=[],Dt=0;return ct(L,yt,"","",function(Nt){return K.call(_t,Nt,Dt++)}),yt}function Q(L){if(L._status===-1){var K=L._result;K=K(),K.then(function(_t){(L._status===0||L._status===-1)&&(L._status=1,L._result=_t)},function(_t){(L._status===0||L._status===-1)&&(L._status=2,L._result=_t)}),L._status===-1&&(L._status=0,L._result=K)}if(L._status===1)return L._result.default;throw L._result}var W=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function xt(){}return pe.Children={map:P,forEach:function(L,K,_t){P(L,function(){K.apply(this,arguments)},_t)},count:function(L){var K=0;return P(L,function(){K++}),K},toArray:function(L){return P(L,function(K){return K})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},pe.Component=M,pe.Fragment=i,pe.Profiler=l,pe.PureComponent=G,pe.StrictMode=r,pe.Suspense=m,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,pe.__COMPILER_RUNTIME={__proto__:null,c:function(L){return b.H.useMemoCache(L)}},pe.cache=function(L){return function(){return L.apply(null,arguments)}},pe.cloneElement=function(L,K,_t){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var yt=E({},L.props),Dt=L.key,Nt=void 0;if(K!=null)for(J in K.ref!==void 0&&(Nt=void 0),K.key!==void 0&&(Dt=""+K.key),K)!z.call(K,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&K.ref===void 0||(yt[J]=K[J]);var J=arguments.length-2;if(J===1)yt.children=_t;else if(1<J){for(var mt=Array(J),At=0;At<J;At++)mt[At]=arguments[At+2];yt.children=mt}return F(L.type,Dt,void 0,void 0,Nt,yt)},pe.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},pe.createElement=function(L,K,_t){var yt,Dt={},Nt=null;if(K!=null)for(yt in K.key!==void 0&&(Nt=""+K.key),K)z.call(K,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Dt[yt]=K[yt]);var J=arguments.length-2;if(J===1)Dt.children=_t;else if(1<J){for(var mt=Array(J),At=0;At<J;At++)mt[At]=arguments[At+2];Dt.children=mt}if(L&&L.defaultProps)for(yt in J=L.defaultProps,J)Dt[yt]===void 0&&(Dt[yt]=J[yt]);return F(L,Nt,void 0,void 0,null,Dt)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(L){return{$$typeof:d,render:L}},pe.isValidElement=C,pe.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:Q}},pe.memo=function(L,K){return{$$typeof:p,type:L,compare:K===void 0?null:K}},pe.startTransition=function(L){var K=b.T,_t={};b.T=_t;try{var yt=L(),Dt=b.S;Dt!==null&&Dt(_t,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(xt,W)}catch(Nt){W(Nt)}finally{b.T=K}},pe.unstable_useCacheRefresh=function(){return b.H.useCacheRefresh()},pe.use=function(L){return b.H.use(L)},pe.useActionState=function(L,K,_t){return b.H.useActionState(L,K,_t)},pe.useCallback=function(L,K){return b.H.useCallback(L,K)},pe.useContext=function(L){return b.H.useContext(L)},pe.useDebugValue=function(){},pe.useDeferredValue=function(L,K){return b.H.useDeferredValue(L,K)},pe.useEffect=function(L,K,_t){var yt=b.H;if(typeof _t=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(L,K)},pe.useId=function(){return b.H.useId()},pe.useImperativeHandle=function(L,K,_t){return b.H.useImperativeHandle(L,K,_t)},pe.useInsertionEffect=function(L,K){return b.H.useInsertionEffect(L,K)},pe.useLayoutEffect=function(L,K){return b.H.useLayoutEffect(L,K)},pe.useMemo=function(L,K){return b.H.useMemo(L,K)},pe.useOptimistic=function(L,K){return b.H.useOptimistic(L,K)},pe.useReducer=function(L,K,_t){return b.H.useReducer(L,K,_t)},pe.useRef=function(L){return b.H.useRef(L)},pe.useState=function(L){return b.H.useState(L)},pe.useSyncExternalStore=function(L,K,_t){return b.H.useSyncExternalStore(L,K,_t)},pe.useTransition=function(){return b.H.useTransition()},pe.version="19.1.1",pe}var Hd;function Yc(){return Hd||(Hd=1,qc.exports=h_()),qc.exports}var rn=Yc();const xn=c_(rn);var Zc={exports:{}},zs={},jc={exports:{}},Kc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function d_(){return Gd||(Gd=1,(function(s){function t(P,Q){var W=P.length;P.push(Q);t:for(;0<W;){var xt=W-1>>>1,L=P[xt];if(0<l(L,Q))P[xt]=Q,P[W]=L,W=xt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var Q=P[0],W=P.pop();if(W!==Q){P[0]=W;t:for(var xt=0,L=P.length,K=L>>>1;xt<K;){var _t=2*(xt+1)-1,yt=P[_t],Dt=_t+1,Nt=P[Dt];if(0>l(yt,W))Dt<L&&0>l(Nt,yt)?(P[xt]=Nt,P[Dt]=W,xt=Dt):(P[xt]=yt,P[_t]=W,xt=_t);else if(Dt<L&&0>l(Nt,W))P[xt]=Nt,P[Dt]=W,xt=Dt;else break t}}return Q}function l(P,Q){var W=P.sortIndex-Q.sortIndex;return W!==0?W:P.id-Q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,x=null,v=3,y=!1,E=!1,D=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(P){for(var Q=i(p);Q!==null;){if(Q.callback===null)r(p);else if(Q.startTime<=P)r(p),Q.sortIndex=Q.expirationTime,t(m,Q);else break;Q=i(p)}}function b(P){if(D=!1,U(P),!E)if(i(m)!==null)E=!0,z||(z=!0,Z());else{var Q=i(p);Q!==null&&ct(b,Q.startTime-P)}}var z=!1,F=-1,X=5,C=-1;function w(){return M?!0:!(s.unstable_now()-C<X)}function I(){if(M=!1,z){var P=s.unstable_now();C=P;var Q=!0;try{t:{E=!1,D&&(D=!1,G(F),F=-1),y=!0;var W=v;try{e:{for(U(P),x=i(m);x!==null&&!(x.expirationTime>P&&w());){var xt=x.callback;if(typeof xt=="function"){x.callback=null,v=x.priorityLevel;var L=xt(x.expirationTime<=P);if(P=s.unstable_now(),typeof L=="function"){x.callback=L,U(P),Q=!0;break e}x===i(m)&&r(m),U(P)}else r(m);x=i(m)}if(x!==null)Q=!0;else{var K=i(p);K!==null&&ct(b,K.startTime-P),Q=!1}}break t}finally{x=null,v=W,y=!1}Q=void 0}}finally{Q?Z():z=!1}}}var Z;if(typeof O=="function")Z=function(){O(I)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,ft=et.port2;et.port1.onmessage=I,Z=function(){ft.postMessage(null)}}else Z=function(){_(I,0)};function ct(P,Q){F=_(function(){P(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(P){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var W=v;v=Q;try{return P()}finally{v=W}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(P,Q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var W=v;v=P;try{return Q()}finally{v=W}},s.unstable_scheduleCallback=function(P,Q,W){var xt=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?xt+W:xt):W=xt,P){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=W+L,P={id:g++,callback:Q,priorityLevel:P,startTime:W,expirationTime:L,sortIndex:-1},W>xt?(P.sortIndex=W,t(p,P),i(m)===null&&P===i(p)&&(D?(G(F),F=-1):D=!0,ct(b,W-xt))):(P.sortIndex=L,t(m,P),E||y||(E=!0,z||(z=!0,Z()))),P},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(P){var Q=v;return function(){var W=v;v=Q;try{return P.apply(this,arguments)}finally{v=W}}}})(Kc)),Kc}var Vd;function p_(){return Vd||(Vd=1,jc.exports=d_()),jc.exports}var Qc={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function m_(){if(kd)return Un;kd=1;var s=Yc();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},Un.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Un.requestFormReset=function(m){r.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Un.useFormStatus=function(){return h.H.useHostTransitionStatus()},Un.version="19.1.1",Un}var Xd;function Wd(){if(Xd)return Qc.exports;Xd=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Qc.exports=m_(),Qc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function g_(){if(qd)return zs;qd=1;var s=p_(),t=Yc(),i=Wd();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return d(c),e;if(f===o)return d(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=f;else{for(var S=!1,A=c.child;A;){if(A===a){S=!0,a=c,o=f;break}if(A===o){S=!0,o=c,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,o=c;break}if(A===o){S=!0,o=f,a=c;break}A=A.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),G=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var et=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case M:return"Profiler";case D:return"StrictMode";case b:return"Suspense";case z:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case O:return(e.displayName||"Context")+".Provider";case G:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var ct=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},xt=[],L=-1;function K(e){return{current:e}}function _t(e){0>L||(e.current=xt[L],xt[L]=null,L--)}function yt(e,n){L++,xt[L]=e.current,e.current=n}var Dt=K(null),Nt=K(null),J=K(null),mt=K(null);function At(e,n){switch(yt(J,n),yt(Nt,e),yt(Dt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Bv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Bv(n),e=Fv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}_t(Dt),yt(Dt,e)}function Zt(){_t(Dt),_t(Nt),_t(J)}function Gt(e){e.memoizedState!==null&&yt(mt,e);var n=Dt.current,a=Fv(n,e.type);n!==a&&(yt(Nt,e),yt(Dt,a))}function te(e){Nt.current===e&&(_t(Dt),_t(Nt)),mt.current===e&&(_t(mt),Zo._currentValue=W)}var ke=Object.prototype.hasOwnProperty,H=s.unstable_scheduleCallback,ue=s.unstable_cancelCallback,ie=s.unstable_shouldYield,Qt=s.unstable_requestPaint,Ft=s.unstable_now,le=s.unstable_getCurrentPriorityLevel,It=s.unstable_ImmediatePriority,fe=s.unstable_UserBlockingPriority,Ye=s.unstable_NormalPriority,Fe=s.unstable_LowPriority,N=s.unstable_IdlePriority,T=s.log,tt=s.unstable_setDisableYieldValue,ut=null,dt=null;function lt(e){if(typeof T=="function"&&tt(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ut,e)}catch{}}var Lt=Math.clz32?Math.clz32:qt,Rt=Math.log,Wt=Math.LN2;function qt(e){return e>>>=0,e===0?32:31-(Rt(e)/Wt|0)|0}var St=256,Ot=4194304;function Yt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Vt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?c=Yt(o):(S&=A,S!==0?c=Yt(S):a||(a=A&~e,a!==0&&(c=Yt(a))))):(A=o&~f,A!==0?c=Yt(A):S!==0?c=Yt(S):a||(a=o&~e,a!==0&&(c=Yt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=St;return St<<=1,(St&4194048)===0&&(St=256),e}function Et(){var e=Ot;return Ot<<=1,(Ot&62914560)===0&&(Ot=4194304),e}function wt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ht(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mt(e,n,a,o,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,B=e.expirationTimes,nt=e.hiddenUpdates;for(a=S&~a;0<a;){var ht=31-Lt(a),vt=1<<ht;A[ht]=0,B[ht]=-1;var it=nt[ht];if(it!==null)for(nt[ht]=null,ht=0;ht<it.length;ht++){var at=it[ht];at!==null&&(at.lane&=-536870913)}a&=~vt}o!==0&&gt(e,o,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function gt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Lt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function bt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Lt(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function oe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Re(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function he(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:i_(e.type))}function ai(e,n){var a=Q.p;try{return Q.p=e,n()}finally{Q.p=a}}var $e=Math.random().toString(36).slice(2),sn="__reactFiber$"+$e,Oe="__reactProps$"+$e,Ut="__reactContainer$"+$e,de="__reactEvents$"+$e,Xe="__reactListeners$"+$e,Ze="__reactHandles$"+$e,fn="__reactResources$"+$e,Yn="__reactMarker$"+$e;function Zn(e){delete e[sn],delete e[Oe],delete e[de],delete e[Xe],delete e[Ze]}function Ci(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ut]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Vv(e);e!==null;){if(a=e[sn])return a;e=Vv(e)}return n}e=a,a=e.parentNode}return null}function Hi(e){if(e=e[sn]||e[Ut]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Di(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Ca(e){var n=e[fn];return n||(n=e[fn]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(e){e[Yn]=!0}var Bl=new Set,Fl={};function R(e,n){q(e,n),q(e+"Capture",n)}function q(e,n){for(Fl[e]=n,e=0;e<n.length;e++)Bl.add(n[e])}var st=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},j={};function Tt(e){return ke.call(j,e)?!0:ke.call(ot,e)?!1:st.test(e)?j[e]=!0:(ot[e]=!0,!1)}function Pt(e,n,a){if(Tt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function kt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Bt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var $t,re;function jt(e){if($t===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$t=n&&n[1]||"",re=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+e+re}var ve=!1;function Ue(e,n){if(!e||ve)return"";ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(at){var it=at}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(at){it=at}e.call(vt.prototype)}}else{try{throw Error()}catch(at){it=at}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(at){if(at&&it&&typeof at.stack=="string")return[at.stack,it.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var B=S.split(`
`),nt=A.split(`
`);for(c=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;c<nt.length&&!nt[c].includes("DetermineComponentFrameRoot");)c++;if(o===B.length||c===nt.length)for(o=B.length-1,c=nt.length-1;1<=o&&0<=c&&B[o]!==nt[c];)c--;for(;1<=o&&0<=c;o--,c--)if(B[o]!==nt[c]){if(o!==1||c!==1)do if(o--,c--,0>c||B[o]!==nt[c]){var ht=`
`+B[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=c);break}}}finally{ve=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?jt(a):""}function Qe(e){switch(e.tag){case 26:case 27:case 5:return jt(e.type);case 16:return jt("Lazy");case 13:return jt("Suspense");case 19:return jt("SuspenseList");case 0:case 15:return Ue(e.type,!1);case 11:return Ue(e.type.render,!1);case 1:return Ue(e.type,!0);case 31:return jt("Activity");default:return""}}function Ie(e){try{var n="";do n+=Qe(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(e){var n=Jt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){o=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(S){o=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Me(e){e._valueTracker||(e._valueTracker=Ke(e))}function Pn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Jt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gn=/[\n"\\]/g;function En(e){return e.replace(Gn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function We(e,n,a,o,c,f,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?zn(e,S,_e(n)):a!=null?zn(e,S,_e(a)):o!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+_e(A):e.removeAttribute("name")}function Vn(e,n,a,o,c,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function zn(e,n,a){n==="number"&&Ui(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function en(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Rn(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function is(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ct(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function jn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var W1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bm(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||W1.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Fm(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Bm(e,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Bm(e,f,n[f])}function zf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var q1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Y1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Il(e){return Y1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Bf=null;function Ff(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var as=null,rs=null;function Im(e){var n=Hi(e);if(n&&(e=n.stateNode)){var a=e[Oe]||null;t:switch(e=n.stateNode,n.type){case"input":if(We(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+En(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[Oe]||null;if(!c)throw Error(r(90));We(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Pn(o)}break t;case"textarea":Rn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&en(e,!!a.multiple,n,!1)}}}var If=!1;function Hm(e,n,a){if(If)return e(n,a);If=!0;try{var o=e(n);return o}finally{if(If=!1,(as!==null||rs!==null)&&(bc(),as&&(n=as,e=rs,rs=as=null,Im(n),e)))for(n=0;n<e.length;n++)Im(e[n])}}function so(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Oe]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hf=!1;if(ia)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Hf=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Hf=!1}var Da=null,Gf=null,Hl=null;function Gm(){if(Hl)return Hl;var e,n=Gf,a=n.length,o,c="value"in Da?Da.value:Da.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===c[f-o];o++);return Hl=c.slice(e,1<o?1-o:void 0)}function Gl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Vl(){return!0}function Vm(){return!1}function Kn(e){function n(a,o,c,f,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Vl:Vm,this.isPropagationStopped=Vm,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),n}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kl=Kn(pr),lo=g({},pr,{view:0,detail:0}),Z1=Kn(lo),Vf,kf,co,Xl=g({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(Vf=e.screenX-co.screenX,kf=e.screenY-co.screenY):kf=Vf=0,co=e),Vf)},movementY:function(e){return"movementY"in e?e.movementY:kf}}),km=Kn(Xl),j1=g({},Xl,{dataTransfer:0}),K1=Kn(j1),Q1=g({},lo,{relatedTarget:0}),Xf=Kn(Q1),J1=g({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),$1=Kn(J1),tb=g({},pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eb=Kn(tb),nb=g({},pr,{data:0}),Xm=Kn(nb),ib={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ab={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sb(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=rb[e])?!!n[e]:!1}function Wf(){return sb}var ob=g({},lo,{key:function(e){if(e.key){var n=ib[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ab[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wf,charCode:function(e){return e.type==="keypress"?Gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lb=Kn(ob),cb=g({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wm=Kn(cb),ub=g({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wf}),fb=Kn(ub),hb=g({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),db=Kn(hb),pb=g({},Xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mb=Kn(pb),gb=g({},pr,{newState:0,oldState:0}),vb=Kn(gb),_b=[9,13,27,32],qf=ia&&"CompositionEvent"in window,uo=null;ia&&"documentMode"in document&&(uo=document.documentMode);var xb=ia&&"TextEvent"in window&&!uo,qm=ia&&(!qf||uo&&8<uo&&11>=uo),Ym=" ",Zm=!1;function jm(e,n){switch(e){case"keyup":return _b.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Km(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ss=!1;function yb(e,n){switch(e){case"compositionend":return Km(n);case"keypress":return n.which!==32?null:(Zm=!0,Ym);case"textInput":return e=n.data,e===Ym&&Zm?null:e;default:return null}}function Sb(e,n){if(ss)return e==="compositionend"||!qf&&jm(e,n)?(e=Gm(),Hl=Gf=Da=null,ss=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return qm&&n.locale!=="ko"?null:n.data;default:return null}}var Mb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Mb[e.type]:n==="textarea"}function Jm(e,n,a,o){as?rs?rs.push(o):rs=[o]:as=o,n=Dc(n,"onChange"),0<n.length&&(a=new kl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var fo=null,ho=null;function Eb(e){Lv(e,0)}function Wl(e){var n=Di(e);if(Pn(n))return e}function $m(e,n){if(e==="change")return n}var t0=!1;if(ia){var Yf;if(ia){var Zf="oninput"in document;if(!Zf){var e0=document.createElement("div");e0.setAttribute("oninput","return;"),Zf=typeof e0.oninput=="function"}Yf=Zf}else Yf=!1;t0=Yf&&(!document.documentMode||9<document.documentMode)}function n0(){fo&&(fo.detachEvent("onpropertychange",i0),ho=fo=null)}function i0(e){if(e.propertyName==="value"&&Wl(ho)){var n=[];Jm(n,ho,e,Ff(e)),Hm(Eb,n)}}function bb(e,n,a){e==="focusin"?(n0(),fo=n,ho=a,fo.attachEvent("onpropertychange",i0)):e==="focusout"&&n0()}function Tb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wl(ho)}function Ab(e,n){if(e==="click")return Wl(n)}function Rb(e,n){if(e==="input"||e==="change")return Wl(n)}function wb(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ri=typeof Object.is=="function"?Object.is:wb;function po(e,n){if(ri(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!ke.call(n,c)||!ri(e[c],n[c]))return!1}return!0}function a0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function r0(e,n){var a=a0(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=a0(a)}}function s0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?s0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function o0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Ui(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Ui(e.document)}return n}function jf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Cb=ia&&"documentMode"in document&&11>=document.documentMode,os=null,Kf=null,mo=null,Qf=!1;function l0(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qf||os==null||os!==Ui(o)||(o=os,"selectionStart"in o&&jf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),mo&&po(mo,o)||(mo=o,o=Dc(Kf,"onSelect"),0<o.length&&(n=new kl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=os)))}function mr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ls={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionrun:mr("Transition","TransitionRun"),transitionstart:mr("Transition","TransitionStart"),transitioncancel:mr("Transition","TransitionCancel"),transitionend:mr("Transition","TransitionEnd")},Jf={},c0={};ia&&(c0=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function gr(e){if(Jf[e])return Jf[e];if(!ls[e])return e;var n=ls[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in c0)return Jf[e]=n[a];return e}var u0=gr("animationend"),f0=gr("animationiteration"),h0=gr("animationstart"),Db=gr("transitionrun"),Ub=gr("transitionstart"),Lb=gr("transitioncancel"),d0=gr("transitionend"),p0=new Map,$f="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$f.push("scrollEnd");function Li(e,n){p0.set(e,n),R(n,[e])}var m0=new WeakMap;function di(e,n){if(typeof e=="object"&&e!==null){var a=m0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ie(n)},m0.set(e,n),n)}return{value:e,source:n,stack:Ie(n)}}var pi=[],cs=0,th=0;function ql(){for(var e=cs,n=th=cs=0;n<e;){var a=pi[n];pi[n++]=null;var o=pi[n];pi[n++]=null;var c=pi[n];pi[n++]=null;var f=pi[n];if(pi[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}f!==0&&g0(a,c,f)}}function Yl(e,n,a,o){pi[cs++]=e,pi[cs++]=n,pi[cs++]=a,pi[cs++]=o,th|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function eh(e,n,a,o){return Yl(e,n,a,o),Zl(e)}function us(e,n){return Yl(e,null,null,n),Zl(e)}function g0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Lt(a),e=f.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function Zl(e){if(50<Ho)throw Ho=0,od=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var fs={};function Nb(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,n,a,o){return new Nb(e,n,a,o)}function nh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aa(e,n){var a=e.alternate;return a===null?(a=si(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function v0(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function jl(e,n,a,o,c,f){var S=0;if(o=e,typeof e=="function")nh(e)&&(S=1);else if(typeof e=="string")S=PT(e,a,Dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=si(31,a,n,c),e.elementType=C,e.lanes=f,e;case E:return vr(a.children,c,f,n);case D:S=8,c|=24;break;case M:return e=si(12,a,n,c|2),e.elementType=M,e.lanes=f,e;case b:return e=si(13,a,n,c),e.elementType=b,e.lanes=f,e;case z:return e=si(19,a,n,c),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case O:S=10;break t;case G:S=9;break t;case U:S=11;break t;case F:S=14;break t;case X:S=16,o=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=si(S,a,n,c),n.elementType=e,n.type=o,n.lanes=f,n}function vr(e,n,a,o){return e=si(7,e,o,n),e.lanes=a,e}function ih(e,n,a){return e=si(6,e,null,n),e.lanes=a,e}function ah(e,n,a){return n=si(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var hs=[],ds=0,Kl=null,Ql=0,mi=[],gi=0,_r=null,ra=1,sa="";function xr(e,n){hs[ds++]=Ql,hs[ds++]=Kl,Kl=e,Ql=n}function _0(e,n,a){mi[gi++]=ra,mi[gi++]=sa,mi[gi++]=_r,_r=e;var o=ra;e=sa;var c=32-Lt(o)-1;o&=~(1<<c),a+=1;var f=32-Lt(n)+c;if(30<f){var S=c-c%5;f=(o&(1<<S)-1).toString(32),o>>=S,c-=S,ra=1<<32-Lt(n)+c|a<<c|o,sa=f+e}else ra=1<<f|a<<c|o,sa=e}function rh(e){e.return!==null&&(xr(e,1),_0(e,1,0))}function sh(e){for(;e===Kl;)Kl=hs[--ds],hs[ds]=null,Ql=hs[--ds],hs[ds]=null;for(;e===_r;)_r=mi[--gi],mi[gi]=null,sa=mi[--gi],mi[gi]=null,ra=mi[--gi],mi[gi]=null}var kn=null,nn=null,Ne=!1,yr=null,Gi=!1,oh=Error(r(519));function Sr(e){var n=Error(r(418,""));throw _o(di(n,e)),oh}function x0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[sn]=e,n[Oe]=o,a){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(a=0;a<Vo.length;a++)be(Vo[a],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":be("invalid",n),Vn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Me(n);break;case"select":be("invalid",n);break;case"textarea":be("invalid",n),is(n,o.value,o.defaultValue,o.children),Me(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||zv(n.textContent,a)?(o.popover!=null&&(be("beforetoggle",n),be("toggle",n)),o.onScroll!=null&&be("scroll",n),o.onScrollEnd!=null&&be("scrollend",n),o.onClick!=null&&(n.onclick=Uc),n=!0):n=!1,n||Sr(e)}function y0(e){for(kn=e.return;kn;)switch(kn.tag){case 5:case 13:Gi=!1;return;case 27:case 3:Gi=!0;return;default:kn=kn.return}}function go(e){if(e!==kn)return!1;if(!Ne)return y0(e),Ne=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ed(e.type,e.memoizedProps)),a=!a),a&&nn&&Sr(e),y0(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){nn=Oi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}nn=null}}else n===27?(n=nn,qa(e.type)?(e=Rd,Rd=null,nn=e):nn=n):nn=kn?Oi(e.stateNode.nextSibling):null;return!0}function vo(){nn=kn=null,Ne=!1}function S0(){var e=yr;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),yr=null),e}function _o(e){yr===null?yr=[e]:yr.push(e)}var lh=K(null),Mr=null,oa=null;function Ua(e,n,a){yt(lh,n._currentValue),n._currentValue=a}function la(e){e._currentValue=lh.current,_t(lh)}function ch(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function uh(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=c;for(var B=0;B<n.length;B++)if(A.context===n[B]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),ch(f.return,a,e),o||(S=null);break t}f=A.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),ch(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function xo(e,n,a,o){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var A=c.type;ri(c.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(c===mt.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Zo):e=[Zo])}c=c.return}e!==null&&uh(n,e,a,o),n.flags|=262144}function Jl(e){for(e=e.firstContext;e!==null;){if(!ri(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Er(e){Mr=e,oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Bn(e){return M0(Mr,e)}function $l(e,n){return Mr===null&&Er(e),M0(e,n)}function M0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},oa===null){if(e===null)throw Error(r(308));oa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else oa=oa.next=n;return a}var Ob=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Pb=s.unstable_scheduleCallback,zb=s.unstable_NormalPriority,vn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fh(){return{controller:new Ob,data:new Map,refCount:0}}function yo(e){e.refCount--,e.refCount===0&&Pb(zb,function(){e.controller.abort()})}var So=null,hh=0,ps=0,ms=null;function Bb(e,n){if(So===null){var a=So=[];hh=0,ps=pd(),ms={status:"pending",value:void 0,then:function(o){a.push(o)}}}return hh++,n.then(E0,E0),n}function E0(){if(--hh===0&&So!==null){ms!==null&&(ms.status="fulfilled");var e=So;So=null,ps=0,ms=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Fb(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var b0=P.S;P.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Bb(e,n),b0!==null&&b0(e,n)};var br=K(null);function dh(){var e=br.current;return e!==null?e:je.pooledCache}function tc(e,n){n===null?yt(br,br.current):yt(br,n.pool)}function T0(){var e=dh();return e===null?null:{parent:vn._currentValue,pool:e}}var Mo=Error(r(460)),A0=Error(r(474)),ec=Error(r(542)),ph={then:function(){}};function R0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function nc(){}function w0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(nc,nc),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,D0(e),e;default:if(typeof n.status=="string")n.then(nc,nc);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,D0(e),e}throw Eo=n,Mo}}var Eo=null;function C0(){if(Eo===null)throw Error(r(459));var e=Eo;return Eo=null,e}function D0(e){if(e===Mo||e===ec)throw Error(r(483))}var La=!1;function mh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Oa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=Zl(e),g0(e,null,a),n}return Yl(e,o,n,a),Zl(e)}function bo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,bt(e,a)}}function vh(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var _h=!1;function To(){if(_h){var e=ms;if(e!==null)throw e}}function Ao(e,n,a,o){_h=!1;var c=e.updateQueue;La=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var B=A,nt=B.next;B.next=null,S===null?f=nt:S.next=nt,S=B;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==S&&(A===null?ht.firstBaseUpdate=nt:A.next=nt,ht.lastBaseUpdate=B))}if(f!==null){var vt=c.baseState;S=0,ht=nt=B=null,A=f;do{var it=A.lane&-536870913,at=it!==A.lane;if(at?(we&it)===it:(o&it)===it){it!==0&&it===ps&&(_h=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ce=e,ne=A;it=n;var Ve=a;switch(ne.tag){case 1:if(ce=ne.payload,typeof ce=="function"){vt=ce.call(Ve,vt,it);break t}vt=ce;break t;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=ne.payload,it=typeof ce=="function"?ce.call(Ve,vt,it):ce,it==null)break t;vt=g({},vt,it);break t;case 2:La=!0}}it=A.callback,it!==null&&(e.flags|=64,at&&(e.flags|=8192),at=c.callbacks,at===null?c.callbacks=[it]:at.push(it))}else at={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?(nt=ht=at,B=vt):ht=ht.next=at,S|=it;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;at=A,A=at.next,at.next=null,c.lastBaseUpdate=at,c.shared.pending=null}}while(!0);ht===null&&(B=vt),c.baseState=B,c.firstBaseUpdate=nt,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),Va|=S,e.lanes=S,e.memoizedState=vt}}function U0(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function L0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)U0(a[e],n)}var gs=K(null),ic=K(0);function N0(e,n){e=ma,yt(ic,e),yt(gs,n),ma=e|n.baseLanes}function xh(){yt(ic,ma),yt(gs,gs.current)}function yh(){ma=ic.current,_t(gs),_t(ic)}var Pa=0,xe=null,He=null,dn=null,ac=!1,vs=!1,Tr=!1,rc=0,Ro=0,_s=null,Ib=0;function on(){throw Error(r(321))}function Sh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ri(e[a],n[a]))return!1;return!0}function Mh(e,n,a,o,c,f){return Pa=f,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?gg:vg,Tr=!1,f=a(o,c),Tr=!1,vs&&(f=P0(n,a,o,c)),O0(e),f}function O0(e){P.H=fc;var n=He!==null&&He.next!==null;if(Pa=0,dn=He=xe=null,ac=!1,Ro=0,_s=null,n)throw Error(r(300));e===null||bn||(e=e.dependencies,e!==null&&Jl(e)&&(bn=!0))}function P0(e,n,a,o){xe=e;var c=0;do{if(vs&&(_s=null),Ro=0,vs=!1,25<=c)throw Error(r(301));if(c+=1,dn=He=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=qb,f=n(a,o)}while(vs);return f}function Hb(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?wo(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(xe.flags|=1024),n}function Eh(){var e=rc!==0;return rc=0,e}function bh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Th(e){if(ac){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ac=!1}Pa=0,dn=He=xe=null,vs=!1,Ro=rc=0,_s=null}function Qn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?xe.memoizedState=dn=e:dn=dn.next=e,dn}function pn(){if(He===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=dn===null?xe.memoizedState:dn.next;if(n!==null)dn=n,He=e;else{if(e===null)throw xe.alternate===null?Error(r(467)):Error(r(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},dn===null?xe.memoizedState=dn=e:dn=dn.next=e}return dn}function Ah(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wo(e){var n=Ro;return Ro+=1,_s===null&&(_s=[]),e=w0(_s,e,n),n=xe,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?gg:vg),e}function sc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wo(e);if(e.$$typeof===O)return Bn(e)}throw Error(r(438,String(e)))}function Rh(e){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=xe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ah(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function ca(e,n){return typeof n=="function"?n(e):n}function oc(e){var n=pn();return wh(n,He,e)}function wh(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,f=o.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,o.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var A=S=null,B=null,nt=n,ht=!1;do{var vt=nt.lane&-536870913;if(vt!==nt.lane?(we&vt)===vt:(Pa&vt)===vt){var it=nt.revertLane;if(it===0)B!==null&&(B=B.next={lane:0,revertLane:0,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),vt===ps&&(ht=!0);else if((Pa&it)===it){nt=nt.next,it===ps&&(ht=!0);continue}else vt={lane:0,revertLane:nt.revertLane,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},B===null?(A=B=vt,S=f):B=B.next=vt,xe.lanes|=it,Va|=it;vt=nt.action,Tr&&a(f,vt),f=nt.hasEagerState?nt.eagerState:a(f,vt)}else it={lane:vt,revertLane:nt.revertLane,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},B===null?(A=B=it,S=f):B=B.next=it,xe.lanes|=vt,Va|=vt;nt=nt.next}while(nt!==null&&nt!==n);if(B===null?S=f:B.next=A,!ri(f,e.memoizedState)&&(bn=!0,ht&&(a=ms,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=B,o.lastRenderedState=f}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ch(e){var n=pn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);ri(f,n.memoizedState)||(bn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function z0(e,n,a){var o=xe,c=pn(),f=Ne;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!ri((He||c).memoizedState,a);S&&(c.memoizedState=a,bn=!0),c=c.queue;var A=I0.bind(null,o,c,e);if(Co(2048,8,A,[e]),c.getSnapshot!==n||S||dn!==null&&dn.memoizedState.tag&1){if(o.flags|=2048,xs(9,lc(),F0.bind(null,o,c,a,n),null),je===null)throw Error(r(349));f||(Pa&124)!==0||B0(o,n,a)}return a}function B0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=Ah(),xe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function F0(e,n,a,o){n.value=a,n.getSnapshot=o,H0(n)&&G0(e)}function I0(e,n,a){return a(function(){H0(n)&&G0(e)})}function H0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ri(e,a)}catch{return!0}}function G0(e){var n=us(e,2);n!==null&&fi(n,e,2)}function Dh(e){var n=Qn();if(typeof e=="function"){var a=e;if(e=a(),Tr){lt(!0);try{a()}finally{lt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},n}function V0(e,n,a,o){return e.baseState=a,wh(e,He,typeof o=="function"?o:ca)}function Gb(e,n,a,o,c){if(uc(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,k0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function k0(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var f=P.T,S={};P.T=S;try{var A=a(c,o),B=P.S;B!==null&&B(S,A),X0(e,n,A)}catch(nt){Uh(e,n,nt)}finally{P.T=f}}else try{f=a(c,o),X0(e,n,f)}catch(nt){Uh(e,n,nt)}}function X0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){W0(e,n,o)},function(o){return Uh(e,n,o)}):W0(e,n,a)}function W0(e,n,a){n.status="fulfilled",n.value=a,q0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,k0(e,a)))}function Uh(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,q0(n),n=n.next;while(n!==o)}e.action=null}function q0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Y0(e,n){return n}function Z0(e,n){if(Ne){var a=je.formState;if(a!==null){t:{var o=xe;if(Ne){if(nn){e:{for(var c=nn,f=Gi;c.nodeType!==8;){if(!f){c=null;break e}if(c=Oi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){nn=Oi(c.nextSibling),o=c.data==="F!";break t}}Sr(o)}o=!1}o&&(n=a[0])}}return a=Qn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Y0,lastRenderedState:n},a.queue=o,a=dg.bind(null,xe,o),o.dispatch=a,o=Dh(!1),f=zh.bind(null,xe,!1,o.queue),o=Qn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=Gb.bind(null,xe,c,f,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function j0(e){var n=pn();return K0(n,He,e)}function K0(e,n,a){if(n=wh(e,n,Y0)[0],e=oc(ca)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=wo(n)}catch(S){throw S===Mo?ec:S}else o=n;n=pn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,xs(9,lc(),Vb.bind(null,c,a),null)),[o,f,e]}function Vb(e,n){e.action=n}function Q0(e){var n=pn(),a=He;if(a!==null)return K0(n,a,e);pn(),n=n.memoizedState,a=pn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function xs(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=xe.updateQueue,n===null&&(n=Ah(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function lc(){return{destroy:void 0,resource:void 0}}function J0(){return pn().memoizedState}function cc(e,n,a,o){var c=Qn();o=o===void 0?null:o,xe.flags|=e,c.memoizedState=xs(1|n,lc(),a,o)}function Co(e,n,a,o){var c=pn();o=o===void 0?null:o;var f=c.memoizedState.inst;He!==null&&o!==null&&Sh(o,He.memoizedState.deps)?c.memoizedState=xs(n,f,a,o):(xe.flags|=e,c.memoizedState=xs(1|n,f,a,o))}function $0(e,n){cc(8390656,8,e,n)}function tg(e,n){Co(2048,8,e,n)}function eg(e,n){return Co(4,2,e,n)}function ng(e,n){return Co(4,4,e,n)}function ig(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ag(e,n,a){a=a!=null?a.concat([e]):null,Co(4,4,ig.bind(null,n,e),a)}function Lh(){}function rg(e,n){var a=pn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Sh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function sg(e,n){var a=pn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Sh(n,o[1]))return o[0];if(o=e(),Tr){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[o,n],o}function Nh(e,n,a){return a===void 0||(Pa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=cv(),xe.lanes|=e,Va|=e,a)}function og(e,n,a,o){return ri(a,n)?a:gs.current!==null?(e=Nh(e,a,o),ri(e,n)||(bn=!0),e):(Pa&42)===0?(bn=!0,e.memoizedState=a):(e=cv(),xe.lanes|=e,Va|=e,n)}function lg(e,n,a,o,c){var f=Q.p;Q.p=f!==0&&8>f?f:8;var S=P.T,A={};P.T=A,zh(e,!1,n,a);try{var B=c(),nt=P.S;if(nt!==null&&nt(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ht=Fb(B,o);Do(e,n,ht,ui(e))}else Do(e,n,o,ui(e))}catch(vt){Do(e,n,{then:function(){},status:"rejected",reason:vt},ui())}finally{Q.p=f,P.T=S}}function kb(){}function Oh(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=cg(e).queue;lg(e,c,n,W,a===null?kb:function(){return ug(e),a(o)})}function cg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function ug(e){var n=cg(e).next.queue;Do(e,n,{},ui())}function Ph(){return Bn(Zo)}function fg(){return pn().memoizedState}function hg(){return pn().memoizedState}function Xb(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();e=Na(a);var o=Oa(n,e,a);o!==null&&(fi(o,n,a),bo(o,n,a)),n={cache:fh()},e.payload=n;return}n=n.return}}function Wb(e,n,a){var o=ui();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},uc(e)?pg(n,a):(a=eh(e,n,a,o),a!==null&&(fi(a,e,o),mg(a,n,o)))}function dg(e,n,a){var o=ui();Do(e,n,a,o)}function Do(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(uc(e))pg(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(c.hasEagerState=!0,c.eagerState=A,ri(A,S))return Yl(e,n,c,0),je===null&&ql(),!1}catch{}finally{}if(a=eh(e,n,c,o),a!==null)return fi(a,e,o),mg(a,n,o),!0}return!1}function zh(e,n,a,o){if(o={lane:2,revertLane:pd(),action:o,hasEagerState:!1,eagerState:null,next:null},uc(e)){if(n)throw Error(r(479))}else n=eh(e,a,o,2),n!==null&&fi(n,e,2)}function uc(e){var n=e.alternate;return e===xe||n!==null&&n===xe}function pg(e,n){vs=ac=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function mg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,bt(e,a)}}var fc={readContext:Bn,use:sc,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on},gg={readContext:Bn,use:sc,useCallback:function(e,n){return Qn().memoizedState=[e,n===void 0?null:n],e},useContext:Bn,useEffect:$0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,cc(4194308,4,ig.bind(null,n,e),a)},useLayoutEffect:function(e,n){return cc(4194308,4,e,n)},useInsertionEffect:function(e,n){cc(4,2,e,n)},useMemo:function(e,n){var a=Qn();n=n===void 0?null:n;var o=e();if(Tr){lt(!0);try{e()}finally{lt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Qn();if(a!==void 0){var c=a(n);if(Tr){lt(!0);try{a(n)}finally{lt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=Wb.bind(null,xe,e),[o.memoizedState,e]},useRef:function(e){var n=Qn();return e={current:e},n.memoizedState=e},useState:function(e){e=Dh(e);var n=e.queue,a=dg.bind(null,xe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Lh,useDeferredValue:function(e,n){var a=Qn();return Nh(a,e,n)},useTransition:function(){var e=Dh(!1);return e=lg.bind(null,xe,e.queue,!0,!1),Qn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=xe,c=Qn();if(Ne){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),je===null)throw Error(r(349));(we&124)!==0||B0(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,$0(I0.bind(null,o,f,e),[e]),o.flags|=2048,xs(9,lc(),F0.bind(null,o,f,a,n),null),a},useId:function(){var e=Qn(),n=je.identifierPrefix;if(Ne){var a=sa,o=ra;a=(o&~(1<<32-Lt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=rc++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Ib++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Ph,useFormState:Z0,useActionState:Z0,useOptimistic:function(e){var n=Qn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=zh.bind(null,xe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Rh,useCacheRefresh:function(){return Qn().memoizedState=Xb.bind(null,xe)}},vg={readContext:Bn,use:sc,useCallback:rg,useContext:Bn,useEffect:tg,useImperativeHandle:ag,useInsertionEffect:eg,useLayoutEffect:ng,useMemo:sg,useReducer:oc,useRef:J0,useState:function(){return oc(ca)},useDebugValue:Lh,useDeferredValue:function(e,n){var a=pn();return og(a,He.memoizedState,e,n)},useTransition:function(){var e=oc(ca)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:wo(e),n]},useSyncExternalStore:z0,useId:fg,useHostTransitionStatus:Ph,useFormState:j0,useActionState:j0,useOptimistic:function(e,n){var a=pn();return V0(a,He,e,n)},useMemoCache:Rh,useCacheRefresh:hg},qb={readContext:Bn,use:sc,useCallback:rg,useContext:Bn,useEffect:tg,useImperativeHandle:ag,useInsertionEffect:eg,useLayoutEffect:ng,useMemo:sg,useReducer:Ch,useRef:J0,useState:function(){return Ch(ca)},useDebugValue:Lh,useDeferredValue:function(e,n){var a=pn();return He===null?Nh(a,e,n):og(a,He.memoizedState,e,n)},useTransition:function(){var e=Ch(ca)[0],n=pn().memoizedState;return[typeof e=="boolean"?e:wo(e),n]},useSyncExternalStore:z0,useId:fg,useHostTransitionStatus:Ph,useFormState:Q0,useActionState:Q0,useOptimistic:function(e,n){var a=pn();return He!==null?V0(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Rh,useCacheRefresh:hg},ys=null,Uo=0;function hc(e){var n=Uo;return Uo+=1,ys===null&&(ys=[]),w0(ys,e,n)}function Lo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function dc(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function _g(e){var n=e._init;return n(e._payload)}function xg(e){function n(Y,V){if(e){var $=Y.deletions;$===null?(Y.deletions=[V],Y.flags|=16):$.push(V)}}function a(Y,V){if(!e)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function o(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function c(Y,V){return Y=aa(Y,V),Y.index=0,Y.sibling=null,Y}function f(Y,V,$){return Y.index=$,e?($=Y.alternate,$!==null?($=$.index,$<V?(Y.flags|=67108866,V):$):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function S(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,V,$,pt){return V===null||V.tag!==6?(V=ih($,Y.mode,pt),V.return=Y,V):(V=c(V,$),V.return=Y,V)}function B(Y,V,$,pt){var Xt=$.type;return Xt===E?ht(Y,V,$.props.children,pt,$.key):V!==null&&(V.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===X&&_g(Xt)===V.type)?(V=c(V,$.props),Lo(V,$),V.return=Y,V):(V=jl($.type,$.key,$.props,null,Y.mode,pt),Lo(V,$),V.return=Y,V)}function nt(Y,V,$,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=ah($,Y.mode,pt),V.return=Y,V):(V=c(V,$.children||[]),V.return=Y,V)}function ht(Y,V,$,pt,Xt){return V===null||V.tag!==7?(V=vr($,Y.mode,pt,Xt),V.return=Y,V):(V=c(V,$),V.return=Y,V)}function vt(Y,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=ih(""+V,Y.mode,$),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case v:return $=jl(V.type,V.key,V.props,null,Y.mode,$),Lo($,V),$.return=Y,$;case y:return V=ah(V,Y.mode,$),V.return=Y,V;case X:var pt=V._init;return V=pt(V._payload),vt(Y,V,$)}if(ct(V)||Z(V))return V=vr(V,Y.mode,$,null),V.return=Y,V;if(typeof V.then=="function")return vt(Y,hc(V),$);if(V.$$typeof===O)return vt(Y,$l(Y,V),$);dc(Y,V)}return null}function it(Y,V,$,pt){var Xt=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Xt!==null?null:A(Y,V,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case v:return $.key===Xt?B(Y,V,$,pt):null;case y:return $.key===Xt?nt(Y,V,$,pt):null;case X:return Xt=$._init,$=Xt($._payload),it(Y,V,$,pt)}if(ct($)||Z($))return Xt!==null?null:ht(Y,V,$,pt,null);if(typeof $.then=="function")return it(Y,V,hc($),pt);if($.$$typeof===O)return it(Y,V,$l(Y,$),pt);dc(Y,$)}return null}function at(Y,V,$,pt,Xt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Y=Y.get($)||null,A(V,Y,""+pt,Xt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case v:return Y=Y.get(pt.key===null?$:pt.key)||null,B(V,Y,pt,Xt);case y:return Y=Y.get(pt.key===null?$:pt.key)||null,nt(V,Y,pt,Xt);case X:var ye=pt._init;return pt=ye(pt._payload),at(Y,V,$,pt,Xt)}if(ct(pt)||Z(pt))return Y=Y.get($)||null,ht(V,Y,pt,Xt,null);if(typeof pt.then=="function")return at(Y,V,$,hc(pt),Xt);if(pt.$$typeof===O)return at(Y,V,$,$l(V,pt),Xt);dc(V,pt)}return null}function ce(Y,V,$,pt){for(var Xt=null,ye=null,Kt=V,se=V=0,An=null;Kt!==null&&se<$.length;se++){Kt.index>se?(An=Kt,Kt=null):An=Kt.sibling;var Le=it(Y,Kt,$[se],pt);if(Le===null){Kt===null&&(Kt=An);break}e&&Kt&&Le.alternate===null&&n(Y,Kt),V=f(Le,V,se),ye===null?Xt=Le:ye.sibling=Le,ye=Le,Kt=An}if(se===$.length)return a(Y,Kt),Ne&&xr(Y,se),Xt;if(Kt===null){for(;se<$.length;se++)Kt=vt(Y,$[se],pt),Kt!==null&&(V=f(Kt,V,se),ye===null?Xt=Kt:ye.sibling=Kt,ye=Kt);return Ne&&xr(Y,se),Xt}for(Kt=o(Kt);se<$.length;se++)An=at(Kt,Y,se,$[se],pt),An!==null&&(e&&An.alternate!==null&&Kt.delete(An.key===null?se:An.key),V=f(An,V,se),ye===null?Xt=An:ye.sibling=An,ye=An);return e&&Kt.forEach(function(Qa){return n(Y,Qa)}),Ne&&xr(Y,se),Xt}function ne(Y,V,$,pt){if($==null)throw Error(r(151));for(var Xt=null,ye=null,Kt=V,se=V=0,An=null,Le=$.next();Kt!==null&&!Le.done;se++,Le=$.next()){Kt.index>se?(An=Kt,Kt=null):An=Kt.sibling;var Qa=it(Y,Kt,Le.value,pt);if(Qa===null){Kt===null&&(Kt=An);break}e&&Kt&&Qa.alternate===null&&n(Y,Kt),V=f(Qa,V,se),ye===null?Xt=Qa:ye.sibling=Qa,ye=Qa,Kt=An}if(Le.done)return a(Y,Kt),Ne&&xr(Y,se),Xt;if(Kt===null){for(;!Le.done;se++,Le=$.next())Le=vt(Y,Le.value,pt),Le!==null&&(V=f(Le,V,se),ye===null?Xt=Le:ye.sibling=Le,ye=Le);return Ne&&xr(Y,se),Xt}for(Kt=o(Kt);!Le.done;se++,Le=$.next())Le=at(Kt,Y,se,Le.value,pt),Le!==null&&(e&&Le.alternate!==null&&Kt.delete(Le.key===null?se:Le.key),V=f(Le,V,se),ye===null?Xt=Le:ye.sibling=Le,ye=Le);return e&&Kt.forEach(function(YT){return n(Y,YT)}),Ne&&xr(Y,se),Xt}function Ve(Y,V,$,pt){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case v:t:{for(var Xt=$.key;V!==null;){if(V.key===Xt){if(Xt=$.type,Xt===E){if(V.tag===7){a(Y,V.sibling),pt=c(V,$.props.children),pt.return=Y,Y=pt;break t}}else if(V.elementType===Xt||typeof Xt=="object"&&Xt!==null&&Xt.$$typeof===X&&_g(Xt)===V.type){a(Y,V.sibling),pt=c(V,$.props),Lo(pt,$),pt.return=Y,Y=pt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}$.type===E?(pt=vr($.props.children,Y.mode,pt,$.key),pt.return=Y,Y=pt):(pt=jl($.type,$.key,$.props,null,Y.mode,pt),Lo(pt,$),pt.return=Y,Y=pt)}return S(Y);case y:t:{for(Xt=$.key;V!==null;){if(V.key===Xt)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(Y,V.sibling),pt=c(V,$.children||[]),pt.return=Y,Y=pt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}pt=ah($,Y.mode,pt),pt.return=Y,Y=pt}return S(Y);case X:return Xt=$._init,$=Xt($._payload),Ve(Y,V,$,pt)}if(ct($))return ce(Y,V,$,pt);if(Z($)){if(Xt=Z($),typeof Xt!="function")throw Error(r(150));return $=Xt.call($),ne(Y,V,$,pt)}if(typeof $.then=="function")return Ve(Y,V,hc($),pt);if($.$$typeof===O)return Ve(Y,V,$l(Y,$),pt);dc(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,V!==null&&V.tag===6?(a(Y,V.sibling),pt=c(V,$),pt.return=Y,Y=pt):(a(Y,V),pt=ih($,Y.mode,pt),pt.return=Y,Y=pt),S(Y)):a(Y,V)}return function(Y,V,$,pt){try{Uo=0;var Xt=Ve(Y,V,$,pt);return ys=null,Xt}catch(Kt){if(Kt===Mo||Kt===ec)throw Kt;var ye=si(29,Kt,null,Y.mode);return ye.lanes=pt,ye.return=Y,ye}finally{}}}var Ss=xg(!0),yg=xg(!1),vi=K(null),Vi=null;function za(e){var n=e.alternate;yt(_n,_n.current&1),yt(vi,e),Vi===null&&(n===null||gs.current!==null||n.memoizedState!==null)&&(Vi=e)}function Sg(e){if(e.tag===22){if(yt(_n,_n.current),yt(vi,e),Vi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Vi=e)}}else Ba()}function Ba(){yt(_n,_n.current),yt(vi,vi.current)}function ua(e){_t(vi),Vi===e&&(Vi=null),_t(_n)}var _n=K(0);function pc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ad(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Bh(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Fh={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ui(),c=Na(o);c.payload=n,a!=null&&(c.callback=a),n=Oa(e,c,o),n!==null&&(fi(n,e,o),bo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ui(),c=Na(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Oa(e,c,o),n!==null&&(fi(n,e,o),bo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ui(),o=Na(a);o.tag=2,n!=null&&(o.callback=n),n=Oa(e,o,a),n!==null&&(fi(n,e,a),bo(n,e,a))}};function Mg(e,n,a,o,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,S):n.prototype&&n.prototype.isPureReactComponent?!po(a,o)||!po(c,f):!0}function Eg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Fh.enqueueReplaceState(n,n.state,null)}function Ar(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var mc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function bg(e){mc(e)}function Tg(e){console.error(e)}function Ag(e){mc(e)}function gc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Rg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ih(e,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){gc(e,n)},a}function wg(e){return e=Na(e),e.tag=3,e}function Cg(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;e.payload=function(){return c(f)},e.callback=function(){Rg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Rg(n,a,o),typeof c!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Yb(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&xo(n,a,c,!0),a=vi.current,a!==null){switch(a.tag){case 13:return Vi===null?cd():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===ph?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),fd(e,o,c)),!1;case 22:return a.flags|=65536,o===ph?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),fd(e,o,c)),!1}throw Error(r(435,a.tag))}return fd(e,o,c),cd(),!1}if(Ne)return n=vi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==oh&&(e=Error(r(422),{cause:o}),_o(di(e,a)))):(o!==oh&&(n=Error(r(423),{cause:o}),_o(di(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=di(o,a),c=Ih(e.stateNode,o,c),vh(e,c),an!==4&&(an=2)),!1;var f=Error(r(520),{cause:o});if(f=di(f,a),Io===null?Io=[f]:Io.push(f),an!==4&&(an=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Ih(a.stateNode,o,e),vh(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ka===null||!ka.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=wg(c),Cg(c,e,a,o),vh(a,c),!1}a=a.return}while(a!==null);return!1}var Dg=Error(r(461)),bn=!1;function wn(e,n,a,o){n.child=e===null?yg(n,null,a,o):Ss(n,e.child,a,o)}function Ug(e,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return Er(n),o=Mh(e,n,a,S,f,c),A=Eh(),e!==null&&!bn?(bh(e,n,c),fa(e,n,c)):(Ne&&A&&rh(n),n.flags|=1,wn(e,n,o,c),n.child)}function Lg(e,n,a,o,c){if(e===null){var f=a.type;return typeof f=="function"&&!nh(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Ng(e,n,f,o,c)):(e=jl(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Yh(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:po,a(S,o)&&e.ref===n.ref)return fa(e,n,c)}return n.flags|=1,e=aa(f,o),e.ref=n.ref,e.return=n,n.child=e}function Ng(e,n,a,o,c){if(e!==null){var f=e.memoizedProps;if(po(f,o)&&e.ref===n.ref)if(bn=!1,n.pendingProps=o=f,Yh(e,c))(e.flags&131072)!==0&&(bn=!0);else return n.lanes=e.lanes,fa(e,n,c)}return Hh(e,n,a,o,c)}function Og(e,n,a){var o=n.pendingProps,c=o.children,f=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=f!==null?f.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~o}else n.childLanes=0,n.child=null;return Pg(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&tc(n,f!==null?f.cachePool:null),f!==null?N0(n,f):xh(),Sg(n);else return n.lanes=n.childLanes=536870912,Pg(e,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(tc(n,f.cachePool),N0(n,f),Ba(),n.memoizedState=null):(e!==null&&tc(n,null),xh(),Ba());return wn(e,n,c,a),n.child}function Pg(e,n,a,o){var c=dh();return c=c===null?null:{parent:vn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&tc(n,null),xh(),Sg(n),e!==null&&xo(e,n,o,!0),null}function vc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Hh(e,n,a,o,c){return Er(n),a=Mh(e,n,a,o,void 0,c),o=Eh(),e!==null&&!bn?(bh(e,n,c),fa(e,n,c)):(Ne&&o&&rh(n),n.flags|=1,wn(e,n,a,c),n.child)}function zg(e,n,a,o,c,f){return Er(n),n.updateQueue=null,a=P0(n,o,a,c),O0(e),o=Eh(),e!==null&&!bn?(bh(e,n,f),fa(e,n,f)):(Ne&&o&&rh(n),n.flags|=1,wn(e,n,a,f),n.child)}function Bg(e,n,a,o,c){if(Er(n),n.stateNode===null){var f=fs,S=a.contextType;typeof S=="object"&&S!==null&&(f=Bn(S)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Fh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},mh(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Bn(S):fs,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Bh(n,a,S,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Fh.enqueueReplaceState(f,f.state,null),Ao(n,o,f,c),To(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,B=Ar(a,A);f.props=B;var nt=f.context,ht=a.contextType;S=fs,typeof ht=="object"&&ht!==null&&(S=Bn(ht));var vt=a.getDerivedStateFromProps;ht=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||nt!==S)&&Eg(n,f,o,S),La=!1;var it=n.memoizedState;f.state=it,Ao(n,o,f,c),To(),nt=n.memoizedState,A||it!==nt||La?(typeof vt=="function"&&(Bh(n,a,vt,o),nt=n.memoizedState),(B=La||Mg(n,a,B,o,it,nt,S))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),f.props=o,f.state=nt,f.context=S,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,gh(e,n),S=n.memoizedProps,ht=Ar(a,S),f.props=ht,vt=n.pendingProps,it=f.context,nt=a.contextType,B=fs,typeof nt=="object"&&nt!==null&&(B=Bn(nt)),A=a.getDerivedStateFromProps,(nt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==vt||it!==B)&&Eg(n,f,o,B),La=!1,it=n.memoizedState,f.state=it,Ao(n,o,f,c),To();var at=n.memoizedState;S!==vt||it!==at||La||e!==null&&e.dependencies!==null&&Jl(e.dependencies)?(typeof A=="function"&&(Bh(n,a,A,o),at=n.memoizedState),(ht=La||Mg(n,a,ht,o,it,at,B)||e!==null&&e.dependencies!==null&&Jl(e.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,at,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,at,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=at),f.props=o,f.state=at,f.context=B,o=ht):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,vc(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ss(n,e.child,null,c),n.child=Ss(n,null,a,c)):wn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=fa(e,n,c),e}function Fg(e,n,a,o){return vo(),n.flags|=256,wn(e,n,a,o),n.child}var Gh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vh(e){return{baseLanes:e,cachePool:T0()}}function kh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=_i),e}function Ig(e,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(_n.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ne){if(c?za(n):Ba(),Ne){var A=nn,B;if(B=A){t:{for(B=A,A=Gi;B.nodeType!==8;){if(!A){A=null;break t}if(B=Oi(B.nextSibling),B===null){A=null;break t}}A=B}A!==null?(n.memoizedState={dehydrated:A,treeContext:_r!==null?{id:ra,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},B=si(18,null,null,0),B.stateNode=A,B.return=n,n.child=B,kn=n,nn=null,B=!0):B=!1}B||Sr(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Ad(A)?n.lanes=32:n.lanes=536870912,null;ua(n)}return A=o.children,o=o.fallback,c?(Ba(),c=n.mode,A=_c({mode:"hidden",children:A},c),o=vr(o,c,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,c=n.child,c.memoizedState=Vh(a),c.childLanes=kh(e,S,a),n.memoizedState=Gh,o):(za(n),Xh(n,A))}if(B=e.memoizedState,B!==null&&(A=B.dehydrated,A!==null)){if(f)n.flags&256?(za(n),n.flags&=-257,n=Wh(e,n,a)):n.memoizedState!==null?(Ba(),n.child=e.child,n.flags|=128,n=null):(Ba(),c=o.fallback,A=n.mode,o=_c({mode:"visible",children:o.children},A),c=vr(c,A,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,Ss(n,e.child,null,a),o=n.child,o.memoizedState=Vh(a),o.childLanes=kh(e,S,a),n.memoizedState=Gh,n=c);else if(za(n),Ad(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var nt=S.dgst;S=nt,o=Error(r(419)),o.stack="",o.digest=S,_o({value:o,source:null,stack:null}),n=Wh(e,n,a)}else if(bn||xo(e,n,a,!1),S=(a&e.childLanes)!==0,bn||S){if(S=je,S!==null&&(o=a&-a,o=(o&42)!==0?1:oe(o),o=(o&(S.suspendedLanes|a))!==0?0:o,o!==0&&o!==B.retryLane))throw B.retryLane=o,us(e,o),fi(S,e,o),Dg;A.data==="$?"||cd(),n=Wh(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,nn=Oi(A.nextSibling),kn=n,Ne=!0,yr=null,Gi=!1,e!==null&&(mi[gi++]=ra,mi[gi++]=sa,mi[gi++]=_r,ra=e.id,sa=e.overflow,_r=n),n=Xh(n,o.children),n.flags|=4096);return n}return c?(Ba(),c=o.fallback,A=n.mode,B=e.child,nt=B.sibling,o=aa(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,nt!==null?c=aa(nt,c):(c=vr(c,A,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,A=e.child.memoizedState,A===null?A=Vh(a):(B=A.cachePool,B!==null?(nt=vn._currentValue,B=B.parent!==nt?{parent:nt,pool:nt}:B):B=T0(),A={baseLanes:A.baseLanes|a,cachePool:B}),c.memoizedState=A,c.childLanes=kh(e,S,a),n.memoizedState=Gh,o):(za(n),a=e.child,e=a.sibling,a=aa(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Xh(e,n){return n=_c({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function _c(e,n){return e=si(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Wh(e,n,a){return Ss(n,e.child,null,a),e=Xh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Hg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ch(e.return,n,a)}function qh(e,n,a,o,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=o,f.tail=a,f.tailMode=c)}function Gg(e,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;if(wn(e,n,o.children,a),o=_n.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hg(e,a,n);else if(e.tag===19)Hg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(yt(_n,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&pc(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),qh(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&pc(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}qh(n,!0,a,null,f);break;case"together":qh(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function fa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Va|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(xo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=aa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=aa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Yh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Jl(e)))}function Zb(e,n,a){switch(n.tag){case 3:At(n,n.stateNode.containerInfo),Ua(n,vn,e.memoizedState.cache),vo();break;case 27:case 5:Gt(n);break;case 4:At(n,n.stateNode.containerInfo);break;case 10:Ua(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(za(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ig(e,n,a):(za(n),e=fa(e,n,a),e!==null?e.sibling:null);za(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(xo(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Gg(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(_n,_n.current),o)break;return null;case 22:case 23:return n.lanes=0,Og(e,n,a);case 24:Ua(n,vn,e.memoizedState.cache)}return fa(e,n,a)}function Vg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)bn=!0;else{if(!Yh(e,a)&&(n.flags&128)===0)return bn=!1,Zb(e,n,a);bn=(e.flags&131072)!==0}else bn=!1,Ne&&(n.flags&1048576)!==0&&_0(n,Ql,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")nh(o)?(e=Ar(o,e),n.tag=1,n=Bg(null,n,o,e,a)):(n.tag=0,n=Hh(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===U){n.tag=11,n=Ug(null,n,o,e,a);break t}else if(c===F){n.tag=14,n=Lg(null,n,o,e,a);break t}}throw n=ft(o)||o,Error(r(306,n,""))}}return n;case 0:return Hh(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Ar(o,n.pendingProps),Bg(e,n,o,c,a);case 3:t:{if(At(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,gh(e,n),Ao(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Ua(n,vn,o),o!==f.cache&&uh(n,[vn],a,!0),To(),o=S.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Fg(e,n,o,a);break t}else if(o!==c){c=di(Error(r(424)),n),_o(c),n=Fg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(nn=Oi(e.firstChild),kn=n,Ne=!0,yr=null,Gi=!0,a=yg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(vo(),o===c){n=fa(e,n,a);break t}wn(e,n,o,a)}n=n.child}return n;case 26:return vc(e,n),e===null?(a=qv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ne||(a=n.type,e=n.pendingProps,o=Lc(J.current).createElement(a),o[sn]=n,o[Oe]=e,Dn(o,a,e),hn(o),n.stateNode=o):n.memoizedState=qv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Gt(n),e===null&&Ne&&(o=n.stateNode=kv(n.type,n.pendingProps,J.current),kn=n,Gi=!0,c=nn,qa(n.type)?(Rd=c,nn=Oi(o.firstChild)):nn=c),wn(e,n,n.pendingProps.children,a),vc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ne&&((c=o=nn)&&(o=MT(o,n.type,n.pendingProps,Gi),o!==null?(n.stateNode=o,kn=n,nn=Oi(o.firstChild),Gi=!1,c=!0):c=!1),c||Sr(n)),Gt(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,o=f.children,Ed(c,f)?o=null:S!==null&&Ed(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=Mh(e,n,Hb,null,null,a),Zo._currentValue=c),vc(e,n),wn(e,n,o,a),n.child;case 6:return e===null&&Ne&&((e=a=nn)&&(a=ET(a,n.pendingProps,Gi),a!==null?(n.stateNode=a,kn=n,nn=null,e=!0):e=!1),e||Sr(n)),null;case 13:return Ig(e,n,a);case 4:return At(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ss(n,null,o,a):wn(e,n,o,a),n.child;case 11:return Ug(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ua(n,n.type,o.value),wn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,Er(n),c=Bn(c),o=o(c),n.flags|=1,wn(e,n,o,a),n.child;case 14:return Lg(e,n,n.type,n.pendingProps,a);case 15:return Ng(e,n,n.type,n.pendingProps,a);case 19:return Gg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=_c(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=aa(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Og(e,n,a);case 24:return Er(n),o=Bn(vn),e===null?(c=dh(),c===null&&(c=je,f=fh(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},mh(n),Ua(n,vn,c)):((e.lanes&a)!==0&&(gh(e,n),Ao(n,null,null,a),To()),c=e.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ua(n,vn,o)):(o=f.cache,Ua(n,vn,o),o!==c.cache&&uh(n,[vn],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ha(e){e.flags|=4}function kg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Qv(n)){if(n=vi.current,n!==null&&((we&4194048)===we?Vi!==null:(we&62914560)!==we&&(we&536870912)===0||n!==Vi))throw Eo=ph,A0;e.flags|=8192}}function xc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Et():536870912,e.lanes|=n,Ts|=n)}function No(e,n){if(!Ne)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function tn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function jb(e,n,a){var o=n.pendingProps;switch(sh(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),la(vn),Zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(go(n)?ha(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,S0())),tn(n),null;case 26:return a=n.memoizedState,e===null?(ha(n),a!==null?(tn(n),kg(n,a)):(tn(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ha(n),tn(n),kg(n,a)):(tn(n),n.flags&=-16777217):(e.memoizedProps!==o&&ha(n),tn(n),n.flags&=-16777217),null;case 27:te(n),a=J.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ha(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return tn(n),null}e=Dt.current,go(n)?x0(n):(e=kv(c,o,a),n.stateNode=e,ha(n))}return tn(n),null;case 5:if(te(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ha(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return tn(n),null}if(e=Dt.current,go(n))x0(n);else{switch(c=Lc(J.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[sn]=n,e[Oe]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Dn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ha(n)}}return tn(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ha(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=J.current,go(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=kn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||zv(e.nodeValue,a)),e||Sr(n)}else e=Lc(e).createTextNode(o),e[sn]=n,n.stateNode=e}return tn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=go(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else vo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),c=!1}else c=S0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ua(n),n):(ua(n),null)}if(ua(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var f=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),xc(n,n.updateQueue),tn(n),null;case 4:return Zt(),e===null&&_d(n.stateNode.containerInfo),tn(n),null;case 10:return la(n.type),tn(n),null;case 19:if(_t(_n),c=n.memoizedState,c===null)return tn(n),null;if(o=(n.flags&128)!==0,f=c.rendering,f===null)if(o)No(c,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=pc(e),f!==null){for(n.flags|=128,No(c,!1),e=f.updateQueue,n.updateQueue=e,xc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)v0(a,e),a=a.sibling;return yt(_n,_n.current&1|2),n.child}e=e.sibling}c.tail!==null&&Ft()>Mc&&(n.flags|=128,o=!0,No(c,!1),n.lanes=4194304)}else{if(!o)if(e=pc(f),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,xc(n,e),No(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Ne)return tn(n),null}else 2*Ft()-c.renderingStartTime>Mc&&a!==536870912&&(n.flags|=128,o=!0,No(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Ft(),n.sibling=null,e=_n.current,yt(_n,o?e&1|2:e&1),n):(tn(n),null);case 22:case 23:return ua(n),yh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&xc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&_t(br),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),la(vn),tn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Kb(e,n){switch(sh(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return la(vn),Zt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return te(n),null;case 13:if(ua(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));vo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return _t(_n),null;case 4:return Zt(),null;case 10:return la(n.type),null;case 22:case 23:return ua(n),yh(),e!==null&&_t(br),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return la(vn),null;case 25:return null;default:return null}}function Xg(e,n){switch(sh(n),n.tag){case 3:la(vn),Zt();break;case 26:case 27:case 5:te(n);break;case 4:Zt();break;case 13:ua(n);break;case 19:_t(_n);break;case 10:la(n.type);break;case 22:case 23:ua(n),yh(),e!==null&&_t(br);break;case 24:la(vn)}}function Oo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var f=a.create,S=a.inst;o=f(),S.destroy=o}a=a.next}while(a!==c)}}catch(A){qe(n,n.return,A)}}function Fa(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,c=n;var B=a,nt=A;try{nt()}catch(ht){qe(c,B,ht)}}}o=o.next}while(o!==f)}}catch(ht){qe(n,n.return,ht)}}function Wg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{L0(n,a)}catch(o){qe(e,e.return,o)}}}function qg(e,n,a){a.props=Ar(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){qe(e,n,o)}}function Po(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){qe(e,n,c)}}function ki(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){qe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){qe(e,n,c)}else a.current=null}function Yg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){qe(e,e.return,c)}}function Zh(e,n,a){try{var o=e.stateNode;vT(o,e.type,a,n),o[Oe]=n}catch(c){qe(e,e.return,c)}}function Zg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&qa(e.type)||e.tag===4}function jh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Zg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kh(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Uc));else if(o!==4&&(o===27&&qa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Kh(e,n,a),e=e.sibling;e!==null;)Kh(e,n,a),e=e.sibling}function yc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&qa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(yc(e,n,a),e=e.sibling;e!==null;)yc(e,n,a),e=e.sibling}function jg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Dn(n,o,a),n[sn]=e,n[Oe]=a}catch(f){qe(e,e.return,f)}}var da=!1,ln=!1,Qh=!1,Kg=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function Qb(e,n){if(e=e.containerInfo,Sd=Fc,e=o0(e),jf(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,A=-1,B=-1,nt=0,ht=0,vt=e,it=null;e:for(;;){for(var at;vt!==a||c!==0&&vt.nodeType!==3||(A=S+c),vt!==f||o!==0&&vt.nodeType!==3||(B=S+o),vt.nodeType===3&&(S+=vt.nodeValue.length),(at=vt.firstChild)!==null;)it=vt,vt=at;for(;;){if(vt===e)break e;if(it===a&&++nt===c&&(A=S),it===f&&++ht===o&&(B=S),(at=vt.nextSibling)!==null)break;vt=it,it=vt.parentNode}vt=at}a=A===-1||B===-1?null:{start:A,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Md={focusedElem:e,selectionRange:a},Fc=!1,Tn=n;Tn!==null;)if(n=Tn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Tn=e;else for(;Tn!==null;){switch(n=Tn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ce=Ar(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ce,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ne){qe(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Td(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Td(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Tn=e;break}Tn=n.return}}function Qg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ia(e,a),o&4&&Oo(5,a);break;case 1:if(Ia(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){qe(a,a.return,S)}else{var c=Ar(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){qe(a,a.return,S)}}o&64&&Wg(a),o&512&&Po(a,a.return);break;case 3:if(Ia(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{L0(e,n)}catch(S){qe(a,a.return,S)}}break;case 27:n===null&&o&4&&jg(a);case 26:case 5:Ia(e,a),n===null&&o&4&&Yg(a),o&512&&Po(a,a.return);break;case 12:Ia(e,a);break;case 13:Ia(e,a),o&4&&tv(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=sT.bind(null,a),bT(e,a))));break;case 22:if(o=a.memoizedState!==null||da,!o){n=n!==null&&n.memoizedState!==null||ln,c=da;var f=ln;da=o,(ln=n)&&!f?Ha(e,a,(a.subtreeFlags&8772)!==0):Ia(e,a),da=c,ln=f}break;case 30:break;default:Ia(e,a)}}function Jg(e){var n=e.alternate;n!==null&&(e.alternate=null,Jg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Zn(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Jn=!1;function pa(e,n,a){for(a=a.child;a!==null;)$g(e,n,a),a=a.sibling}function $g(e,n,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:ln||ki(a,n),pa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||ki(a,n);var o=Je,c=Jn;qa(a.type)&&(Je=a.stateNode,Jn=!1),pa(e,n,a),Xo(a.stateNode),Je=o,Jn=c;break;case 5:ln||ki(a,n);case 6:if(o=Je,c=Jn,Je=null,pa(e,n,a),Je=o,Jn=c,Je!==null)if(Jn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){qe(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){qe(a,n,f)}break;case 18:Je!==null&&(Jn?(e=Je,Gv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Jo(e)):Gv(Je,a.stateNode));break;case 4:o=Je,c=Jn,Je=a.stateNode.containerInfo,Jn=!0,pa(e,n,a),Je=o,Jn=c;break;case 0:case 11:case 14:case 15:ln||Fa(2,a,n),ln||Fa(4,a,n),pa(e,n,a);break;case 1:ln||(ki(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&qg(a,n,o)),pa(e,n,a);break;case 21:pa(e,n,a);break;case 22:ln=(o=ln)||a.memoizedState!==null,pa(e,n,a),ln=o;break;default:pa(e,n,a)}}function tv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Jo(e)}catch(a){qe(n,n.return,a)}}function Jb(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Kg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Kg),n;default:throw Error(r(435,e.tag))}}function Jh(e,n){var a=Jb(e);n.forEach(function(o){var c=oT.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function oi(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(qa(A.type)){Je=A.stateNode,Jn=!1;break t}break;case 5:Je=A.stateNode,Jn=!1;break t;case 3:case 4:Je=A.stateNode.containerInfo,Jn=!0;break t}A=A.return}if(Je===null)throw Error(r(160));$g(f,S,c),Je=null,Jn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)ev(n,e),n=n.sibling}var Ni=null;function ev(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:oi(n,e),li(e),o&4&&(Fa(3,e,e.return),Oo(3,e),Fa(5,e,e.return));break;case 1:oi(n,e),li(e),o&512&&(ln||a===null||ki(a,a.return)),o&64&&da&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Ni;if(oi(n,e),li(e),o&512&&(ln||a===null||ki(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Yn]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Dn(f,o,a),f[sn]=e,hn(f),o=f;break t;case"link":var S=jv("link","href",c).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}f=c.createElement(o),Dn(f,o,a),c.head.appendChild(f);break;case"meta":if(S=jv("meta","content",c).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}f=c.createElement(o),Dn(f,o,a),c.head.appendChild(f);break;default:throw Error(r(468,o))}f[sn]=e,hn(f),o=f}e.stateNode=o}else Kv(c,e.type,e.stateNode);else e.stateNode=Zv(c,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Kv(c,e.type,e.stateNode):Zv(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Zh(e,e.memoizedProps,a.memoizedProps)}break;case 27:oi(n,e),li(e),o&512&&(ln||a===null||ki(a,a.return)),a!==null&&o&4&&Zh(e,e.memoizedProps,a.memoizedProps);break;case 5:if(oi(n,e),li(e),o&512&&(ln||a===null||ki(a,a.return)),e.flags&32){c=e.stateNode;try{jn(c,"")}catch(at){qe(e,e.return,at)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,Zh(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Qh=!0);break;case 6:if(oi(n,e),li(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(at){qe(e,e.return,at)}}break;case 3:if(Pc=null,c=Ni,Ni=Nc(n.containerInfo),oi(n,e),Ni=c,li(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Jo(n.containerInfo)}catch(at){qe(e,e.return,at)}Qh&&(Qh=!1,nv(e));break;case 4:o=Ni,Ni=Nc(e.stateNode.containerInfo),oi(n,e),li(e),Ni=o;break;case 12:oi(n,e),li(e);break;case 13:oi(n,e),li(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ad=Ft()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jh(e,o)));break;case 22:c=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,nt=da,ht=ln;if(da=nt||c,ln=ht||B,oi(n,e),ln=ht,da=nt,li(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||da||ln||Rr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=B.stateNode;var vt=B.memoizedProps.style,it=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(at){qe(B,B.return,at)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(at){qe(B,B.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Jh(e,a))));break;case 19:oi(n,e),li(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Jh(e,o)));break;case 30:break;case 21:break;default:oi(n,e),li(e)}}function li(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Zg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=jh(e);yc(e,f,c);break;case 5:var S=a.stateNode;a.flags&32&&(jn(S,""),a.flags&=-33);var A=jh(e);yc(e,A,S);break;case 3:case 4:var B=a.stateNode.containerInfo,nt=jh(e);Kh(e,nt,B);break;default:throw Error(r(161))}}catch(ht){qe(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function nv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;nv(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ia(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Qg(e,n.alternate,n),n=n.sibling}function Rr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),Rr(n);break;case 1:ki(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&qg(n,n.return,a),Rr(n);break;case 27:Xo(n.stateNode);case 26:case 5:ki(n,n.return),Rr(n);break;case 22:n.memoizedState===null&&Rr(n);break;case 30:Rr(n);break;default:Rr(n)}e=e.sibling}}function Ha(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:Ha(c,f,a),Oo(4,f);break;case 1:if(Ha(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(nt){qe(o,o.return,nt)}if(o=f,c=o.updateQueue,c!==null){var A=o.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)U0(B[c],A)}catch(nt){qe(o,o.return,nt)}}a&&S&64&&Wg(f),Po(f,f.return);break;case 27:jg(f);case 26:case 5:Ha(c,f,a),a&&o===null&&S&4&&Yg(f),Po(f,f.return);break;case 12:Ha(c,f,a);break;case 13:Ha(c,f,a),a&&S&4&&tv(c,f);break;case 22:f.memoizedState===null&&Ha(c,f,a),Po(f,f.return);break;case 30:break;default:Ha(c,f,a)}n=n.sibling}}function $h(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&yo(a))}function td(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&yo(e))}function Xi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)iv(e,n,a,o),n=n.sibling}function iv(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Xi(e,n,a,o),c&2048&&Oo(9,n);break;case 1:Xi(e,n,a,o);break;case 3:Xi(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&yo(e)));break;case 12:if(c&2048){Xi(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){qe(n,n.return,B)}}else Xi(e,n,a,o);break;case 13:Xi(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Xi(e,n,a,o):zo(e,n):f._visibility&2?Xi(e,n,a,o):(f._visibility|=2,Ms(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&$h(S,n);break;case 24:Xi(e,n,a,o),c&2048&&td(n.alternate,n);break;default:Xi(e,n,a,o)}}function Ms(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,A=a,B=o,nt=S.flags;switch(S.tag){case 0:case 11:case 15:Ms(f,S,A,B,c),Oo(8,S);break;case 23:break;case 22:var ht=S.stateNode;S.memoizedState!==null?ht._visibility&2?Ms(f,S,A,B,c):zo(f,S):(ht._visibility|=2,Ms(f,S,A,B,c)),c&&nt&2048&&$h(S.alternate,S);break;case 24:Ms(f,S,A,B,c),c&&nt&2048&&td(S.alternate,S);break;default:Ms(f,S,A,B,c)}n=n.sibling}}function zo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:zo(a,o),c&2048&&$h(o.alternate,o);break;case 24:zo(a,o),c&2048&&td(o.alternate,o);break;default:zo(a,o)}n=n.sibling}}var Bo=8192;function Es(e){if(e.subtreeFlags&Bo)for(e=e.child;e!==null;)av(e),e=e.sibling}function av(e){switch(e.tag){case 26:Es(e),e.flags&Bo&&e.memoizedState!==null&&BT(Ni,e.memoizedState,e.memoizedProps);break;case 5:Es(e);break;case 3:case 4:var n=Ni;Ni=Nc(e.stateNode.containerInfo),Es(e),Ni=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Bo,Bo=16777216,Es(e),Bo=n):Es(e));break;default:Es(e)}}function rv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Fo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,ov(o,e)}rv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sv(e),e=e.sibling}function sv(e){switch(e.tag){case 0:case 11:case 15:Fo(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:Fo(e);break;case 12:Fo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Sc(e)):Fo(e);break;default:Fo(e)}}function Sc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Tn=o,ov(o,e)}rv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Sc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Sc(n));break;default:Sc(n)}e=e.sibling}}function ov(e,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:yo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Tn=o;else t:for(a=e;Tn!==null;){o=Tn;var c=o.sibling,f=o.return;if(Jg(o),o===a){Tn=null;break t}if(c!==null){c.return=f,Tn=c;break t}Tn=f}}}var $b={getCacheForType:function(e){var n=Bn(vn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},tT=typeof WeakMap=="function"?WeakMap:Map,Pe=0,je=null,Ee=null,we=0,ze=0,ci=null,Ga=!1,bs=!1,ed=!1,ma=0,an=0,Va=0,wr=0,nd=0,_i=0,Ts=0,Io=null,$n=null,id=!1,ad=0,Mc=1/0,Ec=null,ka=null,Cn=0,Xa=null,As=null,Rs=0,rd=0,sd=null,lv=null,Ho=0,od=null;function ui(){if((Pe&2)!==0&&we!==0)return we&-we;if(P.T!==null){var e=ps;return e!==0?e:pd()}return he()}function cv(){_i===0&&(_i=(we&536870912)===0||Ne?k():536870912);var e=vi.current;return e!==null&&(e.flags|=32),_i}function fi(e,n,a){(e===je&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(ws(e,0),Wa(e,we,_i,!1)),Ht(e,a),((Pe&2)===0||e!==je)&&(e===je&&((Pe&2)===0&&(wr|=a),an===4&&Wa(e,we,_i,!1)),Wi(e))}function uv(e,n,a){if((Pe&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Ct(e,n),c=o?iT(e,n):ud(e,n,!0),f=o;do{if(c===0){bs&&!o&&Wa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!eT(a)){c=ud(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;c=Io;var B=A.current.memoizedState.isDehydrated;if(B&&(ws(A,S).flags|=256),S=ud(A,S,!1),S!==2){if(ed&&!B){A.errorRecoveryDisabledLanes|=f,wr|=f,c=4;break t}f=$n,$n=c,f!==null&&($n===null?$n=f:$n.push.apply($n,f))}c=S}if(f=!1,c!==2)continue}}if(c===1){ws(e,0),Wa(e,n,0,!0);break}t:{switch(o=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Wa(o,n,_i,!Ga);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=ad+300-Ft(),10<c)){if(Wa(o,n,_i,!Ga),Vt(o,0,!0)!==0)break t;o.timeoutHandle=Iv(fv.bind(null,o,a,$n,Ec,id,n,_i,wr,Ts,Ga,f,2,-0,0),c);break t}fv(o,a,$n,Ec,id,n,_i,wr,Ts,Ga,f,0,-0,0)}}break}while(!0);Wi(e)}function fv(e,n,a,o,c,f,S,A,B,nt,ht,vt,it,at){if(e.timeoutHandle=-1,vt=n.subtreeFlags,(vt&8192||(vt&16785408)===16785408)&&(Yo={stylesheets:null,count:0,unsuspend:zT},av(n),vt=FT(),vt!==null)){e.cancelPendingCommit=vt(_v.bind(null,e,n,f,a,o,c,S,A,B,ht,1,it,at)),Wa(e,f,S,!nt);return}_v(e,n,f,a,o,c,S,A,B)}function eT(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!ri(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wa(e,n,a,o){n&=~nd,n&=~wr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var f=31-Lt(c),S=1<<f;o[f]=-1,c&=~S}a!==0&&gt(e,a,n)}function bc(){return(Pe&6)===0?(Go(0),!1):!0}function ld(){if(Ee!==null){if(ze===0)var e=Ee.return;else e=Ee,oa=Mr=null,Th(e),ys=null,Uo=0,e=Ee;for(;e!==null;)Xg(e.alternate,e),e=e.return;Ee=null}}function ws(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,xT(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ld(),je=e,Ee=a=aa(e.current,null),we=n,ze=0,ci=null,Ga=!1,bs=Ct(e,n),ed=!1,Ts=_i=nd=wr=Va=an=0,$n=Io=null,id=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Lt(o),f=1<<c;n|=e[c],o&=~f}return ma=n,ql(),a}function hv(e,n){xe=null,P.H=fc,n===Mo||n===ec?(n=C0(),ze=3):n===A0?(n=C0(),ze=4):ze=n===Dg?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ci=n,Ee===null&&(an=1,gc(e,di(n,e.current)))}function dv(){var e=P.H;return P.H=fc,e===null?fc:e}function pv(){var e=P.A;return P.A=$b,e}function cd(){an=4,Ga||(we&4194048)!==we&&vi.current!==null||(bs=!0),(Va&134217727)===0&&(wr&134217727)===0||je===null||Wa(je,we,_i,!1)}function ud(e,n,a){var o=Pe;Pe|=2;var c=dv(),f=pv();(je!==e||we!==n)&&(Ec=null,ws(e,n)),n=!1;var S=an;t:do try{if(ze!==0&&Ee!==null){var A=Ee,B=ci;switch(ze){case 8:ld(),S=6;break t;case 3:case 2:case 9:case 6:vi.current===null&&(n=!0);var nt=ze;if(ze=0,ci=null,Cs(e,A,B,nt),a&&bs){S=0;break t}break;default:nt=ze,ze=0,ci=null,Cs(e,A,B,nt)}}nT(),S=an;break}catch(ht){hv(e,ht)}while(!0);return n&&e.shellSuspendCounter++,oa=Mr=null,Pe=o,P.H=c,P.A=f,Ee===null&&(je=null,we=0,ql()),S}function nT(){for(;Ee!==null;)mv(Ee)}function iT(e,n){var a=Pe;Pe|=2;var o=dv(),c=pv();je!==e||we!==n?(Ec=null,Mc=Ft()+500,ws(e,n)):bs=Ct(e,n);t:do try{if(ze!==0&&Ee!==null){n=Ee;var f=ci;e:switch(ze){case 1:ze=0,ci=null,Cs(e,n,f,1);break;case 2:case 9:if(R0(f)){ze=0,ci=null,gv(n);break}n=function(){ze!==2&&ze!==9||je!==e||(ze=7),Wi(e)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:R0(f)?(ze=0,ci=null,gv(n)):(ze=0,ci=null,Cs(e,n,f,7));break;case 5:var S=null;switch(Ee.tag){case 26:S=Ee.memoizedState;case 5:case 27:var A=Ee;if(!S||Qv(S)){ze=0,ci=null;var B=A.sibling;if(B!==null)Ee=B;else{var nt=A.return;nt!==null?(Ee=nt,Tc(nt)):Ee=null}break e}}ze=0,ci=null,Cs(e,n,f,5);break;case 6:ze=0,ci=null,Cs(e,n,f,6);break;case 8:ld(),an=6;break t;default:throw Error(r(462))}}aT();break}catch(ht){hv(e,ht)}while(!0);return oa=Mr=null,P.H=o,P.A=c,Pe=a,Ee!==null?0:(je=null,we=0,ql(),an)}function aT(){for(;Ee!==null&&!ie();)mv(Ee)}function mv(e){var n=Vg(e.alternate,e,ma);e.memoizedProps=e.pendingProps,n===null?Tc(e):Ee=n}function gv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=zg(a,n,n.pendingProps,n.type,void 0,we);break;case 11:n=zg(a,n,n.pendingProps,n.type.render,n.ref,we);break;case 5:Th(n);default:Xg(a,n),n=Ee=v0(n,ma),n=Vg(a,n,ma)}e.memoizedProps=e.pendingProps,n===null?Tc(e):Ee=n}function Cs(e,n,a,o){oa=Mr=null,Th(n),ys=null,Uo=0;var c=n.return;try{if(Yb(e,c,n,a,we)){an=1,gc(e,di(a,e.current)),Ee=null;return}}catch(f){if(c!==null)throw Ee=c,f;an=1,gc(e,di(a,e.current)),Ee=null;return}n.flags&32768?(Ne||o===1?e=!0:bs||(we&536870912)!==0?e=!1:(Ga=e=!0,(o===2||o===9||o===3||o===6)&&(o=vi.current,o!==null&&o.tag===13&&(o.flags|=16384))),vv(n,e)):Tc(n)}function Tc(e){var n=e;do{if((n.flags&32768)!==0){vv(n,Ga);return}e=n.return;var a=jb(n.alternate,n,ma);if(a!==null){Ee=a;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=e}while(n!==null);an===0&&(an=5)}function vv(e,n){do{var a=Kb(e.alternate,e);if(a!==null){a.flags&=32767,Ee=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=a}while(e!==null);an=6,Ee=null}function _v(e,n,a,o,c,f,S,A,B){e.cancelPendingCommit=null;do Ac();while(Cn!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=th,Mt(e,a,f,S,A,B),e===je&&(Ee=je=null,we=0),As=n,Xa=e,Rs=a,rd=f,sd=c,lv=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,lT(Ye,function(){return Ev(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,c=Q.p,Q.p=2,S=Pe,Pe|=4;try{Qb(e,n,a)}finally{Pe=S,Q.p=c,P.T=o}}Cn=1,xv(),yv(),Sv()}}function xv(){if(Cn===1){Cn=0;var e=Xa,n=As,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=Q.p;Q.p=2;var c=Pe;Pe|=4;try{ev(n,e);var f=Md,S=o0(e.containerInfo),A=f.focusedElem,B=f.selectionRange;if(S!==A&&A&&A.ownerDocument&&s0(A.ownerDocument.documentElement,A)){if(B!==null&&jf(A)){var nt=B.start,ht=B.end;if(ht===void 0&&(ht=nt),"selectionStart"in A)A.selectionStart=nt,A.selectionEnd=Math.min(ht,A.value.length);else{var vt=A.ownerDocument||document,it=vt&&vt.defaultView||window;if(it.getSelection){var at=it.getSelection(),ce=A.textContent.length,ne=Math.min(B.start,ce),Ve=B.end===void 0?ne:Math.min(B.end,ce);!at.extend&&ne>Ve&&(S=Ve,Ve=ne,ne=S);var Y=r0(A,ne),V=r0(A,Ve);if(Y&&V&&(at.rangeCount!==1||at.anchorNode!==Y.node||at.anchorOffset!==Y.offset||at.focusNode!==V.node||at.focusOffset!==V.offset)){var $=vt.createRange();$.setStart(Y.node,Y.offset),at.removeAllRanges(),ne>Ve?(at.addRange($),at.extend(V.node,V.offset)):($.setEnd(V.node,V.offset),at.addRange($))}}}}for(vt=[],at=A;at=at.parentNode;)at.nodeType===1&&vt.push({element:at,left:at.scrollLeft,top:at.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var pt=vt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Fc=!!Sd,Md=Sd=null}finally{Pe=c,Q.p=o,P.T=a}}e.current=n,Cn=2}}function yv(){if(Cn===2){Cn=0;var e=Xa,n=As,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=Q.p;Q.p=2;var c=Pe;Pe|=4;try{Qg(e,n.alternate,n)}finally{Pe=c,Q.p=o,P.T=a}}Cn=3}}function Sv(){if(Cn===4||Cn===3){Cn=0,Qt();var e=Xa,n=As,a=Rs,o=lv;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Cn=5:(Cn=0,As=Xa=null,Mv(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(ka=null),Re(a),n=n.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,c=Q.p,Q.p=2,P.T=null;try{for(var f=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];f(A.value,{componentStack:A.stack})}}finally{P.T=n,Q.p=c}}(Rs&3)!==0&&Ac(),Wi(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===od?Ho++:(Ho=0,od=e):Ho=0,Go(0)}}function Mv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,yo(n)))}function Ac(e){return xv(),yv(),Sv(),Ev()}function Ev(){if(Cn!==5)return!1;var e=Xa,n=rd;rd=0;var a=Re(Rs),o=P.T,c=Q.p;try{Q.p=32>a?32:a,P.T=null,a=sd,sd=null;var f=Xa,S=Rs;if(Cn=0,As=Xa=null,Rs=0,(Pe&6)!==0)throw Error(r(331));var A=Pe;if(Pe|=4,sv(f.current),iv(f,f.current,S,a),Pe=A,Go(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{Q.p=c,P.T=o,Mv(e,n)}}function bv(e,n,a){n=di(a,n),n=Ih(e.stateNode,n,2),e=Oa(e,n,2),e!==null&&(Ht(e,2),Wi(e))}function qe(e,n,a){if(e.tag===3)bv(e,e,a);else for(;n!==null;){if(n.tag===3){bv(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){e=di(a,e),a=wg(2),o=Oa(n,a,2),o!==null&&(Cg(a,o,n,e),Ht(o,2),Wi(o));break}}n=n.return}}function fd(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new tT;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(ed=!0,c.add(a),e=rT.bind(null,e,n,a),n.then(e,e))}function rT(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(we&a)===a&&(an===4||an===3&&(we&62914560)===we&&300>Ft()-ad?(Pe&2)===0&&ws(e,0):nd|=a,Ts===we&&(Ts=0)),Wi(e)}function Tv(e,n){n===0&&(n=Et()),e=us(e,n),e!==null&&(Ht(e,n),Wi(e))}function sT(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Tv(e,a)}function oT(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Tv(e,a)}function lT(e,n){return H(e,n)}var Rc=null,Ds=null,hd=!1,wc=!1,dd=!1,Cr=0;function Wi(e){e!==Ds&&e.next===null&&(Ds===null?Rc=Ds=e:Ds=Ds.next=e),wc=!0,hd||(hd=!0,uT())}function Go(e,n){if(!dd&&wc){dd=!0;do for(var a=!1,o=Rc;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var S=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Lt(42|e)+1)-1,f&=c&~(S&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Cv(o,f))}else f=we,f=Vt(o,o===je?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ct(o,f)||(a=!0,Cv(o,f));o=o.next}while(a);dd=!1}}function cT(){Av()}function Av(){wc=hd=!1;var e=0;Cr!==0&&(_T()&&(e=Cr),Cr=0);for(var n=Ft(),a=null,o=Rc;o!==null;){var c=o.next,f=Rv(o,n);f===0?(o.next=null,a===null?Rc=c:a.next=c,c===null&&(Ds=a)):(a=o,(e!==0||(f&3)!==0)&&(wc=!0)),o=c}Go(e)}function Rv(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Lt(f),A=1<<S,B=c[S];B===-1?((A&a)===0||(A&o)!==0)&&(c[S]=ae(A,n)):B<=n&&(e.expiredLanes|=A),f&=~A}if(n=je,a=we,a=Vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ue(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ue(o),Re(a)){case 2:case 8:a=fe;break;case 32:a=Ye;break;case 268435456:a=N;break;default:a=Ye}return o=wv.bind(null,e),a=H(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ue(o),e.callbackPriority=2,e.callbackNode=null,2}function wv(e,n){if(Cn!==0&&Cn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ac()&&e.callbackNode!==a)return null;var o=we;return o=Vt(e,e===je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(uv(e,o,n),Rv(e,Ft()),e.callbackNode!=null&&e.callbackNode===a?wv.bind(null,e):null)}function Cv(e,n){if(Ac())return null;uv(e,n,!0)}function uT(){yT(function(){(Pe&6)!==0?H(It,cT):Av()})}function pd(){return Cr===0&&(Cr=k()),Cr}function Dv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Il(""+e)}function Uv(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function fT(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=Dv((c[Oe]||null).action),S=o.submitter;S&&(n=(n=S[Oe]||null)?Dv(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new kl("action","action",null,o,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Cr!==0){var B=S?Uv(c,S):new FormData(c);Oh(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(A.preventDefault(),B=S?Uv(c,S):new FormData(c),Oh(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var md=0;md<$f.length;md++){var gd=$f[md],hT=gd.toLowerCase(),dT=gd[0].toUpperCase()+gd.slice(1);Li(hT,"on"+dT)}Li(u0,"onAnimationEnd"),Li(f0,"onAnimationIteration"),Li(h0,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(Db,"onTransitionRun"),Li(Ub,"onTransitionStart"),Li(Lb,"onTransitionCancel"),Li(d0,"onTransitionEnd"),q("onMouseEnter",["mouseout","mouseover"]),q("onMouseLeave",["mouseout","mouseover"]),q("onPointerEnter",["pointerout","pointerover"]),q("onPointerLeave",["pointerout","pointerover"]),R("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),R("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),R("onBeforeInput",["compositionend","keypress","textInput","paste"]),R("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),R("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function Lv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],B=A.instance,nt=A.currentTarget;if(A=A.listener,B!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=nt;try{f(c)}catch(ht){mc(ht)}c.currentTarget=null,f=B}else for(S=0;S<o.length;S++){if(A=o[S],B=A.instance,nt=A.currentTarget,A=A.listener,B!==f&&c.isPropagationStopped())break t;f=A,c.currentTarget=nt;try{f(c)}catch(ht){mc(ht)}c.currentTarget=null,f=B}}}}function be(e,n){var a=n[de];a===void 0&&(a=n[de]=new Set);var o=e+"__bubble";a.has(o)||(Nv(n,e,2,!1),a.add(o))}function vd(e,n,a){var o=0;n&&(o|=4),Nv(a,e,o,n)}var Cc="_reactListening"+Math.random().toString(36).slice(2);function _d(e){if(!e[Cc]){e[Cc]=!0,Bl.forEach(function(a){a!=="selectionchange"&&(pT.has(a)||vd(a,!1,e),vd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Cc]||(n[Cc]=!0,vd("selectionchange",!1,n))}}function Nv(e,n,a,o){switch(i_(n)){case 2:var c=GT;break;case 8:c=VT;break;default:c=Ld}a=c.bind(null,n,a,e),c=void 0,!Hf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function xd(e,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===c)break;if(S===4)for(S=o.return;S!==null;){var B=S.tag;if((B===3||B===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;A!==null;){if(S=Ci(A),S===null)return;if(B=S.tag,B===5||B===6||B===26||B===27){o=f=S;continue t}A=A.parentNode}}o=o.return}Hm(function(){var nt=f,ht=Ff(a),vt=[];t:{var it=p0.get(e);if(it!==void 0){var at=kl,ce=e;switch(e){case"keypress":if(Gl(a)===0)break t;case"keydown":case"keyup":at=lb;break;case"focusin":ce="focus",at=Xf;break;case"focusout":ce="blur",at=Xf;break;case"beforeblur":case"afterblur":at=Xf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=K1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=fb;break;case u0:case f0:case h0:at=$1;break;case d0:at=db;break;case"scroll":case"scrollend":at=Z1;break;case"wheel":at=mb;break;case"copy":case"cut":case"paste":at=eb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Wm;break;case"toggle":case"beforetoggle":at=vb}var ne=(n&4)!==0,Ve=!ne&&(e==="scroll"||e==="scrollend"),Y=ne?it!==null?it+"Capture":null:it;ne=[];for(var V=nt,$;V!==null;){var pt=V;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||Y===null||(pt=so(V,Y),pt!=null&&ne.push(ko(V,pt,$))),Ve)break;V=V.return}0<ne.length&&(it=new at(it,ce,null,a,ht),vt.push({event:it,listeners:ne}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",at=e==="mouseout"||e==="pointerout",it&&a!==Bf&&(ce=a.relatedTarget||a.fromElement)&&(Ci(ce)||ce[Ut]))break t;if((at||it)&&(it=ht.window===ht?ht:(it=ht.ownerDocument)?it.defaultView||it.parentWindow:window,at?(ce=a.relatedTarget||a.toElement,at=nt,ce=ce?Ci(ce):null,ce!==null&&(Ve=u(ce),ne=ce.tag,ce!==Ve||ne!==5&&ne!==27&&ne!==6)&&(ce=null)):(at=null,ce=nt),at!==ce)){if(ne=km,pt="onMouseLeave",Y="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Wm,pt="onPointerLeave",Y="onPointerEnter",V="pointer"),Ve=at==null?it:Di(at),$=ce==null?it:Di(ce),it=new ne(pt,V+"leave",at,a,ht),it.target=Ve,it.relatedTarget=$,pt=null,Ci(ht)===nt&&(ne=new ne(Y,V+"enter",ce,a,ht),ne.target=$,ne.relatedTarget=Ve,pt=ne),Ve=pt,at&&ce)e:{for(ne=at,Y=ce,V=0,$=ne;$;$=Us($))V++;for($=0,pt=Y;pt;pt=Us(pt))$++;for(;0<V-$;)ne=Us(ne),V--;for(;0<$-V;)Y=Us(Y),$--;for(;V--;){if(ne===Y||Y!==null&&ne===Y.alternate)break e;ne=Us(ne),Y=Us(Y)}ne=null}else ne=null;at!==null&&Ov(vt,it,at,ne,!1),ce!==null&&Ve!==null&&Ov(vt,Ve,ce,ne,!0)}}t:{if(it=nt?Di(nt):window,at=it.nodeName&&it.nodeName.toLowerCase(),at==="select"||at==="input"&&it.type==="file")var Xt=$m;else if(Qm(it))if(t0)Xt=Rb;else{Xt=Tb;var ye=bb}else at=it.nodeName,!at||at.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?nt&&zf(nt.elementType)&&(Xt=$m):Xt=Ab;if(Xt&&(Xt=Xt(e,nt))){Jm(vt,Xt,a,ht);break t}ye&&ye(e,it,nt),e==="focusout"&&nt&&it.type==="number"&&nt.memoizedProps.value!=null&&zn(it,"number",it.value)}switch(ye=nt?Di(nt):window,e){case"focusin":(Qm(ye)||ye.contentEditable==="true")&&(os=ye,Kf=nt,mo=null);break;case"focusout":mo=Kf=os=null;break;case"mousedown":Qf=!0;break;case"contextmenu":case"mouseup":case"dragend":Qf=!1,l0(vt,a,ht);break;case"selectionchange":if(Cb)break;case"keydown":case"keyup":l0(vt,a,ht)}var Kt;if(qf)t:{switch(e){case"compositionstart":var se="onCompositionStart";break t;case"compositionend":se="onCompositionEnd";break t;case"compositionupdate":se="onCompositionUpdate";break t}se=void 0}else ss?jm(e,a)&&(se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(qm&&a.locale!=="ko"&&(ss||se!=="onCompositionStart"?se==="onCompositionEnd"&&ss&&(Kt=Gm()):(Da=ht,Gf="value"in Da?Da.value:Da.textContent,ss=!0)),ye=Dc(nt,se),0<ye.length&&(se=new Xm(se,e,null,a,ht),vt.push({event:se,listeners:ye}),Kt?se.data=Kt:(Kt=Km(a),Kt!==null&&(se.data=Kt)))),(Kt=xb?yb(e,a):Sb(e,a))&&(se=Dc(nt,"onBeforeInput"),0<se.length&&(ye=new Xm("onBeforeInput","beforeinput",null,a,ht),vt.push({event:ye,listeners:se}),ye.data=Kt)),fT(vt,e,nt,a,ht)}Lv(vt,n)})}function ko(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Dc(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=so(e,a),c!=null&&o.unshift(ko(e,c,f)),c=so(e,n),c!=null&&o.push(ko(e,c,f))),e.tag===3)return o;e=e.return}return[]}function Us(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ov(e,n,a,o,c){for(var f=n._reactName,S=[];a!==null&&a!==o;){var A=a,B=A.alternate,nt=A.stateNode;if(A=A.tag,B!==null&&B===o)break;A!==5&&A!==26&&A!==27||nt===null||(B=nt,c?(nt=so(a,f),nt!=null&&S.unshift(ko(a,nt,B))):c||(nt=so(a,f),nt!=null&&S.push(ko(a,nt,B)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var mT=/\r\n?/g,gT=/\u0000|\uFFFD/g;function Pv(e){return(typeof e=="string"?e:""+e).replace(mT,`
`).replace(gT,"")}function zv(e,n){return n=Pv(n),Pv(e)===n}function Uc(){}function Ge(e,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||jn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&jn(e,""+o);break;case"className":kt(e,"class",o);break;case"tabIndex":kt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":kt(e,a,o);break;case"style":Fm(e,o,f);break;case"data":if(n!=="object"){kt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Il(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ge(e,n,"name",c.name,c,null),Ge(e,n,"formEncType",c.formEncType,c,null),Ge(e,n,"formMethod",c.formMethod,c,null),Ge(e,n,"formTarget",c.formTarget,c,null)):(Ge(e,n,"encType",c.encType,c,null),Ge(e,n,"method",c.method,c,null),Ge(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Il(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Uc);break;case"onScroll":o!=null&&be("scroll",e);break;case"onScrollEnd":o!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Il(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":be("beforetoggle",e),be("toggle",e),Pt(e,"popover",o);break;case"xlinkActuate":Bt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Bt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Bt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Bt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Bt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Bt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Bt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Pt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=q1.get(a)||a,Pt(e,a,o))}}function yd(e,n,a,o,c,f){switch(a){case"style":Fm(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?jn(e,o):(typeof o=="number"||typeof o=="bigint")&&jn(e,""+o);break;case"onScroll":o!=null&&be("scroll",e);break;case"onScrollEnd":o!=null&&be("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Uc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fl.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[Oe]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Pt(e,a,o)}}}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,f,S,a,null)}}c&&Ge(e,n,"srcSet",a.srcSet,a,null),o&&Ge(e,n,"src",a.src,a,null);return;case"input":be("invalid",e);var A=f=S=c=null,B=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":c=ht;break;case"type":S=ht;break;case"checked":B=ht;break;case"defaultChecked":nt=ht;break;case"value":f=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:Ge(e,n,o,ht,a,null)}}Vn(e,f,A,B,nt,S,c,!1),Me(e);return;case"select":be("invalid",e),o=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Ge(e,n,c,A,a,null)}n=f,a=S,e.multiple=!!o,n!=null?en(e,!!o,n,!1):a!=null&&en(e,!!o,a,!0);return;case"textarea":be("invalid",e),f=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Ge(e,n,S,A,a,null)}is(e,o,c,f),Me(e);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(o=a[B],o!=null))switch(B){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ge(e,n,B,o,a,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(o=0;o<Vo.length;o++)be(Vo[o],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,nt,o,a,null)}return;default:if(zf(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&yd(e,n,ht,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Ge(e,n,A,o,a,null))}function vT(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,A=null,B=null,nt=null,ht=null;for(at in a){var vt=a[at];if(a.hasOwnProperty(at)&&vt!=null)switch(at){case"checked":break;case"value":break;case"defaultValue":B=vt;default:o.hasOwnProperty(at)||Ge(e,n,at,null,o,vt)}}for(var it in o){var at=o[it];if(vt=a[it],o.hasOwnProperty(it)&&(at!=null||vt!=null))switch(it){case"type":f=at;break;case"name":c=at;break;case"checked":nt=at;break;case"defaultChecked":ht=at;break;case"value":S=at;break;case"defaultValue":A=at;break;case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:at!==vt&&Ge(e,n,it,at,o,vt)}}We(e,S,A,B,nt,ht,f,c);return;case"select":at=S=A=it=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":at=B;default:o.hasOwnProperty(f)||Ge(e,n,f,null,o,B)}for(c in o)if(f=o[c],B=a[c],o.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":it=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==B&&Ge(e,n,c,f,o,B)}n=A,a=S,o=at,it!=null?en(e,!!a,it,!1):!!o!=!!a&&(n!=null?en(e,!!a,n,!0):en(e,!!a,a?[]:"",!1));return;case"textarea":at=it=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ge(e,n,A,null,o,c)}for(S in o)if(c=o[S],f=a[S],o.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":it=c;break;case"defaultValue":at=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ge(e,n,S,c,o,f)}Rn(e,it,at);return;case"option":for(var ce in a)if(it=a[ce],a.hasOwnProperty(ce)&&it!=null&&!o.hasOwnProperty(ce))switch(ce){case"selected":e.selected=!1;break;default:Ge(e,n,ce,null,o,it)}for(B in o)if(it=o[B],at=a[B],o.hasOwnProperty(B)&&it!==at&&(it!=null||at!=null))switch(B){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Ge(e,n,B,it,o,at)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)it=a[ne],a.hasOwnProperty(ne)&&it!=null&&!o.hasOwnProperty(ne)&&Ge(e,n,ne,null,o,it);for(nt in o)if(it=o[nt],at=a[nt],o.hasOwnProperty(nt)&&it!==at&&(it!=null||at!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Ge(e,n,nt,it,o,at)}return;default:if(zf(n)){for(var Ve in a)it=a[Ve],a.hasOwnProperty(Ve)&&it!==void 0&&!o.hasOwnProperty(Ve)&&yd(e,n,Ve,void 0,o,it);for(ht in o)it=o[ht],at=a[ht],!o.hasOwnProperty(ht)||it===at||it===void 0&&at===void 0||yd(e,n,ht,it,o,at);return}}for(var Y in a)it=a[Y],a.hasOwnProperty(Y)&&it!=null&&!o.hasOwnProperty(Y)&&Ge(e,n,Y,null,o,it);for(vt in o)it=o[vt],at=a[vt],!o.hasOwnProperty(vt)||it===at||it==null&&at==null||Ge(e,n,vt,it,o,at)}var Sd=null,Md=null;function Lc(e){return e.nodeType===9?e:e.ownerDocument}function Bv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ed(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var bd=null;function _T(){var e=window.event;return e&&e.type==="popstate"?e===bd?!1:(bd=e,!0):(bd=null,!1)}var Iv=typeof setTimeout=="function"?setTimeout:void 0,xT=typeof clearTimeout=="function"?clearTimeout:void 0,Hv=typeof Promise=="function"?Promise:void 0,yT=typeof queueMicrotask=="function"?queueMicrotask:typeof Hv<"u"?function(e){return Hv.resolve(null).then(e).catch(ST)}:Iv;function ST(e){setTimeout(function(){throw e})}function qa(e){return e==="head"}function Gv(e,n){var a=n,o=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<o&&8>o){a=o;var S=e.ownerDocument;if(a&1&&Xo(S.documentElement),a&2&&Xo(S.body),a&4)for(a=S.head,Xo(a),S=a.firstChild;S;){var A=S.nextSibling,B=S.nodeName;S[Yn]||B==="SCRIPT"||B==="STYLE"||B==="LINK"&&S.rel.toLowerCase()==="stylesheet"||a.removeChild(S),S=A}}if(c===0){e.removeChild(f),Jo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=f}while(a);Jo(n)}function Td(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Td(a),Zn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function MT(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Yn])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Oi(e.nextSibling),e===null)break}return null}function ET(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Oi(e.nextSibling),e===null))return null;return e}function Ad(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function bT(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Oi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Rd=null;function Vv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function kv(e,n,a){switch(n=Lc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Xo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Zn(e)}var xi=new Map,Xv=new Set;function Nc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ga=Q.d;Q.d={f:TT,r:AT,D:RT,C:wT,L:CT,m:DT,X:LT,S:UT,M:NT};function TT(){var e=ga.f(),n=bc();return e||n}function AT(e){var n=Hi(e);n!==null&&n.tag===5&&n.type==="form"?ug(n):ga.r(e)}var Ls=typeof document>"u"?null:document;function Wv(e,n,a){var o=Ls;if(o&&typeof n=="string"&&n){var c=En(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Xv.has(c)||(Xv.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Dn(n,"link",e),hn(n),o.head.appendChild(n)))}}function RT(e){ga.D(e),Wv("dns-prefetch",e,null)}function wT(e,n){ga.C(e,n),Wv("preconnect",e,n)}function CT(e,n,a){ga.L(e,n,a);var o=Ls;if(o&&e&&n){var c='link[rel="preload"][as="'+En(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+En(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+En(a.imageSizes)+'"]')):c+='[href="'+En(e)+'"]';var f=c;switch(n){case"style":f=Ns(e);break;case"script":f=Os(e)}xi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),xi.set(f,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Wo(f))||n==="script"&&o.querySelector(qo(f))||(n=o.createElement("link"),Dn(n,"link",e),hn(n),o.head.appendChild(n)))}}function DT(e,n){ga.m(e,n);var a=Ls;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+En(o)+'"][href="'+En(e)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Os(e)}if(!xi.has(f)&&(e=g({rel:"modulepreload",href:e},n),xi.set(f,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(qo(f)))return}o=a.createElement("link"),Dn(o,"link",e),hn(o),a.head.appendChild(o)}}}function UT(e,n,a){ga.S(e,n,a);var o=Ls;if(o&&e){var c=Ca(o).hoistableStyles,f=Ns(e);n=n||"default";var S=c.get(f);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(Wo(f)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=xi.get(f))&&wd(e,a);var B=S=o.createElement("link");hn(B),Dn(B,"link",e),B._p=new Promise(function(nt,ht){B.onload=nt,B.onerror=ht}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Oc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},c.set(f,S)}}}function LT(e,n){ga.X(e,n);var a=Ls;if(a&&e){var o=Ca(a).hoistableScripts,c=Os(e),f=o.get(c);f||(f=a.querySelector(qo(c)),f||(e=g({src:e,async:!0},n),(n=xi.get(c))&&Cd(e,n),f=a.createElement("script"),hn(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function NT(e,n){ga.M(e,n);var a=Ls;if(a&&e){var o=Ca(a).hoistableScripts,c=Os(e),f=o.get(c);f||(f=a.querySelector(qo(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=xi.get(c))&&Cd(e,n),f=a.createElement("script"),hn(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function qv(e,n,a,o){var c=(c=J.current)?Nc(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ns(a.href),a=Ca(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ns(a.href);var f=Ca(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(Wo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),xi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xi.set(e,a),f||OT(c,e,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Os(a),a=Ca(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ns(e){return'href="'+En(e)+'"'}function Wo(e){return'link[rel="stylesheet"]['+e+"]"}function Yv(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function OT(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),hn(n),e.head.appendChild(n))}function Os(e){return'[src="'+En(e)+'"]'}function qo(e){return"script[async]"+e}function Zv(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+En(a.href)+'"]');if(o)return n.instance=o,hn(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),hn(o),Dn(o,"style",c),Oc(o,a.precedence,e),n.instance=o;case"stylesheet":c=Ns(a.href);var f=e.querySelector(Wo(c));if(f)return n.state.loading|=4,n.instance=f,hn(f),f;o=Yv(a),(c=xi.get(c))&&wd(o,c),f=(e.ownerDocument||e).createElement("link"),hn(f);var S=f;return S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),Dn(f,"link",o),n.state.loading|=4,Oc(f,a.precedence,e),n.instance=f;case"script":return f=Os(a.src),(c=e.querySelector(qo(f)))?(n.instance=c,hn(c),c):(o=a,(c=xi.get(f))&&(o=g({},a),Cd(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),hn(c),Dn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Oc(o,a.precedence,e));return n.instance}function Oc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function wd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Cd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Pc=null;function jv(e,n,a){if(Pc===null){var o=new Map,c=Pc=new Map;c.set(a,o)}else c=Pc,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Yn]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(f):o.set(S,[f])}}return o}function Kv(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function PT(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Qv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Yo=null;function zT(){}function BT(e,n,a){if(Yo===null)throw Error(r(475));var o=Yo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Ns(a.href),f=e.querySelector(Wo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=zc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=f,hn(f);return}f=e.ownerDocument||e,a=Yv(a),(c=xi.get(c))&&wd(a,c),f=f.createElement("link"),hn(f);var S=f;S._p=new Promise(function(A,B){S.onload=A,S.onerror=B}),Dn(f,"link",a),n.instance=f}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=zc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function FT(){if(Yo===null)throw Error(r(475));var e=Yo;return e.stylesheets&&e.count===0&&Dd(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Dd(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function zc(){if(this.count--,this.count===0){if(this.stylesheets)Dd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bc=null;function Dd(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bc=new Map,n.forEach(IT,e),Bc=null,zc.call(e))}function IT(e,n){if(!(n.state.loading&4)){var a=Bc.get(e);if(a)var o=a.get(null);else{a=new Map,Bc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||o,f===o&&a.set(null,c),a.set(S,c),this.count++,o=zc.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Zo={$$typeof:O,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function HT(e,n,a,o,c,f,S,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Jv(e,n,a,o,c,f,S,A,B,nt,ht,vt){return e=new HT(e,n,a,S,A,B,nt,vt),n=1,f===!0&&(n|=24),f=si(3,null,null,n),e.current=f,f.stateNode=e,n=fh(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},mh(f),e}function $v(e){return e?(e=fs,e):fs}function t_(e,n,a,o,c,f){c=$v(c),o.context===null?o.context=c:o.pendingContext=c,o=Na(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Oa(e,o,n),a!==null&&(fi(a,e,n),bo(a,e,n))}function e_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Ud(e,n){e_(e,n),(e=e.alternate)&&e_(e,n)}function n_(e){if(e.tag===13){var n=us(e,67108864);n!==null&&fi(n,e,67108864),Ud(e,67108864)}}var Fc=!0;function GT(e,n,a,o){var c=P.T;P.T=null;var f=Q.p;try{Q.p=2,Ld(e,n,a,o)}finally{Q.p=f,P.T=c}}function VT(e,n,a,o){var c=P.T;P.T=null;var f=Q.p;try{Q.p=8,Ld(e,n,a,o)}finally{Q.p=f,P.T=c}}function Ld(e,n,a,o){if(Fc){var c=Nd(o);if(c===null)xd(e,n,o,Ic,a),a_(e,o);else if(XT(c,e,n,a,o))o.stopPropagation();else if(a_(e,o),n&4&&-1<kT.indexOf(e)){for(;c!==null;){var f=Hi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Yt(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var B=1<<31-Lt(S);A.entanglements[1]|=B,S&=~B}Wi(f),(Pe&6)===0&&(Mc=Ft()+500,Go(0))}}break;case 13:A=us(f,2),A!==null&&fi(A,f,2),bc(),Ud(f,2)}if(f=Nd(o),f===null&&xd(e,n,o,Ic,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else xd(e,n,o,null,a)}}function Nd(e){return e=Ff(e),Od(e)}var Ic=null;function Od(e){if(Ic=null,e=Ci(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ic=e,null}function i_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(le()){case It:return 2;case fe:return 8;case Ye:case Fe:return 32;case N:return 268435456;default:return 32}default:return 32}}var Pd=!1,Ya=null,Za=null,ja=null,jo=new Map,Ko=new Map,Ka=[],kT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function a_(e,n){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(n.pointerId)}}function Qo(e,n,a,o,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Hi(n),n!==null&&n_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function XT(e,n,a,o,c){switch(n){case"focusin":return Ya=Qo(Ya,e,n,a,o,c),!0;case"dragenter":return Za=Qo(Za,e,n,a,o,c),!0;case"mouseover":return ja=Qo(ja,e,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return jo.set(f,Qo(jo.get(f)||null,e,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,Ko.set(f,Qo(Ko.get(f)||null,e,n,a,o,c)),!0}return!1}function r_(e){var n=Ci(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,ai(e.priority,function(){if(a.tag===13){var o=ui();o=oe(o);var c=us(a,o);c!==null&&fi(c,a,o),Ud(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Nd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Bf=o,a.target.dispatchEvent(o),Bf=null}else return n=Hi(a),n!==null&&n_(n),e.blockedOn=a,!1;n.shift()}return!0}function s_(e,n,a){Hc(e)&&a.delete(n)}function WT(){Pd=!1,Ya!==null&&Hc(Ya)&&(Ya=null),Za!==null&&Hc(Za)&&(Za=null),ja!==null&&Hc(ja)&&(ja=null),jo.forEach(s_),Ko.forEach(s_)}function Gc(e,n){e.blockedOn===n&&(e.blockedOn=null,Pd||(Pd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,WT)))}var Vc=null;function o_(e){Vc!==e&&(Vc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Vc===e&&(Vc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Od(o||a)===null)continue;break}var f=Hi(a);f!==null&&(e.splice(n,3),n-=3,Oh(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Jo(e){function n(B){return Gc(B,e)}Ya!==null&&Gc(Ya,e),Za!==null&&Gc(Za,e),ja!==null&&Gc(ja,e),jo.forEach(n),Ko.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)r_(a),a.blockedOn===null&&Ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],S=c[Oe]||null;if(typeof f=="function")S||o_(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[Oe]||null)A=S.formAction;else if(Od(c)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),o_(a)}}}function zd(e){this._internalRoot=e}kc.prototype.render=zd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ui();t_(a,o,e,n,null,null)},kc.prototype.unmount=zd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;t_(e.current,2,null,e,null,null),bc(),n[Ut]=null}};function kc(e){this._internalRoot=e}kc.prototype.unstable_scheduleHydration=function(e){if(e){var n=he();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,e),a===0&&r_(e)}};var l_=t.version;if(l_!=="19.1.1")throw Error(r(527,l_,"19.1.1"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var qT={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xc.isDisabled&&Xc.supportsFiber)try{ut=Xc.inject(qT),dt=Xc}catch{}}return zs.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=bg,f=Tg,S=Ag,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=Jv(e,1,!1,null,null,a,o,c,f,S,A,null),e[Ut]=n.current,_d(e),new zd(n)},zs.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",f=bg,S=Tg,A=Ag,B=null,nt=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(B=a.unstable_transitionCallbacks),a.formState!==void 0&&(nt=a.formState)),n=Jv(e,1,!0,n,a??null,o,c,f,S,A,B,nt),n.context=$v(null),a=n.current,o=ui(),o=oe(o),c=Na(o),c.callback=null,Oa(a,c,o),a=o,n.current.lanes=a,Ht(n,a),Wi(n),e[Ut]=n.current,_d(e),new kc(n)},zs.version="19.1.1",zs}var Yd;function v_(){if(Yd)return Zc.exports;Yd=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Zc.exports=g_(),Zc.exports}var __=v_(),x_=Wd();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jc="180",y_=0,Zd=1,S_=2,jd=1,M_=2,qi=3,va=0,Xn=1,Yi=2,_a=0,Ja=1,$c=2,Kd=3,Qd=4,E_=5,$a=100,b_=101,T_=102,A_=103,R_=104,w_=200,C_=201,D_=202,U_=203,tu=204,eu=205,L_=206,N_=207,O_=208,P_=209,z_=210,B_=211,F_=212,I_=213,H_=214,nu=0,iu=1,au=2,Dr=3,ru=4,su=5,ou=6,lu=7,Jd=0,G_=1,V_=2,xa=0,k_=1,X_=2,W_=3,q_=4,Y_=5,Z_=6,j_=7,$d=300,Ur=301,Lr=302,cu=303,uu=304,$o=306,fu=1e3,tr=1001,hu=1002,yi=1003,K_=1004,tl=1005,Pi=1006,du=1007,er=1008,Zi=1009,tp=1010,ep=1011,Bs=1012,pu=1013,nr=1014,ji=1015,Fs=1016,mu=1017,gu=1018,Is=1020,np=35902,ip=35899,ap=1021,rp=1022,Si=1023,Hs=1026,Gs=1027,sp=1028,vu=1029,op=1030,_u=1031,xu=1033,el=33776,nl=33777,il=33778,al=33779,yu=35840,Su=35841,Mu=35842,Eu=35843,bu=36196,Tu=37492,Au=37496,Ru=37808,wu=37809,Cu=37810,Du=37811,Uu=37812,Lu=37813,Nu=37814,Ou=37815,Pu=37816,zu=37817,Bu=37818,Fu=37819,Iu=37820,Hu=37821,Gu=36492,Vu=36494,ku=36495,Xu=36283,Wu=36284,qu=36285,Yu=36286,Q_=3200,J_=3201,$_=0,tx=1,ya="",ti="srgb",Nr="srgb-linear",rl="linear",Be="srgb",Or=7680,lp=519,ex=512,nx=513,ix=514,cp=515,ax=516,rx=517,sx=518,ox=519,up=35044,fp="300 es",zi=2e3,sl=2001;class Pr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hp=1234567;const Vs=Math.PI/180,ks=180/Math.PI;function zr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Te(s,t,i){return Math.max(t,Math.min(i,s))}function Zu(s,t){return(s%t+t)%t}function lx(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function cx(s,t,i){return s!==t?(i-s)/(t-s):0}function Xs(s,t,i){return(1-i)*s+i*t}function ux(s,t,i,r){return Xs(s,t,1-Math.exp(-i*r))}function fx(s,t=1){return t-Math.abs(Zu(s,t*2)-t)}function hx(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function dx(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function px(s,t){return s+Math.floor(Math.random()*(t-s+1))}function mx(s,t){return s+Math.random()*(t-s)}function gx(s){return s*(.5-Math.random())}function vx(s){s!==void 0&&(hp=s);let t=hp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _x(s){return s*Vs}function xx(s){return s*ks}function yx(s){return(s&s-1)===0&&s!==0}function Sx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Mx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ex(s,t,i,r,l){const u=Math.cos,h=Math.sin,d=u(i/2),m=h(i/2),p=u((t+r)/2),g=h((t+r)/2),x=u((t-r)/2),v=h((t-r)/2),y=u((r-t)/2),E=h((r-t)/2);switch(l){case"XYX":s.set(d*g,m*x,m*v,d*p);break;case"YZY":s.set(m*v,d*g,m*x,d*p);break;case"ZXZ":s.set(m*x,m*v,d*g,d*p);break;case"XZX":s.set(d*g,m*E,m*y,d*p);break;case"YXY":s.set(m*y,d*g,m*E,d*p);break;case"ZYZ":s.set(m*E,m*y,d*g,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Br(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Fr={DEG2RAD:Vs,RAD2DEG:ks,generateUUID:zr,clamp:Te,euclideanModulo:Zu,mapLinear:lx,inverseLerp:cx,lerp:Xs,damp:ux,pingpong:fx,smoothstep:hx,smootherstep:dx,randInt:px,randFloat:mx,randFloatSpread:gx,seededRandom:vx,degToRad:_x,radToDeg:xx,isPowerOfTwo:yx,ceilPowerOfTwo:Sx,floorPowerOfTwo:Mx,setQuaternionFromProperEuler:Ex,normalize:Fn,denormalize:Br};class Ae{constructor(t=0,i=0){Ae.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Te(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ws{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3];const v=u[h+0],y=u[h+1],E=u[h+2],D=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(d===1){t[i+0]=v,t[i+1]=y,t[i+2]=E,t[i+3]=D;return}if(x!==D||m!==v||p!==y||g!==E){let M=1-d;const _=m*v+p*y+g*E+x*D,G=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const b=Math.sqrt(O),z=Math.atan2(b,_*G);M=Math.sin(M*z)/b,d=Math.sin(d*z)/b}const U=d*G;if(m=m*M+v*U,p=p*M+y*U,g=g*M+E*U,x=x*M+D*U,M===1-d){const b=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=b,p*=b,g*=b,x*=b}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=u[h],v=u[h+1],y=u[h+2],E=u[h+3];return t[i]=d*E+g*x+m*y-p*v,t[i+1]=m*E+g*v+p*x-d*y,t[i+2]=p*E+g*y+d*v-m*x,t[i+3]=g*E-d*x-m*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),x=d(u/2),v=m(r/2),y=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=v*g*x+p*y*E,this._y=p*y*x-v*g*E,this._z=p*g*E+v*y*x,this._w=p*g*x-v*y*E;break;case"YXZ":this._x=v*g*x+p*y*E,this._y=p*y*x-v*g*E,this._z=p*g*E-v*y*x,this._w=p*g*x+v*y*E;break;case"ZXY":this._x=v*g*x-p*y*E,this._y=p*y*x+v*g*E,this._z=p*g*E+v*y*x,this._w=p*g*x-v*y*E;break;case"ZYX":this._x=v*g*x-p*y*E,this._y=p*y*x+v*g*E,this._z=p*g*E-v*y*x,this._w=p*g*x+v*y*E;break;case"YZX":this._x=v*g*x+p*y*E,this._y=p*y*x+v*g*E,this._z=p*g*E-v*y*x,this._w=p*g*x-v*y*E;break;case"XZY":this._x=v*g*x-p*y*E,this._y=p*y*x-v*g*E,this._z=p*g*E+v*y*x,this._w=p*g*x+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],v=r+d+x;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-p)*y,this._z=(h-l)*y}else if(r>d&&r>x){const y=2*Math.sqrt(1+r-d-x);this._w=(g-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+p)/y}else if(d>x){const y=2*Math.sqrt(1+d-r-x);this._w=(u-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+x-r-d);this._w=(h-l)/y,this._x=(u+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-r*p,this._z=u*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),x=Math.sin((1-i)*g)/p,v=Math.sin(i*g)/p;return this._w=h*x+this._w*v,this._x=r*x+this._x*v,this._y=l*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(t=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(dp.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(dp.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-u*l),x=2*(u*r-h*i);return this.x=i+m*p+h*x-d*g,this.y=r+m*g+d*p-u*x,this.z=l+m*x+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this.z=Te(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this.z=Te(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return ju.copy(this).projectOnVector(t),this.sub(ju)}reflect(t){return this.sub(ju.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Te(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ju=new rt,dp=new Ws;class me{constructor(t,i,r,l,u,h,d,m,p){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],x=r[7],v=r[2],y=r[5],E=r[8],D=l[0],M=l[3],_=l[6],G=l[1],O=l[4],U=l[7],b=l[2],z=l[5],F=l[8];return u[0]=h*D+d*G+m*b,u[3]=h*M+d*O+m*z,u[6]=h*_+d*U+m*F,u[1]=p*D+g*G+x*b,u[4]=p*M+g*O+x*z,u[7]=p*_+g*U+x*F,u[2]=v*D+y*G+E*b,u[5]=v*M+y*O+E*z,u[8]=v*_+y*U+E*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*u*g+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=g*h-d*p,v=d*m-g*u,y=p*u-h*m,E=i*x+r*v+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/E;return t[0]=x*D,t[1]=(l*p-g*r)*D,t[2]=(d*r-l*h)*D,t[3]=v*D,t[4]=(g*i-l*m)*D,t[5]=(l*u-d*i)*D,t[6]=y*D,t[7]=(r*m-p*i)*D,t[8]=(h*i-r*u)*D,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Ku.makeScale(t,i)),this}rotate(t){return this.premultiply(Ku.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ku.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ku=new me;function pp(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ol(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bx(){const s=ol("canvas");return s.style.display="block",s}const mp={};function qs(s){s in mp||(mp[s]=!0,console.warn(s))}function Tx(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}const gp=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vp=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ax(){const s={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Be&&(l.r=Ki(l.r),l.g=Ki(l.g),l.b=Ki(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Ir(l.r),l.g=Ir(l.g),l.b=Ir(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ya?rl:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return qs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return qs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Nr]:{primaries:t,whitePoint:r,transfer:rl,toXYZ:gp,fromXYZ:vp,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:gp,fromXYZ:vp,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),s}const De=Ax();function Ki(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ir(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Hr;class Rx{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Hr===void 0&&(Hr=ol("canvas")),Hr.width=t.width,Hr.height=t.height;const l=Hr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Hr}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ol("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Ki(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ki(i[r]/255)*255):i[r]=Ki(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wx=0;class Qu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=zr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Ju(l[h].image)):u.push(Ju(l[h]))}else u=Ju(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Ju(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cx=0;const $u=new rt;class In extends Pr{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=tr,l=tr,u=Pi,h=er,d=Si,m=Zi,p=In.DEFAULT_ANISOTROPY,g=ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=zr(),this.name="",this.source=new Qu(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($u).x}get height(){return this.source.getSize($u).y}get depth(){return this.source.getSize($u).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$d)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fu:t.x=t.x-Math.floor(t.x);break;case tr:t.x=t.x<0?0:1;break;case hu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fu:t.y=t.y-Math.floor(t.y);break;case tr:t.y=t.y<0?0:1;break;case hu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null,In.DEFAULT_MAPPING=$d,In.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,i=0,r=0,l=1){ee.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],g=m[4],x=m[8],v=m[1],y=m[5],E=m[9],D=m[2],M=m[6],_=m[10];if(Math.abs(g-v)<.01&&Math.abs(x-D)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+D)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,U=(y+1)/2,b=(_+1)/2,z=(g+v)/4,F=(x+D)/4,X=(E+M)/4;return O>U&&O>b?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=z/r,u=F/r):U>b?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=z/l,u=X/l):b<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(b),r=F/u,l=X/u),this.set(r,l,u,i),this}let G=Math.sqrt((M-E)*(M-E)+(x-D)*(x-D)+(v-g)*(v-g));return Math.abs(G)<.001&&(G=1),this.x=(M-E)/G,this.y=(x-D)/G,this.z=(v-g)/G,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Te(this.x,t.x,i.x),this.y=Te(this.y,t.y,i.y),this.z=Te(this.z,t.z,i.z),this.w=Te(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Te(this.x,t,i),this.y=Te(this.y,t,i),this.z=Te(this.z,t,i),this.w=Te(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Te(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dx extends Pr{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new ee(0,0,t,i),this.scissorTest=!1,this.viewport=new ee(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new In(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:Pi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Qu(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends Dx{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class _p extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ux extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ys{constructor(t=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Mi):Mi.fromBufferAttribute(u,h),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ll.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ll.copy(r.boundingBox)),ll.applyMatrix4(t.matrixWorld),this.union(ll)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),cl.subVectors(this.max,Zs),Gr.subVectors(t.a,Zs),Vr.subVectors(t.b,Zs),kr.subVectors(t.c,Zs),Sa.subVectors(Vr,Gr),Ma.subVectors(kr,Vr),ar.subVectors(Gr,kr);let i=[0,-Sa.z,Sa.y,0,-Ma.z,Ma.y,0,-ar.z,ar.y,Sa.z,0,-Sa.x,Ma.z,0,-Ma.x,ar.z,0,-ar.x,-Sa.y,Sa.x,0,-Ma.y,Ma.x,0,-ar.y,ar.x,0];return!tf(i,Gr,Vr,kr,cl)||(i=[1,0,0,0,1,0,0,0,1],!tf(i,Gr,Vr,kr,cl))?!1:(ul.crossVectors(Sa,Ma),i=[ul.x,ul.y,ul.z],tf(i,Gr,Vr,kr,cl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Qi=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],Mi=new rt,ll=new Ys,Gr=new rt,Vr=new rt,kr=new rt,Sa=new rt,Ma=new rt,ar=new rt,Zs=new rt,cl=new rt,ul=new rt,rr=new rt;function tf(s,t,i,r,l){for(let u=0,h=s.length-3;u<=h;u+=3){rr.fromArray(s,u);const d=l.x*Math.abs(rr.x)+l.y*Math.abs(rr.y)+l.z*Math.abs(rr.z),m=t.dot(rr),p=i.dot(rr),g=r.dot(rr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Lx=new Ys,js=new rt,ef=new rt;class fl{constructor(t=new rt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Lx.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;js.subVectors(t,this.center);const i=js.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(js,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ef.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(js.copy(t.center).add(ef)),this.expandByPoint(js.copy(t.center).sub(ef))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ji=new rt,nf=new rt,hl=new rt,Ea=new rt,af=new rt,dl=new rt,rf=new rt;class xp{constructor(t=new rt,i=new rt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ji)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ji.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ji.copy(this.origin).addScaledVector(this.direction,i),Ji.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){nf.copy(t).add(i).multiplyScalar(.5),hl.copy(i).sub(t).normalize(),Ea.copy(this.origin).sub(nf);const u=t.distanceTo(i)*.5,h=-this.direction.dot(hl),d=Ea.dot(this.direction),m=-Ea.dot(hl),p=Ea.lengthSq(),g=Math.abs(1-h*h);let x,v,y,E;if(g>0)if(x=h*m-d,v=h*d-m,E=u*g,x>=0)if(v>=-E)if(v<=E){const D=1/g;x*=D,v*=D,y=x*(x+h*v+2*d)+v*(h*x+v+2*m)+p}else v=u,x=Math.max(0,-(h*v+d)),y=-x*x+v*(v+2*m)+p;else v=-u,x=Math.max(0,-(h*v+d)),y=-x*x+v*(v+2*m)+p;else v<=-E?(x=Math.max(0,-(-h*u+d)),v=x>0?-u:Math.min(Math.max(-u,-m),u),y=-x*x+v*(v+2*m)+p):v<=E?(x=0,v=Math.min(Math.max(-u,-m),u),y=v*(v+2*m)+p):(x=Math.max(0,-(h*u+d)),v=x>0?u:Math.min(Math.max(-u,-m),u),y=-x*x+v*(v+2*m)+p);else v=h>0?-u:u,x=Math.max(0,-(h*v+d)),y=-x*x+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(nf).addScaledVector(hl,v),y}intersectSphere(t,i){Ji.subVectors(t.center,this.origin);const r=Ji.dot(this.direction),l=Ji.dot(Ji)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(r=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(r=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),g>=0?(u=(t.min.y-v.y)*g,h=(t.max.y-v.y)*g):(u=(t.max.y-v.y)*g,h=(t.min.y-v.y)*g),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-v.z)*x,m=(t.max.z-v.z)*x):(d=(t.max.z-v.z)*x,m=(t.min.z-v.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Ji)!==null}intersectTriangle(t,i,r,l,u){af.subVectors(i,t),dl.subVectors(r,t),rf.crossVectors(af,dl);let h=this.direction.dot(rf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ea.subVectors(this.origin,t);const m=d*this.direction.dot(dl.crossVectors(Ea,dl));if(m<0)return null;const p=d*this.direction.dot(af.cross(Ea));if(p<0||m+p>h)return null;const g=-d*Ea.dot(rf);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(t,i,r,l,u,h,d,m,p,g,x,v,y,E,D,M){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,g,x,v,y,E,D,M)}set(t,i,r,l,u,h,d,m,p,g,x,v,y,E,D,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=v,_[3]=y,_[7]=E,_[11]=D,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/Xr.setFromMatrixColumn(t,0).length(),u=1/Xr.setFromMatrixColumn(t,1).length(),h=1/Xr.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const v=h*g,y=h*x,E=d*g,D=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=y+E*p,i[5]=v-D*p,i[9]=-d*m,i[2]=D-v*p,i[6]=E+y*p,i[10]=h*m}else if(t.order==="YXZ"){const v=m*g,y=m*x,E=p*g,D=p*x;i[0]=v+D*d,i[4]=E*d-y,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=y*d-E,i[6]=D+v*d,i[10]=h*m}else if(t.order==="ZXY"){const v=m*g,y=m*x,E=p*g,D=p*x;i[0]=v-D*d,i[4]=-h*x,i[8]=E+y*d,i[1]=y+E*d,i[5]=h*g,i[9]=D-v*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const v=h*g,y=h*x,E=d*g,D=d*x;i[0]=m*g,i[4]=E*p-y,i[8]=v*p+D,i[1]=m*x,i[5]=D*p+v,i[9]=y*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const v=h*m,y=h*p,E=d*m,D=d*p;i[0]=m*g,i[4]=D-v*x,i[8]=E*x+y,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=y*x+E,i[10]=v-D*x}else if(t.order==="XZY"){const v=h*m,y=h*p,E=d*m,D=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=v*x+D,i[5]=h*g,i[9]=y*x-E,i[2]=E*x-y,i[6]=d*g,i[10]=D*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nx,t,Ox)}lookAt(t,i,r){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ba.crossVectors(r,ei),ba.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ba.crossVectors(r,ei)),ba.normalize(),pl.crossVectors(ei,ba),l[0]=ba.x,l[4]=pl.x,l[8]=ei.x,l[1]=ba.y,l[5]=pl.y,l[9]=ei.y,l[2]=ba.z,l[6]=pl.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],x=r[5],v=r[9],y=r[13],E=r[2],D=r[6],M=r[10],_=r[14],G=r[3],O=r[7],U=r[11],b=r[15],z=l[0],F=l[4],X=l[8],C=l[12],w=l[1],I=l[5],Z=l[9],et=l[13],ft=l[2],ct=l[6],P=l[10],Q=l[14],W=l[3],xt=l[7],L=l[11],K=l[15];return u[0]=h*z+d*w+m*ft+p*W,u[4]=h*F+d*I+m*ct+p*xt,u[8]=h*X+d*Z+m*P+p*L,u[12]=h*C+d*et+m*Q+p*K,u[1]=g*z+x*w+v*ft+y*W,u[5]=g*F+x*I+v*ct+y*xt,u[9]=g*X+x*Z+v*P+y*L,u[13]=g*C+x*et+v*Q+y*K,u[2]=E*z+D*w+M*ft+_*W,u[6]=E*F+D*I+M*ct+_*xt,u[10]=E*X+D*Z+M*P+_*L,u[14]=E*C+D*et+M*Q+_*K,u[3]=G*z+O*w+U*ft+b*W,u[7]=G*F+O*I+U*ct+b*xt,u[11]=G*X+O*Z+U*P+b*L,u[15]=G*C+O*et+U*Q+b*K,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],x=t[6],v=t[10],y=t[14],E=t[3],D=t[7],M=t[11],_=t[15];return E*(+u*m*x-l*p*x-u*d*v+r*p*v+l*d*y-r*m*y)+D*(+i*m*y-i*p*v+u*h*v-l*h*y+l*p*g-u*m*g)+M*(+i*p*x-i*d*y-u*h*x+r*h*y+u*d*g-r*p*g)+_*(-l*d*g-i*m*x+i*d*v+l*h*x-r*h*v+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=t[9],v=t[10],y=t[11],E=t[12],D=t[13],M=t[14],_=t[15],G=x*M*p-D*v*p+D*m*y-d*M*y-x*m*_+d*v*_,O=E*v*p-g*M*p-E*m*y+h*M*y+g*m*_-h*v*_,U=g*D*p-E*x*p+E*d*y-h*D*y-g*d*_+h*x*_,b=E*x*m-g*D*m-E*d*v+h*D*v+g*d*M-h*x*M,z=i*G+r*O+l*U+u*b;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return t[0]=G*F,t[1]=(D*v*u-x*M*u-D*l*y+r*M*y+x*l*_-r*v*_)*F,t[2]=(d*M*u-D*m*u+D*l*p-r*M*p-d*l*_+r*m*_)*F,t[3]=(x*m*u-d*v*u-x*l*p+r*v*p+d*l*y-r*m*y)*F,t[4]=O*F,t[5]=(g*M*u-E*v*u+E*l*y-i*M*y-g*l*_+i*v*_)*F,t[6]=(E*m*u-h*M*u-E*l*p+i*M*p+h*l*_-i*m*_)*F,t[7]=(h*v*u-g*m*u+g*l*p-i*v*p-h*l*y+i*m*y)*F,t[8]=U*F,t[9]=(E*x*u-g*D*u-E*r*y+i*D*y+g*r*_-i*x*_)*F,t[10]=(h*D*u-E*d*u+E*r*p-i*D*p-h*r*_+i*d*_)*F,t[11]=(g*d*u-h*x*u-g*r*p+i*x*p+h*r*y-i*d*y)*F,t[12]=b*F,t[13]=(g*D*l-E*x*l+E*r*v-i*D*v-g*r*M+i*x*M)*F,t[14]=(E*d*l-h*D*l-E*r*m+i*D*m+h*r*M-i*d*M)*F,t[15]=(h*x*l-g*d*l+g*r*m-i*x*m-h*r*v+i*d*v)*F,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,x=d+d,v=u*p,y=u*g,E=u*x,D=h*g,M=h*x,_=d*x,G=m*p,O=m*g,U=m*x,b=r.x,z=r.y,F=r.z;return l[0]=(1-(D+_))*b,l[1]=(y+U)*b,l[2]=(E-O)*b,l[3]=0,l[4]=(y-U)*z,l[5]=(1-(v+_))*z,l[6]=(M+G)*z,l[7]=0,l[8]=(E+O)*F,l[9]=(M-G)*F,l[10]=(1-(v+D))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=Xr.set(l[0],l[1],l[2]).length();const h=Xr.set(l[4],l[5],l[6]).length(),d=Xr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Ei.copy(this);const p=1/u,g=1/h,x=1/d;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=x,Ei.elements[9]*=x,Ei.elements[10]*=x,i.setFromRotationMatrix(Ei),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=zi,m=!1){const p=this.elements,g=2*u/(i-t),x=2*u/(r-l),v=(i+t)/(i-t),y=(r+l)/(r-l);let E,D;if(m)E=u/(h-u),D=h*u/(h-u);else if(d===zi)E=-(h+u)/(h-u),D=-2*h*u/(h-u);else if(d===sl)E=-h/(h-u),D=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=D,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=zi,m=!1){const p=this.elements,g=2/(i-t),x=2/(r-l),v=-(i+t)/(i-t),y=-(r+l)/(r-l);let E,D;if(m)E=1/(h-u),D=h/(h-u);else if(d===zi)E=-2/(h-u),D=-(h+u)/(h-u);else if(d===sl)E=-1/(h-u),D=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=x,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=D,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Xr=new rt,Ei=new cn,Nx=new rt(0,0,0),Ox=new rt(1,1,1),ba=new rt,pl=new rt,ei=new rt,yp=new cn,Sp=new Ws;class $i{constructor(t=0,i=0,r=0,l=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Te(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Te(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Te(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return yp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yp,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Sp.setFromEuler(this),this.setFromQuaternion(Sp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class Mp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Px=0;const Ep=new rt,Wr=new Ws,ta=new cn,ml=new rt,Ks=new rt,zx=new rt,Bx=new Ws,bp=new rt(1,0,0),Tp=new rt(0,1,0),Ap=new rt(0,0,1),Rp={type:"added"},Fx={type:"removed"},qr={type:"childadded",child:null},sf={type:"childremoved",child:null};class Wn extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=zr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const t=new rt,i=new $i,r=new Ws,l=new rt(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new me}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Wr.setFromAxisAngle(t,i),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(t,i){return Wr.setFromAxisAngle(t,i),this.quaternion.premultiply(Wr),this}rotateX(t){return this.rotateOnAxis(bp,t)}rotateY(t){return this.rotateOnAxis(Tp,t)}rotateZ(t){return this.rotateOnAxis(Ap,t)}translateOnAxis(t,i){return Ep.copy(t).applyQuaternion(this.quaternion),this.position.add(Ep.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(bp,t)}translateY(t){return this.translateOnAxis(Tp,t)}translateZ(t){return this.translateOnAxis(Ap,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?ml.copy(t):ml.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Ks,ml,this.up):ta.lookAt(ml,Ks,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),Wr.setFromRotationMatrix(ta),this.quaternion.premultiply(Wr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rp),qr.child=t,this.dispatchEvent(qr),qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Fx),sf.child=t,this.dispatchEvent(sf),sf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rp),qr.child=t,this.dispatchEvent(qr),qr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,t,zx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Bx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),x=h(t.shapes),v=h(t.skeletons),y=h(t.animations),E=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Wn.DEFAULT_UP=new rt(0,1,0),Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new rt,ea=new rt,of=new rt,na=new rt,Yr=new rt,Zr=new rt,wp=new rt,lf=new rt,cf=new rt,uf=new rt,ff=new ee,hf=new ee,df=new ee;class Ti{constructor(t=new rt,i=new rt,r=new rt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),bi.subVectors(t,i),l.cross(bi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){bi.subVectors(l,i),ea.subVectors(r,i),of.subVectors(t,i);const h=bi.dot(bi),d=bi.dot(ea),m=bi.dot(of),p=ea.dot(ea),g=ea.dot(of),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const v=1/x,y=(p*m-d*g)*v,E=(h*g-d*m)*v;return u.set(1-y-E,E,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,na)===null?!1:na.x>=0&&na.y>=0&&na.x+na.y<=1}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,na.x),m.addScaledVector(h,na.y),m.addScaledVector(d,na.z),m)}static getInterpolatedAttribute(t,i,r,l,u,h){return ff.setScalar(0),hf.setScalar(0),df.setScalar(0),ff.fromBufferAttribute(t,i),hf.fromBufferAttribute(t,r),df.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(ff,u.x),h.addScaledVector(hf,u.y),h.addScaledVector(df,u.z),h}static isFrontFacing(t,i,r,l){return bi.subVectors(r,i),ea.subVectors(t,i),bi.cross(ea).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),ea.subVectors(this.a,this.b),bi.cross(ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ti.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Ti.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;Yr.subVectors(l,r),Zr.subVectors(u,r),lf.subVectors(t,r);const m=Yr.dot(lf),p=Zr.dot(lf);if(m<=0&&p<=0)return i.copy(r);cf.subVectors(t,l);const g=Yr.dot(cf),x=Zr.dot(cf);if(g>=0&&x<=g)return i.copy(l);const v=m*x-g*p;if(v<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(Yr,h);uf.subVectors(t,u);const y=Yr.dot(uf),E=Zr.dot(uf);if(E>=0&&y<=E)return i.copy(u);const D=y*p-m*E;if(D<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(Zr,d);const M=g*E-y*x;if(M<=0&&x-g>=0&&y-E>=0)return wp.subVectors(u,l),d=(x-g)/(x-g+(y-E)),i.copy(l).addScaledVector(wp,d);const _=1/(M+D+v);return h=D*_,d=v*_,i.copy(r).addScaledVector(Yr,h).addScaledVector(Zr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ta={h:0,s:0,l:0},gl={h:0,s:0,l:0};function pf(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Se{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=De.workingColorSpace){if(t=Zu(t,1),i=Te(i,0,1),r=Te(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=pf(h,u,t+1/3),this.g=pf(h,u,t),this.b=pf(h,u,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=ti){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ti){const r=Cp[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}copyLinearToSRGB(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ti){return De.workingToColorSpace(Nn.copy(this),t),Math.round(Te(Nn.r*255,0,255))*65536+Math.round(Te(Nn.g*255,0,255))*256+Math.round(Te(Nn.b*255,0,255))}getHexString(t=ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,u=Nn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=g<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=ti){De.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,r=Nn.g,l=Nn.b;return t!==ti?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ta),this.setHSL(Ta.h+t,Ta.s+i,Ta.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ta),t.getHSL(gl);const r=Xs(Ta.h,gl.h,i),l=Xs(Ta.s,gl.s,i),u=Xs(Ta.l,gl.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Se;Se.NAMES=Cp;let Ix=0;class Qs extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=zr(),this.name="",this.type="Material",this.blending=Ja,this.side=va,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tu,this.blendDst=eu,this.blendEquation=$a,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ja&&(r.blending=this.blending),this.side!==va&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==tu&&(r.blendSrc=this.blendSrc),this.blendDst!==eu&&(r.blendDst=this.blendDst),this.blendEquation!==$a&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Dp extends Qs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=Jd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new rt,vl=new Ae;let Hx=0;class On{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hx++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=up,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)vl.fromBufferAttribute(this,i),vl.applyMatrix3(t),this.setXY(i,vl.x,vl.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Br(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Fn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Br(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Br(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Br(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Br(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array),u=Fn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==up&&(t.usage=this.usage),t}}class Up extends On{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Lp extends On{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class sr extends On{constructor(t,i,r){super(new Float32Array(t),i,r)}}let Gx=0;const hi=new cn,mf=new Wn,jr=new rt,ni=new Ys,Js=new Ys,yn=new rt;class Bi extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=zr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pp(t)?Lp:Up)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new me().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,r){return hi.makeTranslation(t,i,r),this.applyMatrix4(hi),this}scale(t,i,r){return hi.makeScale(t,i,r),this.applyMatrix4(hi),this}lookAt(t){return mf.lookAt(t),mf.updateMatrix(),this.applyMatrix4(mf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new sr(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ys);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];ni.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Js.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ni.min,Js.min),ni.expandByPoint(yn),yn.addVectors(ni.max,Js.max),ni.expandByPoint(yn)):(ni.expandByPoint(Js.min),ni.expandByPoint(Js.max))}ni.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)yn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(yn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)yn.fromBufferAttribute(d,p),m&&(jr.fromBufferAttribute(t,p),yn.add(jr)),l=Math.max(l,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<r.count;X++)d[X]=new rt,m[X]=new rt;const p=new rt,g=new rt,x=new rt,v=new Ae,y=new Ae,E=new Ae,D=new rt,M=new rt;function _(X,C,w){p.fromBufferAttribute(r,X),g.fromBufferAttribute(r,C),x.fromBufferAttribute(r,w),v.fromBufferAttribute(u,X),y.fromBufferAttribute(u,C),E.fromBufferAttribute(u,w),g.sub(p),x.sub(p),y.sub(v),E.sub(v);const I=1/(y.x*E.y-E.x*y.y);isFinite(I)&&(D.copy(g).multiplyScalar(E.y).addScaledVector(x,-y.y).multiplyScalar(I),M.copy(x).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(I),d[X].add(D),d[C].add(D),d[w].add(D),m[X].add(M),m[C].add(M),m[w].add(M))}let G=this.groups;G.length===0&&(G=[{start:0,count:t.count}]);for(let X=0,C=G.length;X<C;++X){const w=G[X],I=w.start,Z=w.count;for(let et=I,ft=I+Z;et<ft;et+=3)_(t.getX(et+0),t.getX(et+1),t.getX(et+2))}const O=new rt,U=new rt,b=new rt,z=new rt;function F(X){b.fromBufferAttribute(l,X),z.copy(b);const C=d[X];O.copy(C),O.sub(b.multiplyScalar(b.dot(C))).normalize(),U.crossVectors(z,C);const I=U.dot(m[X])<0?-1:1;h.setXYZW(X,O.x,O.y,O.z,I)}for(let X=0,C=G.length;X<C;++X){const w=G[X],I=w.start,Z=w.count;for(let et=I,ft=I+Z;et<ft;et+=3)F(t.getX(et+0)),F(t.getX(et+1)),F(t.getX(et+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new On(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const l=new rt,u=new rt,h=new rt,d=new rt,m=new rt,p=new rt,g=new rt,x=new rt;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),D=t.getX(v+1),M=t.getX(v+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,D),h.fromBufferAttribute(i,M),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,D),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(D,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),h.fromBufferAttribute(i,v+2),g.subVectors(h,u),x.subVectors(l,u),g.cross(x),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,x=d.normalized,v=new p.constructor(m.length*g);let y=0,E=0;for(let D=0,M=m.length;D<M;D++){d.isInterleavedBufferAttribute?y=m[D]*d.data.stride+d.offset:y=m[D]*g;for(let _=0;_<g;_++)v[E++]=p[y++]}return new On(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Bi,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,x=p.length;g<x;g++){const v=p[g],y=t(v,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,v=p.length;x<v;x++){const y=p[x];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],x=u[p];for(let v=0,y=x.length;v<y;v++)g.push(x[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Np=new cn,or=new xp,_l=new fl,Op=new rt,xl=new rt,yl=new rt,Sl=new rt,gf=new rt,Ml=new rt,Pp=new rt,El=new rt;class Fi extends Wn{constructor(t=new Bi,i=new Dp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Ml.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],x=u[m];g!==0&&(gf.fromBufferAttribute(x,t),h?Ml.addScaledVector(gf,g):Ml.addScaledVector(gf.sub(i),g))}i.add(Ml)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_l.copy(r.boundingSphere),_l.applyMatrix4(u),or.copy(t.ray).recast(t.near),!(_l.containsPoint(or.origin)===!1&&(or.intersectSphere(_l,Op)===null||or.origin.distanceToSquared(Op)>(t.far-t.near)**2))&&(Np.copy(u).invert(),or.copy(t.ray).applyMatrix4(Np),!(r.boundingBox!==null&&or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,or)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,v=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,D=v.length;E<D;E++){const M=v[E],_=h[M.materialIndex],G=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=G,b=O;U<b;U+=3){const z=d.getX(U),F=d.getX(U+1),X=d.getX(U+2);l=bl(this,_,t,r,p,g,x,z,F,X),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),D=Math.min(d.count,y.start+y.count);for(let M=E,_=D;M<_;M+=3){const G=d.getX(M),O=d.getX(M+1),U=d.getX(M+2);l=bl(this,h,t,r,p,g,x,G,O,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,D=v.length;E<D;E++){const M=v[E],_=h[M.materialIndex],G=Math.max(M.start,y.start),O=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=G,b=O;U<b;U+=3){const z=U,F=U+1,X=U+2;l=bl(this,_,t,r,p,g,x,z,F,X),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),D=Math.min(m.count,y.start+y.count);for(let M=E,_=D;M<_;M+=3){const G=M,O=M+1,U=M+2;l=bl(this,h,t,r,p,g,x,G,O,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Vx(s,t,i,r,l,u,h,d){let m;if(t.side===Xn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===va,d),m===null)return null;El.copy(d),El.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(El);return p<i.near||p>i.far?null:{distance:p,point:El.clone(),object:s}}function bl(s,t,i,r,l,u,h,d,m,p){s.getVertexPosition(d,xl),s.getVertexPosition(m,yl),s.getVertexPosition(p,Sl);const g=Vx(s,t,i,r,xl,yl,Sl,Pp);if(g){const x=new rt;Ti.getBarycoord(Pp,xl,yl,Sl,x),l&&(g.uv=Ti.getInterpolatedAttribute(l,d,m,p,x,new Ae)),u&&(g.uv1=Ti.getInterpolatedAttribute(u,d,m,p,x,new Ae)),h&&(g.normal=Ti.getInterpolatedAttribute(h,d,m,p,x,new rt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new rt,materialIndex:0};Ti.getNormal(xl,yl,Sl,v.normal),g.face=v,g.barycoord=x}return g}class $s extends Bi{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],x=[];let v=0,y=0;E("z","y","x",-1,-1,r,i,t,h,u,0),E("z","y","x",1,-1,r,i,-t,h,u,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,u,4),E("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new sr(p,3)),this.setAttribute("normal",new sr(g,3)),this.setAttribute("uv",new sr(x,2));function E(D,M,_,G,O,U,b,z,F,X,C){const w=U/F,I=b/X,Z=U/2,et=b/2,ft=z/2,ct=F+1,P=X+1;let Q=0,W=0;const xt=new rt;for(let L=0;L<P;L++){const K=L*I-et;for(let _t=0;_t<ct;_t++){const yt=_t*w-Z;xt[D]=yt*G,xt[M]=K*O,xt[_]=ft,p.push(xt.x,xt.y,xt.z),xt[D]=0,xt[M]=0,xt[_]=z>0?1:-1,g.push(xt.x,xt.y,xt.z),x.push(_t/F),x.push(1-L/X),Q+=1}}for(let L=0;L<X;L++)for(let K=0;K<F;K++){const _t=v+K+ct*L,yt=v+K+ct*(L+1),Dt=v+(K+1)+ct*(L+1),Nt=v+(K+1)+ct*L;m.push(_t,yt,Nt),m.push(yt,Dt,Nt),W+=6}d.addGroup(y,W,C),y+=W,v+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Kr(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Hn(s){const t={};for(let i=0;i<s.length;i++){const r=Kr(s[i]);for(const l in r)t[l]=r[l]}return t}function kx(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function zp(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const Xx={clone:Kr,merge:Hn};var Wx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Qs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wx,this.fragmentShader=qx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kr(t.uniforms),this.uniformsGroups=kx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Bp extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Aa=new rt,Fp=new Ae,Ip=new Ae;class Ri extends Bp{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Aa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Aa.x,Aa.y).multiplyScalar(-t/Aa.z),Aa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Aa.x,Aa.y).multiplyScalar(-t/Aa.z)}getViewSize(t,i){return this.getViewBounds(t,Fp,Ip),i.subVectors(Ip,Fp)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Vs*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Qr=-90,Jr=1;class Yx extends Wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ri(Qr,Jr,t,i);l.layers=this.layers,this.add(l);const u=new Ri(Qr,Jr,t,i);u.layers=this.layers,this.add(u);const h=new Ri(Qr,Jr,t,i);h.layers=this.layers,this.add(h);const d=new Ri(Qr,Jr,t,i);d.layers=this.layers,this.add(d);const m=new Ri(Qr,Jr,t,i);m.layers=this.layers,this.add(m);const p=new Ri(Qr,Jr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===zi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===sl)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const D=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=D,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(x,v,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Hp extends In{constructor(t=[],i=Ur,r,l,u,h,d,m,p,g){super(t,i,r,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zx extends ir{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Hp(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new $s(5,5,5),u=new Ai({name:"CubemapFromEquirect",uniforms:Kr(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:_a});u.uniforms.tEquirect.value=i;const h=new Fi(l,u),d=i.minFilter;return i.minFilter===er&&(i.minFilter=Pi),new Yx(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}class Tl extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jx={type:"move"};class vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const D of t.hand.values()){const M=i.getJointPose(D,r),_=this._getHandJoint(p,D);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=g.position.distanceTo(x.position),y=.02,E=.005;p.inputState.pinching&&v>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(jx)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Tl;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Kx extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const _f=new rt,Qx=new rt,Jx=new me;class lr{constructor(t=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=_f.subVectors(r,i).cross(Qx.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(_f),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Jx.getNormalMatrix(t),l=this.coplanarPoint(_f).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new fl,$x=new Ae(.5,.5),Al=new rt;class Gp{constructor(t=new lr,i=new lr,r=new lr,l=new lr,u=new lr,h=new lr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=zi,r=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],m=u[2],p=u[3],g=u[4],x=u[5],v=u[6],y=u[7],E=u[8],D=u[9],M=u[10],_=u[11],G=u[12],O=u[13],U=u[14],b=u[15];if(l[0].setComponents(p-h,y-g,_-E,b-G).normalize(),l[1].setComponents(p+h,y+g,_+E,b+G).normalize(),l[2].setComponents(p+d,y+x,_+D,b+O).normalize(),l[3].setComponents(p-d,y-x,_-D,b-O).normalize(),r)l[4].setComponents(m,v,M,U).normalize(),l[5].setComponents(p-m,y-v,_-M,b-U).normalize();else if(l[4].setComponents(p-m,y-v,_-M,b-U).normalize(),i===zi)l[5].setComponents(p+m,y+v,_+M,b+U).normalize();else if(i===sl)l[5].setComponents(m,v,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),cr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(t){cr.center.set(0,0,0);const i=$x.distanceTo(t.center);return cr.radius=.7071067811865476+i,cr.applyMatrix4(t.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Al.x=l.normal.x>0?t.max.x:t.min.x,Al.y=l.normal.y>0?t.max.y:t.min.y,Al.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Al)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ty extends Qs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vp=new cn,xf=new xp,Rl=new fl,wl=new rt;class kp extends Wn{constructor(t=new Bi,i=new ty){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Rl.copy(r.boundingSphere),Rl.applyMatrix4(l),Rl.radius+=u,t.ray.intersectsSphere(Rl)===!1)return;Vp.copy(l).invert(),xf.copy(t.ray).applyMatrix4(Vp);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,x=r.attributes.position;if(p!==null){const v=Math.max(0,h.start),y=Math.min(p.count,h.start+h.count);for(let E=v,D=y;E<D;E++){const M=p.getX(E);wl.fromBufferAttribute(x,M),Xp(wl,M,m,l,t,i,this)}}else{const v=Math.max(0,h.start),y=Math.min(x.count,h.start+h.count);for(let E=v,D=y;E<D;E++)wl.fromBufferAttribute(x,E),Xp(wl,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Xp(s,t,i,r,l,u,h){const d=xf.distanceSqToPoint(s);if(d<i){const m=new rt;xf.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class ey extends In{constructor(t,i,r,l,u,h,d,m,p){super(t,i,r,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wp extends In{constructor(t,i,r=nr,l,u,h,d=yi,m=yi,p,g=Hs,x=1){if(g!==Hs&&g!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:x};super(v,l,u,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class qp extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class to extends Bi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,x=t/d,v=i/m,y=[],E=[],D=[],M=[];for(let _=0;_<g;_++){const G=_*v-h;for(let O=0;O<p;O++){const U=O*x-u;E.push(U,-G,0),D.push(0,0,1),M.push(O/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let G=0;G<d;G++){const O=G+p*_,U=G+p*(_+1),b=G+1+p*(_+1),z=G+1+p*_;y.push(O,U,z),y.push(U,b,z)}this.setIndex(y),this.setAttribute("position",new sr(E,3)),this.setAttribute("normal",new sr(D,3)),this.setAttribute("uv",new sr(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.width,t.height,t.widthSegments,t.heightSegments)}}class ny extends Qs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iy extends Qs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Yp extends Bp{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ay extends Ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Zp(s,t,i,r){const l=ry(r);switch(i){case ap:return s*t;case sp:return s*t/l.components*l.byteLength;case vu:return s*t/l.components*l.byteLength;case op:return s*t*2/l.components*l.byteLength;case _u:return s*t*2/l.components*l.byteLength;case rp:return s*t*3/l.components*l.byteLength;case Si:return s*t*4/l.components*l.byteLength;case xu:return s*t*4/l.components*l.byteLength;case el:case nl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case il:case al:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Su:case Eu:return Math.max(s,16)*Math.max(t,8)/4;case yu:case Mu:return Math.max(s,8)*Math.max(t,8)/2;case bu:case Tu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Au:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ru:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wu:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Cu:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Du:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Uu:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Lu:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Nu:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ou:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Pu:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case zu:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Bu:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Fu:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Iu:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Hu:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Gu:case Vu:case ku:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Xu:case Wu:return Math.ceil(s/4)*Math.ceil(t/4)*8;case qu:case Yu:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ry(s){switch(s){case Zi:case tp:return{byteLength:1,components:1};case Bs:case ep:case Fs:return{byteLength:2,components:1};case mu:case gu:return{byteLength:2,components:4};case nr:case pu:case ji:return{byteLength:4,components:1};case np:case ip:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jc}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jp(){let s=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function sy(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,x=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,d),x.length===0)s.bufferSubData(p,0,g);else{x.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<x.length;y++){const E=x[v],D=x[y];D.start<=E.start+E.count+1?E.count=Math.max(E.count,D.start+D.count-E.start):(++v,x[v]=D)}x.length=v+1;for(let y=0,E=x.length;y<E;y++){const D=x[y];s.bufferSubData(p,D.start*g.BYTES_PER_ELEMENT,g,D.start,D.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var oy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ly=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,py=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,my=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_y=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yy=`#ifdef USE_IRIDESCENCE
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
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
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
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dy=`#define PI 3.141592653589793
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
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Uy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,Ly=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Oy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Py=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,By="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iy=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Hy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,Xy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ky=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,$y=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,sS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_S=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ES=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,AS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,DS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,US=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,XS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ZS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jS=`#ifdef USE_SKINNING
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
#endif`,KS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$S=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eM=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ge={alphahash_fragment:oy,alphahash_pars_fragment:ly,alphamap_fragment:cy,alphamap_pars_fragment:uy,alphatest_fragment:fy,alphatest_pars_fragment:hy,aomap_fragment:dy,aomap_pars_fragment:py,batching_pars_vertex:my,batching_vertex:gy,begin_vertex:vy,beginnormal_vertex:_y,bsdfs:xy,iridescence_fragment:yy,bumpmap_pars_fragment:Sy,clipping_planes_fragment:My,clipping_planes_pars_fragment:Ey,clipping_planes_pars_vertex:by,clipping_planes_vertex:Ty,color_fragment:Ay,color_pars_fragment:Ry,color_pars_vertex:wy,color_vertex:Cy,common:Dy,cube_uv_reflection_fragment:Uy,defaultnormal_vertex:Ly,displacementmap_pars_vertex:Ny,displacementmap_vertex:Oy,emissivemap_fragment:Py,emissivemap_pars_fragment:zy,colorspace_fragment:By,colorspace_pars_fragment:Fy,envmap_fragment:Iy,envmap_common_pars_fragment:Hy,envmap_pars_fragment:Gy,envmap_pars_vertex:Vy,envmap_physical_pars_fragment:$y,envmap_vertex:ky,fog_vertex:Xy,fog_pars_vertex:Wy,fog_fragment:qy,fog_pars_fragment:Yy,gradientmap_pars_fragment:Zy,lightmap_pars_fragment:jy,lights_lambert_fragment:Ky,lights_lambert_pars_fragment:Qy,lights_pars_begin:Jy,lights_toon_fragment:tS,lights_toon_pars_fragment:eS,lights_phong_fragment:nS,lights_phong_pars_fragment:iS,lights_physical_fragment:aS,lights_physical_pars_fragment:rS,lights_fragment_begin:sS,lights_fragment_maps:oS,lights_fragment_end:lS,logdepthbuf_fragment:cS,logdepthbuf_pars_fragment:uS,logdepthbuf_pars_vertex:fS,logdepthbuf_vertex:hS,map_fragment:dS,map_pars_fragment:pS,map_particle_fragment:mS,map_particle_pars_fragment:gS,metalnessmap_fragment:vS,metalnessmap_pars_fragment:_S,morphinstance_vertex:xS,morphcolor_vertex:yS,morphnormal_vertex:SS,morphtarget_pars_vertex:MS,morphtarget_vertex:ES,normal_fragment_begin:bS,normal_fragment_maps:TS,normal_pars_fragment:AS,normal_pars_vertex:RS,normal_vertex:wS,normalmap_pars_fragment:CS,clearcoat_normal_fragment_begin:DS,clearcoat_normal_fragment_maps:US,clearcoat_pars_fragment:LS,iridescence_pars_fragment:NS,opaque_fragment:OS,packing:PS,premultiplied_alpha_fragment:zS,project_vertex:BS,dithering_fragment:FS,dithering_pars_fragment:IS,roughnessmap_fragment:HS,roughnessmap_pars_fragment:GS,shadowmap_pars_fragment:VS,shadowmap_pars_vertex:kS,shadowmap_vertex:XS,shadowmask_pars_fragment:WS,skinbase_vertex:qS,skinning_pars_vertex:YS,skinning_vertex:ZS,skinnormal_vertex:jS,specularmap_fragment:KS,specularmap_pars_fragment:QS,tonemapping_fragment:JS,tonemapping_pars_fragment:$S,transmission_fragment:tM,transmission_pars_fragment:eM,uv_pars_fragment:nM,uv_pars_vertex:iM,uv_vertex:aM,worldpos_vertex:rM,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},zt={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Ii={basic:{uniforms:Hn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Hn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Se(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Hn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Hn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Hn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new Se(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Hn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Hn([zt.points,zt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Hn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Hn([zt.common,zt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Hn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Hn([zt.sprite,zt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Hn([zt.common,zt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Hn([zt.lights,zt.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Ii.physical={uniforms:Hn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Cl={r:0,b:0,g:0},ur=new $i,sM=new cn;function oM(s,t,i,r,l,u,h){const d=new Se(0);let m=u===!0?0:1,p,g,x=null,v=0,y=null;function E(O){let U=O.isScene===!0?O.background:null;return U&&U.isTexture&&(U=(O.backgroundBlurriness>0?i:t).get(U)),U}function D(O){let U=!1;const b=E(O);b===null?_(d,m):b&&b.isColor&&(_(b,1),U=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(O,U){const b=E(U);b&&(b.isCubeTexture||b.mapping===$o)?(g===void 0&&(g=new Fi(new $s(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Kr(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,F,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ur.copy(U.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),g.material.uniforms.envMap.value=b,g.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(sM.makeRotationFromEuler(ur)),g.material.toneMapped=De.getTransfer(b.colorSpace)!==Be,(x!==b||v!==b.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,x=b,v=b.version,y=s.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):b&&b.isTexture&&(p===void 0&&(p=new Fi(new to(2,2),new Ai({name:"BackgroundMaterial",uniforms:Kr(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:va,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=b,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=De.getTransfer(b.colorSpace)!==Be,b.matrixAutoUpdate===!0&&b.updateMatrix(),p.material.uniforms.uvTransform.value.copy(b.matrix),(x!==b||v!==b.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,x=b,v=b.version,y=s.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,U){O.getRGB(Cl,zp(s)),r.buffers.color.setClear(Cl.r,Cl.g,Cl.b,U,h)}function G(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,U=1){d.set(O),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(d,m)},render:D,addToRenderList:M,dispose:G}}function lM(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,h=!1;function d(w,I,Z,et,ft){let ct=!1;const P=x(et,Z,I);u!==P&&(u=P,p(u.object)),ct=y(w,et,Z,ft),ct&&E(w,et,Z,ft),ft!==null&&t.update(ft,s.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,U(w,I,Z,et),ft!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return s.createVertexArray()}function p(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function x(w,I,Z){const et=Z.wireframe===!0;let ft=r[w.id];ft===void 0&&(ft={},r[w.id]=ft);let ct=ft[I.id];ct===void 0&&(ct={},ft[I.id]=ct);let P=ct[et];return P===void 0&&(P=v(m()),ct[et]=P),P}function v(w){const I=[],Z=[],et=[];for(let ft=0;ft<i;ft++)I[ft]=0,Z[ft]=0,et[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:Z,attributeDivisors:et,object:w,attributes:{},index:null}}function y(w,I,Z,et){const ft=u.attributes,ct=I.attributes;let P=0;const Q=Z.getAttributes();for(const W in Q)if(Q[W].location>=0){const L=ft[W];let K=ct[W];if(K===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(K=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(K=w.instanceColor)),L===void 0||L.attribute!==K||K&&L.data!==K.data)return!0;P++}return u.attributesNum!==P||u.index!==et}function E(w,I,Z,et){const ft={},ct=I.attributes;let P=0;const Q=Z.getAttributes();for(const W in Q)if(Q[W].location>=0){let L=ct[W];L===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(L=w.instanceColor));const K={};K.attribute=L,L&&L.data&&(K.data=L.data),ft[W]=K,P++}u.attributes=ft,u.attributesNum=P,u.index=et}function D(){const w=u.newAttributes;for(let I=0,Z=w.length;I<Z;I++)w[I]=0}function M(w){_(w,0)}function _(w,I){const Z=u.newAttributes,et=u.enabledAttributes,ft=u.attributeDivisors;Z[w]=1,et[w]===0&&(s.enableVertexAttribArray(w),et[w]=1),ft[w]!==I&&(s.vertexAttribDivisor(w,I),ft[w]=I)}function G(){const w=u.newAttributes,I=u.enabledAttributes;for(let Z=0,et=I.length;Z<et;Z++)I[Z]!==w[Z]&&(s.disableVertexAttribArray(Z),I[Z]=0)}function O(w,I,Z,et,ft,ct,P){P===!0?s.vertexAttribIPointer(w,I,Z,ft,ct):s.vertexAttribPointer(w,I,Z,et,ft,ct)}function U(w,I,Z,et){D();const ft=et.attributes,ct=Z.getAttributes(),P=I.defaultAttributeValues;for(const Q in ct){const W=ct[Q];if(W.location>=0){let xt=ft[Q];if(xt===void 0&&(Q==="instanceMatrix"&&w.instanceMatrix&&(xt=w.instanceMatrix),Q==="instanceColor"&&w.instanceColor&&(xt=w.instanceColor)),xt!==void 0){const L=xt.normalized,K=xt.itemSize,_t=t.get(xt);if(_t===void 0)continue;const yt=_t.buffer,Dt=_t.type,Nt=_t.bytesPerElement,J=Dt===s.INT||Dt===s.UNSIGNED_INT||xt.gpuType===pu;if(xt.isInterleavedBufferAttribute){const mt=xt.data,At=mt.stride,Zt=xt.offset;if(mt.isInstancedInterleavedBuffer){for(let Gt=0;Gt<W.locationSize;Gt++)_(W.location+Gt,mt.meshPerAttribute);w.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Gt=0;Gt<W.locationSize;Gt++)M(W.location+Gt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let Gt=0;Gt<W.locationSize;Gt++)O(W.location+Gt,K/W.locationSize,Dt,L,At*Nt,(Zt+K/W.locationSize*Gt)*Nt,J)}else{if(xt.isInstancedBufferAttribute){for(let mt=0;mt<W.locationSize;mt++)_(W.location+mt,xt.meshPerAttribute);w.isInstancedMesh!==!0&&et._maxInstanceCount===void 0&&(et._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let mt=0;mt<W.locationSize;mt++)M(W.location+mt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let mt=0;mt<W.locationSize;mt++)O(W.location+mt,K/W.locationSize,Dt,L,K*Nt,K/W.locationSize*mt*Nt,J)}}else if(P!==void 0){const L=P[Q];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(W.location,L);break;case 3:s.vertexAttrib3fv(W.location,L);break;case 4:s.vertexAttrib4fv(W.location,L);break;default:s.vertexAttrib1fv(W.location,L)}}}}G()}function b(){X();for(const w in r){const I=r[w];for(const Z in I){const et=I[Z];for(const ft in et)g(et[ft].object),delete et[ft];delete I[Z]}delete r[w]}}function z(w){if(r[w.id]===void 0)return;const I=r[w.id];for(const Z in I){const et=I[Z];for(const ft in et)g(et[ft].object),delete et[ft];delete I[Z]}delete r[w.id]}function F(w){for(const I in r){const Z=r[I];if(Z[w.id]===void 0)continue;const et=Z[w.id];for(const ft in et)g(et[ft].object),delete et[ft];delete Z[w.id]}}function X(){C(),h=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:D,enableAttribute:M,disableUnusedAttributes:G}}function cM(s,t,i){let r;function l(p){r=p}function u(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function d(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let y=0;for(let E=0;E<x;E++)y+=g[E];i.update(y,r,1)}function m(p,g,x,v){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)h(p[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,x);let E=0;for(let D=0;D<x;D++)E+=g[D]*v[D];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function uM(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==Si&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const X=F===Fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Zi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ji&&!X)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),G=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=E>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:D,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:G,maxVaryings:O,maxFragmentUniforms:U,vertexTextures:b,maxSamples:z}}function fM(s){const t=this;let i=null,r=0,l=!1,u=!1;const h=new lr,d=new me,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const y=x.length!==0||v||r!==0||l;return l=v,r=x.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){i=g(x,v,0)},this.setState=function(x,v,y){const E=x.clippingPlanes,D=x.clipIntersection,M=x.clipShadows,_=s.get(x);if(!l||E===null||E.length===0||u&&!M)u?g(null):p();else{const G=u?0:r,O=G*4;let U=_.clippingState||null;m.value=U,U=g(E,v,O,y);for(let b=0;b!==O;++b)U[b]=i[b];_.clippingState=U,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=G}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,v,y,E){const D=x!==null?x.length:0;let M=null;if(D!==0){if(M=m.value,E!==!0||M===null){const _=y+D*4,G=v.matrixWorldInverse;d.getNormalMatrix(G),(M===null||M.length<_)&&(M=new Float32Array(_));for(let O=0,U=y;O!==D;++O,U+=4)h.copy(x[O]).applyMatrix4(G,d),h.normal.toArray(M,U),M[U+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=D,t.numIntersection=0,M}}function hM(s){let t=new WeakMap;function i(h,d){return d===cu?h.mapping=Ur:d===uu&&(h.mapping=Lr),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===cu||d===uu)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Zx(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const $r=4,Kp=[.125,.215,.35,.446,.526,.582],fr=20,yf=new Yp,Qp=new Se;let Sf=null,Mf=0,Ef=0,bf=!1;const hr=(1+Math.sqrt(5))/2,ts=1/hr,Jp=[new rt(-hr,ts,0),new rt(hr,ts,0),new rt(-ts,0,hr),new rt(ts,0,hr),new rt(0,hr,-ts),new rt(0,hr,ts),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],dM=new rt;class $p{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:h=256,position:d=dM}=u;Sf=this._renderer.getRenderTarget(),Mf=this._renderer.getActiveCubeFace(),Ef=this._renderer.getActiveMipmapLevel(),bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sf,Mf,Ef),this._renderer.xr.enabled=bf,t.scissorTest=!1,Dl(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ur||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sf=this._renderer.getRenderTarget(),Mf=this._renderer.getActiveCubeFace(),Ef=this._renderer.getActiveMipmapLevel(),bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:Fs,format:Si,colorSpace:Nr,depthBuffer:!1},l=tm(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tm(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pM(u)),this._blurMaterial=mM(u,t,i)}return l}_compileMaterial(t){const i=new Fi(this._lodPlanes[0],t);this._renderer.compile(i,yf)}_sceneToCubeUV(t,i,r,l,u){const m=new Ri(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,y=x.toneMapping;x.getClearColor(Qp),x.toneMapping=xa,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null));const D=new Dp({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),M=new Fi(new $s,D);let _=!1;const G=t.background;G?G.isColor&&(D.color.copy(G),t.background=null,_=!0):(D.color.copy(Qp),_=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[O],u.y,u.z)):U===1?(m.up.set(0,0,p[O]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[O],u.z)):(m.up.set(0,p[O],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[O]));const b=this._cubeSize;Dl(l,U*b,O>2?b:0,b,b),x.setRenderTarget(l),_&&x.render(M,m),x.render(t,m)}M.geometry.dispose(),M.material.dispose(),x.toneMapping=y,x.autoClear=v,t.background=G}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ur||t.mapping===Lr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=em());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new Fi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Dl(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,yf)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Jp[(l-u-1)%Jp.length];this._blur(t,u-1,u,h,d)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new Fi(this._lodPlanes[l],p),v=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*fr-1),D=u/E,M=isFinite(u)?1+Math.floor(g*D):fr;M>fr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${fr}`);const _=[];let G=0;for(let F=0;F<fr;++F){const X=F/D,C=Math.exp(-X*X/2);_.push(C),F===0?G+=C:F<M&&(G+=2*C)}for(let F=0;F<_.length;F++)_[F]=_[F]/G;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=_,v.latitudinal.value=h==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:O}=this;v.dTheta.value=E,v.mipInt.value=O-r;const U=this._sizeLods[l],b=3*U*(l>O-$r?l-O+$r:0),z=4*(this._cubeSize-U);Dl(i,b,z,3*U,2*U),m.setRenderTarget(i),m.render(x,yf)}}function pM(s){const t=[],i=[],r=[];let l=s;const u=s-$r+1+Kp.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>s-$r?m=Kp[h-s+$r-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),g=-p,x=1+p,v=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,E=6,D=3,M=2,_=1,G=new Float32Array(D*E*y),O=new Float32Array(M*E*y),U=new Float32Array(_*E*y);for(let z=0;z<y;z++){const F=z%3*2/3-1,X=z>2?0:-1,C=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];G.set(C,D*E*z),O.set(v,M*E*z);const w=[z,z,z,z,z,z];U.set(w,_*E*z)}const b=new Bi;b.setAttribute("position",new On(G,D)),b.setAttribute("uv",new On(O,M)),b.setAttribute("faceIndex",new On(U,_)),t.push(b),l>$r&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function tm(s,t,i){const r=new ir(s,t,i);return r.texture.mapping=$o,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Dl(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function mM(s,t,i){const r=new Float32Array(fr),l=new rt(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Tf(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function em(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tf(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function nm(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function Tf(){return`

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
	`}function gM(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===cu||m===uu,g=m===Ur||m===Lr;if(p||g){let x=t.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new $p(s)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new $p(s)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function vM(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&qs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function _M(s,t,i,r){const l={},u=new WeakMap;function h(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",h),delete l[v.id];const y=u.get(v);y&&(t.remove(y),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(x,v){return l[v.id]===!0||(v.addEventListener("dispose",h),l[v.id]=!0,i.memory.geometries++),v}function m(x){const v=x.attributes;for(const y in v)t.update(v[y],s.ARRAY_BUFFER)}function p(x){const v=[],y=x.index,E=x.attributes.position;let D=0;if(y!==null){const G=y.array;D=y.version;for(let O=0,U=G.length;O<U;O+=3){const b=G[O+0],z=G[O+1],F=G[O+2];v.push(b,z,z,F,F,b)}}else if(E!==void 0){const G=E.array;D=E.version;for(let O=0,U=G.length/3-1;O<U;O+=3){const b=O+0,z=O+1,F=O+2;v.push(b,z,z,F,F,b)}}else return;const M=new(pp(v)?Lp:Up)(v,1);M.version=D;const _=u.get(x);_&&t.remove(_),u.set(x,M)}function g(x){const v=u.get(x);if(v){const y=x.index;y!==null&&v.version<y.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function xM(s,t,i){let r;function l(v){r=v}let u,h;function d(v){u=v.type,h=v.bytesPerElement}function m(v,y){s.drawElements(r,y,u,v*h),i.update(y,r,1)}function p(v,y,E){E!==0&&(s.drawElementsInstanced(r,y,u,v*h,E),i.update(y,r,E))}function g(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,v,0,E);let M=0;for(let _=0;_<E;_++)M+=y[_];i.update(M,r,1)}function x(v,y,E,D){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<v.length;_++)p(v[_]/h,y[_],D[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,u,v,0,D,0,E);let _=0;for(let G=0;G<E;G++)_+=y[G]*D[G];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function yM(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function SM(s,t,i){const r=new WeakMap,l=new ee;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let C=function(){F.dispose(),r.delete(d),d.removeEventListener("dispose",C)};v!==void 0&&v.texture.dispose();const y=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,D=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],_=d.morphAttributes.normal||[],G=d.morphAttributes.color||[];let O=0;y===!0&&(O=1),E===!0&&(O=2),D===!0&&(O=3);let U=d.attributes.position.count*O,b=1;U>t.maxTextureSize&&(b=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const z=new Float32Array(U*b*4*x),F=new _p(z,U,b,x);F.type=ji,F.needsUpdate=!0;const X=O*4;for(let w=0;w<x;w++){const I=M[w],Z=_[w],et=G[w],ft=U*b*4*w;for(let ct=0;ct<I.count;ct++){const P=ct*X;y===!0&&(l.fromBufferAttribute(I,ct),z[ft+P+0]=l.x,z[ft+P+1]=l.y,z[ft+P+2]=l.z,z[ft+P+3]=0),E===!0&&(l.fromBufferAttribute(Z,ct),z[ft+P+4]=l.x,z[ft+P+5]=l.y,z[ft+P+6]=l.z,z[ft+P+7]=0),D===!0&&(l.fromBufferAttribute(et,ct),z[ft+P+8]=l.x,z[ft+P+9]=l.y,z[ft+P+10]=l.z,z[ft+P+11]=et.itemSize===4?l.w:1)}}v={count:x,texture:F,size:new Ae(U,b)},r.set(d,v),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let y=0;for(let D=0;D<p.length;D++)y+=p[D];const E=d.morphTargetsRelative?1:1-y;m.getUniforms().setValue(s,"morphTargetBaseInfluence",E),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:u}}function MM(s,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const im=new In,am=new Wp(1,1),rm=new _p,sm=new Ux,om=new Hp,lm=[],cm=[],um=new Float32Array(16),fm=new Float32Array(9),hm=new Float32Array(4);function es(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=lm[l];if(u===void 0&&(u=new Float32Array(l),lm[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(u,d)}return u}function mn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function gn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Ul(s,t){let i=cm[t];i===void 0&&(i=new Int32Array(t),cm[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function EM(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function bM(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;s.uniform2fv(this.addr,t),gn(i,t)}}function TM(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;s.uniform3fv(this.addr,t),gn(i,t)}}function AM(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;s.uniform4fv(this.addr,t),gn(i,t)}}function RM(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;hm.set(r),s.uniformMatrix2fv(this.addr,!1,hm),gn(i,r)}}function wM(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;fm.set(r),s.uniformMatrix3fv(this.addr,!1,fm),gn(i,r)}}function CM(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(mn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,r))return;um.set(r),s.uniformMatrix4fv(this.addr,!1,um),gn(i,r)}}function DM(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function UM(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;s.uniform2iv(this.addr,t),gn(i,t)}}function LM(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;s.uniform3iv(this.addr,t),gn(i,t)}}function NM(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;s.uniform4iv(this.addr,t),gn(i,t)}}function OM(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function PM(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;s.uniform2uiv(this.addr,t),gn(i,t)}}function zM(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;s.uniform3uiv(this.addr,t),gn(i,t)}}function BM(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;s.uniform4uiv(this.addr,t),gn(i,t)}}function FM(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(am.compareFunction=cp,u=am):u=im,i.setTexture2D(t||u,l)}function IM(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||sm,l)}function HM(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||om,l)}function GM(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||rm,l)}function VM(s){switch(s){case 5126:return EM;case 35664:return bM;case 35665:return TM;case 35666:return AM;case 35674:return RM;case 35675:return wM;case 35676:return CM;case 5124:case 35670:return DM;case 35667:case 35671:return UM;case 35668:case 35672:return LM;case 35669:case 35673:return NM;case 5125:return OM;case 36294:return PM;case 36295:return zM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return FM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return GM}}function kM(s,t){s.uniform1fv(this.addr,t)}function XM(s,t){const i=es(t,this.size,2);s.uniform2fv(this.addr,i)}function WM(s,t){const i=es(t,this.size,3);s.uniform3fv(this.addr,i)}function qM(s,t){const i=es(t,this.size,4);s.uniform4fv(this.addr,i)}function YM(s,t){const i=es(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function ZM(s,t){const i=es(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function jM(s,t){const i=es(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function KM(s,t){s.uniform1iv(this.addr,t)}function QM(s,t){s.uniform2iv(this.addr,t)}function JM(s,t){s.uniform3iv(this.addr,t)}function $M(s,t){s.uniform4iv(this.addr,t)}function tE(s,t){s.uniform1uiv(this.addr,t)}function eE(s,t){s.uniform2uiv(this.addr,t)}function nE(s,t){s.uniform3uiv(this.addr,t)}function iE(s,t){s.uniform4uiv(this.addr,t)}function aE(s,t,i){const r=this.cache,l=t.length,u=Ul(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||im,u[h])}function rE(s,t,i){const r=this.cache,l=t.length,u=Ul(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||sm,u[h])}function sE(s,t,i){const r=this.cache,l=t.length,u=Ul(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||om,u[h])}function oE(s,t,i){const r=this.cache,l=t.length,u=Ul(i,l);mn(r,u)||(s.uniform1iv(this.addr,u),gn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||rm,u[h])}function lE(s){switch(s){case 5126:return kM;case 35664:return XM;case 35665:return WM;case 35666:return qM;case 35674:return YM;case 35675:return ZM;case 35676:return jM;case 5124:case 35670:return KM;case 35667:case 35671:return QM;case 35668:case 35672:return JM;case 35669:case 35673:return $M;case 5125:return tE;case 36294:return eE;case 36295:return nE;case 36296:return iE;case 35678:case 36198:case 36298:case 36306:case 35682:return aE;case 35679:case 36299:case 36307:return rE;case 35680:case 36300:case 36308:case 36293:return sE;case 36289:case 36303:case 36311:case 36292:return oE}}class cE{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=VM(i.type)}}class uE{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=lE(i.type)}}class fE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Af=/(\w+)(\])?(\[|\.)?/g;function dm(s,t){s.seq.push(t),s.map[t.id]=t}function hE(s,t,i){const r=s.name,l=r.length;for(Af.lastIndex=0;;){const u=Af.exec(r),h=Af.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){dm(i,p===void 0?new cE(d,s,t):new uE(d,s,t));break}else{let x=i.map[d];x===void 0&&(x=new fE(d),dm(i,x)),i=x}}}class Ll{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);hE(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function pm(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const dE=37297;let pE=0;function mE(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const mm=new me;function gE(s){De._getMatrix(mm,De.workingColorSpace,s);const t=`mat3( ${mm.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(s)){case rl:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function gm(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),u=(s.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+mE(s.getShaderSource(t),d)}else return u}function vE(s,t){const i=gE(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function _E(s,t){let i;switch(t){case k_:i="Linear";break;case X_:i="Reinhard";break;case W_:i="Cineon";break;case q_:i="ACESFilmic";break;case Z_:i="AgX";break;case j_:i="Neutral";break;case Y_:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nl=new rt;function xE(){De.getLuminanceCoefficients(Nl);const s=Nl.x.toFixed(4),t=Nl.y.toFixed(4),i=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function SE(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function ME(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),h=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function eo(s){return s!==""}function vm(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _m(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const EE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rf(s){return s.replace(EE,TE)}const bE=new Map;function TE(s,t){let i=ge[t];if(i===void 0){const r=bE.get(t);if(r!==void 0)i=ge[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Rf(i)}const AE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xm(s){return s.replace(AE,RE)}function RE(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function ym(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wE(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===jd?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===M_?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===qi&&(t="SHADOWMAP_TYPE_VSM"),t}function CE(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ur:case Lr:t="ENVMAP_TYPE_CUBE";break;case $o:t="ENVMAP_TYPE_CUBE_UV";break}return t}function DE(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Lr:t="ENVMAP_MODE_REFRACTION";break}return t}function UE(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jd:t="ENVMAP_BLENDING_MULTIPLY";break;case G_:t="ENVMAP_BLENDING_MIX";break;case V_:t="ENVMAP_BLENDING_ADD";break}return t}function LE(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function NE(s,t,i,r){const l=s.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=wE(i),p=CE(i),g=DE(i),x=UE(i),v=LE(i),y=yE(i),E=SE(u),D=l.createProgram();let M,_,G=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(eo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(eo).join(`
`),_.length>0&&(_+=`
`)):(M=[ym(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),_=[ym(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==xa?"#define TONE_MAPPING":"",i.toneMapping!==xa?ge.tonemapping_pars_fragment:"",i.toneMapping!==xa?_E("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,vE("linearToOutputTexel",i.outputColorSpace),xE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(eo).join(`
`)),h=Rf(h),h=vm(h,i),h=_m(h,i),d=Rf(d),d=vm(d,i),d=_m(d,i),h=xm(h),d=xm(d),i.isRawShaderMaterial!==!0&&(G=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=G+M+h,U=G+_+d,b=pm(l,l.VERTEX_SHADER,O),z=pm(l,l.FRAGMENT_SHADER,U);l.attachShader(D,b),l.attachShader(D,z),i.index0AttributeName!==void 0?l.bindAttribLocation(D,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(D,0,"position"),l.linkProgram(D);function F(I){if(s.debug.checkShaderErrors){const Z=l.getProgramInfoLog(D)||"",et=l.getShaderInfoLog(b)||"",ft=l.getShaderInfoLog(z)||"",ct=Z.trim(),P=et.trim(),Q=ft.trim();let W=!0,xt=!0;if(l.getProgramParameter(D,l.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,D,b,z);else{const L=gm(l,b,"vertex"),K=gm(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(D,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+ct+`
`+L+`
`+K)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(P===""||Q==="")&&(xt=!1);xt&&(I.diagnostics={runnable:W,programLog:ct,vertexShader:{log:P,prefix:M},fragmentShader:{log:Q,prefix:_}})}l.deleteShader(b),l.deleteShader(z),X=new Ll(l,D),C=ME(l,D)}let X;this.getUniforms=function(){return X===void 0&&F(this),X};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(D,dE)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(D),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=pE++,this.cacheKey=t,this.usedTimes=1,this.program=D,this.vertexShader=b,this.fragmentShader=z,this}let OE=0;class PE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new zE(t),i.set(t,r)),r}}class zE{constructor(t){this.id=OE++,this.code=t,this.usedTimes=0}}function BE(s,t,i,r,l,u,h){const d=new Mp,m=new PE,p=new Set,g=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(C){return p.add(C),C===0?"uv":`uv${C}`}function M(C,w,I,Z,et){const ft=Z.fog,ct=et.geometry,P=C.isMeshStandardMaterial?Z.environment:null,Q=(C.isMeshStandardMaterial?i:t).get(C.envMap||P),W=Q&&Q.mapping===$o?Q.image.height:null,xt=E[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const L=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,K=L!==void 0?L.length:0;let _t=0;ct.morphAttributes.position!==void 0&&(_t=1),ct.morphAttributes.normal!==void 0&&(_t=2),ct.morphAttributes.color!==void 0&&(_t=3);let yt,Dt,Nt,J;if(xt){const he=Ii[xt];yt=he.vertexShader,Dt=he.fragmentShader}else yt=C.vertexShader,Dt=C.fragmentShader,m.update(C),Nt=m.getVertexShaderID(C),J=m.getFragmentShaderID(C);const mt=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),Zt=et.isInstancedMesh===!0,Gt=et.isBatchedMesh===!0,te=!!C.map,ke=!!C.matcap,H=!!Q,ue=!!C.aoMap,ie=!!C.lightMap,Qt=!!C.bumpMap,Ft=!!C.normalMap,le=!!C.displacementMap,It=!!C.emissiveMap,fe=!!C.metalnessMap,Ye=!!C.roughnessMap,Fe=C.anisotropy>0,N=C.clearcoat>0,T=C.dispersion>0,tt=C.iridescence>0,ut=C.sheen>0,dt=C.transmission>0,lt=Fe&&!!C.anisotropyMap,Lt=N&&!!C.clearcoatMap,Rt=N&&!!C.clearcoatNormalMap,Wt=N&&!!C.clearcoatRoughnessMap,qt=tt&&!!C.iridescenceMap,St=tt&&!!C.iridescenceThicknessMap,Ot=ut&&!!C.sheenColorMap,Yt=ut&&!!C.sheenRoughnessMap,Vt=!!C.specularMap,Ct=!!C.specularColorMap,ae=!!C.specularIntensityMap,k=dt&&!!C.transmissionMap,Et=dt&&!!C.thicknessMap,wt=!!C.gradientMap,Ht=!!C.alphaMap,Mt=C.alphaTest>0,gt=!!C.alphaHash,bt=!!C.extensions;let oe=xa;C.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(oe=s.toneMapping);const Re={shaderID:xt,shaderType:C.type,shaderName:C.name,vertexShader:yt,fragmentShader:Dt,defines:C.defines,customVertexShaderID:Nt,customFragmentShaderID:J,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Gt,batchingColor:Gt&&et._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&et.instanceColor!==null,instancingMorph:Zt&&et.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:mt===null?s.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Nr,alphaToCoverage:!!C.alphaToCoverage,map:te,matcap:ke,envMap:H,envMapMode:H&&Q.mapping,envMapCubeUVHeight:W,aoMap:ue,lightMap:ie,bumpMap:Qt,normalMap:Ft,displacementMap:v&&le,emissiveMap:It,normalMapObjectSpace:Ft&&C.normalMapType===tx,normalMapTangentSpace:Ft&&C.normalMapType===$_,metalnessMap:fe,roughnessMap:Ye,anisotropy:Fe,anisotropyMap:lt,clearcoat:N,clearcoatMap:Lt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Wt,dispersion:T,iridescence:tt,iridescenceMap:qt,iridescenceThicknessMap:St,sheen:ut,sheenColorMap:Ot,sheenRoughnessMap:Yt,specularMap:Vt,specularColorMap:Ct,specularIntensityMap:ae,transmission:dt,transmissionMap:k,thicknessMap:Et,gradientMap:wt,opaque:C.transparent===!1&&C.blending===Ja&&C.alphaToCoverage===!1,alphaMap:Ht,alphaTest:Mt,alphaHash:gt,combine:C.combine,mapUv:te&&D(C.map.channel),aoMapUv:ue&&D(C.aoMap.channel),lightMapUv:ie&&D(C.lightMap.channel),bumpMapUv:Qt&&D(C.bumpMap.channel),normalMapUv:Ft&&D(C.normalMap.channel),displacementMapUv:le&&D(C.displacementMap.channel),emissiveMapUv:It&&D(C.emissiveMap.channel),metalnessMapUv:fe&&D(C.metalnessMap.channel),roughnessMapUv:Ye&&D(C.roughnessMap.channel),anisotropyMapUv:lt&&D(C.anisotropyMap.channel),clearcoatMapUv:Lt&&D(C.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&D(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&D(C.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&D(C.iridescenceMap.channel),iridescenceThicknessMapUv:St&&D(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&D(C.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&D(C.sheenRoughnessMap.channel),specularMapUv:Vt&&D(C.specularMap.channel),specularColorMapUv:Ct&&D(C.specularColorMap.channel),specularIntensityMapUv:ae&&D(C.specularIntensityMap.channel),transmissionMapUv:k&&D(C.transmissionMap.channel),thicknessMapUv:Et&&D(C.thicknessMap.channel),alphaMapUv:Ht&&D(C.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Ft||Fe),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!ct.attributes.uv&&(te||Ht),fog:!!ft,useFog:C.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:At,skinning:et.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:_t,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:oe,decodeVideoTexture:te&&C.map.isVideoTexture===!0&&De.getTransfer(C.map.colorSpace)===Be,decodeVideoTextureEmissive:It&&C.emissiveMap.isVideoTexture===!0&&De.getTransfer(C.emissiveMap.colorSpace)===Be,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Yi,flipSided:C.side===Xn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:bt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&C.extensions.multiDraw===!0||Gt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Re.vertexUv1s=p.has(1),Re.vertexUv2s=p.has(2),Re.vertexUv3s=p.has(3),p.clear(),Re}function _(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const I in C.defines)w.push(I),w.push(C.defines[I]);return C.isRawShaderMaterial===!1&&(G(w,C),O(w,C),w.push(s.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function G(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function O(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function U(C){const w=E[C.type];let I;if(w){const Z=Ii[w];I=Xx.clone(Z.uniforms)}else I=C.uniforms;return I}function b(C,w){let I;for(let Z=0,et=g.length;Z<et;Z++){const ft=g[Z];if(ft.cacheKey===w){I=ft,++I.usedTimes;break}}return I===void 0&&(I=new NE(s,w,C,u),g.push(I)),I}function z(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),C.destroy()}}function F(C){m.remove(C)}function X(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:U,acquireProgram:b,releaseProgram:z,releaseShaderCache:F,programs:g,dispose:X}}function FE(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function IE(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Sm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Mm(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(x,v,y,E,D,M){let _=s[t];return _===void 0?(_={id:x.id,object:x,geometry:v,material:y,groupOrder:E,renderOrder:x.renderOrder,z:D,group:M},s[t]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=y,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=D,_.group=M),t++,_}function d(x,v,y,E,D,M){const _=h(x,v,y,E,D,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(x,v,y,E,D,M){const _=h(x,v,y,E,D,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,v){i.length>1&&i.sort(x||IE),r.length>1&&r.sort(v||Sm),l.length>1&&l.sort(v||Sm)}function g(){for(let x=t,v=s.length;x<v;x++){const y=s[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function HE(){let s=new WeakMap;function t(r,l){const u=s.get(r);let h;return u===void 0?(h=new Mm,s.set(r,[h])):l>=u.length?(h=new Mm,u.push(h)):h=u[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function GE(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new rt,color:new Se};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Se,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":i={color:new Se,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return s[t.id]=i,i}}}function VE(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let kE=0;function XE(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function WE(s){const t=new GE,i=VE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new rt);const l=new rt,u=new cn,h=new cn;function d(p){let g=0,x=0,v=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,E=0,D=0,M=0,_=0,G=0,O=0,U=0,b=0,z=0,F=0;p.sort(XE);for(let C=0,w=p.length;C<w;C++){const I=p[C],Z=I.color,et=I.intensity,ft=I.distance,ct=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)g+=Z.r*et,x+=Z.g*et,v+=Z.b*et;else if(I.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(I.sh.coefficients[P],et);F++}else if(I.isDirectionalLight){const P=t.get(I);if(P.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const Q=I.shadow,W=i.get(I);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,r.directionalShadow[y]=W,r.directionalShadowMap[y]=ct,r.directionalShadowMatrix[y]=I.shadow.matrix,G++}r.directional[y]=P,y++}else if(I.isSpotLight){const P=t.get(I);P.position.setFromMatrixPosition(I.matrixWorld),P.color.copy(Z).multiplyScalar(et),P.distance=ft,P.coneCos=Math.cos(I.angle),P.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),P.decay=I.decay,r.spot[D]=P;const Q=I.shadow;if(I.map&&(r.spotLightMap[b]=I.map,b++,Q.updateMatrices(I),I.castShadow&&z++),r.spotLightMatrix[D]=Q.matrix,I.castShadow){const W=i.get(I);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,r.spotShadow[D]=W,r.spotShadowMap[D]=ct,U++}D++}else if(I.isRectAreaLight){const P=t.get(I);P.color.copy(Z).multiplyScalar(et),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),r.rectArea[M]=P,M++}else if(I.isPointLight){const P=t.get(I);if(P.color.copy(I.color).multiplyScalar(I.intensity),P.distance=I.distance,P.decay=I.decay,I.castShadow){const Q=I.shadow,W=i.get(I);W.shadowIntensity=Q.intensity,W.shadowBias=Q.bias,W.shadowNormalBias=Q.normalBias,W.shadowRadius=Q.radius,W.shadowMapSize=Q.mapSize,W.shadowCameraNear=Q.camera.near,W.shadowCameraFar=Q.camera.far,r.pointShadow[E]=W,r.pointShadowMap[E]=ct,r.pointShadowMatrix[E]=I.shadow.matrix,O++}r.point[E]=P,E++}else if(I.isHemisphereLight){const P=t.get(I);P.skyColor.copy(I.color).multiplyScalar(et),P.groundColor.copy(I.groundColor).multiplyScalar(et),r.hemi[_]=P,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=zt.LTC_FLOAT_1,r.rectAreaLTC2=zt.LTC_FLOAT_2):(r.rectAreaLTC1=zt.LTC_HALF_1,r.rectAreaLTC2=zt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=v;const X=r.hash;(X.directionalLength!==y||X.pointLength!==E||X.spotLength!==D||X.rectAreaLength!==M||X.hemiLength!==_||X.numDirectionalShadows!==G||X.numPointShadows!==O||X.numSpotShadows!==U||X.numSpotMaps!==b||X.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=D,r.rectArea.length=M,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=G,r.directionalShadowMap.length=G,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=G,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=U+b-z,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=F,X.directionalLength=y,X.pointLength=E,X.spotLength=D,X.rectAreaLength=M,X.hemiLength=_,X.numDirectionalShadows=G,X.numPointShadows=O,X.numSpotShadows=U,X.numSpotMaps=b,X.numLightProbes=F,r.version=kE++)}function m(p,g){let x=0,v=0,y=0,E=0,D=0;const M=g.matrixWorldInverse;for(let _=0,G=p.length;_<G;_++){const O=p[_];if(O.isDirectionalLight){const U=r.directional[x];U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),x++}else if(O.isSpotLight){const U=r.spot[y];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const U=r.rectArea[E];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(M),h.identity(),u.copy(O.matrixWorld),u.premultiply(M),h.extractRotation(u),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),E++}else if(O.isPointLight){const U=r.point[v];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(M),v++}else if(O.isHemisphereLight){const U=r.hemi[D];U.direction.setFromMatrixPosition(O.matrixWorld),U.direction.transformDirection(M),D++}}}return{setup:d,setupView:m,state:r}}function Em(s){const t=new WE(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function qE(s){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new Em(s),t.set(l,[d])):u>=h.length?(d=new Em(s),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const YE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZE=`uniform sampler2D shadow_pass;
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
}`;function jE(s,t,i){let r=new Gp;const l=new Ae,u=new Ae,h=new ee,d=new ny({depthPacking:J_}),m=new iy,p={},g=i.maxTextureSize,x={[va]:Xn,[Xn]:va,[Yi]:Yi},v=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:YE,fragmentShader:ZE}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new Bi;E.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new Fi(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jd;let _=this.type;this.render=function(z,F,X){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const C=s.getRenderTarget(),w=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(_a),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const et=_!==qi&&this.type===qi,ft=_===qi&&this.type!==qi;for(let ct=0,P=z.length;ct<P;ct++){const Q=z[ct],W=Q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const xt=W.getFrameExtents();if(l.multiply(xt),u.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/xt.x),l.x=u.x*xt.x,W.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/xt.y),l.y=u.y*xt.y,W.mapSize.y=u.y)),W.map===null||et===!0||ft===!0){const K=this.type!==qi?{minFilter:yi,magFilter:yi}:{};W.map!==null&&W.map.dispose(),W.map=new ir(l.x,l.y,K),W.map.texture.name=Q.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const L=W.getViewportCount();for(let K=0;K<L;K++){const _t=W.getViewport(K);h.set(u.x*_t.x,u.y*_t.y,u.x*_t.z,u.y*_t.w),Z.viewport(h),W.updateMatrices(Q,K),r=W.getFrustum(),U(F,X,W.camera,Q,this.type)}W.isPointLightShadow!==!0&&this.type===qi&&G(W,X),W.needsUpdate=!1}_=this.type,M.needsUpdate=!1,s.setRenderTarget(C,w,I)};function G(z,F){const X=t.update(D);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ir(l.x,l.y)),v.uniforms.shadow_pass.value=z.map.texture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(F,null,X,v,D,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(F,null,X,y,D,null)}function O(z,F,X,C){let w=null;const I=X.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(I!==void 0)w=I;else if(w=X.isPointLight===!0?m:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=w.uuid,et=F.uuid;let ft=p[Z];ft===void 0&&(ft={},p[Z]=ft);let ct=ft[et];ct===void 0&&(ct=w.clone(),ft[et]=ct,F.addEventListener("dispose",b)),w=ct}if(w.visible=F.visible,w.wireframe=F.wireframe,C===qi?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:x[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,X.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const Z=s.properties.get(w);Z.light=X}return w}function U(z,F,X,C,w){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&w===qi)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,z.matrixWorld);const et=t.update(z),ft=z.material;if(Array.isArray(ft)){const ct=et.groups;for(let P=0,Q=ct.length;P<Q;P++){const W=ct[P],xt=ft[W.materialIndex];if(xt&&xt.visible){const L=O(z,xt,C,w);z.onBeforeShadow(s,z,F,X,et,L,W),s.renderBufferDirect(X,null,et,L,z,W),z.onAfterShadow(s,z,F,X,et,L,W)}}}else if(ft.visible){const ct=O(z,ft,C,w);z.onBeforeShadow(s,z,F,X,et,ct,null),s.renderBufferDirect(X,null,et,ct,z,null),z.onAfterShadow(s,z,F,X,et,ct,null)}}const Z=z.children;for(let et=0,ft=Z.length;et<ft;et++)U(Z[et],F,X,C,w)}function b(z){z.target.removeEventListener("dispose",b);for(const X in p){const C=p[X],w=z.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const KE={[nu]:iu,[au]:ou,[ru]:lu,[Dr]:su,[iu]:nu,[ou]:au,[lu]:ru,[su]:Dr};function QE(s,t){function i(){let k=!1;const Et=new ee;let wt=null;const Ht=new ee(0,0,0,0);return{setMask:function(Mt){wt!==Mt&&!k&&(s.colorMask(Mt,Mt,Mt,Mt),wt=Mt)},setLocked:function(Mt){k=Mt},setClear:function(Mt,gt,bt,oe,Re){Re===!0&&(Mt*=oe,gt*=oe,bt*=oe),Et.set(Mt,gt,bt,oe),Ht.equals(Et)===!1&&(s.clearColor(Mt,gt,bt,oe),Ht.copy(Et))},reset:function(){k=!1,wt=null,Ht.set(-1,0,0,0)}}}function r(){let k=!1,Et=!1,wt=null,Ht=null,Mt=null;return{setReversed:function(gt){if(Et!==gt){const bt=t.get("EXT_clip_control");gt?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),Et=gt;const oe=Mt;Mt=null,this.setClear(oe)}},getReversed:function(){return Et},setTest:function(gt){gt?mt(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(gt){wt!==gt&&!k&&(s.depthMask(gt),wt=gt)},setFunc:function(gt){if(Et&&(gt=KE[gt]),Ht!==gt){switch(gt){case nu:s.depthFunc(s.NEVER);break;case iu:s.depthFunc(s.ALWAYS);break;case au:s.depthFunc(s.LESS);break;case Dr:s.depthFunc(s.LEQUAL);break;case ru:s.depthFunc(s.EQUAL);break;case su:s.depthFunc(s.GEQUAL);break;case ou:s.depthFunc(s.GREATER);break;case lu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ht=gt}},setLocked:function(gt){k=gt},setClear:function(gt){Mt!==gt&&(Et&&(gt=1-gt),s.clearDepth(gt),Mt=gt)},reset:function(){k=!1,wt=null,Ht=null,Mt=null,Et=!1}}}function l(){let k=!1,Et=null,wt=null,Ht=null,Mt=null,gt=null,bt=null,oe=null,Re=null;return{setTest:function(he){k||(he?mt(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(he){Et!==he&&!k&&(s.stencilMask(he),Et=he)},setFunc:function(he,ai,$e){(wt!==he||Ht!==ai||Mt!==$e)&&(s.stencilFunc(he,ai,$e),wt=he,Ht=ai,Mt=$e)},setOp:function(he,ai,$e){(gt!==he||bt!==ai||oe!==$e)&&(s.stencilOp(he,ai,$e),gt=he,bt=ai,oe=$e)},setLocked:function(he){k=he},setClear:function(he){Re!==he&&(s.clearStencil(he),Re=he)},reset:function(){k=!1,Et=null,wt=null,Ht=null,Mt=null,gt=null,bt=null,oe=null,Re=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},x={},v=new WeakMap,y=[],E=null,D=!1,M=null,_=null,G=null,O=null,U=null,b=null,z=null,F=new Se(0,0,0),X=0,C=!1,w=null,I=null,Z=null,et=null,ft=null;const ct=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Q=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),P=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),P=Q>=2);let xt=null,L={};const K=s.getParameter(s.SCISSOR_BOX),_t=s.getParameter(s.VIEWPORT),yt=new ee().fromArray(K),Dt=new ee().fromArray(_t);function Nt(k,Et,wt,Ht){const Mt=new Uint8Array(4),gt=s.createTexture();s.bindTexture(k,gt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let bt=0;bt<wt;bt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Et,0,s.RGBA,1,1,Ht,0,s.RGBA,s.UNSIGNED_BYTE,Mt):s.texImage2D(Et+bt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Mt);return gt}const J={};J[s.TEXTURE_2D]=Nt(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=Nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=Nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=Nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),mt(s.DEPTH_TEST),h.setFunc(Dr),Qt(!1),Ft(Zd),mt(s.CULL_FACE),ue(_a);function mt(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function At(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function Zt(k,Et){return x[k]!==Et?(s.bindFramebuffer(k,Et),x[k]=Et,k===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Et),k===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Et),!0):!1}function Gt(k,Et){let wt=y,Ht=!1;if(k){wt=v.get(Et),wt===void 0&&(wt=[],v.set(Et,wt));const Mt=k.textures;if(wt.length!==Mt.length||wt[0]!==s.COLOR_ATTACHMENT0){for(let gt=0,bt=Mt.length;gt<bt;gt++)wt[gt]=s.COLOR_ATTACHMENT0+gt;wt.length=Mt.length,Ht=!0}}else wt[0]!==s.BACK&&(wt[0]=s.BACK,Ht=!0);Ht&&s.drawBuffers(wt)}function te(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const ke={[$a]:s.FUNC_ADD,[b_]:s.FUNC_SUBTRACT,[T_]:s.FUNC_REVERSE_SUBTRACT};ke[A_]=s.MIN,ke[R_]=s.MAX;const H={[w_]:s.ZERO,[C_]:s.ONE,[D_]:s.SRC_COLOR,[tu]:s.SRC_ALPHA,[z_]:s.SRC_ALPHA_SATURATE,[O_]:s.DST_COLOR,[L_]:s.DST_ALPHA,[U_]:s.ONE_MINUS_SRC_COLOR,[eu]:s.ONE_MINUS_SRC_ALPHA,[P_]:s.ONE_MINUS_DST_COLOR,[N_]:s.ONE_MINUS_DST_ALPHA,[B_]:s.CONSTANT_COLOR,[F_]:s.ONE_MINUS_CONSTANT_COLOR,[I_]:s.CONSTANT_ALPHA,[H_]:s.ONE_MINUS_CONSTANT_ALPHA};function ue(k,Et,wt,Ht,Mt,gt,bt,oe,Re,he){if(k===_a){D===!0&&(At(s.BLEND),D=!1);return}if(D===!1&&(mt(s.BLEND),D=!0),k!==E_){if(k!==M||he!==C){if((_!==$a||U!==$a)&&(s.blendEquation(s.FUNC_ADD),_=$a,U=$a),he)switch(k){case Ja:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $c:s.blendFunc(s.ONE,s.ONE);break;case Kd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qd:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ja:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $c:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Kd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}G=null,O=null,b=null,z=null,F.set(0,0,0),X=0,M=k,C=he}return}Mt=Mt||Et,gt=gt||wt,bt=bt||Ht,(Et!==_||Mt!==U)&&(s.blendEquationSeparate(ke[Et],ke[Mt]),_=Et,U=Mt),(wt!==G||Ht!==O||gt!==b||bt!==z)&&(s.blendFuncSeparate(H[wt],H[Ht],H[gt],H[bt]),G=wt,O=Ht,b=gt,z=bt),(oe.equals(F)===!1||Re!==X)&&(s.blendColor(oe.r,oe.g,oe.b,Re),F.copy(oe),X=Re),M=k,C=!1}function ie(k,Et){k.side===Yi?At(s.CULL_FACE):mt(s.CULL_FACE);let wt=k.side===Xn;Et&&(wt=!wt),Qt(wt),k.blending===Ja&&k.transparent===!1?ue(_a):ue(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const Ht=k.stencilWrite;d.setTest(Ht),Ht&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),It(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?mt(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(k){w!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),w=k)}function Ft(k){k!==y_?(mt(s.CULL_FACE),k!==I&&(k===Zd?s.cullFace(s.BACK):k===S_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),I=k}function le(k){k!==Z&&(P&&s.lineWidth(k),Z=k)}function It(k,Et,wt){k?(mt(s.POLYGON_OFFSET_FILL),(et!==Et||ft!==wt)&&(s.polygonOffset(Et,wt),et=Et,ft=wt)):At(s.POLYGON_OFFSET_FILL)}function fe(k){k?mt(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function Ye(k){k===void 0&&(k=s.TEXTURE0+ct-1),xt!==k&&(s.activeTexture(k),xt=k)}function Fe(k,Et,wt){wt===void 0&&(xt===null?wt=s.TEXTURE0+ct-1:wt=xt);let Ht=L[wt];Ht===void 0&&(Ht={type:void 0,texture:void 0},L[wt]=Ht),(Ht.type!==k||Ht.texture!==Et)&&(xt!==wt&&(s.activeTexture(wt),xt=wt),s.bindTexture(k,Et||J[k]),Ht.type=k,Ht.texture=Et)}function N(){const k=L[xt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function lt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Wt(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(k){yt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function Yt(k){Dt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Dt.copy(k))}function Vt(k,Et){let wt=p.get(Et);wt===void 0&&(wt=new WeakMap,p.set(Et,wt));let Ht=wt.get(k);Ht===void 0&&(Ht=s.getUniformBlockIndex(Et,k.name),wt.set(k,Ht))}function Ct(k,Et){const Ht=p.get(Et).get(k);m.get(Et)!==Ht&&(s.uniformBlockBinding(Et,Ht,k.__bindingPointIndex),m.set(Et,Ht))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},xt=null,L={},x={},v=new WeakMap,y=[],E=null,D=!1,M=null,_=null,G=null,O=null,U=null,b=null,z=null,F=new Se(0,0,0),X=0,C=!1,w=null,I=null,Z=null,et=null,ft=null,yt.set(0,0,s.canvas.width,s.canvas.height),Dt.set(0,0,s.canvas.width,s.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:mt,disable:At,bindFramebuffer:Zt,drawBuffers:Gt,useProgram:te,setBlending:ue,setMaterial:ie,setFlipSided:Qt,setCullFace:Ft,setLineWidth:le,setPolygonOffset:It,setScissorTest:fe,activeTexture:Ye,bindTexture:Fe,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:tt,texImage2D:qt,texImage3D:St,updateUBOMapping:Vt,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:Wt,texSubImage2D:ut,texSubImage3D:dt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Lt,scissor:Ot,viewport:Yt,reset:ae}}function JE(s,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ae,g=new WeakMap;let x;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,T){return y?new OffscreenCanvas(N,T):ol("canvas")}function D(N,T,tt){let ut=1;const dt=Fe(N);if((dt.width>tt||dt.height>tt)&&(ut=tt/Math.max(dt.width,dt.height)),ut<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const lt=Math.floor(ut*dt.width),Lt=Math.floor(ut*dt.height);x===void 0&&(x=E(lt,Lt));const Rt=T?E(lt,Lt):x;return Rt.width=lt,Rt.height=Lt,Rt.getContext("2d").drawImage(N,0,0,lt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+lt+"x"+Lt+")."),Rt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),N;return N}function M(N){return N.generateMipmaps}function _(N){s.generateMipmap(N)}function G(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function O(N,T,tt,ut,dt=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let lt=T;if(T===s.RED&&(tt===s.FLOAT&&(lt=s.R32F),tt===s.HALF_FLOAT&&(lt=s.R16F),tt===s.UNSIGNED_BYTE&&(lt=s.R8)),T===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(lt=s.R8UI),tt===s.UNSIGNED_SHORT&&(lt=s.R16UI),tt===s.UNSIGNED_INT&&(lt=s.R32UI),tt===s.BYTE&&(lt=s.R8I),tt===s.SHORT&&(lt=s.R16I),tt===s.INT&&(lt=s.R32I)),T===s.RG&&(tt===s.FLOAT&&(lt=s.RG32F),tt===s.HALF_FLOAT&&(lt=s.RG16F),tt===s.UNSIGNED_BYTE&&(lt=s.RG8)),T===s.RG_INTEGER&&(tt===s.UNSIGNED_BYTE&&(lt=s.RG8UI),tt===s.UNSIGNED_SHORT&&(lt=s.RG16UI),tt===s.UNSIGNED_INT&&(lt=s.RG32UI),tt===s.BYTE&&(lt=s.RG8I),tt===s.SHORT&&(lt=s.RG16I),tt===s.INT&&(lt=s.RG32I)),T===s.RGB_INTEGER&&(tt===s.UNSIGNED_BYTE&&(lt=s.RGB8UI),tt===s.UNSIGNED_SHORT&&(lt=s.RGB16UI),tt===s.UNSIGNED_INT&&(lt=s.RGB32UI),tt===s.BYTE&&(lt=s.RGB8I),tt===s.SHORT&&(lt=s.RGB16I),tt===s.INT&&(lt=s.RGB32I)),T===s.RGBA_INTEGER&&(tt===s.UNSIGNED_BYTE&&(lt=s.RGBA8UI),tt===s.UNSIGNED_SHORT&&(lt=s.RGBA16UI),tt===s.UNSIGNED_INT&&(lt=s.RGBA32UI),tt===s.BYTE&&(lt=s.RGBA8I),tt===s.SHORT&&(lt=s.RGBA16I),tt===s.INT&&(lt=s.RGBA32I)),T===s.RGB&&(tt===s.UNSIGNED_INT_5_9_9_9_REV&&(lt=s.RGB9_E5),tt===s.UNSIGNED_INT_10F_11F_11F_REV&&(lt=s.R11F_G11F_B10F)),T===s.RGBA){const Lt=dt?rl:De.getTransfer(ut);tt===s.FLOAT&&(lt=s.RGBA32F),tt===s.HALF_FLOAT&&(lt=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(lt=Lt===Be?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT_4_4_4_4&&(lt=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(lt=s.RGB5_A1)}return(lt===s.R16F||lt===s.R32F||lt===s.RG16F||lt===s.RG32F||lt===s.RGBA16F||lt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function U(N,T){let tt;return N?T===null||T===nr||T===Is?tt=s.DEPTH24_STENCIL8:T===ji?tt=s.DEPTH32F_STENCIL8:T===Bs&&(tt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===nr||T===Is?tt=s.DEPTH_COMPONENT24:T===ji?tt=s.DEPTH_COMPONENT32F:T===Bs&&(tt=s.DEPTH_COMPONENT16),tt}function b(N,T){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==yi&&N.minFilter!==Pi?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function z(N){const T=N.target;T.removeEventListener("dispose",z),X(T),T.isVideoTexture&&g.delete(T)}function F(N){const T=N.target;T.removeEventListener("dispose",F),w(T)}function X(N){const T=r.get(N);if(T.__webglInit===void 0)return;const tt=N.source,ut=v.get(tt);if(ut){const dt=ut[T.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&C(N),Object.keys(ut).length===0&&v.delete(tt)}r.remove(N)}function C(N){const T=r.get(N);s.deleteTexture(T.__webglTexture);const tt=N.source,ut=v.get(tt);delete ut[T.__cacheKey],h.memory.textures--}function w(N){const T=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(T.__webglFramebuffer[ut]))for(let dt=0;dt<T.__webglFramebuffer[ut].length;dt++)s.deleteFramebuffer(T.__webglFramebuffer[ut][dt]);else s.deleteFramebuffer(T.__webglFramebuffer[ut]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ut])}else{if(Array.isArray(T.__webglFramebuffer))for(let ut=0;ut<T.__webglFramebuffer.length;ut++)s.deleteFramebuffer(T.__webglFramebuffer[ut]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ut=0;ut<T.__webglColorRenderbuffer.length;ut++)T.__webglColorRenderbuffer[ut]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ut]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=N.textures;for(let ut=0,dt=tt.length;ut<dt;ut++){const lt=r.get(tt[ut]);lt.__webglTexture&&(s.deleteTexture(lt.__webglTexture),h.memory.textures--),r.remove(tt[ut])}r.remove(N)}let I=0;function Z(){I=0}function et(){const N=I;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),I+=1,N}function ft(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function ct(N,T){const tt=r.get(N);if(N.isVideoTexture&&fe(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&tt.__version!==N.version){const ut=N.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(tt,N,T);return}}else N.isExternalTexture&&(tt.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+T)}function P(N,T){const tt=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){J(tt,N,T);return}i.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+T)}function Q(N,T){const tt=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){J(tt,N,T);return}i.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+T)}function W(N,T){const tt=r.get(N);if(N.version>0&&tt.__version!==N.version){mt(tt,N,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+T)}const xt={[fu]:s.REPEAT,[tr]:s.CLAMP_TO_EDGE,[hu]:s.MIRRORED_REPEAT},L={[yi]:s.NEAREST,[K_]:s.NEAREST_MIPMAP_NEAREST,[tl]:s.NEAREST_MIPMAP_LINEAR,[Pi]:s.LINEAR,[du]:s.LINEAR_MIPMAP_NEAREST,[er]:s.LINEAR_MIPMAP_LINEAR},K={[ex]:s.NEVER,[ox]:s.ALWAYS,[nx]:s.LESS,[cp]:s.LEQUAL,[ix]:s.EQUAL,[sx]:s.GEQUAL,[ax]:s.GREATER,[rx]:s.NOTEQUAL};function _t(N,T){if(T.type===ji&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Pi||T.magFilter===du||T.magFilter===tl||T.magFilter===er||T.minFilter===Pi||T.minFilter===du||T.minFilter===tl||T.minFilter===er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,xt[T.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,xt[T.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,xt[T.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,L[T.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,L[T.minFilter]),T.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,K[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===yi||T.minFilter!==tl&&T.minFilter!==er||T.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function yt(N,T){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",z));const ut=T.source;let dt=v.get(ut);dt===void 0&&(dt={},v.set(ut,dt));const lt=ft(T);if(lt!==N.__cacheKey){dt[lt]===void 0&&(dt[lt]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),dt[lt].usedTimes++;const Lt=dt[N.__cacheKey];Lt!==void 0&&(dt[N.__cacheKey].usedTimes--,Lt.usedTimes===0&&C(T)),N.__cacheKey=lt,N.__webglTexture=dt[lt].texture}return tt}function Dt(N,T,tt){return Math.floor(Math.floor(N/tt)/T)}function Nt(N,T,tt,ut){const lt=N.updateRanges;if(lt.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,tt,ut,T.data);else{lt.sort((St,Ot)=>St.start-Ot.start);let Lt=0;for(let St=1;St<lt.length;St++){const Ot=lt[Lt],Yt=lt[St],Vt=Ot.start+Ot.count,Ct=Dt(Yt.start,T.width,4),ae=Dt(Ot.start,T.width,4);Yt.start<=Vt+1&&Ct===ae&&Dt(Yt.start+Yt.count-1,T.width,4)===Ct?Ot.count=Math.max(Ot.count,Yt.start+Yt.count-Ot.start):(++Lt,lt[Lt]=Yt)}lt.length=Lt+1;const Rt=s.getParameter(s.UNPACK_ROW_LENGTH),Wt=s.getParameter(s.UNPACK_SKIP_PIXELS),qt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let St=0,Ot=lt.length;St<Ot;St++){const Yt=lt[St],Vt=Math.floor(Yt.start/4),Ct=Math.ceil(Yt.count/4),ae=Vt%T.width,k=Math.floor(Vt/T.width),Et=Ct,wt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ae),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),i.texSubImage2D(s.TEXTURE_2D,0,ae,k,Et,wt,tt,ut,T.data)}N.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Rt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,qt)}}function J(N,T,tt){let ut=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ut=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ut=s.TEXTURE_3D);const dt=yt(N,T),lt=T.source;i.bindTexture(ut,N.__webglTexture,s.TEXTURE0+tt);const Lt=r.get(lt);if(lt.version!==Lt.__version||dt===!0){i.activeTexture(s.TEXTURE0+tt);const Rt=De.getPrimaries(De.workingColorSpace),Wt=T.colorSpace===ya?null:De.getPrimaries(T.colorSpace),qt=T.colorSpace===ya||Rt===Wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let St=D(T.image,!1,l.maxTextureSize);St=Ye(T,St);const Ot=u.convert(T.format,T.colorSpace),Yt=u.convert(T.type);let Vt=O(T.internalFormat,Ot,Yt,T.colorSpace,T.isVideoTexture);_t(ut,T);let Ct;const ae=T.mipmaps,k=T.isVideoTexture!==!0,Et=Lt.__version===void 0||dt===!0,wt=lt.dataReady,Ht=b(T,St);if(T.isDepthTexture)Vt=U(T.format===Gs,T.type),Et&&(k?i.texStorage2D(s.TEXTURE_2D,1,Vt,St.width,St.height):i.texImage2D(s.TEXTURE_2D,0,Vt,St.width,St.height,0,Ot,Yt,null));else if(T.isDataTexture)if(ae.length>0){k&&Et&&i.texStorage2D(s.TEXTURE_2D,Ht,Vt,ae[0].width,ae[0].height);for(let Mt=0,gt=ae.length;Mt<gt;Mt++)Ct=ae[Mt],k?wt&&i.texSubImage2D(s.TEXTURE_2D,Mt,0,0,Ct.width,Ct.height,Ot,Yt,Ct.data):i.texImage2D(s.TEXTURE_2D,Mt,Vt,Ct.width,Ct.height,0,Ot,Yt,Ct.data);T.generateMipmaps=!1}else k?(Et&&i.texStorage2D(s.TEXTURE_2D,Ht,Vt,St.width,St.height),wt&&Nt(T,St,Ot,Yt)):i.texImage2D(s.TEXTURE_2D,0,Vt,St.width,St.height,0,Ot,Yt,St.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Et&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,Vt,ae[0].width,ae[0].height,St.depth);for(let Mt=0,gt=ae.length;Mt<gt;Mt++)if(Ct=ae[Mt],T.format!==Si)if(Ot!==null)if(k){if(wt)if(T.layerUpdates.size>0){const bt=Zp(Ct.width,Ct.height,T.format,T.type);for(const oe of T.layerUpdates){const Re=Ct.data.subarray(oe*bt/Ct.data.BYTES_PER_ELEMENT,(oe+1)*bt/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,oe,Ct.width,Ct.height,1,Ot,Re)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,0,Ct.width,Ct.height,St.depth,Ot,Ct.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Mt,Vt,Ct.width,Ct.height,St.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?wt&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Mt,0,0,0,Ct.width,Ct.height,St.depth,Ot,Yt,Ct.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Mt,Vt,Ct.width,Ct.height,St.depth,0,Ot,Yt,Ct.data)}else{k&&Et&&i.texStorage2D(s.TEXTURE_2D,Ht,Vt,ae[0].width,ae[0].height);for(let Mt=0,gt=ae.length;Mt<gt;Mt++)Ct=ae[Mt],T.format!==Si?Ot!==null?k?wt&&i.compressedTexSubImage2D(s.TEXTURE_2D,Mt,0,0,Ct.width,Ct.height,Ot,Ct.data):i.compressedTexImage2D(s.TEXTURE_2D,Mt,Vt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?wt&&i.texSubImage2D(s.TEXTURE_2D,Mt,0,0,Ct.width,Ct.height,Ot,Yt,Ct.data):i.texImage2D(s.TEXTURE_2D,Mt,Vt,Ct.width,Ct.height,0,Ot,Yt,Ct.data)}else if(T.isDataArrayTexture)if(k){if(Et&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,Vt,St.width,St.height,St.depth),wt)if(T.layerUpdates.size>0){const Mt=Zp(St.width,St.height,T.format,T.type);for(const gt of T.layerUpdates){const bt=St.data.subarray(gt*Mt/St.data.BYTES_PER_ELEMENT,(gt+1)*Mt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,St.width,St.height,1,Ot,Yt,bt)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Ot,Yt,St.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Vt,St.width,St.height,St.depth,0,Ot,Yt,St.data);else if(T.isData3DTexture)k?(Et&&i.texStorage3D(s.TEXTURE_3D,Ht,Vt,St.width,St.height,St.depth),wt&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Ot,Yt,St.data)):i.texImage3D(s.TEXTURE_3D,0,Vt,St.width,St.height,St.depth,0,Ot,Yt,St.data);else if(T.isFramebufferTexture){if(Et)if(k)i.texStorage2D(s.TEXTURE_2D,Ht,Vt,St.width,St.height);else{let Mt=St.width,gt=St.height;for(let bt=0;bt<Ht;bt++)i.texImage2D(s.TEXTURE_2D,bt,Vt,Mt,gt,0,Ot,Yt,null),Mt>>=1,gt>>=1}}else if(ae.length>0){if(k&&Et){const Mt=Fe(ae[0]);i.texStorage2D(s.TEXTURE_2D,Ht,Vt,Mt.width,Mt.height)}for(let Mt=0,gt=ae.length;Mt<gt;Mt++)Ct=ae[Mt],k?wt&&i.texSubImage2D(s.TEXTURE_2D,Mt,0,0,Ot,Yt,Ct):i.texImage2D(s.TEXTURE_2D,Mt,Vt,Ot,Yt,Ct);T.generateMipmaps=!1}else if(k){if(Et){const Mt=Fe(St);i.texStorage2D(s.TEXTURE_2D,Ht,Vt,Mt.width,Mt.height)}wt&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ot,Yt,St)}else i.texImage2D(s.TEXTURE_2D,0,Vt,Ot,Yt,St);M(T)&&_(ut),Lt.__version=lt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function mt(N,T,tt){if(T.image.length!==6)return;const ut=yt(N,T),dt=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+tt);const lt=r.get(dt);if(dt.version!==lt.__version||ut===!0){i.activeTexture(s.TEXTURE0+tt);const Lt=De.getPrimaries(De.workingColorSpace),Rt=T.colorSpace===ya?null:De.getPrimaries(T.colorSpace),Wt=T.colorSpace===ya||Lt===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const qt=T.isCompressedTexture||T.image[0].isCompressedTexture,St=T.image[0]&&T.image[0].isDataTexture,Ot=[];for(let gt=0;gt<6;gt++)!qt&&!St?Ot[gt]=D(T.image[gt],!0,l.maxCubemapSize):Ot[gt]=St?T.image[gt].image:T.image[gt],Ot[gt]=Ye(T,Ot[gt]);const Yt=Ot[0],Vt=u.convert(T.format,T.colorSpace),Ct=u.convert(T.type),ae=O(T.internalFormat,Vt,Ct,T.colorSpace),k=T.isVideoTexture!==!0,Et=lt.__version===void 0||ut===!0,wt=dt.dataReady;let Ht=b(T,Yt);_t(s.TEXTURE_CUBE_MAP,T);let Mt;if(qt){k&&Et&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ht,ae,Yt.width,Yt.height);for(let gt=0;gt<6;gt++){Mt=Ot[gt].mipmaps;for(let bt=0;bt<Mt.length;bt++){const oe=Mt[bt];T.format!==Si?Vt!==null?k?wt&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,bt,0,0,oe.width,oe.height,Vt,oe.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,bt,ae,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,bt,0,0,oe.width,oe.height,Vt,Ct,oe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,bt,ae,oe.width,oe.height,0,Vt,Ct,oe.data)}}}else{if(Mt=T.mipmaps,k&&Et){Mt.length>0&&Ht++;const gt=Fe(Ot[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ht,ae,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(St){k?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ot[gt].width,Ot[gt].height,Vt,Ct,Ot[gt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ae,Ot[gt].width,Ot[gt].height,0,Vt,Ct,Ot[gt].data);for(let bt=0;bt<Mt.length;bt++){const Re=Mt[bt].image[gt].image;k?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,bt+1,0,0,Re.width,Re.height,Vt,Ct,Re.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,bt+1,ae,Re.width,Re.height,0,Vt,Ct,Re.data)}}else{k?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Vt,Ct,Ot[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ae,Vt,Ct,Ot[gt]);for(let bt=0;bt<Mt.length;bt++){const oe=Mt[bt];k?wt&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,bt+1,0,0,Vt,Ct,oe.image[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,bt+1,ae,Vt,Ct,oe.image[gt])}}}M(T)&&_(s.TEXTURE_CUBE_MAP),lt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function At(N,T,tt,ut,dt,lt){const Lt=u.convert(tt.format,tt.colorSpace),Rt=u.convert(tt.type),Wt=O(tt.internalFormat,Lt,Rt,tt.colorSpace),qt=r.get(T),St=r.get(tt);if(St.__renderTarget=T,!qt.__hasExternalTextures){const Ot=Math.max(1,T.width>>lt),Yt=Math.max(1,T.height>>lt);dt===s.TEXTURE_3D||dt===s.TEXTURE_2D_ARRAY?i.texImage3D(dt,lt,Wt,Ot,Yt,T.depth,0,Lt,Rt,null):i.texImage2D(dt,lt,Wt,Ot,Yt,0,Lt,Rt,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),It(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ut,dt,St.__webglTexture,0,le(T)):(dt===s.TEXTURE_2D||dt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ut,dt,St.__webglTexture,lt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(N,T,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,N),T.depthBuffer){const ut=T.depthTexture,dt=ut&&ut.isDepthTexture?ut.type:null,lt=U(T.stencilBuffer,dt),Lt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=le(T);It(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,lt,T.width,T.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,lt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,lt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Lt,s.RENDERBUFFER,N)}else{const ut=T.textures;for(let dt=0;dt<ut.length;dt++){const lt=ut[dt],Lt=u.convert(lt.format,lt.colorSpace),Rt=u.convert(lt.type),Wt=O(lt.internalFormat,Lt,Rt,lt.colorSpace),qt=le(T);tt&&It(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,Wt,T.width,T.height):It(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,Wt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Wt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Gt(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=r.get(T.depthTexture);ut.__renderTarget=T,(!ut.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ct(T.depthTexture,0);const dt=ut.__webglTexture,lt=le(T);if(T.depthTexture.format===Hs)It(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0);else if(T.depthTexture.format===Gs)It(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0,lt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function te(N){const T=r.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const ut=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ut){const dt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ut.removeEventListener("dispose",dt)};ut.addEventListener("dispose",dt),T.__depthDisposeCallback=dt}T.__boundDepthTexture=ut}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const ut=N.texture.mipmaps;ut&&ut.length>0?Gt(T.__webglFramebuffer[0],N):Gt(T.__webglFramebuffer,N)}else if(tt){T.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ut]),T.__webglDepthbuffer[ut]===void 0)T.__webglDepthbuffer[ut]=s.createRenderbuffer(),Zt(T.__webglDepthbuffer[ut],N,!1);else{const dt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer[ut];s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,lt)}}else{const ut=N.texture.mipmaps;if(ut&&ut.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Zt(T.__webglDepthbuffer,N,!1);else{const dt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,lt),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,lt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(N,T,tt){const ut=r.get(N);T!==void 0&&At(ut.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&te(N)}function H(N){const T=N.texture,tt=r.get(N),ut=r.get(T);N.addEventListener("dispose",F);const dt=N.textures,lt=N.isWebGLCubeRenderTarget===!0,Lt=dt.length>1;if(Lt||(ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture()),ut.__version=T.version,h.memory.textures++),lt){tt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Rt]=[];for(let Wt=0;Wt<T.mipmaps.length;Wt++)tt.__webglFramebuffer[Rt][Wt]=s.createFramebuffer()}else tt.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Rt=0;Rt<T.mipmaps.length;Rt++)tt.__webglFramebuffer[Rt]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(Lt)for(let Rt=0,Wt=dt.length;Rt<Wt;Rt++){const qt=r.get(dt[Rt]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),h.memory.textures++)}if(N.samples>0&&It(N)===!1){tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<dt.length;Rt++){const Wt=dt[Rt];tt.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt]);const qt=u.convert(Wt.format,Wt.colorSpace),St=u.convert(Wt.type),Ot=O(Wt.internalFormat,qt,St,Wt.colorSpace,N.isXRRenderTarget===!0),Yt=le(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,Ot,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),Zt(tt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(lt){i.bindTexture(s.TEXTURE_CUBE_MAP,ut.__webglTexture),_t(s.TEXTURE_CUBE_MAP,T);for(let Rt=0;Rt<6;Rt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)At(tt.__webglFramebuffer[Rt][Wt],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Wt);else At(tt.__webglFramebuffer[Rt],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(T)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Lt){for(let Rt=0,Wt=dt.length;Rt<Wt;Rt++){const qt=dt[Rt],St=r.get(qt);let Ot=s.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ot=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ot,St.__webglTexture),_t(Ot,qt),At(tt.__webglFramebuffer,N,qt,s.COLOR_ATTACHMENT0+Rt,Ot,0),M(qt)&&_(Ot)}i.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Rt=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ut.__webglTexture),_t(Rt,T),T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)At(tt.__webglFramebuffer[Wt],N,T,s.COLOR_ATTACHMENT0,Rt,Wt);else At(tt.__webglFramebuffer,N,T,s.COLOR_ATTACHMENT0,Rt,0);M(T)&&_(Rt),i.unbindTexture()}N.depthBuffer&&te(N)}function ue(N){const T=N.textures;for(let tt=0,ut=T.length;tt<ut;tt++){const dt=T[tt];if(M(dt)){const lt=G(N),Lt=r.get(dt).__webglTexture;i.bindTexture(lt,Lt),_(lt),i.unbindTexture()}}}const ie=[],Qt=[];function Ft(N){if(N.samples>0){if(It(N)===!1){const T=N.textures,tt=N.width,ut=N.height;let dt=s.COLOR_BUFFER_BIT;const lt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=r.get(N),Rt=T.length>1;if(Rt)for(let qt=0;qt<T.length;qt++)i.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const Wt=N.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let qt=0;qt<T.length;qt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(dt|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(dt|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[qt]);const St=r.get(T[qt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,St,0)}s.blitFramebuffer(0,0,tt,ut,0,0,tt,ut,dt,s.NEAREST),m===!0&&(ie.length=0,Qt.length=0,ie.push(s.COLOR_ATTACHMENT0+qt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(ie.push(lt),Qt.push(lt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Qt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let qt=0;qt<T.length;qt++){i.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[qt]);const St=r.get(T[qt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qt,s.TEXTURE_2D,St,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const T=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function le(N){return Math.min(l.maxSamples,N.samples)}function It(N){const T=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function fe(N){const T=h.render.frame;g.get(N)!==T&&(g.set(N,T),N.update())}function Ye(N,T){const tt=N.colorSpace,ut=N.format,dt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==Nr&&tt!==ya&&(De.getTransfer(tt)===Be?(ut!==Si||dt!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function Fe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=et,this.resetTextureUnits=Z,this.setTexture2D=ct,this.setTexture2DArray=P,this.setTexture3D=Q,this.setTextureCube=W,this.rebindTextures=ke,this.setupRenderTarget=H,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=At,this.useMultisampledRTT=It}function $E(s,t){function i(r,l=ya){let u;const h=De.getTransfer(l);if(r===Zi)return s.UNSIGNED_BYTE;if(r===mu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===gu)return s.UNSIGNED_SHORT_5_5_5_1;if(r===np)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ip)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===tp)return s.BYTE;if(r===ep)return s.SHORT;if(r===Bs)return s.UNSIGNED_SHORT;if(r===pu)return s.INT;if(r===nr)return s.UNSIGNED_INT;if(r===ji)return s.FLOAT;if(r===Fs)return s.HALF_FLOAT;if(r===ap)return s.ALPHA;if(r===rp)return s.RGB;if(r===Si)return s.RGBA;if(r===Hs)return s.DEPTH_COMPONENT;if(r===Gs)return s.DEPTH_STENCIL;if(r===sp)return s.RED;if(r===vu)return s.RED_INTEGER;if(r===op)return s.RG;if(r===_u)return s.RG_INTEGER;if(r===xu)return s.RGBA_INTEGER;if(r===el||r===nl||r===il||r===al)if(h===Be)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===el)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===il)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===al)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===el)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===il)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===al)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===yu||r===Su||r===Mu||r===Eu)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===yu)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Su)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mu)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Eu)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bu||r===Tu||r===Au)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===bu||r===Tu)return h===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Au)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ru||r===wu||r===Cu||r===Du||r===Uu||r===Lu||r===Nu||r===Ou||r===Pu||r===zu||r===Bu||r===Fu||r===Iu||r===Hu)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Ru)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wu)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cu)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Du)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Uu)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lu)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Nu)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ou)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pu)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===zu)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Bu)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fu)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Iu)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hu)return h===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Gu||r===Vu||r===ku)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Gu)return h===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vu)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ku)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Xu||r===Wu||r===qu||r===Yu)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Xu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Wu)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===qu)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yu)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Is?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const t1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class n1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new qp(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ai({vertexShader:t1,fragmentShader:e1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Fi(new to(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i1 extends Pr{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,x=null,v=null,y=null,E=null;const D=typeof XRWebGLBinding<"u",M=new n1,_={},G=i.getContextAttributes();let O=null,U=null;const b=[],z=[],F=new Ae;let X=null;const C=new Ri;C.viewport=new ee;const w=new Ri;w.viewport=new ee;const I=[C,w],Z=new ay;let et=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let mt=b[J];return mt===void 0&&(mt=new vf,b[J]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(J){let mt=b[J];return mt===void 0&&(mt=new vf,b[J]=mt),mt.getGripSpace()},this.getHand=function(J){let mt=b[J];return mt===void 0&&(mt=new vf,b[J]=mt),mt.getHandSpace()};function ct(J){const mt=z.indexOf(J.inputSource);if(mt===-1)return;const At=b[mt];At!==void 0&&(At.update(J.inputSource,J.frame,p||h),At.dispatchEvent({type:J.type,data:J.inputSource}))}function P(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",Q);for(let J=0;J<b.length;J++){const mt=z[J];mt!==null&&(z[J]=null,b[J].disconnect(mt))}et=null,ft=null,M.reset();for(const J in _)delete _[J];t.setRenderTarget(O),y=null,v=null,x=null,l=null,U=null,Nt.stop(),r.isPresenting=!1,t.setPixelRatio(X),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){u=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return x===null&&D&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",P),l.addEventListener("inputsourceschange",Q),G.xrCompatible!==!0&&await i.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(F),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Zt=null,Gt=null;G.depth&&(Gt=G.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,At=G.stencil?Gs:Hs,Zt=G.stencil?Is:nr);const te={colorFormat:i.RGBA8,depthFormat:Gt,scaleFactor:u};x=this.getBinding(),v=x.createProjectionLayer(te),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),U=new ir(v.textureWidth,v.textureHeight,{format:Si,type:Zi,depthTexture:new Wp(v.textureWidth,v.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:G.stencil,colorSpace:t.outputColorSpace,samples:G.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const At={antialias:G.antialias,alpha:!0,depth:G.depth,stencil:G.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,At),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new ir(y.framebufferWidth,y.framebufferHeight,{format:Si,type:Zi,colorSpace:t.outputColorSpace,stencilBuffer:G.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Nt.setContext(l),Nt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Q(J){for(let mt=0;mt<J.removed.length;mt++){const At=J.removed[mt],Zt=z.indexOf(At);Zt>=0&&(z[Zt]=null,b[Zt].disconnect(At))}for(let mt=0;mt<J.added.length;mt++){const At=J.added[mt];let Zt=z.indexOf(At);if(Zt===-1){for(let te=0;te<b.length;te++)if(te>=z.length){z.push(At),Zt=te;break}else if(z[te]===null){z[te]=At,Zt=te;break}if(Zt===-1)break}const Gt=b[Zt];Gt&&Gt.connect(At)}}const W=new rt,xt=new rt;function L(J,mt,At){W.setFromMatrixPosition(mt.matrixWorld),xt.setFromMatrixPosition(At.matrixWorld);const Zt=W.distanceTo(xt),Gt=mt.projectionMatrix.elements,te=At.projectionMatrix.elements,ke=Gt[14]/(Gt[10]-1),H=Gt[14]/(Gt[10]+1),ue=(Gt[9]+1)/Gt[5],ie=(Gt[9]-1)/Gt[5],Qt=(Gt[8]-1)/Gt[0],Ft=(te[8]+1)/te[0],le=ke*Qt,It=ke*Ft,fe=Zt/(-Qt+Ft),Ye=fe*-Qt;if(mt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ye),J.translateZ(fe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Gt[10]===-1)J.projectionMatrix.copy(mt.projectionMatrix),J.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Fe=ke+fe,N=H+fe,T=le-Ye,tt=It+(Zt-Ye),ut=ue*H/N*Fe,dt=ie*H/N*Fe;J.projectionMatrix.makePerspective(T,tt,ut,dt,Fe,N),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function K(J,mt){mt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(mt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let mt=J.near,At=J.far;M.texture!==null&&(M.depthNear>0&&(mt=M.depthNear),M.depthFar>0&&(At=M.depthFar)),Z.near=w.near=C.near=mt,Z.far=w.far=C.far=At,(et!==Z.near||ft!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),et=Z.near,ft=Z.far),Z.layers.mask=J.layers.mask|6,C.layers.mask=Z.layers.mask&3,w.layers.mask=Z.layers.mask&5;const Zt=J.parent,Gt=Z.cameras;K(Z,Zt);for(let te=0;te<Gt.length;te++)K(Gt[te],Zt);Gt.length===2?L(Z,C,w):Z.projectionMatrix.copy(C.projectionMatrix),_t(J,Z,Zt)};function _t(J,mt,At){At===null?J.matrix.copy(mt.matrixWorld):(J.matrix.copy(At.matrixWorld),J.matrix.invert(),J.matrix.multiply(mt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(mt.projectionMatrix),J.projectionMatrixInverse.copy(mt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ks*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(J){m=J,v!==null&&(v.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Z)},this.getCameraTexture=function(J){return _[J]};let yt=null;function Dt(J,mt){if(g=mt.getViewerPose(p||h),E=mt,g!==null){const At=g.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let Zt=!1;At.length!==Z.cameras.length&&(Z.cameras.length=0,Zt=!0);for(let H=0;H<At.length;H++){const ue=At[H];let ie=null;if(y!==null)ie=y.getViewport(ue);else{const Ft=x.getViewSubImage(v,ue);ie=Ft.viewport,H===0&&(t.setRenderTargetTextures(U,Ft.colorTexture,Ft.depthStencilTexture),t.setRenderTarget(U))}let Qt=I[H];Qt===void 0&&(Qt=new Ri,Qt.layers.enable(H),Qt.viewport=new ee,I[H]=Qt),Qt.matrix.fromArray(ue.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(ue.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(ie.x,ie.y,ie.width,ie.height),H===0&&(Z.matrix.copy(Qt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Zt===!0&&Z.cameras.push(Qt)}const Gt=l.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&D){x=r.getBinding();const H=x.getDepthInformation(At[0]);H&&H.isValid&&H.texture&&M.init(H,l.renderState)}if(Gt&&Gt.includes("camera-access")&&D){t.state.unbindTexture(),x=r.getBinding();for(let H=0;H<At.length;H++){const ue=At[H].camera;if(ue){let ie=_[ue];ie||(ie=new qp,_[ue]=ie);const Qt=x.getCameraImage(ue);ie.sourceTexture=Qt}}}}for(let At=0;At<b.length;At++){const Zt=z[At],Gt=b[At];Zt!==null&&Gt!==void 0&&Gt.update(Zt,mt,p||h)}yt&&yt(J,mt),mt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:mt}),E=null}const Nt=new jp;Nt.setAnimationLoop(Dt),this.setAnimationLoop=function(J){yt=J},this.dispose=function(){}}}const dr=new $i,a1=new cn;function r1(s,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,zp(s)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,G,O,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),x(M,_)):_.isMeshPhongMaterial?(u(M,_),g(M,_)):_.isMeshStandardMaterial?(u(M,_),v(M,_),_.isMeshPhysicalMaterial&&y(M,_,U)):_.isMeshMatcapMaterial?(u(M,_),E(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),D(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,G,O):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Xn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Xn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const G=t.get(_),O=G.envMap,U=G.envMapRotation;O&&(M.envMap.value=O,dr.copy(U),dr.x*=-1,dr.y*=-1,dr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),M.envMapRotation.value.setFromMatrix4(a1.makeRotationFromEuler(dr)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,G,O){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*G,M.scale.value=O*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function x(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function v(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,G){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=G.texture,M.transmissionSamplerSize.value.set(G.width,G.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function D(M,_){const G=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(G.matrixWorld),M.nearDistance.value=G.shadow.camera.near,M.farDistance.value=G.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function s1(s,t,i,r){let l={},u={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(G,O){const U=O.program;r.uniformBlockBinding(G,U)}function p(G,O){let U=l[G.id];U===void 0&&(E(G),U=g(G),l[G.id]=U,G.addEventListener("dispose",M));const b=O.program;r.updateUBOMapping(G,b);const z=t.render.frame;u[G.id]!==z&&(v(G),u[G.id]=z)}function g(G){const O=x();G.__bindingPointIndex=O;const U=s.createBuffer(),b=G.__size,z=G.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,b,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,U),U}function x(){for(let G=0;G<d;G++)if(h.indexOf(G)===-1)return h.push(G),G;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(G){const O=l[G.id],U=G.uniforms,b=G.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let z=0,F=U.length;z<F;z++){const X=Array.isArray(U[z])?U[z]:[U[z]];for(let C=0,w=X.length;C<w;C++){const I=X[C];if(y(I,z,C,b)===!0){const Z=I.__offset,et=Array.isArray(I.value)?I.value:[I.value];let ft=0;for(let ct=0;ct<et.length;ct++){const P=et[ct],Q=D(P);typeof P=="number"||typeof P=="boolean"?(I.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,Z+ft,I.__data)):P.isMatrix3?(I.__data[0]=P.elements[0],I.__data[1]=P.elements[1],I.__data[2]=P.elements[2],I.__data[3]=0,I.__data[4]=P.elements[3],I.__data[5]=P.elements[4],I.__data[6]=P.elements[5],I.__data[7]=0,I.__data[8]=P.elements[6],I.__data[9]=P.elements[7],I.__data[10]=P.elements[8],I.__data[11]=0):(P.toArray(I.__data,ft),ft+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(G,O,U,b){const z=G.value,F=O+"_"+U;if(b[F]===void 0)return typeof z=="number"||typeof z=="boolean"?b[F]=z:b[F]=z.clone(),!0;{const X=b[F];if(typeof z=="number"||typeof z=="boolean"){if(X!==z)return b[F]=z,!0}else if(X.equals(z)===!1)return X.copy(z),!0}return!1}function E(G){const O=G.uniforms;let U=0;const b=16;for(let F=0,X=O.length;F<X;F++){const C=Array.isArray(O[F])?O[F]:[O[F]];for(let w=0,I=C.length;w<I;w++){const Z=C[w],et=Array.isArray(Z.value)?Z.value:[Z.value];for(let ft=0,ct=et.length;ft<ct;ft++){const P=et[ft],Q=D(P),W=U%b,xt=W%Q.boundary,L=W+xt;U+=xt,L!==0&&b-L<Q.storage&&(U+=b-L),Z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=U,U+=Q.storage}}}const z=U%b;return z>0&&(U+=b-z),G.__size=U,G.__cache={},this}function D(G){const O={boundary:0,storage:0};return typeof G=="number"||typeof G=="boolean"?(O.boundary=4,O.storage=4):G.isVector2?(O.boundary=8,O.storage=8):G.isVector3||G.isColor?(O.boundary=16,O.storage=12):G.isVector4?(O.boundary=16,O.storage=16):G.isMatrix3?(O.boundary=48,O.storage=48):G.isMatrix4?(O.boundary=64,O.storage=64):G.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",G),O}function M(G){const O=G.target;O.removeEventListener("dispose",M);const U=h.indexOf(O.__bindingPointIndex);h.splice(U,1),s.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function _(){for(const G in l)s.deleteBuffer(l[G]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class o1{constructor(t={}){const{canvas:i=bx(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const E=new Uint32Array(4),D=new Int32Array(4);let M=null,_=null;const G=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let b=!1;this._outputColorSpace=ti;let z=0,F=0,X=null,C=-1,w=null;const I=new ee,Z=new ee;let et=null;const ft=new Se(0);let ct=0,P=i.width,Q=i.height,W=1,xt=null,L=null;const K=new ee(0,0,P,Q),_t=new ee(0,0,P,Q);let yt=!1;const Dt=new Gp;let Nt=!1,J=!1;const mt=new cn,At=new rt,Zt=new ee,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function ke(){return X===null?W:1}let H=r;function ue(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Jc}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",Ht,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),H===null){const q="webgl2";if(H=ue(q,R),H===null)throw ue(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ie,Qt,Ft,le,It,fe,Ye,Fe,N,T,tt,ut,dt,lt,Lt,Rt,Wt,qt,St,Ot,Yt,Vt,Ct,ae;function k(){ie=new vM(H),ie.init(),Vt=new $E(H,ie),Qt=new uM(H,ie,t,Vt),Ft=new QE(H,ie),Qt.reversedDepthBuffer&&v&&Ft.buffers.depth.setReversed(!0),le=new yM(H),It=new FE,fe=new JE(H,ie,Ft,It,Qt,Vt,le),Ye=new hM(U),Fe=new gM(U),N=new sy(H),Ct=new lM(H,N),T=new _M(H,N,le,Ct),tt=new MM(H,T,N,le),St=new SM(H,Qt,fe),Rt=new fM(It),ut=new BE(U,Ye,Fe,ie,Qt,Ct,Rt),dt=new r1(U,It),lt=new HE,Lt=new qE(ie),qt=new oM(U,Ye,Fe,Ft,tt,y,m),Wt=new jE(U,tt,Qt),ae=new s1(H,le,Qt,Ft),Ot=new cM(H,ie,le),Yt=new xM(H,ie,le),le.programs=ut.programs,U.capabilities=Qt,U.extensions=ie,U.properties=It,U.renderLists=lt,U.shadowMap=Wt,U.state=Ft,U.info=le}k();const Et=new i1(U,H);this.xr=Et,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=ie.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ie.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(P,Q,!1))},this.getSize=function(R){return R.set(P,Q)},this.setSize=function(R,q,st=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=R,Q=q,i.width=Math.floor(R*W),i.height=Math.floor(q*W),st===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(P*W,Q*W).floor()},this.setDrawingBufferSize=function(R,q,st){P=R,Q=q,W=st,i.width=Math.floor(R*st),i.height=Math.floor(q*st),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(K)},this.setViewport=function(R,q,st,ot){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,q,st,ot),Ft.viewport(I.copy(K).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(_t)},this.setScissor=function(R,q,st,ot){R.isVector4?_t.set(R.x,R.y,R.z,R.w):_t.set(R,q,st,ot),Ft.scissor(Z.copy(_t).multiplyScalar(W).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(R){Ft.setScissorTest(yt=R)},this.setOpaqueSort=function(R){xt=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,st=!0){let ot=0;if(R){let j=!1;if(X!==null){const Tt=X.texture.format;j=Tt===xu||Tt===_u||Tt===vu}if(j){const Tt=X.texture.type,Pt=Tt===Zi||Tt===nr||Tt===Bs||Tt===Is||Tt===mu||Tt===gu,kt=qt.getClearColor(),Bt=qt.getClearAlpha(),$t=kt.r,re=kt.g,jt=kt.b;Pt?(E[0]=$t,E[1]=re,E[2]=jt,E[3]=Bt,H.clearBufferuiv(H.COLOR,0,E)):(D[0]=$t,D[1]=re,D[2]=jt,D[3]=Bt,H.clearBufferiv(H.COLOR,0,D))}else ot|=H.COLOR_BUFFER_BIT}q&&(ot|=H.DEPTH_BUFFER_BIT),st&&(ot|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",Ht,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),qt.dispose(),lt.dispose(),Lt.dispose(),It.dispose(),Ye.dispose(),Fe.dispose(),tt.dispose(),Ct.dispose(),ae.dispose(),ut.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",$e),Et.removeEventListener("sessionend",sn),Oe.stop()};function wt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ht(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=le.autoReset,q=Wt.enabled,st=Wt.autoUpdate,ot=Wt.needsUpdate,j=Wt.type;k(),le.autoReset=R,Wt.enabled=q,Wt.autoUpdate=st,Wt.needsUpdate=ot,Wt.type=j}function Mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function gt(R){const q=R.target;q.removeEventListener("dispose",gt),bt(q)}function bt(R){oe(R),It.remove(R)}function oe(R){const q=It.get(R).programs;q!==void 0&&(q.forEach(function(st){ut.releaseProgram(st)}),R.isShaderMaterial&&ut.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,st,ot,j,Tt){q===null&&(q=Gt);const Pt=j.isMesh&&j.matrixWorld.determinant()<0,kt=Hi(R,q,st,ot,j);Ft.setMaterial(ot,Pt);let Bt=st.index,$t=1;if(ot.wireframe===!0){if(Bt=T.getWireframeAttribute(st),Bt===void 0)return;$t=2}const re=st.drawRange,jt=st.attributes.position;let ve=re.start*$t,Ue=(re.start+re.count)*$t;Tt!==null&&(ve=Math.max(ve,Tt.start*$t),Ue=Math.min(Ue,(Tt.start+Tt.count)*$t)),Bt!==null?(ve=Math.max(ve,0),Ue=Math.min(Ue,Bt.count)):jt!=null&&(ve=Math.max(ve,0),Ue=Math.min(Ue,jt.count));const Qe=Ue-ve;if(Qe<0||Qe===1/0)return;Ct.setup(j,ot,kt,st,Bt);let Ie,_e=Ot;if(Bt!==null&&(Ie=N.get(Bt),_e=Yt,_e.setIndex(Ie)),j.isMesh)ot.wireframe===!0?(Ft.setLineWidth(ot.wireframeLinewidth*ke()),_e.setMode(H.LINES)):_e.setMode(H.TRIANGLES);else if(j.isLine){let Jt=ot.linewidth;Jt===void 0&&(Jt=1),Ft.setLineWidth(Jt*ke()),j.isLineSegments?_e.setMode(H.LINES):j.isLineLoop?_e.setMode(H.LINE_LOOP):_e.setMode(H.LINE_STRIP)}else j.isPoints?_e.setMode(H.POINTS):j.isSprite&&_e.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)qs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))_e.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Jt=j._multiDrawStarts,Ke=j._multiDrawCounts,Me=j._multiDrawCount,Pn=Bt?N.get(Bt).bytesPerElement:1,Ui=It.get(ot).currentProgram.getUniforms();for(let Gn=0;Gn<Me;Gn++)Ui.setValue(H,"_gl_DrawID",Gn),_e.render(Jt[Gn]/Pn,Ke[Gn])}else if(j.isInstancedMesh)_e.renderInstances(ve,Qe,j.count);else if(st.isInstancedBufferGeometry){const Jt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ke=Math.min(st.instanceCount,Jt);_e.renderInstances(ve,Qe,Ke)}else _e.render(ve,Qe)};function Re(R,q,st){R.transparent===!0&&R.side===Yi&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,Yn(R,q,st),R.side=va,R.needsUpdate=!0,Yn(R,q,st),R.side=Yi):Yn(R,q,st)}this.compile=function(R,q,st=null){st===null&&(st=R),_=Lt.get(st),_.init(q),O.push(_),st.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),R!==st&&R.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const ot=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Pt=0;Pt<Tt.length;Pt++){const kt=Tt[Pt];Re(kt,st,j),ot.add(kt)}else Re(Tt,st,j),ot.add(Tt)}),_=O.pop(),ot},this.compileAsync=function(R,q,st=null){const ot=this.compile(R,q,st);return new Promise(j=>{function Tt(){if(ot.forEach(function(Pt){It.get(Pt).currentProgram.isReady()&&ot.delete(Pt)}),ot.size===0){j(R);return}setTimeout(Tt,10)}ie.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let he=null;function ai(R){he&&he(R)}function $e(){Oe.stop()}function sn(){Oe.start()}const Oe=new jp;Oe.setAnimationLoop(ai),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(R){he=R,Et.setAnimationLoop(R),R===null?Oe.stop():Oe.start()},Et.addEventListener("sessionstart",$e),Et.addEventListener("sessionend",sn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(q),q=Et.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,q,X),_=Lt.get(R,O.length),_.init(q),O.push(_),mt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Dt.setFromProjectionMatrix(mt,zi,q.reversedDepth),J=this.localClippingEnabled,Nt=Rt.init(this.clippingPlanes,J),M=lt.get(R,G.length),M.init(),G.push(M),Et.enabled===!0&&Et.isPresenting===!0){const Tt=U.xr.getDepthSensingMesh();Tt!==null&&Ut(Tt,q,-1/0,U.sortObjects)}Ut(R,q,0,U.sortObjects),M.finish(),U.sortObjects===!0&&M.sort(xt,L),te=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,te&&qt.addToRenderList(M,R),this.info.render.frame++,Nt===!0&&Rt.beginShadows();const st=_.state.shadowsArray;Wt.render(st,R,q),Nt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=M.opaque,j=M.transmissive;if(_.setupLights(),q.isArrayCamera){const Tt=q.cameras;if(j.length>0)for(let Pt=0,kt=Tt.length;Pt<kt;Pt++){const Bt=Tt[Pt];Xe(ot,j,R,Bt)}te&&qt.render(R);for(let Pt=0,kt=Tt.length;Pt<kt;Pt++){const Bt=Tt[Pt];de(M,R,Bt,Bt.viewport)}}else j.length>0&&Xe(ot,j,R,q),te&&qt.render(R),de(M,R,q);X!==null&&F===0&&(fe.updateMultisampleRenderTarget(X),fe.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(U,R,q),Ct.resetDefaultState(),C=-1,w=null,O.pop(),O.length>0?(_=O[O.length-1],Nt===!0&&Rt.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,G.pop(),G.length>0?M=G[G.length-1]:M=null};function Ut(R,q,st,ot){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Dt.intersectsSprite(R)){ot&&Zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(mt);const Pt=tt.update(R),kt=R.material;kt.visible&&M.push(R,Pt,kt,st,Zt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Dt.intersectsObject(R))){const Pt=tt.update(R),kt=R.material;if(ot&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Zt.copy(R.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Zt.copy(Pt.boundingSphere.center)),Zt.applyMatrix4(R.matrixWorld).applyMatrix4(mt)),Array.isArray(kt)){const Bt=Pt.groups;for(let $t=0,re=Bt.length;$t<re;$t++){const jt=Bt[$t],ve=kt[jt.materialIndex];ve&&ve.visible&&M.push(R,Pt,ve,st,Zt.z,jt)}}else kt.visible&&M.push(R,Pt,kt,st,Zt.z,null)}}const Tt=R.children;for(let Pt=0,kt=Tt.length;Pt<kt;Pt++)Ut(Tt[Pt],q,st,ot)}function de(R,q,st,ot){const j=R.opaque,Tt=R.transmissive,Pt=R.transparent;_.setupLightsView(st),Nt===!0&&Rt.setGlobalState(U.clippingPlanes,st),ot&&Ft.viewport(I.copy(ot)),j.length>0&&Ze(j,q,st),Tt.length>0&&Ze(Tt,q,st),Pt.length>0&&Ze(Pt,q,st),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Xe(R,q,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ot.id]===void 0&&(_.state.transmissionRenderTarget[ot.id]=new ir(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?Fs:Zi,minFilter:er,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[ot.id],Pt=ot.viewport||I;Tt.setSize(Pt.z*U.transmissionResolutionScale,Pt.w*U.transmissionResolutionScale);const kt=U.getRenderTarget(),Bt=U.getActiveCubeFace(),$t=U.getActiveMipmapLevel();U.setRenderTarget(Tt),U.getClearColor(ft),ct=U.getClearAlpha(),ct<1&&U.setClearColor(16777215,.5),U.clear(),te&&qt.render(st);const re=U.toneMapping;U.toneMapping=xa;const jt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),_.setupLightsView(ot),Nt===!0&&Rt.setGlobalState(U.clippingPlanes,ot),Ze(R,st,ot),fe.updateMultisampleRenderTarget(Tt),fe.updateRenderTargetMipmap(Tt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Ue=0,Qe=q.length;Ue<Qe;Ue++){const Ie=q[Ue],_e=Ie.object,Jt=Ie.geometry,Ke=Ie.material,Me=Ie.group;if(Ke.side===Yi&&_e.layers.test(ot.layers)){const Pn=Ke.side;Ke.side=Xn,Ke.needsUpdate=!0,fn(_e,st,ot,Jt,Ke,Me),Ke.side=Pn,Ke.needsUpdate=!0,ve=!0}}ve===!0&&(fe.updateMultisampleRenderTarget(Tt),fe.updateRenderTargetMipmap(Tt))}U.setRenderTarget(kt,Bt,$t),U.setClearColor(ft,ct),jt!==void 0&&(ot.viewport=jt),U.toneMapping=re}function Ze(R,q,st){const ot=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Tt=R.length;j<Tt;j++){const Pt=R[j],kt=Pt.object,Bt=Pt.geometry,$t=Pt.group;let re=Pt.material;re.allowOverride===!0&&ot!==null&&(re=ot),kt.layers.test(st.layers)&&fn(kt,q,st,Bt,re,$t)}}function fn(R,q,st,ot,j,Tt){R.onBeforeRender(U,q,st,ot,j,Tt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(U,q,st,ot,R,Tt),j.transparent===!0&&j.side===Yi&&j.forceSinglePass===!1?(j.side=Xn,j.needsUpdate=!0,U.renderBufferDirect(st,q,ot,j,R,Tt),j.side=va,j.needsUpdate=!0,U.renderBufferDirect(st,q,ot,j,R,Tt),j.side=Yi):U.renderBufferDirect(st,q,ot,j,R,Tt),R.onAfterRender(U,q,st,ot,j,Tt)}function Yn(R,q,st){q.isScene!==!0&&(q=Gt);const ot=It.get(R),j=_.state.lights,Tt=_.state.shadowsArray,Pt=j.state.version,kt=ut.getParameters(R,j.state,Tt,q,st),Bt=ut.getProgramCacheKey(kt);let $t=ot.programs;ot.environment=R.isMeshStandardMaterial?q.environment:null,ot.fog=q.fog,ot.envMap=(R.isMeshStandardMaterial?Fe:Ye).get(R.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",gt),$t=new Map,ot.programs=$t);let re=$t.get(Bt);if(re!==void 0){if(ot.currentProgram===re&&ot.lightsStateVersion===Pt)return Ci(R,kt),re}else kt.uniforms=ut.getUniforms(R),R.onBeforeCompile(kt,U),re=ut.acquireProgram(kt,Bt),$t.set(Bt,re),ot.uniforms=kt.uniforms;const jt=ot.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(jt.clippingPlanes=Rt.uniform),Ci(R,kt),ot.needsLights=Ca(R),ot.lightsStateVersion=Pt,ot.needsLights&&(jt.ambientLightColor.value=j.state.ambient,jt.lightProbe.value=j.state.probe,jt.directionalLights.value=j.state.directional,jt.directionalLightShadows.value=j.state.directionalShadow,jt.spotLights.value=j.state.spot,jt.spotLightShadows.value=j.state.spotShadow,jt.rectAreaLights.value=j.state.rectArea,jt.ltc_1.value=j.state.rectAreaLTC1,jt.ltc_2.value=j.state.rectAreaLTC2,jt.pointLights.value=j.state.point,jt.pointLightShadows.value=j.state.pointShadow,jt.hemisphereLights.value=j.state.hemi,jt.directionalShadowMap.value=j.state.directionalShadowMap,jt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,jt.spotShadowMap.value=j.state.spotShadowMap,jt.spotLightMatrix.value=j.state.spotLightMatrix,jt.spotLightMap.value=j.state.spotLightMap,jt.pointShadowMap.value=j.state.pointShadowMap,jt.pointShadowMatrix.value=j.state.pointShadowMatrix),ot.currentProgram=re,ot.uniformsList=null,re}function Zn(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Ll.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Ci(R,q){const st=It.get(R);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function Hi(R,q,st,ot,j){q.isScene!==!0&&(q=Gt),fe.resetTextureUnits();const Tt=q.fog,Pt=ot.isMeshStandardMaterial?q.environment:null,kt=X===null?U.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Nr,Bt=(ot.isMeshStandardMaterial?Fe:Ye).get(ot.envMap||Pt),$t=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,re=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),jt=!!st.morphAttributes.position,ve=!!st.morphAttributes.normal,Ue=!!st.morphAttributes.color;let Qe=xa;ot.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Qe=U.toneMapping);const Ie=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,_e=Ie!==void 0?Ie.length:0,Jt=It.get(ot),Ke=_.state.lights;if(Nt===!0&&(J===!0||R!==w)){const en=R===w&&ot.id===C;Rt.setState(ot,R,en)}let Me=!1;ot.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Ke.state.version||Jt.outputColorSpace!==kt||j.isBatchedMesh&&Jt.batching===!1||!j.isBatchedMesh&&Jt.batching===!0||j.isBatchedMesh&&Jt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Jt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Jt.instancing===!1||!j.isInstancedMesh&&Jt.instancing===!0||j.isSkinnedMesh&&Jt.skinning===!1||!j.isSkinnedMesh&&Jt.skinning===!0||j.isInstancedMesh&&Jt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Jt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Jt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Jt.instancingMorph===!1&&j.morphTexture!==null||Jt.envMap!==Bt||ot.fog===!0&&Jt.fog!==Tt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Rt.numPlanes||Jt.numIntersection!==Rt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==re||Jt.morphTargets!==jt||Jt.morphNormals!==ve||Jt.morphColors!==Ue||Jt.toneMapping!==Qe||Jt.morphTargetsCount!==_e)&&(Me=!0):(Me=!0,Jt.__version=ot.version);let Pn=Jt.currentProgram;Me===!0&&(Pn=Yn(ot,q,j));let Ui=!1,Gn=!1,En=!1;const We=Pn.getUniforms(),Vn=Jt.uniforms;if(Ft.useProgram(Pn.program)&&(Ui=!0,Gn=!0,En=!0),ot.id!==C&&(C=ot.id,Gn=!0),Ui||w!==R){Ft.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),We.setValue(H,"projectionMatrix",R.projectionMatrix),We.setValue(H,"viewMatrix",R.matrixWorldInverse);const Rn=We.map.cameraPosition;Rn!==void 0&&Rn.setValue(H,At.setFromMatrixPosition(R.matrixWorld)),Qt.logarithmicDepthBuffer&&We.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&We.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Gn=!0,En=!0)}if(j.isSkinnedMesh){We.setOptional(H,j,"bindMatrix"),We.setOptional(H,j,"bindMatrixInverse");const en=j.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),We.setValue(H,"boneTexture",en.boneTexture,fe))}j.isBatchedMesh&&(We.setOptional(H,j,"batchingTexture"),We.setValue(H,"batchingTexture",j._matricesTexture,fe),We.setOptional(H,j,"batchingIdTexture"),We.setValue(H,"batchingIdTexture",j._indirectTexture,fe),We.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&We.setValue(H,"batchingColorTexture",j._colorsTexture,fe));const zn=st.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&St.update(j,st,Pn),(Gn||Jt.receiveShadow!==j.receiveShadow)&&(Jt.receiveShadow=j.receiveShadow,We.setValue(H,"receiveShadow",j.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Vn.envMap.value=Bt,Vn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&q.environment!==null&&(Vn.envMapIntensity.value=q.environmentIntensity),Gn&&(We.setValue(H,"toneMappingExposure",U.toneMappingExposure),Jt.needsLights&&Di(Vn,En),Tt&&ot.fog===!0&&dt.refreshFogUniforms(Vn,Tt),dt.refreshMaterialUniforms(Vn,ot,W,Q,_.state.transmissionRenderTarget[R.id]),Ll.upload(H,Zn(Jt),Vn,fe)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Ll.upload(H,Zn(Jt),Vn,fe),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&We.setValue(H,"center",j.center),We.setValue(H,"modelViewMatrix",j.modelViewMatrix),We.setValue(H,"normalMatrix",j.normalMatrix),We.setValue(H,"modelMatrix",j.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const en=ot.uniformsGroups;for(let Rn=0,is=en.length;Rn<is;Rn++){const jn=en[Rn];ae.update(jn,Pn),ae.bind(jn,Pn)}}return Pn}function Di(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Ca(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,q,st){const ot=It.get(R);ot.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),It.get(R.texture).__webglTexture=q,It.get(R.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const st=It.get(R);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0};const hn=H.createFramebuffer();this.setRenderTarget=function(R,q=0,st=0){X=R,z=q,F=st;let ot=!0,j=null,Tt=!1,Pt=!1;if(R){const Bt=It.get(R);if(Bt.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(H.FRAMEBUFFER,null),ot=!1;else if(Bt.__webglFramebuffer===void 0)fe.setupRenderTarget(R);else if(Bt.__hasExternalTextures)fe.rebindTextures(R,It.get(R.texture).__webglTexture,It.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const jt=R.depthTexture;if(Bt.__boundDepthTexture!==jt){if(jt!==null&&It.has(jt)&&(R.width!==jt.image.width||R.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Pt=!0);const re=It.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(re[q])?j=re[q][st]:j=re[q],Tt=!0):R.samples>0&&fe.useMultisampledRTT(R)===!1?j=It.get(R).__webglMultisampledFramebuffer:Array.isArray(re)?j=re[st]:j=re,I.copy(R.viewport),Z.copy(R.scissor),et=R.scissorTest}else I.copy(K).multiplyScalar(W).floor(),Z.copy(_t).multiplyScalar(W).floor(),et=yt;if(st!==0&&(j=hn),Ft.bindFramebuffer(H.FRAMEBUFFER,j)&&ot&&Ft.drawBuffers(R,j),Ft.viewport(I),Ft.scissor(Z),Ft.setScissorTest(et),Tt){const Bt=It.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Bt.__webglTexture,st)}else if(Pt){const Bt=q;for(let $t=0;$t<R.textures.length;$t++){const re=It.get(R.textures[$t]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+$t,re.__webglTexture,st,Bt)}}else if(R!==null&&st!==0){const Bt=It.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Bt.__webglTexture,st)}C=-1},this.readRenderTargetPixels=function(R,q,st,ot,j,Tt,Pt,kt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pt!==void 0&&(Bt=Bt[Pt]),Bt){Ft.bindFramebuffer(H.FRAMEBUFFER,Bt);try{const $t=R.textures[kt],re=$t.format,jt=$t.type;if(!Qt.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-ot&&st>=0&&st<=R.height-j&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+kt),H.readPixels(q,st,ot,j,Vt.convert(re),Vt.convert(jt),Tt))}finally{const $t=X!==null?It.get(X).__webglFramebuffer:null;Ft.bindFramebuffer(H.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,q,st,ot,j,Tt,Pt,kt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=It.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pt!==void 0&&(Bt=Bt[Pt]),Bt)if(q>=0&&q<=R.width-ot&&st>=0&&st<=R.height-j){Ft.bindFramebuffer(H.FRAMEBUFFER,Bt);const $t=R.textures[kt],re=$t.format,jt=$t.type;if(!Qt.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ve),H.bufferData(H.PIXEL_PACK_BUFFER,Tt.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+kt),H.readPixels(q,st,ot,j,Vt.convert(re),Vt.convert(jt),0);const Ue=X!==null?It.get(X).__webglFramebuffer:null;Ft.bindFramebuffer(H.FRAMEBUFFER,Ue);const Qe=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Tx(H,Qe,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ve),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Tt),H.deleteBuffer(ve),H.deleteSync(Qe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,st=0){const ot=Math.pow(2,-st),j=Math.floor(R.image.width*ot),Tt=Math.floor(R.image.height*ot),Pt=q!==null?q.x:0,kt=q!==null?q.y:0;fe.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,st,0,0,Pt,kt,j,Tt),Ft.unbindTexture()};const Bl=H.createFramebuffer(),Fl=H.createFramebuffer();this.copyTextureToTexture=function(R,q,st=null,ot=null,j=0,Tt=null){Tt===null&&(j!==0?(qs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let Pt,kt,Bt,$t,re,jt,ve,Ue,Qe;const Ie=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(st!==null)Pt=st.max.x-st.min.x,kt=st.max.y-st.min.y,Bt=st.isBox3?st.max.z-st.min.z:1,$t=st.min.x,re=st.min.y,jt=st.isBox3?st.min.z:0;else{const zn=Math.pow(2,-j);Pt=Math.floor(Ie.width*zn),kt=Math.floor(Ie.height*zn),R.isDataArrayTexture?Bt=Ie.depth:R.isData3DTexture?Bt=Math.floor(Ie.depth*zn):Bt=1,$t=0,re=0,jt=0}ot!==null?(ve=ot.x,Ue=ot.y,Qe=ot.z):(ve=0,Ue=0,Qe=0);const _e=Vt.convert(q.format),Jt=Vt.convert(q.type);let Ke;q.isData3DTexture?(fe.setTexture3D(q,0),Ke=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(fe.setTexture2DArray(q,0),Ke=H.TEXTURE_2D_ARRAY):(fe.setTexture2D(q,0),Ke=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Me=H.getParameter(H.UNPACK_ROW_LENGTH),Pn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ui=H.getParameter(H.UNPACK_SKIP_PIXELS),Gn=H.getParameter(H.UNPACK_SKIP_ROWS),En=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ie.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ie.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,$t),H.pixelStorei(H.UNPACK_SKIP_ROWS,re),H.pixelStorei(H.UNPACK_SKIP_IMAGES,jt);const We=R.isDataArrayTexture||R.isData3DTexture,Vn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const zn=It.get(R),en=It.get(q),Rn=It.get(zn.__renderTarget),is=It.get(en.__renderTarget);Ft.bindFramebuffer(H.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Ft.bindFramebuffer(H.DRAW_FRAMEBUFFER,is.__webglFramebuffer);for(let jn=0;jn<Bt;jn++)We&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,It.get(R).__webglTexture,j,jt+jn),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,It.get(q).__webglTexture,Tt,Qe+jn)),H.blitFramebuffer($t,re,Pt,kt,ve,Ue,Pt,kt,H.DEPTH_BUFFER_BIT,H.NEAREST);Ft.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||It.has(R)){const zn=It.get(R),en=It.get(q);Ft.bindFramebuffer(H.READ_FRAMEBUFFER,Bl),Ft.bindFramebuffer(H.DRAW_FRAMEBUFFER,Fl);for(let Rn=0;Rn<Bt;Rn++)We?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,zn.__webglTexture,j,jt+Rn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,zn.__webglTexture,j),Vn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,en.__webglTexture,Tt,Qe+Rn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,en.__webglTexture,Tt),j!==0?H.blitFramebuffer($t,re,Pt,kt,ve,Ue,Pt,kt,H.COLOR_BUFFER_BIT,H.NEAREST):Vn?H.copyTexSubImage3D(Ke,Tt,ve,Ue,Qe+Rn,$t,re,Pt,kt):H.copyTexSubImage2D(Ke,Tt,ve,Ue,$t,re,Pt,kt);Ft.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Vn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Ke,Tt,ve,Ue,Qe,Pt,kt,Bt,_e,Jt,Ie.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(Ke,Tt,ve,Ue,Qe,Pt,kt,Bt,_e,Ie.data):H.texSubImage3D(Ke,Tt,ve,Ue,Qe,Pt,kt,Bt,_e,Jt,Ie):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Tt,ve,Ue,Pt,kt,_e,Jt,Ie.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Tt,ve,Ue,Ie.width,Ie.height,_e,Ie.data):H.texSubImage2D(H.TEXTURE_2D,Tt,ve,Ue,Pt,kt,_e,Jt,Ie);H.pixelStorei(H.UNPACK_ROW_LENGTH,Me),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ui),H.pixelStorei(H.UNPACK_SKIP_ROWS,Gn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,En),Tt===0&&q.generateMipmaps&&H.generateMipmap(Ke),Ft.unbindTexture()},this.initRenderTarget=function(R){It.get(R).__webglFramebuffer===void 0&&fe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?fe.setTextureCube(R,0):R.isData3DTexture?fe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?fe.setTexture2DArray(R,0):fe.setTexture2D(R,0),Ft.unbindTexture()},this.resetState=function(){z=0,F=0,X=null,Ft.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const no={width:1.06,height:.98,lean:0,stretch:0,breath:.018,breathPeriod:4.8,density:1,opacity:1,pointSize:3.4,noise:1,loose:1,noiseSpeed:.35,freeSpread:1,freeSpeed:1,chaos:0,orbit:0,orbitSpeed:.9,stream:0,streamSpeed:.6,streamDir:1,grid:0,dissolve:0,glitch:0,attend:0,warm:1,statusMix:0,openL:1,openR:1,arcL:0,arcR:0,lidL:1.3,lidR:1.3,lidTilt:0,xMix:0,sparkle:0,pupil:1,scaleL:1,scaleR:1,mouth:.55,mouthCurve:1,ring:0,lookX:0,lookY:0,faceX:.1,faceY:.08,spacing:1,gQuestion:0,gExclaim:0,gZzz:0,accentX:.9,accentY:.86,accentPulse:0,accentScale:1,accentOrbit:0,accentAlpha:0,morphHeart:0,morphShield:0,morphHex:0,morphStar:0,light:1,shiver:0,think:0},l1=new Set(["openL","openR","arcL","arcR","lidL","lidR","lidTilt","xMix","sparkle","pupil","scaleL","scaleR","mouth","mouthCurve","ring","lookX","lookY","faceX","faceY","spacing"]),c1=new Set(["gQuestion","gExclaim","gZzz"]);function u1(s){if(l1.has(s))return .09;if(c1.has(s))return .18;switch(s){case"dissolve":return .45;case"stream":case"orbit":case"grid":return .38;case"streamDir":return .3;case"statusMix":case"warm":return .35;case"glitch":return .12;case"morphHeart":case"morphShield":case"morphHex":case"morphStar":return .42;case"accentAlpha":return .3;case"breathPeriod":return 1.2;case"think":return .5;default:return .25}}const bm=["width","height","lean","stretch"],Tm={default:{deep:"#16245e",mid:"#2d5fd0",pale:"#a9c4ef",warm:"#ff5a36",hi:"#ffb38a",accent:"#f2453a"},midnight:{deep:"#0a1236",mid:"#2a3fb8",pale:"#8a9ae6",warm:"#19c6d8",hi:"#a6f2ff",accent:"#3be0f0"},arctic:{deep:"#0f4c7a",mid:"#2f9ad6",pale:"#c4e8f6",warm:"#36d6a0",hi:"#bdf7e0",accent:"#22d39a"},sunset:{deep:"#3a1f5c",mid:"#7b3f9a",pale:"#d8b0e8",warm:"#ff7a3d",hi:"#ffc58a",accent:"#ff5a36"},mint:{deep:"#0b4a4a",mid:"#14a38b",pale:"#a6ead6",warm:"#ffb84d",hi:"#ffe2a6",accent:"#ff9a3d"},amber:{deep:"#5a1f0a",mid:"#e07a1c",pale:"#ffd09a",warm:"#7d5cff",hi:"#cbbcff",accent:"#7d5cff"},lavender:{deep:"#3a2a8a",mid:"#7a5ae0",pale:"#d6c8ff",warm:"#ff8fb8",hi:"#ffd3e4",accent:"#ff6fa5"}},wf={core:{label:"Core",blurb:"Balanced & friendly",palette:"default",params:{},blink:[2.6,6],saccade:[1.2,3.2],gridAffinity:1},scout:{label:"Scout",blurb:"Curious & energetic",palette:{deep:"#12406b",mid:"#2a8fb5",pale:"#a8dbe8",warm:"#ff7a4a",hi:"#ffc2a0",accent:"#ff5a36"},params:{lean:.07,freeSpread:1.35,freeSpeed:1.8,noiseSpeed:.5,pupil:.88,lookX:.25,breathPeriod:3.6},blink:[2,4.5],saccade:[.5,1.4],gridAffinity:.8,probe:6},analyst:{label:"Analyst",blurb:"Focused & precise",palette:{deep:"#23508f",mid:"#5a9be0",pale:"#d2e5f8",warm:"#f39a7a",hi:"#ffd4be",accent:"#f2553a"},params:{noise:.6,freeSpread:.6,density:1.15,ring:1,lidL:.85,lidR:.85,morphHex:.12},blink:[3.5,7],saccade:[1.8,4],gridAffinity:1.4},guardian:{label:"Guardian",blurb:"Protective & serious",palette:{deep:"#4a0f24",mid:"#a8203a",pale:"#f2a8ae",warm:"#ffb23d",hi:"#ffe3a3",accent:"#ffb23d"},params:{width:1.14,density:1.3,freeSpread:.7,noise:.7,lidL:.7,lidR:.7,lidTilt:.2,mouth:.15,morphShield:.3},blink:[3,6.5],saccade:[2,4.5],gridAffinity:1},sage:{label:"Sage",blurb:"Calm & thoughtful",palette:{deep:"#2f3c80",mid:"#7f93d6",pale:"#e1e6f7",warm:"#f5906e",hi:"#ffd6c2",accent:"#f26a4a"},params:{noiseSpeed:.18,breathPeriod:6.5,freeSpread:1.25,freeSpeed:.5,density:.85,lidL:.42,lidR:.42,lidTilt:-.15,mouth:.7},blink:[4,8],saccade:[3,6],gridAffinity:.6},spark:{label:"Spark",blurb:"Bright, animated and enthusiastic",palette:"lavender",params:{breath:.028,breathPeriod:3.2,freeSpeed:1.3,sparkle:.45,mouth:.75,noiseSpeed:.42},blink:[2,4],saccade:[.8,1.8],gridAffinity:.8},diplomat:{label:"Diplomat",blurb:"Attentive, composed and reassuring",palette:"arctic",params:{noise:.75,noiseSpeed:.22,breathPeriod:5.8,freeSpeed:.65,density:1.1,mouth:.45},blink:[3,6],saccade:[1.5,3.5],gridAffinity:1},chaos:{label:"Chaos",blurb:"Creative & unpredictable",palette:{deep:"#34156e",mid:"#8a3fe0",pale:"#dcbcff",warm:"#2fe0c8",hi:"#b8fff2",accent:"#ff4fb8"},params:{noise:1.6,loose:1.5,chaos:1,freeSpread:1.5,freeSpeed:2,scaleR:1.1,noiseSpeed:.55,morphStar:.12},blink:[1.6,4],saccade:[.4,1.2],gridAffinity:.5,randomBurst:4.5}},Am={neutral:{label:"Default",face:{}},happy:{label:"Happy",face:{openL:0,openR:0,arcL:1,arcR:1,mouth:.85},body:{width:.04,height:.02,breath:.01},impulse:"bounce"},love:{label:"Love",face:{openL:0,openR:0,arcL:1,arcR:1,mouth:1},body:{width:.03,breath:.015,morphHeart:.95},impulse:["bounce","sweep"]},excited:{label:"Excited",face:{openL:1.1,openR:1.1,scaleL:1.12,scaleR:1.12,sparkle:1,mouth:.75},body:{height:.06,freeSpread:.4,noise:.3,morphStar:.55},glyph:{gExclaim:.6},impulse:["burst","sweep"]},curious:{label:"Curious",face:{scaleL:.9,scaleR:1.1,lookX:.55,lookY:.12,lidL:.75},body:{lean:.08,accentX:.18,accentAlpha:1}},focused:{label:"Focused",face:{lidL:.38,lidR:.38,lidTilt:.1,mouth:0},body:{freeSpread:-.6,noise:-.4,density:.25,width:-.02}},confused:{label:"Confused",face:{scaleL:.84,scaleR:1.14,lidL:.5,lookX:-.2,lookY:.3,mouth:.25,mouthCurve:-.6},body:{lean:-.07,chaos:.45},glyph:{gQuestion:1}},thinking:{label:"Thinking",face:{lookX:.45,lookY:.7,lidL:.62,lidR:.62,mouth:.2},body:{stretch:-.03,loose:.4}},surprised:{label:"Surprised",face:{openL:1.15,openR:1.15,scaleL:1.18,scaleR:1.18,pupil:.72,mouth:0},glyph:{gExclaim:1},impulse:"surprise"},sleepy:{label:"Sleepy",face:{openL:0,openR:0,arcL:-.9,arcR:-.9,mouth:.2,lookY:-.3},body:{height:-.06,width:.03,noiseSpeed:-.25,breath:.012,breathPeriod:2.2,freeSpread:-.3},glyph:{gZzz:1}},playful:{label:"Playful",face:{openR:0,arcR:.85,scaleL:1.08,lookX:.3,mouth:.95},body:{lean:.06},impulse:"flick"},concern:{label:"Concern",face:{lidL:.72,lidR:.72,lidTilt:-.28,mouth:.15,mouthCurve:-.6},body:{density:.3,freeSpread:-.25}}},Ra={idle:{label:"Idle",hint:"neutral",text:"Ready"},listening:{label:"Listening",add:{noise:-.2},set:{attend:.7,accentAlpha:1},face:{lookY:-.1},hint:"curious",text:"Listening"},thinking:{label:"Thinking",add:{loose:.5,noise:.15},set:{orbit:.38,orbitSpeed:.55,accentOrbit:1,accentAlpha:1,think:1},hint:"thinking",text:"Thinking"},searching:{label:"Searching",add:{loose:.6},set:{stream:.6,streamDir:1,orbit:.32,streamSpeed:.7,accentAlpha:1,accentOrbit:1,think:.45},hint:"focused",text:"Searching your environment"},analyzing:{label:"Analyzing",add:{density:.2},set:{grid:.22,orbit:.3,stream:.4,accentAlpha:1,morphHex:.85,think:.35},hint:"focused",text:"Analyzing findings"},found:{label:"Found it!",set:{stream:.55,streamDir:0,streamSpeed:1.1,accentAlpha:1,accentPulse:1},impulse:["anticipate","sweep"],hint:"surprised",text:"Found results"},answering:{label:"Answering",set:{stream:.32,streamDir:1,streamSpeed:.9,accentAlpha:.7},hint:"neutral",text:"Answering"},talking:{label:"Talking",add:{noise:-.1},set:{accentAlpha:.55},hint:"neutral",text:"Speaking"},success:{label:"Success",add:{width:.04,freeSpread:-.3},set:{statusMix:.32},impulse:["bounce","sweep"],status:"#22b39a",hint:"happy",text:"Done"},warning:{label:"Warning",add:{density:.35,freeSpread:-.3},set:{statusMix:.72,accentAlpha:1,accentPulse:1,morphShield:.9},glyph:{gExclaim:1},impulse:"sweep",status:"#e8473a",hint:"concern",text:"Attention needed"},error:{label:"Error",set:{glitch:1,statusMix:.75,accentAlpha:1},face:{xMix:1,mouth:0},impulse:["glitch","shiver"],status:"#b8233a",hint:"concern",text:"Something went wrong"},dissolving:{label:"Dissolving",set:{dissolve:.82},face:{openL:0,openR:0,arcL:-.5,arcR:-.5},hint:"sleepy",text:"Resting"}},f1=["width","height","lean","stretch","breath","breathPeriod","noise","loose","noiseSpeed","freeSpread","density","chaos","accentX","accentY"];function Rm(s){if(typeof s.theme=="object")return s.theme;if(s.theme!=="auto")return Tm[s.theme];const t=s.character?.theme&&s.character.theme!=="auto"?s.character.theme:wf[s.personality].palette;return typeof t=="object"?t:typeof t=="string"?Tm[t]:t}const io={heart:"morphHeart",shield:"morphShield",hex:"morphHex",star:"morphStar"};function h1(s){let t="blob",i=.35;for(const[r,l]of Object.entries(io))s[l]>i&&(i=s[l],t=r);return t}const d1={neutral:{},masculine:{width:1.12,height:.94,scaleL:.96,scaleR:.96,spacing:1.08},feminine:{width:1.02,height:1.04,scaleL:1.06,scaleR:1.06,spacing:.96}};function wm(s){const t=wf[s.personality];return{...t,...s.character?.behavior,params:{...t.params,...s.character?.params}}}function Cm(s,t){const i=Math.max(0,Math.min(1,s.intensity)),r=wm(s),l=s.expressionDefinition??Am[t],u=Number.isFinite(s.expressionStrength)?Math.max(0,Math.min(2,s.expressionStrength)):1,h=Ra[s.state],d={...no,...wf[s.personality].params,...d1[s.presentation??s.character?.presentation??"neutral"],...s.character?.params},m={...d};for(const[p,g]of Object.entries(l.body??{}))d[p]=f1.includes(p)?d[p]+g*i*u:d[p]+(g-d[p])*u;for(const[p,g]of Object.entries({...l.face,...l.glyph}))d[p]=m[p]+(g-m[p])*u;for(const[p,g]of Object.entries(h.add??{}))d[p]+=g*i;for(const[p,g]of Object.entries(h.set??{}))d[p]=p==="grid"?Math.max(d[p],g*r.gridAffinity):g;if(Object.assign(d,h.face,h.glyph),(s.state==="error"||s.state==="warning")&&(d.gQuestion=0),d.noiseSpeed=Math.max(.04,d.noiseSpeed),s.shape!=="auto"){for(const p of Object.values(io))d[p]=0;s.shape!=="blob"&&(d[io[s.shape]]=1)}for(const p of Object.values(io))d[p]*=i;if(s.customShape&&s.customShape.length>=3){for(const p of Object.values(io))d[p]=0;d.morphHeart=1}for(const[p,g]of Object.entries(s.params??{}))p in no&&Number.isFinite(g)&&(d[p]=g);return d.noiseSpeed=Math.max(.04,d.noiseSpeed),d.breathPeriod=Math.max(.1,d.breathPeriod),s.accent!=="auto"&&(d.accentAlpha=s.accent==="always"?1:0),s.glyphs||(d.gQuestion=d.gExclaim=d.gZzz=0),s.smile||(d.mouth=0),d.light=Math.max(0,Math.min(1,s.lighting)),d}const p1=`

vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);
  const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;
  vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
float hash11(float p){p=fract(p*0.1031);p*=p+33.33;p*=p+p;return fract(p);}

attribute vec3 aHome;
attribute vec4 aSeed;
attribute float aClass;

uniform vec2 uCenter;
uniform float uSize;
uniform float uDpr;
uniform vec4 uShape;      // width, height, lean, stretch
uniform vec3 uBreath;     // amp, phase, density
uniform vec4 uNoise;      // amp, loose, time, unused
uniform vec4 uFree;       // spread, time, chaos, motion
uniform vec3 uOrbit;      // weight, time, unused
uniform vec4 uStream;     // weight, time, dir, unused
uniform vec2 uStreamTarget;
uniform vec4 uFx;         // grid, burst, dissolve, glitch
uniform float uGlitchY;
uniform vec2 uAttend;
uniform vec2 uVel;
uniform vec4 uHover;      // xyz point-light position (unit view space), strength
uniform vec4 uPoke;       // xyz poked surface point (unit view space), age in seconds
uniform vec4 uThink;      // amount, swirl angle, time, unused
uniform vec4 uVoice;      // level, low, mid, high
uniform vec4 uVoice2;     // pitch, fast level, listening weight, talking weight
uniform vec4 uVoice3;     // mouth position (unit view space), wave phase
uniform vec4 uEyeL;       // xy unit, radius, open
uniform vec4 uEyeR;
uniform vec3 uLook;       // pointSize, opacity, warm
uniform vec2 uStatus;     // statusMix, dark
uniform vec4 uRot;        // yaw, pitch, light strength, real time
uniform vec4 uMorph;      // heart, shield, hex, star
uniform vec4 uShapes[128];
uniform vec4 uOrb;        // xyz (unit view space), light intensity
uniform vec3 uOrbCol;
uniform vec4 uSweep;      // light angle, strength, global shiver, unused
uniform vec3 uColDeep;
uniform vec3 uColMid;
uniform vec3 uColPale;
uniform vec3 uColWarm;
uniform vec3 uColHi;
uniform vec3 uColStatus;

varying vec3 vColor;
varying float vAlpha;
varying float vGlint;

vec3 rotateView(vec3 v){
  float cy = cos(uRot.x), sy = sin(uRot.x);
  v = vec3(v.x * cy + v.z * sy, v.y, -v.x * sy + v.z * cy);
  float cp = cos(uRot.y), sp = sin(uRot.y);
  return vec3(v.x, v.y * cp - v.z * sp, v.y * sp + v.z * cp);
}

void main(){
  float isSurf = step(0.5, aClass) * (1.0 - step(1.5, aClass));
  float isFree = step(1.5, aClass);
  float r0 = length(aHome);
  float edge = smoothstep(0.5, 1.12, r0);
  float motion = uFree.w;
  float alpha = 1.0;

  vec3 p = aHome;

  // morph: per-angle radial rescale toward a silhouette table (face region barely moves)
  float wSum = dot(uMorph, vec4(1.0));
  float W = min(wSum, 1.0);
  if (W > 0.001) {
    float fi = (atan(p.y, p.x) / 6.2831853 + 0.5) * 128.0;
    float f0 = floor(fi);
    vec4 rr = mix(uShapes[int(mod(f0, 128.0))], uShapes[int(mod(f0 + 1.0, 128.0))], fi - f0);
    float rs = dot(rr, uMorph) / max(wSum, 1e-4);
    p.xy *= mix(1.0, rs, W * (1.0 - isFree * 0.4));
    p.z *= mix(1.0, 0.82, W);
  }

  // silhouette: soft dome, weighted base (relaxes while morphed)
  float dome = 1.0 - W;
  if (p.y < 0.0) { p.y *= mix(1.0, 0.86, dome); p.x *= 1.0 + (-p.y) * 0.2 * dome; }
  else { p.x *= 1.0 - p.y * 0.07 * dome; }

  float br = 1.0 + uBreath.x * sin(uBreath.y - r0 * 1.4) * (0.6 + edge);
  p.x *= uShape.x * (1.0 - uShape.w * 0.5) * br;
  p.y *= uShape.y * (1.0 + uShape.w) * br;
  p.z *= uShape.x * br;
  p.y += uShape.w * 0.25;
  p.x += (p.y + 0.6) * uShape.z;
  p.xy += uAttend * (0.25 + edge) * 0.12;

  // organic noise
  float tn = uNoise.z;
  vec3 q = aHome * 1.7 + aSeed.xyz * 0.35;
  vec3 n = vec3(
    snoise(q + vec3(tn, 0.0, 0.0)),
    snoise(q + vec3(17.1, tn, 3.3)),
    snoise(q + vec3(5.2, 9.7, tn))
  );
  float chaosAsym = uFree.z * (0.5 + 0.5 * sin(aSeed.x * 40.0 + tn * 2.0));
  float amp = uNoise.x * (0.01 + edge * edge * uNoise.y * 0.07 + isFree * 0.22 * uNoise.y + chaosAsym * 0.08);
  p += n * amp * motion;

  // free particles: atmospheric dust that leaves the body all around and is endlessly re-emitted
  float life = fract(aSeed.x + uFree.y * (0.035 + aSeed.y * 0.03));
  vec3 outward = normalize(aHome + 1e-4);
  vec3 wind = outward * 0.3 + vec3(-0.3, 0.08 + (aSeed.z - 0.5) * 0.3, 0.0) + n * 0.3;
  p = mix(p, p * (0.75 + 0.25 * uFree.x) + wind * life * uFree.x * motion, isFree);
  alpha *= mix(1.0, sin(life * 3.14159) * 0.9 + 0.1, isFree);

  // thinking: inner layers circulate around the vertical axis (core turns faster than the shell)
  float swirlA = uThink.y * (1.25 - r0 * 0.7) * (1.0 - isFree * 0.7);
  float cs = cos(swirlA), ss = sin(swirlA);
  p.xz = vec2(p.x * cs - p.z * ss, p.x * ss + p.z * cs);
  // colour is sampled in space (not per particle) so the dual tone stays put while matter flows through it
  vec3 ph = p;

  // 3D: rotate the body volume (turns toward the pointer, slow sway) + mild perspective
  vec3 body = rotateView(p);
  p = body;
  p.xy *= 1.0 + p.z * 0.07;
  vec3 N = normalize(body + 1e-4);

  // orbit: two thin counter-rotating rings that live in 3D around the body (hidden when behind it)
  float orbTh = fract(aSeed.w * 7.31) * 0.8;
  float orbW = smoothstep(orbTh, orbTh + 0.18, uOrbit.x) * max(isFree, isSurf * step(aSeed.y, 0.5));
  float ringRim = 0.0;
  if (orbW > 0.001) {
    float ring = step(0.5, aSeed.z);
    float R = mix(1.36, 1.5, ring) + (fract(aSeed.z * 13.7) - 0.5) * 0.05;
    float a = uOrbit.y * mix(1.0, -0.8, ring) * (0.9 + aSeed.w * 0.1) + aSeed.x * 6.2831;
    vec3 o = vec3(cos(a) * R, (fract(aSeed.y * 31.0) - 0.5) * 0.03, sin(a) * R);
    float tx = mix(0.3, 0.42, ring);
    o = vec3(o.x, o.y * cos(tx) - o.z * sin(tx), o.y * sin(tx) + o.z * cos(tx));
    float roll = mix(0.28, -0.36, ring);
    o.xy = vec2(o.x * cos(roll) - o.y * sin(roll), o.x * sin(roll) + o.y * cos(roll));
    o = rotateView(o);
    float behind = smoothstep(0.05, -0.2, o.z) * (1.0 - smoothstep(0.82, 1.02, length(o.xy / vec2(uShape.x, uShape.y))));
    p = mix(p, o, orbW);
    alpha *= mix(1.0, (1.0 - behind * 0.94) * (0.75 + 0.25 * o.z), orbW);
    ringRim = orbW * (1.0 - behind);
  }

  // streams toward / from the UI target
  float stTh = fract(aSeed.w * 3.17 + 0.37) * 0.8;
  float stW = smoothstep(stTh, stTh + 0.18, uStream.x) * max(isFree, isSurf * step(aSeed.y, 0.5));
  if (stW > 0.001) {
    float pr = fract(uStream.y * (0.35 + aSeed.z * 0.5) + aSeed.x);
    float prd = mix(1.0 - pr, pr, uStream.z);
    vec3 s0 = p * 0.55;
    vec3 s2 = vec3(uStreamTarget + (aSeed.yz - 0.5) * 0.4, 0.0);
    vec3 s1 = mix(s0, s2, 0.5) + vec3(0.0, 0.55 + (aSeed.w - 0.5) * 1.3, (aSeed.y - 0.5));
    vec3 b = mix(mix(s0, s1, prd), mix(s1, s2, prd), prd);
    b += n * 0.07 * (1.0 + sin(prd * 3.14159) * 2.0);
    p = mix(p, b, stW);
    alpha *= mix(1.0, smoothstep(0.0, 0.08, prd) * smoothstep(0.95, 0.68, prd), stW);
  }

  // structured analysis: snap into lattice lines
  float gW = uFx.x * (1.0 - isFree) * step(0.35, fract(aSeed.z * 5.7));
  vec3 g = floor(p * 9.0 + 0.5) / 9.0;
  vec3 gl = mix(vec3(g.x, p.y, p.z), vec3(p.x, g.y, p.z), step(0.5, aSeed.y));
  p = mix(p, gl + n * 0.004, gW);

  // burst / contraction impulse
  p += N * uFx.y * (0.12 + edge * 0.5 + isFree * 0.8) * (0.5 + aSeed.w);

  // localized glitch band
  float band = smoothstep(0.22, 0.0, abs(p.y - uGlitchY));
  p.x += uFx.w * band * (hash11(floor(uNoise.z * 40.0) + floor(p.y * 14.0)) - 0.5) * 0.45;
  p += N * uFx.w * 0.08 * edge * (hash11(aSeed.x * 91.0 + floor(uNoise.z * 25.0)));

  // dissolve: periphery first, face last
  float faceD = min(length(aHome.xy - uEyeL.xy), length(aHome.xy - uEyeR.xy));
  float th = 1.0 - (edge * 0.6 + aSeed.w * 0.3) + smoothstep(0.55, 0.0, faceD) * 0.25;
  float k = smoothstep(th - 0.25, th + 0.05, uFx.z * 1.6 - 0.15);
  vec3 drift = N + vec3(0.9, 0.5, 0.0) + n * 0.9;
  p += drift * k * (0.6 + aSeed.z * 2.4) * motion;
  alpha *= 1.0 - smoothstep(mix(0.0, 0.55, motion), 1.0, k);

  // poke: a real dent at the touched 3D surface point that springs back,
  // followed by a pressure wave that travels through the volume along the surface normals
  float age = uPoke.w;
  float dk = length(body - uPoke.xyz);
  float dent = exp(-dk * dk / 0.08) * exp(-age * 5.5) * cos(age * 19.0) * 0.17;
  float front = age * 2.4;
  float wave = sin((dk - front) * 15.0) * exp(-pow((dk - front) / 0.24, 2.0)) * exp(-age * 2.6) * (1.0 - isFree * 0.5);
  p -= normalize(uPoke.xyz + 1e-4) * dent * motion;
  p += N * wave * 0.04 * motion * (0.3 + edge);

  // voice. listening: the speaker's voice washes over the surface as a 3D spectrum (lows at the base,
  // highs at the crown) with waves travelling inward. talking: waves leave the mouth across the body.
  float vl = uVoice.x;
  float hgt = clamp(body.y * 0.55 + 0.5, 0.0, 1.0);
  float bandE = mix(mix(uVoice.y, uVoice.z, smoothstep(0.15, 0.5, hgt)), uVoice.w, smoothstep(0.55, 0.9, hgt));
  // long, slow, coherent waves (no per-particle phase): reads as one breathing surface, not shimmer
  float inWave = 0.5 + 0.5 * sin(r0 * 6.0 + uVoice3.w * 2.2);
  float dm = length(body - uVoice3.xyz);
  float outWave = 0.5 + 0.5 * sin(dm * 6.5 - uVoice3.w * 2.4);
  float listenD = uVoice2.z * (bandE * 0.7 + vl * 0.3) * inWave;
  float talkD = uVoice2.w * vl * outWave * exp(-dm * 0.35);
  p += N * (listenD * 0.045 + talkD * 0.15) * motion * (0.3 + edge * 0.7) * (1.0 - isFree);
  // full-body buzz: fast loudness (uVoice2.y) drives a per-particle flutter across the whole volume
  float buzz = uVoice2.w * uVoice2.y * sin(uRot.w * 26.0 + aSeed.x * 87.0 + aSeed.y * 53.0);
  p += N * buzz * 0.055 * motion * (0.35 + edge * 0.65) * (1.0 - isFree * 0.6);
  // loose dust is drawn in while listening and projected outward while talking
  p *= 1.0 + isFree * (uVoice2.w * vl * 0.18 - uVoice2.z * vl * 0.12) * motion;

  // hover: a real point light in front of the body, lighting it by its surface normals
  vec3 toH = uHover.xyz - body;
  vec3 Hd = normalize(toH);
  float hl = uHover.w * max(dot(N, Hd), 0.0) / (1.0 + dot(toH, toH) * 2.0);
  float shiver = (uSweep.z + hl * 0.5) * motion;
  vec3 jit = vec3(sin(uRot.w * 47.0 + aSeed.x * 90.0), sin(uRot.w * 53.0 + aSeed.y * 90.0), sin(uRot.w * 41.0 + aSeed.z * 90.0));
  p += jit * 0.016 * shiver * (0.35 + edge);

  vec2 wp = uCenter + p.xy * uSize;
  wp -= uVel * (edge * 0.6 + isFree) * 0.06 * uSize;

  // negative-space eyes
  float dl = length(p.xy - uEyeL.xy) / max(uEyeL.z, 1e-3);
  float dr2 = length(p.xy - uEyeR.xy) / max(uEyeR.z, 1e-3);
  float hole = min(smoothstep(0.8, 1.35, dl) + (1.0 - uEyeL.w), 1.0) * min(smoothstep(0.8, 1.35, dr2) + (1.0 - uEyeR.w), 1.0);
  alpha *= mix(1.0, hole, step(-0.1, p.z) * (1.0 - isFree));

  // ---- color field (object space, so the warm side turns with the body) ----
  float warmK = smoothstep(0.15, 0.95, ph.x * 0.76 + ph.y * 0.32 + n.x * 0.16);
  vec3 c = mix(uColDeep, uColMid, clamp(smoothstep(0.05, 0.85, r0) * 0.95 + n.y * 0.15 + ph.y * 0.2 + ph.z * 0.15, 0.0, 1.0));
  c = mix(c, uColPale, smoothstep(0.95, 1.5, r0) * (1.0 - warmK * 0.6));
  c = mix(c, uColWarm, warmK * uLook.z * (0.2 + 0.8 * edge));
  c = mix(c, uColHi, smoothstep(0.95, 1.35, r0) * warmK * uLook.z);
  float chaosSplash = uFree.z * step(0.86, aSeed.w) * edge;
  c = mix(c, uColWarm, chaosSplash);
  vec3 statusShade = mix(uColStatus * 0.38, mix(uColStatus, vec3(1.0, 0.85, 0.8), 0.35), smoothstep(0.1, 1.3, r0 + warmK * 0.3));
  c = mix(c, statusShade, uStatus.x);

  // ---- lighting: light travels through the density ----
  float Lk = uRot.z;
  vec3 L = normalize(vec3(-0.5, 0.72, 0.55));
  float surf = smoothstep(0.2, 0.95, r0) * (1.0 - isFree * 0.6);
  float diff = dot(N, L) * 0.5 + 0.5;
  c *= mix(1.0, mix(0.48, 1.32, diff), Lk * mix(0.55, 1.0, surf));
  float ao = smoothstep(0.1, -0.95, N.y) * 0.25 * surf;
  c *= 1.0 - ao * Lk;
  // light colors follow the status ramp so warnings stay crimson instead of turning purple
  vec3 statusLight = mix(uColStatus, vec3(1.0, 0.9, 0.86), 0.45);
  vec3 rimCol = mix(uColPale * 1.15 + 0.06, statusLight, uStatus.x);
  float rim = pow(1.0 - clamp(N.z, 0.0, 1.0), 2.6) * surf;
  c = mix(c, rimCol, rim * 0.42 * Lk);
  // specular sheen only on the outer shell (interior normals are meaningless -> speckle)
  float shell = smoothstep(0.82, 1.0, r0) * (1.0 - isFree);
  float spec = pow(max(dot(reflect(-L, N), vec3(0.0, 0.0, 1.0)), 0.0), 18.0) * shell;
  c += vec3(1.0, 0.97, 0.94) * spec * 0.5 * Lk;
  // warm fill light from the right: the peach/coral side glows like light passing through it
  float fill = pow(max(dot(N, normalize(vec3(0.85, 0.25, 0.45))), 0.0), 1.5) * surf;
  vec3 fillCol = mix(uColWarm * 1.08 + uColHi * 0.12, uColStatus * 1.1, uStatus.x);
  c = mix(c, fillCol, fill * 0.42 * Lk * uLook.z);
  // transmitted warm glow through the thin side
  c += uColHi * pow(warmK, 2.0) * (1.0 - surf) * 0.12 * Lk * uLook.z;

  // accent orb casts colored light onto the body
  vec3 toO = uOrb.xyz - body;
  float od2 = dot(toO, toO);
  float ol = uOrb.w * (0.3 + 0.7 * max(dot(N, normalize(toO)), 0.0)) / (1.0 + od2 * 3.5);
  c = mix(c, uOrbCol * 1.15 + 0.05, clamp(ol * 0.7, 0.0, 0.6));

  // hover point light (diffuse + specular)
  vec3 lightCol = mix(mix(uColPale, statusLight, uStatus.x), vec3(1.0), 0.55);
  float hspec = pow(max(dot(reflect(-Hd, N), vec3(0.0, 0.0, 1.0)), 0.0), 20.0) * shell * uHover.w;
  c = mix(c, lightCol, clamp(hl * (0.35 + 0.4 * surf), 0.0, 0.6));
  c += vec3(1.0, 0.97, 0.94) * hspec * 0.45;
  // poke wave crests catch the key light
  c *= 1.0 + wave * 0.22 * Lk;

  // sweep: a light that glides around the body in 3D (success / found / morph)
  vec3 Ls = normalize(vec3(sin(uSweep.x), 0.35, cos(uSweep.x)));
  float sl = pow(max(dot(N, Ls), 0.0), 5.0) * (0.25 + 0.75 * surf) * uSweep.y;
  float sspec = pow(max(dot(reflect(-Ls, N), vec3(0.0, 0.0, 1.0)), 0.0), 26.0) * shell * uSweep.y;
  c = mix(c, vec3(1.0, 0.97, 0.93), clamp(sl * 0.45 + sspec * 0.7, 0.0, 0.8));

  // thinking: synapse sparks twinkle in the head, soft thought-waves rise through the volume
  float think = uThink.x;
  float headMask = smoothstep(-0.05, 0.45, body.y) * (1.0 - isFree);
  float tw = fract(uThink.z * (0.45 + aSeed.y * 0.6) + aSeed.x * 17.0);
  float spark = step(0.962, aSeed.w) * pow(max(sin(tw * 3.14159), 0.0), 14.0) * headMask * think;
  float tWave = pow(0.5 + 0.5 * sin(body.y * 6.0 - uThink.z * 2.2 + r0 * 2.5), 12.0) * think * (1.0 - isFree) * surf;
  c = mix(c, mix(uColHi, vec3(1.0), 0.55), clamp(spark + tWave * 0.22, 0.0, 0.92));
  // voice light: the rim catches the incoming voice; speech glows from inside around the mouth
  float voiceRim = uVoice2.z * vl * rim;
  c = mix(c, rimCol * 1.1 + 0.08, clamp(voiceRim * 0.8 + listenD * 0.25, 0.0, 0.6));
  float voiceGlow = uVoice2.w * vl * (0.35 + 0.65 * outWave) * exp(-dm * 0.7);
  c = mix(c, mix(uColHi, vec3(1.0), 0.4), clamp(voiceGlow * 0.9, 0.0, 0.75));
  // ring particles read as fine bright filaments
  c = mix(c, mix(uColPale, uColHi, 0.35) * 1.1, ringRim * 0.55);

  c = mix(c, pow(max(c, 0.0), vec3(0.65)) + 0.05, uStatus.y);
  vColor = c;
  vGlint = clamp(spec * 0.6 + hl * 0.35 + sl * 0.6 + sspec + spark + max(wave, 0.0) * 0.4 + voiceGlow * 0.5 + voiceRim * 0.4, 0.0, 1.0);

  float base = mix(mix(0.72, 0.5, isSurf), 0.55, isFree);
  base *= mix(1.0, uBreath.z, 1.0 - edge) * (1.0 + (1.0 - edge) * 0.35);
  base *= 1.0 - warmK * (1.0 - edge) * 0.45;
  alpha *= base * uLook.y * (1.0 - smoothstep(1.05, 1.7, r0) * 0.45);
  alpha *= mix(0.62, 1.0, body.z * 0.5 + 0.5);
  alpha *= 1.0 + vGlint * 0.35;
  alpha *= mix(1.0, 0.55, uStatus.y);
  vAlpha = alpha;

  float sz = clamp(uSize / 150.0, 0.62, 1.5);
  float depthSize = (1.0 + body.z * 0.2 * (1.0 - stW) * (1.0 - orbW) + orbW * p.z * 0.25) * (1.0 - orbW * 0.25) * (1.0 + spark * 1.6);
  gl_PointSize = uLook.x * uDpr * sz * (0.55 + aSeed.y * 0.9) * (1.0 + isFree * 0.25 + chaosSplash * 0.8) * depthSize * (1.0 + vGlint * 0.4);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(wp, p.z * uSize, 1.0);
}
`,m1=`
varying vec3 vColor;
varying float vAlpha;
varying float vGlint;
void main(){
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.1, d) * vAlpha;
  if (a < 0.003) discard;
  // tiny sphere shading per grain: bright core, softer rim
  vec3 col = vColor * (1.12 - d * 0.55) + vec3(1.0) * vGlint * smoothstep(0.3, 0.0, d) * 0.25;
  gl_FragColor = vec4(col, a);
}
`,g1=`
uniform vec2 uCenter;
uniform float uSize;
uniform float uExtent;
varying vec2 vUnit;
void main(){
  vUnit = position.xy * uExtent;
  vec2 wp = uCenter + vUnit * uSize;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(wp, 0.0, 1.0);
}
`,v1=`
uniform vec4 uEyeL;    // xy, radius, open
uniform vec4 uEyeR;
uniform vec4 uEyeLB;   // arc, lid, x-foreshortening, scale
uniform vec4 uEyeRB;
uniform vec4 uFaceA;   // lidTilt, xMix, sparkle, pupil
uniform vec4 uFaceB;   // lookX, lookY, ring, opacity
uniform vec4 uMouth;   // x, y, alpha, curve
uniform vec4 uMouth2;  // talking: open 0..1, width 0..1, alpha, unused
uniform float uPx;     // unit per pixel
uniform float uDark;
uniform vec3 uRingCol;
uniform vec3 uMouthCol;  // chosen on the CPU to contrast with the body behind the mouth
varying vec2 vUnit;

const vec3 WHITE = vec3(1.0, 0.99, 0.97);
const vec3 PUPIL = vec3(0.035, 0.06, 0.16);

float sdSeg(vec2 p, vec2 a, vec2 b){ vec2 pa=p-a, ba=b-a; float h=clamp(dot(pa,ba)/dot(ba,ba),0.0,1.0); return length(pa-ba*h); }

// returns premultiplied rgba
vec4 eye(vec2 p, vec4 A, vec4 B, float side){
  vec2 c = A.xy; float R = A.z; float open = A.w; float arc = B.x; float lid = B.y;
  vec2 q = p - c;
  q.x /= max(B.z, 0.35); // foreshortening as the body turns in 3D
  float aa = uPx * 1.3;
  float ry = R * max(open, 0.05);
  float dE = (length(vec2(q.x, q.y * R / ry)) - R) * min(1.0, ry / R + 0.25);
  float yl = q.y - q.x * uFaceA.x * side;
  float dDisk = max(dE, yl - lid * R);
  float openK = smoothstep(0.12, 0.35, open);
  float sclera = (1.0 - smoothstep(-aa, aa, dDisk)) * openK * (1.0 - uFaceA.y);

  vec2 look = vec2(uFaceB.x, uFaceB.y);
  vec2 pq = q - (look * R * 0.28 + vec2(0.17 * R, 0.0));
  pq.y *= R / ry;
  float dP = length(pq) - R * 0.8 * uFaceA.w;
  float pupil = (1.0 - smoothstep(-aa, aa, dP)) * sclera;

  vec2 hq = pq - vec2(0.3 * R, 0.32 * R);
  float hl = (1.0 - smoothstep(-aa, aa, length(hq) - R * 0.13)) * pupil;
  vec2 sq = abs(pq - vec2(0.05 * R, 0.05 * R)) / (R * 0.55);
  float star = (1.0 - smoothstep(0.9 - aa / R, 0.9 + aa / R, sqrt(sq.x) + sqrt(sq.y))) * pupil * uFaceA.z;
  float hl2 = (1.0 - smoothstep(-aa, aa, length(pq + vec2(0.32 * R, 0.38 * R)) - R * 0.06)) * pupil;

  vec3 col = mix(WHITE, PUPIL, pupil);
  col = mix(col, WHITE, max(max(hl, star), hl2 * 0.8));
  float a = sclera;

  // closed-eye arc: happy (light ∩) / sleepy & blink (dark ∪)
  float closedK = (1.0 - smoothstep(0.08, 0.32, open)) * (1.0 - uFaceA.y);
  float x = clamp(q.x / R, -0.95, 0.95);
  float fy = (arc * (1.0 - x * x) * 0.55 - arc * 0.15) * R;
  float dA = length(vec2(q.x - x * R, q.y - fy)) - R * 0.14;
  float arcA = (1.0 - smoothstep(-aa, aa, dA)) * closedK;
  vec3 arcCol = mix(PUPIL, WHITE, smoothstep(-0.1, 0.4, arc));
  col = mix(col, arcCol, arcA);
  a = max(a, arcA);

  // error X
  float L = R * 0.72;
  float dX = min(sdSeg(q, vec2(-L, -L), vec2(L, L)), sdSeg(q, vec2(-L, L), vec2(L, -L))) - R * 0.17;
  float xA = (1.0 - smoothstep(-aa, aa, dX)) * uFaceA.y;
  col = mix(col, WHITE, xA);
  a = max(a, xA);

  // analyst ring
  float dR = abs(length(q) - R * 1.32) - R * 0.07;
  float ringA = (1.0 - smoothstep(-aa, aa, dR)) * uFaceB.z * 0.85;
  col = mix(col, uRingCol, ringA * (1.0 - a));
  a = max(a, ringA);

  // luminous halo makes the eye feel embedded in the particle field
  float halo = exp(-max(dDisk, 0.0) / (R * 0.3)) * 0.22 * openK * (1.0 - uFaceA.y) * (1.0 - sclera);
  vec3 outc = col * a + WHITE * halo * (1.0 - a);
  return vec4(outc, a + halo * (1.0 - a));
}

void main(){
  vec2 p = vUnit;
  vec4 l = eye(p, vec4(uEyeL.xy, uEyeL.z * uEyeLB.w, uEyeL.w), uEyeLB, -1.0);
  vec4 r = eye(p, vec4(uEyeR.xy, uEyeR.z * uEyeRB.w, uEyeR.w), uEyeRB, 1.0);
  vec4 c = l + r * (1.0 - l.a);

  // bridge for analyst glasses
  float aa = uPx * 1.3;
  vec2 bl = uEyeL.xy + vec2(uEyeL.z * uEyeLB.w * 1.32, 0.0);
  vec2 brp = uEyeR.xy - vec2(uEyeR.z * uEyeRB.w * 1.32, 0.0);
  float dB = sdSeg(p, bl, brp) - uEyeL.z * 0.07;
  float bA = (1.0 - smoothstep(-aa, aa, dB)) * uFaceB.z * 0.85;
  c = c + vec4(uRingCol * bA, bA) * (1.0 - c.a);

  // tiny smile
  float mw = 0.07;
  vec2 mq = p - uMouth.xy;
  float mx = clamp(mq.x / mw, -1.0, 1.0);
  float my = -uMouth.w * (1.0 - mx * mx) * 0.04 + uMouth.w * 0.015;
  float dMc = length(vec2(mq.x - mx * mw, mq.y - my));
  float openK = smoothstep(0.03, 0.16, uMouth2.x) * uMouth2.z;
  float mA = (1.0 - smoothstep(-aa, aa, dMc - 0.018)) * min(uMouth.z * 1.3, 1.0) * (1.0 - openK);
  // soft contrasting halo keeps the smile legible on any palette
  vec3 haloCol = vec3(1.0) - uMouthCol;
  float mHalo = (1.0 - smoothstep(0.0, 0.028, dMc - 0.018)) * uMouth.z * 0.35 * (1.0 - mA) * (1.0 - openK);
  c = c + vec4(haloCol * mHalo, mHalo) * (1.0 - c.a);
  c = c + vec4(uMouthCol * mA, mA) * (1.0 - c.a);

  // talking mouth: opens with vowel energy; flatter upper lip, warm tongue hint, contrasting rim
  vec2 oq = p - (uMouth.xy + vec2(0.0, -0.01));
  float orx = mw * (0.62 + 0.55 * uMouth2.y);
  float ory = 0.014 + uMouth2.x * 0.085;
  oq.y *= oq.y > 0.0 ? 1.7 : 1.0;
  float dO = (length(oq / vec2(orx, ory)) - 1.0) * min(orx, ory);
  float oA = (1.0 - smoothstep(-aa, aa, dO)) * openK;
  vec3 inner = mix(vec3(0.07, 0.03, 0.11), vec3(0.85, 0.36, 0.42), smoothstep(-0.25, -0.9, oq.y / ory) * 0.7);
  float lip = (1.0 - smoothstep(-aa, aa, abs(dO) - 0.0045)) * openK * 0.8;
  c = c + vec4(uMouthCol * lip, lip) * (1.0 - c.a);
  c = c + vec4(inner * oA, oA) * (1.0 - c.a);

  c *= uFaceB.w;
  if (c.a < 0.002) discard;
  gl_FragColor = c;
}
`,_1=`
uniform vec3 uCool;
uniform vec3 uWarm;
uniform vec3 uShadow;
uniform float uAlpha;
uniform float uDark;
uniform float uWarmAmt;
uniform float uGround;
varying vec2 vUnit;
void main(){
  vec2 p = vUnit;
  float r = length(p * vec2(0.9, 1.0));
  float cool = exp(-r * r * 0.9) * 0.22;
  float warm = exp(-dot(p - vec2(0.75, 0.4), p - vec2(0.75, 0.4)) * 3.2) * 0.14 * uWarmAmt;
  vec2 sp = (p - vec2(0.0, uGround)) * vec2(0.9, 5.5);
  float shadow = exp(-dot(sp, sp)) * 0.2;
  float fadeEdge = smoothstep(2.4, 1.6, length(p));
  cool *= fadeEdge; warm *= fadeEdge; shadow *= fadeEdge;
  vec3 c = uCool * cool + uWarm * warm + uShadow * shadow;
  float a = (cool + warm + shadow) * uAlpha * mix(1.0, 1.6, uDark);
  if (a < 0.002) discard;
  gl_FragColor = vec4(c / max(cool + warm + shadow, 1e-3) * a, a);
}
`,x1=`
uniform sampler2D uMap;
uniform float uAlpha;
uniform vec3 uTint;
varying vec2 vUnit;
uniform vec4 uRect; // x, y, halfW, halfH in unit space (relative to quad center)
void main(){
  vec2 uv = (vUnit - uRect.xy) / (uRect.zw * 2.0) + 0.5;
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) discard;
  vec4 t = texture2D(uMap, uv);
  float a = t.a * uAlpha;
  if (a < 0.003) discard;
  gl_FragColor = vec4(uTint * a, a);
}
`,y1=`
attribute vec4 aSeed;    // radius, angle, trail position, type
uniform vec2 uCenter;
uniform float uSize;
uniform float uDpr;
uniform vec4 uMoonStatic; // xyz rest position (unit view space), orbit weight
uniform vec4 uMoonOrbit;  // angle, radius, scale, alpha
uniform vec4 uRotM;       // yaw, pitch, time, pulse
uniform vec2 uBodyWH;
uniform vec3 uColor;
varying vec3 vColor;
varying float vAlpha;

vec3 rotV(vec3 v){
  float cy = cos(uRotM.x), sy = sin(uRotM.x);
  v = vec3(v.x * cy + v.z * sy, v.y, -v.x * sy + v.z * cy);
  float cp = cos(uRotM.y), sp = sin(uRotM.y);
  return vec3(v.x, v.y * cp - v.z * sp, v.y * sp + v.z * cp);
}
vec3 orbitAt(float a){
  float R = uMoonOrbit.y;
  vec3 o = vec3(cos(a) * R, 0.32 + sin(a) * R * 0.2, sin(a) * R);
  return rotV(o);
}

void main(){
  float isTrail = step(0.62, aSeed.w);
  float isGlow = step(0.5, aSeed.w) * (1.0 - isTrail);
  float lag = aSeed.z * aSeed.z * 1.1 * isTrail;
  vec3 restTrail = vec3(-0.18, -0.06, 0.0) * aSeed.z * isTrail;
  vec3 center = mix(uMoonStatic.xyz + restTrail, orbitAt(uMoonOrbit.x - lag), uMoonStatic.w);

  float scale = uMoonOrbit.z * uRotM.w;
  float r = pow(aSeed.x, 1.6) * 0.075 * scale * (1.0 + isTrail * aSeed.z * 0.6) * (1.0 + isGlow * 0.6);
  float th = aSeed.y * 6.2831 + uRotM.z * (0.7 + aSeed.x * 0.8);
  float ph = acos(2.0 * fract(aSeed.y * 7.13) - 1.0);
  vec3 p = center + vec3(sin(ph) * cos(th), sin(ph) * sin(th), cos(ph)) * r;

  float persp = 1.0 + p.z * 0.12;
  vec2 xy = p.xy * persp;
  float inside = 1.0 - smoothstep(0.8, 1.0, length(xy / uBodyWH));
  float occl = 1.0 - inside * smoothstep(0.0, -0.25, p.z) * 0.95;
  float depthK = clamp(1.0 + p.z * 0.4, 0.55, 1.5);

  float core = (1.0 - smoothstep(0.0, 0.45, aSeed.x)) * (1.0 - isTrail) * (1.0 - isGlow);
  vColor = mix(uColor, vec3(1.0, 0.95, 0.9), core * 0.75);
  float a = mix(0.9, 0.5, aSeed.x) * (1.0 - isTrail * smoothstep(0.0, 1.0, aSeed.z) * 0.75);
  a = mix(a, 0.07, isGlow);
  vAlpha = a * uMoonOrbit.w * occl * mix(0.6, 1.0, clamp(depthK - 0.4, 0.0, 1.0));
  float sz = clamp(uSize / 150.0, 0.6, 1.5);
  gl_PointSize = uDpr * sz * depthK * mix(mix(2.4, 2.0, isTrail) + core * 2.4, 12.0 * scale, isGlow);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(uCenter + xy * uSize, 0.0, 1.0);
}
`,S1=`
varying vec3 vColor;
varying float vAlpha;
void main(){
  float d = length(gl_PointCoord - 0.5);
  float a = smoothstep(0.5, 0.0, d) * vAlpha;
  if (a < 0.003) discard;
  gl_FragColor = vec4(vColor * (1.15 - d * 0.6), a);
}
`,ns=128;function M1(){const s=[];for(let t=0;t<200;t++){const i=t/200*Math.PI*2,r=16*Math.sin(i)**3,l=13*Math.cos(i)-5*Math.cos(2*i)-2*Math.cos(3*i)-Math.cos(4*i);s.push([r*.074,(l+1.5)*.074])}return s}function E1(){const s=[];for(let i=0;i<=20;i++){const r=-.98+1.96*i/20;s.push([r,.86+.06*Math.cos(r/.98*Math.PI)-.04])}for(let i=0;i<=30;i++){const r=i/30;s.push([.98*(1-r**1.7),.1-1.28*r])}for(let i=30;i>=0;i--){const r=i/30;s.push([-.98*(1-r**1.7),.1-1.28*r])}return s.reverse()}function b1(){return Array.from({length:6},(s,t)=>{const i=t/6*Math.PI*2;return[Math.cos(i)*1.1,Math.sin(i)*1]})}function T1(){const s=[];for(let i=0;i<80;i++){const r=i/80*Math.PI*2+Math.PI/2,u=.86+.42*Math.pow(.5+.5*Math.cos(r*5-Math.PI/2*5),2.2);s.push([Math.cos(r)*u,Math.sin(r)*u])}return s}function A1(s,t){const i=Math.cos(t),r=Math.sin(t);let l=0;for(let u=0;u<s.length;u++){const[h,d]=s[u],[m,p]=s[(u+1)%s.length],g=m-h,x=p-d,v=i*x-r*g;if(Math.abs(v)<1e-9)continue;const y=(h*x-d*g)/v,E=(h*r-d*i)/v;y>0&&E>=0&&E<=1&&(l=Math.max(l,y))}return l||1}function R1(){const s=[M1(),E1(),b1(),T1()],t=new Float32Array(ns*4);for(let i=0;i<ns;i++){const r=(i/ns-.5)*Math.PI*2;s.forEach((l,u)=>t[i*4+u]=A1(l,r))}return t}const Cf={level:0,low:0,mid:0,high:0,pitch:0,onset:0};let Ol=null;function Df(){return Ol??=new AudioContext,Ol.state==="suspended"&&Ol.resume(),Ol}const wa=s=>Math.min(1,Math.max(0,s)),Uf=s=>{const t=Math.sin(s*127.1+311.7)*43758.5453;return t-Math.floor(t)};function Dm(s,t=1){const i=[],r=[];let l=.05;const u=s.match(/[^.!?]+[.!?]*/g)??[s];let h=0;for(const d of u){const m=/\?\s*$/.test(d),p=[...d.matchAll(/[\p{L}\p{N}'’-]+|[,;:]/gu)],g=p.filter(v=>!/[,;:]/.test(v[0])).length||1;let x=0;for(const v of p){const y=v[0],E=h+(v.index??0);if(/[,;:]/.test(y)){l+=.16/t;continue}r.push({char:E,t:l});const D=y.toLowerCase().match(/[aeiouyàâéèêëîïôûü]+/g)??["a"],M=x/g;D.forEach((_,G)=>{const O=(.11+Math.min(_.length,3)*.035+Uf(E+G)*.05)/t,U=.35-M*.6+(m&&M>.7?(M-.7)*2.6:0);i.push({t:l,dur:O,amp:(G===0?.95:.7)*(.75+Uf(E*3.1+G)*.25),pitch:Math.max(-1,Math.min(1,U+(Uf(E+G*7)-.5)*.35)),open:/[ao]/.test(_)?1:/[eu]/.test(_)?.7:.5,hiss:/[szfcx]|sh|ch|th/.test(y)?.7:.15,char:E}),l+=O+.03/t}),l+=.05/t,x++}l+=(/[.!?]\s*$/.test(d)?.34:.12)/t,h+=d.length}return{syl:i,words:r,duration:l}}function w1(s,t){let i=0,r=0,l=0,u=0,h=0,d=0;for(const p of s){if(t<p.t-.05)break;const g=t-p.t;if(g>p.dur+.18)continue;const v=(g<0?0:g<.035?g/.035:Math.exp(-(g-.035)/(p.dur*.55)))*p.amp;i=Math.max(i,v),r+=p.open*v,l+=p.hiss*v,u+=p.pitch*v,d+=v,g>=0&&g<.05&&(h=Math.max(h,1-g/.05))}const m=d||1;return{level:wa(i),low:wa(i*.75),mid:wa(r/m*i),high:wa(l/m*i),pitch:d?u/m:0,onset:h}}class wi{constructor(t){this.kind=t}analyser;freq;time;cleanup=[];prevLevel=0;pulseLevel=0;lastPulseAt=0;speechStart=0;speechOffset=0;timeline;stopped=!1;static async microphone(){const t=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0}}),i=wi.fromStream(t,!1);return i.cleanup.push(()=>t.getTracks().forEach(r=>r.stop())),i}static fromStream(t,i=!1){const r=Df(),l=new wi("analyser"),u=r.createMediaStreamSource(t);return l.attach(u,i),l}static fromMediaElement(t){const i=Df(),r=new wi("analyser"),l=i.createMediaElementSource(t);return r.attach(l,!0),r}static speak(t,i={}){const r=new wi("speech"),l=i.rate??1.02;r.timeline=Dm(t,l);const u=new Promise(h=>{const d=()=>{r.stopped=!0,h()},m=typeof window<"u"?window.speechSynthesis:void 0;if(!m){r.speechStart=performance.now()/1e3,setTimeout(d,r.timeline.duration*1e3);return}const p=new SpeechSynthesisUtterance(t);p.rate=l,p.pitch=i.pitch??1.05,i.voice&&(p.voice=i.voice),i.lang&&(p.lang=i.lang),p.onstart=()=>r.speechStart=performance.now()/1e3,p.onboundary=x=>{const v=r.timeline.words.reduce((y,E)=>E.char<=x.charIndex?E:y,r.timeline.words[0]);v&&(r.speechOffset=v.t-(performance.now()/1e3-r.speechStart))},p.onend=d,p.onerror=d;const g=setTimeout(d,r.timeline.duration/l*1600+2500);r.cleanup.push(()=>{clearTimeout(g),m.cancel(),d()}),r.speechStart=performance.now()/1e3,m.cancel(),m.speak(p)});return{voice:r,done:u}}static manual(){return new wi("manual")}static simulate(){const t=new wi("simulate");return t.timeline=Dm("Hello there! I found a few things worth a look, and two of them need your attention today. Want me to walk you through them?"),t.speechStart=performance.now()/1e3,t}pulse(t=.6){this.pulseLevel=Math.min(1,this.pulseLevel+t),this.lastPulseAt=performance.now()/1e3}attach(t,i){const r=Df(),l=r.createAnalyser();l.fftSize=1024,l.smoothingTimeConstant=.45,t.connect(l),i&&l.connect(r.destination),this.analyser=l,this.freq=new Uint8Array(l.frequencyBinCount),this.time=new Float32Array(l.fftSize),this.cleanup.push(()=>{t.disconnect(),l.disconnect()})}sample(t=performance.now()/1e3){if(this.stopped)return Cf;if(this.kind==="speech"||this.kind==="simulate"){const y=this.timeline;let E=t-this.speechStart+this.speechOffset;return this.kind==="simulate"&&(E=E%(y.duration+.8)),w1(y.syl,E)}if(this.kind==="manual"){const y=t-this.lastPulseAt,E=this.pulseLevel*Math.exp(-y/.18);return y>1&&(this.pulseLevel=0),{level:E,low:E*.6,mid:E*.5,high:E*.8,pitch:Math.sin(this.lastPulseAt*9)*.3,onset:y<.05?1:0}}const i=this.analyser;i.getByteFrequencyData(this.freq),i.getFloatTimeDomainData(this.time);let r=0;for(const y of this.time)r+=y*y;r=Math.sqrt(r/this.time.length);const l=20*Math.log10(r+1e-8),u=wa((l+58)/42),h=i.context.sampleRate/2/this.freq.length,d=(y,E)=>{let D=0,M=0;for(let _=Math.floor(y/h);_<=Math.min(this.freq.length-1,Math.ceil(E/h));_++)D+=this.freq[_],M++;return M?D/M/255:0};let m=0,p=0;for(let y=2;y<this.freq.length;y++)m+=y*h*this.freq[y],p+=this.freq[y];const g=p?m/p:0,x=u-this.prevLevel>.07?1:0;this.prevLevel=u;const v=u>.06?1:0;return{level:u,low:wa((d(80,300)-.25)*1.8)*v,mid:wa((d(300,2e3)-.2)*1.9)*v,high:wa((d(2e3,8e3)-.08)*2.4)*v,pitch:v?Math.max(-1,Math.min(1,(g-1400)/1400)):0,onset:x*v}}dispose(){this.stopped=!0,this.cleanup.forEach(t=>t()),this.cleanup=[]}}const ii={personality:"core",state:"idle",expression:"neutral",theme:"auto",shape:"auto",accent:"auto",glyphs:!0,smile:!0,lighting:1,intensity:1,particleBudget:38e3,reducedMotion:!1,interactive:!0,dark:!1,autoSleep:!0},Lf=new WeakMap,C1=.19,Um=.34,Lm=Object.keys(no),Pl=["deep","mid","pale","warm","hi","accent"],qn=(s,t)=>s+Math.random()*(t-s),Sn=(s,t,i)=>Math.min(i,Math.max(t,s)),Mn=(s,t)=>1-Math.exp(-s/t),D1=s=>s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2;function Nm(s){const t=new Float32Array(s*3),i=new Float32Array(s*4),r=new Float32Array(s),l=new rt;for(let h=0;h<s;h++){const d=Math.random(),m=d<.64?0:d<.86?1:2;l.randomDirection(),m===0?l.multiplyScalar(Math.pow(Math.random(),.42)):m===1?l.multiplyScalar(.88+Math.random()*.22):(l.x>0&&Math.random()<.25&&(l.x*=-1),l.multiplyScalar(1+Math.pow(Math.random(),1.6)*.7)),t.set([l.x,l.y,l.z],h*3),i.set([Math.random(),Math.random(),Math.random(),Math.random()],h*4),r[h]=m}const u=new Bi;return u.setAttribute("position",new On(new Float32Array(s*3),3)),u.setAttribute("aHome",new On(t,3)),u.setAttribute("aSeed",new On(i,4)),u.setAttribute("aClass",new On(r,1)),u}function U1(s){const t=document.createElement("canvas");t.width=t.height=128;const i=t.getContext("2d");i.fillStyle="#ffffff",i.textAlign="center",i.textBaseline="middle",s==="z"?(i.font="800 54px Outfit, system-ui, sans-serif",i.fillText("z",44,82),i.font="800 72px Outfit, system-ui, sans-serif",i.fillText("Z",86,44)):(i.font="800 104px Outfit, system-ui, sans-serif",i.save(),i.translate(64,66),i.rotate(s==="!"?.25:.12),i.fillText(s,0,0),i.restore());const r=new ey(t);return r.colorSpace=ti,r}function Nf(s,t,i){return new Ai({vertexShader:g1,fragmentShader:s,uniforms:{uCenter:{value:new Ae},uSize:{value:100},uExtent:{value:i},...t},transparent:!0,depthTest:!1,depthWrite:!1,premultipliedAlpha:!0})}function L1(s){const t=new Float32Array(s*4);for(let r=0;r<s*4;r++)t[r]=Math.random();const i=new Bi;return i.setAttribute("position",new On(new Float32Array(s*3),3)),i.setAttribute("aSeed",new On(t,4)),i}let Of=null;function Om(){if(!Of){const s=R1();Of=Array.from({length:ns},(t,i)=>new ee(s[i*4],s[i*4+1],s[i*4+2],s[i*4+3]))}return Of}class N1{constructor(t,i={}){this.canvas=t,this.opts=i,this.renderer=new o1({canvas:t,alpha:!0,antialias:!1,powerPreference:"high-performance",premultipliedAlpha:!0}),Lf.set(t,this.contextOwner),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.geometry=Nm(this.cfg.particleBudget),this.pMat=new Ai({vertexShader:p1,fragmentShader:m1,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uCenter:{value:new Ae},uSize:{value:100},uDpr:{value:1},uShape:{value:new ee},uBreath:{value:new rt},uNoise:{value:new ee},uFree:{value:new ee},uOrbit:{value:new rt},uStream:{value:new ee},uStreamTarget:{value:new Ae},uFx:{value:new ee},uGlitchY:{value:0},uAttend:{value:new Ae},uVel:{value:new Ae},uHover:{value:new ee},uPoke:{value:new ee(0,0,1,10)},uThink:{value:new ee},uVoice:{value:new ee},uVoice2:{value:new ee},uVoice3:{value:new ee},uEyeL:{value:new ee},uEyeR:{value:new ee},uLook:{value:new rt},uStatus:{value:new Ae},uRot:{value:new ee},uMorph:{value:new ee},uShapes:{value:Om().map(u=>u.clone())},uOrb:{value:new ee},uOrbCol:{value:this.orbCol},uSweep:{value:new ee},uColDeep:{value:this.col.deep},uColMid:{value:this.col.mid},uColPale:{value:this.col.pale},uColWarm:{value:this.col.warm},uColHi:{value:this.col.hi},uColStatus:{value:this.status}}}),this.points=new kp(this.geometry,this.pMat),this.points.frustumCulled=!1,this.points.renderOrder=1,this.auraMat=Nf(_1,{uCool:{value:this.col.mid},uWarm:{value:this.col.warm},uShadow:{value:this.col.deep},uAlpha:{value:1},uDark:{value:0},uWarmAmt:{value:1},uGround:{value:-.95}},2.4),this.faceMat=Nf(v1,{uEyeL:{value:new ee},uEyeR:{value:new ee},uEyeLB:{value:new ee},uEyeRB:{value:new ee},uFaceA:{value:new ee},uFaceB:{value:new ee},uMouth:{value:new ee},uPx:{value:.01},uDark:{value:0},uRingCol:{value:new Se("#eaf3ff")},uMouthCol:{value:new Se("#0b1230")},uMouth2:{value:new ee}},1.4),this.moonMat=new Ai({vertexShader:y1,fragmentShader:S1,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uCenter:{value:new Ae},uSize:{value:100},uDpr:{value:1},uMoonStatic:{value:new ee},uMoonOrbit:{value:new ee},uRotM:{value:new ee},uBodyWH:{value:new Ae(1,1)},uColor:{value:this.orbCol}}});const r=(u,h)=>{const d=new Fi(this.quad,u);d.frustumCulled=!1,d.renderOrder=h,this.scene.add(d)};r(this.auraMat,0),this.scene.add(this.points),r(this.faceMat,3);const l=new kp(this.moonGeo,this.moonMat);l.frustumCulled=!1,l.renderOrder=4,this.scene.add(l);for(const[u,h,d]of[["?","gQuestion",{x:.95,y:1}],["!","gExclaim",{x:1.05,y:.82}],["z","gZzz",{x:.92,y:.95}]]){const m=U1(u),p=h==="gZzz"?this.col.mid:this.orbCol,g=Nf(x1,{uMap:{value:m},uAlpha:{value:0},uTint:{value:p},uRect:{value:new ee(0,0,1,1)}},1);this.glyphs.push({mat:g,key:h,off:d,tex:m}),r(g,5)}this.applyPalette(!0),this.retarget();for(const u of Lm)this.cur[u]=this.tgt[u];this.cur.dissolve=1,this.cur.opacity=0,this.resizeObs=new ResizeObserver(this.onResize),this.resizeObs.observe(t),window.addEventListener("pointermove",this.onPointerMove,{passive:!0}),window.addEventListener("pointerdown",this.onPointerDown,{passive:!0}),document.documentElement.addEventListener("pointerleave",this.onPointerLeave),window.addEventListener("keydown",this.onActivity,{passive:!0}),this.onResize(),this.raf=requestAnimationFrame(this.frame)}renderer;contextOwner=Symbol("qivi-renderer");scene=new Kx;camera=new Yp(-1,1,1,-1,-1e4,1e4);geometry;points;pMat;faceMat;moonMat;moonGeo=L1(420);auraMat;glyphs=[];quad=new to(2,2);resizeObs;raf=0;active=!0;last=performance.now();disposed=!1;cfg={...ii};cur={...no};tgt={...no};vel={};col=Object.fromEntries(Pl.map(t=>[t,new Se]));colTgt=Object.fromEntries(Pl.map(t=>[t,new Se]));status=new Se("#e8473a");statusTgt=new Se("#e8473a");orbCol=new Se;tmpCol=new Se;anchorEl=null;streamEl=null;rect={left:0,top:0,width:1,height:1,sx:1,sy:1};pos={x:-1,y:-1};posVel={x:0,y:0};size=120;t={noise:0,orbit:0,stream:0,free:0,breath:0,real:0,swirl:0,moon:0,voice:0};burst=0;burstVel=0;freeze=0;shiver=0;sweepStart=-10;pending=[];glitchY=0;nextGlitch=0;blinkStart=-1;nextBlink=qn(1.4,4.2);saccade={x:0,y:0};nextSaccade=qn(.6,2.2);look={x:0,y:0};pointer={cx:0,cy:0,active:!1,strength:0};poke={x:0,y:0,z:1,age:10};streamW=0;voiceSrc=null;simVoice=null;simulateVoice=!1;vf={...Cf};listenW=0;talkW=0;ve={level:0,low:0,mid:0,high:0,pitch:0};mouthOpen=0;lastPointerMove=-1e9;ptrAttn=0;lastActivity=performance.now();sleeping=!1;override=null;nextRandomBurst=5;probe={start:-10,target:{x:0,y:0}};nextProbe=6;lastExpr="neutral";lastState="idle";lastShape="blob";streamUnit={x:2,y:.3};setConfig(t){const i=this.cfg;if(this.cfg={...this.cfg,...t},t.particleBudget&&t.particleBudget!==i.particleBudget&&(this.geometry.dispose(),this.geometry=Nm(this.cfg.particleBudget),this.points.geometry=this.geometry),t.dark!==void 0&&t.dark!==i.dark)for(const r of[this.pMat,this.moonMat])r.blending=this.cfg.dark?$c:Ja,r.needsUpdate=!0;t.state&&t.state!==i.state&&(this.lastActivity=performance.now()),this.applyPalette(!1),this.retarget()}setAnchor(t){this.anchorEl=t}setVoice(t){this.voiceSrc=t instanceof wi?t:null,this.simulateVoice=t==="simulate"}setStreamTarget(t){this.streamEl=t}setActive(t){t===this.active||this.disposed||(this.active=t,cancelAnimationFrame(this.raf),t&&(this.last=performance.now(),this.raf=requestAnimationFrame(this.frame)))}impulse(t){if(Array.isArray(t))return t.forEach(l=>this.impulse(l));if(this.cfg.reducedMotion&&t!=="glitch"&&t!=="sweep")return;const r=this.t.real;switch(t){case"bounce":this.vel.stretch=(this.vel.stretch??0)+1.4,this.burstVel+=.5;break;case"burst":this.burstVel+=2.6;break;case"surprise":this.freeze=.22,this.burstVel-=1.2,this.pending.push({at:r+.22,fn:()=>this.burstVel+=3});break;case"flick":this.vel.lean=(this.vel.lean??0)+1.6,this.burstVel+=.9;break;case"anticipate":this.burstVel-=1.6,this.vel.stretch=(this.vel.stretch??0)-.8,this.pending.push({at:r+.26,fn:()=>{this.burstVel+=2.4,this.vel.stretch=(this.vel.stretch??0)+1.6}});break;case"glitch":this.glitchY=qn(-.4,.3);break;case"ripple":this.pokeAt(this.pointer.cx,this.pointer.cy,!0);break;case"sweep":r-this.sweepStart>.6&&(this.sweepStart=r);break;case"shiver":this.shiver=Math.max(this.shiver,1);break}}resetReactions(){this.pending=[],this.vel={},this.burst=this.burstVel=this.freeze=this.shiver=this.glitchY=0,this.sweepStart=-10,this.poke.age=10,this.override=null}dispose(){if(this.disposed)return;this.disposed=!0,this.simVoice?.dispose(),cancelAnimationFrame(this.raf),this.resizeObs.disconnect(),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerdown",this.onPointerDown),document.documentElement.removeEventListener("pointerleave",this.onPointerLeave),window.removeEventListener("keydown",this.onActivity),this.geometry.dispose(),this.quad.dispose(),this.moonGeo.dispose();for(const l of[this.pMat,this.faceMat,this.moonMat,this.auraMat])l.dispose();for(const l of this.glyphs)l.mat.dispose(),l.tex.dispose();this.renderer.dispose();const{canvas:t,renderer:i,contextOwner:r}=this;queueMicrotask(()=>{Lf.get(t)===r&&(Lf.delete(t),i.forceContextLoss())})}activeExpression(){return this.override&&this.override.until>this.t.real?this.override.expr:this.sleeping?"sleepy":this.cfg.expression}retarget(){const t=this.activeExpression();if(this.tgt=Cm(this.cfg,t),this.cfg.reducedMotion&&(this.tgt.orbit=0,this.tgt.stream=0,this.tgt.breath*=.4),t!==this.lastExpr){const r=(this.cfg.expressionDefinition??Am[t]).impulse;r&&this.cfg.autoEmote!==!1&&this.impulse(r),this.lastExpr=t}if(this.cfg.state!==this.lastState){const r=Ra[this.cfg.state].impulse;r&&this.cfg.autoEmote!==!1&&this.impulse(r),this.lastState=this.cfg.state;const l=Ra[this.cfg.state].status;l&&this.statusTgt.set(l)}const i=h1(this.tgt);i!==this.lastShape&&(this.cfg.autoEmote!==!1&&this.impulse("sweep"),this.lastShape=i)}transitionScale(){const t=this.cfg.transitionSpeed;return Number.isFinite(t)?Math.max(.5,Math.min(4,t)):1}applyPalette(t){const i=Rm(this.cfg);for(const r of Pl)this.colTgt[r].set(i[r]),t&&this.col[r].copy(this.colTgt[r])}layoutSize(){const t=this.canvas.getBoundingClientRect();return{r:t,w:Math.max(1,this.canvas.clientWidth||t.width),h:Math.max(1,this.canvas.clientHeight||t.height)}}toLocal(t,i){return{x:(t-this.rect.left)/this.rect.sx,y:(i-this.rect.top)/this.rect.sy}}onResize=()=>{const{w:t,h:i}=this.layoutSize();this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(t,i,!1),this.camera.left=-t/2,this.camera.right=t/2,this.camera.top=i/2,this.camera.bottom=-i/2,this.camera.updateProjectionMatrix()};onActivity=()=>{this.lastActivity=performance.now(),this.sleeping&&(this.sleeping=!1,this.override={expr:"surprised",until:this.t.real+.8},this.retarget())};onPointerMove=t=>{this.pointer.cx=t.clientX,this.pointer.cy=t.clientY,this.pointer.active=!0,this.lastPointerMove=performance.now()/1e3,this.onActivity()};onPointerLeave=()=>{this.pointer.active=!1};onPointerDown=t=>{if(this.onPointerMove(t),!this.cfg.interactive)return;const{x:i,y:r}=this.toLocal(t.clientX,t.clientY);Math.hypot(i-this.pos.x,r-this.pos.y)<this.size*1.15&&(this.pokeAt(t.clientX,t.clientY,!0),this.vel.stretch=(this.vel.stretch??0)-.6,(this.cfg.state==="idle"||this.cfg.state==="listening")&&(this.override={expr:Math.random()<.5?"happy":"playful",until:this.t.real+1.1},this.retarget()),this.opts.onPoke?.())};pokeAt(t,i,r=!1){const l=this.size,u=this.cur.width,h=this.cur.height,d=this.toLocal(t,i);let m=(d.x-this.pos.x)/l,p=-(d.y-this.pos.y)/l;const g=Math.hypot(m/u,p/h);if(g>1&&!r)return;g>.98&&(m*=.98/g,p*=.98/g);const x=Math.min(.98,Math.hypot(m/u,p/h));this.poke={x:m,y:p,z:Math.sqrt(1-x*x)*.95,age:0}}readAnchor(){if(!this.anchorEl)return null;const t=this.anchorEl.getBoundingClientRect(),i=this.toLocal(t.left+t.width/2,t.top+t.height/2),r=Math.min(t.width/this.rect.sx,t.height/this.rect.sy);return{x:i.x,y:i.y,size:r*(r<140?.44:.34)}}frame=t=>{if(this.disposed||!this.active)return;this.raf=requestAnimationFrame(this.frame);const i=Math.min(.05,(t-this.last)/1e3);this.last=t;const{r,w:l,h:u}=this.layoutSize();this.rect={left:r.left,top:r.top,width:l,height:u,sx:r.width/l||1,sy:r.height/u||1},this.update(i,t),this.renderer.render(this.scene,this.camera)};update(t,i){const r=this.t;r.real+=t;const l=wm(this.cfg),u=this.cfg.reducedMotion,h=u?.12:1,d=this.rect.width,m=this.rect.height;if(this.override&&this.override.until<=r.real&&(this.override=null,this.retarget()),this.cfg.autoSleep&&this.cfg.state==="idle"&&!this.sleeping&&i-this.lastActivity>4e4&&(this.sleeping=!0,this.retarget()),this.sleeping&&this.cfg.state!=="idle"&&(this.sleeping=!1,this.retarget()),this.pending=this.pending.filter(Ut=>Ut.at<=r.real?(Ut.fn(),!1):!0),!u&&l.randomBurst&&r.real>this.nextRandomBurst&&(this.burstVel+=qn(.8,2),Math.random()<.4&&(this.vel.lean=(this.vel.lean??0)+qn(-1.4,1.4)),this.nextRandomBurst=r.real+qn(l.randomBurst*.5,l.randomBurst*1.5)),!u&&l.probe&&this.cfg.state==="idle"&&r.real>this.nextProbe){const Ut=qn(-.6,.6)+(Math.random()<.5?0:Math.PI);this.probe={start:r.real,target:{x:Math.cos(Ut)*1.9,y:Math.sin(Ut)*1.2+.3}},this.nextProbe=r.real+qn(l.probe*.7,l.probe*1.4)}const p=this.readAnchor()??{x:d/2,y:m/2,size:Math.min(d,m)*.34};this.pos.x<0&&(this.pos={x:p.x,y:p.y},this.size=p.size);const g=70,x=15;this.posVel.x+=(g*(p.x-this.pos.x)-x*this.posVel.x)*t,this.posVel.y+=(g*(p.y-this.pos.y)-x*this.posVel.y)*t,this.pos.x+=this.posVel.x*t,this.pos.y+=this.posVel.y*t,this.size+=(p.size-this.size)*Mn(t,.3);const v=this.size;let y=null;if(this.streamEl){const Ut=this.streamEl.getBoundingClientRect(),de=this.toLocal(Ut.left+Ut.width/2,Ut.top+Ut.height/2);y={x:(de.x-this.pos.x)/v,y:-(de.y-this.pos.y)/v}}const E=r.real-this.probe.start,D=E<1.8?Math.sin(E/1.8*Math.PI):0,M=D>.01&&this.cfg.state==="idle",_=M?this.probe.target:y??this.streamUnit;this.streamW+=((y||M?1:0)-this.streamW)*Mn(t,.3),this.streamUnit.x+=(_.x-this.streamUnit.x)*Mn(t,.25),this.streamUnit.y+=(_.y-this.streamUnit.y)*Mn(t,.25);const G=this.pMat.uniforms.uShapes.value,O=this.cfg.customShape;for(let Ut=0;Ut<ns;Ut++){let de=Om()[Ut].x;if(O&&O.length>=3){const Xe=Ut/ns*O.length,Ze=O[Math.floor(Xe)%O.length],fn=O[(Math.floor(Xe)+1)%O.length];Number.isFinite(Ze)&&Number.isFinite(fn)&&Ze>0&&fn>0&&(de=Math.max(.1,Math.min(2,Ze+(fn-Ze)*(Xe%1))))}G[Ut].x+=(de-G[Ut].x)*Mn(t,.42*this.transitionScale())}const U=this.tgt;for(const Ut of Lm)bm.includes(Ut)||(this.cur[Ut]+=(U[Ut]-this.cur[Ut])*Mn(t,u1(Ut)*this.transitionScale()));D>0&&(this.cur.stream=Math.max(this.cur.stream,D*.35));for(const Ut of bm){const de=this.transitionScale(),Xe=(this.vel[Ut]??0)+(140/de*(U[Ut]-this.cur[Ut])-13/Math.sqrt(de)*(this.vel[Ut]??0))*t;this.vel[Ut]=Xe,this.cur[Ut]+=Xe*t*(u?.5:1)}this.burstVel+=(-60*this.burst-9*this.burstVel)*t,this.burst+=this.burstVel*t,u&&(this.burst*=.2),this.shiver*=Math.exp(-t/.35);for(const Ut of Pl)this.col[Ut].lerp(this.colTgt[Ut],Mn(t,.45*this.transitionScale()));this.status.lerp(this.statusTgt,Mn(t,.3));const b=this.cur;this.freeze=Math.max(0,this.freeze-t);const z=this.freeze>0?.03:1;r.noise+=t*b.noiseSpeed*z*(u?.25:1),r.orbit+=t*b.orbitSpeed*z*h,r.stream+=t*b.streamSpeed*z*h,r.free+=t*b.freeSpeed*z*(u?.15:1),r.breath+=t*Math.PI*2/Math.max(1.5,b.breathPeriod),r.swirl+=t*b.think*.85*h,r.moon+=t*1.1*z*h;const F=this.cfg.state==="listening"?1:0,X=this.cfg.state==="talking"?1:0;this.listenW+=(F-this.listenW)*Mn(t,.3),this.talkW+=(X-this.talkW)*Mn(t,.3),this.simulateVoice&&!this.voiceSrc&&(this.simVoice??=wi.simulate());const C=this.voiceSrc??(this.simulateVoice?this.simVoice:null),w=C&&(F||X)?C.sample():Cf,I=this.vf,Z=(Ut,de,Xe,Ze)=>Ut+(de-Ut)*Mn(t,de>Ut?Xe:Ze);I.level=Z(I.level,w.level,.05,.12),I.low=Z(I.low,w.low,.06,.14),I.mid=Z(I.mid,w.mid,.05,.11),I.high=Z(I.high,w.high,.05,.11),I.pitch+=(w.pitch-I.pitch)*Mn(t,.15),I.onset=0;const et=this.ve;et.level=Z(et.level,w.level,.24,.55),et.low=Z(et.low,w.low,.28,.6),et.mid=Z(et.mid,w.mid,.28,.6),et.high=Z(et.high,w.high,.28,.6),et.pitch+=(w.pitch-et.pitch)*Mn(t,.45);const ft=Sn(I.mid*1.1+I.level*.45,0,1);this.mouthOpen+=(ft-this.mouthOpen)*Mn(t,ft>this.mouthOpen?.045:.08),r.voice+=t*1.6*h,this.poke.age+=t;const{x:ct,y:P}=this.toLocal(this.pointer.cx,this.pointer.cy);r.real>this.nextSaccade&&(this.saccade=Math.random()<.55?{x:0,y:0}:{x:qn(-.14,.14),y:qn(-.08,.1)},this.nextSaccade=r.real+qn(l.saccade[0],l.saccade[1])*1.6);let Q=this.saccade;const W=performance.now()/1e3-this.lastPointerMove<2.5,xt=this.pointer.active&&this.cfg.interactive&&!this.sleeping&&W?1:0;if(this.ptrAttn+=(xt-this.ptrAttn)*Mn(t,xt>this.ptrAttn?.12:.9),["searching","analyzing","answering","found"].includes(this.cfg.state)&&b.stream>.1&&y){const Ut=Math.hypot(this.streamUnit.x,this.streamUnit.y)||1;Q={x:this.streamUnit.x/Ut,y:this.streamUnit.y/Ut}}else if(this.ptrAttn>.001){const Ut=ct-this.pos.x,de=-(P-this.pos.y),Xe=Math.hypot(Ut,de)||1,Ze=Sn(Xe/(v*2.2),0,1),fn=this.ptrAttn;Q={x:Q.x*(1-fn)+Ut/Xe*Ze*fn,y:Q.y*(1-fn)+de/Xe*Ze*fn}}const K=Math.sin(r.real*.55)*.38*b.think*h,_t=Sn(Q.x*.8*(1-b.think*.6)+b.lookX+K,-1,1),yt=Sn(Q.y*.8+b.lookY,-1,1);this.look.x+=(_t-this.look.x)*Mn(t,.1),this.look.y+=(yt-this.look.y)*Mn(t,.1);const Nt=-23*(Math.PI/180)+(this.look.x*.34+Math.sin(r.real*.31)*.08*h)*(1-b.dissolve*.5),J=-this.look.y*.16+Math.sin(r.real*.23+1.3)*.04*h-et.pitch*.035*this.talkW*h,mt=Math.cos(Nt),At=Math.sin(Nt),Zt=Math.cos(J),Gt=Math.sin(J),te=(Ut,de,Xe)=>{const Ze=Ut*mt+Xe*At,fn=-Ut*At+Xe*mt;return{x:Ze,y:de*Zt-fn*Gt,z:de*Gt+fn*Zt}};let ke=1;if(r.real>this.nextBlink&&this.blinkStart<0&&(this.blinkStart=r.real,this.nextBlink=r.real+qn(l.blink[0],l.blink[1])+(Math.random()<.15?-1e9:0)),this.blinkStart>=0){const Ut=(r.real-this.blinkStart)/.17;Ut>=1?(this.blinkStart=-1,this.nextBlink<0&&(this.nextBlink=r.real+.12)):ke=1-Math.sin(Ut*Math.PI)*.97}const H=this.pointer.active&&this.cfg.interactive&&Math.hypot(ct-this.pos.x,P-this.pos.y)<v*1.5;this.pointer.strength+=((H?1:0)-this.pointer.strength)*Mn(t,.25),b.glitch>.05&&r.real>this.nextGlitch&&(this.glitchY=qn(-.45,.35),this.nextGlitch=r.real+qn(.15,.6));const ue=(r.real-this.sweepStart)/1.1,ie=ue>=0&&ue<=1,Qt=ie?-2.4+4.8*D1(ue):9,Ft=ie?Math.sin(ue*Math.PI)*b.light:0,le=this.pos.x-d/2,It=m/2-this.pos.y,fe=b.lean+this.look.x*.02+Math.sin(r.real*.8)*.035*b.think*h,Ye=Math.hypot(this.streamUnit.x,this.streamUnit.y)||1,Fe={x:this.streamUnit.x/Ye*b.attend,y:this.streamUnit.y/Ye*b.attend},N=(b.breath+et.level*.012*(this.talkW+this.listenW))*(u?.4:1),tt=1-Math.min(1,b.morphHeart+b.morphShield+b.morphHex+b.morphStar),ut=(Ut,de)=>{const Xe=Math.hypot(Ut,de),Ze=Fr.smoothstep(Xe,.5,1.12);de<0?(de*=1-.14*tt,Ut*=1+-de*.2*tt):Ut*=1-de*.07*tt;const fn=1+N*Math.sin(r.breath-Xe*1.4)*(.6+Ze);Ut*=b.width*(1-b.stretch*.5)*fn,de*=b.height*(1+b.stretch)*fn,de+=b.stretch*.25,Ut+=(de+.6)*fe,Ut+=Fe.x*(.25+Ze)*.12,de+=Fe.y*(.25+Ze)*.12;const Yn=Math.sqrt(Math.max(.05,1-Ut*Ut-de*de))*.92,Zn=te(Ut,de,Yn),Ci=Yn/Math.hypot(Ut,de,Yn),Hi=Zn.z/Math.hypot(Zn.x,Zn.y,Zn.z),Di=1+Zn.z*.07;return{x:Zn.x*Di,y:Zn.y*Di,squash:Sn(Hi/Ci,.4,1.1),scale:Di}},dt=ut(b.faceX-Um*b.spacing,b.faceY),lt=ut(b.faceX+Um*b.spacing,b.faceY),Lt=ut(b.faceX+.01,b.faceY-.2),Rt=C1*Sn(1+(70-v)/70*.45,1,1.4)*(1+et.level*.04*this.listenW),Wt=1-Fr.smoothstep(b.dissolve,.55,.95),qt=b.openL*ke,St=b.openR*ke,Ot=Math.sin(r.real*1.7)*.03*h,Yt=Sn(b.accentOrbit,0,1)*h,Vt=1.5,Ct=te(Math.cos(r.moon)*Vt,.32+Math.sin(r.moon)*Vt*.2,Math.sin(r.moon)*Vt),ae={x:(b.accentX+this.look.x*.08)*b.width,y:b.accentY+Ot+this.look.y*.05,z:.5},k=Fr.lerp(ae.x,Ct.x,Yt),Et=Fr.lerp(ae.y,Ct.y,Yt),wt=Fr.lerp(ae.z,Ct.z,Yt),Ht=Sn(b.accentAlpha,0,1),Mt=(1+b.accentPulse*.3*Math.pow(Math.sin(r.real*3.2),2)*(u?.3:1))*(1+et.level*.3*this.listenW),gt=b.opacity*Ht*(1-Fr.smoothstep(b.dissolve,.3,.8));this.orbCol.copy(this.col.accent).lerp(this.status,b.statusMix*.8);const bt=this.pMat.uniforms;bt.uCenter.value.set(le,It),bt.uSize.value=v,bt.uDpr.value=this.renderer.getPixelRatio(),bt.uShape.value.set(b.width,b.height,fe,b.stretch),bt.uBreath.value.set(N,r.breath,b.density),bt.uNoise.value.set(b.noise,b.loose,r.noise,0),bt.uFree.value.set(b.freeSpread,r.free,b.chaos,h),bt.uOrbit.value.set(b.orbit,r.orbit,0),bt.uStream.value.set(b.stream*this.streamW,r.stream,Sn(b.streamDir,0,1),0),bt.uStreamTarget.value.set(this.streamUnit.x,this.streamUnit.y),bt.uFx.value.set(b.grid,this.burst*.35,b.dissolve,b.glitch),bt.uGlitchY.value=this.glitchY,bt.uAttend.value.set(Fe.x,Fe.y),bt.uVel.value.set(Sn(this.posVel.x/v,-6,6),Sn(-this.posVel.y/v,-6,6)),bt.uHover.value.set((ct-this.pos.x)/v,-(P-this.pos.y)/v,1.25,this.pointer.strength*(this.sleeping?.3:.9)*(.4+.6*b.light)),bt.uPoke.value.set(this.poke.x,this.poke.y,this.poke.z,u?10:this.poke.age),bt.uThink.value.set(b.think,r.swirl,r.real,0),bt.uEyeL.value.set(dt.x,dt.y,Rt*b.scaleL,Sn(qt,0,1)*(1-b.xMix)),bt.uEyeR.value.set(lt.x,lt.y,Rt*b.scaleR,Sn(St,0,1)*(1-b.xMix)),bt.uLook.value.set(b.pointSize,b.opacity,b.warm),bt.uStatus.value.set(b.statusMix,this.cfg.dark?1:0),bt.uRot.value.set(Nt,J,b.light,r.real),bt.uMorph.value.set(Math.max(0,b.morphHeart),Math.max(0,b.morphShield),Math.max(0,b.morphHex),Math.max(0,b.morphStar)),bt.uOrb.value.set(k,Et,wt,gt*1.3*(.4+.6*b.light)),bt.uSweep.value.set(Qt,Ft,this.shiver,0);const oe=this.cfg.particleBudget;this.geometry.setDrawRange(0,Math.round(Math.min(oe,38e3*Sn(Math.pow(v/150,1.4),.12,1))));const Re=(Ut,de,Xe,Ze)=>{Ut.uniforms.uCenter.value.set(de,Xe),Ut.uniforms.uSize.value=Ze};Re(this.auraMat,le,It,v),this.auraMat.uniforms.uAlpha.value=b.opacity*Math.pow(1-b.dissolve,1.5)*(1-b.statusMix*.4),this.auraMat.uniforms.uDark.value=this.cfg.dark?1:0,this.auraMat.uniforms.uWarmAmt.value=b.warm,this.auraMat.uniforms.uGround.value=-.86*b.height*(1+b.stretch)-.06,Re(this.faceMat,le,It,v);const he=this.faceMat.uniforms;he.uEyeL.value.set(dt.x,dt.y,Rt*dt.scale,qt),he.uEyeR.value.set(lt.x,lt.y,Rt*lt.scale,St),he.uEyeLB.value.set(b.arcL,b.lidL,dt.squash,b.scaleL),he.uEyeRB.value.set(b.arcR,b.lidR,lt.squash,b.scaleR),he.uFaceA.value.set(b.lidTilt,Sn(b.xMix,0,1),b.sparkle,b.pupil),he.uFaceB.value.set(this.look.x,this.look.y,b.ring,Wt*b.opacity),he.uMouth.value.set(Lt.x,Lt.y,Sn(b.mouth,0,1)*(1-b.xMix),b.mouthCurve);const ai=this.talkW*this.mouthOpen;he.uMouth2.value.set(ai,Sn(.5+I.low*.5-I.high*.35,0,1),1-b.xMix,0),bt.uVoice.value.set(et.level,et.low,et.mid,et.high),bt.uVoice2.value.set(et.pitch,I.level,this.listenW,this.talkW),bt.uVoice3.value.set(Lt.x,Lt.y,Math.sqrt(Math.max(.05,1-Lt.x*Lt.x-Lt.y*Lt.y))*.92,r.voice),he.uPx.value=1/v,he.uDark.value=this.cfg.dark?1:0;const $e=this.tmpCol.copy(this.col.deep).lerp(this.status,b.statusMix*.5),sn=.2126*$e.r+.7152*$e.g+.0722*$e.b;he.uMouthCol.value.set(sn<.2||this.cfg.dark?"#fbf8ff":"#0b1230");const Oe=this.moonMat.uniforms;Oe.uCenter.value.set(le,It),Oe.uSize.value=v,Oe.uDpr.value=this.renderer.getPixelRatio(),Oe.uMoonStatic.value.set(ae.x,ae.y,ae.z,Yt),Oe.uMoonOrbit.value.set(r.moon,Vt,b.accentScale*(.85+.4*Ht),gt),Oe.uRotM.value.set(Nt,J,r.real,Mt),Oe.uBodyWH.value.set(b.width,b.height);for(const Ut of this.glyphs){const de=Sn(b[Ut.key],0,1)*Wt,Xe=Math.sin(r.real*2.4+Ut.off.x*7)*.04*h,Ze=Ut.key==="gZzz"?r.real*.25%1*.15*h:0;Re(Ut.mat,le+Ut.off.x*v*b.width,It+(Ut.off.y+Xe+Ze)*v,v*.2),Ut.mat.uniforms.uAlpha.value=de}}}function O1(s){return()=>((s=s*16807%2147483647)-1)/2147483646}function P1({size:s=48,personality:t="core",theme:i="auto",expression:r="neutral",state:l="idle",className:u,title:h,character:d,presentation:m,expressionStrength:p,expressionDefinition:g,params:x}){const v=rn.useId().replace(/[^a-zA-Z0-9]/g,""),y=Rm({personality:t,theme:i,character:d}),E=Cm({...ii,personality:t,state:l,character:d,presentation:m,expressionStrength:p,expressionDefinition:g,params:x},r),D=Ra[l].status,M=Ra[l].set?.statusMix??0,_=rn.useMemo(()=>{const F=O1(7),X=s<28?8:s<64?36:90;return Array.from({length:X},()=>{const C=F()*Math.PI*2,w=30+F()*16,I=Math.cos(C)<0;return{x:48+Math.cos(C)*w*(I?1.15:1),y:54+Math.sin(C)*w*.92,r:.5+F()*1.3,o:.25+F()*.5,warm:!I&&Math.sin(C)<.3}})},[s]),G=48+E.faceX*34,O=54-E.faceY*34,U=.34*34*E.spacing*(s<32?1.12:1),b=.19*34*(s<32?1.3:1),z=(F,X,C,w)=>{const I=b*w;if(E.xMix>.5){const Z=I*.7;return Ce.jsx("path",{d:`M${F-Z} ${O-Z}L${F+Z} ${O+Z}M${F-Z} ${O+Z}L${F+Z} ${O-Z}`,stroke:"#fff",strokeWidth:I*.36,strokeLinecap:"round"})}if(X<.3){const Z=C*I*.9;return Ce.jsx("path",{d:`M${F-I} ${O+Z*.3}Q${F} ${O-Z*1.4} ${F+I} ${O+Z*.3}`,fill:"none",stroke:C>0?"#fffaf4":"#0a1028",strokeWidth:I*.32,strokeLinecap:"round"})}return Ce.jsxs("g",{children:[Ce.jsx("circle",{cx:F,cy:O,r:I,fill:"#fffcf7"}),Ce.jsx("circle",{cx:F+I*.17+E.lookX*I*.25,cy:O-E.lookY*I*.25,r:I*.8*E.pupil,fill:"#090f29"}),s>=28&&Ce.jsx("circle",{cx:F+I*.45,cy:O-I*.32,r:I*.14,fill:"#fff"})]})};return Ce.jsxs("svg",{className:u,width:s,height:s,viewBox:"0 0 100 100",role:h?"img":void 0,"aria-label":h,"aria-hidden":h?void 0:!0,children:[Ce.jsxs("defs",{children:[Ce.jsxs("radialGradient",{id:`b${v}`,cx:"0.44",cy:"0.46",r:"0.6",children:[Ce.jsx("stop",{offset:"0",stopColor:y.deep}),Ce.jsx("stop",{offset:"0.55",stopColor:y.mid}),Ce.jsx("stop",{offset:"1",stopColor:y.pale,stopOpacity:"0.2"})]}),Ce.jsxs("radialGradient",{id:`w${v}`,cx:"0.85",cy:"0.3",r:"0.55",children:[Ce.jsx("stop",{offset:"0",stopColor:y.warm,stopOpacity:"0.95"}),Ce.jsx("stop",{offset:"1",stopColor:y.warm,stopOpacity:"0"})]}),Ce.jsx("filter",{id:`f${v}`,x:"-20%",y:"-20%",width:"140%",height:"140%",children:Ce.jsx("feGaussianBlur",{stdDeviation:s<32?1.2:2.2})})]}),Ce.jsx("ellipse",{cx:"48",cy:"90",rx:"30",ry:"3.5",fill:y.deep,opacity:"0.12"}),Ce.jsxs("g",{filter:`url(#f${v})`,children:[Ce.jsx("path",{d:"M14 58C14 32 30 20 49 20C69 20 84 32 84 56C84 76 70 88 49 88C28 88 14 78 14 58Z",fill:`url(#b${v})`}),Ce.jsx("path",{d:"M14 58C14 32 30 20 49 20C69 20 84 32 84 56C84 76 70 88 49 88C28 88 14 78 14 58Z",fill:`url(#w${v})`}),D&&Ce.jsx("path",{d:"M14 58C14 32 30 20 49 20C69 20 84 32 84 56C84 76 70 88 49 88C28 88 14 78 14 58Z",fill:D,opacity:M*.7})]}),_.map((F,X)=>Ce.jsx("circle",{cx:F.x,cy:F.y,r:F.r,fill:F.warm?y.warm:y.mid,opacity:F.o},X)),z(G-U,E.openL,E.arcL,E.scaleL),z(G+U,E.openR,E.arcR,E.scaleR),Ce.jsx("circle",{cx:"86",cy:"18",r:s<28?6:5,fill:D??y.accent})]})}const Pm={high:38e3,medium:16e3,low:6e3};function z1(){const[s,t]=rn.useState(()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);return rn.useEffect(()=>{const i=window.matchMedia("(prefers-reduced-motion: reduce)"),r=()=>t(i.matches);return i.addEventListener("change",r),()=>i.removeEventListener("change",r)},[]),s}const B1=rn.forwardRef(function(t,i){const{size:r=160,personality:l=ii.personality,state:u=ii.state,expression:h,theme:d=ii.theme,appearance:m="light",shape:p=ii.shape,accent:g=ii.accent,glyphs:x=ii.glyphs,smile:v=ii.smile,lighting:y=ii.lighting,intensity:E=ii.intensity,quality:D="auto",particles:M,interactive:_=ii.interactive,reducedMotion:G="auto",autoSleep:O=ii.autoSleep,layer:U="contained",bleed:b=.6,anchor:z,streamTarget:F,voice:X,label:C,className:w,style:I,onPoke:Z}=t,{character:et,presentation:ft,expressionStrength:ct,expressionDefinition:P,params:Q,customShape:W,transitionSpeed:xt,autoEmote:L}=t,[K,_t]=rn.useState({}),yt=rn.useRef(null),Dt=rn.useRef(null),Nt=rn.useRef(null),J=rn.useRef(Z);J.current=Z;const[mt,At]=rn.useState(!1),Zt=z1(),Gt=typeof r=="number"?r:null,te=D==="static"||Gt!==null&&Gt<48||mt,ke=M??(D==="high"||D==="medium"||D==="low"?Pm[D]:Gt===null?Pm.high:Math.round(Math.min(38e3,Math.max(4e3,Gt*Gt*.45)))),H=rn.useMemo(()=>({personality:t.personality??et?.personality??l,character:et,presentation:ft,expressionStrength:ct,expressionDefinition:P,params:Q,customShape:W,transitionSpeed:xt,autoEmote:L,state:u,expression:h??Ra[u].hint,theme:d,shape:t.shape??et?.shape??p,accent:g,glyphs:x,smile:v,lighting:y,intensity:E,particleBudget:ke,reducedMotion:G==="auto"?Zt:G,interactive:_,dark:m==="dark",autoSleep:O}),[t.personality,t.shape,et,ft,ct,P,Q,W,xt,L,l,u,h,d,p,g,x,v,y,E,ke,G,Zt,_,m,O]);rn.useEffect(()=>{if(te||!Dt.current)return;let le;try{le=new N1(Dt.current,{onPoke:()=>J.current?.()})}catch(It){console.warn("Qivi: WebGL unavailable, using static avatar",It),At(!0);return}return Nt.current=le,()=>{le.dispose(),Nt.current=null}},[te,U]);const ue=rn.useMemo(()=>{const le={...H,...K};return K.character&&(K.personality===void 0&&(le.personality=K.character.personality??H.personality),K.shape===void 0&&(le.shape=K.character.shape??H.shape)),K.state!==void 0&&K.expression===void 0&&(le.expression=Ra[K.state].hint),le},[H,K]);rn.useEffect(()=>Nt.current?.setConfig(ue),[ue,te,U]),rn.useEffect(()=>Nt.current?.setAnchor(z??yt.current),[z,te,U]),rn.useEffect(()=>Nt.current?.setStreamTarget(F??null),[F,te,U]),rn.useEffect(()=>Nt.current?.setVoice(X??null),[X,te,U]),rn.useEffect(()=>{if(te||U==="viewport"||!yt.current)return;const le=new IntersectionObserver(([It])=>Nt.current?.setActive(It.isIntersecting),{rootMargin:"120px"});return le.observe(yt.current),()=>le.disconnect()},[te,U]),rn.useImperativeHandle(i,()=>({impulse:le=>Nt.current?.impulse(le),perform:le=>_t({...le}),resetPerformance:()=>{Nt.current?.resetReactions(),_t({})}}),[]);const ie=C??`${ue.character?.name??"Qivi"}, ${Ra[ue.state].text.toLowerCase()}`,Qt={width:r,height:r,...I};if(te)return Ce.jsx("div",{className:`qivi-avatar is-static ${w??""}`,style:Qt,role:"img","aria-label":ie,children:Ce.jsx(P1,{size:Gt??48,personality:ue.personality,theme:ue.theme,expression:ue.expression,state:ue.state,character:ue.character,presentation:ue.presentation,expressionStrength:ue.expressionStrength,expressionDefinition:ue.expressionDefinition,params:ue.params})});const Ft=U==="viewport"?x_.createPortal(Ce.jsx("canvas",{ref:Dt,className:"qivi-stage","aria-hidden":"true"}),document.body):Ce.jsx("canvas",{ref:Dt,className:"qivi-avatar-canvas","aria-hidden":"true",style:{inset:`-${b*100}%`,width:`${100+b*200}%`,height:`${100+b*200}%`}});return Ce.jsx("div",{ref:yt,className:`qivi-avatar ${w??""}`,style:Qt,role:"img","aria-label":ie,children:Ft})}),F1="female-shaonv";async function I1(s){const i=await(await fetch("/minimax/t2a_v2",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"speech-02-turbo",text:s.slice(0,500),stream:!1,voice_setting:{voice_id:F1,speed:1,vol:1,pitch:1},audio_setting:{sample_rate:32e3,bitrate:128e3,format:"mp3",channel:1}})})).json();if(!i?.data?.audio)throw new Error(i?.base_resp?.status_msg||"TTS 返回异常");const r=i.data.audio,l=new Uint8Array(r.length/2);for(let m=0;m<l.length;m++)l[m]=parseInt(r.slice(m*2,m*2+2),16);const u=new Audio(URL.createObjectURL(new Blob([l],{type:"audio/mpeg"})));window.__lastAudio=u;const h=wi.fromMediaElement(u),d=new Promise(m=>{u.onended=()=>m(),u.onerror=()=>m(),setTimeout(m,2e4)});return u.play().then(()=>{console.log("[qivi-dock] 🔊 播放开始：",s.slice(0,12)),fetch("/api/qivi-log",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ev:"播放开始",text:s.slice(0,12)})}).catch(()=>{})}).catch(m=>{console.warn("[qivi-dock] 🔇 播放被浏览器拒绝：",m.message),fetch("/api/qivi-log",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ev:"播放被拒",err:m.message})}).catch(()=>{})}),{voice:h,done:d}}function H1(s){const t=wi.speak(s,{lang:"zh-CN",rate:1.05,pitch:1.05});return{voice:t.voice,done:t.done}}async function G1(s){try{return await I1(s)}catch(t){return console.warn("[qivi-dock] MiniMax TTS 失败，回退浏览器音色:",String(t.message||t)),fetch("/api/qivi-log",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ev:"MiniMax失败回退",err:String(t.message||t).slice(0,120)})}).catch(()=>{}),H1(s)}}const ao={平静:{expr:"neutral"},开心:{expr:"happy"},顺畅:{expr:"happy",note:"暂用开心脸，可后补自定义"},困惑:{expr:"confused"},焦虑:{expr:"concern",note:"暂用担忧脸，可后补自定义"},兴奋:{expr:"excited"},成就:{expr:"playful",note:"🥳暂用俏皮脸，可后补庆祝脸"},疲惫:{expr:"sleepy"},严肃:{expr:"focused"},挫败:{expr:"concern",note:"暂用担忧脸，可后补自定义"},过载:{expr:"surprised",note:"🤯暂用震惊脸，可后补自定义"},震惊:{expr:"surprised"},无语:{expr:"neutral",note:"😑暂用平静脸，可后补自定义"},得意:{expr:"playful",note:"😎暂用俏皮脸，可后补自定义"},离谱:{expr:"confused",note:"🙃暂用困惑脸，可后补自定义"},委屈:{expr:"concern",note:"😢暂用担忧脸，可后补自定义"}},Pf="qivi-dock-cfg",zl={tool:"qivi",intervalMs:6e4},V1=()=>{try{const s=localStorage.getItem(Pf);return s?{...zl,...JSON.parse(s)}:zl}catch{return zl}};async function k1(s,t){const i=await fetch("/api/n8n",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tool:s.tool,args:t})}),r=await i.json();if(!i.ok||!r.ok)throw new Error(r.error||"HTTP "+i.status);return r.reaction}function X1(){const[s,t]=xn.useState("平静"),[i,r]=xn.useState(""),[l,u]=xn.useState(V1()),[h,d]=xn.useState(""),m=xn.useRef(void 0);xn.useRef("");const p=xn.useRef(null),g=xn.useRef(Promise.resolve()),[x,v]=xn.useState(null),[y,E]=xn.useState(!1),[D,M]=xn.useState({theme:"midnight",appearance:"dark"}),_=xn.useRef(()=>!0),G=b=>{if(b.emotion&&t(ao[b.emotion]?b.emotion:"平静"),typeof b.say=="string"&&b.say){r(b.say),window.clearTimeout(m.current),m.current=window.setTimeout(()=>r(""),4e3);const z=()=>G1(b.say).then(({voice:X,done:C})=>(X&&v(X),b.say&&(E(!0),C.then(()=>E(!1))),C)),F=()=>new Promise(X=>{const C=p.current;if(!C||C.ended)return X();const w=setTimeout(X,8e3);C.onended=()=>{clearTimeout(w),X()}});b.via==="n8n"?(fetch("/api/qivi-log",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ev:"云端入队",say:b.say.slice(0,12)})}).catch(()=>{}),g.current=g.current.then(F).then(()=>new Promise(X=>setTimeout(X,250))).then(z)):g.current=g.current.then(z)}return!0};_.current=G,xn.useEffect(()=>(window.QiviDock={setEmotion(b){t(ao[b]?b:"平静")},reaction:b=>_.current(b),setTheme(b){M(z=>({theme:b.theme||z.theme,appearance:b.appearance||z.appearance}))},config(b,z=6e4){const F={tool:b,intervalMs:z};localStorage.setItem(Pf,JSON.stringify(F)),u(F),d("")},unconfig(){localStorage.removeItem(Pf),u(zl)},cfg:()=>l},()=>{delete window.QiviDock}),[l]),xn.useEffect(()=>{const b=()=>{try{const z=new Audio;z.muted=!0,z.play().then(()=>{z.pause(),z.muted=!1,console.log("[qivi-dock] 声音通道已解锁"),fetch("/api/qivi-log",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ev:"解锁成功"})}).catch(()=>{})}).catch(()=>{})}catch{}window.removeEventListener("pointerdown",b),window.removeEventListener("keydown",b)};return window.addEventListener("pointerdown",b),window.addEventListener("keydown",b),()=>{window.removeEventListener("pointerdown",b),window.removeEventListener("keydown",b)}},[]),xn.useEffect(()=>{let b=null,z,F,X=!1;const C=()=>{fetch("/api/qivi-cfg").then(w=>w.json()).then(w=>{if(X||!w.url)return;const I=w.token?w.url+"?token="+encodeURIComponent(w.token):w.url;b=new WebSocket(I),b.onopen=()=>{console.log("[qivi-ws] 已连上",I),z=window.setInterval(()=>{b?.readyState===1&&b.send(JSON.stringify({type:"ping"}))},25e3)},b.onmessage=Z=>{try{const et=JSON.parse(Z.data);et.type==="broadcast"&&et.channel==="qivi"&&et.data&&(console.log("[qivi-dock] WS 推送",new Date().toLocaleTimeString(),"→",JSON.stringify(et.data)),_.current(et.data))}catch{}},b.onclose=()=>{window.clearInterval(z),X||(console.warn("[qivi-ws] 断线，5s 重连"),F=window.setTimeout(C,5e3))},b.onerror=()=>{}}).catch(()=>{X||(F=window.setTimeout(C,5e3))})};return C(),()=>{X=!0,window.clearInterval(z),window.clearTimeout(F),b?.close()}},[]),xn.useEffect(()=>{if(!l?.tool)return;let b=!1,z=!1;const F=async()=>{if(!(b||z)){z=!0;try{const C=await k1(l,{source:"idle-poll"});C&&_.current(C),d(""),console.log("[qivi-dock] 心跳",new Date().toLocaleTimeString(),"→",JSON.stringify(C))}catch(C){d(String(C.message||C)),console.warn("[qivi-dock] 心跳失败",new Date().toLocaleTimeString(),String(C.message||C))}finally{z=!1}}};F();const X=window.setInterval(F,Math.max(1e4,l.intervalMs));return()=>{b=!0,window.clearInterval(X)}},[l]);const O=ao[s]?s:"平静",U=ao[O];return Ce.jsxs("div",{style:{display:"flex",alignItems:"flex-end",gap:6,flexDirection:"column"},children:[(()=>{try{if(localStorage.getItem("qiviHideBubble")==="1")return!1}catch{}return!0})()&&i&&Ce.jsx("div",{style:{maxWidth:220,padding:"6px 10px",borderRadius:"10px 10px 2px 10px",background:"#1E1A30",border:"1px solid #2E2A44",color:"#D6D3E8",fontSize:12,lineHeight:1.5,fontFamily:'"Microsoft YaHei",system-ui,sans-serif'},children:i}),Ce.jsx("div",{style:{display:"flex",alignItems:"center",gap:4},children:Ce.jsx(B1,{size:110,theme:D.theme,appearance:D.appearance,expression:U.expr??"neutral",expressionDefinition:U.def,voice:x,state:y?"talking":void 0,quality:"low",interactive:!0,autoSleep:!0})})]})}const zm=document.createElement("style");zm.textContent=".qivi-stage{position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:30}.qivi-avatar{position:relative;display:inline-block;flex:none}.qivi-avatar.is-static{display:inline-grid;place-items:center}.qivi-avatar-canvas{position:absolute;pointer-events:none;z-index:1}",document.head.appendChild(zm);const ro=document.createElement("div");ro.id="qivi-dock",Object.assign(ro.style,{position:"fixed",right:"14px",bottom:"14px",zIndex:"50",pointerEvents:"auto"}),document.body.appendChild(ro),__.createRoot(ro,xn).render(xn.createElement(X1)),console.log("[qivi-dock] 已挂载",{host:!!ro,moods:Object.keys(ao).length})})();
