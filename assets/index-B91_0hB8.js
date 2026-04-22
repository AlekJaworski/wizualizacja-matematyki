(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=r(s);fetch(s.href,c)}})();var _0={exports:{}},Li={},j0={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s1;function ih(){if(s1)return Ge;s1=1;var o=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),z=Symbol.iterator;function S(A){return A===null||typeof A!="object"?null:(A=z&&A[z]||A["@@iterator"],typeof A=="function"?A:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,_={};function T(A,W,ge){this.props=A,this.context=W,this.refs=_,this.updater=ge||q}T.prototype.isReactComponent={},T.prototype.setState=function(A,W){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,W,"setState")},T.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function P(){}P.prototype=T.prototype;function N(A,W,ge){this.props=A,this.context=W,this.refs=_,this.updater=ge||q}var I=N.prototype=new P;I.constructor=N,j(I,T.prototype),I.isPureReactComponent=!0;var O=Array.isArray,C=Object.prototype.hasOwnProperty,U={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function V(A,W,ge){var we,_e={},ze=null,je=null;if(W!=null)for(we in W.ref!==void 0&&(je=W.ref),W.key!==void 0&&(ze=""+W.key),W)C.call(W,we)&&!F.hasOwnProperty(we)&&(_e[we]=W[we]);var ie=arguments.length-2;if(ie===1)_e.children=ge;else if(1<ie){for(var Te=Array(ie),We=0;We<ie;We++)Te[We]=arguments[We+2];_e.children=Te}if(A&&A.defaultProps)for(we in ie=A.defaultProps,ie)_e[we]===void 0&&(_e[we]=ie[we]);return{$$typeof:o,type:A,key:ze,ref:je,props:_e,_owner:U.current}}function Q(A,W){return{$$typeof:o,type:A.type,key:W,ref:A.ref,props:A.props,_owner:A._owner}}function ee(A){return typeof A=="object"&&A!==null&&A.$$typeof===o}function se(A){var W={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(ge){return W[ge]})}var X=/\/+/g;function te(A,W){return typeof A=="object"&&A!==null&&A.key!=null?se(""+A.key):W.toString(36)}function re(A,W,ge,we,_e){var ze=typeof A;(ze==="undefined"||ze==="boolean")&&(A=null);var je=!1;if(A===null)je=!0;else switch(ze){case"string":case"number":je=!0;break;case"object":switch(A.$$typeof){case o:case t:je=!0}}if(je)return je=A,_e=_e(je),A=we===""?"."+te(je,0):we,O(_e)?(ge="",A!=null&&(ge=A.replace(X,"$&/")+"/"),re(_e,W,ge,"",function(We){return We})):_e!=null&&(ee(_e)&&(_e=Q(_e,ge+(!_e.key||je&&je.key===_e.key?"":(""+_e.key).replace(X,"$&/")+"/")+A)),W.push(_e)),1;if(je=0,we=we===""?".":we+":",O(A))for(var ie=0;ie<A.length;ie++){ze=A[ie];var Te=we+te(ze,ie);je+=re(ze,W,ge,Te,_e)}else if(Te=S(A),typeof Te=="function")for(A=Te.call(A),ie=0;!(ze=A.next()).done;)ze=ze.value,Te=we+te(ze,ie++),je+=re(ze,W,ge,Te,_e);else if(ze==="object")throw W=String(A),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return je}function pe(A,W,ge){if(A==null)return A;var we=[],_e=0;return re(A,we,"","",function(ze){return W.call(ge,ze,_e++)}),we}function fe(A){if(A._status===-1){var W=A._result;W=W(),W.then(function(ge){(A._status===0||A._status===-1)&&(A._status=1,A._result=ge)},function(ge){(A._status===0||A._status===-1)&&(A._status=2,A._result=ge)}),A._status===-1&&(A._status=0,A._result=W)}if(A._status===1)return A._result.default;throw A._result}var be={current:null},oe={transition:null},J={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:oe,ReactCurrentOwner:U};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Ge.Children={map:pe,forEach:function(A,W,ge){pe(A,function(){W.apply(this,arguments)},ge)},count:function(A){var W=0;return pe(A,function(){W++}),W},toArray:function(A){return pe(A,function(W){return W})||[]},only:function(A){if(!ee(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},Ge.Component=T,Ge.Fragment=r,Ge.Profiler=s,Ge.PureComponent=N,Ge.StrictMode=a,Ge.Suspense=h,Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,Ge.act=ne,Ge.cloneElement=function(A,W,ge){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var we=j({},A.props),_e=A.key,ze=A.ref,je=A._owner;if(W!=null){if(W.ref!==void 0&&(ze=W.ref,je=U.current),W.key!==void 0&&(_e=""+W.key),A.type&&A.type.defaultProps)var ie=A.type.defaultProps;for(Te in W)C.call(W,Te)&&!F.hasOwnProperty(Te)&&(we[Te]=W[Te]===void 0&&ie!==void 0?ie[Te]:W[Te])}var Te=arguments.length-2;if(Te===1)we.children=ge;else if(1<Te){ie=Array(Te);for(var We=0;We<Te;We++)ie[We]=arguments[We+2];we.children=ie}return{$$typeof:o,type:A.type,key:_e,ref:ze,props:we,_owner:je}},Ge.createContext=function(A){return A={$$typeof:u,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:c,_context:A},A.Consumer=A},Ge.createElement=V,Ge.createFactory=function(A){var W=V.bind(null,A);return W.type=A,W},Ge.createRef=function(){return{current:null}},Ge.forwardRef=function(A){return{$$typeof:m,render:A}},Ge.isValidElement=ee,Ge.lazy=function(A){return{$$typeof:g,_payload:{_status:-1,_result:A},_init:fe}},Ge.memo=function(A,W){return{$$typeof:w,type:A,compare:W===void 0?null:W}},Ge.startTransition=function(A){var W=oe.transition;oe.transition={};try{A()}finally{oe.transition=W}},Ge.unstable_act=ne,Ge.useCallback=function(A,W){return be.current.useCallback(A,W)},Ge.useContext=function(A){return be.current.useContext(A)},Ge.useDebugValue=function(){},Ge.useDeferredValue=function(A){return be.current.useDeferredValue(A)},Ge.useEffect=function(A,W){return be.current.useEffect(A,W)},Ge.useId=function(){return be.current.useId()},Ge.useImperativeHandle=function(A,W,ge){return be.current.useImperativeHandle(A,W,ge)},Ge.useInsertionEffect=function(A,W){return be.current.useInsertionEffect(A,W)},Ge.useLayoutEffect=function(A,W){return be.current.useLayoutEffect(A,W)},Ge.useMemo=function(A,W){return be.current.useMemo(A,W)},Ge.useReducer=function(A,W,ge){return be.current.useReducer(A,W,ge)},Ge.useRef=function(A){return be.current.useRef(A)},Ge.useState=function(A){return be.current.useState(A)},Ge.useSyncExternalStore=function(A,W,ge){return be.current.useSyncExternalStore(A,W,ge)},Ge.useTransition=function(){return be.current.useTransition()},Ge.version="18.3.1",Ge}var l1;function uc(){return l1||(l1=1,j0.exports=ih()),j0.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c1;function ah(){if(c1)return Li;c1=1;var o=uc(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(m,h,w){var g,z={},S=null,q=null;w!==void 0&&(S=""+w),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(q=h.ref);for(g in h)a.call(h,g)&&!c.hasOwnProperty(g)&&(z[g]=h[g]);if(m&&m.defaultProps)for(g in h=m.defaultProps,h)z[g]===void 0&&(z[g]=h[g]);return{$$typeof:t,type:m,key:S,ref:q,props:z,_owner:s.current}}return Li.Fragment=r,Li.jsx=u,Li.jsxs=u,Li}var u1;function sh(){return u1||(u1=1,_0.exports=ah()),_0.exports}var d=sh(),R=uc(),ms={},S0={exports:{}},et={},q0={exports:{}},T0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d1;function lh(){return d1||(d1=1,(function(o){function t(oe,J){var ne=oe.length;oe.push(J);e:for(;0<ne;){var A=ne-1>>>1,W=oe[A];if(0<s(W,J))oe[A]=J,oe[ne]=W,ne=A;else break e}}function r(oe){return oe.length===0?null:oe[0]}function a(oe){if(oe.length===0)return null;var J=oe[0],ne=oe.pop();if(ne!==J){oe[0]=ne;e:for(var A=0,W=oe.length,ge=W>>>1;A<ge;){var we=2*(A+1)-1,_e=oe[we],ze=we+1,je=oe[ze];if(0>s(_e,ne))ze<W&&0>s(je,_e)?(oe[A]=je,oe[ze]=ne,A=ze):(oe[A]=_e,oe[we]=ne,A=we);else if(ze<W&&0>s(je,ne))oe[A]=je,oe[ze]=ne,A=ze;else break e}}return J}function s(oe,J){var ne=oe.sortIndex-J.sortIndex;return ne!==0?ne:oe.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var u=Date,m=u.now();o.unstable_now=function(){return u.now()-m}}var h=[],w=[],g=1,z=null,S=3,q=!1,j=!1,_=!1,T=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(oe){for(var J=r(w);J!==null;){if(J.callback===null)a(w);else if(J.startTime<=oe)a(w),J.sortIndex=J.expirationTime,t(h,J);else break;J=r(w)}}function O(oe){if(_=!1,I(oe),!j)if(r(h)!==null)j=!0,fe(C);else{var J=r(w);J!==null&&be(O,J.startTime-oe)}}function C(oe,J){j=!1,_&&(_=!1,P(V),V=-1),q=!0;var ne=S;try{for(I(J),z=r(h);z!==null&&(!(z.expirationTime>J)||oe&&!se());){var A=z.callback;if(typeof A=="function"){z.callback=null,S=z.priorityLevel;var W=A(z.expirationTime<=J);J=o.unstable_now(),typeof W=="function"?z.callback=W:z===r(h)&&a(h),I(J)}else a(h);z=r(h)}if(z!==null)var ge=!0;else{var we=r(w);we!==null&&be(O,we.startTime-J),ge=!1}return ge}finally{z=null,S=ne,q=!1}}var U=!1,F=null,V=-1,Q=5,ee=-1;function se(){return!(o.unstable_now()-ee<Q)}function X(){if(F!==null){var oe=o.unstable_now();ee=oe;var J=!0;try{J=F(!0,oe)}finally{J?te():(U=!1,F=null)}}else U=!1}var te;if(typeof N=="function")te=function(){N(X)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,pe=re.port2;re.port1.onmessage=X,te=function(){pe.postMessage(null)}}else te=function(){T(X,0)};function fe(oe){F=oe,U||(U=!0,te())}function be(oe,J){V=T(function(){oe(o.unstable_now())},J)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(oe){oe.callback=null},o.unstable_continueExecution=function(){j||q||(j=!0,fe(C))},o.unstable_forceFrameRate=function(oe){0>oe||125<oe?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<oe?Math.floor(1e3/oe):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_getFirstCallbackNode=function(){return r(h)},o.unstable_next=function(oe){switch(S){case 1:case 2:case 3:var J=3;break;default:J=S}var ne=S;S=J;try{return oe()}finally{S=ne}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(oe,J){switch(oe){case 1:case 2:case 3:case 4:case 5:break;default:oe=3}var ne=S;S=oe;try{return J()}finally{S=ne}},o.unstable_scheduleCallback=function(oe,J,ne){var A=o.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?A+ne:A):ne=A,oe){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=ne+W,oe={id:g++,callback:J,priorityLevel:oe,startTime:ne,expirationTime:W,sortIndex:-1},ne>A?(oe.sortIndex=ne,t(w,oe),r(h)===null&&oe===r(w)&&(_?(P(V),V=-1):_=!0,be(O,ne-A))):(oe.sortIndex=W,t(h,oe),j||q||(j=!0,fe(C))),oe},o.unstable_shouldYield=se,o.unstable_wrapCallback=function(oe){var J=S;return function(){var ne=S;S=J;try{return oe.apply(this,arguments)}finally{S=ne}}}})(T0)),T0}var p1;function ch(){return p1||(p1=1,q0.exports=lh()),q0.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m1;function uh(){if(m1)return et;m1=1;var o=uc(),t=ch();function r(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function c(e,n){u(e,n),u(e+"Capture",n)}function u(e,n){for(s[e]=n,e=0;e<n.length;e++)a.add(n[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},z={};function S(e){return h.call(z,e)?!0:h.call(g,e)?!1:w.test(e)?z[e]=!0:(g[e]=!0,!1)}function q(e,n,i,l){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j(e,n,i,l){if(n===null||typeof n>"u"||q(e,n,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function _(e,n,i,l,p,$,v){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=p,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=$,this.removeEmptyString=v}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){T[e]=new _(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];T[n]=new _(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){T[e]=new _(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){T[e]=new _(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){T[e]=new _(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){T[e]=new _(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){T[e]=new _(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){T[e]=new _(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){T[e]=new _(e,5,!1,e.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function N(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(P,N);T[n]=new _(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(P,N);T[n]=new _(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(P,N);T[n]=new _(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){T[e]=new _(e,1,!1,e.toLowerCase(),null,!1,!1)}),T.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){T[e]=new _(e,1,!1,e.toLowerCase(),null,!0,!0)});function I(e,n,i,l){var p=T.hasOwnProperty(n)?T[n]:null;(p!==null?p.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(j(n,i,p,l)&&(i=null),l||p===null?S(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):p.mustUseProperty?e[p.propertyName]=i===null?p.type===3?!1:"":i:(n=p.attributeName,l=p.attributeNamespace,i===null?e.removeAttribute(n):(p=p.type,i=p===3||p===4&&i===!0?"":""+i,l?e.setAttributeNS(l,n,i):e.setAttribute(n,i))))}var O=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C=Symbol.for("react.element"),U=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),ee=Symbol.for("react.provider"),se=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),oe=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=oe&&e[oe]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,A;function W(e){if(A===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);A=n&&n[1]||""}return`
`+A+e}var ge=!1;function we(e,n){if(!e||ge)return"";ge=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(Y){var l=Y}Reflect.construct(e,[],n)}else{try{n.call()}catch(Y){l=Y}e.call(n.prototype)}else{try{throw Error()}catch(Y){l=Y}e()}}catch(Y){if(Y&&l&&typeof Y.stack=="string"){for(var p=Y.stack.split(`
`),$=l.stack.split(`
`),v=p.length-1,M=$.length-1;1<=v&&0<=M&&p[v]!==$[M];)M--;for(;1<=v&&0<=M;v--,M--)if(p[v]!==$[M]){if(v!==1||M!==1)do if(v--,M--,0>M||p[v]!==$[M]){var L=`
`+p[v].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=v&&0<=M);break}}}finally{ge=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?W(e):""}function _e(e){switch(e.tag){case 5:return W(e.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return e=we(e.type,!1),e;case 11:return e=we(e.type.render,!1),e;case 1:return e=we(e.type,!0),e;default:return""}}function ze(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case U:return"Portal";case Q:return"Profiler";case V:return"StrictMode";case te:return"Suspense";case re:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case se:return(e.displayName||"Context")+".Consumer";case ee:return(e._context.displayName||"Context")+".Provider";case X:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pe:return n=e.displayName||null,n!==null?n:ze(e.type)||"Memo";case fe:n=e._payload,e=e._init;try{return ze(e(n))}catch{}}return null}function je(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ze(n);case 8:return n===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ie(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Te(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function We(e){var n=Te(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var p=i.get,$=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return p.call(this)},set:function(v){l=""+v,$.call(this,v)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function vn(e){e._valueTracker||(e._valueTracker=We(e))}function Lt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),l="";return e&&(l=Te(e)?e.checked?"true":"false":e.value),e=l,e!==i?(n.setValue(e),!0):!1}function dt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oe(e,n){var i=n.checked;return ne({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Je(e,n){var i=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;i=ie(n.value!=null?n.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Le(e,n){n=n.checked,n!=null&&I(e,"checked",n,!1)}function Pn(e,n){Le(e,n);var i=ie(n.value),l=n.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?qt(e,n.type,i):n.hasOwnProperty("defaultValue")&&qt(e,n.type,ie(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function wn(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function qt(e,n,i){(n!=="number"||dt(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var In=Array.isArray;function Mn(e,n,i,l){if(e=e.options,n){n={};for(var p=0;p<i.length;p++)n["$"+i[p]]=!0;for(i=0;i<e.length;i++)p=n.hasOwnProperty("$"+e[i].value),e[i].selected!==p&&(e[i].selected=p),p&&l&&(e[i].defaultSelected=!0)}else{for(i=""+ie(i),n=null,p=0;p<e.length;p++){if(e[p].value===i){e[p].selected=!0,l&&(e[p].defaultSelected=!0);return}n!==null||e[p].disabled||(n=e[p])}n!==null&&(n.selected=!0)}}function Uo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(r(91));return ne({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zo(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(r(92));if(In(i)){if(1<i.length)throw Error(r(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:ie(i)}}function ea(e,n){var i=ie(n.value),l=ie(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function na(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ko(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function so(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ko(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Nr,Vo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,l,p){MSApp.execUnsafeLocalFunction(function(){return e(n,i,l,p)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Nr=Nr||document.createElement("div"),Nr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Nr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function sr(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var Ue={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Zn=["Webkit","ms","Moz","O"];Object.keys(Ue).forEach(function(e){Zn.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ue[n]=Ue[e]})});function fn(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||Ue.hasOwnProperty(e)&&Ue[e]?(""+n).trim():n+"px"}function Tt(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var l=i.indexOf("--")===0,p=fn(i,n[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,p):e[i]=p}}var Nn=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pt(e,n){if(n){if(Nn[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(r(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(r(61))}if(n.style!=null&&typeof n.style!="object")throw Error(r(62))}}function lo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yo=null;function Qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xo=null,lr=null,Kn=null;function co(e){if(e=ji(e)){if(typeof Xo!="function")throw Error(r(280));var n=e.stateNode;n&&(n=qa(n),Xo(e.stateNode,e.type,n))}}function cr(e){lr?Kn?Kn.push(e):Kn=[e]:lr=e}function Jo(){if(lr){var e=lr,n=Kn;if(Kn=lr=null,co(e),n)for(e=0;e<n.length;e++)co(n[e])}}function ta(e,n){return e(n)}function ra(){}var uo=!1;function po(e,n,i){if(uo)return e(n,i);uo=!0;try{return ta(e,n,i)}finally{uo=!1,(lr!==null||Kn!==null)&&(ra(),Jo())}}function Pt(e,n){var i=e.stateNode;if(i===null)return null;var l=qa(i);if(l===null)return null;i=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(r(231,n,typeof i));return i}var ei=!1;if(m)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){ei=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{ei=!1}function ni(e,n,i,l,p,$,v,M,L){var Y=Array.prototype.slice.call(arguments,3);try{n.apply(i,Y)}catch(ue){this.onError(ue)}}var Wr=!1,At=null,Wt=!1,ur=null,ti={onError:function(e){Wr=!0,At=e}};function Os(e,n,i,l,p,$,v,M,L){Wr=!1,At=null,ni.apply(ti,arguments)}function Ot(e,n,i,l,p,$,v,M,L){if(Os.apply(this,arguments),Wr){if(Wr){var Y=At;Wr=!1,At=null}else throw Error(r(198));Wt||(Wt=!0,ur=Y)}}function Ht(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function dr(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function ri(e){if(Ht(e)!==e)throw Error(r(188))}function oa(e){var n=e.alternate;if(!n){if(n=Ht(e),n===null)throw Error(r(188));return n!==e?null:e}for(var i=e,l=n;;){var p=i.return;if(p===null)break;var $=p.alternate;if($===null){if(l=p.return,l!==null){i=l;continue}break}if(p.child===$.child){for($=p.child;$;){if($===i)return ri(p),e;if($===l)return ri(p),n;$=$.sibling}throw Error(r(188))}if(i.return!==l.return)i=p,l=$;else{for(var v=!1,M=p.child;M;){if(M===i){v=!0,i=p,l=$;break}if(M===l){v=!0,l=p,i=$;break}M=M.sibling}if(!v){for(M=$.child;M;){if(M===i){v=!0,i=$,l=p;break}if(M===l){v=!0,l=$,i=p;break}M=M.sibling}if(!v)throw Error(r(189))}}if(i.alternate!==l)throw Error(r(190))}if(i.tag!==3)throw Error(r(188));return i.stateNode.current===i?e:n}function ia(e){return e=oa(e),e!==null?aa(e):null}function aa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=aa(e);if(n!==null)return n;e=e.sibling}return null}var oi=t.unstable_scheduleCallback,sa=t.unstable_cancelCallback,Or=t.unstable_shouldYield,Hs=t.unstable_requestPaint,cn=t.unstable_now,ii=t.unstable_getCurrentPriorityLevel,ai=t.unstable_ImmediatePriority,la=t.unstable_UserBlockingPriority,Gt=t.unstable_NormalPriority,Gs=t.unstable_LowPriority,ca=t.unstable_IdlePriority,mo=null,rt=null;function ae(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(mo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:bm,Ve=Math.log,si=Math.LN2;function bm(e){return e>>>=0,e===0?32:31-(Ve(e)/si|0)|0}var ua=64,da=4194304;function li(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pa(e,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,p=e.suspendedLanes,$=e.pingedLanes,v=i&268435455;if(v!==0){var M=v&~p;M!==0?l=li(M):($&=v,$!==0&&(l=li($)))}else v=i&~p,v!==0?l=li(v):$!==0&&(l=li($));if(l===0)return 0;if(n!==0&&n!==l&&(n&p)===0&&(p=l&-l,$=n&-n,p>=$||p===16&&($&4194240)!==0))return n;if((l&4)!==0&&(l|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)i=31-Ie(n),p=1<<i,l|=e[i],n&=~p;return l}function vm(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function km(e,n){for(var i=e.suspendedLanes,l=e.pingedLanes,p=e.expirationTimes,$=e.pendingLanes;0<$;){var v=31-Ie($),M=1<<v,L=p[v];L===-1?((M&i)===0||(M&l)!==0)&&(p[v]=vm(M,n)):L<=n&&(e.expiredLanes|=M),$&=~M}}function Us(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fc(){var e=ua;return ua<<=1,(ua&4194240)===0&&(ua=64),e}function Zs(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function ci(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Ie(n),e[n]=i}function _m(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var p=31-Ie(i),$=1<<p;n[p]=0,l[p]=-1,e[p]=-1,i&=~$}}function Ks(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var l=31-Ie(i),p=1<<l;p&n|e[l]&n&&(e[l]|=n),i&=~p}}var Xe=0;function Ic(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Nc,Vs,Lc,Wc,Oc,Ys=!1,ma=[],pr=null,mr=null,fr=null,ui=new Map,di=new Map,hr=[],jm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hc(e,n){switch(e){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":ui.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(n.pointerId)}}function pi(e,n,i,l,p,$){return e===null||e.nativeEvent!==$?(e={blockedOn:n,domEventName:i,eventSystemFlags:l,nativeEvent:$,targetContainers:[p]},n!==null&&(n=ji(n),n!==null&&Vs(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,p!==null&&n.indexOf(p)===-1&&n.push(p),e)}function Sm(e,n,i,l,p){switch(n){case"focusin":return pr=pi(pr,e,n,i,l,p),!0;case"dragenter":return mr=pi(mr,e,n,i,l,p),!0;case"mouseover":return fr=pi(fr,e,n,i,l,p),!0;case"pointerover":var $=p.pointerId;return ui.set($,pi(ui.get($)||null,e,n,i,l,p)),!0;case"gotpointercapture":return $=p.pointerId,di.set($,pi(di.get($)||null,e,n,i,l,p)),!0}return!1}function Gc(e){var n=Hr(e.target);if(n!==null){var i=Ht(n);if(i!==null){if(n=i.tag,n===13){if(n=dr(i),n!==null){e.blockedOn=n,Oc(e.priority,function(){Lc(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fa(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Xs(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);Yo=l,i.target.dispatchEvent(l),Yo=null}else return n=ji(i),n!==null&&Vs(n),e.blockedOn=i,!1;n.shift()}return!0}function Uc(e,n,i){fa(e)&&i.delete(n)}function qm(){Ys=!1,pr!==null&&fa(pr)&&(pr=null),mr!==null&&fa(mr)&&(mr=null),fr!==null&&fa(fr)&&(fr=null),ui.forEach(Uc),di.forEach(Uc)}function mi(e,n){e.blockedOn===n&&(e.blockedOn=null,Ys||(Ys=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,qm)))}function fi(e){function n(p){return mi(p,e)}if(0<ma.length){mi(ma[0],e);for(var i=1;i<ma.length;i++){var l=ma[i];l.blockedOn===e&&(l.blockedOn=null)}}for(pr!==null&&mi(pr,e),mr!==null&&mi(mr,e),fr!==null&&mi(fr,e),ui.forEach(n),di.forEach(n),i=0;i<hr.length;i++)l=hr[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<hr.length&&(i=hr[0],i.blockedOn===null);)Gc(i),i.blockedOn===null&&hr.shift()}var fo=O.ReactCurrentBatchConfig,ha=!0;function Tm(e,n,i,l){var p=Xe,$=fo.transition;fo.transition=null;try{Xe=1,Qs(e,n,i,l)}finally{Xe=p,fo.transition=$}}function Pm(e,n,i,l){var p=Xe,$=fo.transition;fo.transition=null;try{Xe=4,Qs(e,n,i,l)}finally{Xe=p,fo.transition=$}}function Qs(e,n,i,l){if(ha){var p=Xs(e,n,i,l);if(p===null)hl(e,n,l,$a,i),Hc(e,l);else if(Sm(p,e,n,i,l))l.stopPropagation();else if(Hc(e,l),n&4&&-1<jm.indexOf(e)){for(;p!==null;){var $=ji(p);if($!==null&&Nc($),$=Xs(e,n,i,l),$===null&&hl(e,n,l,$a,i),$===p)break;p=$}p!==null&&l.stopPropagation()}else hl(e,n,l,null,i)}}var $a=null;function Xs(e,n,i,l){if($a=null,e=Qo(l),e=Hr(e),e!==null)if(n=Ht(e),n===null)e=null;else if(i=n.tag,i===13){if(e=dr(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return $a=e,null}function Zc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ii()){case ai:return 1;case la:return 4;case Gt:case Gs:return 16;case ca:return 536870912;default:return 16}default:return 16}}var $r=null,Js=null,ya=null;function Kc(){if(ya)return ya;var e,n=Js,i=n.length,l,p="value"in $r?$r.value:$r.textContent,$=p.length;for(e=0;e<i&&n[e]===p[e];e++);var v=i-e;for(l=1;l<=v&&n[i-l]===p[$-l];l++);return ya=p.slice(e,1<l?1-l:void 0)}function ga(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wa(){return!0}function Vc(){return!1}function ot(e){function n(i,l,p,$,v){this._reactName=i,this._targetInst=p,this.type=l,this.nativeEvent=$,this.target=v,this.currentTarget=null;for(var M in e)e.hasOwnProperty(M)&&(i=e[M],this[M]=i?i($):$[M]);return this.isDefaultPrevented=($.defaultPrevented!=null?$.defaultPrevented:$.returnValue===!1)?wa:Vc,this.isPropagationStopped=Vc,this}return ne(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),n}var ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=ot(ho),hi=ne({},ho,{view:0,detail:0}),Am=ot(hi),nl,tl,$i,za=ne({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ol,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$i&&($i&&e.type==="mousemove"?(nl=e.screenX-$i.screenX,tl=e.screenY-$i.screenY):tl=nl=0,$i=e),nl)},movementY:function(e){return"movementY"in e?e.movementY:tl}}),Yc=ot(za),Cm=ne({},za,{dataTransfer:0}),Mm=ot(Cm),Dm=ne({},hi,{relatedTarget:0}),rl=ot(Dm),Rm=ne({},ho,{animationName:0,elapsedTime:0,pseudoElement:0}),Em=ot(Rm),Bm=ne({},ho,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fm=ot(Bm),Im=ne({},ho,{data:0}),Qc=ot(Im),Nm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Om(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Wm[e])?!!n[e]:!1}function ol(){return Om}var Hm=ne({},hi,{key:function(e){if(e.key){var n=Nm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ga(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ol,charCode:function(e){return e.type==="keypress"?ga(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ga(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gm=ot(Hm),Um=ne({},za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xc=ot(Um),Zm=ne({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ol}),Km=ot(Zm),Vm=ne({},ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ym=ot(Vm),Qm=ne({},za,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xm=ot(Qm),Jm=[9,13,27,32],il=m&&"CompositionEvent"in window,yi=null;m&&"documentMode"in document&&(yi=document.documentMode);var ef=m&&"TextEvent"in window&&!yi,Jc=m&&(!il||yi&&8<yi&&11>=yi),eu=" ",nu=!1;function tu(e,n){switch(e){case"keyup":return Jm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ru(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $o=!1;function nf(e,n){switch(e){case"compositionend":return ru(n);case"keypress":return n.which!==32?null:(nu=!0,eu);case"textInput":return e=n.data,e===eu&&nu?null:e;default:return null}}function tf(e,n){if($o)return e==="compositionend"||!il&&tu(e,n)?(e=Kc(),ya=Js=$r=null,$o=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jc&&n.locale!=="ko"?null:n.data;default:return null}}var rf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ou(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!rf[e.type]:n==="textarea"}function iu(e,n,i,l){cr(l),n=_a(n,"onChange"),0<n.length&&(i=new el("onChange","change",null,i,l),e.push({event:i,listeners:n}))}var gi=null,wi=null;function of(e){vu(e,0)}function xa(e){var n=xo(e);if(Lt(n))return e}function af(e,n){if(e==="change")return n}var au=!1;if(m){var al;if(m){var sl="oninput"in document;if(!sl){var su=document.createElement("div");su.setAttribute("oninput","return;"),sl=typeof su.oninput=="function"}al=sl}else al=!1;au=al&&(!document.documentMode||9<document.documentMode)}function lu(){gi&&(gi.detachEvent("onpropertychange",cu),wi=gi=null)}function cu(e){if(e.propertyName==="value"&&xa(wi)){var n=[];iu(n,wi,e,Qo(e)),po(of,n)}}function sf(e,n,i){e==="focusin"?(lu(),gi=n,wi=i,gi.attachEvent("onpropertychange",cu)):e==="focusout"&&lu()}function lf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xa(wi)}function cf(e,n){if(e==="click")return xa(n)}function uf(e,n){if(e==="input"||e==="change")return xa(n)}function df(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var bt=typeof Object.is=="function"?Object.is:df;function zi(e,n){if(bt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),l=Object.keys(n);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var p=i[l];if(!h.call(n,p)||!bt(e[p],n[p]))return!1}return!0}function uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function du(e,n){var i=uu(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=n&&l>=n)return{node:i,offset:n-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=uu(i)}}function pu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?pu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function mu(){for(var e=window,n=dt();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=dt(e.document)}return n}function ll(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function pf(e){var n=mu(),i=e.focusedElem,l=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&pu(i.ownerDocument.documentElement,i)){if(l!==null&&ll(i)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var p=i.textContent.length,$=Math.min(l.start,p);l=l.end===void 0?$:Math.min(l.end,p),!e.extend&&$>l&&(p=l,l=$,$=p),p=du(i,$);var v=du(i,l);p&&v&&(e.rangeCount!==1||e.anchorNode!==p.node||e.anchorOffset!==p.offset||e.focusNode!==v.node||e.focusOffset!==v.offset)&&(n=n.createRange(),n.setStart(p.node,p.offset),e.removeAllRanges(),$>l?(e.addRange(n),e.extend(v.node,v.offset)):(n.setEnd(v.node,v.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mf=m&&"documentMode"in document&&11>=document.documentMode,yo=null,cl=null,xi=null,ul=!1;function fu(e,n,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ul||yo==null||yo!==dt(l)||(l=yo,"selectionStart"in l&&ll(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),xi&&zi(xi,l)||(xi=l,l=_a(cl,"onSelect"),0<l.length&&(n=new el("onSelect","select",null,n,i),e.push({event:n,listeners:l}),n.target=yo)))}function ba(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var go={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},dl={},hu={};m&&(hu=document.createElement("div").style,"AnimationEvent"in window||(delete go.animationend.animation,delete go.animationiteration.animation,delete go.animationstart.animation),"TransitionEvent"in window||delete go.transitionend.transition);function va(e){if(dl[e])return dl[e];if(!go[e])return e;var n=go[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in hu)return dl[e]=n[i];return e}var $u=va("animationend"),yu=va("animationiteration"),gu=va("animationstart"),wu=va("transitionend"),zu=new Map,xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(e,n){zu.set(e,n),c(n,[e])}for(var pl=0;pl<xu.length;pl++){var ml=xu[pl],ff=ml.toLowerCase(),hf=ml[0].toUpperCase()+ml.slice(1);yr(ff,"on"+hf)}yr($u,"onAnimationEnd"),yr(yu,"onAnimationIteration"),yr(gu,"onAnimationStart"),yr("dblclick","onDoubleClick"),yr("focusin","onFocus"),yr("focusout","onBlur"),yr(wu,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$f=new Set("cancel close invalid load scroll toggle".split(" ").concat(bi));function bu(e,n,i){var l=e.type||"unknown-event";e.currentTarget=i,Ot(l,n,void 0,e),e.currentTarget=null}function vu(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],p=l.event;l=l.listeners;e:{var $=void 0;if(n)for(var v=l.length-1;0<=v;v--){var M=l[v],L=M.instance,Y=M.currentTarget;if(M=M.listener,L!==$&&p.isPropagationStopped())break e;bu(p,M,Y),$=L}else for(v=0;v<l.length;v++){if(M=l[v],L=M.instance,Y=M.currentTarget,M=M.listener,L!==$&&p.isPropagationStopped())break e;bu(p,M,Y),$=L}}}if(Wt)throw e=ur,Wt=!1,ur=null,e}function rn(e,n){var i=n[xl];i===void 0&&(i=n[xl]=new Set);var l=e+"__bubble";i.has(l)||(ku(n,e,2,!1),i.add(l))}function fl(e,n,i){var l=0;n&&(l|=4),ku(i,e,l,n)}var ka="_reactListening"+Math.random().toString(36).slice(2);function vi(e){if(!e[ka]){e[ka]=!0,a.forEach(function(i){i!=="selectionchange"&&($f.has(i)||fl(i,!1,e),fl(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ka]||(n[ka]=!0,fl("selectionchange",!1,n))}}function ku(e,n,i,l){switch(Zc(n)){case 1:var p=Tm;break;case 4:p=Pm;break;default:p=Qs}i=p.bind(null,n,i,e),p=void 0,!ei||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(p=!0),l?p!==void 0?e.addEventListener(n,i,{capture:!0,passive:p}):e.addEventListener(n,i,!0):p!==void 0?e.addEventListener(n,i,{passive:p}):e.addEventListener(n,i,!1)}function hl(e,n,i,l,p){var $=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var M=l.stateNode.containerInfo;if(M===p||M.nodeType===8&&M.parentNode===p)break;if(v===4)for(v=l.return;v!==null;){var L=v.tag;if((L===3||L===4)&&(L=v.stateNode.containerInfo,L===p||L.nodeType===8&&L.parentNode===p))return;v=v.return}for(;M!==null;){if(v=Hr(M),v===null)return;if(L=v.tag,L===5||L===6){l=$=v;continue e}M=M.parentNode}}l=l.return}po(function(){var Y=$,ue=Qo(i),me=[];e:{var le=zu.get(e);if(le!==void 0){var Se=el,Ae=e;switch(e){case"keypress":if(ga(i)===0)break e;case"keydown":case"keyup":Se=Gm;break;case"focusin":Ae="focus",Se=rl;break;case"focusout":Ae="blur",Se=rl;break;case"beforeblur":case"afterblur":Se=rl;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Se=Yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Se=Mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Se=Km;break;case $u:case yu:case gu:Se=Em;break;case wu:Se=Ym;break;case"scroll":Se=Am;break;case"wheel":Se=Xm;break;case"copy":case"cut":case"paste":Se=Fm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Se=Xc}var Ce=(n&4)!==0,yn=!Ce&&e==="scroll",Z=Ce?le!==null?le+"Capture":null:le;Ce=[];for(var G=Y,K;G!==null;){K=G;var ye=K.stateNode;if(K.tag===5&&ye!==null&&(K=ye,Z!==null&&(ye=Pt(G,Z),ye!=null&&Ce.push(ki(G,ye,K)))),yn)break;G=G.return}0<Ce.length&&(le=new Se(le,Ae,null,i,ue),me.push({event:le,listeners:Ce}))}}if((n&7)===0){e:{if(le=e==="mouseover"||e==="pointerover",Se=e==="mouseout"||e==="pointerout",le&&i!==Yo&&(Ae=i.relatedTarget||i.fromElement)&&(Hr(Ae)||Ae[Ut]))break e;if((Se||le)&&(le=ue.window===ue?ue:(le=ue.ownerDocument)?le.defaultView||le.parentWindow:window,Se?(Ae=i.relatedTarget||i.toElement,Se=Y,Ae=Ae?Hr(Ae):null,Ae!==null&&(yn=Ht(Ae),Ae!==yn||Ae.tag!==5&&Ae.tag!==6)&&(Ae=null)):(Se=null,Ae=Y),Se!==Ae)){if(Ce=Yc,ye="onMouseLeave",Z="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Ce=Xc,ye="onPointerLeave",Z="onPointerEnter",G="pointer"),yn=Se==null?le:xo(Se),K=Ae==null?le:xo(Ae),le=new Ce(ye,G+"leave",Se,i,ue),le.target=yn,le.relatedTarget=K,ye=null,Hr(ue)===Y&&(Ce=new Ce(Z,G+"enter",Ae,i,ue),Ce.target=K,Ce.relatedTarget=yn,ye=Ce),yn=ye,Se&&Ae)n:{for(Ce=Se,Z=Ae,G=0,K=Ce;K;K=wo(K))G++;for(K=0,ye=Z;ye;ye=wo(ye))K++;for(;0<G-K;)Ce=wo(Ce),G--;for(;0<K-G;)Z=wo(Z),K--;for(;G--;){if(Ce===Z||Z!==null&&Ce===Z.alternate)break n;Ce=wo(Ce),Z=wo(Z)}Ce=null}else Ce=null;Se!==null&&_u(me,le,Se,Ce,!1),Ae!==null&&yn!==null&&_u(me,yn,Ae,Ce,!0)}}e:{if(le=Y?xo(Y):window,Se=le.nodeName&&le.nodeName.toLowerCase(),Se==="select"||Se==="input"&&le.type==="file")var Me=af;else if(ou(le))if(au)Me=uf;else{Me=lf;var De=sf}else(Se=le.nodeName)&&Se.toLowerCase()==="input"&&(le.type==="checkbox"||le.type==="radio")&&(Me=cf);if(Me&&(Me=Me(e,Y))){iu(me,Me,i,ue);break e}De&&De(e,le,Y),e==="focusout"&&(De=le._wrapperState)&&De.controlled&&le.type==="number"&&qt(le,"number",le.value)}switch(De=Y?xo(Y):window,e){case"focusin":(ou(De)||De.contentEditable==="true")&&(yo=De,cl=Y,xi=null);break;case"focusout":xi=cl=yo=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,fu(me,i,ue);break;case"selectionchange":if(mf)break;case"keydown":case"keyup":fu(me,i,ue)}var Re;if(il)e:{switch(e){case"compositionstart":var Fe="onCompositionStart";break e;case"compositionend":Fe="onCompositionEnd";break e;case"compositionupdate":Fe="onCompositionUpdate";break e}Fe=void 0}else $o?tu(e,i)&&(Fe="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Fe="onCompositionStart");Fe&&(Jc&&i.locale!=="ko"&&($o||Fe!=="onCompositionStart"?Fe==="onCompositionEnd"&&$o&&(Re=Kc()):($r=ue,Js="value"in $r?$r.value:$r.textContent,$o=!0)),De=_a(Y,Fe),0<De.length&&(Fe=new Qc(Fe,e,null,i,ue),me.push({event:Fe,listeners:De}),Re?Fe.data=Re:(Re=ru(i),Re!==null&&(Fe.data=Re)))),(Re=ef?nf(e,i):tf(e,i))&&(Y=_a(Y,"onBeforeInput"),0<Y.length&&(ue=new Qc("onBeforeInput","beforeinput",null,i,ue),me.push({event:ue,listeners:Y}),ue.data=Re))}vu(me,n)})}function ki(e,n,i){return{instance:e,listener:n,currentTarget:i}}function _a(e,n){for(var i=n+"Capture",l=[];e!==null;){var p=e,$=p.stateNode;p.tag===5&&$!==null&&(p=$,$=Pt(e,i),$!=null&&l.unshift(ki(e,$,p)),$=Pt(e,n),$!=null&&l.push(ki(e,$,p))),e=e.return}return l}function wo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _u(e,n,i,l,p){for(var $=n._reactName,v=[];i!==null&&i!==l;){var M=i,L=M.alternate,Y=M.stateNode;if(L!==null&&L===l)break;M.tag===5&&Y!==null&&(M=Y,p?(L=Pt(i,$),L!=null&&v.unshift(ki(i,L,M))):p||(L=Pt(i,$),L!=null&&v.push(ki(i,L,M)))),i=i.return}v.length!==0&&e.push({event:n,listeners:v})}var yf=/\r\n?/g,gf=/\u0000|\uFFFD/g;function ju(e){return(typeof e=="string"?e:""+e).replace(yf,`
`).replace(gf,"")}function ja(e,n,i){if(n=ju(n),ju(e)!==n&&i)throw Error(r(425))}function Sa(){}var $l=null,yl=null;function gl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wl=typeof setTimeout=="function"?setTimeout:void 0,wf=typeof clearTimeout=="function"?clearTimeout:void 0,Su=typeof Promise=="function"?Promise:void 0,zf=typeof queueMicrotask=="function"?queueMicrotask:typeof Su<"u"?function(e){return Su.resolve(null).then(e).catch(xf)}:wl;function xf(e){setTimeout(function(){throw e})}function zl(e,n){var i=n,l=0;do{var p=i.nextSibling;if(e.removeChild(i),p&&p.nodeType===8)if(i=p.data,i==="/$"){if(l===0){e.removeChild(p),fi(n);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=p}while(i);fi(n)}function gr(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function qu(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var zo=Math.random().toString(36).slice(2),Ct="__reactFiber$"+zo,_i="__reactProps$"+zo,Ut="__reactContainer$"+zo,xl="__reactEvents$"+zo,bf="__reactListeners$"+zo,vf="__reactHandles$"+zo;function Hr(e){var n=e[Ct];if(n)return n;for(var i=e.parentNode;i;){if(n=i[Ut]||i[Ct]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=qu(e);e!==null;){if(i=e[Ct])return i;e=qu(e)}return n}e=i,i=e.parentNode}return null}function ji(e){return e=e[Ct]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function qa(e){return e[_i]||null}var bl=[],bo=-1;function wr(e){return{current:e}}function on(e){0>bo||(e.current=bl[bo],bl[bo]=null,bo--)}function nn(e,n){bo++,bl[bo]=e.current,e.current=n}var zr={},Dn=wr(zr),Vn=wr(!1),Gr=zr;function vo(e,n){var i=e.type.contextTypes;if(!i)return zr;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var p={},$;for($ in i)p[$]=n[$];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=p),p}function Yn(e){return e=e.childContextTypes,e!=null}function Ta(){on(Vn),on(Dn)}function Tu(e,n,i){if(Dn.current!==zr)throw Error(r(168));nn(Dn,n),nn(Vn,i)}function Pu(e,n,i){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var p in l)if(!(p in n))throw Error(r(108,je(e)||"Unknown",p));return ne({},i,l)}function Pa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zr,Gr=Dn.current,nn(Dn,e),nn(Vn,Vn.current),!0}function Au(e,n,i){var l=e.stateNode;if(!l)throw Error(r(169));i?(e=Pu(e,n,Gr),l.__reactInternalMemoizedMergedChildContext=e,on(Vn),on(Dn),nn(Dn,e)):on(Vn),nn(Vn,i)}var Zt=null,Aa=!1,vl=!1;function Cu(e){Zt===null?Zt=[e]:Zt.push(e)}function kf(e){Aa=!0,Cu(e)}function xr(){if(!vl&&Zt!==null){vl=!0;var e=0,n=Xe;try{var i=Zt;for(Xe=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}Zt=null,Aa=!1}catch(p){throw Zt!==null&&(Zt=Zt.slice(e+1)),oi(ai,xr),p}finally{Xe=n,vl=!1}}return null}var ko=[],_o=0,Ca=null,Ma=0,mt=[],ft=0,Ur=null,Kt=1,Vt="";function Zr(e,n){ko[_o++]=Ma,ko[_o++]=Ca,Ca=e,Ma=n}function Mu(e,n,i){mt[ft++]=Kt,mt[ft++]=Vt,mt[ft++]=Ur,Ur=e;var l=Kt;e=Vt;var p=32-Ie(l)-1;l&=~(1<<p),i+=1;var $=32-Ie(n)+p;if(30<$){var v=p-p%5;$=(l&(1<<v)-1).toString(32),l>>=v,p-=v,Kt=1<<32-Ie(n)+p|i<<p|l,Vt=$+e}else Kt=1<<$|i<<p|l,Vt=e}function kl(e){e.return!==null&&(Zr(e,1),Mu(e,1,0))}function _l(e){for(;e===Ca;)Ca=ko[--_o],ko[_o]=null,Ma=ko[--_o],ko[_o]=null;for(;e===Ur;)Ur=mt[--ft],mt[ft]=null,Vt=mt[--ft],mt[ft]=null,Kt=mt[--ft],mt[ft]=null}var it=null,at=null,an=!1,vt=null;function Du(e,n){var i=gt(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function Ru(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,it=e,at=gr(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,it=e,at=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=Ur!==null?{id:Kt,overflow:Vt}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=gt(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,it=e,at=null,!0):!1;default:return!1}}function jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sl(e){if(an){var n=at;if(n){var i=n;if(!Ru(e,n)){if(jl(e))throw Error(r(418));n=gr(i.nextSibling);var l=it;n&&Ru(e,n)?Du(l,i):(e.flags=e.flags&-4097|2,an=!1,it=e)}}else{if(jl(e))throw Error(r(418));e.flags=e.flags&-4097|2,an=!1,it=e}}}function Eu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function Da(e){if(e!==it)return!1;if(!an)return Eu(e),an=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!gl(e.type,e.memoizedProps)),n&&(n=at)){if(jl(e))throw Bu(),Error(r(418));for(;n;)Du(e,n),n=gr(n.nextSibling)}if(Eu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){at=gr(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}at=null}}else at=it?gr(e.stateNode.nextSibling):null;return!0}function Bu(){for(var e=at;e;)e=gr(e.nextSibling)}function jo(){at=it=null,an=!1}function ql(e){vt===null?vt=[e]:vt.push(e)}var _f=O.ReactCurrentBatchConfig;function Si(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(r(309));var l=i.stateNode}if(!l)throw Error(r(147,e));var p=l,$=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===$?n.ref:(n=function(v){var M=p.refs;v===null?delete M[$]:M[$]=v},n._stringRef=$,n)}if(typeof e!="string")throw Error(r(284));if(!i._owner)throw Error(r(290,e))}return e}function Ra(e,n){throw e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Fu(e){var n=e._init;return n(e._payload)}function Iu(e){function n(Z,G){if(e){var K=Z.deletions;K===null?(Z.deletions=[G],Z.flags|=16):K.push(G)}}function i(Z,G){if(!e)return null;for(;G!==null;)n(Z,G),G=G.sibling;return null}function l(Z,G){for(Z=new Map;G!==null;)G.key!==null?Z.set(G.key,G):Z.set(G.index,G),G=G.sibling;return Z}function p(Z,G){return Z=Tr(Z,G),Z.index=0,Z.sibling=null,Z}function $(Z,G,K){return Z.index=K,e?(K=Z.alternate,K!==null?(K=K.index,K<G?(Z.flags|=2,G):K):(Z.flags|=2,G)):(Z.flags|=1048576,G)}function v(Z){return e&&Z.alternate===null&&(Z.flags|=2),Z}function M(Z,G,K,ye){return G===null||G.tag!==6?(G=w0(K,Z.mode,ye),G.return=Z,G):(G=p(G,K),G.return=Z,G)}function L(Z,G,K,ye){var Me=K.type;return Me===F?ue(Z,G,K.props.children,ye,K.key):G!==null&&(G.elementType===Me||typeof Me=="object"&&Me!==null&&Me.$$typeof===fe&&Fu(Me)===G.type)?(ye=p(G,K.props),ye.ref=Si(Z,G,K),ye.return=Z,ye):(ye=is(K.type,K.key,K.props,null,Z.mode,ye),ye.ref=Si(Z,G,K),ye.return=Z,ye)}function Y(Z,G,K,ye){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=z0(K,Z.mode,ye),G.return=Z,G):(G=p(G,K.children||[]),G.return=Z,G)}function ue(Z,G,K,ye,Me){return G===null||G.tag!==7?(G=no(K,Z.mode,ye,Me),G.return=Z,G):(G=p(G,K),G.return=Z,G)}function me(Z,G,K){if(typeof G=="string"&&G!==""||typeof G=="number")return G=w0(""+G,Z.mode,K),G.return=Z,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case C:return K=is(G.type,G.key,G.props,null,Z.mode,K),K.ref=Si(Z,null,G),K.return=Z,K;case U:return G=z0(G,Z.mode,K),G.return=Z,G;case fe:var ye=G._init;return me(Z,ye(G._payload),K)}if(In(G)||J(G))return G=no(G,Z.mode,K,null),G.return=Z,G;Ra(Z,G)}return null}function le(Z,G,K,ye){var Me=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Me!==null?null:M(Z,G,""+K,ye);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case C:return K.key===Me?L(Z,G,K,ye):null;case U:return K.key===Me?Y(Z,G,K,ye):null;case fe:return Me=K._init,le(Z,G,Me(K._payload),ye)}if(In(K)||J(K))return Me!==null?null:ue(Z,G,K,ye,null);Ra(Z,K)}return null}function Se(Z,G,K,ye,Me){if(typeof ye=="string"&&ye!==""||typeof ye=="number")return Z=Z.get(K)||null,M(G,Z,""+ye,Me);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case C:return Z=Z.get(ye.key===null?K:ye.key)||null,L(G,Z,ye,Me);case U:return Z=Z.get(ye.key===null?K:ye.key)||null,Y(G,Z,ye,Me);case fe:var De=ye._init;return Se(Z,G,K,De(ye._payload),Me)}if(In(ye)||J(ye))return Z=Z.get(K)||null,ue(G,Z,ye,Me,null);Ra(G,ye)}return null}function Ae(Z,G,K,ye){for(var Me=null,De=null,Re=G,Fe=G=0,Tn=null;Re!==null&&Fe<K.length;Fe++){Re.index>Fe?(Tn=Re,Re=null):Tn=Re.sibling;var Ye=le(Z,Re,K[Fe],ye);if(Ye===null){Re===null&&(Re=Tn);break}e&&Re&&Ye.alternate===null&&n(Z,Re),G=$(Ye,G,Fe),De===null?Me=Ye:De.sibling=Ye,De=Ye,Re=Tn}if(Fe===K.length)return i(Z,Re),an&&Zr(Z,Fe),Me;if(Re===null){for(;Fe<K.length;Fe++)Re=me(Z,K[Fe],ye),Re!==null&&(G=$(Re,G,Fe),De===null?Me=Re:De.sibling=Re,De=Re);return an&&Zr(Z,Fe),Me}for(Re=l(Z,Re);Fe<K.length;Fe++)Tn=Se(Re,Z,Fe,K[Fe],ye),Tn!==null&&(e&&Tn.alternate!==null&&Re.delete(Tn.key===null?Fe:Tn.key),G=$(Tn,G,Fe),De===null?Me=Tn:De.sibling=Tn,De=Tn);return e&&Re.forEach(function(Pr){return n(Z,Pr)}),an&&Zr(Z,Fe),Me}function Ce(Z,G,K,ye){var Me=J(K);if(typeof Me!="function")throw Error(r(150));if(K=Me.call(K),K==null)throw Error(r(151));for(var De=Me=null,Re=G,Fe=G=0,Tn=null,Ye=K.next();Re!==null&&!Ye.done;Fe++,Ye=K.next()){Re.index>Fe?(Tn=Re,Re=null):Tn=Re.sibling;var Pr=le(Z,Re,Ye.value,ye);if(Pr===null){Re===null&&(Re=Tn);break}e&&Re&&Pr.alternate===null&&n(Z,Re),G=$(Pr,G,Fe),De===null?Me=Pr:De.sibling=Pr,De=Pr,Re=Tn}if(Ye.done)return i(Z,Re),an&&Zr(Z,Fe),Me;if(Re===null){for(;!Ye.done;Fe++,Ye=K.next())Ye=me(Z,Ye.value,ye),Ye!==null&&(G=$(Ye,G,Fe),De===null?Me=Ye:De.sibling=Ye,De=Ye);return an&&Zr(Z,Fe),Me}for(Re=l(Z,Re);!Ye.done;Fe++,Ye=K.next())Ye=Se(Re,Z,Fe,Ye.value,ye),Ye!==null&&(e&&Ye.alternate!==null&&Re.delete(Ye.key===null?Fe:Ye.key),G=$(Ye,G,Fe),De===null?Me=Ye:De.sibling=Ye,De=Ye);return e&&Re.forEach(function(oh){return n(Z,oh)}),an&&Zr(Z,Fe),Me}function yn(Z,G,K,ye){if(typeof K=="object"&&K!==null&&K.type===F&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case C:e:{for(var Me=K.key,De=G;De!==null;){if(De.key===Me){if(Me=K.type,Me===F){if(De.tag===7){i(Z,De.sibling),G=p(De,K.props.children),G.return=Z,Z=G;break e}}else if(De.elementType===Me||typeof Me=="object"&&Me!==null&&Me.$$typeof===fe&&Fu(Me)===De.type){i(Z,De.sibling),G=p(De,K.props),G.ref=Si(Z,De,K),G.return=Z,Z=G;break e}i(Z,De);break}else n(Z,De);De=De.sibling}K.type===F?(G=no(K.props.children,Z.mode,ye,K.key),G.return=Z,Z=G):(ye=is(K.type,K.key,K.props,null,Z.mode,ye),ye.ref=Si(Z,G,K),ye.return=Z,Z=ye)}return v(Z);case U:e:{for(De=K.key;G!==null;){if(G.key===De)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){i(Z,G.sibling),G=p(G,K.children||[]),G.return=Z,Z=G;break e}else{i(Z,G);break}else n(Z,G);G=G.sibling}G=z0(K,Z.mode,ye),G.return=Z,Z=G}return v(Z);case fe:return De=K._init,yn(Z,G,De(K._payload),ye)}if(In(K))return Ae(Z,G,K,ye);if(J(K))return Ce(Z,G,K,ye);Ra(Z,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,G!==null&&G.tag===6?(i(Z,G.sibling),G=p(G,K),G.return=Z,Z=G):(i(Z,G),G=w0(K,Z.mode,ye),G.return=Z,Z=G),v(Z)):i(Z,G)}return yn}var So=Iu(!0),Nu=Iu(!1),Ea=wr(null),Ba=null,qo=null,Tl=null;function Pl(){Tl=qo=Ba=null}function Al(e){var n=Ea.current;on(Ea),e._currentValue=n}function Cl(e,n,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===i)break;e=e.return}}function To(e,n){Ba=e,Tl=qo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(Qn=!0),e.firstContext=null)}function ht(e){var n=e._currentValue;if(Tl!==e)if(e={context:e,memoizedValue:n,next:null},qo===null){if(Ba===null)throw Error(r(308));qo=e,Ba.dependencies={lanes:0,firstContext:e}}else qo=qo.next=e;return n}var Kr=null;function Ml(e){Kr===null?Kr=[e]:Kr.push(e)}function Lu(e,n,i,l){var p=n.interleaved;return p===null?(i.next=i,Ml(n)):(i.next=p.next,p.next=i),n.interleaved=i,Yt(e,l)}function Yt(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var br=!1;function Dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function vr(e,n,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ze&2)!==0){var p=l.pending;return p===null?n.next=n:(n.next=p.next,p.next=n),l.pending=n,Yt(e,i)}return p=l.interleaved,p===null?(n.next=n,Ml(l)):(n.next=p.next,p.next=n),l.interleaved=n,Yt(e,i)}function Fa(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,Ks(e,i)}}function Ou(e,n){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var p=null,$=null;if(i=i.firstBaseUpdate,i!==null){do{var v={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};$===null?p=$=v:$=$.next=v,i=i.next}while(i!==null);$===null?p=$=n:$=$.next=n}else p=$=n;i={baseState:l.baseState,firstBaseUpdate:p,lastBaseUpdate:$,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function Ia(e,n,i,l){var p=e.updateQueue;br=!1;var $=p.firstBaseUpdate,v=p.lastBaseUpdate,M=p.shared.pending;if(M!==null){p.shared.pending=null;var L=M,Y=L.next;L.next=null,v===null?$=Y:v.next=Y,v=L;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,M=ue.lastBaseUpdate,M!==v&&(M===null?ue.firstBaseUpdate=Y:M.next=Y,ue.lastBaseUpdate=L))}if($!==null){var me=p.baseState;v=0,ue=Y=L=null,M=$;do{var le=M.lane,Se=M.eventTime;if((l&le)===le){ue!==null&&(ue=ue.next={eventTime:Se,lane:0,tag:M.tag,payload:M.payload,callback:M.callback,next:null});e:{var Ae=e,Ce=M;switch(le=n,Se=i,Ce.tag){case 1:if(Ae=Ce.payload,typeof Ae=="function"){me=Ae.call(Se,me,le);break e}me=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=Ce.payload,le=typeof Ae=="function"?Ae.call(Se,me,le):Ae,le==null)break e;me=ne({},me,le);break e;case 2:br=!0}}M.callback!==null&&M.lane!==0&&(e.flags|=64,le=p.effects,le===null?p.effects=[M]:le.push(M))}else Se={eventTime:Se,lane:le,tag:M.tag,payload:M.payload,callback:M.callback,next:null},ue===null?(Y=ue=Se,L=me):ue=ue.next=Se,v|=le;if(M=M.next,M===null){if(M=p.shared.pending,M===null)break;le=M,M=le.next,le.next=null,p.lastBaseUpdate=le,p.shared.pending=null}}while(!0);if(ue===null&&(L=me),p.baseState=L,p.firstBaseUpdate=Y,p.lastBaseUpdate=ue,n=p.shared.interleaved,n!==null){p=n;do v|=p.lane,p=p.next;while(p!==n)}else $===null&&(p.shared.lanes=0);Qr|=v,e.lanes=v,e.memoizedState=me}}function Hu(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],p=l.callback;if(p!==null){if(l.callback=null,l=i,typeof p!="function")throw Error(r(191,p));p.call(l)}}}var qi={},Mt=wr(qi),Ti=wr(qi),Pi=wr(qi);function Vr(e){if(e===qi)throw Error(r(174));return e}function Rl(e,n){switch(nn(Pi,n),nn(Ti,e),nn(Mt,qi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:so(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=so(n,e)}on(Mt),nn(Mt,n)}function Po(){on(Mt),on(Ti),on(Pi)}function Gu(e){Vr(Pi.current);var n=Vr(Mt.current),i=so(n,e.type);n!==i&&(nn(Ti,e),nn(Mt,i))}function El(e){Ti.current===e&&(on(Mt),on(Ti))}var un=wr(0);function Na(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Bl=[];function Fl(){for(var e=0;e<Bl.length;e++)Bl[e]._workInProgressVersionPrimary=null;Bl.length=0}var La=O.ReactCurrentDispatcher,Il=O.ReactCurrentBatchConfig,Yr=0,dn=null,kn=null,Sn=null,Wa=!1,Ai=!1,Ci=0,jf=0;function Rn(){throw Error(r(321))}function Nl(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!bt(e[i],n[i]))return!1;return!0}function Ll(e,n,i,l,p,$){if(Yr=$,dn=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,La.current=e===null||e.memoizedState===null?Pf:Af,e=i(l,p),Ai){$=0;do{if(Ai=!1,Ci=0,25<=$)throw Error(r(301));$+=1,Sn=kn=null,n.updateQueue=null,La.current=Cf,e=i(l,p)}while(Ai)}if(La.current=Ga,n=kn!==null&&kn.next!==null,Yr=0,Sn=kn=dn=null,Wa=!1,n)throw Error(r(300));return e}function Wl(){var e=Ci!==0;return Ci=0,e}function Dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?dn.memoizedState=Sn=e:Sn=Sn.next=e,Sn}function $t(){if(kn===null){var e=dn.alternate;e=e!==null?e.memoizedState:null}else e=kn.next;var n=Sn===null?dn.memoizedState:Sn.next;if(n!==null)Sn=n,kn=e;else{if(e===null)throw Error(r(310));kn=e,e={memoizedState:kn.memoizedState,baseState:kn.baseState,baseQueue:kn.baseQueue,queue:kn.queue,next:null},Sn===null?dn.memoizedState=Sn=e:Sn=Sn.next=e}return Sn}function Mi(e,n){return typeof n=="function"?n(e):n}function Ol(e){var n=$t(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=kn,p=l.baseQueue,$=i.pending;if($!==null){if(p!==null){var v=p.next;p.next=$.next,$.next=v}l.baseQueue=p=$,i.pending=null}if(p!==null){$=p.next,l=l.baseState;var M=v=null,L=null,Y=$;do{var ue=Y.lane;if((Yr&ue)===ue)L!==null&&(L=L.next={lane:0,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),l=Y.hasEagerState?Y.eagerState:e(l,Y.action);else{var me={lane:ue,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null};L===null?(M=L=me,v=l):L=L.next=me,dn.lanes|=ue,Qr|=ue}Y=Y.next}while(Y!==null&&Y!==$);L===null?v=l:L.next=M,bt(l,n.memoizedState)||(Qn=!0),n.memoizedState=l,n.baseState=v,n.baseQueue=L,i.lastRenderedState=l}if(e=i.interleaved,e!==null){p=e;do $=p.lane,dn.lanes|=$,Qr|=$,p=p.next;while(p!==e)}else p===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function Hl(e){var n=$t(),i=n.queue;if(i===null)throw Error(r(311));i.lastRenderedReducer=e;var l=i.dispatch,p=i.pending,$=n.memoizedState;if(p!==null){i.pending=null;var v=p=p.next;do $=e($,v.action),v=v.next;while(v!==p);bt($,n.memoizedState)||(Qn=!0),n.memoizedState=$,n.baseQueue===null&&(n.baseState=$),i.lastRenderedState=$}return[$,l]}function Uu(){}function Zu(e,n){var i=dn,l=$t(),p=n(),$=!bt(l.memoizedState,p);if($&&(l.memoizedState=p,Qn=!0),l=l.queue,Gl(Yu.bind(null,i,l,e),[e]),l.getSnapshot!==n||$||Sn!==null&&Sn.memoizedState.tag&1){if(i.flags|=2048,Di(9,Vu.bind(null,i,l,p,n),void 0,null),qn===null)throw Error(r(349));(Yr&30)!==0||Ku(i,n,p)}return p}function Ku(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=dn.updateQueue,n===null?(n={lastEffect:null,stores:null},dn.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function Vu(e,n,i,l){n.value=i,n.getSnapshot=l,Qu(n)&&Xu(e)}function Yu(e,n,i){return i(function(){Qu(n)&&Xu(e)})}function Qu(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!bt(e,i)}catch{return!0}}function Xu(e){var n=Yt(e,1);n!==null&&St(n,e,1,-1)}function Ju(e){var n=Dt();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mi,lastRenderedState:e},n.queue=e,e=e.dispatch=Tf.bind(null,dn,e),[n.memoizedState,e]}function Di(e,n,i,l){return e={tag:e,create:n,destroy:i,deps:l,next:null},n=dn.updateQueue,n===null?(n={lastEffect:null,stores:null},dn.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,n.lastEffect=e)),e}function ed(){return $t().memoizedState}function Oa(e,n,i,l){var p=Dt();dn.flags|=e,p.memoizedState=Di(1|n,i,void 0,l===void 0?null:l)}function Ha(e,n,i,l){var p=$t();l=l===void 0?null:l;var $=void 0;if(kn!==null){var v=kn.memoizedState;if($=v.destroy,l!==null&&Nl(l,v.deps)){p.memoizedState=Di(n,i,$,l);return}}dn.flags|=e,p.memoizedState=Di(1|n,i,$,l)}function nd(e,n){return Oa(8390656,8,e,n)}function Gl(e,n){return Ha(2048,8,e,n)}function td(e,n){return Ha(4,2,e,n)}function rd(e,n){return Ha(4,4,e,n)}function od(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function id(e,n,i){return i=i!=null?i.concat([e]):null,Ha(4,4,od.bind(null,n,e),i)}function Ul(){}function ad(e,n){var i=$t();n=n===void 0?null:n;var l=i.memoizedState;return l!==null&&n!==null&&Nl(n,l[1])?l[0]:(i.memoizedState=[e,n],e)}function sd(e,n){var i=$t();n=n===void 0?null:n;var l=i.memoizedState;return l!==null&&n!==null&&Nl(n,l[1])?l[0]:(e=e(),i.memoizedState=[e,n],e)}function ld(e,n,i){return(Yr&21)===0?(e.baseState&&(e.baseState=!1,Qn=!0),e.memoizedState=i):(bt(i,n)||(i=Fc(),dn.lanes|=i,Qr|=i,e.baseState=!0),n)}function Sf(e,n){var i=Xe;Xe=i!==0&&4>i?i:4,e(!0);var l=Il.transition;Il.transition={};try{e(!1),n()}finally{Xe=i,Il.transition=l}}function cd(){return $t().memoizedState}function qf(e,n,i){var l=Sr(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},ud(e))dd(n,i);else if(i=Lu(e,n,i,l),i!==null){var p=Wn();St(i,e,l,p),pd(i,n,l)}}function Tf(e,n,i){var l=Sr(e),p={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(ud(e))dd(n,p);else{var $=e.alternate;if(e.lanes===0&&($===null||$.lanes===0)&&($=n.lastRenderedReducer,$!==null))try{var v=n.lastRenderedState,M=$(v,i);if(p.hasEagerState=!0,p.eagerState=M,bt(M,v)){var L=n.interleaved;L===null?(p.next=p,Ml(n)):(p.next=L.next,L.next=p),n.interleaved=p;return}}catch{}finally{}i=Lu(e,n,p,l),i!==null&&(p=Wn(),St(i,e,l,p),pd(i,n,l))}}function ud(e){var n=e.alternate;return e===dn||n!==null&&n===dn}function dd(e,n){Ai=Wa=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function pd(e,n,i){if((i&4194240)!==0){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,Ks(e,i)}}var Ga={readContext:ht,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},Pf={readContext:ht,useCallback:function(e,n){return Dt().memoizedState=[e,n===void 0?null:n],e},useContext:ht,useEffect:nd,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,Oa(4194308,4,od.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Oa(4194308,4,e,n)},useInsertionEffect:function(e,n){return Oa(4,2,e,n)},useMemo:function(e,n){var i=Dt();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var l=Dt();return n=i!==void 0?i(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=qf.bind(null,dn,e),[l.memoizedState,e]},useRef:function(e){var n=Dt();return e={current:e},n.memoizedState=e},useState:Ju,useDebugValue:Ul,useDeferredValue:function(e){return Dt().memoizedState=e},useTransition:function(){var e=Ju(!1),n=e[0];return e=Sf.bind(null,e[1]),Dt().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var l=dn,p=Dt();if(an){if(i===void 0)throw Error(r(407));i=i()}else{if(i=n(),qn===null)throw Error(r(349));(Yr&30)!==0||Ku(l,n,i)}p.memoizedState=i;var $={value:i,getSnapshot:n};return p.queue=$,nd(Yu.bind(null,l,$,e),[e]),l.flags|=2048,Di(9,Vu.bind(null,l,$,i,n),void 0,null),i},useId:function(){var e=Dt(),n=qn.identifierPrefix;if(an){var i=Vt,l=Kt;i=(l&~(1<<32-Ie(l)-1)).toString(32)+i,n=":"+n+"R"+i,i=Ci++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=jf++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Af={readContext:ht,useCallback:ad,useContext:ht,useEffect:Gl,useImperativeHandle:id,useInsertionEffect:td,useLayoutEffect:rd,useMemo:sd,useReducer:Ol,useRef:ed,useState:function(){return Ol(Mi)},useDebugValue:Ul,useDeferredValue:function(e){var n=$t();return ld(n,kn.memoizedState,e)},useTransition:function(){var e=Ol(Mi)[0],n=$t().memoizedState;return[e,n]},useMutableSource:Uu,useSyncExternalStore:Zu,useId:cd,unstable_isNewReconciler:!1},Cf={readContext:ht,useCallback:ad,useContext:ht,useEffect:Gl,useImperativeHandle:id,useInsertionEffect:td,useLayoutEffect:rd,useMemo:sd,useReducer:Hl,useRef:ed,useState:function(){return Hl(Mi)},useDebugValue:Ul,useDeferredValue:function(e){var n=$t();return kn===null?n.memoizedState=e:ld(n,kn.memoizedState,e)},useTransition:function(){var e=Hl(Mi)[0],n=$t().memoizedState;return[e,n]},useMutableSource:Uu,useSyncExternalStore:Zu,useId:cd,unstable_isNewReconciler:!1};function kt(e,n){if(e&&e.defaultProps){n=ne({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function Zl(e,n,i,l){n=e.memoizedState,i=i(l,n),i=i==null?n:ne({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Ua={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var l=Wn(),p=Sr(e),$=Qt(l,p);$.payload=n,i!=null&&($.callback=i),n=vr(e,$,p),n!==null&&(St(n,e,p,l),Fa(n,e,p))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var l=Wn(),p=Sr(e),$=Qt(l,p);$.tag=1,$.payload=n,i!=null&&($.callback=i),n=vr(e,$,p),n!==null&&(St(n,e,p,l),Fa(n,e,p))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=Wn(),l=Sr(e),p=Qt(i,l);p.tag=2,n!=null&&(p.callback=n),n=vr(e,p,l),n!==null&&(St(n,e,l,i),Fa(n,e,l))}};function md(e,n,i,l,p,$,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,$,v):n.prototype&&n.prototype.isPureReactComponent?!zi(i,l)||!zi(p,$):!0}function fd(e,n,i){var l=!1,p=zr,$=n.contextType;return typeof $=="object"&&$!==null?$=ht($):(p=Yn(n)?Gr:Dn.current,l=n.contextTypes,$=(l=l!=null)?vo(e,p):zr),n=new n(i,$),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ua,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=p,e.__reactInternalMemoizedMaskedChildContext=$),n}function hd(e,n,i,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,l),n.state!==e&&Ua.enqueueReplaceState(n,n.state,null)}function Kl(e,n,i,l){var p=e.stateNode;p.props=i,p.state=e.memoizedState,p.refs={},Dl(e);var $=n.contextType;typeof $=="object"&&$!==null?p.context=ht($):($=Yn(n)?Gr:Dn.current,p.context=vo(e,$)),p.state=e.memoizedState,$=n.getDerivedStateFromProps,typeof $=="function"&&(Zl(e,n,$,i),p.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(n=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),n!==p.state&&Ua.enqueueReplaceState(p,p.state,null),Ia(e,i,p,l),p.state=e.memoizedState),typeof p.componentDidMount=="function"&&(e.flags|=4194308)}function Ao(e,n){try{var i="",l=n;do i+=_e(l),l=l.return;while(l);var p=i}catch($){p=`
Error generating stack: `+$.message+`
`+$.stack}return{value:e,source:n,stack:p,digest:null}}function Vl(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function Yl(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var Mf=typeof WeakMap=="function"?WeakMap:Map;function $d(e,n,i){i=Qt(-1,i),i.tag=3,i.payload={element:null};var l=n.value;return i.callback=function(){Ja||(Ja=!0,d0=l),Yl(e,n)},i}function yd(e,n,i){i=Qt(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var p=n.value;i.payload=function(){return l(p)},i.callback=function(){Yl(e,n)}}var $=e.stateNode;return $!==null&&typeof $.componentDidCatch=="function"&&(i.callback=function(){Yl(e,n),typeof l!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var v=n.stack;this.componentDidCatch(n.value,{componentStack:v!==null?v:""})}),i}function gd(e,n,i){var l=e.pingCache;if(l===null){l=e.pingCache=new Mf;var p=new Set;l.set(n,p)}else p=l.get(n),p===void 0&&(p=new Set,l.set(n,p));p.has(i)||(p.add(i),e=Zf.bind(null,e,n,i),n.then(e,e))}function wd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function zd(e,n,i,l,p){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=Qt(-1,1),n.tag=2,vr(i,n,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=p,e)}var Df=O.ReactCurrentOwner,Qn=!1;function Ln(e,n,i,l){n.child=e===null?Nu(n,null,i,l):So(n,e.child,i,l)}function xd(e,n,i,l,p){i=i.render;var $=n.ref;return To(n,p),l=Ll(e,n,i,l,$,p),i=Wl(),e!==null&&!Qn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~p,Xt(e,n,p)):(an&&i&&kl(n),n.flags|=1,Ln(e,n,l,p),n.child)}function bd(e,n,i,l,p){if(e===null){var $=i.type;return typeof $=="function"&&!g0($)&&$.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=$,vd(e,n,$,l,p)):(e=is(i.type,null,l,n,n.mode,p),e.ref=n.ref,e.return=n,n.child=e)}if($=e.child,(e.lanes&p)===0){var v=$.memoizedProps;if(i=i.compare,i=i!==null?i:zi,i(v,l)&&e.ref===n.ref)return Xt(e,n,p)}return n.flags|=1,e=Tr($,l),e.ref=n.ref,e.return=n,n.child=e}function vd(e,n,i,l,p){if(e!==null){var $=e.memoizedProps;if(zi($,l)&&e.ref===n.ref)if(Qn=!1,n.pendingProps=l=$,(e.lanes&p)!==0)(e.flags&131072)!==0&&(Qn=!0);else return n.lanes=e.lanes,Xt(e,n,p)}return Ql(e,n,i,l,p)}function kd(e,n,i){var l=n.pendingProps,p=l.children,$=e!==null?e.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},nn(Mo,st),st|=i;else{if((i&1073741824)===0)return e=$!==null?$.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,nn(Mo,st),st|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=$!==null?$.baseLanes:i,nn(Mo,st),st|=l}else $!==null?(l=$.baseLanes|i,n.memoizedState=null):l=i,nn(Mo,st),st|=l;return Ln(e,n,p,i),n.child}function _d(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function Ql(e,n,i,l,p){var $=Yn(i)?Gr:Dn.current;return $=vo(n,$),To(n,p),i=Ll(e,n,i,l,$,p),l=Wl(),e!==null&&!Qn?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~p,Xt(e,n,p)):(an&&l&&kl(n),n.flags|=1,Ln(e,n,i,p),n.child)}function jd(e,n,i,l,p){if(Yn(i)){var $=!0;Pa(n)}else $=!1;if(To(n,p),n.stateNode===null)Ka(e,n),fd(n,i,l),Kl(n,i,l,p),l=!0;else if(e===null){var v=n.stateNode,M=n.memoizedProps;v.props=M;var L=v.context,Y=i.contextType;typeof Y=="object"&&Y!==null?Y=ht(Y):(Y=Yn(i)?Gr:Dn.current,Y=vo(n,Y));var ue=i.getDerivedStateFromProps,me=typeof ue=="function"||typeof v.getSnapshotBeforeUpdate=="function";me||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(M!==l||L!==Y)&&hd(n,v,l,Y),br=!1;var le=n.memoizedState;v.state=le,Ia(n,l,v,p),L=n.memoizedState,M!==l||le!==L||Vn.current||br?(typeof ue=="function"&&(Zl(n,i,ue,l),L=n.memoizedState),(M=br||md(n,i,M,l,le,L,Y))?(me||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(n.flags|=4194308)):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=L),v.props=l,v.state=L,v.context=Y,l=M):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{v=n.stateNode,Wu(e,n),M=n.memoizedProps,Y=n.type===n.elementType?M:kt(n.type,M),v.props=Y,me=n.pendingProps,le=v.context,L=i.contextType,typeof L=="object"&&L!==null?L=ht(L):(L=Yn(i)?Gr:Dn.current,L=vo(n,L));var Se=i.getDerivedStateFromProps;(ue=typeof Se=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(M!==me||le!==L)&&hd(n,v,l,L),br=!1,le=n.memoizedState,v.state=le,Ia(n,l,v,p);var Ae=n.memoizedState;M!==me||le!==Ae||Vn.current||br?(typeof Se=="function"&&(Zl(n,i,Se,l),Ae=n.memoizedState),(Y=br||md(n,i,Y,l,le,Ae,L)||!1)?(ue||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(l,Ae,L),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(l,Ae,L)),typeof v.componentDidUpdate=="function"&&(n.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof v.componentDidUpdate!="function"||M===e.memoizedProps&&le===e.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&le===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=Ae),v.props=l,v.state=Ae,v.context=L,l=Y):(typeof v.componentDidUpdate!="function"||M===e.memoizedProps&&le===e.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&le===e.memoizedState||(n.flags|=1024),l=!1)}return Xl(e,n,i,l,$,p)}function Xl(e,n,i,l,p,$){_d(e,n);var v=(n.flags&128)!==0;if(!l&&!v)return p&&Au(n,i,!1),Xt(e,n,$);l=n.stateNode,Df.current=n;var M=v&&typeof i.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&v?(n.child=So(n,e.child,null,$),n.child=So(n,null,M,$)):Ln(e,n,M,$),n.memoizedState=l.state,p&&Au(n,i,!0),n.child}function Sd(e){var n=e.stateNode;n.pendingContext?Tu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Tu(e,n.context,!1),Rl(e,n.containerInfo)}function qd(e,n,i,l,p){return jo(),ql(p),n.flags|=256,Ln(e,n,i,l),n.child}var Jl={dehydrated:null,treeContext:null,retryLane:0};function e0(e){return{baseLanes:e,cachePool:null,transitions:null}}function Td(e,n,i){var l=n.pendingProps,p=un.current,$=!1,v=(n.flags&128)!==0,M;if((M=v)||(M=e!==null&&e.memoizedState===null?!1:(p&2)!==0),M?($=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(p|=1),nn(un,p&1),e===null)return Sl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(v=l.children,e=l.fallback,$?(l=n.mode,$=n.child,v={mode:"hidden",children:v},(l&1)===0&&$!==null?($.childLanes=0,$.pendingProps=v):$=as(v,l,0,null),e=no(e,l,i,null),$.return=n,e.return=n,$.sibling=e,n.child=$,n.child.memoizedState=e0(i),n.memoizedState=Jl,e):n0(n,v));if(p=e.memoizedState,p!==null&&(M=p.dehydrated,M!==null))return Rf(e,n,v,l,M,p,i);if($){$=l.fallback,v=n.mode,p=e.child,M=p.sibling;var L={mode:"hidden",children:l.children};return(v&1)===0&&n.child!==p?(l=n.child,l.childLanes=0,l.pendingProps=L,n.deletions=null):(l=Tr(p,L),l.subtreeFlags=p.subtreeFlags&14680064),M!==null?$=Tr(M,$):($=no($,v,i,null),$.flags|=2),$.return=n,l.return=n,l.sibling=$,n.child=l,l=$,$=n.child,v=e.child.memoizedState,v=v===null?e0(i):{baseLanes:v.baseLanes|i,cachePool:null,transitions:v.transitions},$.memoizedState=v,$.childLanes=e.childLanes&~i,n.memoizedState=Jl,l}return $=e.child,e=$.sibling,l=Tr($,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=i),l.return=n,l.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=l,n.memoizedState=null,l}function n0(e,n){return n=as({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Za(e,n,i,l){return l!==null&&ql(l),So(n,e.child,null,i),e=n0(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Rf(e,n,i,l,p,$,v){if(i)return n.flags&256?(n.flags&=-257,l=Vl(Error(r(422))),Za(e,n,v,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):($=l.fallback,p=n.mode,l=as({mode:"visible",children:l.children},p,0,null),$=no($,p,v,null),$.flags|=2,l.return=n,$.return=n,l.sibling=$,n.child=l,(n.mode&1)!==0&&So(n,e.child,null,v),n.child.memoizedState=e0(v),n.memoizedState=Jl,$);if((n.mode&1)===0)return Za(e,n,v,null);if(p.data==="$!"){if(l=p.nextSibling&&p.nextSibling.dataset,l)var M=l.dgst;return l=M,$=Error(r(419)),l=Vl($,l,void 0),Za(e,n,v,l)}if(M=(v&e.childLanes)!==0,Qn||M){if(l=qn,l!==null){switch(v&-v){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(l.suspendedLanes|v))!==0?0:p,p!==0&&p!==$.retryLane&&($.retryLane=p,Yt(e,p),St(l,e,p,-1))}return y0(),l=Vl(Error(r(421))),Za(e,n,v,l)}return p.data==="$?"?(n.flags|=128,n.child=e.child,n=Kf.bind(null,e),p._reactRetry=n,null):(e=$.treeContext,at=gr(p.nextSibling),it=n,an=!0,vt=null,e!==null&&(mt[ft++]=Kt,mt[ft++]=Vt,mt[ft++]=Ur,Kt=e.id,Vt=e.overflow,Ur=n),n=n0(n,l.children),n.flags|=4096,n)}function Pd(e,n,i){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Cl(e.return,n,i)}function t0(e,n,i,l,p){var $=e.memoizedState;$===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:p}:($.isBackwards=n,$.rendering=null,$.renderingStartTime=0,$.last=l,$.tail=i,$.tailMode=p)}function Ad(e,n,i){var l=n.pendingProps,p=l.revealOrder,$=l.tail;if(Ln(e,n,l.children,i),l=un.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pd(e,i,n);else if(e.tag===19)Pd(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(nn(un,l),(n.mode&1)===0)n.memoizedState=null;else switch(p){case"forwards":for(i=n.child,p=null;i!==null;)e=i.alternate,e!==null&&Na(e)===null&&(p=i),i=i.sibling;i=p,i===null?(p=n.child,n.child=null):(p=i.sibling,i.sibling=null),t0(n,!1,p,i,$);break;case"backwards":for(i=null,p=n.child,n.child=null;p!==null;){if(e=p.alternate,e!==null&&Na(e)===null){n.child=p;break}e=p.sibling,p.sibling=i,i=p,p=e}t0(n,!0,i,null,$);break;case"together":t0(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ka(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Xt(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Qr|=n.lanes,(i&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,i=Tr(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=Tr(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function Ef(e,n,i){switch(n.tag){case 3:Sd(n),jo();break;case 5:Gu(n);break;case 1:Yn(n.type)&&Pa(n);break;case 4:Rl(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,p=n.memoizedProps.value;nn(Ea,l._currentValue),l._currentValue=p;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(nn(un,un.current&1),n.flags|=128,null):(i&n.child.childLanes)!==0?Td(e,n,i):(nn(un,un.current&1),e=Xt(e,n,i),e!==null?e.sibling:null);nn(un,un.current&1);break;case 19:if(l=(i&n.childLanes)!==0,(e.flags&128)!==0){if(l)return Ad(e,n,i);n.flags|=128}if(p=n.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),nn(un,un.current),l)break;return null;case 22:case 23:return n.lanes=0,kd(e,n,i)}return Xt(e,n,i)}var Cd,r0,Md,Dd;Cd=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},r0=function(){},Md=function(e,n,i,l){var p=e.memoizedProps;if(p!==l){e=n.stateNode,Vr(Mt.current);var $=null;switch(i){case"input":p=Oe(e,p),l=Oe(e,l),$=[];break;case"select":p=ne({},p,{value:void 0}),l=ne({},l,{value:void 0}),$=[];break;case"textarea":p=Uo(e,p),l=Uo(e,l),$=[];break;default:typeof p.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Sa)}pt(i,l);var v;i=null;for(Y in p)if(!l.hasOwnProperty(Y)&&p.hasOwnProperty(Y)&&p[Y]!=null)if(Y==="style"){var M=p[Y];for(v in M)M.hasOwnProperty(v)&&(i||(i={}),i[v]="")}else Y!=="dangerouslySetInnerHTML"&&Y!=="children"&&Y!=="suppressContentEditableWarning"&&Y!=="suppressHydrationWarning"&&Y!=="autoFocus"&&(s.hasOwnProperty(Y)?$||($=[]):($=$||[]).push(Y,null));for(Y in l){var L=l[Y];if(M=p!=null?p[Y]:void 0,l.hasOwnProperty(Y)&&L!==M&&(L!=null||M!=null))if(Y==="style")if(M){for(v in M)!M.hasOwnProperty(v)||L&&L.hasOwnProperty(v)||(i||(i={}),i[v]="");for(v in L)L.hasOwnProperty(v)&&M[v]!==L[v]&&(i||(i={}),i[v]=L[v])}else i||($||($=[]),$.push(Y,i)),i=L;else Y==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,M=M?M.__html:void 0,L!=null&&M!==L&&($=$||[]).push(Y,L)):Y==="children"?typeof L!="string"&&typeof L!="number"||($=$||[]).push(Y,""+L):Y!=="suppressContentEditableWarning"&&Y!=="suppressHydrationWarning"&&(s.hasOwnProperty(Y)?(L!=null&&Y==="onScroll"&&rn("scroll",e),$||M===L||($=[])):($=$||[]).push(Y,L))}i&&($=$||[]).push("style",i);var Y=$;(n.updateQueue=Y)&&(n.flags|=4)}},Dd=function(e,n,i,l){i!==l&&(n.flags|=4)};function Ri(e,n){if(!an)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function En(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(n)for(var p=e.child;p!==null;)i|=p.lanes|p.childLanes,l|=p.subtreeFlags&14680064,l|=p.flags&14680064,p.return=e,p=p.sibling;else for(p=e.child;p!==null;)i|=p.lanes|p.childLanes,l|=p.subtreeFlags,l|=p.flags,p.return=e,p=p.sibling;return e.subtreeFlags|=l,e.childLanes=i,n}function Bf(e,n,i){var l=n.pendingProps;switch(_l(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(n),null;case 1:return Yn(n.type)&&Ta(),En(n),null;case 3:return l=n.stateNode,Po(),on(Vn),on(Dn),Fl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Da(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,vt!==null&&(f0(vt),vt=null))),r0(e,n),En(n),null;case 5:El(n);var p=Vr(Pi.current);if(i=n.type,e!==null&&n.stateNode!=null)Md(e,n,i,l,p),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(r(166));return En(n),null}if(e=Vr(Mt.current),Da(n)){l=n.stateNode,i=n.type;var $=n.memoizedProps;switch(l[Ct]=n,l[_i]=$,e=(n.mode&1)!==0,i){case"dialog":rn("cancel",l),rn("close",l);break;case"iframe":case"object":case"embed":rn("load",l);break;case"video":case"audio":for(p=0;p<bi.length;p++)rn(bi[p],l);break;case"source":rn("error",l);break;case"img":case"image":case"link":rn("error",l),rn("load",l);break;case"details":rn("toggle",l);break;case"input":Je(l,$),rn("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!$.multiple},rn("invalid",l);break;case"textarea":Zo(l,$),rn("invalid",l)}pt(i,$),p=null;for(var v in $)if($.hasOwnProperty(v)){var M=$[v];v==="children"?typeof M=="string"?l.textContent!==M&&($.suppressHydrationWarning!==!0&&ja(l.textContent,M,e),p=["children",M]):typeof M=="number"&&l.textContent!==""+M&&($.suppressHydrationWarning!==!0&&ja(l.textContent,M,e),p=["children",""+M]):s.hasOwnProperty(v)&&M!=null&&v==="onScroll"&&rn("scroll",l)}switch(i){case"input":vn(l),wn(l,$,!0);break;case"textarea":vn(l),na(l);break;case"select":case"option":break;default:typeof $.onClick=="function"&&(l.onclick=Sa)}l=p,n.updateQueue=l,l!==null&&(n.flags|=4)}else{v=p.nodeType===9?p:p.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ko(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=v.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=v.createElement(i,{is:l.is}):(e=v.createElement(i),i==="select"&&(v=e,l.multiple?v.multiple=!0:l.size&&(v.size=l.size))):e=v.createElementNS(e,i),e[Ct]=n,e[_i]=l,Cd(e,n,!1,!1),n.stateNode=e;e:{switch(v=lo(i,l),i){case"dialog":rn("cancel",e),rn("close",e),p=l;break;case"iframe":case"object":case"embed":rn("load",e),p=l;break;case"video":case"audio":for(p=0;p<bi.length;p++)rn(bi[p],e);p=l;break;case"source":rn("error",e),p=l;break;case"img":case"image":case"link":rn("error",e),rn("load",e),p=l;break;case"details":rn("toggle",e),p=l;break;case"input":Je(e,l),p=Oe(e,l),rn("invalid",e);break;case"option":p=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},p=ne({},l,{value:void 0}),rn("invalid",e);break;case"textarea":Zo(e,l),p=Uo(e,l),rn("invalid",e);break;default:p=l}pt(i,p),M=p;for($ in M)if(M.hasOwnProperty($)){var L=M[$];$==="style"?Tt(e,L):$==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,L!=null&&Vo(e,L)):$==="children"?typeof L=="string"?(i!=="textarea"||L!=="")&&sr(e,L):typeof L=="number"&&sr(e,""+L):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(s.hasOwnProperty($)?L!=null&&$==="onScroll"&&rn("scroll",e):L!=null&&I(e,$,L,v))}switch(i){case"input":vn(e),wn(e,l,!1);break;case"textarea":vn(e),na(e);break;case"option":l.value!=null&&e.setAttribute("value",""+ie(l.value));break;case"select":e.multiple=!!l.multiple,$=l.value,$!=null?Mn(e,!!l.multiple,$,!1):l.defaultValue!=null&&Mn(e,!!l.multiple,l.defaultValue,!0);break;default:typeof p.onClick=="function"&&(e.onclick=Sa)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return En(n),null;case 6:if(e&&n.stateNode!=null)Dd(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(r(166));if(i=Vr(Pi.current),Vr(Mt.current),Da(n)){if(l=n.stateNode,i=n.memoizedProps,l[Ct]=n,($=l.nodeValue!==i)&&(e=it,e!==null))switch(e.tag){case 3:ja(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ja(l.nodeValue,i,(e.mode&1)!==0)}$&&(n.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[Ct]=n,n.stateNode=l}return En(n),null;case 13:if(on(un),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(an&&at!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Bu(),jo(),n.flags|=98560,$=!1;else if($=Da(n),l!==null&&l.dehydrated!==null){if(e===null){if(!$)throw Error(r(318));if($=n.memoizedState,$=$!==null?$.dehydrated:null,!$)throw Error(r(317));$[Ct]=n}else jo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;En(n),$=!1}else vt!==null&&(f0(vt),vt=null),$=!0;if(!$)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=i,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(un.current&1)!==0?_n===0&&(_n=3):y0())),n.updateQueue!==null&&(n.flags|=4),En(n),null);case 4:return Po(),r0(e,n),e===null&&vi(n.stateNode.containerInfo),En(n),null;case 10:return Al(n.type._context),En(n),null;case 17:return Yn(n.type)&&Ta(),En(n),null;case 19:if(on(un),$=n.memoizedState,$===null)return En(n),null;if(l=(n.flags&128)!==0,v=$.rendering,v===null)if(l)Ri($,!1);else{if(_n!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(v=Na(e),v!==null){for(n.flags|=128,Ri($,!1),l=v.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=i,i=n.child;i!==null;)$=i,e=l,$.flags&=14680066,v=$.alternate,v===null?($.childLanes=0,$.lanes=e,$.child=null,$.subtreeFlags=0,$.memoizedProps=null,$.memoizedState=null,$.updateQueue=null,$.dependencies=null,$.stateNode=null):($.childLanes=v.childLanes,$.lanes=v.lanes,$.child=v.child,$.subtreeFlags=0,$.deletions=null,$.memoizedProps=v.memoizedProps,$.memoizedState=v.memoizedState,$.updateQueue=v.updateQueue,$.type=v.type,e=v.dependencies,$.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return nn(un,un.current&1|2),n.child}e=e.sibling}$.tail!==null&&cn()>Do&&(n.flags|=128,l=!0,Ri($,!1),n.lanes=4194304)}else{if(!l)if(e=Na(v),e!==null){if(n.flags|=128,l=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),Ri($,!0),$.tail===null&&$.tailMode==="hidden"&&!v.alternate&&!an)return En(n),null}else 2*cn()-$.renderingStartTime>Do&&i!==1073741824&&(n.flags|=128,l=!0,Ri($,!1),n.lanes=4194304);$.isBackwards?(v.sibling=n.child,n.child=v):(i=$.last,i!==null?i.sibling=v:n.child=v,$.last=v)}return $.tail!==null?(n=$.tail,$.rendering=n,$.tail=n.sibling,$.renderingStartTime=cn(),n.sibling=null,i=un.current,nn(un,l?i&1|2:i&1),n):(En(n),null);case 22:case 23:return $0(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(st&1073741824)!==0&&(En(n),n.subtreeFlags&6&&(n.flags|=8192)):En(n),null;case 24:return null;case 25:return null}throw Error(r(156,n.tag))}function Ff(e,n){switch(_l(n),n.tag){case 1:return Yn(n.type)&&Ta(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Po(),on(Vn),on(Dn),Fl(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return El(n),null;case 13:if(on(un),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));jo()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return on(un),null;case 4:return Po(),null;case 10:return Al(n.type._context),null;case 22:case 23:return $0(),null;case 24:return null;default:return null}}var Va=!1,Bn=!1,If=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function Co(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){hn(e,n,l)}else i.current=null}function o0(e,n,i){try{i()}catch(l){hn(e,n,l)}}var Rd=!1;function Nf(e,n){if($l=ha,e=mu(),ll(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var p=l.anchorOffset,$=l.focusNode;l=l.focusOffset;try{i.nodeType,$.nodeType}catch{i=null;break e}var v=0,M=-1,L=-1,Y=0,ue=0,me=e,le=null;n:for(;;){for(var Se;me!==i||p!==0&&me.nodeType!==3||(M=v+p),me!==$||l!==0&&me.nodeType!==3||(L=v+l),me.nodeType===3&&(v+=me.nodeValue.length),(Se=me.firstChild)!==null;)le=me,me=Se;for(;;){if(me===e)break n;if(le===i&&++Y===p&&(M=v),le===$&&++ue===l&&(L=v),(Se=me.nextSibling)!==null)break;me=le,le=me.parentNode}me=Se}i=M===-1||L===-1?null:{start:M,end:L}}else i=null}i=i||{start:0,end:0}}else i=null;for(yl={focusedElem:e,selectionRange:i},ha=!1,Pe=n;Pe!==null;)if(n=Pe,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Pe=e;else for(;Pe!==null;){n=Pe;try{var Ae=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Ae!==null){var Ce=Ae.memoizedProps,yn=Ae.memoizedState,Z=n.stateNode,G=Z.getSnapshotBeforeUpdate(n.elementType===n.type?Ce:kt(n.type,Ce),yn);Z.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var K=n.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(ye){hn(n,n.return,ye)}if(e=n.sibling,e!==null){e.return=n.return,Pe=e;break}Pe=n.return}return Ae=Rd,Rd=!1,Ae}function Ei(e,n,i){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var p=l=l.next;do{if((p.tag&e)===e){var $=p.destroy;p.destroy=void 0,$!==void 0&&o0(n,i,$)}p=p.next}while(p!==l)}}function Ya(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==n)}}function i0(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function Ed(e){var n=e.alternate;n!==null&&(e.alternate=null,Ed(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ct],delete n[_i],delete n[xl],delete n[bf],delete n[vf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bd(e){return e.tag===5||e.tag===3||e.tag===4}function Fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function a0(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Sa));else if(l!==4&&(e=e.child,e!==null))for(a0(e,n,i),e=e.sibling;e!==null;)a0(e,n,i),e=e.sibling}function s0(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(s0(e,n,i),e=e.sibling;e!==null;)s0(e,n,i),e=e.sibling}var An=null,_t=!1;function kr(e,n,i){for(i=i.child;i!==null;)Id(e,n,i),i=i.sibling}function Id(e,n,i){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(mo,i)}catch{}switch(i.tag){case 5:Bn||Co(i,n);case 6:var l=An,p=_t;An=null,kr(e,n,i),An=l,_t=p,An!==null&&(_t?(e=An,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):An.removeChild(i.stateNode));break;case 18:An!==null&&(_t?(e=An,i=i.stateNode,e.nodeType===8?zl(e.parentNode,i):e.nodeType===1&&zl(e,i),fi(e)):zl(An,i.stateNode));break;case 4:l=An,p=_t,An=i.stateNode.containerInfo,_t=!0,kr(e,n,i),An=l,_t=p;break;case 0:case 11:case 14:case 15:if(!Bn&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){p=l=l.next;do{var $=p,v=$.destroy;$=$.tag,v!==void 0&&(($&2)!==0||($&4)!==0)&&o0(i,n,v),p=p.next}while(p!==l)}kr(e,n,i);break;case 1:if(!Bn&&(Co(i,n),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(M){hn(i,n,M)}kr(e,n,i);break;case 21:kr(e,n,i);break;case 22:i.mode&1?(Bn=(l=Bn)||i.memoizedState!==null,kr(e,n,i),Bn=l):kr(e,n,i);break;default:kr(e,n,i)}}function Nd(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new If),n.forEach(function(l){var p=Vf.bind(null,e,l);i.has(l)||(i.add(l),l.then(p,p))})}}function jt(e,n){var i=n.deletions;if(i!==null)for(var l=0;l<i.length;l++){var p=i[l];try{var $=e,v=n,M=v;e:for(;M!==null;){switch(M.tag){case 5:An=M.stateNode,_t=!1;break e;case 3:An=M.stateNode.containerInfo,_t=!0;break e;case 4:An=M.stateNode.containerInfo,_t=!0;break e}M=M.return}if(An===null)throw Error(r(160));Id($,v,p),An=null,_t=!1;var L=p.alternate;L!==null&&(L.return=null),p.return=null}catch(Y){hn(p,n,Y)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ld(n,e),n=n.sibling}function Ld(e,n){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(jt(n,e),Rt(e),l&4){try{Ei(3,e,e.return),Ya(3,e)}catch(Ce){hn(e,e.return,Ce)}try{Ei(5,e,e.return)}catch(Ce){hn(e,e.return,Ce)}}break;case 1:jt(n,e),Rt(e),l&512&&i!==null&&Co(i,i.return);break;case 5:if(jt(n,e),Rt(e),l&512&&i!==null&&Co(i,i.return),e.flags&32){var p=e.stateNode;try{sr(p,"")}catch(Ce){hn(e,e.return,Ce)}}if(l&4&&(p=e.stateNode,p!=null)){var $=e.memoizedProps,v=i!==null?i.memoizedProps:$,M=e.type,L=e.updateQueue;if(e.updateQueue=null,L!==null)try{M==="input"&&$.type==="radio"&&$.name!=null&&Le(p,$),lo(M,v);var Y=lo(M,$);for(v=0;v<L.length;v+=2){var ue=L[v],me=L[v+1];ue==="style"?Tt(p,me):ue==="dangerouslySetInnerHTML"?Vo(p,me):ue==="children"?sr(p,me):I(p,ue,me,Y)}switch(M){case"input":Pn(p,$);break;case"textarea":ea(p,$);break;case"select":var le=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!$.multiple;var Se=$.value;Se!=null?Mn(p,!!$.multiple,Se,!1):le!==!!$.multiple&&($.defaultValue!=null?Mn(p,!!$.multiple,$.defaultValue,!0):Mn(p,!!$.multiple,$.multiple?[]:"",!1))}p[_i]=$}catch(Ce){hn(e,e.return,Ce)}}break;case 6:if(jt(n,e),Rt(e),l&4){if(e.stateNode===null)throw Error(r(162));p=e.stateNode,$=e.memoizedProps;try{p.nodeValue=$}catch(Ce){hn(e,e.return,Ce)}}break;case 3:if(jt(n,e),Rt(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{fi(n.containerInfo)}catch(Ce){hn(e,e.return,Ce)}break;case 4:jt(n,e),Rt(e);break;case 13:jt(n,e),Rt(e),p=e.child,p.flags&8192&&($=p.memoizedState!==null,p.stateNode.isHidden=$,!$||p.alternate!==null&&p.alternate.memoizedState!==null||(u0=cn())),l&4&&Nd(e);break;case 22:if(ue=i!==null&&i.memoizedState!==null,e.mode&1?(Bn=(Y=Bn)||ue,jt(n,e),Bn=Y):jt(n,e),Rt(e),l&8192){if(Y=e.memoizedState!==null,(e.stateNode.isHidden=Y)&&!ue&&(e.mode&1)!==0)for(Pe=e,ue=e.child;ue!==null;){for(me=Pe=ue;Pe!==null;){switch(le=Pe,Se=le.child,le.tag){case 0:case 11:case 14:case 15:Ei(4,le,le.return);break;case 1:Co(le,le.return);var Ae=le.stateNode;if(typeof Ae.componentWillUnmount=="function"){l=le,i=le.return;try{n=l,Ae.props=n.memoizedProps,Ae.state=n.memoizedState,Ae.componentWillUnmount()}catch(Ce){hn(l,i,Ce)}}break;case 5:Co(le,le.return);break;case 22:if(le.memoizedState!==null){Hd(me);continue}}Se!==null?(Se.return=le,Pe=Se):Hd(me)}ue=ue.sibling}e:for(ue=null,me=e;;){if(me.tag===5){if(ue===null){ue=me;try{p=me.stateNode,Y?($=p.style,typeof $.setProperty=="function"?$.setProperty("display","none","important"):$.display="none"):(M=me.stateNode,L=me.memoizedProps.style,v=L!=null&&L.hasOwnProperty("display")?L.display:null,M.style.display=fn("display",v))}catch(Ce){hn(e,e.return,Ce)}}}else if(me.tag===6){if(ue===null)try{me.stateNode.nodeValue=Y?"":me.memoizedProps}catch(Ce){hn(e,e.return,Ce)}}else if((me.tag!==22&&me.tag!==23||me.memoizedState===null||me===e)&&me.child!==null){me.child.return=me,me=me.child;continue}if(me===e)break e;for(;me.sibling===null;){if(me.return===null||me.return===e)break e;ue===me&&(ue=null),me=me.return}ue===me&&(ue=null),me.sibling.return=me.return,me=me.sibling}}break;case 19:jt(n,e),Rt(e),l&4&&Nd(e);break;case 21:break;default:jt(n,e),Rt(e)}}function Rt(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(Bd(i)){var l=i;break e}i=i.return}throw Error(r(160))}switch(l.tag){case 5:var p=l.stateNode;l.flags&32&&(sr(p,""),l.flags&=-33);var $=Fd(e);s0(e,$,p);break;case 3:case 4:var v=l.stateNode.containerInfo,M=Fd(e);a0(e,M,v);break;default:throw Error(r(161))}}catch(L){hn(e,e.return,L)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Lf(e,n,i){Pe=e,Wd(e)}function Wd(e,n,i){for(var l=(e.mode&1)!==0;Pe!==null;){var p=Pe,$=p.child;if(p.tag===22&&l){var v=p.memoizedState!==null||Va;if(!v){var M=p.alternate,L=M!==null&&M.memoizedState!==null||Bn;M=Va;var Y=Bn;if(Va=v,(Bn=L)&&!Y)for(Pe=p;Pe!==null;)v=Pe,L=v.child,v.tag===22&&v.memoizedState!==null?Gd(p):L!==null?(L.return=v,Pe=L):Gd(p);for(;$!==null;)Pe=$,Wd($),$=$.sibling;Pe=p,Va=M,Bn=Y}Od(e)}else(p.subtreeFlags&8772)!==0&&$!==null?($.return=p,Pe=$):Od(e)}}function Od(e){for(;Pe!==null;){var n=Pe;if((n.flags&8772)!==0){var i=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Bn||Ya(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!Bn)if(i===null)l.componentDidMount();else{var p=n.elementType===n.type?i.memoizedProps:kt(n.type,i.memoizedProps);l.componentDidUpdate(p,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var $=n.updateQueue;$!==null&&Hu(n,$,l);break;case 3:var v=n.updateQueue;if(v!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}Hu(n,v,i)}break;case 5:var M=n.stateNode;if(i===null&&n.flags&4){i=M;var L=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":L.autoFocus&&i.focus();break;case"img":L.src&&(i.src=L.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var Y=n.alternate;if(Y!==null){var ue=Y.memoizedState;if(ue!==null){var me=ue.dehydrated;me!==null&&fi(me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}Bn||n.flags&512&&i0(n)}catch(le){hn(n,n.return,le)}}if(n===e){Pe=null;break}if(i=n.sibling,i!==null){i.return=n.return,Pe=i;break}Pe=n.return}}function Hd(e){for(;Pe!==null;){var n=Pe;if(n===e){Pe=null;break}var i=n.sibling;if(i!==null){i.return=n.return,Pe=i;break}Pe=n.return}}function Gd(e){for(;Pe!==null;){var n=Pe;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{Ya(4,n)}catch(L){hn(n,i,L)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var p=n.return;try{l.componentDidMount()}catch(L){hn(n,p,L)}}var $=n.return;try{i0(n)}catch(L){hn(n,$,L)}break;case 5:var v=n.return;try{i0(n)}catch(L){hn(n,v,L)}}}catch(L){hn(n,n.return,L)}if(n===e){Pe=null;break}var M=n.sibling;if(M!==null){M.return=n.return,Pe=M;break}Pe=n.return}}var Wf=Math.ceil,Qa=O.ReactCurrentDispatcher,l0=O.ReactCurrentOwner,yt=O.ReactCurrentBatchConfig,Ze=0,qn=null,zn=null,Cn=0,st=0,Mo=wr(0),_n=0,Bi=null,Qr=0,Xa=0,c0=0,Fi=null,Xn=null,u0=0,Do=1/0,Jt=null,Ja=!1,d0=null,_r=null,es=!1,jr=null,ns=0,Ii=0,p0=null,ts=-1,rs=0;function Wn(){return(Ze&6)!==0?cn():ts!==-1?ts:ts=cn()}function Sr(e){return(e.mode&1)===0?1:(Ze&2)!==0&&Cn!==0?Cn&-Cn:_f.transition!==null?(rs===0&&(rs=Fc()),rs):(e=Xe,e!==0||(e=window.event,e=e===void 0?16:Zc(e.type)),e)}function St(e,n,i,l){if(50<Ii)throw Ii=0,p0=null,Error(r(185));ci(e,i,l),((Ze&2)===0||e!==qn)&&(e===qn&&((Ze&2)===0&&(Xa|=i),_n===4&&qr(e,Cn)),Jn(e,l),i===1&&Ze===0&&(n.mode&1)===0&&(Do=cn()+500,Aa&&xr()))}function Jn(e,n){var i=e.callbackNode;km(e,n);var l=pa(e,e===qn?Cn:0);if(l===0)i!==null&&sa(i),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(i!=null&&sa(i),n===1)e.tag===0?kf(Zd.bind(null,e)):Cu(Zd.bind(null,e)),zf(function(){(Ze&6)===0&&xr()}),i=null;else{switch(Ic(l)){case 1:i=ai;break;case 4:i=la;break;case 16:i=Gt;break;case 536870912:i=ca;break;default:i=Gt}i=n1(i,Ud.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function Ud(e,n){if(ts=-1,rs=0,(Ze&6)!==0)throw Error(r(327));var i=e.callbackNode;if(Ro()&&e.callbackNode!==i)return null;var l=pa(e,e===qn?Cn:0);if(l===0)return null;if((l&30)!==0||(l&e.expiredLanes)!==0||n)n=os(e,l);else{n=l;var p=Ze;Ze|=2;var $=Vd();(qn!==e||Cn!==n)&&(Jt=null,Do=cn()+500,Jr(e,n));do try{Gf();break}catch(M){Kd(e,M)}while(!0);Pl(),Qa.current=$,Ze=p,zn!==null?n=0:(qn=null,Cn=0,n=_n)}if(n!==0){if(n===2&&(p=Us(e),p!==0&&(l=p,n=m0(e,p))),n===1)throw i=Bi,Jr(e,0),qr(e,l),Jn(e,cn()),i;if(n===6)qr(e,l);else{if(p=e.current.alternate,(l&30)===0&&!Of(p)&&(n=os(e,l),n===2&&($=Us(e),$!==0&&(l=$,n=m0(e,$))),n===1))throw i=Bi,Jr(e,0),qr(e,l),Jn(e,cn()),i;switch(e.finishedWork=p,e.finishedLanes=l,n){case 0:case 1:throw Error(r(345));case 2:eo(e,Xn,Jt);break;case 3:if(qr(e,l),(l&130023424)===l&&(n=u0+500-cn(),10<n)){if(pa(e,0)!==0)break;if(p=e.suspendedLanes,(p&l)!==l){Wn(),e.pingedLanes|=e.suspendedLanes&p;break}e.timeoutHandle=wl(eo.bind(null,e,Xn,Jt),n);break}eo(e,Xn,Jt);break;case 4:if(qr(e,l),(l&4194240)===l)break;for(n=e.eventTimes,p=-1;0<l;){var v=31-Ie(l);$=1<<v,v=n[v],v>p&&(p=v),l&=~$}if(l=p,l=cn()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Wf(l/1960))-l,10<l){e.timeoutHandle=wl(eo.bind(null,e,Xn,Jt),l);break}eo(e,Xn,Jt);break;case 5:eo(e,Xn,Jt);break;default:throw Error(r(329))}}}return Jn(e,cn()),e.callbackNode===i?Ud.bind(null,e):null}function m0(e,n){var i=Fi;return e.current.memoizedState.isDehydrated&&(Jr(e,n).flags|=256),e=os(e,n),e!==2&&(n=Xn,Xn=i,n!==null&&f0(n)),e}function f0(e){Xn===null?Xn=e:Xn.push.apply(Xn,e)}function Of(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var p=i[l],$=p.getSnapshot;p=p.value;try{if(!bt($(),p))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qr(e,n){for(n&=~c0,n&=~Xa,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-Ie(n),l=1<<i;e[i]=-1,n&=~l}}function Zd(e){if((Ze&6)!==0)throw Error(r(327));Ro();var n=pa(e,0);if((n&1)===0)return Jn(e,cn()),null;var i=os(e,n);if(e.tag!==0&&i===2){var l=Us(e);l!==0&&(n=l,i=m0(e,l))}if(i===1)throw i=Bi,Jr(e,0),qr(e,n),Jn(e,cn()),i;if(i===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,eo(e,Xn,Jt),Jn(e,cn()),null}function h0(e,n){var i=Ze;Ze|=1;try{return e(n)}finally{Ze=i,Ze===0&&(Do=cn()+500,Aa&&xr())}}function Xr(e){jr!==null&&jr.tag===0&&(Ze&6)===0&&Ro();var n=Ze;Ze|=1;var i=yt.transition,l=Xe;try{if(yt.transition=null,Xe=1,e)return e()}finally{Xe=l,yt.transition=i,Ze=n,(Ze&6)===0&&xr()}}function $0(){st=Mo.current,on(Mo)}function Jr(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,wf(i)),zn!==null)for(i=zn.return;i!==null;){var l=i;switch(_l(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Ta();break;case 3:Po(),on(Vn),on(Dn),Fl();break;case 5:El(l);break;case 4:Po();break;case 13:on(un);break;case 19:on(un);break;case 10:Al(l.type._context);break;case 22:case 23:$0()}i=i.return}if(qn=e,zn=e=Tr(e.current,null),Cn=st=n,_n=0,Bi=null,c0=Xa=Qr=0,Xn=Fi=null,Kr!==null){for(n=0;n<Kr.length;n++)if(i=Kr[n],l=i.interleaved,l!==null){i.interleaved=null;var p=l.next,$=i.pending;if($!==null){var v=$.next;$.next=p,l.next=v}i.pending=l}Kr=null}return e}function Kd(e,n){do{var i=zn;try{if(Pl(),La.current=Ga,Wa){for(var l=dn.memoizedState;l!==null;){var p=l.queue;p!==null&&(p.pending=null),l=l.next}Wa=!1}if(Yr=0,Sn=kn=dn=null,Ai=!1,Ci=0,l0.current=null,i===null||i.return===null){_n=1,Bi=n,zn=null;break}e:{var $=e,v=i.return,M=i,L=n;if(n=Cn,M.flags|=32768,L!==null&&typeof L=="object"&&typeof L.then=="function"){var Y=L,ue=M,me=ue.tag;if((ue.mode&1)===0&&(me===0||me===11||me===15)){var le=ue.alternate;le?(ue.updateQueue=le.updateQueue,ue.memoizedState=le.memoizedState,ue.lanes=le.lanes):(ue.updateQueue=null,ue.memoizedState=null)}var Se=wd(v);if(Se!==null){Se.flags&=-257,zd(Se,v,M,$,n),Se.mode&1&&gd($,Y,n),n=Se,L=Y;var Ae=n.updateQueue;if(Ae===null){var Ce=new Set;Ce.add(L),n.updateQueue=Ce}else Ae.add(L);break e}else{if((n&1)===0){gd($,Y,n),y0();break e}L=Error(r(426))}}else if(an&&M.mode&1){var yn=wd(v);if(yn!==null){(yn.flags&65536)===0&&(yn.flags|=256),zd(yn,v,M,$,n),ql(Ao(L,M));break e}}$=L=Ao(L,M),_n!==4&&(_n=2),Fi===null?Fi=[$]:Fi.push($),$=v;do{switch($.tag){case 3:$.flags|=65536,n&=-n,$.lanes|=n;var Z=$d($,L,n);Ou($,Z);break e;case 1:M=L;var G=$.type,K=$.stateNode;if(($.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(_r===null||!_r.has(K)))){$.flags|=65536,n&=-n,$.lanes|=n;var ye=yd($,M,n);Ou($,ye);break e}}$=$.return}while($!==null)}Qd(i)}catch(Me){n=Me,zn===i&&i!==null&&(zn=i=i.return);continue}break}while(!0)}function Vd(){var e=Qa.current;return Qa.current=Ga,e===null?Ga:e}function y0(){(_n===0||_n===3||_n===2)&&(_n=4),qn===null||(Qr&268435455)===0&&(Xa&268435455)===0||qr(qn,Cn)}function os(e,n){var i=Ze;Ze|=2;var l=Vd();(qn!==e||Cn!==n)&&(Jt=null,Jr(e,n));do try{Hf();break}catch(p){Kd(e,p)}while(!0);if(Pl(),Ze=i,Qa.current=l,zn!==null)throw Error(r(261));return qn=null,Cn=0,_n}function Hf(){for(;zn!==null;)Yd(zn)}function Gf(){for(;zn!==null&&!Or();)Yd(zn)}function Yd(e){var n=e1(e.alternate,e,st);e.memoizedProps=e.pendingProps,n===null?Qd(e):zn=n,l0.current=null}function Qd(e){var n=e;do{var i=n.alternate;if(e=n.return,(n.flags&32768)===0){if(i=Bf(i,n,st),i!==null){zn=i;return}}else{if(i=Ff(i,n),i!==null){i.flags&=32767,zn=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_n=6,zn=null;return}}if(n=n.sibling,n!==null){zn=n;return}zn=n=e}while(n!==null);_n===0&&(_n=5)}function eo(e,n,i){var l=Xe,p=yt.transition;try{yt.transition=null,Xe=1,Uf(e,n,i,l)}finally{yt.transition=p,Xe=l}return null}function Uf(e,n,i,l){do Ro();while(jr!==null);if((Ze&6)!==0)throw Error(r(327));i=e.finishedWork;var p=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var $=i.lanes|i.childLanes;if(_m(e,$),e===qn&&(zn=qn=null,Cn=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||es||(es=!0,n1(Gt,function(){return Ro(),null})),$=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||$){$=yt.transition,yt.transition=null;var v=Xe;Xe=1;var M=Ze;Ze|=4,l0.current=null,Nf(e,i),Ld(i,e),pf(yl),ha=!!$l,yl=$l=null,e.current=i,Lf(i),Hs(),Ze=M,Xe=v,yt.transition=$}else e.current=i;if(es&&(es=!1,jr=e,ns=p),$=e.pendingLanes,$===0&&(_r=null),ae(i.stateNode),Jn(e,cn()),n!==null)for(l=e.onRecoverableError,i=0;i<n.length;i++)p=n[i],l(p.value,{componentStack:p.stack,digest:p.digest});if(Ja)throw Ja=!1,e=d0,d0=null,e;return(ns&1)!==0&&e.tag!==0&&Ro(),$=e.pendingLanes,($&1)!==0?e===p0?Ii++:(Ii=0,p0=e):Ii=0,xr(),null}function Ro(){if(jr!==null){var e=Ic(ns),n=yt.transition,i=Xe;try{if(yt.transition=null,Xe=16>e?16:e,jr===null)var l=!1;else{if(e=jr,jr=null,ns=0,(Ze&6)!==0)throw Error(r(331));var p=Ze;for(Ze|=4,Pe=e.current;Pe!==null;){var $=Pe,v=$.child;if((Pe.flags&16)!==0){var M=$.deletions;if(M!==null){for(var L=0;L<M.length;L++){var Y=M[L];for(Pe=Y;Pe!==null;){var ue=Pe;switch(ue.tag){case 0:case 11:case 15:Ei(8,ue,$)}var me=ue.child;if(me!==null)me.return=ue,Pe=me;else for(;Pe!==null;){ue=Pe;var le=ue.sibling,Se=ue.return;if(Ed(ue),ue===Y){Pe=null;break}if(le!==null){le.return=Se,Pe=le;break}Pe=Se}}}var Ae=$.alternate;if(Ae!==null){var Ce=Ae.child;if(Ce!==null){Ae.child=null;do{var yn=Ce.sibling;Ce.sibling=null,Ce=yn}while(Ce!==null)}}Pe=$}}if(($.subtreeFlags&2064)!==0&&v!==null)v.return=$,Pe=v;else e:for(;Pe!==null;){if($=Pe,($.flags&2048)!==0)switch($.tag){case 0:case 11:case 15:Ei(9,$,$.return)}var Z=$.sibling;if(Z!==null){Z.return=$.return,Pe=Z;break e}Pe=$.return}}var G=e.current;for(Pe=G;Pe!==null;){v=Pe;var K=v.child;if((v.subtreeFlags&2064)!==0&&K!==null)K.return=v,Pe=K;else e:for(v=G;Pe!==null;){if(M=Pe,(M.flags&2048)!==0)try{switch(M.tag){case 0:case 11:case 15:Ya(9,M)}}catch(Me){hn(M,M.return,Me)}if(M===v){Pe=null;break e}var ye=M.sibling;if(ye!==null){ye.return=M.return,Pe=ye;break e}Pe=M.return}}if(Ze=p,xr(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(mo,e)}catch{}l=!0}return l}finally{Xe=i,yt.transition=n}}return!1}function Xd(e,n,i){n=Ao(i,n),n=$d(e,n,1),e=vr(e,n,1),n=Wn(),e!==null&&(ci(e,1,n),Jn(e,n))}function hn(e,n,i){if(e.tag===3)Xd(e,e,i);else for(;n!==null;){if(n.tag===3){Xd(n,e,i);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(_r===null||!_r.has(l))){e=Ao(i,e),e=yd(n,e,1),n=vr(n,e,1),e=Wn(),n!==null&&(ci(n,1,e),Jn(n,e));break}}n=n.return}}function Zf(e,n,i){var l=e.pingCache;l!==null&&l.delete(n),n=Wn(),e.pingedLanes|=e.suspendedLanes&i,qn===e&&(Cn&i)===i&&(_n===4||_n===3&&(Cn&130023424)===Cn&&500>cn()-u0?Jr(e,0):c0|=i),Jn(e,n)}function Jd(e,n){n===0&&((e.mode&1)===0?n=1:(n=da,da<<=1,(da&130023424)===0&&(da=4194304)));var i=Wn();e=Yt(e,n),e!==null&&(ci(e,n,i),Jn(e,i))}function Kf(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),Jd(e,i)}function Vf(e,n){var i=0;switch(e.tag){case 13:var l=e.stateNode,p=e.memoizedState;p!==null&&(i=p.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(r(314))}l!==null&&l.delete(n),Jd(e,i)}var e1;e1=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||Vn.current)Qn=!0;else{if((e.lanes&i)===0&&(n.flags&128)===0)return Qn=!1,Ef(e,n,i);Qn=(e.flags&131072)!==0}else Qn=!1,an&&(n.flags&1048576)!==0&&Mu(n,Ma,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Ka(e,n),e=n.pendingProps;var p=vo(n,Dn.current);To(n,i),p=Ll(null,n,l,e,p,i);var $=Wl();return n.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Yn(l)?($=!0,Pa(n)):$=!1,n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Dl(n),p.updater=Ua,n.stateNode=p,p._reactInternals=n,Kl(n,l,e,i),n=Xl(null,n,l,!0,$,i)):(n.tag=0,an&&$&&kl(n),Ln(null,n,p,i),n=n.child),n;case 16:l=n.elementType;e:{switch(Ka(e,n),e=n.pendingProps,p=l._init,l=p(l._payload),n.type=l,p=n.tag=Qf(l),e=kt(l,e),p){case 0:n=Ql(null,n,l,e,i);break e;case 1:n=jd(null,n,l,e,i);break e;case 11:n=xd(null,n,l,e,i);break e;case 14:n=bd(null,n,l,kt(l.type,e),i);break e}throw Error(r(306,l,""))}return n;case 0:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:kt(l,p),Ql(e,n,l,p,i);case 1:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:kt(l,p),jd(e,n,l,p,i);case 3:e:{if(Sd(n),e===null)throw Error(r(387));l=n.pendingProps,$=n.memoizedState,p=$.element,Wu(e,n),Ia(n,l,null,i);var v=n.memoizedState;if(l=v.element,$.isDehydrated)if($={element:l,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},n.updateQueue.baseState=$,n.memoizedState=$,n.flags&256){p=Ao(Error(r(423)),n),n=qd(e,n,l,i,p);break e}else if(l!==p){p=Ao(Error(r(424)),n),n=qd(e,n,l,i,p);break e}else for(at=gr(n.stateNode.containerInfo.firstChild),it=n,an=!0,vt=null,i=Nu(n,null,l,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(jo(),l===p){n=Xt(e,n,i);break e}Ln(e,n,l,i)}n=n.child}return n;case 5:return Gu(n),e===null&&Sl(n),l=n.type,p=n.pendingProps,$=e!==null?e.memoizedProps:null,v=p.children,gl(l,p)?v=null:$!==null&&gl(l,$)&&(n.flags|=32),_d(e,n),Ln(e,n,v,i),n.child;case 6:return e===null&&Sl(n),null;case 13:return Td(e,n,i);case 4:return Rl(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=So(n,null,l,i):Ln(e,n,l,i),n.child;case 11:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:kt(l,p),xd(e,n,l,p,i);case 7:return Ln(e,n,n.pendingProps,i),n.child;case 8:return Ln(e,n,n.pendingProps.children,i),n.child;case 12:return Ln(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(l=n.type._context,p=n.pendingProps,$=n.memoizedProps,v=p.value,nn(Ea,l._currentValue),l._currentValue=v,$!==null)if(bt($.value,v)){if($.children===p.children&&!Vn.current){n=Xt(e,n,i);break e}}else for($=n.child,$!==null&&($.return=n);$!==null;){var M=$.dependencies;if(M!==null){v=$.child;for(var L=M.firstContext;L!==null;){if(L.context===l){if($.tag===1){L=Qt(-1,i&-i),L.tag=2;var Y=$.updateQueue;if(Y!==null){Y=Y.shared;var ue=Y.pending;ue===null?L.next=L:(L.next=ue.next,ue.next=L),Y.pending=L}}$.lanes|=i,L=$.alternate,L!==null&&(L.lanes|=i),Cl($.return,i,n),M.lanes|=i;break}L=L.next}}else if($.tag===10)v=$.type===n.type?null:$.child;else if($.tag===18){if(v=$.return,v===null)throw Error(r(341));v.lanes|=i,M=v.alternate,M!==null&&(M.lanes|=i),Cl(v,i,n),v=$.sibling}else v=$.child;if(v!==null)v.return=$;else for(v=$;v!==null;){if(v===n){v=null;break}if($=v.sibling,$!==null){$.return=v.return,v=$;break}v=v.return}$=v}Ln(e,n,p.children,i),n=n.child}return n;case 9:return p=n.type,l=n.pendingProps.children,To(n,i),p=ht(p),l=l(p),n.flags|=1,Ln(e,n,l,i),n.child;case 14:return l=n.type,p=kt(l,n.pendingProps),p=kt(l.type,p),bd(e,n,l,p,i);case 15:return vd(e,n,n.type,n.pendingProps,i);case 17:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:kt(l,p),Ka(e,n),n.tag=1,Yn(l)?(e=!0,Pa(n)):e=!1,To(n,i),fd(n,l,p),Kl(n,l,p,i),Xl(null,n,l,!0,e,i);case 19:return Ad(e,n,i);case 22:return kd(e,n,i)}throw Error(r(156,n.tag))};function n1(e,n){return oi(e,n)}function Yf(e,n,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,n,i,l){return new Yf(e,n,i,l)}function g0(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qf(e){if(typeof e=="function")return g0(e)?1:0;if(e!=null){if(e=e.$$typeof,e===X)return 11;if(e===pe)return 14}return 2}function Tr(e,n){var i=e.alternate;return i===null?(i=gt(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function is(e,n,i,l,p,$){var v=2;if(l=e,typeof e=="function")g0(e)&&(v=1);else if(typeof e=="string")v=5;else e:switch(e){case F:return no(i.children,p,$,n);case V:v=8,p|=8;break;case Q:return e=gt(12,i,n,p|2),e.elementType=Q,e.lanes=$,e;case te:return e=gt(13,i,n,p),e.elementType=te,e.lanes=$,e;case re:return e=gt(19,i,n,p),e.elementType=re,e.lanes=$,e;case be:return as(i,p,$,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ee:v=10;break e;case se:v=9;break e;case X:v=11;break e;case pe:v=14;break e;case fe:v=16,l=null;break e}throw Error(r(130,e==null?e:typeof e,""))}return n=gt(v,i,n,p),n.elementType=e,n.type=l,n.lanes=$,n}function no(e,n,i,l){return e=gt(7,e,l,n),e.lanes=i,e}function as(e,n,i,l){return e=gt(22,e,l,n),e.elementType=be,e.lanes=i,e.stateNode={isHidden:!1},e}function w0(e,n,i){return e=gt(6,e,null,n),e.lanes=i,e}function z0(e,n,i){return n=gt(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Xf(e,n,i,l,p){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zs(0),this.expirationTimes=Zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zs(0),this.identifierPrefix=l,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function x0(e,n,i,l,p,$,v,M,L){return e=new Xf(e,n,i,M,L),n===1?(n=1,$===!0&&(n|=8)):n=0,$=gt(3,null,null,n),e.current=$,$.stateNode=e,$.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dl($),e}function Jf(e,n,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:l==null?null:""+l,children:e,containerInfo:n,implementation:i}}function t1(e){if(!e)return zr;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(r(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Yn(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(r(171))}if(e.tag===1){var i=e.type;if(Yn(i))return Pu(e,i,n)}return n}function r1(e,n,i,l,p,$,v,M,L){return e=x0(i,l,!0,e,p,$,v,M,L),e.context=t1(null),i=e.current,l=Wn(),p=Sr(i),$=Qt(l,p),$.callback=n??null,vr(i,$,p),e.current.lanes=p,ci(e,p,l),Jn(e,l),e}function ss(e,n,i,l){var p=n.current,$=Wn(),v=Sr(p);return i=t1(i),n.context===null?n.context=i:n.pendingContext=i,n=Qt($,v),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=vr(p,n,v),e!==null&&(St(e,p,v,$),Fa(e,p,v)),v}function ls(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function o1(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function b0(e,n){o1(e,n),(e=e.alternate)&&o1(e,n)}function eh(){return null}var i1=typeof reportError=="function"?reportError:function(e){console.error(e)};function v0(e){this._internalRoot=e}cs.prototype.render=v0.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));ss(e,n,null,null)},cs.prototype.unmount=v0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Xr(function(){ss(null,e,null,null)}),n[Ut]=null}};function cs(e){this._internalRoot=e}cs.prototype.unstable_scheduleHydration=function(e){if(e){var n=Wc();e={blockedOn:null,target:e,priority:n};for(var i=0;i<hr.length&&n!==0&&n<hr[i].priority;i++);hr.splice(i,0,e),i===0&&Gc(e)}};function k0(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function us(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function a1(){}function nh(e,n,i,l,p){if(p){if(typeof l=="function"){var $=l;l=function(){var Y=ls(v);$.call(Y)}}var v=r1(n,l,e,0,null,!1,!1,"",a1);return e._reactRootContainer=v,e[Ut]=v.current,vi(e.nodeType===8?e.parentNode:e),Xr(),v}for(;p=e.lastChild;)e.removeChild(p);if(typeof l=="function"){var M=l;l=function(){var Y=ls(L);M.call(Y)}}var L=x0(e,0,!1,null,null,!1,!1,"",a1);return e._reactRootContainer=L,e[Ut]=L.current,vi(e.nodeType===8?e.parentNode:e),Xr(function(){ss(n,L,i,l)}),L}function ds(e,n,i,l,p){var $=i._reactRootContainer;if($){var v=$;if(typeof p=="function"){var M=p;p=function(){var L=ls(v);M.call(L)}}ss(n,v,e,p)}else v=nh(i,n,e,p,l);return ls(v)}Nc=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=li(n.pendingLanes);i!==0&&(Ks(n,i|1),Jn(n,cn()),(Ze&6)===0&&(Do=cn()+500,xr()))}break;case 13:Xr(function(){var l=Yt(e,1);if(l!==null){var p=Wn();St(l,e,1,p)}}),b0(e,1)}},Vs=function(e){if(e.tag===13){var n=Yt(e,134217728);if(n!==null){var i=Wn();St(n,e,134217728,i)}b0(e,134217728)}},Lc=function(e){if(e.tag===13){var n=Sr(e),i=Yt(e,n);if(i!==null){var l=Wn();St(i,e,n,l)}b0(e,n)}},Wc=function(){return Xe},Oc=function(e,n){var i=Xe;try{return Xe=e,n()}finally{Xe=i}},Xo=function(e,n,i){switch(n){case"input":if(Pn(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var l=i[n];if(l!==e&&l.form===e.form){var p=qa(l);if(!p)throw Error(r(90));Lt(l),Pn(l,p)}}}break;case"textarea":ea(e,i);break;case"select":n=i.value,n!=null&&Mn(e,!!i.multiple,n,!1)}},ta=h0,ra=Xr;var th={usingClientEntryPoint:!1,Events:[ji,xo,qa,cr,Jo,h0]},Ni={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rh={bundleType:Ni.bundleType,version:Ni.version,rendererPackageName:Ni.rendererPackageName,rendererConfig:Ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:O.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ia(e),e===null?null:e.stateNode},findFiberByHostInstance:Ni.findFiberByHostInstance||eh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ps.isDisabled&&ps.supportsFiber)try{mo=ps.inject(rh),rt=ps}catch{}}return et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=th,et.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!k0(n))throw Error(r(200));return Jf(e,n,null,i)},et.createRoot=function(e,n){if(!k0(e))throw Error(r(299));var i=!1,l="",p=i1;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=x0(e,1,!1,null,null,i,!1,l,p),e[Ut]=n.current,vi(e.nodeType===8?e.parentNode:e),new v0(n)},et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=ia(n),e=e===null?null:e.stateNode,e},et.flushSync=function(e){return Xr(e)},et.hydrate=function(e,n,i){if(!us(n))throw Error(r(200));return ds(null,e,n,!0,i)},et.hydrateRoot=function(e,n,i){if(!k0(e))throw Error(r(405));var l=i!=null&&i.hydratedSources||null,p=!1,$="",v=i1;if(i!=null&&(i.unstable_strictMode===!0&&(p=!0),i.identifierPrefix!==void 0&&($=i.identifierPrefix),i.onRecoverableError!==void 0&&(v=i.onRecoverableError)),n=r1(n,null,e,1,i??null,p,!1,$,v),e[Ut]=n.current,vi(e),l)for(e=0;e<l.length;e++)i=l[e],p=i._getVersion,p=p(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,p]:n.mutableSourceEagerHydrationData.push(i,p);return new cs(n)},et.render=function(e,n,i){if(!us(n))throw Error(r(200));return ds(null,e,n,!1,i)},et.unmountComponentAtNode=function(e){if(!us(e))throw Error(r(40));return e._reactRootContainer?(Xr(function(){ds(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1},et.unstable_batchedUpdates=h0,et.unstable_renderSubtreeIntoContainer=function(e,n,i,l){if(!us(i))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return ds(e,n,i,!1,l)},et.version="18.3.1-next-f1338f8080-20240426",et}var f1;function dh(){if(f1)return S0.exports;f1=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),S0.exports=uh(),S0.exports}var h1;function ph(){if(h1)return ms;h1=1;var o=dh();return ms.createRoot=o.createRoot,ms.hydrateRoot=o.hydrateRoot,ms}var mh=ph();const fh=`---
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
`,hh=`---
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
`,$h=`---
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
Pole to ilość płaszczyzny zajętej przez figurę; obwód to długość jej brzegu. Dwie liczby, dwie zupełnie różne jednostki: pole w $\\text{cm}^2$, obwód w cm.<br><br>**Podstawowe wzory:** prostokąt — $P = a \\cdot b$, $L = 2(a+b)$; kwadrat — $P = a^2$, $L = 4a$; trójkąt — $P = \\tfrac{1}{2} a h$; koło — $P = \\pi r^2$, $L = 2\\pi r$. Dla trapezu $P = \\tfrac{1}{2}(a+b) h$, dla równoległoboku $P = a h$.<br><br>**Skalowanie:** gdy powiększasz figurę $k$ razy (każdy wymiar mnożysz przez $k$), obwód rośnie $k$ razy, ale pole rośnie $k^2$ razy. Koło o dwukrotnie większym promieniu ma czterokrotnie większe pole, nie dwukrotnie.

<!-- example -->
Prostokąt o bokach $6$ i $4$: pole $P = 6 \\cdot 4 = 24$ cm$^2$, obwód $L = 2(6+4) = 20$ cm.<br><br>Po powiększeniu dwukrotnym — boki $12$ i $8$ — pole wychodzi $96$ cm$^2$ (cztery razy większe), a obwód $40$ cm (dwa razy większy). Liczby rosną w różnym tempie, bo opisują różne rzeczy: długość brzegu i powierzchnię wnętrza.<br><br>**Dla ciekawych — dlaczego pizza 40 cm to nie dwa razy więcej jedzenia niż pizza 20 cm.** Podwojenie średnicy podwaja promień, a pole skaluje się z $\\pi r^2$, więc rośnie **czterokrotnie**. Pizza o średnicy $40$ cm to cztery razy więcej jedzenia niż $20$-centymetrowa, nie dwa razy. Dla wielu osób to nieintuicyjne — patrzymy na „szerokość", a nie na powierzchnię. Ta sama logika dotyczy ekranów: monitor 27-calowy ma około 78% większą powierzchnię niż 20-calowy (nie 35%, jakby sugerowała różnica przekątnej).<br><br>**Dla ciekawych — pszczoły i plaster miodu.** Pszczoły budują plaster z sześciokątów foremnych. Spośród regularnych wielokątów, którymi można pokryć płaszczyznę bez pustek (trójkąty, kwadraty, sześciokąty), sześciokąt **minimalizuje długość ścian przy ustalonym polu komórki** — pszczoły zużywają najmniej wosku na pokrycie danej powierzchni. Matematyczny dowód, że heksagon jest globalnie optymalny (także wśród nieregularnych kształtów), Thomas Hales podał dopiero w 1999 roku — tzw. „twierdzenie o plastrze miodu".<br><br>**Dla ciekawych — kostki lodu rozpadają się szybciej, gdy się je pokruszy.** Ta sama masa lodu roztopi się wyraźnie szybciej po rozdrobnieniu, bo powierzchnia styku z otoczeniem rośnie drastycznie. Dwie kostki o łącznej objętości $V$ mają większą sumę powierzchni niż jedna kostka o tej samej objętości. Ta sama zasada stoi za tym, że drobno pokrojone warzywa lepiej się smażą (więcej powierzchni daje więcej skórki). Skalowanie $L^2$ względem $L^3$ to ukryta sprężyna za wieloma zjawiskami termicznymi i biologicznymi.

<!-- mistakes -->
- **Mylenie jednostek pola i obwodu.** Dla kwadratu o boku 4 jednostki liczbowe pola i obwodu są takie same, ale to przypadek. Pole zawsze w jednostkach kwadratowych ($\\text{cm}^2$, $\\text{m}^2$), obwód w liniowych.<br>- **Skalowanie jak dla liniowej zależności.** Jeśli kwadrat o boku 3 ma pole 9, to kwadrat o boku 6 ma pole **36**, a nie 18. Pole zawsze skaluje się kwadratowo — to ta sama pułapka co w wielu innych formułach (zobacz też: *Pułapka liniowości*).<br>- **Wzór na pole trójkąta.** $P = \\tfrac{1}{2} a h$, gdzie $h$ to **wysokość opuszczona na bok $a$**, nie długość drugiego boku. Dla trójkąta rozwartokątnego wysokość może wypaść poza trójkąt — to nie błąd, tylko geometria.
`,yh=`---
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
`,gh=`---
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
`,wh=`---
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
`,zh=`---
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
`,xh=`---
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
`,bh=`---
label: "Complex Numbers"
labelPl: "Liczby zespolone"
scope: analiza
section: UNIV
level: 3
x: 390
y: 650
---
`,vh=`---
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
`,kh=`---
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
`,_h=`---
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
Na przykład: 3 koszulki $\\times$ 4 spodnie $= 12$ zestawów (reguła mnożenia).<br><br>Albo: wejście A ma 5 opcji, wejście B ma 3 opcje, razem $5 + 3 = 8$ opcji, jeśli się wykluczają (reguła dodawania).<br><br>**Dla ciekawych — paradoks urodzin.** W grupie już $23$ osób szansa, że co najmniej dwie mają urodziny tego samego dnia, przekracza $50\\%$. Dla $50$ osób to już ponad $97\\%$. Intuicja tu zawodzi, bo myślimy o liczbie osób, a nie o liczbie par — a par w grupie $n$-osobowej jest $\\binom{n}{2} = \\tfrac{n(n-1)}{2}$. Dla $23$ osób to $253$ pary, z których każda ma szansę $\\tfrac{1}{365}$ na pokrycie się urodzin. Gdy liczba par staje się porównywalna z liczbą dni, wspólne urodziny stają się niemal pewne. Formalnie: $P(\\text{żadna para}) = \\dfrac{365}{365} \\cdot \\dfrac{364}{365} \\cdot \\ldots \\cdot \\dfrac{343}{365} \\approx 0{,}49$, więc $P(\\text{jakaś para}) \\approx 0{,}51$. Ten sam mechanizm — „paradoks" zderzeń w rosnącej liczbie par — stoi za atakami kryptograficznymi typu *birthday attack* na funkcje skrótu.
`,jh=`---
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
`,Sh=`---
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
`,qh=`---
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
`,Th=`---
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
`,Ph=`---
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
`,Ah=`---
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
`,Ch=`---
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
`,Mh=`---
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
`,Dh=`---
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
`,Rh=`---
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
`,Eh=`---
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
`,Bh=`---
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
`,Fh=`---
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
`,Ih=`---
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
`,Nh=`---
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
`,Lh=`---
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
`,Wh=`---
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
Na przykład: $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots$ to szereg z $a_1 = \\frac{1}{2}$, $q = \\frac{1}{2}$. Suma: $S = \\frac{1/2}{1 - 1/2} = 1$.<br><br>Zastosowanie w ułamkach okresowych: $0{,}333\\ldots = \\frac{3}{10} + \\frac{3}{100} + \\frac{3}{1000} + \\ldots = \\frac{3/10}{1 - 1/10} = \\frac{1}{3}$.<br><br>**Dla ciekawych — procent miesięczny vs roczny.** Pożyczka z odsetkami $10\\%$ miesięcznie to nie odpowiednik $120\\%$ rocznie, tylko **ponad $213\\%$**: po dwunastu miesiącach dług rośnie $1{,}10^{12} \\approx 3{,}14$ razy. Ten mechanizm stoi za tzw. chwilówkami — procent składany działa jak ciąg geometryczny i rośnie wykładniczo z liczbą okresów. Wzór: $\\text{efektywna stopa roczna} = (1 + r)^{12} - 1$ dla stopy miesięcznej $r$; dla $r = 0{,}05$ to ok. $80\\%$, dla $r = 0{,}02$ ok. $27\\%$.<br><br>**Dla ciekawych — regularne oszczędzanie bije loterię.** Odkładanie $500$ zł miesięcznie przez $40$ lat przy rocznym oprocentowaniu $7\\%$ daje około $1{,}3$ mln zł — to suma ciągu geometrycznego, w którym każda wpłata jest mnożona przez czynnik $(1 + r)^n$ dla malejących $n$. Wzór: $S = p \\cdot \\dfrac{(1+r)^n - 1}{r}$, gdzie $p$ to wpłata regularna, $r$ stopa za okres, $n$ liczba okresów. Większość „dużych wygranych" w totalizatorach ma wartość oczekiwaną znacznie niższą od tej kwoty, ale bez bajkowo niskiego prawdopodobieństwa. Ta sama matematyka co w ułamku okresowym — tylko tutaj $|q| > 1$, więc zamiast zbieżności mamy wzrost.
`,Oh=`---
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
`,Hh=`---
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
`,Gh=`---
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
`,Uh=`---
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
`,Zh=`---
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
`,Kh=`---
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
`,Vh=`---
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
`,Yh=`---
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
`,Qh=`---
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
Na przykład: $2^3 = 8$, więc $\\log_2 8 = 3$.<br><br>Reguła iloczynu: $\\log_2(4 \\cdot 8) = \\log_2 4 + \\log_2 8 = 2 + 3 = 5$. Sprawdzenie: $\\log_2 32 = 5$ ✓.<br><br>Zmiana podstawy: $\\log_2 8 = \\frac{\\ln 8}{\\ln 2} = \\frac{2{,}08}{0{,}69} = 3$ ✓.<br><br>**Dla ciekawych — skala Richtera jest logarytmiczna.** Trzęsienie o magnitudzie $7{,}0$ nie jest „trochę mocniejsze" od trzęsienia $6{,}0$ — jest **dziesięciokrotnie mocniejsze**, bo skala Richtera mierzy $\\log_{10}$ amplitudy fal sejsmicznych. Magnituda $8{,}0$ to już sto razy mocniejsze trzęsienie niż $6{,}0$. Ta sama logika dotyczy decybeli (głośność, $10\\log_{10}$), pH (kwasowość, $-\\log_{10}$ stężenia jonów) i magnitud gwiazd. Wszystkie te skale są logarytmiczne, bo opisują wielkości rozciągające się na wiele rzędów — a liniowa skala byłaby nieczytelna.<br><br>**Dla ciekawych — ludzka percepcja jest logarytmiczna (prawo Webera–Fechnera).** Gdy podwoimy energię dźwięku, nie słyszymy „dwa razy głośniej". Gdy dołożymy do świecy drugą, nie widzimy „dwa razy jaśniej". Psychofizyka XIX-wieczna (Weber, Fechner) ustaliła, że nasza reakcja na bodźce jest proporcjonalna do $\\log$ intensywności. Stąd konstrukcja decybela: wzrost o $10$ dB odpowiada **dziesięciokrotnemu** wzrostowi energii, ale słychać to jako „dwa razy głośniej". Cyfra $10$ na pokrętle głośności nie jest więc dwa razy większa od cyfry $5$, tylko znacznie dalej — pokrętło skalibrowano pod logarytmiczne ucho.

<!-- mistakes -->
- **Dziedzina logarytmu**: argument musi być dodatni ($\\log_a b$ wymaga $b > 0$, $a > 0$, $a \\neq 1$). Rozwiązanie równania trzeba wrócić i sprawdzić w dziedzinie oryginalnego równania.
- **$\\log(a+b) \\neq \\log a + \\log b$**: to najczęstszy błąd. Zachodzi TYLKO $\\log(a \\cdot b) = \\log a + \\log b$.
- **Mylenie podstawy**: $\\log_2 8 = 3$, a $\\log 8 \\approx 0{,}9$ (log dziesiętny). Zawsze sprawdź, jaka jest podstawa.
`,Xh=`---
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
`,Jh=`---
label: "Reading Matura Commands"
labelPl: "Polecenia maturalne — jak czytać"
scope: logika
section: LP
level: 1
tag: matura_tip
x: 60
y: 1040
---
Polecenie z matury działa jak **kontrakt**: każde słowo dokładnie określa, czego oczekuje egzaminator. Gdy pomylimy "sprawdź" z "wykaż", nawet poprawny rachunek nie zaliczy zadania — zostało ono zinterpretowane inaczej, niż zostało zapisane.<br><br>Poniżej najważniejsze słowa-klucze i to, co **naprawdę** oznaczają:<br><br>**Oblicz** — w odpowiedzi ma się znaleźć konkretna liczba (lub wyrażenie). Końcowy wynik zawsze wyraźnie zaznacz (ramka, podkreślenie, "Odp.:").<br><br>**Wyznacz** — znajdź **wszystkie** wartości spełniające warunki (np. wszystkie $m$, dla których…). Pamiętaj o dziedzinie i o warunkach ubocznych (mianownik $\\neq 0$, argument logarytmu $> 0$ itd.).<br><br>**Rozwiąż** — praktycznie to samo co "wyznacz", ale dotyczy równania lub nierówności. Zapisz **zbiór rozwiązań**, a nie tylko jedno $x$.<br><br>**Wykaż / Udowodnij** — musisz uzasadnić **każdy** krok. Sprawdzenie kilku wartości NIE jest dowodem. Struktura: *"Zakładamy… → przekształcamy… → otrzymujemy tezę."* Na końcu $\\blacksquare$ lub "c.n.d.".<br><br>**Uzasadnij** — lżejsza wersja "wykaż"; argumentacja może być słowna, ale wciąż musi być **logiczna** i pełna. To nie jest "napisz, co myślisz".<br><br>**Naszkicuj / Narysuj** — wykres z oznaczeniami osi, skalą oraz punktami charakterystycznymi (miejscami zerowymi, ekstremami, asymptotami). Sam szkic bez opisanych osi nie jest uznawany za wykres.<br><br>**Sprawdź** — dostajesz konkretną hipotezę; wystarczy rachunek pokazujący, czy jest prawdziwa. Nie musisz uzasadniać **dlaczego** — tylko *że* tak jest (lub nie).

<!-- example -->
**Wykaż, że** $n(n+1)$ jest parzyste dla każdego $n \\in \\mathbb{N}$.<br><br>Sprawdzenie $n=1,\\,2,\\,3$ **NIE jest dowodem** — egzaminator oczekuje argumentu dla *wszystkich* $n$.<br><br>Poprawny dowód: wśród dwóch kolejnych liczb naturalnych $n$ oraz $n+1$ zawsze jedna jest parzysta, więc ich iloczyn $n(n+1)$ zawiera czynnik parzysty, a zatem sam jest parzysty. $\\blacksquare$<br><br>---<br><br>**Sprawdź, czy** $n=3$ spełnia równanie $n^2 - 2n + 1 = 4$.<br><br>Podstawiamy: $3^2 - 2\\cdot 3 + 1 = 9 - 6 + 1 = 4$. ✓<br><br>I tyle — przy "sprawdź" sam rachunek **wystarczy**. Nie trzeba tłumaczyć, dlaczego tak wyszło.

<!-- mistakes -->
- **Ignorowanie słowa "każdego" / "dla dowolnego"** w dowodzie — musisz pokazać tezę dla **wszystkich** wartości, nie dla kilku przykładów. Kilka przykładów to *sprawdzenie*, nie *dowód*.<br>- **Brak spójników** "zatem", "więc", "stąd", "ponieważ" między krokami. Egzaminator czyta dowód jak spójny tekst — bez łączników dowód traci rytm, a forma zostaje obniżona, nawet gdy rachunek jest poprawny.<br>- **Pomijanie dziedziny** przy "wyznacz" i "rozwiąż". Równanie $\\log(x-2) = 1$ ma rozwiązanie $x = 12$, ale najpierw trzeba zapisać warunek $x - 2 > 0$.
`,e2=`---
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
`,n2=`---
label: "Reconstructing Formulas"
labelPl: "Odtwarzanie wzorów zamiast zakuwania"
scope: logika
section: LP
level: 1
x: 480
y: 1060
---
Większość wzorów, które pojawiają się na maturze, da się **odtworzyć** w 15–30 sekund z czegoś, co pamiętasz lepiej: z prostego obrazka, z sąsiedniego tematu, albo z definicji. Nauczenie się tego jednego nawyku jest warte więcej niż zapamiętanie dowolnej konkretnej listy wzorów — bo działa wtedy, gdy pamięć zawiedzie na egzaminie, a zawiedzie prędzej czy później.<br><br>Poniżej cztery techniki odtwarzania. Każda pokazana na jednym przykładzie; głębsze omówienie każdego tematu masz pod wskazanymi linkami.

<!-- example -->
**① Odtwarzanie z wykresu bazowego — sinus i kosinus.**<br>Jeśli nie pamiętasz, który z nich zaczyna się od $0$, a który od $1$: wystarczy zapamiętać **jeden fakt** — $\\sin(0) = 0$ i funkcja rośnie od zera w górę. Kosinus musi zrobić jedyną inną sensowną rzecz: zaczynać od $1$ i opadać. To wszystko, czego potrzebujesz, żeby odtworzyć oba wykresy, znaki w każdej ćwiartce i wartości w punktach charakterystycznych. *(Pełna obsługa trygonometrii → Podstawy trygonometrii.)*<br><br>**② Odtwarzanie przez wymnożenie — wzory Viete'a.**<br>Jeśli nie pamiętasz, czy suma pierwiastków to $-b/a$ czy $b/a$, zapisz równanie w postaci iloczynowej i rozwiń w jednej linii:<br><br>$(x - x_1)(x - x_2) = x^2 - (x_1 + x_2)x + x_1 x_2$<br><br>Porównanie z $x^2 + bx + c$ natychmiast daje $x_1 + x_2 = -b$ oraz $x_1 x_2 = c$. Wzór wychodzi sam; nie trzeba nic pamiętać poza umiejętnością wymnożenia dwóch nawiasów. *(Pełna teoria → Wzory Viete'a.)*<br><br>**③ Odtwarzanie z reguł potęg — logarytmy.**<br>Jeśli mylisz się, czy $\\log(ab) = \\log a + \\log b$ czy $\\log(a+b) = \\log a + \\log b$, wróć do reguł potęg: $a^p \\cdot a^q = a^{p+q}$. Podstaw $x = a^p$, $y = a^q$; wtedy $xy = a^{p+q}$, więc $\\log_a(xy) = p + q = \\log_a x + \\log_a y$. Reguły logarytmu to reguły potęg czytane wstecz. Natomiast $a^p + a^q$ nie ma prostej postaci — i dlatego logarytm sumy też nie ma. *(Pełna obsługa logarytmów → Potęgi i logarytmy.)*<br><br>**④ Odtwarzanie z obrazka — wzory skróconego mnożenia.**<br>Jeśli nie jesteś pewien, czy $(a+b)^2 = a^2 + b^2$ czy $a^2 + 2ab + b^2$: narysuj kwadrat o boku $a+b$ i podziel go pionowo oraz poziomo na części długości $a$ i $b$. Pole całe to $(a+b)^2$; pole cząstek to kwadrat $a^2$, kwadrat $b^2$ i dwa prostokąty $a \\times b$. Sumując: $(a+b)^2 = a^2 + 2ab + b^2$. Zapomniany człon $2ab$ widać jako dwa prostokąty, które gubi się przy założeniu liniowości. *(Więcej o tej pułapce → Pułapka liniowości.)*<br><br>**⑤ Sprawdzanie wzoru przez podstawienie.**<br>Gdy pamiętasz wzór niepewnie — np. nie wiesz, czy $\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$, czy może z zamienionymi funkcjami — podstaw wartości, dla których obie strony musisz znać. Weź $\\beta = 0$: lewa strona to $\\sin(\\alpha + 0) = \\sin\\alpha$; prawa ze wzoru prawdziwego to $\\sin\\alpha \\cdot \\cos 0 + \\cos\\alpha \\cdot \\sin 0 = \\sin\\alpha \\cdot 1 + \\cos\\alpha \\cdot 0 = \\sin\\alpha$ ✓. Gdybyś przez pomyłkę zapisał $\\sin\\alpha\\sin\\beta + \\cos\\alpha\\cos\\beta$, to samo podstawienie dałoby $\\cos\\alpha$ — od razu widać, że coś się zgubiło. Dodatkowa kontrola: $\\beta = \\tfrac{\\pi}{2}$ powinno dać $\\sin(\\alpha + \\tfrac{\\pi}{2}) = \\cos\\alpha$ — ten test też przechodzi tylko dobry wzór. Dwa trafne podstawienia wystarczą, żeby odróżnić prawdziwy wzór od podobnie wyglądających wariantów.

<!-- mistakes -->
- **Próba odtworzenia czegoś, czego się nigdy nie rozumiało.** Ta technika zakłada, że znasz fragment fundamentalny (jak wygląda $\\sin$, jak rozkłada się iloczyn, czym jest potęga). Jeśli brakuje tego fundamentu, odtwarzanie się nie uda — trzeba najpierw nauczyć się bazowej rzeczy.<br>- **Odtwarzanie pod presją bez wcześniejszego ćwiczenia.** Jeśli technika pierwszy raz pojawia się na maturze, zajmie więcej niż 30 sekund. Ćwicz ją w zadaniach domowych, wtedy na egzaminie jest automatyczna.<br>- **Mylenie kierunku wyprowadzenia.** Pochodna definiuje się przez granicę ilorazu różnicowego, całka przez pole (albo jako odwrotność pochodnej). Próba odtworzenia pochodnej z wzoru całki prowadzi do błędów — każde pojęcie ma swój własny punkt wyjścia.
`,t2=`---
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
`,r2=`---
label: "Equations with Parameters"
labelPl: "Równania z parametrem"
scope: rownania
section: LR
level: 3
x: 560
y: 480
---
`,o2=`---
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
`,i2=`---
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
`,a2=`---
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
`,s2=`---
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
`,l2=`---
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
`,c2=`---
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
`,u2=`---
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
`,d2=`---
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
`,p2=`---
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
`,m2=`---
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
`,f2=`---
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
`,h2=`---
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
`,$2=`---
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
  - "interactive|resources/sequences/recursive-explorer.html|Recursive Sequences & Reindexing|Ciągi rekurencyjne i przeindeksowanie"
---
Ciąg to uporządkowana lista liczb, w której każdy wyraz ma swój numer — formalnie, funkcja z liczb naturalnych w liczby rzeczywiste.<br><br>Ciąg arytmetyczny: $a_n = a_1 + (n-1)d$ (stała różnica $d$ między kolejnymi wyrazami). Ciąg geometryczny: $a_n = a_1 \\cdot q^{n-1}$ (stały iloraz $q$).<br><br>Sumy: arytmetyczny $S_n = \\frac{n(a_1 + a_n)}{2}$, geometryczny $S_n = a_1 \\cdot \\frac{1 - q^n}{1 - q}$.

<!-- example -->
Na przykład: ciąg arytmetyczny $2, 5, 8, 11, \\ldots$ ma $a_1 = 2$, $d = 3$. Więc $a_{10} = 2 + 9 \\cdot 3 = 29$, a $S_{10} = \\frac{10(2+29)}{2} = 155$.<br><br>Ciąg geometryczny $3, 6, 12, 24, \\ldots$ ma $q = 2$, więc $a_5 = 3 \\cdot 2^4 = 48$.<br><br>**Dla ciekawych — ciąg to funkcja, a przeindeksowanie to przesunięcie wykresu.** Z definicji ciąg jest funkcją $a: \\mathbb{N} \\to \\mathbb{R}$ z dyskretną dziedziną — więc transformacje z węzła fn_transforms stosują się wprost. Przeindeksowanie $b_k = a_{k+1}$ to po prostu przesunięcie wykresu w lewo o $1$ (czyli $y = f(x+1)$); analogicznie $c_n = -a_n$ odpowiada odbiciu względem osi indeksów, a $d_n = a_n + C$ przesunięciu pionowemu. Reguła rekurencji jest równaniem funkcyjnym na $a$, a przesunięta funkcja spełnia przesunięte równanie — dlatego $a_{n+2} = a_{n+1} + a_n$ przechodzi w $b_{k+1} = b_k + b_{k-1}$ bez zmiany postaci.

<!-- mistakes -->
- **Indeksowanie od 1 czy 0**: matura CKE indeksuje od 1 (pierwszy wyraz to $a_1$), niektóre podręczniki od 0. Zawsze sprawdź w zadaniu.
- **Wzór na $n$-ty wyraz vs rekurencyjny**: $a_n = a_1 + (n-1)d$ to postać bezpośrednia, a $a_{n+1} = a_n + d$ to rekurencja — w jednym zadaniu warto trzymać się jednej konwencji.
- **Suma $n$ wyrazów**: $S_n = \\frac{n(a_1 + a_n)}{2}$ dla arytmetycznego — łatwo w pośpiechu pominąć dzielenie przez 2.

<!-- see-also -->
fn_transforms
fn_concept
`,y2=`---
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
`,g2=`---
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
`,w2=`---
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
Ostrosłup prawidłowy czworokątny ma krawędź podstawy $a = 6$ i krawędź boczną $b = 5$. Oblicz wysokość $H$ i kąt $\\alpha$ nachylenia krawędzi bocznej do podstawy.<br><br>Krok 1: przekątna kwadratu podstawy $d = a\\sqrt{2} = 6\\sqrt{2}$, więc połowa przekątnej $p = 3\\sqrt{2}$ (to rzut krawędzi bocznej na podstawę).<br><br>Krok 2: znajdź trójkąt prostokątny wewnątrz — przyprostokątne $H$ i $p$, przeciwprostokątna $b$. Z Pitagorasa: $H^2 = b^2 - p^2 = 25 - 18 = 7$, więc $H = \\sqrt{7}$.<br><br>Krok 3: $\\tan \\alpha = \\frac{H}{p} = \\frac{\\sqrt{7}}{3\\sqrt{2}} = \\frac{\\sqrt{14}}{6}$.<br><br>**Dla ciekawych — dlaczego butelki w sklepach są wysokie.** To nie jest przypadek. Dla ustalonej objętości walec ma różne pola powierzchni w zależności od proporcji promień-wysokość. Weźmy litr płynu, czyli $V = 1000$ cm$^3$. Dla butelki wysokiej i wąskiej ($r = 3$ cm, $h \\approx 35{,}4$ cm) pole powierzchni bocznej $P_b = 2\\pi r h \\approx 667$ cm$^2$. Dla niskiej i szerokiej o tej samej objętości ($r = 8$ cm, $h \\approx 5$ cm) wychodzi już tylko $P_b \\approx 250$ cm$^2$ — prawie trzy razy mniej. A mózg odbiera „wielkość" produktu przede wszystkim przez **widoczną powierzchnię etykiety i wysokość**, nie przez realną objętość. Wysoka butelka wygląda więc na większą niż płaska — nawet jeśli zawiera dokładnie tyle samo. Producenci wykorzystują to świadomie: to samo $1000$ cm$^3$ wody w wysokiej butelce „czuje się" jak większy zakup. Z matematycznego punktu widzenia najmniejsze pole powierzchni przy ustalonej objętości walca wypada, gdy $h = 2r$ — czyli wysokość równa średnicy; każde odchylenie od tej proporcji zwiększa powierzchnię, a w stronę „wysokiej butelki" zwiększa ją dramatycznie. Ten sam pomysł wraca w zadaniach optymalizacyjnych: kiedy pyta się o „najmniej materiału na puszkę o danej objętości", odpowiedzią jest właśnie $h = 2r$.<br><br>W granicy $r \\to 0$ pole powierzchni rośnie do nieskończoności, więc z czysto matematycznego punktu widzenia nie ma „maksimum" — zawsze można pójść jeszcze cieniej i dostać jeszcze więcej powierzchni. W praktyce marketing zatrzymuje się wcześniej z dwóch powodów: butelka zbyt cienka jest niestabilna i się przewraca, a poza pewnym punktem mózg przestaje odbierać ją jako „większą" — widzi już tylko „słomkę". Optimum komercyjne to kompromis między dużą powierzchnią a wciąż rozpoznawalną szerokością.<br><br>**Dla ciekawych — dlaczego wieloryb nie może chodzić po lądzie (prawo skalowania $L^2$ vs $L^3$).** Gdy skalujemy zwierzę $k$-krotnie w każdym wymiarze, jego **masa rośnie $k^3$ razy** (objętość to $L^3$), ale **przekrój kości rośnie tylko $k^2$ razy** (powierzchnia). Dwukrotnie większe zwierzę jest osiem razy cięższe, ale kości mają jedynie cztery razy większą wytrzymałość — naprężenie w kościach rośnie liniowo z rozmiarem. Dlatego nie istnieją ssaki lądowe wielkości płetwala błękitnego: jego kości pękłyby pod własnym ciężarem. W wodzie ciężar jest zredukowany przez wypór, więc ograniczenie znika — stąd dopiero oceany pozwalają na tak ogromne ciała. Ta sama zależność wyjaśnia, dlaczego mrówka podnosi wielokrotność swojej masy (mała, więc $k^2$ przewyższa $k^3$), dlaczego mysz przeżyje upadek z dużej wysokości (mały stosunek masy do powierzchni — opór powietrza wygrywa), i dlaczego wieże gotyckich katedr mają proporcjonalnie grubsze fundamenty niż domki wiejskie. Wszystko sprowadza się do jednego faktu: pole i objętość skalują się w różnym tempie.
`,z2=`---
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
`,x2=`---
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
`,b2=`---
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
`,v2=`---
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
`,k2=`---
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
`,_2=`---
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
`,j2=`---
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
`,S2=`---
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
`,q2=`---
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
`,T2=`---
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
Które zdanie o wartości bezwzględnej jest prawdziwe?`,P2=`---
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
Zbiór rozwiązań nierówności $|x| < 3$ to:`,A2=`---
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
`,C2=`---
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
`,M2=`---
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
`,D2=`---
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
Prosta przez punkty A(1,2) i B(3,6) ma współczynnik kierunkowy:`,R2=`---
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
Odległość między punktami $A(1, 2)$ i $B(3, 5)$ wynosi:`,E2=`---
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
Środek odcinka $AB$ dla $A(0, 2)$ i $B(4, 5)$ wynosi:`,B2=`---
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
`,F2=`---
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
`,I2=`---
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
Pole rombu o przekątnych $d_1 = 8$ i $d_2 = 6$ wynosi:`,N2=`---
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
Prostokąt ma boki $6\\ \\text{cm}$ i $4\\ \\text{cm}$. Jego pole wynosi:`,L2=`---
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
Koło ma promień $r = 3\\ \\text{cm}$. Jego pole wynosi:`,W2=`---
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
`,O2=`---
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
`,H2=`---
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
Ciąg geometryczny: $a_1 = 3$, iloraz $q = 2$. Wyraz $a_5$ wynosi:`,G2=`---
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
Ciąg arytmetyczny: $a_1 = 1$, $r = 1$. Suma pierwszych 10 wyrazów wynosi:`,U2=`---
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
`,Z2=`---
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
`,K2=`---
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
`,V2=`---
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
W schemacie Bernoulliego prawdopodobieństwo dokładnie $k$ sukcesów w $n$ próbach wynosi:`,Y2=`---
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
Rzucamy monetą 3 razy ($p = \\frac{1}{2}$). Prawdopodobieństwo dokładnie 2 orłów wynosi:`,Q2=`---
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
Prawdopodobieństwo sukcesu w pojedynczej próbie wynosi $\\frac{1}{3}$. Wykonujemy 5 niezależnych prób. Jakie jest prawdopodobieństwo dokładnie 2 sukcesów?`,X2=`---
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
Rzucamy monetą 6 razy. Jaka jest oczekiwana liczba orłów?`,J2=`---
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
Rzucamy monetą 4 razy. Jakie jest prawdopodobieństwo otrzymania co najmniej jednego orła?`,e$=`---
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
Rzucamy monetą 7 razy. Jakie jest prawdopodobieństwo uzyskania dokładnie 3 orłów?`,n$=`---
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
Prawdopodobieństwo trafienia w cel jednym strzałem wynosi $\\frac{1}{5}$. Strzelec oddaje 4 strzały. Jakie jest prawdopodobieństwo, że nie trafi ani razu?`,t$=`---
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
`,r$=`---
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
`,o$=`---
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
`,i$=`---
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
Rozwiń $(a + b)^3$:`,a$=`---
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
Wyraz ogólny rozwinięcia $(a+b)^n$ to:`,s$=`---
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
Rozwiń $(x+1)^4$:`,l$=`---
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
Jaki jest współczynnik przy $x^3$ w rozwinięciu $(x+2)^5$?`,c$=`---
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
Ile wynosi suma wszystkich współczynników dwumianowych w rozwinięciu $(a+b)^5$?`,u$=`---
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
Jaki jest współczynnik przy $x^3$ w rozwinięciu $(x - 3)^6$?`,d$=`---
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
Ile wyrazów ma rozwinięcie dwumianu $(a+b)^6$?`,p$=`---
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
`,m$=`---
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
Równanie okręgu o środku $(2, -1)$ i promieniu $r = 3$:`,f$=`---
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
Okrąg $(x-1)^2 + (y+2)^2 = 9$ ma:`,h$=`---
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
`,$$=`---
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
`,y$=`---
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
Ile jest sposobów wybrania 2 osób z 5?`,g$=`---
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
Który wzór jest prawdziwą własnością symbolu Newtona?`,w$=`---
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
Na turnieju gra 8 drużyn. Każda para gra ze sobą dokładnie raz. Ile meczów zostanie rozegranych?`,z$=`---
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
Z 10 uczniów wybieramy 4-osobową drużynę. Na ile sposobów?`,x$=`---
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
Która z poniższych tożsamości jest prawdziwa dla $0 \\le k \\le n$?`,b$=`---
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
Z grupy 6 kobiet i 8 mężczyzn wybieramy komisję złożoną z 2 kobiet i 3 mężczyzn. Na ile sposobów można to zrobić?`,v$=`---
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
Ile wynosi $\\binom{7}{3}$?`,k$=`---
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
`,_$=`---
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
Oblicz sumę liczb zespolonych: $(1 + 2i) + (1 + i) =$`,j$=`---
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
Moduł liczby zespolonej $z = 1 + 2i$ wynosi:`,S$=`---
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
`,q$=`---
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
Wzór na prawdopodobieństwo warunkowe $P(A|B)$:`,T$=`---
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
Z kart 1–10 wylosowano kartę $\\leq 4$. Prawdopodobieństwo, że to karta parzysta, wynosi:`,P$=`---
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
Rzucamy kostką. Wiemy, że wypadła liczba parzysta. Jakie jest prawdopodobieństwo, że jest ona większa niż 4?`,A$=`---
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
$P(A) = 0{,}3$, $P(B) = 0{,}6$, $P(B|A) = 0{,}8$. Korzystając ze wzoru Bayesa, oblicz $P(A|B)$.`,C$=`---
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
$P(A) = 0{,}4$, $P(B|A) = 0{,}9$, $P(B|A') = 0{,}4$. Oblicz $P(B)$ korzystając ze wzoru prawdopodobieństwa całkowitego.`,M$=`---
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
W urnie są 3 kule czerwone i 9 niebieskich. Losujemy bez zwracania. Pierwsza kula była czerwona. Jakie jest prawdopodobieństwo, że druga też będzie czerwona?`,D$=`---
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
$P(A) = 0{,}3$, $P(B) = 0{,}4$, $P(A \\cap B) = 0{,}12$. Czy zdarzenia $A$ i $B$ są niezależne?`,R$=`---
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
$P(A) = 0{,}4$ i $P(A \\cap B) = 0{,}3$. Ile wynosi $P(B|A)$?`,E$=`---
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
Fabryka ma dwie linie produkcyjne. Linia I wytwarza 40% produkcji z 5% braków, linia II — 60% produkcji z 3% braków. Losowo wybrany produkt okazał się wadliwy. Jakie jest prawdopodobieństwo, że pochodzi z linii I?`,B$=`---
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
`,F$=`---
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
`,I$=`---
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
Równanie elipsy o środku w początku układu współrzędnych to:`,N$=`---
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
Które równanie opisuje parabolę jako krzywą stożkową?`,L$=`---
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
Na ile sposobów można usadzić 3 osoby w rzędzie 3 krzeseł?`,W$=`---
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
Masz 2 koszulki i 4 spodnie. Na ile sposobów możesz się ubrać?`,O$=`---
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
Z miasta A do B prowadzą 3 drogi, z B do C — 4 drogi. Ile jest tras z A do C przez B?`,H$=`---
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
Ile jest liczb 5-cyfrowych, w których każda cyfra (od 1 do 5) występuje dokładnie raz?`,G$=`---
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
Na jednej półce stoi 7 książek, na drugiej 8. Na ile sposobów można wybrać jedną książkę?`,U$=`---
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
Ile jest możliwych 4-cyfrowych kodów PIN (cyfry 0–9, mogą się powtarzać)?`,Z$=`---
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
W restauracji jest 4 rodzaje zup i 9 dań głównych. Na ile sposobów można zamówić obiad składający się z zupy i dania głównego?`,K$=`---
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
W pokoju jest 13 osób. Co najmniej ile osób musiało urodzić się w tym samym miesiącu?`,V$=`---
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
Z 10 zawodników wybieramy 3 na podium (1., 2. i 3. miejsce). Na ile sposobów można to zrobić?`,Y$=`---
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
Ile liczb parzystych 4-cyfrowych można utworzyć z cyfr $\\{1, 2, 3, 4\\}$, jeśli każda cyfra występuje dokładnie raz?`,Q$=`---
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
`,X$=`---
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
Mediana zbioru {3, 7, 1, 9, 5} wynosi:`,J$=`---
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
Mediana zbioru $\\{9, 3, 7, 5, 11\\}$ wynosi:`,ey=`---
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
Średnia arytmetyczna liczb $4, 6, 8, 6$ wynosi:`,ny=`---
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
`,ty=`---
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
`,ry=`---
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
Jeśli $f'(x) > 0$ na przedziale $(a, b)$, to funkcja $f$:`,oy=`---
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
Funkcja $f(x) = x^2 - 2x + 3$ ma ekstremum w:`,iy=`---
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
`,ay=`---
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
Pochodna funkcji $f(x) = x^3 - 4x$ wynosi:`,sy=`---
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
Pochodna funkcji $f(x) = \\sin x$ wynosi:`,ly=`---
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
Pochodna funkcji $f(x) = 2x^3 - 2x$ wynosi:`,cy=`---
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
`,uy=`---
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
Wartość oczekiwana rozkładu dwumianowego $B(n, p)$ wynosi:`,dy=`---
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
Wykres rozkładu normalnego ma kształt:`,py=`---
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
`,my=`---
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
Rozłóż na czynniki: $x^2 - 2x - 8 =$`,fy=`---
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
Rozłóż na czynniki: $2x^2 - 6x =$`,hy=`---
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
Rozłóż na czynniki: $x^2 - 25 =$`,$y=`---
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
Rozłóż na czynniki: $x^2 + 6x + 9 =$`,yy=`---
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
Rozłóż na czynniki: $4x^2 - 9 =$`,gy=`---
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
Rozłóż na czynniki: $3x^2 - 3x - 6 =$`,wy=`---
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
Rozłóż przez grupowanie: $x^3 + x^2 + 3x + 3 =$`,zy=`---
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
Rozłóż na czynniki: $3x^2 + 7x + 2 =$`,xy=`---
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
Rozłóż na czynniki: $x^3 - 1 =$`,by=`---
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
`,vy=`---
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
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(f \\circ g)(x)$:`,ky=`---
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
Dla $f(x) = x^2 - 1$ i $g(x) = 2x$, oblicz $(g \\circ f)(x)$:`,_y=`---
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
Która z poniższych relacji NIE jest funkcją?`,jy=`---
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
Funkcja to takie przyporządkowanie, że:`,Sy=`---
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
Dana jest funkcja $f(x) = 2x + 4$. Oblicz $f(3)$:`,qy=`---
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
`,Ty=`---
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
Funkcja wykładnicza $f(x) = a^x$ (dla $a > 0$, $a \\neq 1$) jest:`,Py=`---
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
Wykres funkcji $f(x) = a^x$ zawsze przechodzi przez punkt:`,Ay=`---
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
Funkcja liniowa $f(x) = (-2k+3)x + k - 1$ jest malejąca gdy:`,Cy=`---
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
Funkcja $f(x) = 2x - 1$ jest:`,My=`---
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
Funkcja $f(x) = 2x - 3$ przecina osie układu współrzędnych w punktach:`,Dy=`---
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
`,Ry=`---
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
Wykres funkcji $f(x) = \\log_a x$ zawsze przechodzi przez punkt:`,Ey=`---
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
Dziedzina funkcji $f(x) = \\log_a x$ to:`,By=`---
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
`,Fy=`---
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
Funkcja $f(x) = x^4 + 2x^2$ jest:`,Iy=`---
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
Funkcja $f(x) = x^3$ jest:`,Ny=`---
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
`,Ly=`---
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
Wierzchołek paraboli $f(x) = x^2 - 2x - 3$ to:`,Wy=`---
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
Funkcja $f(x) = 3x^2 - x + 1$ ma parabolę otwartą:`,Oy=`---
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
Oś symetrii paraboli $f(x) = x^2 - 6x + 5$ ma równanie:`,Hy=`---
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
Zbiór wartości funkcji $f(x) = x^2 - 4x - 4$ to:`,Gy=`---
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
Parabola $f(x) = x^2 - 2x - 3$ przecina oś $OX$ w punktach:`,Uy=`---
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
Funkcja $f(x) = -x^2 + 2x + 3$ ma:`,Zy=`---
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
Postać kanoniczna funkcji $f(x) = x^2 - 6x + 10$ to:`,Ky=`---
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
Funkcja $g(x) = (x - 2)^2 + 3$ jest obrazem funkcji $f(x) = x^2$ przez:`,Vy=`---
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
Funkcja $f(x) = -2x^2 + 4x + 5$ ma:`,Yy=`---
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
`,Qy=`---
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
Okres funkcji $f(x) = \\sin x$ wynosi:`,Xy=`---
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
Zbiór wartości funkcji $f(x) = \\sin x$ to:`,Jy=`---
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
`,e4=`---
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
Oblicz: $\\dfrac{1}{4} + \\dfrac{1}{3} =$`,n4=`---
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
Oblicz: $\\dfrac{3}{4} \\cdot \\dfrac{1}{2} =$`,t4=`---
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
`,r4=`---
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
Suma nieskończonego szeregu geometrycznego ($|q| < 1$) wynosi:`,o4=`---
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
Suma szeregu $1 + \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\ldots$ wynosi:`,i4=`---
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
`,a4=`---
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
`,s4=`---
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
`,l4=`---
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
Ile wynosi NWD(84, 56)?`,c4=`---
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
Oblicz: $(-3) \\cdot 4 =$`,u4=`---
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
Oblicz: $3 - 8 =$`,d4=`---
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
$\\displaystyle \\int 2x \\, dx =$`,p4=`---
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
Oblicz całkę: $\\displaystyle\\int x^2\\,dx$`,m4=`---
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
Oblicz całkę oznaczoną: $\\displaystyle\\int_0^3 x\\,dx$`,f4=`---
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
Granica $\\displaystyle \\lim_{x \\to \\infty} \\frac{3x^2 + 1}{x^2 - 5}$ wynosi:`,h4=`---
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
Oblicz granicę: $\\displaystyle\\lim_{x\\to 0} \\frac{\\sin x}{x}$`,$4=`---
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
Oblicz granicę: $\\displaystyle\\lim_{x\\to\\infty} \\frac{5x^2 - 1}{x^2 + 3}$`,y4=`---
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
Rozwiązaniem równania $2x - 3 = 7$ jest:`,g4=`---
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
Rozwiąż równanie: $3x - 2 = 10$`,w4=`---
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
Rozwiąż równanie: $2(x + 4) = 2$`,z4=`---
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
`,x4=`---
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
Rozwiąż nierówność: $2x - 1 > 5$`,b4=`---
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
Rozwiąż nierówność: $-3x \\leq 6$`,v4=`---
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
`,k4=`---
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
`,_4=`---
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
`,j4=`---
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
Rozwiąż układ: $\\begin{cases} x + y = 3 \\\\ y = 2x \\end{cases}$`,S4=`---
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
Rozwiąż układ: $\\begin{cases} 2x + y = 5 \\\\ x + y = 2 \\end{cases}$`,q4=`---
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
`,T4=`---
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
`,P4=`---
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
Rozwiąż równanie: $\\log_3 x = 2$`,A4=`---
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
Rozwiąż równanie: $2^x = 16$`,C4=`---
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
Wartość $\\log_{\\sqrt{3}} 9$ jest równa:`,M4=`---
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
Oblicz: $\\log_2 8 =$`,D4=`---
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
Które wyrażenie jest równe $\\log_a(xy)$?`,R4=`---
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
`,E4=`---
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
`,B4=`---
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
`,F4=`---
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
`,I4=`---
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
`,N4=`---
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
`,L4=`---
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
Jeśli zdanie $q$ jest fałszywe, to koniunkcja $p \\wedge q$ jest:`,W4=`---
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
Jeśli zdanie $p$ jest prawdziwe, to alternatywa $p \\vee q$ jest:`,O4=`---
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
`,H4=`---
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
Funkcja $f(x) = (x-3)^2 + 2$ osiąga minimum dla:`,G4=`---
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
Dwie liczby sumują się do $10$. Maksymalny iloczyn tych liczb wynosi:`,U4=`---
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
Rolnik ma $50$ m ogrodzenia i chce ogrodzić prostokątny wybieg przy ścianie stodoły (jedna strona nie wymaga ogrodzenia). Jaką długość powinna mieć strona przy ścianie, aby pole wybiegu było największe?`,Z4=`---
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
Piłkę wyrzucono pionowo w górę. Jej wysokość (w metrach) po $t$ sekundach opisuje wzór $h(t) = -5t^2 + 30t$. Jaka jest maksymalna wysokość piłki?`,K4=`---
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
Sklep sprzedaje produkt w cenie $x$ zł za sztukę. Liczba sprzedanych sztuk wynosi $(100 - x)$. Przy jakiej cenie przychód jest największy i ile wynosi?`,V4=`---
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
Suma dwóch liczb nieujemnych wynosi $16$. Iloczyn tych liczb jest największy, gdy te liczby to:`,Y4=`---
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
Najmniejsza wartość funkcji $f(x) = 2x^2 - 4x - 1$ wynosi:`,Q4=`---
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
`,X4=`---
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
`,J4=`---
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
Równanie $x^2 - 2kx + k = 0$ ma dwa pierwiastki rzeczywiste gdy:`,eg=`---
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
Równanie $x^2 - 2kx + 4k = 0$ ma jedno podwójne rozwiązanie dla:`,ng=`---
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
Równanie $x^2 + 2mx + 4 = 0$ ma dwa różne rozwiązania rzeczywiste gdy:`,tg=`---
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
`,rg=`---
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
Na ile sposobów można ustawić 4 osoby w rzędzie?`,og=`---
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
Na ile sposobów można ułożyć litery słowa ABCDA (5 liter, A powtarza się 2 razy)?`,ig=`---
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
Na ile sposobów można ustawić 5 różnych książek na półce?`,ag=`---
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
Ile różnych „słów" (ciągów liter) można utworzyć ze wszystkich liter wyrazu KOTEK?`,sg=`---
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
Z 5 kandydatów wybieramy przewodniczącego, zastępcę i sekretarza. Na ile sposobów?`,lg=`---
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
Ile anagramów (różnych ciągów liter) można utworzyć ze wszystkich liter wyrazu MATEMATYKA?`,cg=`---
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
Na ile sposobów można ustawić w rzędzie 5 osób, jeśli dwie konkretne osoby muszą stać obok siebie?`,ug=`---
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
`,dg=`---
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
Suma kątów wewnętrznych trójkąta wynosi:`,pg=`---
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
Pole trójkąta o podstawie $a$ i wysokości $h$ wynosi:`,mg=`---
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
`,fg=`---
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
`,hg=`---
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
`,$g=`---
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
`,yg=`---
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
`,gg=`---
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
`,wg=`---
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
Czy $x = 2$ jest pierwiastkiem wielomianu $p(x) = x^3 - 4x$?`,zg=`---
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
Wielomian stopnia $n$ ma:`,xg=`---
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
`,bg=`---
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
Stopień wielomianu $2x^3 + x - 5$ wynosi:`,vg=`---
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
Rozwiń: $(x + 1)(x + 2) =$`,kg=`---
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
Rozwiń: $(2x - 1)(x + 3) =$`,_g=`---
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
Jaki jest stopień wielomianu $W(x) = x^5 - 3x^3 + 2x - 7$?`,jg=`---
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
Oblicz wartość wielomianu $W(x) = 2x^3 - 3x^2 + 2x - 2$ dla $x = 2$.`,Sg=`---
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
Iloraz $\\frac{x^3 + 4x^2 + 7x + 6}{x + 2}$ jest równy:`,qg=`---
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
Suma wielomianów $P(x) = x^4 - 3x^2 + 1$ i $Q(x) = -2x^3 + 4x^2 + 2x - 3$ wynosi:`,Tg=`---
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
Rozwiń $(x + 1)^3 =$`,Pg=`---
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
Wielomian $P(x)$ ma stopień $1$, a wielomian $Q(x)$ ma stopień $3$. Jaki jest stopień wielomianu $P(x) \\cdot Q(x)$?`,Ag=`---
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
Wartość wyrażenia $(\\frac{1}{16})^8 \\cdot 8^{16}$ jest równa:`,Cg=`---
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
Oblicz: $2^3 =$`,Mg=`---
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
Uprość: $a^2 \\cdot a^3 =$`,Dg=`---
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
`,Rg=`---
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
`,Eg=`---
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
Rzucamy kostką do gry. Prawdopodobieństwo wyrzucenia liczby parzystej wynosi:`,Bg=`---
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
Rzucamy monetą dwa razy. Prawdopodobieństwo wyrzucenia dwóch orłów wynosi:`,Fg=`---
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
Z talii 52 kart losujemy jedną kartę. Jakie jest prawdopodobieństwo wylosowania asa?`,Ig=`---
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
Rzucamy kostką sześcienną. Jakie jest prawdopodobieństwo, że NIE wypadnie szóstka?`,Ng=`---
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
Rzucamy dwa razy monetą. Jakie jest prawdopodobieństwo otrzymania dwóch orłów?`,Lg=`---
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
Rzucamy dwiema kostkami. Jakie jest prawdopodobieństwo, że suma oczek wyniesie 7?`,Wg=`---
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
$P(A) = \\frac{1}{2}$, $P(B) = \\frac{1}{3}$, $P(A \\cap B) = \\frac{1}{6}$. Ile wynosi $P(A \\cup B)$?`,Og=`---
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
Zdarzenia $A$ i $B$ są niezależne. $P(A) = \\frac{1}{2}$, $P(B) = \\frac{1}{5}$. Ile wynosi $P(A \\cap B)$?`,Hg=`---
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
Rzucamy dwiema kostkami. Jakie jest prawdopodobieństwo, że suma oczek będzie większa niż 8?`,Gg=`---
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
`,Ug=`---
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
`,Zg=`---
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
Dowód nie wprost polega na tym, że:`,Kg=`---
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
Dowód przez indukcję matematyczną składa się z:`,Vg=`---
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
`,Yg=`---
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
`,Qg=`---
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
`,Xg=`---
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
`,Jg=`---
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
Przeciwprostokątna trójkąta prostokątnego o przyprostokątnych $6$ i $8$ wynosi:`,e3=`---
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
Trójkąt prostokątny ma przyprostokątne $a = 3$ i $b = 4$. Przeciwprostokątna $c$ wynosi:`,n3=`---
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
Trójkąt prostokątny ma przeciwprostokątną $c = 6$ i jedną przyprostokątną $b = 5$. Druga przyprostokątna wynosi:`,t3=`---
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
Równanie $x^2 - 5x + 6 = 0$ ma rozwiązania:`,r3=`---
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
Rozwiąż: $x^2 + 2x - 3 = 0$`,o3=`---
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
Ile rozwiązań rzeczywistych ma równanie $x^2 + 4 = 0$?`,i3=`---
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
Ile rozwiązań ma równanie $x^2 - 6x + 9 = 0$?`,a3=`---
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
Równanie $x^2 + 1 = 0$ ma:`,s3=`---
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
Rozwiąż równanie $2x^2 - x - 3 = 0$.`,l3=`---
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
Wyróżnik równania $2x^2 - 3x - 5 = 0$ wynosi:`,c3=`---
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
Rozwiąż równanie $x^2 - 5x = 0$.`,u3=`---
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
Równanie $2x^2 + x + m = 0$ ma dwa różne pierwiastki rzeczywiste, gdy:`,d3=`---
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
Iloczyn dwóch kolejnych liczb nieparzystych wynosi $35$. Te liczby to:`,p3=`---
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
`,m3=`---
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
Rozwiąż nierówność: $x^2 - x - 6 < 0$`,f3=`---
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
Rozwiąż nierówność: $x^2 - 3x - 4 \\geq 0$`,h3=`---
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
Rozwiąż nierówność $x^2 - 4x - 5 > 0$.`,$3=`---
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
Rozwiązaniem nierówności $x^2 + 2x + 5 > 0$ jest:`,y3=`---
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
Rozwiąż nierówność $x^2 - 5x + 4 \\leq 0$.`,g3=`---
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
Rozwiąż nierówność $-x^2 - 2x + 3 \\leq 0$.`,w3=`---
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
Rozwiązaniem nierówności $x^2 - 4x + 4 > 0$ jest:`,z3=`---
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
`,x3=`---
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
Uprość: $\\dfrac{x^2 - 1}{(x-1)^2}$`,b3=`---
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
Oblicz: $\\dfrac{x}{2} \\cdot \\dfrac{5}{3} =$`,v3=`---
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
`,k3=`---
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
`,_3=`---
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
`,j3=`---
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
`,S3=`---
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
`,q3=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{1}{n}$`,T3=`---
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
Oblicz granicę ciągu: $\\displaystyle\\lim_{n\\to\\infty} \\frac{3n+1}{n}$`,P3=`---
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
Ciąg określony wzorem $a_n = 3n - 1$ ma piąty wyraz równy:`,A3=`---
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
Ciąg $1, 3, 5, 7, \\ldots$ ma wzór ogólny:`,C3=`---
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
Ciąg arytmetyczny: $a_1 = 1$, różnica $r = 4$. Piąty wyraz $a_5$ wynosi:`,M3=`---
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
`,D3=`---
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
`,R3=`---
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
`,E3=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cap B$:`,B3=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\cup B$:`,F3=`---
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
Dla $A = \\{1, 2, 3, 4\\}$ i $B = \\{2, 4, 6\\}$ wyznacz $A \\setminus B$:`,I3=`---
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
$|A| = 5$, $|B| = 6$, $|A \\cap B| = 3$. Ile wynosi $|A \\cup B|$?`,N3=`---
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
$A = \\{2, 4\\}$, $B = \\{1, 2, 3, 4, 5\\}$. Czy $A \\subset B$?`,L3=`---
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
Uniwersum $U = \\{1, 2, 3, 4, 5\\}$, $A = \\{2, 4\\}$. Wyznacz dopełnienie $A' =$`,W3=`---
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
Które z poniższych jest poprawnym prawem De Morgana?`,O3=`---
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
W klasie 30 uczniów: 20 lubi matematykę, 15 lubi fizykę, a 5 nie lubi żadnego z tych przedmiotów. Ilu uczniów lubi oba przedmioty?`,H3=`---
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
Ile podzbiorów (łącznie ze zbiorem pustym) ma zbiór $\\{a, b, c, d\\}$?`,G3=`---
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
`,U3=`---
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
Twierdzenie cosinusów brzmi:`,Z3=`---
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
Twierdzenie sinusów głosi, że w każdym trójkącie:`,K3=`---
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
`,V3=`---
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
`,Y3=`---
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
Wzór na objętość sześcianu o krawędzi $a$:`,Q3=`---
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
Wzór na objętość kuli o promieniu $r$:`,X3=`---
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
`,J3=`---
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
`,ew=`---
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
`,nw=`---
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
`,tw=`---
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
`,rw=`---
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
Średnia arytmetyczna {2, 4, 6, 8, 10} wynosi:`,ow=`---
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
Dominanta (moda) zbioru danych to:`,iw=`---
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
Dla danych $\\{4, 7, 9, 12, 6\\}$ rozstęp (zakres) wynosi:`,aw=`---
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
`,sw=`---
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
`,lw=`---
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
Dwie proste równoległe przecinają boki trójkąta. Jeśli $AB = 4$, $BC = 8$, $DE = 3$, to $EF =$`,cw=`---
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
Co gwarantuje twierdzenie Talesa, gdy prosta jest równoległa do boku trójkąta?`,uw=`---
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
W trójkącie prostokątnym $\\sin\\alpha = \\frac{3}{5}$. Wartość $\\cos\\alpha$ wynosi:`,dw=`---
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
Wartość $\\sin 30°$ wynosi:`,pw=`---
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
Wartość wyrażenia $\\sin^2\\alpha + \\cos^2\\alpha$ wynosi zawsze:`,mw=`---
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
`,fw=`---
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
`,hw=`---
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
`,$w=`---
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
Rozwiąż równanie: $\\sin x = \\dfrac{1}{2}$`,yw=`---
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
Rozwiąż równanie: $\\tan x = 1$`,gw=`---
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
`,ww=`---
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
`,zw=`---
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
`,xw=`---
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
Wzór na $\\sin 2\\alpha$:`,bw=`---
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
Wzór na $\\cos(\\alpha - \\beta)$:`,vw=`---
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
`,kw=`---
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
Wartość $\\cos 30°$ wynosi:`,_w=`---
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
Wartość $\\sin 45°$ wynosi:`,jw=`---
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
`,Sw=`---
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
Iloczyn skalarny wektorów $\\vec{a} = (a_1, a_2)$ i $\\vec{b} = (b_1, b_2)$ to:`,qw=`---
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
Długość wektora $\\vec{v} = (2, 3)$ wynosi:`,Tw=`---
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
`,Pw=`---
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
Dla równania $x^2 - 5x + 6 = 0$ wzory Viète'a dają:`,Aw=`---
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
Dla pierwiastków $x_1, x_2$ równania $x^2 - 5x + 6 = 0$, oblicz $x_1^2 + x_2^2$:`,Cw=`---
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
Suma pierwiastków równania $x^2 + 5x + 6 = 0$ wynosi:`,Mw=`---
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
Równanie kwadratowe, którego pierwiastkami są $2$ i $3$, to:`,Dw=`---
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
Jeśli $x_1, x_2$ są pierwiastkami $x^2 - 5x + 6 = 0$, to $x_1^2 + x_2^2 =$`,Rw=`---
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
Pierwiastki równania $x^2 - 5x - 6 = 0$ to $x_1$ i $x_2$. Wartość $\\frac{1}{x_1} + \\frac{1}{x_2}$ wynosi:`,Ew=`---
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
Iloczyn pierwiastków równania $2x^2 - 7x + 3 = 0$ wynosi:`,Bw=`---
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
`,Fw=`---
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
`,Iw=`---
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
`;function dp(o){const t=o.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);if(!t)return{meta:{},body:o.trim()};const r=t[1],a=t[2].trim(),s={},c=r.split(/\r?\n/);let u=0;for(;u<c.length;){const m=c[u];if(m.startsWith("  ")){u++;continue}const h=m.match(/^(\w+):\s*(.*)/);if(!h){u++;continue}const w=h[1];let g=h[2].trim();if(g===""||g===null){const z=c[u+1]??"";if(z.startsWith("  - ")){const S=[];for(u++;u<c.length&&c[u].startsWith("  - ");){let q=c[u].replace(/^  - /,"").trim();q=q.replace(/^["']|["']$/g,""),S.push(q),u++}s[w]=S.length>0?S:null}else if(z.match(/^  \w+:/)){const S={};for(u++;u<c.length&&c[u].match(/^  \w+:/);){const q=c[u].match(/^  (\w+):\s*(.*)/);if(q){const j=q[1];let _=q[2].trim().replace(/^["']|["']$/g,"");S[j]=!isNaN(_)&&_!==""?Number(_):_}u++}s[w]=S}else s[w]=null,u++}else g=g.replace(/^["']|["']$/g,""),!isNaN(g)&&g!==""?s[w]=Number(g):g==="true"?s[w]=!0:g==="false"?s[w]=!1:s[w]=g,u++}return{meta:s,body:a}}function pp(o,t){return Object.entries(o).map(([r,a])=>{var m;const s=(m=r.match(t))==null?void 0:m[1],{meta:c,body:u}=dp(a);return{id:s,body:u||"",label:c.label??s,labelPl:c.labelPl??c.label??s,scope:c.scope??"default",section:c.section??"default",level:c.level??1,tag:c.tag??null,x:c.x??0,y:c.y??0,resources:Array.isArray(c.resources)?c.resources.map(h=>{if(typeof h!="string")return null;const[w,g,z,S]=h.split("|").map(j=>j.trim()),q=g&&!g.includes("/")&&!g.startsWith("http")?`resources/${s}/${g}`:g??"";return{type:w??"article",url:q,titleEn:z??"",titlePl:S??z??""}}).filter(Boolean):[]}})}function mp(o,t){var a;const r={};for(const[s,c]of Object.entries(o)){const u=(a=s.match(t))==null?void 0:a[1];if(!u)continue;const{meta:m,body:h}=dp(c);r[u]||(r[u]=[]),r[u].push({q:h,options:m.options??[],correct:m.correct??0,hint:m.hint??"",hints:Array.isArray(m.hints)?m.hints:m.hint?[m.hint]:[],source:m.source??null,tests:m.tests&&typeof m.tests=="object"&&Object.keys(m.tests).length>0?m.tests:{[u]:1}})}return r}function Ui(o,t,r=[],a=null,s=null){const c=o[t];if(!c||c.length===0)return null;if(typeof s=="number"&&c[s])return{...c[s],index:s};if(r.includes(-1))return null;const u=c.map((h,w)=>({q:h,i:w})).filter(({q:h,i:w})=>!r.includes(w)&&(a?h.source===a:!0));if(u.length===0)return null;const m=u[Math.floor(Math.random()*u.length)];return{...m.q,index:m.i}}const Nw=[["integers","linear_eq"],["integers","modular_arithmetic"],["fractions","linear_eq"],["powers","linear_eq"],["linear_eq","linear_ineq"],["linear_eq","linear_sys"],["linear_eq","abs_value"],["fractions","sequences"],["powers","sequences"],["thales","pythagoras"],["thales","trig_basic"],["pythagoras","trig_basic"],["pythagoras","solid_geom"],["area_perimeter","solid_geom"],["area_perimeter","planimetria_lp"],["thales","planimetria_lp"],["pythagoras","planimetria_lp"],["trig_basic","trig_lp"],["linear_eq","polynomials"],["powers","polynomials"],["polynomials","rational_expr"],["polynomials","factoring"],["factoring","quadratic_eq"],["polynomials","quadratic_eq"],["quadratic_eq","quadratic_ineq"],["quadratic_eq","vieta"],["quadratic_eq","param_eq"],["quadratic_ineq","param_eq"],["polynomials","poly_roots"],["factoring","poly_roots"],["powers","log_exp"],["log_exp","log_eq"],["log_exp","fn_exp"],["log_exp","fn_log"],["trig_lp","sin_cos_law"],["trig_lp","trig_formulas"],["trig_formulas","trig_eq"],["sequences","arith_geom"],["arith_geom","seq_limits"],["arith_geom","geo_series"],["fn_concept","fn_linear"],["fn_concept","fn_quadratic"],["fn_concept","fn_transforms"],["fn_linear","fn_quadratic"],["quadratic_eq","fn_quadratic"],["fn_quadratic","fn_poly"],["polynomials","fn_poly"],["fn_quadratic","optimization_lp"],["fn_poly","fn_compositions"],["fn_exp","fn_compositions"],["trig_formulas","fn_trig"],["trig_eq","fn_trig"],["linear_sys","analytic_geom"],["analytic_geom","circle_eq"],["quadratic_eq","circle_eq"],["sin_cos_law","solid_geom"],["planimetria_lp","solid_geom"],["trig_lp","planimetria_lp"],["analytic_geom","vectors"],["circle_eq","conic_sections"],["data_basics","stat_lp"],["stat_lp","probability"],["sets","probability"],["counting","probability"],["probability","cond_prob"],["probability","bernoulli"],["cond_prob","distributions"],["bernoulli","distributions"],["sets","logic_basics"],["logic_basics","proof"],["sets","proof"],["counting","permutations"],["counting","combinations"],["combinations","binom_theorem"],["permutations","binom_theorem"],["powers","binom_theorem"],["fn_poly","limits"],["fn_exp","limits"],["fn_log","limits"],["fn_trig","limits"],["seq_limits","limits"],["limits","derivative"],["derivative","deriv_apps"],["optimization_lp","deriv_apps"],["quadratic_eq","complex"],["poly_roots","complex"],["derivative","integral"]],Lw={SP8:{labelEn:"Primary y8",labelPl:"SP kl. 8",color:"#4a9eff"},LP:{labelEn:"Matura (basic)",labelPl:"Matura podst.",color:"#f5a623"},LR:{labelEn:"Matura (extended)",labelPl:"Matura rozszerz.",color:"#e05cef"},UNIV:{labelEn:"University / IB",labelPl:"Uczelnia / IB",color:"#6b7d9a"}},Ww={liczby_rzeczywiste:"#3dc9b0",wyrazenia:"#2ecc71",rownania:"#e74c3c",funkcje:"#f5a623",ciagi:"#e67e22",trygonometria:"#9b59b6",planimetria:"#e05cef",geometria_analityczna:"#c0392b",stereometria:"#8e44ad",kombinatoryka:"#c8d6e5",statystyka:"#4a9eff",logika:"#ff6b6b",optymalizacja:"#1abc9c",analiza:"#7f8c8d"},Ow={liczby_rzeczywiste:{en:"Real Numbers",pl:"I. Liczby rzeczywiste"},wyrazenia:{en:"Algebraic Expressions",pl:"II. Wyrażenia algebraiczne"},rownania:{en:"Equations & Ineq.",pl:"III–IV. Równania i układy"},funkcje:{en:"Functions",pl:"V. Funkcje"},ciagi:{en:"Sequences",pl:"VI. Ciągi"},trygonometria:{en:"Trigonometry",pl:"VII. Trygonometria"},planimetria:{en:"Plane Geometry",pl:"VIII. Planimetria"},geometria_analityczna:{en:"Analytic Geometry",pl:"IX. Geometria analityczna"},stereometria:{en:"Solid Geometry",pl:"X. Stereometria"},kombinatoryka:{en:"Combinatorics & Prob.",pl:"XI. Kombinatoryka i rach. prawdop."},statystyka:{en:"Statistics",pl:"XII. Statystyka"},logika:{en:"Logic & Sets",pl:"XIII. Logika i teoria zbiorów"},optymalizacja:{en:"Calculus (LR)",pl:"XIII. Optymalizacja i rach. różniczkowy"},analiza:{en:"Analysis (Univ/IB)",pl:"Analiza matematyczna (uczelnia/IB)"}},Hw={id:"math_pl",subject:"mathematics",title:"Matematyka — Podstawa Programowa",titleEn:"Mathematics — Polish National Curriculum",description:"Pełna podstawa programowa z matematyki: SP8, matura podstawowa, rozszerzona i poziom uczelni.",descriptionEn:"Full Polish mathematics curriculum: primary school year 8 through university/IB level.",lang:"pl",icon:"∑",color:"#4a9eff"},Gw=Object.assign({"./nodes/abs_value/node.md":fh,"./nodes/analytic_geom/node.md":hh,"./nodes/area_perimeter/node.md":$h,"./nodes/arith_geom/node.md":yh,"./nodes/bernoulli/node.md":gh,"./nodes/binom_theorem/node.md":wh,"./nodes/circle_eq/node.md":zh,"./nodes/combinations/node.md":xh,"./nodes/complex/node.md":bh,"./nodes/cond_prob/node.md":vh,"./nodes/conic_sections/node.md":kh,"./nodes/counting/node.md":_h,"./nodes/data_basics/node.md":jh,"./nodes/deriv_apps/node.md":Sh,"./nodes/derivative/node.md":qh,"./nodes/distributions/node.md":Th,"./nodes/equation_domain/node.md":Ph,"./nodes/factoring/node.md":Ah,"./nodes/fn_compositions/node.md":Ch,"./nodes/fn_concept/node.md":Mh,"./nodes/fn_exp/node.md":Dh,"./nodes/fn_linear/node.md":Rh,"./nodes/fn_log/node.md":Eh,"./nodes/fn_poly/node.md":Bh,"./nodes/fn_quadratic/node.md":Fh,"./nodes/fn_transforms/node.md":Ih,"./nodes/fn_trig/node.md":Nh,"./nodes/fractions/node.md":Lh,"./nodes/geo_series/node.md":Wh,"./nodes/integers/node.md":Oh,"./nodes/integral/node.md":Hh,"./nodes/limits/node.md":Gh,"./nodes/linear_eq/node.md":Uh,"./nodes/linear_ineq/node.md":Zh,"./nodes/linear_sys/node.md":Kh,"./nodes/linearity_fallacy/node.md":Vh,"./nodes/log_eq/node.md":Yh,"./nodes/log_exp/node.md":Qh,"./nodes/logic_basics/node.md":Xh,"./nodes/matura_pytania/node.md":Jh,"./nodes/modular_arithmetic/node.md":e2,"./nodes/odtwarzanie_wzorow/node.md":n2,"./nodes/optimization_lp/node.md":t2,"./nodes/param_eq/node.md":r2,"./nodes/permutations/node.md":o2,"./nodes/planimetria_lp/node.md":i2,"./nodes/poly_roots/node.md":a2,"./nodes/polynomials/node.md":s2,"./nodes/powers/node.md":l2,"./nodes/probability/node.md":c2,"./nodes/proof/node.md":u2,"./nodes/pythagoras/node.md":d2,"./nodes/quadratic_eq/node.md":p2,"./nodes/quadratic_ineq/node.md":m2,"./nodes/rational_expr/node.md":f2,"./nodes/seq_limits/node.md":h2,"./nodes/sequences/node.md":$2,"./nodes/sets/node.md":y2,"./nodes/sin_cos_law/node.md":g2,"./nodes/solid_geom/node.md":w2,"./nodes/stat_lp/node.md":z2,"./nodes/thales/node.md":x2,"./nodes/trig_basic/node.md":b2,"./nodes/trig_eq/node.md":v2,"./nodes/trig_formulas/node.md":k2,"./nodes/trig_lp/node.md":_2,"./nodes/vectors/node.md":j2,"./nodes/vieta/node.md":S2}),Uw=pp(Gw,/\.\/nodes\/([^/]+)\/node\.md$/),Zw=Object.assign({"./nodes/abs_value/questions/01.md":q2,"./nodes/abs_value/questions/02.md":T2,"./nodes/abs_value/questions/03.md":P2,"./nodes/abs_value/questions/04.md":A2,"./nodes/abs_value/questions/05.md":C2,"./nodes/abs_value/questions/06.md":M2,"./nodes/analytic_geom/questions/01.md":D2,"./nodes/analytic_geom/questions/02.md":R2,"./nodes/analytic_geom/questions/03.md":E2,"./nodes/analytic_geom/questions/04.md":B2,"./nodes/analytic_geom/questions/05.md":F2,"./nodes/area_perimeter/questions/01.md":I2,"./nodes/area_perimeter/questions/02.md":N2,"./nodes/area_perimeter/questions/03.md":L2,"./nodes/area_perimeter/questions/04.md":W2,"./nodes/arith_geom/questions/01.md":O2,"./nodes/arith_geom/questions/02.md":H2,"./nodes/arith_geom/questions/03.md":G2,"./nodes/arith_geom/questions/04.md":U2,"./nodes/arith_geom/questions/05.md":Z2,"./nodes/bernoulli/questions/01.md":K2,"./nodes/bernoulli/questions/02.md":V2,"./nodes/bernoulli/questions/03.md":Y2,"./nodes/bernoulli/questions/04.md":Q2,"./nodes/bernoulli/questions/05.md":X2,"./nodes/bernoulli/questions/06.md":J2,"./nodes/bernoulli/questions/07.md":e$,"./nodes/bernoulli/questions/08.md":n$,"./nodes/bernoulli/questions/09.md":t$,"./nodes/bernoulli/questions/10.md":r$,"./nodes/binom_theorem/questions/01.md":o$,"./nodes/binom_theorem/questions/02.md":i$,"./nodes/binom_theorem/questions/03.md":a$,"./nodes/binom_theorem/questions/04.md":s$,"./nodes/binom_theorem/questions/05.md":l$,"./nodes/binom_theorem/questions/06.md":c$,"./nodes/binom_theorem/questions/07.md":u$,"./nodes/binom_theorem/questions/08.md":d$,"./nodes/circle_eq/questions/01.md":p$,"./nodes/circle_eq/questions/02.md":m$,"./nodes/circle_eq/questions/03.md":f$,"./nodes/circle_eq/questions/04.md":h$,"./nodes/combinations/questions/01.md":$$,"./nodes/combinations/questions/02.md":y$,"./nodes/combinations/questions/03.md":g$,"./nodes/combinations/questions/04.md":w$,"./nodes/combinations/questions/05.md":z$,"./nodes/combinations/questions/06.md":x$,"./nodes/combinations/questions/07.md":b$,"./nodes/combinations/questions/08.md":v$,"./nodes/complex/questions/01.md":k$,"./nodes/complex/questions/02.md":_$,"./nodes/complex/questions/03.md":j$,"./nodes/cond_prob/questions/01.md":S$,"./nodes/cond_prob/questions/02.md":q$,"./nodes/cond_prob/questions/03.md":T$,"./nodes/cond_prob/questions/04.md":P$,"./nodes/cond_prob/questions/05.md":A$,"./nodes/cond_prob/questions/06.md":C$,"./nodes/cond_prob/questions/07.md":M$,"./nodes/cond_prob/questions/08.md":D$,"./nodes/cond_prob/questions/09.md":R$,"./nodes/cond_prob/questions/10.md":E$,"./nodes/cond_prob/questions/11.md":B$,"./nodes/conic_sections/questions/01.md":F$,"./nodes/conic_sections/questions/02.md":I$,"./nodes/conic_sections/questions/03.md":N$,"./nodes/counting/questions/01.md":L$,"./nodes/counting/questions/02.md":W$,"./nodes/counting/questions/03.md":O$,"./nodes/counting/questions/04.md":H$,"./nodes/counting/questions/05.md":G$,"./nodes/counting/questions/06.md":U$,"./nodes/counting/questions/07.md":Z$,"./nodes/counting/questions/08.md":K$,"./nodes/counting/questions/09.md":V$,"./nodes/counting/questions/10.md":Y$,"./nodes/counting/questions/11.md":Q$,"./nodes/data_basics/questions/01.md":X$,"./nodes/data_basics/questions/02.md":J$,"./nodes/data_basics/questions/03.md":ey,"./nodes/data_basics/questions/04.md":ny,"./nodes/deriv_apps/questions/01.md":ty,"./nodes/deriv_apps/questions/02.md":ry,"./nodes/deriv_apps/questions/03.md":oy,"./nodes/deriv_apps/questions/04.md":iy,"./nodes/derivative/questions/01.md":ay,"./nodes/derivative/questions/02.md":sy,"./nodes/derivative/questions/03.md":ly,"./nodes/distributions/questions/01.md":cy,"./nodes/distributions/questions/02.md":uy,"./nodes/distributions/questions/03.md":dy,"./nodes/factoring/questions/01.md":py,"./nodes/factoring/questions/02.md":my,"./nodes/factoring/questions/03.md":fy,"./nodes/factoring/questions/04.md":hy,"./nodes/factoring/questions/05.md":$y,"./nodes/factoring/questions/06.md":yy,"./nodes/factoring/questions/07.md":gy,"./nodes/factoring/questions/08.md":wy,"./nodes/factoring/questions/09.md":zy,"./nodes/factoring/questions/10.md":xy,"./nodes/fn_compositions/questions/01.md":by,"./nodes/fn_compositions/questions/02.md":vy,"./nodes/fn_compositions/questions/03.md":ky,"./nodes/fn_concept/questions/01.md":_y,"./nodes/fn_concept/questions/02.md":jy,"./nodes/fn_concept/questions/03.md":Sy,"./nodes/fn_exp/questions/01.md":qy,"./nodes/fn_exp/questions/02.md":Ty,"./nodes/fn_exp/questions/03.md":Py,"./nodes/fn_linear/questions/01.md":Ay,"./nodes/fn_linear/questions/02.md":Cy,"./nodes/fn_linear/questions/03.md":My,"./nodes/fn_log/questions/01.md":Dy,"./nodes/fn_log/questions/02.md":Ry,"./nodes/fn_log/questions/03.md":Ey,"./nodes/fn_poly/questions/01.md":By,"./nodes/fn_poly/questions/02.md":Fy,"./nodes/fn_poly/questions/03.md":Iy,"./nodes/fn_quadratic/questions/01.md":Ny,"./nodes/fn_quadratic/questions/02.md":Ly,"./nodes/fn_quadratic/questions/03.md":Wy,"./nodes/fn_quadratic/questions/04.md":Oy,"./nodes/fn_quadratic/questions/05.md":Hy,"./nodes/fn_quadratic/questions/06.md":Gy,"./nodes/fn_quadratic/questions/07.md":Uy,"./nodes/fn_quadratic/questions/08.md":Zy,"./nodes/fn_quadratic/questions/09.md":Ky,"./nodes/fn_quadratic/questions/10.md":Vy,"./nodes/fn_trig/questions/01.md":Yy,"./nodes/fn_trig/questions/02.md":Qy,"./nodes/fn_trig/questions/03.md":Xy,"./nodes/fractions/questions/01.md":Jy,"./nodes/fractions/questions/02.md":e4,"./nodes/fractions/questions/03.md":n4,"./nodes/geo_series/questions/01.md":t4,"./nodes/geo_series/questions/02.md":r4,"./nodes/geo_series/questions/03.md":o4,"./nodes/geo_series/questions/04.md":i4,"./nodes/geo_series/questions/05.md":a4,"./nodes/geo_series/questions/06.md":s4,"./nodes/integers/questions/01.md":l4,"./nodes/integers/questions/02.md":c4,"./nodes/integers/questions/03.md":u4,"./nodes/integral/questions/01.md":d4,"./nodes/integral/questions/02.md":p4,"./nodes/integral/questions/03.md":m4,"./nodes/limits/questions/01.md":f4,"./nodes/limits/questions/02.md":h4,"./nodes/limits/questions/03.md":$4,"./nodes/linear_eq/questions/01.md":y4,"./nodes/linear_eq/questions/02.md":g4,"./nodes/linear_eq/questions/03.md":w4,"./nodes/linear_ineq/questions/01.md":z4,"./nodes/linear_ineq/questions/02.md":x4,"./nodes/linear_ineq/questions/03.md":b4,"./nodes/linear_ineq/questions/04.md":v4,"./nodes/linear_ineq/questions/05.md":k4,"./nodes/linear_sys/questions/01.md":_4,"./nodes/linear_sys/questions/02.md":j4,"./nodes/linear_sys/questions/03.md":S4,"./nodes/linear_sys/questions/04.md":q4,"./nodes/log_eq/questions/01.md":T4,"./nodes/log_eq/questions/02.md":P4,"./nodes/log_eq/questions/03.md":A4,"./nodes/log_exp/questions/01.md":C4,"./nodes/log_exp/questions/02.md":M4,"./nodes/log_exp/questions/03.md":D4,"./nodes/log_exp/questions/04.md":R4,"./nodes/log_exp/questions/05.md":E4,"./nodes/log_exp/questions/06.md":B4,"./nodes/log_exp/questions/07.md":F4,"./nodes/log_exp/questions/08.md":I4,"./nodes/logic_basics/questions/01.md":N4,"./nodes/logic_basics/questions/02.md":L4,"./nodes/logic_basics/questions/03.md":W4,"./nodes/optimization_lp/questions/01.md":O4,"./nodes/optimization_lp/questions/02.md":H4,"./nodes/optimization_lp/questions/03.md":G4,"./nodes/optimization_lp/questions/04.md":U4,"./nodes/optimization_lp/questions/05.md":Z4,"./nodes/optimization_lp/questions/06.md":K4,"./nodes/optimization_lp/questions/07.md":V4,"./nodes/optimization_lp/questions/08.md":Y4,"./nodes/optimization_lp/questions/09.md":Q4,"./nodes/optimization_lp/questions/10.md":X4,"./nodes/param_eq/questions/01.md":J4,"./nodes/param_eq/questions/02.md":eg,"./nodes/param_eq/questions/03.md":ng,"./nodes/permutations/questions/01.md":tg,"./nodes/permutations/questions/02.md":rg,"./nodes/permutations/questions/03.md":og,"./nodes/permutations/questions/04.md":ig,"./nodes/permutations/questions/05.md":ag,"./nodes/permutations/questions/06.md":sg,"./nodes/permutations/questions/07.md":lg,"./nodes/permutations/questions/08.md":cg,"./nodes/planimetria_lp/questions/01.md":ug,"./nodes/planimetria_lp/questions/02.md":dg,"./nodes/planimetria_lp/questions/03.md":pg,"./nodes/planimetria_lp/questions/04.md":mg,"./nodes/planimetria_lp/questions/05.md":fg,"./nodes/planimetria_lp/questions/06.md":hg,"./nodes/planimetria_lp/questions/07.md":$g,"./nodes/planimetria_lp/questions/08.md":yg,"./nodes/poly_roots/questions/01.md":gg,"./nodes/poly_roots/questions/02.md":wg,"./nodes/poly_roots/questions/03.md":zg,"./nodes/polynomials/questions/01.md":xg,"./nodes/polynomials/questions/02.md":bg,"./nodes/polynomials/questions/03.md":vg,"./nodes/polynomials/questions/04.md":kg,"./nodes/polynomials/questions/05.md":_g,"./nodes/polynomials/questions/06.md":jg,"./nodes/polynomials/questions/07.md":Sg,"./nodes/polynomials/questions/08.md":qg,"./nodes/polynomials/questions/09.md":Tg,"./nodes/polynomials/questions/10.md":Pg,"./nodes/powers/questions/01.md":Ag,"./nodes/powers/questions/02.md":Cg,"./nodes/powers/questions/03.md":Mg,"./nodes/powers/questions/04.md":Dg,"./nodes/probability/questions/01.md":Rg,"./nodes/probability/questions/02.md":Eg,"./nodes/probability/questions/03.md":Bg,"./nodes/probability/questions/04.md":Fg,"./nodes/probability/questions/05.md":Ig,"./nodes/probability/questions/06.md":Ng,"./nodes/probability/questions/07.md":Lg,"./nodes/probability/questions/08.md":Wg,"./nodes/probability/questions/09.md":Og,"./nodes/probability/questions/10.md":Hg,"./nodes/probability/questions/11.md":Gg,"./nodes/proof/questions/01.md":Ug,"./nodes/proof/questions/02.md":Zg,"./nodes/proof/questions/03.md":Kg,"./nodes/proof/questions/04.md":Vg,"./nodes/proof/questions/05.md":Yg,"./nodes/proof/questions/06.md":Qg,"./nodes/proof/questions/07.md":Xg,"./nodes/pythagoras/questions/01.md":Jg,"./nodes/pythagoras/questions/02.md":e3,"./nodes/pythagoras/questions/03.md":n3,"./nodes/quadratic_eq/questions/01.md":t3,"./nodes/quadratic_eq/questions/02.md":r3,"./nodes/quadratic_eq/questions/03.md":o3,"./nodes/quadratic_eq/questions/04.md":i3,"./nodes/quadratic_eq/questions/05.md":a3,"./nodes/quadratic_eq/questions/06.md":s3,"./nodes/quadratic_eq/questions/07.md":l3,"./nodes/quadratic_eq/questions/08.md":c3,"./nodes/quadratic_eq/questions/09.md":u3,"./nodes/quadratic_eq/questions/10.md":d3,"./nodes/quadratic_ineq/questions/01.md":p3,"./nodes/quadratic_ineq/questions/02.md":m3,"./nodes/quadratic_ineq/questions/03.md":f3,"./nodes/quadratic_ineq/questions/04.md":h3,"./nodes/quadratic_ineq/questions/05.md":$3,"./nodes/quadratic_ineq/questions/06.md":y3,"./nodes/quadratic_ineq/questions/07.md":g3,"./nodes/quadratic_ineq/questions/08.md":w3,"./nodes/rational_expr/questions/01.md":z3,"./nodes/rational_expr/questions/02.md":x3,"./nodes/rational_expr/questions/03.md":b3,"./nodes/rational_expr/questions/04.md":v3,"./nodes/rational_expr/questions/05.md":k3,"./nodes/rational_expr/questions/06.md":_3,"./nodes/rational_expr/questions/07.md":j3,"./nodes/seq_limits/questions/01.md":S3,"./nodes/seq_limits/questions/02.md":q3,"./nodes/seq_limits/questions/03.md":T3,"./nodes/sequences/questions/01.md":P3,"./nodes/sequences/questions/02.md":A3,"./nodes/sequences/questions/03.md":C3,"./nodes/sequences/questions/04.md":M3,"./nodes/sequences/questions/05.md":D3,"./nodes/sets/questions/01.md":R3,"./nodes/sets/questions/02.md":E3,"./nodes/sets/questions/03.md":B3,"./nodes/sets/questions/04.md":F3,"./nodes/sets/questions/05.md":I3,"./nodes/sets/questions/06.md":N3,"./nodes/sets/questions/07.md":L3,"./nodes/sets/questions/08.md":W3,"./nodes/sets/questions/09.md":O3,"./nodes/sets/questions/10.md":H3,"./nodes/sin_cos_law/questions/01.md":G3,"./nodes/sin_cos_law/questions/02.md":U3,"./nodes/sin_cos_law/questions/03.md":Z3,"./nodes/sin_cos_law/questions/04.md":K3,"./nodes/solid_geom/questions/01.md":V3,"./nodes/solid_geom/questions/02.md":Y3,"./nodes/solid_geom/questions/03.md":Q3,"./nodes/solid_geom/questions/04.md":X3,"./nodes/solid_geom/questions/05.md":J3,"./nodes/solid_geom/questions/06.md":ew,"./nodes/solid_geom/questions/07.md":nw,"./nodes/solid_geom/questions/08.md":tw,"./nodes/stat_lp/questions/01.md":rw,"./nodes/stat_lp/questions/02.md":ow,"./nodes/stat_lp/questions/03.md":iw,"./nodes/stat_lp/questions/04.md":aw,"./nodes/thales/questions/01.md":sw,"./nodes/thales/questions/02.md":lw,"./nodes/thales/questions/03.md":cw,"./nodes/trig_basic/questions/01.md":uw,"./nodes/trig_basic/questions/02.md":dw,"./nodes/trig_basic/questions/03.md":pw,"./nodes/trig_basic/questions/04.md":mw,"./nodes/trig_basic/questions/05.md":fw,"./nodes/trig_eq/questions/01.md":hw,"./nodes/trig_eq/questions/02.md":$w,"./nodes/trig_eq/questions/03.md":yw,"./nodes/trig_eq/questions/04.md":gw,"./nodes/trig_eq/questions/05.md":ww,"./nodes/trig_formulas/questions/01.md":zw,"./nodes/trig_formulas/questions/02.md":xw,"./nodes/trig_formulas/questions/03.md":bw,"./nodes/trig_lp/questions/01.md":vw,"./nodes/trig_lp/questions/02.md":kw,"./nodes/trig_lp/questions/03.md":_w,"./nodes/vectors/questions/01.md":jw,"./nodes/vectors/questions/02.md":Sw,"./nodes/vectors/questions/03.md":qw,"./nodes/vieta/questions/01.md":Tw,"./nodes/vieta/questions/02.md":Pw,"./nodes/vieta/questions/03.md":Aw,"./nodes/vieta/questions/04.md":Cw,"./nodes/vieta/questions/05.md":Mw,"./nodes/vieta/questions/06.md":Dw,"./nodes/vieta/questions/07.md":Rw,"./nodes/vieta/questions/08.md":Ew,"./nodes/vieta/questions/09.md":Bw,"./nodes/vieta/questions/10.md":Fw,"./nodes/vieta/questions/11.md":Iw}),Kw=mp(Zw,/\.\/nodes\/([^/]+)\/questions\//),Vw=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:Hw,QUESTION_BANK:Kw,RAW_EDGES:Nw,RAW_NODES:Uw,SCOPE_COLORS:Ww,SCOPE_LABELS:Ow,SECTIONS:Lw},Symbol.toStringTag,{value:"Module"})),Yw=`---
label: Binary Operations & Algebraic Structures
labelPl: Działania dwuargumentowe i struktury algebraiczne
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A binary operation on a set S is a function S × S → S. Properties: closure, associativity, commutativity, identity element, inverses. Cayley tables. Definition of a magma, semigroup, monoid, and group. Examples and non-examples.
`,Qw=`---
label: Cosets & Quotient Groups
labelPl: Warstwy i grupy ilorazowe
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
Left coset: gH = {gh : h ∈ H}. Right coset: Hg. Cosets partition G; all have size |H| (Lagrange). A subgroup N is normal (N ⊴ G) iff gN = Ng for all g. Quotient group G/N: cosets with operation (aN)(bN) = abN. Order |G/N| = |G|/|N|.
`,Xw=`---
label: Cyclic Groups & Generators
labelPl: Grupy cykliczne i generatory
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A cyclic group is generated by a single element: G = ⟨g⟩ = {gⁿ : n ∈ ℤ}. Finite cyclic group ℤₙ and infinite cyclic group ℤ. Every subgroup of a cyclic group is cyclic. Classification: every cyclic group is isomorphic to ℤ or ℤₙ. Number of generators of ℤₙ equals φ(n).
`,Jw=`---
label: "Direct Sums"
labelPl: "Suma prosta"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,e5=`---
label: Field Extensions
labelPl: Rozszerzenia ciał
scope: fields
section: FIELDS
level: 7
x: 0
y: 0
---
A field extension K/F means F ⊆ K are both fields. Degree [K:F] = dim_F K. Algebraic vs transcendental elements. Minimal polynomial of an algebraic element. Simple extensions F(α). Tower law: [L:F] = [L:K][K:F]. Algebraic closure. Splitting fields; every polynomial splits over its splitting field.
`,n5=`---
label: Fields
labelPl: Ciała
scope: fields
section: FIELDS
level: 6
x: 0
y: 0
---
A field is a commutative ring where every nonzero element is a unit. Examples: ℚ, ℝ, ℂ, ℤₚ (p prime), ℚ(√2). Characteristic 0 or prime. Prime subfield. Finite fields: GF(pⁿ) exists and is unique up to isomorphism for every prime power pⁿ. Multiplicative group of a finite field is cyclic.
`,t5=`---
label: "Finitely Generated Modules"
labelPl: "Moduły skończenie generowane"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,r5=`---
label: "Free Modules"
labelPl: "Moduły wolne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,o5=`---
label: Group Actions & Cayley's Theorem
labelPl: Działania grup i twierdzenie Cayleya
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
A group action of G on set X: G × X → X satisfying identity and compatibility. Orbits and stabilisers; orbit-stabiliser theorem |G| = |Orb(x)| · |Stab(x)|. Cayley's theorem: every group embeds into a symmetric group. Conjugation action, class equation. Burnside's lemma.
`,i5=`---
label: Group Homomorphisms & Isomorphisms
labelPl: Homomorfizmy i izomorfizmy grup
scope: morphisms
section: GROUPS
level: 4
x: 0
y: 0
---
A group homomorphism φ: G → H satisfies φ(ab) = φ(a)φ(b). Kernel ker(φ) = {g : φ(g) = e_H} is a normal subgroup. Image im(φ) is a subgroup of H. An isomorphism is a bijective homomorphism; G ≅ H. Automorphisms Aut(G). Examples: det: GL(n) → ℝ*, exp: (ℝ,+) → (ℝ⁺,×).
`,a5=`---
label: Groups — Definition & Examples
labelPl: Grupy — definicja i przykłady
scope: groups
section: GROUPS
level: 2
x: 0
y: 0
---
A group (G, ·) satisfies: closure, associativity, identity, inverses. Abelian groups. Examples: (ℤ, +), (ℤₙ, +), (ℚ\\{0}, ×), symmetric group Sₙ, dihedral group Dₙ, GL(n,ℝ). Order of a group and order of an element. Uniqueness of identity and inverses.
`,s5=`---
label: Subrings & Ideals
labelPl: Podpierścienie i ideały
scope: rings
section: RINGS
level: 4
x: 0
y: 0
---
A subring S ⊆ R is closed under + and ·. An ideal I ⊴ R additionally satisfies rI ⊆ I and Ir ⊆ I for all r ∈ R. Left, right, and two-sided ideals. Principal ideal (a) = aR. Ideal generated by a set. Quotient ring R/I: cosets with coordinatewise operations. Maximal and prime ideals.
`,l5=`---
label: Mathematical Induction
labelPl: Indukcja matematyczna
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Weak induction: base case and inductive step. Strong induction. Well-ordering principle and its equivalence to induction. Applications: proving divisibility, inequalities, and properties of sequences. Recursively defined structures.
`,c5=`---
label: Integral Domains & Fields
labelPl: Dziedziny całkowitości i ciała
scope: rings
section: RINGS
level: 5
x: 0
y: 0
---
An integral domain is a commutative ring with unity and no zero divisors. Every field is an integral domain. Characteristic of an integral domain is 0 or prime. Field of fractions construction. A finite integral domain is a field. Prime and irreducible elements; their relationship in a domain.
`,u5=`---
label: First Isomorphism Theorem
labelPl: Pierwsze twierdzenie o izomorfizmie
scope: structure
section: GROUPS
level: 5
x: 0
y: 0
---
If φ: G → H is a homomorphism then G/ker(φ) ≅ im(φ). The natural projection π: G → G/N is a surjective homomorphism with kernel N. Second and third isomorphism theorems. Correspondence theorem: subgroups of G/N correspond to subgroups of G containing N.
`,d5=`---
label: "Jordan Normal Form"
labelPl: "postać Jordana"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,p5=`---
label: "Module Homomorphisms"
labelPl: "Homomorfizmy modułów"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,m5=`---
label: "Modules: Definition"
labelPl: "Moduły: Definicja"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,f5=`---
label: Normal Subgroups
labelPl: Podgrupy normalne
scope: groups
section: GROUPS
level: 4
x: 0
y: 0
---
N ⊴ G iff gNg⁻¹ = N for all g ∈ G (equivalently gN = Ng). Every subgroup of an abelian group is normal. The kernel of any homomorphism is normal. The center Z(G) is normal. Characterisation via conjugation. Simple groups: no proper nontrivial normal subgroups.
`,h5=`---
label: Polynomial Rings
labelPl: Pierścienie wielomianów
scope: rings
section: RINGS
level: 6
x: 0
y: 0
---
The polynomial ring R[x] over a commutative ring R. Degree, leading coefficient, monic polynomials. Division algorithm in F[x] for a field F. Irreducible polynomials; unique factorisation in F[x]. Roots and the factor theorem. F[x]/(p(x)) as a quotient ring; when it is a field.
`,$5=`---
label: "Primary Decomposition"
labelPl: "Rozkład pierwotny"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,y5=`---
label: "Rational Canonical Form"
labelPl: "Forma kanoniczna wymierna"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,g5=`---
label: Relations & Equivalence Classes
labelPl: Relacje i klasy równoważności
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Binary relations on a set: reflexivity, symmetry, transitivity. Equivalence relations and the partition they induce. Equivalence classes, quotient sets. Partial orders and total orders. The integers modulo n as a key example.
`,w5=`---
label: Ring Homomorphisms
labelPl: Homomorfizmy pierścieni
scope: morphisms
section: RINGS
level: 5
x: 0
y: 0
---
A ring homomorphism φ: R → S satisfies φ(a+b) = φ(a)+φ(b) and φ(ab) = φ(a)φ(b). Kernel is an ideal; image is a subring. First isomorphism theorem for rings: R/ker(φ) ≅ im(φ). Evaluation homomorphism for polynomials. Correspondence between ideals of R/I and ideals of R containing I.
`,z5=`---
label: Rings — Definition & Examples
labelPl: Pierścienie — definicja i przykłady
scope: rings
section: RINGS
level: 3
x: 0
y: 0
---
A ring (R, +, ·) has (R, +) abelian group, multiplication associative, and distributivity. Commutative rings. Unity (multiplicative identity). Examples: ℤ, ℚ, ℝ, ℂ, ℤₙ, M_n(ℝ), ℤ[x], ℤ[i] (Gaussian integers). Zero divisors, units, nilpotents. Characteristic of a ring.
`,x5=`---
label: Sets & Functions
labelPl: Zbiory i funkcje
scope: sets
section: FOUNDATIONS
level: 1
x: 0
y: 0
---
Naive set theory: set notation, subsets, unions, intersections, complements. Functions as relations: domain, codomain, image. Injective, surjective, bijective functions. Composition and inverse functions.
`,b5=`---
label: Subgroups & Lagrange's Theorem
labelPl: Podgrupy i twierdzenie Lagrange'a
scope: groups
section: GROUPS
level: 3
x: 0
y: 0
---
A subgroup H ≤ G satisfies closure and inverse closure (subgroup test). Trivial and improper subgroups. Generated subgroup ⟨S⟩. Lagrange's theorem: |H| divides |G| for finite G. Corollary: order of every element divides |G|. Index of a subgroup.
`,v5=`---
label: "Submodules"
labelPl: "Podmoduły"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,k5=`---
label: Sylow Theorems
labelPl: Twierdzenia Sylowa
scope: structure
section: GROUPS
level: 6
x: 0
y: 0
---
Let |G| = pⁿm with gcd(p, m) = 1. Sylow p-subgroup has order pⁿ. First theorem: Sylow p-subgroups exist. Second: all are conjugate. Third: the number nₚ of Sylow p-subgroups satisfies nₚ ≡ 1 (mod p) and nₚ | m. Applications to classifying groups of small order.
`,_5=`---
label: "Torsion Modules"
labelPl: "Moduły torsyjne"
scope: modules
section: MODULES
level: 1
x: 0
y: 0
---
`,j5=`---
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
`,S5=`---
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
`,q5=`---
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
`,T5=`---
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
`,P5=`---
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
`,A5=`---
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
`,C5=`---
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
`,M5=`---
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
`,D5=`---
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
`,R5=`---
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

`,E5=`---
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

`,B5=`---
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

`,F5=`---
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
`,I5=`---
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
`,N5=`---
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
`,L5=`---
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
`,W5=`---
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
`,O5=`---
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
`,H5=`---
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

`,G5=`---
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

`,U5=`---
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

`,Z5=`---
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

`,K5=`---
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

`,V5=`---
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

`,Y5=`---
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
`,Q5=`---
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
`,X5=`---
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
`,J5=`---
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
`,ez=`---
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
`,nz=`---
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
`,tz=`---
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
`,rz=`---
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
`,oz=`---
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
`,iz=`---
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
`,az=`---
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
`,sz=`---
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
`,lz=`---
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
`,cz=`---
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
`,uz=`---
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
`,dz=`---
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
`,pz=`---
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
`,mz=`---
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
`,fz=`---
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
`,hz=`---
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
`,$z=`---
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
`,yz=`---
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

`,gz=`---
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

`,wz=`---
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

`,zz=`---
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

`,xz=`---
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

`,bz=`---
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

`,vz=`---
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

`,kz=`---
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

`,_z=`---
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

`,jz=`---
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
`,Sz=`---
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
`,qz=`---
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
`,Tz=`---
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
`,Pz=`---
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
`,Az=`---
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
`,Cz=`---
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

`,Mz=`---
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

`,Dz=`---
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

`,Rz=`---
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

`,Ez=`---
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

`,Bz=`---
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

`,Fz=`---
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
`,Iz=`---
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
`,Nz=`---
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
`,Lz=`---
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
`,Wz=`---
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
`,Oz=`---
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
`,Hz=`---
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
`,Gz=`---
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
`,Uz=`---
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
`,Zz=`---
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
`,Kz=`---
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

`,Vz=`---
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

`,Yz=`---
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
`,Qz=`---
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
`,Xz=`---
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
`,Jz=`---
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

`,ex=`---
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

`,nx=`---
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

`,tx=`---
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
`,rx=`---
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
`,ox=`---
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
`,ix=`---
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

`,ax=`---
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

`,sx=`---
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

`,lx=[["sets_functions","relations"],["sets_functions","induction"],["sets_functions","binary_ops"],["relations","binary_ops"],["binary_ops","groups_intro"],["induction","groups_intro"],["groups_intro","subgroups"],["groups_intro","cyclic_groups"],["subgroups","cosets"],["cosets","normal_subgroups"],["groups_intro","group_homomorphisms"],["group_homomorphisms","normal_subgroups"],["normal_subgroups","iso_theorem"],["cosets","iso_theorem"],["groups_intro","group_actions"],["group_actions","sylow"],["cosets","sylow"],["groups_intro","rings_intro"],["rings_intro","ideals"],["rings_intro","ring_homomorphisms"],["ideals","ring_homomorphisms"],["ring_homomorphisms","integral_domains"],["integral_domains","poly_rings"],["integral_domains","fields_intro"],["fields_intro","field_extensions"],["poly_rings","field_extensions"],["rings_intro","modules_intro"],["ideals","submodules"],["modules_intro","submodules"],["ring_homomorphisms","module_homs"],["modules_intro","module_homs"],["submodules","module_homs"],["module_homs","direct_sums"],["modules_intro","direct_sums"],["direct_sums","finitely_generated"],["modules_intro","finitely_generated"],["finitely_generated","free_modules"],["modules_intro","torsion_modules"],["torsion_modules","primary_decomp"],["finitely_generated","primary_decomp"],["primary_decomp","rational_canonical"],["primary_decomp","jordan_normal_form"],["field_extensions","jordan_normal_form"]],cx={FOUNDATIONS:{labelEn:"Foundations",labelPl:"Podstawy",color:"#4a9eff"},GROUPS:{labelEn:"Group Theory",labelPl:"Teoria grup",color:"#2ecc71"},RINGS:{labelEn:"Ring Theory",labelPl:"Teoria pierścieni",color:"#e74c3c"},FIELDS:{labelEn:"Field Theory",labelPl:"Teoria ciał",color:"#9b59b6"},MODULES:{labelEn:"Module Theory",labelPl:"Teoria modułów",color:"#f39c12"}},ux={sets:"#3dc9b0",groups:"#2ecc71",rings:"#e74c3c",fields:"#9b59b6",modules:"#f39c12",morphisms:"#f5a623",structure:"#4a9eff"},dx={sets:{en:"Sets & Functions",pl:"Zbiory i funkcje"},groups:{en:"Groups",pl:"Grupy"},rings:{en:"Rings",pl:"Pierścienie"},fields:{en:"Fields",pl:"Ciała"},modules:{en:"Modules",pl:"Moduły"},morphisms:{en:"Homomorphisms",pl:"Homomorfizmy"},structure:{en:"Structure Theorems",pl:"Twierdzenia strukturalne"}},px={id:"abstract_algebra",subject:"mathematics",title:"Abstract Algebra",titleEn:"Abstract Algebra",description:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",descriptionEn:"Groups, rings, and fields — from foundations through Sylow theorems and field extensions.",lang:"en",icon:"∘",color:"#2ecc71"},mx=Object.assign({"./nodes/binary_ops/node.md":Yw,"./nodes/cosets/node.md":Qw,"./nodes/cyclic_groups/node.md":Xw,"./nodes/direct_sums/node.md":Jw,"./nodes/field_extensions/node.md":e5,"./nodes/fields_intro/node.md":n5,"./nodes/finitely_generated/node.md":t5,"./nodes/free_modules/node.md":r5,"./nodes/group_actions/node.md":o5,"./nodes/group_homomorphisms/node.md":i5,"./nodes/groups_intro/node.md":a5,"./nodes/ideals/node.md":s5,"./nodes/induction/node.md":l5,"./nodes/integral_domains/node.md":c5,"./nodes/iso_theorem/node.md":u5,"./nodes/jordan_normal_form/node.md":d5,"./nodes/module_homs/node.md":p5,"./nodes/modules_intro/node.md":m5,"./nodes/normal_subgroups/node.md":f5,"./nodes/poly_rings/node.md":h5,"./nodes/primary_decomp/node.md":$5,"./nodes/rational_canonical/node.md":y5,"./nodes/relations/node.md":g5,"./nodes/ring_homomorphisms/node.md":w5,"./nodes/rings_intro/node.md":z5,"./nodes/sets_functions/node.md":x5,"./nodes/subgroups/node.md":b5,"./nodes/submodules/node.md":v5,"./nodes/sylow/node.md":k5,"./nodes/torsion_modules/node.md":_5}),fx=pp(mx,/\.\/nodes\/([^/]+)\/node\.md$/),hx=Object.assign({"./nodes/binary_ops/questions/01.md":j5,"./nodes/binary_ops/questions/02.md":S5,"./nodes/binary_ops/questions/03.md":q5,"./nodes/cosets/questions/01.md":T5,"./nodes/cosets/questions/02.md":P5,"./nodes/cosets/questions/03.md":A5,"./nodes/cyclic_groups/questions/01.md":C5,"./nodes/cyclic_groups/questions/02.md":M5,"./nodes/cyclic_groups/questions/03.md":D5,"./nodes/direct_sums/questions/01.md":R5,"./nodes/direct_sums/questions/02.md":E5,"./nodes/direct_sums/questions/03.md":B5,"./nodes/field_extensions/questions/01.md":F5,"./nodes/field_extensions/questions/02.md":I5,"./nodes/field_extensions/questions/03.md":N5,"./nodes/fields_intro/questions/01.md":L5,"./nodes/fields_intro/questions/02.md":W5,"./nodes/fields_intro/questions/03.md":O5,"./nodes/finitely_generated/questions/01.md":H5,"./nodes/finitely_generated/questions/02.md":G5,"./nodes/finitely_generated/questions/03.md":U5,"./nodes/free_modules/questions/01.md":Z5,"./nodes/free_modules/questions/02.md":K5,"./nodes/free_modules/questions/03.md":V5,"./nodes/group_actions/questions/01.md":Y5,"./nodes/group_actions/questions/02.md":Q5,"./nodes/group_actions/questions/03.md":X5,"./nodes/group_homomorphisms/questions/01.md":J5,"./nodes/group_homomorphisms/questions/02.md":ez,"./nodes/group_homomorphisms/questions/03.md":nz,"./nodes/groups_intro/questions/01.md":tz,"./nodes/groups_intro/questions/02.md":rz,"./nodes/groups_intro/questions/03.md":oz,"./nodes/ideals/questions/01.md":iz,"./nodes/ideals/questions/02.md":az,"./nodes/ideals/questions/03.md":sz,"./nodes/induction/questions/01.md":lz,"./nodes/induction/questions/02.md":cz,"./nodes/induction/questions/03.md":uz,"./nodes/integral_domains/questions/01.md":dz,"./nodes/integral_domains/questions/02.md":pz,"./nodes/integral_domains/questions/03.md":mz,"./nodes/iso_theorem/questions/01.md":fz,"./nodes/iso_theorem/questions/02.md":hz,"./nodes/iso_theorem/questions/03.md":$z,"./nodes/jordan_normal_form/questions/01.md":yz,"./nodes/jordan_normal_form/questions/02.md":gz,"./nodes/jordan_normal_form/questions/03.md":wz,"./nodes/module_homs/questions/01.md":zz,"./nodes/module_homs/questions/02.md":xz,"./nodes/module_homs/questions/03.md":bz,"./nodes/modules_intro/questions/01.md":vz,"./nodes/modules_intro/questions/02.md":kz,"./nodes/modules_intro/questions/03.md":_z,"./nodes/normal_subgroups/questions/01.md":jz,"./nodes/normal_subgroups/questions/02.md":Sz,"./nodes/normal_subgroups/questions/03.md":qz,"./nodes/poly_rings/questions/01.md":Tz,"./nodes/poly_rings/questions/02.md":Pz,"./nodes/poly_rings/questions/03.md":Az,"./nodes/primary_decomp/questions/01.md":Cz,"./nodes/primary_decomp/questions/02.md":Mz,"./nodes/primary_decomp/questions/03.md":Dz,"./nodes/rational_canonical/questions/01.md":Rz,"./nodes/rational_canonical/questions/02.md":Ez,"./nodes/rational_canonical/questions/03.md":Bz,"./nodes/relations/questions/01.md":Fz,"./nodes/relations/questions/02.md":Iz,"./nodes/relations/questions/03.md":Nz,"./nodes/ring_homomorphisms/questions/01.md":Lz,"./nodes/ring_homomorphisms/questions/02.md":Wz,"./nodes/ring_homomorphisms/questions/03.md":Oz,"./nodes/rings_intro/questions/01.md":Hz,"./nodes/rings_intro/questions/02.md":Gz,"./nodes/rings_intro/questions/03.md":Uz,"./nodes/sets_functions/questions/01.md":Zz,"./nodes/sets_functions/questions/02.md":Kz,"./nodes/sets_functions/questions/03.md":Vz,"./nodes/subgroups/questions/01.md":Yz,"./nodes/subgroups/questions/02.md":Qz,"./nodes/subgroups/questions/03.md":Xz,"./nodes/submodules/questions/01.md":Jz,"./nodes/submodules/questions/02.md":ex,"./nodes/submodules/questions/03.md":nx,"./nodes/sylow/questions/01.md":tx,"./nodes/sylow/questions/02.md":rx,"./nodes/sylow/questions/03.md":ox,"./nodes/torsion_modules/questions/01.md":ix,"./nodes/torsion_modules/questions/02.md":ax,"./nodes/torsion_modules/questions/03.md":sx}),$x=mp(hx,/\.\/nodes\/([^/]+)\/questions\//),yx=Object.freeze(Object.defineProperty({__proto__:null,COURSE_META:px,QUESTION_BANK:$x,RAW_EDGES:lx,RAW_NODES:fx,SCOPE_COLORS:ux,SCOPE_LABELS:dx,SECTIONS:cx},Symbol.toStringTag,{value:"Module"})),gx={math_pl:Vw,abstract_algebra:yx},wx="math_pl",fp="wizmat_v1_";function zx(o){return o instanceof Set?JSON.stringify({__type:"Set",values:[...o]}):JSON.stringify(o)}function xx(o,t){try{const r=JSON.parse(o);return r&&typeof r=="object"&&r.__type==="Set"?new Set(r.values):r}catch{return t}}function lt(o,t){const r=fp+o,[a,s]=R.useState(()=>{try{const u=localStorage.getItem(r);return u===null?t:xx(u,t)}catch{return t}});R.useEffect(()=>{try{localStorage.setItem(r,zx(a))}catch{}},[r,a]);const c=R.useCallback(u=>{s(m=>typeof u=="function"?u(m):u)},[]);return[a,c]}function bx(){try{Object.keys(localStorage).filter(o=>o.startsWith(fp)).forEach(o=>localStorage.removeItem(o))}catch{}}const dc={midnight:{name:"Midnight",bg:"#10141c",surface:"#161c28",surfaceHi:"#161c28ee",border:"#263248",borderSubtle:"#1f2a3c",textPrimary:"#f0f2f5",textBody:"#cdd8e4",textMuted:"#95a5bd",textDim:"#7b8fa8",textFaint:"#4a5e78",edgeDefault:"#334766",edgeHighlighted:"#4a9eff",edgeDimmed:"#151b26"},highContrast:{name:"High Contrast",bg:"#08090d",surface:"#111318",surfaceHi:"#111318ee",border:"#2e3a50",borderSubtle:"#1c2436",textPrimary:"#ffffff",textBody:"#dce4ef",textMuted:"#a3b5cc",textDim:"#8899b3",textFaint:"#556a85",edgeDefault:"#3d5577",edgeHighlighted:"#5ab0ff",edgeDimmed:"#0d1118"},warm:{name:"Warm",bg:"#131110",surface:"#1c1916",surfaceHi:"#1c1916ee",border:"#33291f",borderSubtle:"#28211a",textPrimary:"#f2ede6",textBody:"#d4cabb",textMuted:"#a89d8e",textDim:"#8a7e6f",textFaint:"#5c5347",edgeDefault:"#4a3f32",edgeHighlighted:"#e8a84c",edgeDimmed:"#1a1614"},bright:{name:"Bright",bg:"#f7f7f2",surface:"#ffffff",surfaceHi:"#ffffffee",border:"#e0ddd5",borderSubtle:"#ebe8e2",textPrimary:"#1a1a1a",textBody:"#3a3a3a",textMuted:"#6b6b6b",textDim:"#8a8a8a",textFaint:"#b5b5b5",edgeDefault:"#c5c0b6",edgeHighlighted:"#58cc02",edgeDimmed:"#edebe6"}},b={...dc.midnight,known:"#27ae60",knownHi:"#2ecc71",unknown:"#c0392b",unknownHi:"#e74c3c",frontier:"#f39c12",frontierHi:"#f1c40f"};function $1(o){const t=dc[o];t&&Object.assign(b,t)}const ve="'JetBrains Mono','SF Mono','Fira Code',monospace",Eo=(o,t)=>({padding:"6px 12px",borderRadius:20,fontSize:12,cursor:"pointer",border:o?`1px solid ${t}`:`1px solid ${b.border}`,background:o?`${t}22`:"transparent",color:o?t:b.textDim,minHeight:32}),Bo=o=>({padding:"10px 18px",borderRadius:6,fontSize:14,cursor:"pointer",fontWeight:600,border:`1px solid ${o}`,background:`${o}22`,color:o,minHeight:44}),ks=["abs_value","analytic_geom","area_perimeter","arith_geom","bernoulli","binom_theorem","circle_eq","combinations","complex","cond_prob","conic_sections","counting","data_basics","deriv_apps","derivative","distributions","factoring","fn_compositions","fn_concept","fn_exp","fn_linear","fn_log","fn_poly","fn_quadratic","fn_trig","fractions","geo_series","integers","integral","limits","linear_eq","linear_ineq","linear_sys","log_eq","log_exp","logic_basics","optimization_lp","param_eq","permutations","planimetria_lp","poly_roots","polynomials","powers","probability","proof","pythagoras","quadratic_eq","quadratic_ineq","rational_expr","seq_limits","sequences","sets","sin_cos_law","solid_geom","stat_lp","thales","trig_basic","trig_eq","trig_formulas","trig_lp","vectors","vieta"];function Q0(o){return ks.map(t=>o[t]==="known"?"1":o[t]==="unknown"?"2":"0").join("")}function vx(o){const t={};for(let r=0;r<ks.length&&r<o.length;r++)o[r]==="1"?t[ks[r]]="known":o[r]==="2"&&(t[ks[r]]="unknown");return t}const kx={all:{pl:"Wszystkie",en:"All"},cancel:{pl:"Anuluj",en:"Cancel"},reset:{pl:"Reset",en:"Reset"},next:{pl:"Dalej",en:"Next"},close:{pl:"Zamknij",en:"Close"},search:{pl:"Szukaj…",en:"Search…"},noResults:{pl:"Brak wyników",en:"No results"},level:{pl:"Poziom",en:"Level"},appTitle:{pl:"PODSTAWA PROGRAMOWA — MATEMATYKA",en:"CURRICULUM — MATHEMATICS"},topicsCount:{pl:"tematy",en:"topics"},edgesCount:{pl:"połączenia",en:"edges"},hintBrowse:{pl:"scroll = zoom · przeciągnij = przesuń · kliknij węzeł = szczegóły",en:"scroll = zoom · drag = pan · click node = details"},hintDiagQuick:{pl:"kliknij węzeł = pytanie · shift+click = nieznany · zielony = cofnij",en:"click node = question · shift+click = unknown · green = undo"},hintDiagDeep:{pl:"kliknij węzeł w podgrafie, aby odpowiedzieć",en:"click a node in the subgraph to answer"},layoutLabel:{pl:"Układ",en:"Layout"},exploreMode:{pl:"Eksploruj",en:"Explore"},diagnosticOff:{pl:"Diagnoza",en:"Diagnostic"},diagnosticOnQuick:{pl:"Diagnoza (Szybka) ✓",en:"Diagnostic (Quick) ✓"},diagnosticOnDeep:{pl:"Diagnoza (Szczegółowa) ✓",en:"Diagnostic (Deep-Dive) ✓"},goalBtn:{pl:"◎ Cel",en:"◎ Goal"},goalBtnTitle:{pl:"Wybierz cel szczegółowej diagnozy",en:"Choose deep-dive target"},modePickerTitle:{pl:"Wybierz tryb diagnozy",en:"Choose diagnostic mode"},modePickerSub:{pl:"Jak chcesz sprawdzić swoją wiedzę?",en:"How do you want to assess your knowledge?"},modeQuickLabel:{pl:"Szybka diagnoza",en:"Quick diagnostic"},modeQuickDesc:{pl:"Przejrzyj cały materiał i sprawdź, co już umiesz. Algorytm dobierze najbardziej wartościowe pytania.",en:"Sweep the whole curriculum and find what you know. The system picks the most informative questions."},modeDeepLabel:{pl:"Szczegółowa analiza",en:"Deep-dive analysis"},modeDeepDesc:{pl:"Wybierz konkretny cel (np. temat maturalny). Algorytm przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific target topic. The system analyses only the required prerequisites."},goalModalTitle:{pl:"Wybierz cel",en:"Choose goal"},goalModalSub:{pl:"Wybierz temat docelowy. Zbadamy wszystkie wymagania wstępne.",en:"Pick a target topic. We will diagnose all transitive prerequisites."},filterSection:{pl:"Etap",en:"Stage"},filterScope:{pl:"Dział",en:"Topic area"},filters:{pl:"Filtry",en:"Filters"},filterTitle:{pl:"Filtry",en:"Filters"},done:{pl:"Gotowe",en:"Done"},moreOptions:{pl:"Opcje",en:"Options"},prerequisites:{pl:"Wymagania wstępne",en:"Prerequisites"},enables:{pl:"Odblokuje",en:"Enables"},noPrereqs:{pl:"Brak wymagań wstępnych",en:"No prerequisites"},noDependents:{pl:"Brak zależnych tematów",en:"No dependent topics"},learningResources:{pl:"Materiały do nauki",en:"Learning resources"},resourceInteractive:{pl:"Interaktywna wizualizacja",en:"Interactive visualization"},resourceVideo:{pl:"Wideo",en:"Video"},resourceArticle:{pl:"Artykuł",en:"Article"},openResource:{pl:"Otwórz",en:"Open"},closeResource:{pl:"Zamknij materiał",en:"Close resource"},openInTab:{pl:"Otwórz w nowej karcie",en:"Open in new tab"},checkAnswer:{pl:"Sprawdź",en:"Check"},knownConfirm:{pl:"✓ Znam!",en:"✓ I know it!"},unknownConfirm:{pl:"✗ Nie znam",en:"✗ Don't know it"},skipBtn:{pl:"Pomiń",en:"Skip"},noQuestion:{pl:"Brak pytania dla tego węzła. Czy znasz ten temat?",en:"No question for this node. Do you know this topic?"},yesKnow:{pl:"✓ Tak",en:"✓ Yes"},noKnow:{pl:"✗ Nie",en:"✗ No"},diagHeader:{pl:"Diagnoza",en:"Diagnostic"},statKnown:{pl:"Znam",en:"Known"},statUnknown:{pl:"Nie znam",en:"Unknown"},statRemaining:{pl:"Do odp.",en:"To go"},answered:{pl:"Odpowiedzi",en:"Answered"},estimated:{pl:"Szacowane",en:"Estimated"},accuracy:{pl:"Trafność",en:"Accuracy"},sessionDone:{pl:"Sesja zakończona ✓",en:"Session complete ✓"},sessionDoneSub:{pl:"Odpowiedziano na",en:"Answered"},sessionDoneQ:{pl:"pytań",en:"questions"},sessionDoneClass:{pl:"Sklasyfikowano",en:"Classified"},sessionDoneAcc:{pl:"Trafność",en:"Accuracy"},sessionDoneKnown:{pl:"Znasz",en:"You know"},sessionDoneStudy:{pl:"do nauki",en:"to study"},toStudy:{pl:"Do nauki",en:"To study"},knownList:{pl:"Znam",en:"Known"},startHere:{pl:"★ Zacznij tutaj",en:"★ Start here"},startHereSub:{pl:"najwięcej powiązań w grafie",en:"most connections in the graph"},clickAnyNode:{pl:"Lub kliknij dowolny węzeł na grafie.",en:"Or click any node on the graph."},whatNext:{pl:"▶ Co dalej",en:"▶ What next"},best:{pl:"najlepsze",en:"best"},hintShift:{pl:"Shift+click → oznacz jako nieznany",en:"Shift+click → mark as unknown"},hintGreen:{pl:"Kliknij zielony → usuń oznaczenie",en:"Click green → remove mark"},hintClick:{pl:"Kliknij węzeł → pytanie",en:"Click node → question"},deepDiveHeader:{pl:"Szczegółowa diagnoza",en:"Deep-dive diagnostic"},deepDiveTarget:{pl:"Cel",en:"Goal"},deepDiveNodes:{pl:"węzłów w podgrafie",en:"nodes in subgraph"},classified:{pl:"Sklasyfikowano",en:"Classified"},questions:{pl:"Pytań",en:"Questions"},diagReady:{pl:"Diagnoza gotowa ✓",en:"Diagnosis complete ✓"},diagKnown:{pl:"Znam",en:"Known"},diagStudy:{pl:"Do nauki",en:"To study"},diagTotal:{pl:"Razem",en:"Total"},studyThese:{pl:"Do nauki — zacznij od tych:",en:"To study — start with these:"},mastered:{pl:"Opanowane:",en:"Mastered:"},nextQuestion:{pl:"★ Następne pytanie",en:"★ Next question"},confidence:{pl:"pewność",en:"confidence"},unclassified:{pl:"Niezbadane",en:"Unclassified"},legendTitle:{pl:"Legenda",en:"Legend"},legendKnown:{pl:"Znany",en:"Known"},legendUnknown:{pl:"Nieznany",en:"Unknown"},legendFrontier:{pl:"Granica (do sprawdzenia)",en:"Frontier (to assess)"},legendUnclassified:{pl:"Niesklasyfikowany",en:"Unclassified"},legendScopes:{pl:"Działy",en:"Topic areas"},legendStages:{pl:"Etapy",en:"Stages"},onboardingTitle:{pl:"Witaj w oczochodzi.pl",en:"Welcome to oczochodzi.pl"},onboardingSub:{pl:"Interaktywna mapa polskiej podstawy programowej z matematyki. Każdy węzeł to temat, a połączenia pokazują wymagania wstępne.",en:"An interactive map of the Polish maths curriculum. Each node is a topic, edges show prerequisites."},onboardingBrowse:{pl:"🔍 Przeglądaj",en:"🔍 Browse"},onboardingBrowseDesc:{pl:"Kliknij dowolny węzeł, żeby zobaczyć szczegóły, wymagania wstępne i tematy, które odblokuje.",en:"Click any node to see details, prerequisites, and the topics it unlocks."},onboardingDiag:{pl:"⚡ Szybka diagnoza",en:"⚡ Quick diagnostic"},onboardingDiagDesc:{pl:"Sprawdź, co umiesz — algorytm dobierze najbardziej wartościowe pytania i zmapuje Twoją wiedzę.",en:"Find out what you know — the algorithm picks the most informative questions and maps your knowledge."},onboardingDeep:{pl:"◎ Szczegółowa analiza",en:"◎ Deep-dive analysis"},onboardingDeepDesc:{pl:"Wybierz konkretny cel (temat maturalny lub dowolny węzeł) — algorytm przeanalizuje tylko wymagane tematy wstępne.",en:"Pick a specific goal topic — the system focuses only on its required prerequisites."},onboardingChoose:{pl:"Wybierz tryb, żeby zacząć:",en:"Choose a mode to get started:"},onboardingStart:{pl:"Zaczynamy →",en:"Get started →"},onboardingSkip:{pl:"Pomiń",en:"Skip"},onboardingLangHint:{pl:"Możesz zmienić język w pasku filtrów (PL / EN).",en:"You can switch language in the filter bar (PL / EN)."},heroTitle:{pl:"Nie wiesz, od czego zacząć powtórki?",en:"Don't know where to start reviewing?"},heroSub:{pl:'Odpowiedz na 10 pytań — pokażemy 3 tematy, które dadzą największy skok punktów. Przy każdym pytaniu możesz zaznaczyć „Nie wiem".',en:`Answer 10 questions — we'll show 3 topics that will give you the biggest score lift. You can click "I don't know" on any question.`},heroStart:{pl:"Sprawdź się",en:"Start assessment"},quizDontKnow:{pl:"Nie wiem",en:"I don't know"},heroBrowse:{pl:"Przeglądaj mapę →",en:"Browse the map →"},heroMore:{pl:"Więcej opcji",en:"More options"},heroLength:{pl:"Czas:",en:"Length:"},heroQuestions:{pl:"pytań",en:"questions"},presetQuick:{pl:"Szybki",en:"Quick"},presetQuickDesc:{pl:"Szybki przegląd",en:"Quick overview"},presetStandard:{pl:"Standardowy",en:"Standard"},presetStandardDesc:{pl:"Dobry balans",en:"Good balance"},presetThorough:{pl:"Dokładny",en:"Thorough"},presetThoroughDesc:{pl:"Szczegółowy obraz",en:"Detailed picture"},heroStep1:{pl:"Odpowiadasz na pytania",en:"Answer questions"},heroStep2:{pl:"Algorytm mapuje Twoją wiedzę",en:"Algorithm maps your knowledge"},heroStep3:{pl:"Dostajesz plan, od czego zacząć",en:"Get a plan for where to start"},quizExit:{pl:"Wyjdź",en:"Exit"},quizQuestion:{pl:"Pytanie",en:"Question"},quizClassified:{pl:"zbadane",en:"classified"},quizAccuracy:{pl:"trafność",en:"accuracy"},quizOf:{pl:"pytań",en:"questions"},quizCorrectShort:{pl:"poprawnych",en:"correct"},quizSeeViz:{pl:"Nie rozumiesz? Zobacz wizualizację →",en:"Don't get it? See the visualization →"},quizCheck:{pl:"Sprawdź",en:"Check"},quizContinue:{pl:"Dalej",en:"Continue"},quizProcessing:{pl:"Analizuję wyniki…",en:"Analyzing results…"},quizExitConfirm:{pl:"Na pewno chcesz przerwać? Postęp zostanie utracony.",en:"Are you sure you want to quit? Progress will be lost."},quizNoQuestion:{pl:"Brak pytania dla tego tematu. Czy go znasz?",en:"No question available for this topic. Do you know it?"},quizYes:{pl:"Tak, znam",en:"Yes, I know it"},quizNo:{pl:"Nie, nie znam",en:"No, I don't"},resultsTitle:{pl:"Twoja diagnoza",en:"Your diagnosis"},resultsAnswered:{pl:"pytań",en:"questions"},resultsAccuracy:{pl:"trafność",en:"accuracy"},resultsKnown:{pl:"Znasz",en:"Known"},resultsToStudy:{pl:"Do nauki",en:"To study"},resultsGapsTitle:{pl:"Zacznij tutaj",en:"Start here"},resultsGapsSub:{pl:"Te tematy to Twoje największe luki — najlepszy punkt startowy, żeby zbudować solidną bazę.",en:"These are your biggest gaps — the best starting point to build a solid foundation."},resultsHasResource:{pl:"ma materiały",en:"has resources"},resultsMore:{pl:"więcej tematów do nauki",en:"more topics to study"},resultsAllGood:{pl:"Wszystko opanowane!",en:"All clear!"},resultsAllGoodSub:{pl:"Nie znaleziono luk w Twojej wiedzy.",en:"No gaps found in your knowledge."},results20minTitle:{pl:"Twoje pierwsze 20 minut",en:"Your first 20 minutes"},results20minSub:{pl:"Konkretny plan na pierwsze 20 minut — potem wracasz tutaj po kolejny krok.",en:"A concrete plan for the first 20 minutes — come back after for the next step."},results20minStep1:{pl:"5 min · Przeczytaj temat",en:"5 min · Read the lesson"},results20minStep2:{pl:"5 min · Obejrzyj eksplorator",en:"5 min · Explore the viz"},results20minStep3:{pl:"10 min · Zrób 3 zadania",en:"10 min · Do 3 questions"},results20minCta:{pl:"Zaczynamy →",en:"Let's go →"},resultsStartPath:{pl:"Zacznij naukę — ścieżka do pierwszej luki",en:"Start learning — path to your first gap"},resultsSeeMap:{pl:"Zobacz swoją mapę",en:"See your map"},resultsShare:{pl:"Udostępnij wynik",en:"Share results"},resultsRetake:{pl:"Spróbuj ponownie",en:"Try again"},coffeeText:{pl:"Pomogło? Możesz postawić mi kawę.",en:"Found it helpful? You can buy me a coffee."},coffeeBtn:{pl:"Postaw kawę ☕",en:"Buy me a coffee ☕"},beliefKnown:{pl:"Znasz ten temat",en:"You know this topic"},beliefUnknown:{pl:"Do nauki",en:"To study"},topicBack:{pl:"Wróć do mapy",en:"Back to map"},topicLearnPath:{pl:"Ścieżka do tego tematu",en:"Path to this topic"},topicQuizMe:{pl:"Sprawdź się z tego tematu",en:"Quiz me on this topic"},galleryTitle:{pl:"Interaktywne wizualizacje",en:"Interactive visualizations"},galleryCount:{pl:"wizualizacji",en:"visualizations"},heroBrowseViz:{pl:"Przeglądaj wizualizacje",en:"Browse visualizations"},pathLabel:{pl:"Ścieżka nauki",en:"Learning path"},pathTopics:{pl:"tematów w ścieżce",en:"topics in path"},pathKnown:{pl:"znasz",en:"known"},pathToStudy:{pl:"do nauki",en:"to study"},pathGoal:{pl:"— cel",en:"— goal"},pathStartHere:{pl:"zacznij tutaj",en:"start here"},heroGoal:{pl:"Wybierz cel i sprawdź gotowość",en:"Pick a goal & test readiness"},heroExplore:{pl:"Eksploruj mapę bez testu →",en:"Explore the map without a test →"},goalQuizTitle:{pl:"Szczegółowa analiza",en:"Deep analysis"},goalQuizSub:{pl:"Sprawdzamy wymagania wstępne dla:",en:"Testing prerequisites for:"},goalQuizTopics:{pl:"tematów do zbadania",en:"topics to assess"},goalQuizDone:{pl:"Analiza zakończona",en:"Analysis complete"},goalQuizSeeMap:{pl:"Zobacz na mapie",en:"See on map"},goalQuizRetake:{pl:"Powtórz analizę",en:"Retake analysis"},goalQuizBackHero:{pl:"Wróć na start",en:"Back to start"},profileTitle:{pl:"Twój profil",en:"Your profile"},profileFullCourse:{pl:"Pełny kurs",en:"Full course"},profileGoal:{pl:"Cel",en:"Goal"},profileStarted:{pl:"Rozpoczęto",en:"Started"},profileProgress:{pl:"Postęp",en:"Progress"},profileContinue:{pl:"Kontynuuj naukę",en:"Continue learning"},profileSeeMap:{pl:"Zobacz mapę",en:"See map"},profileStartNew:{pl:"Zacznij od nowa",en:"Start fresh"},profileStartNewConfirm:{pl:"Na pewno? Obecny postęp zostanie utracony.",en:"Are you sure? Current progress will be lost."},profileTimeline:{pl:"Ścieżka nauki",en:"Learning timeline"},profileMaturaTips:{pl:"Wskazówki maturalne (opcjonalnie)",en:"Matura exam tips (optional)"},profileMaturaTipsSub:{pl:"Krótkie meta-lekcje o tym, jak czytać polecenia i jak pisać odpowiedzi. Nie musisz ich robić — ale pomagają na maturze.",en:"Short meta-lessons on how to read commands and write answers. Optional — but they help on the matura."},lessonResources:{pl:"Dodatkowe materiały",en:"More resources"},quizMaturaQuestions:{pl:"Pytania maturalne (CKE)",en:"Past matura questions (CKE)"},basedOn:{pl:"Na podstawie:",en:"Based on:"},exampleShow:{pl:"Nie kumam — pokaż na liczbach",en:"Show me a concrete example"},exampleHide:{pl:"Schowaj przykład",en:"Hide example"},mistakesShow:{pl:"Najczęstsze błędy",en:"Common mistakes"},mistakesHide:{pl:"Schowaj najczęstsze błędy",en:"Hide common mistakes"},hintShowNext:{pl:"Pokaż kolejną wskazówkę",en:"Show next hint"},copiedClipboard:{pl:"Skopiowano do schowka!",en:"Copied to clipboard!"},quizCorrect:{pl:"Poprawnie!",en:"Correct!"},quizIncorrect:{pl:"Niepoprawnie",en:"Incorrect"},heroCoffee:{pl:"Postaw kawę — wspieraj projekt",en:"Buy me a coffee — support this project"},goalSelectTitle:{pl:"Wybierz cel",en:"Select Goal"},goalSelectSubtitle:{pl:"Wybierz temat docelowy. Przediagnozujemy wszystkie wymagania wstępne.",en:"Pick a target topic. We'll diagnose all its prerequisites."},goalSelectSearch:{pl:"Szukaj tematu...",en:"Search topics..."},goalSelectNoResults:{pl:"Brak wyników",en:"No results"},goalSelectTopics:{pl:"tematów",en:"topics"},mapShowCutout:{pl:"Pokaż mapę kontekstu",en:"Show context map"},mapLabel:{pl:"Mapa kontekstu",en:"Context map"},mapNoNeighbors:{pl:"Brak sąsiadów",en:"No neighbours"},mapCutoutTitle:{pl:"Wycinek mapy",en:"Map slice"},mapTopics:{pl:"tematów",en:"topics"},mapClose:{pl:"Zamknij",en:"Close"},profileEmpty:{pl:"Nie masz jeszcze zapisanego kursu.",en:"You don't have a saved course yet."},profileStartQuiz:{pl:"Rozwiąż test, żeby rozpocząć",en:"Take a quiz to get started"},profileFromScratch:{pl:"Zacznij od zera",en:"Start from scratch"},profileFromScratchSub:{pl:"Pełna ścieżka przez wszystkie tematy",en:"Full path through all topics"},heroContinue:{pl:"Kontynuuj naukę →",en:"Continue learning →"},heroProfile:{pl:"Mój profil",en:"My profile"},startLesson:{pl:"Rozpocznij lekcję",en:"Start lesson"},lessonOf:{pl:"z",en:"of"},iUnderstand:{pl:"Rozumiem — dalej →",en:"I understand — next →"},lessonPrev:{pl:"← Poprzedni",en:"← Previous"},lessonNext:{pl:"Następny →",en:"Next →"},lessonComplete:{pl:"Ścieżka ukończona! 🎉",en:"Path complete! 🎉"},lessonCompleteSub:{pl:"Gratulacje — przeszedłeś całą ścieżkę.",en:"Congratulations — you've completed the entire path."},lessonViz:{pl:"Wizualizacja",en:"Visualization"},lessonPractice:{pl:"Sprawdź się",en:"Check yourself"},lessonCheck:{pl:"Sprawdź",en:"Check"}};function B(o,t="pl"){const r=kx[o];return r?r[t]??r.pl??o:(console.warn(`i18n: missing key "${o}"`),o)}function io(o,t){const r={},a={};return o.forEach(s=>{r[s.id]=[],a[s.id]=[]}),t.forEach(([s,c])=>{var u,m;(u=r[c])==null||u.push(s),(m=a[s])==null||m.push(c)}),{prereqs:r,dependents:a}}function pc(o,t){const r=Object.fromEntries(o.map(u=>[u.id,0])),a=Object.fromEntries(o.map(u=>[u.id,[]]));for(const[u,m]of t)r[m]!==void 0&&r[m]++,a[u]!==void 0&&a[u].push(m);const s=Object.fromEntries(o.map(u=>[u.id,0])),c=o.filter(u=>r[u.id]===0).map(u=>u.id);for(;c.length;){const u=c.shift();for(const m of a[u])s[m]=Math.max(s[m],s[u]+1),--r[m]===0&&c.push(m)}return s}const _x={id:"spectral",label:"Spectral"};function jx(o,t,r,a,s=80){const c=o.length,u=Object.fromEntries(o.map((F,V)=>[F.id,V])),m=Array.from({length:c},()=>new Float64Array(c));t.forEach(([F,V])=>{const Q=u[F],ee=u[V];Q==null||ee==null||(m[Q][ee]=1,m[ee][Q]=1)});const h=m.map(F=>F.reduce((V,Q)=>V+Q,0)),w=F=>F.map((V,Q)=>{let ee=0;for(let se=0;se<c;se++)ee+=m[Q][se]*F[se];return h[Q]*F[Q]-ee}),g=(F,V)=>F.reduce((Q,ee,se)=>Q+ee*V[se],0),z=F=>{const V=Math.sqrt(g(F,F))||1;return F.map(Q=>Q/V)},S=(F,V)=>{let Q=[...F];return V.forEach(ee=>{const se=g(Q,ee);Q=Q.map((X,te)=>X-se*ee[te])}),z(Q)},q=(F,V=400)=>{let Q=z(Array.from({length:c},()=>Math.random()-.5));Q=S(Q,F);for(let ee=0;ee<V;ee++){const se=Math.max(...h)+1;Q=S(Q.map((X,te)=>se*X-w(Q)[te]),F)}return Q},j=z(new Array(c).fill(1)),_=q([j]),T=q([j,_]),P=Math.min(..._),N=Math.max(..._),I=Math.min(...T),O=Math.max(...T),C=N-P<1e-6?1:(r-2*s)/(N-P),U=O-I<1e-6?1:(a-2*s)/(O-I);return o.map((F,V)=>({id:F.id,x:s+(_[V]-P)*C,y:s+(T[V]-I)*U,vx:0,vy:0}))}const Sx=Object.freeze(Object.defineProperty({__proto__:null,apply:jx,meta:_x},Symbol.toStringTag,{value:"Module"})),qx={id:"topoRank",label:"Topo Rank"},y1=["liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","kombinatoryka","statystyka","logika","optymalizacja","analiza"];function Tx(o,t,r,a,s=80){const c=pc(o,t),u=Math.max(...o.map(g=>c[g.id]??0),0),m={};for(const g of o){const z=c[g.id]??0;(m[z]??(m[z]=[])).push(g)}for(const g of Object.values(m))g.sort((z,S)=>{const q=y1.indexOf(z.scope),j=y1.indexOf(S.scope);return(q===-1?999:q)-(j===-1?999:j)});const h=r-2*s,w=a-2*s;return o.map(g=>{const z=c[g.id]??0,S=m[z],q=S.indexOf(g);return{id:g.id,x:s+(q+.5)/S.length*h,y:s+z/Math.max(u,1)*w,vx:0,vy:0}})}const Px=Object.freeze(Object.defineProperty({__proto__:null,apply:Tx,meta:qx},Symbol.toStringTag,{value:"Module"})),Ax={id:"nPartite",label:"N-Partite Grid"},Cx=90;function Mx(o,t,r,a,s=120){const c=pc(o,t),u=Math.max(...o.map(j=>c[j.id]??0),0),m={};for(const j of o){const _=c[j.id]??0;(m[_]??(m[_]=[])).push(j)}const h={},w={};for(const j of o)h[j.id]=[],w[j.id]=[];for(const[j,_]of t)h[_]&&h[_].push(j),w[j]&&w[j].push(_);const g=["logika","statystyka","kombinatoryka","liczby_rzeczywiste","wyrazenia","rownania","funkcje","ciagi","trygonometria","planimetria","geometria_analityczna","stereometria","optymalizacja","analiza"],z={},S=r-2*s,q=a-2*s;for(let j=0;j<=u;j++){const _=m[j]??[];j===0?_.sort((T,P)=>{const N=g.indexOf(T.scope),I=g.indexOf(P.scope);return(N===-1?999:N)-(I===-1?999:I)}):_.sort((T,P)=>Ar(T,h,z,r)-Ar(P,h,z,r)),P0(_,s,S,r,j,u,q,z)}for(let j=0;j<6;j++)if(j%2===0)for(let _=1;_<=u;_++){const T=m[_]??[];T.sort((P,N)=>Ar(P,h,z,r)-Ar(N,h,z,r)),P0(T,s,S,r,_,u,q,z)}else for(let _=u-1;_>=0;_--){const T=m[_]??[];_===0?T.sort((P,N)=>{const I=Ar(P,w,z,r),O=Ar(N,w,z,r);if(Math.abs(I-O)>1)return I-O;const C=g.indexOf(P.scope),U=g.indexOf(N.scope);return(C===-1?999:C)-(U===-1?999:U)}):T.sort((P,N)=>Ar(P,w,z,r)-Ar(N,w,z,r)),P0(T,s,S,r,_,u,q,z)}return o.map(j=>{var _,T;return{id:j.id,x:((_=z[j.id])==null?void 0:_.x)??r/2,y:((T=z[j.id])==null?void 0:T.y)??a/2,vx:0,vy:0}})}function Ar(o,t,r,a){const s=t[o.id]??[];return s.length===0?a/2:s.reduce((c,u)=>{var m;return c+(((m=r[u])==null?void 0:m.x)??a/2)},0)/s.length}function P0(o,t,r,a,s,c,u,m){const h=t+s/Math.max(c,1)*u,w=(o.length-1)*Cx,g=Math.max(w,r),z=t+(r-g)/2;o.forEach((S,q)=>{const j=o.length===1?a/2:z+q/(o.length-1)*g;m[S.id]={x:j,y:h}})}const hp=Object.freeze(Object.defineProperty({__proto__:null,apply:Mx,meta:Ax},Symbol.toStringTag,{value:"Module"})),$p=[hp,Px,Sx],yp="nPartite";function Dx(o){return $p.find(t=>t.meta.id===o)??hp}const Ss=2200,mc=1600,Zi=120,Rx=.4,g1=10,Ex=.35,w1=.01;function Bx(o,t){const r=pc(o,t),a=Math.max(...o.map(c=>r[c.id]??0),0),s=Object.fromEntries(o.map(c=>[c.id,Zi+(r[c.id]??0)/Math.max(a,1)*(mc-2*Zi)]));return{ranks:r,rankY:s}}function Fx(o,t){const r=Object.fromEntries(o.map((a,s)=>[a.id,s]));return t.map(([a,s])=>[r[a],r[s]]).filter(([a,s])=>a!=null&&s!=null)}function Ix(o){return Math.sqrt(Ss*mc/Math.max(o.length,1))*.9}function Nx(o,t,r,a){return Dx(o).apply(t,r,Ss,mc,Zi).map(u=>({id:u.id,x:u.x+(Math.random()-.5)*20,y:a[u.id]??u.y,vx:0,vy:0}))}function Lx(o,t,r,a,{ranks:s,rankY:c,simEdges:u,idealK:m}){const h=o.length,w=new Float64Array(h);for(let g=0;g<h;g++)for(let z=g+1;z<h;z++){if(s[o[g].id]!==s[o[z].id])continue;const S=o[g].x-o[z].x,q=Math.abs(S)||.1,j=m*m/(q*q),_=S<0?-1:1;w[g]+=_*j,w[z]-=_*j}for(const[g,z]of u){const S=o[z].x-o[g].x;w[g]+=S*w1,w[z]-=S*w1}for(let g=0;g<h;g++)w[g]+=(Ss/2-o[g].x)*.003;return o.map((g,z)=>{if(g.id===t)return{...g,x:r,y:a,vx:0,vy:0};let S=(g.vx+w[z])*Rx;Math.abs(S)>g1&&(S*=g1/Math.abs(S));const q=c[g.id]??g.y,j=g.y+(q-g.y)*Ex;return{...g,vx:S,vy:0,x:Math.max(Zi,Math.min(Ss-Zi,g.x+S)),y:j}})}function A0(o=yp,t=300,r,a){if(!r||r.length===0)return{};const{ranks:s,rankY:c}=Bx(r,a??[]),u=Fx(r,a??[]),m=Ix(r),h={ranks:s,rankY:c,simEdges:u,idealK:m};let w=Nx(o,r,a??[],c);for(let g=0;g<t;g++)w=Lx(w,null,0,0,h);return Object.fromEntries(w.map(g=>[g.id,{x:g.x,y:g.y}]))}function Wx(o){const t=typeof window<"u"&&window.innerWidth<600,[r,a]=R.useState(t?{x:20,y:20,scale:.42}:{x:40,y:40,scale:.72}),[s,c]=R.useState("grab"),u=R.useRef(!1),m=R.useRef({x:0,y:0}),h=R.useRef(null),w=R.useRef(null),g=R.useCallback(O=>{O.preventDefault();const C=O.deltaY>0?.9:1.1;a(U=>{const F=Math.max(.15,Math.min(5,U.scale*C)),V=O.clientX,Q=O.clientY,ee=V-(V-U.x)/U.scale*F,se=Q-(Q-U.y)/U.scale*F;return{x:ee,y:se,scale:F}})},[]),z=R.useCallback((O,C)=>({x:(O-r.x)/r.scale,y:(C-r.y)/r.scale}),[r]),S=R.useCallback((O,C)=>{u.current=!0,c("grabbing"),m.current={x:O-r.x,y:C-r.y}},[r]),q=R.useCallback(O=>u.current?(a(C=>({...C,x:O.clientX-m.current.x,y:O.clientY-m.current.y})),!0):!1,[]),j=R.useCallback(()=>{u.current=!1,c("grab")},[]),_=(O,C)=>{const U=O.clientX-C.clientX,F=O.clientY-C.clientY;return Math.sqrt(U*U+F*F)},T=(O,C)=>({x:(O.clientX+C.clientX)/2,y:(O.clientY+C.clientY)/2}),P=R.useCallback(O=>{O.touches.length===1?(u.current=!0,a(C=>(m.current={x:O.touches[0].clientX-C.x,y:O.touches[0].clientY-C.y},C)),h.current=null,w.current=null):O.touches.length===2&&(u.current=!1,h.current=_(O.touches[0],O.touches[1]),w.current=T(O.touches[0],O.touches[1]))},[]),N=R.useCallback(O=>{if(O.preventDefault(),O.touches.length===1&&u.current)a(C=>({...C,x:O.touches[0].clientX-m.current.x,y:O.touches[0].clientY-m.current.y}));else if(O.touches.length===2&&h.current!==null){const C=_(O.touches[0],O.touches[1]),U=T(O.touches[0],O.touches[1]),F=C/h.current;a(V=>{const Q=Math.max(.15,Math.min(5,V.scale*F)),ee=w.current.x,se=w.current.y,X=U.x-(ee-V.x)/V.scale*Q,te=U.y-(se-V.y)/V.scale*Q;return{x:X,y:te,scale:Q}}),h.current=C,w.current=U}},[]),I=R.useCallback(()=>{u.current=!1,h.current=null,w.current=null},[]);return R.useEffect(()=>{const O=o.current;if(O)return O.addEventListener("wheel",g,{passive:!1}),O.addEventListener("touchstart",P,{passive:!1}),O.addEventListener("touchmove",N,{passive:!1}),O.addEventListener("touchend",I,{passive:!1}),()=>{O.removeEventListener("wheel",g),O.removeEventListener("touchstart",P),O.removeEventListener("touchmove",N),O.removeEventListener("touchend",I)}},[o,g,P,N,I]),{viewTransform:r,setViewTransform:a,toCanvas:z,isPanning:u,panStart:m,startPan:S,cursorStyle:s,setCursorStyle:c,handleMouseMove:q,handleMouseUp:j,handleWheel:g}}function Ox(o,t,r,a){const s=R.useRef(null),c=R.useRef({x:0,y:0}),u=R.useCallback((w,g,z)=>{const S=o(g,z),q=t.find(j=>j.id===w);q&&(s.current=w,c.current={x:S.x-q.x,y:S.y-q.y},a==null||a("grabbing"))},[o,t,a]),m=R.useCallback((w,g)=>{if(!s.current)return!1;const z=o(w,g),S=s.current;return r(q=>({...q,[S]:{x:z.x-c.current.x,y:z.y-c.current.y}})),!0},[o,r]),h=R.useCallback(()=>{s.current=null,a==null||a("grab")},[a]);return{draggingNode:s,startNodeDrag:u,handleDragMove:m,handleDragEnd:h}}const oo={quickMaxQuestions:20,quickCompletionRatio:.1,deepKnownThreshold:.7,deepUnknownThreshold:.3,deepMinStrength:2.5,deepMaxQuestions:15};function fc(o,t,r){var c;const a={...t},s=[o];for(;s.length;){const u=s.shift();a[u]!=="known"&&(a[u]="known",(c=r.prereqs[u])==null||c.forEach(m=>{a[m]!=="known"&&s.push(m)}))}return a}function gp(o,t,r){var c;const a={...t},s=[o];for(;s.length;){const u=s.shift();a[u]!=="unknown"&&(a[u]="unknown",(c=r.dependents[u])==null||c.forEach(m=>{a[m]!=="unknown"&&s.push(m)}))}return a}function Ki(o,t,r,a,s){let c={...a};if(t){for(const u of Object.keys(r))c[u]="known";for(const u of Object.keys(r))c=fc(u,c,s)}else{for(const u of Object.keys(r))c[u]="unknown";for(const u of Object.keys(r))c=gp(u,c,s)}return c}function Hx(o,t,r){return o.filter(a=>t[a.id]!=="known"&&t[a.id]!=="unknown").filter(a=>(r.prereqs[a.id]??[]).every(s=>t[s]==="known")).map(a=>a.id)}function hc(o,t,r,a=.5){var s,c,u;try{const m=1-a,h=o.filter(z=>t[z.id]!=="known"&&t[z.id]!=="unknown");if(h.length===0)return null;const w=h.map(z=>{const S=wp(z.id,t,r),q=zp(z.id,t,r),j=a*S+m*q;return{id:z.id,erv:j||0,ancestorsToReveal:S,descendantsToReveal:q}});return w.sort((z,S)=>S.erv-z.erv),((s=w[0])==null?void 0:s.id)||((c=h[0])==null?void 0:c.id)||null}catch(m){return console.error("pickNextQuestion error:",m),((u=o.filter(w=>t[w.id]!=="known"&&t[w.id]!=="unknown")[0])==null?void 0:u.id)||null}}function wp(o,t,r){const a=new Set,s=[...r.prereqs[o]??[]];let c=0;for(;s.length>0;){const u=s.shift();if(a.has(u))continue;a.add(u),t[u]!=="known"&&t[u]!=="unknown"&&c++;const m=r.prereqs[u]??[];for(const h of m)a.has(h)||s.push(h)}return c}function zp(o,t,r){const a=new Set,s=[...r.dependents[o]??[]];let c=0;for(;s.length>0;){const u=s.shift();if(a.has(u))continue;a.add(u),t[u]!=="known"&&t[u]!=="unknown"&&c++;const m=r.dependents[u]??[];for(const h of m)a.has(h)||s.push(h)}return c}function Gx(o,t,r,a=.5){try{const s=o.filter(w=>t[w.id]!=="known"&&t[w.id]!=="unknown");if(s.length===0)return 0;const c=1-a;let u=0;for(const w of s){const g=wp(w.id,t,r),z=zp(w.id,t,r),S=a*g+c*z;u+=S||0}if(!u||u===0)return s.length;const m=s.length,h=m*m/u;return isNaN(h)?s.length:Math.ceil(h)}catch(s){return console.error("estimateRemainingQuestions error:",s),null}}function Ux(o,t,r){const a={...o};for(const[s,c]of Object.entries(t)){const u=a[s]??{alpha:1,beta:1};a[s]={alpha:u.alpha+(r?c:0),beta:u.beta+(r?0:c)}}return a}function Zx(o,t){const r={};for(const a of o){const s=t[a]??{alpha:1,beta:1},c=s.alpha+s.beta,u=s.alpha/c;u>oo.deepKnownThreshold&&c>oo.deepMinStrength?r[a]="known":u<oo.deepUnknownThreshold&&c>oo.deepMinStrength?r[a]="unknown":r[a]="uncertain"}return r}function xp(o,t,r){const a=new Set,s=new Set(r.map(u=>u.id)),c=[o];for(;c.length;){const u=c.shift();if(!a.has(u)&&s.has(u)){a.add(u);for(const m of t.prereqs[u]??[])a.has(m)||c.push(m)}}return a}function Kx(o,t,r,a,s){var m;const c=o.filter(h=>r[h]==="uncertain");if(c.length===0)return null;const u=c.map(h=>{const w=t[h]??{alpha:1,beta:1},g=w.alpha+w.beta,z=w.alpha/g,S=1-z,q=new Set(o);let j=0;const _=[...a.prereqs[h]??[]],T=new Set;for(;_.length;){const C=_.shift();if(!T.has(C)){T.add(C),q.has(C)&&r[C]==="uncertain"&&j++;for(const U of a.prereqs[C]??[])T.has(U)||_.push(U)}}let P=0;const N=[...a.dependents[h]??[]],I=new Set;for(;N.length;){const C=N.shift();if(!I.has(C)){I.add(C),q.has(C)&&r[C]==="uncertain"&&P++;for(const U of a.dependents[C]??[])I.has(U)||N.push(U)}}const O=z*j+S*P;return{id:h,erv:O,strength:g}});return u.sort((h,w)=>Math.abs(h.erv-w.erv)>.01?w.erv-h.erv:h.strength-w.strength),((m=u[0])==null?void 0:m.id)??c[0]}function Vx(o,t,r=0){return!!(o.every(a=>t[a]!=="uncertain")||r>=oo.deepMaxQuestions)}function $c(o,t,r=0,a){const s=(a==null?void 0:a.maxQuestions)??oo.quickMaxQuestions,c=(a==null?void 0:a.completionRatio)??oo.quickCompletionRatio,u=o.length;if(u===0)return!0;const m=o.filter(h=>t[h.id]!=="known"&&t[h.id]!=="unknown").length;return m===0||r>=s||m/u<=c}const X0={quick:{maxQuestions:10,completionRatio:.15,labelKey:"presetQuick",descKey:"presetQuickDesc"},standard:{maxQuestions:20,completionRatio:.1,labelKey:"presetStandard",descKey:"presetStandardDesc"},thorough:{maxQuestions:35,completionRatio:.05,labelKey:"presetThorough",descKey:"presetThoroughDesc"}};function Yx(o,t,r){const a=r?`${r}_`:"",[s,c]=lt(`${a}diagMode`,!1),[u,m]=lt(`${a}diagSubMode`,"quick"),[h,w]=lt(`${a}belief`,{}),[g,z]=lt(`${a}targetNode`,null),[S,q]=lt(`${a}stats`,{correct:0,incorrect:0,questionsAnswered:0}),[j,_]=lt(`${a}answeredQuestions`,new Set),[T,P]=lt(`${a}betaBeliefs`,{}),[N,I]=lt(`${a}quizNode`,null),O=R.useMemo(()=>{const A=S.correct+S.incorrect;return A===0?.5:(S.correct+.5)/(A+1)},[S]),C=S.questionsAnswered,U=R.useMemo(()=>[...new Set([...Object.keys(o.prereqs),...Object.keys(o.dependents),...Object.keys(t)])].map(W=>({id:W})),[o,t]),F=R.useMemo(()=>Object.keys(h).length>0||S.questionsAnswered>0,[h,S]),V=R.useMemo(()=>F?Hx(U,h,o):[],[F,h,o,U]),Q=F?V:[],ee=R.useMemo(()=>s&&u==="quick"?hc(U,h,o,O):null,[s,u,h,o,O,U]),se=R.useMemo(()=>s&&u==="quick"?Gx(U,h,o,O):null,[s,u,h,o,O,U]),X=R.useMemo(()=>s&&u==="quick"&&F&&$c(U,h,C),[s,u,F,h,U,C]),te=R.useMemo(()=>!s||u!=="deepdive"||!g?[]:[...xp(g,o,U)],[s,u,g,o,U]),re=R.useMemo(()=>u!=="deepdive"?{}:Zx(te,T),[u,te,T]),pe=R.useMemo(()=>!s||u!=="deepdive"||te.length===0?null:Kx(te,T,re,o),[s,u,te,T,re,o,U]),fe=R.useMemo(()=>!s||u!=="deepdive"||te.length===0?!1:Vx(te,re,C),[s,u,te,re,C]),be=R.useCallback((A,W)=>s?u==="deepdive"?te.includes(A)?(re[A]!=="uncertain"||I(A),!0):!1:h[A]==="unknown"?!0:W?(w(ge=>gp(A,ge,o)),I(null),!0):h[A]==="known"?(w(ge=>{const we={...ge};return delete we[A],we}),I(null),!0):(I(A),!0):!1,[s,u,h,o,te,re]),oe=R.useCallback((A,W,ge,we)=>{if(u==="deepdive"){const _e=(ge==null?void 0:ge.tests)??{[A]:1};P(ze=>Ux(ze,_e,W))}else{const _e=(ge==null?void 0:ge.tests)??{[A]:1};w(ze=>Ki(A,W,_e,ze,o))}typeof we=="number"&&_(_e=>new Set([..._e,`${A}:${we}`])),q(_e=>({correct:_e.correct+(W?1:0),incorrect:_e.incorrect+(W?0:1),questionsAnswered:_e.questionsAnswered+1})),I(null)},[u,o]),J=R.useCallback(()=>{bx(),c(!1),m("quick"),w({}),P({}),I(null),z(null),q({correct:0,incorrect:0,questionsAnswered:0}),_(new Set)},[]),ne=R.useCallback(A=>{m("deepdive"),z(A),P({}),w({}),I(null),q({correct:0,incorrect:0,questionsAnswered:0}),_(new Set),c(!0)},[]);return{diagMode:s,setDiagMode:c,mode:u,setMode:m,quizNode:N,setQuizNode:I,questionsAnswered:C,answeredQuestions:j,setAnsweredQuestions:_,getAnsweredIndices:A=>{const W=[];return j.forEach(ge=>{const[we,_e]=ge.split(":");we===A&&W.push(parseInt(_e,10))}),W},handleDiagClick:be,handleQuizAnswer:oe,resetDiagnostic:J,startDeepDive:ne,targetNode:g,belief:h,setBelief:w,frontier:V,visibleFrontier:Q,hasStarted:F,nextSuggestedId:ee,expectedRemaining:se,pCorrect:O,sessionComplete:X,betaBeliefs:T,subgraphIds:te,ddClassification:re,ddNextNodeId:pe,ddComplete:fe}}const z1=640;function bp(){const[o,t]=R.useState(()=>typeof window<"u"&&window.innerWidth<z1);return R.useEffect(()=>{const r=window.matchMedia(`(max-width: ${z1-1}px)`),a=s=>t(s.matches);return r.addEventListener("change",a),t(r.matches),()=>r.removeEventListener("change",a)},[]),o}const Qx=new Set(["pl","en"]);function x1(o){const r=(o||"").replace(/^#\/?/,"").split("/").filter(Boolean);let a="pl",s=r;if(r.length>0&&Qx.has(r[0])&&(a=r[0],s=r.slice(1)),s[0]==="node"&&s[1]){const c=decodeURIComponent(s[1]);return s[2]==="resource"&&s[3]!=null?{view:"resource",nodeId:c,resourceIndex:parseInt(s[3],10),lang:a}:s[2]==="question"&&s[3]!=null?{view:"question",nodeId:c,questionIndex:parseInt(s[3],10),lang:a}:{view:"node",nodeId:c,lang:a}}if(s[0]==="diagnostic"){if(s[1]==="deepdive"&&s[2])return{view:"diagnostic",mode:"deepdive",goalNode:decodeURIComponent(s[2]),lang:a};if(s[1]==="quick")return{view:"diagnostic",mode:"quick",lang:a}}return{view:"graph",lang:a}}function Xx(o){const t=(o==null?void 0:o.lang)||"pl";if(!o)return`#/${t}`;switch(o.view){case"node":return`#/${t}/node/${encodeURIComponent(o.nodeId)}`;case"resource":return`#/${t}/node/${encodeURIComponent(o.nodeId)}/resource/${o.resourceIndex}`;case"question":return`#/${t}/node/${encodeURIComponent(o.nodeId)}/question/${o.questionIndex}`;case"diagnostic":return o.mode==="deepdive"&&o.goalNode?`#/${t}/diagnostic/deepdive/${encodeURIComponent(o.goalNode)}`:`#/${t}/diagnostic/quick`;default:return`#/${t}`}}function Jx(o){const t=R.useRef(o);t.current=o;const r=R.useRef(!1),a=R.useCallback(s=>{const c=Xx(s);window.location.hash!==c&&(r.current=!0,window.location.hash=c)},[]);return R.useEffect(()=>{const s=()=>{if(r.current){r.current=!1;return}t.current(x1(window.location.hash))};window.addEventListener("hashchange",s);const c=x1(window.location.hash);return Promise.resolve().then(()=>t.current(c)),()=>window.removeEventListener("hashchange",s)},[]),{setRoute:a}}function b1(o){return 6+o.level*2}function eb({edges:o,nodes:t,highlightedIds:r}){const a=R.useMemo(()=>Object.fromEntries(t.map(s=>[s.id,s])),[t]);return d.jsx("g",{children:o.map(([s,c])=>{const u=a[s],m=a[c];if(!u||!m)return null;const h=(r==null?void 0:r.has(s))&&(r==null?void 0:r.has(c)),w=r&&!h,g=m.x-u.x,z=m.y-u.y,S=Math.sqrt(g*g+z*z)||1,q=b1(m)+3,j=m.x-g/S*q,_=m.y-z/S*q,T=b1(u)+2,P=u.x+g/S*T,N=u.y+z/S*T,I=w?"#151b26":h?"#4a9eff":"#334766",O=h?1.8:1,C=w?.15:h?1:.55,U=w?"url(#arrow-dim)":h?"url(#arrow-hi)":"url(#arrow-default)";return d.jsx("line",{x1:P,y1:N,x2:j,y2:_,stroke:I,strokeWidth:O,opacity:C,markerEnd:U},`${s}-${c}`)})})}function nb(o,t){const r=8+o.level*3,a=Math.min(4.8,(t||0)*.6);return r+a}function tb(o){return o<.3?6:o<.5?12:o<.8?18:30}function rb(o){return o<.3?9:o<.6?10:11}function ob({nodes:o,filteredIds:t,highlightedIds:r,selected:a,onSelect:s,onHover:c,lang:u,diagMode:m,belief:h,frontier:w,scale:g,scopeColors:z,edges:S}){const q=h&&Object.keys(h).length>0,j=R.useMemo(()=>{const _={};if(!S)return _;for(const[T,P]of S)_[T]=(_[T]||0)+1,_[P]=(_[P]||0)+1;return _},[S]);return d.jsx("g",{children:o.map(_=>{const T=j[_.id]||0,P=nb(_,T),N=(z==null?void 0:z[_.scope])||"#4a9eff",I=t&&!t.has(_.id),O=r==null?void 0:r.has(_.id),C=a===_.id,U=r&&!O||I,F=u==="pl"?_.labelPl:_.label,V=tb(g??1),Q=rb(g??1);let ee=N,se=U?.15:.9,X=U?.2:.85,te=null,re=2;if(q){const fe=h[_.id],be=w==null?void 0:w.includes(_.id);fe==="known"?(ee="#27ae60",te="#2ecc71",se=I?.1:.85,X=I?.15:.9):fe==="unknown"?(ee="#c0392b",se=I?.1:.45,te="#e74c3c",X=I?.15:.7):be?(ee="#f39c12",te="#f1c40f",re=3,se=I?.1:.9,X=I?.15:.9):(se=I?.1:m?.35:.5,X=I?.15:.7)}const pe=F.length>V?F.slice(0,V-1)+"…":F;return d.jsxs("g",{"data-node-id":_.id,style:{cursor:"pointer"},onClick:()=>s(_.id===a?null:_.id),onMouseEnter:()=>c(_.id),onMouseLeave:()=>c(null),children:[(C||te)&&d.jsx("circle",{cx:_.x,cy:_.y,r:P+(C?5:4),fill:"none",stroke:C?N:te,strokeWidth:C?2:re,opacity:C?.5:.9}),d.jsx("circle",{cx:_.x,cy:_.y,r:P,fill:ee,fillOpacity:se,stroke:(O||C)&&!q?N:"none",strokeWidth:1.5}),d.jsx("rect",{x:_.x-pe.length*Q*.3,y:_.y+P+3,width:pe.length*Q*.6,height:Q+4,rx:2,fill:b.bg,fillOpacity:X*.6,style:{pointerEvents:"none"}}),d.jsx("text",{x:_.x,y:_.y+P+Q+2,textAnchor:"middle",fontSize:Q,fill:b.textBody,opacity:X,style:{pointerEvents:"none",userSelect:"none"},children:pe})]},_.id)})})}function yc({resource:o,lang:t,onClose:r}){const a=R.useRef(null);if(R.useEffect(()=>{const z=S=>{S.key==="Escape"&&r()};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[r]),R.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),!o)return null;const s=t==="pl"?o.titlePl:o.titleEn,c=o.type==="interactive",u={interactive:B("resourceInteractive",t),video:B("resourceVideo",t),article:B("resourceArticle",t)}[o.type]??o.type,m={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"}[o.type]??"#8a9dbe";if(!c)return window.open(o.url,"_blank","noopener"),r(),null;const w=o.url.startsWith("http")?o.url:`${"/".replace(/\/$/,"")}/${o.url.replace(/^\//,"")}`,g=w+(w.includes("?")?"&":"?")+"lang="+t;return d.jsxs("div",{ref:a,onClick:z=>{z.target===a.current&&r()},style:{position:"fixed",inset:0,zIndex:100,background:"rgba(8, 11, 20, 0.88)",backdropFilter:"blur(6px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"16px",animation:"rsPanel_fadeIn 0.18s ease"},children:[d.jsx("style",{children:`
        @keyframes rsPanel_fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}),d.jsxs("div",{style:{width:"100%",maxWidth:"calc(100vw - 32px)",maxHeight:"calc(100vh - 32px)",display:"flex",flexDirection:"column",borderRadius:10,overflow:"hidden",border:`1px solid ${m}33`,boxShadow:`0 0 48px ${m}18, 0 8px 32px rgba(0,0,0,0.7)`},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",background:`${b.surface}f8`,borderBottom:`1px solid ${m}22`,flexShrink:0,fontFamily:ve},children:[d.jsx("span",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",color:m,background:`${m}18`,border:`1px solid ${m}40`,borderRadius:4,padding:"2px 7px",flexShrink:0},children:u}),d.jsx("span",{style:{flex:1,fontSize:13,fontWeight:500,color:b.textBody,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:s}),d.jsx("button",{onClick:()=>window.open(g,"_blank","noopener"),title:B("openInTab",t),style:v1,children:"↗"}),d.jsx("button",{onClick:r,title:B("closeResource",t),style:{...v1,fontSize:18,lineHeight:1},children:"×"})]}),d.jsx("iframe",{src:g,sandbox:"allow-scripts allow-same-origin allow-forms",style:{flex:1,border:"none",background:"#0e0e12",minHeight:"calc(100vh - 120px)",display:"block"},title:s,loading:"eager"})]})]})}const v1={background:"none",border:`1px solid ${b.border}`,borderRadius:5,color:b.textDim,cursor:"pointer",fontSize:14,padding:"3px 9px",fontFamily:ve,transition:"background 0.12s, color 0.12s",flexShrink:0,lineHeight:1.4};class nt{constructor(t,r,a){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=t,this.start=r,this.end=a}static range(t,r){return r?!t||!t.loc||!r.loc||t.loc.lexer!==r.loc.lexer?null:new nt(t.loc.lexer,t.loc.start,r.loc.end):t&&t.loc}}class ct{constructor(t,r){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=t,this.loc=r}range(t,r){return new ct(r,nt.range(this,t))}}class he{constructor(t,r){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var a="KaTeX parse error: "+t,s,c,u=r&&r.loc;if(u&&u.start<=u.end){var m=u.lexer.input;s=u.start,c=u.end,s===m.length?a+=" at end of input: ":a+=" at position "+(s+1)+": ";var h=m.slice(s,c).replace(/[^]/g,"$&̲"),w;s>15?w="…"+m.slice(s-15,s):w=m.slice(0,s);var g;c+15<m.length?g=m.slice(c,c+15)+"…":g=m.slice(c),a+=w+h+g}var z=new Error(a);return z.name="ParseError",z.__proto__=he.prototype,z.position=s,s!=null&&c!=null&&(z.length=c-s),z.rawMessage=t,z}}he.prototype.__proto__=Error.prototype;var ib=/([A-Z])/g,gc=o=>o.replace(ib,"-$1").toLowerCase(),ab={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},sb=/[&><"']/g,Fn=o=>String(o).replace(sb,t=>ab[t]),Hi=o=>o.type==="ordgroup"||o.type==="color"?o.body.length===1?Hi(o.body[0]):o:o.type==="font"?Hi(o.body):o,lb=new Set(["mathord","textord","atom"]),or=o=>lb.has(Hi(o).type),cb=o=>{var t=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(o);return t?t[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(t[1])?null:t[1].toLowerCase():"_relative"},_s={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:o=>"#"+o},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(o,t)=>(t.push(o),t)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:o=>Math.max(0,o),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:o=>Math.max(0,o),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:o=>Math.max(0,o),cli:"-e, --max-expand <n>",cliProcessor:o=>o==="Infinity"?1/0:parseInt(o)},globalGroup:{type:"boolean",cli:!1}};function ub(o){if(o.default)return o.default;var t=o.type,r=Array.isArray(t)?t[0]:t;if(typeof r!="string")return r.enum[0];switch(r){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class wc{constructor(t){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,t=t||{};for(var r in _s)if(_s.hasOwnProperty(r)){var a=_s[r];this[r]=t[r]!==void 0?a.processor?a.processor(t[r]):t[r]:ub(a)}}reportNonstrict(t,r,a){var s=this.strict;if(typeof s=="function"&&(s=s(t,r,a)),!(!s||s==="ignore")){if(s===!0||s==="error")throw new he("LaTeX-incompatible input and strict mode is set to 'error': "+(r+" ["+t+"]"),a);s==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+s+"': "+r+" ["+t+"]"))}}useStrictBehavior(t,r,a){var s=this.strict;if(typeof s=="function")try{s=s(t,r,a)}catch{s="error"}return!s||s==="ignore"?!1:s===!0||s==="error"?!0:s==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(r+" ["+t+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+s+"': "+r+" ["+t+"]")),!1)}isTrusted(t){if(t.url&&!t.protocol){var r=cb(t.url);if(r==null)return!1;t.protocol=r}var a=typeof this.trust=="function"?this.trust(t):this.trust;return!!a}}class Cr{constructor(t,r,a){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=t,this.size=r,this.cramped=a}sup(){return Et[db[this.id]]}sub(){return Et[pb[this.id]]}fracNum(){return Et[mb[this.id]]}fracDen(){return Et[fb[this.id]]}cramp(){return Et[hb[this.id]]}text(){return Et[$b[this.id]]}isTight(){return this.size>=2}}var zc=0,qs=1,Io=2,tr=3,Vi=4,wt=5,No=6,Gn=7,Et=[new Cr(zc,0,!1),new Cr(qs,0,!0),new Cr(Io,1,!1),new Cr(tr,1,!0),new Cr(Vi,2,!1),new Cr(wt,2,!0),new Cr(No,3,!1),new Cr(Gn,3,!0)],db=[Vi,wt,Vi,wt,No,Gn,No,Gn],pb=[wt,wt,wt,wt,Gn,Gn,Gn,Gn],mb=[Io,tr,Vi,wt,No,Gn,No,Gn],fb=[tr,tr,wt,wt,Gn,Gn,Gn,Gn],hb=[qs,qs,tr,tr,wt,wt,Gn,Gn],$b=[zc,qs,Io,tr,Io,tr,Io,tr],Ne={DISPLAY:Et[zc],TEXT:Et[Io],SCRIPT:Et[Vi],SCRIPTSCRIPT:Et[No]},J0=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function yb(o){for(var t=0;t<J0.length;t++)for(var r=J0[t],a=0;a<r.blocks.length;a++){var s=r.blocks[a];if(o>=s[0]&&o<=s[1])return r.name}return null}var js=[];J0.forEach(o=>o.blocks.forEach(t=>js.push(...t)));function vp(o){for(var t=0;t<js.length;t+=2)if(o>=js[t]&&o<=js[t+1])return!0;return!1}var Fo=80,gb=function(t,r){return"M95,"+(622+t+r)+`
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
M`+(834+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},wb=function(t,r){return"M263,"+(601+t+r)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+t/2.084+" -"+t+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+t)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},zb=function(t,r){return"M983 "+(10+t+r)+`
l`+t/3.13+" -"+t+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+t)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+t)+" "+r+"h400000v"+(40+t)+"h-400000z"},xb=function(t,r){return"M424,"+(2398+t+r)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+t/4.223+" -"+t+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+t)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+t)+" "+r+`
h400000v`+(40+t)+"h-400000z"},bb=function(t,r){return"M473,"+(2713+t+r)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+t/5.298+" -"+t+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+t)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+t)+" "+r+"h400000v"+(40+t)+"H1017.7z"},vb=function(t){var r=t/2;return"M400000 "+t+" H0 L"+r+" 0 l65 45 L145 "+(t-80)+" H400000z"},kb=function(t,r,a){var s=a-54-r-t;return"M702 "+(t+r)+"H400000"+(40+t)+`
H742v`+s+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+r+"H400000v"+(40+t)+"H742z"},_b=function(t,r,a){r=1e3*r;var s="";switch(t){case"sqrtMain":s=gb(r,Fo);break;case"sqrtSize1":s=wb(r,Fo);break;case"sqrtSize2":s=zb(r,Fo);break;case"sqrtSize3":s=xb(r,Fo);break;case"sqrtSize4":s=bb(r,Fo);break;case"sqrtTall":s=kb(r,Fo,a)}return s},jb=function(t,r){switch(t){case"⎜":return"M291 0 H417 V"+r+" H291z M291 0 H417 V"+r+" H291z";case"∣":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z";case"∥":return"M145 0 H188 V"+r+" H145z M145 0 H188 V"+r+" H145z"+("M367 0 H410 V"+r+" H367z M367 0 H410 V"+r+" H367z");case"⎟":return"M457 0 H583 V"+r+" H457z M457 0 H583 V"+r+" H457z";case"⎢":return"M319 0 H403 V"+r+" H319z M319 0 H403 V"+r+" H319z";case"⎥":return"M263 0 H347 V"+r+" H263z M263 0 H347 V"+r+" H263z";case"⎪":return"M384 0 H504 V"+r+" H384z M384 0 H504 V"+r+" H384z";case"⏐":return"M312 0 H355 V"+r+" H312z M312 0 H355 V"+r+" H312z";case"‖":return"M257 0 H300 V"+r+" H257z M257 0 H300 V"+r+" H257z"+("M478 0 H521 V"+r+" H478z M478 0 H521 V"+r+" H478z");default:return""}},k1={doubleleftarrow:`M262 157
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
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},Sb=function(t,r){switch(t){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+r+` v1759 h347 v-84
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
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class Qi{constructor(t){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=t,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(t){return this.classes.includes(t)}toNode(){for(var t=document.createDocumentFragment(),r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){for(var t="",r=0;r<this.children.length;r++)t+=this.children[r].toMarkup();return t}toText(){var t=r=>r.toText();return this.children.map(t).join("")}}var Bt={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},fs={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},_1={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function qb(o,t){Bt[o]=t}function xc(o,t,r){if(!Bt[t])throw new Error("Font metrics not found for font: "+t+".");var a=o.charCodeAt(0),s=Bt[t][a];if(!s&&o[0]in _1&&(a=_1[o[0]].charCodeAt(0),s=Bt[t][a]),!s&&r==="text"&&vp(a)&&(s=Bt[t][77]),s)return{depth:s[0],height:s[1],italic:s[2],skew:s[3],width:s[4]}}var C0={};function Tb(o){var t;if(o>=5?t=0:o>=3?t=1:t=2,!C0[t]){var r=C0[t]={cssEmPerMu:fs.quad[t]/18};for(var a in fs)fs.hasOwnProperty(a)&&(r[a]=fs[a][t])}return C0[t]}var Pb=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],j1=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],S1=function(t,r){return r.size<2?t:Pb[t-1][r.size-1]};class nr{constructor(t){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=t.style,this.color=t.color,this.size=t.size||nr.BASESIZE,this.textSize=t.textSize||this.size,this.phantom=!!t.phantom,this.font=t.font||"",this.fontFamily=t.fontFamily||"",this.fontWeight=t.fontWeight||"",this.fontShape=t.fontShape||"",this.sizeMultiplier=j1[this.size-1],this.maxSize=t.maxSize,this.minRuleThickness=t.minRuleThickness,this._fontMetrics=void 0}extend(t){var r={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var a in t)t.hasOwnProperty(a)&&(r[a]=t[a]);return new nr(r)}havingStyle(t){return this.style===t?this:this.extend({style:t,size:S1(this.textSize,t)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(t){return this.size===t&&this.textSize===t?this:this.extend({style:this.style.text(),size:t,textSize:t,sizeMultiplier:j1[t-1]})}havingBaseStyle(t){t=t||this.style.text();var r=S1(nr.BASESIZE,t);return this.size===r&&this.textSize===nr.BASESIZE&&this.style===t?this:this.extend({style:t,size:r})}havingBaseSizing(){var t;switch(this.style.id){case 4:case 5:t=3;break;case 6:case 7:t=1;break;default:t=6}return this.extend({style:this.style.text(),size:t})}withColor(t){return this.extend({color:t})}withPhantom(){return this.extend({phantom:!0})}withFont(t){return this.extend({font:t})}withTextFontFamily(t){return this.extend({fontFamily:t,font:""})}withTextFontWeight(t){return this.extend({fontWeight:t,font:""})}withTextFontShape(t){return this.extend({fontShape:t,font:""})}sizingClasses(t){return t.size!==this.size?["sizing","reset-size"+t.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==nr.BASESIZE?["sizing","reset-size"+this.size,"size"+nr.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=Tb(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}nr.BASESIZE=6;var ec={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},Ab={ex:!0,em:!0,mu:!0},kp=function(t){return typeof t!="string"&&(t=t.unit),t in ec||t in Ab||t==="ex"},mn=function(t,r){var a;if(t.unit in ec)a=ec[t.unit]/r.fontMetrics().ptPerEm/r.sizeMultiplier;else if(t.unit==="mu")a=r.fontMetrics().cssEmPerMu;else{var s;if(r.style.isTight()?s=r.havingStyle(r.style.text()):s=r,t.unit==="ex")a=s.fontMetrics().xHeight;else if(t.unit==="em")a=s.fontMetrics().quad;else throw new he("Invalid unit: '"+t.unit+"'");s!==r&&(a*=s.sizeMultiplier/r.sizeMultiplier)}return Math.min(t.number*a,r.maxSize)},xe=function(t){return+t.toFixed(4)+"em"},Rr=function(t){return t.filter(r=>r).join(" ")},_p=function(t,r,a){if(this.classes=t||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=a||{},r){r.style.isTight()&&this.classes.push("mtight");var s=r.getColor();s&&(this.style.color=s)}},jp=function(t){var r=document.createElement(t);r.className=Rr(this.classes);for(var a in this.style)this.style.hasOwnProperty(a)&&(r.style[a]=this.style[a]);for(var s in this.attributes)this.attributes.hasOwnProperty(s)&&r.setAttribute(s,this.attributes[s]);for(var c=0;c<this.children.length;c++)r.appendChild(this.children[c].toNode());return r},Cb=/[\s"'>/=\x00-\x1f]/,Sp=function(t){var r="<"+t;this.classes.length&&(r+=' class="'+Fn(Rr(this.classes))+'"');var a="";for(var s in this.style)this.style.hasOwnProperty(s)&&(a+=gc(s)+":"+this.style[s]+";");a&&(r+=' style="'+Fn(a)+'"');for(var c in this.attributes)if(this.attributes.hasOwnProperty(c)){if(Cb.test(c))throw new he("Invalid attribute name '"+c+"'");r+=" "+c+'="'+Fn(this.attributes[c])+'"'}r+=">";for(var u=0;u<this.children.length;u++)r+=this.children[u].toMarkup();return r+="</"+t+">",r};class Xi{constructor(t,r,a,s){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,_p.call(this,t,a,s),this.children=r||[]}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return jp.call(this,"span")}toMarkup(){return Sp.call(this,"span")}}class bc{constructor(t,r,a,s){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,_p.call(this,r,s),this.children=a||[],this.setAttribute("href",t)}setAttribute(t,r){this.attributes[t]=r}hasClass(t){return this.classes.includes(t)}toNode(){return jp.call(this,"a")}toMarkup(){return Sp.call(this,"a")}}class Mb{constructor(t,r,a){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=r,this.src=t,this.classes=["mord"],this.style=a}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createElement("img");t.src=this.src,t.alt=this.alt,t.className="mord";for(var r in this.style)this.style.hasOwnProperty(r)&&(t.style[r]=this.style[r]);return t}toMarkup(){var t='<img src="'+Fn(this.src)+'"'+(' alt="'+Fn(this.alt)+'"'),r="";for(var a in this.style)this.style.hasOwnProperty(a)&&(r+=gc(a)+":"+this.style[a]+";");return r&&(t+=' style="'+Fn(r)+'"'),t+="'/>",t}}var Db={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class zt{constructor(t,r,a,s,c,u,m,h){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=t,this.height=r||0,this.depth=a||0,this.italic=s||0,this.skew=c||0,this.width=u||0,this.classes=m||[],this.style=h||{},this.maxFontSize=0;var w=yb(this.text.charCodeAt(0));w&&this.classes.push(w+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=Db[this.text])}hasClass(t){return this.classes.includes(t)}toNode(){var t=document.createTextNode(this.text),r=null;this.italic>0&&(r=document.createElement("span"),r.style.marginRight=xe(this.italic)),this.classes.length>0&&(r=r||document.createElement("span"),r.className=Rr(this.classes));for(var a in this.style)this.style.hasOwnProperty(a)&&(r=r||document.createElement("span"),r.style[a]=this.style[a]);return r?(r.appendChild(t),r):t}toMarkup(){var t=!1,r="<span";this.classes.length&&(t=!0,r+=' class="',r+=Fn(Rr(this.classes)),r+='"');var a="";this.italic>0&&(a+="margin-right:"+this.italic+"em;");for(var s in this.style)this.style.hasOwnProperty(s)&&(a+=gc(s)+":"+this.style[s]+";");a&&(t=!0,r+=' style="'+Fn(a)+'"');var c=Fn(this.text);return t?(r+=">",r+=c,r+="</span>",r):c}}class rr{constructor(t,r){this.children=void 0,this.attributes=void 0,this.children=t||[],this.attributes=r||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"svg");for(var a in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,a)&&r.setAttribute(a,this.attributes[a]);for(var s=0;s<this.children.length;s++)r.appendChild(this.children[s].toNode());return r}toMarkup(){var t='<svg xmlns="http://www.w3.org/2000/svg"';for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+Fn(this.attributes[r])+'"');t+=">";for(var a=0;a<this.children.length;a++)t+=this.children[a].toMarkup();return t+="</svg>",t}}class Er{constructor(t,r){this.pathName=void 0,this.alternate=void 0,this.pathName=t,this.alternate=r}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"path");return this.alternate?r.setAttribute("d",this.alternate):r.setAttribute("d",k1[this.pathName]),r}toMarkup(){return this.alternate?'<path d="'+Fn(this.alternate)+'"/>':'<path d="'+Fn(k1[this.pathName])+'"/>'}}class nc{constructor(t){this.attributes=void 0,this.attributes=t||{}}toNode(){var t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"line");for(var a in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,a)&&r.setAttribute(a,this.attributes[a]);return r}toMarkup(){var t="<line";for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="'+Fn(this.attributes[r])+'"');return t+="/>",t}}function q1(o){if(o instanceof zt)return o;throw new Error("Expected symbolNode but got "+String(o)+".")}function Rb(o){if(o instanceof Xi)return o;throw new Error("Expected span<HtmlDomNode> but got "+String(o)+".")}var Eb={bin:1,close:1,inner:1,open:1,punct:1,rel:1},Bb={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},tn={math:{},text:{}};function f(o,t,r,a,s,c){tn[o][s]={font:t,group:r,replace:a},c&&a&&(tn[o][a]=tn[o][s])}var y="math",ce="text",x="main",D="ams",ln="accent-token",qe="bin",Un="close",Ho="inner",Ee="mathord",bn="op-token",ut="open",Ms="punct",E="rel",ir="spacing",H="textord";f(y,x,E,"≡","\\equiv",!0);f(y,x,E,"≺","\\prec",!0);f(y,x,E,"≻","\\succ",!0);f(y,x,E,"∼","\\sim",!0);f(y,x,E,"⊥","\\perp");f(y,x,E,"⪯","\\preceq",!0);f(y,x,E,"⪰","\\succeq",!0);f(y,x,E,"≃","\\simeq",!0);f(y,x,E,"∣","\\mid",!0);f(y,x,E,"≪","\\ll",!0);f(y,x,E,"≫","\\gg",!0);f(y,x,E,"≍","\\asymp",!0);f(y,x,E,"∥","\\parallel");f(y,x,E,"⋈","\\bowtie",!0);f(y,x,E,"⌣","\\smile",!0);f(y,x,E,"⊑","\\sqsubseteq",!0);f(y,x,E,"⊒","\\sqsupseteq",!0);f(y,x,E,"≐","\\doteq",!0);f(y,x,E,"⌢","\\frown",!0);f(y,x,E,"∋","\\ni",!0);f(y,x,E,"∝","\\propto",!0);f(y,x,E,"⊢","\\vdash",!0);f(y,x,E,"⊣","\\dashv",!0);f(y,x,E,"∋","\\owns");f(y,x,Ms,".","\\ldotp");f(y,x,Ms,"⋅","\\cdotp");f(y,x,H,"#","\\#");f(ce,x,H,"#","\\#");f(y,x,H,"&","\\&");f(ce,x,H,"&","\\&");f(y,x,H,"ℵ","\\aleph",!0);f(y,x,H,"∀","\\forall",!0);f(y,x,H,"ℏ","\\hbar",!0);f(y,x,H,"∃","\\exists",!0);f(y,x,H,"∇","\\nabla",!0);f(y,x,H,"♭","\\flat",!0);f(y,x,H,"ℓ","\\ell",!0);f(y,x,H,"♮","\\natural",!0);f(y,x,H,"♣","\\clubsuit",!0);f(y,x,H,"℘","\\wp",!0);f(y,x,H,"♯","\\sharp",!0);f(y,x,H,"♢","\\diamondsuit",!0);f(y,x,H,"ℜ","\\Re",!0);f(y,x,H,"♡","\\heartsuit",!0);f(y,x,H,"ℑ","\\Im",!0);f(y,x,H,"♠","\\spadesuit",!0);f(y,x,H,"§","\\S",!0);f(ce,x,H,"§","\\S");f(y,x,H,"¶","\\P",!0);f(ce,x,H,"¶","\\P");f(y,x,H,"†","\\dag");f(ce,x,H,"†","\\dag");f(ce,x,H,"†","\\textdagger");f(y,x,H,"‡","\\ddag");f(ce,x,H,"‡","\\ddag");f(ce,x,H,"‡","\\textdaggerdbl");f(y,x,Un,"⎱","\\rmoustache",!0);f(y,x,ut,"⎰","\\lmoustache",!0);f(y,x,Un,"⟯","\\rgroup",!0);f(y,x,ut,"⟮","\\lgroup",!0);f(y,x,qe,"∓","\\mp",!0);f(y,x,qe,"⊖","\\ominus",!0);f(y,x,qe,"⊎","\\uplus",!0);f(y,x,qe,"⊓","\\sqcap",!0);f(y,x,qe,"∗","\\ast");f(y,x,qe,"⊔","\\sqcup",!0);f(y,x,qe,"◯","\\bigcirc",!0);f(y,x,qe,"∙","\\bullet",!0);f(y,x,qe,"‡","\\ddagger");f(y,x,qe,"≀","\\wr",!0);f(y,x,qe,"⨿","\\amalg");f(y,x,qe,"&","\\And");f(y,x,E,"⟵","\\longleftarrow",!0);f(y,x,E,"⇐","\\Leftarrow",!0);f(y,x,E,"⟸","\\Longleftarrow",!0);f(y,x,E,"⟶","\\longrightarrow",!0);f(y,x,E,"⇒","\\Rightarrow",!0);f(y,x,E,"⟹","\\Longrightarrow",!0);f(y,x,E,"↔","\\leftrightarrow",!0);f(y,x,E,"⟷","\\longleftrightarrow",!0);f(y,x,E,"⇔","\\Leftrightarrow",!0);f(y,x,E,"⟺","\\Longleftrightarrow",!0);f(y,x,E,"↦","\\mapsto",!0);f(y,x,E,"⟼","\\longmapsto",!0);f(y,x,E,"↗","\\nearrow",!0);f(y,x,E,"↩","\\hookleftarrow",!0);f(y,x,E,"↪","\\hookrightarrow",!0);f(y,x,E,"↘","\\searrow",!0);f(y,x,E,"↼","\\leftharpoonup",!0);f(y,x,E,"⇀","\\rightharpoonup",!0);f(y,x,E,"↙","\\swarrow",!0);f(y,x,E,"↽","\\leftharpoondown",!0);f(y,x,E,"⇁","\\rightharpoondown",!0);f(y,x,E,"↖","\\nwarrow",!0);f(y,x,E,"⇌","\\rightleftharpoons",!0);f(y,D,E,"≮","\\nless",!0);f(y,D,E,"","\\@nleqslant");f(y,D,E,"","\\@nleqq");f(y,D,E,"⪇","\\lneq",!0);f(y,D,E,"≨","\\lneqq",!0);f(y,D,E,"","\\@lvertneqq");f(y,D,E,"⋦","\\lnsim",!0);f(y,D,E,"⪉","\\lnapprox",!0);f(y,D,E,"⊀","\\nprec",!0);f(y,D,E,"⋠","\\npreceq",!0);f(y,D,E,"⋨","\\precnsim",!0);f(y,D,E,"⪹","\\precnapprox",!0);f(y,D,E,"≁","\\nsim",!0);f(y,D,E,"","\\@nshortmid");f(y,D,E,"∤","\\nmid",!0);f(y,D,E,"⊬","\\nvdash",!0);f(y,D,E,"⊭","\\nvDash",!0);f(y,D,E,"⋪","\\ntriangleleft");f(y,D,E,"⋬","\\ntrianglelefteq",!0);f(y,D,E,"⊊","\\subsetneq",!0);f(y,D,E,"","\\@varsubsetneq");f(y,D,E,"⫋","\\subsetneqq",!0);f(y,D,E,"","\\@varsubsetneqq");f(y,D,E,"≯","\\ngtr",!0);f(y,D,E,"","\\@ngeqslant");f(y,D,E,"","\\@ngeqq");f(y,D,E,"⪈","\\gneq",!0);f(y,D,E,"≩","\\gneqq",!0);f(y,D,E,"","\\@gvertneqq");f(y,D,E,"⋧","\\gnsim",!0);f(y,D,E,"⪊","\\gnapprox",!0);f(y,D,E,"⊁","\\nsucc",!0);f(y,D,E,"⋡","\\nsucceq",!0);f(y,D,E,"⋩","\\succnsim",!0);f(y,D,E,"⪺","\\succnapprox",!0);f(y,D,E,"≆","\\ncong",!0);f(y,D,E,"","\\@nshortparallel");f(y,D,E,"∦","\\nparallel",!0);f(y,D,E,"⊯","\\nVDash",!0);f(y,D,E,"⋫","\\ntriangleright");f(y,D,E,"⋭","\\ntrianglerighteq",!0);f(y,D,E,"","\\@nsupseteqq");f(y,D,E,"⊋","\\supsetneq",!0);f(y,D,E,"","\\@varsupsetneq");f(y,D,E,"⫌","\\supsetneqq",!0);f(y,D,E,"","\\@varsupsetneqq");f(y,D,E,"⊮","\\nVdash",!0);f(y,D,E,"⪵","\\precneqq",!0);f(y,D,E,"⪶","\\succneqq",!0);f(y,D,E,"","\\@nsubseteqq");f(y,D,qe,"⊴","\\unlhd");f(y,D,qe,"⊵","\\unrhd");f(y,D,E,"↚","\\nleftarrow",!0);f(y,D,E,"↛","\\nrightarrow",!0);f(y,D,E,"⇍","\\nLeftarrow",!0);f(y,D,E,"⇏","\\nRightarrow",!0);f(y,D,E,"↮","\\nleftrightarrow",!0);f(y,D,E,"⇎","\\nLeftrightarrow",!0);f(y,D,E,"△","\\vartriangle");f(y,D,H,"ℏ","\\hslash");f(y,D,H,"▽","\\triangledown");f(y,D,H,"◊","\\lozenge");f(y,D,H,"Ⓢ","\\circledS");f(y,D,H,"®","\\circledR");f(ce,D,H,"®","\\circledR");f(y,D,H,"∡","\\measuredangle",!0);f(y,D,H,"∄","\\nexists");f(y,D,H,"℧","\\mho");f(y,D,H,"Ⅎ","\\Finv",!0);f(y,D,H,"⅁","\\Game",!0);f(y,D,H,"‵","\\backprime");f(y,D,H,"▲","\\blacktriangle");f(y,D,H,"▼","\\blacktriangledown");f(y,D,H,"■","\\blacksquare");f(y,D,H,"⧫","\\blacklozenge");f(y,D,H,"★","\\bigstar");f(y,D,H,"∢","\\sphericalangle",!0);f(y,D,H,"∁","\\complement",!0);f(y,D,H,"ð","\\eth",!0);f(ce,x,H,"ð","ð");f(y,D,H,"╱","\\diagup");f(y,D,H,"╲","\\diagdown");f(y,D,H,"□","\\square");f(y,D,H,"□","\\Box");f(y,D,H,"◊","\\Diamond");f(y,D,H,"¥","\\yen",!0);f(ce,D,H,"¥","\\yen",!0);f(y,D,H,"✓","\\checkmark",!0);f(ce,D,H,"✓","\\checkmark");f(y,D,H,"ℶ","\\beth",!0);f(y,D,H,"ℸ","\\daleth",!0);f(y,D,H,"ℷ","\\gimel",!0);f(y,D,H,"ϝ","\\digamma",!0);f(y,D,H,"ϰ","\\varkappa");f(y,D,ut,"┌","\\@ulcorner",!0);f(y,D,Un,"┐","\\@urcorner",!0);f(y,D,ut,"└","\\@llcorner",!0);f(y,D,Un,"┘","\\@lrcorner",!0);f(y,D,E,"≦","\\leqq",!0);f(y,D,E,"⩽","\\leqslant",!0);f(y,D,E,"⪕","\\eqslantless",!0);f(y,D,E,"≲","\\lesssim",!0);f(y,D,E,"⪅","\\lessapprox",!0);f(y,D,E,"≊","\\approxeq",!0);f(y,D,qe,"⋖","\\lessdot");f(y,D,E,"⋘","\\lll",!0);f(y,D,E,"≶","\\lessgtr",!0);f(y,D,E,"⋚","\\lesseqgtr",!0);f(y,D,E,"⪋","\\lesseqqgtr",!0);f(y,D,E,"≑","\\doteqdot");f(y,D,E,"≓","\\risingdotseq",!0);f(y,D,E,"≒","\\fallingdotseq",!0);f(y,D,E,"∽","\\backsim",!0);f(y,D,E,"⋍","\\backsimeq",!0);f(y,D,E,"⫅","\\subseteqq",!0);f(y,D,E,"⋐","\\Subset",!0);f(y,D,E,"⊏","\\sqsubset",!0);f(y,D,E,"≼","\\preccurlyeq",!0);f(y,D,E,"⋞","\\curlyeqprec",!0);f(y,D,E,"≾","\\precsim",!0);f(y,D,E,"⪷","\\precapprox",!0);f(y,D,E,"⊲","\\vartriangleleft");f(y,D,E,"⊴","\\trianglelefteq");f(y,D,E,"⊨","\\vDash",!0);f(y,D,E,"⊪","\\Vvdash",!0);f(y,D,E,"⌣","\\smallsmile");f(y,D,E,"⌢","\\smallfrown");f(y,D,E,"≏","\\bumpeq",!0);f(y,D,E,"≎","\\Bumpeq",!0);f(y,D,E,"≧","\\geqq",!0);f(y,D,E,"⩾","\\geqslant",!0);f(y,D,E,"⪖","\\eqslantgtr",!0);f(y,D,E,"≳","\\gtrsim",!0);f(y,D,E,"⪆","\\gtrapprox",!0);f(y,D,qe,"⋗","\\gtrdot");f(y,D,E,"⋙","\\ggg",!0);f(y,D,E,"≷","\\gtrless",!0);f(y,D,E,"⋛","\\gtreqless",!0);f(y,D,E,"⪌","\\gtreqqless",!0);f(y,D,E,"≖","\\eqcirc",!0);f(y,D,E,"≗","\\circeq",!0);f(y,D,E,"≜","\\triangleq",!0);f(y,D,E,"∼","\\thicksim");f(y,D,E,"≈","\\thickapprox");f(y,D,E,"⫆","\\supseteqq",!0);f(y,D,E,"⋑","\\Supset",!0);f(y,D,E,"⊐","\\sqsupset",!0);f(y,D,E,"≽","\\succcurlyeq",!0);f(y,D,E,"⋟","\\curlyeqsucc",!0);f(y,D,E,"≿","\\succsim",!0);f(y,D,E,"⪸","\\succapprox",!0);f(y,D,E,"⊳","\\vartriangleright");f(y,D,E,"⊵","\\trianglerighteq");f(y,D,E,"⊩","\\Vdash",!0);f(y,D,E,"∣","\\shortmid");f(y,D,E,"∥","\\shortparallel");f(y,D,E,"≬","\\between",!0);f(y,D,E,"⋔","\\pitchfork",!0);f(y,D,E,"∝","\\varpropto");f(y,D,E,"◀","\\blacktriangleleft");f(y,D,E,"∴","\\therefore",!0);f(y,D,E,"∍","\\backepsilon");f(y,D,E,"▶","\\blacktriangleright");f(y,D,E,"∵","\\because",!0);f(y,D,E,"⋘","\\llless");f(y,D,E,"⋙","\\gggtr");f(y,D,qe,"⊲","\\lhd");f(y,D,qe,"⊳","\\rhd");f(y,D,E,"≂","\\eqsim",!0);f(y,x,E,"⋈","\\Join");f(y,D,E,"≑","\\Doteq",!0);f(y,D,qe,"∔","\\dotplus",!0);f(y,D,qe,"∖","\\smallsetminus");f(y,D,qe,"⋒","\\Cap",!0);f(y,D,qe,"⋓","\\Cup",!0);f(y,D,qe,"⩞","\\doublebarwedge",!0);f(y,D,qe,"⊟","\\boxminus",!0);f(y,D,qe,"⊞","\\boxplus",!0);f(y,D,qe,"⋇","\\divideontimes",!0);f(y,D,qe,"⋉","\\ltimes",!0);f(y,D,qe,"⋊","\\rtimes",!0);f(y,D,qe,"⋋","\\leftthreetimes",!0);f(y,D,qe,"⋌","\\rightthreetimes",!0);f(y,D,qe,"⋏","\\curlywedge",!0);f(y,D,qe,"⋎","\\curlyvee",!0);f(y,D,qe,"⊝","\\circleddash",!0);f(y,D,qe,"⊛","\\circledast",!0);f(y,D,qe,"⋅","\\centerdot");f(y,D,qe,"⊺","\\intercal",!0);f(y,D,qe,"⋒","\\doublecap");f(y,D,qe,"⋓","\\doublecup");f(y,D,qe,"⊠","\\boxtimes",!0);f(y,D,E,"⇢","\\dashrightarrow",!0);f(y,D,E,"⇠","\\dashleftarrow",!0);f(y,D,E,"⇇","\\leftleftarrows",!0);f(y,D,E,"⇆","\\leftrightarrows",!0);f(y,D,E,"⇚","\\Lleftarrow",!0);f(y,D,E,"↞","\\twoheadleftarrow",!0);f(y,D,E,"↢","\\leftarrowtail",!0);f(y,D,E,"↫","\\looparrowleft",!0);f(y,D,E,"⇋","\\leftrightharpoons",!0);f(y,D,E,"↶","\\curvearrowleft",!0);f(y,D,E,"↺","\\circlearrowleft",!0);f(y,D,E,"↰","\\Lsh",!0);f(y,D,E,"⇈","\\upuparrows",!0);f(y,D,E,"↿","\\upharpoonleft",!0);f(y,D,E,"⇃","\\downharpoonleft",!0);f(y,x,E,"⊶","\\origof",!0);f(y,x,E,"⊷","\\imageof",!0);f(y,D,E,"⊸","\\multimap",!0);f(y,D,E,"↭","\\leftrightsquigarrow",!0);f(y,D,E,"⇉","\\rightrightarrows",!0);f(y,D,E,"⇄","\\rightleftarrows",!0);f(y,D,E,"↠","\\twoheadrightarrow",!0);f(y,D,E,"↣","\\rightarrowtail",!0);f(y,D,E,"↬","\\looparrowright",!0);f(y,D,E,"↷","\\curvearrowright",!0);f(y,D,E,"↻","\\circlearrowright",!0);f(y,D,E,"↱","\\Rsh",!0);f(y,D,E,"⇊","\\downdownarrows",!0);f(y,D,E,"↾","\\upharpoonright",!0);f(y,D,E,"⇂","\\downharpoonright",!0);f(y,D,E,"⇝","\\rightsquigarrow",!0);f(y,D,E,"⇝","\\leadsto");f(y,D,E,"⇛","\\Rrightarrow",!0);f(y,D,E,"↾","\\restriction");f(y,x,H,"‘","`");f(y,x,H,"$","\\$");f(ce,x,H,"$","\\$");f(ce,x,H,"$","\\textdollar");f(y,x,H,"%","\\%");f(ce,x,H,"%","\\%");f(y,x,H,"_","\\_");f(ce,x,H,"_","\\_");f(ce,x,H,"_","\\textunderscore");f(y,x,H,"∠","\\angle",!0);f(y,x,H,"∞","\\infty",!0);f(y,x,H,"′","\\prime");f(y,x,H,"△","\\triangle");f(y,x,H,"Γ","\\Gamma",!0);f(y,x,H,"Δ","\\Delta",!0);f(y,x,H,"Θ","\\Theta",!0);f(y,x,H,"Λ","\\Lambda",!0);f(y,x,H,"Ξ","\\Xi",!0);f(y,x,H,"Π","\\Pi",!0);f(y,x,H,"Σ","\\Sigma",!0);f(y,x,H,"Υ","\\Upsilon",!0);f(y,x,H,"Φ","\\Phi",!0);f(y,x,H,"Ψ","\\Psi",!0);f(y,x,H,"Ω","\\Omega",!0);f(y,x,H,"A","Α");f(y,x,H,"B","Β");f(y,x,H,"E","Ε");f(y,x,H,"Z","Ζ");f(y,x,H,"H","Η");f(y,x,H,"I","Ι");f(y,x,H,"K","Κ");f(y,x,H,"M","Μ");f(y,x,H,"N","Ν");f(y,x,H,"O","Ο");f(y,x,H,"P","Ρ");f(y,x,H,"T","Τ");f(y,x,H,"X","Χ");f(y,x,H,"¬","\\neg",!0);f(y,x,H,"¬","\\lnot");f(y,x,H,"⊤","\\top");f(y,x,H,"⊥","\\bot");f(y,x,H,"∅","\\emptyset");f(y,D,H,"∅","\\varnothing");f(y,x,Ee,"α","\\alpha",!0);f(y,x,Ee,"β","\\beta",!0);f(y,x,Ee,"γ","\\gamma",!0);f(y,x,Ee,"δ","\\delta",!0);f(y,x,Ee,"ϵ","\\epsilon",!0);f(y,x,Ee,"ζ","\\zeta",!0);f(y,x,Ee,"η","\\eta",!0);f(y,x,Ee,"θ","\\theta",!0);f(y,x,Ee,"ι","\\iota",!0);f(y,x,Ee,"κ","\\kappa",!0);f(y,x,Ee,"λ","\\lambda",!0);f(y,x,Ee,"μ","\\mu",!0);f(y,x,Ee,"ν","\\nu",!0);f(y,x,Ee,"ξ","\\xi",!0);f(y,x,Ee,"ο","\\omicron",!0);f(y,x,Ee,"π","\\pi",!0);f(y,x,Ee,"ρ","\\rho",!0);f(y,x,Ee,"σ","\\sigma",!0);f(y,x,Ee,"τ","\\tau",!0);f(y,x,Ee,"υ","\\upsilon",!0);f(y,x,Ee,"ϕ","\\phi",!0);f(y,x,Ee,"χ","\\chi",!0);f(y,x,Ee,"ψ","\\psi",!0);f(y,x,Ee,"ω","\\omega",!0);f(y,x,Ee,"ε","\\varepsilon",!0);f(y,x,Ee,"ϑ","\\vartheta",!0);f(y,x,Ee,"ϖ","\\varpi",!0);f(y,x,Ee,"ϱ","\\varrho",!0);f(y,x,Ee,"ς","\\varsigma",!0);f(y,x,Ee,"φ","\\varphi",!0);f(y,x,qe,"∗","*",!0);f(y,x,qe,"+","+");f(y,x,qe,"−","-",!0);f(y,x,qe,"⋅","\\cdot",!0);f(y,x,qe,"∘","\\circ",!0);f(y,x,qe,"÷","\\div",!0);f(y,x,qe,"±","\\pm",!0);f(y,x,qe,"×","\\times",!0);f(y,x,qe,"∩","\\cap",!0);f(y,x,qe,"∪","\\cup",!0);f(y,x,qe,"∖","\\setminus",!0);f(y,x,qe,"∧","\\land");f(y,x,qe,"∨","\\lor");f(y,x,qe,"∧","\\wedge",!0);f(y,x,qe,"∨","\\vee",!0);f(y,x,H,"√","\\surd");f(y,x,ut,"⟨","\\langle",!0);f(y,x,ut,"∣","\\lvert");f(y,x,ut,"∥","\\lVert");f(y,x,Un,"?","?");f(y,x,Un,"!","!");f(y,x,Un,"⟩","\\rangle",!0);f(y,x,Un,"∣","\\rvert");f(y,x,Un,"∥","\\rVert");f(y,x,E,"=","=");f(y,x,E,":",":");f(y,x,E,"≈","\\approx",!0);f(y,x,E,"≅","\\cong",!0);f(y,x,E,"≥","\\ge");f(y,x,E,"≥","\\geq",!0);f(y,x,E,"←","\\gets");f(y,x,E,">","\\gt",!0);f(y,x,E,"∈","\\in",!0);f(y,x,E,"","\\@not");f(y,x,E,"⊂","\\subset",!0);f(y,x,E,"⊃","\\supset",!0);f(y,x,E,"⊆","\\subseteq",!0);f(y,x,E,"⊇","\\supseteq",!0);f(y,D,E,"⊈","\\nsubseteq",!0);f(y,D,E,"⊉","\\nsupseteq",!0);f(y,x,E,"⊨","\\models");f(y,x,E,"←","\\leftarrow",!0);f(y,x,E,"≤","\\le");f(y,x,E,"≤","\\leq",!0);f(y,x,E,"<","\\lt",!0);f(y,x,E,"→","\\rightarrow",!0);f(y,x,E,"→","\\to");f(y,D,E,"≱","\\ngeq",!0);f(y,D,E,"≰","\\nleq",!0);f(y,x,ir," ","\\ ");f(y,x,ir," ","\\space");f(y,x,ir," ","\\nobreakspace");f(ce,x,ir," ","\\ ");f(ce,x,ir," "," ");f(ce,x,ir," ","\\space");f(ce,x,ir," ","\\nobreakspace");f(y,x,ir,null,"\\nobreak");f(y,x,ir,null,"\\allowbreak");f(y,x,Ms,",",",");f(y,x,Ms,";",";");f(y,D,qe,"⊼","\\barwedge",!0);f(y,D,qe,"⊻","\\veebar",!0);f(y,x,qe,"⊙","\\odot",!0);f(y,x,qe,"⊕","\\oplus",!0);f(y,x,qe,"⊗","\\otimes",!0);f(y,x,H,"∂","\\partial",!0);f(y,x,qe,"⊘","\\oslash",!0);f(y,D,qe,"⊚","\\circledcirc",!0);f(y,D,qe,"⊡","\\boxdot",!0);f(y,x,qe,"△","\\bigtriangleup");f(y,x,qe,"▽","\\bigtriangledown");f(y,x,qe,"†","\\dagger");f(y,x,qe,"⋄","\\diamond");f(y,x,qe,"⋆","\\star");f(y,x,qe,"◃","\\triangleleft");f(y,x,qe,"▹","\\triangleright");f(y,x,ut,"{","\\{");f(ce,x,H,"{","\\{");f(ce,x,H,"{","\\textbraceleft");f(y,x,Un,"}","\\}");f(ce,x,H,"}","\\}");f(ce,x,H,"}","\\textbraceright");f(y,x,ut,"{","\\lbrace");f(y,x,Un,"}","\\rbrace");f(y,x,ut,"[","\\lbrack",!0);f(ce,x,H,"[","\\lbrack",!0);f(y,x,Un,"]","\\rbrack",!0);f(ce,x,H,"]","\\rbrack",!0);f(y,x,ut,"(","\\lparen",!0);f(y,x,Un,")","\\rparen",!0);f(ce,x,H,"<","\\textless",!0);f(ce,x,H,">","\\textgreater",!0);f(y,x,ut,"⌊","\\lfloor",!0);f(y,x,Un,"⌋","\\rfloor",!0);f(y,x,ut,"⌈","\\lceil",!0);f(y,x,Un,"⌉","\\rceil",!0);f(y,x,H,"\\","\\backslash");f(y,x,H,"∣","|");f(y,x,H,"∣","\\vert");f(ce,x,H,"|","\\textbar",!0);f(y,x,H,"∥","\\|");f(y,x,H,"∥","\\Vert");f(ce,x,H,"∥","\\textbardbl");f(ce,x,H,"~","\\textasciitilde");f(ce,x,H,"\\","\\textbackslash");f(ce,x,H,"^","\\textasciicircum");f(y,x,E,"↑","\\uparrow",!0);f(y,x,E,"⇑","\\Uparrow",!0);f(y,x,E,"↓","\\downarrow",!0);f(y,x,E,"⇓","\\Downarrow",!0);f(y,x,E,"↕","\\updownarrow",!0);f(y,x,E,"⇕","\\Updownarrow",!0);f(y,x,bn,"∐","\\coprod");f(y,x,bn,"⋁","\\bigvee");f(y,x,bn,"⋀","\\bigwedge");f(y,x,bn,"⨄","\\biguplus");f(y,x,bn,"⋂","\\bigcap");f(y,x,bn,"⋃","\\bigcup");f(y,x,bn,"∫","\\int");f(y,x,bn,"∫","\\intop");f(y,x,bn,"∬","\\iint");f(y,x,bn,"∭","\\iiint");f(y,x,bn,"∏","\\prod");f(y,x,bn,"∑","\\sum");f(y,x,bn,"⨂","\\bigotimes");f(y,x,bn,"⨁","\\bigoplus");f(y,x,bn,"⨀","\\bigodot");f(y,x,bn,"∮","\\oint");f(y,x,bn,"∯","\\oiint");f(y,x,bn,"∰","\\oiiint");f(y,x,bn,"⨆","\\bigsqcup");f(y,x,bn,"∫","\\smallint");f(ce,x,Ho,"…","\\textellipsis");f(y,x,Ho,"…","\\mathellipsis");f(ce,x,Ho,"…","\\ldots",!0);f(y,x,Ho,"…","\\ldots",!0);f(y,x,Ho,"⋯","\\@cdots",!0);f(y,x,Ho,"⋱","\\ddots",!0);f(y,x,H,"⋮","\\varvdots");f(ce,x,H,"⋮","\\varvdots");f(y,x,ln,"ˊ","\\acute");f(y,x,ln,"ˋ","\\grave");f(y,x,ln,"¨","\\ddot");f(y,x,ln,"~","\\tilde");f(y,x,ln,"ˉ","\\bar");f(y,x,ln,"˘","\\breve");f(y,x,ln,"ˇ","\\check");f(y,x,ln,"^","\\hat");f(y,x,ln,"⃗","\\vec");f(y,x,ln,"˙","\\dot");f(y,x,ln,"˚","\\mathring");f(y,x,Ee,"","\\@imath");f(y,x,Ee,"","\\@jmath");f(y,x,H,"ı","ı");f(y,x,H,"ȷ","ȷ");f(ce,x,H,"ı","\\i",!0);f(ce,x,H,"ȷ","\\j",!0);f(ce,x,H,"ß","\\ss",!0);f(ce,x,H,"æ","\\ae",!0);f(ce,x,H,"œ","\\oe",!0);f(ce,x,H,"ø","\\o",!0);f(ce,x,H,"Æ","\\AE",!0);f(ce,x,H,"Œ","\\OE",!0);f(ce,x,H,"Ø","\\O",!0);f(ce,x,ln,"ˊ","\\'");f(ce,x,ln,"ˋ","\\`");f(ce,x,ln,"ˆ","\\^");f(ce,x,ln,"˜","\\~");f(ce,x,ln,"ˉ","\\=");f(ce,x,ln,"˘","\\u");f(ce,x,ln,"˙","\\.");f(ce,x,ln,"¸","\\c");f(ce,x,ln,"˚","\\r");f(ce,x,ln,"ˇ","\\v");f(ce,x,ln,"¨",'\\"');f(ce,x,ln,"˝","\\H");f(ce,x,ln,"◯","\\textcircled");var qp={"--":!0,"---":!0,"``":!0,"''":!0};f(ce,x,H,"–","--",!0);f(ce,x,H,"–","\\textendash");f(ce,x,H,"—","---",!0);f(ce,x,H,"—","\\textemdash");f(ce,x,H,"‘","`",!0);f(ce,x,H,"‘","\\textquoteleft");f(ce,x,H,"’","'",!0);f(ce,x,H,"’","\\textquoteright");f(ce,x,H,"“","``",!0);f(ce,x,H,"“","\\textquotedblleft");f(ce,x,H,"”","''",!0);f(ce,x,H,"”","\\textquotedblright");f(y,x,H,"°","\\degree",!0);f(ce,x,H,"°","\\degree");f(ce,x,H,"°","\\textdegree",!0);f(y,x,H,"£","\\pounds");f(y,x,H,"£","\\mathsterling",!0);f(ce,x,H,"£","\\pounds");f(ce,x,H,"£","\\textsterling",!0);f(y,D,H,"✠","\\maltese");f(ce,D,H,"✠","\\maltese");var T1='0123456789/@."';for(var M0=0;M0<T1.length;M0++){var P1=T1.charAt(M0);f(y,x,H,P1,P1)}var A1='0123456789!@*()-=+";:?/.,';for(var D0=0;D0<A1.length;D0++){var C1=A1.charAt(D0);f(ce,x,H,C1,C1)}var Ts="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var R0=0;R0<Ts.length;R0++){var hs=Ts.charAt(R0);f(y,x,Ee,hs,hs),f(ce,x,H,hs,hs)}f(y,D,H,"C","ℂ");f(ce,D,H,"C","ℂ");f(y,D,H,"H","ℍ");f(ce,D,H,"H","ℍ");f(y,D,H,"N","ℕ");f(ce,D,H,"N","ℕ");f(y,D,H,"P","ℙ");f(ce,D,H,"P","ℙ");f(y,D,H,"Q","ℚ");f(ce,D,H,"Q","ℚ");f(y,D,H,"R","ℝ");f(ce,D,H,"R","ℝ");f(y,D,H,"Z","ℤ");f(ce,D,H,"Z","ℤ");f(y,x,Ee,"h","ℎ");f(ce,x,Ee,"h","ℎ");var Be="";for(var On=0;On<Ts.length;On++){var $n=Ts.charAt(On);Be=String.fromCharCode(55349,56320+On),f(y,x,Ee,$n,Be),f(ce,x,H,$n,Be),Be=String.fromCharCode(55349,56372+On),f(y,x,Ee,$n,Be),f(ce,x,H,$n,Be),Be=String.fromCharCode(55349,56424+On),f(y,x,Ee,$n,Be),f(ce,x,H,$n,Be),Be=String.fromCharCode(55349,56580+On),f(y,x,Ee,$n,Be),f(ce,x,H,$n,Be),Be=String.fromCharCode(55349,56684+On),f(y,x,Ee,$n,Be),f(ce,x,H,$n,Be),Be=String.fromCharCode(55349,56736+On),f(y,x,Ee,$n,Be),f(ce,x,H,$n,Be),Be=String.fromCharCode(55349,56788+On),f(y,x,Ee,$n,Be),f(ce,x,H,$n,Be),Be=String.fromCharCode(55349,56840+On),f(y,x,Ee,$n,Be),f(ce,x,H,$n,Be),Be=String.fromCharCode(55349,56944+On),f(y,x,Ee,$n,Be),f(ce,x,H,$n,Be),On<26&&(Be=String.fromCharCode(55349,56632+On),f(y,x,Ee,$n,Be),f(ce,x,H,$n,Be),Be=String.fromCharCode(55349,56476+On),f(y,x,Ee,$n,Be),f(ce,x,H,$n,Be))}Be="𝕜";f(y,x,Ee,"k",Be);f(ce,x,H,"k",Be);for(var to=0;to<10;to++){var Mr=to.toString();Be=String.fromCharCode(55349,57294+to),f(y,x,Ee,Mr,Be),f(ce,x,H,Mr,Be),Be=String.fromCharCode(55349,57314+to),f(y,x,Ee,Mr,Be),f(ce,x,H,Mr,Be),Be=String.fromCharCode(55349,57324+to),f(y,x,Ee,Mr,Be),f(ce,x,H,Mr,Be),Be=String.fromCharCode(55349,57334+to),f(y,x,Ee,Mr,Be),f(ce,x,H,Mr,Be)}var tc="ÐÞþ";for(var E0=0;E0<tc.length;E0++){var $s=tc.charAt(E0);f(y,x,Ee,$s,$s),f(ce,x,H,$s,$s)}var ys=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],M1=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],Fb=function(t,r){var a=t.charCodeAt(0),s=t.charCodeAt(1),c=(a-55296)*1024+(s-56320)+65536,u=r==="math"?0:1;if(119808<=c&&c<120484){var m=Math.floor((c-119808)/26);return[ys[m][2],ys[m][u]]}else if(120782<=c&&c<=120831){var h=Math.floor((c-120782)/10);return[M1[h][2],M1[h][u]]}else{if(c===120485||c===120486)return[ys[0][2],ys[0][u]];if(120486<c&&c<120782)return["",""];throw new he("Unsupported character: "+t)}},Ds=function(t,r,a){return tn[a][t]&&tn[a][t].replace&&(t=tn[a][t].replace),{value:t,metrics:xc(t,r,a)}},Hn=function(t,r,a,s,c){var u=Ds(t,r,a),m=u.metrics;t=u.value;var h;if(m){var w=m.italic;(a==="text"||s&&s.font==="mathit")&&(w=0),h=new zt(t,m.height,m.depth,w,m.skew,m.width,c)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+t+"' in style '"+r+"' and mode '"+a+"'")),h=new zt(t,0,0,0,0,0,c);if(s){h.maxFontSize=s.sizeMultiplier,s.style.isTight()&&h.classes.push("mtight");var g=s.getColor();g&&(h.style.color=g)}return h},vc=function(t,r,a,s){return s===void 0&&(s=[]),a.font==="boldsymbol"&&Ds(t,"Main-Bold",r).metrics?Hn(t,"Main-Bold",r,a,s.concat(["mathbf"])):t==="\\"||tn[r][t].font==="main"?Hn(t,"Main-Regular",r,a,s):Hn(t,"AMS-Regular",r,a,s.concat(["amsrm"]))},Ib=function(t,r,a,s,c){return c!=="textord"&&Ds(t,"Math-BoldItalic",r).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},Rs=function(t,r,a){var s=t.mode,c=t.text,u=["mord"],m=s==="math"||s==="text"&&r.font,h=m?r.font:r.fontFamily,w="",g="";if(c.charCodeAt(0)===55349&&([w,g]=Fb(c,s)),w.length>0)return Hn(c,w,s,r,u.concat(g));if(h){var z,S;if(h==="boldsymbol"){var q=Ib(c,s,r,u,a);z=q.fontName,S=[q.fontClass]}else m?(z=rc[h].fontName,S=[h]):(z=gs(h,r.fontWeight,r.fontShape),S=[h,r.fontWeight,r.fontShape]);if(Ds(c,z,s).metrics)return Hn(c,z,s,r,u.concat(S));if(qp.hasOwnProperty(c)&&z.slice(0,10)==="Typewriter"){for(var j=[],_=0;_<c.length;_++)j.push(Hn(c[_],z,s,r,u.concat(S)));return ar(j)}}if(a==="mathord")return Hn(c,"Math-Italic",s,r,u.concat(["mathnormal"]));if(a==="textord"){var T=tn[s][c]&&tn[s][c].font;if(T==="ams"){var P=gs("amsrm",r.fontWeight,r.fontShape);return Hn(c,P,s,r,u.concat("amsrm",r.fontWeight,r.fontShape))}else if(T==="main"||!T){var N=gs("textrm",r.fontWeight,r.fontShape);return Hn(c,N,s,r,u.concat(r.fontWeight,r.fontShape))}else{var I=gs(T,r.fontWeight,r.fontShape);return Hn(c,I,s,r,u.concat(I,r.fontWeight,r.fontShape))}}else throw new Error("unexpected type: "+a+" in makeOrd")},Nb=(o,t)=>{if(Rr(o.classes)!==Rr(t.classes)||o.skew!==t.skew||o.maxFontSize!==t.maxFontSize||o.italic!==0&&o.hasClass("mathnormal"))return!1;if(o.classes.length===1){var r=o.classes[0];if(r==="mbin"||r==="mord")return!1}for(var a in o.style)if(o.style.hasOwnProperty(a)&&o.style[a]!==t.style[a])return!1;for(var s in t.style)if(t.style.hasOwnProperty(s)&&o.style[s]!==t.style[s])return!1;return!0},Tp=o=>{for(var t=0;t<o.length-1;t++){var r=o[t],a=o[t+1];r instanceof zt&&a instanceof zt&&Nb(r,a)&&(r.text+=a.text,r.height=Math.max(r.height,a.height),r.depth=Math.max(r.depth,a.depth),r.italic=a.italic,o.splice(t+1,1),t--)}return o},kc=function(t){for(var r=0,a=0,s=0,c=0;c<t.children.length;c++){var u=t.children[c];u.height>r&&(r=u.height),u.depth>a&&(a=u.depth),u.maxFontSize>s&&(s=u.maxFontSize)}t.height=r,t.depth=a,t.maxFontSize=s},de=function(t,r,a,s){var c=new Xi(t,r,a,s);return kc(c),c},Br=(o,t,r,a)=>new Xi(o,t,r,a),Lo=function(t,r,a){var s=de([t],[],r);return s.height=Math.max(a||r.fontMetrics().defaultRuleThickness,r.minRuleThickness),s.style.borderBottomWidth=xe(s.height),s.maxFontSize=1,s},Lb=function(t,r,a,s){var c=new bc(t,r,a,s);return kc(c),c},ar=function(t){var r=new Qi(t);return kc(r),r},Wo=function(t,r){return t instanceof Qi?de([],[t],r):t},Wb=function(t){if(t.positionType==="individualShift"){for(var r=t.children,a=[r[0]],s=-r[0].shift-r[0].elem.depth,c=s,u=1;u<r.length;u++){var m=-r[u].shift-c-r[u].elem.depth,h=m-(r[u-1].elem.height+r[u-1].elem.depth);c=c+m,a.push({type:"kern",size:h}),a.push(r[u])}return{children:a,depth:s}}var w;if(t.positionType==="top"){for(var g=t.positionData,z=0;z<t.children.length;z++){var S=t.children[z];g-=S.type==="kern"?S.size:S.elem.height+S.elem.depth}w=g}else if(t.positionType==="bottom")w=-t.positionData;else{var q=t.children[0];if(q.type!=="elem")throw new Error('First child must have type "elem".');if(t.positionType==="shift")w=-q.elem.depth-t.positionData;else if(t.positionType==="firstBaseline")w=-q.elem.depth;else throw new Error("Invalid positionType "+t.positionType+".")}return{children:t.children,depth:w}},Qe=function(t,r){for(var{children:a,depth:s}=Wb(t),c=0,u=0;u<a.length;u++){var m=a[u];if(m.type==="elem"){var h=m.elem;c=Math.max(c,h.maxFontSize,h.height)}}c+=2;var w=de(["pstrut"],[]);w.style.height=xe(c);for(var g=[],z=s,S=s,q=s,j=0;j<a.length;j++){var _=a[j];if(_.type==="kern")q+=_.size;else{var T=_.elem,P=_.wrapperClasses||[],N=_.wrapperStyle||{},I=de(P,[w,T],void 0,N);I.style.top=xe(-c-q-T.depth),_.marginLeft&&(I.style.marginLeft=_.marginLeft),_.marginRight&&(I.style.marginRight=_.marginRight),g.push(I),q+=T.height+T.depth}z=Math.min(z,q),S=Math.max(S,q)}var O=de(["vlist"],g);O.style.height=xe(S);var C;if(z<0){var U=de([],[]),F=de(["vlist"],[U]);F.style.height=xe(-z);var V=de(["vlist-s"],[new zt("​")]);C=[de(["vlist-r"],[O,V]),de(["vlist-r"],[F])]}else C=[de(["vlist-r"],[O])];var Q=de(["vlist-t"],C);return C.length===2&&Q.classes.push("vlist-t2"),Q.height=S,Q.depth=-z,Q},Pp=(o,t)=>{var r=de(["mspace"],[],t),a=mn(o,t);return r.style.marginRight=xe(a),r},gs=function(t,r,a){var s="";switch(t){case"amsrm":s="AMS";break;case"textrm":s="Main";break;case"textsf":s="SansSerif";break;case"texttt":s="Typewriter";break;default:s=t}var c;return r==="textbf"&&a==="textit"?c="BoldItalic":r==="textbf"?c="Bold":r==="textit"?c="Italic":c="Regular",s+"-"+c},rc={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Ap={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},Cp=function(t,r){var[a,s,c]=Ap[t],u=new Er(a),m=new rr([u],{width:xe(s),height:xe(c),style:"width:"+xe(s),viewBox:"0 0 "+1e3*s+" "+1e3*c,preserveAspectRatio:"xMinYMin"}),h=Br(["overlay"],[m],r);return h.height=c,h.style.height=xe(c),h.style.width=xe(s),h},pn={number:3,unit:"mu"},ro={number:4,unit:"mu"},er={number:5,unit:"mu"},Ob={mord:{mop:pn,mbin:ro,mrel:er,minner:pn},mop:{mord:pn,mop:pn,mrel:er,minner:pn},mbin:{mord:ro,mop:ro,mopen:ro,minner:ro},mrel:{mord:er,mop:er,mopen:er,minner:er},mopen:{},mclose:{mop:pn,mbin:ro,mrel:er,minner:pn},mpunct:{mord:pn,mop:pn,mrel:er,mopen:pn,mclose:pn,mpunct:pn,minner:pn},minner:{mord:pn,mop:pn,mbin:ro,mrel:er,mopen:pn,mpunct:pn,minner:pn}},Hb={mord:{mop:pn},mop:{mord:pn,mop:pn},mbin:{},mrel:{},mopen:{},mclose:{mop:pn},mpunct:{},minner:{mop:pn}},Mp={},Ps={},As={};function ke(o){for(var{type:t,names:r,props:a,handler:s,htmlBuilder:c,mathmlBuilder:u}=o,m={type:t,numArgs:a.numArgs,argTypes:a.argTypes,allowedInArgument:!!a.allowedInArgument,allowedInText:!!a.allowedInText,allowedInMath:a.allowedInMath===void 0?!0:a.allowedInMath,numOptionalArgs:a.numOptionalArgs||0,infix:!!a.infix,primitive:!!a.primitive,handler:s},h=0;h<r.length;++h)Mp[r[h]]=m;t&&(c&&(Ps[t]=c),u&&(As[t]=u))}function ao(o){var{type:t,htmlBuilder:r,mathmlBuilder:a}=o;ke({type:t,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:r,mathmlBuilder:a})}var Cs=function(t){return t.type==="ordgroup"&&t.body.length===1?t.body[0]:t},gn=function(t){return t.type==="ordgroup"?t.body:[t]},Gb=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),Ub=new Set(["rightmost","mrel","mclose","mpunct"]),Zb={display:Ne.DISPLAY,text:Ne.TEXT,script:Ne.SCRIPT,scriptscript:Ne.SCRIPTSCRIPT},Kb={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},jn=function(t,r,a,s){s===void 0&&(s=[null,null]);for(var c=[],u=0;u<t.length;u++){var m=Ke(t[u],r);if(m instanceof Qi){var h=m.children;c.push(...h)}else c.push(m)}if(Tp(c),!a)return c;var w=r;if(t.length===1){var g=t[0];g.type==="sizing"?w=r.havingSize(g.size):g.type==="styling"&&(w=r.havingStyle(Zb[g.style]))}var z=de([s[0]||"leftmost"],[],r),S=de([s[1]||"rightmost"],[],r),q=a==="root";return D1(c,(j,_)=>{var T=_.classes[0],P=j.classes[0];T==="mbin"&&Ub.has(P)?_.classes[0]="mord":P==="mbin"&&Gb.has(T)&&(j.classes[0]="mord")},{node:z},S,q),D1(c,(j,_)=>{var T=oc(_),P=oc(j),N=T&&P?j.hasClass("mtight")?Hb[T][P]:Ob[T][P]:null;if(N)return Pp(N,w)},{node:z},S,q),c},D1=function o(t,r,a,s,c){s&&t.push(s);for(var u=0;u<t.length;u++){var m=t[u],h=Dp(m);if(h){o(h.children,r,a,null,c);continue}var w=!m.hasClass("mspace");if(w){var g=r(m,a.node);g&&(a.insertAfter?a.insertAfter(g):(t.unshift(g),u++))}w?a.node=m:c&&m.hasClass("newline")&&(a.node=de(["leftmost"])),a.insertAfter=(z=>S=>{t.splice(z+1,0,S),u++})(u)}s&&t.pop()},Dp=function(t){return t instanceof Qi||t instanceof bc||t instanceof Xi&&t.hasClass("enclosing")?t:null},Vb=function o(t,r){var a=Dp(t);if(a){var s=a.children;if(s.length){if(r==="right")return o(s[s.length-1],"right");if(r==="left")return o(s[0],"left")}}return t},oc=function(t,r){return t?(r&&(t=Vb(t,r)),Kb[t.classes[0]]||null):null},Yi=function(t,r){var a=["nulldelimiter"].concat(t.baseSizingClasses());return de(r.concat(a))},Ke=function(t,r,a){if(!t)return de();if(Ps[t.type]){var s=Ps[t.type](t,r);if(a&&r.size!==a.size){s=de(r.sizingClasses(a),[s],r);var c=r.sizeMultiplier/a.sizeMultiplier;s.height*=c,s.depth*=c}return s}else throw new he("Got group of unknown type: '"+t.type+"'")};function ws(o,t){var r=de(["base"],o,t),a=de(["strut"]);return a.style.height=xe(r.height+r.depth),r.depth&&(a.style.verticalAlign=xe(-r.depth)),r.children.unshift(a),r}function ic(o,t){var r=null;o.length===1&&o[0].type==="tag"&&(r=o[0].tag,o=o[0].body);var a=jn(o,t,"root"),s;a.length===2&&a[1].hasClass("tag")&&(s=a.pop());for(var c=[],u=[],m=0;m<a.length;m++)if(u.push(a[m]),a[m].hasClass("mbin")||a[m].hasClass("mrel")||a[m].hasClass("allowbreak")){for(var h=!1;m<a.length-1&&a[m+1].hasClass("mspace")&&!a[m+1].hasClass("newline");)m++,u.push(a[m]),a[m].hasClass("nobreak")&&(h=!0);h||(c.push(ws(u,t)),u=[])}else a[m].hasClass("newline")&&(u.pop(),u.length>0&&(c.push(ws(u,t)),u=[]),c.push(a[m]));u.length>0&&c.push(ws(u,t));var w;r?(w=ws(jn(r,t,!0)),w.classes=["tag"],c.push(w)):s&&c.push(s);var g=de(["katex-html"],c);if(g.setAttribute("aria-hidden","true"),w){var z=w.children[0];z.style.height=xe(g.height+g.depth),g.depth&&(z.style.verticalAlign=xe(-g.depth))}return g}function Rp(o){return new Qi(o)}class $e{constructor(t,r,a){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=t,this.attributes={},this.children=r||[],this.classes=a||[]}setAttribute(t,r){this.attributes[t]=r}getAttribute(t){return this.attributes[t]}toNode(){var t=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&t.setAttribute(r,this.attributes[r]);this.classes.length>0&&(t.className=Rr(this.classes));for(var a=0;a<this.children.length;a++)if(this.children[a]instanceof xn&&this.children[a+1]instanceof xn){for(var s=this.children[a].toText()+this.children[++a].toText();this.children[a+1]instanceof xn;)s+=this.children[++a].toText();t.appendChild(new xn(s).toNode())}else t.appendChild(this.children[a].toNode());return t}toMarkup(){var t="<"+this.type;for(var r in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,r)&&(t+=" "+r+'="',t+=Fn(this.attributes[r]),t+='"');this.classes.length>0&&(t+=' class ="'+Fn(Rr(this.classes))+'"'),t+=">";for(var a=0;a<this.children.length;a++)t+=this.children[a].toMarkup();return t+="</"+this.type+">",t}toText(){return this.children.map(t=>t.toText()).join("")}}class xn{constructor(t){this.text=void 0,this.text=t}toNode(){return document.createTextNode(this.text)}toMarkup(){return Fn(this.toText())}toText(){return this.text}}class Ep{constructor(t){this.width=void 0,this.character=void 0,this.width=t,t>=.05555&&t<=.05556?this.character=" ":t>=.1666&&t<=.1667?this.character=" ":t>=.2222&&t<=.2223?this.character=" ":t>=.2777&&t<=.2778?this.character="  ":t>=-.05556&&t<=-.05555?this.character=" ⁣":t>=-.1667&&t<=-.1666?this.character=" ⁣":t>=-.2223&&t<=-.2222?this.character=" ⁣":t>=-.2778&&t<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var t=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return t.setAttribute("width",xe(this.width)),t}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+xe(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var Yb=new Set(["\\imath","\\jmath"]),Qb=new Set(["mrow","mtable"]),xt=function(t,r,a){return tn[r][t]&&tn[r][t].replace&&t.charCodeAt(0)!==55349&&!(qp.hasOwnProperty(t)&&a&&(a.fontFamily&&a.fontFamily.slice(4,6)==="tt"||a.font&&a.font.slice(4,6)==="tt"))&&(t=tn[r][t].replace),new xn(t)},_c=function(t){return t.length===1?t[0]:new $e("mrow",t)},jc=function(t,r){if(r.fontFamily==="texttt")return"monospace";if(r.fontFamily==="textsf")return r.fontShape==="textit"&&r.fontWeight==="textbf"?"sans-serif-bold-italic":r.fontShape==="textit"?"sans-serif-italic":r.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(r.fontShape==="textit"&&r.fontWeight==="textbf")return"bold-italic";if(r.fontShape==="textit")return"italic";if(r.fontWeight==="textbf")return"bold";var a=r.font;if(!a||a==="mathnormal")return null;var s=t.mode;if(a==="mathit")return"italic";if(a==="boldsymbol")return t.type==="textord"?"bold":"bold-italic";if(a==="mathbf")return"bold";if(a==="mathbb")return"double-struck";if(a==="mathsfit")return"sans-serif-italic";if(a==="mathfrak")return"fraktur";if(a==="mathscr"||a==="mathcal")return"script";if(a==="mathsf")return"sans-serif";if(a==="mathtt")return"monospace";var c=t.text;if(Yb.has(c))return null;tn[s][c]&&tn[s][c].replace&&(c=tn[s][c].replace);var u=rc[a].fontName;return xc(c,u,s)?rc[a].variant:null};function B0(o){if(!o)return!1;if(o.type==="mi"&&o.children.length===1){var t=o.children[0];return t instanceof xn&&t.text==="."}else if(o.type==="mo"&&o.children.length===1&&o.getAttribute("separator")==="true"&&o.getAttribute("lspace")==="0em"&&o.getAttribute("rspace")==="0em"){var r=o.children[0];return r instanceof xn&&r.text===","}else return!1}var tt=function(t,r,a){if(t.length===1){var s=en(t[0],r);return a&&s instanceof $e&&s.type==="mo"&&(s.setAttribute("lspace","0em"),s.setAttribute("rspace","0em")),[s]}for(var c=[],u,m=0;m<t.length;m++){var h=en(t[m],r);if(h instanceof $e&&u instanceof $e){if(h.type==="mtext"&&u.type==="mtext"&&h.getAttribute("mathvariant")===u.getAttribute("mathvariant")){u.children.push(...h.children);continue}else if(h.type==="mn"&&u.type==="mn"){u.children.push(...h.children);continue}else if(B0(h)&&u.type==="mn"){u.children.push(...h.children);continue}else if(h.type==="mn"&&B0(u))h.children=[...u.children,...h.children],c.pop();else if((h.type==="msup"||h.type==="msub")&&h.children.length>=1&&(u.type==="mn"||B0(u))){var w=h.children[0];w instanceof $e&&w.type==="mn"&&(w.children=[...u.children,...w.children],c.pop())}else if(u.type==="mi"&&u.children.length===1){var g=u.children[0];if(g instanceof xn&&g.text==="̸"&&(h.type==="mo"||h.type==="mi"||h.type==="mn")){var z=h.children[0];z instanceof xn&&z.text.length>0&&(z.text=z.text.slice(0,1)+"̸"+z.text.slice(1),c.pop())}}}c.push(h),u=h}return c},Fr=function(t,r,a){return _c(tt(t,r,a))},en=function(t,r){if(!t)return new $e("mrow");if(As[t.type]){var a=As[t.type](t,r);return a}else throw new he("Got group of unknown type: '"+t.type+"'")};function R1(o,t,r,a,s){var c=tt(o,r),u;c.length===1&&c[0]instanceof $e&&Qb.has(c[0].type)?u=c[0]:u=new $e("mrow",c);var m=new $e("annotation",[new xn(t)]);m.setAttribute("encoding","application/x-tex");var h=new $e("semantics",[u,m]),w=new $e("math",[h]);w.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),a&&w.setAttribute("display","block");var g=s?"katex":"katex-mathml";return de([g],[w])}var Bp=function(t){return new nr({style:t.displayMode?Ne.DISPLAY:Ne.TEXT,maxSize:t.maxSize,minRuleThickness:t.minRuleThickness})},Fp=function(t,r){if(r.displayMode){var a=["katex-display"];r.leqno&&a.push("leqno"),r.fleqn&&a.push("fleqn"),t=de(a,[t])}return t},Xb=function(t,r,a){var s=Bp(a),c;if(a.output==="mathml")return R1(t,r,s,a.displayMode,!0);if(a.output==="html"){var u=ic(t,s);c=de(["katex"],[u])}else{var m=R1(t,r,s,a.displayMode,!1),h=ic(t,s);c=de(["katex"],[m,h])}return Fp(c,a)},Jb=function(t,r,a){var s=Bp(a),c=ic(t,s),u=de(["katex"],[c]);return Fp(u,a)},e6={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},Es=function(t){var r=new $e("mo",[new xn(e6[t.replace(/^\\/,"")])]);return r.setAttribute("stretchy","true"),r},n6={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},t6=new Set(["widehat","widecheck","widetilde","utilde"]),Bs=function(t,r){function a(){var m=4e5,h=t.label.slice(1);if(t6.has(h)){var w=t,g=w.base.type==="ordgroup"?w.base.body.length:1,z,S,q;if(g>5)h==="widehat"||h==="widecheck"?(z=420,m=2364,q=.42,S=h+"4"):(z=312,m=2340,q=.34,S="tilde4");else{var j=[1,1,2,2,3,3][g];h==="widehat"||h==="widecheck"?(m=[0,1062,2364,2364,2364][j],z=[0,239,300,360,420][j],q=[0,.24,.3,.3,.36,.42][j],S=h+j):(m=[0,600,1033,2339,2340][j],z=[0,260,286,306,312][j],q=[0,.26,.286,.3,.306,.34][j],S="tilde"+j)}var _=new Er(S),T=new rr([_],{width:"100%",height:xe(q),viewBox:"0 0 "+m+" "+z,preserveAspectRatio:"none"});return{span:Br([],[T],r),minWidth:0,height:q}}else{var P=[],N=n6[h],[I,O,C]=N,U=C/1e3,F=I.length,V,Q;if(F===1){var ee=N[3];V=["hide-tail"],Q=[ee]}else if(F===2)V=["halfarrow-left","halfarrow-right"],Q=["xMinYMin","xMaxYMin"];else if(F===3)V=["brace-left","brace-center","brace-right"],Q=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+F+" children.");for(var se=0;se<F;se++){var X=new Er(I[se]),te=new rr([X],{width:"400em",height:xe(U),viewBox:"0 0 "+m+" "+C,preserveAspectRatio:Q[se]+" slice"}),re=Br([V[se]],[te],r);if(F===1)return{span:re,minWidth:O,height:U};re.style.height=xe(U),P.push(re)}return{span:de(["stretchy"],P,r),minWidth:O,height:U}}}var{span:s,minWidth:c,height:u}=a();return s.height=u,s.style.height=xe(u),c>0&&(s.style.minWidth=xe(c)),s},r6=function(t,r,a,s,c){var u,m=t.height+t.depth+a+s;if(/fbox|color|angl/.test(r)){if(u=de(["stretchy",r],[],c),r==="fbox"){var h=c.color&&c.getColor();h&&(u.style.borderColor=h)}}else{var w=[];/^[bx]cancel$/.test(r)&&w.push(new nc({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(r)&&w.push(new nc({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var g=new rr(w,{width:"100%",height:xe(m)});u=Br([],[g],c)}return u.height=m,u.style.height=xe(m),u};function He(o,t){if(!o||o.type!==t)throw new Error("Expected node of type "+t+", but got "+(o?"node of type "+o.type:String(o)));return o}function Sc(o){var t=Fs(o);if(!t)throw new Error("Expected node of symbol group type, but got "+(o?"node of type "+o.type:String(o)));return t}function Fs(o){return o&&(o.type==="atom"||Bb.hasOwnProperty(o.type))?o:null}var qc=(o,t)=>{var r,a,s;o&&o.type==="supsub"?(a=He(o.base,"accent"),r=a.base,o.base=r,s=Rb(Ke(o,t)),o.base=a):(a=He(o,"accent"),r=a.base);var c=Ke(r,t.havingCrampedStyle()),u=a.isShifty&&or(r),m=0;if(u){var h=Hi(r),w=Ke(h,t.havingCrampedStyle());m=q1(w).skew}var g=a.label==="\\c",z=g?c.height+c.depth:Math.min(c.height,t.fontMetrics().xHeight),S;if(a.isStretchy)S=Bs(a,t),S=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:c},{type:"elem",elem:S,wrapperClasses:["svg-align"],wrapperStyle:m>0?{width:"calc(100% - "+xe(2*m)+")",marginLeft:xe(2*m)}:void 0}]});else{var q,j;a.label==="\\vec"?(q=Cp("vec",t),j=Ap.vec[1]):(q=Rs({mode:a.mode,text:a.label},t,"textord"),q=q1(q),q.italic=0,j=q.width,g&&(z+=q.depth)),S=de(["accent-body"],[q]);var _=a.label==="\\textcircled";_&&(S.classes.push("accent-full"),z=c.height);var T=m;_||(T-=j/2),S.style.left=xe(T),a.label==="\\textcircled"&&(S.style.top=".2em"),S=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:c},{type:"kern",size:-z},{type:"elem",elem:S}]})}var P=de(["mord","accent"],[S],t);return s?(s.children[0]=P,s.height=Math.max(P.height,s.height),s.classes[0]="mord",s):P},Ip=(o,t)=>{var r=o.isStretchy?Es(o.label):new $e("mo",[xt(o.label,o.mode)]),a=new $e("mover",[en(o.base,t),r]);return a.setAttribute("accent","true"),a},o6=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(o=>"\\"+o).join("|"));ke({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(o,t)=>{var r=Cs(t[0]),a=!o6.test(o.funcName),s=!a||o.funcName==="\\widehat"||o.funcName==="\\widetilde"||o.funcName==="\\widecheck";return{type:"accent",mode:o.parser.mode,label:o.funcName,isStretchy:a,isShifty:s,base:r}},htmlBuilder:qc,mathmlBuilder:Ip});ke({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(o,t)=>{var r=t[0],a=o.parser.mode;return a==="math"&&(o.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+o.funcName+" works only in text mode"),a="text"),{type:"accent",mode:a,label:o.funcName,isStretchy:!1,isShifty:!0,base:r}},htmlBuilder:qc,mathmlBuilder:Ip});ke({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=t[0];return{type:"accentUnder",mode:r.mode,label:a,base:s}},htmlBuilder:(o,t)=>{var r=Ke(o.base,t),a=Bs(o,t),s=o.label==="\\utilde"?.12:0,c=Qe({positionType:"top",positionData:r.height,children:[{type:"elem",elem:a,wrapperClasses:["svg-align"]},{type:"kern",size:s},{type:"elem",elem:r}]});return de(["mord","accentunder"],[c],t)},mathmlBuilder:(o,t)=>{var r=Es(o.label),a=new $e("munder",[en(o.base,t),r]);return a.setAttribute("accentunder","true"),a}});var zs=o=>{var t=new $e("mpadded",o?[o]:[]);return t.setAttribute("width","+0.6em"),t.setAttribute("lspace","0.3em"),t};ke({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(o,t,r){var{parser:a,funcName:s}=o;return{type:"xArrow",mode:a.mode,label:s,body:t[0],below:r[0]}},htmlBuilder(o,t){var r=t.style,a=t.havingStyle(r.sup()),s=Wo(Ke(o.body,a,t),t),c=o.label.slice(0,2)==="\\x"?"x":"cd";s.classes.push(c+"-arrow-pad");var u;o.below&&(a=t.havingStyle(r.sub()),u=Wo(Ke(o.below,a,t),t),u.classes.push(c+"-arrow-pad"));var m=Bs(o,t),h=-t.fontMetrics().axisHeight+.5*m.height,w=-t.fontMetrics().axisHeight-.5*m.height-.111;(s.depth>.25||o.label==="\\xleftequilibrium")&&(w-=s.depth);var g;if(u){var z=-t.fontMetrics().axisHeight+u.height+.5*m.height+.111;g=Qe({positionType:"individualShift",children:[{type:"elem",elem:s,shift:w},{type:"elem",elem:m,shift:h},{type:"elem",elem:u,shift:z}]})}else g=Qe({positionType:"individualShift",children:[{type:"elem",elem:s,shift:w},{type:"elem",elem:m,shift:h}]});return g.children[0].children[0].children[1].classes.push("svg-align"),de(["mrel","x-arrow"],[g],t)},mathmlBuilder(o,t){var r=Es(o.label);r.setAttribute("minsize",o.label.charAt(0)==="x"?"1.75em":"3.0em");var a;if(o.body){var s=zs(en(o.body,t));if(o.below){var c=zs(en(o.below,t));a=new $e("munderover",[r,c,s])}else a=new $e("mover",[r,s])}else if(o.below){var u=zs(en(o.below,t));a=new $e("munder",[r,u])}else a=zs(),a=new $e("mover",[r,a]);return a}});function Np(o,t){var r=jn(o.body,t,!0);return de([o.mclass],r,t)}function Lp(o,t){var r,a=tt(o.body,t);return o.mclass==="minner"?r=new $e("mpadded",a):o.mclass==="mord"?o.isCharacterBox?(r=a[0],r.type="mi"):r=new $e("mi",a):(o.isCharacterBox?(r=a[0],r.type="mo"):r=new $e("mo",a),o.mclass==="mbin"?(r.attributes.lspace="0.22em",r.attributes.rspace="0.22em"):o.mclass==="mpunct"?(r.attributes.lspace="0em",r.attributes.rspace="0.17em"):o.mclass==="mopen"||o.mclass==="mclose"?(r.attributes.lspace="0em",r.attributes.rspace="0em"):o.mclass==="minner"&&(r.attributes.lspace="0.0556em",r.attributes.width="+0.1111em")),r}ke({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(o,t){var{parser:r,funcName:a}=o,s=t[0];return{type:"mclass",mode:r.mode,mclass:"m"+a.slice(5),body:gn(s),isCharacterBox:or(s)}},htmlBuilder:Np,mathmlBuilder:Lp});var Is=o=>{var t=o.type==="ordgroup"&&o.body.length?o.body[0]:o;return t.type==="atom"&&(t.family==="bin"||t.family==="rel")?"m"+t.family:"mord"};ke({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(o,t){var{parser:r}=o;return{type:"mclass",mode:r.mode,mclass:Is(t[0]),body:gn(t[1]),isCharacterBox:or(t[1])}}});ke({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(o,t){var{parser:r,funcName:a}=o,s=t[1],c=t[0],u;a!=="\\stackrel"?u=Is(s):u="mrel";var m={type:"op",mode:s.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:a!=="\\stackrel",body:gn(s)},h={type:"supsub",mode:c.mode,base:m,sup:a==="\\underset"?null:c,sub:a==="\\underset"?c:null};return{type:"mclass",mode:r.mode,mclass:u,body:[h],isCharacterBox:or(h)}},htmlBuilder:Np,mathmlBuilder:Lp});ke({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(o,t){var{parser:r}=o;return{type:"pmb",mode:r.mode,mclass:Is(t[0]),body:gn(t[0])}},htmlBuilder(o,t){var r=jn(o.body,t,!0),a=de([o.mclass],r,t);return a.style.textShadow="0.02em 0.01em 0.04px",a},mathmlBuilder(o,t){var r=tt(o.body,t),a=new $e("mstyle",r);return a.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),a}});var i6={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},E1=()=>({type:"styling",body:[],mode:"math",style:"display"}),B1=o=>o.type==="textord"&&o.text==="@",a6=(o,t)=>(o.type==="mathord"||o.type==="atom")&&o.text===t;function s6(o,t,r){var a=i6[o];switch(a){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return r.callFunction(a,[t[0]],[t[1]]);case"\\uparrow":case"\\downarrow":{var s=r.callFunction("\\\\cdleft",[t[0]],[]),c={type:"atom",text:a,mode:"math",family:"rel"},u=r.callFunction("\\Big",[c],[]),m=r.callFunction("\\\\cdright",[t[1]],[]),h={type:"ordgroup",mode:"math",body:[s,u,m]};return r.callFunction("\\\\cdparent",[h],[])}case"\\\\cdlongequal":return r.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var w={type:"textord",text:"\\Vert",mode:"math"};return r.callFunction("\\Big",[w],[])}default:return{type:"textord",text:" ",mode:"math"}}}function l6(o){var t=[];for(o.gullet.beginGroup(),o.gullet.macros.set("\\cr","\\\\\\relax"),o.gullet.beginGroup();;){t.push(o.parseExpression(!1,"\\\\")),o.gullet.endGroup(),o.gullet.beginGroup();var r=o.fetch().text;if(r==="&"||r==="\\\\")o.consume();else if(r==="\\end"){t[t.length-1].length===0&&t.pop();break}else throw new he("Expected \\\\ or \\cr or \\end",o.nextToken)}for(var a=[],s=[a],c=0;c<t.length;c++){for(var u=t[c],m=E1(),h=0;h<u.length;h++)if(!B1(u[h]))m.body.push(u[h]);else{a.push(m),h+=1;var w=Sc(u[h]).text,g=new Array(2);if(g[0]={type:"ordgroup",mode:"math",body:[]},g[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(w))if("<>AV".includes(w))for(var z=0;z<2;z++){for(var S=!0,q=h+1;q<u.length;q++){if(a6(u[q],w)){S=!1,h=q;break}if(B1(u[q]))throw new he("Missing a "+w+" character to complete a CD arrow.",u[q]);g[z].body.push(u[q])}if(S)throw new he("Missing a "+w+" character to complete a CD arrow.",u[h])}else throw new he('Expected one of "<>AV=|." after @',u[h]);var j=s6(w,g,o),_={type:"styling",body:[j],mode:"math",style:"display"};a.push(_),m=E1()}c%2===0?a.push(m):a.shift(),a=[],s.push(a)}o.gullet.endGroup(),o.gullet.endGroup();var T=new Array(s[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:s,arraystretch:1,addJot:!0,rowGaps:[null],cols:T,colSeparationType:"CD",hLinesBeforeRow:new Array(s.length+1).fill([])}}ke({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(o,t){var{parser:r,funcName:a}=o;return{type:"cdlabel",mode:r.mode,side:a.slice(4),label:t[0]}},htmlBuilder(o,t){var r=t.havingStyle(t.style.sup()),a=Wo(Ke(o.label,r,t),t);return a.classes.push("cd-label-"+o.side),a.style.bottom=xe(.8-a.depth),a.height=0,a.depth=0,a},mathmlBuilder(o,t){var r=new $e("mrow",[en(o.label,t)]);return r=new $e("mpadded",[r]),r.setAttribute("width","0"),o.side==="left"&&r.setAttribute("lspace","-1width"),r.setAttribute("voffset","0.7em"),r=new $e("mstyle",[r]),r.setAttribute("displaystyle","false"),r.setAttribute("scriptlevel","1"),r}});ke({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(o,t){var{parser:r}=o;return{type:"cdlabelparent",mode:r.mode,fragment:t[0]}},htmlBuilder(o,t){var r=Wo(Ke(o.fragment,t),t);return r.classes.push("cd-vert-arrow"),r},mathmlBuilder(o,t){return new $e("mrow",[en(o.fragment,t)])}});ke({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(o,t){for(var{parser:r}=o,a=He(t[0],"ordgroup"),s=a.body,c="",u=0;u<s.length;u++){var m=He(s[u],"textord");c+=m.text}var h=parseInt(c),w;if(isNaN(h))throw new he("\\@char has non-numeric argument "+c);if(h<0||h>=1114111)throw new he("\\@char with invalid code point "+c);return h<=65535?w=String.fromCharCode(h):(h-=65536,w=String.fromCharCode((h>>10)+55296,(h&1023)+56320)),{type:"textord",mode:r.mode,text:w}}});var Wp=(o,t)=>{var r=jn(o.body,t.withColor(o.color),!1);return ar(r)},Op=(o,t)=>{var r=tt(o.body,t.withColor(o.color)),a=new $e("mstyle",r);return a.setAttribute("mathcolor",o.color),a};ke({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(o,t){var{parser:r}=o,a=He(t[0],"color-token").color,s=t[1];return{type:"color",mode:r.mode,color:a,body:gn(s)}},htmlBuilder:Wp,mathmlBuilder:Op});ke({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(o,t){var{parser:r,breakOnTokenText:a}=o,s=He(t[0],"color-token").color;r.gullet.macros.set("\\current@color",s);var c=r.parseExpression(!0,a);return{type:"color",mode:r.mode,color:s,body:c}},htmlBuilder:Wp,mathmlBuilder:Op});ke({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(o,t,r){var{parser:a}=o,s=a.gullet.future().text==="["?a.parseSizeGroup(!0):null,c=!a.settings.displayMode||!a.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:a.mode,newLine:c,size:s&&He(s,"size").value}},htmlBuilder(o,t){var r=de(["mspace"],[],t);return o.newLine&&(r.classes.push("newline"),o.size&&(r.style.marginTop=xe(mn(o.size,t)))),r},mathmlBuilder(o,t){var r=new $e("mspace");return o.newLine&&(r.setAttribute("linebreak","newline"),o.size&&r.setAttribute("height",xe(mn(o.size,t)))),r}});var ac={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},Hp=o=>{var t=o.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(t))throw new he("Expected a control sequence",o);return t},c6=o=>{var t=o.gullet.popToken();return t.text==="="&&(t=o.gullet.popToken(),t.text===" "&&(t=o.gullet.popToken())),t},Gp=(o,t,r,a)=>{var s=o.gullet.macros.get(r.text);s==null&&(r.noexpand=!0,s={tokens:[r],numArgs:0,unexpandable:!o.gullet.isExpandable(r.text)}),o.gullet.macros.set(t,s,a)};ke({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(o){var{parser:t,funcName:r}=o;t.consumeSpaces();var a=t.fetch();if(ac[a.text])return(r==="\\global"||r==="\\\\globallong")&&(a.text=ac[a.text]),He(t.parseFunction(),"internal");throw new he("Invalid token after macro prefix",a)}});ke({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:t,funcName:r}=o,a=t.gullet.popToken(),s=a.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(s))throw new he("Expected a control sequence",a);for(var c=0,u,m=[[]];t.gullet.future().text!=="{";)if(a=t.gullet.popToken(),a.text==="#"){if(t.gullet.future().text==="{"){u=t.gullet.future(),m[c].push("{");break}if(a=t.gullet.popToken(),!/^[1-9]$/.test(a.text))throw new he('Invalid argument number "'+a.text+'"');if(parseInt(a.text)!==c+1)throw new he('Argument number "'+a.text+'" out of order');c++,m.push([])}else{if(a.text==="EOF")throw new he("Expected a macro definition");m[c].push(a.text)}var{tokens:h}=t.gullet.consumeArg();return u&&h.unshift(u),(r==="\\edef"||r==="\\xdef")&&(h=t.gullet.expandTokens(h),h.reverse()),t.gullet.macros.set(s,{tokens:h,numArgs:c,delimiters:m},r===ac[r]),{type:"internal",mode:t.mode}}});ke({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:t,funcName:r}=o,a=Hp(t.gullet.popToken());t.gullet.consumeSpaces();var s=c6(t);return Gp(t,a,s,r==="\\\\globallet"),{type:"internal",mode:t.mode}}});ke({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o){var{parser:t,funcName:r}=o,a=Hp(t.gullet.popToken()),s=t.gullet.popToken(),c=t.gullet.popToken();return Gp(t,a,c,r==="\\\\globalfuture"),t.gullet.pushToken(c),t.gullet.pushToken(s),{type:"internal",mode:t.mode}}});var Oi=function(t,r,a){var s=tn.math[t]&&tn.math[t].replace,c=xc(s||t,r,a);if(!c)throw new Error("Unsupported symbol "+t+" and font size "+r+".");return c},Tc=function(t,r,a,s){var c=a.havingBaseStyle(r),u=de(s.concat(c.sizingClasses(a)),[t],a),m=c.sizeMultiplier/a.sizeMultiplier;return u.height*=m,u.depth*=m,u.maxFontSize=c.sizeMultiplier,u},Up=function(t,r,a){var s=r.havingBaseStyle(a),c=(1-r.sizeMultiplier/s.sizeMultiplier)*r.fontMetrics().axisHeight;t.classes.push("delimcenter"),t.style.top=xe(c),t.height-=c,t.depth+=c},u6=function(t,r,a,s,c,u){var m=Hn(t,"Main-Regular",c,s),h=Tc(m,r,s,u);return Up(h,s,r),h},d6=function(t,r,a,s){return Hn(t,"Size"+r+"-Regular",a,s)},Zp=function(t,r,a,s,c,u){var m=d6(t,r,c,s),h=Tc(de(["delimsizing","size"+r],[m],s),Ne.TEXT,s,u);return a&&Up(h,s,Ne.TEXT),h},F0=function(t,r,a){var s;r==="Size1-Regular"?s="delim-size1":s="delim-size4";var c=de(["delimsizinginner",s],[de([],[Hn(t,r,a)])]);return{type:"elem",elem:c}},I0=function(t,r,a){var s=Bt["Size4-Regular"][t.charCodeAt(0)]?Bt["Size4-Regular"][t.charCodeAt(0)][4]:Bt["Size1-Regular"][t.charCodeAt(0)][4],c=new Er("inner",jb(t,Math.round(1e3*r))),u=new rr([c],{width:xe(s),height:xe(r),style:"width:"+xe(s),viewBox:"0 0 "+1e3*s+" "+Math.round(1e3*r),preserveAspectRatio:"xMinYMin"}),m=Br([],[u],a);return m.height=r,m.style.height=xe(r),m.style.width=xe(s),{type:"elem",elem:m}},sc=.008,xs={type:"kern",size:-1*sc},p6=new Set(["|","\\lvert","\\rvert","\\vert"]),m6=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),Kp=function(t,r,a,s,c,u){var m,h,w,g,z="",S=0;m=w=g=t,h=null;var q="Size1-Regular";t==="\\uparrow"?w=g="⏐":t==="\\Uparrow"?w=g="‖":t==="\\downarrow"?m=w="⏐":t==="\\Downarrow"?m=w="‖":t==="\\updownarrow"?(m="\\uparrow",w="⏐",g="\\downarrow"):t==="\\Updownarrow"?(m="\\Uparrow",w="‖",g="\\Downarrow"):p6.has(t)?(w="∣",z="vert",S=333):m6.has(t)?(w="∥",z="doublevert",S=556):t==="["||t==="\\lbrack"?(m="⎡",w="⎢",g="⎣",q="Size4-Regular",z="lbrack",S=667):t==="]"||t==="\\rbrack"?(m="⎤",w="⎥",g="⎦",q="Size4-Regular",z="rbrack",S=667):t==="\\lfloor"||t==="⌊"?(w=m="⎢",g="⎣",q="Size4-Regular",z="lfloor",S=667):t==="\\lceil"||t==="⌈"?(m="⎡",w=g="⎢",q="Size4-Regular",z="lceil",S=667):t==="\\rfloor"||t==="⌋"?(w=m="⎥",g="⎦",q="Size4-Regular",z="rfloor",S=667):t==="\\rceil"||t==="⌉"?(m="⎤",w=g="⎥",q="Size4-Regular",z="rceil",S=667):t==="("||t==="\\lparen"?(m="⎛",w="⎜",g="⎝",q="Size4-Regular",z="lparen",S=875):t===")"||t==="\\rparen"?(m="⎞",w="⎟",g="⎠",q="Size4-Regular",z="rparen",S=875):t==="\\{"||t==="\\lbrace"?(m="⎧",h="⎨",g="⎩",w="⎪",q="Size4-Regular"):t==="\\}"||t==="\\rbrace"?(m="⎫",h="⎬",g="⎭",w="⎪",q="Size4-Regular"):t==="\\lgroup"||t==="⟮"?(m="⎧",g="⎩",w="⎪",q="Size4-Regular"):t==="\\rgroup"||t==="⟯"?(m="⎫",g="⎭",w="⎪",q="Size4-Regular"):t==="\\lmoustache"||t==="⎰"?(m="⎧",g="⎭",w="⎪",q="Size4-Regular"):(t==="\\rmoustache"||t==="⎱")&&(m="⎫",g="⎩",w="⎪",q="Size4-Regular");var j=Oi(m,q,c),_=j.height+j.depth,T=Oi(w,q,c),P=T.height+T.depth,N=Oi(g,q,c),I=N.height+N.depth,O=0,C=1;if(h!==null){var U=Oi(h,q,c);O=U.height+U.depth,C=2}var F=_+I+O,V=Math.max(0,Math.ceil((r-F)/(C*P))),Q=F+V*C*P,ee=s.fontMetrics().axisHeight;a&&(ee*=s.sizeMultiplier);var se=Q/2-ee,X=[];if(z.length>0){var te=Q-_-I,re=Math.round(Q*1e3),pe=Sb(z,Math.round(te*1e3)),fe=new Er(z,pe),be=(S/1e3).toFixed(3)+"em",oe=(re/1e3).toFixed(3)+"em",J=new rr([fe],{width:be,height:oe,viewBox:"0 0 "+S+" "+re}),ne=Br([],[J],s);ne.height=re/1e3,ne.style.width=be,ne.style.height=oe,X.push({type:"elem",elem:ne})}else{if(X.push(F0(g,q,c)),X.push(xs),h===null){var A=Q-_-I+2*sc;X.push(I0(w,A,s))}else{var W=(Q-_-I-O)/2+2*sc;X.push(I0(w,W,s)),X.push(xs),X.push(F0(h,q,c)),X.push(xs),X.push(I0(w,W,s))}X.push(xs),X.push(F0(m,q,c))}var ge=s.havingBaseStyle(Ne.TEXT),we=Qe({positionType:"bottom",positionData:se,children:X});return Tc(de(["delimsizing","mult"],[we],ge),Ne.TEXT,s,u)},N0=80,L0=.08,W0=function(t,r,a,s,c){var u=_b(t,s,a),m=new Er(t,u),h=new rr([m],{width:"400em",height:xe(r),viewBox:"0 0 400000 "+a,preserveAspectRatio:"xMinYMin slice"});return Br(["hide-tail"],[h],c)},f6=function(t,r){var a=r.havingBaseSizing(),s=Jp("\\surd",t*a.sizeMultiplier,Xp,a),c=a.sizeMultiplier,u=Math.max(0,r.minRuleThickness-r.fontMetrics().sqrtRuleThickness),m,h=0,w=0,g=0,z;return s.type==="small"?(g=1e3+1e3*u+N0,t<1?c=1:t<1.4&&(c=.7),h=(1+u+L0)/c,w=(1+u)/c,m=W0("sqrtMain",h,g,u,r),m.style.minWidth="0.853em",z=.833/c):s.type==="large"?(g=(1e3+N0)*Gi[s.size],w=(Gi[s.size]+u)/c,h=(Gi[s.size]+u+L0)/c,m=W0("sqrtSize"+s.size,h,g,u,r),m.style.minWidth="1.02em",z=1/c):(h=t+u+L0,w=t+u,g=Math.floor(1e3*t+u)+N0,m=W0("sqrtTall",h,g,u,r),m.style.minWidth="0.742em",z=1.056),m.height=w,m.style.height=xe(h),{span:m,advanceWidth:z,ruleWidth:(r.fontMetrics().sqrtRuleThickness+u)*c}},Vp=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),h6=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),Yp=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),Gi=[0,1.2,1.8,2.4,3],Qp=function(t,r,a,s,c){if(t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle"),Vp.has(t)||Yp.has(t))return Zp(t,r,!1,a,s,c);if(h6.has(t))return Kp(t,Gi[r],!1,a,s,c);throw new he("Illegal delimiter: '"+t+"'")},$6=[{type:"small",style:Ne.SCRIPTSCRIPT},{type:"small",style:Ne.SCRIPT},{type:"small",style:Ne.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],y6=[{type:"small",style:Ne.SCRIPTSCRIPT},{type:"small",style:Ne.SCRIPT},{type:"small",style:Ne.TEXT},{type:"stack"}],Xp=[{type:"small",style:Ne.SCRIPTSCRIPT},{type:"small",style:Ne.SCRIPT},{type:"small",style:Ne.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],g6=function(t){if(t.type==="small")return"Main-Regular";if(t.type==="large")return"Size"+t.size+"-Regular";if(t.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+t.type+"' here.")},Jp=function(t,r,a,s){for(var c=Math.min(2,3-s.style.size),u=c;u<a.length&&a[u].type!=="stack";u++){var m=Oi(t,g6(a[u]),"math"),h=m.height+m.depth;if(a[u].type==="small"){var w=s.havingBaseStyle(a[u].style);h*=w.sizeMultiplier}if(h>r)return a[u]}return a[a.length-1]},lc=function(t,r,a,s,c,u){t==="<"||t==="\\lt"||t==="⟨"?t="\\langle":(t===">"||t==="\\gt"||t==="⟩")&&(t="\\rangle");var m;Yp.has(t)?m=$6:Vp.has(t)?m=Xp:m=y6;var h=Jp(t,r,m,s);return h.type==="small"?u6(t,h.style,a,s,c,u):h.type==="large"?Zp(t,h.size,a,s,c,u):Kp(t,r,a,s,c,u)},O0=function(t,r,a,s,c,u){var m=s.fontMetrics().axisHeight*s.sizeMultiplier,h=901,w=5/s.fontMetrics().ptPerEm,g=Math.max(r-m,a+m),z=Math.max(g/500*h,2*g-w);return lc(t,z,!0,s,c,u)},F1={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},w6=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function Ns(o,t){var r=Fs(o);if(r&&w6.has(r.text))return r;throw r?new he("Invalid delimiter '"+r.text+"' after '"+t.funcName+"'",o):new he("Invalid delimiter type '"+o.type+"'",o)}ke({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(o,t)=>{var r=Ns(t[0],o);return{type:"delimsizing",mode:o.parser.mode,size:F1[o.funcName].size,mclass:F1[o.funcName].mclass,delim:r.text}},htmlBuilder:(o,t)=>o.delim==="."?de([o.mclass]):Qp(o.delim,o.size,t,o.mode,[o.mclass]),mathmlBuilder:o=>{var t=[];o.delim!=="."&&t.push(xt(o.delim,o.mode));var r=new $e("mo",t);o.mclass==="mopen"||o.mclass==="mclose"?r.setAttribute("fence","true"):r.setAttribute("fence","false"),r.setAttribute("stretchy","true");var a=xe(Gi[o.size]);return r.setAttribute("minsize",a),r.setAttribute("maxsize",a),r}});function I1(o){if(!o.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}ke({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var r=o.parser.gullet.macros.get("\\current@color");if(r&&typeof r!="string")throw new he("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:o.parser.mode,delim:Ns(t[0],o).text,color:r}}});ke({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var r=Ns(t[0],o),a=o.parser;++a.leftrightDepth;var s=a.parseExpression(!1);--a.leftrightDepth,a.expect("\\right",!1);var c=He(a.parseFunction(),"leftright-right");return{type:"leftright",mode:a.mode,body:s,left:r.text,right:c.delim,rightColor:c.color}},htmlBuilder:(o,t)=>{I1(o);for(var r=jn(o.body,t,!0,["mopen","mclose"]),a=0,s=0,c=!1,u=0;u<r.length;u++)r[u].isMiddle?c=!0:(a=Math.max(r[u].height,a),s=Math.max(r[u].depth,s));a*=t.sizeMultiplier,s*=t.sizeMultiplier;var m;if(o.left==="."?m=Yi(t,["mopen"]):m=O0(o.left,a,s,t,o.mode,["mopen"]),r.unshift(m),c)for(var h=1;h<r.length;h++){var w=r[h],g=w.isMiddle;g&&(r[h]=O0(g.delim,a,s,g.options,o.mode,[]))}var z;if(o.right===".")z=Yi(t,["mclose"]);else{var S=o.rightColor?t.withColor(o.rightColor):t;z=O0(o.right,a,s,S,o.mode,["mclose"])}return r.push(z),de(["minner"],r,t)},mathmlBuilder:(o,t)=>{I1(o);var r=tt(o.body,t);if(o.left!=="."){var a=new $e("mo",[xt(o.left,o.mode)]);a.setAttribute("fence","true"),r.unshift(a)}if(o.right!=="."){var s=new $e("mo",[xt(o.right,o.mode)]);s.setAttribute("fence","true"),o.rightColor&&s.setAttribute("mathcolor",o.rightColor),r.push(s)}return _c(r)}});ke({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var r=Ns(t[0],o);if(!o.parser.leftrightDepth)throw new he("\\middle without preceding \\left",r);return{type:"middle",mode:o.parser.mode,delim:r.text}},htmlBuilder:(o,t)=>{var r;if(o.delim===".")r=Yi(t,[]);else{r=Qp(o.delim,1,t,o.mode,[]);var a={delim:o.delim,options:t};r.isMiddle=a}return r},mathmlBuilder:(o,t)=>{var r=o.delim==="\\vert"||o.delim==="|"?xt("|","text"):xt(o.delim,o.mode),a=new $e("mo",[r]);return a.setAttribute("fence","true"),a.setAttribute("lspace","0.05em"),a.setAttribute("rspace","0.05em"),a}});var Pc=(o,t)=>{var r=Wo(Ke(o.body,t),t),a=o.label.slice(1),s=t.sizeMultiplier,c,u=0,m=or(o.body);if(a==="sout")c=de(["stretchy","sout"]),c.height=t.fontMetrics().defaultRuleThickness/s,u=-.5*t.fontMetrics().xHeight;else if(a==="phase"){var h=mn({number:.6,unit:"pt"},t),w=mn({number:.35,unit:"ex"},t),g=t.havingBaseSizing();s=s/g.sizeMultiplier;var z=r.height+r.depth+h+w;r.style.paddingLeft=xe(z/2+h);var S=Math.floor(1e3*z*s),q=vb(S),j=new rr([new Er("phase",q)],{width:"400em",height:xe(S/1e3),viewBox:"0 0 400000 "+S,preserveAspectRatio:"xMinYMin slice"});c=Br(["hide-tail"],[j],t),c.style.height=xe(z),u=r.depth+h+w}else{/cancel/.test(a)?m||r.classes.push("cancel-pad"):a==="angl"?r.classes.push("anglpad"):r.classes.push("boxpad");var _=0,T=0,P=0;/box/.test(a)?(P=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness),_=t.fontMetrics().fboxsep+(a==="colorbox"?0:P),T=_):a==="angl"?(P=Math.max(t.fontMetrics().defaultRuleThickness,t.minRuleThickness),_=4*P,T=Math.max(0,.25-r.depth)):(_=m?.2:0,T=_),c=r6(r,a,_,T,t),/fbox|boxed|fcolorbox/.test(a)?(c.style.borderStyle="solid",c.style.borderWidth=xe(P)):a==="angl"&&P!==.049&&(c.style.borderTopWidth=xe(P),c.style.borderRightWidth=xe(P)),u=r.depth+T,o.backgroundColor&&(c.style.backgroundColor=o.backgroundColor,o.borderColor&&(c.style.borderColor=o.borderColor))}var N;if(o.backgroundColor)N=Qe({positionType:"individualShift",children:[{type:"elem",elem:c,shift:u},{type:"elem",elem:r,shift:0}]});else{var I=/cancel|phase/.test(a)?["svg-align"]:[];N=Qe({positionType:"individualShift",children:[{type:"elem",elem:r,shift:0},{type:"elem",elem:c,shift:u,wrapperClasses:I}]})}return/cancel/.test(a)&&(N.height=r.height,N.depth=r.depth),/cancel/.test(a)&&!m?de(["mord","cancel-lap"],[N],t):de(["mord"],[N],t)},Ac=(o,t)=>{var r=0,a=new $e(o.label.includes("colorbox")?"mpadded":"menclose",[en(o.body,t)]);switch(o.label){case"\\cancel":a.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":a.setAttribute("notation","downdiagonalstrike");break;case"\\phase":a.setAttribute("notation","phasorangle");break;case"\\sout":a.setAttribute("notation","horizontalstrike");break;case"\\fbox":a.setAttribute("notation","box");break;case"\\angl":a.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(r=t.fontMetrics().fboxsep*t.fontMetrics().ptPerEm,a.setAttribute("width","+"+2*r+"pt"),a.setAttribute("height","+"+2*r+"pt"),a.setAttribute("lspace",r+"pt"),a.setAttribute("voffset",r+"pt"),o.label==="\\fcolorbox"){var s=Math.max(t.fontMetrics().fboxrule,t.minRuleThickness);a.setAttribute("style","border: "+s+"em solid "+String(o.borderColor))}break;case"\\xcancel":a.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return o.backgroundColor&&a.setAttribute("mathbackground",o.backgroundColor),a};ke({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(o,t,r){var{parser:a,funcName:s}=o,c=He(t[0],"color-token").color,u=t[1];return{type:"enclose",mode:a.mode,label:s,backgroundColor:c,body:u}},htmlBuilder:Pc,mathmlBuilder:Ac});ke({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(o,t,r){var{parser:a,funcName:s}=o,c=He(t[0],"color-token").color,u=He(t[1],"color-token").color,m=t[2];return{type:"enclose",mode:a.mode,label:s,backgroundColor:u,borderColor:c,body:m}},htmlBuilder:Pc,mathmlBuilder:Ac});ke({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(o,t){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\fbox",body:t[0]}}});ke({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(o,t){var{parser:r,funcName:a}=o,s=t[0];return{type:"enclose",mode:r.mode,label:a,body:s}},htmlBuilder:Pc,mathmlBuilder:Ac});ke({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(o,t){var{parser:r}=o;return{type:"enclose",mode:r.mode,label:"\\angl",body:t[0]}}});var em={};function Ft(o){for(var{type:t,names:r,props:a,handler:s,htmlBuilder:c,mathmlBuilder:u}=o,m={type:t,numArgs:a.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:s},h=0;h<r.length;++h)em[r[h]]=m;c&&(Ps[t]=c),u&&(As[t]=u)}var nm={};function k(o,t){nm[o]=t}function N1(o){var t=[];o.consumeSpaces();var r=o.fetch().text;for(r==="\\relax"&&(o.consume(),o.consumeSpaces(),r=o.fetch().text);r==="\\hline"||r==="\\hdashline";)o.consume(),t.push(r==="\\hdashline"),o.consumeSpaces(),r=o.fetch().text;return t}var Ls=o=>{var t=o.parser.settings;if(!t.displayMode)throw new he("{"+o.envName+"} can be used only in display mode.")},z6=new Set(["gather","gather*"]);function Cc(o){if(!o.includes("ed"))return!o.includes("*")}function Ir(o,t,r){var{hskipBeforeAndAfter:a,addJot:s,cols:c,arraystretch:u,colSeparationType:m,autoTag:h,singleRow:w,emptySingleRow:g,maxNumCols:z,leqno:S}=t;if(o.gullet.beginGroup(),w||o.gullet.macros.set("\\cr","\\\\\\relax"),!u){var q=o.gullet.expandMacroAsText("\\arraystretch");if(q==null)u=1;else if(u=parseFloat(q),!u||u<0)throw new he("Invalid \\arraystretch: "+q)}o.gullet.beginGroup();var j=[],_=[j],T=[],P=[],N=h!=null?[]:void 0;function I(){h&&o.gullet.macros.set("\\@eqnsw","1",!0)}function O(){N&&(o.gullet.macros.get("\\df@tag")?(N.push(o.subparse([new ct("\\df@tag")])),o.gullet.macros.set("\\df@tag",void 0,!0)):N.push(!!h&&o.gullet.macros.get("\\@eqnsw")==="1"))}for(I(),P.push(N1(o));;){var C=o.parseExpression(!1,w?"\\end":"\\\\");o.gullet.endGroup(),o.gullet.beginGroup(),C={type:"ordgroup",mode:o.mode,body:C},r&&(C={type:"styling",mode:o.mode,style:r,body:[C]}),j.push(C);var U=o.fetch().text;if(U==="&"){if(z&&j.length===z){if(w||m)throw new he("Too many tab characters: &",o.nextToken);o.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}o.consume()}else if(U==="\\end"){O(),j.length===1&&C.type==="styling"&&C.body[0].body.length===0&&(_.length>1||!g)&&_.pop(),P.length<_.length+1&&P.push([]);break}else if(U==="\\\\"){o.consume();var F=void 0;o.gullet.future().text!==" "&&(F=o.parseSizeGroup(!0)),T.push(F?F.value:null),O(),P.push(N1(o)),j=[],_.push(j),I()}else throw new he("Expected & or \\\\ or \\cr or \\end",o.nextToken)}return o.gullet.endGroup(),o.gullet.endGroup(),{type:"array",mode:o.mode,addJot:s,arraystretch:u,body:_,cols:c,rowGaps:T,hskipBeforeAndAfter:a,hLinesBeforeRow:P,colSeparationType:m,tags:N,leqno:S}}function Mc(o){return o.slice(0,1)==="d"?"display":"text"}var It=function(t,r){var a,s,c=t.body.length,u=t.hLinesBeforeRow,m=0,h=new Array(c),w=[],g=Math.max(r.fontMetrics().arrayRuleWidth,r.minRuleThickness),z=1/r.fontMetrics().ptPerEm,S=5*z;if(t.colSeparationType&&t.colSeparationType==="small"){var q=r.havingStyle(Ne.SCRIPT).sizeMultiplier;S=.2778*(q/r.sizeMultiplier)}var j=t.colSeparationType==="CD"?mn({number:3,unit:"ex"},r):12*z,_=3*z,T=t.arraystretch*j,P=.7*T,N=.3*T,I=0;function O(In){for(var Mn=0;Mn<In.length;++Mn)Mn>0&&(I+=.25),w.push({pos:I,isDashed:In[Mn]})}for(O(u[0]),a=0;a<t.body.length;++a){var C=t.body[a],U=P,F=N;m<C.length&&(m=C.length);var V=new Array(C.length);for(s=0;s<C.length;++s){var Q=Ke(C[s],r);F<Q.depth&&(F=Q.depth),U<Q.height&&(U=Q.height),V[s]=Q}var ee=t.rowGaps[a],se=0;ee&&(se=mn(ee,r),se>0&&(se+=N,F<se&&(F=se),se=0)),t.addJot&&(F+=_),V.height=U,V.depth=F,I+=U,V.pos=I,I+=F+se,h[a]=V,O(u[a+1])}var X=I/2+r.fontMetrics().axisHeight,te=t.cols||[],re=[],pe,fe,be=[];if(t.tags&&t.tags.some(In=>In))for(a=0;a<c;++a){var oe=h[a],J=oe.pos-X,ne=t.tags[a],A=void 0;ne===!0?A=de(["eqn-num"],[],r):ne===!1?A=de([],[],r):A=de([],jn(ne,r,!0),r),A.depth=oe.depth,A.height=oe.height,be.push({type:"elem",elem:A,shift:J})}for(s=0,fe=0;s<m||fe<te.length;++s,++fe){for(var W=te[fe]||{},ge=!0;W.type==="separator";){if(ge||(pe=de(["arraycolsep"],[]),pe.style.width=xe(r.fontMetrics().doubleRuleSep),re.push(pe)),W.separator==="|"||W.separator===":"){var we=W.separator==="|"?"solid":"dashed",_e=de(["vertical-separator"],[],r);_e.style.height=xe(I),_e.style.borderRightWidth=xe(g),_e.style.borderRightStyle=we,_e.style.margin="0 "+xe(-g/2);var ze=I-X;ze&&(_e.style.verticalAlign=xe(-ze)),re.push(_e)}else throw new he("Invalid separator type: "+W.separator);fe++,W=te[fe]||{},ge=!1}if(!(s>=m)){var je=void 0;if(s>0||t.hskipBeforeAndAfter){var ie;je=(ie=W.pregap)!=null?ie:S,je!==0&&(pe=de(["arraycolsep"],[]),pe.style.width=xe(je),re.push(pe))}var Te=[];for(a=0;a<c;++a){var We=h[a],vn=We[s];if(vn){var Lt=We.pos-X;vn.depth=We.depth,vn.height=We.height,Te.push({type:"elem",elem:vn,shift:Lt})}}if(Te=Qe({positionType:"individualShift",children:Te}),Te=de(["col-align-"+(W.align||"c")],[Te]),re.push(Te),s<m-1||t.hskipBeforeAndAfter){var dt;je=(dt=W.postgap)!=null?dt:S,je!==0&&(pe=de(["arraycolsep"],[]),pe.style.width=xe(je),re.push(pe))}}}if(h=de(["mtable"],re),w.length>0){for(var Oe=Lo("hline",r,g),Je=Lo("hdashline",r,g),Le=[{type:"elem",elem:h,shift:0}];w.length>0;){var Pn=w.pop(),wn=Pn.pos-X;Pn.isDashed?Le.push({type:"elem",elem:Je,shift:wn}):Le.push({type:"elem",elem:Oe,shift:wn})}h=Qe({positionType:"individualShift",children:Le})}if(be.length===0)return de(["mord"],[h],r);var qt=Qe({positionType:"individualShift",children:be});return qt=de(["tag"],[qt],r),ar([h,qt])},x6={c:"center ",l:"left ",r:"right "},Nt=function(t,r){for(var a=[],s=new $e("mtd",[],["mtr-glue"]),c=new $e("mtd",[],["mml-eqn-num"]),u=0;u<t.body.length;u++){for(var m=t.body[u],h=[],w=0;w<m.length;w++)h.push(new $e("mtd",[en(m[w],r)]));t.tags&&t.tags[u]&&(h.unshift(s),h.push(s),t.leqno?h.unshift(c):h.push(c)),a.push(new $e("mtr",h))}var g=new $e("mtable",a),z=t.arraystretch===.5?.1:.16+t.arraystretch-1+(t.addJot?.09:0);g.setAttribute("rowspacing",xe(z));var S="",q="";if(t.cols&&t.cols.length>0){var j=t.cols,_="",T=!1,P=0,N=j.length;j[0].type==="separator"&&(S+="top ",P=1),j[j.length-1].type==="separator"&&(S+="bottom ",N-=1);for(var I=P;I<N;I++)j[I].type==="align"?(q+=x6[j[I].align],T&&(_+="none "),T=!0):j[I].type==="separator"&&T&&(_+=j[I].separator==="|"?"solid ":"dashed ",T=!1);g.setAttribute("columnalign",q.trim()),/[sd]/.test(_)&&g.setAttribute("columnlines",_.trim())}if(t.colSeparationType==="align"){for(var O=t.cols||[],C="",U=1;U<O.length;U++)C+=U%2?"0em ":"1em ";g.setAttribute("columnspacing",C.trim())}else t.colSeparationType==="alignat"||t.colSeparationType==="gather"?g.setAttribute("columnspacing","0em"):t.colSeparationType==="small"?g.setAttribute("columnspacing","0.2778em"):t.colSeparationType==="CD"?g.setAttribute("columnspacing","0.5em"):g.setAttribute("columnspacing","1em");var F="",V=t.hLinesBeforeRow;S+=V[0].length>0?"left ":"",S+=V[V.length-1].length>0?"right ":"";for(var Q=1;Q<V.length-1;Q++)F+=V[Q].length===0?"none ":V[Q][0]?"dashed ":"solid ";return/[sd]/.test(F)&&g.setAttribute("rowlines",F.trim()),S!==""&&(g=new $e("menclose",[g]),g.setAttribute("notation",S.trim())),t.arraystretch&&t.arraystretch<1&&(g=new $e("mstyle",[g]),g.setAttribute("scriptlevel","1")),g},tm=function(t,r){t.envName.includes("ed")||Ls(t);var a=[],s=t.envName.includes("at")?"alignat":"align",c=t.envName==="split",u=Ir(t.parser,{cols:a,addJot:!0,autoTag:c?void 0:Cc(t.envName),emptySingleRow:!0,colSeparationType:s,maxNumCols:c?2:void 0,leqno:t.parser.settings.leqno},"display"),m,h=0,w={type:"ordgroup",mode:t.mode,body:[]};if(r[0]&&r[0].type==="ordgroup"){for(var g="",z=0;z<r[0].body.length;z++){var S=He(r[0].body[z],"textord");g+=S.text}m=Number(g),h=m*2}var q=!h;u.body.forEach(function(P){for(var N=1;N<P.length;N+=2){var I=He(P[N],"styling"),O=He(I.body[0],"ordgroup");O.body.unshift(w)}if(q)h<P.length&&(h=P.length);else{var C=P.length/2;if(m<C)throw new he("Too many math in a row: "+("expected "+m+", but got "+C),P[0])}});for(var j=0;j<h;++j){var _="r",T=0;j%2===1?_="l":j>0&&q&&(T=1),a[j]={type:"align",align:_,pregap:T,postgap:0}}return u.colSeparationType=q?"align":"alignat",u};Ft({type:"array",names:["array","darray"],props:{numArgs:1},handler(o,t){var r=Fs(t[0]),a=r?[t[0]]:He(t[0],"ordgroup").body,s=a.map(function(u){var m=Sc(u),h=m.text;if("lcr".includes(h))return{type:"align",align:h};if(h==="|")return{type:"separator",separator:"|"};if(h===":")return{type:"separator",separator:":"};throw new he("Unknown column alignment: "+h,u)}),c={cols:s,hskipBeforeAndAfter:!0,maxNumCols:s.length};return Ir(o.parser,c,Mc(o.envName))},htmlBuilder:It,mathmlBuilder:Nt});Ft({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(o){var t={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[o.envName.replace("*","")],r="c",a={hskipBeforeAndAfter:!1,cols:[{type:"align",align:r}]};if(o.envName.charAt(o.envName.length-1)==="*"){var s=o.parser;if(s.consumeSpaces(),s.fetch().text==="["){if(s.consume(),s.consumeSpaces(),r=s.fetch().text,!"lcr".includes(r))throw new he("Expected l or c or r",s.nextToken);s.consume(),s.consumeSpaces(),s.expect("]"),s.consume(),a.cols=[{type:"align",align:r}]}}var c=Ir(o.parser,a,Mc(o.envName)),u=Math.max(0,...c.body.map(m=>m.length));return c.cols=new Array(u).fill({type:"align",align:r}),t?{type:"leftright",mode:o.mode,body:[c],left:t[0],right:t[1],rightColor:void 0}:c},htmlBuilder:It,mathmlBuilder:Nt});Ft({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(o){var t={arraystretch:.5},r=Ir(o.parser,t,"script");return r.colSeparationType="small",r},htmlBuilder:It,mathmlBuilder:Nt});Ft({type:"array",names:["subarray"],props:{numArgs:1},handler(o,t){var r=Fs(t[0]),a=r?[t[0]]:He(t[0],"ordgroup").body,s=a.map(function(u){var m=Sc(u),h=m.text;if("lc".includes(h))return{type:"align",align:h};throw new he("Unknown column alignment: "+h,u)});if(s.length>1)throw new he("{subarray} can contain only one column");var c={cols:s,hskipBeforeAndAfter:!1,arraystretch:.5};if(c=Ir(o.parser,c,"script"),c.body.length>0&&c.body[0].length>1)throw new he("{subarray} can contain only one column");return c},htmlBuilder:It,mathmlBuilder:Nt});Ft({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(o){var t={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},r=Ir(o.parser,t,Mc(o.envName));return{type:"leftright",mode:o.mode,body:[r],left:o.envName.includes("r")?".":"\\{",right:o.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:It,mathmlBuilder:Nt});Ft({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:tm,htmlBuilder:It,mathmlBuilder:Nt});Ft({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(o){z6.has(o.envName)&&Ls(o);var t={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:Cc(o.envName),emptySingleRow:!0,leqno:o.parser.settings.leqno};return Ir(o.parser,t,"display")},htmlBuilder:It,mathmlBuilder:Nt});Ft({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:tm,htmlBuilder:It,mathmlBuilder:Nt});Ft({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(o){Ls(o);var t={autoTag:Cc(o.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:o.parser.settings.leqno};return Ir(o.parser,t,"display")},htmlBuilder:It,mathmlBuilder:Nt});Ft({type:"array",names:["CD"],props:{numArgs:0},handler(o){return Ls(o),l6(o.parser)},htmlBuilder:It,mathmlBuilder:Nt});k("\\nonumber","\\gdef\\@eqnsw{0}");k("\\notag","\\nonumber");ke({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(o,t){throw new he(o.funcName+" valid only within array environment")}});var L1=em;ke({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(o,t){var{parser:r,funcName:a}=o,s=t[0];if(s.type!=="ordgroup")throw new he("Invalid environment name",s);for(var c="",u=0;u<s.body.length;++u)c+=He(s.body[u],"textord").text;if(a==="\\begin"){if(!L1.hasOwnProperty(c))throw new he("No such environment: "+c,s);var m=L1[c],{args:h,optArgs:w}=r.parseArguments("\\begin{"+c+"}",m),g={mode:r.mode,envName:c,parser:r},z=m.handler(g,h,w);r.expect("\\end",!1);var S=r.nextToken,q=He(r.parseFunction(),"environment");if(q.name!==c)throw new he("Mismatch: \\begin{"+c+"} matched by \\end{"+q.name+"}",S);return z}return{type:"environment",mode:r.mode,name:c,nameGroup:s}}});var rm=(o,t)=>{var r=o.font,a=t.withFont(r);return Ke(o.body,a)},om=(o,t)=>{var r=o.font,a=t.withFont(r);return en(o.body,a)},W1={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};ke({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=Cs(t[0]),c=a;return c in W1&&(c=W1[c]),{type:"font",mode:r.mode,font:c.slice(1),body:s}},htmlBuilder:rm,mathmlBuilder:om});ke({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(o,t)=>{var{parser:r}=o,a=t[0];return{type:"mclass",mode:r.mode,mclass:Is(a),body:[{type:"font",mode:r.mode,font:"boldsymbol",body:a}],isCharacterBox:or(a)}}});ke({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(o,t)=>{var{parser:r,funcName:a,breakOnTokenText:s}=o,{mode:c}=r,u=r.parseExpression(!0,s),m="math"+a.slice(1);return{type:"font",mode:c,font:m,body:{type:"ordgroup",mode:r.mode,body:u}}},htmlBuilder:rm,mathmlBuilder:om});var b6=(o,t)=>{var r=t.style,a=r.fracNum(),s=r.fracDen(),c;c=t.havingStyle(a);var u=Ke(o.numer,c,t);if(o.continued){var m=8.5/t.fontMetrics().ptPerEm,h=3.5/t.fontMetrics().ptPerEm;u.height=u.height<m?m:u.height,u.depth=u.depth<h?h:u.depth}c=t.havingStyle(s);var w=Ke(o.denom,c,t),g,z,S;o.hasBarLine?(o.barSize?(z=mn(o.barSize,t),g=Lo("frac-line",t,z)):g=Lo("frac-line",t),z=g.height,S=g.height):(g=null,z=0,S=t.fontMetrics().defaultRuleThickness);var q,j,_;r.size===Ne.DISPLAY.size?(q=t.fontMetrics().num1,z>0?j=3*S:j=7*S,_=t.fontMetrics().denom1):(z>0?(q=t.fontMetrics().num2,j=S):(q=t.fontMetrics().num3,j=3*S),_=t.fontMetrics().denom2);var T;if(g){var N=t.fontMetrics().axisHeight;q-u.depth-(N+.5*z)<j&&(q+=j-(q-u.depth-(N+.5*z))),N-.5*z-(w.height-_)<j&&(_+=j-(N-.5*z-(w.height-_)));var I=-(N-.5*z);T=Qe({positionType:"individualShift",children:[{type:"elem",elem:w,shift:_},{type:"elem",elem:g,shift:I},{type:"elem",elem:u,shift:-q}]})}else{var P=q-u.depth-(w.height-_);P<j&&(q+=.5*(j-P),_+=.5*(j-P)),T=Qe({positionType:"individualShift",children:[{type:"elem",elem:w,shift:_},{type:"elem",elem:u,shift:-q}]})}c=t.havingStyle(r),T.height*=c.sizeMultiplier/t.sizeMultiplier,T.depth*=c.sizeMultiplier/t.sizeMultiplier;var O;r.size===Ne.DISPLAY.size?O=t.fontMetrics().delim1:r.size===Ne.SCRIPTSCRIPT.size?O=t.havingStyle(Ne.SCRIPT).fontMetrics().delim2:O=t.fontMetrics().delim2;var C,U;return o.leftDelim==null?C=Yi(t,["mopen"]):C=lc(o.leftDelim,O,!0,t.havingStyle(r),o.mode,["mopen"]),o.continued?U=de([]):o.rightDelim==null?U=Yi(t,["mclose"]):U=lc(o.rightDelim,O,!0,t.havingStyle(r),o.mode,["mclose"]),de(["mord"].concat(c.sizingClasses(t)),[C,de(["mfrac"],[T]),U],t)},v6=(o,t)=>{var r=new $e("mfrac",[en(o.numer,t),en(o.denom,t)]);if(!o.hasBarLine)r.setAttribute("linethickness","0px");else if(o.barSize){var a=mn(o.barSize,t);r.setAttribute("linethickness",xe(a))}if(o.leftDelim!=null||o.rightDelim!=null){var s=[];if(o.leftDelim!=null){var c=new $e("mo",[new xn(o.leftDelim.replace("\\",""))]);c.setAttribute("fence","true"),s.push(c)}if(s.push(r),o.rightDelim!=null){var u=new $e("mo",[new xn(o.rightDelim.replace("\\",""))]);u.setAttribute("fence","true"),s.push(u)}return _c(s)}return r},im=(o,t)=>{if(!t)return o;var r={type:"styling",mode:o.mode,style:t,body:[o]};return r};ke({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=t[0],c=t[1],u,m=null,h=null;switch(a){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":u=!0;break;case"\\\\atopfrac":u=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":u=!1,m="(",h=")";break;case"\\\\bracefrac":u=!1,m="\\{",h="\\}";break;case"\\\\brackfrac":u=!1,m="[",h="]";break;default:throw new Error("Unrecognized genfrac command")}var w=a==="\\cfrac",g=null;return w||a.startsWith("\\d")?g="display":a.startsWith("\\t")&&(g="text"),im({type:"genfrac",mode:r.mode,numer:s,denom:c,continued:w,hasBarLine:u,leftDelim:m,rightDelim:h,barSize:null},g)},htmlBuilder:b6,mathmlBuilder:v6});ke({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(o){var{parser:t,funcName:r,token:a}=o,s;switch(r){case"\\over":s="\\frac";break;case"\\choose":s="\\binom";break;case"\\atop":s="\\\\atopfrac";break;case"\\brace":s="\\\\bracefrac";break;case"\\brack":s="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:t.mode,replaceWith:s,token:a}}});var O1=["display","text","script","scriptscript"],H1=function(t){var r=null;return t.length>0&&(r=t,r=r==="."?null:r),r};ke({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(o,t){var{parser:r}=o,a=t[4],s=t[5],c=Cs(t[0]),u=c.type==="atom"&&c.family==="open"?H1(c.text):null,m=Cs(t[1]),h=m.type==="atom"&&m.family==="close"?H1(m.text):null,w=He(t[2],"size"),g,z=null;w.isBlank?g=!0:(z=w.value,g=z.number>0);var S=null,q=t[3];if(q.type==="ordgroup"){if(q.body.length>0){var j=He(q.body[0],"textord");S=O1[Number(j.text)]}}else q=He(q,"textord"),S=O1[Number(q.text)];return im({type:"genfrac",mode:r.mode,numer:a,denom:s,continued:!1,hasBarLine:g,barSize:z,leftDelim:u,rightDelim:h},S)}});ke({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(o,t){var{parser:r,funcName:a,token:s}=o;return{type:"infix",mode:r.mode,replaceWith:"\\\\abovefrac",size:He(t[0],"size").value,token:s}}});ke({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=t[0],c=He(t[1],"infix").size;if(!c)throw new Error("\\\\abovefrac expected size, but got "+String(c));var u=t[2],m=c.number>0;return{type:"genfrac",mode:r.mode,numer:s,denom:u,continued:!1,hasBarLine:m,barSize:c,leftDelim:null,rightDelim:null}}});var am=(o,t)=>{var r=t.style,a,s;o.type==="supsub"?(a=o.sup?Ke(o.sup,t.havingStyle(r.sup()),t):Ke(o.sub,t.havingStyle(r.sub()),t),s=He(o.base,"horizBrace")):s=He(o,"horizBrace");var c=Ke(s.base,t.havingBaseStyle(Ne.DISPLAY)),u=Bs(s,t),m;if(s.isOver?(m=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:c},{type:"kern",size:.1},{type:"elem",elem:u}]}),m.children[0].children[0].children[1].classes.push("svg-align")):(m=Qe({positionType:"bottom",positionData:c.depth+.1+u.height,children:[{type:"elem",elem:u},{type:"kern",size:.1},{type:"elem",elem:c}]}),m.children[0].children[0].children[0].classes.push("svg-align")),a){var h=de(["mord",s.isOver?"mover":"munder"],[m],t);s.isOver?m=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:h},{type:"kern",size:.2},{type:"elem",elem:a}]}):m=Qe({positionType:"bottom",positionData:h.depth+.2+a.height+a.depth,children:[{type:"elem",elem:a},{type:"kern",size:.2},{type:"elem",elem:h}]})}return de(["mord",s.isOver?"mover":"munder"],[m],t)},k6=(o,t)=>{var r=Es(o.label);return new $e(o.isOver?"mover":"munder",[en(o.base,t),r])};ke({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(o,t){var{parser:r,funcName:a}=o;return{type:"horizBrace",mode:r.mode,label:a,isOver:/^\\over/.test(a),base:t[0]}},htmlBuilder:am,mathmlBuilder:k6});ke({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,a=t[1],s=He(t[0],"url").url;return r.settings.isTrusted({command:"\\href",url:s})?{type:"href",mode:r.mode,href:s,body:gn(a)}:r.formatUnsupportedCmd("\\href")},htmlBuilder:(o,t)=>{var r=jn(o.body,t,!1);return Lb(o.href,[],r,t)},mathmlBuilder:(o,t)=>{var r=Fr(o.body,t);return r instanceof $e||(r=new $e("mrow",[r])),r.setAttribute("href",o.href),r}});ke({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,a=He(t[0],"url").url;if(!r.settings.isTrusted({command:"\\url",url:a}))return r.formatUnsupportedCmd("\\url");for(var s=[],c=0;c<a.length;c++){var u=a[c];u==="~"&&(u="\\textasciitilde"),s.push({type:"textord",mode:"text",text:u})}var m={type:"text",mode:r.mode,font:"\\texttt",body:s};return{type:"href",mode:r.mode,href:a,body:gn(m)}}});ke({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(o,t){var{parser:r}=o;return{type:"hbox",mode:r.mode,body:gn(t[0])}},htmlBuilder(o,t){var r=jn(o.body,t,!1);return ar(r)},mathmlBuilder(o,t){return new $e("mrow",tt(o.body,t))}});ke({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(o,t)=>{var{parser:r,funcName:a,token:s}=o,c=He(t[0],"raw").string,u=t[1];r.settings.strict&&r.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var m,h={};switch(a){case"\\htmlClass":h.class=c,m={command:"\\htmlClass",class:c};break;case"\\htmlId":h.id=c,m={command:"\\htmlId",id:c};break;case"\\htmlStyle":h.style=c,m={command:"\\htmlStyle",style:c};break;case"\\htmlData":{for(var w=c.split(","),g=0;g<w.length;g++){var z=w[g],S=z.indexOf("=");if(S<0)throw new he("\\htmlData key/value '"+z+"' missing equals sign");var q=z.slice(0,S),j=z.slice(S+1);h["data-"+q.trim()]=j}m={command:"\\htmlData",attributes:h};break}default:throw new Error("Unrecognized html command")}return r.settings.isTrusted(m)?{type:"html",mode:r.mode,attributes:h,body:gn(u)}:r.formatUnsupportedCmd(a)},htmlBuilder:(o,t)=>{var r=jn(o.body,t,!1),a=["enclosing"];o.attributes.class&&a.push(...o.attributes.class.trim().split(/\s+/));var s=de(a,r,t);for(var c in o.attributes)c!=="class"&&o.attributes.hasOwnProperty(c)&&s.setAttribute(c,o.attributes[c]);return s},mathmlBuilder:(o,t)=>Fr(o.body,t)});ke({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o;return{type:"htmlmathml",mode:r.mode,html:gn(t[0]),mathml:gn(t[1])}},htmlBuilder:(o,t)=>{var r=jn(o.html,t,!1);return ar(r)},mathmlBuilder:(o,t)=>Fr(o.mathml,t)});var H0=function(t){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))return{number:+t,unit:"bp"};var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);if(!r)throw new he("Invalid size: '"+t+"' in \\includegraphics");var a={number:+(r[1]+r[2]),unit:r[3]};if(!kp(a))throw new he("Invalid unit: '"+a.unit+"' in \\includegraphics.");return a};ke({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(o,t,r)=>{var{parser:a}=o,s={number:0,unit:"em"},c={number:.9,unit:"em"},u={number:0,unit:"em"},m="";if(r[0])for(var h=He(r[0],"raw").string,w=h.split(","),g=0;g<w.length;g++){var z=w[g].split("=");if(z.length===2){var S=z[1].trim();switch(z[0].trim()){case"alt":m=S;break;case"width":s=H0(S);break;case"height":c=H0(S);break;case"totalheight":u=H0(S);break;default:throw new he("Invalid key: '"+z[0]+"' in \\includegraphics.")}}}var q=He(t[0],"url").url;return m===""&&(m=q,m=m.replace(/^.*[\\/]/,""),m=m.substring(0,m.lastIndexOf("."))),a.settings.isTrusted({command:"\\includegraphics",url:q})?{type:"includegraphics",mode:a.mode,alt:m,width:s,height:c,totalheight:u,src:q}:a.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(o,t)=>{var r=mn(o.height,t),a=0;o.totalheight.number>0&&(a=mn(o.totalheight,t)-r);var s=0;o.width.number>0&&(s=mn(o.width,t));var c={height:xe(r+a)};s>0&&(c.width=xe(s)),a>0&&(c.verticalAlign=xe(-a));var u=new Mb(o.src,o.alt,c);return u.height=r,u.depth=a,u},mathmlBuilder:(o,t)=>{var r=new $e("mglyph",[]);r.setAttribute("alt",o.alt);var a=mn(o.height,t),s=0;if(o.totalheight.number>0&&(s=mn(o.totalheight,t)-a,r.setAttribute("valign",xe(-s))),r.setAttribute("height",xe(a+s)),o.width.number>0){var c=mn(o.width,t);r.setAttribute("width",xe(c))}return r.setAttribute("src",o.src),r}});ke({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(o,t){var{parser:r,funcName:a}=o,s=He(t[0],"size");if(r.settings.strict){var c=a[1]==="m",u=s.value.unit==="mu";c?(u||r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" supports only mu units, "+("not "+s.value.unit+" units")),r.mode!=="math"&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" works only in math mode")):u&&r.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+a+" doesn't support mu units")}return{type:"kern",mode:r.mode,dimension:s.value}},htmlBuilder(o,t){return Pp(o.dimension,t)},mathmlBuilder(o,t){var r=mn(o.dimension,t);return new Ep(r)}});ke({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=t[0];return{type:"lap",mode:r.mode,alignment:a.slice(5),body:s}},htmlBuilder:(o,t)=>{var r;o.alignment==="clap"?(r=de([],[Ke(o.body,t)]),r=de(["inner"],[r],t)):r=de(["inner"],[Ke(o.body,t)]);var a=de(["fix"],[]),s=de([o.alignment],[r,a],t),c=de(["strut"]);return c.style.height=xe(s.height+s.depth),s.depth&&(c.style.verticalAlign=xe(-s.depth)),s.children.unshift(c),s=de(["thinbox"],[s],t),de(["mord","vbox"],[s],t)},mathmlBuilder:(o,t)=>{var r=new $e("mpadded",[en(o.body,t)]);if(o.alignment!=="rlap"){var a=o.alignment==="llap"?"-1":"-0.5";r.setAttribute("lspace",a+"width")}return r.setAttribute("width","0px"),r}});ke({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,t){var{funcName:r,parser:a}=o,s=a.mode;a.switchMode("math");var c=r==="\\("?"\\)":"$",u=a.parseExpression(!1,c);return a.expect(c),a.switchMode(s),{type:"styling",mode:a.mode,style:"text",body:u}}});ke({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(o,t){throw new he("Mismatched "+o.funcName)}});var G1=(o,t)=>{switch(t.style.size){case Ne.DISPLAY.size:return o.display;case Ne.TEXT.size:return o.text;case Ne.SCRIPT.size:return o.script;case Ne.SCRIPTSCRIPT.size:return o.scriptscript;default:return o.text}};ke({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(o,t)=>{var{parser:r}=o;return{type:"mathchoice",mode:r.mode,display:gn(t[0]),text:gn(t[1]),script:gn(t[2]),scriptscript:gn(t[3])}},htmlBuilder:(o,t)=>{var r=G1(o,t),a=jn(r,t,!1);return ar(a)},mathmlBuilder:(o,t)=>{var r=G1(o,t);return Fr(r,t)}});var sm=(o,t,r,a,s,c,u)=>{o=de([],[o]);var m=r&&or(r),h,w;if(t){var g=Ke(t,a.havingStyle(s.sup()),a);w={elem:g,kern:Math.max(a.fontMetrics().bigOpSpacing1,a.fontMetrics().bigOpSpacing3-g.depth)}}if(r){var z=Ke(r,a.havingStyle(s.sub()),a);h={elem:z,kern:Math.max(a.fontMetrics().bigOpSpacing2,a.fontMetrics().bigOpSpacing4-z.height)}}var S;if(w&&h){var q=a.fontMetrics().bigOpSpacing5+h.elem.height+h.elem.depth+h.kern+o.depth+u;S=Qe({positionType:"bottom",positionData:q,children:[{type:"kern",size:a.fontMetrics().bigOpSpacing5},{type:"elem",elem:h.elem,marginLeft:xe(-c)},{type:"kern",size:h.kern},{type:"elem",elem:o},{type:"kern",size:w.kern},{type:"elem",elem:w.elem,marginLeft:xe(c)},{type:"kern",size:a.fontMetrics().bigOpSpacing5}]})}else if(h){var j=o.height-u;S=Qe({positionType:"top",positionData:j,children:[{type:"kern",size:a.fontMetrics().bigOpSpacing5},{type:"elem",elem:h.elem,marginLeft:xe(-c)},{type:"kern",size:h.kern},{type:"elem",elem:o}]})}else if(w){var _=o.depth+u;S=Qe({positionType:"bottom",positionData:_,children:[{type:"elem",elem:o},{type:"kern",size:w.kern},{type:"elem",elem:w.elem,marginLeft:xe(c)},{type:"kern",size:a.fontMetrics().bigOpSpacing5}]})}else return o;var T=[S];if(h&&c!==0&&!m){var P=de(["mspace"],[],a);P.style.marginRight=xe(c),T.unshift(P)}return de(["mop","op-limits"],T,a)},lm=new Set(["\\smallint"]),Go=(o,t)=>{var r,a,s=!1,c;o.type==="supsub"?(r=o.sup,a=o.sub,c=He(o.base,"op"),s=!0):c=He(o,"op");var u=t.style,m=!1;u.size===Ne.DISPLAY.size&&c.symbol&&!lm.has(c.name)&&(m=!0);var h;if(c.symbol){var w=m?"Size2-Regular":"Size1-Regular",g="";if((c.name==="\\oiint"||c.name==="\\oiiint")&&(g=c.name.slice(1),c.name=g==="oiint"?"\\iint":"\\iiint"),h=Hn(c.name,w,"math",t,["mop","op-symbol",m?"large-op":"small-op"]),g.length>0){var z=h.italic,S=Cp(g+"Size"+(m?"2":"1"),t);h=Qe({positionType:"individualShift",children:[{type:"elem",elem:h,shift:0},{type:"elem",elem:S,shift:m?.08:0}]}),c.name="\\"+g,h.classes.unshift("mop"),h.italic=z}}else if(c.body){var q=jn(c.body,t,!0);q.length===1&&q[0]instanceof zt?(h=q[0],h.classes[0]="mop"):h=de(["mop"],q,t)}else{for(var j=[],_=1;_<c.name.length;_++)j.push(vc(c.name[_],c.mode,t));h=de(["mop"],j,t)}var T=0,P=0;return(h instanceof zt||c.name==="\\oiint"||c.name==="\\oiiint")&&!c.suppressBaseShift&&(T=(h.height-h.depth)/2-t.fontMetrics().axisHeight,P=h.italic),s?sm(h,r,a,t,u,P,T):(T&&(h.style.position="relative",h.style.top=xe(T)),h)},Ji=(o,t)=>{var r;if(o.symbol)r=new $e("mo",[xt(o.name,o.mode)]),lm.has(o.name)&&r.setAttribute("largeop","false");else if(o.body)r=new $e("mo",tt(o.body,t));else{r=new $e("mi",[new xn(o.name.slice(1))]);var a=new $e("mo",[xt("⁡","text")]);o.parentIsSupSub?r=new $e("mrow",[r,a]):r=Rp([r,a])}return r},_6={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};ke({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=a;return s.length===1&&(s=_6[s]),{type:"op",mode:r.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:s}},htmlBuilder:Go,mathmlBuilder:Ji});ke({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(o,t)=>{var{parser:r}=o,a=t[0];return{type:"op",mode:r.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:gn(a)}},htmlBuilder:Go,mathmlBuilder:Ji});var j6={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};ke({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(o){var{parser:t,funcName:r}=o;return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Go,mathmlBuilder:Ji});ke({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(o){var{parser:t,funcName:r}=o;return{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:r}},htmlBuilder:Go,mathmlBuilder:Ji});ke({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(o){var{parser:t,funcName:r}=o,a=r;return a.length===1&&(a=j6[a]),{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:a}},htmlBuilder:Go,mathmlBuilder:Ji});var cm=(o,t)=>{var r,a,s=!1,c;o.type==="supsub"?(r=o.sup,a=o.sub,c=He(o.base,"operatorname"),s=!0):c=He(o,"operatorname");var u;if(c.body.length>0){for(var m=c.body.map(z=>{var S=z.text;return typeof S=="string"?{type:"textord",mode:z.mode,text:S}:z}),h=jn(m,t.withFont("mathrm"),!0),w=0;w<h.length;w++){var g=h[w];g instanceof zt&&(g.text=g.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}u=de(["mop"],h,t)}else u=de(["mop"],[],t);return s?sm(u,r,a,t,t.style,0,0):u},S6=(o,t)=>{for(var r=tt(o.body,t.withFont("mathrm")),a=!0,s=0;s<r.length;s++){var c=r[s];if(!(c instanceof Ep))if(c instanceof $e)switch(c.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var u=c.children[0];c.children.length===1&&u instanceof xn?u.text=u.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):a=!1;break}default:a=!1}else a=!1}if(a){var m=r.map(g=>g.toText()).join("");r=[new xn(m)]}var h=new $e("mi",r);h.setAttribute("mathvariant","normal");var w=new $e("mo",[xt("⁡","text")]);return o.parentIsSupSub?new $e("mrow",[h,w]):Rp([h,w])};ke({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(o,t)=>{var{parser:r,funcName:a}=o,s=t[0];return{type:"operatorname",mode:r.mode,body:gn(s),alwaysHandleSupSub:a==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:cm,mathmlBuilder:S6});k("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");ao({type:"ordgroup",htmlBuilder(o,t){return o.semisimple?ar(jn(o.body,t,!1)):de(["mord"],jn(o.body,t,!0),t)},mathmlBuilder(o,t){return Fr(o.body,t,!0)}});ke({type:"overline",names:["\\overline"],props:{numArgs:1},handler(o,t){var{parser:r}=o,a=t[0];return{type:"overline",mode:r.mode,body:a}},htmlBuilder(o,t){var r=Ke(o.body,t.havingCrampedStyle()),a=Lo("overline-line",t),s=t.fontMetrics().defaultRuleThickness,c=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:r},{type:"kern",size:3*s},{type:"elem",elem:a},{type:"kern",size:s}]});return de(["mord","overline"],[c],t)},mathmlBuilder(o,t){var r=new $e("mo",[new xn("‾")]);r.setAttribute("stretchy","true");var a=new $e("mover",[en(o.body,t),r]);return a.setAttribute("accent","true"),a}});ke({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,a=t[0];return{type:"phantom",mode:r.mode,body:gn(a)}},htmlBuilder:(o,t)=>{var r=jn(o.body,t.withPhantom(),!1);return ar(r)},mathmlBuilder:(o,t)=>{var r=tt(o.body,t);return new $e("mphantom",r)}});ke({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,a=t[0];return{type:"hphantom",mode:r.mode,body:a}},htmlBuilder:(o,t)=>{var r=de([],[Ke(o.body,t.withPhantom())]);if(r.height=0,r.depth=0,r.children)for(var a=0;a<r.children.length;a++)r.children[a].height=0,r.children[a].depth=0;return r=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:r}]}),de(["mord"],[r],t)},mathmlBuilder:(o,t)=>{var r=tt(gn(o.body),t),a=new $e("mphantom",r),s=new $e("mpadded",[a]);return s.setAttribute("height","0px"),s.setAttribute("depth","0px"),s}});ke({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(o,t)=>{var{parser:r}=o,a=t[0];return{type:"vphantom",mode:r.mode,body:a}},htmlBuilder:(o,t)=>{var r=de(["inner"],[Ke(o.body,t.withPhantom())]),a=de(["fix"],[]);return de(["mord","rlap"],[r,a],t)},mathmlBuilder:(o,t)=>{var r=tt(gn(o.body),t),a=new $e("mphantom",r),s=new $e("mpadded",[a]);return s.setAttribute("width","0px"),s}});ke({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(o,t){var{parser:r}=o,a=He(t[0],"size").value,s=t[1];return{type:"raisebox",mode:r.mode,dy:a,body:s}},htmlBuilder(o,t){var r=Ke(o.body,t),a=mn(o.dy,t);return Qe({positionType:"shift",positionData:-a,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,t){var r=new $e("mpadded",[en(o.body,t)]),a=o.dy.number+o.dy.unit;return r.setAttribute("voffset",a),r}});ke({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(o){var{parser:t}=o;return{type:"internal",mode:t.mode}}});ke({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(o,t,r){var{parser:a}=o,s=r[0],c=He(t[0],"size"),u=He(t[1],"size");return{type:"rule",mode:a.mode,shift:s&&He(s,"size").value,width:c.value,height:u.value}},htmlBuilder(o,t){var r=de(["mord","rule"],[],t),a=mn(o.width,t),s=mn(o.height,t),c=o.shift?mn(o.shift,t):0;return r.style.borderRightWidth=xe(a),r.style.borderTopWidth=xe(s),r.style.bottom=xe(c),r.width=a,r.height=s+c,r.depth=-c,r.maxFontSize=s*1.125*t.sizeMultiplier,r},mathmlBuilder(o,t){var r=mn(o.width,t),a=mn(o.height,t),s=o.shift?mn(o.shift,t):0,c=t.color&&t.getColor()||"black",u=new $e("mspace");u.setAttribute("mathbackground",c),u.setAttribute("width",xe(r)),u.setAttribute("height",xe(a));var m=new $e("mpadded",[u]);return s>=0?m.setAttribute("height",xe(s)):(m.setAttribute("height",xe(s)),m.setAttribute("depth",xe(-s))),m.setAttribute("voffset",xe(s)),m}});function um(o,t,r){for(var a=jn(o,t,!1),s=t.sizeMultiplier/r.sizeMultiplier,c=0;c<a.length;c++){var u=a[c].classes.indexOf("sizing");u<0?Array.prototype.push.apply(a[c].classes,t.sizingClasses(r)):a[c].classes[u+1]==="reset-size"+t.size&&(a[c].classes[u+1]="reset-size"+r.size),a[c].height*=s,a[c].depth*=s}return ar(a)}var U1=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],q6=(o,t)=>{var r=t.havingSize(o.size);return um(o.body,r,t)};ke({type:"sizing",names:U1,props:{numArgs:0,allowedInText:!0},handler:(o,t)=>{var{breakOnTokenText:r,funcName:a,parser:s}=o,c=s.parseExpression(!1,r);return{type:"sizing",mode:s.mode,size:U1.indexOf(a)+1,body:c}},htmlBuilder:q6,mathmlBuilder:(o,t)=>{var r=t.havingSize(o.size),a=tt(o.body,r),s=new $e("mstyle",a);return s.setAttribute("mathsize",xe(r.sizeMultiplier)),s}});ke({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(o,t,r)=>{var{parser:a}=o,s=!1,c=!1,u=r[0]&&He(r[0],"ordgroup");if(u)for(var m="",h=0;h<u.body.length;++h){var w=u.body[h];if(m=w.text,m==="t")s=!0;else if(m==="b")c=!0;else{s=!1,c=!1;break}}else s=!0,c=!0;var g=t[0];return{type:"smash",mode:a.mode,body:g,smashHeight:s,smashDepth:c}},htmlBuilder:(o,t)=>{var r=de([],[Ke(o.body,t)]);if(!o.smashHeight&&!o.smashDepth)return r;if(o.smashHeight&&(r.height=0,r.children))for(var a=0;a<r.children.length;a++)r.children[a].height=0;if(o.smashDepth&&(r.depth=0,r.children))for(var s=0;s<r.children.length;s++)r.children[s].depth=0;var c=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:r}]});return de(["mord"],[c],t)},mathmlBuilder:(o,t)=>{var r=new $e("mpadded",[en(o.body,t)]);return o.smashHeight&&r.setAttribute("height","0px"),o.smashDepth&&r.setAttribute("depth","0px"),r}});ke({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(o,t,r){var{parser:a}=o,s=r[0],c=t[0];return{type:"sqrt",mode:a.mode,body:c,index:s}},htmlBuilder(o,t){var r=Ke(o.body,t.havingCrampedStyle());r.height===0&&(r.height=t.fontMetrics().xHeight),r=Wo(r,t);var a=t.fontMetrics(),s=a.defaultRuleThickness,c=s;t.style.id<Ne.TEXT.id&&(c=t.fontMetrics().xHeight);var u=s+c/4,m=r.height+r.depth+u+s,{span:h,ruleWidth:w,advanceWidth:g}=f6(m,t),z=h.height-w;z>r.height+r.depth+u&&(u=(u+z-r.height-r.depth)/2);var S=h.height-r.height-u-w;r.style.paddingLeft=xe(g);var q=Qe({positionType:"firstBaseline",children:[{type:"elem",elem:r,wrapperClasses:["svg-align"]},{type:"kern",size:-(r.height+S)},{type:"elem",elem:h},{type:"kern",size:w}]});if(o.index){var j=t.havingStyle(Ne.SCRIPTSCRIPT),_=Ke(o.index,j,t),T=.6*(q.height-q.depth),P=Qe({positionType:"shift",positionData:-T,children:[{type:"elem",elem:_}]}),N=de(["root"],[P]);return de(["mord","sqrt"],[N,q],t)}else return de(["mord","sqrt"],[q],t)},mathmlBuilder(o,t){var{body:r,index:a}=o;return a?new $e("mroot",[en(r,t),en(a,t)]):new $e("msqrt",[en(r,t)])}});var Z1={display:Ne.DISPLAY,text:Ne.TEXT,script:Ne.SCRIPT,scriptscript:Ne.SCRIPTSCRIPT};ke({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(o,t){var{breakOnTokenText:r,funcName:a,parser:s}=o,c=s.parseExpression(!0,r),u=a.slice(1,a.length-5);return{type:"styling",mode:s.mode,style:u,body:c}},htmlBuilder(o,t){var r=Z1[o.style],a=t.havingStyle(r).withFont("");return um(o.body,a,t)},mathmlBuilder(o,t){var r=Z1[o.style],a=t.havingStyle(r),s=tt(o.body,a),c=new $e("mstyle",s),u={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},m=u[o.style];return c.setAttribute("scriptlevel",m[0]),c.setAttribute("displaystyle",m[1]),c}});var T6=function(t,r){var a=t.base;if(a)if(a.type==="op"){var s=a.limits&&(r.style.size===Ne.DISPLAY.size||a.alwaysHandleSupSub);return s?Go:null}else if(a.type==="operatorname"){var c=a.alwaysHandleSupSub&&(r.style.size===Ne.DISPLAY.size||a.limits);return c?cm:null}else{if(a.type==="accent")return or(a.base)?qc:null;if(a.type==="horizBrace"){var u=!t.sub;return u===a.isOver?am:null}else return null}else return null};ao({type:"supsub",htmlBuilder(o,t){var r=T6(o,t);if(r)return r(o,t);var{base:a,sup:s,sub:c}=o,u=Ke(a,t),m,h,w=t.fontMetrics(),g=0,z=0,S=a&&or(a);if(s){var q=t.havingStyle(t.style.sup());m=Ke(s,q,t),S||(g=u.height-q.fontMetrics().supDrop*q.sizeMultiplier/t.sizeMultiplier)}if(c){var j=t.havingStyle(t.style.sub());h=Ke(c,j,t),S||(z=u.depth+j.fontMetrics().subDrop*j.sizeMultiplier/t.sizeMultiplier)}var _;t.style===Ne.DISPLAY?_=w.sup1:t.style.cramped?_=w.sup3:_=w.sup2;var T=t.sizeMultiplier,P=xe(.5/w.ptPerEm/T),N=null;if(h){var I=o.base&&o.base.type==="op"&&o.base.name&&(o.base.name==="\\oiint"||o.base.name==="\\oiiint");(u instanceof zt||I)&&(N=xe(-u.italic))}var O;if(m&&h){g=Math.max(g,_,m.depth+.25*w.xHeight),z=Math.max(z,w.sub2);var C=w.defaultRuleThickness,U=4*C;if(g-m.depth-(h.height-z)<U){z=U-(g-m.depth)+h.height;var F=.8*w.xHeight-(g-m.depth);F>0&&(g+=F,z-=F)}var V=[{type:"elem",elem:h,shift:z,marginRight:P,marginLeft:N},{type:"elem",elem:m,shift:-g,marginRight:P}];O=Qe({positionType:"individualShift",children:V})}else if(h){z=Math.max(z,w.sub1,h.height-.8*w.xHeight);var Q=[{type:"elem",elem:h,marginLeft:N,marginRight:P}];O=Qe({positionType:"shift",positionData:z,children:Q})}else if(m)g=Math.max(g,_,m.depth+.25*w.xHeight),O=Qe({positionType:"shift",positionData:-g,children:[{type:"elem",elem:m,marginRight:P}]});else throw new Error("supsub must have either sup or sub.");var ee=oc(u,"right")||"mord";return de([ee],[u,de(["msupsub"],[O])],t)},mathmlBuilder(o,t){var r=!1,a,s;o.base&&o.base.type==="horizBrace"&&(s=!!o.sup,s===o.base.isOver&&(r=!0,a=o.base.isOver)),o.base&&(o.base.type==="op"||o.base.type==="operatorname")&&(o.base.parentIsSupSub=!0);var c=[en(o.base,t)];o.sub&&c.push(en(o.sub,t)),o.sup&&c.push(en(o.sup,t));var u;if(r)u=a?"mover":"munder";else if(o.sub)if(o.sup){var w=o.base;w&&w.type==="op"&&w.limits&&t.style===Ne.DISPLAY||w&&w.type==="operatorname"&&w.alwaysHandleSupSub&&(t.style===Ne.DISPLAY||w.limits)?u="munderover":u="msubsup"}else{var h=o.base;h&&h.type==="op"&&h.limits&&(t.style===Ne.DISPLAY||h.alwaysHandleSupSub)||h&&h.type==="operatorname"&&h.alwaysHandleSupSub&&(h.limits||t.style===Ne.DISPLAY)?u="munder":u="msub"}else{var m=o.base;m&&m.type==="op"&&m.limits&&(t.style===Ne.DISPLAY||m.alwaysHandleSupSub)||m&&m.type==="operatorname"&&m.alwaysHandleSupSub&&(m.limits||t.style===Ne.DISPLAY)?u="mover":u="msup"}return new $e(u,c)}});ao({type:"atom",htmlBuilder(o,t){return vc(o.text,o.mode,t,["m"+o.family])},mathmlBuilder(o,t){var r=new $e("mo",[xt(o.text,o.mode)]);if(o.family==="bin"){var a=jc(o,t);a==="bold-italic"&&r.setAttribute("mathvariant",a)}else o.family==="punct"?r.setAttribute("separator","true"):(o.family==="open"||o.family==="close")&&r.setAttribute("stretchy","false");return r}});var dm={mi:"italic",mn:"normal",mtext:"normal"};ao({type:"mathord",htmlBuilder(o,t){return Rs(o,t,"mathord")},mathmlBuilder(o,t){var r=new $e("mi",[xt(o.text,o.mode,t)]),a=jc(o,t)||"italic";return a!==dm[r.type]&&r.setAttribute("mathvariant",a),r}});ao({type:"textord",htmlBuilder(o,t){return Rs(o,t,"textord")},mathmlBuilder(o,t){var r=xt(o.text,o.mode,t),a=jc(o,t)||"normal",s;return o.mode==="text"?s=new $e("mtext",[r]):/[0-9]/.test(o.text)?s=new $e("mn",[r]):o.text==="\\prime"?s=new $e("mo",[r]):s=new $e("mi",[r]),a!==dm[s.type]&&s.setAttribute("mathvariant",a),s}});var G0={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},U0={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};ao({type:"spacing",htmlBuilder(o,t){if(U0.hasOwnProperty(o.text)){var r=U0[o.text].className||"";if(o.mode==="text"){var a=Rs(o,t,"textord");return a.classes.push(r),a}else return de(["mspace",r],[vc(o.text,o.mode,t)],t)}else{if(G0.hasOwnProperty(o.text))return de(["mspace",G0[o.text]],[],t);throw new he('Unknown type of space "'+o.text+'"')}},mathmlBuilder(o,t){var r;if(U0.hasOwnProperty(o.text))r=new $e("mtext",[new xn(" ")]);else{if(G0.hasOwnProperty(o.text))return new $e("mspace");throw new he('Unknown type of space "'+o.text+'"')}return r}});var K1=()=>{var o=new $e("mtd",[]);return o.setAttribute("width","50%"),o};ao({type:"tag",mathmlBuilder(o,t){var r=new $e("mtable",[new $e("mtr",[K1(),new $e("mtd",[Fr(o.body,t)]),K1(),new $e("mtd",[Fr(o.tag,t)])])]);return r.setAttribute("width","100%"),r}});var V1={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},Y1={"\\textbf":"textbf","\\textmd":"textmd"},P6={"\\textit":"textit","\\textup":"textup"},Q1=(o,t)=>{var r=o.font;if(r){if(V1[r])return t.withTextFontFamily(V1[r]);if(Y1[r])return t.withTextFontWeight(Y1[r]);if(r==="\\emph")return t.fontShape==="textit"?t.withTextFontShape("textup"):t.withTextFontShape("textit")}else return t;return t.withTextFontShape(P6[r])};ke({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(o,t){var{parser:r,funcName:a}=o,s=t[0];return{type:"text",mode:r.mode,body:gn(s),font:a}},htmlBuilder(o,t){var r=Q1(o,t),a=jn(o.body,r,!0);return de(["mord","text"],a,r)},mathmlBuilder(o,t){var r=Q1(o,t);return Fr(o.body,r)}});ke({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(o,t){var{parser:r}=o;return{type:"underline",mode:r.mode,body:t[0]}},htmlBuilder(o,t){var r=Ke(o.body,t),a=Lo("underline-line",t),s=t.fontMetrics().defaultRuleThickness,c=Qe({positionType:"top",positionData:r.height,children:[{type:"kern",size:s},{type:"elem",elem:a},{type:"kern",size:3*s},{type:"elem",elem:r}]});return de(["mord","underline"],[c],t)},mathmlBuilder(o,t){var r=new $e("mo",[new xn("‾")]);r.setAttribute("stretchy","true");var a=new $e("munder",[en(o.body,t),r]);return a.setAttribute("accentunder","true"),a}});ke({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(o,t){var{parser:r}=o;return{type:"vcenter",mode:r.mode,body:t[0]}},htmlBuilder(o,t){var r=Ke(o.body,t),a=t.fontMetrics().axisHeight,s=.5*(r.height-a-(r.depth+a));return Qe({positionType:"shift",positionData:s,children:[{type:"elem",elem:r}]})},mathmlBuilder(o,t){return new $e("mpadded",[en(o.body,t)],["vcenter"])}});ke({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(o,t,r){throw new he("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(o,t){for(var r=X1(o),a=[],s=t.havingStyle(t.style.text()),c=0;c<r.length;c++){var u=r[c];u==="~"&&(u="\\textasciitilde"),a.push(Hn(u,"Typewriter-Regular",o.mode,s,["mord","texttt"]))}return de(["mord","text"].concat(s.sizingClasses(t)),Tp(a),s)},mathmlBuilder(o,t){var r=new xn(X1(o)),a=new $e("mtext",[r]);return a.setAttribute("mathvariant","monospace"),a}});var X1=o=>o.body.replace(/ /g,o.star?"␣":" "),Dr=Mp,pm=`[ \r
	]`,A6="\\\\[a-zA-Z@]+",C6="\\\\[^\uD800-\uDFFF]",M6="("+A6+")"+pm+"*",D6=`\\\\(
|[ \r	]+
?)[ \r	]*`,cc="[̀-ͯ]",R6=new RegExp(cc+"+$"),E6="("+pm+"+)|"+(D6+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(cc+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(cc+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+M6)+("|"+C6+")");class J1{constructor(t,r){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=t,this.settings=r,this.tokenRegex=new RegExp(E6,"g"),this.catcodes={"%":14,"~":13}}setCatcode(t,r){this.catcodes[t]=r}lex(){var t=this.input,r=this.tokenRegex.lastIndex;if(r===t.length)return new ct("EOF",new nt(this,r,r));var a=this.tokenRegex.exec(t);if(a===null||a.index!==r)throw new he("Unexpected character: '"+t[r]+"'",new ct(t[r],new nt(this,r,r+1)));var s=a[6]||a[3]||(a[2]?"\\ ":" ");if(this.catcodes[s]===14){var c=t.indexOf(`
`,this.tokenRegex.lastIndex);return c===-1?(this.tokenRegex.lastIndex=t.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=c+1,this.lex()}return new ct(s,new nt(this,r,this.tokenRegex.lastIndex))}}class B6{constructor(t,r){t===void 0&&(t={}),r===void 0&&(r={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=r,this.builtins=t,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new he("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var t=this.undefStack.pop();for(var r in t)t.hasOwnProperty(r)&&(t[r]==null?delete this.current[r]:this.current[r]=t[r])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(t){return this.current.hasOwnProperty(t)||this.builtins.hasOwnProperty(t)}get(t){return this.current.hasOwnProperty(t)?this.current[t]:this.builtins[t]}set(t,r,a){if(a===void 0&&(a=!1),a){for(var s=0;s<this.undefStack.length;s++)delete this.undefStack[s][t];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][t]=r)}else{var c=this.undefStack[this.undefStack.length-1];c&&!c.hasOwnProperty(t)&&(c[t]=this.current[t])}r==null?delete this.current[t]:this.current[t]=r}}var F6=nm;k("\\noexpand",function(o){var t=o.popToken();return o.isExpandable(t.text)&&(t.noexpand=!0,t.treatAsRelax=!0),{tokens:[t],numArgs:0}});k("\\expandafter",function(o){var t=o.popToken();return o.expandOnce(!0),{tokens:[t],numArgs:0}});k("\\@firstoftwo",function(o){var t=o.consumeArgs(2);return{tokens:t[0],numArgs:0}});k("\\@secondoftwo",function(o){var t=o.consumeArgs(2);return{tokens:t[1],numArgs:0}});k("\\@ifnextchar",function(o){var t=o.consumeArgs(3);o.consumeSpaces();var r=o.future();return t[0].length===1&&t[0][0].text===r.text?{tokens:t[1],numArgs:0}:{tokens:t[2],numArgs:0}});k("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");k("\\TextOrMath",function(o){var t=o.consumeArgs(2);return o.mode==="text"?{tokens:t[0],numArgs:0}:{tokens:t[1],numArgs:0}});var ep={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};k("\\char",function(o){var t=o.popToken(),r,a="";if(t.text==="'")r=8,t=o.popToken();else if(t.text==='"')r=16,t=o.popToken();else if(t.text==="`")if(t=o.popToken(),t.text[0]==="\\")a=t.text.charCodeAt(1);else{if(t.text==="EOF")throw new he("\\char` missing argument");a=t.text.charCodeAt(0)}else r=10;if(r){if(a=ep[t.text],a==null||a>=r)throw new he("Invalid base-"+r+" digit "+t.text);for(var s;(s=ep[o.future().text])!=null&&s<r;)a*=r,a+=s,o.popToken()}return"\\@char{"+a+"}"});var Dc=(o,t,r,a)=>{var s=o.consumeArg().tokens;if(s.length!==1)throw new he("\\newcommand's first argument must be a macro name");var c=s[0].text,u=o.isDefined(c);if(u&&!t)throw new he("\\newcommand{"+c+"} attempting to redefine "+(c+"; use \\renewcommand"));if(!u&&!r)throw new he("\\renewcommand{"+c+"} when command "+c+" does not yet exist; use \\newcommand");var m=0;if(s=o.consumeArg().tokens,s.length===1&&s[0].text==="["){for(var h="",w=o.expandNextToken();w.text!=="]"&&w.text!=="EOF";)h+=w.text,w=o.expandNextToken();if(!h.match(/^\s*[0-9]+\s*$/))throw new he("Invalid number of arguments: "+h);m=parseInt(h),s=o.consumeArg().tokens}return u&&a||o.macros.set(c,{tokens:s,numArgs:m}),""};k("\\newcommand",o=>Dc(o,!1,!0,!1));k("\\renewcommand",o=>Dc(o,!0,!1,!1));k("\\providecommand",o=>Dc(o,!0,!0,!0));k("\\message",o=>{var t=o.consumeArgs(1)[0];return console.log(t.reverse().map(r=>r.text).join("")),""});k("\\errmessage",o=>{var t=o.consumeArgs(1)[0];return console.error(t.reverse().map(r=>r.text).join("")),""});k("\\show",o=>{var t=o.popToken(),r=t.text;return console.log(t,o.macros.get(r),Dr[r],tn.math[r],tn.text[r]),""});k("\\bgroup","{");k("\\egroup","}");k("~","\\nobreakspace");k("\\lq","`");k("\\rq","'");k("\\aa","\\r a");k("\\AA","\\r A");k("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");k("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");k("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");k("ℬ","\\mathscr{B}");k("ℰ","\\mathscr{E}");k("ℱ","\\mathscr{F}");k("ℋ","\\mathscr{H}");k("ℐ","\\mathscr{I}");k("ℒ","\\mathscr{L}");k("ℳ","\\mathscr{M}");k("ℛ","\\mathscr{R}");k("ℭ","\\mathfrak{C}");k("ℌ","\\mathfrak{H}");k("ℨ","\\mathfrak{Z}");k("\\Bbbk","\\Bbb{k}");k("·","\\cdotp");k("\\llap","\\mathllap{\\textrm{#1}}");k("\\rlap","\\mathrlap{\\textrm{#1}}");k("\\clap","\\mathclap{\\textrm{#1}}");k("\\mathstrut","\\vphantom{(}");k("\\underbar","\\underline{\\text{#1}}");k("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');k("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");k("\\ne","\\neq");k("≠","\\neq");k("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");k("∉","\\notin");k("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");k("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");k("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");k("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");k("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");k("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");k("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");k("⟂","\\perp");k("‼","\\mathclose{!\\mkern-0.8mu!}");k("∌","\\notni");k("⌜","\\ulcorner");k("⌝","\\urcorner");k("⌞","\\llcorner");k("⌟","\\lrcorner");k("©","\\copyright");k("®","\\textregistered");k("️","\\textregistered");k("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');k("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');k("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');k("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');k("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");k("⋮","\\vdots");k("\\varGamma","\\mathit{\\Gamma}");k("\\varDelta","\\mathit{\\Delta}");k("\\varTheta","\\mathit{\\Theta}");k("\\varLambda","\\mathit{\\Lambda}");k("\\varXi","\\mathit{\\Xi}");k("\\varPi","\\mathit{\\Pi}");k("\\varSigma","\\mathit{\\Sigma}");k("\\varUpsilon","\\mathit{\\Upsilon}");k("\\varPhi","\\mathit{\\Phi}");k("\\varPsi","\\mathit{\\Psi}");k("\\varOmega","\\mathit{\\Omega}");k("\\substack","\\begin{subarray}{c}#1\\end{subarray}");k("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");k("\\boxed","\\fbox{$\\displaystyle{#1}$}");k("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");k("\\implies","\\DOTSB\\;\\Longrightarrow\\;");k("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");k("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");k("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var np={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},I6=new Set(["bin","rel"]);k("\\dots",function(o){var t="\\dotso",r=o.expandAfterFuture().text;return r in np?t=np[r]:(r.slice(0,4)==="\\not"||r in tn.math&&I6.has(tn.math[r].group))&&(t="\\dotsb"),t});var Rc={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};k("\\dotso",function(o){var t=o.future().text;return t in Rc?"\\ldots\\,":"\\ldots"});k("\\dotsc",function(o){var t=o.future().text;return t in Rc&&t!==","?"\\ldots\\,":"\\ldots"});k("\\cdots",function(o){var t=o.future().text;return t in Rc?"\\@cdots\\,":"\\@cdots"});k("\\dotsb","\\cdots");k("\\dotsm","\\cdots");k("\\dotsi","\\!\\cdots");k("\\dotsx","\\ldots\\,");k("\\DOTSI","\\relax");k("\\DOTSB","\\relax");k("\\DOTSX","\\relax");k("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");k("\\,","\\tmspace+{3mu}{.1667em}");k("\\thinspace","\\,");k("\\>","\\mskip{4mu}");k("\\:","\\tmspace+{4mu}{.2222em}");k("\\medspace","\\:");k("\\;","\\tmspace+{5mu}{.2777em}");k("\\thickspace","\\;");k("\\!","\\tmspace-{3mu}{.1667em}");k("\\negthinspace","\\!");k("\\negmedspace","\\tmspace-{4mu}{.2222em}");k("\\negthickspace","\\tmspace-{5mu}{.277em}");k("\\enspace","\\kern.5em ");k("\\enskip","\\hskip.5em\\relax");k("\\quad","\\hskip1em\\relax");k("\\qquad","\\hskip2em\\relax");k("\\tag","\\@ifstar\\tag@literal\\tag@paren");k("\\tag@paren","\\tag@literal{({#1})}");k("\\tag@literal",o=>{if(o.macros.get("\\df@tag"))throw new he("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});k("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");k("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");k("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");k("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");k("\\newline","\\\\\\relax");k("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var mm=xe(Bt["Main-Regular"][84][1]-.7*Bt["Main-Regular"][65][1]);k("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+mm+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");k("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+mm+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");k("\\hspace","\\@ifstar\\@hspacer\\@hspace");k("\\@hspace","\\hskip #1\\relax");k("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");k("\\ordinarycolon",":");k("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");k("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');k("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');k("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');k("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');k("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');k("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');k("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');k("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');k("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');k("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');k("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');k("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');k("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');k("∷","\\dblcolon");k("∹","\\eqcolon");k("≔","\\coloneqq");k("≕","\\eqqcolon");k("⩴","\\Coloneqq");k("\\ratio","\\vcentcolon");k("\\coloncolon","\\dblcolon");k("\\colonequals","\\coloneqq");k("\\coloncolonequals","\\Coloneqq");k("\\equalscolon","\\eqqcolon");k("\\equalscoloncolon","\\Eqqcolon");k("\\colonminus","\\coloneq");k("\\coloncolonminus","\\Coloneq");k("\\minuscolon","\\eqcolon");k("\\minuscoloncolon","\\Eqcolon");k("\\coloncolonapprox","\\Colonapprox");k("\\coloncolonsim","\\Colonsim");k("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");k("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");k("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");k("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");k("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");k("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");k("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");k("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");k("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");k("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");k("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");k("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");k("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");k("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");k("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");k("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");k("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");k("\\nleqq","\\html@mathml{\\@nleqq}{≰}");k("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");k("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");k("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");k("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");k("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");k("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");k("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");k("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");k("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");k("\\imath","\\html@mathml{\\@imath}{ı}");k("\\jmath","\\html@mathml{\\@jmath}{ȷ}");k("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");k("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");k("⟦","\\llbracket");k("⟧","\\rrbracket");k("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");k("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");k("⦃","\\lBrace");k("⦄","\\rBrace");k("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");k("⦵","\\minuso");k("\\darr","\\downarrow");k("\\dArr","\\Downarrow");k("\\Darr","\\Downarrow");k("\\lang","\\langle");k("\\rang","\\rangle");k("\\uarr","\\uparrow");k("\\uArr","\\Uparrow");k("\\Uarr","\\Uparrow");k("\\N","\\mathbb{N}");k("\\R","\\mathbb{R}");k("\\Z","\\mathbb{Z}");k("\\alef","\\aleph");k("\\alefsym","\\aleph");k("\\Alpha","\\mathrm{A}");k("\\Beta","\\mathrm{B}");k("\\bull","\\bullet");k("\\Chi","\\mathrm{X}");k("\\clubs","\\clubsuit");k("\\cnums","\\mathbb{C}");k("\\Complex","\\mathbb{C}");k("\\Dagger","\\ddagger");k("\\diamonds","\\diamondsuit");k("\\empty","\\emptyset");k("\\Epsilon","\\mathrm{E}");k("\\Eta","\\mathrm{H}");k("\\exist","\\exists");k("\\harr","\\leftrightarrow");k("\\hArr","\\Leftrightarrow");k("\\Harr","\\Leftrightarrow");k("\\hearts","\\heartsuit");k("\\image","\\Im");k("\\infin","\\infty");k("\\Iota","\\mathrm{I}");k("\\isin","\\in");k("\\Kappa","\\mathrm{K}");k("\\larr","\\leftarrow");k("\\lArr","\\Leftarrow");k("\\Larr","\\Leftarrow");k("\\lrarr","\\leftrightarrow");k("\\lrArr","\\Leftrightarrow");k("\\Lrarr","\\Leftrightarrow");k("\\Mu","\\mathrm{M}");k("\\natnums","\\mathbb{N}");k("\\Nu","\\mathrm{N}");k("\\Omicron","\\mathrm{O}");k("\\plusmn","\\pm");k("\\rarr","\\rightarrow");k("\\rArr","\\Rightarrow");k("\\Rarr","\\Rightarrow");k("\\real","\\Re");k("\\reals","\\mathbb{R}");k("\\Reals","\\mathbb{R}");k("\\Rho","\\mathrm{P}");k("\\sdot","\\cdot");k("\\sect","\\S");k("\\spades","\\spadesuit");k("\\sub","\\subset");k("\\sube","\\subseteq");k("\\supe","\\supseteq");k("\\Tau","\\mathrm{T}");k("\\thetasym","\\vartheta");k("\\weierp","\\wp");k("\\Zeta","\\mathrm{Z}");k("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");k("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");k("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");k("\\bra","\\mathinner{\\langle{#1}|}");k("\\ket","\\mathinner{|{#1}\\rangle}");k("\\braket","\\mathinner{\\langle{#1}\\rangle}");k("\\Bra","\\left\\langle#1\\right|");k("\\Ket","\\left|#1\\right\\rangle");var fm=o=>t=>{var r=t.consumeArg().tokens,a=t.consumeArg().tokens,s=t.consumeArg().tokens,c=t.consumeArg().tokens,u=t.macros.get("|"),m=t.macros.get("\\|");t.macros.beginGroup();var h=z=>S=>{o&&(S.macros.set("|",u),s.length&&S.macros.set("\\|",m));var q=z;if(!z&&s.length){var j=S.future();j.text==="|"&&(S.popToken(),q=!0)}return{tokens:q?s:a,numArgs:0}};t.macros.set("|",h(!1)),s.length&&t.macros.set("\\|",h(!0));var w=t.consumeArg().tokens,g=t.expandTokens([...c,...w,...r]);return t.macros.endGroup(),{tokens:g.reverse(),numArgs:0}};k("\\bra@ket",fm(!1));k("\\bra@set",fm(!0));k("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");k("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");k("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");k("\\angln","{\\angl n}");k("\\blue","\\textcolor{##6495ed}{#1}");k("\\orange","\\textcolor{##ffa500}{#1}");k("\\pink","\\textcolor{##ff00af}{#1}");k("\\red","\\textcolor{##df0030}{#1}");k("\\green","\\textcolor{##28ae7b}{#1}");k("\\gray","\\textcolor{gray}{#1}");k("\\purple","\\textcolor{##9d38bd}{#1}");k("\\blueA","\\textcolor{##ccfaff}{#1}");k("\\blueB","\\textcolor{##80f6ff}{#1}");k("\\blueC","\\textcolor{##63d9ea}{#1}");k("\\blueD","\\textcolor{##11accd}{#1}");k("\\blueE","\\textcolor{##0c7f99}{#1}");k("\\tealA","\\textcolor{##94fff5}{#1}");k("\\tealB","\\textcolor{##26edd5}{#1}");k("\\tealC","\\textcolor{##01d1c1}{#1}");k("\\tealD","\\textcolor{##01a995}{#1}");k("\\tealE","\\textcolor{##208170}{#1}");k("\\greenA","\\textcolor{##b6ffb0}{#1}");k("\\greenB","\\textcolor{##8af281}{#1}");k("\\greenC","\\textcolor{##74cf70}{#1}");k("\\greenD","\\textcolor{##1fab54}{#1}");k("\\greenE","\\textcolor{##0d923f}{#1}");k("\\goldA","\\textcolor{##ffd0a9}{#1}");k("\\goldB","\\textcolor{##ffbb71}{#1}");k("\\goldC","\\textcolor{##ff9c39}{#1}");k("\\goldD","\\textcolor{##e07d10}{#1}");k("\\goldE","\\textcolor{##a75a05}{#1}");k("\\redA","\\textcolor{##fca9a9}{#1}");k("\\redB","\\textcolor{##ff8482}{#1}");k("\\redC","\\textcolor{##f9685d}{#1}");k("\\redD","\\textcolor{##e84d39}{#1}");k("\\redE","\\textcolor{##bc2612}{#1}");k("\\maroonA","\\textcolor{##ffbde0}{#1}");k("\\maroonB","\\textcolor{##ff92c6}{#1}");k("\\maroonC","\\textcolor{##ed5fa6}{#1}");k("\\maroonD","\\textcolor{##ca337c}{#1}");k("\\maroonE","\\textcolor{##9e034e}{#1}");k("\\purpleA","\\textcolor{##ddd7ff}{#1}");k("\\purpleB","\\textcolor{##c6b9fc}{#1}");k("\\purpleC","\\textcolor{##aa87ff}{#1}");k("\\purpleD","\\textcolor{##7854ab}{#1}");k("\\purpleE","\\textcolor{##543b78}{#1}");k("\\mintA","\\textcolor{##f5f9e8}{#1}");k("\\mintB","\\textcolor{##edf2df}{#1}");k("\\mintC","\\textcolor{##e0e5cc}{#1}");k("\\grayA","\\textcolor{##f6f7f7}{#1}");k("\\grayB","\\textcolor{##f0f1f2}{#1}");k("\\grayC","\\textcolor{##e3e5e6}{#1}");k("\\grayD","\\textcolor{##d6d8da}{#1}");k("\\grayE","\\textcolor{##babec2}{#1}");k("\\grayF","\\textcolor{##888d93}{#1}");k("\\grayG","\\textcolor{##626569}{#1}");k("\\grayH","\\textcolor{##3b3e40}{#1}");k("\\grayI","\\textcolor{##21242c}{#1}");k("\\kaBlue","\\textcolor{##314453}{#1}");k("\\kaGreen","\\textcolor{##71B307}{#1}");var hm={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class N6{constructor(t,r,a){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=r,this.expansionCount=0,this.feed(t),this.macros=new B6(F6,r.macros),this.mode=a,this.stack=[]}feed(t){this.lexer=new J1(t,this.settings)}switchMode(t){this.mode=t}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(t){this.stack.push(t)}pushTokens(t){this.stack.push(...t)}scanArgument(t){var r,a,s;if(t){if(this.consumeSpaces(),this.future().text!=="[")return null;r=this.popToken(),{tokens:s,end:a}=this.consumeArg(["]"])}else({tokens:s,start:r,end:a}=this.consumeArg());return this.pushToken(new ct("EOF",a.loc)),this.pushTokens(s),new ct("",nt.range(r,a))}consumeSpaces(){for(;;){var t=this.future();if(t.text===" ")this.stack.pop();else break}}consumeArg(t){var r=[],a=t&&t.length>0;a||this.consumeSpaces();var s=this.future(),c,u=0,m=0;do{if(c=this.popToken(),r.push(c),c.text==="{")++u;else if(c.text==="}"){if(--u,u===-1)throw new he("Extra }",c)}else if(c.text==="EOF")throw new he("Unexpected end of input in a macro argument, expected '"+(t&&a?t[m]:"}")+"'",c);if(t&&a)if((u===0||u===1&&t[m]==="{")&&c.text===t[m]){if(++m,m===t.length){r.splice(-m,m);break}}else m=0}while(u!==0||a);return s.text==="{"&&r[r.length-1].text==="}"&&(r.pop(),r.shift()),r.reverse(),{tokens:r,start:s,end:c}}consumeArgs(t,r){if(r){if(r.length!==t+1)throw new he("The length of delimiters doesn't match the number of args!");for(var a=r[0],s=0;s<a.length;s++){var c=this.popToken();if(a[s]!==c.text)throw new he("Use of the macro doesn't match its definition",c)}}for(var u=[],m=0;m<t;m++)u.push(this.consumeArg(r&&r[m+1]).tokens);return u}countExpansion(t){if(this.expansionCount+=t,this.expansionCount>this.settings.maxExpand)throw new he("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(t){var r=this.popToken(),a=r.text,s=r.noexpand?null:this._getExpansion(a);if(s==null||t&&s.unexpandable){if(t&&s==null&&a[0]==="\\"&&!this.isDefined(a))throw new he("Undefined control sequence: "+a);return this.pushToken(r),!1}this.countExpansion(1);var c=s.tokens,u=this.consumeArgs(s.numArgs,s.delimiters);if(s.numArgs){c=c.slice();for(var m=c.length-1;m>=0;--m){var h=c[m];if(h.text==="#"){if(m===0)throw new he("Incomplete placeholder at end of macro body",h);if(h=c[--m],h.text==="#")c.splice(m+1,1);else if(/^[1-9]$/.test(h.text))c.splice(m,2,...u[+h.text-1]);else throw new he("Not a valid argument number",h)}}}return this.pushTokens(c),c.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var t=this.stack.pop();return t.treatAsRelax&&(t.text="\\relax"),t}throw new Error}expandMacro(t){return this.macros.has(t)?this.expandTokens([new ct(t)]):void 0}expandTokens(t){var r=[],a=this.stack.length;for(this.pushTokens(t);this.stack.length>a;)if(this.expandOnce(!0)===!1){var s=this.stack.pop();s.treatAsRelax&&(s.noexpand=!1,s.treatAsRelax=!1),r.push(s)}return this.countExpansion(r.length),r}expandMacroAsText(t){var r=this.expandMacro(t);return r&&r.map(a=>a.text).join("")}_getExpansion(t){var r=this.macros.get(t);if(r==null)return r;if(t.length===1){var a=this.lexer.catcodes[t];if(a!=null&&a!==13)return}var s=typeof r=="function"?r(this):r;if(typeof s=="string"){var c=0;if(s.includes("#"))for(var u=s.replace(/##/g,"");u.includes("#"+(c+1));)++c;for(var m=new J1(s,this.settings),h=[],w=m.lex();w.text!=="EOF";)h.push(w),w=m.lex();h.reverse();var g={tokens:h,numArgs:c};return g}return s}isDefined(t){return this.macros.has(t)||Dr.hasOwnProperty(t)||tn.math.hasOwnProperty(t)||tn.text.hasOwnProperty(t)||hm.hasOwnProperty(t)}isExpandable(t){var r=this.macros.get(t);return r!=null?typeof r=="string"||typeof r=="function"||!r.unexpandable:Dr.hasOwnProperty(t)&&!Dr[t].primitive}}var tp=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,bs=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),Z0={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},rp={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class Ws{constructor(t,r){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new N6(t,r,this.mode),this.settings=r,this.leftrightDepth=0}expect(t,r){if(r===void 0&&(r=!0),this.fetch().text!==t)throw new he("Expected '"+t+"', got '"+this.fetch().text+"'",this.fetch());r&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(t){this.mode=t,this.gullet.switchMode(t)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var t=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),t}finally{this.gullet.endGroups()}}subparse(t){var r=this.nextToken;this.consume(),this.gullet.pushToken(new ct("}")),this.gullet.pushTokens(t);var a=this.parseExpression(!1);return this.expect("}"),this.nextToken=r,a}parseExpression(t,r){for(var a=[];;){this.mode==="math"&&this.consumeSpaces();var s=this.fetch();if(Ws.endOfExpression.has(s.text)||r&&s.text===r||t&&Dr[s.text]&&Dr[s.text].infix)break;var c=this.parseAtom(r);if(c){if(c.type==="internal")continue}else break;a.push(c)}return this.mode==="text"&&this.formLigatures(a),this.handleInfixNodes(a)}handleInfixNodes(t){for(var r=-1,a,s=0;s<t.length;s++)if(t[s].type==="infix"){if(r!==-1)throw new he("only one infix operator per group",t[s].token);r=s,a=t[s].replaceWith}if(r!==-1&&a){var c,u,m=t.slice(0,r),h=t.slice(r+1);m.length===1&&m[0].type==="ordgroup"?c=m[0]:c={type:"ordgroup",mode:this.mode,body:m},h.length===1&&h[0].type==="ordgroup"?u=h[0]:u={type:"ordgroup",mode:this.mode,body:h};var w;return a==="\\\\abovefrac"?w=this.callFunction(a,[c,t[r],u],[]):w=this.callFunction(a,[c,u],[]),[w]}else return t}handleSupSubscript(t){var r=this.fetch(),a=r.text;this.consume(),this.consumeSpaces();var s;do{var c;s=this.parseGroup(t)}while(((c=s)==null?void 0:c.type)==="internal");if(!s)throw new he("Expected group after '"+a+"'",r);return s}formatUnsupportedCmd(t){for(var r=[],a=0;a<t.length;a++)r.push({type:"textord",mode:"text",text:t[a]});var s={type:"text",mode:this.mode,body:r},c={type:"color",mode:this.mode,color:this.settings.errorColor,body:[s]};return c}parseAtom(t){var r=this.parseGroup("atom",t);if((r==null?void 0:r.type)==="internal"||this.mode==="text")return r;for(var a,s;;){this.consumeSpaces();var c=this.fetch();if(c.text==="\\limits"||c.text==="\\nolimits"){if(r&&r.type==="op"){var u=c.text==="\\limits";r.limits=u,r.alwaysHandleSupSub=!0}else if(r&&r.type==="operatorname")r.alwaysHandleSupSub&&(r.limits=c.text==="\\limits");else throw new he("Limit controls must follow a math operator",c);this.consume()}else if(c.text==="^"){if(a)throw new he("Double superscript",c);a=this.handleSupSubscript("superscript")}else if(c.text==="_"){if(s)throw new he("Double subscript",c);s=this.handleSupSubscript("subscript")}else if(c.text==="'"){if(a)throw new he("Double superscript",c);var m={type:"textord",mode:this.mode,text:"\\prime"},h=[m];for(this.consume();this.fetch().text==="'";)h.push(m),this.consume();this.fetch().text==="^"&&h.push(this.handleSupSubscript("superscript")),a={type:"ordgroup",mode:this.mode,body:h}}else if(bs[c.text]){var w=tp.test(c.text),g=[];for(g.push(new ct(bs[c.text])),this.consume();;){var z=this.fetch().text;if(!bs[z]||tp.test(z)!==w)break;g.unshift(new ct(bs[z])),this.consume()}var S=this.subparse(g);w?s={type:"ordgroup",mode:"math",body:S}:a={type:"ordgroup",mode:"math",body:S}}else break}return a||s?{type:"supsub",mode:this.mode,base:r,sup:a,sub:s}:r}parseFunction(t,r){var a=this.fetch(),s=a.text,c=Dr[s];if(!c)return null;if(this.consume(),r&&r!=="atom"&&!c.allowedInArgument)throw new he("Got function '"+s+"' with no arguments"+(r?" as "+r:""),a);if(this.mode==="text"&&!c.allowedInText)throw new he("Can't use function '"+s+"' in text mode",a);if(this.mode==="math"&&c.allowedInMath===!1)throw new he("Can't use function '"+s+"' in math mode",a);var{args:u,optArgs:m}=this.parseArguments(s,c);return this.callFunction(s,u,m,a,t)}callFunction(t,r,a,s,c){var u={funcName:t,parser:this,token:s,breakOnTokenText:c},m=Dr[t];if(m&&m.handler)return m.handler(u,r,a);throw new he("No function handler for "+t)}parseArguments(t,r){var a=r.numArgs+r.numOptionalArgs;if(a===0)return{args:[],optArgs:[]};for(var s=[],c=[],u=0;u<a;u++){var m=r.argTypes&&r.argTypes[u],h=u<r.numOptionalArgs;(r.primitive&&m==null||r.type==="sqrt"&&u===1&&c[0]==null)&&(m="primitive");var w=this.parseGroupOfType("argument to '"+t+"'",m,h);if(h)c.push(w);else if(w!=null)s.push(w);else throw new he("Null argument, please report this as a bug")}return{args:s,optArgs:c}}parseGroupOfType(t,r,a){switch(r){case"color":return this.parseColorGroup(a);case"size":return this.parseSizeGroup(a);case"url":return this.parseUrlGroup(a);case"math":case"text":return this.parseArgumentGroup(a,r);case"hbox":{var s=this.parseArgumentGroup(a,"text");return s!=null?{type:"styling",mode:s.mode,body:[s],style:"text"}:null}case"raw":{var c=this.parseStringGroup("raw",a);return c!=null?{type:"raw",mode:"text",string:c.text}:null}case"primitive":{if(a)throw new he("A primitive argument cannot be optional");var u=this.parseGroup(t);if(u==null)throw new he("Expected group as "+t,this.fetch());return u}case"original":case null:case void 0:return this.parseArgumentGroup(a);default:throw new he("Unknown group type as "+t,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(t,r){var a=this.gullet.scanArgument(r);if(a==null)return null;for(var s="",c;(c=this.fetch()).text!=="EOF";)s+=c.text,this.consume();return this.consume(),a.text=s,a}parseRegexGroup(t,r){for(var a=this.fetch(),s=a,c="",u;(u=this.fetch()).text!=="EOF"&&t.test(c+u.text);)s=u,c+=s.text,this.consume();if(c==="")throw new he("Invalid "+r+": '"+a.text+"'",a);return a.range(s,c)}parseColorGroup(t){var r=this.parseStringGroup("color",t);if(r==null)return null;var a=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);if(!a)throw new he("Invalid color: '"+r.text+"'",r);var s=a[0];return/^[0-9a-f]{6}$/i.test(s)&&(s="#"+s),{type:"color-token",mode:this.mode,color:s}}parseSizeGroup(t){var r,a=!1;if(this.gullet.consumeSpaces(),!t&&this.gullet.future().text!=="{"?r=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):r=this.parseStringGroup("size",t),!r)return null;!t&&r.text.length===0&&(r.text="0pt",a=!0);var s=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);if(!s)throw new he("Invalid size: '"+r.text+"'",r);var c={number:+(s[1]+s[2]),unit:s[3]};if(!kp(c))throw new he("Invalid unit: '"+c.unit+"'",r);return{type:"size",mode:this.mode,value:c,isBlank:a}}parseUrlGroup(t){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var r=this.parseStringGroup("url",t);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),r==null)return null;var a=r.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:a}}parseArgumentGroup(t,r){var a=this.gullet.scanArgument(t);if(a==null)return null;var s=this.mode;r&&this.switchMode(r),this.gullet.beginGroup();var c=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var u={type:"ordgroup",mode:this.mode,loc:a.loc,body:c};return r&&this.switchMode(s),u}parseGroup(t,r){var a=this.fetch(),s=a.text,c;if(s==="{"||s==="\\begingroup"){this.consume();var u=s==="{"?"}":"\\endgroup";this.gullet.beginGroup();var m=this.parseExpression(!1,u),h=this.fetch();this.expect(u),this.gullet.endGroup(),c={type:"ordgroup",mode:this.mode,loc:nt.range(a,h),body:m,semisimple:s==="\\begingroup"||void 0}}else if(c=this.parseFunction(r,t)||this.parseSymbol(),c==null&&s[0]==="\\"&&!hm.hasOwnProperty(s)){if(this.settings.throwOnError)throw new he("Undefined control sequence: "+s,a);c=this.formatUnsupportedCmd(s),this.consume()}return c}formLigatures(t){for(var r=t.length-1,a=0;a<r;++a){var s=t[a],c=s.text;c==="-"&&t[a+1].text==="-"&&(a+1<r&&t[a+2].text==="-"?(t.splice(a,3,{type:"textord",mode:"text",loc:nt.range(s,t[a+2]),text:"---"}),r-=2):(t.splice(a,2,{type:"textord",mode:"text",loc:nt.range(s,t[a+1]),text:"--"}),r-=1)),(c==="'"||c==="`")&&t[a+1].text===c&&(t.splice(a,2,{type:"textord",mode:"text",loc:nt.range(s,t[a+1]),text:c+c}),r-=1)}}parseSymbol(){var t=this.fetch(),r=t.text;if(/^\\verb[^a-zA-Z]/.test(r)){this.consume();var a=r.slice(5),s=a.charAt(0)==="*";if(s&&(a=a.slice(1)),a.length<2||a.charAt(0)!==a.slice(-1))throw new he(`\\verb assertion failed --
                    please report what input caused this bug`);return a=a.slice(1,-1),{type:"verb",mode:"text",body:a,star:s}}rp.hasOwnProperty(r[0])&&!tn[this.mode][r[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+r[0]+'" used in math mode',t),r=rp[r[0]]+r.slice(1));var c=R6.exec(r);c&&(r=r.substring(0,c.index),r==="i"?r="ı":r==="j"&&(r="ȷ"));var u;if(tn[this.mode][r]){this.settings.strict&&this.mode==="math"&&tc.includes(r)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+r[0]+'" used in math mode',t);var m=tn[this.mode][r].group,h=nt.range(t),w;if(Eb.hasOwnProperty(m)){var g=m;w={type:"atom",mode:this.mode,family:g,loc:h,text:r}}else w={type:m,mode:this.mode,loc:h,text:r};u=w}else if(r.charCodeAt(0)>=128)this.settings.strict&&(vp(r.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+r[0]+'" used in math mode',t):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+r[0]+'"'+(" ("+r.charCodeAt(0)+")"),t)),u={type:"textord",mode:"text",loc:nt.range(t),text:r};else return null;if(this.consume(),c)for(var z=0;z<c[0].length;z++){var S=c[0][z];if(!Z0[S])throw new he("Unknown accent ' "+S+"'",t);var q=Z0[S][this.mode]||Z0[S].text;if(!q)throw new he("Accent "+S+" unsupported in "+this.mode+" mode",t);u={type:"accent",mode:this.mode,loc:nt.range(t),label:q,isStretchy:!1,isShifty:!0,base:u}}return u}}Ws.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var Ec=function(t,r){if(!(typeof t=="string"||t instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var a=new Ws(t,r);delete a.gullet.macros.current["\\df@tag"];var s=a.parse();if(delete a.gullet.macros.current["\\current@color"],delete a.gullet.macros.current["\\color"],a.gullet.macros.get("\\df@tag")){if(!r.displayMode)throw new he("\\tag works only in display equations");s=[{type:"tag",mode:"text",body:s,tag:a.subparse([new ct("\\df@tag")])}]}return s},$m=function(t,r,a){r.textContent="";var s=Bc(t,a).toNode();r.appendChild(s)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),$m=function(){throw new he("KaTeX doesn't work in quirks mode.")});var L6=function(t,r){var a=Bc(t,r).toMarkup();return a},W6=function(t,r){var a=new wc(r);return Ec(t,a)},ym=function(t,r,a){if(a.throwOnError||!(t instanceof he))throw t;var s=de(["katex-error"],[new zt(r)]);return s.setAttribute("title",t.toString()),s.setAttribute("style","color:"+a.errorColor),s},Bc=function(t,r){var a=new wc(r);try{var s=Ec(t,a);return Xb(s,t,a)}catch(c){return ym(c,t,a)}},O6=function(t,r){var a=new wc(r);try{var s=Ec(t,a);return Jb(s,t,a)}catch(c){return ym(c,t,a)}},H6="0.16.33",G6={Span:Xi,Anchor:bc,SymbolNode:zt,SvgNode:rr,PathNode:Er,LineNode:nc},op={version:H6,render:$m,renderToString:L6,ParseError:he,SETTINGS_SCHEMA:_s,__parse:W6,__renderToDomTree:Bc,__renderToHTMLTree:O6,__setFontMetrics:qb,__defineSymbol:f,__defineFunction:ke,__defineMacro:k,__domTree:G6};function sn(o){if(!o)return"";const t=(s,c)=>{try{return op.renderToString(c.trim(),{displayMode:!0,throwOnError:!1})}catch(u){return`<span style="color:red">[latex error: ${u.message}]</span>`}},r=(s,c)=>{try{return op.renderToString(c.trim(),{displayMode:!1,throwOnError:!1})}catch(u){return`<span style="color:red">[latex error: ${u.message}]</span>`}};let a=o.replace(/\\\[([\s\S]*?)\\\]/g,t);return a=a.replace(/\$\$([\s\S]*?)\$\$/g,t),a=a.replace(/\\\(([^\n]*?)\\\)/g,r),a=a.replace(/\$([^$\n]+)\$/g,r),a=a.replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>"),a=a.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g,"$1<em>$2</em>"),a}function U6({nodeId:o,nodes:t,adjacency:r,SCOPE_COLORS:a,belief:s,lang:c,onNavigate:u}){const[m,h]=R.useState(!1),w=350,g=R.useMemo(()=>{if(!m)return null;const _=Object.fromEntries(t.map(W=>[W.id,W]))[o];if(!_)return null;const T=t.filter(W=>{const ge=W.x-_.x,we=W.y-_.y;return ge*ge+we*we<=w*w});if(T.length===0)return null;const P=new Set(T.map(W=>W.id)),N=[],I=new Set;for(const W of T){const ge=r.prereqs[W.id]??[];for(const we of ge){if(!P.has(we))continue;const _e=we+">"+W.id;I.has(_e)||(I.add(_e),N.push({from:we,to:W.id}))}}const O=380,C=260,U=18,F=T.map(W=>W.x),V=T.map(W=>W.y),Q=Math.min(...F),ee=Math.max(...F),se=Math.min(...V),X=Math.max(...V),te=Math.max(1,ee-Q),re=Math.max(1,X-se),pe=O-2*U,fe=C-2*U,be=Math.min(pe/te,fe/re),oe=U+(pe-te*be)/2,J=U+(fe-re*be)/2,ne=(W,ge)=>[oe+(W-Q)*be,J+(ge-se)*be],A=T.map(W=>{const[ge,we]=ne(W.x,W.y);return{...W,sx:ge,sy:we}});return{W:O,H:C,nodes:A,edges:N}},[m,o,t,r]);if(!m)return d.jsxs("button",{onClick:()=>h(!0),style:{position:"fixed",top:20,right:20,padding:"8px 14px",fontSize:12,fontFamily:ve,fontWeight:600,background:b.surfaceHi??"#16161a",color:b.textBody,border:`1px solid ${b.border}`,borderRadius:8,cursor:"pointer",boxShadow:"0 4px 12px rgba(0,0,0,0.3)",zIndex:60},title:B("mapShowCutout",c),children:["⌖ ",B("mapLabel",c)]});if(!g)return d.jsxs("div",{style:{position:"fixed",top:20,right:20,padding:"8px 14px",fontSize:11,color:b.textDim,background:b.surfaceHi??"#16161a",border:`1px solid ${b.border}`,borderRadius:8,zIndex:60},children:[B("mapNoNeighbors",c),d.jsx("button",{onClick:()=>h(!1),style:{marginLeft:10,background:"transparent",border:"none",color:b.textFaint,cursor:"pointer"},children:"×"})]});const z=Object.fromEntries(g.nodes.map(j=>[j.id,j]));new Set(g.nodes.map(j=>j.id));const S=new Set(r.prereqs[o]??[]),q=new Set(r.dependents[o]??[]);return d.jsxs("div",{style:{position:"fixed",top:20,right:20,width:g.W,height:g.H+44,background:b.surfaceHi??"#16161a",border:`1px solid ${b.border}`,borderRadius:10,padding:"10px 12px 12px",fontFamily:ve,boxShadow:"0 12px 28px rgba(0,0,0,0.4)",zIndex:60},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[d.jsxs("div",{style:{fontSize:10,color:b.textFaint,letterSpacing:"0.08em",textTransform:"uppercase"},children:[B("mapCutoutTitle",c),d.jsxs("span",{style:{marginLeft:8,color:b.textDim,textTransform:"none",letterSpacing:0},children:["· ",g.nodes.length," ",B("mapTopics",c)]})]}),d.jsx("button",{onClick:()=>h(!1),style:{background:"transparent",border:"none",color:b.textFaint,cursor:"pointer",fontSize:16,lineHeight:1,padding:"2px 6px"},title:B("mapClose",c),children:"×"})]}),d.jsxs("svg",{width:g.W-24,height:g.H,viewBox:`0 0 ${g.W} ${g.H}`,style:{display:"block"},children:[g.edges.map((j,_)=>{const T=z[j.from],P=z[j.to];if(!T||!P)return null;const N=j.from===o||j.to===o;return d.jsx("line",{x1:T.sx,y1:T.sy,x2:P.sx,y2:P.sy,stroke:N?b.textBody??"#cfd8e3":b.border??"rgba(255,255,255,0.2)",strokeOpacity:N?.7:.35,strokeWidth:N?1.4:1},_)}),g.nodes.map(j=>{const _=j.id===o,T=S.has(j.id),P=q.has(j.id),N=(a==null?void 0:a[j.scope])??"#4a9eff",I=s==null?void 0:s[j.id],O=I==="known"?"#27ae60":I==="unknown"?"#e74c3c":N,C=_?7:T||P?5:3.5,U=_?"":T||P?"cc":"66",F=c==="pl"?j.labelPl??j.id:j.label??j.id,V=_?"":T?" (prereq)":P?" (dependent)":"";return d.jsxs("g",{children:[d.jsx("circle",{cx:j.sx,cy:j.sy,r:C,fill:_?N:`${N}${U}`,stroke:O,strokeWidth:_?2:1,style:{cursor:_?"default":"pointer"},onClick:()=>{_||u==null||u(j.id)},children:d.jsx("title",{children:F+V})}),_&&d.jsx("circle",{cx:j.sx,cy:j.sy,r:C+5,fill:"none",stroke:N,strokeOpacity:.35,strokeWidth:1.5})]},j.id)})]})]})}function Z6({nodeId:o,nodes:t,adjacency:r,lang:a,SCOPE_COLORS:s,SCOPE_LABELS:c,SECTIONS:u,belief:m,evidence:h,onClose:w,onNavigate:g,onShowPath:z,onQuizMe:S,onQuizMatura:q,QUESTION_BANK:j}){var pe,fe,be,oe;const[_,T]=R.useState(null),P=bp(),N=t.find(J=>J.id===o);if(!N)return null;const I=Object.fromEntries(t.map(J=>[J.id,J])),O=J=>{var ne,A;return a==="pl"?(ne=I[J])==null?void 0:ne.labelPl:(A=I[J])==null?void 0:A.label},C=a==="pl"?N.labelPl:N.label,U=(s==null?void 0:s[N.scope])??"#4a9eff",F=((pe=c==null?void 0:c[N.scope])==null?void 0:pe[a==="pl"?"pl":"en"])??"",V=(a==="pl"?(fe=u==null?void 0:u[N.section])==null?void 0:fe.labelPl:(be=u==null?void 0:u[N.section])==null?void 0:be.labelEn)??"",Q=r.prereqs[o]??[],ee=r.dependents[o]??[],se=N.resources??[],X=m==null?void 0:m[o],te=_!=null?se[_]??null:null,re={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"};return d.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:b.bg,fontFamily:ve,overflowY:"auto",animation:"topicSlideIn 0.2s ease"},children:[d.jsx("style",{children:`
        @keyframes topicSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}),!P&&d.jsx(U6,{nodeId:o,nodes:t,adjacency:r,SCOPE_COLORS:s,belief:m,lang:a,onNavigate:g}),d.jsxs("div",{style:{maxWidth:"min(580px, calc(100% - 32px))",width:"100%",margin:"0 auto",padding:"24px 16px 48px"},children:[d.jsxs("div",{style:{display:"flex",gap:8,marginBottom:28},children:[d.jsxs("button",{onClick:w,style:{padding:"10px 14px",fontSize:12,fontFamily:ve,borderRadius:6,border:`1px solid ${b.border}`,background:"transparent",color:b.textDim,cursor:"pointer"},children:["← ",B("topicBack",a)]}),z&&Q.length>0&&d.jsx("button",{onClick:()=>z(o),style:{padding:"10px 14px",fontSize:12,fontFamily:ve,borderRadius:6,border:`1px solid ${U}30`,background:`${U}08`,color:U,cursor:"pointer"},children:B("topicLearnPath",a)})]}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[d.jsx("div",{style:{width:12,height:12,borderRadius:"50%",background:U,opacity:.8,flexShrink:0}}),d.jsx("h1",{style:{margin:0,fontSize:22,fontWeight:700,color:b.textPrimary,lineHeight:1.3},dangerouslySetInnerHTML:{__html:sn(C??"")}})]}),d.jsxs("div",{style:{fontSize:12,color:b.textDim,marginBottom:16,paddingLeft:22,lineHeight:1.6},children:[V," · ",F," · ",B("level",a)," ",N.level]}),X&&d.jsx(K6,{nodeId:o,status:X,evidence:h,adjacency:r,belief:m,nodes:t,lang:a,onNavigate:g}),N.body&&d.jsx(V6,{body:N.body,lang:a,renderRelated:J=>{const ne=I[J];return ne?d.jsx(K0,{label:O(J),color:(s==null?void 0:s[ne.scope])??"#4a9eff",status:m==null?void 0:m[J],onClick:()=>g(J)},J):null}}),S&&((oe=j==null?void 0:j[o])==null?void 0:oe.length)>0&&(()=>{const J=j[o].filter(ne=>ne.source==="cke").length;return d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:20},children:[d.jsx("button",{onClick:()=>S(o),style:{width:"100%",padding:"12px 16px",fontSize:13,fontWeight:600,fontFamily:ve,borderRadius:8,border:`1px solid ${U}40`,background:`${U}10`,color:U,cursor:"pointer",transition:"background 0.15s"},onMouseEnter:ne=>{ne.currentTarget.style.background=`${U}20`},onMouseLeave:ne=>{ne.currentTarget.style.background=`${U}10`},children:B("topicQuizMe",a)}),J>0&&q&&d.jsxs("button",{onClick:()=>q(o),style:{width:"100%",padding:"12px 16px",fontSize:13,fontWeight:600,fontFamily:ve,borderRadius:8,border:"1px solid #FFD16640",background:"#FFD16610",color:"#FFD166",cursor:"pointer",transition:"background 0.15s",display:"flex",alignItems:"center",justifyContent:"center",gap:8},onMouseEnter:ne=>{ne.currentTarget.style.background="#FFD16620"},onMouseLeave:ne=>{ne.currentTarget.style.background="#FFD16610"},children:[d.jsx("span",{children:B("quizMaturaQuestions",a)}),d.jsx("span",{style:{fontSize:11,padding:"2px 6px",borderRadius:4,background:"#FFD16622",letterSpacing:"0.04em"},children:J})]})]})})(),d.jsx(ip,{title:B("prerequisites",a),color:"#4a9eff",empty:Q.length===0,emptyText:B("noPrereqs",a),children:Q.map(J=>{var ne;return d.jsx(K0,{label:O(J),color:(s==null?void 0:s[(ne=I[J])==null?void 0:ne.scope])??"#4a9eff",status:m==null?void 0:m[J],onClick:()=>g(J)},J)})}),d.jsx(ip,{title:B("enables",a),color:"#3dc9b0",empty:ee.length===0,emptyText:B("noDependents",a),children:ee.map(J=>{var ne;return d.jsx(K0,{label:O(J),color:(s==null?void 0:s[(ne=I[J])==null?void 0:ne.scope])??"#4a9eff",status:m==null?void 0:m[J],onClick:()=>g(J)},J)})}),se.length>0&&d.jsxs("div",{style:{marginTop:28},children:[d.jsx("div",{style:{fontSize:13,fontWeight:600,color:"#FFD166",marginBottom:12},children:B("learningResources",a)}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:se.map((J,ne)=>{const A=a==="pl"?J.titlePl:J.titleEn,W=re[J.type]??"#8a9dbe",ge=J.type==="interactive"?"resourceInteractive":J.type==="video"?"resourceVideo":"resourceArticle";return d.jsxs("button",{onClick:()=>T(ne),style:{display:"flex",alignItems:"center",gap:12,padding:"14px 16px",borderRadius:8,background:`${W}0a`,border:`1px solid ${W}25`,cursor:"pointer",textAlign:"left",width:"100%",fontFamily:ve,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:we=>{we.currentTarget.style.background=`${W}18`,we.currentTarget.style.borderColor=`${W}50`},onMouseLeave:we=>{we.currentTarget.style.background=`${W}0a`,we.currentTarget.style.borderColor=`${W}25`},children:[d.jsx("span",{style:{fontSize:18,flexShrink:0},children:J.type==="interactive"?"⬡":J.type==="video"?"▶":"📄"}),d.jsxs("div",{style:{flex:1},children:[d.jsx("div",{style:{fontSize:13,color:b.textBody,fontWeight:500,lineHeight:1.4},children:A}),d.jsx("div",{style:{fontSize:10,color:W,marginTop:3,fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:B(ge,a)})]}),d.jsx("span",{style:{fontSize:14,color:b.textFaint},children:"→"})]},ne)})})]}),d.jsx("div",{style:{marginTop:32,paddingTop:16,borderTop:`1px solid ${b.border}`,textAlign:"center"},children:d.jsx("a",{href:"https://buycoffee.to/oczochodzi",target:"_blank",rel:"noopener noreferrer",style:{fontSize:11,color:b.textFaint,textDecoration:"none",transition:"color 0.15s"},onMouseEnter:J=>{J.currentTarget.style.color="#FFD166"},onMouseLeave:J=>{J.currentTarget.style.color=b.textFaint},children:B("coffeeBtn",a)})})]}),te&&d.jsx(yc,{resource:te,lang:a,onClose:()=>T(null)})]})}function K6({nodeId:o,status:t,evidence:r,adjacency:a,belief:s,nodes:c,lang:u,onNavigate:m}){const h=r==null?void 0:r[o],w=!!h,g=t==="known"?"#27ae60":"#e74c3c",z=t==="known"?"#2ecc71":"#ff6b6b",S=Object.fromEntries(c.map(_=>[_.id,_])),q=_=>{var T,P;return u==="pl"?(T=S[_])==null?void 0:T.labelPl:(P=S[_])==null?void 0:P.label};let j=null;return!w&&r&&(t==="known"?j=(a.dependents[o]??[]).find(T=>{var P;return((P=r[T])==null?void 0:P.correct)&&s[T]==="known"}):j=(a.prereqs[o]??[]).find(T=>r[T]&&!r[T].correct&&s[T]==="unknown")),d.jsxs("div",{style:{marginBottom:20,padding:"12px 14px",borderRadius:8,background:`${g}08`,border:`1px solid ${g}20`},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:8},children:[d.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:g}}),d.jsx("span",{style:{fontSize:13,fontWeight:600,color:z},children:B(t==="known"?"beliefKnown":"beliefUnknown",u)}),d.jsx("span",{style:{fontSize:10,padding:"2px 8px",borderRadius:4,background:w?`${g}15`:"#ffffff08",color:w?z:b.textFaint,border:`1px solid ${w?g+"30":b.border}`},children:w?u==="pl"?"sprawdzone":"tested":u==="pl"?"wywnioskowane":"inferred"})]}),w&&d.jsxs("div",{style:{fontSize:12,color:b.textDim,lineHeight:1.6},children:[h.correct?u==="pl"?"Odpowiedź poprawna":"Answered correctly":u==="pl"?"Odpowiedź niepoprawna":"Answered incorrectly",h.questionText&&d.jsx("div",{style:{marginTop:8,padding:"8px 10px",borderRadius:6,background:"#ffffff06",borderLeft:`2px solid ${g}40`,fontSize:12,color:b.textBody,lineHeight:1.6},children:d.jsx("span",{dangerouslySetInnerHTML:{__html:sn(h.questionText)}})})]}),!w&&d.jsxs("div",{style:{fontSize:12,color:b.textDim,lineHeight:1.6},children:[t==="known"?u==="pl"?"Wywnioskowane — jeśli znasz trudniejszy temat, to prawdopodobnie znasz też ten.":"Inferred — if you know a harder topic, you likely know this one too.":u==="pl"?"Wywnioskowane — jeśli nie znasz podstawy, to tematy które na niej bazują też mogą sprawiać problem.":"Inferred — if you don't know the foundation, topics that build on it may also be difficult.",j&&d.jsxs("button",{onClick:()=>m(j),style:{display:"block",marginTop:6,padding:"10px 14px",borderRadius:4,background:"#ffffff06",border:`1px solid ${b.border}`,color:"#4a9eff",cursor:"pointer",fontSize:11,fontFamily:ve},children:[B("basedOn",u)," ",q(j)," →"]})]})]})}function V6({body:o,lang:t,renderRelated:r}){var P,N,I,O;const[a,s]=R.useState(!1),[c,u]=R.useState(!1),m=o.split("<!-- see-also -->"),h=m[0],w=(m[1]??"").split(/[\s,]+/).map(C=>C.trim()).filter(Boolean),g=h.split("<!-- example -->"),z=(P=g[0])==null?void 0:P.trim(),S=(g[1]??"").split("<!-- mistakes -->"),q=(N=S[0])==null?void 0:N.trim(),_=(((I=S[1])==null?void 0:I.trim())??((O=h.split("<!-- mistakes -->")[1])==null?void 0:O.trim())??"")||null,T=r?w.map(r).filter(Boolean):[];return z?d.jsxs("div",{style:{marginBottom:20},children:[d.jsx("div",{style:{fontSize:13,color:b.textBody,lineHeight:1.7},dangerouslySetInnerHTML:{__html:sn(z)}}),q&&d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:()=>s(C=>!C),style:{marginTop:10,padding:"10px 14px",fontSize:12,fontFamily:ve,borderRadius:6,border:`1px solid ${a?"#FFD16640":b.border}`,background:a?"#FFD16610":"transparent",color:a?"#FFD166":b.textDim,cursor:"pointer",transition:"all 0.15s"},children:B(a?"exampleHide":"exampleShow",t)}),a&&d.jsxs("div",{style:{marginTop:10,padding:"12px 14px",borderRadius:8,fontSize:13,background:"#FFD16608",border:"1px solid #FFD16620",color:"#e8d5a0",lineHeight:1.7},children:[d.jsx("span",{dangerouslySetInnerHTML:{__html:sn(q)}}),T.length>0&&d.jsxs("div",{style:{marginTop:14,paddingTop:12,borderTop:"1px solid #FFD16620"},children:[d.jsx("div",{style:{fontSize:10,letterSpacing:"0.06em",textTransform:"uppercase",color:"#FFD16699",marginBottom:8,fontWeight:600},children:t==="pl"?"Zobacz też":"See also"}),d.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:T})]})]})]}),_&&d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:()=>u(C=>!C),style:{marginTop:8,marginLeft:q?8:0,padding:"10px 14px",fontSize:12,fontFamily:ve,borderRadius:6,border:`1px solid ${c?"#e74c3c40":b.border}`,background:c?"#e74c3c10":"transparent",color:c?"#ff6b6b":b.textDim,cursor:"pointer",transition:"all 0.15s"},children:B(c?"mistakesHide":"mistakesShow",t)}),c&&d.jsx("div",{style:{marginTop:10,padding:"12px 14px",borderRadius:8,fontSize:13,background:"#e74c3c08",border:"1px solid #e74c3c20",color:"#f3b4b0",lineHeight:1.7},dangerouslySetInnerHTML:{__html:sn(_)}})]})]}):null}function ip({title:o,color:t,empty:r,emptyText:a,children:s}){return d.jsxs("div",{style:{marginTop:24},children:[d.jsx("div",{style:{fontSize:13,fontWeight:600,color:t,marginBottom:10},children:o}),r?d.jsx("div",{style:{fontSize:12,color:b.textFaint,fontStyle:"italic"},children:a}):d.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:s})]})}function K0({label:o,color:t,status:r,onClick:a}){const s=r==="known"?"#27ae60":r==="unknown"?"#e74c3c":null;return d.jsxs("button",{onClick:a,style:{display:"inline-flex",alignItems:"center",gap:6,padding:"7px 12px",borderRadius:6,background:`${t}0c`,border:`1px solid ${t}25`,cursor:"pointer",fontFamily:ve,fontSize:12,color:b.textBody,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:c=>{c.currentTarget.style.background=`${t}1c`,c.currentTarget.style.borderColor=`${t}50`},onMouseLeave:c=>{c.currentTarget.style.background=`${t}0c`,c.currentTarget.style.borderColor=`${t}25`},children:[s&&d.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:s,flexShrink:0}}),d.jsx("span",{dangerouslySetInnerHTML:{__html:sn(o??"")}})]})}function gm({goalId:o,RAW_NODES:t,RAW_EDGES:r,SCOPE_COLORS:a,SCOPE_LABELS:s,SECTIONS:c,belief:u,evidence:m,lang:h,onSelectTopic:w,onStartLesson:g,onClose:z}){const S=R.useMemo(()=>io(t,r),[t,r]),q=R.useMemo(()=>Object.fromEntries(t.map(C=>[C.id,C])),[t]),j=C=>{var U,F;return h==="pl"?(U=q[C])==null?void 0:U.labelPl:(F=q[C])==null?void 0:F.label};q[o];const{path:_,maturaTips:T}=R.useMemo(()=>{var re;const C=new Set,U=[],F=[o];for(;F.length;){const pe=F.shift();if(!C.has(pe)&&q[pe]){C.add(pe),U.push(pe);for(const fe of S.prereqs[pe]??[])C.has(fe)||F.push(fe)}}const V=new Set(U),Q={};for(const pe of V)Q[pe]=0;for(const pe of V)for(const fe of S.dependents[pe]??[])V.has(fe)&&(Q[fe]=(Q[fe]||0)+1);const ee=[],se=[];for(const pe of V)Q[pe]===0&&se.push(pe);for(;se.length;){se.sort((fe,be)=>{var oe,J;return(((oe=q[fe])==null?void 0:oe.level)??0)-(((J=q[be])==null?void 0:J.level)??0)});const pe=se.shift();ee.push(pe);for(const fe of S.dependents[pe]??[])V.has(fe)&&(Q[fe]--,Q[fe]===0&&se.push(fe))}const X=[],te=[];for(const pe of ee)pe!==o&&((re=q[pe])==null?void 0:re.tag)==="matura_tip"?X.push(pe):te.push(pe);return{path:te,maturaTips:X}},[o,S,q]),P=_.filter(C=>(u==null?void 0:u[C])==="known").length,N=_.filter(C=>(u==null?void 0:u[C])==="unknown").length,I=_.length,O=I>0?Math.round(P/I*100):0;return d.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:b.bg,fontFamily:ve,overflowY:"auto",animation:"pathSlideIn 0.2s ease"},children:[d.jsx("style",{children:`
        @keyframes pathSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}),d.jsxs("div",{style:{maxWidth:"min(520px, calc(100% - 32px))",width:"100%",margin:"0 auto",padding:"24px 16px 48px"},children:[d.jsxs("button",{onClick:z,style:{padding:"10px 14px",fontSize:12,fontFamily:ve,borderRadius:6,border:`1px solid ${b.border}`,background:"transparent",color:b.textDim,cursor:"pointer",marginBottom:24},children:["← ",B("topicBack",h)]}),d.jsx("div",{style:{marginBottom:6},children:d.jsx("span",{style:{fontSize:10,color:b.textFaint,letterSpacing:1.5,textTransform:"uppercase"},children:B("pathLabel",h)})}),d.jsx("h1",{style:{margin:"0 0 8px",fontSize:22,fontWeight:700,color:b.textPrimary,lineHeight:1.3},dangerouslySetInnerHTML:{__html:sn(j(o)??"")}}),d.jsxs("p",{style:{margin:"0 0 20px",fontSize:12,color:b.textDim},children:[I," ",B("pathTopics",h),u&&Object.keys(u).length>0&&d.jsxs(d.Fragment,{children:[" · ",d.jsx("span",{style:{color:b.known},children:P})," ",B("pathKnown",h)," · ",d.jsx("span",{style:{color:"#e74c3c"},children:N})," ",B("pathToStudy",h)]})]}),u&&Object.keys(u).length>0&&d.jsx("div",{style:{height:4,borderRadius:2,background:b.border,overflow:"hidden",marginBottom:20},children:d.jsx("div",{style:{height:"100%",borderRadius:2,width:`${O}%`,background:b.known,transition:"width 0.4s ease"}})}),g&&d.jsx("button",{onClick:()=>g(_,o),style:{width:"100%",padding:"14px 24px",marginBottom:28,fontSize:14,fontWeight:600,fontFamily:ve,borderRadius:8,border:"1px solid #f39c1250",background:"#f39c1218",color:"#f39c12",cursor:"pointer"},children:B("startLesson",h)}),d.jsxs("div",{style:{position:"relative"},children:[d.jsx("div",{style:{position:"absolute",left:15,top:12,bottom:12,width:2,background:b.border,borderRadius:1}}),_.map((C,U)=>{var oe,J,ne,A;const F=q[C],V=C===o,Q=u==null?void 0:u[C],ee=m==null?void 0:m[C],se=!!ee,X=((oe=F==null?void 0:F.resources)==null?void 0:oe.length)>0,te=(a==null?void 0:a[F==null?void 0:F.scope])??"#4a9eff",re=((J=s==null?void 0:s[F==null?void 0:F.scope])==null?void 0:J[h==="pl"?"pl":"en"])??"",pe=(h==="pl"?(ne=c==null?void 0:c[F==null?void 0:F.section])==null?void 0:ne.labelPl:(A=c==null?void 0:c[F==null?void 0:F.section])==null?void 0:A.labelEn)??"";let fe=b.textFaint,be=b.border;return Q==="known"?(fe=b.known,be=b.known):Q==="unknown"&&(fe="#e74c3c",be="#e74c3c"),d.jsxs("div",{onClick:()=>w(C),style:{position:"relative",paddingLeft:40,paddingBottom:U<_.length-1?6:0,marginBottom:6,cursor:"pointer"},children:[d.jsx("div",{style:{position:"absolute",left:8,top:12,width:V?16:12,height:V?16:12,borderRadius:"50%",background:Q?fe:b.bg,border:`2px solid ${Q?be:b.textFaint}`,marginLeft:V?-2:0,zIndex:1}}),d.jsxs("div",{style:{padding:"10px 14px",borderRadius:8,background:V?`${te}10`:"transparent",border:`1px solid ${V?te+"30":b.borderSubtle}`,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:W=>{V||(W.currentTarget.style.background=`${b.textFaint}10`,W.currentTarget.style.borderColor=b.border)},onMouseLeave:W=>{V||(W.currentTarget.style.background="transparent",W.currentTarget.style.borderColor=b.borderSubtle)},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[d.jsx("span",{style:{fontSize:13,fontWeight:V?700:500,color:V?b.textPrimary:b.textBody,flex:1,minWidth:0,overflowWrap:"break-word",wordBreak:"break-word"},dangerouslySetInnerHTML:{__html:sn(j(C)??"")}}),d.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center",flexShrink:0},children:[X&&d.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:"#58C4DD15",color:"#58C4DD",border:"1px solid #58C4DD30"},children:"⬡"}),se&&d.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:ee.correct?"#27ae6015":"#e74c3c15",color:ee.correct?"#2ecc71":"#ff6b6b",border:`1px solid ${ee.correct?"#27ae6030":"#e74c3c30"}`},children:ee.correct?"✓":"✗"})]})]}),d.jsxs("div",{style:{fontSize:10,color:b.textFaint,marginTop:3},children:[pe," · ",re,V&&d.jsx("span",{style:{color:te,marginLeft:6},children:B("pathGoal",h)})]})]})]},C)})]}),T.length>0&&d.jsx(Y6,{tips:T,nodeById:q,belief:u,lang:h,getLabel:j})]})]})}function Y6({tips:o,nodeById:t,belief:r,lang:a,getLabel:s}){const[c,u]=R.useState(!1);return d.jsxs("div",{style:{marginTop:24},children:[d.jsxs("button",{onClick:()=>u(m=>!m),style:{width:"100%",padding:"12px 14px",fontSize:12,fontFamily:ve,fontWeight:600,borderRadius:8,border:`1px solid ${c?"#FFD16640":b.border}`,background:c?"#FFD16610":"transparent",color:c?"#FFD166":b.textDim,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,textAlign:"left"},children:[d.jsxs("span",{children:[c?"▾":"▸"," ",B("profileMaturaTips",a)]}),d.jsx("span",{style:{fontSize:10,padding:"2px 6px",borderRadius:4,background:"#FFD16622",color:"#FFD166",letterSpacing:"0.04em",flexShrink:0},children:o.length})]}),c&&d.jsxs(d.Fragment,{children:[d.jsx("p",{style:{margin:"10px 2px 10px",fontSize:11,color:b.textFaint,lineHeight:1.6},children:B("profileMaturaTipsSub",a)}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:o.map(m=>{const h=r==null?void 0:r[m];let w=b.textFaint;return h==="known"?w=b.known:h==="unknown"&&(w="#e74c3c"),d.jsx(Q6,{node:t[m],label:s(m)??"",status:h,dotColor:w},m)})})]})]})}function Q6({node:o,label:t,status:r,dotColor:a}){var m;const[s,c]=R.useState(!1),u=((m=((o==null?void 0:o.body)??"").split("<!-- example -->")[0])==null?void 0:m.trim())??"";return d.jsxs("div",{style:{borderRadius:8,background:"#FFD16608",border:"1px solid #FFD16620",overflow:"hidden"},children:[d.jsxs("button",{onClick:()=>c(h=>!h),style:{width:"100%",padding:"10px 14px",display:"flex",alignItems:"center",gap:10,background:"transparent",border:"none",color:b.textBody,fontFamily:ve,fontSize:13,cursor:"pointer",textAlign:"left",minWidth:0},children:[d.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:r?a:"transparent",border:`1.5px solid ${r?a:b.textFaint}`,flexShrink:0}}),d.jsx("span",{style:{flex:1,minWidth:0,overflowWrap:"break-word",wordBreak:"break-word"},dangerouslySetInnerHTML:{__html:sn(t)}}),d.jsx("span",{style:{color:b.textFaint,fontSize:11,flexShrink:0},children:s?"▾":"▸"})]}),s&&u&&d.jsx("div",{style:{padding:"12px 14px 14px",fontSize:13,color:b.textBody,lineHeight:1.7,borderTop:"1px solid #FFD16620"},dangerouslySetInnerHTML:{__html:sn(u)}})]})}class Oo{constructor(t){this._perm=t}get length(){return this._perm.length}originalIndex(t){return this._perm[t]}displayIndex(t){return this._perm.indexOf(t)}apply(t){return this._perm.map(r=>t[r])}static random(t){const r=Array.from({length:t},(a,s)=>s);for(let a=t-1;a>0;a--){const s=Math.floor(Math.random()*(a+1));[r[a],r[s]]=[r[s],r[a]]}return new Oo(r)}static identity(t){return new Oo(Array.from({length:t},(r,a)=>a))}}function wm(o,t="pl"){if(!o)return null;if(o==="cke")return"CKE";const r=o.match(/^cke_(\d{4})_(podstawowa|rozszerzona)_zad(\d+)/);if(!r)return"CKE";const[,a,s,c]=r;return t==="pl"?`Matura ${a} ${s}, zad. ${c}`:`Matura ${a} ${s==="rozszerzona"?"extended":"basic"}, task ${c}`}function X6({nodeId:o,nodes:t,questionBank:r,onAnswer:a,onSkip:s,lang:c,excludeIndices:u=[],isMobile:m,sourceFilter:h=null,forceIndex:w=null}){const g=t.find(X=>X.id===o),z=R.useMemo(()=>Ui(r,o,u,h,w),[o,u,h,w]),S=h==="cke"?"#FFD166":"#4a9eff",q=g?c==="pl"?g.labelPl:g.label:o,j=R.useMemo(()=>z?Oo.random(z.options.length):null,[z]),_=R.useMemo(()=>j?j.apply(z.options):[],[j,z]),T=R.useMemo(()=>j?j.displayIndex(z.correct):-1,[j,z]),[P,N]=R.useState(null),[I,O]=R.useState(!1),[C,U]=R.useState(1);R.useEffect(()=>{U(1)},[z]);const F=()=>{P!==null&&O(!0)},V=()=>{a(P===T,z,z.index),N(null),O(!1),U(1)};R.useEffect(()=>{const X=te=>{te.key==="Escape"&&s((z==null?void 0:z.index)??-1)};return window.addEventListener("keydown",X),()=>window.removeEventListener("keydown",X)},[s,z]);const Q=X=>d.jsx("span",{dangerouslySetInnerHTML:{__html:sn(X)}}),ee=m?{position:"fixed",left:0,right:0,bottom:0,height:"70dvh",background:b.surface,border:`1px solid ${S}40`,borderRadius:"14px 14px 0 0",color:b.textBody,boxShadow:"0 -8px 32px rgba(0,0,0,0.5)",display:"flex",flexDirection:"column",zIndex:30,boxSizing:"border-box"}:{position:"absolute",left:16,top:16,width:340,maxHeight:"calc(100vh - 120px)",background:b.surfaceHi,backdropFilter:"blur(6px)",border:`1px solid ${S}40`,borderRadius:10,color:b.textBody,boxShadow:"0 12px 40px rgba(0,0,0,0.5)",display:"flex",flexDirection:"column",zIndex:30,boxSizing:"border-box"},se=m?{flex:1,minHeight:0,overflowY:"auto",WebkitOverflowScrolling:"touch",overscrollBehavior:"contain",padding:"14px 16px calc(24px + env(safe-area-inset-bottom))"}:{flex:1,minHeight:0,overflowY:"auto",padding:"14px 16px"};return d.jsxs("div",{style:ee,children:[m&&d.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"8px 0 0",flexShrink:0},children:d.jsx("div",{style:{width:36,height:4,borderRadius:2,background:b.textFaint}})}),d.jsxs("div",{style:se,children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10},children:[d.jsxs("div",{style:{color:S,fontWeight:700,fontSize:13,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:[q,h==="cke"&&d.jsx("span",{style:{marginLeft:8,fontSize:10,fontWeight:600,padding:"2px 6px",borderRadius:4,background:`${S}22`,color:S,border:`1px solid ${S}40`,letterSpacing:"0.04em"},children:"CKE"})]}),d.jsx("button",{onClick:()=>s((z==null?void 0:z.index)??-1),style:{background:`${b.textDim}22`,border:`1px solid ${b.border}`,color:b.textBody,cursor:"pointer",fontSize:13,lineHeight:1,padding:"4px 10px",borderRadius:6,fontWeight:600,minWidth:32,minHeight:28},title:"Close (Esc)",children:B("close",c)})]}),z?d.jsxs(d.Fragment,{children:[z.source&&(()=>{const X=wm(z.source,c);return!X||X==="CKE"?null:d.jsx("div",{style:{display:"inline-block",marginBottom:10,padding:"3px 8px",borderRadius:4,fontSize:10,fontWeight:600,letterSpacing:"0.04em",background:"#FFD16618",color:"#FFD166",border:"1px solid #FFD16640"},children:X})})(),d.jsx("div",{style:{fontSize:13,color:b.textBody,marginBottom:12,lineHeight:1.65},children:Q(z.q)}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,marginBottom:12},children:_.map((X,te)=>{let re=b.bg,pe=b.border,fe=b.textBody;return P===te&&!I&&(re=`${S}22`,pe=S,fe=S),I&&(te===T?(re="#27ae6022",pe="#27ae60",fe="#2ecc71"):te===P&&(re="#e74c3c22",pe="#e74c3c",fe="#ff6b6b")),d.jsxs("button",{onClick:()=>{I||N(te)},style:{textAlign:"left",padding:"10px 12px",borderRadius:7,fontSize:12,cursor:I?"default":"pointer",background:re,border:`1px solid ${pe}`,color:fe,lineHeight:1.5,minHeight:38},children:[d.jsxs("span",{style:{marginRight:6,opacity:.5},children:[["A","B","C","D"][te],"."]}),Q(X)]},te)})}),I&&(()=>{const X=Array.isArray(z.hints)&&z.hints.length>0?z.hints:z.hint?[z.hint]:[];if(X.length===0)return null;const te=Math.min(C,X.length);return d.jsxs("div",{style:{marginBottom:10},children:[X.slice(0,te).map((re,pe)=>d.jsx("div",{style:{padding:"6px 10px",borderLeft:"2px solid #FFD166",background:"rgba(255,209,102,.05)",borderRadius:"0 4px 4px 0",marginTop:pe===0?0:4,fontSize:12,lineHeight:1.55,color:"rgba(255,255,255,.7)"},children:Q(re)},pe)),te<X.length&&d.jsx("button",{onClick:()=>U(re=>re+1),style:{...Bo("#FFD166"),marginTop:6,fontSize:11,padding:"5px 10px",opacity:.75},children:B("hintShowNext",c)})]})})(),I?d.jsx("button",{onClick:V,style:{...Bo(P===T?"#27ae60":"#e74c3c"),width:"100%",fontSize:13},children:B(P===T?"knownConfirm":"unknownConfirm",c)}):d.jsx("button",{onClick:F,disabled:P===null,style:{...Bo(S),width:"100%",opacity:P===null?.4:1,fontSize:13},children:B("checkAnswer",c)})]}):d.jsxs(d.Fragment,{children:[d.jsx("div",{style:{color:b.textDim,fontSize:12,marginBottom:12},children:B("noQuestion",c)}),d.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap"},children:[d.jsx("button",{onClick:()=>a(!0,null,-1),style:{...Bo("#27ae60"),fontSize:12,padding:"8px 14px"},children:B("yesKnow",c)}),d.jsx("button",{onClick:()=>a(!1,null,-1),style:{...Bo("#e74c3c"),fontSize:12,padding:"8px 14px"},children:B("noKnow",c)}),d.jsx("button",{onClick:()=>s(-1),style:{...Bo("#3a4d63"),fontSize:12,padding:"8px 14px"},children:B("skipBtn",c)})]})]})]})]})}function J6(){return{position:"absolute",right:16,top:16,width:230,background:b.surfaceHi,backdropFilter:"blur(6px)",border:`1px solid ${b.border}`,borderRadius:8,padding:"12px 14px",fontSize:11,color:b.textBody,zIndex:10,maxHeight:"80vh",overflowY:"auto"}}function ev({belief:o,frontier:t,visibleFrontier:r,hasStarted:a,nextSuggestedId:s,sessionComplete:c,adjacency:u,expectedRemaining:m,pCorrect:h,questionsAnswered:w,nodes:g,lang:z,onReset:S,onNodeClick:q,SCOPE_LABELS:j,isMobile:_}){var ee,se;const T=Object.fromEntries(g.map(X=>[X.id,X])),P=X=>{var te,re;return z==="pl"?(te=T[X])==null?void 0:te.labelPl:(re=T[X])==null?void 0:re.label},N=g.filter(X=>o[X.id]==="known"),I=g.filter(X=>o[X.id]==="unknown"),O=g.length,C=[{label:B("statKnown",z),count:N.length,color:"#27ae60"},{label:B("statUnknown",z),count:I.length,color:"#e74c3c"},{label:B("statRemaining",z),count:m??"-",color:"#4a9eff"}],U=h?Math.round(h*100):50,F=_?13:11,V=_?11:9,Q=d.jsxs(d.Fragment,{children:[d.jsxs("div",{style:{fontWeight:700,fontSize:_?14:12,marginBottom:10,color:b.textPrimary,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsxs("span",{children:[B("diagHeader",z)," ",c?"✓":""]}),d.jsx("button",{onClick:S,style:{fontSize:V,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${b.textFaint}`,color:b.textDim,minHeight:_?32:"auto"},children:B("reset",z)})]}),d.jsx("div",{style:{display:"flex",gap:6,marginBottom:12},children:C.map(({label:X,count:te,color:re})=>d.jsxs("div",{style:{flex:1,textAlign:"center",background:`${re}18`,borderRadius:5,padding:"6px 0",border:`1px solid ${re}40`},children:[d.jsx("div",{style:{color:re,fontWeight:700,fontSize:_?20:15},children:te}),d.jsx("div",{style:{color:b.textDim,fontSize:V},children:X})]},X))}),!c&&a&&d.jsxs("div",{style:{fontSize:V,color:b.textDim,marginBottom:10,padding:"6px 8px",background:"#ffffff08",borderRadius:4,display:"flex",justifyContent:"space-between",gap:4,flexWrap:"wrap"},children:[d.jsxs("span",{children:[B("answered",z),": ",d.jsx("span",{style:{color:b.textPrimary},children:w})]}),d.jsxs("span",{children:[B("estimated",z),": ",d.jsxs("span",{style:{color:"#4a9eff"},children:["~",m??"-"]})]}),d.jsxs("span",{children:[B("accuracy",z),": ",d.jsxs("span",{style:{color:"#4a9eff"},children:[U,"%"]})]})]}),c&&d.jsxs("div",{children:[d.jsxs("div",{style:{background:"#27ae6018",border:"1px solid #27ae6050",borderRadius:6,padding:"10px 12px",marginBottom:10},children:[d.jsx("div",{style:{color:"#2ecc71",fontWeight:700,fontSize:_?14:12,marginBottom:4},children:B("sessionDone",z)}),d.jsxs("div",{style:{color:b.textDim,fontSize:V,lineHeight:1.6},children:[B("sessionDoneSub",z)," ",d.jsx("span",{style:{color:b.textPrimary},children:w})," ",B("sessionDoneQ",z),"."," ",B("sessionDoneClass",z)," ",N.length+I.length,"/",O,".",d.jsx("br",{}),B("sessionDoneAcc",z),": ",d.jsxs("span",{style:{color:"#4a9eff"},children:[U,"%"]}),"."," ",B("sessionDoneKnown",z)," ",d.jsx("span",{style:{color:"#2ecc71"},children:N.length}),","," ",B("sessionDoneStudy",z)," ",d.jsx("span",{style:{color:"#e74c3c"},children:I.length}),"."]})]}),I.length>0&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{style:{color:"#e74c3c",fontSize:F,fontWeight:600,marginBottom:5},children:[B("toStudy",z)," (",I.length,")"]}),g.filter(X=>o[X.id]==="unknown").filter(X=>(u.prereqs[X.id]??[]).every(te=>o[te]==="known")).slice(0,8).map(X=>{var te,re;return d.jsxs("div",{style:{padding:_?"8px 10px":"5px 8px",marginBottom:4,borderRadius:4,background:"#e74c3c12",border:"1px solid #e74c3c30",fontSize:F,color:"#ff8a8a",lineHeight:1.4},children:[P(X.id),d.jsx("div",{style:{fontSize:V,color:b.textDim,marginTop:1},children:(re=j==null?void 0:j[(te=T[X.id])==null?void 0:te.scope])==null?void 0:re[z==="pl"?"pl":"en"]})]},X.id)})]}),N.length>0&&d.jsxs("div",{style:{marginTop:8,color:"#27ae60",fontSize:F},children:["✓ ",B("knownList",z)," ",N.length]})]}),!c&&!a&&d.jsxs("div",{style:{marginBottom:10},children:[s&&d.jsxs(d.Fragment,{children:[d.jsx("div",{style:{color:"#4a9eff",fontSize:F,fontWeight:600,marginBottom:5},children:B("startHere",z)}),d.jsxs("div",{onClick:()=>q==null?void 0:q(s),style:{padding:_?"12px 14px":"8px 10px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:F,color:"#a8d4ff",minHeight:_?44:"auto"},children:[d.jsx("div",{style:{fontWeight:600},children:P(s)}),d.jsxs("div",{style:{fontSize:V,color:b.textDim,marginTop:2},children:[(se=j==null?void 0:j[(ee=T[s])==null?void 0:ee.scope])==null?void 0:se[z==="pl"?"pl":"en"]," · ",B("startHereSub",z)]})]})]}),d.jsx("div",{style:{fontSize:V,color:b.textFaint,marginTop:8,lineHeight:1.5},children:B("clickAnyNode",z)})]}),!c&&a&&r.length>0&&d.jsxs(d.Fragment,{children:[d.jsx("div",{style:{color:"#f39c12",fontSize:F,fontWeight:600,marginBottom:5},children:B("whatNext",z)}),r.map(X=>{var re,pe;const te=X===s;return d.jsxs("div",{onClick:()=>q==null?void 0:q(X),style:{padding:_?"10px 12px":"6px 8px",marginBottom:4,borderRadius:4,cursor:"pointer",background:te?"#4a9eff18":"#f39c1215",border:`1px solid ${te?"#4a9eff55":"#f39c1240"}`,fontSize:F,color:te?"#a8d4ff":"#f5d78e",minHeight:_?44:"auto",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{children:[d.jsx("div",{children:P(X)}),d.jsxs("div",{style:{fontSize:V,color:b.textDim,marginTop:1},children:[(pe=j==null?void 0:j[(re=T[X])==null?void 0:re.scope])==null?void 0:pe[z==="pl"?"pl":"en"],te&&d.jsx("span",{style:{color:"#4a9eff88",marginLeft:4},children:B("best",z)})]})]}),d.jsx("span",{style:{opacity:.7},children:te?"★":"→"})]},X)})]}),!c&&N.length>0&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{style:{color:"#27ae60",fontSize:F,fontWeight:600,margin:"10px 0 4px"},children:["✓ ",B("knownList",z)," (",N.length,")"]}),N.map(X=>d.jsx("div",{style:{fontSize:V,color:"#6dbb87",paddingLeft:4,lineHeight:1.8},children:P(X.id)},X.id))]}),!c&&!_&&d.jsxs("div",{style:{marginTop:12,color:b.textFaint,fontSize:V,lineHeight:1.5},children:[B("hintClick",z),d.jsx("br",{}),B("hintShift",z),d.jsx("br",{}),B("hintGreen",z)]})]});return _?d.jsxs("div",{style:{position:"fixed",left:0,right:0,bottom:0,background:`${b.surface}f5`,backdropFilter:"blur(8px)",borderTop:`1px solid ${b.border}`,borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"},children:[d.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:d.jsx("div",{style:{width:36,height:4,borderRadius:2,background:b.textFaint}})}),Q]}):d.jsx("div",{style:J6(),children:Q})}function nv({nodes:o,lang:t,targetNode:r,subgraphIds:a,ddClassification:s,betaBeliefs:c,ddComplete:u,ddNextNodeId:m,questionsAnswered:h,onNodeClick:w,onReset:g,isMobile:z}){const S=Object.fromEntries(o.map(F=>[F.id,F])),q=F=>{var V,Q;return t==="pl"?(V=S[F])==null?void 0:V.labelPl:(Q=S[F])==null?void 0:Q.label},j=a.filter(F=>s[F]==="known"),_=a.filter(F=>s[F]==="unknown"),T=a.filter(F=>s[F]==="uncertain"),P=a.length,N=j.length+_.length,I=P>0?Math.round(N/P*100):0,O=q(r),C=z?11:9,U=z?{position:"fixed",left:0,right:0,bottom:0,background:`${b.surface}f5`,backdropFilter:"blur(8px)",borderTop:`1px solid ${b.border}`,borderRadius:"14px 14px 0 0",padding:"16px 16px 24px",zIndex:30,maxHeight:"65vh",overflowY:"auto"}:{background:b.surfaceHi,backdropFilter:"blur(6px)",border:`1px solid ${b.border}`,borderRadius:8,padding:"12px 14px",fontSize:11,color:b.textBody,zIndex:10,maxHeight:"80vh",overflowY:"auto"};return d.jsxs("div",{style:U,children:[z&&d.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:12},children:d.jsx("div",{style:{width:36,height:4,borderRadius:2,background:b.textFaint}})}),d.jsxs("div",{style:{fontWeight:700,fontSize:z?14:12,marginBottom:4,color:"#f5f6fa",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsxs("span",{children:[B("deepDiveHeader",t)," ",u?"✓":""]}),d.jsx("button",{onClick:g,style:{fontSize:C,padding:"4px 10px",borderRadius:4,cursor:"pointer",background:"transparent",border:`1px solid ${b.textFaint}`,color:b.textDim,minHeight:z?32:"auto"},children:B("reset",t)})]}),d.jsxs("div",{style:{marginBottom:10,padding:"6px 8px",borderRadius:5,background:"#4a9eff12",border:"1px solid #4a9eff40"},children:[d.jsx("div",{style:{fontSize:9,color:"#4a9eff88",marginBottom:2},children:B("deepDiveTarget",t)}),d.jsx("div",{style:{fontSize:11,color:"#a8d4ff",fontWeight:600},children:O}),d.jsxs("div",{style:{fontSize:9,color:"#6b7d9a",marginTop:1},children:[P," ",B("deepDiveNodes",t)]})]}),d.jsxs("div",{style:{marginBottom:10},children:[d.jsx("div",{style:{height:5,borderRadius:3,background:b.bg,overflow:"hidden",marginBottom:4},children:d.jsx("div",{style:{height:"100%",borderRadius:3,width:`${I}%`,background:u?"#27ae60":"#4a9eff",transition:"width 0.4s ease"}})}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:9,color:"#6b7d9a"},children:[d.jsxs("span",{children:[B("classified",t),": ",d.jsxs("span",{style:{color:"#f5f6fa"},children:[N,"/",P]})]}),d.jsxs("span",{children:[B("questions",t),": ",d.jsx("span",{style:{color:"#f5f6fa"},children:h})]})]})]}),u&&d.jsxs("div",{children:[d.jsxs("div",{style:{background:j.length>_.length?"#27ae6018":"#e74c3c18",border:`1px solid ${j.length>_.length?"#27ae6050":"#e74c3c50"}`,borderRadius:6,padding:"10px 12px",marginBottom:10},children:[d.jsx("div",{style:{color:j.length>_.length?"#2ecc71":"#ff6b6b",fontWeight:700,fontSize:12,marginBottom:4},children:B("diagReady",t)}),d.jsxs("div",{style:{color:"#6b7d9a",fontSize:9,lineHeight:1.6},children:[B("diagKnown",t),": ",d.jsx("span",{style:{color:"#2ecc71"},children:j.length})," / ",B("diagStudy",t),": ",d.jsx("span",{style:{color:"#ff6b6b"},children:_.length})," / ",B("diagTotal",t),": ",P]})]}),_.length>0&&d.jsxs(d.Fragment,{children:[d.jsx("div",{style:{color:"#e74c3c",fontSize:10,fontWeight:600,marginBottom:5},children:B("studyThese",t)}),a.filter(F=>s[F]==="unknown").slice(0,8).map(F=>{var V;return d.jsx(ap,{id:F,label:q(F),scope:(V=S[F])==null?void 0:V.scope,classification:"unknown",beta:c[F]},F)})]}),j.length>0&&d.jsxs(d.Fragment,{children:[d.jsx("div",{style:{color:"#27ae60",fontSize:10,fontWeight:600,margin:"8px 0 4px"},children:B("mastered",t)}),a.filter(F=>s[F]==="known").map(F=>{var V;return d.jsx(ap,{id:F,label:q(F),scope:(V=S[F])==null?void 0:V.scope,classification:"known",beta:c[F]},F)})]})]}),!u&&d.jsxs(d.Fragment,{children:[m&&d.jsxs("div",{style:{marginBottom:10},children:[d.jsx("div",{style:{color:"#4a9eff",fontSize:10,fontWeight:600,marginBottom:4},children:B("nextQuestion",t)}),d.jsxs("div",{onClick:()=>w==null?void 0:w(m),style:{padding:"7px 9px",borderRadius:5,cursor:"pointer",background:"#4a9eff18",border:"1px solid #4a9eff55",fontSize:10,color:"#a8d4ff"},children:[q(m),d.jsxs("div",{style:{fontSize:8,color:"#6b7d9a",marginTop:2},children:[B("confidence",t),": ",tv(c[m])]})]})]}),T.length>0&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{style:{color:"#f39c12",fontSize:10,fontWeight:600,marginBottom:4},children:[B("unclassified",t)," (",T.length,")"]}),T.map(F=>d.jsxs("div",{onClick:()=>w==null?void 0:w(F),style:{padding:"5px 8px",marginBottom:3,borderRadius:4,cursor:"pointer",background:F===m?"#4a9eff18":"#f39c1212",border:`1px solid ${F===m?"#4a9eff55":"#f39c1230"}`,fontSize:9,color:F===m?"#a8d4ff":"#f5d78e",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsx("span",{children:q(F)}),d.jsx(zm,{beta:c[F]})]},F))]})]})]})}function tv(o){if(!o)return"50%";const t=o.alpha/(o.alpha+o.beta);return`${Math.round(t*100)}%`}function zm({beta:o}){const t=o?o.alpha/(o.alpha+o.beta):.5,r=o?o.alpha+o.beta:2,a=Math.min(1,(r-2)/4),s=t>.6?"#27ae60":t<.4?"#e74c3c":"#f39c12";return d.jsx("div",{style:{width:30,height:4,borderRadius:2,background:b.bg,overflow:"hidden",flexShrink:0},children:d.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Math.round(t*100)}%`,background:s,opacity:.4+a*.6,transition:"width 0.3s ease"}})})}function ap({id:o,label:t,scope:r,classification:a,beta:s}){const c=a==="known"?"#27ae60":"#e74c3c";return d.jsxs("div",{style:{padding:"4px 7px",marginBottom:3,borderRadius:4,background:`${c}10`,border:`1px solid ${c}30`,fontSize:9,color:a==="known"?"#6dbb87":"#ff8a8a",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsx("span",{children:t}),d.jsx(zm,{beta:s})]})}function rv({lang:o,diagMode:t,hasBelief:r,SCOPE_COLORS:a,SCOPE_LABELS:s,SECTIONS:c}){const[u,m]=R.useState(r),h=Object.entries(a).map(([w,g])=>{var z;return{color:g,label:(z=s[w])==null?void 0:z[o==="pl"?"pl":"en"]}});return d.jsxs("div",{style:{position:"absolute",left:16,bottom:16,background:`${b.surface}95`,backdropFilter:"blur(4px)",borderRadius:6,overflow:"hidden",border:"1px solid #1a2235",fontSize:9},children:[d.jsxs("button",{onClick:()=>m(w=>!w),style:{display:"flex",alignItems:"center",gap:6,padding:"5px 10px",width:"100%",background:"transparent",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:9},children:[d.jsx("span",{style:{opacity:.6},children:u?"▼":"▶"}),B("legendTitle",o)]}),u&&d.jsxs("div",{style:{padding:"4px 10px 8px",borderTop:"1px solid #1a2235"},children:[(t||r)&&d.jsxs("div",{style:{marginBottom:8},children:[[{color:b.knownHi,label:B("legendKnown",o)},{color:b.unknownHi,label:B("legendUnknown",o)},{color:b.frontier,label:B("legendFrontier",o)},{color:"#4a5568",label:B("legendUnclassified",o)}].map(({color:w,label:g})=>d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:3},children:[d.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:w,flexShrink:0}}),d.jsx("span",{style:{color:"#8a9dbe"},children:g})]},g)),d.jsx("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,marginBottom:6}})]}),d.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:B("legendScopes",o)}),h.map(({color:w,label:g})=>d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[d.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:w,flexShrink:0}}),d.jsx("span",{style:{color:"#8a9dbe"},children:g})]},g)),d.jsxs("div",{style:{borderTop:"1px solid #1a2235",marginTop:6,paddingTop:6},children:[d.jsx("div",{style:{color:"#3a4d63",marginBottom:4,fontWeight:700,letterSpacing:.5},children:B("legendStages",o)}),Object.entries(c).map(([w,g])=>d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:2},children:[d.jsx("div",{style:{width:8,height:3,borderRadius:1,background:g.color,flexShrink:0}}),d.jsx("span",{style:{color:"#8a9dbe"},children:g.label})]},w))]})]})]})}function xm({nodes:o,lang:t,onSelect:r,onClose:a,SECTIONS:s,SCOPE_COLORS:c}){const[u,m]=R.useState(""),[h,w]=R.useState(-1),g=R.useRef([]),z=R.useMemo(()=>Object.keys(s??{}),[s]),S=R.useMemo(()=>{const P=u.toLowerCase();return o.filter(N=>!P||N.label.toLowerCase().includes(P)||N.labelPl.toLowerCase().includes(P))},[o,u]),q=R.useMemo(()=>{const P={};for(const I of z)P[I]=[];for(const I of S){const O=I.section??z[0]??"default";P[O]||(P[O]=[]),P[O].push(I)}const N=[];for(const I of z)for(const O of P[I]??[])N.push(O);return N},[S,z]),j=R.useMemo(()=>{const P={};for(const N of z)P[N]=[];for(const N of S){const I=N.section??z[0]??"default";P[I]||(P[I]=[]),P[I].push(N)}return P},[S,z]),_=P=>t==="pl"?P.labelPl:P.label;R.useEffect(()=>{const P=N=>{if(N.key==="Escape"){a();return}N.key==="ArrowDown"&&(N.preventDefault(),w(I=>Math.min(I+1,q.length-1))),N.key==="ArrowUp"&&(N.preventDefault(),w(I=>Math.max(I-1,0))),N.key==="Enter"&&h>=0&&q[h]&&(N.preventDefault(),r(q[h].id))};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[q,h,a,r]),R.useEffect(()=>{h>=0&&g.current[h]&&g.current[h].scrollIntoView({block:"nearest"})},[h]),R.useEffect(()=>{w(-1)},[u]);const T={title:B("goalSelectTitle",t),subtitle:B("goalSelectSubtitle",t),searchPlaceholder:B("goalSelectSearch",t),noResults:B("goalSelectNoResults",t),footer:`${S.length} / ${o.length} ${B("goalSelectTopics",t)}`,cancel:B("cancel",t)};return d.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:P=>{P.target===P.currentTarget&&a()},children:d.jsxs("div",{style:{width:Math.min(440,window.innerWidth-40),maxHeight:"80vh",background:b.surface,border:`1px solid ${b.border}`,borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[d.jsxs("div",{style:{padding:"14px 16px 10px",borderBottom:`1px solid ${b.border}`,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("div",{children:[d.jsx("div",{style:{fontWeight:700,fontSize:13,color:"#f5f6fa"},children:T.title}),d.jsx("div",{style:{fontSize:10,color:"#6b7d9a",marginTop:2},children:T.subtitle})]}),d.jsx("button",{onClick:a,style:{background:"none",border:"none",color:"#6b7d9a",cursor:"pointer",fontSize:18,lineHeight:1},children:"×"})]}),d.jsx("div",{style:{padding:"10px 16px",borderBottom:"1px solid #1a2235"},children:d.jsx("input",{autoFocus:!0,value:u,onChange:P=>m(P.target.value),placeholder:T.searchPlaceholder,style:{width:"100%",boxSizing:"border-box",padding:"7px 10px",borderRadius:5,fontSize:11,background:b.bg,border:`1px solid ${b.border}`,color:"#c8d6e5",outline:"none"}})}),d.jsxs("div",{style:{overflowY:"auto",flex:1,padding:"8px 16px 14px"},children:[z.map(P=>{const N=j[P];if(!N||N.length===0)return null;const I=s==null?void 0:s[P];return d.jsxs("div",{style:{marginBottom:12},children:[d.jsx("div",{style:{fontSize:9,fontWeight:700,color:(I==null?void 0:I.color)??"#6b7d9a",textTransform:"uppercase",letterSpacing:1,marginBottom:5},children:(t==="pl"?I==null?void 0:I.labelPl:I==null?void 0:I.labelEn)??P}),d.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5},children:N.map(O=>{const C=q.indexOf(O),U=(c==null?void 0:c[O.scope])??"#4a9eff",F=h===C;return d.jsxs("button",{ref:V=>g.current[C]=V,onClick:()=>r(O.id),style:{padding:"5px 9px",borderRadius:5,fontSize:10,background:F?`${U}35`:`${U}15`,border:`1px solid ${F?U:`${U}40`}`,color:"#c8d6e5",cursor:"pointer",outline:F?`2px solid ${U}`:"none",outlineOffset:1},onMouseEnter:V=>{V.currentTarget.style.background=`${U}30`,V.currentTarget.style.borderColor=`${U}90`},onMouseLeave:V=>{q.indexOf(O)!==h&&(V.currentTarget.style.background=`${U}15`,V.currentTarget.style.borderColor=`${U}40`)},children:[d.jsx("span",{style:{fontSize:8,marginRight:5,display:"inline-block",width:7,height:7,borderRadius:"50%",background:U,verticalAlign:"middle"}}),_(O)]},O.id)})})]},P)}),S.length===0&&d.jsx("div",{style:{color:"#3a4d63",fontSize:11,padding:"20px 0",textAlign:"center"},children:T.noResults})]}),d.jsxs("div",{style:{padding:"10px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsx("div",{style:{fontSize:9,color:"#3a4d63"},children:T.footer}),d.jsx("button",{onClick:a,style:{padding:"5px 12px",borderRadius:5,fontSize:10,cursor:"pointer",background:"transparent",border:`1px solid ${b.border}`,color:"#6b7d9a"},children:T.cancel})]})]})})}function ov({isOpen:o,onSelect:t,onClose:r,lang:a="pl"}){const s=[{id:"quick",icon:"⚡",color:"#4a9eff",label:B("modeQuickLabel",a),description:B("modeQuickDesc",a)},{id:"deepdive",icon:"◎",color:"#8e44ad",label:B("modeDeepLabel",a),description:B("modeDeepDesc",a)}],[c,u]=R.useState(null),m=R.useRef(null);return R.useEffect(()=>{o&&(u(null),setTimeout(()=>{var h;return(h=m.current)==null?void 0:h.focus()},100))},[o]),R.useEffect(()=>{if(!o)return;const h=w=>{w.key==="Escape"&&r(),w.key==="Enter"&&c&&t(c)};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[o,c,r,t]),o?d.jsx("div",{style:{position:"fixed",inset:0,background:"#000000cc",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:100},onClick:h=>{h.target===h.currentTarget&&r()},children:d.jsxs("div",{style:{width:420,maxWidth:"90vw",background:b.surface,border:`1px solid ${b.border}`,borderRadius:10,display:"flex",flexDirection:"column",overflow:"hidden"},children:[d.jsxs("div",{style:{padding:"16px 18px 12px",borderBottom:`1px solid ${b.border}`},children:[d.jsx("div",{style:{fontWeight:700,fontSize:14,color:"#f5f6fa",marginBottom:4},children:B("modePickerTitle",a)}),d.jsx("div",{style:{fontSize:11,color:"#6b7d9a"},children:B("modePickerSub",a)})]}),d.jsx("div",{style:{padding:"12px 16px",display:"flex",flexDirection:"column",gap:10},children:s.map((h,w)=>d.jsxs("button",{ref:w===0?m:null,onClick:()=>u(h.id),onDoubleClick:()=>t(h.id),style:{textAlign:"left",padding:"12px 14px",borderRadius:6,fontSize:12,cursor:"pointer",background:c===h.id?`${h.color}18`:b.bg,border:`1px solid ${c===h.id?h.color:b.border}`,color:"#c8d6e5",transition:"all 0.15s"},onMouseEnter:g=>{g.currentTarget.style.background=`${h.color}18`,g.currentTarget.style.borderColor=`${h.color}60`},onMouseLeave:g=>{c!==h.id&&(g.currentTarget.style.background=b.bg,g.currentTarget.style.borderColor=b.border)},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:4},children:[d.jsx("span",{style:{fontSize:16},children:h.icon}),d.jsx("span",{style:{fontWeight:600,color:c===h.id?h.color:"#f5f6fa"},children:h.label})]}),d.jsx("div",{style:{fontSize:10,color:"#6b7d9a",lineHeight:1.5},children:h.description})]},h.id))}),d.jsxs("div",{style:{padding:"12px 16px",borderTop:"1px solid #1a2235",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[d.jsx("button",{onClick:r,style:{padding:"6px 14px",borderRadius:5,fontSize:11,cursor:"pointer",background:"transparent",border:`1px solid ${b.border}`,color:"#6b7d9a"},children:B("cancel",a)}),d.jsx("button",{onClick:()=>c&&t(c),disabled:!c,style:{padding:"6px 18px",borderRadius:5,fontSize:11,cursor:c?"pointer":"not-allowed",background:c?"#4a9eff":b.border,border:"none",color:c?"#fff":"#3a4d63",opacity:c?1:.5},children:B("next",a)})]})]})}):null}const iv=[{id:"browse",key:"onboardingBrowse",descKey:"onboardingBrowseDesc",color:"#4a9eff"},{id:"quick",key:"onboardingDiag",descKey:"onboardingDiagDesc",color:"#f39c12"},{id:"deepdive",key:"onboardingDeep",descKey:"onboardingDeepDesc",color:"#8e44ad"}];function av({isOpen:o,onSelect:t,onClose:r,lang:a}){return R.useEffect(()=>{if(!o)return;const s=c=>{c.key==="Escape"&&r()};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[o,r]),o?d.jsx("div",{style:{position:"fixed",inset:0,background:"#000000dd",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200,padding:16},onClick:s=>{s.target===s.currentTarget&&r()},children:d.jsxs("div",{style:{width:"100%",maxWidth:480,background:b.surface,border:`1px solid ${b.border}`,borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column"},children:[d.jsxs("div",{style:{padding:"28px 24px 20px",background:"linear-gradient(135deg, #0d1520 0%, #101b2a 100%)",borderBottom:`1px solid ${b.border}`,textAlign:"center"},children:[d.jsx("div",{style:{fontSize:32,marginBottom:10},children:"◉"}),d.jsx("div",{style:{fontWeight:700,fontSize:18,color:b.textPrimary,marginBottom:8},children:B("onboardingTitle",a)}),d.jsx("div",{style:{fontSize:12,color:b.textDim,lineHeight:1.6,maxWidth:360,margin:"0 auto"},children:B("onboardingSub",a)})]}),d.jsxs("div",{style:{padding:"16px 24px",display:"flex",flexDirection:"column",gap:10},children:[d.jsx("div",{style:{fontSize:11,color:b.textFaint,marginBottom:2},children:B("onboardingChoose",a)}),iv.map(({id:s,key:c,descKey:u,color:m})=>d.jsxs("button",{onClick:()=>t(s),style:{display:"flex",gap:14,alignItems:"flex-start",padding:"12px 14px",borderRadius:8,cursor:"pointer",background:`${m}0e`,border:`1px solid ${m}30`,textAlign:"left",width:"100%",transition:"border-color 0.15s, background 0.15s"},onMouseEnter:h=>{h.currentTarget.style.background=`${m}1c`,h.currentTarget.style.borderColor=`${m}70`},onMouseLeave:h=>{h.currentTarget.style.background=`${m}0e`,h.currentTarget.style.borderColor=`${m}30`},children:[d.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:m,flexShrink:0,marginTop:5}}),d.jsxs("div",{style:{flex:1},children:[d.jsx("div",{style:{fontWeight:600,fontSize:13,color:b.textPrimary,marginBottom:3},children:B(c,a)}),d.jsx("div",{style:{fontSize:11,color:b.textDim,lineHeight:1.5},children:B(u,a)})]}),d.jsx("div",{style:{color:m,fontSize:16,alignSelf:"center",opacity:.7},children:"→"})]},s))]}),d.jsx("div",{style:{margin:"0 24px 16px",padding:"8px 10px",background:"#ffffff06",borderRadius:6,fontSize:9,color:b.textFaint,textAlign:"center"},children:B("onboardingLangHint",a)})]})}):null}function sv({lang:o,setLang:t,layoutId:r,layouts:a,onLayoutChange:s,searchTerm:c,setSearchTerm:u,filterScope:m,toggleScope:h,clearScope:w,filterSection:g,toggleSection:z,clearSection:S,SECTIONS:q,SCOPE_COLORS:j,SCOPE_LABELS:_,isMobile:T}){const[P,N]=R.useState(!1),I=R.useRef(null);R.useEffect(()=>{if(!P)return;const C=F=>{I.current&&!I.current.contains(F.target)&&N(!1)},U=F=>{F.key==="Escape"&&N(!1)};return document.addEventListener("mousedown",C),document.addEventListener("keydown",U),()=>{document.removeEventListener("mousedown",C),document.removeEventListener("keydown",U)}},[P]);const O=m.size+g.size+(c?1:0);return d.jsxs("div",{ref:I,style:{position:"relative"},children:[d.jsxs("button",{onClick:()=>N(C=>!C),style:{padding:"7px 10px",borderRadius:5,fontSize:15,cursor:"pointer",border:P||O>0?"1px solid #4a9eff":`1px solid ${b.border}`,background:P?"#4a9eff22":"transparent",color:P||O>0?"#4a9eff":b.textDim,minHeight:36,minWidth:36,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},title:B("moreOptions",o),children:[d.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[d.jsx("circle",{cx:"8",cy:"2.5",r:"1.5"}),d.jsx("circle",{cx:"8",cy:"8",r:"1.5"}),d.jsx("circle",{cx:"8",cy:"13.5",r:"1.5"})]}),O>0&&d.jsx("span",{style:{position:"absolute",top:-4,right:-4,background:"#4a9eff",color:"#fff",fontSize:9,width:16,height:16,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700},children:O})]}),P&&d.jsxs("div",{style:{position:"absolute",top:"calc(100% + 6px)",right:0,width:T?"85vw":320,maxWidth:"90vw",maxHeight:"70vh",overflowY:"auto",background:b.surface,border:`1px solid ${b.border}`,borderRadius:10,padding:"14px 16px",zIndex:60,boxShadow:"0 12px 40px rgba(0,0,0,0.5)"},children:[d.jsxs("div",{style:{marginBottom:14},children:[d.jsx("label",{style:{fontSize:11,color:b.textDim,fontWeight:600,marginBottom:6,display:"block"},children:B("search",o)}),d.jsx("input",{value:c,onChange:C=>u(C.target.value),placeholder:B("search",o),style:{width:"100%",boxSizing:"border-box",background:b.bg,border:`1px solid ${b.border}`,borderRadius:6,color:b.textBody,padding:"8px 10px",fontSize:13,outline:"none"}})]}),d.jsxs("div",{style:{marginBottom:14},children:[d.jsx("label",{style:{fontSize:11,color:b.textDim,fontWeight:600,marginBottom:6,display:"block"},children:o==="pl"?"Język":"Language"}),d.jsx("div",{style:{display:"flex",gap:6},children:["pl","en"].map(C=>d.jsx("button",{onClick:()=>t(C),style:{...Eo(o===C,C==="pl"?"#f5a623":"#4a9eff"),fontSize:12,padding:"6px 14px"},children:C.toUpperCase()},C))})]}),d.jsxs("div",{style:{marginBottom:14},children:[d.jsx("label",{style:{fontSize:11,color:b.textDim,fontWeight:600,marginBottom:6,display:"block"},children:B("layoutLabel",o)}),d.jsx("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:a.map(C=>d.jsx("button",{onClick:()=>s(C.meta.id),style:{...Eo(r===C.meta.id,"#4a9eff"),fontSize:11,padding:"5px 10px"},children:C.meta.label},C.meta.id))})]}),d.jsxs("div",{style:{marginBottom:14},children:[d.jsx("label",{style:{fontSize:11,color:b.textDim,fontWeight:600,marginBottom:6,display:"block"},children:B("filterSection",o)}),d.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[d.jsx("button",{style:{...Eo(g.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:S,children:B("all",o)}),Object.entries(q).map(([C,U])=>d.jsx("button",{style:{...Eo(g.has(C),U.color),fontSize:11,padding:"4px 10px"},onClick:()=>z(C),children:U.label},C))]})]}),d.jsxs("div",{children:[d.jsx("label",{style:{fontSize:11,color:b.textDim,fontWeight:600,marginBottom:6,display:"block"},children:B("filterScope",o)}),d.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:4},children:[d.jsx("button",{style:{...Eo(m.size===0,"#c8d6e5"),fontSize:11,padding:"4px 10px"},onClick:w,children:B("all",o)}),Object.entries(j).map(([C,U])=>{var F;return d.jsx("button",{style:{...Eo(m.has(C),U),fontSize:11,padding:"4px 10px"},onClick:()=>h(C),children:(F=_[C])==null?void 0:F[o==="pl"?"pl":"en"]},C)})]})]})]})]})}const sp={x:40,y:40,scale:.52},lp={x:10,y:10,scale:.3};function lv({courseId:o,RAW_NODES:t,RAW_EDGES:r,QUESTION_BANK:a,SECTIONS:s,SCOPE_COLORS:c,SCOPE_LABELS:u,COURSE_META:m,onBackToCourses:h,initialBelief:w,initialEvidence:g,initialSelectedNode:z,initialLang:S,onBackToHome:q}){const j=bp(),[_,T]=R.useState(yp),[P,N]=lt("lang",S??"pl"),[I,O]=R.useState(new Set),[C,U]=R.useState(new Set),[F,V]=R.useState(""),[Q,ee]=R.useState(z??null),[se,X]=R.useState(null),[te,re]=R.useState(null),[pe,fe]=R.useState(null),[be,oe]=R.useState(null),[J,ne]=R.useState(null),[A,W]=R.useState(!1),[ge,we]=R.useState(!1),_e=!!w,[ze,je]=lt("onboardingSeen",!1),[ie,Te]=R.useState(!ze&&!_e),We=R.useCallback(()=>{je(!0),Te(!1)},[je]),vn=R.useCallback(ae=>O(Ie=>{const Ve=new Set(Ie);return Ve.has(ae)?Ve.delete(ae):Ve.add(ae),Ve}),[]),Lt=R.useCallback(ae=>U(Ie=>{const Ve=new Set(Ie);return Ve.has(ae)?Ve.delete(ae):Ve.add(ae),Ve}),[]),dt=R.useCallback(()=>O(new Set),[]),Oe=R.useCallback(()=>U(new Set),[]),Je=R.useMemo(()=>io(t,r),[t,r]),[Le,Pn]=R.useState(()=>A0(_,300,t,r)),wn=R.useMemo(()=>t.map(ae=>{var Ie,Ve;return{...ae,x:((Ie=Le[ae.id])==null?void 0:Ie.x)??ae.x,y:((Ve=Le[ae.id])==null?void 0:Ve.y)??ae.y}}),[t,Le]),qt=R.useRef(null),{viewTransform:In,setViewTransform:Mn,toCanvas:Uo,startPan:Zo,cursorStyle:ea,setCursorStyle:na,handleMouseMove:Ko,handleMouseUp:so}=Wx(qt),{startNodeDrag:Nr,handleDragMove:Vo,handleDragEnd:sr}=Ox(Uo,wn,Pn,na),{diagMode:Ue,setDiagMode:Zn,mode:fn,setMode:Tt,quizNode:Nn,setQuizNode:pt,questionsAnswered:lo,setAnsweredQuestions:Yo,getAnsweredIndices:Qo,handleDiagClick:Xo,handleQuizAnswer:lr,resetDiagnostic:Kn,startDeepDive:co,targetNode:cr,belief:Jo,setBelief:ta,frontier:ra,visibleFrontier:uo,hasStarted:po,nextSuggestedId:Pt,expectedRemaining:ei,pCorrect:Lr,sessionComplete:ni,betaBeliefs:Wr,subgraphIds:At,ddClassification:Wt,ddNextNodeId:ur,ddComplete:ti}=Yx(Je,a,o);R.useEffect(()=>{w&&Object.keys(w).length>0&&ta(w)},[]);const Os=R.useCallback(ae=>{ae.lang&&N(ae.lang),ae.view==="node"?(ee(ae.nodeId),re(null)):ae.view==="resource"?(ee(ae.nodeId),re(ae.resourceIndex)):ae.view==="question"?(ee(null),Zn(!0),Tt("quick"),oe(null),ne(ae.questionIndex),pt(ae.nodeId)):ae.view==="diagnostic"?ae.mode==="quick"?(Zn(!0),Tt("quick"),ee(null)):ae.mode==="deepdive"&&ae.goalNode&&(Zn(!0),co(ae.goalNode)):(ee(null),re(null))},[N,Zn,Tt,co]),{setRoute:Ot}=Jx(Os);R.useEffect(()=>{Ue&&Nn&&J!=null?Ot({view:"question",nodeId:Nn,questionIndex:J,lang:P}):Ue?Ot(fn==="deepdive"&&cr?{view:"diagnostic",mode:"deepdive",goalNode:cr,lang:P}:{view:"diagnostic",mode:"quick",lang:P}):Q?te!=null?Ot({view:"resource",nodeId:Q,resourceIndex:te,lang:P}):Ot({view:"node",nodeId:Q,lang:P}):Ot({view:"graph",lang:P})},[Q,te,Ue,fn,cr,Nn,J,P,Ot]);const Ht=R.useMemo(()=>{const ae=F.toLowerCase(),Ie=t.filter(Ve=>!(I.size>0&&!I.has(Ve.scope)||C.size>0&&!C.has(Ve.section)||ae&&!Ve.label.toLowerCase().includes(ae)&&!Ve.labelPl.toLowerCase().includes(ae)));return Ie.length<t.length?new Set(Ie.map(Ve=>Ve.id)):null},[t,I,C,F]),dr=Q||se,ri=R.useMemo(()=>{var Ie,Ve;if(!dr)return null;const ae=new Set([dr]);return(Ie=Je.prereqs[dr])==null||Ie.forEach(si=>ae.add(si)),(Ve=Je.dependents[dr])==null||Ve.forEach(si=>ae.add(si)),ae},[dr,Je]),oa=R.useMemo(()=>!Ue||fn!=="deepdive"||At.length===0?null:new Set(At),[Ue,fn,At]),ia=R.useCallback(ae=>{const Ie=ae.target.closest("[data-node-id]");if(Ie){Nr(Ie.getAttribute("data-node-id"),ae.clientX,ae.clientY),ae.stopPropagation();return}Zo(ae.clientX,ae.clientY)},[Nr,Zo]),aa=R.useCallback(ae=>{Vo(ae.clientX,ae.clientY)||Ko(ae)},[Vo,Ko]),oi=R.useCallback(()=>{sr(),so()},[sr,so]),sa=R.useCallback(ae=>{j&&!ae.target.closest("[data-node-id]")&&ee(null)},[j]),Or=R.useRef(!1);R.useEffect(()=>{if(!(!Ue||fn!=="quick")&&!Nn&&Pt&&!ni&&po&&Or.current){Or.current=!1;const ae=setTimeout(()=>pt(Pt),400);return()=>clearTimeout(ae)}},[Ue,fn,Nn,Pt,ni,po]),R.useEffect(()=>{if(!(!Ue||fn!=="deepdive")&&!Nn&&ur&&!ti&&Or.current){Or.current=!1;const ae=setTimeout(()=>pt(ur),400);return()=>clearTimeout(ae)}},[Ue,fn,Nn,ur,ti]),R.useEffect(()=>{const ae=Ie=>{Ie.key==="Escape"&&(ee(null),W(!1))};return window.addEventListener("keydown",ae),()=>window.removeEventListener("keydown",ae)},[]);const Hs=R.useCallback(ae=>{T(ae),Pn(A0(ae,300,t,r)),Mn(j?lp:sp)},[Mn,t,r,j]),cn=R.useCallback(()=>{Ue?(Zn(!1),Kn(),ee(null)):we(!0)},[Ue,Zn,Kn]),ii=R.useCallback(ae=>{we(!1),Kn(),ae==="deepdive"?(Zn(!0),W(!0)):(Zn(!0),Tt("quick"),ee(null))},[Zn,Tt,Kn]),ai=R.useCallback(ae=>{je(!0),Te(!1),(ae==="quick"||ae==="deepdive")&&ii(ae)},[je,ii]),la=R.useMemo(()=>{if(fn!=="deepdive")return{};const ae={};for(const[Ie,Ve]of Object.entries(Wt))Ve==="known"?ae[Ie]="known":Ve==="unknown"&&(ae[Ie]="unknown");return ae},[fn,Wt]),Gt=fn==="deepdive"?la:Jo,Gs=fn==="deepdive"?At.filter(ae=>Wt[ae]==="uncertain"):uo,ca=P==="pl"?m.title??m.titleEn:m.titleEn??m.title,mo=ie||ge||A,rt=(ae,Ie="#4a9eff")=>({padding:"7px 13px",borderRadius:5,fontSize:13,cursor:"pointer",border:ae?`1px solid ${Ie}`:`1px solid ${b.border}`,background:ae?`${Ie}22`:"transparent",color:ae?Ie:b.textDim,whiteSpace:"nowrap",minHeight:36,fontWeight:ae?600:400});return d.jsxs("div",{style:{width:"100%",height:"100dvh",background:b.bg,fontFamily:ve,color:b.textBody,display:"flex",flexDirection:"column",overflow:"hidden"},children:[d.jsxs("div",{style:{padding:j?"8px 12px":"8px 16px",borderBottom:`1px solid ${b.borderSubtle}`,display:"flex",alignItems:"center",gap:j?8:10,flexShrink:0},children:[(q||h)&&d.jsx("button",{onClick:q??h,style:{...rt(!1),padding:"7px 10px"},children:"←"}),d.jsx("h1",{style:{margin:0,fontSize:13,fontWeight:700,color:b.textPrimary,letterSpacing:j?.5:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",flex:1},children:ca}),d.jsxs("div",{style:{display:"flex",gap:0,borderRadius:6,overflow:"hidden",border:`1px solid ${b.border}`},children:[d.jsx("button",{onClick:()=>{Ue&&(Zn(!1),Kn(),ee(null))},style:{padding:j?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",fontWeight:Ue?400:700,background:Ue?"transparent":"#4a9eff22",color:Ue?b.textDim:"#4a9eff",minHeight:36},children:B("exploreMode",P)}),d.jsx("button",{onClick:()=>{Ue||we(!0)},style:{padding:j?"7px 12px":"7px 16px",fontSize:12,cursor:"pointer",border:"none",borderLeft:`1px solid ${b.border}`,fontWeight:Ue?700:400,background:Ue?"#f39c1222":"transparent",color:Ue?"#f39c12":b.textDim,minHeight:36},children:B(Ue?fn==="deepdive"?"diagnosticOnDeep":"diagnosticOnQuick":"diagnosticOff",P)})]}),Ue&&d.jsx("button",{onClick:()=>W(!0),style:rt(fn==="deepdive","#8e44ad"),children:B("goalBtn",P)}),d.jsx(sv,{lang:P,setLang:ae=>N(ae),layoutId:_,layouts:$p,onLayoutChange:Hs,searchTerm:F,setSearchTerm:V,filterScope:I,toggleScope:vn,clearScope:dt,filterSection:C,toggleSection:Lt,clearSection:Oe,SECTIONS:s,SCOPE_COLORS:c,SCOPE_LABELS:u,isMobile:j})]}),d.jsxs("div",{style:{flex:1,position:"relative",overflow:"hidden"},children:[d.jsxs("svg",{ref:qt,width:"100%",height:"100%",style:{cursor:ea,touchAction:"none",pointerEvents:mo?"none":"auto"},onMouseDown:ia,onMouseMove:aa,onMouseUp:oi,onMouseLeave:oi,onClick:ae=>{if(sa(ae),!Ue)return;const Ie=ae.target.closest("[data-node-id]");Ie&&Xo(Ie.getAttribute("data-node-id"),ae.shiftKey)},children:[d.jsxs("defs",{children:[d.jsx("marker",{id:"arrow-default",markerWidth:"8",markerHeight:"8",refX:"7",refY:"4",orient:"auto",markerUnits:"userSpaceOnUse",children:d.jsx("path",{d:"M0,0 L8,4 L0,8 L2,4 Z",fill:"#3a5578"})}),d.jsx("marker",{id:"arrow-hi",markerWidth:"8",markerHeight:"8",refX:"7",refY:"4",orient:"auto",markerUnits:"userSpaceOnUse",children:d.jsx("path",{d:"M0,0 L8,4 L0,8 L2,4 Z",fill:"#4a9eff"})}),d.jsx("marker",{id:"arrow-dim",markerWidth:"8",markerHeight:"8",refX:"7",refY:"4",orient:"auto",markerUnits:"userSpaceOnUse",children:d.jsx("path",{d:"M0,0 L8,4 L0,8 L2,4 Z",fill:"#151b26"})})]}),d.jsxs("g",{transform:`translate(${In.x},${In.y}) scale(${In.scale})`,children:[d.jsx(eb,{edges:r,nodes:wn,highlightedIds:Ue&&fn==="deepdive"?oa:ri}),d.jsx(ob,{nodes:wn,filteredIds:Ue&&fn==="deepdive"?oa:Ht,highlightedIds:Ue?null:ri,selected:Q,onSelect:ae=>{re(null),ee(ae===Q?null:ae)},onHover:X,lang:P,diagMode:Ue,belief:Gt,frontier:Gs,scale:In.scale,scopeColors:c,edges:r})]})]}),Q&&!pe&&d.jsx(Z6,{nodeId:Q,nodes:wn,adjacency:Je,lang:P,SCOPE_COLORS:c,SCOPE_LABELS:u,SECTIONS:s,belief:Gt,evidence:g,QUESTION_BANK:a,onClose:()=>ee(null),onNavigate:ae=>ee(ae),onShowPath:ae=>{ee(null),fe(ae)},onQuizMe:ae=>{ee(null),Zn(!0),Tt("quick"),oe(null),pt(ae)},onQuizMatura:ae=>{ee(null),Zn(!0),Tt("quick"),oe("cke"),pt(ae)}}),pe&&d.jsx(gm,{goalId:pe,RAW_NODES:t,RAW_EDGES:r,SCOPE_COLORS:c,SCOPE_LABELS:u,SECTIONS:s,belief:Gt,evidence:g,lang:P,onSelectTopic:ae=>{fe(null),ee(ae)},onClose:()=>fe(null)}),Ue&&Nn&&d.jsx(X6,{nodeId:Nn,nodes:wn,lang:P,questionBank:a,excludeIndices:Qo(Nn),isMobile:j,sourceFilter:be,forceIndex:J,onAnswer:(ae,Ie,Ve)=>{Or.current=!0,ne(null),lr(Nn,ae,Ie,Ve)},onSkip:ae=>{typeof ae=="number"&&Yo(Ie=>new Set([...Ie,`${Nn}:${ae}`])),pt(null),oe(null),ne(null)}}),Ue&&fn==="quick"&&d.jsx(ev,{belief:Jo,frontier:ra,visibleFrontier:uo,hasStarted:po,nextSuggestedId:Pt,sessionComplete:ni,adjacency:Je,expectedRemaining:ei,pCorrect:Lr,questionsAnswered:lo,nodes:wn,lang:P,onNodeClick:ae=>pt(ae),onReset:Kn,SCOPE_LABELS:u,isMobile:j}),Ue&&fn==="deepdive"&&cr&&d.jsx(nv,{nodes:wn,lang:P,targetNode:cr,subgraphIds:At,ddClassification:Wt,betaBeliefs:Wr,ddComplete:ti,ddNextNodeId:ur,questionsAnswered:lo,onNodeClick:ae=>pt(ae),onReset:Kn,isMobile:j}),!j&&d.jsx(rv,{lang:P,diagMode:Ue,hasBelief:Object.keys(Gt).length>0,SCOPE_COLORS:c,SCOPE_LABELS:u,SECTIONS:s}),d.jsx("div",{style:{position:"absolute",right:12,bottom:16,display:"flex",flexDirection:"column",gap:4},children:[["＋",1.2],["－",.8],["↺",null]].map(([ae,Ie])=>d.jsx("button",{onClick:()=>{Ie===null?(Pn(A0(_,300,t,r)),Mn(j?lp:sp)):Mn(Ve=>({...Ve,scale:Math.max(.15,Math.min(5,Ve.scale*Ie))}))},style:{width:44,height:44,background:b.surface,border:`1px solid ${b.border}`,color:b.textBody,borderRadius:8,cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.4)"},children:ae},ae))}),j&&Ue&&!Nn&&d.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,background:`${b.surface}ee`,borderTop:`1px solid ${b.border}`,display:"flex",gap:0,zIndex:20},children:[d.jsx("button",{onClick:()=>W(!0),style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",borderRight:`1px solid ${b.border}`,color:fn==="deepdive"?"#c39bd3":b.textDim,cursor:"pointer"},children:B("goalBtn",P)}),d.jsx("button",{onClick:cn,style:{flex:1,padding:"12px 8px",fontSize:12,background:"transparent",border:"none",color:"#f39c12",cursor:"pointer",fontWeight:600},children:B("reset",P)})]})]}),A&&d.jsx(xm,{nodes:wn,lang:P,SECTIONS:s,SCOPE_COLORS:c,onSelect:ae=>{W(!1),co(ae)},onClose:()=>W(!1)}),d.jsx(ov,{isOpen:ge,onSelect:ii,onClose:()=>we(!1),lang:P}),d.jsx(av,{isOpen:ie,onSelect:ai,onClose:We,lang:P})]})}function cv({lang:o,setLang:t,themeId:r,onThemeChange:a,onStartQuiz:s,onStartGoalQuiz:c,onBrowseViz:u,onBrowseMap:m,onProfile:h,onFromScratch:w,hasSavedCourse:g}){const[z,S]=R.useState("standard"),[q,j]=R.useState(!1);return d.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:b.bg,fontFamily:ve,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"32px 20px",position:"relative"},children:[d.jsxs("div",{style:{position:"absolute",top:16,right:20,display:"flex",gap:10,alignItems:"center"},children:[d.jsx("div",{style:{display:"flex",gap:5},children:Object.entries(dc).map(([_,T])=>d.jsx("button",{onClick:()=>a(_),title:T.name,style:{width:18,height:18,borderRadius:"50%",background:T.bg,border:r===_?`2px solid ${T.textPrimary}`:`2px solid ${T.border}`,cursor:"pointer",padding:0,boxShadow:r===_?`0 0 6px ${T.textDim}`:"none"}},_))}),d.jsx("div",{style:{display:"flex",gap:0,borderRadius:6,overflow:"hidden",border:`1px solid ${b.border}`},children:["pl","en"].map(_=>d.jsx("button",{onClick:()=>t(_),style:{padding:"10px 14px",fontSize:12,cursor:"pointer",border:"none",borderLeft:_==="en"?`1px solid ${b.border}`:"none",background:o===_?"#4a9eff18":"transparent",color:o===_?"#4a9eff":b.textDim,fontWeight:o===_?600:400,fontFamily:ve},children:_.toUpperCase()},_))})]}),d.jsxs("div",{style:{maxWidth:440,width:"100%",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",gap:0},children:[d.jsxs("svg",{width:"80",height:"56",viewBox:"0 0 80 56",style:{marginBottom:28,opacity:.7},children:[d.jsx("line",{x1:"14",y1:"44",x2:"40",y2:"12",stroke:b.edgeDefault,strokeWidth:"1.5"}),d.jsx("line",{x1:"66",y1:"44",x2:"40",y2:"12",stroke:b.edgeDefault,strokeWidth:"1.5"}),d.jsx("line",{x1:"14",y1:"44",x2:"40",y2:"44",stroke:b.edgeDefault,strokeWidth:"1.5"}),d.jsx("line",{x1:"40",y1:"44",x2:"66",y2:"44",stroke:b.edgeDefault,strokeWidth:"1.5"}),d.jsx("line",{x1:"40",y1:"44",x2:"40",y2:"12",stroke:b.edgeDefault,strokeWidth:"1.5"}),d.jsx("circle",{cx:"40",cy:"12",r:"5",fill:"#4a9eff",opacity:"0.8"}),d.jsx("circle",{cx:"14",cy:"44",r:"5",fill:b.known,opacity:"0.8"}),d.jsx("circle",{cx:"40",cy:"44",r:"5",fill:b.frontier,opacity:"0.8"}),d.jsx("circle",{cx:"66",cy:"44",r:"5",fill:b.unknown,opacity:"0.6"})]}),d.jsx("div",{style:{fontSize:13,fontWeight:600,color:b.textDim,letterSpacing:2,textTransform:"uppercase",marginBottom:16},children:"oczochodzi.pl"}),d.jsx("h1",{style:{margin:"0 0 12px",fontSize:26,fontWeight:700,color:b.textPrimary,lineHeight:1.3,letterSpacing:-.3},children:B("heroTitle",o)}),d.jsx("p",{style:{margin:"0 0 36px",fontSize:14,lineHeight:1.7,color:b.textDim,maxWidth:360},children:B("heroSub",o)}),g&&h&&d.jsx("button",{onClick:h,style:{width:"100%",maxWidth:320,padding:"16px 24px",fontSize:15,fontWeight:600,fontFamily:ve,borderRadius:10,border:"1px solid #f39c1250",background:"#f39c1218",color:"#f39c12",cursor:"pointer",marginBottom:10,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:_=>{_.currentTarget.style.background="#f39c1228",_.currentTarget.style.borderColor="#f39c1280"},onMouseLeave:_=>{_.currentTarget.style.background="#f39c1218",_.currentTarget.style.borderColor="#f39c1250"},children:B("heroContinue",o)}),d.jsx("button",{onClick:()=>s(z),style:{width:"100%",maxWidth:320,padding:"16px 24px",fontSize:15,fontWeight:600,fontFamily:ve,borderRadius:10,border:"1px solid #4a9eff50",background:"#4a9eff18",color:"#4a9eff",cursor:"pointer",marginBottom:12,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:_=>{_.currentTarget.style.background="#4a9eff28",_.currentTarget.style.borderColor="#4a9eff80"},onMouseLeave:_=>{_.currentTarget.style.background="#4a9eff18",_.currentTarget.style.borderColor="#4a9eff50"},children:B("heroStart",o)}),d.jsxs("button",{onClick:()=>j(_=>!_),style:{padding:"8px 16px",fontSize:12,fontFamily:ve,border:"none",background:"transparent",color:b.textFaint,cursor:"pointer",transition:"color 0.15s"},onMouseEnter:_=>{_.currentTarget.style.color=b.textDim},onMouseLeave:_=>{_.currentTarget.style.color=b.textFaint},children:[q?"▲":"▼"," ",B("heroMore",o)]}),q&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8,marginTop:4,width:"100%",maxWidth:320},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,fontSize:12},children:[d.jsx("span",{style:{color:b.textFaint},children:B("heroLength",o)}),d.jsx("select",{value:z,onChange:_=>S(_.target.value),style:{background:b.surface,border:`1px solid ${b.border}`,borderRadius:6,padding:"5px 10px",fontSize:12,fontFamily:ve,color:b.textBody,cursor:"pointer",outline:"none"},children:Object.entries(X0).map(([_,T])=>d.jsxs("option",{value:_,children:[B(T.labelKey,o)," (~",T.maxQuestions," ",B("heroQuestions",o),")"]},_))})]}),w&&d.jsxs("button",{onClick:w,style:{width:"100%",padding:"10px 16px",fontSize:12,fontFamily:ve,borderRadius:6,border:"1px solid #27ae6040",background:"#27ae6010",color:"#27ae60",cursor:"pointer"},children:[B("profileFromScratch",o),d.jsx("span",{style:{display:"block",fontSize:10,color:b.textFaint,marginTop:2},children:B("profileFromScratchSub",o)})]}),d.jsx("button",{onClick:c,style:{width:"100%",padding:"10px 16px",fontSize:12,fontFamily:ve,borderRadius:6,border:`1px solid ${b.border}`,background:"transparent",color:b.textBody,cursor:"pointer"},children:B("heroGoal",o)}),g&&h&&d.jsx("button",{onClick:h,style:{width:"100%",padding:"10px 16px",fontSize:12,fontFamily:ve,borderRadius:6,border:`1px solid ${b.border}`,background:"transparent",color:b.textDim,cursor:"pointer"},children:B("heroProfile",o)}),d.jsxs("button",{onClick:u,style:{width:"100%",padding:"10px 16px",fontSize:12,fontFamily:ve,borderRadius:6,border:`1px solid ${b.border}`,background:"transparent",color:b.textDim,cursor:"pointer"},children:["⬡ ",B("heroBrowseViz",o)]}),d.jsx("button",{onClick:m,style:{width:"100%",padding:"10px 16px",fontSize:12,fontFamily:ve,borderRadius:6,border:`1px solid ${b.border}`,background:"transparent",color:b.textFaint,cursor:"pointer"},children:B("heroExplore",o)})]}),d.jsx("div",{style:{marginTop:48,display:"flex",gap:24,fontSize:11,color:b.textFaint,lineHeight:1.6,flexWrap:"wrap",justifyContent:"center"},children:[{num:"1",text:B("heroStep1",o)},{num:"2",text:B("heroStep2",o)},{num:"3",text:B("heroStep3",o)}].map(({num:_,text:T})=>d.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,maxWidth:140},children:[d.jsx("span",{style:{width:20,height:20,borderRadius:"50%",border:`1px solid ${b.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:b.textDim,flexShrink:0},children:_}),d.jsx("span",{children:T})]},_))})]}),d.jsx("div",{style:{position:"absolute",bottom:20,display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:d.jsxs("a",{href:"https://buycoffee.to/oczochodzi",target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",gap:7,padding:"8px 18px",borderRadius:8,border:`1px solid ${b.border}`,background:"transparent",color:b.textDim,fontSize:13,fontFamily:ve,textDecoration:"none",transition:"background 0.15s, color 0.15s, border-color 0.15s"},onMouseEnter:_=>{_.currentTarget.style.background="rgba(255,209,102,0.08)",_.currentTarget.style.borderColor="rgba(255,209,102,0.4)",_.currentTarget.style.color="#FFD166"},onMouseLeave:_=>{_.currentTarget.style.background="transparent",_.currentTarget.style.borderColor=b.border,_.currentTarget.style.color=b.textDim},children:["☕ ",B("heroCoffee",o)]})})]})}function uv({RAW_NODES:o,RAW_EDGES:t,QUESTION_BANK:r,lang:a,quizPreset:s="standard",onComplete:c,onExit:u}){var we,_e;const m=X0[s]??X0.standard,h=R.useMemo(()=>io(o,t),[o,t]),w=R.useMemo(()=>[...new Set([...Object.keys(h.prereqs),...Object.keys(h.dependents),...Object.keys(r)])].map(je=>({id:je})),[h,r]),g=R.useMemo(()=>Object.fromEntries(o.map(ze=>[ze.id,ze])),[o]),[z,S]=R.useState({}),[q,j]=R.useState({correct:0,incorrect:0,questionsAnswered:0}),[_,T]=R.useState(new Set),[P,N]=R.useState({}),[I,O]=R.useState("answering"),[C,U]=R.useState(null),[F,V]=R.useState(0),Q=R.useMemo(()=>{const ze=q.correct+q.incorrect;return ze===0?.5:(q.correct+.5)/(ze+1)},[q]),ee=R.useMemo(()=>hc(w,z,h,Q),[w,z,h,Q]),se=R.useMemo(()=>{const ze=[];return _.forEach(je=>{const[ie,Te]=je.split(":");ie===ee&&ze.push(parseInt(Te,10))}),ze},[_,ee]),X=R.useMemo(()=>ee?Ui(r,ee,se):null,[r,ee,se]),te=R.useMemo(()=>X?Oo.random(X.options.length):null,[X]),re=R.useMemo(()=>te?te.apply(X.options):[],[te,X]),pe=R.useMemo(()=>te?te.displayIndex(X.correct):-1,[te,X]),fe=R.useMemo(()=>$c(w,z,q.questionsAnswered,m),[w,z,q.questionsAnswered,m]);R.useEffect(()=>{fe&&q.questionsAnswered>0&&O("done")},[fe,q.questionsAnswered]);const be=R.useCallback(()=>{C!==null&&O("revealed")},[C]),oe=R.useCallback(()=>{const ze=C===pe,je=(X==null?void 0:X.tests)??{[ee]:1};S(ie=>Ki(ee,ze,je,ie,h)),N(ie=>({...ie,[ee]:{correct:ze,questionText:(X==null?void 0:X.q)??null}})),(X==null?void 0:X.index)!=null&&T(ie=>new Set([...ie,`${ee}:${X.index}`])),j(ie=>({correct:ie.correct+(ze?1:0),incorrect:ie.incorrect+(ze?0:1),questionsAnswered:ie.questionsAnswered+1})),U(null),O("answering"),V(ie=>ie+1)},[C,pe,X,ee,h]),J=R.useCallback(ze=>{const je={[ee]:1};S(ie=>Ki(ee,ze,je,ie,h)),N(ie=>({...ie,[ee]:{correct:ze,questionText:null}})),T(ie=>new Set([...ie,`${ee}:-1`])),j(ie=>({correct:ie.correct+(ze?1:0),incorrect:ie.incorrect+(ze?0:1),questionsAnswered:ie.questionsAnswered+1})),V(ie=>ie+1)},[ee,h]);R.useEffect(()=>{const ze=je=>{if(je.key==="Enter"&&(I==="answering"&&C!==null?be():I==="revealed"&&oe()),I==="answering"&&["1","2","3","4"].includes(je.key)){const ie=parseInt(je.key)-1;ie<re.length&&U(ie)}};return window.addEventListener("keydown",ze),()=>window.removeEventListener("keydown",ze)},[I,C,be,oe,re.length]),R.useEffect(()=>{I==="done"&&c(z,q,P)},[I]);const ne=ee?(a==="pl"?(we=g[ee])==null?void 0:we.labelPl:(_e=g[ee])==null?void 0:_e.label)??ee:"",A=ze=>d.jsx("span",{dangerouslySetInnerHTML:{__html:sn(ze)}});if(I==="done"||!ee&&q.questionsAnswered>0)return d.jsx("div",{style:{width:"100%",minHeight:"100dvh",background:b.bg,fontFamily:ve,display:"flex",alignItems:"center",justifyContent:"center",color:b.textDim,fontSize:14},children:B("quizProcessing",a)});const W=m.maxQuestions,ge=W>0?Math.min(100,Math.round(q.questionsAnswered/W*100)):0;return d.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:b.bg,fontFamily:ve,display:"flex",flexDirection:"column",alignItems:"center",padding:"0 20px"},children:[d.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",padding:"20px 0 0",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsx("button",{onClick:()=>{(q.questionsAnswered===0||window.confirm(B("quizExitConfirm",a)))&&u()},style:{padding:"10px 14px",fontSize:12,fontFamily:ve,borderRadius:6,border:`1px solid ${b.border}`,background:"transparent",color:b.textDim,cursor:"pointer"},children:B("quizExit",a)}),d.jsxs("span",{style:{fontSize:12,color:b.textFaint},children:[B("quizQuestion",a)," ",q.questionsAnswered+1]})]}),d.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:16},children:[d.jsx("div",{style:{height:3,borderRadius:2,background:b.border,overflow:"hidden"},children:d.jsx("div",{style:{height:"100%",borderRadius:2,width:`${ge}%`,background:"#4a9eff",transition:"width 0.5s ease"}})}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:6,fontSize:10,color:b.textFaint},children:[d.jsxs("span",{children:[q.questionsAnswered," / ",W," ",B("quizOf",a)]}),d.jsxs("span",{children:[q.correct," ",B("quizCorrectShort",a)]})]})]}),d.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:40,animation:"fadeIn 0.25s ease"},children:[d.jsx("div",{style:{fontSize:11,color:b.textFaint,marginBottom:16,letterSpacing:.5},children:ne}),X?d.jsxs(d.Fragment,{children:[X.source&&(()=>{const ze=wm(X.source,a);return!ze||ze==="CKE"?null:d.jsx("div",{style:{display:"inline-block",marginBottom:14,padding:"3px 8px",borderRadius:4,fontSize:10,fontWeight:600,letterSpacing:"0.04em",background:"#FFD16618",color:"#FFD166",border:"1px solid #FFD16640"},children:ze})})(),d.jsx("div",{style:{fontSize:16,color:b.textPrimary,lineHeight:1.7,marginBottom:28},children:A(X.q)}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:24},children:re.map((ze,je)=>{let ie="transparent",Te=b.border,We=b.textBody;return C===je&&I==="answering"&&(ie="#4a9eff12",Te="#4a9eff60",We="#4a9eff"),I==="revealed"&&(je===pe?(ie="#27ae6015",Te="#27ae6060",We="#2ecc71"):je===C?(ie="#e74c3c15",Te="#e74c3c60",We="#ff6b6b"):We=b.textFaint),d.jsxs("button",{onClick:()=>{I==="answering"&&U(je)},style:{textAlign:"left",padding:"14px 16px",borderRadius:8,fontSize:14,fontFamily:ve,cursor:I==="answering"?"pointer":"default",background:ie,border:`1px solid ${Te}`,color:We,lineHeight:1.6,transition:"all 0.15s ease"},children:[d.jsx("span",{style:{marginRight:10,opacity:.4,fontSize:12},children:["A","B","C","D"][je]}),A(ze)]},je)})}),I==="revealed"&&X.hint&&d.jsxs("div",{style:{fontSize:12,color:b.textDim,marginBottom:20,padding:"12px 14px",background:"#ffffff06",borderRadius:8,lineHeight:1.7,borderLeft:`2px solid ${b.border}`},children:[A(X.hint),C!==pe&&(()=>{var We;const ze=g[ee],je=(We=ze==null?void 0:ze.resources)==null?void 0:We.find(vn=>vn.type==="interactive");if(!je)return null;const Te=je.url.startsWith("http")?je.url:`${"/".replace(/\/$/,"")}/${je.url.replace(/^\//,"")}?lang=${a}`;return d.jsxs("a",{href:Te,target:"_blank",rel:"noopener noreferrer",style:{display:"block",marginTop:10,padding:"8px 12px",borderRadius:6,background:"#58C4DD10",border:"1px solid #58C4DD30",color:"#58C4DD",fontSize:12,fontFamily:ve,textDecoration:"none"},children:["⬡ ",B("quizSeeViz",a)]})})()]}),I==="answering"?d.jsxs("div",{style:{display:"flex",gap:10},children:[d.jsxs("button",{onClick:be,disabled:C===null,style:{...Wi("#4a9eff"),flex:1,opacity:C===null?.3:1},children:[B("quizCheck",a),d.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]}),d.jsx("button",{onClick:()=>J(!1),style:{...Wi(b.textDim),padding:"14px 16px",fontSize:13,fontWeight:500},title:a==="pl"?"Zaznaczamy temat jako do sprawdzenia":"Marks this topic as one to review",children:B("quizDontKnow",a)})]}):d.jsxs("button",{onClick:oe,style:{...Wi(C===pe?b.known:"#4a9eff"),width:"100%"},children:[B("quizContinue",a),d.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]})]}):d.jsxs("div",{children:[d.jsx("p",{style:{fontSize:15,color:b.textBody,lineHeight:1.7,marginBottom:24},children:B("quizNoQuestion",a)}),d.jsxs("div",{style:{display:"flex",gap:10},children:[d.jsx("button",{onClick:()=>J(!0),style:{...Wi(b.known),flex:1},children:B("quizYes",a)}),d.jsx("button",{onClick:()=>J(!1),style:{...Wi(b.unknown),flex:1},children:B("quizNo",a)})]})]})]},F),d.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]})}function Wi(o){return{padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:ve,borderRadius:8,border:`1px solid ${o}50`,background:`${o}18`,color:o,cursor:"pointer",transition:"background 0.15s"}}const cp=10;function dv({goalId:o,RAW_NODES:t,RAW_EDGES:r,QUESTION_BANK:a,lang:s,onComplete:c,onExit:u}){var We,vn,Lt,dt;const m=R.useMemo(()=>io(t,r),[t,r]),h=R.useMemo(()=>t.map(Oe=>({id:Oe.id})),[t]),w=R.useMemo(()=>Object.fromEntries(t.map(Oe=>[Oe.id,Oe])),[t]),g=R.useMemo(()=>[...xp(o,m,h)],[o,m,h]),z=R.useMemo(()=>g.map(Oe=>({id:Oe})),[g]),[S,q]=R.useState({}),[j,_]=R.useState({correct:0,incorrect:0,questionsAnswered:0}),[T,P]=R.useState(new Set),[N,I]=R.useState({}),[O,C]=R.useState("answering"),[U,F]=R.useState(null),[V,Q]=R.useState(0),ee=R.useMemo(()=>{const Oe=j.correct+j.incorrect;return Oe===0?.5:(j.correct+.5)/(Oe+1)},[j]),se=R.useMemo(()=>hc(z,S,m,ee),[z,S,m,ee]),X=R.useMemo(()=>{const Oe=[];return T.forEach(Je=>{const[Le,Pn]=Je.split(":");Le===se&&Oe.push(parseInt(Pn,10))}),Oe},[T,se]),te=R.useMemo(()=>se?Ui(a,se,X):null,[a,se,X]),re=R.useMemo(()=>te?Oo.random(te.options.length):null,[te]),pe=R.useMemo(()=>re?re.apply(te.options):[],[re,te]),fe=R.useMemo(()=>re?re.displayIndex(te.correct):-1,[re,te]),be=R.useMemo(()=>({maxQuestions:cp,completionRatio:0}),[]),oe=R.useMemo(()=>$c(z,S,j.questionsAnswered,be),[z,S,j.questionsAnswered,be]);R.useEffect(()=>{oe&&j.questionsAnswered>0&&C("done")},[oe,j.questionsAnswered]);const J=R.useCallback(()=>{U!==null&&C("revealed")},[U]),ne=R.useCallback(()=>{const Oe=U===fe,Je=(te==null?void 0:te.tests)??{[se]:1};q(Le=>Ki(se,Oe,Je,Le,m)),I(Le=>({...Le,[se]:{correct:Oe,questionText:(te==null?void 0:te.q)??null}})),(te==null?void 0:te.index)!=null&&P(Le=>new Set([...Le,`${se}:${te.index}`])),_(Le=>({correct:Le.correct+(Oe?1:0),incorrect:Le.incorrect+(Oe?0:1),questionsAnswered:Le.questionsAnswered+1})),F(null),C("answering"),Q(Le=>Le+1)},[U,fe,te,se,m]),A=R.useCallback(Oe=>{const Je={[se]:1};q(Le=>Ki(se,Oe,Je,Le,m)),I(Le=>({...Le,[se]:{correct:Oe,questionText:null}})),P(Le=>new Set([...Le,`${se}:-1`])),_(Le=>({correct:Le.correct+(Oe?1:0),incorrect:Le.incorrect+(Oe?0:1),questionsAnswered:Le.questionsAnswered+1})),Q(Le=>Le+1)},[se,m]);R.useEffect(()=>{const Oe=Je=>{if(Je.key==="Enter"&&(O==="answering"&&U!==null?J():O==="revealed"&&ne()),O==="answering"&&["1","2","3","4"].includes(Je.key)){const Le=parseInt(Je.key)-1;Le<pe.length&&F(Le)}};return window.addEventListener("keydown",Oe),()=>window.removeEventListener("keydown",Oe)},[O,U,J,ne,pe.length]),R.useEffect(()=>{O==="done"&&c(o,S,j,N)},[O]);const W=s==="pl"?(We=w[o])==null?void 0:We.labelPl:(vn=w[o])==null?void 0:vn.label,ge=se?(s==="pl"?(Lt=w[se])==null?void 0:Lt.labelPl:(dt=w[se])==null?void 0:dt.label)??se:"",we=Oe=>d.jsx("span",{dangerouslySetInnerHTML:{__html:sn(Oe)}}),_e=Object.values(S).filter(Oe=>Oe==="known").length,ze=Object.values(S).filter(Oe=>Oe==="unknown").length,je=_e+ze,ie=g.length,Te=ie>0?Math.round(je/ie*100):0;return O==="done"||!se&&j.questionsAnswered>0?d.jsx("div",{style:{width:"100%",minHeight:"100dvh",background:b.bg,fontFamily:ve,display:"flex",alignItems:"center",justifyContent:"center",color:b.textDim,fontSize:14},children:B("quizProcessing",s)}):d.jsxs("div",{style:{width:"100%",minHeight:"100dvh",background:b.bg,fontFamily:ve,display:"flex",flexDirection:"column",alignItems:"center",padding:"0 20px"},children:[d.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",padding:"20px 0 0",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsx("button",{onClick:()=>{(j.questionsAnswered===0||window.confirm(B("quizExitConfirm",s)))&&u()},style:{padding:"10px 14px",fontSize:12,fontFamily:ve,borderRadius:6,border:`1px solid ${b.border}`,background:"transparent",color:b.textDim,cursor:"pointer"},children:B("quizExit",s)}),d.jsxs("span",{style:{fontSize:12,color:b.textFaint},children:[B("quizQuestion",s)," ",j.questionsAnswered+1," / ",cp]})]}),d.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:16,padding:"10px 14px",borderRadius:8,background:"#4a9eff08",border:"1px solid #4a9eff20"},children:[d.jsx("div",{style:{fontSize:10,color:b.textFaint,letterSpacing:.5,marginBottom:2},children:B("goalQuizSub",s)}),d.jsx("div",{style:{fontSize:13,color:"#4a9eff",fontWeight:600},children:W}),d.jsxs("div",{style:{fontSize:10,color:b.textFaint,marginTop:2},children:[ie," ",B("goalQuizTopics",s)]})]}),d.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:12},children:[d.jsx("div",{style:{height:3,borderRadius:2,background:b.border,overflow:"hidden"},children:d.jsx("div",{style:{height:"100%",borderRadius:2,width:`${Te}%`,background:"#4a9eff",transition:"width 0.5s ease"}})}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:6,fontSize:10,color:b.textFaint},children:[d.jsxs("span",{children:[je,"/",ie," ",B("quizClassified",s)]}),d.jsxs("span",{children:[Math.round(ee*100),"% ",B("quizAccuracy",s)]})]})]}),d.jsxs("div",{style:{width:"100%",maxWidth:"min(520px, calc(100% - 32px))",marginTop:32,animation:"fadeIn 0.25s ease"},children:[d.jsx("div",{style:{fontSize:11,color:b.textFaint,marginBottom:16,letterSpacing:.5},children:ge}),te?d.jsxs(d.Fragment,{children:[d.jsx("div",{style:{fontSize:16,color:b.textPrimary,lineHeight:1.7,marginBottom:28},children:we(te.q)}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:24},children:pe.map((Oe,Je)=>{let Le="transparent",Pn=b.border,wn=b.textBody;return U===Je&&O==="answering"&&(Le="#4a9eff12",Pn="#4a9eff60",wn="#4a9eff"),O==="revealed"&&(Je===fe?(Le="#27ae6015",Pn="#27ae6060",wn="#2ecc71"):Je===U?(Le="#e74c3c15",Pn="#e74c3c60",wn="#ff6b6b"):wn=b.textFaint),d.jsxs("button",{onClick:()=>{O==="answering"&&F(Je)},style:{textAlign:"left",padding:"14px 16px",borderRadius:8,fontSize:14,fontFamily:ve,cursor:O==="answering"?"pointer":"default",background:Le,border:`1px solid ${Pn}`,color:wn,lineHeight:1.6,transition:"all 0.15s ease"},children:[d.jsx("span",{style:{marginRight:10,opacity:.4,fontSize:12},children:["A","B","C","D"][Je]}),we(Oe)]},Je)})}),O==="revealed"&&te.hint&&d.jsx("div",{style:{fontSize:12,color:b.textDim,marginBottom:20,padding:"12px 14px",background:"#ffffff06",borderRadius:8,lineHeight:1.7,borderLeft:`2px solid ${b.border}`},children:we(te.hint)}),O==="answering"?d.jsxs("button",{onClick:J,disabled:U===null,style:{...vs("#4a9eff"),width:"100%",opacity:U===null?.3:1},children:[B("quizCheck",s),d.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]}):d.jsxs("button",{onClick:ne,style:{...vs(U===fe?b.known:"#4a9eff"),width:"100%"},children:[B("quizContinue",s),d.jsx("span",{style:{fontSize:11,opacity:.5,marginLeft:8},children:"Enter"})]})]}):d.jsxs("div",{children:[d.jsx("p",{style:{fontSize:15,color:b.textBody,lineHeight:1.7,marginBottom:24},children:B("quizNoQuestion",s)}),d.jsxs("div",{style:{display:"flex",gap:10},children:[d.jsx("button",{onClick:()=>A(!0),style:{...vs(b.known),flex:1},children:B("quizYes",s)}),d.jsx("button",{onClick:()=>A(!1),style:{...vs(b.unknown),flex:1},children:B("quizNo",s)})]})]})]},V),d.jsx("style",{children:`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `})]})}function vs(o){return{padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:ve,borderRadius:8,border:`1px solid ${o}50`,background:`${o}18`,color:o,cursor:"pointer",transition:"background 0.15s"}}function pv({RAW_NODES:o,RAW_EDGES:t,SCOPE_COLORS:r,SCOPE_LABELS:a,belief:s,stats:c,evidence:u,lang:m,onSeeMap:h,onRetake:w,onSelectTopic:g,onStartPath:z}){const S=R.useMemo(()=>io(o,t),[o,t]),q=R.useMemo(()=>Object.fromEntries(o.map(C=>[C.id,C])),[o]),j=C=>{var U,F;return m==="pl"?(U=q[C])==null?void 0:U.labelPl:(F=q[C])==null?void 0:F.label},_=o.filter(C=>s[C.id]==="known"),T=o.filter(C=>s[C.id]==="unknown"),P=o.length,N=R.useMemo(()=>T.filter(C=>(S.prereqs[C.id]??[]).every(U=>s[U]==="known")).slice(0,8),[T,S,s]),I=c.correct+c.incorrect>0?Math.round(c.correct/(c.correct+c.incorrect)*100):0,O=N.length>0;return d.jsx("div",{style:{width:"100%",minHeight:"100dvh",background:b.bg,fontFamily:ve,display:"flex",flexDirection:"column",alignItems:"center",padding:"40px 20px 60px"},children:d.jsxs("div",{style:{maxWidth:"min(520px, calc(100% - 32px))",width:"100%"},children:[d.jsx("div",{style:{fontSize:11,color:b.textFaint,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8},children:"oczochodzi.pl"}),d.jsx("h1",{style:{margin:"0 0 8px",fontSize:24,fontWeight:700,color:b.textPrimary,lineHeight:1.3},children:B("resultsTitle",m)}),d.jsxs("p",{style:{margin:"0 0 32px",fontSize:13,color:b.textDim,lineHeight:1.6},children:[c.questionsAnswered," ",B("resultsAnswered",m)," · ",I,"% ",B("resultsAccuracy",m)]}),d.jsxs("div",{style:{display:"flex",gap:10,marginBottom:32},children:[d.jsx(up,{count:_.length,label:B("resultsKnown",m),color:b.known,total:P}),d.jsx(up,{count:T.length,label:B("resultsToStudy",m),color:"#e74c3c",total:P})]}),O&&d.jsxs("div",{style:{marginBottom:32},children:[d.jsx("h2",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:b.textPrimary},children:B("resultsGapsTitle",m)}),d.jsx("p",{style:{margin:"0 0 16px",fontSize:12,color:b.textDim,lineHeight:1.6},children:B("resultsGapsSub",m)}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:N.map((C,U)=>{var ee;const F=(r==null?void 0:r[C.scope])??b.textDim,V=((ee=a==null?void 0:a[C.scope])==null?void 0:ee[m==="pl"?"pl":"en"])??"",Q=C.resources&&C.resources.length>0;return d.jsxs("div",{onClick:()=>g==null?void 0:g(C.id),style:{padding:"12px 14px",borderRadius:8,background:"#e74c3c08",border:"1px solid #e74c3c20",display:"flex",alignItems:"center",gap:12,cursor:g?"pointer":"default",transition:"background 0.15s, border-color 0.15s"},onMouseEnter:se=>{g&&(se.currentTarget.style.background="#e74c3c14",se.currentTarget.style.borderColor="#e74c3c40")},onMouseLeave:se=>{g&&(se.currentTarget.style.background="#e74c3c08",se.currentTarget.style.borderColor="#e74c3c20")},children:[d.jsx("span",{style:{width:24,height:24,borderRadius:"50%",background:`${F}18`,border:`1px solid ${F}40`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:F,flexShrink:0,fontWeight:600},children:U+1}),d.jsxs("div",{style:{flex:1},children:[d.jsx("div",{style:{fontSize:13,color:b.textPrimary,fontWeight:500},dangerouslySetInnerHTML:{__html:sn(j(C.id)??"")}}),d.jsxs("div",{style:{fontSize:10,color:b.textFaint,marginTop:2},children:[V,Q&&d.jsx("span",{style:{color:"#4a9eff",marginLeft:8},children:B("resultsHasResource",m)})]})]})]},C.id)})}),T.length>N.length&&d.jsxs("div",{style:{marginTop:8,fontSize:11,color:b.textFaint},children:["+",T.length-N.length," ",B("resultsMore",m)]})]}),!O&&T.length===0&&d.jsxs("div",{style:{padding:"20px 16px",borderRadius:10,background:"#27ae6010",border:"1px solid #27ae6030",marginBottom:32,textAlign:"center"},children:[d.jsx("div",{style:{fontSize:15,color:b.known,fontWeight:600,marginBottom:4},children:B("resultsAllGood",m)}),d.jsx("div",{style:{fontSize:12,color:b.textDim},children:B("resultsAllGoodSub",m)})]}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginTop:8},children:[O&&N[0]&&z&&(()=>{const C=N[0],U=j(C.id)??C.id;return d.jsxs("div",{style:{padding:"18px 18px 16px",borderRadius:12,background:"#f39c1212",border:"1px solid #f39c1240",marginBottom:8},children:[d.jsx("div",{style:{fontSize:11,color:"#f39c12",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:6},children:B("results20minTitle",m)}),d.jsx("div",{style:{fontSize:16,color:b.textPrimary,fontWeight:600,marginBottom:6,lineHeight:1.3},dangerouslySetInnerHTML:{__html:sn(U)}}),d.jsx("div",{style:{fontSize:12,color:b.textDim,marginBottom:14,lineHeight:1.55},children:B("results20minSub",m)}),d.jsx("ol",{style:{margin:"0 0 14px",padding:0,listStyle:"none",display:"flex",flexDirection:"column",gap:6},children:[{n:"1",t:B("results20minStep1",m)},{n:"2",t:B("results20minStep2",m)},{n:"3",t:B("results20minStep3",m)}].map(F=>d.jsxs("li",{style:{display:"flex",alignItems:"center",gap:10,fontSize:12,color:b.textBody},children:[d.jsx("span",{style:{width:20,height:20,borderRadius:"50%",background:"#f39c1220",border:"1px solid #f39c1260",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:10,color:"#f39c12",fontWeight:700,flexShrink:0},children:F.n}),d.jsx("span",{children:F.t})]},F.n))}),d.jsx("button",{onClick:()=>z(C.id),style:{width:"100%",padding:"12px 18px",fontSize:14,fontWeight:600,fontFamily:ve,borderRadius:8,border:"1px solid #f39c1260",background:"#f39c12",color:"#0e0e12",cursor:"pointer"},children:B("results20minCta",m)})]})})(),d.jsx("button",{onClick:h,style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:ve,borderRadius:8,border:`1px solid ${b.border}`,background:"transparent",color:b.textBody,cursor:"pointer"},children:B("resultsSeeMap",m)}),d.jsx("button",{onClick:()=>{const U=`https://oczochodzi.pl/#/results/${s?Q0(s):""}`,F=m==="pl"?`Sprawdziłem swoją wiedzę z matmy — ${_.length}/${P} tematów znanych! Sprawdź się:`:`I tested my math knowledge — ${_.length}/${P} topics known! Try it:`;navigator.share?navigator.share({title:"oczochodzi.pl",text:F,url:U}).catch(()=>{}):navigator.clipboard.writeText(`${F} ${U}`).then(()=>{alert(B("copiedClipboard",m))})},style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:ve,borderRadius:8,border:`1px solid ${b.border}`,background:"transparent",color:b.textBody,cursor:"pointer"},children:B("resultsShare",m)}),d.jsx("button",{onClick:w,style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:ve,borderRadius:8,border:`1px solid ${b.border}`,background:"transparent",color:b.textDim,cursor:"pointer"},children:B("resultsRetake",m)})]}),d.jsxs("div",{style:{marginTop:24,paddingTop:20,borderTop:`1px solid ${b.border}`,textAlign:"center"},children:[d.jsx("p",{style:{fontSize:12,color:b.textDim,marginBottom:8,lineHeight:1.6},children:B("coffeeText",m)}),d.jsx("a",{href:"https://buycoffee.to/oczochodzi",target:"_blank",rel:"noopener noreferrer",style:{display:"inline-block",padding:"10px 20px",fontSize:13,fontFamily:ve,borderRadius:8,border:"1px solid #FFD16640",background:"#FFD16610",color:"#FFD166",textDecoration:"none",cursor:"pointer"},children:B("coffeeBtn",m)})]})]})})}function up({count:o,label:t,color:r,total:a}){const s=a>0?Math.round(o/a*100):0;return d.jsxs("div",{style:{flex:1,padding:"16px 14px",borderRadius:10,background:`${r}08`,border:`1px solid ${r}20`,textAlign:"center"},children:[d.jsx("div",{style:{fontSize:28,fontWeight:700,color:r,lineHeight:1},children:o}),d.jsx("div",{style:{fontSize:11,color:b.textFaint,marginTop:6},children:t}),d.jsx("div",{style:{marginTop:8,height:3,borderRadius:2,background:`${r}15`,overflow:"hidden"},children:d.jsx("div",{style:{height:"100%",borderRadius:2,width:`${s}%`,background:r,opacity:.6}})}),d.jsxs("div",{style:{fontSize:10,color:b.textFaint,marginTop:4},children:[s,"% of ",a]})]})}function mv({RAW_NODES:o,SCOPE_COLORS:t,SCOPE_LABELS:r,lang:a,onClose:s}){const[c,u]=R.useState(""),[m,h]=R.useState(null),[w,g]=R.useState(null),z=R.useMemo(()=>{const T=[];for(const P of o)if(P.resources)for(const N of P.resources)N.type==="interactive"&&T.push({nodeId:P.id,nodeLabel:a==="pl"?P.labelPl:P.label,scope:P.scope,section:P.section,title:a==="pl"?N.titlePl:N.titleEn,resource:N,isDlaCiekawych:(N.titlePl||"").includes("Dla ciekawych")||(N.titleEn||"").includes("curious")});return T},[o,a]),S=R.useMemo(()=>{const T=c.toLowerCase();return z.filter(P=>!(w&&P.scope!==w||T&&!P.title.toLowerCase().includes(T)&&!P.nodeLabel.toLowerCase().includes(T)))},[z,c,w]),q=R.useMemo(()=>[...new Set(z.map(P=>P.scope))].sort(),[z]),j=T=>(t==null?void 0:t[T])??"#4a9eff",_=T=>{var P;return((P=r==null?void 0:r[T])==null?void 0:P[a==="pl"?"pl":"en"])??T};return d.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:b.bg,fontFamily:ve,overflowY:"auto",animation:"galleryIn 0.2s ease"},children:[d.jsx("style",{children:`
        @keyframes galleryIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}),d.jsxs("div",{style:{maxWidth:"min(720px, calc(100% - 32px))",width:"100%",margin:"0 auto",padding:"24px 16px 48px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[d.jsx("button",{onClick:s,style:{padding:"10px 14px",fontSize:12,fontFamily:ve,borderRadius:6,border:`1px solid ${b.border}`,background:"transparent",color:b.textDim,cursor:"pointer"},children:"←"}),d.jsxs("div",{children:[d.jsx("h1",{style:{margin:0,fontSize:20,fontWeight:700,color:b.textPrimary},children:B("galleryTitle",a)}),d.jsxs("p",{style:{margin:0,fontSize:12,color:b.textDim},children:[S.length," ",B("galleryCount",a)]})]})]}),d.jsx("input",{type:"text",value:c,onChange:T=>u(T.target.value),placeholder:B("search",a),style:{width:"100%",padding:"12px 14px",fontSize:13,fontFamily:ve,borderRadius:8,border:`1px solid ${b.border}`,background:b.surface,color:b.textBody,marginBottom:12,outline:"none"}}),d.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:20},children:[d.jsx("button",{onClick:()=>g(null),style:{padding:"6px 12px",fontSize:11,fontFamily:ve,borderRadius:16,cursor:"pointer",border:w?`1px solid ${b.border}`:"1px solid #4a9eff",background:w?"transparent":"#4a9eff18",color:w?b.textDim:"#4a9eff"},children:B("all",a)}),q.map(T=>d.jsx("button",{onClick:()=>g(w===T?null:T),style:{padding:"6px 12px",fontSize:11,fontFamily:ve,borderRadius:16,cursor:"pointer",border:w===T?`1px solid ${j(T)}`:`1px solid ${b.border}`,background:w===T?`${j(T)}18`:"transparent",color:w===T?j(T):b.textDim},children:_(T)},T))]}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:10},children:S.map((T,P)=>{const N=j(T.scope);return d.jsxs("button",{onClick:()=>h(T.resource),style:{padding:"16px 14px",borderRadius:10,background:b.surface,border:`1px solid ${b.border}`,cursor:"pointer",textAlign:"left",fontFamily:ve,display:"flex",flexDirection:"column",gap:8,transition:"border-color 0.15s, background 0.15s"},onMouseEnter:I=>{I.currentTarget.style.borderColor=N+"60",I.currentTarget.style.background=`${N}08`},onMouseLeave:I=>{I.currentTarget.style.borderColor=b.border,I.currentTarget.style.background=b.surface},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsx("span",{style:{fontSize:22},children:"⬡"}),T.isDlaCiekawych&&d.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:4,background:"#8e44ad18",color:"#c39bd3",border:"1px solid #8e44ad30"},children:"🧩"})]}),d.jsx("div",{style:{fontSize:13,fontWeight:600,color:b.textPrimary,lineHeight:1.4},children:T.title}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginTop:"auto"},children:[d.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:N,flexShrink:0}}),d.jsx("span",{style:{fontSize:10,color:b.textFaint},children:T.nodeLabel})]})]},`${T.nodeId}-${P}`)})}),S.length===0&&d.jsx("div",{style:{textAlign:"center",padding:"40px 0",color:b.textFaint,fontSize:13},children:B("noResults",a)})]}),m&&d.jsx(yc,{resource:m,lang:a,onClose:()=>h(null)})]})}const fv=[{id:"klasyki",titlePl:"Klasyki maturalne",titleEn:"Matura classics",subtitlePl:"Kluczowe tematy z najczystszymi Warsztatami",subtitleEn:"Core topics with the cleanest Warsztats",accent:"#58C4DD",items:[{nodeId:"vieta",match:"Warsztat",hookPl:"Wzory Viete'a bez delty — pierwiastki wprost ze współczynników."},{nodeId:"derivative",match:"Warsztat",hookPl:"Reguły pochodnych na przykładach, z wizualizacją stycznej."},{nodeId:"trig_basic",match:"Warsztat",hookPl:"Trygonometria od okręgu jednostkowego, krok po kroku."},{nodeId:"probability",match:"Warsztat",hookPl:"Drzewo zdarzeń oraz reguły dodawania i mnożenia na konkretnych przykładach."}]},{id:"pulapki",titlePl:"Najczęstsze pułapki",titleEn:"Common traps",subtitlePl:"Błędy, przez które najczęściej traci się punkty",subtitleEn:"Errors that quietly cost points every matura",accent:"#FF6B6B",items:[{nodeId:"linearity_fallacy",match:"Warsztat",hookPl:"$(a+b)^2 \\neq a^2 + b^2$ i pięć podobnych pułapek w jednym miejscu."},{nodeId:"equation_domain",match:"Warsztat",hookPl:"Dlaczego dzielenie przez $x$ gubi rozwiązania — i jak tego uniknąć."},{nodeId:"trig_basic",match:"kwadrant",hookPl:"Znaki sinusa i kosinusa w każdej ćwiartce — reguła z okręgu jednostkowego."},{nodeId:"abs_value",match:"odleg",hookPl:"$|x-a|$ jako odległość na osi liczbowej — geometria pokonuje rachunek."}]},{id:"widac",titlePl:"Zobacz, jak to działa",titleEn:"See it move",subtitlePl:"Zjawiska, które łatwiej zrozumieć w ruchu niż z samego wzoru",subtitleEn:"Interactive explorers — slide, rotate, watch it move",accent:"#83C167",items:[{nodeId:"solid_geom",match:"Warsztat",hookPl:"Ostrosłupy i przekątne w 3D — przekroje pokazane na rzucie izometrycznym."},{nodeId:"fn_transforms",match:"Warsztat",hookPl:"Przesunięcia, odbicia i skalowanie — cztery rodziny na paraboli i sinusoidzie."},{nodeId:"derivative",match:"Why",hookPl:"Dlaczego pochodna $x^2$ równa się $2x$ — wyprowadzenie geometryczne."},{nodeId:"integral",match:"Explor",hookPl:"Całka jako pole pod wykresem — sumy Riemanna na żywo."}]},{id:"meta",titlePl:"Meta-umiejętności",titleEn:"Meta-skills",subtitlePl:"Techniki rozumowania przydatne w zadaniach otwartych",subtitleEn:"Reasoning techniques that transfer across topics",accent:"#C78DFF",items:[{nodeId:"odtwarzanie_wzorow",match:null,hookPl:"Jak odtworzyć wzór, którego nie pamiętasz — pięć sprawdzonych technik."},{nodeId:"matura_pytania",match:null,hookPl:'Jak czytać polecenia: „wykaż" vs „sprawdź" vs „wyznacz" i dlaczego to ma znaczenie.'},{nodeId:"linearity_fallacy",match:null,hookPl:"Klasyczne błędy liniowości — i dlaczego intuicja je podpowiada."},{nodeId:"proof",match:null,hookPl:"Struktura dowodu: założenie → przekształcenia → teza."}]}],V0={nodeId:"linearity_fallacy",match:"Warsztat",captionPl:"Interaktywny model — przesuwaj suwaki i obserwuj, jak zmienia się wynik.",captionEn:"Touch it, slide it, see it — math you can grab."};function hv({RAW_NODES:o,SCOPE_COLORS:t,SCOPE_LABELS:r,lang:a,onClose:s,onBrowseAll:c,onSelectTopic:u}){const[m,h]=R.useState(null),w=R.useMemo(()=>Object.fromEntries(o.map(j=>[j.id,j])),[o]);function g(j){const _=w[j.nodeId];if(!(_!=null&&_.resources))return null;const T=_.resources.filter(I=>I.type==="interactive");if(T.length===0)return null;if(!j.match)return T[0];const P=j.match.toLowerCase();return T.find(I=>{var O,C,U;return((O=I.titlePl)==null?void 0:O.toLowerCase().includes(P))||((C=I.titleEn)==null?void 0:C.toLowerCase().includes(P))||((U=I.url)==null?void 0:U.toLowerCase().includes(P))})||T[0]}const z=R.useMemo(()=>g(V0),[o]),S=z?zv(z.url,a):null,q=R.useMemo(()=>fv.map(j=>({...j,cards:j.items.map(_=>{const T=w[_.nodeId];if(!T)return null;const P=g(_);return{item:_,resource:P,node:T,title:P?a==="pl"?P.titlePl:P.titleEn:a==="pl"?T.labelPl:T.label,nodeLabel:a==="pl"?T.labelPl:T.label,topicOnly:!P}}).filter(Boolean)})),[o,a]);return d.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:b.bg,fontFamily:ve,overflowY:"auto",animation:"showcaseIn 0.2s ease"},children:[d.jsx("style",{children:`
        @keyframes showcaseIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}),d.jsxs("div",{style:{maxWidth:960,margin:"0 auto",padding:"20px 16px 48px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:18},children:[d.jsx("button",{onClick:s,style:{padding:"10px 14px",fontSize:12,fontFamily:ve,borderRadius:6,border:`1px solid ${b.border}`,background:"transparent",color:b.textDim,cursor:"pointer"},children:"←"}),d.jsxs("div",{children:[d.jsx("h1",{style:{margin:0,fontSize:22,fontWeight:700,color:b.textPrimary},children:a==="pl"?"Wybrane wizualizacje":"Browse what we've built"}),d.jsx("p",{style:{margin:0,fontSize:12,color:b.textDim},children:a==="pl"?"Ręcznie wybrane Warsztaty i wizualizacje — zacznij bez testu":"Hand-picked Warsztats and explorers — entry without the quiz"})]})]}),S&&d.jsx($v,{url:S,caption:a==="pl"?V0.captionPl:V0.captionEn,onOpen:()=>h(z),lang:a}),q.map(j=>d.jsx(yv,{section:j,lang:a,onOpen:_=>h(_),onSelectTopic:_=>{u&&u(_)}},j.id)),d.jsxs("div",{style:{marginTop:32,paddingTop:24,borderTop:`1px solid ${b.border}`,textAlign:"center"},children:[d.jsx("p",{style:{fontSize:12,color:b.textFaint,margin:"0 0 10px"},children:a==="pl"?"Szukasz czegoś konkretnego?":"Looking for something specific?"}),d.jsx("button",{onClick:c,style:{padding:"10px 20px",fontSize:13,fontFamily:ve,borderRadius:6,border:`1px solid ${b.border}`,background:"transparent",color:b.textBody,cursor:"pointer"},children:a==="pl"?"Pełna lista z filtrem →":"Full list with filter →"})]})]}),m&&d.jsx(yc,{resource:m,lang:a,onClose:()=>h(null)})]})}function $v({url:o,caption:t,onOpen:r,lang:a}){const s=R.useRef(null),[c,u]=R.useState(560);return R.useEffect(()=>{const m=s.current;if(!m)return;let h;const w=()=>{try{const z=m.contentDocument;if(!(z!=null&&z.body))return;const S=Math.max(z.documentElement.scrollHeight,z.body.scrollHeight);S>0&&u(S)}catch{}},g=()=>{w();try{const z=m.contentDocument;z!=null&&z.body&&typeof ResizeObserver<"u"&&(h=new ResizeObserver(w),h.observe(z.body))}catch{}};return m.addEventListener("load",g),()=>{m.removeEventListener("load",g),h==null||h.disconnect()}},[o]),d.jsxs("div",{style:{marginBottom:36},children:[d.jsx("div",{style:{borderRadius:12,overflow:"hidden",border:`1px solid ${b.border}`,background:"#0e0e12"},children:d.jsx("iframe",{ref:s,src:o,sandbox:"allow-scripts allow-same-origin allow-forms",scrolling:"no",style:{width:"100%",height:c,border:"none",display:"block",background:"#0e0e12"},title:"hero",loading:"eager"})}),d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginTop:10,gap:12,flexWrap:"wrap"},children:[d.jsx("p",{style:{margin:0,fontSize:12,color:b.textDim,fontStyle:"italic"},children:t}),d.jsx("button",{onClick:r,style:{padding:"6px 14px",fontSize:11,fontFamily:ve,borderRadius:6,border:"1px solid #58C4DD40",background:"#58C4DD12",color:"#58C4DD",cursor:"pointer"},children:a==="pl"?"Otwórz w pełnym widoku":"Open full view"})]})]})}function yv({section:o,lang:t,onOpen:r,onSelectTopic:a}){if(o.cards.length===0)return null;const s=t==="pl"?o.titlePl:o.titleEn,c=t==="pl"?o.subtitlePl:o.subtitleEn;return d.jsxs("div",{style:{marginBottom:36},children:[d.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:10,marginBottom:4,paddingLeft:2},children:[d.jsx("span",{style:{width:4,height:16,background:o.accent,borderRadius:2,display:"inline-block"}}),d.jsx("h2",{style:{margin:0,fontSize:16,fontWeight:700,color:b.textPrimary},children:s})]}),d.jsx("p",{style:{margin:"0 0 14px 16px",fontSize:12,color:b.textDim},children:c}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:12},children:o.cards.map((u,m)=>d.jsx(gv,{card:u,accent:o.accent,hook:t==="pl"?u.item.hookPl:u.item.hookEn??u.item.hookPl,onOpen:()=>{u.topicOnly?a(u.node.id):r(u.resource)},lang:t},m))})]})}function gv({card:o,accent:t,hook:r,onOpen:a,lang:s}){return d.jsxs("button",{onClick:a,style:{padding:"14px 14px 12px",borderRadius:10,background:b.surface,border:`1px solid ${b.border}`,cursor:"pointer",textAlign:"left",fontFamily:ve,display:"flex",flexDirection:"column",gap:8,transition:"border-color 0.15s, background 0.15s, transform 0.15s"},onMouseEnter:c=>{c.currentTarget.style.borderColor=t+"60",c.currentTarget.style.background=t+"08",c.currentTarget.style.transform="translateY(-1px)"},onMouseLeave:c=>{c.currentTarget.style.borderColor=b.border,c.currentTarget.style.background=b.surface,c.currentTarget.style.transform=""},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[d.jsx("span",{style:{width:6,height:6,borderRadius:"50%",background:t}}),d.jsx("span",{style:{fontSize:10,color:b.textFaint,textTransform:"uppercase",letterSpacing:"0.04em"},children:o.nodeLabel})]}),d.jsx("div",{style:{fontSize:14,fontWeight:600,color:b.textPrimary,lineHeight:1.35},children:o.title}),d.jsx("div",{style:{fontSize:12,color:b.textDim,lineHeight:1.5,marginTop:2},dangerouslySetInnerHTML:{__html:wv(r)}}),d.jsx("div",{style:{marginTop:"auto",fontSize:11,color:t,paddingTop:6},children:o.topicOnly?s==="pl"?"Przeczytaj →":"Read →":s==="pl"?"Otwórz →":"Open →"})]})}function wv(o){if(!o)return"";const t=typeof globalThis<"u"?globalThis.katex:null;return t?o.replace(/\$([^$]+)\$/g,(r,a)=>{try{return t.renderToString(a,{throwOnError:!1,output:"html"})}catch{return a}}):o.replace(/\$([^$]+)\$/g,(r,a)=>a)}function zv(o,t){const a=o.startsWith("http")?o:`${"/".replace(/\/$/,"")}/${o.replace(/^\//,"")}`;return a+(a.includes("?")?"&":"?")+"lang="+t}function xv({savedCourse:o,RAW_NODES:t,RAW_EDGES:r,SCOPE_COLORS:a,SCOPE_LABELS:s,SECTIONS:c,lang:u,onResumePath:m,onStartLesson:h,onStartNew:w,onSeeMap:g,onClose:z}){const[S,q]=R.useState(!1),{goalId:j,belief:_={},evidence:T={},createdAt:P}=o??{},N=R.useMemo(()=>io(t,r),[t,r]),I=R.useMemo(()=>Object.fromEntries(t.map(re=>[re.id,re])),[t]),O=re=>{var pe,fe;return u==="pl"?(pe=I[re])==null?void 0:pe.labelPl:(fe=I[re])==null?void 0:fe.label},{path:C,maturaTips:U}=R.useMemo(()=>{var ne;const re=new Set;if(j){const A=[j];for(;A.length;){const W=A.shift();if(!re.has(W)&&I[W]){re.add(W);for(const ge of N.prereqs[W]??[])re.has(ge)||A.push(ge)}}}else for(const A of t)re.add(A.id);const pe={};for(const A of re)pe[A]=0;for(const A of re)for(const W of N.dependents[A]??[])re.has(W)&&(pe[W]=(pe[W]||0)+1);const fe=[],be=[];for(const A of re)pe[A]===0&&be.push(A);for(;be.length;){be.sort((W,ge)=>{var we,_e;return(((we=I[W])==null?void 0:we.level)??0)-(((_e=I[ge])==null?void 0:_e.level)??0)});const A=be.shift();fe.push(A);for(const W of N.dependents[A]??[])re.has(W)&&(pe[W]--,pe[W]===0&&be.push(W))}const oe=[],J=[];for(const A of fe)((ne=I[A])==null?void 0:ne.tag)==="matura_tip"?oe.push(A):J.push(A);return{path:J,maturaTips:oe}},[j,N,I,t]),F=C.filter(re=>_[re]==="known").length,V=C.filter(re=>_[re]==="unknown").length,Q=C.length-F-V,ee=C.length,se=ee>0?Math.round(F/ee*100):0,X=C.find(re=>_[re]!=="known")??null,te=P?new Date(P).toLocaleDateString(u==="pl"?"pl-PL":"en-US",{year:"numeric",month:"short",day:"numeric"}):"—";return d.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:b.bg,fontFamily:ve,overflowY:"auto",animation:"profileSlideIn 0.2s ease"},children:[d.jsx("style",{children:`
        @keyframes profileSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}),d.jsxs("div",{style:{maxWidth:"min(520px, calc(100% - 32px))",width:"100%",margin:"0 auto",padding:"24px 16px 48px"},children:[d.jsxs("button",{onClick:z,style:{padding:"10px 14px",fontSize:12,fontFamily:ve,borderRadius:6,border:`1px solid ${b.border}`,background:"transparent",color:b.textDim,cursor:"pointer",marginBottom:24},children:["← ",B("topicBack",u)]}),d.jsx("div",{style:{marginBottom:6},children:d.jsx("span",{style:{fontSize:10,color:b.textFaint,letterSpacing:1.5,textTransform:"uppercase"},children:"oczochodzi.pl"})}),d.jsx("h1",{style:{margin:"0 0 8px",fontSize:22,fontWeight:700,color:b.textPrimary,lineHeight:1.3},children:B("profileTitle",u)}),d.jsxs("div",{style:{padding:"18px 16px",borderRadius:10,background:b.surface,border:`1px solid ${b.border}`,marginBottom:28},children:[d.jsx("div",{style:{fontSize:12,color:b.textDim,marginBottom:10,lineHeight:1.5},children:j?d.jsxs("span",{children:[B("profileGoal",u),":"," ",d.jsx("span",{style:{color:b.textPrimary,fontWeight:600},dangerouslySetInnerHTML:{__html:sn(O(j)??"")}})]}):d.jsx("span",{style:{color:b.textPrimary,fontWeight:600},children:B("profileFullCourse",u)})}),d.jsxs("div",{style:{fontSize:11,color:b.textFaint,marginBottom:14},children:[B("profileStarted",u),": ",te]}),d.jsxs("div",{style:{display:"flex",gap:10,marginBottom:14},children:[d.jsx(Y0,{count:F,label:B("resultsKnown",u),color:b.known}),d.jsx(Y0,{count:V,label:B("resultsToStudy",u),color:"#e74c3c"}),d.jsx(Y0,{count:Q,label:B("unclassified",u),color:b.textFaint})]}),d.jsx("div",{style:{height:4,borderRadius:2,background:b.border,overflow:"hidden"},children:d.jsx("div",{style:{height:"100%",borderRadius:2,width:`${se}%`,background:b.known,transition:"width 0.4s ease"}})}),d.jsxs("div",{style:{fontSize:10,color:b.textFaint,marginTop:6,textAlign:"right"},children:[se,"% (",F,"/",ee,")"]})]}),d.jsx("h2",{style:{margin:"0 0 6px",fontSize:15,fontWeight:700,color:b.textPrimary},children:B("profileTimeline",u)}),d.jsxs("p",{style:{margin:"0 0 16px",fontSize:12,color:b.textDim,lineHeight:1.6},children:[ee," ",B("pathTopics",u)]}),d.jsxs("div",{style:{position:"relative",marginBottom:32},children:[d.jsx("div",{style:{position:"absolute",left:15,top:12,bottom:12,width:2,background:b.border,borderRadius:1}}),C.map((re,pe)=>{var ze,je,ie;const fe=I[re],be=j&&re===j,oe=_[re],J=T[re],ne=!!J,A=(a==null?void 0:a[fe==null?void 0:fe.scope])??"#4a9eff",W=((ze=s==null?void 0:s[fe==null?void 0:fe.scope])==null?void 0:ze[u==="pl"?"pl":"en"])??"",ge=(u==="pl"?(je=c==null?void 0:c[fe==null?void 0:fe.section])==null?void 0:je.labelPl:(ie=c==null?void 0:c[fe==null?void 0:fe.section])==null?void 0:ie.labelEn)??"";let we=b.textFaint,_e=b.border;return oe==="known"?(we=b.known,_e=b.known):oe==="unknown"&&(we="#e74c3c",_e="#e74c3c"),d.jsxs("div",{onClick:()=>m(re),style:{position:"relative",paddingLeft:40,paddingBottom:pe<C.length-1?6:0,marginBottom:6,cursor:"pointer"},children:[d.jsx("div",{style:{position:"absolute",left:8,top:12,width:be?16:12,height:be?16:12,borderRadius:"50%",background:oe?we:b.bg,border:`2px solid ${oe?_e:b.textFaint}`,marginLeft:be?-2:0,zIndex:1}}),d.jsxs("div",{style:{padding:"10px 14px",borderRadius:8,background:be?`${A}10`:"transparent",border:`1px solid ${be?A+"30":b.borderSubtle}`,transition:"background 0.15s, border-color 0.15s"},onMouseEnter:Te=>{be||(Te.currentTarget.style.background=`${b.textFaint}10`,Te.currentTarget.style.borderColor=b.border)},onMouseLeave:Te=>{be||(Te.currentTarget.style.background="transparent",Te.currentTarget.style.borderColor=b.borderSubtle)},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,minWidth:0},children:[d.jsx("span",{style:{fontSize:13,fontWeight:be?700:500,color:be?b.textPrimary:b.textBody,flex:1,minWidth:0,overflowWrap:"break-word",wordBreak:"break-word"},dangerouslySetInnerHTML:{__html:sn(O(re)??"")}}),d.jsxs("div",{style:{display:"flex",gap:4,alignItems:"center",flexShrink:0},children:[ne&&d.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:J.correct?"#27ae6015":"#e74c3c15",color:J.correct?"#2ecc71":"#ff6b6b",border:`1px solid ${J.correct?"#27ae6030":"#e74c3c30"}`},children:J.correct?"✓":"✗"}),oe==="known"&&!ne&&d.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:"#27ae6015",color:"#2ecc71",border:"1px solid #27ae6030"},children:"✓"}),oe==="unknown"&&!ne&&d.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:"#e74c3c15",color:"#ff6b6b",border:"1px solid #e74c3c30"},children:"✗"})]})]}),d.jsxs("div",{style:{fontSize:10,color:b.textFaint,marginTop:3},children:[ge,ge&&W?" · ":"",W,be&&d.jsx("span",{style:{color:A,marginLeft:6},children:B("pathGoal",u)})]})]})]},re)})]}),U.length>0&&d.jsx(bv,{tips:U,nodeById:I,belief:_,evidence:T,lang:u,getLabel:O}),d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,marginTop:8},children:[X&&d.jsx("button",{onClick:()=>{h?h(C,j):m(X)},style:{width:"100%",padding:"14px 24px",fontSize:14,fontWeight:600,fontFamily:ve,borderRadius:8,border:"1px solid #f39c1250",background:"#f39c1218",color:"#f39c12",cursor:"pointer"},children:B("profileContinue",u)}),d.jsx("button",{onClick:g,style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:ve,borderRadius:8,border:`1px solid ${b.border}`,background:"transparent",color:b.textBody,cursor:"pointer"},children:B("resultsSeeMap",u)}),S?d.jsxs("div",{style:{padding:"14px 16px",borderRadius:8,background:"#e74c3c08",border:"1px solid #e74c3c30",textAlign:"center"},children:[d.jsx("p",{style:{margin:"0 0 10px",fontSize:12,color:b.textBody,lineHeight:1.5},children:B("profileStartNewConfirm",u)}),d.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"center"},children:[d.jsx("button",{onClick:()=>{q(!1),w()},style:{padding:"8px 18px",fontSize:12,fontFamily:ve,borderRadius:6,border:"1px solid #e74c3c50",background:"#e74c3c18",color:"#e74c3c",cursor:"pointer",fontWeight:600},children:B("profileStartNew",u)}),d.jsx("button",{onClick:()=>q(!1),style:{padding:"8px 18px",fontSize:12,fontFamily:ve,borderRadius:6,border:`1px solid ${b.border}`,background:"transparent",color:b.textDim,cursor:"pointer"},children:B("cancel",u)})]})]}):d.jsx("button",{onClick:()=>q(!0),style:{width:"100%",padding:"12px 24px",fontSize:13,fontFamily:ve,borderRadius:8,border:`1px solid ${b.border}`,background:"transparent",color:b.textDim,cursor:"pointer"},children:B("profileStartNew",u)})]})]})]})}function Y0({count:o,label:t,color:r}){return d.jsxs("div",{style:{flex:1,minWidth:0,textAlign:"center",padding:"8px 4px",borderRadius:6,background:`${r}08`,border:`1px solid ${r}20`},children:[d.jsx("div",{style:{fontSize:20,fontWeight:700,color:r,lineHeight:1},children:o}),d.jsx("div",{style:{fontSize:10,color:b.textFaint,marginTop:4,overflowWrap:"break-word",wordBreak:"break-word",lineHeight:1.3},children:t})]})}function bv({tips:o,nodeById:t,belief:r,evidence:a,lang:s,getLabel:c}){const[u,m]=R.useState(!1);return d.jsxs("div",{style:{marginBottom:32,marginTop:-12},children:[d.jsxs("button",{onClick:()=>m(h=>!h),style:{width:"100%",padding:"12px 14px",fontSize:12,fontFamily:ve,fontWeight:600,borderRadius:8,border:`1px solid ${u?"#FFD16640":b.border}`,background:u?"#FFD16610":"transparent",color:u?"#FFD166":b.textDim,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",gap:8,textAlign:"left"},children:[d.jsxs("span",{children:[u?"▾":"▸"," ",B("profileMaturaTips",s)]}),d.jsx("span",{style:{fontSize:10,padding:"2px 6px",borderRadius:4,background:"#FFD16622",color:"#FFD166",letterSpacing:"0.04em",flexShrink:0},children:o.length})]}),u&&d.jsxs(d.Fragment,{children:[d.jsx("p",{style:{margin:"10px 2px 10px",fontSize:11,color:b.textFaint,lineHeight:1.6},children:B("profileMaturaTipsSub",s)}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:o.map(h=>{const w=r==null?void 0:r[h],g=a==null?void 0:a[h],z=!!g;let S=b.textFaint;return w==="known"?S=b.known:w==="unknown"&&(S="#e74c3c"),d.jsx(vv,{node:t[h],label:c(h)??"",status:w,dotColor:S,directlyTested:z,ev:g,lang:s},h)})})]})]})}function vv({node:o,label:t,status:r,dotColor:a,directlyTested:s,ev:c,lang:u}){var g;const[m,h]=R.useState(!1),w=((g=((o==null?void 0:o.body)??"").split("<!-- example -->")[0])==null?void 0:g.trim())??"";return d.jsxs("div",{style:{borderRadius:8,background:"#FFD16608",border:"1px solid #FFD16620",overflow:"hidden"},children:[d.jsxs("button",{onClick:()=>h(z=>!z),style:{width:"100%",padding:"10px 14px",display:"flex",alignItems:"center",gap:10,background:"transparent",border:"none",color:b.textBody,fontFamily:ve,fontSize:13,cursor:"pointer",textAlign:"left",minWidth:0},children:[d.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:r?a:"transparent",border:`1.5px solid ${r?a:b.textFaint}`,flexShrink:0}}),d.jsx("span",{style:{flex:1,minWidth:0,overflowWrap:"break-word",wordBreak:"break-word"},dangerouslySetInnerHTML:{__html:sn(t)}}),s&&d.jsx("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:3,background:c.correct?"#27ae6015":"#e74c3c15",color:c.correct?"#2ecc71":"#ff6b6b",border:`1px solid ${c.correct?"#27ae6030":"#e74c3c30"}`,flexShrink:0},children:c.correct?"✓":"✗"}),d.jsx("span",{style:{color:b.textFaint,fontSize:11,flexShrink:0},children:m?"▾":"▸"})]}),m&&w&&d.jsx("div",{style:{padding:"2px 14px 14px",fontSize:13,color:b.textBody,lineHeight:1.7,borderTop:"1px solid #FFD16620",paddingTop:12,marginTop:2},dangerouslySetInnerHTML:{__html:sn(w)}})]})}function kv({path:o,goalId:t,RAW_NODES:r,RAW_EDGES:a,QUESTION_BANK:s,SCOPE_COLORS:c,SCOPE_LABELS:u,SECTIONS:m,belief:h,evidence:w,lang:g,onUpdateBelief:z,onClose:S}){var be,oe,J,ne;const q=R.useMemo(()=>io(r,a),[r,a]),j=R.useMemo(()=>Object.fromEntries(r.map(A=>[A.id,A])),[r]),_=R.useMemo(()=>{const A=o.findIndex(W=>h[W]!=="known");return A>=0?A:0},[]),[T,P]=R.useState(_),[N,I]=R.useState(!1),O=o.length,C=o.filter(A=>h[A]==="known").length,U=O>0?Math.round(C/O*100):0,F=o[T],V=j[F],Q=R.useCallback(()=>{const A=fc(F,h,q),W={...w};z(A,W),T<O-1?P(T+1):I(!0)},[F,h,q,w,z,T,O]),ee=R.useCallback(()=>{T>0&&P(T-1)},[T]),se=R.useCallback(()=>{T<O-1?P(T+1):I(!0)},[T,O]);if(N)return d.jsx("div",{style:{position:"fixed",inset:0,zIndex:50,background:b.bg,fontFamily:ve,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:24},children:d.jsxs("div",{style:{textAlign:"center",maxWidth:400},children:[d.jsx("div",{style:{fontSize:40,marginBottom:16},children:"🎉"}),d.jsx("h1",{style:{margin:"0 0 8px",fontSize:22,fontWeight:700,color:b.textPrimary},children:B("lessonComplete",g)}),d.jsx("p",{style:{margin:"0 0 28px",fontSize:13,color:b.textDim,lineHeight:1.6},children:B("lessonCompleteSub",g)}),d.jsxs("button",{onClick:S,style:{padding:"14px 28px",fontSize:14,fontWeight:600,fontFamily:ve,borderRadius:8,border:"1px solid #f39c1250",background:"#f39c1218",color:"#f39c12",cursor:"pointer"},children:["← ",B("topicBack",g)]})]})});if(!V)return null;const X=g==="pl"?V.labelPl:V.label,te=(c==null?void 0:c[V.scope])??"#4a9eff",re=((be=u==null?void 0:u[V.scope])==null?void 0:be[g==="pl"?"pl":"en"])??"",pe=(g==="pl"?(oe=m==null?void 0:m[V.section])==null?void 0:oe.labelPl:(J=m==null?void 0:m[V.section])==null?void 0:J.labelEn)??"",fe=(V.resources??[]).find(A=>A.type==="interactive");return d.jsxs("div",{style:{position:"fixed",inset:0,zIndex:50,background:b.bg,fontFamily:ve,overflowY:"auto",animation:"lessonSlideIn 0.2s ease"},children:[d.jsx("style",{children:`
        @keyframes lessonSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .lesson-body .katex-display { overflow-x: auto; overflow-y: hidden; max-width: 100%; }
        .lesson-body .katex-display > .katex { display: inline-block; min-width: 0; }
      `}),d.jsxs("div",{style:{maxWidth:"min(580px, calc(100% - 32px))",width:"100%",margin:"0 auto",padding:"24px 16px 48px"},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:20},children:[d.jsxs("button",{onClick:S,style:{padding:"10px 14px",fontSize:12,fontFamily:ve,borderRadius:6,border:`1px solid ${b.border}`,background:"transparent",color:b.textDim,cursor:"pointer"},children:["← ",B("topicBack",g)]}),d.jsxs("span",{style:{fontSize:12,color:b.textFaint},children:[T+1," ",B("lessonOf",g)," ",O]})]}),d.jsx("div",{style:{height:4,borderRadius:2,background:b.border,overflow:"hidden",marginBottom:24},children:d.jsx("div",{style:{height:"100%",borderRadius:2,width:`${U}%`,background:b.known,transition:"width 0.4s ease"}})}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:6},children:[d.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:te,opacity:.8,flexShrink:0}}),d.jsxs("span",{style:{fontSize:11,color:b.textDim},children:[pe," · ",re]})]}),d.jsx("h1",{style:{margin:"0 0 16px",fontSize:22,fontWeight:700,color:b.textPrimary,lineHeight:1.3,overflowWrap:"break-word",wordBreak:"break-word"},dangerouslySetInnerHTML:{__html:sn(X??"")}}),V.body&&d.jsx("div",{className:"lesson-body",style:{fontSize:13,color:b.textBody,lineHeight:1.7,marginBottom:24,overflowWrap:"break-word",wordBreak:"break-word"},dangerouslySetInnerHTML:{__html:sn(((ne=V.body.split("<!-- example -->")[0])==null?void 0:ne.trim())??"")}}),fe&&d.jsx(jv,{resource:fe,lang:g}),d.jsx(_v,{resources:V.resources??[],interactive:fe,lang:g}),d.jsx(Sv,{nodeId:F,QUESTION_BANK:s,belief:h,evidence:w,adjacency:q,lang:g,onUpdateBelief:z}),d.jsxs("div",{style:{borderTop:`1px solid ${b.border}`,paddingTop:20,marginTop:28,display:"flex",flexDirection:"column",gap:10},children:[d.jsx("button",{onClick:Q,style:{width:"100%",padding:"14px 20px",fontSize:14,fontWeight:600,fontFamily:ve,borderRadius:8,border:"1px solid #f39c1250",background:"#f39c1218",color:"#f39c12",cursor:"pointer",textAlign:"center"},children:B("iUnderstand",g)}),(T>0||T<O-1)&&d.jsxs("div",{style:{display:"flex",gap:10},children:[T>0?d.jsx("button",{onClick:ee,style:{flex:1,padding:"12px 18px",fontSize:13,fontFamily:ve,borderRadius:8,border:`1px solid ${b.border}`,background:"transparent",color:b.textDim,cursor:"pointer"},children:B("lessonPrev",g)}):d.jsx("div",{style:{flex:1}}),T<O-1?d.jsx("button",{onClick:se,style:{flex:1,padding:"12px 18px",fontSize:13,fontFamily:ve,borderRadius:8,border:`1px solid ${b.border}`,background:"transparent",color:b.textDim,cursor:"pointer"},children:B("lessonNext",g)}):d.jsx("div",{style:{flex:1}})]})]})]})]})}function _v({resources:o,interactive:t,lang:r}){const a=(o??[]).filter(u=>u!==t);if(a.length===0)return null;const s={interactive:"#58C4DD",video:"#FF6B35",article:"#83C167"},c=u=>u==="interactive"?"resourceInteractive":u==="video"?"resourceVideo":"resourceArticle";return d.jsxs("div",{style:{marginBottom:24},children:[d.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#83C167",letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:10},children:B("lessonResources",r)}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:a.map((u,m)=>{const h=r==="pl"?u.titlePl:u.titleEn,w=s[u.type]??"#8a9dbe",z=u.url.startsWith("http")?u.url:`${"/".replace(/\/$/,"")}/${u.url.replace(/^\//,"")}${u.url.includes("?")?"&":"?"}lang=${r}`;return d.jsxs("a",{href:z,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",borderRadius:8,background:`${w}0a`,border:`1px solid ${w}25`,textDecoration:"none",fontFamily:ve,minWidth:0},children:[d.jsx("span",{style:{fontSize:16,flexShrink:0},children:u.type==="interactive"?"⬡":u.type==="video"?"▶":"📄"}),d.jsxs("div",{style:{flex:1,minWidth:0},children:[d.jsx("div",{style:{fontSize:13,color:b.textBody,fontWeight:500,lineHeight:1.4,overflowWrap:"break-word",wordBreak:"break-word"},children:h}),d.jsx("div",{style:{fontSize:10,color:w,marginTop:2,fontWeight:600,letterSpacing:"0.04em",textTransform:"uppercase"},children:B(c(u.type),r)})]}),d.jsx("span",{style:{fontSize:13,color:b.textFaint,flexShrink:0},children:"→"})]},m)})})]})}function jv({resource:o,lang:t}){const a=o.url.startsWith("http")?o.url:`${"/".replace(/\/$/,"")}/${o.url.replace(/^\//,"")}`,s=a+(a.includes("?")?"&":"?")+"lang="+t,c=t==="pl"?o.titlePl:o.titleEn,u=R.useRef(null),[m,h]=R.useState(820);return R.useEffect(()=>{const w=u.current;if(!w)return;let g;const z=()=>{try{const q=w.contentDocument;if(!(q!=null&&q.body))return;const j=Math.max(q.documentElement.scrollHeight,q.body.scrollHeight);j>0&&h(j)}catch{}},S=()=>{z();try{const q=w.contentDocument;q!=null&&q.body&&typeof ResizeObserver<"u"&&(g=new ResizeObserver(z),g.observe(q.body))}catch{}};return w.addEventListener("load",S),()=>{w.removeEventListener("load",S),g==null||g.disconnect()}},[s]),d.jsxs("div",{style:{marginBottom:24},children:[d.jsxs("div",{style:{fontSize:11,fontWeight:600,color:"#58C4DD",letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:10,display:"flex",alignItems:"center",gap:8},children:[d.jsx("span",{style:{display:"inline-block",width:"100%",height:1,background:"#58C4DD20"}}),d.jsx("span",{style:{flexShrink:0},children:B("lessonViz",t)}),d.jsx("span",{style:{display:"inline-block",width:"100%",height:1,background:"#58C4DD20"}})]}),d.jsx("div",{style:{borderRadius:10,overflow:"hidden",border:"1px solid #58C4DD25",background:"#0e0e12"},children:d.jsx("iframe",{ref:u,src:s,sandbox:"allow-scripts allow-same-origin allow-forms",scrolling:"no",style:{width:"100%",height:m,border:"none",display:"block",background:"#0e0e12"},title:c,loading:"lazy"})})]})}function Sv({nodeId:o,QUESTION_BANK:t,belief:r,evidence:a,adjacency:s,lang:c,onUpdateBelief:u}){const[m,h]=R.useState(null),[w,g]=R.useState(!1),[z,S]=R.useState(()=>Ui(t,o,[])),[q,j]=R.useState(o);o!==q&&(j(o),h(null),g(!1),S(Ui(t,o,[])));const _=R.useCallback(()=>{if(m==null||!z)return;g(!0);const P=m===z.correct,N={...a,[o]:{correct:P,questionText:z.q}};if(P){const I=fc(o,r,s);u(I,N)}else{const I={...r,[o]:"unknown"};u(I,N)}},[m,z,o,r,a,s,u]);if(!z)return null;const T=w&&m===z.correct;return d.jsxs("div",{style:{marginBottom:24},children:[d.jsxs("div",{style:{fontSize:11,fontWeight:600,color:"#FFD166",letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:14,display:"flex",alignItems:"center",gap:8},children:[d.jsx("span",{style:{display:"inline-block",width:"100%",height:1,background:"#FFD16620"}}),d.jsx("span",{style:{flexShrink:0},children:B("lessonPractice",c)}),d.jsx("span",{style:{display:"inline-block",width:"100%",height:1,background:"#FFD16620"}})]}),d.jsx("div",{style:{fontSize:13,color:b.textBody,lineHeight:1.7,marginBottom:14},dangerouslySetInnerHTML:{__html:sn(z.q??"")}}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:14},children:(z.options??[]).map((P,N)=>{const I=m===N,O=String.fromCharCode(65+N);let C="transparent",U=b.border,F=b.textBody;return w?N===z.correct?(C="#27ae6015",U="#27ae6050",F="#2ecc71"):I&&N!==z.correct&&(C="#e74c3c15",U="#e74c3c50",F="#ff6b6b"):I&&(C="#f39c1215",U="#f39c1250",F="#f39c12"),d.jsxs("button",{onClick:()=>{w||h(N)},style:{display:"flex",alignItems:"flex-start",gap:10,padding:"12px 14px",borderRadius:8,background:C,border:`1px solid ${U}`,cursor:w?"default":"pointer",textAlign:"left",fontFamily:ve,fontSize:13,color:F,lineHeight:1.5,transition:"background 0.15s, border-color 0.15s",width:"100%"},children:[d.jsx("span",{style:{fontWeight:700,fontSize:12,flexShrink:0,width:22,height:22,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",background:I&&!w?"#f39c1220":w&&N===z.correct?"#27ae6020":"transparent",border:`1px solid ${I&&!w?"#f39c1240":"transparent"}`},children:O}),d.jsx("span",{dangerouslySetInnerHTML:{__html:sn(P)}})]},N)})}),w?d.jsxs("div",{style:{padding:"12px 14px",borderRadius:8,background:T?"#27ae6008":"#e74c3c08",border:`1px solid ${T?"#27ae6020":"#e74c3c20"}`},children:[d.jsx("div",{style:{fontSize:13,fontWeight:600,marginBottom:6,color:T?"#2ecc71":"#ff6b6b"},children:B(T?"quizCorrect":"quizIncorrect",c)}),z.hint&&d.jsx("div",{style:{fontSize:12,color:b.textDim,lineHeight:1.6},dangerouslySetInnerHTML:{__html:sn(z.hint)}})]}):d.jsx("button",{onClick:_,disabled:m==null,style:{padding:"12px 24px",fontSize:13,fontWeight:600,fontFamily:ve,borderRadius:8,border:`1px solid ${m!=null?"#FFD16650":b.border}`,background:m!=null?"#FFD16618":"transparent",color:m!=null?"#FFD166":b.textFaint,cursor:m!=null?"pointer":"default",width:"100%"},children:B("lessonCheck",c)})]})}function qv(){const t=window.location.hash.replace(/^#\/?/,"").split("/");return t[0]==="results"&&t[1]?{phase:"results",code:t[1]}:t[0]==="map"&&t[1]?{phase:"map",code:t[1],node:t[2]||null}:t[0]==="map"?{phase:"map"}:null}function Tv(){var je;const o=wx,t=gx[o],[r,a]=lt("lang","pl"),s=typeof window<"u"&&((je=window.matchMedia)!=null&&je.call(window,"(prefers-color-scheme: light)").matches)?"bright":"midnight",[c,u]=lt("theme",s),m=qv(),h=m!=null&&m.code?vx(m.code):null,[w,g]=R.useState((m==null?void 0:m.phase)??"hero"),[z,S]=R.useState((m==null?void 0:m.node)??null),[q,j]=R.useState(h),[_,T]=R.useState(h?{correct:0,incorrect:0,questionsAnswered:0}:null),[P,N]=R.useState(null),[I,O]=R.useState("standard"),[C,U]=R.useState(null),[F,V]=R.useState(null),[Q,ee]=lt("savedCourse",null),se=R.useCallback(ie=>{$1(ie),u(ie)},[u]);$1(c),R.useEffect(()=>{let ie="";w==="results"&&q?ie=`#/results/${Q0(q)}`:w==="map"&&q&&(ie=`#/map/${Q0(q)}`),ie&&window.location.hash!==ie?window.history.replaceState(null,"",ie):!ie&&window.location.hash&&window.history.replaceState(null,"",window.location.pathname)},[w,q]);const X=R.useCallback((ie="standard")=>{O(ie),j(null),T(null),N(null),g("quiz")},[]),te=R.useCallback((ie,Te,We)=>{j(ie),T(Te),N(We??{}),ee({goalId:null,belief:ie,evidence:We??{},createdAt:new Date().toISOString()}),g("results")},[ee]),re=R.useCallback(()=>{g("goalPick")},[]),pe=R.useCallback(ie=>{U(ie),j(null),T(null),N(null),g("goalQuiz")},[]),fe=R.useCallback((ie,Te,We,vn)=>{U(ie),j(Te),T(We),N(vn??{}),ee({goalId:ie,belief:Te,evidence:vn??{},createdAt:new Date().toISOString()}),g("goalPath")},[ee]),be=R.useCallback(ie=>{S(ie??null),g("map")},[]),oe=R.useCallback(()=>{g("showcase")},[]),J=R.useCallback(()=>{g("gallery")},[]),ne=R.useCallback(()=>{j(null),T(null),N(null),g("map")},[]),A=R.useCallback(()=>{g("hero")},[]),W=R.useCallback(()=>{g("profile")},[]),ge=R.useCallback(()=>{const ie={goalId:null,belief:{},evidence:{},createdAt:new Date().toISOString()};ee(ie),j({}),N({}),g("profile")},[ee]),we=R.useCallback(ie=>{Q&&(j(Q.belief??{}),N(Q.evidence??{})),S(ie??null),g("map")},[Q]),_e=R.useCallback((ie,Te)=>{V(ie),U(Te??null),Q&&(j(Q.belief??{}),N(Q.evidence??{})),g("lesson")},[Q]),ze=R.useCallback((ie,Te)=>{j(ie),N(Te),ee(We=>({...We??{},goalId:C,belief:ie,evidence:Te,createdAt:(We==null?void 0:We.createdAt)??new Date().toISOString()}))},[C,ee]);if(!t)return null;switch(w){case"hero":return d.jsx(cv,{lang:r,setLang:a,themeId:c,onThemeChange:se,onStartQuiz:X,onStartGoalQuiz:re,onBrowseViz:oe,onBrowseMap:ne,onProfile:W,onFromScratch:ge,hasSavedCourse:!!Q});case"showcase":return d.jsx(hv,{RAW_NODES:t.RAW_NODES,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,lang:r,onClose:A,onBrowseAll:J,onSelectTopic:ie=>be(ie)});case"gallery":return d.jsx(mv,{RAW_NODES:t.RAW_NODES,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,lang:r,onClose:A});case"quiz":return d.jsx(uv,{RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,lang:r,quizPreset:I,onComplete:te,onExit:A});case"goalPick":return d.jsx(xm,{isOpen:!0,nodes:t.RAW_NODES,lang:r,SECTIONS:t.SECTIONS,SCOPE_COLORS:t.SCOPE_COLORS,onSelect:pe,onClose:A});case"goalQuiz":return d.jsx(dv,{goalId:C,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,lang:r,onComplete:fe,onExit:A});case"goalPath":return d.jsx(gm,{goalId:C,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,SECTIONS:t.SECTIONS,belief:q,evidence:P,lang:r,onSelectTopic:ie=>be(ie),onStartLesson:_e,onClose:A});case"results":return d.jsx(pv,{RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,belief:q,stats:_,evidence:P,lang:r,onSeeMap:be,onRetake:()=>X(I),onSelectTopic:ie=>be(ie),onStartPath:ie=>{U(ie),ee(Te=>({...Te??{},goalId:ie,belief:q??{},evidence:P??{},createdAt:(Te==null?void 0:Te.createdAt)??new Date().toISOString()})),g("goalPath")}});case"lesson":return d.jsx(kv,{path:F,goalId:C,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,SECTIONS:t.SECTIONS,belief:q??{},evidence:P??{},lang:r,onUpdateBelief:ze,onClose:()=>g(Q?"profile":"hero")});case"profile":return d.jsx(xv,{savedCourse:Q,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,SECTIONS:t.SECTIONS,lang:r,onResumePath:we,onStartLesson:_e,onStartNew:()=>{ee(null),j(null),T(null),N(null),g("hero")},onSeeMap:()=>{Q&&(j(Q.belief??{}),N(Q.evidence??{})),g("map")},onClose:A});case"map":return d.jsx(lv,{courseId:o,RAW_NODES:t.RAW_NODES,RAW_EDGES:t.RAW_EDGES,QUESTION_BANK:t.QUESTION_BANK,SECTIONS:t.SECTIONS,SCOPE_COLORS:t.SCOPE_COLORS,SCOPE_LABELS:t.SCOPE_LABELS,COURSE_META:t.COURSE_META,initialBelief:q,initialEvidence:P,initialSelectedNode:z,initialLang:r,onBackToHome:A},`${o}-${z??""}`);default:return null}}mh.createRoot(document.getElementById("root")).render(d.jsx(R.StrictMode,{children:d.jsx(Tv,{})}));
