(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(a){if(a.ep)return;a.ep=!0;const c=r(a);fetch(a.href,c)}})();var bl={exports:{}},Do={},$l={exports:{}},Oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd;function Jf(){if(Jd)return Oe;Jd=1;var i=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),$=Symbol.iterator;function k(P){return P===null||typeof P!="object"?null:(P=$&&P[$]||P["@@iterator"],typeof P=="function"?P:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function N(P,Z,_e){this.props=P,this.context=Z,this.refs=S,this.updater=_e||z}N.prototype.isReactComponent={},N.prototype.setState=function(P,Z){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Z,"setState")},N.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function M(){}M.prototype=N.prototype;function V(P,Z,_e){this.props=P,this.context=Z,this.refs=S,this.updater=_e||z}var O=V.prototype=new M;O.constructor=V,T(O,N.prototype),O.isPureReactComponent=!0;var D=Array.isArray,E=Object.prototype.hasOwnProperty,W={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function Q(P,Z,_e){var qe,Te={},we=null,Me=null;if(Z!=null)for(qe in Z.ref!==void 0&&(Me=Z.ref),Z.key!==void 0&&(we=""+Z.key),Z)E.call(Z,qe)&&!L.hasOwnProperty(qe)&&(Te[qe]=Z[qe]);var ve=arguments.length-2;if(ve===1)Te.children=_e;else if(1<ve){for(var Fe=Array(ve),Ye=0;Ye<ve;Ye++)Fe[Ye]=arguments[Ye+2];Te.children=Fe}if(P&&P.defaultProps)for(qe in ve=P.defaultProps,ve)Te[qe]===void 0&&(Te[qe]=ve[qe]);return{$$typeof:i,type:P,key:we,ref:Me,props:Te,_owner:W.current}}function X(P,Z){return{$$typeof:i,type:P.type,key:Z,ref:P.ref,props:P.props,_owner:P._owner}}function Y(P){return typeof P=="object"&&P!==null&&P.$$typeof===i}function re(P){var Z={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(_e){return Z[_e]})}var J=/\/+/g;function ne(P,Z){return typeof P=="object"&&P!==null&&P.key!=null?re(""+P.key):Z.toString(36)}function ge(P,Z,_e,qe,Te){var we=typeof P;(we==="undefined"||we==="boolean")&&(P=null);var Me=!1;if(P===null)Me=!0;else switch(we){case"string":case"number":Me=!0;break;case"object":switch(P.$$typeof){case i:case t:Me=!0}}if(Me)return Me=P,Te=Te(Me),P=qe===""?"."+ne(Me,0):qe,D(Te)?(_e="",P!=null&&(_e=P.replace(J,"$&/")+"/"),ge(Te,Z,_e,"",function(Ye){return Ye})):Te!=null&&(Y(Te)&&(Te=X(Te,_e+(!Te.key||Me&&Me.key===Te.key?"":(""+Te.key).replace(J,"$&/")+"/")+P)),Z.push(Te)),1;if(Me=0,qe=qe===""?".":qe+":",D(P))for(var ve=0;ve<P.length;ve++){we=P[ve];var Fe=qe+ne(we,ve);Me+=ge(we,Z,_e,Fe,Te)}else if(Fe=k(P),typeof Fe=="function")for(P=Fe.call(P),ve=0;!(we=P.next()).done;)we=we.value,Fe=qe+ne(we,ve++),Me+=ge(we,Z,_e,Fe,Te);else if(we==="object")throw Z=String(P),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return Me}function Ae(P,Z,_e){if(P==null)return P;var qe=[],Te=0;return ge(P,qe,"","",function(we){return Z.call(_e,we,Te++)}),qe}function ye(P){if(P._status===-1){var Z=P._result;Z=Z(),Z.then(function(_e){(P._status===0||P._status===-1)&&(P._status=1,P._result=_e)},function(_e){(P._status===0||P._status===-1)&&(P._status=2,P._result=_e)}),P._status===-1&&(P._status=0,P._result=Z)}if(P._status===1)return P._result.default;throw P._result}var he={current:null},te={transition:null},me={ReactCurrentDispatcher:he,ReactCurrentBatchConfig:te,ReactCurrentOwner:W};function de(){throw Error("act(...) is not supported in production builds of React.")}return Oe.Children={map:Ae,forEach:function(P,Z,_e){Ae(P,function(){Z.apply(this,arguments)},_e)},count:function(P){var Z=0;return Ae(P,function(){Z++}),Z},toArray:function(P){return Ae(P,function(Z){return Z})||[]},only:function(P){if(!Y(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Oe.Component=N,Oe.Fragment=r,Oe.Profiler=a,Oe.PureComponent=V,Oe.StrictMode=s,Oe.Suspense=h,Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Oe.act=de,Oe.cloneElement=function(P,Z,_e){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var qe=T({},P.props),Te=P.key,we=P.ref,Me=P._owner;if(Z!=null){if(Z.ref!==void 0&&(we=Z.ref,Me=W.current),Z.key!==void 0&&(Te=""+Z.key),P.type&&P.type.defaultProps)var ve=P.type.defaultProps;for(Fe in Z)E.call(Z,Fe)&&!L.hasOwnProperty(Fe)&&(qe[Fe]=Z[Fe]===void 0&&ve!==void 0?ve[Fe]:Z[Fe])}var Fe=arguments.length-2;if(Fe===1)qe.children=_e;else if(1<Fe){ve=Array(Fe);for(var Ye=0;Ye<Fe;Ye++)ve[Ye]=arguments[Ye+2];qe.children=ve}return{$$typeof:i,type:P.type,key:Te,ref:we,props:qe,_owner:Me}},Oe.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:c,_context:P},P.Consumer=P},Oe.createElement=Q,Oe.createFactory=function(P){var Z=Q.bind(null,P);return Z.type=P,Z},Oe.createRef=function(){return{current:null}},Oe.forwardRef=function(P){return{$$typeof:f,render:P}},Oe.isValidElement=Y,Oe.lazy=function(P){return{$$typeof:w,_payload:{_status:-1,_result:P},_init:ye}},Oe.memo=function(P,Z){return{$$typeof:v,type:P,compare:Z===void 0?null:Z}},Oe.startTransition=function(P){var Z=te.transition;te.transition={};try{P()}finally{te.transition=Z}},Oe.unstable_act=de,Oe.useCallback=function(P,Z){return he.current.useCallback(P,Z)},Oe.useContext=function(P){return he.current.useContext(P)},Oe.useDebugValue=function(){},Oe.useDeferredValue=function(P){return he.current.useDeferredValue(P)},Oe.useEffect=function(P,Z){return he.current.useEffect(P,Z)},Oe.useId=function(){return he.current.useId()},Oe.useImperativeHandle=function(P,Z,_e){return he.current.useImperativeHandle(P,Z,_e)},Oe.useInsertionEffect=function(P,Z){return he.current.useInsertionEffect(P,Z)},Oe.useLayoutEffect=function(P,Z){return he.current.useLayoutEffect(P,Z)},Oe.useMemo=function(P,Z){return he.current.useMemo(P,Z)},Oe.useReducer=function(P,Z,_e){return he.current.useReducer(P,Z,_e)},Oe.useRef=function(P){return he.current.useRef(P)},Oe.useState=function(P){return he.current.useState(P)},Oe.useSyncExternalStore=function(P,Z,_e){return he.current.useSyncExternalStore(P,Z,_e)},Oe.useTransition=function(){return he.current.useTransition()},Oe.version="18.3.1",Oe}var e1;function rc(){return e1||(e1=1,$l.exports=Jf()),$l.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n1;function eh(){if(n1)return Do;n1=1;var i=rc(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,h,v){var w,$={},k=null,z=null;v!==void 0&&(k=""+v),h.key!==void 0&&(k=""+h.key),h.ref!==void 0&&(z=h.ref);for(w in h)s.call(h,w)&&!c.hasOwnProperty(w)&&($[w]=h[w]);if(f&&f.defaultProps)for(w in h=f.defaultProps,h)$[w]===void 0&&($[w]=h[w]);return{$$typeof:t,type:f,key:k,ref:z,props:$,_owner:a.current}}return Do.Fragment=r,Do.jsx=d,Do.jsxs=d,Do}var t1;function nh(){return t1||(t1=1,bl.exports=eh()),bl.exports}var y=nh(),F=rc(),sa={},_l={exports:{}},Yn={},kl={exports:{}},zl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1;function th(){return r1||(r1=1,(function(i){function t(te,me){var de=te.length;te.push(me);e:for(;0<de;){var P=de-1>>>1,Z=te[P];if(0<a(Z,me))te[P]=me,te[de]=Z,de=P;else break e}}function r(te){return te.length===0?null:te[0]}function s(te){if(te.length===0)return null;var me=te[0],de=te.pop();if(de!==me){te[0]=de;e:for(var P=0,Z=te.length,_e=Z>>>1;P<_e;){var qe=2*(P+1)-1,Te=te[qe],we=qe+1,Me=te[we];if(0>a(Te,de))we<Z&&0>a(Me,Te)?(te[P]=Me,te[we]=de,P=we):(te[P]=Te,te[qe]=de,P=qe);else if(we<Z&&0>a(Me,de))te[P]=Me,te[we]=de,P=we;else break e}}return me}function a(te,me){var de=te.sortIndex-me.sortIndex;return de!==0?de:te.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();i.unstable_now=function(){return d.now()-f}}var h=[],v=[],w=1,$=null,k=3,z=!1,T=!1,S=!1,N=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(te){for(var me=r(v);me!==null;){if(me.callback===null)s(v);else if(me.startTime<=te)s(v),me.sortIndex=me.expirationTime,t(h,me);else break;me=r(v)}}function D(te){if(S=!1,O(te),!T)if(r(h)!==null)T=!0,ye(E);else{var me=r(v);me!==null&&he(D,me.startTime-te)}}function E(te,me){T=!1,S&&(S=!1,M(Q),Q=-1),z=!0;var de=k;try{for(O(me),$=r(h);$!==null&&(!($.expirationTime>me)||te&&!re());){var P=$.callback;if(typeof P=="function"){$.callback=null,k=$.priorityLevel;var Z=P($.expirationTime<=me);me=i.unstable_now(),typeof Z=="function"?$.callback=Z:$===r(h)&&s(h),O(me)}else s(h);$=r(h)}if($!==null)var _e=!0;else{var qe=r(v);qe!==null&&he(D,qe.startTime-me),_e=!1}return _e}finally{$=null,k=de,z=!1}}var W=!1,L=null,Q=-1,X=5,Y=-1;function re(){return!(i.unstable_now()-Y<X)}function J(){if(L!==null){var te=i.unstable_now();Y=te;var me=!0;try{me=L(!0,te)}finally{me?ne():(W=!1,L=null)}}else W=!1}var ne;if(typeof V=="function")ne=function(){V(J)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,Ae=ge.port2;ge.port1.onmessage=J,ne=function(){Ae.postMessage(null)}}else ne=function(){N(J,0)};function ye(te){L=te,W||(W=!0,ne())}function he(te,me){Q=N(function(){te(i.unstable_now())},me)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(te){te.callback=null},i.unstable_continueExecution=function(){T||z||(T=!0,ye(E))},i.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<te?Math.floor(1e3/te):5},i.unstable_getCurrentPriorityLevel=function(){return k},i.unstable_getFirstCallbackNode=function(){return r(h)},i.unstable_next=function(te){switch(k){case 1:case 2:case 3:var me=3;break;default:me=k}var de=k;k=me;try{return te()}finally{k=de}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(te,me){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var de=k;k=te;try{return me()}finally{k=de}},i.unstable_scheduleCallback=function(te,me,de){var P=i.unstable_now();switch(typeof de=="object"&&de!==null?(de=de.delay,de=typeof de=="number"&&0<de?P+de:P):de=P,te){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=de+Z,te={id:w++,callback:me,priorityLevel:te,startTime:de,expirationTime:Z,sortIndex:-1},de>P?(te.sortIndex=de,t(v,te),r(h)===null&&te===r(v)&&(S?(M(Q),Q=-1):S=!0,he(D,de-P))):(te.sortIndex=Z,t(h,te),T||z||(T=!0,ye(E))),te},i.unstable_shouldYield=re,i.unstable_wrapCallback=function(te){var me=k;return function(){var de=k;k=me;try{return te.apply(this,arguments)}finally{k=de}}}})(zl)),zl}var i1;function rh(){return i1||(i1=1,kl.exports=th()),kl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1;function ih(){if(o1)return Yn;o1=1;var i=rc(),t=rh();function r(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function c(e,n){d(e,n),d(e+"Capture",n)}function d(e,n){for(a[e]=n,e=0;e<n.length;e++)s.add(n[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},$={};function k(e){return h.call($,e)?!0:h.call(w,e)?!1:v.test(e)?$[e]=!0:(w[e]=!0,!1)}function z(e,n,o,l){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T(e,n,o,l){if(n===null||typeof n>"u"||z(e,n,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function S(e,n,o,l,u,m,b){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=e,this.type=n,this.sanitizeURL=m,this.removeEmptyString=b}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){N[e]=new S(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];N[n]=new S(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){N[e]=new S(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){N[e]=new S(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){N[e]=new S(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){N[e]=new S(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){N[e]=new S(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){N[e]=new S(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){N[e]=new S(e,5,!1,e.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function V(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(M,V);N[n]=new S(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(M,V);N[n]=new S(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(M,V);N[n]=new S(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){N[e]=new S(e,1,!1,e.toLowerCase(),null,!1,!1)}),N.xlinkHref=new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){N[e]=new S(e,1,!1,e.toLowerCase(),null,!0,!0)});function O(e,n,o,l){var u=N.hasOwnProperty(n)?N[n]:null;(u!==null?u.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(T(n,o,u,l)&&(o=null),l||u===null?k(n)&&(o===null?e.removeAttribute(n):e.setAttribute(n,""+o)):u.mustUseProperty?e[u.propertyName]=o===null?u.type===3?!1:"":o:(n=u.attributeName,l=u.attributeNamespace,o===null?e.removeAttribute(n):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?e.setAttributeNS(l,n,o):e.setAttribute(n,o))))}var D=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,E=Symbol.for("react.element"),W=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),re=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),Ae=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),he=Symbol.for("react.offscreen"),te=Symbol.iterator;function me(e){return e===null||typeof e!="object"?null:(e=te&&e[te]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,P;function Z(e){if(P===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);P=n&&n[1]||""}return`
`+P+e}var _e=!1;function qe(e,n){if(!e||_e)return"";_e=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(K){var l=K}Reflect.construct(e,[],n)}else{try{n.call()}catch(K){l=K}e.call(n.prototype)}else{try{throw Error()}catch(K){l=K}e()}}catch(K){if(K&&l&&typeof K.stack=="string"){for(var u=K.stack.split(`
`),m=l.stack.split(`
`),b=u.length-1,j=m.length-1;1<=b&&0<=j&&u[b]!==m[j];)j--;for(;1<=b&&0<=j;b--,j--)if(u[b]!==m[j]){if(b!==1||j!==1)do if(b--,j--,0>j||u[b]!==m[j]){var C=`
`+u[b].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=b&&0<=j);break}}}finally{_e=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?Z(e):""}function Te(e){switch(e.tag){case 5:return Z(e.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return e=qe(e.type,!1),e;case 11:return e=qe(e.type.render,!1),e;case 1:return e=qe(e.type,!0),e;default:return""}}function we(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case L:return"Fragment";case W:return"Portal";case X:return"Profiler";case Q:return"StrictMode";case ne:return"Suspense";case ge:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case re:return(e.displayName||"Context")+".Consumer";case Y:return(e._context.displayName||"Context")+".Provider";case J:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ae:return n=e.displayName||null,n!==null?n:we(e.type)||"Memo";case ye:n=e._payload,e=e._init;try{return we(e(n))}catch{}}return null}function Me(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(n);case 8:return n===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ve(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(e){var n=Fe(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,m=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){l=""+b,m.call(this,b)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(b){l=""+b},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function bn(e){e._valueTracker||(e._valueTracker=Ye(e))}function xt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var o=n.getValue(),l="";return e&&(l=Fe(e)?e.checked?"true":"false":e.value),e=l,e!==o?(n.setValue(e),!0):!1}function Wn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function De(e,n){var o=n.checked;return de({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function sn(e,n){var o=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;o=ve(n.value!=null?n.value:o),e._wrapperState={initialChecked:l,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ne(e,n){n=n.checked,n!=null&&O(e,"checked",n,!1)}function zn(e,n){Ne(e,n);var o=ve(n.value),l=n.type;if(o!=null)l==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Mt(e,n.type,o):n.hasOwnProperty("defaultValue")&&Mt(e,n.type,ve(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function et(e,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,o||n===e.value||(e.value=n),e.defaultValue=n}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function Mt(e,n,o){(n!=="number"||Wn(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var lt=Array.isArray;function nt(e,n,o,l){if(e=e.options,n){n={};for(var u=0;u<o.length;u++)n["$"+o[u]]=!0;for(o=0;o<e.length;o++)u=n.hasOwnProperty("$"+e[o].value),e[o].selected!==u&&(e[o].selected=u),u&&l&&(e[o].defaultSelected=!0)}else{for(o=""+ve(o),n=null,u=0;u<e.length;u++){if(e[u].value===o){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function si(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(r(91));return de({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hi(e,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(r(92));if(lt(o)){if(1<o.length)throw Error(r(93));o=o[0]}n=o}n==null&&(n=""),o=n}e._wrapperState={initialValue:ve(o)}}function Wi(e,n){var o=ve(n.value),l=ve(n.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),n.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),l!=null&&(e.defaultValue=""+l)}function Gi(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ui(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ui(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bn,mn=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,l,u){MSApp.execUnsafeLocalFunction(function(){return e(n,o,l,u)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Bn=Bn||document.createElement("div"),Bn.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Bn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function wt(e,n){if(n){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=n;return}}e.textContent=n}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lr=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(e){lr.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Mn[n]=Mn[e]})});function Vi(e,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||Mn.hasOwnProperty(e)&&Mn[e]?(""+n).trim():n+"px"}function Ko(e,n){e=e.style;for(var o in n)if(n.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=Vi(o,n[o],l);o==="float"&&(o="cssFloat"),l?e.setProperty(o,u):e[o]=u}}var Ba=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ki(e,n){if(n){if(Ba[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(r(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(r(61))}if(n.style!=null&&typeof n.style!="object")throw Error(r(62))}}function Zi(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function Ir(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ot=null,Ht=null,cr=null;function Zo(e){if(e=wo(e)){if(typeof Ot!="function")throw Error(r(280));var n=e.stateNode;n&&(n=bs(n),Ot(e.stateNode,e.type,n))}}function Qi(e){Ht?cr?cr.push(e):cr=[e]:Ht=e}function ai(){if(Ht){var e=Ht,n=cr;if(cr=Ht=null,Zo(e),n)for(e=0;e<n.length;e++)Zo(n[e])}}function Fr(e,n){return e(n)}function Qo(){}var Yi=!1;function li(e,n,o){if(Yi)return e(n,o);Yi=!0;try{return Fr(e,n,o)}finally{Yi=!1,(Ht!==null||cr!==null)&&(Qo(),ai())}}function Lr(e,n){var o=e.stateNode;if(o===null)return null;var l=bs(o);if(l===null)return null;o=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(r(231,n,typeof o));return o}var Wt=!1;if(f)try{var Pt={};Object.defineProperty(Pt,"passive",{get:function(){Wt=!0}}),window.addEventListener("test",Pt,Pt),window.removeEventListener("test",Pt,Pt)}catch{Wt=!1}function ci(e,n,o,l,u,m,b,j,C){var K=Array.prototype.slice.call(arguments,3);try{n.apply(o,K)}catch(se){this.onError(se)}}var Gt=!1,ui=null,$t=!1,Xi=null,Or={onError:function(e){Gt=!0,ui=e}};function Yo(e,n,o,l,u,m,b,j,C){Gt=!1,ui=null,ci.apply(Or,arguments)}function Xo(e,n,o,l,u,m,b,j,C){if(Yo.apply(this,arguments),Gt){if(Gt){var K=ui;Gt=!1,ui=null}else throw Error(r(198));$t||($t=!0,Xi=K)}}function Ut(e){var n=e,o=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(o=n.return),e=n.return;while(e)}return n.tag===3?o:null}function Jo(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ji(e){if(Ut(e)!==e)throw Error(r(188))}function Na(e){var n=e.alternate;if(!n){if(n=Ut(e),n===null)throw Error(r(188));return n!==e?null:e}for(var o=e,l=n;;){var u=o.return;if(u===null)break;var m=u.alternate;if(m===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===m.child){for(m=u.child;m;){if(m===o)return Ji(u),e;if(m===l)return Ji(u),n;m=m.sibling}throw Error(r(188))}if(o.return!==l.return)o=u,l=m;else{for(var b=!1,j=u.child;j;){if(j===o){b=!0,o=u,l=m;break}if(j===l){b=!0,l=u,o=m;break}j=j.sibling}if(!b){for(j=m.child;j;){if(j===o){b=!0,o=m,l=u;break}if(j===l){b=!0,l=m,o=u;break}j=j.sibling}if(!b)throw Error(r(189))}}if(o.alternate!==l)throw Error(r(190))}if(o.tag!==3)throw Error(r(188));return o.stateNode.current===o?e:n}function ur(e){return e=Na(e),e!==null?es(e):null}function es(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=es(e);if(n!==null)return n;e=e.sibling}return null}var ns=t.unstable_scheduleCallback,di=t.unstable_cancelCallback,Ia=t.unstable_shouldYield,Fa=t.unstable_requestPaint,en=t.unstable_now,La=t.unstable_getCurrentPriorityLevel,eo=t.unstable_ImmediatePriority,ts=t.unstable_UserBlockingPriority,Hr=t.unstable_NormalPriority,ee=t.unstable_LowPriority,He=t.unstable_IdlePriority,We=null,Gn=null;function mm(e){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(We,e,void 0,(e.current.flags&128)===128)}catch{}}var _t=Math.clz32?Math.clz32:gm,fm=Math.log,hm=Math.LN2;function gm(e){return e>>>=0,e===0?32:31-(fm(e)/hm|0)|0}var rs=64,is=4194304;function no(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function os(e,n){var o=e.pendingLanes;if(o===0)return 0;var l=0,u=e.suspendedLanes,m=e.pingedLanes,b=o&268435455;if(b!==0){var j=b&~u;j!==0?l=no(j):(m&=b,m!==0&&(l=no(m)))}else b=o&~u,b!==0?l=no(b):m!==0&&(l=no(m));if(l===0)return 0;if(n!==0&&n!==l&&(n&u)===0&&(u=l&-l,m=n&-n,u>=m||u===16&&(m&4194240)!==0))return n;if((l&4)!==0&&(l|=o&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)o=31-_t(n),u=1<<o,l|=e[o],n&=~u;return l}function ym(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vm(e,n){for(var o=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,m=e.pendingLanes;0<m;){var b=31-_t(m),j=1<<b,C=u[b];C===-1?((j&o)===0||(j&l)!==0)&&(u[b]=ym(j,n)):C<=n&&(e.expiredLanes|=j),m&=~j}}function Oa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ac(){var e=rs;return rs<<=1,(rs&4194240)===0&&(rs=64),e}function Ha(e){for(var n=[],o=0;31>o;o++)n.push(e);return n}function to(e,n,o){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-_t(n),e[n]=o}function xm(e,n){var o=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<o;){var u=31-_t(o),m=1<<u;n[u]=0,l[u]=-1,e[u]=-1,o&=~m}}function Wa(e,n){var o=e.entangledLanes|=n;for(e=e.entanglements;o;){var l=31-_t(o),u=1<<l;u&n|e[l]&n&&(e[l]|=n),o&=~u}}var Xe=0;function Mc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Pc,Ga,Cc,Rc,Dc,Ua=!1,ss=[],dr=null,pr=null,mr=null,ro=new Map,io=new Map,fr=[],wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ec(e,n){switch(e){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(n.pointerId)}}function oo(e,n,o,l,u,m){return e===null||e.nativeEvent!==m?(e={blockedOn:n,domEventName:o,eventSystemFlags:l,nativeEvent:m,targetContainers:[u]},n!==null&&(n=wo(n),n!==null&&Ga(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function bm(e,n,o,l,u){switch(n){case"focusin":return dr=oo(dr,e,n,o,l,u),!0;case"dragenter":return pr=oo(pr,e,n,o,l,u),!0;case"mouseover":return mr=oo(mr,e,n,o,l,u),!0;case"pointerover":var m=u.pointerId;return ro.set(m,oo(ro.get(m)||null,e,n,o,l,u)),!0;case"gotpointercapture":return m=u.pointerId,io.set(m,oo(io.get(m)||null,e,n,o,l,u)),!0}return!1}function Bc(e){var n=Wr(e.target);if(n!==null){var o=Ut(n);if(o!==null){if(n=o.tag,n===13){if(n=Jo(o),n!==null){e.blockedOn=n,Dc(e.priority,function(){Cc(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function as(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var o=Ka(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var l=new o.constructor(o.type,o);bt=l,o.target.dispatchEvent(l),bt=null}else return n=wo(o),n!==null&&Ga(n),e.blockedOn=o,!1;n.shift()}return!0}function Nc(e,n,o){as(e)&&o.delete(n)}function $m(){Ua=!1,dr!==null&&as(dr)&&(dr=null),pr!==null&&as(pr)&&(pr=null),mr!==null&&as(mr)&&(mr=null),ro.forEach(Nc),io.forEach(Nc)}function so(e,n){e.blockedOn===n&&(e.blockedOn=null,Ua||(Ua=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,$m)))}function ao(e){function n(u){return so(u,e)}if(0<ss.length){so(ss[0],e);for(var o=1;o<ss.length;o++){var l=ss[o];l.blockedOn===e&&(l.blockedOn=null)}}for(dr!==null&&so(dr,e),pr!==null&&so(pr,e),mr!==null&&so(mr,e),ro.forEach(n),io.forEach(n),o=0;o<fr.length;o++)l=fr[o],l.blockedOn===e&&(l.blockedOn=null);for(;0<fr.length&&(o=fr[0],o.blockedOn===null);)Bc(o),o.blockedOn===null&&fr.shift()}var pi=D.ReactCurrentBatchConfig,ls=!0;function _m(e,n,o,l){var u=Xe,m=pi.transition;pi.transition=null;try{Xe=1,Va(e,n,o,l)}finally{Xe=u,pi.transition=m}}function km(e,n,o,l){var u=Xe,m=pi.transition;pi.transition=null;try{Xe=4,Va(e,n,o,l)}finally{Xe=u,pi.transition=m}}function Va(e,n,o,l){if(ls){var u=Ka(e,n,o,l);if(u===null)d0(e,n,l,cs,o),Ec(e,l);else if(bm(u,e,n,o,l))l.stopPropagation();else if(Ec(e,l),n&4&&-1<wm.indexOf(e)){for(;u!==null;){var m=wo(u);if(m!==null&&Pc(m),m=Ka(e,n,o,l),m===null&&d0(e,n,l,cs,o),m===u)break;u=m}u!==null&&l.stopPropagation()}else d0(e,n,l,null,o)}}var cs=null;function Ka(e,n,o,l){if(cs=null,e=Ir(l),e=Wr(e),e!==null)if(n=Ut(e),n===null)e=null;else if(o=n.tag,o===13){if(e=Jo(n),e!==null)return e;e=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return cs=e,null}function Ic(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(La()){case eo:return 1;case ts:return 4;case Hr:case ee:return 16;case He:return 536870912;default:return 16}default:return 16}}var hr=null,Za=null,us=null;function Fc(){if(us)return us;var e,n=Za,o=n.length,l,u="value"in hr?hr.value:hr.textContent,m=u.length;for(e=0;e<o&&n[e]===u[e];e++);var b=o-e;for(l=1;l<=b&&n[o-l]===u[m-l];l++);return us=u.slice(e,1<l?1-l:void 0)}function ds(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ps(){return!0}function Lc(){return!1}function tt(e){function n(o,l,u,m,b){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var j in e)e.hasOwnProperty(j)&&(o=e[j],this[j]=o?o(m):m[j]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ps:Lc,this.isPropagationStopped=Lc,this}return de(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ps)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ps)},persist:function(){},isPersistent:ps}),n}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qa=tt(mi),lo=de({},mi,{view:0,detail:0}),zm=tt(lo),Ya,Xa,co,ms=de({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:e0,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(Ya=e.screenX-co.screenX,Xa=e.screenY-co.screenY):Xa=Ya=0,co=e),Ya)},movementY:function(e){return"movementY"in e?e.movementY:Xa}}),Oc=tt(ms),Sm=de({},ms,{dataTransfer:0}),jm=tt(Sm),qm=de({},lo,{relatedTarget:0}),Ja=tt(qm),Tm=de({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),Am=tt(Tm),Mm=de({},mi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pm=tt(Mm),Cm=de({},mi,{data:0}),Hc=tt(Cm),Rm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Em={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Em[e])?!!n[e]:!1}function e0(){return Bm}var Nm=de({},lo,{key:function(e){if(e.key){var n=Rm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ds(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:e0,charCode:function(e){return e.type==="keypress"?ds(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ds(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Im=tt(Nm),Fm=de({},ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wc=tt(Fm),Lm=de({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:e0}),Om=tt(Lm),Hm=de({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wm=tt(Hm),Gm=de({},ms,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Um=tt(Gm),Vm=[9,13,27,32],n0=f&&"CompositionEvent"in window,uo=null;f&&"documentMode"in document&&(uo=document.documentMode);var Km=f&&"TextEvent"in window&&!uo,Gc=f&&(!n0||uo&&8<uo&&11>=uo),Uc=" ",Vc=!1;function Kc(e,n){switch(e){case"keyup":return Vm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fi=!1;function Zm(e,n){switch(e){case"compositionend":return Zc(n);case"keypress":return n.which!==32?null:(Vc=!0,Uc);case"textInput":return e=n.data,e===Uc&&Vc?null:e;default:return null}}function Qm(e,n){if(fi)return e==="compositionend"||!n0&&Kc(e,n)?(e=Fc(),us=Za=hr=null,fi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gc&&n.locale!=="ko"?null:n.data;default:return null}}var Ym={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Ym[e.type]:n==="textarea"}function Yc(e,n,o,l){Qi(l),n=vs(n,"onChange"),0<n.length&&(o=new Qa("onChange","change",null,o,l),e.push({event:o,listeners:n}))}var po=null,mo=null;function Xm(e){hu(e,0)}function fs(e){var n=xi(e);if(xt(n))return e}function Jm(e,n){if(e==="change")return n}var Xc=!1;if(f){var t0;if(f){var r0="oninput"in document;if(!r0){var Jc=document.createElement("div");Jc.setAttribute("oninput","return;"),r0=typeof Jc.oninput=="function"}t0=r0}else t0=!1;Xc=t0&&(!document.documentMode||9<document.documentMode)}function eu(){po&&(po.detachEvent("onpropertychange",nu),mo=po=null)}function nu(e){if(e.propertyName==="value"&&fs(mo)){var n=[];Yc(n,mo,e,Ir(e)),li(Xm,n)}}function ef(e,n,o){e==="focusin"?(eu(),po=n,mo=o,po.attachEvent("onpropertychange",nu)):e==="focusout"&&eu()}function nf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fs(mo)}function tf(e,n){if(e==="click")return fs(n)}function rf(e,n){if(e==="input"||e==="change")return fs(n)}function of(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kt=typeof Object.is=="function"?Object.is:of;function fo(e,n){if(kt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var o=Object.keys(e),l=Object.keys(n);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!h.call(n,u)||!kt(e[u],n[u]))return!1}return!0}function tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ru(e,n){var o=tu(e);e=0;for(var l;o;){if(o.nodeType===3){if(l=e+o.textContent.length,e<=n&&l>=n)return{node:o,offset:n-e};e=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=tu(o)}}function iu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?iu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ou(){for(var e=window,n=Wn();n instanceof e.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)e=n.contentWindow;else break;n=Wn(e.document)}return n}function i0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function sf(e){var n=ou(),o=e.focusedElem,l=e.selectionRange;if(n!==o&&o&&o.ownerDocument&&iu(o.ownerDocument.documentElement,o)){if(l!==null&&i0(o)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(e,o.value.length);else if(e=(n=o.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var u=o.textContent.length,m=Math.min(l.start,u);l=l.end===void 0?m:Math.min(l.end,u),!e.extend&&m>l&&(u=l,l=m,m=u),u=ru(o,m);var b=ru(o,l);u&&b&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==b.node||e.focusOffset!==b.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),e.removeAllRanges(),m>l?(e.addRange(n),e.extend(b.node,b.offset)):(n.setEnd(b.node,b.offset),e.addRange(n)))}}for(n=[],e=o;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)e=n[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var af=f&&"documentMode"in document&&11>=document.documentMode,hi=null,o0=null,ho=null,s0=!1;function su(e,n,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;s0||hi==null||hi!==Wn(l)||(l=hi,"selectionStart"in l&&i0(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ho&&fo(ho,l)||(ho=l,l=vs(o0,"onSelect"),0<l.length&&(n=new Qa("onSelect","select",null,n,o),e.push({event:n,listeners:l}),n.target=hi)))}function hs(e,n){var o={};return o[e.toLowerCase()]=n.toLowerCase(),o["Webkit"+e]="webkit"+n,o["Moz"+e]="moz"+n,o}var gi={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},a0={},au={};f&&(au=document.createElement("div").style,"AnimationEvent"in window||(delete gi.animationend.animation,delete gi.animationiteration.animation,delete gi.animationstart.animation),"TransitionEvent"in window||delete gi.transitionend.transition);function gs(e){if(a0[e])return a0[e];if(!gi[e])return e;var n=gi[e],o;for(o in n)if(n.hasOwnProperty(o)&&o in au)return a0[e]=n[o];return e}var lu=gs("animationend"),cu=gs("animationiteration"),uu=gs("animationstart"),du=gs("transitionend"),pu=new Map,mu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(e,n){pu.set(e,n),c(n,[e])}for(var l0=0;l0<mu.length;l0++){var c0=mu[l0],lf=c0.toLowerCase(),cf=c0[0].toUpperCase()+c0.slice(1);gr(lf,"on"+cf)}gr(lu,"onAnimationEnd"),gr(cu,"onAnimationIteration"),gr(uu,"onAnimationStart"),gr("dblclick","onDoubleClick"),gr("focusin","onFocus"),gr("focusout","onBlur"),gr(du,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uf=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function fu(e,n,o){var l=e.type||"unknown-event";e.currentTarget=o,Xo(l,n,void 0,e),e.currentTarget=null}function hu(e,n){n=(n&4)!==0;for(var o=0;o<e.length;o++){var l=e[o],u=l.event;l=l.listeners;e:{var m=void 0;if(n)for(var b=l.length-1;0<=b;b--){var j=l[b],C=j.instance,K=j.currentTarget;if(j=j.listener,C!==m&&u.isPropagationStopped())break e;fu(u,j,K),m=C}else for(b=0;b<l.length;b++){if(j=l[b],C=j.instance,K=j.currentTarget,j=j.listener,C!==m&&u.isPropagationStopped())break e;fu(u,j,K),m=C}}}if($t)throw e=Xi,$t=!1,Xi=null,e}function rn(e,n){var o=n[y0];o===void 0&&(o=n[y0]=new Set);var l=e+"__bubble";o.has(l)||(gu(n,e,2,!1),o.add(l))}function u0(e,n,o){var l=0;n&&(l|=4),gu(o,e,l,n)}var ys="_reactListening"+Math.random().toString(36).slice(2);function yo(e){if(!e[ys]){e[ys]=!0,s.forEach(function(o){o!=="selectionchange"&&(uf.has(o)||u0(o,!1,e),u0(o,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ys]||(n[ys]=!0,u0("selectionchange",!1,n))}}function gu(e,n,o,l){switch(Ic(n)){case 1:var u=_m;break;case 4:u=km;break;default:u=Va}o=u.bind(null,n,o,e),u=void 0,!Wt||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,o,{capture:!0,passive:u}):e.addEventListener(n,o,!0):u!==void 0?e.addEventListener(n,o,{passive:u}):e.addEventListener(n,o,!1)}function d0(e,n,o,l,u){var m=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var j=l.stateNode.containerInfo;if(j===u||j.nodeType===8&&j.parentNode===u)break;if(b===4)for(b=l.return;b!==null;){var C=b.tag;if((C===3||C===4)&&(C=b.stateNode.containerInfo,C===u||C.nodeType===8&&C.parentNode===u))return;b=b.return}for(;j!==null;){if(b=Wr(j),b===null)return;if(C=b.tag,C===5||C===6){l=m=b;continue e}j=j.parentNode}}l=l.return}li(function(){var K=m,se=Ir(o),le=[];e:{var ie=pu.get(e);if(ie!==void 0){var be=Qa,ze=e;switch(e){case"keypress":if(ds(o)===0)break e;case"keydown":case"keyup":be=Im;break;case"focusin":ze="focus",be=Ja;break;case"focusout":ze="blur",be=Ja;break;case"beforeblur":case"afterblur":be=Ja;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":be=Oc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":be=jm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":be=Om;break;case lu:case cu:case uu:be=Am;break;case du:be=Wm;break;case"scroll":be=zm;break;case"wheel":be=Um;break;case"copy":case"cut":case"paste":be=Pm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":be=Wc}var Se=(n&4)!==0,gn=!Se&&e==="scroll",H=Se?ie!==null?ie+"Capture":null:ie;Se=[];for(var I=K,U;I!==null;){U=I;var pe=U.stateNode;if(U.tag===5&&pe!==null&&(U=pe,H!==null&&(pe=Lr(I,H),pe!=null&&Se.push(vo(I,pe,U)))),gn)break;I=I.return}0<Se.length&&(ie=new be(ie,ze,null,o,se),le.push({event:ie,listeners:Se}))}}if((n&7)===0){e:{if(ie=e==="mouseover"||e==="pointerover",be=e==="mouseout"||e==="pointerout",ie&&o!==bt&&(ze=o.relatedTarget||o.fromElement)&&(Wr(ze)||ze[Vt]))break e;if((be||ie)&&(ie=se.window===se?se:(ie=se.ownerDocument)?ie.defaultView||ie.parentWindow:window,be?(ze=o.relatedTarget||o.toElement,be=K,ze=ze?Wr(ze):null,ze!==null&&(gn=Ut(ze),ze!==gn||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(be=null,ze=K),be!==ze)){if(Se=Oc,pe="onMouseLeave",H="onMouseEnter",I="mouse",(e==="pointerout"||e==="pointerover")&&(Se=Wc,pe="onPointerLeave",H="onPointerEnter",I="pointer"),gn=be==null?ie:xi(be),U=ze==null?ie:xi(ze),ie=new Se(pe,I+"leave",be,o,se),ie.target=gn,ie.relatedTarget=U,pe=null,Wr(se)===K&&(Se=new Se(H,I+"enter",ze,o,se),Se.target=U,Se.relatedTarget=gn,pe=Se),gn=pe,be&&ze)n:{for(Se=be,H=ze,I=0,U=Se;U;U=yi(U))I++;for(U=0,pe=H;pe;pe=yi(pe))U++;for(;0<I-U;)Se=yi(Se),I--;for(;0<U-I;)H=yi(H),U--;for(;I--;){if(Se===H||H!==null&&Se===H.alternate)break n;Se=yi(Se),H=yi(H)}Se=null}else Se=null;be!==null&&yu(le,ie,be,Se,!1),ze!==null&&gn!==null&&yu(le,gn,ze,Se,!0)}}e:{if(ie=K?xi(K):window,be=ie.nodeName&&ie.nodeName.toLowerCase(),be==="select"||be==="input"&&ie.type==="file")var je=Jm;else if(Qc(ie))if(Xc)je=rf;else{je=nf;var Pe=ef}else(be=ie.nodeName)&&be.toLowerCase()==="input"&&(ie.type==="checkbox"||ie.type==="radio")&&(je=tf);if(je&&(je=je(e,K))){Yc(le,je,o,se);break e}Pe&&Pe(e,ie,K),e==="focusout"&&(Pe=ie._wrapperState)&&Pe.controlled&&ie.type==="number"&&Mt(ie,"number",ie.value)}switch(Pe=K?xi(K):window,e){case"focusin":(Qc(Pe)||Pe.contentEditable==="true")&&(hi=Pe,o0=K,ho=null);break;case"focusout":ho=o0=hi=null;break;case"mousedown":s0=!0;break;case"contextmenu":case"mouseup":case"dragend":s0=!1,su(le,o,se);break;case"selectionchange":if(af)break;case"keydown":case"keyup":su(le,o,se)}var Ce;if(n0)e:{switch(e){case"compositionstart":var Be="onCompositionStart";break e;case"compositionend":Be="onCompositionEnd";break e;case"compositionupdate":Be="onCompositionUpdate";break e}Be=void 0}else fi?Kc(e,o)&&(Be="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(Be="onCompositionStart");Be&&(Gc&&o.locale!=="ko"&&(fi||Be!=="onCompositionStart"?Be==="onCompositionEnd"&&fi&&(Ce=Fc()):(hr=se,Za="value"in hr?hr.value:hr.textContent,fi=!0)),Pe=vs(K,Be),0<Pe.length&&(Be=new Hc(Be,e,null,o,se),le.push({event:Be,listeners:Pe}),Ce?Be.data=Ce:(Ce=Zc(o),Ce!==null&&(Be.data=Ce)))),(Ce=Km?Zm(e,o):Qm(e,o))&&(K=vs(K,"onBeforeInput"),0<K.length&&(se=new Hc("onBeforeInput","beforeinput",null,o,se),le.push({event:se,listeners:K}),se.data=Ce))}hu(le,n)})}function vo(e,n,o){return{instance:e,listener:n,currentTarget:o}}function vs(e,n){for(var o=n+"Capture",l=[];e!==null;){var u=e,m=u.stateNode;u.tag===5&&m!==null&&(u=m,m=Lr(e,o),m!=null&&l.unshift(vo(e,m,u)),m=Lr(e,n),m!=null&&l.push(vo(e,m,u))),e=e.return}return l}function yi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yu(e,n,o,l,u){for(var m=n._reactName,b=[];o!==null&&o!==l;){var j=o,C=j.alternate,K=j.stateNode;if(C!==null&&C===l)break;j.tag===5&&K!==null&&(j=K,u?(C=Lr(o,m),C!=null&&b.unshift(vo(o,C,j))):u||(C=Lr(o,m),C!=null&&b.push(vo(o,C,j)))),o=o.return}b.length!==0&&e.push({event:n,listeners:b})}var df=/\r\n?/g,pf=/\u0000|\uFFFD/g;function vu(e){return(typeof e=="string"?e:""+e).replace(df,`
`).replace(pf,"")}function xs(e,n,o){if(n=vu(n),vu(e)!==n&&o)throw Error(r(425))}function ws(){}var p0=null,m0=null;function f0(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var h0=typeof setTimeout=="function"?setTimeout:void 0,mf=typeof clearTimeout=="function"?clearTimeout:void 0,xu=typeof Promise=="function"?Promise:void 0,ff=typeof queueMicrotask=="function"?queueMicrotask:typeof xu<"u"?function(e){return xu.resolve(null).then(e).catch(hf)}:h0;function hf(e){setTimeout(function(){throw e})}function g0(e,n){var o=n,l=0;do{var u=o.nextSibling;if(e.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){e.removeChild(u),ao(n);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);ao(n)}function yr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function wu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return e;n--}else o==="/$"&&n++}e=e.previousSibling}return null}var vi=Math.random().toString(36).slice(2),Ct="__reactFiber$"+vi,xo="__reactProps$"+vi,Vt="__reactContainer$"+vi,y0="__reactEvents$"+vi,gf="__reactListeners$"+vi,yf="__reactHandles$"+vi;function Wr(e){var n=e[Ct];if(n)return n;for(var o=e.parentNode;o;){if(n=o[Vt]||o[Ct]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(e=wu(e);e!==null;){if(o=e[Ct])return o;e=wu(e)}return n}e=o,o=e.parentNode}return null}function wo(e){return e=e[Ct]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function bs(e){return e[xo]||null}var v0=[],wi=-1;function vr(e){return{current:e}}function on(e){0>wi||(e.current=v0[wi],v0[wi]=null,wi--)}function nn(e,n){wi++,v0[wi]=e.current,e.current=n}var xr={},Pn=vr(xr),Un=vr(!1),Gr=xr;function bi(e,n){var o=e.type.contextTypes;if(!o)return xr;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var u={},m;for(m in o)u[m]=n[m];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),u}function Vn(e){return e=e.childContextTypes,e!=null}function $s(){on(Un),on(Pn)}function bu(e,n,o){if(Pn.current!==xr)throw Error(r(168));nn(Pn,n),nn(Un,o)}function $u(e,n,o){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in n))throw Error(r(108,Me(e)||"Unknown",u));return de({},o,l)}function _s(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xr,Gr=Pn.current,nn(Pn,e),nn(Un,Un.current),!0}function _u(e,n,o){var l=e.stateNode;if(!l)throw Error(r(169));o?(e=$u(e,n,Gr),l.__reactInternalMemoizedMergedChildContext=e,on(Un),on(Pn),nn(Pn,e)):on(Un),nn(Un,o)}var Kt=null,ks=!1,x0=!1;function ku(e){Kt===null?Kt=[e]:Kt.push(e)}function vf(e){ks=!0,ku(e)}function wr(){if(!x0&&Kt!==null){x0=!0;var e=0,n=Xe;try{var o=Kt;for(Xe=1;e<o.length;e++){var l=o[e];do l=l(!0);while(l!==null)}Kt=null,ks=!1}catch(u){throw Kt!==null&&(Kt=Kt.slice(e+1)),ns(eo,wr),u}finally{Xe=n,x0=!1}}return null}var $i=[],_i=0,zs=null,Ss=0,ct=[],ut=0,Ur=null,Zt=1,Qt="";function Vr(e,n){$i[_i++]=Ss,$i[_i++]=zs,zs=e,Ss=n}function zu(e,n,o){ct[ut++]=Zt,ct[ut++]=Qt,ct[ut++]=Ur,Ur=e;var l=Zt;e=Qt;var u=32-_t(l)-1;l&=~(1<<u),o+=1;var m=32-_t(n)+u;if(30<m){var b=u-u%5;m=(l&(1<<b)-1).toString(32),l>>=b,u-=b,Zt=1<<32-_t(n)+u|o<<u|l,Qt=m+e}else Zt=1<<m|o<<u|l,Qt=e}function w0(e){e.return!==null&&(Vr(e,1),zu(e,1,0))}function b0(e){for(;e===zs;)zs=$i[--_i],$i[_i]=null,Ss=$i[--_i],$i[_i]=null;for(;e===Ur;)Ur=ct[--ut],ct[ut]=null,Qt=ct[--ut],ct[ut]=null,Zt=ct[--ut],ct[ut]=null}var rt=null,it=null,an=!1,zt=null;function Su(e,n){var o=ft(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=e,n=e.deletions,n===null?(e.deletions=[o],e.flags|=16):n.push(o)}function ju(e,n){switch(e.tag){case 5:var o=e.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,rt=e,it=yr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,rt=e,it=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=Ur!==null?{id:Zt,overflow:Qt}:null,e.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=ft(18,null,null,0),o.stateNode=n,o.return=e,e.child=o,rt=e,it=null,!0):!1;default:return!1}}function $0(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _0(e){if(an){var n=it;if(n){var o=n;if(!ju(e,n)){if($0(e))throw Error(r(418));n=yr(o.nextSibling);var l=rt;n&&ju(e,n)?Su(l,o):(e.flags=e.flags&-4097|2,an=!1,rt=e)}}else{if($0(e))throw Error(r(418));e.flags=e.flags&-4097|2,an=!1,rt=e}}}function qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function js(e){if(e!==rt)return!1;if(!an)return qu(e),an=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!f0(e.type,e.memoizedProps)),n&&(n=it)){if($0(e))throw Tu(),Error(r(418));for(;n;)Su(e,n),n=yr(n.nextSibling)}if(qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(n===0){it=yr(e.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}e=e.nextSibling}it=null}}else it=rt?yr(e.stateNode.nextSibling):null;return!0}function Tu(){for(var e=it;e;)e=yr(e.nextSibling)}function ki(){it=rt=null,an=!1}function k0(e){zt===null?zt=[e]:zt.push(e)}var xf=D.ReactCurrentBatchConfig;function bo(e,n,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(r(309));var l=o.stateNode}if(!l)throw Error(r(147,e));var u=l,m=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===m?n.ref:(n=function(b){var j=u.refs;b===null?delete j[m]:j[m]=b},n._stringRef=m,n)}if(typeof e!="string")throw Error(r(284));if(!o._owner)throw Error(r(290,e))}return e}function qs(e,n){throw e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Au(e){var n=e._init;return n(e._payload)}function Mu(e){function n(H,I){if(e){var U=H.deletions;U===null?(H.deletions=[I],H.flags|=16):U.push(I)}}function o(H,I){if(!e)return null;for(;I!==null;)n(H,I),I=I.sibling;return null}function l(H,I){for(H=new Map;I!==null;)I.key!==null?H.set(I.key,I):H.set(I.index,I),I=I.sibling;return H}function u(H,I){return H=qr(H,I),H.index=0,H.sibling=null,H}function m(H,I,U){return H.index=U,e?(U=H.alternate,U!==null?(U=U.index,U<I?(H.flags|=2,I):U):(H.flags|=2,I)):(H.flags|=1048576,I)}function b(H){return e&&H.alternate===null&&(H.flags|=2),H}function j(H,I,U,pe){return I===null||I.tag!==6?(I=hl(U,H.mode,pe),I.return=H,I):(I=u(I,U),I.return=H,I)}function C(H,I,U,pe){var je=U.type;return je===L?se(H,I,U.props.children,pe,U.key):I!==null&&(I.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ye&&Au(je)===I.type)?(pe=u(I,U.props),pe.ref=bo(H,I,U),pe.return=H,pe):(pe=Xs(U.type,U.key,U.props,null,H.mode,pe),pe.ref=bo(H,I,U),pe.return=H,pe)}function K(H,I,U,pe){return I===null||I.tag!==4||I.stateNode.containerInfo!==U.containerInfo||I.stateNode.implementation!==U.implementation?(I=gl(U,H.mode,pe),I.return=H,I):(I=u(I,U.children||[]),I.return=H,I)}function se(H,I,U,pe,je){return I===null||I.tag!==7?(I=ni(U,H.mode,pe,je),I.return=H,I):(I=u(I,U),I.return=H,I)}function le(H,I,U){if(typeof I=="string"&&I!==""||typeof I=="number")return I=hl(""+I,H.mode,U),I.return=H,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case E:return U=Xs(I.type,I.key,I.props,null,H.mode,U),U.ref=bo(H,null,I),U.return=H,U;case W:return I=gl(I,H.mode,U),I.return=H,I;case ye:var pe=I._init;return le(H,pe(I._payload),U)}if(lt(I)||me(I))return I=ni(I,H.mode,U,null),I.return=H,I;qs(H,I)}return null}function ie(H,I,U,pe){var je=I!==null?I.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return je!==null?null:j(H,I,""+U,pe);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case E:return U.key===je?C(H,I,U,pe):null;case W:return U.key===je?K(H,I,U,pe):null;case ye:return je=U._init,ie(H,I,je(U._payload),pe)}if(lt(U)||me(U))return je!==null?null:se(H,I,U,pe,null);qs(H,U)}return null}function be(H,I,U,pe,je){if(typeof pe=="string"&&pe!==""||typeof pe=="number")return H=H.get(U)||null,j(I,H,""+pe,je);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case E:return H=H.get(pe.key===null?U:pe.key)||null,C(I,H,pe,je);case W:return H=H.get(pe.key===null?U:pe.key)||null,K(I,H,pe,je);case ye:var Pe=pe._init;return be(H,I,U,Pe(pe._payload),je)}if(lt(pe)||me(pe))return H=H.get(U)||null,se(I,H,pe,je,null);qs(I,pe)}return null}function ze(H,I,U,pe){for(var je=null,Pe=null,Ce=I,Be=I=0,qn=null;Ce!==null&&Be<U.length;Be++){Ce.index>Be?(qn=Ce,Ce=null):qn=Ce.sibling;var Ze=ie(H,Ce,U[Be],pe);if(Ze===null){Ce===null&&(Ce=qn);break}e&&Ce&&Ze.alternate===null&&n(H,Ce),I=m(Ze,I,Be),Pe===null?je=Ze:Pe.sibling=Ze,Pe=Ze,Ce=qn}if(Be===U.length)return o(H,Ce),an&&Vr(H,Be),je;if(Ce===null){for(;Be<U.length;Be++)Ce=le(H,U[Be],pe),Ce!==null&&(I=m(Ce,I,Be),Pe===null?je=Ce:Pe.sibling=Ce,Pe=Ce);return an&&Vr(H,Be),je}for(Ce=l(H,Ce);Be<U.length;Be++)qn=be(Ce,H,Be,U[Be],pe),qn!==null&&(e&&qn.alternate!==null&&Ce.delete(qn.key===null?Be:qn.key),I=m(qn,I,Be),Pe===null?je=qn:Pe.sibling=qn,Pe=qn);return e&&Ce.forEach(function(Tr){return n(H,Tr)}),an&&Vr(H,Be),je}function Se(H,I,U,pe){var je=me(U);if(typeof je!="function")throw Error(r(150));if(U=je.call(U),U==null)throw Error(r(151));for(var Pe=je=null,Ce=I,Be=I=0,qn=null,Ze=U.next();Ce!==null&&!Ze.done;Be++,Ze=U.next()){Ce.index>Be?(qn=Ce,Ce=null):qn=Ce.sibling;var Tr=ie(H,Ce,Ze.value,pe);if(Tr===null){Ce===null&&(Ce=qn);break}e&&Ce&&Tr.alternate===null&&n(H,Ce),I=m(Tr,I,Be),Pe===null?je=Tr:Pe.sibling=Tr,Pe=Tr,Ce=qn}if(Ze.done)return o(H,Ce),an&&Vr(H,Be),je;if(Ce===null){for(;!Ze.done;Be++,Ze=U.next())Ze=le(H,Ze.value,pe),Ze!==null&&(I=m(Ze,I,Be),Pe===null?je=Ze:Pe.sibling=Ze,Pe=Ze);return an&&Vr(H,Be),je}for(Ce=l(H,Ce);!Ze.done;Be++,Ze=U.next())Ze=be(Ce,H,Be,Ze.value,pe),Ze!==null&&(e&&Ze.alternate!==null&&Ce.delete(Ze.key===null?Be:Ze.key),I=m(Ze,I,Be),Pe===null?je=Ze:Pe.sibling=Ze,Pe=Ze);return e&&Ce.forEach(function(Xf){return n(H,Xf)}),an&&Vr(H,Be),je}function gn(H,I,U,pe){if(typeof U=="object"&&U!==null&&U.type===L&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case E:e:{for(var je=U.key,Pe=I;Pe!==null;){if(Pe.key===je){if(je=U.type,je===L){if(Pe.tag===7){o(H,Pe.sibling),I=u(Pe,U.props.children),I.return=H,H=I;break e}}else if(Pe.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ye&&Au(je)===Pe.type){o(H,Pe.sibling),I=u(Pe,U.props),I.ref=bo(H,Pe,U),I.return=H,H=I;break e}o(H,Pe);break}else n(H,Pe);Pe=Pe.sibling}U.type===L?(I=ni(U.props.children,H.mode,pe,U.key),I.return=H,H=I):(pe=Xs(U.type,U.key,U.props,null,H.mode,pe),pe.ref=bo(H,I,U),pe.return=H,H=pe)}return b(H);case W:e:{for(Pe=U.key;I!==null;){if(I.key===Pe)if(I.tag===4&&I.stateNode.containerInfo===U.containerInfo&&I.stateNode.implementation===U.implementation){o(H,I.sibling),I=u(I,U.children||[]),I.return=H,H=I;break e}else{o(H,I);break}else n(H,I);I=I.sibling}I=gl(U,H.mode,pe),I.return=H,H=I}return b(H);case ye:return Pe=U._init,gn(H,I,Pe(U._payload),pe)}if(lt(U))return ze(H,I,U,pe);if(me(U))return Se(H,I,U,pe);qs(H,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,I!==null&&I.tag===6?(o(H,I.sibling),I=u(I,U),I.return=H,H=I):(o(H,I),I=hl(U,H.mode,pe),I.return=H,H=I),b(H)):o(H,I)}return gn}var zi=Mu(!0),Pu=Mu(!1),Ts=vr(null),As=null,Si=null,z0=null;function S0(){z0=Si=As=null}function j0(e){var n=Ts.current;on(Ts),e._currentValue=n}function q0(e,n,o){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===o)break;e=e.return}}function ji(e,n){As=e,z0=Si=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Kn=!0),e.firstContext=null)}function dt(e){var n=e._currentValue;if(z0!==e)if(e={context:e,memoizedValue:n,next:null},Si===null){if(As===null)throw Error(r(308));Si=e,As.dependencies={lanes:0,firstContext:e}}else Si=Si.next=e;return n}var Kr=null;function T0(e){Kr===null?Kr=[e]:Kr.push(e)}function Cu(e,n,o,l){var u=n.interleaved;return u===null?(o.next=o,T0(n)):(o.next=u.next,u.next=o),n.interleaved=o,Yt(e,l)}function Yt(e,n){e.lanes|=n;var o=e.alternate;for(o!==null&&(o.lanes|=n),o=e,e=e.return;e!==null;)e.childLanes|=n,o=e.alternate,o!==null&&(o.childLanes|=n),o=e,e=e.return;return o.tag===3?o.stateNode:null}var br=!1;function A0(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ru(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function $r(e,n,o){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ve&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,Yt(e,o)}return u=l.interleaved,u===null?(n.next=n,T0(l)):(n.next=u.next,u.next=n),l.interleaved=n,Yt(e,o)}function Ms(e,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,o|=l,n.lanes=o,Wa(e,o)}}function Du(e,n){var o=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var b={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?u=m=b:m=m.next=b,o=o.next}while(o!==null);m===null?u=m=n:m=m.next=n}else u=m=n;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:m,shared:l.shared,effects:l.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=n:e.next=n,o.lastBaseUpdate=n}function Ps(e,n,o,l){var u=e.updateQueue;br=!1;var m=u.firstBaseUpdate,b=u.lastBaseUpdate,j=u.shared.pending;if(j!==null){u.shared.pending=null;var C=j,K=C.next;C.next=null,b===null?m=K:b.next=K,b=C;var se=e.alternate;se!==null&&(se=se.updateQueue,j=se.lastBaseUpdate,j!==b&&(j===null?se.firstBaseUpdate=K:j.next=K,se.lastBaseUpdate=C))}if(m!==null){var le=u.baseState;b=0,se=K=C=null,j=m;do{var ie=j.lane,be=j.eventTime;if((l&ie)===ie){se!==null&&(se=se.next={eventTime:be,lane:0,tag:j.tag,payload:j.payload,callback:j.callback,next:null});e:{var ze=e,Se=j;switch(ie=n,be=o,Se.tag){case 1:if(ze=Se.payload,typeof ze=="function"){le=ze.call(be,le,ie);break e}le=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Se.payload,ie=typeof ze=="function"?ze.call(be,le,ie):ze,ie==null)break e;le=de({},le,ie);break e;case 2:br=!0}}j.callback!==null&&j.lane!==0&&(e.flags|=64,ie=u.effects,ie===null?u.effects=[j]:ie.push(j))}else be={eventTime:be,lane:ie,tag:j.tag,payload:j.payload,callback:j.callback,next:null},se===null?(K=se=be,C=le):se=se.next=be,b|=ie;if(j=j.next,j===null){if(j=u.shared.pending,j===null)break;ie=j,j=ie.next,ie.next=null,u.lastBaseUpdate=ie,u.shared.pending=null}}while(!0);if(se===null&&(C=le),u.baseState=C,u.firstBaseUpdate=K,u.lastBaseUpdate=se,n=u.shared.interleaved,n!==null){u=n;do b|=u.lane,u=u.next;while(u!==n)}else m===null&&(u.shared.lanes=0);Yr|=b,e.lanes=b,e.memoizedState=le}}function Eu(e,n,o){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(r(191,u));u.call(l)}}}var $o={},Rt=vr($o),_o=vr($o),ko=vr($o);function Zr(e){if(e===$o)throw Error(r(174));return e}function M0(e,n){switch(nn(ko,n),nn(_o,e),nn(Rt,$o),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ge(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ge(n,e)}on(Rt),nn(Rt,n)}function qi(){on(Rt),on(_o),on(ko)}function Bu(e){Zr(ko.current);var n=Zr(Rt.current),o=Ge(n,e.type);n!==o&&(nn(_o,e),nn(Rt,o))}function P0(e){_o.current===e&&(on(Rt),on(_o))}var cn=vr(0);function Cs(e){for(var n=e;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var C0=[];function R0(){for(var e=0;e<C0.length;e++)C0[e]._workInProgressVersionPrimary=null;C0.length=0}var Rs=D.ReactCurrentDispatcher,D0=D.ReactCurrentBatchConfig,Qr=0,un=null,$n=null,Sn=null,Ds=!1,zo=!1,So=0,wf=0;function Cn(){throw Error(r(321))}function E0(e,n){if(n===null)return!1;for(var o=0;o<n.length&&o<e.length;o++)if(!kt(e[o],n[o]))return!1;return!0}function B0(e,n,o,l,u,m){if(Qr=m,un=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Rs.current=e===null||e.memoizedState===null?kf:zf,e=o(l,u),zo){m=0;do{if(zo=!1,So=0,25<=m)throw Error(r(301));m+=1,Sn=$n=null,n.updateQueue=null,Rs.current=Sf,e=o(l,u)}while(zo)}if(Rs.current=Ns,n=$n!==null&&$n.next!==null,Qr=0,Sn=$n=un=null,Ds=!1,n)throw Error(r(300));return e}function N0(){var e=So!==0;return So=0,e}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?un.memoizedState=Sn=e:Sn=Sn.next=e,Sn}function pt(){if($n===null){var e=un.alternate;e=e!==null?e.memoizedState:null}else e=$n.next;var n=Sn===null?un.memoizedState:Sn.next;if(n!==null)Sn=n,$n=e;else{if(e===null)throw Error(r(310));$n=e,e={memoizedState:$n.memoizedState,baseState:$n.baseState,baseQueue:$n.baseQueue,queue:$n.queue,next:null},Sn===null?un.memoizedState=Sn=e:Sn=Sn.next=e}return Sn}function jo(e,n){return typeof n=="function"?n(e):n}function I0(e){var n=pt(),o=n.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=e;var l=$n,u=l.baseQueue,m=o.pending;if(m!==null){if(u!==null){var b=u.next;u.next=m.next,m.next=b}l.baseQueue=u=m,o.pending=null}if(u!==null){m=u.next,l=l.baseState;var j=b=null,C=null,K=m;do{var se=K.lane;if((Qr&se)===se)C!==null&&(C=C.next={lane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),l=K.hasEagerState?K.eagerState:e(l,K.action);else{var le={lane:se,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null};C===null?(j=C=le,b=l):C=C.next=le,un.lanes|=se,Yr|=se}K=K.next}while(K!==null&&K!==m);C===null?b=l:C.next=j,kt(l,n.memoizedState)||(Kn=!0),n.memoizedState=l,n.baseState=b,n.baseQueue=C,o.lastRenderedState=l}if(e=o.interleaved,e!==null){u=e;do m=u.lane,un.lanes|=m,Yr|=m,u=u.next;while(u!==e)}else u===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function F0(e){var n=pt(),o=n.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=e;var l=o.dispatch,u=o.pending,m=n.memoizedState;if(u!==null){o.pending=null;var b=u=u.next;do m=e(m,b.action),b=b.next;while(b!==u);kt(m,n.memoizedState)||(Kn=!0),n.memoizedState=m,n.baseQueue===null&&(n.baseState=m),o.lastRenderedState=m}return[m,l]}function Nu(){}function Iu(e,n){var o=un,l=pt(),u=n(),m=!kt(l.memoizedState,u);if(m&&(l.memoizedState=u,Kn=!0),l=l.queue,L0(Ou.bind(null,o,l,e),[e]),l.getSnapshot!==n||m||Sn!==null&&Sn.memoizedState.tag&1){if(o.flags|=2048,qo(9,Lu.bind(null,o,l,u,n),void 0,null),jn===null)throw Error(r(349));(Qr&30)!==0||Fu(o,n,u)}return u}function Fu(e,n,o){e.flags|=16384,e={getSnapshot:n,value:o},n=un.updateQueue,n===null?(n={lastEffect:null,stores:null},un.updateQueue=n,n.stores=[e]):(o=n.stores,o===null?n.stores=[e]:o.push(e))}function Lu(e,n,o,l){n.value=o,n.getSnapshot=l,Hu(n)&&Wu(e)}function Ou(e,n,o){return o(function(){Hu(n)&&Wu(e)})}function Hu(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!kt(e,o)}catch{return!0}}function Wu(e){var n=Yt(e,1);n!==null&&Tt(n,e,1,-1)}function Gu(e){var n=Dt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:e},n.queue=e,e=e.dispatch=_f.bind(null,un,e),[n.memoizedState,e]}function qo(e,n,o,l){return e={tag:e,create:n,destroy:o,deps:l,next:null},n=un.updateQueue,n===null?(n={lastEffect:null,stores:null},un.updateQueue=n,n.lastEffect=e.next=e):(o=n.lastEffect,o===null?n.lastEffect=e.next=e:(l=o.next,o.next=e,e.next=l,n.lastEffect=e)),e}function Uu(){return pt().memoizedState}function Es(e,n,o,l){var u=Dt();un.flags|=e,u.memoizedState=qo(1|n,o,void 0,l===void 0?null:l)}function Bs(e,n,o,l){var u=pt();l=l===void 0?null:l;var m=void 0;if($n!==null){var b=$n.memoizedState;if(m=b.destroy,l!==null&&E0(l,b.deps)){u.memoizedState=qo(n,o,m,l);return}}un.flags|=e,u.memoizedState=qo(1|n,o,m,l)}function Vu(e,n){return Es(8390656,8,e,n)}function L0(e,n){return Bs(2048,8,e,n)}function Ku(e,n){return Bs(4,2,e,n)}function Zu(e,n){return Bs(4,4,e,n)}function Qu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Yu(e,n,o){return o=o!=null?o.concat([e]):null,Bs(4,4,Qu.bind(null,n,e),o)}function O0(){}function Xu(e,n){var o=pt();n=n===void 0?null:n;var l=o.memoizedState;return l!==null&&n!==null&&E0(n,l[1])?l[0]:(o.memoizedState=[e,n],e)}function Ju(e,n){var o=pt();n=n===void 0?null:n;var l=o.memoizedState;return l!==null&&n!==null&&E0(n,l[1])?l[0]:(e=e(),o.memoizedState=[e,n],e)}function ed(e,n,o){return(Qr&21)===0?(e.baseState&&(e.baseState=!1,Kn=!0),e.memoizedState=o):(kt(o,n)||(o=Ac(),un.lanes|=o,Yr|=o,e.baseState=!0),n)}function bf(e,n){var o=Xe;Xe=o!==0&&4>o?o:4,e(!0);var l=D0.transition;D0.transition={};try{e(!1),n()}finally{Xe=o,D0.transition=l}}function nd(){return pt().memoizedState}function $f(e,n,o){var l=Sr(e);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},td(e))rd(n,o);else if(o=Cu(e,n,o,l),o!==null){var u=In();Tt(o,e,l,u),id(o,n,l)}}function _f(e,n,o){var l=Sr(e),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(td(e))rd(n,u);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=n.lastRenderedReducer,m!==null))try{var b=n.lastRenderedState,j=m(b,o);if(u.hasEagerState=!0,u.eagerState=j,kt(j,b)){var C=n.interleaved;C===null?(u.next=u,T0(n)):(u.next=C.next,C.next=u),n.interleaved=u;return}}catch{}finally{}o=Cu(e,n,u,l),o!==null&&(u=In(),Tt(o,e,l,u),id(o,n,l))}}function td(e){var n=e.alternate;return e===un||n!==null&&n===un}function rd(e,n){zo=Ds=!0;var o=e.pending;o===null?n.next=n:(n.next=o.next,o.next=n),e.pending=n}function id(e,n,o){if((o&4194240)!==0){var l=n.lanes;l&=e.pendingLanes,o|=l,n.lanes=o,Wa(e,o)}}var Ns={readContext:dt,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},kf={readContext:dt,useCallback:function(e,n){return Dt().memoizedState=[e,n===void 0?null:n],e},useContext:dt,useEffect:Vu,useImperativeHandle:function(e,n,o){return o=o!=null?o.concat([e]):null,Es(4194308,4,Qu.bind(null,n,e),o)},useLayoutEffect:function(e,n){return Es(4194308,4,e,n)},useInsertionEffect:function(e,n){return Es(4,2,e,n)},useMemo:function(e,n){var o=Dt();return n=n===void 0?null:n,e=e(),o.memoizedState=[e,n],e},useReducer:function(e,n,o){var l=Dt();return n=o!==void 0?o(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=$f.bind(null,un,e),[l.memoizedState,e]},useRef:function(e){var n=Dt();return e={current:e},n.memoizedState=e},useState:Gu,useDebugValue:O0,useDeferredValue:function(e){return Dt().memoizedState=e},useTransition:function(){var e=Gu(!1),n=e[0];return e=bf.bind(null,e[1]),Dt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,o){var l=un,u=Dt();if(an){if(o===void 0)throw Error(r(407));o=o()}else{if(o=n(),jn===null)throw Error(r(349));(Qr&30)!==0||Fu(l,n,o)}u.memoizedState=o;var m={value:o,getSnapshot:n};return u.queue=m,Vu(Ou.bind(null,l,m,e),[e]),l.flags|=2048,qo(9,Lu.bind(null,l,m,o,n),void 0,null),o},useId:function(){var e=Dt(),n=jn.identifierPrefix;if(an){var o=Qt,l=Zt;o=(l&~(1<<32-_t(l)-1)).toString(32)+o,n=":"+n+"R"+o,o=So++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=wf++,n=":"+n+"r"+o.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},zf={readContext:dt,useCallback:Xu,useContext:dt,useEffect:L0,useImperativeHandle:Yu,useInsertionEffect:Ku,useLayoutEffect:Zu,useMemo:Ju,useReducer:I0,useRef:Uu,useState:function(){return I0(jo)},useDebugValue:O0,useDeferredValue:function(e){var n=pt();return ed(n,$n.memoizedState,e)},useTransition:function(){var e=I0(jo)[0],n=pt().memoizedState;return[e,n]},useMutableSource:Nu,useSyncExternalStore:Iu,useId:nd,unstable_isNewReconciler:!1},Sf={readContext:dt,useCallback:Xu,useContext:dt,useEffect:L0,useImperativeHandle:Yu,useInsertionEffect:Ku,useLayoutEffect:Zu,useMemo:Ju,useReducer:F0,useRef:Uu,useState:function(){return F0(jo)},useDebugValue:O0,useDeferredValue:function(e){var n=pt();return $n===null?n.memoizedState=e:ed(n,$n.memoizedState,e)},useTransition:function(){var e=F0(jo)[0],n=pt().memoizedState;return[e,n]},useMutableSource:Nu,useSyncExternalStore:Iu,useId:nd,unstable_isNewReconciler:!1};function St(e,n){if(e&&e.defaultProps){n=de({},n),e=e.defaultProps;for(var o in e)n[o]===void 0&&(n[o]=e[o]);return n}return n}function H0(e,n,o,l){n=e.memoizedState,o=o(l,n),o=o==null?n:de({},n,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var Is={isMounted:function(e){return(e=e._reactInternals)?Ut(e)===e:!1},enqueueSetState:function(e,n,o){e=e._reactInternals;var l=In(),u=Sr(e),m=Xt(l,u);m.payload=n,o!=null&&(m.callback=o),n=$r(e,m,u),n!==null&&(Tt(n,e,u,l),Ms(n,e,u))},enqueueReplaceState:function(e,n,o){e=e._reactInternals;var l=In(),u=Sr(e),m=Xt(l,u);m.tag=1,m.payload=n,o!=null&&(m.callback=o),n=$r(e,m,u),n!==null&&(Tt(n,e,u,l),Ms(n,e,u))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var o=In(),l=Sr(e),u=Xt(o,l);u.tag=2,n!=null&&(u.callback=n),n=$r(e,u,l),n!==null&&(Tt(n,e,l,o),Ms(n,e,l))}};function od(e,n,o,l,u,m,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,b):n.prototype&&n.prototype.isPureReactComponent?!fo(o,l)||!fo(u,m):!0}function sd(e,n,o){var l=!1,u=xr,m=n.contextType;return typeof m=="object"&&m!==null?m=dt(m):(u=Vn(n)?Gr:Pn.current,l=n.contextTypes,m=(l=l!=null)?bi(e,u):xr),n=new n(o,m),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Is,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=m),n}function ad(e,n,o,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,l),n.state!==e&&Is.enqueueReplaceState(n,n.state,null)}function W0(e,n,o,l){var u=e.stateNode;u.props=o,u.state=e.memoizedState,u.refs={},A0(e);var m=n.contextType;typeof m=="object"&&m!==null?u.context=dt(m):(m=Vn(n)?Gr:Pn.current,u.context=bi(e,m)),u.state=e.memoizedState,m=n.getDerivedStateFromProps,typeof m=="function"&&(H0(e,n,m,o),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&Is.enqueueReplaceState(u,u.state,null),Ps(e,o,u,l),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Ti(e,n){try{var o="",l=n;do o+=Te(l),l=l.return;while(l);var u=o}catch(m){u=`
Error generating stack: `+m.message+`
`+m.stack}return{value:e,source:n,stack:u,digest:null}}function G0(e,n,o){return{value:e,source:null,stack:o??null,digest:n??null}}function U0(e,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var jf=typeof WeakMap=="function"?WeakMap:Map;function ld(e,n,o){o=Xt(-1,o),o.tag=3,o.payload={element:null};var l=n.value;return o.callback=function(){Us||(Us=!0,al=l),U0(e,n)},o}function cd(e,n,o){o=Xt(-1,o),o.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var u=n.value;o.payload=function(){return l(u)},o.callback=function(){U0(e,n)}}var m=e.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){U0(e,n),typeof l!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var b=n.stack;this.componentDidCatch(n.value,{componentStack:b!==null?b:""})}),o}function ud(e,n,o){var l=e.pingCache;if(l===null){l=e.pingCache=new jf;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(o)||(u.add(o),e=Lf.bind(null,e,n,o),n.then(e,e))}function dd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function pd(e,n,o,l,u){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=Xt(-1,1),n.tag=2,$r(o,n,1))),o.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var qf=D.ReactCurrentOwner,Kn=!1;function Nn(e,n,o,l){n.child=e===null?Pu(n,null,o,l):zi(n,e.child,o,l)}function md(e,n,o,l,u){o=o.render;var m=n.ref;return ji(n,u),l=B0(e,n,o,l,m,u),o=N0(),e!==null&&!Kn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,Jt(e,n,u)):(an&&o&&w0(n),n.flags|=1,Nn(e,n,l,u),n.child)}function fd(e,n,o,l,u){if(e===null){var m=o.type;return typeof m=="function"&&!fl(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=m,hd(e,n,m,l,u)):(e=Xs(o.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(m=e.child,(e.lanes&u)===0){var b=m.memoizedProps;if(o=o.compare,o=o!==null?o:fo,o(b,l)&&e.ref===n.ref)return Jt(e,n,u)}return n.flags|=1,e=qr(m,l),e.ref=n.ref,e.return=n,n.child=e}function hd(e,n,o,l,u){if(e!==null){var m=e.memoizedProps;if(fo(m,l)&&e.ref===n.ref)if(Kn=!1,n.pendingProps=l=m,(e.lanes&u)!==0)(e.flags&131072)!==0&&(Kn=!0);else return n.lanes=e.lanes,Jt(e,n,u)}return V0(e,n,o,l,u)}function gd(e,n,o){var l=n.pendingProps,u=l.children,m=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},nn(Mi,ot),ot|=o;else{if((o&1073741824)===0)return e=m!==null?m.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,nn(Mi,ot),ot|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=m!==null?m.baseLanes:o,nn(Mi,ot),ot|=l}else m!==null?(l=m.baseLanes|o,n.memoizedState=null):l=o,nn(Mi,ot),ot|=l;return Nn(e,n,u,o),n.child}function yd(e,n){var o=n.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function V0(e,n,o,l,u){var m=Vn(o)?Gr:Pn.current;return m=bi(n,m),ji(n,u),o=B0(e,n,o,l,m,u),l=N0(),e!==null&&!Kn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,Jt(e,n,u)):(an&&l&&w0(n),n.flags|=1,Nn(e,n,o,u),n.child)}function vd(e,n,o,l,u){if(Vn(o)){var m=!0;_s(n)}else m=!1;if(ji(n,u),n.stateNode===null)Ls(e,n),sd(n,o,l),W0(n,o,l,u),l=!0;else if(e===null){var b=n.stateNode,j=n.memoizedProps;b.props=j;var C=b.context,K=o.contextType;typeof K=="object"&&K!==null?K=dt(K):(K=Vn(o)?Gr:Pn.current,K=bi(n,K));var se=o.getDerivedStateFromProps,le=typeof se=="function"||typeof b.getSnapshotBeforeUpdate=="function";le||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(j!==l||C!==K)&&ad(n,b,l,K),br=!1;var ie=n.memoizedState;b.state=ie,Ps(n,l,b,u),C=n.memoizedState,j!==l||ie!==C||Un.current||br?(typeof se=="function"&&(H0(n,o,se,l),C=n.memoizedState),(j=br||od(n,o,j,l,ie,C,K))?(le||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(n.flags|=4194308)):(typeof b.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=C),b.props=l,b.state=C,b.context=K,l=j):(typeof b.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{b=n.stateNode,Ru(e,n),j=n.memoizedProps,K=n.type===n.elementType?j:St(n.type,j),b.props=K,le=n.pendingProps,ie=b.context,C=o.contextType,typeof C=="object"&&C!==null?C=dt(C):(C=Vn(o)?Gr:Pn.current,C=bi(n,C));var be=o.getDerivedStateFromProps;(se=typeof be=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(j!==le||ie!==C)&&ad(n,b,l,C),br=!1,ie=n.memoizedState,b.state=ie,Ps(n,l,b,u);var ze=n.memoizedState;j!==le||ie!==ze||Un.current||br?(typeof be=="function"&&(H0(n,o,be,l),ze=n.memoizedState),(K=br||od(n,o,K,l,ie,ze,C)||!1)?(se||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(l,ze,C),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(l,ze,C)),typeof b.componentDidUpdate=="function"&&(n.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof b.componentDidUpdate!="function"||j===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||j===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=ze),b.props=l,b.state=ze,b.context=C,l=K):(typeof b.componentDidUpdate!="function"||j===e.memoizedProps&&ie===e.memoizedState||(n.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||j===e.memoizedProps&&ie===e.memoizedState||(n.flags|=1024),l=!1)}return K0(e,n,o,l,m,u)}function K0(e,n,o,l,u,m){yd(e,n);var b=(n.flags&128)!==0;if(!l&&!b)return u&&_u(n,o,!1),Jt(e,n,m);l=n.stateNode,qf.current=n;var j=b&&typeof o.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&b?(n.child=zi(n,e.child,null,m),n.child=zi(n,null,j,m)):Nn(e,n,j,m),n.memoizedState=l.state,u&&_u(n,o,!0),n.child}function xd(e){var n=e.stateNode;n.pendingContext?bu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&bu(e,n.context,!1),M0(e,n.containerInfo)}function wd(e,n,o,l,u){return ki(),k0(u),n.flags|=256,Nn(e,n,o,l),n.child}var Z0={dehydrated:null,treeContext:null,retryLane:0};function Q0(e){return{baseLanes:e,cachePool:null,transitions:null}}function bd(e,n,o){var l=n.pendingProps,u=cn.current,m=!1,b=(n.flags&128)!==0,j;if((j=b)||(j=e!==null&&e.memoizedState===null?!1:(u&2)!==0),j?(m=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),nn(cn,u&1),e===null)return _0(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(b=l.children,e=l.fallback,m?(l=n.mode,m=n.child,b={mode:"hidden",children:b},(l&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=b):m=Js(b,l,0,null),e=ni(e,l,o,null),m.return=n,e.return=n,m.sibling=e,n.child=m,n.child.memoizedState=Q0(o),n.memoizedState=Z0,e):Y0(n,b));if(u=e.memoizedState,u!==null&&(j=u.dehydrated,j!==null))return Tf(e,n,b,l,j,u,o);if(m){m=l.fallback,b=n.mode,u=e.child,j=u.sibling;var C={mode:"hidden",children:l.children};return(b&1)===0&&n.child!==u?(l=n.child,l.childLanes=0,l.pendingProps=C,n.deletions=null):(l=qr(u,C),l.subtreeFlags=u.subtreeFlags&14680064),j!==null?m=qr(j,m):(m=ni(m,b,o,null),m.flags|=2),m.return=n,l.return=n,l.sibling=m,n.child=l,l=m,m=n.child,b=e.child.memoizedState,b=b===null?Q0(o):{baseLanes:b.baseLanes|o,cachePool:null,transitions:b.transitions},m.memoizedState=b,m.childLanes=e.childLanes&~o,n.memoizedState=Z0,l}return m=e.child,e=m.sibling,l=qr(m,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=o),l.return=n,l.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=l,n.memoizedState=null,l}function Y0(e,n){return n=Js({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Fs(e,n,o,l){return l!==null&&k0(l),zi(n,e.child,null,o),e=Y0(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Tf(e,n,o,l,u,m,b){if(o)return n.flags&256?(n.flags&=-257,l=G0(Error(r(422))),Fs(e,n,b,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(m=l.fallback,u=n.mode,l=Js({mode:"visible",children:l.children},u,0,null),m=ni(m,u,b,null),m.flags|=2,l.return=n,m.return=n,l.sibling=m,n.child=l,(n.mode&1)!==0&&zi(n,e.child,null,b),n.child.memoizedState=Q0(b),n.memoizedState=Z0,m);if((n.mode&1)===0)return Fs(e,n,b,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var j=l.dgst;return l=j,m=Error(r(419)),l=G0(m,l,void 0),Fs(e,n,b,l)}if(j=(b&e.childLanes)!==0,Kn||j){if(l=jn,l!==null){switch(b&-b){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|b))!==0?0:u,u!==0&&u!==m.retryLane&&(m.retryLane=u,Yt(e,u),Tt(l,e,u,-1))}return ml(),l=G0(Error(r(421))),Fs(e,n,b,l)}return u.data==="$?"?(n.flags|=128,n.child=e.child,n=Of.bind(null,e),u._reactRetry=n,null):(e=m.treeContext,it=yr(u.nextSibling),rt=n,an=!0,zt=null,e!==null&&(ct[ut++]=Zt,ct[ut++]=Qt,ct[ut++]=Ur,Zt=e.id,Qt=e.overflow,Ur=n),n=Y0(n,l.children),n.flags|=4096,n)}function $d(e,n,o){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),q0(e.return,n,o)}function X0(e,n,o,l,u){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=o,m.tailMode=u)}function _d(e,n,o){var l=n.pendingProps,u=l.revealOrder,m=l.tail;if(Nn(e,n,l.children,o),l=cn.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$d(e,o,n);else if(e.tag===19)$d(e,o,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(nn(cn,l),(n.mode&1)===0)n.memoizedState=null;else switch(u){case"forwards":for(o=n.child,u=null;o!==null;)e=o.alternate,e!==null&&Cs(e)===null&&(u=o),o=o.sibling;o=u,o===null?(u=n.child,n.child=null):(u=o.sibling,o.sibling=null),X0(n,!1,u,o,m);break;case"backwards":for(o=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Cs(e)===null){n.child=u;break}e=u.sibling,u.sibling=o,o=u,u=e}X0(n,!0,o,null,m);break;case"together":X0(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ls(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Jt(e,n,o){if(e!==null&&(n.dependencies=e.dependencies),Yr|=n.lanes,(o&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,o=qr(e,e.pendingProps),n.child=o,o.return=n;e.sibling!==null;)e=e.sibling,o=o.sibling=qr(e,e.pendingProps),o.return=n;o.sibling=null}return n.child}function Af(e,n,o){switch(n.tag){case 3:xd(n),ki();break;case 5:Bu(n);break;case 1:Vn(n.type)&&_s(n);break;case 4:M0(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,u=n.memoizedProps.value;nn(Ts,l._currentValue),l._currentValue=u;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(nn(cn,cn.current&1),n.flags|=128,null):(o&n.child.childLanes)!==0?bd(e,n,o):(nn(cn,cn.current&1),e=Jt(e,n,o),e!==null?e.sibling:null);nn(cn,cn.current&1);break;case 19:if(l=(o&n.childLanes)!==0,(e.flags&128)!==0){if(l)return _d(e,n,o);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),nn(cn,cn.current),l)break;return null;case 22:case 23:return n.lanes=0,gd(e,n,o)}return Jt(e,n,o)}var kd,J0,zd,Sd;kd=function(e,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},J0=function(){},zd=function(e,n,o,l){var u=e.memoizedProps;if(u!==l){e=n.stateNode,Zr(Rt.current);var m=null;switch(o){case"input":u=De(e,u),l=De(e,l),m=[];break;case"select":u=de({},u,{value:void 0}),l=de({},l,{value:void 0}),m=[];break;case"textarea":u=si(e,u),l=si(e,l),m=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=ws)}Ki(o,l);var b;o=null;for(K in u)if(!l.hasOwnProperty(K)&&u.hasOwnProperty(K)&&u[K]!=null)if(K==="style"){var j=u[K];for(b in j)j.hasOwnProperty(b)&&(o||(o={}),o[b]="")}else K!=="dangerouslySetInnerHTML"&&K!=="children"&&K!=="suppressContentEditableWarning"&&K!=="suppressHydrationWarning"&&K!=="autoFocus"&&(a.hasOwnProperty(K)?m||(m=[]):(m=m||[]).push(K,null));for(K in l){var C=l[K];if(j=u!=null?u[K]:void 0,l.hasOwnProperty(K)&&C!==j&&(C!=null||j!=null))if(K==="style")if(j){for(b in j)!j.hasOwnProperty(b)||C&&C.hasOwnProperty(b)||(o||(o={}),o[b]="");for(b in C)C.hasOwnProperty(b)&&j[b]!==C[b]&&(o||(o={}),o[b]=C[b])}else o||(m||(m=[]),m.push(K,o)),o=C;else K==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,j=j?j.__html:void 0,C!=null&&j!==C&&(m=m||[]).push(K,C)):K==="children"?typeof C!="string"&&typeof C!="number"||(m=m||[]).push(K,""+C):K!=="suppressContentEditableWarning"&&K!=="suppressHydrationWarning"&&(a.hasOwnProperty(K)?(C!=null&&K==="onScroll"&&rn("scroll",e),m||j===C||(m=[])):(m=m||[]).push(K,C))}o&&(m=m||[]).push("style",o);var K=m;(n.updateQueue=K)&&(n.flags|=4)}},Sd=function(e,n,o,l){o!==l&&(n.flags|=4)};function To(e,n){if(!an)switch(e.tailMode){case"hidden":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Rn(e){var n=e.alternate!==null&&e.alternate.child===e.child,o=0,l=0;if(n)for(var u=e.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=o,n}function Mf(e,n,o){var l=n.pendingProps;switch(b0(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(n),null;case 1:return Vn(n.type)&&$s(),Rn(n),null;case 3:return l=n.stateNode,qi(),on(Un),on(Pn),R0(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(js(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zt!==null&&(ul(zt),zt=null))),J0(e,n),Rn(n),null;case 5:P0(n);var u=Zr(ko.current);if(o=n.type,e!==null&&n.stateNode!=null)zd(e,n,o,l,u),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(r(166));return Rn(n),null}if(e=Zr(Rt.current),js(n)){l=n.stateNode,o=n.type;var m=n.memoizedProps;switch(l[Ct]=n,l[xo]=m,e=(n.mode&1)!==0,o){case"dialog":rn("cancel",l),rn("close",l);break;case"iframe":case"object":case"embed":rn("load",l);break;case"video":case"audio":for(u=0;u<go.length;u++)rn(go[u],l);break;case"source":rn("error",l);break;case"img":case"image":case"link":rn("error",l),rn("load",l);break;case"details":rn("toggle",l);break;case"input":sn(l,m),rn("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!m.multiple},rn("invalid",l);break;case"textarea":Hi(l,m),rn("invalid",l)}Ki(o,m),u=null;for(var b in m)if(m.hasOwnProperty(b)){var j=m[b];b==="children"?typeof j=="string"?l.textContent!==j&&(m.suppressHydrationWarning!==!0&&xs(l.textContent,j,e),u=["children",j]):typeof j=="number"&&l.textContent!==""+j&&(m.suppressHydrationWarning!==!0&&xs(l.textContent,j,e),u=["children",""+j]):a.hasOwnProperty(b)&&j!=null&&b==="onScroll"&&rn("scroll",l)}switch(o){case"input":bn(l),et(l,m,!0);break;case"textarea":bn(l),Gi(l);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(l.onclick=ws)}l=u,n.updateQueue=l,l!==null&&(n.flags|=4)}else{b=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ui(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=b.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=b.createElement(o,{is:l.is}):(e=b.createElement(o),o==="select"&&(b=e,l.multiple?b.multiple=!0:l.size&&(b.size=l.size))):e=b.createElementNS(e,o),e[Ct]=n,e[xo]=l,kd(e,n,!1,!1),n.stateNode=e;e:{switch(b=Zi(o,l),o){case"dialog":rn("cancel",e),rn("close",e),u=l;break;case"iframe":case"object":case"embed":rn("load",e),u=l;break;case"video":case"audio":for(u=0;u<go.length;u++)rn(go[u],e);u=l;break;case"source":rn("error",e),u=l;break;case"img":case"image":case"link":rn("error",e),rn("load",e),u=l;break;case"details":rn("toggle",e),u=l;break;case"input":sn(e,l),u=De(e,l),rn("invalid",e);break;case"option":u=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},u=de({},l,{value:void 0}),rn("invalid",e);break;case"textarea":Hi(e,l),u=si(e,l),rn("invalid",e);break;default:u=l}Ki(o,u),j=u;for(m in j)if(j.hasOwnProperty(m)){var C=j[m];m==="style"?Ko(e,C):m==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&mn(e,C)):m==="children"?typeof C=="string"?(o!=="textarea"||C!=="")&&wt(e,C):typeof C=="number"&&wt(e,""+C):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?C!=null&&m==="onScroll"&&rn("scroll",e):C!=null&&O(e,m,C,b))}switch(o){case"input":bn(e),et(e,l,!1);break;case"textarea":bn(e),Gi(e);break;case"option":l.value!=null&&e.setAttribute("value",""+ve(l.value));break;case"select":e.multiple=!!l.multiple,m=l.value,m!=null?nt(e,!!l.multiple,m,!1):l.defaultValue!=null&&nt(e,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=ws)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Rn(n),null;case 6:if(e&&n.stateNode!=null)Sd(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(o=Zr(ko.current),Zr(Rt.current),js(n)){if(l=n.stateNode,o=n.memoizedProps,l[Ct]=n,(m=l.nodeValue!==o)&&(e=rt,e!==null))switch(e.tag){case 3:xs(l.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xs(l.nodeValue,o,(e.mode&1)!==0)}m&&(n.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[Ct]=n,n.stateNode=l}return Rn(n),null;case 13:if(on(cn),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(an&&it!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Tu(),ki(),n.flags|=98560,m=!1;else if(m=js(n),l!==null&&l.dehydrated!==null){if(e===null){if(!m)throw Error(r(318));if(m=n.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(r(317));m[Ct]=n}else ki(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Rn(n),m=!1}else zt!==null&&(ul(zt),zt=null),m=!0;if(!m)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=o,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(cn.current&1)!==0?_n===0&&(_n=3):ml())),n.updateQueue!==null&&(n.flags|=4),Rn(n),null);case 4:return qi(),J0(e,n),e===null&&yo(n.stateNode.containerInfo),Rn(n),null;case 10:return j0(n.type._context),Rn(n),null;case 17:return Vn(n.type)&&$s(),Rn(n),null;case 19:if(on(cn),m=n.memoizedState,m===null)return Rn(n),null;if(l=(n.flags&128)!==0,b=m.rendering,b===null)if(l)To(m,!1);else{if(_n!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(b=Cs(e),b!==null){for(n.flags|=128,To(m,!1),l=b.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=o,o=n.child;o!==null;)m=o,e=l,m.flags&=14680066,b=m.alternate,b===null?(m.childLanes=0,m.lanes=e,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=b.childLanes,m.lanes=b.lanes,m.child=b.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=b.memoizedProps,m.memoizedState=b.memoizedState,m.updateQueue=b.updateQueue,m.type=b.type,e=b.dependencies,m.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return nn(cn,cn.current&1|2),n.child}e=e.sibling}m.tail!==null&&en()>Pi&&(n.flags|=128,l=!0,To(m,!1),n.lanes=4194304)}else{if(!l)if(e=Cs(b),e!==null){if(n.flags|=128,l=!0,o=e.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),To(m,!0),m.tail===null&&m.tailMode==="hidden"&&!b.alternate&&!an)return Rn(n),null}else 2*en()-m.renderingStartTime>Pi&&o!==1073741824&&(n.flags|=128,l=!0,To(m,!1),n.lanes=4194304);m.isBackwards?(b.sibling=n.child,n.child=b):(o=m.last,o!==null?o.sibling=b:n.child=b,m.last=b)}return m.tail!==null?(n=m.tail,m.rendering=n,m.tail=n.sibling,m.renderingStartTime=en(),n.sibling=null,o=cn.current,nn(cn,l?o&1|2:o&1),n):(Rn(n),null);case 22:case 23:return pl(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(ot&1073741824)!==0&&(Rn(n),n.subtreeFlags&6&&(n.flags|=8192)):Rn(n),null;case 24:return null;case 25:return null}throw Error(r(156,n.tag))}function Pf(e,n){switch(b0(n),n.tag){case 1:return Vn(n.type)&&$s(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return qi(),on(Un),on(Pn),R0(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return P0(n),null;case 13:if(on(cn),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ki()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return on(cn),null;case 4:return qi(),null;case 10:return j0(n.type._context),null;case 22:case 23:return pl(),null;case 24:return null;default:return null}}var Os=!1,Dn=!1,Cf=typeof WeakSet=="function"?WeakSet:Set,ke=null;function Ai(e,n){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){fn(e,n,l)}else o.current=null}function el(e,n,o){try{o()}catch(l){fn(e,n,l)}}var jd=!1;function Rf(e,n){if(p0=ls,e=ou(),i0(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var b=0,j=-1,C=-1,K=0,se=0,le=e,ie=null;n:for(;;){for(var be;le!==o||u!==0&&le.nodeType!==3||(j=b+u),le!==m||l!==0&&le.nodeType!==3||(C=b+l),le.nodeType===3&&(b+=le.nodeValue.length),(be=le.firstChild)!==null;)ie=le,le=be;for(;;){if(le===e)break n;if(ie===o&&++K===u&&(j=b),ie===m&&++se===l&&(C=b),(be=le.nextSibling)!==null)break;le=ie,ie=le.parentNode}le=be}o=j===-1||C===-1?null:{start:j,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(m0={focusedElem:e,selectionRange:o},ls=!1,ke=n;ke!==null;)if(n=ke,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,ke=e;else for(;ke!==null;){n=ke;try{var ze=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Se=ze.memoizedProps,gn=ze.memoizedState,H=n.stateNode,I=H.getSnapshotBeforeUpdate(n.elementType===n.type?Se:St(n.type,Se),gn);H.__reactInternalSnapshotBeforeUpdate=I}break;case 3:var U=n.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(pe){fn(n,n.return,pe)}if(e=n.sibling,e!==null){e.return=n.return,ke=e;break}ke=n.return}return ze=jd,jd=!1,ze}function Ao(e,n,o){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&e)===e){var m=u.destroy;u.destroy=void 0,m!==void 0&&el(n,o,m)}u=u.next}while(u!==l)}}function Hs(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var l=o.create;o.destroy=l()}o=o.next}while(o!==n)}}function nl(e){var n=e.ref;if(n!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof n=="function"?n(e):n.current=e}}function qd(e){var n=e.alternate;n!==null&&(e.alternate=null,qd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ct],delete n[xo],delete n[y0],delete n[gf],delete n[yf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Td(e){return e.tag===5||e.tag===3||e.tag===4}function Ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Td(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,n,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(e,n):o.insertBefore(e,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(e,o)):(n=o,n.appendChild(e)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=ws));else if(l!==4&&(e=e.child,e!==null))for(tl(e,n,o),e=e.sibling;e!==null;)tl(e,n,o),e=e.sibling}function rl(e,n,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?o.insertBefore(e,n):o.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(rl(e,n,o),e=e.sibling;e!==null;)rl(e,n,o),e=e.sibling}var Tn=null,jt=!1;function _r(e,n,o){for(o=o.child;o!==null;)Md(e,n,o),o=o.sibling}function Md(e,n,o){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(We,o)}catch{}switch(o.tag){case 5:Dn||Ai(o,n);case 6:var l=Tn,u=jt;Tn=null,_r(e,n,o),Tn=l,jt=u,Tn!==null&&(jt?(e=Tn,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):Tn.removeChild(o.stateNode));break;case 18:Tn!==null&&(jt?(e=Tn,o=o.stateNode,e.nodeType===8?g0(e.parentNode,o):e.nodeType===1&&g0(e,o),ao(e)):g0(Tn,o.stateNode));break;case 4:l=Tn,u=jt,Tn=o.stateNode.containerInfo,jt=!0,_r(e,n,o),Tn=l,jt=u;break;case 0:case 11:case 14:case 15:if(!Dn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var m=u,b=m.destroy;m=m.tag,b!==void 0&&((m&2)!==0||(m&4)!==0)&&el(o,n,b),u=u.next}while(u!==l)}_r(e,n,o);break;case 1:if(!Dn&&(Ai(o,n),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(j){fn(o,n,j)}_r(e,n,o);break;case 21:_r(e,n,o);break;case 22:o.mode&1?(Dn=(l=Dn)||o.memoizedState!==null,_r(e,n,o),Dn=l):_r(e,n,o);break;default:_r(e,n,o)}}function Pd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new Cf),n.forEach(function(l){var u=Hf.bind(null,e,l);o.has(l)||(o.add(l),l.then(u,u))})}}function qt(e,n){var o=n.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var m=e,b=n,j=b;e:for(;j!==null;){switch(j.tag){case 5:Tn=j.stateNode,jt=!1;break e;case 3:Tn=j.stateNode.containerInfo,jt=!0;break e;case 4:Tn=j.stateNode.containerInfo,jt=!0;break e}j=j.return}if(Tn===null)throw Error(r(160));Md(m,b,u),Tn=null,jt=!1;var C=u.alternate;C!==null&&(C.return=null),u.return=null}catch(K){fn(u,n,K)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Cd(n,e),n=n.sibling}function Cd(e,n){var o=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qt(n,e),Et(e),l&4){try{Ao(3,e,e.return),Hs(3,e)}catch(Se){fn(e,e.return,Se)}try{Ao(5,e,e.return)}catch(Se){fn(e,e.return,Se)}}break;case 1:qt(n,e),Et(e),l&512&&o!==null&&Ai(o,o.return);break;case 5:if(qt(n,e),Et(e),l&512&&o!==null&&Ai(o,o.return),e.flags&32){var u=e.stateNode;try{wt(u,"")}catch(Se){fn(e,e.return,Se)}}if(l&4&&(u=e.stateNode,u!=null)){var m=e.memoizedProps,b=o!==null?o.memoizedProps:m,j=e.type,C=e.updateQueue;if(e.updateQueue=null,C!==null)try{j==="input"&&m.type==="radio"&&m.name!=null&&Ne(u,m),Zi(j,b);var K=Zi(j,m);for(b=0;b<C.length;b+=2){var se=C[b],le=C[b+1];se==="style"?Ko(u,le):se==="dangerouslySetInnerHTML"?mn(u,le):se==="children"?wt(u,le):O(u,se,le,K)}switch(j){case"input":zn(u,m);break;case"textarea":Wi(u,m);break;case"select":var ie=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!m.multiple;var be=m.value;be!=null?nt(u,!!m.multiple,be,!1):ie!==!!m.multiple&&(m.defaultValue!=null?nt(u,!!m.multiple,m.defaultValue,!0):nt(u,!!m.multiple,m.multiple?[]:"",!1))}u[xo]=m}catch(Se){fn(e,e.return,Se)}}break;case 6:if(qt(n,e),Et(e),l&4){if(e.stateNode===null)throw Error(r(162));u=e.stateNode,m=e.memoizedProps;try{u.nodeValue=m}catch(Se){fn(e,e.return,Se)}}break;case 3:if(qt(n,e),Et(e),l&4&&o!==null&&o.memoizedState.isDehydrated)try{ao(n.containerInfo)}catch(Se){fn(e,e.return,Se)}break;case 4:qt(n,e),Et(e);break;case 13:qt(n,e),Et(e),u=e.child,u.flags&8192&&(m=u.memoizedState!==null,u.stateNode.isHidden=m,!m||u.alternate!==null&&u.alternate.memoizedState!==null||(sl=en())),l&4&&Pd(e);break;case 22:if(se=o!==null&&o.memoizedState!==null,e.mode&1?(Dn=(K=Dn)||se,qt(n,e),Dn=K):qt(n,e),Et(e),l&8192){if(K=e.memoizedState!==null,(e.stateNode.isHidden=K)&&!se&&(e.mode&1)!==0)for(ke=e,se=e.child;se!==null;){for(le=ke=se;ke!==null;){switch(ie=ke,be=ie.child,ie.tag){case 0:case 11:case 14:case 15:Ao(4,ie,ie.return);break;case 1:Ai(ie,ie.return);var ze=ie.stateNode;if(typeof ze.componentWillUnmount=="function"){l=ie,o=ie.return;try{n=l,ze.props=n.memoizedProps,ze.state=n.memoizedState,ze.componentWillUnmount()}catch(Se){fn(l,o,Se)}}break;case 5:Ai(ie,ie.return);break;case 22:if(ie.memoizedState!==null){Ed(le);continue}}be!==null?(be.return=ie,ke=be):Ed(le)}se=se.sibling}e:for(se=null,le=e;;){if(le.tag===5){if(se===null){se=le;try{u=le.stateNode,K?(m=u.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(j=le.stateNode,C=le.memoizedProps.style,b=C!=null&&C.hasOwnProperty("display")?C.display:null,j.style.display=Vi("display",b))}catch(Se){fn(e,e.return,Se)}}}else if(le.tag===6){if(se===null)try{le.stateNode.nodeValue=K?"":le.memoizedProps}catch(Se){fn(e,e.return,Se)}}else if((le.tag!==22&&le.tag!==23||le.memoizedState===null||le===e)&&le.child!==null){le.child.return=le,le=le.child;continue}if(le===e)break e;for(;le.sibling===null;){if(le.return===null||le.return===e)break e;se===le&&(se=null),le=le.return}se===le&&(se=null),le.sibling.return=le.return,le=le.sibling}}break;case 19:qt(n,e),Et(e),l&4&&Pd(e);break;case 21:break;default:qt(n,e),Et(e)}}function Et(e){var n=e.flags;if(n&2){try{e:{for(var o=e.return;o!==null;){if(Td(o)){var l=o;break e}o=o.return}throw Error(r(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(wt(u,""),l.flags&=-33);var m=Ad(e);rl(e,m,u);break;case 3:case 4:var b=l.stateNode.containerInfo,j=Ad(e);tl(e,j,b);break;default:throw Error(r(161))}}catch(C){fn(e,e.return,C)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Df(e,n,o){ke=e,Rd(e)}function Rd(e,n,o){for(var l=(e.mode&1)!==0;ke!==null;){var u=ke,m=u.child;if(u.tag===22&&l){var b=u.memoizedState!==null||Os;if(!b){var j=u.alternate,C=j!==null&&j.memoizedState!==null||Dn;j=Os;var K=Dn;if(Os=b,(Dn=C)&&!K)for(ke=u;ke!==null;)b=ke,C=b.child,b.tag===22&&b.memoizedState!==null?Bd(u):C!==null?(C.return=b,ke=C):Bd(u);for(;m!==null;)ke=m,Rd(m),m=m.sibling;ke=u,Os=j,Dn=K}Dd(e)}else(u.subtreeFlags&8772)!==0&&m!==null?(m.return=u,ke=m):Dd(e)}}function Dd(e){for(;ke!==null;){var n=ke;if((n.flags&8772)!==0){var o=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Dn||Hs(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!Dn)if(o===null)l.componentDidMount();else{var u=n.elementType===n.type?o.memoizedProps:St(n.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var m=n.updateQueue;m!==null&&Eu(n,m,l);break;case 3:var b=n.updateQueue;if(b!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}Eu(n,b,o)}break;case 5:var j=n.stateNode;if(o===null&&n.flags&4){o=j;var C=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&o.focus();break;case"img":C.src&&(o.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var K=n.alternate;if(K!==null){var se=K.memoizedState;if(se!==null){var le=se.dehydrated;le!==null&&ao(le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}Dn||n.flags&512&&nl(n)}catch(ie){fn(n,n.return,ie)}}if(n===e){ke=null;break}if(o=n.sibling,o!==null){o.return=n.return,ke=o;break}ke=n.return}}function Ed(e){for(;ke!==null;){var n=ke;if(n===e){ke=null;break}var o=n.sibling;if(o!==null){o.return=n.return,ke=o;break}ke=n.return}}function Bd(e){for(;ke!==null;){var n=ke;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{Hs(4,n)}catch(C){fn(n,o,C)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var u=n.return;try{l.componentDidMount()}catch(C){fn(n,u,C)}}var m=n.return;try{nl(n)}catch(C){fn(n,m,C)}break;case 5:var b=n.return;try{nl(n)}catch(C){fn(n,b,C)}}}catch(C){fn(n,n.return,C)}if(n===e){ke=null;break}var j=n.sibling;if(j!==null){j.return=n.return,ke=j;break}ke=n.return}}var Ef=Math.ceil,Ws=D.ReactCurrentDispatcher,il=D.ReactCurrentOwner,mt=D.ReactCurrentBatchConfig,Ve=0,jn=null,vn=null,An=0,ot=0,Mi=vr(0),_n=0,Mo=null,Yr=0,Gs=0,ol=0,Po=null,Zn=null,sl=0,Pi=1/0,er=null,Us=!1,al=null,kr=null,Vs=!1,zr=null,Ks=0,Co=0,ll=null,Zs=-1,Qs=0;function In(){return(Ve&6)!==0?en():Zs!==-1?Zs:Zs=en()}function Sr(e){return(e.mode&1)===0?1:(Ve&2)!==0&&An!==0?An&-An:xf.transition!==null?(Qs===0&&(Qs=Ac()),Qs):(e=Xe,e!==0||(e=window.event,e=e===void 0?16:Ic(e.type)),e)}function Tt(e,n,o,l){if(50<Co)throw Co=0,ll=null,Error(r(185));to(e,o,l),((Ve&2)===0||e!==jn)&&(e===jn&&((Ve&2)===0&&(Gs|=o),_n===4&&jr(e,An)),Qn(e,l),o===1&&Ve===0&&(n.mode&1)===0&&(Pi=en()+500,ks&&wr()))}function Qn(e,n){var o=e.callbackNode;vm(e,n);var l=os(e,e===jn?An:0);if(l===0)o!==null&&di(o),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(o!=null&&di(o),n===1)e.tag===0?vf(Id.bind(null,e)):ku(Id.bind(null,e)),ff(function(){(Ve&6)===0&&wr()}),o=null;else{switch(Mc(l)){case 1:o=eo;break;case 4:o=ts;break;case 16:o=Hr;break;case 536870912:o=He;break;default:o=Hr}o=Vd(o,Nd.bind(null,e))}e.callbackPriority=n,e.callbackNode=o}}function Nd(e,n){if(Zs=-1,Qs=0,(Ve&6)!==0)throw Error(r(327));var o=e.callbackNode;if(Ci()&&e.callbackNode!==o)return null;var l=os(e,e===jn?An:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||n)n=Ys(e,l);else{n=l;var u=Ve;Ve|=2;var m=Ld();(jn!==e||An!==n)&&(er=null,Pi=en()+500,Jr(e,n));do try{If();break}catch(j){Fd(e,j)}while(!0);S0(),Ws.current=m,Ve=u,vn!==null?n=0:(jn=null,An=0,n=_n)}if(n!==0){if(n===2&&(u=Oa(e),u!==0&&(l=u,n=cl(e,u))),n===1)throw o=Mo,Jr(e,0),jr(e,l),Qn(e,en()),o;if(n===6)jr(e,l);else{if(u=e.current.alternate,(l&30)===0&&!Bf(u)&&(n=Ys(e,l),n===2&&(m=Oa(e),m!==0&&(l=m,n=cl(e,m))),n===1))throw o=Mo,Jr(e,0),jr(e,l),Qn(e,en()),o;switch(e.finishedWork=u,e.finishedLanes=l,n){case 0:case 1:throw Error(r(345));case 2:ei(e,Zn,er);break;case 3:if(jr(e,l),(l&130023424)===l&&(n=sl+500-en(),10<n)){if(os(e,0)!==0)break;if(u=e.suspendedLanes,(u&l)!==l){In(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=h0(ei.bind(null,e,Zn,er),n);break}ei(e,Zn,er);break;case 4:if(jr(e,l),(l&4194240)===l)break;for(n=e.eventTimes,u=-1;0<l;){var b=31-_t(l);m=1<<b,b=n[b],b>u&&(u=b),l&=~m}if(l=u,l=en()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Ef(l/1960))-l,10<l){e.timeoutHandle=h0(ei.bind(null,e,Zn,er),l);break}ei(e,Zn,er);break;case 5:ei(e,Zn,er);break;default:throw Error(r(329))}}}return Qn(e,en()),e.callbackNode===o?Nd.bind(null,e):null}function cl(e,n){var o=Po;return e.current.memoizedState.isDehydrated&&(Jr(e,n).flags|=256),e=Ys(e,n),e!==2&&(n=Zn,Zn=o,n!==null&&ul(n)),e}function ul(e){Zn===null?Zn=e:Zn.push.apply(Zn,e)}function Bf(e){for(var n=e;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],m=u.getSnapshot;u=u.value;try{if(!kt(m(),u))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function jr(e,n){for(n&=~ol,n&=~Gs,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var o=31-_t(n),l=1<<o;e[o]=-1,n&=~l}}function Id(e){if((Ve&6)!==0)throw Error(r(327));Ci();var n=os(e,0);if((n&1)===0)return Qn(e,en()),null;var o=Ys(e,n);if(e.tag!==0&&o===2){var l=Oa(e);l!==0&&(n=l,o=cl(e,l))}if(o===1)throw o=Mo,Jr(e,0),jr(e,n),Qn(e,en()),o;if(o===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ei(e,Zn,er),Qn(e,en()),null}function dl(e,n){var o=Ve;Ve|=1;try{return e(n)}finally{Ve=o,Ve===0&&(Pi=en()+500,ks&&wr())}}function Xr(e){zr!==null&&zr.tag===0&&(Ve&6)===0&&Ci();var n=Ve;Ve|=1;var o=mt.transition,l=Xe;try{if(mt.transition=null,Xe=1,e)return e()}finally{Xe=l,mt.transition=o,Ve=n,(Ve&6)===0&&wr()}}function pl(){ot=Mi.current,on(Mi)}function Jr(e,n){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,mf(o)),vn!==null)for(o=vn.return;o!==null;){var l=o;switch(b0(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&$s();break;case 3:qi(),on(Un),on(Pn),R0();break;case 5:P0(l);break;case 4:qi();break;case 13:on(cn);break;case 19:on(cn);break;case 10:j0(l.type._context);break;case 22:case 23:pl()}o=o.return}if(jn=e,vn=e=qr(e.current,null),An=ot=n,_n=0,Mo=null,ol=Gs=Yr=0,Zn=Po=null,Kr!==null){for(n=0;n<Kr.length;n++)if(o=Kr[n],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,m=o.pending;if(m!==null){var b=m.next;m.next=u,l.next=b}o.pending=l}Kr=null}return e}function Fd(e,n){do{var o=vn;try{if(S0(),Rs.current=Ns,Ds){for(var l=un.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Ds=!1}if(Qr=0,Sn=$n=un=null,zo=!1,So=0,il.current=null,o===null||o.return===null){_n=1,Mo=n,vn=null;break}e:{var m=e,b=o.return,j=o,C=n;if(n=An,j.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var K=C,se=j,le=se.tag;if((se.mode&1)===0&&(le===0||le===11||le===15)){var ie=se.alternate;ie?(se.updateQueue=ie.updateQueue,se.memoizedState=ie.memoizedState,se.lanes=ie.lanes):(se.updateQueue=null,se.memoizedState=null)}var be=dd(b);if(be!==null){be.flags&=-257,pd(be,b,j,m,n),be.mode&1&&ud(m,K,n),n=be,C=K;var ze=n.updateQueue;if(ze===null){var Se=new Set;Se.add(C),n.updateQueue=Se}else ze.add(C);break e}else{if((n&1)===0){ud(m,K,n),ml();break e}C=Error(r(426))}}else if(an&&j.mode&1){var gn=dd(b);if(gn!==null){(gn.flags&65536)===0&&(gn.flags|=256),pd(gn,b,j,m,n),k0(Ti(C,j));break e}}m=C=Ti(C,j),_n!==4&&(_n=2),Po===null?Po=[m]:Po.push(m),m=b;do{switch(m.tag){case 3:m.flags|=65536,n&=-n,m.lanes|=n;var H=ld(m,C,n);Du(m,H);break e;case 1:j=C;var I=m.type,U=m.stateNode;if((m.flags&128)===0&&(typeof I.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(kr===null||!kr.has(U)))){m.flags|=65536,n&=-n,m.lanes|=n;var pe=cd(m,j,n);Du(m,pe);break e}}m=m.return}while(m!==null)}Hd(o)}catch(je){n=je,vn===o&&o!==null&&(vn=o=o.return);continue}break}while(!0)}function Ld(){var e=Ws.current;return Ws.current=Ns,e===null?Ns:e}function ml(){(_n===0||_n===3||_n===2)&&(_n=4),jn===null||(Yr&268435455)===0&&(Gs&268435455)===0||jr(jn,An)}function Ys(e,n){var o=Ve;Ve|=2;var l=Ld();(jn!==e||An!==n)&&(er=null,Jr(e,n));do try{Nf();break}catch(u){Fd(e,u)}while(!0);if(S0(),Ve=o,Ws.current=l,vn!==null)throw Error(r(261));return jn=null,An=0,_n}function Nf(){for(;vn!==null;)Od(vn)}function If(){for(;vn!==null&&!Ia();)Od(vn)}function Od(e){var n=Ud(e.alternate,e,ot);e.memoizedProps=e.pendingProps,n===null?Hd(e):vn=n,il.current=null}function Hd(e){var n=e;do{var o=n.alternate;if(e=n.return,(n.flags&32768)===0){if(o=Mf(o,n,ot),o!==null){vn=o;return}}else{if(o=Pf(o,n),o!==null){o.flags&=32767,vn=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_n=6,vn=null;return}}if(n=n.sibling,n!==null){vn=n;return}vn=n=e}while(n!==null);_n===0&&(_n=5)}function ei(e,n,o){var l=Xe,u=mt.transition;try{mt.transition=null,Xe=1,Ff(e,n,o,l)}finally{mt.transition=u,Xe=l}return null}function Ff(e,n,o,l){do Ci();while(zr!==null);if((Ve&6)!==0)throw Error(r(327));o=e.finishedWork;var u=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var m=o.lanes|o.childLanes;if(xm(e,m),e===jn&&(vn=jn=null,An=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Vs||(Vs=!0,Vd(Hr,function(){return Ci(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=mt.transition,mt.transition=null;var b=Xe;Xe=1;var j=Ve;Ve|=4,il.current=null,Rf(e,o),Cd(o,e),sf(m0),ls=!!p0,m0=p0=null,e.current=o,Df(o),Fa(),Ve=j,Xe=b,mt.transition=m}else e.current=o;if(Vs&&(Vs=!1,zr=e,Ks=u),m=e.pendingLanes,m===0&&(kr=null),mm(o.stateNode),Qn(e,en()),n!==null)for(l=e.onRecoverableError,o=0;o<n.length;o++)u=n[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(Us)throw Us=!1,e=al,al=null,e;return(Ks&1)!==0&&e.tag!==0&&Ci(),m=e.pendingLanes,(m&1)!==0?e===ll?Co++:(Co=0,ll=e):Co=0,wr(),null}function Ci(){if(zr!==null){var e=Mc(Ks),n=mt.transition,o=Xe;try{if(mt.transition=null,Xe=16>e?16:e,zr===null)var l=!1;else{if(e=zr,zr=null,Ks=0,(Ve&6)!==0)throw Error(r(331));var u=Ve;for(Ve|=4,ke=e.current;ke!==null;){var m=ke,b=m.child;if((ke.flags&16)!==0){var j=m.deletions;if(j!==null){for(var C=0;C<j.length;C++){var K=j[C];for(ke=K;ke!==null;){var se=ke;switch(se.tag){case 0:case 11:case 15:Ao(8,se,m)}var le=se.child;if(le!==null)le.return=se,ke=le;else for(;ke!==null;){se=ke;var ie=se.sibling,be=se.return;if(qd(se),se===K){ke=null;break}if(ie!==null){ie.return=be,ke=ie;break}ke=be}}}var ze=m.alternate;if(ze!==null){var Se=ze.child;if(Se!==null){ze.child=null;do{var gn=Se.sibling;Se.sibling=null,Se=gn}while(Se!==null)}}ke=m}}if((m.subtreeFlags&2064)!==0&&b!==null)b.return=m,ke=b;else e:for(;ke!==null;){if(m=ke,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ao(9,m,m.return)}var H=m.sibling;if(H!==null){H.return=m.return,ke=H;break e}ke=m.return}}var I=e.current;for(ke=I;ke!==null;){b=ke;var U=b.child;if((b.subtreeFlags&2064)!==0&&U!==null)U.return=b,ke=U;else e:for(b=I;ke!==null;){if(j=ke,(j.flags&2048)!==0)try{switch(j.tag){case 0:case 11:case 15:Hs(9,j)}}catch(je){fn(j,j.return,je)}if(j===b){ke=null;break e}var pe=j.sibling;if(pe!==null){pe.return=j.return,ke=pe;break e}ke=j.return}}if(Ve=u,wr(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(We,e)}catch{}l=!0}return l}finally{Xe=o,mt.transition=n}}return!1}function Wd(e,n,o){n=Ti(o,n),n=ld(e,n,1),e=$r(e,n,1),n=In(),e!==null&&(to(e,1,n),Qn(e,n))}function fn(e,n,o){if(e.tag===3)Wd(e,e,o);else for(;n!==null;){if(n.tag===3){Wd(n,e,o);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(kr===null||!kr.has(l))){e=Ti(o,e),e=cd(n,e,1),n=$r(n,e,1),e=In(),n!==null&&(to(n,1,e),Qn(n,e));break}}n=n.return}}function Lf(e,n,o){var l=e.pingCache;l!==null&&l.delete(n),n=In(),e.pingedLanes|=e.suspendedLanes&o,jn===e&&(An&o)===o&&(_n===4||_n===3&&(An&130023424)===An&&500>en()-sl?Jr(e,0):ol|=o),Qn(e,n)}function Gd(e,n){n===0&&((e.mode&1)===0?n=1:(n=is,is<<=1,(is&130023424)===0&&(is=4194304)));var o=In();e=Yt(e,n),e!==null&&(to(e,n,o),Qn(e,o))}function Of(e){var n=e.memoizedState,o=0;n!==null&&(o=n.retryLane),Gd(e,o)}function Hf(e,n){var o=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(r(314))}l!==null&&l.delete(n),Gd(e,o)}var Ud;Ud=function(e,n,o){if(e!==null)if(e.memoizedProps!==n.pendingProps||Un.current)Kn=!0;else{if((e.lanes&o)===0&&(n.flags&128)===0)return Kn=!1,Af(e,n,o);Kn=(e.flags&131072)!==0}else Kn=!1,an&&(n.flags&1048576)!==0&&zu(n,Ss,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Ls(e,n),e=n.pendingProps;var u=bi(n,Pn.current);ji(n,o),u=B0(null,n,l,e,u,o);var m=N0();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Vn(l)?(m=!0,_s(n)):m=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,A0(n),u.updater=Is,n.stateNode=u,u._reactInternals=n,W0(n,l,e,o),n=K0(null,n,l,!0,m,o)):(n.tag=0,an&&m&&w0(n),Nn(null,n,u,o),n=n.child),n;case 16:l=n.elementType;e:{switch(Ls(e,n),e=n.pendingProps,u=l._init,l=u(l._payload),n.type=l,u=n.tag=Gf(l),e=St(l,e),u){case 0:n=V0(null,n,l,e,o);break e;case 1:n=vd(null,n,l,e,o);break e;case 11:n=md(null,n,l,e,o);break e;case 14:n=fd(null,n,l,St(l.type,e),o);break e}throw Error(r(306,l,""))}return n;case 0:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:St(l,u),V0(e,n,l,u,o);case 1:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:St(l,u),vd(e,n,l,u,o);case 3:e:{if(xd(n),e===null)throw Error(r(387));l=n.pendingProps,m=n.memoizedState,u=m.element,Ru(e,n),Ps(n,l,null,o);var b=n.memoizedState;if(l=b.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},n.updateQueue.baseState=m,n.memoizedState=m,n.flags&256){u=Ti(Error(r(423)),n),n=wd(e,n,l,o,u);break e}else if(l!==u){u=Ti(Error(r(424)),n),n=wd(e,n,l,o,u);break e}else for(it=yr(n.stateNode.containerInfo.firstChild),rt=n,an=!0,zt=null,o=Pu(n,null,l,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ki(),l===u){n=Jt(e,n,o);break e}Nn(e,n,l,o)}n=n.child}return n;case 5:return Bu(n),e===null&&_0(n),l=n.type,u=n.pendingProps,m=e!==null?e.memoizedProps:null,b=u.children,f0(l,u)?b=null:m!==null&&f0(l,m)&&(n.flags|=32),yd(e,n),Nn(e,n,b,o),n.child;case 6:return e===null&&_0(n),null;case 13:return bd(e,n,o);case 4:return M0(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=zi(n,null,l,o):Nn(e,n,l,o),n.child;case 11:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:St(l,u),md(e,n,l,u,o);case 7:return Nn(e,n,n.pendingProps,o),n.child;case 8:return Nn(e,n,n.pendingProps.children,o),n.child;case 12:return Nn(e,n,n.pendingProps.children,o),n.child;case 10:e:{if(l=n.type._context,u=n.pendingProps,m=n.memoizedProps,b=u.value,nn(Ts,l._currentValue),l._currentValue=b,m!==null)if(kt(m.value,b)){if(m.children===u.children&&!Un.current){n=Jt(e,n,o);break e}}else for(m=n.child,m!==null&&(m.return=n);m!==null;){var j=m.dependencies;if(j!==null){b=m.child;for(var C=j.firstContext;C!==null;){if(C.context===l){if(m.tag===1){C=Xt(-1,o&-o),C.tag=2;var K=m.updateQueue;if(K!==null){K=K.shared;var se=K.pending;se===null?C.next=C:(C.next=se.next,se.next=C),K.pending=C}}m.lanes|=o,C=m.alternate,C!==null&&(C.lanes|=o),q0(m.return,o,n),j.lanes|=o;break}C=C.next}}else if(m.tag===10)b=m.type===n.type?null:m.child;else if(m.tag===18){if(b=m.return,b===null)throw Error(r(341));b.lanes|=o,j=b.alternate,j!==null&&(j.lanes|=o),q0(b,o,n),b=m.sibling}else b=m.child;if(b!==null)b.return=m;else for(b=m;b!==null;){if(b===n){b=null;break}if(m=b.sibling,m!==null){m.return=b.return,b=m;break}b=b.return}m=b}Nn(e,n,u.children,o),n=n.child}return n;case 9:return u=n.type,l=n.pendingProps.children,ji(n,o),u=dt(u),l=l(u),n.flags|=1,Nn(e,n,l,o),n.child;case 14:return l=n.type,u=St(l,n.pendingProps),u=St(l.type,u),fd(e,n,l,u,o);case 15:return hd(e,n,n.type,n.pendingProps,o);case 17:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:St(l,u),Ls(e,n),n.tag=1,Vn(l)?(e=!0,_s(n)):e=!1,ji(n,o),sd(n,l,u),W0(n,l,u,o),K0(null,n,l,!0,e,o);case 19:return _d(e,n,o);case 22:return gd(e,n,o)}throw Error(r(156,n.tag))};function Vd(e,n){return ns(e,n)}function Wf(e,n,o,l){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(e,n,o,l){return new Wf(e,n,o,l)}function fl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gf(e){if(typeof e=="function")return fl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===J)return 11;if(e===Ae)return 14}return 2}function qr(e,n){var o=e.alternate;return o===null?(o=ft(e.tag,n,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=n,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,n=e.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function Xs(e,n,o,l,u,m){var b=2;if(l=e,typeof e=="function")fl(e)&&(b=1);else if(typeof e=="string")b=5;else e:switch(e){case L:return ni(o.children,u,m,n);case Q:b=8,u|=8;break;case X:return e=ft(12,o,n,u|2),e.elementType=X,e.lanes=m,e;case ne:return e=ft(13,o,n,u),e.elementType=ne,e.lanes=m,e;case ge:return e=ft(19,o,n,u),e.elementType=ge,e.lanes=m,e;case he:return Js(o,u,m,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:b=10;break e;case re:b=9;break e;case J:b=11;break e;case Ae:b=14;break e;case ye:b=16,l=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return n=ft(b,o,n,u),n.elementType=e,n.type=l,n.lanes=m,n}function ni(e,n,o,l){return e=ft(7,e,l,n),e.lanes=o,e}function Js(e,n,o,l){return e=ft(22,e,l,n),e.elementType=he,e.lanes=o,e.stateNode={isHidden:!1},e}function hl(e,n,o){return e=ft(6,e,null,n),e.lanes=o,e}function gl(e,n,o){return n=ft(4,e.children!==null?e.children:[],e.key,n),n.lanes=o,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Uf(e,n,o,l,u){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ha(0),this.expirationTimes=Ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ha(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function yl(e,n,o,l,u,m,b,j,C){return e=new Uf(e,n,o,j,C),n===1?(n=1,m===!0&&(n|=8)):n=0,m=ft(3,null,null,n),e.current=m,m.stateNode=e,m.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},A0(m),e}function Vf(e,n,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:W,key:l==null?null:""+l,children:e,containerInfo:n,implementation:o}}function Kd(e){if(!e)return xr;e=e._reactInternals;e:{if(Ut(e)!==e||e.tag!==1)throw Error(r(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Vn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(r(171))}if(e.tag===1){var o=e.type;if(Vn(o))return $u(e,o,n)}return n}function Zd(e,n,o,l,u,m,b,j,C){return e=yl(o,l,!0,e,u,m,b,j,C),e.context=Kd(null),o=e.current,l=In(),u=Sr(o),m=Xt(l,u),m.callback=n??null,$r(o,m,u),e.current.lanes=u,to(e,u,l),Qn(e,l),e}function ea(e,n,o,l){var u=n.current,m=In(),b=Sr(u);return o=Kd(o),n.context===null?n.context=o:n.pendingContext=o,n=Xt(m,b),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=$r(u,n,b),e!==null&&(Tt(e,u,b,m),Ms(e,u,b)),b}function na(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qd(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<n?o:n}}function vl(e,n){Qd(e,n),(e=e.alternate)&&Qd(e,n)}function Kf(){return null}var Yd=typeof reportError=="function"?reportError:function(e){console.error(e)};function xl(e){this._internalRoot=e}ta.prototype.render=xl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));ea(e,n,null,null)},ta.prototype.unmount=xl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Xr(function(){ea(null,e,null,null)}),n[Vt]=null}};function ta(e){this._internalRoot=e}ta.prototype.unstable_scheduleHydration=function(e){if(e){var n=Rc();e={blockedOn:null,target:e,priority:n};for(var o=0;o<fr.length&&n!==0&&n<fr[o].priority;o++);fr.splice(o,0,e),o===0&&Bc(e)}};function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xd(){}function Zf(e,n,o,l,u){if(u){if(typeof l=="function"){var m=l;l=function(){var K=na(b);m.call(K)}}var b=Zd(n,l,e,0,null,!1,!1,"",Xd);return e._reactRootContainer=b,e[Vt]=b.current,yo(e.nodeType===8?e.parentNode:e),Xr(),b}for(;u=e.lastChild;)e.removeChild(u);if(typeof l=="function"){var j=l;l=function(){var K=na(C);j.call(K)}}var C=yl(e,0,!1,null,null,!1,!1,"",Xd);return e._reactRootContainer=C,e[Vt]=C.current,yo(e.nodeType===8?e.parentNode:e),Xr(function(){ea(n,C,o,l)}),C}function ia(e,n,o,l,u){var m=o._reactRootContainer;if(m){var b=m;if(typeof u=="function"){var j=u;u=function(){var C=na(b);j.call(C)}}ea(n,b,e,u)}else b=Zf(o,n,e,u,l);return na(b)}Pc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var o=no(n.pendingLanes);o!==0&&(Wa(n,o|1),Qn(n,en()),(Ve&6)===0&&(Pi=en()+500,wr()))}break;case 13:Xr(function(){var l=Yt(e,1);if(l!==null){var u=In();Tt(l,e,1,u)}}),vl(e,1)}},Ga=function(e){if(e.tag===13){var n=Yt(e,134217728);if(n!==null){var o=In();Tt(n,e,134217728,o)}vl(e,134217728)}},Cc=function(e){if(e.tag===13){var n=Sr(e),o=Yt(e,n);if(o!==null){var l=In();Tt(o,e,n,l)}vl(e,n)}},Rc=function(){return Xe},Dc=function(e,n){var o=Xe;try{return Xe=e,n()}finally{Xe=o}},Ot=function(e,n,o){switch(n){case"input":if(zn(e,o),n=o.name,o.type==="radio"&&n!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var l=o[n];if(l!==e&&l.form===e.form){var u=bs(l);if(!u)throw Error(r(90));xt(l),zn(l,u)}}}break;case"textarea":Wi(e,o);break;case"select":n=o.value,n!=null&&nt(e,!!o.multiple,n,!1)}},Fr=dl,Qo=Xr;var Qf={usingClientEntryPoint:!1,Events:[wo,xi,bs,Qi,ai,dl]},Ro={findFiberByHostInstance:Wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Yf={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ur(e),e===null?null:e.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||Kf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oa.isDisabled&&oa.supportsFiber)try{We=oa.inject(Yf),Gn=oa}catch{}}return Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qf,Yn.createPortal=function(e,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wl(n))throw Error(r(200));return Vf(e,n,null,o)},Yn.createRoot=function(e,n){if(!wl(e))throw Error(r(299));var o=!1,l="",u=Yd;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=yl(e,1,!1,null,null,o,!1,l,u),e[Vt]=n.current,yo(e.nodeType===8?e.parentNode:e),new xl(n)},Yn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=ur(n),e=e===null?null:e.stateNode,e},Yn.flushSync=function(e){return Xr(e)},Yn.hydrate=function(e,n,o){if(!ra(n))throw Error(r(200));return ia(null,e,n,!0,o)},Yn.hydrateRoot=function(e,n,o){if(!wl(e))throw Error(r(405));var l=o!=null&&o.hydratedSources||null,u=!1,m="",b=Yd;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(b=o.onRecoverableError)),n=Zd(n,null,e,1,o??null,u,!1,m,b),e[Vt]=n.current,yo(e),l)for(e=0;e<l.length;e++)o=l[e],u=o._getVersion,u=u(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,u]:n.mutableSourceEagerHydrationData.push(o,u);return new ta(n)},Yn.render=function(e,n,o){if(!ra(n))throw Error(r(200));return ia(null,e,n,!1,o)},Yn.unmountComponentAtNode=function(e){if(!ra(e))throw Error(r(40));return e._reactRootContainer?(Xr(function(){ia(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1},Yn.unstable_batchedUpdates=dl,Yn.unstable_renderSubtreeIntoContainer=function(e,n,o,l){if(!ra(o))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return ia(e,n,o,!1,l)},Yn.version="18.3.1-next-f1338f8080-20240426",Yn}var s1;function oh(){if(s1)return _l.exports;s1=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(t){console.error(t)}}return i(),_l.exports=ih(),_l.exports}var a1;function sh(){if(a1)return sa;a1=1;var i=oh();return sa.createRoot=i.createRoot,sa.hydrateRoot=i.hydrateRoot,sa}var ah=sh();const lh=`---
label: "Absolute Value"
labelPl: "Wartość bezwzględna"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 100
y: 310
---
`,ch=`---
label: "Analytic Geometry"
labelPl: "Geometria analityczna"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 960
---
`,uh=`---
label: "Area & Perimeter"
labelPl: "Pole i obwód"
scope: planimetria
section: SP8
level: 1
x: 100
y: 860
---
`,dh=`---
label: "Arith. & Geometric Seq."
labelPl: "Ciągi arytm. i geom."
scope: ciagi
section: LP
level: 2
x: 1080
y: 220
---
`,ph=`---
label: "Bernoulli Scheme"
labelPl: "Schemat Bernoulliego"
scope: kombinatoryka
section: LR
level: 3
x: 1310
y: 480
resources:
  - "interactive|bernoulli-explorer.html|Bernoulli Explorer — Coin Flips, Histogram & Formula|Schemat Bernoulliego — rzuty monetą, histogram i wzór"
---
Schemat Bernoulliego: n niezależnych powtórzeń doświadczenia z dwoma wynikami (sukces z p, porażka z 1−p). P(dokładnie k sukcesów) = C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ. Wartość oczekiwana: E = n·p. Typowe zadania: rzuty monetą, kontrola jakości, testy wielokrotne.

<!-- example -->
Na przykład: rzucamy monetą 4 razy, P(dokładnie 3 orły) = C(4,3) · (1/2)³ · (1/2)¹ = 4 · 1/8 · 1/2 = 4/16 = 1/4.
`,mh=`---
label: "Binomial Theorem"
labelPl: "Wzór dwumianowy"
scope: wyrazenia
section: LR
level: 3
x: 1400
y: 600
resources:
  - "interactive|binomial-explorer.html|Binomial Theorem Explorer — Products, Pascal & Expansion|Dwumian Newtona — iloczyny, Pascal i rozwinięcie"
---
Dwumian Newtona: (a+b)ⁿ = Σ C(n,k) · aⁿ⁻ᵏ · bᵏ dla k=0..n. Wyraz ogólny: C(n,k) · aⁿ⁻ᵏ · bᵏ. Współczynniki to kolejne wiersze trójkąta Pascala. Zastosowania: rozwinięcia potęg, przybliżenia, tożsamości kombinatoryczne.

<!-- example -->
Na przykład: (1+x)³ = 1 + 3x + 3x² + x³. Współczynniki 1,3,3,1 to trzeci wiersz trójkąta Pascala.
`,fh=`---
label: "Circle Equation"
labelPl: "Równanie okręgu"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 870
---
`,hh=`---
label: "Combinations"
labelPl: "Kombinacje"
scope: kombinatoryka
section: LR
level: 3
x: 1360
y: 470
resources:
  - "interactive|combinations-explorer.html|Combinations Explorer — Why divide by k!?|Eksplorator kombinacji — dlaczego dzielimy przez k!?"
---
Kombinacja to wybór k elementów z n bez uwzględnienia kolejności. C(n,k) = n! / (k! · (n−k)!). Kluczowa różnica: permutacje uwzględniają kolejność, kombinacje nie. Symbol Newtona (n po k) to to samo co C(n,k). Trójkąt Pascala: C(n,k) = C(n−1,k−1) + C(n−1,k).

<!-- example -->
Na przykład: ile 2-osobowych par z grupy {A,B,C}? To AB, AC, BC — 3 pary = C(3,2) = 3!/(2!·1!) = 3. Kolejność nie ma znaczenia: AB to to samo co BA.
`,gh=`---
label: "Complex Numbers"
labelPl: "Liczby zespolone"
scope: analiza
section: UNIV
level: 3
x: 390
y: 650
---
`,yh=`---
label: "Conditional Probability"
labelPl: "Prawdop. warunkowe"
scope: kombinatoryka
section: LR
level: 3
x: 1260
y: 360
resources:
  - "interactive|bayes-explorer.html|Bayes' Theorem — Rare Disease Test Paradox|Twierdzenie Bayesa — paradoks testu na rzadką chorobę"
---
Prawdopodobieństwo warunkowe P(A|B) = P(A∩B)/P(B) — prawdopodobieństwo A, gdy wiemy że zaszło B. Twierdzenie Bayesa: P(A|B) = P(B|A)·P(A)/P(B). Wzór na prawdopodobieństwo całkowite: P(B) = Σ P(B|Aᵢ)·P(Aᵢ). Drzewo decyzyjne pomaga organizować obliczenia.

<!-- example -->
Na przykład: w klasie 30 osób, 12 gra w piłkę nożną, 8 gra w piłkę i koszykówkę. P(koszykówka | piłka) = 8/12 = 2/3. Wiemy że ktoś gra w piłkę — jakie szanse że gra też w kosza?
`,vh=`---
label: "Conic Sections"
labelPl: "Krzywe stożkowe"
scope: geometria_analityczna
section: UNIV
level: 3
x: 660
y: 960
---
`,xh=`---
label: "Counting Principles"
labelPl: "Zasady liczenia"
scope: kombinatoryka
section: LP
level: 2
x: 1360
y: 200
resources:
  - "interactive|resources/counting/counting-explorer.html|Counting Principles Explorer|Zasady liczenia — eksplorator"
---
Reguła mnożenia: jeśli jedno zdarzenie ma m możliwości, a drugie n, to razem m·n. Reguła dodawania: jeśli zdarzenia się wykluczają, sumujemy możliwości. Zasada szufladkowa: jeśli n+1 obiektów umieszczamy w n szufladkach, to w co najmniej jednej są ≥ 2 obiekty.

<!-- example -->
Na przykład: 3 koszulki × 4 spodnie = 12 zestawów (reguła mnożenia). Albo: wejście A ma 5 opcji, wejście B ma 3 opcje, razem 5+3 = 8 opcji jeśli się wykluczają (reguła dodawania).
`,wh=`---
label: "Data & Statistics"
labelPl: "Dane i statystyka"
scope: statystyka
section: SP8
level: 1
x: 1160
y: 80
---
Dane statystyczne: zbieranie, porządkowanie, prezentacja (tabele, wykresy). Średnia arytmetyczna: suma/ilość. Mediana: wartość środkowa po uporządkowaniu. Dominanta (moda): wartość najczęstsza.

<!-- example -->
Na przykład: oceny 3, 4, 4, 5, 2. Średnia = (3+4+4+5+2)/5 = 18/5 = 3.6. Mediana: po uporządkowaniu 2,3,4,4,5 → środkowa = 4. Dominanta = 4 (występuje najczęściej).
`,bh=`---
label: "Zastosowania pochodnych"
labelPl: "Zastosowania pochodnych"
scope: analiza
section: LR
level: 3
x: 970
y: 880
---
`,$h=`---
label: "Pochodne"
labelPl: "Pochodne"
scope: analiza
section: LR
level: 3
x: 850
y: 800
resources:
  - "interactive|derivative-explorer.html|Derivative Explorer|Eksplorator pochodnej"
  - "interactive|product-rule-explorer.html|Product Rule — Why d/dx[x²] = 2x|Reguła iloczynu — dlaczego pochodna x² to 2x"
---
`,_h=`---
label: "Distributions"
labelPl: "Rozkłady"
scope: statystyka
section: UNIV
level: 3
x: 1300
y: 490
---
`,kh=`---
label: "Factoring"
labelPl: "Faktoryzacja"
scope: wyrazenia
section: LP
level: 2
x: 580
y: 390
resources:
  - "interactive|factoring-explorer.html|Factoring Explorer — Two Lines × Parabola|Rozkład na czynniki — dwie proste × parabola"
---
Rozkład wielomianu na czynniki to zapisanie go jako iloczynu prostszych wyrażeń. Kluczowe metody: wyłączanie wspólnego czynnika, wzory skróconego mnożenia (a²−b² = (a−b)(a+b)), grupowanie, oraz rozkład trójmianu kwadratowego na iloczyn (x−x₁)(x−x₂).

<!-- example -->
Na przykład: x² − 9 = (x−3)(x+3). Sprawdź mnożąc: (x−3)(x+3) = x² + 3x − 3x − 9 = x² − 9 ✓. Albo: x² − 5x + 6 — szukasz dwóch liczb, które dają w sumie −5 a w iloczynie 6: to −2 i −3, więc (x−2)(x−3).
`,zh=`---
label: "Function Compositions"
labelPl: "Złożenia funkcji"
scope: funkcje
section: LR
level: 3
x: 660
y: 640
---
`,Sh=`---
label: "Function Concept"
labelPl: "Pojęcie funkcji"
scope: funkcje
section: SP8
level: 1
x: 160
y: 450
---
Funkcja przypisuje każdemu x dokładnie jedną wartość y = f(x). Dziedzina: zbiór x-ów, dla których funkcja jest określona. Zbiór wartości: zbiór y-ów, które funkcja przyjmuje. Wykres: zbiór punktów (x, f(x)) na płaszczyźnie.

<!-- example -->
Na przykład: f(x) = 2x + 1. Dziedzina: wszystkie liczby rzeczywiste. f(3) = 7, f(0) = 1, f(−1) = −1. Wykres to prosta. Czy y = ±√x to funkcja? Nie — bo np. dla x=4 daje y=2 lub y=−2 (dwie wartości).
`,jh=`---
label: "Exponential Function"
labelPl: "Funkcja wykładnicza"
scope: funkcje
section: LP
level: 2
x: 700
y: 540
---
`,qh=`---
label: "Linear Function"
labelPl: "Funkcja liniowa"
scope: funkcje
section: SP8
level: 2
x: 260
y: 540
resources:
  - "interactive|linear-explorer.html|Linear Function Explorer|Eksplorator funkcji liniowej"
---
Funkcja liniowa f(x) = ax + b. Wykres to prosta. a = współczynnik kierunkowy (nachylenie), b = wyraz wolny (punkt przecięcia z osią Y). Gdy a > 0 funkcja rośnie, gdy a < 0 maleje, gdy a = 0 jest stała.

<!-- example -->
Na przykład: f(x) = 2x − 3. Nachylenie a = 2 (rośnie, na każdy 1 w prawo idzie 2 w górę). Przecięcie z osią Y: b = −3, czyli punkt (0, −3). Miejsce zerowe: 2x − 3 = 0 → x = 1.5.
`,Th=`---
label: "Logarithmic Function"
labelPl: "Funkcja logarytmiczna"
scope: funkcje
section: LP
level: 2
x: 810
y: 540
---
`,Ah=`---
label: "Polynomial Functions"
labelPl: "Funkcje wielomianowe"
scope: funkcje
section: LP
level: 2
x: 560
y: 700
---
`,Mh=`---
label: "Quadratic Function"
labelPl: "Funkcja kwadratowa"
scope: funkcje
section: LP
level: 2
x: 390
y: 700
resources:
  - "interactive|quadratic-derivation.html|Parabola Explorer — Derivation via Transformations|Eksplorator paraboli — wyprowadzenie przez przekształcenia"
---
Funkcja kwadratowa f(x) = ax² + bx + c. Postać kanoniczna: f(x) = a(x−p)² + q, gdzie (p,q) to wierzchołek. Ramiona paraboli skierowane w górę gdy a > 0, w dół gdy a < 0. Oś symetrii: x = p. Zbiór wartości: [q, +∞) lub (−∞, q]. Miejsca zerowe wyznaczamy z Δ.

<!-- example -->
Na przykład: f(x) = x² − 4x + 3. Wierzchołek: p = 4/2 = 2, q = 4 − 8 + 3 = −1, więc (2, −1). Ramiona w górę (a=1>0). Miejsca zerowe: x=1 i x=3 (bo x² − 4x + 3 = (x−1)(x−3)).
`,Ph=`---
label: "Trig. Functions (periodic)"
labelPl: "Funkcje trygon. (okresowe)"
scope: trygonometria
section: LR
level: 3
x: 960
y: 440
---
`,Ch=`---
label: "Fractions & Rationals"
labelPl: "Ułamki i liczby wymierne"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 260
y: 80
---
Ułamek to iloraz dwóch liczb: a/b (b ≠ 0). Skracanie: dzielimy licznik i mianownik przez NWD. Dodawanie: wspólny mianownik. Mnożenie: licznik × licznik, mianownik × mianownik. Dzielenie: mnożymy przez odwrotność.

<!-- example -->
Na przykład: 2/3 + 3/4 = 8/12 + 9/12 = 17/12. Albo: 2/3 · 3/4 = 6/12 = 1/2. Sprawdź: 0.5 = 1/2 ✓.
`,Rh=`---
label: "Geometric Series"
labelPl: "Szeregi geometryczne"
scope: ciagi
section: LR
level: 3
x: 1080
y: 340
---
`,Dh=`---
label: "Integers & Operations"
labelPl: "Liczby całkowite"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 120
y: 80
---
Liczby całkowite: ..., −3, −2, −1, 0, 1, 2, 3, ... Działania: dodawanie, odejmowanie, mnożenie, dzielenie z resztą. NWD i NWW — przydatne przy ułamkach. Podzielność: liczba jest podzielna przez inną, gdy reszta z dzielenia = 0.

<!-- example -->
Na przykład: NWD(84, 56) — rozkładamy: 84 = 2²·3·7, 56 = 2³·7. Wspólne czynniki: 2²·7 = 28. Albo algorytm Euklidesa: 84 = 1·56 + 28, 56 = 2·28 + 0. NWD = 28.
`,Eh=`---
label: "Integrals"
labelPl: "Całki"
scope: analiza
section: UNIV
level: 3
x: 720
y: 880
---
`,Bh=`---
label: "Granice funkcji"
labelPl: "Granice funkcji"
scope: analiza
section: LR
level: 3
x: 760
y: 700
---
`,Nh=`---
label: "Linear Equations"
labelPl: "Równania liniowe"
scope: rownania
section: SP8
level: 2
x: 190
y: 200
resources:
  - "interactive|equation-explorer.html|Equation Balance Scale|Równanie to waga — eksplorator"
---
Równanie liniowe: ax + b = 0, rozwiązanie x = −b/a (gdy a ≠ 0). Metoda: przenosimy wyrazy z x na jedną stronę, liczby na drugą. Układ równań: dwa równania, dwa niewiadome — metoda podstawiania lub przeciwnych współczynników.

<!-- example -->
Na przykład: 3x + 6 = 0 → 3x = −6 → x = −2. Sprawdź: 3·(−2) + 6 = −6 + 6 = 0 ✓. Albo: 2x − 5 = x + 3 → 2x − x = 3 + 5 → x = 8.
`,Ih=`---
label: "Linear Inequalities"
labelPl: "Nierówności liniowe"
scope: rownania
section: SP8
level: 2
x: 330
y: 200
---
`,Fh=`---
label: "Systems of Linear Eq."
labelPl: "Układy równań liniowych"
scope: rownania
section: SP8
level: 2
x: 250
y: 310
---
`,Lh=`---
label: "Log. & Exp. Equations"
labelPl: "Równania log. i wykł."
scope: rownania
section: LP
level: 2
x: 740
y: 310
---
`,Oh=`---
label: "Logarithms & Exponentials"
labelPl: "Logarytmy i wykładnicze"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 680
y: 200
---
`,Hh=`---
label: "Logic Basics"
labelPl: "Logika"
scope: logika
section: LP
level: 1
x: 1210
y: 680
---
`,Wh=`---
label: "Optimization (quadratic)"
labelPl: "Optymalizacja (funkcja kw.)"
scope: funkcje
section: LP
level: 2
x: 480
y: 790
resources:
  - "interactive|optimization-explorer.html|Optimization Explorer — Vertex, Fencing & Projectile|Optymalizacja — wierzchołek, ogrodzenie i pocisk"
---
Optymalizacja z funkcją kwadratową: gdy zależność jest parabolą, wartość największa lub najmniejsza jest w wierzchołku. Typowe zadania: największe pole prostokąta o zadanym obwodzie, maksymalny dochód, zasięg pocisku. Klucz: zapisz wielkość do optymalizacji jako funkcję kwadratową jednej zmiennej.

<!-- example -->
Na przykład: prostokąt o obwodzie 20. Boki: x i (10−x). Pole: P = x(10−x) = −x² + 10x. Wierzchołek: x = 5, P = 25. Największe pole ma kwadrat 5×5.
`,Gh=`---
label: "Equations with Parameters"
labelPl: "Równania z parametrem"
scope: rownania
section: LR
level: 3
x: 560
y: 480
---
`,Uh=`---
label: "Permutations"
labelPl: "Permutacje"
scope: kombinatoryka
section: LR
level: 3
x: 1410
y: 340
resources:
  - "interactive|permutations-explorer.html|Permutations Explorer — Orderings, Trees & Factorial|Permutacje — ustawienia, drzewa i silnia"
---
Permutacja to uporządkowanie n elementów. Liczba permutacji: P(n) = n!. Permutacje z powtórzeniami: n! / (k₁! · k₂! · …). Wariacje bez powtórzeń (k z n elementów w ustalonej kolejności): V(n,k) = n!/(n−k)!.

<!-- example -->
Na przykład: na ile sposobów ustawić litery A, B, C? To ABC, ACB, BAC, BCA, CAB, CBA — 6 sposobów = 3! = 3·2·1 = 6.
`,Vh=`---
label: "Plane Geometry (LP)"
labelPl: "Planimetria"
scope: planimetria
section: LP
level: 2
x: 380
y: 870
---
`,Kh=`---
label: "Polynomial Roots"
labelPl: "Pierwiastki wielomianów"
scope: rownania
section: LR
level: 3
x: 580
y: 560
---
`,Zh=`---
label: "Polynomials"
labelPl: "Wielomiany"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 200
resources:
  - "interactive|polynomial-explorer.html|Polynomial Explorer — Terms, Coefficients & End Behavior|Wielomiany — wyrazy, współczynniki i zachowanie na krańcach"
---
Wielomian to wyrażenie postaci aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀. Stopień wielomianu to najwyższa potęga x z niezerowym współczynnikiem. Kluczowe umiejętności: mnożenie wielomianów, wyłączanie przed nawias, dzielenie wielomianów, twierdzenie Bézouta.

<!-- example -->
Na przykład: 2x³ + 5x² − 3x + 1. Tu a₃=2, a₂=5, a₁=−3, a₀=1. Stopień = 3, bo najwyższa potęga x to x³.
`,Qh=`---
label: "Powers & Roots"
labelPl: "Potęgi i pierwiastki"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 400
y: 80
resources:
  - "interactive|powers-explorer.html|Powers & Roots Explorer|Potęgi i pierwiastki — eksplorator"
---
Potęga aⁿ = a · a · ... · a (n razy). Kluczowe reguły: aᵐ · aⁿ = aᵐ⁺ⁿ, aᵐ/aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁰ = 1, a⁻ⁿ = 1/aⁿ. Pierwiastek: ⁿ√a = a^(1/n).

<!-- example -->
Na przykład: 2³ · 2⁴ = 2⁷ = 128. Albo: (3²)³ = 3⁶ = 729. Sprawdź: 9³ = 729 ✓. Pierwiastek: √25 = 25^(1/2) = 5.
`,Yh=`---
label: "Probability"
labelPl: "Prawdopodobieństwo"
scope: kombinatoryka
section: LP
level: 2
x: 1210
y: 220
resources:
  - "interactive|probability-explorer.html|Probability Explorer|Eksplorator prawdopodobieństwa"
---
Prawdopodobieństwo klasyczne: P(A) = |A|/|Ω| (liczba zdarzeń sprzyjających / wszystkich). P(A') = 1 − P(A). Dla zdarzeń niezależnych: P(A∩B) = P(A)·P(B). Dla dowolnych: P(A∪B) = P(A) + P(B) − P(A∩B).

<!-- example -->
Na przykład: kostka sześcienna, P(parzysta) = {2,4,6}/6 = 3/6 = 1/2. P(NIE parzysta) = 1 − 1/2 = 1/2.
`,Xh=`---
label: "Mathematical Proofs"
labelPl: "Dowody matematyczne"
scope: logika
section: LP
level: 2
x: 1260
y: 790
---
`,Jh=`---
label: "Pythagorean Theorem"
labelPl: "Twierdzenie Pitagorasa"
scope: planimetria
section: SP8
level: 2
x: 300
y: 840
---
`,e2=`---
label: "Quadratic Equations"
labelPl: "Równania kwadratowe"
scope: rownania
section: LP
level: 2
x: 390
y: 390
resources:
  - "interactive|resources/fn_quadratic/quadratic-derivation.html|Parabola Explorer — Quadratic Formula|Eksplorator paraboli — wzór kwadratowy"
  - "interactive|resources/factoring/factoring-explorer.html|Factoring Explorer — Two Lines × Parabola|Rozkład na czynniki — dwie proste × parabola"
---
Równanie ax² + bx + c = 0 rozwiązujemy za pomocą wyróżnika Δ = b² − 4ac. Gdy Δ > 0: dwa rozwiązania x = (−b ± √Δ) / 2a. Gdy Δ = 0: jedno rozwiązanie x = −b/2a. Gdy Δ < 0: brak rozwiązań rzeczywistych. Alternatywnie: rozkład na czynniki lub wzory Viète'a.

<!-- example -->
Na przykład: x² − 5x + 6 = 0. Tu a=1, b=−5, c=6. Δ = 25 − 24 = 1. x = (5 ± 1)/2, czyli x=3 lub x=2. Sprawdź: 3² − 5·3 + 6 = 9 − 15 + 6 = 0 ✓.
`,n2=`---
label: "Quadratic Inequalities"
labelPl: "Nierówności kwadratowe"
scope: rownania
section: LP
level: 2
x: 390
y: 480
resources:
  - "interactive|sign-chart-explorer.html|Sign Chart Explorer — Quadratic Inequalities|Tabelka znaków — nierówności kwadratowe"
---
Nierówność kwadratowa ax² + bx + c > 0 (lub <, ≥, ≤). Metoda rozwiązywania: znajdź miejsca zerowe, narysuj schemat znaku paraboli, odczytaj przedziały spełniające nierówność. Parabola z a > 0 jest ujemna między pierwiastkami, dodatnia na zewnątrz.

<!-- example -->
Na przykład: x² − x − 6 < 0. Pierwiastki: x=−2 i x=3. Parabola (a>0) jest pod osią X między pierwiastkami, więc odpowiedź: x ∈ (−2, 3).
`,t2=`---
label: "Rational Expressions"
labelPl: "Wyrażenia wymierne"
scope: wyrazenia
section: LP
level: 2
x: 490
y: 310
resources:
  - "interactive|resources/quadratic_ineq/sign-chart-explorer.html|Sign Chart Method|Metoda tabelki znaków"
---
Wyrażenie wymierne to iloraz dwóch wielomianów, np. (x²−1)/(x+3). Kluczowe umiejętności: skracanie (rozkład na czynniki!), dodawanie/odejmowanie (wspólny mianownik), mnożenie/dzielenie, oraz rozwiązywanie nierówności wymiernych metodą przedziałów.

<!-- example -->
Na przykład: (x²−4)/(x−2). Rozkładasz licznik: x²−4 = (x−2)(x+2). Skracasz (x−2) i dostajesz x+2 (dla x≠2). Nierówność wymierna: (x+1)/(x−3) > 0 → miejsca zerowe: x=−1 (licznik), x=3 (mianownik, wyłączony z dziedziny). Tabelka znaków: (−∞,−1): +, (−1,3): −, (3,+∞): +. Odpowiedź: x ∈ (−∞,−1) ∪ (3,+∞).
`,r2=`---
label: "Limits of Sequences"
labelPl: "Granice ciągów"
scope: ciagi
section: LR
level: 3
x: 980
y: 280
---
`,i2=`---
label: "Sequences"
labelPl: "Ciągi"
scope: ciagi
section: LP
level: 2
x: 980
y: 120
---
`,o2=`---
label: "Sets"
labelPl: "Zbiory"
scope: logika
section: SP8
level: 1
x: 1160
y: 580
resources:
  - "interactive|sets-explorer.html|Sets Explorer — Venn Diagram|Eksplorator zbiorów — diagram Venna"
---
Zbiór to kolekcja elementów. Operacje: suma A∪B (elementy z A lub B), iloczyn A∩B (elementy wspólne), różnica A\\B (elementy z A, których nie ma w B), dopełnienie A' (elementy spoza A). Diagram Venna pomaga wizualizować relacje między zbiorami.

<!-- example -->
Na przykład: A = {1,2,3,4}, B = {3,4,5,6}. A∩B = {3,4} (wspólne). A∪B = {1,2,3,4,5,6} (wszystkie). A\\B = {1,2} (z A, których nie ma w B).
`,s2=`---
label: "Sine & Cosine Law"
labelPl: "Tw. sinusów i cosinusów"
scope: trygonometria
section: LP
level: 2
x: 880
y: 310
---
`,a2=`---
label: "Solid Geometry"
labelPl: "Stereometria"
scope: stereometria
section: LP
level: 2
x: 300
y: 960
---
`,l2=`---
label: "Descriptive Statistics"
labelPl: "Statystyka opisowa"
scope: statystyka
section: LP
level: 2
x: 1160
y: 180
---
Statystyka opisowa LP: odchylenie standardowe (miara rozrzutu danych), wariancja, kwartyle, wykresy pudełkowe (box plot). Odchylenie standardowe: im większe, tym bardziej dane są rozproszone wokół średniej.

<!-- example -->
Na przykład: dane {2, 4, 4, 4, 5, 5, 7, 9}. Średnia = 5. Odchylenia od średniej: −3, −1, −1, −1, 0, 0, 2, 4. Kwadraty: 9, 1, 1, 1, 0, 0, 4, 16. Wariancja = 32/8 = 4. Odchylenie std. = √4 = 2.
`,c2=`---
label: "Thales' Theorem"
labelPl: "Twierdzenie Talesa"
scope: planimetria
section: SP8
level: 1
x: 200
y: 760
---
`,u2=`---
label: "Trygonometria - podstawy"
labelPl: "Trygonometria - podstawy"
scope: trygonometria
section: LP
level: 1
x: 830
y: 200
resources:
  - "interactive|trig-explorer.html|Trigonometry Explorer|Eksplorator trygonometrii"
---
`,d2=`---
label: "Równania trygonometryczne"
labelPl: "Równania trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 880
y: 400
---
`,p2=`---
label: "Trig. Identities & Reduction"
labelPl: "Wzory trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 990
y: 310
---
`,m2=`---
label: "Trigonometry (0°–180°)"
labelPl: "Trygonometria (0°–180°)"
scope: trygonometria
section: LP
level: 2
x: 880
y: 200
---
`,f2=`---
label: "Vectors"
labelPl: "Wektory"
scope: geometria_analityczna
section: LR
level: 3
x: 660
y: 870
resources:
  - "interactive|vectors-explorer.html|Vectors Explorer|Eksplorator wektorów"
---
`,h2=`---
label: "Vieta's Formulas"
labelPl: "Wzory Viète'a"
scope: rownania
section: LR
level: 3
x: 390
y: 560
resources:
  - "interactive|vieta-explorer.html|Vieta's Formulas Explorer|Wzory Viète'a — Eksplorator"
---
Wzory Viète'a łączą współczynniki równania kwadratowego z jego pierwiastkami. Dla ax² + bx + c = 0 z pierwiastkami x₁, x₂: suma x₁ + x₂ = −b/a, iloczyn x₁·x₂ = c/a. Pozwalają konstruować równania o zadanych pierwiastkach i obliczać wyrażenia symetryczne bez rozwiązywania równania.

<!-- example -->
Na przykład: x² − 7x + 12 = 0 ma pierwiastki 3 i 4. Sprawdź: 3+4 = 7 = −(−7)/1 ✓, 3·4 = 12 = 12/1 ✓. Bez rozwiązywania wiesz, że suma = 7, iloczyn = 12.
`,g2=`---
options:
  - "(−∞, −2] ∪ [4, +∞)"
  - "[−2, 4]"
  - "(−∞, −2)"
  - "(4, +∞)"
correct: 0
hint: "Nierówność |x−1| ≥ 3 daje x−1 ≥ 3 lub x−1 ≤ −3."
tests:
  abs_value: 1.0
  linear_eq: 0.5
---
Zbiorem rozwiązań nierówności |x − 1| ≥ 3 jest:`,y2=`---
options:
  - "$|x| = -x$ dla $x < 0$"
  - "$|x| = x$ dla każdego $x$"
  - "$|x| = -x$ dla $x > 0$"
  - "$|x|$ może być ujemna"
correct: 0
hint: "Wartość bezwzględna to odległość od zera — zawsze nieujemna. Dla $x < 0$: $|x| = -x > 0$."
tests:
  abs_value: 1.0
  linear_eq: 0.5
---
Które zdanie o wartości bezwzględnej jest prawdziwe?`,v2=`---
options:
  - "$x \\in (-3, 3)$"
  - "$x \\in [-3, 3]$"
  - "$x \\in (-\\infty, -3) \\cup (3, +\\infty)$"
  - "$x \\in \\{-3, 3\\}$"
correct: 0
hint: "$|x| < 3$ oznacza $-3 < x < 3$. To przedział otwarty."
tests:
  abs_value: 1.0
  linear_eq: 0.5
---
Zbiór rozwiązań nierówności $|x| < 3$ to:`,x2=`---
options:
  - "2"
  - "4"
  - "1/2"
  - "3"
correct: 0
hint: "a = (6−2)/(3−1) = 4/2 = 2."
tests:
  analytic_geom: 1.0
---
Prosta przez punkty A(1,2) i B(3,6) ma współczynnik kierunkowy:`,w2=`---
options:
  - "$\\sqrt{13}$"
  - "$\\sqrt{7}$"
  - "$5$"
  - "$13$"
correct: 0
hint: "$d = \\sqrt{(3-1)^2 + (5-2)^2} = \\sqrt{4+9} = \\sqrt{13}$."
tests:
  analytic_geom: 1.0
---
Odległość między punktami $A(1, 2)$ i $B(3, 5)$ wynosi:`,b2=`---
options:
  - "$(2, 3{,}5)$"
  - "$(4, 7)$"
  - "$(1, 3)$"
  - "$(3, 2{,}5)$"
correct: 0
hint: "Środek odcinka $AB$: $S = \\left(\\frac{x_A+x_B}{2}, \\frac{y_A+y_B}{2}\\right) = \\left(\\frac{0+4}{2}, \\frac{2+5}{2}\\right) = (2, 3{,}5)$."
tests:
  analytic_geom: 1.0
---
Środek odcinka $AB$ dla $A(0, 2)$ i $B(4, 5)$ wynosi:`,$2=`---
options:
  - "$24$"
  - "$48$"
  - "$14$"
  - "$12$"
correct: 0
hint: "$P = \\frac{d_1 \\cdot d_2}{2} = \\frac{8 \\cdot 6}{2} = \\frac{48}{2} = 24$."
tests:
  area_perimeter: 1.0
---
Pole rombu o przekątnych $d_1 = 8$ i $d_2 = 6$ wynosi:`,_2=`---
options:
  - "$24\\ \\text{cm}^2$"
  - "$20\\ \\text{cm}^2$"
  - "$12\\ \\text{cm}^2$"
  - "$48\\ \\text{cm}^2$"
correct: 0
hint: "Pole prostokąta = $a \\cdot b = 6 \\cdot 4 = 24\\ \\text{cm}^2$."
tests:
  area_perimeter: 1.0
---
Prostokąt ma boki $6\\ \\text{cm}$ i $4\\ \\text{cm}$. Jego pole wynosi:`,k2=`---
options:
  - "$9\\pi\\ \\text{cm}^2$"
  - "$6\\pi\\ \\text{cm}^2$"
  - "$3\\pi\\ \\text{cm}^2$"
  - "$18\\pi\\ \\text{cm}^2$"
correct: 0
hint: "Pole koła = $\\pi r^2 = \\pi \\cdot 3^2 = 9\\pi\\ \\text{cm}^2$."
tests:
  area_perimeter: 1.0
---
Koło ma promień $r = 3\\ \\text{cm}$. Jego pole wynosi:`,z2=`---
options:
  - "155"
  - "150"
  - "145"
  - "160"
correct: 0
hint: "S₁₀ = (10/2)·(2·2 + 9·3) = 5·31 = 155."
tests:
  arith_geom: 1.0
  sequences: 0.5
---
Suma pierwszych 10 wyrazów ciągu arytmetycznego (a₁=2, d=3) wynosi:`,S2=`---
options:
  - "$48$"
  - "$24$"
  - "$96$"
  - "$16$"
correct: 0
hint: "Ciąg geometryczny: $a_n = a_1 \\cdot q^{n-1}$. $a_5 = 3 \\cdot 2^4 = 3 \\cdot 16 = 48$."
tests:
  arith_geom: 1.0
  sequences: 0.5
---
Ciąg geometryczny: $a_1 = 3$, iloraz $q = 2$. Wyraz $a_5$ wynosi:`,j2=`---
options:
  - "$S_{10} = 55$"
  - "$S_{10} = 50$"
  - "$S_{10} = 45$"
  - "$S_{10} = 100$"
correct: 0
hint: "Suma $n$ wyrazów ciągu arytm.: $S_n = \\frac{n(a_1 + a_n)}{2}$. $a_{10} = 10$, $S_{10} = \\frac{10 \\cdot (1+10)}{2} = 55$."
tests:
  arith_geom: 1.0
  sequences: 0.5
---
Ciąg arytmetyczny: $a_1 = 1$, $r = 1$. Suma pierwszych 10 wyrazów wynosi:`,q2=`---
options:
  - "1/4"
  - "1/8"
  - "3/8"
  - "1/2"
correct: 0
hint: "C(4,3)·(1/2)³·(1/2)¹ = 4/16 = 1/4."
tests:
  bernoulli: 1.0
  probability: 0.5
---
Rzucamy monetą 4 razy. Prawdopodobieństwo dokładnie 3 orłów wynosi:`,T2=`---
options:
  - "$\\binom{n}{k} p^k (1-p)^{n-k}$"
  - "$p^k (1-p)^{n-k}$"
  - "$\\binom{n}{k} p^{n-k} (1-p)^k$"
  - "$n \\cdot p^k$"
correct: 0
hint: "Wzór Bernoulliego: $P(X=k) = \\binom{n}{k} p^k q^{n-k}$, gdzie $q = 1-p$."
tests:
  bernoulli: 1.0
  probability: 0.5
---
W schemacie Bernoulliego prawdopodobieństwo dokładnie $k$ sukcesów w $n$ próbach wynosi:`,A2=`---
options:
  - "$\\frac{3}{8}$"
  - "$\\frac{1}{8}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{1}{4}$"
correct: 0
hint: "$P(X=2) = \\binom{3}{2} \\cdot (\\frac{1}{2})^2 \\cdot \\frac{1}{2} = 3 \\cdot \\frac{1}{4} \\cdot \\frac{1}{2} = \\frac{3}{8}$."
tests:
  bernoulli: 1.0
  probability: 0.5
---
Rzucamy monetą 3 razy ($p = \\frac{1}{2}$). Prawdopodobieństwo dokładnie 2 orłów wynosi:`,M2=`---
options:
  - "$\\frac{80}{243}$"
  - "$\\frac{10}{243}$"
  - "$\\frac{40}{243}$"
  - "$\\frac{32}{243}$"
correct: 0
hint: "$P(X=2) = \\binom{5}{2} \\left(\\frac{1}{3}\\right)^2 \\left(\\frac{2}{3}\\right)^3 = 10 \\cdot \\frac{1}{9} \\cdot \\frac{8}{27} = \\frac{80}{243}$."
tests:
  bernoulli: 1.0
  probability: 0.5
  combinations: 0.25
---
Prawdopodobieństwo sukcesu w pojedynczej próbie wynosi $\\frac{1}{3}$. Wykonujemy 5 niezależnych prób. Jakie jest prawdopodobieństwo dokładnie 2 sukcesów?`,P2=`---
options:
  - "3"
  - "2"
  - "4"
  - "3.5"
correct: 0
hint: "Wartość oczekiwana w schemacie Bernoulliego: $E(X) = n \\cdot p = 6 \\cdot 0{,}5 = 3$."
tests:
  bernoulli: 1.0
  probability: 0.5
  combinations: 0.25
---
Rzucamy monetą 6 razy. Jaka jest oczekiwana liczba orłów?`,C2=`---
options:
  - "$\\frac{15}{16}$"
  - "$\\frac{13}{16}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{3}{4}$"
correct: 0
hint: "$P(\\text{co najmniej 1}) = 1 - P(X=0) = 1 - \\left(\\frac{1}{2}\\right)^4 = 1 - \\frac{1}{16} = \\frac{15}{16}$."
tests:
  bernoulli: 1.0
  probability: 0.5
  combinations: 0.25
---
Rzucamy monetą 4 razy. Jakie jest prawdopodobieństwo otrzymania co najmniej jednego orła?`,R2=`---
options:
  - "$\\frac{35}{128}$"
  - "$\\frac{21}{128}$"
  - "$\\frac{7}{128}$"
  - "$\\frac{1}{128}$"
correct: 0
hint: "$P(X=3) = \\binom{7}{3} \\left(\\frac{1}{2}\\right)^7 = \\frac{35}{128}$."
tests:
  bernoulli: 1.0
  probability: 0.5
  combinations: 0.25
---
Rzucamy monetą 7 razy. Jakie jest prawdopodobieństwo uzyskania dokładnie 3 orłów?`,D2=`---
options:
  - "$\\frac{256}{625}$"
  - "$\\frac{16}{625}$"
  - "$\\frac{96}{625}$"
  - "$\\frac{81}{625}$"
correct: 0
hint: "$P(X=0) = \\binom{4}{0} \\left(\\frac{1}{5}\\right)^0 \\left(\\frac{4}{5}\\right)^4 = \\frac{256}{625}$."
tests:
  bernoulli: 1.0
  probability: 0.5
  combinations: 0.25
---
Prawdopodobieństwo trafienia w cel jednym strzałem wynosi $\\frac{1}{5}$. Strzelec oddaje 4 strzały. Jakie jest prawdopodobieństwo, że nie trafi ani razu?`,E2=`---
options:
  - "10"
  - "5"
  - "20"
  - "15"
correct: 0
hint: "C(5,2) = 5!/(2!·3!) = 10."
tests:
  binom_theorem: 1.0
  combinations: 0.5
  permutations: 0.5
  powers: 0.5
---
Współczynnik przy x² w rozwinięciu (1+x)⁵ wynosi:`,B2=`---
options:
  - "$a^3 + 3a^2b + 3ab^2 + b^3$"
  - "$a^3 + b^3$"
  - "$a^3 - 3a^2b + 3ab^2 - b^3$"
  - "$3a^2b + 3ab^2$"
correct: 0
hint: "Wzór dwumianowy dla $n=3$: $(a+b)^3 = \\binom{3}{0}a^3 + \\binom{3}{1}a^2b + \\binom{3}{2}ab^2 + \\binom{3}{3}b^3$."
tests:
  binom_theorem: 1.0
  combinations: 0.5
  permutations: 0.5
  powers: 0.5
---
Rozwiń $(a + b)^3$:`,N2=`---
options:
  - "$\\binom{n}{k} a^{n-k} b^k$"
  - "$\\binom{n}{k} a^k b^{n-k}$"
  - "$n! \\cdot a^{n-k} b^k$"
  - "$\\binom{k}{n} a^{n-k} b^k$"
correct: 0
hint: "$(k+1)$-ty wyraz (od $k=0$) rozwinięcia $(a+b)^n$: $T_{k+1} = \\binom{n}{k} a^{n-k} b^k$."
tests:
  binom_theorem: 1.0
  combinations: 0.5
  permutations: 0.5
  powers: 0.5
---
Wyraz ogólny rozwinięcia $(a+b)^n$ to:`,I2=`---
options:
  - "$x^4 + 4x^3 + 6x^2 + 4x + 1$"
  - "$x^4 + 4x^3 + 4x^2 + 4x + 1$"
  - "$x^4 + 3x^3 + 3x^2 + x + 1$"
  - "$x^4 + 2x^3 + 6x^2 + 2x + 1$"
correct: 0
hint: "$(x+1)^4 = \\binom{4}{0}x^4 + \\binom{4}{1}x^3 + \\binom{4}{2}x^2 + \\binom{4}{3}x + \\binom{4}{4} = x^4+4x^3+6x^2+4x+1$."
tests:
  binom_theorem: 1.0
  combinations: 0.5
---
Rozwiń $(x+1)^4$:`,F2=`---
options:
  - "$40$"
  - "$80$"
  - "$160$"
  - "$10$"
correct: 0
hint: "Ogólny wyraz: $\\binom{5}{k} x^{5-k} \\cdot 2^k$. Dla $x^3$: $5-k=3$, $k=2$. Współczynnik: $\\binom{5}{2} \\cdot 2^2 = 10 \\cdot 4 = 40$."
tests:
  binom_theorem: 1.0
  combinations: 0.5
---
Jaki jest współczynnik przy $x^3$ w rozwinięciu $(x+2)^5$?`,L2=`---
options:
  - "$32$"
  - "$64$"
  - "$16$"
  - "$128$"
correct: 0
hint: "Suma współczynników dwumianu $(a+b)^n$ wynosi $2^n$. Dla $n=5$: $2^5 = 32$."
tests:
  binom_theorem: 1.0
  combinations: 0.5
---
Ile wynosi suma wszystkich współczynników dwumianowych w rozwinięciu $(a+b)^5$?`,O2=`---
options:
  - "$-540$"
  - "$540$"
  - "$-270$"
  - "$270$"
correct: 0
hint: "Ogólny wyraz $(x-3)^6$: $\\binom{6}{k} x^{6-k} (-3)^k$. Dla $x^3$: $6-k=3$, $k=3$. Współczynnik: $\\binom{6}{3}(-3)^3 = 20 \\cdot (-27) = -540$."
tests:
  binom_theorem: 1.0
  combinations: 0.5
---
Jaki jest współczynnik przy $x^3$ w rozwinięciu $(x - 3)^6$?`,H2=`---
options:
  - "$7$"
  - "$6$"
  - "$8$"
  - "$5$"
correct: 0
hint: "Rozwinięcie $(a+b)^n$ ma $n+1$ wyrazów (od $k=0$ do $k=n$). Dla $n=6$: $6+1=7$ wyrazów."
tests:
  binom_theorem: 1.0
  combinations: 0.5
---
Ile wyrazów ma rozwinięcie dwumianu $(a+b)^6$?`,W2=`---
options:
  - "(x−2)²+(y+1)²=9"
  - "(x+2)²+(y−1)²=9"
  - "(x−2)²+(y−1)²=9"
  - "(x+2)²+(y+1)²=3"
correct: 0
hint: "Wzór: (x−a)²+(y−b)²=r². Tu a=2, b=−1, r=3."
tests:
  circle_eq: 1.0
  analytic_geom: 0.25
---
Okrąg o środku (2,−1) i promieniu 3 ma równanie:`,G2=`---
options:
  - "$(x-2)^2 + (y+1)^2 = 9$"
  - "$(x+2)^2 + (y-1)^2 = 9$"
  - "$(x-2)^2 + (y+1)^2 = 3$"
  - "$(x+2)^2 + (y-1)^2 = 3$"
correct: 0
hint: "Równanie okręgu o środku $(a, b)$ i promieniu $r$: $(x-a)^2 + (y-b)^2 = r^2$. Tu: $(x-2)^2+(y+1)^2=9$."
tests:
  circle_eq: 1.0
  analytic_geom: 0.25
---
Równanie okręgu o środku $(2, -1)$ i promieniu $r = 3$:`,U2=`---
options:
  - "Środek $(1, -2)$, promień $3$"
  - "Środek $(-1, 2)$, promień $3$"
  - "Środek $(1, -2)$, promień $9$"
  - "Środek $(-1, 2)$, promień $9$"
correct: 0
hint: "$(x-1)^2 + (y+2)^2 = 9$: środek $(1, -2)$, promień $\\sqrt{9} = 3$."
tests:
  circle_eq: 1.0
  analytic_geom: 0.25
---
Okrąg $(x-1)^2 + (y+2)^2 = 9$ ma:`,V2=`---
options:
  - "10"
  - "15"
  - "20"
  - "60"
correct: 0
hint: "C(5,3) = 5!/(3!·2!) = 10."
tests:
  combinations: 1.0
  counting: 0.5
---
Ile 3-elementowych podzbiorów ma zbiór 5-elementowy?`,K2=`---
options:
  - "$10$"
  - "$20$"
  - "$60$"
  - "$5$"
correct: 0
hint: "$\\binom{5}{2} = \\frac{5!}{2!\\cdot 3!} = \\frac{20}{2} = 10$."
tests:
  combinations: 1.0
  counting: 0.5
---
Ile jest sposobów wybrania 2 osób z 5?`,Z2=`---
options:
  - "$\\binom{n}{k} = \\binom{n}{n-k}$"
  - "$\\binom{n}{k} = \\binom{n+1}{k}$"
  - "$\\binom{n}{k} = k \\cdot \\binom{n}{k-1}$"
  - "$\\binom{n}{k} = n \\cdot \\binom{n-1}{k}$"
correct: 0
hint: "Symetria kombinacji: wybór $k$ elementów jest równoznaczny z pominięciem $n-k$. Więc $\\binom{n}{k} = \\binom{n}{n-k}$."
tests:
  combinations: 1.0
  counting: 0.5
---
Który wzór jest prawdziwą własnością symbolu Newtona?`,Q2=`---
options:
  - "28"
  - "56"
  - "8"
  - "70"
correct: 0
hint: "$\\binom{8}{2} = \\frac{8!}{2! \\cdot 6!} = \\frac{8 \\cdot 7}{2} = 28$."
tests:
  combinations: 1.0
  counting: 0.5
---
Na turnieju gra 8 drużyn. Każda para gra ze sobą dokładnie raz. Ile meczów zostanie rozegranych?`,Y2=`---
options:
  - "210"
  - "5040"
  - "120"
  - "35"
correct: 0
hint: "Kolejność nie ma znaczenia — to kombinacja: $\\binom{10}{4} = \\frac{10!}{4! \\cdot 6!} = 210$."
tests:
  combinations: 1.0
  counting: 0.5
---
Z 10 uczniów wybieramy 4-osobową drużynę. Na ile sposobów?`,X2=`---
options:
  - "$\\binom{n}{k} = \\binom{n}{n-k}$"
  - "$\\binom{n}{k} = \\binom{n-1}{k}$"
  - "$\\binom{n}{k} = \\binom{k}{n}$"
  - "$\\binom{n}{k} = k \\cdot \\binom{n}{k-1}$"
correct: 0
hint: "Wybór $k$ elementów to to samo, co wskazanie $n-k$ elementów do odrzucenia."
tests:
  combinations: 1.0
  counting: 0.5
---
Która z poniższych tożsamości jest prawdziwa dla $0 \\le k \\le n$?`,J2=`---
options:
  - "840"
  - "420"
  - "1680"
  - "120"
correct: 0
hint: "Wybieramy niezależnie: $\\binom{6}{2} \\cdot \\binom{8}{3} = 15 \\cdot 56 = 840$."
tests:
  combinations: 1.0
  counting: 0.5
---
Z grupy 6 kobiet i 8 mężczyzn wybieramy komisję złożoną z 2 kobiet i 3 mężczyzn. Na ile sposobów można to zrobić?`,e4=`---
options:
  - "35"
  - "21"
  - "56"
  - "70"
correct: 0
hint: "Trzeci wiersz trójkąta Pascala (od zera): $\\binom{7}{3} = 35$. Pamiętaj: $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$."
tests:
  combinations: 1.0
  counting: 0.5
---
Ile wynosi $\\binom{7}{3}$?`,n4=`---
options:
  - "5"
  - "7"
  - "1"
  - "√5"
correct: 0
hint: "|z| = √(3²+4²) = √25 = 5."
tests:
  complex: 1.0
---
Moduł liczby zespolonej z = 3 + 4i wynosi:`,t4=`---
options:
  - "$2 + 3i$"
  - "$2 - 3i$"
  - "$-2 + 3i$"
  - "$-2 - 3i$"
correct: 0
hint: "$(1+2i) + (1+i) = (1+1) + (2+1)i = 2 + 3i$."
tests:
  complex: 1.0
---
Oblicz sumę liczb zespolonych: $(1 + 2i) + (1 + i) =$`,r4=`---
options:
  - "$\\sqrt{5}$"
  - "$5$"
  - "$3$"
  - "$\\sqrt{3}$"
correct: 0
hint: "$|1 + 2i| = \\sqrt{1^2 + 2^2} = \\sqrt{1 + 4} = \\sqrt{5}$."
tests:
  complex: 1.0
---
Moduł liczby zespolonej $z = 1 + 2i$ wynosi:`,i4=`---
options:
  - "0.2"
  - "0.9"
  - "0.5"
  - "0.1"
correct: 0
hint: "P(A∩B) = P(A)·P(B|A) = 0.4·0.5 = 0.2."
tests:
  cond_prob: 1.0
  probability: 0.5
---
P(A) = 0.4, P(B|A) = 0.5. Wartość P(A ∩ B) =`,o4=`---
options:
  - "$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$"
  - "$P(A|B) = P(A) \\cdot P(B)$"
  - "$P(A|B) = P(A) + P(B)$"
  - "$P(A|B) = \\frac{P(A)}{P(B)}$"
correct: 0
hint: "Definicja prawdopodobieństwa warunkowego: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ (dla $P(B) > 0$)."
tests:
  cond_prob: 1.0
  probability: 0.5
---
Wzór na prawdopodobieństwo warunkowe $P(A|B)$:`,s4=`---
options:
  - "$\\frac{1}{2}$"
  - "$\\frac{1}{5}$"
  - "$\\frac{2}{5}$"
  - "$\\frac{1}{4}$"
correct: 0
hint: "Karty $\\leq 4$: {1,2,3,4}. Parzyste wśród nich: {2,4}. $P = \\frac{2}{4} = \\frac{1}{2}$."
tests:
  cond_prob: 1.0
  probability: 0.5
---
Z kart 1–10 wylosowano kartę $\\leq 4$. Prawdopodobieństwo, że to karta parzysta, wynosi:`,a4=`---
options:
  - "$\\frac{1}{3}$"
  - "$\\frac{1}{6}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{2}{3}$"
correct: 0
hint: "Wiemy, że wypadła liczba parzysta: $\\{2,4,6\\}$. Spośród nich tylko 6 jest większa niż 4. $P = \\frac{1}{3}$."
tests:
  cond_prob: 1.0
  probability: 0.5
---
Rzucamy kostką. Wiemy, że wypadła liczba parzysta. Jakie jest prawdopodobieństwo, że jest ona większa niż 4?`,l4=`---
options:
  - "$\\frac{2}{5}$"
  - "$\\frac{1}{3}$"
  - "$\\frac{3}{5}$"
  - "$\\frac{1}{2}$"
correct: 0
hint: "Wzór Bayesa: $P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$. $P(A|B) = \\frac{0.8 \\cdot 0.3}{0.6} = \\frac{0.24}{0.6} = 0.4 = \\frac{2}{5}$."
tests:
  cond_prob: 1.0
  probability: 0.5
---
$P(A) = 0{,}3$, $P(B) = 0{,}6$, $P(B|A) = 0{,}8$. Korzystając ze wzoru Bayesa, oblicz $P(A|B)$.`,c4=`---
options:
  - "$\\frac{3}{5}$"
  - "$\\frac{2}{5}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{7}{10}$"
correct: 0
hint: "Prawdopodobieństwo całkowite: $P(B) = P(B|A) \\cdot P(A) + P(B|A') \\cdot P(A') = 0{,}9 \\cdot 0{,}4 + 0{,}4 \\cdot 0{,}6 = 0{,}36 + 0{,}24 = 0{,}6 = \\frac{3}{5}$."
tests:
  cond_prob: 1.0
  probability: 0.5
---
$P(A) = 0{,}4$, $P(B|A) = 0{,}9$, $P(B|A') = 0{,}4$. Oblicz $P(B)$ korzystając ze wzoru prawdopodobieństwa całkowitego.`,u4=`---
options:
  - "$\\frac{2}{11}$"
  - "$\\frac{1}{6}$"
  - "$\\frac{3}{12}$"
  - "$\\frac{1}{11}$"
correct: 0
hint: "Po wyciągnięciu pierwszej czerwonej kuli zostaje 11 kul, w tym 2 czerwone. $P = \\frac{2}{11}$."
tests:
  cond_prob: 1.0
  probability: 0.5
---
W urnie są 3 kule czerwone i 9 niebieskich. Losujemy bez zwracania. Pierwsza kula była czerwona. Jakie jest prawdopodobieństwo, że druga też będzie czerwona?`,d4=`---
options:
  - "Tak"
  - "Nie"
  - "Nie można tego stwierdzić"
  - "Tylko jeśli $P(A) = P(B)$"
correct: 0
hint: "Zdarzenia są niezależne, gdy $P(A \\cap B) = P(A) \\cdot P(B)$. Sprawdź: $0{,}3 \\cdot 0{,}4 = 0{,}12$. Zgadza się!"
tests:
  cond_prob: 1.0
  probability: 0.5
---
$P(A) = 0{,}3$, $P(B) = 0{,}4$, $P(A \\cap B) = 0{,}12$. Czy zdarzenia $A$ i $B$ są niezależne?`,p4=`---
options:
  - "$\\frac{3}{4}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{2}{3}$"
  - "$\\frac{1}{4}$"
correct: 0
hint: "Ze wzoru na prawdopodobieństwo warunkowe: $P(B|A) = \\frac{P(A \\cap B)}{P(A)} = \\frac{0{,}3}{0{,}4} = \\frac{3}{4}$."
tests:
  cond_prob: 1.0
  probability: 0.5
---
$P(A) = 0{,}4$ i $P(A \\cap B) = 0{,}3$. Ile wynosi $P(B|A)$?`,m4=`---
options:
  - "$\\frac{10}{19}$"
  - "$\\frac{9}{19}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{2}{5}$"
correct: 0
hint: "Wzór Bayesa: $P(W) = 0{,}4 \\cdot 0{,}05 + 0{,}6 \\cdot 0{,}03 = 0{,}02 + 0{,}018 = 0{,}038$. $P(I|W) = \\frac{0{,}02}{0{,}038} = \\frac{20}{38} = \\frac{10}{19}$."
tests:
  cond_prob: 1.0
  probability: 0.5
---
Fabryka ma dwie linie produkcyjne. Linia I wytwarza 40% produkcji z 5% braków, linia II — 60% produkcji z 3% braków. Losowo wybrany produkt okazał się wadliwy. Jakie jest prawdopodobieństwo, że pochodzi z linii I?`,f4=`---
options:
  - "a=3, b=2"
  - "a=9, b=4"
  - "a=2, b=3"
  - "a=√3, b=√2"
correct: 0
hint: "Standardowa postać: x²/a² + y²/b² = 1."
tests:
  conic_sections: 1.0
  circle_eq: 0.5
---
Elipsa o równaniu x²/9 + y²/4 = 1 ma półosie:`,h4=`---
options:
  - "$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$"
  - "$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$"
  - "$y = ax^2$"
  - "$(x-h)^2 + (y-k)^2 = r^2$"
correct: 0
hint: "Równanie elipsy o półosiach $a$ (pozioma) i $b$ (pionowa): $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$."
tests:
  conic_sections: 1.0
  circle_eq: 0.5
---
Równanie elipsy o środku w początku układu współrzędnych to:`,g4=`---
options:
  - "$y = \\frac{1}{4p}x^2$"
  - "$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$"
  - "$x^2 + y^2 = r^2$"
  - "$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$"
correct: 0
hint: "Parabola z ogniskiem w $(0,p)$: $y = \\frac{x^2}{4p}$. Jest to krzywa stożkowa będąca przekrojem stożka płaszczyzną równoległą do tworzącej."
tests:
  conic_sections: 1.0
  circle_eq: 0.5
---
Które równanie opisuje parabolę jako krzywą stożkową?`,y4=`---
options:
  - "6"
  - "3"
  - "9"
  - "27"
correct: 0
hint: "3! = 6 permutacji."
tests:
  counting: 1.0
---
Na ile sposobów można usadzić 3 osoby w rzędzie 3 krzeseł?`,v4=`---
options:
  - "$8$"
  - "$6$"
  - "$3$"
  - "$12$"
correct: 0
hint: "Zasada mnożenia: $2 \\times 4 = 8$ możliwości (każda koszulka z każdą spodnicą)."
tests:
  counting: 1.0
---
Masz 2 koszulki i 4 spodnie. Na ile sposobów możesz się ubrać?`,x4=`---
options:
  - "$12$"
  - "$6$"
  - "$3$"
  - "$24$"
correct: 0
hint: "Zasada mnożenia: $3 \\times 4 = 12$ tras (3 drogi z A do B, 4 z B do C)."
tests:
  counting: 1.0
---
Z miasta A do B prowadzą 3 drogi, z B do C — 4 drogi. Ile jest tras z A do C przez B?`,w4=`---
options:
  - "120"
  - "60"
  - "24"
  - "150"
correct: 0
hint: "Zasada mnożenia: $5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$."
tests:
  counting: 1.0
---
Ile jest liczb 5-cyfrowych, w których każda cyfra (od 1 do 5) występuje dokładnie raz?`,b4=`---
options:
  - "15"
  - "12"
  - "9"
  - "18"
correct: 0
hint: "Zasada dodawania: wybieramy książkę z jednej lub drugiej półki, więc $7 + 8 = 15$."
tests:
  counting: 1.0
---
Na jednej półce stoi 7 książek, na drugiej 8. Na ile sposobów można wybrać jedną książkę?`,$4=`---
options:
  - "10000"
  - "5040"
  - "10"
  - "1000"
correct: 0
hint: "Każda z 4 pozycji może być cyfrą 0–9, więc $10^4 = 10000$."
tests:
  counting: 1.0
---
Ile jest możliwych 4-cyfrowych kodów PIN (cyfry 0–9, mogą się powtarzać)?`,_4=`---
options:
  - "36"
  - "30"
  - "25"
  - "11"
correct: 0
hint: "Zasada mnożenia: 4 wybory zupy $\\times$ 9 wyborów dania głównego = 36."
tests:
  counting: 1.0
---
W restauracji jest 4 rodzaje zup i 9 dań głównych. Na ile sposobów można zamówić obiad składający się z zupy i dania głównego?`,k4=`---
options:
  - "2"
  - "1"
  - "3"
  - "13"
correct: 0
hint: "Zasada szufladkowa Dirichleta: 13 osób i 12 miesięcy, więc $\\lceil 13/12 \\rceil = 2$. Co najmniej 2 osoby urodziły się w tym samym miesiącu."
tests:
  counting: 1.0
---
W pokoju jest 13 osób. Co najmniej ile osób musiało urodzić się w tym samym miesiącu?`,z4=`---
options:
  - "720"
  - "360"
  - "120"
  - "5040"
correct: 0
hint: "Bez powtórzeń: pierwszy wybór z 10, drugi z 9, trzeci z 8, czyli $10 \\cdot 9 \\cdot 8 = 720$."
tests:
  counting: 1.0
---
Z 10 zawodników wybieramy 3 na podium (1., 2. i 3. miejsce). Na ile sposobów można to zrobić?`,S4=`---
options:
  - "12"
  - "24"
  - "8"
  - "16"
correct: 0
hint: "Liczba parzysta kończy się na 2 lub 4 (2 wybory). Pozostałe 3 cyfry ustawiamy na $3! = 6$ sposobów. Razem $2 \\cdot 6 = 12$."
tests:
  counting: 1.0
---
Ile liczb parzystych 4-cyfrowych można utworzyć z cyfr $\\{1, 2, 3, 4\\}$, jeśli każda cyfra występuje dokładnie raz?`,j4=`---
options:
  - "5"
  - "3"
  - "7"
  - "25/5"
correct: 0
hint: "Sortujesz: 1,3,5,7,9. Środkowy element to 5."
tests:
  data_basics: 1.0
---
Mediana zbioru {3, 7, 1, 9, 5} wynosi:`,q4=`---
options:
  - "$7$"
  - "$6$"
  - "$8$"
  - "$7{,}5$"
correct: 0
hint: "Mediana to środkowa wartość po posortowaniu. Posortowane: 3, 5, 7, 9, 11. Środkowa to 7."
tests:
  data_basics: 1.0
---
Mediana zbioru $\\{9, 3, 7, 5, 11\\}$ wynosi:`,T4=`---
options:
  - "$6$"
  - "$5$"
  - "$7$"
  - "$8$"
correct: 0
hint: "Średnia arytmetyczna: suma wszystkich / liczba elementów. $(4+6+8+6)/4 = 24/4 = 6$."
tests:
  data_basics: 1.0
---
Średnia arytmetyczna liczb $4, 6, 8, 6$ wynosi:`,A4=`---
options:
  - "(−∞,−1) ∪ (1,+∞)"
  - "(−1, 1)"
  - "(0, +∞)"
  - "(−∞, 0)"
correct: 0
hint: "f'(x) = 3x²−3 = 3(x−1)(x+1). f'>0 gdy |x|>1."
tests:
  deriv_apps: 1.0
  derivative: 0.5
  optimization_lp: 0.5
---
Funkcja f(x) = x³ − 3x jest rosnąca na przedziale:`,M4=`---
options:
  - "Funkcja rośnie"
  - "Funkcja maleje"
  - "Funkcja jest stała"
  - "Funkcja ma minimum"
correct: 0
hint: "Gdy $f'(x) > 0$ na przedziale, funkcja jest rosnąca na tym przedziale."
tests:
  deriv_apps: 1.0
  derivative: 0.5
  optimization_lp: 0.5
---
Jeśli $f'(x) > 0$ na przedziale $(a, b)$, to funkcja $f$:`,P4=`---
options:
  - "$x = 1$ (minimum)"
  - "$x = 1$ (maksimum)"
  - "$x = -1$ (minimum)"
  - "$x = 0$ (minimum)"
correct: 0
hint: "$f'(x) = 2x - 2 = 0 \\Rightarrow x = 1$. $f''(x) = 2 > 0$, więc to minimum."
tests:
  deriv_apps: 1.0
  derivative: 0.5
  optimization_lp: 0.5
---
Funkcja $f(x) = x^2 - 2x + 3$ ma ekstremum w:`,C4=`---
options:
  - "$3x^2 - 4$"
  - "$3x^2 + 4$"
  - "$x^2 - 4$"
  - "$3x^2$"
correct: 0
hint: "Reguła potęgi: $(x^n)' = n \\cdot x^{n-1}$. Ponadto $(x^3)' = 3x^2$ i $(-4x)' = -4$."
tests:
  derivative: 1.0
---
Pochodna funkcji $f(x) = x^3 - 4x$ wynosi:`,R4=`---
options:
  - "$\\cos x$"
  - "$-\\cos x$"
  - "$-\\sin x$"
  - "$\\sin x$"
correct: 0
hint: "Podstawowa reguła: $(\\sin x)' = \\cos x$."
tests:
  derivative: 1.0
---
Pochodna funkcji $f(x) = \\sin x$ wynosi:`,D4=`---
options:
  - "$6x^2 - 2$"
  - "$6x^2 + 2$"
  - "$2x^3 - 2x$"
  - "$6x - 2$"
correct: 0
hint: "$(2x^3)' = 6x^2$, $(-2x)' = -2$. Łącznie: $6x^2 - 2$."
tests:
  derivative: 1.0
---
Pochodna funkcji $f(x) = 2x^3 - 2x$ wynosi:`,E4=`---
options:
  - "5"
  - "10"
  - "2.5"
  - "0.5"
correct: 0
hint: "E(X) = n·p = 10·0.5 = 5."
tests:
  distributions: 1.0
  cond_prob: 0.5
  bernoulli: 0.5
---
W schemacie Bernoulliego z n=10, p=0.5, wartość oczekiwana wynosi:`,B4=`---
options:
  - "$np$"
  - "$np(1-p)$"
  - "$\\sqrt{np(1-p)}$"
  - "$\\frac{1}{np}$"
correct: 0
hint: "Wartość oczekiwana rozkładu dwumianowego $B(n,p)$: $E(X) = np$."
tests:
  distributions: 1.0
  cond_prob: 0.5
  bernoulli: 0.5
---
Wartość oczekiwana rozkładu dwumianowego $B(n, p)$ wynosi:`,N4=`---
options:
  - "Symetryczny dzwon wokół średniej"
  - "Wykładniczy wzrost"
  - "Jednostajny prostokąt"
  - "Asymetryczny skok w górę"
correct: 0
hint: "Rozkład normalny (Gaussa) ma charakterystyczny kształt dzwonu, symetryczny względem średniej $\\mu$."
tests:
  distributions: 1.0
  cond_prob: 0.5
  bernoulli: 0.5
---
Wykres rozkładu normalnego ma kształt:`,I4=`---
options:
  - "(x−2)(x−3)"
  - "(x+2)(x+3)"
  - "(x−1)(x−6)"
  - "(x−2)(x+3)"
correct: 0
hint: "Szukasz dwóch liczb, których suma = −5 i iloczyn = 6."
tests:
  factoring: 1.0
---
Rozkład na czynniki: x² − 5x + 6 =`,F4=`---
options:
  - "$(x-4)(x+2)$"
  - "$(x+4)(x-2)$"
  - "$(x-4)(x-2)$"
  - "$(x+4)(x+2)$"
correct: 0
hint: "Szukasz dwóch liczb o sumie $-2$ i iloczynie $-8$: to $-4$ i $2$."
tests:
  factoring: 1.0
---
Rozłóż na czynniki: $x^2 - 2x - 8 =$`,L4=`---
options:
  - "$2x(x - 3)$"
  - "$2(x^2 - 3)$"
  - "$x(2x - 3)$"
  - "$2x^2 - 6x$"
correct: 0
hint: "Wyłącz wspólny czynnik $2x$: $2x^2 - 6x = 2x(x - 3)$."
tests:
  factoring: 1.0
---
Rozłóż na czynniki: $2x^2 - 6x =$`,O4=`---
options:
  - "$(x - 5)(x + 5)$"
  - "$(x - 5)^2$"
  - "$(x + 5)^2$"
  - "$(x - 25)(x + 1)$"
correct: 0
hint: "Zastosuj wzór na różnicę kwadratów: $a^2 - b^2 = (a-b)(a+b)$."
tests:
  factoring: 1.0
---
Rozłóż na czynniki: $x^2 - 25 =$`,H4=`---
options:
  - "$(x + 3)^2$"
  - "$(x + 3)(x - 3)$"
  - "$(x + 9)(x + 1)$"
  - "$(x - 3)^2$"
correct: 0
hint: "Sprawdź, czy to kwadrat sumy: $x^2 + 6x + 9 = x^2 + 2 \\cdot 3 \\cdot x + 3^2 = (x+3)^2$."
tests:
  factoring: 1.0
---
Rozłóż na czynniki: $x^2 + 6x + 9 =$`,W4=`---
options:
  - "$(2x - 3)(2x + 3)$"
  - "$(4x - 9)(x + 1)$"
  - "$(2x - 3)^2$"
  - "$2(2x^2 - 4.5)$"
correct: 0
hint: "Zapisz jako różnicę kwadratów: $4x^2 - 9 = (2x)^2 - 3^2 = (2x-3)(2x+3)$."
tests:
  factoring: 1.0
  polynomials: 0.25
---
Rozłóż na czynniki: $4x^2 - 9 =$`,G4=`---
options:
  - "$3(x - 2)(x + 1)$"
  - "$3(x + 2)(x - 1)$"
  - "$(3x - 6)(x + 1)$"
  - "$(x - 2)(3x + 3)$"
correct: 0
hint: "Najpierw wyłącz $3$: $3(x^2 - x - 2)$. Potem rozłóż trójmian: $x^2 - x - 2 = (x-2)(x+1)$."
tests:
  factoring: 1.0
  polynomials: 0.25
---
Rozłóż na czynniki: $3x^2 - 3x - 6 =$`,U4=`---
options:
  - "$(x + 1)(x^2 + 3)$"
  - "$(x + 3)(x^2 + 1)$"
  - "$x(x^2 + x + 3)$"
  - "$(x + 1)(x^2 + x + 3)$"
correct: 0
hint: "Grupuj: $x^3 + x^2 + 3x + 3 = x^2(x+1) + 3(x+1) = (x+1)(x^2+3)$."
tests:
  factoring: 1.0
  polynomials: 0.25
---
Rozłóż przez grupowanie: $x^3 + x^2 + 3x + 3 =$`,V4=`---
options:
  - "$(3x + 1)(x + 2)$"
  - "$(3x + 2)(x + 1)$"
  - "$(3x - 1)(x - 2)$"
  - "$(x + 1)(3x - 2)$"
correct: 0
hint: "Szukasz rozkładu $3x^2 + 7x + 2$. Iloczyn $3 \\cdot 2 = 6$, suma $= 7$: to $6$ i $1$. Więc $3x^2 + 6x + x + 2 = 3x(x+2) + 1(x+2)$."
tests:
  factoring: 1.0
---
Rozłóż na czynniki: $3x^2 + 7x + 2 =$`,K4=`---
options:
  - "$(x - 1)(x^2 + x + 1)$"
  - "$(x - 1)(x^2 - x + 1)$"
  - "$(x + 1)(x^2 - x + 1)$"
  - "$(x - 1)^3$"
correct: 0
hint: "Zastosuj wzór na różnicę sześcianów: $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$."
tests:
  factoring: 1.0
  polynomials: 0.25
---
Rozłóż na czynniki: $x^3 - 1 =$`,Z4=`---
options:
  - "2x+2"
  - "2x+1"
  - "2x²+2"
  - "x+2"
correct: 0
hint: "f(g(x)) = f(x+1) = 2(x+1) = 2x+2."
tests:
  fn_compositions: 1.0
  fn_poly: 0.5
  fn_exp: 0.5
---
Jeśli f(x) = 2x i g(x) = x+1, to f(g(x)) =`,Q4=`---
options:
  - "$4x^2 - 1$"
  - "$2x^2 - 1$"
  - "$4x - 1$"
  - "$2x - 1$"
correct: 0
hint: "$(f \\circ g)(x) = f(g(x)) = f(2x) = (2x)^2 - 1 = 4x^2 - 1$."
tests:
  fn_compositions: 1.0
  fn_poly: 0.5
  fn_exp: 0.5
---
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(f \\circ g)(x)$:`,Y4=`---
options:
  - "$2x^2 - 2$"
  - "$4x^2 - 1$"
  - "$2x - 1$"
  - "$x^2 - 2$"
correct: 0
hint: "$(g \\circ f)(x) = g(f(x)) = g(x^2 - 1) = 2(x^2-1) = 2x^2 - 2$. Złożenia nie są przemienne!"
tests:
  fn_compositions: 1.0
  fn_poly: 0.5
  fn_exp: 0.5
---
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(g \\circ f)(x)$:`,X4=`---
options:
  - "{(1,2),(1,3),(2,4)}"
  - "{(1,2),(2,3),(3,4)}"
  - "{(1,1),(2,2),(3,3)}"
  - "{(1,2),(2,1)}"
correct: 0
hint: "Funkcja przypisuje każdemu argumentowi dokładnie jedną wartość. Para (1,2) i (1,3) — jeden argument, dwie wartości."
tests:
  fn_concept: 1.0
---
Która z poniższych relacji NIE jest funkcją?`,J4=`---
options:
  - "Każdemu argumentowi odpowiada dokładnie jedna wartość"
  - "Każdej wartości odpowiada dokładnie jeden argument"
  - "Funkcja musi być rosnąca"
  - "Dziedzina musi być zbiorem liczb rzeczywistych"
correct: 0
hint: "Funkcja to przyporządkowanie: każdemu $x$ z dziedziny odpowiada dokładnie jedno $f(x)$."
tests:
  fn_concept: 1.0
---
Funkcja to takie przyporządkowanie, że:`,e3=`---
options:
  - "$10$"
  - "$-10$"
  - "$7$"
  - "$5$"
correct: 0
hint: "Podstawiamy $x=3$: $f(3) = 2 \\cdot 3 + 4 = 6 + 4 = 10$."
tests:
  fn_concept: 1.0
---
Dana jest funkcja $f(x) = 2x + 4$. Oblicz $f(3)$:`,n3=`---
options:
  - "rosnąca na całej dziedzinie"
  - "malejąca na całej dziedzinie"
  - "stała"
  - "rosnąca tylko dla x > 0"
correct: 0
hint: "Podstawa 2 > 1, więc funkcja wykładnicza jest rosnąca."
tests:
  fn_exp: 1.0
  log_exp: 0.5
---
Funkcja f(x) = 2ˣ jest:`,t3=`---
options:
  - "Rosnąca dla $a > 1$, malejąca dla $0 < a < 1$"
  - "Zawsze rosnąca"
  - "Zawsze malejąca"
  - "Rosnąca dla $a < 0$"
correct: 0
hint: "$f(x) = a^x$: jeśli $a > 1$, funkcja rośnie; jeśli $0 < a < 1$, maleje."
tests:
  fn_exp: 1.0
  log_exp: 0.5
---
Funkcja wykładnicza $f(x) = a^x$ (dla $a > 0$, $a \\neq 1$) jest:`,r3=`---
options:
  - "$(0, 1)$"
  - "$(1, 0)$"
  - "$(0, 0)$"
  - "$(1, a)$"
correct: 0
hint: "Dla każdego $a \\neq 0$: $a^0 = 1$, więc wykres przecina oś $Oy$ w punkcie $(0, 1)$."
tests:
  fn_exp: 1.0
  log_exp: 0.5
---
Wykres funkcji $f(x) = a^x$ zawsze przechodzi przez punkt:`,i3=`---
options:
  - "$k > \\frac{3}{2}$"
  - "$k < \\frac{3}{2}$"
  - "$k > 1$"
  - "$k < 0$"
correct: 0
hint: "Funkcja liniowa jest malejąca gdy współczynnik kierunkowy $a < 0$, czyli $-2k + 3 < 0$."
tests:
  fn_linear: 1.0
  fn_concept: 0.5
---
Funkcja liniowa $f(x) = (-2k+3)x + k - 1$ jest malejąca gdy:`,o3=`---
options:
  - "Rosnąca"
  - "Malejąca"
  - "Stała"
  - "Parzysta"
correct: 0
hint: "Dla $f(x) = 2x - 1$ współczynnik kierunkowy $a = 2 > 0$, więc funkcja jest rosnąca."
tests:
  fn_linear: 1.0
  fn_concept: 0.5
---
Funkcja $f(x) = 2x - 1$ jest:`,s3=`---
options:
  - "$(0, -3)$ i $(3/2, 0)$"
  - "$(0, 3)$ i $(3/2, 0)$"
  - "$(0, -3)$ i $(-3/2, 0)$"
  - "$(3, 0)$ i $(0, 3/2)$"
correct: 0
hint: "Przecięcie z $Oy$: $x=0 \\Rightarrow f(0) = -3$. Z $Ox$: $2x-3=0 \\Rightarrow x = 3/2$."
tests:
  fn_linear: 1.0
  fn_concept: 0.5
---
Funkcja $f(x) = 2x - 3$ przecina osie układu współrzędnych w punktach:`,a3=`---
options:
  - "(2, +∞)"
  - "[2, +∞)"
  - "(−∞, 2)"
  - "R"
correct: 0
hint: "Logarytm wymaga argumentu dodatniego: x − 2 > 0."
tests:
  fn_log: 1.0
  log_exp: 0.5
---
Dziedzina funkcji f(x) = log(x − 2) to:`,l3=`---
options:
  - "$(1, 0)$"
  - "$(0, 1)$"
  - "$(0, 0)$"
  - "$(a, 1)$"
correct: 0
hint: "Dla każdej podstawy $a$: $\\log_a 1 = 0$, więc wykres przechodzi przez $(1, 0)$."
tests:
  fn_log: 1.0
  log_exp: 0.5
---
Wykres funkcji $f(x) = \\log_a x$ zawsze przechodzi przez punkt:`,c3=`---
options:
  - "$(0, +\\infty)$"
  - "$(-\\infty, +\\infty)$"
  - "$(1, +\\infty)$"
  - "$[0, +\\infty)$"
correct: 0
hint: "Logarytm jest określony tylko dla argumentów dodatnich: $\\log_a x$ istnieje $\\Leftrightarrow x > 0$."
tests:
  fn_log: 1.0
  log_exp: 0.5
---
Dziedzina funkcji $f(x) = \\log_a x$ to:`,u3=`---
options:
  - "3"
  - "1"
  - "2"
  - "0"
correct: 0
hint: "W(x) = x(x−1)(x+1). Trzy miejsca zerowe: 0, 1, −1."
tests:
  fn_poly: 1.0
  fn_quadratic: 0.5
  polynomials: 0.5
---
Wielomian W(x) = x³ − x ma ile miejsc zerowych?`,d3=`---
options:
  - "Parzysta"
  - "Nieparzysta"
  - "Ani parzysta, ani nieparzysta"
  - "Rosnąca"
correct: 0
hint: "$f(-x) = (-x)^4 + 2(-x)^2 = x^4 + 2x^2 = f(x)$, więc funkcja jest parzysta."
tests:
  fn_poly: 1.0
  fn_quadratic: 0.5
  polynomials: 0.5
---
Funkcja $f(x) = x^4 + 2x^2$ jest:`,p3=`---
options:
  - "Nieparzysta"
  - "Parzysta"
  - "Ani parzysta, ani nieparzysta"
  - "Stała"
correct: 0
hint: "$f(-x) = (-x)^3 = -x^3 = -f(x)$, więc funkcja jest nieparzysta."
tests:
  fn_poly: 1.0
  fn_quadratic: 0.5
  polynomials: 0.5
---
Funkcja $f(x) = x^3$ jest:`,m3=`---
options:
  - "(2, −1)"
  - "(−2, 1)"
  - "(2, 1)"
  - "(4, 3)"
correct: 0
hint: "p = −b/(2a) = 4/2 = 2, q = f(2) = 4 − 8 + 3 = −1."
tests:
  fn_quadratic: 1.0
  fn_concept: 0.25
---
Wierzchołek paraboli f(x) = x² − 4x + 3 ma współrzędne:`,f3=`---
options:
  - "$(1, -4)$"
  - "$(-1, -4)$"
  - "$(1, 4)$"
  - "$(2, 0)$"
correct: 0
hint: "Wierzchołek paraboli $f(x) = ax^2 + bx + c$: $p = -b/(2a) = 2/2 = 1$, $q = f(1) = 1 - 2 - 3 = -4$."
tests:
  fn_quadratic: 1.0
  fn_concept: 0.25
---
Wierzchołek paraboli $f(x) = x^2 - 2x - 3$ to:`,h3=`---
options:
  - "W górę (ramiona skierowane w górę)"
  - "W dół (ramiona skierowane w dół)"
  - "Jest pozioma"
  - "Nie jest parabolą"
correct: 0
hint: "Gdy $a > 0$, parabola ma ramiona skierowane w górę (minimum). Gdy $a < 0$ — w dół."
tests:
  fn_quadratic: 1.0
  fn_concept: 0.25
---
Funkcja $f(x) = 3x^2 - x + 1$ ma parabolę otwartą:`,g3=`---
options:
  - "$x = 3$"
  - "$x = -3$"
  - "$x = 6$"
  - "$x = -6$"
correct: 0
hint: "Oś symetrii paraboli $f(x) = ax^2 + bx + c$ to $x = -\\frac{b}{2a} = -\\frac{-6}{2} = 3$."
tests:
  fn_quadratic: 1.0
---
Oś symetrii paraboli $f(x) = x^2 - 6x + 5$ ma równanie:`,y3=`---
options:
  - "$\\langle -8, +\\infty)$"
  - "$(-\\infty, -8 \\rangle$"
  - "$\\langle 0, +\\infty)$"
  - "$(-\\infty, +\\infty)$"
correct: 0
hint: "Ramiona w górę ($a = 1 > 0$), minimum w wierzchołku. $p = 2$, $q = 4 - 8 - 4 = -8$. Zbiór wartości: $\\langle -8, +\\infty)$."
tests:
  fn_quadratic: 1.0
  fn_concept: 0.25
---
Zbiór wartości funkcji $f(x) = x^2 - 4x - 4$ to:`,v3=`---
options:
  - "$(3, 0)$ i $(-1, 0)$"
  - "$(0, 3)$ i $(0, -1)$"
  - "$(-3, 0)$ i $(1, 0)$"
  - "$(3, 0)$"
correct: 0
hint: "Miejsca zerowe: $x^2 - 2x - 3 = (x-3)(x+1) = 0$, więc $x = 3$ i $x = -1$. Punkty na osi $OX$ mają $y = 0$."
tests:
  fn_quadratic: 1.0
  quadratic_eq: 0.25
---
Parabola $f(x) = x^2 - 2x - 3$ przecina oś $OX$ w punktach:`,x3=`---
options:
  - "ramiona skierowane w dół, wierzchołek $(1, 4)$"
  - "ramiona skierowane w górę, wierzchołek $(1, 4)$"
  - "ramiona skierowane w dół, wierzchołek $(-1, 4)$"
  - "ramiona skierowane w dół, wierzchołek $(1, 2)$"
correct: 0
hint: "$a = -1 < 0$, więc ramiona w dół. Wierzchołek: $p = -\\frac{2}{-2} = 1$, $q = -(1) + 2 + 3 = 4$."
tests:
  fn_quadratic: 1.0
---
Funkcja $f(x) = -x^2 + 2x + 3$ ma:`,w3=`---
options:
  - "$f(x) = (x - 3)^2 + 1$"
  - "$f(x) = (x + 3)^2 + 1$"
  - "$f(x) = (x - 3)^2 - 1$"
  - "$f(x) = (x - 1)^2 + 3$"
correct: 0
hint: "Postać kanoniczna: $f(x) = a(x-p)^2 + q$. $p = \\frac{6}{2} = 3$, $q = 9 - 9 + 1 = 1$."
tests:
  fn_quadratic: 1.0
---
Postać kanoniczna funkcji $f(x) = x^2 - 6x + 10$ to:`,b3=`---
options:
  - "przesunięcie o wektor $[2, 3]$"
  - "przesunięcie o wektor $[-2, 3]$"
  - "przesunięcie o wektor $[2, -3]$"
  - "przesunięcie o wektor $[-2, -3]$"
correct: 0
hint: "Funkcja $g(x) = (x-2)^2 + 3$ to $f(x) = x^2$ przesunięta o $2$ w prawo i $3$ w górę, czyli o wektor $[2, 3]$."
tests:
  fn_quadratic: 1.0
  fn_concept: 0.25
---
Funkcja $g(x) = (x - 2)^2 + 3$ jest obrazem funkcji $f(x) = x^2$ przez:`,$3=`---
options:
  - "największa wartość to $7$"
  - "najmniejsza wartość to $7$"
  - "największa wartość to $3$"
  - "największa wartość to $-1$"
correct: 0
hint: "$a = -2 < 0$, więc funkcja ma maksimum w wierzchołku. $p = -\\frac{b}{2a} = \\frac{4}{4} = 1$, $q = -2 + 4 + 5 = 7$."
tests:
  fn_quadratic: 1.0
---
Funkcja $f(x) = -2x^2 + 4x + 5$ ma:`,_3=`---
options:
  - "π"
  - "2π"
  - "π/2"
  - "4π"
correct: 0
hint: "Podstawowy okres sin to 2π. Przy sin(2x) dzielisz przez 2: T = π."
tests:
  fn_trig: 1.0
  trig_formulas: 0.5
  trig_eq: 0.5
---
Okres funkcji f(x) = sin(2x) wynosi:`,k3=`---
options:
  - "$2\\pi$"
  - "$\\pi$"
  - "$\\frac{\\pi}{2}$"
  - "$4\\pi$"
correct: 0
hint: "Funkcje $\\sin$ i $\\cos$ mają okres $2\\pi$ (pełny obrót)."
tests:
  fn_trig: 1.0
  trig_formulas: 0.5
  trig_eq: 0.5
---
Okres funkcji $f(x) = \\sin x$ wynosi:`,z3=`---
options:
  - "$[-1, 1]$"
  - "$[0, 1]$"
  - "$\\mathbb{R}$"
  - "$[0, 2\\pi]$"
correct: 0
hint: "Zbiór wartości funkcji $\\sin x$ to $[-1, 1]$ — sinus jest zawsze między $-1$ a $1$."
tests:
  fn_trig: 1.0
  trig_formulas: 0.5
  trig_eq: 0.5
---
Zbiór wartości funkcji $f(x) = \\sin x$ to:`,S3=`---
options:
  - "3/4"
  - "9/12"
  - "4/5"
  - "7/9"
correct: 0
hint: "Dzielisz licznik i mianownik przez NWD(45,60) = 15."
tests:
  fractions: 1.0
---
Uproszczona postać ułamka 45/60 to:`,j3=`---
options:
  - "$\\frac{7}{12}$"
  - "$\\frac{7}{6}$"
  - "$\\frac{2}{6}$"
  - "$\\frac{5}{12}$"
correct: 0
hint: "Wspólny mianownik to 12: $\\frac{1}{4} = \\frac{3}{12}$, $\\frac{1}{3} = \\frac{4}{12}$. Suma: $\\frac{7}{12}$."
tests:
  fractions: 1.0
---
Oblicz: $\\dfrac{1}{4} + \\dfrac{1}{3} =$`,q3=`---
options:
  - "$\\frac{3}{8}$"
  - "$\\frac{6}{8}$"
  - "$\\frac{2}{5}$"
  - "$\\frac{1}{4}$"
correct: 0
hint: "Mnożenie ułamków: licznik przez licznik, mianownik przez mianownik. $\\frac{3}{4} \\cdot \\frac{1}{2} = \\frac{3}{8}$."
tests:
  fractions: 1.0
---
Oblicz: $\\dfrac{3}{4} \\cdot \\dfrac{1}{2} =$`,T3=`---
options:
  - "9"
  - "6"
  - "18"
  - "3"
correct: 0
hint: "S = a₁/(1−q) = 6/(1−1/3) = 6/(2/3) = 9."
tests:
  geo_series: 1.0
  arith_geom: 0.5
---
Suma nieskończonego szeregu geometrycznego a₁=6, q=1/3 wynosi:`,A3=`---
options:
  - "$\\frac{a_1}{1 - q}$"
  - "$\\frac{a_1}{1 + q}$"
  - "$a_1 \\cdot q$"
  - "$\\frac{a_1 q}{1-q}$"
correct: 0
hint: "Suma nieskończonego szeregu geometrycznego (dla $|q| < 1$): $S = \\frac{a_1}{1-q}$."
tests:
  geo_series: 1.0
  arith_geom: 0.5
---
Suma nieskończonego szeregu geometrycznego ($|q| < 1$) wynosi:`,M3=`---
options:
  - "$2$"
  - "$1$"
  - "$4$"
  - "Szereg rozbieżny"
correct: 0
hint: "$a_1 = 1$, $q = \\frac{1}{2}$. $S = \\frac{1}{1 - \\frac{1}{2}} = \\frac{1}{\\frac{1}{2}} = 2$."
tests:
  geo_series: 1.0
  arith_geom: 0.5
---
Suma szeregu $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots$ wynosi:`,P3=`---
options:
  - "14"
  - "28"
  - "7"
  - "42"
correct: 1
hint: "Rozkładasz na czynniki pierwsze: 84 = 4·21, 56 = 8·7."
tests:
  integers: 1.0
---
Ile wynosi NWD(84, 56)?`,C3=`---
options:
  - "$-12$"
  - "$12$"
  - "$-4$"
  - "$4$"
correct: 0
hint: "Minus razy plus to minus. $(-3) \\cdot 4 = -12$."
tests:
  integers: 1.0
---
Oblicz: $(-3) \\cdot 4 =$`,R3=`---
options:
  - "$-5$"
  - "$5$"
  - "$-15$"
  - "$15$"
correct: 0
hint: "Odejmowanie to dodawanie liczby przeciwnej: $3 - 8 = 3 + (-8) = -5$."
tests:
  integers: 1.0
---
Oblicz: $3 - 8 =$`,D3=`---
options:
  - "$x^2 + C$"
  - "$2 + C$"
  - "$x + C$"
  - "$2x^2 + C$"
correct: 0
hint: "$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$. Dla $n = 1$: $\\int x \\, dx = \\frac{x^2}{2} + C$ — uwaga, to $\\int 2x \\, dx = x^2 + C$."
tests:
  integral: 1.0
  derivative: 0.5
---
$\\displaystyle \\int 2x \\, dx =$`,E3=`---
options:
  - "$\\frac{x^3}{3} + C$"
  - "$2x + C$"
  - "$x^3 + C$"
  - "$\\frac{x^2}{2} + C$"
correct: 0
hint: "$\\int x^2\\,dx = \\frac{x^{2+1}}{2+1} + C = \\frac{x^3}{3} + C$."
tests:
  integral: 1.0
  derivative: 0.5
---
Oblicz całkę: $\\displaystyle\\int x^2\\,dx$`,B3=`---
options:
  - "$\\frac{9}{2}$"
  - "$9$"
  - "$3$"
  - "$\\frac{3}{2}$"
correct: 0
hint: "$\\int_0^3 x\\,dx = \\left[\\frac{x^2}{2}\\right]_0^3 = \\frac{9}{2} - 0 = \\frac{9}{2}$."
tests:
  integral: 1.0
  derivative: 0.5
---
Oblicz całkę oznaczoną: $\\displaystyle\\int_0^3 x\\,dx$`,N3=`---
options:
  - "$3$"
  - "$1$"
  - "$\\infty$"
  - "$0$"
correct: 0
hint: "Dzielimy licznik i mianownik przez $x^2$. Wyrazy $\\frac{1}{x^2}$ i $\\frac{5}{x^2}$ dążą do $0$."
tests:
  limits: 1.0
  fn_poly: 0.25
---
Granica $\\displaystyle \\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 - 5}$ wynosi:`,I3=`---
options:
  - "$1$"
  - "$0$"
  - "$\\infty$"
  - "$-1$"
correct: 0
hint: "$\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1$ — to ważna granica (granica Eulera)."
tests:
  limits: 1.0
  fn_trig: 0.25
---
Oblicz granicę: $\\displaystyle\\lim_{x\\to 0} \\frac{\\sin x}{x}$`,F3=`---
options:
  - "$5$"
  - "$0$"
  - "$\\infty$"
  - "$\\frac{5}{3}$"
correct: 0
hint: "Podziel przez $x^2$: $\\frac{5x^2-1}{x^2+3} = \\frac{5 - 1/x^2}{1 + 3/x^2} \\to \\frac{5}{1} = 5$."
tests:
  limits: 1.0
  fn_poly: 0.25
---
Oblicz granicę: $\\displaystyle\\lim_{x\\to\\infty} \\frac{5x^2 - 1}{x^2 + 3}$`,L3=`---
options:
  - "$x = 5$"
  - "$x = 2$"
  - "$x = -2$"
  - "$x = 7$"
correct: 0
hint: "$2x - 3 = 7 \\Rightarrow 2x = 10 \\Rightarrow x = 5$."
tests:
  linear_eq: 1.0
---
Rozwiązaniem równania $2x - 3 = 7$ jest:`,O3=`---
options:
  - "$x = 4$"
  - "$x = -4$"
  - "$x = 2$"
  - "$x = 8$"
correct: 0
hint: "$3x = 12$, więc $x = 4$."
tests:
  linear_eq: 1.0
---
Rozwiąż równanie: $3x - 2 = 10$`,H3=`---
options:
  - "$x = -3$"
  - "$x = 3$"
  - "$x = 1$"
  - "$x = -1$"
correct: 0
hint: "$2x + 8 = 2$, więc $2x = -6$, $x = -3$."
tests:
  linear_eq: 1.0
---
Rozwiąż równanie: $2(x + 4) = 2$`,W3=`---
options:
  - "(2/3, +∞)"
  - "(−∞, 2/3)"
  - "(−2/3, +∞)"
  - "(−∞, −2/3)"
correct: 0
hint: "Mnożysz obie strony przez 6, potem przenosisz x na lewą stronę."
tests:
  linear_ineq: 1.0
  linear_eq: 0.25
---
Zbiór rozwiązań nierówności 1 − (3/2)x < 2/3 − x to przedział:`,G3=`---
options:
  - "$x > 3$"
  - "$x < 3$"
  - "$x > -3$"
  - "$x \\geq 3$"
correct: 0
hint: "Dodaj 1 do obu stron: $2x > 6$, dziel przez 2: $x > 3$."
tests:
  linear_ineq: 1.0
  linear_eq: 0.25
---
Rozwiąż nierówność: $2x - 1 > 5$`,U3=`---
options:
  - "$x \\geq -2$"
  - "$x \\leq -2$"
  - "$x \\geq 2$"
  - "$x \\leq 2$"
correct: 0
hint: "Przy dzieleniu przez liczbę ujemną odwracamy znak: $-3x \\leq 6 \\Rightarrow x \\geq -2$."
tests:
  linear_ineq: 1.0
  linear_eq: 0.5
---
Rozwiąż nierówność: $-3x \\leq 6$`,V3=`---
options:
  - "x=3, y=2"
  - "x=2, y=3"
  - "x=4, y=1"
  - "x=1, y=4"
correct: 0
hint: "Dodajesz równania: 2x = 6, x = 3."
tests:
  linear_sys: 1.0
  linear_eq: 0.5
---
Układ { x+y=5, x−y=1 } ma rozwiązanie:`,K3=`---
options:
  - "$x = 1,\\ y = 2$"
  - "$x = 2,\\ y = 1$"
  - "$x = -1,\\ y = 2$"
  - "$x = 1,\\ y = -2$"
correct: 0
hint: "Z drugiego równania $y = 2x$. Podstaw do pierwszego: $x + 2x = 3$, $3x = 3$, $x = 1$, $y = 2$."
tests:
  linear_sys: 1.0
  linear_eq: 0.5
---
Rozwiąż układ: $\\begin{cases} x + y = 3 \\\\ y = 2x \\end{cases}$`,Z3=`---
options:
  - "$x = 3,\\ y = -1$"
  - "$x = 1,\\ y = 3$"
  - "$x = -3,\\ y = 1$"
  - "$x = 2,\\ y = 0$"
correct: 0
hint: "Odejmij równania: $(2x + y) - (x + y) = 5 - 2$, więc $x = 3$. Potem $y = 2 - 3 = -1$."
tests:
  linear_sys: 1.0
  linear_eq: 0.5
---
Rozwiąż układ: $\\begin{cases} 2x + y = 5 \\\\ x + y = 2 \\end{cases}$`,Q3=`---
options:
  - "x = 8"
  - "x = 6"
  - "x = 9"
  - "x = 4"
correct: 0
hint: "log₂(x) = 3 ⟺ x = 2³ = 8."
tests:
  log_eq: 1.0
  log_exp: 0.5
---
Rozwiązaniem równania log₂(x) = 3 jest:`,Y3=`---
options:
  - "$x = 9$"
  - "$x = 3$"
  - "$x = 27$"
  - "$x = 81$"
correct: 0
hint: "$\\log_3 x = 2 \\Leftrightarrow x = 3^2 = 9$."
tests:
  log_eq: 1.0
  log_exp: 0.5
---
Rozwiąż równanie: $\\log_3 x = 2$`,X3=`---
options:
  - "$x = 4$"
  - "$x = 2$"
  - "$x = 8$"
  - "$x = 16$"
correct: 0
hint: "$2^x = 16 = 2^4$, więc $x = 4$."
tests:
  log_eq: 1.0
  log_exp: 0.5
---
Rozwiąż równanie: $2^x = 16$`,J3=`---
options:
  - "$2$"
  - "$3$"
  - "$4$"
  - "$9$"
correct: 2
hint: "$(\\sqrt{3})^x = 9$, czyli $3^{x/2} = 3^2$, więc $\\frac{x}{2} = 2$ i $x = 4$."
tests:
  log_exp: 1.0
  powers: 0.5
---
Wartość $\\log_{\\sqrt{3}} 9$ jest równa:`,e5=`---
options:
  - "$3$"
  - "$8$"
  - "$\\frac{1}{3}$"
  - "$27$"
correct: 0
hint: "$\\log_2 8 = x \\Leftrightarrow 2^x = 8 = 2^3$, więc $x = 3$."
tests:
  log_exp: 1.0
  powers: 0.5
---
Oblicz: $\\log_2 8 =$`,n5=`---
options:
  - "$\\log_a x + \\log_a y$"
  - "$\\log_a x \\cdot \\log_a y$"
  - "$\\log_a (x + y)$"
  - "$\\log_a x - \\log_a y$"
correct: 0
hint: "Własność logarytmu: $\\log_a(xy) = \\log_a x + \\log_a y$."
tests:
  log_exp: 1.0
  powers: 0.5
---
Które wyrażenie jest równe $\\log_a(xy)$?`,t5=`---
options:
  - "Istnieje liczba parzysta, która nie dzieli się przez 4"
  - "Żadna liczba parzysta nie dzieli się przez 4"
  - "Wszystkie liczby nieparzyste dzielą się przez 4"
  - "Istnieje liczba nieparzysta dzieląca się przez 4"
correct: 0
hint: "Negacja ∀x: P(x) to ∃x: ¬P(x)."
tests:
  logic_basics: 1.0
  sets: 0.5
---
Negacja zdania "Wszystkie liczby parzyste dzielą się przez 4" to:`,r5=`---
options:
  - "Fałsz"
  - "Prawda"
  - "Zależy od $p$"
  - "Niezdefiniowane"
correct: 0
hint: "Koniunkcja $p \\wedge q$ jest prawdziwa tylko gdy obie zdania są prawdziwe. Jeśli $q$ jest fałszywe, wynik to fałsz."
tests:
  logic_basics: 1.0
  sets: 0.5
---
Jeśli zdanie $q$ jest fałszywe, to koniunkcja $p \\wedge q$ jest:`,i5=`---
options:
  - "Prawda"
  - "Fałsz"
  - "Zależy od $p$"
  - "Niezdefiniowane"
correct: 0
hint: "Alternatywa $p \\vee q$ jest fałszywa tylko gdy oba zdania są fałszywe. Jeśli $p$ jest prawdziwe, wynik to prawda."
tests:
  logic_basics: 1.0
  sets: 0.5
---
Jeśli zdanie $p$ jest prawdziwe, to alternatywa $p \\vee q$ jest:`,o5=`---
options:
  - "jest kwadratem o boku 5"
  - "ma boki 2 i 8"
  - "ma boki 4 i 6"
  - "jest kwadratem o boku 10"
correct: 0
hint: "x + y = 10. Pole P = x·y maksymalne dla x=y=5 (wierzchołek paraboli)."
tests:
  optimization_lp: 1.0
  fn_quadratic: 0.5
---
Prostokąt o obwodzie 20 ma największe pole gdy:`,s5=`---
options:
  - "$x = 3$"
  - "$x = -3$"
  - "$x = 0$"
  - "$x = 6$"
correct: 0
hint: "Minimum paraboli $f(x) = (x-3)^2 + 2$ jest w wierzchołku $x = 3$."
tests:
  optimization_lp: 1.0
  fn_quadratic: 0.5
---
Funkcja $f(x) = (x-3)^2 + 2$ osiąga minimum dla:`,a5=`---
options:
  - "$25$"
  - "$20$"
  - "$30$"
  - "$50$"
correct: 0
hint: "Suma $x + y = 10$, więc $y = 10-x$. Iloczyn $P = x(10-x) = 10x - x^2$. Maksimum w $x=5$: $P = 25$."
tests:
  optimization_lp: 1.0
  fn_quadratic: 0.5
---
Dwie liczby sumują się do $10$. Maksymalny iloczyn tych liczb wynosi:`,l5=`---
options:
  - "$25$ m"
  - "$20$ m"
  - "$30$ m"
  - "$50$ m"
correct: 0
hint: "Niech długość przy ścianie to $x$. Drugi bok: $y = \\frac{50 - x}{2}$. Pole: $P = x \\cdot \\frac{50 - x}{2} = -\\frac{x^2}{2} + 25x$. Maksimum dla $x = 25$."
tests:
  optimization_lp: 1.0
  fn_quadratic: 0.5
---
Rolnik ma $50$ m ogrodzenia i chce ogrodzić prostokątny wybieg przy ścianie stodoły (jedna strona nie wymaga ogrodzenia). Jaką długość powinna mieć strona przy ścianie, aby pole wybiegu było największe?`,c5=`---
options:
  - "$45$ m"
  - "$40$ m"
  - "$50$ m"
  - "$44$ m"
correct: 0
hint: "Wysokość: $h(t) = -5t^2 + 30t$. Wierzchołek: $t = -\\frac{30}{-10} = 3$. Maks. wysokość: $h(3) = -45 + 90 = 45$ m."
tests:
  optimization_lp: 1.0
  fn_quadratic: 0.5
---
Piłkę wyrzucono pionowo w górę. Jej wysokość (w metrach) po $t$ sekundach opisuje wzór $h(t) = -5t^2 + 30t$. Jaka jest maksymalna wysokość piłki?`,u5=`---
options:
  - "$2500$ zł"
  - "$2000$ zł"
  - "$3000$ zł"
  - "$2400$ zł"
correct: 0
hint: "Przychód: $P(x) = x \\cdot (100 - x) = -x^2 + 100x$. Wierzchołek: $x = 50$. $P(50) = 50 \\cdot 50 = 2500$ zł."
tests:
  optimization_lp: 1.0
  fn_quadratic: 0.5
---
Sklep sprzedaje produkt w cenie $x$ zł za sztukę. Liczba sprzedanych sztuk wynosi $(100 - x)$. Przy jakiej cenie przychód jest największy i ile wynosi?`,d5=`---
options:
  - "$8$ i $8$"
  - "$6$ i $10$"
  - "$4$ i $12$"
  - "$7$ i $9$"
correct: 0
hint: "Niech liczby to $x$ i $16 - x$. Iloczyn: $P(x) = x(16-x) = -x^2 + 16x$. Maksimum w $x = 8$. Druga liczba: $16 - 8 = 8$."
tests:
  optimization_lp: 1.0
  fn_quadratic: 0.5
---
Suma dwóch liczb nieujemnych wynosi $16$. Iloczyn tych liczb jest największy, gdy te liczby to:`,p5=`---
options:
  - "$-3$"
  - "$3$"
  - "$-5$"
  - "$1$"
correct: 0
hint: "Współczynnik $a = 2 > 0$, więc funkcja ma minimum. $p = -\\frac{-4}{4} = 1$, $q = 2 - 4 - 1 = -3$. Najmniejsza wartość to $-3$."
tests:
  optimization_lp: 1.0
  fn_quadratic: 0.5
---
Najmniejsza wartość funkcji $f(x) = 2x^2 - 4x - 1$ wynosi:`,m5=`---
options:
  - "$k \\leq 0 \\lor k \\geq 1$"
  - "$0 < k < 1$"
  - "$k < 0 \\lor k > 1$"
  - "$k = 0 \\lor k = 1$"
correct: 0
hint: "$\\Delta = (2k)^2 - 4k = 4k^2 - 4k \\geq 0$, czyli $k(k-1) \\geq 0$, co zachodzi dla $k \\leq 0$ lub $k \\geq 1$."
tests:
  param_eq: 1.0
  quadratic_eq: 0.5
  quadratic_ineq: 0.5
---
Równanie $x^2 - 2kx + k = 0$ ma dwa pierwiastki rzeczywiste gdy:`,f5=`---
options:
  - "$k = 0$ lub $k = 4$"
  - "$k = 2$"
  - "$k \\in \\mathbb{R}$"
  - "Brak rozwiązań"
correct: 0
hint: "$\\Delta = 0$: $4k^2 - 4k \\cdot 4 = 0 \\Rightarrow 4k(k-4) = 0 \\Rightarrow k=0$ lub $k=4$."
tests:
  param_eq: 1.0
  quadratic_eq: 0.5
  quadratic_ineq: 0.5
---
Równanie $x^2 - 2kx + 4k = 0$ ma jedno podwójne rozwiązanie dla:`,h5=`---
options:
  - "$m < -2$ lub $m > 2$"
  - "$-2 < m < 2$"
  - "$m = \\pm 2$"
  - "$m \\in \\mathbb{R}$"
correct: 0
hint: "$\\Delta > 0$: $4m^2 - 4 \\cdot 1 \\cdot 4 > 0 \\Rightarrow m^2 > 4 \\Rightarrow |m| > 2$."
tests:
  param_eq: 1.0
  quadratic_eq: 0.5
  quadratic_ineq: 0.5
---
Równanie $x^2 + 2mx + 4 = 0$ ma dwa różne rozwiązania rzeczywiste gdy:`,g5=`---
options:
  - "24"
  - "12"
  - "16"
  - "10"
correct: 0
hint: "P₄ = 4! = 24."
tests:
  permutations: 1.0
  counting: 0.5
---
Liczba permutacji zbioru {A, B, C, D} wynosi:`,y5=`---
options:
  - "$24$"
  - "$12$"
  - "$6$"
  - "$120$"
correct: 0
hint: "$4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$."
tests:
  permutations: 1.0
  counting: 0.5
---
Na ile sposobów można ustawić 4 osoby w rzędzie?`,v5=`---
options:
  - "$60$"
  - "$120$"
  - "$20$"
  - "$30$"
correct: 0
hint: "$P_5 / n_A! = 5! / 2! = 120 / 2 = 60$. Słowo ABCDA ma 5 liter, A powtarza się 2 razy."
tests:
  permutations: 1.0
  counting: 0.5
---
Na ile sposobów można ułożyć litery słowa ABCDA (5 liter, A powtarza się 2 razy)?`,x5=`---
options:
  - "120"
  - "60"
  - "720"
  - "24"
correct: 0
hint: "Permutacje 5 elementów: $5! = 120$."
tests:
  permutations: 1.0
  counting: 0.5
---
Na ile sposobów można ustawić 5 różnych książek na półce?`,w5=`---
options:
  - "60"
  - "120"
  - "30"
  - "20"
correct: 0
hint: "Wyraz MAMA ma 4 litery, w tym M powtarza się 2 razy i A powtarza się 2 razy. Permutacje z powtórzeniami: $\\frac{4!}{2! \\cdot 2!} = 6$. Ale tu mamy KOTEK — 5 liter, K powtarza się 2 razy: $\\frac{5!}{2!} = 60$."
tests:
  permutations: 1.0
  counting: 0.5
---
Ile różnych „słów" (ciągów liter) można utworzyć ze wszystkich liter wyrazu KOTEK?`,b5=`---
options:
  - "60"
  - "120"
  - "20"
  - "10"
correct: 0
hint: "Wybieramy 3 osoby z 5 na różne stanowiska (kolejność ma znaczenie): $V_3^5 = \\frac{5!}{(5-3)!} = 60$."
tests:
  permutations: 1.0
  counting: 0.5
---
Z 5 kandydatów wybieramy przewodniczącego, zastępcę i sekretarza. Na ile sposobów?`,$5=`---
options:
  - "151200"
  - "3628800"
  - "30240"
  - "75600"
correct: 0
hint: "MATEMATYKA ma 10 liter: M×2, A×3, T×2, E×1, Y×1, K×1. Permutacje z powtórzeniami: $\\frac{10!}{2! \\cdot 3! \\cdot 2!} = 151200$."
tests:
  permutations: 1.0
  counting: 0.5
---
Ile anagramów (różnych ciągów liter) można utworzyć ze wszystkich liter wyrazu MATEMATYKA?`,_5=`---
options:
  - "48"
  - "120"
  - "24"
  - "72"
correct: 0
hint: "Traktujemy parę jako jeden blok: $4! = 24$ ustawień bloków, a para może zamienić się miejscami na $2!$ sposobów. Razem $24 \\cdot 2 = 48$."
tests:
  permutations: 1.0
  counting: 0.5
---
Na ile sposobów można ustawić w rzędzie 5 osób, jeśli dwie konkretne osoby muszą stać obok siebie?`,k5=`---
options:
  - "90°"
  - "45°"
  - "60°"
  - "180°"
correct: 0
hint: "Twierdzenie Talesa: każdy kąt wpisany oparty na średnicy jest kątem prostym."
tests:
  planimetria_lp: 1.0
---
Kąt wpisany w okrąg oparty na średnicy mierzy:`,z5=`---
options:
  - "$180°$"
  - "$360°$"
  - "$90°$"
  - "$270°$"
correct: 0
hint: "Suma kątów wewnętrznych trójkąta zawsze równa się $180°$."
tests:
  planimetria_lp: 1.0
---
Suma kątów wewnętrznych trójkąta wynosi:`,S5=`---
options:
  - "$P = \\frac{a \\cdot h}{2}$"
  - "$P = a \\cdot h$"
  - "$P = \\frac{a + h}{2}$"
  - "$P = a^2$"
correct: 0
hint: "Pole trójkąta = $\\frac{1}{2} \\cdot \\text{podstawa} \\cdot \\text{wysokość}$."
tests:
  planimetria_lp: 1.0
---
Pole trójkąta o podstawie $a$ i wysokości $h$ wynosi:`,j5=`---
options:
  - "W(2) = 0"
  - "W(2) = 4"
  - "W(2) = 2"
  - "W(0) = 0"
correct: 0
hint: "Podstaw x=2: 8 − 8 − 6 + 6 = 0."
tests:
  poly_roots: 1.0
  polynomials: 0.5
  factoring: 0.5
---
Liczba x = 2 jest pierwiastkiem wielomianu W(x) = x³ − 2x² − 3x + 6, bo:`,q5=`---
options:
  - "Tak, bo $2^3 - 4 \\cdot 2 = 0$"
  - "Nie, bo $2^3 - 4 \\cdot 2 \\neq 0$"
  - "Tak, bo stopień wielomianu to $3$"
  - "Nie, bo wielomian ma zawsze 3 pierwiastki"
correct: 0
hint: "$p(2) = 8 - 8 = 0$, więc $x=2$ jest pierwiastkiem."
tests:
  poly_roots: 1.0
  polynomials: 0.5
  factoring: 0.5
---
Czy $x = 2$ jest pierwiastkiem wielomianu $p(x) = x^3 - 4x$?`,T5=`---
options:
  - "Co najwyżej $n$ pierwiastków"
  - "Dokładnie $n$ pierwiastków"
  - "Zawsze nieskończenie wiele"
  - "Co najmniej $1$ pierwiastek"
correct: 0
hint: "Wielomian stopnia $n$ ma co najwyżej $n$ pierwiastków rzeczywistych (może mieć mniej lub zero)."
tests:
  poly_roots: 1.0
  polynomials: 0.5
  factoring: 0.5
---
Wielomian stopnia $n$ ma:`,A5=`---
options:
  - "3x(x² + 2x + 3)"
  - "3(x³ + 2x + 3)"
  - "x(3x² + 6x)"
  - "3x²(x + 2)"
correct: 0
hint: "Wyłącz przed nawias 3x z każdego wyrazu."
tests:
  polynomials: 1.0
---
Wielomian W(x) = 3x³ + 6x² + 9x można zapisać jako:`,M5=`---
options:
  - "$3$"
  - "$2$"
  - "$4$"
  - "$1$"
correct: 0
hint: "Stopień wielomianu to najwyższy wykładnik. W $2x^3 + x - 5$ najwyższy to $3$."
tests:
  polynomials: 1.0
---
Stopień wielomianu $2x^3 + x - 5$ wynosi:`,P5=`---
options:
  - "$x^2 + 3x + 2$"
  - "$x^2 - 3x + 2$"
  - "$x^2 + x + 2$"
  - "$x^2 + 3x - 2$"
correct: 0
hint: "$(x+1)(x+2) = x^2 + 2x + x + 2 = x^2 + 3x + 2$."
tests:
  polynomials: 1.0
---
Rozwiń: $(x + 1)(x + 2) =$`,C5=`---
options:
  - "$2x^2 + 5x - 3$"
  - "$2x^2 + 5x + 3$"
  - "$2x^2 - 5x - 3$"
  - "$2x^2 + x - 3$"
correct: 0
hint: "$(2x-1)(x+3) = 2x^2 + 6x - x - 3 = 2x^2 + 5x - 3$."
tests:
  polynomials: 1.0
---
Rozwiń: $(2x - 1)(x + 3) =$`,R5=`---
options:
  - "$5$"
  - "$4$"
  - "$6$"
  - "$3$"
correct: 0
hint: "Stopień wielomianu to najwyższa potęga zmiennej. Tutaj najwyższy wykładnik to $5$."
tests:
  polynomials: 1.0
---
Jaki jest stopień wielomianu $W(x) = x^5 - 3x^3 + 2x - 7$?`,D5=`---
options:
  - "$6$"
  - "$14$"
  - "$-2$"
  - "$10$"
correct: 0
hint: "Podstaw $x = 2$: $W(2) = 2 \\cdot 8 - 3 \\cdot 4 + 2 \\cdot 2 - 2 = 16 - 12 + 4 - 2 = 6$."
tests:
  polynomials: 1.0
---
Oblicz wartość wielomianu $W(x) = 2x^3 - 3x^2 + 2x - 2$ dla $x = 2$.`,E5=`---
options:
  - "$x^2 + 2x + 3$"
  - "$x^2 + 2x - 3$"
  - "$x^2 + x + 3$"
  - "$x^2 - 2x + 3$"
correct: 0
hint: "Podziel $x^3 + 4x^2 + 7x + 6$ przez $(x + 2)$ schematem Hornera lub dzieleniem pisemnym."
tests:
  polynomials: 1.0
---
Iloraz $\\frac{x^3 + 4x^2 + 7x + 6}{x + 2}$ jest równy:`,B5=`---
options:
  - "$x^4 - 2x^3 + x^2 + 2x - 2$"
  - "$x^4 + 2x^3 + x^2 + 2x - 2$"
  - "$x^4 - 2x^3 - x^2 + 2x - 2$"
  - "$x^4 - 2x^3 + x^2 - 2x - 2$"
correct: 0
hint: "Dodaj odpowiednie wyrazy: $(x^4 - 3x^2 + 1) + (-2x^3 + 4x^2 + 2x - 3)$. Grupuj wyrazy o tych samych potęgach."
tests:
  polynomials: 1.0
---
Suma wielomianów $P(x) = x^4 - 3x^2 + 1$ i $Q(x) = -2x^3 + 4x^2 + 2x - 3$ wynosi:`,N5=`---
options:
  - "$x^3 + 3x^2 + 3x + 1$"
  - "$x^3 + 3x^2 + x + 1$"
  - "$x^3 + x^2 + 3x + 1$"
  - "$x^3 + 3x + 1$"
correct: 0
hint: "Skorzystaj ze wzoru skróconego mnożenia: $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$."
tests:
  polynomials: 1.0
---
Rozwiń $(x + 1)^3 =$`,I5=`---
options:
  - "$4$"
  - "$3$"
  - "$5$"
  - "$6$"
correct: 0
hint: "Mnożenie wielomianów: stopień iloczynu to suma stopni czynników, czyli $1 + 3 = 4$."
tests:
  polynomials: 1.0
---
Wielomian $P(x)$ ma stopień $1$, a wielomian $Q(x)$ ma stopień $3$. Jaki jest stopień wielomianu $P(x) \\cdot Q(x)$?`,F5=`---
options:
  - "$2^{24}$"
  - "$2^{16}$"
  - "$2^{12}$"
  - "$2^8$"
correct: 1
hint: "$\\frac{1}{16} = 2^{-4}$, więc $(\\frac{1}{16})^8 = 2^{-32}$. Ponadto $8 = 2^3$, więc $8^{16} = 2^{48}$. Razem: $2^{-32} \\cdot 2^{48} = 2^{16}$."
tests:
  powers: 1.0
---
Wartość wyrażenia $(\\frac{1}{16})^8 \\cdot 8^{16}$ jest równa:`,L5=`---
options:
  - "$8$"
  - "$6$"
  - "$9$"
  - "$4$"
correct: 0
hint: "$2^3 = 2 \\cdot 2 \\cdot 2 = 8$."
tests:
  powers: 1.0
---
Oblicz: $2^3 =$`,O5=`---
options:
  - "$a^5$"
  - "$a^6$"
  - "$a^2$"
  - "$2a^3$"
correct: 0
hint: "Przy mnożeniu potęg o tej samej podstawie dodajemy wykładniki: $a^2 \\cdot a^3 = a^{2+3} = a^5$."
tests:
  powers: 1.0
---
Uprość: $a^2 \\cdot a^3 =$`,H5=`---
options:
  - "1/2"
  - "1/3"
  - "2/3"
  - "1/6"
correct: 0
hint: "Parzyste: {2,4,6}. P = 3/6 = 1/2."
tests:
  probability: 1.0
  counting: 0.25
---
Rzucamy kostką sześcienną. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:`,W5=`---
options:
  - "$\\frac{1}{2}$"
  - "$\\frac{1}{6}$"
  - "$\\frac{1}{3}$"
  - "$\\frac{2}{3}$"
correct: 0
hint: "Prawa liczb parzystych na kostce: 2, 4, 6 — to 3 z 6 możliwych wyników. $P = \\frac{3}{6} = \\frac{1}{2}$."
tests:
  probability: 1.0
  counting: 0.25
---
Rzucamy kostką do gry. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:`,G5=`---
options:
  - "$\\frac{1}{4}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{3}{4}$"
  - "$1$"
correct: 0
hint: "Zdarzenia niezależne: $P(A \\cap B) = P(A) \\cdot P(B) = \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$."
tests:
  probability: 1.0
  counting: 0.25
---
Rzucamy monetą dwa razy. Prawdopodobieństwo wyrzucenia dwóch orłów wynosi:`,U5=`---
options:
  - "$\\frac{1}{13}$"
  - "$\\frac{1}{52}$"
  - "$\\frac{4}{13}$"
  - "$\\frac{1}{4}$"
correct: 0
hint: "W talii 52 kart są 4 asy. $P = \\frac{4}{52} = \\frac{1}{13}$."
tests:
  probability: 1.0
  counting: 0.25
---
Z talii 52 kart losujemy jedną kartę. Jakie jest prawdopodobieństwo wylosowania asa?`,V5=`---
options:
  - "$\\frac{5}{6}$"
  - "$\\frac{1}{6}$"
  - "$\\frac{1}{3}$"
  - "$\\frac{2}{3}$"
correct: 0
hint: "Zdarzenie przeciwne: $P(A') = 1 - P(A) = 1 - \\frac{1}{6} = \\frac{5}{6}$."
tests:
  probability: 1.0
  counting: 0.25
---
Rzucamy kostką sześcienną. Jakie jest prawdopodobieństwo, że NIE wypadnie szóstka?`,K5=`---
options:
  - "$\\frac{1}{4}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{3}{4}$"
  - "$\\frac{1}{8}$"
correct: 0
hint: "Rzuty są niezależne. $P(\\text{OO}) = \\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$."
tests:
  probability: 1.0
  counting: 0.25
---
Rzucamy dwa razy monetą. Jakie jest prawdopodobieństwo otrzymania dwóch orłów?`,Z5=`---
options:
  - "$\\frac{1}{6}$"
  - "$\\frac{1}{36}$"
  - "$\\frac{5}{36}$"
  - "$\\frac{1}{12}$"
correct: 0
hint: "Suma 7 wypada dla par: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) — to 6 par z 36 możliwych. $P = \\frac{6}{36} = \\frac{1}{6}$."
tests:
  probability: 1.0
  counting: 0.25
---
Rzucamy dwiema kostkami. Jakie jest prawdopodobieństwo, że suma oczek wyniesie 7?`,Q5=`---
options:
  - "$\\frac{2}{3}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{5}{6}$"
  - "$\\frac{1}{3}$"
correct: 0
hint: "Suma zdarzeń: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{6} = \\frac{2}{3}$."
tests:
  probability: 1.0
  counting: 0.25
---
$P(A) = \\frac{1}{2}$, $P(B) = \\frac{1}{3}$, $P(A \\cap B) = \\frac{1}{6}$. Ile wynosi $P(A \\cup B)$?`,Y5=`---
options:
  - "$\\frac{1}{10}$"
  - "$\\frac{3}{10}$"
  - "$\\frac{1}{5}$"
  - "$\\frac{2}{15}$"
correct: 0
hint: "Zdarzenia niezależne: $P(A \\cap B) = P(A) \\cdot P(B) = \\frac{1}{2} \\cdot \\frac{1}{5} = \\frac{1}{10}$."
tests:
  probability: 1.0
  counting: 0.25
---
Zdarzenia $A$ i $B$ są niezależne. $P(A) = \\frac{1}{2}$, $P(B) = \\frac{1}{5}$. Ile wynosi $P(A \\cap B)$?`,X5=`---
options:
  - "$\\frac{5}{18}$"
  - "$\\frac{1}{6}$"
  - "$\\frac{11}{36}$"
  - "$\\frac{1}{4}$"
correct: 0
hint: "Sumy większe niż 8 to 9, 10, 11, 12. Liczymy pary: suma 9 → 4 pary, suma 10 → 3, suma 11 → 2, suma 12 → 1. Razem 10 z 36. $P = \\frac{10}{36} = \\frac{5}{18}$."
tests:
  probability: 1.0
  counting: 0.25
---
Rzucamy dwiema kostkami. Jakie jest prawdopodobieństwo, że suma oczek będzie większa niż 8?`,J5=`---
options:
  - "2k+1 i 2m+1 są nieparzyste, ich suma = 2(k+m+1) — parzysta"
  - "5+7=12, więc działa"
  - "Nieparzyste kończą się na 1,3,5,7,9 więc suma jest parzysta"
  - "Wystarczy sprawdzić kilka przykładów"
correct: 0
hint: "Dowód ogólny: reprezentujesz liczby jako 2k+1 i 2m+1."
tests:
  proof: 1.0
  logic_basics: 0.5
  sets: 0.5
---
Które sformułowanie jest poprawnym dowodem, że suma dwóch liczb nieparzystych jest parzysta?`,e6=`---
options:
  - "Przyjmujemy negację tezy i dochodzimy do sprzeczności"
  - "Sprawdzamy wszystkie przypadki"
  - "Używamy tylko przykładów"
  - "Dowodzimy przez analogię"
correct: 0
hint: "Dowód nie wprost (reductio ad absurdum): zakładamy, że teza jest fałszywa, i wyprowadzamy sprzeczność."
tests:
  proof: 1.0
  logic_basics: 0.5
  sets: 0.5
---
Dowód nie wprost polega na tym, że:`,n6=`---
options:
  - "Krok bazowy + krok indukcyjny (zakładamy prawdziwość dla $n$, dowodzimy dla $n+1$)"
  - "Sprawdzenie kilku pierwszych przypadków"
  - "Dowód dla $n=1$ wystarczy"
  - "Zakładamy prawdziwość dla $n+1$ i dowodzimy dla $n$"
correct: 0
hint: "Indukcja matematyczna: 1) Krok bazowy — sprawdzamy dla $n=1$. 2) Krok indukcyjny — zakładamy dla $n$, dowodzimy dla $n+1$."
tests:
  proof: 1.0
  logic_basics: 0.5
  sets: 0.5
---
Dowód przez indukcję matematyczną składa się z:`,t6=`---
options:
  - "$10$"
  - "$12$"
  - "$14$"
  - "$\\sqrt{48}$"
correct: 0
hint: "$c^2 = 6^2 + 8^2 = 36 + 64 = 100$, więc $c = 10$."
tests:
  pythagoras: 1.0
---
Przeciwprostokątna trójkąta prostokątnego o przyprostokątnych $6$ i $8$ wynosi:`,r6=`---
options:
  - "$5$"
  - "$7$"
  - "$\\sqrt{7}$"
  - "$\\sqrt{58}$"
correct: 0
hint: "$c^2 = 3^2 + 4^2 = 9 + 16 = 25$, więc $c = 5$."
tests:
  pythagoras: 1.0
---
Trójkąt prostokątny ma przyprostokątne $a = 3$ i $b = 4$. Przeciwprostokątna $c$ wynosi:`,i6=`---
options:
  - "$\\sqrt{11}$"
  - "$\\sqrt{13}$"
  - "$11$"
  - "$3$"
correct: 0
hint: "$a^2 = c^2 - b^2 = 36 - 25 = 11$, więc $a = \\sqrt{11}$."
tests:
  pythagoras: 1.0
---
Trójkąt prostokątny ma przeciwprostokątną $c = 6$ i jedną przyprostokątną $b = 5$. Druga przyprostokątna wynosi:`,o6=`---
options:
  - "$x = 2$ i $x = 3$"
  - "$x = -2$ i $x = -3$"
  - "$x = 1$ i $x = 6$"
  - "$x = 2$ i $x = -3$"
correct: 0
hint: "$\\Delta = 25 - 24 = 1$. Wzory Viete'a: $x_1 + x_2 = 5$, $x_1 x_2 = 6$. Lub $x = \\frac{5 \\pm 1}{2}$."
tests:
  quadratic_eq: 1.0
---
Równanie $x^2 - 5x + 6 = 0$ ma rozwiązania:`,s6=`---
options:
  - "$x = 1$ lub $x = -3$"
  - "$x = -1$ lub $x = 3$"
  - "$x = 1$ lub $x = 3$"
  - "Brak rozwiązań rzeczywistych"
correct: 0
hint: "$\\Delta = 4 + 12 = 16$, $\\sqrt{\\Delta} = 4$. $x = \\frac{-2 \\pm 4}{2}$: $x_1 = 1$, $x_2 = -3$."
tests:
  quadratic_eq: 1.0
---
Rozwiąż: $x^2 + 2x - 3 = 0$`,a6=`---
options:
  - "Brak rozwiązań rzeczywistych"
  - "$x = 0$"
  - "$x = \\pm 2$"
  - "$x = 4$"
correct: 0
hint: "$\\Delta = 0 - 4 \\cdot 1 \\cdot 4 = -16 < 0$. Ujemna delta oznacza brak rozwiązań w $\\mathbb{R}$."
tests:
  quadratic_eq: 1.0
---
Ile rozwiązań rzeczywistych ma równanie $x^2 + 4 = 0$?`,l6=`---
options:
  - "$\\Delta = 0$, jedno rozwiązanie"
  - "$\\Delta > 0$, dwa rozwiązania"
  - "$\\Delta < 0$, brak rozwiązań"
  - "$\\Delta = 1$, dwa rozwiązania"
correct: 0
hint: "$\\Delta = 36 - 4 \\cdot 9 = 36 - 36 = 0$. Gdy $\\Delta = 0$, równanie ma dokładnie jedno rozwiązanie (podwójne)."
tests:
  quadratic_eq: 1.0
---
Ile rozwiązań ma równanie $x^2 - 6x + 9 = 0$?`,c6=`---
options:
  - "brak rozwiązań rzeczywistych"
  - "$x = 1$ i $x = -1$"
  - "$x = 0$"
  - "$x = 1$"
correct: 0
hint: "$\\Delta = 0 - 4 \\cdot 1 \\cdot 1 = -4 < 0$. Wyróżnik ujemny oznacza brak pierwiastków rzeczywistych."
tests:
  quadratic_eq: 1.0
---
Równanie $x^2 + 1 = 0$ ma:`,u6=`---
options:
  - "$x = -1$ i $x = \\frac{3}{2}$"
  - "$x = 1$ i $x = -\\frac{3}{2}$"
  - "$x = 2$ i $x = -3$"
  - "$x = -1$ i $x = 3$"
correct: 0
hint: "$\\Delta = 4 + 24 = 28$... Albo rozłóż: $2x^2 - x - 3 = (2x - 3)(x + 1) = 0$, stąd $x = -1$ lub $x = \\frac{3}{2}$."
tests:
  quadratic_eq: 1.0
  factoring: 0.5
---
Rozwiąż równanie $2x^2 - x - 3 = 0$.`,d6=`---
options:
  - "$49$"
  - "$-49$"
  - "$1$"
  - "$25$"
correct: 0
hint: "$\\Delta = b^2 - 4ac = (-3)^2 - 4 \\cdot 2 \\cdot (-5) = 9 + 40 = 49$."
tests:
  quadratic_eq: 1.0
---
Wyróżnik równania $2x^2 - 3x - 5 = 0$ wynosi:`,p6=`---
options:
  - "$x = 0$ i $x = 5$"
  - "$x = 5$"
  - "$x = 0$ i $x = -5$"
  - "$x = -5$"
correct: 0
hint: "Wyłącz $x$: $x(x - 5) = 0$, więc $x = 0$ lub $x = 5$."
tests:
  quadratic_eq: 1.0
  factoring: 0.5
---
Rozwiąż równanie $x^2 - 5x = 0$.`,m6=`---
options:
  - "$m < \\frac{1}{8}$"
  - "$m > \\frac{1}{8}$"
  - "$m > 0$"
  - "$m = \\frac{1}{8}$"
correct: 0
hint: "Warunek na dwa pierwiastki: $\\Delta > 0$. Tutaj $\\Delta = 1 - 8m > 0$, czyli $m < \\frac{1}{8}$."
tests:
  quadratic_eq: 1.0
---
Równanie $2x^2 + x + m = 0$ ma dwa różne pierwiastki rzeczywiste, gdy:`,f6=`---
options:
  - "$5$ i $7$"
  - "$4$ i $8$"
  - "$3$ i $9$"
  - "$6$ i $6$"
correct: 0
hint: "Niech liczby to $x$ i $x+2$. Wtedy $x(x+2) = 35$, czyli $x^2 + 2x - 35 = 0$. $\\Delta = 4 + 140 = 144$. $x = \\frac{-2+12}{2} = 5$."
tests:
  quadratic_eq: 1.0
---
Iloczyn dwóch kolejnych liczb nieparzystych wynosi $35$. Te liczby to:`,h6=`---
options:
  - "(−2, 3)"
  - "(−∞,−2)∪(3,+∞)"
  - "[−2, 3]"
  - "(−3, 2)"
correct: 0
hint: "Pierwiastki to −2 i 3. Parabola jest nad osią poza przedziałem (−2,3)."
tests:
  quadratic_ineq: 1.0
  quadratic_eq: 0.5
---
Rozwiązaniem nierówności x² − x − 6 < 0 jest:`,g6=`---
options:
  - "$x \\in (-2, 3)$"
  - "$x \\in (-\\infty, -2) \\cup (3, +\\infty)$"
  - "$x \\in [-2, 3]$"
  - "$x \\in \\mathbb{R}$"
correct: 0
hint: "Pierwiastki to $x = -2$ i $x = 3$. Ramiona paraboli skierowane w górę ($a=1>0$), więc parabola jest poniżej zera między pierwiastkami."
tests:
  quadratic_ineq: 1.0
  quadratic_eq: 0.5
---
Rozwiąż nierówność: $x^2 - x - 6 < 0$`,y6=`---
options:
  - "$x \\in (-\\infty, -1] \\cup [4, +\\infty)$"
  - "$x \\in (-1, 4)$"
  - "$x \\in \\mathbb{R}$"
  - "$x \\in \\emptyset$"
correct: 0
hint: "Pierwiastki: $\\Delta = 25$, $x_1 = -1$, $x_2 = 4$. Parabola ($a=1>0$) jest powyżej zera poza pierwiastkami."
tests:
  quadratic_ineq: 1.0
  quadratic_eq: 0.5
---
Rozwiąż nierówność: $x^2 - 3x - 4 \\geq 0$`,v6=`---
options:
  - "$(-\\infty, -1) \\cup (5, +\\infty)$"
  - "$(-1, 5)$"
  - "$(-5, 1)$"
  - "$(-\\infty, -5) \\cup (1, +\\infty)$"
correct: 0
hint: "Pierwiastki: $x^2 - 4x - 5 = (x-5)(x+1) = 0$, czyli $x = -1$ i $x = 5$. Dla $a > 0$ nierówność $> 0$ jest spełniona poza pierwiastkami."
tests:
  quadratic_ineq: 1.0
  quadratic_eq: 0.5
---
Rozwiąż nierówność $x^2 - 4x - 5 > 0$.`,x6=`---
options:
  - "$x \\in \\mathbb{R}$"
  - "$x \\in \\emptyset$"
  - "$x \\in (-1, 1)$"
  - "$x \\in (-\\infty, 0)$"
correct: 0
hint: "$x^2 + 2x + 5 = (x+1)^2 + 4 \\geq 4 > 0$ dla każdego $x$. Nierówność jest spełniona zawsze."
tests:
  quadratic_ineq: 1.0
  quadratic_eq: 0.5
---
Rozwiązaniem nierówności $x^2 + 2x + 5 > 0$ jest:`,w6=`---
options:
  - "$\\langle 1, 4 \\rangle$"
  - "$(1, 4)$"
  - "$(-\\infty, 1 \\rangle \\cup \\langle 4, +\\infty)$"
  - "$(-\\infty, 1) \\cup (4, +\\infty)$"
correct: 0
hint: "Pierwiastki: $x^2 - 5x + 4 = (x-1)(x-4) = 0$. Nierówność $\\leq 0$ z $a > 0$: rozwiązanie to $\\langle 1, 4 \\rangle$ (przedział domknięty, bo $\\leq$)."
tests:
  quadratic_ineq: 1.0
  quadratic_eq: 0.5
---
Rozwiąż nierówność $x^2 - 5x + 4 \\leq 0$.`,b6=`---
options:
  - "$(-\\infty, -3 \\rangle \\cup \\langle 1, +\\infty)$"
  - "$\\langle -3, 1 \\rangle$"
  - "$(-3, 1)$"
  - "$(-\\infty, -1 \\rangle \\cup \\langle 3, +\\infty)$"
correct: 0
hint: "Podziel przez $-1$ (zmień znak nierówności!): $x^2 + 2x - 3 \\leq 0$... Nie! Oryginalna: $-x^2 - 2x + 3 \\leq 0$, czyli $x^2 + 2x - 3 \\geq 0$. Pierwiastki: $(x+3)(x-1) = 0$. Dla $\\geq 0$: $x \\leq -3$ lub $x \\geq 1$."
tests:
  quadratic_ineq: 1.0
  quadratic_eq: 0.5
---
Rozwiąż nierówność $-x^2 - 2x + 3 \\leq 0$.`,$6=`---
options:
  - "$(-\\infty, 2) \\cup (2, +\\infty)$"
  - "$x \\in \\mathbb{R}$"
  - "$x \\in \\emptyset$"
  - "$\\{2\\}$"
correct: 0
hint: "$x^2 - 4x + 4 = (x-2)^2 \\geq 0$. Wyrażenie $(x-2)^2 > 0$ dla wszystkich $x \\neq 2$, a równe $0$ tylko dla $x = 2$."
tests:
  quadratic_ineq: 1.0
  quadratic_eq: 0.5
---
Rozwiązaniem nierówności $x^2 - 4x + 4 > 0$ jest:`,_6=`---
options:
  - "x + 2"
  - "x − 2"
  - "x² + 2"
  - "2x"
correct: 0
hint: "x²−4 = (x−2)(x+2). Skracasz (x−2)."
tests:
  rational_expr: 1.0
  polynomials: 0.5
---
Wyrażenie (x²−4)/(x−2) dla x ≠ 2 upraszcza się do:`,k6=`---
options:
  - "$\\frac{x+1}{x-1}$"
  - "$\\frac{x-1}{x+1}$"
  - "$\\frac{x^2-1}{(x-1)^2}$"
  - "$1$"
correct: 0
hint: "Licznik $x^2-1 = (x-1)(x+1)$. Po skróceniu przez $(x-1)$ zostaje $\\frac{x+1}{x-1} \\cdot \\frac{1}{1}$... Sprawdź: $\\frac{(x-1)(x+1)}{(x-1)^2} = \\frac{x+1}{x-1}$."
tests:
  rational_expr: 1.0
  polynomials: 0.5
---
Uprość: $\\dfrac{x^2 - 1}{(x-1)^2}$`,z6=`---
options:
  - "$\\frac{5x}{6}$"
  - "$\\frac{5}{6x}$"
  - "$\\frac{5x^2}{6}$"
  - "$\\frac{x}{2}$"
correct: 0
hint: "Mnożenie ułamków: $\\frac{x}{2} \\cdot \\frac{5}{3} = \\frac{5x}{6}$."
tests:
  rational_expr: 1.0
  polynomials: 0.5
---
Oblicz: $\\dfrac{x}{2} \\cdot \\dfrac{5}{3} =$`,S6=`---
options:
  - "$(-\\infty, -1) \\cup (3, +\\infty)$"
  - "$(-1, 3)$"
  - "$[-1, 3]$"
  - "$(-\\infty, -1] \\cup [3, +\\infty)$"
correct: 0
hint: "Metoda rozwiązywania nierówności wymiernych — krok po kroku:\\n\\n① ROZŁÓŻ na czynniki: licznik = (x+1), mianownik = (x−3). Już rozłożone.\\n\\n② ZNAJDŹ MIEJSCA ZEROWE: licznik = 0 → x = −1. Mianownik = 0 → x = 3.\\n\\n③ DZIEDZINA: mianownik ≠ 0, więc x ≠ 3. Punkt x = 3 jest WYŁĄCZONY (kółko puste).\\n\\n④ TABELKA ZNAKÓW — zaznacz −1 i 3 na osi, sprawdź znak w każdym przedziale:\\n• x < −1 (np. x=−2): (−2+1)/(−2−3) = (−1)/(−5) = + ✓\\n• −1 < x < 3 (np. x=0): (0+1)/(0−3) = 1/(−3) = − ✗\\n• x > 3 (np. x=4): (4+1)/(4−3) = 5/1 = + ✓\\n\\n⑤ ODPOWIEDŹ: nierówność > 0 (ostra), więc nie włączamy punktów: x ∈ (−∞, −1) ∪ (3, +∞)."
tests:
  rational_expr: 1.0
  quadratic_ineq: 0.5
  factoring: 0.25
---
Rozwiąż nierówność: $\\dfrac{x+1}{x-3} > 0$
`,j6=`---
options:
  - "$[-2, 0) \\\\cup [4, +\\\\infty)$"
  - "$(-2, 0) \\\\cup (4, +\\\\infty)$"
  - "$(-\\\\infty, -2] \\\\cup (0, 4]$"
  - "$(-\\\\infty, -2) \\\\cup (0, 4)$"
correct: 0
hint: "Krok po kroku:\\n\\n① PRZENIEŚ na jedną stronę: (x²−2x−8)/x ≥ 0.\\n\\n② ROZŁÓŻ LICZNIK: x²−2x−8 = (x−4)(x+2). Szukasz dwóch liczb: iloczyn = −8, suma = −2 → to 4 i −2... nie, to −4 i 2... Δ = 4+32 = 36, x = (2±6)/2 → x=4 lub x=−2. Więc (x−4)(x+2).\\n\\n③ MIANOWNIK: x. Miejsce zerowe: x = 0. Wyłączone z dziedziny (x ≠ 0).\\n\\n④ MIEJSCA ZEROWE LICZNIKA: x = −2, x = 4. Te WŁĄCZAMY (bo ≥ 0, i ułamek = 0 gdy licznik = 0).\\n\\n⑤ TABELKA ZNAKÓW — punkty krytyczne: −2, 0, 4:\\n• x < −2 (np. x=−3): (−7)(−1)/(−3) = 7/(−3) = − ✗\\n• −2 < x < 0 (np. x=−1): (−5)(1)/(−1) = −5/(−1) = + ✓\\n• 0 < x < 4 (np. x=1): (−3)(3)/1 = −9 = − ✗\\n• x > 4 (np. x=5): (1)(7)/5 = 7/5 = + ✓\\n\\n⑥ ODPOWIEDŹ: ≥ 0, więc włączamy −2 i 4 (licznik=0), ale NIE 0 (mianownik=0): x ∈ [−2, 0) ∪ [4, +∞)."
tests:
  rational_expr: 1.0
  quadratic_ineq: 0.5
  factoring: 0.5
---
Rozwiąż nierówność: $\\dfrac{x^2 - 2x - 8}{x} \\geq 0$
`,q6=`---
options:
  - "$(2, 5]$"
  - "$[2, 5]$"
  - "$(2, 5)$"
  - "$(-\\\\infty, 2) \\\\cup [5, +\\\\infty)$"
correct: 0
hint: "Krok po kroku:\\n\\n① ROZŁÓŻ: licznik = (x−5), mianownik = (x−2). Już rozłożone.\\n\\n② MIEJSCA ZEROWE: licznik = 0 → x = 5. Mianownik = 0 → x = 2 (WYŁĄCZONY — dzielenie przez 0!).\\n\\n③ CZY WŁĄCZAMY PUNKTY?\\n• x = 5: ułamek = 0/3 = 0, a 0 ≤ 0 ✓ → WŁĄCZAMY (nawias kwadratowy]\\n• x = 2: mianownik = 0 → WYŁĄCZAMY zawsze (nawias okrągły)\\n\\n④ TABELKA ZNAKÓW — punkty krytyczne: 2 i 5:\\n• x < 2 (np. x=0): (0−5)/(0−2) = (−5)/(−2) = +2.5 → dodatni ✗\\n• 2 < x < 5 (np. x=3): (3−5)/(3−2) = (−2)/(1) = −2 → ujemny ✓\\n• x > 5 (np. x=6): (6−5)/(6−2) = 1/4 → dodatni ✗\\n\\n⑤ ODPOWIEDŹ: ujemny lub zero w przedziale (2, 5]. Nawias okrągły przy 2 (mianownik=0), kwadratowy przy 5 (licznik=0, ułamek=0 ✓)."
tests:
  rational_expr: 1.0
  quadratic_ineq: 0.5
---
Rozwiąż nierówność: $\\dfrac{x-5}{x-2} \\leq 0$
`,T6=`---
options:
  - "$(-\\\\infty, -3] \\\\cup (-1, 2]$"
  - "$[-3, -1) \\\\cup [2, +\\\\infty)$"
  - "$(-3, -1) \\\\cup (2, +\\\\infty)$"
  - "$(-\\\\infty, -3) \\\\cup (-1, 2)$"
correct: 0
hint: "Krok po kroku:\\n\\n① ROZŁÓŻ LICZNIK NA CZYNNIKI:\\nx² + x − 6 = ? Szukamy dwóch liczb: iloczyn = −6, suma = 1.\\nTo 3 i −2: x² + x − 6 = (x+3)(x−2). Sprawdź: (x+3)(x−2) = x² −2x +3x −6 = x² + x − 6 ✓\\n\\n② MIANOWNIK: (x+1). Miejsce zerowe: x = −1 (WYŁĄCZONY z dziedziny).\\n\\n③ WSZYSTKIE PUNKTY KRYTYCZNE: x = −3 (licznik), x = −1 (mianownik), x = 2 (licznik).\\n\\n④ CZY WŁĄCZAMY?\\n• x = −3: ułamek = 0/(−3+1) = 0 ≤ 0 ✓ → WŁĄCZAMY [-3\\n• x = −1: mianownik = 0 → WYŁĄCZAMY )\\n• x = 2: ułamek = 0/(2+1) = 0 ≤ 0 ✓ → WŁĄCZAMY 2]\\n\\n⑤ TABELKA ZNAKÓW — 4 przedziały:\\n• x < −3 (np. x=−4): (−1)(−6)/(−3) = 6/(−3) = −2 → ujemny ✓\\n• −3 < x < −1 (np. x=−2): (1)(−4)/(−1) = −4/(−1) = +4 → dodatni ✗\\n• −1 < x < 2 (np. x=0): (3)(−2)/(1) = −6 → ujemny ✓\\n• x > 2 (np. x=3): (6)(1)/(4) = 1.5 → dodatni ✗\\n\\n⑥ ODPOWIEDŹ: ujemny lub zero → x ∈ (−∞, −3] ∪ (−1, 2].\\n\\nWskazówka systematyczna: przy nierównościach wymiernych ZAWSZE rób tabelkę znaków. Nigdy nie mnóż obu stron przez mianownik (bo nie wiesz, czy jest dodatni czy ujemny!)."
tests:
  rational_expr: 1.0
  quadratic_ineq: 0.5
  factoring: 0.5
---
Rozwiąż nierówność: $\\dfrac{x^2 + x - 6}{x + 1} \\leq 0$
`,A6=`---
options:
  - "3"
  - "1"
  - "∞"
  - "0"
correct: 0
hint: "Dzielisz licznik i mianownik przez n². Wyrazy 1/n² i 2/n² dążą do 0."
tests:
  seq_limits: 1.0
  arith_geom: 0.5
---
Granica ciągu aₙ = (3n² + 1)/(n² − 2) dla n→∞ wynosi:`,M6=`---
options:
  - "$0$"
  - "$1$"
  - "$\\infty$"
  - "$\\frac{1}{2}$"
correct: 0
hint: "$\\lim_{n\\to\\infty} \\frac{1}{n} = 0$, bo mianownik rośnie bez ograniczeń."
tests:
  seq_limits: 1.0
  arith_geom: 0.5
---
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n}$`,P6=`---
options:
  - "$3$"
  - "$\\infty$"
  - "$0$"
  - "$\\frac{1}{3}$"
correct: 0
hint: "Podziel licznik i mianownik przez $n$: $\\frac{3n+1}{n} = 3 + \\frac{1}{n} \\to 3$."
tests:
  seq_limits: 1.0
  arith_geom: 0.5
---
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n+1}{n}$`,C6=`---
options:
  - "$14$"
  - "$13$"
  - "$15$"
  - "$12$"
correct: 0
hint: "$a_5 = 3 \\cdot 5 - 1 = 15 - 1 = 14$."
tests:
  sequences: 1.0
---
Ciąg określony wzorem $a_n = 3n - 1$ ma piąty wyraz równy:`,R6=`---
options:
  - "$a_n = 2n - 1$"
  - "$a_n = 2n + 1$"
  - "$a_n = n + 2$"
  - "$a_n = 2n$"
correct: 0
hint: "Ciąg: $1, 3, 5, 7, \\ldots$ — liczby nieparzyste. Wzór ogólny: $a_n = 2n - 1$."
tests:
  sequences: 1.0
---
Ciąg $1, 3, 5, 7, \\ldots$ ma wzór ogólny:`,D6=`---
options:
  - "$a_5 = 17$"
  - "$a_5 = 15$"
  - "$a_5 = 13$"
  - "$a_5 = 20$"
correct: 0
hint: "$a_1 = 1$, $r = 4$, $a_5 = a_1 + 4r = 1 + 16 = 17$."
tests:
  sequences: 1.0
---
Ciąg arytmetyczny: $a_1 = 1$, różnica $r = 4$. Piąty wyraz $a_5$ wynosi:`,E6=`---
options:
  - "{3,4}"
  - "{1,2,5,6}"
  - "{1,2,3,4,5,6}"
  - "{3}"
correct: 0
hint: "Część wspólna zawiera tylko elementy należące do obu zbiorów."
tests:
  sets: 1.0
---
A = {1,2,3,4}, B = {3,4,5,6}. A ∩ B =`,B6=`---
options:
  - "$\\{2, 4\\}$"
  - "$\\{1, 2, 3, 4, 5, 6\\}$"
  - "$\\{1, 3, 5, 6\\}$"
  - "$\\emptyset$"
correct: 0
hint: "Część wspólna $A \\cap B$ zawiera elementy należące do obu zbiorów jednocześnie."
tests:
  sets: 1.0
---
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cap B$:`,N6=`---
options:
  - "$\\{1, 2, 3, 4, 6\\}$"
  - "$\\{2, 4\\}$"
  - "$\\{1, 3\\}$"
  - "$\\{6\\}$"
correct: 0
hint: "Suma $A \\cup B$ zawiera wszystkie elementy z obu zbiorów (bez powtórzeń)."
tests:
  sets: 1.0
---
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cup B$:`,I6=`---
options:
  - "$\\{1, 3\\}$"
  - "$\\{2, 4, 6\\}$"
  - "$\\{1, 2, 3, 4, 6\\}$"
  - "$\\emptyset$"
correct: 0
hint: "Różnica $A \\setminus B$ zawiera elementy należące do $A$, ale nie do $B$."
tests:
  sets: 1.0
---
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\setminus B$:`,F6=`---
options:
  - "8"
  - "5"
  - "3"
  - "10"
correct: 0
hint: "Korzystamy ze wzoru: $|A \\cup B| = |A| + |B| - |A \\cap B|$."
tests:
  sets: 1.0
---
$|A| = 5$, $|B| = 6$, $|A \\cap B| = 3$. Ile wynosi $|A \\cup B|$?`,L6=`---
options:
  - "Tak"
  - "Nie"
  - "Tylko gdy $A = B$"
  - "Tylko gdy $B = \\emptyset$"
correct: 0
hint: "Jeśli każdy element $A$ należy do $B$, to $A \\subset B$."
tests:
  sets: 1.0
---
$A = \\{2, 4\\}$, $B = \\{1, 2, 3, 4, 5\\}$. Czy $A \\subset B$?`,O6=`---
options:
  - "$\\{1, 3, 5\\}$"
  - "$\\{2, 4\\}$"
  - "$\\{1, 2, 3, 4, 5\\}$"
  - "$\\emptyset$"
correct: 0
hint: "Dopełnienie $A'$ to elementy uniwersum nienależące do $A$."
tests:
  sets: 1.0
---
Uniwersum $U = \\{1, 2, 3, 4, 5\\}$, $A = \\{2, 4\\}$. Wyznacz dopełnienie $A' =$`,H6=`---
options:
  - "$(A \\cap B)' = A' \\cup B'$"
  - "$(A \\cap B)' = A' \\cap B'$"
  - "$(A \\cup B)' = A' \\cup B'$"
  - "$(A \\cap B)' = A \\cup B$"
correct: 0
hint: "Prawo De Morgana: dopełnienie części wspólnej to suma dopełnień."
tests:
  sets: 1.0
---
Które z poniższych jest poprawnym prawem De Morgana?`,W6=`---
options:
  - "10"
  - "5"
  - "15"
  - "25"
correct: 0
hint: "$|A \\cup B| = 30 - 5 = 25$. Z wzoru: $|A \\cap B| = |A| + |B| - |A \\cup B| = 20 + 15 - 25 = 10$."
tests:
  sets: 1.0
---
W klasie 30 uczniów: 20 lubi matematykę, 15 lubi fizykę, a 5 nie lubi żadnego z tych przedmiotów. Ilu uczniów lubi oba przedmioty?`,G6=`---
options:
  - "16"
  - "8"
  - "32"
  - "12"
correct: 0
hint: "Zbiór $n$-elementowy ma $2^n$ podzbiorów (włącznie z $\\emptyset$ i całym zbiorem)."
tests:
  sets: 1.0
---
Ile podzbiorów (łącznie ze zbiorem pustym) ma zbiór $\\{a, b, c, d\\}$?`,U6=`---
options:
  - "39"
  - "25"
  - "49"
  - "74"
correct: 0
hint: "Tw. cosinusów: c² = 25 + 49 − 2·5·7·cos60° = 74 − 35 = 39."
tests:
  sin_cos_law: 1.0
  trig_lp: 0.5
---
W trójkącie a=5, b=7, C=60°. Wartość c² =`,V6=`---
options:
  - "$c^2 = a^2 + b^2 - 2ab\\cos\\gamma$"
  - "$c^2 = a^2 + b^2 + 2ab\\cos\\gamma$"
  - "$c = a + b - 2\\cos\\gamma$"
  - "$\\cos\\gamma = a^2 + b^2 - c^2$"
correct: 0
hint: "Twierdzenie cosinusów: $c^2 = a^2 + b^2 - 2ab\\cos\\gamma$, gdzie $\\gamma$ to kąt między bokami $a$ i $b$."
tests:
  sin_cos_law: 1.0
  trig_lp: 0.5
---
Twierdzenie cosinusów brzmi:`,K6=`---
options:
  - "$\\frac{a}{\\sin\\alpha} = \\frac{b}{\\sin\\beta} = \\frac{c}{\\sin\\gamma}$"
  - "$a \\cdot \\sin\\alpha = b \\cdot \\sin\\beta$"
  - "$\\frac{\\sin\\alpha}{a} = \\frac{\\sin\\beta}{b} + \\frac{\\sin\\gamma}{c}$"
  - "$a = b \\cdot \\sin\\alpha$"
correct: 0
hint: "Twierdzenie sinusów: iloraz każdego boku przez sinus przeciwległego kąta jest stały (= $2R$)."
tests:
  sin_cos_law: 1.0
  trig_lp: 0.5
---
Twierdzenie sinusów głosi, że w każdym trójkącie:`,Z6=`---
options:
  - "12π"
  - "36π"
  - "9π"
  - "48π"
correct: 0
hint: "V = (1/3)πr²h = (1/3)·π·9·4 = 12π."
tests:
  solid_geom: 1.0
---
Objętość stożka o promieniu podstawy r=3 i wysokości h=4 wynosi:`,Q6=`---
options:
  - "$V = a^3$"
  - "$V = 6a^2$"
  - "$V = 3a^3$"
  - "$V = a^2 h$"
correct: 0
hint: "Objętość sześcianu o krawędzi $a$: $V = a \\cdot a \\cdot a = a^3$."
tests:
  solid_geom: 1.0
---
Wzór na objętość sześcianu o krawędzi $a$:`,Y6=`---
options:
  - "$V = \\frac{4}{3}\\pi r^3$"
  - "$V = \\pi r^2 h$"
  - "$V = 4\\pi r^2$"
  - "$V = \\frac{1}{3}\\pi r^2 h$"
correct: 0
hint: "Objętość kuli o promieniu $r$: $V = \\frac{4}{3}\\pi r^3$."
tests:
  solid_geom: 1.0
---
Wzór na objętość kuli o promieniu $r$:`,X6=`---
options:
  - "6"
  - "5"
  - "7"
  - "8"
correct: 0
hint: "Suma = 30, liczba wyrazów = 5. 30/5 = 6."
tests:
  stat_lp: 1.0
  data_basics: 0.5
---
Średnia arytmetyczna {2, 4, 6, 8, 10} wynosi:`,J6=`---
options:
  - "Najczęściej powtarzająca się wartość"
  - "Środkowa wartość po posortowaniu"
  - "Suma podzielona przez liczbę elementów"
  - "Różnica między max i min"
correct: 0
hint: "Dominanta (moda) to wartość, która pojawia się najczęściej w danych."
tests:
  stat_lp: 1.0
  data_basics: 0.5
---
Dominanta (moda) zbioru danych to:`,eg=`---
options:
  - "$8$"
  - "$4$"
  - "$2$"
  - "$16$"
correct: 0
hint: "Rozstęp = max $-$ min $= 12 - 4 = 8$."
tests:
  stat_lp: 1.0
  data_basics: 0.5
---
Dla danych $\\{4, 7, 9, 12, 6\\}$ rozstęp (zakres) wynosi:`,ng=`---
options:
  - "8"
  - "6"
  - "12"
  - "4"
correct: 0
hint: "Tw. Talesa: AD/DB = AE/EC, więc EC = 4·6/3 = 8."
tests:
  thales: 1.0
---
Proste równoległe odcinają na siecznych odcinki proporcjonalne.
Jeśli DE∥BC i AD=3, DB=6, AE=4, to EC=`,tg=`---
options:
  - "$6$"
  - "$4$"
  - "$8$"
  - "$3$"
correct: 0
hint: "Twierdzenie Talesa: $\\frac{AB}{BC} = \\frac{DE}{EF}$. Mamy $\\frac{4}{8} = \\frac{3}{EF}$, więc $EF = 6$."
tests:
  thales: 1.0
---
Dwie proste równoległe przecinają boki trójkąta. Jeśli $AB = 4$, $BC = 8$, $DE = 3$, to $EF =$`,rg=`---
options:
  - "Odcinki są proporcjonalne"
  - "Kąty są równe"
  - "Trójkąty są przystające"
  - "Pole trójkąta jest stałe"
correct: 0
hint: "Twierdzenie Talesa stwierdza, że prosta równoległa do boku trójkąta wyznacza proporcjonalne odcinki na pozostałych bokach."
tests:
  thales: 1.0
---
Co gwarantuje twierdzenie Talesa, gdy prosta jest równoległa do boku trójkąta?`,ig=`---
options:
  - "$\\frac{4}{5}$"
  - "$\\frac{3}{4}$"
  - "$\\frac{5}{3}$"
  - "$\\frac{1}{5}$"
correct: 0
hint: "$\\sin^2\\alpha + \\cos^2\\alpha = 1$, więc $\\cos^2\\alpha = 1 - \\frac{9}{25} = \\frac{16}{25}$, a $\\cos\\alpha = \\frac{4}{5}$ (dla kąta ostrego)."
tests:
  trig_basic: 1.0
---
W trójkącie prostokątnym $\\sin\\alpha = \\frac{3}{5}$. Wartość $\\cos\\alpha$ wynosi:`,og=`---
options:
  - "$\\frac{1}{2}$"
  - "$\\frac{\\sqrt{3}}{2}$"
  - "$\\frac{\\sqrt{2}}{2}$"
  - "$1$"
correct: 0
hint: "Trójkąt prostokątny 30-60-90: $\\sin 30° = \\frac{1}{2}$."
tests:
  trig_basic: 1.0
---
Wartość $\\sin 30°$ wynosi:`,sg=`---
options:
  - "$1$"
  - "$0$"
  - "$\\frac{\\sqrt{2}}{2}$"
  - "$\\frac{\\sqrt{3}}{2}$"
correct: 0
hint: "Tożsamość Pitagorejska: $\\sin^2\\alpha + \\cos^2\\alpha = 1$ dla każdego kąta $\\alpha$."
tests:
  trig_basic: 1.0
---
Wartość wyrażenia $\\sin^2\\alpha + \\cos^2\\alpha$ wynosi zawsze:`,ag=`---
options:
  - "x = 30° i x = 150°"
  - "x = 30° tylko"
  - "x = 60° i x = 120°"
  - "x = 45°"
correct: 0
hint: "sin jest symetryczny względem 90°. sin(30°) = sin(150°) = 1/2."
tests:
  trig_eq: 1.0
  trig_formulas: 0.5
---
Rozwiązaniem równania sin(x) = 1/2 w przedziale [0°, 180°] jest:`,lg=`---
options:
  - "$x = \\frac{\\pi}{6} + 2k\\pi$ lub $x = \\frac{5\\pi}{6} + 2k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{6} + k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{3} + 2k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{6} + k\\pi$ lub $x = -\\frac{\\pi}{6} + k\\pi$"
correct: 0
hint: "$\\sin x = \\frac{1}{2}$ dla $x = \\frac{\\pi}{6}$ (30°) i $x = \\pi - \\frac{\\pi}{6} = \\frac{5\\pi}{6}$ (150°), plus okresy $2\\pi$."
tests:
  trig_eq: 1.0
  trig_formulas: 0.5
---
Rozwiąż równanie: $\\sin x = \\dfrac{1}{2}$`,cg=`---
options:
  - "$x = \\frac{\\pi}{4} + k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{4} + 2k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = \\frac{\\pi}{2} + k\\pi$, $k \\in \\mathbb{Z}$"
  - "$x = k\\pi$, $k \\in \\mathbb{Z}$"
correct: 0
hint: "$\\tan x = 1$ dla $x = \\frac{\\pi}{4}$. Tangens ma okres $\\pi$, więc ogólne rozwiązanie: $x = \\frac{\\pi}{4} + k\\pi$."
tests:
  trig_eq: 1.0
  trig_formulas: 0.5
---
Rozwiąż równanie: $\\tan x = 1$`,ug=`---
options:
  - "2sin(α)cos(α)"
  - "sin²(α)−cos²(α)"
  - "cos²(α)−sin²(α)"
  - "2cos²(α)−1"
correct: 0
hint: "Wzór na sinus kąta podwojonego: sin(2α) = 2sin(α)cos(α)."
tests:
  trig_formulas: 1.0
---
sin(2α) jest równe:`,dg=`---
options:
  - "$\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$"
  - "$\\sin 2\\alpha = \\sin^2\\alpha + \\cos^2\\alpha$"
  - "$\\sin 2\\alpha = 2\\sin^2\\alpha$"
  - "$\\sin 2\\alpha = \\sin\\alpha \\cdot \\cos\\alpha$"
correct: 0
hint: "Wzór na sinus podwojonego kąta: $\\sin 2\\alpha = 2\\sin\\alpha\\cos\\alpha$."
tests:
  trig_formulas: 1.0
---
Wzór na $\\sin 2\\alpha$:`,pg=`---
options:
  - "$\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$"
  - "$\\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta - \\sin\\alpha\\sin\\beta$"
  - "$\\cos(\\alpha + \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$"
  - "$\\cos(\\alpha - \\beta) = \\cos\\alpha - \\cos\\beta$"
correct: 0
hint: "Wzór redukcyjny: $\\cos(\\alpha-\\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta$."
tests:
  trig_formulas: 1.0
---
Wzór na $\\cos(\\alpha - \\beta)$:`,mg=`---
options:
  - "√3/2"
  - "1/2"
  - "−√3/2"
  - "√2/2"
correct: 0
hint: "120° = 180°−60°, sin(180°−α) = sin(α), sin(60°) = √3/2."
tests:
  trig_lp: 1.0
  trig_basic: 0.25
---
Wartość sin(120°) jest równa:`,fg=`---
options:
  - "$\\frac{\\sqrt{3}}{2}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{\\sqrt{2}}{2}$"
  - "$1$"
correct: 0
hint: "$\\cos 30° = \\frac{\\sqrt{3}}{2}$. Zapamiętaj wartości dla 30°, 45°, 60°."
tests:
  trig_lp: 1.0
  trig_basic: 0.25
---
Wartość $\\cos 30°$ wynosi:`,hg=`---
options:
  - "$\\frac{\\sqrt{2}}{2}$"
  - "$\\frac{1}{2}$"
  - "$\\frac{\\sqrt{3}}{2}$"
  - "$0$"
correct: 0
hint: "$\\sin 45° = \\cos 45° = \\frac{\\sqrt{2}}{2}$."
tests:
  trig_lp: 1.0
  trig_basic: 0.25
---
Wartość $\\sin 45°$ wynosi:`,gg=`---
options:
  - "5"
  - "7"
  - "√7"
  - "12"
correct: 0
hint: "|v| = √(3²+4²) = √25 = 5."
tests:
  vectors: 1.0
---
Długość wektora v = [3, 4] wynosi:`,yg=`---
options:
  - "$\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2$"
  - "$\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|$"
  - "$\\vec{a} \\cdot \\vec{b} = (a_1+b_1, a_2+b_2)$"
  - "$\\vec{a} \\cdot \\vec{b} = a_1 b_2 - a_2 b_1$"
correct: 0
hint: "Iloczyn skalarny: $\\vec{a} \\cdot \\vec{b} = a_1 b_1 + a_2 b_2$. Wynikiem jest liczba, nie wektor."
tests:
  vectors: 1.0
---
Iloczyn skalarny wektorów $\\vec{a} = (a_1, a_2)$ i $\\vec{b} = (b_1, b_2)$ to:`,vg=`---
options:
  - "$\\sqrt{13}$"
  - "$5$"
  - "$13$"
  - "$\\sqrt{5}$"
correct: 0
hint: "$|\\vec{v}| = \\sqrt{2^2 + 3^2} = \\sqrt{4 + 9} = \\sqrt{13}$."
tests:
  vectors: 1.0
---
Długość wektora $\\vec{v} = (2, 3)$ wynosi:`,xg=`---
options:
  - "12"
  - "7"
  - "−12"
  - "−7"
correct: 0
hint: "Wzór Viète'a: x₁·x₂ = c/a = 12/1 = 12."
tests:
  vieta: 1.0
  quadratic_eq: 0.25
---
Jeśli x₁, x₂ są pierwiastkami x² − 7x + 12 = 0, to x₁·x₂ =`,wg=`---
options:
  - "$x_1 + x_2 = 5$, $x_1 x_2 = 6$"
  - "$x_1 + x_2 = -5$, $x_1 x_2 = 6$"
  - "$x_1 + x_2 = 5$, $x_1 x_2 = -6$"
  - "$x_1 + x_2 = -5$, $x_1 x_2 = -6$"
correct: 0
hint: "Wzory Viète'a dla $ax^2+bx+c=0$: $x_1+x_2 = -b/a$, $x_1 x_2 = c/a$. Tu: $-(-5)/1=5$, $6/1=6$."
tests:
  vieta: 1.0
  quadratic_eq: 0.25
---
Dla równania $x^2 - 5x + 6 = 0$ wzory Viète'a dają:`,bg=`---
options:
  - "$13$"
  - "$25$"
  - "$12$"
  - "$5$"
correct: 0
hint: "Wzory Viète'a: $x_1+x_2=5$, $x_1 x_2=6$. Suma kwadratów: $(x_1+x_2)^2 - 2x_1x_2 = 25 - 12 = 13$."
tests:
  vieta: 1.0
  quadratic_eq: 0.25
---
Dla pierwiastków $x_1, x_2$ równania $x^2 - 5x + 6 = 0$, oblicz $x_1^2 + x_2^2$:`,$g=`---
options:
  - "$-5$"
  - "$5$"
  - "$6$"
  - "$-6$"
correct: 0
hint: "Wzory Viete'a: $x_1 + x_2 = -\\frac{b}{a} = -\\frac{5}{1} = -5$."
tests:
  vieta: 1.0
  quadratic_eq: 0.25
---
Suma pierwiastków równania $x^2 + 5x + 6 = 0$ wynosi:`,_g=`---
options:
  - "$x^2 - 5x + 6 = 0$"
  - "$x^2 + 5x + 6 = 0$"
  - "$x^2 - 5x - 6 = 0$"
  - "$x^2 - 6x + 5 = 0$"
correct: 0
hint: "Jeśli pierwiastki to $2$ i $3$, to $x_1 + x_2 = 5$ i $x_1 \\cdot x_2 = 6$. Równanie: $x^2 - 5x + 6 = 0$."
tests:
  vieta: 1.0
  quadratic_eq: 0.25
---
Równanie kwadratowe, którego pierwiastkami są $2$ i $3$, to:`,kg=`---
options:
  - "$13$"
  - "$9$"
  - "$25$"
  - "$1$"
correct: 0
hint: "$x_1^2 + x_2^2 = (x_1 + x_2)^2 - 2x_1 x_2$. Z Viete'a: $x_1 + x_2 = 5$, $x_1 x_2 = 6$. Więc $25 - 12 = 13$."
tests:
  vieta: 1.0
  quadratic_eq: 0.25
---
Jeśli $x_1, x_2$ są pierwiastkami $x^2 - 5x + 6 = 0$, to $x_1^2 + x_2^2 =$`,zg=`---
options:
  - "$-\\frac{5}{6}$"
  - "$\\frac{5}{6}$"
  - "$\\frac{6}{5}$"
  - "$-\\frac{6}{5}$"
correct: 0
hint: "$\\frac{1}{x_1} + \\frac{1}{x_2} = \\frac{x_1 + x_2}{x_1 x_2}$. Z Viete'a: $x_1 + x_2 = 5$, $x_1 x_2 = -6$. Wynik: $\\frac{5}{-6} = -\\frac{5}{6}$."
tests:
  vieta: 1.0
  quadratic_eq: 0.25
---
Pierwiastki równania $x^2 - 5x - 6 = 0$ to $x_1$ i $x_2$. Wartość $\\frac{1}{x_1} + \\frac{1}{x_2}$ wynosi:`,Sg=`---
options:
  - "$\\frac{3}{2}$"
  - "$-\\frac{3}{2}$"
  - "$3$"
  - "$6$"
correct: 0
hint: "Wzory Viete'a: $x_1 \\cdot x_2 = \\frac{c}{a} = \\frac{3}{2}$."
tests:
  vieta: 1.0
  quadratic_eq: 0.25
---
Iloczyn pierwiastków równania $2x^2 - 7x + 3 = 0$ wynosi:`;function ip(i){const t=i.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{meta:{},body:i.trim()};const r=t[1],s=t[2].trim(),a={},c=r.split(/\r?\n/);let d=0;for(;d<c.length;){const f=c[d];if(f.startsWith("  ")){d++;continue}const h=f.match(/^(\w+):\s*(.*)/);if(!h){d++;continue}const v=h[1];let w=h[2].trim();if(w===""||w===null){const $=c[d+1]??"";if($.startsWith("  - ")){const k=[];for(d++;d<c.length&&c[d].startsWith("  - ");){let z=c[d].replace(/^  - /,"").trim();z=z.replace(/^["']|["']$/g,""),k.push(z),d++}a[v]=k.length>0?k:null}else if($.match(/^  \w+:/)){const k={};for(d++;d<c.length&&c[d].match(/^  \w+:/);){const z=c[d].match(/^  (\w+):\s*(.*)/);if(z){const T=z[1];let S=z[2].trim().replace(/^["']|["']$/g,"");k[T]=!isNaN(S)&&S!==""?Number(S):S}d++}a[v]=k}else a[v]=null,d++}else w=w.replace(/^["']|["']$/g,""),!isNaN(w)&&w!==""?a[v]=Number(w):w==="true"?a[v]=!0:w==="false"?a[v]=!1:a[v]=w,d++}return{meta:a,body:s}}function op(i,t){return Object.entries(i).map(([r,s])=>{var f;const a=(f=r.match(t))==null?void 0:f[1],{meta:c,body:d}=ip(s);return{id:a,body:d||"",label:c.label??a,labelPl:c.labelPl??c.label??a,scope:c.scope??"default",section:c.section??"default",level:c.level??1,x:c.x??0,y:c.y??0,resources:Array.isArray(c.resources)?c.resources.map(h=>{if(typeof h!="string")return null;const[v,w,$,k]=h.split("|").map(T=>T.trim()),z=w&&!w.includes("/")&&!w.startsWith("http")?`resources/${a}/${w}`:w??"";return{type:v??"article",url:z,titleEn:$??"",titlePl:k??$??""}}).filter(Boolean):[]}})}function sp(i,t){var s;const r={};for(const[a,c]of Object.entries(i)){const d=(s=a.match(t))==null?void 0:s[1];if(!d)continue;const{meta:f,body:h}=ip(c);r[d]||(r[d]=[]),r[d].push({q:h,options:f.options??[],correct:f.correct??0,hint:f.hint??"",tests:f.tests&&typeof f.tests=="object"&&Object.keys(f.tests).length>0?f.tests:{[d]:1}})}return r}function ic(i,t,r=[]){const s=i[t];if(!s||s.length===0||r.includes(-1))return null;const a=s.map((d,f)=>({q:d,i:f})).filter(({i:d})=>!r.includes(d));if(a.length===0)return null;const c=a[Math.floor(Math.random()*a.length)];return{...c.q,index:c.i}}const jg=[["integers","linear_eq"],["fractions","linear_eq"],["powers","linear_eq"],["linear_eq","linear_ineq"],["linear_eq","linear_sys"],["linear_eq","abs_value"],["fractions","sequences"],["powers","sequences"],["thales","pythagoras"],["thales","trig_basic"],["pythagoras","trig_basic"],["pythagoras","solid_geom"],["area_perimeter","solid_geom"],["area_perimeter","planimetria_lp"],["thales","planimetria_lp"],["pythagoras","planimetria_lp"],["trig_basic","trig_lp"],["linear_eq","polynomials"],["powers","polynomials"],["polynomials","rational_expr"],["polynomials","factoring"],["factoring","quadratic_eq"],["polynomials","quadratic_eq"],["quadratic_eq","quadratic_ineq"],["quadratic_eq","vieta"],["quadratic_eq","param_eq"],["quadratic_ineq","param_eq"],["polynomials","poly_roots"],["factoring","poly_roots"],["powers","log_exp"],["log_exp","log_eq"],["log_exp","fn_exp"],["log_exp","fn_log"],["trig_lp","sin_cos_law"],["trig_lp","trig_formulas"],["trig_formulas","trig_eq"],["sequences","arith_geom"],["arith_geom","seq_limits"],["arith_geom","geo_series"],["fn_concept","fn_linear"],["fn_concept","fn_quadratic"],["fn_linear","fn_quadratic"],["quadratic_eq","fn_quadratic"],["fn_quadratic","fn_poly"],["polynomials","fn_poly"],["fn_quadratic","optimization_lp"],["fn_poly","fn_compositions"],["fn_exp","fn_compositions"],["trig_formulas","fn_trig"],["trig_eq","fn_trig"],["linear_sys","analytic_geom"],["analytic_geom","circle_eq"],["quadratic_eq","circle_eq"],["sin_cos_law","solid_geom"],["planimetria_lp","solid_geom"],["trig_lp","planimetria_lp"],["analytic_geom","vectors"],["circle_eq","conic_sections"],["data_basics","stat_lp"],["stat_lp","probability"],["sets","probability"],["counting","probability"],["probability","cond_prob"],["probability","bernoulli"],["cond_prob","distributions"],["bernoulli","distributions"],["sets","logic_basics"],["logic_basics","proof"],["sets","proof"],["counting","permutations"],["counting","combinations"],["combinations","binom_theorem"],["permutations","binom_theorem"],["powers","binom_theorem"],["fn_poly","limits"],["fn_exp","limits"],["fn_log","limits"],["fn_trig","limits"],["seq_limits","limits"],["limits","derivative"],["derivative","deriv_apps"],["optimization_lp","deriv_apps"],["quadratic_eq","complex"],["poly_roots","complex"],["derivative","integral"]],qg={SP8:{label:"SP kl. 8",color:"#4a9eff"},LP:{label:"Matura podst.",color:"#f5a623"},LR:{label:"Matura rozszerz.",color:"#e05cef"},UNIV:{label:"Uczelnia / IB",color:"#6b7d9a"}},Tg={liczby_rzeczywiste:"#3dc9b0",wyrazenia:"#2ecc71",rownania:"#e74c3c",funkcje:"#f5a623",ciagi:"#e67e22",trygonometria:"#9b59b6",planimetria:"#e05cef",geometria_analityczna:"#c0392b",stereometria:"#8e44ad",kombinatoryka:"#c8d6e5",statystyka:"#4a9eff",logika:"#ff6b6b",optymalizacja:"#1abc9c",analiza:"#7f8c8d"},Ag={liczby_rzeczywiste:{en:"Real Numbers",pl:"I. Liczby rzeczywiste"},wyrazenia:{en:"Algebraic Expressions",pl:"II. Wyrażenia algebraiczne"},rownania:{en:"Equations & Ineq.",pl:"III–IV. Równania i układy"},funkcje:{en:"Functions",pl:"V. Funkcje"},ciagi:{en:"Sequences",pl:"VI. Ciągi"},trygonometria:{en:"Trigonometry",pl:"VII. Trygonometria"},planimetria:{en:"Plane Geometry",pl:"VIII. Planimetria"},geometria_analityczna:{en:"Analytic Geometry",pl:"IX. Geometria analityczna"},stereometria:{en:"Solid Geometry",pl:"X. Stereometria"},kombinatoryka:{en:"Combinatorics & Prob.",pl:"XI. Kombinatoryka i rach. prawdop."},statystyka:{en:"Statistics",pl:"XII. Statystyka"},logika:{en:"Logic & Sets",pl:"XIII. Logika i teoria zbiorów"},optymalizacja:{en:"Calculus (LR)",pl:"XIII. Optymalizacja i rach. różniczkowy"},analiza:{en:"Analysis (Univ/IB)",pl:"Analiza matematyczna (uczelnia/IB)"}},Mg={id:"math_pl",subject:"mathematics",title:"Matematyka — Podstawa Programowa",titleEn:"Mathematics — Polish National Curriculum",description:"Pełna podstawa programowa z matematyki: SP8, matura podstawowa, rozszerzona i poziom uczelni.",descriptionEn:"Full Polish mathematics curriculum: primary school year 8 through university/IB level.",lang:"pl",icon:"∑",color:"#4a9eff"},Pg=Object.assign({"./nodes/abs_value/node.md":lh,"./nodes/analytic_geom/node.md":ch,"./nodes/area_perimeter/node.md":uh,"./nodes/arith_geom/node.md":dh,"./nodes/bernoulli/node.md":ph,"./nodes/binom_theorem/node.md":mh,"./nodes/circle_eq/node.md":fh,"./nodes/combinations/node.md":hh,"./nodes/complex/node.md":gh,"./nodes/cond_prob/node.md":yh,"./nodes/conic_sections/node.md":vh,"./nodes/counting/node.md":xh,"./nodes/data_basics/node.md":wh,"./nodes/deriv_apps/node.md":bh,"./nodes/derivative/node.md":$h,"./nodes/distributions/node.md":_h,"./nodes/factoring/node.md":kh,"./nodes/fn_compositions/node.md":zh,"./nodes/fn_concept/node.md":Sh,"./nodes/fn_exp/node.md":jh,"./nodes/fn_linear/node.md":qh,"./nodes/fn_log/node.md":Th,"./nodes/fn_poly/node.md":Ah,"./nodes/fn_quadratic/node.md":Mh,"./nodes/fn_trig/node.md":Ph,"./nodes/fractions/node.md":Ch,"./nodes/geo_series/node.md":Rh,"./nodes/integers/node.md":Dh,"./nodes/integral/node.md":Eh,"./nodes/limits/node.md":Bh,"./nodes/linear_eq/node.md":Nh,"./nodes/linear_ineq/node.md":Ih,"./nodes/linear_sys/node.md":Fh,"./nodes/log_eq/node.md":Lh,"./nodes/log_exp/node.md":Oh,"./nodes/logic_basics/node.md":Hh,"./nodes/optimization_lp/node.md":Wh,"./nodes/param_eq/node.md":Gh,"./nodes/permutations/node.md":Uh,"./nodes/planimetria_lp/node.md":Vh,"./nodes/poly_roots/node.md":Kh,"./nodes/polynomials/node.md":Zh,"./nodes/powers/node.md":Qh,"./nodes/probability/node.md":Yh,"./nodes/proof/node.md":Xh,"./nodes/pythagoras/node.md":Jh,"./nodes/quadratic_eq/node.md":e2,"./nodes/quadratic_ineq/node.md":n2,"./nodes/rational_expr/node.md":t2,"./nodes/seq_limits/node.md":r2,"./nodes/sequences/node.md":i2,"./nodes/sets/node.md":o2,"./nodes/sin_cos_law/node.md":s2,"./nodes/solid_geom/node.md":a2,"./nodes/stat_lp/node.md":l2,"./nodes/thales/node.md":c2,"./nodes/trig_basic/node.md":u2,"./nodes/trig_eq/node.md":d2,"./nodes/trig_formulas/node.md":p2,"./nodes/trig_lp/node.md":m2,"./nodes/vectors/node.md":f2,"./nodes/vieta/node.md":h2}),Cg=op(Pg,/\.\/nodes\/([^/]+)\/node\.md$/),Rg=Object.assign({"./nodes/abs_value/questions/01.md":g2,"./nodes/abs_value/questions/02.md":y2,"./nodes/abs_value/questions/03.md":v2,"./nodes/analytic_geom/questions/01.md":x2,"./nodes/analytic_geom/questions/02.md":w2,"./nodes/analytic_geom/questions/03.md":b2,"./nodes/area_perimeter/questions/01.md":$2,"./nodes/area_perimeter/questions/02.md":_2,"./nodes/area_perimeter/questions/03.md":k2,"./nodes/arith_geom/questions/01.md":z2,"./nodes/arith_geom/questions/02.md":S2,"./nodes/arith_geom/questions/03.md":j2,"./nodes/bernoulli/questions/01.md":q2,"./nodes/bernoulli/questions/02.md":T2,"./nodes/bernoulli/questions/03.md":A2,"./nodes/bernoulli/questions/04.md":M2,"./nodes/bernoulli/questions/05.md":P2,"./nodes/bernoulli/questions/06.md":C2,"./nodes/bernoulli/questions/07.md":R2,"./nodes/bernoulli/questions/08.md":D2,"./nodes/binom_theorem/questions/01.md":E2,"./nodes/binom_theorem/questions/02.md":B2,"./nodes/binom_theorem/questions/03.md":N2,"./nodes/binom_theorem/questions/04.md":I2,"./nodes/binom_theorem/questions/05.md":F2,"./nodes/binom_theorem/questions/06.md":L2,"./nodes/binom_theorem/questions/07.md":O2,"./nodes/binom_theorem/questions/08.md":H2,"./nodes/circle_eq/questions/01.md":W2,"./nodes/circle_eq/questions/02.md":G2,"./nodes/circle_eq/questions/03.md":U2,"./nodes/combinations/questions/01.md":V2,"./nodes/combinations/questions/02.md":K2,"./nodes/combinations/questions/03.md":Z2,"./nodes/combinations/questions/04.md":Q2,"./nodes/combinations/questions/05.md":Y2,"./nodes/combinations/questions/06.md":X2,"./nodes/combinations/questions/07.md":J2,"./nodes/combinations/questions/08.md":e4,"./nodes/complex/questions/01.md":n4,"./nodes/complex/questions/02.md":t4,"./nodes/complex/questions/03.md":r4,"./nodes/cond_prob/questions/01.md":i4,"./nodes/cond_prob/questions/02.md":o4,"./nodes/cond_prob/questions/03.md":s4,"./nodes/cond_prob/questions/04.md":a4,"./nodes/cond_prob/questions/05.md":l4,"./nodes/cond_prob/questions/06.md":c4,"./nodes/cond_prob/questions/07.md":u4,"./nodes/cond_prob/questions/08.md":d4,"./nodes/cond_prob/questions/09.md":p4,"./nodes/cond_prob/questions/10.md":m4,"./nodes/conic_sections/questions/01.md":f4,"./nodes/conic_sections/questions/02.md":h4,"./nodes/conic_sections/questions/03.md":g4,"./nodes/counting/questions/01.md":y4,"./nodes/counting/questions/02.md":v4,"./nodes/counting/questions/03.md":x4,"./nodes/counting/questions/04.md":w4,"./nodes/counting/questions/05.md":b4,"./nodes/counting/questions/06.md":$4,"./nodes/counting/questions/07.md":_4,"./nodes/counting/questions/08.md":k4,"./nodes/counting/questions/09.md":z4,"./nodes/counting/questions/10.md":S4,"./nodes/data_basics/questions/01.md":j4,"./nodes/data_basics/questions/02.md":q4,"./nodes/data_basics/questions/03.md":T4,"./nodes/deriv_apps/questions/01.md":A4,"./nodes/deriv_apps/questions/02.md":M4,"./nodes/deriv_apps/questions/03.md":P4,"./nodes/derivative/questions/01.md":C4,"./nodes/derivative/questions/02.md":R4,"./nodes/derivative/questions/03.md":D4,"./nodes/distributions/questions/01.md":E4,"./nodes/distributions/questions/02.md":B4,"./nodes/distributions/questions/03.md":N4,"./nodes/factoring/questions/01.md":I4,"./nodes/factoring/questions/02.md":F4,"./nodes/factoring/questions/03.md":L4,"./nodes/factoring/questions/04.md":O4,"./nodes/factoring/questions/05.md":H4,"./nodes/factoring/questions/06.md":W4,"./nodes/factoring/questions/07.md":G4,"./nodes/factoring/questions/08.md":U4,"./nodes/factoring/questions/09.md":V4,"./nodes/factoring/questions/10.md":K4,"./nodes/fn_compositions/questions/01.md":Z4,"./nodes/fn_compositions/questions/02.md":Q4,"./nodes/fn_compositions/questions/03.md":Y4,"./nodes/fn_concept/questions/01.md":X4,"./nodes/fn_concept/questions/02.md":J4,"./nodes/fn_concept/questions/03.md":e3,"./nodes/fn_exp/questions/01.md":n3,"./nodes/fn_exp/questions/02.md":t3,"./nodes/fn_exp/questions/03.md":r3,"./nodes/fn_linear/questions/01.md":i3,"./nodes/fn_linear/questions/02.md":o3,"./nodes/fn_linear/questions/03.md":s3,"./nodes/fn_log/questions/01.md":a3,"./nodes/fn_log/questions/02.md":l3,"./nodes/fn_log/questions/03.md":c3,"./nodes/fn_poly/questions/01.md":u3,"./nodes/fn_poly/questions/02.md":d3,"./nodes/fn_poly/questions/03.md":p3,"./nodes/fn_quadratic/questions/01.md":m3,"./nodes/fn_quadratic/questions/02.md":f3,"./nodes/fn_quadratic/questions/03.md":h3,"./nodes/fn_quadratic/questions/04.md":g3,"./nodes/fn_quadratic/questions/05.md":y3,"./nodes/fn_quadratic/questions/06.md":v3,"./nodes/fn_quadratic/questions/07.md":x3,"./nodes/fn_quadratic/questions/08.md":w3,"./nodes/fn_quadratic/questions/09.md":b3,"./nodes/fn_quadratic/questions/10.md":$3,"./nodes/fn_trig/questions/01.md":_3,"./nodes/fn_trig/questions/02.md":k3,"./nodes/fn_trig/questions/03.md":z3,"./nodes/fractions/questions/01.md":S3,"./nodes/fractions/questions/02.md":j3,"./nodes/fractions/questions/03.md":q3,"./nodes/geo_series/questions/01.md":T3,"./nodes/geo_series/questions/02.md":A3,"./nodes/geo_series/questions/03.md":M3,"./nodes/integers/questions/01.md":P3,"./nodes/integers/questions/02.md":C3,"./nodes/integers/questions/03.md":R3,"./nodes/integral/questions/01.md":D3,"./nodes/integral/questions/02.md":E3,"./nodes/integral/questions/03.md":B3,"./nodes/limits/questions/01.md":N3,"./nodes/limits/questions/02.md":I3,"./nodes/limits/questions/03.md":F3,"./nodes/linear_eq/questions/01.md":L3,"./nodes/linear_eq/questions/02.md":O3,"./nodes/linear_eq/questions/03.md":H3,"./nodes/linear_ineq/questions/01.md":W3,"./nodes/linear_ineq/questions/02.md":G3,"./nodes/linear_ineq/questions/03.md":U3,"./nodes/linear_sys/questions/01.md":V3,"./nodes/linear_sys/questions/02.md":K3,"./nodes/linear_sys/questions/03.md":Z3,"./nodes/log_eq/questions/01.md":Q3,"./nodes/log_eq/questions/02.md":Y3,"./nodes/log_eq/questions/03.md":X3,"./nodes/log_exp/questions/01.md":J3,"./nodes/log_exp/questions/02.md":e5,"./nodes/log_exp/questions/03.md":n5,"./nodes/logic_basics/questions/01.md":t5,"./nodes/logic_basics/questions/02.md":r5,"./nodes/logic_basics/questions/03.md":i5,"./nodes/optimization_lp/questions/01.md":o5,"./nodes/optimization_lp/questions/02.md":s5,"./nodes/optimization_lp/questions/03.md":a5,"./nodes/optimization_lp/questions/04.md":l5,"./nodes/optimization_lp/questions/05.md":c5,"./nodes/optimization_lp/questions/06.md":u5,"./nodes/optimization_lp/questions/07.md":d5,"./nodes/optimization_lp/questions/08.md":p5,"./nodes/param_eq/questions/01.md":m5,"./nodes/param_eq/questions/02.md":f5,"./nodes/param_eq/questions/03.md":h5,"./nodes/permutations/questions/01.md":g5,"./nodes/permutations/questions/02.md":y5,"./nodes/permutations/questions/03.md":v5,"./nodes/permutations/questions/04.md":x5,"./nodes/permutations/questions/05.md":w5,"./nodes/permutations/questions/06.md":b5,"./nodes/permutations/questions/07.md":$5,"./nodes/permutations/questions/08.md":_5,"./nodes/planimetria_lp/questions/01.md":k5,"./nodes/planimetria_lp/questions/02.md":z5,"./nodes/planimetria_lp/questions/03.md":S5,"./nodes/poly_roots/questions/01.md":j5,"./nodes/poly_roots/questions/02.md":q5,"./nodes/poly_roots/questions/03.md":T5,"./nodes/polynomials/questions/01.md":A5,"./nodes/polynomials/questions/02.md":M5,"./nodes/polynomials/questions/03.md":P5,"./nodes/polynomials/questions/04.md":C5,"./nodes/polynomials/questions/05.md":R5,"./nodes/polynomials/questions/06.md":D5,"./nodes/polynomials/questions/07.md":E5,"./nodes/polynomials/questions/08.md":B5,"./nodes/polynomials/questions/09.md":N5,"./nodes/polynomials/questions/10.md":I5,"./nodes/powers/questions/01.md":F5,"./nodes/powers/questions/02.md":L5,"./nodes/powers/questions/03.md":O5,"./nodes/probability/questions/01.md":H5,"./nodes/probability/questions/02.md":W5,"./nodes/probability/questions/03.md":G5,"./nodes/probability/questions/04.md":U5,"./nodes/probability/questions/05.md":V5,"./nodes/probability/questions/06.md":K5,"./nodes/probability/questions/07.md":Z5,"./nodes/probability/questions/08.md":Q5,"./nodes/probability/questions/09.md":Y5,"./nodes/probability/questions/10.md":X5,"./nodes/proof/questions/01.md":J5,"./nodes/proof/questions/02.md":e6,"./nodes/proof/questions/03.md":n6,"./nodes/pythagoras/questions/01.md":t6,"./nodes/pythagoras/questions/02.md":r6,"./nodes/pythagoras/questions/03.md":i6,"./nodes/quadratic_eq/questions/01.md":o6,"./nodes/quadratic_eq/questions/02.md":s6,"./nodes/quadratic_eq/questions/03.md":a6,"./nodes/quadratic_eq/questions/04.md":l6,"./nodes/quadratic_eq/questions/05.md":c6,"./nodes/quadratic_eq/questions/06.md":u6,"./nodes/quadratic_eq/questions/07.md":d6,"./nodes/quadratic_eq/questions/08.md":p6,"./nodes/quadratic_eq/questions/09.md":m6,"./nodes/quadratic_eq/questions/10.md":f6,"./nodes/quadratic_ineq/questions/01.md":h6,"./nodes/quadratic_ineq/questions/02.md":g6,"./nodes/quadratic_ineq/questions/03.md":y6,"./nodes/quadratic_ineq/questions/04.md":v6,"./nodes/quadratic_ineq/questions/05.md":x6,"./nodes/quadratic_ineq/questions/06.md":w6,"./nodes/quadratic_ineq/questions/07.md":b6,"./nodes/quadratic_ineq/questions/08.md":$6,"./nodes/rational_expr/questions/01.md":_6,"./nodes/rational_expr/questions/02.md":k6,"./nodes/rational_expr/questions/03.md":z6,"./nodes/rational_expr/questions/04.md":S6,"./nodes/rational_expr/questions/05.md":j6,"./nodes/rational_expr/questions/06.md":q6,"./nodes/rational_expr/questions/07.md":T6,"./nodes/seq_limits/questions/01.md":A6,"./nodes/seq_limits/questions/02.md":M6,"./nodes/seq_limits/questions/03.md":P6,"./nodes/sequences/questions/01.md":C6,"./nodes/sequences/questions/02.md":R6,"./nodes/sequences/questions/03.md":D6,"./nodes/sets/questions/01.md":E6,"./nodes/sets/questions/02.md":B6,"./nodes/sets/questions/03.md":N6,"./nodes/sets/questions/04.md":I6,"./nodes/sets/questions/05.md":F6,"./nodes/sets/questions/06.md":L6,"./nodes/sets/questions/07.md":O6,"./nodes/sets/questions/08.md":H6,"./nodes/sets/questions/09.md":W6,"./nodes/sets/questions/10.md":G6,"./nodes/sin_cos_law/questions/01.md":U6,"./nodes/sin_cos_law/questions/02.md":V6,"./nodes/sin_cos_law/questions/03.md":K6,"./nodes/solid_geom/questions/01.md":Z6,"./nodes/solid_geom/questions/02.md":Q6,"./nodes/solid_geom/questions/03.md":Y6,"./nodes/stat_lp/questions/01.md":X6,"./nodes/stat_lp/questions/02.md":J6,"./nodes/stat_lp/questions/03.md":eg,"./nodes/thales/questions/01.md":ng,"./nodes/thales/questions/02.md":tg,"./nodes/thales/questions/03.md":rg,"./nodes/trig_basic/questions/01.md":ig,"./nodes/trig_basic/questions/02.md":og,"./nodes/trig_basic/questions/03.md":sg,"./nodes/trig_eq/questions/01.md":ag,"./nodes/trig_eq/questions/02.md":lg,"./nodes/trig_eq/questions/03.md":cg,"./nodes/trig_formulas/questions/01.md":ug,"./nodes/trig_formulas/questions/02.md":dg,"./nodes/trig_formulas/questions/03.md":pg,"./nodes/trig_lp/questions/01.md":mg,"./nodes/trig_lp/questions/02.md":fg,"./nodes/trig_lp/questions/03.md":hg,"./nodes/vectors/questions/01.md":gg,"./nodes/vectors/questions/02.md":yg,"./nodes/vectors/questions/03.md":vg,"./nodes/vieta/questions/01.md":xg,"./nodes/vieta/questions/02.md":wg,"./nodes/vieta/questions/03.md":bg,"./nodes/vieta/questions/04.md":$g,"./nodes/vieta/questions/05.md":_g,"./nodes/vieta/questions/06.md":kg,"./nodes/vieta/questions/07.md":zg,"./nodes/vieta/questions/08.md":Sg}),Dg=sp(Rg,/\.\/nodes\/([^/]+)\/questions\//),Eg=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:Mg,QUESTION_BANK:Dg,RAW_EDGES:jg,RAW_NODES:Cg,SCOPE_COLORS:Tg,SCOPE_LABELS:Ag,SECTIONS:qg},Symbol.toStringTag,{value:"Module"})),Bg=`---
label: Binary Operations & Algebraic Structures
labelPl: Działania dwuargumentowe i struktury algebraiczne
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A binary operation on a set S is a function S × S → S. Properties: closure, associativity, commutativity, identity element, inverses. Cayley tables. Definition of a magma, semigroup, monoid, and group. Examples and non-examples.
`,Ng=`---
label: Cosets & Quotient Groups
labelPl: Warstwy i grupy ilorazowe
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
Left coset: gH = {gh : h ∈ H}. Right coset: Hg. Cosets partition G; all have size |H| (Lagrange). A subgroup N is normal (N ⊴ G) iff gN = Ng for all g. Quotient group G/N: cosets with operation (aN)(bN) = abN. Order |G/N| = |G|/|N|.
`,Ig=`---
label: Cyclic Groups & Generators
labelPl: Grupy cykliczne i generatory
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A cyclic group is generated by a single element: G = ⟨g⟩ = {gⁿ : n ∈ ℤ}. Finite cyclic group ℤₙ and infinite cyclic group ℤ. Every subgroup of a cyclic group is cyclic. Classification: every cyclic group is isomorphic to ℤ or ℤₙ. Number of generators of ℤₙ equals φ(n).
`,Fg=`---
label: "Direct Sums"
labelPl: "Suma prosta"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Lg=`---
label: Field Extensions
labelPl: Rozszerzenia ciał
scope: fields
section: FIELDS
level: 7
x: 0
y: 0
---
A field extension K/F means F ⊆ K are both fields. Degree [K:F] = dim_F K. Algebraic vs transcendental elements. Minimal polynomial of an algebraic element. Simple extensions F(α). Tower law: [L:F] = [L:K][K:F]. Algebraic closure. Splitting fields; every polynomial splits over its splitting field.
`,Og=`---
label: Fields
labelPl: Ciała
scope: fields
section: FIELDS
level: 6
x: 0
y: 0
---
A field is a commutative ring where every nonzero element is a unit. Examples: ℚ, ℝ, ℂ, ℤₚ (p prime), ℚ(√2). Characteristic 0 or prime. Prime subfield. Finite fields: GF(pⁿ) exists and is unique up to isomorphism for every prime power pⁿ. Multiplicative group of a finite field is cyclic.
`,Hg=`---
label: "Finitely Generated Modules"
labelPl: "Moduły skończenie generowane"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Wg=`---
label: "Free Modules"
labelPl: "Moduły wolne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Gg=`---
label: Group Actions & Cayley's Theorem
labelPl: Działania grup i twierdzenie Cayleya
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
A group action of G on set X: G × X → X satisfying identity and compatibility. Orbits and stabilisers; orbit-stabiliser theorem |G| = |Orb(x)| · |Stab(x)|. Cayley's theorem: every group embeds into a symmetric group. Conjugation action, class equation. Burnside's lemma.
`,Ug=`---
label: Group Homomorphisms & Isomorphisms
labelPl: Homomorfizmy i izomorfizmy grup
scope: morphisms
section: GROUPS
level: 4
x: 0
y: 0
---
A group homomorphism φ: G → H satisfies φ(ab) = φ(a)φ(b). Kernel ker(φ) = {g : φ(g) = e_H} is a normal subgroup. Image im(φ) is a subgroup of H. An isomorphism is a bijective homomorphism; G ≅ H. Automorphisms Aut(G). Examples: det: GL(n) → ℝ*, exp: (ℝ,+) → (ℝ⁺,×).
`,Vg=`---
label: Groups — Definition & Examples
labelPl: Grupy — definicja i przykłady
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A group (G, ·) satisfies: closure, associativity, identity, inverses. Abelian groups. Examples: (ℤ, +), (ℤₙ, +), (ℚ\\{0}, ×), symmetric group Sₙ, dihedral group Dₙ, GL(n,ℝ). Order of a group and order of an element. Uniqueness of identity and inverses.
`,Kg=`---
label: Subrings & Ideals
labelPl: Podpierścienie i ideały
scope: rings
section: RINGS
level: 4
x: 0
y: 0
---
A subring S ⊆ R is closed under + and ·. An ideal I ⊴ R additionally satisfies rI ⊆ I and Ir ⊆ I for all r ∈ R. Left, right, and two-sided ideals. Principal ideal (a) = aR. Ideal generated by a set. Quotient ring R/I: cosets with coordinatewise operations. Maximal and prime ideals.
`,Zg=`---
label: Mathematical Induction
labelPl: Indukcja matematyczna
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Weak induction: base case and inductive step. Strong induction. Well-ordering principle and its equivalence to induction. Applications: proving divisibility, inequalities, and properties of sequences. Recursively defined structures.
`,Qg=`---
label: Integral Domains & Fields
labelPl: Dziedziny całkowitości i ciała
scope: rings
section: RINGS
level: 5
x: 0
y: 0
---
An integral domain is a commutative ring with unity and no zero divisors. Every field is an integral domain. Characteristic of an integral domain is 0 or prime. Field of fractions construction. A finite integral domain is a field. Prime and irreducible elements; their relationship in a domain.
`,Yg=`---
label: First Isomorphism Theorem
labelPl: Pierwsze twierdzenie o izomorfizmie
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
If φ: G → H is a homomorphism then G/ker(φ) ≅ im(φ). The natural projection π: G → G/N is a surjective homomorphism with kernel N. Second and third isomorphism theorems. Correspondence theorem: subgroups of G/N correspond to subgroups of G containing N.
`,Xg=`---
label: "Jordan Normal Form"
labelPl: "postać Jordana"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,Jg=`---
label: "Module Homomorphisms"
labelPl: "Homomorfizmy modułów"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,ey=`---
label: "Modules: Definition"
labelPl: "Moduły: Definicja"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,ny=`---
label: Normal Subgroups
labelPl: Podgrupy normalne
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
N ⊴ G iff gNg⁻¹ = N for all g ∈ G (equivalently gN = Ng). Every subgroup of an abelian group is normal. The kernel of any homomorphism is normal. The center Z(G) is normal. Characterisation via conjugation. Simple groups: no proper nontrivial normal subgroups.
`,ty=`---
label: Polynomial Rings
labelPl: Pierścienie wielomianów
scope: rings
section: RINGS
level: 6
x: 0
y: 0
---
The polynomial ring R[x] over a commutative ring R. Degree, leading coefficient, monic polynomials. Division algorithm in F[x] for a field F. Irreducible polynomials; unique factorisation in F[x]. Roots and the factor theorem. F[x]/(p(x)) as a quotient ring; when it is a field.
`,ry=`---
label: "Primary Decomposition"
labelPl: "Rozkład pierwotny"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,iy=`---
label: "Rational Canonical Form"
labelPl: "Forma kanoniczna wymierna"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,oy=`---
label: Relations & Equivalence Classes
labelPl: Relacje i klasy równoważności
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Binary relations on a set: reflexivity, symmetry, transitivity. Equivalence relations and the partition they induce. Equivalence classes, quotient sets. Partial orders and total orders. The integers modulo n as a key example.
`,sy=`---
label: Ring Homomorphisms
labelPl: Homomorfizmy pierścieni
scope: morphisms
section: RINGS
level: 5
x: 0
y: 0
---
A ring homomorphism φ: R → S satisfies φ(a+b) = φ(a)+φ(b) and φ(ab) = φ(a)φ(b). Kernel is an ideal; image is a subring. First isomorphism theorem for rings: R/ker(φ) ≅ im(φ). Evaluation homomorphism for polynomials. Correspondence between ideals of R/I and ideals of R containing I.
`,ay=`---
label: Rings — Definition & Examples
labelPl: Pierścienie — definicja i przykłady
scope: rings
section: RINGS
level: 3
x: 0
y: 0
---
A ring (R, +, ·) has (R, +) abelian group, multiplication associative, and distributivity. Commutative rings. Unity (multiplicative identity). Examples: ℤ, ℚ, ℝ, ℂ, ℤₙ, M_n(ℝ), ℤ[x], ℤ[i] (Gaussian integers). Zero divisors, units, nilpotents. Characteristic of a ring.
`,ly=`---
label: Sets & Functions
labelPl: Zbiory i funkcje
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Naive set theory: set notation, subsets, unions, intersections, complements. Functions as relations: domain, codomain, image. Injective, surjective, bijective functions. Composition and inverse functions.
`,cy=`---
label: Subgroups & Lagrange's Theorem
labelPl: Podgrupy i twierdzenie Lagrange'a
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A subgroup H ≤ G satisfies closure and inverse closure (subgroup test). Trivial and improper subgroups. Generated subgroup ⟨S⟩. Lagrange's theorem: |H| divides |G| for finite G. Corollary: order of every element divides |G|. Index of a subgroup.
`,uy=`---
label: "Submodules"
labelPl: "Podmoduły"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,dy=`---
label: Sylow Theorems
labelPl: Twierdzenia Sylowa
scope: structure
section: GROUPS
level: 6
x: 0
y: 0
---
Let |G| = pⁿm with gcd(p, m) = 1. Sylow p-subgroup has order pⁿ. First theorem: Sylow p-subgroups exist. Second: all are conjugate. Third: the number nₚ of Sylow p-subgroups satisfies nₚ ≡ 1 (mod p) and nₚ | m. Applications to classifying groups of small order.
`,py=`---
label: "Torsion Modules"
labelPl: "Moduły torsyjne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,my=`---
options:
  - "It is a semigroup but not a monoid"
  - "It is a monoid"
  - "It is a group"
  - "It is not a semigroup"
correct: 0
hint: Subtraction is associative? Check: (5-3)-1=1, 5-(3-1)=3. Not equal — so subtraction on ℤ is NOT associative; hence not even a semigroup. But the question uses (ℕ, −)... wait, actually subtraction on ℕ isn't even closed. On ℤ: not associative.
tests:
  binary_ops: 1.0
---
The structure $(\\mathbb{Z}, -)$ where the operation is subtraction:
`,fy=`---
options:
  - "There is exactly one identity element"
  - "There can be two or more identity elements"
  - "An identity element need not be unique"
  - "Identity elements only exist in groups"
correct: 0
hint: Suppose e and e' are both identities. Then e = e·e' = e'. The argument forces uniqueness in any algebraic structure with an associative operation.
tests:
  binary_ops: 1.0
---
In a monoid (S, ·), the identity element is:
`,hy=`---
options:
  - "A binary operation ∗ on S such that for all a,b,c ∈ S: (a∗b)∗c = a∗(b∗c)"
  - "A binary operation ∗ on S such that a∗b = b∗a for all a,b"
  - "A function S → S"
  - "An operation where every element has an inverse"
correct: 0
hint: Associativity is the property (a∗b)∗c = a∗(b∗c). Commutativity (a∗b = b∗a) is a separate, stronger condition not required for a semigroup.
tests:
  binary_ops: 1.0
---
Associativity of a binary operation ∗ on S means:
`,gy=`---
options:
  - "They partition $G$ into equal-sized pieces"
  - "They form a group under coset multiplication"
  - "Left cosets and right cosets are always equal"
  - "A coset is always a subgroup"
correct: 0
hint: The cosets of H in G partition G (each element belongs to exactly one coset) and all cosets have the same size |H|. They form a group only if H is normal.
tests:
  cosets: 1.0
---
The left cosets of a subgroup $H$ in a group $G$:
`,yy=`---
options:
  - "$gN = Ng$ for all $g \\in G$"
  - "$N$ is abelian"
  - "Every element of $N$ commutes with every element of $G$"
  - "$N$ has index 2 in $G$"
correct: 0
hint: N ⊴ G means left and right cosets coincide: gN = Ng for every g ∈ G. Equivalently, gNg⁻¹ = N for all g. Every subgroup of index 2 is automatically normal.
tests:
  cosets: 1.0
---
A subgroup $N$ of $G$ is called normal if:
`,vy=`---
options:
  - "3"
  - "2"
  - "6"
  - "1"
correct: 0
hint: The order of S₃ is 3! = 6. By Lagrange the index [S₃:H] = |S₃|/|H| = 6/2 = 3. So there are 3 left cosets.
tests:
  cosets: 1.0
---
How many left cosets does a subgroup of order $2$ have in $S_3$ (order $6$)?
`,xy=`---
options:
  - "Every cyclic group is abelian"
  - "Every abelian group is cyclic"
  - "Cyclic groups must be finite"
  - "The only cyclic group is $\\mathbb{Z}$"
correct: 0
hint: If G = ⟨g⟩ then any two elements gᵐ and gⁿ commute: gᵐgⁿ = gᵐ⁺ⁿ = gⁿgᵐ. So every cyclic group is abelian. The converse fails: ℤ₂×ℤ₂ is abelian but not cyclic.
tests:
  cyclic_groups: 1.0
---
Which statement about cyclic groups is always true?
`,wy=`---
options:
  - "2"
  - "1"
  - "4"
  - "6"
correct: 0
hint: The generators of ℤ₆ are elements of order 6, i.e., those coprime to 6. φ(6) = φ(2)φ(3) = 1·2 = 2. The generators are 1 and 5.
tests:
  cyclic_groups: 1.0
---
How many generators does the cyclic group $\\mathbb{Z}_6$ have?
`,by=`---
options:
  - "Every subgroup of a cyclic group is cyclic"
  - "Cyclic groups have no proper subgroups"
  - "A cyclic group can have non-cyclic subgroups"
  - "The only subgroup of $\\mathbb{Z}$ is $\\mathbb{Z}$ itself"
correct: 0
hint: If G = ⟨g⟩ is cyclic, any subgroup H consists of powers of g, so H = ⟨gᵏ⟩ for some k — cyclic. For ℤ, every subgroup is nℤ = ⟨n⟩ for some n ≥ 0.
tests:
  cyclic_groups: 1.0
---
Which is true about subgroups of cyclic groups?
`,$y=`---
options:
  - "M₁ ⊕ M₂ = {(m₁, m₂) : m₁ ∈ M₁, m₂ ∈ M₂} with componentwise operations"
  - "M₁ × M₂ = pairs with coordinate-wise addition and scalar multiplication"
  - "Both descriptions describe the same object"
  - "Direct sum and direct product are different for two modules"
correct: 2
hint: For finitely many modules, direct sum and direct product coincide. The notation M₁ ⊕ M₂ or M₁ × M₂ both work.
tests:
  direct_sums: 1.0
  modules_intro: 0.5
  submodules: 0.25
---
The direct sum M₁ ⊕ M₂ of R-modules is:

`,_y=`---
options:
  - "Every submodule N has a complement M' such that M = N ⊕ M'"
  - "Direct summands are always isomorphic"
  - "Every submodule is a direct summand"
  - "Direct sum is not associative"
correct: 0
hint: This is the definition of a direct summand: N is a direct summand if there exists M' such that M = N ⊕ M'.
tests:
  direct_sums: 1.0
  submodules: 0.25
---
A submodule N of M is a direct summand if:

`,ky=`---
options:
  - "Rⁿ ≅ R ⊕ R ⊕ ... ⊕ R (n copies)"
  - "Rⁿ is isomorphic to the set of column vectors of length n"
  - "Both descriptions are correct"
  - "Rⁿ is only defined for fields"
correct: 2
hint: Rⁿ is the n-dimensional free module over R, which is the direct sum of n copies of R. It can also be viewed as column vectors.
tests:
  direct_sums: 1.0
  modules_intro: 0.25
---
The free module Rⁿ can be described as:

`,zy=`---
options:
  - "$\\dim_F K$ as a vector space over $F$"
  - "The number of elements in $K$"
  - "The degree of the minimal polynomial of $K$"
  - "$|K| / |F|$"
correct: 0
hint: The degree [K:F] is the dimension of K as a vector space over F. For example [ℂ:ℝ] = 2 (basis {1, i}), [ℝ:ℚ] = ∞.
tests:
  field_extensions: 1.0
  fields_intro: 0.5
  poly_rings: 0.3
---
The degree of a field extension $K/F$, written $[K:F]$, is:
`,Sy=`---
options:
  - "$[L:F] = [L:K][K:F]$"
  - "$[L:F] = [L:K] + [K:F]$"
  - "$[L:F] = [L:K] / [K:F]$"
  - "$[L:K] = [L:F]$ always"
correct: 0
hint: Tower law (multiplicativity of degree): if F ⊆ K ⊆ L are fields, then [L:F] = [L:K]·[K:F]. For example [ℚ(√2,√3):ℚ] = [ℚ(√2,√3):ℚ(√2)]·[ℚ(√2):ℚ] = 2·2 = 4.
tests:
  field_extensions: 1.0
  fields_intro: 0.5
  poly_rings: 0.3
---
The Tower Law for field extensions $F \\subseteq K \\subseteq L$ states:
`,jy=`---
options:
  - "The smallest field extension of $F$ over which $f$ splits into linear factors"
  - "Any field containing $F$"
  - "The field $F$ itself if $f$ is irreducible"
  - "The field generated by the coefficients of $f$"
correct: 0
hint: The splitting field of f over F is F(α₁,...,αₙ) where α₁,...,αₙ are all roots of f. It is the smallest extension where f factors completely into linear factors.
tests:
  field_extensions: 1.0
  fields_intro: 0.5
  poly_rings: 0.5
---
The splitting field of a polynomial $f \\in F[x]$ over $F$ is:
`,qy=`---
options:
  - "A commutative ring with unity in which every nonzero element is a unit"
  - "A ring with no zero divisors"
  - "Any integral domain"
  - "A ring in which $1 = 0$"
correct: 0
hint: A field is a commutative ring with 1 ≠ 0 where every nonzero element has a multiplicative inverse. Every field is an integral domain, but not vice versa (ℤ is not a field).
tests:
  fields_intro: 1.0
  integral_domains: 0.5
---
A field is:
`,Ty=`---
options:
  - "$\\mathbb{Z}_p$ for prime $p$"
  - "$\\mathbb{Z}_n$ for any $n > 1$"
  - "$\\mathbb{Z}_4$"
  - "$\\mathbb{Z}_6$"
correct: 0
hint: ℤₙ is a field iff n is prime. If n is composite, say n = ab with 1 < a,b < n, then a and b are zero divisors (a·b ≡ 0 mod n) so ℤₙ is not even an integral domain.
tests:
  fields_intro: 1.0
  integral_domains: 0.5
---
Which of the following is a field?
`,Ay=`---
options:
  - "The multiplicative group of a finite field is cyclic"
  - "Every finite field has prime order"
  - "There are infinitely many non-isomorphic fields of order $p^2$"
  - "Finite fields of the same order may be non-isomorphic"
correct: 0
hint: For GF(pⁿ), the multiplicative group GF(pⁿ)* has order pⁿ-1 and is cyclic (generated by a primitive element). Also: finite fields of the same order are unique up to isomorphism.
tests:
  fields_intro: 1.0
  integral_domains: 0.3
---
Which is true about finite fields (Galois fields)?
`,My=`---
options:
  - "M = Rm₁ + Rm₂ + ... + Rmₙ for some m₁,...,mₙ ∈ M"
  - "M has a finite generating set"
  - "There exists a surjective R-linear map Rⁿ → M"
  - "All of the above are equivalent"
correct: 3
hint: A module is finitely generated iff it can be generated by finitely many elements, equivalently there's a surjection from Rⁿ.
tests:
  finitely_generated: 1.0
  modules_intro: 0.25
  direct_sums: 0.25
---
M is finitely generated if and only if:

`,Py=`---
options:
  - "A submodule of a finitely generated module is finitely generated"
  - "A quotient of a finitely generated module is finitely generated"
  - "Both are true"
  - "Neither is true in general"
correct: 2
hint: Submodules and quotients of finitely generated modules are also finitely generated (over Noetherian rings, but here we assume the standard property).
tests:
  finitely_generated: 1.0
  submodules: 0.25
---
For modules over a ring:

`,Cy=`---
options:
  - "Cyclic module ≅ R/I for some ideal I of R"
  - "Every cyclic module is isomorphic to R"
  - "Cyclic modules have dimension 1"
  - "Cyclic modules are always free"
correct: 0
hint: A cyclic module is generated by one element, so it's isomorphic to R/ann(m) for some m ∈ M.
tests:
  finitely_generated: 1.0
  modules_intro: 0.25
  ideals: 0.25
---
A cyclic R-module is isomorphic to:

`,Ry=`---
options:
  - "M has a basis: a linearly independent generating set"
  - "M ≅ Rⁿ for some n"
  - "M is isomorphic to a direct sum of copies of R"
  - "All of the above are equivalent"
correct: 3
hint: Free modules are precisely those with a basis. Over R, this means M ≅ Rⁿ.
tests:
  free_modules: 1.0
  finitely_generated: 0.5
  direct_sums: 0.25
---
A free R-module is characterized by:

`,Dy=`---
options:
  - "Every vector space is a free module"
  - "Every abelian group is a free ℤ-module"
  - "ℤ/2ℤ is a free ℤ-module"
  - "Free modules over ℤ are exactly ℤⁿ"
correct: 0
hint: Vector spaces over fields always have a basis. But ℤ-modules (abelian groups) need not be free—ℤ/2ℤ has no basis.
tests:
  free_modules: 1.0
  modules_intro: 0.25
---
Which is true?

`,Ey=`---
options:
  - "Every projective module is a direct summand of a free module"
  - "Every free module is projective"
  - "Projective modules are precisely those that are free"
  - "Projective modules do not exist over ℤ"
correct: 1
hint: Free ⇒ projective: if M is free with basis, any surjection from a free module to M splits.
tests:
  free_modules: 1.0
  finitely_generated: 0.25
  direct_sums: 0.25
---
Which is true about projective modules?

`,By=`---
options:
  - "$|G| = |\\text{Orb}(x)| \\cdot |\\text{Stab}(x)|$"
  - "$|G| = |\\text{Orb}(x)| + |\\text{Stab}(x)|$"
  - "$|\\text{Orb}(x)| = |\\text{Stab}(x)|$"
  - "$|\\text{Stab}(x)| = |G| / |X|$"
correct: 0
hint: The orbit-stabiliser theorem says [G:Stab(x)] = |Orb(x)|. Since |G| = |Orb(x)|·|Stab(x)| follows directly from the index formula.
tests:
  group_actions: 1.0
---
The Orbit-Stabiliser Theorem states that for any $x \\in X$ (where $G$ acts on $X$):
`,Ny=`---
options:
  - "Every group $G$ embeds into the symmetric group $S_{|G|}$"
  - "Every finite group is isomorphic to $S_n$ for some $n$"
  - "Every group is abelian"
  - "Every group acts trivially on itself"
correct: 0
hint: Cayley's theorem: the left-multiplication action of G on itself gives an injective homomorphism G → Sym(G) ≅ S_{|G|}. So every group is isomorphic to a subgroup of some symmetric group.
tests:
  group_actions: 1.0
---
Cayley's Theorem asserts that:
`,Iy=`---
options:
  - "Conjugacy classes of $G$"
  - "Left cosets of $G$"
  - "Normal subgroups of $G$"
  - "Elements of order 2"
correct: 0
hint: When G acts on itself by conjugation g·x = gxg⁻¹, the orbits are exactly the conjugacy classes {gxg⁻¹ : g ∈ G}. The class equation counts elements via these orbits.
tests:
  group_actions: 1.0
---
The orbits of the conjugation action of $G$ on itself are:
`,Fy=`---
options:
  - "A normal subgroup of $G$"
  - "A subgroup of $H$"
  - "The whole group $G$"
  - "Always trivial"
correct: 0
hint: ker(φ) = {g ∈ G : φ(g) = eH}. It is a subgroup of G. Moreover it is normal because g·ker(φ)·g⁻¹ ⊆ ker(φ) for any g ∈ G.
tests:
  group_homomorphisms: 1.0
---
The kernel of a group homomorphism $\\varphi: G \\to H$ is:
`,Ly=`---
options:
  - "Bijective homomorphism"
  - "Surjective homomorphism"
  - "Injective homomorphism"
  - "Homomorphism with trivial kernel"
correct: 0
hint: An isomorphism is a homomorphism that is both injective and surjective (bijective). A monomorphism is injective; an epimorphism is surjective.
tests:
  group_homomorphisms: 1.0
---
A group isomorphism $G \\cong H$ is defined as a:
`,Oy=`---
options:
  - "$\\ker(\\varphi) = \\{e\\}$"
  - "$\\text{im}(\\varphi) = H$"
  - "$\\varphi(e_G) \\neq e_H$"
  - "$\\ker(\\varphi) = G$"
correct: 0
hint: A homomorphism is injective iff its kernel is trivial ({e}). This follows from: φ(a)=φ(b) ⟺ φ(ab⁻¹)=e ⟺ ab⁻¹ ∈ ker(φ).
tests:
  group_homomorphisms: 1.0
---
A homomorphism $\\varphi: G \\to H$ is injective if and only if:
`,Hy=`---
options:
  - "Closure, associativity, identity, inverses"
  - "Closure, commutativity, identity, inverses"
  - "Closure, associativity, commutativity, identity"
  - "Associativity, identity, inverses (closure is automatic)"
correct: 0
hint: The four group axioms are: (1) closure, (2) associativity, (3) identity element, (4) inverses. Commutativity is NOT required — that makes an abelian group.
tests:
  groups_intro: 1.0
---
The four axioms that define a group $(G, \\cdot)$ are:
`,Wy=`---
options:
  - "$n!$"
  - "$n$"
  - "$2n$"
  - "$n^2$"
correct: 0
hint: The symmetric group Sₙ consists of all bijections {1,...,n} → {1,...,n}. The number of such bijections is n! (n factorial).
tests:
  groups_intro: 1.0
---
The order of the symmetric group $S_n$ (the group of all permutations of $\\{1, \\ldots, n\\}$) is:
`,Gy=`---
options:
  - "$(\\mathbb{R} \\setminus \\{0\\}, \\times)$"
  - "$(\\mathbb{R}, \\times)$"
  - "$(\\mathbb{N}, +)$"
  - "$(\\mathbb{Z}, \\times)$"
correct: 0
hint: (ℝ\\{0}, ×): closed ✓, associative ✓, identity 1 ✓, inverses (1/x) ✓. (ℝ,×) fails because 0 has no inverse. (ℕ,+) has no inverses. (ℤ,×) has no inverses except ±1.
tests:
  groups_intro: 1.0
---
Which of the following is a group?
`,Uy=`---
options:
  - "A subring $I$ such that $rI \\subseteq I$ and $Ir \\subseteq I$ for all $r \\in R$"
  - "Any subring of $R$"
  - "A subring closed under multiplication"
  - "A subset closed under addition only"
correct: 0
hint: An ideal absorbs multiplication from R on both sides. This is stronger than being a subring. Left ideal: rI ⊆ I. Right ideal: Ir ⊆ I. Two-sided ideal: both.
tests:
  ideals: 1.0
---
A two-sided ideal $I$ of a ring $R$ is:
`,Vy=`---
options:
  - "An ideal $M$ such that no ideal $I$ satisfies $M \\subsetneq I \\subsetneq R$"
  - "An ideal generated by a prime element"
  - "An ideal equal to $R$ itself"
  - "An ideal with exactly one element"
correct: 0
hint: M is maximal if it is proper (M ≠ R) and maximal among proper ideals. Equivalently R/M is a field. Maximal ideals are always prime, but not vice versa.
tests:
  ideals: 1.0
---
A maximal ideal in a commutative ring $R$ is:
`,Ky=`---
options:
  - "A field"
  - "An integral domain"
  - "A ring with zero divisors"
  - "Always the zero ring"
correct: 0
hint: R/M is a field iff M is maximal. This is a key theorem: the quotient by a maximal ideal has no proper nontrivial ideals, which for commutative rings with 1 is equivalent to being a field.
tests:
  ideals: 1.0
---
If $M$ is a maximal ideal of a commutative ring $R$, then $R/M$ is:
`,Zy=`---
options:
  - "Verify P(1) and show P(k) ⟹ P(k+1)"
  - "Verify P(1) only"
  - "Show P(k+1) ⟹ P(k) for all k"
  - "Verify P(n) for all n ≤ 10, then conclude"
correct: 0
hint: Weak induction requires a base case (usually n=1) plus an inductive step that proves the next case from the current one.
tests:
  induction: 1.0
---
To prove a statement $P(n)$ for all $n \\geq 1$ by weak mathematical induction, you must:
`,Qy=`---
options:
  - "$\\\\frac{n(n+1)}{2}$"
  - "$n^2$"
  - "$\\\\frac{n(n-1)}{2}$"
  - "$2^n - 1$"
correct: 0
hint: Base case: 1 = 1(2)/2 ✓. Inductive step: assume sum to k = k(k+1)/2, then adding (k+1) gives (k+1)(k+2)/2.
tests:
  induction: 1.0
---
By induction, $1 + 2 + \\cdots + n$ equals:
`,Yy=`---
options:
  - "Strong induction assumes P(1), …, P(k) to prove P(k+1)"
  - "Strong induction only needs the base case P(0)"
  - "Strong induction is weaker than ordinary induction"
  - "Strong induction cannot prove statements about integers"
correct: 0
hint: In strong induction the inductive hypothesis is that P(j) holds for ALL j ≤ k, not just j = k. This makes it more powerful for some proofs (e.g. prime factorisation).
tests:
  induction: 1.0
---
Which best describes strong (complete) induction?
`,Xy=`---
options:
  - "A commutative ring with unity and no zero divisors"
  - "Any commutative ring"
  - "A ring in which every nonzero element has an inverse"
  - "A ring with a unique maximal ideal"
correct: 0
hint: Integral domain = commutative + unity + no zero divisors. A field is stronger: every nonzero element has an inverse. ℤ is an integral domain but not a field.
tests:
  integral_domains: 1.0
  ring_homomorphisms: 0.5
---
An integral domain is:
`,Jy=`---
options:
  - "It is a field"
  - "It has zero divisors"
  - "It has characteristic zero"
  - "It is isomorphic to $\\mathbb{Z}$"
correct: 0
hint: In a finite integral domain D, for any nonzero a, the map x ↦ ax is injective (no zero divisors) hence surjective (D finite). So a has an inverse and D is a field.
tests:
  integral_domains: 1.0
  ring_homomorphisms: 0.3
---
Every finite integral domain:
`,e7=`---
options:
  - "The field $\\mathbb{Q}$ of rationals constructed from $\\mathbb{Z}$"
  - "The ring $\\mathbb{Z}[x]$ of integer polynomials"
  - "The ring $\\mathbb{Z}/n\\mathbb{Z}$"
  - "The ring of $2\\times 2$ integer matrices"
correct: 0
hint: The field of fractions of an integral domain D is the smallest field containing D. For D = ℤ, the field of fractions is ℚ = {a/b : a,b ∈ ℤ, b ≠ 0}.
tests:
  integral_domains: 1.0
  rings_intro: 0.5
---
The field of fractions of the integral domain $\\mathbb{Z}$ is:
`,n7=`---
options:
  - "$G / \\ker(\\varphi) \\cong \\text{im}(\\varphi)$"
  - "$G \\cong H$ whenever $\\varphi$ is a homomorphism"
  - "$\\ker(\\varphi) \\cong \\text{im}(\\varphi)$"
  - "$G / \\text{im}(\\varphi) \\cong \\ker(\\varphi)$"
correct: 0
hint: First Isomorphism Theorem: given φ: G → H, the map G/ker(φ) → im(φ) sending g·ker(φ) ↦ φ(g) is a well-defined isomorphism.
tests:
  iso_theorem: 1.0
---
The First Isomorphism Theorem states that for a homomorphism $\\varphi: G \\to H$:
`,t7=`---
options:
  - "$\\mathbb{Z}/n\\mathbb{Z}$"
  - "$n\\mathbb{Z}$"
  - "$\\mathbb{Z} \\times \\mathbb{Z}_n$"
  - "$\\mathbb{Z}$"
correct: 0
hint: Apply the First Isomorphism Theorem to φ: ℤ → ℤₙ defined by φ(k) = k mod n. ker(φ) = nℤ and im(φ) = ℤₙ, so ℤ/nℤ ≅ ℤₙ.
tests:
  iso_theorem: 1.0
---
By the First Isomorphism Theorem, the quotient $\\mathbb{Z} / n\\mathbb{Z}$ is isomorphic to:
`,r7=`---
options:
  - "Subgroups of $G/N$ correspond bijectively to subgroups of $G$ containing $N$"
  - "Every subgroup of $G$ maps to a subgroup of $G/N$"
  - "$G/N$ has fewer subgroups than $G$"
  - "Normal subgroups of $G/N$ correspond to all subgroups of $G$"
correct: 0
hint: The Correspondence (Lattice) Theorem: there is an order-preserving bijection between subgroups of G/N and subgroups of G that contain N. Normal subgroups correspond to normal subgroups.
tests:
  iso_theorem: 1.0
---
The Correspondence Theorem (Fourth Isomorphism Theorem) says:
`,i7=`---
options:
  - "M ⊗_R F ≅ Fⁿ where F is a splitting field"
  - "Over an algebraically closed field"
  - "When all eigenvalues are in the field"
  - "When the characteristic polynomial splits"
correct: 1
hint: Jordan normal form exists when the field contains all eigenvalues—that's what "algebraically closed" means.
tests:
  jordan_normal_form: 1.0
  rational_canonical: 0.5
  field_extensions: 0.25
---
Jordan Normal Form exists when:

`,o7=`---
options:
  - "A block diagonal matrix with Jordan blocks on the diagonal"
  - "A triangular matrix with eigenvalues on the diagonal"
  - "A diagonal matrix"
  - "A companion matrix"
correct: 0
hint: Each Jordan block is a matrix with λ on the diagonal and 1s on the superdiagonal.
tests:
  jordan_normal_form: 1.0
  rational_canonical: 0.25
---
A Jordan normal form matrix looks like:

`,s7=`---
options:
  - "The size of the largest Jordan block for λ equals the exponent of (x-λ) in the minimal polynomial"
  - "The algebraic multiplicity of λ equals the sum of sizes of all λ blocks"
  - "The geometric multiplicity equals the number of λ blocks"
  - "All of the above"
correct: 3
hint: These three facts characterize the Jordan blocks.
tests:
  jordan_normal_form: 1.0
  poly_rings: 0.25
---
For a Jordan block Jₖ(λ):

`,a7=`---
options:
  - "φ(r·m) = r·φ(m) for all r ∈ R, m ∈ M"
  - "φ(m + n) = φ(m) + φ(n) and φ(r·m) = r·φ(m)"
  - "φ is bijective and respects scalar multiplication"
  - "φ(0) = 0 and φ(-m) = -φ(m)"
correct: 1
hint: A module homomorphism must be a group homomorphism (additive) AND respect scalar multiplication. Both conditions are needed.
tests:
  module_homs: 1.0
  modules_intro: 0.5
  submodules: 0.25
---
The definition of an R-module homomorphism φ: M → N is:

`,l7=`---
options:
  - "ker(φ) = {m ∈ M : φ(m) = 0} is a submodule of M"
  - "im(φ) is a submodule of N"
  - "Both the kernel and image are submodules"
  - "Neither kernel nor image need be submodules"
correct: 2
hint: Just like with group homomorphisms, the kernel is the preimage of {0}, and the image is the set of all outputs—both are submodules.
tests:
  module_homs: 1.0
  modules_intro: 0.25
  submodules: 0.25
---
For a module homomorphism φ: M → N:

`,c7=`---
options:
  - "M/ker(φ) ≅ im(φ)"
  - "M ≅ ker(φ) ⊕ im(φ)"
  - "ker(φ) ⊆ im(φ)"
  - "M/ker(φ) ≅ N"
correct: 0
hint: The First Isomorphism Theorem holds for modules just as for groups and rings.
tests:
  module_homs: 1.0
  modules_intro: 0.25
  submodules: 0.25
---
The First Isomorphism Theorem for modules states:

`,u7=`---
options:
  - "An abelian group M with a ring action R × M → M satisfying r(sm) = (rs)m, 1m = m, and distributivity"
  - "A vector space over a ring"
  - "A ring with a group action"
  - "A set with two binary operations"
correct: 0
hint: A module is like a vector space, but instead of a field acting by scalars, we have a ring. The action must be compatible with ring multiplication.
tests:
  modules_intro: 1.0
  rings_intro: 0.5
---
An R-module M is defined as:

`,d7=`---
options:
  - "$\\mathbb{Z}$-module = abelian group"
  - "$\\mathbb{Z}$-module = ring"
  - "$\\mathbb{Z}$-module = vector space"
  - "$\\mathbb{Z}$-module = field"
correct: 0
hint: Every abelian group is a ℤ-module, where n·m means adding m to itself n times. This is how ℤ acts on any abelian group.
tests:
  modules_intro: 1.0
  rings_intro: 0.25
---
A $\\mathbb{Z}$-module is equivalent to:

`,p7=`---
options:
  - "The set of n×n matrices with entries in R, denoted Mₙ(R)"
  - "The polynomial ring R[x]"
  - "The quotient ring R/I"
  - "The direct product R × R"
correct: 0
hint: Mₙ(R) is an example of an R-module—matrix multiplication by vectors gives an R-module structure.
tests:
  modules_intro: 1.0
  rings_intro: 0.25
---
Which of the following is an R-module?

`,m7=`---
options:
  - "Every subgroup of an abelian group is normal"
  - "Every normal subgroup is abelian"
  - "Normal subgroups must have index 2"
  - "The trivial subgroup is never normal"
correct: 0
hint: If G is abelian then gH = Hg trivially for any H ≤ G (since gh = hg). So every subgroup of an abelian group is automatically normal.
tests:
  normal_subgroups: 1.0
---
Which statement about normal subgroups is correct?
`,f7=`---
options:
  - "$gNg^{-1} = N$ for all $g \\in G$"
  - "$gN = g$ for all $g \\in G$"
  - "$N$ is closed under conjugation by elements of $N$"
  - "$N$ commutes with itself"
correct: 0
hint: N ⊴ G iff N is closed under conjugation by any element of G: for all g∈G and n∈N, gng⁻¹ ∈ N. This is equivalent to gNg⁻¹ = N.
tests:
  normal_subgroups: 1.0
---
The conjugation characterisation of a normal subgroup $N \\trianglelefteq G$ is:
`,h7=`---
options:
  - "A group with no proper nontrivial normal subgroups"
  - "A group with no subgroups at all"
  - "A cyclic group of prime order"
  - "An abelian group"
correct: 0
hint: A simple group has exactly two normal subgroups: {e} and G itself. ℤₚ (p prime) is simple. Non-abelian examples: A₅ (order 60), the first non-abelian simple group.
tests:
  normal_subgroups: 1.0
---
A simple group is:
`,g7=`---
options:
  - "There exist unique $q(x), r(x)$ with $f = qg + r$ and $\\deg r < \\deg g$"
  - "Every polynomial divides every other polynomial"
  - "Division is only possible when $\\deg f \\geq \\deg g$, and the remainder is always 0"
  - "Polynomial division requires $F$ to have characteristic 0"
correct: 0
hint: The division algorithm in F[x]: given f and g ≠ 0 in F[x], there exist unique q (quotient) and r (remainder) with f = qg + r and either r = 0 or deg(r) < deg(g).
tests:
  poly_rings: 1.0
  integral_domains: 0.5
---
The division algorithm for polynomials over a field $F$ states:
`,y7=`---
options:
  - "$F[x]/(p(x))$ is a field"
  - "$F[x]/(p(x))$ is the zero ring"
  - "$p(x)$ has a root in $F$"
  - "$F[x]/(p(x))$ has zero divisors"
correct: 0
hint: In F[x], (p(x)) is a maximal ideal iff p(x) is irreducible. Quotient by a maximal ideal in a commutative ring with 1 gives a field.
tests:
  poly_rings: 1.0
  integral_domains: 0.5
  ideals: 0.3
---
If $p(x)$ is an irreducible polynomial over a field $F$, then:
`,v7=`---
options:
  - "$a$ is a root of $f$ iff $(x-a)$ divides $f(x)$"
  - "$a$ is a root of $f$ iff $f(x) = x - a$"
  - "Every polynomial of degree $n$ has exactly $n$ roots"
  - "$f$ has a root iff $f$ is irreducible"
correct: 0
hint: Factor theorem: f(a) = 0 ⟺ (x-a) | f(x). This follows from the division algorithm: f(x) = (x-a)q(x) + f(a), so if f(a)=0 then (x-a) | f(x).
tests:
  poly_rings: 1.0
  integral_domains: 0.3
---
The Factor Theorem for polynomials over a field $F$ states:
`,x7=`---
options:
  - "M ≅ R/(p₁ᵉ¹) ⊕ ... ⊕ R/(pₖᵉᵏ) for prime powers pᵢᵉⁱ"
  - "M is a direct sum of p-primary components"
  - "The primary decomposition is unique up to permutation"
  - "All of the above"
correct: 3
hint: Primary decomposition generalizes the fundamental theorem for finitely generated abelian groups.
tests:
  primary_decomp: 1.0
  torsion_modules: 0.5
  poly_rings: 0.25
---
For a finitely generated module M over a PID, the primary decomposition states:

`,w7=`---
options:
  - "A primary ideal I has the property: if ab ∈ I and a ∉ I, then bⁿ ∈ I for some n"
  - "A prime power pⁿ is primary in ℤ"
  - "Primary decomposition requires prime powers"
  - "Primary ideals are always maximal"
correct: 0
hint: Primary ideals are the building blocks: if ab ∈ I and a ∉ I, then some power of b is in I.
tests:
  primary_decomp: 1.0
  ideals: 0.5
  poly_rings: 0.25
---
A primary ideal is defined as:

`,b7=`---
options:
  - "The p-primary component is M[pⁿ] = {m : pⁿ·m = 0 for some n}"
  - "All elements annihilated by some power of p"
  - "The submodule of p-torsion"
  - "All of the above describe the p-primary component"
correct: 3
hint: The p-primary component consists of all elements killed by some power of p.
tests:
  primary_decomp: 1.0
  torsion_modules: 0.25
---
The p-primary component of a module is:

`,$7=`---
options:
  - "M ≅ R/(d₁) ⊕ ... ⊕ R/(dₖ) where d₁ | d₂ | ... | dₖ"
  - "Each invariant factor dᵢ divides the next"
  - "The decomposition is unique"
  - "All of the above"
correct: 3
hint: Rational canonical form gives invariant factors—each cyclic summand's ideal contains the next.
tests:
  rational_canonical: 1.0
  primary_decomp: 0.5
  poly_rings: 0.25
---
The rational canonical form states that a finitely generated module over F[x] decomposes as:

`,_7=`---
options:
  - "The characteristic polynomial of the companion matrix divides the minimal polynomial"
  - "c_T(x) = d₁(x)·d₂(x)·...·dₖ(x)"
  - "The minimal polynomial is the largest invariant factor"
  - "The characteristic polynomial is always square-free"
correct: 1
hint: The characteristic polynomial is the product of all invariant factors.
tests:
  rational_canonical: 1.0
  poly_rings: 0.25
---
For a linear transformation T, the characteristic polynomial relates to invariant factors by:

`,k7=`---
options:
  - "Companion matrix of the invariant factor"
  - "Block diagonal with companion matrices"
  - "A single Jordan block"
  - "Diagonal matrix"
correct: 1
hint: The rational canonical form is a block diagonal matrix where each block is the companion matrix of an invariant factor.
tests:
  rational_canonical: 1.0
  poly_rings: 0.25
---
The rational canonical form of a matrix is:

`,z7=`---
options:
  - "It is an equivalence relation"
  - "It is reflexive but not transitive"
  - "It is symmetric but not reflexive"
  - "It is transitive but not symmetric"
correct: 0
hint: Check all three properties. The relation 'a ≡ b (mod n)' is reflexive (a-a=0 divisible by n), symmetric, and transitive.
tests:
  relations: 1.0
---
The relation $a \\sim b$ on $\\mathbb{Z}$ defined by $n \\mid (a - b)$ for a fixed $n > 1$ is:
`,S7=`---
options:
  - "The equivalence classes of ~ partition S"
  - "Every element belongs to exactly two equivalence classes"
  - "Equivalence classes may overlap"
  - "An equivalence class can be empty"
correct: 0
hint: A fundamental theorem: equivalence classes are disjoint (an element belongs to exactly one class) and their union is all of S.
tests:
  relations: 1.0
---
If $\\sim$ is an equivalence relation on a set $S$, then:
`,j7=`---
options:
  - "3"
  - "2"
  - "4"
  - "6"
correct: 0
hint: The equivalence classes are {0,3}, {1,4}, {2,5} — elements with the same remainder mod 3. That gives 3 classes.
tests:
  relations: 1.0
---
How many equivalence classes does the relation $a \\sim b \\iff 3 \\mid (a-b)$ have on $\\{0,1,2,3,4,5\\}$?
`,q7=`---
options:
  - "An ideal of $R$"
  - "A subring of $R$ but not necessarily an ideal"
  - "Always the zero ideal"
  - "A field"
correct: 0
hint: ker(φ) = {r ∈ R : φ(r) = 0_S}. It is an ideal (not just a subring) because for any r ∈ R and k ∈ ker(φ): φ(rk) = φ(r)·0 = 0, so rk ∈ ker(φ).
tests:
  ring_homomorphisms: 1.0
  rings_intro: 0.5
  ideals: 0.5
---
The kernel of a ring homomorphism $\\varphi: R \\to S$ is:
`,T7=`---
options:
  - "$R / \\ker(\\varphi) \\cong \\text{im}(\\varphi)$"
  - "$R \\cong S$ whenever $\\varphi$ is a ring homomorphism"
  - "$\\ker(\\varphi) \\cong \\text{im}(\\varphi)$"
  - "$\\text{im}(\\varphi)$ is an ideal of $S$"
correct: 0
hint: The First Isomorphism Theorem for rings mirrors the group version: R/ker(φ) ≅ im(φ) via the map r + ker(φ) ↦ φ(r). Note: im(φ) is a subring of S, not necessarily an ideal.
tests:
  ring_homomorphisms: 1.0
  ideals: 0.3
---
The First Isomorphism Theorem for rings states:
`,A7=`---
options:
  - "Evaluating a polynomial at a fixed element $\\alpha \\in S$"
  - "Differentiating a polynomial"
  - "Mapping each coefficient to its square"
  - "Reducing coefficients modulo $n$"
correct: 0
hint: The evaluation homomorphism ev_α: R[x] → S sends f(x) ↦ f(α). It is a ring homomorphism: ev_α(f+g) = f(α)+g(α) and ev_α(fg) = f(α)g(α).
tests:
  ring_homomorphisms: 1.0
  poly_rings: 0.5
---
The evaluation homomorphism $\\text{ev}_\\alpha: R[x] \\to S$ is defined by:
`,M7=`---
options:
  - "$(R, +)$ is an abelian group, $\\cdot$ is associative, and $\\cdot$ distributes over $+$"
  - "$(R, +)$ is a group and $(R, \\cdot)$ is a group"
  - "$(R, +)$ is abelian and $(R, \\cdot)$ is abelian"
  - "Every element has a multiplicative inverse"
correct: 0
hint: A ring needs: (R,+) abelian group, (R,·) associative (semigroup), and both distributive laws. Multiplication need not be commutative, and inverses are not required.
tests:
  rings_intro: 1.0
---
A ring $(R, +, \\cdot)$ requires:
`,P7=`---
options:
  - "A nonzero element $a$ such that $ab = 0$ for some nonzero $b$"
  - "An element with no multiplicative inverse"
  - "The additive identity element"
  - "An element equal to its own square"
correct: 0
hint: a is a zero divisor if a ≠ 0 and there exists b ≠ 0 with ab = 0 (or ba = 0). Example: in ℤ₆, the element 2 is a zero divisor because 2·3 = 6 ≡ 0.
tests:
  rings_intro: 1.0
---
A zero divisor in a ring $R$ is:
`,C7=`---
options:
  - "The smallest positive integer $n$ such that $n \\cdot 1 = 0$, or $0$ if no such $n$ exists"
  - "The number of elements in the ring"
  - "The largest prime dividing $|R|$"
  - "The additive order of the identity element always"
correct: 0
hint: char(R) = the additive order of 1 if it is finite, or 0 if 1 has infinite additive order. For ℤₙ, char = n. For ℤ, ℚ, ℝ, char = 0.
tests:
  rings_intro: 1.0
---
The characteristic of a ring $R$ is:
`,R7=`---
options:
  - "It is both injective and surjective"
  - "It is injective but not surjective"
  - "It is surjective but not injective"
  - "It is neither injective nor surjective"
correct: 0
hint: A bijection is a function that is both injective (one-to-one) and surjective (onto). Every element of the codomain is hit exactly once.
tests:
  sets_functions: 1.0
---
A function $f: A \\to B$ is called a **bijection** if and only if:
`,D7=`---
options:
  - "$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$"
  - "$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$"
  - "$A \\times (B \\cup C) = (A \\times B) \\cup (A \\times C)$"
  - "$A \\setminus (B \\cup C) = (A \\setminus B) \\cup (A \\setminus C)$"
correct: 0
hint: Distributive law for sets: union distributes over intersection and vice versa. A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C).
tests:
  sets_functions: 1.0
---
Which of the following is a distributive law for sets?

`,E7=`---
options:
  - "The set of all subsets of A"
  - "The set of all functions from A to {0,1}"
  - "The set of all ordered pairs (a,b) where a,b ∈ A"
  - "The set of all equivalence classes of A"
correct: 0
hint: The power set P(A) is defined as the set of all subsets of A. For example, if A = {1,2}, then P(A) = {∅, {1}, {2}, {1,2}}.
tests:
  sets_functions: 1.0
---
The power set of a set A, denoted P(A), is defined as:

`,B7=`---
options:
  - "H is nonempty and closed under the operation and taking inverses"
  - "H is nonempty and closed under the operation only"
  - "H contains the identity and is closed under the operation"
  - "H is a group under any binary operation"
correct: 0
hint: The one-step subgroup test: H ≤ G iff H ≠ ∅ and for all a,b ∈ H we have ab⁻¹ ∈ H. Equivalently H is nonempty, closed under multiplication, and closed under inverses.
tests:
  subgroups: 1.0
---
The subgroup test says $H \\leq G$ if and only if:
`,N7=`---
options:
  - "The order of H divides the order of G"
  - "The order of G divides the order of H"
  - "H and G must have the same order"
  - "The order of H equals the index of H in G"
correct: 0
hint: Lagrange's theorem: if G is a finite group and H ≤ G, then |H| divides |G|. The index [G:H] = |G|/|H| is the number of cosets.
tests:
  subgroups: 1.0
---
Lagrange's theorem states that for a finite group $G$ with subgroup $H$:
`,I7=`---
options:
  - "The order of every element divides |G|"
  - "Every divisor of |G| is the order of some element"
  - "G has a subgroup of every order that divides |G|"
  - "All elements of G have the same order"
correct: 0
hint: The order of an element g is |⟨g⟩|, and ⟨g⟩ is a subgroup of G, so by Lagrange |⟨g⟩| divides |G|. The converse (every divisor gives an element) is false in general.
tests:
  subgroups: 1.0
---
A corollary of Lagrange's theorem for a finite group $G$ is:
`,F7=`---
options:
  - "N is nonempty, and for all r ∈ R, n ∈ N: r·n ∈ N"
  - "N is a subgroup and r·n ∈ N for all r ∈ R, n ∈ N"
  - "N is an ideal of R"
  - "N contains the identity of M"
correct: 0
hint: A submodule must be closed under the module action. This means it's an additive subgroup AND absorbs scalar multiplication.
tests:
  submodules: 1.0
  modules_intro: 0.5
  ideals: 0.25
---
A subset N of an R-module M is a submodule if and only if:

`,L7=`---
options:
  - "The set of even integers 2ℤ as a ℤ-module"
  - "The set {0} (zero submodule)"
  - "The whole module M"
  - "Any subset of M containing 0"
correct: 0
hint: {0} and M are always submodules. For ℤ acting on ℤ, 2ℤ is closed under addition and multiplication by integers.
tests:
  submodules: 1.0
  modules_intro: 0.25
---
Which is a submodule of ℤ (as a ℤ-module)?

`,O7=`---
options:
  - "Intersection of any collection of submodules is a submodule"
  - "Union of two submodules is always a submodule"
  - "Quotient of a submodule is never a module"
  - "Product of submodules is always a submodule"
correct: 0
hint: The intersection of submodules is always a submodule. The sum (not union) of submodules is also a submodule.
tests:
  submodules: 1.0
  modules_intro: 0.25
---
Which is true about submodules?

`,H7=`---
options:
  - "A subgroup of order $p^n$"
  - "A subgroup of order $p$"
  - "Any $p$-subgroup of $G$"
  - "The center of $G$"
correct: 0
hint: If |G| = pⁿm with p∤m, a Sylow p-subgroup has the full p-part of the order, i.e., order pⁿ. Sylow's first theorem guarantees at least one exists.
tests:
  sylow: 1.0
---
For a group $G$ with $|G| = p^n m$ ($\\gcd(p,m)=1$), a Sylow $p$-subgroup is:
`,W7=`---
options:
  - "All Sylow $p$-subgroups of $G$ are conjugate to each other"
  - "There is exactly one Sylow $p$-subgroup"
  - "Sylow $p$-subgroups are always normal"
  - "All subgroups of the same order are Sylow subgroups"
correct: 0
hint: Sylow's second theorem: any two Sylow p-subgroups are conjugate. A Sylow p-subgroup is normal iff it is unique (nₚ = 1). Many groups have multiple non-normal Sylow subgroups.
tests:
  sylow: 1.0
---
Sylow's Second Theorem states:
`,G7=`---
options:
  - "$n_p \\equiv 1 \\pmod{p}$ and $n_p \\mid m$"
  - "$n_p \\equiv 0 \\pmod{p}$ and $n_p \\mid |G|$"
  - "$n_p = 1$ always"
  - "$n_p \\mid p^n$"
correct: 0
hint: Sylow's third theorem: nₚ ≡ 1 (mod p) and nₚ divides m (the p'-part of |G|). This often forces nₚ = 1, making the Sylow subgroup normal and unique.
tests:
  sylow: 1.0
---
Sylow's Third Theorem constrains the number $n_p$ of Sylow $p$-subgroups by:
`,U7=`---
options:
  - "For every m ∈ M, there exists r ≠ 0 with r·m = 0"
  - "M has no nonzero torsion elements"
  - "M is isomorphic to a free module"
  - "M = {0}"
correct: 0
hint: A torsion module is entirely made of torsion elements. Every nonzero element has an annihilator.
tests:
  torsion_modules: 1.0
  modules_intro: 0.5
---
A module M is a torsion module if:

`,V7=`---
options:
  - "ann(m) = {r ∈ R : r·m = 0} is a nonzero ideal"
  - "m is called a torsion element if ann(m) ≠ 0"
  - "A nonzero element with nonzero annihilator"
  - "An element of order infinity"
correct: 2
hint: An element m is torsion if there exists nonzero r ∈ R with r·m = 0.
tests:
  torsion_modules: 1.0
  modules_intro: 0.25
---
A torsion element in an R-module is:

`,K7=`---
options:
  - "M = M_tors ⊕ M_free where M_tors is torsion and M_free is free"
  - "Every finitely generated module over a PID decomposes this way"
  - "The torsion part is unique"
  - "All of the above"
correct: 3
hint: This is the structure theorem for finitely generated modules over a PID.
tests:
  torsion_modules: 1.0
  finitely_generated: 0.5
  poly_rings: 0.25
---
Over a PID, every finitely generated module decomposes as:

`,Z7=[["sets_functions","relations"],["sets_functions","induction"],["sets_functions","binary_ops"],["relations","binary_ops"],["binary_ops","groups_intro"],["induction","groups_intro"],["groups_intro","subgroups"],["groups_intro","cyclic_groups"],["subgroups","cosets"],["cosets","normal_subgroups"],["groups_intro","group_homomorphisms"],["group_homomorphisms","normal_subgroups"],["normal_subgroups","iso_theorem"],["cosets","iso_theorem"],["groups_intro","group_actions"],["group_actions","sylow"],["cosets","sylow"],["groups_intro","rings_intro"],["rings_intro","ideals"],["rings_intro","ring_homomorphisms"],["ideals","ring_homomorphisms"],["ring_homomorphisms","integral_domains"],["integral_domains","poly_rings"],["integral_domains","fields_intro"],["fields_intro","field_extensions"],["poly_rings","field_extensions"],["rings_intro","modules_intro"],["ideals","submodules"],["modules_intro","submodules"],["ring_homomorphisms","module_homs"],["modules_intro","module_homs"],["submodules","module_homs"],["module_homs","direct_sums"],["modules_intro","direct_sums"],["direct_sums","finitely_generated"],["modules_intro","finitely_generated"],["finitely_generated","free_modules"],["modules_intro","torsion_modules"],["torsion_modules","primary_decomp"],["finitely_generated","primary_decomp"],["primary_decomp","rational_canonical"],["primary_decomp","jordan_normal_form"],["field_extensions","jordan_normal_form"]],Q7={FOUNDATIONS:{label:"Foundations",color:"#4a9eff"},GROUPS:{label:"Group Theory",color:"#2ecc71"},RINGS:{label:"Ring Theory",color:"#e74c3c"},FIELDS:{label:"Field Theory",color:"#9b59b6"},MODULES:{label:"Module Theory",color:"#f39c12"}},Y7={sets:"#3dc9b0",groups:"#2ecc71",rings:"#e74c3c",fields:"#9b59b6",modules:"#f39c12",morphisms:"#f5a623",structure:"#4a9eff"},X7={sets:{en:"Sets & Functions",pl:"Zbiory i funkcje"},groups:{en:"Groups",pl:"Grupy"},rings:{en:"Rings",pl:"Pierścienie"},fields:{en:"Fields",pl:"Ciała"},modules:{en:"Modules",pl:"Moduły"},morphisms:{en:"Homomorphisms",pl:"Homomorfizmy"},structure:{en:"Structure Theorems",pl:"Twierdzenia strukturalne"}},J7={id:"abstract_algebra",subject:"mathematics",title:"Abstract Algebra",titleEn:"Abstract Algebra",description:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",descriptionEn:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",lang:"en",icon:"∘",color:"#2ecc71"},ev=Object.assign({"./nodes/binary_ops/node.md":Bg,"./nodes/cosets/node.md":Ng,"./nodes/cyclic_groups/node.md":Ig,"./nodes/direct_sums/node.md":Fg,"./nodes/field_extensions/node.md":Lg,"./nodes/fields_intro/node.md":Og,"./nodes/finitely_generated/node.md":Hg,"./nodes/free_modules/node.md":Wg,"./nodes/group_actions/node.md":Gg,"./nodes/group_homomorphisms/node.md":Ug,"./nodes/groups_intro/node.md":Vg,"./nodes/ideals/node.md":Kg,"./nodes/induction/node.md":Zg,"./nodes/integral_domains/node.md":Qg,"./nodes/iso_theorem/node.md":Yg,"./nodes/jordan_normal_form/node.md":Xg,"./nodes/module_homs/node.md":Jg,"./nodes/modules_intro/node.md":ey,"./nodes/normal_subgroups/node.md":ny,"./nodes/poly_rings/node.md":ty,"./nodes/primary_decomp/node.md":ry,"./nodes/rational_canonical/node.md":iy,"./nodes/relations/node.md":oy,"./nodes/ring_homomorphisms/node.md":sy,"./nodes/rings_intro/node.md":ay,"./nodes/sets_functions/node.md":ly,"./nodes/subgroups/node.md":cy,"./nodes/submodules/node.md":uy,"./nodes/sylow/node.md":dy,"./nodes/torsion_modules/node.md":py}),nv=op(ev,/\.\/nodes\/([^/]+)\/node\.md$/),tv=Object.assign({"./nodes/binary_ops/questions/01.md":my,"./nodes/binary_ops/questions/02.md":fy,"./nodes/binary_ops/questions/03.md":hy,"./nodes/cosets/questions/01.md":gy,"./nodes/cosets/questions/02.md":yy,"./nodes/cosets/questions/03.md":vy,"./nodes/cyclic_groups/questions/01.md":xy,"./nodes/cyclic_groups/questions/02.md":wy,"./nodes/cyclic_groups/questions/03.md":by,"./nodes/direct_sums/questions/01.md":$y,"./nodes/direct_sums/questions/02.md":_y,"./nodes/direct_sums/questions/03.md":ky,"./nodes/field_extensions/questions/01.md":zy,"./nodes/field_extensions/questions/02.md":Sy,"./nodes/field_extensions/questions/03.md":jy,"./nodes/fields_intro/questions/01.md":qy,"./nodes/fields_intro/questions/02.md":Ty,"./nodes/fields_intro/questions/03.md":Ay,"./nodes/finitely_generated/questions/01.md":My,"./nodes/finitely_generated/questions/02.md":Py,"./nodes/finitely_generated/questions/03.md":Cy,"./nodes/free_modules/questions/01.md":Ry,"./nodes/free_modules/questions/02.md":Dy,"./nodes/free_modules/questions/03.md":Ey,"./nodes/group_actions/questions/01.md":By,"./nodes/group_actions/questions/02.md":Ny,"./nodes/group_actions/questions/03.md":Iy,"./nodes/group_homomorphisms/questions/01.md":Fy,"./nodes/group_homomorphisms/questions/02.md":Ly,"./nodes/group_homomorphisms/questions/03.md":Oy,"./nodes/groups_intro/questions/01.md":Hy,"./nodes/groups_intro/questions/02.md":Wy,"./nodes/groups_intro/questions/03.md":Gy,"./nodes/ideals/questions/01.md":Uy,"./nodes/ideals/questions/02.md":Vy,"./nodes/ideals/questions/03.md":Ky,"./nodes/induction/questions/01.md":Zy,"./nodes/induction/questions/02.md":Qy,"./nodes/induction/questions/03.md":Yy,"./nodes/integral_domains/questions/01.md":Xy,"./nodes/integral_domains/questions/02.md":Jy,"./nodes/integral_domains/questions/03.md":e7,"./nodes/iso_theorem/questions/01.md":n7,"./nodes/iso_theorem/questions/02.md":t7,"./nodes/iso_theorem/questions/03.md":r7,"./nodes/jordan_normal_form/questions/01.md":i7,"./nodes/jordan_normal_form/questions/02.md":o7,"./nodes/jordan_normal_form/questions/03.md":s7,"./nodes/module_homs/questions/01.md":a7,"./nodes/module_homs/questions/02.md":l7,"./nodes/module_homs/questions/03.md":c7,"./nodes/modules_intro/questions/01.md":u7,"./nodes/modules_intro/questions/02.md":d7,"./nodes/modules_intro/questions/03.md":p7,"./nodes/normal_subgroups/questions/01.md":m7,"./nodes/normal_subgroups/questions/02.md":f7,"./nodes/normal_subgroups/questions/03.md":h7,"./nodes/poly_rings/questions/01.md":g7,"./nodes/poly_rings/questions/02.md":y7,"./nodes/poly_rings/questions/03.md":v7,"./nodes/primary_decomp/questions/01.md":x7,"./nodes/primary_decomp/questions/02.md":w7,"./nodes/primary_decomp/questions/03.md":b7,"./nodes/rational_canonical/questions/01.md":$7,"./nodes/rational_canonical/questions/02.md":_7,"./nodes/rational_canonical/questions/03.md":k7,"./nodes/relations/questions/01.md":z7,"./nodes/relations/questions/02.md":S7,"./nodes/relations/questions/03.md":j7,"./nodes/ring_homomorphisms/questions/01.md":q7,"./nodes/ring_homomorphisms/questions/02.md":T7,"./nodes/ring_homomorphisms/questions/03.md":A7,"./nodes/rings_intro/questions/01.md":M7,"./nodes/rings_intro/questions/02.md":P7,"./nodes/rings_intro/questions/03.md":C7,"./nodes/sets_functions/questions/01.md":R7,"./nodes/sets_functions/questions/02.md":D7,"./nodes/sets_functions/questions/03.md":E7,"./nodes/subgroups/questions/01.md":B7,"./nodes/subgroups/questions/02.md":N7,"./nodes/subgroups/questions/03.md":I7,"./nodes/submodules/questions/01.md":F7,"./nodes/submodules/questions/02.md":L7,"./nodes/submodules/questions/03.md":O7,"./nodes/sylow/questions/01.md":H7,"./nodes/sylow/questions/02.md":W7,"./nodes/sylow/questions/03.md":G7,"./nodes/torsion_modules/questions/01.md":U7,"./nodes/torsion_modules/questions/02.md":V7,"./nodes/torsion_modules/questions/03.md":K7}),rv=sp(tv,/\.\/nodes\/([^/]+)\/questions\//),iv=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:J7,QUESTION_BANK:rv,RAW_EDGES:Z7,RAW_NODES:nv,SCOPE_COLORS:Y7,SCOPE_LABELS:X7,SECTIONS:Q7},Symbol.toStringTag,{value:"Module"})),ov={math_pl:Eg,abstract_algebra:iv},sv="math_pl",ap="wizmat_v1_";function av(i){return i instanceof Set?JSON.stringify({__type:"Set",values:[...i]}):JSON.stringify(i)}function lv(i,t){try{const r=JSON.parse(i);return r&&typeof r=="object"&&r.__type==="Set"?new Set(r.values):r}catch{return t}}function ht(i,t){const r=ap+i,[s,a]=F.useState(()=>{try{const d=localStorage.getItem(r);return d===null?t:lv(d,t)}catch{return t}});F.useEffect(()=>{try{localStorage.setItem(r,av(s))}catch{}},[r,s]);const c=F.useCallback(d=>{a(f=>typeof d=="function"?d(f):d)},[]);return[s,c]}function cv(){try{Object.keys(localStorage).filter(i=>i.startsWith(ap)).forEach(i=>localStorage.removeItem(i))}catch{}}const oc={midnight:{name:"Midnight",bg:"#10141c",surface:"#161c28",surfaceHi:"#161c28ee",border:"#263248",borderSubtle:"#1f2a3c",textPrimary:"#f0f2f5",textBody:"#cdd8e4",textMuted:"#95a5bd",textDim:"#7b8fa8",textFaint:"#4a5e78",edgeDefault:"#334766",edgeHighlighted:"#4a9eff",edgeDimmed:"#151b26"},highContrast:{name:"High Contrast",bg:"#08090d",surface:"#111318",surfaceHi:"#111318ee",border:"#2e3a50",borderSubtle:"#1c2436",textPrimary:"#ffffff",textBody:"#dce4ef",textMuted:"#a3b5cc",textDim:"#8899b3",textFaint:"#556a85",edgeDefault:"#3d5577",edgeHighlighted:"#5ab0ff",edgeDimmed:"#0d1118"},warm:{name:"Warm",bg:"#131110",surface:"#1c1916",surfaceHi:"#1c1916ee",border:"#33291f",borderSubtle:"#28211a",textPrimary:"#f2ede6",textBody:"#d4cabb",textMuted:"#a89d8e",textDim:"#8a7e6f",textFaint:"#5c5347",edgeDefault:"#4a3f32",edgeHighlighted:"#e8a84c",edgeDimmed:"#1a1614"},bright:{name:"Bright",bg:"#f7f7f2",surface:"#ffffff",surfaceHi:"#ffffffee",border:"#e0ddd5",borderSubtle:"#ebe8e2",textPrimary:"#1a1a1a",textBody:"#3a3a3a",textMuted:"#6b6b6b",textDim:"#8a8a8a",textFaint:"#b5b5b5",edgeDefault:"#c5c0b6",edgeHighlighted:"#58cc02",edgeDimmed:"#edebe6"}},R={...oc.midnight,known:"#27ae60",knownHi:"#2ecc71",unknown:"#c0392b",unknownHi:"#e74c3c",frontier:"#f39c12",frontierHi:"#f1c40f"};function l1(i){const t=oc[i];t&&Object.assign(R,t)}const Ue="'JetBrains Mono','SF Mono','Fira Code',monospace",Ri=(i,t)=>({padding:"6px 12px",borderRadius:20,fontSize:12,cursor:"pointer",border:i?`1px solid ${t}`:`1px solid ${R.border}`,background:i?`${t}22`:"transparent",color:i?t:R.textDim,minHeight:32}),Eo=i=>({padding:"10px 18px",borderRadius:6,fontSize:14,cursor:"pointer",fontWeight:600,border:`1px solid ${i}`,background:`${i}22`,color:i,minHeight:44}),va=["abs_value","analytic_geom","area_perimeter","arith_geom","bernoulli","binom_theorem","circle_eq","combinations","complex","cond_prob","conic_sections","counting","data_basics","deriv_apps","derivative","distributions","factoring","fn_compositions","fn_concept","fn_exp","fn_linear","fn_log","fn_poly","fn_quadratic","fn_trig","fractions","geo_series","integers","integral","limits","linear_eq","linear_ineq","linear_sys","log_eq","log_exp","logic_basics","optimization_lp","param_eq","permutations","planimetria_lp","poly_roots","polynomials","powers","probability","proof","pythagoras","quadratic_eq","quadratic_ineq","rational_expr","seq_limits","sequences","sets","sin_cos_law","solid_geom","stat_lp","thales","trig_basic","trig_eq","trig_formulas","trig_lp","vectors","vieta"];function Wl(i){return va.map(t=>i[t]==="known"?"1":i[t]==="unknown"?"2":"0").join("")}function uv(i){const t={};for(let r=0;r<va.length&&r<i.length;r++)i[r]==="1"?t[va[r]]="known":i[r]==="2"&&(t[va[r]]="unknown");return t}const dv={all:{pl:"Wszystkie",en:"All"},cancel:{pl:"Anuluj",en:"Cancel"},reset:{pl:"Reset",en:"Reset"},next:{pl:"Dalej",en:"Next"},close:{pl:"Zamknij",en:"Close"},search:{pl:"Szukaj…",en:"Search…"},noResults:{pl:"Brak wyników",en:"No results"},level:{pl:"Poziom",en:"Level"},appTitle:{pl:"PODSTAWA PROGRAMOWA — MATEMATYKA",en:"CURRICULUM — MATHEMATICS"},topicsCount:{pl:"tematy",en:"topics"},edgesCount:{pl:"połączenia",en:"edges"},hintBrowse:{pl:"scroll = zoom · przeciągnij = przesuń · kliknij węzeł = szczegóły",en:"scroll = zoom · drag = pan · click node = details"},hintDiagQuick:{pl:"kliknij węzeł = pytanie · shift+click = nieznany · zielony = cofnij",en:"click node = question · shift+click = unknown · green = undo"},hintDiagDeep:{pl:"kliknij węzeł w podgrafie, aby odpowiedzieć",en:"click a node in the subgraph to answer"},layoutLabel:{pl:"Układ",en:"Layout"},exploreMode:{pl:"Eksploruj",en:"Explore"},diagnosticOff:{pl:"Diagnoza",en:"Diagnostic"},diagnosticOnQuick:{pl:"Diagnoza (Szybka) ✓",en:"Diagnostic (Quick) ✓"},diagnosticOnDeep:{pl:"Diagnoza (Szczegółowa) ✓",en:"Diagnostic (Deep-Dive) ✓"},goalBtn:{pl:"◎ Cel",en:"◎ Goal"},goalBtnTitle:{pl:"Wybierz cel szczegółowej diagnozy",en:"Choose deep-dive target"},modePickerTitle:{pl:"Wybierz tryb diagnozy",en:"Choose diagnostic mode"},modePickerSub:{pl:"Jak chcesz sprawdzić swoją wiedzę?",en:"How do you want to assess your knowledge?"},modeQuickLabel:{pl:"Szybka diagnoza",en:"Quick diagnostic"},modeQuickDesc:{pl:"Przejrzyj cały materiał i sprawdź, co już umiesz. Algorytm dobierze najbardziej wartościowe pytania.",en:"Sweep the whole curriculum and find what you know. The system picks the most informative questions."},modeDeepLabel:{pl:"Szczegółowa analiza",en:"Deep-dive analysis"},modeDeepDesc:{pl:"Wybierz konkretny cel (np. temat maturalny). Algorytm przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific target topic. The system analyses only the required prerequisites."},goalModalTitle:{pl:"Wybierz cel",en:"Choose goal"},goalModalSub:{pl:"Wybierz temat docelowy. Zbadamy wszystkie wymagania wstępne.",en:"Pick a target topic. We will diagnose all transitive prerequisites."},filterSection:{pl:"Etap",en:"Stage"},filterScope:{pl:"Dział",en:"Topic area"},filters:{pl:"Filtry",en:"Filters"},filterTitle:{pl:"Filtry",en:"Filters"},done:{pl:"Gotowe",en:"Done"},moreOptions:{pl:"Opcje",en:"Options"},prerequisites:{pl:"Wymagania wstępne",en:"Prerequisites"},enables:{pl:"Odblokuje",en:"Enables"},noPrereqs:{pl:"Brak wymagań wstępnych",en:"No prerequisites"},noDependents:{pl:"Brak zależnych tematów",en:"No dependent topics"},learningResources:{pl:"Materiały do nauki",en:"Learning resources"},resourceInteractive:{pl:"Interaktywna wizualizacja",en:"Interactive visualization"},resourceVideo:{pl:"Wideo",en:"Video"},resourceArticle:{pl:"Artykuł",en:"Article"},openResource:{pl:"Otwórz",en:"Open"},closeResource:{pl:"Zamknij materiał",en:"Close resource"},openInTab:{pl:"Otwórz w nowej karcie",en:"Open in new tab"},checkAnswer:{pl:"Sprawdź",en:"Check"},knownConfirm:{pl:"✓ Znam!",en:"✓ I know it!"},unknownConfirm:{pl:"✗ Nie znam",en:"✗ Don't know it"},skipBtn:{pl:"Pomiń",en:"Skip"},noQuestion:{pl:"Brak pytania dla tego węzła. Czy znasz ten temat?",en:"No question for this node. Do you know this topic?"},yesKnow:{pl:"✓ Tak",en:"✓ Yes"},noKnow:{pl:"✗ Nie",en:"✗ No"},diagHeader:{pl:"Diagnoza",en:"Diagnostic"},statKnown:{pl:"Znam",en:"Known"},statUnknown:{pl:"Nie znam",en:"Unknown"},statRemaining:{pl:"Do odp.",en:"To go"},answered:{pl:"Odpowiedzi",en:"Answered"},estimated:{pl:"Szacowane",en:"Estimated"},accuracy:{pl:"Trafność",en:"Accuracy"},sessionDone:{pl:"Sesja zakończona ✓",en:"Session complete ✓"},sessionDoneSub:{pl:"Odpowiedziano na",en:"Answered"},sessionDoneQ:{pl:"pytań",en:"questions"},sessionDoneClass:{pl:"Sklasyfikowano",en:"Classified"},sessionDoneAcc:{pl:"Trafność",en:"Accuracy"},sessionDoneKnown:{pl:"Znasz",en:"You know"},sessionDoneStudy:{pl:"do nauki",en:"to study"},toStudy:{pl:"Do nauki",en:"To study"},knownList:{pl:"Znam",en:"Known"},startHere:{pl:"★ Zacznij tutaj",en:"★ Start here"},startHereSub:{pl:"najwięcej powiązań w grafie",en:"most connections in the graph"},clickAnyNode:{pl:"Lub kliknij dowolny węzeł na grafie.",en:"Or click any node on the graph."},whatNext:{pl:"▶ Co dalej",en:"▶ What next"},best:{pl:"najlepsze",en:"best"},hintShift:{pl:"Shift+click → oznacz jako nieznany",en:"Shift+click → mark as unknown"},hintGreen:{pl:"Kliknij zielony → usuń oznaczenie",en:"Click green → remove mark"},hintClick:{pl:"Kliknij węzeł → pytanie",en:"Click node → question"},deepDiveHeader:{pl:"Szczegółowa diagnoza",en:"Deep-dive diagnostic"},deepDiveTarget:{pl:"Cel",en:"Goal"},deepDiveNodes:{pl:"węzłów w podgrafie",en:"nodes in subgraph"},classified:{pl:"Sklasyfikowano",en:"Classified"},questions:{pl:"Pytań",en:"Questions"},diagReady:{pl:"Diagnoza gotowa ✓",en:"Diagnosis complete ✓"},diagKnown:{pl:"Znam",en:"Known"},diagStudy:{pl:"Do nauki",en:"To study"},diagTotal:{pl:"Razem",en:"Total"},studyThese:{pl:"Do nauki — zacznij od tych:",en:"To study — start with these:"},mastered:{pl:"Opanowane:",en:"Mastered:"},nextQuestion:{pl:"★ Następne pytanie",en:"★ Next question"},confidence:{pl:"pewność",en:"confidence"},unclassified:{pl:"Niezbadane",en:"Unclassified"},legendTitle:{pl:"Legenda",en:"Legend"},legendKnown:{pl:"Znany",en:"Known"},legendUnknown:{pl:"Nieznany",en:"Unknown"},legendFrontier:{pl:"Granica (do sprawdzenia)",en:"Frontier (to assess)"},legendUnclassified:{pl:"Niesklasyfikowany",en:"Unclassified"},legendScopes:{pl:"Działy",en:"Topic areas"},legendStages:{pl:"Etapy",en:"Stages"},onboardingTitle:{pl:"Witaj w oczochodzi.pl",en:"Welcome to oczochodzi.pl"},onboardingSub:{pl:"Interaktywna mapa polskiej podstawy programowej z matematyki. Każdy węzeł to temat, a połączenia pokazują wymagania wstępne.",en:"An interactive map of the Polish maths curriculum. Each node is a topic, edges show prerequisites."},onboardingBrowse:{pl:"🔍 Przeglądaj",en:"🔍 Browse"},onboardingBrowseDesc:{pl:"Kliknij dowolny węzeł, żeby zobaczyć szczegóły, wymagania wstępne i tematy, które odblokuje.",en:"Click any node to see details, prerequisites, and the topics it unlocks."},onboardingDiag:{pl:"⚡ Szybka diagnoza",en:"⚡ Quick diagnostic"},onboardingDiagDesc:{pl:"Sprawdź, co umiesz — algorytm dobierze najbardziej wartościowe pytania i zmapuje Twoją wiedzę.",en:"Find out what you know — the algorithm picks the most informative questions and maps your knowledge."},onboardingDeep:{pl:"◎ Szczegółowa analiza",en:"◎ Deep-dive analysis"},onboardingDeepDesc:{pl:"Wybierz konkretny cel (temat maturalny lub dowolny węzeł) — algorytm przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific goal topic — the system focuses only on its required prerequisites."},onboardingChoose:{pl:"Wybierz tryb, żeby zacząć:",en:"Choose a mode to get started:"},onboardingStart:{pl:"Zaczynamy →",en:"Get started →"},onboardingSkip:{pl:"Pomiń",en:"Skip"},onboardingLangHint:{pl:"Możesz zmienić język w pasku filtrów (PL / EN).",en:"You can switch language in the filter bar (PL / EN)."},heroTitle:{pl:"Matura coraz bliżej — co jeszcze powtórzyć?",en:"Find your gaps in mathematics"},heroSub:{pl:"Odpowiedz na kilkanaście pytań. Pokażemy, od czego zacząć, żeby Twoja wiedza stała na solidnych fundamentach.",en:"Answer a handful of questions. We'll show you exactly where to start so your knowledge stands on solid foundations."},heroStart:{pl:"Sprawdź się",en:"Start assessment"},heroBrowse:{pl:"Przeglądaj mapę →",en:"Browse the map →"},heroLength:{pl:"Czas:",en:"Length:"},heroQuestions:{pl:"pytań",en:"questions"},presetQuick:{pl:"Szybki",en:"Quick"},presetQuickDesc:{pl:"Szybki przegląd",en:"Quick overview"},presetStandard:{pl:"Standardowy",en:"Standard"},presetStandardDesc:{pl:"Dobry balans",en:"Good balance"},presetThorough:{pl:"Dokładny",en:"Thorough"},presetThoroughDesc:{pl:"Szczegółowy obraz",en:"Detailed picture"},heroStep1:{pl:"Odpowiadasz na pytania",en:"Answer questions"},heroStep2:{pl:"Algorytm mapuje Twoją wiedzę",en:"Algorithm maps your knowledge"},heroStep3:{pl:"Dostajesz plan, od czego zacząć",en:"Get a plan for where to start"},quizExit:{pl:"Wyjdź",en:"Exit"},quizQuestion:{pl:"Pytanie",en:"Question"},quizClassified:{pl:"zbadane",en:"classified"},quizAccuracy:{pl:"trafność",en:"accuracy"},quizOf:{pl:"pytań",en:"questions"},quizCorrectShort:{pl:"poprawnych",en:"correct"},quizCheck:{pl:"Sprawdź",en:"Check"},quizContinue:{pl:"Dalej",en:"Continue"},quizProcessing:{pl:"Analizuję wyniki…",en:"Analyzing results…"},quizExitConfirm:{pl:"Na pewno chcesz przerwać? Postęp zostanie utracony.",en:"Are you sure you want to quit? Progress will be lost."},quizNoQuestion:{pl:"Brak pytania dla tego tematu. Czy go znasz?",en:"No question available for this topic. Do you know it?"},quizYes:{pl:"Tak, znam",en:"Yes, I know it"},quizNo:{pl:"Nie, nie znam",en:"No, I don't"},resultsTitle:{pl:"Twoja diagnoza",en:"Your diagnosis"},resultsAnswered:{pl:"pytań",en:"questions"},resultsAccuracy:{pl:"trafność",en:"accuracy"},resultsKnown:{pl:"Znasz",en:"Known"},resultsToStudy:{pl:"Do nauki",en:"To study"},resultsGapsTitle:{pl:"Zacznij tutaj",en:"Start here"},resultsGapsSub:{pl:"Te tematy to Twoje największe luki — najlepszy punkt startowy, żeby zbudować solidną bazę.",en:"These are your biggest gaps — the best starting point to build a solid foundation."},resultsHasResource:{pl:"ma materiały",en:"has resources"},resultsMore:{pl:"więcej tematów do nauki",en:"more topics to study"},resultsAllGood:{pl:"Wszystko opanowane!",en:"All clear!"},resultsAllGoodSub:{pl:"Nie znaleziono luk w Twojej wiedzy.",en:"No gaps found in your knowledge."},resultsSeeMap:{pl:"Zobacz swoją mapę",en:"See your map"},resultsShare:{pl:"Udostępnij wynik",en:"Share results"},resultsRetake:{pl:"Spróbuj ponownie",en:"Try again"},coffeeText:{pl:"Pomogło? Możesz postawić mi kawę.",en:"Found it helpful? You can buy me a coffee."},coffeeBtn:{pl:"Postaw kawę ☕",en:"Buy me a coffee ☕"},beliefKnown:{pl:"Znasz ten temat",en:"You know this topic"},beliefUnknown:{pl:"Do nauki",en:"To study"},topicBack:{pl:"Wróć do mapy",en:"Back to map"},topicLearnPath:{pl:"Ścieżka do tego tematu",en:"Path to this topic"},topicQuizMe:{pl:"Sprawdź się z tego tematu",en:"Quiz me on this topic"},pathLabel:{pl:"Ścieżka nauki",en:"Learning path"},pathTopics:{pl:"tematów w ścieżce",en:"topics in path"},pathKnown:{pl:"znasz",en:"known"},pathToStudy:{pl:"do nauki",en:"to study"},pathGoal:{pl:"— cel",en:"— goal"},pathStartHere:{pl:"zacznij tutaj",en:"start here"},heroGoal:{pl:"Wybierz cel i sprawdź gotowość",en:"Pick a goal & test readiness"},heroExplore:{pl:"Eksploruj mapę bez testu →",en:"Explore the map without a test →"},goalQuizTitle:{pl:"Szczegółowa analiza",en:"Deep analysis"},goalQuizSub:{pl:"Sprawdzamy wymagania wstępne dla:",en:"Testing prerequisites for:"},goalQuizTopics:{pl:"tematów do zbadania",en:"topics to assess"},goalQuizDone:{pl:"Analiza zakończona",en:"Analysis complete"},goalQuizSeeMap:{pl:"Zobacz na mapie",en:"See on map"},goalQuizRetake:{pl:"Powtórz analizę",en:"Retake analysis"},goalQuizBackHero:{pl:"Wróć na start",en:"Back to start"}};function G(i,t="pl"){const r=dv[i];return r?r[t]??r.pl??i:(console.warn(`i18n: missing key "${i}"`),i)}function Wo(i,t){const r={},s={};return i.forEach(a=>{r[a.id]=[],s[a.id]=[]}),t.forEach(([a,c])=>{var d,f;(d=r[c])==null||d.push(a),(f=s[a])==null||f.push(c)}),{prereqs:r,dependents:s}}function sc(i,t){const r=Object.fromEntries(i.map(d=>[d.id,0])),s=Object.fromEntries(i.map(d=>[d.id,[]]));for(const[d,f]of t)r[f]!==void 0&&r[f]++,s[d]!==void 0&&s[d].push(f);const a=Object.fromEntries(i.map(d=>[d.id,0])),c=i.filter(d=>r[d.id]===0).map(d=>d.id);for(;c.length;){const d=c.shift();for(const f of s[d])a[f]=Math.max(a[f],a[d]+1),--r[f]===0&&c.push(f)}return a}const pv={id:"spectral",label:"Spectral"};function mv(i,t,r,s,a=80){const c=i.length,d=Object.fromEntries(i.map((L,Q)=>[L.id,Q])),f=Array.from({length:c},()=>new Float64Array(c));t.forEach(([L,Q])=>{const X=d[L],Y=d[Q];X==null||Y==null||(f[X][Y]=1,f[Y][X]=1)});const h=f.map(L=>L.reduce((Q,X)=>Q+X,0)),v=L=>L.map((Q,X)=>{let Y=0;for(let re=0;re<c;re++)Y+=f[X][re]*L[re];return h[X]*L[X]-Y}),w=(L,Q)=>L.reduce((X,Y,re)=>X+Y*Q[re],0),$=L=>{const Q=Math.sqrt(w(L,L))||1;return L.map(X=>X/Q)},k=(L,Q)=>{let X=[...L];return Q.forEach(Y=>{const re=w(X,Y);X=X.map((J,ne)=>J-re*Y[ne])}),$(X)},z=(L,Q=400)=>{let X=$(Array.from({length:c},()=>Math.random()-.5));X=k(X,L);for(let Y=0;Y<Q;Y++){const re=Math.max(...h)+1;X=k(X.map((J,ne)=>re*J-v(X)[ne]),L)}return X},T=$(new Array(c).fill(1)),S=z([T]),N=z([T,S]),M=Math.min(...S),V=Math.max(...S),O=Math.min(...N),D=Math.max(...N),E=V-M<1e-6?1:(r-2*a)/(V-M),W=D-O<1e-6?1:(s-2*a)/(D-O);return i.map((L,Q)=>({id:L.id,x:a+(S[Q]-M)*E,y:a+(N[Q]-O)*W,vx:0,vy:0}))}const fv=Object.freeze(Object.defineProperty({__proto__:null,apply:mv,meta:pv},Symbol.toStringTag,{value:"Module"})),hv={id:"topoRank",label:"Topo Rank"},c1=["liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","kombinatoryka","statystyka","logika","optymalizacja","analiza"];function gv(i,t,r,s,a=80){const c=sc(i,t),d=Math.max(...i.map(w=>c[w.id]??0),0),f={};for(const w of i){const $=c[w.id]??0;(f[$]??(f[$]=[])).push(w)}for(const w of Object.values(f))w.sort(($,k)=>{const z=c1.indexOf($.scope),T=c1.indexOf(k.scope);return(z===-1?999:z)-(T===-1?999:T)});const h=r-2*a,v=s-2*a;return i.map(w=>{const $=c[w.id]??0,k=f[$],z=k.indexOf(w);return{id:w.id,x:a+(z+.5)/k.length*h,y:a+$/Math.max(d,1)*v,vx:0,vy:0}})}const yv=Object.freeze(Object.defineProperty({__proto__:null,apply:gv,meta:hv},Symbol.toStringTag,{value:"Module"})),vv={id:"nPartite",label:"N-Partite Grid"},xv=90;function wv(i,t,r,s,a=120){const c=sc(i,t),d=Math.max(...i.map(T=>c[T.id]??0),0),f={};for(const T of i){const S=c[T.id]??0;(f[S]??(f[S]=[])).push(T)}const h={},v={};for(const T of i)h[T.id]=[],v[T.id]=[];for(const[T,S]of t)h[S]&&h[S].push(T),v[T]&&v[T].push(S);const w=["logika","statystyka","kombinatoryka","liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","optymalizacja","analiza"],$={},k=r-2*a,z=s-2*a;for(let T=0;T<=d;T++){const S=f[T]??[];T===0?S.sort((N,M)=>{const V=w.indexOf(N.scope),O=w.indexOf(M.scope);return(V===-1?999:V)-(O===-1?999:O)}):S.sort((N,M)=>Ar(N,h,$,r)-Ar(M,h,$,r)),Sl(S,a,k,r,T,d,z,$)}for(let T=0;T<6;T++)if(T%2===0)for(let S=1;S<=d;S++){const N=f[S]??[];N.sort((M,V)=>Ar(M,h,$,r)-Ar(V,h,$,r)),Sl(N,a,k,r,S,d,z,$)}else for(let S=d-1;S>=0;S--){const N=f[S]??[];S===0?N.sort((M,V)=>{const O=Ar(M,v,$,r),D=Ar(V,v,$,r);if(Math.abs(O-D)>1)return O-D;const E=w.indexOf(M.scope),W=w.indexOf(V.scope);return(E===-1?999:E)-(W===-1?999:W)}):N.sort((M,V)=>Ar(M,v,$,r)-Ar(V,v,$,r)),Sl(N,a,k,r,S,d,z,$)}return i.map(T=>{var S,N;return{id:T.id,x:((S=$[T.id])==null?void 0:S.x)??r/2,y:((N=$[T.id])==null?void 0:N.y)??s/2,vx:0,vy:0}})}function Ar(i,t,r,s){const a=t[i.id]??[];return a.length===0?s/2:a.reduce((c,d)=>{var f;return c+(((f=r[d])==null?void 0:f.x)??s/2)},0)/a.length}function Sl(i,t,r,s,a,c,d,f){const h=t+a/Math.max(c,1)*d,v=(i.length-1)*xv,w=Math.max(v,r),$=t+(r-w)/2;i.forEach((k,z)=>{const T=i.length===1?s/2:$+z/(i.length-1)*w;f[k.id]={x:T,y:h}})}const lp=Object.freeze(Object.defineProperty({__proto__:null,apply:wv,meta:vv},Symbol.toStringTag,{value:"Module"})),cp=[lp,yv,fv],up="nPartite";function bv(i){return cp.find(t=>t.meta.id===i)??lp}const ba=2200,ac=1600,Fo=120,$v=.4,u1=10,_v=.35,d1=.01;function kv(i,t){const r=sc(i,t),s=Math.max(...i.map(c=>r[c.id]??0),0),a=Object.fromEntries(i.map(c=>[c.id,Fo+(r[c.id]??0)/Math.max(s,1)*(ac-2*Fo)]));return{ranks:r,rankY:a}}function zv(i,t){const r=Object.fromEntries(i.map((s,a)=>[s.id,a]));return t.map(([s,a])=>[r[s],r[a]]).filter(([s,a])=>s!=null&&a!=null)}function Sv(i){return Math.sqrt(ba*ac/Math.max(i.length,1))*.9}function jv(i,t,r,s){return bv(i).apply(t,r,ba,ac,Fo).map(d=>({id:d.id,x:d.x+(Math.random()-.5)*20,y:s[d.id]??d.y,vx:0,vy:0}))}function qv(i,t,r,s,{ranks:a,rankY:c,simEdges:d,idealK:f}){const h=i.length,v=new Float64Array(h);for(let w=0;w<h;w++)for(let $=w+1;$<h;$++){if(a[i[w].id]!==a[i[$].id])continue;const k=i[w].x-i[$].x,z=Math.abs(k)||.1,T=f*f/(z*z),S=k<0?-1:1;v[w]+=S*T,v[$]-=S*T}for(const[w,$]of d){const k=i[$].x-i[w].x;v[w]+=k*d1,v[$]-=k*d1}for(let w=0;w<h;w++)v[w]+=(ba/2-i[w].x)*.003;return i.map((w,$)=>{if(w.id===t)return{...w,x:r,y:s,vx:0,vy:0};let k=(w.vx+v[$])*$v;Math.abs(k)>u1&&(k*=u1/Math.abs(k));const z=c[w.id]??w.y,T=w.y+(z-w.y)*_v;return{...w,vx:k,vy:0,x:Math.max(Fo,Math.min(ba-Fo,w.x+k)),y:T}})}function jl(i=up,t=300,r,s){if(!r||r.length===0)return{};const{ranks:a,rankY:c}=kv(r,s??[]),d=zv(r,s??[]),f=Sv(r),h={ranks:a,rankY:c,simEdges:d,idealK:f};let v=jv(i,r,s??[],c);for(let w=0;w<t;w++)v=qv(v,null,0,0,h);return Object.fromEntries(v.map(w=>[w.id,{x:w.x,y:w.y}]))}function Tv(i){const t=typeof window<"u"&&window.innerWidth<600,[r,s]=F.useState(t?{x:20,y:20,scale:.42}:{x:40,y:40,scale:.72}),[a,c]=F.useState("grab"),d=F.useRef(!1),f=F.useRef({x:0,y:0}),h=F.useRef(null),v=F.useRef(null),w=F.useCallback(D=>{D.preventDefault();const E=D.deltaY>0?.9:1.1;s(W=>{const L=Math.max(.15,Math.min(5,W.scale*E)),Q=D.clientX,X=D.clientY,Y=Q-(Q-W.x)/W.scale*L,re=X-(X-W.y)/W.scale*L;return{x:Y,y:re,scale:L}})},[]),$=F.useCallback((D,E)=>({x:(D-r.x)/r.scale,y:(E-r.y)/r.scale}),[r]),k=F.useCallback((D,E)=>{d.current=!0,c("grabbing"),f.current={x:D-r.x,y:E-r.y}},[r]),z=F.useCallback(D=>d.current?(s(E=>({...E,x:D.clientX-f.current.x,y:D.clientY-f.current.y})),!0):!1,[]),T=F.useCallback(()=>{d.current=!1,c("grab")},[]),S=(D,E)=>{const W=D.clientX-E.clientX,L=D.clientY-E.clientY;return Math.sqrt(W*W+L*L)},N=(D,E)=>({x:(D.clientX+E.clientX)/2,y:(D.clientY+E.clientY)/2}),M=F.useCallback(D=>{D.touches.length===1?(d.current=!0,s(E=>(f.current={x:D.touches[0].clientX-E.x,y:D.touches[0].clientY-E.y},E)),h.current=null,v.current=null):D.touches.length===2&&(d.current=!1,h.current=S(D.touches[0],D.touches[1]),v.current=N(D.touches[0],D.touches[1]))},[]),V=F.useCallback(D=>{if(D.preventDefault(),D.touches.length===1&&d.current)s(E=>({...E,x:D.touches[0].clientX-f.current.x,y:D.touches[0].clientY-f.current.y}));else if(D.touches.length===2&&h.current!==null){const E=S(D.touches[0],D.touches[1]),W=N(D.touches[0],D.touches[1]),L=E/h.current;s(Q=>{const X=Math.max(.15,Math.min(5,Q.scale*L)),Y=v.current.x,re=v.current.y,J=Y-(Y-Q.x)/Q.scale*X,ne=re-(re-Q.y)/Q.scale*X;return{x:J,y:ne,scale:X}}),h.current=E,v.current=W}},[]),O=F.useCallback(()=>{d.current=!1,h.current=null,v.current=null},[]);return F.useEffect(()=>{const D=i.current;if(D)return D.addEventListener("wheel",w,{passive:!1}),D.addEventListener("touchstart",M,{passive:!1}),D.addEventListener("touchmove",V,{passive:!1}),D.addEventListener("touchend",O,{passive:!1}),()=>{D.removeEventListener("wheel",w),D.removeEventListener("touchstart",M),D.removeEventListener("touchmove",V),D.removeEventListener("touchend",O)}},[i,w,M,V,O]),{viewTransform:r,setViewTransform:s,toCanvas:$,isPanning:d,panStart:f,startPan:k,cursorStyle:a,setCursorStyle:c,handleMouseMove:z,handleMouseUp:T,handleWheel:w}}function Av(i,t,r,s){const a=F.useRef(null),c=F.useRef({x:0,y:0}),d=F.useCallback((v,w,$)=>{const k=i(w,$),z=t.find(T=>T.id===v);z&&(a.current=v,c.current={x:k.x-z.x,y:k.y-z.y},s==null||s("grabbing"))},[i,t,s]),f=F.useCallback((v,w)=>{if(!a.current)return!1;const $=i(v,w),k=a.current;return r(z=>({...z,[k]:{x:$.x-c.current.x,y:$.y-c.current.y}})),!0},[i,r]),h=F.useCallback(()=>{a.current=null,s==null||s("grab")},[s]);return{draggingNode:a,startNodeDrag:d,handleDragMove:f,handleDragEnd:h}}const ii={quickMaxQuestions:20,quickCompletionRatio:.1,deepKnownThreshold:.7,deepUnknownThreshold:.3,deepMinStrength:2.5,deepMaxQuestions:15};function Mv(i,t,r){var c;const s={...t},a=[i];for(;a.length;){const d=a.shift();s[d]!=="known"&&(s[d]="known",(c=r.prereqs[d])==null||c.forEach(f=>{s[f]!=="known"&&a.push(f)}))}return s}function dp(i,t,r){var c;const s={...t},a=[i];for(;a.length;){const d=a.shift();s[d]!=="unknown"&&(s[d]="unknown",(c=r.dependents[d])==null||c.forEach(f=>{s[f]!=="unknown"&&a.push(f)}))}return s}function Lo(i,t,r,s,a){let c={...s};if(t){for(const d of Object.keys(r))c[d]="known";for(const d of Object.keys(r))c=Mv(d,c,a)}else{for(const d of Object.keys(r))c[d]="unknown";for(const d of Object.keys(r))c=dp(d,c,a)}return c}function Pv(i,t,r){return i.filter(s=>t[s.id]!=="known"&&t[s.id]!=="unknown").filter(s=>(r.prereqs[s.id]??[]).every(a=>t[a]==="known")).map(s=>s.id)}function lc(i,t,r,s=.5){var a,c,d;try{const f=1-s,h=i.filter($=>t[$.id]!=="known"&&t[$.id]!=="unknown");if(h.length===0)return null;const v=h.map($=>{const k=pp($.id,t,r),z=mp($.id,t,r),T=s*k+f*z;return{id:$.id,erv:T||0,ancestorsToReveal:k,descendantsToReveal:z}});return v.sort(($,k)=>k.erv-$.erv),((a=v[0])==null?void 0:a.id)||((c=h[0])==null?void 0:c.id)||null}catch(f){return console.error("pickNextQuestion error:",f),((d=i.filter(v=>t[v.id]!=="known"&&t[v.id]!=="unknown")[0])==null?void 0:d.id)||null}}function pp(i,t,r){const s=new Set,a=[...r.prereqs[i]??[]];let c=0;for(;a.length>0;){const d=a.shift();if(s.has(d))continue;s.add(d),t[d]!=="known"&&t[d]!=="unknown"&&c++;const f=r.prereqs[d]??[];for(const h of f)s.has(h)||a.push(h)}return c}function mp(i,t,r){const s=new Set,a=[...r.dependents[i]??[]];let c=0;for(;a.length>0;){const d=a.shift();if(s.has(d))continue;s.add(d),t[d]!=="known"&&t[d]!=="unknown"&&c++;const f=r.dependents[d]??[];for(const h of f)s.has(h)||a.push(h)}return c}function Cv(i,t,r,s=.5){try{const a=i.filter(v=>t[v.id]!=="known"&&t[v.id]!=="unknown");if(a.length===0)return 0;const c=1-s;let d=0;for(const v of a){const w=pp(v.id,t,r),$=mp(v.id,t,r),k=s*w+c*$;d+=k||0}if(!d||d===0)return a.length;const f=a.length,h=f*f/d;return isNaN(h)?a.length:Math.ceil(h)}catch(a){return console.error("estimateRemainingQuestions error:",a),null}}function Rv(i,t,r){const s={...i};for(const[a,c]of Object.entries(t)){const d=s[a]??{alpha:1,beta:1};s[a]={alpha:d.alpha+(r?c:0),beta:d.beta+(r?0:c)}}return s}function Dv(i,t){const r={};for(const s of i){const a=t[s]??{alpha:1,beta:1},c=a.alpha+a.beta,d=a.alpha/c;d>ii.deepKnownThreshold&&c>ii.deepMinStrength?r[s]="known":d<ii.deepUnknownThreshold&&c>ii.deepMinStrength?r[s]="unknown":r[s]="uncertain"}return r}function fp(i,t,r){const s=new Set,a=new Set(r.map(d=>d.id)),c=[i];for(;c.length;){const d=c.shift();if(!s.has(d)&&a.has(d)){s.add(d);for(const f of t.prereqs[d]??[])s.has(f)||c.push(f)}}return s}function Ev(i,t,r,s,a){var f;const c=i.filter(h=>r[h]==="uncertain");if(c.length===0)return null;const d=c.map(h=>{const v=t[h]??{alpha:1,beta:1},w=v.alpha+v.beta,$=v.alpha/w,k=1-$,z=new Set(i);let T=0;const S=[...s.prereqs[h]??[]],N=new Set;for(;S.length;){const E=S.shift();if(!N.has(E)){N.add(E),z.has(E)&&r[E]==="uncertain"&&T++;for(const W of s.prereqs[E]??[])N.has(W)||S.push(W)}}let M=0;const V=[...s.dependents[h]??[]],O=new Set;for(;V.length;){const E=V.shift();if(!O.has(E)){O.add(E),z.has(E)&&r[E]==="uncertain"&&M++;for(const W of s.dependents[E]??[])O.has(W)||V.push(W)}}const D=$*T+k*M;return{id:h,erv:D,strength:w}});return d.sort((h,v)=>Math.abs(h.erv-v.erv)>.01?v.erv-h.erv:h.strength-v.strength),((f=d[0])==null?void 0:f.id)??c[0]}function Bv(i,t,r=0){return!!(i.every(s=>t[s]!=="uncertain")||r>=ii.deepMaxQuestions)}function cc(i,t,r=0,s){const a=(s==null?void 0:s.maxQuestions)??ii.quickMaxQuestions,c=(s==null?void 0:s.completionRatio)??ii.quickCompletionRatio,d=i.length;if(d===0)return!0;const f=i.filter(h=>t[h.id]!=="known"&&t[h.id]!=="unknown").length;return f===0||r>=a||f/d<=c}const Gl={quick:{maxQuestions:10,completionRatio:.15,labelKey:"presetQuick",descKey:"presetQuickDesc"},standard:{maxQuestions:20,completionRatio:.1,labelKey:"presetStandard",descKey:"presetStandardDesc"},thorough:{maxQuestions:35,completionRatio:.05,labelKey:"presetThorough",descKey:"presetThoroughDesc"}};function Nv(i,t,r){const s=r?`${r}_`:"",[a,c]=ht(`${s}diagMode`,!1),[d,f]=ht(`${s}diagSubMode`,"quick"),[h,v]=ht(`${s}belief`,{}),[w,$]=ht(`${s}targetNode`,null),[k,z]=ht(`${s}stats`,{correct:0,incorrect:0,questionsAnswered:0}),[T,S]=ht(`${s}answeredQuestions`,new Set),[N,M]=ht(`${s}betaBeliefs`,{}),[V,O]=ht(`${s}quizNode`,null),D=F.useMemo(()=>{const P=k.correct+k.incorrect;return P===0?.5:(k.correct+.5)/(P+1)},[k]),E=k.questionsAnswered,W=F.useMemo(()=>[...new Set([...Object.keys(i.prereqs),...Object.keys(i.dependents),...Object.keys(t)])].map(Z=>({id:Z})),[i,t]),L=F.useMemo(()=>Object.keys(h).length>0||k.questionsAnswered>0,[h,k]),Q=F.useMemo(()=>L?Pv(W,h,i):[],[L,h,i,W]),X=L?Q:[],Y=F.useMemo(()=>a&&d==="quick"?lc(W,h,i,D):null,[a,d,h,i,D,W]),re=F.useMemo(()=>a&&d==="quick"?Cv(W,h,i,D):null,[a,d,h,i,D,W]),J=F.useMemo(()=>a&&d==="quick"&&L&&cc(W,h,E),[a,d,L,h,W,E]),ne=F.useMemo(()=>!a||d!=="deepdive"||!w?[]:[...fp(w,i,W)],[a,d,w,i,W]),ge=F.useMemo(()=>d!=="deepdive"?{}:Dv(ne,N),[d,ne,N]),Ae=F.useMemo(()=>!a||d!=="deepdive"||ne.length===0?null:Ev(ne,N,ge,i),[a,d,ne,N,ge,i,W]),ye=F.useMemo(()=>!a||d!=="deepdive"||ne.length===0?!1:Bv(ne,ge,E),[a,d,ne,ge,E]),he=F.useCallback((P,Z)=>a?d==="deepdive"?ne.includes(P)?(ge[P]!=="uncertain"||O(P),!0):!1:h[P]==="unknown"?!0:Z?(v(_e=>dp(P,_e,i)),O(null),!0):h[P]==="known"?(v(_e=>{const qe={..._e};return delete qe[P],qe}),O(null),!0):(O(P),!0):!1,[a,d,h,i,ne,ge]),te=F.useCallback((P,Z,_e,qe)=>{if(d==="deepdive"){const Te=(_e==null?void 0:_e.tests)??{[P]:1};M(we=>Rv(we,Te,Z))}else{const Te=(_e==null?void 0:_e.tests)??{[P]:1};v(we=>Lo(P,Z,Te,we,i))}typeof qe=="number"&&S(Te=>new Set([...Te,`${P}:${qe}`])),z(Te=>({correct:Te.correct+(Z?1:0),incorrect:Te.incorrect+(Z?0:1),questionsAnswered:Te.questionsAnswered+1})),O(null)},[d,i]),me=F.useCallback(()=>{cv(),c(!1),f("quick"),v({}),M({}),O(null),$(null),z({correct:0,incorrect:0,questionsAnswered:0}),S(new Set)},[]),de=F.useCallback(P=>{f("deepdive"),$(P),M({}),v({}),O(null),z({correct:0,incorrect:0,questionsAnswered:0}),S(new Set),c(!0)},[]);return{diagMode:a,setDiagMode:c,mode:d,setMode:f,quizNode:V,setQuizNode:O,questionsAnswered:E,answeredQuestions:T,setAnsweredQuestions:S,getAnsweredIndices:P=>{const Z=[];return T.forEach(_e=>{const[qe,Te]=_e.split(":");qe===P&&Z.push(parseInt(Te,10))}),Z},handleDiagClick:he,handleQuizAnswer:te,resetDiagnostic:me,startDeepDive:de,targetNode:w,belief:h,setBelief:v,frontier:Q,visibleFrontier:X,hasStarted:L,nextSuggestedId:Y,expectedRemaining:re,pCorrect:D,sessionComplete:J,betaBeliefs:N,subgraphIds:ne,ddClassification:ge,ddNextNodeId:Ae,ddComplete:ye}}const p1=640;function Iv(){const[i,t]=F.useState(()=>typeof window<"u"&&window.innerWidth<p1);return F.useEffect(()=>{const r=window.matchMedia(`(max-width: ${p1-1}px)`),s=a=>t(a.matches);return r.addEventListener("change",s),t(r.matches),()=>r.removeEventListener("change",s)},[]),i}const Fv=new Set(["pl","en"]);function m1(i){const r=(i||"").replace(/^#\/?/,"").split("/").filter(Boolean);let s="pl",a=r;if(r.length>0&&Fv.has(r[0])&&(s=r[0],a=r.slice(1)),a[0]==="node"&&a[1]){const c=decodeURIComponent(a[1]);return a[2]==="resource"&&a[3]!=null?{view:"resource",nodeId:c,resourceIndex:parseInt(a[3],10),lang:s}:{view:"node",nodeId:c,lang:s}}if(a[0]==="diagnostic"){if(a[1]==="deepdive"&&a[2])return{view:"diagnostic",mode:"deepdive",goalNode:decodeURIComponent(a[2]),lang:s};if(a[1]==="quick")return{view:"diagnostic",mode:"quick",lang:s}}return{view:"graph",lang:s}}function Lv(i){const t=(i==null?void 0:i.lang)||"pl";if(!i)return`#/${t}`;switch(i.view){case"node":return`#/${t}/node/${encodeURIComponent(i.nodeId)}`;case"resource":return`#/${t}/node/${encodeURIComponent(i.nodeId)}/resource/${i.resourceIndex}`;case"diagnostic":return i.mode==="deepdive"&&i.goalNode?`#/${t}/diagnostic/deepdive/${encodeURIComponent(i.goalNode)}`:`#/${t}/diagnostic/quick`;default:return`#/${t}`}}function Ov(i){const t=F.useRef(i);t.current=i;const r=F.useRef(!1),s=F.useCallback(a=>{const c=Lv(a);window.location.hash!==c&&(r.current=!0,window.location.hash=c)},[]);return F.useEffect(()=>{const a=()=>{if(r.current){r.current=!1;return}t.current(m1(window.location.hash))};window.addEventListener("hashchange",a);const c=m1(window.location.hash);return Promise.resolve().then(()=>t.current(c)),()=>window.removeEventListener("hashchange",a)},[]),{setRoute:s}}function f1(i){return 6+i.level*2}function Hv({edges:i,nodes:t,highlightedIds:r}){const s=F.useMemo(()=>Object.fromEntries(t.map(a=>[a.id,a])),[t]);return y.jsx("g",{children:i.map(([a,c])=>{const d=s[a],f=s[c];if(!d||!f)return null;const h=(r==null?void 0:r.has(a))&&(r==null?void 0:r.has(c)),v=r&&!h,w=f.x-d.x,$=f.y-d.y,k=Math.sqrt(w*w+$*$)||1,z=f1(f)+3,T=f.x-w/k*z,S=f.y-$/k*z,N=f1(d)+2,M=d.x+w/k*N,V=d.y+$/k*N,O=v?"#151b26":h?"#4a9eff":"#334766",D=h?1.8:1,E=v?.15:h?1:.55,W=v?"url(#arrow-dim)":h?"url(#arrow-hi)":"url(#arrow-default)";return y.jsx("line",{x1:M,y1:V,x2:T,y2:S,stroke:O,strokeWidth:D,opacity:E,markerEnd:W},`${a}-${c}`)})})}function Wv(i,t){const r=8+i.level*3,s=Math.min(4.8,(t||0)*.6);return r+s}function Gv(i){return i<.3?6:i<.5?12:i<.8?18:30}function Uv(i){return i<.3?9:i<.6?10:11}function Vv({nodes:i,filteredIds:t,highlightedIds:r,selected:s,onSelect:a,onHover:c,lang:d,diagMode:f,belief:h,frontier:v,scale:w,scopeColors:$,edges:k}){const z=h&&Object.keys(h).length>0,T=F.useMemo(()=>{const S={};if(!k)return S;for(const[N,M]of k)S[N]=(S[N]||0)+1,S[M]=(S[M]||0)+1;return S},[k]);return y.jsx("g",{children:i.map(S=>{const N=T[S.id]||0,M=Wv(S,N),V=($==null?void 0:$[S.scope])||"#4a9eff",O=t&&!t.has(S.id),D=r==null?void 0:r.has(S.id),E=s===S.id,W=r&&!D||O,L=d==="pl"?S.labelPl:S.label,Q=Gv(w??1),X=Uv(w??1);let Y=V,re=W?.15:.9,J=W?.2:.85,ne=null,ge=2;if(z){const ye=h[S.id],he=v==null?void 0:v.includes(S.id);ye==="known"?(Y="#27ae60",ne="#2ecc71",re=O?.1:.85,J=O?.15:.9):ye==="unknown"?(Y="#c0392b",re=O?.1:.45,ne="#e74c3c",J=O?.15:.7):he?(Y="#f39c12",ne="#f1c40f",ge=3,re=O?.1:.9,J=O?.15:.9):(re=O?.1:f?.35:.5,J=O?.15:.7)}const Ae=L.length>Q?L.slice(0,Q-1)+"…":L;return y.jsxs("g",{"data-node-id":S.id,style:{cursor:"pointer"},onClick:()=>a(S.id===s?null:S.id),onMouseEnter:()=>c(S.id),onMouseLeave:()=>c(null),children:[(E||ne)&&y.jsx("circle",{cx:S.x,cy:S.y,r:M+(E?5:4),fill:"none",stroke:E?V:ne,strokeWidth:E?2:ge,opacity:E?.5:.9}),y.jsx("circle",{cx:S.x,cy:S.y,r:M,fill:Y,fillOpacity:re,stroke:(D||E)&&!z?V:"none",strokeWidth:1.5}),y.jsx("rect",{x:S.x-Ae.length*X*.3,y:S.y+M+3,width:Ae.length*X*.6,height:X+4,rx:2,fill:R.bg,fillOpacity:J*.6,style:{pointerEvents:"none"}}),y.jsx("text",{x:S.x,y:S.y+M+X+2,textAnchor:"middle",fontSize:X,fill:R.textBody,opacity:J,style:{pointerEvents:"none",userSelect:"none"},children:Ae})]},S.id)})})}function Kv({resource:i,lang:t,onClose:r}){const s=F.useRef(null);if(F.useEffect(()=>{const $=k=>{k.key==="Escape"&&r()};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[r]),F.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),!i)return null;const a=t==="pl"?i.titlePl:i.titleEn,c=i.type==="interactive",d={interactive:G("resourceInteractive",t),video:G("resourceVideo",t),article:G("resourceArticle",t)}[i.type]??i.type,f={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"}[i.type]??"#8a9dbe";if(!c)return window.open(i.url,"_blank","noopener"),r(),null;const v=i.url.startsWith("http")?i.url:`${"/".replace(/\/$/,"")}/${i.url.replace(/^\//,"")}`,w=v+(v.includes("?")?"&":"?")+"lang="+t;return y.jsxs("div",{ref:s,onClick:$=>{$.target===s.current&&r()},style:{position:"fixed",inset:0,zIndex:100,background:"rgba(8, 11, 20, 0.88)",backdropFilter:"blur(6px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"16px",animation:"rsPanel_fadeIn 0.18s ease"},children:[y.jsx("style",{children:`
        @keyframes rsPanel_fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}),y.jsxs("div",{style:{width:"100%",maxWidth:760,maxHeight:"calc(100vh - 32px)",display:"flex",flexDirection:"column",borderRadius:10,overflow:"hidden",border:`1px solid ${f}33`,boxShadow:`0 0 48px ${f}18, 0 8px 32px rgba(0,0,0,0.7)`},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",background:"#161c28f8",borderBottom:`1px solid ${f}22`,flexShrink:0,fontFamily:Ue},children:[y.jsx("span",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",color:f,background:`${f}18`,border:`1px solid ${f}40`,borderRadius:4,padding:"2px 7px",flexShrink:0},children:d}),y.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500,color:R.textBody,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:a}),y.jsx("button",{onClick:()=>window.open(w,"_blank","noopener"),title:G("openInTab",t),style:h1,children:"↗"}),y.jsx("button",{onClick:r,title:G("closeResource",t),style:{...h1,fontSize:18,lineHeight:1},children:"×"})]}),y.jsx("iframe",{src:w,sandbox:"allow-scripts allow-same-origin allow-forms",style:{flex:1,border:"none",background:"#0e0e12",minHeight:420,display:"block"},title:a,loading:"eager"})]})]})}const h1={background:"none",border:`1px solid ${R.border}`,borderRadius:5,color:R.textDim,cursor:"pointer",fontSize:14,padding:"3px 9px",fontFamily:Ue,transition:"background 0.12s, color 0.12s",flexShrink:0,lineHeight:1.4};class Xn{constructor(t,r,s){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=t,this.start=r,this.end=s}static range(t,r){return r?!t||!t.loc||!r.loc||t.loc.lexer!==r.loc.lexer?null:new Xn(t.loc.lexer,t.loc.start,r.loc.end):t&&t.loc}}class st{constructor(t,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=t,this.loc=r}range(t,r){return new st(r,Xn.range(this,t))}}class ce{constructor(t,r){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var s="KaTeX parse error: "+t,a,c,d=r&&r.loc;if(d&&d.start<=d.end){var f=d.lexer.input;a=d.start,c=d.end,a===f.length?s+=" at end of input: ":s+=" at position "+(a+1)+": ";var h=f.slice(a,c).replace(/[^]/g,"$&̲"),v;a>15?v="…"+f.slice(a-15,a):v=f.slice(0,a);var w;c+15<f.length?w=f.slice(c,c+15)+"…":w=f.slice(c),s+=v+h+w}var $=new Error(s);return $.name="ParseError",$.__proto__=ce.prototype,$.position=a,a!=null&&c!=null&&($.length=c-a),$.rawMessage=t,$}}ce.prototype.__proto__=Error.prototype;var Zv=/([A-Z])/g,uc=i=>i.replace(Zv,"-$1").toLowerCase(),Qv={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},Yv=/[&><"']/g,En=i=>String(i).replace(Yv,t=>Qv[t]),No=i=>i.type==="ordgroup"||i.type==="color"?i.body.length===1?No(i.body[0]):i:i.type==="font"?No(i.body):i,Xv=new Set(["mathord","textord","atom"]),or=i=>Xv.has(No(i).type),Jv=i=>{var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(i);return t?t[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():"_relative"},xa={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:i=>"#"+i},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(i,t)=>(t.push(i),t)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:i=>Math.max(0,i),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:i=>Math.max(0,i),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:i=>Math.max(0,i),cli:"-e, --max-expand <n>",cliProcessor:i=>i==="Infinity"?1/0:parseInt(i)},globalGroup:{type:"boolean",cli:!1}};function e8(i){if(i.default)return i.default;var t=i.type,r=Array.isArray(t)?t[0]:t;if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class dc{constructor(t){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,t=t||{};for(var r in xa)if(xa.hasOwnProperty(r)){var s=xa[r];this[r]=t[r]!==void 0?s.processor?s.processor(t[r]):t[r]:e8(s)}}reportNonstrict(t,r,s){var a=this.strict;if(typeof a=="function"&&(a=a(t,r,s)),!(!a||a==="ignore")){if(a===!0||a==="error")throw new ce("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+t+"]"),s);a==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+t+"]"))}}useStrictBehavior(t,r,s){var a=this.strict;if(typeof a=="function")try{a=a(t,r,s)}catch{a="error"}return!a||a==="ignore"?!1:a===!0||a==="error"?!0:a==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+a+"': "+r+" ["+t+"]")),!1)}isTrusted(t){if(t.url&&!t.protocol){var r=Jv(t.url);if(r==null)return!1;t.protocol=r}var s=typeof this.trust=="function"?this.trust(t):this.trust;return!!s}}class Mr{constructor(t,r,s){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=t,this.size=r,this.cramped=s}sup(){return Bt[n8[this.id]]}sub(){return Bt[t8[this.id]]}fracNum(){return Bt[r8[this.id]]}fracDen(){return Bt[i8[this.id]]}cramp(){return Bt[o8[this.id]]}text(){return Bt[s8[this.id]]}isTight(){return this.size>=2}}var pc=0,$a=1,Ei=2,rr=3,Oo=4,gt=5,Bi=6,On=7,Bt=[new Mr(pc,0,!1),new Mr($a,0,!0),new Mr(Ei,1,!1),new Mr(rr,1,!0),new Mr(Oo,2,!1),new Mr(gt,2,!0),new Mr(Bi,3,!1),new Mr(On,3,!0)],n8=[Oo,gt,Oo,gt,Bi,On,Bi,On],t8=[gt,gt,gt,gt,On,On,On,On],r8=[Ei,rr,Oo,gt,Bi,On,Bi,On],i8=[rr,rr,gt,gt,On,On,On,On],o8=[$a,$a,rr,rr,gt,gt,On,On],s8=[pc,$a,Ei,rr,Ei,rr,Ei,rr],Ie={DISPLAY:Bt[pc],TEXT:Bt[Ei],SCRIPT:Bt[Oo],SCRIPTSCRIPT:Bt[Bi]},Ul=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function a8(i){for(var t=0;t<Ul.length;t++)for(var r=Ul[t],s=0;s<r.blocks.length;s++){var a=r.blocks[s];if(i>=a[0]&&i<=a[1])return r.name}return null}var wa=[];Ul.forEach(i=>i.blocks.forEach(t=>wa.push(...t)));function hp(i){for(var t=0;t<wa.length;t+=2)if(i>=wa[t]&&i<=wa[t+1])return!0;return!1}var Di=80,l8=function(t,r){return"M95,"+(622+t+r)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+t/2.075+" -"+t+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+t)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},c8=function(t,r){return"M263,"+(601+t+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+t/2.084+" -"+t+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+t)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},u8=function(t,r){return"M983 "+(10+t+r)+`
l`+t/3.13+" -"+t+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+t)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},d8=function(t,r){return"M424,"+(2398+t+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+t/4.223+" -"+t+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+t)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+t)+" "+r+`
h400000v`+(40+t)+"h-400000z"},p8=function(t,r){return"M473,"+(2713+t+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+t/5.298+" -"+t+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+t)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+t)+" "+r+"h400000v"+(40+t)+"H1017.7z"},m8=function(t){var r=t/2;return"M400000 "+t+" H0 L"+r+" 0 l65 45 L145 "+(t-80)+" H400000z"},f8=function(t,r,s){var a=s-54-r-t;return"M702 "+(t+r)+"H400000"+(40+t)+`
H742v`+a+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+t)+"H742z"},h8=function(t,r,s){r=1e3*r;var a="";switch(t){case"sqrtMain":a=l8(r,Di);break;case"sqrtSize1":a=c8(r,Di);break;case"sqrtSize2":a=u8(r,Di);break;case"sqrtSize3":a=d8(r,Di);break;case"sqrtSize4":a=p8(r,Di);break;case"sqrtTall":a=f8(r,Di,s)}return a},g8=function(t,r){switch(t){case"⎜":return"M291 0 H417 V"+r+" H291z M291 0 H417 V"+r+" H291z";case"∣":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z";case"∥":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z"+("M367 0 H410 V"+r+" H367z M367 0 H410 V"+r+" H367z");case"⎟":return"M457 0 H583 V"+r+" H457z M457 0 H583 V"+r+" H457z";case"⎢":return"M319 0 H403 V"+r+" H319z M319 0 H403 V"+r+" H319z";case"⎥":return"M263 0 H347 V"+r+" H263z M263 0 H347 V"+r+" H263z";case"⎪":return"M384 0 H504 V"+r+" H384z M384 0 H504 V"+r+" H384z";case"⏐":return"M312 0 H355 V"+r+" H312z M312 0 H355 V"+r+" H312z";case"‖":return"M257 0 H300 V"+r+" H257z M257 0 H300 V"+r+" H257z"+("M478 0 H521 V"+r+" H478z M478 0 H521 V"+r+" H478z");default:return""}},g1={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:`M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,leftmapsto:`M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:`M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:`M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},y8=function(t,r){switch(t){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+r+" v1759 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+r+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+r+" v1759 h84z";case"vert":return"M145 15 v585 v"+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+r+" v585 h43z";case"doublevert":return"M145 15 v585 v"+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+r+` v585 h43z
M367 15 v585 v`+r+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-r+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+r+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+r+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+r+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+r+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+r+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v602 h84z
M403 1759 V0 H319 V1759 v`+r+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+r+` v602 h84z
M347 1759 V0 h-84 V1759 v`+r+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(r+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(r+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(r+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(r+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class Go{constructor(t){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=t,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(t){return this.classes.includes(t)}toNode(){for(var t=document.createDocumentFragment(),r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){for(var t="",r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t}toText(){var t=r=>r.toText();return this.children.map(t).join("")}}var Nt={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},aa={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},y1={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function v8(i,t){Nt[i]=t}function mc(i,t,r){if(!Nt[t])throw new Error("Font metrics not found for font: "+t+".");var s=i.charCodeAt(0),a=Nt[t][s];if(!a&&i[0]in y1&&(s=y1[i[0]].charCodeAt(0),a=Nt[t][s]),!a&&r==="text"&&hp(s)&&(a=Nt[t][77]),a)return{depth:a[0],height:a[1],italic:a[2],skew:a[3],width:a[4]}}var ql={};function x8(i){var t;if(i>=5?t=0:i>=3?t=1:t=2,!ql[t]){var r=ql[t]={cssEmPerMu:aa.quad[t]/18};for(var s in aa)aa.hasOwnProperty(s)&&(r[s]=aa[s][t])}return ql[t]}var w8=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],v1=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],x1=function(t,r){return r.size<2?t:w8[t-1][r.size-1]};class tr{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||tr.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||"",this.fontFamily=t.fontFamily||"",this.fontWeight=t.fontWeight||"",this.fontShape=t.fontShape||"",this.sizeMultiplier=v1[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var s in t)t.hasOwnProperty(s)&&(r[s]=t[s]);return new tr(r)}havingStyle(t){return this.style===t?this:this.extend({style:t,size:x1(this.textSize,t)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(t){return this.size===t&&this.textSize===t?this:this.extend({style:this.style.text(),size:t,textSize:t,sizeMultiplier:v1[t-1]})}havingBaseStyle(t){t=t||this.style.text();var r=x1(tr.BASESIZE,t);return this.size===r&&this.textSize===tr.BASESIZE&&this.style===t?this:this.extend({style:t,size:r})}havingBaseSizing(){var t;switch(this.style.id){case 4:case 5:t=3;break;case 6:case 7:t=1;break;default:t=6}return this.extend({style:this.style.text(),size:t})}withColor(t){return this.extend({color:t})}withPhantom(){return this.extend({phantom:!0})}withFont(t){return this.extend({font:t})}withTextFontFamily(t){return this.extend({fontFamily:t,font:""})}withTextFontWeight(t){return this.extend({fontWeight:t,font:""})}withTextFontShape(t){return this.extend({fontShape:t,font:""})}sizingClasses(t){return t.size!==this.size?["sizing","reset-size"+t.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==tr.BASESIZE?["sizing","reset-size"+this.size,"size"+tr.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=x8(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}tr.BASESIZE=6;var Vl={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},b8={ex:!0,em:!0,mu:!0},gp=function(t){return typeof t!="string"&&(t=t.unit),t in Vl||t in b8||t==="ex"},pn=function(t,r){var s;if(t.unit in Vl)s=Vl[t.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(t.unit==="mu")s=r.fontMetrics().cssEmPerMu;else{var a;if(r.style.isTight()?a=r.havingStyle(r.style.text()):a=r,t.unit==="ex")s=a.fontMetrics().xHeight;else if(t.unit==="em")s=a.fontMetrics().quad;else throw new ce("Invalid unit: '"+t.unit+"'");a!==r&&(s*=a.sizeMultiplier/r.sizeMultiplier)}return Math.min(t.number*s,r.maxSize)},fe=function(t){return+t.toFixed(4)+"em"},Rr=function(t){return t.filter(r=>r).join(" ")},yp=function(t,r,s){if(this.classes=t||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=s||{},r){r.style.isTight()&&this.classes.push("mtight");var a=r.getColor();a&&(this.style.color=a)}},vp=function(t){var r=document.createElement(t);r.className=Rr(this.classes);for(var s in this.style)this.style.hasOwnProperty(s)&&(r.style[s]=this.style[s]);for(var a in this.attributes)this.attributes.hasOwnProperty(a)&&r.setAttribute(a,this.attributes[a]);for(var c=0;c<this.children.length;c++)r.appendChild(this.children[c].toNode());return r},$8=/[\s"'>/=\x00-\x1f]/,xp=function(t){var r="<"+t;this.classes.length&&(r+=' class="'+En(Rr(this.classes))+'"');var s="";for(var a in this.style)this.style.hasOwnProperty(a)&&(s+=uc(a)+":"+this.style[a]+";");s&&(r+=' style="'+En(s)+'"');for(var c in this.attributes)if(this.attributes.hasOwnProperty(c)){if($8.test(c))throw new ce("Invalid attribute name '"+c+"'");r+=" "+c+'="'+En(this.attributes[c])+'"'}r+=">";for(var d=0;d<this.children.length;d++)r+=this.children[d].toMarkup();return r+="</"+t+">",r};class Uo{constructor(t,r,s,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,yp.call(this,t,s,a),this.children=r||[]}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return vp.call(this,"span")}toMarkup(){return xp.call(this,"span")}}class fc{constructor(t,r,s,a){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,yp.call(this,r,a),this.children=s||[],this.setAttribute("href",t)}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return vp.call(this,"a")}toMarkup(){return xp.call(this,"a")}}class _8{constructor(t,r,s){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=t,this.classes=["mord"],this.style=s}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createElement("img");t.src=this.src,t.alt=this.alt,t.className="mord";for(var r in this.style)this.style.hasOwnProperty(r)&&(t.style[r]=this.style[r]);return t}toMarkup(){var t='<img src="'+En(this.src)+'"'+(' alt="'+En(this.alt)+'"'),r="";for(var s in this.style)this.style.hasOwnProperty(s)&&(r+=uc(s)+":"+this.style[s]+";");return r&&(t+=' style="'+En(r)+'"'),t+="'/>",t}}var k8={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class yt{constructor(t,r,s,a,c,d,f,h){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=t,this.height=r||0,this.depth=s||0,this.italic=a||0,this.skew=c||0,this.width=d||0,this.classes=f||[],this.style=h||{},this.maxFontSize=0;var v=a8(this.text.charCodeAt(0));v&&this.classes.push(v+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=k8[this.text])}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createTextNode(this.text),r=null;this.italic>0&&(r=document.createElement("span"),r.style.marginRight=fe(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=Rr(this.classes));for(var s in this.style)this.style.hasOwnProperty(s)&&(r=r||document.createElement("span"),r.style[s]=this.style[s]);return r?(r.appendChild(t),r):t}toMarkup(){var t=!1,r="<span";this.classes.length&&(t=!0,r+=' class="',r+=En(Rr(this.classes)),r+='"');var s="";this.italic>0&&(s+="margin-right:"+this.italic+"em;");for(var a in this.style)this.style.hasOwnProperty(a)&&(s+=uc(a)+":"+this.style[a]+";");s&&(t=!0,r+=' style="'+En(s)+'"');var c=En(this.text);return t?(r+=">",r+=c,r+="</span>",r):c}}class ir{constructor(t,r){this.children=void 0,this.attributes=void 0,this.children=t||[],this.attributes=r||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"svg");for(var s in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,s)&&r.setAttribute(s,this.attributes[s]);for(var a=0;a<this.children.length;a++)r.appendChild(this.children[a].toNode());return r}toMarkup(){var t='<svg xmlns="http://www.w3.org/2000/svg"';for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+En(this.attributes[r])+'"');t+=">";for(var s=0;s<this.children.length;s++)t+=this.children[s].toMarkup();return t+="</svg>",t}}class Dr{constructor(t,r){this.pathName=void 0,this.alternate=void 0,this.pathName=t,this.alternate=r}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",g1[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+En(this.alternate)+'"/>':'<path d="'+En(g1[this.pathName])+'"/>'}}class Kl{constructor(t){this.attributes=void 0,this.attributes=t||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"line");for(var s in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,s)&&r.setAttribute(s,this.attributes[s]);return r}toMarkup(){var t="<line";for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+En(this.attributes[r])+'"');return t+="/>",t}}function w1(i){if(i instanceof yt)return i;throw new Error("Expected symbolNode but got "+String(i)+".")}function z8(i){if(i instanceof Uo)return i;throw new Error("Expected span<HtmlDomNode> but got "+String(i)+".")}var S8={bin:1,close:1,inner:1,open:1,punct:1,rel:1},j8={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},tn={math:{},text:{}};function p(i,t,r,s,a,c){tn[i][a]={font:t,group:r,replace:s},c&&s&&(tn[i][s]=tn[i][a])}var g="math",oe="text",x="main",q="ams",ln="accent-token",$e="bin",Hn="close",Li="inner",Re="mathord",wn="op-token",at="open",ja="punct",A="rel",sr="spacing",B="textord";p(g,x,A,"≡","\\equiv",!0);p(g,x,A,"≺","\\prec",!0);p(g,x,A,"≻","\\succ",!0);p(g,x,A,"∼","\\sim",!0);p(g,x,A,"⊥","\\perp");p(g,x,A,"⪯","\\preceq",!0);p(g,x,A,"⪰","\\succeq",!0);p(g,x,A,"≃","\\simeq",!0);p(g,x,A,"∣","\\mid",!0);p(g,x,A,"≪","\\ll",!0);p(g,x,A,"≫","\\gg",!0);p(g,x,A,"≍","\\asymp",!0);p(g,x,A,"∥","\\parallel");p(g,x,A,"⋈","\\bowtie",!0);p(g,x,A,"⌣","\\smile",!0);p(g,x,A,"⊑","\\sqsubseteq",!0);p(g,x,A,"⊒","\\sqsupseteq",!0);p(g,x,A,"≐","\\doteq",!0);p(g,x,A,"⌢","\\frown",!0);p(g,x,A,"∋","\\ni",!0);p(g,x,A,"∝","\\propto",!0);p(g,x,A,"⊢","\\vdash",!0);p(g,x,A,"⊣","\\dashv",!0);p(g,x,A,"∋","\\owns");p(g,x,ja,".","\\ldotp");p(g,x,ja,"⋅","\\cdotp");p(g,x,B,"#","\\#");p(oe,x,B,"#","\\#");p(g,x,B,"&","\\&");p(oe,x,B,"&","\\&");p(g,x,B,"ℵ","\\aleph",!0);p(g,x,B,"∀","\\forall",!0);p(g,x,B,"ℏ","\\hbar",!0);p(g,x,B,"∃","\\exists",!0);p(g,x,B,"∇","\\nabla",!0);p(g,x,B,"♭","\\flat",!0);p(g,x,B,"ℓ","\\ell",!0);p(g,x,B,"♮","\\natural",!0);p(g,x,B,"♣","\\clubsuit",!0);p(g,x,B,"℘","\\wp",!0);p(g,x,B,"♯","\\sharp",!0);p(g,x,B,"♢","\\diamondsuit",!0);p(g,x,B,"ℜ","\\Re",!0);p(g,x,B,"♡","\\heartsuit",!0);p(g,x,B,"ℑ","\\Im",!0);p(g,x,B,"♠","\\spadesuit",!0);p(g,x,B,"§","\\S",!0);p(oe,x,B,"§","\\S");p(g,x,B,"¶","\\P",!0);p(oe,x,B,"¶","\\P");p(g,x,B,"†","\\dag");p(oe,x,B,"†","\\dag");p(oe,x,B,"†","\\textdagger");p(g,x,B,"‡","\\ddag");p(oe,x,B,"‡","\\ddag");p(oe,x,B,"‡","\\textdaggerdbl");p(g,x,Hn,"⎱","\\rmoustache",!0);p(g,x,at,"⎰","\\lmoustache",!0);p(g,x,Hn,"⟯","\\rgroup",!0);p(g,x,at,"⟮","\\lgroup",!0);p(g,x,$e,"∓","\\mp",!0);p(g,x,$e,"⊖","\\ominus",!0);p(g,x,$e,"⊎","\\uplus",!0);p(g,x,$e,"⊓","\\sqcap",!0);p(g,x,$e,"∗","\\ast");p(g,x,$e,"⊔","\\sqcup",!0);p(g,x,$e,"◯","\\bigcirc",!0);p(g,x,$e,"∙","\\bullet",!0);p(g,x,$e,"‡","\\ddagger");p(g,x,$e,"≀","\\wr",!0);p(g,x,$e,"⨿","\\amalg");p(g,x,$e,"&","\\And");p(g,x,A,"⟵","\\longleftarrow",!0);p(g,x,A,"⇐","\\Leftarrow",!0);p(g,x,A,"⟸","\\Longleftarrow",!0);p(g,x,A,"⟶","\\longrightarrow",!0);p(g,x,A,"⇒","\\Rightarrow",!0);p(g,x,A,"⟹","\\Longrightarrow",!0);p(g,x,A,"↔","\\leftrightarrow",!0);p(g,x,A,"⟷","\\longleftrightarrow",!0);p(g,x,A,"⇔","\\Leftrightarrow",!0);p(g,x,A,"⟺","\\Longleftrightarrow",!0);p(g,x,A,"↦","\\mapsto",!0);p(g,x,A,"⟼","\\longmapsto",!0);p(g,x,A,"↗","\\nearrow",!0);p(g,x,A,"↩","\\hookleftarrow",!0);p(g,x,A,"↪","\\hookrightarrow",!0);p(g,x,A,"↘","\\searrow",!0);p(g,x,A,"↼","\\leftharpoonup",!0);p(g,x,A,"⇀","\\rightharpoonup",!0);p(g,x,A,"↙","\\swarrow",!0);p(g,x,A,"↽","\\leftharpoondown",!0);p(g,x,A,"⇁","\\rightharpoondown",!0);p(g,x,A,"↖","\\nwarrow",!0);p(g,x,A,"⇌","\\rightleftharpoons",!0);p(g,q,A,"≮","\\nless",!0);p(g,q,A,"","\\@nleqslant");p(g,q,A,"","\\@nleqq");p(g,q,A,"⪇","\\lneq",!0);p(g,q,A,"≨","\\lneqq",!0);p(g,q,A,"","\\@lvertneqq");p(g,q,A,"⋦","\\lnsim",!0);p(g,q,A,"⪉","\\lnapprox",!0);p(g,q,A,"⊀","\\nprec",!0);p(g,q,A,"⋠","\\npreceq",!0);p(g,q,A,"⋨","\\precnsim",!0);p(g,q,A,"⪹","\\precnapprox",!0);p(g,q,A,"≁","\\nsim",!0);p(g,q,A,"","\\@nshortmid");p(g,q,A,"∤","\\nmid",!0);p(g,q,A,"⊬","\\nvdash",!0);p(g,q,A,"⊭","\\nvDash",!0);p(g,q,A,"⋪","\\ntriangleleft");p(g,q,A,"⋬","\\ntrianglelefteq",!0);p(g,q,A,"⊊","\\subsetneq",!0);p(g,q,A,"","\\@varsubsetneq");p(g,q,A,"⫋","\\subsetneqq",!0);p(g,q,A,"","\\@varsubsetneqq");p(g,q,A,"≯","\\ngtr",!0);p(g,q,A,"","\\@ngeqslant");p(g,q,A,"","\\@ngeqq");p(g,q,A,"⪈","\\gneq",!0);p(g,q,A,"≩","\\gneqq",!0);p(g,q,A,"","\\@gvertneqq");p(g,q,A,"⋧","\\gnsim",!0);p(g,q,A,"⪊","\\gnapprox",!0);p(g,q,A,"⊁","\\nsucc",!0);p(g,q,A,"⋡","\\nsucceq",!0);p(g,q,A,"⋩","\\succnsim",!0);p(g,q,A,"⪺","\\succnapprox",!0);p(g,q,A,"≆","\\ncong",!0);p(g,q,A,"","\\@nshortparallel");p(g,q,A,"∦","\\nparallel",!0);p(g,q,A,"⊯","\\nVDash",!0);p(g,q,A,"⋫","\\ntriangleright");p(g,q,A,"⋭","\\ntrianglerighteq",!0);p(g,q,A,"","\\@nsupseteqq");p(g,q,A,"⊋","\\supsetneq",!0);p(g,q,A,"","\\@varsupsetneq");p(g,q,A,"⫌","\\supsetneqq",!0);p(g,q,A,"","\\@varsupsetneqq");p(g,q,A,"⊮","\\nVdash",!0);p(g,q,A,"⪵","\\precneqq",!0);p(g,q,A,"⪶","\\succneqq",!0);p(g,q,A,"","\\@nsubseteqq");p(g,q,$e,"⊴","\\unlhd");p(g,q,$e,"⊵","\\unrhd");p(g,q,A,"↚","\\nleftarrow",!0);p(g,q,A,"↛","\\nrightarrow",!0);p(g,q,A,"⇍","\\nLeftarrow",!0);p(g,q,A,"⇏","\\nRightarrow",!0);p(g,q,A,"↮","\\nleftrightarrow",!0);p(g,q,A,"⇎","\\nLeftrightarrow",!0);p(g,q,A,"△","\\vartriangle");p(g,q,B,"ℏ","\\hslash");p(g,q,B,"▽","\\triangledown");p(g,q,B,"◊","\\lozenge");p(g,q,B,"Ⓢ","\\circledS");p(g,q,B,"®","\\circledR");p(oe,q,B,"®","\\circledR");p(g,q,B,"∡","\\measuredangle",!0);p(g,q,B,"∄","\\nexists");p(g,q,B,"℧","\\mho");p(g,q,B,"Ⅎ","\\Finv",!0);p(g,q,B,"⅁","\\Game",!0);p(g,q,B,"‵","\\backprime");p(g,q,B,"▲","\\blacktriangle");p(g,q,B,"▼","\\blacktriangledown");p(g,q,B,"■","\\blacksquare");p(g,q,B,"⧫","\\blacklozenge");p(g,q,B,"★","\\bigstar");p(g,q,B,"∢","\\sphericalangle",!0);p(g,q,B,"∁","\\complement",!0);p(g,q,B,"ð","\\eth",!0);p(oe,x,B,"ð","ð");p(g,q,B,"╱","\\diagup");p(g,q,B,"╲","\\diagdown");p(g,q,B,"□","\\square");p(g,q,B,"□","\\Box");p(g,q,B,"◊","\\Diamond");p(g,q,B,"¥","\\yen",!0);p(oe,q,B,"¥","\\yen",!0);p(g,q,B,"✓","\\checkmark",!0);p(oe,q,B,"✓","\\checkmark");p(g,q,B,"ℶ","\\beth",!0);p(g,q,B,"ℸ","\\daleth",!0);p(g,q,B,"ℷ","\\gimel",!0);p(g,q,B,"ϝ","\\digamma",!0);p(g,q,B,"ϰ","\\varkappa");p(g,q,at,"┌","\\@ulcorner",!0);p(g,q,Hn,"┐","\\@urcorner",!0);p(g,q,at,"└","\\@llcorner",!0);p(g,q,Hn,"┘","\\@lrcorner",!0);p(g,q,A,"≦","\\leqq",!0);p(g,q,A,"⩽","\\leqslant",!0);p(g,q,A,"⪕","\\eqslantless",!0);p(g,q,A,"≲","\\lesssim",!0);p(g,q,A,"⪅","\\lessapprox",!0);p(g,q,A,"≊","\\approxeq",!0);p(g,q,$e,"⋖","\\lessdot");p(g,q,A,"⋘","\\lll",!0);p(g,q,A,"≶","\\lessgtr",!0);p(g,q,A,"⋚","\\lesseqgtr",!0);p(g,q,A,"⪋","\\lesseqqgtr",!0);p(g,q,A,"≑","\\doteqdot");p(g,q,A,"≓","\\risingdotseq",!0);p(g,q,A,"≒","\\fallingdotseq",!0);p(g,q,A,"∽","\\backsim",!0);p(g,q,A,"⋍","\\backsimeq",!0);p(g,q,A,"⫅","\\subseteqq",!0);p(g,q,A,"⋐","\\Subset",!0);p(g,q,A,"⊏","\\sqsubset",!0);p(g,q,A,"≼","\\preccurlyeq",!0);p(g,q,A,"⋞","\\curlyeqprec",!0);p(g,q,A,"≾","\\precsim",!0);p(g,q,A,"⪷","\\precapprox",!0);p(g,q,A,"⊲","\\vartriangleleft");p(g,q,A,"⊴","\\trianglelefteq");p(g,q,A,"⊨","\\vDash",!0);p(g,q,A,"⊪","\\Vvdash",!0);p(g,q,A,"⌣","\\smallsmile");p(g,q,A,"⌢","\\smallfrown");p(g,q,A,"≏","\\bumpeq",!0);p(g,q,A,"≎","\\Bumpeq",!0);p(g,q,A,"≧","\\geqq",!0);p(g,q,A,"⩾","\\geqslant",!0);p(g,q,A,"⪖","\\eqslantgtr",!0);p(g,q,A,"≳","\\gtrsim",!0);p(g,q,A,"⪆","\\gtrapprox",!0);p(g,q,$e,"⋗","\\gtrdot");p(g,q,A,"⋙","\\ggg",!0);p(g,q,A,"≷","\\gtrless",!0);p(g,q,A,"⋛","\\gtreqless",!0);p(g,q,A,"⪌","\\gtreqqless",!0);p(g,q,A,"≖","\\eqcirc",!0);p(g,q,A,"≗","\\circeq",!0);p(g,q,A,"≜","\\triangleq",!0);p(g,q,A,"∼","\\thicksim");p(g,q,A,"≈","\\thickapprox");p(g,q,A,"⫆","\\supseteqq",!0);p(g,q,A,"⋑","\\Supset",!0);p(g,q,A,"⊐","\\sqsupset",!0);p(g,q,A,"≽","\\succcurlyeq",!0);p(g,q,A,"⋟","\\curlyeqsucc",!0);p(g,q,A,"≿","\\succsim",!0);p(g,q,A,"⪸","\\succapprox",!0);p(g,q,A,"⊳","\\vartriangleright");p(g,q,A,"⊵","\\trianglerighteq");p(g,q,A,"⊩","\\Vdash",!0);p(g,q,A,"∣","\\shortmid");p(g,q,A,"∥","\\shortparallel");p(g,q,A,"≬","\\between",!0);p(g,q,A,"⋔","\\pitchfork",!0);p(g,q,A,"∝","\\varpropto");p(g,q,A,"◀","\\blacktriangleleft");p(g,q,A,"∴","\\therefore",!0);p(g,q,A,"∍","\\backepsilon");p(g,q,A,"▶","\\blacktriangleright");p(g,q,A,"∵","\\because",!0);p(g,q,A,"⋘","\\llless");p(g,q,A,"⋙","\\gggtr");p(g,q,$e,"⊲","\\lhd");p(g,q,$e,"⊳","\\rhd");p(g,q,A,"≂","\\eqsim",!0);p(g,x,A,"⋈","\\Join");p(g,q,A,"≑","\\Doteq",!0);p(g,q,$e,"∔","\\dotplus",!0);p(g,q,$e,"∖","\\smallsetminus");p(g,q,$e,"⋒","\\Cap",!0);p(g,q,$e,"⋓","\\Cup",!0);p(g,q,$e,"⩞","\\doublebarwedge",!0);p(g,q,$e,"⊟","\\boxminus",!0);p(g,q,$e,"⊞","\\boxplus",!0);p(g,q,$e,"⋇","\\divideontimes",!0);p(g,q,$e,"⋉","\\ltimes",!0);p(g,q,$e,"⋊","\\rtimes",!0);p(g,q,$e,"⋋","\\leftthreetimes",!0);p(g,q,$e,"⋌","\\rightthreetimes",!0);p(g,q,$e,"⋏","\\curlywedge",!0);p(g,q,$e,"⋎","\\curlyvee",!0);p(g,q,$e,"⊝","\\circleddash",!0);p(g,q,$e,"⊛","\\circledast",!0);p(g,q,$e,"⋅","\\centerdot");p(g,q,$e,"⊺","\\intercal",!0);p(g,q,$e,"⋒","\\doublecap");p(g,q,$e,"⋓","\\doublecup");p(g,q,$e,"⊠","\\boxtimes",!0);p(g,q,A,"⇢","\\dashrightarrow",!0);p(g,q,A,"⇠","\\dashleftarrow",!0);p(g,q,A,"⇇","\\leftleftarrows",!0);p(g,q,A,"⇆","\\leftrightarrows",!0);p(g,q,A,"⇚","\\Lleftarrow",!0);p(g,q,A,"↞","\\twoheadleftarrow",!0);p(g,q,A,"↢","\\leftarrowtail",!0);p(g,q,A,"↫","\\looparrowleft",!0);p(g,q,A,"⇋","\\leftrightharpoons",!0);p(g,q,A,"↶","\\curvearrowleft",!0);p(g,q,A,"↺","\\circlearrowleft",!0);p(g,q,A,"↰","\\Lsh",!0);p(g,q,A,"⇈","\\upuparrows",!0);p(g,q,A,"↿","\\upharpoonleft",!0);p(g,q,A,"⇃","\\downharpoonleft",!0);p(g,x,A,"⊶","\\origof",!0);p(g,x,A,"⊷","\\imageof",!0);p(g,q,A,"⊸","\\multimap",!0);p(g,q,A,"↭","\\leftrightsquigarrow",!0);p(g,q,A,"⇉","\\rightrightarrows",!0);p(g,q,A,"⇄","\\rightleftarrows",!0);p(g,q,A,"↠","\\twoheadrightarrow",!0);p(g,q,A,"↣","\\rightarrowtail",!0);p(g,q,A,"↬","\\looparrowright",!0);p(g,q,A,"↷","\\curvearrowright",!0);p(g,q,A,"↻","\\circlearrowright",!0);p(g,q,A,"↱","\\Rsh",!0);p(g,q,A,"⇊","\\downdownarrows",!0);p(g,q,A,"↾","\\upharpoonright",!0);p(g,q,A,"⇂","\\downharpoonright",!0);p(g,q,A,"⇝","\\rightsquigarrow",!0);p(g,q,A,"⇝","\\leadsto");p(g,q,A,"⇛","\\Rrightarrow",!0);p(g,q,A,"↾","\\restriction");p(g,x,B,"‘","`");p(g,x,B,"$","\\$");p(oe,x,B,"$","\\$");p(oe,x,B,"$","\\textdollar");p(g,x,B,"%","\\%");p(oe,x,B,"%","\\%");p(g,x,B,"_","\\_");p(oe,x,B,"_","\\_");p(oe,x,B,"_","\\textunderscore");p(g,x,B,"∠","\\angle",!0);p(g,x,B,"∞","\\infty",!0);p(g,x,B,"′","\\prime");p(g,x,B,"△","\\triangle");p(g,x,B,"Γ","\\Gamma",!0);p(g,x,B,"Δ","\\Delta",!0);p(g,x,B,"Θ","\\Theta",!0);p(g,x,B,"Λ","\\Lambda",!0);p(g,x,B,"Ξ","\\Xi",!0);p(g,x,B,"Π","\\Pi",!0);p(g,x,B,"Σ","\\Sigma",!0);p(g,x,B,"Υ","\\Upsilon",!0);p(g,x,B,"Φ","\\Phi",!0);p(g,x,B,"Ψ","\\Psi",!0);p(g,x,B,"Ω","\\Omega",!0);p(g,x,B,"A","Α");p(g,x,B,"B","Β");p(g,x,B,"E","Ε");p(g,x,B,"Z","Ζ");p(g,x,B,"H","Η");p(g,x,B,"I","Ι");p(g,x,B,"K","Κ");p(g,x,B,"M","Μ");p(g,x,B,"N","Ν");p(g,x,B,"O","Ο");p(g,x,B,"P","Ρ");p(g,x,B,"T","Τ");p(g,x,B,"X","Χ");p(g,x,B,"¬","\\neg",!0);p(g,x,B,"¬","\\lnot");p(g,x,B,"⊤","\\top");p(g,x,B,"⊥","\\bot");p(g,x,B,"∅","\\emptyset");p(g,q,B,"∅","\\varnothing");p(g,x,Re,"α","\\alpha",!0);p(g,x,Re,"β","\\beta",!0);p(g,x,Re,"γ","\\gamma",!0);p(g,x,Re,"δ","\\delta",!0);p(g,x,Re,"ϵ","\\epsilon",!0);p(g,x,Re,"ζ","\\zeta",!0);p(g,x,Re,"η","\\eta",!0);p(g,x,Re,"θ","\\theta",!0);p(g,x,Re,"ι","\\iota",!0);p(g,x,Re,"κ","\\kappa",!0);p(g,x,Re,"λ","\\lambda",!0);p(g,x,Re,"μ","\\mu",!0);p(g,x,Re,"ν","\\nu",!0);p(g,x,Re,"ξ","\\xi",!0);p(g,x,Re,"ο","\\omicron",!0);p(g,x,Re,"π","\\pi",!0);p(g,x,Re,"ρ","\\rho",!0);p(g,x,Re,"σ","\\sigma",!0);p(g,x,Re,"τ","\\tau",!0);p(g,x,Re,"υ","\\upsilon",!0);p(g,x,Re,"ϕ","\\phi",!0);p(g,x,Re,"χ","\\chi",!0);p(g,x,Re,"ψ","\\psi",!0);p(g,x,Re,"ω","\\omega",!0);p(g,x,Re,"ε","\\varepsilon",!0);p(g,x,Re,"ϑ","\\vartheta",!0);p(g,x,Re,"ϖ","\\varpi",!0);p(g,x,Re,"ϱ","\\varrho",!0);p(g,x,Re,"ς","\\varsigma",!0);p(g,x,Re,"φ","\\varphi",!0);p(g,x,$e,"∗","*",!0);p(g,x,$e,"+","+");p(g,x,$e,"−","-",!0);p(g,x,$e,"⋅","\\cdot",!0);p(g,x,$e,"∘","\\circ",!0);p(g,x,$e,"÷","\\div",!0);p(g,x,$e,"±","\\pm",!0);p(g,x,$e,"×","\\times",!0);p(g,x,$e,"∩","\\cap",!0);p(g,x,$e,"∪","\\cup",!0);p(g,x,$e,"∖","\\setminus",!0);p(g,x,$e,"∧","\\land");p(g,x,$e,"∨","\\lor");p(g,x,$e,"∧","\\wedge",!0);p(g,x,$e,"∨","\\vee",!0);p(g,x,B,"√","\\surd");p(g,x,at,"⟨","\\langle",!0);p(g,x,at,"∣","\\lvert");p(g,x,at,"∥","\\lVert");p(g,x,Hn,"?","?");p(g,x,Hn,"!","!");p(g,x,Hn,"⟩","\\rangle",!0);p(g,x,Hn,"∣","\\rvert");p(g,x,Hn,"∥","\\rVert");p(g,x,A,"=","=");p(g,x,A,":",":");p(g,x,A,"≈","\\approx",!0);p(g,x,A,"≅","\\cong",!0);p(g,x,A,"≥","\\ge");p(g,x,A,"≥","\\geq",!0);p(g,x,A,"←","\\gets");p(g,x,A,">","\\gt",!0);p(g,x,A,"∈","\\in",!0);p(g,x,A,"","\\@not");p(g,x,A,"⊂","\\subset",!0);p(g,x,A,"⊃","\\supset",!0);p(g,x,A,"⊆","\\subseteq",!0);p(g,x,A,"⊇","\\supseteq",!0);p(g,q,A,"⊈","\\nsubseteq",!0);p(g,q,A,"⊉","\\nsupseteq",!0);p(g,x,A,"⊨","\\models");p(g,x,A,"←","\\leftarrow",!0);p(g,x,A,"≤","\\le");p(g,x,A,"≤","\\leq",!0);p(g,x,A,"<","\\lt",!0);p(g,x,A,"→","\\rightarrow",!0);p(g,x,A,"→","\\to");p(g,q,A,"≱","\\ngeq",!0);p(g,q,A,"≰","\\nleq",!0);p(g,x,sr," ","\\ ");p(g,x,sr," ","\\space");p(g,x,sr," ","\\nobreakspace");p(oe,x,sr," ","\\ ");p(oe,x,sr," "," ");p(oe,x,sr," ","\\space");p(oe,x,sr," ","\\nobreakspace");p(g,x,sr,null,"\\nobreak");p(g,x,sr,null,"\\allowbreak");p(g,x,ja,",",",");p(g,x,ja,";",";");p(g,q,$e,"⊼","\\barwedge",!0);p(g,q,$e,"⊻","\\veebar",!0);p(g,x,$e,"⊙","\\odot",!0);p(g,x,$e,"⊕","\\oplus",!0);p(g,x,$e,"⊗","\\otimes",!0);p(g,x,B,"∂","\\partial",!0);p(g,x,$e,"⊘","\\oslash",!0);p(g,q,$e,"⊚","\\circledcirc",!0);p(g,q,$e,"⊡","\\boxdot",!0);p(g,x,$e,"△","\\bigtriangleup");p(g,x,$e,"▽","\\bigtriangledown");p(g,x,$e,"†","\\dagger");p(g,x,$e,"⋄","\\diamond");p(g,x,$e,"⋆","\\star");p(g,x,$e,"◃","\\triangleleft");p(g,x,$e,"▹","\\triangleright");p(g,x,at,"{","\\{");p(oe,x,B,"{","\\{");p(oe,x,B,"{","\\textbraceleft");p(g,x,Hn,"}","\\}");p(oe,x,B,"}","\\}");p(oe,x,B,"}","\\textbraceright");p(g,x,at,"{","\\lbrace");p(g,x,Hn,"}","\\rbrace");p(g,x,at,"[","\\lbrack",!0);p(oe,x,B,"[","\\lbrack",!0);p(g,x,Hn,"]","\\rbrack",!0);p(oe,x,B,"]","\\rbrack",!0);p(g,x,at,"(","\\lparen",!0);p(g,x,Hn,")","\\rparen",!0);p(oe,x,B,"<","\\textless",!0);p(oe,x,B,">","\\textgreater",!0);p(g,x,at,"⌊","\\lfloor",!0);p(g,x,Hn,"⌋","\\rfloor",!0);p(g,x,at,"⌈","\\lceil",!0);p(g,x,Hn,"⌉","\\rceil",!0);p(g,x,B,"\\","\\backslash");p(g,x,B,"∣","|");p(g,x,B,"∣","\\vert");p(oe,x,B,"|","\\textbar",!0);p(g,x,B,"∥","\\|");p(g,x,B,"∥","\\Vert");p(oe,x,B,"∥","\\textbardbl");p(oe,x,B,"~","\\textasciitilde");p(oe,x,B,"\\","\\textbackslash");p(oe,x,B,"^","\\textasciicircum");p(g,x,A,"↑","\\uparrow",!0);p(g,x,A,"⇑","\\Uparrow",!0);p(g,x,A,"↓","\\downarrow",!0);p(g,x,A,"⇓","\\Downarrow",!0);p(g,x,A,"↕","\\updownarrow",!0);p(g,x,A,"⇕","\\Updownarrow",!0);p(g,x,wn,"∐","\\coprod");p(g,x,wn,"⋁","\\bigvee");p(g,x,wn,"⋀","\\bigwedge");p(g,x,wn,"⨄","\\biguplus");p(g,x,wn,"⋂","\\bigcap");p(g,x,wn,"⋃","\\bigcup");p(g,x,wn,"∫","\\int");p(g,x,wn,"∫","\\intop");p(g,x,wn,"∬","\\iint");p(g,x,wn,"∭","\\iiint");p(g,x,wn,"∏","\\prod");p(g,x,wn,"∑","\\sum");p(g,x,wn,"⨂","\\bigotimes");p(g,x,wn,"⨁","\\bigoplus");p(g,x,wn,"⨀","\\bigodot");p(g,x,wn,"∮","\\oint");p(g,x,wn,"∯","\\oiint");p(g,x,wn,"∰","\\oiiint");p(g,x,wn,"⨆","\\bigsqcup");p(g,x,wn,"∫","\\smallint");p(oe,x,Li,"…","\\textellipsis");p(g,x,Li,"…","\\mathellipsis");p(oe,x,Li,"…","\\ldots",!0);p(g,x,Li,"…","\\ldots",!0);p(g,x,Li,"⋯","\\@cdots",!0);p(g,x,Li,"⋱","\\ddots",!0);p(g,x,B,"⋮","\\varvdots");p(oe,x,B,"⋮","\\varvdots");p(g,x,ln,"ˊ","\\acute");p(g,x,ln,"ˋ","\\grave");p(g,x,ln,"¨","\\ddot");p(g,x,ln,"~","\\tilde");p(g,x,ln,"ˉ","\\bar");p(g,x,ln,"˘","\\breve");p(g,x,ln,"ˇ","\\check");p(g,x,ln,"^","\\hat");p(g,x,ln,"⃗","\\vec");p(g,x,ln,"˙","\\dot");p(g,x,ln,"˚","\\mathring");p(g,x,Re,"","\\@imath");p(g,x,Re,"","\\@jmath");p(g,x,B,"ı","ı");p(g,x,B,"ȷ","ȷ");p(oe,x,B,"ı","\\i",!0);p(oe,x,B,"ȷ","\\j",!0);p(oe,x,B,"ß","\\ss",!0);p(oe,x,B,"æ","\\ae",!0);p(oe,x,B,"œ","\\oe",!0);p(oe,x,B,"ø","\\o",!0);p(oe,x,B,"Æ","\\AE",!0);p(oe,x,B,"Œ","\\OE",!0);p(oe,x,B,"Ø","\\O",!0);p(oe,x,ln,"ˊ","\\'");p(oe,x,ln,"ˋ","\\`");p(oe,x,ln,"ˆ","\\^");p(oe,x,ln,"˜","\\~");p(oe,x,ln,"ˉ","\\=");p(oe,x,ln,"˘","\\u");p(oe,x,ln,"˙","\\.");p(oe,x,ln,"¸","\\c");p(oe,x,ln,"˚","\\r");p(oe,x,ln,"ˇ","\\v");p(oe,x,ln,"¨",'\\"');p(oe,x,ln,"˝","\\H");p(oe,x,ln,"◯","\\textcircled");var wp={"--":!0,"---":!0,"``":!0,"''":!0};p(oe,x,B,"–","--",!0);p(oe,x,B,"–","\\textendash");p(oe,x,B,"—","---",!0);p(oe,x,B,"—","\\textemdash");p(oe,x,B,"‘","`",!0);p(oe,x,B,"‘","\\textquoteleft");p(oe,x,B,"’","'",!0);p(oe,x,B,"’","\\textquoteright");p(oe,x,B,"“","``",!0);p(oe,x,B,"“","\\textquotedblleft");p(oe,x,B,"”","''",!0);p(oe,x,B,"”","\\textquotedblright");p(g,x,B,"°","\\degree",!0);p(oe,x,B,"°","\\degree");p(oe,x,B,"°","\\textdegree",!0);p(g,x,B,"£","\\pounds");p(g,x,B,"£","\\mathsterling",!0);p(oe,x,B,"£","\\pounds");p(oe,x,B,"£","\\textsterling",!0);p(g,q,B,"✠","\\maltese");p(oe,q,B,"✠","\\maltese");var b1='0123456789/@."';for(var Tl=0;Tl<b1.length;Tl++){var $1=b1.charAt(Tl);p(g,x,B,$1,$1)}var _1='0123456789!@*()-=+";:?/.,';for(var Al=0;Al<_1.length;Al++){var k1=_1.charAt(Al);p(oe,x,B,k1,k1)}var _a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var Ml=0;Ml<_a.length;Ml++){var la=_a.charAt(Ml);p(g,x,Re,la,la),p(oe,x,B,la,la)}p(g,q,B,"C","ℂ");p(oe,q,B,"C","ℂ");p(g,q,B,"H","ℍ");p(oe,q,B,"H","ℍ");p(g,q,B,"N","ℕ");p(oe,q,B,"N","ℕ");p(g,q,B,"P","ℙ");p(oe,q,B,"P","ℙ");p(g,q,B,"Q","ℚ");p(oe,q,B,"Q","ℚ");p(g,q,B,"R","ℝ");p(oe,q,B,"R","ℝ");p(g,q,B,"Z","ℤ");p(oe,q,B,"Z","ℤ");p(g,x,Re,"h","ℎ");p(oe,x,Re,"h","ℎ");var Ee="";for(var Fn=0;Fn<_a.length;Fn++){var hn=_a.charAt(Fn);Ee=String.fromCharCode(55349,56320+Fn),p(g,x,Re,hn,Ee),p(oe,x,B,hn,Ee),Ee=String.fromCharCode(55349,56372+Fn),p(g,x,Re,hn,Ee),p(oe,x,B,hn,Ee),Ee=String.fromCharCode(55349,56424+Fn),p(g,x,Re,hn,Ee),p(oe,x,B,hn,Ee),Ee=String.fromCharCode(55349,56580+Fn),p(g,x,Re,hn,Ee),p(oe,x,B,hn,Ee),Ee=String.fromCharCode(55349,56684+Fn),p(g,x,Re,hn,Ee),p(oe,x,B,hn,Ee),Ee=String.fromCharCode(55349,56736+Fn),p(g,x,Re,hn,Ee),p(oe,x,B,hn,Ee),Ee=String.fromCharCode(55349,56788+Fn),p(g,x,Re,hn,Ee),p(oe,x,B,hn,Ee),Ee=String.fromCharCode(55349,56840+Fn),p(g,x,Re,hn,Ee),p(oe,x,B,hn,Ee),Ee=String.fromCharCode(55349,56944+Fn),p(g,x,Re,hn,Ee),p(oe,x,B,hn,Ee),Fn<26&&(Ee=String.fromCharCode(55349,56632+Fn),p(g,x,Re,hn,Ee),p(oe,x,B,hn,Ee),Ee=String.fromCharCode(55349,56476+Fn),p(g,x,Re,hn,Ee),p(oe,x,B,hn,Ee))}Ee="𝕜";p(g,x,Re,"k",Ee);p(oe,x,B,"k",Ee);for(var ti=0;ti<10;ti++){var Pr=ti.toString();Ee=String.fromCharCode(55349,57294+ti),p(g,x,Re,Pr,Ee),p(oe,x,B,Pr,Ee),Ee=String.fromCharCode(55349,57314+ti),p(g,x,Re,Pr,Ee),p(oe,x,B,Pr,Ee),Ee=String.fromCharCode(55349,57324+ti),p(g,x,Re,Pr,Ee),p(oe,x,B,Pr,Ee),Ee=String.fromCharCode(55349,57334+ti),p(g,x,Re,Pr,Ee),p(oe,x,B,Pr,Ee)}var Zl="ÐÞþ";for(var Pl=0;Pl<Zl.length;Pl++){var ca=Zl.charAt(Pl);p(g,x,Re,ca,ca),p(oe,x,B,ca,ca)}var ua=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],z1=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],q8=function(t,r){var s=t.charCodeAt(0),a=t.charCodeAt(1),c=(s-55296)*1024+(a-56320)+65536,d=r==="math"?0:1;if(119808<=c&&c<120484){var f=Math.floor((c-119808)/26);return[ua[f][2],ua[f][d]]}else if(120782<=c&&c<=120831){var h=Math.floor((c-120782)/10);return[z1[h][2],z1[h][d]]}else{if(c===120485||c===120486)return[ua[0][2],ua[0][d]];if(120486<c&&c<120782)return["",""];throw new ce("Unsupported character: "+t)}},qa=function(t,r,s){return tn[s][t]&&tn[s][t].replace&&(t=tn[s][t].replace),{value:t,metrics:mc(t,r,s)}},Ln=function(t,r,s,a,c){var d=qa(t,r,s),f=d.metrics;t=d.value;var h;if(f){var v=f.italic;(s==="text"||a&&a.font==="mathit")&&(v=0),h=new yt(t,f.height,f.depth,v,f.skew,f.width,c)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+t+"' in style '"+r+"' and mode '"+s+"'")),h=new yt(t,0,0,0,0,0,c);if(a){h.maxFontSize=a.sizeMultiplier,a.style.isTight()&&h.classes.push("mtight");var w=a.getColor();w&&(h.style.color=w)}return h},hc=function(t,r,s,a){return a===void 0&&(a=[]),s.font==="boldsymbol"&&qa(t,"Main-Bold",r).metrics?Ln(t,"Main-Bold",r,s,a.concat(["mathbf"])):t==="\\"||tn[r][t].font==="main"?Ln(t,"Main-Regular",r,s,a):Ln(t,"AMS-Regular",r,s,a.concat(["amsrm"]))},T8=function(t,r,s,a,c){return c!=="textord"&&qa(t,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},Ta=function(t,r,s){var a=t.mode,c=t.text,d=["mord"],f=a==="math"||a==="text"&&r.font,h=f?r.font:r.fontFamily,v="",w="";if(c.charCodeAt(0)===55349&&([v,w]=q8(c,a)),v.length>0)return Ln(c,v,a,r,d.concat(w));if(h){var $,k;if(h==="boldsymbol"){var z=T8(c,a,r,d,s);$=z.fontName,k=[z.fontClass]}else f?($=Ql[h].fontName,k=[h]):($=da(h,r.fontWeight,r.fontShape),k=[h,r.fontWeight,r.fontShape]);if(qa(c,$,a).metrics)return Ln(c,$,a,r,d.concat(k));if(wp.hasOwnProperty(c)&&$.slice(0,10)==="Typewriter"){for(var T=[],S=0;S<c.length;S++)T.push(Ln(c[S],$,a,r,d.concat(k)));return ar(T)}}if(s==="mathord")return Ln(c,"Math-Italic",a,r,d.concat(["mathnormal"]));if(s==="textord"){var N=tn[a][c]&&tn[a][c].font;if(N==="ams"){var M=da("amsrm",r.fontWeight,r.fontShape);return Ln(c,M,a,r,d.concat("amsrm",r.fontWeight,r.fontShape))}else if(N==="main"||!N){var V=da("textrm",r.fontWeight,r.fontShape);return Ln(c,V,a,r,d.concat(r.fontWeight,r.fontShape))}else{var O=da(N,r.fontWeight,r.fontShape);return Ln(c,O,a,r,d.concat(O,r.fontWeight,r.fontShape))}}else throw new Error("unexpected type: "+s+" in makeOrd")},A8=(i,t)=>{if(Rr(i.classes)!==Rr(t.classes)||i.skew!==t.skew||i.maxFontSize!==t.maxFontSize||i.italic!==0&&i.hasClass("mathnormal"))return!1;if(i.classes.length===1){var r=i.classes[0];if(r==="mbin"||r==="mord")return!1}for(var s in i.style)if(i.style.hasOwnProperty(s)&&i.style[s]!==t.style[s])return!1;for(var a in t.style)if(t.style.hasOwnProperty(a)&&i.style[a]!==t.style[a])return!1;return!0},bp=i=>{for(var t=0;t<i.length-1;t++){var r=i[t],s=i[t+1];r instanceof yt&&s instanceof yt&&A8(r,s)&&(r.text+=s.text,r.height=Math.max(r.height,s.height),r.depth=Math.max(r.depth,s.depth),r.italic=s.italic,i.splice(t+1,1),t--)}return i},gc=function(t){for(var r=0,s=0,a=0,c=0;c<t.children.length;c++){var d=t.children[c];d.height>r&&(r=d.height),d.depth>s&&(s=d.depth),d.maxFontSize>a&&(a=d.maxFontSize)}t.height=r,t.depth=s,t.maxFontSize=a},ae=function(t,r,s,a){var c=new Uo(t,r,s,a);return gc(c),c},Er=(i,t,r,s)=>new Uo(i,t,r,s),Ni=function(t,r,s){var a=ae([t],[],r);return a.height=Math.max(s||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),a.style.borderBottomWidth=fe(a.height),a.maxFontSize=1,a},M8=function(t,r,s,a){var c=new fc(t,r,s,a);return gc(c),c},ar=function(t){var r=new Go(t);return gc(r),r},Ii=function(t,r){return t instanceof Go?ae([],[t],r):t},P8=function(t){if(t.positionType==="individualShift"){for(var r=t.children,s=[r[0]],a=-r[0].shift-r[0].elem.depth,c=a,d=1;d<r.length;d++){var f=-r[d].shift-c-r[d].elem.depth,h=f-(r[d-1].elem.height+r[d-1].elem.depth);c=c+f,s.push({type:"kern",size:h}),s.push(r[d])}return{children:s,depth:a}}var v;if(t.positionType==="top"){for(var w=t.positionData,$=0;$<t.children.length;$++){var k=t.children[$];w-=k.type==="kern"?k.size:k.elem.height+k.elem.depth}v=w}else if(t.positionType==="bottom")v=-t.positionData;else{var z=t.children[0];if(z.type!=="elem")throw new Error('First child must have type "elem".');if(t.positionType==="shift")v=-z.elem.depth-t.positionData;else if(t.positionType==="firstBaseline")v=-z.elem.depth;else throw new Error("Invalid positionType "+t.positionType+".")}return{children:t.children,depth:v}},Qe=function(t,r){for(var{children:s,depth:a}=P8(t),c=0,d=0;d<s.length;d++){var f=s[d];if(f.type==="elem"){var h=f.elem;c=Math.max(c,h.maxFontSize,h.height)}}c+=2;var v=ae(["pstrut"],[]);v.style.height=fe(c);for(var w=[],$=a,k=a,z=a,T=0;T<s.length;T++){var S=s[T];if(S.type==="kern")z+=S.size;else{var N=S.elem,M=S.wrapperClasses||[],V=S.wrapperStyle||{},O=ae(M,[v,N],void 0,V);O.style.top=fe(-c-z-N.depth),S.marginLeft&&(O.style.marginLeft=S.marginLeft),S.marginRight&&(O.style.marginRight=S.marginRight),w.push(O),z+=N.height+N.depth}$=Math.min($,z),k=Math.max(k,z)}var D=ae(["vlist"],w);D.style.height=fe(k);var E;if($<0){var W=ae([],[]),L=ae(["vlist"],[W]);L.style.height=fe(-$);var Q=ae(["vlist-s"],[new yt("​")]);E=[ae(["vlist-r"],[D,Q]),ae(["vlist-r"],[L])]}else E=[ae(["vlist-r"],[D])];var X=ae(["vlist-t"],E);return E.length===2&&X.classes.push("vlist-t2"),X.height=k,X.depth=-$,X},$p=(i,t)=>{var r=ae(["mspace"],[],t),s=pn(i,t);return r.style.marginRight=fe(s),r},da=function(t,r,s){var a="";switch(t){case"amsrm":a="AMS";break;case"textrm":a="Main";break;case"textsf":a="SansSerif";break;case"texttt":a="Typewriter";break;default:a=t}var c;return r==="textbf"&&s==="textit"?c="BoldItalic":r==="textbf"?c="Bold":r==="textit"?c="Italic":c="Regular",a+"-"+c},Ql={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},_p={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},kp=function(t,r){var[s,a,c]=_p[t],d=new Dr(s),f=new ir([d],{width:fe(a),height:fe(c),style:"width:"+fe(a),viewBox:"0 0 "+1e3*a+" "+1e3*c,preserveAspectRatio:"xMinYMin"}),h=Er(["overlay"],[f],r);return h.height=c,h.style.height=fe(c),h.style.width=fe(a),h},dn={number:3,unit:"mu"},ri={number:4,unit:"mu"},nr={number:5,unit:"mu"},C8={mord:{mop:dn,mbin:ri,mrel:nr,minner:dn},mop:{mord:dn,mop:dn,mrel:nr,minner:dn},mbin:{mord:ri,mop:ri,mopen:ri,minner:ri},mrel:{mord:nr,mop:nr,mopen:nr,minner:nr},mopen:{},mclose:{mop:dn,mbin:ri,mrel:nr,minner:dn},mpunct:{mord:dn,mop:dn,mrel:nr,mopen:dn,mclose:dn,mpunct:dn,minner:dn},minner:{mord:dn,mop:dn,mbin:ri,mrel:nr,mopen:dn,mpunct:dn,minner:dn}},R8={mord:{mop:dn},mop:{mord:dn,mop:dn},mbin:{},mrel:{},mopen:{},mclose:{mop:dn},mpunct:{},minner:{mop:dn}},zp={},ka={},za={};function xe(i){for(var{type:t,names:r,props:s,handler:a,htmlBuilder:c,mathmlBuilder:d}=i,f={type:t,numArgs:s.numArgs,argTypes:s.argTypes,allowedInArgument:!!s.allowedInArgument,allowedInText:!!s.allowedInText,allowedInMath:s.allowedInMath===void 0?!0:s.allowedInMath,numOptionalArgs:s.numOptionalArgs||0,infix:!!s.infix,primitive:!!s.primitive,handler:a},h=0;h<r.length;++h)zp[r[h]]=f;t&&(c&&(ka[t]=c),d&&(za[t]=d))}function oi(i){var{type:t,htmlBuilder:r,mathmlBuilder:s}=i;xe({type:t,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:s})}var Sa=function(t){return t.type==="ordgroup"&&t.body.length===1?t.body[0]:t},yn=function(t){return t.type==="ordgroup"?t.body:[t]},D8=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),E8=new Set(["rightmost","mrel","mclose","mpunct"]),B8={display:Ie.DISPLAY,text:Ie.TEXT,script:Ie.SCRIPT,scriptscript:Ie.SCRIPTSCRIPT},N8={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},kn=function(t,r,s,a){a===void 0&&(a=[null,null]);for(var c=[],d=0;d<t.length;d++){var f=Ke(t[d],r);if(f instanceof Go){var h=f.children;c.push(...h)}else c.push(f)}if(bp(c),!s)return c;var v=r;if(t.length===1){var w=t[0];w.type==="sizing"?v=r.havingSize(w.size):w.type==="styling"&&(v=r.havingStyle(B8[w.style]))}var $=ae([a[0]||"leftmost"],[],r),k=ae([a[1]||"rightmost"],[],r),z=s==="root";return S1(c,(T,S)=>{var N=S.classes[0],M=T.classes[0];N==="mbin"&&E8.has(M)?S.classes[0]="mord":M==="mbin"&&D8.has(N)&&(T.classes[0]="mord")},{node:$},k,z),S1(c,(T,S)=>{var N=Yl(S),M=Yl(T),V=N&&M?T.hasClass("mtight")?R8[N][M]:C8[N][M]:null;if(V)return $p(V,v)},{node:$},k,z),c},S1=function i(t,r,s,a,c){a&&t.push(a);for(var d=0;d<t.length;d++){var f=t[d],h=Sp(f);if(h){i(h.children,r,s,null,c);continue}var v=!f.hasClass("mspace");if(v){var w=r(f,s.node);w&&(s.insertAfter?s.insertAfter(w):(t.unshift(w),d++))}v?s.node=f:c&&f.hasClass("newline")&&(s.node=ae(["leftmost"])),s.insertAfter=($=>k=>{t.splice($+1,0,k),d++})(d)}a&&t.pop()},Sp=function(t){return t instanceof Go||t instanceof fc||t instanceof Uo&&t.hasClass("enclosing")?t:null},I8=function i(t,r){var s=Sp(t);if(s){var a=s.children;if(a.length){if(r==="right")return i(a[a.length-1],"right");if(r==="left")return i(a[0],"left")}}return t},Yl=function(t,r){return t?(r&&(t=I8(t,r)),N8[t.classes[0]]||null):null},Ho=function(t,r){var s=["nulldelimiter"].concat(t.baseSizingClasses());return ae(r.concat(s))},Ke=function(t,r,s){if(!t)return ae();if(ka[t.type]){var a=ka[t.type](t,r);if(s&&r.size!==s.size){a=ae(r.sizingClasses(s),[a],r);var c=r.sizeMultiplier/s.sizeMultiplier;a.height*=c,a.depth*=c}return a}else throw new ce("Got group of unknown type: '"+t.type+"'")};function pa(i,t){var r=ae(["base"],i,t),s=ae(["strut"]);return s.style.height=fe(r.height+r.depth),r.depth&&(s.style.verticalAlign=fe(-r.depth)),r.children.unshift(s),r}function Xl(i,t){var r=null;i.length===1&&i[0].type==="tag"&&(r=i[0].tag,i=i[0].body);var s=kn(i,t,"root"),a;s.length===2&&s[1].hasClass("tag")&&(a=s.pop());for(var c=[],d=[],f=0;f<s.length;f++)if(d.push(s[f]),s[f].hasClass("mbin")||s[f].hasClass("mrel")||s[f].hasClass("allowbreak")){for(var h=!1;f<s.length-1&&s[f+1].hasClass("mspace")&&!s[f+1].hasClass("newline");)f++,d.push(s[f]),s[f].hasClass("nobreak")&&(h=!0);h||(c.push(pa(d,t)),d=[])}else s[f].hasClass("newline")&&(d.pop(),d.length>0&&(c.push(pa(d,t)),d=[]),c.push(s[f]));d.length>0&&c.push(pa(d,t));var v;r?(v=pa(kn(r,t,!0)),v.classes=["tag"],c.push(v)):a&&c.push(a);var w=ae(["katex-html"],c);if(w.setAttribute("aria-hidden","true"),v){var $=v.children[0];$.style.height=fe(w.height+w.depth),w.depth&&($.style.verticalAlign=fe(-w.depth))}return w}function jp(i){return new Go(i)}class ue{constructor(t,r,s){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=t,this.attributes={},this.children=r||[],this.classes=s||[]}setAttribute(t,r){this.attributes[t]=r}getAttribute(t){return this.attributes[t]}toNode(){var t=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&t.setAttribute(r,this.attributes[r]);this.classes.length>0&&(t.className=Rr(this.classes));for(var s=0;s<this.children.length;s++)if(this.children[s]instanceof xn&&this.children[s+1]instanceof xn){for(var a=this.children[s].toText()+this.children[++s].toText();this.children[s+1]instanceof xn;)a+=this.children[++s].toText();t.appendChild(new xn(a).toNode())}else t.appendChild(this.children[s].toNode());return t}toMarkup(){var t="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="',t+=En(this.attributes[r]),t+='"');this.classes.length>0&&(t+=' class ="'+En(Rr(this.classes))+'"'),t+=">";for(var s=0;s<this.children.length;s++)t+=this.children[s].toMarkup();return t+="</"+this.type+">",t}toText(){return this.children.map(t=>t.toText()).join("")}}class xn{constructor(t){this.text=void 0,this.text=t}toNode(){return document.createTextNode(this.text)}toMarkup(){return En(this.toText())}toText(){return this.text}}class qp{constructor(t){this.width=void 0,this.character=void 0,this.width=t,t>=.05555&&t<=.05556?this.character=" ":t>=.1666&&t<=.1667?this.character=" ":t>=.2222&&t<=.2223?this.character=" ":t>=.2777&&t<=.2778?this.character="  ":t>=-.05556&&t<=-.05555?this.character=" ⁣":t>=-.1667&&t<=-.1666?this.character=" ⁣":t>=-.2223&&t<=-.2222?this.character=" ⁣":t>=-.2778&&t<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var t=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return t.setAttribute("width",fe(this.width)),t}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+fe(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var F8=new Set(["\\imath","\\jmath"]),L8=new Set(["mrow","mtable"]),vt=function(t,r,s){return tn[r][t]&&tn[r][t].replace&&t.charCodeAt(0)!==55349&&!(wp.hasOwnProperty(t)&&s&&(s.fontFamily&&s.fontFamily.slice(4,6)==="tt"||s.font&&s.font.slice(4,6)==="tt"))&&(t=tn[r][t].replace),new xn(t)},yc=function(t){return t.length===1?t[0]:new ue("mrow",t)},vc=function(t,r){if(r.fontFamily==="texttt")return"monospace";if(r.fontFamily==="textsf")return r.fontShape==="textit"&&r.fontWeight==="textbf"?"sans-serif-bold-italic":r.fontShape==="textit"?"sans-serif-italic":r.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(r.fontShape==="textit"&&r.fontWeight==="textbf")return"bold-italic";if(r.fontShape==="textit")return"italic";if(r.fontWeight==="textbf")return"bold";var s=r.font;if(!s||s==="mathnormal")return null;var a=t.mode;if(s==="mathit")return"italic";if(s==="boldsymbol")return t.type==="textord"?"bold":"bold-italic";if(s==="mathbf")return"bold";if(s==="mathbb")return"double-struck";if(s==="mathsfit")return"sans-serif-italic";if(s==="mathfrak")return"fraktur";if(s==="mathscr"||s==="mathcal")return"script";if(s==="mathsf")return"sans-serif";if(s==="mathtt")return"monospace";var c=t.text;if(F8.has(c))return null;tn[a][c]&&tn[a][c].replace&&(c=tn[a][c].replace);var d=Ql[s].fontName;return mc(c,d,a)?Ql[s].variant:null};function Cl(i){if(!i)return!1;if(i.type==="mi"&&i.children.length===1){var t=i.children[0];return t instanceof xn&&t.text==="."}else if(i.type==="mo"&&i.children.length===1&&i.getAttribute("separator")==="true"&&i.getAttribute("lspace")==="0em"&&i.getAttribute("rspace")==="0em"){var r=i.children[0];return r instanceof xn&&r.text===","}else return!1}var Jn=function(t,r,s){if(t.length===1){var a=Je(t[0],r);return s&&a instanceof ue&&a.type==="mo"&&(a.setAttribute("lspace","0em"),a.setAttribute("rspace","0em")),[a]}for(var c=[],d,f=0;f<t.length;f++){var h=Je(t[f],r);if(h instanceof ue&&d instanceof ue){if(h.type==="mtext"&&d.type==="mtext"&&h.getAttribute("mathvariant")===d.getAttribute("mathvariant")){d.children.push(...h.children);continue}else if(h.type==="mn"&&d.type==="mn"){d.children.push(...h.children);continue}else if(Cl(h)&&d.type==="mn"){d.children.push(...h.children);continue}else if(h.type==="mn"&&Cl(d))h.children=[...d.children,...h.children],c.pop();else if((h.type==="msup"||h.type==="msub")&&h.children.length>=1&&(d.type==="mn"||Cl(d))){var v=h.children[0];v instanceof ue&&v.type==="mn"&&(v.children=[...d.children,...v.children],c.pop())}else if(d.type==="mi"&&d.children.length===1){var w=d.children[0];if(w instanceof xn&&w.text==="̸"&&(h.type==="mo"||h.type==="mi"||h.type==="mn")){var $=h.children[0];$ instanceof xn&&$.text.length>0&&($.text=$.text.slice(0,1)+"̸"+$.text.slice(1),c.pop())}}}c.push(h),d=h}return c},Br=function(t,r,s){return yc(Jn(t,r,s))},Je=function(t,r){if(!t)return new ue("mrow");if(za[t.type]){var s=za[t.type](t,r);return s}else throw new ce("Got group of unknown type: '"+t.type+"'")};function j1(i,t,r,s,a){var c=Jn(i,r),d;c.length===1&&c[0]instanceof ue&&L8.has(c[0].type)?d=c[0]:d=new ue("mrow",c);var f=new ue("annotation",[new xn(t)]);f.setAttribute("encoding","application/x-tex");var h=new ue("semantics",[d,f]),v=new ue("math",[h]);v.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),s&&v.setAttribute("display","block");var w=a?"katex":"katex-mathml";return ae([w],[v])}var Tp=function(t){return new tr({style:t.displayMode?Ie.DISPLAY:Ie.TEXT,maxSize:t.maxSize,minRuleThickness:t.minRuleThickness})},Ap=function(t,r){if(r.displayMode){var s=["katex-display"];r.leqno&&s.push("leqno"),r.fleqn&&s.push("fleqn"),t=ae(s,[t])}return t},O8=function(t,r,s){var a=Tp(s),c;if(s.output==="mathml")return j1(t,r,a,s.displayMode,!0);if(s.output==="html"){var d=Xl(t,a);c=ae(["katex"],[d])}else{var f=j1(t,r,a,s.displayMode,!1),h=Xl(t,a);c=ae(["katex"],[f,h])}return Ap(c,s)},H8=function(t,r,s){var a=Tp(s),c=Xl(t,a),d=ae(["katex"],[c]);return Ap(d,s)},W8={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},Aa=function(t){var r=new ue("mo",[new xn(W8[t.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},G8={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},U8=new Set(["widehat","widecheck","widetilde","utilde"]),Ma=function(t,r){function s(){var f=4e5,h=t.label.slice(1);if(U8.has(h)){var v=t,w=v.base.type==="ordgroup"?v.base.body.length:1,$,k,z;if(w>5)h==="widehat"||h==="widecheck"?($=420,f=2364,z=.42,k=h+"4"):($=312,f=2340,z=.34,k="tilde4");else{var T=[1,1,2,2,3,3][w];h==="widehat"||h==="widecheck"?(f=[0,1062,2364,2364,2364][T],$=[0,239,300,360,420][T],z=[0,.24,.3,.3,.36,.42][T],k=h+T):(f=[0,600,1033,2339,2340][T],$=[0,260,286,306,312][T],z=[0,.26,.286,.3,.306,.34][T],k="tilde"+T)}var S=new Dr(k),N=new ir([S],{width:"100%",height:fe(z),viewBox:"0 0 "+f+" "+$,preserveAspectRatio:"none"});return{span:Er([],[N],r),minWidth:0,height:z}}else{var M=[],V=G8[h],[O,D,E]=V,W=E/1e3,L=O.length,Q,X;if(L===1){var Y=V[3];Q=["hide-tail"],X=[Y]}else if(L===2)Q=["halfarrow-left","halfarrow-right"],X=["xMinYMin","xMaxYMin"];else if(L===3)Q=["brace-left","brace-center","brace-right"],X=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+L+" children.");for(var re=0;re<L;re++){var J=new Dr(O[re]),ne=new ir([J],{width:"400em",height:fe(W),viewBox:"0 0 "+f+" "+E,preserveAspectRatio:X[re]+" slice"}),ge=Er([Q[re]],[ne],r);if(L===1)return{span:ge,minWidth:D,height:W};ge.style.height=fe(W),M.push(ge)}return{span:ae(["stretchy"],M,r),minWidth:D,height:W}}}var{span:a,minWidth:c,height:d}=s();return a.height=d,a.style.height=fe(d),c>0&&(a.style.minWidth=fe(c)),a},V8=function(t,r,s,a,c){var d,f=t.height+t.depth+s+a;if(/fbox|color|angl/.test(r)){if(d=ae(["stretchy",r],[],c),r==="fbox"){var h=c.color&&c.getColor();h&&(d.style.borderColor=h)}}else{var v=[];/^[bx]cancel$/.test(r)&&v.push(new Kl({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&v.push(new Kl({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var w=new ir(v,{width:"100%",height:fe(f)});d=Er([],[w],c)}return d.height=f,d.style.height=fe(f),d};function Le(i,t){if(!i||i.type!==t)throw new Error("Expected node of type "+t+", but got "+(i?"node of type "+i.type:String(i)));return i}function xc(i){var t=Pa(i);if(!t)throw new Error("Expected node of symbol group type, but got "+(i?"node of type "+i.type:String(i)));return t}function Pa(i){return i&&(i.type==="atom"||j8.hasOwnProperty(i.type))?i:null}var wc=(i,t)=>{var r,s,a;i&&i.type==="supsub"?(s=Le(i.base,"accent"),r=s.base,i.base=r,a=z8(Ke(i,t)),i.base=s):(s=Le(i,"accent"),r=s.base);var c=Ke(r,t.havingCrampedStyle()),d=s.isShifty&&or(r),f=0;if(d){var h=No(r),v=Ke(h,t.havingCrampedStyle());f=w1(v).skew}var w=s.label==="\\c",$=w?c.height+c.depth:Math.min(c.height,t.fontMetrics().xHeight),k;if(s.isStretchy)k=Ma(s,t),k=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:c},{type:"elem",elem:k,wrapperClasses:["svg-align"],wrapperStyle:f>0?{width:"calc(100% - "+fe(2*f)+")",marginLeft:fe(2*f)}:void 0}]});else{var z,T;s.label==="\\vec"?(z=kp("vec",t),T=_p.vec[1]):(z=Ta({mode:s.mode,text:s.label},t,"textord"),z=w1(z),z.italic=0,T=z.width,w&&($+=z.depth)),k=ae(["accent-body"],[z]);var S=s.label==="\\textcircled";S&&(k.classes.push("accent-full"),$=c.height);var N=f;S||(N-=T/2),k.style.left=fe(N),s.label==="\\textcircled"&&(k.style.top=".2em"),k=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:c},{type:"kern",size:-$},{type:"elem",elem:k}]})}var M=ae(["mord","accent"],[k],t);return a?(a.children[0]=M,a.height=Math.max(M.height,a.height),a.classes[0]="mord",a):M},Mp=(i,t)=>{var r=i.isStretchy?Aa(i.label):new ue("mo",[vt(i.label,i.mode)]),s=new ue("mover",[Je(i.base,t),r]);return s.setAttribute("accent","true"),s},K8=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(i=>"\\"+i).join("|"));xe({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(i,t)=>{var r=Sa(t[0]),s=!K8.test(i.funcName),a=!s||i.funcName==="\\widehat"||i.funcName==="\\widetilde"||i.funcName==="\\widecheck";return{type:"accent",mode:i.parser.mode,label:i.funcName,isStretchy:s,isShifty:a,base:r}},htmlBuilder:wc,mathmlBuilder:Mp});xe({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(i,t)=>{var r=t[0],s=i.parser.mode;return s==="math"&&(i.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+i.funcName+" works only in text mode"),s="text"),{type:"accent",mode:s,label:i.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:wc,mathmlBuilder:Mp});xe({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(i,t)=>{var{parser:r,funcName:s}=i,a=t[0];return{type:"accentUnder",mode:r.mode,label:s,base:a}},htmlBuilder:(i,t)=>{var r=Ke(i.base,t),s=Ma(i,t),a=i.label==="\\utilde"?.12:0,c=Qe({positionType:"top",positionData:r.height,children:[{type:"elem",elem:s,wrapperClasses:["svg-align"]},{type:"kern",size:a},{type:"elem",elem:r}]});return ae(["mord","accentunder"],[c],t)},mathmlBuilder:(i,t)=>{var r=Aa(i.label),s=new ue("munder",[Je(i.base,t),r]);return s.setAttribute("accentunder","true"),s}});var ma=i=>{var t=new ue("mpadded",i?[i]:[]);return t.setAttribute("width","+0.6em"),t.setAttribute("lspace","0.3em"),t};xe({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(i,t,r){var{parser:s,funcName:a}=i;return{type:"xArrow",mode:s.mode,label:a,body:t[0],below:r[0]}},htmlBuilder(i,t){var r=t.style,s=t.havingStyle(r.sup()),a=Ii(Ke(i.body,s,t),t),c=i.label.slice(0,2)==="\\x"?"x":"cd";a.classes.push(c+"-arrow-pad");var d;i.below&&(s=t.havingStyle(r.sub()),d=Ii(Ke(i.below,s,t),t),d.classes.push(c+"-arrow-pad"));var f=Ma(i,t),h=-t.fontMetrics().axisHeight+.5*f.height,v=-t.fontMetrics().axisHeight-.5*f.height-.111;(a.depth>.25||i.label==="\\xleftequilibrium")&&(v-=a.depth);var w;if(d){var $=-t.fontMetrics().axisHeight+d.height+.5*f.height+.111;w=Qe({positionType:"individualShift",children:[{type:"elem",elem:a,shift:v},{type:"elem",elem:f,shift:h},{type:"elem",elem:d,shift:$}]})}else w=Qe({positionType:"individualShift",children:[{type:"elem",elem:a,shift:v},{type:"elem",elem:f,shift:h}]});return w.children[0].children[0].children[1].classes.push("svg-align"),ae(["mrel","x-arrow"],[w],t)},mathmlBuilder(i,t){var r=Aa(i.label);r.setAttribute("minsize",i.label.charAt(0)==="x"?"1.75em":"3.0em");var s;if(i.body){var a=ma(Je(i.body,t));if(i.below){var c=ma(Je(i.below,t));s=new ue("munderover",[r,c,a])}else s=new ue("mover",[r,a])}else if(i.below){var d=ma(Je(i.below,t));s=new ue("munder",[r,d])}else s=ma(),s=new ue("mover",[r,s]);return s}});function Pp(i,t){var r=kn(i.body,t,!0);return ae([i.mclass],r,t)}function Cp(i,t){var r,s=Jn(i.body,t);return i.mclass==="minner"?r=new ue("mpadded",s):i.mclass==="mord"?i.isCharacterBox?(r=s[0],r.type="mi"):r=new ue("mi",s):(i.isCharacterBox?(r=s[0],r.type="mo"):r=new ue("mo",s),i.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):i.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):i.mclass==="mopen"||i.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):i.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}xe({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(i,t){var{parser:r,funcName:s}=i,a=t[0];return{type:"mclass",mode:r.mode,mclass:"m"+s.slice(5),body:yn(a),isCharacterBox:or(a)}},htmlBuilder:Pp,mathmlBuilder:Cp});var Ca=i=>{var t=i.type==="ordgroup"&&i.body.length?i.body[0]:i;return t.type==="atom"&&(t.family==="bin"||t.family==="rel")?"m"+t.family:"mord"};xe({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(i,t){var{parser:r}=i;return{type:"mclass",mode:r.mode,mclass:Ca(t[0]),body:yn(t[1]),isCharacterBox:or(t[1])}}});xe({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(i,t){var{parser:r,funcName:s}=i,a=t[1],c=t[0],d;s!=="\\stackrel"?d=Ca(a):d="mrel";var f={type:"op",mode:a.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:s!=="\\stackrel",body:yn(a)},h={type:"supsub",mode:c.mode,base:f,sup:s==="\\underset"?null:c,sub:s==="\\underset"?c:null};return{type:"mclass",mode:r.mode,mclass:d,body:[h],isCharacterBox:or(h)}},htmlBuilder:Pp,mathmlBuilder:Cp});xe({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(i,t){var{parser:r}=i;return{type:"pmb",mode:r.mode,mclass:Ca(t[0]),body:yn(t[0])}},htmlBuilder(i,t){var r=kn(i.body,t,!0),s=ae([i.mclass],r,t);return s.style.textShadow="0.02em 0.01em 0.04px",s},mathmlBuilder(i,t){var r=Jn(i.body,t),s=new ue("mstyle",r);return s.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),s}});var Z8={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},q1=()=>({type:"styling",body:[],mode:"math",style:"display"}),T1=i=>i.type==="textord"&&i.text==="@",Q8=(i,t)=>(i.type==="mathord"||i.type==="atom")&&i.text===t;function Y8(i,t,r){var s=Z8[i];switch(s){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(s,[t[0]],[t[1]]);case"\\uparrow":case"\\downarrow":{var a=r.callFunction("\\\\cdleft",[t[0]],[]),c={type:"atom",text:s,mode:"math",family:"rel"},d=r.callFunction("\\Big",[c],[]),f=r.callFunction("\\\\cdright",[t[1]],[]),h={type:"ordgroup",mode:"math",body:[a,d,f]};return r.callFunction("\\\\cdparent",[h],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var v={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[v],[])}default:return{type:"textord",text:" ",mode:"math"}}}function X8(i){var t=[];for(i.gullet.beginGroup(),i.gullet.macros.set("\\cr","\\\\\\relax"),i.gullet.beginGroup();;){t.push(i.parseExpression(!1,"\\\\")),i.gullet.endGroup(),i.gullet.beginGroup();var r=i.fetch().text;if(r==="&"||r==="\\\\")i.consume();else if(r==="\\end"){t[t.length-1].length===0&&t.pop();break}else throw new ce("Expected \\\\ or \\cr or \\end",i.nextToken)}for(var s=[],a=[s],c=0;c<t.length;c++){for(var d=t[c],f=q1(),h=0;h<d.length;h++)if(!T1(d[h]))f.body.push(d[h]);else{s.push(f),h+=1;var v=xc(d[h]).text,w=new Array(2);if(w[0]={type:"ordgroup",mode:"math",body:[]},w[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(v))if("<>AV".includes(v))for(var $=0;$<2;$++){for(var k=!0,z=h+1;z<d.length;z++){if(Q8(d[z],v)){k=!1,h=z;break}if(T1(d[z]))throw new ce("Missing a "+v+" character to complete a CD arrow.",d[z]);w[$].body.push(d[z])}if(k)throw new ce("Missing a "+v+" character to complete a CD arrow.",d[h])}else throw new ce('Expected one of "<>AV=|." after @',d[h]);var T=Y8(v,w,i),S={type:"styling",body:[T],mode:"math",style:"display"};s.push(S),f=q1()}c%2===0?s.push(f):s.shift(),s=[],a.push(s)}i.gullet.endGroup(),i.gullet.endGroup();var N=new Array(a[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:a,arraystretch:1,addJot:!0,rowGaps:[null],cols:N,colSeparationType:"CD",hLinesBeforeRow:new Array(a.length+1).fill([])}}xe({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(i,t){var{parser:r,funcName:s}=i;return{type:"cdlabel",mode:r.mode,side:s.slice(4),label:t[0]}},htmlBuilder(i,t){var r=t.havingStyle(t.style.sup()),s=Ii(Ke(i.label,r,t),t);return s.classes.push("cd-label-"+i.side),s.style.bottom=fe(.8-s.depth),s.height=0,s.depth=0,s},mathmlBuilder(i,t){var r=new ue("mrow",[Je(i.label,t)]);return r=new ue("mpadded",[r]),r.setAttribute("width","0"),i.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new ue("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});xe({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(i,t){var{parser:r}=i;return{type:"cdlabelparent",mode:r.mode,fragment:t[0]}},htmlBuilder(i,t){var r=Ii(Ke(i.fragment,t),t);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(i,t){return new ue("mrow",[Je(i.fragment,t)])}});xe({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(i,t){for(var{parser:r}=i,s=Le(t[0],"ordgroup"),a=s.body,c="",d=0;d<a.length;d++){var f=Le(a[d],"textord");c+=f.text}var h=parseInt(c),v;if(isNaN(h))throw new ce("\\@char has non-numeric argument "+c);if(h<0||h>=1114111)throw new ce("\\@char with invalid code point "+c);return h<=65535?v=String.fromCharCode(h):(h-=65536,v=String.fromCharCode((h>>10)+55296,(h&1023)+56320)),{type:"textord",mode:r.mode,text:v}}});var Rp=(i,t)=>{var r=kn(i.body,t.withColor(i.color),!1);return ar(r)},Dp=(i,t)=>{var r=Jn(i.body,t.withColor(i.color)),s=new ue("mstyle",r);return s.setAttribute("mathcolor",i.color),s};xe({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(i,t){var{parser:r}=i,s=Le(t[0],"color-token").color,a=t[1];return{type:"color",mode:r.mode,color:s,body:yn(a)}},htmlBuilder:Rp,mathmlBuilder:Dp});xe({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(i,t){var{parser:r,breakOnTokenText:s}=i,a=Le(t[0],"color-token").color;r.gullet.macros.set("\\current@color",a);var c=r.parseExpression(!0,s);return{type:"color",mode:r.mode,color:a,body:c}},htmlBuilder:Rp,mathmlBuilder:Dp});xe({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(i,t,r){var{parser:s}=i,a=s.gullet.future().text==="["?s.parseSizeGroup(!0):null,c=!s.settings.displayMode||!s.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:s.mode,newLine:c,size:a&&Le(a,"size").value}},htmlBuilder(i,t){var r=ae(["mspace"],[],t);return i.newLine&&(r.classes.push("newline"),i.size&&(r.style.marginTop=fe(pn(i.size,t)))),r},mathmlBuilder(i,t){var r=new ue("mspace");return i.newLine&&(r.setAttribute("linebreak","newline"),i.size&&r.setAttribute("height",fe(pn(i.size,t)))),r}});var Jl={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},Ep=i=>{var t=i.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new ce("Expected a control sequence",i);return t},J8=i=>{var t=i.gullet.popToken();return t.text==="="&&(t=i.gullet.popToken(),t.text===" "&&(t=i.gullet.popToken())),t},Bp=(i,t,r,s)=>{var a=i.gullet.macros.get(r.text);a==null&&(r.noexpand=!0,a={tokens:[r],numArgs:0,unexpandable:!i.gullet.isExpandable(r.text)}),i.gullet.macros.set(t,a,s)};xe({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(i){var{parser:t,funcName:r}=i;t.consumeSpaces();var s=t.fetch();if(Jl[s.text])return(r==="\\global"||r==="\\\\globallong")&&(s.text=Jl[s.text]),Le(t.parseFunction(),"internal");throw new ce("Invalid token after macro prefix",s)}});xe({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:t,funcName:r}=i,s=t.gullet.popToken(),a=s.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(a))throw new ce("Expected a control sequence",s);for(var c=0,d,f=[[]];t.gullet.future().text!=="{";)if(s=t.gullet.popToken(),s.text==="#"){if(t.gullet.future().text==="{"){d=t.gullet.future(),f[c].push("{");break}if(s=t.gullet.popToken(),!/^[1-9]$/.test(s.text))throw new ce('Invalid argument number "'+s.text+'"');if(parseInt(s.text)!==c+1)throw new ce('Argument number "'+s.text+'" out of order');c++,f.push([])}else{if(s.text==="EOF")throw new ce("Expected a macro definition");f[c].push(s.text)}var{tokens:h}=t.gullet.consumeArg();return d&&h.unshift(d),(r==="\\edef"||r==="\\xdef")&&(h=t.gullet.expandTokens(h),h.reverse()),t.gullet.macros.set(a,{tokens:h,numArgs:c,delimiters:f},r===Jl[r]),{type:"internal",mode:t.mode}}});xe({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:t,funcName:r}=i,s=Ep(t.gullet.popToken());t.gullet.consumeSpaces();var a=J8(t);return Bp(t,s,a,r==="\\\\globallet"),{type:"internal",mode:t.mode}}});xe({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:t,funcName:r}=i,s=Ep(t.gullet.popToken()),a=t.gullet.popToken(),c=t.gullet.popToken();return Bp(t,s,c,r==="\\\\globalfuture"),t.gullet.pushToken(c),t.gullet.pushToken(a),{type:"internal",mode:t.mode}}});var Bo=function(t,r,s){var a=tn.math[t]&&tn.math[t].replace,c=mc(a||t,r,s);if(!c)throw new Error("Unsupported symbol "+t+" and font size "+r+".");return c},bc=function(t,r,s,a){var c=s.havingBaseStyle(r),d=ae(a.concat(c.sizingClasses(s)),[t],s),f=c.sizeMultiplier/s.sizeMultiplier;return d.height*=f,d.depth*=f,d.maxFontSize=c.sizeMultiplier,d},Np=function(t,r,s){var a=r.havingBaseStyle(s),c=(1-r.sizeMultiplier/a.sizeMultiplier)*r.fontMetrics().axisHeight;t.classes.push("delimcenter"),t.style.top=fe(c),t.height-=c,t.depth+=c},ex=function(t,r,s,a,c,d){var f=Ln(t,"Main-Regular",c,a),h=bc(f,r,a,d);return Np(h,a,r),h},nx=function(t,r,s,a){return Ln(t,"Size"+r+"-Regular",s,a)},Ip=function(t,r,s,a,c,d){var f=nx(t,r,c,a),h=bc(ae(["delimsizing","size"+r],[f],a),Ie.TEXT,a,d);return s&&Np(h,a,Ie.TEXT),h},Rl=function(t,r,s){var a;r==="Size1-Regular"?a="delim-size1":a="delim-size4";var c=ae(["delimsizinginner",a],[ae([],[Ln(t,r,s)])]);return{type:"elem",elem:c}},Dl=function(t,r,s){var a=Nt["Size4-Regular"][t.charCodeAt(0)]?Nt["Size4-Regular"][t.charCodeAt(0)][4]:Nt["Size1-Regular"][t.charCodeAt(0)][4],c=new Dr("inner",g8(t,Math.round(1e3*r))),d=new ir([c],{width:fe(a),height:fe(r),style:"width:"+fe(a),viewBox:"0 0 "+1e3*a+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),f=Er([],[d],s);return f.height=r,f.style.height=fe(r),f.style.width=fe(a),{type:"elem",elem:f}},ec=.008,fa={type:"kern",size:-1*ec},tx=new Set(["|","\\lvert","\\rvert","\\vert"]),rx=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),Fp=function(t,r,s,a,c,d){var f,h,v,w,$="",k=0;f=v=w=t,h=null;var z="Size1-Regular";t==="\\uparrow"?v=w="⏐":t==="\\Uparrow"?v=w="‖":t==="\\downarrow"?f=v="⏐":t==="\\Downarrow"?f=v="‖":t==="\\updownarrow"?(f="\\uparrow",v="⏐",w="\\downarrow"):t==="\\Updownarrow"?(f="\\Uparrow",v="‖",w="\\Downarrow"):tx.has(t)?(v="∣",$="vert",k=333):rx.has(t)?(v="∥",$="doublevert",k=556):t==="["||t==="\\lbrack"?(f="⎡",v="⎢",w="⎣",z="Size4-Regular",$="lbrack",k=667):t==="]"||t==="\\rbrack"?(f="⎤",v="⎥",w="⎦",z="Size4-Regular",$="rbrack",k=667):t==="\\lfloor"||t==="⌊"?(v=f="⎢",w="⎣",z="Size4-Regular",$="lfloor",k=667):t==="\\lceil"||t==="⌈"?(f="⎡",v=w="⎢",z="Size4-Regular",$="lceil",k=667):t==="\\rfloor"||t==="⌋"?(v=f="⎥",w="⎦",z="Size4-Regular",$="rfloor",k=667):t==="\\rceil"||t==="⌉"?(f="⎤",v=w="⎥",z="Size4-Regular",$="rceil",k=667):t==="("||t==="\\lparen"?(f="⎛",v="⎜",w="⎝",z="Size4-Regular",$="lparen",k=875):t===")"||t==="\\rparen"?(f="⎞",v="⎟",w="⎠",z="Size4-Regular",$="rparen",k=875):t==="\\{"||t==="\\lbrace"?(f="⎧",h="⎨",w="⎩",v="⎪",z="Size4-Regular"):t==="\\}"||t==="\\rbrace"?(f="⎫",h="⎬",w="⎭",v="⎪",z="Size4-Regular"):t==="\\lgroup"||t==="⟮"?(f="⎧",w="⎩",v="⎪",z="Size4-Regular"):t==="\\rgroup"||t==="⟯"?(f="⎫",w="⎭",v="⎪",z="Size4-Regular"):t==="\\lmoustache"||t==="⎰"?(f="⎧",w="⎭",v="⎪",z="Size4-Regular"):(t==="\\rmoustache"||t==="⎱")&&(f="⎫",w="⎩",v="⎪",z="Size4-Regular");var T=Bo(f,z,c),S=T.height+T.depth,N=Bo(v,z,c),M=N.height+N.depth,V=Bo(w,z,c),O=V.height+V.depth,D=0,E=1;if(h!==null){var W=Bo(h,z,c);D=W.height+W.depth,E=2}var L=S+O+D,Q=Math.max(0,Math.ceil((r-L)/(E*M))),X=L+Q*E*M,Y=a.fontMetrics().axisHeight;s&&(Y*=a.sizeMultiplier);var re=X/2-Y,J=[];if($.length>0){var ne=X-S-O,ge=Math.round(X*1e3),Ae=y8($,Math.round(ne*1e3)),ye=new Dr($,Ae),he=(k/1e3).toFixed(3)+"em",te=(ge/1e3).toFixed(3)+"em",me=new ir([ye],{width:he,height:te,viewBox:"0 0 "+k+" "+ge}),de=Er([],[me],a);de.height=ge/1e3,de.style.width=he,de.style.height=te,J.push({type:"elem",elem:de})}else{if(J.push(Rl(w,z,c)),J.push(fa),h===null){var P=X-S-O+2*ec;J.push(Dl(v,P,a))}else{var Z=(X-S-O-D)/2+2*ec;J.push(Dl(v,Z,a)),J.push(fa),J.push(Rl(h,z,c)),J.push(fa),J.push(Dl(v,Z,a))}J.push(fa),J.push(Rl(f,z,c))}var _e=a.havingBaseStyle(Ie.TEXT),qe=Qe({positionType:"bottom",positionData:re,children:J});return bc(ae(["delimsizing","mult"],[qe],_e),Ie.TEXT,a,d)},El=80,Bl=.08,Nl=function(t,r,s,a,c){var d=h8(t,a,s),f=new Dr(t,d),h=new ir([f],{width:"400em",height:fe(r),viewBox:"0 0 400000 "+s,preserveAspectRatio:"xMinYMin slice"});return Er(["hide-tail"],[h],c)},ix=function(t,r){var s=r.havingBaseSizing(),a=Gp("\\surd",t*s.sizeMultiplier,Wp,s),c=s.sizeMultiplier,d=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),f,h=0,v=0,w=0,$;return a.type==="small"?(w=1e3+1e3*d+El,t<1?c=1:t<1.4&&(c=.7),h=(1+d+Bl)/c,v=(1+d)/c,f=Nl("sqrtMain",h,w,d,r),f.style.minWidth="0.853em",$=.833/c):a.type==="large"?(w=(1e3+El)*Io[a.size],v=(Io[a.size]+d)/c,h=(Io[a.size]+d+Bl)/c,f=Nl("sqrtSize"+a.size,h,w,d,r),f.style.minWidth="1.02em",$=1/c):(h=t+d+Bl,v=t+d,w=Math.floor(1e3*t+d)+El,f=Nl("sqrtTall",h,w,d,r),f.style.minWidth="0.742em",$=1.056),f.height=v,f.style.height=fe(h),{span:f,advanceWidth:$,ruleWidth:(r.fontMetrics().sqrtRuleThickness+d)*c}},Lp=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),ox=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),Op=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),Io=[0,1.2,1.8,2.4,3],Hp=function(t,r,s,a,c){if(t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle"),Lp.has(t)||Op.has(t))return Ip(t,r,!1,s,a,c);if(ox.has(t))return Fp(t,Io[r],!1,s,a,c);throw new ce("Illegal delimiter: '"+t+"'")},sx=[{type:"small",style:Ie.SCRIPTSCRIPT},{type:"small",style:Ie.SCRIPT},{type:"small",style:Ie.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],ax=[{type:"small",style:Ie.SCRIPTSCRIPT},{type:"small",style:Ie.SCRIPT},{type:"small",style:Ie.TEXT},{type:"stack"}],Wp=[{type:"small",style:Ie.SCRIPTSCRIPT},{type:"small",style:Ie.SCRIPT},{type:"small",style:Ie.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],lx=function(t){if(t.type==="small")return"Main-Regular";if(t.type==="large")return"Size"+t.size+"-Regular";if(t.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+t.type+"' here.")},Gp=function(t,r,s,a){for(var c=Math.min(2,3-a.style.size),d=c;d<s.length&&s[d].type!=="stack";d++){var f=Bo(t,lx(s[d]),"math"),h=f.height+f.depth;if(s[d].type==="small"){var v=a.havingBaseStyle(s[d].style);h*=v.sizeMultiplier}if(h>r)return s[d]}return s[s.length-1]},nc=function(t,r,s,a,c,d){t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle");var f;Op.has(t)?f=sx:Lp.has(t)?f=Wp:f=ax;var h=Gp(t,r,f,a);return h.type==="small"?ex(t,h.style,s,a,c,d):h.type==="large"?Ip(t,h.size,s,a,c,d):Fp(t,r,s,a,c,d)},Il=function(t,r,s,a,c,d){var f=a.fontMetrics().axisHeight*a.sizeMultiplier,h=901,v=5/a.fontMetrics().ptPerEm,w=Math.max(r-f,s+f),$=Math.max(w/500*h,2*w-v);return nc(t,$,!0,a,c,d)},A1={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},cx=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function Ra(i,t){var r=Pa(i);if(r&&cx.has(r.text))return r;throw r?new ce("Invalid delimiter '"+r.text+"' after '"+t.funcName+"'",i):new ce("Invalid delimiter type '"+i.type+"'",i)}xe({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(i,t)=>{var r=Ra(t[0],i);return{type:"delimsizing",mode:i.parser.mode,size:A1[i.funcName].size,mclass:A1[i.funcName].mclass,delim:r.text}},htmlBuilder:(i,t)=>i.delim==="."?ae([i.mclass]):Hp(i.delim,i.size,t,i.mode,[i.mclass]),mathmlBuilder:i=>{var t=[];i.delim!=="."&&t.push(vt(i.delim,i.mode));var r=new ue("mo",t);i.mclass==="mopen"||i.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var s=fe(Io[i.size]);return r.setAttribute("minsize",s),r.setAttribute("maxsize",s),r}});function M1(i){if(!i.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}xe({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(i,t)=>{var r=i.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new ce("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:i.parser.mode,delim:Ra(t[0],i).text,color:r}}});xe({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(i,t)=>{var r=Ra(t[0],i),s=i.parser;++s.leftrightDepth;var a=s.parseExpression(!1);--s.leftrightDepth,s.expect("\\right",!1);var c=Le(s.parseFunction(),"leftright-right");return{type:"leftright",mode:s.mode,body:a,left:r.text,right:c.delim,rightColor:c.color}},htmlBuilder:(i,t)=>{M1(i);for(var r=kn(i.body,t,!0,["mopen","mclose"]),s=0,a=0,c=!1,d=0;d<r.length;d++)r[d].isMiddle?c=!0:(s=Math.max(r[d].height,s),a=Math.max(r[d].depth,a));s*=t.sizeMultiplier,a*=t.sizeMultiplier;var f;if(i.left==="."?f=Ho(t,["mopen"]):f=Il(i.left,s,a,t,i.mode,["mopen"]),r.unshift(f),c)for(var h=1;h<r.length;h++){var v=r[h],w=v.isMiddle;w&&(r[h]=Il(w.delim,s,a,w.options,i.mode,[]))}var $;if(i.right===".")$=Ho(t,["mclose"]);else{var k=i.rightColor?t.withColor(i.rightColor):t;$=Il(i.right,s,a,k,i.mode,["mclose"])}return r.push($),ae(["minner"],r,t)},mathmlBuilder:(i,t)=>{M1(i);var r=Jn(i.body,t);if(i.left!=="."){var s=new ue("mo",[vt(i.left,i.mode)]);s.setAttribute("fence","true"),r.unshift(s)}if(i.right!=="."){var a=new ue("mo",[vt(i.right,i.mode)]);a.setAttribute("fence","true"),i.rightColor&&a.setAttribute("mathcolor",i.rightColor),r.push(a)}return yc(r)}});xe({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(i,t)=>{var r=Ra(t[0],i);if(!i.parser.leftrightDepth)throw new ce("\\middle without preceding \\left",r);return{type:"middle",mode:i.parser.mode,delim:r.text}},htmlBuilder:(i,t)=>{var r;if(i.delim===".")r=Ho(t,[]);else{r=Hp(i.delim,1,t,i.mode,[]);var s={delim:i.delim,options:t};r.isMiddle=s}return r},mathmlBuilder:(i,t)=>{var r=i.delim==="\\vert"||i.delim==="|"?vt("|","text"):vt(i.delim,i.mode),s=new ue("mo",[r]);return s.setAttribute("fence","true"),s.setAttribute("lspace","0.05em"),s.setAttribute("rspace","0.05em"),s}});var $c=(i,t)=>{var r=Ii(Ke(i.body,t),t),s=i.label.slice(1),a=t.sizeMultiplier,c,d=0,f=or(i.body);if(s==="sout")c=ae(["stretchy","sout"]),c.height=t.fontMetrics().defaultRuleThickness/a,d=-.5*t.fontMetrics().xHeight;else if(s==="phase"){var h=pn({number:.6,unit:"pt"},t),v=pn({number:.35,unit:"ex"},t),w=t.havingBaseSizing();a=a/w.sizeMultiplier;var $=r.height+r.depth+h+v;r.style.paddingLeft=fe($/2+h);var k=Math.floor(1e3*$*a),z=m8(k),T=new ir([new Dr("phase",z)],{width:"400em",height:fe(k/1e3),viewBox:"0 0 400000 "+k,preserveAspectRatio:"xMinYMin slice"});c=Er(["hide-tail"],[T],t),c.style.height=fe($),d=r.depth+h+v}else{/cancel/.test(s)?f||r.classes.push("cancel-pad"):s==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var S=0,N=0,M=0;/box/.test(s)?(M=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),S=t.fontMetrics().fboxsep+(s==="colorbox"?0:M),N=S):s==="angl"?(M=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),S=4*M,N=Math.max(0,.25-r.depth)):(S=f?.2:0,N=S),c=V8(r,s,S,N,t),/fbox|boxed|fcolorbox/.test(s)?(c.style.borderStyle="solid",c.style.borderWidth=fe(M)):s==="angl"&&M!==.049&&(c.style.borderTopWidth=fe(M),c.style.borderRightWidth=fe(M)),d=r.depth+N,i.backgroundColor&&(c.style.backgroundColor=i.backgroundColor,i.borderColor&&(c.style.borderColor=i.borderColor))}var V;if(i.backgroundColor)V=Qe({positionType:"individualShift",children:[{type:"elem",elem:c,shift:d},{type:"elem",elem:r,shift:0}]});else{var O=/cancel|phase/.test(s)?["svg-align"]:[];V=Qe({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:c,shift:d,wrapperClasses:O}]})}return/cancel/.test(s)&&(V.height=r.height,V.depth=r.depth),/cancel/.test(s)&&!f?ae(["mord","cancel-lap"],[V],t):ae(["mord"],[V],t)},_c=(i,t)=>{var r=0,s=new ue(i.label.includes("colorbox")?"mpadded":"menclose",[Je(i.body,t)]);switch(i.label){case"\\cancel":s.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":s.setAttribute("notation","downdiagonalstrike");break;case"\\phase":s.setAttribute("notation","phasorangle");break;case"\\sout":s.setAttribute("notation","horizontalstrike");break;case"\\fbox":s.setAttribute("notation","box");break;case"\\angl":s.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,s.setAttribute("width","+"+2*r+"pt"),s.setAttribute("height","+"+2*r+"pt"),s.setAttribute("lspace",r+"pt"),s.setAttribute("voffset",r+"pt"),i.label==="\\fcolorbox"){var a=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);s.setAttribute("style","border: "+a+"em solid "+String(i.borderColor))}break;case"\\xcancel":s.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return i.backgroundColor&&s.setAttribute("mathbackground",i.backgroundColor),s};xe({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(i,t,r){var{parser:s,funcName:a}=i,c=Le(t[0],"color-token").color,d=t[1];return{type:"enclose",mode:s.mode,label:a,backgroundColor:c,body:d}},htmlBuilder:$c,mathmlBuilder:_c});xe({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(i,t,r){var{parser:s,funcName:a}=i,c=Le(t[0],"color-token").color,d=Le(t[1],"color-token").color,f=t[2];return{type:"enclose",mode:s.mode,label:a,backgroundColor:d,borderColor:c,body:f}},htmlBuilder:$c,mathmlBuilder:_c});xe({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(i,t){var{parser:r}=i;return{type:"enclose",mode:r.mode,label:"\\fbox",body:t[0]}}});xe({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(i,t){var{parser:r,funcName:s}=i,a=t[0];return{type:"enclose",mode:r.mode,label:s,body:a}},htmlBuilder:$c,mathmlBuilder:_c});xe({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(i,t){var{parser:r}=i;return{type:"enclose",mode:r.mode,label:"\\angl",body:t[0]}}});var Up={};function It(i){for(var{type:t,names:r,props:s,handler:a,htmlBuilder:c,mathmlBuilder:d}=i,f={type:t,numArgs:s.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:a},h=0;h<r.length;++h)Up[r[h]]=f;c&&(ka[t]=c),d&&(za[t]=d)}var Vp={};function _(i,t){Vp[i]=t}function P1(i){var t=[];i.consumeSpaces();var r=i.fetch().text;for(r==="\\relax"&&(i.consume(),i.consumeSpaces(),r=i.fetch().text);r==="\\hline"||r==="\\hdashline";)i.consume(),t.push(r==="\\hdashline"),i.consumeSpaces(),r=i.fetch().text;return t}var Da=i=>{var t=i.parser.settings;if(!t.displayMode)throw new ce("{"+i.envName+"} can be used only in display mode.")},ux=new Set(["gather","gather*"]);function kc(i){if(!i.includes("ed"))return!i.includes("*")}function Nr(i,t,r){var{hskipBeforeAndAfter:s,addJot:a,cols:c,arraystretch:d,colSeparationType:f,autoTag:h,singleRow:v,emptySingleRow:w,maxNumCols:$,leqno:k}=t;if(i.gullet.beginGroup(),v||i.gullet.macros.set("\\cr","\\\\\\relax"),!d){var z=i.gullet.expandMacroAsText("\\arraystretch");if(z==null)d=1;else if(d=parseFloat(z),!d||d<0)throw new ce("Invalid \\arraystretch: "+z)}i.gullet.beginGroup();var T=[],S=[T],N=[],M=[],V=h!=null?[]:void 0;function O(){h&&i.gullet.macros.set("\\@eqnsw","1",!0)}function D(){V&&(i.gullet.macros.get("\\df@tag")?(V.push(i.subparse([new st("\\df@tag")])),i.gullet.macros.set("\\df@tag",void 0,!0)):V.push(!!h&&i.gullet.macros.get("\\@eqnsw")==="1"))}for(O(),M.push(P1(i));;){var E=i.parseExpression(!1,v?"\\end":"\\\\");i.gullet.endGroup(),i.gullet.beginGroup(),E={type:"ordgroup",mode:i.mode,body:E},r&&(E={type:"styling",mode:i.mode,style:r,body:[E]}),T.push(E);var W=i.fetch().text;if(W==="&"){if($&&T.length===$){if(v||f)throw new ce("Too many tab characters: &",i.nextToken);i.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}i.consume()}else if(W==="\\end"){D(),T.length===1&&E.type==="styling"&&E.body[0].body.length===0&&(S.length>1||!w)&&S.pop(),M.length<S.length+1&&M.push([]);break}else if(W==="\\\\"){i.consume();var L=void 0;i.gullet.future().text!==" "&&(L=i.parseSizeGroup(!0)),N.push(L?L.value:null),D(),M.push(P1(i)),T=[],S.push(T),O()}else throw new ce("Expected & or \\\\ or \\cr or \\end",i.nextToken)}return i.gullet.endGroup(),i.gullet.endGroup(),{type:"array",mode:i.mode,addJot:a,arraystretch:d,body:S,cols:c,rowGaps:N,hskipBeforeAndAfter:s,hLinesBeforeRow:M,colSeparationType:f,tags:V,leqno:k}}function zc(i){return i.slice(0,1)==="d"?"display":"text"}var Ft=function(t,r){var s,a,c=t.body.length,d=t.hLinesBeforeRow,f=0,h=new Array(c),v=[],w=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),$=1/r.fontMetrics().ptPerEm,k=5*$;if(t.colSeparationType&&t.colSeparationType==="small"){var z=r.havingStyle(Ie.SCRIPT).sizeMultiplier;k=.2778*(z/r.sizeMultiplier)}var T=t.colSeparationType==="CD"?pn({number:3,unit:"ex"},r):12*$,S=3*$,N=t.arraystretch*T,M=.7*N,V=.3*N,O=0;function D(lt){for(var nt=0;nt<lt.length;++nt)nt>0&&(O+=.25),v.push({pos:O,isDashed:lt[nt]})}for(D(d[0]),s=0;s<t.body.length;++s){var E=t.body[s],W=M,L=V;f<E.length&&(f=E.length);var Q=new Array(E.length);for(a=0;a<E.length;++a){var X=Ke(E[a],r);L<X.depth&&(L=X.depth),W<X.height&&(W=X.height),Q[a]=X}var Y=t.rowGaps[s],re=0;Y&&(re=pn(Y,r),re>0&&(re+=V,L<re&&(L=re),re=0)),t.addJot&&(L+=S),Q.height=W,Q.depth=L,O+=W,Q.pos=O,O+=L+re,h[s]=Q,D(d[s+1])}var J=O/2+r.fontMetrics().axisHeight,ne=t.cols||[],ge=[],Ae,ye,he=[];if(t.tags&&t.tags.some(lt=>lt))for(s=0;s<c;++s){var te=h[s],me=te.pos-J,de=t.tags[s],P=void 0;de===!0?P=ae(["eqn-num"],[],r):de===!1?P=ae([],[],r):P=ae([],kn(de,r,!0),r),P.depth=te.depth,P.height=te.height,he.push({type:"elem",elem:P,shift:me})}for(a=0,ye=0;a<f||ye<ne.length;++a,++ye){for(var Z=ne[ye]||{},_e=!0;Z.type==="separator";){if(_e||(Ae=ae(["arraycolsep"],[]),Ae.style.width=fe(r.fontMetrics().doubleRuleSep),ge.push(Ae)),Z.separator==="|"||Z.separator===":"){var qe=Z.separator==="|"?"solid":"dashed",Te=ae(["vertical-separator"],[],r);Te.style.height=fe(O),Te.style.borderRightWidth=fe(w),Te.style.borderRightStyle=qe,Te.style.margin="0 "+fe(-w/2);var we=O-J;we&&(Te.style.verticalAlign=fe(-we)),ge.push(Te)}else throw new ce("Invalid separator type: "+Z.separator);ye++,Z=ne[ye]||{},_e=!1}if(!(a>=f)){var Me=void 0;if(a>0||t.hskipBeforeAndAfter){var ve;Me=(ve=Z.pregap)!=null?ve:k,Me!==0&&(Ae=ae(["arraycolsep"],[]),Ae.style.width=fe(Me),ge.push(Ae))}var Fe=[];for(s=0;s<c;++s){var Ye=h[s],bn=Ye[a];if(bn){var xt=Ye.pos-J;bn.depth=Ye.depth,bn.height=Ye.height,Fe.push({type:"elem",elem:bn,shift:xt})}}if(Fe=Qe({positionType:"individualShift",children:Fe}),Fe=ae(["col-align-"+(Z.align||"c")],[Fe]),ge.push(Fe),a<f-1||t.hskipBeforeAndAfter){var Wn;Me=(Wn=Z.postgap)!=null?Wn:k,Me!==0&&(Ae=ae(["arraycolsep"],[]),Ae.style.width=fe(Me),ge.push(Ae))}}}if(h=ae(["mtable"],ge),v.length>0){for(var De=Ni("hline",r,w),sn=Ni("hdashline",r,w),Ne=[{type:"elem",elem:h,shift:0}];v.length>0;){var zn=v.pop(),et=zn.pos-J;zn.isDashed?Ne.push({type:"elem",elem:sn,shift:et}):Ne.push({type:"elem",elem:De,shift:et})}h=Qe({positionType:"individualShift",children:Ne})}if(he.length===0)return ae(["mord"],[h],r);var Mt=Qe({positionType:"individualShift",children:he});return Mt=ae(["tag"],[Mt],r),ar([h,Mt])},dx={c:"center ",l:"left ",r:"right "},Lt=function(t,r){for(var s=[],a=new ue("mtd",[],["mtr-glue"]),c=new ue("mtd",[],["mml-eqn-num"]),d=0;d<t.body.length;d++){for(var f=t.body[d],h=[],v=0;v<f.length;v++)h.push(new ue("mtd",[Je(f[v],r)]));t.tags&&t.tags[d]&&(h.unshift(a),h.push(a),t.leqno?h.unshift(c):h.push(c)),s.push(new ue("mtr",h))}var w=new ue("mtable",s),$=t.arraystretch===.5?.1:.16+t.arraystretch-1+(t.addJot?.09:0);w.setAttribute("rowspacing",fe($));var k="",z="";if(t.cols&&t.cols.length>0){var T=t.cols,S="",N=!1,M=0,V=T.length;T[0].type==="separator"&&(k+="top ",M=1),T[T.length-1].type==="separator"&&(k+="bottom ",V-=1);for(var O=M;O<V;O++)T[O].type==="align"?(z+=dx[T[O].align],N&&(S+="none "),N=!0):T[O].type==="separator"&&N&&(S+=T[O].separator==="|"?"solid ":"dashed ",N=!1);w.setAttribute("columnalign",z.trim()),/[sd]/.test(S)&&w.setAttribute("columnlines",S.trim())}if(t.colSeparationType==="align"){for(var D=t.cols||[],E="",W=1;W<D.length;W++)E+=W%2?"0em ":"1em ";w.setAttribute("columnspacing",E.trim())}else t.colSeparationType==="alignat"||t.colSeparationType==="gather"?w.setAttribute("columnspacing","0em"):t.colSeparationType==="small"?w.setAttribute("columnspacing","0.2778em"):t.colSeparationType==="CD"?w.setAttribute("columnspacing","0.5em"):w.setAttribute("columnspacing","1em");var L="",Q=t.hLinesBeforeRow;k+=Q[0].length>0?"left ":"",k+=Q[Q.length-1].length>0?"right ":"";for(var X=1;X<Q.length-1;X++)L+=Q[X].length===0?"none ":Q[X][0]?"dashed ":"solid ";return/[sd]/.test(L)&&w.setAttribute("rowlines",L.trim()),k!==""&&(w=new ue("menclose",[w]),w.setAttribute("notation",k.trim())),t.arraystretch&&t.arraystretch<1&&(w=new ue("mstyle",[w]),w.setAttribute("scriptlevel","1")),w},Kp=function(t,r){t.envName.includes("ed")||Da(t);var s=[],a=t.envName.includes("at")?"alignat":"align",c=t.envName==="split",d=Nr(t.parser,{cols:s,addJot:!0,autoTag:c?void 0:kc(t.envName),emptySingleRow:!0,colSeparationType:a,maxNumCols:c?2:void 0,leqno:t.parser.settings.leqno},"display"),f,h=0,v={type:"ordgroup",mode:t.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var w="",$=0;$<r[0].body.length;$++){var k=Le(r[0].body[$],"textord");w+=k.text}f=Number(w),h=f*2}var z=!h;d.body.forEach(function(M){for(var V=1;V<M.length;V+=2){var O=Le(M[V],"styling"),D=Le(O.body[0],"ordgroup");D.body.unshift(v)}if(z)h<M.length&&(h=M.length);else{var E=M.length/2;if(f<E)throw new ce("Too many math in a row: "+("expected "+f+", but got "+E),M[0])}});for(var T=0;T<h;++T){var S="r",N=0;T%2===1?S="l":T>0&&z&&(N=1),s[T]={type:"align",align:S,pregap:N,postgap:0}}return d.colSeparationType=z?"align":"alignat",d};It({type:"array",names:["array","darray"],props:{numArgs:1},handler(i,t){var r=Pa(t[0]),s=r?[t[0]]:Le(t[0],"ordgroup").body,a=s.map(function(d){var f=xc(d),h=f.text;if("lcr".includes(h))return{type:"align",align:h};if(h==="|")return{type:"separator",separator:"|"};if(h===":")return{type:"separator",separator:":"};throw new ce("Unknown column alignment: "+h,d)}),c={cols:a,hskipBeforeAndAfter:!0,maxNumCols:a.length};return Nr(i.parser,c,zc(i.envName))},htmlBuilder:Ft,mathmlBuilder:Lt});It({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(i){var t={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[i.envName.replace("*","")],r="c",s={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(i.envName.charAt(i.envName.length-1)==="*"){var a=i.parser;if(a.consumeSpaces(),a.fetch().text==="["){if(a.consume(),a.consumeSpaces(),r=a.fetch().text,!"lcr".includes(r))throw new ce("Expected l or c or r",a.nextToken);a.consume(),a.consumeSpaces(),a.expect("]"),a.consume(),s.cols=[{type:"align",align:r}]}}var c=Nr(i.parser,s,zc(i.envName)),d=Math.max(0,...c.body.map(f=>f.length));return c.cols=new Array(d).fill({type:"align",align:r}),t?{type:"leftright",mode:i.mode,body:[c],left:t[0],right:t[1],rightColor:void 0}:c},htmlBuilder:Ft,mathmlBuilder:Lt});It({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(i){var t={arraystretch:.5},r=Nr(i.parser,t,"script");return r.colSeparationType="small",r},htmlBuilder:Ft,mathmlBuilder:Lt});It({type:"array",names:["subarray"],props:{numArgs:1},handler(i,t){var r=Pa(t[0]),s=r?[t[0]]:Le(t[0],"ordgroup").body,a=s.map(function(d){var f=xc(d),h=f.text;if("lc".includes(h))return{type:"align",align:h};throw new ce("Unknown column alignment: "+h,d)});if(a.length>1)throw new ce("{subarray} can contain only one column");var c={cols:a,hskipBeforeAndAfter:!1,arraystretch:.5};if(c=Nr(i.parser,c,"script"),c.body.length>0&&c.body[0].length>1)throw new ce("{subarray} can contain only one column");return c},htmlBuilder:Ft,mathmlBuilder:Lt});It({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(i){var t={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=Nr(i.parser,t,zc(i.envName));return{type:"leftright",mode:i.mode,body:[r],left:i.envName.includes("r")?".":"\\{",right:i.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:Ft,mathmlBuilder:Lt});It({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:Kp,htmlBuilder:Ft,mathmlBuilder:Lt});It({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(i){ux.has(i.envName)&&Da(i);var t={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:kc(i.envName),emptySingleRow:!0,leqno:i.parser.settings.leqno};return Nr(i.parser,t,"display")},htmlBuilder:Ft,mathmlBuilder:Lt});It({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:Kp,htmlBuilder:Ft,mathmlBuilder:Lt});It({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(i){Da(i);var t={autoTag:kc(i.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:i.parser.settings.leqno};return Nr(i.parser,t,"display")},htmlBuilder:Ft,mathmlBuilder:Lt});It({type:"array",names:["CD"],props:{numArgs:0},handler(i){return Da(i),X8(i.parser)},htmlBuilder:Ft,mathmlBuilder:Lt});_("\\nonumber","\\gdef\\@eqnsw{0}");_("\\notag","\\nonumber");xe({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(i,t){throw new ce(i.funcName+" valid only within array environment")}});var C1=Up;xe({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(i,t){var{parser:r,funcName:s}=i,a=t[0];if(a.type!=="ordgroup")throw new ce("Invalid environment name",a);for(var c="",d=0;d<a.body.length;++d)c+=Le(a.body[d],"textord").text;if(s==="\\begin"){if(!C1.hasOwnProperty(c))throw new ce("No such environment: "+c,a);var f=C1[c],{args:h,optArgs:v}=r.parseArguments("\\begin{"+c+"}",f),w={mode:r.mode,envName:c,parser:r},$=f.handler(w,h,v);r.expect("\\end",!1);var k=r.nextToken,z=Le(r.parseFunction(),"environment");if(z.name!==c)throw new ce("Mismatch: \\begin{"+c+"} matched by \\end{"+z.name+"}",k);return $}return{type:"environment",mode:r.mode,name:c,nameGroup:a}}});var Zp=(i,t)=>{var r=i.font,s=t.withFont(r);return Ke(i.body,s)},Qp=(i,t)=>{var r=i.font,s=t.withFont(r);return Je(i.body,s)},R1={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};xe({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(i,t)=>{var{parser:r,funcName:s}=i,a=Sa(t[0]),c=s;return c in R1&&(c=R1[c]),{type:"font",mode:r.mode,font:c.slice(1),body:a}},htmlBuilder:Zp,mathmlBuilder:Qp});xe({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(i,t)=>{var{parser:r}=i,s=t[0];return{type:"mclass",mode:r.mode,mclass:Ca(s),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:s}],isCharacterBox:or(s)}}});xe({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(i,t)=>{var{parser:r,funcName:s,breakOnTokenText:a}=i,{mode:c}=r,d=r.parseExpression(!0,a),f="math"+s.slice(1);return{type:"font",mode:c,font:f,body:{type:"ordgroup",mode:r.mode,body:d}}},htmlBuilder:Zp,mathmlBuilder:Qp});var px=(i,t)=>{var r=t.style,s=r.fracNum(),a=r.fracDen(),c;c=t.havingStyle(s);var d=Ke(i.numer,c,t);if(i.continued){var f=8.5/t.fontMetrics().ptPerEm,h=3.5/t.fontMetrics().ptPerEm;d.height=d.height<f?f:d.height,d.depth=d.depth<h?h:d.depth}c=t.havingStyle(a);var v=Ke(i.denom,c,t),w,$,k;i.hasBarLine?(i.barSize?($=pn(i.barSize,t),w=Ni("frac-line",t,$)):w=Ni("frac-line",t),$=w.height,k=w.height):(w=null,$=0,k=t.fontMetrics().defaultRuleThickness);var z,T,S;r.size===Ie.DISPLAY.size?(z=t.fontMetrics().num1,$>0?T=3*k:T=7*k,S=t.fontMetrics().denom1):($>0?(z=t.fontMetrics().num2,T=k):(z=t.fontMetrics().num3,T=3*k),S=t.fontMetrics().denom2);var N;if(w){var V=t.fontMetrics().axisHeight;z-d.depth-(V+.5*$)<T&&(z+=T-(z-d.depth-(V+.5*$))),V-.5*$-(v.height-S)<T&&(S+=T-(V-.5*$-(v.height-S)));var O=-(V-.5*$);N=Qe({positionType:"individualShift",children:[{type:"elem",elem:v,shift:S},{type:"elem",elem:w,shift:O},{type:"elem",elem:d,shift:-z}]})}else{var M=z-d.depth-(v.height-S);M<T&&(z+=.5*(T-M),S+=.5*(T-M)),N=Qe({positionType:"individualShift",children:[{type:"elem",elem:v,shift:S},{type:"elem",elem:d,shift:-z}]})}c=t.havingStyle(r),N.height*=c.sizeMultiplier/t.sizeMultiplier,N.depth*=c.sizeMultiplier/t.sizeMultiplier;var D;r.size===Ie.DISPLAY.size?D=t.fontMetrics().delim1:r.size===Ie.SCRIPTSCRIPT.size?D=t.havingStyle(Ie.SCRIPT).fontMetrics().delim2:D=t.fontMetrics().delim2;var E,W;return i.leftDelim==null?E=Ho(t,["mopen"]):E=nc(i.leftDelim,D,!0,t.havingStyle(r),i.mode,["mopen"]),i.continued?W=ae([]):i.rightDelim==null?W=Ho(t,["mclose"]):W=nc(i.rightDelim,D,!0,t.havingStyle(r),i.mode,["mclose"]),ae(["mord"].concat(c.sizingClasses(t)),[E,ae(["mfrac"],[N]),W],t)},mx=(i,t)=>{var r=new ue("mfrac",[Je(i.numer,t),Je(i.denom,t)]);if(!i.hasBarLine)r.setAttribute("linethickness","0px");else if(i.barSize){var s=pn(i.barSize,t);r.setAttribute("linethickness",fe(s))}if(i.leftDelim!=null||i.rightDelim!=null){var a=[];if(i.leftDelim!=null){var c=new ue("mo",[new xn(i.leftDelim.replace("\\",""))]);c.setAttribute("fence","true"),a.push(c)}if(a.push(r),i.rightDelim!=null){var d=new ue("mo",[new xn(i.rightDelim.replace("\\",""))]);d.setAttribute("fence","true"),a.push(d)}return yc(a)}return r},Yp=(i,t)=>{if(!t)return i;var r={type:"styling",mode:i.mode,style:t,body:[i]};return r};xe({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(i,t)=>{var{parser:r,funcName:s}=i,a=t[0],c=t[1],d,f=null,h=null;switch(s){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":d=!0;break;case"\\\\atopfrac":d=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":d=!1,f="(",h=")";break;case"\\\\bracefrac":d=!1,f="\\{",h="\\}";break;case"\\\\brackfrac":d=!1,f="[",h="]";break;default:throw new Error("Unrecognized genfrac command")}var v=s==="\\cfrac",w=null;return v||s.startsWith("\\d")?w="display":s.startsWith("\\t")&&(w="text"),Yp({type:"genfrac",mode:r.mode,numer:a,denom:c,continued:v,hasBarLine:d,leftDelim:f,rightDelim:h,barSize:null},w)},htmlBuilder:px,mathmlBuilder:mx});xe({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(i){var{parser:t,funcName:r,token:s}=i,a;switch(r){case"\\over":a="\\frac";break;case"\\choose":a="\\binom";break;case"\\atop":a="\\\\atopfrac";break;case"\\brace":a="\\\\bracefrac";break;case"\\brack":a="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:t.mode,replaceWith:a,token:s}}});var D1=["display","text","script","scriptscript"],E1=function(t){var r=null;return t.length>0&&(r=t,r=r==="."?null:r),r};xe({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(i,t){var{parser:r}=i,s=t[4],a=t[5],c=Sa(t[0]),d=c.type==="atom"&&c.family==="open"?E1(c.text):null,f=Sa(t[1]),h=f.type==="atom"&&f.family==="close"?E1(f.text):null,v=Le(t[2],"size"),w,$=null;v.isBlank?w=!0:($=v.value,w=$.number>0);var k=null,z=t[3];if(z.type==="ordgroup"){if(z.body.length>0){var T=Le(z.body[0],"textord");k=D1[Number(T.text)]}}else z=Le(z,"textord"),k=D1[Number(z.text)];return Yp({type:"genfrac",mode:r.mode,numer:s,denom:a,continued:!1,hasBarLine:w,barSize:$,leftDelim:d,rightDelim:h},k)}});xe({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(i,t){var{parser:r,funcName:s,token:a}=i;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:Le(t[0],"size").value,token:a}}});xe({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(i,t)=>{var{parser:r,funcName:s}=i,a=t[0],c=Le(t[1],"infix").size;if(!c)throw new Error("\\\\abovefrac expected size, but got "+String(c));var d=t[2],f=c.number>0;return{type:"genfrac",mode:r.mode,numer:a,denom:d,continued:!1,hasBarLine:f,barSize:c,leftDelim:null,rightDelim:null}}});var Xp=(i,t)=>{var r=t.style,s,a;i.type==="supsub"?(s=i.sup?Ke(i.sup,t.havingStyle(r.sup()),t):Ke(i.sub,t.havingStyle(r.sub()),t),a=Le(i.base,"horizBrace")):a=Le(i,"horizBrace");var c=Ke(a.base,t.havingBaseStyle(Ie.DISPLAY)),d=Ma(a,t),f;if(a.isOver?(f=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:c},{type:"kern",size:.1},{type:"elem",elem:d}]}),f.children[0].children[0].children[1].classes.push("svg-align")):(f=Qe({positionType:"bottom",positionData:c.depth+.1+d.height,children:[{type:"elem",elem:d},{type:"kern",size:.1},{type:"elem",elem:c}]}),f.children[0].children[0].children[0].classes.push("svg-align")),s){var h=ae(["mord",a.isOver?"mover":"munder"],[f],t);a.isOver?f=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:h},{type:"kern",size:.2},{type:"elem",elem:s}]}):f=Qe({positionType:"bottom",positionData:h.depth+.2+s.height+s.depth,children:[{type:"elem",elem:s},{type:"kern",size:.2},{type:"elem",elem:h}]})}return ae(["mord",a.isOver?"mover":"munder"],[f],t)},fx=(i,t)=>{var r=Aa(i.label);return new ue(i.isOver?"mover":"munder",[Je(i.base,t),r])};xe({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(i,t){var{parser:r,funcName:s}=i;return{type:"horizBrace",mode:r.mode,label:s,isOver:/^\\over/.test(s),base:t[0]}},htmlBuilder:Xp,mathmlBuilder:fx});xe({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(i,t)=>{var{parser:r}=i,s=t[1],a=Le(t[0],"url").url;return r.settings.isTrusted({command:"\\href",url:a})?{type:"href",mode:r.mode,href:a,body:yn(s)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(i,t)=>{var r=kn(i.body,t,!1);return M8(i.href,[],r,t)},mathmlBuilder:(i,t)=>{var r=Br(i.body,t);return r instanceof ue||(r=new ue("mrow",[r])),r.setAttribute("href",i.href),r}});xe({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(i,t)=>{var{parser:r}=i,s=Le(t[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:s}))return r.formatUnsupportedCmd("\\url");for(var a=[],c=0;c<s.length;c++){var d=s[c];d==="~"&&(d="\\textasciitilde"),a.push({type:"textord",mode:"text",text:d})}var f={type:"text",mode:r.mode,font:"\\texttt",body:a};return{type:"href",mode:r.mode,href:s,body:yn(f)}}});xe({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(i,t){var{parser:r}=i;return{type:"hbox",mode:r.mode,body:yn(t[0])}},htmlBuilder(i,t){var r=kn(i.body,t,!1);return ar(r)},mathmlBuilder(i,t){return new ue("mrow",Jn(i.body,t))}});xe({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(i,t)=>{var{parser:r,funcName:s,token:a}=i,c=Le(t[0],"raw").string,d=t[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var f,h={};switch(s){case"\\htmlClass":h.class=c,f={command:"\\htmlClass",class:c};break;case"\\htmlId":h.id=c,f={command:"\\htmlId",id:c};break;case"\\htmlStyle":h.style=c,f={command:"\\htmlStyle",style:c};break;case"\\htmlData":{for(var v=c.split(","),w=0;w<v.length;w++){var $=v[w],k=$.indexOf("=");if(k<0)throw new ce("\\htmlData key/value '"+$+"' missing equals sign");var z=$.slice(0,k),T=$.slice(k+1);h["data-"+z.trim()]=T}f={command:"\\htmlData",attributes:h};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(f)?{type:"html",mode:r.mode,attributes:h,body:yn(d)}:r.formatUnsupportedCmd(s)},htmlBuilder:(i,t)=>{var r=kn(i.body,t,!1),s=["enclosing"];i.attributes.class&&s.push(...i.attributes.class.trim().split(/\s+/));var a=ae(s,r,t);for(var c in i.attributes)c!=="class"&&i.attributes.hasOwnProperty(c)&&a.setAttribute(c,i.attributes[c]);return a},mathmlBuilder:(i,t)=>Br(i.body,t)});xe({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(i,t)=>{var{parser:r}=i;return{type:"htmlmathml",mode:r.mode,html:yn(t[0]),mathml:yn(t[1])}},htmlBuilder:(i,t)=>{var r=kn(i.html,t,!1);return ar(r)},mathmlBuilder:(i,t)=>Br(i.mathml,t)});var Fl=function(t){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))return{number:+t,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);if(!r)throw new ce("Invalid size: '"+t+"' in \\includegraphics");var s={number:+(r[1]+r[2]),unit:r[3]};if(!gp(s))throw new ce("Invalid unit: '"+s.unit+"' in \\includegraphics.");return s};xe({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(i,t,r)=>{var{parser:s}=i,a={number:0,unit:"em"},c={number:.9,unit:"em"},d={number:0,unit:"em"},f="";if(r[0])for(var h=Le(r[0],"raw").string,v=h.split(","),w=0;w<v.length;w++){var $=v[w].split("=");if($.length===2){var k=$[1].trim();switch($[0].trim()){case"alt":f=k;break;case"width":a=Fl(k);break;case"height":c=Fl(k);break;case"totalheight":d=Fl(k);break;default:throw new ce("Invalid key: '"+$[0]+"' in \\includegraphics.")}}}var z=Le(t[0],"url").url;return f===""&&(f=z,f=f.replace(/^.*[\\/]/,""),f=f.substring(0,f.lastIndexOf("."))),s.settings.isTrusted({command:"\\includegraphics",url:z})?{type:"includegraphics",mode:s.mode,alt:f,width:a,height:c,totalheight:d,src:z}:s.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(i,t)=>{var r=pn(i.height,t),s=0;i.totalheight.number>0&&(s=pn(i.totalheight,t)-r);var a=0;i.width.number>0&&(a=pn(i.width,t));var c={height:fe(r+s)};a>0&&(c.width=fe(a)),s>0&&(c.verticalAlign=fe(-s));var d=new _8(i.src,i.alt,c);return d.height=r,d.depth=s,d},mathmlBuilder:(i,t)=>{var r=new ue("mglyph",[]);r.setAttribute("alt",i.alt);var s=pn(i.height,t),a=0;if(i.totalheight.number>0&&(a=pn(i.totalheight,t)-s,r.setAttribute("valign",fe(-a))),r.setAttribute("height",fe(s+a)),i.width.number>0){var c=pn(i.width,t);r.setAttribute("width",fe(c))}return r.setAttribute("src",i.src),r}});xe({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(i,t){var{parser:r,funcName:s}=i,a=Le(t[0],"size");if(r.settings.strict){var c=s[1]==="m",d=a.value.unit==="mu";c?(d||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" supports only mu units, "+("not "+a.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" works only in math mode")):d&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+s+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:a.value}},htmlBuilder(i,t){return $p(i.dimension,t)},mathmlBuilder(i,t){var r=pn(i.dimension,t);return new qp(r)}});xe({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(i,t)=>{var{parser:r,funcName:s}=i,a=t[0];return{type:"lap",mode:r.mode,alignment:s.slice(5),body:a}},htmlBuilder:(i,t)=>{var r;i.alignment==="clap"?(r=ae([],[Ke(i.body,t)]),r=ae(["inner"],[r],t)):r=ae(["inner"],[Ke(i.body,t)]);var s=ae(["fix"],[]),a=ae([i.alignment],[r,s],t),c=ae(["strut"]);return c.style.height=fe(a.height+a.depth),a.depth&&(c.style.verticalAlign=fe(-a.depth)),a.children.unshift(c),a=ae(["thinbox"],[a],t),ae(["mord","vbox"],[a],t)},mathmlBuilder:(i,t)=>{var r=new ue("mpadded",[Je(i.body,t)]);if(i.alignment!=="rlap"){var s=i.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",s+"width")}return r.setAttribute("width","0px"),r}});xe({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(i,t){var{funcName:r,parser:s}=i,a=s.mode;s.switchMode("math");var c=r==="\\("?"\\)":"$",d=s.parseExpression(!1,c);return s.expect(c),s.switchMode(a),{type:"styling",mode:s.mode,style:"text",body:d}}});xe({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(i,t){throw new ce("Mismatched "+i.funcName)}});var B1=(i,t)=>{switch(t.style.size){case Ie.DISPLAY.size:return i.display;case Ie.TEXT.size:return i.text;case Ie.SCRIPT.size:return i.script;case Ie.SCRIPTSCRIPT.size:return i.scriptscript;default:return i.text}};xe({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(i,t)=>{var{parser:r}=i;return{type:"mathchoice",mode:r.mode,display:yn(t[0]),text:yn(t[1]),script:yn(t[2]),scriptscript:yn(t[3])}},htmlBuilder:(i,t)=>{var r=B1(i,t),s=kn(r,t,!1);return ar(s)},mathmlBuilder:(i,t)=>{var r=B1(i,t);return Br(r,t)}});var Jp=(i,t,r,s,a,c,d)=>{i=ae([],[i]);var f=r&&or(r),h,v;if(t){var w=Ke(t,s.havingStyle(a.sup()),s);v={elem:w,kern:Math.max(s.fontMetrics().bigOpSpacing1,s.fontMetrics().bigOpSpacing3-w.depth)}}if(r){var $=Ke(r,s.havingStyle(a.sub()),s);h={elem:$,kern:Math.max(s.fontMetrics().bigOpSpacing2,s.fontMetrics().bigOpSpacing4-$.height)}}var k;if(v&&h){var z=s.fontMetrics().bigOpSpacing5+h.elem.height+h.elem.depth+h.kern+i.depth+d;k=Qe({positionType:"bottom",positionData:z,children:[{type:"kern",size:s.fontMetrics().bigOpSpacing5},{type:"elem",elem:h.elem,marginLeft:fe(-c)},{type:"kern",size:h.kern},{type:"elem",elem:i},{type:"kern",size:v.kern},{type:"elem",elem:v.elem,marginLeft:fe(c)},{type:"kern",size:s.fontMetrics().bigOpSpacing5}]})}else if(h){var T=i.height-d;k=Qe({positionType:"top",positionData:T,children:[{type:"kern",size:s.fontMetrics().bigOpSpacing5},{type:"elem",elem:h.elem,marginLeft:fe(-c)},{type:"kern",size:h.kern},{type:"elem",elem:i}]})}else if(v){var S=i.depth+d;k=Qe({positionType:"bottom",positionData:S,children:[{type:"elem",elem:i},{type:"kern",size:v.kern},{type:"elem",elem:v.elem,marginLeft:fe(c)},{type:"kern",size:s.fontMetrics().bigOpSpacing5}]})}else return i;var N=[k];if(h&&c!==0&&!f){var M=ae(["mspace"],[],s);M.style.marginRight=fe(c),N.unshift(M)}return ae(["mop","op-limits"],N,s)},em=new Set(["\\smallint"]),Oi=(i,t)=>{var r,s,a=!1,c;i.type==="supsub"?(r=i.sup,s=i.sub,c=Le(i.base,"op"),a=!0):c=Le(i,"op");var d=t.style,f=!1;d.size===Ie.DISPLAY.size&&c.symbol&&!em.has(c.name)&&(f=!0);var h;if(c.symbol){var v=f?"Size2-Regular":"Size1-Regular",w="";if((c.name==="\\oiint"||c.name==="\\oiiint")&&(w=c.name.slice(1),c.name=w==="oiint"?"\\iint":"\\iiint"),h=Ln(c.name,v,"math",t,["mop","op-symbol",f?"large-op":"small-op"]),w.length>0){var $=h.italic,k=kp(w+"Size"+(f?"2":"1"),t);h=Qe({positionType:"individualShift",children:[{type:"elem",elem:h,shift:0},{type:"elem",elem:k,shift:f?.08:0}]}),c.name="\\"+w,h.classes.unshift("mop"),h.italic=$}}else if(c.body){var z=kn(c.body,t,!0);z.length===1&&z[0]instanceof yt?(h=z[0],h.classes[0]="mop"):h=ae(["mop"],z,t)}else{for(var T=[],S=1;S<c.name.length;S++)T.push(hc(c.name[S],c.mode,t));h=ae(["mop"],T,t)}var N=0,M=0;return(h instanceof yt||c.name==="\\oiint"||c.name==="\\oiiint")&&!c.suppressBaseShift&&(N=(h.height-h.depth)/2-t.fontMetrics().axisHeight,M=h.italic),a?Jp(h,r,s,t,d,M,N):(N&&(h.style.position="relative",h.style.top=fe(N)),h)},Vo=(i,t)=>{var r;if(i.symbol)r=new ue("mo",[vt(i.name,i.mode)]),em.has(i.name)&&r.setAttribute("largeop","false");else if(i.body)r=new ue("mo",Jn(i.body,t));else{r=new ue("mi",[new xn(i.name.slice(1))]);var s=new ue("mo",[vt("⁡","text")]);i.parentIsSupSub?r=new ue("mrow",[r,s]):r=jp([r,s])}return r},hx={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};xe({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(i,t)=>{var{parser:r,funcName:s}=i,a=s;return a.length===1&&(a=hx[a]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:Oi,mathmlBuilder:Vo});xe({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(i,t)=>{var{parser:r}=i,s=t[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:yn(s)}},htmlBuilder:Oi,mathmlBuilder:Vo});var gx={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};xe({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(i){var{parser:t,funcName:r}=i;return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Oi,mathmlBuilder:Vo});xe({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(i){var{parser:t,funcName:r}=i;return{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Oi,mathmlBuilder:Vo});xe({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(i){var{parser:t,funcName:r}=i,s=r;return s.length===1&&(s=gx[s]),{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:s}},htmlBuilder:Oi,mathmlBuilder:Vo});var nm=(i,t)=>{var r,s,a=!1,c;i.type==="supsub"?(r=i.sup,s=i.sub,c=Le(i.base,"operatorname"),a=!0):c=Le(i,"operatorname");var d;if(c.body.length>0){for(var f=c.body.map($=>{var k=$.text;return typeof k=="string"?{type:"textord",mode:$.mode,text:k}:$}),h=kn(f,t.withFont("mathrm"),!0),v=0;v<h.length;v++){var w=h[v];w instanceof yt&&(w.text=w.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}d=ae(["mop"],h,t)}else d=ae(["mop"],[],t);return a?Jp(d,r,s,t,t.style,0,0):d},yx=(i,t)=>{for(var r=Jn(i.body,t.withFont("mathrm")),s=!0,a=0;a<r.length;a++){var c=r[a];if(!(c instanceof qp))if(c instanceof ue)switch(c.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var d=c.children[0];c.children.length===1&&d instanceof xn?d.text=d.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):s=!1;break}default:s=!1}else s=!1}if(s){var f=r.map(w=>w.toText()).join("");r=[new xn(f)]}var h=new ue("mi",r);h.setAttribute("mathvariant","normal");var v=new ue("mo",[vt("⁡","text")]);return i.parentIsSupSub?new ue("mrow",[h,v]):jp([h,v])};xe({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(i,t)=>{var{parser:r,funcName:s}=i,a=t[0];return{type:"operatorname",mode:r.mode,body:yn(a),alwaysHandleSupSub:s==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:nm,mathmlBuilder:yx});_("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");oi({type:"ordgroup",htmlBuilder(i,t){return i.semisimple?ar(kn(i.body,t,!1)):ae(["mord"],kn(i.body,t,!0),t)},mathmlBuilder(i,t){return Br(i.body,t,!0)}});xe({type:"overline",names:["\\overline"],props:{numArgs:1},handler(i,t){var{parser:r}=i,s=t[0];return{type:"overline",mode:r.mode,body:s}},htmlBuilder(i,t){var r=Ke(i.body,t.havingCrampedStyle()),s=Ni("overline-line",t),a=t.fontMetrics().defaultRuleThickness,c=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*a},{type:"elem",elem:s},{type:"kern",size:a}]});return ae(["mord","overline"],[c],t)},mathmlBuilder(i,t){var r=new ue("mo",[new xn("‾")]);r.setAttribute("stretchy","true");var s=new ue("mover",[Je(i.body,t),r]);return s.setAttribute("accent","true"),s}});xe({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(i,t)=>{var{parser:r}=i,s=t[0];return{type:"phantom",mode:r.mode,body:yn(s)}},htmlBuilder:(i,t)=>{var r=kn(i.body,t.withPhantom(),!1);return ar(r)},mathmlBuilder:(i,t)=>{var r=Jn(i.body,t);return new ue("mphantom",r)}});xe({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(i,t)=>{var{parser:r}=i,s=t[0];return{type:"hphantom",mode:r.mode,body:s}},htmlBuilder:(i,t)=>{var r=ae([],[Ke(i.body,t.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var s=0;s<r.children.length;s++)r.children[s].height=0,r.children[s].depth=0;return r=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:r}]}),ae(["mord"],[r],t)},mathmlBuilder:(i,t)=>{var r=Jn(yn(i.body),t),s=new ue("mphantom",r),a=new ue("mpadded",[s]);return a.setAttribute("height","0px"),a.setAttribute("depth","0px"),a}});xe({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(i,t)=>{var{parser:r}=i,s=t[0];return{type:"vphantom",mode:r.mode,body:s}},htmlBuilder:(i,t)=>{var r=ae(["inner"],[Ke(i.body,t.withPhantom())]),s=ae(["fix"],[]);return ae(["mord","rlap"],[r,s],t)},mathmlBuilder:(i,t)=>{var r=Jn(yn(i.body),t),s=new ue("mphantom",r),a=new ue("mpadded",[s]);return a.setAttribute("width","0px"),a}});xe({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(i,t){var{parser:r}=i,s=Le(t[0],"size").value,a=t[1];return{type:"raisebox",mode:r.mode,dy:s,body:a}},htmlBuilder(i,t){var r=Ke(i.body,t),s=pn(i.dy,t);return Qe({positionType:"shift",positionData:-s,children:[{type:"elem",elem:r}]})},mathmlBuilder(i,t){var r=new ue("mpadded",[Je(i.body,t)]),s=i.dy.number+i.dy.unit;return r.setAttribute("voffset",s),r}});xe({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(i){var{parser:t}=i;return{type:"internal",mode:t.mode}}});xe({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(i,t,r){var{parser:s}=i,a=r[0],c=Le(t[0],"size"),d=Le(t[1],"size");return{type:"rule",mode:s.mode,shift:a&&Le(a,"size").value,width:c.value,height:d.value}},htmlBuilder(i,t){var r=ae(["mord","rule"],[],t),s=pn(i.width,t),a=pn(i.height,t),c=i.shift?pn(i.shift,t):0;return r.style.borderRightWidth=fe(s),r.style.borderTopWidth=fe(a),r.style.bottom=fe(c),r.width=s,r.height=a+c,r.depth=-c,r.maxFontSize=a*1.125*t.sizeMultiplier,r},mathmlBuilder(i,t){var r=pn(i.width,t),s=pn(i.height,t),a=i.shift?pn(i.shift,t):0,c=t.color&&t.getColor()||"black",d=new ue("mspace");d.setAttribute("mathbackground",c),d.setAttribute("width",fe(r)),d.setAttribute("height",fe(s));var f=new ue("mpadded",[d]);return a>=0?f.setAttribute("height",fe(a)):(f.setAttribute("height",fe(a)),f.setAttribute("depth",fe(-a))),f.setAttribute("voffset",fe(a)),f}});function tm(i,t,r){for(var s=kn(i,t,!1),a=t.sizeMultiplier/r.sizeMultiplier,c=0;c<s.length;c++){var d=s[c].classes.indexOf("sizing");d<0?Array.prototype.push.apply(s[c].classes,t.sizingClasses(r)):s[c].classes[d+1]==="reset-size"+t.size&&(s[c].classes[d+1]="reset-size"+r.size),s[c].height*=a,s[c].depth*=a}return ar(s)}var N1=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],vx=(i,t)=>{var r=t.havingSize(i.size);return tm(i.body,r,t)};xe({type:"sizing",names:N1,props:{numArgs:0,allowedInText:!0},handler:(i,t)=>{var{breakOnTokenText:r,funcName:s,parser:a}=i,c=a.parseExpression(!1,r);return{type:"sizing",mode:a.mode,size:N1.indexOf(s)+1,body:c}},htmlBuilder:vx,mathmlBuilder:(i,t)=>{var r=t.havingSize(i.size),s=Jn(i.body,r),a=new ue("mstyle",s);return a.setAttribute("mathsize",fe(r.sizeMultiplier)),a}});xe({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(i,t,r)=>{var{parser:s}=i,a=!1,c=!1,d=r[0]&&Le(r[0],"ordgroup");if(d)for(var f="",h=0;h<d.body.length;++h){var v=d.body[h];if(f=v.text,f==="t")a=!0;else if(f==="b")c=!0;else{a=!1,c=!1;break}}else a=!0,c=!0;var w=t[0];return{type:"smash",mode:s.mode,body:w,smashHeight:a,smashDepth:c}},htmlBuilder:(i,t)=>{var r=ae([],[Ke(i.body,t)]);if(!i.smashHeight&&!i.smashDepth)return r;if(i.smashHeight&&(r.height=0,r.children))for(var s=0;s<r.children.length;s++)r.children[s].height=0;if(i.smashDepth&&(r.depth=0,r.children))for(var a=0;a<r.children.length;a++)r.children[a].depth=0;var c=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return ae(["mord"],[c],t)},mathmlBuilder:(i,t)=>{var r=new ue("mpadded",[Je(i.body,t)]);return i.smashHeight&&r.setAttribute("height","0px"),i.smashDepth&&r.setAttribute("depth","0px"),r}});xe({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(i,t,r){var{parser:s}=i,a=r[0],c=t[0];return{type:"sqrt",mode:s.mode,body:c,index:a}},htmlBuilder(i,t){var r=Ke(i.body,t.havingCrampedStyle());r.height===0&&(r.height=t.fontMetrics().xHeight),r=Ii(r,t);var s=t.fontMetrics(),a=s.defaultRuleThickness,c=a;t.style.id<Ie.TEXT.id&&(c=t.fontMetrics().xHeight);var d=a+c/4,f=r.height+r.depth+d+a,{span:h,ruleWidth:v,advanceWidth:w}=ix(f,t),$=h.height-v;$>r.height+r.depth+d&&(d=(d+$-r.height-r.depth)/2);var k=h.height-r.height-d-v;r.style.paddingLeft=fe(w);var z=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+k)},{type:"elem",elem:h},{type:"kern",size:v}]});if(i.index){var T=t.havingStyle(Ie.SCRIPTSCRIPT),S=Ke(i.index,T,t),N=.6*(z.height-z.depth),M=Qe({positionType:"shift",positionData:-N,children:[{type:"elem",elem:S}]}),V=ae(["root"],[M]);return ae(["mord","sqrt"],[V,z],t)}else return ae(["mord","sqrt"],[z],t)},mathmlBuilder(i,t){var{body:r,index:s}=i;return s?new ue("mroot",[Je(r,t),Je(s,t)]):new ue("msqrt",[Je(r,t)])}});var I1={display:Ie.DISPLAY,text:Ie.TEXT,script:Ie.SCRIPT,scriptscript:Ie.SCRIPTSCRIPT};xe({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i,t){var{breakOnTokenText:r,funcName:s,parser:a}=i,c=a.parseExpression(!0,r),d=s.slice(1,s.length-5);return{type:"styling",mode:a.mode,style:d,body:c}},htmlBuilder(i,t){var r=I1[i.style],s=t.havingStyle(r).withFont("");return tm(i.body,s,t)},mathmlBuilder(i,t){var r=I1[i.style],s=t.havingStyle(r),a=Jn(i.body,s),c=new ue("mstyle",a),d={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},f=d[i.style];return c.setAttribute("scriptlevel",f[0]),c.setAttribute("displaystyle",f[1]),c}});var xx=function(t,r){var s=t.base;if(s)if(s.type==="op"){var a=s.limits&&(r.style.size===Ie.DISPLAY.size||s.alwaysHandleSupSub);return a?Oi:null}else if(s.type==="operatorname"){var c=s.alwaysHandleSupSub&&(r.style.size===Ie.DISPLAY.size||s.limits);return c?nm:null}else{if(s.type==="accent")return or(s.base)?wc:null;if(s.type==="horizBrace"){var d=!t.sub;return d===s.isOver?Xp:null}else return null}else return null};oi({type:"supsub",htmlBuilder(i,t){var r=xx(i,t);if(r)return r(i,t);var{base:s,sup:a,sub:c}=i,d=Ke(s,t),f,h,v=t.fontMetrics(),w=0,$=0,k=s&&or(s);if(a){var z=t.havingStyle(t.style.sup());f=Ke(a,z,t),k||(w=d.height-z.fontMetrics().supDrop*z.sizeMultiplier/t.sizeMultiplier)}if(c){var T=t.havingStyle(t.style.sub());h=Ke(c,T,t),k||($=d.depth+T.fontMetrics().subDrop*T.sizeMultiplier/t.sizeMultiplier)}var S;t.style===Ie.DISPLAY?S=v.sup1:t.style.cramped?S=v.sup3:S=v.sup2;var N=t.sizeMultiplier,M=fe(.5/v.ptPerEm/N),V=null;if(h){var O=i.base&&i.base.type==="op"&&i.base.name&&(i.base.name==="\\oiint"||i.base.name==="\\oiiint");(d instanceof yt||O)&&(V=fe(-d.italic))}var D;if(f&&h){w=Math.max(w,S,f.depth+.25*v.xHeight),$=Math.max($,v.sub2);var E=v.defaultRuleThickness,W=4*E;if(w-f.depth-(h.height-$)<W){$=W-(w-f.depth)+h.height;var L=.8*v.xHeight-(w-f.depth);L>0&&(w+=L,$-=L)}var Q=[{type:"elem",elem:h,shift:$,marginRight:M,marginLeft:V},{type:"elem",elem:f,shift:-w,marginRight:M}];D=Qe({positionType:"individualShift",children:Q})}else if(h){$=Math.max($,v.sub1,h.height-.8*v.xHeight);var X=[{type:"elem",elem:h,marginLeft:V,marginRight:M}];D=Qe({positionType:"shift",positionData:$,children:X})}else if(f)w=Math.max(w,S,f.depth+.25*v.xHeight),D=Qe({positionType:"shift",positionData:-w,children:[{type:"elem",elem:f,marginRight:M}]});else throw new Error("supsub must have either sup or sub.");var Y=Yl(d,"right")||"mord";return ae([Y],[d,ae(["msupsub"],[D])],t)},mathmlBuilder(i,t){var r=!1,s,a;i.base&&i.base.type==="horizBrace"&&(a=!!i.sup,a===i.base.isOver&&(r=!0,s=i.base.isOver)),i.base&&(i.base.type==="op"||i.base.type==="operatorname")&&(i.base.parentIsSupSub=!0);var c=[Je(i.base,t)];i.sub&&c.push(Je(i.sub,t)),i.sup&&c.push(Je(i.sup,t));var d;if(r)d=s?"mover":"munder";else if(i.sub)if(i.sup){var v=i.base;v&&v.type==="op"&&v.limits&&t.style===Ie.DISPLAY||v&&v.type==="operatorname"&&v.alwaysHandleSupSub&&(t.style===Ie.DISPLAY||v.limits)?d="munderover":d="msubsup"}else{var h=i.base;h&&h.type==="op"&&h.limits&&(t.style===Ie.DISPLAY||h.alwaysHandleSupSub)||h&&h.type==="operatorname"&&h.alwaysHandleSupSub&&(h.limits||t.style===Ie.DISPLAY)?d="munder":d="msub"}else{var f=i.base;f&&f.type==="op"&&f.limits&&(t.style===Ie.DISPLAY||f.alwaysHandleSupSub)||f&&f.type==="operatorname"&&f.alwaysHandleSupSub&&(f.limits||t.style===Ie.DISPLAY)?d="mover":d="msup"}return new ue(d,c)}});oi({type:"atom",htmlBuilder(i,t){return hc(i.text,i.mode,t,["m"+i.family])},mathmlBuilder(i,t){var r=new ue("mo",[vt(i.text,i.mode)]);if(i.family==="bin"){var s=vc(i,t);s==="bold-italic"&&r.setAttribute("mathvariant",s)}else i.family==="punct"?r.setAttribute("separator","true"):(i.family==="open"||i.family==="close")&&r.setAttribute("stretchy","false");return r}});var rm={mi:"italic",mn:"normal",mtext:"normal"};oi({type:"mathord",htmlBuilder(i,t){return Ta(i,t,"mathord")},mathmlBuilder(i,t){var r=new ue("mi",[vt(i.text,i.mode,t)]),s=vc(i,t)||"italic";return s!==rm[r.type]&&r.setAttribute("mathvariant",s),r}});oi({type:"textord",htmlBuilder(i,t){return Ta(i,t,"textord")},mathmlBuilder(i,t){var r=vt(i.text,i.mode,t),s=vc(i,t)||"normal",a;return i.mode==="text"?a=new ue("mtext",[r]):/[0-9]/.test(i.text)?a=new ue("mn",[r]):i.text==="\\prime"?a=new ue("mo",[r]):a=new ue("mi",[r]),s!==rm[a.type]&&a.setAttribute("mathvariant",s),a}});var Ll={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Ol={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};oi({type:"spacing",htmlBuilder(i,t){if(Ol.hasOwnProperty(i.text)){var r=Ol[i.text].className||"";if(i.mode==="text"){var s=Ta(i,t,"textord");return s.classes.push(r),s}else return ae(["mspace",r],[hc(i.text,i.mode,t)],t)}else{if(Ll.hasOwnProperty(i.text))return ae(["mspace",Ll[i.text]],[],t);throw new ce('Unknown type of space "'+i.text+'"')}},mathmlBuilder(i,t){var r;if(Ol.hasOwnProperty(i.text))r=new ue("mtext",[new xn(" ")]);else{if(Ll.hasOwnProperty(i.text))return new ue("mspace");throw new ce('Unknown type of space "'+i.text+'"')}return r}});var F1=()=>{var i=new ue("mtd",[]);return i.setAttribute("width","50%"),i};oi({type:"tag",mathmlBuilder(i,t){var r=new ue("mtable",[new ue("mtr",[F1(),new ue("mtd",[Br(i.body,t)]),F1(),new ue("mtd",[Br(i.tag,t)])])]);return r.setAttribute("width","100%"),r}});var L1={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},O1={"\\textbf":"textbf","\\textmd":"textmd"},wx={"\\textit":"textit","\\textup":"textup"},H1=(i,t)=>{var r=i.font;if(r){if(L1[r])return t.withTextFontFamily(L1[r]);if(O1[r])return t.withTextFontWeight(O1[r]);if(r==="\\emph")return t.fontShape==="textit"?t.withTextFontShape("textup"):t.withTextFontShape("textit")}else return t;return t.withTextFontShape(wx[r])};xe({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(i,t){var{parser:r,funcName:s}=i,a=t[0];return{type:"text",mode:r.mode,body:yn(a),font:s}},htmlBuilder(i,t){var r=H1(i,t),s=kn(i.body,r,!0);return ae(["mord","text"],s,r)},mathmlBuilder(i,t){var r=H1(i,t);return Br(i.body,r)}});xe({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(i,t){var{parser:r}=i;return{type:"underline",mode:r.mode,body:t[0]}},htmlBuilder(i,t){var r=Ke(i.body,t),s=Ni("underline-line",t),a=t.fontMetrics().defaultRuleThickness,c=Qe({positionType:"top",positionData:r.height,children:[{type:"kern",size:a},{type:"elem",elem:s},{type:"kern",size:3*a},{type:"elem",elem:r}]});return ae(["mord","underline"],[c],t)},mathmlBuilder(i,t){var r=new ue("mo",[new xn("‾")]);r.setAttribute("stretchy","true");var s=new ue("munder",[Je(i.body,t),r]);return s.setAttribute("accentunder","true"),s}});xe({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(i,t){var{parser:r}=i;return{type:"vcenter",mode:r.mode,body:t[0]}},htmlBuilder(i,t){var r=Ke(i.body,t),s=t.fontMetrics().axisHeight,a=.5*(r.height-s-(r.depth+s));return Qe({positionType:"shift",positionData:a,children:[{type:"elem",elem:r}]})},mathmlBuilder(i,t){return new ue("mpadded",[Je(i.body,t)],["vcenter"])}});xe({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(i,t,r){throw new ce("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(i,t){for(var r=W1(i),s=[],a=t.havingStyle(t.style.text()),c=0;c<r.length;c++){var d=r[c];d==="~"&&(d="\\textasciitilde"),s.push(Ln(d,"Typewriter-Regular",i.mode,a,["mord","texttt"]))}return ae(["mord","text"].concat(a.sizingClasses(t)),bp(s),a)},mathmlBuilder(i,t){var r=new xn(W1(i)),s=new ue("mtext",[r]);return s.setAttribute("mathvariant","monospace"),s}});var W1=i=>i.body.replace(/ /g,i.star?"␣":" "),Cr=zp,im=`[ \r
	]`,bx="\\\\[a-zA-Z@]+",$x="\\\\[^\uD800-\uDFFF]",_x="("+bx+")"+im+"*",kx=`\\\\(
|[ \r	]+
?)[ \r	]*`,tc="[̀-ͯ]",zx=new RegExp(tc+"+$"),Sx="("+im+"+)|"+(kx+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(tc+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(tc+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+_x)+("|"+$x+")");class G1{constructor(t,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=t,this.settings=r,this.tokenRegex=new RegExp(Sx,"g"),this.catcodes={"%":14,"~":13}}setCatcode(t,r){this.catcodes[t]=r}lex(){var t=this.input,r=this.tokenRegex.lastIndex;if(r===t.length)return new st("EOF",new Xn(this,r,r));var s=this.tokenRegex.exec(t);if(s===null||s.index!==r)throw new ce("Unexpected character: '"+t[r]+"'",new st(t[r],new Xn(this,r,r+1)));var a=s[6]||s[3]||(s[2]?"\\ ":" ");if(this.catcodes[a]===14){var c=t.indexOf(`
`,this.tokenRegex.lastIndex);return c===-1?(this.tokenRegex.lastIndex=t.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=c+1,this.lex()}return new st(a,new Xn(this,r,this.tokenRegex.lastIndex))}}class jx{constructor(t,r){t===void 0&&(t={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=t,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new ce("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var t=this.undefStack.pop();for(var r in t)t.hasOwnProperty(r)&&(t[r]==null?delete this.current[r]:this.current[r]=t[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(t){return this.current.hasOwnProperty(t)||this.builtins.hasOwnProperty(t)}get(t){return this.current.hasOwnProperty(t)?this.current[t]:this.builtins[t]}set(t,r,s){if(s===void 0&&(s=!1),s){for(var a=0;a<this.undefStack.length;a++)delete this.undefStack[a][t];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][t]=r)}else{var c=this.undefStack[this.undefStack.length-1];c&&!c.hasOwnProperty(t)&&(c[t]=this.current[t])}r==null?delete this.current[t]:this.current[t]=r}}var qx=Vp;_("\\noexpand",function(i){var t=i.popToken();return i.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}});_("\\expandafter",function(i){var t=i.popToken();return i.expandOnce(!0),{tokens:[t],numArgs:0}});_("\\@firstoftwo",function(i){var t=i.consumeArgs(2);return{tokens:t[0],numArgs:0}});_("\\@secondoftwo",function(i){var t=i.consumeArgs(2);return{tokens:t[1],numArgs:0}});_("\\@ifnextchar",function(i){var t=i.consumeArgs(3);i.consumeSpaces();var r=i.future();return t[0].length===1&&t[0][0].text===r.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}});_("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");_("\\TextOrMath",function(i){var t=i.consumeArgs(2);return i.mode==="text"?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var U1={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};_("\\char",function(i){var t=i.popToken(),r,s="";if(t.text==="'")r=8,t=i.popToken();else if(t.text==='"')r=16,t=i.popToken();else if(t.text==="`")if(t=i.popToken(),t.text[0]==="\\")s=t.text.charCodeAt(1);else{if(t.text==="EOF")throw new ce("\\char` missing argument");s=t.text.charCodeAt(0)}else r=10;if(r){if(s=U1[t.text],s==null||s>=r)throw new ce("Invalid base-"+r+" digit "+t.text);for(var a;(a=U1[i.future().text])!=null&&a<r;)s*=r,s+=a,i.popToken()}return"\\@char{"+s+"}"});var Sc=(i,t,r,s)=>{var a=i.consumeArg().tokens;if(a.length!==1)throw new ce("\\newcommand's first argument must be a macro name");var c=a[0].text,d=i.isDefined(c);if(d&&!t)throw new ce("\\newcommand{"+c+"} attempting to redefine "+(c+"; use \\renewcommand"));if(!d&&!r)throw new ce("\\renewcommand{"+c+"} when command "+c+" does not yet exist; use \\newcommand");var f=0;if(a=i.consumeArg().tokens,a.length===1&&a[0].text==="["){for(var h="",v=i.expandNextToken();v.text!=="]"&&v.text!=="EOF";)h+=v.text,v=i.expandNextToken();if(!h.match(/^\s*[0-9]+\s*$/))throw new ce("Invalid number of arguments: "+h);f=parseInt(h),a=i.consumeArg().tokens}return d&&s||i.macros.set(c,{tokens:a,numArgs:f}),""};_("\\newcommand",i=>Sc(i,!1,!0,!1));_("\\renewcommand",i=>Sc(i,!0,!1,!1));_("\\providecommand",i=>Sc(i,!0,!0,!0));_("\\message",i=>{var t=i.consumeArgs(1)[0];return console.log(t.reverse().map(r=>r.text).join("")),""});_("\\errmessage",i=>{var t=i.consumeArgs(1)[0];return console.error(t.reverse().map(r=>r.text).join("")),""});_("\\show",i=>{var t=i.popToken(),r=t.text;return console.log(t,i.macros.get(r),Cr[r],tn.math[r],tn.text[r]),""});_("\\bgroup","{");_("\\egroup","}");_("~","\\nobreakspace");_("\\lq","`");_("\\rq","'");_("\\aa","\\r a");_("\\AA","\\r A");_("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");_("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");_("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");_("ℬ","\\mathscr{B}");_("ℰ","\\mathscr{E}");_("ℱ","\\mathscr{F}");_("ℋ","\\mathscr{H}");_("ℐ","\\mathscr{I}");_("ℒ","\\mathscr{L}");_("ℳ","\\mathscr{M}");_("ℛ","\\mathscr{R}");_("ℭ","\\mathfrak{C}");_("ℌ","\\mathfrak{H}");_("ℨ","\\mathfrak{Z}");_("\\Bbbk","\\Bbb{k}");_("·","\\cdotp");_("\\llap","\\mathllap{\\textrm{#1}}");_("\\rlap","\\mathrlap{\\textrm{#1}}");_("\\clap","\\mathclap{\\textrm{#1}}");_("\\mathstrut","\\vphantom{(}");_("\\underbar","\\underline{\\text{#1}}");_("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');_("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");_("\\ne","\\neq");_("≠","\\neq");_("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");_("∉","\\notin");_("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");_("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");_("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");_("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");_("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");_("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");_("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");_("⟂","\\perp");_("‼","\\mathclose{!\\mkern-0.8mu!}");_("∌","\\notni");_("⌜","\\ulcorner");_("⌝","\\urcorner");_("⌞","\\llcorner");_("⌟","\\lrcorner");_("©","\\copyright");_("®","\\textregistered");_("️","\\textregistered");_("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');_("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');_("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');_("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');_("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");_("⋮","\\vdots");_("\\varGamma","\\mathit{\\Gamma}");_("\\varDelta","\\mathit{\\Delta}");_("\\varTheta","\\mathit{\\Theta}");_("\\varLambda","\\mathit{\\Lambda}");_("\\varXi","\\mathit{\\Xi}");_("\\varPi","\\mathit{\\Pi}");_("\\varSigma","\\mathit{\\Sigma}");_("\\varUpsilon","\\mathit{\\Upsilon}");_("\\varPhi","\\mathit{\\Phi}");_("\\varPsi","\\mathit{\\Psi}");_("\\varOmega","\\mathit{\\Omega}");_("\\substack","\\begin{subarray}{c}#1\\end{subarray}");_("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");_("\\boxed","\\fbox{$\\displaystyle{#1}$}");_("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");_("\\implies","\\DOTSB\\;\\Longrightarrow\\;");_("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");_("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");_("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var V1={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},Tx=new Set(["bin","rel"]);_("\\dots",function(i){var t="\\dotso",r=i.expandAfterFuture().text;return r in V1?t=V1[r]:(r.slice(0,4)==="\\not"||r in tn.math&&Tx.has(tn.math[r].group))&&(t="\\dotsb"),t});var jc={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};_("\\dotso",function(i){var t=i.future().text;return t in jc?"\\ldots\\,":"\\ldots"});_("\\dotsc",function(i){var t=i.future().text;return t in jc&&t!==","?"\\ldots\\,":"\\ldots"});_("\\cdots",function(i){var t=i.future().text;return t in jc?"\\@cdots\\,":"\\@cdots"});_("\\dotsb","\\cdots");_("\\dotsm","\\cdots");_("\\dotsi","\\!\\cdots");_("\\dotsx","\\ldots\\,");_("\\DOTSI","\\relax");_("\\DOTSB","\\relax");_("\\DOTSX","\\relax");_("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");_("\\,","\\tmspace+{3mu}{.1667em}");_("\\thinspace","\\,");_("\\>","\\mskip{4mu}");_("\\:","\\tmspace+{4mu}{.2222em}");_("\\medspace","\\:");_("\\;","\\tmspace+{5mu}{.2777em}");_("\\thickspace","\\;");_("\\!","\\tmspace-{3mu}{.1667em}");_("\\negthinspace","\\!");_("\\negmedspace","\\tmspace-{4mu}{.2222em}");_("\\negthickspace","\\tmspace-{5mu}{.277em}");_("\\enspace","\\kern.5em ");_("\\enskip","\\hskip.5em\\relax");_("\\quad","\\hskip1em\\relax");_("\\qquad","\\hskip2em\\relax");_("\\tag","\\@ifstar\\tag@literal\\tag@paren");_("\\tag@paren","\\tag@literal{({#1})}");_("\\tag@literal",i=>{if(i.macros.get("\\df@tag"))throw new ce("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});_("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");_("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");_("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");_("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");_("\\newline","\\\\\\relax");_("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var om=fe(Nt["Main-Regular"][84][1]-.7*Nt["Main-Regular"][65][1]);_("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+om+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");_("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+om+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");_("\\hspace","\\@ifstar\\@hspacer\\@hspace");_("\\@hspace","\\hskip #1\\relax");_("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");_("\\ordinarycolon",":");_("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");_("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');_("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');_("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');_("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');_("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');_("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');_("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');_("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');_("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');_("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');_("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');_("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');_("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');_("∷","\\dblcolon");_("∹","\\eqcolon");_("≔","\\coloneqq");_("≕","\\eqqcolon");_("⩴","\\Coloneqq");_("\\ratio","\\vcentcolon");_("\\coloncolon","\\dblcolon");_("\\colonequals","\\coloneqq");_("\\coloncolonequals","\\Coloneqq");_("\\equalscolon","\\eqqcolon");_("\\equalscoloncolon","\\Eqqcolon");_("\\colonminus","\\coloneq");_("\\coloncolonminus","\\Coloneq");_("\\minuscolon","\\eqcolon");_("\\minuscoloncolon","\\Eqcolon");_("\\coloncolonapprox","\\Colonapprox");_("\\coloncolonsim","\\Colonsim");_("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");_("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");_("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");_("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");_("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");_("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");_("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");_("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");_("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");_("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");_("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");_("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");_("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");_("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");_("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");_("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");_("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");_("\\nleqq","\\html@mathml{\\@nleqq}{≰}");_("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");_("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");_("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");_("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");_("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");_("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");_("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");_("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");_("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");_("\\imath","\\html@mathml{\\@imath}{ı}");_("\\jmath","\\html@mathml{\\@jmath}{ȷ}");_("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");_("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");_("⟦","\\llbracket");_("⟧","\\rrbracket");_("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");_("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");_("⦃","\\lBrace");_("⦄","\\rBrace");_("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");_("⦵","\\minuso");_("\\darr","\\downarrow");_("\\dArr","\\Downarrow");_("\\Darr","\\Downarrow");_("\\lang","\\langle");_("\\rang","\\rangle");_("\\uarr","\\uparrow");_("\\uArr","\\Uparrow");_("\\Uarr","\\Uparrow");_("\\N","\\mathbb{N}");_("\\R","\\mathbb{R}");_("\\Z","\\mathbb{Z}");_("\\alef","\\aleph");_("\\alefsym","\\aleph");_("\\Alpha","\\mathrm{A}");_("\\Beta","\\mathrm{B}");_("\\bull","\\bullet");_("\\Chi","\\mathrm{X}");_("\\clubs","\\clubsuit");_("\\cnums","\\mathbb{C}");_("\\Complex","\\mathbb{C}");_("\\Dagger","\\ddagger");_("\\diamonds","\\diamondsuit");_("\\empty","\\emptyset");_("\\Epsilon","\\mathrm{E}");_("\\Eta","\\mathrm{H}");_("\\exist","\\exists");_("\\harr","\\leftrightarrow");_("\\hArr","\\Leftrightarrow");_("\\Harr","\\Leftrightarrow");_("\\hearts","\\heartsuit");_("\\image","\\Im");_("\\infin","\\infty");_("\\Iota","\\mathrm{I}");_("\\isin","\\in");_("\\Kappa","\\mathrm{K}");_("\\larr","\\leftarrow");_("\\lArr","\\Leftarrow");_("\\Larr","\\Leftarrow");_("\\lrarr","\\leftrightarrow");_("\\lrArr","\\Leftrightarrow");_("\\Lrarr","\\Leftrightarrow");_("\\Mu","\\mathrm{M}");_("\\natnums","\\mathbb{N}");_("\\Nu","\\mathrm{N}");_("\\Omicron","\\mathrm{O}");_("\\plusmn","\\pm");_("\\rarr","\\rightarrow");_("\\rArr","\\Rightarrow");_("\\Rarr","\\Rightarrow");_("\\real","\\Re");_("\\reals","\\mathbb{R}");_("\\Reals","\\mathbb{R}");_("\\Rho","\\mathrm{P}");_("\\sdot","\\cdot");_("\\sect","\\S");_("\\spades","\\spadesuit");_("\\sub","\\subset");_("\\sube","\\subseteq");_("\\supe","\\supseteq");_("\\Tau","\\mathrm{T}");_("\\thetasym","\\vartheta");_("\\weierp","\\wp");_("\\Zeta","\\mathrm{Z}");_("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");_("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");_("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");_("\\bra","\\mathinner{\\langle{#1}|}");_("\\ket","\\mathinner{|{#1}\\rangle}");_("\\braket","\\mathinner{\\langle{#1}\\rangle}");_("\\Bra","\\left\\langle#1\\right|");_("\\Ket","\\left|#1\\right\\rangle");var sm=i=>t=>{var r=t.consumeArg().tokens,s=t.consumeArg().tokens,a=t.consumeArg().tokens,c=t.consumeArg().tokens,d=t.macros.get("|"),f=t.macros.get("\\|");t.macros.beginGroup();var h=$=>k=>{i&&(k.macros.set("|",d),a.length&&k.macros.set("\\|",f));var z=$;if(!$&&a.length){var T=k.future();T.text==="|"&&(k.popToken(),z=!0)}return{tokens:z?a:s,numArgs:0}};t.macros.set("|",h(!1)),a.length&&t.macros.set("\\|",h(!0));var v=t.consumeArg().tokens,w=t.expandTokens([...c,...v,...r]);return t.macros.endGroup(),{tokens:w.reverse(),numArgs:0}};_("\\bra@ket",sm(!1));_("\\bra@set",sm(!0));_("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");_("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");_("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");_("\\angln","{\\angl n}");_("\\blue","\\textcolor{##6495ed}{#1}");_("\\orange","\\textcolor{##ffa500}{#1}");_("\\pink","\\textcolor{##ff00af}{#1}");_("\\red","\\textcolor{##df0030}{#1}");_("\\green","\\textcolor{##28ae7b}{#1}");_("\\gray","\\textcolor{gray}{#1}");_("\\purple","\\textcolor{##9d38bd}{#1}");_("\\blueA","\\textcolor{##ccfaff}{#1}");_("\\blueB","\\textcolor{##80f6ff}{#1}");_("\\blueC","\\textcolor{##63d9ea}{#1}");_("\\blueD","\\textcolor{##11accd}{#1}");_("\\blueE","\\textcolor{##0c7f99}{#1}");_("\\tealA","\\textcolor{##94fff5}{#1}");_("\\tealB","\\textcolor{##26edd5}{#1}");_("\\tealC","\\textcolor{##01d1c1}{#1}");_("\\tealD","\\textcolor{##01a995}{#1}");_("\\tealE","\\textcolor{##208170}{#1}");_("\\greenA","\\textcolor{##b6ffb0}{#1}");_("\\greenB","\\textcolor{##8af281}{#1}");_("\\greenC","\\textcolor{##74cf70}{#1}");_("\\greenD","\\textcolor{##1fab54}{#1}");_("\\greenE","\\textcolor{##0d923f}{#1}");_("\\goldA","\\textcolor{##ffd0a9}{#1}");_("\\goldB","\\textcolor{##ffbb71}{#1}");_("\\goldC","\\textcolor{##ff9c39}{#1}");_("\\goldD","\\textcolor{##e07d10}{#1}");_("\\goldE","\\textcolor{##a75a05}{#1}");_("\\redA","\\textcolor{##fca9a9}{#1}");_("\\redB","\\textcolor{##ff8482}{#1}");_("\\redC","\\textcolor{##f9685d}{#1}");_("\\redD","\\textcolor{##e84d39}{#1}");_("\\redE","\\textcolor{##bc2612}{#1}");_("\\maroonA","\\textcolor{##ffbde0}{#1}");_("\\maroonB","\\textcolor{##ff92c6}{#1}");_("\\maroonC","\\textcolor{##ed5fa6}{#1}");_("\\maroonD","\\textcolor{##ca337c}{#1}");_("\\maroonE","\\textcolor{##9e034e}{#1}");_("\\purpleA","\\textcolor{##ddd7ff}{#1}");_("\\purpleB","\\textcolor{##c6b9fc}{#1}");_("\\purpleC","\\textcolor{##aa87ff}{#1}");_("\\purpleD","\\textcolor{##7854ab}{#1}");_("\\purpleE","\\textcolor{##543b78}{#1}");_("\\mintA","\\textcolor{##f5f9e8}{#1}");_("\\mintB","\\textcolor{##edf2df}{#1}");_("\\mintC","\\textcolor{##e0e5cc}{#1}");_("\\grayA","\\textcolor{##f6f7f7}{#1}");_("\\grayB","\\textcolor{##f0f1f2}{#1}");_("\\grayC","\\textcolor{##e3e5e6}{#1}");_("\\grayD","\\textcolor{##d6d8da}{#1}");_("\\grayE","\\textcolor{##babec2}{#1}");_("\\grayF","\\textcolor{##888d93}{#1}");_("\\grayG","\\textcolor{##626569}{#1}");_("\\grayH","\\textcolor{##3b3e40}{#1}");_("\\grayI","\\textcolor{##21242c}{#1}");_("\\kaBlue","\\textcolor{##314453}{#1}");_("\\kaGreen","\\textcolor{##71B307}{#1}");var am={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class Ax{constructor(t,r,s){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(t),this.macros=new jx(qx,r.macros),this.mode=s,this.stack=[]}feed(t){this.lexer=new G1(t,this.settings)}switchMode(t){this.mode=t}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(t){this.stack.push(t)}pushTokens(t){this.stack.push(...t)}scanArgument(t){var r,s,a;if(t){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:a,end:s}=this.consumeArg(["]"])}else({tokens:a,start:r,end:s}=this.consumeArg());return this.pushToken(new st("EOF",s.loc)),this.pushTokens(a),new st("",Xn.range(r,s))}consumeSpaces(){for(;;){var t=this.future();if(t.text===" ")this.stack.pop();else break}}consumeArg(t){var r=[],s=t&&t.length>0;s||this.consumeSpaces();var a=this.future(),c,d=0,f=0;do{if(c=this.popToken(),r.push(c),c.text==="{")++d;else if(c.text==="}"){if(--d,d===-1)throw new ce("Extra }",c)}else if(c.text==="EOF")throw new ce("Unexpected end of input in a macro argument, expected '"+(t&&s?t[f]:"}")+"'",c);if(t&&s)if((d===0||d===1&&t[f]==="{")&&c.text===t[f]){if(++f,f===t.length){r.splice(-f,f);break}}else f=0}while(d!==0||s);return a.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:a,end:c}}consumeArgs(t,r){if(r){if(r.length!==t+1)throw new ce("The length of delimiters doesn't match the number of args!");for(var s=r[0],a=0;a<s.length;a++){var c=this.popToken();if(s[a]!==c.text)throw new ce("Use of the macro doesn't match its definition",c)}}for(var d=[],f=0;f<t;f++)d.push(this.consumeArg(r&&r[f+1]).tokens);return d}countExpansion(t){if(this.expansionCount+=t,this.expansionCount>this.settings.maxExpand)throw new ce("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(t){var r=this.popToken(),s=r.text,a=r.noexpand?null:this._getExpansion(s);if(a==null||t&&a.unexpandable){if(t&&a==null&&s[0]==="\\"&&!this.isDefined(s))throw new ce("Undefined control sequence: "+s);return this.pushToken(r),!1}this.countExpansion(1);var c=a.tokens,d=this.consumeArgs(a.numArgs,a.delimiters);if(a.numArgs){c=c.slice();for(var f=c.length-1;f>=0;--f){var h=c[f];if(h.text==="#"){if(f===0)throw new ce("Incomplete placeholder at end of macro body",h);if(h=c[--f],h.text==="#")c.splice(f+1,1);else if(/^[1-9]$/.test(h.text))c.splice(f,2,...d[+h.text-1]);else throw new ce("Not a valid argument number",h)}}}return this.pushTokens(c),c.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var t=this.stack.pop();return t.treatAsRelax&&(t.text="\\relax"),t}throw new Error}expandMacro(t){return this.macros.has(t)?this.expandTokens([new st(t)]):void 0}expandTokens(t){var r=[],s=this.stack.length;for(this.pushTokens(t);this.stack.length>s;)if(this.expandOnce(!0)===!1){var a=this.stack.pop();a.treatAsRelax&&(a.noexpand=!1,a.treatAsRelax=!1),r.push(a)}return this.countExpansion(r.length),r}expandMacroAsText(t){var r=this.expandMacro(t);return r&&r.map(s=>s.text).join("")}_getExpansion(t){var r=this.macros.get(t);if(r==null)return r;if(t.length===1){var s=this.lexer.catcodes[t];if(s!=null&&s!==13)return}var a=typeof r=="function"?r(this):r;if(typeof a=="string"){var c=0;if(a.includes("#"))for(var d=a.replace(/##/g,"");d.includes("#"+(c+1));)++c;for(var f=new G1(a,this.settings),h=[],v=f.lex();v.text!=="EOF";)h.push(v),v=f.lex();h.reverse();var w={tokens:h,numArgs:c};return w}return a}isDefined(t){return this.macros.has(t)||Cr.hasOwnProperty(t)||tn.math.hasOwnProperty(t)||tn.text.hasOwnProperty(t)||am.hasOwnProperty(t)}isExpandable(t){var r=this.macros.get(t);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:Cr.hasOwnProperty(t)&&!Cr[t].primitive}}var K1=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,ha=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),Hl={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},Z1={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class Ea{constructor(t,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new Ax(t,r,this.mode),this.settings=r,this.leftrightDepth=0}expect(t,r){if(r===void 0&&(r=!0),this.fetch().text!==t)throw new ce("Expected '"+t+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(t){this.mode=t,this.gullet.switchMode(t)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var t=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),t}finally{this.gullet.endGroups()}}subparse(t){var r=this.nextToken;this.consume(),this.gullet.pushToken(new st("}")),this.gullet.pushTokens(t);var s=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,s}parseExpression(t,r){for(var s=[];;){this.mode==="math"&&this.consumeSpaces();var a=this.fetch();if(Ea.endOfExpression.has(a.text)||r&&a.text===r||t&&Cr[a.text]&&Cr[a.text].infix)break;var c=this.parseAtom(r);if(c){if(c.type==="internal")continue}else break;s.push(c)}return this.mode==="text"&&this.formLigatures(s),this.handleInfixNodes(s)}handleInfixNodes(t){for(var r=-1,s,a=0;a<t.length;a++)if(t[a].type==="infix"){if(r!==-1)throw new ce("only one infix operator per group",t[a].token);r=a,s=t[a].replaceWith}if(r!==-1&&s){var c,d,f=t.slice(0,r),h=t.slice(r+1);f.length===1&&f[0].type==="ordgroup"?c=f[0]:c={type:"ordgroup",mode:this.mode,body:f},h.length===1&&h[0].type==="ordgroup"?d=h[0]:d={type:"ordgroup",mode:this.mode,body:h};var v;return s==="\\\\abovefrac"?v=this.callFunction(s,[c,t[r],d],[]):v=this.callFunction(s,[c,d],[]),[v]}else return t}handleSupSubscript(t){var r=this.fetch(),s=r.text;this.consume(),this.consumeSpaces();var a;do{var c;a=this.parseGroup(t)}while(((c=a)==null?void 0:c.type)==="internal");if(!a)throw new ce("Expected group after '"+s+"'",r);return a}formatUnsupportedCmd(t){for(var r=[],s=0;s<t.length;s++)r.push({type:"textord",mode:"text",text:t[s]});var a={type:"text",mode:this.mode,body:r},c={type:"color",mode:this.mode,color:this.settings.errorColor,body:[a]};return c}parseAtom(t){var r=this.parseGroup("atom",t);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var s,a;;){this.consumeSpaces();var c=this.fetch();if(c.text==="\\limits"||c.text==="\\nolimits"){if(r&&r.type==="op"){var d=c.text==="\\limits";r.limits=d,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=c.text==="\\limits");else throw new ce("Limit controls must follow a math operator",c);this.consume()}else if(c.text==="^"){if(s)throw new ce("Double superscript",c);s=this.handleSupSubscript("superscript")}else if(c.text==="_"){if(a)throw new ce("Double subscript",c);a=this.handleSupSubscript("subscript")}else if(c.text==="'"){if(s)throw new ce("Double superscript",c);var f={type:"textord",mode:this.mode,text:"\\prime"},h=[f];for(this.consume();this.fetch().text==="'";)h.push(f),this.consume();this.fetch().text==="^"&&h.push(this.handleSupSubscript("superscript")),s={type:"ordgroup",mode:this.mode,body:h}}else if(ha[c.text]){var v=K1.test(c.text),w=[];for(w.push(new st(ha[c.text])),this.consume();;){var $=this.fetch().text;if(!ha[$]||K1.test($)!==v)break;w.unshift(new st(ha[$])),this.consume()}var k=this.subparse(w);v?a={type:"ordgroup",mode:"math",body:k}:s={type:"ordgroup",mode:"math",body:k}}else break}return s||a?{type:"supsub",mode:this.mode,base:r,sup:s,sub:a}:r}parseFunction(t,r){var s=this.fetch(),a=s.text,c=Cr[a];if(!c)return null;if(this.consume(),r&&r!=="atom"&&!c.allowedInArgument)throw new ce("Got function '"+a+"' with no arguments"+(r?" as "+r:""),s);if(this.mode==="text"&&!c.allowedInText)throw new ce("Can't use function '"+a+"' in text mode",s);if(this.mode==="math"&&c.allowedInMath===!1)throw new ce("Can't use function '"+a+"' in math mode",s);var{args:d,optArgs:f}=this.parseArguments(a,c);return this.callFunction(a,d,f,s,t)}callFunction(t,r,s,a,c){var d={funcName:t,parser:this,token:a,breakOnTokenText:c},f=Cr[t];if(f&&f.handler)return f.handler(d,r,s);throw new ce("No function handler for "+t)}parseArguments(t,r){var s=r.numArgs+r.numOptionalArgs;if(s===0)return{args:[],optArgs:[]};for(var a=[],c=[],d=0;d<s;d++){var f=r.argTypes&&r.argTypes[d],h=d<r.numOptionalArgs;(r.primitive&&f==null||r.type==="sqrt"&&d===1&&c[0]==null)&&(f="primitive");var v=this.parseGroupOfType("argument to '"+t+"'",f,h);if(h)c.push(v);else if(v!=null)a.push(v);else throw new ce("Null argument, please report this as a bug")}return{args:a,optArgs:c}}parseGroupOfType(t,r,s){switch(r){case"color":return this.parseColorGroup(s);case"size":return this.parseSizeGroup(s);case"url":return this.parseUrlGroup(s);case"math":case"text":return this.parseArgumentGroup(s,r);case"hbox":{var a=this.parseArgumentGroup(s,"text");return a!=null?{type:"styling",mode:a.mode,body:[a],style:"text"}:null}case"raw":{var c=this.parseStringGroup("raw",s);return c!=null?{type:"raw",mode:"text",string:c.text}:null}case"primitive":{if(s)throw new ce("A primitive argument cannot be optional");var d=this.parseGroup(t);if(d==null)throw new ce("Expected group as "+t,this.fetch());return d}case"original":case null:case void 0:return this.parseArgumentGroup(s);default:throw new ce("Unknown group type as "+t,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(t,r){var s=this.gullet.scanArgument(r);if(s==null)return null;for(var a="",c;(c=this.fetch()).text!=="EOF";)a+=c.text,this.consume();return this.consume(),s.text=a,s}parseRegexGroup(t,r){for(var s=this.fetch(),a=s,c="",d;(d=this.fetch()).text!=="EOF"&&t.test(c+d.text);)a=d,c+=a.text,this.consume();if(c==="")throw new ce("Invalid "+r+": '"+s.text+"'",s);return s.range(a,c)}parseColorGroup(t){var r=this.parseStringGroup("color",t);if(r==null)return null;var s=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!s)throw new ce("Invalid color: '"+r.text+"'",r);var a=s[0];return/^[0-9a-f]{6}$/i.test(a)&&(a="#"+a),{type:"color-token",mode:this.mode,color:a}}parseSizeGroup(t){var r,s=!1;if(this.gullet.consumeSpaces(),!t&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",t),!r)return null;!t&&r.text.length===0&&(r.text="0pt",s=!0);var a=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!a)throw new ce("Invalid size: '"+r.text+"'",r);var c={number:+(a[1]+a[2]),unit:a[3]};if(!gp(c))throw new ce("Invalid unit: '"+c.unit+"'",r);return{type:"size",mode:this.mode,value:c,isBlank:s}}parseUrlGroup(t){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",t);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var s=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:s}}parseArgumentGroup(t,r){var s=this.gullet.scanArgument(t);if(s==null)return null;var a=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var c=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var d={type:"ordgroup",mode:this.mode,loc:s.loc,body:c};return r&&this.switchMode(a),d}parseGroup(t,r){var s=this.fetch(),a=s.text,c;if(a==="{"||a==="\\begingroup"){this.consume();var d=a==="{"?"}":"\\endgroup";this.gullet.beginGroup();var f=this.parseExpression(!1,d),h=this.fetch();this.expect(d),this.gullet.endGroup(),c={type:"ordgroup",mode:this.mode,loc:Xn.range(s,h),body:f,semisimple:a==="\\begingroup"||void 0}}else if(c=this.parseFunction(r,t)||this.parseSymbol(),c==null&&a[0]==="\\"&&!am.hasOwnProperty(a)){if(this.settings.throwOnError)throw new ce("Undefined control sequence: "+a,s);c=this.formatUnsupportedCmd(a),this.consume()}return c}formLigatures(t){for(var r=t.length-1,s=0;s<r;++s){var a=t[s],c=a.text;c==="-"&&t[s+1].text==="-"&&(s+1<r&&t[s+2].text==="-"?(t.splice(s,3,{type:"textord",mode:"text",loc:Xn.range(a,t[s+2]),text:"---"}),r-=2):(t.splice(s,2,{type:"textord",mode:"text",loc:Xn.range(a,t[s+1]),text:"--"}),r-=1)),(c==="'"||c==="`")&&t[s+1].text===c&&(t.splice(s,2,{type:"textord",mode:"text",loc:Xn.range(a,t[s+1]),text:c+c}),r-=1)}}parseSymbol(){var t=this.fetch(),r=t.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var s=r.slice(5),a=s.charAt(0)==="*";if(a&&(s=s.slice(1)),s.length<2||s.charAt(0)!==s.slice(-1))throw new ce(`\\verb assertion failed --
                    please report what input caused this bug`);return s=s.slice(1,-1),{type:"verb",mode:"text",body:s,star:a}}Z1.hasOwnProperty(r[0])&&!tn[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',t),r=Z1[r[0]]+r.slice(1));var c=zx.exec(r);c&&(r=r.substring(0,c.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var d;if(tn[this.mode][r]){this.settings.strict&&this.mode==="math"&&Zl.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',t);var f=tn[this.mode][r].group,h=Xn.range(t),v;if(S8.hasOwnProperty(f)){var w=f;v={type:"atom",mode:this.mode,family:w,loc:h,text:r}}else v={type:f,mode:this.mode,loc:h,text:r};d=v}else if(r.charCodeAt(0)>=128)this.settings.strict&&(hp(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',t):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),t)),d={type:"textord",mode:"text",loc:Xn.range(t),text:r};else return null;if(this.consume(),c)for(var $=0;$<c[0].length;$++){var k=c[0][$];if(!Hl[k])throw new ce("Unknown accent ' "+k+"'",t);var z=Hl[k][this.mode]||Hl[k].text;if(!z)throw new ce("Accent "+k+" unsupported in "+this.mode+" mode",t);d={type:"accent",mode:this.mode,loc:Xn.range(t),label:z,isStretchy:!1,isShifty:!0,base:d}}return d}}Ea.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var qc=function(t,r){if(!(typeof t=="string"||t instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var s=new Ea(t,r);delete s.gullet.macros.current["\\df@tag"];var a=s.parse();if(delete s.gullet.macros.current["\\current@color"],delete s.gullet.macros.current["\\color"],s.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new ce("\\tag works only in display equations");a=[{type:"tag",mode:"text",body:a,tag:s.subparse([new st("\\df@tag")])}]}return a},lm=function(t,r,s){r.textContent="";var a=Tc(t,s).toNode();r.appendChild(a)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),lm=function(){throw new ce("KaTeX doesn't work in quirks mode.")});var Mx=function(t,r){var s=Tc(t,r).toMarkup();return s},Px=function(t,r){var s=new dc(r);return qc(t,s)},cm=function(t,r,s){if(s.throwOnError||!(t instanceof ce))throw t;var a=ae(["katex-error"],[new yt(r)]);return a.setAttribute("title",t.toString()),a.setAttribute("style","color:"+s.errorColor),a},Tc=function(t,r){var s=new dc(r);try{var a=qc(t,s);return O8(a,t,s)}catch(c){return cm(c,t,s)}},Cx=function(t,r){var s=new dc(r);try{var a=qc(t,s);return H8(a,t,s)}catch(c){return cm(c,t,s)}},Rx="0.16.33",Dx={Span:Uo,Anchor:fc,SymbolNode:yt,SvgNode:ir,PathNode:Dr,LineNode:Kl},Q1={version:Rx,render:lm,renderToString:Mx,ParseError:ce,SETTINGS_SCHEMA:xa,__parse:Px,__renderToDomTree:Tc,__renderToHTMLTree:Cx,__setFontMetrics:v8,__defineSymbol:p,__defineFunction:xe,__defineMacro:_,__domTree:Dx};function At(i){if(!i)return"";let t=i.replace(/\$\$([\s\S]*?)\$\$/g,(r,s)=>{try{return Q1.renderToString(s.trim(),{displayMode:!0,throwOnError:!1})}catch(a){return`<span style="color:red">[latex error: ${a.message}]</span>`}});return t=t.replace(/\$([^$\n]+)\$/g,(r,s)=>{try{return Q1.renderToString(s.trim(),{displayMode:!1,throwOnError:!1})}catch(a){return`<span style="color:red">[latex error: ${a.message}]</span>`}}),t}function Ex({nodeId:i,nodes:t,adjacency:r,lang:s,SCOPE_COLORS:a,SCOPE_LABELS:c,SECTIONS:d,belief:f,evidence:h,onClose:v,onNavigate:w,onShowPath:$,onQuizMe:k,QUESTION_BANK:z}){var ne,ge,Ae;const[T,S]=F.useState(null),N=t.find(ye=>ye.id===i);if(!N)return null;const M=Object.fromEntries(t.map(ye=>[ye.id,ye])),V=ye=>{var he,te;return s==="pl"?(he=M[ye])==null?void 0:he.labelPl:(te=M[ye])==null?void 0:te.label},O=s==="pl"?N.labelPl:N.label,D=(a==null?void 0:a[N.scope])??"#4a9eff",E=((ne=c==null?void 0:c[N.scope])==null?void 0:ne[s==="pl"?"pl":"en"])??"",W=((ge=d==null?void 0:d[N.section])==null?void 0:ge.label)??"",L=r.prereqs[i]??[],Q=r.dependents[i]??[],X=N.resources??[],Y=f==null?void 0:f[i],re=T!=null?X[T]??null:null,J={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"};return y.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:R.bg,fontFamily:Ue,overflowY:"auto",animation:"topicSlideIn 0.2s ease"},children:[y.jsx("style",{children:`
        @keyframes topicSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}),y.jsxs("div",{style:{maxWidth:"min(580px, calc(100% - 32px))",width:"100%",margin:"0 auto",padding:"24px 16px 48px"},children:[y.jsxs("div",{style:{display:"flex",gap:8,marginBottom:28},children:[y.jsxs("button",{onClick:v,style:{padding:"10px 14px",fontSize:12,fontFamily:Ue,borderRadius:6,border:`1px solid ${R.border}`,background:"transparent",color:R.textDim,cursor:"pointer"},children:["← ",G("topicBack",s)]}),$&&L.length>0&&y.jsx("button",{onClick:()=>$(i),style:{padding:"10px 14px",fontSize:12,fontFamily:Ue,borderRadius:6,border:`1px solid ${D}30`,background:`${D}08`,color:D,cursor:"pointer"},children:G("topicLearnPath",s)})]}),y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[y.jsx("div",{style:{width:12,height:12,borderRadius:"50%",background:D,opacity:.8,flexShrink:0}}),y.jsx("h1",{style:{margin:0,fontSize:22,fontWeight:700,color:R.textPrimary,lineHeight:1.3},dangerouslySetInnerHTML:{__html:At(O??"")}})]}),y.jsxs("div",{style:{fontSize:12,color:R.textDim,marginBottom:16,paddingLeft:22,lineHeight:1.6},children:[W," · ",E," · ",G("level",s)," ",N.level]}),Y&&y.jsx(Bx,{nodeId:i,status:Y,evidence:h,adjacency:r,belief:f,nodes:t,lang:s,onNavigate:w}),N.body&&y.jsx(Nx,{body:N.body,lang:s}),k&&((Ae=z==null?void 0:z[i])==null?void 0:Ae.length)>0&&y.jsx("button",{onClick:()=>k(i),style:{width:"100%",padding:"12px 16px",marginBottom:20,fontSize:13,fontWeight:600,fontFamily:Ue,borderRadius:8,border:`1px solid ${D}40`,background:`${D}10`,color:D,cursor:"pointer",transition:"background 0.15s"},onMouseEnter:ye=>{ye.currentTarget.style.background=`${D}20`},onMouseLeave:ye=>{ye.currentTarget.style.background=`${D}10`},children:G("topicQuizMe",s)}),y.jsx(Y1,{title:G("prerequisites",s),color:"#4a9eff",empty:L.length===0,emptyText:G("noPrereqs",s),children:L.map(ye=>{var he;return y.jsx(X1,{label:V(ye),color:(a==null?void 0:a[(he=M[ye])==null?void 0:he.scope])??"#4a9eff",status:f==null?void 0:f[ye],onClick:()=>w(ye)},ye)})}),y.jsx(Y1,{title:G("enables",s),color:"#3dc9b0",empty:Q.length===0,emptyText:G("noDependents",s),children:Q.map(ye=>{var he;return y.jsx(X1,{label:V(ye),color:(a==null?void 0:a[(he=M[ye])==null?void 0:he.scope])??"#4a9eff",status:f==null?void 0:f[ye],onClick:()=>w(ye)},ye)})}),X.length>0&&y.jsxs("div",{style:{marginTop:28},children:[y.jsx("div",{style:{fontSize:13,fontWeight:600,color:"#FFD166",marginBottom:12},children:G("learningResources",s)}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:X.map((ye,he)=>{const te=s==="pl"?ye.titlePl:ye.titleEn,me=J[ye.type]??"#8a9dbe",de=ye.type==="interactive"?"resourceInteractive":ye.type==="video"?"resourceVideo":"resourceArticle";return y.jsxs("button",{onClick:()=>S(he),style:{display:"flex",alignItems:"center",gap:12,padding:"14px 16px",borderRadius:8,background:`${me}0a`,border:`1px solid ${me}25`,cursor:"pointer",textAlign:"left",width:"100%",fontFamily:Ue,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:P=>{P.currentTarget.style.background=`${me}18`,P.currentTarget.style.borderColor=`${me}50`},onMouseLeave:P=>{P.currentTarget.style.background=`${me}0a`,P.currentTarget.style.borderColor=`${me}25`},children:[y.jsx("span",{style:{fontSize:18,flexShrink:0},children:ye.type==="interactive"?"⬡":ye.type==="video"?"▶":"📄"}),y.jsxs("div",{style:{flex:1},children:[y.jsx("div",{style:{fontSize:13,color:R.textBody,fontWeight:500,lineHeight:1.4},children:te}),y.jsx("div",{style:{fontSize:10,color:me,marginTop:3,fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:G(de,s)})]}),y.jsx("span",{style:{fontSize:14,color:R.textFaint},children:"→"})]},he)})})]})]}),re&&y.jsx(Kv,{resource:re,lang:s,onClose:()=>S(null)})]})}function Bx({nodeId:i,status:t,evidence:r,adjacency:s,belief:a,nodes:c,lang:d,onNavigate:f}){const h=r==null?void 0:r[i],v=!!h,w=t==="known"?"#27ae60":"#e74c3c",$=t==="known"?"#2ecc71":"#ff6b6b",k=Object.fromEntries(c.map(S=>[S.id,S])),z=S=>{var N,M;return d==="pl"?(N=k[S])==null?void 0:N.labelPl:(M=k[S])==null?void 0:M.label};let T=null;return!v&&r&&(t==="known"?T=(s.dependents[i]??[]).find(N=>{var M;return((M=r[N])==null?void 0:M.correct)&&a[N]==="known"}):T=(s.prereqs[i]??[]).find(N=>r[N]&&!r[N].correct&&a[N]==="unknown")),y.jsxs("div",{style:{marginBottom:20,padding:"12px 14px",borderRadius:8,background:`${w}08`,border:`1px solid ${w}20`},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:[y.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:w}}),y.jsx("span",{style:{fontSize:13,fontWeight:600,color:$},children:G(t==="known"?"beliefKnown":"beliefUnknown",d)}),y.jsx("span",{style:{fontSize:10,padding:"2px 8px",borderRadius:4,background:v?`${w}15`:"#ffffff08",color:v?$:R.textFaint,border:`1px solid ${v?w+"30":R.border}`},children:v?d==="pl"?"sprawdzone":"tested":d==="pl"?"wywnioskowane":"inferred"})]}),v&&y.jsxs("div",{style:{fontSize:12,color:R.textDim,lineHeight:1.6},children:[h.correct?d==="pl"?"Odpowiedź poprawna":"Answered correctly":d==="pl"?"Odpowiedź niepoprawna":"Answered incorrectly",h.questionText&&y.jsx("div",{style:{marginTop:8,padding:"8px 10px",borderRadius:6,background:"#ffffff06",borderLeft:`2px solid ${w}40`,fontSize:12,color:R.textBody,lineHeight:1.6},children:y.jsx("span",{dangerouslySetInnerHTML:{__html:At(h.questionText)}})})]}),!v&&y.jsxs("div",{style:{fontSize:12,color:R.textDim,lineHeight:1.6},children:[t==="known"?d==="pl"?"Wywnioskowane — jeśli znasz trudniejszy temat, to prawdopodobnie znasz też ten.":"Inferred — if you know a harder topic, you likely know this one too.":d==="pl"?"Wywnioskowane — jeśli nie znasz podstawy, to tematy które na niej bazują też mogą sprawiać problem.":"Inferred — if you don't know the foundation, topics that build on it may also be difficult.",T&&y.jsxs("button",{onClick:()=>f(T),style:{display:"block",marginTop:6,padding:"10px 14px",borderRadius:4,background:"#ffffff06",border:`1px solid ${R.border}`,color:"#4a9eff",cursor:"pointer",fontSize:11,fontFamily:Ue},children:[d==="pl"?"Na podstawie:":"Based on:"," ",z(T)," →"]})]})]})}function Nx({body:i,lang:t}){var f,h;const[r,s]=F.useState(!1),a=i.split("<!-- example -->"),c=(f=a[0])==null?void 0:f.trim(),d=(h=a[1])==null?void 0:h.trim();return c?y.jsxs("div",{style:{marginBottom:20},children:[y.jsx("div",{style:{fontSize:13,color:R.textBody,lineHeight:1.7},dangerouslySetInnerHTML:{__html:At(c)}}),d&&y.jsxs(y.Fragment,{children:[y.jsx("button",{onClick:()=>s(v=>!v),style:{marginTop:10,padding:"10px 14px",fontSize:12,fontFamily:Ue,borderRadius:6,border:`1px solid ${r?"#FFD16640":R.border}`,background:r?"#FFD16610":"transparent",color:r?"#FFD166":R.textDim,cursor:"pointer",transition:"all 0.15s"},children:r?t==="pl"?"Schowaj przykład":"Hide example":t==="pl"?"Nie kumam — pokaż na liczbach":"Show me a concrete example"}),r&&y.jsx("div",{style:{marginTop:10,padding:"12px 14px",borderRadius:8,fontSize:13,background:"#FFD16608",border:"1px solid #FFD16620",color:"#e8d5a0",lineHeight:1.7},dangerouslySetInnerHTML:{__html:At(d)}})]})]}):null}function Y1({title:i,color:t,empty:r,emptyText:s,children:a}){return y.jsxs("div",{style:{marginTop:24},children:[y.jsx("div",{style:{fontSize:13,fontWeight:600,color:t,marginBottom:10},children:i}),r?y.jsx("div",{style:{fontSize:12,color:R.textFaint,fontStyle:"italic"},children:s}):y.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:a})]})}function X1({label:i,color:t,status:r,onClick:s}){const a=r==="known"?"#27ae60":r==="unknown"?"#e74c3c":null;return y.jsxs("button",{onClick:s,style:{display:"inline-flex",alignItems:"center",gap:6,padding:"7px 12px",borderRadius:6,background:`${t}0c`,border:`1px solid ${t}25`,cursor:"pointer",fontFamily:Ue,fontSize:12,color:R.textBody,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:c=>{c.currentTarget.style.background=`${t}1c`,c.currentTarget.style.borderColor=`${t}50`},onMouseLeave:c=>{c.currentTarget.style.background=`${t}0c`,c.currentTarget.style.borderColor=`${t}25`},children:[a&&y.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:a,flexShrink:0}}),y.jsx("span",{dangerouslySetInnerHTML:{__html:At(i??"")}})]})}function um({goalId:i,RAW_NODES:t,RAW_EDGES:r,SCOPE_COLORS:s,SCOPE_LABELS:a,SECTIONS:c,belief:d,evidence:f,lang:h,onSelectTopic:v,onClose:w}){const $=F.useMemo(()=>Wo(t,r),[t,r]),k=F.useMemo(()=>Object.fromEntries(t.map(O=>[O.id,O])),[t]),z=O=>{var D,E;return h==="pl"?(D=k[O])==null?void 0:D.labelPl:(E=k[O])==null?void 0:E.label};k[i];const T=F.useMemo(()=>{const O=new Set,D=[],E=[i];for(;E.length;){const Y=E.shift();if(!O.has(Y)&&k[Y]){O.add(Y),D.push(Y);for(const re of $.prereqs[Y]??[])O.has(re)||E.push(re)}}const W=new Set(D),L={};for(const Y of W)L[Y]=0;for(const Y of W)for(const re of $.dependents[Y]??[])W.has(re)&&(L[re]=(L[re]||0)+1);const Q=[],X=[];for(const Y of W)L[Y]===0&&X.push(Y);for(;X.length;){X.sort((re,J)=>{var ne,ge;return(((ne=k[re])==null?void 0:ne.level)??0)-(((ge=k[J])==null?void 0:ge.level)??0)});const Y=X.shift();Q.push(Y);for(const re of $.dependents[Y]??[])W.has(re)&&(L[re]--,L[re]===0&&X.push(re))}return Q},[i,$,k]),S=T.filter(O=>(d==null?void 0:d[O])==="known").length,N=T.filter(O=>(d==null?void 0:d[O])==="unknown").length,M=T.length,V=M>0?Math.round(S/M*100):0;return y.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:R.bg,fontFamily:Ue,overflowY:"auto",animation:"pathSlideIn 0.2s ease"},children:[y.jsx("style",{children:`
        @keyframes pathSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}),y.jsxs("div",{style:{maxWidth:"min(520px, calc(100% - 32px))",width:"100%",margin:"0 auto",padding:"24px 16px 48px"},children:[y.jsxs("button",{onClick:w,style:{padding:"10px 14px",fontSize:12,fontFamily:Ue,borderRadius:6,border:`1px solid ${R.border}`,background:"transparent",color:R.textDim,cursor:"pointer",marginBottom:24},children:["← ",G("topicBack",h)]}),y.jsx("div",{style:{marginBottom:6},children:y.jsx("span",{style:{fontSize:10,color:R.textFaint,letterSpacing:1.5,textTransform:"uppercase"},children:G("pathLabel",h)})}),y.jsx("h1",{style:{margin:"0 0 8px",fontSize:22,fontWeight:700,color:R.textPrimary,lineHeight:1.3},dangerouslySetInnerHTML:{__html:At(z(i)??"")}}),y.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:R.textDim},children:[M," ",G("pathTopics",h),d&&Object.keys(d).length>0&&y.jsxs(y.Fragment,{children:[" · ",y.jsx("span",{style:{color:R.known},children:S})," ",G("pathKnown",h)," · ",y.jsx("span",{style:{color:"#e74c3c"},children:N})," ",G("pathToStudy",h)]})]}),d&&Object.keys(d).length>0&&y.jsx("div",{style:{height:4,borderRadius:2,background:R.border,overflow:"hidden",marginBottom:28},children:y.jsx("div",{style:{height:"100%",borderRadius:2,width:`${V}%`,background:R.known,transition:"width 0.4s ease"}})}),y.jsxs("div",{style:{position:"relative"},children:[y.jsx("div",{style:{position:"absolute",left:15,top:12,bottom:12,width:2,background:R.border,borderRadius:1}}),T.map((O,D)=>{var ye,he,te;const E=k[O],W=O===i,L=d==null?void 0:d[O],Q=f==null?void 0:f[O],X=!!Q,Y=((ye=E==null?void 0:E.resources)==null?void 0:ye.length)>0,re=(s==null?void 0:s[E==null?void 0:E.scope])??"#4a9eff",J=((he=a==null?void 0:a[E==null?void 0:E.scope])==null?void 0:he[h==="pl"?"pl":"en"])??"",ne=((te=c==null?void 0:c[E==null?void 0:E.section])==null?void 0:te.label)??"";let ge=R.textFaint,Ae=R.border;return L==="known"?(ge=R.known,Ae=R.known):L==="unknown"&&(ge="#e74c3c",Ae="#e74c3c"),y.jsxs("div",{onClick:()=>v(O),style:{position:"relative",paddingLeft:40,paddingBottom:D<T.length-1?6:0,marginBottom:6,cursor:"pointer"},children:[y.jsx("div",{style:{position:"absolute",left:8,top:12,width:W?16:12,height:W?16:12,borderRadius:"50%",background:L?ge:R.bg,border:`2px solid ${L?Ae:R.textFaint}`,marginLeft:W?-2:0,zIndex:1}}),y.jsxs("div",{style:{padding:"10px 14px",borderRadius:8,background:W?`${re}10`:"transparent",border:`1px solid ${W?re+"30":R.borderSubtle}`,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:me=>{W||(me.currentTarget.style.background=`${R.textFaint}10`,me.currentTarget.style.borderColor=R.border)},onMouseLeave:me=>{W||(me.currentTarget.style.background="transparent",me.currentTarget.style.borderColor=R.borderSubtle)},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[y.jsx("span",{style:{fontSize:13,fontWeight:W?700:500,color:W?R.textPrimary:R.textBody,flex:1},dangerouslySetInnerHTML:{__html:At(z(O)??"")}}),y.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center",flexShrink:0},children:[Y&&y.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:"#58C4DD15",color:"#58C4DD",border:"1px solid #58C4DD30"},children:"⬡"}),X&&y.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:Q.correct?"#27ae6015":"#e74c3c15",color:Q.correct?"#2ecc71":"#ff6b6b",border:`1px solid ${Q.correct?"#27ae6030":"#e74c3c30"}`},children:Q.correct?"✓":"✗"})]})]}),y.jsxs("div",{style:{fontSize:10,color:R.textFaint,marginTop:3},children:[ne," · ",J,W&&y.jsx("span",{style:{color:re,marginLeft:6},children:G("pathGoal",h)})]})]})]},O)})]})]})]})}class Fi{constructor(t){this._perm=t}get length(){return this._perm.length}originalIndex(t){return this._perm[t]}displayIndex(t){return this._perm.indexOf(t)}apply(t){return this._perm.map(r=>t[r])}static random(t){const r=Array.from({length:t},(s,a)=>a);for(let s=t-1;s>0;s--){const a=Math.floor(Math.random()*(s+1));[r[s],r[a]]=[r[a],r[s]]}return new Fi(r)}static identity(t){return new Fi(Array.from({length:t},(r,s)=>s))}}function Ix({nodeId:i,nodes:t,questionBank:r,onAnswer:s,onSkip:a,lang:c,excludeIndices:d=[],isMobile:f}){const h=t.find(L=>L.id===i),v=F.useMemo(()=>ic(r,i,d),[i,d]),w="#4a9eff",$=h?c==="pl"?h.labelPl:h.label:i,k=F.useMemo(()=>v?Fi.random(v.options.length):null,[v]),z=F.useMemo(()=>k?k.apply(v.options):[],[k,v]),T=F.useMemo(()=>k?k.displayIndex(v.correct):-1,[k,v]),[S,N]=F.useState(null),[M,V]=F.useState(!1),O=()=>{S!==null&&V(!0)},D=()=>{s(S===T,v,v.index),N(null),V(!1)};F.useEffect(()=>{const L=Q=>{Q.key==="Escape"&&a((v==null?void 0:v.index)??-1)};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[a,v]);const E=L=>y.jsx("span",{dangerouslySetInnerHTML:{__html:At(L)}}),W=f?{position:"fixed",left:0,right:0,bottom:0,maxHeight:"70vh",background:R.surface,border:`1px solid ${w}40`,borderRadius:"14px 14px 0 0",padding:"14px 16px 24px",color:R.textBody,boxShadow:"0 -8px 32px rgba(0,0,0,0.5)",overflowY:"auto",zIndex:30,boxSizing:"border-box"}:{position:"absolute",left:16,top:16,width:340,maxHeight:"calc(100vh - 120px)",background:R.surfaceHi,backdropFilter:"blur(6px)",border:`1px solid ${w}40`,borderRadius:10,padding:"14px 16px",color:R.textBody,boxShadow:"0 12px 40px rgba(0,0,0,0.5)",overflowY:"auto",zIndex:30,boxSizing:"border-box"};return y.jsxs("div",{style:W,children:[f&&y.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:8},children:y.jsx("div",{style:{width:36,height:4,borderRadius:2,background:R.textFaint}})}),y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[y.jsx("div",{style:{color:w,fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:$}),y.jsx("button",{onClick:()=>a((v==null?void 0:v.index)??-1),style:{background:`${R.textDim}22`,border:`1px solid ${R.border}`,color:R.textBody,cursor:"pointer",fontSize:13,lineHeight:1,padding:"4px 10px",borderRadius:6,fontWeight:600,minWidth:32,minHeight:28},title:"Close (Esc)",children:G("close",c)})]}),v?y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{fontSize:13,color:R.textBody,marginBottom:12,lineHeight:1.65},children:E(v.q)}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:12},children:z.map((L,Q)=>{let X=R.bg,Y=R.border,re=R.textBody;return S===Q&&!M&&(X=`${w}22`,Y=w,re=w),M&&(Q===T?(X="#27ae6022",Y="#27ae60",re="#2ecc71"):Q===S&&(X="#e74c3c22",Y="#e74c3c",re="#ff6b6b")),y.jsxs("button",{onClick:()=>{M||N(Q)},style:{textAlign:"left",padding:"10px 12px",borderRadius:7,fontSize:12,cursor:M?"default":"pointer",background:X,border:`1px solid ${Y}`,color:re,lineHeight:1.5,minHeight:38},children:[y.jsxs("span",{style:{marginRight:6,opacity:.5},children:[["A","B","C","D"][Q],"."]}),E(L)]},Q)})}),M&&v.hint&&y.jsx("div",{style:{fontSize:11,color:R.textMuted,marginBottom:10,padding:"8px 10px",background:"#ffffff08",borderRadius:6,lineHeight:1.6},children:E(v.hint)}),M?y.jsx("button",{onClick:D,style:{...Eo(S===T?"#27ae60":"#e74c3c"),width:"100%",fontSize:13},children:G(S===T?"knownConfirm":"unknownConfirm",c)}):y.jsx("button",{onClick:O,disabled:S===null,style:{...Eo(w),width:"100%",opacity:S===null?.4:1,fontSize:13},children:G("checkAnswer",c)})]}):y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:R.textDim,fontSize:12,marginBottom:12},children:G("noQuestion",c)}),y.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:[y.jsx("button",{onClick:()=>s(!0,null,-1),style:{...Eo("#27ae60"),fontSize:12,padding:"8px 14px"},children:G("yesKnow",c)}),y.jsx("button",{onClick:()=>s(!1,null,-1),style:{...Eo("#e74c3c"),fontSize:12,padding:"8px 14px"},children:G("noKnow",c)}),y.jsx("button",{onClick:()=>a(-1),style:{...Eo("#3a4d63"),fontSize:12,padding:"8px 14px"},children:G("skipBtn",c)})]})]})]})}const Fx={position:"absolute",right:16,top:16,width:230,background:"#161c28ee",backdropFilter:"blur(6px)",border:"1px solid #263248",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"};function Lx({belief:i,frontier:t,visibleFrontier:r,hasStarted:s,nextSuggestedId:a,sessionComplete:c,adjacency:d,expectedRemaining:f,pCorrect:h,questionsAnswered:v,nodes:w,lang:$,onReset:k,onNodeClick:z,SCOPE_LABELS:T,isMobile:S}){var Y,re;const N=Object.fromEntries(w.map(J=>[J.id,J])),M=J=>{var ne,ge;return $==="pl"?(ne=N[J])==null?void 0:ne.labelPl:(ge=N[J])==null?void 0:ge.label},V=w.filter(J=>i[J.id]==="known"),O=w.filter(J=>i[J.id]==="unknown"),D=w.length,E=[{label:G("statKnown",$),count:V.length,color:"#27ae60"},{label:G("statUnknown",$),count:O.length,color:"#e74c3c"},{label:G("statRemaining",$),count:f??"-",color:"#4a9eff"}],W=h?Math.round(h*100):50,L=S?13:11,Q=S?11:9,X=y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{fontWeight:700,fontSize:S?14:12,marginBottom:10,color:R.textPrimary,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsxs("span",{children:[G("diagHeader",$)," ",c?"✓":""]}),y.jsx("button",{onClick:k,style:{fontSize:Q,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${R.textFaint}`,color:R.textDim,minHeight:S?32:"auto"},children:G("reset",$)})]}),y.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:E.map(({label:J,count:ne,color:ge})=>y.jsxs("div",{style:{flex:1,textAlign:"center",background:`${ge}18`,borderRadius:5,padding:"6px 0",border:`1px solid ${ge}40`},children:[y.jsx("div",{style:{color:ge,fontWeight:700,fontSize:S?20:15},children:ne}),y.jsx("div",{style:{color:R.textDim,fontSize:Q},children:J})]},J))}),!c&&s&&y.jsxs("div",{style:{fontSize:Q,color:R.textDim,marginBottom:10,padding:"6px 8px",background:"#ffffff08",borderRadius:4,display:"flex",justifyContent:"space-between",gap:4,flexWrap:"wrap"},children:[y.jsxs("span",{children:[G("answered",$),": ",y.jsx("span",{style:{color:R.textPrimary},children:v})]}),y.jsxs("span",{children:[G("estimated",$),": ",y.jsxs("span",{style:{color:"#4a9eff"},children:["~",f??"-"]})]}),y.jsxs("span",{children:[G("accuracy",$),": ",y.jsxs("span",{style:{color:"#4a9eff"},children:[W,"%"]})]})]}),c&&y.jsxs("div",{children:[y.jsxs("div",{style:{background:"#27ae6018",border:"1px solid #27ae6050",borderRadius:6,padding:"10px 12px",marginBottom:10},children:[y.jsx("div",{style:{color:"#2ecc71",fontWeight:700,fontSize:S?14:12,marginBottom:4},children:G("sessionDone",$)}),y.jsxs("div",{style:{color:R.textDim,fontSize:Q,lineHeight:1.6},children:[G("sessionDoneSub",$)," ",y.jsx("span",{style:{color:R.textPrimary},children:v})," ",G("sessionDoneQ",$),"."," ",G("sessionDoneClass",$)," ",V.length+O.length,"/",D,".",y.jsx("br",{}),G("sessionDoneAcc",$),": ",y.jsxs("span",{style:{color:"#4a9eff"},children:[W,"%"]}),"."," ",G("sessionDoneKnown",$)," ",y.jsx("span",{style:{color:"#2ecc71"},children:V.length}),","," ",G("sessionDoneStudy",$)," ",y.jsx("span",{style:{color:"#e74c3c"},children:O.length}),"."]})]}),O.length>0&&y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{color:"#e74c3c",fontSize:L,fontWeight:600,marginBottom:5},children:[G("toStudy",$)," (",O.length,")"]}),w.filter(J=>i[J.id]==="unknown").filter(J=>(d.prereqs[J.id]??[]).every(ne=>i[ne]==="known")).slice(0,8).map(J=>{var ne,ge;return y.jsxs("div",{style:{padding:S?"8px 10px":"5px 8px",marginBottom:4,borderRadius:4,background:"#e74c3c12",border:"1px solid #e74c3c30",fontSize:L,color:"#ff8a8a",lineHeight:1.4},children:[M(J.id),y.jsx("div",{style:{fontSize:Q,color:R.textDim,marginTop:1},children:(ge=T==null?void 0:T[(ne=N[J.id])==null?void 0:ne.scope])==null?void 0:ge[$==="pl"?"pl":"en"]})]},J.id)})]}),V.length>0&&y.jsxs("div",{style:{marginTop:8,color:"#27ae60",fontSize:L},children:["✓ ",G("knownList",$)," ",V.length]})]}),!c&&!s&&y.jsxs("div",{style:{marginBottom:10},children:[a&&y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:"#4a9eff",fontSize:L,fontWeight:600,marginBottom:5},children:G("startHere",$)}),y.jsxs("div",{onClick:()=>z==null?void 0:z(a),style:{padding:S?"12px 14px":"8px 10px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:L,color:"#a8d4ff",minHeight:S?44:"auto"},children:[y.jsx("div",{style:{fontWeight:600},children:M(a)}),y.jsxs("div",{style:{fontSize:Q,color:R.textDim,marginTop:2},children:[(re=T==null?void 0:T[(Y=N[a])==null?void 0:Y.scope])==null?void 0:re[$==="pl"?"pl":"en"]," · ",G("startHereSub",$)]})]})]}),y.jsx("div",{style:{fontSize:Q,color:R.textFaint,marginTop:8,lineHeight:1.5},children:G("clickAnyNode",$)})]}),!c&&s&&r.length>0&&y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:"#f39c12",fontSize:L,fontWeight:600,marginBottom:5},children:G("whatNext",$)}),r.map(J=>{var ge,Ae;const ne=J===a;return y.jsxs("div",{onClick:()=>z==null?void 0:z(J),style:{padding:S?"10px 12px":"6px 8px",marginBottom:4,borderRadius:4,cursor:"pointer",background:ne?"#4a9eff18":"#f39c1215",border:`1px solid ${ne?"#4a9eff55":"#f39c1240"}`,fontSize:L,color:ne?"#a8d4ff":"#f5d78e",minHeight:S?44:"auto",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[y.jsxs("div",{children:[y.jsx("div",{children:M(J)}),y.jsxs("div",{style:{fontSize:Q,color:R.textDim,marginTop:1},children:[(Ae=T==null?void 0:T[(ge=N[J])==null?void 0:ge.scope])==null?void 0:Ae[$==="pl"?"pl":"en"],ne&&y.jsx("span",{style:{color:"#4a9eff88",marginLeft:4},children:G("best",$)})]})]}),y.jsx("span",{style:{opacity:.7},children:ne?"★":"→"})]},J)})]}),!c&&V.length>0&&y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{color:"#27ae60",fontSize:L,fontWeight:600,margin:"10px 0 4px"},children:["✓ ",G("knownList",$)," (",V.length,")"]}),V.map(J=>y.jsx("div",{style:{fontSize:Q,color:"#6dbb87",paddingLeft:4,lineHeight:1.8},children:M(J.id)},J.id))]}),!c&&!S&&y.jsxs("div",{style:{marginTop:12,color:R.textFaint,fontSize:Q,lineHeight:1.5},children:[G("hintClick",$),y.jsx("br",{}),G("hintShift",$),y.jsx("br",{}),G("hintGreen",$)]})]});return S?y.jsxs("div",{style:{position:"fixed",left:0,right:0,bottom:0,background:"#161c28f5",backdropFilter:"blur(8px)",borderTop:"1px solid #263248",borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"},children:[y.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:y.jsx("div",{style:{width:36,height:4,borderRadius:2,background:R.textFaint}})}),X]}):y.jsx("div",{style:Fx,children:X})}function Ox({nodes:i,lang:t,targetNode:r,subgraphIds:s,ddClassification:a,betaBeliefs:c,ddComplete:d,ddNextNodeId:f,questionsAnswered:h,onNodeClick:v,onReset:w,isMobile:$}){const k=Object.fromEntries(i.map(L=>[L.id,L])),z=L=>{var Q,X;return t==="pl"?(Q=k[L])==null?void 0:Q.labelPl:(X=k[L])==null?void 0:X.label},T=s.filter(L=>a[L]==="known"),S=s.filter(L=>a[L]==="unknown"),N=s.filter(L=>a[L]==="uncertain"),M=s.length,V=T.length+S.length,O=M>0?Math.round(V/M*100):0,D=z(r),E=$?11:9,W=$?{position:"fixed",left:0,right:0,bottom:0,background:"#161c28f5",backdropFilter:"blur(8px)",borderTop:"1px solid #263248",borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"}:{background:"#161c28ee",backdropFilter:"blur(6px)",border:"1px solid #263248",borderRadius:8,padding:"12px 14px",fontSize:11,color:"#c8d6e5",zIndex:10,maxHeight:"80vh",overflowY:"auto"};return y.jsxs("div",{style:W,children:[$&&y.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:y.jsx("div",{style:{width:36,height:4,borderRadius:2,background:R.textFaint}})}),y.jsxs("div",{style:{fontWeight:700,fontSize:$?14:12,marginBottom:4,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsxs("span",{children:[G("deepDiveHeader",t)," ",d?"✓":""]}),y.jsx("button",{onClick:w,style:{fontSize:E,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${R.textFaint}`,color:R.textDim,minHeight:$?32:"auto"},children:G("reset",t)})]}),y.jsxs("div",{style:{marginBottom:10,padding:"6px 8px",borderRadius:5,background:"#4a9eff12",border:"1px solid #4a9eff40"},children:[y.jsx("div",{style:{fontSize:9,color:"#4a9eff88",marginBottom:2},children:G("deepDiveTarget",t)}),y.jsx("div",{style:{fontSize:11,color:"#a8d4ff",fontWeight:600},children:D}),y.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginTop:1},children:[M," ",G("deepDiveNodes",t)]})]}),y.jsxs("div",{style:{marginBottom:10},children:[y.jsx("div",{style:{height:5,borderRadius:3,background:"#10141c",overflow:"hidden",marginBottom:4},children:y.jsx("div",{style:{height:"100%",borderRadius:3,width:`${O}%`,background:d?"#27ae60":"#4a9eff",transition:"width 0.4s ease"}})}),y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"#6b7d9a"},children:[y.jsxs("span",{children:[G("classified",t),": ",y.jsxs("span",{style:{color:"#f5f6fa"},children:[V,"/",M]})]}),y.jsxs("span",{children:[G("questions",t),": ",y.jsx("span",{style:{color:"#f5f6fa"},children:h})]})]})]}),d&&y.jsxs("div",{children:[y.jsxs("div",{style:{background:T.length>S.length?"#27ae6018":"#e74c3c18",border:`1px solid ${T.length>S.length?"#27ae6050":"#e74c3c50"}`,borderRadius:6,padding:"10px 12px",marginBottom:10},children:[y.jsx("div",{style:{color:T.length>S.length?"#2ecc71":"#ff6b6b",fontWeight:700,fontSize:12,marginBottom:4},children:G("diagReady",t)}),y.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:[G("diagKnown",t),": ",y.jsx("span",{style:{color:"#2ecc71"},children:T.length})," / ",G("diagStudy",t),": ",y.jsx("span",{style:{color:"#ff6b6b"},children:S.length})," / ",G("diagTotal",t),": ",M]})]}),S.length>0&&y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:G("studyThese",t)}),s.filter(L=>a[L]==="unknown").slice(0,8).map(L=>{var Q;return y.jsx(J1,{id:L,label:z(L),scope:(Q=k[L])==null?void 0:Q.scope,classification:"unknown",beta:c[L]},L)})]}),T.length>0&&y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"8px 0 4px"},children:G("mastered",t)}),s.filter(L=>a[L]==="known").map(L=>{var Q;return y.jsx(J1,{id:L,label:z(L),scope:(Q=k[L])==null?void 0:Q.scope,classification:"known",beta:c[L]},L)})]})]}),!d&&y.jsxs(y.Fragment,{children:[f&&y.jsxs("div",{style:{marginBottom:10},children:[y.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:4},children:G("nextQuestion",t)}),y.jsxs("div",{onClick:()=>v==null?void 0:v(f),style:{padding:"7px 9px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff"},children:[z(f),y.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:[G("confidence",t),": ",Hx(c[f])]})]})]}),N.length>0&&y.jsxs(y.Fragment,{children:[y.jsxs("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:4},children:[G("unclassified",t)," (",N.length,")"]}),N.map(L=>y.jsxs("div",{onClick:()=>v==null?void 0:v(L),style:{padding:"5px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:L===f?"#4a9eff18":"#f39c1212",border:`1px solid ${L===f?"#4a9eff55":"#f39c1230"}`,fontSize:9,color:L===f?"#a8d4ff":"#f5d78e",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsx("span",{children:z(L)}),y.jsx(dm,{beta:c[L]})]},L))]})]})]})}function Hx(i){if(!i)return"50%";const t=i.alpha/(i.alpha+i.beta);return`${Math.round(t*100)}%`}function dm({beta:i}){const t=i?i.alpha/(i.alpha+i.beta):.5,r=i?i.alpha+i.beta:2,s=Math.min(1,(r-2)/4),a=t>.6?"#27ae60":t<.4?"#e74c3c":"#f39c12";return y.jsx("div",{style:{width:30,height:4,borderRadius:2,background:"#10141c",overflow:"hidden",flexShrink:0},children:y.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Math.round(t*100)}%`,background:a,opacity:.4+s*.6,transition:"width 0.3s ease"}})})}function J1({id:i,label:t,scope:r,classification:s,beta:a}){const c=s==="known"?"#27ae60":"#e74c3c";return y.jsxs("div",{style:{padding:"4px 7px",marginBottom:3,borderRadius:4,background:`${c}10`,border:`1px solid ${c}30`,fontSize:9,color:s==="known"?"#6dbb87":"#ff8a8a",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsx("span",{children:t}),y.jsx(dm,{beta:a})]})}function Wx({lang:i,diagMode:t,hasBelief:r,SCOPE_COLORS:s,SCOPE_LABELS:a,SECTIONS:c}){const[d,f]=F.useState(r),h=Object.entries(s).map(([v,w])=>{var $;return{color:w,label:($=a[v])==null?void 0:$[i==="pl"?"pl":"en"]}});return y.jsxs("div",{style:{position:"absolute",left:16,bottom:16,background:"#161c2895",backdropFilter:"blur(4px)",borderRadius:6,overflow:"hidden",border:"1px solid #1a2235",fontSize:9},children:[y.jsxs("button",{onClick:()=>f(v=>!v),style:{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",width:"100%",background:"transparent",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:9},children:[y.jsx("span",{style:{opacity:.6},children:d?"▼":"▶"}),G("legendTitle",i)]}),d&&y.jsxs("div",{style:{padding:"4px 10px 8px",borderTop:"1px solid #1a2235"},children:[(t||r)&&y.jsxs("div",{style:{marginBottom:8},children:[[{color:R.knownHi,label:G("legendKnown",i)},{color:R.unknownHi,label:G("legendUnknown",i)},{color:R.frontier,label:G("legendFrontier",i)},{color:"#4a5568",label:G("legendUnclassified",i)}].map(({color:v,label:w})=>y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:3},children:[y.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:v,flexShrink:0}}),y.jsx("span",{style:{color:"#8a9dbe"},children:w})]},w)),y.jsx("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,marginBottom:6}})]}),y.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:G("legendScopes",i)}),h.map(({color:v,label:w})=>y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[y.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:v,flexShrink:0}}),y.jsx("span",{style:{color:"#8a9dbe"},children:w})]},w)),y.jsxs("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,paddingTop:6},children:[y.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:G("legendStages",i)}),Object.entries(c).map(([v,w])=>y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[y.jsx("div",{style:{width:8,height:3,borderRadius:1,background:w.color,flexShrink:0}}),y.jsx("span",{style:{color:"#8a9dbe"},children:w.label})]},v))]})]})]})}function pm({nodes:i,lang:t,onSelect:r,onClose:s,SECTIONS:a,SCOPE_COLORS:c}){const[d,f]=F.useState(""),[h,v]=F.useState(-1),w=F.useRef([]),$=F.useMemo(()=>Object.keys(a??{}),[a]),k=F.useMemo(()=>{const M=d.toLowerCase();return i.filter(V=>!M||V.label.toLowerCase().includes(M)||V.labelPl.toLowerCase().includes(M))},[i,d]),z=F.useMemo(()=>{const M={};for(const O of $)M[O]=[];for(const O of k){const D=O.section??$[0]??"default";M[D]||(M[D]=[]),M[D].push(O)}const V=[];for(const O of $)for(const D of M[O]??[])V.push(D);return V},[k,$]),T=F.useMemo(()=>{const M={};for(const V of $)M[V]=[];for(const V of k){const O=V.section??$[0]??"default";M[O]||(M[O]=[]),M[O].push(V)}return M},[k,$]),S=M=>t==="pl"?M.labelPl:M.label;F.useEffect(()=>{const M=V=>{if(V.key==="Escape"){s();return}V.key==="ArrowDown"&&(V.preventDefault(),v(O=>Math.min(O+1,z.length-1))),V.key==="ArrowUp"&&(V.preventDefault(),v(O=>Math.max(O-1,0))),V.key==="Enter"&&h>=0&&z[h]&&(V.preventDefault(),r(z[h].id))};return window.addEventListener("keydown",M),()=>window.removeEventListener("keydown",M)},[z,h,s,r]),F.useEffect(()=>{h>=0&&w.current[h]&&w.current[h].scrollIntoView({block:"nearest"})},[h]),F.useEffect(()=>{v(-1)},[d]);const N={title:t==="pl"?"Wybierz cel":"Select Goal",subtitle:t==="pl"?"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.":"Pick a target topic. We'll diagnose all its prerequisites.",searchPlaceholder:t==="pl"?"Szukaj tematu...":"Search topics...",noResults:t==="pl"?"Brak wyników":"No results",footer:`${k.length} / ${i.length} ${t==="pl"?"tematów":"topics"}`,cancel:t==="pl"?"Anuluj":"Cancel"};return y.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:M=>{M.target===M.currentTarget&&s()},children:y.jsxs("div",{style:{width:Math.min(440,window.innerWidth-40),maxHeight:"80vh",background:"#161c28",border:"1px solid #263248",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[y.jsxs("div",{style:{padding:"14px 16px 10px",borderBottom:"1px solid #263248",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[y.jsxs("div",{children:[y.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:N.title}),y.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:2},children:N.subtitle})]}),y.jsx("button",{onClick:s,style:{background:"none",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:18,lineHeight:1},children:"×"})]}),y.jsx("div",{style:{padding:"10px 16px",borderBottom:"1px solid #1a2235"},children:y.jsx("input",{autoFocus:!0,value:d,onChange:M=>f(M.target.value),placeholder:N.searchPlaceholder,style:{width:"100%",boxSizing:"border-box",padding:"7px 10px",borderRadius:5,fontSize:11,background:"#10141c",border:"1px solid #263248",color:"#c8d6e5",outline:"none"}})}),y.jsxs("div",{style:{overflowY:"auto",flex:1,padding:"8px 16px 14px"},children:[$.map(M=>{const V=T[M];if(!V||V.length===0)return null;const O=a==null?void 0:a[M];return y.jsxs("div",{style:{marginBottom:12},children:[y.jsx("div",{style:{fontSize:9,fontWeight:700,color:(O==null?void 0:O.color)??"#6b7d9a",textTransform:"uppercase",letterSpacing:1,marginBottom:5},children:(O==null?void 0:O.label)??M}),y.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:V.map(D=>{const E=z.indexOf(D),W=(c==null?void 0:c[D.scope])??"#4a9eff",L=h===E;return y.jsxs("button",{ref:Q=>w.current[E]=Q,onClick:()=>r(D.id),style:{padding:"5px 9px",borderRadius:5,fontSize:10,background:L?`${W}35`:`${W}15`,border:`1px solid ${L?W:`${W}40`}`,color:"#c8d6e5",cursor:"pointer",outline:L?`2px solid ${W}`:"none",outlineOffset:1},onMouseEnter:Q=>{Q.currentTarget.style.background=`${W}30`,Q.currentTarget.style.borderColor=`${W}90`},onMouseLeave:Q=>{z.indexOf(D)!==h&&(Q.currentTarget.style.background=`${W}15`,Q.currentTarget.style.borderColor=`${W}40`)},children:[y.jsx("span",{style:{fontSize:8,marginRight:5,display:"inline-block",width:7,height:7,borderRadius:"50%",background:W,verticalAlign:"middle"}}),S(D)]},D.id)})})]},M)}),k.length===0&&y.jsx("div",{style:{color:"#3a4d63",fontSize:11,padding:"20px 0",textAlign:"center"},children:N.noResults})]}),y.jsxs("div",{style:{padding:"10px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsx("div",{style:{fontSize:9,color:"#3a4d63"},children:N.footer}),y.jsx("button",{onClick:s,style:{padding:"5px 12px",borderRadius:5,fontSize:10,cursor:"pointer",background:"transparent",border:"1px solid #263248",color:"#6b7d9a"},children:N.cancel})]})]})})}function Gx({isOpen:i,onSelect:t,onClose:r,lang:s="pl"}){const a=[{id:"quick",icon:"⚡",color:"#4a9eff",label:G("modeQuickLabel",s),description:G("modeQuickDesc",s)},{id:"deepdive",icon:"◎",color:"#8e44ad",label:G("modeDeepLabel",s),description:G("modeDeepDesc",s)}],[c,d]=F.useState(null),f=F.useRef(null);return F.useEffect(()=>{i&&(d(null),setTimeout(()=>{var h;return(h=f.current)==null?void 0:h.focus()},100))},[i]),F.useEffect(()=>{if(!i)return;const h=v=>{v.key==="Escape"&&r(),v.key==="Enter"&&c&&t(c)};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[i,c,r,t]),i?y.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:h=>{h.target===h.currentTarget&&r()},children:y.jsxs("div",{style:{width:420,maxWidth:"90vw",background:"#161c28",border:"1px solid #263248",borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[y.jsxs("div",{style:{padding:"16px 18px 12px",borderBottom:"1px solid #263248"},children:[y.jsx("div",{style:{fontWeight:700,fontSize:14,color:"#f5f6fa",marginBottom:4},children:G("modePickerTitle",s)}),y.jsx("div",{style:{fontSize:11,color:"#6b7d9a"},children:G("modePickerSub",s)})]}),y.jsx("div",{style:{padding:"12px 16px",display:"flex",flexDirection:"column",gap:10},children:a.map((h,v)=>y.jsxs("button",{ref:v===0?f:null,onClick:()=>d(h.id),onDoubleClick:()=>t(h.id),style:{textAlign:"left",padding:"12px 14px",borderRadius:6,fontSize:12,cursor:"pointer",background:c===h.id?`${h.color}18`:"#10141c",border:`1px solid ${c===h.id?h.color:"#263248"}`,color:"#c8d6e5",transition:"all 0.15s"},onMouseEnter:w=>{w.currentTarget.style.background=`${h.color}18`,w.currentTarget.style.borderColor=`${h.color}60`},onMouseLeave:w=>{c!==h.id&&(w.currentTarget.style.background="#10141c",w.currentTarget.style.borderColor="#263248")},children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:4},children:[y.jsx("span",{style:{fontSize:16},children:h.icon}),y.jsx("span",{style:{fontWeight:600,color:c===h.id?h.color:"#f5f6fa"},children:h.label})]}),y.jsx("div",{style:{fontSize:10,color:"#6b7d9a",lineHeight:1.5},children:h.description})]},h.id))}),y.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[y.jsx("button",{onClick:r,style:{padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",background:"transparent",border:"1px solid #263248",color:"#6b7d9a"},children:G("cancel",s)}),y.jsx("button",{onClick:()=>c&&t(c),disabled:!c,style:{padding:"6px 18px",borderRadius:5,fontSize:11,cursor:c?"pointer":"not-allowed",background:c?"#4a9eff":"#263248",border:"none",color:c?"#fff":"#3a4d63",opacity:c?1:.5},children:G("next",s)})]})]})}):null}const Ux=[{id:"browse",key:"onboardingBrowse",descKey:"onboardingBrowseDesc",color:"#4a9eff"},{id:"quick",key:"onboardingDiag",descKey:"onboardingDiagDesc",color:"#f39c12"},{id:"deepdive",key:"onboardingDeep",descKey:"onboardingDeepDesc",color:"#8e44ad"}];function Vx({isOpen:i,onSelect:t,onClose:r,lang:s}){return F.useEffect(()=>{if(!i)return;const a=c=>{c.key==="Escape"&&r()};return window.addEventListener("keydown",a),()=>window.removeEventListener("keydown",a)},[i,r]),i?y.jsx("div",{style:{position:"fixed",inset:0,background:"#000000dd",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200,padding:16},onClick:a=>{a.target===a.currentTarget&&r()},children:y.jsxs("div",{style:{width:"100%",maxWidth:480,background:R.surface,border:"1px solid #263248",borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[y.jsxs("div",{style:{padding:"28px 24px 20px",background:"linear-gradient(135deg, #0d1520 0%, #101b2a 100%)",borderBottom:"1px solid #263248",textAlign:"center"},children:[y.jsx("div",{style:{fontSize:32,marginBottom:10},children:"◉"}),y.jsx("div",{style:{fontWeight:700,fontSize:18,color:R.textPrimary,marginBottom:8},children:G("onboardingTitle",s)}),y.jsx("div",{style:{fontSize:12,color:R.textDim,lineHeight:1.6,maxWidth:360,margin:"0 auto"},children:G("onboardingSub",s)})]}),y.jsxs("div",{style:{padding:"16px 24px",display:"flex",flexDirection:"column",gap:10},children:[y.jsx("div",{style:{fontSize:11,color:R.textFaint,marginBottom:2},children:G("onboardingChoose",s)}),Ux.map(({id:a,key:c,descKey:d,color:f})=>y.jsxs("button",{onClick:()=>t(a),style:{display:"flex",gap:14,alignItems:"flex-start",padding:"12px 14px",borderRadius:8,cursor:"pointer",background:`${f}0e`,border:`1px solid ${f}30`,textAlign:"left",width:"100%",transition:"border-color 0.15s, background 0.15s"},onMouseEnter:h=>{h.currentTarget.style.background=`${f}1c`,h.currentTarget.style.borderColor=`${f}70`},onMouseLeave:h=>{h.currentTarget.style.background=`${f}0e`,h.currentTarget.style.borderColor=`${f}30`},children:[y.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:f,flexShrink:0,marginTop:5}}),y.jsxs("div",{style:{flex:1},children:[y.jsx("div",{style:{fontWeight:600,fontSize:13,color:R.textPrimary,marginBottom:3},children:G(c,s)}),y.jsx("div",{style:{fontSize:11,color:R.textDim,lineHeight:1.5},children:G(d,s)})]}),y.jsx("div",{style:{color:f,fontSize:16,alignSelf:"center",opacity:.7},children:"→"})]},a))]}),y.jsx("div",{style:{margin:"0 24px 16px",padding:"8px 10px",background:"#ffffff06",borderRadius:6,fontSize:9,color:R.textFaint,textAlign:"center"},children:G("onboardingLangHint",s)})]})}):null}function Kx({lang:i,setLang:t,layoutId:r,layouts:s,onLayoutChange:a,searchTerm:c,setSearchTerm:d,filterScope:f,toggleScope:h,clearScope:v,filterSection:w,toggleSection:$,clearSection:k,SECTIONS:z,SCOPE_COLORS:T,SCOPE_LABELS:S,isMobile:N}){const[M,V]=F.useState(!1),O=F.useRef(null);F.useEffect(()=>{if(!M)return;const E=L=>{O.current&&!O.current.contains(L.target)&&V(!1)},W=L=>{L.key==="Escape"&&V(!1)};return document.addEventListener("mousedown",E),document.addEventListener("keydown",W),()=>{document.removeEventListener("mousedown",E),document.removeEventListener("keydown",W)}},[M]);const D=f.size+w.size+(c?1:0);return y.jsxs("div",{ref:O,style:{position:"relative"},children:[y.jsxs("button",{onClick:()=>V(E=>!E),style:{padding:"7px 10px",borderRadius:5,fontSize:15,cursor:"pointer",border:M||D>0?"1px solid #4a9eff":`1px solid ${R.border}`,background:M?"#4a9eff22":"transparent",color:M||D>0?"#4a9eff":R.textDim,minHeight:36,minWidth:36,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},title:G("moreOptions",i),children:[y.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[y.jsx("circle",{cx:"8",cy:"2.5",r:"1.5"}),y.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),y.jsx("circle",{cx:"8",cy:"13.5",r:"1.5"})]}),D>0&&y.jsx("span",{style:{position:"absolute",top:-4,right:-4,background:"#4a9eff",color:"#fff",fontSize:9,width:16,height:16,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:D})]}),M&&y.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",right:0,width:N?"85vw":320,maxWidth:"90vw",maxHeight:"70vh",overflowY:"auto",background:R.surface,border:`1px solid ${R.border}`,borderRadius:10,padding:"14px 16px",zIndex:60,boxShadow:"0 12px 40px rgba(0,0,0,0.5)"},children:[y.jsxs("div",{style:{marginBottom:14},children:[y.jsx("label",{style:{fontSize:11,color:R.textDim,fontWeight:600,marginBottom:6,display:"block"},children:G("search",i)}),y.jsx("input",{value:c,onChange:E=>d(E.target.value),placeholder:G("search",i),style:{width:"100%",boxSizing:"border-box",background:R.bg,border:`1px solid ${R.border}`,borderRadius:6,color:R.textBody,padding:"8px 10px",fontSize:13,outline:"none"}})]}),y.jsxs("div",{style:{marginBottom:14},children:[y.jsx("label",{style:{fontSize:11,color:R.textDim,fontWeight:600,marginBottom:6,display:"block"},children:i==="pl"?"Język":"Language"}),y.jsx("div",{style:{display:"flex",gap:6},children:["pl","en"].map(E=>y.jsx("button",{onClick:()=>t(E),style:{...Ri(i===E,E==="pl"?"#f5a623":"#4a9eff"),fontSize:12,padding:"6px 14px"},children:E.toUpperCase()},E))})]}),y.jsxs("div",{style:{marginBottom:14},children:[y.jsx("label",{style:{fontSize:11,color:R.textDim,fontWeight:600,marginBottom:6,display:"block"},children:G("layoutLabel",i)}),y.jsx("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:s.map(E=>y.jsx("button",{onClick:()=>a(E.meta.id),style:{...Ri(r===E.meta.id,"#4a9eff"),fontSize:11,padding:"5px 10px"},children:E.meta.label},E.meta.id))})]}),y.jsxs("div",{style:{marginBottom:14},children:[y.jsx("label",{style:{fontSize:11,color:R.textDim,fontWeight:600,marginBottom:6,display:"block"},children:G("filterSection",i)}),y.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[y.jsx("button",{style:{...Ri(w.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:k,children:G("all",i)}),Object.entries(z).map(([E,W])=>y.jsx("button",{style:{...Ri(w.has(E),W.color),fontSize:11,padding:"4px 10px"},onClick:()=>$(E),children:W.label},E))]})]}),y.jsxs("div",{children:[y.jsx("label",{style:{fontSize:11,color:R.textDim,fontWeight:600,marginBottom:6,display:"block"},children:G("filterScope",i)}),y.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[y.jsx("button",{style:{...Ri(f.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:v,children:G("all",i)}),Object.entries(T).map(([E,W])=>{var L;return y.jsx("button",{style:{...Ri(f.has(E),W),fontSize:11,padding:"4px 10px"},onClick:()=>h(E),children:(L=S[E])==null?void 0:L[i==="pl"?"pl":"en"]},E)})]})]})]})]})}const ep={x:40,y:40,scale:.52},np={x:10,y:10,scale:.3};function Zx({courseId:i,RAW_NODES:t,RAW_EDGES:r,QUESTION_BANK:s,SECTIONS:a,SCOPE_COLORS:c,SCOPE_LABELS:d,COURSE_META:f,onBackToCourses:h,initialBelief:v,initialEvidence:w,initialSelectedNode:$,initialLang:k,onBackToHome:z}){const T=Iv(),[S,N]=F.useState(up),[M,V]=ht("lang",k??"pl"),[O,D]=F.useState(new Set),[E,W]=F.useState(new Set),[L,Q]=F.useState(""),[X,Y]=F.useState($??null),[re,J]=F.useState(null),[ne,ge]=F.useState(null),[Ae,ye]=F.useState(null),[he,te]=F.useState(!1),[me,de]=F.useState(!1),P=!!v,[Z,_e]=ht("onboardingSeen",!1),[qe,Te]=F.useState(!Z&&!P),we=F.useCallback(()=>{_e(!0),Te(!1)},[_e]),Me=F.useCallback(ee=>D(He=>{const We=new Set(He);return We.has(ee)?We.delete(ee):We.add(ee),We}),[]),ve=F.useCallback(ee=>W(He=>{const We=new Set(He);return We.has(ee)?We.delete(ee):We.add(ee),We}),[]),Fe=F.useCallback(()=>D(new Set),[]),Ye=F.useCallback(()=>W(new Set),[]),bn=F.useMemo(()=>Wo(t,r),[t,r]),[xt,Wn]=F.useState(()=>jl(S,300,t,r)),De=F.useMemo(()=>t.map(ee=>{var He,We;return{...ee,x:((He=xt[ee.id])==null?void 0:He.x)??ee.x,y:((We=xt[ee.id])==null?void 0:We.y)??ee.y}}),[t,xt]),sn=F.useRef(null),{viewTransform:Ne,setViewTransform:zn,toCanvas:et,startPan:Mt,cursorStyle:lt,setCursorStyle:nt,handleMouseMove:si,handleMouseUp:Hi}=Tv(sn),{startNodeDrag:Wi,handleDragMove:Gi,handleDragEnd:Ui}=Av(et,De,Wn,nt),{diagMode:Ge,setDiagMode:Bn,mode:mn,setMode:wt,quizNode:Mn,setQuizNode:lr,questionsAnswered:Vi,setAnsweredQuestions:Ko,getAnsweredIndices:Ba,handleDiagClick:Ki,handleQuizAnswer:Zi,resetDiagnostic:bt,startDeepDive:Ir,targetNode:Ot,belief:Ht,setBelief:cr,frontier:Zo,visibleFrontier:Qi,hasStarted:ai,nextSuggestedId:Fr,expectedRemaining:Qo,pCorrect:Yi,sessionComplete:li,betaBeliefs:Lr,subgraphIds:Wt,ddClassification:Pt,ddNextNodeId:ci,ddComplete:Gt}=Nv(bn,s,i);F.useEffect(()=>{v&&Object.keys(v).length>0&&cr(v)},[]);const ui=F.useCallback(ee=>{ee.lang&&V(ee.lang),ee.view==="node"?(Y(ee.nodeId),ge(null)):ee.view==="resource"?(Y(ee.nodeId),ge(ee.resourceIndex)):ee.view==="diagnostic"?ee.mode==="quick"?(Bn(!0),wt("quick"),Y(null)):ee.mode==="deepdive"&&ee.goalNode&&(Bn(!0),Ir(ee.goalNode)):(Y(null),ge(null))},[V,Bn,wt,Ir]),{setRoute:$t}=Ov(ui);F.useEffect(()=>{Ge?$t(mn==="deepdive"&&Ot?{view:"diagnostic",mode:"deepdive",goalNode:Ot,lang:M}:{view:"diagnostic",mode:"quick",lang:M}):X?ne!=null?$t({view:"resource",nodeId:X,resourceIndex:ne,lang:M}):$t({view:"node",nodeId:X,lang:M}):$t({view:"graph",lang:M})},[X,ne,Ge,mn,Ot,M,$t]);const Xi=F.useMemo(()=>{const ee=L.toLowerCase(),He=t.filter(We=>!(O.size>0&&!O.has(We.scope)||E.size>0&&!E.has(We.section)||ee&&!We.label.toLowerCase().includes(ee)&&!We.labelPl.toLowerCase().includes(ee)));return He.length<t.length?new Set(He.map(We=>We.id)):null},[t,O,E,L]),Or=X||re,Yo=F.useMemo(()=>{var He,We;if(!Or)return null;const ee=new Set([Or]);return(He=bn.prereqs[Or])==null||He.forEach(Gn=>ee.add(Gn)),(We=bn.dependents[Or])==null||We.forEach(Gn=>ee.add(Gn)),ee},[Or,bn]),Xo=F.useMemo(()=>!Ge||mn!=="deepdive"||Wt.length===0?null:new Set(Wt),[Ge,mn,Wt]),Ut=F.useCallback(ee=>{const He=ee.target.closest("[data-node-id]");if(He){Wi(He.getAttribute("data-node-id"),ee.clientX,ee.clientY),ee.stopPropagation();return}Mt(ee.clientX,ee.clientY)},[Wi,Mt]),Jo=F.useCallback(ee=>{Gi(ee.clientX,ee.clientY)||si(ee)},[Gi,si]),Ji=F.useCallback(()=>{Ui(),Hi()},[Ui,Hi]),Na=F.useCallback(ee=>{T&&!ee.target.closest("[data-node-id]")&&Y(null)},[T]),ur=F.useRef(!1);F.useEffect(()=>{if(!(!Ge||mn!=="quick")&&!Mn&&Fr&&!li&&ai&&ur.current){ur.current=!1;const ee=setTimeout(()=>lr(Fr),400);return()=>clearTimeout(ee)}},[Ge,mn,Mn,Fr,li,ai]),F.useEffect(()=>{if(!(!Ge||mn!=="deepdive")&&!Mn&&ci&&!Gt&&ur.current){ur.current=!1;const ee=setTimeout(()=>lr(ci),400);return()=>clearTimeout(ee)}},[Ge,mn,Mn,ci,Gt]),F.useEffect(()=>{const ee=He=>{He.key==="Escape"&&(Y(null),te(!1))};return window.addEventListener("keydown",ee),()=>window.removeEventListener("keydown",ee)},[]);const es=F.useCallback(ee=>{N(ee),Wn(jl(ee,300,t,r)),zn(T?np:ep)},[zn,t,r,T]),ns=F.useCallback(()=>{Ge?(Bn(!1),bt(),Y(null)):de(!0)},[Ge,Bn,bt]),di=F.useCallback(ee=>{de(!1),bt(),ee==="deepdive"?(Bn(!0),te(!0)):(Bn(!0),wt("quick"),Y(null))},[Bn,wt,bt]),Ia=F.useCallback(ee=>{_e(!0),Te(!1),(ee==="quick"||ee==="deepdive")&&di(ee)},[_e,di]),Fa=F.useMemo(()=>{if(mn!=="deepdive")return{};const ee={};for(const[He,We]of Object.entries(Pt))We==="known"?ee[He]="known":We==="unknown"&&(ee[He]="unknown");return ee},[mn,Pt]),en=mn==="deepdive"?Fa:Ht,La=mn==="deepdive"?Wt.filter(ee=>Pt[ee]==="uncertain"):Qi,eo=M==="pl"?f.title??f.titleEn:f.titleEn??f.title,ts=qe||me||he,Hr=(ee,He="#4a9eff")=>({padding:"7px 13px",borderRadius:5,fontSize:13,cursor:"pointer",border:ee?`1px solid ${He}`:`1px solid ${R.border}`,background:ee?`${He}22`:"transparent",color:ee?He:R.textDim,whiteSpace:"nowrap",minHeight:36,fontWeight:ee?600:400});return y.jsxs("div",{style:{width:"100%",height:"100dvh",background:R.bg,fontFamily:Ue,color:R.textBody,display:"flex",flexDirection:"column",overflow:"hidden"},children:[y.jsxs("div",{style:{padding:T?"8px 12px":"8px 16px",borderBottom:`1px solid ${R.borderSubtle}`,display:"flex",alignItems:"center",gap:T?8:10,flexShrink:0},children:[(z||h)&&y.jsx("button",{onClick:z??h,style:{...Hr(!1),padding:"7px 10px"},children:"←"}),y.jsx("h1",{style:{margin:0,fontSize:13,fontWeight:700,color:R.textPrimary,letterSpacing:T?.5:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:eo}),y.jsxs("div",{style:{display:"flex",gap:0,borderRadius:6,overflow:"hidden",border:`1px solid ${R.border}`},children:[y.jsx("button",{onClick:()=>{Ge&&(Bn(!1),bt(),Y(null))},style:{padding:T?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",fontWeight:Ge?400:700,background:Ge?"transparent":"#4a9eff22",color:Ge?R.textDim:"#4a9eff",minHeight:36},children:G("exploreMode",M)}),y.jsx("button",{onClick:()=>{Ge||de(!0)},style:{padding:T?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",borderLeft:`1px solid ${R.border}`,fontWeight:Ge?700:400,background:Ge?"#f39c1222":"transparent",color:Ge?"#f39c12":R.textDim,minHeight:36},children:G(Ge?mn==="deepdive"?"diagnosticOnDeep":"diagnosticOnQuick":"diagnosticOff",M)})]}),Ge&&y.jsx("button",{onClick:()=>te(!0),style:Hr(mn==="deepdive","#8e44ad"),children:G("goalBtn",M)}),y.jsx(Kx,{lang:M,setLang:ee=>V(ee),layoutId:S,layouts:cp,onLayoutChange:es,searchTerm:L,setSearchTerm:Q,filterScope:O,toggleScope:Me,clearScope:Fe,filterSection:E,toggleSection:ve,clearSection:Ye,SECTIONS:a,SCOPE_COLORS:c,SCOPE_LABELS:d,isMobile:T})]}),y.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[y.jsxs("svg",{ref:sn,width:"100%",height:"100%",style:{cursor:lt,touchAction:"none",pointerEvents:ts?"none":"auto"},onMouseDown:Ut,onMouseMove:Jo,onMouseUp:Ji,onMouseLeave:Ji,onClick:ee=>{if(Na(ee),!Ge)return;const He=ee.target.closest("[data-node-id]");He&&Ki(He.getAttribute("data-node-id"),ee.shiftKey)},children:[y.jsxs("defs",{children:[y.jsx("marker",{id:"arrow-default",markerWidth:"8",markerHeight:"8",refX:"7",refY:"4",orient:"auto",markerUnits:"userSpaceOnUse",children:y.jsx("path",{d:"M0,0 L8,4 L0,8 L2,4 Z",fill:"#3a5578"})}),y.jsx("marker",{id:"arrow-hi",markerWidth:"8",markerHeight:"8",refX:"7",refY:"4",orient:"auto",markerUnits:"userSpaceOnUse",children:y.jsx("path",{d:"M0,0 L8,4 L0,8 L2,4 Z",fill:"#4a9eff"})}),y.jsx("marker",{id:"arrow-dim",markerWidth:"8",markerHeight:"8",refX:"7",refY:"4",orient:"auto",markerUnits:"userSpaceOnUse",children:y.jsx("path",{d:"M0,0 L8,4 L0,8 L2,4 Z",fill:"#151b26"})})]}),y.jsxs("g",{transform:`translate(${Ne.x},${Ne.y}) scale(${Ne.scale})`,children:[y.jsx(Hv,{edges:r,nodes:De,highlightedIds:Ge&&mn==="deepdive"?Xo:Yo}),y.jsx(Vv,{nodes:De,filteredIds:Ge&&mn==="deepdive"?Xo:Xi,highlightedIds:Ge?null:Yo,selected:X,onSelect:ee=>{ge(null),Y(ee===X?null:ee)},onHover:J,lang:M,diagMode:Ge,belief:en,frontier:La,scale:Ne.scale,scopeColors:c,edges:r})]})]}),X&&!Ae&&y.jsx(Ex,{nodeId:X,nodes:De,adjacency:bn,lang:M,SCOPE_COLORS:c,SCOPE_LABELS:d,SECTIONS:a,belief:en,evidence:w,QUESTION_BANK:s,onClose:()=>Y(null),onNavigate:ee=>Y(ee),onShowPath:ee=>{Y(null),ye(ee)},onQuizMe:ee=>{Y(null),Bn(!0),wt("quick"),lr(ee)}}),Ae&&y.jsx(um,{goalId:Ae,RAW_NODES:t,RAW_EDGES:r,SCOPE_COLORS:c,SCOPE_LABELS:d,SECTIONS:a,belief:en,evidence:w,lang:M,onSelectTopic:ee=>{ye(null),Y(ee)},onClose:()=>ye(null)}),Ge&&Mn&&y.jsx(Ix,{nodeId:Mn,nodes:De,lang:M,questionBank:s,excludeIndices:Ba(Mn),isMobile:T,onAnswer:(ee,He,We)=>{ur.current=!0,Zi(Mn,ee,He,We)},onSkip:ee=>{typeof ee=="number"&&Ko(He=>new Set([...He,`${Mn}:${ee}`])),lr(null)}}),Ge&&mn==="quick"&&y.jsx(Lx,{belief:Ht,frontier:Zo,visibleFrontier:Qi,hasStarted:ai,nextSuggestedId:Fr,sessionComplete:li,adjacency:bn,expectedRemaining:Qo,pCorrect:Yi,questionsAnswered:Vi,nodes:De,lang:M,onNodeClick:ee=>lr(ee),onReset:bt,SCOPE_LABELS:d,isMobile:T}),Ge&&mn==="deepdive"&&Ot&&y.jsx(Ox,{nodes:De,lang:M,targetNode:Ot,subgraphIds:Wt,ddClassification:Pt,betaBeliefs:Lr,ddComplete:Gt,ddNextNodeId:ci,questionsAnswered:Vi,onNodeClick:ee=>lr(ee),onReset:bt,isMobile:T}),!T&&y.jsx(Wx,{lang:M,diagMode:Ge,hasBelief:Object.keys(en).length>0,SCOPE_COLORS:c,SCOPE_LABELS:d,SECTIONS:a}),y.jsx("div",{style:{position:"absolute",right:12,bottom:16,display:"flex",flexDirection:"column",gap:4},children:[["＋",1.2],["－",.8],["↺",null]].map(([ee,He])=>y.jsx("button",{onClick:()=>{He===null?(Wn(jl(S,300,t,r)),zn(T?np:ep)):zn(We=>({...We,scale:Math.max(.15,Math.min(5,We.scale*He))}))},style:{width:44,height:44,background:R.surface,border:`1px solid ${R.border}`,color:R.textBody,borderRadius:8,cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.4)"},children:ee},ee))}),T&&Ge&&!Mn&&y.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:`${R.surface}ee`,borderTop:`1px solid ${R.border}`,display:"flex",gap:0,zIndex:20},children:[y.jsx("button",{onClick:()=>te(!0),style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",borderRight:`1px solid ${R.border}`,color:mn==="deepdive"?"#c39bd3":R.textDim,cursor:"pointer"},children:G("goalBtn",M)}),y.jsx("button",{onClick:ns,style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",color:"#f39c12",cursor:"pointer",fontWeight:600},children:G("reset",M)})]})]}),he&&y.jsx(pm,{nodes:De,lang:M,SECTIONS:a,SCOPE_COLORS:c,onSelect:ee=>{te(!1),Ir(ee)},onClose:()=>te(!1)}),y.jsx(Gx,{isOpen:me,onSelect:di,onClose:()=>de(!1),lang:M}),y.jsx(Vx,{isOpen:qe,onSelect:Ia,onClose:we,lang:M})]})}function Qx({lang:i,setLang:t,themeId:r,onThemeChange:s,onStartQuiz:a,onStartGoalQuiz:c,onBrowseMap:d}){const[f,h]=F.useState("standard");return y.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:R.bg,fontFamily:Ue,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 20px",position:"relative"},children:[y.jsxs("div",{style:{position:"absolute",top:16,right:20,display:"flex",gap:10,alignItems:"center"},children:[y.jsx("div",{style:{display:"flex",gap:5},children:Object.entries(oc).map(([v,w])=>y.jsx("button",{onClick:()=>s(v),title:w.name,style:{width:18,height:18,borderRadius:"50%",background:w.bg,border:r===v?`2px solid ${w.textPrimary}`:`2px solid ${w.border}`,cursor:"pointer",padding:0,boxShadow:r===v?`0 0 6px ${w.textDim}`:"none"}},v))}),y.jsx("div",{style:{display:"flex",gap:0,borderRadius:6,overflow:"hidden",border:`1px solid ${R.border}`},children:["pl","en"].map(v=>y.jsx("button",{onClick:()=>t(v),style:{padding:"10px 14px",fontSize:12,cursor:"pointer",border:"none",borderLeft:v==="en"?`1px solid ${R.border}`:"none",background:i===v?"#4a9eff18":"transparent",color:i===v?"#4a9eff":R.textDim,fontWeight:i===v?600:400,fontFamily:Ue},children:v.toUpperCase()},v))})]}),y.jsxs("div",{style:{maxWidth:440,width:"100%",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:0},children:[y.jsxs("svg",{width:"80",height:"56",viewBox:"0 0 80 56",style:{marginBottom:28,opacity:.7},children:[y.jsx("line",{x1:"14",y1:"44",x2:"40",y2:"12",stroke:R.edgeDefault,strokeWidth:"1.5"}),y.jsx("line",{x1:"66",y1:"44",x2:"40",y2:"12",stroke:R.edgeDefault,strokeWidth:"1.5"}),y.jsx("line",{x1:"14",y1:"44",x2:"40",y2:"44",stroke:R.edgeDefault,strokeWidth:"1.5"}),y.jsx("line",{x1:"40",y1:"44",x2:"66",y2:"44",stroke:R.edgeDefault,strokeWidth:"1.5"}),y.jsx("line",{x1:"40",y1:"44",x2:"40",y2:"12",stroke:R.edgeDefault,strokeWidth:"1.5"}),y.jsx("circle",{cx:"40",cy:"12",r:"5",fill:"#4a9eff",opacity:"0.8"}),y.jsx("circle",{cx:"14",cy:"44",r:"5",fill:R.known,opacity:"0.8"}),y.jsx("circle",{cx:"40",cy:"44",r:"5",fill:R.frontier,opacity:"0.8"}),y.jsx("circle",{cx:"66",cy:"44",r:"5",fill:R.unknown,opacity:"0.6"})]}),y.jsx("div",{style:{fontSize:13,fontWeight:600,color:R.textDim,letterSpacing:2,textTransform:"uppercase",marginBottom:16},children:"oczochodzi.pl"}),y.jsx("h1",{style:{margin:"0 0 12px",fontSize:26,fontWeight:700,color:R.textPrimary,lineHeight:1.3,letterSpacing:-.3},children:G("heroTitle",i)}),y.jsx("p",{style:{margin:"0 0 36px",fontSize:14,lineHeight:1.7,color:R.textDim,maxWidth:360},children:G("heroSub",i)}),y.jsx("button",{onClick:()=>a(f),style:{width:"100%",maxWidth:320,padding:"16px 24px",fontSize:15,fontWeight:600,fontFamily:Ue,borderRadius:10,border:"1px solid #4a9eff50",background:"#4a9eff18",color:"#4a9eff",cursor:"pointer",marginBottom:12,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:v=>{v.currentTarget.style.background="#4a9eff28",v.currentTarget.style.borderColor="#4a9eff80"},onMouseLeave:v=>{v.currentTarget.style.background="#4a9eff18",v.currentTarget.style.borderColor="#4a9eff50"},children:G("heroStart",i)}),y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16,fontSize:12},children:[y.jsx("span",{style:{color:R.textFaint},children:G("heroLength",i)}),y.jsx("select",{value:f,onChange:v=>h(v.target.value),style:{background:R.surface,border:`1px solid ${R.border}`,borderRadius:6,padding:"5px 10px",fontSize:12,fontFamily:Ue,color:R.textBody,cursor:"pointer",outline:"none"},children:Object.entries(Gl).map(([v,w])=>y.jsxs("option",{value:v,children:[G(w.labelKey,i)," (~",w.maxQuestions," ",G("heroQuestions",i),")"]},v))})]}),c&&y.jsx("button",{onClick:c,style:{width:"100%",maxWidth:320,padding:"12px 24px",fontSize:13,fontFamily:Ue,borderRadius:8,border:`1px solid ${R.border}`,background:"transparent",color:R.textBody,cursor:"pointer",transition:"background 0.15s, border-color 0.15s"},onMouseEnter:v=>{v.currentTarget.style.background="#8e44ad14",v.currentTarget.style.borderColor="#8e44ad50"},onMouseLeave:v=>{v.currentTarget.style.background="transparent",v.currentTarget.style.borderColor=R.border},children:G("heroGoal",i)}),y.jsx("button",{onClick:d,style:{padding:"12px 24px",fontSize:12,fontFamily:Ue,borderRadius:8,border:"none",background:"transparent",color:R.textFaint,cursor:"pointer",transition:"color 0.15s"},onMouseEnter:v=>{v.currentTarget.style.color=R.textDim},onMouseLeave:v=>{v.currentTarget.style.color=R.textFaint},children:G("heroExplore",i)}),y.jsx("div",{style:{marginTop:48,display:"flex",gap:24,fontSize:11,color:R.textFaint,lineHeight:1.6,flexWrap:"wrap",justifyContent:"center"},children:[{num:"1",text:G("heroStep1",i)},{num:"2",text:G("heroStep2",i)},{num:"3",text:G("heroStep3",i)}].map(({num:v,text:w})=>y.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,maxWidth:140},children:[y.jsx("span",{style:{width:20,height:20,borderRadius:"50%",border:`1px solid ${R.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:R.textDim,flexShrink:0},children:v}),y.jsx("span",{children:w})]},v))})]})]})}function Yx({RAW_NODES:i,RAW_EDGES:t,QUESTION_BANK:r,lang:s,quizPreset:a="standard",onComplete:c,onExit:d}){var qe,Te;const f=Gl[a]??Gl.standard,h=F.useMemo(()=>Wo(i,t),[i,t]),v=F.useMemo(()=>[...new Set([...Object.keys(h.prereqs),...Object.keys(h.dependents),...Object.keys(r)])].map(Me=>({id:Me})),[h,r]),w=F.useMemo(()=>Object.fromEntries(i.map(we=>[we.id,we])),[i]),[$,k]=F.useState({}),[z,T]=F.useState({correct:0,incorrect:0,questionsAnswered:0}),[S,N]=F.useState(new Set),[M,V]=F.useState({}),[O,D]=F.useState("answering"),[E,W]=F.useState(null),[L,Q]=F.useState(0),X=F.useMemo(()=>{const we=z.correct+z.incorrect;return we===0?.5:(z.correct+.5)/(we+1)},[z]),Y=F.useMemo(()=>lc(v,$,h,X),[v,$,h,X]),re=F.useMemo(()=>{const we=[];return S.forEach(Me=>{const[ve,Fe]=Me.split(":");ve===Y&&we.push(parseInt(Fe,10))}),we},[S,Y]),J=F.useMemo(()=>Y?ic(r,Y,re):null,[r,Y,re]),ne=F.useMemo(()=>J?Fi.random(J.options.length):null,[J]),ge=F.useMemo(()=>ne?ne.apply(J.options):[],[ne,J]),Ae=F.useMemo(()=>ne?ne.displayIndex(J.correct):-1,[ne,J]),ye=F.useMemo(()=>cc(v,$,z.questionsAnswered,f),[v,$,z.questionsAnswered,f]);F.useEffect(()=>{ye&&z.questionsAnswered>0&&D("done")},[ye,z.questionsAnswered]);const he=F.useCallback(()=>{E!==null&&D("revealed")},[E]),te=F.useCallback(()=>{const we=E===Ae,Me=(J==null?void 0:J.tests)??{[Y]:1};k(ve=>Lo(Y,we,Me,ve,h)),V(ve=>({...ve,[Y]:{correct:we,questionText:(J==null?void 0:J.q)??null}})),(J==null?void 0:J.index)!=null&&N(ve=>new Set([...ve,`${Y}:${J.index}`])),T(ve=>({correct:ve.correct+(we?1:0),incorrect:ve.incorrect+(we?0:1),questionsAnswered:ve.questionsAnswered+1})),W(null),D("answering"),Q(ve=>ve+1)},[E,Ae,J,Y,h]),me=F.useCallback(we=>{const Me={[Y]:1};k(ve=>Lo(Y,we,Me,ve,h)),V(ve=>({...ve,[Y]:{correct:we,questionText:null}})),N(ve=>new Set([...ve,`${Y}:-1`])),T(ve=>({correct:ve.correct+(we?1:0),incorrect:ve.incorrect+(we?0:1),questionsAnswered:ve.questionsAnswered+1})),Q(ve=>ve+1)},[Y,h]);F.useEffect(()=>{const we=Me=>{if(Me.key==="Enter"&&(O==="answering"&&E!==null?he():O==="revealed"&&te()),O==="answering"&&["1","2","3","4"].includes(Me.key)){const ve=parseInt(Me.key)-1;ve<ge.length&&W(ve)}};return window.addEventListener("keydown",we),()=>window.removeEventListener("keydown",we)},[O,E,he,te,ge.length]),F.useEffect(()=>{O==="done"&&c($,z,M)},[O]);const de=Y?(s==="pl"?(qe=w[Y])==null?void 0:qe.labelPl:(Te=w[Y])==null?void 0:Te.label)??Y:"",P=we=>y.jsx("span",{dangerouslySetInnerHTML:{__html:At(we)}});if(O==="done"||!Y&&z.questionsAnswered>0)return y.jsx("div",{style:{width:"100%",minHeight:"100dvh",background:R.bg,fontFamily:Ue,display:"flex",alignItems:"center",justifyContent:"center",color:R.textDim,fontSize:14},children:G("quizProcessing",s)});const Z=f.maxQuestions,_e=Z>0?Math.min(100,Math.round(z.questionsAnswered/Z*100)):0;return y.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:R.bg,fontFamily:Ue,display:"flex",flexDirection:"column",alignItems:"center",padding:"0 20px"},children:[y.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",padding:"20px 0 0",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[y.jsx("button",{onClick:()=>{(z.questionsAnswered===0||window.confirm(G("quizExitConfirm",s)))&&d()},style:{padding:"10px 14px",fontSize:12,fontFamily:Ue,borderRadius:6,border:`1px solid ${R.border}`,background:"transparent",color:R.textDim,cursor:"pointer"},children:G("quizExit",s)}),y.jsxs("span",{style:{fontSize:12,color:R.textFaint},children:[G("quizQuestion",s)," ",z.questionsAnswered+1]})]}),y.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:16},children:[y.jsx("div",{style:{height:3,borderRadius:2,background:R.border,overflow:"hidden"},children:y.jsx("div",{style:{height:"100%",borderRadius:2,width:`${_e}%`,background:"#4a9eff",transition:"width 0.5s ease"}})}),y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:6,fontSize:10,color:R.textFaint},children:[y.jsxs("span",{children:[z.questionsAnswered," / ",Z," ",G("quizOf",s)]}),y.jsxs("span",{children:[z.correct," ",G("quizCorrectShort",s)]})]})]}),y.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:40,animation:"fadeIn 0.25s ease"},children:[y.jsx("div",{style:{fontSize:11,color:R.textFaint,marginBottom:16,letterSpacing:.5},children:de}),J?y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{fontSize:16,color:R.textPrimary,lineHeight:1.7,marginBottom:28},children:P(J.q)}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:24},children:ge.map((we,Me)=>{let ve="transparent",Fe=R.border,Ye=R.textBody;return E===Me&&O==="answering"&&(ve="#4a9eff12",Fe="#4a9eff60",Ye="#4a9eff"),O==="revealed"&&(Me===Ae?(ve="#27ae6015",Fe="#27ae6060",Ye="#2ecc71"):Me===E?(ve="#e74c3c15",Fe="#e74c3c60",Ye="#ff6b6b"):Ye=R.textFaint),y.jsxs("button",{onClick:()=>{O==="answering"&&W(Me)},style:{textAlign:"left",padding:"14px 16px",borderRadius:8,fontSize:14,fontFamily:Ue,cursor:O==="answering"?"pointer":"default",background:ve,border:`1px solid ${Fe}`,color:Ye,lineHeight:1.6,transition:"all 0.15s ease"},children:[y.jsx("span",{style:{marginRight:10,opacity:.4,fontSize:12},children:["A","B","C","D"][Me]}),P(we)]},Me)})}),O==="revealed"&&J.hint&&y.jsx("div",{style:{fontSize:12,color:R.textDim,marginBottom:20,padding:"12px 14px",background:"#ffffff06",borderRadius:8,lineHeight:1.7,borderLeft:`2px solid ${R.border}`},children:P(J.hint)}),O==="answering"?y.jsxs("button",{onClick:he,disabled:E===null,style:{...ga("#4a9eff"),width:"100%",opacity:E===null?.3:1},children:[G("quizCheck",s),y.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]}):y.jsxs("button",{onClick:te,style:{...ga(E===Ae?R.known:"#4a9eff"),width:"100%"},children:[G("quizContinue",s),y.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]})]}):y.jsxs("div",{children:[y.jsx("p",{style:{fontSize:15,color:R.textBody,lineHeight:1.7,marginBottom:24},children:G("quizNoQuestion",s)}),y.jsxs("div",{style:{display:"flex",gap:10},children:[y.jsx("button",{onClick:()=>me(!0),style:{...ga(R.known),flex:1},children:G("quizYes",s)}),y.jsx("button",{onClick:()=>me(!1),style:{...ga(R.unknown),flex:1},children:G("quizNo",s)})]})]})]},L),y.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]})}function ga(i){return{padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:Ue,borderRadius:8,border:`1px solid ${i}50`,background:`${i}18`,color:i,cursor:"pointer",transition:"background 0.15s"}}const tp=10;function Xx({goalId:i,RAW_NODES:t,RAW_EDGES:r,QUESTION_BANK:s,lang:a,onComplete:c,onExit:d}){var Ye,bn,xt,Wn;const f=F.useMemo(()=>Wo(t,r),[t,r]),h=F.useMemo(()=>t.map(De=>({id:De.id})),[t]),v=F.useMemo(()=>Object.fromEntries(t.map(De=>[De.id,De])),[t]),w=F.useMemo(()=>[...fp(i,f,h)],[i,f,h]),$=F.useMemo(()=>w.map(De=>({id:De})),[w]),[k,z]=F.useState({}),[T,S]=F.useState({correct:0,incorrect:0,questionsAnswered:0}),[N,M]=F.useState(new Set),[V,O]=F.useState({}),[D,E]=F.useState("answering"),[W,L]=F.useState(null),[Q,X]=F.useState(0),Y=F.useMemo(()=>{const De=T.correct+T.incorrect;return De===0?.5:(T.correct+.5)/(De+1)},[T]),re=F.useMemo(()=>lc($,k,f,Y),[$,k,f,Y]),J=F.useMemo(()=>{const De=[];return N.forEach(sn=>{const[Ne,zn]=sn.split(":");Ne===re&&De.push(parseInt(zn,10))}),De},[N,re]),ne=F.useMemo(()=>re?ic(s,re,J):null,[s,re,J]),ge=F.useMemo(()=>ne?Fi.random(ne.options.length):null,[ne]),Ae=F.useMemo(()=>ge?ge.apply(ne.options):[],[ge,ne]),ye=F.useMemo(()=>ge?ge.displayIndex(ne.correct):-1,[ge,ne]),he=F.useMemo(()=>({maxQuestions:tp,completionRatio:0}),[]),te=F.useMemo(()=>cc($,k,T.questionsAnswered,he),[$,k,T.questionsAnswered,he]);F.useEffect(()=>{te&&T.questionsAnswered>0&&E("done")},[te,T.questionsAnswered]);const me=F.useCallback(()=>{W!==null&&E("revealed")},[W]),de=F.useCallback(()=>{const De=W===ye,sn=(ne==null?void 0:ne.tests)??{[re]:1};z(Ne=>Lo(re,De,sn,Ne,f)),O(Ne=>({...Ne,[re]:{correct:De,questionText:(ne==null?void 0:ne.q)??null}})),(ne==null?void 0:ne.index)!=null&&M(Ne=>new Set([...Ne,`${re}:${ne.index}`])),S(Ne=>({correct:Ne.correct+(De?1:0),incorrect:Ne.incorrect+(De?0:1),questionsAnswered:Ne.questionsAnswered+1})),L(null),E("answering"),X(Ne=>Ne+1)},[W,ye,ne,re,f]),P=F.useCallback(De=>{const sn={[re]:1};z(Ne=>Lo(re,De,sn,Ne,f)),O(Ne=>({...Ne,[re]:{correct:De,questionText:null}})),M(Ne=>new Set([...Ne,`${re}:-1`])),S(Ne=>({correct:Ne.correct+(De?1:0),incorrect:Ne.incorrect+(De?0:1),questionsAnswered:Ne.questionsAnswered+1})),X(Ne=>Ne+1)},[re,f]);F.useEffect(()=>{const De=sn=>{if(sn.key==="Enter"&&(D==="answering"&&W!==null?me():D==="revealed"&&de()),D==="answering"&&["1","2","3","4"].includes(sn.key)){const Ne=parseInt(sn.key)-1;Ne<Ae.length&&L(Ne)}};return window.addEventListener("keydown",De),()=>window.removeEventListener("keydown",De)},[D,W,me,de,Ae.length]),F.useEffect(()=>{D==="done"&&c(i,k,T,V)},[D]);const Z=a==="pl"?(Ye=v[i])==null?void 0:Ye.labelPl:(bn=v[i])==null?void 0:bn.label,_e=re?(a==="pl"?(xt=v[re])==null?void 0:xt.labelPl:(Wn=v[re])==null?void 0:Wn.label)??re:"",qe=De=>y.jsx("span",{dangerouslySetInnerHTML:{__html:At(De)}}),Te=Object.values(k).filter(De=>De==="known").length,we=Object.values(k).filter(De=>De==="unknown").length,Me=Te+we,ve=w.length,Fe=ve>0?Math.round(Me/ve*100):0;return D==="done"||!re&&T.questionsAnswered>0?y.jsx("div",{style:{width:"100%",minHeight:"100dvh",background:R.bg,fontFamily:Ue,display:"flex",alignItems:"center",justifyContent:"center",color:R.textDim,fontSize:14},children:G("quizProcessing",a)}):y.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:R.bg,fontFamily:Ue,display:"flex",flexDirection:"column",alignItems:"center",padding:"0 20px"},children:[y.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",padding:"20px 0 0",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[y.jsx("button",{onClick:()=>{(T.questionsAnswered===0||window.confirm(G("quizExitConfirm",a)))&&d()},style:{padding:"10px 14px",fontSize:12,fontFamily:Ue,borderRadius:6,border:`1px solid ${R.border}`,background:"transparent",color:R.textDim,cursor:"pointer"},children:G("quizExit",a)}),y.jsxs("span",{style:{fontSize:12,color:R.textFaint},children:[G("quizQuestion",a)," ",T.questionsAnswered+1," / ",tp]})]}),y.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:16,padding:"10px 14px",borderRadius:8,background:"#4a9eff08",border:"1px solid #4a9eff20"},children:[y.jsx("div",{style:{fontSize:10,color:R.textFaint,letterSpacing:.5,marginBottom:2},children:G("goalQuizSub",a)}),y.jsx("div",{style:{fontSize:13,color:"#4a9eff",fontWeight:600},children:Z}),y.jsxs("div",{style:{fontSize:10,color:R.textFaint,marginTop:2},children:[ve," ",G("goalQuizTopics",a)]})]}),y.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:12},children:[y.jsx("div",{style:{height:3,borderRadius:2,background:R.border,overflow:"hidden"},children:y.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Fe}%`,background:"#4a9eff",transition:"width 0.5s ease"}})}),y.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:6,fontSize:10,color:R.textFaint},children:[y.jsxs("span",{children:[Me,"/",ve," ",G("quizClassified",a)]}),y.jsxs("span",{children:[Math.round(Y*100),"% ",G("quizAccuracy",a)]})]})]}),y.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:32,animation:"fadeIn 0.25s ease"},children:[y.jsx("div",{style:{fontSize:11,color:R.textFaint,marginBottom:16,letterSpacing:.5},children:_e}),ne?y.jsxs(y.Fragment,{children:[y.jsx("div",{style:{fontSize:16,color:R.textPrimary,lineHeight:1.7,marginBottom:28},children:qe(ne.q)}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:24},children:Ae.map((De,sn)=>{let Ne="transparent",zn=R.border,et=R.textBody;return W===sn&&D==="answering"&&(Ne="#4a9eff12",zn="#4a9eff60",et="#4a9eff"),D==="revealed"&&(sn===ye?(Ne="#27ae6015",zn="#27ae6060",et="#2ecc71"):sn===W?(Ne="#e74c3c15",zn="#e74c3c60",et="#ff6b6b"):et=R.textFaint),y.jsxs("button",{onClick:()=>{D==="answering"&&L(sn)},style:{textAlign:"left",padding:"14px 16px",borderRadius:8,fontSize:14,fontFamily:Ue,cursor:D==="answering"?"pointer":"default",background:Ne,border:`1px solid ${zn}`,color:et,lineHeight:1.6,transition:"all 0.15s ease"},children:[y.jsx("span",{style:{marginRight:10,opacity:.4,fontSize:12},children:["A","B","C","D"][sn]}),qe(De)]},sn)})}),D==="revealed"&&ne.hint&&y.jsx("div",{style:{fontSize:12,color:R.textDim,marginBottom:20,padding:"12px 14px",background:"#ffffff06",borderRadius:8,lineHeight:1.7,borderLeft:`2px solid ${R.border}`},children:qe(ne.hint)}),D==="answering"?y.jsxs("button",{onClick:me,disabled:W===null,style:{...ya("#4a9eff"),width:"100%",opacity:W===null?.3:1},children:[G("quizCheck",a),y.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]}):y.jsxs("button",{onClick:de,style:{...ya(W===ye?R.known:"#4a9eff"),width:"100%"},children:[G("quizContinue",a),y.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]})]}):y.jsxs("div",{children:[y.jsx("p",{style:{fontSize:15,color:R.textBody,lineHeight:1.7,marginBottom:24},children:G("quizNoQuestion",a)}),y.jsxs("div",{style:{display:"flex",gap:10},children:[y.jsx("button",{onClick:()=>P(!0),style:{...ya(R.known),flex:1},children:G("quizYes",a)}),y.jsx("button",{onClick:()=>P(!1),style:{...ya(R.unknown),flex:1},children:G("quizNo",a)})]})]})]},Q),y.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]})}function ya(i){return{padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:Ue,borderRadius:8,border:`1px solid ${i}50`,background:`${i}18`,color:i,cursor:"pointer",transition:"background 0.15s"}}function Jx({RAW_NODES:i,RAW_EDGES:t,SCOPE_COLORS:r,SCOPE_LABELS:s,belief:a,stats:c,evidence:d,lang:f,onSeeMap:h,onRetake:v,onSelectTopic:w}){const $=F.useMemo(()=>Wo(i,t),[i,t]),k=F.useMemo(()=>Object.fromEntries(i.map(D=>[D.id,D])),[i]),z=D=>{var E,W;return f==="pl"?(E=k[D])==null?void 0:E.labelPl:(W=k[D])==null?void 0:W.label},T=i.filter(D=>a[D.id]==="known"),S=i.filter(D=>a[D.id]==="unknown"),N=i.length,M=F.useMemo(()=>S.filter(D=>($.prereqs[D.id]??[]).every(E=>a[E]==="known")).slice(0,8),[S,$,a]),V=c.correct+c.incorrect>0?Math.round(c.correct/(c.correct+c.incorrect)*100):0,O=M.length>0;return y.jsx("div",{style:{width:"100%",minHeight:"100dvh",background:R.bg,fontFamily:Ue,display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 20px 60px"},children:y.jsxs("div",{style:{maxWidth:"min(520px, calc(100% - 32px))",width:"100%"},children:[y.jsx("div",{style:{fontSize:11,color:R.textFaint,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8},children:"oczochodzi.pl"}),y.jsx("h1",{style:{margin:"0 0 8px",fontSize:24,fontWeight:700,color:R.textPrimary,lineHeight:1.3},children:G("resultsTitle",f)}),y.jsxs("p",{style:{margin:"0 0 32px",fontSize:13,color:R.textDim,lineHeight:1.6},children:[c.questionsAnswered," ",G("resultsAnswered",f)," · ",V,"% ",G("resultsAccuracy",f)]}),y.jsxs("div",{style:{display:"flex",gap:10,marginBottom:32},children:[y.jsx(rp,{count:T.length,label:G("resultsKnown",f),color:R.known,total:N}),y.jsx(rp,{count:S.length,label:G("resultsToStudy",f),color:"#e74c3c",total:N})]}),O&&y.jsxs("div",{style:{marginBottom:32},children:[y.jsx("h2",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:R.textPrimary},children:G("resultsGapsTitle",f)}),y.jsx("p",{style:{margin:"0 0 16px",fontSize:12,color:R.textDim,lineHeight:1.6},children:G("resultsGapsSub",f)}),y.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:M.map((D,E)=>{var X;const W=(r==null?void 0:r[D.scope])??R.textDim,L=((X=s==null?void 0:s[D.scope])==null?void 0:X[f==="pl"?"pl":"en"])??"",Q=D.resources&&D.resources.length>0;return y.jsxs("div",{onClick:()=>w==null?void 0:w(D.id),style:{padding:"12px 14px",borderRadius:8,background:"#e74c3c08",border:"1px solid #e74c3c20",display:"flex",alignItems:"center",gap:12,cursor:w?"pointer":"default",transition:"background 0.15s, border-color 0.15s"},onMouseEnter:Y=>{w&&(Y.currentTarget.style.background="#e74c3c14",Y.currentTarget.style.borderColor="#e74c3c40")},onMouseLeave:Y=>{w&&(Y.currentTarget.style.background="#e74c3c08",Y.currentTarget.style.borderColor="#e74c3c20")},children:[y.jsx("span",{style:{width:24,height:24,borderRadius:"50%",background:`${W}18`,border:`1px solid ${W}40`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:W,flexShrink:0,fontWeight:600},children:E+1}),y.jsxs("div",{style:{flex:1},children:[y.jsx("div",{style:{fontSize:13,color:R.textPrimary,fontWeight:500},dangerouslySetInnerHTML:{__html:At(z(D.id)??"")}}),y.jsxs("div",{style:{fontSize:10,color:R.textFaint,marginTop:2},children:[L,Q&&y.jsx("span",{style:{color:"#4a9eff",marginLeft:8},children:G("resultsHasResource",f)})]})]})]},D.id)})}),S.length>M.length&&y.jsxs("div",{style:{marginTop:8,fontSize:11,color:R.textFaint},children:["+",S.length-M.length," ",G("resultsMore",f)]})]}),!O&&S.length===0&&y.jsxs("div",{style:{padding:"20px 16px",borderRadius:10,background:"#27ae6010",border:"1px solid #27ae6030",marginBottom:32,textAlign:"center"},children:[y.jsx("div",{style:{fontSize:15,color:R.known,fontWeight:600,marginBottom:4},children:G("resultsAllGood",f)}),y.jsx("div",{style:{fontSize:12,color:R.textDim},children:G("resultsAllGoodSub",f)})]}),y.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginTop:8},children:[y.jsx("button",{onClick:h,style:{width:"100%",padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:Ue,borderRadius:8,border:"1px solid #4a9eff50",background:"#4a9eff18",color:"#4a9eff",cursor:"pointer"},children:G("resultsSeeMap",f)}),y.jsx("button",{onClick:()=>{const E=`https://oczochodzi.pl/#/results/${a?Wl(a):""}`,W=f==="pl"?`Sprawdziłem swoją wiedzę z matmy — ${T.length}/${N} tematów znanych! Sprawdź się:`:`I tested my math knowledge — ${T.length}/${N} topics known! Try it:`;navigator.share?navigator.share({title:"oczochodzi.pl",text:W,url:E}).catch(()=>{}):navigator.clipboard.writeText(`${W} ${E}`).then(()=>{alert(f==="pl"?"Skopiowano do schowka!":"Copied to clipboard!")})},style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:Ue,borderRadius:8,border:`1px solid ${R.border}`,background:"transparent",color:R.textBody,cursor:"pointer"},children:G("resultsShare",f)}),y.jsx("button",{onClick:v,style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:Ue,borderRadius:8,border:`1px solid ${R.border}`,background:"transparent",color:R.textDim,cursor:"pointer"},children:G("resultsRetake",f)})]}),y.jsxs("div",{style:{marginTop:24,paddingTop:20,borderTop:`1px solid ${R.border}`,textAlign:"center"},children:[y.jsx("p",{style:{fontSize:12,color:R.textDim,marginBottom:8,lineHeight:1.6},children:G("coffeeText",f)}),y.jsx("a",{href:"https://buycoffee.to/oczochodzi",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",padding:"10px 20px",fontSize:13,fontFamily:Ue,borderRadius:8,border:"1px solid #FFD16640",background:"#FFD16610",color:"#FFD166",textDecoration:"none",cursor:"pointer"},children:G("coffeeBtn",f)})]})]})})}function rp({count:i,label:t,color:r,total:s}){const a=s>0?Math.round(i/s*100):0;return y.jsxs("div",{style:{flex:1,padding:"16px 14px",borderRadius:10,background:`${r}08`,border:`1px solid ${r}20`,textAlign:"center"},children:[y.jsx("div",{style:{fontSize:28,fontWeight:700,color:r,lineHeight:1},children:i}),y.jsx("div",{style:{fontSize:11,color:R.textFaint,marginTop:6},children:t}),y.jsx("div",{style:{marginTop:8,height:3,borderRadius:2,background:`${r}15`,overflow:"hidden"},children:y.jsx("div",{style:{height:"100%",borderRadius:2,width:`${a}%`,background:r,opacity:.6}})}),y.jsxs("div",{style:{fontSize:10,color:R.textFaint,marginTop:4},children:[a,"% of ",s]})]})}function ew(){const t=window.location.hash.replace(/^#\/?/,"").split("/");return t[0]==="results"&&t[1]?{phase:"results",code:t[1]}:t[0]==="map"&&t[1]?{phase:"map",code:t[1],node:t[2]||null}:t[0]==="map"?{phase:"map"}:null}function nw(){var ye;const i=sv,t=ov[i],[r,s]=ht("lang","pl"),a=typeof window<"u"&&((ye=window.matchMedia)!=null&&ye.call(window,"(prefers-color-scheme: light)").matches)?"bright":"midnight",[c,d]=ht("theme",a),f=ew(),h=f!=null&&f.code?uv(f.code):null,[v,w]=F.useState((f==null?void 0:f.phase)??"hero"),[$,k]=F.useState((f==null?void 0:f.node)??null),[z,T]=F.useState(h),[S,N]=F.useState(h?{correct:0,incorrect:0,questionsAnswered:0}:null),[M,V]=F.useState(null),[O,D]=F.useState("standard"),[E,W]=F.useState(null),L=F.useCallback(he=>{l1(he),d(he)},[d]);l1(c),F.useEffect(()=>{let he="";v==="results"&&z?he=`#/results/${Wl(z)}`:v==="map"&&z&&(he=`#/map/${Wl(z)}`),he&&window.location.hash!==he?window.history.replaceState(null,"",he):!he&&window.location.hash&&window.history.replaceState(null,"",window.location.pathname)},[v,z]);const Q=F.useCallback((he="standard")=>{D(he),T(null),N(null),V(null),w("quiz")},[]),X=F.useCallback((he,te,me)=>{T(he),N(te),V(me??{}),w("results")},[]),Y=F.useCallback(()=>{w("goalPick")},[]),re=F.useCallback(he=>{W(he),T(null),N(null),V(null),w("goalQuiz")},[]),J=F.useCallback((he,te,me,de)=>{W(he),T(te),N(me),V(de??{}),w("goalPath")},[]),ne=F.useCallback(he=>{k(he??null),w("map")},[]),ge=F.useCallback(()=>{T(null),N(null),V(null),w("map")},[]),Ae=F.useCallback(()=>{w("hero")},[]);if(!t)return null;switch(v){case"hero":return y.jsx(Qx,{lang:r,setLang:s,themeId:c,onThemeChange:L,onStartQuiz:Q,onStartGoalQuiz:Y,onBrowseMap:ge});case"quiz":return y.jsx(Yx,{RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,lang:r,quizPreset:O,onComplete:X,onExit:Ae});case"goalPick":return y.jsx(pm,{isOpen:!0,nodes:t.RAW_NODES,lang:r,SECTIONS:t.SECTIONS,SCOPE_COLORS:t.SCOPE_COLORS,onSelect:re,onClose:Ae});case"goalQuiz":return y.jsx(Xx,{goalId:E,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,lang:r,onComplete:J,onExit:Ae});case"goalPath":return y.jsx(um,{goalId:E,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,SECTIONS:t.SECTIONS,belief:z,evidence:M,lang:r,onSelectTopic:he=>ne(he),onClose:Ae});case"results":return y.jsx(Jx,{RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,belief:z,stats:S,evidence:M,lang:r,onSeeMap:ne,onRetake:()=>Q(O),onSelectTopic:he=>ne(he)});case"map":return y.jsx(Zx,{courseId:i,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,SECTIONS:t.SECTIONS,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,COURSE_META:t.COURSE_META,initialBelief:z,initialEvidence:M,initialSelectedNode:$,initialLang:r,onBackToHome:Ae},i);default:return null}}ah.createRoot(document.getElementById("root")).render(y.jsx(F.StrictMode,{children:y.jsx(nw,{})}));
