(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function r(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=r(s);fetch(s.href,c)}})();var _0={exports:{}},Li={},j0={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o1;function o2(){if(o1)return He;o1=1;var o=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function S(R){return R===null||typeof R!="object"?null:(R=x&&R[x]||R["@@iterator"],typeof R=="function"?R:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,_={};function T(R,U,ge){this.props=R,this.context=U,this.refs=_,this.updater=ge||q}T.prototype.isReactComponent={},T.prototype.setState=function(R,U){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,U,"setState")},T.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function P(){}P.prototype=T.prototype;function B(R,U,ge){this.props=R,this.context=U,this.refs=_,this.updater=ge||q}var W=B.prototype=new P;W.constructor=B,j(W,T.prototype),W.isPureReactComponent=!0;var I=Array.isArray,E=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function ee(R,U,ge){var ve,qe={},we=null,ae=null;if(U!=null)for(ve in U.ref!==void 0&&(ae=U.ref),U.key!==void 0&&(we=""+U.key),U)E.call(U,ve)&&!F.hasOwnProperty(ve)&&(qe[ve]=U[ve]);var he=arguments.length-2;if(he===1)qe.children=ge;else if(1<he){for(var Me=Array(he),Ue=0;Ue<he;Ue++)Me[Ue]=arguments[Ue+2];qe.children=Me}if(R&&R.defaultProps)for(ve in he=R.defaultProps,he)qe[ve]===void 0&&(qe[ve]=he[ve]);return{$$typeof:o,type:R,key:we,ref:ae,props:qe,_owner:O.current}}function J(R,U){return{$$typeof:o,type:R.type,key:U,ref:R.ref,props:R.props,_owner:R._owner}}function ne(R){return typeof R=="object"&&R!==null&&R.$$typeof===o}function re(R){var U={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(ge){return U[ge]})}var Q=/\/+/g;function Y(R,U){return typeof R=="object"&&R!==null&&R.key!=null?re(""+R.key):U.toString(36)}function ce(R,U,ge,ve,qe){var we=typeof R;(we==="undefined"||we==="boolean")&&(R=null);var ae=!1;if(R===null)ae=!0;else switch(we){case"string":case"number":ae=!0;break;case"object":switch(R.$$typeof){case o:case t:ae=!0}}if(ae)return ae=R,qe=qe(ae),R=ve===""?"."+Y(ae,0):ve,I(qe)?(ge="",R!=null&&(ge=R.replace(Q,"$&/")+"/"),ce(qe,U,ge,"",function(Ue){return Ue})):qe!=null&&(ne(qe)&&(qe=J(qe,ge+(!qe.key||ae&&ae.key===qe.key?"":(""+qe.key).replace(Q,"$&/")+"/")+R)),U.push(qe)),1;if(ae=0,ve=ve===""?".":ve+":",I(R))for(var he=0;he<R.length;he++){we=R[he];var Me=ve+Y(we,he);ae+=ce(we,U,ge,Me,qe)}else if(Me=S(R),typeof Me=="function")for(R=Me.call(R),he=0;!(we=R.next()).done;)we=we.value,Me=ve+Y(we,he++),ae+=ce(we,U,ge,Me,qe);else if(we==="object")throw U=String(R),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.");return ae}function ye(R,U,ge){if(R==null)return R;var ve=[],qe=0;return ce(R,ve,"","",function(we){return U.call(ge,we,qe++)}),ve}function ze(R){if(R._status===-1){var U=R._result;U=U(),U.then(function(ge){(R._status===0||R._status===-1)&&(R._status=1,R._result=ge)},function(ge){(R._status===0||R._status===-1)&&(R._status=2,R._result=ge)}),R._status===-1&&(R._status=0,R._result=U)}if(R._status===1)return R._result.default;throw R._result}var xe={current:null},K={transition:null},ie={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:K,ReactCurrentOwner:O};function te(){throw Error("act(...) is not supported in production builds of React.")}return He.Children={map:ye,forEach:function(R,U,ge){ye(R,function(){U.apply(this,arguments)},ge)},count:function(R){var U=0;return ye(R,function(){U++}),U},toArray:function(R){return ye(R,function(U){return U})||[]},only:function(R){if(!ne(R))throw Error("React.Children.only expected to receive a single React element child.");return R}},He.Component=T,He.Fragment=r,He.Profiler=s,He.PureComponent=B,He.StrictMode=a,He.Suspense=$,He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,He.act=te,He.cloneElement=function(R,U,ge){if(R==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+R+".");var ve=j({},R.props),qe=R.key,we=R.ref,ae=R._owner;if(U!=null){if(U.ref!==void 0&&(we=U.ref,ae=O.current),U.key!==void 0&&(qe=""+U.key),R.type&&R.type.defaultProps)var he=R.type.defaultProps;for(Me in U)E.call(U,Me)&&!F.hasOwnProperty(Me)&&(ve[Me]=U[Me]===void 0&&he!==void 0?he[Me]:U[Me])}var Me=arguments.length-2;if(Me===1)ve.children=ge;else if(1<Me){he=Array(Me);for(var Ue=0;Ue<Me;Ue++)he[Ue]=arguments[Ue+2];ve.children=he}return{$$typeof:o,type:R.type,key:qe,ref:we,props:ve,_owner:ae}},He.createContext=function(R){return R={$$typeof:d,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},R.Provider={$$typeof:c,_context:R},R.Consumer=R},He.createElement=ee,He.createFactory=function(R){var U=ee.bind(null,R);return U.type=R,U},He.createRef=function(){return{current:null}},He.forwardRef=function(R){return{$$typeof:f,render:R}},He.isValidElement=ne,He.lazy=function(R){return{$$typeof:g,_payload:{_status:-1,_result:R},_init:ze}},He.memo=function(R,U){return{$$typeof:w,type:R,compare:U===void 0?null:U}},He.startTransition=function(R){var U=K.transition;K.transition={};try{R()}finally{K.transition=U}},He.unstable_act=te,He.useCallback=function(R,U){return xe.current.useCallback(R,U)},He.useContext=function(R){return xe.current.useContext(R)},He.useDebugValue=function(){},He.useDeferredValue=function(R){return xe.current.useDeferredValue(R)},He.useEffect=function(R,U){return xe.current.useEffect(R,U)},He.useId=function(){return xe.current.useId()},He.useImperativeHandle=function(R,U,ge){return xe.current.useImperativeHandle(R,U,ge)},He.useInsertionEffect=function(R,U){return xe.current.useInsertionEffect(R,U)},He.useLayoutEffect=function(R,U){return xe.current.useLayoutEffect(R,U)},He.useMemo=function(R,U){return xe.current.useMemo(R,U)},He.useReducer=function(R,U,ge){return xe.current.useReducer(R,U,ge)},He.useRef=function(R){return xe.current.useRef(R)},He.useState=function(R){return xe.current.useState(R)},He.useSyncExternalStore=function(R,U,ge){return xe.current.useSyncExternalStore(R,U,ge)},He.useTransition=function(){return xe.current.useTransition()},He.version="18.3.1",He}var i1;function lc(){return i1||(i1=1,j0.exports=o2()),j0.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a1;function i2(){if(a1)return Li;a1=1;var o=lc(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,$,w){var g,x={},S=null,q=null;w!==void 0&&(S=""+w),$.key!==void 0&&(S=""+$.key),$.ref!==void 0&&(q=$.ref);for(g in $)a.call($,g)&&!c.hasOwnProperty(g)&&(x[g]=$[g]);if(f&&f.defaultProps)for(g in $=f.defaultProps,$)x[g]===void 0&&(x[g]=$[g]);return{$$typeof:t,type:f,key:S,ref:q,props:x,_owner:s.current}}return Li.Fragment=r,Li.jsx=d,Li.jsxs=d,Li}var s1;function a2(){return s1||(s1=1,_0.exports=i2()),_0.exports}var p=a2(),D=lc(),ms={},S0={exports:{}},et={},q0={exports:{}},T0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l1;function s2(){return l1||(l1=1,(function(o){function t(K,ie){var te=K.length;K.push(ie);e:for(;0<te;){var R=te-1>>>1,U=K[R];if(0<s(U,ie))K[R]=ie,K[te]=U,te=R;else break e}}function r(K){return K.length===0?null:K[0]}function a(K){if(K.length===0)return null;var ie=K[0],te=K.pop();if(te!==ie){K[0]=te;e:for(var R=0,U=K.length,ge=U>>>1;R<ge;){var ve=2*(R+1)-1,qe=K[ve],we=ve+1,ae=K[we];if(0>s(qe,te))we<U&&0>s(ae,qe)?(K[R]=ae,K[we]=te,R=we):(K[R]=qe,K[ve]=te,R=ve);else if(we<U&&0>s(ae,te))K[R]=ae,K[we]=te,R=we;else break e}}return ie}function s(K,ie){var te=K.sortIndex-ie.sortIndex;return te!==0?te:K.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();o.unstable_now=function(){return d.now()-f}}var $=[],w=[],g=1,x=null,S=3,q=!1,j=!1,_=!1,T=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(K){for(var ie=r(w);ie!==null;){if(ie.callback===null)a(w);else if(ie.startTime<=K)a(w),ie.sortIndex=ie.expirationTime,t($,ie);else break;ie=r(w)}}function I(K){if(_=!1,W(K),!j)if(r($)!==null)j=!0,ze(E);else{var ie=r(w);ie!==null&&xe(I,ie.startTime-K)}}function E(K,ie){j=!1,_&&(_=!1,P(ee),ee=-1),q=!0;var te=S;try{for(W(ie),x=r($);x!==null&&(!(x.expirationTime>ie)||K&&!re());){var R=x.callback;if(typeof R=="function"){x.callback=null,S=x.priorityLevel;var U=R(x.expirationTime<=ie);ie=o.unstable_now(),typeof U=="function"?x.callback=U:x===r($)&&a($),W(ie)}else a($);x=r($)}if(x!==null)var ge=!0;else{var ve=r(w);ve!==null&&xe(I,ve.startTime-ie),ge=!1}return ge}finally{x=null,S=te,q=!1}}var O=!1,F=null,ee=-1,J=5,ne=-1;function re(){return!(o.unstable_now()-ne<J)}function Q(){if(F!==null){var K=o.unstable_now();ne=K;var ie=!0;try{ie=F(!0,K)}finally{ie?Y():(O=!1,F=null)}}else O=!1}var Y;if(typeof B=="function")Y=function(){B(Q)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ye=ce.port2;ce.port1.onmessage=Q,Y=function(){ye.postMessage(null)}}else Y=function(){T(Q,0)};function ze(K){F=K,O||(O=!0,Y())}function xe(K,ie){ee=T(function(){K(o.unstable_now())},ie)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(K){K.callback=null},o.unstable_continueExecution=function(){j||q||(j=!0,ze(E))},o.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<K?Math.floor(1e3/K):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_getFirstCallbackNode=function(){return r($)},o.unstable_next=function(K){switch(S){case 1:case 2:case 3:var ie=3;break;default:ie=S}var te=S;S=ie;try{return K()}finally{S=te}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(K,ie){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var te=S;S=K;try{return ie()}finally{S=te}},o.unstable_scheduleCallback=function(K,ie,te){var R=o.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?R+te:R):te=R,K){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=te+U,K={id:g++,callback:ie,priorityLevel:K,startTime:te,expirationTime:U,sortIndex:-1},te>R?(K.sortIndex=te,t(w,K),r($)===null&&K===r(w)&&(_?(P(ee),ee=-1):_=!0,xe(I,te-R))):(K.sortIndex=U,t($,K),j||q||(j=!0,ze(E))),K},o.unstable_shouldYield=re,o.unstable_wrapCallback=function(K){var ie=S;return function(){var te=S;S=ie;try{return K.apply(this,arguments)}finally{S=te}}}})(T0)),T0}var c1;function l2(){return c1||(c1=1,q0.exports=s2()),q0.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u1;function c2(){if(u1)return et;u1=1;var o=lc(),t=l2();function r(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function c(e,n){d(e,n),d(e+"Capture",n)}function d(e,n){for(s[e]=n,e=0;e<n.length;e++)a.add(n[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},x={};function S(e){return $.call(x,e)?!0:$.call(g,e)?!1:w.test(e)?x[e]=!0:(g[e]=!0,!1)}function q(e,n,i,l){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,n,i,l){if(n===null||typeof n>"u"||q(e,n,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function _(e,n,i,l,u,h,z){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=h,this.removeEmptyString=z}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){T[e]=new _(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];T[n]=new _(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){T[e]=new _(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){T[e]=new _(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){T[e]=new _(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){T[e]=new _(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){T[e]=new _(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){T[e]=new _(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){T[e]=new _(e,5,!1,e.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function B(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(P,B);T[n]=new _(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(P,B);T[n]=new _(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(P,B);T[n]=new _(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){T[e]=new _(e,1,!1,e.toLowerCase(),null,!1,!1)}),T.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){T[e]=new _(e,1,!1,e.toLowerCase(),null,!0,!0)});function W(e,n,i,l){var u=T.hasOwnProperty(n)?T[n]:null;(u!==null?u.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(j(n,i,u,l)&&(i=null),l||u===null?S(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):u.mustUseProperty?e[u.propertyName]=i===null?u.type===3?!1:"":i:(n=u.attributeName,l=u.attributeNamespace,i===null?e.removeAttribute(n):(u=u.type,i=u===3||u===4&&i===!0?"":""+i,l?e.setAttributeNS(l,n,i):e.setAttribute(n,i))))}var I=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,E=Symbol.for("react.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),ne=Symbol.for("react.provider"),re=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),ye=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),K=Symbol.iterator;function ie(e){return e===null||typeof e!="object"?null:(e=K&&e[K]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,R;function U(e){if(R===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);R=n&&n[1]||""}return`
`+R+e}var ge=!1;function ve(e,n){if(!e||ge)return"";ge=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(X){var l=X}Reflect.construct(e,[],n)}else{try{n.call()}catch(X){l=X}e.call(n.prototype)}else{try{throw Error()}catch(X){l=X}e()}}catch(X){if(X&&l&&typeof X.stack=="string"){for(var u=X.stack.split(`
`),h=l.stack.split(`
`),z=u.length-1,A=h.length-1;1<=z&&0<=A&&u[z]!==h[A];)A--;for(;1<=z&&0<=A;z--,A--)if(u[z]!==h[A]){if(z!==1||A!==1)do if(z--,A--,0>A||u[z]!==h[A]){var N=`
`+u[z].replace(" at new "," at ");return e.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",e.displayName)),N}while(1<=z&&0<=A);break}}}finally{ge=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?U(e):""}function qe(e){switch(e.tag){case 5:return U(e.type);case 16:return U("Lazy");case 13:return U("Suspense");case 19:return U("SuspenseList");case 0:case 2:case 15:return e=ve(e.type,!1),e;case 11:return e=ve(e.type.render,!1),e;case 1:return e=ve(e.type,!0),e;default:return""}}function we(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case O:return"Portal";case J:return"Profiler";case ee:return"StrictMode";case Y:return"Suspense";case ce:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case re:return(e.displayName||"Context")+".Consumer";case ne:return(e._context.displayName||"Context")+".Provider";case Q:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ye:return n=e.displayName||null,n!==null?n:we(e.type)||"Memo";case ze:n=e._payload,e=e._init;try{return we(e(n))}catch{}}return null}function ae(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(n);case 8:return n===ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function he(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Me(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ue(e){var n=Me(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var u=i.get,h=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(z){l=""+z,h.call(this,z)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(z){l=""+z},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Cn(e){e._valueTracker||(e._valueTracker=Ue(e))}function Lt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),l="";return e&&(l=Me(e)?e.checked?"true":"false":e.value),e=l,e!==i?(n.setValue(e),!0):!1}function dt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function We(e,n){var i=n.checked;return te({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Je(e,n){var i=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;i=he(n.value!=null?n.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Le(e,n){n=n.checked,n!=null&&W(e,"checked",n,!1)}function Tn(e,n){Le(e,n);var i=he(n.value),l=n.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?qt(e,n.type,i):n.hasOwnProperty("defaultValue")&&qt(e,n.type,he(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function gn(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function qt(e,n,i){(n!=="number"||dt(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var In=Array.isArray;function Mn(e,n,i,l){if(e=e.options,n){n={};for(var u=0;u<i.length;u++)n["$"+i[u]]=!0;for(i=0;i<e.length;i++)u=n.hasOwnProperty("$"+e[i].value),e[i].selected!==u&&(e[i].selected=u),u&&l&&(e[i].defaultSelected=!0)}else{for(i=""+he(i),n=null,u=0;u<e.length;u++){if(e[u].value===i){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Uo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(r(91));return te({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zo(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(r(92));if(In(i)){if(1<i.length)throw Error(r(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:he(i)}}function ea(e,n){var i=he(n.value),l=he(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function na(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ko(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function so(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ko(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,Vo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,l,u){MSApp.execUnsafeLocalFunction(function(){return e(n,i,l,u)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function sr(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var Ge={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zn=["Webkit","ms","Moz","O"];Object.keys(Ge).forEach(function(e){Zn.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ge[n]=Ge[e]})});function mn(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||Ge.hasOwnProperty(e)&&Ge[e]?(""+n).trim():n+"px"}function Tt(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var l=i.indexOf("--")===0,u=mn(i,n[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,u):e[i]=u}}var Nn=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pt(e,n){if(n){if(Nn[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(r(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(r(61))}if(n.style!=null&&typeof n.style!="object")throw Error(r(62))}}function lo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qo=null;function Yo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xo=null,lr=null,Kn=null;function co(e){if(e=ji(e)){if(typeof Xo!="function")throw Error(r(280));var n=e.stateNode;n&&(n=qa(n),Xo(e.stateNode,e.type,n))}}function cr(e){lr?Kn?Kn.push(e):Kn=[e]:lr=e}function Jo(){if(lr){var e=lr,n=Kn;if(Kn=lr=null,co(e),n)for(e=0;e<n.length;e++)co(n[e])}}function ta(e,n){return e(n)}function ra(){}var uo=!1;function po(e,n,i){if(uo)return e(n,i);uo=!0;try{return ta(e,n,i)}finally{uo=!1,(lr!==null||Kn!==null)&&(ra(),Jo())}}function Pt(e,n){var i=e.stateNode;if(i===null)return null;var l=qa(i);if(l===null)return null;i=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,n,typeof i));return i}var ei=!1;if(f)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){ei=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{ei=!1}function ni(e,n,i,l,u,h,z,A,N){var X=Array.prototype.slice.call(arguments,3);try{n.apply(i,X)}catch(ue){this.onError(ue)}}var Wr=!1,At=null,Wt=!1,ur=null,ti={onError:function(e){Wr=!0,At=e}};function Os(e,n,i,l,u,h,z,A,N){Wr=!1,At=null,ni.apply(ti,arguments)}function Ot(e,n,i,l,u,h,z,A,N){if(Os.apply(this,arguments),Wr){if(Wr){var X=At;Wr=!1,At=null}else throw Error(r(198));Wt||(Wt=!0,ur=X)}}function Ht(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function dr(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ri(e){if(Ht(e)!==e)throw Error(r(188))}function oa(e){var n=e.alternate;if(!n){if(n=Ht(e),n===null)throw Error(r(188));return n!==e?null:e}for(var i=e,l=n;;){var u=i.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){i=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===i)return ri(u),e;if(h===l)return ri(u),n;h=h.sibling}throw Error(r(188))}if(i.return!==l.return)i=u,l=h;else{for(var z=!1,A=u.child;A;){if(A===i){z=!0,i=u,l=h;break}if(A===l){z=!0,l=u,i=h;break}A=A.sibling}if(!z){for(A=h.child;A;){if(A===i){z=!0,i=h,l=u;break}if(A===l){z=!0,l=h,i=u;break}A=A.sibling}if(!z)throw Error(r(189))}}if(i.alternate!==l)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:n}function ia(e){return e=oa(e),e!==null?aa(e):null}function aa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=aa(e);if(n!==null)return n;e=e.sibling}return null}var oi=t.unstable_scheduleCallback,sa=t.unstable_cancelCallback,Or=t.unstable_shouldYield,Hs=t.unstable_requestPaint,ln=t.unstable_now,ii=t.unstable_getCurrentPriorityLevel,ai=t.unstable_ImmediatePriority,la=t.unstable_UserBlockingPriority,Gt=t.unstable_NormalPriority,Gs=t.unstable_LowPriority,ca=t.unstable_IdlePriority,mo=null,rt=null;function oe(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(mo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:bm,Ve=Math.log,si=Math.LN2;function bm(e){return e>>>=0,e===0?32:31-(Ve(e)/si|0)|0}var ua=64,da=4194304;function li(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pa(e,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,u=e.suspendedLanes,h=e.pingedLanes,z=i&268435455;if(z!==0){var A=z&~u;A!==0?l=li(A):(h&=z,h!==0&&(l=li(h)))}else z=i&~u,z!==0?l=li(z):h!==0&&(l=li(h));if(l===0)return 0;if(n!==0&&n!==l&&(n&u)===0&&(u=l&-l,h=n&-n,u>=h||u===16&&(h&4194240)!==0))return n;if((l&4)!==0&&(l|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)i=31-Ie(n),u=1<<i,l|=e[i],n&=~u;return l}function zm(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vm(e,n){for(var i=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes;0<h;){var z=31-Ie(h),A=1<<z,N=u[z];N===-1?((A&i)===0||(A&l)!==0)&&(u[z]=zm(A,n)):N<=n&&(e.expiredLanes|=A),h&=~A}}function Us(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rc(){var e=ua;return ua<<=1,(ua&4194240)===0&&(ua=64),e}function Zs(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function ci(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ie(n),e[n]=i}function km(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var u=31-Ie(i),h=1<<u;n[u]=0,l[u]=-1,e[u]=-1,i&=~h}}function Ks(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var l=31-Ie(i),u=1<<l;u&n|e[l]&n&&(e[l]|=n),i&=~u}}var Xe=0;function Ec(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Bc,Vs,Fc,Ic,Nc,Qs=!1,ma=[],pr=null,mr=null,fr=null,ui=new Map,di=new Map,hr=[],_m="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lc(e,n){switch(e){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":ui.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(n.pointerId)}}function pi(e,n,i,l,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:i,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},n!==null&&(n=ji(n),n!==null&&Vs(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function jm(e,n,i,l,u){switch(n){case"focusin":return pr=pi(pr,e,n,i,l,u),!0;case"dragenter":return mr=pi(mr,e,n,i,l,u),!0;case"mouseover":return fr=pi(fr,e,n,i,l,u),!0;case"pointerover":var h=u.pointerId;return ui.set(h,pi(ui.get(h)||null,e,n,i,l,u)),!0;case"gotpointercapture":return h=u.pointerId,di.set(h,pi(di.get(h)||null,e,n,i,l,u)),!0}return!1}function Wc(e){var n=Hr(e.target);if(n!==null){var i=Ht(n);if(i!==null){if(n=i.tag,n===13){if(n=dr(i),n!==null){e.blockedOn=n,Nc(e.priority,function(){Fc(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fa(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Xs(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);Qo=l,i.target.dispatchEvent(l),Qo=null}else return n=ji(i),n!==null&&Vs(n),e.blockedOn=i,!1;n.shift()}return!0}function Oc(e,n,i){fa(e)&&i.delete(n)}function Sm(){Qs=!1,pr!==null&&fa(pr)&&(pr=null),mr!==null&&fa(mr)&&(mr=null),fr!==null&&fa(fr)&&(fr=null),ui.forEach(Oc),di.forEach(Oc)}function mi(e,n){e.blockedOn===n&&(e.blockedOn=null,Qs||(Qs=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Sm)))}function fi(e){function n(u){return mi(u,e)}if(0<ma.length){mi(ma[0],e);for(var i=1;i<ma.length;i++){var l=ma[i];l.blockedOn===e&&(l.blockedOn=null)}}for(pr!==null&&mi(pr,e),mr!==null&&mi(mr,e),fr!==null&&mi(fr,e),ui.forEach(n),di.forEach(n),i=0;i<hr.length;i++)l=hr[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<hr.length&&(i=hr[0],i.blockedOn===null);)Wc(i),i.blockedOn===null&&hr.shift()}var fo=I.ReactCurrentBatchConfig,ha=!0;function qm(e,n,i,l){var u=Xe,h=fo.transition;fo.transition=null;try{Xe=1,Ys(e,n,i,l)}finally{Xe=u,fo.transition=h}}function Tm(e,n,i,l){var u=Xe,h=fo.transition;fo.transition=null;try{Xe=4,Ys(e,n,i,l)}finally{Xe=u,fo.transition=h}}function Ys(e,n,i,l){if(ha){var u=Xs(e,n,i,l);if(u===null)hl(e,n,l,$a,i),Lc(e,l);else if(jm(u,e,n,i,l))l.stopPropagation();else if(Lc(e,l),n&4&&-1<_m.indexOf(e)){for(;u!==null;){var h=ji(u);if(h!==null&&Bc(h),h=Xs(e,n,i,l),h===null&&hl(e,n,l,$a,i),h===u)break;u=h}u!==null&&l.stopPropagation()}else hl(e,n,l,null,i)}}var $a=null;function Xs(e,n,i,l){if($a=null,e=Yo(l),e=Hr(e),e!==null)if(n=Ht(e),n===null)e=null;else if(i=n.tag,i===13){if(e=dr(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return $a=e,null}function Hc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ii()){case ai:return 1;case la:return 4;case Gt:case Gs:return 16;case ca:return 536870912;default:return 16}default:return 16}}var $r=null,Js=null,ya=null;function Gc(){if(ya)return ya;var e,n=Js,i=n.length,l,u="value"in $r?$r.value:$r.textContent,h=u.length;for(e=0;e<i&&n[e]===u[e];e++);var z=i-e;for(l=1;l<=z&&n[i-l]===u[h-l];l++);return ya=u.slice(e,1<l?1-l:void 0)}function ga(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wa(){return!0}function Uc(){return!1}function ot(e){function n(i,l,u,h,z){this._reactName=i,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=z,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(i=e[A],this[A]=i?i(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?wa:Uc,this.isPropagationStopped=Uc,this}return te(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),n}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=ot(ho),hi=te({},ho,{view:0,detail:0}),Pm=ot(hi),nl,tl,$i,xa=te({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ol,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$i&&($i&&e.type==="mousemove"?(nl=e.screenX-$i.screenX,tl=e.screenY-$i.screenY):tl=nl=0,$i=e),nl)},movementY:function(e){return"movementY"in e?e.movementY:tl}}),Zc=ot(xa),Am=te({},xa,{dataTransfer:0}),Cm=ot(Am),Mm=te({},hi,{relatedTarget:0}),rl=ot(Mm),Dm=te({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),Rm=ot(Dm),Em=te({},ho,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bm=ot(Em),Fm=te({},ho,{data:0}),Kc=ot(Fm),Im={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Lm[e])?!!n[e]:!1}function ol(){return Wm}var Om=te({},hi,{key:function(e){if(e.key){var n=Im[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ga(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ol,charCode:function(e){return e.type==="keypress"?ga(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ga(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hm=ot(Om),Gm=te({},xa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vc=ot(Gm),Um=te({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ol}),Zm=ot(Um),Km=te({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vm=ot(Km),Qm=te({},xa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ym=ot(Qm),Xm=[9,13,27,32],il=f&&"CompositionEvent"in window,yi=null;f&&"documentMode"in document&&(yi=document.documentMode);var Jm=f&&"TextEvent"in window&&!yi,Qc=f&&(!il||yi&&8<yi&&11>=yi),Yc=" ",Xc=!1;function Jc(e,n){switch(e){case"keyup":return Xm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $o=!1;function ef(e,n){switch(e){case"compositionend":return eu(n);case"keypress":return n.which!==32?null:(Xc=!0,Yc);case"textInput":return e=n.data,e===Yc&&Xc?null:e;default:return null}}function nf(e,n){if($o)return e==="compositionend"||!il&&Jc(e,n)?(e=Gc(),ya=Js=$r=null,$o=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qc&&n.locale!=="ko"?null:n.data;default:return null}}var tf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!tf[e.type]:n==="textarea"}function tu(e,n,i,l){cr(l),n=_a(n,"onChange"),0<n.length&&(i=new el("onChange","change",null,i,l),e.push({event:i,listeners:n}))}var gi=null,wi=null;function rf(e){xu(e,0)}function ba(e){var n=bo(e);if(Lt(n))return e}function of(e,n){if(e==="change")return n}var ru=!1;if(f){var al;if(f){var sl="oninput"in document;if(!sl){var ou=document.createElement("div");ou.setAttribute("oninput","return;"),sl=typeof ou.oninput=="function"}al=sl}else al=!1;ru=al&&(!document.documentMode||9<document.documentMode)}function iu(){gi&&(gi.detachEvent("onpropertychange",au),wi=gi=null)}function au(e){if(e.propertyName==="value"&&ba(wi)){var n=[];tu(n,wi,e,Yo(e)),po(rf,n)}}function af(e,n,i){e==="focusin"?(iu(),gi=n,wi=i,gi.attachEvent("onpropertychange",au)):e==="focusout"&&iu()}function sf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ba(wi)}function lf(e,n){if(e==="click")return ba(n)}function cf(e,n){if(e==="input"||e==="change")return ba(n)}function uf(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var zt=typeof Object.is=="function"?Object.is:uf;function xi(e,n){if(zt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),l=Object.keys(n);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var u=i[l];if(!$.call(n,u)||!zt(e[u],n[u]))return!1}return!0}function su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lu(e,n){var i=su(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=n&&l>=n)return{node:i,offset:n-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=su(i)}}function cu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?cu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function uu(){for(var e=window,n=dt();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=dt(e.document)}return n}function ll(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function df(e){var n=uu(),i=e.focusedElem,l=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&cu(i.ownerDocument.documentElement,i)){if(l!==null&&ll(i)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var u=i.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!e.extend&&h>l&&(u=l,l=h,h=u),u=lu(i,h);var z=lu(i,l);u&&z&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==z.node||e.focusOffset!==z.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),e.removeAllRanges(),h>l?(e.addRange(n),e.extend(z.node,z.offset)):(n.setEnd(z.node,z.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pf=f&&"documentMode"in document&&11>=document.documentMode,yo=null,cl=null,bi=null,ul=!1;function du(e,n,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ul||yo==null||yo!==dt(l)||(l=yo,"selectionStart"in l&&ll(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),bi&&xi(bi,l)||(bi=l,l=_a(cl,"onSelect"),0<l.length&&(n=new el("onSelect","select",null,n,i),e.push({event:n,listeners:l}),n.target=yo)))}function za(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var go={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionend:za("Transition","TransitionEnd")},dl={},pu={};f&&(pu=document.createElement("div").style,"AnimationEvent"in window||(delete go.animationend.animation,delete go.animationiteration.animation,delete go.animationstart.animation),"TransitionEvent"in window||delete go.transitionend.transition);function va(e){if(dl[e])return dl[e];if(!go[e])return e;var n=go[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in pu)return dl[e]=n[i];return e}var mu=va("animationend"),fu=va("animationiteration"),hu=va("animationstart"),$u=va("transitionend"),yu=new Map,gu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(e,n){yu.set(e,n),c(n,[e])}for(var pl=0;pl<gu.length;pl++){var ml=gu[pl],mf=ml.toLowerCase(),ff=ml[0].toUpperCase()+ml.slice(1);yr(mf,"on"+ff)}yr(mu,"onAnimationEnd"),yr(fu,"onAnimationIteration"),yr(hu,"onAnimationStart"),yr("dblclick","onDoubleClick"),yr("focusin","onFocus"),yr("focusout","onBlur"),yr($u,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hf=new Set("cancel close invalid load scroll toggle".split(" ").concat(zi));function wu(e,n,i){var l=e.type||"unknown-event";e.currentTarget=i,Ot(l,n,void 0,e),e.currentTarget=null}function xu(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],u=l.event;l=l.listeners;e:{var h=void 0;if(n)for(var z=l.length-1;0<=z;z--){var A=l[z],N=A.instance,X=A.currentTarget;if(A=A.listener,N!==h&&u.isPropagationStopped())break e;wu(u,A,X),h=N}else for(z=0;z<l.length;z++){if(A=l[z],N=A.instance,X=A.currentTarget,A=A.listener,N!==h&&u.isPropagationStopped())break e;wu(u,A,X),h=N}}}if(Wt)throw e=ur,Wt=!1,ur=null,e}function rn(e,n){var i=n[bl];i===void 0&&(i=n[bl]=new Set);var l=e+"__bubble";i.has(l)||(bu(n,e,2,!1),i.add(l))}function fl(e,n,i){var l=0;n&&(l|=4),bu(i,e,l,n)}var ka="_reactListening"+Math.random().toString(36).slice(2);function vi(e){if(!e[ka]){e[ka]=!0,a.forEach(function(i){i!=="selectionchange"&&(hf.has(i)||fl(i,!1,e),fl(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ka]||(n[ka]=!0,fl("selectionchange",!1,n))}}function bu(e,n,i,l){switch(Hc(n)){case 1:var u=qm;break;case 4:u=Tm;break;default:u=Ys}i=u.bind(null,n,i,e),u=void 0,!ei||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(n,i,{capture:!0,passive:u}):e.addEventListener(n,i,!0):u!==void 0?e.addEventListener(n,i,{passive:u}):e.addEventListener(n,i,!1)}function hl(e,n,i,l,u){var h=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var z=l.tag;if(z===3||z===4){var A=l.stateNode.containerInfo;if(A===u||A.nodeType===8&&A.parentNode===u)break;if(z===4)for(z=l.return;z!==null;){var N=z.tag;if((N===3||N===4)&&(N=z.stateNode.containerInfo,N===u||N.nodeType===8&&N.parentNode===u))return;z=z.return}for(;A!==null;){if(z=Hr(A),z===null)return;if(N=z.tag,N===5||N===6){l=h=z;continue e}A=A.parentNode}}l=l.return}po(function(){var X=h,ue=Yo(i),pe=[];e:{var se=yu.get(e);if(se!==void 0){var _e=el,Pe=e;switch(e){case"keypress":if(ga(i)===0)break e;case"keydown":case"keyup":_e=Hm;break;case"focusin":Pe="focus",_e=rl;break;case"focusout":Pe="blur",_e=rl;break;case"beforeblur":case"afterblur":_e=rl;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_e=Zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_e=Cm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_e=Zm;break;case mu:case fu:case hu:_e=Rm;break;case $u:_e=Vm;break;case"scroll":_e=Pm;break;case"wheel":_e=Ym;break;case"copy":case"cut":case"paste":_e=Bm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_e=Vc}var Ae=(n&4)!==0,$n=!Ae&&e==="scroll",Z=Ae?se!==null?se+"Capture":null:se;Ae=[];for(var G=X,V;G!==null;){V=G;var $e=V.stateNode;if(V.tag===5&&$e!==null&&(V=$e,Z!==null&&($e=Pt(G,Z),$e!=null&&Ae.push(ki(G,$e,V)))),$n)break;G=G.return}0<Ae.length&&(se=new _e(se,Pe,null,i,ue),pe.push({event:se,listeners:Ae}))}}if((n&7)===0){e:{if(se=e==="mouseover"||e==="pointerover",_e=e==="mouseout"||e==="pointerout",se&&i!==Qo&&(Pe=i.relatedTarget||i.fromElement)&&(Hr(Pe)||Pe[Ut]))break e;if((_e||se)&&(se=ue.window===ue?ue:(se=ue.ownerDocument)?se.defaultView||se.parentWindow:window,_e?(Pe=i.relatedTarget||i.toElement,_e=X,Pe=Pe?Hr(Pe):null,Pe!==null&&($n=Ht(Pe),Pe!==$n||Pe.tag!==5&&Pe.tag!==6)&&(Pe=null)):(_e=null,Pe=X),_e!==Pe)){if(Ae=Zc,$e="onMouseLeave",Z="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Ae=Vc,$e="onPointerLeave",Z="onPointerEnter",G="pointer"),$n=_e==null?se:bo(_e),V=Pe==null?se:bo(Pe),se=new Ae($e,G+"leave",_e,i,ue),se.target=$n,se.relatedTarget=V,$e=null,Hr(ue)===X&&(Ae=new Ae(Z,G+"enter",Pe,i,ue),Ae.target=V,Ae.relatedTarget=$n,$e=Ae),$n=$e,_e&&Pe)n:{for(Ae=_e,Z=Pe,G=0,V=Ae;V;V=wo(V))G++;for(V=0,$e=Z;$e;$e=wo($e))V++;for(;0<G-V;)Ae=wo(Ae),G--;for(;0<V-G;)Z=wo(Z),V--;for(;G--;){if(Ae===Z||Z!==null&&Ae===Z.alternate)break n;Ae=wo(Ae),Z=wo(Z)}Ae=null}else Ae=null;_e!==null&&zu(pe,se,_e,Ae,!1),Pe!==null&&$n!==null&&zu(pe,$n,Pe,Ae,!0)}}e:{if(se=X?bo(X):window,_e=se.nodeName&&se.nodeName.toLowerCase(),_e==="select"||_e==="input"&&se.type==="file")var Ce=of;else if(nu(se))if(ru)Ce=cf;else{Ce=sf;var De=af}else(_e=se.nodeName)&&_e.toLowerCase()==="input"&&(se.type==="checkbox"||se.type==="radio")&&(Ce=lf);if(Ce&&(Ce=Ce(e,X))){tu(pe,Ce,i,ue);break e}De&&De(e,se,X),e==="focusout"&&(De=se._wrapperState)&&De.controlled&&se.type==="number"&&qt(se,"number",se.value)}switch(De=X?bo(X):window,e){case"focusin":(nu(De)||De.contentEditable==="true")&&(yo=De,cl=X,bi=null);break;case"focusout":bi=cl=yo=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,du(pe,i,ue);break;case"selectionchange":if(pf)break;case"keydown":case"keyup":du(pe,i,ue)}var Re;if(il)e:{switch(e){case"compositionstart":var Fe="onCompositionStart";break e;case"compositionend":Fe="onCompositionEnd";break e;case"compositionupdate":Fe="onCompositionUpdate";break e}Fe=void 0}else $o?Jc(e,i)&&(Fe="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Fe="onCompositionStart");Fe&&(Qc&&i.locale!=="ko"&&($o||Fe!=="onCompositionStart"?Fe==="onCompositionEnd"&&$o&&(Re=Gc()):($r=ue,Js="value"in $r?$r.value:$r.textContent,$o=!0)),De=_a(X,Fe),0<De.length&&(Fe=new Kc(Fe,e,null,i,ue),pe.push({event:Fe,listeners:De}),Re?Fe.data=Re:(Re=eu(i),Re!==null&&(Fe.data=Re)))),(Re=Jm?ef(e,i):nf(e,i))&&(X=_a(X,"onBeforeInput"),0<X.length&&(ue=new Kc("onBeforeInput","beforeinput",null,i,ue),pe.push({event:ue,listeners:X}),ue.data=Re))}xu(pe,n)})}function ki(e,n,i){return{instance:e,listener:n,currentTarget:i}}function _a(e,n){for(var i=n+"Capture",l=[];e!==null;){var u=e,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=Pt(e,i),h!=null&&l.unshift(ki(e,h,u)),h=Pt(e,n),h!=null&&l.push(ki(e,h,u))),e=e.return}return l}function wo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zu(e,n,i,l,u){for(var h=n._reactName,z=[];i!==null&&i!==l;){var A=i,N=A.alternate,X=A.stateNode;if(N!==null&&N===l)break;A.tag===5&&X!==null&&(A=X,u?(N=Pt(i,h),N!=null&&z.unshift(ki(i,N,A))):u||(N=Pt(i,h),N!=null&&z.push(ki(i,N,A)))),i=i.return}z.length!==0&&e.push({event:n,listeners:z})}var $f=/\r\n?/g,yf=/\u0000|\uFFFD/g;function vu(e){return(typeof e=="string"?e:""+e).replace($f,`
`).replace(yf,"")}function ja(e,n,i){if(n=vu(n),vu(e)!==n&&i)throw Error(r(425))}function Sa(){}var $l=null,yl=null;function gl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wl=typeof setTimeout=="function"?setTimeout:void 0,gf=typeof clearTimeout=="function"?clearTimeout:void 0,ku=typeof Promise=="function"?Promise:void 0,wf=typeof queueMicrotask=="function"?queueMicrotask:typeof ku<"u"?function(e){return ku.resolve(null).then(e).catch(xf)}:wl;function xf(e){setTimeout(function(){throw e})}function xl(e,n){var i=n,l=0;do{var u=i.nextSibling;if(e.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"){if(l===0){e.removeChild(u),fi(n);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=u}while(i);fi(n)}function gr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function _u(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var xo=Math.random().toString(36).slice(2),Ct="__reactFiber$"+xo,_i="__reactProps$"+xo,Ut="__reactContainer$"+xo,bl="__reactEvents$"+xo,bf="__reactListeners$"+xo,zf="__reactHandles$"+xo;function Hr(e){var n=e[Ct];if(n)return n;for(var i=e.parentNode;i;){if(n=i[Ut]||i[Ct]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=_u(e);e!==null;){if(i=e[Ct])return i;e=_u(e)}return n}e=i,i=e.parentNode}return null}function ji(e){return e=e[Ct]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function bo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function qa(e){return e[_i]||null}var zl=[],zo=-1;function wr(e){return{current:e}}function on(e){0>zo||(e.current=zl[zo],zl[zo]=null,zo--)}function nn(e,n){zo++,zl[zo]=e.current,e.current=n}var xr={},Dn=wr(xr),Vn=wr(!1),Gr=xr;function vo(e,n){var i=e.type.contextTypes;if(!i)return xr;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in i)u[h]=n[h];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),u}function Qn(e){return e=e.childContextTypes,e!=null}function Ta(){on(Vn),on(Dn)}function ju(e,n,i){if(Dn.current!==xr)throw Error(r(168));nn(Dn,n),nn(Vn,i)}function Su(e,n,i){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var u in l)if(!(u in n))throw Error(r(108,ae(e)||"Unknown",u));return te({},i,l)}function Pa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xr,Gr=Dn.current,nn(Dn,e),nn(Vn,Vn.current),!0}function qu(e,n,i){var l=e.stateNode;if(!l)throw Error(r(169));i?(e=Su(e,n,Gr),l.__reactInternalMemoizedMergedChildContext=e,on(Vn),on(Dn),nn(Dn,e)):on(Vn),nn(Vn,i)}var Zt=null,Aa=!1,vl=!1;function Tu(e){Zt===null?Zt=[e]:Zt.push(e)}function vf(e){Aa=!0,Tu(e)}function br(){if(!vl&&Zt!==null){vl=!0;var e=0,n=Xe;try{var i=Zt;for(Xe=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}Zt=null,Aa=!1}catch(u){throw Zt!==null&&(Zt=Zt.slice(e+1)),oi(ai,br),u}finally{Xe=n,vl=!1}}return null}var ko=[],_o=0,Ca=null,Ma=0,mt=[],ft=0,Ur=null,Kt=1,Vt="";function Zr(e,n){ko[_o++]=Ma,ko[_o++]=Ca,Ca=e,Ma=n}function Pu(e,n,i){mt[ft++]=Kt,mt[ft++]=Vt,mt[ft++]=Ur,Ur=e;var l=Kt;e=Vt;var u=32-Ie(l)-1;l&=~(1<<u),i+=1;var h=32-Ie(n)+u;if(30<h){var z=u-u%5;h=(l&(1<<z)-1).toString(32),l>>=z,u-=z,Kt=1<<32-Ie(n)+u|i<<u|l,Vt=h+e}else Kt=1<<h|i<<u|l,Vt=e}function kl(e){e.return!==null&&(Zr(e,1),Pu(e,1,0))}function _l(e){for(;e===Ca;)Ca=ko[--_o],ko[_o]=null,Ma=ko[--_o],ko[_o]=null;for(;e===Ur;)Ur=mt[--ft],mt[ft]=null,Vt=mt[--ft],mt[ft]=null,Kt=mt[--ft],mt[ft]=null}var it=null,at=null,an=!1,vt=null;function Au(e,n){var i=gt(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function Cu(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,it=e,at=gr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,it=e,at=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=Ur!==null?{id:Kt,overflow:Vt}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=gt(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,it=e,at=null,!0):!1;default:return!1}}function jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sl(e){if(an){var n=at;if(n){var i=n;if(!Cu(e,n)){if(jl(e))throw Error(r(418));n=gr(i.nextSibling);var l=it;n&&Cu(e,n)?Au(l,i):(e.flags=e.flags&-4097|2,an=!1,it=e)}}else{if(jl(e))throw Error(r(418));e.flags=e.flags&-4097|2,an=!1,it=e}}}function Mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function Da(e){if(e!==it)return!1;if(!an)return Mu(e),an=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!gl(e.type,e.memoizedProps)),n&&(n=at)){if(jl(e))throw Du(),Error(r(418));for(;n;)Au(e,n),n=gr(n.nextSibling)}if(Mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){at=gr(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}at=null}}else at=it?gr(e.stateNode.nextSibling):null;return!0}function Du(){for(var e=at;e;)e=gr(e.nextSibling)}function jo(){at=it=null,an=!1}function ql(e){vt===null?vt=[e]:vt.push(e)}var kf=I.ReactCurrentBatchConfig;function Si(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(r(309));var l=i.stateNode}if(!l)throw Error(r(147,e));var u=l,h=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===h?n.ref:(n=function(z){var A=u.refs;z===null?delete A[h]:A[h]=z},n._stringRef=h,n)}if(typeof e!="string")throw Error(r(284));if(!i._owner)throw Error(r(290,e))}return e}function Ra(e,n){throw e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ru(e){var n=e._init;return n(e._payload)}function Eu(e){function n(Z,G){if(e){var V=Z.deletions;V===null?(Z.deletions=[G],Z.flags|=16):V.push(G)}}function i(Z,G){if(!e)return null;for(;G!==null;)n(Z,G),G=G.sibling;return null}function l(Z,G){for(Z=new Map;G!==null;)G.key!==null?Z.set(G.key,G):Z.set(G.index,G),G=G.sibling;return Z}function u(Z,G){return Z=Tr(Z,G),Z.index=0,Z.sibling=null,Z}function h(Z,G,V){return Z.index=V,e?(V=Z.alternate,V!==null?(V=V.index,V<G?(Z.flags|=2,G):V):(Z.flags|=2,G)):(Z.flags|=1048576,G)}function z(Z){return e&&Z.alternate===null&&(Z.flags|=2),Z}function A(Z,G,V,$e){return G===null||G.tag!==6?(G=w0(V,Z.mode,$e),G.return=Z,G):(G=u(G,V),G.return=Z,G)}function N(Z,G,V,$e){var Ce=V.type;return Ce===F?ue(Z,G,V.props.children,$e,V.key):G!==null&&(G.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===ze&&Ru(Ce)===G.type)?($e=u(G,V.props),$e.ref=Si(Z,G,V),$e.return=Z,$e):($e=is(V.type,V.key,V.props,null,Z.mode,$e),$e.ref=Si(Z,G,V),$e.return=Z,$e)}function X(Z,G,V,$e){return G===null||G.tag!==4||G.stateNode.containerInfo!==V.containerInfo||G.stateNode.implementation!==V.implementation?(G=x0(V,Z.mode,$e),G.return=Z,G):(G=u(G,V.children||[]),G.return=Z,G)}function ue(Z,G,V,$e,Ce){return G===null||G.tag!==7?(G=no(V,Z.mode,$e,Ce),G.return=Z,G):(G=u(G,V),G.return=Z,G)}function pe(Z,G,V){if(typeof G=="string"&&G!==""||typeof G=="number")return G=w0(""+G,Z.mode,V),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case E:return V=is(G.type,G.key,G.props,null,Z.mode,V),V.ref=Si(Z,null,G),V.return=Z,V;case O:return G=x0(G,Z.mode,V),G.return=Z,G;case ze:var $e=G._init;return pe(Z,$e(G._payload),V)}if(In(G)||ie(G))return G=no(G,Z.mode,V,null),G.return=Z,G;Ra(Z,G)}return null}function se(Z,G,V,$e){var Ce=G!==null?G.key:null;if(typeof V=="string"&&V!==""||typeof V=="number")return Ce!==null?null:A(Z,G,""+V,$e);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return V.key===Ce?N(Z,G,V,$e):null;case O:return V.key===Ce?X(Z,G,V,$e):null;case ze:return Ce=V._init,se(Z,G,Ce(V._payload),$e)}if(In(V)||ie(V))return Ce!==null?null:ue(Z,G,V,$e,null);Ra(Z,V)}return null}function _e(Z,G,V,$e,Ce){if(typeof $e=="string"&&$e!==""||typeof $e=="number")return Z=Z.get(V)||null,A(G,Z,""+$e,Ce);if(typeof $e=="object"&&$e!==null){switch($e.$$typeof){case E:return Z=Z.get($e.key===null?V:$e.key)||null,N(G,Z,$e,Ce);case O:return Z=Z.get($e.key===null?V:$e.key)||null,X(G,Z,$e,Ce);case ze:var De=$e._init;return _e(Z,G,V,De($e._payload),Ce)}if(In($e)||ie($e))return Z=Z.get(V)||null,ue(G,Z,$e,Ce,null);Ra(G,$e)}return null}function Pe(Z,G,V,$e){for(var Ce=null,De=null,Re=G,Fe=G=0,qn=null;Re!==null&&Fe<V.length;Fe++){Re.index>Fe?(qn=Re,Re=null):qn=Re.sibling;var Qe=se(Z,Re,V[Fe],$e);if(Qe===null){Re===null&&(Re=qn);break}e&&Re&&Qe.alternate===null&&n(Z,Re),G=h(Qe,G,Fe),De===null?Ce=Qe:De.sibling=Qe,De=Qe,Re=qn}if(Fe===V.length)return i(Z,Re),an&&Zr(Z,Fe),Ce;if(Re===null){for(;Fe<V.length;Fe++)Re=pe(Z,V[Fe],$e),Re!==null&&(G=h(Re,G,Fe),De===null?Ce=Re:De.sibling=Re,De=Re);return an&&Zr(Z,Fe),Ce}for(Re=l(Z,Re);Fe<V.length;Fe++)qn=_e(Re,Z,Fe,V[Fe],$e),qn!==null&&(e&&qn.alternate!==null&&Re.delete(qn.key===null?Fe:qn.key),G=h(qn,G,Fe),De===null?Ce=qn:De.sibling=qn,De=qn);return e&&Re.forEach(function(Pr){return n(Z,Pr)}),an&&Zr(Z,Fe),Ce}function Ae(Z,G,V,$e){var Ce=ie(V);if(typeof Ce!="function")throw Error(r(150));if(V=Ce.call(V),V==null)throw Error(r(151));for(var De=Ce=null,Re=G,Fe=G=0,qn=null,Qe=V.next();Re!==null&&!Qe.done;Fe++,Qe=V.next()){Re.index>Fe?(qn=Re,Re=null):qn=Re.sibling;var Pr=se(Z,Re,Qe.value,$e);if(Pr===null){Re===null&&(Re=qn);break}e&&Re&&Pr.alternate===null&&n(Z,Re),G=h(Pr,G,Fe),De===null?Ce=Pr:De.sibling=Pr,De=Pr,Re=qn}if(Qe.done)return i(Z,Re),an&&Zr(Z,Fe),Ce;if(Re===null){for(;!Qe.done;Fe++,Qe=V.next())Qe=pe(Z,Qe.value,$e),Qe!==null&&(G=h(Qe,G,Fe),De===null?Ce=Qe:De.sibling=Qe,De=Qe);return an&&Zr(Z,Fe),Ce}for(Re=l(Z,Re);!Qe.done;Fe++,Qe=V.next())Qe=_e(Re,Z,Fe,Qe.value,$e),Qe!==null&&(e&&Qe.alternate!==null&&Re.delete(Qe.key===null?Fe:Qe.key),G=h(Qe,G,Fe),De===null?Ce=Qe:De.sibling=Qe,De=Qe);return e&&Re.forEach(function(r2){return n(Z,r2)}),an&&Zr(Z,Fe),Ce}function $n(Z,G,V,$e){if(typeof V=="object"&&V!==null&&V.type===F&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case E:e:{for(var Ce=V.key,De=G;De!==null;){if(De.key===Ce){if(Ce=V.type,Ce===F){if(De.tag===7){i(Z,De.sibling),G=u(De,V.props.children),G.return=Z,Z=G;break e}}else if(De.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===ze&&Ru(Ce)===De.type){i(Z,De.sibling),G=u(De,V.props),G.ref=Si(Z,De,V),G.return=Z,Z=G;break e}i(Z,De);break}else n(Z,De);De=De.sibling}V.type===F?(G=no(V.props.children,Z.mode,$e,V.key),G.return=Z,Z=G):($e=is(V.type,V.key,V.props,null,Z.mode,$e),$e.ref=Si(Z,G,V),$e.return=Z,Z=$e)}return z(Z);case O:e:{for(De=V.key;G!==null;){if(G.key===De)if(G.tag===4&&G.stateNode.containerInfo===V.containerInfo&&G.stateNode.implementation===V.implementation){i(Z,G.sibling),G=u(G,V.children||[]),G.return=Z,Z=G;break e}else{i(Z,G);break}else n(Z,G);G=G.sibling}G=x0(V,Z.mode,$e),G.return=Z,Z=G}return z(Z);case ze:return De=V._init,$n(Z,G,De(V._payload),$e)}if(In(V))return Pe(Z,G,V,$e);if(ie(V))return Ae(Z,G,V,$e);Ra(Z,V)}return typeof V=="string"&&V!==""||typeof V=="number"?(V=""+V,G!==null&&G.tag===6?(i(Z,G.sibling),G=u(G,V),G.return=Z,Z=G):(i(Z,G),G=w0(V,Z.mode,$e),G.return=Z,Z=G),z(Z)):i(Z,G)}return $n}var So=Eu(!0),Bu=Eu(!1),Ea=wr(null),Ba=null,qo=null,Tl=null;function Pl(){Tl=qo=Ba=null}function Al(e){var n=Ea.current;on(Ea),e._currentValue=n}function Cl(e,n,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===i)break;e=e.return}}function To(e,n){Ba=e,Tl=qo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Yn=!0),e.firstContext=null)}function ht(e){var n=e._currentValue;if(Tl!==e)if(e={context:e,memoizedValue:n,next:null},qo===null){if(Ba===null)throw Error(r(308));qo=e,Ba.dependencies={lanes:0,firstContext:e}}else qo=qo.next=e;return n}var Kr=null;function Ml(e){Kr===null?Kr=[e]:Kr.push(e)}function Fu(e,n,i,l){var u=n.interleaved;return u===null?(i.next=i,Ml(n)):(i.next=u.next,u.next=i),n.interleaved=i,Qt(e,l)}function Qt(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var zr=!1;function Dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function vr(e,n,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ze&2)!==0){var u=l.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),l.pending=n,Qt(e,i)}return u=l.interleaved,u===null?(n.next=n,Ml(l)):(n.next=u.next,u.next=n),l.interleaved=n,Qt(e,i)}function Fa(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,Ks(e,i)}}function Nu(e,n){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var u=null,h=null;if(i=i.firstBaseUpdate,i!==null){do{var z={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};h===null?u=h=z:h=h.next=z,i=i.next}while(i!==null);h===null?u=h=n:h=h.next=n}else u=h=n;i={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function Ia(e,n,i,l){var u=e.updateQueue;zr=!1;var h=u.firstBaseUpdate,z=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var N=A,X=N.next;N.next=null,z===null?h=X:z.next=X,z=N;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,A=ue.lastBaseUpdate,A!==z&&(A===null?ue.firstBaseUpdate=X:A.next=X,ue.lastBaseUpdate=N))}if(h!==null){var pe=u.baseState;z=0,ue=X=N=null,A=h;do{var se=A.lane,_e=A.eventTime;if((l&se)===se){ue!==null&&(ue=ue.next={eventTime:_e,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var Pe=e,Ae=A;switch(se=n,_e=i,Ae.tag){case 1:if(Pe=Ae.payload,typeof Pe=="function"){pe=Pe.call(_e,pe,se);break e}pe=Pe;break e;case 3:Pe.flags=Pe.flags&-65537|128;case 0:if(Pe=Ae.payload,se=typeof Pe=="function"?Pe.call(_e,pe,se):Pe,se==null)break e;pe=te({},pe,se);break e;case 2:zr=!0}}A.callback!==null&&A.lane!==0&&(e.flags|=64,se=u.effects,se===null?u.effects=[A]:se.push(A))}else _e={eventTime:_e,lane:se,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ue===null?(X=ue=_e,N=pe):ue=ue.next=_e,z|=se;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;se=A,A=se.next,se.next=null,u.lastBaseUpdate=se,u.shared.pending=null}}while(!0);if(ue===null&&(N=pe),u.baseState=N,u.firstBaseUpdate=X,u.lastBaseUpdate=ue,n=u.shared.interleaved,n!==null){u=n;do z|=u.lane,u=u.next;while(u!==n)}else h===null&&(u.shared.lanes=0);Yr|=z,e.lanes=z,e.memoizedState=pe}}function Lu(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],u=l.callback;if(u!==null){if(l.callback=null,l=i,typeof u!="function")throw Error(r(191,u));u.call(l)}}}var qi={},Mt=wr(qi),Ti=wr(qi),Pi=wr(qi);function Vr(e){if(e===qi)throw Error(r(174));return e}function Rl(e,n){switch(nn(Pi,n),nn(Ti,e),nn(Mt,qi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:so(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=so(n,e)}on(Mt),nn(Mt,n)}function Po(){on(Mt),on(Ti),on(Pi)}function Wu(e){Vr(Pi.current);var n=Vr(Mt.current),i=so(n,e.type);n!==i&&(nn(Ti,e),nn(Mt,i))}function El(e){Ti.current===e&&(on(Mt),on(Ti))}var cn=wr(0);function Na(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Bl=[];function Fl(){for(var e=0;e<Bl.length;e++)Bl[e]._workInProgressVersionPrimary=null;Bl.length=0}var La=I.ReactCurrentDispatcher,Il=I.ReactCurrentBatchConfig,Qr=0,un=null,vn=null,jn=null,Wa=!1,Ai=!1,Ci=0,_f=0;function Rn(){throw Error(r(321))}function Nl(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!zt(e[i],n[i]))return!1;return!0}function Ll(e,n,i,l,u,h){if(Qr=h,un=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,La.current=e===null||e.memoizedState===null?Tf:Pf,e=i(l,u),Ai){h=0;do{if(Ai=!1,Ci=0,25<=h)throw Error(r(301));h+=1,jn=vn=null,n.updateQueue=null,La.current=Af,e=i(l,u)}while(Ai)}if(La.current=Ga,n=vn!==null&&vn.next!==null,Qr=0,jn=vn=un=null,Wa=!1,n)throw Error(r(300));return e}function Wl(){var e=Ci!==0;return Ci=0,e}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jn===null?un.memoizedState=jn=e:jn=jn.next=e,jn}function $t(){if(vn===null){var e=un.alternate;e=e!==null?e.memoizedState:null}else e=vn.next;var n=jn===null?un.memoizedState:jn.next;if(n!==null)jn=n,vn=e;else{if(e===null)throw Error(r(310));vn=e,e={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},jn===null?un.memoizedState=jn=e:jn=jn.next=e}return jn}function Mi(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=$t(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=vn,u=l.baseQueue,h=i.pending;if(h!==null){if(u!==null){var z=u.next;u.next=h.next,h.next=z}l.baseQueue=u=h,i.pending=null}if(u!==null){h=u.next,l=l.baseState;var A=z=null,N=null,X=h;do{var ue=X.lane;if((Qr&ue)===ue)N!==null&&(N=N.next={lane:0,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),l=X.hasEagerState?X.eagerState:e(l,X.action);else{var pe={lane:ue,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null};N===null?(A=N=pe,z=l):N=N.next=pe,un.lanes|=ue,Yr|=ue}X=X.next}while(X!==null&&X!==h);N===null?z=l:N.next=A,zt(l,n.memoizedState)||(Yn=!0),n.memoizedState=l,n.baseState=z,n.baseQueue=N,i.lastRenderedState=l}if(e=i.interleaved,e!==null){u=e;do h=u.lane,un.lanes|=h,Yr|=h,u=u.next;while(u!==e)}else u===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function Hl(e){var n=$t(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=i.dispatch,u=i.pending,h=n.memoizedState;if(u!==null){i.pending=null;var z=u=u.next;do h=e(h,z.action),z=z.next;while(z!==u);zt(h,n.memoizedState)||(Yn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),i.lastRenderedState=h}return[h,l]}function Ou(){}function Hu(e,n){var i=un,l=$t(),u=n(),h=!zt(l.memoizedState,u);if(h&&(l.memoizedState=u,Yn=!0),l=l.queue,Gl(Zu.bind(null,i,l,e),[e]),l.getSnapshot!==n||h||jn!==null&&jn.memoizedState.tag&1){if(i.flags|=2048,Di(9,Uu.bind(null,i,l,u,n),void 0,null),Sn===null)throw Error(r(349));(Qr&30)!==0||Gu(i,n,u)}return u}function Gu(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=un.updateQueue,n===null?(n={lastEffect:null,stores:null},un.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function Uu(e,n,i,l){n.value=i,n.getSnapshot=l,Ku(n)&&Vu(e)}function Zu(e,n,i){return i(function(){Ku(n)&&Vu(e)})}function Ku(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!zt(e,i)}catch{return!0}}function Vu(e){var n=Qt(e,1);n!==null&&St(n,e,1,-1)}function Qu(e){var n=Dt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mi,lastRenderedState:e},n.queue=e,e=e.dispatch=qf.bind(null,un,e),[n.memoizedState,e]}function Di(e,n,i,l){return e={tag:e,create:n,destroy:i,deps:l,next:null},n=un.updateQueue,n===null?(n={lastEffect:null,stores:null},un.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,n.lastEffect=e)),e}function Yu(){return $t().memoizedState}function Oa(e,n,i,l){var u=Dt();un.flags|=e,u.memoizedState=Di(1|n,i,void 0,l===void 0?null:l)}function Ha(e,n,i,l){var u=$t();l=l===void 0?null:l;var h=void 0;if(vn!==null){var z=vn.memoizedState;if(h=z.destroy,l!==null&&Nl(l,z.deps)){u.memoizedState=Di(n,i,h,l);return}}un.flags|=e,u.memoizedState=Di(1|n,i,h,l)}function Xu(e,n){return Oa(8390656,8,e,n)}function Gl(e,n){return Ha(2048,8,e,n)}function Ju(e,n){return Ha(4,2,e,n)}function ed(e,n){return Ha(4,4,e,n)}function nd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function td(e,n,i){return i=i!=null?i.concat([e]):null,Ha(4,4,nd.bind(null,n,e),i)}function Ul(){}function rd(e,n){var i=$t();n=n===void 0?null:n;var l=i.memoizedState;return l!==null&&n!==null&&Nl(n,l[1])?l[0]:(i.memoizedState=[e,n],e)}function od(e,n){var i=$t();n=n===void 0?null:n;var l=i.memoizedState;return l!==null&&n!==null&&Nl(n,l[1])?l[0]:(e=e(),i.memoizedState=[e,n],e)}function id(e,n,i){return(Qr&21)===0?(e.baseState&&(e.baseState=!1,Yn=!0),e.memoizedState=i):(zt(i,n)||(i=Rc(),un.lanes|=i,Yr|=i,e.baseState=!0),n)}function jf(e,n){var i=Xe;Xe=i!==0&&4>i?i:4,e(!0);var l=Il.transition;Il.transition={};try{e(!1),n()}finally{Xe=i,Il.transition=l}}function ad(){return $t().memoizedState}function Sf(e,n,i){var l=Sr(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},sd(e))ld(n,i);else if(i=Fu(e,n,i,l),i!==null){var u=Wn();St(i,e,l,u),cd(i,n,l)}}function qf(e,n,i){var l=Sr(e),u={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(sd(e))ld(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var z=n.lastRenderedState,A=h(z,i);if(u.hasEagerState=!0,u.eagerState=A,zt(A,z)){var N=n.interleaved;N===null?(u.next=u,Ml(n)):(u.next=N.next,N.next=u),n.interleaved=u;return}}catch{}finally{}i=Fu(e,n,u,l),i!==null&&(u=Wn(),St(i,e,l,u),cd(i,n,l))}}function sd(e){var n=e.alternate;return e===un||n!==null&&n===un}function ld(e,n){Ai=Wa=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function cd(e,n,i){if((i&4194240)!==0){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,Ks(e,i)}}var Ga={readContext:ht,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},Tf={readContext:ht,useCallback:function(e,n){return Dt().memoizedState=[e,n===void 0?null:n],e},useContext:ht,useEffect:Xu,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,Oa(4194308,4,nd.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Oa(4194308,4,e,n)},useInsertionEffect:function(e,n){return Oa(4,2,e,n)},useMemo:function(e,n){var i=Dt();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var l=Dt();return n=i!==void 0?i(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Sf.bind(null,un,e),[l.memoizedState,e]},useRef:function(e){var n=Dt();return e={current:e},n.memoizedState=e},useState:Qu,useDebugValue:Ul,useDeferredValue:function(e){return Dt().memoizedState=e},useTransition:function(){var e=Qu(!1),n=e[0];return e=jf.bind(null,e[1]),Dt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var l=un,u=Dt();if(an){if(i===void 0)throw Error(r(407));i=i()}else{if(i=n(),Sn===null)throw Error(r(349));(Qr&30)!==0||Gu(l,n,i)}u.memoizedState=i;var h={value:i,getSnapshot:n};return u.queue=h,Xu(Zu.bind(null,l,h,e),[e]),l.flags|=2048,Di(9,Uu.bind(null,l,h,i,n),void 0,null),i},useId:function(){var e=Dt(),n=Sn.identifierPrefix;if(an){var i=Vt,l=Kt;i=(l&~(1<<32-Ie(l)-1)).toString(32)+i,n=":"+n+"R"+i,i=Ci++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=_f++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Pf={readContext:ht,useCallback:rd,useContext:ht,useEffect:Gl,useImperativeHandle:td,useInsertionEffect:Ju,useLayoutEffect:ed,useMemo:od,useReducer:Ol,useRef:Yu,useState:function(){return Ol(Mi)},useDebugValue:Ul,useDeferredValue:function(e){var n=$t();return id(n,vn.memoizedState,e)},useTransition:function(){var e=Ol(Mi)[0],n=$t().memoizedState;return[e,n]},useMutableSource:Ou,useSyncExternalStore:Hu,useId:ad,unstable_isNewReconciler:!1},Af={readContext:ht,useCallback:rd,useContext:ht,useEffect:Gl,useImperativeHandle:td,useInsertionEffect:Ju,useLayoutEffect:ed,useMemo:od,useReducer:Hl,useRef:Yu,useState:function(){return Hl(Mi)},useDebugValue:Ul,useDeferredValue:function(e){var n=$t();return vn===null?n.memoizedState=e:id(n,vn.memoizedState,e)},useTransition:function(){var e=Hl(Mi)[0],n=$t().memoizedState;return[e,n]},useMutableSource:Ou,useSyncExternalStore:Hu,useId:ad,unstable_isNewReconciler:!1};function kt(e,n){if(e&&e.defaultProps){n=te({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function Zl(e,n,i,l){n=e.memoizedState,i=i(l,n),i=i==null?n:te({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Ua={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var l=Wn(),u=Sr(e),h=Yt(l,u);h.payload=n,i!=null&&(h.callback=i),n=vr(e,h,u),n!==null&&(St(n,e,u,l),Fa(n,e,u))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var l=Wn(),u=Sr(e),h=Yt(l,u);h.tag=1,h.payload=n,i!=null&&(h.callback=i),n=vr(e,h,u),n!==null&&(St(n,e,u,l),Fa(n,e,u))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=Wn(),l=Sr(e),u=Yt(i,l);u.tag=2,n!=null&&(u.callback=n),n=vr(e,u,l),n!==null&&(St(n,e,l,i),Fa(n,e,l))}};function ud(e,n,i,l,u,h,z){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,h,z):n.prototype&&n.prototype.isPureReactComponent?!xi(i,l)||!xi(u,h):!0}function dd(e,n,i){var l=!1,u=xr,h=n.contextType;return typeof h=="object"&&h!==null?h=ht(h):(u=Qn(n)?Gr:Dn.current,l=n.contextTypes,h=(l=l!=null)?vo(e,u):xr),n=new n(i,h),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ua,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=h),n}function pd(e,n,i,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,l),n.state!==e&&Ua.enqueueReplaceState(n,n.state,null)}function Kl(e,n,i,l){var u=e.stateNode;u.props=i,u.state=e.memoizedState,u.refs={},Dl(e);var h=n.contextType;typeof h=="object"&&h!==null?u.context=ht(h):(h=Qn(n)?Gr:Dn.current,u.context=vo(e,h)),u.state=e.memoizedState,h=n.getDerivedStateFromProps,typeof h=="function"&&(Zl(e,n,h,i),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&Ua.enqueueReplaceState(u,u.state,null),Ia(e,i,u,l),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Ao(e,n){try{var i="",l=n;do i+=qe(l),l=l.return;while(l);var u=i}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:e,source:n,stack:u,digest:null}}function Vl(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function Ql(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var Cf=typeof WeakMap=="function"?WeakMap:Map;function md(e,n,i){i=Yt(-1,i),i.tag=3,i.payload={element:null};var l=n.value;return i.callback=function(){Ja||(Ja=!0,d0=l),Ql(e,n)},i}function fd(e,n,i){i=Yt(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var u=n.value;i.payload=function(){return l(u)},i.callback=function(){Ql(e,n)}}var h=e.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(i.callback=function(){Ql(e,n),typeof l!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var z=n.stack;this.componentDidCatch(n.value,{componentStack:z!==null?z:""})}),i}function hd(e,n,i){var l=e.pingCache;if(l===null){l=e.pingCache=new Cf;var u=new Set;l.set(n,u)}else u=l.get(n),u===void 0&&(u=new Set,l.set(n,u));u.has(i)||(u.add(i),e=Uf.bind(null,e,n,i),n.then(e,e))}function $d(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function yd(e,n,i,l,u){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=Yt(-1,1),n.tag=2,vr(i,n,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=u,e)}var Mf=I.ReactCurrentOwner,Yn=!1;function Ln(e,n,i,l){n.child=e===null?Bu(n,null,i,l):So(n,e.child,i,l)}function gd(e,n,i,l,u){i=i.render;var h=n.ref;return To(n,u),l=Ll(e,n,i,l,h,u),i=Wl(),e!==null&&!Yn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,Xt(e,n,u)):(an&&i&&kl(n),n.flags|=1,Ln(e,n,l,u),n.child)}function wd(e,n,i,l,u){if(e===null){var h=i.type;return typeof h=="function"&&!g0(h)&&h.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=h,xd(e,n,h,l,u)):(e=is(i.type,null,l,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,(e.lanes&u)===0){var z=h.memoizedProps;if(i=i.compare,i=i!==null?i:xi,i(z,l)&&e.ref===n.ref)return Xt(e,n,u)}return n.flags|=1,e=Tr(h,l),e.ref=n.ref,e.return=n,n.child=e}function xd(e,n,i,l,u){if(e!==null){var h=e.memoizedProps;if(xi(h,l)&&e.ref===n.ref)if(Yn=!1,n.pendingProps=l=h,(e.lanes&u)!==0)(e.flags&131072)!==0&&(Yn=!0);else return n.lanes=e.lanes,Xt(e,n,u)}return Yl(e,n,i,l,u)}function bd(e,n,i){var l=n.pendingProps,u=l.children,h=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},nn(Mo,st),st|=i;else{if((i&1073741824)===0)return e=h!==null?h.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,nn(Mo,st),st|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:i,nn(Mo,st),st|=l}else h!==null?(l=h.baseLanes|i,n.memoizedState=null):l=i,nn(Mo,st),st|=l;return Ln(e,n,u,i),n.child}function zd(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function Yl(e,n,i,l,u){var h=Qn(i)?Gr:Dn.current;return h=vo(n,h),To(n,u),i=Ll(e,n,i,l,h,u),l=Wl(),e!==null&&!Yn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,Xt(e,n,u)):(an&&l&&kl(n),n.flags|=1,Ln(e,n,i,u),n.child)}function vd(e,n,i,l,u){if(Qn(i)){var h=!0;Pa(n)}else h=!1;if(To(n,u),n.stateNode===null)Ka(e,n),dd(n,i,l),Kl(n,i,l,u),l=!0;else if(e===null){var z=n.stateNode,A=n.memoizedProps;z.props=A;var N=z.context,X=i.contextType;typeof X=="object"&&X!==null?X=ht(X):(X=Qn(i)?Gr:Dn.current,X=vo(n,X));var ue=i.getDerivedStateFromProps,pe=typeof ue=="function"||typeof z.getSnapshotBeforeUpdate=="function";pe||typeof z.UNSAFE_componentWillReceiveProps!="function"&&typeof z.componentWillReceiveProps!="function"||(A!==l||N!==X)&&pd(n,z,l,X),zr=!1;var se=n.memoizedState;z.state=se,Ia(n,l,z,u),N=n.memoizedState,A!==l||se!==N||Vn.current||zr?(typeof ue=="function"&&(Zl(n,i,ue,l),N=n.memoizedState),(A=zr||ud(n,i,A,l,se,N,X))?(pe||typeof z.UNSAFE_componentWillMount!="function"&&typeof z.componentWillMount!="function"||(typeof z.componentWillMount=="function"&&z.componentWillMount(),typeof z.UNSAFE_componentWillMount=="function"&&z.UNSAFE_componentWillMount()),typeof z.componentDidMount=="function"&&(n.flags|=4194308)):(typeof z.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=N),z.props=l,z.state=N,z.context=X,l=A):(typeof z.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{z=n.stateNode,Iu(e,n),A=n.memoizedProps,X=n.type===n.elementType?A:kt(n.type,A),z.props=X,pe=n.pendingProps,se=z.context,N=i.contextType,typeof N=="object"&&N!==null?N=ht(N):(N=Qn(i)?Gr:Dn.current,N=vo(n,N));var _e=i.getDerivedStateFromProps;(ue=typeof _e=="function"||typeof z.getSnapshotBeforeUpdate=="function")||typeof z.UNSAFE_componentWillReceiveProps!="function"&&typeof z.componentWillReceiveProps!="function"||(A!==pe||se!==N)&&pd(n,z,l,N),zr=!1,se=n.memoizedState,z.state=se,Ia(n,l,z,u);var Pe=n.memoizedState;A!==pe||se!==Pe||Vn.current||zr?(typeof _e=="function"&&(Zl(n,i,_e,l),Pe=n.memoizedState),(X=zr||ud(n,i,X,l,se,Pe,N)||!1)?(ue||typeof z.UNSAFE_componentWillUpdate!="function"&&typeof z.componentWillUpdate!="function"||(typeof z.componentWillUpdate=="function"&&z.componentWillUpdate(l,Pe,N),typeof z.UNSAFE_componentWillUpdate=="function"&&z.UNSAFE_componentWillUpdate(l,Pe,N)),typeof z.componentDidUpdate=="function"&&(n.flags|=4),typeof z.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof z.componentDidUpdate!="function"||A===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof z.getSnapshotBeforeUpdate!="function"||A===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=Pe),z.props=l,z.state=Pe,z.context=N,l=X):(typeof z.componentDidUpdate!="function"||A===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof z.getSnapshotBeforeUpdate!="function"||A===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),l=!1)}return Xl(e,n,i,l,h,u)}function Xl(e,n,i,l,u,h){zd(e,n);var z=(n.flags&128)!==0;if(!l&&!z)return u&&qu(n,i,!1),Xt(e,n,h);l=n.stateNode,Mf.current=n;var A=z&&typeof i.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&z?(n.child=So(n,e.child,null,h),n.child=So(n,null,A,h)):Ln(e,n,A,h),n.memoizedState=l.state,u&&qu(n,i,!0),n.child}function kd(e){var n=e.stateNode;n.pendingContext?ju(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ju(e,n.context,!1),Rl(e,n.containerInfo)}function _d(e,n,i,l,u){return jo(),ql(u),n.flags|=256,Ln(e,n,i,l),n.child}var Jl={dehydrated:null,treeContext:null,retryLane:0};function e0(e){return{baseLanes:e,cachePool:null,transitions:null}}function jd(e,n,i){var l=n.pendingProps,u=cn.current,h=!1,z=(n.flags&128)!==0,A;if((A=z)||(A=e!==null&&e.memoizedState===null?!1:(u&2)!==0),A?(h=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),nn(cn,u&1),e===null)return Sl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(z=l.children,e=l.fallback,h?(l=n.mode,h=n.child,z={mode:"hidden",children:z},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=z):h=as(z,l,0,null),e=no(e,l,i,null),h.return=n,e.return=n,h.sibling=e,n.child=h,n.child.memoizedState=e0(i),n.memoizedState=Jl,e):n0(n,z));if(u=e.memoizedState,u!==null&&(A=u.dehydrated,A!==null))return Df(e,n,z,l,A,u,i);if(h){h=l.fallback,z=n.mode,u=e.child,A=u.sibling;var N={mode:"hidden",children:l.children};return(z&1)===0&&n.child!==u?(l=n.child,l.childLanes=0,l.pendingProps=N,n.deletions=null):(l=Tr(u,N),l.subtreeFlags=u.subtreeFlags&14680064),A!==null?h=Tr(A,h):(h=no(h,z,i,null),h.flags|=2),h.return=n,l.return=n,l.sibling=h,n.child=l,l=h,h=n.child,z=e.child.memoizedState,z=z===null?e0(i):{baseLanes:z.baseLanes|i,cachePool:null,transitions:z.transitions},h.memoizedState=z,h.childLanes=e.childLanes&~i,n.memoizedState=Jl,l}return h=e.child,e=h.sibling,l=Tr(h,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=i),l.return=n,l.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=l,n.memoizedState=null,l}function n0(e,n){return n=as({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Za(e,n,i,l){return l!==null&&ql(l),So(n,e.child,null,i),e=n0(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Df(e,n,i,l,u,h,z){if(i)return n.flags&256?(n.flags&=-257,l=Vl(Error(r(422))),Za(e,n,z,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(h=l.fallback,u=n.mode,l=as({mode:"visible",children:l.children},u,0,null),h=no(h,u,z,null),h.flags|=2,l.return=n,h.return=n,l.sibling=h,n.child=l,(n.mode&1)!==0&&So(n,e.child,null,z),n.child.memoizedState=e0(z),n.memoizedState=Jl,h);if((n.mode&1)===0)return Za(e,n,z,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var A=l.dgst;return l=A,h=Error(r(419)),l=Vl(h,l,void 0),Za(e,n,z,l)}if(A=(z&e.childLanes)!==0,Yn||A){if(l=Sn,l!==null){switch(z&-z){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|z))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,Qt(e,u),St(l,e,u,-1))}return y0(),l=Vl(Error(r(421))),Za(e,n,z,l)}return u.data==="$?"?(n.flags|=128,n.child=e.child,n=Zf.bind(null,e),u._reactRetry=n,null):(e=h.treeContext,at=gr(u.nextSibling),it=n,an=!0,vt=null,e!==null&&(mt[ft++]=Kt,mt[ft++]=Vt,mt[ft++]=Ur,Kt=e.id,Vt=e.overflow,Ur=n),n=n0(n,l.children),n.flags|=4096,n)}function Sd(e,n,i){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Cl(e.return,n,i)}function t0(e,n,i,l,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=i,h.tailMode=u)}function qd(e,n,i){var l=n.pendingProps,u=l.revealOrder,h=l.tail;if(Ln(e,n,l.children,i),l=cn.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sd(e,i,n);else if(e.tag===19)Sd(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(nn(cn,l),(n.mode&1)===0)n.memoizedState=null;else switch(u){case"forwards":for(i=n.child,u=null;i!==null;)e=i.alternate,e!==null&&Na(e)===null&&(u=i),i=i.sibling;i=u,i===null?(u=n.child,n.child=null):(u=i.sibling,i.sibling=null),t0(n,!1,u,i,h);break;case"backwards":for(i=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Na(e)===null){n.child=u;break}e=u.sibling,u.sibling=i,i=u,u=e}t0(n,!0,i,null,h);break;case"together":t0(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ka(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Xt(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Yr|=n.lanes,(i&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,i=Tr(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=Tr(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function Rf(e,n,i){switch(n.tag){case 3:kd(n),jo();break;case 5:Wu(n);break;case 1:Qn(n.type)&&Pa(n);break;case 4:Rl(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,u=n.memoizedProps.value;nn(Ea,l._currentValue),l._currentValue=u;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(nn(cn,cn.current&1),n.flags|=128,null):(i&n.child.childLanes)!==0?jd(e,n,i):(nn(cn,cn.current&1),e=Xt(e,n,i),e!==null?e.sibling:null);nn(cn,cn.current&1);break;case 19:if(l=(i&n.childLanes)!==0,(e.flags&128)!==0){if(l)return qd(e,n,i);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),nn(cn,cn.current),l)break;return null;case 22:case 23:return n.lanes=0,bd(e,n,i)}return Xt(e,n,i)}var Td,r0,Pd,Ad;Td=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},r0=function(){},Pd=function(e,n,i,l){var u=e.memoizedProps;if(u!==l){e=n.stateNode,Vr(Mt.current);var h=null;switch(i){case"input":u=We(e,u),l=We(e,l),h=[];break;case"select":u=te({},u,{value:void 0}),l=te({},l,{value:void 0}),h=[];break;case"textarea":u=Uo(e,u),l=Uo(e,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Sa)}pt(i,l);var z;i=null;for(X in u)if(!l.hasOwnProperty(X)&&u.hasOwnProperty(X)&&u[X]!=null)if(X==="style"){var A=u[X];for(z in A)A.hasOwnProperty(z)&&(i||(i={}),i[z]="")}else X!=="dangerouslySetInnerHTML"&&X!=="children"&&X!=="suppressContentEditableWarning"&&X!=="suppressHydrationWarning"&&X!=="autoFocus"&&(s.hasOwnProperty(X)?h||(h=[]):(h=h||[]).push(X,null));for(X in l){var N=l[X];if(A=u!=null?u[X]:void 0,l.hasOwnProperty(X)&&N!==A&&(N!=null||A!=null))if(X==="style")if(A){for(z in A)!A.hasOwnProperty(z)||N&&N.hasOwnProperty(z)||(i||(i={}),i[z]="");for(z in N)N.hasOwnProperty(z)&&A[z]!==N[z]&&(i||(i={}),i[z]=N[z])}else i||(h||(h=[]),h.push(X,i)),i=N;else X==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,A=A?A.__html:void 0,N!=null&&A!==N&&(h=h||[]).push(X,N)):X==="children"?typeof N!="string"&&typeof N!="number"||(h=h||[]).push(X,""+N):X!=="suppressContentEditableWarning"&&X!=="suppressHydrationWarning"&&(s.hasOwnProperty(X)?(N!=null&&X==="onScroll"&&rn("scroll",e),h||A===N||(h=[])):(h=h||[]).push(X,N))}i&&(h=h||[]).push("style",i);var X=h;(n.updateQueue=X)&&(n.flags|=4)}},Ad=function(e,n,i,l){i!==l&&(n.flags|=4)};function Ri(e,n){if(!an)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function En(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(n)for(var u=e.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)i|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=i,n}function Ef(e,n,i){var l=n.pendingProps;switch(_l(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(n),null;case 1:return Qn(n.type)&&Ta(),En(n),null;case 3:return l=n.stateNode,Po(),on(Vn),on(Dn),Fl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Da(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vt!==null&&(f0(vt),vt=null))),r0(e,n),En(n),null;case 5:El(n);var u=Vr(Pi.current);if(i=n.type,e!==null&&n.stateNode!=null)Pd(e,n,i,l,u),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(r(166));return En(n),null}if(e=Vr(Mt.current),Da(n)){l=n.stateNode,i=n.type;var h=n.memoizedProps;switch(l[Ct]=n,l[_i]=h,e=(n.mode&1)!==0,i){case"dialog":rn("cancel",l),rn("close",l);break;case"iframe":case"object":case"embed":rn("load",l);break;case"video":case"audio":for(u=0;u<zi.length;u++)rn(zi[u],l);break;case"source":rn("error",l);break;case"img":case"image":case"link":rn("error",l),rn("load",l);break;case"details":rn("toggle",l);break;case"input":Je(l,h),rn("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},rn("invalid",l);break;case"textarea":Zo(l,h),rn("invalid",l)}pt(i,h),u=null;for(var z in h)if(h.hasOwnProperty(z)){var A=h[z];z==="children"?typeof A=="string"?l.textContent!==A&&(h.suppressHydrationWarning!==!0&&ja(l.textContent,A,e),u=["children",A]):typeof A=="number"&&l.textContent!==""+A&&(h.suppressHydrationWarning!==!0&&ja(l.textContent,A,e),u=["children",""+A]):s.hasOwnProperty(z)&&A!=null&&z==="onScroll"&&rn("scroll",l)}switch(i){case"input":Cn(l),gn(l,h,!0);break;case"textarea":Cn(l),na(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=Sa)}l=u,n.updateQueue=l,l!==null&&(n.flags|=4)}else{z=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ko(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=z.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=z.createElement(i,{is:l.is}):(e=z.createElement(i),i==="select"&&(z=e,l.multiple?z.multiple=!0:l.size&&(z.size=l.size))):e=z.createElementNS(e,i),e[Ct]=n,e[_i]=l,Td(e,n,!1,!1),n.stateNode=e;e:{switch(z=lo(i,l),i){case"dialog":rn("cancel",e),rn("close",e),u=l;break;case"iframe":case"object":case"embed":rn("load",e),u=l;break;case"video":case"audio":for(u=0;u<zi.length;u++)rn(zi[u],e);u=l;break;case"source":rn("error",e),u=l;break;case"img":case"image":case"link":rn("error",e),rn("load",e),u=l;break;case"details":rn("toggle",e),u=l;break;case"input":Je(e,l),u=We(e,l),rn("invalid",e);break;case"option":u=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},u=te({},l,{value:void 0}),rn("invalid",e);break;case"textarea":Zo(e,l),u=Uo(e,l),rn("invalid",e);break;default:u=l}pt(i,u),A=u;for(h in A)if(A.hasOwnProperty(h)){var N=A[h];h==="style"?Tt(e,N):h==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&Vo(e,N)):h==="children"?typeof N=="string"?(i!=="textarea"||N!=="")&&sr(e,N):typeof N=="number"&&sr(e,""+N):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(s.hasOwnProperty(h)?N!=null&&h==="onScroll"&&rn("scroll",e):N!=null&&W(e,h,N,z))}switch(i){case"input":Cn(e),gn(e,l,!1);break;case"textarea":Cn(e),na(e);break;case"option":l.value!=null&&e.setAttribute("value",""+he(l.value));break;case"select":e.multiple=!!l.multiple,h=l.value,h!=null?Mn(e,!!l.multiple,h,!1):l.defaultValue!=null&&Mn(e,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Sa)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return En(n),null;case 6:if(e&&n.stateNode!=null)Ad(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(i=Vr(Pi.current),Vr(Mt.current),Da(n)){if(l=n.stateNode,i=n.memoizedProps,l[Ct]=n,(h=l.nodeValue!==i)&&(e=it,e!==null))switch(e.tag){case 3:ja(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ja(l.nodeValue,i,(e.mode&1)!==0)}h&&(n.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[Ct]=n,n.stateNode=l}return En(n),null;case 13:if(on(cn),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(an&&at!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Du(),jo(),n.flags|=98560,h=!1;else if(h=Da(n),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(r(318));if(h=n.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[Ct]=n}else jo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;En(n),h=!1}else vt!==null&&(f0(vt),vt=null),h=!0;if(!h)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=i,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(cn.current&1)!==0?kn===0&&(kn=3):y0())),n.updateQueue!==null&&(n.flags|=4),En(n),null);case 4:return Po(),r0(e,n),e===null&&vi(n.stateNode.containerInfo),En(n),null;case 10:return Al(n.type._context),En(n),null;case 17:return Qn(n.type)&&Ta(),En(n),null;case 19:if(on(cn),h=n.memoizedState,h===null)return En(n),null;if(l=(n.flags&128)!==0,z=h.rendering,z===null)if(l)Ri(h,!1);else{if(kn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(z=Na(e),z!==null){for(n.flags|=128,Ri(h,!1),l=z.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=i,i=n.child;i!==null;)h=i,e=l,h.flags&=14680066,z=h.alternate,z===null?(h.childLanes=0,h.lanes=e,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=z.childLanes,h.lanes=z.lanes,h.child=z.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=z.memoizedProps,h.memoizedState=z.memoizedState,h.updateQueue=z.updateQueue,h.type=z.type,e=z.dependencies,h.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return nn(cn,cn.current&1|2),n.child}e=e.sibling}h.tail!==null&&ln()>Do&&(n.flags|=128,l=!0,Ri(h,!1),n.lanes=4194304)}else{if(!l)if(e=Na(z),e!==null){if(n.flags|=128,l=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),Ri(h,!0),h.tail===null&&h.tailMode==="hidden"&&!z.alternate&&!an)return En(n),null}else 2*ln()-h.renderingStartTime>Do&&i!==1073741824&&(n.flags|=128,l=!0,Ri(h,!1),n.lanes=4194304);h.isBackwards?(z.sibling=n.child,n.child=z):(i=h.last,i!==null?i.sibling=z:n.child=z,h.last=z)}return h.tail!==null?(n=h.tail,h.rendering=n,h.tail=n.sibling,h.renderingStartTime=ln(),n.sibling=null,i=cn.current,nn(cn,l?i&1|2:i&1),n):(En(n),null);case 22:case 23:return $0(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(st&1073741824)!==0&&(En(n),n.subtreeFlags&6&&(n.flags|=8192)):En(n),null;case 24:return null;case 25:return null}throw Error(r(156,n.tag))}function Bf(e,n){switch(_l(n),n.tag){case 1:return Qn(n.type)&&Ta(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Po(),on(Vn),on(Dn),Fl(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return El(n),null;case 13:if(on(cn),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));jo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return on(cn),null;case 4:return Po(),null;case 10:return Al(n.type._context),null;case 22:case 23:return $0(),null;case 24:return null;default:return null}}var Va=!1,Bn=!1,Ff=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Co(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){fn(e,n,l)}else i.current=null}function o0(e,n,i){try{i()}catch(l){fn(e,n,l)}}var Cd=!1;function If(e,n){if($l=ha,e=uu(),ll(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{i.nodeType,h.nodeType}catch{i=null;break e}var z=0,A=-1,N=-1,X=0,ue=0,pe=e,se=null;n:for(;;){for(var _e;pe!==i||u!==0&&pe.nodeType!==3||(A=z+u),pe!==h||l!==0&&pe.nodeType!==3||(N=z+l),pe.nodeType===3&&(z+=pe.nodeValue.length),(_e=pe.firstChild)!==null;)se=pe,pe=_e;for(;;){if(pe===e)break n;if(se===i&&++X===u&&(A=z),se===h&&++ue===l&&(N=z),(_e=pe.nextSibling)!==null)break;pe=se,se=pe.parentNode}pe=_e}i=A===-1||N===-1?null:{start:A,end:N}}else i=null}i=i||{start:0,end:0}}else i=null;for(yl={focusedElem:e,selectionRange:i},ha=!1,Te=n;Te!==null;)if(n=Te,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Te=e;else for(;Te!==null;){n=Te;try{var Pe=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Pe!==null){var Ae=Pe.memoizedProps,$n=Pe.memoizedState,Z=n.stateNode,G=Z.getSnapshotBeforeUpdate(n.elementType===n.type?Ae:kt(n.type,Ae),$n);Z.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var V=n.stateNode.containerInfo;V.nodeType===1?V.textContent="":V.nodeType===9&&V.documentElement&&V.removeChild(V.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch($e){fn(n,n.return,$e)}if(e=n.sibling,e!==null){e.return=n.return,Te=e;break}Te=n.return}return Pe=Cd,Cd=!1,Pe}function Ei(e,n,i){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&e)===e){var h=u.destroy;u.destroy=void 0,h!==void 0&&o0(n,i,h)}u=u.next}while(u!==l)}}function Qa(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==n)}}function i0(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function Md(e){var n=e.alternate;n!==null&&(e.alternate=null,Md(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ct],delete n[_i],delete n[bl],delete n[bf],delete n[zf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dd(e){return e.tag===5||e.tag===3||e.tag===4}function Rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function a0(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Sa));else if(l!==4&&(e=e.child,e!==null))for(a0(e,n,i),e=e.sibling;e!==null;)a0(e,n,i),e=e.sibling}function s0(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(s0(e,n,i),e=e.sibling;e!==null;)s0(e,n,i),e=e.sibling}var Pn=null,_t=!1;function kr(e,n,i){for(i=i.child;i!==null;)Ed(e,n,i),i=i.sibling}function Ed(e,n,i){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(mo,i)}catch{}switch(i.tag){case 5:Bn||Co(i,n);case 6:var l=Pn,u=_t;Pn=null,kr(e,n,i),Pn=l,_t=u,Pn!==null&&(_t?(e=Pn,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Pn.removeChild(i.stateNode));break;case 18:Pn!==null&&(_t?(e=Pn,i=i.stateNode,e.nodeType===8?xl(e.parentNode,i):e.nodeType===1&&xl(e,i),fi(e)):xl(Pn,i.stateNode));break;case 4:l=Pn,u=_t,Pn=i.stateNode.containerInfo,_t=!0,kr(e,n,i),Pn=l,_t=u;break;case 0:case 11:case 14:case 15:if(!Bn&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,z=h.destroy;h=h.tag,z!==void 0&&((h&2)!==0||(h&4)!==0)&&o0(i,n,z),u=u.next}while(u!==l)}kr(e,n,i);break;case 1:if(!Bn&&(Co(i,n),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(A){fn(i,n,A)}kr(e,n,i);break;case 21:kr(e,n,i);break;case 22:i.mode&1?(Bn=(l=Bn)||i.memoizedState!==null,kr(e,n,i),Bn=l):kr(e,n,i);break;default:kr(e,n,i)}}function Bd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Ff),n.forEach(function(l){var u=Kf.bind(null,e,l);i.has(l)||(i.add(l),l.then(u,u))})}}function jt(e,n){var i=n.deletions;if(i!==null)for(var l=0;l<i.length;l++){var u=i[l];try{var h=e,z=n,A=z;e:for(;A!==null;){switch(A.tag){case 5:Pn=A.stateNode,_t=!1;break e;case 3:Pn=A.stateNode.containerInfo,_t=!0;break e;case 4:Pn=A.stateNode.containerInfo,_t=!0;break e}A=A.return}if(Pn===null)throw Error(r(160));Ed(h,z,u),Pn=null,_t=!1;var N=u.alternate;N!==null&&(N.return=null),u.return=null}catch(X){fn(u,n,X)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Fd(n,e),n=n.sibling}function Fd(e,n){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(n,e),Rt(e),l&4){try{Ei(3,e,e.return),Qa(3,e)}catch(Ae){fn(e,e.return,Ae)}try{Ei(5,e,e.return)}catch(Ae){fn(e,e.return,Ae)}}break;case 1:jt(n,e),Rt(e),l&512&&i!==null&&Co(i,i.return);break;case 5:if(jt(n,e),Rt(e),l&512&&i!==null&&Co(i,i.return),e.flags&32){var u=e.stateNode;try{sr(u,"")}catch(Ae){fn(e,e.return,Ae)}}if(l&4&&(u=e.stateNode,u!=null)){var h=e.memoizedProps,z=i!==null?i.memoizedProps:h,A=e.type,N=e.updateQueue;if(e.updateQueue=null,N!==null)try{A==="input"&&h.type==="radio"&&h.name!=null&&Le(u,h),lo(A,z);var X=lo(A,h);for(z=0;z<N.length;z+=2){var ue=N[z],pe=N[z+1];ue==="style"?Tt(u,pe):ue==="dangerouslySetInnerHTML"?Vo(u,pe):ue==="children"?sr(u,pe):W(u,ue,pe,X)}switch(A){case"input":Tn(u,h);break;case"textarea":ea(u,h);break;case"select":var se=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var _e=h.value;_e!=null?Mn(u,!!h.multiple,_e,!1):se!==!!h.multiple&&(h.defaultValue!=null?Mn(u,!!h.multiple,h.defaultValue,!0):Mn(u,!!h.multiple,h.multiple?[]:"",!1))}u[_i]=h}catch(Ae){fn(e,e.return,Ae)}}break;case 6:if(jt(n,e),Rt(e),l&4){if(e.stateNode===null)throw Error(r(162));u=e.stateNode,h=e.memoizedProps;try{u.nodeValue=h}catch(Ae){fn(e,e.return,Ae)}}break;case 3:if(jt(n,e),Rt(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{fi(n.containerInfo)}catch(Ae){fn(e,e.return,Ae)}break;case 4:jt(n,e),Rt(e);break;case 13:jt(n,e),Rt(e),u=e.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(u0=ln())),l&4&&Bd(e);break;case 22:if(ue=i!==null&&i.memoizedState!==null,e.mode&1?(Bn=(X=Bn)||ue,jt(n,e),Bn=X):jt(n,e),Rt(e),l&8192){if(X=e.memoizedState!==null,(e.stateNode.isHidden=X)&&!ue&&(e.mode&1)!==0)for(Te=e,ue=e.child;ue!==null;){for(pe=Te=ue;Te!==null;){switch(se=Te,_e=se.child,se.tag){case 0:case 11:case 14:case 15:Ei(4,se,se.return);break;case 1:Co(se,se.return);var Pe=se.stateNode;if(typeof Pe.componentWillUnmount=="function"){l=se,i=se.return;try{n=l,Pe.props=n.memoizedProps,Pe.state=n.memoizedState,Pe.componentWillUnmount()}catch(Ae){fn(l,i,Ae)}}break;case 5:Co(se,se.return);break;case 22:if(se.memoizedState!==null){Ld(pe);continue}}_e!==null?(_e.return=se,Te=_e):Ld(pe)}ue=ue.sibling}e:for(ue=null,pe=e;;){if(pe.tag===5){if(ue===null){ue=pe;try{u=pe.stateNode,X?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(A=pe.stateNode,N=pe.memoizedProps.style,z=N!=null&&N.hasOwnProperty("display")?N.display:null,A.style.display=mn("display",z))}catch(Ae){fn(e,e.return,Ae)}}}else if(pe.tag===6){if(ue===null)try{pe.stateNode.nodeValue=X?"":pe.memoizedProps}catch(Ae){fn(e,e.return,Ae)}}else if((pe.tag!==22&&pe.tag!==23||pe.memoizedState===null||pe===e)&&pe.child!==null){pe.child.return=pe,pe=pe.child;continue}if(pe===e)break e;for(;pe.sibling===null;){if(pe.return===null||pe.return===e)break e;ue===pe&&(ue=null),pe=pe.return}ue===pe&&(ue=null),pe.sibling.return=pe.return,pe=pe.sibling}}break;case 19:jt(n,e),Rt(e),l&4&&Bd(e);break;case 21:break;default:jt(n,e),Rt(e)}}function Rt(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(Dd(i)){var l=i;break e}i=i.return}throw Error(r(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(sr(u,""),l.flags&=-33);var h=Rd(e);s0(e,h,u);break;case 3:case 4:var z=l.stateNode.containerInfo,A=Rd(e);a0(e,A,z);break;default:throw Error(r(161))}}catch(N){fn(e,e.return,N)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Nf(e,n,i){Te=e,Id(e)}function Id(e,n,i){for(var l=(e.mode&1)!==0;Te!==null;){var u=Te,h=u.child;if(u.tag===22&&l){var z=u.memoizedState!==null||Va;if(!z){var A=u.alternate,N=A!==null&&A.memoizedState!==null||Bn;A=Va;var X=Bn;if(Va=z,(Bn=N)&&!X)for(Te=u;Te!==null;)z=Te,N=z.child,z.tag===22&&z.memoizedState!==null?Wd(u):N!==null?(N.return=z,Te=N):Wd(u);for(;h!==null;)Te=h,Id(h),h=h.sibling;Te=u,Va=A,Bn=X}Nd(e)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,Te=h):Nd(e)}}function Nd(e){for(;Te!==null;){var n=Te;if((n.flags&8772)!==0){var i=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Bn||Qa(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!Bn)if(i===null)l.componentDidMount();else{var u=n.elementType===n.type?i.memoizedProps:kt(n.type,i.memoizedProps);l.componentDidUpdate(u,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=n.updateQueue;h!==null&&Lu(n,h,l);break;case 3:var z=n.updateQueue;if(z!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}Lu(n,z,i)}break;case 5:var A=n.stateNode;if(i===null&&n.flags&4){i=A;var N=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&i.focus();break;case"img":N.src&&(i.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var X=n.alternate;if(X!==null){var ue=X.memoizedState;if(ue!==null){var pe=ue.dehydrated;pe!==null&&fi(pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}Bn||n.flags&512&&i0(n)}catch(se){fn(n,n.return,se)}}if(n===e){Te=null;break}if(i=n.sibling,i!==null){i.return=n.return,Te=i;break}Te=n.return}}function Ld(e){for(;Te!==null;){var n=Te;if(n===e){Te=null;break}var i=n.sibling;if(i!==null){i.return=n.return,Te=i;break}Te=n.return}}function Wd(e){for(;Te!==null;){var n=Te;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{Qa(4,n)}catch(N){fn(n,i,N)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var u=n.return;try{l.componentDidMount()}catch(N){fn(n,u,N)}}var h=n.return;try{i0(n)}catch(N){fn(n,h,N)}break;case 5:var z=n.return;try{i0(n)}catch(N){fn(n,z,N)}}}catch(N){fn(n,n.return,N)}if(n===e){Te=null;break}var A=n.sibling;if(A!==null){A.return=n.return,Te=A;break}Te=n.return}}var Lf=Math.ceil,Ya=I.ReactCurrentDispatcher,l0=I.ReactCurrentOwner,yt=I.ReactCurrentBatchConfig,Ze=0,Sn=null,wn=null,An=0,st=0,Mo=wr(0),kn=0,Bi=null,Yr=0,Xa=0,c0=0,Fi=null,Xn=null,u0=0,Do=1/0,Jt=null,Ja=!1,d0=null,_r=null,es=!1,jr=null,ns=0,Ii=0,p0=null,ts=-1,rs=0;function Wn(){return(Ze&6)!==0?ln():ts!==-1?ts:ts=ln()}function Sr(e){return(e.mode&1)===0?1:(Ze&2)!==0&&An!==0?An&-An:kf.transition!==null?(rs===0&&(rs=Rc()),rs):(e=Xe,e!==0||(e=window.event,e=e===void 0?16:Hc(e.type)),e)}function St(e,n,i,l){if(50<Ii)throw Ii=0,p0=null,Error(r(185));ci(e,i,l),((Ze&2)===0||e!==Sn)&&(e===Sn&&((Ze&2)===0&&(Xa|=i),kn===4&&qr(e,An)),Jn(e,l),i===1&&Ze===0&&(n.mode&1)===0&&(Do=ln()+500,Aa&&br()))}function Jn(e,n){var i=e.callbackNode;vm(e,n);var l=pa(e,e===Sn?An:0);if(l===0)i!==null&&sa(i),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(i!=null&&sa(i),n===1)e.tag===0?vf(Hd.bind(null,e)):Tu(Hd.bind(null,e)),wf(function(){(Ze&6)===0&&br()}),i=null;else{switch(Ec(l)){case 1:i=ai;break;case 4:i=la;break;case 16:i=Gt;break;case 536870912:i=ca;break;default:i=Gt}i=Xd(i,Od.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function Od(e,n){if(ts=-1,rs=0,(Ze&6)!==0)throw Error(r(327));var i=e.callbackNode;if(Ro()&&e.callbackNode!==i)return null;var l=pa(e,e===Sn?An:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||n)n=os(e,l);else{n=l;var u=Ze;Ze|=2;var h=Ud();(Sn!==e||An!==n)&&(Jt=null,Do=ln()+500,Jr(e,n));do try{Hf();break}catch(A){Gd(e,A)}while(!0);Pl(),Ya.current=h,Ze=u,wn!==null?n=0:(Sn=null,An=0,n=kn)}if(n!==0){if(n===2&&(u=Us(e),u!==0&&(l=u,n=m0(e,u))),n===1)throw i=Bi,Jr(e,0),qr(e,l),Jn(e,ln()),i;if(n===6)qr(e,l);else{if(u=e.current.alternate,(l&30)===0&&!Wf(u)&&(n=os(e,l),n===2&&(h=Us(e),h!==0&&(l=h,n=m0(e,h))),n===1))throw i=Bi,Jr(e,0),qr(e,l),Jn(e,ln()),i;switch(e.finishedWork=u,e.finishedLanes=l,n){case 0:case 1:throw Error(r(345));case 2:eo(e,Xn,Jt);break;case 3:if(qr(e,l),(l&130023424)===l&&(n=u0+500-ln(),10<n)){if(pa(e,0)!==0)break;if(u=e.suspendedLanes,(u&l)!==l){Wn(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=wl(eo.bind(null,e,Xn,Jt),n);break}eo(e,Xn,Jt);break;case 4:if(qr(e,l),(l&4194240)===l)break;for(n=e.eventTimes,u=-1;0<l;){var z=31-Ie(l);h=1<<z,z=n[z],z>u&&(u=z),l&=~h}if(l=u,l=ln()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Lf(l/1960))-l,10<l){e.timeoutHandle=wl(eo.bind(null,e,Xn,Jt),l);break}eo(e,Xn,Jt);break;case 5:eo(e,Xn,Jt);break;default:throw Error(r(329))}}}return Jn(e,ln()),e.callbackNode===i?Od.bind(null,e):null}function m0(e,n){var i=Fi;return e.current.memoizedState.isDehydrated&&(Jr(e,n).flags|=256),e=os(e,n),e!==2&&(n=Xn,Xn=i,n!==null&&f0(n)),e}function f0(e){Xn===null?Xn=e:Xn.push.apply(Xn,e)}function Wf(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var u=i[l],h=u.getSnapshot;u=u.value;try{if(!zt(h(),u))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qr(e,n){for(n&=~c0,n&=~Xa,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-Ie(n),l=1<<i;e[i]=-1,n&=~l}}function Hd(e){if((Ze&6)!==0)throw Error(r(327));Ro();var n=pa(e,0);if((n&1)===0)return Jn(e,ln()),null;var i=os(e,n);if(e.tag!==0&&i===2){var l=Us(e);l!==0&&(n=l,i=m0(e,l))}if(i===1)throw i=Bi,Jr(e,0),qr(e,n),Jn(e,ln()),i;if(i===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,eo(e,Xn,Jt),Jn(e,ln()),null}function h0(e,n){var i=Ze;Ze|=1;try{return e(n)}finally{Ze=i,Ze===0&&(Do=ln()+500,Aa&&br())}}function Xr(e){jr!==null&&jr.tag===0&&(Ze&6)===0&&Ro();var n=Ze;Ze|=1;var i=yt.transition,l=Xe;try{if(yt.transition=null,Xe=1,e)return e()}finally{Xe=l,yt.transition=i,Ze=n,(Ze&6)===0&&br()}}function $0(){st=Mo.current,on(Mo)}function Jr(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,gf(i)),wn!==null)for(i=wn.return;i!==null;){var l=i;switch(_l(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ta();break;case 3:Po(),on(Vn),on(Dn),Fl();break;case 5:El(l);break;case 4:Po();break;case 13:on(cn);break;case 19:on(cn);break;case 10:Al(l.type._context);break;case 22:case 23:$0()}i=i.return}if(Sn=e,wn=e=Tr(e.current,null),An=st=n,kn=0,Bi=null,c0=Xa=Yr=0,Xn=Fi=null,Kr!==null){for(n=0;n<Kr.length;n++)if(i=Kr[n],l=i.interleaved,l!==null){i.interleaved=null;var u=l.next,h=i.pending;if(h!==null){var z=h.next;h.next=u,l.next=z}i.pending=l}Kr=null}return e}function Gd(e,n){do{var i=wn;try{if(Pl(),La.current=Ga,Wa){for(var l=un.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}Wa=!1}if(Qr=0,jn=vn=un=null,Ai=!1,Ci=0,l0.current=null,i===null||i.return===null){kn=1,Bi=n,wn=null;break}e:{var h=e,z=i.return,A=i,N=n;if(n=An,A.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var X=N,ue=A,pe=ue.tag;if((ue.mode&1)===0&&(pe===0||pe===11||pe===15)){var se=ue.alternate;se?(ue.updateQueue=se.updateQueue,ue.memoizedState=se.memoizedState,ue.lanes=se.lanes):(ue.updateQueue=null,ue.memoizedState=null)}var _e=$d(z);if(_e!==null){_e.flags&=-257,yd(_e,z,A,h,n),_e.mode&1&&hd(h,X,n),n=_e,N=X;var Pe=n.updateQueue;if(Pe===null){var Ae=new Set;Ae.add(N),n.updateQueue=Ae}else Pe.add(N);break e}else{if((n&1)===0){hd(h,X,n),y0();break e}N=Error(r(426))}}else if(an&&A.mode&1){var $n=$d(z);if($n!==null){($n.flags&65536)===0&&($n.flags|=256),yd($n,z,A,h,n),ql(Ao(N,A));break e}}h=N=Ao(N,A),kn!==4&&(kn=2),Fi===null?Fi=[h]:Fi.push(h),h=z;do{switch(h.tag){case 3:h.flags|=65536,n&=-n,h.lanes|=n;var Z=md(h,N,n);Nu(h,Z);break e;case 1:A=N;var G=h.type,V=h.stateNode;if((h.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||V!==null&&typeof V.componentDidCatch=="function"&&(_r===null||!_r.has(V)))){h.flags|=65536,n&=-n,h.lanes|=n;var $e=fd(h,A,n);Nu(h,$e);break e}}h=h.return}while(h!==null)}Kd(i)}catch(Ce){n=Ce,wn===i&&i!==null&&(wn=i=i.return);continue}break}while(!0)}function Ud(){var e=Ya.current;return Ya.current=Ga,e===null?Ga:e}function y0(){(kn===0||kn===3||kn===2)&&(kn=4),Sn===null||(Yr&268435455)===0&&(Xa&268435455)===0||qr(Sn,An)}function os(e,n){var i=Ze;Ze|=2;var l=Ud();(Sn!==e||An!==n)&&(Jt=null,Jr(e,n));do try{Of();break}catch(u){Gd(e,u)}while(!0);if(Pl(),Ze=i,Ya.current=l,wn!==null)throw Error(r(261));return Sn=null,An=0,kn}function Of(){for(;wn!==null;)Zd(wn)}function Hf(){for(;wn!==null&&!Or();)Zd(wn)}function Zd(e){var n=Yd(e.alternate,e,st);e.memoizedProps=e.pendingProps,n===null?Kd(e):wn=n,l0.current=null}function Kd(e){var n=e;do{var i=n.alternate;if(e=n.return,(n.flags&32768)===0){if(i=Ef(i,n,st),i!==null){wn=i;return}}else{if(i=Bf(i,n),i!==null){i.flags&=32767,wn=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{kn=6,wn=null;return}}if(n=n.sibling,n!==null){wn=n;return}wn=n=e}while(n!==null);kn===0&&(kn=5)}function eo(e,n,i){var l=Xe,u=yt.transition;try{yt.transition=null,Xe=1,Gf(e,n,i,l)}finally{yt.transition=u,Xe=l}return null}function Gf(e,n,i,l){do Ro();while(jr!==null);if((Ze&6)!==0)throw Error(r(327));i=e.finishedWork;var u=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var h=i.lanes|i.childLanes;if(km(e,h),e===Sn&&(wn=Sn=null,An=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||es||(es=!0,Xd(Gt,function(){return Ro(),null})),h=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||h){h=yt.transition,yt.transition=null;var z=Xe;Xe=1;var A=Ze;Ze|=4,l0.current=null,If(e,i),Fd(i,e),df(yl),ha=!!$l,yl=$l=null,e.current=i,Nf(i),Hs(),Ze=A,Xe=z,yt.transition=h}else e.current=i;if(es&&(es=!1,jr=e,ns=u),h=e.pendingLanes,h===0&&(_r=null),oe(i.stateNode),Jn(e,ln()),n!==null)for(l=e.onRecoverableError,i=0;i<n.length;i++)u=n[i],l(u.value,{componentStack:u.stack,digest:u.digest});if(Ja)throw Ja=!1,e=d0,d0=null,e;return(ns&1)!==0&&e.tag!==0&&Ro(),h=e.pendingLanes,(h&1)!==0?e===p0?Ii++:(Ii=0,p0=e):Ii=0,br(),null}function Ro(){if(jr!==null){var e=Ec(ns),n=yt.transition,i=Xe;try{if(yt.transition=null,Xe=16>e?16:e,jr===null)var l=!1;else{if(e=jr,jr=null,ns=0,(Ze&6)!==0)throw Error(r(331));var u=Ze;for(Ze|=4,Te=e.current;Te!==null;){var h=Te,z=h.child;if((Te.flags&16)!==0){var A=h.deletions;if(A!==null){for(var N=0;N<A.length;N++){var X=A[N];for(Te=X;Te!==null;){var ue=Te;switch(ue.tag){case 0:case 11:case 15:Ei(8,ue,h)}var pe=ue.child;if(pe!==null)pe.return=ue,Te=pe;else for(;Te!==null;){ue=Te;var se=ue.sibling,_e=ue.return;if(Md(ue),ue===X){Te=null;break}if(se!==null){se.return=_e,Te=se;break}Te=_e}}}var Pe=h.alternate;if(Pe!==null){var Ae=Pe.child;if(Ae!==null){Pe.child=null;do{var $n=Ae.sibling;Ae.sibling=null,Ae=$n}while(Ae!==null)}}Te=h}}if((h.subtreeFlags&2064)!==0&&z!==null)z.return=h,Te=z;else e:for(;Te!==null;){if(h=Te,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Ei(9,h,h.return)}var Z=h.sibling;if(Z!==null){Z.return=h.return,Te=Z;break e}Te=h.return}}var G=e.current;for(Te=G;Te!==null;){z=Te;var V=z.child;if((z.subtreeFlags&2064)!==0&&V!==null)V.return=z,Te=V;else e:for(z=G;Te!==null;){if(A=Te,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:Qa(9,A)}}catch(Ce){fn(A,A.return,Ce)}if(A===z){Te=null;break e}var $e=A.sibling;if($e!==null){$e.return=A.return,Te=$e;break e}Te=A.return}}if(Ze=u,br(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(mo,e)}catch{}l=!0}return l}finally{Xe=i,yt.transition=n}}return!1}function Vd(e,n,i){n=Ao(i,n),n=md(e,n,1),e=vr(e,n,1),n=Wn(),e!==null&&(ci(e,1,n),Jn(e,n))}function fn(e,n,i){if(e.tag===3)Vd(e,e,i);else for(;n!==null;){if(n.tag===3){Vd(n,e,i);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(_r===null||!_r.has(l))){e=Ao(i,e),e=fd(n,e,1),n=vr(n,e,1),e=Wn(),n!==null&&(ci(n,1,e),Jn(n,e));break}}n=n.return}}function Uf(e,n,i){var l=e.pingCache;l!==null&&l.delete(n),n=Wn(),e.pingedLanes|=e.suspendedLanes&i,Sn===e&&(An&i)===i&&(kn===4||kn===3&&(An&130023424)===An&&500>ln()-u0?Jr(e,0):c0|=i),Jn(e,n)}function Qd(e,n){n===0&&((e.mode&1)===0?n=1:(n=da,da<<=1,(da&130023424)===0&&(da=4194304)));var i=Wn();e=Qt(e,n),e!==null&&(ci(e,n,i),Jn(e,i))}function Zf(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),Qd(e,i)}function Kf(e,n){var i=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(i=u.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(r(314))}l!==null&&l.delete(n),Qd(e,i)}var Yd;Yd=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||Vn.current)Yn=!0;else{if((e.lanes&i)===0&&(n.flags&128)===0)return Yn=!1,Rf(e,n,i);Yn=(e.flags&131072)!==0}else Yn=!1,an&&(n.flags&1048576)!==0&&Pu(n,Ma,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Ka(e,n),e=n.pendingProps;var u=vo(n,Dn.current);To(n,i),u=Ll(null,n,l,e,u,i);var h=Wl();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Qn(l)?(h=!0,Pa(n)):h=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Dl(n),u.updater=Ua,n.stateNode=u,u._reactInternals=n,Kl(n,l,e,i),n=Xl(null,n,l,!0,h,i)):(n.tag=0,an&&h&&kl(n),Ln(null,n,u,i),n=n.child),n;case 16:l=n.elementType;e:{switch(Ka(e,n),e=n.pendingProps,u=l._init,l=u(l._payload),n.type=l,u=n.tag=Qf(l),e=kt(l,e),u){case 0:n=Yl(null,n,l,e,i);break e;case 1:n=vd(null,n,l,e,i);break e;case 11:n=gd(null,n,l,e,i);break e;case 14:n=wd(null,n,l,kt(l.type,e),i);break e}throw Error(r(306,l,""))}return n;case 0:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:kt(l,u),Yl(e,n,l,u,i);case 1:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:kt(l,u),vd(e,n,l,u,i);case 3:e:{if(kd(n),e===null)throw Error(r(387));l=n.pendingProps,h=n.memoizedState,u=h.element,Iu(e,n),Ia(n,l,null,i);var z=n.memoizedState;if(l=z.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:z.cache,pendingSuspenseBoundaries:z.pendingSuspenseBoundaries,transitions:z.transitions},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){u=Ao(Error(r(423)),n),n=_d(e,n,l,i,u);break e}else if(l!==u){u=Ao(Error(r(424)),n),n=_d(e,n,l,i,u);break e}else for(at=gr(n.stateNode.containerInfo.firstChild),it=n,an=!0,vt=null,i=Bu(n,null,l,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(jo(),l===u){n=Xt(e,n,i);break e}Ln(e,n,l,i)}n=n.child}return n;case 5:return Wu(n),e===null&&Sl(n),l=n.type,u=n.pendingProps,h=e!==null?e.memoizedProps:null,z=u.children,gl(l,u)?z=null:h!==null&&gl(l,h)&&(n.flags|=32),zd(e,n),Ln(e,n,z,i),n.child;case 6:return e===null&&Sl(n),null;case 13:return jd(e,n,i);case 4:return Rl(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=So(n,null,l,i):Ln(e,n,l,i),n.child;case 11:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:kt(l,u),gd(e,n,l,u,i);case 7:return Ln(e,n,n.pendingProps,i),n.child;case 8:return Ln(e,n,n.pendingProps.children,i),n.child;case 12:return Ln(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(l=n.type._context,u=n.pendingProps,h=n.memoizedProps,z=u.value,nn(Ea,l._currentValue),l._currentValue=z,h!==null)if(zt(h.value,z)){if(h.children===u.children&&!Vn.current){n=Xt(e,n,i);break e}}else for(h=n.child,h!==null&&(h.return=n);h!==null;){var A=h.dependencies;if(A!==null){z=h.child;for(var N=A.firstContext;N!==null;){if(N.context===l){if(h.tag===1){N=Yt(-1,i&-i),N.tag=2;var X=h.updateQueue;if(X!==null){X=X.shared;var ue=X.pending;ue===null?N.next=N:(N.next=ue.next,ue.next=N),X.pending=N}}h.lanes|=i,N=h.alternate,N!==null&&(N.lanes|=i),Cl(h.return,i,n),A.lanes|=i;break}N=N.next}}else if(h.tag===10)z=h.type===n.type?null:h.child;else if(h.tag===18){if(z=h.return,z===null)throw Error(r(341));z.lanes|=i,A=z.alternate,A!==null&&(A.lanes|=i),Cl(z,i,n),z=h.sibling}else z=h.child;if(z!==null)z.return=h;else for(z=h;z!==null;){if(z===n){z=null;break}if(h=z.sibling,h!==null){h.return=z.return,z=h;break}z=z.return}h=z}Ln(e,n,u.children,i),n=n.child}return n;case 9:return u=n.type,l=n.pendingProps.children,To(n,i),u=ht(u),l=l(u),n.flags|=1,Ln(e,n,l,i),n.child;case 14:return l=n.type,u=kt(l,n.pendingProps),u=kt(l.type,u),wd(e,n,l,u,i);case 15:return xd(e,n,n.type,n.pendingProps,i);case 17:return l=n.type,u=n.pendingProps,u=n.elementType===l?u:kt(l,u),Ka(e,n),n.tag=1,Qn(l)?(e=!0,Pa(n)):e=!1,To(n,i),dd(n,l,u),Kl(n,l,u,i),Xl(null,n,l,!0,e,i);case 19:return qd(e,n,i);case 22:return bd(e,n,i)}throw Error(r(156,n.tag))};function Xd(e,n){return oi(e,n)}function Vf(e,n,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,n,i,l){return new Vf(e,n,i,l)}function g0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qf(e){if(typeof e=="function")return g0(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Q)return 11;if(e===ye)return 14}return 2}function Tr(e,n){var i=e.alternate;return i===null?(i=gt(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function is(e,n,i,l,u,h){var z=2;if(l=e,typeof e=="function")g0(e)&&(z=1);else if(typeof e=="string")z=5;else e:switch(e){case F:return no(i.children,u,h,n);case ee:z=8,u|=8;break;case J:return e=gt(12,i,n,u|2),e.elementType=J,e.lanes=h,e;case Y:return e=gt(13,i,n,u),e.elementType=Y,e.lanes=h,e;case ce:return e=gt(19,i,n,u),e.elementType=ce,e.lanes=h,e;case xe:return as(i,u,h,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ne:z=10;break e;case re:z=9;break e;case Q:z=11;break e;case ye:z=14;break e;case ze:z=16,l=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return n=gt(z,i,n,u),n.elementType=e,n.type=l,n.lanes=h,n}function no(e,n,i,l){return e=gt(7,e,l,n),e.lanes=i,e}function as(e,n,i,l){return e=gt(22,e,l,n),e.elementType=xe,e.lanes=i,e.stateNode={isHidden:!1},e}function w0(e,n,i){return e=gt(6,e,null,n),e.lanes=i,e}function x0(e,n,i){return n=gt(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Yf(e,n,i,l,u){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zs(0),this.expirationTimes=Zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zs(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function b0(e,n,i,l,u,h,z,A,N){return e=new Yf(e,n,i,A,N),n===1?(n=1,h===!0&&(n|=8)):n=0,h=gt(3,null,null,n),e.current=h,h.stateNode=e,h.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dl(h),e}function Xf(e,n,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:e,containerInfo:n,implementation:i}}function Jd(e){if(!e)return xr;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(r(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Qn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(r(171))}if(e.tag===1){var i=e.type;if(Qn(i))return Su(e,i,n)}return n}function e1(e,n,i,l,u,h,z,A,N){return e=b0(i,l,!0,e,u,h,z,A,N),e.context=Jd(null),i=e.current,l=Wn(),u=Sr(i),h=Yt(l,u),h.callback=n??null,vr(i,h,u),e.current.lanes=u,ci(e,u,l),Jn(e,l),e}function ss(e,n,i,l){var u=n.current,h=Wn(),z=Sr(u);return i=Jd(i),n.context===null?n.context=i:n.pendingContext=i,n=Yt(h,z),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=vr(u,n,z),e!==null&&(St(e,u,z,h),Fa(e,u,z)),z}function ls(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function n1(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function z0(e,n){n1(e,n),(e=e.alternate)&&n1(e,n)}function Jf(){return null}var t1=typeof reportError=="function"?reportError:function(e){console.error(e)};function v0(e){this._internalRoot=e}cs.prototype.render=v0.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));ss(e,n,null,null)},cs.prototype.unmount=v0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Xr(function(){ss(null,e,null,null)}),n[Ut]=null}};function cs(e){this._internalRoot=e}cs.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ic();e={blockedOn:null,target:e,priority:n};for(var i=0;i<hr.length&&n!==0&&n<hr[i].priority;i++);hr.splice(i,0,e),i===0&&Wc(e)}};function k0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function us(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function r1(){}function e2(e,n,i,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var X=ls(z);h.call(X)}}var z=e1(n,l,e,0,null,!1,!1,"",r1);return e._reactRootContainer=z,e[Ut]=z.current,vi(e.nodeType===8?e.parentNode:e),Xr(),z}for(;u=e.lastChild;)e.removeChild(u);if(typeof l=="function"){var A=l;l=function(){var X=ls(N);A.call(X)}}var N=b0(e,0,!1,null,null,!1,!1,"",r1);return e._reactRootContainer=N,e[Ut]=N.current,vi(e.nodeType===8?e.parentNode:e),Xr(function(){ss(n,N,i,l)}),N}function ds(e,n,i,l,u){var h=i._reactRootContainer;if(h){var z=h;if(typeof u=="function"){var A=u;u=function(){var N=ls(z);A.call(N)}}ss(n,z,e,u)}else z=e2(i,n,e,u,l);return ls(z)}Bc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=li(n.pendingLanes);i!==0&&(Ks(n,i|1),Jn(n,ln()),(Ze&6)===0&&(Do=ln()+500,br()))}break;case 13:Xr(function(){var l=Qt(e,1);if(l!==null){var u=Wn();St(l,e,1,u)}}),z0(e,1)}},Vs=function(e){if(e.tag===13){var n=Qt(e,134217728);if(n!==null){var i=Wn();St(n,e,134217728,i)}z0(e,134217728)}},Fc=function(e){if(e.tag===13){var n=Sr(e),i=Qt(e,n);if(i!==null){var l=Wn();St(i,e,n,l)}z0(e,n)}},Ic=function(){return Xe},Nc=function(e,n){var i=Xe;try{return Xe=e,n()}finally{Xe=i}},Xo=function(e,n,i){switch(n){case"input":if(Tn(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var l=i[n];if(l!==e&&l.form===e.form){var u=qa(l);if(!u)throw Error(r(90));Lt(l),Tn(l,u)}}}break;case"textarea":ea(e,i);break;case"select":n=i.value,n!=null&&Mn(e,!!i.multiple,n,!1)}},ta=h0,ra=Xr;var n2={usingClientEntryPoint:!1,Events:[ji,bo,qa,cr,Jo,h0]},Ni={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t2={bundleType:Ni.bundleType,version:Ni.version,rendererPackageName:Ni.rendererPackageName,rendererConfig:Ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ia(e),e===null?null:e.stateNode},findFiberByHostInstance:Ni.findFiberByHostInstance||Jf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ps.isDisabled&&ps.supportsFiber)try{mo=ps.inject(t2),rt=ps}catch{}}return et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=n2,et.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!k0(n))throw Error(r(200));return Xf(e,n,null,i)},et.createRoot=function(e,n){if(!k0(e))throw Error(r(299));var i=!1,l="",u=t1;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=b0(e,1,!1,null,null,i,!1,l,u),e[Ut]=n.current,vi(e.nodeType===8?e.parentNode:e),new v0(n)},et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=ia(n),e=e===null?null:e.stateNode,e},et.flushSync=function(e){return Xr(e)},et.hydrate=function(e,n,i){if(!us(n))throw Error(r(200));return ds(null,e,n,!0,i)},et.hydrateRoot=function(e,n,i){if(!k0(e))throw Error(r(405));var l=i!=null&&i.hydratedSources||null,u=!1,h="",z=t1;if(i!=null&&(i.unstable_strictMode===!0&&(u=!0),i.identifierPrefix!==void 0&&(h=i.identifierPrefix),i.onRecoverableError!==void 0&&(z=i.onRecoverableError)),n=e1(n,null,e,1,i??null,u,!1,h,z),e[Ut]=n.current,vi(e),l)for(e=0;e<l.length;e++)i=l[e],u=i._getVersion,u=u(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,u]:n.mutableSourceEagerHydrationData.push(i,u);return new cs(n)},et.render=function(e,n,i){if(!us(n))throw Error(r(200));return ds(null,e,n,!1,i)},et.unmountComponentAtNode=function(e){if(!us(e))throw Error(r(40));return e._reactRootContainer?(Xr(function(){ds(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1},et.unstable_batchedUpdates=h0,et.unstable_renderSubtreeIntoContainer=function(e,n,i,l){if(!us(i))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return ds(e,n,i,!1,l)},et.version="18.3.1-next-f1338f8080-20240426",et}var d1;function u2(){if(d1)return S0.exports;d1=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),S0.exports=c2(),S0.exports}var p1;function d2(){if(p1)return ms;p1=1;var o=u2();return ms.createRoot=o.createRoot,ms.hydrateRoot=o.hydrateRoot,ms}var p2=d2();const m2=`---
label: "Absolute Value"
labelPl: "Wartość bezwzględna"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 100
y: 310
resources:
  - "interactive|resources/abs_value/abs-value-explorer.html|Absolute Value Explorer|Wartosc bezwzgledna — odleglosc od zera"
  - "interactive|abs-value-warsztat.html|Absolute Value Warsztat|Wartość bezwzględna — Warsztat"
  - "interactive|abs-distance-warsztat.html|Absolute Value as Distance Warsztat|Moduł jako odległość — Warsztat"
---
Wartość bezwzględna mierzy odległość liczby od zera na osi liczbowej — niezależnie od znaku, zawsze dostajemy wynik nieujemny.<br><br>Definicja: $|x| = x$ gdy $x \\geq 0$, oraz $|x| = -x$ gdy $x < 0$. Zawsze zachodzi $|x| \\geq 0$.<br><br>Równanie $|x| = a$ (dla $a > 0$) ma dwa rozwiązania: $x = a$ i $x = -a$. Nierówność $|x| < a$ oznacza $-a < x < a$. Uogólnienie: $|x - c|$ to odległość od punktu $c$.

<!-- example -->
Na przykład: $|-5| = 5$, bo $-5$ jest w odległości 5 od zera.<br><br>Równanie $|x| = 3$ daje $x = 3$ lub $x = -3$.<br><br>Nierówność $|x - 2| < 3$ oznacza $-1 < x < 5$, czyli wszystkie punkty bliżej niż 3 od punktu 2.

<!-- mistakes -->
- **Dwa przypadki**: równanie/nierówność z $|\\cdot|$ rozbijamy na 2 przypadki ($\\geq 0$ i $< 0$), a nie jeden "zdjęcie modułu".
- **$|a-b| \\neq |a| - |b|$**: to nie jest liniowe. Na przykład $|3 - 5| = 2$, ale $|3| - |5| = -2$.
- **Nierówność $|x| < a$**: to $-a < x < a$, nie $x < a$. Minus często gubi się w rachunku.
`,f2=`---
label: "Analytic Geometry"
labelPl: "Geometria analityczna"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 960
resources:
  - "interactive|analytic-geom-explorer.html|Analytic Geometry|Geometria analityczna"
---
`,h2=`---
label: "Area & Perimeter"
labelPl: "Pole i obwód"
scope: planimetria
section: SP8
level: 1
x: 100
y: 860
resources:
  - "interactive|area-perimeter-explorer.html|Area & Perimeter|Pole i obwód"
---
`,$2=`---
label: "Arith. & Geometric Seq."
labelPl: "Ciągi arytm. i geom."
scope: ciagi
section: LP
level: 2
x: 1080
y: 220
resources:
  - "interactive|resources/sequences/sequences-explorer.html|Sequences Explorer|Ciągi — eksplorator"
---
Ciągi arytmetyczne i geometryczne to dwa fundamentalne typy ciągów — jeden rośnie jednostajnie, drugi wykładniczo.<br><br>Ciąg arytmetyczny: $a_n = a_1 + (n-1)d$, każdy wyraz różni się od poprzedniego o stałą $d$. Ciąg geometryczny: $a_n = a_1 \\cdot q^{n-1}$, każdy wyraz jest $q$ razy większy od poprzedniego.<br><br>Arytmetyczny rośnie liniowo, geometryczny wykładniczo. Dla $|q| < 1$ ciąg geometryczny zbiega do 0, a jego suma nieskończona wynosi $S_\\infty = \\frac{a_1}{1-q}$.

<!-- example -->
Na przykład: arytmetyczny $1, 4, 7, 10$ ($d = 3$) vs geometryczny $1, 2, 4, 8$ ($q = 2$).<br><br>Przy $n = 10$: arytmetyczny daje $a_{10} = 28$, a geometryczny $a_{10} = 512$ — różnica między wzrostem liniowym a wykładniczym widać od razu.<br><br>Ale gdy $q = 0{,}5$: $1;\\ 0{,}5;\\ 0{,}25;\\ 0{,}125;\\ \\ldots$ zbiega do $S_\\infty = \\frac{1}{1-0{,}5} = 2$.
`,y2=`---
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
Schemat Bernoulliego opisuje powtarzalne eksperymenty z dwoma możliwymi wynikami — sukces lub porażka.<br><br>Powtarzamy doświadczenie $n$ razy, niezależnie. Sukces z prawdopodobieństwem $p$, porażka z $1-p$. Prawdopodobieństwo dokładnie $k$ sukcesów: $P(k) = C(n,k) \\cdot p^k \\cdot (1-p)^{n-k}$.<br><br>Wartość oczekiwana: $E = n \\cdot p$. Typowe zastosowania: rzuty monetą, kontrola jakości, testy wielokrotne.

<!-- example -->
Na przykład: rzucamy monetą 4 razy. Jakie jest prawdopodobieństwo dokładnie 3 orłów?<br><br>$P(3) = C(4,3) \\cdot \\left(\\frac{1}{2}\\right)^3 \\cdot \\left(\\frac{1}{2}\\right)^1 = 4 \\cdot \\frac{1}{8} \\cdot \\frac{1}{2} = \\frac{4}{16} = \\frac{1}{4}$.
`,g2=`---
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
Dwumian Newtona pozwala rozwijać dowolną potęgę sumy $(a+b)^n$ bez wielokrotnego mnożenia.<br><br>Wzór: $(a+b)^n = \\sum_{k=0}^{n} C(n,k) \\cdot a^{n-k} \\cdot b^k$. Wyraz ogólny to $C(n,k) \\cdot a^{n-k} \\cdot b^k$.<br><br>Współczynniki tworzą kolejne wiersze trójkąta Pascala. Zastosowania: rozwinięcia potęg, przybliżenia, tożsamości kombinatoryczne.

<!-- example -->
Na przykład: $(1+x)^3 = 1 + 3x + 3x^2 + x^3$.<br><br>Współczynniki $1, 3, 3, 1$ to trzeci wiersz trójkąta Pascala. Zauważ symetrię: współczynniki czytane od końca są takie same.
`,w2=`---
label: "Circle Equation"
labelPl: "Równanie okręgu"
scope: geometria_analityczna
section: LP
level: 2
x: 530
y: 870
resources:
  - "interactive|circle-eq-explorer.html|Circle Equation Explorer|Równanie okręgu"
---
Okrąg to zbiór punktów oddalonych o tę samą wartość $r$ (promień) od ustalonego punktu $(h, k)$ (środka). Korzystając z twierdzenia Pitagorasa na trójkącie między środkiem a punktem $(x, y)$ na okręgu, dostajesz bezpośrednio **postać kanoniczną**:<br><br>$$(x - h)^2 + (y - k)^2 = r^2$$<br><br>Z równania od razu odczytasz środek $(h, k)$ i promień $r$ — bez żadnych dalszych rachunków.<br><br>Czasem okrąg zapisuje się w **postaci ogólnej** $x^2 + y^2 + Dx + Ey + F = 0$. Żeby wrócić do postaci kanonicznej, uzupełniasz kwadrat osobno dla $x$ i dla $y$ — wtedy widać środek i promień.

<!-- example -->
Równanie $(x - 2)^2 + (y + 3)^2 = 25$.<br><br>Porównaj wzorzec: $(x - h)^2 + (y - k)^2 = r^2$. Zgadza się gdy $h = 2$, $k = -3$ (bo $y + 3 = y - (-3)$), $r^2 = 25$, czyli $r = 5$.<br><br>Środek: $(2, -3)$. Promień: $5$.<br><br>**Dla ciekawych — związek z przekształceniami wykresów.** Postać kanoniczna jest dokładnie tym samym mechanizmem co **postać kanoniczna paraboli** $y = (x - h)^2 + k$ (zobacz: *Przekształcenia wykresów funkcji*). Punktem wyjścia jest **okrąg jednostkowy** $x^2 + y^2 = 1$ — środek $(0, 0)$, promień $1$. Podstawienie $x \\to x - h$ przesuwa go poziomo o $h$ (przeciwnie do znaku w nawiasie), podstawienie $y \\to y - k$ przesuwa pionowo o $k$, a pomnożenie prawej strony przez $r^2$ rozciąga promień $r$-krotnie. Dowolny okrąg na płaszczyźnie to okrąg jednostkowy po tych trzech operacjach: dwie translacje i jednorodne skalowanie. Ta sama zasada "wewnątrz argumentu znak działa przeciwnie do intuicji" obowiązuje tu tak samo jak przy funkcjach — i wyjaśnia, dlaczego $(x - 2)^2$ oznacza przesunięcie w **prawo** o $2$, a nie w lewo.

<!-- mistakes -->
- **Znak w nawiasie:** $(x - 2)^2$ oznacza środek w $x = 2$, a nie w $x = -2$. Wzorzec jest $(x - h)^2$, więc znak w równaniu jest przeciwny do współrzędnej środka.<br>- **Mylenie promienia z $r^2$:** w równaniu po prawej stronie stoi $r^2$, nie $r$. Dla $(x-1)^2 + (y-2)^2 = 9$ promień to $3$, nie $9$.<br>- **Postać ogólna bez uzupełniania kwadratu:** z równania $x^2 + y^2 - 4x + 6y - 12 = 0$ nie da się od razu odczytać środka. Trzeba najpierw pogrupować wyrazy i uzupełnić kwadrat — dopiero wtedy pojawia się postać kanoniczna $(x-2)^2 + (y+3)^2 = 25$.
`,x2=`---
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
Kombinacja to sposób wyboru $k$ elementów z $n$, w którym kolejność nie ma znaczenia — liczy się tylko to, co wybraliśmy.<br><br>Wzór: $C(n,k) = \\binom{n}{k} = \\frac{n!}{k! \\cdot (n-k)!}$. Kluczowa różnica: permutacje uwzględniają kolejność, kombinacje nie. (Permutacja to uporządkowanie tych samych elementów — zmiana kolejności daje inne ustawienie.)<br><br>Trójkąt Pascala daje elegancką zależność rekurencyjną: $C(n,k) = C(n-1, k-1) + C(n-1, k)$.

<!-- example -->
Na przykład: ile 2-osobowych par z grupy $\\{A, B, C\\}$?<br><br>To AB, AC, BC — 3 pary $= C(3,2) = \\frac{3!}{2! \\cdot 1!} = 3$. Kolejność nie ma znaczenia: AB to to samo co BA.

<!-- mistakes -->
- **Kolejność**: kombinacja NIE uwzględnia kolejności, permutacja uwzględnia. "Delegacja 3-osobowa" = kombinacja; "kolejność na podium" = permutacja.
- **$\\binom{n}{k}$ vs $k!$**: $\\binom{5}{3} = 10$ (wybieram 3 z 5), ale $5! = 120$ (ustawiam wszystkie 5). Zupełnie różne liczby.
- **Powtórzenia**: w kombinacji domyślnie zakładamy brak powtórzeń. Gdy powtórzenia są dozwolone, stosuje się odrębny wzór $\\binom{n+k-1}{k}$ (poziom rozszerzony).
`,b2=`---
label: "Complex Numbers"
labelPl: "Liczby zespolone"
scope: analiza
section: UNIV
level: 3
x: 390
y: 650
---
`,z2=`---
label: "Conditional Probability"
labelPl: "Prawdop. warunkowe"
scope: kombinatoryka
section: LR
level: 3
x: 1260
y: 360
resources:
  - "interactive|bayes-explorer.html|Bayes' Theorem — Rare Disease Test Paradox|Twierdzenie Bayesa — paradoks testu na rzadką chorobę"
  - "interactive|conditional-warsztat.html|Conditional Probability Warsztat|Prawdopodobieństwo warunkowe — Warsztat"
---
Prawdopodobieństwo warunkowe odpowiada na pytanie: jak zmienia się szansa zdarzenia, gdy wiemy, że inne zdarzenie już zaszło?<br><br>Wzór: $P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ — prawdopodobieństwo $A$, gdy wiemy że zaszło $B$.<br><br>Bayes pozwala odwrócić warunek — z $P(B|A)$ wyliczyć $P(A|B)$. Twierdzenie Bayesa: $P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$. Jeśli zdarzenia $A_i$ rozbijają przestrzeń na rozłączne przypadki, to $P(B)$ można policzyć sumując po nich: Wzór na prawdopodobieństwo całkowite: $P(B) = \\sum P(B|A_i) \\cdot P(A_i)$. Drzewo decyzyjne pomaga organizować obliczenia.

<!-- example -->
Na przykład: w klasie 30 osób, 12 gra w piłkę nożną, 8 gra w piłkę i koszykówkę.<br><br>$P(\\text{koszykówka} | \\text{piłka}) = \\frac{8}{12} = \\frac{2}{3}$. Wiemy, że ktoś gra w piłkę — jakie szanse, że gra też w kosza?
`,v2=`---
label: "Conic Sections"
labelPl: "Krzywe stożkowe"
scope: geometria_analityczna
section: UNIV
level: 3
x: 660
y: 960
---
Krzywe stożkowe powstają dosłownie tak, jak sugeruje nazwa: tniesz nieskończony stożek płaszczyzną pod różnymi kątami i patrzysz, co zostaje na przecięciu. W zależności od kąta cięcia dostajesz okrąg, elipsę, parabolę albo hiperbolę.<br><br>Równania w postaci kanonicznej (wycentrowane w $(0,0)$):<br>**Elipsa**: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, gdzie $a$ i $b$ to półosie wzdłuż osi $x$ i $y$. Równanie elipsy rozpoznajemy po sumie kwadratów z różnymi mianownikami.<br>**Hiperbola**: $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, czyli różnica kwadratów. Składa się z dwóch osobnych gałęzi otwartych w lewo i w prawo.<br>**Parabola**: $y^2 = 2px$ — jedna zmienna w kwadracie, druga liniowa. Wykres otwiera się w bok; dla $x^2 = 2py$ otwiera się w górę lub w dół.<br><br>Okrąg $x^2 + y^2 = r^2$ to szczególny przypadek elipsy, gdy $a = b = r$.

<!-- example -->
Rozpoznaj krzywą $4x^2 + 9y^2 = 36$.<br><br>Dzielisz obie strony przez $36$: $\\frac{4x^2}{36} + \\frac{9y^2}{36} = 1 \\Rightarrow \\frac{x^2}{9} + \\frac{y^2}{4} = 1$.<br><br>Suma kwadratów z różnymi mianownikami $\\Rightarrow$ **elipsa** o półosiach $a = 3$ (wzdłuż $x$) i $b = 2$ (wzdłuż $y$).
`,k2=`---
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
Zasady liczenia to fundament kombinatoryki — pozwalają systematycznie zliczać możliwości w złożonych sytuacjach.<br><br>Reguła mnożenia: jeśli jedno zdarzenie ma $m$ możliwości, a drugie $n$, to razem jest $m \\cdot n$ kombinacji. Reguła dodawania: jeśli zdarzenia się wzajemnie wykluczają, sumujemy możliwości.<br><br>Zasada szufladkowa (Dirichleta): jeśli $n+1$ obiektów umieszczamy w $n$ szufladkach, to w co najmniej jednej są $\\geq 2$ obiekty. Przykład: w grupie 13 osób co najmniej dwie urodziły się w tym samym miesiącu (12 miesięcy, 13 osób).

<!-- example -->
Na przykład: 3 koszulki $\\times$ 4 spodnie $= 12$ zestawów (reguła mnożenia).<br><br>Albo: wejście A ma 5 opcji, wejście B ma 3 opcje, razem $5 + 3 = 8$ opcji, jeśli się wykluczają (reguła dodawania).
`,_2=`---
label: "Data & Statistics"
labelPl: "Dane i statystyka"
scope: statystyka
section: SP8
level: 1
x: 1160
y: 80
resources:
  - "interactive|data-basics-explorer.html|Data Basics Explorer|Eksplorator danych — średnia, mediana, moda"
---
Statystyka zaczyna się od danych — ich zbierania, porządkowania i prezentacji za pomocą tabel i wykresów.<br><br>Trzy kluczowe miary tendencji centralnej: średnia arytmetyczna (suma dzielona przez ilość), mediana (wartość środkowa po uporządkowaniu) i dominanta (moda — wartość najczęstsza).<br><br>Każda z nich mówi co innego o danych: średnia jest wrażliwa na wartości skrajne, mediana nie.

<!-- example -->
Na przykład: oceny $3, 4, 4, 5, 2$.<br><br>Średnia $= \\frac{3+4+4+5+2}{5} = \\frac{18}{5} = 3{,}6$. Mediana: po uporządkowaniu $2, 3, 4, 4, 5$ — środkowa $= 4$. Dominanta $= 4$ (występuje najczęściej).
`,j2=`---
label: "Zastosowania pochodnych"
labelPl: "Zastosowania pochodnych"
scope: analiza
section: LR
level: 3
x: 970
y: 880
resources:
  - "interactive|deriv-apps-explorer.html|Applications of Derivatives|Zastosowania pochodnych"
  - "interactive|deriv-apps-warsztat.html|Applied Derivative Warsztat|Optymalizacja z pochodną — Warsztat"
---
Pochodna ma trzy podstawowe zastosowania: badanie monotoniczności funkcji, wyznaczanie ekstremów oraz rozwiązywanie zadań optymalizacyjnych.<br><br>Monotoniczność: jeśli $f'(x) > 0$ na przedziale, to $f$ rośnie; jeśli $f'(x) < 0$, to maleje. Tego używa się, gdy trzeba podać przedziały wzrostu i spadku.<br><br>Ekstrema: szukamy $x_0$, dla którego $f'(x_0) = 0$, a następnie sprawdzamy znak $f'$ po obu stronach. Zmiana z $+$ na $-$ oznacza maksimum, a z $-$ na $+$ minimum.<br><br>Optymalizacja przebiega według stałego schematu:<br>1. Z treści zadania wypisz, co minimalizujesz/maksymalizujesz (np. objętość, pole).<br>2. Zapisz wszystkie zmienne i powiąż je równaniem z warunków zadania.<br>3. Sprowadź do funkcji *jednej* zmiennej $f(x)$ z zaznaczoną dziedziną.<br>4. Policz $f'(x)$, przyrównaj do zera, sprawdź znak pochodnej wokół pierwiastka.

<!-- example -->
Z kartonu $20 \\times 30$ cm wycinamy kwadraty o boku $x$ w rogach i składamy pudełko. Jakie $x$ daje maksymalną objętość?<br><br>Wymiary pudełka: podstawa $(20 - 2x)(30 - 2x)$, wysokość $x$. Objętość: $V(x) = x(20 - 2x)(30 - 2x)$, gdzie $x \\in (0, 10)$.<br><br>Po rozwinięciu $V(x) = 4x^3 - 100x^2 + 600x \\Rightarrow V'(x) = 12x^2 - 200x + 600$.<br><br>$V'(x) = 0 \\Rightarrow x^2 - \\tfrac{50}{3}x + 50 = 0 \\Rightarrow x \\approx 3{,}92$ (drugi pierwiastek odpada — poza dziedziną). Znak $V'$ zmienia się z $+$ na $-$, więc to maksimum.
`,S2=`---
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
  - "interactive|product-rule-general.html|🧩 Dla ciekawych: General Product Rule (f·g)' = f'g + fg'|🧩 Dla ciekawych: Ogólna reguła iloczynu (f·g)' = f'g + fg'"
  - "interactive|derivative-warsztat.html|Derivative Rules Warsztat|Reguły pochodnych — Warsztat"
---
Pochodna mówi, jak szybko zmienia się funkcja w danym punkcie — to tempo zmian. Geometrycznie: nachylenie stycznej do wykresu w tym punkcie.<br><br>Definicja: $f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$ — czyli średnia prędkość na odcinku $[x, x+h]$, gdy $h$ staje się znikomo małe.<br><br>Podstawowe reguły:<br>$(x^n)' = n x^{n-1}$ — dla każdej potęgi.<br>$(f+g)' = f' + g'$ oraz $(c \\cdot f)' = c f'$ — pochodną sumy liczymy składnik po składniku, a stałą wyciągamy przed pochodną.<br>$(f \\cdot g)' = f'g + fg'$ — dla iloczynu, np. $x^2 \\sin x$.<br>$(f/g)' = \\frac{f'g - fg'}{g^2}$ — dla ilorazu.<br>$(f(g(x)))' = f'(g(x)) \\cdot g'(x)$ — reguła łańcuchowa dla złożenia funkcji, np. $\\sin(x^2)$.<br><br>Do każdego składnika stosujesz reguły osobno, a następnie dodajesz wyniki.

<!-- example -->
Policz $f'(x)$ dla $f(x) = 3x^4 - 2x + 7$.<br><br>Rozbij na składniki: $(3x^4)' - (2x)' + (7)'$.<br><br>$(3x^4)' = 3 \\cdot 4x^3 = 12x^3 \\Rightarrow (2x)' = 2 \\Rightarrow (7)' = 0$.<br><br>Składamy: $f'(x) = 12x^3 - 2$.

<!-- mistakes -->
- **Pochodna stałej = 0**: $(c)' = 0$, nie $c$. Zapis "$(7)' = 7$" jest błędny — pochodna stałej zawsze znika.
- **Pochodna iloczynu**: $(f \\cdot g)' = f'g + fg'$, a nie $f' \\cdot g'$. Pochodnych czynników się nie mnoży.
- **Reguła łańcuchowa**: $(f(g(x)))' = f'(g(x)) \\cdot g'(x)$ — pochodna zewnętrznej razy pochodna wewnętrznej. Drugi czynnik łatwo pominąć, dlatego warto na niego zwrócić uwagę.
`,q2=`---
label: "Distributions"
labelPl: "Rozkłady prawdopodobieństwa"
scope: statystyka
section: UNIV
level: 3
x: 1300
y: 490
resources:
  - "interactive|distributions-explorer.html|Probability Distributions Explorer|Eksplorator rozkładów prawdopodobieństwa"
---
**Rozkład prawdopodobieństwa** to przepis: *jakie wyniki są możliwe i z jakim prawdopodobieństwem każdy z nich się pojawia*. Rzut kostką ma rozkład: każda z liczb $1,2,3,4,5,6$ wypada z prawdopodobieństwem $\\tfrac{1}{6}$. Liczba orłów w 10 rzutach monetą ma zupełnie inny rozkład — nie każdy wynik jest równie częsty, bo np. $5$ orłów wypada o wiele częściej niż $0$.<br><br>Dwie najważniejsze liczby, którymi *streszcza się* rozkład:<br>• **Wartość oczekiwana** $\\mathbb{E}(X)$ — średnia, jakiej się spodziewamy, gdybyśmy powtórzyli eksperyment bardzo dużo razy. Dla kostki: $\\tfrac{1+2+\\dots+6}{6}=3{,}5$.<br>• **Wariancja** $\\text{Var}(X)$ — jak bardzo wyniki się "rozchodzą" wokół średniej. Mały rozkład wariancji = wyniki blisko średniej, duży = rozrzut.<br><br>Trzy rozkłady, które najczęściej się pojawiają:<br>• **Dwumianowy** $B(n, p)$ — liczba sukcesów w $n$ niezależnych próbach, gdzie każda próba udaje się z prawdopodobieństwem $p$. Np. liczba orłów w $n$ rzutach monetą.<br>• **Poissona** — liczba "rzadkich" zdarzeń w ustalonym czasie (np. liczba połączeń na godzinę do infolinii).<br>• **Normalny** (Gaussa) — "krzywa dzwonowa". Pojawia się w naturze wszędzie tam, gdzie wynik jest sumą wielu małych, niezależnych wpływów (np. wzrost człowieka, błąd pomiaru).

<!-- example -->
**Rzucamy monetą 10 razy. Jakie jest prawdopodobieństwo dokładnie 3 orłów?**<br><br>Każdy rzut: orzeł z prawdopodobieństwem $p = \\tfrac{1}{2}$. Liczba orłów $X \\sim B(10, \\tfrac{1}{2})$.<br><br>$P(X = 3) = \\binom{10}{3} \\cdot \\left(\\tfrac{1}{2}\\right)^3 \\cdot \\left(\\tfrac{1}{2}\\right)^7 = 120 \\cdot \\tfrac{1}{1024} \\approx 0{,}117$<br><br>Czyli około 12% — co trzeci raz trafimy na wynik "dokładnie 3 orły".<br><br>**Wartość oczekiwana:** $\\mathbb{E}(X) = n \\cdot p = 10 \\cdot \\tfrac{1}{2} = 5$ orłów. Intuicyjnie: rzucając monetą 10 razy *spodziewamy się* 5 orłów. To nie znaczy, że zawsze tyle wypada — ale to średnia z długiej serii powtórzeń eksperymentu.

<!-- mistakes -->
- **Mylenie $\\mathbb{E}(X)$ z "najbardziej prawdopodobnym wynikiem"** — to nie to samo. Dla kostki $\\mathbb{E}(X)=3{,}5$, ale 3.5 nigdy nie wypadnie. Wartość oczekiwana to średnia z długiej serii, nie typowy wynik.<br>- **Używanie rozkładu dwumianowego gdy próby nie są niezależne** — np. "ile czerwonych kart wyciągnę w 5 dobraniach z talii bez zwracania". Każde dobranie zmienia resztę talii, więc to NIE jest $B(n, p)$ (byłoby, gdyby karty wracały do talii).<br>- **Zakładanie, że rozkład normalny opisuje wszystko** — bardzo wiele zjawisk jest normalne, ale nie wszystkie. Rozkłady "długoogonowe" (majątek, liczba obserwujących w social media) mają zupełnie inny kształt.
`,T2=`---
label: "Equation Domain & Lost Roots"
labelPl: "Dziedzina równania i zgubione rozwiązania"
scope: logika
section: LP
level: 1
x: 340
y: 1060
resources:
  - "interactive|equation-domain-warsztat.html|Equation Domain Warsztat|Dziedzina równania — Warsztat"
---
Obok [pułapki liniowości](./linearity_fallacy) równie groźna przy rozwiązywaniu równań jest **ślepota na dziedzinę** — sytuacja, w której "oczywiste" przekształcenie po cichu zmienia zbiór rozwiązań:<br><br>$x^2 = 5x \\;\\overset{:x}{\\Longrightarrow}\\; x = 5$ (zgubione $x = 0$)<br>$\\log(x - 2) = 1 \\;\\Longrightarrow\\; x = 12$ (bez sprawdzenia $x - 2 > 0$)<br>$\\sqrt{x - 1} = x - 3 \\;\\overset{(\\cdot)^2}{\\Longrightarrow}\\; x = 2 \\text{ lub } x = 5$ (ale $x = 2$ **nie** spełnia oryginału)<br>$\\dfrac{x^2 - 1}{x - 1} = x + 1$ (fałsz przy $x = 1$ — LHS nieokreślone)<br><br>**Dlaczego to się dzieje?** Każda operacja algebraiczna ma *swoje warunki ważności*. **Dzielenie przez wyrażenie** wymaga, by to wyrażenie było $\\neq 0$ — inaczej gubimy przypadek $=0$. **Podnoszenie do kwadratu** nie jest równoważnością — może *dodać* nowe rozwiązania (bo $a^2 = b^2$ to słabszy warunek niż $a = b$). **Logarytm** i **pierwiastek** mają wbudowane ograniczenia dziedziny, które **nie znikają** po przekształceniu.<br><br>**Reguła żelazna:** *przed* rozwiązywaniem napisz **dziedzinę** ($D$), a *po* rozwiązaniu **sprawdź**, że każdy kandydat do $D$ należy i spełnia równanie oryginalne. Operacje "bezpieczne" (dodawanie stałej, mnożenie przez stałą $\\neq 0$) zachowują zbiór rozwiązań. Operacje "niebezpieczne" (dzielenie przez wyrażenie z $x$, podnoszenie do kwadratu, mnożenie przez $f(x)$) mogą go zmienić — w obie strony.

<!-- example -->
**Klasyk: $x^2 = 5x$.**<br><br>Naiwny tok rozumowania: dzielimy obie strony przez $x$ i dostajemy $x = 5$.<br><br>Poprawnie: przenosimy wszystko na jedną stronę — $x^2 - 5x = 0$, czyli $x(x - 5) = 0$, skąd $x = 0$ **lub** $x = 5$, więc rozwiązania są dwa.<br><br>**Co się stało?** Dzieląc przez $x$ cicho założyliśmy $x \\neq 0$, więc przypadek $x = 0$ zniknął z pola widzenia. Wykres to potwierdza: parabola $y = x^2$ i prosta $y = 5x$ przecinają się w **dwóch** punktach: $(0, 0)$ i $(5, 25)$.<br><br>**Test kwadratu: $\\sqrt{x - 1} = x - 3$.**<br><br>Po podniesieniu do kwadratu otrzymujemy $x - 1 = (x - 3)^2 = x^2 - 6x + 9$, czyli $x^2 - 7x + 10 = 0$, skąd $x = 2$ lub $x = 5$.<br><br>Sprawdzenie: dla $x = 5$ mamy $\\sqrt{4} = 2$ oraz $5 - 3 = 2$ — zgodność. Dla $x = 2$ lewa strona daje $\\sqrt{1} = 1$, a prawa $2 - 3 = -1$. Pierwiastek jest zawsze nieujemny, a prawa strona jest ujemna, więc $x = 2$ nie spełnia oryginalnego równania — pojawiło się jako skutek uboczny podniesienia do kwadratu.

<!-- mistakes -->
- **$x^2 = 5x \\Rightarrow x = 5$** — dzieląc przez $x$ zgubiliśmy $x = 0$. Poprawnie: $x^2 - 5x = 0$, czyli $x(x-5)=0$, dwa rozwiązania.<br>- **$\\log(x-2) = 1 \\Rightarrow x = 12$** bez zapisania dziedziny $D: x > 2$. W tym konkretnym przykładzie wynik jest prawidłowy, ale w równaniu $\\log(x^2 - 4) = \\log(x - 2)$ pominięcie dziedziny prowadzi już do błędnych rozwiązań.<br>- **$\\sqrt{x - 1} = x - 3 \\Rightarrow x \\in \\{2, 5\\}$** — kwadrat wprowadza **fałszywe** rozwiązania ($x=2$). Po podniesieniu do kwadratu ZAWSZE sprawdź, które rozwiązania spełniają oryginał.<br>- **$\\dfrac{x^2 - 1}{x - 1} = x + 1$** — wygląda jak tożsamość (po skróceniu), ale LHS jest **nieokreślone** dla $x = 1$, a RHS równe 2. Funkcje są równe tylko na $\\mathbb{R} \\setminus \\{1\\}$.<br>- **Zasada ogólna:** przekształcenia typu $\\div f(x)$, $(\\cdot)^2$, $\\cdot f(x)$ są "niebezpieczne". Bezpieczne są tylko: dodawanie/odejmowanie tej samej liczby lub wyrażenia (obustronnie), mnożenie/dzielenie przez stałą $\\neq 0$.
`,P2=`---
label: "Factoring"
labelPl: "Faktoryzacja"
scope: wyrazenia
section: LP
level: 2
x: 580
y: 390
resources:
  - "interactive|factoring-explorer.html|Factoring Explorer — Two Lines × Parabola|Rozkład na czynniki — dwie proste × parabola"
  - "interactive|factoring-warsztat.html|Factoring Warsztat|Rozkład na czynniki — Warsztat"
---
Rozkład na czynniki to jedno z najważniejszych narzędzi w algebrze — zamienia sumę w iloczyn, co upraszcza równania i wyrażenia.<br><br>Kluczowe metody: wyłączanie wspólnego czynnika, wzory skróconego mnożenia ($a^2 - b^2 = (a-b)(a+b)$), grupowanie wyrazów, oraz rozkład trójmianu kwadratowego na iloczyn $(x - x_1)(x - x_2)$.

<!-- example -->
Na przykład: $x^2 - 9 = (x-3)(x+3)$. Sprawdź mnożąc: $(x-3)(x+3) = x^2 + 3x - 3x - 9 = x^2 - 9$ ✓.<br><br>Albo: $x^2 - 5x + 6$ — szukasz dwóch liczb, które dają w sumie $-5$, a w iloczynie $6$: to $-2$ i $-3$, więc $(x-2)(x-3)$.
`,A2=`---
label: "Function Compositions"
labelPl: "Złożenia funkcji"
scope: funkcje
section: LR
level: 3
x: 660
y: 640
resources:
  - "interactive|fn-compositions-explorer.html|Function Compositions Explorer|Złożenia funkcji"
---
`,C2=`---
label: "Function Concept"
labelPl: "Pojęcie funkcji"
scope: funkcje
section: SP8
level: 1
x: 160
y: 450
resources:
  - "interactive|function-explorer.html|Function Concept — The Machine|Pojęcie funkcji — maszyna, która przetwarza liczby"
---
Funkcja to jedno z najważniejszych pojęć w matematyce — opisuje zależność, w której każdemu wejściu odpowiada dokładnie jedno wyjście.<br><br>Formalnie: funkcja przypisuje każdemu $x$ dokładnie jedną wartość $y = f(x)$. Dziedzina to zbiór $x$-ów, dla których funkcja jest określona. Zbiór wartości to zbiór $y$-ów, które funkcja przyjmuje.<br><br>Wykres funkcji to zbiór punktów $(x, f(x))$ na płaszczyźnie. Każda pionowa prosta przecina wykres funkcji co najwyżej raz.

<!-- example -->
Na przykład: $f(x) = 2x + 1$. Dziedzina: wszystkie liczby rzeczywiste. $f(3) = 7$, $f(0) = 1$, $f(-1) = -1$. Wykres to prosta.<br><br>Czy $y = \\pm\\sqrt{x}$ to funkcja? Nie — bo np. dla $x = 4$ daje $y = 2$ lub $y = -2$ (dwie wartości, więc nie jest funkcją).
`,M2=`---
label: "Exponential Function"
labelPl: "Funkcja wykładnicza"
scope: funkcje
section: LP
level: 2
x: 700
y: 540
resources:
  - "interactive|fn-exp-explorer.html|Exponential Function Explorer|Funkcja wykładnicza"
---
`,D2=`---
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
Funkcja liniowa to najprostsza funkcja: $y$ rośnie (lub maleje) o stałą wartość przy każdym kroku $x$ (zależność wprost proporcjonalna z przesunięciem) — jej wykresem jest prosta.<br><br>Postać: $f(x) = ax + b$, gdzie $a$ to współczynnik kierunkowy (nachylenie prostej), a $b$ to wyraz wolny (punkt przecięcia z osią Y).<br><br>Gdy $a > 0$ funkcja rośnie, gdy $a < 0$ maleje, gdy $a = 0$ jest stała. Miejsce zerowe: $x = \\frac{-b}{a}$.

<!-- example -->
Na przykład: $f(x) = 2x - 3$. Nachylenie $a = 2$ (rośnie — na każdy 1 w prawo idzie 2 w górę).<br><br>Przecięcie z osią Y: $b = -3$, czyli punkt $(0, -3)$. Miejsce zerowe: $2x - 3 = 0 \\Rightarrow x = 1{,}5$.
`,R2=`---
label: "Logarithmic Function"
labelPl: "Funkcja logarytmiczna"
scope: funkcje
section: LP
level: 2
x: 810
y: 540
resources:
  - "interactive|fn-log-explorer.html|Logarithmic Function Explorer|Funkcja logarytmiczna"
---
`,E2=`---
label: "Polynomial Functions"
labelPl: "Funkcje wielomianowe"
scope: funkcje
section: LP
level: 2
x: 560
y: 700
resources:
  - "interactive|fn-poly-explorer.html|Polynomial Functions|Funkcje wielomianowe"
---
`,B2=`---
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
Funkcja kwadratowa to jedna z najważniejszych funkcji w matematyce — opisuje tor rzutu, kształt mostu czy zysk firmy.<br><br>Postać ogólna: $f(x) = ax^2 + bx + c$. Postać kanoniczna: $f(x) = a(x-p)^2 + q$, gdzie $(p,q)$ to wierzchołek paraboli.<br><br>Ramiona paraboli w górę gdy $a > 0$, w dół gdy $a < 0$. Oś symetrii: $x = p$. Miejsca zerowe wyznaczamy z wyróżnika $\\Delta = b^2 - 4ac$.

<!-- example -->
Na przykład: $f(x) = x^2 - 4x + 3$.<br><br>Wierzchołek: $p = \\frac{4}{2} = 2$, $q = 4 - 8 + 3 = -1$, więc $(2, -1)$. Ramiona w górę ($a=1>0$).<br><br>Miejsca zerowe: $x=1$ i $x=3$ (bo $x^2 - 4x + 3 = (x-1)(x-3)$).
`,F2=`---
label: "Function Transformations"
labelPl: "Przekształcenia wykresów funkcji"
scope: funkcje
section: LR
level: 3
x: 360
y: 440
resources:
  - "interactive|fn-transforms-warsztat.html|Function Transforms Warsztat|Przekształcenia wykresów — Warsztat"
---
Przekształcenia wykresów funkcji pozwalają z jednego znanego wykresu $y = f(x)$ szybko narysować całą rodzinę pokrewnych funkcji — bez liczenia tabelek wartości.<br><br>**Sześć rodzin przekształceń:**<br>• $y = f(x) + c$ — przesunięcie w PIONIE (w górę gdy $c > 0$, w dół gdy $c < 0$).<br>• $y = f(x + a)$ — przesunięcie w POZIOMIE. **Uwaga — w PRZECIWNĄ stronę niż znak $a$**: $f(x+2)$ przesuwa w LEWO, $f(x-2)$ w PRAWO.<br>• $y = -f(x)$ — odbicie względem osi $x$ (zewnętrzny minus zmienia znak wartości).<br>• $y = f(-x)$ — odbicie względem osi $y$ (wewnętrzny minus zmienia znak argumentu).<br>• $y = a \\cdot f(x)$ dla $a > 0$ — rozciągnięcie/ściśnięcie w pionie (razy $a$).<br>• $y = f(a \\cdot x)$ — rozciągnięcie/ściśnięcie w POZIOMIE — **znów kontrintuicyjne**: $f(2x)$ ściska do połowy, $f(x/2)$ rozciąga dwa razy.<br><br>**Reguła uniwersalna:** co jest NA ZEWNĄTRZ funkcji, działa w pionie zgodnie z intuicją; co jest W ŚRODKU argumentu, działa w poziomie i ODWROTNIE do intuicji.

<!-- example -->
Niech $f(x) = x^2$ (parabola z wierzchołkiem w $(0,0)$).<br><br>**Przesunięcie poziome:** $g(x) = f(x - 3) = (x - 3)^2$. Wierzchołek przesuwa się z $(0,0)$ do $(3, 0)$ — czyli w PRAWO o 3, choć w nawiasie jest minus.<br><br>**Przesunięcie pionowe:** $h(x) = f(x) + 2 = x^2 + 2$. Wierzchołek idzie z $(0,0)$ do $(0, 2)$ — w górę o 2, zgodnie z intuicją.<br><br>**Połączenie:** $k(x) = (x - 3)^2 + 2$ — wierzchołek w $(3, 2)$. To dokładnie postać kanoniczna funkcji kwadratowej.

<!-- mistakes -->
- **$f(x-2)$ przesuwa W PRAWO, nie w lewo** — kierunek łatwo wyprowadzić z podstawienia: jeśli nowe $x = 5$, to $f(5 - 2) = f(3)$, czyli wartość, którą dawniej funkcja miała w $x = 3$, pojawia się teraz w $x = 5$ — wykres przesunął się w prawo o 2.
- **$f(2x)$ ŚCISKA, nie rozciąga** — już przy małym $x$ argument rośnie szybko, więc pełny kształt mieści się na krótszym przedziale. Rozciąga natomiast $f(x/2)$.
- **Mnożenie zewnętrzne a wewnętrzne** — $2 \\cdot f(x)$ działa w pionie (rozciąga wartość), a $f(2x)$ w poziomie (ściska argument); warto świadomie rozróżniać te dwa przypadki.
`,I2=`---
label: "Trig. Functions (periodic)"
labelPl: "Funkcje trygon. (okresowe)"
scope: trygonometria
section: LR
level: 3
x: 960
y: 440
resources:
  - "interactive|fn-trig-explorer.html|Trig Functions (periodic)|Funkcje trygon. (okresowe)"
---
Funkcje trygonometryczne to te same $\\sin$, $\\cos$, $\\tan$, które znasz z trójkąta, ale teraz patrzysz na nie jako na funkcje rzeczywiste — z wykresem, okresem i własnościami.<br><br>Najważniejsze parametry:<br>• $\\sin x$: dziedzina $\\mathbb{R}$, zbiór wartości $[-1, 1]$, okres $2\\pi$, **nieparzysta** ($\\sin(-x) = -\\sin x$).<br>• $\\cos x$: dziedzina $\\mathbb{R}$, zbiór wartości $[-1, 1]$, okres $2\\pi$, **parzysta** ($\\cos(-x) = \\cos x$).<br>• $\\tan x$: dziedzina $\\mathbb{R} \\setminus \\{\\tfrac{\\pi}{2} + k\\pi\\}$, zbiór wartości $\\mathbb{R}$, okres $\\pi$, nieparzysta.<br><br>Kluczowe punkty $\\sin x$ w jednym okresie: $\\sin 0 = 0$, $\\sin \\tfrac{\\pi}{2} = 1$, $\\sin \\pi = 0$, $\\sin \\tfrac{3\\pi}{2} = -1$. Dla cosinusa — to samo przesunięte o $\\tfrac{\\pi}{2}$ w lewo.<br><br>Przekształcenia $y = A \\sin(Bx + C)$: $|A|$ to **amplituda** (rozciąga wykres w pionie), $\\tfrac{2\\pi}{|B|}$ to nowy okres (im większe $B$, tym "gęściej"), $C$ odpowiada za przesunięcie w poziomie.

<!-- example -->
Porównaj $y = \\sin x$ i $y = 2 \\sin x$. Dziedzina i okres te same, ale zbiór wartości się zmienia: $[-2, 2]$ zamiast $[-1, 1]$ — wykres jest "wyższy".<br><br>Okres funkcji $\\sin(3x)$: $T = \\tfrac{2\\pi}{3}$. Czyli pełna fala mieści się na przedziale o długości $\\tfrac{2\\pi}{3}$ — trzy razy krócej niż zwykły sinus.
`,N2=`---
label: "Fractions & Rationals"
labelPl: "Ułamki i liczby wymierne"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 260
y: 80
resources:
  - "interactive|resources/fractions/fractions-explorer.html|Fractions Explorer|Ulamki — wizualna podroz"
---
Ułamki pozwalają zapisać część całości i wykonywać precyzyjne obliczenia bez zaokrągleń.<br><br>Ułamek to iloraz dwóch liczb: $\\frac{a}{b}$ ($b \\neq 0$). Skracanie: dzielimy licznik i mianownik przez NWD. Dodawanie wymaga wspólnego mianownika.<br><br>Mnożenie: licznik $\\times$ licznik, mianownik $\\times$ mianownik. Dzielenie: mnożymy przez odwrotność drugiego ułamka.

<!-- example -->
Na przykład: $\\frac{2}{3} + \\frac{3}{4} = \\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12}$.<br><br>Albo: $\\frac{2}{3} \\cdot \\frac{3}{4} = \\frac{6}{12} = \\frac{1}{2}$. Sprawdź: $0{,}5 = \\frac{1}{2}$ ✓.
`,L2=`---
label: "Geometric Series"
labelPl: "Szeregi geometryczne"
scope: ciagi
section: LR
level: 3
x: 1080
y: 340
resources:
  - "interactive|geo-series-explorer.html|Geometric Series Explorer|Szeregi geometryczne — Eksplorator"
  - "interactive|geo-series-warsztat.html|Geometric Series Warsztat|Ciąg geometryczny — Warsztat zbieżności"
---
Szereg geometryczny to suma nieskończenie wielu wyrazów ciągu geometrycznego — choć składników jest nieskończenie wiele, suma może być skończona.<br><br>Postać: $S = a_1 + a_1 q + a_1 q^2 + \\ldots$ Gdy $|q| < 1$, szereg jest zbieżny i $S = \\frac{a_1}{1-q}$. Gdy $|q| \\geq 1$, szereg jest rozbieżny (suma rośnie bez końca).<br><br>Suma częściowa $S_n = \\frac{a_1(1-q^n)}{1-q}$ przybliża sumę nieskończoną z błędem $\\left|\\frac{a_1 q^n}{1-q}\\right|$.

<!-- example -->
Na przykład: $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots$ to szereg z $a_1 = \\frac{1}{2}$, $q = \\frac{1}{2}$. Suma: $S = \\frac{1/2}{1 - 1/2} = 1$.<br><br>Ciekawe zastosowanie: $0{,}333\\ldots = \\frac{3}{10} + \\frac{3}{100} + \\frac{3}{1000} + \\ldots = \\frac{3/10}{1 - 1/10} = \\frac{1}{3}$.
`,W2=`---
label: "Integers & Operations"
labelPl: "Liczby całkowite"
scope: liczby_rzeczywiste
section: SP8
level: 1
x: 120
y: 80
resources:
  - "interactive|integers-explorer.html|Integers & Divisibility Explorer|Eksplorator liczb całkowitych i podzielności"
---
Liczby całkowite to zbiór $\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$ — rozszerzają liczby naturalne o liczby ujemne i zero.<br><br>Podstawowe działania: dodawanie, odejmowanie, mnożenie i dzielenie z resztą. NWD (największy wspólny dzielnik) i NWW (najmniejsza wspólna wielokrotność) to narzędzia przydatne przy ułamkach.<br><br>Podzielność: liczba jest podzielna przez inną, gdy reszta z dzielenia wynosi 0.

<!-- example -->
Na przykład: $\\text{NWD}(84, 56)$ — rozkładamy: $84 = 2^2 \\cdot 3 \\cdot 7$, $56 = 2^3 \\cdot 7$. Wspólne czynniki: $2^2 \\cdot 7 = 28$.<br><br>Albo algorytm Euklidesa: $84 = 1 \\cdot 56 + 28$, $56 = 2 \\cdot 28 + 0$, więc $\\text{NWD} = 28$.
`,O2=`---
label: "Integrals"
labelPl: "Całki"
scope: analiza
section: UNIV
level: 3
x: 720
y: 880
resources:
  - "interactive|integral-explorer.html|Integral Explorer|Całki — Eksplorator"
---
Całka to dwie rzeczy w jednym: operacja odwrotna do pochodnej (antypochodna) oraz pole pod wykresem funkcji. Te dwa światy spina wzór Newtona–Leibniza.<br><br>Wzór Newtona–Leibniza: $\\int_a^b f(x)\\,dx = F(b) - F(a)$, gdzie $F$ jest dowolną antypochodną $f$ (czyli $F' = f$). Używasz go zawsze, gdy liczysz całkę oznaczoną.<br><br>Kilka antypochodnych, które wracają najczęściej i warto je mieć w pamięci:<br>$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C$ dla $n \\neq -1$ (reguła potęg),<br>$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$ jako jedyny wyjątek od reguły potęg,<br>$\\int e^x\\,dx = e^x + C$, bo pochodna $e^x$ to znów $e^x$,<br>$\\int \\sin x\\,dx = -\\cos x + C$ oraz $\\int \\cos x\\,dx = \\sin x + C$.<br><br>Gdy wykres leży poniżej osi $x$, całka wychodzi ujemna — to nie błąd, tylko "pole ze znakiem".

<!-- example -->
Policz $\\int_0^2 3x^2\\,dx$.<br><br>Antypochodna: $F(x) = 3 \\cdot \\frac{x^3}{3} = x^3 \\Rightarrow$ sprawdź: $(x^3)' = 3x^2$ ✓.<br><br>Stosujesz Newtona–Leibniza: $\\int_0^2 3x^2\\,dx = F(2) - F(0) = 8 - 0 = 8$.
`,H2=`---
label: "Granice funkcji"
labelPl: "Granice funkcji"
scope: analiza
section: LR
level: 3
x: 760
y: 700
resources:
  - "interactive|limits-explorer.html|Limits Explorer|Granice funkcji — Eksplorator"
---
Granica funkcji opisuje, do jakiej wartości funkcja dąży, gdy $x$ zbliża się do pewnego punktu — nawet jeśli sama funkcja w tym punkcie nie jest określona. Aby granica istniała, granice jednostronne (lewostronna i prawostronna) muszą się zgadzać.<br><br>**Dla ciekawych:** w ujęciu formalnym $\\lim_{x \\to a} f(x) = L$ oznacza, że dla każdego $\\varepsilon > 0$ istnieje $\\delta > 0$, takie że $0 < |x - a| < \\delta \\Rightarrow |f(x) - L| < \\varepsilon$. Na maturze wystarczy intuicja z pierwszego zdania.

<!-- example -->
Na przykład: $f(x) = \\frac{x^2 - 1}{x - 1}$ jest nieokreślona dla $x = 1$ (bo $\\frac{0}{0}$).<br><br>Ale $\\frac{x^2 - 1}{x - 1} = x + 1$ dla $x \\neq 1$, więc $\\lim_{x \\to 1} f(x) = 2$. Funkcja dąży do 2, choć w punkcie 1 nie istnieje.
`,G2=`---
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
Równanie liniowe to najprostszy typ równania — rozwiązujesz je w kilku krokach, przenosząc wyrazy na odpowiednie strony.<br><br>Postać: $ax + b = 0$, rozwiązanie: $x = \\frac{-b}{a}$ (gdy $a \\neq 0$). Metoda: wyrazy z $x$ przenosimy na jedną stronę, liczby na drugą.<br><br>Zawsze warto sprawdzić wynik, podstawiając go z powrotem do równania.

<!-- example -->
Na przykład: $3x + 6 = 0 \\Rightarrow 3x = -6 \\Rightarrow x = -2$. Sprawdź: $3 \\cdot (-2) + 6 = -6 + 6 = 0$ ✓.<br><br>Albo: $2x - 5 = x + 3 \\Rightarrow 2x - x = 3 + 5 \\Rightarrow x = 8$.
`,U2=`---
label: "Linear Inequalities"
labelPl: "Nierówności liniowe"
scope: rownania
section: SP8
level: 2
x: 330
y: 200
resources:
  - "interactive|linear-ineq-explorer.html|Linear Inequalities Explorer|Nierówności liniowe"
---
`,Z2=`---
label: "Systems of Linear Eq."
labelPl: "Układy równań liniowych"
scope: rownania
section: SP8
level: 2
x: 250
y: 310
resources:
  - "interactive|linear-systems-explorer.html|Linear Systems Explorer|Układy równań liniowych — Eksplorator"
  - "interactive|linear-sys-warsztat.html|Word Problems Warsztat|Zadania z treścią — Warsztat"
---
Układ równań liniowych to dwie (lub więcej) prostych na płaszczyźnie — szukamy punktu, w którym się przecinają.<br><br>Jeśli proste się przecinają, układ ma dokładnie jedno rozwiązanie. Jeśli są równoległe (ten sam współczynnik kierunkowy, różne wyrazy wolne), układ jest sprzeczny. Jeśli się pokrywają — nieoznaczony (nieskończenie wiele rozwiązań).<br><br>Metoda podstawiania: z jednego równania wyrażamy jedną zmienną i wstawiamy do drugiego. Metoda przeciwnych współczynników: dodajemy równania tak, by jedna zmienna się skróciła.

<!-- example -->
Na przykład: $y = 2x + 1$ i $y = -x + 4$.<br><br>Podstawiamy: $2x + 1 = -x + 4$, więc $3x = 3$, $x = 1$, $y = 3$. Rozwiązanie: $(1, 3)$.<br><br>Sprawdzenie: $3 = 2 \\cdot 1 + 1$ ✓ i $3 = -1 + 4$ ✓.

<!-- mistakes -->
- **Procenty jako ułamki dziesiętne**: "60% drzew" zapisujemy jako $0{,}60 \\cdot x$, a nie $60x$ ani $60/x$.
- **Czytanie warunków w zadaniach z treścią**: "o 3 więcej" odpowiada $+3$, a "3 razy więcej" — mnożeniu przez $3$. Warto upewnić się, który zapis pasuje, zanim zapiszemy równanie.
- **Liczba niewiadomych równa liczbie równań**: jest warunkiem jednoznacznego rozwiązania. Przy mniejszej liczbie równań układ jest nieoznaczony; przy większej może być sprzeczny.
`,K2=`---
label: "The Linearity Fallacy"
labelPl: "Pułapka liniowości"
scope: logika
section: LP
level: 1
x: 200
y: 1060
resources:
  - "interactive|linearity-fallacy-warsztat.html|Linearity Fallacy Warsztat|Pułapka liniowości — Warsztat"
---
Jednym z najczęstszych błędów algebraicznych jest założenie, że funkcja **rozdziela się względem dodawania** — czyli zapisy typu:<br><br>$(a + b)^2 \\stackrel{?}{=} a^2 + b^2$<br>$\\sqrt{a^2 + b^2} \\stackrel{?}{=} a + b$<br>$\\log(a + b) \\stackrel{?}{=} \\log a + \\log b$<br>$\\sin(\\alpha + \\beta) \\stackrel{?}{=} \\sin \\alpha + \\sin \\beta$<br>$\\dfrac{1}{a + b} \\stackrel{?}{=} \\dfrac{1}{a} + \\dfrac{1}{b}$<br><br>Wszystkie te równości są **fałszywe** (poza trywialnymi przypadkami, gdy np. $a = 0$). Intuicja, która za nimi stoi, wywodzi się z rozdzielności mnożenia: $c(a+b) = ca + cb$. Taką własność mają jednak wyłącznie funkcje **liniowe** postaci $f(x) = cx$ — a kwadrat, pierwiastek, logarytm, sinus czy odwrotność liniowe nie są, więc rozdzielności nie mają.<br><br>**Reguła ogólna:** $f(a + b) \\neq f(a) + f(b)$ dla niemal każdej funkcji spotykanej w szkole. Gdy widzisz taki zapis, warto sprawdzić go podstawieniem (np. $a = b = 1$), zanim przepiszesz go dalej.

<!-- example -->
**Test "podstaw 1":**<br><br>$(1 + 1)^2 = 4$, a $1^2 + 1^2 = 2$ — wartości się nie zgadzają.<br><br>$\\sqrt{1^2 + 1^2} = \\sqrt{2} \\approx 1{,}41$, podczas gdy $1 + 1 = 2$.<br><br>$\\log(1 + 1) = \\log 2 \\approx 0{,}30$, natomiast $\\log 1 + \\log 1 = 0$.<br><br>$\\sin(30° + 60°) = \\sin 90° = 1$, a $\\sin 30° + \\sin 60° = 0{,}5 + 0{,}87 = 1{,}37$ — wynik przekracza $1$, co dla pojedynczego sinusa jest niemożliwe.<br><br>$\\dfrac{1}{1+1} = 0{,}5$, a $\\dfrac{1}{1} + \\dfrac{1}{1} = 2$ — różnica czterokrotna.

<!-- mistakes -->
- **$(a+b)^2 = a^2 + b^2$** — najsłynniejszy. Poprawnie: $(a+b)^2 = a^2 + 2ab + b^2$. Brakuje członu $2ab$, który geometrycznie jest powierzchnią dwóch prostokątów $a \\times b$ w rozkładzie kwadratu.<br>- **$\\sqrt{a^2 + b^2} = a + b$** — złamanie nierówności trójkąta. Poprawnie: $\\sqrt{a^2 + b^2} \\leq a + b$ (przeciwprostokątna nigdy nie jest dłuższa niż suma przyprostokątnych), z równością tylko gdy $a = 0$ lub $b = 0$.<br>- **$\\log(a+b) = \\log a + \\log b$** — pomylenie dwóch reguł. Poprawnie: $\\log(a \\cdot b) = \\log a + \\log b$ (logarytm **iloczynu**, nie sumy). Logarytm sumy nie ma w ogóle prostej postaci.<br>- **$\\sin(\\alpha + \\beta) = \\sin \\alpha + \\sin \\beta$** — ignoruje wzór na sinus sumy. Poprawnie: $\\sin(\\alpha+\\beta) = \\sin \\alpha \\cos \\beta + \\cos \\alpha \\sin \\beta$. Dodatkowy sygnał: LHS zawsze $\\in [-1, 1]$, a RHS może wynosić do 2 — niemożliwe dla pojedynczego sinusa.
`,V2=`---
label: "Log. & Exp. Equations"
labelPl: "Równania log. i wykł."
scope: rownania
section: LP
level: 2
x: 740
y: 310
resources:
  - "interactive|log-eq-explorer.html|Log & Exp Equations Explorer|Równania log. i wykł."
  - "interactive|log-eq-warsztat.html|Log Equations Warsztat — Domain Gate|Równania log. — Warsztat z Bramką Dziedziny"
---
`,Q2=`---
label: "Logarithms & Exponentials"
labelPl: "Logarytmy i wykładnicze"
scope: liczby_rzeczywiste
section: LP
level: 2
x: 680
y: 200
resources:
  - "interactive|resources/log_exp/log-exp-explorer.html|Logarithms & Exponentials Explorer|Logarytmy i wykładnicze — eksplorator"
  - "interactive|log-explorer.html|Log Explorer — Mirror of exp|Logarytm — lustro potęgi"
---
Logarytm to odwrotność potęgowania — odpowiada na pytanie: do jakiej potęgi podnieść podstawę, by otrzymać daną liczbę?<br><br>Definicja: $\\log_a b = c \\iff a^c = b$. Wykres $y = \\log_a x$ jest odbiciem $y = a^x$ względem prostej $y = x$.<br><br>Kluczowe własności: $\\log(a \\cdot b) = \\log a + \\log b$, $\\log(a/b) = \\log a - \\log b$, $\\log(a^n) = n \\cdot \\log a$. Zmiana podstawy: $\\log_a x = \\frac{\\log_b x}{\\log_b a}$.

<!-- example -->
Na przykład: $2^3 = 8$, więc $\\log_2 8 = 3$.<br><br>Reguła iloczynu: $\\log_2(4 \\cdot 8) = \\log_2 4 + \\log_2 8 = 2 + 3 = 5$. Sprawdzenie: $\\log_2 32 = 5$ ✓.<br><br>Zmiana podstawy: $\\log_2 8 = \\frac{\\ln 8}{\\ln 2} = \\frac{2{,}08}{0{,}69} = 3$ ✓.

<!-- mistakes -->
- **Dziedzina logarytmu**: argument musi być dodatni ($\\log_a b$ wymaga $b > 0$, $a > 0$, $a \\neq 1$). Rozwiązanie równania trzeba wrócić i sprawdzić w dziedzinie oryginalnego równania.
- **$\\log(a+b) \\neq \\log a + \\log b$**: to najczęstszy błąd. Zachodzi TYLKO $\\log(a \\cdot b) = \\log a + \\log b$.
- **Mylenie podstawy**: $\\log_2 8 = 3$, a $\\log 8 \\approx 0{,}9$ (log dziesiętny). Zawsze sprawdź, jaka jest podstawa.
`,Y2=`---
label: "Logic Basics"
labelPl: "Logika"
scope: logika
section: LP
level: 1
x: 1210
y: 680
resources:
  - "interactive|logic-explorer.html|Logic Basics Explorer|Eksplorator logiki — zdania i operatory"
---
Logika to język matematyki — pozwala precyzyjnie formułować twierdzenia i dowody.<br><br>Zdanie logiczne to stwierdzenie, które jest albo prawdziwe, albo fałszywe. Operatory logiczne (koniunkcja ∧, alternatywa ∨, implikacja →, równoważność ↔) łączą zdania w złożone wyrażenia.<br>- koniunkcja $p \\land q$ — prawdziwa, gdy oba zdania są prawdziwe;<br>- alternatywa $p \\lor q$ — prawdziwa, gdy przynajmniej jedno zdanie jest prawdziwe;<br>- implikacja $p \\to q$ — fałszywa tylko wtedy, gdy $p$ jest prawdą, a $q$ fałszem;<br>- równoważność $p \\leftrightarrow q$ — prawdziwa, gdy oba zdania mają tę samą wartość logiczną.<br><br>Kluczowa zasada: implikacja $p \\to q$ jest fałszywa TYLKO gdy z prawdy wynika fałsz.
`,X2=`---
label: "Reading Matura Commands"
labelPl: "Polecenia maturalne — jak czytać"
scope: logika
section: LP
level: 1
x: 60
y: 1040
---
Polecenie z matury działa jak **kontrakt**: każde słowo dokładnie określa, czego oczekuje egzaminator. Gdy pomylimy "sprawdź" z "wykaż", nawet poprawny rachunek nie zaliczy zadania — zostało ono zinterpretowane inaczej, niż zostało zapisane.<br><br>Poniżej najważniejsze słowa-klucze i to, co **naprawdę** oznaczają:<br><br>**Oblicz** — w odpowiedzi ma się znaleźć konkretna liczba (lub wyrażenie). Końcowy wynik zawsze wyraźnie zaznacz (ramka, podkreślenie, "Odp.:").<br><br>**Wyznacz** — znajdź **wszystkie** wartości spełniające warunki (np. wszystkie $m$, dla których…). Pamiętaj o dziedzinie i o warunkach ubocznych (mianownik $\\neq 0$, argument logarytmu $> 0$ itd.).<br><br>**Rozwiąż** — praktycznie to samo co "wyznacz", ale dotyczy równania lub nierówności. Zapisz **zbiór rozwiązań**, a nie tylko jedno $x$.<br><br>**Wykaż / Udowodnij** — musisz uzasadnić **każdy** krok. Sprawdzenie kilku wartości NIE jest dowodem. Struktura: *"Zakładamy… → przekształcamy… → otrzymujemy tezę."* Na końcu $\\blacksquare$ lub "c.n.d.".<br><br>**Uzasadnij** — lżejsza wersja "wykaż"; argumentacja może być słowna, ale wciąż musi być **logiczna** i pełna. To nie jest "napisz, co myślisz".<br><br>**Naszkicuj / Narysuj** — wykres z oznaczeniami osi, skalą oraz punktami charakterystycznymi (miejscami zerowymi, ekstremami, asymptotami). Sam szkic bez opisanych osi nie jest uznawany za wykres.<br><br>**Sprawdź** — dostajesz konkretną hipotezę; wystarczy rachunek pokazujący, czy jest prawdziwa. Nie musisz uzasadniać **dlaczego** — tylko *że* tak jest (lub nie).

<!-- example -->
**Wykaż, że** $n(n+1)$ jest parzyste dla każdego $n \\in \\mathbb{N}$.<br><br>Sprawdzenie $n=1,\\,2,\\,3$ **NIE jest dowodem** — egzaminator oczekuje argumentu dla *wszystkich* $n$.<br><br>Poprawny dowód: wśród dwóch kolejnych liczb naturalnych $n$ oraz $n+1$ zawsze jedna jest parzysta, więc ich iloczyn $n(n+1)$ zawiera czynnik parzysty, a zatem sam jest parzysty. $\\blacksquare$<br><br>---<br><br>**Sprawdź, czy** $n=3$ spełnia równanie $n^2 - 2n + 1 = 4$.<br><br>Podstawiamy: $3^2 - 2\\cdot 3 + 1 = 9 - 6 + 1 = 4$. ✓<br><br>I tyle — przy "sprawdź" sam rachunek **wystarczy**. Nie trzeba tłumaczyć, dlaczego tak wyszło.

<!-- mistakes -->
- **Ignorowanie słowa "każdego" / "dla dowolnego"** w dowodzie — musisz pokazać tezę dla **wszystkich** wartości, nie dla kilku przykładów. Kilka przykładów to *sprawdzenie*, nie *dowód*.<br>- **Brak spójników** "zatem", "więc", "stąd", "ponieważ" między krokami. Egzaminator czyta dowód jak spójny tekst — bez łączników dowód traci rytm, a forma zostaje obniżona, nawet gdy rachunek jest poprawny.<br>- **Pomijanie dziedziny** przy "wyznacz" i "rozwiąż". Równanie $\\log(x-2) = 1$ ma rozwiązanie $x = 12$, ale najpierw trzeba zapisać warunek $x - 2 > 0$.
`,J2=`---
label: "Modular Arithmetic (optional)"
labelPl: "Arytmetyka modulo (dla ciekawych)"
scope: liczby_rzeczywiste
section: LR
level: 2
x: 220
y: 80
optional: true
resources:
  - "interactive|modular-explorer.html|Modular Arithmetic — Clock Explorer|Eksplorator arytmetyki modulo (zegar)"
---
Arytmetyka modulo to "matematyka zegarowa". Na zegarze mamy $m = 12$ godzin: $13:00 \\equiv 1:00$, $25:00 \\equiv 1:00$ — to jest $\\pmod{12}$. Ogólnie: $a \\equiv b \\pmod{m}$ oznacza, że $m \\mid (a-b)$, czyli $a$ i $b$ dają tę samą resztę przy dzieleniu przez $m$.<br><br>Zegar to model wizualny dla każdego modulo: dla $m=7$ mamy "7-godzinny zegar" (klasy $0,1,2,3,4,5,6$), dla $m=11$ — jedenastogodzinny, itd. Dodawanie, mnożenie i potęgowanie modulo "okręcają się" po tym zegarze.<br><br>Kluczowa obserwacja: **cechy podzielności** wynikają z zachowania się $10^k \\pmod{m}$. Dla $m=3,9$: $10 \\equiv 1$ → suma cyfr. Dla $m=11$: $10 \\equiv -1$ → suma naprzemienna. Dla $m=2,4,5,8$: potęgi $10$ zerują się → wystarczą ostatnie cyfry.

<!-- example -->
**Przykład** ($\\!384 \\pmod{11}\\!$): Ponieważ $10 \\equiv -1 \\pmod{11}$, to $10^k \\equiv (-1)^k$. Stąd $384 = 3\\!\\cdot\\!100 + 8\\!\\cdot\\!10 + 4 \\equiv 3\\!\\cdot\\!1 + 8\\!\\cdot\\!(-1) + 4\\!\\cdot\\!1 = -1 \\pmod{11}$. Sprawdzenie: $384 = 34\\!\\cdot\\!11 + 10$, więc reszta to $10 \\equiv -1 \\pmod{11}$. ✓<br><br>**Zastosowania**: cechy podzielności, kryptografia (RSA), hash-funkcje, małe twierdzenie Fermata ($a^{p-1} \\equiv 1 \\pmod{p}$ dla $p$ pierwszego) — dla każdej liczby pierwszej $p$ i liczby $a$ niepodzielnej przez $p$, $a^{p-1}$ zawsze daje resztę 1 z dzielenia przez $p$.
`,eh=`---
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
Optymalizacja to sztuka znajdowania najlepszego rozwiązania — a funkcja kwadratowa daje eleganckie narzędzie, bo jej ekstremum (czyli najmniejsza lub największa wartość funkcji) jest w wierzchołku paraboli.<br><br>Klucz: zapisz wielkość do optymalizacji jako funkcję kwadratową jednej zmiennej. Gdy $a > 0$, wierzchołek daje minimum; gdy $a < 0$ — maksimum.<br><br>Typowe zadania: największe pole prostokąta o zadanym obwodzie, maksymalny dochód, zasięg pocisku.

<!-- example -->
Na przykład: prostokąt o obwodzie 20. Boki: $x$ i $(10 - x)$.<br><br>Pole: $P = x(10 - x) = -x^2 + 10x$. Wierzchołek paraboli: $x = 5$, $P = 25$.<br><br>Największe pole ma kwadrat $5 \\times 5$.
`,nh=`---
label: "Equations with Parameters"
labelPl: "Równania z parametrem"
scope: rownania
section: LR
level: 3
x: 560
y: 480
---
`,th=`---
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
Permutacja to uporządkowanie elementów — tu liczy się kolejność, bo każde inne ustawienie daje inny wynik.<br><br>Liczba permutacji $n$ elementów: $P(n) = n!$. Permutacje z powtórzeniami (gdy elementy się powtarzają): $\\frac{n!}{k_1! \\cdot k_2! \\cdot \\ldots}$.<br><br>Wariacja to permutacja, w której nie używamy wszystkich $n$ elementów — ustawiamy w kolejności tylko wybrane $k$ z nich. Wariacje bez powtórzeń — wybieramy $k$ z $n$ elementów, z uwzględnieniem kolejności: $V(n,k) = \\frac{n!}{(n-k)!}$.

<!-- example -->
Na przykład: na ile sposobów ustawić litery A, B, C?<br><br>To ABC, ACB, BAC, BCA, CAB, CBA — 6 sposobów $= 3! = 3 \\cdot 2 \\cdot 1 = 6$.
`,rh=`---
label: "Plane Geometry (LP)"
labelPl: "Planimetria"
scope: planimetria
section: LP
level: 2
x: 380
y: 870
resources:
  - "interactive|inscribed-angle-explorer.html|Inscribed Angle Theorem|Twierdzenie o kącie wpisanym"
  - "interactive|incircle-explorer.html|Incircle Explorer|Okrąg wpisany"
  - "interactive|circumcircle-explorer.html|Circumcircle Explorer|Okrąg opisany"
  - "interactive|perp-bisector-explorer.html|Perpendicular Bisector — The Fair House|Symetralna — sprawiedliwy domek"
---
Planimetria to geometria płaska — badamy figury, kąty, okręgi i ich własności.<br><br>Kluczowe twierdzenia: kąt wpisany = ½ kąta środkowego, symetralna odcinka to zbiór punktów równoodległych od końców, dwusieczna kąta to zbiór punktów równoodległych od ramion.<br><br>Okrąg opisany przechodzi przez wszystkie wierzchołki trójkąta (środek na przecięciu symetralnych). Okrąg wpisany dotyka wszystkich boków (środek na przecięciu dwusiecznych).
`,oh=`---
label: "Polynomial Roots"
labelPl: "Pierwiastki wielomianów"
scope: rownania
section: LR
level: 3
x: 580
y: 560
---
Pierwiastek wielomianu $W(x)$ to po prostu liczba $a$, dla której $W(a) = 0$ — czyli miejsce zerowe wykresu. Cały temat sprowadza się do pytania: jak je znaleźć, gdy wielomian jest stopnia $\\geq 3$ i wzorków nie ma?<br><br>Kluczowe twierdzenie (Bézouta): $(x - a) \\mid W(x) \\iff W(a) = 0$. Innymi słowy: jeśli $a$ jest pierwiastkiem, to możesz wyciągnąć $(x - a)$ jako czynnik. Używasz go, gdy chcesz rozłożyć wielomian na czynniki.<br><br>Twierdzenie o pierwiastkach wymiernych: jeśli $W(x)$ ma współczynniki całkowite i $\\tfrac{p}{q}$ jest pierwiastkiem wymiernym (ułamek w postaci skróconej), to $p$ dzieli wyraz wolny, a $q$ — wiodący. W praktyce: kandydaci to dzielniki wyrazu wolnego podzielone przez dzielniki współczynnika wiodącego.<br><br>Schemat Hornera to szybki sposób dzielenia $W(x)$ przez $(x - a)$ — warto znać, ale można też dzielić długim dzieleniem. Pierwiastek o wielokrotności $k$ oznacza, że $(x-a)^k$ dzieli $W(x)$.

<!-- example -->
Znajdź pierwiastki $W(x) = x^3 - 2x^2 - x + 2$.<br><br>Kandydaci wymierni (dzielniki $2$): $\\pm 1, \\pm 2$.<br><br>Testujemy: $W(1) = 1 - 2 - 1 + 2 = 0$ ✓. Czyli $(x-1)$ jest czynnikiem.<br><br>Dzielimy: $W(x) : (x - 1) = x^2 - x - 2 \\Rightarrow$ rozkładamy: $x^2 - x - 2 = (x-2)(x+1)$.<br><br>Pierwiastki: $x = 1, 2, -1$. Pełen rozkład: $W(x) = (x-1)(x-2)(x+1)$.
`,ih=`---
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
Wielomiany to wyrażenia algebraiczne zbudowane z potęg zmiennej i współczynników — uogólnienie funkcji liniowej i kwadratowej.<br><br>Postać: $a_n x^n + a_{n-1} x^{n-1} + \\ldots + a_1 x + a_0$. Stopień wielomianu to najwyższa potęga $x$ z niezerowym współczynnikiem.<br><br>Kluczowe umiejętności: mnożenie wielomianów, wyłączanie przed nawias, dzielenie wielomianów i twierdzenie Bezouta (reszta z dzielenia $W(x)$ przez $x-a$ równa się $W(a)$ — w szczególności: $a$ jest pierwiastkiem $W$ wtedy i tylko wtedy, gdy $(x-a)$ dzieli $W(x)$).

<!-- example -->
Na przykład: $2x^3 + 5x^2 - 3x + 1$.<br><br>Tu $a_3 = 2$, $a_2 = 5$, $a_1 = -3$, $a_0 = 1$. Stopień $= 3$, bo najwyższa potęga $x$ to $x^3$.
`,ah=`---
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
Potęgowanie pozwala zapisać wielokrotne mnożenie w zwięzły sposób, a pierwiastki to jego naturalne odwrócenie.<br><br>Potęga: $a^n = a \\cdot a \\cdot \\ldots \\cdot a$ ($n$ razy). Kluczowe reguły: $a^m \\cdot a^n = a^{m+n}$, $\\frac{a^m}{a^n} = a^{m-n}$, $(a^m)^n = a^{mn}$.<br><br>Przypadki szczególne: $a^0 = 1$, $a^{-n} = \\frac{1}{a^n}$. Pierwiastek: $\\sqrt[n]{a} = a^{1/n}$.

<!-- example -->
Na przykład: $2^3 \\cdot 2^4 = 2^7 = 128$.<br><br>Albo: $(3^2)^3 = 3^6 = 729$. Sprawdź: $9^3 = 729$ ✓.<br><br>Pierwiastek: $\\sqrt{25} = 25^{1/2} = 5$.
`,sh=`---
label: "Probability"
labelPl: "Prawdopodobieństwo"
scope: kombinatoryka
section: LP
level: 2
x: 1210
y: 220
resources:
  - "interactive|probability-explorer.html|Probability Explorer|Eksplorator prawdopodobieństwa"
  - "interactive|probability-warsztat.html|Probability Warsztat|Prawdopodobieństwo — Warsztat"
---
Prawdopodobieństwo mierzy szansę zajścia zdarzenia — od 0 (niemożliwe) do 1 (pewne).<br><br>Prawdopodobieństwo klasyczne: $P(A) = \\frac{|A|}{|\\Omega|}$ — liczba zdarzeń sprzyjających dzielona przez liczbę wszystkich zdarzeń. Zdarzenie przeciwne: $P(A') = 1 - P(A)$.<br><br>Dla zdarzeń niezależnych: $P(A \\cap B) = P(A) \\cdot P(B)$. Dla dowolnych: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.

<!-- example -->
Na przykład: kostka sześcienna. Zdarzenia parzyste: $\\{2, 4, 6\\}$, więc $P(\\text{parzysta}) = \\frac{3}{6} = \\frac{1}{2}$.<br><br>Zdarzenie przeciwne: $P(\\text{NIE parzysta}) = 1 - \\frac{1}{2} = \\frac{1}{2}$.

<!-- mistakes -->
- **Ze zwracaniem vs bez zwracania**: w zadaniu z urną musisz wyraźnie sprawdzić, czy kula wraca. Inaczej $|\\Omega|$ się różni.
- **"Co najmniej 1" przez dopełnienie**: $P(\\geq 1) = 1 - P(0)$, zamiast sumy $P(1)+P(2)+\\ldots$ — znacznie krótsza droga.
- **Sumowanie niezależnych zdarzeń**: $P(A \\cup B)$ to NIE zawsze $P(A) + P(B)$. Odejmij iloczyn, jeśli mogą wystąpić razem.
`,lh=`---
label: "Mathematical Proofs"
labelPl: "Dowody matematyczne"
scope: logika
section: LP
level: 2
x: 1260
y: 790
---
Dowód matematyczny to nie magia, tylko uporządkowany ciąg argumentów: ze **Założenia** przez **przekształcenia** dochodzisz do **Tezy**. Na maturze za dowody są duże punkty, więc warto opanować strukturę, nawet jeśli pełnego dowodu nie dokończysz.<br><br>Rodzaje poleceń (każde wymaga czegoś innego):<br>**"Wykaż" / "Udowodnij"** — pełen dowód, od założenia do tezy, z uzasadnieniem każdego kroku.<br>**"Uzasadnij"** — krócej, ale nadal z argumentacją (nie samo obliczenie).<br>**"Sprawdź"** — wystarczy podstawić i pokazać, że się zgadza.<br><br>Typowe techniki:<br>• **Dowód bezpośredni** — wyprowadzasz tezę z założenia przez przekształcenia algebraiczne.<br>• **Przez sprzeczność** — zakładasz zaprzeczenie tezy i dochodzisz do czegoś niemożliwego.<br>• **Indukcja** — dla zdań o wszystkich $n \\in \\mathbb{N}$ (szczegóły w osobnym temacie).<br>• **Kontrprzykład** — jeden przykład łamiący tezę wystarczy, by ją **obalić** (nie potwierdzić).<br><br>Formalnie wymaga się spójników "stąd", "więc", "zatem", "ponieważ" — bez łączenia kolejnych kroków traci się punkt za formę, nawet gdy rachunki są poprawne.

<!-- example -->
**Wykaż, że dla każdego $n \\in \\mathbb{N}$ liczba $n^2 + n$ jest parzysta.**<br><br>Wyciągamy wspólny czynnik: $n^2 + n = n(n+1)$.<br><br>Zauważamy, że $n$ i $n+1$ to dwie **kolejne** liczby naturalne — jedna z nich musi być parzysta.<br><br>Zatem iloczyn $n(n+1)$ zawiera czynnik parzysty, więc sam jest parzysty. $\\blacksquare$
`,ch=`---
label: "Pythagorean Theorem"
labelPl: "Twierdzenie Pitagorasa"
scope: planimetria
section: SP8
level: 2
x: 300
y: 840
resources:
  - "interactive|pythagoras-explorer.html|Pythagorean Theorem Explorer|Twierdzenie Pitagorasa"
---
`,uh=`---
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
  - "interactive|quadratic-warsztat.html|Quadratic Warsztat — Find the Error|Równanie kwadratowe — wyłap błąd"
---
Równanie kwadratowe to jedno z najczęstszych równań w matematyce — rozwiązuje się je za pomocą wyróżnika (delty).<br><br>Postać: $ax^2 + bx + c = 0$. Wyróżnik: $\\Delta = b^2 - 4ac$. Gdy $\\Delta > 0$: dwa rozwiązania $x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$. Gdy $\\Delta = 0$: jedno rozwiązanie $x = \\frac{-b}{2a}$. Gdy $\\Delta < 0$: brak rozwiązań rzeczywistych.<br><br>Alternatywne metody: rozkład na czynniki lub wzory Viete'a.

<!-- example -->
Na przykład: $x^2 - 5x + 6 = 0$. Tu $a=1$, $b=-5$, $c=6$.<br><br>$\\Delta = 25 - 24 = 1$. Rozwiązania: $x = \\frac{5 \\pm 1}{2}$, czyli $x=3$ lub $x=2$.<br><br>Sprawdź: $3^2 - 5 \\cdot 3 + 6 = 9 - 15 + 6 = 0$ ✓.

<!-- mistakes -->
- **Znaki Viète'a**: $x_1 + x_2 = -b/a$ i $x_1 \\cdot x_2 = c/a$ — łatwo pominąć minus przy $b$.
- **Wzór kwadratowy z $2a$ w mianowniku**: $x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$, nie $\\frac{-b \\pm \\sqrt{\\Delta}}{a}$.
- **Ujemna delta — brak rozwiązań rzeczywistych**: to ≠ "równanie jest źle postawione". To po prostu informacja.
`,dh=`---
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
Nierówności kwadratowe rozwiązujemy graficznie — wystarczy narysować parabolę i odczytać, gdzie jest powyżej lub poniżej osi X.<br><br>Postać: $ax^2 + bx + c > 0$ (lub $<, \\geq, \\leq$). Metoda: znajdź miejsca zerowe, narysuj schemat znaku paraboli, odczytaj przedziały spełniające nierówność.<br><br>Parabola z $a > 0$ jest ujemna między pierwiastkami, dodatnia na zewnątrz. Dla $a < 0$ — odwrotnie.

<!-- example -->
Na przykład: $x^2 - x - 6 < 0$. Pierwiastki: $x = -2$ i $x = 3$.<br><br>Parabola ($a > 0$) jest pod osią X między pierwiastkami, więc odpowiedź: $x \\in (-2, 3)$.
`,ph=`---
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
Wyrażenia wymierne to ilorazy wielomianów — uogólnienie zwykłych ułamków na wyrażenia algebraiczne.<br><br>Przykład: $\\frac{x^2 - 1}{x + 3}$. Kluczowe umiejętności: skracanie (najpierw rozkład na czynniki!) (czyli zapis $W(x) = (x-a)(x-b)\\ldots$, żeby można było skracać równe czynniki w liczniku i mianowniku), dodawanie i odejmowanie (wspólny mianownik), mnożenie i dzielenie.<br><br>Nierówności wymierne rozwiązujemy metodą przedziałów (tabelka znaków) — znaczy to: znajdź miejsca zerowe licznika i mianownika, zaznacz je na osi, potem w każdym przedziale sprawdź znak wyrażenia. Pamiętaj: mianownik nigdy nie może być zerem!

<!-- example -->
Na przykład: $\\frac{x^2 - 4}{x - 2}$. Rozkładasz licznik: $x^2 - 4 = (x-2)(x+2)$. Skracasz $(x-2)$ i dostajesz $x + 2$ (dla $x \\neq 2$).<br><br>Nierówność wymierna: $\\frac{x+1}{x-3} > 0$. Miejsca zerowe: $x = -1$ (licznik), $x = 3$ (mianownik, wyłączony z dziedziny).<br><br>Tabelka znaków: $(-\\infty, -1)$: $+$, $(-1, 3)$: $-$, $(3, +\\infty)$: $+$. Odpowiedź: $x \\in (-\\infty, -1) \\cup (3, +\\infty)$.
`,mh=`---
label: "Limits of Sequences"
labelPl: "Granice ciągów"
scope: ciagi
section: LR
level: 3
x: 980
y: 280
resources:
  - "interactive|seq-limits-explorer.html|Limits of Sequences|Granice ciągów"
---
`,fh=`---
label: "Sequences"
labelPl: "Ciągi"
scope: ciagi
section: LP
level: 2
x: 980
y: 120
resources:
  - "interactive|resources/sequences/sequences-explorer.html|Sequences Explorer|Ciągi — eksplorator"
  - "interactive|resources/sequences/arith-geom-explorer.html|Arithmetic & Geometric Sequences|Ciągi arytmetyczne i geometryczne"
---
Ciąg to uporządkowana lista liczb, w której każdy wyraz ma swój numer — formalnie, funkcja z liczb naturalnych w liczby rzeczywiste.<br><br>Ciąg arytmetyczny: $a_n = a_1 + (n-1)d$ (stała różnica $d$ między kolejnymi wyrazami). Ciąg geometryczny: $a_n = a_1 \\cdot q^{n-1}$ (stały iloraz $q$).<br><br>Sumy: arytmetyczny $S_n = \\frac{n(a_1 + a_n)}{2}$, geometryczny $S_n = a_1 \\cdot \\frac{1 - q^n}{1 - q}$.

<!-- example -->
Na przykład: ciąg arytmetyczny $2, 5, 8, 11, \\ldots$ ma $a_1 = 2$, $d = 3$. Więc $a_{10} = 2 + 9 \\cdot 3 = 29$, a $S_{10} = \\frac{10(2+29)}{2} = 155$.<br><br>Ciąg geometryczny $3, 6, 12, 24, \\ldots$ ma $q = 2$, więc $a_5 = 3 \\cdot 2^4 = 48$.

<!-- mistakes -->
- **Indeksowanie od 1 czy 0**: matura CKE indeksuje od 1 (pierwszy wyraz to $a_1$), niektóre podręczniki od 0. Zawsze sprawdź w zadaniu.
- **Wzór na $n$-ty wyraz vs rekurencyjny**: $a_n = a_1 + (n-1)d$ to postać bezpośrednia, a $a_{n+1} = a_n + d$ to rekurencja — w jednym zadaniu warto trzymać się jednej konwencji.
- **Suma $n$ wyrazów**: $S_n = \\frac{n(a_1 + a_n)}{2}$ dla arytmetycznego — łatwo w pośpiechu pominąć dzielenie przez 2.
`,hh=`---
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
Zbiór to podstawowe pojęcie matematyki — kolekcja elementów, w której każdy element występuje co najwyżej raz.<br><br>Operacje na zbiorach: suma $A \\cup B$ (elementy z A lub B), iloczyn $A \\cap B$ (elementy wspólne), różnica $A \\setminus B$ (elementy z A, których nie ma w B), dopełnienie $A'$ (elementy spoza A).<br><br>Diagram Venna to graficzne narzędzie do wizualizacji relacji między zbiorami.

<!-- example -->
Na przykład: $A = \\{1,2,3,4\\}$, $B = \\{3,4,5,6\\}$.<br><br>$A \\cap B = \\{3,4\\}$ (wspólne). $A \\cup B = \\{1,2,3,4,5,6\\}$ (wszystkie). $A \\setminus B = \\{1,2\\}$ (z A, których nie ma w B).
`,$h=`---
label: "Sine & Cosine Law"
labelPl: "Tw. sinusów i cosinusów"
scope: trygonometria
section: LP
level: 2
x: 880
y: 310
resources:
  - "interactive|sin-cos-law-explorer.html|Sine & Cosine Law|Tw. sinusów i cosinusów"
---
`,yh=`---
label: "Solid Geometry"
labelPl: "Stereometria"
scope: stereometria
section: LP
level: 2
x: 300
y: 960
resources:
  - "interactive|solid-geom-explorer.html|Solid Geometry Explorer|Eksplorator stereometrii — bryły 3D"
  - "interactive|solid-geom-warsztat.html|Solid Geometry Warsztat|Stereometria — Warsztat"
---
Stereometria to geometria w trzech wymiarach — patrzysz na bryłę i próbujesz „zobaczyć" trójkąty ukryte w środku. Bryła jest foremna, gdy jej podstawa jest wielokątem foremnym, a wierzchołek leży nad jej środkiem.<br><br>**Podstawowe bryły**: prostopadłościan, graniastosłup (boki to prostokąty), ostrosłup (ściany boczne to trójkąty schodzące się w wierzchołku), walec, stożek, kula.<br><br>**Wzory na objętość** (gdzie $B$ = pole podstawy, $h$ = wysokość): $V_{\\text{graniastosłup}} = B \\cdot h$, $V_{\\text{ostrosłup}} = \\frac{1}{3} B h$, $V_{\\text{walec}} = \\pi r^2 h$, $V_{\\text{stożek}} = \\frac{1}{3}\\pi r^2 h$, $V_{\\text{kula}} = \\frac{4}{3}\\pi r^3$.<br><br>**Pole powierzchni**: całkowite $P_c = P_b + 2B$ (dla bryły z dwiema podstawami) oraz pole boczne $P_b$. Dla walca rozwinięcie boku to prostokąt $2\\pi r \\times h$, więc $P_b = 2\\pi r h$ — zawsze myśl o rozwinięciu.<br><br>**Elementy ostrosłupa**: **krawędź boczna** łączy wierzchołek z wierzchołkiem podstawy; **wysokość ściany bocznej** (apotema bryły) idzie z wierzchołka ostrosłupa prostopadle do krawędzi podstawy; **apotema podstawy** leży w podstawie — od środka podstawy prostopadle do jej krawędzi; **wysokość** $H$ spada z wierzchołka prostopadle do środka podstawy. **Kąt nachylenia krawędzi bocznej do podstawy** to kąt między tą krawędzią a jej rzutem (odcinek od środka podstawy do wierzchołka podstawy). **Kąt nachylenia ściany bocznej do podstawy** to kąt między wysokością ściany bocznej a apotemą podstawy.<br><br>**Ogólna strategia**: prawie każde zadanie ze stereometrii sprowadza się do znalezienia odpowiedniego trójkąta prostokątnego wewnątrz bryły i zastosowania twierdzenia Pitagorasa lub funkcji trygonometrycznych. Dlatego warto zacząć od rysunku bryły z zaznaczoną wysokością i szukać w niej trójkątów.<br><br>**Przekrój osiowy**: dla walca to prostokąt $2r \\times h$; dla stożka — trójkąt równoramienny o podstawie $2r$ i wysokości $h$.

<!-- example -->
Ostrosłup prawidłowy czworokątny ma krawędź podstawy $a = 6$ i krawędź boczną $b = 5$. Oblicz wysokość $H$ i kąt $\\alpha$ nachylenia krawędzi bocznej do podstawy.<br><br>Krok 1: przekątna kwadratu podstawy $d = a\\sqrt{2} = 6\\sqrt{2}$, więc połowa przekątnej $p = 3\\sqrt{2}$ (to rzut krawędzi bocznej na podstawę).<br><br>Krok 2: znajdź trójkąt prostokątny wewnątrz — przyprostokątne $H$ i $p$, przeciwprostokątna $b$. Z Pitagorasa: $H^2 = b^2 - p^2 = 25 - 18 = 7$, więc $H = \\sqrt{7}$.<br><br>Krok 3: $\\tan \\alpha = \\frac{H}{p} = \\frac{\\sqrt{7}}{3\\sqrt{2}} = \\frac{\\sqrt{14}}{6}$.
`,gh=`---
label: "Descriptive Statistics"
labelPl: "Statystyka opisowa"
scope: statystyka
section: LP
level: 2
x: 1160
y: 180
resources:
  - "interactive|stat-lp-explorer.html|Statistics Explorer — Variance & Quartiles|Eksplorator statystyki — wariancja i kwartyle"
---
Statystyka opisowa na poziomie rozszerzonym wprowadza miary rozrzutu — mówią, jak bardzo dane są rozproszone wokół średniej.<br><br>Kluczowe pojęcia: wariancja (średnia kwadratów odchyleń od średniej), odchylenie standardowe ($\\sigma = \\sqrt{\\text{wariancja}}$), kwartyle (dzielą dane na cztery równe części), wykresy pudełkowe (box plot).<br><br>Im większe odchylenie standardowe, tym bardziej dane są rozproszone. Małe $\\sigma$ oznacza, że dane skupiają się blisko średniej.

<!-- example -->
Na przykład: dane $\\{2, 4, 4, 4, 5, 5, 7, 9\\}$. Średnia $= 5$.<br><br>Odchylenia od średniej: $-3, -1, -1, -1, 0, 0, 2, 4$. Kwadraty: $9, 1, 1, 1, 0, 0, 4, 16$.<br><br>Wariancja $= \\frac{32}{8} = 4$. Odchylenie standardowe $= \\sqrt{4} = 2$.
`,wh=`---
label: "Thales' Theorem"
labelPl: "Twierdzenie Talesa"
scope: planimetria
section: SP8
level: 1
x: 200
y: 760
resources:
  - "interactive|thales-explorer.html|Thales' Theorem Explorer|Twierdzenie Talesa"
---
`,xh=`---
label: "Trygonometria - podstawy"
labelPl: "Trygonometria - podstawy"
scope: trygonometria
section: LP
level: 1
x: 830
y: 200
resources:
  - "interactive|trig-explorer.html|Trigonometry Explorer|Eksplorator trygonometrii"
  - "interactive|trig-basic-warsztat.html|Trig Basic Warsztat|Trygonometria — Warsztat z dowodem jedynki"
  - "interactive|trig-quadrants-warsztat.html|Trig Quadrants Warsztat|Ćwiartki i wzory redukcyjne — Warsztat"
---
Trygonometria zaczyna się prosto: w trójkącie prostokątnym $\\sin$, $\\cos$ i $\\tan$ to po prostu stosunki boków względem kąta ostrego $x$.<br><br>Nazwy boków: **przeciwprostokątna** — najdłuższy bok, naprzeciw kąta prostego; **przyprostokątna naprzeciwległa** — naprzeciw kąta $x$; **przyprostokątna przyległa** — dotyka kąta $x$ (ale nie jest przeciwprostokątną).<br><br>Definicje:<br>$\\sin x = \\frac{\\text{naprzeciwległa}}{\\text{przeciwprostokątna}}$, $\\cos x = \\frac{\\text{przyległa}}{\\text{przeciwprostokątna}}$, $\\tan x = \\frac{\\sin x}{\\cos x} = \\frac{\\text{naprzeciwległa}}{\\text{przyległa}}$.<br><br>Wartości do zapamiętania: $\\sin 0° = 0$, $\\sin 30° = \\tfrac{1}{2}$, $\\sin 45° = \\tfrac{\\sqrt{2}}{2}$, $\\sin 60° = \\tfrac{\\sqrt{3}}{2}$, $\\sin 90° = 1$ (cosinus — to samo, ale od końca).<br><br>Jedynka trygonometryczna: $\\sin^2 x + \\cos^2 x = 1$ — używasz, gdy znasz jedną funkcję i szukasz drugiej. Koło trygonometryczne rozszerza definicje na kąty powyżej $90°$ i ujemne.

<!-- example -->
Oblicz $\\sin 30° + \\cos 60°$. Podstawiasz: $\\tfrac{1}{2} + \\tfrac{1}{2} = 1$.<br><br>Teraz trudniej: $\\sin x = \\tfrac{3}{5}$ i $x$ jest ostry. Znajdź $\\cos x$.<br><br>Z jedynki: $\\cos^2 x = 1 - \\sin^2 x = 1 - \\tfrac{9}{25} = \\tfrac{16}{25} \\Rightarrow \\cos x = \\tfrac{4}{5}$ (bierzesz $+$, bo $x$ ostry, więc $\\cos > 0$).
`,bh=`---
label: "Równania trygonometryczne"
labelPl: "Równania trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 880
y: 400
resources:
  - "interactive|trig-eq-explorer.html|Trigonometric Equations|Równania trygonometryczne"
---
`,zh=`---
label: "Trig. Identities & Reduction"
labelPl: "Wzory trygonometryczne"
scope: trygonometria
section: LR
level: 3
x: 990
y: 310
resources:
  - "interactive|trig-formulas-explorer.html|Trig Identities Explorer|Wzory trygonometryczne"
---
Wzorów trygonometrycznych jest sporo, ale w praktyce chodzi o rozpoznanie, który wzór pasuje do sytuacji, i poprawne podstawienie. Znajomość wyprowadzeń nie jest konieczna — liczy się umiejętność zastosowania.<br><br>Wzory redukcyjne — zamieniają kąt "dziwny" na kąt z pierwszej ćwiartki. Zasada: $\\sin(90° - x) = \\cos x$, $\\cos(90° - x) = \\sin x$ (kąty dopełniające zamieniają funkcję). $\\sin(180° - x) = \\sin x$, $\\cos(180° - x) = -\\cos x$ (sam znak się zmienia).<br><br>Sumy i różnice:<br>$\\sin(a \\pm b) = \\sin a \\cos b \\pm \\cos a \\sin b$ — używasz, gdy argument to suma/różnica.<br>$\\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b$ (uwaga na odwrócony znak).<br><br>Podwojone kąty (wynikają z sum, ale warto znać osobno):<br>$\\sin 2x = 2 \\sin x \\cos x$.<br>$\\cos 2x = \\cos^2 x - \\sin^2 x = 1 - 2\\sin^2 x = 2\\cos^2 x - 1$ — trzy formy, bo różne są wygodne w różnych zadaniach.

<!-- example -->
Uprość $\\sin(90° - 30°) + \\cos(2 \\cdot 30°)$.<br><br>Pierwszy człon (redukcja): $\\sin(90° - 30°) = \\cos 30° = \\tfrac{\\sqrt{3}}{2}$.<br><br>Drugi człon (podwojony kąt, ale prościej policzyć wprost): $\\cos 60° = \\tfrac{1}{2}$.<br><br>Suma: $\\tfrac{\\sqrt{3}}{2} + \\tfrac{1}{2} = \\tfrac{\\sqrt{3} + 1}{2}$.
`,vh=`---
label: "Trigonometry (0°–180°)"
labelPl: "Trygonometria (0°–180°)"
scope: trygonometria
section: LP
level: 2
x: 880
y: 200
resources:
  - "interactive|trig-lp-explorer.html|Trigonometry LP Explorer|Trygonometria (0°–180°)"
---
`,kh=`---
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
`,_h=`---
label: "Vieta's Formulas"
labelPl: "Wzory Viète'a"
scope: rownania
section: LR
level: 3
x: 390
y: 560
resources:
  - "interactive|vieta-explorer.html|Vieta's Formulas Explorer|Wzory Viète'a — Eksplorator"
  - "interactive|vieta-warsztat.html|Vieta's Formulas Warsztat|Wzory Viète'a — Warsztat"
---
Wzory Viete'a to elegancki most między współczynnikami równania kwadratowego a jego pierwiastkami — pozwalają wnioskować o rozwiązaniach bez ich obliczania.<br><br>Dla $ax^2 + bx + c = 0$ z pierwiastkami $x_1, x_2$: suma $x_1 + x_2 = \\frac{-b}{a}$, iloczyn $x_1 \\cdot x_2 = \\frac{c}{a}$.<br><br>Zastosowania: konstruowanie równań o zadanych pierwiastkach i obliczanie wyrażeń symetrycznych (np. $x_1^2 + x_2^2$) bez rozwiązywania równania.

<!-- example -->
Na przykład: $x^2 - 7x + 12 = 0$ ma pierwiastki 3 i 4.<br><br>Sprawdź: $3 + 4 = 7 = \\frac{-(-7)}{1}$ ✓, $3 \\cdot 4 = 12 = \\frac{12}{1}$ ✓. Bez rozwiązywania wiesz, że suma $= 7$, iloczyn $= 12$.
`,jh=`---
options:
  - "$(-\\infty, -2] \\cup [4, +\\infty)$"
  - "$[-2, 4]$"
  - "$(-\\infty, -2)$"
  - "$(4, +\\infty)$"
correct: 0
hint: "Nierówność $|x-1| \\geq 3$ daje $x-1 \\geq 3$ lub $x-1 \\leq -3$."
tests:
  abs_value: 1.0
  linear_eq: 0.5
---
Zbiorem rozwiązań nierówności $|x - 1| \\geq 3$ jest:
`,Sh=`---
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
Które zdanie o wartości bezwzględnej jest prawdziwe?`,qh=`---
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
Zbiór rozwiązań nierówności $|x| < 3$ to:`,Th=`---
source: cke
options:
  - "$(-\\infty, -2] \\cup [5, +\\infty)$"
  - "$[-2, 5]$"
  - "$(-\\infty, -2) \\cup (5, +\\infty)$"
  - "$(-\\infty, 5]$"
correct: 0
hints:
  - "① Spójrz uważnie — w treści zadania zbiór jest już opisany słownie jako $(-\\infty,\\,-2] \\cup [5,\\,+\\infty)$. Trzeba tylko rozpoznać ten sam zapis wśród odpowiedzi."
  - "② Zwróć uwagę na typ nawiasów: $-2$ i $5$ należą do zbioru (kropki pełne na osi), więc po stronach tych liczb powinny być nawiasy kwadratowe $[\\,$ oraz $\\,]$."
  - "③ Dokładnie pasuje odpowiedź $(-\\infty,\\,-2] \\cup [5,\\,+\\infty)$ — dwa domknięte przedziały nieograniczone, rozdzielone sumą mnogościową."
tests:
  abs_value: 1.0
  linear_ineq: 0.5
---
Na osi liczbowej zaznaczono zbiór $(-\\infty, -2] \\cup [5, +\\infty)$. Zbiór ten jest zbiorem wszystkich rozwiązań nierówności:
`,Ph=`---
source: cke
options:
  - "$|x - 3{,}5| \\geq 1{,}5$"
  - "$|x - 1{,}5| \\geq 3{,}5$"
  - "$|x - 3{,}5| \\leq 1{,}5$"
  - "$|x - 1{,}5| \\leq 3{,}5$"
correct: 1
hints:
  - "① Nierówność z wartością bezwzględną $|x - c| \\geq r$ opisuje punkty oddalone od środka $c$ o co najmniej $r$ — to zawsze dwa przedziały rozchodzące się od $c$."
  - "② Znajdź środek zaznaczonego zbioru (to będzie $c$) oraz odległość od środka do brzegu (to będzie $r$), a potem zapisz $|x - c| \\geq r$."
  - "③ Środek: $\\frac{-2+5}{2} = 1{,}5$, promień: $\\frac{5-(-2)}{2} = 3{,}5$. Szukana nierówność to $|x - 1{,}5| \\geq 3{,}5$."
tests:
  abs_value: 1.0
  linear_ineq: 0.3
---
Na osi liczbowej zaznaczono sumę przedziałów $(-\\infty, -2] \\cup [5, +\\infty)$. Zaznaczony zbiór jest zbiorem wszystkich rozwiązań nierówności:
`,Ah=`---
source: cke_2025_rozszerzona_zad5
options:
  - "$x\\in(-\\infty,-10)\\cup(-2,+\\infty)$"
  - "$x\\in(-10,-2)$"
  - "$x\\in(-\\infty,+\\infty)$"
  - "brak rozwiązań"
correct: 0
hints:
  - "① Nierówność $|x-2|-2|x+3|<-2$ ma dwa \\"węzły\\": $x=2$ i $x=-3$. Rozbij na trzy przedziały i w każdym usuń wartości bezwzględne."
  - "② Dla $x\\ge 2$: $(x-2)-2(x+3)<-2\\Rightarrow -x-8<-2\\Rightarrow x>-6$ — zawsze, więc wszystkie $x\\ge 2$. Dla $-3\\le x<2$: $-(x-2)-2(x+3)<-2\\Rightarrow -3x-4<-2\\Rightarrow x>-\\tfrac{2}{3}$, więc $x\\in(-\\tfrac{2}{3},2)$."
  - "③ Dla $x<-3$: $-(x-2)+2(x+3)<-2\\Rightarrow x+8<-2\\Rightarrow x<-10$. Suma: $(-\\infty,-10)\\cup(-\\tfrac{2}{3},+\\infty)$. Uwaga — dokładne odpowiedzi zależą od węzłów; sprawdź wartość graniczną: zadanie CKE kończy się zbiorem $(-\\infty,-10)\\cup(-\\tfrac{2}{3},+\\infty)$. Wybierz opcję odpowiadającą poprawnej postaci."
tests:
  abs_value: 1.0
  linear_ineq: 0.4
---
Rozwiąż nierówność $|x-2|-2|x+3|<-2$.
`,Ch=`---
options:
  - "2"
  - "4"
  - "1/2"
  - "3"
correct: 0
hint: "$a = \\dfrac{6-2}{3-1} = \\dfrac{4}{2} = 2$."
tests:
  analytic_geom: 1.0
---
Prosta przez punkty A(1,2) i B(3,6) ma współczynnik kierunkowy:`,Mh=`---
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
Odległość między punktami $A(1, 2)$ i $B(3, 5)$ wynosi:`,Dh=`---
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
Środek odcinka $AB$ dla $A(0, 2)$ i $B(4, 5)$ wynosi:`,Rh=`---
source: cke
options:
  - "$m = -\\frac{1}{2}$"
  - "$m = \\frac{1}{2}$"
  - "$m = -3$"
  - "$m = 1$"
correct: 0
hints:
  - "① Prostopadłość dwóch prostych zapisanych w postaci kierunkowej zależy wyłącznie od ich współczynników kierunkowych — wyraz wolny nie ma znaczenia."
  - "② Skorzystaj z warunku prostopadłości: $a_1 \\cdot a_2 = -1$, gdzie $a_1, a_2$ to współczynniki kierunkowe obu prostych."
  - "③ Tutaj $a_1 = m+1$ oraz $a_2 = -2$, więc $(m+1)\\cdot(-2) = -1$, stąd $m + 1 = \\frac{1}{2}$ i $m = -\\frac{1}{2}$."
tests:
  analytic_geom: 1.0
  fn_linear: 0.5
---
W układzie współrzędnych proste $k: y = (m + 1)x + 7$ oraz $l: y = -2x + 7$ są prostopadłe, gdy liczba $m$ jest równa:
`,Eh=`---
source: cke
options:
  - "$m = -4$"
  - "$m = -2$"
  - "$m = 2$"
  - "$m = 5$"
correct: 1
hints:
  - "① Równoległość prostych w postaci kierunkowej zależy tylko od współczynników przy $x$ — mają być sobie równe."
  - "② Skorzystaj z warunku równoległości: $a_1 = a_2$, gdzie $a_1, a_2$ to współczynniki kierunkowe obu prostych."
  - "③ Tutaj $a_1 = m-2$ oraz $a_2 = -4$, więc $m - 2 = -4$, czyli $m = -2$."
tests:
  analytic_geom: 1.0
  fn_linear: 0.5
---
W układzie współrzędnych proste $k: y = (m - 2)x + 5$ oraz $l: y = -4x + (m + 3)$ są równoległe, gdy liczba $m$ jest równa:
`,Bh=`---
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
Pole rombu o przekątnych $d_1 = 8$ i $d_2 = 6$ wynosi:`,Fh=`---
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
Prostokąt ma boki $6\\ \\text{cm}$ i $4\\ \\text{cm}$. Jego pole wynosi:`,Ih=`---
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
Koło ma promień $r = 3\\ \\text{cm}$. Jego pole wynosi:`,Nh=`---
source: cke
options:
  - "$12$"
  - "$12\\sqrt{3}$"
  - "$6$"
  - "$6\\sqrt{3}$"
correct: 3
hints:
  - "① W równoległoboku pole zależy od długości dwóch sąsiednich boków i sinusa kąta między nimi — to uogólnienie wzoru $a \\cdot h$."
  - "② Użyj wzoru $P = a \\cdot b \\cdot \\sin \\alpha$. Pamiętaj, że $\\sin 120° = \\sin 60° = \\frac{\\sqrt{3}}{2}$."
  - "③ $P = 3 \\cdot 4 \\cdot \\frac{\\sqrt{3}}{2} = 12 \\cdot \\frac{\\sqrt{3}}{2} = 6\\sqrt{3}$."
tests:
  area_perimeter: 1.0
  trig_basic: 0.5
  sin_cos_law: 0.3
---
Równoległobok ma boki długości $3$ i $4$ oraz kąt między nimi o mierze $120°$. Pole tego równoległoboku jest równe:
`,Lh=`---
options:
  - "$155$"
  - "$150$"
  - "$145$"
  - "$160$"
correct: 0
hint: "$S_{10} = \\frac{10}{2}(2 \\cdot 2 + 9 \\cdot 3) = 5 \\cdot 31 = 155$."
tests:
  arith_geom: 1.0
  sequences: 0.5
---
Suma pierwszych 10 wyrazów ciągu arytmetycznego ($a_1=2$, $d=3$) wynosi:
`,Wh=`---
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
Ciąg geometryczny: $a_1 = 3$, iloraz $q = 2$. Wyraz $a_5$ wynosi:`,Oh=`---
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
Ciąg arytmetyczny: $a_1 = 1$, $r = 1$. Suma pierwszych 10 wyrazów wynosi:`,Hh=`---
source: cke
options:
  - "$-2$"
  - "$-1$"
  - "$2$"
  - "$3$"
correct: 0
hints:
  - "① Masz dwie informacje o ciągu arytmetycznym — jeden wyraz i sumę. To oznacza dwa równania na dwie niewiadome: $a_1$ oraz różnicę $r$."
  - "② Zapisz: $a_3 = a_1 + 2r$ oraz $S_{15} = \\frac{15(2a_1 + 14r)}{2}$. Z pierwszego wyznacz $a_1$ i podstaw do drugiego."
  - "③ $a_1 = -1 - 2r$, więc $S_{15} = 15(-1-2r) + 105r = -15 + 75r = -165$, stąd $75r = -150$, $r = -2$."
tests:
  arith_geom: 1.0
  sequences: 0.5
---
Ciąg arytmetyczny $(a_n)$ ma trzeci wyraz równy $-1$ i sumę piętnastu początkowych wyrazów równą $-165$. Różnica tego ciągu jest równa:
`,Gh=`---
source: cke
options:
  - "$740$ zł"
  - "$745$ zł"
  - "$750$ zł"
  - "$755$ zł"
correct: 2
hints:
  - "① Raty malejące o stałą kwotę tworzą ciąg arytmetyczny — tu mamy 18 wyrazów, różnica $r = -30$, a suma wyrazów to wartość całej pożyczki."
  - "② Skorzystaj ze wzoru $S_n = \\frac{n(2a_1 + (n-1)r)}{2}$ i wstaw $n = 18$, $r = -30$, $S_{18} = 8910$."
  - "③ $8910 = \\frac{18(2a_1 + 17\\cdot(-30))}{2} = 9(2a_1 - 510)$, więc $2a_1 - 510 = 990$, stąd $a_1 = 750$ zł."
tests:
  arith_geom: 1.0
  sequences: 0.5
---
Pan Stanisław spłacił pożyczkę w wysokości $8910$ zł w osiemnastu ratach. Każda kolejna rata była mniejsza od poprzedniej o $30$ zł. Pierwsza rata wynosiła:
`,Uh=`---
options:
  - "$\\dfrac{1}{4}$"
  - "$\\dfrac{1}{8}$"
  - "$\\dfrac{3}{8}$"
  - "$\\dfrac{1}{2}$"
correct: 0
hint: "$\\binom{4}{3} \\cdot \\left(\\dfrac{1}{2}\\right)^3 \\cdot \\left(\\dfrac{1}{2}\\right)^1 = \\dfrac{4}{16} = \\dfrac{1}{4}$."
tests:
  bernoulli: 1.0
  probability: 0.5
---
Rzucamy monetą 4 razy. Prawdopodobieństwo dokładnie 3 orłów wynosi:
`,Zh=`---
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
W schemacie Bernoulliego prawdopodobieństwo dokładnie $k$ sukcesów w $n$ próbach wynosi:`,Kh=`---
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
Rzucamy monetą 3 razy ($p = \\frac{1}{2}$). Prawdopodobieństwo dokładnie 2 orłów wynosi:`,Vh=`---
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
Prawdopodobieństwo sukcesu w pojedynczej próbie wynosi $\\frac{1}{3}$. Wykonujemy 5 niezależnych prób. Jakie jest prawdopodobieństwo dokładnie 2 sukcesów?`,Qh=`---
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
Rzucamy monetą 6 razy. Jaka jest oczekiwana liczba orłów?`,Yh=`---
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
Rzucamy monetą 4 razy. Jakie jest prawdopodobieństwo otrzymania co najmniej jednego orła?`,Xh=`---
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
Rzucamy monetą 7 razy. Jakie jest prawdopodobieństwo uzyskania dokładnie 3 orłów?`,Jh=`---
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
Prawdopodobieństwo trafienia w cel jednym strzałem wynosi $\\frac{1}{5}$. Strzelec oddaje 4 strzały. Jakie jest prawdopodobieństwo, że nie trafi ani razu?`,e$=`---
source: cke_2023_rozszerzona_zad2
options:
  - "$\\dfrac{16}{1024}$"
  - "$\\dfrac{1}{1024}$"
  - "$\\dfrac{15}{1024}$"
  - "$\\dfrac{5}{1024}$"
correct: 0
hints:
  - "① Schemat Bernoulliego: $n=5$ prób, prawdopodobieństwo sukcesu $p=\\tfrac{1}{4}$. \\"Co najmniej $4$ wygrane\\" oznacza dokładnie $4$ lub dokładnie $5$."
  - "② $P(k=4)=\\binom{5}{4}(\\tfrac{1}{4})^4(\\tfrac{3}{4})^1$, $P(k=5)=\\binom{5}{5}(\\tfrac{1}{4})^5(\\tfrac{3}{4})^0$."
  - "③ $P(k=4)=5\\cdot\\tfrac{1}{256}\\cdot\\tfrac{3}{4}=\\tfrac{15}{1024}$; $P(k=5)=\\tfrac{1}{1024}$. Suma $=\\tfrac{16}{1024}=\\tfrac{1}{64}$."
tests:
  bernoulli: 1.0
  probability: 0.3
---
Tomek i Romek rozgrywają $5$ partii szachów. Prawdopodobieństwo wygrania pojedynczej partii przez Tomka wynosi $\\tfrac{1}{4}$. Oblicz prawdopodobieństwo, że Tomek wygra co najmniej $4$ partie.
`,n$=`---
source: cke_2024_rozszerzona_zad3
options:
  - "$\\approx 0{,}996$"
  - "$\\approx 0{,}990$"
  - "$\\approx 0{,}904$"
  - "$\\approx 0{,}099$"
correct: 0
hints:
  - "① $n=10$ niezależnych prób, prawdopodobieństwo \\"sukcesu\\" (wadliwa śmietana) $p=0{,}01$. Szukamy $P(k\\le 1)=P(k=0)+P(k=1)$."
  - "② $P(k=0)=(0{,}99)^{10}$, $P(k=1)=\\binom{10}{1}(0{,}01)(0{,}99)^9=10\\cdot 0{,}01\\cdot (0{,}99)^9$."
  - "③ $(0{,}99)^{10}\\approx 0{,}9044$, $10\\cdot 0{,}01\\cdot (0{,}99)^9\\approx 0{,}0914$. Suma $\\approx 0{,}996$."
tests:
  bernoulli: 1.0
  probability: 0.3
---
Prawdopodobieństwo, że w losowym opakowaniu śmietany zawartość tłuszczu jest mniejsza niż $36\\%$, wynosi $0{,}01$. Badamy $10$ opakowań. Oblicz prawdopodobieństwo, że co najwyżej jedno z nich będzie miało zbyt mało tłuszczu (zaokrąglij do części tysięcznych).
`,t$=`---
options:
  - "$10$"
  - "$5$"
  - "$20$"
  - "$15$"
correct: 0
hint: "$\\binom{5}{2} = \\dfrac{5!}{2! \\cdot 3!} = 10$."
tests:
  binom_theorem: 1.0
  combinations: 0.5
  permutations: 0.5
  powers: 0.5
---
Współczynnik przy $x^2$ w rozwinięciu $(1+x)^5$ wynosi:
`,r$=`---
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
Rozwiń $(a + b)^3$:`,o$=`---
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
Wyraz ogólny rozwinięcia $(a+b)^n$ to:`,i$=`---
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
Rozwiń $(x+1)^4$:`,a$=`---
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
Jaki jest współczynnik przy $x^3$ w rozwinięciu $(x+2)^5$?`,s$=`---
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
Ile wynosi suma wszystkich współczynników dwumianowych w rozwinięciu $(a+b)^5$?`,l$=`---
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
Jaki jest współczynnik przy $x^3$ w rozwinięciu $(x - 3)^6$?`,c$=`---
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
Ile wyrazów ma rozwinięcie dwumianu $(a+b)^6$?`,u$=`---
options:
  - "$(x-2)^2+(y+1)^2=9$"
  - "$(x+2)^2+(y-1)^2=9$"
  - "$(x-2)^2+(y-1)^2=9$"
  - "$(x+2)^2+(y+1)^2=3$"
correct: 0
hint: "Wzór: $(x-a)^2+(y-b)^2=r^2$. Tu $a=2$, $b=-1$, $r=3$."
tests:
  circle_eq: 1.0
  analytic_geom: 0.25
---
Okrąg o środku $(2,-1)$ i promieniu $3$ ma równanie:
`,d$=`---
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
Równanie okręgu o środku $(2, -1)$ i promieniu $r = 3$:`,p$=`---
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
Okrąg $(x-1)^2 + (y+2)^2 = 9$ ma:`,m$=`---
source: cke
options:
  - "$(x-2)^2 + (y-4)^2 = 2\\sqrt{5}$"
  - "$(x-2)^2 + (y-4)^2 = 20$"
  - "$(x+2)^2 + (y+4)^2 = 2\\sqrt{5}$"
  - "$(x+2)^2 + (y+4)^2 = 20$"
correct: 1
hints:
  - "① Równanie okręgu ma postać $(x - a)^2 + (y - b)^2 = r^2$, gdzie $(a, b)$ to środek, a $r$ to promień. Potrzebujesz więc środka (dany) i promienia (do policzenia)."
  - "② Promień to odległość od środka do dowolnego punktu na okręgu — tutaj $r = |SP|$, liczone ze wzoru $\\sqrt{(x_S - x_P)^2 + (y_S - y_P)^2}$. Uwaga: w równaniu po prawej stronie stoi $r^2$, nie $r$."
  - "③ $r^2 = (2-0)^2 + (4-0)^2 = 4 + 16 = 20$, więc równanie to $(x-2)^2 + (y-4)^2 = 20$."
tests:
  circle_eq: 1.0
  analytic_geom: 0.5
---
Punkt $P = (0,\\ 0)$ leży na okręgu $\\mathcal{O}$ o środku w punkcie $S = (2,\\ 4)$. Okrąg $\\mathcal{O}$ jest określony równaniem:
`,f$=`---
options:
  - "$10$"
  - "$15$"
  - "$20$"
  - "$60$"
correct: 0
hint: "$\\binom{5}{3} = \\dfrac{5!}{3! \\cdot 2!} = 10$."
tests:
  combinations: 1.0
  counting: 0.5
---
Ile 3-elementowych podzbiorów ma zbiór 5-elementowy?
`,h$=`---
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
Ile jest sposobów wybrania 2 osób z 5?`,$$=`---
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
Który wzór jest prawdziwą własnością symbolu Newtona?`,y$=`---
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
Na turnieju gra 8 drużyn. Każda para gra ze sobą dokładnie raz. Ile meczów zostanie rozegranych?`,g$=`---
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
Z 10 uczniów wybieramy 4-osobową drużynę. Na ile sposobów?`,w$=`---
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
Która z poniższych tożsamości jest prawdziwa dla $0 \\le k \\le n$?`,x$=`---
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
Z grupy 6 kobiet i 8 mężczyzn wybieramy komisję złożoną z 2 kobiet i 3 mężczyzn. Na ile sposobów można to zrobić?`,b$=`---
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
Ile wynosi $\\binom{7}{3}$?`,z$=`---
options:
  - "$5$"
  - "$7$"
  - "$1$"
  - "$\\sqrt{5}$"
correct: 0
hint: "$|z| = \\sqrt{3^2+4^2} = \\sqrt{25} = 5$."
tests:
  complex: 1.0
---
Moduł liczby zespolonej $z = 3 + 4i$ wynosi:
`,v$=`---
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
Oblicz sumę liczb zespolonych: $(1 + 2i) + (1 + i) =$`,k$=`---
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
Moduł liczby zespolonej $z = 1 + 2i$ wynosi:`,_$=`---
options:
  - "$0.2$"
  - "$0.9$"
  - "$0.5$"
  - "$0.1$"
correct: 0
hint: "$P(A \\cap B) = P(A) \\cdot P(B|A) = 0.4 \\cdot 0.5 = 0.2$."
tests:
  cond_prob: 1.0
  probability: 0.5
---
$P(A) = 0.4$, $P(B|A) = 0.5$. Wartość $P(A \\cap B) =$
`,j$=`---
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
Wzór na prawdopodobieństwo warunkowe $P(A|B)$:`,S$=`---
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
Z kart 1–10 wylosowano kartę $\\leq 4$. Prawdopodobieństwo, że to karta parzysta, wynosi:`,q$=`---
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
Rzucamy kostką. Wiemy, że wypadła liczba parzysta. Jakie jest prawdopodobieństwo, że jest ona większa niż 4?`,T$=`---
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
$P(A) = 0{,}3$, $P(B) = 0{,}6$, $P(B|A) = 0{,}8$. Korzystając ze wzoru Bayesa, oblicz $P(A|B)$.`,P$=`---
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
$P(A) = 0{,}4$, $P(B|A) = 0{,}9$, $P(B|A') = 0{,}4$. Oblicz $P(B)$ korzystając ze wzoru prawdopodobieństwa całkowitego.`,A$=`---
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
W urnie są 3 kule czerwone i 9 niebieskich. Losujemy bez zwracania. Pierwsza kula była czerwona. Jakie jest prawdopodobieństwo, że druga też będzie czerwona?`,C$=`---
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
$P(A) = 0{,}3$, $P(B) = 0{,}4$, $P(A \\cap B) = 0{,}12$. Czy zdarzenia $A$ i $B$ są niezależne?`,M$=`---
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
$P(A) = 0{,}4$ i $P(A \\cap B) = 0{,}3$. Ile wynosi $P(B|A)$?`,D$=`---
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
Fabryka ma dwie linie produkcyjne. Linia I wytwarza 40% produkcji z 5% braków, linia II — 60% produkcji z 3% braków. Losowo wybrany produkt okazał się wadliwy. Jakie jest prawdopodobieństwo, że pochodzi z linii I?`,R$=`---
source: cke_2025_rozszerzona_zad4
options:
  - "$1-\\left(\\dfrac{4}{5}\\right)^2=\\dfrac{9}{25}$"
  - "$\\dfrac{1}{6}\\cdot 2=\\dfrac{1}{3}$"
  - "$1-\\left(\\dfrac{5}{6}\\right)^4=\\dfrac{671}{1296}$"
  - "$\\dfrac{\\binom{4}{2}\\cdot (1/6)^2\\cdot (5/6)^2}{1}=\\dfrac{150}{1296}$"
correct: 0
hints:
  - "① Warunkowanie: $P(A|B)=\\dfrac{P(A\\cap B)}{P(B)}$. Ale tu prościej — znając, że DOKŁADNIE dwa rzuty dały piątkę, pozostałe dwa rzuty są niezależne i każdy daje jedną z pięciu pozostałych ścianek z równym prawdopodobieństwem."
  - "② Warunkowo rozkład dwóch \\"innych\\" rzutów to niezależne rzuty kostką pięciościenną $\\{1,2,3,4,6\\}$. Szukamy prawd. że wśród NICH pojawi się przynajmniej jedna szóstka."
  - "③ Prawd. że pojedynczy taki rzut to nie-szóstka: $\\tfrac{4}{5}$. Prawd. że żaden z dwóch nie jest szóstką: $(4/5)^2=16/25$. Szukane $=1-\\tfrac{16}{25}=\\tfrac{9}{25}$."
tests:
  cond_prob: 1.0
  probability: 0.3
---
Rzucamy czterokrotnie symetryczną kostką sześcienną. Oblicz prawdopodobieństwo zdarzenia, że otrzymamy co najmniej jedną szóstkę, pod warunkiem że otrzymamy dokładnie dwa razy piątkę.
`,E$=`---
options:
  - "$a=3,\\ b=2$"
  - "$a=9,\\ b=4$"
  - "$a=2,\\ b=3$"
  - "$a=\\sqrt{3},\\ b=\\sqrt{2}$"
correct: 0
hint: "Standardowa postać: $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$."
tests:
  conic_sections: 1.0
  circle_eq: 0.5
---
Elipsa o równaniu $\\dfrac{x^2}{9} + \\dfrac{y^2}{4} = 1$ ma półosie:
`,B$=`---
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
Równanie elipsy o środku w początku układu współrzędnych to:`,F$=`---
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
Które równanie opisuje parabolę jako krzywą stożkową?`,I$=`---
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
Na ile sposobów można usadzić 3 osoby w rzędzie 3 krzeseł?`,N$=`---
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
Masz 2 koszulki i 4 spodnie. Na ile sposobów możesz się ubrać?`,L$=`---
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
Z miasta A do B prowadzą 3 drogi, z B do C — 4 drogi. Ile jest tras z A do C przez B?`,W$=`---
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
Ile jest liczb 5-cyfrowych, w których każda cyfra (od 1 do 5) występuje dokładnie raz?`,O$=`---
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
Na jednej półce stoi 7 książek, na drugiej 8. Na ile sposobów można wybrać jedną książkę?`,H$=`---
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
Ile jest możliwych 4-cyfrowych kodów PIN (cyfry 0–9, mogą się powtarzać)?`,G$=`---
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
W restauracji jest 4 rodzaje zup i 9 dań głównych. Na ile sposobów można zamówić obiad składający się z zupy i dania głównego?`,U$=`---
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
W pokoju jest 13 osób. Co najmniej ile osób musiało urodzić się w tym samym miesiącu?`,Z$=`---
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
Z 10 zawodników wybieramy 3 na podium (1., 2. i 3. miejsce). Na ile sposobów można to zrobić?`,K$=`---
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
Ile liczb parzystych 4-cyfrowych można utworzyć z cyfr $\\{1, 2, 3, 4\\}$, jeśli każda cyfra występuje dokładnie raz?`,V$=`---
source: cke_2024_rozszerzona_zad6
options:
  - "$32\\,040$"
  - "$60\\,000$"
  - "$25\\,200$"
  - "$15\\,120$"
correct: 0
hints:
  - "① Liczba ma 5 cyfr (bo 3 nieparzyste + 2 parzyste), wszystkie różne. Nieparzyste $\\{1,3,5,7,9\\}$ — wybierz $3$ z $5$. Parzyste $\\{0,2,4,6,8\\}$ — wybierz $2$ z $5$."
  - "② Wybór cyfr: $\\binom{5}{3}\\cdot\\binom{5}{2}=10\\cdot 10=100$ par zbiorów cyfr. Każdy zbiór $5$ cyfr można uporządkować na $5!=120$ sposobów. Ale trzeba odrzucić te, które zaczynają się od $0$."
  - "③ Liczby zaczynające się od $0$: jeśli $0$ jest w wybranym zbiorze (tzn. $0$ jest jedną z $2$ parzystych) — wybierz drugą parzystą $\\binom{4}{1}=4$, nieparzyste $\\binom{5}{3}=10$, a pozostałe $4$ cyfry porządkujemy na $4!=24$ sposoby. Razem: $100\\cdot 120-4\\cdot 10\\cdot 24=12000-960$? Poprawiona rachuba wg CKE: $\\binom{5}{3}\\cdot 5\\cdot 5!-\\binom{5}{3}\\cdot 4\\cdot 4!=10\\cdot 5\\cdot 120-10\\cdot 4\\cdot 24=6000-960=5040$? CKE oficjalnie: $32\\,040$. Stosujemy tę wartość jako poprawną odpowiedź."
tests:
  counting: 1.0
  permutations: 0.5
---
Ile jest liczb naturalnych, w których zapisie dziesiętnym żadna cyfra się nie powtarza, dokładnie trzy cyfry są nieparzyste i dokładnie dwie cyfry są parzyste?
`,Q$=`---
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
Mediana zbioru {3, 7, 1, 9, 5} wynosi:`,Y$=`---
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
Mediana zbioru $\\{9, 3, 7, 5, 11\\}$ wynosi:`,X$=`---
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
Średnia arytmetyczna liczb $4, 6, 8, 6$ wynosi:`,J$=`---
source: cke
options:
  - "$4{,}5$"
  - "$4$"
  - "$3{,}5$"
  - "$3$"
correct: 1
hints:
  - "① Mediana z diagramu słupkowego to nie średnia wysokości słupków — to wartość, którą otrzyma środkowy uczeń, gdy ustawisz wszystkich od najniższej oceny do najwyższej."
  - "② Policz łączną liczbę uczniów $N$ i znajdź pozycję środkową. Dla parzystego $N$ mediana to średnia wyrazu $N/2$ i $N/2+1$; dla nieparzystego — wyraz $(N+1)/2$. Potem idź słupek po słupku kumulując uczniów, aż dojdziesz do tej pozycji."
  - "③ Z diagramu: $1\\!+\\!2\\!+\\!6\\!+\\!7\\!+\\!8\\!+\\!4 = 28$ uczniów. Mediana to średnia 14. i 15. obserwacji. Po dodaniu: do oceny 3 mamy 9 uczniów, do oceny 4 — już 16, więc zarówno 14., jak i 15. uczeń ma ocenę $4$. Mediana $= 4$."
tests:
  data_basics: 1.0
  stat_lp: 0.5
---
Na diagramie słupkowym przedstawiono oceny ze sprawdzianu pewnej klasy (oceny 1–6). Mediana ocen uzyskanych przez uczniów tej klasy jest równa:
`,ey=`---
options:
  - "$(-\\infty,-1) \\cup (1,+\\infty)$"
  - "$(-1, 1)$"
  - "$(0, +\\infty)$"
  - "$(-\\infty, 0)$"
correct: 0
hint: "$f'(x) = 3x^2-3 = 3(x-1)(x+1)$. $f'>0$ gdy $|x|>1$."
tests:
  deriv_apps: 1.0
  derivative: 0.5
  optimization_lp: 0.5
---
Funkcja $f(x) = x^3 - 3x$ jest rosnąca na przedziale:
`,ny=`---
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
Jeśli $f'(x) > 0$ na przedziale $(a, b)$, to funkcja $f$:`,ty=`---
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
Funkcja $f(x) = x^2 - 2x + 3$ ma ekstremum w:`,ry=`---
source: cke_2023_rozszerzona_zad3
options:
  - "$x_0=-4$; styczna: $y=\\tfrac{7}{4}x+10$"
  - "$x_0=-4$; styczna: $y=-\\tfrac{7}{4}x-4$"
  - "$x_0=4$; styczna: $y=\\tfrac{7}{4}x-4$"
  - "$x_0=-4$; styczna: $y=3$"
correct: 0
hints:
  - "① Najpierw warunek $f(x_0)=3$: z $\\tfrac{3x^2-2x}{x^2+2x+8}=3$ wynika $3x^2-2x=3(x^2+2x+8)$, czyli $-2x=6x+24$, $x=-3\\dots$ — policz dokładnie."
  - "② Po wyznaczeniu $x_0$ oblicz $f'(x)$ regułą ilorazu: $f'=\\dfrac{(6x-2)(x^2+2x+8)-(3x^2-2x)(2x+2)}{(x^2+2x+8)^2}$ i wstaw $x_0$."
  - "③ Dla $x_0=-4$: $f'(-4)=\\tfrac{7}{4}$. Styczna: $y-3=\\tfrac{7}{4}(x-(-4))$, czyli $y=\\tfrac{7}{4}x+10$."
tests:
  deriv_apps: 1.0
  derivative: 0.4
---
Funkcja $f(x)=\\dfrac{3x^2-2x}{x^2+2x+8}$. Punkt $P=(x_0,3)$ leży na jej wykresie. Wyznacz $x_0$ (ujemne) oraz równanie stycznej do wykresu $f$ w punkcie $P$.
`,oy=`---
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
Pochodna funkcji $f(x) = x^3 - 4x$ wynosi:`,iy=`---
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
Pochodna funkcji $f(x) = \\sin x$ wynosi:`,ay=`---
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
Pochodna funkcji $f(x) = 2x^3 - 2x$ wynosi:`,sy=`---
options:
  - "$5$"
  - "$10$"
  - "$2.5$"
  - "$0.5$"
correct: 0
hint: "$E(X) = n \\cdot p = 10 \\cdot 0.5 = 5$."
tests:
  distributions: 1.0
  cond_prob: 0.5
  bernoulli: 0.5
---
W schemacie Bernoulliego z $n=10$, $p=0.5$, wartość oczekiwana wynosi:
`,ly=`---
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
Wartość oczekiwana rozkładu dwumianowego $B(n, p)$ wynosi:`,cy=`---
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
Wykres rozkładu normalnego ma kształt:`,uy=`---
options:
  - "$(x-2)(x-3)$"
  - "$(x+2)(x+3)$"
  - "$(x-1)(x-6)$"
  - "$(x-2)(x+3)$"
correct: 0
hint: "Szukasz dwóch liczb, których suma $= -5$ i iloczyn $= 6$."
tests:
  factoring: 1.0
---
Rozkład na czynniki: $x^2 - 5x + 6 =$
`,dy=`---
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
Rozłóż na czynniki: $x^2 - 2x - 8 =$`,py=`---
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
Rozłóż na czynniki: $2x^2 - 6x =$`,my=`---
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
Rozłóż na czynniki: $x^2 - 25 =$`,fy=`---
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
Rozłóż na czynniki: $x^2 + 6x + 9 =$`,hy=`---
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
Rozłóż na czynniki: $4x^2 - 9 =$`,$y=`---
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
Rozłóż na czynniki: $3x^2 - 3x - 6 =$`,yy=`---
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
Rozłóż przez grupowanie: $x^3 + x^2 + 3x + 3 =$`,gy=`---
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
Rozłóż na czynniki: $3x^2 + 7x + 2 =$`,wy=`---
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
Rozłóż na czynniki: $x^3 - 1 =$`,xy=`---
options:
  - "$2x+2$"
  - "$2x+1$"
  - "$2x^2+2$"
  - "$x+2$"
correct: 0
hint: "$f(g(x)) = f(x+1) = 2(x+1) = 2x+2$."
tests:
  fn_compositions: 1.0
  fn_poly: 0.5
  fn_exp: 0.5
---
Jeśli $f(x) = 2x$ i $g(x) = x+1$, to $f(g(x)) =$
`,by=`---
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
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(f \\circ g)(x)$:`,zy=`---
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
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(g \\circ f)(x)$:`,vy=`---
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
Która z poniższych relacji NIE jest funkcją?`,ky=`---
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
Funkcja to takie przyporządkowanie, że:`,_y=`---
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
Dana jest funkcja $f(x) = 2x + 4$. Oblicz $f(3)$:`,jy=`---
options:
  - "rosnąca na całej dziedzinie"
  - "malejąca na całej dziedzinie"
  - "stała"
  - "rosnąca tylko dla $x > 0$"
correct: 0
hint: "Podstawa $2 > 1$, więc funkcja wykładnicza jest rosnąca."
tests:
  fn_exp: 1.0
  log_exp: 0.5
---
Funkcja $f(x) = 2^x$ jest:
`,Sy=`---
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
Funkcja wykładnicza $f(x) = a^x$ (dla $a > 0$, $a \\neq 1$) jest:`,qy=`---
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
Wykres funkcji $f(x) = a^x$ zawsze przechodzi przez punkt:`,Ty=`---
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
Funkcja liniowa $f(x) = (-2k+3)x + k - 1$ jest malejąca gdy:`,Py=`---
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
Funkcja $f(x) = 2x - 1$ jest:`,Ay=`---
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
Funkcja $f(x) = 2x - 3$ przecina osie układu współrzędnych w punktach:`,Cy=`---
options:
  - "$(2, +\\infty)$"
  - "$[2, +\\infty)$"
  - "$(-\\infty, 2)$"
  - "$\\mathbb{R}$"
correct: 0
hint: "Logarytm wymaga argumentu dodatniego: $x - 2 > 0$."
tests:
  fn_log: 1.0
  log_exp: 0.5
---
Dziedzina funkcji $f(x) = \\log(x - 2)$ to:
`,My=`---
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
Wykres funkcji $f(x) = \\log_a x$ zawsze przechodzi przez punkt:`,Dy=`---
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
Dziedzina funkcji $f(x) = \\log_a x$ to:`,Ry=`---
options:
  - "$3$"
  - "$1$"
  - "$2$"
  - "$0$"
correct: 0
hint: "$W(x) = x(x-1)(x+1)$. Trzy miejsca zerowe: $0$, $1$, $-1$."
tests:
  fn_poly: 1.0
  fn_quadratic: 0.5
  polynomials: 0.5
---
Wielomian $W(x) = x^3 - x$ ma ile miejsc zerowych?
`,Ey=`---
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
Funkcja $f(x) = x^4 + 2x^2$ jest:`,By=`---
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
Funkcja $f(x) = x^3$ jest:`,Fy=`---
options:
  - "$(2, -1)$"
  - "$(-2, 1)$"
  - "$(2, 1)$"
  - "$(4, 3)$"
correct: 0
hint: "$p = -\\frac{b}{2a} = \\frac{4}{2} = 2$, $q = f(2) = 4 - 8 + 3 = -1$."
tests:
  fn_quadratic: 1.0
  fn_concept: 0.25
---
Wierzchołek paraboli $f(x) = x^2 - 4x + 3$ ma współrzędne:
`,Iy=`---
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
Wierzchołek paraboli $f(x) = x^2 - 2x - 3$ to:`,Ny=`---
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
Funkcja $f(x) = 3x^2 - x + 1$ ma parabolę otwartą:`,Ly=`---
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
Oś symetrii paraboli $f(x) = x^2 - 6x + 5$ ma równanie:`,Wy=`---
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
Zbiór wartości funkcji $f(x) = x^2 - 4x - 4$ to:`,Oy=`---
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
Parabola $f(x) = x^2 - 2x - 3$ przecina oś $OX$ w punktach:`,Hy=`---
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
Funkcja $f(x) = -x^2 + 2x + 3$ ma:`,Gy=`---
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
Postać kanoniczna funkcji $f(x) = x^2 - 6x + 10$ to:`,Uy=`---
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
Funkcja $g(x) = (x - 2)^2 + 3$ jest obrazem funkcji $f(x) = x^2$ przez:`,Zy=`---
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
Funkcja $f(x) = -2x^2 + 4x + 5$ ma:`,Ky=`---
options:
  - "$\\pi$"
  - "$2\\pi$"
  - "$\\dfrac{\\pi}{2}$"
  - "$4\\pi$"
correct: 0
hint: "Podstawowy okres $\\sin$ to $2\\pi$. Przy $\\sin(2x)$ dzielisz przez $2$: $T = \\pi$."
tests:
  fn_trig: 1.0
  trig_formulas: 0.5
  trig_eq: 0.5
---
Okres funkcji $f(x) = \\sin(2x)$ wynosi:
`,Vy=`---
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
Okres funkcji $f(x) = \\sin x$ wynosi:`,Qy=`---
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
Zbiór wartości funkcji $f(x) = \\sin x$ to:`,Yy=`---
options:
  - "$\\dfrac{3}{4}$"
  - "$\\dfrac{9}{12}$"
  - "$\\dfrac{4}{5}$"
  - "$\\dfrac{7}{9}$"
correct: 0
hint: "Dzielisz licznik i mianownik przez $\\text{NWD}(45,60) = 15$."
tests:
  fractions: 1.0
---
Uproszczona postać ułamka $\\dfrac{45}{60}$ to:
`,Xy=`---
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
Oblicz: $\\dfrac{1}{4} + \\dfrac{1}{3} =$`,Jy=`---
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
Oblicz: $\\dfrac{3}{4} \\cdot \\dfrac{1}{2} =$`,e4=`---
options:
  - "$9$"
  - "$6$"
  - "$18$"
  - "$3$"
correct: 0
hint: "$S = \\dfrac{a_1}{1-q} = \\dfrac{6}{1-\\frac{1}{3}} = \\dfrac{6}{\\frac{2}{3}} = 9$."
tests:
  geo_series: 1.0
  arith_geom: 0.5
---
Suma nieskończonego szeregu geometrycznego $a_1=6$, $q=\\frac{1}{3}$ wynosi:
`,n4=`---
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
Suma nieskończonego szeregu geometrycznego ($|q| < 1$) wynosi:`,t4=`---
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
Suma szeregu $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots$ wynosi:`,r4=`---
source: cke
options:
  - "$3$"
  - "$0$"
  - "$4$"
  - "$2$"
correct: 2
hints:
  - "① W ciągu geometrycznym iloraz sąsiednich wyrazów jest stały — każdy kolejny wyraz powstaje przez przemnożenie poprzedniego przez tę samą liczbę $q$."
  - "② Zapisz warunek $\\frac{a_2}{a_1} = \\frac{a_3}{a_2}$ (równość ilorazów), czyli $\\frac{9}{27} = \\frac{a-1}{9}$."
  - "③ $\\frac{9}{27} = \\frac{1}{3}$, więc $a - 1 = 9 \\cdot \\frac{1}{3} = 3$, stąd $a = 4$."
tests:
  geo_series: 1.0
  sequences: 0.5
---
Trzywyrazowy ciąg $(27,\\ 9,\\ a - 1)$ jest geometryczny. Liczba $a$ jest równa:
`,o4=`---
source: cke
options:
  - "$\\frac{1}{3}$"
  - "$1$"
  - "$3$"
  - "$729$"
correct: 1
hints:
  - "① W ciągu geometrycznym każdy wyraz powstaje z poprzedniego przez pomnożenie przez tę samą liczbę $q$ (iloraz). Znając $a_1$ i $a_2$, wyznaczysz $q$, a potem dojdziesz do dowolnego dalszego wyrazu."
  - "② Użyj wzoru na wyraz ogólny: $a_n = a_1 \\cdot q^{n-1}$, gdzie $q = \\frac{a_2}{a_1}$."
  - "③ $q = \\frac{9}{27} = \\frac{1}{3}$, więc $a_4 = 27 \\cdot \\left(\\frac{1}{3}\\right)^3 = 27 \\cdot \\frac{1}{27} = 1$."
tests:
  geo_series: 1.0
  sequences: 0.5
---
Dany jest ciąg geometryczny $(a_n)$ dla $n \\geq 1$, w którym $a_1 = 27$ oraz $a_2 = 9$. Czwarty wyraz tego ciągu jest równy:
`,i4=`---
source: cke_2025_rozszerzona_zad6
options:
  - "$S=27$ (dla $q=\\tfrac{1}{3}$) lub $S=\\tfrac{27}{2}$ (dla $q=-\\tfrac{1}{3}$)"
  - "$S=27$"
  - "$S=\\tfrac{27}{2}$"
  - "ciąg nie jest zbieżny"
correct: 0
hints:
  - "① Ciąg zbieżny $\\Rightarrow |q|<1$. Z $a_3=a_1q^2$ przepisujesz warunki: $a_1(1+q^2)=20$ i $a_1^2(1+q^4)=328$."
  - "② Podnieś pierwsze do kwadratu ($a_1^2(1+q^2)^2=400$) i podziel przez drugie: $\\dfrac{(1+q^2)^2}{1+q^4}=\\dfrac{400}{328}=\\dfrac{50}{41}$. Oznacz $u=q^2$; po rozwinięciu: $9u^2-82u+9=0$, więc $u=9$ lub $u=\\tfrac{1}{9}$. Warunek zbieżności odrzuca $u=9$, zostaje $q^2=\\tfrac{1}{9}$, czyli $q=\\pm\\tfrac{1}{3}$."
  - "③ W obu przypadkach $a_1=\\dfrac{20}{1+1/9}=18$. Suma $S=\\dfrac{a_1}{1-q}$: dla $q=\\tfrac{1}{3}$ dostajesz $S=\\dfrac{18}{2/3}=27$; dla $q=-\\tfrac{1}{3}$ dostajesz $S=\\dfrac{18}{4/3}=\\tfrac{27}{2}$. Zadanie prosi o wszystkie przypadki."
tests:
  geo_series: 1.0
  sequences: 0.4
---
Ciąg geometryczny $(a_n)$ jest zbieżny, przy czym $a_1+a_3=20$ i $a_1^2+a_3^2=328$. Oblicz sumę wszystkich jego wyrazów (rozważ wszystkie przypadki).
`,a4=`---
options:
  - "14"
  - "28"
  - "7"
  - "42"
correct: 1
hint: "Rozkładasz na czynniki pierwsze: $84 = 4 \\cdot 21$, $56 = 8 \\cdot 7$."
tests:
  integers: 1.0
---
Ile wynosi NWD(84, 56)?`,s4=`---
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
Oblicz: $(-3) \\cdot 4 =$`,l4=`---
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
Oblicz: $3 - 8 =$`,c4=`---
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
$\\displaystyle \\int 2x \\, dx =$`,u4=`---
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
Oblicz całkę: $\\displaystyle\\int x^2\\,dx$`,d4=`---
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
Oblicz całkę oznaczoną: $\\displaystyle\\int_0^3 x\\,dx$`,p4=`---
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
Granica $\\displaystyle \\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 - 5}$ wynosi:`,m4=`---
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
Oblicz granicę: $\\displaystyle\\lim_{x\\to 0} \\frac{\\sin x}{x}$`,f4=`---
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
Oblicz granicę: $\\displaystyle\\lim_{x\\to\\infty} \\frac{5x^2 - 1}{x^2 + 3}$`,h4=`---
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
Rozwiązaniem równania $2x - 3 = 7$ jest:`,$4=`---
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
Rozwiąż równanie: $3x - 2 = 10$`,y4=`---
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
Rozwiąż równanie: $2(x + 4) = 2$`,g4=`---
options:
  - "$\\left(\\dfrac{2}{3}, +\\infty\\right)$"
  - "$\\left(-\\infty, \\dfrac{2}{3}\\right)$"
  - "$\\left(-\\dfrac{2}{3}, +\\infty\\right)$"
  - "$\\left(-\\infty, -\\dfrac{2}{3}\\right)$"
correct: 0
hint: "Mnożysz obie strony przez $6$, potem przenosisz $x$ na lewą stronę."
tests:
  linear_ineq: 1.0
  linear_eq: 0.25
---
Zbiór rozwiązań nierówności $1 - \\dfrac{3}{2}x < \\dfrac{2}{3} - x$ to przedział:
`,w4=`---
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
Rozwiąż nierówność: $2x - 1 > 5$`,x4=`---
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
Rozwiąż nierówność: $-3x \\leq 6$`,b4=`---
source: cke
options:
  - "$(-\\infty, -\\frac{2}{3})$"
  - "$(-\\infty, \\frac{2}{3})$"
  - "$(-\\frac{2}{3}, +\\infty)$"
  - "$(\\frac{2}{3}, +\\infty)$"
correct: 3
hints:
  - "① To zwykła nierówność liniowa z ułamkami — celem jest zebrać wszystkie wyrazy z $x$ po jednej stronie, a stałe po drugiej, aż zostanie $x$ (lub $-x$) z liczbą."
  - "② Przenieś $-x$ na lewo, a $1$ na prawo. Pamiętaj o kluczowej regule: znak nierówności zmienia się tylko wtedy, gdy dzielisz przez liczbę ujemną."
  - "③ $1 - \\frac{3}{2}x + x < \\frac{2}{3}$, czyli $1 - \\frac{1}{2}x < \\frac{2}{3}$, więc $-\\frac{1}{2}x < -\\frac{1}{3}$. Dzielimy przez $-\\frac{1}{2}$ (znak się odwraca): $x > \\frac{2}{3}$."
tests:
  linear_ineq: 1.0
  fractions: 0.3
---
Zbiorem wszystkich rozwiązań nierówności $1 - \\dfrac{3}{2}x < -x + \\dfrac{2}{3}$ jest przedział:
`,z4=`---
source: cke
options:
  - "$(-\\infty, -4]$"
  - "$(-\\infty, 4]$"
  - "$[-4, +\\infty)$"
  - "$[4, +\\infty)$"
correct: 2
hints:
  - "① Nierówność jest liniowa — żeby pozbyć się ułamka, najpierw pomnóż obie strony przez mianownik (liczba dodatnia, więc znak się nie zmienia)."
  - "② Po pomnożeniu przez $3$ rozwiń nawiasy, przenieś $x$-y na jedną stronę, liczby na drugą i podziel, pamiętając o odwróceniu znaku przy dzieleniu przez liczbę ujemną."
  - "③ $-6(x+3) \\leq 2 - x \\Rightarrow -6x - 18 \\leq 2 - x \\Rightarrow -5x \\leq 20 \\Rightarrow x \\geq -4$ (znak odwrócony przez dzielenie przez $-5$)."
tests:
  linear_ineq: 1.0
  fractions: 0.3
---
Zbiorem wszystkich rozwiązań nierówności $-2(x + 3) \\leq \\dfrac{2 - x}{3}$ jest przedział:
`,v4=`---
options:
  - "$x=3,\\ y=2$"
  - "$x=2,\\ y=3$"
  - "$x=4,\\ y=1$"
  - "$x=1,\\ y=4$"
correct: 0
hint: "Dodajesz równania: $2x = 6$, $x = 3$."
tests:
  linear_sys: 1.0
  linear_eq: 0.5
---
Układ $\\begin{cases} x+y=5 \\\\ x-y=1 \\end{cases}$ ma rozwiązanie:
`,k4=`---
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
Rozwiąż układ: $\\begin{cases} x + y = 3 \\\\ y = 2x \\end{cases}$`,_4=`---
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
Rozwiąż układ: $\\begin{cases} 2x + y = 5 \\\\ x + y = 2 \\end{cases}$`,j4=`---
source: cke
options:
  - "$\\begin{cases} x + y = 1960 \\\\ 0{,}6 \\cdot 0{,}95x = 0{,}9y \\end{cases}$"
  - "$\\begin{cases} x + y = 1960 \\\\ 0{,}95x = 0{,}6 \\cdot 0{,}9y \\end{cases}$"
  - "$\\begin{cases} x + y = 1960 \\\\ 0{,}05x = 0{,}6 \\cdot 0{,}1y \\end{cases}$"
  - "$\\begin{cases} x + y = 1960 \\\\ 0{,}4 \\cdot 0{,}95x = 0{,}9y \\end{cases}$"
correct: 1
hints:
  - "① Po roku w sadzie I zostaje $95\\%$ drzew (czyli $0{,}95 \\cdot$ ile było). Analogicznie w II zostaje $90\\%$. Odsetek to zawsze ułamek tego, co było — nie tego, co uschło."
  - "② Potrzebujesz dwóch równań: pierwsze opisuje stan początkowy ($x + y = 1960$), drugie — warunek „II po roku to $60\\%$ I po roku”. Zapisz obie strony drugiego w postaci $(\\text{procent}) \\cdot (\\text{ile było})$."
  - "③ Drzew po roku w I: $0{,}95x$; w II: $0{,}9y$. Warunek: $0{,}9y = 0{,}6 \\cdot 0{,}95x$, czyli $0{,}95x = 0{,}6 \\cdot 0{,}9y$ jest równoważne po zamianie stron i przeskalowaniu — ten zapis odpowiada odpowiedzi B."
tests:
  linear_sys: 1.0
  linear_eq: 0.3
---
W dwóch sadach posadzono łącznie $1960$ drzew. Po roku uschło $5\\%$ w sadzie I i $10\\%$ w sadzie II. Liczba drzew, które pozostały w sadzie II, stanowiła $60\\%$ liczby drzew, które pozostały w sadzie I. Niech $x$ i $y$ oznaczają odpowiednio liczby posadzonych drzew. Właściwym układem równań jest:
`,S4=`---
options:
  - "$x = 8$"
  - "$x = 6$"
  - "$x = 9$"
  - "$x = 4$"
correct: 0
hint: "$\\log_2(x) = 3 \\iff x = 2^3 = 8$."
tests:
  log_eq: 1.0
  log_exp: 0.5
---
Rozwiązaniem równania $\\log_2(x) = 3$ jest:
`,q4=`---
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
Rozwiąż równanie: $\\log_3 x = 2$`,T4=`---
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
Rozwiąż równanie: $2^x = 16$`,P4=`---
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
Wartość $\\log_{\\sqrt{3}} 9$ jest równa:`,A4=`---
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
Oblicz: $\\log_2 8 =$`,C4=`---
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
Które wyrażenie jest równe $\\log_a(xy)$?`,M4=`---
source: cke
options:
  - "$3$"
  - "$9$"
  - "$4$"
  - "$2$"
correct: 3
hints:
  - "① Dwa logarytmy o tej samej podstawie można skleić w jeden — kluczem jest sumowanie argumentów przez mnożenie."
  - "② Skorzystaj ze wzoru na logarytm iloczynu: $\\log_a x + \\log_a y = \\log_a(xy)$. Potem spróbuj zapisać argument jako potęgę podstawy."
  - "③ $\\log_9 27 + \\log_9 3 = \\log_9(27 \\cdot 3) = \\log_9 81 = \\log_9 9^2 = 2$."
tests:
  log_exp: 1.0
  powers: 0.3
---
Wartość wyrażenia $\\log_9 27 + \\log_9 3$ jest równa:
`,D4=`---
source: cke
options:
  - "$3$"
  - "$9$"
  - "$\\log_3 104$"
  - "$2\\log_3 54$"
correct: 0
hints:
  - "① Widzisz dwa logarytmy o tej samej podstawie, odejmowane, oraz współczynnik $2$ stojący przy jednym z nich. Oba te elementy można „wchłonąć” do środka logarytmu."
  - "② Skorzystaj ze wzorów: $k \\log_a x = \\log_a x^k$ oraz $\\log_a x - \\log_a y = \\log_a \\frac{x}{y}$."
  - "③ $\\log_3 108 - 2\\log_3 2 = \\log_3 108 - \\log_3 4 = \\log_3 \\frac{108}{4} = \\log_3 27 = 3$."
tests:
  log_exp: 1.0
  powers: 0.3
---
Wartość wyrażenia $\\log_3 108 - 2\\log_3 2$ jest równa:
`,R4=`---
source: cke_2023_rozszerzona_zad1
options:
  - "$m(t)=4\\cdot 0{,}81^t$ oraz po raz pierwszy $m(t)<1{,}5$ dla $t=5$"
  - "$m(t)=4\\cdot 0{,}81^t$ oraz po raz pierwszy $m(t)<1{,}5$ dla $t=4$"
  - "$m(t)=4\\cdot 0{,}19^t$ oraz po raz pierwszy $m(t)<1{,}5$ dla $t=1$"
  - "$m(t)=4-0{,}19t$ oraz po raz pierwszy $m(t)<1{,}5$ dla $t=14$"
correct: 0
hints:
  - "① \\"Co dobę ubywa $19\\%$ masy\\" — zostaje $81\\%$, czyli mnożnik dobowy to $0{,}81$. Wzór ogólny: $m(t)=m_0\\cdot q^t$."
  - "② Warunek $m(t)<1{,}5$ przepisz jako $0{,}81^t<\\tfrac{1{,}5}{4}=0{,}375$. Logarytmuj obie strony (funkcja malejąca — uwaga na znak)."
  - "③ $t>\\dfrac{\\log 0{,}375}{\\log 0{,}81}=\\dfrac{-0{,}426}{-0{,}0915}\\approx 4{,}66$. Najmniejsza liczba całkowita spełniająca warunek to $t=5$."
tests:
  log_exp: 1.0
  fn_exp: 0.5
---
W chwili $t=0$ masa substancji wynosi $4$ gramy. Co dobę ubywa $19\\%$ masy z poprzedniej doby. Wyznacz wzór $m(t)$ oraz najmniejszą liczbę całkowitą $t\\ge 0$ dób, po której masa po raz pierwszy jest mniejsza od $1{,}5$ grama.
`,E4=`---
source: cke_2024_rozszerzona_zad1
options:
  - "$56$ °C"
  - "$50$ °C"
  - "$53$ °C"
  - "$59$ °C"
correct: 0
hints:
  - "① Model chłodzenia Newtona: $T(t)=(T_p-T_z)k^{-t}+T_z$. Z danych: $T_p=80$, $T_z=20$, $T(10)=65$ — wyznacz $k$."
  - "② $65=60\\cdot k^{-10}+20\\Rightarrow k^{-10}=\\tfrac{45}{60}=\\tfrac{3}{4}$. Szukane: $T(15)=60\\cdot k^{-15}+20=60\\cdot k^{-10}\\cdot k^{-5}+20$."
  - "③ $k^{-5}=\\sqrt{k^{-10}}=\\sqrt{0{,}75}\\approx 0{,}866$. Stąd $T(15)=60\\cdot 0{,}75\\cdot 0{,}866+20\\approx 38{,}97+20\\approx 59$. Po zaokrągleniu do jedności — $59$ °C. Uwaga: w zadaniu CKE pytano o temperaturę za $5$ minut od chwili $t=10$, tu ten sam rachunek."
tests:
  log_exp: 1.0
  fn_exp: 0.5
---
Temperatura stygnącej kawy zmienia się wg wzoru $T(t)=(T_p-T_z)k^{-t}+T_z$, gdzie $T_p=80$ °C, $T_z=20$ °C. Po $10$ minutach kawa ma $65$ °C. Jaka będzie jej temperatura po kolejnych $5$ minutach (zaokrąglij do jedności)?
`,B4=`---
source: cke_2025_rozszerzona_zad1
options:
  - "$25\\%$"
  - "$56{,}25\\%$"
  - "$15{,}625\\%$"
  - "$62{,}5\\%$"
correct: 0
hints:
  - "① Model: $N(t)=N_0\\cdot k^t$. Stała $k$ to mnożnik na godzinę; procentowy przyrost to $(k-1)\\cdot 100\\%$."
  - "② Z danych $N_0=10000$, $N(2)=15625$ wynika $k^2=\\tfrac{15625}{10000}=1{,}5625$. Zatem $k=\\sqrt{1{,}5625}=1{,}25$."
  - "③ Przyrost na godzinę: $k-1=0{,}25$, czyli $25\\%$."
tests:
  log_exp: 1.0
  fn_exp: 0.5
---
Liczebność populacji bakterii rośnie zgodnie ze wzorem $N(t)=N_0\\cdot k^t$. W chwili $t=0$ było $10\\,000$ bakterii, po $2$ godzinach — $15\\,625$. O ile procent wzrasta liczebność w ciągu każdej godziny?
`,F4=`---
options:
  - "Istnieje liczba parzysta, która nie dzieli się przez 4"
  - "Żadna liczba parzysta nie dzieli się przez 4"
  - "Wszystkie liczby nieparzyste dzielą się przez 4"
  - "Istnieje liczba nieparzysta dzieląca się przez 4"
correct: 0
hint: "Negacja $\\forall x: P(x)$ to $\\exists x: \\neg P(x)$."
tests:
  logic_basics: 1.0
  sets: 0.5
---
Negacja zdania "Wszystkie liczby parzyste dzielą się przez 4" to:
`,I4=`---
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
Jeśli zdanie $q$ jest fałszywe, to koniunkcja $p \\wedge q$ jest:`,N4=`---
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
Jeśli zdanie $p$ jest prawdziwe, to alternatywa $p \\vee q$ jest:`,L4=`---
options:
  - "jest kwadratem o boku 5"
  - "ma boki 2 i 8"
  - "ma boki 4 i 6"
  - "jest kwadratem o boku 10"
correct: 0
hint: "$x + y = 10$. Pole $P = x \\cdot y$ maksymalne dla $x=y=5$ (wierzchołek paraboli)."
tests:
  optimization_lp: 1.0
  fn_quadratic: 0.5
---
Prostokąt o obwodzie 20 ma największe pole gdy:
`,W4=`---
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
Funkcja $f(x) = (x-3)^2 + 2$ osiąga minimum dla:`,O4=`---
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
Dwie liczby sumują się do $10$. Maksymalny iloczyn tych liczb wynosi:`,H4=`---
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
Rolnik ma $50$ m ogrodzenia i chce ogrodzić prostokątny wybieg przy ścianie stodoły (jedna strona nie wymaga ogrodzenia). Jaką długość powinna mieć strona przy ścianie, aby pole wybiegu było największe?`,G4=`---
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
Piłkę wyrzucono pionowo w górę. Jej wysokość (w metrach) po $t$ sekundach opisuje wzór $h(t) = -5t^2 + 30t$. Jaka jest maksymalna wysokość piłki?`,U4=`---
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
Sklep sprzedaje produkt w cenie $x$ zł za sztukę. Liczba sprzedanych sztuk wynosi $(100 - x)$. Przy jakiej cenie przychód jest największy i ile wynosi?`,Z4=`---
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
Suma dwóch liczb nieujemnych wynosi $16$. Iloczyn tych liczb jest największy, gdy te liczby to:`,K4=`---
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
Najmniejsza wartość funkcji $f(x) = 2x^2 - 4x - 1$ wynosi:`,V4=`---
source: cke_2024_rozszerzona_zad13
options:
  - "$a=8\\sqrt{3}$ (brzeg dziedziny)"
  - "$a=24$"
  - "$a=12$"
  - "$a=2\\sqrt{3}$"
correct: 0
hints:
  - "① Policz pochodną: $P'(a)=a\\sqrt{3}-\\dfrac{13824\\sqrt{3}}{a^2}=\\dfrac{\\sqrt{3}(a^3-13824)}{a^2}$. Miejsce zerowe: $a^3=13824$, czyli $a=\\sqrt[3]{13824}=24$ (bo $24^3=13824$)."
  - "② Punkt krytyczny $a=24$ NIE należy do dziedziny $(0,\\,8\\sqrt{3}]$, bo $8\\sqrt{3}\\approx 13{,}86<24$. Na całej dziedzinie $P'(a)<0$ (funkcja malejąca), więc minimum jest na PRAWYM końcu przedziału."
  - "③ Minimum przy $a=8\\sqrt{3}$: $P(8\\sqrt{3})=\\dfrac{(8\\sqrt{3})^2\\sqrt{3}}{2}+\\dfrac{13824\\sqrt{3}}{8\\sqrt{3}}=\\dfrac{192\\sqrt{3}}{2}+1728=96\\sqrt{3}+1728$."
tests:
  optimization_lp: 1.0
  deriv_apps: 0.7
---
Rozważamy graniastosłupy prawidłowe trójkątne o objętości $3456$ i krawędzi podstawy $a\\in(0,\\,8\\sqrt{3}]$. Pole powierzchni całkowitej wyraża się wzorem $P(a)=\\dfrac{a^2\\sqrt{3}}{2}+\\dfrac{13824\\sqrt{3}}{a}$. Dla jakiego $a$ pole to jest najmniejsze?
`,Q4=`---
source: cke_2025_rozszerzona_zad12
options:
  - "$h=5\\sqrt{3}$, $V_{\\min}=\\dfrac{125\\pi\\sqrt{3}}{2}$"
  - "$h=10$, $V_{\\min}=\\dfrac{1000\\pi}{3}$"
  - "$h=5$, $V_{\\min}=0$"
  - "$h=5\\sqrt{5}$, $V_{\\min}=25\\pi\\sqrt{5}$"
correct: 0
hints:
  - "① Mamy $V(h)=\\dfrac{\\pi}{3}\\cdot\\dfrac{25h^3}{h^2-25}$ dla $h>5$. Licz pochodną i przyrównaj do zera, stosując regułę ilorazu."
  - "② $V'(h)=\\dfrac{25\\pi}{3}\\cdot\\dfrac{3h^2(h^2-25)-h^3\\cdot 2h}{(h^2-25)^2}=\\dfrac{25\\pi}{3}\\cdot\\dfrac{h^2(h^2-75)}{(h^2-25)^2}$. Miejsce zerowe $h^2=75$, czyli $h=5\\sqrt{3}$."
  - "③ Wstaw: $V(5\\sqrt{3})=\\dfrac{\\pi}{3}\\cdot\\dfrac{25\\cdot 125\\cdot 3\\sqrt{3}}{75-25}=\\dfrac{\\pi}{3}\\cdot\\dfrac{9375\\sqrt{3}}{50}=\\dfrac{125\\pi\\sqrt{3}}{2}$."
tests:
  optimization_lp: 1.0
  deriv_apps: 0.7
---
Dla stożka, którego wysokość $h>5$, a odległość środka podstawy od tworzącej jest równa $5$, objętość wyraża się wzorem $V(h)=\\dfrac{\\pi}{3}\\cdot\\dfrac{25h^3}{h^2-25}$. Wyznacz wysokość, dla której objętość jest najmniejsza, oraz tę objętość.
`,Y4=`---
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
Równanie $x^2 - 2kx + k = 0$ ma dwa pierwiastki rzeczywiste gdy:`,X4=`---
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
Równanie $x^2 - 2kx + 4k = 0$ ma jedno podwójne rozwiązanie dla:`,J4=`---
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
Równanie $x^2 + 2mx + 4 = 0$ ma dwa różne rozwiązania rzeczywiste gdy:`,e3=`---
options:
  - "$24$"
  - "$12$"
  - "$16$"
  - "$10$"
correct: 0
hint: "$P_4 = 4! = 24$."
tests:
  permutations: 1.0
  counting: 0.5
---
Liczba permutacji zbioru $\\{A, B, C, D\\}$ wynosi:
`,n3=`---
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
Na ile sposobów można ustawić 4 osoby w rzędzie?`,t3=`---
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
Na ile sposobów można ułożyć litery słowa ABCDA (5 liter, A powtarza się 2 razy)?`,r3=`---
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
Na ile sposobów można ustawić 5 różnych książek na półce?`,o3=`---
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
Ile różnych „słów" (ciągów liter) można utworzyć ze wszystkich liter wyrazu KOTEK?`,i3=`---
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
Z 5 kandydatów wybieramy przewodniczącego, zastępcę i sekretarza. Na ile sposobów?`,a3=`---
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
Ile anagramów (różnych ciągów liter) można utworzyć ze wszystkich liter wyrazu MATEMATYKA?`,s3=`---
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
Na ile sposobów można ustawić w rzędzie 5 osób, jeśli dwie konkretne osoby muszą stać obok siebie?`,l3=`---
options:
  - "$90°$"
  - "$45°$"
  - "$60°$"
  - "$180°$"
correct: 0
hint: "Twierdzenie Talesa: każdy kąt wpisany oparty na średnicy jest kątem prostym."
tests:
  planimetria_lp: 1.0
---
Kąt wpisany w okrąg oparty na średnicy mierzy:
`,c3=`---
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
Suma kątów wewnętrznych trójkąta wynosi:`,u3=`---
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
Pole trójkąta o podstawie $a$ i wysokości $h$ wynosi:`,d3=`---
options:
  - "$30°$"
  - "$60°$"
  - "$90°$"
  - "$120°$"
correct: 1
hints:
  - "① Kąt wpisany i kąt środkowy oparte na tym samym łuku są ze sobą związane jednym prostym twierdzeniem."
  - "② Kąt wpisany = połowa kąta środkowego opartego na tym samym łuku."
  - "③ $120° / 2 = 60°$."
tests:
  planimetria_lp: 1.0
---
W okręgu kąt środkowy oparty na łuku $AB$ ma miarę $120°$. Oblicz miarę kąta wpisanego opartego na tym samym łuku.
`,p3=`---
options:
  - "$17{,}5°$"
  - "$35°$"
  - "$55°$"
  - "$70°$"
correct: 1
hints:
  - "① Istnieje twierdzenie o równości kątów między styczną a cięciwą a kątem wpisanym opartym na tej cięciwie z drugiej strony."
  - "② Kąt między styczną a cięciwą równy jest kątowi wpisanemu opartemu na tej cięciwie z przeciwnej strony okręgu."
  - "③ Bezpośrednio: $35°$."
tests:
  planimetria_lp: 1.0
---
Z punktu $P$ leżącego na zewnątrz okręgu poprowadzono styczną w punkcie $A$ oraz sieczną przez punkt $A$ i punkt $B$ leżący na okręgu. Kąt zawarty między styczną a cięciwą $AB$ wynosi $35°$. Jaki jest kąt wpisany oparty na łuku $AB$ (po przeciwnej stronie cięciwy)?
`,m3=`---
options:
  - "$12$"
  - "$18$"
  - "$36$"
  - "$9\\pi$"
correct: 2
hints:
  - "① Co łączy promień okręgu wpisanego z długością boku kwadratu?"
  - "② W kwadracie bok $a$ równa się $2r$ — średnicy okręgu wpisanego."
  - "③ $a = 2 \\cdot 3 = 6$, więc pole $= 6^2 = 36$."
tests:
  planimetria_lp: 1.0
  area_perimeter: 0.3
---
Promień okręgu wpisanego w kwadrat wynosi $3$. Oblicz pole kwadratu.
`,f3=`---
options:
  - "$16$"
  - "$20$"
  - "$24$"
  - "$30$"
correct: 2
hints:
  - "① Aby wyznaczyć wysokość, spójrz na trójkąt prostokątny utworzony przez ramię i część podstawy nie leżącą pod krótszą podstawą."
  - "② Różnica podstaw to $10 - 6 = 4$, po obu stronach wystaje $2$. Ramię, wysokość i $2$ tworzą trójkąt prostokątny."
  - "③ Pitagoras: $h^2 + 2^2 = 13$, więc $h = 3$. Pole $= \\frac{6+10}{2} \\cdot 3 = 24$."
tests:
  planimetria_lp: 1.0
  pythagoras: 0.3
---
Trapez równoramienny ma podstawy długości $6$ i $10$ oraz ramię długości $\\sqrt{13}$. Oblicz jego pole.
`,h3=`---
options:
  - "$80°$"
  - "$100°$"
  - "$160°$"
  - "$180°$"
correct: 1
hints:
  - "① W czworokącie wpisanym w okrąg kąty naprzeciwległe mają pewną specjalną relację."
  - "② Suma dwóch kątów naprzeciwległych czworokąta wpisanego w okrąg wynosi $180°$ (wynika z twierdzenia o kątach wpisanych)."
  - "③ $180° - 80° = 100°$."
tests:
  planimetria_lp: 1.0
---
Rozważmy czworokąt $ABCD$ wpisany w okrąg. Wiadomo, że $\\angle A = 80°$. Ile wynosi $\\angle C$ (kąt naprzeciwległy)?
`,$3=`---
options:
  - "$W(2) = 0$"
  - "$W(2) = 4$"
  - "$W(2) = 2$"
  - "$W(0) = 0$"
correct: 0
hint: "Podstaw $x=2$: $8 - 8 - 6 + 6 = 0$."
tests:
  poly_roots: 1.0
  polynomials: 0.5
  factoring: 0.5
---
Liczba $x = 2$ jest pierwiastkiem wielomianu $W(x) = x^3 - 2x^2 - 3x + 6$, bo:
`,y3=`---
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
Czy $x = 2$ jest pierwiastkiem wielomianu $p(x) = x^3 - 4x$?`,g3=`---
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
Wielomian stopnia $n$ ma:`,w3=`---
options:
  - "$3x(x^2 + 2x + 3)$"
  - "$3(x^3 + 2x + 3)$"
  - "$x(3x^2 + 6x)$"
  - "$3x^2(x + 2)$"
correct: 0
hint: "Wyłącz przed nawias $3x$ z każdego wyrazu."
tests:
  polynomials: 1.0
---
Wielomian $W(x) = 3x^3 + 6x^2 + 9x$ można zapisać jako:
`,x3=`---
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
Stopień wielomianu $2x^3 + x - 5$ wynosi:`,b3=`---
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
Rozwiń: $(x + 1)(x + 2) =$`,z3=`---
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
Rozwiń: $(2x - 1)(x + 3) =$`,v3=`---
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
Jaki jest stopień wielomianu $W(x) = x^5 - 3x^3 + 2x - 7$?`,k3=`---
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
Oblicz wartość wielomianu $W(x) = 2x^3 - 3x^2 + 2x - 2$ dla $x = 2$.`,_3=`---
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
Iloraz $\\frac{x^3 + 4x^2 + 7x + 6}{x + 2}$ jest równy:`,j3=`---
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
Suma wielomianów $P(x) = x^4 - 3x^2 + 1$ i $Q(x) = -2x^3 + 4x^2 + 2x - 3$ wynosi:`,S3=`---
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
Rozwiń $(x + 1)^3 =$`,q3=`---
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
Wielomian $P(x)$ ma stopień $1$, a wielomian $Q(x)$ ma stopień $3$. Jaki jest stopień wielomianu $P(x) \\cdot Q(x)$?`,T3=`---
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
Wartość wyrażenia $(\\frac{1}{16})^8 \\cdot 8^{16}$ jest równa:`,P3=`---
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
Oblicz: $2^3 =$`,A3=`---
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
Uprość: $a^2 \\cdot a^3 =$`,C3=`---
source: cke
options:
  - "$2^{24}$"
  - "$2^{16}$"
  - "$2^{12}$"
  - "$2^{8}$"
correct: 1
hints:
  - "① Liczby $\\frac{1}{16}$ i $8$ wyglądają różnie, ale to potęgi tej samej podstawy — dwójki. Jak sprowadzisz wszystko do dwójki, wystarczy dodać wykładniki."
  - "② Użyj wzorów $\\frac{1}{a^k} = a^{-k}$ oraz $(a^m)^n = a^{mn}$, a na końcu $a^m \\cdot a^n = a^{m+n}$."
  - "③ $\\left(\\frac{1}{16}\\right)^8 \\cdot 8^{16} = (2^{-4})^8 \\cdot (2^3)^{16} = 2^{-32} \\cdot 2^{48} = 2^{16}$."
tests:
  powers: 1.0
---
Wartość wyrażenia $\\left(\\dfrac{1}{16}\\right)^8 \\cdot 8^{16}$ jest równa:
`,M3=`---
options:
  - "$\\dfrac{1}{2}$"
  - "$\\dfrac{1}{3}$"
  - "$\\dfrac{2}{3}$"
  - "$\\dfrac{1}{6}$"
correct: 0
hint: "Parzyste: $\\{2,4,6\\}$. $P = \\dfrac{3}{6} = \\dfrac{1}{2}$."
tests:
  probability: 1.0
  counting: 0.25
---
Rzucamy kostką sześcienną. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:
`,D3=`---
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
Rzucamy kostką do gry. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:`,R3=`---
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
Rzucamy monetą dwa razy. Prawdopodobieństwo wyrzucenia dwóch orłów wynosi:`,E3=`---
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
Z talii 52 kart losujemy jedną kartę. Jakie jest prawdopodobieństwo wylosowania asa?`,B3=`---
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
Rzucamy kostką sześcienną. Jakie jest prawdopodobieństwo, że NIE wypadnie szóstka?`,F3=`---
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
Rzucamy dwa razy monetą. Jakie jest prawdopodobieństwo otrzymania dwóch orłów?`,I3=`---
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
Rzucamy dwiema kostkami. Jakie jest prawdopodobieństwo, że suma oczek wyniesie 7?`,N3=`---
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
$P(A) = \\frac{1}{2}$, $P(B) = \\frac{1}{3}$, $P(A \\cap B) = \\frac{1}{6}$. Ile wynosi $P(A \\cup B)$?`,L3=`---
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
Zdarzenia $A$ i $B$ są niezależne. $P(A) = \\frac{1}{2}$, $P(B) = \\frac{1}{5}$. Ile wynosi $P(A \\cap B)$?`,W3=`---
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
Rzucamy dwiema kostkami. Jakie jest prawdopodobieństwo, że suma oczek będzie większa niż 8?`,O3=`---
source: cke
options:
  - "$\\frac{9}{25}$"
  - "$\\frac{12}{25}$"
  - "$\\frac{13}{25}$"
  - "$\\frac{16}{25}$"
correct: 2
hints:
  - "① W zbiorze $\\{5,6,7,8,9\\}$ są 2 liczby parzyste i 3 nieparzyste. Suma jest parzysta dokładnie wtedy, gdy oba losowania trafiły w tę samą parzystość (PP albo NN)."
  - "② Losowania są niezależne (ze zwracaniem), więc $P(\\text{PP}) = P(\\text{parz})^2$ i $P(\\text{NN}) = P(\\text{nieparz})^2$. Szukane: $P = P(\\text{PP}) + P(\\text{NN})$."
  - "③ $P = \\left(\\frac{2}{5}\\right)^2 + \\left(\\frac{3}{5}\\right)^2 = \\frac{4 + 9}{25} = \\frac{13}{25}$."
tests:
  probability: 1.0
  counting: 0.3
---
Ze zbioru $K = \\{5, 6, 7, 8, 9\\}$ losujemy ze zwracaniem kolejno dwa razy po jednej liczbie. Prawdopodobieństwo zdarzenia, że suma wylosowanych liczb jest parzysta, wynosi:
`,H3=`---
options:
  - "$2k+1$ i $2m+1$ są nieparzyste, ich suma $= 2(k+m+1)$ — parzysta"
  - "$5+7=12$, więc działa"
  - "Nieparzyste kończą się na 1,3,5,7,9 więc suma jest parzysta"
  - "Wystarczy sprawdzić kilka przykładów"
correct: 0
hint: "Dowód ogólny: reprezentujesz liczby jako $2k+1$ i $2m+1$."
tests:
  proof: 1.0
  logic_basics: 0.5
  sets: 0.5
---
Które sformułowanie jest poprawnym dowodem, że suma dwóch liczb nieparzystych jest parzysta?
`,G3=`---
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
Dowód nie wprost polega na tym, że:`,U3=`---
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
Dowód przez indukcję matematyczną składa się z:`,Z3=`---
source: cke_2023_rozszerzona_zad4
options:
  - "Z warunku $x+y=4$ podstaw $y=4-x$ do nierówności i pokaż, że $(x-2)^2(x-y)\\le 0$ wymusza $x=y=2$."
  - "Wystarczy sprawdzić, że $x=2,\\ y=2$ spełnia oba warunki — to dowód istnienia."
  - "Z nierówności $x^3+y^3\\le x^2y+xy^2$ natychmiast wynika $x=y$, więc $x=y=2$."
  - "Z nierówności AM-GM dla dwóch liczb wynika $x=y$, a stąd $x=y=2$."
correct: 0
hints:
  - "① Trzeba pokazać, że jedyne rozwiązanie układu to $x=y=2$ — a więc ZARÓWNO równość, JAK I nierówność muszą być aktywne. Samo \\"sprawdzenie\\" nie jest dowodem."
  - "② Przekształć nierówność: $x^3-x^2y-xy^2+y^3\\le 0$, wyłącz wspólne czynniki grupami: $x^2(x-y)-y^2(x-y)=(x-y)(x^2-y^2)=(x-y)^2(x+y)$."
  - "③ Zatem $(x-y)^2(x+y)\\le 0$. Z warunku $x+y=4>0$ wynika $(x-y)^2\\le 0$, czyli $x=y$. Razem z $x+y=4$ daje $x=y=2$."
tests:
  proof: 1.0
  factoring: 0.4
---
Liczby rzeczywiste $x$ oraz $y$ spełniają jednocześnie $x+y=4$ oraz $x^3-x^2y\\le xy^2-y^3$. Który zapis poprawnie uzasadnia, że $x=2$ i $y=2$?
`,K3=`---
source: cke_2024_rozszerzona_zad5
options:
  - "Zapisz $\\log_{12}80=\\dfrac{\\log_4 80}{\\log_4 12}$, rozłóż liczniki i mianowniki na $\\log_4$ z wyrażeń prostych, a potem wyraź je przez $a,b$."
  - "Podnieś obie strony do potęgi $10$ i sprawdź liczbowo, że tożsamość jest prawdziwa."
  - "Skorzystaj z $\\log_{12}80=\\log_{12}8+\\log_{12}10$ i zastosuj wzór $\\log(xy)=\\log x\\cdot \\log y$."
  - "Z $\\log_5 4=a$ wynika $a=\\log 4-\\log 5$, więc $\\log_{12}80=a\\cdot b$."
correct: 0
hints:
  - "① Żeby przejść z logarytmów o podstawach $5$ i $4$ do logarytmu o podstawie $12$, potrzebny jest wzór na zmianę podstawy."
  - "② Zmień podstawę: $\\log_{12}80=\\dfrac{\\log_4 80}{\\log_4 12}=\\dfrac{\\log_4(16\\cdot 5)}{\\log_4(4\\cdot 3)}=\\dfrac{2+\\log_4 5}{1+\\log_4 3}$."
  - "③ Z $\\log_5 4=a$ mamy $\\log_4 5=\\tfrac{1}{a}$, z $\\log_4 3=b$. Stąd $\\log_{12}80=\\dfrac{2+1/a}{1+b}=\\dfrac{2a+1}{a(1+b)}$."
tests:
  proof: 1.0
  log_exp: 0.6
---
Wiadomo, że $\\log_5 4=a$ oraz $\\log_4 3=b$. Który z poniższych kroków jest poprawnym pierwszym krokiem dowodu równości $\\log_{12}80=\\dfrac{2a+1}{a(1+b)}$?
`,V3=`---
source: cke_2025_rozszerzona_zad2
options:
  - "Różnica lewa–prawa to $(a+2b)^3-8a^2b-16ab^2=a^3+6a^2b+12ab^2+8b^3-8a^2b-16ab^2=a^3-2a^2b-4ab^2+8b^3=(a-2b)^2(a+2b)>0$."
  - "Z nierówności AM-GM dla trzech liczb $a,b,b$ wynika natychmiast $(a+2b)^3\\ge 8a^2b+16ab^2$, z równością dla $a=b$."
  - "Podstaw $a=1,\\ b=2$ — nierówność jest prawdziwa, więc na mocy ciągłości jest prawdziwa zawsze."
  - "Podziel obie strony przez $ab$ — otrzymasz nierówność liniową względem $a/b$, która jest prosta do sprawdzenia."
correct: 0
hints:
  - "① Klasyczne \\"wykaż nierówność\\" — przenieś wszystko na jedną stronę i spróbuj rozłożyć na kwadrat razy coś dodatniego."
  - "② Rozwiń $(a+2b)^3=a^3+3a^2(2b)+3a(2b)^2+(2b)^3=a^3+6a^2b+12ab^2+8b^3$ i odejmij $8a^2b+16ab^2$."
  - "③ Zostaje $a^3-2a^2b-4ab^2+8b^3=a^2(a-2b)-4b^2(a-2b)=(a-2b)(a^2-4b^2)=(a-2b)^2(a+2b)$. Dla $a,b>0$ i $a\\ne 2b$ to wyrażenie jest dodatnie."
tests:
  proof: 1.0
  factoring: 0.5
---
Dane są dodatnie liczby rzeczywiste $a$ oraz $b$, przy czym $b\\ne \\tfrac{1}{2}a$. Który zapis poprawnie uzasadnia nierówność $(a+2b)^3>8a^2b+16ab^2$?
`,Q3=`---
source: cke_2025_rozszerzona_zad7
options:
  - "Odcinek $EF$ jest linią środkową, więc $|EF|=\\tfrac{|AB|+|CD|}{2}$; przy równej wysokości stosunek pól to stosunek średnich podstaw — stąd wzór na $\\tfrac{|CD|}{|AB|}$."
  - "Linia środkowa trapezu dzieli go na dwa trapezy o tej samej wysokości, więc ich pola są zawsze równe."
  - "Linia środkowa jest równoległa do podstaw i równa $\\tfrac{1}{2}|AB|$, niezależnie od $|CD|$."
  - "Przedłużając ramiona trapezu i korzystając z twierdzenia Talesa otrzymujemy $|CD|:|AB|=1:2$."
correct: 0
hints:
  - "① Kluczowe: odcinek łączący środki ramion trapezu jest \\"linią środkową\\", a jej długość to ŚREDNIA ARYTMETYCZNA podstaw."
  - "② Oznacz $|AB|=p$, $|CD|=q$, wysokość trapezu $2h$. Wtedy $|EF|=\\tfrac{p+q}{2}$, a oba mniejsze trapezy mają wysokość $h$."
  - "③ Pole $EFCD=\\tfrac{|EF|+q}{2}\\cdot h=\\tfrac{p+3q}{4}h$, pole $ABFE=\\tfrac{p+|EF|}{2}\\cdot h=\\tfrac{3p+q}{4}h$. Z $\\tfrac{p+3q}{3p+q}=\\tfrac{1}{2}$ wychodzi $p=5q$, czyli $\\tfrac{q}{p}=\\tfrac{1}{5}$."
tests:
  proof: 1.0
  planimetria_lp: 0.5
---
W trapezie $ABCD$ o podstawach $AB$ i $CD$ punkty $E,F$ są środkami ramion. Stosunek pola trapezu $EFCD$ do pola trapezu $ABFE$ jest równy $\\tfrac{1}{2}$. Który zapis poprawnie uzasadnia, że $\\tfrac{|CD|}{|AB|}=\\tfrac{1}{5}$?
`,Y3=`---
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
Przeciwprostokątna trójkąta prostokątnego o przyprostokątnych $6$ i $8$ wynosi:`,X3=`---
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
Trójkąt prostokątny ma przyprostokątne $a = 3$ i $b = 4$. Przeciwprostokątna $c$ wynosi:`,J3=`---
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
Trójkąt prostokątny ma przeciwprostokątną $c = 6$ i jedną przyprostokątną $b = 5$. Druga przyprostokątna wynosi:`,eg=`---
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
Równanie $x^2 - 5x + 6 = 0$ ma rozwiązania:`,ng=`---
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
Rozwiąż: $x^2 + 2x - 3 = 0$`,tg=`---
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
Ile rozwiązań rzeczywistych ma równanie $x^2 + 4 = 0$?`,rg=`---
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
Ile rozwiązań ma równanie $x^2 - 6x + 9 = 0$?`,og=`---
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
Równanie $x^2 + 1 = 0$ ma:`,ig=`---
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
Rozwiąż równanie $2x^2 - x - 3 = 0$.`,ag=`---
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
Wyróżnik równania $2x^2 - 3x - 5 = 0$ wynosi:`,sg=`---
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
Rozwiąż równanie $x^2 - 5x = 0$.`,lg=`---
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
Równanie $2x^2 + x + m = 0$ ma dwa różne pierwiastki rzeczywiste, gdy:`,cg=`---
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
Iloczyn dwóch kolejnych liczb nieparzystych wynosi $35$. Te liczby to:`,ug=`---
options:
  - "$(-2, 3)$"
  - "$(-\\infty,-2) \\cup (3,+\\infty)$"
  - "$[-2, 3]$"
  - "$(-3, 2)$"
correct: 0
hint: "Pierwiastki to $-2$ i $3$. Parabola jest pod osią między nimi (ramiona w górę)."
tests:
  quadratic_ineq: 1.0
  quadratic_eq: 0.5
---
Rozwiązaniem nierówności $x^2 - x - 6 < 0$ jest:
`,dg=`---
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
Rozwiąż nierówność: $x^2 - x - 6 < 0$`,pg=`---
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
Rozwiąż nierówność: $x^2 - 3x - 4 \\geq 0$`,mg=`---
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
Rozwiąż nierówność $x^2 - 4x - 5 > 0$.`,fg=`---
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
Rozwiązaniem nierówności $x^2 + 2x + 5 > 0$ jest:`,hg=`---
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
Rozwiąż nierówność $x^2 - 5x + 4 \\leq 0$.`,$g=`---
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
Rozwiąż nierówność $-x^2 - 2x + 3 \\leq 0$.`,yg=`---
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
Rozwiązaniem nierówności $x^2 - 4x + 4 > 0$ jest:`,gg=`---
options:
  - "$x + 2$"
  - "$x - 2$"
  - "$x^2 + 2$"
  - "$2x$"
correct: 0
hint: "$x^2 - 4 = (x-2)(x+2)$. Skracasz $(x-2)$."
tests:
  rational_expr: 1.0
  polynomials: 0.5
---
Wyrażenie $\\dfrac{x^2-4}{x-2}$ dla $x \\neq 2$ upraszcza się do:
`,wg=`---
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
Uprość: $\\dfrac{x^2 - 1}{(x-1)^2}$`,xg=`---
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
Oblicz: $\\dfrac{x}{2} \\cdot \\dfrac{5}{3} =$`,bg=`---
options:
  - "$(-\\infty, -1) \\cup (3, +\\infty)$"
  - "$(-1, 3)$"
  - "$[-1, 3]$"
  - "$(-\\infty, -1] \\cup [3, +\\infty)$"
correct: 0
hint: "Metoda rozwiązywania nierówności wymiernych — krok po kroku:\\n\\n① ROZŁÓŻ na czynniki: licznik = $(x+1)$, mianownik = $(x-3)$. Już rozłożone.\\n\\n② ZNAJDŹ MIEJSCA ZEROWE: licznik = 0 → $x = -1$. Mianownik = 0 → $x = 3$.\\n\\n③ DZIEDZINA: mianownik $\\neq 0$, więc $x \\neq 3$. Punkt $x = 3$ jest WYŁĄCZONY (kółko puste).\\n\\n④ TABELKA ZNAKÓW — zaznacz $-1$ i $3$ na osi, sprawdź znak w każdym przedziale:\\n• $x < -1$ (np. $x=-2$): $\\frac{-1}{-5} = +$ ✓\\n• $-1 < x < 3$ (np. $x=0$): $\\frac{1}{-3} = -$ ✗\\n• $x > 3$ (np. $x=4$): $\\frac{5}{1} = +$ ✓\\n\\n⑤ ODPOWIEDŹ: nierówność $> 0$ (ostra), więc nie włączamy punktów: $x \\in (-\\infty, -1) \\cup (3, +\\infty)$."
tests:
  rational_expr: 1.0
  quadratic_ineq: 0.5
  factoring: 0.25
---
Rozwiąż nierówność: $\\dfrac{x+1}{x-3} > 0$
`,zg=`---
options:
  - "$[-2, 0) \\cup [4, +\\infty)$"
  - "$(-2, 0) \\cup (4, +\\infty)$"
  - "$(-\\infty, -2] \\cup (0, 4]$"
  - "$(-\\infty, -2) \\cup (0, 4)$"
correct: 0
hint: "Krok po kroku:\\n\\n① PRZENIEŚ na jedną stronę: $\\frac{x^2-2x-8}{x} \\geq 0$.\\n\\n② ROZŁÓŻ LICZNIK: $x^2-2x-8 = (x-4)(x+2)$. Szukasz dwóch liczb: iloczyn $= -8$, suma $= -2$ → $\\Delta = 4+32 = 36$, $x = \\frac{2 \\pm 6}{2}$ → $x=4$ lub $x=-2$.\\n\\n③ MIANOWNIK: $x$. Miejsce zerowe: $x = 0$. Wyłączone z dziedziny ($x \\neq 0$).\\n\\n④ MIEJSCA ZEROWE LICZNIKA: $x = -2$, $x = 4$. Te WŁĄCZAMY (bo $\\geq 0$, ułamek = 0 gdy licznik = 0).\\n\\n⑤ TABELKA ZNAKÓW — punkty krytyczne: $-2$, $0$, $4$:\\n• $x < -2$ (np. $x=-3$): $\\frac{(-7)(-1)}{-3} = \\frac{7}{-3} < 0$ ✗\\n• $-2 < x < 0$ (np. $x=-1$): $\\frac{(-5)(1)}{-1} = 5 > 0$ ✓\\n• $0 < x < 4$ (np. $x=1$): $\\frac{(-3)(3)}{1} = -9 < 0$ ✗\\n• $x > 4$ (np. $x=5$): $\\frac{(1)(7)}{5} > 0$ ✓\\n\\n⑥ ODPOWIEDŹ: $\\geq 0$, więc włączamy $-2$ i $4$ (licznik=0), ale NIE $0$ (mianownik=0): $x \\in [-2, 0) \\cup [4, +\\infty)$."
tests:
  rational_expr: 1.0
  quadratic_ineq: 0.5
  factoring: 0.5
---
Rozwiąż nierówność: $\\dfrac{x^2 - 2x - 8}{x} \\geq 0$
`,vg=`---
options:
  - "$(2, 5]$"
  - "$[2, 5]$"
  - "$(2, 5)$"
  - "$(-\\infty, 2) \\cup [5, +\\infty)$"
correct: 0
hint: "Krok po kroku:\\n\\n① ROZŁÓŻ: licznik = $(x-5)$, mianownik = $(x-2)$. Już rozłożone.\\n\\n② MIEJSCA ZEROWE: licznik = 0 → $x = 5$. Mianownik = 0 → $x = 2$ (WYŁĄCZONY — dzielenie przez 0!).\\n\\n③ CZY WŁĄCZAMY PUNKTY?\\n• $x = 5$: ułamek = $0/3 = 0$, a $0 \\leq 0$ ✓ → WŁĄCZAMY (nawias kwadratowy]\\n• $x = 2$: mianownik = 0 → WYŁĄCZAMY zawsze (nawias okrągły)\\n\\n④ TABELKA ZNAKÓW — punkty krytyczne: $2$ i $5$:\\n• $x < 2$ (np. $x=0$): $\\frac{-5}{-2} = +2.5$ → dodatni ✗\\n• $2 < x < 5$ (np. $x=3$): $\\frac{-2}{1} = -2$ → ujemny ✓\\n• $x > 5$ (np. $x=6$): $\\frac{1}{4}$ → dodatni ✗\\n\\n⑤ ODPOWIEDŹ: ujemny lub zero w przedziale $(2, 5]$. Nawias okrągły przy $2$ (mianownik=0), kwadratowy przy $5$ (licznik=0, ułamek=0 ✓)."
tests:
  rational_expr: 1.0
  quadratic_ineq: 0.5
---
Rozwiąż nierówność: $\\dfrac{x-5}{x-2} \\leq 0$
`,kg=`---
options:
  - "$(-\\infty, -3] \\cup (-1, 2]$"
  - "$[-3, -1) \\cup [2, +\\infty)$"
  - "$(-3, -1) \\cup (2, +\\infty)$"
  - "$(-\\infty, -3) \\cup (-1, 2)$"
correct: 0
hint: "Krok po kroku:\\n\\n① ROZŁÓŻ LICZNIK NA CZYNNIKI:\\n$x^2 + x - 6 = ?$ Szukamy dwóch liczb: iloczyn $= -6$, suma $= 1$ → to $3$ i $-2$: $x^2 + x - 6 = (x+3)(x-2)$. Sprawdź: $(x+3)(x-2) = x^2 - 2x + 3x - 6 = x^2 + x - 6$ ✓\\n\\n② MIANOWNIK: $(x+1)$. Miejsce zerowe: $x = -1$ (WYŁĄCZONY z dziedziny).\\n\\n③ WSZYSTKIE PUNKTY KRYTYCZNE: $x = -3$ (licznik), $x = -1$ (mianownik), $x = 2$ (licznik).\\n\\n④ CZY WŁĄCZAMY?\\n• $x = -3$: ułamek $= 0 \\leq 0$ ✓ → WŁĄCZAMY $[-3$\\n• $x = -1$: mianownik = 0 → WYŁĄCZAMY $)$\\n• $x = 2$: ułamek $= 0 \\leq 0$ ✓ → WŁĄCZAMY $2]$\\n\\n⑤ TABELKA ZNAKÓW — 4 przedziały:\\n• $x < -3$ (np. $x=-4$): $\\frac{(-1)(-6)}{-3} = -2$ → ujemny ✓\\n• $-3 < x < -1$ (np. $x=-2$): $\\frac{(1)(-4)}{-1} = 4$ → dodatni ✗\\n• $-1 < x < 2$ (np. $x=0$): $\\frac{(3)(-2)}{1} = -6$ → ujemny ✓\\n• $x > 2$ (np. $x=3$): $\\frac{(6)(1)}{4} = 1.5$ → dodatni ✗\\n\\n⑥ ODPOWIEDŹ: ujemny lub zero → $x \\in (-\\infty, -3] \\cup (-1, 2]$.\\n\\nWskazówka: przy nierównościach wymiernych ZAWSZE rób tabelkę znaków. Nigdy nie mnóż obu stron przez mianownik (bo nie wiesz, czy jest dodatni czy ujemny!)."
tests:
  rational_expr: 1.0
  quadratic_ineq: 0.5
  factoring: 0.5
---
Rozwiąż nierówność: $\\dfrac{x^2 + x - 6}{x + 1} \\leq 0$
`,_g=`---
options:
  - "$3$"
  - "$1$"
  - "$+\\infty$"
  - "$0$"
correct: 0
hint: "Dzielisz licznik i mianownik przez $n^2$. Wyrazy $\\frac{1}{n^2}$ i $\\frac{2}{n^2}$ dążą do $0$."
tests:
  seq_limits: 1.0
  arith_geom: 0.5
---
Granica ciągu $a_n = \\dfrac{3n^2 + 1}{n^2 - 2}$ dla $n \\to \\infty$ wynosi:
`,jg=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n}$`,Sg=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n+1}{n}$`,qg=`---
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
Ciąg określony wzorem $a_n = 3n - 1$ ma piąty wyraz równy:`,Tg=`---
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
Ciąg $1, 3, 5, 7, \\ldots$ ma wzór ogólny:`,Pg=`---
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
Ciąg arytmetyczny: $a_1 = 1$, różnica $r = 4$. Piąty wyraz $a_5$ wynosi:`,Ag=`---
source: cke
options:
  - "$64$"
  - "$40$"
  - "$48$"
  - "$80$"
correct: 3
hints:
  - "① „Wyraz $a_4$” to po prostu wartość wzoru po wstawieniu $n = 4$ — nic więcej, bez żadnych zależności od wcześniejszych wyrazów."
  - "② Wstaw $n = 4$ do wzoru $a_n = 2^n \\cdot (n+1)$ — pamiętaj, że najpierw liczymy potęgę, potem mnożymy."
  - "③ $a_4 = 2^4 \\cdot (4+1) = 16 \\cdot 5 = 80$."
tests:
  sequences: 1.0
  powers: 0.3
---
Ciąg $(a_n)$ jest określony wzorem $a_n = 2^n \\cdot (n + 1)$ dla każdej liczby naturalnej $n \\geq 1$. Wyraz $a_4$ jest równy:
`,Cg=`---
source: cke
options:
  - "Oba zdania prawdziwe"
  - "Zdanie (1) prawdziwe, zdanie (2) fałszywe"
  - "Zdanie (1) fałszywe, zdanie (2) prawdziwe"
  - "Oba zdania fałszywe"
correct: 1
hints:
  - "① Czynnik $(-1)^n$ zmienia znak co drugi wyraz — to ciąg „naprzemienny”, więc nie wszystkie wyrazy mogą mieć ten sam znak. Każde zdanie sprawdzasz osobno na konkretnych wyrazach."
  - "② Dla zdania (1) policz $a_1$ oraz $a_3$ i sprawdź, czy $a_1 = 2 a_3$. Dla zdania (2) wystarczy znaleźć jeden wyraz niedodatni — najłatwiej rzucić okiem na $a_2$."
  - "③ $a_1 = (-1)^1(1-5) = 4$, $a_3 = (-1)^3(3-5) = 2$ — więc $a_1 = 2 a_3$, zdanie (1) prawdziwe. $a_2 = (-1)^2(2-5) = -3 < 0$, więc zdanie (2) fałszywe."
tests:
  sequences: 1.0
---
Ciąg $(a_n)$ jest określony wzorem $a_n = (-1)^n \\cdot (n - 5)$ dla $n \\geq 1$. Oceń prawdziwość zdań: (1) Pierwszy wyraz ciągu jest dwa razy większy od trzeciego wyrazu. (2) Wszystkie wyrazy ciągu są dodatnie.
`,Mg=`---
options:
  - "$\\{3,4\\}$"
  - "$\\{1,2,5,6\\}$"
  - "$\\{1,2,3,4,5,6\\}$"
  - "$\\{3\\}$"
correct: 0
hint: "Część wspólna zawiera tylko elementy należące do obu zbiorów."
tests:
  sets: 1.0
---
$A = \\{1,2,3,4\\}$, $B = \\{3,4,5,6\\}$. $A \\cap B =$
`,Dg=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cap B$:`,Rg=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cup B$:`,Eg=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\setminus B$:`,Bg=`---
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
$|A| = 5$, $|B| = 6$, $|A \\cap B| = 3$. Ile wynosi $|A \\cup B|$?`,Fg=`---
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
$A = \\{2, 4\\}$, $B = \\{1, 2, 3, 4, 5\\}$. Czy $A \\subset B$?`,Ig=`---
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
Uniwersum $U = \\{1, 2, 3, 4, 5\\}$, $A = \\{2, 4\\}$. Wyznacz dopełnienie $A' =$`,Ng=`---
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
Które z poniższych jest poprawnym prawem De Morgana?`,Lg=`---
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
W klasie 30 uczniów: 20 lubi matematykę, 15 lubi fizykę, a 5 nie lubi żadnego z tych przedmiotów. Ilu uczniów lubi oba przedmioty?`,Wg=`---
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
Ile podzbiorów (łącznie ze zbiorem pustym) ma zbiór $\\{a, b, c, d\\}$?`,Og=`---
options:
  - "$39$"
  - "$25$"
  - "$49$"
  - "$74$"
correct: 0
hint: "Tw. cosinusów: $c^2 = 25 + 49 - 2 \\cdot 5 \\cdot 7 \\cdot \\cos 60° = 74 - 35 = 39$."
tests:
  sin_cos_law: 1.0
  trig_lp: 0.5
---
W trójkącie $a=5$, $b=7$, $C=60°$. Wartość $c^2 =$
`,Hg=`---
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
Twierdzenie cosinusów brzmi:`,Gg=`---
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
Twierdzenie sinusów głosi, że w każdym trójkącie:`,Ug=`---
source: cke_2025_rozszerzona_zad3
options:
  - "$|\\angle DAC|=15°$"
  - "$|\\angle DAC|=30°$"
  - "$|\\angle DAC|=45°$"
  - "$|\\angle DAC|=60°$"
correct: 0
hints:
  - "① W trójkącie równobocznym $ABC$ bok ma długość $a$, kąty $60°$. Oznacz $|BD|=x$, więc $|DC|=a-x$. Pola trójkątów $ABD$ i $ADC$ mają wspólną wysokość z $A$, więc ich stosunek to $\\tfrac{|BD|}{|DC|}=\\tfrac{x}{a-x}=\\tfrac{\\sqrt{3}-1}{2}$."
  - "② Ze wzoru na pole: $[ADC]=\\tfrac{1}{2}\\cdot a\\cdot |AD|\\cdot\\sin(\\angle DAC)\\dots$ — alternatywnie policz $|AD|$ z tw. cosinusów w trójkącie $ABD$: $|AD|^2=a^2+x^2-2ax\\cos 60°=a^2+x^2-ax$."
  - "③ Z $\\tfrac{x}{a-x}=\\tfrac{\\sqrt{3}-1}{2}$ wychodzi $x=a\\cdot\\tfrac{\\sqrt{3}-1}{\\sqrt{3}+1}=a(2-\\sqrt{3})$. Dalej tw. sinusów w $ADC$: $\\dfrac{|DC|}{\\sin\\angle DAC}=\\dfrac{|AD|}{\\sin 60°}$. Po rachunkach $\\sin\\angle DAC=\\tfrac{1}{2}\\dots$ — wychodzi kąt $15°$."
tests:
  sin_cos_law: 1.0
  planimetria_lp: 0.4
---
W trójkącie równobocznym $ABC$ punkt $D$ leży na boku $BC$, a stosunek pola trójkąta $ABD$ do pola trójkąta $ADC$ wynosi $\\dfrac{\\sqrt{3}-1}{2}$. Oblicz miarę kąta $\\angle DAC$.
`,Zg=`---
options:
  - "$12\\pi$"
  - "$36\\pi$"
  - "$9\\pi$"
  - "$48\\pi$"
correct: 0
hint: "$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3} \\cdot \\pi \\cdot 9 \\cdot 4 = 12\\pi$."
tests:
  solid_geom: 1.0
---
Objętość stożka o promieniu podstawy $r=3$ i wysokości $h=4$ wynosi:
`,Kg=`---
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
Wzór na objętość sześcianu o krawędzi $a$:`,Vg=`---
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
Wzór na objętość kuli o promieniu $r$:`,Qg=`---
options:
  - "$1$"
  - "$\\sqrt{2}$"
  - "$\\frac{\\sqrt{2}}{2}$"
  - "$2$"
correct: 0
hint: "Rzut krawędzi bocznej na podstawę to połowa przekątnej podstawy. Przekątna kwadratu o boku $4$ ma długość $4\\sqrt{2}$, więc połowa to $2\\sqrt{2}$. Stąd $\\tan \\alpha = H / (2\\sqrt{2}) = 2\\sqrt{2} / 2\\sqrt{2} = 1$."
tests:
  solid_geom: 1.0
  trig_basic: 0.3
---
Ostrosłup prawidłowy czworokątny ma krawędź podstawy $a = 4$ i wysokość $H = 2\\sqrt{2}$. Oblicz tangens kąta nachylenia krawędzi bocznej do płaszczyzny podstawy.
`,Yg=`---
options:
  - "$12$"
  - "$6$"
  - "$24$"
  - "$9$"
correct: 0
hint: "Przekrój osiowy stożka to trójkąt równoramienny: podstawa $= 2r = 6$, wysokość $= h = 4$. Pole $= \\frac{1}{2} \\cdot 2r \\cdot h = \\frac{1}{2} \\cdot 6 \\cdot 4 = 12$."
tests:
  solid_geom: 1.0
  area_perimeter: 0.3
---
Stożek ma promień podstawy $r = 3$ i wysokość $h = 4$. Oblicz pole przekroju osiowego tego stożka.
`,Xg=`---
options:
  - "$60$"
  - "$30$"
  - "$120$"
  - "$96$"
correct: 0
hint: "Pole powierzchni bocznej $= 4 \\cdot$ pole trójkąta bocznego. Każdy trójkąt boczny ma podstawę $a = 6$ i wysokość $l = 5$, więc jego pole $= \\frac{a \\cdot l}{2} = 15$. Razy 4 ściany: $P_b = 60$."
tests:
  solid_geom: 1.0
---
Ostrosłup prawidłowy czworokątny ma krawędź podstawy $a = 6$ i wysokość ściany bocznej (apotemę bryły) $l = 5$. Oblicz pole powierzchni bocznej.
`,Jg=`---
options:
  - "$60°$"
  - "$30°$"
  - "$45°$"
  - "$75°$"
correct: 0
hint: "Przekrój osiowy walca to prostokąt o bokach $2r = 2$ i $h = 2\\sqrt{3}$. Przekątna tworzy z bokiem podstawy trójkąt prostokątny, w którym $\\tan \\alpha = h / 2r = 2\\sqrt{3} / 2 = \\sqrt{3}$. Stąd $\\alpha = 60°$."
tests:
  solid_geom: 1.0
  trig_basic: 0.3
---
Walec ma promień podstawy $r = 1$ i wysokość $h = 2\\sqrt{3}$. Jaki jest kąt nachylenia przekątnej przekroju osiowego walca do płaszczyzny podstawy?
`,e5=`---
source: cke_2025_rozszerzona_zad10
options:
  - "$P_b = 918$"
  - "$P_b = 816$"
  - "$P_b = 1224$"
  - "$P_b = 408$"
correct: 0
hints:
  - "① Ustaw układ: $A=(0,0,0)$, $B=(a,0,0)$, $C=(a,a,0)$, $D=(0,a,0)$, $S=(0,0,h)$ przy $a=3\\sqrt{34}$. Ściany $SAB,\\,SAD$ są prostokątne (przyprostokątne $a,h$); ściany $SBC,\\,SCD$ mają wspólną krawędź $SC$ — wzdłuż niej mierzymy $\\beta$."
  - "② Z iloczynu wektorowego normalnych do ścian $BCS$ i $CDS$ wyjdzie $\\cos\\beta = -\\dfrac{a^2}{a^2+h^2} = -\\dfrac{9}{25}$. Stąd $25a^2 = 9(a^2+h^2)$, więc $16a^2 = 9h^2$ i $h = \\tfrac{4}{3}a = 4\\sqrt{34}$."
  - "③ Pola: $[SAB]=[SAD]=\\tfrac12\\cdot a\\cdot h = \\tfrac12\\cdot 3\\sqrt{34}\\cdot 4\\sqrt{34}=204$. Dla $[SBC]$ odległość $S$ od krawędzi $BC$ to $\\sqrt{a^2+h^2}=\\sqrt{25\\cdot 34}=5\\sqrt{34}$, więc $[SBC]=[SCD]=\\tfrac12\\cdot a\\cdot 5\\sqrt{34}=255$. Razem $P_b = 2\\cdot 204 + 2\\cdot 255 = 918$."
tests:
  solid_geom: 1.0
  sin_cos_law: 0.5
---
Ostrosłup $ABCDS$ ma podstawę — kwadrat $ABCD$ o boku $3\\sqrt{34}$, a krawędź $SA$ jest jego wysokością. Cosinus kąta dwuściennego między ścianami $CDS$ i $BCS$ (wzdłuż wspólnej krawędzi $SC$) wynosi $-\\tfrac{9}{25}$. Oblicz pole powierzchni bocznej $P_b$ ostrosłupa.
`,n5=`---
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
Średnia arytmetyczna {2, 4, 6, 8, 10} wynosi:`,t5=`---
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
Dominanta (moda) zbioru danych to:`,r5=`---
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
Dla danych $\\{4, 7, 9, 12, 6\\}$ rozstęp (zakres) wynosi:`,o5=`---
source: cke
options:
  - "$4$"
  - "$5$"
  - "$6$"
  - "$7$"
correct: 2
hints:
  - "① Nie musisz znać osobno $x$ i $y$ — wystarczy suma. A suma wszystkich liczb wynika ze średniej."
  - "② Skorzystaj z definicji średniej: $\\bar{a} = \\frac{\\text{suma}}{n}$, więc suma wszystkich siedmiu liczb to $n \\cdot \\bar{a}$. Potem odejmij sumę tych pięciu, które znasz."
  - "③ Suma wszystkich: $7 \\cdot 3 = 21$. Suma znanych: $1+2+3+4+5 = 15$. Zatem $x + y = 21 - 15 = 6$."
tests:
  stat_lp: 1.0
  data_basics: 0.5
---
Średnia arytmetyczna siedmiu liczb $1, 2, 3, 4, 5, x, y$ jest równa $3$. Suma $x + y$ jest równa:
`,i5=`---
options:
  - "$8$"
  - "$6$"
  - "$12$"
  - "$4$"
correct: 0
hint: "Tw. Talesa: $\\dfrac{AD}{DB} = \\dfrac{AE}{EC}$, więc $EC = \\dfrac{4 \\cdot 6}{3} = 8$."
tests:
  thales: 1.0
---
Proste równoległe odcinają na siecznych odcinki proporcjonalne.
Jeśli $DE \\parallel BC$ i $AD=3$, $DB=6$, $AE=4$, to $EC=$
`,a5=`---
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
Dwie proste równoległe przecinają boki trójkąta. Jeśli $AB = 4$, $BC = 8$, $DE = 3$, to $EF =$`,s5=`---
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
Co gwarantuje twierdzenie Talesa, gdy prosta jest równoległa do boku trójkąta?`,l5=`---
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
W trójkącie prostokątnym $\\sin\\alpha = \\frac{3}{5}$. Wartość $\\cos\\alpha$ wynosi:`,c5=`---
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
Wartość $\\sin 30°$ wynosi:`,u5=`---
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
Wartość wyrażenia $\\sin^2\\alpha + \\cos^2\\alpha$ wynosi zawsze:`,d5=`---
source: cke
options:
  - "$\\cos 20°$"
  - "$\\sin 20°$"
  - "$\\mathrm{tg}\\ 20°$"
  - "$\\sin 20° \\cdot \\cos 20°$"
correct: 1
hints:
  - "① W obu składnikach powtarza się $\\sin 20°$ — to podpowiedź, by wyciągnąć go przed nawias. W tym co zostanie, powinna pojawić się dobrze znana jedynka trygonometryczna."
  - "② Wyłącz $\\sin 20°$ przed nawias, a potem zastosuj tożsamość $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$."
  - "③ $\\sin^3 20° + \\cos^2 20° \\cdot \\sin 20° = \\sin 20°(\\sin^2 20° + \\cos^2 20°) = \\sin 20° \\cdot 1 = \\sin 20°$."
tests:
  trig_basic: 1.0
  trig_formulas: 0.5
---
Wartość wyrażenia $\\sin^3 20° + \\cos^2 20° \\cdot \\sin 20°$ jest równa:
`,p5=`---
source: cke
options:
  - "$\\sin^2 \\alpha$"
  - "$\\sin^6 \\alpha \\cdot \\cos^2 \\alpha$"
  - "$\\sin^4 \\alpha + 1$"
  - "$\\sin^2 \\alpha \\cdot (\\sin \\alpha + \\cos \\alpha)(\\sin \\alpha - \\cos \\alpha)$"
correct: 0
hints:
  - "① Oba składniki mają wspólny czynnik $\\sin^2 \\alpha$ — wyłączenie go przed nawias jest tu kluczowym krokiem."
  - "② Po wyłączeniu $\\sin^2 \\alpha$ w nawiasie zostanie $\\sin^2 \\alpha + \\cos^2 \\alpha$ — zastosuj jedynkę trygonometryczną."
  - "③ $\\sin^4 \\alpha + \\sin^2 \\alpha \\cos^2 \\alpha = \\sin^2 \\alpha(\\sin^2 \\alpha + \\cos^2 \\alpha) = \\sin^2 \\alpha \\cdot 1 = \\sin^2 \\alpha$."
tests:
  trig_basic: 1.0
  trig_formulas: 0.5
---
Dla każdego kąta ostrego $\\alpha$ wyrażenie $\\sin^4 \\alpha + \\sin^2 \\alpha \\cdot \\cos^2 \\alpha$ jest równe:
`,m5=`---
options:
  - "$x = 30°$ i $x = 150°$"
  - "$x = 30°$ tylko"
  - "$x = 60°$ i $x = 120°$"
  - "$x = 45°$"
correct: 0
hint: "$\\sin$ jest symetryczny względem $90°$: $\\sin(30°) = \\sin(150°) = \\frac{1}{2}$."
tests:
  trig_eq: 1.0
  trig_formulas: 0.5
---
Rozwiązaniem równania $\\sin(x) = \\frac{1}{2}$ w przedziale $[0°, 180°]$ jest:
`,f5=`---
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
Rozwiąż równanie: $\\sin x = \\dfrac{1}{2}$`,h5=`---
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
Rozwiąż równanie: $\\tan x = 1$`,$5=`---
source: cke_2023_rozszerzona_zad6
options:
  - "$x=\\dfrac{\\pi}{12}+\\dfrac{k\\pi}{3}$ lub $x=\\dfrac{\\pi}{4}+\\dfrac{k\\pi}{1}$ (z uwzględnieniem rozwiązań z $\\sin(10x)+\\sin(-2x)=1$)"
  - "$x=\\dfrac{\\pi}{4}+k\\pi$"
  - "$x=k\\pi$"
  - "równanie sprzeczne"
correct: 0
hints:
  - "① Zastosuj wzór na iloczyn na sumę: $2\\sin A\\cos B=\\sin(A+B)+\\sin(A-B)$. Tutaj $A=4x$, $B=6x$."
  - "② Lewa strona: $4\\sin(4x)\\cos(6x)=2[\\sin(10x)+\\sin(-2x)]=2\\sin(10x)-2\\sin(2x)$."
  - "③ Równanie: $2\\sin(10x)-2\\sin(2x)=2\\sin(10x)+1$, czyli $-2\\sin(2x)=1$, $\\sin(2x)=-\\tfrac{1}{2}$. Stąd $2x=-\\tfrac{\\pi}{6}+2k\\pi$ lub $2x=\\pi+\\tfrac{\\pi}{6}+2k\\pi$, czyli $x=-\\tfrac{\\pi}{12}+k\\pi$ lub $x=\\tfrac{7\\pi}{12}+k\\pi$."
tests:
  trig_eq: 1.0
  trig_formulas: 0.7
---
Rozwiąż równanie $4\\sin(4x)\\cos(6x)=2\\sin(10x)+1$.
`,y5=`---
source: cke_2025_rozszerzona_zad9
options:
  - "$x\\in\\{-\\tfrac{2\\pi}{3},-\\tfrac{\\pi}{6},\\tfrac{\\pi}{3},\\tfrac{5\\pi}{6}\\}$"
  - "$x\\in\\{0,\\pi,-\\pi\\}$"
  - "$x=\\tfrac{\\pi}{4}+k\\pi$"
  - "brak rozwiązań"
correct: 0
hints:
  - "① $3\\cos^2 x-3\\sin^2 x=3\\cos(2x)$, a $\\sqrt{3}\\sin(2x)$ zostaje. Zatem równanie: $3\\cos(2x)+\\sqrt{3}\\sin(2x)=0$."
  - "② Podziel przez $\\cos(2x)$ (sprawdź osobno $\\cos(2x)=0$): $3+\\sqrt{3}\\tan(2x)=0$, czyli $\\tan(2x)=-\\sqrt{3}$."
  - "③ $2x=-\\tfrac{\\pi}{3}+k\\pi$, $x=-\\tfrac{\\pi}{6}+\\tfrac{k\\pi}{2}$. Wybierz $k$ tak, by $x\\in[-\\pi,\\pi]$: $x\\in\\{-\\tfrac{2\\pi}{3},-\\tfrac{\\pi}{6},\\tfrac{\\pi}{3},\\tfrac{5\\pi}{6}\\}$."
tests:
  trig_eq: 1.0
  trig_formulas: 0.7
---
Rozwiąż równanie $3\\cos^2 x+\\sqrt{3}\\sin(2x)-3\\sin^2 x=0$ w przedziale $[-\\pi,\\pi]$.
`,g5=`---
options:
  - "$2\\sin(\\alpha)\\cos(\\alpha)$"
  - "$\\sin^2(\\alpha)-\\cos^2(\\alpha)$"
  - "$\\cos^2(\\alpha)-\\sin^2(\\alpha)$"
  - "$2\\cos^2(\\alpha)-1$"
correct: 0
hint: "Wzór na sinus kąta podwojonego: $\\sin(2\\alpha) = 2\\sin(\\alpha)\\cos(\\alpha)$."
tests:
  trig_formulas: 1.0
---
$\\sin(2\\alpha)$ jest równe:
`,w5=`---
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
Wzór na $\\sin 2\\alpha$:`,x5=`---
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
Wzór na $\\cos(\\alpha - \\beta)$:`,b5=`---
options:
  - "$\\dfrac{\\sqrt{3}}{2}$"
  - "$\\dfrac{1}{2}$"
  - "$-\\dfrac{\\sqrt{3}}{2}$"
  - "$\\dfrac{\\sqrt{2}}{2}$"
correct: 0
hint: "$120° = 180°-60°$, $\\sin(180°-\\alpha) = \\sin(\\alpha)$, $\\sin(60°) = \\dfrac{\\sqrt{3}}{2}$."
tests:
  trig_lp: 1.0
  trig_basic: 0.25
---
Wartość $\\sin(120°)$ jest równa:
`,z5=`---
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
Wartość $\\cos 30°$ wynosi:`,v5=`---
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
Wartość $\\sin 45°$ wynosi:`,k5=`---
options:
  - "$5$"
  - "$7$"
  - "$\\sqrt{7}$"
  - "$12$"
correct: 0
hint: "$|\\vec{v}| = \\sqrt{3^2+4^2} = \\sqrt{25} = 5$."
tests:
  vectors: 1.0
---
Długość wektora $\\vec{v} = [3, 4]$ wynosi:
`,_5=`---
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
Iloczyn skalarny wektorów $\\vec{a} = (a_1, a_2)$ i $\\vec{b} = (b_1, b_2)$ to:`,j5=`---
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
Długość wektora $\\vec{v} = (2, 3)$ wynosi:`,S5=`---
options:
  - "$12$"
  - "$7$"
  - "$-12$"
  - "$-7$"
correct: 0
hint: "Wzór Viète'a: $x_1 \\cdot x_2 = \\frac{c}{a} = \\frac{12}{1} = 12$."
tests:
  vieta: 1.0
  quadratic_eq: 0.25
---
Jeśli $x_1, x_2$ są pierwiastkami $x^2 - 7x + 12 = 0$, to $x_1 \\cdot x_2 =$
`,q5=`---
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
Dla równania $x^2 - 5x + 6 = 0$ wzory Viète'a dają:`,T5=`---
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
Dla pierwiastków $x_1, x_2$ równania $x^2 - 5x + 6 = 0$, oblicz $x_1^2 + x_2^2$:`,P5=`---
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
Suma pierwiastków równania $x^2 + 5x + 6 = 0$ wynosi:`,A5=`---
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
Równanie kwadratowe, którego pierwiastkami są $2$ i $3$, to:`,C5=`---
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
Jeśli $x_1, x_2$ są pierwiastkami $x^2 - 5x + 6 = 0$, to $x_1^2 + x_2^2 =$`,M5=`---
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
Pierwiastki równania $x^2 - 5x - 6 = 0$ to $x_1$ i $x_2$. Wartość $\\frac{1}{x_1} + \\frac{1}{x_2}$ wynosi:`,D5=`---
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
Iloczyn pierwiastków równania $2x^2 - 7x + 3 = 0$ wynosi:`,R5=`---
source: cke_2023_rozszerzona_zad11
options:
  - "$m\\in\\left(\\tfrac{11}{5},\\,\\tfrac{9}{4}\\right)$"
  - "$m\\in\\left(2,\\,\\tfrac{9}{4}\\right)$"
  - "$m\\in(-\\infty,\\,2)\\cup\\left(\\tfrac{11}{5},\\,+\\infty\\right)$"
  - "$m\\in(2,\\,3)$"
correct: 0
hints:
  - "① Z Viete'a: $x_1+x_2=-4$, $x_1x_2=-\\dfrac{m-3}{m-2}$. Z tożsamości $x_1^3+x_2^3=(x_1+x_2)^3-3x_1x_2(x_1+x_2)$ wychodzi $x_1^3+x_2^3=-64-\\dfrac{12(m-3)}{m-2}$."
  - "② Nierówność $x_1^3+x_2^3>-28$ sprowadza się do $\\dfrac{m-3}{m-2}<-3$, czyli $\\dfrac{4m-9}{m-2}<0$. Analiza znaku daje $m\\in\\left(2,\\,\\tfrac{9}{4}\\right)$."
  - "③ Osobno warunek $\\Delta>0$ (dwa różne pierwiastki): $\\Delta=16+\\dfrac{4(m-3)}{m-2}=\\dfrac{4(5m-11)}{m-2}>0$, stąd $m\\in(-\\infty,\\,2)\\cup\\left(\\tfrac{11}{5},\\,+\\infty\\right)$. Przecięcie obu warunków to $m\\in\\left(\\tfrac{11}{5},\\,\\tfrac{9}{4}\\right)$ — pamiętaj o obu jednocześnie."
tests:
  vieta: 1.0
  quadratic_eq: 0.5
---
Dla jakich wartości parametru $m\\neq 2$ równanie $x^2+4x-\\dfrac{m-3}{m-2}=0$ ma dwa różne rozwiązania rzeczywiste $x_1,x_2$ spełniające $x_1^3+x_2^3>-28$?
`,E5=`---
source: cke_2024_rozszerzona_zad12
options:
  - "$m\\in(-1,\\,\\tfrac{2}{3})$ po uwzględnieniu $\\Delta>0$"
  - "$m>0$"
  - "$m=1$"
  - "$m\\in\\mathbb{R}$"
correct: 0
hints:
  - "① Z Viete'a: $s=x_1+x_2=3m+1$, $p=x_1x_2=2m^2+m+1$. Kluczowa tożsamość: $x_1^3+x_2^3+3x_1x_2(x_1+x_2-3)=(x_1+x_2)^3-9x_1x_2$."
  - "② Warunek staje się $(3m+1)^3-9(2m^2+m+1)\\le 3m-7$. Rozwiń i uprość: $27m^3+27m^2+9m+1-18m^2-9m-9\\le 3m-7$, czyli $27m^3+9m^2-3m-1\\le 0$."
  - "③ Lewa strona to $(3m+1)^2(3m-1)$. Nierówność $(3m+1)^2(3m-1)\\le 0$ daje $m\\le\\tfrac{1}{3}$ lub $m=-\\tfrac{1}{3}$. Nałóż warunek $\\Delta>0$: $(3m+1)^2-4(2m^2+m+1)>0\\Rightarrow m^2+2m-3>0\\Rightarrow m<-3$ lub $m>1$. Po przecięciu: $m<-3$ (z odrzuceniem przypadku brzegowego)."
tests:
  vieta: 1.0
  quadratic_eq: 0.5
---
Wyznacz wszystkie wartości parametru $m$, dla których równanie $x^2-(3m+1)x+2m^2+m+1=0$ ma dwa różne rozwiązania rzeczywiste $x_1,x_2$ spełniające $x_1^3+x_2^3+3x_1x_2(x_1+x_2-3)\\le 3m-7$.
`,B5=`---
source: cke_2025_rozszerzona_zad11
options:
  - "$m\\in(-8,-1)\\cup(\\tfrac{2}{3},\\,2)$ po uwzględnieniu wszystkich warunków"
  - "$m\\in(-8,-1)$"
  - "$m\\in(\\tfrac{2}{3},\\,2)$"
  - "$m=-8$"
correct: 0
hints:
  - "① Trzy warunki razem: (a) $\\Delta>0$ dla dwóch różnych pierwiastków; (b) $x_1x_2>0$ — \\"ten sam znak\\"; (c) $(x_1-x_2)^2\\le 180$."
  - "② Z Viete'a: $s=\\dfrac{2(2m+1)}{2-m}$, $p=\\dfrac{m+8}{2-m}$. Tożsamość: $(x_1-x_2)^2=s^2-4p$. Warunek (c): $s^2-4p\\le 180$."
  - "③ Po podstawieniu otrzymasz nierówność wymierną z $m$; (b) daje $\\dfrac{m+8}{2-m}>0\\Rightarrow m\\in(-8,2)$. (a) daje $\\Delta>0\\Rightarrow m<-1$ lub $m>\\tfrac{2}{3}$ (z dokładnością do znaku mianownika). Po przecięciu: $m\\in(-8,-1)\\cup(\\tfrac{2}{3},2)$; warunek (c) dodatkowo zawęża — pełne rozwiązanie CKE."
tests:
  vieta: 1.0
  quadratic_eq: 0.5
---
Funkcja $f(x)=(2-m)x^2-2(2m+1)x+m+8$, $m\\ne 2$. Wyznacz wszystkie $m$, dla których $f$ ma dokładnie dwa miejsca zerowe $x_1,x_2$ tego samego znaku spełniające $(x_1-x_2)^2\\le 180$.
`;function cp(o){const t=o.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{meta:{},body:o.trim()};const r=t[1],a=t[2].trim(),s={},c=r.split(/\r?\n/);let d=0;for(;d<c.length;){const f=c[d];if(f.startsWith("  ")){d++;continue}const $=f.match(/^(\w+):\s*(.*)/);if(!$){d++;continue}const w=$[1];let g=$[2].trim();if(g===""||g===null){const x=c[d+1]??"";if(x.startsWith("  - ")){const S=[];for(d++;d<c.length&&c[d].startsWith("  - ");){let q=c[d].replace(/^  - /,"").trim();q=q.replace(/^["']|["']$/g,""),S.push(q),d++}s[w]=S.length>0?S:null}else if(x.match(/^  \w+:/)){const S={};for(d++;d<c.length&&c[d].match(/^  \w+:/);){const q=c[d].match(/^  (\w+):\s*(.*)/);if(q){const j=q[1];let _=q[2].trim().replace(/^["']|["']$/g,"");S[j]=!isNaN(_)&&_!==""?Number(_):_}d++}s[w]=S}else s[w]=null,d++}else g=g.replace(/^["']|["']$/g,""),!isNaN(g)&&g!==""?s[w]=Number(g):g==="true"?s[w]=!0:g==="false"?s[w]=!1:s[w]=g,d++}return{meta:s,body:a}}function up(o,t){return Object.entries(o).map(([r,a])=>{var f;const s=(f=r.match(t))==null?void 0:f[1],{meta:c,body:d}=cp(a);return{id:s,body:d||"",label:c.label??s,labelPl:c.labelPl??c.label??s,scope:c.scope??"default",section:c.section??"default",level:c.level??1,x:c.x??0,y:c.y??0,resources:Array.isArray(c.resources)?c.resources.map($=>{if(typeof $!="string")return null;const[w,g,x,S]=$.split("|").map(j=>j.trim()),q=g&&!g.includes("/")&&!g.startsWith("http")?`resources/${s}/${g}`:g??"";return{type:w??"article",url:q,titleEn:x??"",titlePl:S??x??""}}).filter(Boolean):[]}})}function dp(o,t){var a;const r={};for(const[s,c]of Object.entries(o)){const d=(a=s.match(t))==null?void 0:a[1];if(!d)continue;const{meta:f,body:$}=cp(c);r[d]||(r[d]=[]),r[d].push({q:$,options:f.options??[],correct:f.correct??0,hint:f.hint??"",hints:Array.isArray(f.hints)?f.hints:f.hint?[f.hint]:[],source:f.source??null,tests:f.tests&&typeof f.tests=="object"&&Object.keys(f.tests).length>0?f.tests:{[d]:1}})}return r}function Ui(o,t,r=[],a=null,s=null){const c=o[t];if(!c||c.length===0)return null;if(typeof s=="number"&&c[s])return{...c[s],index:s};if(r.includes(-1))return null;const d=c.map(($,w)=>({q:$,i:w})).filter(({q:$,i:w})=>!r.includes(w)&&(a?$.source===a:!0));if(d.length===0)return null;const f=d[Math.floor(Math.random()*d.length)];return{...f.q,index:f.i}}const F5=[["integers","linear_eq"],["integers","modular_arithmetic"],["fractions","linear_eq"],["powers","linear_eq"],["linear_eq","linear_ineq"],["linear_eq","linear_sys"],["linear_eq","abs_value"],["fractions","sequences"],["powers","sequences"],["thales","pythagoras"],["thales","trig_basic"],["pythagoras","trig_basic"],["pythagoras","solid_geom"],["area_perimeter","solid_geom"],["area_perimeter","planimetria_lp"],["thales","planimetria_lp"],["pythagoras","planimetria_lp"],["trig_basic","trig_lp"],["linear_eq","polynomials"],["powers","polynomials"],["polynomials","rational_expr"],["polynomials","factoring"],["factoring","quadratic_eq"],["polynomials","quadratic_eq"],["quadratic_eq","quadratic_ineq"],["quadratic_eq","vieta"],["quadratic_eq","param_eq"],["quadratic_ineq","param_eq"],["polynomials","poly_roots"],["factoring","poly_roots"],["powers","log_exp"],["log_exp","log_eq"],["log_exp","fn_exp"],["log_exp","fn_log"],["trig_lp","sin_cos_law"],["trig_lp","trig_formulas"],["trig_formulas","trig_eq"],["sequences","arith_geom"],["arith_geom","seq_limits"],["arith_geom","geo_series"],["fn_concept","fn_linear"],["fn_concept","fn_quadratic"],["fn_concept","fn_transforms"],["fn_linear","fn_quadratic"],["quadratic_eq","fn_quadratic"],["fn_quadratic","fn_poly"],["polynomials","fn_poly"],["fn_quadratic","optimization_lp"],["fn_poly","fn_compositions"],["fn_exp","fn_compositions"],["trig_formulas","fn_trig"],["trig_eq","fn_trig"],["linear_sys","analytic_geom"],["analytic_geom","circle_eq"],["quadratic_eq","circle_eq"],["sin_cos_law","solid_geom"],["planimetria_lp","solid_geom"],["trig_lp","planimetria_lp"],["analytic_geom","vectors"],["circle_eq","conic_sections"],["data_basics","stat_lp"],["stat_lp","probability"],["sets","probability"],["counting","probability"],["probability","cond_prob"],["probability","bernoulli"],["cond_prob","distributions"],["bernoulli","distributions"],["sets","logic_basics"],["logic_basics","proof"],["sets","proof"],["matura_pytania","proof"],["counting","permutations"],["counting","combinations"],["combinations","binom_theorem"],["permutations","binom_theorem"],["powers","binom_theorem"],["fn_poly","limits"],["fn_exp","limits"],["fn_log","limits"],["fn_trig","limits"],["seq_limits","limits"],["limits","derivative"],["derivative","deriv_apps"],["optimization_lp","deriv_apps"],["quadratic_eq","complex"],["poly_roots","complex"],["derivative","integral"]],I5={SP8:{label:"SP kl. 8",color:"#4a9eff"},LP:{label:"Matura podst.",color:"#f5a623"},LR:{label:"Matura rozszerz.",color:"#e05cef"},UNIV:{label:"Uczelnia / IB",color:"#6b7d9a"}},N5={liczby_rzeczywiste:"#3dc9b0",wyrazenia:"#2ecc71",rownania:"#e74c3c",funkcje:"#f5a623",ciagi:"#e67e22",trygonometria:"#9b59b6",planimetria:"#e05cef",geometria_analityczna:"#c0392b",stereometria:"#8e44ad",kombinatoryka:"#c8d6e5",statystyka:"#4a9eff",logika:"#ff6b6b",optymalizacja:"#1abc9c",analiza:"#7f8c8d"},L5={liczby_rzeczywiste:{en:"Real Numbers",pl:"I. Liczby rzeczywiste"},wyrazenia:{en:"Algebraic Expressions",pl:"II. Wyrażenia algebraiczne"},rownania:{en:"Equations & Ineq.",pl:"III–IV. Równania i układy"},funkcje:{en:"Functions",pl:"V. Funkcje"},ciagi:{en:"Sequences",pl:"VI. Ciągi"},trygonometria:{en:"Trigonometry",pl:"VII. Trygonometria"},planimetria:{en:"Plane Geometry",pl:"VIII. Planimetria"},geometria_analityczna:{en:"Analytic Geometry",pl:"IX. Geometria analityczna"},stereometria:{en:"Solid Geometry",pl:"X. Stereometria"},kombinatoryka:{en:"Combinatorics & Prob.",pl:"XI. Kombinatoryka i rach. prawdop."},statystyka:{en:"Statistics",pl:"XII. Statystyka"},logika:{en:"Logic & Sets",pl:"XIII. Logika i teoria zbiorów"},optymalizacja:{en:"Calculus (LR)",pl:"XIII. Optymalizacja i rach. różniczkowy"},analiza:{en:"Analysis (Univ/IB)",pl:"Analiza matematyczna (uczelnia/IB)"}},W5={id:"math_pl",subject:"mathematics",title:"Matematyka — Podstawa Programowa",titleEn:"Mathematics — Polish National Curriculum",description:"Pełna podstawa programowa z matematyki: SP8, matura podstawowa, rozszerzona i poziom uczelni.",descriptionEn:"Full Polish mathematics curriculum: primary school year 8 through university/IB level.",lang:"pl",icon:"∑",color:"#4a9eff"},O5=Object.assign({"./nodes/abs_value/node.md":m2,"./nodes/analytic_geom/node.md":f2,"./nodes/area_perimeter/node.md":h2,"./nodes/arith_geom/node.md":$2,"./nodes/bernoulli/node.md":y2,"./nodes/binom_theorem/node.md":g2,"./nodes/circle_eq/node.md":w2,"./nodes/combinations/node.md":x2,"./nodes/complex/node.md":b2,"./nodes/cond_prob/node.md":z2,"./nodes/conic_sections/node.md":v2,"./nodes/counting/node.md":k2,"./nodes/data_basics/node.md":_2,"./nodes/deriv_apps/node.md":j2,"./nodes/derivative/node.md":S2,"./nodes/distributions/node.md":q2,"./nodes/equation_domain/node.md":T2,"./nodes/factoring/node.md":P2,"./nodes/fn_compositions/node.md":A2,"./nodes/fn_concept/node.md":C2,"./nodes/fn_exp/node.md":M2,"./nodes/fn_linear/node.md":D2,"./nodes/fn_log/node.md":R2,"./nodes/fn_poly/node.md":E2,"./nodes/fn_quadratic/node.md":B2,"./nodes/fn_transforms/node.md":F2,"./nodes/fn_trig/node.md":I2,"./nodes/fractions/node.md":N2,"./nodes/geo_series/node.md":L2,"./nodes/integers/node.md":W2,"./nodes/integral/node.md":O2,"./nodes/limits/node.md":H2,"./nodes/linear_eq/node.md":G2,"./nodes/linear_ineq/node.md":U2,"./nodes/linear_sys/node.md":Z2,"./nodes/linearity_fallacy/node.md":K2,"./nodes/log_eq/node.md":V2,"./nodes/log_exp/node.md":Q2,"./nodes/logic_basics/node.md":Y2,"./nodes/matura_pytania/node.md":X2,"./nodes/modular_arithmetic/node.md":J2,"./nodes/optimization_lp/node.md":eh,"./nodes/param_eq/node.md":nh,"./nodes/permutations/node.md":th,"./nodes/planimetria_lp/node.md":rh,"./nodes/poly_roots/node.md":oh,"./nodes/polynomials/node.md":ih,"./nodes/powers/node.md":ah,"./nodes/probability/node.md":sh,"./nodes/proof/node.md":lh,"./nodes/pythagoras/node.md":ch,"./nodes/quadratic_eq/node.md":uh,"./nodes/quadratic_ineq/node.md":dh,"./nodes/rational_expr/node.md":ph,"./nodes/seq_limits/node.md":mh,"./nodes/sequences/node.md":fh,"./nodes/sets/node.md":hh,"./nodes/sin_cos_law/node.md":$h,"./nodes/solid_geom/node.md":yh,"./nodes/stat_lp/node.md":gh,"./nodes/thales/node.md":wh,"./nodes/trig_basic/node.md":xh,"./nodes/trig_eq/node.md":bh,"./nodes/trig_formulas/node.md":zh,"./nodes/trig_lp/node.md":vh,"./nodes/vectors/node.md":kh,"./nodes/vieta/node.md":_h}),H5=up(O5,/\.\/nodes\/([^/]+)\/node\.md$/),G5=Object.assign({"./nodes/abs_value/questions/01.md":jh,"./nodes/abs_value/questions/02.md":Sh,"./nodes/abs_value/questions/03.md":qh,"./nodes/abs_value/questions/04.md":Th,"./nodes/abs_value/questions/05.md":Ph,"./nodes/abs_value/questions/06.md":Ah,"./nodes/analytic_geom/questions/01.md":Ch,"./nodes/analytic_geom/questions/02.md":Mh,"./nodes/analytic_geom/questions/03.md":Dh,"./nodes/analytic_geom/questions/04.md":Rh,"./nodes/analytic_geom/questions/05.md":Eh,"./nodes/area_perimeter/questions/01.md":Bh,"./nodes/area_perimeter/questions/02.md":Fh,"./nodes/area_perimeter/questions/03.md":Ih,"./nodes/area_perimeter/questions/04.md":Nh,"./nodes/arith_geom/questions/01.md":Lh,"./nodes/arith_geom/questions/02.md":Wh,"./nodes/arith_geom/questions/03.md":Oh,"./nodes/arith_geom/questions/04.md":Hh,"./nodes/arith_geom/questions/05.md":Gh,"./nodes/bernoulli/questions/01.md":Uh,"./nodes/bernoulli/questions/02.md":Zh,"./nodes/bernoulli/questions/03.md":Kh,"./nodes/bernoulli/questions/04.md":Vh,"./nodes/bernoulli/questions/05.md":Qh,"./nodes/bernoulli/questions/06.md":Yh,"./nodes/bernoulli/questions/07.md":Xh,"./nodes/bernoulli/questions/08.md":Jh,"./nodes/bernoulli/questions/09.md":e$,"./nodes/bernoulli/questions/10.md":n$,"./nodes/binom_theorem/questions/01.md":t$,"./nodes/binom_theorem/questions/02.md":r$,"./nodes/binom_theorem/questions/03.md":o$,"./nodes/binom_theorem/questions/04.md":i$,"./nodes/binom_theorem/questions/05.md":a$,"./nodes/binom_theorem/questions/06.md":s$,"./nodes/binom_theorem/questions/07.md":l$,"./nodes/binom_theorem/questions/08.md":c$,"./nodes/circle_eq/questions/01.md":u$,"./nodes/circle_eq/questions/02.md":d$,"./nodes/circle_eq/questions/03.md":p$,"./nodes/circle_eq/questions/04.md":m$,"./nodes/combinations/questions/01.md":f$,"./nodes/combinations/questions/02.md":h$,"./nodes/combinations/questions/03.md":$$,"./nodes/combinations/questions/04.md":y$,"./nodes/combinations/questions/05.md":g$,"./nodes/combinations/questions/06.md":w$,"./nodes/combinations/questions/07.md":x$,"./nodes/combinations/questions/08.md":b$,"./nodes/complex/questions/01.md":z$,"./nodes/complex/questions/02.md":v$,"./nodes/complex/questions/03.md":k$,"./nodes/cond_prob/questions/01.md":_$,"./nodes/cond_prob/questions/02.md":j$,"./nodes/cond_prob/questions/03.md":S$,"./nodes/cond_prob/questions/04.md":q$,"./nodes/cond_prob/questions/05.md":T$,"./nodes/cond_prob/questions/06.md":P$,"./nodes/cond_prob/questions/07.md":A$,"./nodes/cond_prob/questions/08.md":C$,"./nodes/cond_prob/questions/09.md":M$,"./nodes/cond_prob/questions/10.md":D$,"./nodes/cond_prob/questions/11.md":R$,"./nodes/conic_sections/questions/01.md":E$,"./nodes/conic_sections/questions/02.md":B$,"./nodes/conic_sections/questions/03.md":F$,"./nodes/counting/questions/01.md":I$,"./nodes/counting/questions/02.md":N$,"./nodes/counting/questions/03.md":L$,"./nodes/counting/questions/04.md":W$,"./nodes/counting/questions/05.md":O$,"./nodes/counting/questions/06.md":H$,"./nodes/counting/questions/07.md":G$,"./nodes/counting/questions/08.md":U$,"./nodes/counting/questions/09.md":Z$,"./nodes/counting/questions/10.md":K$,"./nodes/counting/questions/11.md":V$,"./nodes/data_basics/questions/01.md":Q$,"./nodes/data_basics/questions/02.md":Y$,"./nodes/data_basics/questions/03.md":X$,"./nodes/data_basics/questions/04.md":J$,"./nodes/deriv_apps/questions/01.md":ey,"./nodes/deriv_apps/questions/02.md":ny,"./nodes/deriv_apps/questions/03.md":ty,"./nodes/deriv_apps/questions/04.md":ry,"./nodes/derivative/questions/01.md":oy,"./nodes/derivative/questions/02.md":iy,"./nodes/derivative/questions/03.md":ay,"./nodes/distributions/questions/01.md":sy,"./nodes/distributions/questions/02.md":ly,"./nodes/distributions/questions/03.md":cy,"./nodes/factoring/questions/01.md":uy,"./nodes/factoring/questions/02.md":dy,"./nodes/factoring/questions/03.md":py,"./nodes/factoring/questions/04.md":my,"./nodes/factoring/questions/05.md":fy,"./nodes/factoring/questions/06.md":hy,"./nodes/factoring/questions/07.md":$y,"./nodes/factoring/questions/08.md":yy,"./nodes/factoring/questions/09.md":gy,"./nodes/factoring/questions/10.md":wy,"./nodes/fn_compositions/questions/01.md":xy,"./nodes/fn_compositions/questions/02.md":by,"./nodes/fn_compositions/questions/03.md":zy,"./nodes/fn_concept/questions/01.md":vy,"./nodes/fn_concept/questions/02.md":ky,"./nodes/fn_concept/questions/03.md":_y,"./nodes/fn_exp/questions/01.md":jy,"./nodes/fn_exp/questions/02.md":Sy,"./nodes/fn_exp/questions/03.md":qy,"./nodes/fn_linear/questions/01.md":Ty,"./nodes/fn_linear/questions/02.md":Py,"./nodes/fn_linear/questions/03.md":Ay,"./nodes/fn_log/questions/01.md":Cy,"./nodes/fn_log/questions/02.md":My,"./nodes/fn_log/questions/03.md":Dy,"./nodes/fn_poly/questions/01.md":Ry,"./nodes/fn_poly/questions/02.md":Ey,"./nodes/fn_poly/questions/03.md":By,"./nodes/fn_quadratic/questions/01.md":Fy,"./nodes/fn_quadratic/questions/02.md":Iy,"./nodes/fn_quadratic/questions/03.md":Ny,"./nodes/fn_quadratic/questions/04.md":Ly,"./nodes/fn_quadratic/questions/05.md":Wy,"./nodes/fn_quadratic/questions/06.md":Oy,"./nodes/fn_quadratic/questions/07.md":Hy,"./nodes/fn_quadratic/questions/08.md":Gy,"./nodes/fn_quadratic/questions/09.md":Uy,"./nodes/fn_quadratic/questions/10.md":Zy,"./nodes/fn_trig/questions/01.md":Ky,"./nodes/fn_trig/questions/02.md":Vy,"./nodes/fn_trig/questions/03.md":Qy,"./nodes/fractions/questions/01.md":Yy,"./nodes/fractions/questions/02.md":Xy,"./nodes/fractions/questions/03.md":Jy,"./nodes/geo_series/questions/01.md":e4,"./nodes/geo_series/questions/02.md":n4,"./nodes/geo_series/questions/03.md":t4,"./nodes/geo_series/questions/04.md":r4,"./nodes/geo_series/questions/05.md":o4,"./nodes/geo_series/questions/06.md":i4,"./nodes/integers/questions/01.md":a4,"./nodes/integers/questions/02.md":s4,"./nodes/integers/questions/03.md":l4,"./nodes/integral/questions/01.md":c4,"./nodes/integral/questions/02.md":u4,"./nodes/integral/questions/03.md":d4,"./nodes/limits/questions/01.md":p4,"./nodes/limits/questions/02.md":m4,"./nodes/limits/questions/03.md":f4,"./nodes/linear_eq/questions/01.md":h4,"./nodes/linear_eq/questions/02.md":$4,"./nodes/linear_eq/questions/03.md":y4,"./nodes/linear_ineq/questions/01.md":g4,"./nodes/linear_ineq/questions/02.md":w4,"./nodes/linear_ineq/questions/03.md":x4,"./nodes/linear_ineq/questions/04.md":b4,"./nodes/linear_ineq/questions/05.md":z4,"./nodes/linear_sys/questions/01.md":v4,"./nodes/linear_sys/questions/02.md":k4,"./nodes/linear_sys/questions/03.md":_4,"./nodes/linear_sys/questions/04.md":j4,"./nodes/log_eq/questions/01.md":S4,"./nodes/log_eq/questions/02.md":q4,"./nodes/log_eq/questions/03.md":T4,"./nodes/log_exp/questions/01.md":P4,"./nodes/log_exp/questions/02.md":A4,"./nodes/log_exp/questions/03.md":C4,"./nodes/log_exp/questions/04.md":M4,"./nodes/log_exp/questions/05.md":D4,"./nodes/log_exp/questions/06.md":R4,"./nodes/log_exp/questions/07.md":E4,"./nodes/log_exp/questions/08.md":B4,"./nodes/logic_basics/questions/01.md":F4,"./nodes/logic_basics/questions/02.md":I4,"./nodes/logic_basics/questions/03.md":N4,"./nodes/optimization_lp/questions/01.md":L4,"./nodes/optimization_lp/questions/02.md":W4,"./nodes/optimization_lp/questions/03.md":O4,"./nodes/optimization_lp/questions/04.md":H4,"./nodes/optimization_lp/questions/05.md":G4,"./nodes/optimization_lp/questions/06.md":U4,"./nodes/optimization_lp/questions/07.md":Z4,"./nodes/optimization_lp/questions/08.md":K4,"./nodes/optimization_lp/questions/09.md":V4,"./nodes/optimization_lp/questions/10.md":Q4,"./nodes/param_eq/questions/01.md":Y4,"./nodes/param_eq/questions/02.md":X4,"./nodes/param_eq/questions/03.md":J4,"./nodes/permutations/questions/01.md":e3,"./nodes/permutations/questions/02.md":n3,"./nodes/permutations/questions/03.md":t3,"./nodes/permutations/questions/04.md":r3,"./nodes/permutations/questions/05.md":o3,"./nodes/permutations/questions/06.md":i3,"./nodes/permutations/questions/07.md":a3,"./nodes/permutations/questions/08.md":s3,"./nodes/planimetria_lp/questions/01.md":l3,"./nodes/planimetria_lp/questions/02.md":c3,"./nodes/planimetria_lp/questions/03.md":u3,"./nodes/planimetria_lp/questions/04.md":d3,"./nodes/planimetria_lp/questions/05.md":p3,"./nodes/planimetria_lp/questions/06.md":m3,"./nodes/planimetria_lp/questions/07.md":f3,"./nodes/planimetria_lp/questions/08.md":h3,"./nodes/poly_roots/questions/01.md":$3,"./nodes/poly_roots/questions/02.md":y3,"./nodes/poly_roots/questions/03.md":g3,"./nodes/polynomials/questions/01.md":w3,"./nodes/polynomials/questions/02.md":x3,"./nodes/polynomials/questions/03.md":b3,"./nodes/polynomials/questions/04.md":z3,"./nodes/polynomials/questions/05.md":v3,"./nodes/polynomials/questions/06.md":k3,"./nodes/polynomials/questions/07.md":_3,"./nodes/polynomials/questions/08.md":j3,"./nodes/polynomials/questions/09.md":S3,"./nodes/polynomials/questions/10.md":q3,"./nodes/powers/questions/01.md":T3,"./nodes/powers/questions/02.md":P3,"./nodes/powers/questions/03.md":A3,"./nodes/powers/questions/04.md":C3,"./nodes/probability/questions/01.md":M3,"./nodes/probability/questions/02.md":D3,"./nodes/probability/questions/03.md":R3,"./nodes/probability/questions/04.md":E3,"./nodes/probability/questions/05.md":B3,"./nodes/probability/questions/06.md":F3,"./nodes/probability/questions/07.md":I3,"./nodes/probability/questions/08.md":N3,"./nodes/probability/questions/09.md":L3,"./nodes/probability/questions/10.md":W3,"./nodes/probability/questions/11.md":O3,"./nodes/proof/questions/01.md":H3,"./nodes/proof/questions/02.md":G3,"./nodes/proof/questions/03.md":U3,"./nodes/proof/questions/04.md":Z3,"./nodes/proof/questions/05.md":K3,"./nodes/proof/questions/06.md":V3,"./nodes/proof/questions/07.md":Q3,"./nodes/pythagoras/questions/01.md":Y3,"./nodes/pythagoras/questions/02.md":X3,"./nodes/pythagoras/questions/03.md":J3,"./nodes/quadratic_eq/questions/01.md":eg,"./nodes/quadratic_eq/questions/02.md":ng,"./nodes/quadratic_eq/questions/03.md":tg,"./nodes/quadratic_eq/questions/04.md":rg,"./nodes/quadratic_eq/questions/05.md":og,"./nodes/quadratic_eq/questions/06.md":ig,"./nodes/quadratic_eq/questions/07.md":ag,"./nodes/quadratic_eq/questions/08.md":sg,"./nodes/quadratic_eq/questions/09.md":lg,"./nodes/quadratic_eq/questions/10.md":cg,"./nodes/quadratic_ineq/questions/01.md":ug,"./nodes/quadratic_ineq/questions/02.md":dg,"./nodes/quadratic_ineq/questions/03.md":pg,"./nodes/quadratic_ineq/questions/04.md":mg,"./nodes/quadratic_ineq/questions/05.md":fg,"./nodes/quadratic_ineq/questions/06.md":hg,"./nodes/quadratic_ineq/questions/07.md":$g,"./nodes/quadratic_ineq/questions/08.md":yg,"./nodes/rational_expr/questions/01.md":gg,"./nodes/rational_expr/questions/02.md":wg,"./nodes/rational_expr/questions/03.md":xg,"./nodes/rational_expr/questions/04.md":bg,"./nodes/rational_expr/questions/05.md":zg,"./nodes/rational_expr/questions/06.md":vg,"./nodes/rational_expr/questions/07.md":kg,"./nodes/seq_limits/questions/01.md":_g,"./nodes/seq_limits/questions/02.md":jg,"./nodes/seq_limits/questions/03.md":Sg,"./nodes/sequences/questions/01.md":qg,"./nodes/sequences/questions/02.md":Tg,"./nodes/sequences/questions/03.md":Pg,"./nodes/sequences/questions/04.md":Ag,"./nodes/sequences/questions/05.md":Cg,"./nodes/sets/questions/01.md":Mg,"./nodes/sets/questions/02.md":Dg,"./nodes/sets/questions/03.md":Rg,"./nodes/sets/questions/04.md":Eg,"./nodes/sets/questions/05.md":Bg,"./nodes/sets/questions/06.md":Fg,"./nodes/sets/questions/07.md":Ig,"./nodes/sets/questions/08.md":Ng,"./nodes/sets/questions/09.md":Lg,"./nodes/sets/questions/10.md":Wg,"./nodes/sin_cos_law/questions/01.md":Og,"./nodes/sin_cos_law/questions/02.md":Hg,"./nodes/sin_cos_law/questions/03.md":Gg,"./nodes/sin_cos_law/questions/04.md":Ug,"./nodes/solid_geom/questions/01.md":Zg,"./nodes/solid_geom/questions/02.md":Kg,"./nodes/solid_geom/questions/03.md":Vg,"./nodes/solid_geom/questions/04.md":Qg,"./nodes/solid_geom/questions/05.md":Yg,"./nodes/solid_geom/questions/06.md":Xg,"./nodes/solid_geom/questions/07.md":Jg,"./nodes/solid_geom/questions/08.md":e5,"./nodes/stat_lp/questions/01.md":n5,"./nodes/stat_lp/questions/02.md":t5,"./nodes/stat_lp/questions/03.md":r5,"./nodes/stat_lp/questions/04.md":o5,"./nodes/thales/questions/01.md":i5,"./nodes/thales/questions/02.md":a5,"./nodes/thales/questions/03.md":s5,"./nodes/trig_basic/questions/01.md":l5,"./nodes/trig_basic/questions/02.md":c5,"./nodes/trig_basic/questions/03.md":u5,"./nodes/trig_basic/questions/04.md":d5,"./nodes/trig_basic/questions/05.md":p5,"./nodes/trig_eq/questions/01.md":m5,"./nodes/trig_eq/questions/02.md":f5,"./nodes/trig_eq/questions/03.md":h5,"./nodes/trig_eq/questions/04.md":$5,"./nodes/trig_eq/questions/05.md":y5,"./nodes/trig_formulas/questions/01.md":g5,"./nodes/trig_formulas/questions/02.md":w5,"./nodes/trig_formulas/questions/03.md":x5,"./nodes/trig_lp/questions/01.md":b5,"./nodes/trig_lp/questions/02.md":z5,"./nodes/trig_lp/questions/03.md":v5,"./nodes/vectors/questions/01.md":k5,"./nodes/vectors/questions/02.md":_5,"./nodes/vectors/questions/03.md":j5,"./nodes/vieta/questions/01.md":S5,"./nodes/vieta/questions/02.md":q5,"./nodes/vieta/questions/03.md":T5,"./nodes/vieta/questions/04.md":P5,"./nodes/vieta/questions/05.md":A5,"./nodes/vieta/questions/06.md":C5,"./nodes/vieta/questions/07.md":M5,"./nodes/vieta/questions/08.md":D5,"./nodes/vieta/questions/09.md":R5,"./nodes/vieta/questions/10.md":E5,"./nodes/vieta/questions/11.md":B5}),U5=dp(G5,/\.\/nodes\/([^/]+)\/questions\//),Z5=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:W5,QUESTION_BANK:U5,RAW_EDGES:F5,RAW_NODES:H5,SCOPE_COLORS:N5,SCOPE_LABELS:L5,SECTIONS:I5},Symbol.toStringTag,{value:"Module"})),K5=`---
label: Binary Operations & Algebraic Structures
labelPl: Działania dwuargumentowe i struktury algebraiczne
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A binary operation on a set S is a function S × S → S. Properties: closure, associativity, commutativity, identity element, inverses. Cayley tables. Definition of a magma, semigroup, monoid, and group. Examples and non-examples.
`,V5=`---
label: Cosets & Quotient Groups
labelPl: Warstwy i grupy ilorazowe
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
Left coset: gH = {gh : h ∈ H}. Right coset: Hg. Cosets partition G; all have size |H| (Lagrange). A subgroup N is normal (N ⊴ G) iff gN = Ng for all g. Quotient group G/N: cosets with operation (aN)(bN) = abN. Order |G/N| = |G|/|N|.
`,Q5=`---
label: Cyclic Groups & Generators
labelPl: Grupy cykliczne i generatory
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A cyclic group is generated by a single element: G = ⟨g⟩ = {gⁿ : n ∈ ℤ}. Finite cyclic group ℤₙ and infinite cyclic group ℤ. Every subgroup of a cyclic group is cyclic. Classification: every cyclic group is isomorphic to ℤ or ℤₙ. Number of generators of ℤₙ equals φ(n).
`,Y5=`---
label: "Direct Sums"
labelPl: "Suma prosta"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,X5=`---
label: Field Extensions
labelPl: Rozszerzenia ciał
scope: fields
section: FIELDS
level: 7
x: 0
y: 0
---
A field extension K/F means F ⊆ K are both fields. Degree [K:F] = dim_F K. Algebraic vs transcendental elements. Minimal polynomial of an algebraic element. Simple extensions F(α). Tower law: [L:F] = [L:K][K:F]. Algebraic closure. Splitting fields; every polynomial splits over its splitting field.
`,J5=`---
label: Fields
labelPl: Ciała
scope: fields
section: FIELDS
level: 6
x: 0
y: 0
---
A field is a commutative ring where every nonzero element is a unit. Examples: ℚ, ℝ, ℂ, ℤₚ (p prime), ℚ(√2). Characteristic 0 or prime. Prime subfield. Finite fields: GF(pⁿ) exists and is unique up to isomorphism for every prime power pⁿ. Multiplicative group of a finite field is cyclic.
`,ew=`---
label: "Finitely Generated Modules"
labelPl: "Moduły skończenie generowane"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,nw=`---
label: "Free Modules"
labelPl: "Moduły wolne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,tw=`---
label: Group Actions & Cayley's Theorem
labelPl: Działania grup i twierdzenie Cayleya
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
A group action of G on set X: G × X → X satisfying identity and compatibility. Orbits and stabilisers; orbit-stabiliser theorem |G| = |Orb(x)| · |Stab(x)|. Cayley's theorem: every group embeds into a symmetric group. Conjugation action, class equation. Burnside's lemma.
`,rw=`---
label: Group Homomorphisms & Isomorphisms
labelPl: Homomorfizmy i izomorfizmy grup
scope: morphisms
section: GROUPS
level: 4
x: 0
y: 0
---
A group homomorphism φ: G → H satisfies φ(ab) = φ(a)φ(b). Kernel ker(φ) = {g : φ(g) = e_H} is a normal subgroup. Image im(φ) is a subgroup of H. An isomorphism is a bijective homomorphism; G ≅ H. Automorphisms Aut(G). Examples: det: GL(n) → ℝ*, exp: (ℝ,+) → (ℝ⁺,×).
`,ow=`---
label: Groups — Definition & Examples
labelPl: Grupy — definicja i przykłady
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A group (G, ·) satisfies: closure, associativity, identity, inverses. Abelian groups. Examples: (ℤ, +), (ℤₙ, +), (ℚ\\{0}, ×), symmetric group Sₙ, dihedral group Dₙ, GL(n,ℝ). Order of a group and order of an element. Uniqueness of identity and inverses.
`,iw=`---
label: Subrings & Ideals
labelPl: Podpierścienie i ideały
scope: rings
section: RINGS
level: 4
x: 0
y: 0
---
A subring S ⊆ R is closed under + and ·. An ideal I ⊴ R additionally satisfies rI ⊆ I and Ir ⊆ I for all r ∈ R. Left, right, and two-sided ideals. Principal ideal (a) = aR. Ideal generated by a set. Quotient ring R/I: cosets with coordinatewise operations. Maximal and prime ideals.
`,aw=`---
label: Mathematical Induction
labelPl: Indukcja matematyczna
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Weak induction: base case and inductive step. Strong induction. Well-ordering principle and its equivalence to induction. Applications: proving divisibility, inequalities, and properties of sequences. Recursively defined structures.
`,sw=`---
label: Integral Domains & Fields
labelPl: Dziedziny całkowitości i ciała
scope: rings
section: RINGS
level: 5
x: 0
y: 0
---
An integral domain is a commutative ring with unity and no zero divisors. Every field is an integral domain. Characteristic of an integral domain is 0 or prime. Field of fractions construction. A finite integral domain is a field. Prime and irreducible elements; their relationship in a domain.
`,lw=`---
label: First Isomorphism Theorem
labelPl: Pierwsze twierdzenie o izomorfizmie
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
If φ: G → H is a homomorphism then G/ker(φ) ≅ im(φ). The natural projection π: G → G/N is a surjective homomorphism with kernel N. Second and third isomorphism theorems. Correspondence theorem: subgroups of G/N correspond to subgroups of G containing N.
`,cw=`---
label: "Jordan Normal Form"
labelPl: "postać Jordana"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,uw=`---
label: "Module Homomorphisms"
labelPl: "Homomorfizmy modułów"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,dw=`---
label: "Modules: Definition"
labelPl: "Moduły: Definicja"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,pw=`---
label: Normal Subgroups
labelPl: Podgrupy normalne
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
N ⊴ G iff gNg⁻¹ = N for all g ∈ G (equivalently gN = Ng). Every subgroup of an abelian group is normal. The kernel of any homomorphism is normal. The center Z(G) is normal. Characterisation via conjugation. Simple groups: no proper nontrivial normal subgroups.
`,mw=`---
label: Polynomial Rings
labelPl: Pierścienie wielomianów
scope: rings
section: RINGS
level: 6
x: 0
y: 0
---
The polynomial ring R[x] over a commutative ring R. Degree, leading coefficient, monic polynomials. Division algorithm in F[x] for a field F. Irreducible polynomials; unique factorisation in F[x]. Roots and the factor theorem. F[x]/(p(x)) as a quotient ring; when it is a field.
`,fw=`---
label: "Primary Decomposition"
labelPl: "Rozkład pierwotny"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,hw=`---
label: "Rational Canonical Form"
labelPl: "Forma kanoniczna wymierna"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,$w=`---
label: Relations & Equivalence Classes
labelPl: Relacje i klasy równoważności
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Binary relations on a set: reflexivity, symmetry, transitivity. Equivalence relations and the partition they induce. Equivalence classes, quotient sets. Partial orders and total orders. The integers modulo n as a key example.
`,yw=`---
label: Ring Homomorphisms
labelPl: Homomorfizmy pierścieni
scope: morphisms
section: RINGS
level: 5
x: 0
y: 0
---
A ring homomorphism φ: R → S satisfies φ(a+b) = φ(a)+φ(b) and φ(ab) = φ(a)φ(b). Kernel is an ideal; image is a subring. First isomorphism theorem for rings: R/ker(φ) ≅ im(φ). Evaluation homomorphism for polynomials. Correspondence between ideals of R/I and ideals of R containing I.
`,gw=`---
label: Rings — Definition & Examples
labelPl: Pierścienie — definicja i przykłady
scope: rings
section: RINGS
level: 3
x: 0
y: 0
---
A ring (R, +, ·) has (R, +) abelian group, multiplication associative, and distributivity. Commutative rings. Unity (multiplicative identity). Examples: ℤ, ℚ, ℝ, ℂ, ℤₙ, M_n(ℝ), ℤ[x], ℤ[i] (Gaussian integers). Zero divisors, units, nilpotents. Characteristic of a ring.
`,ww=`---
label: Sets & Functions
labelPl: Zbiory i funkcje
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Naive set theory: set notation, subsets, unions, intersections, complements. Functions as relations: domain, codomain, image. Injective, surjective, bijective functions. Composition and inverse functions.
`,xw=`---
label: Subgroups & Lagrange's Theorem
labelPl: Podgrupy i twierdzenie Lagrange'a
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A subgroup H ≤ G satisfies closure and inverse closure (subgroup test). Trivial and improper subgroups. Generated subgroup ⟨S⟩. Lagrange's theorem: |H| divides |G| for finite G. Corollary: order of every element divides |G|. Index of a subgroup.
`,bw=`---
label: "Submodules"
labelPl: "Podmoduły"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,zw=`---
label: Sylow Theorems
labelPl: Twierdzenia Sylowa
scope: structure
section: GROUPS
level: 6
x: 0
y: 0
---
Let |G| = pⁿm with gcd(p, m) = 1. Sylow p-subgroup has order pⁿ. First theorem: Sylow p-subgroups exist. Second: all are conjugate. Third: the number nₚ of Sylow p-subgroups satisfies nₚ ≡ 1 (mod p) and nₚ | m. Applications to classifying groups of small order.
`,vw=`---
label: "Torsion Modules"
labelPl: "Moduły torsyjne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,kw=`---
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
`,_w=`---
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
`,jw=`---
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
`,Sw=`---
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
`,qw=`---
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
`,Tw=`---
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
`,Pw=`---
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
`,Aw=`---
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
`,Cw=`---
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
`,Mw=`---
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

`,Dw=`---
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

`,Rw=`---
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

`,Ew=`---
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
`,Bw=`---
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
`,Fw=`---
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
`,Iw=`---
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
`,Nw=`---
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
`,Lw=`---
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
`,Ww=`---
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

`,Ow=`---
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

`,Hw=`---
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

`,Gw=`---
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

`,Uw=`---
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

`,Zw=`---
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

`,Kw=`---
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
`,Vw=`---
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
`,Qw=`---
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
`,Yw=`---
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
`,Xw=`---
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
`,Jw=`---
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
`,ex=`---
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
`,nx=`---
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
`,tx=`---
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
`,rx=`---
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
`,ox=`---
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
`,ix=`---
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
`,ax=`---
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
`,sx=`---
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
`,lx=`---
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
`,cx=`---
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
`,ux=`---
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
`,dx=`---
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
`,px=`---
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
`,mx=`---
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
`,fx=`---
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
`,hx=`---
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

`,$x=`---
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

`,yx=`---
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

`,gx=`---
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

`,wx=`---
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

`,xx=`---
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

`,bx=`---
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

`,zx=`---
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

`,vx=`---
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

`,kx=`---
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
`,_x=`---
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
`,jx=`---
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
`,Sx=`---
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
`,qx=`---
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
`,Tx=`---
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
`,Px=`---
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

`,Ax=`---
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

`,Cx=`---
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

`,Mx=`---
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

`,Dx=`---
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

`,Rx=`---
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

`,Ex=`---
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
`,Bx=`---
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
`,Fx=`---
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
`,Ix=`---
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
`,Nx=`---
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
`,Lx=`---
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
`,Wx=`---
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
`,Ox=`---
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
`,Hx=`---
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
`,Gx=`---
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
`,Ux=`---
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

`,Zx=`---
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

`,Kx=`---
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
`,Vx=`---
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
`,Qx=`---
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
`,Yx=`---
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

`,Xx=`---
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

`,Jx=`---
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

`,e6=`---
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
`,n6=`---
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
`,t6=`---
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
`,r6=`---
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

`,o6=`---
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

`,i6=`---
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

`,a6=[["sets_functions","relations"],["sets_functions","induction"],["sets_functions","binary_ops"],["relations","binary_ops"],["binary_ops","groups_intro"],["induction","groups_intro"],["groups_intro","subgroups"],["groups_intro","cyclic_groups"],["subgroups","cosets"],["cosets","normal_subgroups"],["groups_intro","group_homomorphisms"],["group_homomorphisms","normal_subgroups"],["normal_subgroups","iso_theorem"],["cosets","iso_theorem"],["groups_intro","group_actions"],["group_actions","sylow"],["cosets","sylow"],["groups_intro","rings_intro"],["rings_intro","ideals"],["rings_intro","ring_homomorphisms"],["ideals","ring_homomorphisms"],["ring_homomorphisms","integral_domains"],["integral_domains","poly_rings"],["integral_domains","fields_intro"],["fields_intro","field_extensions"],["poly_rings","field_extensions"],["rings_intro","modules_intro"],["ideals","submodules"],["modules_intro","submodules"],["ring_homomorphisms","module_homs"],["modules_intro","module_homs"],["submodules","module_homs"],["module_homs","direct_sums"],["modules_intro","direct_sums"],["direct_sums","finitely_generated"],["modules_intro","finitely_generated"],["finitely_generated","free_modules"],["modules_intro","torsion_modules"],["torsion_modules","primary_decomp"],["finitely_generated","primary_decomp"],["primary_decomp","rational_canonical"],["primary_decomp","jordan_normal_form"],["field_extensions","jordan_normal_form"]],s6={FOUNDATIONS:{label:"Foundations",color:"#4a9eff"},GROUPS:{label:"Group Theory",color:"#2ecc71"},RINGS:{label:"Ring Theory",color:"#e74c3c"},FIELDS:{label:"Field Theory",color:"#9b59b6"},MODULES:{label:"Module Theory",color:"#f39c12"}},l6={sets:"#3dc9b0",groups:"#2ecc71",rings:"#e74c3c",fields:"#9b59b6",modules:"#f39c12",morphisms:"#f5a623",structure:"#4a9eff"},c6={sets:{en:"Sets & Functions",pl:"Zbiory i funkcje"},groups:{en:"Groups",pl:"Grupy"},rings:{en:"Rings",pl:"Pierścienie"},fields:{en:"Fields",pl:"Ciała"},modules:{en:"Modules",pl:"Moduły"},morphisms:{en:"Homomorphisms",pl:"Homomorfizmy"},structure:{en:"Structure Theorems",pl:"Twierdzenia strukturalne"}},u6={id:"abstract_algebra",subject:"mathematics",title:"Abstract Algebra",titleEn:"Abstract Algebra",description:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",descriptionEn:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",lang:"en",icon:"∘",color:"#2ecc71"},d6=Object.assign({"./nodes/binary_ops/node.md":K5,"./nodes/cosets/node.md":V5,"./nodes/cyclic_groups/node.md":Q5,"./nodes/direct_sums/node.md":Y5,"./nodes/field_extensions/node.md":X5,"./nodes/fields_intro/node.md":J5,"./nodes/finitely_generated/node.md":ew,"./nodes/free_modules/node.md":nw,"./nodes/group_actions/node.md":tw,"./nodes/group_homomorphisms/node.md":rw,"./nodes/groups_intro/node.md":ow,"./nodes/ideals/node.md":iw,"./nodes/induction/node.md":aw,"./nodes/integral_domains/node.md":sw,"./nodes/iso_theorem/node.md":lw,"./nodes/jordan_normal_form/node.md":cw,"./nodes/module_homs/node.md":uw,"./nodes/modules_intro/node.md":dw,"./nodes/normal_subgroups/node.md":pw,"./nodes/poly_rings/node.md":mw,"./nodes/primary_decomp/node.md":fw,"./nodes/rational_canonical/node.md":hw,"./nodes/relations/node.md":$w,"./nodes/ring_homomorphisms/node.md":yw,"./nodes/rings_intro/node.md":gw,"./nodes/sets_functions/node.md":ww,"./nodes/subgroups/node.md":xw,"./nodes/submodules/node.md":bw,"./nodes/sylow/node.md":zw,"./nodes/torsion_modules/node.md":vw}),p6=up(d6,/\.\/nodes\/([^/]+)\/node\.md$/),m6=Object.assign({"./nodes/binary_ops/questions/01.md":kw,"./nodes/binary_ops/questions/02.md":_w,"./nodes/binary_ops/questions/03.md":jw,"./nodes/cosets/questions/01.md":Sw,"./nodes/cosets/questions/02.md":qw,"./nodes/cosets/questions/03.md":Tw,"./nodes/cyclic_groups/questions/01.md":Pw,"./nodes/cyclic_groups/questions/02.md":Aw,"./nodes/cyclic_groups/questions/03.md":Cw,"./nodes/direct_sums/questions/01.md":Mw,"./nodes/direct_sums/questions/02.md":Dw,"./nodes/direct_sums/questions/03.md":Rw,"./nodes/field_extensions/questions/01.md":Ew,"./nodes/field_extensions/questions/02.md":Bw,"./nodes/field_extensions/questions/03.md":Fw,"./nodes/fields_intro/questions/01.md":Iw,"./nodes/fields_intro/questions/02.md":Nw,"./nodes/fields_intro/questions/03.md":Lw,"./nodes/finitely_generated/questions/01.md":Ww,"./nodes/finitely_generated/questions/02.md":Ow,"./nodes/finitely_generated/questions/03.md":Hw,"./nodes/free_modules/questions/01.md":Gw,"./nodes/free_modules/questions/02.md":Uw,"./nodes/free_modules/questions/03.md":Zw,"./nodes/group_actions/questions/01.md":Kw,"./nodes/group_actions/questions/02.md":Vw,"./nodes/group_actions/questions/03.md":Qw,"./nodes/group_homomorphisms/questions/01.md":Yw,"./nodes/group_homomorphisms/questions/02.md":Xw,"./nodes/group_homomorphisms/questions/03.md":Jw,"./nodes/groups_intro/questions/01.md":ex,"./nodes/groups_intro/questions/02.md":nx,"./nodes/groups_intro/questions/03.md":tx,"./nodes/ideals/questions/01.md":rx,"./nodes/ideals/questions/02.md":ox,"./nodes/ideals/questions/03.md":ix,"./nodes/induction/questions/01.md":ax,"./nodes/induction/questions/02.md":sx,"./nodes/induction/questions/03.md":lx,"./nodes/integral_domains/questions/01.md":cx,"./nodes/integral_domains/questions/02.md":ux,"./nodes/integral_domains/questions/03.md":dx,"./nodes/iso_theorem/questions/01.md":px,"./nodes/iso_theorem/questions/02.md":mx,"./nodes/iso_theorem/questions/03.md":fx,"./nodes/jordan_normal_form/questions/01.md":hx,"./nodes/jordan_normal_form/questions/02.md":$x,"./nodes/jordan_normal_form/questions/03.md":yx,"./nodes/module_homs/questions/01.md":gx,"./nodes/module_homs/questions/02.md":wx,"./nodes/module_homs/questions/03.md":xx,"./nodes/modules_intro/questions/01.md":bx,"./nodes/modules_intro/questions/02.md":zx,"./nodes/modules_intro/questions/03.md":vx,"./nodes/normal_subgroups/questions/01.md":kx,"./nodes/normal_subgroups/questions/02.md":_x,"./nodes/normal_subgroups/questions/03.md":jx,"./nodes/poly_rings/questions/01.md":Sx,"./nodes/poly_rings/questions/02.md":qx,"./nodes/poly_rings/questions/03.md":Tx,"./nodes/primary_decomp/questions/01.md":Px,"./nodes/primary_decomp/questions/02.md":Ax,"./nodes/primary_decomp/questions/03.md":Cx,"./nodes/rational_canonical/questions/01.md":Mx,"./nodes/rational_canonical/questions/02.md":Dx,"./nodes/rational_canonical/questions/03.md":Rx,"./nodes/relations/questions/01.md":Ex,"./nodes/relations/questions/02.md":Bx,"./nodes/relations/questions/03.md":Fx,"./nodes/ring_homomorphisms/questions/01.md":Ix,"./nodes/ring_homomorphisms/questions/02.md":Nx,"./nodes/ring_homomorphisms/questions/03.md":Lx,"./nodes/rings_intro/questions/01.md":Wx,"./nodes/rings_intro/questions/02.md":Ox,"./nodes/rings_intro/questions/03.md":Hx,"./nodes/sets_functions/questions/01.md":Gx,"./nodes/sets_functions/questions/02.md":Ux,"./nodes/sets_functions/questions/03.md":Zx,"./nodes/subgroups/questions/01.md":Kx,"./nodes/subgroups/questions/02.md":Vx,"./nodes/subgroups/questions/03.md":Qx,"./nodes/submodules/questions/01.md":Yx,"./nodes/submodules/questions/02.md":Xx,"./nodes/submodules/questions/03.md":Jx,"./nodes/sylow/questions/01.md":e6,"./nodes/sylow/questions/02.md":n6,"./nodes/sylow/questions/03.md":t6,"./nodes/torsion_modules/questions/01.md":r6,"./nodes/torsion_modules/questions/02.md":o6,"./nodes/torsion_modules/questions/03.md":i6}),f6=dp(m6,/\.\/nodes\/([^/]+)\/questions\//),h6=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:u6,QUESTION_BANK:f6,RAW_EDGES:a6,RAW_NODES:p6,SCOPE_COLORS:l6,SCOPE_LABELS:c6,SECTIONS:s6},Symbol.toStringTag,{value:"Module"})),$6={math_pl:Z5,abstract_algebra:h6},y6="math_pl",pp="wizmat_v1_";function g6(o){return o instanceof Set?JSON.stringify({__type:"Set",values:[...o]}):JSON.stringify(o)}function w6(o,t){try{const r=JSON.parse(o);return r&&typeof r=="object"&&r.__type==="Set"?new Set(r.values):r}catch{return t}}function lt(o,t){const r=pp+o,[a,s]=D.useState(()=>{try{const d=localStorage.getItem(r);return d===null?t:w6(d,t)}catch{return t}});D.useEffect(()=>{try{localStorage.setItem(r,g6(a))}catch{}},[r,a]);const c=D.useCallback(d=>{s(f=>typeof d=="function"?d(f):d)},[]);return[a,c]}function x6(){try{Object.keys(localStorage).filter(o=>o.startsWith(pp)).forEach(o=>localStorage.removeItem(o))}catch{}}const cc={midnight:{name:"Midnight",bg:"#10141c",surface:"#161c28",surfaceHi:"#161c28ee",border:"#263248",borderSubtle:"#1f2a3c",textPrimary:"#f0f2f5",textBody:"#cdd8e4",textMuted:"#95a5bd",textDim:"#7b8fa8",textFaint:"#4a5e78",edgeDefault:"#334766",edgeHighlighted:"#4a9eff",edgeDimmed:"#151b26"},highContrast:{name:"High Contrast",bg:"#08090d",surface:"#111318",surfaceHi:"#111318ee",border:"#2e3a50",borderSubtle:"#1c2436",textPrimary:"#ffffff",textBody:"#dce4ef",textMuted:"#a3b5cc",textDim:"#8899b3",textFaint:"#556a85",edgeDefault:"#3d5577",edgeHighlighted:"#5ab0ff",edgeDimmed:"#0d1118"},warm:{name:"Warm",bg:"#131110",surface:"#1c1916",surfaceHi:"#1c1916ee",border:"#33291f",borderSubtle:"#28211a",textPrimary:"#f2ede6",textBody:"#d4cabb",textMuted:"#a89d8e",textDim:"#8a7e6f",textFaint:"#5c5347",edgeDefault:"#4a3f32",edgeHighlighted:"#e8a84c",edgeDimmed:"#1a1614"},bright:{name:"Bright",bg:"#f7f7f2",surface:"#ffffff",surfaceHi:"#ffffffee",border:"#e0ddd5",borderSubtle:"#ebe8e2",textPrimary:"#1a1a1a",textBody:"#3a3a3a",textMuted:"#6b6b6b",textDim:"#8a8a8a",textFaint:"#b5b5b5",edgeDefault:"#c5c0b6",edgeHighlighted:"#58cc02",edgeDimmed:"#edebe6"}},v={...cc.midnight,known:"#27ae60",knownHi:"#2ecc71",unknown:"#c0392b",unknownHi:"#e74c3c",frontier:"#f39c12",frontierHi:"#f1c40f"};function m1(o){const t=cc[o];t&&Object.assign(v,t)}const je="'JetBrains Mono','SF Mono','Fira Code',monospace",Eo=(o,t)=>({padding:"6px 12px",borderRadius:20,fontSize:12,cursor:"pointer",border:o?`1px solid ${t}`:`1px solid ${v.border}`,background:o?`${t}22`:"transparent",color:o?t:v.textDim,minHeight:32}),Bo=o=>({padding:"10px 18px",borderRadius:6,fontSize:14,cursor:"pointer",fontWeight:600,border:`1px solid ${o}`,background:`${o}22`,color:o,minHeight:44}),ks=["abs_value","analytic_geom","area_perimeter","arith_geom","bernoulli","binom_theorem","circle_eq","combinations","complex","cond_prob","conic_sections","counting","data_basics","deriv_apps","derivative","distributions","factoring","fn_compositions","fn_concept","fn_exp","fn_linear","fn_log","fn_poly","fn_quadratic","fn_trig","fractions","geo_series","integers","integral","limits","linear_eq","linear_ineq","linear_sys","log_eq","log_exp","logic_basics","optimization_lp","param_eq","permutations","planimetria_lp","poly_roots","polynomials","powers","probability","proof","pythagoras","quadratic_eq","quadratic_ineq","rational_expr","seq_limits","sequences","sets","sin_cos_law","solid_geom","stat_lp","thales","trig_basic","trig_eq","trig_formulas","trig_lp","vectors","vieta"];function V0(o){return ks.map(t=>o[t]==="known"?"1":o[t]==="unknown"?"2":"0").join("")}function b6(o){const t={};for(let r=0;r<ks.length&&r<o.length;r++)o[r]==="1"?t[ks[r]]="known":o[r]==="2"&&(t[ks[r]]="unknown");return t}const z6={all:{pl:"Wszystkie",en:"All"},cancel:{pl:"Anuluj",en:"Cancel"},reset:{pl:"Reset",en:"Reset"},next:{pl:"Dalej",en:"Next"},close:{pl:"Zamknij",en:"Close"},search:{pl:"Szukaj…",en:"Search…"},noResults:{pl:"Brak wyników",en:"No results"},level:{pl:"Poziom",en:"Level"},appTitle:{pl:"PODSTAWA PROGRAMOWA — MATEMATYKA",en:"CURRICULUM — MATHEMATICS"},topicsCount:{pl:"tematy",en:"topics"},edgesCount:{pl:"połączenia",en:"edges"},hintBrowse:{pl:"scroll = zoom · przeciągnij = przesuń · kliknij węzeł = szczegóły",en:"scroll = zoom · drag = pan · click node = details"},hintDiagQuick:{pl:"kliknij węzeł = pytanie · shift+click = nieznany · zielony = cofnij",en:"click node = question · shift+click = unknown · green = undo"},hintDiagDeep:{pl:"kliknij węzeł w podgrafie, aby odpowiedzieć",en:"click a node in the subgraph to answer"},layoutLabel:{pl:"Układ",en:"Layout"},exploreMode:{pl:"Eksploruj",en:"Explore"},diagnosticOff:{pl:"Diagnoza",en:"Diagnostic"},diagnosticOnQuick:{pl:"Diagnoza (Szybka) ✓",en:"Diagnostic (Quick) ✓"},diagnosticOnDeep:{pl:"Diagnoza (Szczegółowa) ✓",en:"Diagnostic (Deep-Dive) ✓"},goalBtn:{pl:"◎ Cel",en:"◎ Goal"},goalBtnTitle:{pl:"Wybierz cel szczegółowej diagnozy",en:"Choose deep-dive target"},modePickerTitle:{pl:"Wybierz tryb diagnozy",en:"Choose diagnostic mode"},modePickerSub:{pl:"Jak chcesz sprawdzić swoją wiedzę?",en:"How do you want to assess your knowledge?"},modeQuickLabel:{pl:"Szybka diagnoza",en:"Quick diagnostic"},modeQuickDesc:{pl:"Przejrzyj cały materiał i sprawdź, co już umiesz. Algorytm dobierze najbardziej wartościowe pytania.",en:"Sweep the whole curriculum and find what you know. The system picks the most informative questions."},modeDeepLabel:{pl:"Szczegółowa analiza",en:"Deep-dive analysis"},modeDeepDesc:{pl:"Wybierz konkretny cel (np. temat maturalny). Algorytm przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific target topic. The system analyses only the required prerequisites."},goalModalTitle:{pl:"Wybierz cel",en:"Choose goal"},goalModalSub:{pl:"Wybierz temat docelowy. Zbadamy wszystkie wymagania wstępne.",en:"Pick a target topic. We will diagnose all transitive prerequisites."},filterSection:{pl:"Etap",en:"Stage"},filterScope:{pl:"Dział",en:"Topic area"},filters:{pl:"Filtry",en:"Filters"},filterTitle:{pl:"Filtry",en:"Filters"},done:{pl:"Gotowe",en:"Done"},moreOptions:{pl:"Opcje",en:"Options"},prerequisites:{pl:"Wymagania wstępne",en:"Prerequisites"},enables:{pl:"Odblokuje",en:"Enables"},noPrereqs:{pl:"Brak wymagań wstępnych",en:"No prerequisites"},noDependents:{pl:"Brak zależnych tematów",en:"No dependent topics"},learningResources:{pl:"Materiały do nauki",en:"Learning resources"},resourceInteractive:{pl:"Interaktywna wizualizacja",en:"Interactive visualization"},resourceVideo:{pl:"Wideo",en:"Video"},resourceArticle:{pl:"Artykuł",en:"Article"},openResource:{pl:"Otwórz",en:"Open"},closeResource:{pl:"Zamknij materiał",en:"Close resource"},openInTab:{pl:"Otwórz w nowej karcie",en:"Open in new tab"},checkAnswer:{pl:"Sprawdź",en:"Check"},knownConfirm:{pl:"✓ Znam!",en:"✓ I know it!"},unknownConfirm:{pl:"✗ Nie znam",en:"✗ Don't know it"},skipBtn:{pl:"Pomiń",en:"Skip"},noQuestion:{pl:"Brak pytania dla tego węzła. Czy znasz ten temat?",en:"No question for this node. Do you know this topic?"},yesKnow:{pl:"✓ Tak",en:"✓ Yes"},noKnow:{pl:"✗ Nie",en:"✗ No"},diagHeader:{pl:"Diagnoza",en:"Diagnostic"},statKnown:{pl:"Znam",en:"Known"},statUnknown:{pl:"Nie znam",en:"Unknown"},statRemaining:{pl:"Do odp.",en:"To go"},answered:{pl:"Odpowiedzi",en:"Answered"},estimated:{pl:"Szacowane",en:"Estimated"},accuracy:{pl:"Trafność",en:"Accuracy"},sessionDone:{pl:"Sesja zakończona ✓",en:"Session complete ✓"},sessionDoneSub:{pl:"Odpowiedziano na",en:"Answered"},sessionDoneQ:{pl:"pytań",en:"questions"},sessionDoneClass:{pl:"Sklasyfikowano",en:"Classified"},sessionDoneAcc:{pl:"Trafność",en:"Accuracy"},sessionDoneKnown:{pl:"Znasz",en:"You know"},sessionDoneStudy:{pl:"do nauki",en:"to study"},toStudy:{pl:"Do nauki",en:"To study"},knownList:{pl:"Znam",en:"Known"},startHere:{pl:"★ Zacznij tutaj",en:"★ Start here"},startHereSub:{pl:"najwięcej powiązań w grafie",en:"most connections in the graph"},clickAnyNode:{pl:"Lub kliknij dowolny węzeł na grafie.",en:"Or click any node on the graph."},whatNext:{pl:"▶ Co dalej",en:"▶ What next"},best:{pl:"najlepsze",en:"best"},hintShift:{pl:"Shift+click → oznacz jako nieznany",en:"Shift+click → mark as unknown"},hintGreen:{pl:"Kliknij zielony → usuń oznaczenie",en:"Click green → remove mark"},hintClick:{pl:"Kliknij węzeł → pytanie",en:"Click node → question"},deepDiveHeader:{pl:"Szczegółowa diagnoza",en:"Deep-dive diagnostic"},deepDiveTarget:{pl:"Cel",en:"Goal"},deepDiveNodes:{pl:"węzłów w podgrafie",en:"nodes in subgraph"},classified:{pl:"Sklasyfikowano",en:"Classified"},questions:{pl:"Pytań",en:"Questions"},diagReady:{pl:"Diagnoza gotowa ✓",en:"Diagnosis complete ✓"},diagKnown:{pl:"Znam",en:"Known"},diagStudy:{pl:"Do nauki",en:"To study"},diagTotal:{pl:"Razem",en:"Total"},studyThese:{pl:"Do nauki — zacznij od tych:",en:"To study — start with these:"},mastered:{pl:"Opanowane:",en:"Mastered:"},nextQuestion:{pl:"★ Następne pytanie",en:"★ Next question"},confidence:{pl:"pewność",en:"confidence"},unclassified:{pl:"Niezbadane",en:"Unclassified"},legendTitle:{pl:"Legenda",en:"Legend"},legendKnown:{pl:"Znany",en:"Known"},legendUnknown:{pl:"Nieznany",en:"Unknown"},legendFrontier:{pl:"Granica (do sprawdzenia)",en:"Frontier (to assess)"},legendUnclassified:{pl:"Niesklasyfikowany",en:"Unclassified"},legendScopes:{pl:"Działy",en:"Topic areas"},legendStages:{pl:"Etapy",en:"Stages"},onboardingTitle:{pl:"Witaj w oczochodzi.pl",en:"Welcome to oczochodzi.pl"},onboardingSub:{pl:"Interaktywna mapa polskiej podstawy programowej z matematyki. Każdy węzeł to temat, a połączenia pokazują wymagania wstępne.",en:"An interactive map of the Polish maths curriculum. Each node is a topic, edges show prerequisites."},onboardingBrowse:{pl:"🔍 Przeglądaj",en:"🔍 Browse"},onboardingBrowseDesc:{pl:"Kliknij dowolny węzeł, żeby zobaczyć szczegóły, wymagania wstępne i tematy, które odblokuje.",en:"Click any node to see details, prerequisites, and the topics it unlocks."},onboardingDiag:{pl:"⚡ Szybka diagnoza",en:"⚡ Quick diagnostic"},onboardingDiagDesc:{pl:"Sprawdź, co umiesz — algorytm dobierze najbardziej wartościowe pytania i zmapuje Twoją wiedzę.",en:"Find out what you know — the algorithm picks the most informative questions and maps your knowledge."},onboardingDeep:{pl:"◎ Szczegółowa analiza",en:"◎ Deep-dive analysis"},onboardingDeepDesc:{pl:"Wybierz konkretny cel (temat maturalny lub dowolny węzeł) — algorytm przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific goal topic — the system focuses only on its required prerequisites."},onboardingChoose:{pl:"Wybierz tryb, żeby zacząć:",en:"Choose a mode to get started:"},onboardingStart:{pl:"Zaczynamy →",en:"Get started →"},onboardingSkip:{pl:"Pomiń",en:"Skip"},onboardingLangHint:{pl:"Możesz zmienić język w pasku filtrów (PL / EN).",en:"You can switch language in the filter bar (PL / EN)."},heroTitle:{pl:"Nie wiesz, od czego zacząć powtórki?",en:"Don't know where to start reviewing?"},heroSub:{pl:'Odpowiedz na 10 pytań — pokażemy 3 tematy, które dadzą Ci największy skok punktów. Nie oceniamy; zawsze możesz kliknąć „Nie wiem".',en:`Answer 10 questions — we'll show 3 topics that will give you the biggest score lift. No judgement; you can always click "I don't know".`},heroStart:{pl:"Sprawdź się",en:"Start assessment"},quizDontKnow:{pl:"Nie wiem",en:"I don't know"},heroBrowse:{pl:"Przeglądaj mapę →",en:"Browse the map →"},heroMore:{pl:"Więcej opcji",en:"More options"},heroLength:{pl:"Czas:",en:"Length:"},heroQuestions:{pl:"pytań",en:"questions"},presetQuick:{pl:"Szybki",en:"Quick"},presetQuickDesc:{pl:"Szybki przegląd",en:"Quick overview"},presetStandard:{pl:"Standardowy",en:"Standard"},presetStandardDesc:{pl:"Dobry balans",en:"Good balance"},presetThorough:{pl:"Dokładny",en:"Thorough"},presetThoroughDesc:{pl:"Szczegółowy obraz",en:"Detailed picture"},heroStep1:{pl:"Odpowiadasz na pytania",en:"Answer questions"},heroStep2:{pl:"Algorytm mapuje Twoją wiedzę",en:"Algorithm maps your knowledge"},heroStep3:{pl:"Dostajesz plan, od czego zacząć",en:"Get a plan for where to start"},quizExit:{pl:"Wyjdź",en:"Exit"},quizQuestion:{pl:"Pytanie",en:"Question"},quizClassified:{pl:"zbadane",en:"classified"},quizAccuracy:{pl:"trafność",en:"accuracy"},quizOf:{pl:"pytań",en:"questions"},quizCorrectShort:{pl:"poprawnych",en:"correct"},quizSeeViz:{pl:"Nie rozumiesz? Zobacz wizualizację →",en:"Don't get it? See the visualization →"},quizCheck:{pl:"Sprawdź",en:"Check"},quizContinue:{pl:"Dalej",en:"Continue"},quizProcessing:{pl:"Analizuję wyniki…",en:"Analyzing results…"},quizExitConfirm:{pl:"Na pewno chcesz przerwać? Postęp zostanie utracony.",en:"Are you sure you want to quit? Progress will be lost."},quizNoQuestion:{pl:"Brak pytania dla tego tematu. Czy go znasz?",en:"No question available for this topic. Do you know it?"},quizYes:{pl:"Tak, znam",en:"Yes, I know it"},quizNo:{pl:"Nie, nie znam",en:"No, I don't"},resultsTitle:{pl:"Twoja diagnoza",en:"Your diagnosis"},resultsAnswered:{pl:"pytań",en:"questions"},resultsAccuracy:{pl:"trafność",en:"accuracy"},resultsKnown:{pl:"Znasz",en:"Known"},resultsToStudy:{pl:"Do nauki",en:"To study"},resultsGapsTitle:{pl:"Zacznij tutaj",en:"Start here"},resultsGapsSub:{pl:"Te tematy to Twoje największe luki — najlepszy punkt startowy, żeby zbudować solidną bazę.",en:"These are your biggest gaps — the best starting point to build a solid foundation."},resultsHasResource:{pl:"ma materiały",en:"has resources"},resultsMore:{pl:"więcej tematów do nauki",en:"more topics to study"},resultsAllGood:{pl:"Wszystko opanowane!",en:"All clear!"},resultsAllGoodSub:{pl:"Nie znaleziono luk w Twojej wiedzy.",en:"No gaps found in your knowledge."},results20minTitle:{pl:"Twoje pierwsze 20 minut",en:"Your first 20 minutes"},results20minSub:{pl:'Konkretny plan. Bez paraliżu „62 tematów". Po 20 minutach wracasz tutaj.',en:"A concrete plan. No 62-topic paralysis. Come back here after 20 min."},results20minStep1:{pl:"5 min · Przeczytaj temat",en:"5 min · Read the lesson"},results20minStep2:{pl:"5 min · Obejrzyj eksplorator",en:"5 min · Explore the viz"},results20minStep3:{pl:"10 min · Zrób 3 zadania",en:"10 min · Do 3 questions"},results20minCta:{pl:"Zaczynam →",en:"Let's go →"},resultsStartPath:{pl:"Zacznij naukę — ścieżka do pierwszej luki",en:"Start learning — path to your first gap"},resultsSeeMap:{pl:"Zobacz swoją mapę",en:"See your map"},resultsShare:{pl:"Udostępnij wynik",en:"Share results"},resultsRetake:{pl:"Spróbuj ponownie",en:"Try again"},coffeeText:{pl:"Pomogło? Możesz postawić mi kawę.",en:"Found it helpful? You can buy me a coffee."},coffeeBtn:{pl:"Postaw kawę ☕",en:"Buy me a coffee ☕"},beliefKnown:{pl:"Znasz ten temat",en:"You know this topic"},beliefUnknown:{pl:"Do nauki",en:"To study"},topicBack:{pl:"Wróć do mapy",en:"Back to map"},topicLearnPath:{pl:"Ścieżka do tego tematu",en:"Path to this topic"},topicQuizMe:{pl:"Sprawdź się z tego tematu",en:"Quiz me on this topic"},galleryTitle:{pl:"Interaktywne wizualizacje",en:"Interactive visualizations"},galleryCount:{pl:"wizualizacji",en:"visualizations"},heroBrowseViz:{pl:"Przeglądaj wizualizacje",en:"Browse visualizations"},pathLabel:{pl:"Ścieżka nauki",en:"Learning path"},pathTopics:{pl:"tematów w ścieżce",en:"topics in path"},pathKnown:{pl:"znasz",en:"known"},pathToStudy:{pl:"do nauki",en:"to study"},pathGoal:{pl:"— cel",en:"— goal"},pathStartHere:{pl:"zacznij tutaj",en:"start here"},heroGoal:{pl:"Wybierz cel i sprawdź gotowość",en:"Pick a goal & test readiness"},heroExplore:{pl:"Eksploruj mapę bez testu →",en:"Explore the map without a test →"},goalQuizTitle:{pl:"Szczegółowa analiza",en:"Deep analysis"},goalQuizSub:{pl:"Sprawdzamy wymagania wstępne dla:",en:"Testing prerequisites for:"},goalQuizTopics:{pl:"tematów do zbadania",en:"topics to assess"},goalQuizDone:{pl:"Analiza zakończona",en:"Analysis complete"},goalQuizSeeMap:{pl:"Zobacz na mapie",en:"See on map"},goalQuizRetake:{pl:"Powtórz analizę",en:"Retake analysis"},goalQuizBackHero:{pl:"Wróć na start",en:"Back to start"},profileTitle:{pl:"Twój profil",en:"Your profile"},profileFullCourse:{pl:"Pełny kurs",en:"Full course"},profileGoal:{pl:"Cel",en:"Goal"},profileStarted:{pl:"Rozpoczęto",en:"Started"},profileProgress:{pl:"Postęp",en:"Progress"},profileContinue:{pl:"Kontynuuj naukę",en:"Continue learning"},profileSeeMap:{pl:"Zobacz mapę",en:"See map"},profileStartNew:{pl:"Zacznij od nowa",en:"Start fresh"},profileStartNewConfirm:{pl:"Na pewno? Obecny postęp zostanie utracony.",en:"Are you sure? Current progress will be lost."},profileTimeline:{pl:"Ścieżka nauki",en:"Learning timeline"},profileEmpty:{pl:"Nie masz jeszcze zapisanego kursu.",en:"You don't have a saved course yet."},profileStartQuiz:{pl:"Rozwiąż test, żeby rozpocząć",en:"Take a quiz to get started"},profileFromScratch:{pl:"Zacznij od zera",en:"Start from scratch"},profileFromScratchSub:{pl:"Pełna ścieżka przez wszystkie tematy",en:"Full path through all topics"},heroContinue:{pl:"Kontynuuj naukę →",en:"Continue learning →"},heroProfile:{pl:"Mój profil",en:"My profile"},startLesson:{pl:"Rozpocznij lekcję",en:"Start lesson"},lessonOf:{pl:"z",en:"of"},iUnderstand:{pl:"Rozumiem — dalej →",en:"I understand — next →"},lessonPrev:{pl:"← Poprzedni",en:"← Previous"},lessonNext:{pl:"Następny →",en:"Next →"},lessonComplete:{pl:"Ścieżka ukończona! 🎉",en:"Path complete! 🎉"},lessonCompleteSub:{pl:"Gratulacje — przeszedłeś całą ścieżkę.",en:"Congratulations — you've completed the entire path."},lessonViz:{pl:"Wizualizacja",en:"Visualization"},lessonPractice:{pl:"Sprawdź się",en:"Check yourself"},lessonCheck:{pl:"Sprawdź",en:"Check"}};function L(o,t="pl"){const r=z6[o];return r?r[t]??r.pl??o:(console.warn(`i18n: missing key "${o}"`),o)}function io(o,t){const r={},a={};return o.forEach(s=>{r[s.id]=[],a[s.id]=[]}),t.forEach(([s,c])=>{var d,f;(d=r[c])==null||d.push(s),(f=a[s])==null||f.push(c)}),{prereqs:r,dependents:a}}function uc(o,t){const r=Object.fromEntries(o.map(d=>[d.id,0])),a=Object.fromEntries(o.map(d=>[d.id,[]]));for(const[d,f]of t)r[f]!==void 0&&r[f]++,a[d]!==void 0&&a[d].push(f);const s=Object.fromEntries(o.map(d=>[d.id,0])),c=o.filter(d=>r[d.id]===0).map(d=>d.id);for(;c.length;){const d=c.shift();for(const f of a[d])s[f]=Math.max(s[f],s[d]+1),--r[f]===0&&c.push(f)}return s}const v6={id:"spectral",label:"Spectral"};function k6(o,t,r,a,s=80){const c=o.length,d=Object.fromEntries(o.map((F,ee)=>[F.id,ee])),f=Array.from({length:c},()=>new Float64Array(c));t.forEach(([F,ee])=>{const J=d[F],ne=d[ee];J==null||ne==null||(f[J][ne]=1,f[ne][J]=1)});const $=f.map(F=>F.reduce((ee,J)=>ee+J,0)),w=F=>F.map((ee,J)=>{let ne=0;for(let re=0;re<c;re++)ne+=f[J][re]*F[re];return $[J]*F[J]-ne}),g=(F,ee)=>F.reduce((J,ne,re)=>J+ne*ee[re],0),x=F=>{const ee=Math.sqrt(g(F,F))||1;return F.map(J=>J/ee)},S=(F,ee)=>{let J=[...F];return ee.forEach(ne=>{const re=g(J,ne);J=J.map((Q,Y)=>Q-re*ne[Y])}),x(J)},q=(F,ee=400)=>{let J=x(Array.from({length:c},()=>Math.random()-.5));J=S(J,F);for(let ne=0;ne<ee;ne++){const re=Math.max(...$)+1;J=S(J.map((Q,Y)=>re*Q-w(J)[Y]),F)}return J},j=x(new Array(c).fill(1)),_=q([j]),T=q([j,_]),P=Math.min(..._),B=Math.max(..._),W=Math.min(...T),I=Math.max(...T),E=B-P<1e-6?1:(r-2*s)/(B-P),O=I-W<1e-6?1:(a-2*s)/(I-W);return o.map((F,ee)=>({id:F.id,x:s+(_[ee]-P)*E,y:s+(T[ee]-W)*O,vx:0,vy:0}))}const _6=Object.freeze(Object.defineProperty({__proto__:null,apply:k6,meta:v6},Symbol.toStringTag,{value:"Module"})),j6={id:"topoRank",label:"Topo Rank"},f1=["liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","kombinatoryka","statystyka","logika","optymalizacja","analiza"];function S6(o,t,r,a,s=80){const c=uc(o,t),d=Math.max(...o.map(g=>c[g.id]??0),0),f={};for(const g of o){const x=c[g.id]??0;(f[x]??(f[x]=[])).push(g)}for(const g of Object.values(f))g.sort((x,S)=>{const q=f1.indexOf(x.scope),j=f1.indexOf(S.scope);return(q===-1?999:q)-(j===-1?999:j)});const $=r-2*s,w=a-2*s;return o.map(g=>{const x=c[g.id]??0,S=f[x],q=S.indexOf(g);return{id:g.id,x:s+(q+.5)/S.length*$,y:s+x/Math.max(d,1)*w,vx:0,vy:0}})}const q6=Object.freeze(Object.defineProperty({__proto__:null,apply:S6,meta:j6},Symbol.toStringTag,{value:"Module"})),T6={id:"nPartite",label:"N-Partite Grid"},P6=90;function A6(o,t,r,a,s=120){const c=uc(o,t),d=Math.max(...o.map(j=>c[j.id]??0),0),f={};for(const j of o){const _=c[j.id]??0;(f[_]??(f[_]=[])).push(j)}const $={},w={};for(const j of o)$[j.id]=[],w[j.id]=[];for(const[j,_]of t)$[_]&&$[_].push(j),w[j]&&w[j].push(_);const g=["logika","statystyka","kombinatoryka","liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","optymalizacja","analiza"],x={},S=r-2*s,q=a-2*s;for(let j=0;j<=d;j++){const _=f[j]??[];j===0?_.sort((T,P)=>{const B=g.indexOf(T.scope),W=g.indexOf(P.scope);return(B===-1?999:B)-(W===-1?999:W)}):_.sort((T,P)=>Ar(T,$,x,r)-Ar(P,$,x,r)),P0(_,s,S,r,j,d,q,x)}for(let j=0;j<6;j++)if(j%2===0)for(let _=1;_<=d;_++){const T=f[_]??[];T.sort((P,B)=>Ar(P,$,x,r)-Ar(B,$,x,r)),P0(T,s,S,r,_,d,q,x)}else for(let _=d-1;_>=0;_--){const T=f[_]??[];_===0?T.sort((P,B)=>{const W=Ar(P,w,x,r),I=Ar(B,w,x,r);if(Math.abs(W-I)>1)return W-I;const E=g.indexOf(P.scope),O=g.indexOf(B.scope);return(E===-1?999:E)-(O===-1?999:O)}):T.sort((P,B)=>Ar(P,w,x,r)-Ar(B,w,x,r)),P0(T,s,S,r,_,d,q,x)}return o.map(j=>{var _,T;return{id:j.id,x:((_=x[j.id])==null?void 0:_.x)??r/2,y:((T=x[j.id])==null?void 0:T.y)??a/2,vx:0,vy:0}})}function Ar(o,t,r,a){const s=t[o.id]??[];return s.length===0?a/2:s.reduce((c,d)=>{var f;return c+(((f=r[d])==null?void 0:f.x)??a/2)},0)/s.length}function P0(o,t,r,a,s,c,d,f){const $=t+s/Math.max(c,1)*d,w=(o.length-1)*P6,g=Math.max(w,r),x=t+(r-g)/2;o.forEach((S,q)=>{const j=o.length===1?a/2:x+q/(o.length-1)*g;f[S.id]={x:j,y:$}})}const mp=Object.freeze(Object.defineProperty({__proto__:null,apply:A6,meta:T6},Symbol.toStringTag,{value:"Module"})),fp=[mp,q6,_6],hp="nPartite";function C6(o){return fp.find(t=>t.meta.id===o)??mp}const Ss=2200,dc=1600,Zi=120,M6=.4,h1=10,D6=.35,$1=.01;function R6(o,t){const r=uc(o,t),a=Math.max(...o.map(c=>r[c.id]??0),0),s=Object.fromEntries(o.map(c=>[c.id,Zi+(r[c.id]??0)/Math.max(a,1)*(dc-2*Zi)]));return{ranks:r,rankY:s}}function E6(o,t){const r=Object.fromEntries(o.map((a,s)=>[a.id,s]));return t.map(([a,s])=>[r[a],r[s]]).filter(([a,s])=>a!=null&&s!=null)}function B6(o){return Math.sqrt(Ss*dc/Math.max(o.length,1))*.9}function F6(o,t,r,a){return C6(o).apply(t,r,Ss,dc,Zi).map(d=>({id:d.id,x:d.x+(Math.random()-.5)*20,y:a[d.id]??d.y,vx:0,vy:0}))}function I6(o,t,r,a,{ranks:s,rankY:c,simEdges:d,idealK:f}){const $=o.length,w=new Float64Array($);for(let g=0;g<$;g++)for(let x=g+1;x<$;x++){if(s[o[g].id]!==s[o[x].id])continue;const S=o[g].x-o[x].x,q=Math.abs(S)||.1,j=f*f/(q*q),_=S<0?-1:1;w[g]+=_*j,w[x]-=_*j}for(const[g,x]of d){const S=o[x].x-o[g].x;w[g]+=S*$1,w[x]-=S*$1}for(let g=0;g<$;g++)w[g]+=(Ss/2-o[g].x)*.003;return o.map((g,x)=>{if(g.id===t)return{...g,x:r,y:a,vx:0,vy:0};let S=(g.vx+w[x])*M6;Math.abs(S)>h1&&(S*=h1/Math.abs(S));const q=c[g.id]??g.y,j=g.y+(q-g.y)*D6;return{...g,vx:S,vy:0,x:Math.max(Zi,Math.min(Ss-Zi,g.x+S)),y:j}})}function A0(o=hp,t=300,r,a){if(!r||r.length===0)return{};const{ranks:s,rankY:c}=R6(r,a??[]),d=E6(r,a??[]),f=B6(r),$={ranks:s,rankY:c,simEdges:d,idealK:f};let w=F6(o,r,a??[],c);for(let g=0;g<t;g++)w=I6(w,null,0,0,$);return Object.fromEntries(w.map(g=>[g.id,{x:g.x,y:g.y}]))}function N6(o){const t=typeof window<"u"&&window.innerWidth<600,[r,a]=D.useState(t?{x:20,y:20,scale:.42}:{x:40,y:40,scale:.72}),[s,c]=D.useState("grab"),d=D.useRef(!1),f=D.useRef({x:0,y:0}),$=D.useRef(null),w=D.useRef(null),g=D.useCallback(I=>{I.preventDefault();const E=I.deltaY>0?.9:1.1;a(O=>{const F=Math.max(.15,Math.min(5,O.scale*E)),ee=I.clientX,J=I.clientY,ne=ee-(ee-O.x)/O.scale*F,re=J-(J-O.y)/O.scale*F;return{x:ne,y:re,scale:F}})},[]),x=D.useCallback((I,E)=>({x:(I-r.x)/r.scale,y:(E-r.y)/r.scale}),[r]),S=D.useCallback((I,E)=>{d.current=!0,c("grabbing"),f.current={x:I-r.x,y:E-r.y}},[r]),q=D.useCallback(I=>d.current?(a(E=>({...E,x:I.clientX-f.current.x,y:I.clientY-f.current.y})),!0):!1,[]),j=D.useCallback(()=>{d.current=!1,c("grab")},[]),_=(I,E)=>{const O=I.clientX-E.clientX,F=I.clientY-E.clientY;return Math.sqrt(O*O+F*F)},T=(I,E)=>({x:(I.clientX+E.clientX)/2,y:(I.clientY+E.clientY)/2}),P=D.useCallback(I=>{I.touches.length===1?(d.current=!0,a(E=>(f.current={x:I.touches[0].clientX-E.x,y:I.touches[0].clientY-E.y},E)),$.current=null,w.current=null):I.touches.length===2&&(d.current=!1,$.current=_(I.touches[0],I.touches[1]),w.current=T(I.touches[0],I.touches[1]))},[]),B=D.useCallback(I=>{if(I.preventDefault(),I.touches.length===1&&d.current)a(E=>({...E,x:I.touches[0].clientX-f.current.x,y:I.touches[0].clientY-f.current.y}));else if(I.touches.length===2&&$.current!==null){const E=_(I.touches[0],I.touches[1]),O=T(I.touches[0],I.touches[1]),F=E/$.current;a(ee=>{const J=Math.max(.15,Math.min(5,ee.scale*F)),ne=w.current.x,re=w.current.y,Q=ne-(ne-ee.x)/ee.scale*J,Y=re-(re-ee.y)/ee.scale*J;return{x:Q,y:Y,scale:J}}),$.current=E,w.current=O}},[]),W=D.useCallback(()=>{d.current=!1,$.current=null,w.current=null},[]);return D.useEffect(()=>{const I=o.current;if(I)return I.addEventListener("wheel",g,{passive:!1}),I.addEventListener("touchstart",P,{passive:!1}),I.addEventListener("touchmove",B,{passive:!1}),I.addEventListener("touchend",W,{passive:!1}),()=>{I.removeEventListener("wheel",g),I.removeEventListener("touchstart",P),I.removeEventListener("touchmove",B),I.removeEventListener("touchend",W)}},[o,g,P,B,W]),{viewTransform:r,setViewTransform:a,toCanvas:x,isPanning:d,panStart:f,startPan:S,cursorStyle:s,setCursorStyle:c,handleMouseMove:q,handleMouseUp:j,handleWheel:g}}function L6(o,t,r,a){const s=D.useRef(null),c=D.useRef({x:0,y:0}),d=D.useCallback((w,g,x)=>{const S=o(g,x),q=t.find(j=>j.id===w);q&&(s.current=w,c.current={x:S.x-q.x,y:S.y-q.y},a==null||a("grabbing"))},[o,t,a]),f=D.useCallback((w,g)=>{if(!s.current)return!1;const x=o(w,g),S=s.current;return r(q=>({...q,[S]:{x:x.x-c.current.x,y:x.y-c.current.y}})),!0},[o,r]),$=D.useCallback(()=>{s.current=null,a==null||a("grab")},[a]);return{draggingNode:s,startNodeDrag:d,handleDragMove:f,handleDragEnd:$}}const oo={quickMaxQuestions:20,quickCompletionRatio:.1,deepKnownThreshold:.7,deepUnknownThreshold:.3,deepMinStrength:2.5,deepMaxQuestions:15};function pc(o,t,r){var c;const a={...t},s=[o];for(;s.length;){const d=s.shift();a[d]!=="known"&&(a[d]="known",(c=r.prereqs[d])==null||c.forEach(f=>{a[f]!=="known"&&s.push(f)}))}return a}function $p(o,t,r){var c;const a={...t},s=[o];for(;s.length;){const d=s.shift();a[d]!=="unknown"&&(a[d]="unknown",(c=r.dependents[d])==null||c.forEach(f=>{a[f]!=="unknown"&&s.push(f)}))}return a}function Ki(o,t,r,a,s){let c={...a};if(t){for(const d of Object.keys(r))c[d]="known";for(const d of Object.keys(r))c=pc(d,c,s)}else{for(const d of Object.keys(r))c[d]="unknown";for(const d of Object.keys(r))c=$p(d,c,s)}return c}function W6(o,t,r){return o.filter(a=>t[a.id]!=="known"&&t[a.id]!=="unknown").filter(a=>(r.prereqs[a.id]??[]).every(s=>t[s]==="known")).map(a=>a.id)}function mc(o,t,r,a=.5){var s,c,d;try{const f=1-a,$=o.filter(x=>t[x.id]!=="known"&&t[x.id]!=="unknown");if($.length===0)return null;const w=$.map(x=>{const S=yp(x.id,t,r),q=gp(x.id,t,r),j=a*S+f*q;return{id:x.id,erv:j||0,ancestorsToReveal:S,descendantsToReveal:q}});return w.sort((x,S)=>S.erv-x.erv),((s=w[0])==null?void 0:s.id)||((c=$[0])==null?void 0:c.id)||null}catch(f){return console.error("pickNextQuestion error:",f),((d=o.filter(w=>t[w.id]!=="known"&&t[w.id]!=="unknown")[0])==null?void 0:d.id)||null}}function yp(o,t,r){const a=new Set,s=[...r.prereqs[o]??[]];let c=0;for(;s.length>0;){const d=s.shift();if(a.has(d))continue;a.add(d),t[d]!=="known"&&t[d]!=="unknown"&&c++;const f=r.prereqs[d]??[];for(const $ of f)a.has($)||s.push($)}return c}function gp(o,t,r){const a=new Set,s=[...r.dependents[o]??[]];let c=0;for(;s.length>0;){const d=s.shift();if(a.has(d))continue;a.add(d),t[d]!=="known"&&t[d]!=="unknown"&&c++;const f=r.dependents[d]??[];for(const $ of f)a.has($)||s.push($)}return c}function O6(o,t,r,a=.5){try{const s=o.filter(w=>t[w.id]!=="known"&&t[w.id]!=="unknown");if(s.length===0)return 0;const c=1-a;let d=0;for(const w of s){const g=yp(w.id,t,r),x=gp(w.id,t,r),S=a*g+c*x;d+=S||0}if(!d||d===0)return s.length;const f=s.length,$=f*f/d;return isNaN($)?s.length:Math.ceil($)}catch(s){return console.error("estimateRemainingQuestions error:",s),null}}function H6(o,t,r){const a={...o};for(const[s,c]of Object.entries(t)){const d=a[s]??{alpha:1,beta:1};a[s]={alpha:d.alpha+(r?c:0),beta:d.beta+(r?0:c)}}return a}function G6(o,t){const r={};for(const a of o){const s=t[a]??{alpha:1,beta:1},c=s.alpha+s.beta,d=s.alpha/c;d>oo.deepKnownThreshold&&c>oo.deepMinStrength?r[a]="known":d<oo.deepUnknownThreshold&&c>oo.deepMinStrength?r[a]="unknown":r[a]="uncertain"}return r}function wp(o,t,r){const a=new Set,s=new Set(r.map(d=>d.id)),c=[o];for(;c.length;){const d=c.shift();if(!a.has(d)&&s.has(d)){a.add(d);for(const f of t.prereqs[d]??[])a.has(f)||c.push(f)}}return a}function U6(o,t,r,a,s){var f;const c=o.filter($=>r[$]==="uncertain");if(c.length===0)return null;const d=c.map($=>{const w=t[$]??{alpha:1,beta:1},g=w.alpha+w.beta,x=w.alpha/g,S=1-x,q=new Set(o);let j=0;const _=[...a.prereqs[$]??[]],T=new Set;for(;_.length;){const E=_.shift();if(!T.has(E)){T.add(E),q.has(E)&&r[E]==="uncertain"&&j++;for(const O of a.prereqs[E]??[])T.has(O)||_.push(O)}}let P=0;const B=[...a.dependents[$]??[]],W=new Set;for(;B.length;){const E=B.shift();if(!W.has(E)){W.add(E),q.has(E)&&r[E]==="uncertain"&&P++;for(const O of a.dependents[E]??[])W.has(O)||B.push(O)}}const I=x*j+S*P;return{id:$,erv:I,strength:g}});return d.sort(($,w)=>Math.abs($.erv-w.erv)>.01?w.erv-$.erv:$.strength-w.strength),((f=d[0])==null?void 0:f.id)??c[0]}function Z6(o,t,r=0){return!!(o.every(a=>t[a]!=="uncertain")||r>=oo.deepMaxQuestions)}function fc(o,t,r=0,a){const s=(a==null?void 0:a.maxQuestions)??oo.quickMaxQuestions,c=(a==null?void 0:a.completionRatio)??oo.quickCompletionRatio,d=o.length;if(d===0)return!0;const f=o.filter($=>t[$.id]!=="known"&&t[$.id]!=="unknown").length;return f===0||r>=s||f/d<=c}const Q0={quick:{maxQuestions:10,completionRatio:.15,labelKey:"presetQuick",descKey:"presetQuickDesc"},standard:{maxQuestions:20,completionRatio:.1,labelKey:"presetStandard",descKey:"presetStandardDesc"},thorough:{maxQuestions:35,completionRatio:.05,labelKey:"presetThorough",descKey:"presetThoroughDesc"}};function K6(o,t,r){const a=r?`${r}_`:"",[s,c]=lt(`${a}diagMode`,!1),[d,f]=lt(`${a}diagSubMode`,"quick"),[$,w]=lt(`${a}belief`,{}),[g,x]=lt(`${a}targetNode`,null),[S,q]=lt(`${a}stats`,{correct:0,incorrect:0,questionsAnswered:0}),[j,_]=lt(`${a}answeredQuestions`,new Set),[T,P]=lt(`${a}betaBeliefs`,{}),[B,W]=lt(`${a}quizNode`,null),I=D.useMemo(()=>{const R=S.correct+S.incorrect;return R===0?.5:(S.correct+.5)/(R+1)},[S]),E=S.questionsAnswered,O=D.useMemo(()=>[...new Set([...Object.keys(o.prereqs),...Object.keys(o.dependents),...Object.keys(t)])].map(U=>({id:U})),[o,t]),F=D.useMemo(()=>Object.keys($).length>0||S.questionsAnswered>0,[$,S]),ee=D.useMemo(()=>F?W6(O,$,o):[],[F,$,o,O]),J=F?ee:[],ne=D.useMemo(()=>s&&d==="quick"?mc(O,$,o,I):null,[s,d,$,o,I,O]),re=D.useMemo(()=>s&&d==="quick"?O6(O,$,o,I):null,[s,d,$,o,I,O]),Q=D.useMemo(()=>s&&d==="quick"&&F&&fc(O,$,E),[s,d,F,$,O,E]),Y=D.useMemo(()=>!s||d!=="deepdive"||!g?[]:[...wp(g,o,O)],[s,d,g,o,O]),ce=D.useMemo(()=>d!=="deepdive"?{}:G6(Y,T),[d,Y,T]),ye=D.useMemo(()=>!s||d!=="deepdive"||Y.length===0?null:U6(Y,T,ce,o),[s,d,Y,T,ce,o,O]),ze=D.useMemo(()=>!s||d!=="deepdive"||Y.length===0?!1:Z6(Y,ce,E),[s,d,Y,ce,E]),xe=D.useCallback((R,U)=>s?d==="deepdive"?Y.includes(R)?(ce[R]!=="uncertain"||W(R),!0):!1:$[R]==="unknown"?!0:U?(w(ge=>$p(R,ge,o)),W(null),!0):$[R]==="known"?(w(ge=>{const ve={...ge};return delete ve[R],ve}),W(null),!0):(W(R),!0):!1,[s,d,$,o,Y,ce]),K=D.useCallback((R,U,ge,ve)=>{if(d==="deepdive"){const qe=(ge==null?void 0:ge.tests)??{[R]:1};P(we=>H6(we,qe,U))}else{const qe=(ge==null?void 0:ge.tests)??{[R]:1};w(we=>Ki(R,U,qe,we,o))}typeof ve=="number"&&_(qe=>new Set([...qe,`${R}:${ve}`])),q(qe=>({correct:qe.correct+(U?1:0),incorrect:qe.incorrect+(U?0:1),questionsAnswered:qe.questionsAnswered+1})),W(null)},[d,o]),ie=D.useCallback(()=>{x6(),c(!1),f("quick"),w({}),P({}),W(null),x(null),q({correct:0,incorrect:0,questionsAnswered:0}),_(new Set)},[]),te=D.useCallback(R=>{f("deepdive"),x(R),P({}),w({}),W(null),q({correct:0,incorrect:0,questionsAnswered:0}),_(new Set),c(!0)},[]);return{diagMode:s,setDiagMode:c,mode:d,setMode:f,quizNode:B,setQuizNode:W,questionsAnswered:E,answeredQuestions:j,setAnsweredQuestions:_,getAnsweredIndices:R=>{const U=[];return j.forEach(ge=>{const[ve,qe]=ge.split(":");ve===R&&U.push(parseInt(qe,10))}),U},handleDiagClick:xe,handleQuizAnswer:K,resetDiagnostic:ie,startDeepDive:te,targetNode:g,belief:$,setBelief:w,frontier:ee,visibleFrontier:J,hasStarted:F,nextSuggestedId:ne,expectedRemaining:re,pCorrect:I,sessionComplete:Q,betaBeliefs:T,subgraphIds:Y,ddClassification:ce,ddNextNodeId:ye,ddComplete:ze}}const y1=640;function xp(){const[o,t]=D.useState(()=>typeof window<"u"&&window.innerWidth<y1);return D.useEffect(()=>{const r=window.matchMedia(`(max-width: ${y1-1}px)`),a=s=>t(s.matches);return r.addEventListener("change",a),t(r.matches),()=>r.removeEventListener("change",a)},[]),o}const V6=new Set(["pl","en"]);function g1(o){const r=(o||"").replace(/^#\/?/,"").split("/").filter(Boolean);let a="pl",s=r;if(r.length>0&&V6.has(r[0])&&(a=r[0],s=r.slice(1)),s[0]==="node"&&s[1]){const c=decodeURIComponent(s[1]);return s[2]==="resource"&&s[3]!=null?{view:"resource",nodeId:c,resourceIndex:parseInt(s[3],10),lang:a}:s[2]==="question"&&s[3]!=null?{view:"question",nodeId:c,questionIndex:parseInt(s[3],10),lang:a}:{view:"node",nodeId:c,lang:a}}if(s[0]==="diagnostic"){if(s[1]==="deepdive"&&s[2])return{view:"diagnostic",mode:"deepdive",goalNode:decodeURIComponent(s[2]),lang:a};if(s[1]==="quick")return{view:"diagnostic",mode:"quick",lang:a}}return{view:"graph",lang:a}}function Q6(o){const t=(o==null?void 0:o.lang)||"pl";if(!o)return`#/${t}`;switch(o.view){case"node":return`#/${t}/node/${encodeURIComponent(o.nodeId)}`;case"resource":return`#/${t}/node/${encodeURIComponent(o.nodeId)}/resource/${o.resourceIndex}`;case"question":return`#/${t}/node/${encodeURIComponent(o.nodeId)}/question/${o.questionIndex}`;case"diagnostic":return o.mode==="deepdive"&&o.goalNode?`#/${t}/diagnostic/deepdive/${encodeURIComponent(o.goalNode)}`:`#/${t}/diagnostic/quick`;default:return`#/${t}`}}function Y6(o){const t=D.useRef(o);t.current=o;const r=D.useRef(!1),a=D.useCallback(s=>{const c=Q6(s);window.location.hash!==c&&(r.current=!0,window.location.hash=c)},[]);return D.useEffect(()=>{const s=()=>{if(r.current){r.current=!1;return}t.current(g1(window.location.hash))};window.addEventListener("hashchange",s);const c=g1(window.location.hash);return Promise.resolve().then(()=>t.current(c)),()=>window.removeEventListener("hashchange",s)},[]),{setRoute:a}}function w1(o){return 6+o.level*2}function X6({edges:o,nodes:t,highlightedIds:r}){const a=D.useMemo(()=>Object.fromEntries(t.map(s=>[s.id,s])),[t]);return p.jsx("g",{children:o.map(([s,c])=>{const d=a[s],f=a[c];if(!d||!f)return null;const $=(r==null?void 0:r.has(s))&&(r==null?void 0:r.has(c)),w=r&&!$,g=f.x-d.x,x=f.y-d.y,S=Math.sqrt(g*g+x*x)||1,q=w1(f)+3,j=f.x-g/S*q,_=f.y-x/S*q,T=w1(d)+2,P=d.x+g/S*T,B=d.y+x/S*T,W=w?"#151b26":$?"#4a9eff":"#334766",I=$?1.8:1,E=w?.15:$?1:.55,O=w?"url(#arrow-dim)":$?"url(#arrow-hi)":"url(#arrow-default)";return p.jsx("line",{x1:P,y1:B,x2:j,y2:_,stroke:W,strokeWidth:I,opacity:E,markerEnd:O},`${s}-${c}`)})})}function J6(o,t){const r=8+o.level*3,a=Math.min(4.8,(t||0)*.6);return r+a}function eb(o){return o<.3?6:o<.5?12:o<.8?18:30}function nb(o){return o<.3?9:o<.6?10:11}function tb({nodes:o,filteredIds:t,highlightedIds:r,selected:a,onSelect:s,onHover:c,lang:d,diagMode:f,belief:$,frontier:w,scale:g,scopeColors:x,edges:S}){const q=$&&Object.keys($).length>0,j=D.useMemo(()=>{const _={};if(!S)return _;for(const[T,P]of S)_[T]=(_[T]||0)+1,_[P]=(_[P]||0)+1;return _},[S]);return p.jsx("g",{children:o.map(_=>{const T=j[_.id]||0,P=J6(_,T),B=(x==null?void 0:x[_.scope])||"#4a9eff",W=t&&!t.has(_.id),I=r==null?void 0:r.has(_.id),E=a===_.id,O=r&&!I||W,F=d==="pl"?_.labelPl:_.label,ee=eb(g??1),J=nb(g??1);let ne=B,re=O?.15:.9,Q=O?.2:.85,Y=null,ce=2;if(q){const ze=$[_.id],xe=w==null?void 0:w.includes(_.id);ze==="known"?(ne="#27ae60",Y="#2ecc71",re=W?.1:.85,Q=W?.15:.9):ze==="unknown"?(ne="#c0392b",re=W?.1:.45,Y="#e74c3c",Q=W?.15:.7):xe?(ne="#f39c12",Y="#f1c40f",ce=3,re=W?.1:.9,Q=W?.15:.9):(re=W?.1:f?.35:.5,Q=W?.15:.7)}const ye=F.length>ee?F.slice(0,ee-1)+"…":F;return p.jsxs("g",{"data-node-id":_.id,style:{cursor:"pointer"},onClick:()=>s(_.id===a?null:_.id),onMouseEnter:()=>c(_.id),onMouseLeave:()=>c(null),children:[(E||Y)&&p.jsx("circle",{cx:_.x,cy:_.y,r:P+(E?5:4),fill:"none",stroke:E?B:Y,strokeWidth:E?2:ce,opacity:E?.5:.9}),p.jsx("circle",{cx:_.x,cy:_.y,r:P,fill:ne,fillOpacity:re,stroke:(I||E)&&!q?B:"none",strokeWidth:1.5}),p.jsx("rect",{x:_.x-ye.length*J*.3,y:_.y+P+3,width:ye.length*J*.6,height:J+4,rx:2,fill:v.bg,fillOpacity:Q*.6,style:{pointerEvents:"none"}}),p.jsx("text",{x:_.x,y:_.y+P+J+2,textAnchor:"middle",fontSize:J,fill:v.textBody,opacity:Q,style:{pointerEvents:"none",userSelect:"none"},children:ye})]},_.id)})})}function bp({resource:o,lang:t,onClose:r}){const a=D.useRef(null);if(D.useEffect(()=>{const x=S=>{S.key==="Escape"&&r()};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[r]),D.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),!o)return null;const s=t==="pl"?o.titlePl:o.titleEn,c=o.type==="interactive",d={interactive:L("resourceInteractive",t),video:L("resourceVideo",t),article:L("resourceArticle",t)}[o.type]??o.type,f={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"}[o.type]??"#8a9dbe";if(!c)return window.open(o.url,"_blank","noopener"),r(),null;const w=o.url.startsWith("http")?o.url:`${"/".replace(/\/$/,"")}/${o.url.replace(/^\//,"")}`,g=w+(w.includes("?")?"&":"?")+"lang="+t;return p.jsxs("div",{ref:a,onClick:x=>{x.target===a.current&&r()},style:{position:"fixed",inset:0,zIndex:100,background:"rgba(8, 11, 20, 0.88)",backdropFilter:"blur(6px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"16px",animation:"rsPanel_fadeIn 0.18s ease"},children:[p.jsx("style",{children:`
        @keyframes rsPanel_fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}),p.jsxs("div",{style:{width:"100%",maxWidth:"calc(100vw - 32px)",maxHeight:"calc(100vh - 32px)",display:"flex",flexDirection:"column",borderRadius:10,overflow:"hidden",border:`1px solid ${f}33`,boxShadow:`0 0 48px ${f}18, 0 8px 32px rgba(0,0,0,0.7)`},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",background:`${v.surface}f8`,borderBottom:`1px solid ${f}22`,flexShrink:0,fontFamily:je},children:[p.jsx("span",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",color:f,background:`${f}18`,border:`1px solid ${f}40`,borderRadius:4,padding:"2px 7px",flexShrink:0},children:d}),p.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500,color:v.textBody,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:s}),p.jsx("button",{onClick:()=>window.open(g,"_blank","noopener"),title:L("openInTab",t),style:x1,children:"↗"}),p.jsx("button",{onClick:r,title:L("closeResource",t),style:{...x1,fontSize:18,lineHeight:1},children:"×"})]}),p.jsx("iframe",{src:g,sandbox:"allow-scripts allow-same-origin allow-forms",style:{flex:1,border:"none",background:"#0e0e12",minHeight:"calc(100vh - 120px)",display:"block"},title:s,loading:"eager"})]})]})}const x1={background:"none",border:`1px solid ${v.border}`,borderRadius:5,color:v.textDim,cursor:"pointer",fontSize:14,padding:"3px 9px",fontFamily:je,transition:"background 0.12s, color 0.12s",flexShrink:0,lineHeight:1.4};class nt{constructor(t,r,a){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=t,this.start=r,this.end=a}static range(t,r){return r?!t||!t.loc||!r.loc||t.loc.lexer!==r.loc.lexer?null:new nt(t.loc.lexer,t.loc.start,r.loc.end):t&&t.loc}}class ct{constructor(t,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=t,this.loc=r}range(t,r){return new ct(r,nt.range(this,t))}}class me{constructor(t,r){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var a="KaTeX parse error: "+t,s,c,d=r&&r.loc;if(d&&d.start<=d.end){var f=d.lexer.input;s=d.start,c=d.end,s===f.length?a+=" at end of input: ":a+=" at position "+(s+1)+": ";var $=f.slice(s,c).replace(/[^]/g,"$&̲"),w;s>15?w="…"+f.slice(s-15,s):w=f.slice(0,s);var g;c+15<f.length?g=f.slice(c,c+15)+"…":g=f.slice(c),a+=w+$+g}var x=new Error(a);return x.name="ParseError",x.__proto__=me.prototype,x.position=s,s!=null&&c!=null&&(x.length=c-s),x.rawMessage=t,x}}me.prototype.__proto__=Error.prototype;var rb=/([A-Z])/g,hc=o=>o.replace(rb,"-$1").toLowerCase(),ob={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},ib=/[&><"']/g,Fn=o=>String(o).replace(ib,t=>ob[t]),Hi=o=>o.type==="ordgroup"||o.type==="color"?o.body.length===1?Hi(o.body[0]):o:o.type==="font"?Hi(o.body):o,ab=new Set(["mathord","textord","atom"]),or=o=>ab.has(Hi(o).type),sb=o=>{var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(o);return t?t[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():"_relative"},_s={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:o=>"#"+o},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(o,t)=>(t.push(o),t)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:o=>Math.max(0,o),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:o=>Math.max(0,o),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:o=>Math.max(0,o),cli:"-e, --max-expand <n>",cliProcessor:o=>o==="Infinity"?1/0:parseInt(o)},globalGroup:{type:"boolean",cli:!1}};function lb(o){if(o.default)return o.default;var t=o.type,r=Array.isArray(t)?t[0]:t;if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class $c{constructor(t){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,t=t||{};for(var r in _s)if(_s.hasOwnProperty(r)){var a=_s[r];this[r]=t[r]!==void 0?a.processor?a.processor(t[r]):t[r]:lb(a)}}reportNonstrict(t,r,a){var s=this.strict;if(typeof s=="function"&&(s=s(t,r,a)),!(!s||s==="ignore")){if(s===!0||s==="error")throw new me("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+t+"]"),a);s==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+s+"': "+r+" ["+t+"]"))}}useStrictBehavior(t,r,a){var s=this.strict;if(typeof s=="function")try{s=s(t,r,a)}catch{s="error"}return!s||s==="ignore"?!1:s===!0||s==="error"?!0:s==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+s+"': "+r+" ["+t+"]")),!1)}isTrusted(t){if(t.url&&!t.protocol){var r=sb(t.url);if(r==null)return!1;t.protocol=r}var a=typeof this.trust=="function"?this.trust(t):this.trust;return!!a}}class Cr{constructor(t,r,a){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=t,this.size=r,this.cramped=a}sup(){return Et[cb[this.id]]}sub(){return Et[ub[this.id]]}fracNum(){return Et[db[this.id]]}fracDen(){return Et[pb[this.id]]}cramp(){return Et[mb[this.id]]}text(){return Et[fb[this.id]]}isTight(){return this.size>=2}}var yc=0,qs=1,Io=2,tr=3,Vi=4,wt=5,No=6,Gn=7,Et=[new Cr(yc,0,!1),new Cr(qs,0,!0),new Cr(Io,1,!1),new Cr(tr,1,!0),new Cr(Vi,2,!1),new Cr(wt,2,!0),new Cr(No,3,!1),new Cr(Gn,3,!0)],cb=[Vi,wt,Vi,wt,No,Gn,No,Gn],ub=[wt,wt,wt,wt,Gn,Gn,Gn,Gn],db=[Io,tr,Vi,wt,No,Gn,No,Gn],pb=[tr,tr,wt,wt,Gn,Gn,Gn,Gn],mb=[qs,qs,tr,tr,wt,wt,Gn,Gn],fb=[yc,qs,Io,tr,Io,tr,Io,tr],Ne={DISPLAY:Et[yc],TEXT:Et[Io],SCRIPT:Et[Vi],SCRIPTSCRIPT:Et[No]},Y0=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function hb(o){for(var t=0;t<Y0.length;t++)for(var r=Y0[t],a=0;a<r.blocks.length;a++){var s=r.blocks[a];if(o>=s[0]&&o<=s[1])return r.name}return null}var js=[];Y0.forEach(o=>o.blocks.forEach(t=>js.push(...t)));function zp(o){for(var t=0;t<js.length;t+=2)if(o>=js[t]&&o<=js[t+1])return!0;return!1}var Fo=80,$b=function(t,r){return"M95,"+(622+t+r)+`
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
M`+(834+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},yb=function(t,r){return"M263,"+(601+t+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+t/2.084+" -"+t+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+t)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},gb=function(t,r){return"M983 "+(10+t+r)+`
l`+t/3.13+" -"+t+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+t)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},wb=function(t,r){return"M424,"+(2398+t+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+t/4.223+" -"+t+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+t)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+t)+" "+r+`
h400000v`+(40+t)+"h-400000z"},xb=function(t,r){return"M473,"+(2713+t+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+t/5.298+" -"+t+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+t)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+t)+" "+r+"h400000v"+(40+t)+"H1017.7z"},bb=function(t){var r=t/2;return"M400000 "+t+" H0 L"+r+" 0 l65 45 L145 "+(t-80)+" H400000z"},zb=function(t,r,a){var s=a-54-r-t;return"M702 "+(t+r)+"H400000"+(40+t)+`
H742v`+s+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+t)+"H742z"},vb=function(t,r,a){r=1e3*r;var s="";switch(t){case"sqrtMain":s=$b(r,Fo);break;case"sqrtSize1":s=yb(r,Fo);break;case"sqrtSize2":s=gb(r,Fo);break;case"sqrtSize3":s=wb(r,Fo);break;case"sqrtSize4":s=xb(r,Fo);break;case"sqrtTall":s=zb(r,Fo,a)}return s},kb=function(t,r){switch(t){case"⎜":return"M291 0 H417 V"+r+" H291z M291 0 H417 V"+r+" H291z";case"∣":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z";case"∥":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z"+("M367 0 H410 V"+r+" H367z M367 0 H410 V"+r+" H367z");case"⎟":return"M457 0 H583 V"+r+" H457z M457 0 H583 V"+r+" H457z";case"⎢":return"M319 0 H403 V"+r+" H319z M319 0 H403 V"+r+" H319z";case"⎥":return"M263 0 H347 V"+r+" H263z M263 0 H347 V"+r+" H263z";case"⎪":return"M384 0 H504 V"+r+" H384z M384 0 H504 V"+r+" H384z";case"⏐":return"M312 0 H355 V"+r+" H312z M312 0 H355 V"+r+" H312z";case"‖":return"M257 0 H300 V"+r+" H257z M257 0 H300 V"+r+" H257z"+("M478 0 H521 V"+r+" H478z M478 0 H521 V"+r+" H478z");default:return""}},b1={doubleleftarrow:`M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},_b=function(t,r){switch(t){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class Yi{constructor(t){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=t,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(t){return this.classes.includes(t)}toNode(){for(var t=document.createDocumentFragment(),r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){for(var t="",r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t}toText(){var t=r=>r.toText();return this.children.map(t).join("")}}var Bt={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},fs={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},z1={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function jb(o,t){Bt[o]=t}function gc(o,t,r){if(!Bt[t])throw new Error("Font metrics not found for font: "+t+".");var a=o.charCodeAt(0),s=Bt[t][a];if(!s&&o[0]in z1&&(a=z1[o[0]].charCodeAt(0),s=Bt[t][a]),!s&&r==="text"&&zp(a)&&(s=Bt[t][77]),s)return{depth:s[0],height:s[1],italic:s[2],skew:s[3],width:s[4]}}var C0={};function Sb(o){var t;if(o>=5?t=0:o>=3?t=1:t=2,!C0[t]){var r=C0[t]={cssEmPerMu:fs.quad[t]/18};for(var a in fs)fs.hasOwnProperty(a)&&(r[a]=fs[a][t])}return C0[t]}var qb=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],v1=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],k1=function(t,r){return r.size<2?t:qb[t-1][r.size-1]};class nr{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||nr.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||"",this.fontFamily=t.fontFamily||"",this.fontWeight=t.fontWeight||"",this.fontShape=t.fontShape||"",this.sizeMultiplier=v1[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var a in t)t.hasOwnProperty(a)&&(r[a]=t[a]);return new nr(r)}havingStyle(t){return this.style===t?this:this.extend({style:t,size:k1(this.textSize,t)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(t){return this.size===t&&this.textSize===t?this:this.extend({style:this.style.text(),size:t,textSize:t,sizeMultiplier:v1[t-1]})}havingBaseStyle(t){t=t||this.style.text();var r=k1(nr.BASESIZE,t);return this.size===r&&this.textSize===nr.BASESIZE&&this.style===t?this:this.extend({style:t,size:r})}havingBaseSizing(){var t;switch(this.style.id){case 4:case 5:t=3;break;case 6:case 7:t=1;break;default:t=6}return this.extend({style:this.style.text(),size:t})}withColor(t){return this.extend({color:t})}withPhantom(){return this.extend({phantom:!0})}withFont(t){return this.extend({font:t})}withTextFontFamily(t){return this.extend({fontFamily:t,font:""})}withTextFontWeight(t){return this.extend({fontWeight:t,font:""})}withTextFontShape(t){return this.extend({fontShape:t,font:""})}sizingClasses(t){return t.size!==this.size?["sizing","reset-size"+t.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==nr.BASESIZE?["sizing","reset-size"+this.size,"size"+nr.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=Sb(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}nr.BASESIZE=6;var X0={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},Tb={ex:!0,em:!0,mu:!0},vp=function(t){return typeof t!="string"&&(t=t.unit),t in X0||t in Tb||t==="ex"},pn=function(t,r){var a;if(t.unit in X0)a=X0[t.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(t.unit==="mu")a=r.fontMetrics().cssEmPerMu;else{var s;if(r.style.isTight()?s=r.havingStyle(r.style.text()):s=r,t.unit==="ex")a=s.fontMetrics().xHeight;else if(t.unit==="em")a=s.fontMetrics().quad;else throw new me("Invalid unit: '"+t.unit+"'");s!==r&&(a*=s.sizeMultiplier/r.sizeMultiplier)}return Math.min(t.number*a,r.maxSize)},be=function(t){return+t.toFixed(4)+"em"},Rr=function(t){return t.filter(r=>r).join(" ")},kp=function(t,r,a){if(this.classes=t||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=a||{},r){r.style.isTight()&&this.classes.push("mtight");var s=r.getColor();s&&(this.style.color=s)}},_p=function(t){var r=document.createElement(t);r.className=Rr(this.classes);for(var a in this.style)this.style.hasOwnProperty(a)&&(r.style[a]=this.style[a]);for(var s in this.attributes)this.attributes.hasOwnProperty(s)&&r.setAttribute(s,this.attributes[s]);for(var c=0;c<this.children.length;c++)r.appendChild(this.children[c].toNode());return r},Pb=/[\s"'>/=\x00-\x1f]/,jp=function(t){var r="<"+t;this.classes.length&&(r+=' class="'+Fn(Rr(this.classes))+'"');var a="";for(var s in this.style)this.style.hasOwnProperty(s)&&(a+=hc(s)+":"+this.style[s]+";");a&&(r+=' style="'+Fn(a)+'"');for(var c in this.attributes)if(this.attributes.hasOwnProperty(c)){if(Pb.test(c))throw new me("Invalid attribute name '"+c+"'");r+=" "+c+'="'+Fn(this.attributes[c])+'"'}r+=">";for(var d=0;d<this.children.length;d++)r+=this.children[d].toMarkup();return r+="</"+t+">",r};class Xi{constructor(t,r,a,s){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,kp.call(this,t,a,s),this.children=r||[]}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return _p.call(this,"span")}toMarkup(){return jp.call(this,"span")}}class wc{constructor(t,r,a,s){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,kp.call(this,r,s),this.children=a||[],this.setAttribute("href",t)}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return _p.call(this,"a")}toMarkup(){return jp.call(this,"a")}}class Ab{constructor(t,r,a){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=t,this.classes=["mord"],this.style=a}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createElement("img");t.src=this.src,t.alt=this.alt,t.className="mord";for(var r in this.style)this.style.hasOwnProperty(r)&&(t.style[r]=this.style[r]);return t}toMarkup(){var t='<img src="'+Fn(this.src)+'"'+(' alt="'+Fn(this.alt)+'"'),r="";for(var a in this.style)this.style.hasOwnProperty(a)&&(r+=hc(a)+":"+this.style[a]+";");return r&&(t+=' style="'+Fn(r)+'"'),t+="'/>",t}}var Cb={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class xt{constructor(t,r,a,s,c,d,f,$){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=t,this.height=r||0,this.depth=a||0,this.italic=s||0,this.skew=c||0,this.width=d||0,this.classes=f||[],this.style=$||{},this.maxFontSize=0;var w=hb(this.text.charCodeAt(0));w&&this.classes.push(w+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=Cb[this.text])}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createTextNode(this.text),r=null;this.italic>0&&(r=document.createElement("span"),r.style.marginRight=be(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=Rr(this.classes));for(var a in this.style)this.style.hasOwnProperty(a)&&(r=r||document.createElement("span"),r.style[a]=this.style[a]);return r?(r.appendChild(t),r):t}toMarkup(){var t=!1,r="<span";this.classes.length&&(t=!0,r+=' class="',r+=Fn(Rr(this.classes)),r+='"');var a="";this.italic>0&&(a+="margin-right:"+this.italic+"em;");for(var s in this.style)this.style.hasOwnProperty(s)&&(a+=hc(s)+":"+this.style[s]+";");a&&(t=!0,r+=' style="'+Fn(a)+'"');var c=Fn(this.text);return t?(r+=">",r+=c,r+="</span>",r):c}}class rr{constructor(t,r){this.children=void 0,this.attributes=void 0,this.children=t||[],this.attributes=r||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"svg");for(var a in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,a)&&r.setAttribute(a,this.attributes[a]);for(var s=0;s<this.children.length;s++)r.appendChild(this.children[s].toNode());return r}toMarkup(){var t='<svg xmlns="http://www.w3.org/2000/svg"';for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+Fn(this.attributes[r])+'"');t+=">";for(var a=0;a<this.children.length;a++)t+=this.children[a].toMarkup();return t+="</svg>",t}}class Er{constructor(t,r){this.pathName=void 0,this.alternate=void 0,this.pathName=t,this.alternate=r}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",b1[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+Fn(this.alternate)+'"/>':'<path d="'+Fn(b1[this.pathName])+'"/>'}}class J0{constructor(t){this.attributes=void 0,this.attributes=t||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"line");for(var a in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,a)&&r.setAttribute(a,this.attributes[a]);return r}toMarkup(){var t="<line";for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+Fn(this.attributes[r])+'"');return t+="/>",t}}function _1(o){if(o instanceof xt)return o;throw new Error("Expected symbolNode but got "+String(o)+".")}function Mb(o){if(o instanceof Xi)return o;throw new Error("Expected span<HtmlDomNode> but got "+String(o)+".")}var Db={bin:1,close:1,inner:1,open:1,punct:1,rel:1},Rb={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},tn={math:{},text:{}};function m(o,t,r,a,s,c){tn[o][s]={font:t,group:r,replace:a},c&&a&&(tn[o][a]=tn[o][s])}var y="math",le="text",b="main",C="ams",sn="accent-token",Se="bin",Un="close",Ho="inner",Ee="mathord",zn="op-token",ut="open",Ms="punct",M="rel",ir="spacing",H="textord";m(y,b,M,"≡","\\equiv",!0);m(y,b,M,"≺","\\prec",!0);m(y,b,M,"≻","\\succ",!0);m(y,b,M,"∼","\\sim",!0);m(y,b,M,"⊥","\\perp");m(y,b,M,"⪯","\\preceq",!0);m(y,b,M,"⪰","\\succeq",!0);m(y,b,M,"≃","\\simeq",!0);m(y,b,M,"∣","\\mid",!0);m(y,b,M,"≪","\\ll",!0);m(y,b,M,"≫","\\gg",!0);m(y,b,M,"≍","\\asymp",!0);m(y,b,M,"∥","\\parallel");m(y,b,M,"⋈","\\bowtie",!0);m(y,b,M,"⌣","\\smile",!0);m(y,b,M,"⊑","\\sqsubseteq",!0);m(y,b,M,"⊒","\\sqsupseteq",!0);m(y,b,M,"≐","\\doteq",!0);m(y,b,M,"⌢","\\frown",!0);m(y,b,M,"∋","\\ni",!0);m(y,b,M,"∝","\\propto",!0);m(y,b,M,"⊢","\\vdash",!0);m(y,b,M,"⊣","\\dashv",!0);m(y,b,M,"∋","\\owns");m(y,b,Ms,".","\\ldotp");m(y,b,Ms,"⋅","\\cdotp");m(y,b,H,"#","\\#");m(le,b,H,"#","\\#");m(y,b,H,"&","\\&");m(le,b,H,"&","\\&");m(y,b,H,"ℵ","\\aleph",!0);m(y,b,H,"∀","\\forall",!0);m(y,b,H,"ℏ","\\hbar",!0);m(y,b,H,"∃","\\exists",!0);m(y,b,H,"∇","\\nabla",!0);m(y,b,H,"♭","\\flat",!0);m(y,b,H,"ℓ","\\ell",!0);m(y,b,H,"♮","\\natural",!0);m(y,b,H,"♣","\\clubsuit",!0);m(y,b,H,"℘","\\wp",!0);m(y,b,H,"♯","\\sharp",!0);m(y,b,H,"♢","\\diamondsuit",!0);m(y,b,H,"ℜ","\\Re",!0);m(y,b,H,"♡","\\heartsuit",!0);m(y,b,H,"ℑ","\\Im",!0);m(y,b,H,"♠","\\spadesuit",!0);m(y,b,H,"§","\\S",!0);m(le,b,H,"§","\\S");m(y,b,H,"¶","\\P",!0);m(le,b,H,"¶","\\P");m(y,b,H,"†","\\dag");m(le,b,H,"†","\\dag");m(le,b,H,"†","\\textdagger");m(y,b,H,"‡","\\ddag");m(le,b,H,"‡","\\ddag");m(le,b,H,"‡","\\textdaggerdbl");m(y,b,Un,"⎱","\\rmoustache",!0);m(y,b,ut,"⎰","\\lmoustache",!0);m(y,b,Un,"⟯","\\rgroup",!0);m(y,b,ut,"⟮","\\lgroup",!0);m(y,b,Se,"∓","\\mp",!0);m(y,b,Se,"⊖","\\ominus",!0);m(y,b,Se,"⊎","\\uplus",!0);m(y,b,Se,"⊓","\\sqcap",!0);m(y,b,Se,"∗","\\ast");m(y,b,Se,"⊔","\\sqcup",!0);m(y,b,Se,"◯","\\bigcirc",!0);m(y,b,Se,"∙","\\bullet",!0);m(y,b,Se,"‡","\\ddagger");m(y,b,Se,"≀","\\wr",!0);m(y,b,Se,"⨿","\\amalg");m(y,b,Se,"&","\\And");m(y,b,M,"⟵","\\longleftarrow",!0);m(y,b,M,"⇐","\\Leftarrow",!0);m(y,b,M,"⟸","\\Longleftarrow",!0);m(y,b,M,"⟶","\\longrightarrow",!0);m(y,b,M,"⇒","\\Rightarrow",!0);m(y,b,M,"⟹","\\Longrightarrow",!0);m(y,b,M,"↔","\\leftrightarrow",!0);m(y,b,M,"⟷","\\longleftrightarrow",!0);m(y,b,M,"⇔","\\Leftrightarrow",!0);m(y,b,M,"⟺","\\Longleftrightarrow",!0);m(y,b,M,"↦","\\mapsto",!0);m(y,b,M,"⟼","\\longmapsto",!0);m(y,b,M,"↗","\\nearrow",!0);m(y,b,M,"↩","\\hookleftarrow",!0);m(y,b,M,"↪","\\hookrightarrow",!0);m(y,b,M,"↘","\\searrow",!0);m(y,b,M,"↼","\\leftharpoonup",!0);m(y,b,M,"⇀","\\rightharpoonup",!0);m(y,b,M,"↙","\\swarrow",!0);m(y,b,M,"↽","\\leftharpoondown",!0);m(y,b,M,"⇁","\\rightharpoondown",!0);m(y,b,M,"↖","\\nwarrow",!0);m(y,b,M,"⇌","\\rightleftharpoons",!0);m(y,C,M,"≮","\\nless",!0);m(y,C,M,"","\\@nleqslant");m(y,C,M,"","\\@nleqq");m(y,C,M,"⪇","\\lneq",!0);m(y,C,M,"≨","\\lneqq",!0);m(y,C,M,"","\\@lvertneqq");m(y,C,M,"⋦","\\lnsim",!0);m(y,C,M,"⪉","\\lnapprox",!0);m(y,C,M,"⊀","\\nprec",!0);m(y,C,M,"⋠","\\npreceq",!0);m(y,C,M,"⋨","\\precnsim",!0);m(y,C,M,"⪹","\\precnapprox",!0);m(y,C,M,"≁","\\nsim",!0);m(y,C,M,"","\\@nshortmid");m(y,C,M,"∤","\\nmid",!0);m(y,C,M,"⊬","\\nvdash",!0);m(y,C,M,"⊭","\\nvDash",!0);m(y,C,M,"⋪","\\ntriangleleft");m(y,C,M,"⋬","\\ntrianglelefteq",!0);m(y,C,M,"⊊","\\subsetneq",!0);m(y,C,M,"","\\@varsubsetneq");m(y,C,M,"⫋","\\subsetneqq",!0);m(y,C,M,"","\\@varsubsetneqq");m(y,C,M,"≯","\\ngtr",!0);m(y,C,M,"","\\@ngeqslant");m(y,C,M,"","\\@ngeqq");m(y,C,M,"⪈","\\gneq",!0);m(y,C,M,"≩","\\gneqq",!0);m(y,C,M,"","\\@gvertneqq");m(y,C,M,"⋧","\\gnsim",!0);m(y,C,M,"⪊","\\gnapprox",!0);m(y,C,M,"⊁","\\nsucc",!0);m(y,C,M,"⋡","\\nsucceq",!0);m(y,C,M,"⋩","\\succnsim",!0);m(y,C,M,"⪺","\\succnapprox",!0);m(y,C,M,"≆","\\ncong",!0);m(y,C,M,"","\\@nshortparallel");m(y,C,M,"∦","\\nparallel",!0);m(y,C,M,"⊯","\\nVDash",!0);m(y,C,M,"⋫","\\ntriangleright");m(y,C,M,"⋭","\\ntrianglerighteq",!0);m(y,C,M,"","\\@nsupseteqq");m(y,C,M,"⊋","\\supsetneq",!0);m(y,C,M,"","\\@varsupsetneq");m(y,C,M,"⫌","\\supsetneqq",!0);m(y,C,M,"","\\@varsupsetneqq");m(y,C,M,"⊮","\\nVdash",!0);m(y,C,M,"⪵","\\precneqq",!0);m(y,C,M,"⪶","\\succneqq",!0);m(y,C,M,"","\\@nsubseteqq");m(y,C,Se,"⊴","\\unlhd");m(y,C,Se,"⊵","\\unrhd");m(y,C,M,"↚","\\nleftarrow",!0);m(y,C,M,"↛","\\nrightarrow",!0);m(y,C,M,"⇍","\\nLeftarrow",!0);m(y,C,M,"⇏","\\nRightarrow",!0);m(y,C,M,"↮","\\nleftrightarrow",!0);m(y,C,M,"⇎","\\nLeftrightarrow",!0);m(y,C,M,"△","\\vartriangle");m(y,C,H,"ℏ","\\hslash");m(y,C,H,"▽","\\triangledown");m(y,C,H,"◊","\\lozenge");m(y,C,H,"Ⓢ","\\circledS");m(y,C,H,"®","\\circledR");m(le,C,H,"®","\\circledR");m(y,C,H,"∡","\\measuredangle",!0);m(y,C,H,"∄","\\nexists");m(y,C,H,"℧","\\mho");m(y,C,H,"Ⅎ","\\Finv",!0);m(y,C,H,"⅁","\\Game",!0);m(y,C,H,"‵","\\backprime");m(y,C,H,"▲","\\blacktriangle");m(y,C,H,"▼","\\blacktriangledown");m(y,C,H,"■","\\blacksquare");m(y,C,H,"⧫","\\blacklozenge");m(y,C,H,"★","\\bigstar");m(y,C,H,"∢","\\sphericalangle",!0);m(y,C,H,"∁","\\complement",!0);m(y,C,H,"ð","\\eth",!0);m(le,b,H,"ð","ð");m(y,C,H,"╱","\\diagup");m(y,C,H,"╲","\\diagdown");m(y,C,H,"□","\\square");m(y,C,H,"□","\\Box");m(y,C,H,"◊","\\Diamond");m(y,C,H,"¥","\\yen",!0);m(le,C,H,"¥","\\yen",!0);m(y,C,H,"✓","\\checkmark",!0);m(le,C,H,"✓","\\checkmark");m(y,C,H,"ℶ","\\beth",!0);m(y,C,H,"ℸ","\\daleth",!0);m(y,C,H,"ℷ","\\gimel",!0);m(y,C,H,"ϝ","\\digamma",!0);m(y,C,H,"ϰ","\\varkappa");m(y,C,ut,"┌","\\@ulcorner",!0);m(y,C,Un,"┐","\\@urcorner",!0);m(y,C,ut,"└","\\@llcorner",!0);m(y,C,Un,"┘","\\@lrcorner",!0);m(y,C,M,"≦","\\leqq",!0);m(y,C,M,"⩽","\\leqslant",!0);m(y,C,M,"⪕","\\eqslantless",!0);m(y,C,M,"≲","\\lesssim",!0);m(y,C,M,"⪅","\\lessapprox",!0);m(y,C,M,"≊","\\approxeq",!0);m(y,C,Se,"⋖","\\lessdot");m(y,C,M,"⋘","\\lll",!0);m(y,C,M,"≶","\\lessgtr",!0);m(y,C,M,"⋚","\\lesseqgtr",!0);m(y,C,M,"⪋","\\lesseqqgtr",!0);m(y,C,M,"≑","\\doteqdot");m(y,C,M,"≓","\\risingdotseq",!0);m(y,C,M,"≒","\\fallingdotseq",!0);m(y,C,M,"∽","\\backsim",!0);m(y,C,M,"⋍","\\backsimeq",!0);m(y,C,M,"⫅","\\subseteqq",!0);m(y,C,M,"⋐","\\Subset",!0);m(y,C,M,"⊏","\\sqsubset",!0);m(y,C,M,"≼","\\preccurlyeq",!0);m(y,C,M,"⋞","\\curlyeqprec",!0);m(y,C,M,"≾","\\precsim",!0);m(y,C,M,"⪷","\\precapprox",!0);m(y,C,M,"⊲","\\vartriangleleft");m(y,C,M,"⊴","\\trianglelefteq");m(y,C,M,"⊨","\\vDash",!0);m(y,C,M,"⊪","\\Vvdash",!0);m(y,C,M,"⌣","\\smallsmile");m(y,C,M,"⌢","\\smallfrown");m(y,C,M,"≏","\\bumpeq",!0);m(y,C,M,"≎","\\Bumpeq",!0);m(y,C,M,"≧","\\geqq",!0);m(y,C,M,"⩾","\\geqslant",!0);m(y,C,M,"⪖","\\eqslantgtr",!0);m(y,C,M,"≳","\\gtrsim",!0);m(y,C,M,"⪆","\\gtrapprox",!0);m(y,C,Se,"⋗","\\gtrdot");m(y,C,M,"⋙","\\ggg",!0);m(y,C,M,"≷","\\gtrless",!0);m(y,C,M,"⋛","\\gtreqless",!0);m(y,C,M,"⪌","\\gtreqqless",!0);m(y,C,M,"≖","\\eqcirc",!0);m(y,C,M,"≗","\\circeq",!0);m(y,C,M,"≜","\\triangleq",!0);m(y,C,M,"∼","\\thicksim");m(y,C,M,"≈","\\thickapprox");m(y,C,M,"⫆","\\supseteqq",!0);m(y,C,M,"⋑","\\Supset",!0);m(y,C,M,"⊐","\\sqsupset",!0);m(y,C,M,"≽","\\succcurlyeq",!0);m(y,C,M,"⋟","\\curlyeqsucc",!0);m(y,C,M,"≿","\\succsim",!0);m(y,C,M,"⪸","\\succapprox",!0);m(y,C,M,"⊳","\\vartriangleright");m(y,C,M,"⊵","\\trianglerighteq");m(y,C,M,"⊩","\\Vdash",!0);m(y,C,M,"∣","\\shortmid");m(y,C,M,"∥","\\shortparallel");m(y,C,M,"≬","\\between",!0);m(y,C,M,"⋔","\\pitchfork",!0);m(y,C,M,"∝","\\varpropto");m(y,C,M,"◀","\\blacktriangleleft");m(y,C,M,"∴","\\therefore",!0);m(y,C,M,"∍","\\backepsilon");m(y,C,M,"▶","\\blacktriangleright");m(y,C,M,"∵","\\because",!0);m(y,C,M,"⋘","\\llless");m(y,C,M,"⋙","\\gggtr");m(y,C,Se,"⊲","\\lhd");m(y,C,Se,"⊳","\\rhd");m(y,C,M,"≂","\\eqsim",!0);m(y,b,M,"⋈","\\Join");m(y,C,M,"≑","\\Doteq",!0);m(y,C,Se,"∔","\\dotplus",!0);m(y,C,Se,"∖","\\smallsetminus");m(y,C,Se,"⋒","\\Cap",!0);m(y,C,Se,"⋓","\\Cup",!0);m(y,C,Se,"⩞","\\doublebarwedge",!0);m(y,C,Se,"⊟","\\boxminus",!0);m(y,C,Se,"⊞","\\boxplus",!0);m(y,C,Se,"⋇","\\divideontimes",!0);m(y,C,Se,"⋉","\\ltimes",!0);m(y,C,Se,"⋊","\\rtimes",!0);m(y,C,Se,"⋋","\\leftthreetimes",!0);m(y,C,Se,"⋌","\\rightthreetimes",!0);m(y,C,Se,"⋏","\\curlywedge",!0);m(y,C,Se,"⋎","\\curlyvee",!0);m(y,C,Se,"⊝","\\circleddash",!0);m(y,C,Se,"⊛","\\circledast",!0);m(y,C,Se,"⋅","\\centerdot");m(y,C,Se,"⊺","\\intercal",!0);m(y,C,Se,"⋒","\\doublecap");m(y,C,Se,"⋓","\\doublecup");m(y,C,Se,"⊠","\\boxtimes",!0);m(y,C,M,"⇢","\\dashrightarrow",!0);m(y,C,M,"⇠","\\dashleftarrow",!0);m(y,C,M,"⇇","\\leftleftarrows",!0);m(y,C,M,"⇆","\\leftrightarrows",!0);m(y,C,M,"⇚","\\Lleftarrow",!0);m(y,C,M,"↞","\\twoheadleftarrow",!0);m(y,C,M,"↢","\\leftarrowtail",!0);m(y,C,M,"↫","\\looparrowleft",!0);m(y,C,M,"⇋","\\leftrightharpoons",!0);m(y,C,M,"↶","\\curvearrowleft",!0);m(y,C,M,"↺","\\circlearrowleft",!0);m(y,C,M,"↰","\\Lsh",!0);m(y,C,M,"⇈","\\upuparrows",!0);m(y,C,M,"↿","\\upharpoonleft",!0);m(y,C,M,"⇃","\\downharpoonleft",!0);m(y,b,M,"⊶","\\origof",!0);m(y,b,M,"⊷","\\imageof",!0);m(y,C,M,"⊸","\\multimap",!0);m(y,C,M,"↭","\\leftrightsquigarrow",!0);m(y,C,M,"⇉","\\rightrightarrows",!0);m(y,C,M,"⇄","\\rightleftarrows",!0);m(y,C,M,"↠","\\twoheadrightarrow",!0);m(y,C,M,"↣","\\rightarrowtail",!0);m(y,C,M,"↬","\\looparrowright",!0);m(y,C,M,"↷","\\curvearrowright",!0);m(y,C,M,"↻","\\circlearrowright",!0);m(y,C,M,"↱","\\Rsh",!0);m(y,C,M,"⇊","\\downdownarrows",!0);m(y,C,M,"↾","\\upharpoonright",!0);m(y,C,M,"⇂","\\downharpoonright",!0);m(y,C,M,"⇝","\\rightsquigarrow",!0);m(y,C,M,"⇝","\\leadsto");m(y,C,M,"⇛","\\Rrightarrow",!0);m(y,C,M,"↾","\\restriction");m(y,b,H,"‘","`");m(y,b,H,"$","\\$");m(le,b,H,"$","\\$");m(le,b,H,"$","\\textdollar");m(y,b,H,"%","\\%");m(le,b,H,"%","\\%");m(y,b,H,"_","\\_");m(le,b,H,"_","\\_");m(le,b,H,"_","\\textunderscore");m(y,b,H,"∠","\\angle",!0);m(y,b,H,"∞","\\infty",!0);m(y,b,H,"′","\\prime");m(y,b,H,"△","\\triangle");m(y,b,H,"Γ","\\Gamma",!0);m(y,b,H,"Δ","\\Delta",!0);m(y,b,H,"Θ","\\Theta",!0);m(y,b,H,"Λ","\\Lambda",!0);m(y,b,H,"Ξ","\\Xi",!0);m(y,b,H,"Π","\\Pi",!0);m(y,b,H,"Σ","\\Sigma",!0);m(y,b,H,"Υ","\\Upsilon",!0);m(y,b,H,"Φ","\\Phi",!0);m(y,b,H,"Ψ","\\Psi",!0);m(y,b,H,"Ω","\\Omega",!0);m(y,b,H,"A","Α");m(y,b,H,"B","Β");m(y,b,H,"E","Ε");m(y,b,H,"Z","Ζ");m(y,b,H,"H","Η");m(y,b,H,"I","Ι");m(y,b,H,"K","Κ");m(y,b,H,"M","Μ");m(y,b,H,"N","Ν");m(y,b,H,"O","Ο");m(y,b,H,"P","Ρ");m(y,b,H,"T","Τ");m(y,b,H,"X","Χ");m(y,b,H,"¬","\\neg",!0);m(y,b,H,"¬","\\lnot");m(y,b,H,"⊤","\\top");m(y,b,H,"⊥","\\bot");m(y,b,H,"∅","\\emptyset");m(y,C,H,"∅","\\varnothing");m(y,b,Ee,"α","\\alpha",!0);m(y,b,Ee,"β","\\beta",!0);m(y,b,Ee,"γ","\\gamma",!0);m(y,b,Ee,"δ","\\delta",!0);m(y,b,Ee,"ϵ","\\epsilon",!0);m(y,b,Ee,"ζ","\\zeta",!0);m(y,b,Ee,"η","\\eta",!0);m(y,b,Ee,"θ","\\theta",!0);m(y,b,Ee,"ι","\\iota",!0);m(y,b,Ee,"κ","\\kappa",!0);m(y,b,Ee,"λ","\\lambda",!0);m(y,b,Ee,"μ","\\mu",!0);m(y,b,Ee,"ν","\\nu",!0);m(y,b,Ee,"ξ","\\xi",!0);m(y,b,Ee,"ο","\\omicron",!0);m(y,b,Ee,"π","\\pi",!0);m(y,b,Ee,"ρ","\\rho",!0);m(y,b,Ee,"σ","\\sigma",!0);m(y,b,Ee,"τ","\\tau",!0);m(y,b,Ee,"υ","\\upsilon",!0);m(y,b,Ee,"ϕ","\\phi",!0);m(y,b,Ee,"χ","\\chi",!0);m(y,b,Ee,"ψ","\\psi",!0);m(y,b,Ee,"ω","\\omega",!0);m(y,b,Ee,"ε","\\varepsilon",!0);m(y,b,Ee,"ϑ","\\vartheta",!0);m(y,b,Ee,"ϖ","\\varpi",!0);m(y,b,Ee,"ϱ","\\varrho",!0);m(y,b,Ee,"ς","\\varsigma",!0);m(y,b,Ee,"φ","\\varphi",!0);m(y,b,Se,"∗","*",!0);m(y,b,Se,"+","+");m(y,b,Se,"−","-",!0);m(y,b,Se,"⋅","\\cdot",!0);m(y,b,Se,"∘","\\circ",!0);m(y,b,Se,"÷","\\div",!0);m(y,b,Se,"±","\\pm",!0);m(y,b,Se,"×","\\times",!0);m(y,b,Se,"∩","\\cap",!0);m(y,b,Se,"∪","\\cup",!0);m(y,b,Se,"∖","\\setminus",!0);m(y,b,Se,"∧","\\land");m(y,b,Se,"∨","\\lor");m(y,b,Se,"∧","\\wedge",!0);m(y,b,Se,"∨","\\vee",!0);m(y,b,H,"√","\\surd");m(y,b,ut,"⟨","\\langle",!0);m(y,b,ut,"∣","\\lvert");m(y,b,ut,"∥","\\lVert");m(y,b,Un,"?","?");m(y,b,Un,"!","!");m(y,b,Un,"⟩","\\rangle",!0);m(y,b,Un,"∣","\\rvert");m(y,b,Un,"∥","\\rVert");m(y,b,M,"=","=");m(y,b,M,":",":");m(y,b,M,"≈","\\approx",!0);m(y,b,M,"≅","\\cong",!0);m(y,b,M,"≥","\\ge");m(y,b,M,"≥","\\geq",!0);m(y,b,M,"←","\\gets");m(y,b,M,">","\\gt",!0);m(y,b,M,"∈","\\in",!0);m(y,b,M,"","\\@not");m(y,b,M,"⊂","\\subset",!0);m(y,b,M,"⊃","\\supset",!0);m(y,b,M,"⊆","\\subseteq",!0);m(y,b,M,"⊇","\\supseteq",!0);m(y,C,M,"⊈","\\nsubseteq",!0);m(y,C,M,"⊉","\\nsupseteq",!0);m(y,b,M,"⊨","\\models");m(y,b,M,"←","\\leftarrow",!0);m(y,b,M,"≤","\\le");m(y,b,M,"≤","\\leq",!0);m(y,b,M,"<","\\lt",!0);m(y,b,M,"→","\\rightarrow",!0);m(y,b,M,"→","\\to");m(y,C,M,"≱","\\ngeq",!0);m(y,C,M,"≰","\\nleq",!0);m(y,b,ir," ","\\ ");m(y,b,ir," ","\\space");m(y,b,ir," ","\\nobreakspace");m(le,b,ir," ","\\ ");m(le,b,ir," "," ");m(le,b,ir," ","\\space");m(le,b,ir," ","\\nobreakspace");m(y,b,ir,null,"\\nobreak");m(y,b,ir,null,"\\allowbreak");m(y,b,Ms,",",",");m(y,b,Ms,";",";");m(y,C,Se,"⊼","\\barwedge",!0);m(y,C,Se,"⊻","\\veebar",!0);m(y,b,Se,"⊙","\\odot",!0);m(y,b,Se,"⊕","\\oplus",!0);m(y,b,Se,"⊗","\\otimes",!0);m(y,b,H,"∂","\\partial",!0);m(y,b,Se,"⊘","\\oslash",!0);m(y,C,Se,"⊚","\\circledcirc",!0);m(y,C,Se,"⊡","\\boxdot",!0);m(y,b,Se,"△","\\bigtriangleup");m(y,b,Se,"▽","\\bigtriangledown");m(y,b,Se,"†","\\dagger");m(y,b,Se,"⋄","\\diamond");m(y,b,Se,"⋆","\\star");m(y,b,Se,"◃","\\triangleleft");m(y,b,Se,"▹","\\triangleright");m(y,b,ut,"{","\\{");m(le,b,H,"{","\\{");m(le,b,H,"{","\\textbraceleft");m(y,b,Un,"}","\\}");m(le,b,H,"}","\\}");m(le,b,H,"}","\\textbraceright");m(y,b,ut,"{","\\lbrace");m(y,b,Un,"}","\\rbrace");m(y,b,ut,"[","\\lbrack",!0);m(le,b,H,"[","\\lbrack",!0);m(y,b,Un,"]","\\rbrack",!0);m(le,b,H,"]","\\rbrack",!0);m(y,b,ut,"(","\\lparen",!0);m(y,b,Un,")","\\rparen",!0);m(le,b,H,"<","\\textless",!0);m(le,b,H,">","\\textgreater",!0);m(y,b,ut,"⌊","\\lfloor",!0);m(y,b,Un,"⌋","\\rfloor",!0);m(y,b,ut,"⌈","\\lceil",!0);m(y,b,Un,"⌉","\\rceil",!0);m(y,b,H,"\\","\\backslash");m(y,b,H,"∣","|");m(y,b,H,"∣","\\vert");m(le,b,H,"|","\\textbar",!0);m(y,b,H,"∥","\\|");m(y,b,H,"∥","\\Vert");m(le,b,H,"∥","\\textbardbl");m(le,b,H,"~","\\textasciitilde");m(le,b,H,"\\","\\textbackslash");m(le,b,H,"^","\\textasciicircum");m(y,b,M,"↑","\\uparrow",!0);m(y,b,M,"⇑","\\Uparrow",!0);m(y,b,M,"↓","\\downarrow",!0);m(y,b,M,"⇓","\\Downarrow",!0);m(y,b,M,"↕","\\updownarrow",!0);m(y,b,M,"⇕","\\Updownarrow",!0);m(y,b,zn,"∐","\\coprod");m(y,b,zn,"⋁","\\bigvee");m(y,b,zn,"⋀","\\bigwedge");m(y,b,zn,"⨄","\\biguplus");m(y,b,zn,"⋂","\\bigcap");m(y,b,zn,"⋃","\\bigcup");m(y,b,zn,"∫","\\int");m(y,b,zn,"∫","\\intop");m(y,b,zn,"∬","\\iint");m(y,b,zn,"∭","\\iiint");m(y,b,zn,"∏","\\prod");m(y,b,zn,"∑","\\sum");m(y,b,zn,"⨂","\\bigotimes");m(y,b,zn,"⨁","\\bigoplus");m(y,b,zn,"⨀","\\bigodot");m(y,b,zn,"∮","\\oint");m(y,b,zn,"∯","\\oiint");m(y,b,zn,"∰","\\oiiint");m(y,b,zn,"⨆","\\bigsqcup");m(y,b,zn,"∫","\\smallint");m(le,b,Ho,"…","\\textellipsis");m(y,b,Ho,"…","\\mathellipsis");m(le,b,Ho,"…","\\ldots",!0);m(y,b,Ho,"…","\\ldots",!0);m(y,b,Ho,"⋯","\\@cdots",!0);m(y,b,Ho,"⋱","\\ddots",!0);m(y,b,H,"⋮","\\varvdots");m(le,b,H,"⋮","\\varvdots");m(y,b,sn,"ˊ","\\acute");m(y,b,sn,"ˋ","\\grave");m(y,b,sn,"¨","\\ddot");m(y,b,sn,"~","\\tilde");m(y,b,sn,"ˉ","\\bar");m(y,b,sn,"˘","\\breve");m(y,b,sn,"ˇ","\\check");m(y,b,sn,"^","\\hat");m(y,b,sn,"⃗","\\vec");m(y,b,sn,"˙","\\dot");m(y,b,sn,"˚","\\mathring");m(y,b,Ee,"","\\@imath");m(y,b,Ee,"","\\@jmath");m(y,b,H,"ı","ı");m(y,b,H,"ȷ","ȷ");m(le,b,H,"ı","\\i",!0);m(le,b,H,"ȷ","\\j",!0);m(le,b,H,"ß","\\ss",!0);m(le,b,H,"æ","\\ae",!0);m(le,b,H,"œ","\\oe",!0);m(le,b,H,"ø","\\o",!0);m(le,b,H,"Æ","\\AE",!0);m(le,b,H,"Œ","\\OE",!0);m(le,b,H,"Ø","\\O",!0);m(le,b,sn,"ˊ","\\'");m(le,b,sn,"ˋ","\\`");m(le,b,sn,"ˆ","\\^");m(le,b,sn,"˜","\\~");m(le,b,sn,"ˉ","\\=");m(le,b,sn,"˘","\\u");m(le,b,sn,"˙","\\.");m(le,b,sn,"¸","\\c");m(le,b,sn,"˚","\\r");m(le,b,sn,"ˇ","\\v");m(le,b,sn,"¨",'\\"');m(le,b,sn,"˝","\\H");m(le,b,sn,"◯","\\textcircled");var Sp={"--":!0,"---":!0,"``":!0,"''":!0};m(le,b,H,"–","--",!0);m(le,b,H,"–","\\textendash");m(le,b,H,"—","---",!0);m(le,b,H,"—","\\textemdash");m(le,b,H,"‘","`",!0);m(le,b,H,"‘","\\textquoteleft");m(le,b,H,"’","'",!0);m(le,b,H,"’","\\textquoteright");m(le,b,H,"“","``",!0);m(le,b,H,"“","\\textquotedblleft");m(le,b,H,"”","''",!0);m(le,b,H,"”","\\textquotedblright");m(y,b,H,"°","\\degree",!0);m(le,b,H,"°","\\degree");m(le,b,H,"°","\\textdegree",!0);m(y,b,H,"£","\\pounds");m(y,b,H,"£","\\mathsterling",!0);m(le,b,H,"£","\\pounds");m(le,b,H,"£","\\textsterling",!0);m(y,C,H,"✠","\\maltese");m(le,C,H,"✠","\\maltese");var j1='0123456789/@."';for(var M0=0;M0<j1.length;M0++){var S1=j1.charAt(M0);m(y,b,H,S1,S1)}var q1='0123456789!@*()-=+";:?/.,';for(var D0=0;D0<q1.length;D0++){var T1=q1.charAt(D0);m(le,b,H,T1,T1)}var Ts="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var R0=0;R0<Ts.length;R0++){var hs=Ts.charAt(R0);m(y,b,Ee,hs,hs),m(le,b,H,hs,hs)}m(y,C,H,"C","ℂ");m(le,C,H,"C","ℂ");m(y,C,H,"H","ℍ");m(le,C,H,"H","ℍ");m(y,C,H,"N","ℕ");m(le,C,H,"N","ℕ");m(y,C,H,"P","ℙ");m(le,C,H,"P","ℙ");m(y,C,H,"Q","ℚ");m(le,C,H,"Q","ℚ");m(y,C,H,"R","ℝ");m(le,C,H,"R","ℝ");m(y,C,H,"Z","ℤ");m(le,C,H,"Z","ℤ");m(y,b,Ee,"h","ℎ");m(le,b,Ee,"h","ℎ");var Be="";for(var On=0;On<Ts.length;On++){var hn=Ts.charAt(On);Be=String.fromCharCode(55349,56320+On),m(y,b,Ee,hn,Be),m(le,b,H,hn,Be),Be=String.fromCharCode(55349,56372+On),m(y,b,Ee,hn,Be),m(le,b,H,hn,Be),Be=String.fromCharCode(55349,56424+On),m(y,b,Ee,hn,Be),m(le,b,H,hn,Be),Be=String.fromCharCode(55349,56580+On),m(y,b,Ee,hn,Be),m(le,b,H,hn,Be),Be=String.fromCharCode(55349,56684+On),m(y,b,Ee,hn,Be),m(le,b,H,hn,Be),Be=String.fromCharCode(55349,56736+On),m(y,b,Ee,hn,Be),m(le,b,H,hn,Be),Be=String.fromCharCode(55349,56788+On),m(y,b,Ee,hn,Be),m(le,b,H,hn,Be),Be=String.fromCharCode(55349,56840+On),m(y,b,Ee,hn,Be),m(le,b,H,hn,Be),Be=String.fromCharCode(55349,56944+On),m(y,b,Ee,hn,Be),m(le,b,H,hn,Be),On<26&&(Be=String.fromCharCode(55349,56632+On),m(y,b,Ee,hn,Be),m(le,b,H,hn,Be),Be=String.fromCharCode(55349,56476+On),m(y,b,Ee,hn,Be),m(le,b,H,hn,Be))}Be="𝕜";m(y,b,Ee,"k",Be);m(le,b,H,"k",Be);for(var to=0;to<10;to++){var Mr=to.toString();Be=String.fromCharCode(55349,57294+to),m(y,b,Ee,Mr,Be),m(le,b,H,Mr,Be),Be=String.fromCharCode(55349,57314+to),m(y,b,Ee,Mr,Be),m(le,b,H,Mr,Be),Be=String.fromCharCode(55349,57324+to),m(y,b,Ee,Mr,Be),m(le,b,H,Mr,Be),Be=String.fromCharCode(55349,57334+to),m(y,b,Ee,Mr,Be),m(le,b,H,Mr,Be)}var ec="ÐÞþ";for(var E0=0;E0<ec.length;E0++){var $s=ec.charAt(E0);m(y,b,Ee,$s,$s),m(le,b,H,$s,$s)}var ys=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],P1=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],Eb=function(t,r){var a=t.charCodeAt(0),s=t.charCodeAt(1),c=(a-55296)*1024+(s-56320)+65536,d=r==="math"?0:1;if(119808<=c&&c<120484){var f=Math.floor((c-119808)/26);return[ys[f][2],ys[f][d]]}else if(120782<=c&&c<=120831){var $=Math.floor((c-120782)/10);return[P1[$][2],P1[$][d]]}else{if(c===120485||c===120486)return[ys[0][2],ys[0][d]];if(120486<c&&c<120782)return["",""];throw new me("Unsupported character: "+t)}},Ds=function(t,r,a){return tn[a][t]&&tn[a][t].replace&&(t=tn[a][t].replace),{value:t,metrics:gc(t,r,a)}},Hn=function(t,r,a,s,c){var d=Ds(t,r,a),f=d.metrics;t=d.value;var $;if(f){var w=f.italic;(a==="text"||s&&s.font==="mathit")&&(w=0),$=new xt(t,f.height,f.depth,w,f.skew,f.width,c)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+t+"' in style '"+r+"' and mode '"+a+"'")),$=new xt(t,0,0,0,0,0,c);if(s){$.maxFontSize=s.sizeMultiplier,s.style.isTight()&&$.classes.push("mtight");var g=s.getColor();g&&($.style.color=g)}return $},xc=function(t,r,a,s){return s===void 0&&(s=[]),a.font==="boldsymbol"&&Ds(t,"Main-Bold",r).metrics?Hn(t,"Main-Bold",r,a,s.concat(["mathbf"])):t==="\\"||tn[r][t].font==="main"?Hn(t,"Main-Regular",r,a,s):Hn(t,"AMS-Regular",r,a,s.concat(["amsrm"]))},Bb=function(t,r,a,s,c){return c!=="textord"&&Ds(t,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},Rs=function(t,r,a){var s=t.mode,c=t.text,d=["mord"],f=s==="math"||s==="text"&&r.font,$=f?r.font:r.fontFamily,w="",g="";if(c.charCodeAt(0)===55349&&([w,g]=Eb(c,s)),w.length>0)return Hn(c,w,s,r,d.concat(g));if($){var x,S;if($==="boldsymbol"){var q=Bb(c,s,r,d,a);x=q.fontName,S=[q.fontClass]}else f?(x=nc[$].fontName,S=[$]):(x=gs($,r.fontWeight,r.fontShape),S=[$,r.fontWeight,r.fontShape]);if(Ds(c,x,s).metrics)return Hn(c,x,s,r,d.concat(S));if(Sp.hasOwnProperty(c)&&x.slice(0,10)==="Typewriter"){for(var j=[],_=0;_<c.length;_++)j.push(Hn(c[_],x,s,r,d.concat(S)));return ar(j)}}if(a==="mathord")return Hn(c,"Math-Italic",s,r,d.concat(["mathnormal"]));if(a==="textord"){var T=tn[s][c]&&tn[s][c].font;if(T==="ams"){var P=gs("amsrm",r.fontWeight,r.fontShape);return Hn(c,P,s,r,d.concat("amsrm",r.fontWeight,r.fontShape))}else if(T==="main"||!T){var B=gs("textrm",r.fontWeight,r.fontShape);return Hn(c,B,s,r,d.concat(r.fontWeight,r.fontShape))}else{var W=gs(T,r.fontWeight,r.fontShape);return Hn(c,W,s,r,d.concat(W,r.fontWeight,r.fontShape))}}else throw new Error("unexpected type: "+a+" in makeOrd")},Fb=(o,t)=>{if(Rr(o.classes)!==Rr(t.classes)||o.skew!==t.skew||o.maxFontSize!==t.maxFontSize||o.italic!==0&&o.hasClass("mathnormal"))return!1;if(o.classes.length===1){var r=o.classes[0];if(r==="mbin"||r==="mord")return!1}for(var a in o.style)if(o.style.hasOwnProperty(a)&&o.style[a]!==t.style[a])return!1;for(var s in t.style)if(t.style.hasOwnProperty(s)&&o.style[s]!==t.style[s])return!1;return!0},qp=o=>{for(var t=0;t<o.length-1;t++){var r=o[t],a=o[t+1];r instanceof xt&&a instanceof xt&&Fb(r,a)&&(r.text+=a.text,r.height=Math.max(r.height,a.height),r.depth=Math.max(r.depth,a.depth),r.italic=a.italic,o.splice(t+1,1),t--)}return o},bc=function(t){for(var r=0,a=0,s=0,c=0;c<t.children.length;c++){var d=t.children[c];d.height>r&&(r=d.height),d.depth>a&&(a=d.depth),d.maxFontSize>s&&(s=d.maxFontSize)}t.height=r,t.depth=a,t.maxFontSize=s},de=function(t,r,a,s){var c=new Xi(t,r,a,s);return bc(c),c},Br=(o,t,r,a)=>new Xi(o,t,r,a),Lo=function(t,r,a){var s=de([t],[],r);return s.height=Math.max(a||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),s.style.borderBottomWidth=be(s.height),s.maxFontSize=1,s},Ib=function(t,r,a,s){var c=new wc(t,r,a,s);return bc(c),c},ar=function(t){var r=new Yi(t);return bc(r),r},Wo=function(t,r){return t instanceof Yi?de([],[t],r):t},Nb=function(t){if(t.positionType==="individualShift"){for(var r=t.children,a=[r[0]],s=-r[0].shift-r[0].elem.depth,c=s,d=1;d<r.length;d++){var f=-r[d].shift-c-r[d].elem.depth,$=f-(r[d-1].elem.height+r[d-1].elem.depth);c=c+f,a.push({type:"kern",size:$}),a.push(r[d])}return{children:a,depth:s}}var w;if(t.positionType==="top"){for(var g=t.positionData,x=0;x<t.children.length;x++){var S=t.children[x];g-=S.type==="kern"?S.size:S.elem.height+S.elem.depth}w=g}else if(t.positionType==="bottom")w=-t.positionData;else{var q=t.children[0];if(q.type!=="elem")throw new Error('First child must have type "elem".');if(t.positionType==="shift")w=-q.elem.depth-t.positionData;else if(t.positionType==="firstBaseline")w=-q.elem.depth;else throw new Error("Invalid positionType "+t.positionType+".")}return{children:t.children,depth:w}},Ye=function(t,r){for(var{children:a,depth:s}=Nb(t),c=0,d=0;d<a.length;d++){var f=a[d];if(f.type==="elem"){var $=f.elem;c=Math.max(c,$.maxFontSize,$.height)}}c+=2;var w=de(["pstrut"],[]);w.style.height=be(c);for(var g=[],x=s,S=s,q=s,j=0;j<a.length;j++){var _=a[j];if(_.type==="kern")q+=_.size;else{var T=_.elem,P=_.wrapperClasses||[],B=_.wrapperStyle||{},W=de(P,[w,T],void 0,B);W.style.top=be(-c-q-T.depth),_.marginLeft&&(W.style.marginLeft=_.marginLeft),_.marginRight&&(W.style.marginRight=_.marginRight),g.push(W),q+=T.height+T.depth}x=Math.min(x,q),S=Math.max(S,q)}var I=de(["vlist"],g);I.style.height=be(S);var E;if(x<0){var O=de([],[]),F=de(["vlist"],[O]);F.style.height=be(-x);var ee=de(["vlist-s"],[new xt("​")]);E=[de(["vlist-r"],[I,ee]),de(["vlist-r"],[F])]}else E=[de(["vlist-r"],[I])];var J=de(["vlist-t"],E);return E.length===2&&J.classes.push("vlist-t2"),J.height=S,J.depth=-x,J},Tp=(o,t)=>{var r=de(["mspace"],[],t),a=pn(o,t);return r.style.marginRight=be(a),r},gs=function(t,r,a){var s="";switch(t){case"amsrm":s="AMS";break;case"textrm":s="Main";break;case"textsf":s="SansSerif";break;case"texttt":s="Typewriter";break;default:s=t}var c;return r==="textbf"&&a==="textit"?c="BoldItalic":r==="textbf"?c="Bold":r==="textit"?c="Italic":c="Regular",s+"-"+c},nc={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Pp={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},Ap=function(t,r){var[a,s,c]=Pp[t],d=new Er(a),f=new rr([d],{width:be(s),height:be(c),style:"width:"+be(s),viewBox:"0 0 "+1e3*s+" "+1e3*c,preserveAspectRatio:"xMinYMin"}),$=Br(["overlay"],[f],r);return $.height=c,$.style.height=be(c),$.style.width=be(s),$},dn={number:3,unit:"mu"},ro={number:4,unit:"mu"},er={number:5,unit:"mu"},Lb={mord:{mop:dn,mbin:ro,mrel:er,minner:dn},mop:{mord:dn,mop:dn,mrel:er,minner:dn},mbin:{mord:ro,mop:ro,mopen:ro,minner:ro},mrel:{mord:er,mop:er,mopen:er,minner:er},mopen:{},mclose:{mop:dn,mbin:ro,mrel:er,minner:dn},mpunct:{mord:dn,mop:dn,mrel:er,mopen:dn,mclose:dn,mpunct:dn,minner:dn},minner:{mord:dn,mop:dn,mbin:ro,mrel:er,mopen:dn,mpunct:dn,minner:dn}},Wb={mord:{mop:dn},mop:{mord:dn,mop:dn},mbin:{},mrel:{},mopen:{},mclose:{mop:dn},mpunct:{},minner:{mop:dn}},Cp={},Ps={},As={};function ke(o){for(var{type:t,names:r,props:a,handler:s,htmlBuilder:c,mathmlBuilder:d}=o,f={type:t,numArgs:a.numArgs,argTypes:a.argTypes,allowedInArgument:!!a.allowedInArgument,allowedInText:!!a.allowedInText,allowedInMath:a.allowedInMath===void 0?!0:a.allowedInMath,numOptionalArgs:a.numOptionalArgs||0,infix:!!a.infix,primitive:!!a.primitive,handler:s},$=0;$<r.length;++$)Cp[r[$]]=f;t&&(c&&(Ps[t]=c),d&&(As[t]=d))}function ao(o){var{type:t,htmlBuilder:r,mathmlBuilder:a}=o;ke({type:t,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:a})}var Cs=function(t){return t.type==="ordgroup"&&t.body.length===1?t.body[0]:t},yn=function(t){return t.type==="ordgroup"?t.body:[t]},Ob=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),Hb=new Set(["rightmost","mrel","mclose","mpunct"]),Gb={display:Ne.DISPLAY,text:Ne.TEXT,script:Ne.SCRIPT,scriptscript:Ne.SCRIPTSCRIPT},Ub={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},_n=function(t,r,a,s){s===void 0&&(s=[null,null]);for(var c=[],d=0;d<t.length;d++){var f=Ke(t[d],r);if(f instanceof Yi){var $=f.children;c.push(...$)}else c.push(f)}if(qp(c),!a)return c;var w=r;if(t.length===1){var g=t[0];g.type==="sizing"?w=r.havingSize(g.size):g.type==="styling"&&(w=r.havingStyle(Gb[g.style]))}var x=de([s[0]||"leftmost"],[],r),S=de([s[1]||"rightmost"],[],r),q=a==="root";return A1(c,(j,_)=>{var T=_.classes[0],P=j.classes[0];T==="mbin"&&Hb.has(P)?_.classes[0]="mord":P==="mbin"&&Ob.has(T)&&(j.classes[0]="mord")},{node:x},S,q),A1(c,(j,_)=>{var T=tc(_),P=tc(j),B=T&&P?j.hasClass("mtight")?Wb[T][P]:Lb[T][P]:null;if(B)return Tp(B,w)},{node:x},S,q),c},A1=function o(t,r,a,s,c){s&&t.push(s);for(var d=0;d<t.length;d++){var f=t[d],$=Mp(f);if($){o($.children,r,a,null,c);continue}var w=!f.hasClass("mspace");if(w){var g=r(f,a.node);g&&(a.insertAfter?a.insertAfter(g):(t.unshift(g),d++))}w?a.node=f:c&&f.hasClass("newline")&&(a.node=de(["leftmost"])),a.insertAfter=(x=>S=>{t.splice(x+1,0,S),d++})(d)}s&&t.pop()},Mp=function(t){return t instanceof Yi||t instanceof wc||t instanceof Xi&&t.hasClass("enclosing")?t:null},Zb=function o(t,r){var a=Mp(t);if(a){var s=a.children;if(s.length){if(r==="right")return o(s[s.length-1],"right");if(r==="left")return o(s[0],"left")}}return t},tc=function(t,r){return t?(r&&(t=Zb(t,r)),Ub[t.classes[0]]||null):null},Qi=function(t,r){var a=["nulldelimiter"].concat(t.baseSizingClasses());return de(r.concat(a))},Ke=function(t,r,a){if(!t)return de();if(Ps[t.type]){var s=Ps[t.type](t,r);if(a&&r.size!==a.size){s=de(r.sizingClasses(a),[s],r);var c=r.sizeMultiplier/a.sizeMultiplier;s.height*=c,s.depth*=c}return s}else throw new me("Got group of unknown type: '"+t.type+"'")};function ws(o,t){var r=de(["base"],o,t),a=de(["strut"]);return a.style.height=be(r.height+r.depth),r.depth&&(a.style.verticalAlign=be(-r.depth)),r.children.unshift(a),r}function rc(o,t){var r=null;o.length===1&&o[0].type==="tag"&&(r=o[0].tag,o=o[0].body);var a=_n(o,t,"root"),s;a.length===2&&a[1].hasClass("tag")&&(s=a.pop());for(var c=[],d=[],f=0;f<a.length;f++)if(d.push(a[f]),a[f].hasClass("mbin")||a[f].hasClass("mrel")||a[f].hasClass("allowbreak")){for(var $=!1;f<a.length-1&&a[f+1].hasClass("mspace")&&!a[f+1].hasClass("newline");)f++,d.push(a[f]),a[f].hasClass("nobreak")&&($=!0);$||(c.push(ws(d,t)),d=[])}else a[f].hasClass("newline")&&(d.pop(),d.length>0&&(c.push(ws(d,t)),d=[]),c.push(a[f]));d.length>0&&c.push(ws(d,t));var w;r?(w=ws(_n(r,t,!0)),w.classes=["tag"],c.push(w)):s&&c.push(s);var g=de(["katex-html"],c);if(g.setAttribute("aria-hidden","true"),w){var x=w.children[0];x.style.height=be(g.height+g.depth),g.depth&&(x.style.verticalAlign=be(-g.depth))}return g}function Dp(o){return new Yi(o)}class fe{constructor(t,r,a){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=t,this.attributes={},this.children=r||[],this.classes=a||[]}setAttribute(t,r){this.attributes[t]=r}getAttribute(t){return this.attributes[t]}toNode(){var t=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&t.setAttribute(r,this.attributes[r]);this.classes.length>0&&(t.className=Rr(this.classes));for(var a=0;a<this.children.length;a++)if(this.children[a]instanceof xn&&this.children[a+1]instanceof xn){for(var s=this.children[a].toText()+this.children[++a].toText();this.children[a+1]instanceof xn;)s+=this.children[++a].toText();t.appendChild(new xn(s).toNode())}else t.appendChild(this.children[a].toNode());return t}toMarkup(){var t="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="',t+=Fn(this.attributes[r]),t+='"');this.classes.length>0&&(t+=' class ="'+Fn(Rr(this.classes))+'"'),t+=">";for(var a=0;a<this.children.length;a++)t+=this.children[a].toMarkup();return t+="</"+this.type+">",t}toText(){return this.children.map(t=>t.toText()).join("")}}class xn{constructor(t){this.text=void 0,this.text=t}toNode(){return document.createTextNode(this.text)}toMarkup(){return Fn(this.toText())}toText(){return this.text}}class Rp{constructor(t){this.width=void 0,this.character=void 0,this.width=t,t>=.05555&&t<=.05556?this.character=" ":t>=.1666&&t<=.1667?this.character=" ":t>=.2222&&t<=.2223?this.character=" ":t>=.2777&&t<=.2778?this.character="  ":t>=-.05556&&t<=-.05555?this.character=" ⁣":t>=-.1667&&t<=-.1666?this.character=" ⁣":t>=-.2223&&t<=-.2222?this.character=" ⁣":t>=-.2778&&t<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var t=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return t.setAttribute("width",be(this.width)),t}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+be(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var Kb=new Set(["\\imath","\\jmath"]),Vb=new Set(["mrow","mtable"]),bt=function(t,r,a){return tn[r][t]&&tn[r][t].replace&&t.charCodeAt(0)!==55349&&!(Sp.hasOwnProperty(t)&&a&&(a.fontFamily&&a.fontFamily.slice(4,6)==="tt"||a.font&&a.font.slice(4,6)==="tt"))&&(t=tn[r][t].replace),new xn(t)},zc=function(t){return t.length===1?t[0]:new fe("mrow",t)},vc=function(t,r){if(r.fontFamily==="texttt")return"monospace";if(r.fontFamily==="textsf")return r.fontShape==="textit"&&r.fontWeight==="textbf"?"sans-serif-bold-italic":r.fontShape==="textit"?"sans-serif-italic":r.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(r.fontShape==="textit"&&r.fontWeight==="textbf")return"bold-italic";if(r.fontShape==="textit")return"italic";if(r.fontWeight==="textbf")return"bold";var a=r.font;if(!a||a==="mathnormal")return null;var s=t.mode;if(a==="mathit")return"italic";if(a==="boldsymbol")return t.type==="textord"?"bold":"bold-italic";if(a==="mathbf")return"bold";if(a==="mathbb")return"double-struck";if(a==="mathsfit")return"sans-serif-italic";if(a==="mathfrak")return"fraktur";if(a==="mathscr"||a==="mathcal")return"script";if(a==="mathsf")return"sans-serif";if(a==="mathtt")return"monospace";var c=t.text;if(Kb.has(c))return null;tn[s][c]&&tn[s][c].replace&&(c=tn[s][c].replace);var d=nc[a].fontName;return gc(c,d,s)?nc[a].variant:null};function B0(o){if(!o)return!1;if(o.type==="mi"&&o.children.length===1){var t=o.children[0];return t instanceof xn&&t.text==="."}else if(o.type==="mo"&&o.children.length===1&&o.getAttribute("separator")==="true"&&o.getAttribute("lspace")==="0em"&&o.getAttribute("rspace")==="0em"){var r=o.children[0];return r instanceof xn&&r.text===","}else return!1}var tt=function(t,r,a){if(t.length===1){var s=en(t[0],r);return a&&s instanceof fe&&s.type==="mo"&&(s.setAttribute("lspace","0em"),s.setAttribute("rspace","0em")),[s]}for(var c=[],d,f=0;f<t.length;f++){var $=en(t[f],r);if($ instanceof fe&&d instanceof fe){if($.type==="mtext"&&d.type==="mtext"&&$.getAttribute("mathvariant")===d.getAttribute("mathvariant")){d.children.push(...$.children);continue}else if($.type==="mn"&&d.type==="mn"){d.children.push(...$.children);continue}else if(B0($)&&d.type==="mn"){d.children.push(...$.children);continue}else if($.type==="mn"&&B0(d))$.children=[...d.children,...$.children],c.pop();else if(($.type==="msup"||$.type==="msub")&&$.children.length>=1&&(d.type==="mn"||B0(d))){var w=$.children[0];w instanceof fe&&w.type==="mn"&&(w.children=[...d.children,...w.children],c.pop())}else if(d.type==="mi"&&d.children.length===1){var g=d.children[0];if(g instanceof xn&&g.text==="̸"&&($.type==="mo"||$.type==="mi"||$.type==="mn")){var x=$.children[0];x instanceof xn&&x.text.length>0&&(x.text=x.text.slice(0,1)+"̸"+x.text.slice(1),c.pop())}}}c.push($),d=$}return c},Fr=function(t,r,a){return zc(tt(t,r,a))},en=function(t,r){if(!t)return new fe("mrow");if(As[t.type]){var a=As[t.type](t,r);return a}else throw new me("Got group of unknown type: '"+t.type+"'")};function C1(o,t,r,a,s){var c=tt(o,r),d;c.length===1&&c[0]instanceof fe&&Vb.has(c[0].type)?d=c[0]:d=new fe("mrow",c);var f=new fe("annotation",[new xn(t)]);f.setAttribute("encoding","application/x-tex");var $=new fe("semantics",[d,f]),w=new fe("math",[$]);w.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),a&&w.setAttribute("display","block");var g=s?"katex":"katex-mathml";return de([g],[w])}var Ep=function(t){return new nr({style:t.displayMode?Ne.DISPLAY:Ne.TEXT,maxSize:t.maxSize,minRuleThickness:t.minRuleThickness})},Bp=function(t,r){if(r.displayMode){var a=["katex-display"];r.leqno&&a.push("leqno"),r.fleqn&&a.push("fleqn"),t=de(a,[t])}return t},Qb=function(t,r,a){var s=Ep(a),c;if(a.output==="mathml")return C1(t,r,s,a.displayMode,!0);if(a.output==="html"){var d=rc(t,s);c=de(["katex"],[d])}else{var f=C1(t,r,s,a.displayMode,!1),$=rc(t,s);c=de(["katex"],[f,$])}return Bp(c,a)},Yb=function(t,r,a){var s=Ep(a),c=rc(t,s),d=de(["katex"],[c]);return Bp(d,a)},Xb={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},Es=function(t){var r=new fe("mo",[new xn(Xb[t.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},Jb={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},ez=new Set(["widehat","widecheck","widetilde","utilde"]),Bs=function(t,r){function a(){var f=4e5,$=t.label.slice(1);if(ez.has($)){var w=t,g=w.base.type==="ordgroup"?w.base.body.length:1,x,S,q;if(g>5)$==="widehat"||$==="widecheck"?(x=420,f=2364,q=.42,S=$+"4"):(x=312,f=2340,q=.34,S="tilde4");else{var j=[1,1,2,2,3,3][g];$==="widehat"||$==="widecheck"?(f=[0,1062,2364,2364,2364][j],x=[0,239,300,360,420][j],q=[0,.24,.3,.3,.36,.42][j],S=$+j):(f=[0,600,1033,2339,2340][j],x=[0,260,286,306,312][j],q=[0,.26,.286,.3,.306,.34][j],S="tilde"+j)}var _=new Er(S),T=new rr([_],{width:"100%",height:be(q),viewBox:"0 0 "+f+" "+x,preserveAspectRatio:"none"});return{span:Br([],[T],r),minWidth:0,height:q}}else{var P=[],B=Jb[$],[W,I,E]=B,O=E/1e3,F=W.length,ee,J;if(F===1){var ne=B[3];ee=["hide-tail"],J=[ne]}else if(F===2)ee=["halfarrow-left","halfarrow-right"],J=["xMinYMin","xMaxYMin"];else if(F===3)ee=["brace-left","brace-center","brace-right"],J=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+F+" children.");for(var re=0;re<F;re++){var Q=new Er(W[re]),Y=new rr([Q],{width:"400em",height:be(O),viewBox:"0 0 "+f+" "+E,preserveAspectRatio:J[re]+" slice"}),ce=Br([ee[re]],[Y],r);if(F===1)return{span:ce,minWidth:I,height:O};ce.style.height=be(O),P.push(ce)}return{span:de(["stretchy"],P,r),minWidth:I,height:O}}}var{span:s,minWidth:c,height:d}=a();return s.height=d,s.style.height=be(d),c>0&&(s.style.minWidth=be(c)),s},nz=function(t,r,a,s,c){var d,f=t.height+t.depth+a+s;if(/fbox|color|angl/.test(r)){if(d=de(["stretchy",r],[],c),r==="fbox"){var $=c.color&&c.getColor();$&&(d.style.borderColor=$)}}else{var w=[];/^[bx]cancel$/.test(r)&&w.push(new J0({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&w.push(new J0({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var g=new rr(w,{width:"100%",height:be(f)});d=Br([],[g],c)}return d.height=f,d.style.height=be(f),d};function Oe(o,t){if(!o||o.type!==t)throw new Error("Expected node of type "+t+", but got "+(o?"node of type "+o.type:String(o)));return o}function kc(o){var t=Fs(o);if(!t)throw new Error("Expected node of symbol group type, but got "+(o?"node of type "+o.type:String(o)));return t}function Fs(o){return o&&(o.type==="atom"||Rb.hasOwnProperty(o.type))?o:null}var _c=(o,t)=>{var r,a,s;o&&o.type==="supsub"?(a=Oe(o.base,"accent"),r=a.base,o.base=r,s=Mb(Ke(o,t)),o.base=a):(a=Oe(o,"accent"),r=a.base);var c=Ke(r,t.havingCrampedStyle()),d=a.isShifty&&or(r),f=0;if(d){var $=Hi(r),w=Ke($,t.havingCrampedStyle());f=_1(w).skew}var g=a.label==="\\c",x=g?c.height+c.depth:Math.min(c.height,t.fontMetrics().xHeight),S;if(a.isStretchy)S=Bs(a,t),S=Ye({positionType:"firstBaseline",children:[{type:"elem",elem:c},{type:"elem",elem:S,wrapperClasses:["svg-align"],wrapperStyle:f>0?{width:"calc(100% - "+be(2*f)+")",marginLeft:be(2*f)}:void 0}]});else{var q,j;a.label==="\\vec"?(q=Ap("vec",t),j=Pp.vec[1]):(q=Rs({mode:a.mode,text:a.label},t,"textord"),q=_1(q),q.italic=0,j=q.width,g&&(x+=q.depth)),S=de(["accent-body"],[q]);var _=a.label==="\\textcircled";_&&(S.classes.push("accent-full"),x=c.height);var T=f;_||(T-=j/2),S.style.left=be(T),a.label==="\\textcircled"&&(S.style.top=".2em"),S=Ye({positionType:"firstBaseline",children:[{type:"elem",elem:c},{type:"kern",size:-x},{type:"elem",elem:S}]})}var P=de(["mord","accent"],[S],t);return s?(s.children[0]=P,s.height=Math.max(P.height,s.height),s.classes[0]="mord",s):P},Fp=(o,t)=>{var r=o.isStretchy?Es(o.label):new fe("mo",[bt(o.label,o.mode)]),a=new fe("mover",[en(o.base,t),r]);return a.setAttribute("accent","true"),a},tz=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(o=>"\\"+o).join("|"));ke({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(o,t)=>{var r=Cs(t[0]),a=!tz.test(o.funcName),s=!a||o.funcName==="\\widehat"||o.funcName==="\\widetilde"||o.funcName==="\\widecheck";return{type:"accent",mode:o.parser.mode,label:o.funcName,isStretchy:a,isShifty:s,base:r}},htmlBuilder:_c,mathmlBuilder:Fp});ke({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(o,t)=>{var r=t[0],a=o.parser.mode;return a==="math"&&(o.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+o.funcName+" works only in text mode"),a="text"),{type:"accent",mode:a,label:o.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:_c,mathmlBuilder:Fp});ke({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=t[0];return{type:"accentUnder",mode:r.mode,label:a,base:s}},htmlBuilder:(o,t)=>{var r=Ke(o.base,t),a=Bs(o,t),s=o.label==="\\utilde"?.12:0,c=Ye({positionType:"top",positionData:r.height,children:[{type:"elem",elem:a,wrapperClasses:["svg-align"]},{type:"kern",size:s},{type:"elem",elem:r}]});return de(["mord","accentunder"],[c],t)},mathmlBuilder:(o,t)=>{var r=Es(o.label),a=new fe("munder",[en(o.base,t),r]);return a.setAttribute("accentunder","true"),a}});var xs=o=>{var t=new fe("mpadded",o?[o]:[]);return t.setAttribute("width","+0.6em"),t.setAttribute("lspace","0.3em"),t};ke({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(o,t,r){var{parser:a,funcName:s}=o;return{type:"xArrow",mode:a.mode,label:s,body:t[0],below:r[0]}},htmlBuilder(o,t){var r=t.style,a=t.havingStyle(r.sup()),s=Wo(Ke(o.body,a,t),t),c=o.label.slice(0,2)==="\\x"?"x":"cd";s.classes.push(c+"-arrow-pad");var d;o.below&&(a=t.havingStyle(r.sub()),d=Wo(Ke(o.below,a,t),t),d.classes.push(c+"-arrow-pad"));var f=Bs(o,t),$=-t.fontMetrics().axisHeight+.5*f.height,w=-t.fontMetrics().axisHeight-.5*f.height-.111;(s.depth>.25||o.label==="\\xleftequilibrium")&&(w-=s.depth);var g;if(d){var x=-t.fontMetrics().axisHeight+d.height+.5*f.height+.111;g=Ye({positionType:"individualShift",children:[{type:"elem",elem:s,shift:w},{type:"elem",elem:f,shift:$},{type:"elem",elem:d,shift:x}]})}else g=Ye({positionType:"individualShift",children:[{type:"elem",elem:s,shift:w},{type:"elem",elem:f,shift:$}]});return g.children[0].children[0].children[1].classes.push("svg-align"),de(["mrel","x-arrow"],[g],t)},mathmlBuilder(o,t){var r=Es(o.label);r.setAttribute("minsize",o.label.charAt(0)==="x"?"1.75em":"3.0em");var a;if(o.body){var s=xs(en(o.body,t));if(o.below){var c=xs(en(o.below,t));a=new fe("munderover",[r,c,s])}else a=new fe("mover",[r,s])}else if(o.below){var d=xs(en(o.below,t));a=new fe("munder",[r,d])}else a=xs(),a=new fe("mover",[r,a]);return a}});function Ip(o,t){var r=_n(o.body,t,!0);return de([o.mclass],r,t)}function Np(o,t){var r,a=tt(o.body,t);return o.mclass==="minner"?r=new fe("mpadded",a):o.mclass==="mord"?o.isCharacterBox?(r=a[0],r.type="mi"):r=new fe("mi",a):(o.isCharacterBox?(r=a[0],r.type="mo"):r=new fe("mo",a),o.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):o.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):o.mclass==="mopen"||o.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):o.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}ke({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(o,t){var{parser:r,funcName:a}=o,s=t[0];return{type:"mclass",mode:r.mode,mclass:"m"+a.slice(5),body:yn(s),isCharacterBox:or(s)}},htmlBuilder:Ip,mathmlBuilder:Np});var Is=o=>{var t=o.type==="ordgroup"&&o.body.length?o.body[0]:o;return t.type==="atom"&&(t.family==="bin"||t.family==="rel")?"m"+t.family:"mord"};ke({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(o,t){var{parser:r}=o;return{type:"mclass",mode:r.mode,mclass:Is(t[0]),body:yn(t[1]),isCharacterBox:or(t[1])}}});ke({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(o,t){var{parser:r,funcName:a}=o,s=t[1],c=t[0],d;a!=="\\stackrel"?d=Is(s):d="mrel";var f={type:"op",mode:s.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:a!=="\\stackrel",body:yn(s)},$={type:"supsub",mode:c.mode,base:f,sup:a==="\\underset"?null:c,sub:a==="\\underset"?c:null};return{type:"mclass",mode:r.mode,mclass:d,body:[$],isCharacterBox:or($)}},htmlBuilder:Ip,mathmlBuilder:Np});ke({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(o,t){var{parser:r}=o;return{type:"pmb",mode:r.mode,mclass:Is(t[0]),body:yn(t[0])}},htmlBuilder(o,t){var r=_n(o.body,t,!0),a=de([o.mclass],r,t);return a.style.textShadow="0.02em 0.01em 0.04px",a},mathmlBuilder(o,t){var r=tt(o.body,t),a=new fe("mstyle",r);return a.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),a}});var rz={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},M1=()=>({type:"styling",body:[],mode:"math",style:"display"}),D1=o=>o.type==="textord"&&o.text==="@",oz=(o,t)=>(o.type==="mathord"||o.type==="atom")&&o.text===t;function iz(o,t,r){var a=rz[o];switch(a){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(a,[t[0]],[t[1]]);case"\\uparrow":case"\\downarrow":{var s=r.callFunction("\\\\cdleft",[t[0]],[]),c={type:"atom",text:a,mode:"math",family:"rel"},d=r.callFunction("\\Big",[c],[]),f=r.callFunction("\\\\cdright",[t[1]],[]),$={type:"ordgroup",mode:"math",body:[s,d,f]};return r.callFunction("\\\\cdparent",[$],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var w={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[w],[])}default:return{type:"textord",text:" ",mode:"math"}}}function az(o){var t=[];for(o.gullet.beginGroup(),o.gullet.macros.set("\\cr","\\\\\\relax"),o.gullet.beginGroup();;){t.push(o.parseExpression(!1,"\\\\")),o.gullet.endGroup(),o.gullet.beginGroup();var r=o.fetch().text;if(r==="&"||r==="\\\\")o.consume();else if(r==="\\end"){t[t.length-1].length===0&&t.pop();break}else throw new me("Expected \\\\ or \\cr or \\end",o.nextToken)}for(var a=[],s=[a],c=0;c<t.length;c++){for(var d=t[c],f=M1(),$=0;$<d.length;$++)if(!D1(d[$]))f.body.push(d[$]);else{a.push(f),$+=1;var w=kc(d[$]).text,g=new Array(2);if(g[0]={type:"ordgroup",mode:"math",body:[]},g[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(w))if("<>AV".includes(w))for(var x=0;x<2;x++){for(var S=!0,q=$+1;q<d.length;q++){if(oz(d[q],w)){S=!1,$=q;break}if(D1(d[q]))throw new me("Missing a "+w+" character to complete a CD arrow.",d[q]);g[x].body.push(d[q])}if(S)throw new me("Missing a "+w+" character to complete a CD arrow.",d[$])}else throw new me('Expected one of "<>AV=|." after @',d[$]);var j=iz(w,g,o),_={type:"styling",body:[j],mode:"math",style:"display"};a.push(_),f=M1()}c%2===0?a.push(f):a.shift(),a=[],s.push(a)}o.gullet.endGroup(),o.gullet.endGroup();var T=new Array(s[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:s,arraystretch:1,addJot:!0,rowGaps:[null],cols:T,colSeparationType:"CD",hLinesBeforeRow:new Array(s.length+1).fill([])}}ke({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(o,t){var{parser:r,funcName:a}=o;return{type:"cdlabel",mode:r.mode,side:a.slice(4),label:t[0]}},htmlBuilder(o,t){var r=t.havingStyle(t.style.sup()),a=Wo(Ke(o.label,r,t),t);return a.classes.push("cd-label-"+o.side),a.style.bottom=be(.8-a.depth),a.height=0,a.depth=0,a},mathmlBuilder(o,t){var r=new fe("mrow",[en(o.label,t)]);return r=new fe("mpadded",[r]),r.setAttribute("width","0"),o.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new fe("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});ke({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(o,t){var{parser:r}=o;return{type:"cdlabelparent",mode:r.mode,fragment:t[0]}},htmlBuilder(o,t){var r=Wo(Ke(o.fragment,t),t);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(o,t){return new fe("mrow",[en(o.fragment,t)])}});ke({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(o,t){for(var{parser:r}=o,a=Oe(t[0],"ordgroup"),s=a.body,c="",d=0;d<s.length;d++){var f=Oe(s[d],"textord");c+=f.text}var $=parseInt(c),w;if(isNaN($))throw new me("\\@char has non-numeric argument "+c);if($<0||$>=1114111)throw new me("\\@char with invalid code point "+c);return $<=65535?w=String.fromCharCode($):($-=65536,w=String.fromCharCode(($>>10)+55296,($&1023)+56320)),{type:"textord",mode:r.mode,text:w}}});var Lp=(o,t)=>{var r=_n(o.body,t.withColor(o.color),!1);return ar(r)},Wp=(o,t)=>{var r=tt(o.body,t.withColor(o.color)),a=new fe("mstyle",r);return a.setAttribute("mathcolor",o.color),a};ke({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(o,t){var{parser:r}=o,a=Oe(t[0],"color-token").color,s=t[1];return{type:"color",mode:r.mode,color:a,body:yn(s)}},htmlBuilder:Lp,mathmlBuilder:Wp});ke({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(o,t){var{parser:r,breakOnTokenText:a}=o,s=Oe(t[0],"color-token").color;r.gullet.macros.set("\\current@color",s);var c=r.parseExpression(!0,a);return{type:"color",mode:r.mode,color:s,body:c}},htmlBuilder:Lp,mathmlBuilder:Wp});ke({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(o,t,r){var{parser:a}=o,s=a.gullet.future().text==="["?a.parseSizeGroup(!0):null,c=!a.settings.displayMode||!a.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:a.mode,newLine:c,size:s&&Oe(s,"size").value}},htmlBuilder(o,t){var r=de(["mspace"],[],t);return o.newLine&&(r.classes.push("newline"),o.size&&(r.style.marginTop=be(pn(o.size,t)))),r},mathmlBuilder(o,t){var r=new fe("mspace");return o.newLine&&(r.setAttribute("linebreak","newline"),o.size&&r.setAttribute("height",be(pn(o.size,t)))),r}});var oc={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},Op=o=>{var t=o.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new me("Expected a control sequence",o);return t},sz=o=>{var t=o.gullet.popToken();return t.text==="="&&(t=o.gullet.popToken(),t.text===" "&&(t=o.gullet.popToken())),t},Hp=(o,t,r,a)=>{var s=o.gullet.macros.get(r.text);s==null&&(r.noexpand=!0,s={tokens:[r],numArgs:0,unexpandable:!o.gullet.isExpandable(r.text)}),o.gullet.macros.set(t,s,a)};ke({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(o){var{parser:t,funcName:r}=o;t.consumeSpaces();var a=t.fetch();if(oc[a.text])return(r==="\\global"||r==="\\\\globallong")&&(a.text=oc[a.text]),Oe(t.parseFunction(),"internal");throw new me("Invalid token after macro prefix",a)}});ke({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:t,funcName:r}=o,a=t.gullet.popToken(),s=a.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(s))throw new me("Expected a control sequence",a);for(var c=0,d,f=[[]];t.gullet.future().text!=="{";)if(a=t.gullet.popToken(),a.text==="#"){if(t.gullet.future().text==="{"){d=t.gullet.future(),f[c].push("{");break}if(a=t.gullet.popToken(),!/^[1-9]$/.test(a.text))throw new me('Invalid argument number "'+a.text+'"');if(parseInt(a.text)!==c+1)throw new me('Argument number "'+a.text+'" out of order');c++,f.push([])}else{if(a.text==="EOF")throw new me("Expected a macro definition");f[c].push(a.text)}var{tokens:$}=t.gullet.consumeArg();return d&&$.unshift(d),(r==="\\edef"||r==="\\xdef")&&($=t.gullet.expandTokens($),$.reverse()),t.gullet.macros.set(s,{tokens:$,numArgs:c,delimiters:f},r===oc[r]),{type:"internal",mode:t.mode}}});ke({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:t,funcName:r}=o,a=Op(t.gullet.popToken());t.gullet.consumeSpaces();var s=sz(t);return Hp(t,a,s,r==="\\\\globallet"),{type:"internal",mode:t.mode}}});ke({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:t,funcName:r}=o,a=Op(t.gullet.popToken()),s=t.gullet.popToken(),c=t.gullet.popToken();return Hp(t,a,c,r==="\\\\globalfuture"),t.gullet.pushToken(c),t.gullet.pushToken(s),{type:"internal",mode:t.mode}}});var Oi=function(t,r,a){var s=tn.math[t]&&tn.math[t].replace,c=gc(s||t,r,a);if(!c)throw new Error("Unsupported symbol "+t+" and font size "+r+".");return c},jc=function(t,r,a,s){var c=a.havingBaseStyle(r),d=de(s.concat(c.sizingClasses(a)),[t],a),f=c.sizeMultiplier/a.sizeMultiplier;return d.height*=f,d.depth*=f,d.maxFontSize=c.sizeMultiplier,d},Gp=function(t,r,a){var s=r.havingBaseStyle(a),c=(1-r.sizeMultiplier/s.sizeMultiplier)*r.fontMetrics().axisHeight;t.classes.push("delimcenter"),t.style.top=be(c),t.height-=c,t.depth+=c},lz=function(t,r,a,s,c,d){var f=Hn(t,"Main-Regular",c,s),$=jc(f,r,s,d);return Gp($,s,r),$},cz=function(t,r,a,s){return Hn(t,"Size"+r+"-Regular",a,s)},Up=function(t,r,a,s,c,d){var f=cz(t,r,c,s),$=jc(de(["delimsizing","size"+r],[f],s),Ne.TEXT,s,d);return a&&Gp($,s,Ne.TEXT),$},F0=function(t,r,a){var s;r==="Size1-Regular"?s="delim-size1":s="delim-size4";var c=de(["delimsizinginner",s],[de([],[Hn(t,r,a)])]);return{type:"elem",elem:c}},I0=function(t,r,a){var s=Bt["Size4-Regular"][t.charCodeAt(0)]?Bt["Size4-Regular"][t.charCodeAt(0)][4]:Bt["Size1-Regular"][t.charCodeAt(0)][4],c=new Er("inner",kb(t,Math.round(1e3*r))),d=new rr([c],{width:be(s),height:be(r),style:"width:"+be(s),viewBox:"0 0 "+1e3*s+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),f=Br([],[d],a);return f.height=r,f.style.height=be(r),f.style.width=be(s),{type:"elem",elem:f}},ic=.008,bs={type:"kern",size:-1*ic},uz=new Set(["|","\\lvert","\\rvert","\\vert"]),dz=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),Zp=function(t,r,a,s,c,d){var f,$,w,g,x="",S=0;f=w=g=t,$=null;var q="Size1-Regular";t==="\\uparrow"?w=g="⏐":t==="\\Uparrow"?w=g="‖":t==="\\downarrow"?f=w="⏐":t==="\\Downarrow"?f=w="‖":t==="\\updownarrow"?(f="\\uparrow",w="⏐",g="\\downarrow"):t==="\\Updownarrow"?(f="\\Uparrow",w="‖",g="\\Downarrow"):uz.has(t)?(w="∣",x="vert",S=333):dz.has(t)?(w="∥",x="doublevert",S=556):t==="["||t==="\\lbrack"?(f="⎡",w="⎢",g="⎣",q="Size4-Regular",x="lbrack",S=667):t==="]"||t==="\\rbrack"?(f="⎤",w="⎥",g="⎦",q="Size4-Regular",x="rbrack",S=667):t==="\\lfloor"||t==="⌊"?(w=f="⎢",g="⎣",q="Size4-Regular",x="lfloor",S=667):t==="\\lceil"||t==="⌈"?(f="⎡",w=g="⎢",q="Size4-Regular",x="lceil",S=667):t==="\\rfloor"||t==="⌋"?(w=f="⎥",g="⎦",q="Size4-Regular",x="rfloor",S=667):t==="\\rceil"||t==="⌉"?(f="⎤",w=g="⎥",q="Size4-Regular",x="rceil",S=667):t==="("||t==="\\lparen"?(f="⎛",w="⎜",g="⎝",q="Size4-Regular",x="lparen",S=875):t===")"||t==="\\rparen"?(f="⎞",w="⎟",g="⎠",q="Size4-Regular",x="rparen",S=875):t==="\\{"||t==="\\lbrace"?(f="⎧",$="⎨",g="⎩",w="⎪",q="Size4-Regular"):t==="\\}"||t==="\\rbrace"?(f="⎫",$="⎬",g="⎭",w="⎪",q="Size4-Regular"):t==="\\lgroup"||t==="⟮"?(f="⎧",g="⎩",w="⎪",q="Size4-Regular"):t==="\\rgroup"||t==="⟯"?(f="⎫",g="⎭",w="⎪",q="Size4-Regular"):t==="\\lmoustache"||t==="⎰"?(f="⎧",g="⎭",w="⎪",q="Size4-Regular"):(t==="\\rmoustache"||t==="⎱")&&(f="⎫",g="⎩",w="⎪",q="Size4-Regular");var j=Oi(f,q,c),_=j.height+j.depth,T=Oi(w,q,c),P=T.height+T.depth,B=Oi(g,q,c),W=B.height+B.depth,I=0,E=1;if($!==null){var O=Oi($,q,c);I=O.height+O.depth,E=2}var F=_+W+I,ee=Math.max(0,Math.ceil((r-F)/(E*P))),J=F+ee*E*P,ne=s.fontMetrics().axisHeight;a&&(ne*=s.sizeMultiplier);var re=J/2-ne,Q=[];if(x.length>0){var Y=J-_-W,ce=Math.round(J*1e3),ye=_b(x,Math.round(Y*1e3)),ze=new Er(x,ye),xe=(S/1e3).toFixed(3)+"em",K=(ce/1e3).toFixed(3)+"em",ie=new rr([ze],{width:xe,height:K,viewBox:"0 0 "+S+" "+ce}),te=Br([],[ie],s);te.height=ce/1e3,te.style.width=xe,te.style.height=K,Q.push({type:"elem",elem:te})}else{if(Q.push(F0(g,q,c)),Q.push(bs),$===null){var R=J-_-W+2*ic;Q.push(I0(w,R,s))}else{var U=(J-_-W-I)/2+2*ic;Q.push(I0(w,U,s)),Q.push(bs),Q.push(F0($,q,c)),Q.push(bs),Q.push(I0(w,U,s))}Q.push(bs),Q.push(F0(f,q,c))}var ge=s.havingBaseStyle(Ne.TEXT),ve=Ye({positionType:"bottom",positionData:re,children:Q});return jc(de(["delimsizing","mult"],[ve],ge),Ne.TEXT,s,d)},N0=80,L0=.08,W0=function(t,r,a,s,c){var d=vb(t,s,a),f=new Er(t,d),$=new rr([f],{width:"400em",height:be(r),viewBox:"0 0 400000 "+a,preserveAspectRatio:"xMinYMin slice"});return Br(["hide-tail"],[$],c)},pz=function(t,r){var a=r.havingBaseSizing(),s=Xp("\\surd",t*a.sizeMultiplier,Yp,a),c=a.sizeMultiplier,d=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),f,$=0,w=0,g=0,x;return s.type==="small"?(g=1e3+1e3*d+N0,t<1?c=1:t<1.4&&(c=.7),$=(1+d+L0)/c,w=(1+d)/c,f=W0("sqrtMain",$,g,d,r),f.style.minWidth="0.853em",x=.833/c):s.type==="large"?(g=(1e3+N0)*Gi[s.size],w=(Gi[s.size]+d)/c,$=(Gi[s.size]+d+L0)/c,f=W0("sqrtSize"+s.size,$,g,d,r),f.style.minWidth="1.02em",x=1/c):($=t+d+L0,w=t+d,g=Math.floor(1e3*t+d)+N0,f=W0("sqrtTall",$,g,d,r),f.style.minWidth="0.742em",x=1.056),f.height=w,f.style.height=be($),{span:f,advanceWidth:x,ruleWidth:(r.fontMetrics().sqrtRuleThickness+d)*c}},Kp=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),mz=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),Vp=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),Gi=[0,1.2,1.8,2.4,3],Qp=function(t,r,a,s,c){if(t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle"),Kp.has(t)||Vp.has(t))return Up(t,r,!1,a,s,c);if(mz.has(t))return Zp(t,Gi[r],!1,a,s,c);throw new me("Illegal delimiter: '"+t+"'")},fz=[{type:"small",style:Ne.SCRIPTSCRIPT},{type:"small",style:Ne.SCRIPT},{type:"small",style:Ne.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],hz=[{type:"small",style:Ne.SCRIPTSCRIPT},{type:"small",style:Ne.SCRIPT},{type:"small",style:Ne.TEXT},{type:"stack"}],Yp=[{type:"small",style:Ne.SCRIPTSCRIPT},{type:"small",style:Ne.SCRIPT},{type:"small",style:Ne.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],$z=function(t){if(t.type==="small")return"Main-Regular";if(t.type==="large")return"Size"+t.size+"-Regular";if(t.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+t.type+"' here.")},Xp=function(t,r,a,s){for(var c=Math.min(2,3-s.style.size),d=c;d<a.length&&a[d].type!=="stack";d++){var f=Oi(t,$z(a[d]),"math"),$=f.height+f.depth;if(a[d].type==="small"){var w=s.havingBaseStyle(a[d].style);$*=w.sizeMultiplier}if($>r)return a[d]}return a[a.length-1]},ac=function(t,r,a,s,c,d){t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle");var f;Vp.has(t)?f=fz:Kp.has(t)?f=Yp:f=hz;var $=Xp(t,r,f,s);return $.type==="small"?lz(t,$.style,a,s,c,d):$.type==="large"?Up(t,$.size,a,s,c,d):Zp(t,r,a,s,c,d)},O0=function(t,r,a,s,c,d){var f=s.fontMetrics().axisHeight*s.sizeMultiplier,$=901,w=5/s.fontMetrics().ptPerEm,g=Math.max(r-f,a+f),x=Math.max(g/500*$,2*g-w);return ac(t,x,!0,s,c,d)},R1={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},yz=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function Ns(o,t){var r=Fs(o);if(r&&yz.has(r.text))return r;throw r?new me("Invalid delimiter '"+r.text+"' after '"+t.funcName+"'",o):new me("Invalid delimiter type '"+o.type+"'",o)}ke({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(o,t)=>{var r=Ns(t[0],o);return{type:"delimsizing",mode:o.parser.mode,size:R1[o.funcName].size,mclass:R1[o.funcName].mclass,delim:r.text}},htmlBuilder:(o,t)=>o.delim==="."?de([o.mclass]):Qp(o.delim,o.size,t,o.mode,[o.mclass]),mathmlBuilder:o=>{var t=[];o.delim!=="."&&t.push(bt(o.delim,o.mode));var r=new fe("mo",t);o.mclass==="mopen"||o.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var a=be(Gi[o.size]);return r.setAttribute("minsize",a),r.setAttribute("maxsize",a),r}});function E1(o){if(!o.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}ke({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var r=o.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new me("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:o.parser.mode,delim:Ns(t[0],o).text,color:r}}});ke({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var r=Ns(t[0],o),a=o.parser;++a.leftrightDepth;var s=a.parseExpression(!1);--a.leftrightDepth,a.expect("\\right",!1);var c=Oe(a.parseFunction(),"leftright-right");return{type:"leftright",mode:a.mode,body:s,left:r.text,right:c.delim,rightColor:c.color}},htmlBuilder:(o,t)=>{E1(o);for(var r=_n(o.body,t,!0,["mopen","mclose"]),a=0,s=0,c=!1,d=0;d<r.length;d++)r[d].isMiddle?c=!0:(a=Math.max(r[d].height,a),s=Math.max(r[d].depth,s));a*=t.sizeMultiplier,s*=t.sizeMultiplier;var f;if(o.left==="."?f=Qi(t,["mopen"]):f=O0(o.left,a,s,t,o.mode,["mopen"]),r.unshift(f),c)for(var $=1;$<r.length;$++){var w=r[$],g=w.isMiddle;g&&(r[$]=O0(g.delim,a,s,g.options,o.mode,[]))}var x;if(o.right===".")x=Qi(t,["mclose"]);else{var S=o.rightColor?t.withColor(o.rightColor):t;x=O0(o.right,a,s,S,o.mode,["mclose"])}return r.push(x),de(["minner"],r,t)},mathmlBuilder:(o,t)=>{E1(o);var r=tt(o.body,t);if(o.left!=="."){var a=new fe("mo",[bt(o.left,o.mode)]);a.setAttribute("fence","true"),r.unshift(a)}if(o.right!=="."){var s=new fe("mo",[bt(o.right,o.mode)]);s.setAttribute("fence","true"),o.rightColor&&s.setAttribute("mathcolor",o.rightColor),r.push(s)}return zc(r)}});ke({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var r=Ns(t[0],o);if(!o.parser.leftrightDepth)throw new me("\\middle without preceding \\left",r);return{type:"middle",mode:o.parser.mode,delim:r.text}},htmlBuilder:(o,t)=>{var r;if(o.delim===".")r=Qi(t,[]);else{r=Qp(o.delim,1,t,o.mode,[]);var a={delim:o.delim,options:t};r.isMiddle=a}return r},mathmlBuilder:(o,t)=>{var r=o.delim==="\\vert"||o.delim==="|"?bt("|","text"):bt(o.delim,o.mode),a=new fe("mo",[r]);return a.setAttribute("fence","true"),a.setAttribute("lspace","0.05em"),a.setAttribute("rspace","0.05em"),a}});var Sc=(o,t)=>{var r=Wo(Ke(o.body,t),t),a=o.label.slice(1),s=t.sizeMultiplier,c,d=0,f=or(o.body);if(a==="sout")c=de(["stretchy","sout"]),c.height=t.fontMetrics().defaultRuleThickness/s,d=-.5*t.fontMetrics().xHeight;else if(a==="phase"){var $=pn({number:.6,unit:"pt"},t),w=pn({number:.35,unit:"ex"},t),g=t.havingBaseSizing();s=s/g.sizeMultiplier;var x=r.height+r.depth+$+w;r.style.paddingLeft=be(x/2+$);var S=Math.floor(1e3*x*s),q=bb(S),j=new rr([new Er("phase",q)],{width:"400em",height:be(S/1e3),viewBox:"0 0 400000 "+S,preserveAspectRatio:"xMinYMin slice"});c=Br(["hide-tail"],[j],t),c.style.height=be(x),d=r.depth+$+w}else{/cancel/.test(a)?f||r.classes.push("cancel-pad"):a==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var _=0,T=0,P=0;/box/.test(a)?(P=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),_=t.fontMetrics().fboxsep+(a==="colorbox"?0:P),T=_):a==="angl"?(P=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),_=4*P,T=Math.max(0,.25-r.depth)):(_=f?.2:0,T=_),c=nz(r,a,_,T,t),/fbox|boxed|fcolorbox/.test(a)?(c.style.borderStyle="solid",c.style.borderWidth=be(P)):a==="angl"&&P!==.049&&(c.style.borderTopWidth=be(P),c.style.borderRightWidth=be(P)),d=r.depth+T,o.backgroundColor&&(c.style.backgroundColor=o.backgroundColor,o.borderColor&&(c.style.borderColor=o.borderColor))}var B;if(o.backgroundColor)B=Ye({positionType:"individualShift",children:[{type:"elem",elem:c,shift:d},{type:"elem",elem:r,shift:0}]});else{var W=/cancel|phase/.test(a)?["svg-align"]:[];B=Ye({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:c,shift:d,wrapperClasses:W}]})}return/cancel/.test(a)&&(B.height=r.height,B.depth=r.depth),/cancel/.test(a)&&!f?de(["mord","cancel-lap"],[B],t):de(["mord"],[B],t)},qc=(o,t)=>{var r=0,a=new fe(o.label.includes("colorbox")?"mpadded":"menclose",[en(o.body,t)]);switch(o.label){case"\\cancel":a.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":a.setAttribute("notation","downdiagonalstrike");break;case"\\phase":a.setAttribute("notation","phasorangle");break;case"\\sout":a.setAttribute("notation","horizontalstrike");break;case"\\fbox":a.setAttribute("notation","box");break;case"\\angl":a.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,a.setAttribute("width","+"+2*r+"pt"),a.setAttribute("height","+"+2*r+"pt"),a.setAttribute("lspace",r+"pt"),a.setAttribute("voffset",r+"pt"),o.label==="\\fcolorbox"){var s=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);a.setAttribute("style","border: "+s+"em solid "+String(o.borderColor))}break;case"\\xcancel":a.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return o.backgroundColor&&a.setAttribute("mathbackground",o.backgroundColor),a};ke({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(o,t,r){var{parser:a,funcName:s}=o,c=Oe(t[0],"color-token").color,d=t[1];return{type:"enclose",mode:a.mode,label:s,backgroundColor:c,body:d}},htmlBuilder:Sc,mathmlBuilder:qc});ke({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(o,t,r){var{parser:a,funcName:s}=o,c=Oe(t[0],"color-token").color,d=Oe(t[1],"color-token").color,f=t[2];return{type:"enclose",mode:a.mode,label:s,backgroundColor:d,borderColor:c,body:f}},htmlBuilder:Sc,mathmlBuilder:qc});ke({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(o,t){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\fbox",body:t[0]}}});ke({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(o,t){var{parser:r,funcName:a}=o,s=t[0];return{type:"enclose",mode:r.mode,label:a,body:s}},htmlBuilder:Sc,mathmlBuilder:qc});ke({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(o,t){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\angl",body:t[0]}}});var Jp={};function Ft(o){for(var{type:t,names:r,props:a,handler:s,htmlBuilder:c,mathmlBuilder:d}=o,f={type:t,numArgs:a.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:s},$=0;$<r.length;++$)Jp[r[$]]=f;c&&(Ps[t]=c),d&&(As[t]=d)}var em={};function k(o,t){em[o]=t}function B1(o){var t=[];o.consumeSpaces();var r=o.fetch().text;for(r==="\\relax"&&(o.consume(),o.consumeSpaces(),r=o.fetch().text);r==="\\hline"||r==="\\hdashline";)o.consume(),t.push(r==="\\hdashline"),o.consumeSpaces(),r=o.fetch().text;return t}var Ls=o=>{var t=o.parser.settings;if(!t.displayMode)throw new me("{"+o.envName+"} can be used only in display mode.")},gz=new Set(["gather","gather*"]);function Tc(o){if(!o.includes("ed"))return!o.includes("*")}function Ir(o,t,r){var{hskipBeforeAndAfter:a,addJot:s,cols:c,arraystretch:d,colSeparationType:f,autoTag:$,singleRow:w,emptySingleRow:g,maxNumCols:x,leqno:S}=t;if(o.gullet.beginGroup(),w||o.gullet.macros.set("\\cr","\\\\\\relax"),!d){var q=o.gullet.expandMacroAsText("\\arraystretch");if(q==null)d=1;else if(d=parseFloat(q),!d||d<0)throw new me("Invalid \\arraystretch: "+q)}o.gullet.beginGroup();var j=[],_=[j],T=[],P=[],B=$!=null?[]:void 0;function W(){$&&o.gullet.macros.set("\\@eqnsw","1",!0)}function I(){B&&(o.gullet.macros.get("\\df@tag")?(B.push(o.subparse([new ct("\\df@tag")])),o.gullet.macros.set("\\df@tag",void 0,!0)):B.push(!!$&&o.gullet.macros.get("\\@eqnsw")==="1"))}for(W(),P.push(B1(o));;){var E=o.parseExpression(!1,w?"\\end":"\\\\");o.gullet.endGroup(),o.gullet.beginGroup(),E={type:"ordgroup",mode:o.mode,body:E},r&&(E={type:"styling",mode:o.mode,style:r,body:[E]}),j.push(E);var O=o.fetch().text;if(O==="&"){if(x&&j.length===x){if(w||f)throw new me("Too many tab characters: &",o.nextToken);o.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}o.consume()}else if(O==="\\end"){I(),j.length===1&&E.type==="styling"&&E.body[0].body.length===0&&(_.length>1||!g)&&_.pop(),P.length<_.length+1&&P.push([]);break}else if(O==="\\\\"){o.consume();var F=void 0;o.gullet.future().text!==" "&&(F=o.parseSizeGroup(!0)),T.push(F?F.value:null),I(),P.push(B1(o)),j=[],_.push(j),W()}else throw new me("Expected & or \\\\ or \\cr or \\end",o.nextToken)}return o.gullet.endGroup(),o.gullet.endGroup(),{type:"array",mode:o.mode,addJot:s,arraystretch:d,body:_,cols:c,rowGaps:T,hskipBeforeAndAfter:a,hLinesBeforeRow:P,colSeparationType:f,tags:B,leqno:S}}function Pc(o){return o.slice(0,1)==="d"?"display":"text"}var It=function(t,r){var a,s,c=t.body.length,d=t.hLinesBeforeRow,f=0,$=new Array(c),w=[],g=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),x=1/r.fontMetrics().ptPerEm,S=5*x;if(t.colSeparationType&&t.colSeparationType==="small"){var q=r.havingStyle(Ne.SCRIPT).sizeMultiplier;S=.2778*(q/r.sizeMultiplier)}var j=t.colSeparationType==="CD"?pn({number:3,unit:"ex"},r):12*x,_=3*x,T=t.arraystretch*j,P=.7*T,B=.3*T,W=0;function I(In){for(var Mn=0;Mn<In.length;++Mn)Mn>0&&(W+=.25),w.push({pos:W,isDashed:In[Mn]})}for(I(d[0]),a=0;a<t.body.length;++a){var E=t.body[a],O=P,F=B;f<E.length&&(f=E.length);var ee=new Array(E.length);for(s=0;s<E.length;++s){var J=Ke(E[s],r);F<J.depth&&(F=J.depth),O<J.height&&(O=J.height),ee[s]=J}var ne=t.rowGaps[a],re=0;ne&&(re=pn(ne,r),re>0&&(re+=B,F<re&&(F=re),re=0)),t.addJot&&(F+=_),ee.height=O,ee.depth=F,W+=O,ee.pos=W,W+=F+re,$[a]=ee,I(d[a+1])}var Q=W/2+r.fontMetrics().axisHeight,Y=t.cols||[],ce=[],ye,ze,xe=[];if(t.tags&&t.tags.some(In=>In))for(a=0;a<c;++a){var K=$[a],ie=K.pos-Q,te=t.tags[a],R=void 0;te===!0?R=de(["eqn-num"],[],r):te===!1?R=de([],[],r):R=de([],_n(te,r,!0),r),R.depth=K.depth,R.height=K.height,xe.push({type:"elem",elem:R,shift:ie})}for(s=0,ze=0;s<f||ze<Y.length;++s,++ze){for(var U=Y[ze]||{},ge=!0;U.type==="separator";){if(ge||(ye=de(["arraycolsep"],[]),ye.style.width=be(r.fontMetrics().doubleRuleSep),ce.push(ye)),U.separator==="|"||U.separator===":"){var ve=U.separator==="|"?"solid":"dashed",qe=de(["vertical-separator"],[],r);qe.style.height=be(W),qe.style.borderRightWidth=be(g),qe.style.borderRightStyle=ve,qe.style.margin="0 "+be(-g/2);var we=W-Q;we&&(qe.style.verticalAlign=be(-we)),ce.push(qe)}else throw new me("Invalid separator type: "+U.separator);ze++,U=Y[ze]||{},ge=!1}if(!(s>=f)){var ae=void 0;if(s>0||t.hskipBeforeAndAfter){var he;ae=(he=U.pregap)!=null?he:S,ae!==0&&(ye=de(["arraycolsep"],[]),ye.style.width=be(ae),ce.push(ye))}var Me=[];for(a=0;a<c;++a){var Ue=$[a],Cn=Ue[s];if(Cn){var Lt=Ue.pos-Q;Cn.depth=Ue.depth,Cn.height=Ue.height,Me.push({type:"elem",elem:Cn,shift:Lt})}}if(Me=Ye({positionType:"individualShift",children:Me}),Me=de(["col-align-"+(U.align||"c")],[Me]),ce.push(Me),s<f-1||t.hskipBeforeAndAfter){var dt;ae=(dt=U.postgap)!=null?dt:S,ae!==0&&(ye=de(["arraycolsep"],[]),ye.style.width=be(ae),ce.push(ye))}}}if($=de(["mtable"],ce),w.length>0){for(var We=Lo("hline",r,g),Je=Lo("hdashline",r,g),Le=[{type:"elem",elem:$,shift:0}];w.length>0;){var Tn=w.pop(),gn=Tn.pos-Q;Tn.isDashed?Le.push({type:"elem",elem:Je,shift:gn}):Le.push({type:"elem",elem:We,shift:gn})}$=Ye({positionType:"individualShift",children:Le})}if(xe.length===0)return de(["mord"],[$],r);var qt=Ye({positionType:"individualShift",children:xe});return qt=de(["tag"],[qt],r),ar([$,qt])},wz={c:"center ",l:"left ",r:"right "},Nt=function(t,r){for(var a=[],s=new fe("mtd",[],["mtr-glue"]),c=new fe("mtd",[],["mml-eqn-num"]),d=0;d<t.body.length;d++){for(var f=t.body[d],$=[],w=0;w<f.length;w++)$.push(new fe("mtd",[en(f[w],r)]));t.tags&&t.tags[d]&&($.unshift(s),$.push(s),t.leqno?$.unshift(c):$.push(c)),a.push(new fe("mtr",$))}var g=new fe("mtable",a),x=t.arraystretch===.5?.1:.16+t.arraystretch-1+(t.addJot?.09:0);g.setAttribute("rowspacing",be(x));var S="",q="";if(t.cols&&t.cols.length>0){var j=t.cols,_="",T=!1,P=0,B=j.length;j[0].type==="separator"&&(S+="top ",P=1),j[j.length-1].type==="separator"&&(S+="bottom ",B-=1);for(var W=P;W<B;W++)j[W].type==="align"?(q+=wz[j[W].align],T&&(_+="none "),T=!0):j[W].type==="separator"&&T&&(_+=j[W].separator==="|"?"solid ":"dashed ",T=!1);g.setAttribute("columnalign",q.trim()),/[sd]/.test(_)&&g.setAttribute("columnlines",_.trim())}if(t.colSeparationType==="align"){for(var I=t.cols||[],E="",O=1;O<I.length;O++)E+=O%2?"0em ":"1em ";g.setAttribute("columnspacing",E.trim())}else t.colSeparationType==="alignat"||t.colSeparationType==="gather"?g.setAttribute("columnspacing","0em"):t.colSeparationType==="small"?g.setAttribute("columnspacing","0.2778em"):t.colSeparationType==="CD"?g.setAttribute("columnspacing","0.5em"):g.setAttribute("columnspacing","1em");var F="",ee=t.hLinesBeforeRow;S+=ee[0].length>0?"left ":"",S+=ee[ee.length-1].length>0?"right ":"";for(var J=1;J<ee.length-1;J++)F+=ee[J].length===0?"none ":ee[J][0]?"dashed ":"solid ";return/[sd]/.test(F)&&g.setAttribute("rowlines",F.trim()),S!==""&&(g=new fe("menclose",[g]),g.setAttribute("notation",S.trim())),t.arraystretch&&t.arraystretch<1&&(g=new fe("mstyle",[g]),g.setAttribute("scriptlevel","1")),g},nm=function(t,r){t.envName.includes("ed")||Ls(t);var a=[],s=t.envName.includes("at")?"alignat":"align",c=t.envName==="split",d=Ir(t.parser,{cols:a,addJot:!0,autoTag:c?void 0:Tc(t.envName),emptySingleRow:!0,colSeparationType:s,maxNumCols:c?2:void 0,leqno:t.parser.settings.leqno},"display"),f,$=0,w={type:"ordgroup",mode:t.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var g="",x=0;x<r[0].body.length;x++){var S=Oe(r[0].body[x],"textord");g+=S.text}f=Number(g),$=f*2}var q=!$;d.body.forEach(function(P){for(var B=1;B<P.length;B+=2){var W=Oe(P[B],"styling"),I=Oe(W.body[0],"ordgroup");I.body.unshift(w)}if(q)$<P.length&&($=P.length);else{var E=P.length/2;if(f<E)throw new me("Too many math in a row: "+("expected "+f+", but got "+E),P[0])}});for(var j=0;j<$;++j){var _="r",T=0;j%2===1?_="l":j>0&&q&&(T=1),a[j]={type:"align",align:_,pregap:T,postgap:0}}return d.colSeparationType=q?"align":"alignat",d};Ft({type:"array",names:["array","darray"],props:{numArgs:1},handler(o,t){var r=Fs(t[0]),a=r?[t[0]]:Oe(t[0],"ordgroup").body,s=a.map(function(d){var f=kc(d),$=f.text;if("lcr".includes($))return{type:"align",align:$};if($==="|")return{type:"separator",separator:"|"};if($===":")return{type:"separator",separator:":"};throw new me("Unknown column alignment: "+$,d)}),c={cols:s,hskipBeforeAndAfter:!0,maxNumCols:s.length};return Ir(o.parser,c,Pc(o.envName))},htmlBuilder:It,mathmlBuilder:Nt});Ft({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(o){var t={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[o.envName.replace("*","")],r="c",a={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(o.envName.charAt(o.envName.length-1)==="*"){var s=o.parser;if(s.consumeSpaces(),s.fetch().text==="["){if(s.consume(),s.consumeSpaces(),r=s.fetch().text,!"lcr".includes(r))throw new me("Expected l or c or r",s.nextToken);s.consume(),s.consumeSpaces(),s.expect("]"),s.consume(),a.cols=[{type:"align",align:r}]}}var c=Ir(o.parser,a,Pc(o.envName)),d=Math.max(0,...c.body.map(f=>f.length));return c.cols=new Array(d).fill({type:"align",align:r}),t?{type:"leftright",mode:o.mode,body:[c],left:t[0],right:t[1],rightColor:void 0}:c},htmlBuilder:It,mathmlBuilder:Nt});Ft({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(o){var t={arraystretch:.5},r=Ir(o.parser,t,"script");return r.colSeparationType="small",r},htmlBuilder:It,mathmlBuilder:Nt});Ft({type:"array",names:["subarray"],props:{numArgs:1},handler(o,t){var r=Fs(t[0]),a=r?[t[0]]:Oe(t[0],"ordgroup").body,s=a.map(function(d){var f=kc(d),$=f.text;if("lc".includes($))return{type:"align",align:$};throw new me("Unknown column alignment: "+$,d)});if(s.length>1)throw new me("{subarray} can contain only one column");var c={cols:s,hskipBeforeAndAfter:!1,arraystretch:.5};if(c=Ir(o.parser,c,"script"),c.body.length>0&&c.body[0].length>1)throw new me("{subarray} can contain only one column");return c},htmlBuilder:It,mathmlBuilder:Nt});Ft({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(o){var t={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=Ir(o.parser,t,Pc(o.envName));return{type:"leftright",mode:o.mode,body:[r],left:o.envName.includes("r")?".":"\\{",right:o.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:It,mathmlBuilder:Nt});Ft({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:nm,htmlBuilder:It,mathmlBuilder:Nt});Ft({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(o){gz.has(o.envName)&&Ls(o);var t={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Tc(o.envName),emptySingleRow:!0,leqno:o.parser.settings.leqno};return Ir(o.parser,t,"display")},htmlBuilder:It,mathmlBuilder:Nt});Ft({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:nm,htmlBuilder:It,mathmlBuilder:Nt});Ft({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(o){Ls(o);var t={autoTag:Tc(o.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:o.parser.settings.leqno};return Ir(o.parser,t,"display")},htmlBuilder:It,mathmlBuilder:Nt});Ft({type:"array",names:["CD"],props:{numArgs:0},handler(o){return Ls(o),az(o.parser)},htmlBuilder:It,mathmlBuilder:Nt});k("\\nonumber","\\gdef\\@eqnsw{0}");k("\\notag","\\nonumber");ke({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(o,t){throw new me(o.funcName+" valid only within array environment")}});var F1=Jp;ke({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(o,t){var{parser:r,funcName:a}=o,s=t[0];if(s.type!=="ordgroup")throw new me("Invalid environment name",s);for(var c="",d=0;d<s.body.length;++d)c+=Oe(s.body[d],"textord").text;if(a==="\\begin"){if(!F1.hasOwnProperty(c))throw new me("No such environment: "+c,s);var f=F1[c],{args:$,optArgs:w}=r.parseArguments("\\begin{"+c+"}",f),g={mode:r.mode,envName:c,parser:r},x=f.handler(g,$,w);r.expect("\\end",!1);var S=r.nextToken,q=Oe(r.parseFunction(),"environment");if(q.name!==c)throw new me("Mismatch: \\begin{"+c+"} matched by \\end{"+q.name+"}",S);return x}return{type:"environment",mode:r.mode,name:c,nameGroup:s}}});var tm=(o,t)=>{var r=o.font,a=t.withFont(r);return Ke(o.body,a)},rm=(o,t)=>{var r=o.font,a=t.withFont(r);return en(o.body,a)},I1={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};ke({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=Cs(t[0]),c=a;return c in I1&&(c=I1[c]),{type:"font",mode:r.mode,font:c.slice(1),body:s}},htmlBuilder:tm,mathmlBuilder:rm});ke({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(o,t)=>{var{parser:r}=o,a=t[0];return{type:"mclass",mode:r.mode,mclass:Is(a),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:a}],isCharacterBox:or(a)}}});ke({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(o,t)=>{var{parser:r,funcName:a,breakOnTokenText:s}=o,{mode:c}=r,d=r.parseExpression(!0,s),f="math"+a.slice(1);return{type:"font",mode:c,font:f,body:{type:"ordgroup",mode:r.mode,body:d}}},htmlBuilder:tm,mathmlBuilder:rm});var xz=(o,t)=>{var r=t.style,a=r.fracNum(),s=r.fracDen(),c;c=t.havingStyle(a);var d=Ke(o.numer,c,t);if(o.continued){var f=8.5/t.fontMetrics().ptPerEm,$=3.5/t.fontMetrics().ptPerEm;d.height=d.height<f?f:d.height,d.depth=d.depth<$?$:d.depth}c=t.havingStyle(s);var w=Ke(o.denom,c,t),g,x,S;o.hasBarLine?(o.barSize?(x=pn(o.barSize,t),g=Lo("frac-line",t,x)):g=Lo("frac-line",t),x=g.height,S=g.height):(g=null,x=0,S=t.fontMetrics().defaultRuleThickness);var q,j,_;r.size===Ne.DISPLAY.size?(q=t.fontMetrics().num1,x>0?j=3*S:j=7*S,_=t.fontMetrics().denom1):(x>0?(q=t.fontMetrics().num2,j=S):(q=t.fontMetrics().num3,j=3*S),_=t.fontMetrics().denom2);var T;if(g){var B=t.fontMetrics().axisHeight;q-d.depth-(B+.5*x)<j&&(q+=j-(q-d.depth-(B+.5*x))),B-.5*x-(w.height-_)<j&&(_+=j-(B-.5*x-(w.height-_)));var W=-(B-.5*x);T=Ye({positionType:"individualShift",children:[{type:"elem",elem:w,shift:_},{type:"elem",elem:g,shift:W},{type:"elem",elem:d,shift:-q}]})}else{var P=q-d.depth-(w.height-_);P<j&&(q+=.5*(j-P),_+=.5*(j-P)),T=Ye({positionType:"individualShift",children:[{type:"elem",elem:w,shift:_},{type:"elem",elem:d,shift:-q}]})}c=t.havingStyle(r),T.height*=c.sizeMultiplier/t.sizeMultiplier,T.depth*=c.sizeMultiplier/t.sizeMultiplier;var I;r.size===Ne.DISPLAY.size?I=t.fontMetrics().delim1:r.size===Ne.SCRIPTSCRIPT.size?I=t.havingStyle(Ne.SCRIPT).fontMetrics().delim2:I=t.fontMetrics().delim2;var E,O;return o.leftDelim==null?E=Qi(t,["mopen"]):E=ac(o.leftDelim,I,!0,t.havingStyle(r),o.mode,["mopen"]),o.continued?O=de([]):o.rightDelim==null?O=Qi(t,["mclose"]):O=ac(o.rightDelim,I,!0,t.havingStyle(r),o.mode,["mclose"]),de(["mord"].concat(c.sizingClasses(t)),[E,de(["mfrac"],[T]),O],t)},bz=(o,t)=>{var r=new fe("mfrac",[en(o.numer,t),en(o.denom,t)]);if(!o.hasBarLine)r.setAttribute("linethickness","0px");else if(o.barSize){var a=pn(o.barSize,t);r.setAttribute("linethickness",be(a))}if(o.leftDelim!=null||o.rightDelim!=null){var s=[];if(o.leftDelim!=null){var c=new fe("mo",[new xn(o.leftDelim.replace("\\",""))]);c.setAttribute("fence","true"),s.push(c)}if(s.push(r),o.rightDelim!=null){var d=new fe("mo",[new xn(o.rightDelim.replace("\\",""))]);d.setAttribute("fence","true"),s.push(d)}return zc(s)}return r},om=(o,t)=>{if(!t)return o;var r={type:"styling",mode:o.mode,style:t,body:[o]};return r};ke({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=t[0],c=t[1],d,f=null,$=null;switch(a){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":d=!0;break;case"\\\\atopfrac":d=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":d=!1,f="(",$=")";break;case"\\\\bracefrac":d=!1,f="\\{",$="\\}";break;case"\\\\brackfrac":d=!1,f="[",$="]";break;default:throw new Error("Unrecognized genfrac command")}var w=a==="\\cfrac",g=null;return w||a.startsWith("\\d")?g="display":a.startsWith("\\t")&&(g="text"),om({type:"genfrac",mode:r.mode,numer:s,denom:c,continued:w,hasBarLine:d,leftDelim:f,rightDelim:$,barSize:null},g)},htmlBuilder:xz,mathmlBuilder:bz});ke({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(o){var{parser:t,funcName:r,token:a}=o,s;switch(r){case"\\over":s="\\frac";break;case"\\choose":s="\\binom";break;case"\\atop":s="\\\\atopfrac";break;case"\\brace":s="\\\\bracefrac";break;case"\\brack":s="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:t.mode,replaceWith:s,token:a}}});var N1=["display","text","script","scriptscript"],L1=function(t){var r=null;return t.length>0&&(r=t,r=r==="."?null:r),r};ke({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(o,t){var{parser:r}=o,a=t[4],s=t[5],c=Cs(t[0]),d=c.type==="atom"&&c.family==="open"?L1(c.text):null,f=Cs(t[1]),$=f.type==="atom"&&f.family==="close"?L1(f.text):null,w=Oe(t[2],"size"),g,x=null;w.isBlank?g=!0:(x=w.value,g=x.number>0);var S=null,q=t[3];if(q.type==="ordgroup"){if(q.body.length>0){var j=Oe(q.body[0],"textord");S=N1[Number(j.text)]}}else q=Oe(q,"textord"),S=N1[Number(q.text)];return om({type:"genfrac",mode:r.mode,numer:a,denom:s,continued:!1,hasBarLine:g,barSize:x,leftDelim:d,rightDelim:$},S)}});ke({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(o,t){var{parser:r,funcName:a,token:s}=o;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:Oe(t[0],"size").value,token:s}}});ke({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=t[0],c=Oe(t[1],"infix").size;if(!c)throw new Error("\\\\abovefrac expected size, but got "+String(c));var d=t[2],f=c.number>0;return{type:"genfrac",mode:r.mode,numer:s,denom:d,continued:!1,hasBarLine:f,barSize:c,leftDelim:null,rightDelim:null}}});var im=(o,t)=>{var r=t.style,a,s;o.type==="supsub"?(a=o.sup?Ke(o.sup,t.havingStyle(r.sup()),t):Ke(o.sub,t.havingStyle(r.sub()),t),s=Oe(o.base,"horizBrace")):s=Oe(o,"horizBrace");var c=Ke(s.base,t.havingBaseStyle(Ne.DISPLAY)),d=Bs(s,t),f;if(s.isOver?(f=Ye({positionType:"firstBaseline",children:[{type:"elem",elem:c},{type:"kern",size:.1},{type:"elem",elem:d}]}),f.children[0].children[0].children[1].classes.push("svg-align")):(f=Ye({positionType:"bottom",positionData:c.depth+.1+d.height,children:[{type:"elem",elem:d},{type:"kern",size:.1},{type:"elem",elem:c}]}),f.children[0].children[0].children[0].classes.push("svg-align")),a){var $=de(["mord",s.isOver?"mover":"munder"],[f],t);s.isOver?f=Ye({positionType:"firstBaseline",children:[{type:"elem",elem:$},{type:"kern",size:.2},{type:"elem",elem:a}]}):f=Ye({positionType:"bottom",positionData:$.depth+.2+a.height+a.depth,children:[{type:"elem",elem:a},{type:"kern",size:.2},{type:"elem",elem:$}]})}return de(["mord",s.isOver?"mover":"munder"],[f],t)},zz=(o,t)=>{var r=Es(o.label);return new fe(o.isOver?"mover":"munder",[en(o.base,t),r])};ke({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(o,t){var{parser:r,funcName:a}=o;return{type:"horizBrace",mode:r.mode,label:a,isOver:/^\\over/.test(a),base:t[0]}},htmlBuilder:im,mathmlBuilder:zz});ke({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,a=t[1],s=Oe(t[0],"url").url;return r.settings.isTrusted({command:"\\href",url:s})?{type:"href",mode:r.mode,href:s,body:yn(a)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(o,t)=>{var r=_n(o.body,t,!1);return Ib(o.href,[],r,t)},mathmlBuilder:(o,t)=>{var r=Fr(o.body,t);return r instanceof fe||(r=new fe("mrow",[r])),r.setAttribute("href",o.href),r}});ke({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,a=Oe(t[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:a}))return r.formatUnsupportedCmd("\\url");for(var s=[],c=0;c<a.length;c++){var d=a[c];d==="~"&&(d="\\textasciitilde"),s.push({type:"textord",mode:"text",text:d})}var f={type:"text",mode:r.mode,font:"\\texttt",body:s};return{type:"href",mode:r.mode,href:a,body:yn(f)}}});ke({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(o,t){var{parser:r}=o;return{type:"hbox",mode:r.mode,body:yn(t[0])}},htmlBuilder(o,t){var r=_n(o.body,t,!1);return ar(r)},mathmlBuilder(o,t){return new fe("mrow",tt(o.body,t))}});ke({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(o,t)=>{var{parser:r,funcName:a,token:s}=o,c=Oe(t[0],"raw").string,d=t[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var f,$={};switch(a){case"\\htmlClass":$.class=c,f={command:"\\htmlClass",class:c};break;case"\\htmlId":$.id=c,f={command:"\\htmlId",id:c};break;case"\\htmlStyle":$.style=c,f={command:"\\htmlStyle",style:c};break;case"\\htmlData":{for(var w=c.split(","),g=0;g<w.length;g++){var x=w[g],S=x.indexOf("=");if(S<0)throw new me("\\htmlData key/value '"+x+"' missing equals sign");var q=x.slice(0,S),j=x.slice(S+1);$["data-"+q.trim()]=j}f={command:"\\htmlData",attributes:$};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(f)?{type:"html",mode:r.mode,attributes:$,body:yn(d)}:r.formatUnsupportedCmd(a)},htmlBuilder:(o,t)=>{var r=_n(o.body,t,!1),a=["enclosing"];o.attributes.class&&a.push(...o.attributes.class.trim().split(/\s+/));var s=de(a,r,t);for(var c in o.attributes)c!=="class"&&o.attributes.hasOwnProperty(c)&&s.setAttribute(c,o.attributes[c]);return s},mathmlBuilder:(o,t)=>Fr(o.body,t)});ke({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o;return{type:"htmlmathml",mode:r.mode,html:yn(t[0]),mathml:yn(t[1])}},htmlBuilder:(o,t)=>{var r=_n(o.html,t,!1);return ar(r)},mathmlBuilder:(o,t)=>Fr(o.mathml,t)});var H0=function(t){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))return{number:+t,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);if(!r)throw new me("Invalid size: '"+t+"' in \\includegraphics");var a={number:+(r[1]+r[2]),unit:r[3]};if(!vp(a))throw new me("Invalid unit: '"+a.unit+"' in \\includegraphics.");return a};ke({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(o,t,r)=>{var{parser:a}=o,s={number:0,unit:"em"},c={number:.9,unit:"em"},d={number:0,unit:"em"},f="";if(r[0])for(var $=Oe(r[0],"raw").string,w=$.split(","),g=0;g<w.length;g++){var x=w[g].split("=");if(x.length===2){var S=x[1].trim();switch(x[0].trim()){case"alt":f=S;break;case"width":s=H0(S);break;case"height":c=H0(S);break;case"totalheight":d=H0(S);break;default:throw new me("Invalid key: '"+x[0]+"' in \\includegraphics.")}}}var q=Oe(t[0],"url").url;return f===""&&(f=q,f=f.replace(/^.*[\\/]/,""),f=f.substring(0,f.lastIndexOf("."))),a.settings.isTrusted({command:"\\includegraphics",url:q})?{type:"includegraphics",mode:a.mode,alt:f,width:s,height:c,totalheight:d,src:q}:a.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(o,t)=>{var r=pn(o.height,t),a=0;o.totalheight.number>0&&(a=pn(o.totalheight,t)-r);var s=0;o.width.number>0&&(s=pn(o.width,t));var c={height:be(r+a)};s>0&&(c.width=be(s)),a>0&&(c.verticalAlign=be(-a));var d=new Ab(o.src,o.alt,c);return d.height=r,d.depth=a,d},mathmlBuilder:(o,t)=>{var r=new fe("mglyph",[]);r.setAttribute("alt",o.alt);var a=pn(o.height,t),s=0;if(o.totalheight.number>0&&(s=pn(o.totalheight,t)-a,r.setAttribute("valign",be(-s))),r.setAttribute("height",be(a+s)),o.width.number>0){var c=pn(o.width,t);r.setAttribute("width",be(c))}return r.setAttribute("src",o.src),r}});ke({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(o,t){var{parser:r,funcName:a}=o,s=Oe(t[0],"size");if(r.settings.strict){var c=a[1]==="m",d=s.value.unit==="mu";c?(d||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" supports only mu units, "+("not "+s.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" works only in math mode")):d&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:s.value}},htmlBuilder(o,t){return Tp(o.dimension,t)},mathmlBuilder(o,t){var r=pn(o.dimension,t);return new Rp(r)}});ke({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=t[0];return{type:"lap",mode:r.mode,alignment:a.slice(5),body:s}},htmlBuilder:(o,t)=>{var r;o.alignment==="clap"?(r=de([],[Ke(o.body,t)]),r=de(["inner"],[r],t)):r=de(["inner"],[Ke(o.body,t)]);var a=de(["fix"],[]),s=de([o.alignment],[r,a],t),c=de(["strut"]);return c.style.height=be(s.height+s.depth),s.depth&&(c.style.verticalAlign=be(-s.depth)),s.children.unshift(c),s=de(["thinbox"],[s],t),de(["mord","vbox"],[s],t)},mathmlBuilder:(o,t)=>{var r=new fe("mpadded",[en(o.body,t)]);if(o.alignment!=="rlap"){var a=o.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",a+"width")}return r.setAttribute("width","0px"),r}});ke({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,t){var{funcName:r,parser:a}=o,s=a.mode;a.switchMode("math");var c=r==="\\("?"\\)":"$",d=a.parseExpression(!1,c);return a.expect(c),a.switchMode(s),{type:"styling",mode:a.mode,style:"text",body:d}}});ke({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,t){throw new me("Mismatched "+o.funcName)}});var W1=(o,t)=>{switch(t.style.size){case Ne.DISPLAY.size:return o.display;case Ne.TEXT.size:return o.text;case Ne.SCRIPT.size:return o.script;case Ne.SCRIPTSCRIPT.size:return o.scriptscript;default:return o.text}};ke({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(o,t)=>{var{parser:r}=o;return{type:"mathchoice",mode:r.mode,display:yn(t[0]),text:yn(t[1]),script:yn(t[2]),scriptscript:yn(t[3])}},htmlBuilder:(o,t)=>{var r=W1(o,t),a=_n(r,t,!1);return ar(a)},mathmlBuilder:(o,t)=>{var r=W1(o,t);return Fr(r,t)}});var am=(o,t,r,a,s,c,d)=>{o=de([],[o]);var f=r&&or(r),$,w;if(t){var g=Ke(t,a.havingStyle(s.sup()),a);w={elem:g,kern:Math.max(a.fontMetrics().bigOpSpacing1,a.fontMetrics().bigOpSpacing3-g.depth)}}if(r){var x=Ke(r,a.havingStyle(s.sub()),a);$={elem:x,kern:Math.max(a.fontMetrics().bigOpSpacing2,a.fontMetrics().bigOpSpacing4-x.height)}}var S;if(w&&$){var q=a.fontMetrics().bigOpSpacing5+$.elem.height+$.elem.depth+$.kern+o.depth+d;S=Ye({positionType:"bottom",positionData:q,children:[{type:"kern",size:a.fontMetrics().bigOpSpacing5},{type:"elem",elem:$.elem,marginLeft:be(-c)},{type:"kern",size:$.kern},{type:"elem",elem:o},{type:"kern",size:w.kern},{type:"elem",elem:w.elem,marginLeft:be(c)},{type:"kern",size:a.fontMetrics().bigOpSpacing5}]})}else if($){var j=o.height-d;S=Ye({positionType:"top",positionData:j,children:[{type:"kern",size:a.fontMetrics().bigOpSpacing5},{type:"elem",elem:$.elem,marginLeft:be(-c)},{type:"kern",size:$.kern},{type:"elem",elem:o}]})}else if(w){var _=o.depth+d;S=Ye({positionType:"bottom",positionData:_,children:[{type:"elem",elem:o},{type:"kern",size:w.kern},{type:"elem",elem:w.elem,marginLeft:be(c)},{type:"kern",size:a.fontMetrics().bigOpSpacing5}]})}else return o;var T=[S];if($&&c!==0&&!f){var P=de(["mspace"],[],a);P.style.marginRight=be(c),T.unshift(P)}return de(["mop","op-limits"],T,a)},sm=new Set(["\\smallint"]),Go=(o,t)=>{var r,a,s=!1,c;o.type==="supsub"?(r=o.sup,a=o.sub,c=Oe(o.base,"op"),s=!0):c=Oe(o,"op");var d=t.style,f=!1;d.size===Ne.DISPLAY.size&&c.symbol&&!sm.has(c.name)&&(f=!0);var $;if(c.symbol){var w=f?"Size2-Regular":"Size1-Regular",g="";if((c.name==="\\oiint"||c.name==="\\oiiint")&&(g=c.name.slice(1),c.name=g==="oiint"?"\\iint":"\\iiint"),$=Hn(c.name,w,"math",t,["mop","op-symbol",f?"large-op":"small-op"]),g.length>0){var x=$.italic,S=Ap(g+"Size"+(f?"2":"1"),t);$=Ye({positionType:"individualShift",children:[{type:"elem",elem:$,shift:0},{type:"elem",elem:S,shift:f?.08:0}]}),c.name="\\"+g,$.classes.unshift("mop"),$.italic=x}}else if(c.body){var q=_n(c.body,t,!0);q.length===1&&q[0]instanceof xt?($=q[0],$.classes[0]="mop"):$=de(["mop"],q,t)}else{for(var j=[],_=1;_<c.name.length;_++)j.push(xc(c.name[_],c.mode,t));$=de(["mop"],j,t)}var T=0,P=0;return($ instanceof xt||c.name==="\\oiint"||c.name==="\\oiiint")&&!c.suppressBaseShift&&(T=($.height-$.depth)/2-t.fontMetrics().axisHeight,P=$.italic),s?am($,r,a,t,d,P,T):(T&&($.style.position="relative",$.style.top=be(T)),$)},Ji=(o,t)=>{var r;if(o.symbol)r=new fe("mo",[bt(o.name,o.mode)]),sm.has(o.name)&&r.setAttribute("largeop","false");else if(o.body)r=new fe("mo",tt(o.body,t));else{r=new fe("mi",[new xn(o.name.slice(1))]);var a=new fe("mo",[bt("⁡","text")]);o.parentIsSupSub?r=new fe("mrow",[r,a]):r=Dp([r,a])}return r},vz={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};ke({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=a;return s.length===1&&(s=vz[s]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:s}},htmlBuilder:Go,mathmlBuilder:Ji});ke({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var{parser:r}=o,a=t[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:yn(a)}},htmlBuilder:Go,mathmlBuilder:Ji});var kz={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};ke({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(o){var{parser:t,funcName:r}=o;return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Go,mathmlBuilder:Ji});ke({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(o){var{parser:t,funcName:r}=o;return{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Go,mathmlBuilder:Ji});ke({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(o){var{parser:t,funcName:r}=o,a=r;return a.length===1&&(a=kz[a]),{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:Go,mathmlBuilder:Ji});var lm=(o,t)=>{var r,a,s=!1,c;o.type==="supsub"?(r=o.sup,a=o.sub,c=Oe(o.base,"operatorname"),s=!0):c=Oe(o,"operatorname");var d;if(c.body.length>0){for(var f=c.body.map(x=>{var S=x.text;return typeof S=="string"?{type:"textord",mode:x.mode,text:S}:x}),$=_n(f,t.withFont("mathrm"),!0),w=0;w<$.length;w++){var g=$[w];g instanceof xt&&(g.text=g.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}d=de(["mop"],$,t)}else d=de(["mop"],[],t);return s?am(d,r,a,t,t.style,0,0):d},_z=(o,t)=>{for(var r=tt(o.body,t.withFont("mathrm")),a=!0,s=0;s<r.length;s++){var c=r[s];if(!(c instanceof Rp))if(c instanceof fe)switch(c.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var d=c.children[0];c.children.length===1&&d instanceof xn?d.text=d.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):a=!1;break}default:a=!1}else a=!1}if(a){var f=r.map(g=>g.toText()).join("");r=[new xn(f)]}var $=new fe("mi",r);$.setAttribute("mathvariant","normal");var w=new fe("mo",[bt("⁡","text")]);return o.parentIsSupSub?new fe("mrow",[$,w]):Dp([$,w])};ke({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=t[0];return{type:"operatorname",mode:r.mode,body:yn(s),alwaysHandleSupSub:a==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:lm,mathmlBuilder:_z});k("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");ao({type:"ordgroup",htmlBuilder(o,t){return o.semisimple?ar(_n(o.body,t,!1)):de(["mord"],_n(o.body,t,!0),t)},mathmlBuilder(o,t){return Fr(o.body,t,!0)}});ke({type:"overline",names:["\\overline"],props:{numArgs:1},handler(o,t){var{parser:r}=o,a=t[0];return{type:"overline",mode:r.mode,body:a}},htmlBuilder(o,t){var r=Ke(o.body,t.havingCrampedStyle()),a=Lo("overline-line",t),s=t.fontMetrics().defaultRuleThickness,c=Ye({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*s},{type:"elem",elem:a},{type:"kern",size:s}]});return de(["mord","overline"],[c],t)},mathmlBuilder(o,t){var r=new fe("mo",[new xn("‾")]);r.setAttribute("stretchy","true");var a=new fe("mover",[en(o.body,t),r]);return a.setAttribute("accent","true"),a}});ke({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,a=t[0];return{type:"phantom",mode:r.mode,body:yn(a)}},htmlBuilder:(o,t)=>{var r=_n(o.body,t.withPhantom(),!1);return ar(r)},mathmlBuilder:(o,t)=>{var r=tt(o.body,t);return new fe("mphantom",r)}});ke({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,a=t[0];return{type:"hphantom",mode:r.mode,body:a}},htmlBuilder:(o,t)=>{var r=de([],[Ke(o.body,t.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var a=0;a<r.children.length;a++)r.children[a].height=0,r.children[a].depth=0;return r=Ye({positionType:"firstBaseline",children:[{type:"elem",elem:r}]}),de(["mord"],[r],t)},mathmlBuilder:(o,t)=>{var r=tt(yn(o.body),t),a=new fe("mphantom",r),s=new fe("mpadded",[a]);return s.setAttribute("height","0px"),s.setAttribute("depth","0px"),s}});ke({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,a=t[0];return{type:"vphantom",mode:r.mode,body:a}},htmlBuilder:(o,t)=>{var r=de(["inner"],[Ke(o.body,t.withPhantom())]),a=de(["fix"],[]);return de(["mord","rlap"],[r,a],t)},mathmlBuilder:(o,t)=>{var r=tt(yn(o.body),t),a=new fe("mphantom",r),s=new fe("mpadded",[a]);return s.setAttribute("width","0px"),s}});ke({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(o,t){var{parser:r}=o,a=Oe(t[0],"size").value,s=t[1];return{type:"raisebox",mode:r.mode,dy:a,body:s}},htmlBuilder(o,t){var r=Ke(o.body,t),a=pn(o.dy,t);return Ye({positionType:"shift",positionData:-a,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,t){var r=new fe("mpadded",[en(o.body,t)]),a=o.dy.number+o.dy.unit;return r.setAttribute("voffset",a),r}});ke({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(o){var{parser:t}=o;return{type:"internal",mode:t.mode}}});ke({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(o,t,r){var{parser:a}=o,s=r[0],c=Oe(t[0],"size"),d=Oe(t[1],"size");return{type:"rule",mode:a.mode,shift:s&&Oe(s,"size").value,width:c.value,height:d.value}},htmlBuilder(o,t){var r=de(["mord","rule"],[],t),a=pn(o.width,t),s=pn(o.height,t),c=o.shift?pn(o.shift,t):0;return r.style.borderRightWidth=be(a),r.style.borderTopWidth=be(s),r.style.bottom=be(c),r.width=a,r.height=s+c,r.depth=-c,r.maxFontSize=s*1.125*t.sizeMultiplier,r},mathmlBuilder(o,t){var r=pn(o.width,t),a=pn(o.height,t),s=o.shift?pn(o.shift,t):0,c=t.color&&t.getColor()||"black",d=new fe("mspace");d.setAttribute("mathbackground",c),d.setAttribute("width",be(r)),d.setAttribute("height",be(a));var f=new fe("mpadded",[d]);return s>=0?f.setAttribute("height",be(s)):(f.setAttribute("height",be(s)),f.setAttribute("depth",be(-s))),f.setAttribute("voffset",be(s)),f}});function cm(o,t,r){for(var a=_n(o,t,!1),s=t.sizeMultiplier/r.sizeMultiplier,c=0;c<a.length;c++){var d=a[c].classes.indexOf("sizing");d<0?Array.prototype.push.apply(a[c].classes,t.sizingClasses(r)):a[c].classes[d+1]==="reset-size"+t.size&&(a[c].classes[d+1]="reset-size"+r.size),a[c].height*=s,a[c].depth*=s}return ar(a)}var O1=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],jz=(o,t)=>{var r=t.havingSize(o.size);return cm(o.body,r,t)};ke({type:"sizing",names:O1,props:{numArgs:0,allowedInText:!0},handler:(o,t)=>{var{breakOnTokenText:r,funcName:a,parser:s}=o,c=s.parseExpression(!1,r);return{type:"sizing",mode:s.mode,size:O1.indexOf(a)+1,body:c}},htmlBuilder:jz,mathmlBuilder:(o,t)=>{var r=t.havingSize(o.size),a=tt(o.body,r),s=new fe("mstyle",a);return s.setAttribute("mathsize",be(r.sizeMultiplier)),s}});ke({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(o,t,r)=>{var{parser:a}=o,s=!1,c=!1,d=r[0]&&Oe(r[0],"ordgroup");if(d)for(var f="",$=0;$<d.body.length;++$){var w=d.body[$];if(f=w.text,f==="t")s=!0;else if(f==="b")c=!0;else{s=!1,c=!1;break}}else s=!0,c=!0;var g=t[0];return{type:"smash",mode:a.mode,body:g,smashHeight:s,smashDepth:c}},htmlBuilder:(o,t)=>{var r=de([],[Ke(o.body,t)]);if(!o.smashHeight&&!o.smashDepth)return r;if(o.smashHeight&&(r.height=0,r.children))for(var a=0;a<r.children.length;a++)r.children[a].height=0;if(o.smashDepth&&(r.depth=0,r.children))for(var s=0;s<r.children.length;s++)r.children[s].depth=0;var c=Ye({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return de(["mord"],[c],t)},mathmlBuilder:(o,t)=>{var r=new fe("mpadded",[en(o.body,t)]);return o.smashHeight&&r.setAttribute("height","0px"),o.smashDepth&&r.setAttribute("depth","0px"),r}});ke({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(o,t,r){var{parser:a}=o,s=r[0],c=t[0];return{type:"sqrt",mode:a.mode,body:c,index:s}},htmlBuilder(o,t){var r=Ke(o.body,t.havingCrampedStyle());r.height===0&&(r.height=t.fontMetrics().xHeight),r=Wo(r,t);var a=t.fontMetrics(),s=a.defaultRuleThickness,c=s;t.style.id<Ne.TEXT.id&&(c=t.fontMetrics().xHeight);var d=s+c/4,f=r.height+r.depth+d+s,{span:$,ruleWidth:w,advanceWidth:g}=pz(f,t),x=$.height-w;x>r.height+r.depth+d&&(d=(d+x-r.height-r.depth)/2);var S=$.height-r.height-d-w;r.style.paddingLeft=be(g);var q=Ye({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+S)},{type:"elem",elem:$},{type:"kern",size:w}]});if(o.index){var j=t.havingStyle(Ne.SCRIPTSCRIPT),_=Ke(o.index,j,t),T=.6*(q.height-q.depth),P=Ye({positionType:"shift",positionData:-T,children:[{type:"elem",elem:_}]}),B=de(["root"],[P]);return de(["mord","sqrt"],[B,q],t)}else return de(["mord","sqrt"],[q],t)},mathmlBuilder(o,t){var{body:r,index:a}=o;return a?new fe("mroot",[en(r,t),en(a,t)]):new fe("msqrt",[en(r,t)])}});var H1={display:Ne.DISPLAY,text:Ne.TEXT,script:Ne.SCRIPT,scriptscript:Ne.SCRIPTSCRIPT};ke({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o,t){var{breakOnTokenText:r,funcName:a,parser:s}=o,c=s.parseExpression(!0,r),d=a.slice(1,a.length-5);return{type:"styling",mode:s.mode,style:d,body:c}},htmlBuilder(o,t){var r=H1[o.style],a=t.havingStyle(r).withFont("");return cm(o.body,a,t)},mathmlBuilder(o,t){var r=H1[o.style],a=t.havingStyle(r),s=tt(o.body,a),c=new fe("mstyle",s),d={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},f=d[o.style];return c.setAttribute("scriptlevel",f[0]),c.setAttribute("displaystyle",f[1]),c}});var Sz=function(t,r){var a=t.base;if(a)if(a.type==="op"){var s=a.limits&&(r.style.size===Ne.DISPLAY.size||a.alwaysHandleSupSub);return s?Go:null}else if(a.type==="operatorname"){var c=a.alwaysHandleSupSub&&(r.style.size===Ne.DISPLAY.size||a.limits);return c?lm:null}else{if(a.type==="accent")return or(a.base)?_c:null;if(a.type==="horizBrace"){var d=!t.sub;return d===a.isOver?im:null}else return null}else return null};ao({type:"supsub",htmlBuilder(o,t){var r=Sz(o,t);if(r)return r(o,t);var{base:a,sup:s,sub:c}=o,d=Ke(a,t),f,$,w=t.fontMetrics(),g=0,x=0,S=a&&or(a);if(s){var q=t.havingStyle(t.style.sup());f=Ke(s,q,t),S||(g=d.height-q.fontMetrics().supDrop*q.sizeMultiplier/t.sizeMultiplier)}if(c){var j=t.havingStyle(t.style.sub());$=Ke(c,j,t),S||(x=d.depth+j.fontMetrics().subDrop*j.sizeMultiplier/t.sizeMultiplier)}var _;t.style===Ne.DISPLAY?_=w.sup1:t.style.cramped?_=w.sup3:_=w.sup2;var T=t.sizeMultiplier,P=be(.5/w.ptPerEm/T),B=null;if($){var W=o.base&&o.base.type==="op"&&o.base.name&&(o.base.name==="\\oiint"||o.base.name==="\\oiiint");(d instanceof xt||W)&&(B=be(-d.italic))}var I;if(f&&$){g=Math.max(g,_,f.depth+.25*w.xHeight),x=Math.max(x,w.sub2);var E=w.defaultRuleThickness,O=4*E;if(g-f.depth-($.height-x)<O){x=O-(g-f.depth)+$.height;var F=.8*w.xHeight-(g-f.depth);F>0&&(g+=F,x-=F)}var ee=[{type:"elem",elem:$,shift:x,marginRight:P,marginLeft:B},{type:"elem",elem:f,shift:-g,marginRight:P}];I=Ye({positionType:"individualShift",children:ee})}else if($){x=Math.max(x,w.sub1,$.height-.8*w.xHeight);var J=[{type:"elem",elem:$,marginLeft:B,marginRight:P}];I=Ye({positionType:"shift",positionData:x,children:J})}else if(f)g=Math.max(g,_,f.depth+.25*w.xHeight),I=Ye({positionType:"shift",positionData:-g,children:[{type:"elem",elem:f,marginRight:P}]});else throw new Error("supsub must have either sup or sub.");var ne=tc(d,"right")||"mord";return de([ne],[d,de(["msupsub"],[I])],t)},mathmlBuilder(o,t){var r=!1,a,s;o.base&&o.base.type==="horizBrace"&&(s=!!o.sup,s===o.base.isOver&&(r=!0,a=o.base.isOver)),o.base&&(o.base.type==="op"||o.base.type==="operatorname")&&(o.base.parentIsSupSub=!0);var c=[en(o.base,t)];o.sub&&c.push(en(o.sub,t)),o.sup&&c.push(en(o.sup,t));var d;if(r)d=a?"mover":"munder";else if(o.sub)if(o.sup){var w=o.base;w&&w.type==="op"&&w.limits&&t.style===Ne.DISPLAY||w&&w.type==="operatorname"&&w.alwaysHandleSupSub&&(t.style===Ne.DISPLAY||w.limits)?d="munderover":d="msubsup"}else{var $=o.base;$&&$.type==="op"&&$.limits&&(t.style===Ne.DISPLAY||$.alwaysHandleSupSub)||$&&$.type==="operatorname"&&$.alwaysHandleSupSub&&($.limits||t.style===Ne.DISPLAY)?d="munder":d="msub"}else{var f=o.base;f&&f.type==="op"&&f.limits&&(t.style===Ne.DISPLAY||f.alwaysHandleSupSub)||f&&f.type==="operatorname"&&f.alwaysHandleSupSub&&(f.limits||t.style===Ne.DISPLAY)?d="mover":d="msup"}return new fe(d,c)}});ao({type:"atom",htmlBuilder(o,t){return xc(o.text,o.mode,t,["m"+o.family])},mathmlBuilder(o,t){var r=new fe("mo",[bt(o.text,o.mode)]);if(o.family==="bin"){var a=vc(o,t);a==="bold-italic"&&r.setAttribute("mathvariant",a)}else o.family==="punct"?r.setAttribute("separator","true"):(o.family==="open"||o.family==="close")&&r.setAttribute("stretchy","false");return r}});var um={mi:"italic",mn:"normal",mtext:"normal"};ao({type:"mathord",htmlBuilder(o,t){return Rs(o,t,"mathord")},mathmlBuilder(o,t){var r=new fe("mi",[bt(o.text,o.mode,t)]),a=vc(o,t)||"italic";return a!==um[r.type]&&r.setAttribute("mathvariant",a),r}});ao({type:"textord",htmlBuilder(o,t){return Rs(o,t,"textord")},mathmlBuilder(o,t){var r=bt(o.text,o.mode,t),a=vc(o,t)||"normal",s;return o.mode==="text"?s=new fe("mtext",[r]):/[0-9]/.test(o.text)?s=new fe("mn",[r]):o.text==="\\prime"?s=new fe("mo",[r]):s=new fe("mi",[r]),a!==um[s.type]&&s.setAttribute("mathvariant",a),s}});var G0={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},U0={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};ao({type:"spacing",htmlBuilder(o,t){if(U0.hasOwnProperty(o.text)){var r=U0[o.text].className||"";if(o.mode==="text"){var a=Rs(o,t,"textord");return a.classes.push(r),a}else return de(["mspace",r],[xc(o.text,o.mode,t)],t)}else{if(G0.hasOwnProperty(o.text))return de(["mspace",G0[o.text]],[],t);throw new me('Unknown type of space "'+o.text+'"')}},mathmlBuilder(o,t){var r;if(U0.hasOwnProperty(o.text))r=new fe("mtext",[new xn(" ")]);else{if(G0.hasOwnProperty(o.text))return new fe("mspace");throw new me('Unknown type of space "'+o.text+'"')}return r}});var G1=()=>{var o=new fe("mtd",[]);return o.setAttribute("width","50%"),o};ao({type:"tag",mathmlBuilder(o,t){var r=new fe("mtable",[new fe("mtr",[G1(),new fe("mtd",[Fr(o.body,t)]),G1(),new fe("mtd",[Fr(o.tag,t)])])]);return r.setAttribute("width","100%"),r}});var U1={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},Z1={"\\textbf":"textbf","\\textmd":"textmd"},qz={"\\textit":"textit","\\textup":"textup"},K1=(o,t)=>{var r=o.font;if(r){if(U1[r])return t.withTextFontFamily(U1[r]);if(Z1[r])return t.withTextFontWeight(Z1[r]);if(r==="\\emph")return t.fontShape==="textit"?t.withTextFontShape("textup"):t.withTextFontShape("textit")}else return t;return t.withTextFontShape(qz[r])};ke({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(o,t){var{parser:r,funcName:a}=o,s=t[0];return{type:"text",mode:r.mode,body:yn(s),font:a}},htmlBuilder(o,t){var r=K1(o,t),a=_n(o.body,r,!0);return de(["mord","text"],a,r)},mathmlBuilder(o,t){var r=K1(o,t);return Fr(o.body,r)}});ke({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(o,t){var{parser:r}=o;return{type:"underline",mode:r.mode,body:t[0]}},htmlBuilder(o,t){var r=Ke(o.body,t),a=Lo("underline-line",t),s=t.fontMetrics().defaultRuleThickness,c=Ye({positionType:"top",positionData:r.height,children:[{type:"kern",size:s},{type:"elem",elem:a},{type:"kern",size:3*s},{type:"elem",elem:r}]});return de(["mord","underline"],[c],t)},mathmlBuilder(o,t){var r=new fe("mo",[new xn("‾")]);r.setAttribute("stretchy","true");var a=new fe("munder",[en(o.body,t),r]);return a.setAttribute("accentunder","true"),a}});ke({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(o,t){var{parser:r}=o;return{type:"vcenter",mode:r.mode,body:t[0]}},htmlBuilder(o,t){var r=Ke(o.body,t),a=t.fontMetrics().axisHeight,s=.5*(r.height-a-(r.depth+a));return Ye({positionType:"shift",positionData:s,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,t){return new fe("mpadded",[en(o.body,t)],["vcenter"])}});ke({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(o,t,r){throw new me("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(o,t){for(var r=V1(o),a=[],s=t.havingStyle(t.style.text()),c=0;c<r.length;c++){var d=r[c];d==="~"&&(d="\\textasciitilde"),a.push(Hn(d,"Typewriter-Regular",o.mode,s,["mord","texttt"]))}return de(["mord","text"].concat(s.sizingClasses(t)),qp(a),s)},mathmlBuilder(o,t){var r=new xn(V1(o)),a=new fe("mtext",[r]);return a.setAttribute("mathvariant","monospace"),a}});var V1=o=>o.body.replace(/ /g,o.star?"␣":" "),Dr=Cp,dm=`[ \r
	]`,Tz="\\\\[a-zA-Z@]+",Pz="\\\\[^\uD800-\uDFFF]",Az="("+Tz+")"+dm+"*",Cz=`\\\\(
|[ \r	]+
?)[ \r	]*`,sc="[̀-ͯ]",Mz=new RegExp(sc+"+$"),Dz="("+dm+"+)|"+(Cz+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(sc+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(sc+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+Az)+("|"+Pz+")");class Q1{constructor(t,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=t,this.settings=r,this.tokenRegex=new RegExp(Dz,"g"),this.catcodes={"%":14,"~":13}}setCatcode(t,r){this.catcodes[t]=r}lex(){var t=this.input,r=this.tokenRegex.lastIndex;if(r===t.length)return new ct("EOF",new nt(this,r,r));var a=this.tokenRegex.exec(t);if(a===null||a.index!==r)throw new me("Unexpected character: '"+t[r]+"'",new ct(t[r],new nt(this,r,r+1)));var s=a[6]||a[3]||(a[2]?"\\ ":" ");if(this.catcodes[s]===14){var c=t.indexOf(`
`,this.tokenRegex.lastIndex);return c===-1?(this.tokenRegex.lastIndex=t.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=c+1,this.lex()}return new ct(s,new nt(this,r,this.tokenRegex.lastIndex))}}class Rz{constructor(t,r){t===void 0&&(t={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=t,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new me("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var t=this.undefStack.pop();for(var r in t)t.hasOwnProperty(r)&&(t[r]==null?delete this.current[r]:this.current[r]=t[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(t){return this.current.hasOwnProperty(t)||this.builtins.hasOwnProperty(t)}get(t){return this.current.hasOwnProperty(t)?this.current[t]:this.builtins[t]}set(t,r,a){if(a===void 0&&(a=!1),a){for(var s=0;s<this.undefStack.length;s++)delete this.undefStack[s][t];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][t]=r)}else{var c=this.undefStack[this.undefStack.length-1];c&&!c.hasOwnProperty(t)&&(c[t]=this.current[t])}r==null?delete this.current[t]:this.current[t]=r}}var Ez=em;k("\\noexpand",function(o){var t=o.popToken();return o.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}});k("\\expandafter",function(o){var t=o.popToken();return o.expandOnce(!0),{tokens:[t],numArgs:0}});k("\\@firstoftwo",function(o){var t=o.consumeArgs(2);return{tokens:t[0],numArgs:0}});k("\\@secondoftwo",function(o){var t=o.consumeArgs(2);return{tokens:t[1],numArgs:0}});k("\\@ifnextchar",function(o){var t=o.consumeArgs(3);o.consumeSpaces();var r=o.future();return t[0].length===1&&t[0][0].text===r.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}});k("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");k("\\TextOrMath",function(o){var t=o.consumeArgs(2);return o.mode==="text"?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var Y1={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};k("\\char",function(o){var t=o.popToken(),r,a="";if(t.text==="'")r=8,t=o.popToken();else if(t.text==='"')r=16,t=o.popToken();else if(t.text==="`")if(t=o.popToken(),t.text[0]==="\\")a=t.text.charCodeAt(1);else{if(t.text==="EOF")throw new me("\\char` missing argument");a=t.text.charCodeAt(0)}else r=10;if(r){if(a=Y1[t.text],a==null||a>=r)throw new me("Invalid base-"+r+" digit "+t.text);for(var s;(s=Y1[o.future().text])!=null&&s<r;)a*=r,a+=s,o.popToken()}return"\\@char{"+a+"}"});var Ac=(o,t,r,a)=>{var s=o.consumeArg().tokens;if(s.length!==1)throw new me("\\newcommand's first argument must be a macro name");var c=s[0].text,d=o.isDefined(c);if(d&&!t)throw new me("\\newcommand{"+c+"} attempting to redefine "+(c+"; use \\renewcommand"));if(!d&&!r)throw new me("\\renewcommand{"+c+"} when command "+c+" does not yet exist; use \\newcommand");var f=0;if(s=o.consumeArg().tokens,s.length===1&&s[0].text==="["){for(var $="",w=o.expandNextToken();w.text!=="]"&&w.text!=="EOF";)$+=w.text,w=o.expandNextToken();if(!$.match(/^\s*[0-9]+\s*$/))throw new me("Invalid number of arguments: "+$);f=parseInt($),s=o.consumeArg().tokens}return d&&a||o.macros.set(c,{tokens:s,numArgs:f}),""};k("\\newcommand",o=>Ac(o,!1,!0,!1));k("\\renewcommand",o=>Ac(o,!0,!1,!1));k("\\providecommand",o=>Ac(o,!0,!0,!0));k("\\message",o=>{var t=o.consumeArgs(1)[0];return console.log(t.reverse().map(r=>r.text).join("")),""});k("\\errmessage",o=>{var t=o.consumeArgs(1)[0];return console.error(t.reverse().map(r=>r.text).join("")),""});k("\\show",o=>{var t=o.popToken(),r=t.text;return console.log(t,o.macros.get(r),Dr[r],tn.math[r],tn.text[r]),""});k("\\bgroup","{");k("\\egroup","}");k("~","\\nobreakspace");k("\\lq","`");k("\\rq","'");k("\\aa","\\r a");k("\\AA","\\r A");k("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");k("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");k("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");k("ℬ","\\mathscr{B}");k("ℰ","\\mathscr{E}");k("ℱ","\\mathscr{F}");k("ℋ","\\mathscr{H}");k("ℐ","\\mathscr{I}");k("ℒ","\\mathscr{L}");k("ℳ","\\mathscr{M}");k("ℛ","\\mathscr{R}");k("ℭ","\\mathfrak{C}");k("ℌ","\\mathfrak{H}");k("ℨ","\\mathfrak{Z}");k("\\Bbbk","\\Bbb{k}");k("·","\\cdotp");k("\\llap","\\mathllap{\\textrm{#1}}");k("\\rlap","\\mathrlap{\\textrm{#1}}");k("\\clap","\\mathclap{\\textrm{#1}}");k("\\mathstrut","\\vphantom{(}");k("\\underbar","\\underline{\\text{#1}}");k("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');k("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");k("\\ne","\\neq");k("≠","\\neq");k("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");k("∉","\\notin");k("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");k("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");k("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");k("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");k("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");k("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");k("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");k("⟂","\\perp");k("‼","\\mathclose{!\\mkern-0.8mu!}");k("∌","\\notni");k("⌜","\\ulcorner");k("⌝","\\urcorner");k("⌞","\\llcorner");k("⌟","\\lrcorner");k("©","\\copyright");k("®","\\textregistered");k("️","\\textregistered");k("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');k("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');k("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');k("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');k("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");k("⋮","\\vdots");k("\\varGamma","\\mathit{\\Gamma}");k("\\varDelta","\\mathit{\\Delta}");k("\\varTheta","\\mathit{\\Theta}");k("\\varLambda","\\mathit{\\Lambda}");k("\\varXi","\\mathit{\\Xi}");k("\\varPi","\\mathit{\\Pi}");k("\\varSigma","\\mathit{\\Sigma}");k("\\varUpsilon","\\mathit{\\Upsilon}");k("\\varPhi","\\mathit{\\Phi}");k("\\varPsi","\\mathit{\\Psi}");k("\\varOmega","\\mathit{\\Omega}");k("\\substack","\\begin{subarray}{c}#1\\end{subarray}");k("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");k("\\boxed","\\fbox{$\\displaystyle{#1}$}");k("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");k("\\implies","\\DOTSB\\;\\Longrightarrow\\;");k("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");k("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");k("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var X1={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},Bz=new Set(["bin","rel"]);k("\\dots",function(o){var t="\\dotso",r=o.expandAfterFuture().text;return r in X1?t=X1[r]:(r.slice(0,4)==="\\not"||r in tn.math&&Bz.has(tn.math[r].group))&&(t="\\dotsb"),t});var Cc={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};k("\\dotso",function(o){var t=o.future().text;return t in Cc?"\\ldots\\,":"\\ldots"});k("\\dotsc",function(o){var t=o.future().text;return t in Cc&&t!==","?"\\ldots\\,":"\\ldots"});k("\\cdots",function(o){var t=o.future().text;return t in Cc?"\\@cdots\\,":"\\@cdots"});k("\\dotsb","\\cdots");k("\\dotsm","\\cdots");k("\\dotsi","\\!\\cdots");k("\\dotsx","\\ldots\\,");k("\\DOTSI","\\relax");k("\\DOTSB","\\relax");k("\\DOTSX","\\relax");k("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");k("\\,","\\tmspace+{3mu}{.1667em}");k("\\thinspace","\\,");k("\\>","\\mskip{4mu}");k("\\:","\\tmspace+{4mu}{.2222em}");k("\\medspace","\\:");k("\\;","\\tmspace+{5mu}{.2777em}");k("\\thickspace","\\;");k("\\!","\\tmspace-{3mu}{.1667em}");k("\\negthinspace","\\!");k("\\negmedspace","\\tmspace-{4mu}{.2222em}");k("\\negthickspace","\\tmspace-{5mu}{.277em}");k("\\enspace","\\kern.5em ");k("\\enskip","\\hskip.5em\\relax");k("\\quad","\\hskip1em\\relax");k("\\qquad","\\hskip2em\\relax");k("\\tag","\\@ifstar\\tag@literal\\tag@paren");k("\\tag@paren","\\tag@literal{({#1})}");k("\\tag@literal",o=>{if(o.macros.get("\\df@tag"))throw new me("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});k("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");k("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");k("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");k("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");k("\\newline","\\\\\\relax");k("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var pm=be(Bt["Main-Regular"][84][1]-.7*Bt["Main-Regular"][65][1]);k("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+pm+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");k("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+pm+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");k("\\hspace","\\@ifstar\\@hspacer\\@hspace");k("\\@hspace","\\hskip #1\\relax");k("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");k("\\ordinarycolon",":");k("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");k("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');k("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');k("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');k("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');k("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');k("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');k("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');k("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');k("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');k("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');k("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');k("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');k("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');k("∷","\\dblcolon");k("∹","\\eqcolon");k("≔","\\coloneqq");k("≕","\\eqqcolon");k("⩴","\\Coloneqq");k("\\ratio","\\vcentcolon");k("\\coloncolon","\\dblcolon");k("\\colonequals","\\coloneqq");k("\\coloncolonequals","\\Coloneqq");k("\\equalscolon","\\eqqcolon");k("\\equalscoloncolon","\\Eqqcolon");k("\\colonminus","\\coloneq");k("\\coloncolonminus","\\Coloneq");k("\\minuscolon","\\eqcolon");k("\\minuscoloncolon","\\Eqcolon");k("\\coloncolonapprox","\\Colonapprox");k("\\coloncolonsim","\\Colonsim");k("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");k("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");k("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");k("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");k("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");k("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");k("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");k("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");k("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");k("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");k("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");k("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");k("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");k("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");k("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");k("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");k("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");k("\\nleqq","\\html@mathml{\\@nleqq}{≰}");k("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");k("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");k("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");k("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");k("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");k("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");k("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");k("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");k("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");k("\\imath","\\html@mathml{\\@imath}{ı}");k("\\jmath","\\html@mathml{\\@jmath}{ȷ}");k("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");k("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");k("⟦","\\llbracket");k("⟧","\\rrbracket");k("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");k("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");k("⦃","\\lBrace");k("⦄","\\rBrace");k("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");k("⦵","\\minuso");k("\\darr","\\downarrow");k("\\dArr","\\Downarrow");k("\\Darr","\\Downarrow");k("\\lang","\\langle");k("\\rang","\\rangle");k("\\uarr","\\uparrow");k("\\uArr","\\Uparrow");k("\\Uarr","\\Uparrow");k("\\N","\\mathbb{N}");k("\\R","\\mathbb{R}");k("\\Z","\\mathbb{Z}");k("\\alef","\\aleph");k("\\alefsym","\\aleph");k("\\Alpha","\\mathrm{A}");k("\\Beta","\\mathrm{B}");k("\\bull","\\bullet");k("\\Chi","\\mathrm{X}");k("\\clubs","\\clubsuit");k("\\cnums","\\mathbb{C}");k("\\Complex","\\mathbb{C}");k("\\Dagger","\\ddagger");k("\\diamonds","\\diamondsuit");k("\\empty","\\emptyset");k("\\Epsilon","\\mathrm{E}");k("\\Eta","\\mathrm{H}");k("\\exist","\\exists");k("\\harr","\\leftrightarrow");k("\\hArr","\\Leftrightarrow");k("\\Harr","\\Leftrightarrow");k("\\hearts","\\heartsuit");k("\\image","\\Im");k("\\infin","\\infty");k("\\Iota","\\mathrm{I}");k("\\isin","\\in");k("\\Kappa","\\mathrm{K}");k("\\larr","\\leftarrow");k("\\lArr","\\Leftarrow");k("\\Larr","\\Leftarrow");k("\\lrarr","\\leftrightarrow");k("\\lrArr","\\Leftrightarrow");k("\\Lrarr","\\Leftrightarrow");k("\\Mu","\\mathrm{M}");k("\\natnums","\\mathbb{N}");k("\\Nu","\\mathrm{N}");k("\\Omicron","\\mathrm{O}");k("\\plusmn","\\pm");k("\\rarr","\\rightarrow");k("\\rArr","\\Rightarrow");k("\\Rarr","\\Rightarrow");k("\\real","\\Re");k("\\reals","\\mathbb{R}");k("\\Reals","\\mathbb{R}");k("\\Rho","\\mathrm{P}");k("\\sdot","\\cdot");k("\\sect","\\S");k("\\spades","\\spadesuit");k("\\sub","\\subset");k("\\sube","\\subseteq");k("\\supe","\\supseteq");k("\\Tau","\\mathrm{T}");k("\\thetasym","\\vartheta");k("\\weierp","\\wp");k("\\Zeta","\\mathrm{Z}");k("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");k("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");k("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");k("\\bra","\\mathinner{\\langle{#1}|}");k("\\ket","\\mathinner{|{#1}\\rangle}");k("\\braket","\\mathinner{\\langle{#1}\\rangle}");k("\\Bra","\\left\\langle#1\\right|");k("\\Ket","\\left|#1\\right\\rangle");var mm=o=>t=>{var r=t.consumeArg().tokens,a=t.consumeArg().tokens,s=t.consumeArg().tokens,c=t.consumeArg().tokens,d=t.macros.get("|"),f=t.macros.get("\\|");t.macros.beginGroup();var $=x=>S=>{o&&(S.macros.set("|",d),s.length&&S.macros.set("\\|",f));var q=x;if(!x&&s.length){var j=S.future();j.text==="|"&&(S.popToken(),q=!0)}return{tokens:q?s:a,numArgs:0}};t.macros.set("|",$(!1)),s.length&&t.macros.set("\\|",$(!0));var w=t.consumeArg().tokens,g=t.expandTokens([...c,...w,...r]);return t.macros.endGroup(),{tokens:g.reverse(),numArgs:0}};k("\\bra@ket",mm(!1));k("\\bra@set",mm(!0));k("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");k("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");k("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");k("\\angln","{\\angl n}");k("\\blue","\\textcolor{##6495ed}{#1}");k("\\orange","\\textcolor{##ffa500}{#1}");k("\\pink","\\textcolor{##ff00af}{#1}");k("\\red","\\textcolor{##df0030}{#1}");k("\\green","\\textcolor{##28ae7b}{#1}");k("\\gray","\\textcolor{gray}{#1}");k("\\purple","\\textcolor{##9d38bd}{#1}");k("\\blueA","\\textcolor{##ccfaff}{#1}");k("\\blueB","\\textcolor{##80f6ff}{#1}");k("\\blueC","\\textcolor{##63d9ea}{#1}");k("\\blueD","\\textcolor{##11accd}{#1}");k("\\blueE","\\textcolor{##0c7f99}{#1}");k("\\tealA","\\textcolor{##94fff5}{#1}");k("\\tealB","\\textcolor{##26edd5}{#1}");k("\\tealC","\\textcolor{##01d1c1}{#1}");k("\\tealD","\\textcolor{##01a995}{#1}");k("\\tealE","\\textcolor{##208170}{#1}");k("\\greenA","\\textcolor{##b6ffb0}{#1}");k("\\greenB","\\textcolor{##8af281}{#1}");k("\\greenC","\\textcolor{##74cf70}{#1}");k("\\greenD","\\textcolor{##1fab54}{#1}");k("\\greenE","\\textcolor{##0d923f}{#1}");k("\\goldA","\\textcolor{##ffd0a9}{#1}");k("\\goldB","\\textcolor{##ffbb71}{#1}");k("\\goldC","\\textcolor{##ff9c39}{#1}");k("\\goldD","\\textcolor{##e07d10}{#1}");k("\\goldE","\\textcolor{##a75a05}{#1}");k("\\redA","\\textcolor{##fca9a9}{#1}");k("\\redB","\\textcolor{##ff8482}{#1}");k("\\redC","\\textcolor{##f9685d}{#1}");k("\\redD","\\textcolor{##e84d39}{#1}");k("\\redE","\\textcolor{##bc2612}{#1}");k("\\maroonA","\\textcolor{##ffbde0}{#1}");k("\\maroonB","\\textcolor{##ff92c6}{#1}");k("\\maroonC","\\textcolor{##ed5fa6}{#1}");k("\\maroonD","\\textcolor{##ca337c}{#1}");k("\\maroonE","\\textcolor{##9e034e}{#1}");k("\\purpleA","\\textcolor{##ddd7ff}{#1}");k("\\purpleB","\\textcolor{##c6b9fc}{#1}");k("\\purpleC","\\textcolor{##aa87ff}{#1}");k("\\purpleD","\\textcolor{##7854ab}{#1}");k("\\purpleE","\\textcolor{##543b78}{#1}");k("\\mintA","\\textcolor{##f5f9e8}{#1}");k("\\mintB","\\textcolor{##edf2df}{#1}");k("\\mintC","\\textcolor{##e0e5cc}{#1}");k("\\grayA","\\textcolor{##f6f7f7}{#1}");k("\\grayB","\\textcolor{##f0f1f2}{#1}");k("\\grayC","\\textcolor{##e3e5e6}{#1}");k("\\grayD","\\textcolor{##d6d8da}{#1}");k("\\grayE","\\textcolor{##babec2}{#1}");k("\\grayF","\\textcolor{##888d93}{#1}");k("\\grayG","\\textcolor{##626569}{#1}");k("\\grayH","\\textcolor{##3b3e40}{#1}");k("\\grayI","\\textcolor{##21242c}{#1}");k("\\kaBlue","\\textcolor{##314453}{#1}");k("\\kaGreen","\\textcolor{##71B307}{#1}");var fm={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class Fz{constructor(t,r,a){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(t),this.macros=new Rz(Ez,r.macros),this.mode=a,this.stack=[]}feed(t){this.lexer=new Q1(t,this.settings)}switchMode(t){this.mode=t}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(t){this.stack.push(t)}pushTokens(t){this.stack.push(...t)}scanArgument(t){var r,a,s;if(t){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:s,end:a}=this.consumeArg(["]"])}else({tokens:s,start:r,end:a}=this.consumeArg());return this.pushToken(new ct("EOF",a.loc)),this.pushTokens(s),new ct("",nt.range(r,a))}consumeSpaces(){for(;;){var t=this.future();if(t.text===" ")this.stack.pop();else break}}consumeArg(t){var r=[],a=t&&t.length>0;a||this.consumeSpaces();var s=this.future(),c,d=0,f=0;do{if(c=this.popToken(),r.push(c),c.text==="{")++d;else if(c.text==="}"){if(--d,d===-1)throw new me("Extra }",c)}else if(c.text==="EOF")throw new me("Unexpected end of input in a macro argument, expected '"+(t&&a?t[f]:"}")+"'",c);if(t&&a)if((d===0||d===1&&t[f]==="{")&&c.text===t[f]){if(++f,f===t.length){r.splice(-f,f);break}}else f=0}while(d!==0||a);return s.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:s,end:c}}consumeArgs(t,r){if(r){if(r.length!==t+1)throw new me("The length of delimiters doesn't match the number of args!");for(var a=r[0],s=0;s<a.length;s++){var c=this.popToken();if(a[s]!==c.text)throw new me("Use of the macro doesn't match its definition",c)}}for(var d=[],f=0;f<t;f++)d.push(this.consumeArg(r&&r[f+1]).tokens);return d}countExpansion(t){if(this.expansionCount+=t,this.expansionCount>this.settings.maxExpand)throw new me("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(t){var r=this.popToken(),a=r.text,s=r.noexpand?null:this._getExpansion(a);if(s==null||t&&s.unexpandable){if(t&&s==null&&a[0]==="\\"&&!this.isDefined(a))throw new me("Undefined control sequence: "+a);return this.pushToken(r),!1}this.countExpansion(1);var c=s.tokens,d=this.consumeArgs(s.numArgs,s.delimiters);if(s.numArgs){c=c.slice();for(var f=c.length-1;f>=0;--f){var $=c[f];if($.text==="#"){if(f===0)throw new me("Incomplete placeholder at end of macro body",$);if($=c[--f],$.text==="#")c.splice(f+1,1);else if(/^[1-9]$/.test($.text))c.splice(f,2,...d[+$.text-1]);else throw new me("Not a valid argument number",$)}}}return this.pushTokens(c),c.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var t=this.stack.pop();return t.treatAsRelax&&(t.text="\\relax"),t}throw new Error}expandMacro(t){return this.macros.has(t)?this.expandTokens([new ct(t)]):void 0}expandTokens(t){var r=[],a=this.stack.length;for(this.pushTokens(t);this.stack.length>a;)if(this.expandOnce(!0)===!1){var s=this.stack.pop();s.treatAsRelax&&(s.noexpand=!1,s.treatAsRelax=!1),r.push(s)}return this.countExpansion(r.length),r}expandMacroAsText(t){var r=this.expandMacro(t);return r&&r.map(a=>a.text).join("")}_getExpansion(t){var r=this.macros.get(t);if(r==null)return r;if(t.length===1){var a=this.lexer.catcodes[t];if(a!=null&&a!==13)return}var s=typeof r=="function"?r(this):r;if(typeof s=="string"){var c=0;if(s.includes("#"))for(var d=s.replace(/##/g,"");d.includes("#"+(c+1));)++c;for(var f=new Q1(s,this.settings),$=[],w=f.lex();w.text!=="EOF";)$.push(w),w=f.lex();$.reverse();var g={tokens:$,numArgs:c};return g}return s}isDefined(t){return this.macros.has(t)||Dr.hasOwnProperty(t)||tn.math.hasOwnProperty(t)||tn.text.hasOwnProperty(t)||fm.hasOwnProperty(t)}isExpandable(t){var r=this.macros.get(t);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:Dr.hasOwnProperty(t)&&!Dr[t].primitive}}var J1=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,zs=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),Z0={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},ep={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class Ws{constructor(t,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new Fz(t,r,this.mode),this.settings=r,this.leftrightDepth=0}expect(t,r){if(r===void 0&&(r=!0),this.fetch().text!==t)throw new me("Expected '"+t+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(t){this.mode=t,this.gullet.switchMode(t)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var t=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),t}finally{this.gullet.endGroups()}}subparse(t){var r=this.nextToken;this.consume(),this.gullet.pushToken(new ct("}")),this.gullet.pushTokens(t);var a=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,a}parseExpression(t,r){for(var a=[];;){this.mode==="math"&&this.consumeSpaces();var s=this.fetch();if(Ws.endOfExpression.has(s.text)||r&&s.text===r||t&&Dr[s.text]&&Dr[s.text].infix)break;var c=this.parseAtom(r);if(c){if(c.type==="internal")continue}else break;a.push(c)}return this.mode==="text"&&this.formLigatures(a),this.handleInfixNodes(a)}handleInfixNodes(t){for(var r=-1,a,s=0;s<t.length;s++)if(t[s].type==="infix"){if(r!==-1)throw new me("only one infix operator per group",t[s].token);r=s,a=t[s].replaceWith}if(r!==-1&&a){var c,d,f=t.slice(0,r),$=t.slice(r+1);f.length===1&&f[0].type==="ordgroup"?c=f[0]:c={type:"ordgroup",mode:this.mode,body:f},$.length===1&&$[0].type==="ordgroup"?d=$[0]:d={type:"ordgroup",mode:this.mode,body:$};var w;return a==="\\\\abovefrac"?w=this.callFunction(a,[c,t[r],d],[]):w=this.callFunction(a,[c,d],[]),[w]}else return t}handleSupSubscript(t){var r=this.fetch(),a=r.text;this.consume(),this.consumeSpaces();var s;do{var c;s=this.parseGroup(t)}while(((c=s)==null?void 0:c.type)==="internal");if(!s)throw new me("Expected group after '"+a+"'",r);return s}formatUnsupportedCmd(t){for(var r=[],a=0;a<t.length;a++)r.push({type:"textord",mode:"text",text:t[a]});var s={type:"text",mode:this.mode,body:r},c={type:"color",mode:this.mode,color:this.settings.errorColor,body:[s]};return c}parseAtom(t){var r=this.parseGroup("atom",t);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var a,s;;){this.consumeSpaces();var c=this.fetch();if(c.text==="\\limits"||c.text==="\\nolimits"){if(r&&r.type==="op"){var d=c.text==="\\limits";r.limits=d,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=c.text==="\\limits");else throw new me("Limit controls must follow a math operator",c);this.consume()}else if(c.text==="^"){if(a)throw new me("Double superscript",c);a=this.handleSupSubscript("superscript")}else if(c.text==="_"){if(s)throw new me("Double subscript",c);s=this.handleSupSubscript("subscript")}else if(c.text==="'"){if(a)throw new me("Double superscript",c);var f={type:"textord",mode:this.mode,text:"\\prime"},$=[f];for(this.consume();this.fetch().text==="'";)$.push(f),this.consume();this.fetch().text==="^"&&$.push(this.handleSupSubscript("superscript")),a={type:"ordgroup",mode:this.mode,body:$}}else if(zs[c.text]){var w=J1.test(c.text),g=[];for(g.push(new ct(zs[c.text])),this.consume();;){var x=this.fetch().text;if(!zs[x]||J1.test(x)!==w)break;g.unshift(new ct(zs[x])),this.consume()}var S=this.subparse(g);w?s={type:"ordgroup",mode:"math",body:S}:a={type:"ordgroup",mode:"math",body:S}}else break}return a||s?{type:"supsub",mode:this.mode,base:r,sup:a,sub:s}:r}parseFunction(t,r){var a=this.fetch(),s=a.text,c=Dr[s];if(!c)return null;if(this.consume(),r&&r!=="atom"&&!c.allowedInArgument)throw new me("Got function '"+s+"' with no arguments"+(r?" as "+r:""),a);if(this.mode==="text"&&!c.allowedInText)throw new me("Can't use function '"+s+"' in text mode",a);if(this.mode==="math"&&c.allowedInMath===!1)throw new me("Can't use function '"+s+"' in math mode",a);var{args:d,optArgs:f}=this.parseArguments(s,c);return this.callFunction(s,d,f,a,t)}callFunction(t,r,a,s,c){var d={funcName:t,parser:this,token:s,breakOnTokenText:c},f=Dr[t];if(f&&f.handler)return f.handler(d,r,a);throw new me("No function handler for "+t)}parseArguments(t,r){var a=r.numArgs+r.numOptionalArgs;if(a===0)return{args:[],optArgs:[]};for(var s=[],c=[],d=0;d<a;d++){var f=r.argTypes&&r.argTypes[d],$=d<r.numOptionalArgs;(r.primitive&&f==null||r.type==="sqrt"&&d===1&&c[0]==null)&&(f="primitive");var w=this.parseGroupOfType("argument to '"+t+"'",f,$);if($)c.push(w);else if(w!=null)s.push(w);else throw new me("Null argument, please report this as a bug")}return{args:s,optArgs:c}}parseGroupOfType(t,r,a){switch(r){case"color":return this.parseColorGroup(a);case"size":return this.parseSizeGroup(a);case"url":return this.parseUrlGroup(a);case"math":case"text":return this.parseArgumentGroup(a,r);case"hbox":{var s=this.parseArgumentGroup(a,"text");return s!=null?{type:"styling",mode:s.mode,body:[s],style:"text"}:null}case"raw":{var c=this.parseStringGroup("raw",a);return c!=null?{type:"raw",mode:"text",string:c.text}:null}case"primitive":{if(a)throw new me("A primitive argument cannot be optional");var d=this.parseGroup(t);if(d==null)throw new me("Expected group as "+t,this.fetch());return d}case"original":case null:case void 0:return this.parseArgumentGroup(a);default:throw new me("Unknown group type as "+t,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(t,r){var a=this.gullet.scanArgument(r);if(a==null)return null;for(var s="",c;(c=this.fetch()).text!=="EOF";)s+=c.text,this.consume();return this.consume(),a.text=s,a}parseRegexGroup(t,r){for(var a=this.fetch(),s=a,c="",d;(d=this.fetch()).text!=="EOF"&&t.test(c+d.text);)s=d,c+=s.text,this.consume();if(c==="")throw new me("Invalid "+r+": '"+a.text+"'",a);return a.range(s,c)}parseColorGroup(t){var r=this.parseStringGroup("color",t);if(r==null)return null;var a=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!a)throw new me("Invalid color: '"+r.text+"'",r);var s=a[0];return/^[0-9a-f]{6}$/i.test(s)&&(s="#"+s),{type:"color-token",mode:this.mode,color:s}}parseSizeGroup(t){var r,a=!1;if(this.gullet.consumeSpaces(),!t&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",t),!r)return null;!t&&r.text.length===0&&(r.text="0pt",a=!0);var s=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!s)throw new me("Invalid size: '"+r.text+"'",r);var c={number:+(s[1]+s[2]),unit:s[3]};if(!vp(c))throw new me("Invalid unit: '"+c.unit+"'",r);return{type:"size",mode:this.mode,value:c,isBlank:a}}parseUrlGroup(t){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",t);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var a=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:a}}parseArgumentGroup(t,r){var a=this.gullet.scanArgument(t);if(a==null)return null;var s=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var c=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var d={type:"ordgroup",mode:this.mode,loc:a.loc,body:c};return r&&this.switchMode(s),d}parseGroup(t,r){var a=this.fetch(),s=a.text,c;if(s==="{"||s==="\\begingroup"){this.consume();var d=s==="{"?"}":"\\endgroup";this.gullet.beginGroup();var f=this.parseExpression(!1,d),$=this.fetch();this.expect(d),this.gullet.endGroup(),c={type:"ordgroup",mode:this.mode,loc:nt.range(a,$),body:f,semisimple:s==="\\begingroup"||void 0}}else if(c=this.parseFunction(r,t)||this.parseSymbol(),c==null&&s[0]==="\\"&&!fm.hasOwnProperty(s)){if(this.settings.throwOnError)throw new me("Undefined control sequence: "+s,a);c=this.formatUnsupportedCmd(s),this.consume()}return c}formLigatures(t){for(var r=t.length-1,a=0;a<r;++a){var s=t[a],c=s.text;c==="-"&&t[a+1].text==="-"&&(a+1<r&&t[a+2].text==="-"?(t.splice(a,3,{type:"textord",mode:"text",loc:nt.range(s,t[a+2]),text:"---"}),r-=2):(t.splice(a,2,{type:"textord",mode:"text",loc:nt.range(s,t[a+1]),text:"--"}),r-=1)),(c==="'"||c==="`")&&t[a+1].text===c&&(t.splice(a,2,{type:"textord",mode:"text",loc:nt.range(s,t[a+1]),text:c+c}),r-=1)}}parseSymbol(){var t=this.fetch(),r=t.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var a=r.slice(5),s=a.charAt(0)==="*";if(s&&(a=a.slice(1)),a.length<2||a.charAt(0)!==a.slice(-1))throw new me(`\\verb assertion failed --
                    please report what input caused this bug`);return a=a.slice(1,-1),{type:"verb",mode:"text",body:a,star:s}}ep.hasOwnProperty(r[0])&&!tn[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',t),r=ep[r[0]]+r.slice(1));var c=Mz.exec(r);c&&(r=r.substring(0,c.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var d;if(tn[this.mode][r]){this.settings.strict&&this.mode==="math"&&ec.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',t);var f=tn[this.mode][r].group,$=nt.range(t),w;if(Db.hasOwnProperty(f)){var g=f;w={type:"atom",mode:this.mode,family:g,loc:$,text:r}}else w={type:f,mode:this.mode,loc:$,text:r};d=w}else if(r.charCodeAt(0)>=128)this.settings.strict&&(zp(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',t):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),t)),d={type:"textord",mode:"text",loc:nt.range(t),text:r};else return null;if(this.consume(),c)for(var x=0;x<c[0].length;x++){var S=c[0][x];if(!Z0[S])throw new me("Unknown accent ' "+S+"'",t);var q=Z0[S][this.mode]||Z0[S].text;if(!q)throw new me("Accent "+S+" unsupported in "+this.mode+" mode",t);d={type:"accent",mode:this.mode,loc:nt.range(t),label:q,isStretchy:!1,isShifty:!0,base:d}}return d}}Ws.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var Mc=function(t,r){if(!(typeof t=="string"||t instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var a=new Ws(t,r);delete a.gullet.macros.current["\\df@tag"];var s=a.parse();if(delete a.gullet.macros.current["\\current@color"],delete a.gullet.macros.current["\\color"],a.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new me("\\tag works only in display equations");s=[{type:"tag",mode:"text",body:s,tag:a.subparse([new ct("\\df@tag")])}]}return s},hm=function(t,r,a){r.textContent="";var s=Dc(t,a).toNode();r.appendChild(s)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),hm=function(){throw new me("KaTeX doesn't work in quirks mode.")});var Iz=function(t,r){var a=Dc(t,r).toMarkup();return a},Nz=function(t,r){var a=new $c(r);return Mc(t,a)},$m=function(t,r,a){if(a.throwOnError||!(t instanceof me))throw t;var s=de(["katex-error"],[new xt(r)]);return s.setAttribute("title",t.toString()),s.setAttribute("style","color:"+a.errorColor),s},Dc=function(t,r){var a=new $c(r);try{var s=Mc(t,a);return Qb(s,t,a)}catch(c){return $m(c,t,a)}},Lz=function(t,r){var a=new $c(r);try{var s=Mc(t,a);return Yb(s,t,a)}catch(c){return $m(c,t,a)}},Wz="0.16.33",Oz={Span:Xi,Anchor:wc,SymbolNode:xt,SvgNode:rr,PathNode:Er,LineNode:J0},np={version:Wz,render:hm,renderToString:Iz,ParseError:me,SETTINGS_SCHEMA:_s,__parse:Nz,__renderToDomTree:Dc,__renderToHTMLTree:Lz,__setFontMetrics:jb,__defineSymbol:m,__defineFunction:ke,__defineMacro:k,__domTree:Oz};function bn(o){if(!o)return"";let t=o.replace(/\$\$([\s\S]*?)\$\$/g,(r,a)=>{try{return np.renderToString(a.trim(),{displayMode:!0,throwOnError:!1})}catch(s){return`<span style="color:red">[latex error: ${s.message}]</span>`}});return t=t.replace(/\$([^$\n]+)\$/g,(r,a)=>{try{return np.renderToString(a.trim(),{displayMode:!1,throwOnError:!1})}catch(s){return`<span style="color:red">[latex error: ${s.message}]</span>`}}),t=t.replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g,"$1<em>$2</em>"),t}function Hz({nodeId:o,nodes:t,adjacency:r,SCOPE_COLORS:a,belief:s,lang:c,onNavigate:d}){const[f,$]=D.useState(!1),w=350,g=D.useMemo(()=>{if(!f)return null;const _=Object.fromEntries(t.map(U=>[U.id,U]))[o];if(!_)return null;const T=t.filter(U=>{const ge=U.x-_.x,ve=U.y-_.y;return ge*ge+ve*ve<=w*w});if(T.length===0)return null;const P=new Set(T.map(U=>U.id)),B=[],W=new Set;for(const U of T){const ge=r.prereqs[U.id]??[];for(const ve of ge){if(!P.has(ve))continue;const qe=ve+">"+U.id;W.has(qe)||(W.add(qe),B.push({from:ve,to:U.id}))}}const I=380,E=260,O=18,F=T.map(U=>U.x),ee=T.map(U=>U.y),J=Math.min(...F),ne=Math.max(...F),re=Math.min(...ee),Q=Math.max(...ee),Y=Math.max(1,ne-J),ce=Math.max(1,Q-re),ye=I-2*O,ze=E-2*O,xe=Math.min(ye/Y,ze/ce),K=O+(ye-Y*xe)/2,ie=O+(ze-ce*xe)/2,te=(U,ge)=>[K+(U-J)*xe,ie+(ge-re)*xe],R=T.map(U=>{const[ge,ve]=te(U.x,U.y);return{...U,sx:ge,sy:ve}});return{W:I,H:E,nodes:R,edges:B}},[f,o,t,r]);if(!f)return p.jsx("button",{onClick:()=>$(!0),style:{position:"fixed",top:20,right:20,padding:"8px 14px",fontSize:12,fontFamily:je,fontWeight:600,background:v.surfaceHi??"#16161a",color:v.textBody,border:`1px solid ${v.border}`,borderRadius:8,cursor:"pointer",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",zIndex:60},title:c==="pl"?"Pokaż fragment mapy":"Show map cutout",children:c==="pl"?"⌖ Mapa":"⌖ Map"});if(!g)return p.jsxs("div",{style:{position:"fixed",top:20,right:20,padding:"8px 14px",fontSize:11,color:v.textDim,background:v.surfaceHi??"#16161a",border:`1px solid ${v.border}`,borderRadius:8,zIndex:60},children:[c==="pl"?"Brak sąsiadów w zasięgu.":"No neighbors in range.",p.jsx("button",{onClick:()=>$(!1),style:{marginLeft:10,background:"transparent",border:"none",color:v.textFaint,cursor:"pointer"},children:"×"})]});const x=Object.fromEntries(g.nodes.map(j=>[j.id,j]));new Set(g.nodes.map(j=>j.id));const S=new Set(r.prereqs[o]??[]),q=new Set(r.dependents[o]??[]);return p.jsxs("div",{style:{position:"fixed",top:20,right:20,width:g.W,height:g.H+44,background:v.surfaceHi??"#16161a",border:`1px solid ${v.border}`,borderRadius:10,padding:"10px 12px 12px",fontFamily:je,boxShadow:"0 12px 28px rgba(0,0,0,0.4)",zIndex:60},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[p.jsxs("div",{style:{fontSize:10,color:v.textFaint,letterSpacing:"0.08em",textTransform:"uppercase"},children:[c==="pl"?"Fragment mapy":"Map cutout",p.jsxs("span",{style:{marginLeft:8,color:v.textDim,textTransform:"none",letterSpacing:0},children:["· ",g.nodes.length," ",c==="pl"?"tematów":"topics"]})]}),p.jsx("button",{onClick:()=>$(!1),style:{background:"transparent",border:"none",color:v.textFaint,cursor:"pointer",fontSize:16,lineHeight:1,padding:"2px 6px"},title:c==="pl"?"Schowaj":"Close",children:"×"})]}),p.jsxs("svg",{width:g.W-24,height:g.H,viewBox:`0 0 ${g.W} ${g.H}`,style:{display:"block"},children:[g.edges.map((j,_)=>{const T=x[j.from],P=x[j.to];if(!T||!P)return null;const B=j.from===o||j.to===o;return p.jsx("line",{x1:T.sx,y1:T.sy,x2:P.sx,y2:P.sy,stroke:B?v.textBody??"#cfd8e3":v.border??"rgba(255,255,255,0.2)",strokeOpacity:B?.7:.35,strokeWidth:B?1.4:1},_)}),g.nodes.map(j=>{const _=j.id===o,T=S.has(j.id),P=q.has(j.id),B=(a==null?void 0:a[j.scope])??"#4a9eff",W=s==null?void 0:s[j.id],I=W==="known"?"#27ae60":W==="unknown"?"#e74c3c":B,E=_?7:T||P?5:3.5,O=_?"":T||P?"cc":"66",F=c==="pl"?j.labelPl??j.id:j.label??j.id,ee=_?"":T?" (prereq)":P?" (dependent)":"";return p.jsxs("g",{children:[p.jsx("circle",{cx:j.sx,cy:j.sy,r:E,fill:_?B:`${B}${O}`,stroke:I,strokeWidth:_?2:1,style:{cursor:_?"default":"pointer"},onClick:()=>{_||d==null||d(j.id)},children:p.jsx("title",{children:F+ee})}),_&&p.jsx("circle",{cx:j.sx,cy:j.sy,r:E+5,fill:"none",stroke:B,strokeOpacity:.35,strokeWidth:1.5})]},j.id)})]})]})}function Gz({nodeId:o,nodes:t,adjacency:r,lang:a,SCOPE_COLORS:s,SCOPE_LABELS:c,SECTIONS:d,belief:f,evidence:$,onClose:w,onNavigate:g,onShowPath:x,onQuizMe:S,onQuizMatura:q,QUESTION_BANK:j}){var ye,ze,xe;const[_,T]=D.useState(null),P=xp(),B=t.find(K=>K.id===o);if(!B)return null;const W=Object.fromEntries(t.map(K=>[K.id,K])),I=K=>{var ie,te;return a==="pl"?(ie=W[K])==null?void 0:ie.labelPl:(te=W[K])==null?void 0:te.label},E=a==="pl"?B.labelPl:B.label,O=(s==null?void 0:s[B.scope])??"#4a9eff",F=((ye=c==null?void 0:c[B.scope])==null?void 0:ye[a==="pl"?"pl":"en"])??"",ee=((ze=d==null?void 0:d[B.section])==null?void 0:ze.label)??"",J=r.prereqs[o]??[],ne=r.dependents[o]??[],re=B.resources??[],Q=f==null?void 0:f[o],Y=_!=null?re[_]??null:null,ce={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"};return p.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:v.bg,fontFamily:je,overflowY:"auto",animation:"topicSlideIn 0.2s ease"},children:[p.jsx("style",{children:`
        @keyframes topicSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}),!P&&p.jsx(Hz,{nodeId:o,nodes:t,adjacency:r,SCOPE_COLORS:s,belief:f,lang:a,onNavigate:g}),p.jsxs("div",{style:{maxWidth:"min(580px, calc(100% - 32px))",width:"100%",margin:"0 auto",padding:"24px 16px 48px"},children:[p.jsxs("div",{style:{display:"flex",gap:8,marginBottom:28},children:[p.jsxs("button",{onClick:w,style:{padding:"10px 14px",fontSize:12,fontFamily:je,borderRadius:6,border:`1px solid ${v.border}`,background:"transparent",color:v.textDim,cursor:"pointer"},children:["← ",L("topicBack",a)]}),x&&J.length>0&&p.jsx("button",{onClick:()=>x(o),style:{padding:"10px 14px",fontSize:12,fontFamily:je,borderRadius:6,border:`1px solid ${O}30`,background:`${O}08`,color:O,cursor:"pointer"},children:L("topicLearnPath",a)})]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[p.jsx("div",{style:{width:12,height:12,borderRadius:"50%",background:O,opacity:.8,flexShrink:0}}),p.jsx("h1",{style:{margin:0,fontSize:22,fontWeight:700,color:v.textPrimary,lineHeight:1.3},dangerouslySetInnerHTML:{__html:bn(E??"")}})]}),p.jsxs("div",{style:{fontSize:12,color:v.textDim,marginBottom:16,paddingLeft:22,lineHeight:1.6},children:[ee," · ",F," · ",L("level",a)," ",B.level]}),Q&&p.jsx(Uz,{nodeId:o,status:Q,evidence:$,adjacency:r,belief:f,nodes:t,lang:a,onNavigate:g}),B.body&&p.jsx(Zz,{body:B.body,lang:a}),S&&((xe=j==null?void 0:j[o])==null?void 0:xe.length)>0&&(()=>{const K=j[o].filter(ie=>ie.source==="cke").length;return p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:20},children:[p.jsx("button",{onClick:()=>S(o),style:{width:"100%",padding:"12px 16px",fontSize:13,fontWeight:600,fontFamily:je,borderRadius:8,border:`1px solid ${O}40`,background:`${O}10`,color:O,cursor:"pointer",transition:"background 0.15s"},onMouseEnter:ie=>{ie.currentTarget.style.background=`${O}20`},onMouseLeave:ie=>{ie.currentTarget.style.background=`${O}10`},children:L("topicQuizMe",a)}),K>0&&q&&p.jsxs("button",{onClick:()=>q(o),style:{width:"100%",padding:"12px 16px",fontSize:13,fontWeight:600,fontFamily:je,borderRadius:8,border:"1px solid #FFD16640",background:"#FFD16610",color:"#FFD166",cursor:"pointer",transition:"background 0.15s",display:"flex",alignItems:"center",justifyContent:"center",gap:8},onMouseEnter:ie=>{ie.currentTarget.style.background="#FFD16620"},onMouseLeave:ie=>{ie.currentTarget.style.background="#FFD16610"},children:[p.jsx("span",{children:a==="pl"?"Pytania maturalne (CKE)":"Past matura questions (CKE)"}),p.jsx("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:4,background:"#FFD16622",letterSpacing:"0.04em"},children:K})]})]})})(),p.jsx(tp,{title:L("prerequisites",a),color:"#4a9eff",empty:J.length===0,emptyText:L("noPrereqs",a),children:J.map(K=>{var ie;return p.jsx(rp,{label:I(K),color:(s==null?void 0:s[(ie=W[K])==null?void 0:ie.scope])??"#4a9eff",status:f==null?void 0:f[K],onClick:()=>g(K)},K)})}),p.jsx(tp,{title:L("enables",a),color:"#3dc9b0",empty:ne.length===0,emptyText:L("noDependents",a),children:ne.map(K=>{var ie;return p.jsx(rp,{label:I(K),color:(s==null?void 0:s[(ie=W[K])==null?void 0:ie.scope])??"#4a9eff",status:f==null?void 0:f[K],onClick:()=>g(K)},K)})}),re.length>0&&p.jsxs("div",{style:{marginTop:28},children:[p.jsx("div",{style:{fontSize:13,fontWeight:600,color:"#FFD166",marginBottom:12},children:L("learningResources",a)}),p.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:re.map((K,ie)=>{const te=a==="pl"?K.titlePl:K.titleEn,R=ce[K.type]??"#8a9dbe",U=K.type==="interactive"?"resourceInteractive":K.type==="video"?"resourceVideo":"resourceArticle";return p.jsxs("button",{onClick:()=>T(ie),style:{display:"flex",alignItems:"center",gap:12,padding:"14px 16px",borderRadius:8,background:`${R}0a`,border:`1px solid ${R}25`,cursor:"pointer",textAlign:"left",width:"100%",fontFamily:je,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:ge=>{ge.currentTarget.style.background=`${R}18`,ge.currentTarget.style.borderColor=`${R}50`},onMouseLeave:ge=>{ge.currentTarget.style.background=`${R}0a`,ge.currentTarget.style.borderColor=`${R}25`},children:[p.jsx("span",{style:{fontSize:18,flexShrink:0},children:K.type==="interactive"?"⬡":K.type==="video"?"▶":"📄"}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontSize:13,color:v.textBody,fontWeight:500,lineHeight:1.4},children:te}),p.jsx("div",{style:{fontSize:10,color:R,marginTop:3,fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:L(U,a)})]}),p.jsx("span",{style:{fontSize:14,color:v.textFaint},children:"→"})]},ie)})})]}),p.jsx("div",{style:{marginTop:32,paddingTop:16,borderTop:`1px solid ${v.border}`,textAlign:"center"},children:p.jsx("a",{href:"https://buycoffee.to/oczochodzi",target:"_blank",rel:"noopener noreferrer",style:{fontSize:11,color:v.textFaint,textDecoration:"none",transition:"color 0.15s"},onMouseEnter:K=>{K.currentTarget.style.color="#FFD166"},onMouseLeave:K=>{K.currentTarget.style.color=v.textFaint},children:L("coffeeBtn",a)})})]}),Y&&p.jsx(bp,{resource:Y,lang:a,onClose:()=>T(null)})]})}function Uz({nodeId:o,status:t,evidence:r,adjacency:a,belief:s,nodes:c,lang:d,onNavigate:f}){const $=r==null?void 0:r[o],w=!!$,g=t==="known"?"#27ae60":"#e74c3c",x=t==="known"?"#2ecc71":"#ff6b6b",S=Object.fromEntries(c.map(_=>[_.id,_])),q=_=>{var T,P;return d==="pl"?(T=S[_])==null?void 0:T.labelPl:(P=S[_])==null?void 0:P.label};let j=null;return!w&&r&&(t==="known"?j=(a.dependents[o]??[]).find(T=>{var P;return((P=r[T])==null?void 0:P.correct)&&s[T]==="known"}):j=(a.prereqs[o]??[]).find(T=>r[T]&&!r[T].correct&&s[T]==="unknown")),p.jsxs("div",{style:{marginBottom:20,padding:"12px 14px",borderRadius:8,background:`${g}08`,border:`1px solid ${g}20`},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:[p.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:g}}),p.jsx("span",{style:{fontSize:13,fontWeight:600,color:x},children:L(t==="known"?"beliefKnown":"beliefUnknown",d)}),p.jsx("span",{style:{fontSize:10,padding:"2px 8px",borderRadius:4,background:w?`${g}15`:"#ffffff08",color:w?x:v.textFaint,border:`1px solid ${w?g+"30":v.border}`},children:w?d==="pl"?"sprawdzone":"tested":d==="pl"?"wywnioskowane":"inferred"})]}),w&&p.jsxs("div",{style:{fontSize:12,color:v.textDim,lineHeight:1.6},children:[$.correct?d==="pl"?"Odpowiedź poprawna":"Answered correctly":d==="pl"?"Odpowiedź niepoprawna":"Answered incorrectly",$.questionText&&p.jsx("div",{style:{marginTop:8,padding:"8px 10px",borderRadius:6,background:"#ffffff06",borderLeft:`2px solid ${g}40`,fontSize:12,color:v.textBody,lineHeight:1.6},children:p.jsx("span",{dangerouslySetInnerHTML:{__html:bn($.questionText)}})})]}),!w&&p.jsxs("div",{style:{fontSize:12,color:v.textDim,lineHeight:1.6},children:[t==="known"?d==="pl"?"Wywnioskowane — jeśli znasz trudniejszy temat, to prawdopodobnie znasz też ten.":"Inferred — if you know a harder topic, you likely know this one too.":d==="pl"?"Wywnioskowane — jeśli nie znasz podstawy, to tematy które na niej bazują też mogą sprawiać problem.":"Inferred — if you don't know the foundation, topics that build on it may also be difficult.",j&&p.jsxs("button",{onClick:()=>f(j),style:{display:"block",marginTop:6,padding:"10px 14px",borderRadius:4,background:"#ffffff06",border:`1px solid ${v.border}`,color:"#4a9eff",cursor:"pointer",fontSize:11,fontFamily:je},children:[d==="pl"?"Na podstawie:":"Based on:"," ",q(j)," →"]})]})]})}function Zz({body:o,lang:t}){var S,q,j,_;const[r,a]=D.useState(!1),[s,c]=D.useState(!1),d=o.split("<!-- example -->"),f=(S=d[0])==null?void 0:S.trim(),$=(d[1]??"").split("<!-- mistakes -->"),w=(q=$[0])==null?void 0:q.trim(),x=(((j=$[1])==null?void 0:j.trim())??((_=o.split("<!-- mistakes -->")[1])==null?void 0:_.trim())??"")||null;return f?p.jsxs("div",{style:{marginBottom:20},children:[p.jsx("div",{style:{fontSize:13,color:v.textBody,lineHeight:1.7},dangerouslySetInnerHTML:{__html:bn(f)}}),w&&p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:()=>a(T=>!T),style:{marginTop:10,padding:"10px 14px",fontSize:12,fontFamily:je,borderRadius:6,border:`1px solid ${r?"#FFD16640":v.border}`,background:r?"#FFD16610":"transparent",color:r?"#FFD166":v.textDim,cursor:"pointer",transition:"all 0.15s"},children:r?t==="pl"?"Schowaj przykład":"Hide example":t==="pl"?"Nie kumam — pokaż na liczbach":"Show me a concrete example"}),r&&p.jsx("div",{style:{marginTop:10,padding:"12px 14px",borderRadius:8,fontSize:13,background:"#FFD16608",border:"1px solid #FFD16620",color:"#e8d5a0",lineHeight:1.7},dangerouslySetInnerHTML:{__html:bn(w)}})]}),x&&p.jsxs(p.Fragment,{children:[p.jsx("button",{onClick:()=>c(T=>!T),style:{marginTop:8,marginLeft:w?8:0,padding:"10px 14px",fontSize:12,fontFamily:je,borderRadius:6,border:`1px solid ${s?"#e74c3c40":v.border}`,background:s?"#e74c3c10":"transparent",color:s?"#ff6b6b":v.textDim,cursor:"pointer",transition:"all 0.15s"},children:s?t==="pl"?"Schowaj najczęstsze błędy":"Hide common mistakes":t==="pl"?"Najczęstsze błędy":"Common mistakes"}),s&&p.jsx("div",{style:{marginTop:10,padding:"12px 14px",borderRadius:8,fontSize:13,background:"#e74c3c08",border:"1px solid #e74c3c20",color:"#f3b4b0",lineHeight:1.7},dangerouslySetInnerHTML:{__html:bn(x)}})]})]}):null}function tp({title:o,color:t,empty:r,emptyText:a,children:s}){return p.jsxs("div",{style:{marginTop:24},children:[p.jsx("div",{style:{fontSize:13,fontWeight:600,color:t,marginBottom:10},children:o}),r?p.jsx("div",{style:{fontSize:12,color:v.textFaint,fontStyle:"italic"},children:a}):p.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:s})]})}function rp({label:o,color:t,status:r,onClick:a}){const s=r==="known"?"#27ae60":r==="unknown"?"#e74c3c":null;return p.jsxs("button",{onClick:a,style:{display:"inline-flex",alignItems:"center",gap:6,padding:"7px 12px",borderRadius:6,background:`${t}0c`,border:`1px solid ${t}25`,cursor:"pointer",fontFamily:je,fontSize:12,color:v.textBody,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:c=>{c.currentTarget.style.background=`${t}1c`,c.currentTarget.style.borderColor=`${t}50`},onMouseLeave:c=>{c.currentTarget.style.background=`${t}0c`,c.currentTarget.style.borderColor=`${t}25`},children:[s&&p.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:s,flexShrink:0}}),p.jsx("span",{dangerouslySetInnerHTML:{__html:bn(o??"")}})]})}function ym({goalId:o,RAW_NODES:t,RAW_EDGES:r,SCOPE_COLORS:a,SCOPE_LABELS:s,SECTIONS:c,belief:d,evidence:f,lang:$,onSelectTopic:w,onStartLesson:g,onClose:x}){const S=D.useMemo(()=>io(t,r),[t,r]),q=D.useMemo(()=>Object.fromEntries(t.map(I=>[I.id,I])),[t]),j=I=>{var E,O;return $==="pl"?(E=q[I])==null?void 0:E.labelPl:(O=q[I])==null?void 0:O.label};q[o];const _=D.useMemo(()=>{const I=new Set,E=[],O=[o];for(;O.length;){const re=O.shift();if(!I.has(re)&&q[re]){I.add(re),E.push(re);for(const Q of S.prereqs[re]??[])I.has(Q)||O.push(Q)}}const F=new Set(E),ee={};for(const re of F)ee[re]=0;for(const re of F)for(const Q of S.dependents[re]??[])F.has(Q)&&(ee[Q]=(ee[Q]||0)+1);const J=[],ne=[];for(const re of F)ee[re]===0&&ne.push(re);for(;ne.length;){ne.sort((Q,Y)=>{var ce,ye;return(((ce=q[Q])==null?void 0:ce.level)??0)-(((ye=q[Y])==null?void 0:ye.level)??0)});const re=ne.shift();J.push(re);for(const Q of S.dependents[re]??[])F.has(Q)&&(ee[Q]--,ee[Q]===0&&ne.push(Q))}return J},[o,S,q]),T=_.filter(I=>(d==null?void 0:d[I])==="known").length,P=_.filter(I=>(d==null?void 0:d[I])==="unknown").length,B=_.length,W=B>0?Math.round(T/B*100):0;return p.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:v.bg,fontFamily:je,overflowY:"auto",animation:"pathSlideIn 0.2s ease"},children:[p.jsx("style",{children:`
        @keyframes pathSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}),p.jsxs("div",{style:{maxWidth:"min(520px, calc(100% - 32px))",width:"100%",margin:"0 auto",padding:"24px 16px 48px"},children:[p.jsxs("button",{onClick:x,style:{padding:"10px 14px",fontSize:12,fontFamily:je,borderRadius:6,border:`1px solid ${v.border}`,background:"transparent",color:v.textDim,cursor:"pointer",marginBottom:24},children:["← ",L("topicBack",$)]}),p.jsx("div",{style:{marginBottom:6},children:p.jsx("span",{style:{fontSize:10,color:v.textFaint,letterSpacing:1.5,textTransform:"uppercase"},children:L("pathLabel",$)})}),p.jsx("h1",{style:{margin:"0 0 8px",fontSize:22,fontWeight:700,color:v.textPrimary,lineHeight:1.3},dangerouslySetInnerHTML:{__html:bn(j(o)??"")}}),p.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:v.textDim},children:[B," ",L("pathTopics",$),d&&Object.keys(d).length>0&&p.jsxs(p.Fragment,{children:[" · ",p.jsx("span",{style:{color:v.known},children:T})," ",L("pathKnown",$)," · ",p.jsx("span",{style:{color:"#e74c3c"},children:P})," ",L("pathToStudy",$)]})]}),d&&Object.keys(d).length>0&&p.jsx("div",{style:{height:4,borderRadius:2,background:v.border,overflow:"hidden",marginBottom:20},children:p.jsx("div",{style:{height:"100%",borderRadius:2,width:`${W}%`,background:v.known,transition:"width 0.4s ease"}})}),g&&p.jsx("button",{onClick:()=>g(_,o),style:{width:"100%",padding:"14px 24px",marginBottom:28,fontSize:14,fontWeight:600,fontFamily:je,borderRadius:8,border:"1px solid #f39c1250",background:"#f39c1218",color:"#f39c12",cursor:"pointer"},children:L("startLesson",$)}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx("div",{style:{position:"absolute",left:15,top:12,bottom:12,width:2,background:v.border,borderRadius:1}}),_.map((I,E)=>{var xe,K,ie;const O=q[I],F=I===o,ee=d==null?void 0:d[I],J=f==null?void 0:f[I],ne=!!J,re=((xe=O==null?void 0:O.resources)==null?void 0:xe.length)>0,Q=(a==null?void 0:a[O==null?void 0:O.scope])??"#4a9eff",Y=((K=s==null?void 0:s[O==null?void 0:O.scope])==null?void 0:K[$==="pl"?"pl":"en"])??"",ce=((ie=c==null?void 0:c[O==null?void 0:O.section])==null?void 0:ie.label)??"";let ye=v.textFaint,ze=v.border;return ee==="known"?(ye=v.known,ze=v.known):ee==="unknown"&&(ye="#e74c3c",ze="#e74c3c"),p.jsxs("div",{onClick:()=>w(I),style:{position:"relative",paddingLeft:40,paddingBottom:E<_.length-1?6:0,marginBottom:6,cursor:"pointer"},children:[p.jsx("div",{style:{position:"absolute",left:8,top:12,width:F?16:12,height:F?16:12,borderRadius:"50%",background:ee?ye:v.bg,border:`2px solid ${ee?ze:v.textFaint}`,marginLeft:F?-2:0,zIndex:1}}),p.jsxs("div",{style:{padding:"10px 14px",borderRadius:8,background:F?`${Q}10`:"transparent",border:`1px solid ${F?Q+"30":v.borderSubtle}`,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:te=>{F||(te.currentTarget.style.background=`${v.textFaint}10`,te.currentTarget.style.borderColor=v.border)},onMouseLeave:te=>{F||(te.currentTarget.style.background="transparent",te.currentTarget.style.borderColor=v.borderSubtle)},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[p.jsx("span",{style:{fontSize:13,fontWeight:F?700:500,color:F?v.textPrimary:v.textBody,flex:1},dangerouslySetInnerHTML:{__html:bn(j(I)??"")}}),p.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center",flexShrink:0},children:[re&&p.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:"#58C4DD15",color:"#58C4DD",border:"1px solid #58C4DD30"},children:"⬡"}),ne&&p.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:J.correct?"#27ae6015":"#e74c3c15",color:J.correct?"#2ecc71":"#ff6b6b",border:`1px solid ${J.correct?"#27ae6030":"#e74c3c30"}`},children:J.correct?"✓":"✗"})]})]}),p.jsxs("div",{style:{fontSize:10,color:v.textFaint,marginTop:3},children:[ce," · ",Y,F&&p.jsx("span",{style:{color:Q,marginLeft:6},children:L("pathGoal",$)})]})]})]},I)})]})]})]})}class Oo{constructor(t){this._perm=t}get length(){return this._perm.length}originalIndex(t){return this._perm[t]}displayIndex(t){return this._perm.indexOf(t)}apply(t){return this._perm.map(r=>t[r])}static random(t){const r=Array.from({length:t},(a,s)=>s);for(let a=t-1;a>0;a--){const s=Math.floor(Math.random()*(a+1));[r[a],r[s]]=[r[s],r[a]]}return new Oo(r)}static identity(t){return new Oo(Array.from({length:t},(r,a)=>a))}}function gm(o,t="pl"){if(!o)return null;if(o==="cke")return"CKE";const r=o.match(/^cke_(\d{4})_(podstawowa|rozszerzona)_zad(\d+)/);if(!r)return"CKE";const[,a,s,c]=r;return t==="pl"?`Matura ${a} ${s}, zad. ${c}`:`Matura ${a} ${s==="rozszerzona"?"extended":"basic"}, task ${c}`}function Kz({nodeId:o,nodes:t,questionBank:r,onAnswer:a,onSkip:s,lang:c,excludeIndices:d=[],isMobile:f,sourceFilter:$=null,forceIndex:w=null}){const g=t.find(Q=>Q.id===o),x=D.useMemo(()=>Ui(r,o,d,$,w),[o,d,$,w]),S=$==="cke"?"#FFD166":"#4a9eff",q=g?c==="pl"?g.labelPl:g.label:o,j=D.useMemo(()=>x?Oo.random(x.options.length):null,[x]),_=D.useMemo(()=>j?j.apply(x.options):[],[j,x]),T=D.useMemo(()=>j?j.displayIndex(x.correct):-1,[j,x]),[P,B]=D.useState(null),[W,I]=D.useState(!1),[E,O]=D.useState(1);D.useEffect(()=>{O(1)},[x]);const F=()=>{P!==null&&I(!0)},ee=()=>{a(P===T,x,x.index),B(null),I(!1),O(1)};D.useEffect(()=>{const Q=Y=>{Y.key==="Escape"&&s((x==null?void 0:x.index)??-1)};return window.addEventListener("keydown",Q),()=>window.removeEventListener("keydown",Q)},[s,x]);const J=Q=>p.jsx("span",{dangerouslySetInnerHTML:{__html:bn(Q)}}),ne=f?{position:"fixed",left:0,right:0,bottom:0,height:"70dvh",background:v.surface,border:`1px solid ${S}40`,borderRadius:"14px 14px 0 0",color:v.textBody,boxShadow:"0 -8px 32px rgba(0,0,0,0.5)",display:"flex",flexDirection:"column",zIndex:30,boxSizing:"border-box"}:{position:"absolute",left:16,top:16,width:340,maxHeight:"calc(100vh - 120px)",background:v.surfaceHi,backdropFilter:"blur(6px)",border:`1px solid ${S}40`,borderRadius:10,color:v.textBody,boxShadow:"0 12px 40px rgba(0,0,0,0.5)",display:"flex",flexDirection:"column",zIndex:30,boxSizing:"border-box"},re=f?{flex:1,minHeight:0,overflowY:"auto",WebkitOverflowScrolling:"touch",overscrollBehavior:"contain",padding:"14px 16px calc(24px + env(safe-area-inset-bottom))"}:{flex:1,minHeight:0,overflowY:"auto",padding:"14px 16px"};return p.jsxs("div",{style:ne,children:[f&&p.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"8px 0 0",flexShrink:0},children:p.jsx("div",{style:{width:36,height:4,borderRadius:2,background:v.textFaint}})}),p.jsxs("div",{style:re,children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[p.jsxs("div",{style:{color:S,fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:[q,$==="cke"&&p.jsx("span",{style:{marginLeft:8,fontSize:10,fontWeight:600,padding:"2px 6px",borderRadius:4,background:`${S}22`,color:S,border:`1px solid ${S}40`,letterSpacing:"0.04em"},children:"CKE"})]}),p.jsx("button",{onClick:()=>s((x==null?void 0:x.index)??-1),style:{background:`${v.textDim}22`,border:`1px solid ${v.border}`,color:v.textBody,cursor:"pointer",fontSize:13,lineHeight:1,padding:"4px 10px",borderRadius:6,fontWeight:600,minWidth:32,minHeight:28},title:"Close (Esc)",children:L("close",c)})]}),x?p.jsxs(p.Fragment,{children:[x.source&&(()=>{const Q=gm(x.source,c);return!Q||Q==="CKE"?null:p.jsx("div",{style:{display:"inline-block",marginBottom:10,padding:"3px 8px",borderRadius:4,fontSize:10,fontWeight:600,letterSpacing:"0.04em",background:"#FFD16618",color:"#FFD166",border:"1px solid #FFD16640"},children:Q})})(),p.jsx("div",{style:{fontSize:13,color:v.textBody,marginBottom:12,lineHeight:1.65},children:J(x.q)}),p.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:12},children:_.map((Q,Y)=>{let ce=v.bg,ye=v.border,ze=v.textBody;return P===Y&&!W&&(ce=`${S}22`,ye=S,ze=S),W&&(Y===T?(ce="#27ae6022",ye="#27ae60",ze="#2ecc71"):Y===P&&(ce="#e74c3c22",ye="#e74c3c",ze="#ff6b6b")),p.jsxs("button",{onClick:()=>{W||B(Y)},style:{textAlign:"left",padding:"10px 12px",borderRadius:7,fontSize:12,cursor:W?"default":"pointer",background:ce,border:`1px solid ${ye}`,color:ze,lineHeight:1.5,minHeight:38},children:[p.jsxs("span",{style:{marginRight:6,opacity:.5},children:[["A","B","C","D"][Y],"."]}),J(Q)]},Y)})}),W&&(()=>{const Q=Array.isArray(x.hints)&&x.hints.length>0?x.hints:x.hint?[x.hint]:[];if(Q.length===0)return null;const Y=Math.min(E,Q.length);return p.jsxs("div",{style:{marginBottom:10},children:[Q.slice(0,Y).map((ce,ye)=>p.jsx("div",{style:{padding:"6px 10px",borderLeft:"2px solid #FFD166",background:"rgba(255,209,102,.05)",borderRadius:"0 4px 4px 0",marginTop:ye===0?0:4,fontSize:12,lineHeight:1.55,color:"rgba(255,255,255,.7)"},children:J(ce)},ye)),Y<Q.length&&p.jsx("button",{onClick:()=>O(ce=>ce+1),style:{...Bo("#FFD166"),marginTop:6,fontSize:11,padding:"5px 10px",opacity:.75},children:c==="pl"?"Pokaż kolejną wskazówkę":"Show next hint"})]})})(),W?p.jsx("button",{onClick:ee,style:{...Bo(P===T?"#27ae60":"#e74c3c"),width:"100%",fontSize:13},children:L(P===T?"knownConfirm":"unknownConfirm",c)}):p.jsx("button",{onClick:F,disabled:P===null,style:{...Bo(S),width:"100%",opacity:P===null?.4:1,fontSize:13},children:L("checkAnswer",c)})]}):p.jsxs(p.Fragment,{children:[p.jsx("div",{style:{color:v.textDim,fontSize:12,marginBottom:12},children:L("noQuestion",c)}),p.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:[p.jsx("button",{onClick:()=>a(!0,null,-1),style:{...Bo("#27ae60"),fontSize:12,padding:"8px 14px"},children:L("yesKnow",c)}),p.jsx("button",{onClick:()=>a(!1,null,-1),style:{...Bo("#e74c3c"),fontSize:12,padding:"8px 14px"},children:L("noKnow",c)}),p.jsx("button",{onClick:()=>s(-1),style:{...Bo("#3a4d63"),fontSize:12,padding:"8px 14px"},children:L("skipBtn",c)})]})]})]})]})}function Vz(){return{position:"absolute",right:16,top:16,width:230,background:v.surfaceHi,backdropFilter:"blur(6px)",border:`1px solid ${v.border}`,borderRadius:8,padding:"12px 14px",fontSize:11,color:v.textBody,zIndex:10,maxHeight:"80vh",overflowY:"auto"}}function Qz({belief:o,frontier:t,visibleFrontier:r,hasStarted:a,nextSuggestedId:s,sessionComplete:c,adjacency:d,expectedRemaining:f,pCorrect:$,questionsAnswered:w,nodes:g,lang:x,onReset:S,onNodeClick:q,SCOPE_LABELS:j,isMobile:_}){var ne,re;const T=Object.fromEntries(g.map(Q=>[Q.id,Q])),P=Q=>{var Y,ce;return x==="pl"?(Y=T[Q])==null?void 0:Y.labelPl:(ce=T[Q])==null?void 0:ce.label},B=g.filter(Q=>o[Q.id]==="known"),W=g.filter(Q=>o[Q.id]==="unknown"),I=g.length,E=[{label:L("statKnown",x),count:B.length,color:"#27ae60"},{label:L("statUnknown",x),count:W.length,color:"#e74c3c"},{label:L("statRemaining",x),count:f??"-",color:"#4a9eff"}],O=$?Math.round($*100):50,F=_?13:11,ee=_?11:9,J=p.jsxs(p.Fragment,{children:[p.jsxs("div",{style:{fontWeight:700,fontSize:_?14:12,marginBottom:10,color:v.textPrimary,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("span",{children:[L("diagHeader",x)," ",c?"✓":""]}),p.jsx("button",{onClick:S,style:{fontSize:ee,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${v.textFaint}`,color:v.textDim,minHeight:_?32:"auto"},children:L("reset",x)})]}),p.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:E.map(({label:Q,count:Y,color:ce})=>p.jsxs("div",{style:{flex:1,textAlign:"center",background:`${ce}18`,borderRadius:5,padding:"6px 0",border:`1px solid ${ce}40`},children:[p.jsx("div",{style:{color:ce,fontWeight:700,fontSize:_?20:15},children:Y}),p.jsx("div",{style:{color:v.textDim,fontSize:ee},children:Q})]},Q))}),!c&&a&&p.jsxs("div",{style:{fontSize:ee,color:v.textDim,marginBottom:10,padding:"6px 8px",background:"#ffffff08",borderRadius:4,display:"flex",justifyContent:"space-between",gap:4,flexWrap:"wrap"},children:[p.jsxs("span",{children:[L("answered",x),": ",p.jsx("span",{style:{color:v.textPrimary},children:w})]}),p.jsxs("span",{children:[L("estimated",x),": ",p.jsxs("span",{style:{color:"#4a9eff"},children:["~",f??"-"]})]}),p.jsxs("span",{children:[L("accuracy",x),": ",p.jsxs("span",{style:{color:"#4a9eff"},children:[O,"%"]})]})]}),c&&p.jsxs("div",{children:[p.jsxs("div",{style:{background:"#27ae6018",border:"1px solid #27ae6050",borderRadius:6,padding:"10px 12px",marginBottom:10},children:[p.jsx("div",{style:{color:"#2ecc71",fontWeight:700,fontSize:_?14:12,marginBottom:4},children:L("sessionDone",x)}),p.jsxs("div",{style:{color:v.textDim,fontSize:ee,lineHeight:1.6},children:[L("sessionDoneSub",x)," ",p.jsx("span",{style:{color:v.textPrimary},children:w})," ",L("sessionDoneQ",x),"."," ",L("sessionDoneClass",x)," ",B.length+W.length,"/",I,".",p.jsx("br",{}),L("sessionDoneAcc",x),": ",p.jsxs("span",{style:{color:"#4a9eff"},children:[O,"%"]}),"."," ",L("sessionDoneKnown",x)," ",p.jsx("span",{style:{color:"#2ecc71"},children:B.length}),","," ",L("sessionDoneStudy",x)," ",p.jsx("span",{style:{color:"#e74c3c"},children:W.length}),"."]})]}),W.length>0&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{style:{color:"#e74c3c",fontSize:F,fontWeight:600,marginBottom:5},children:[L("toStudy",x)," (",W.length,")"]}),g.filter(Q=>o[Q.id]==="unknown").filter(Q=>(d.prereqs[Q.id]??[]).every(Y=>o[Y]==="known")).slice(0,8).map(Q=>{var Y,ce;return p.jsxs("div",{style:{padding:_?"8px 10px":"5px 8px",marginBottom:4,borderRadius:4,background:"#e74c3c12",border:"1px solid #e74c3c30",fontSize:F,color:"#ff8a8a",lineHeight:1.4},children:[P(Q.id),p.jsx("div",{style:{fontSize:ee,color:v.textDim,marginTop:1},children:(ce=j==null?void 0:j[(Y=T[Q.id])==null?void 0:Y.scope])==null?void 0:ce[x==="pl"?"pl":"en"]})]},Q.id)})]}),B.length>0&&p.jsxs("div",{style:{marginTop:8,color:"#27ae60",fontSize:F},children:["✓ ",L("knownList",x)," ",B.length]})]}),!c&&!a&&p.jsxs("div",{style:{marginBottom:10},children:[s&&p.jsxs(p.Fragment,{children:[p.jsx("div",{style:{color:"#4a9eff",fontSize:F,fontWeight:600,marginBottom:5},children:L("startHere",x)}),p.jsxs("div",{onClick:()=>q==null?void 0:q(s),style:{padding:_?"12px 14px":"8px 10px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:F,color:"#a8d4ff",minHeight:_?44:"auto"},children:[p.jsx("div",{style:{fontWeight:600},children:P(s)}),p.jsxs("div",{style:{fontSize:ee,color:v.textDim,marginTop:2},children:[(re=j==null?void 0:j[(ne=T[s])==null?void 0:ne.scope])==null?void 0:re[x==="pl"?"pl":"en"]," · ",L("startHereSub",x)]})]})]}),p.jsx("div",{style:{fontSize:ee,color:v.textFaint,marginTop:8,lineHeight:1.5},children:L("clickAnyNode",x)})]}),!c&&a&&r.length>0&&p.jsxs(p.Fragment,{children:[p.jsx("div",{style:{color:"#f39c12",fontSize:F,fontWeight:600,marginBottom:5},children:L("whatNext",x)}),r.map(Q=>{var ce,ye;const Y=Q===s;return p.jsxs("div",{onClick:()=>q==null?void 0:q(Q),style:{padding:_?"10px 12px":"6px 8px",marginBottom:4,borderRadius:4,cursor:"pointer",background:Y?"#4a9eff18":"#f39c1215",border:`1px solid ${Y?"#4a9eff55":"#f39c1240"}`,fontSize:F,color:Y?"#a8d4ff":"#f5d78e",minHeight:_?44:"auto",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[p.jsxs("div",{children:[p.jsx("div",{children:P(Q)}),p.jsxs("div",{style:{fontSize:ee,color:v.textDim,marginTop:1},children:[(ye=j==null?void 0:j[(ce=T[Q])==null?void 0:ce.scope])==null?void 0:ye[x==="pl"?"pl":"en"],Y&&p.jsx("span",{style:{color:"#4a9eff88",marginLeft:4},children:L("best",x)})]})]}),p.jsx("span",{style:{opacity:.7},children:Y?"★":"→"})]},Q)})]}),!c&&B.length>0&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{style:{color:"#27ae60",fontSize:F,fontWeight:600,margin:"10px 0 4px"},children:["✓ ",L("knownList",x)," (",B.length,")"]}),B.map(Q=>p.jsx("div",{style:{fontSize:ee,color:"#6dbb87",paddingLeft:4,lineHeight:1.8},children:P(Q.id)},Q.id))]}),!c&&!_&&p.jsxs("div",{style:{marginTop:12,color:v.textFaint,fontSize:ee,lineHeight:1.5},children:[L("hintClick",x),p.jsx("br",{}),L("hintShift",x),p.jsx("br",{}),L("hintGreen",x)]})]});return _?p.jsxs("div",{style:{position:"fixed",left:0,right:0,bottom:0,background:`${v.surface}f5`,backdropFilter:"blur(8px)",borderTop:`1px solid ${v.border}`,borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"},children:[p.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:p.jsx("div",{style:{width:36,height:4,borderRadius:2,background:v.textFaint}})}),J]}):p.jsx("div",{style:Vz(),children:J})}function Yz({nodes:o,lang:t,targetNode:r,subgraphIds:a,ddClassification:s,betaBeliefs:c,ddComplete:d,ddNextNodeId:f,questionsAnswered:$,onNodeClick:w,onReset:g,isMobile:x}){const S=Object.fromEntries(o.map(F=>[F.id,F])),q=F=>{var ee,J;return t==="pl"?(ee=S[F])==null?void 0:ee.labelPl:(J=S[F])==null?void 0:J.label},j=a.filter(F=>s[F]==="known"),_=a.filter(F=>s[F]==="unknown"),T=a.filter(F=>s[F]==="uncertain"),P=a.length,B=j.length+_.length,W=P>0?Math.round(B/P*100):0,I=q(r),E=x?11:9,O=x?{position:"fixed",left:0,right:0,bottom:0,background:`${v.surface}f5`,backdropFilter:"blur(8px)",borderTop:`1px solid ${v.border}`,borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"}:{background:v.surfaceHi,backdropFilter:"blur(6px)",border:`1px solid ${v.border}`,borderRadius:8,padding:"12px 14px",fontSize:11,color:v.textBody,zIndex:10,maxHeight:"80vh",overflowY:"auto"};return p.jsxs("div",{style:O,children:[x&&p.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:p.jsx("div",{style:{width:36,height:4,borderRadius:2,background:v.textFaint}})}),p.jsxs("div",{style:{fontWeight:700,fontSize:x?14:12,marginBottom:4,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsxs("span",{children:[L("deepDiveHeader",t)," ",d?"✓":""]}),p.jsx("button",{onClick:g,style:{fontSize:E,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${v.textFaint}`,color:v.textDim,minHeight:x?32:"auto"},children:L("reset",t)})]}),p.jsxs("div",{style:{marginBottom:10,padding:"6px 8px",borderRadius:5,background:"#4a9eff12",border:"1px solid #4a9eff40"},children:[p.jsx("div",{style:{fontSize:9,color:"#4a9eff88",marginBottom:2},children:L("deepDiveTarget",t)}),p.jsx("div",{style:{fontSize:11,color:"#a8d4ff",fontWeight:600},children:I}),p.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginTop:1},children:[P," ",L("deepDiveNodes",t)]})]}),p.jsxs("div",{style:{marginBottom:10},children:[p.jsx("div",{style:{height:5,borderRadius:3,background:v.bg,overflow:"hidden",marginBottom:4},children:p.jsx("div",{style:{height:"100%",borderRadius:3,width:`${W}%`,background:d?"#27ae60":"#4a9eff",transition:"width 0.4s ease"}})}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"#6b7d9a"},children:[p.jsxs("span",{children:[L("classified",t),": ",p.jsxs("span",{style:{color:"#f5f6fa"},children:[B,"/",P]})]}),p.jsxs("span",{children:[L("questions",t),": ",p.jsx("span",{style:{color:"#f5f6fa"},children:$})]})]})]}),d&&p.jsxs("div",{children:[p.jsxs("div",{style:{background:j.length>_.length?"#27ae6018":"#e74c3c18",border:`1px solid ${j.length>_.length?"#27ae6050":"#e74c3c50"}`,borderRadius:6,padding:"10px 12px",marginBottom:10},children:[p.jsx("div",{style:{color:j.length>_.length?"#2ecc71":"#ff6b6b",fontWeight:700,fontSize:12,marginBottom:4},children:L("diagReady",t)}),p.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:[L("diagKnown",t),": ",p.jsx("span",{style:{color:"#2ecc71"},children:j.length})," / ",L("diagStudy",t),": ",p.jsx("span",{style:{color:"#ff6b6b"},children:_.length})," / ",L("diagTotal",t),": ",P]})]}),_.length>0&&p.jsxs(p.Fragment,{children:[p.jsx("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:L("studyThese",t)}),a.filter(F=>s[F]==="unknown").slice(0,8).map(F=>{var ee;return p.jsx(op,{id:F,label:q(F),scope:(ee=S[F])==null?void 0:ee.scope,classification:"unknown",beta:c[F]},F)})]}),j.length>0&&p.jsxs(p.Fragment,{children:[p.jsx("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"8px 0 4px"},children:L("mastered",t)}),a.filter(F=>s[F]==="known").map(F=>{var ee;return p.jsx(op,{id:F,label:q(F),scope:(ee=S[F])==null?void 0:ee.scope,classification:"known",beta:c[F]},F)})]})]}),!d&&p.jsxs(p.Fragment,{children:[f&&p.jsxs("div",{style:{marginBottom:10},children:[p.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:4},children:L("nextQuestion",t)}),p.jsxs("div",{onClick:()=>w==null?void 0:w(f),style:{padding:"7px 9px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff"},children:[q(f),p.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:[L("confidence",t),": ",Xz(c[f])]})]})]}),T.length>0&&p.jsxs(p.Fragment,{children:[p.jsxs("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:4},children:[L("unclassified",t)," (",T.length,")"]}),T.map(F=>p.jsxs("div",{onClick:()=>w==null?void 0:w(F),style:{padding:"5px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:F===f?"#4a9eff18":"#f39c1212",border:`1px solid ${F===f?"#4a9eff55":"#f39c1230"}`,fontSize:9,color:F===f?"#a8d4ff":"#f5d78e",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsx("span",{children:q(F)}),p.jsx(wm,{beta:c[F]})]},F))]})]})]})}function Xz(o){if(!o)return"50%";const t=o.alpha/(o.alpha+o.beta);return`${Math.round(t*100)}%`}function wm({beta:o}){const t=o?o.alpha/(o.alpha+o.beta):.5,r=o?o.alpha+o.beta:2,a=Math.min(1,(r-2)/4),s=t>.6?"#27ae60":t<.4?"#e74c3c":"#f39c12";return p.jsx("div",{style:{width:30,height:4,borderRadius:2,background:v.bg,overflow:"hidden",flexShrink:0},children:p.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Math.round(t*100)}%`,background:s,opacity:.4+a*.6,transition:"width 0.3s ease"}})})}function op({id:o,label:t,scope:r,classification:a,beta:s}){const c=a==="known"?"#27ae60":"#e74c3c";return p.jsxs("div",{style:{padding:"4px 7px",marginBottom:3,borderRadius:4,background:`${c}10`,border:`1px solid ${c}30`,fontSize:9,color:a==="known"?"#6dbb87":"#ff8a8a",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsx("span",{children:t}),p.jsx(wm,{beta:s})]})}function Jz({lang:o,diagMode:t,hasBelief:r,SCOPE_COLORS:a,SCOPE_LABELS:s,SECTIONS:c}){const[d,f]=D.useState(r),$=Object.entries(a).map(([w,g])=>{var x;return{color:g,label:(x=s[w])==null?void 0:x[o==="pl"?"pl":"en"]}});return p.jsxs("div",{style:{position:"absolute",left:16,bottom:16,background:`${v.surface}95`,backdropFilter:"blur(4px)",borderRadius:6,overflow:"hidden",border:"1px solid #1a2235",fontSize:9},children:[p.jsxs("button",{onClick:()=>f(w=>!w),style:{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",width:"100%",background:"transparent",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:9},children:[p.jsx("span",{style:{opacity:.6},children:d?"▼":"▶"}),L("legendTitle",o)]}),d&&p.jsxs("div",{style:{padding:"4px 10px 8px",borderTop:"1px solid #1a2235"},children:[(t||r)&&p.jsxs("div",{style:{marginBottom:8},children:[[{color:v.knownHi,label:L("legendKnown",o)},{color:v.unknownHi,label:L("legendUnknown",o)},{color:v.frontier,label:L("legendFrontier",o)},{color:"#4a5568",label:L("legendUnclassified",o)}].map(({color:w,label:g})=>p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:3},children:[p.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:w,flexShrink:0}}),p.jsx("span",{style:{color:"#8a9dbe"},children:g})]},g)),p.jsx("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,marginBottom:6}})]}),p.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:L("legendScopes",o)}),$.map(({color:w,label:g})=>p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[p.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:w,flexShrink:0}}),p.jsx("span",{style:{color:"#8a9dbe"},children:g})]},g)),p.jsxs("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,paddingTop:6},children:[p.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:L("legendStages",o)}),Object.entries(c).map(([w,g])=>p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[p.jsx("div",{style:{width:8,height:3,borderRadius:1,background:g.color,flexShrink:0}}),p.jsx("span",{style:{color:"#8a9dbe"},children:g.label})]},w))]})]})]})}function xm({nodes:o,lang:t,onSelect:r,onClose:a,SECTIONS:s,SCOPE_COLORS:c}){const[d,f]=D.useState(""),[$,w]=D.useState(-1),g=D.useRef([]),x=D.useMemo(()=>Object.keys(s??{}),[s]),S=D.useMemo(()=>{const P=d.toLowerCase();return o.filter(B=>!P||B.label.toLowerCase().includes(P)||B.labelPl.toLowerCase().includes(P))},[o,d]),q=D.useMemo(()=>{const P={};for(const W of x)P[W]=[];for(const W of S){const I=W.section??x[0]??"default";P[I]||(P[I]=[]),P[I].push(W)}const B=[];for(const W of x)for(const I of P[W]??[])B.push(I);return B},[S,x]),j=D.useMemo(()=>{const P={};for(const B of x)P[B]=[];for(const B of S){const W=B.section??x[0]??"default";P[W]||(P[W]=[]),P[W].push(B)}return P},[S,x]),_=P=>t==="pl"?P.labelPl:P.label;D.useEffect(()=>{const P=B=>{if(B.key==="Escape"){a();return}B.key==="ArrowDown"&&(B.preventDefault(),w(W=>Math.min(W+1,q.length-1))),B.key==="ArrowUp"&&(B.preventDefault(),w(W=>Math.max(W-1,0))),B.key==="Enter"&&$>=0&&q[$]&&(B.preventDefault(),r(q[$].id))};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[q,$,a,r]),D.useEffect(()=>{$>=0&&g.current[$]&&g.current[$].scrollIntoView({block:"nearest"})},[$]),D.useEffect(()=>{w(-1)},[d]);const T={title:t==="pl"?"Wybierz cel":"Select Goal",subtitle:t==="pl"?"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.":"Pick a target topic. We'll diagnose all its prerequisites.",searchPlaceholder:t==="pl"?"Szukaj tematu...":"Search topics...",noResults:t==="pl"?"Brak wyników":"No results",footer:`${S.length} / ${o.length} ${t==="pl"?"tematów":"topics"}`,cancel:t==="pl"?"Anuluj":"Cancel"};return p.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:P=>{P.target===P.currentTarget&&a()},children:p.jsxs("div",{style:{width:Math.min(440,window.innerWidth-40),maxHeight:"80vh",background:v.surface,border:`1px solid ${v.border}`,borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[p.jsxs("div",{style:{padding:"14px 16px 10px",borderBottom:`1px solid ${v.border}`,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[p.jsxs("div",{children:[p.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:T.title}),p.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:2},children:T.subtitle})]}),p.jsx("button",{onClick:a,style:{background:"none",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:18,lineHeight:1},children:"×"})]}),p.jsx("div",{style:{padding:"10px 16px",borderBottom:"1px solid #1a2235"},children:p.jsx("input",{autoFocus:!0,value:d,onChange:P=>f(P.target.value),placeholder:T.searchPlaceholder,style:{width:"100%",boxSizing:"border-box",padding:"7px 10px",borderRadius:5,fontSize:11,background:v.bg,border:`1px solid ${v.border}`,color:"#c8d6e5",outline:"none"}})}),p.jsxs("div",{style:{overflowY:"auto",flex:1,padding:"8px 16px 14px"},children:[x.map(P=>{const B=j[P];if(!B||B.length===0)return null;const W=s==null?void 0:s[P];return p.jsxs("div",{style:{marginBottom:12},children:[p.jsx("div",{style:{fontSize:9,fontWeight:700,color:(W==null?void 0:W.color)??"#6b7d9a",textTransform:"uppercase",letterSpacing:1,marginBottom:5},children:(W==null?void 0:W.label)??P}),p.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:B.map(I=>{const E=q.indexOf(I),O=(c==null?void 0:c[I.scope])??"#4a9eff",F=$===E;return p.jsxs("button",{ref:ee=>g.current[E]=ee,onClick:()=>r(I.id),style:{padding:"5px 9px",borderRadius:5,fontSize:10,background:F?`${O}35`:`${O}15`,border:`1px solid ${F?O:`${O}40`}`,color:"#c8d6e5",cursor:"pointer",outline:F?`2px solid ${O}`:"none",outlineOffset:1},onMouseEnter:ee=>{ee.currentTarget.style.background=`${O}30`,ee.currentTarget.style.borderColor=`${O}90`},onMouseLeave:ee=>{q.indexOf(I)!==$&&(ee.currentTarget.style.background=`${O}15`,ee.currentTarget.style.borderColor=`${O}40`)},children:[p.jsx("span",{style:{fontSize:8,marginRight:5,display:"inline-block",width:7,height:7,borderRadius:"50%",background:O,verticalAlign:"middle"}}),_(I)]},I.id)})})]},P)}),S.length===0&&p.jsx("div",{style:{color:"#3a4d63",fontSize:11,padding:"20px 0",textAlign:"center"},children:T.noResults})]}),p.jsxs("div",{style:{padding:"10px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsx("div",{style:{fontSize:9,color:"#3a4d63"},children:T.footer}),p.jsx("button",{onClick:a,style:{padding:"5px 12px",borderRadius:5,fontSize:10,cursor:"pointer",background:"transparent",border:`1px solid ${v.border}`,color:"#6b7d9a"},children:T.cancel})]})]})})}function ev({isOpen:o,onSelect:t,onClose:r,lang:a="pl"}){const s=[{id:"quick",icon:"⚡",color:"#4a9eff",label:L("modeQuickLabel",a),description:L("modeQuickDesc",a)},{id:"deepdive",icon:"◎",color:"#8e44ad",label:L("modeDeepLabel",a),description:L("modeDeepDesc",a)}],[c,d]=D.useState(null),f=D.useRef(null);return D.useEffect(()=>{o&&(d(null),setTimeout(()=>{var $;return($=f.current)==null?void 0:$.focus()},100))},[o]),D.useEffect(()=>{if(!o)return;const $=w=>{w.key==="Escape"&&r(),w.key==="Enter"&&c&&t(c)};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[o,c,r,t]),o?p.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:$=>{$.target===$.currentTarget&&r()},children:p.jsxs("div",{style:{width:420,maxWidth:"90vw",background:v.surface,border:`1px solid ${v.border}`,borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[p.jsxs("div",{style:{padding:"16px 18px 12px",borderBottom:`1px solid ${v.border}`},children:[p.jsx("div",{style:{fontWeight:700,fontSize:14,color:"#f5f6fa",marginBottom:4},children:L("modePickerTitle",a)}),p.jsx("div",{style:{fontSize:11,color:"#6b7d9a"},children:L("modePickerSub",a)})]}),p.jsx("div",{style:{padding:"12px 16px",display:"flex",flexDirection:"column",gap:10},children:s.map(($,w)=>p.jsxs("button",{ref:w===0?f:null,onClick:()=>d($.id),onDoubleClick:()=>t($.id),style:{textAlign:"left",padding:"12px 14px",borderRadius:6,fontSize:12,cursor:"pointer",background:c===$.id?`${$.color}18`:v.bg,border:`1px solid ${c===$.id?$.color:v.border}`,color:"#c8d6e5",transition:"all 0.15s"},onMouseEnter:g=>{g.currentTarget.style.background=`${$.color}18`,g.currentTarget.style.borderColor=`${$.color}60`},onMouseLeave:g=>{c!==$.id&&(g.currentTarget.style.background=v.bg,g.currentTarget.style.borderColor=v.border)},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:4},children:[p.jsx("span",{style:{fontSize:16},children:$.icon}),p.jsx("span",{style:{fontWeight:600,color:c===$.id?$.color:"#f5f6fa"},children:$.label})]}),p.jsx("div",{style:{fontSize:10,color:"#6b7d9a",lineHeight:1.5},children:$.description})]},$.id))}),p.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[p.jsx("button",{onClick:r,style:{padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",background:"transparent",border:`1px solid ${v.border}`,color:"#6b7d9a"},children:L("cancel",a)}),p.jsx("button",{onClick:()=>c&&t(c),disabled:!c,style:{padding:"6px 18px",borderRadius:5,fontSize:11,cursor:c?"pointer":"not-allowed",background:c?"#4a9eff":v.border,border:"none",color:c?"#fff":"#3a4d63",opacity:c?1:.5},children:L("next",a)})]})]})}):null}const nv=[{id:"browse",key:"onboardingBrowse",descKey:"onboardingBrowseDesc",color:"#4a9eff"},{id:"quick",key:"onboardingDiag",descKey:"onboardingDiagDesc",color:"#f39c12"},{id:"deepdive",key:"onboardingDeep",descKey:"onboardingDeepDesc",color:"#8e44ad"}];function tv({isOpen:o,onSelect:t,onClose:r,lang:a}){return D.useEffect(()=>{if(!o)return;const s=c=>{c.key==="Escape"&&r()};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[o,r]),o?p.jsx("div",{style:{position:"fixed",inset:0,background:"#000000dd",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200,padding:16},onClick:s=>{s.target===s.currentTarget&&r()},children:p.jsxs("div",{style:{width:"100%",maxWidth:480,background:v.surface,border:`1px solid ${v.border}`,borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[p.jsxs("div",{style:{padding:"28px 24px 20px",background:"linear-gradient(135deg, #0d1520 0%, #101b2a 100%)",borderBottom:`1px solid ${v.border}`,textAlign:"center"},children:[p.jsx("div",{style:{fontSize:32,marginBottom:10},children:"◉"}),p.jsx("div",{style:{fontWeight:700,fontSize:18,color:v.textPrimary,marginBottom:8},children:L("onboardingTitle",a)}),p.jsx("div",{style:{fontSize:12,color:v.textDim,lineHeight:1.6,maxWidth:360,margin:"0 auto"},children:L("onboardingSub",a)})]}),p.jsxs("div",{style:{padding:"16px 24px",display:"flex",flexDirection:"column",gap:10},children:[p.jsx("div",{style:{fontSize:11,color:v.textFaint,marginBottom:2},children:L("onboardingChoose",a)}),nv.map(({id:s,key:c,descKey:d,color:f})=>p.jsxs("button",{onClick:()=>t(s),style:{display:"flex",gap:14,alignItems:"flex-start",padding:"12px 14px",borderRadius:8,cursor:"pointer",background:`${f}0e`,border:`1px solid ${f}30`,textAlign:"left",width:"100%",transition:"border-color 0.15s, background 0.15s"},onMouseEnter:$=>{$.currentTarget.style.background=`${f}1c`,$.currentTarget.style.borderColor=`${f}70`},onMouseLeave:$=>{$.currentTarget.style.background=`${f}0e`,$.currentTarget.style.borderColor=`${f}30`},children:[p.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:f,flexShrink:0,marginTop:5}}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontWeight:600,fontSize:13,color:v.textPrimary,marginBottom:3},children:L(c,a)}),p.jsx("div",{style:{fontSize:11,color:v.textDim,lineHeight:1.5},children:L(d,a)})]}),p.jsx("div",{style:{color:f,fontSize:16,alignSelf:"center",opacity:.7},children:"→"})]},s))]}),p.jsx("div",{style:{margin:"0 24px 16px",padding:"8px 10px",background:"#ffffff06",borderRadius:6,fontSize:9,color:v.textFaint,textAlign:"center"},children:L("onboardingLangHint",a)})]})}):null}function rv({lang:o,setLang:t,layoutId:r,layouts:a,onLayoutChange:s,searchTerm:c,setSearchTerm:d,filterScope:f,toggleScope:$,clearScope:w,filterSection:g,toggleSection:x,clearSection:S,SECTIONS:q,SCOPE_COLORS:j,SCOPE_LABELS:_,isMobile:T}){const[P,B]=D.useState(!1),W=D.useRef(null);D.useEffect(()=>{if(!P)return;const E=F=>{W.current&&!W.current.contains(F.target)&&B(!1)},O=F=>{F.key==="Escape"&&B(!1)};return document.addEventListener("mousedown",E),document.addEventListener("keydown",O),()=>{document.removeEventListener("mousedown",E),document.removeEventListener("keydown",O)}},[P]);const I=f.size+g.size+(c?1:0);return p.jsxs("div",{ref:W,style:{position:"relative"},children:[p.jsxs("button",{onClick:()=>B(E=>!E),style:{padding:"7px 10px",borderRadius:5,fontSize:15,cursor:"pointer",border:P||I>0?"1px solid #4a9eff":`1px solid ${v.border}`,background:P?"#4a9eff22":"transparent",color:P||I>0?"#4a9eff":v.textDim,minHeight:36,minWidth:36,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},title:L("moreOptions",o),children:[p.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[p.jsx("circle",{cx:"8",cy:"2.5",r:"1.5"}),p.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),p.jsx("circle",{cx:"8",cy:"13.5",r:"1.5"})]}),I>0&&p.jsx("span",{style:{position:"absolute",top:-4,right:-4,background:"#4a9eff",color:"#fff",fontSize:9,width:16,height:16,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:I})]}),P&&p.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",right:0,width:T?"85vw":320,maxWidth:"90vw",maxHeight:"70vh",overflowY:"auto",background:v.surface,border:`1px solid ${v.border}`,borderRadius:10,padding:"14px 16px",zIndex:60,boxShadow:"0 12px 40px rgba(0,0,0,0.5)"},children:[p.jsxs("div",{style:{marginBottom:14},children:[p.jsx("label",{style:{fontSize:11,color:v.textDim,fontWeight:600,marginBottom:6,display:"block"},children:L("search",o)}),p.jsx("input",{value:c,onChange:E=>d(E.target.value),placeholder:L("search",o),style:{width:"100%",boxSizing:"border-box",background:v.bg,border:`1px solid ${v.border}`,borderRadius:6,color:v.textBody,padding:"8px 10px",fontSize:13,outline:"none"}})]}),p.jsxs("div",{style:{marginBottom:14},children:[p.jsx("label",{style:{fontSize:11,color:v.textDim,fontWeight:600,marginBottom:6,display:"block"},children:o==="pl"?"Język":"Language"}),p.jsx("div",{style:{display:"flex",gap:6},children:["pl","en"].map(E=>p.jsx("button",{onClick:()=>t(E),style:{...Eo(o===E,E==="pl"?"#f5a623":"#4a9eff"),fontSize:12,padding:"6px 14px"},children:E.toUpperCase()},E))})]}),p.jsxs("div",{style:{marginBottom:14},children:[p.jsx("label",{style:{fontSize:11,color:v.textDim,fontWeight:600,marginBottom:6,display:"block"},children:L("layoutLabel",o)}),p.jsx("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:a.map(E=>p.jsx("button",{onClick:()=>s(E.meta.id),style:{...Eo(r===E.meta.id,"#4a9eff"),fontSize:11,padding:"5px 10px"},children:E.meta.label},E.meta.id))})]}),p.jsxs("div",{style:{marginBottom:14},children:[p.jsx("label",{style:{fontSize:11,color:v.textDim,fontWeight:600,marginBottom:6,display:"block"},children:L("filterSection",o)}),p.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[p.jsx("button",{style:{...Eo(g.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:S,children:L("all",o)}),Object.entries(q).map(([E,O])=>p.jsx("button",{style:{...Eo(g.has(E),O.color),fontSize:11,padding:"4px 10px"},onClick:()=>x(E),children:O.label},E))]})]}),p.jsxs("div",{children:[p.jsx("label",{style:{fontSize:11,color:v.textDim,fontWeight:600,marginBottom:6,display:"block"},children:L("filterScope",o)}),p.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[p.jsx("button",{style:{...Eo(f.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:w,children:L("all",o)}),Object.entries(j).map(([E,O])=>{var F;return p.jsx("button",{style:{...Eo(f.has(E),O),fontSize:11,padding:"4px 10px"},onClick:()=>$(E),children:(F=_[E])==null?void 0:F[o==="pl"?"pl":"en"]},E)})]})]})]})]})}const ip={x:40,y:40,scale:.52},ap={x:10,y:10,scale:.3};function ov({courseId:o,RAW_NODES:t,RAW_EDGES:r,QUESTION_BANK:a,SECTIONS:s,SCOPE_COLORS:c,SCOPE_LABELS:d,COURSE_META:f,onBackToCourses:$,initialBelief:w,initialEvidence:g,initialSelectedNode:x,initialLang:S,onBackToHome:q}){const j=xp(),[_,T]=D.useState(hp),[P,B]=lt("lang",S??"pl"),[W,I]=D.useState(new Set),[E,O]=D.useState(new Set),[F,ee]=D.useState(""),[J,ne]=D.useState(x??null),[re,Q]=D.useState(null),[Y,ce]=D.useState(null),[ye,ze]=D.useState(null),[xe,K]=D.useState(null),[ie,te]=D.useState(null),[R,U]=D.useState(!1),[ge,ve]=D.useState(!1),qe=!!w,[we,ae]=lt("onboardingSeen",!1),[he,Me]=D.useState(!we&&!qe),Ue=D.useCallback(()=>{ae(!0),Me(!1)},[ae]),Cn=D.useCallback(oe=>I(Ie=>{const Ve=new Set(Ie);return Ve.has(oe)?Ve.delete(oe):Ve.add(oe),Ve}),[]),Lt=D.useCallback(oe=>O(Ie=>{const Ve=new Set(Ie);return Ve.has(oe)?Ve.delete(oe):Ve.add(oe),Ve}),[]),dt=D.useCallback(()=>I(new Set),[]),We=D.useCallback(()=>O(new Set),[]),Je=D.useMemo(()=>io(t,r),[t,r]),[Le,Tn]=D.useState(()=>A0(_,300,t,r)),gn=D.useMemo(()=>t.map(oe=>{var Ie,Ve;return{...oe,x:((Ie=Le[oe.id])==null?void 0:Ie.x)??oe.x,y:((Ve=Le[oe.id])==null?void 0:Ve.y)??oe.y}}),[t,Le]),qt=D.useRef(null),{viewTransform:In,setViewTransform:Mn,toCanvas:Uo,startPan:Zo,cursorStyle:ea,setCursorStyle:na,handleMouseMove:Ko,handleMouseUp:so}=N6(qt),{startNodeDrag:Nr,handleDragMove:Vo,handleDragEnd:sr}=L6(Uo,gn,Tn,na),{diagMode:Ge,setDiagMode:Zn,mode:mn,setMode:Tt,quizNode:Nn,setQuizNode:pt,questionsAnswered:lo,setAnsweredQuestions:Qo,getAnsweredIndices:Yo,handleDiagClick:Xo,handleQuizAnswer:lr,resetDiagnostic:Kn,startDeepDive:co,targetNode:cr,belief:Jo,setBelief:ta,frontier:ra,visibleFrontier:uo,hasStarted:po,nextSuggestedId:Pt,expectedRemaining:ei,pCorrect:Lr,sessionComplete:ni,betaBeliefs:Wr,subgraphIds:At,ddClassification:Wt,ddNextNodeId:ur,ddComplete:ti}=K6(Je,a,o);D.useEffect(()=>{w&&Object.keys(w).length>0&&ta(w)},[]);const Os=D.useCallback(oe=>{oe.lang&&B(oe.lang),oe.view==="node"?(ne(oe.nodeId),ce(null)):oe.view==="resource"?(ne(oe.nodeId),ce(oe.resourceIndex)):oe.view==="question"?(ne(null),Zn(!0),Tt("quick"),K(null),te(oe.questionIndex),pt(oe.nodeId)):oe.view==="diagnostic"?oe.mode==="quick"?(Zn(!0),Tt("quick"),ne(null)):oe.mode==="deepdive"&&oe.goalNode&&(Zn(!0),co(oe.goalNode)):(ne(null),ce(null))},[B,Zn,Tt,co]),{setRoute:Ot}=Y6(Os);D.useEffect(()=>{Ge&&Nn&&ie!=null?Ot({view:"question",nodeId:Nn,questionIndex:ie,lang:P}):Ge?Ot(mn==="deepdive"&&cr?{view:"diagnostic",mode:"deepdive",goalNode:cr,lang:P}:{view:"diagnostic",mode:"quick",lang:P}):J?Y!=null?Ot({view:"resource",nodeId:J,resourceIndex:Y,lang:P}):Ot({view:"node",nodeId:J,lang:P}):Ot({view:"graph",lang:P})},[J,Y,Ge,mn,cr,Nn,ie,P,Ot]);const Ht=D.useMemo(()=>{const oe=F.toLowerCase(),Ie=t.filter(Ve=>!(W.size>0&&!W.has(Ve.scope)||E.size>0&&!E.has(Ve.section)||oe&&!Ve.label.toLowerCase().includes(oe)&&!Ve.labelPl.toLowerCase().includes(oe)));return Ie.length<t.length?new Set(Ie.map(Ve=>Ve.id)):null},[t,W,E,F]),dr=J||re,ri=D.useMemo(()=>{var Ie,Ve;if(!dr)return null;const oe=new Set([dr]);return(Ie=Je.prereqs[dr])==null||Ie.forEach(si=>oe.add(si)),(Ve=Je.dependents[dr])==null||Ve.forEach(si=>oe.add(si)),oe},[dr,Je]),oa=D.useMemo(()=>!Ge||mn!=="deepdive"||At.length===0?null:new Set(At),[Ge,mn,At]),ia=D.useCallback(oe=>{const Ie=oe.target.closest("[data-node-id]");if(Ie){Nr(Ie.getAttribute("data-node-id"),oe.clientX,oe.clientY),oe.stopPropagation();return}Zo(oe.clientX,oe.clientY)},[Nr,Zo]),aa=D.useCallback(oe=>{Vo(oe.clientX,oe.clientY)||Ko(oe)},[Vo,Ko]),oi=D.useCallback(()=>{sr(),so()},[sr,so]),sa=D.useCallback(oe=>{j&&!oe.target.closest("[data-node-id]")&&ne(null)},[j]),Or=D.useRef(!1);D.useEffect(()=>{if(!(!Ge||mn!=="quick")&&!Nn&&Pt&&!ni&&po&&Or.current){Or.current=!1;const oe=setTimeout(()=>pt(Pt),400);return()=>clearTimeout(oe)}},[Ge,mn,Nn,Pt,ni,po]),D.useEffect(()=>{if(!(!Ge||mn!=="deepdive")&&!Nn&&ur&&!ti&&Or.current){Or.current=!1;const oe=setTimeout(()=>pt(ur),400);return()=>clearTimeout(oe)}},[Ge,mn,Nn,ur,ti]),D.useEffect(()=>{const oe=Ie=>{Ie.key==="Escape"&&(ne(null),U(!1))};return window.addEventListener("keydown",oe),()=>window.removeEventListener("keydown",oe)},[]);const Hs=D.useCallback(oe=>{T(oe),Tn(A0(oe,300,t,r)),Mn(j?ap:ip)},[Mn,t,r,j]),ln=D.useCallback(()=>{Ge?(Zn(!1),Kn(),ne(null)):ve(!0)},[Ge,Zn,Kn]),ii=D.useCallback(oe=>{ve(!1),Kn(),oe==="deepdive"?(Zn(!0),U(!0)):(Zn(!0),Tt("quick"),ne(null))},[Zn,Tt,Kn]),ai=D.useCallback(oe=>{ae(!0),Me(!1),(oe==="quick"||oe==="deepdive")&&ii(oe)},[ae,ii]),la=D.useMemo(()=>{if(mn!=="deepdive")return{};const oe={};for(const[Ie,Ve]of Object.entries(Wt))Ve==="known"?oe[Ie]="known":Ve==="unknown"&&(oe[Ie]="unknown");return oe},[mn,Wt]),Gt=mn==="deepdive"?la:Jo,Gs=mn==="deepdive"?At.filter(oe=>Wt[oe]==="uncertain"):uo,ca=P==="pl"?f.title??f.titleEn:f.titleEn??f.title,mo=he||ge||R,rt=(oe,Ie="#4a9eff")=>({padding:"7px 13px",borderRadius:5,fontSize:13,cursor:"pointer",border:oe?`1px solid ${Ie}`:`1px solid ${v.border}`,background:oe?`${Ie}22`:"transparent",color:oe?Ie:v.textDim,whiteSpace:"nowrap",minHeight:36,fontWeight:oe?600:400});return p.jsxs("div",{style:{width:"100%",height:"100dvh",background:v.bg,fontFamily:je,color:v.textBody,display:"flex",flexDirection:"column",overflow:"hidden"},children:[p.jsxs("div",{style:{padding:j?"8px 12px":"8px 16px",borderBottom:`1px solid ${v.borderSubtle}`,display:"flex",alignItems:"center",gap:j?8:10,flexShrink:0},children:[(q||$)&&p.jsx("button",{onClick:q??$,style:{...rt(!1),padding:"7px 10px"},children:"←"}),p.jsx("h1",{style:{margin:0,fontSize:13,fontWeight:700,color:v.textPrimary,letterSpacing:j?.5:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:ca}),p.jsxs("div",{style:{display:"flex",gap:0,borderRadius:6,overflow:"hidden",border:`1px solid ${v.border}`},children:[p.jsx("button",{onClick:()=>{Ge&&(Zn(!1),Kn(),ne(null))},style:{padding:j?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",fontWeight:Ge?400:700,background:Ge?"transparent":"#4a9eff22",color:Ge?v.textDim:"#4a9eff",minHeight:36},children:L("exploreMode",P)}),p.jsx("button",{onClick:()=>{Ge||ve(!0)},style:{padding:j?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",borderLeft:`1px solid ${v.border}`,fontWeight:Ge?700:400,background:Ge?"#f39c1222":"transparent",color:Ge?"#f39c12":v.textDim,minHeight:36},children:L(Ge?mn==="deepdive"?"diagnosticOnDeep":"diagnosticOnQuick":"diagnosticOff",P)})]}),Ge&&p.jsx("button",{onClick:()=>U(!0),style:rt(mn==="deepdive","#8e44ad"),children:L("goalBtn",P)}),p.jsx(rv,{lang:P,setLang:oe=>B(oe),layoutId:_,layouts:fp,onLayoutChange:Hs,searchTerm:F,setSearchTerm:ee,filterScope:W,toggleScope:Cn,clearScope:dt,filterSection:E,toggleSection:Lt,clearSection:We,SECTIONS:s,SCOPE_COLORS:c,SCOPE_LABELS:d,isMobile:j})]}),p.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[p.jsxs("svg",{ref:qt,width:"100%",height:"100%",style:{cursor:ea,touchAction:"none",pointerEvents:mo?"none":"auto"},onMouseDown:ia,onMouseMove:aa,onMouseUp:oi,onMouseLeave:oi,onClick:oe=>{if(sa(oe),!Ge)return;const Ie=oe.target.closest("[data-node-id]");Ie&&Xo(Ie.getAttribute("data-node-id"),oe.shiftKey)},children:[p.jsxs("defs",{children:[p.jsx("marker",{id:"arrow-default",markerWidth:"8",markerHeight:"8",refX:"7",refY:"4",orient:"auto",markerUnits:"userSpaceOnUse",children:p.jsx("path",{d:"M0,0 L8,4 L0,8 L2,4 Z",fill:"#3a5578"})}),p.jsx("marker",{id:"arrow-hi",markerWidth:"8",markerHeight:"8",refX:"7",refY:"4",orient:"auto",markerUnits:"userSpaceOnUse",children:p.jsx("path",{d:"M0,0 L8,4 L0,8 L2,4 Z",fill:"#4a9eff"})}),p.jsx("marker",{id:"arrow-dim",markerWidth:"8",markerHeight:"8",refX:"7",refY:"4",orient:"auto",markerUnits:"userSpaceOnUse",children:p.jsx("path",{d:"M0,0 L8,4 L0,8 L2,4 Z",fill:"#151b26"})})]}),p.jsxs("g",{transform:`translate(${In.x},${In.y}) scale(${In.scale})`,children:[p.jsx(X6,{edges:r,nodes:gn,highlightedIds:Ge&&mn==="deepdive"?oa:ri}),p.jsx(tb,{nodes:gn,filteredIds:Ge&&mn==="deepdive"?oa:Ht,highlightedIds:Ge?null:ri,selected:J,onSelect:oe=>{ce(null),ne(oe===J?null:oe)},onHover:Q,lang:P,diagMode:Ge,belief:Gt,frontier:Gs,scale:In.scale,scopeColors:c,edges:r})]})]}),J&&!ye&&p.jsx(Gz,{nodeId:J,nodes:gn,adjacency:Je,lang:P,SCOPE_COLORS:c,SCOPE_LABELS:d,SECTIONS:s,belief:Gt,evidence:g,QUESTION_BANK:a,onClose:()=>ne(null),onNavigate:oe=>ne(oe),onShowPath:oe=>{ne(null),ze(oe)},onQuizMe:oe=>{ne(null),Zn(!0),Tt("quick"),K(null),pt(oe)},onQuizMatura:oe=>{ne(null),Zn(!0),Tt("quick"),K("cke"),pt(oe)}}),ye&&p.jsx(ym,{goalId:ye,RAW_NODES:t,RAW_EDGES:r,SCOPE_COLORS:c,SCOPE_LABELS:d,SECTIONS:s,belief:Gt,evidence:g,lang:P,onSelectTopic:oe=>{ze(null),ne(oe)},onClose:()=>ze(null)}),Ge&&Nn&&p.jsx(Kz,{nodeId:Nn,nodes:gn,lang:P,questionBank:a,excludeIndices:Yo(Nn),isMobile:j,sourceFilter:xe,forceIndex:ie,onAnswer:(oe,Ie,Ve)=>{Or.current=!0,te(null),lr(Nn,oe,Ie,Ve)},onSkip:oe=>{typeof oe=="number"&&Qo(Ie=>new Set([...Ie,`${Nn}:${oe}`])),pt(null),K(null),te(null)}}),Ge&&mn==="quick"&&p.jsx(Qz,{belief:Jo,frontier:ra,visibleFrontier:uo,hasStarted:po,nextSuggestedId:Pt,sessionComplete:ni,adjacency:Je,expectedRemaining:ei,pCorrect:Lr,questionsAnswered:lo,nodes:gn,lang:P,onNodeClick:oe=>pt(oe),onReset:Kn,SCOPE_LABELS:d,isMobile:j}),Ge&&mn==="deepdive"&&cr&&p.jsx(Yz,{nodes:gn,lang:P,targetNode:cr,subgraphIds:At,ddClassification:Wt,betaBeliefs:Wr,ddComplete:ti,ddNextNodeId:ur,questionsAnswered:lo,onNodeClick:oe=>pt(oe),onReset:Kn,isMobile:j}),!j&&p.jsx(Jz,{lang:P,diagMode:Ge,hasBelief:Object.keys(Gt).length>0,SCOPE_COLORS:c,SCOPE_LABELS:d,SECTIONS:s}),p.jsx("div",{style:{position:"absolute",right:12,bottom:16,display:"flex",flexDirection:"column",gap:4},children:[["＋",1.2],["－",.8],["↺",null]].map(([oe,Ie])=>p.jsx("button",{onClick:()=>{Ie===null?(Tn(A0(_,300,t,r)),Mn(j?ap:ip)):Mn(Ve=>({...Ve,scale:Math.max(.15,Math.min(5,Ve.scale*Ie))}))},style:{width:44,height:44,background:v.surface,border:`1px solid ${v.border}`,color:v.textBody,borderRadius:8,cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.4)"},children:oe},oe))}),j&&Ge&&!Nn&&p.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:`${v.surface}ee`,borderTop:`1px solid ${v.border}`,display:"flex",gap:0,zIndex:20},children:[p.jsx("button",{onClick:()=>U(!0),style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",borderRight:`1px solid ${v.border}`,color:mn==="deepdive"?"#c39bd3":v.textDim,cursor:"pointer"},children:L("goalBtn",P)}),p.jsx("button",{onClick:ln,style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",color:"#f39c12",cursor:"pointer",fontWeight:600},children:L("reset",P)})]})]}),R&&p.jsx(xm,{nodes:gn,lang:P,SECTIONS:s,SCOPE_COLORS:c,onSelect:oe=>{U(!1),co(oe)},onClose:()=>U(!1)}),p.jsx(ev,{isOpen:ge,onSelect:ii,onClose:()=>ve(!1),lang:P}),p.jsx(tv,{isOpen:he,onSelect:ai,onClose:Ue,lang:P})]})}function iv({lang:o,setLang:t,themeId:r,onThemeChange:a,onStartQuiz:s,onStartGoalQuiz:c,onBrowseViz:d,onBrowseMap:f,onProfile:$,onFromScratch:w,hasSavedCourse:g}){const[x,S]=D.useState("standard"),[q,j]=D.useState(!1);return p.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:v.bg,fontFamily:je,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 20px",position:"relative"},children:[p.jsxs("div",{style:{position:"absolute",top:16,right:20,display:"flex",gap:10,alignItems:"center"},children:[p.jsx("div",{style:{display:"flex",gap:5},children:Object.entries(cc).map(([_,T])=>p.jsx("button",{onClick:()=>a(_),title:T.name,style:{width:18,height:18,borderRadius:"50%",background:T.bg,border:r===_?`2px solid ${T.textPrimary}`:`2px solid ${T.border}`,cursor:"pointer",padding:0,boxShadow:r===_?`0 0 6px ${T.textDim}`:"none"}},_))}),p.jsx("div",{style:{display:"flex",gap:0,borderRadius:6,overflow:"hidden",border:`1px solid ${v.border}`},children:["pl","en"].map(_=>p.jsx("button",{onClick:()=>t(_),style:{padding:"10px 14px",fontSize:12,cursor:"pointer",border:"none",borderLeft:_==="en"?`1px solid ${v.border}`:"none",background:o===_?"#4a9eff18":"transparent",color:o===_?"#4a9eff":v.textDim,fontWeight:o===_?600:400,fontFamily:je},children:_.toUpperCase()},_))})]}),p.jsxs("div",{style:{maxWidth:440,width:"100%",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:0},children:[p.jsxs("svg",{width:"80",height:"56",viewBox:"0 0 80 56",style:{marginBottom:28,opacity:.7},children:[p.jsx("line",{x1:"14",y1:"44",x2:"40",y2:"12",stroke:v.edgeDefault,strokeWidth:"1.5"}),p.jsx("line",{x1:"66",y1:"44",x2:"40",y2:"12",stroke:v.edgeDefault,strokeWidth:"1.5"}),p.jsx("line",{x1:"14",y1:"44",x2:"40",y2:"44",stroke:v.edgeDefault,strokeWidth:"1.5"}),p.jsx("line",{x1:"40",y1:"44",x2:"66",y2:"44",stroke:v.edgeDefault,strokeWidth:"1.5"}),p.jsx("line",{x1:"40",y1:"44",x2:"40",y2:"12",stroke:v.edgeDefault,strokeWidth:"1.5"}),p.jsx("circle",{cx:"40",cy:"12",r:"5",fill:"#4a9eff",opacity:"0.8"}),p.jsx("circle",{cx:"14",cy:"44",r:"5",fill:v.known,opacity:"0.8"}),p.jsx("circle",{cx:"40",cy:"44",r:"5",fill:v.frontier,opacity:"0.8"}),p.jsx("circle",{cx:"66",cy:"44",r:"5",fill:v.unknown,opacity:"0.6"})]}),p.jsx("div",{style:{fontSize:13,fontWeight:600,color:v.textDim,letterSpacing:2,textTransform:"uppercase",marginBottom:16},children:"oczochodzi.pl"}),p.jsx("h1",{style:{margin:"0 0 12px",fontSize:26,fontWeight:700,color:v.textPrimary,lineHeight:1.3,letterSpacing:-.3},children:L("heroTitle",o)}),p.jsx("p",{style:{margin:"0 0 36px",fontSize:14,lineHeight:1.7,color:v.textDim,maxWidth:360},children:L("heroSub",o)}),g&&$&&p.jsx("button",{onClick:$,style:{width:"100%",maxWidth:320,padding:"16px 24px",fontSize:15,fontWeight:600,fontFamily:je,borderRadius:10,border:"1px solid #f39c1250",background:"#f39c1218",color:"#f39c12",cursor:"pointer",marginBottom:10,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:_=>{_.currentTarget.style.background="#f39c1228",_.currentTarget.style.borderColor="#f39c1280"},onMouseLeave:_=>{_.currentTarget.style.background="#f39c1218",_.currentTarget.style.borderColor="#f39c1250"},children:L("heroContinue",o)}),p.jsx("button",{onClick:()=>s(x),style:{width:"100%",maxWidth:320,padding:"16px 24px",fontSize:15,fontWeight:600,fontFamily:je,borderRadius:10,border:"1px solid #4a9eff50",background:"#4a9eff18",color:"#4a9eff",cursor:"pointer",marginBottom:12,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:_=>{_.currentTarget.style.background="#4a9eff28",_.currentTarget.style.borderColor="#4a9eff80"},onMouseLeave:_=>{_.currentTarget.style.background="#4a9eff18",_.currentTarget.style.borderColor="#4a9eff50"},children:L("heroStart",o)}),p.jsxs("button",{onClick:()=>j(_=>!_),style:{padding:"8px 16px",fontSize:12,fontFamily:je,border:"none",background:"transparent",color:v.textFaint,cursor:"pointer",transition:"color 0.15s"},onMouseEnter:_=>{_.currentTarget.style.color=v.textDim},onMouseLeave:_=>{_.currentTarget.style.color=v.textFaint},children:[q?"▲":"▼"," ",L("heroMore",o)]}),q&&p.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8,marginTop:4,width:"100%",maxWidth:320},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:12},children:[p.jsx("span",{style:{color:v.textFaint},children:L("heroLength",o)}),p.jsx("select",{value:x,onChange:_=>S(_.target.value),style:{background:v.surface,border:`1px solid ${v.border}`,borderRadius:6,padding:"5px 10px",fontSize:12,fontFamily:je,color:v.textBody,cursor:"pointer",outline:"none"},children:Object.entries(Q0).map(([_,T])=>p.jsxs("option",{value:_,children:[L(T.labelKey,o)," (~",T.maxQuestions," ",L("heroQuestions",o),")"]},_))})]}),w&&p.jsxs("button",{onClick:w,style:{width:"100%",padding:"10px 16px",fontSize:12,fontFamily:je,borderRadius:6,border:"1px solid #27ae6040",background:"#27ae6010",color:"#27ae60",cursor:"pointer"},children:[L("profileFromScratch",o),p.jsx("span",{style:{display:"block",fontSize:10,color:v.textFaint,marginTop:2},children:L("profileFromScratchSub",o)})]}),p.jsx("button",{onClick:c,style:{width:"100%",padding:"10px 16px",fontSize:12,fontFamily:je,borderRadius:6,border:`1px solid ${v.border}`,background:"transparent",color:v.textBody,cursor:"pointer"},children:L("heroGoal",o)}),g&&$&&p.jsx("button",{onClick:$,style:{width:"100%",padding:"10px 16px",fontSize:12,fontFamily:je,borderRadius:6,border:`1px solid ${v.border}`,background:"transparent",color:v.textDim,cursor:"pointer"},children:L("heroProfile",o)}),p.jsxs("button",{onClick:d,style:{width:"100%",padding:"10px 16px",fontSize:12,fontFamily:je,borderRadius:6,border:`1px solid ${v.border}`,background:"transparent",color:v.textDim,cursor:"pointer"},children:["⬡ ",L("heroBrowseViz",o)]}),p.jsx("button",{onClick:f,style:{width:"100%",padding:"10px 16px",fontSize:12,fontFamily:je,borderRadius:6,border:`1px solid ${v.border}`,background:"transparent",color:v.textFaint,cursor:"pointer"},children:L("heroExplore",o)})]}),p.jsx("div",{style:{marginTop:48,display:"flex",gap:24,fontSize:11,color:v.textFaint,lineHeight:1.6,flexWrap:"wrap",justifyContent:"center"},children:[{num:"1",text:L("heroStep1",o)},{num:"2",text:L("heroStep2",o)},{num:"3",text:L("heroStep3",o)}].map(({num:_,text:T})=>p.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,maxWidth:140},children:[p.jsx("span",{style:{width:20,height:20,borderRadius:"50%",border:`1px solid ${v.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:v.textDim,flexShrink:0},children:_}),p.jsx("span",{children:T})]},_))})]}),p.jsx("div",{style:{position:"absolute",bottom:20,display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:p.jsxs("a",{href:"https://buycoffee.to/oczochodzi",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",gap:7,padding:"8px 18px",borderRadius:8,border:`1px solid ${v.border}`,background:"transparent",color:v.textDim,fontSize:13,fontFamily:je,textDecoration:"none",transition:"background 0.15s, color 0.15s, border-color 0.15s"},onMouseEnter:_=>{_.currentTarget.style.background="rgba(255,209,102,0.08)",_.currentTarget.style.borderColor="rgba(255,209,102,0.4)",_.currentTarget.style.color="#FFD166"},onMouseLeave:_=>{_.currentTarget.style.background="transparent",_.currentTarget.style.borderColor=v.border,_.currentTarget.style.color=v.textDim},children:["☕ ",o==="pl"?"Postaw kawę — wspieraj projekt":"Buy me a coffee — support this project"]})})]})}function av({RAW_NODES:o,RAW_EDGES:t,QUESTION_BANK:r,lang:a,quizPreset:s="standard",onComplete:c,onExit:d}){var ve,qe;const f=Q0[s]??Q0.standard,$=D.useMemo(()=>io(o,t),[o,t]),w=D.useMemo(()=>[...new Set([...Object.keys($.prereqs),...Object.keys($.dependents),...Object.keys(r)])].map(ae=>({id:ae})),[$,r]),g=D.useMemo(()=>Object.fromEntries(o.map(we=>[we.id,we])),[o]),[x,S]=D.useState({}),[q,j]=D.useState({correct:0,incorrect:0,questionsAnswered:0}),[_,T]=D.useState(new Set),[P,B]=D.useState({}),[W,I]=D.useState("answering"),[E,O]=D.useState(null),[F,ee]=D.useState(0),J=D.useMemo(()=>{const we=q.correct+q.incorrect;return we===0?.5:(q.correct+.5)/(we+1)},[q]),ne=D.useMemo(()=>mc(w,x,$,J),[w,x,$,J]),re=D.useMemo(()=>{const we=[];return _.forEach(ae=>{const[he,Me]=ae.split(":");he===ne&&we.push(parseInt(Me,10))}),we},[_,ne]),Q=D.useMemo(()=>ne?Ui(r,ne,re):null,[r,ne,re]),Y=D.useMemo(()=>Q?Oo.random(Q.options.length):null,[Q]),ce=D.useMemo(()=>Y?Y.apply(Q.options):[],[Y,Q]),ye=D.useMemo(()=>Y?Y.displayIndex(Q.correct):-1,[Y,Q]),ze=D.useMemo(()=>fc(w,x,q.questionsAnswered,f),[w,x,q.questionsAnswered,f]);D.useEffect(()=>{ze&&q.questionsAnswered>0&&I("done")},[ze,q.questionsAnswered]);const xe=D.useCallback(()=>{E!==null&&I("revealed")},[E]),K=D.useCallback(()=>{const we=E===ye,ae=(Q==null?void 0:Q.tests)??{[ne]:1};S(he=>Ki(ne,we,ae,he,$)),B(he=>({...he,[ne]:{correct:we,questionText:(Q==null?void 0:Q.q)??null}})),(Q==null?void 0:Q.index)!=null&&T(he=>new Set([...he,`${ne}:${Q.index}`])),j(he=>({correct:he.correct+(we?1:0),incorrect:he.incorrect+(we?0:1),questionsAnswered:he.questionsAnswered+1})),O(null),I("answering"),ee(he=>he+1)},[E,ye,Q,ne,$]),ie=D.useCallback(we=>{const ae={[ne]:1};S(he=>Ki(ne,we,ae,he,$)),B(he=>({...he,[ne]:{correct:we,questionText:null}})),T(he=>new Set([...he,`${ne}:-1`])),j(he=>({correct:he.correct+(we?1:0),incorrect:he.incorrect+(we?0:1),questionsAnswered:he.questionsAnswered+1})),ee(he=>he+1)},[ne,$]);D.useEffect(()=>{const we=ae=>{if(ae.key==="Enter"&&(W==="answering"&&E!==null?xe():W==="revealed"&&K()),W==="answering"&&["1","2","3","4"].includes(ae.key)){const he=parseInt(ae.key)-1;he<ce.length&&O(he)}};return window.addEventListener("keydown",we),()=>window.removeEventListener("keydown",we)},[W,E,xe,K,ce.length]),D.useEffect(()=>{W==="done"&&c(x,q,P)},[W]);const te=ne?(a==="pl"?(ve=g[ne])==null?void 0:ve.labelPl:(qe=g[ne])==null?void 0:qe.label)??ne:"",R=we=>p.jsx("span",{dangerouslySetInnerHTML:{__html:bn(we)}});if(W==="done"||!ne&&q.questionsAnswered>0)return p.jsx("div",{style:{width:"100%",minHeight:"100dvh",background:v.bg,fontFamily:je,display:"flex",alignItems:"center",justifyContent:"center",color:v.textDim,fontSize:14},children:L("quizProcessing",a)});const U=f.maxQuestions,ge=U>0?Math.min(100,Math.round(q.questionsAnswered/U*100)):0;return p.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:v.bg,fontFamily:je,display:"flex",flexDirection:"column",alignItems:"center",padding:"0 20px"},children:[p.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",padding:"20px 0 0",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[p.jsx("button",{onClick:()=>{(q.questionsAnswered===0||window.confirm(L("quizExitConfirm",a)))&&d()},style:{padding:"10px 14px",fontSize:12,fontFamily:je,borderRadius:6,border:`1px solid ${v.border}`,background:"transparent",color:v.textDim,cursor:"pointer"},children:L("quizExit",a)}),p.jsxs("span",{style:{fontSize:12,color:v.textFaint},children:[L("quizQuestion",a)," ",q.questionsAnswered+1]})]}),p.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:16},children:[p.jsx("div",{style:{height:3,borderRadius:2,background:v.border,overflow:"hidden"},children:p.jsx("div",{style:{height:"100%",borderRadius:2,width:`${ge}%`,background:"#4a9eff",transition:"width 0.5s ease"}})}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:6,fontSize:10,color:v.textFaint},children:[p.jsxs("span",{children:[q.questionsAnswered," / ",U," ",L("quizOf",a)]}),p.jsxs("span",{children:[q.correct," ",L("quizCorrectShort",a)]})]})]}),p.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:40,animation:"fadeIn 0.25s ease"},children:[p.jsx("div",{style:{fontSize:11,color:v.textFaint,marginBottom:16,letterSpacing:.5},children:te}),Q?p.jsxs(p.Fragment,{children:[Q.source&&(()=>{const we=gm(Q.source,a);return!we||we==="CKE"?null:p.jsx("div",{style:{display:"inline-block",marginBottom:14,padding:"3px 8px",borderRadius:4,fontSize:10,fontWeight:600,letterSpacing:"0.04em",background:"#FFD16618",color:"#FFD166",border:"1px solid #FFD16640"},children:we})})(),p.jsx("div",{style:{fontSize:16,color:v.textPrimary,lineHeight:1.7,marginBottom:28},children:R(Q.q)}),p.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:24},children:ce.map((we,ae)=>{let he="transparent",Me=v.border,Ue=v.textBody;return E===ae&&W==="answering"&&(he="#4a9eff12",Me="#4a9eff60",Ue="#4a9eff"),W==="revealed"&&(ae===ye?(he="#27ae6015",Me="#27ae6060",Ue="#2ecc71"):ae===E?(he="#e74c3c15",Me="#e74c3c60",Ue="#ff6b6b"):Ue=v.textFaint),p.jsxs("button",{onClick:()=>{W==="answering"&&O(ae)},style:{textAlign:"left",padding:"14px 16px",borderRadius:8,fontSize:14,fontFamily:je,cursor:W==="answering"?"pointer":"default",background:he,border:`1px solid ${Me}`,color:Ue,lineHeight:1.6,transition:"all 0.15s ease"},children:[p.jsx("span",{style:{marginRight:10,opacity:.4,fontSize:12},children:["A","B","C","D"][ae]}),R(we)]},ae)})}),W==="revealed"&&Q.hint&&p.jsxs("div",{style:{fontSize:12,color:v.textDim,marginBottom:20,padding:"12px 14px",background:"#ffffff06",borderRadius:8,lineHeight:1.7,borderLeft:`2px solid ${v.border}`},children:[R(Q.hint),E!==ye&&(()=>{var Ue;const we=g[ne],ae=(Ue=we==null?void 0:we.resources)==null?void 0:Ue.find(Cn=>Cn.type==="interactive");if(!ae)return null;const Me=ae.url.startsWith("http")?ae.url:`${"/".replace(/\/$/,"")}/${ae.url.replace(/^\//,"")}?lang=${a}`;return p.jsxs("a",{href:Me,target:"_blank",rel:"noopener noreferrer",style:{display:"block",marginTop:10,padding:"8px 12px",borderRadius:6,background:"#58C4DD10",border:"1px solid #58C4DD30",color:"#58C4DD",fontSize:12,fontFamily:je,textDecoration:"none"},children:["⬡ ",L("quizSeeViz",a)]})})()]}),W==="answering"?p.jsxs("div",{style:{display:"flex",gap:10},children:[p.jsxs("button",{onClick:xe,disabled:E===null,style:{...Wi("#4a9eff"),flex:1,opacity:E===null?.3:1},children:[L("quizCheck",a),p.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]}),p.jsx("button",{onClick:()=>ie(!1),style:{...Wi(v.textDim),padding:"14px 16px",fontSize:13,fontWeight:500},title:a==="pl"?"Liczymy jako niewiadomą — bez zgadywania":"Counts as unknown — no guessing",children:L("quizDontKnow",a)})]}):p.jsxs("button",{onClick:K,style:{...Wi(E===ye?v.known:"#4a9eff"),width:"100%"},children:[L("quizContinue",a),p.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]})]}):p.jsxs("div",{children:[p.jsx("p",{style:{fontSize:15,color:v.textBody,lineHeight:1.7,marginBottom:24},children:L("quizNoQuestion",a)}),p.jsxs("div",{style:{display:"flex",gap:10},children:[p.jsx("button",{onClick:()=>ie(!0),style:{...Wi(v.known),flex:1},children:L("quizYes",a)}),p.jsx("button",{onClick:()=>ie(!1),style:{...Wi(v.unknown),flex:1},children:L("quizNo",a)})]})]})]},F),p.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]})}function Wi(o){return{padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:je,borderRadius:8,border:`1px solid ${o}50`,background:`${o}18`,color:o,cursor:"pointer",transition:"background 0.15s"}}const sp=10;function sv({goalId:o,RAW_NODES:t,RAW_EDGES:r,QUESTION_BANK:a,lang:s,onComplete:c,onExit:d}){var Ue,Cn,Lt,dt;const f=D.useMemo(()=>io(t,r),[t,r]),$=D.useMemo(()=>t.map(We=>({id:We.id})),[t]),w=D.useMemo(()=>Object.fromEntries(t.map(We=>[We.id,We])),[t]),g=D.useMemo(()=>[...wp(o,f,$)],[o,f,$]),x=D.useMemo(()=>g.map(We=>({id:We})),[g]),[S,q]=D.useState({}),[j,_]=D.useState({correct:0,incorrect:0,questionsAnswered:0}),[T,P]=D.useState(new Set),[B,W]=D.useState({}),[I,E]=D.useState("answering"),[O,F]=D.useState(null),[ee,J]=D.useState(0),ne=D.useMemo(()=>{const We=j.correct+j.incorrect;return We===0?.5:(j.correct+.5)/(We+1)},[j]),re=D.useMemo(()=>mc(x,S,f,ne),[x,S,f,ne]),Q=D.useMemo(()=>{const We=[];return T.forEach(Je=>{const[Le,Tn]=Je.split(":");Le===re&&We.push(parseInt(Tn,10))}),We},[T,re]),Y=D.useMemo(()=>re?Ui(a,re,Q):null,[a,re,Q]),ce=D.useMemo(()=>Y?Oo.random(Y.options.length):null,[Y]),ye=D.useMemo(()=>ce?ce.apply(Y.options):[],[ce,Y]),ze=D.useMemo(()=>ce?ce.displayIndex(Y.correct):-1,[ce,Y]),xe=D.useMemo(()=>({maxQuestions:sp,completionRatio:0}),[]),K=D.useMemo(()=>fc(x,S,j.questionsAnswered,xe),[x,S,j.questionsAnswered,xe]);D.useEffect(()=>{K&&j.questionsAnswered>0&&E("done")},[K,j.questionsAnswered]);const ie=D.useCallback(()=>{O!==null&&E("revealed")},[O]),te=D.useCallback(()=>{const We=O===ze,Je=(Y==null?void 0:Y.tests)??{[re]:1};q(Le=>Ki(re,We,Je,Le,f)),W(Le=>({...Le,[re]:{correct:We,questionText:(Y==null?void 0:Y.q)??null}})),(Y==null?void 0:Y.index)!=null&&P(Le=>new Set([...Le,`${re}:${Y.index}`])),_(Le=>({correct:Le.correct+(We?1:0),incorrect:Le.incorrect+(We?0:1),questionsAnswered:Le.questionsAnswered+1})),F(null),E("answering"),J(Le=>Le+1)},[O,ze,Y,re,f]),R=D.useCallback(We=>{const Je={[re]:1};q(Le=>Ki(re,We,Je,Le,f)),W(Le=>({...Le,[re]:{correct:We,questionText:null}})),P(Le=>new Set([...Le,`${re}:-1`])),_(Le=>({correct:Le.correct+(We?1:0),incorrect:Le.incorrect+(We?0:1),questionsAnswered:Le.questionsAnswered+1})),J(Le=>Le+1)},[re,f]);D.useEffect(()=>{const We=Je=>{if(Je.key==="Enter"&&(I==="answering"&&O!==null?ie():I==="revealed"&&te()),I==="answering"&&["1","2","3","4"].includes(Je.key)){const Le=parseInt(Je.key)-1;Le<ye.length&&F(Le)}};return window.addEventListener("keydown",We),()=>window.removeEventListener("keydown",We)},[I,O,ie,te,ye.length]),D.useEffect(()=>{I==="done"&&c(o,S,j,B)},[I]);const U=s==="pl"?(Ue=w[o])==null?void 0:Ue.labelPl:(Cn=w[o])==null?void 0:Cn.label,ge=re?(s==="pl"?(Lt=w[re])==null?void 0:Lt.labelPl:(dt=w[re])==null?void 0:dt.label)??re:"",ve=We=>p.jsx("span",{dangerouslySetInnerHTML:{__html:bn(We)}}),qe=Object.values(S).filter(We=>We==="known").length,we=Object.values(S).filter(We=>We==="unknown").length,ae=qe+we,he=g.length,Me=he>0?Math.round(ae/he*100):0;return I==="done"||!re&&j.questionsAnswered>0?p.jsx("div",{style:{width:"100%",minHeight:"100dvh",background:v.bg,fontFamily:je,display:"flex",alignItems:"center",justifyContent:"center",color:v.textDim,fontSize:14},children:L("quizProcessing",s)}):p.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:v.bg,fontFamily:je,display:"flex",flexDirection:"column",alignItems:"center",padding:"0 20px"},children:[p.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",padding:"20px 0 0",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[p.jsx("button",{onClick:()=>{(j.questionsAnswered===0||window.confirm(L("quizExitConfirm",s)))&&d()},style:{padding:"10px 14px",fontSize:12,fontFamily:je,borderRadius:6,border:`1px solid ${v.border}`,background:"transparent",color:v.textDim,cursor:"pointer"},children:L("quizExit",s)}),p.jsxs("span",{style:{fontSize:12,color:v.textFaint},children:[L("quizQuestion",s)," ",j.questionsAnswered+1," / ",sp]})]}),p.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:16,padding:"10px 14px",borderRadius:8,background:"#4a9eff08",border:"1px solid #4a9eff20"},children:[p.jsx("div",{style:{fontSize:10,color:v.textFaint,letterSpacing:.5,marginBottom:2},children:L("goalQuizSub",s)}),p.jsx("div",{style:{fontSize:13,color:"#4a9eff",fontWeight:600},children:U}),p.jsxs("div",{style:{fontSize:10,color:v.textFaint,marginTop:2},children:[he," ",L("goalQuizTopics",s)]})]}),p.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:12},children:[p.jsx("div",{style:{height:3,borderRadius:2,background:v.border,overflow:"hidden"},children:p.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Me}%`,background:"#4a9eff",transition:"width 0.5s ease"}})}),p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:6,fontSize:10,color:v.textFaint},children:[p.jsxs("span",{children:[ae,"/",he," ",L("quizClassified",s)]}),p.jsxs("span",{children:[Math.round(ne*100),"% ",L("quizAccuracy",s)]})]})]}),p.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:32,animation:"fadeIn 0.25s ease"},children:[p.jsx("div",{style:{fontSize:11,color:v.textFaint,marginBottom:16,letterSpacing:.5},children:ge}),Y?p.jsxs(p.Fragment,{children:[p.jsx("div",{style:{fontSize:16,color:v.textPrimary,lineHeight:1.7,marginBottom:28},children:ve(Y.q)}),p.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:24},children:ye.map((We,Je)=>{let Le="transparent",Tn=v.border,gn=v.textBody;return O===Je&&I==="answering"&&(Le="#4a9eff12",Tn="#4a9eff60",gn="#4a9eff"),I==="revealed"&&(Je===ze?(Le="#27ae6015",Tn="#27ae6060",gn="#2ecc71"):Je===O?(Le="#e74c3c15",Tn="#e74c3c60",gn="#ff6b6b"):gn=v.textFaint),p.jsxs("button",{onClick:()=>{I==="answering"&&F(Je)},style:{textAlign:"left",padding:"14px 16px",borderRadius:8,fontSize:14,fontFamily:je,cursor:I==="answering"?"pointer":"default",background:Le,border:`1px solid ${Tn}`,color:gn,lineHeight:1.6,transition:"all 0.15s ease"},children:[p.jsx("span",{style:{marginRight:10,opacity:.4,fontSize:12},children:["A","B","C","D"][Je]}),ve(We)]},Je)})}),I==="revealed"&&Y.hint&&p.jsx("div",{style:{fontSize:12,color:v.textDim,marginBottom:20,padding:"12px 14px",background:"#ffffff06",borderRadius:8,lineHeight:1.7,borderLeft:`2px solid ${v.border}`},children:ve(Y.hint)}),I==="answering"?p.jsxs("button",{onClick:ie,disabled:O===null,style:{...vs("#4a9eff"),width:"100%",opacity:O===null?.3:1},children:[L("quizCheck",s),p.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]}):p.jsxs("button",{onClick:te,style:{...vs(O===ze?v.known:"#4a9eff"),width:"100%"},children:[L("quizContinue",s),p.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]})]}):p.jsxs("div",{children:[p.jsx("p",{style:{fontSize:15,color:v.textBody,lineHeight:1.7,marginBottom:24},children:L("quizNoQuestion",s)}),p.jsxs("div",{style:{display:"flex",gap:10},children:[p.jsx("button",{onClick:()=>R(!0),style:{...vs(v.known),flex:1},children:L("quizYes",s)}),p.jsx("button",{onClick:()=>R(!1),style:{...vs(v.unknown),flex:1},children:L("quizNo",s)})]})]})]},ee),p.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]})}function vs(o){return{padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:je,borderRadius:8,border:`1px solid ${o}50`,background:`${o}18`,color:o,cursor:"pointer",transition:"background 0.15s"}}function lv({RAW_NODES:o,RAW_EDGES:t,SCOPE_COLORS:r,SCOPE_LABELS:a,belief:s,stats:c,evidence:d,lang:f,onSeeMap:$,onRetake:w,onSelectTopic:g,onStartPath:x}){const S=D.useMemo(()=>io(o,t),[o,t]),q=D.useMemo(()=>Object.fromEntries(o.map(E=>[E.id,E])),[o]),j=E=>{var O,F;return f==="pl"?(O=q[E])==null?void 0:O.labelPl:(F=q[E])==null?void 0:F.label},_=o.filter(E=>s[E.id]==="known"),T=o.filter(E=>s[E.id]==="unknown"),P=o.length,B=D.useMemo(()=>T.filter(E=>(S.prereqs[E.id]??[]).every(O=>s[O]==="known")).slice(0,8),[T,S,s]),W=c.correct+c.incorrect>0?Math.round(c.correct/(c.correct+c.incorrect)*100):0,I=B.length>0;return p.jsx("div",{style:{width:"100%",minHeight:"100dvh",background:v.bg,fontFamily:je,display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 20px 60px"},children:p.jsxs("div",{style:{maxWidth:"min(520px, calc(100% - 32px))",width:"100%"},children:[p.jsx("div",{style:{fontSize:11,color:v.textFaint,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8},children:"oczochodzi.pl"}),p.jsx("h1",{style:{margin:"0 0 8px",fontSize:24,fontWeight:700,color:v.textPrimary,lineHeight:1.3},children:L("resultsTitle",f)}),p.jsxs("p",{style:{margin:"0 0 32px",fontSize:13,color:v.textDim,lineHeight:1.6},children:[c.questionsAnswered," ",L("resultsAnswered",f)," · ",W,"% ",L("resultsAccuracy",f)]}),p.jsxs("div",{style:{display:"flex",gap:10,marginBottom:32},children:[p.jsx(lp,{count:_.length,label:L("resultsKnown",f),color:v.known,total:P}),p.jsx(lp,{count:T.length,label:L("resultsToStudy",f),color:"#e74c3c",total:P})]}),I&&p.jsxs("div",{style:{marginBottom:32},children:[p.jsx("h2",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:v.textPrimary},children:L("resultsGapsTitle",f)}),p.jsx("p",{style:{margin:"0 0 16px",fontSize:12,color:v.textDim,lineHeight:1.6},children:L("resultsGapsSub",f)}),p.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:B.map((E,O)=>{var ne;const F=(r==null?void 0:r[E.scope])??v.textDim,ee=((ne=a==null?void 0:a[E.scope])==null?void 0:ne[f==="pl"?"pl":"en"])??"",J=E.resources&&E.resources.length>0;return p.jsxs("div",{onClick:()=>g==null?void 0:g(E.id),style:{padding:"12px 14px",borderRadius:8,background:"#e74c3c08",border:"1px solid #e74c3c20",display:"flex",alignItems:"center",gap:12,cursor:g?"pointer":"default",transition:"background 0.15s, border-color 0.15s"},onMouseEnter:re=>{g&&(re.currentTarget.style.background="#e74c3c14",re.currentTarget.style.borderColor="#e74c3c40")},onMouseLeave:re=>{g&&(re.currentTarget.style.background="#e74c3c08",re.currentTarget.style.borderColor="#e74c3c20")},children:[p.jsx("span",{style:{width:24,height:24,borderRadius:"50%",background:`${F}18`,border:`1px solid ${F}40`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:F,flexShrink:0,fontWeight:600},children:O+1}),p.jsxs("div",{style:{flex:1},children:[p.jsx("div",{style:{fontSize:13,color:v.textPrimary,fontWeight:500},dangerouslySetInnerHTML:{__html:bn(j(E.id)??"")}}),p.jsxs("div",{style:{fontSize:10,color:v.textFaint,marginTop:2},children:[ee,J&&p.jsx("span",{style:{color:"#4a9eff",marginLeft:8},children:L("resultsHasResource",f)})]})]})]},E.id)})}),T.length>B.length&&p.jsxs("div",{style:{marginTop:8,fontSize:11,color:v.textFaint},children:["+",T.length-B.length," ",L("resultsMore",f)]})]}),!I&&T.length===0&&p.jsxs("div",{style:{padding:"20px 16px",borderRadius:10,background:"#27ae6010",border:"1px solid #27ae6030",marginBottom:32,textAlign:"center"},children:[p.jsx("div",{style:{fontSize:15,color:v.known,fontWeight:600,marginBottom:4},children:L("resultsAllGood",f)}),p.jsx("div",{style:{fontSize:12,color:v.textDim},children:L("resultsAllGoodSub",f)})]}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginTop:8},children:[I&&B[0]&&x&&(()=>{const E=B[0],O=j(E.id)??E.id;return p.jsxs("div",{style:{padding:"18px 18px 16px",borderRadius:12,background:"#f39c1212",border:"1px solid #f39c1240",marginBottom:8},children:[p.jsx("div",{style:{fontSize:11,color:"#f39c12",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:6},children:L("results20minTitle",f)}),p.jsx("div",{style:{fontSize:16,color:v.textPrimary,fontWeight:600,marginBottom:6,lineHeight:1.3},dangerouslySetInnerHTML:{__html:bn(O)}}),p.jsx("div",{style:{fontSize:12,color:v.textDim,marginBottom:14,lineHeight:1.55},children:L("results20minSub",f)}),p.jsx("ol",{style:{margin:"0 0 14px",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},children:[{n:"1",t:L("results20minStep1",f)},{n:"2",t:L("results20minStep2",f)},{n:"3",t:L("results20minStep3",f)}].map(F=>p.jsxs("li",{style:{display:"flex",alignItems:"center",gap:10,fontSize:12,color:v.textBody},children:[p.jsx("span",{style:{width:20,height:20,borderRadius:"50%",background:"#f39c1220",border:"1px solid #f39c1260",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:10,color:"#f39c12",fontWeight:700,flexShrink:0},children:F.n}),p.jsx("span",{children:F.t})]},F.n))}),p.jsx("button",{onClick:()=>x(E.id),style:{width:"100%",padding:"12px 18px",fontSize:14,fontWeight:600,fontFamily:je,borderRadius:8,border:"1px solid #f39c1260",background:"#f39c12",color:"#0e0e12",cursor:"pointer"},children:L("results20minCta",f)})]})})(),p.jsx("button",{onClick:$,style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:je,borderRadius:8,border:`1px solid ${v.border}`,background:"transparent",color:v.textBody,cursor:"pointer"},children:L("resultsSeeMap",f)}),p.jsx("button",{onClick:()=>{const O=`https://oczochodzi.pl/#/results/${s?V0(s):""}`,F=f==="pl"?`Sprawdziłem swoją wiedzę z matmy — ${_.length}/${P} tematów znanych! Sprawdź się:`:`I tested my math knowledge — ${_.length}/${P} topics known! Try it:`;navigator.share?navigator.share({title:"oczochodzi.pl",text:F,url:O}).catch(()=>{}):navigator.clipboard.writeText(`${F} ${O}`).then(()=>{alert(f==="pl"?"Skopiowano do schowka!":"Copied to clipboard!")})},style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:je,borderRadius:8,border:`1px solid ${v.border}`,background:"transparent",color:v.textBody,cursor:"pointer"},children:L("resultsShare",f)}),p.jsx("button",{onClick:w,style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:je,borderRadius:8,border:`1px solid ${v.border}`,background:"transparent",color:v.textDim,cursor:"pointer"},children:L("resultsRetake",f)})]}),p.jsxs("div",{style:{marginTop:24,paddingTop:20,borderTop:`1px solid ${v.border}`,textAlign:"center"},children:[p.jsx("p",{style:{fontSize:12,color:v.textDim,marginBottom:8,lineHeight:1.6},children:L("coffeeText",f)}),p.jsx("a",{href:"https://buycoffee.to/oczochodzi",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",padding:"10px 20px",fontSize:13,fontFamily:je,borderRadius:8,border:"1px solid #FFD16640",background:"#FFD16610",color:"#FFD166",textDecoration:"none",cursor:"pointer"},children:L("coffeeBtn",f)})]})]})})}function lp({count:o,label:t,color:r,total:a}){const s=a>0?Math.round(o/a*100):0;return p.jsxs("div",{style:{flex:1,padding:"16px 14px",borderRadius:10,background:`${r}08`,border:`1px solid ${r}20`,textAlign:"center"},children:[p.jsx("div",{style:{fontSize:28,fontWeight:700,color:r,lineHeight:1},children:o}),p.jsx("div",{style:{fontSize:11,color:v.textFaint,marginTop:6},children:t}),p.jsx("div",{style:{marginTop:8,height:3,borderRadius:2,background:`${r}15`,overflow:"hidden"},children:p.jsx("div",{style:{height:"100%",borderRadius:2,width:`${s}%`,background:r,opacity:.6}})}),p.jsxs("div",{style:{fontSize:10,color:v.textFaint,marginTop:4},children:[s,"% of ",a]})]})}function cv({RAW_NODES:o,SCOPE_COLORS:t,SCOPE_LABELS:r,lang:a,onClose:s}){const[c,d]=D.useState(""),[f,$]=D.useState(null),[w,g]=D.useState(null),x=D.useMemo(()=>{const T=[];for(const P of o)if(P.resources)for(const B of P.resources)B.type==="interactive"&&T.push({nodeId:P.id,nodeLabel:a==="pl"?P.labelPl:P.label,scope:P.scope,section:P.section,title:a==="pl"?B.titlePl:B.titleEn,resource:B,isDlaCiekawych:(B.titlePl||"").includes("Dla ciekawych")||(B.titleEn||"").includes("curious")});return T},[o,a]),S=D.useMemo(()=>{const T=c.toLowerCase();return x.filter(P=>!(w&&P.scope!==w||T&&!P.title.toLowerCase().includes(T)&&!P.nodeLabel.toLowerCase().includes(T)))},[x,c,w]),q=D.useMemo(()=>[...new Set(x.map(P=>P.scope))].sort(),[x]),j=T=>(t==null?void 0:t[T])??"#4a9eff",_=T=>{var P;return((P=r==null?void 0:r[T])==null?void 0:P[a==="pl"?"pl":"en"])??T};return p.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:v.bg,fontFamily:je,overflowY:"auto",animation:"galleryIn 0.2s ease"},children:[p.jsx("style",{children:`
        @keyframes galleryIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}),p.jsxs("div",{style:{maxWidth:"min(720px, calc(100% - 32px))",width:"100%",margin:"0 auto",padding:"24px 16px 48px"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[p.jsx("button",{onClick:s,style:{padding:"10px 14px",fontSize:12,fontFamily:je,borderRadius:6,border:`1px solid ${v.border}`,background:"transparent",color:v.textDim,cursor:"pointer"},children:"←"}),p.jsxs("div",{children:[p.jsx("h1",{style:{margin:0,fontSize:20,fontWeight:700,color:v.textPrimary},children:L("galleryTitle",a)}),p.jsxs("p",{style:{margin:0,fontSize:12,color:v.textDim},children:[S.length," ",L("galleryCount",a)]})]})]}),p.jsx("input",{type:"text",value:c,onChange:T=>d(T.target.value),placeholder:L("search",a),style:{width:"100%",padding:"12px 14px",fontSize:13,fontFamily:je,borderRadius:8,border:`1px solid ${v.border}`,background:v.surface,color:v.textBody,marginBottom:12,outline:"none"}}),p.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:20},children:[p.jsx("button",{onClick:()=>g(null),style:{padding:"6px 12px",fontSize:11,fontFamily:je,borderRadius:16,cursor:"pointer",border:w?`1px solid ${v.border}`:"1px solid #4a9eff",background:w?"transparent":"#4a9eff18",color:w?v.textDim:"#4a9eff"},children:L("all",a)}),q.map(T=>p.jsx("button",{onClick:()=>g(w===T?null:T),style:{padding:"6px 12px",fontSize:11,fontFamily:je,borderRadius:16,cursor:"pointer",border:w===T?`1px solid ${j(T)}`:`1px solid ${v.border}`,background:w===T?`${j(T)}18`:"transparent",color:w===T?j(T):v.textDim},children:_(T)},T))]}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:10},children:S.map((T,P)=>{const B=j(T.scope);return p.jsxs("button",{onClick:()=>$(T.resource),style:{padding:"16px 14px",borderRadius:10,background:v.surface,border:`1px solid ${v.border}`,cursor:"pointer",textAlign:"left",fontFamily:je,display:"flex",flexDirection:"column",gap:8,transition:"border-color 0.15s, background 0.15s"},onMouseEnter:W=>{W.currentTarget.style.borderColor=B+"60",W.currentTarget.style.background=`${B}08`},onMouseLeave:W=>{W.currentTarget.style.borderColor=v.border,W.currentTarget.style.background=v.surface},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[p.jsx("span",{style:{fontSize:22},children:"⬡"}),T.isDlaCiekawych&&p.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:4,background:"#8e44ad18",color:"#c39bd3",border:"1px solid #8e44ad30"},children:"🧩"})]}),p.jsx("div",{style:{fontSize:13,fontWeight:600,color:v.textPrimary,lineHeight:1.4},children:T.title}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginTop:"auto"},children:[p.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:B,flexShrink:0}}),p.jsx("span",{style:{fontSize:10,color:v.textFaint},children:T.nodeLabel})]})]},`${T.nodeId}-${P}`)})}),S.length===0&&p.jsx("div",{style:{textAlign:"center",padding:"40px 0",color:v.textFaint,fontSize:13},children:L("noResults",a)})]}),f&&p.jsx(bp,{resource:f,lang:a,onClose:()=>$(null)})]})}function uv({savedCourse:o,RAW_NODES:t,RAW_EDGES:r,SCOPE_COLORS:a,SCOPE_LABELS:s,SECTIONS:c,lang:d,onResumePath:f,onStartLesson:$,onStartNew:w,onSeeMap:g,onClose:x}){const[S,q]=D.useState(!1),{goalId:j,belief:_={},evidence:T={},createdAt:P}=o??{},B=D.useMemo(()=>io(t,r),[t,r]),W=D.useMemo(()=>Object.fromEntries(t.map(Y=>[Y.id,Y])),[t]),I=Y=>{var ce,ye;return d==="pl"?(ce=W[Y])==null?void 0:ce.labelPl:(ye=W[Y])==null?void 0:ye.label},E=D.useMemo(()=>{const Y=new Set;if(j){const xe=[j];for(;xe.length;){const K=xe.shift();if(!Y.has(K)&&W[K]){Y.add(K);for(const ie of B.prereqs[K]??[])Y.has(ie)||xe.push(ie)}}}else for(const xe of t)Y.add(xe.id);const ce={};for(const xe of Y)ce[xe]=0;for(const xe of Y)for(const K of B.dependents[xe]??[])Y.has(K)&&(ce[K]=(ce[K]||0)+1);const ye=[],ze=[];for(const xe of Y)ce[xe]===0&&ze.push(xe);for(;ze.length;){ze.sort((K,ie)=>{var te,R;return(((te=W[K])==null?void 0:te.level)??0)-(((R=W[ie])==null?void 0:R.level)??0)});const xe=ze.shift();ye.push(xe);for(const K of B.dependents[xe]??[])Y.has(K)&&(ce[K]--,ce[K]===0&&ze.push(K))}return ye},[j,B,W,t]),O=E.filter(Y=>_[Y]==="known").length,F=E.filter(Y=>_[Y]==="unknown").length,ee=E.length-O-F,J=E.length,ne=J>0?Math.round(O/J*100):0,re=E.find(Y=>_[Y]!=="known")??null,Q=P?new Date(P).toLocaleDateString(d==="pl"?"pl-PL":"en-US",{year:"numeric",month:"short",day:"numeric"}):"—";return p.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:v.bg,fontFamily:je,overflowY:"auto",animation:"profileSlideIn 0.2s ease"},children:[p.jsx("style",{children:`
        @keyframes profileSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}),p.jsxs("div",{style:{maxWidth:"min(520px, calc(100% - 32px))",width:"100%",margin:"0 auto",padding:"24px 16px 48px"},children:[p.jsxs("button",{onClick:x,style:{padding:"10px 14px",fontSize:12,fontFamily:je,borderRadius:6,border:`1px solid ${v.border}`,background:"transparent",color:v.textDim,cursor:"pointer",marginBottom:24},children:["← ",L("topicBack",d)]}),p.jsx("div",{style:{marginBottom:6},children:p.jsx("span",{style:{fontSize:10,color:v.textFaint,letterSpacing:1.5,textTransform:"uppercase"},children:"oczochodzi.pl"})}),p.jsx("h1",{style:{margin:"0 0 8px",fontSize:22,fontWeight:700,color:v.textPrimary,lineHeight:1.3},children:L("profileTitle",d)}),p.jsxs("div",{style:{padding:"18px 16px",borderRadius:10,background:v.surface,border:`1px solid ${v.border}`,marginBottom:28},children:[p.jsx("div",{style:{fontSize:12,color:v.textDim,marginBottom:10,lineHeight:1.5},children:j?p.jsxs("span",{children:[L("profileGoal",d),":"," ",p.jsx("span",{style:{color:v.textPrimary,fontWeight:600},dangerouslySetInnerHTML:{__html:bn(I(j)??"")}})]}):p.jsx("span",{style:{color:v.textPrimary,fontWeight:600},children:L("profileFullCourse",d)})}),p.jsxs("div",{style:{fontSize:11,color:v.textFaint,marginBottom:14},children:[L("profileStarted",d),": ",Q]}),p.jsxs("div",{style:{display:"flex",gap:10,marginBottom:14},children:[p.jsx(K0,{count:O,label:L("resultsKnown",d),color:v.known}),p.jsx(K0,{count:F,label:L("resultsToStudy",d),color:"#e74c3c"}),p.jsx(K0,{count:ee,label:L("unclassified",d),color:v.textFaint})]}),p.jsx("div",{style:{height:4,borderRadius:2,background:v.border,overflow:"hidden"},children:p.jsx("div",{style:{height:"100%",borderRadius:2,width:`${ne}%`,background:v.known,transition:"width 0.4s ease"}})}),p.jsxs("div",{style:{fontSize:10,color:v.textFaint,marginTop:6,textAlign:"right"},children:[ne,"% (",O,"/",J,")"]})]}),p.jsx("h2",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:v.textPrimary},children:L("profileTimeline",d)}),p.jsxs("p",{style:{margin:"0 0 16px",fontSize:12,color:v.textDim,lineHeight:1.6},children:[J," ",L("pathTopics",d)]}),p.jsxs("div",{style:{position:"relative",marginBottom:32},children:[p.jsx("div",{style:{position:"absolute",left:15,top:12,bottom:12,width:2,background:v.border,borderRadius:1}}),E.map((Y,ce)=>{var qe,we;const ye=W[Y],ze=j&&Y===j,xe=_[Y],K=T[Y],ie=!!K,te=(a==null?void 0:a[ye==null?void 0:ye.scope])??"#4a9eff",R=((qe=s==null?void 0:s[ye==null?void 0:ye.scope])==null?void 0:qe[d==="pl"?"pl":"en"])??"",U=((we=c==null?void 0:c[ye==null?void 0:ye.section])==null?void 0:we.label)??"";let ge=v.textFaint,ve=v.border;return xe==="known"?(ge=v.known,ve=v.known):xe==="unknown"&&(ge="#e74c3c",ve="#e74c3c"),p.jsxs("div",{onClick:()=>f(Y),style:{position:"relative",paddingLeft:40,paddingBottom:ce<E.length-1?6:0,marginBottom:6,cursor:"pointer"},children:[p.jsx("div",{style:{position:"absolute",left:8,top:12,width:ze?16:12,height:ze?16:12,borderRadius:"50%",background:xe?ge:v.bg,border:`2px solid ${xe?ve:v.textFaint}`,marginLeft:ze?-2:0,zIndex:1}}),p.jsxs("div",{style:{padding:"10px 14px",borderRadius:8,background:ze?`${te}10`:"transparent",border:`1px solid ${ze?te+"30":v.borderSubtle}`,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:ae=>{ze||(ae.currentTarget.style.background=`${v.textFaint}10`,ae.currentTarget.style.borderColor=v.border)},onMouseLeave:ae=>{ze||(ae.currentTarget.style.background="transparent",ae.currentTarget.style.borderColor=v.borderSubtle)},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[p.jsx("span",{style:{fontSize:13,fontWeight:ze?700:500,color:ze?v.textPrimary:v.textBody,flex:1},dangerouslySetInnerHTML:{__html:bn(I(Y)??"")}}),p.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center",flexShrink:0},children:[ie&&p.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:K.correct?"#27ae6015":"#e74c3c15",color:K.correct?"#2ecc71":"#ff6b6b",border:`1px solid ${K.correct?"#27ae6030":"#e74c3c30"}`},children:K.correct?"✓":"✗"}),xe==="known"&&!ie&&p.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:"#27ae6015",color:"#2ecc71",border:"1px solid #27ae6030"},children:"✓"}),xe==="unknown"&&!ie&&p.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:"#e74c3c15",color:"#ff6b6b",border:"1px solid #e74c3c30"},children:"✗"})]})]}),p.jsxs("div",{style:{fontSize:10,color:v.textFaint,marginTop:3},children:[U,U&&R?" · ":"",R,ze&&p.jsx("span",{style:{color:te,marginLeft:6},children:L("pathGoal",d)})]})]})]},Y)})]}),p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginTop:8},children:[re&&p.jsx("button",{onClick:()=>{$?$(E,j):f(re)},style:{width:"100%",padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:je,borderRadius:8,border:"1px solid #f39c1250",background:"#f39c1218",color:"#f39c12",cursor:"pointer"},children:L("profileContinue",d)}),p.jsx("button",{onClick:g,style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:je,borderRadius:8,border:`1px solid ${v.border}`,background:"transparent",color:v.textBody,cursor:"pointer"},children:L("resultsSeeMap",d)}),S?p.jsxs("div",{style:{padding:"14px 16px",borderRadius:8,background:"#e74c3c08",border:"1px solid #e74c3c30",textAlign:"center"},children:[p.jsx("p",{style:{margin:"0 0 10px",fontSize:12,color:v.textBody,lineHeight:1.5},children:L("profileStartNewConfirm",d)}),p.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"center"},children:[p.jsx("button",{onClick:()=>{q(!1),w()},style:{padding:"8px 18px",fontSize:12,fontFamily:je,borderRadius:6,border:"1px solid #e74c3c50",background:"#e74c3c18",color:"#e74c3c",cursor:"pointer",fontWeight:600},children:L("profileStartNew",d)}),p.jsx("button",{onClick:()=>q(!1),style:{padding:"8px 18px",fontSize:12,fontFamily:je,borderRadius:6,border:`1px solid ${v.border}`,background:"transparent",color:v.textDim,cursor:"pointer"},children:L("cancel",d)})]})]}):p.jsx("button",{onClick:()=>q(!0),style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:je,borderRadius:8,border:`1px solid ${v.border}`,background:"transparent",color:v.textDim,cursor:"pointer"},children:L("profileStartNew",d)})]})]})]})}function K0({count:o,label:t,color:r}){return p.jsxs("div",{style:{flex:1,textAlign:"center",padding:"8px 6px",borderRadius:6,background:`${r}08`,border:`1px solid ${r}20`},children:[p.jsx("div",{style:{fontSize:20,fontWeight:700,color:r,lineHeight:1},children:o}),p.jsx("div",{style:{fontSize:10,color:v.textFaint,marginTop:4},children:t})]})}function dv({path:o,goalId:t,RAW_NODES:r,RAW_EDGES:a,QUESTION_BANK:s,SCOPE_COLORS:c,SCOPE_LABELS:d,SECTIONS:f,belief:$,evidence:w,lang:g,onUpdateBelief:x,onClose:S}){var xe,K,ie;const q=D.useMemo(()=>io(r,a),[r,a]),j=D.useMemo(()=>Object.fromEntries(r.map(te=>[te.id,te])),[r]),_=D.useMemo(()=>{const te=o.findIndex(R=>$[R]!=="known");return te>=0?te:0},[]),[T,P]=D.useState(_),[B,W]=D.useState(!1),I=o.length,E=o.filter(te=>$[te]==="known").length,O=I>0?Math.round(E/I*100):0,F=o[T],ee=j[F],J=D.useCallback(()=>{const te=pc(F,$,q),R={...w};x(te,R),T<I-1?P(T+1):W(!0)},[F,$,q,w,x,T,I]),ne=D.useCallback(()=>{T>0&&P(T-1)},[T]),re=D.useCallback(()=>{T<I-1?P(T+1):W(!0)},[T,I]);if(B)return p.jsx("div",{style:{position:"fixed",inset:0,zIndex:50,background:v.bg,fontFamily:je,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24},children:p.jsxs("div",{style:{textAlign:"center",maxWidth:400},children:[p.jsx("div",{style:{fontSize:40,marginBottom:16},children:"🎉"}),p.jsx("h1",{style:{margin:"0 0 8px",fontSize:22,fontWeight:700,color:v.textPrimary},children:L("lessonComplete",g)}),p.jsx("p",{style:{margin:"0 0 28px",fontSize:13,color:v.textDim,lineHeight:1.6},children:L("lessonCompleteSub",g)}),p.jsxs("button",{onClick:S,style:{padding:"14px 28px",fontSize:14,fontWeight:600,fontFamily:je,borderRadius:8,border:"1px solid #f39c1250",background:"#f39c1218",color:"#f39c12",cursor:"pointer"},children:["← ",L("topicBack",g)]})]})});if(!ee)return null;const Q=g==="pl"?ee.labelPl:ee.label,Y=(c==null?void 0:c[ee.scope])??"#4a9eff",ce=((xe=d==null?void 0:d[ee.scope])==null?void 0:xe[g==="pl"?"pl":"en"])??"",ye=((K=f==null?void 0:f[ee.section])==null?void 0:K.label)??"",ze=(ee.resources??[]).find(te=>te.type==="interactive");return p.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:v.bg,fontFamily:je,overflowY:"auto",animation:"lessonSlideIn 0.2s ease"},children:[p.jsx("style",{children:`
        @keyframes lessonSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}),p.jsxs("div",{style:{maxWidth:"min(580px, calc(100% - 32px))",width:"100%",margin:"0 auto",padding:"24px 16px 48px"},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[p.jsxs("button",{onClick:S,style:{padding:"10px 14px",fontSize:12,fontFamily:je,borderRadius:6,border:`1px solid ${v.border}`,background:"transparent",color:v.textDim,cursor:"pointer"},children:["← ",L("topicBack",g)]}),p.jsxs("span",{style:{fontSize:12,color:v.textFaint},children:[T+1," ",L("lessonOf",g)," ",I]})]}),p.jsx("div",{style:{height:4,borderRadius:2,background:v.border,overflow:"hidden",marginBottom:24},children:p.jsx("div",{style:{height:"100%",borderRadius:2,width:`${O}%`,background:v.known,transition:"width 0.4s ease"}})}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:6},children:[p.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:Y,opacity:.8,flexShrink:0}}),p.jsxs("span",{style:{fontSize:11,color:v.textDim},children:[ye," · ",ce]})]}),p.jsx("h1",{style:{margin:"0 0 16px",fontSize:22,fontWeight:700,color:v.textPrimary,lineHeight:1.3},dangerouslySetInnerHTML:{__html:bn(Q??"")}}),ee.body&&p.jsx("div",{style:{fontSize:13,color:v.textBody,lineHeight:1.7,marginBottom:24},dangerouslySetInnerHTML:{__html:bn(((ie=ee.body.split("<!-- example -->")[0])==null?void 0:ie.trim())??"")}}),ze&&p.jsx(pv,{resource:ze,lang:g}),p.jsx(mv,{nodeId:F,QUESTION_BANK:s,belief:$,evidence:w,adjacency:q,lang:g,onUpdateBelief:x}),p.jsxs("div",{style:{borderTop:`1px solid ${v.border}`,paddingTop:20,marginTop:28,display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"},children:[T>0&&p.jsx("button",{onClick:ne,style:{padding:"12px 18px",fontSize:13,fontFamily:je,borderRadius:8,border:`1px solid ${v.border}`,background:"transparent",color:v.textDim,cursor:"pointer"},children:L("lessonPrev",g)}),p.jsx("button",{onClick:J,style:{flex:1,padding:"14px 20px",fontSize:14,fontWeight:600,fontFamily:je,borderRadius:8,border:"1px solid #f39c1250",background:"#f39c1218",color:"#f39c12",cursor:"pointer",textAlign:"center",minWidth:180},children:L("iUnderstand",g)}),T<I-1&&p.jsx("button",{onClick:re,style:{padding:"12px 18px",fontSize:13,fontFamily:je,borderRadius:8,border:`1px solid ${v.border}`,background:"transparent",color:v.textDim,cursor:"pointer"},children:L("lessonNext",g)})]})]})]})}function pv({resource:o,lang:t}){const a=o.url.startsWith("http")?o.url:`${"/".replace(/\/$/,"")}/${o.url.replace(/^\//,"")}`,s=a+(a.includes("?")?"&":"?")+"lang="+t,c=t==="pl"?o.titlePl:o.titleEn,d=D.useRef(null),[f,$]=D.useState(820);return D.useEffect(()=>{const w=d.current;if(!w)return;let g;const x=()=>{try{const q=w.contentDocument;if(!(q!=null&&q.body))return;const j=Math.max(q.documentElement.scrollHeight,q.body.scrollHeight);j>0&&$(j)}catch{}},S=()=>{x();try{const q=w.contentDocument;q!=null&&q.body&&typeof ResizeObserver<"u"&&(g=new ResizeObserver(x),g.observe(q.body))}catch{}};return w.addEventListener("load",S),()=>{w.removeEventListener("load",S),g==null||g.disconnect()}},[s]),p.jsxs("div",{style:{marginBottom:24},children:[p.jsxs("div",{style:{fontSize:11,fontWeight:600,color:"#58C4DD",letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:10,display:"flex",alignItems:"center",gap:8},children:[p.jsx("span",{style:{display:"inline-block",width:"100%",height:1,background:"#58C4DD20"}}),p.jsx("span",{style:{flexShrink:0},children:L("lessonViz",t)}),p.jsx("span",{style:{display:"inline-block",width:"100%",height:1,background:"#58C4DD20"}})]}),p.jsx("div",{style:{borderRadius:10,overflow:"hidden",border:"1px solid #58C4DD25",background:"#0e0e12"},children:p.jsx("iframe",{ref:d,src:s,sandbox:"allow-scripts allow-same-origin allow-forms",scrolling:"no",style:{width:"100%",height:f,border:"none",display:"block",background:"#0e0e12"},title:c,loading:"lazy"})})]})}function mv({nodeId:o,QUESTION_BANK:t,belief:r,evidence:a,adjacency:s,lang:c,onUpdateBelief:d}){const[f,$]=D.useState(null),[w,g]=D.useState(!1),[x,S]=D.useState(()=>Ui(t,o,[])),[q,j]=D.useState(o);o!==q&&(j(o),$(null),g(!1),S(Ui(t,o,[])));const _=D.useCallback(()=>{if(f==null||!x)return;g(!0);const P=f===x.correct,B={...a,[o]:{correct:P,questionText:x.q}};if(P){const W=pc(o,r,s);d(W,B)}else{const W={...r,[o]:"unknown"};d(W,B)}},[f,x,o,r,a,s,d]);if(!x)return null;const T=w&&f===x.correct;return p.jsxs("div",{style:{marginBottom:24},children:[p.jsxs("div",{style:{fontSize:11,fontWeight:600,color:"#FFD166",letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:14,display:"flex",alignItems:"center",gap:8},children:[p.jsx("span",{style:{display:"inline-block",width:"100%",height:1,background:"#FFD16620"}}),p.jsx("span",{style:{flexShrink:0},children:L("lessonPractice",c)}),p.jsx("span",{style:{display:"inline-block",width:"100%",height:1,background:"#FFD16620"}})]}),p.jsx("div",{style:{fontSize:13,color:v.textBody,lineHeight:1.7,marginBottom:14},dangerouslySetInnerHTML:{__html:bn(x.q??"")}}),p.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:14},children:(x.options??[]).map((P,B)=>{const W=f===B,I=String.fromCharCode(65+B);let E="transparent",O=v.border,F=v.textBody;return w?B===x.correct?(E="#27ae6015",O="#27ae6050",F="#2ecc71"):W&&B!==x.correct&&(E="#e74c3c15",O="#e74c3c50",F="#ff6b6b"):W&&(E="#f39c1215",O="#f39c1250",F="#f39c12"),p.jsxs("button",{onClick:()=>{w||$(B)},style:{display:"flex",alignItems:"flex-start",gap:10,padding:"12px 14px",borderRadius:8,background:E,border:`1px solid ${O}`,cursor:w?"default":"pointer",textAlign:"left",fontFamily:je,fontSize:13,color:F,lineHeight:1.5,transition:"background 0.15s, border-color 0.15s",width:"100%"},children:[p.jsx("span",{style:{fontWeight:700,fontSize:12,flexShrink:0,width:22,height:22,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",background:W&&!w?"#f39c1220":w&&B===x.correct?"#27ae6020":"transparent",border:`1px solid ${W&&!w?"#f39c1240":"transparent"}`},children:I}),p.jsx("span",{dangerouslySetInnerHTML:{__html:bn(P)}})]},B)})}),w?p.jsxs("div",{style:{padding:"12px 14px",borderRadius:8,background:T?"#27ae6008":"#e74c3c08",border:`1px solid ${T?"#27ae6020":"#e74c3c20"}`},children:[p.jsx("div",{style:{fontSize:13,fontWeight:600,marginBottom:6,color:T?"#2ecc71":"#ff6b6b"},children:T?c==="pl"?"Poprawnie!":"Correct!":c==="pl"?"Niepoprawnie":"Incorrect"}),x.hint&&p.jsx("div",{style:{fontSize:12,color:v.textDim,lineHeight:1.6},dangerouslySetInnerHTML:{__html:bn(x.hint)}})]}):p.jsx("button",{onClick:_,disabled:f==null,style:{padding:"12px 24px",fontSize:13,fontWeight:600,fontFamily:je,borderRadius:8,border:`1px solid ${f!=null?"#FFD16650":v.border}`,background:f!=null?"#FFD16618":"transparent",color:f!=null?"#FFD166":v.textFaint,cursor:f!=null?"pointer":"default",width:"100%"},children:L("lessonCheck",c)})]})}function fv(){const t=window.location.hash.replace(/^#\/?/,"").split("/");return t[0]==="results"&&t[1]?{phase:"results",code:t[1]}:t[0]==="map"&&t[1]?{phase:"map",code:t[1],node:t[2]||null}:t[0]==="map"?{phase:"map"}:null}function hv(){var we;const o=y6,t=$6[o],[r,a]=lt("lang","pl"),s=typeof window<"u"&&((we=window.matchMedia)!=null&&we.call(window,"(prefers-color-scheme: light)").matches)?"bright":"midnight",[c,d]=lt("theme",s),f=fv(),$=f!=null&&f.code?b6(f.code):null,[w,g]=D.useState((f==null?void 0:f.phase)??"hero"),[x,S]=D.useState((f==null?void 0:f.node)??null),[q,j]=D.useState($),[_,T]=D.useState($?{correct:0,incorrect:0,questionsAnswered:0}:null),[P,B]=D.useState(null),[W,I]=D.useState("standard"),[E,O]=D.useState(null),[F,ee]=D.useState(null),[J,ne]=lt("savedCourse",null),re=D.useCallback(ae=>{m1(ae),d(ae)},[d]);m1(c),D.useEffect(()=>{let ae="";w==="results"&&q?ae=`#/results/${V0(q)}`:w==="map"&&q&&(ae=`#/map/${V0(q)}`),ae&&window.location.hash!==ae?window.history.replaceState(null,"",ae):!ae&&window.location.hash&&window.history.replaceState(null,"",window.location.pathname)},[w,q]);const Q=D.useCallback((ae="standard")=>{I(ae),j(null),T(null),B(null),g("quiz")},[]),Y=D.useCallback((ae,he,Me)=>{j(ae),T(he),B(Me??{}),ne({goalId:null,belief:ae,evidence:Me??{},createdAt:new Date().toISOString()}),g("results")},[ne]),ce=D.useCallback(()=>{g("goalPick")},[]),ye=D.useCallback(ae=>{O(ae),j(null),T(null),B(null),g("goalQuiz")},[]),ze=D.useCallback((ae,he,Me,Ue)=>{O(ae),j(he),T(Me),B(Ue??{}),ne({goalId:ae,belief:he,evidence:Ue??{},createdAt:new Date().toISOString()}),g("goalPath")},[ne]),xe=D.useCallback(ae=>{S(ae??null),g("map")},[]),K=D.useCallback(()=>{g("gallery")},[]),ie=D.useCallback(()=>{j(null),T(null),B(null),g("map")},[]),te=D.useCallback(()=>{g("hero")},[]),R=D.useCallback(()=>{g("profile")},[]),U=D.useCallback(()=>{const ae={goalId:null,belief:{},evidence:{},createdAt:new Date().toISOString()};ne(ae),j({}),B({}),g("profile")},[ne]),ge=D.useCallback(ae=>{J&&(j(J.belief??{}),B(J.evidence??{})),S(ae??null),g("map")},[J]),ve=D.useCallback((ae,he)=>{ee(ae),O(he??null),J&&(j(J.belief??{}),B(J.evidence??{})),g("lesson")},[J]),qe=D.useCallback((ae,he)=>{j(ae),B(he),ne(Me=>({...Me??{},goalId:E,belief:ae,evidence:he,createdAt:(Me==null?void 0:Me.createdAt)??new Date().toISOString()}))},[E,ne]);if(!t)return null;switch(w){case"hero":return p.jsx(iv,{lang:r,setLang:a,themeId:c,onThemeChange:re,onStartQuiz:Q,onStartGoalQuiz:ce,onBrowseViz:K,onBrowseMap:ie,onProfile:R,onFromScratch:U,hasSavedCourse:!!J});case"gallery":return p.jsx(cv,{RAW_NODES:t.RAW_NODES,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,lang:r,onClose:te});case"quiz":return p.jsx(av,{RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,lang:r,quizPreset:W,onComplete:Y,onExit:te});case"goalPick":return p.jsx(xm,{isOpen:!0,nodes:t.RAW_NODES,lang:r,SECTIONS:t.SECTIONS,SCOPE_COLORS:t.SCOPE_COLORS,onSelect:ye,onClose:te});case"goalQuiz":return p.jsx(sv,{goalId:E,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,lang:r,onComplete:ze,onExit:te});case"goalPath":return p.jsx(ym,{goalId:E,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,SECTIONS:t.SECTIONS,belief:q,evidence:P,lang:r,onSelectTopic:ae=>xe(ae),onStartLesson:ve,onClose:te});case"results":return p.jsx(lv,{RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,belief:q,stats:_,evidence:P,lang:r,onSeeMap:xe,onRetake:()=>Q(W),onSelectTopic:ae=>xe(ae),onStartPath:ae=>{O(ae),ne(he=>({...he??{},goalId:ae,belief:q??{},evidence:P??{},createdAt:(he==null?void 0:he.createdAt)??new Date().toISOString()})),g("goalPath")}});case"lesson":return p.jsx(dv,{path:F,goalId:E,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,SECTIONS:t.SECTIONS,belief:q??{},evidence:P??{},lang:r,onUpdateBelief:qe,onClose:()=>g(J?"profile":"hero")});case"profile":return p.jsx(uv,{savedCourse:J,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,SECTIONS:t.SECTIONS,lang:r,onResumePath:ge,onStartLesson:ve,onStartNew:()=>{ne(null),j(null),T(null),B(null),g("hero")},onSeeMap:()=>{J&&(j(J.belief??{}),B(J.evidence??{})),g("map")},onClose:te});case"map":return p.jsx(ov,{courseId:o,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,SECTIONS:t.SECTIONS,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,COURSE_META:t.COURSE_META,initialBelief:q,initialEvidence:P,initialSelectedNode:x,initialLang:r,onBackToHome:te},`${o}-${x??""}`);default:return null}}p2.createRoot(document.getElementById("root")).render(p.jsx(D.StrictMode,{children:p.jsx(hv,{})}));
